import Vue from 'vue'
import LarabergVue from "laraberg-vue";

import MyMessage from "./my-blocks/MyMessage";
import MyStatefulText from "./my-blocks/MyStatefulText";

Vue.use(LarabergVue, {

  // Base URL of your API endpoint and Laraberg controller prefix
  prefix: 'https://api.example.com/laraberg',

  // Your custom categories to categorize blocks
  customCategories: [
    {
      name: 'My Category',
      slug: 'my-category'
    }
  ],

  // Your custom blocks that can be used in editor
  customBlocks: [
    {
      // A namespace prefix is required
      name: 'my-blocks/my-message',
      block: MyMessage
    },
    {
      name: 'my-blocks/my-stateful-text',
      block: MyStatefulText
    }
  ]

})
