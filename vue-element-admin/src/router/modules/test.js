/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const testsRouter = {
  path: '/test',
  component: Layout,
  redirect: 'noredirect',
  name: 'Test',
  alwaysShow:true,
  hidden:false,
  meta: {
    title: 'questions',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/test/add'),
      name: 'KeyboardChart',
      meta: { title: 'addQuestions', view_id:'main-addQuestions' }
    },
    {
      path: 'type',
      component: () => import('@/views/test/type'),
      name: 'LineChart',
      meta: { title: 'questionsTypes', view_id:'main-questionsType'}
    },
    {
      path: 'view',
      component: () => import('@/views/test/view'),
      name: 'MixChart',
      meta: { title: 'viewQuestions', view_id:'main-watchQuestions' }
    },
    {
      path: 'adds',
      component: () => import('@/views/test/add'),
      hidden: true,
      meta: { title: '', noCache: true , view_id:'main-editQuestions'}
    },
    {
      path: 'details',
      hidden: true,
      component: () => import('@/views/test/details'),
      meta: { title: '' ,view_id:'main-questionsDetail'}
    }
  ]
}

export default testsRouter
