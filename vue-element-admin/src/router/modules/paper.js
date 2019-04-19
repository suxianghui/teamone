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
      name: 'KeyboardChart',
      meta: { title: 'awaitClass' }
    },
    {
      path: 'paperList',
      component: () => import('@/views/paper/paperList'),
      name: 'KeyboardChart',
      meta: { title: '' }
    },{
      path: 'detail',
      component: () => import('@/views/paper/detail'),
      name: 'KeyboardChart',
      meta: { title: '' }
    }
  ]
}

export default papersRouter
