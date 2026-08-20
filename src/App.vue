<template>
  <div class="portfolio-app">

    <!-- ==========================================
         PREMIUM PAGE LOADER
    =========================================== -->
    <Transition name="loader">
      <div v-if="!isLoaded" class="page-loader">

        <div class="loader-orb orb-one"></div>
        <div class="loader-orb orb-two"></div>

        <div class="loader-content">

          <div class="loader-logo">
            KA
          </div>

          <div class="loader-title">
            KHALID ALVI
          </div>

          <div class="loader-line">
            <span></span>
          </div>

          <p>
            Frontend Developer
          </p>

        </div>

      </div>
    </Transition>


    <!-- ==========================================
         MAIN WEBSITE
    =========================================== -->
    <div class="site-wrapper">

      <!-- NAVBAR -->
      <Navbar />


      <!-- ========================================
           MAIN CONTENT
      ========================================= -->
      <main>

        <!-- HOME -->
        <section
          id="home"
          class="section-anchor compact-section"
        >
          <Hero />
        </section>


        <!-- ABOUT -->
        <section
          id="about"
          class="section-anchor compact-section"
        >
          <About />
        </section>


        <!-- EXPERIENCE -->
        <section
          id="experience"
          class="section-anchor compact-section"
        >
          <Experience />
        </section>


        <!-- SKILLS -->
        <section
          id="skills"
          class="section-anchor compact-section"
        >
          <Skills />
        </section>


        <!-- PROJECTS -->
        <section
          id="projects"
          class="section-anchor compact-section"
        >
          <Projects />
        </section>


        <!-- ========================================
             AI MATCH + RECRUITER
             ONE COMBINED SECTION
        ========================================= -->
        <section
          id="ai-recruiter"
          class="section-anchor ai-recruiter-section"
        >

          <AIMatch />

          <RecruiterView />

        </section>


        <!-- SERVICES -->
        <section
          id="services"
          class="section-anchor compact-section"
        >
          <Services />
        </section>


        <!-- EDUCATION -->
        <section
          id="education"
          class="section-anchor compact-section"
        >
          <Education />
        </section>


        <!-- CONTACT -->
        <section
          id="contact"
          class="section-anchor compact-section"
        >
          <Contact />
        </section>

      </main>


      <!-- FOOTER -->
      <Footer />


      <!-- AI CHATBOT -->
      <ChatBot />


      <!-- ========================================
           SCROLL TO TOP
      ========================================= -->
      <Transition name="scroll-button">

        <button
          v-if="showScrollTop"
          class="scroll-top"
          @click="scrollToTop"
          aria-label="Scroll to top"
        >
          <span>↑</span>
        </button>

      </Transition>

    </div>

  </div>
</template>


<script setup>

import {
  ref,
  onMounted,
  onBeforeUnmount
} from "vue";


/* ==========================================
   LAYOUT
========================================== */

import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";


/* ==========================================
   SECTIONS
========================================== */

import Hero from "./components/sections/Hero.vue";
import About from "./components/sections/About.vue";
import Experience from "./components/sections/Experience.vue";
import Skills from "./components/sections/Skills.vue";
import Projects from "./components/sections/Projects.vue";
import AIMatch from "./components/sections/AIMatch.vue";
import Services from "./components/sections/Services.vue";
import Education from "./components/sections/Education.vue";
import RecruiterView from "./components/sections/RecruiterView.vue";
import Contact from "./components/sections/Contact.vue";


/* ==========================================
   AI CHATBOT
========================================== */

import ChatBot from "./components/ChatBot.vue";


/* ==========================================
   STATE
========================================== */

const isLoaded = ref(false);

const showScrollTop = ref(false);


/* ==========================================
   SCROLL
========================================== */

const handleScroll = () => {

  showScrollTop.value =
    window.scrollY > 450;

};


const scrollToTop = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};


/* ==========================================
   LIFECYCLE
========================================== */

onMounted(() => {

  setTimeout(() => {

    isLoaded.value = true;

  }, 650);


  window.addEventListener(
    "scroll",
    handleScroll,
    {
      passive: true
    }
  );


  handleScroll();

});


onBeforeUnmount(() => {

  window.removeEventListener(
    "scroll",
    handleScroll
  );

});

</script>


<style>

/* =========================================================
   GLOBAL RESET
========================================================= */

html {

  scroll-behavior: smooth;

  scroll-padding-top: 70px;

}


body {

  margin: 0;

  padding: 0;

  overflow-x: hidden;

  background: #05070b;

  color: #ffffff;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  /*
   * GLOBAL READABILITY
   * Thora bara aur comfortable text
   */
  font-size: 16px;

  line-height: 1.6;

}


* {

  box-sizing: border-box;

}


button,
input,
textarea,
select,
a {

  font-family: inherit;

}


/* =========================================================
   GLOBAL TEXT READABILITY
========================================================= */

/*
   Components apni specific font-size rakh sakte hain.
   Yeh sirf un elements ko readable default deta hai
   jahan component ne font-size define nahi kiya.
*/

p {

  line-height: 1.7;

}


small {

  font-size: 13px;

}


button {

  line-height: 1.4;

}


/* =========================================================
   PORTFOLIO ROOT
========================================================= */

.portfolio-app {

  position: relative;

  min-height: 100vh;

  overflow: hidden;

  background:

    radial-gradient(
      circle at 10% 5%,
      rgba(99, 102, 241, 0.08),
      transparent 28%
    ),

    radial-gradient(
      circle at 90% 20%,
      rgba(6, 182, 212, 0.06),
      transparent 28%
    ),

    radial-gradient(
      circle at 50% 80%,
      rgba(139, 92, 246, 0.04),
      transparent 32%
    ),

    #05070b;

  color: #ffffff;

}


/* =========================================================
   SUBTLE GRID
========================================================= */

.portfolio-app::before {

  content: "";

  position: fixed;

  inset: 0;

  z-index: 0;

  pointer-events: none;

  opacity: 0.14;

  background-image:

    linear-gradient(
      rgba(255,255,255,0.02) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(255,255,255,0.02) 1px,
      transparent 1px
    );

  background-size: 60px 60px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent 85%
    );

  -webkit-mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent 85%
    );

}


/* =========================================================
   SITE WRAPPER
========================================================= */

.site-wrapper {

  position: relative;

  z-index: 1;

  min-height: 100vh;

  overflow: hidden;

}


/* =========================================================
   SECTION ANCHORS
========================================================= */

.section-anchor {

  position: relative;

  scroll-margin-top: 70px;

}


/* =========================================================
   COMPACT SECTIONS
========================================================= */

.compact-section {

  position: relative;

}


/* =========================================================
   AI + RECRUITER COMBINED SECTION
========================================================= */

.ai-recruiter-section {

  position: relative;

  overflow: hidden;

  padding: 20px 0;

  background:

    linear-gradient(
      180deg,
      transparent 0%,
      rgba(99,102,241,0.018) 50%,
      transparent 100%
    );

}


.ai-recruiter-section::before {

  content: "";

  position: absolute;

  top: 0;

  left: 50%;

  width:
    min(
      1050px,
      calc(100% - 40px)
    );

  height: 1px;

  transform:
    translateX(-50%);

  background:

    linear-gradient(
      90deg,
      transparent,
      rgba(139,92,246,0.20),
      rgba(34,211,238,0.20),
      transparent
    );

  pointer-events: none;

}


.ai-recruiter-section > * {

  margin-top: 0 !important;

  margin-bottom: 0 !important;

}


/* =========================================================
   PREMIUM PAGE LOADER
========================================================= */

.page-loader {

  position: fixed;

  inset: 0;

  z-index: 999999;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  background: #05070b;

}


.loader-content {

  position: relative;

  z-index: 3;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 12px;

  animation:
    loader-content-in
    .65s
    ease-out;

}


.loader-logo {

  width: 58px;

  height: 58px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 17px;

  background:

    linear-gradient(
      135deg,
      #6366f1,
      #06b6d4
    );

  color: #ffffff;

  font-size: 17px;

  font-weight: 800;

  letter-spacing: -.06em;

  box-shadow:

    0 0 25px
    rgba(99,102,241,.22),

    0 0 60px
    rgba(6,182,212,.10);

  animation:
    loader-logo-pulse
    2s
    ease-in-out
    infinite;

}


.loader-title {

  color: #ffffff;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: .25em;

}


.loader-line {

  width: 170px;

  height: 2px;

  overflow: hidden;

  border-radius: 999px;

  background:
    rgba(255,255,255,.08);

}


.loader-line span {

  display: block;

  width: 45%;

  height: 100%;

  border-radius: inherit;

  background:

    linear-gradient(
      90deg,
      #6366f1,
      #22d3ee
    );

  animation:
    loader-progress
    1.2s
    ease-in-out
    infinite;

}


.loader-content p {

  margin: 0;

  color: #687184;

  font-size: 10px;

  letter-spacing: .16em;

  text-transform: uppercase;

}


/* =========================================================
   LOADER ORBS
========================================================= */

.loader-orb {

  position: absolute;

  width: 260px;

  height: 260px;

  border-radius: 50%;

  filter: blur(85px);

  opacity: .12;

  pointer-events: none;

}


.orb-one {

  top: 10%;

  left: 15%;

  background: #6366f1;

  animation:
    orb-float-one
    6s
    ease-in-out
    infinite;

}


.orb-two {

  right: 10%;

  bottom: 10%;

  background: #06b6d4;

  animation:
    orb-float-two
    7s
    ease-in-out
    infinite;

}


/* =========================================================
   LOADER ANIMATIONS
========================================================= */

@keyframes loader-progress {

  0% {
    transform:
      translateX(-150%);
  }

  100% {
    transform:
      translateX(330%);
  }

}


@keyframes loader-logo-pulse {

  0%,
  100% {
    transform:
      scale(1);
  }

  50% {
    transform:
      scale(1.04);
  }

}


@keyframes loader-content-in {

  from {

    opacity: 0;

    transform:
      translateY(15px)
      scale(.97);

  }

  to {

    opacity: 1;

    transform:
      translateY(0)
      scale(1);

  }

}


@keyframes orb-float-one {

  0%,
  100% {

    transform:
      translate(0,0)
      scale(1);

  }

  50% {

    transform:
      translate(60px,35px)
      scale(1.12);

  }

}


@keyframes orb-float-two {

  0%,
  100% {

    transform:
      translate(0,0)
      scale(1);

  }

  50% {

    transform:
      translate(-50px,-35px)
      scale(1.08);

  }

}


/* =========================================================
   LOADER TRANSITION
========================================================= */

.loader-enter-active,
.loader-leave-active {

  transition:
    opacity .5s ease;

}


.loader-enter-from,
.loader-leave-to {

  opacity: 0;

}


/* =========================================================
   SCROLL TO TOP
========================================================= */

.scroll-top {

  position: fixed;

  right: 20px;

  bottom: 20px;

  z-index: 9000;

  width: 44px;

  height: 44px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(255,255,255,.10);

  border-radius: 13px;

  background:
    rgba(10,13,21,.78);

  color: #ffffff;

  backdrop-filter:
    blur(18px);

  -webkit-backdrop-filter:
    blur(18px);

  cursor: pointer;

  font-size: 17px;

  box-shadow:

    0 10px 30px
    rgba(0,0,0,.30);

  transition:

    transform .25s ease,

    border-color .25s ease,

    background .25s ease,

    box-shadow .25s ease;

}


.scroll-top:hover {

  transform:
    translateY(-4px);

  border-color:
    rgba(129,140,248,.40);

  background:
    rgba(99,102,241,.16);

  box-shadow:

    0 15px 35px
    rgba(0,0,0,.35);

}


/* =========================================================
   SCROLL BUTTON TRANSITION
========================================================= */

.scroll-button-enter-active,
.scroll-button-leave-active {

  transition:

    opacity .25s ease,

    transform .25s ease;

}


.scroll-button-enter-from,
.scroll-button-leave-to {

  opacity: 0;

  transform:
    translateY(12px)
    scale(.9);

}


/* =========================================================
   TEXT SELECTION
========================================================= */

::selection {

  background:
    rgba(99,102,241,.35);

  color: #ffffff;

}


/* =========================================================
   SCROLLBAR
========================================================= */

::-webkit-scrollbar {

  width: 6px;

}


::-webkit-scrollbar-track {

  background: #05070b;

}


::-webkit-scrollbar-thumb {

  border-radius: 999px;

  background:

    linear-gradient(
      180deg,
      #6366f1,
      #22d3ee
    );

}


::-webkit-scrollbar-thumb:hover {

  background:

    linear-gradient(
      180deg,
      #818cf8,
      #67e8f9
    );

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  html {

    scroll-padding-top: 65px;

  }


  body {

    font-size: 15px;

    line-height: 1.55;

  }


  p {

    line-height: 1.65;

  }


  .section-anchor {

    scroll-margin-top: 65px;

  }


  .ai-recruiter-section {

    padding: 10px 0;

  }


  .scroll-top {

    right: 14px;

    bottom: 14px;

    width: 41px;

    height: 41px;

    border-radius: 12px;

  }


  .loader-logo {

    width: 54px;

    height: 54px;

  }


  .loader-title {

    font-size: 10px;

    letter-spacing: .19em;

  }


  .loader-line {

    width: 150px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  html {

    scroll-behavior: auto;

  }


  *,
  *::before,
  *::after {

    animation-duration:
      .01ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      .01ms !important;

  }

}

</style>