<template>
<div id="app">
    <v-app> 
        <v-main class="grey lighten-4">
            <Navbar></Navbar>
            <router-view></router-view>
        </v-main>
    </v-app>
</div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
    name: 'App',
    components: {Navbar}
}
</script>