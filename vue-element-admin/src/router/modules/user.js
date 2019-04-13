/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'User',
  meta: {
    title: 'users',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'addUsers', noCache: true }
    }, {
      path: 'view',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'viewusers', noCache: true }
    }
  ]
}

export default usersRouter
