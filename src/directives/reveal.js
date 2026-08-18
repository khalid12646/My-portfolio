export default {
  mounted(el, binding) {
    el.classList.add('reveal')

    if (binding.value !== undefined) {
      el.style.transitionDelay = `${binding.value}s`
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15
      }
    )

    observer.observe(el)
  }
}