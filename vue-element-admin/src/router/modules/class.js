/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const classesRouter = {
  path: '/class',
  component: Layout,
  redirect: 'noredirect',
  name: 'Class',
  alwaysShow:true,
  hidden:false,
  meta: {
    title: 'classes',
    icon: 'chart'
  },
  children: [
    {
      path: 'class',
      component: () => import('@/views/class/class'),
      name: 'class',
      meta: { title: 'classesAdmin', noCache: true, view_id: 'main-grade'}
    }, {
      path: 'room',
      component: () => import('@/views/class/room'),
      name: 'room',
      meta: { title: 'roomAdmin', noCache: true, view_id: 'main-room'}
    }, {
      path: 'student',
      component: () => import('@/views/class/student'),
      name: 'student',
      meta: { title: 'studentAdmin', noCache: true, view_id: 'main-student' }
    },
    {
      path: 'upload',
      component: () => import('@/views/class/upload'),
      name: 'upload',
      meta: { title: 'upload', noCache: true, view_id: 'main-student' }
    }
  ]
}

export default classesRouter
