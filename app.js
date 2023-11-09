import { createApp, ref, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup() {

    const inputUser = ref("");
    const oddEven = computed(()=>{
      return inputUser.value.length % 2 == 0;
    })

    return {
      inputUser,
      oddEven
    }
  }
}).mount('#app')