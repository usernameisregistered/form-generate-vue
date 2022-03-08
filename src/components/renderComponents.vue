<script>
export default {
  name: "RenderComponents",
  data() {
    return {
      innerProps: {},
      innerSlots: {},
    };
  },
  props: {
    tagName: {
      type: String,
      require: true,
    },
    attrs: {
      type: Object,
      default: {},
    },
  },
  methods: {
    initProps() {
      this.attrs.props.map((el) => {
        if (el.default) {
          this.innerProps[el.name] = el.default;
        }
      });
      if (this.attrs.slots.includes("default")) {
        this.innerSlots.default = this.attrs.label;
      }
    },
  },
  render(h) {
    this.initProps();
    return h(this.tagName, {
      props: this.innerProps,
    }, [this.innerSlots.default]);
  },
};
</script>