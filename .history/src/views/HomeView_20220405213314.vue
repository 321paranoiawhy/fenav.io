<template>
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import homepage from '@/components/homepage.vue'

export default {
  name: 'HomeView',
  components: {
    homepage,
  },
}
</script>
