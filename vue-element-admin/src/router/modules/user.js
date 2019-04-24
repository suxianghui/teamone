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
      component: () => import('@/views/user/add'),
      name: 'add',
      meta: { title: 'addUsers', noCache: true }
    }, {
      path: 'view',
      component: () => import('@/views/user/views'),
      name: 'view',
      meta: { title: 'viewusers', noCache: true }
    }
  ]
}

export default usersRouter
