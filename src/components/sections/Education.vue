<template>
  <section id="education" class="education-section">
    <div class="education-container">

      <!-- Section Heading -->
      <div class="section-heading" v-reveal>
        <span class="section-label">MY JOURNEY</span>

        <h2>
          Education &
          <span>Learning</span>
        </h2>

        <p>
          A continuous journey of learning, building, experimenting,
          and growing as a modern frontend developer.
        </p>
      </div>

      <!-- Education Timeline -->
      <div class="timeline">

        <article
          v-for="(item, index) in education"
          :key="item.id"
          class="education-item"
          v-reveal
          :style="{ '--delay': `${index * 0.15}s` }"
        >

          <!-- Timeline -->
          <div class="timeline-line">
            <div class="timeline-dot">
              <span></span>
            </div>
          </div>

          <!-- Card -->
          <div class="education-card">

            <!-- Glow -->
            <div class="card-glow"></div>

            <!-- Top -->
            <div class="card-top">

              <div class="institution-icon">
                {{ item.icon }}
              </div>

              <div class="education-meta">
                <span class="education-year">
                  {{ item.year }}
                </span>

                <span
                  v-if="item.current"
                  class="current-badge"
                >
                  <span></span>
                  Current
                </span>
              </div>

            </div>

            <!-- Content -->
            <div class="card-content">

              <span class="education-type">
                {{ item.type }}
              </span>

              <h3>
                {{ item.degree }}
              </h3>

              <h4>
                {{ item.institution }}
              </h4>

              <p>
                {{ item.description }}
              </p>

              <!-- Subjects -->
              <div class="subjects">
                <span
                  v-for="subject in item.subjects"
                  :key="subject"
                >
                  {{ subject }}
                </span>
              </div>

            </div>

            <!-- Bottom -->
            <div class="card-footer">

              <div class="location">
                <span>⌖</span>
                {{ item.location }}
              </div>

              <span class="arrow">
                ↗
              </span>

            </div>

          </div>
        </article>

      </div>

      <!-- Learning Philosophy -->
      <div
        class="learning-section"
        v-reveal
      >

        <div class="learning-content">

          <span class="section-label">
            BEYOND EDUCATION
          </span>

          <h3>
            Always
            <span>Learning.</span>
            Always
            <span>Building.</span>
          </h3>

          <p>
            Technology keeps evolving, so my learning never stops.
            I continuously explore modern frontend technologies,
            AI-powered tools, UI/UX patterns, and development
            best practices.
          </p>

        </div>

        <div class="learning-stats">

          <div
            v-for="stat in learningStats"
            :key="stat.label"
            class="stat-card"
          >
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>

        </div>

      </div>

      <!-- Continuous Learning -->
      <div
        class="continuous-learning"
        v-reveal
      >

        <div class="continuous-header">

          <div>
            <span class="section-label">
              CONTINUOUS LEARNING
            </span>

            <h3>
              Skills I keep
              <span>exploring.</span>
            </h3>
          </div>

          <div class="learning-orbit">
            <div class="orbit-ring ring-one"></div>
            <div class="orbit-ring ring-two"></div>

            <div class="orbit-core">
              ✦
            </div>
          </div>

        </div>

        <div class="learning-tags">

          <span
            v-for="skill in learningSkills"
            :key="skill"
          >
            {{ skill }}
          </span>

        </div>

      </div>

    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";


/* =========================================================
   EDUCATION
========================================================= */

const education = ref([
  {
    id: 1,
    icon: "🎓",
    type: "Bachelor's Degree",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Lahore",
    year: "2022 — Present",
    location: "Lahore, Pakistan",
    current: true,

    description:
      "Building a strong foundation in computer science, software development, programming fundamentals, databases, algorithms, and modern web technologies.",

    subjects: [
      "Programming",
      "Web Development",
      "Database Systems",
      "Algorithms",
    ],
  },

  {
    id: 2,
    icon: "💻",
    type: "Professional Training",
    degree: "Frontend Development",
    institution: "eBrainX Solutions",
    year: "2025 — Present",
    location: "Lahore, Pakistan",
    current: true,

    description:
      "Hands-on experience developing production-ready interfaces with Vue.js, JavaScript, responsive design systems, APIs, Git, and modern frontend workflows.",

    subjects: [
      "Vue.js",
      "JavaScript",
      "REST APIs",
      "Git & GitHub",
    ],
  },

  {
    id: 3,
    icon: "🚀",
    type: "Self Learning",
    degree: "Modern Web & AI Technologies",
    institution: "Independent Learning",
    year: "2024 — Present",
    location: "Online",
    current: true,

    description:
      "Exploring modern development practices, AI-assisted development, local AI models, UI/UX systems, animations, performance, and advanced frontend architecture.",

    subjects: [
      "AI Tools",
      "Tailwind CSS",
      "UI/UX",
      "Modern Web",
    ],
  },
]);


/* =========================================================
   LEARNING STATS
========================================================= */

const learningStats = ref([
  {
    value: "3+",
    label: "Years Learning",
  },

  {
    value: "10+",
    label: "Technologies",
  },

  {
    value: "15+",
    label: "Projects",
  },

  {
    value: "∞",
    label: "Curiosity",
  },
]);


/* =========================================================
   CONTINUOUS LEARNING SKILLS
========================================================= */

const learningSkills = ref([
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "REST APIs",
  "Git",
  "GitHub",
  "AI Tools",
  "UI/UX",
  "Responsive Design",
  "Performance",
]);
</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.education-section {

  position: relative;

  padding: 140px 0;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(99, 102, 241, 0.10),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 70%,
      rgba(168, 85, 247, 0.08),
      transparent 30%
    ),
    #080b14;
}


.education-section::before {

  content: "";

  position: absolute;

  inset: 0;

  background-image:

    linear-gradient(
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    );

  background-size: 60px 60px;

  pointer-events: none;
}


/* =========================================================
   CONTAINER
========================================================= */

.education-container {

  position: relative;

  z-index: 2;

  width:
    min(
      1150px,
      calc(100% - 40px)
    );

  margin: auto;
}


/* =========================================================
   HEADING
========================================================= */

.section-heading {

  max-width: 720px;

  margin:
    0 auto 90px;

  text-align: center;
}


.section-label {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 18px;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.18em;

  color: #818cf8;
}


.section-label::before {

  content: "";

  width: 24px;

  height: 1px;

  background: currentColor;
}


.section-heading h2 {

  margin: 0;

  font-size:
    clamp(
      42px,
      6vw,
      72px
    );

  line-height: 0.95;

  letter-spacing: -0.055em;

  color: #f8fafc;
}


.section-heading h2 span {

  display: inline-block;

  background:
    linear-gradient(
      120deg,
      #6366f1,
      #8b5cf6,
      #ec4899
    );

  -webkit-background-clip: text;

  background-clip: text;

  color: transparent;
}


.section-heading p {

  max-width: 620px;

  margin:
    25px auto 0;

  font-size: 16px;

  line-height: 1.8;

  color: #94a3b8;
}


/* =========================================================
   TIMELINE
========================================================= */

.timeline {

  position: relative;

  max-width: 900px;

  margin: auto;
}


.timeline::before {

  content: "";

  position: absolute;

  left: 24px;

  top: 20px;

  bottom: 20px;

  width: 1px;

  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(99, 102, 241, 0.35),
      rgba(139, 92, 246, 0.35),
      transparent
    );
}


.education-item {

  position: relative;

  display: grid;

  grid-template-columns: 50px 1fr;

  gap: 25px;

  margin-bottom: 45px;

  transition-delay: var(--delay);
}


/* =========================================================
   TIMELINE DOT
========================================================= */

.timeline-line {

  position: relative;
}


.timeline-dot {

  position: relative;

  width: 50px;

  height: 50px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #0f172a;

  border:
    1px solid
    rgba(99, 102, 241, 0.25);

  box-shadow:

    0 0 0 7px
      rgba(99, 102, 241, 0.04),

    0 10px 30px
      rgba(99, 102, 241, 0.12);

  z-index: 3;
}


.timeline-dot::before {

  content: "";

  width: 12px;

  height: 12px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #a855f7
    );

  box-shadow:
    0 0 15px
    rgba(99, 102, 241, 0.55);
}


.timeline-dot span {

  position: absolute;

  inset: -5px;

  border-radius: 50%;

  border:
    1px solid
    rgba(99, 102, 241, 0.15);

  animation:
    pulseDot 2.5s infinite;
}


@keyframes pulseDot {

  0% {

    transform: scale(0.9);

    opacity: 0.8;
  }

  70% {

    transform: scale(1.3);

    opacity: 0;
  }

  100% {

    transform: scale(1.3);

    opacity: 0;
  }

}


/* =========================================================
   EDUCATION CARD
========================================================= */

.education-card {

  position: relative;

  overflow: hidden;

  padding: 30px;

  border-radius: 24px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  background:
    linear-gradient(
      145deg,
      rgba(17, 24, 39, 0.88),
      rgba(15, 23, 42, 0.78)
    );

  box-shadow:
    0 20px 60px
    rgba(0, 0, 0, 0.28);

  backdrop-filter: blur(20px);

  transition:

    transform
      0.45s
      cubic-bezier(.2,.8,.2,1),

    box-shadow
      0.45s ease,

    border-color
      0.45s ease;
}


.education-card:hover {

  transform:
    perspective(1000px)
    rotateX(1deg)
    rotateY(-1deg)
    translateY(-7px);

  border-color:
    rgba(99, 102, 241, 0.3);

  box-shadow:

    0 30px 80px
      rgba(0, 0, 0, 0.38),

    0 0 40px
      rgba(99, 102, 241, 0.06);
}


/* =========================================================
   CARD GLOW
========================================================= */

.card-glow {

  position: absolute;

  width: 180px;

  height: 180px;

  top: -100px;

  right: -80px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(99, 102, 241, 0.18),
      transparent 70%
    );

  transition:
    transform 0.6s ease;
}


.education-card:hover
.card-glow {

  transform: scale(1.5);
}


/* =========================================================
   CARD TOP
========================================================= */

.card-top {

  position: relative;

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;
}


.institution-icon {

  width: 52px;

  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 16px;

  background:
    rgba(99, 102, 241, 0.10);

  border:
    1px solid
    rgba(99, 102, 241, 0.14);

  font-size: 22px;

  transition:
    transform 0.4s ease;
}


.education-card:hover
.institution-icon {

  transform:
    rotate(-6deg)
    scale(1.08);
}


.education-meta {

  display: flex;

  align-items: center;

  gap: 12px;
}


.education-year {

  font-size: 12px;

  font-weight: 600;

  color: #818cf8;

  padding: 7px 11px;

  border-radius: 100px;

  background:
    rgba(99, 102, 241, 0.10);

  border:
    1px solid
    rgba(99, 102, 241, 0.08);
}


.current-badge {

  display: flex;

  align-items: center;

  gap: 5px;

  padding: 7px 10px;

  border-radius: 100px;

  font-size: 10px;

  font-weight: 600;

  color: #34d399;

  background:
    rgba(16, 185, 129, 0.08);

  border:
    1px solid
    rgba(16, 185, 129, 0.08);
}


.current-badge span {

  width: 5px;

  height: 5px;

  border-radius: 50%;

  background: #10b981;

  animation:
    onlinePulse 1.8s infinite;
}


@keyframes onlinePulse {

  50% {

    opacity: 0.35;
  }

}


/* =========================================================
   CONTENT
========================================================= */

.card-content {

  position: relative;
}


.education-type {

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  color: #a78bfa;
}


.card-content h3 {

  margin:
    9px 0 6px;

  font-size:
    clamp(
      22px,
      3vw,
      28px
    );

  letter-spacing: -0.035em;

  color: #f8fafc;
}


.card-content h4 {

  margin:
    0 0 16px;

  font-size: 15px;

  font-weight: 600;

  color: #818cf8;
}


.card-content p {

  max-width: 720px;

  margin: 0;

  font-size: 14px;

  line-height: 1.8;

  color: #94a3b8;
}


/* =========================================================
   SUBJECTS
========================================================= */

.subjects {

  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 22px;
}


.subjects span {

  padding: 7px 11px;

  border-radius: 8px;

  font-size: 11px;

  font-weight: 600;

  color: #94a3b8;

  background:
    rgba(255, 255, 255, 0.04);

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  transition:

    background 0.25s ease,

    transform 0.25s ease,

    color 0.25s ease;
}


.subjects span:hover {

  transform:
    translateY(-2px);

  color: #a78bfa;

  background:
    rgba(99, 102, 241, 0.10);

  border-color:
    rgba(99, 102, 241, 0.18);
}


/* =========================================================
   FOOTER
========================================================= */

.card-footer {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 28px;

  padding-top: 18px;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.08);
}


.location {

  display: flex;

  align-items: center;

  gap: 7px;

  font-size: 11px;

  color: #64748b;
}


.location span {

  color: #818cf8;

  font-size: 16px;
}


.arrow {

  width: 32px;

  height: 32px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  color: #818cf8;

  background:
    rgba(99, 102, 241, 0.08);

  transition:

    transform 0.3s ease,

    background 0.3s ease;
}


.education-card:hover
.arrow {

  transform:
    translate(
      3px,
      -3px
    );

  background:
    rgba(99, 102, 241, 0.15);
}


/* =========================================================
   LEARNING SECTION
========================================================= */

.learning-section {

  display: grid;

  grid-template-columns:
    1.1fr 0.9fr;

  gap: 50px;

  align-items: center;

  margin-top: 100px;

  padding: 55px;

  border-radius: 30px;

  background:
    linear-gradient(
      135deg,
      #0f172a,
      #1e1b4b
    );

  color: white;

  overflow: hidden;

  position: relative;

  box-shadow:
    0 30px 80px
    rgba(0, 0, 0, 0.35);
}


.learning-section::before {

  content: "";

  position: absolute;

  width: 400px;

  height: 400px;

  right: -150px;

  top: -200px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.35),
      transparent 65%
    );
}


.learning-content {

  position: relative;

  z-index: 2;
}


.learning-content
.section-label {

  color: #a78bfa;
}


.learning-content h3 {

  margin: 0;

  max-width: 600px;

  font-size:
    clamp(
      30px,
      4vw,
      46px
    );

  line-height: 1.05;

  letter-spacing: -0.045em;
}


.learning-content h3 span {

  color: #a78bfa;
}


.learning-content p {

  max-width: 580px;

  margin:
    20px 0 0;

  font-size: 14px;

  line-height: 1.8;

  color: #cbd5e1;
}


/* =========================================================
   STATS
========================================================= */

.learning-stats {

  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 12px;
}


.stat-card {

  padding: 24px;

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.05);

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  backdrop-filter:
    blur(12px);

  transition:

    transform 0.3s ease,

    background 0.3s ease;
}


.stat-card:hover {

  transform:
    translateY(-5px);

  background:
    rgba(255, 255, 255, 0.08);
}


.stat-card strong {

  display: block;

  font-size: 30px;

  letter-spacing: -0.04em;

  background:
    linear-gradient(
      120deg,
      #c4b5fd,
      #f0abfc
    );

  -webkit-background-clip: text;

  background-clip: text;

  color: transparent;
}


.stat-card span {

  display: block;

  margin-top: 5px;

  font-size: 11px;

  color: #94a3b8;
}


/* =========================================================
   CONTINUOUS LEARNING
========================================================= */

.continuous-learning {

  margin-top: 35px;

  padding: 38px;

  border-radius: 26px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  background:
    rgba(15, 23, 42, 0.70);

  backdrop-filter:
    blur(15px);
}


.continuous-header {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 30px;
}


.continuous-header h3 {

  margin: 0;

  font-size: 30px;

  letter-spacing: -0.04em;

  color: #f8fafc;
}


.continuous-header h3 span {

  color: #818cf8;
}


/* =========================================================
   ORBIT
========================================================= */

.learning-orbit {

  position: relative;

  width: 90px;

  height: 90px;

  flex-shrink: 0;
}


.orbit-ring {

  position: absolute;

  inset: 0;

  border:
    1px solid
    rgba(99, 102, 241, 0.25);

  border-radius: 50%;
}


.ring-one {

  animation:
    orbitRotate 7s linear infinite;
}


.ring-two {

  inset: 12px;

  border-color:
    rgba(168, 85, 247, 0.30);

  animation:
    orbitRotate
    4s
    linear
    infinite
    reverse;
}


.orbit-core {

  position: absolute;

  inset: 29px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #a855f7
    );

  color: white;

  font-size: 13px;

  box-shadow:
    0 0 25px
    rgba(99, 102, 241, 0.35);
}


@keyframes orbitRotate {

  to {

    transform:
      rotate(360deg);
  }

}


/* =========================================================
   LEARNING TAGS
========================================================= */

.learning-tags {

  display: flex;

  flex-wrap: wrap;

  gap: 9px;

  margin-top: 30px;
}


.learning-tags span {

  padding:
    9px 14px;

  border-radius: 100px;

  font-size: 11px;

  font-weight: 600;

  color: #94a3b8;

  background:
    rgba(255, 255, 255, 0.04);

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  transition:

    transform 0.3s ease,

    color 0.3s ease,

    border-color 0.3s ease,

    background 0.3s ease;
}


.learning-tags span:hover {

  transform:
    translateY(-3px);

  color: #a78bfa;

  background:
    rgba(99, 102, 241, 0.08);

  border-color:
    rgba(99, 102, 241, 0.25);
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 800px) {

  .education-section {

    padding: 100px 0;
  }


  .section-heading {

    margin-bottom: 60px;
  }


  .learning-section {

    grid-template-columns: 1fr;

    padding: 35px;

    gap: 35px;
  }

}


@media (max-width: 600px) {

  .education-container {

    width:
      min(
        calc(100% - 28px),
        1150px
      );
  }


  .timeline::before {

    left: 19px;
  }


  .education-item {

    grid-template-columns:
      40px 1fr;

    gap: 15px;

    margin-bottom: 30px;
  }


  .timeline-dot {

    width: 40px;

    height: 40px;
  }


  .timeline-dot::before {

    width: 9px;

    height: 9px;
  }


  .education-card {

    padding: 22px;

    border-radius: 20px;
  }


  .card-top {

    align-items: flex-start;

    gap: 12px;
  }


  .education-meta {

    flex-direction: column;

    align-items: flex-end;

    gap: 6px;
  }


  .education-year {

    font-size: 10px;
  }


  .learning-section {

    padding: 28px;

    border-radius: 24px;
  }


  .learning-stats {

    gap: 8px;
  }


  .stat-card {

    padding: 18px;
  }


  .continuous-learning {

    padding: 26px;

    border-radius: 22px;
  }


  .continuous-header {

    align-items: flex-start;
  }


  .learning-orbit {

    width: 65px;

    height: 65px;
  }


  .orbit-core {

    inset: 21px;
  }


  .ring-two {

    inset: 9px;
  }

}

</style>