import { createFileRoute } from '@umijs/tnf/router';
import { LikeOutlined, MessageFilled, StarTwoTone } from '@ant-design/icons';
import { List, Tag } from 'antd';
import ArticleListContent from '@/components/Account/Center/ArticleListContent';
import { queryFakeList } from '@/services/api';
import type { ListItemDataType } from '@/types';
import useStyles from './account.center.articles.style';

const Articles: React.FC = () => {
  const IconText: React.FC<{
    icon: React.ReactNode;
    text: React.ReactNode;
  }> = ({ icon, text }) => (
    <span>
      {icon} {text}
    </span>
  );

  const { styles } = useStyles();
  const { data } = Route.useLoaderData();

  return (
    <List<ListItemDataType>
      size="large"
      className={styles.articleList}
      rowKey="id"
      itemLayout="vertical"
      dataSource={data?.list || []}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <IconText key="star" icon={<StarTwoTone />} text={item.star} />,
            <IconText key="like" icon={<LikeOutlined />} text={item.like} />,
            <IconText
              key="message"
              icon={<MessageFilled />}
              text={item.message}
            />,
          ]}
        >
          <List.Item.Meta
            title={
              <a className={styles.listItemMetaTitle} href={item.href}>
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
  );
};

export const Route = createFileRoute('/account/center/articles')({
  component: Articles,
  loader: () => queryFakeList({ count: 30 }),
});
