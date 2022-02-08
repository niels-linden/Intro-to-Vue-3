const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeById(id) {
      let index = this.cart.indexOf(id);
      this.cart.splice(index, 1);
    },
  },
});
