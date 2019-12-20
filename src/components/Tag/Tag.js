export default {
  computed: {
    classes() {
      return {
        [`bg-${this.color}`]: this.color,
        [`text-${this.textColor}`]: this.textColor,
      };
    },
  },
  props: {
    color: String,
    textColor: String,
    label: {
      required: true,
      type: String,
    },
  },
};
