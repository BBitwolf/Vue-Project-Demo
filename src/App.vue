<template>
  <div id="app">
    <v-app> 
      <v-content>
        <v-container class="pt-12">
          <HelloWorld/>
        </v-container>
      </v-content>
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