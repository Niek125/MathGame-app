<template>
  <div class="flexbox game-screen">
    <div>
      <div class="flexbox question-wrapper">
        <div class="question">{{ questions[questionIndex].question }}</div>
      </div>
      <div class="button-grid">
        <outlined-button
          v-for="(data, index) in questions[questionIndex].answers"
          :key="'answer:' + index"
          :text="data"
          :style="'grid-area: answer$index;'"
          @click.native="answer"
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
      questions: [
        { question: '1 + 1', answers: ['1', '2', '3', '4'] },
        { question: '2 + 2', answers: ['2', '3', '4', '5'] }
      ],
      questionIndex: 0
    }
  },
  methods: {
    answer: function () {
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
