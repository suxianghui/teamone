/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const papersRouter = {
  path: '/paper',
  component: Layout,
  redirect: 'noredirect',
  name: 'Paper',
  meta: {
    title: 'papers',
    icon: 'chart'
  },
  children: [
    {
      path: 'await',
      component: () => import('@/views/paper/awaits'),
      name: 'await',
      meta: { title: 'awaitClass' }
    },
    {
      path: 'paperList',
      component: () => import('@/views/paper/paperList'),
      name: 'await1',
      meta: { title: '123' }
    }
  ]
}

export default papersRouter
