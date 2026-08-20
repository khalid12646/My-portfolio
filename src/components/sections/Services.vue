<template>
  <section id="services" class="services-section">

    <!-- Background -->
    <div class="services-bg">
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
      <div class="bg-grid"></div>
    </div>

    <div class="services-container">

      <!-- =====================================================
           SECTION HEADER
      ====================================================== -->

      <div class="section-header" v-reveal>

        <div class="eyebrow">
          <span class="eyebrow-line"></span>
          WHAT I DO
        </div>

        <h2>
          Digital solutions
          <span>built to perform.</span>
        </h2>

        <p>
          I design and build modern digital experiences that combine
          clean interfaces, scalable architecture and thoughtful
          user experience.
        </p>

      </div>


      <!-- =====================================================
           SERVICES GRID
      ====================================================== -->

      <div class="services-grid">

        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="service-card"
          :class="{ featured: service.featured }"
          :style="{ '--delay': `${index * 100}ms` }"
          v-reveal
          @mousemove="handleMouseMove"
          @mouseleave="resetCard"
        >

          <!-- Mouse Glow -->
          <div class="card-glow"></div>

          <!-- Number -->
          <div class="service-number">
            {{ String(index + 1).padStart(2, "0") }}
          </div>


          <!-- Icon -->
          <div class="service-icon-wrapper">

            <div class="service-icon">
              {{ service.icon }}
            </div>

          </div>


          <!-- Content -->
          <div class="service-content">

            <span class="service-label">
              {{ service.label }}
            </span>

            <h3>
              {{ service.title }}
            </h3>

            <p>
              {{ service.description }}
            </p>


            <!-- Technologies -->
            <div class="service-tech">

              <span
                v-for="technology in service.technologies"
                :key="technology"
              >
                {{ technology }}
              </span>

            </div>

          </div>


          <!-- Bottom -->
          <div class="service-bottom">

            <span class="service-link">
              Explore service
            </span>

            <span class="service-arrow">
              ↗
            </span>

          </div>

        </article>

      </div>


      <!-- =====================================================
           PROCESS
      ====================================================== -->

      <div class="process-section" v-reveal>

        <div class="process-heading">

          <div class="eyebrow">
            <span class="eyebrow-line"></span>
            MY PROCESS
          </div>

          <h3>
            From idea to
            <span>execution.</span>
          </h3>

          <p>
            A simple and transparent workflow focused on building
            products that solve real problems.
          </p>

        </div>


        <div class="process-timeline">

          <div
            v-for="(step, index) in process"
            :key="step.title"
            class="process-step"
          >

            <div class="process-number">
              {{ String(index + 1).padStart(2, "0") }}
            </div>

            <div class="process-content">

              <span class="process-icon">
                {{ step.icon }}
              </span>

              <h4>
                {{ step.title }}
              </h4>

              <p>
                {{ step.description }}
              </p>

            </div>

          </div>

        </div>

      </div>


      <!-- =====================================================
           CTA
      ====================================================== -->

      <div class="services-cta" v-reveal>

        <div class="cta-glow"></div>

        <div class="cta-content">

          <span class="cta-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h3>
            Let's build something
            <span>remarkable.</span>
          </h3>

          <p>
            Tell me about your idea and let's turn it into
            a polished digital experience.
          </p>

        </div>


        <a
          href="#contact"
          class="cta-button"
        >
          <span>
            Start a conversation
          </span>

          <span class="cta-arrow">
            ↗
          </span>
        </a>

      </div>

    </div>

  </section>
</template>


<script setup>
import { ref } from "vue";


/* =========================================================
   SERVICES
========================================================= */

const services = ref([
  {
    icon: "◈",
    label: "01 — FRONTEND",
    title: "Frontend Development",
    description:
      "Modern, responsive and high-performance interfaces built with reusable components and scalable frontend architecture.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    featured: true,
  },

  {
    icon: "✦",
    label: "02 — UI / UX",
    title: "UI & UX Development",
    description:
      "Clean and intuitive interfaces designed around usability, visual hierarchy and meaningful user interactions.",
    technologies: [
      "Responsive UI",
      "Design Systems",
      "Animations",
      "Accessibility",
    ],
    featured: false,
  },

  {
    icon: "⬡",
    label: "03 — WEB APPS",
    title: "Web Application Development",
    description:
      "Interactive web applications with structured routing, reusable components, forms, dashboards and API integration.",
    technologies: [
      "Vue Router",
      "REST API",
      "Forms",
      "Dashboards",
    ],
    featured: false,
  },

  {
    icon: "◎",
    label: "04 — AI",
    title: "AI Integration",
    description:
      "AI-powered experiences that make websites and applications more intelligent, interactive and useful.",
    technologies: [
      "Local AI",
      "Qwen",
      "Node.js",
      "AI APIs",
    ],
    featured: true,
  },

  {
    icon: "⌘",
    label: "05 — RESPONSIVE",
    title: "Responsive Development",
    description:
      "Pixel-conscious experiences that adapt smoothly across desktops, tablets and mobile devices.",
    technologies: [
      "Mobile First",
      "Bootstrap",
      "Tailwind CSS",
      "CSS",
    ],
    featured: false,
  },

  {
    icon: "↗",
    label: "06 — API",
    title: "API Integration",
    description:
      "Connecting frontend applications with reliable backend services and REST APIs for dynamic experiences.",
    technologies: [
      "REST",
      "JSON",
      "Fetch API",
      "Node.js",
    ],
    featured: false,
  },
]);


/* =========================================================
   PROCESS
========================================================= */

const process = ref([
  {
    icon: "⌕",
    title: "Discover",
    description:
      "Understand the idea, goals, users and requirements.",
  },

  {
    icon: "◇",
    title: "Design",
    description:
      "Create a clear visual direction and interaction experience.",
  },

  {
    icon: "⌘",
    title: "Develop",
    description:
      "Build the product using clean and scalable technologies.",
  },

  {
    icon: "✓",
    title: "Refine",
    description:
      "Test, optimize and polish the experience before launch.",
  },
]);


/* =========================================================
   3D CARD EFFECT
========================================================= */

const handleMouseMove = (event) => {

  const card = event.currentTarget;

  if (!card) return;

  const rect =
    card.getBoundingClientRect();

  const x =
    event.clientX - rect.left;

  const y =
    event.clientY - rect.top;

  const centerX =
    rect.width / 2;

  const centerY =
    rect.height / 2;

  const rotateX =
    ((y - centerY) / centerY) * -3;

  const rotateY =
    ((x - centerX) / centerX) * 3;

  card.style.setProperty(
    "--rotate-x",
    `${rotateX}deg`
  );

  card.style.setProperty(
    "--rotate-y",
    `${rotateY}deg`
  );

  card.style.setProperty(
    "--mouse-x",
    `${x}px`
  );

  card.style.setProperty(
    "--mouse-y",
    `${y}px`
  );
};


const resetCard = (event) => {

  const card =
    event.currentTarget;

  if (!card) return;

  card.style.setProperty(
    "--rotate-x",
    "0deg"
  );

  card.style.setProperty(
    "--rotate-y",
    "0deg"
  );

};
</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.services-section {
  position: relative;

  padding: 140px 0;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(124, 58, 237, 0.08),
      transparent 32%
    ),
    radial-gradient(
      circle at 90% 70%,
      rgba(6, 182, 212, 0.07),
      transparent 32%
    ),
    var(--bg-primary, #05070b);

  color:
    var(--text-primary, #ffffff);
}


.services-container {
  position: relative;

  z-index: 2;

  width:
    min(
      calc(100% - 40px),
      1200px
    );

  margin: 0 auto;
}


/* =========================================================
   BACKGROUND
========================================================= */

.services-bg {
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

  color:
    var(--text-secondary, #8f96a8);

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

  color:
    var(--text-primary, #ffffff);

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

  color:
    var(--text-secondary, #8f96a8);

  font-size: 14px;

  line-height: 1.8;
}


/* =========================================================
   SERVICES GRID
========================================================= */

.services-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 20px;
}


/* =========================================================
   SERVICE CARD
========================================================= */

.service-card {
  --rotate-x: 0deg;
  --rotate-y: 0deg;

  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;

  min-height: 390px;

  padding: 30px;

  overflow: hidden;

  border:
    1px solid
    var(
      --border,
      rgba(255,255,255,0.08)
    );

  border-radius: 23px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.045),
      rgba(255,255,255,0.015)
    );

  box-shadow:
    0 25px 70px
    rgba(0,0,0,0.18);

  backdrop-filter: blur(18px);

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  transform:
    perspective(1100px)
    rotateX(var(--rotate-x))
    rotateY(var(--rotate-y));

  transform-style: preserve-3d;

  transition:
    transform 0.18s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


.service-card::before {
  content: "";

  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    radial-gradient(
      240px circle
      at var(--mouse-x) var(--mouse-y),
      rgba(139,92,246,0.13),
      transparent 70%
    );

  opacity: 0;

  transition:
    opacity 0.3s ease;
}


.service-card:hover {
  border-color:
    rgba(139,92,246,0.28);

  box-shadow:
    0 35px 90px
    rgba(0,0,0,0.28);
}


.service-card:hover::before {
  opacity: 1;
}


.service-card.featured {
  background:
    linear-gradient(
      145deg,
      rgba(124,58,237,0.09),
      rgba(255,255,255,0.018)
    );
}


/* =========================================================
   CARD GLOW
========================================================= */

.card-glow {
  position: absolute;

  width: 220px;
  height: 220px;

  left:
    var(--mouse-x);

  top:
    var(--mouse-y);

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(34,211,238,0.08),
      transparent 70%
    );

  opacity: 0;

  pointer-events: none;

  transition:
    opacity 0.3s ease;
}


.service-card:hover .card-glow {
  opacity: 1;
}


/* =========================================================
   NUMBER
========================================================= */

.service-number {
  position: absolute;

  top: 24px;

  right: 26px;

  color:
    rgba(139,92,246,0.14);

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size: 45px;

  font-weight: 800;

  line-height: 1;

  letter-spacing: -0.07em;
}


/* =========================================================
   ICON
========================================================= */

.service-icon-wrapper {
  position: relative;

  width: 58px;
  height: 58px;

  margin-bottom: 34px;

  border-radius: 16px;

  background:
    linear-gradient(
      135deg,
      rgba(124,58,237,0.16),
      rgba(6,182,212,0.07)
    );

  border:
    1px solid
    rgba(139,92,246,0.14);

  display: flex;

  align-items: center;

  justify-content: center;

  transform:
    translateZ(20px);

  transition:
    transform 0.35s ease,
    border-color 0.3s ease;
}


.service-card:hover
.service-icon-wrapper {
  transform:
    translateZ(28px)
    rotate(-5deg);

  border-color:
    rgba(139,92,246,0.35);
}


.service-icon {
  font-size: 25px;

  color:
    #a78bfa;

  font-weight: 700;

  text-shadow:
    0 0 18px
    rgba(139,92,246,0.35);
}


/* =========================================================
   CONTENT
========================================================= */

.service-content {
  position: relative;

  z-index: 2;

  transform:
    translateZ(15px);
}


.service-label {
  display: block;

  margin-bottom: 9px;

  color:
    #8b5cf6;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 0.14em;
}


.service-content h3 {
  margin:
    0 0 13px;

  color:
    var(--text-primary, #ffffff);

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size: 23px;

  letter-spacing: -0.035em;
}


.service-content p {
  margin: 0;

  color:
    var(--text-secondary, #8f96a8);

  font-size: 12px;

  line-height: 1.75;
}


/* =========================================================
   TECH
========================================================= */

.service-tech {
  display: flex;

  flex-wrap: wrap;

  gap: 6px;

  margin-top: 22px;
}


.service-tech span {
  padding: 6px 8px;

  border:
    1px solid
    rgba(255,255,255,0.07);

  border-radius: 7px;

  background:
    rgba(255,255,255,0.035);

  color:
    #9da5b5;

  font-size: 9px;

  font-weight: 700;

  transition:
    border-color 0.25s ease,
    color 0.25s ease,
    background 0.25s ease;
}


.service-card:hover
.service-tech span {
  border-color:
    rgba(139,92,246,0.15);
}


/* =========================================================
   CARD BOTTOM
========================================================= */

.service-bottom {
  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 25px;

  padding-top: 18px;

  border-top:
    1px solid
    rgba(255,255,255,0.07);

  transform:
    translateZ(18px);
}


.service-link {
  color:
    #8f96a8;

  font-size: 10px;

  font-weight: 700;

  transition:
    color 0.25s ease;
}


.service-card:hover .service-link {
  color:
    #a78bfa;
}


.service-arrow {
  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(255,255,255,0.09);

  border-radius: 50%;

  color:
    #a0a7b5;

  font-size: 14px;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}


.service-card:hover .service-arrow {
  transform:
    rotate(45deg);

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #06b6d4
    );

  color: white;

  border-color:
    transparent;
}


/* =========================================================
   PROCESS
========================================================= */

.process-section {
  margin-top: 120px;

  padding-top: 85px;

  border-top:
    1px solid
    rgba(255,255,255,0.08);
}


.process-heading {
  max-width: 600px;

  margin-bottom: 50px;
}


.process-heading h3 {
  margin: 0;

  color:
    var(--text-primary, #ffffff);

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size:
    clamp(32px, 5vw, 48px);

  line-height: 1;

  letter-spacing: -0.045em;
}


.process-heading h3 span {
  color:
    #a78bfa;
}


.process-heading p {
  margin-top: 17px;

  color:
    var(--text-secondary, #8f96a8);

  font-size: 13px;

  line-height: 1.75;
}


/* =========================================================
   PROCESS TIMELINE
========================================================= */

.process-timeline {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 16px;
}


.process-step {
  position: relative;

  min-height: 220px;

  padding: 24px;

  border:
    1px solid
    rgba(255,255,255,0.08);

  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.04),
      rgba(255,255,255,0.015)
    );

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


.process-step:hover {
  transform:
    translateY(-5px);

  border-color:
    rgba(139,92,246,0.25);

  box-shadow:
    0 20px 50px
    rgba(0,0,0,0.2);
}


.process-number {
  margin-bottom: 25px;

  color:
    #8b5cf6;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.1em;
}


.process-icon {
  display: block;

  margin-bottom: 15px;

  color:
    #a78bfa;

  font-size: 22px;
}


.process-content h4 {
  margin:
    0 0 8px;

  color:
    var(--text-primary, #ffffff);

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size: 17px;

  letter-spacing: -0.02em;
}


.process-content p {
  margin: 0;

  color:
    var(--text-secondary, #8f96a8);

  font-size: 11px;

  line-height: 1.7;
}


/* =========================================================
   CTA
========================================================= */

.services-cta {
  position: relative;

  margin-top: 90px;

  padding: 48px;

  overflow: hidden;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  border:
    1px solid
    rgba(139,92,246,0.2);

  border-radius: 25px;

  background:
    linear-gradient(
      135deg,
      rgba(124,58,237,0.12),
      rgba(6,182,212,0.07),
      rgba(255,255,255,0.025)
    );

  box-shadow:
    0 30px 90px
    rgba(0,0,0,0.25);
}


.services-cta::before {
  content: "";

  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      110deg,
      transparent 20%,
      rgba(139,92,246,0.05),
      transparent 80%
    );
}


.cta-glow {
  position: absolute;

  width: 320px;
  height: 320px;

  right: -120px;
  top: -170px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139,92,246,0.35),
      transparent 70%
    );

  filter:
    blur(15px);
}


.cta-content {
  position: relative;

  z-index: 2;
}


.cta-label {
  color:
    #a78bfa;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 0.16em;
}


.cta-content h3 {
  margin:
    9px 0;

  color:
    var(--text-primary, #ffffff);

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size:
    clamp(28px, 4vw, 43px);

  line-height: 1;

  letter-spacing: -0.045em;
}


.cta-content h3 span {
  color:
    #a78bfa;
}


.cta-content p {
  margin: 0;

  max-width: 520px;

  color:
    var(--text-secondary, #8f96a8);

  font-size: 12px;

  line-height: 1.75;
}


.cta-button {
  position: relative;

  z-index: 2;

  display: inline-flex;

  align-items: center;

  gap: 20px;

  padding: 14px 17px;

  border-radius: 11px;

  background:
    linear-gradient(
      110deg,
      #7c3aed,
      #0891b2
    );

  color: white;

  text-decoration: none;

  font-size: 11px;

  font-weight: 800;

  white-space: nowrap;

  box-shadow:
    0 10px 30px
    rgba(124,58,237,0.2);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}


.cta-button:hover {
  transform:
    translateY(-4px);

  box-shadow:
    0 18px 45px
    rgba(124,58,237,0.35);
}


.cta-arrow {
  font-size: 16px;
}


/* =========================================================
   LIGHT MODE
========================================================= */

:global([data-theme="light"])
.services-section {
  background:
    #f7f8fc;
}


:global([data-theme="light"])
.service-card {
  background:
    rgba(255,255,255,0.82);

  border-color:
    rgba(15,23,42,0.08);

  box-shadow:
    0 20px 60px
    rgba(15,23,42,0.07);
}


:global([data-theme="light"])
.service-card.featured {
  background:
    linear-gradient(
      145deg,
      rgba(124,58,237,0.07),
      rgba(255,255,255,0.9)
    );
}


:global([data-theme="light"])
.service-content h3,
:global([data-theme="light"])
.section-header h2,
:global([data-theme="light"])
.process-heading h3,
:global([data-theme="light"])
.process-content h4 {
  color:
    #111827;
}


:global([data-theme="light"])
.service-content p,
:global([data-theme="light"])
.section-header p,
:global([data-theme="light"])
.process-heading p,
:global([data-theme="light"])
.process-content p {
  color:
    #667085;
}


:global([data-theme="light"])
.service-tech span {
  background:
    rgba(15,23,42,0.035);

  border-color:
    rgba(15,23,42,0.07);

  color:
    #667085;
}


:global([data-theme="light"])
.service-bottom,
:global([data-theme="light"])
.process-section {
  border-color:
    rgba(15,23,42,0.08);
}


:global([data-theme="light"])
.service-link {
  color:
    #667085;
}


:global([data-theme="light"])
.process-step {
  background:
    rgba(255,255,255,0.8);

  border-color:
    rgba(15,23,42,0.08);
}


:global([data-theme="light"])
.services-cta {
  background:
    linear-gradient(
      135deg,
      #111827,
      #1f2937
    );
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 950px) {

  .services-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .process-timeline {
    grid-template-columns:
      repeat(2, 1fr);
  }

}


@media (max-width: 700px) {

  .services-section {
    padding:
      100px 0;
  }

  .services-container {
    width:
      calc(100% - 30px);
  }

  .section-header {
    margin-bottom: 50px;
  }

  .section-header h2 {
    font-size: 44px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: 370px;
  }

  .process-section {
    margin-top: 90px;

    padding-top: 65px;
  }

  .process-timeline {
    grid-template-columns: 1fr;
  }

  .services-cta {
    flex-direction: column;

    align-items: flex-start;

    padding: 32px;
  }

  .cta-button {
    width: 100%;

    justify-content: center;
  }

}


@media (max-width: 450px) {

  .service-card {
    padding: 25px;
  }

  .service-number {
    font-size: 35px;
  }

  .service-content h3 {
    font-size: 21px;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .service-card,
  .service-icon-wrapper,
  .service-arrow,
  .process-step,
  .cta-button {
    transition: none;
  }

}

</style>