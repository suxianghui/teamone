/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'User',
  alwaysShow:true,
  hidden:false,
  meta: {
    title: 'users',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/user/add'),
      name: 'add',
      meta: { title: 'addUsers', noCache: true,view_id:'main-addUser' }
    }, {
      path: 'view',
      component: () => import('@/views/user/views'),
      name: 'view',
      meta: { title: 'viewusers', noCache: true,view_id:'main-showUser' }
    }
  ]
}

export default usersRouter
