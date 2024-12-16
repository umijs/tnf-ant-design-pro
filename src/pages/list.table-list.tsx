import React, { useEffect, useRef, useState } from 'react';
import { Link, createFileRoute } from '@umijs/tnf/router';
import { PlusOutlined } from '@ant-design/icons';
import type {
  ActionType,
  FormInstance,
  ProColumns,
  ProDescriptionsItemProps,
} from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Input, message } from 'antd';
import { z } from 'zod';
import type { FormValueType } from '../components/UpdateForm';
import UpdateForm from '../components/UpdateForm';
import useRules from '../hooks/useRules';
import { addRule, removeRule, rule, updateRule } from '../services/api';

const PAGE_SIZE = 5;

const handleAction = async (
  action: () => Promise<void>,
  loadingMessage: string,
  successMessage: string,
  errorMessage: string,
) => {
  const hide = message.loading(loadingMessage);
  try {
    await action();
    hide();
    message.success(successMessage);
    return true;
  } catch {
    hide();
    message.error(errorMessage);
    return false;
  }
};

const handleAdd = async (fields: API.RuleListItem) => {
  return handleAction(
    async () => {
      await addRule({ ...fields });
    },
    '正在添加',
    'Added successfully',
    'Adding failed, please try again!',
  );
};

const handleUpdate = async (fields: FormValueType) => {
  return handleAction(
    async () => {
      await updateRule({
        name: fields.name,
        desc: fields.desc,
        key: fields.key,
      });
    },
    'Configuring',
    'Configuration is successful',
    'Configuration failed, please try again!',
  );
};

const handleRemove = async (selectedRows: API.RuleListItem[]) => {
  if (!selectedRows) return true;
  return handleAction(
    async () => {
      await removeRule({ key: selectedRows.map((row) => row.key) });
    },
    '正在删除',
    'Deleted successfully and will refresh soon',
    'Delete failed, please try again',
  );
};

const searchSchema = z.object({
  current: z.number().optional(),
  pageSize: z.number().optional(),
  name: z.string().optional(),
  desc: z.string().optional(),
  callNo: z.string().optional(),
  status: z.enum(['0', '1', '2', '3']).optional(),
  updatedAt: z.string().optional(),
});
type SearchParams = z.infer<typeof searchSchema>;

const TableList: React.FC = () => {
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance>();
  const [currentRow, setCurrentRow] = useState<API.RuleListItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([]);

  const { data, total, search, navigate } = useRules();

  const handleNavigate = (params: SearchParams) => {
    navigate({
      to: '/list/table-list',
      search: { ...search, ...params },
    });
  };

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
      render: (dom, entity) => (
        <a
          onClick={() => {
            setCurrentRow(entity);
            setShowDetail(true);
          }}
        >
          {dom}
        </a>
      ),
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      hideInForm: true,
      renderText: (val: string) => `${val}${'万'}`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '运行中',
          status: 'Processing',
        },
        2: {
          text: '已上线',
          status: 'Success',
        },
        3: {
          text: '异常',
          status: 'Error',
        },
      },
    },
    {
      title: '上次调度时间',
      sorter: true,
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        const status = form.getFieldValue('status');
        if (`${status}` === '0') {
          return false;
        }
        if (`${status}` === '3') {
          return <Input {...rest} placeholder={'请输入异常原因！'} />;
        }
        return defaultRender(item);
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          配置
        </a>,
        <a key="subscribeAlert" href="https://procomponents.ant.design/">
          订阅警报
        </a>,
      ],
    },
  ];

  useEffect(() => {
    formRef?.current.setFieldsValue(search);
  }, [formRef, search]);

  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        formRef={formRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        dataSource={data}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
        pagination={{
          total,
          current: search.current || 1,
          pageSize: search.pageSize || PAGE_SIZE,
          onChange: (current, size) =>
            handleNavigate({ current, pageSize: size }),
          itemRender: (page, type, originalElement) => {
            if (type === 'page') {
              return (
                <Link
                  to="/list/table-list"
                  search={{
                    current: page || 1,
                    pageSize: search.pageSize || PAGE_SIZE,
                  }}
                >
                  {page}
                </Link>
              );
            }
            return originalElement;
          },
        }}
        onSubmit={handleNavigate}
        onReset={() => handleNavigate({ current: 1, pageSize: PAGE_SIZE })}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计{' '}
                {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)}{' '}
                万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={'新建规则'}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.RuleListItem);
          if (success) {
            handleModalOpen(false);
            navigate({
              to: '/list/table-list',
              search: { current: 1, pageSize: PAGE_SIZE },
            });
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: '规则名称为必填项',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            navigate({
              to: '/list/table-list',
              search: { current: 1, pageSize: PAGE_SIZE },
            });
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalOpen={updateModalOpen}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export const Route = createFileRoute('/list/table-list')({
  component: TableList,
  loader: ({ deps }) => rule(deps),
  validateSearch: searchSchema,
  loaderDeps: ({
    search: { current, pageSize, name, desc, callNo, status, updatedAt },
  }) => ({
    current: current || 1,
    pageSize: pageSize || PAGE_SIZE,
    name,
    desc,
    callNo,
    status,
    updatedAt,
  }),
});
