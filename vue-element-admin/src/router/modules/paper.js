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
      component: () => import('@/views/paper/await'),
      name: 'KeyboardChart',
      meta: { title: 'awaitClass' }
    },
    {
      path: 'await1',
      component: () => import('@/views/paper/paperList'),
      name: 'KeyboardChart',
      meta: { title: '123' }
    }
  ]
}

export default papersRouter
