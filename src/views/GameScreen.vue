<template>
  <div class="flexbox game-screen">
    <div class="score-counter" v-if="!isFinished">
      <div class="score">{{ score }}</div>
      <div class="answered-wrapper">
        <div
          v-for="(data, index) in answered"
          :key="'answered:' + index"
          :class="['answered', data.isCorrect ? 'correct' : 'incorrect']"
        >
          {{ data.text }}
        </div>
      </div>
    </div>
    <div v-if="!isFinished">
      <div class="flexbox question-wrapper">
        <div class="question">{{ question.text }}</div>
      </div>
      <div class="button-grid">
        <outlined-button
          v-for="(data, index) in question.answers"
          :key="'answer:' + index"
          :text="data.text"
          :style="'grid-area: answer$index;'"
          @click.native="
            answer({ questionText: question.text, isCorrect: data.isCorrect })
          "
        ></outlined-button>
      </div>
    </div>
    <div v-if="isFinished">Finished</div>
  </div></template
>

<script>
import OutlinedButton from '@/components/buttons/OutlinedButton'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'GameScreen',
  computed: {
    ...mapGetters('questions', ['isFinished', 'score', 'question', 'answered'])
  },
  components: { OutlinedButton },
  methods: {
    ...mapActions('questions', ['answer'])
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
