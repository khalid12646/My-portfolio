<template>
  <header
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="navbar-container">

      <!-- =================================================
           LOGO
      ================================================== -->
      <a
        href="#home"
        class="logo"
        @click="closeMenu"
      >
        <span class="logo-mark">K</span>

        <span class="logo-text">
          Khalid<span>.</span>
        </span>
      </a>


      <!-- =================================================
           DESKTOP NAVIGATION
      ================================================== -->
      <nav class="desktop-nav">

        <!-- MAIN LINKS -->
        <a
          v-for="item in mainNavItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click="setActive(item.id)"
        >
          {{ item.label }}

          <span class="nav-indicator"></span>
        </a>


        <!-- MORE DROPDOWN -->
        <div
          class="more-wrapper"
          @mouseenter="isMoreOpen = true"
          @mouseleave="isMoreOpen = false"
        >

          <button
            type="button"
            class="nav-link more-button"
            :class="{ active: moreSectionActive }"
            @click.stop="toggleMore"
          >
            <span>More</span>

            <span
              class="more-chevron"
              :class="{ rotated: isMoreOpen }"
            >
              ↓
            </span>

            <span class="nav-indicator"></span>
          </button>


          <!-- DROPDOWN -->
          <Transition name="dropdown">

            <div
              v-if="isMoreOpen"
              class="more-dropdown"
            >

              <div class="dropdown-label">
                Explore
              </div>


              <a
                v-for="item in moreNavItems"
                :key="item.id"
                :href="`#${item.id}`"
                class="dropdown-link"
                :class="{
                  active:
                    activeSection === item.id
                }"
                @click="
                  setActive(item.id);
                  closeMore();
                "
              >

                <span class="dropdown-icon">
                  {{ item.icon }}
                </span>

                <span class="dropdown-content">

                  <strong>
                    {{ item.label }}
                  </strong>

                  <small>
                    {{ item.description }}
                  </small>

                </span>

                <span class="dropdown-arrow">
                  →
                </span>

              </a>

            </div>

          </Transition>

        </div>

      </nav>


      <!-- =================================================
           ACTIONS
      ================================================== -->
      <div class="navbar-actions">

        <!-- AI BUTTON -->
        <button
          class="ai-button"
          type="button"
          aria-label="Open AI Assistant"
          @click="openAI"
        >

          <span class="ai-glow"></span>

          <span class="ai-icon">
            ✦
          </span>

          <span class="ai-text">
            AI
          </span>

        </button>


        <!-- MOBILE MENU -->
        <button
          class="menu-button"
          type="button"
          @click="toggleMenu"
          :class="{ active: isMenuOpen }"
          :aria-label="
            isMenuOpen
              ? 'Close menu'
              : 'Open menu'
          "
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </div>


    <!-- =================================================
         MOBILE NAVIGATION
    ================================================== -->
    <Transition name="mobile-menu">

      <div
        v-if="isMenuOpen"
        class="mobile-nav"
      >

        <div class="mobile-nav-inner">

          <div class="mobile-nav-label">
            Navigation
          </div>


          <!-- MAIN MOBILE LINKS -->
          <a
            v-for="(item, index) in mainNavItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="mobile-nav-link"
            :class="{
              active:
                activeSection === item.id
            }"
            @click="
              setActive(item.id);
              closeMenu();
            "
          >

            <span class="mobile-link-left">

              <span class="mobile-link-number">
                {{
                  String(index + 1).padStart(2, "0")
                }}
              </span>

              <span>
                {{ item.label }}
              </span>

            </span>

            <span class="mobile-arrow">
              →
            </span>

          </a>


          <!-- MOBILE MORE -->
          <div class="mobile-more-section">

            <button
              type="button"
              class="mobile-more-header"
              @click="toggleMobileMore"
            >

              <span class="mobile-more-title">

                <span class="mobile-more-icon">
                  +
                </span>

                More

              </span>

              <span
                class="mobile-more-chevron"
                :class="{
                  rotated:
                    isMobileMoreOpen
                }"
              >
                ↓
              </span>

            </button>


            <Transition name="mobile-more">

              <div
                v-if="isMobileMoreOpen"
                class="mobile-more-items"
              >

                <a
                  v-for="item in moreNavItems"
                  :key="item.id"
                  :href="`#${item.id}`"
                  class="mobile-nav-link more-mobile-link"
                  :class="{
                    active:
                      activeSection === item.id
                  }"
                  @click="
                    setActive(item.id);
                    closeMenu();
                  "
                >

                  <span class="mobile-link-left">

                    <span class="mobile-link-number">
                      {{ item.icon }}
                    </span>

                    <span>
                      {{ item.label }}
                    </span>

                  </span>

                  <span class="mobile-arrow">
                    →
                  </span>

                </a>

              </div>

            </Transition>

          </div>


          <!-- MOBILE AI -->
          <button
            class="mobile-ai-button"
            type="button"
            @click="
              openAI();
              closeMenu();
            "
          >

            <span class="mobile-ai-icon">
              ✦
            </span>

            <span>
              Ask AI
            </span>

            <span class="mobile-ai-arrow">
              →
            </span>

          </button>

        </div>

      </div>

    </Transition>

  </header>
</template>


<script setup>

import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref
} from "vue";


/* =========================================================
   MAIN NAVIGATION
========================================================= */

const mainNavItems = [

  {
    id: "home",
    label: "Home"
  },

  {
    id: "about",
    label: "About"
  },

  {
    id: "experience",
    label: "Experience"
  },

  {
    id: "skills",
    label: "Skills"
  },

  {
    id: "projects",
    label: "Projects"
  }

];


/* =========================================================
   MORE NAVIGATION
========================================================= */

const moreNavItems = [

  {
    id: "ai-recruiter",
    label: "AI Match",
    icon: "✦",
    description: "Match jobs with my skills"
  },

  {
    id: "services",
    label: "Services",
    icon: "◇",
    description: "Development services"
  },

  {
    id: "education",
    label: "Education",
    icon: "◎",
    description: "Academic background"
  },

  {
    id: "recruiter",
    label: "Recruiter",
    icon: "◈",
    description: "Recruiter profile"
  },

  {
    id: "contact",
    label: "Contact",
    icon: "↗",
    description: "Let's work together"
  }

];


/* =========================================================
   STATE
========================================================= */

const isScrolled = ref(false);

const isMenuOpen = ref(false);

const isMoreOpen = ref(false);

const isMobileMoreOpen = ref(false);

const activeSection = ref("home");


/* =========================================================
   MORE ACTIVE
========================================================= */

const moreSectionActive = computed(() => {

  return moreNavItems.some(
    item =>
      item.id === activeSection.value
  );

});


/* =========================================================
   ACTIVE SECTION
========================================================= */

const updateActiveSection = () => {

  const allItems = [
    ...mainNavItems,
    ...moreNavItems
  ];

  const sections = allItems
    .map(item =>
      document.getElementById(item.id)
    )
    .filter(Boolean);


  let current = "home";


  sections.forEach(section => {

    const rect =
      section.getBoundingClientRect();


    if (
      rect.top <= 150 &&
      rect.bottom >= 150
    ) {

      current = section.id;

    }

  });


  activeSection.value = current;

};


/* =========================================================
   SCROLL
========================================================= */

const handleScroll = () => {

  isScrolled.value =
    window.scrollY > 30;

  updateActiveSection();

};


/* =========================================================
   ACTIVE LINK
========================================================= */

const setActive = id => {

  activeSection.value = id;

};


/* =========================================================
   MORE
========================================================= */

const toggleMore = () => {

  isMoreOpen.value =
    !isMoreOpen.value;

};


const closeMore = () => {

  isMoreOpen.value = false;

};


/* =========================================================
   MOBILE MORE
========================================================= */

const toggleMobileMore = () => {

  isMobileMoreOpen.value =
    !isMobileMoreOpen.value;

};


/* =========================================================
   MOBILE MENU
========================================================= */

const toggleMenu = () => {

  isMenuOpen.value =
    !isMenuOpen.value;


  document.body.style.overflow =
    isMenuOpen.value
      ? "hidden"
      : "";

};


const closeMenu = () => {

  isMenuOpen.value = false;

  isMobileMoreOpen.value = false;

  document.body.style.overflow = "";

};


/* =========================================================
   AI ASSISTANT
========================================================= */

const openAI = () => {

  window.dispatchEvent(
    new CustomEvent(
      "open-ai-assistant"
    )
  );

};


/* =========================================================
   RESIZE
========================================================= */

const handleResize = () => {

  if (
    window.innerWidth > 900 &&
    isMenuOpen.value
  ) {

    closeMenu();

  }


  if (
    window.innerWidth <= 900 &&
    isMoreOpen.value
  ) {

    closeMore();

  }

};


/* =========================================================
   CLICK OUTSIDE
========================================================= */

const handleDocumentClick = event => {

  const wrapper =
    document.querySelector(
      ".more-wrapper"
    );


  if (
    wrapper &&
    !wrapper.contains(event.target)
  ) {

    closeMore();

  }

};


/* =========================================================
   LIFECYCLE
========================================================= */

onMounted(() => {

  window.addEventListener(
    "scroll",
    handleScroll,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    handleResize
  );


  document.addEventListener(
    "click",
    handleDocumentClick
  );


  handleScroll();

});


onBeforeUnmount(() => {

  window.removeEventListener(
    "scroll",
    handleScroll
  );


  window.removeEventListener(
    "resize",
    handleResize
  );


  document.removeEventListener(
    "click",
    handleDocumentClick
  );


  document.body.style.overflow = "";

});

</script>


<style scoped>

/* =========================================================
   NAVBAR
========================================================= */

.navbar {

  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: 1000;

  padding: 13px 0;

  background: transparent;

  transition:
    padding .3s ease,
    background .3s ease,
    box-shadow .3s ease,
    border-color .3s ease;

}


.navbar-scrolled {

  padding: 7px 0;

  background:
    color-mix(
      in srgb,
      var(--bg-primary, #070a12) 88%,
      transparent
    );

  backdrop-filter:
    blur(22px);

  -webkit-backdrop-filter:
    blur(22px);

  border-bottom:
    1px solid
    var(
      --border,
      rgba(255,255,255,.07)
    );

  box-shadow:
    0 10px 35px
    rgba(0,0,0,.12);

}


/* =========================================================
   CONTAINER
========================================================= */

.navbar-container {

  width:
    min(
      calc(100% - 32px),
      1180px
    );

  height: 52px;

  margin: auto;

  display: flex;

  align-items: center;

  gap: 18px;

}


/* =========================================================
   PREMIUM LOGO
========================================================= */

.logo {

  display: flex;

  align-items: center;

  gap: 9px;

  flex-shrink: 0;

  text-decoration: none;

}


/* K MONOGRAM */

.logo-mark {

  position: relative;

  width: 38px;

  height: 38px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 12px;

  overflow: hidden;

  background:

    linear-gradient(
      145deg,
      rgba(255,255,255,.13),
      rgba(255,255,255,.035)
    );

  border:
    1px solid
    rgba(255,255,255,.15);

  color: #ffffff;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    sans-serif;

  font-size: 17px;

  font-weight: 800;

  letter-spacing: -.08em;

  box-shadow:

    0 8px 25px
    rgba(0,0,0,.24),

    inset 0 1px 0
    rgba(255,255,255,.13),

    0 0 20px
    rgba(99,102,241,.12);

  transition:
    transform .35s cubic-bezier(.2,.8,.2,1),
    box-shadow .35s ease,
    border-color .35s ease;

}


/* LOGO GLOW */

.logo-mark::before {

  content: "";

  position: absolute;

  top: -42%;
  left: -30%;

  width: 85px;
  height: 85px;

  border-radius: 50%;

  background:

    radial-gradient(
      circle,
      rgba(129,140,248,.32),
      transparent 68%
    );

  pointer-events: none;

  transition:
    transform .4s ease;

}


/* LOGO TOP HIGHLIGHT */

.logo-mark::after {

  content: "";

  position: absolute;

  top: 1px;

  left: 8px;

  right: 8px;

  height: 1px;

  background:

    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.5),
      transparent
    );

  opacity: .7;

}


/* LOGO HOVER */

.logo:hover .logo-mark {

  transform:
    translateY(-2px)
    rotate(-4deg)
    scale(1.06);

  border-color:
    rgba(129,140,248,.48);

  box-shadow:

    0 13px 32px
    rgba(0,0,0,.30),

    inset 0 1px 0
    rgba(255,255,255,.18),

    0 0 30px
    rgba(99,102,241,.24);

}


.logo:hover .logo-mark::before {

  transform:
    translate(16px, 11px)
    scale(1.2);

}


/* =========================================================
   LOGO TEXT
========================================================= */

.logo-text {

  color:
    var(--text-primary, #ffffff);

  font-size: 18px;

  font-weight: 700;

  line-height: 1;

  letter-spacing: -.045em;

}


.logo-text span {

  color:
    #818cf8;

  font-weight: 800;

}


/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

.desktop-nav {

  display: flex;

  align-items: center;

  gap: 2px;

  margin-left: auto;

}


/* NAV LINKS */

.nav-link {

  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 6px;

  padding: 8px 9px;

  border: none;

  background: transparent;

  color:
    var(
      --text-secondary,
      #a7afbd
    );

  font-family: inherit;

  font-size: 12px;

  font-weight: 550;

  line-height: 1;

  text-decoration: none;

  border-radius: 9px;

  cursor: pointer;

  transition:
    color .25s ease,
    background .25s ease,
    transform .25s ease;

}


.nav-link:hover {

  color:
    var(
      --text-primary,
      #ffffff
    );

  background:
    var(
      --card-bg,
      rgba(255,255,255,.045)
    );

  transform:
    translateY(-1px);

}


.nav-link.active {

  color:
    var(
      --text-primary,
      #ffffff
    );

}


/* =========================================================
   NAV INDICATOR
========================================================= */

.nav-indicator {

  position: absolute;

  left: 50%;

  bottom: 1px;

  width: 0;

  height: 2px;

  border-radius: 999px;

  background:

    linear-gradient(
      90deg,
      var(--accent, #6366f1),
      var(--accent-secondary, #06b6d4)
    );

  transform:
    translateX(-50%);

  box-shadow:
    0 0 9px
    rgba(99,102,241,.5);

  transition:
    width .3s ease;

}


.nav-link.active .nav-indicator {

  width: 18px;

}


/* =========================================================
   MORE
========================================================= */

.more-wrapper {

  position: relative;

}


.more-button {

  gap: 6px;

}


.more-chevron {

  display: inline-flex;

  font-size: 10px;

  opacity: .55;

  transition:
    transform .25s ease;

}


.more-chevron.rotated {

  transform:
    rotate(180deg);

}


/* =========================================================
   MORE DROPDOWN
========================================================= */

.more-dropdown {

  position: absolute;

  top:
    calc(100% + 12px);

  right: -12px;

  width: 265px;

  padding: 9px;

  border:
    1px solid
    var(
      --border,
      rgba(255,255,255,.09)
    );

  border-radius: 16px;

  background:

    color-mix(
      in srgb,
      var(
        --bg-secondary,
        #0b0f19
      ) 96%,
      transparent
    );

  backdrop-filter:
    blur(25px);

  -webkit-backdrop-filter:
    blur(25px);

  box-shadow:

    0 25px 65px
    rgba(0,0,0,.30),

    inset 0 1px 0
    rgba(255,255,255,.04);

}


/* DROPDOWN LABEL */

.dropdown-label {

  padding:
    7px 10px 8px;

  color:
    #747e92;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: .17em;

  text-transform: uppercase;

}


/* DROPDOWN LINK */

.dropdown-link {

  display: flex;

  align-items: center;

  gap: 10px;

  padding: 10px;

  border-radius: 11px;

  color:
    var(
      --text-secondary,
      #a7afbd
    );

  text-decoration: none;

  transition:
    background .22s ease,
    color .22s ease,
    transform .22s ease;

}


.dropdown-link:hover,
.dropdown-link.active {

  color:
    var(
      --text-primary,
      #ffffff
    );

  background:
    rgba(255,255,255,.045);

  transform:
    translateX(2px);

}


/* DROPDOWN ICON */

.dropdown-icon {

  width: 30px;

  height: 30px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 8px;

  background:
    rgba(99,102,241,.11);

  color:
    #a5b4fc;

  font-size: 13px;

}


/* DROPDOWN CONTENT */

.dropdown-content {

  flex: 1;

  min-width: 0;

}


.dropdown-content strong {

  display: block;

  margin-bottom: 2px;

  color: inherit;

  font-size: 11px;

  font-weight: 650;

}


.dropdown-content small {

  display: block;

  overflow: hidden;

  color:
    #667185;

  font-size: 9px;

  line-height: 1.4;

  text-overflow: ellipsis;

  white-space: nowrap;

}


/* ARROW */

.dropdown-arrow {

  font-size: 13px;

  opacity: .4;

  transition:
    transform .2s ease,
    opacity .2s ease;

}


.dropdown-link:hover .dropdown-arrow {

  opacity: .8;

  transform:
    translate(2px,-2px);

}


/* =========================================================
   DROPDOWN TRANSITION
========================================================= */

.dropdown-enter-active,
.dropdown-leave-active {

  transition:
    opacity .2s ease,
    transform .2s ease;

}


.dropdown-enter-from,
.dropdown-leave-to {

  opacity: 0;

  transform:
    translateY(-7px)
    scale(.97);

}


/* =========================================================
   ACTIONS
========================================================= */

.navbar-actions {

  display: flex;

  align-items: center;

  gap: 8px;

  flex-shrink: 0;

}


/* =========================================================
   AI BUTTON
========================================================= */

.ai-button {

  position: relative;

  height: 38px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 6px;

  padding: 0 13px;

  overflow: hidden;

  border:
    1px solid
    rgba(139,92,246,.28);

  border-radius: 999px;

  background:

    linear-gradient(
      120deg,
      rgba(124,58,237,.14),
      rgba(6,182,212,.08)
    );

  color:
    var(--text-primary, #ffffff);

  font-family: inherit;

  font-size: 11px;

  font-weight: 650;

  cursor: pointer;

  transition:
    transform .25s ease,
    border-color .25s ease,
    box-shadow .25s ease;

}


.ai-button:hover {

  transform:
    translateY(-2px);

  border-color:
    rgba(167,139,250,.55);

  box-shadow:

    0 10px 28px
    rgba(124,58,237,.20);

}


/* AI GLOW */

.ai-glow {

  position: absolute;

  width: 75px;
  height: 75px;

  top: -32px;
  left: -20px;

  border-radius: 50%;

  background:
    rgba(139,92,246,.18);

  filter:
    blur(18px);

  pointer-events: none;

}


/* AI ICON */

.ai-icon {

  position: relative;

  color:
    #a78bfa;

  font-size: 14px;

  animation:
    ai-float
    2.2s
    ease-in-out
    infinite;

}


.ai-text {

  position: relative;

}


@keyframes ai-float {

  0%,
  100% {

    transform:
      translateY(0);

  }

  50% {

    transform:
      translateY(-2px)
      rotate(8deg);

  }

}


/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

.menu-button {

  display: none;

  width: 40px;

  height: 40px;

  padding: 0;

  border:
    1px solid
    var(
      --border,
      rgba(255,255,255,.09)
    );

  border-radius: 11px;

  background:
    var(
      --card-bg,
      rgba(255,255,255,.045)
    );

  cursor: pointer;

}


.menu-button span {

  display: block;

  width: 17px;

  height: 2px;

  margin: 4px auto;

  border-radius: 999px;

  background:
    var(
      --text-primary,
      #ffffff
    );

  transition:
    transform .3s ease,
    opacity .3s ease;

}


.menu-button.active span:nth-child(1) {

  transform:
    translateY(6px)
    rotate(45deg);

}


.menu-button.active span:nth-child(2) {

  opacity: 0;

}


.menu-button.active span:nth-child(3) {

  transform:
    translateY(-6px)
    rotate(-45deg);

}


/* =========================================================
   MOBILE NAV
========================================================= */

.mobile-nav {

  position: fixed;

  top: 70px;

  left: 14px;
  right: 14px;

  max-height:
    calc(100vh - 85px);

  overflow-y: auto;

  border:
    1px solid
    var(
      --border,
      rgba(255,255,255,.09)
    );

  border-radius: 19px;

  background:

    color-mix(
      in srgb,
      var(
        --bg-secondary,
        #0b0f19
      ) 96%,
      transparent
    );

  backdrop-filter:
    blur(25px);

  -webkit-backdrop-filter:
    blur(25px);

  box-shadow:

    0 25px 65px
    rgba(0,0,0,.32);

}


.mobile-nav-inner {

  padding: 12px;

}


.mobile-nav-label {

  padding:
    7px 11px 9px;

  color:
    #747e92;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: .18em;

  text-transform: uppercase;

}


/* =========================================================
   MOBILE LINKS
========================================================= */

.mobile-nav-link {

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 12px;

  color:
    var(
      --text-secondary,
      #a7afbd
    );

  text-decoration: none;

  border-radius: 11px;

  font-size: 12px;

  transition:
    color .22s ease,
    background .22s ease,
    transform .22s ease;

}


.mobile-link-left {

  display: flex;

  align-items: center;

  gap: 11px;

}


.mobile-link-number {

  min-width: 22px;

  color:
    var(
      --accent,
      #818cf8
    );

  font-size: 9px;

  font-weight: 700;

  opacity: .75;

}


.mobile-nav-link:hover,
.mobile-nav-link.active {

  color:
    var(
      --text-primary,
      #ffffff
    );

  background:
    var(
      --card-bg,
      rgba(255,255,255,.05)
    );

  transform:
    translateX(3px);

}


.mobile-arrow {

  font-size: 15px;

  opacity: .45;

  transition:
    transform .2s ease;

}


.mobile-nav-link:hover .mobile-arrow {

  transform:
    translateX(4px);

  color:
    #818cf8;

}


/* =========================================================
   MOBILE MORE
========================================================= */

.mobile-more-section {

  margin-top: 4px;

  border-top:
    1px solid
    rgba(255,255,255,.06);

  border-bottom:
    1px solid
    rgba(255,255,255,.06);

}


.mobile-more-header {

  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 13px 12px;

  border: none;

  background: transparent;

  color:
    var(
      --text-secondary,
      #a7afbd
    );

  font-family: inherit;

  font-size: 12px;

  font-weight: 600;

  cursor: pointer;

}


.mobile-more-title {

  display: flex;

  align-items: center;

  gap: 11px;

}


.mobile-more-icon {

  width: 21px;

  color:
    var(
      --accent,
      #818cf8
    );

  font-size: 15px;

}


.mobile-more-chevron {

  font-size: 11px;

  opacity: .5;

  transition:
    transform .25s ease;

}


.mobile-more-chevron.rotated {

  transform:
    rotate(180deg);

}


.mobile-more-items {

  padding-bottom: 5px;

}


.more-mobile-link {

  padding-left: 12px;

}


/* =========================================================
   MOBILE AI
========================================================= */

.mobile-ai-button {

  width: 100%;

  display: flex;

  align-items: center;

  gap: 9px;

  margin-top: 10px;

  padding: 13px;

  border:
    1px solid
    rgba(139,92,246,.28);

  border-radius: 12px;

  background:

    linear-gradient(
      120deg,
      rgba(124,58,237,.14),
      rgba(6,182,212,.08)
    );

  color:
    var(
      --text-primary,
      #ffffff
    );

  font-family: inherit;

  font-size: 12px;

  font-weight: 650;

  cursor: pointer;

}


.mobile-ai-icon {

  color:
    #a78bfa;

  font-size: 16px;

}


.mobile-ai-arrow {

  margin-left: auto;

  opacity: .55;

}


/* =========================================================
   MOBILE TRANSITIONS
========================================================= */

.mobile-menu-enter-active,
.mobile-menu-leave-active {

  transition:
    opacity .25s ease,
    transform .25s ease;

}


.mobile-menu-enter-from,
.mobile-menu-leave-to {

  opacity: 0;

  transform:
    translateY(-10px)
    scale(.98);

}


/* =========================================================
   MOBILE MORE TRANSITION
========================================================= */

.mobile-more-enter-active,
.mobile-more-leave-active {

  transition:
    opacity .22s ease,
    max-height .25s ease;

}


.mobile-more-enter-from,
.mobile-more-leave-to {

  opacity: 0;

  max-height: 0;

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

  .navbar-container {

    width:
      min(
        calc(100% - 28px),
        1080px
      );

    gap: 12px;

  }


  .nav-link {

    padding-inline: 7px;

    font-size: 11px;

  }


  .ai-button {

    padding-inline: 11px;

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 900px) {

  .desktop-nav {

    display: none;

  }


  .menu-button {

    display: block;

  }


  .navbar-actions {

    margin-left: auto;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 600px) {

  .navbar {

    padding: 10px 0;

  }


  .navbar-scrolled {

    padding: 6px 0;

  }


  .navbar-container {

    width:
      calc(100% - 24px);

    height: 48px;

  }


  .logo {

    gap: 8px;

  }


  .logo-mark {

    width: 34px;

    height: 34px;

    border-radius: 10px;

    font-size: 15px;

  }


  .logo-text {

    font-size: 17px;

  }


  .ai-button {

    display: none;

  }


  .menu-button {

    width: 38px;

    height: 38px;

  }


  .mobile-nav {

    top: 64px;

  }

}


/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 380px) {

  .navbar-container {

    width:
      calc(100% - 20px);

  }


  .logo-mark {

    width: 32px;

    height: 32px;

    font-size: 14px;

  }


  .logo-text {

    font-size: 16px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .logo-mark,
  .ai-icon,
  .nav-link,
  .dropdown-link,
  .mobile-nav-link {

    transition: none !important;

    animation: none !important;

  }

}

</style>