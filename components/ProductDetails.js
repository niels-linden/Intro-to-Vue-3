app.component("product-details", {
  props: {
    details: String,
  },
  template: `<ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>`,
});
