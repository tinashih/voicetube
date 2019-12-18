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
      const seconds = `0${(time - minutes * 60)}`;
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
  name: 'film',
  props: {
    film: {
      required: true,
      type: Object,
    },
  },
};
