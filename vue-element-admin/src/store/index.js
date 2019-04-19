import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import createLogger from "vuex/dist/logger"

<<<<<<< HEAD
import addQuestions from './modules/test/addQuestions'
import getTypeExam from './modules/test/getTypeExam'
import indexUsers from "./modules/exams/indexUsers";
import viewUsers from "./modules/exams/viewUsers";
import examination from './modules/examinations'
import examDetail from './modules/examDetail'
import examList from './modules/examList'

=======
// import addQuestions from './modules/test/addQuestions'
import getTypeExam from './modules/getTypeExam'
import gettingLesson from './modules/gettingLesson'
import getTypeQuestion from './modules/getTypeQuestion'
import addQuestions from './modules/addQuestions'
import conditionalTests from './modules/conditionalTests'
import updateQuestion from './modules/updateQuestion'
import getpush from './modules/getpush'
import addType from './modules/addType'
>>>>>>> su
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', false, /\.js$/)
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  getTypeExam,
  gettingLesson,
  getTypeQuestion,
  addQuestions,
<<<<<<< HEAD
  getTypeExam,
  modules: {
    ...modules,
    indexUsers,
    viewUsers,
  },
  // indexUsers,
  // viewUsers,
  // modules:modules,
  getters,
  // plugins:[createLogger()]
  examination,
  examDetail,
  examList
=======
  conditionalTests,
  getpush,
  updateQuestion,
  addType
>>>>>>> su
})

export default store
