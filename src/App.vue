<template>
  <div id="app">
    <NavBar/>
    <router-view class="mt-5"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style>
</style>
