<template>
  <Navbar />
  <Home />
  <Skill />
  <Resume />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Skill from './components/Skill.vue'
import Resume from './components/Resume.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Skill,
    Resume,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
