<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value

  document.documentElement.setAttribute(
    'data-theme',
    isDark.value ? 'dark' : 'light'
  )

  localStorage.setItem(
    'theme',
    isDark.value ? 'dark' : 'light'
  )
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  }

  document.documentElement.setAttribute(
    'data-theme',
    isDark.value ? 'dark' : 'light'
  )
})
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>