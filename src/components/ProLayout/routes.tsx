import { useTranslation } from 'react-i18next';

export const getRoutes = () => {
  const { t } = useTranslation('routes');

  return [
    {
      path: '/dashboard',
      name: t('dashboard'),
      icon: 'dashboard',
      routes: [
        { name: t('analysis'), path: '/dashboard/analysis' },
        { name: t('monitor'), path: '/dashboard/monitor' },
        { name: t('workplace'), path: '/dashboard/workplace' },
      ],
    },
    {
      path: '/form',
      name: t('form'),
      icon: 'form',
      routes: [
        { name: t('basicForm'), path: '/form/basic-form' },
        { name: t('stepForm'), path: '/form/step-form' },
        { name: t('advancedForm'), path: '/form/advanced-form' },
      ],
    },
    {
      path: '/list',
      icon: 'table',
      name: t('list'),
      routes: [
        {
          path: '/list/search',
          name: t('searchList'),
          routes: [
            { name: t('articles'), path: '/list/search/articles' },
            { name: t('projects'), path: '/list/search/projects' },
            { name: t('applications'), path: '/list/search/applications' },
          ],
        },
        { name: t('tableList'), path: '/list/table-list' },
        { name: t('basicList'), path: '/list/basic-list' },
        { name: t('cardList'), path: '/list/card-list' },
      ],
    },
    {
      path: '/profile',
      name: t('profile'),
      icon: 'profile',
      routes: [
        { name: t('basicProfile'), path: '/profile/basic' },
        { name: t('advancedProfile'), path: '/profile/advanced' },
      ],
    },
    {
      path: '/result',
      name: t('result'),
      icon: 'CheckCircleOutlined',
      routes: [
        { name: t('success'), path: '/result/success' },
        { name: t('fail'), path: '/result/fail' },
      ],
    },
    {
      path: '/exception',
      name: t('exception'),
      icon: 'warning',
      routes: [
        { name: t('403'), path: '/exception/403' },
        { name: t('404'), path: '/exception/404' },
        { name: t('500'), path: '/exception/500' },
      ],
    },
    {
      path: '/account',
      name: t('account'),
      icon: 'user',
      routes: [
        { name: t('center'), path: '/account/center/articles' },
        { name: t('settings'), path: '/account/settings' },
      ],
    },
  ];
};
