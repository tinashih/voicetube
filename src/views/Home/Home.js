import {
  ButtonToggle,
  Film,
} from '@/components';

export default {
  components: {
    ButtonToggle,
    Film,
  },
  computed: {
    getFilterLengthOptions() {
      return [
        {
          label: '不限',
          value: null,
        },
        {
          label: '4分鐘以下',
          value: 1,
        },
        {
          label: '5 - 10分鐘',
          value: 300,
        },
        {
          label: '超過10分鐘',
          value: 601,
        },
      ];
    },
    getSortOptions() {
      return [
        {
          label: '發布時間',
          value: 'publish',
        },
        {
          label: '觀看次數',
          value: 'views',
        },
        {
          label: '收藏次數',
          value: 'collectCount',
        },
      ];
    },
  },
  watch: {
    sort(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.films.sort((a, b) => b[newVal] - a[newVal]);
      }
    },
    filterLength(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (!newVal) {
          this.films = this.originFilms.sort((a, b) => b[this.sort] - a[this.sort]);
          return;
        }

        const currentIndex = this.getFilterLengthOptions.findIndex(({ value }) => value === newVal);
        const nextIndex = currentIndex + 1 <= this.getFilterLengthOptions.length
          ? currentIndex + 1 : null;

        this.films = this.originFilms.filter(({ duration }) => {
          const nextOption = this.getFilterLengthOptions[nextIndex];
          const currentOption = this.getFilterLengthOptions[currentIndex];
          const hasNextValue = nextOption && nextOption.value;

          const smallThan = hasNextValue ? duration < hasNextValue : null;
          const biggerThan = duration >= currentOption.value;

          return hasNextValue ? (smallThan && biggerThan) : biggerThan;
        });
      }
    },
  },
  name: 'home',
  created() {
    fetch('https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz')
      .then(response => response.json())
      .then(({ data }) => {
        this.originFilms = data;
        this.films = data;
      });
  },
  data() {
    return {
      films: [],
      filterLength: null,
      sort: null,
      originFilms: [],
    };
  },
  mounted() {
    this.sort = 'publish';
  },
};
