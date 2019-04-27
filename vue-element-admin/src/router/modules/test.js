/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const testsRouter = {
  path: '/test',
  component: Layout,
  redirect: 'noredirect',
  name: 'Test',
  alwaysShow: true,
  meta: {
    title: 'questions',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/test/add'),
      name: 'KeyboardChart',
      meta: { title: 'addQuestions', noCache: true ,view_id: 'main-addExam'}
    },
    {
      path: 'type',
      component: () => import('@/views/test/type'),
      name: 'LineChart',
      meta: { title: 'questionsTypes', noCache: true,view_id: 'main-examList'}
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
      meta: { title: '', noCache: true ,view_id: 'main-examDetail'}
    },
    {
      path: 'update',
      component: () => import('@/views/test/date'),
      meta: { title: 'update', noCache: true, view_id: 'main-examEdit' }
    }
  ]
}

export default testsRouter
