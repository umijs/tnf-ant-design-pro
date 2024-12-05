import { createFileRoute } from '@umijs/tnf/router';
import { Card, List } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AvatarList from '@/components/Account/Center/AvatarList';
import { queryFakeList } from '@/services/api';
import type { ListItemDataType } from '@/types';
import useStyles from './account.center.projects.style';

dayjs.extend(relativeTime);

const Projects: React.FC = () => {
  const { styles } = useStyles();
  const { data } = Route.useLoaderData();
  return (
    <List<ListItemDataType>
      className={styles.coverCardList}
      rowKey="id"
      grid={{
        gutter: 24,
        xxl: 3,
        xl: 2,
        lg: 2,
        md: 2,
        sm: 2,
        xs: 1,
      }}
      dataSource={data?.list || []}
      renderItem={(item) => (
        <List.Item>
          <Card
            className={styles.card}
            hoverable
            cover={<img alt={item.title} src={item.cover} />}
          >
            <Card.Meta
              title={<a>{item.title}</a>}
              description={item.subDescription}
            />
            <div className={styles.cardItemContent}>
              <span>{dayjs(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size="small">
                  {item.members.map((member) => (
                    <AvatarList.Item
                      key={`${item.id}-avatar-${member.id}`}
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
};

export const Route = createFileRoute('/account/center/projects')({
  component: Projects,
  loader: () => queryFakeList({ count: 30 }),
});
