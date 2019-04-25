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
      name: 'add1',
      meta: { title: 'addExams', noCache: true }
    }, {
      path: 'addexam',
      component: () => import('@/views/exam/adexam'),
      hidden: true,
      name: 'addexam',
      meta: { title: 'addExams', noCache: true }
    }, {
      path: 'detail',
      component: () => import('@/views/exam/detail'),
      hidden: true,
      name: 'detail',
      meta: { title: 'addExams', noCache: true }
    }, {
      path: 'list',
      component: () => import('@/views/exam/list'),
      name: 'list',
      meta: { title: 'examsList', noCache: true }
    }
  ]
}

export default examsRouter

