import indexPage from '../routes/IndexPage';
import details from '../routes/DetailPage';
export const getNavData = () => {
  return [
    {
      name: '首页',
      path: '/ai',
      children: [
        {
          name: '详情',
          path: '/indexPage',
          component: indexPage,
        },
        {
          name: '详情',
          path: '/detail/:id',
          component: details,
        },
      ]
    }

  ];
}

