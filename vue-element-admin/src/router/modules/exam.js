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
      component: () => import('@/views/exam/add'),
      name: 'KeyboardChart',
      meta: { title: 'addExams', noCache: true }
    }, {
      path: 'addexam',
      component: () => import('@/views/exam/adexam'),
      name: 'KeyboardChart',
      meta: { title: 'addExams', noCache: true }
    }, {
      path: 'detail',
      component: () => import('@/views/exam/detail'),
      name: 'KeyboardChart',
      meta: { title: 'addExams', noCache: true }
    }, {
      path: 'list',
      component: () => import('@/views/exam/list'),
      name: 'MixChart',
      meta: { title: 'examsList', noCache: true }
    }
  ]
}

export default examsRouter

