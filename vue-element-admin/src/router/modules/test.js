/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const testsRouter = {
  path: '/test',
  component: Layout,
  redirect: 'noredirect',
  name: 'Test',
  meta: {
    title: 'questions',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/test/add'),
      name: 'KeyboardChart',
      meta: { title: 'addQuestions', noCache: true }
    },
    {
      path: 'type',
      component: () => import('@/views/test/type'),
      name: 'LineChart',
      meta: { title: 'questionsTypes', noCache: true }
    },
    {
      path: 'view',
      component: () => import('@/views/test/view'),
      name: 'MixChart',
      meta: { title: 'viewQuestions', noCache: true }
    },
    {
      path: 'details',
      hidden: true,
      component: () => import('@/views/test/details'),
      meta: { title: '', noCache: true }
    },
    {
      path: 'update',
      hidden: true,
      component: () => import('@/views/test/date'),
      meta: { title: 'update', noCache: true, view_id:'main-student'}
    }
  ]
}

export default testsRouter
