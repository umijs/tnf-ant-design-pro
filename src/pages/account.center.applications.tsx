import { createFileRoute } from '@umijs/tnf/router';
import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Dropdown, List, type MenuProps, Tooltip } from 'antd';
import numeral from 'numeral';
import { queryAccountCenterFakeList } from '@/services/api';
import type { ListItemDataType } from '@/types';
import useStyles from './account.center.applications.style';

export function formatWan(val: number) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';
  let result: React.ReactNode = val;
  if (val > 10000) {
    result = (
      <span>
        {Math.floor(val / 10000)}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
}
const Applications: React.FC = () => {
  const { styles: stylesApplications } = useStyles();
  const { data } = Route.useLoaderData();

  const CardInfo: React.FC<{
    activeUser: React.ReactNode;
    newUser: React.ReactNode;
  }> = ({ activeUser, newUser }) => (
    <div className={stylesApplications.cardInfo}>
      <div>
        <p>活跃用户</p>
        <p>{activeUser}</p>
      </div>
      <div>
        <p>新增用户</p>
        <p>{newUser}</p>
      </div>
    </div>
  );
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '1st menu item',
    },
    {
      key: '2',
      label: '2nd menu item',
    },
  ];
  return (
    <List<ListItemDataType>
      rowKey="id"
      className={stylesApplications.filterCardList}
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
        <List.Item key={item.id}>
          <Card
            hoverable
            styles={{
              body: { paddingBottom: 20 },
            }}
            actions={[
              <Tooltip key="download" title="下载">
                <DownloadOutlined />
              </Tooltip>,
              <Tooltip title="编辑" key="edit">
                <EditOutlined />
              </Tooltip>,
              <Tooltip title="分享" key="share">
                <ShareAltOutlined />
              </Tooltip>,
              <Dropdown menu={{ items }} key="ellipsis">
                <EllipsisOutlined />
              </Dropdown>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar size="small" src={item.avatar} />}
              title={item.title}
            />
            <div>
              <CardInfo
                activeUser={formatWan(item.activeUser)}
                newUser={numeral(item.newUser).format('0,0')}
              />
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export const Route = createFileRoute('/account/center/applications')({
  component: Applications,
  loader: () => queryAccountCenterFakeList({ count: 30 }),
});
