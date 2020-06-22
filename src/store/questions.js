export default {
  namespaced: true,
  state: {
    score: 0,
    questions: [
      {
        text: '1 + 1',
        answers: [
          { text: '1', isCorrect: false },
          { text: '2', isCorrect: true },
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: false }
        ]
      },
      {
        text: '2 + 1',
        answers: [
          { text: '1', isCorrect: false },
          { text: '2', isCorrect: false },
          { text: '3', isCorrect: true },
          { text: '4', isCorrect: false }
        ]
      },
      {
        text: '2 + 2',
        answers: [
          { text: '1', isCorrect: false },
          { text: '2', isCorrect: false },
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: true }
        ]
      }
    ],
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
    }
  },
  actions: {
    answer({ commit }, { questionText, isCorrect }) {
      if (isCorrect) {
        commit('INCREMENT_SCORE')
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
    isFinished: (state) => {
      return state.questionIndex > state.questions.length - 1
    }
  }
}
