<script setup>
import Navbar from './components/layout/Navbar.vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Skills from './components/sections/Skills.vue'
import Experience from './components/sections/Experience.vue'
import Projects from './components/sections/Projects.vue'
import Services from './components/sections/Services.vue'
import Education from './components/sections/Education.vue'
import Contact from './components/sections/Contact.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="app">

    <Navbar />

    <main>
      <Hero />
      <About />
      <Skills/>
      <Experience/>
      <Projects/>
      <Services/>
      <Education/>
      <Contact/>
    </main>

    <Footer />

  </div>
</template>