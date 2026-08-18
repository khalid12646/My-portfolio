<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="container">

      <!-- Logo -->
      <a
        href="#home"
        class="logo"
        @click="closeMenu"
      >
        Khalid<span>.</span>
      </a>

      <!-- Desktop Navigation -->
      <div
        class="nav-links"
        :class="{ 'mobile-open': menuOpen }"
      >
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#experience" @click="closeMenu">Experience</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#services" @click="closeMenu">Services</a>
        <a href="#education" @click="closeMenu">Education</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>

      <!-- Right Controls -->
      <div class="navbar-controls">

        <ThemeToggle />

        <!-- Hamburger -->
        <button
          class="menu-toggle"
          @click="menuOpen = !menuOpen"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </div>
  </nav>
</template>

<style scoped>
/* ========================================
   NAVBAR
======================================== */

.navbar {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  z-index: 1000;

  padding: 20px 0;

  background: var(--bg-primary);

  border-bottom: 1px solid var(--border);

  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}


/* ========================================
   NAVBAR CONTAINER
======================================== */

.navbar .container {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;
}


/* ========================================
   LOGO
======================================== */

.logo {
  flex-shrink: 0;

  color: var(--text-primary);

  font-size: 25px;

  font-weight: 700;
}

.logo span {
  color: var(--accent);
}


/* ========================================
   NAV LINKS
======================================== */

.nav-links {
  display: flex;

  align-items: center;

  gap: 25px;
}

.nav-links a {
  color: var(--text-primary);

  font-size: 14px;

  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent);
}


/* ========================================
   NAVBAR CONTROLS
======================================== */

.navbar-controls {
  display: flex;

  align-items: center;

  gap: 12px;
}


/* ========================================
   HAMBURGER
======================================== */

.menu-toggle {
  display: none;

  width: 42px;
  height: 42px;

  padding: 8px;

  border: 1px solid var(--border);

  border-radius: 8px;

  background: var(--bg-secondary);

  cursor: pointer;
}

.menu-toggle span {
  display: block;

  width: 100%;
  height: 2px;

  margin: 5px 0;

  background: var(--text-primary);

  transition: all 0.3s ease;
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 900px) {

  .navbar .container {
    position: relative;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;

    position: absolute;

    top: calc(100% + 15px);

    left: 0;
    right: 0;

    flex-direction: column;

    align-items: stretch;

    gap: 0;

    padding: 15px;

    background: var(--bg-secondary);

    border: 1px solid var(--border);

    border-radius: 12px;

    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  .nav-links.mobile-open {
    display: flex;
  }

  .nav-links a {
    padding: 13px 15px;

    border-radius: 7px;

    font-size: 15px;
  }

  .nav-links a:hover {
    background: rgba(99, 102, 241, 0.08);
  }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

  .navbar {
    padding: 15px 0;
  }

  .logo {
    font-size: 22px;
  }

}
</style>