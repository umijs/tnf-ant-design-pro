import { Link, Outlet, useLocation, useNavigate } from '@umijs/tnf/router';
import { LogoutOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import { Footer, Question } from '../';
import { outLogin } from '../../services/api';
import Exception from './Exception';
import './Layout.css';
import LogoIcon from './Logo';
import SelectLang from './SelectLang';
import { patchRoutes } from './patchRoutes';
import route from './routes';

const loginPath = '/user/login';

const isLoginPath = (pathname: string) => {
  return pathname.toLowerCase().includes(loginPath);
};
// 格式化路由 处理因 wrapper 导致的 菜单 path 不一致
const mapRoutes = (routes: any[]) => {
  if (routes.length === 0) {
    return [];
  }
  return routes.map((route) => {
    // 需要 copy 一份, 否则会污染原始数据
    const newRoute = { ...route };
    if (route.originPath) {
      newRoute.path = route.originPath;
    }

    if (Array.isArray(route.routes)) {
      newRoute.routes = mapRoutes(route.routes);
      newRoute.children = mapRoutes(route.routes);
    }

    return newRoute;
  });
};

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (isLoginPath(location.pathname)) {
    return <Outlet />;
  }

  const userConfig = {
    locale: false,
    navTheme: 'light',
    colorPrimary: '#1890ff',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    title: 'Ant Design Pro',
    pwa: true,
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    iconfontUrl: '',
    token: {},
  };
  const formatMessage = undefined;
  const runtimeConfig = {
    actionsRender: () => [
      <Question key="doc" />,
      <SelectLang key="SelectLang" />,
    ],
    footerRender: () => <Footer />,
    onPageChange: () => {
      // FIXME: userInfo
      const userInfo = localStorage.getItem('tnf-ant-design-pro');
      // 如果没有登录，重定向到 login
      if (!userInfo && !isLoginPath(location.pathname)) {
        navigate({ to: loginPath });
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: [],
    menuHeaderRender: undefined,
  };

  const loginOut = async () => {
    await outLogin();

    const { search, pathname } = window.location;
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      navigate({
        replace: true,
        to: '/user/login',
        search: new URLSearchParams({
          redirect: pathname + search,
        }).toString(),
      });
    }
  };

  patchRoutes({ routes: route });

  return (
    <ProLayout
      route={{
        path: '/',
        children: mapRoutes(route),
      }}
      location={location}
      title={userConfig.title || 'ant-design-pro'}
      navTheme="light"
      siderWidth={256}
      onMenuHeaderClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate({ to: '/' });
      }}
      formatMessage={formatMessage}
      menu={{ locale: false }}
      logo={<LogoIcon />}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            // handle wildcard route path, for example /slave/* from qiankun
            <Link
              to={menuItemProps.path.replace('/*', '')}
              target={menuItemProps.target}
            >
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
      itemRender={(route, _, routes) => {
        const { breadcrumbName, title, path } = route;
        const label = title || breadcrumbName;
        const last = routes[routes.length - 1];
        if (last) {
          if (last.path === path) {
            return <span>{label}</span>;
          }
        }
        return <Link to={path}>{label}</Link>;
      }}
      layout="mix"
      // siderMenuType="group"
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: 'admin',
        render: (props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                    onClick: loginOut,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      fixSiderbar
      fixedHeader
      {...runtimeConfig}
    >
      <Exception route={route}>
        <Outlet />
      </Exception>
    </ProLayout>
  );
};
