<template>
  <div class="flexbox game-screen">
    <div class="score-counter">
      <div class="score">{{ score }}</div>
      <div class="answered-wrapper">
        <div
          v-for="(data, index) in answered"
          :key="'answered:' + index"
          :class="['answered', data.correct ? 'correct' : 'incorrect']"
        >
          {{ data.text }}
        </div>
      </div>
    </div>
    <div>
      <div class="flexbox question-wrapper">
        <div class="question">{{ questions[questionIndex].question }}</div>
      </div>
      <div class="button-grid">
        <outlined-button
          v-for="(data, index) in questions[questionIndex].answers"
          :key="'answer:' + index"
          :text="data.text"
          :style="'grid-area: answer$index;'"
          @click.native="
            answer(questions[questionIndex].question, data.correct)
          "
        ></outlined-button>
      </div>
    </div></div
></template>

<script>
import OutlinedButton from '@/components/buttons/OutlinedButton'
export default {
  name: 'GameScreen',
  components: { OutlinedButton },
  data() {
    return {
      score: 0,
      questions: [
        {
          question: '1 + 1',
          answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false }
          ]
        },
        {
          question: '1 + 1',
          answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false }
          ]
        },
        {
          question: '1 + 1',
          answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false }
          ]
        },
        {
          question: '1 + 2',
          answers: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: true },
            { text: '4', correct: false }
          ]
        },
        {
          question: '2 + 2',
          answers: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true }
          ]
        },
        {
          question: '1 + 0',
          answers: [
            { text: '1', correct: true },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: false }
          ]
        }
      ],
      answered: [],
      questionIndex: 0
    }
  },
  methods: {
    answer: function (question, correct) {
      if (this.answered.length === 10) {
        this.answered.splice(0, 1)
      }
      if (correct) {
        this.score++
      }
      const ans = { text: question, correct: correct }
      this.answered.push(ans)

      if (this.questionIndex >= this.questions.length - 1) {
        alert('end')
        return
      }
      this.questionIndex++
    }
  }
}
</script>

<style scoped>
.score-counter {
  position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
}

.score {
  font-size: 5vh;
  text-align: right;
}

.correct {
  color: limegreen;
}

.incorrect {
  color: red;
}

.answered {
  text-align: right;
  font-size: 2vh;
}

.game-screen {
  width: 100%;
  height: 100%;
}

.question {
  font-size: 10vh;
}

.question-wrapper {
  margin: 12px;
}

.button-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 12px;
}
</style>
