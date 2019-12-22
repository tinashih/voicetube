export default {
  computed: {
    isSelected() {
      return this.options.map(opt => opt.value === this.value);
    },
  },
  methods: {
    getOptionClasses(index) {
      return {
        'is-selected': this.isSelected[index],
      };
    },
    setValue(value, option) {
      if (this.value !== value) {
        this.$emit('input', value, option);
      }
    },
  },
  props: {
    buttonToggleProps: Object,
    options: {
      required: true,
      type: Array,
      validator: obj => obj.every(k => 'label' in k && 'value' in k),
    },
    title: String,
    titleProps: Object,
    value: {
      required: true,
    },
  },
};
