import {
  ButtonToggle,
  Film,
} from '@/components';

export default {
  components: {
    ButtonToggle,
    Film,
  },
  watch: {
    model(newVal, oldVal) {
      console.log('model', newVal, oldVal);
    },
    model2(newVal, oldVal) {
      console.log('model2', newVal, oldVal);
    },
  },
  name: 'home',
  created() {
    fetch('https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz')
      .then(response => response.json())
      .then(({ data }) => {
        this.films = data;
      });
  },
  data() {
    return {
      films: [],
      model: 'one',
      model2: 'a',
    };
  },
};
