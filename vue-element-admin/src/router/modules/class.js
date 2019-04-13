/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const classesRouter = {
  path: '/class',
  component: Layout,
  redirect: 'noredirect',
  name: 'Class',
  meta: {
    title: 'classes',
    icon: 'chart'
  },
  children: [
    {
      path: 'class',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'classesAdmin', noCache: true }
    }, {
      path: 'room',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'roomAdmin', noCache: true }
    }, {
      path: 'student',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: {
        title: 'studentAdmin',
        noCache: true
      }
    }
  ]
}

export default classesRouter
