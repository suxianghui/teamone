import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import createLogger from "vuex/dist/logger"

import addQuestions from './modules/test/addQuestions'
import getTypeExam from './modules/test/getTypeExam'
import indexUsers from "./modules/exams/indexUsers";
import viewUsers from "./modules/exams/viewUsers";
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
  addQuestions,
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
})

export default store
