import gql from 'graphql-tag'
import apollo from '@/apollo'

export default {
  namespaced: true,
  state: {
    score: 0,
    questions: [],
    questionIndex: 0,
    answered: []
  },
  mutations: {
    INCREMENT_SCORE(state) {
      state.score++
    },
    ADD_ANSWER(state, answer) {
      if (state.answered.length === 10) {
        state.answered.splice(0, 1)
      }
      state.answered.push(answer)
      state.questionIndex++
    },
    APPEND_QUESTIONS(state, questions) {
      state.questions = state.questions.concat(questions)
    }
  },
  actions: {
    loadQuestions({ commit }) {
      apollo
        .query({
          query: gql(
            '{\n' +
              '  questions(random: true, amount: 10){\n' +
              '    id\n' +
              '    text\n' +
              '    answer\n' +
              '    falseAnswers\n' +
              '  }\n' +
              '}'
          )
        })
        .then((res) => {
          commit('APPEND_QUESTIONS', res.data.questions)
        })
    },
    answer({ commit, state, dispatch }, { questionText, isCorrect }) {
      if (isCorrect) {
        commit('INCREMENT_SCORE')
      }
      if (state.questionIndex + 4 >= state.questions.length) {
        dispatch('loadQuestions')
      }
      commit('ADD_ANSWER', { text: questionText, isCorrect: isCorrect })
    }
  },
  getters: {
    score: (state) => {
      return state.score
    },
    question: (state) => {
      return state.questions[state.questionIndex]
    },
    answered: (state) => {
      return state.answered
    },
    hasQuestion: (state) => {
      return state.questionIndex < state.questions.length
    }
  }
}
