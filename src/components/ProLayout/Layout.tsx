import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from '@umijs/tnf/router';
import { ProLayout } from '@ant-design/pro-components';
import { Footer, Question } from '../';
import Exception from './Exception';
import './Layout.css';
import Logo from './Logo';
import { patchRoutes } from './patchRoutes';
import { getRightRenderContent } from './rightRender';
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

export default (props: any) => {
  const location = useLocation();
  if (isLoginPath(location.pathname)) {
    return <Outlet />;
  }
  const navigate = useNavigate();
  const initialInfo = {
    initialState: undefined,
    loading: false,
    setInitialState: null,
  };
  const { initialState, loading, setInitialState } = initialInfo;
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
    actionsRender: () => [<Question key="doc" />],
    // avatarProps: {
    //   src: initialState?.currentUser?.avatar,
    //   title: <AvatarName />,
    //   render: (_, avatarChildren) => {
    //     return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
    //   },
    // },
    footerRender: () => <Footer />,
    onPageChange: () => {
      console.log(
        'onPageChangeonPageChangeonPageChangeonPageChangeonPageChange',
      );
      // FIXME: userInfo
      const userInfo = localStorage.getItem('tnf-ant-design-pro');
      console.log(userInfo);
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
      logo={Logo}
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
          if (last.path === path || last.linkPath === path) {
            return <span>{label}</span>;
          }
        }
        return <Link to={path}>{label}</Link>;
      }}
      disableContentMargin
      fixSiderbar
      fixedHeader
      {...runtimeConfig}
      rightContentRender={
        runtimeConfig.rightContentRender !== false &&
        ((layoutProps) => {
          const dom = getRightRenderContent({
            runtimeConfig,
            loading,
            initialState,
            setInitialState,
          });
          if (runtimeConfig.rightContentRender) {
            return runtimeConfig.rightContentRender(layoutProps, dom, {
              // BREAK CHANGE userConfig > runtimeConfig
              userConfig,
              runtimeConfig,
              loading,
              initialState,
              setInitialState,
            });
          }
          return dom;
        })
      }
    >
      <Exception
        route={route}
        noFound={runtimeConfig?.noFound}
        notFound={runtimeConfig?.notFound}
        unAccessible={runtimeConfig?.unAccessible}
        noAccessible={runtimeConfig?.noAccessible}
      >
        {runtimeConfig.childrenRender ? (
          runtimeConfig.childrenRender(<Outlet />, props)
        ) : (
          <Outlet />
        )}
      </Exception>
    </ProLayout>
  );
};
