/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const papersRouter = {
  path: '/paper',
  component: Layout,
  redirect: 'noredirect',
  name: 'Paper',
  alwaysShow:true,
  hidden:false,
  meta: {
    title: 'papers',
    icon: 'chart'
  },
  children: [
    {
      path: 'await',
      component: () => import('@/views/paper/awaits'),
      name: 'await',
      meta: { title: 'awaitClass', noCache: true },
    },
    {
      path: 'paperList',
      component: () => import('@/views/paper/paperList'),
      name: 'await1',
      meta: { title: '学生列表', noCache: true },
      hidden: true,
    },
    {
      path: 'detail',
      component: () => import('@/views/paper/detail'),
      name: 'await1',
      meta: { title: '批卷详情', noCache: true },
      hidden: true,
    }
  ]
}

export default papersRouter
