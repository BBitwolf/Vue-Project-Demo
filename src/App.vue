<template>
  <div id="app">
    <v-app> 
      <v-main class="orange lighten-5">
        <v-container class="pt-12">
          <HelloWorld/>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>