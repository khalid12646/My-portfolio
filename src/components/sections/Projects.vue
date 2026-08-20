<template>
  <section id="projects" class="projects-section">

    <!-- Background -->
    <div class="projects-bg">
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
      <div class="bg-grid"></div>
    </div>

    <div class="container">

      <!-- Section Header -->
      <div class="section-header" v-reveal>

        <div class="eyebrow">
          <span class="eyebrow-line"></span>
          SELECTED WORK
        </div>

        <h2>
          Projects that
          <span>make an impact.</span>
        </h2>

        <p>
          A selection of projects focused on modern UI,
          scalable frontend architecture, AI integration
          and meaningful user experiences.
        </p>

      </div>


      <!-- Featured Project -->
      <article
        class="featured-project"
        v-reveal
        @mousemove="handleFeaturedMove"
        @mouseleave="resetFeatured"
        :style="featuredStyle"
      >

        <div class="featured-glow"></div>

        <!-- Image -->
        <div class="featured-image">

          <div class="image-overlay"></div>

          <img
            :src="featuredProject.image"
            :alt="featuredProject.title"
          />

          <div class="featured-badge">
            <span></span>
            FEATURED PROJECT
          </div>

          <div class="image-number">
            01
          </div>

        </div>


        <!-- Content -->
        <div class="featured-content">

          <div class="project-meta">
            {{ featuredProject.category }}
            <span>•</span>
            {{ featuredProject.year }}
          </div>

          <h3>
            {{ featuredProject.title }}
          </h3>

          <p>
            {{ featuredProject.description }}
          </p>


          <!-- Tech -->
          <div class="tech-list">

            <span
              v-for="tech in featuredProject.technologies"
              :key="tech"
            >
              {{ tech }}
            </span>

          </div>


          <!-- Actions -->
          <div class="project-actions">

            <a
              v-if="featuredProject.github"
              :href="featuredProject.github"
              target="_blank"
              rel="noopener noreferrer"
              class="project-button primary"
            >
              <span>View GitHub</span>
              <span class="button-arrow">↗</span>
            </a>

            <a
              v-if="featuredProject.live && featuredProject.live !== '#'"
              :href="featuredProject.live"
              target="_blank"
              rel="noopener noreferrer"
              class="project-button secondary"
            >
              <span>Live Preview</span>
              <span class="button-arrow">↗</span>
            </a>

          </div>

        </div>

      </article>


      <!-- Project Grid -->
      <div class="projects-grid">

        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card"
          v-reveal
          :style="{
            '--delay': `${index * 100}ms`,
            transform: `perspective(1200px)
              rotateX(${cardTransforms[index].y}deg)
              rotateY(${cardTransforms[index].x}deg)`
          }"
          @mousemove="handleCardMove($event, index)"
          @mouseleave="resetCard(index)"
        >

          <!-- Image -->
          <div class="project-image">

            <img
              :src="project.image"
              :alt="project.title"
            />

            <div class="image-shade"></div>

            <span class="project-index">
              {{ String(index + 2).padStart(2, "0") }}
            </span>

            <span class="project-category">
              {{ project.category }}
            </span>

            <!-- Hover Reveal -->
            <div class="image-reveal">

              <span>
                View project
              </span>

              <span class="reveal-arrow">
                ↗
              </span>

            </div>

          </div>


          <!-- Card Content -->
          <div class="project-card-content">

            <div class="project-card-top">

              <h3>
                {{ project.title }}
              </h3>

              <span class="card-arrow">
                ↗
              </span>

            </div>

            <p>
              {{ project.description }}
            </p>


            <div class="card-tech">

              <span
                v-for="tech in project.technologies"
                :key="tech"
              >
                {{ tech }}
              </span>

            </div>


            <div class="card-actions">

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="small-button"
              >
                GitHub ↗
              </a>

              <a
                v-if="project.live && project.live !== '#'"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="small-button filled"
              >
                Live ↗
              </a>

            </div>

          </div>

        </article>

      </div>


      <!-- Bottom CTA -->
      <div
        class="projects-footer"
        v-reveal
      >

        <div>
          <span class="footer-label">
            MORE PROJECTS
          </span>

          <h3>
            Let's build something
            <span>remarkable.</span>
          </h3>
        </div>

        <a
          href="#contact"
          class="all-projects-button"
        >
          <span>Start a conversation</span>
          <span>↗</span>
        </a>

      </div>

    </div>

  </section>
</template>


<script setup>
import { computed, ref } from "vue";


/* =========================================================
   PROJECT DATA
========================================================= */

const featuredProject = {
  title: "Attendo Event Management",
  category: "Frontend Application",
  year: "2026",

  description:
    "A modern event management platform designed with a scalable Vue.js frontend architecture, responsive interfaces and a polished admin experience.",

  image:
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85",

  technologies: [
    "Vue.js",
    "JavaScript",
    "Vue Router",
    "REST API",
    "Bootstrap",
    "Git",
  ],

  github:
    "https://github.com/",

  live:
    "#",
};


const projects = [
  {
    title: "AI Portfolio Assistant",
    category: "AI / Web App",

    description:
      "An AI-powered portfolio assistant that allows recruiters and visitors to interact with portfolio information through a conversational interface.",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85",

    technologies: [
      "Vue 3",
      "AI",
      "Qwen",
      "Express",
    ],

    github:
      "https://github.com/",

    live:
      "#",
  },

  {
    title: "Modern Developer Portfolio",
    category: "Portfolio",

    description:
      "A premium personal portfolio focused on animation, responsive design, dark themes and interactive project presentation.",

    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=85",

    technologies: [
      "Vue 3",
      "Vite",
      "Tailwind",
      "JavaScript",
    ],

    github:
      "https://github.com/",

    live:
      "#",
  },

  {
    title: "Career Application Platform",
    category: "Web Application",

    description:
      "A structured career application interface with dynamic job positions, application forms and reusable Vue components.",

    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",

    technologies: [
      "Vue.js",
      "Vue Router",
      "Forms",
      "API",
    ],

    github:
      "https://github.com/",

    live:
      "#",
  },

  {
    title: "Business Services Platform",
    category: "Corporate Website",

    description:
      "A responsive business website with reusable sections, industry pages, technology pages and advanced theme support.",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",

    technologies: [
      "Vue.js",
      "CSS",
      "Bootstrap",
      "Responsive UI",
    ],

    github:
      "https://github.com/",

    live:
      "#",
  },
];


/* =========================================================
   FEATURED PROJECT 3D EFFECT
========================================================= */

const featuredRotateX = ref(0);
const featuredRotateY = ref(0);

const handleFeaturedMove = (event) => {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  featuredRotateY.value =
    ((x - centerX) / centerX) * 2;

  featuredRotateX.value =
    ((centerY - y) / centerY) * 2;

  element.style.setProperty(
    "--mouse-x",
    `${x}px`
  );

  element.style.setProperty(
    "--mouse-y",
    `${y}px`
  );
};


const resetFeatured = () => {
  featuredRotateX.value = 0;
  featuredRotateY.value = 0;
};


const featuredStyle = computed(() => ({
  transform:
    `perspective(1400px)
     rotateX(${featuredRotateX.value}deg)
     rotateY(${featuredRotateY.value}deg)`,
}));


/* =========================================================
   PROJECT CARD 3D EFFECT
========================================================= */

const cardTransforms = ref(
  projects.map(() => ({
    x: 0,
    y: 0,
  }))
);


const handleCardMove = (event, index) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  cardTransforms.value[index] = {
    x:
      ((x - centerX) / centerX) * 2.5,

    y:
      ((centerY - y) / centerY) * 2.5,
  };

  card.style.setProperty(
    "--mouse-x",
    `${x}px`
  );

  card.style.setProperty(
    "--mouse-y",
    `${y}px`
  );
};


const resetCard = (index) => {
  cardTransforms.value[index] = {
    x: 0,
    y: 0,
  };
};
</script>


<style scoped>

/* =========================================================
   DARK MODE ONLY
========================================================= */

.projects-section {
  position: relative;

  padding: 140px 0;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(124, 58, 237, 0.09),
      transparent 32%
    ),
    radial-gradient(
      circle at 90% 70%,
      rgba(6, 182, 212, 0.07),
      transparent 32%
    ),
    #05070b;

  color: #ffffff;
}


/* =========================================================
   BACKGROUND
========================================================= */

.projects-bg {
  position: absolute;

  inset: 0;

  pointer-events: none;
}

.bg-grid {
  position: absolute;

  inset: 0;

  opacity: 0.15;

  background-image:
    linear-gradient(
      rgba(255,255,255,0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.035) 1px,
      transparent 1px
    );

  background-size: 60px 60px;

  mask-image:
    linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );
}

.bg-orb {
  position: absolute;

  border-radius: 50%;

  filter: blur(100px);

  opacity: 0.2;
}

.orb-1 {
  width: 350px;
  height: 350px;

  left: -150px;
  top: 10%;

  background: #7c3aed;
}

.orb-2 {
  width: 320px;
  height: 320px;

  right: -150px;
  bottom: 10%;

  background: #06b6d4;
}


/* =========================================================
   CONTAINER
========================================================= */

.container {
  position: relative;

  width:
    min(
      calc(100% - 40px),
      1200px
    );

  margin: auto;

  z-index: 2;
}


/* =========================================================
   HEADER
========================================================= */

.section-header {
  max-width: 720px;

  margin-bottom: 65px;
}

.eyebrow {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 18px;

  color: #8f96a8;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.2em;
}

.eyebrow-line {
  width: 28px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      #8b5cf6,
      #22d3ee
    );
}

.section-header h2 {
  margin: 0;

  color: #ffffff;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size:
    clamp(44px, 5vw, 70px);

  line-height: 0.98;

  letter-spacing: -0.06em;
}

.section-header h2 span {
  display: block;

  background:
    linear-gradient(
      100deg,
      #8b5cf6,
      #22d3ee
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

.section-header p {
  max-width: 620px;

  margin:
    24px 0 0;

  color: #8f96a8;

  font-size: 14px;

  line-height: 1.8;
}


/* =========================================================
   FEATURED PROJECT
========================================================= */

.featured-project {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;

  display: grid;

  grid-template-columns:
    1.1fr 0.9fr;

  min-height: 500px;

  overflow: hidden;

  border:
    1px solid
    rgba(255,255,255,0.09);

  border-radius: 30px;

  background:
    linear-gradient(
      145deg,
      #111827,
      #0b0f17
    );

  box-shadow:
    0 35px 100px
    rgba(0,0,0,0.4);

  transform-style: preserve-3d;

  transition:
    transform 0.18s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.featured-project::before {
  content: "";

  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    radial-gradient(
      350px circle at var(--mouse-x) var(--mouse-y),
      rgba(139,92,246,0.13),
      transparent 70%
    );
}

.featured-project:hover {
  border-color:
    rgba(139,92,246,0.35);

  box-shadow:
    0 45px 120px
    rgba(0,0,0,0.5);
}


/* =========================================================
   FEATURED IMAGE
========================================================= */

.featured-image {
  position: relative;

  min-height: 500px;

  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  filter:
    saturate(0.9)
    contrast(1.03);

  transition:
    transform 0.8s ease,
    filter 0.8s ease;
}

.featured-project:hover
.featured-image img {
  transform: scale(1.06);

  filter:
    saturate(1.05)
    contrast(1.04);
}

.image-overlay {
  position: absolute;

  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      90deg,
      transparent 45%,
      rgba(5,7,11,0.95)
    );
}

.featured-badge {
  position: absolute;

  top: 24px;
  left: 24px;

  z-index: 3;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 8px 11px;

  border:
    1px solid
    rgba(255,255,255,0.12);

  border-radius: 999px;

  background:
    rgba(5,7,11,0.7);

  backdrop-filter: blur(14px);

  color: #ffffff;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 0.12em;
}

.featured-badge span {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow:
    0 0 12px
    rgba(34,211,238,0.8);
}

.image-number {
  position: absolute;

  bottom: 25px;
  left: 25px;

  z-index: 3;

  color:
    rgba(255,255,255,0.4);

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.1em;
}


/* =========================================================
   FEATURED CONTENT
========================================================= */

.featured-content {
  position: relative;

  z-index: 3;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 50px 45px;

  transform: translateZ(30px);
}

.project-meta {
  display: flex;

  gap: 9px;

  color: #a78bfa;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.13em;

  text-transform: uppercase;
}

.featured-content h3 {
  margin:
    16px 0 16px;

  color: #ffffff;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size:
    clamp(30px, 4vw, 48px);

  line-height: 1;

  letter-spacing: -0.055em;
}

.featured-content > p {
  margin: 0;

  color: #8f96a8;

  font-size: 13px;

  line-height: 1.8;
}


/* =========================================================
   TECH
========================================================= */

.tech-list {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 25px;
}

.tech-list span {
  padding: 7px 9px;

  border:
    1px solid
    rgba(255,255,255,0.08);

  border-radius: 7px;

  background:
    #151b26;

  color: #a0a7b5;

  font-size: 9px;

  font-weight: 600;
}


/* =========================================================
   BUTTONS
========================================================= */

.project-actions {
  display: flex;

  flex-wrap: wrap;

  gap: 9px;

  margin-top: 30px;
}

.project-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 12px;

  min-height: 44px;

  padding: 0 17px;

  border-radius: 11px;

  font-size: 11px;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.project-button:hover {
  transform:
    translateY(-3px);
}

.project-button.primary {
  background:
    linear-gradient(
      110deg,
      #7c3aed,
      #0891b2
    );

  color: #ffffff;

  box-shadow:
    0 10px 30px
    rgba(124,58,237,0.25);
}

.project-button.primary:hover {
  box-shadow:
    0 15px 40px
    rgba(124,58,237,0.4);
}

.project-button.secondary {
  border:
    1px solid
    rgba(255,255,255,0.1);

  background:
    #151b26;

  color: #ffffff;
}

.button-arrow {
  font-size: 14px;
}


/* =========================================================
   PROJECT GRID
========================================================= */

.projects-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 20px;

  margin-top: 22px;
}


/* =========================================================
   PROJECT CARD
========================================================= */

.project-card {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;

  overflow: hidden;

  border:
    1px solid
    rgba(255,255,255,0.08);

  border-radius: 23px;

  background:
    #0d121b;

  transform-style: preserve-3d;

  transition:
    transform 0.18s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card::before {
  content: "";

  position: absolute;

  inset: 0;

  z-index: 4;

  pointer-events: none;

  background:
    radial-gradient(
      220px circle at var(--mouse-x) var(--mouse-y),
      rgba(139,92,246,0.12),
      transparent 70%
    );

  opacity: 0;

  transition:
    opacity 0.3s ease;
}

.project-card:hover {
  border-color:
    rgba(139,92,246,0.32);

  box-shadow:
    0 30px 80px
    rgba(0,0,0,0.45);
}

.project-card:hover::before {
  opacity: 1;
}


/* =========================================================
   CARD IMAGE
========================================================= */

.project-image {
  position: relative;

  height: 270px;

  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;

  transition:
    transform 0.7s ease;
}

.project-card:hover
.project-image img {
  transform:
    scale(1.09);
}

.image-shade {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.05),
      rgba(0,0,0,0.65)
    );
}

.project-index {
  position: absolute;

  top: 18px;
  left: 18px;

  color:
    rgba(255,255,255,0.65);

  font-size: 10px;

  font-weight: 800;
}

.project-category {
  position: absolute;

  right: 16px;
  top: 16px;

  padding: 7px 9px;

  border:
    1px solid
    rgba(255,255,255,0.12);

  border-radius: 999px;

  background:
    rgba(0,0,0,0.5);

  backdrop-filter: blur(10px);

  color: #ffffff;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}


/* =========================================================
   IMAGE REVEAL
========================================================= */

.image-reveal {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  background:
    rgba(7,9,15,0.7);

  backdrop-filter: blur(4px);

  color: #ffffff;

  font-size: 12px;

  font-weight: 700;

  opacity: 0;

  transform:
    scale(1.04);

  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.project-card:hover .image-reveal {
  opacity: 1;

  transform:
    scale(1);
}

.reveal-arrow {
  width: 28px;
  height: 28px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #06b6d4
    );
}


/* =========================================================
   CARD CONTENT
========================================================= */

.project-card-content {
  position: relative;

  z-index: 5;

  padding: 22px;

  background:
    #0d121b;
}

.project-card-top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;
}

.project-card h3 {
  margin: 0;

  color: #ffffff;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size: 20px;

  letter-spacing: -0.035em;
}

.card-arrow {
  color:
    #8b5cf6;

  font-size: 18px;

  transition:
    transform 0.25s ease;
}

.project-card:hover .card-arrow {
  transform:
    translate(3px,-3px);
}

.project-card-content > p {
  margin:
    10px 0 16px;

  color:
    #8f96a8;

  font-size: 11px;

  line-height: 1.7;
}


/* =========================================================
   CARD TECH
========================================================= */

.card-tech {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;
}

.card-tech span {
  padding: 5px 7px;

  border-radius: 6px;

  background:
    rgba(139,92,246,0.09);

  color:
    #a78bfa;

  font-size: 8px;

  font-weight: 700;
}


/* =========================================================
   CARD ACTIONS
========================================================= */

.card-actions {
  display: flex;

  gap: 7px;

  margin-top: 19px;
}

.small-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-height: 32px;

  padding: 0 10px;

  border:
    1px solid
    rgba(255,255,255,0.08);

  border-radius: 8px;

  background:
    #151b26;

  color:
    #a0a7b5;

  font-size: 9px;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}

.small-button:hover {
  transform:
    translateY(-2px);

  color: #ffffff;

  background:
    #1c2533;
}

.small-button.filled {
  background:
    linear-gradient(
      110deg,
      rgba(124,58,237,0.85),
      rgba(8,145,178,0.85)
    );

  color: #ffffff;

  border-color:
    transparent;
}


/* =========================================================
   FOOTER CTA
========================================================= */

.projects-footer {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  margin-top: 90px;

  padding-top: 35px;

  border-top:
    1px solid
    rgba(255,255,255,0.08);
}

.footer-label {
  color:
    #8b5cf6;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 0.18em;
}

.projects-footer h3 {
  margin: 9px 0 0;

  color: #ffffff;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size: 27px;

  letter-spacing: -0.04em;
}

.projects-footer h3 span {
  color:
    #8b5cf6;
}

.all-projects-button {
  display: inline-flex;

  align-items: center;

  gap: 25px;

  padding: 13px 16px;

  border:
    1px solid
    rgba(139,92,246,0.25);

  border-radius: 12px;

  background:
    rgba(139,92,246,0.08);

  color: #ffffff;

  font-size: 11px;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.all-projects-button:hover {
  transform:
    translateY(-3px);

  background:
    rgba(139,92,246,0.16);

  border-color:
    rgba(139,92,246,0.45);
}

.all-projects-button span:last-child {
  color:
    #a78bfa;

  font-size: 17px;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 900px) {

  .featured-project {
    grid-template-columns: 1fr;
  }

  .featured-image {
    min-height: 380px;
  }

  .featured-content {
    padding: 35px;
  }
}


@media (max-width: 700px) {

  .projects-section {
    padding: 100px 0;
  }

  .container {
    width:
      calc(100% - 30px);
  }

  .section-header h2 {
    font-size: 44px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 240px;
  }

  .projects-footer {
    align-items: flex-start;

    flex-direction: column;
  }
}


@media (max-width: 500px) {

  .featured-project {
    border-radius: 22px;
  }

  .featured-image {
    min-height: 280px;
  }

  .featured-content {
    padding: 25px;
  }

  .featured-content h3 {
    font-size: 32px;
  }

  .project-actions {
    flex-direction: column;
  }

  .project-button {
    width: 100%;
  }

  .project-card-content {
    padding: 18px;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .featured-project,
  .project-card,
  .project-image img,
  .image-reveal {
    transition: none;
  }

}
</style>