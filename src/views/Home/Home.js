import {
  Film,
} from '@/components';

export default {
  components: {
    Film,
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
    };
  },
};
