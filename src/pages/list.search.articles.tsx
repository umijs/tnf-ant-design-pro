import type { FC } from 'react';
import React, { useMemo } from 'react';
import { Await, createFileRoute, defer } from '@umijs/tnf/router';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Card, Form, List, Select, Spin, Tag } from 'antd';
import type { DefaultOptionType } from 'antd/es/select';
import ArticleListContent from '@/components/ArticleListContent';
import StandardFormRow from '@/components/StandardFormRow';
import TagSelect from '@/components/TagSelect';
import { queryFakeList } from '@/services/ant-design-pro/api';
import type { ListItemDataType } from '@/types';
import useStyles from './list.search.articles.style';

const categoryOptions = Array.from({ length: 12 }).map((_, index) => ({
  value: `cat${index + 1}`,
  label: `类目${index + 1}`,
}));

const FormItem = Form.Item;

const pageSize = 5;

const Articles: FC = () => {
  const { deferredSlowData } = Route.useLoaderData();
  return (
    <Await promise={deferredSlowData} fallback={<Spin />}>
      {({ data }) => {
        const [form] = Form.useForm();
        const { styles } = useStyles();
        const list = data?.list || [];

        const setOwner = () => {
          form.setFieldsValue({
            owner: ['wzj'],
          });
        };

        const owners = [
          {
            id: 'wzj',
            name: '我自己',
          },
          {
            id: 'wjh',
            name: '吴家豪',
          },
          {
            id: 'zxx',
            name: '周星星',
          },
          {
            id: 'zly',
            name: '赵丽颖',
          },
          {
            id: 'ym',
            name: '姚明',
          },
        ];

        const IconText: React.FC<{
          type: string;
          text: React.ReactNode;
        }> = ({ type, text }) => {
          switch (type) {
            case 'star-o':
              return (
                <span>
                  <StarOutlined style={{ marginRight: 8 }} />
                  {text}
                </span>
              );
            case 'like-o':
              return (
                <span>
                  <LikeOutlined style={{ marginRight: 8 }} />
                  {text}
                </span>
              );
            case 'message':
              return (
                <span>
                  <MessageOutlined style={{ marginRight: 8 }} />
                  {text}
                </span>
              );
            default:
              return null;
          }
        };

        const formItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
            },
            sm: {
              span: 16,
            },
          },
        };
        const loadMoreDom = list.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <Button
              onClick={() => {}}
              style={{ paddingLeft: 48, paddingRight: 48 }}
            ></Button>
          </div>
        );

        const ownerOptions = useMemo<DefaultOptionType[]>(
          () =>
            owners.map((item) => ({
              label: item.name,
              value: item.id,
            })),
          [owners],
        );

        return (
          <>
            <Card bordered={false}>
              <Form
                layout="inline"
                form={form}
                initialValues={{
                  owner: ['wjh', 'zxx'],
                }}
                onValuesChange={() => {}}
              >
                <StandardFormRow
                  title="所属类目"
                  block
                  style={{ paddingBottom: 11 }}
                >
                  <FormItem name="category">
                    <TagSelect expandable>
                      {categoryOptions.map((category) => (
                        <TagSelect.Option
                          value={category.value!}
                          key={category.value}
                        >
                          {category.label}
                        </TagSelect.Option>
                      ))}
                    </TagSelect>
                  </FormItem>
                </StandardFormRow>
                <StandardFormRow title="owner" grid>
                  <FormItem name="owner" noStyle>
                    <Select
                      mode="multiple"
                      placeholder="选择 owner"
                      style={{ minWidth: '6rem' }}
                      options={ownerOptions}
                    />
                  </FormItem>
                  <a className={styles.selfTrigger} onClick={setOwner}>
                    只看自己的
                  </a>
                </StandardFormRow>
              </Form>
            </Card>
            <Card
              style={{ marginTop: 24 }}
              bordered={false}
              bodyStyle={{ padding: '8px 32px 32px 32px' }}
            >
              <List<ListItemDataType>
                size="large"
                // loading={loading}
                rowKey="id"
                itemLayout="vertical"
                // loadMore={loadMoreDom}
                dataSource={list}
                renderItem={(item) => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <IconText key="star" type="star-o" text={item.star} />,
                      <IconText key="like" type="like-o" text={item.like} />,
                      <IconText
                        key="message"
                        type="message"
                        text={item.message}
                      />,
                    ]}
                    extra={<div className={styles.listItemExtra} />}
                  >
                    <List.Item.Meta
                      title={
                        <a
                          className={styles.listItemMetaTitle}
                          href={item.href}
                        >
                          {item.title}
                        </a>
                      }
                      description={
                        <span>
                          <Tag>Ant Design</Tag>
                          <Tag>设计语言</Tag>
                          <Tag>蚂蚁金服</Tag>
                        </span>
                      }
                    />
                    <ArticleListContent data={item} />
                  </List.Item>
                )}
              />
            </Card>
          </>
        );
      }}
    </Await>
  );
};

export const Route = createFileRoute('/list/search/articles')({
  component: Articles,
  loader: () => {
    const slowDataPromise = queryFakeList({ count: pageSize });
    return {
      deferredSlowData: defer(slowDataPromise),
    };
  },
});
