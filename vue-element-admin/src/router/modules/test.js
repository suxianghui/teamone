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
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'addQuestions', noCache: true }
    },
    {
      path: 'type',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'questionsTypes', noCache: true }
    },
    {
      path: 'view',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'viewQuestions', noCache: true }
    }
  ]
}

export default testsRouter
