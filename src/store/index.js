import Vue from 'vue'
import Vuex from 'vuex'
import questions from '@/store/questions'

Vue.use(Vuex)

const modules = { questions }

const store = new Vuex.Store({ modules })

export default store
