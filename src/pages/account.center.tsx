import React, { useRef, useState } from 'react';
import {
  Outlet,
  createFileRoute,
  useLocation,
  useNavigate,
} from '@umijs/tnf/router';
import {
  ClusterOutlined,
  ContactsOutlined,
  HomeOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Avatar, Card, Col, Divider, Input, Row, Tag } from 'antd';
import type { InputRef } from 'antd';
import { createStyles } from 'antd-style';
import { queryAccountCenterCurrent } from '../services/api';
import type { CurrentUser, TagType } from '../types';

const useStyles = createStyles(({ token }) => {
  return {
    avatarHolder: {
      marginBottom: '24px',
      textAlign: 'center',
      '& > img': { width: '104px', height: '104px', marginBottom: '20px' },
    },
    name: {
      marginBottom: '4px',
      color: token.colorTextHeading,
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '28px',
    },
    detail: {
      p: {
        position: 'relative',
        marginBottom: '8px',
        paddingLeft: '26px',
        '&:last-child': {
          marginBottom: '0',
        },
      },
      i: {
        position: 'absolute',
        top: '4px',
        left: '0',
        width: '14px',
        height: '14px',
      },
    },
    tagsTitle: {
      marginBottom: '12px',
      color: token.colorTextHeading,
      fontWeight: '500',
    },
    teamTitle: {
      marginBottom: '12px',
      color: token.colorTextHeading,
      fontWeight: '500',
    },
    tags: {
      '.ant-tag': { marginBottom: '8px' },
    },
    team: {
      '.ant-avatar': { marginRight: '12px' },
      a: {
        display: 'block',
        marginBottom: '24px',
        overflow: 'hidden',
        color: token.colorText,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
        transition: 'color 0.3s',
        '&:hover': {
          color: token.colorPrimary,
        },
      },
    },
    tabsCard: {
      '.ant-card-head': { padding: '0 16px' },
    },
  };
});

const operationTabList = [
  {
    key: 'articles',
    tab: (
      <span>
        文章{' '}
        <span
          style={{
            fontSize: 14,
          }}
        >
          (8)
        </span>
      </span>
    ),
  },
  {
    key: 'applications',
    tab: (
      <span>
        应用{' '}
        <span
          style={{
            fontSize: 14,
          }}
        >
          (8)
        </span>
      </span>
    ),
  },
  {
    key: 'projects',
    tab: (
      <span>
        项目{' '}
        <span
          style={{
            fontSize: 14,
          }}
        >
          (8)
        </span>
      </span>
    ),
  },
];
const TagList: React.FC<{
  tags: CurrentUser['tags'];
}> = ({ tags }) => {
  const { styles } = useStyles();
  const ref = useRef<InputRef | null>(null);
  const [newTags, setNewTags] = useState<TagType[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const showInput = () => {
    setInputVisible(true);
    if (ref.current) {
      // eslint-disable-next-line no-unused-expressions
      ref.current?.focus();
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    let tempsTags = [...newTags];
    if (
      inputValue &&
      tempsTags.filter((tag) => tag.label === inputValue).length === 0
    ) {
      tempsTags = [
        ...tempsTags,
        {
          key: `new-${tempsTags.length}`,
          label: inputValue,
        },
      ];
    }
    setNewTags(tempsTags);
    setInputVisible(false);
    setInputValue('');
  };
  return (
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>标签</div>
      {(tags || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {inputVisible && (
        <Input
          ref={ref}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{
            borderStyle: 'dashed',
          }}
        >
          <PlusOutlined />
        </Tag>
      )}
    </div>
  );
};
const Center: React.FC = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let tabActiveKey = pathname.split('/').pop() as string;

  //  获取用户信息
  const { data: currentUser } = Route.useLoaderData();

  //  渲染用户信息
  const renderUserInfo = ({
    title,
    group,
    geographic,
  }: Partial<CurrentUser>) => {
    return (
      <div className={styles.detail}>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {title}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {group}
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          {
            (
              geographic || {
                province: {
                  label: '',
                },
              }
            ).province.label
          }
          {
            (
              geographic || {
                city: {
                  label: '',
                },
              }
            ).city.label
          }
        </p>
      </div>
    );
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card
            bordered={false}
            style={{
              marginBottom: 24,
            }}
          >
            {currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={currentUser.avatar} />
                  <div className={styles.name}>{currentUser.name}</div>
                  <div>{currentUser?.signature}</div>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <TagList tags={currentUser.tags || []} />
                <Divider
                  style={{
                    marginTop: 16,
                  }}
                  dashed
                />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>团队</div>
                  <Row gutter={36}>
                    {currentUser.notice &&
                      currentUser.notice.map((item) => (
                        <Col key={item.id} lg={24} xl={12}>
                          <a href={item.href}>
                            <Avatar size="small" src={item.logo} />
                            {item.member}
                          </a>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabActiveKey}
            onTabChange={(_tabKey: string) => {
              tabActiveKey = _tabKey;
              switch (_tabKey) {
                case 'articles':
                  navigate({ to: '/account/center/articles' });
                  break;
                case 'applications':
                  navigate({ to: '/account/center/applications' });
                  break;
                case 'projects':
                  navigate({ to: '/account/center/projects' });
                  break;
                default:
                  break;
              }
            }}
          >
            <Outlet />
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};

export const Route = createFileRoute('/account/center')({
  component: Center,
  loader: queryAccountCenterCurrent,
});
