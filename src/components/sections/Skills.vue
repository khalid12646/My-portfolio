<template>
  <section class="skills-section" id="skills">
    <div class="skills-bg">
      <div class="orb orb-one"></div>
      <div class="orb orb-two"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container">

      <!-- Section Header -->
      <div class="section-header" v-reveal>
        <div class="eyebrow">
          <span class="eyebrow-dot"></span>
          TECHNICAL EXPERTISE
        </div>

        <h2>
          Tools I use to
          <span>build ideas.</span>
        </h2>

        <p>
          A modern frontend toolkit focused on building
          scalable, interactive and high-performance digital
          experiences.
        </p>
      </div>

      <!-- Main Skills Layout -->
      <div class="skills-layout">

        <!-- Featured Stack -->
        <div class="featured-stack" v-reveal>

          <div class="stack-card">

            <div class="stack-top">
              <div>
                <span class="mini-label">PRIMARY STACK</span>

                <h3>Frontend Engineering</h3>
              </div>

              <div class="stack-icon">
                ✦
              </div>
            </div>

            <p class="stack-description">
              Building responsive interfaces with modern
              JavaScript frameworks, component systems and
              utility-first styling.
            </p>

            <div class="skill-progress-list">

              <div
                v-for="skill in featuredSkills"
                :key="skill.name"
                class="progress-item"
              >
                <div class="progress-heading">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>

                <div class="progress-track">
                  <span
                    class="progress-fill"
                    :style="{ width: skill.level + '%' }"
                  ></span>
                </div>
              </div>

            </div>

          </div>

          <!-- Availability -->
          <div class="availability-card">

            <div class="availability-icon">
              <span></span>
            </div>

            <div>
              <strong>Available for opportunities</strong>
              <p>Open to exciting frontend projects.</p>
            </div>

            <span class="arrow">↗</span>

          </div>

        </div>

        <!-- Skill Cards -->
        <div class="skills-grid">

          <article
            v-for="(category, index) in skillCategories"
            :key="category.title"
            class="skill-card"
            v-reveal
            :style="{ '--delay': `${index * 80}ms` }"
          >

            <div class="card-glow"></div>

            <div class="skill-card-header">

              <div
                class="category-icon"
                :class="category.color"
              >
                {{ category.icon }}
              </div>

              <span class="category-number">
                {{ String(index + 1).padStart(2, "0") }}
              </span>

            </div>

            <h3>
              {{ category.title }}
            </h3>

            <p>
              {{ category.description }}
            </p>

            <div class="tech-tags">

              <span
                v-for="tech in category.skills"
                :key="tech"
                class="tech-tag"
              >
                <span class="tag-dot"></span>
                {{ tech }}
              </span>

            </div>

          </article>

        </div>

      </div>

      <!-- Technology Marquee -->
      <div class="tech-marquee" v-reveal>

        <div class="marquee-track">

          <template
            v-for="loop in 2"
            :key="loop"
          >

            <span
              v-for="tech in marqueeTech"
              :key="`${loop}-${tech}`"
              class="marquee-item"
            >
              {{ tech }}
              <b>✦</b>
            </span>

          </template>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const featuredSkills = [
  {
    name: "Vue.js",
    level: 92,
  },
  {
    name: "JavaScript",
    level: 88,
  },
  {
    name: "HTML / CSS",
    level: 94,
  },
  {
    name: "Tailwind CSS",
    level: 90,
  },
];

const skillCategories = [
  {
    title: "Frontend",
    icon: "⌘",
    color: "purple",
    description:
      "Modern interfaces with reusable components and scalable architecture.",
    skills: [
      "Vue.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    title: "Frameworks",
    icon: "◈",
    color: "cyan",
    description:
      "Component-driven development with modern frontend ecosystems.",
    skills: [
      "Vue 3",
      "Vite",
      "Vue Router",
      "Pinia",
      "Composition API",
    ],
  },

  {
    title: "Development",
    icon: "⌁",
    color: "blue",
    description:
      "Clean development workflows designed for maintainability.",
    skills: [
      "REST APIs",
      "Git",
      "GitHub",
      "Responsive UI",
      "Component Architecture",
    ],
  },

  {
    title: "AI & Tools",
    icon: "✦",
    color: "pink",
    description:
      "Exploring AI-powered experiences and developer productivity tools.",
    skills: [
      "Local AI",
      "Qwen",
      "AI APIs",
      "Prompt Engineering",
      "VS Code",
    ],
  },
];

const marqueeTech = [
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Vite",
  "Git",
  "GitHub",
  "REST API",
  "AI Integration",
];

onMounted(() => {
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
</script>

<style scoped>

/* =========================================================
   DARK MODE ONLY
========================================================= */

.skills-section {
  position: relative;
  min-height: 100vh;
  padding: 130px 0;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(124, 58, 237, 0.11),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 70%,
      rgba(6, 182, 212, 0.08),
      transparent 30%
    ),
    #05070b;

  color: #f8fafc;
}

/* =========================================================
   BACKGROUND
========================================================= */

.skills-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-overlay {
  position: absolute;
  inset: 0;

  opacity: 0.18;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    );

  background-size: 55px 55px;

  mask-image:
    linear-gradient(
      to bottom,
      transparent,
      black 15%,
      black 80%,
      transparent
    );
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.25;
}

.orb-one {
  width: 300px;
  height: 300px;
  top: 5%;
  left: -120px;
  background: #7c3aed;
}

.orb-two {
  width: 280px;
  height: 280px;
  right: -100px;
  bottom: 10%;
  background: #06b6d4;
}

/* =========================================================
   CONTAINER
========================================================= */

.container {
  position: relative;

  width: min(
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
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 18px;

  color: #8f96a8;

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #22d3ee
    );

  box-shadow:
    0 0 15px
    rgba(139, 92, 246, 0.7);
}

.section-header h2 {
  margin: 0;

  color: #f8fafc;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size:
    clamp(42px, 5vw, 68px);

  line-height: 0.98;
  letter-spacing: -0.055em;
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

  margin: 24px 0 0;

  color: #8f96a8;

  font-size: 15px;
  line-height: 1.8;
}

/* =========================================================
   MAIN LAYOUT
========================================================= */

.skills-layout {
  display: grid;

  grid-template-columns:
    0.85fr 1.15fr;

  gap: 22px;

  align-items: stretch;
}

/* =========================================================
   FEATURED STACK
========================================================= */

.featured-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.stack-card {
  position: relative;

  flex: 1;

  padding: 30px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 26px;

  background:
    linear-gradient(
      145deg,
      rgba(20, 25, 40, 0.96),
      rgba(10, 14, 25, 0.94)
    );

  backdrop-filter: blur(18px);

  box-shadow:
    0 25px 70px
    rgba(0, 0, 0, 0.35);
}

.stack-card::before {
  content: "";

  position: absolute;

  width: 230px;
  height: 230px;

  right: -100px;
  top: -100px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(124, 58, 237, 0.25),
      transparent 70%
    );
}

.stack-top {
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;
}

.mini-label {
  color: #8b5cf6;

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 0.18em;
}

.stack-top h3 {
  margin: 8px 0 0;

  color: #f8fafc;

  font-size: 25px;
  letter-spacing: -0.035em;
}

.stack-icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border:
    1px solid
    rgba(139, 92, 246, 0.25);

  border-radius: 14px;

  background:
    rgba(139, 92, 246, 0.1);

  color: #a78bfa;

  font-size: 21px;

  box-shadow:
    0 0 30px
    rgba(139, 92, 246, 0.12);
}

.stack-description {
  position: relative;

  margin: 22px 0 30px;

  color: #8f96a8;

  font-size: 13px;
  line-height: 1.75;
}

/* =========================================================
   PROGRESS
========================================================= */

.skill-progress-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.progress-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;

  color: #f8fafc;

  font-size: 12px;
  font-weight: 600;
}

.progress-heading span:last-child {
  color: #8f96a8;
  font-size: 10px;
}

.progress-track {
  height: 5px;

  overflow: hidden;

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.07);
}

.progress-fill {
  display: block;

  height: 100%;

  border-radius: inherit;

  background:
    linear-gradient(
      90deg,
      #7c3aed,
      #22d3ee
    );

  box-shadow:
    0 0 15px
    rgba(124, 58, 237, 0.45);
}

/* =========================================================
   AVAILABILITY
========================================================= */

.availability-card {
  display: flex;
  align-items: center;
  gap: 13px;

  padding: 17px 20px;

  border:
    1px solid
    rgba(34, 197, 94, 0.16);

  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(18, 35, 31, 0.78),
      rgba(10, 24, 22, 0.65)
    );

  backdrop-filter: blur(15px);
}

.availability-icon {
  width: 10px;
  height: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.availability-icon span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 0 5px
    rgba(34, 197, 94, 0.08),
    0 0 15px
    rgba(34, 197, 94, 0.7);

  animation:
    availability-pulse 2s infinite;
}

@keyframes availability-pulse {
  50% {
    transform: scale(1.25);
    opacity: 0.7;
  }
}

.availability-card strong {
  display: block;

  color: #f8fafc;

  font-size: 12px;
}

.availability-card p {
  margin: 3px 0 0;

  color: #8f96a8;

  font-size: 10px;
}

.availability-card .arrow {
  margin-left: auto;
  color: #22c55e;
  font-size: 17px;
}

/* =========================================================
   SKILL GRID
========================================================= */

.skills-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 18px;
}

/* =========================================================
   SKILL CARD
========================================================= */

.skill-card {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;

  min-height: 260px;

  padding: 24px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 23px;

  background:
    linear-gradient(
      145deg,
      rgba(20, 25, 40, 0.94),
      rgba(10, 14, 25, 0.90)
    );

  backdrop-filter: blur(14px);

  box-shadow:
    0 18px 55px
    rgba(0, 0, 0, 0.25);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  animation-delay: var(--delay);
}

.skill-card::before {
  content: "";

  position: absolute;
  inset: 0;

  pointer-events: none;

  background:
    radial-gradient(
      180px circle at var(--mouse-x) var(--mouse-y),
      rgba(139, 92, 246, 0.15),
      transparent 70%
    );

  opacity: 0;

  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-7px);

  border-color:
    rgba(139, 92, 246, 0.32);

  box-shadow:
    0 30px 70px
    rgba(0, 0, 0, 0.38),
    0 0 35px
    rgba(124, 58, 237, 0.07);
}

.skill-card:hover::before {
  opacity: 1;
}

.card-glow {
  position: absolute;

  width: 80px;
  height: 80px;

  top: -35px;
  right: -35px;

  border-radius: 50%;

  background:
    rgba(34, 211, 238, 0.08);

  filter: blur(20px);
}

/* =========================================================
   CARD HEADER
========================================================= */

.skill-card-header {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-icon {
  width: 43px;
  height: 43px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 13px;

  font-size: 19px;

  border: 1px solid transparent;
}

.category-icon.purple {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
  border-color: rgba(139, 92, 246, 0.15);
}

.category-icon.cyan {
  background: rgba(34, 211, 238, 0.08);
  color: #67e8f9;
  border-color: rgba(34, 211, 238, 0.14);
}

.category-icon.blue {
  background: rgba(59, 130, 246, 0.09);
  color: #60a5fa;
  border-color: rgba(59, 130, 246, 0.14);
}

.category-icon.pink {
  background: rgba(236, 72, 153, 0.08);
  color: #f472b6;
  border-color: rgba(236, 72, 153, 0.14);
}

.category-number {
  color:
    rgba(255, 255, 255, 0.2);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.skill-card h3 {
  position: relative;

  margin: 20px 0 8px;

  color: #f8fafc;

  font-size: 18px;
  letter-spacing: -0.025em;
}

.skill-card p {
  position: relative;

  margin: 0 0 17px;

  color: #8f96a8;

  font-size: 11px;
  line-height: 1.65;
}

/* =========================================================
   TAGS
========================================================= */

.tech-tags {
  position: relative;

  display: flex;
  flex-wrap: wrap;

  gap: 6px;
}

.tech-tag {
  display: inline-flex;

  align-items: center;

  gap: 5px;

  padding: 6px 8px;

  border:
    1px solid
    rgba(255, 255, 255, 0.07);

  border-radius: 7px;

  background:
    rgba(255, 255, 255, 0.045);

  color: #9ca3af;

  font-size: 9px;
  font-weight: 600;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}

.tech-tag:hover {
  transform: translateY(-2px);

  color: #ffffff;

  border-color:
    rgba(139, 92, 246, 0.3);

  background:
    rgba(139, 92, 246, 0.09);
}

.tag-dot {
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #22d3ee
    );
}

/* =========================================================
   MARQUEE
========================================================= */

.tech-marquee {
  margin-top: 70px;

  overflow: hidden;

  width: 100%;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.06);

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.06);

  padding: 17px 0;
}

.marquee-track {
  display: flex;

  width: max-content;

  animation:
    marquee 28s
    linear
    infinite;
}

.marquee-item {
  display: inline-flex;

  align-items: center;

  gap: 25px;

  margin-right: 25px;

  color:
    rgba(255, 255, 255, 0.42);

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  white-space: nowrap;
}

.marquee-item b {
  color: #8b5cf6;
  font-size: 9px;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 950px) {

  .skills-layout {
    grid-template-columns: 1fr;
  }

  .featured-stack {
    display: grid;

    grid-template-columns:
      1fr 1fr;
  }

  .skills-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}

@media (max-width: 650px) {

  .skills-section {
    padding: 95px 0;
  }

  .container {
    width:
      calc(100% - 30px);
  }

  .section-header {
    margin-bottom: 45px;
  }

  .section-header h2 {
    font-size: 42px;
  }

  .featured-stack {
    display: flex;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    min-height: auto;
  }

  .stack-card {
    padding: 22px;
  }

  .tech-marquee {
    margin-top: 45px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .marquee-track,
  .availability-icon span {
    animation: none;
  }

}
</style>