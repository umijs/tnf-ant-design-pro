import React, { useRef, useState, useLayoutEffect,useMemo } from 'react'
import { createFileRoute } from '@umijs/tnf/router'
import { GridContent } from '@ant-design/pro-layout'
import { Menu } from 'antd'
import BaseView from './-components/base'
import BindingView from './-components/binding'
import NotificationView from './-components/notification'
import SecurityView from './-components/security'
import { createStyles } from 'antd-style'
import { queryCurrent } from '@/services/ant-design-pro/account'

const useStyles = createStyles(({ token }) => {
  return {
    main: {
      display: 'flex',
      width: '100%',
      height: '100%',
      paddingTop: '16px',
      paddingBottom: '16px',
      backgroundColor: token.colorBgContainer,
      '.ant-list-split .ant-list-item:last-child': {
        borderBottom: `1px solid ${token.colorSplit}`,
      },
      '.ant-list-item': { paddingTop: '14px', paddingBottom: '14px' },
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        flexDirection: 'column',
      },
    },
    leftMenu: {
      width: '224px',
      borderRight: `${token.lineWidth}px solid ${token.colorSplit}`,
      '.ant-menu-inline': { border: 'none' },
      '.ant-menu-horizontal': { fontWeight: 'bold' },
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        width: '100%',
        border: 'none',
      },
    },
    right: {
      flex: '1',
      padding: '8px 40px',
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        padding: '40px',
      },
    },
    title: {
      marginBottom: '12px',
      color: token.colorTextHeading,
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '28px',
    },
    taobao: {
      display: 'block',
      color: '#ff4000',
      fontSize: '48px',
      lineHeight: '48px',
      borderRadius: token.borderRadius,
    },
    dingding: {
      margin: '2px',
      padding: '6px',
      color: '#fff',
      fontSize: '32px',
      lineHeight: '32px',
      backgroundColor: '#2eabff',
      borderRadius: token.borderRadius,
    },
    alipay: {
      color: '#2eabff',
      fontSize: '48px',
      lineHeight: '48px',
      borderRadius: token.borderRadius,
    },
    ':global': {
      'font.strong': { color: token.colorSuccess },
      'font.medium': { color: token.colorWarning },
      'font.weak': { color: token.colorError },
    },
  }
})

type SettingsStateKeys = 'base' | 'security' | 'binding' | 'notification'
type SettingsState = {
  mode: 'inline' | 'horizontal'
  selectKey: SettingsStateKeys
}
const Settings: React.FC = () => {
  const { styles } = useStyles()
  const menuMap: Record<string, React.ReactNode> = {
    base: '基本设置',
    security: '安全设置',
    binding: '账号绑定',
    notification: '新消息通知',
  }
  const [initConfig, setInitConfig] = useState<SettingsState>({
    mode: 'inline',
    selectKey: 'base',
  })
  const dom = useRef<HTMLDivElement>()

  const { data } = Route.useLoaderData()

  const resize = () => {
    requestAnimationFrame(() => {
      if (!dom.current) {
        return
      }
      let mode: 'inline' | 'horizontal' = 'inline'
      const { offsetWidth } = dom.current
      if (dom.current.offsetWidth < 641 && offsetWidth > 400) {
        mode = 'horizontal'
      }
      if (window.innerWidth < 768 && offsetWidth > 400) {
        mode = 'horizontal'
      }
      setInitConfig({
        ...initConfig,
        mode: mode as SettingsState['mode'],
      })
    })
  }
  useLayoutEffect(() => {
    if (dom.current) {
      window.addEventListener('resize', resize)
      resize()
    }
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [dom.current])
  const getMenu = () => {
    return Object.keys(menuMap).map((item) => ({
      key: item,
      label: menuMap[item],
    }))
  }
  const renderChildren = () => {
    const { selectKey } = initConfig
    switch (selectKey) {
      case 'base':
        return <BaseView currentUser={data}/>
      case 'security':
        return <SecurityView />
      case 'binding':
        return <BindingView />
      case 'notification':
        return <NotificationView />
      default:
        return null
    }
  }

  return (
    <GridContent>
      <div
        className={styles.main}
        ref={(ref) => {
          if (ref) {
            dom.current = ref
          }
        }}
      >
        <div className={styles.leftMenu}>
          <Menu
            mode={initConfig.mode}
            selectedKeys={[initConfig.selectKey]}
            onClick={({ key }) => {
              setInitConfig({
                ...initConfig,
                selectKey: key as SettingsStateKeys,
              })
            }}
            items={getMenu()}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuMap[initConfig.selectKey]}</div>
          {renderChildren()}
        </div>
      </div>
    </GridContent>
  )
}

export const Route = createFileRoute('/account/settings/')({
  component: Settings,
  loader: async (params) => {
    return await queryCurrent()
  },
})
