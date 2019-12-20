export default {
  filters: {
    Caption(value) {
      switch (value) {
        case 'cht':
          return '中文';
        case 'ja':
          return '日文';
        case 'vi':
          return '越南文';
        case 'en':
          return '英文';

        default:
          return value.toUppercase();
      }
    },
    FormatTime(time) {
      const minutes = `0${Math.floor(time / 60)}`;
      const seconds = `0${time - minutes * 60}`;
      return `${minutes.substr(-2)}:${seconds.substr(-2)}`;
    },
    Level(value) {
      switch (value) {
        case 1:
          return '初級';
        case 2:
          return '中級';
        case 3:
          return '中高級';
        case 4:
          return '高級';

        default:
          return null;
      }
    },
  },
  methods: {
    calculateElementMargin() {
      const parentWidth = this.$parent.$el.clientWidth;
      const element = this.$refs.film;
      const elementWidth = element.clientWidth;

      let maxCardsCountOfLine = Math.floor(parentWidth / (elementWidth + 20));
      if (maxCardsCountOfLine > 4) {
        maxCardsCountOfLine = 4;
      }
      const maxMargin = (parentWidth / maxCardsCountOfLine - elementWidth) / 2;
      const minMargin = maxMargin < 10 ? 10 : maxMargin;

      this.$refs.film.style.margin = `10px ${minMargin}px`;
    },
    debounce(cb, delay) {
      let timer = null;

      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          cb();
        }, delay);
      };
    },
  },
  name: 'film',
  props: {
    film: {
      required: true,
      type: Object,
    },
  },
  created() {
    window.addEventListener('resize', this.debounce(this.calculateElementMargin, 100));
  },
  destroyed() {
    window.removeEventListener('resize', this.debounce(this.calculateElementMargin, 100));
  },
  mounted() {
    this.calculateElementMargin();
  },
};
