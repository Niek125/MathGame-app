<template>
  <div class="game-screen-column-grid">
    <div class="middle-row-grid">
      <div class="score">{{ score }}</div>
      <div class="question" v-if="hasQuestion">{{ question.text }}</div>
      <div class="answer-grid" ref="answerGrid">
        <Card v-for="(data, index) in answers" :key="'answer:' + index"
          ><button
            class="answer"
            @focus="selAnswer = index"
            @keydown.right="setSelAnswer(1)"
            @keydown.left="setSelAnswer(-1)"
            @keydown.up="setSelAnswer(-2)"
            @keydown.down="setSelAnswer(2)"
            @click="
              answer({
                questionText: question.text,
                isCorrect: data === question.answer
              })
            "
          >
            {{ data }}
          </button>
        </Card>
      </div>
    </div>
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
</template>

<script>
import Card from '@/components/Card'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'GameScreen',
  data() {
    return {
      selAnswer: -1
    }
  },
  computed: {
    ...mapGetters('questions', [
      'hasQuestion',
      'score',
      'question',
      'answered'
    ]),
    answers: function () {
      if (!this.hasQuestion) {
        return []
      }
      let answers = [...this.question.falseAnswers]
      answers.push(this.question.answer)
      for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[answers[i], answers[j]] = [answers[j], answers[i]]
      }
      return answers
    }
  },
  components: { Card },
  methods: {
    ...mapActions('questions', ['answer', 'loadQuestions']),
    setSelAnswer: function (dif) {
      this.selAnswer = (this.selAnswer + dif + 4) % 4
      this.$refs.answerGrid.children[this.selAnswer].children[0].focus()
    }
  },
  created() {
    this.loadQuestions()
  }
}
</script>

<style scoped lang="scss">
@import 'src/style/main';

$text-length: 64px;

.game-screen-column-grid {
  height: calc(100vh - 32px);
  width: calc(100vw - 32px);
  display: grid;
  padding: $default-spacing;
  grid-template-columns: minmax($text-length, 1fr) 4fr minmax($text-length, 1fr);
  grid-gap: 6px;
}

.answered-wrapper {
  grid-column: 3/4;
}

.middle-row-grid {
  display: grid;
  height: 100%;
  width: 100%;
  grid-column: 2/3;
  grid-template-rows: 1fr 1fr 3fr 1fr;
}

.score {
  @include text('h');
  text-align: center;
}

.question {
  @include text('h');
  text-align: center;
  margin-top: $default-spacing;
  margin-bottom: $default-spacing;
}

.answer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 32px;
}

@mixin neon-effect {
  background-color: $neon;
  box-shadow: 0 0 $default-spacing $neon;
}

.answer {
  @include text();
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $default-spacing;
  height: 100%;
  width: 100%;
  transition: background-color 400ms ease-in-out;
  &:focus {
    @include neon-effect;
  }
  &:hover {
    @include neon-effect;
  }
}

.answered {
  @include text;
  text-align: right;
}

.correct {
  color: chartreuse;
}

.incorrect {
  color: red;
}
</style>
