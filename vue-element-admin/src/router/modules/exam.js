/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/exam',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'exams',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'addExams', noCache: true }
    }, {
      path: 'list',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'examsList', noCache: true }
    }
  ]
}

export default examsRouter
