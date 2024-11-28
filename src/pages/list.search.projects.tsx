import React, { type FC } from 'react';
import { createFileRoute } from '@umijs/tnf/router';
import { Card, Form, List, Typography } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AvatarList from '@/components/AvatarList';
import StandardFormRow from '@/components/StandardFormRow';
import TagSelect from '@/components/TagSelect';
import { queryFakeList } from '@/services/ant-design-pro/api';
import type { ListItemDataType } from '@/types';
import useStyles from './list.search.projects.style';

dayjs.extend(relativeTime);

const categoryOptions = Array.from({ length: 12 }).map((_, index) => ({
  value: `cat${index + 1}`,
  label: `类目${index + 1}`,
}));

const FormItem = Form.Item;
const { Paragraph } = Typography;
const getKey = (id: string, index: number) => `${id}-${index}`;
const Projects: FC = () => {
  const { styles } = useStyles();
  const { data } = Route.useLoaderData();
  const list = data?.list || [];
  const cardList = list && (
    <List<ListItemDataType>
      rowKey="id"
      // loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card
            className={styles.card}
            hoverable
            cover={<img alt={item.title} src={item.cover} />}
          >
            <Card.Meta
              title={<a>{item.title}</a>}
              description={
                <Paragraph
                  ellipsis={{
                    rows: 2,
                  }}
                >
                  {item.subDescription}
                </Paragraph>
              }
            />
            <div className={styles.cardItemContent}>
              <span>{dayjs(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size="small">
                  {item.members.map((member, i) => (
                    <AvatarList.Item
                      key={getKey(item.id, i)}
                      src={member.avatar}
                      tips={member.name}
                    />
                  ))}
                </AvatarList>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
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
  return (
    <div className={styles.coverCardList}>
      <Card bordered={false}>
        <Form
          layout="inline"
          onValuesChange={(_, values) => {
            // 表单项变化时请求数据
            // 模拟查询表单生效
          }}
        >
          <StandardFormRow
            title="所属类目"
            block
            style={{
              paddingBottom: 11,
            }}
          >
            <Form.Item name="category">
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
            </Form.Item>
          </StandardFormRow>
        </Form>
      </Card>
      <div className={styles.cardList}>{cardList}</div>
    </div>
  );
};

export const Route = createFileRoute('/list/search/projects')({
  component: Projects,
  loader: async () => await queryFakeList({ count: 8 }),
});
