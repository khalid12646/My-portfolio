<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">

      <!-- =========================================
           SECTION HEADER
      ========================================== -->

      <header class="section-header" v-reveal>
        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          Experience
        </span>

        <h2>
          Where ideas became
          <span>real products.</span>
        </h2>

        <p>
          My professional journey across frontend development,
          modern web applications and real-world product development.
        </p>
      </header>


      <!-- =========================================
           EXPERIENCE LAYOUT
      ========================================== -->

      <div class="experience-layout">

        <!-- =======================================
             TIMELINE
        ======================================== -->

        <div class="timeline">

          <!-- =====================================
               EXPERIENCE 01
          ====================================== -->

          <article
            class="experience-item"
            v-reveal
          >

            <div class="timeline-marker" aria-hidden="true">
              <span></span>
            </div>


            <div class="experience-card">

              <!-- Card top -->

              <div class="card-top">

                <div class="experience-meta">
                  <span class="experience-number">
                    01
                  </span>

                  <span class="experience-period">
                    2025 — Present
                  </span>
                </div>

                <span class="status-badge current">
                  <span></span>
                  Current
                </span>

              </div>


              <!-- Company -->

              <div class="experience-main">

                <div
                  class="company-logo"
                  aria-hidden="true"
                >
                  eX
                </div>

                <div class="experience-heading">

                  <h3>
                    Frontend Developer
                  </h3>

                  <h4>
                    eBrainX Solutions
                  </h4>

                </div>

              </div>


              <!-- Description -->

              <p class="experience-description">
                Working on modern frontend applications,
                responsive interfaces and scalable UI systems.
                Building production-ready experiences using
                Vue.js and modern frontend technologies.
              </p>


              <!-- Technologies -->

              <div class="tech-list" aria-label="Technologies used">

                <span>Vue.js</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
                <span>Tailwind CSS</span>
                <span>Git</span>

              </div>


              <!-- Highlights -->

              <div class="highlights">

                <div class="highlight">
                  <span class="highlight-icon">↗</span>

                  <span>
                    Production frontend development
                  </span>
                </div>

                <div class="highlight">
                  <span class="highlight-icon">✦</span>

                  <span>
                    Responsive & premium UI systems
                  </span>
                </div>

                <div class="highlight">
                  <span class="highlight-icon">⌁</span>

                  <span>
                    Component-based architecture
                  </span>
                </div>

              </div>

            </div>

          </article>


          <!-- =====================================
               EXPERIENCE 02
          ====================================== -->

          <article
            class="experience-item"
            v-reveal
            style="transition-delay: .12s"
          >

            <div class="timeline-marker" aria-hidden="true">
              <span></span>
            </div>


            <div class="experience-card">

              <!-- Card top -->

              <div class="card-top">

                <div class="experience-meta">

                  <span class="experience-number">
                    02
                  </span>

                  <span class="experience-period">
                    Internship
                  </span>

                </div>

                <span class="status-badge internship">
                  Internship
                </span>

              </div>


              <!-- Company -->

              <div class="experience-main">

                <div
                  class="company-logo secondary"
                  aria-hidden="true"
                >
                  FE
                </div>

                <div class="experience-heading">

                  <h3>
                    Frontend Development Trainee
                  </h3>

                  <h4>
                    eBrainX Solutions
                  </h4>

                </div>

              </div>


              <!-- Description -->

              <p class="experience-description">
                Developed multiple frontend sections and
                reusable components while learning professional
                development workflows, Git collaboration and
                modern UI implementation.
              </p>


              <!-- Technologies -->

              <div class="tech-list" aria-label="Technologies used">

                <span>Vue 3</span>
                <span>Vue Router</span>
                <span>JavaScript</span>
                <span>Vuetify</span>
                <span>GitHub</span>
                <span>REST APIs</span>

              </div>


              <!-- Highlights -->

              <div class="highlights">

                <div class="highlight">

                  <span class="highlight-icon">
                    01
                  </span>

                  <span>
                    Built reusable Vue components
                  </span>

                </div>

                <div class="highlight">

                  <span class="highlight-icon">
                    02
                  </span>

                  <span>
                    Worked with real project workflows
                  </span>

                </div>

                <div class="highlight">

                  <span class="highlight-icon">
                    03
                  </span>

                  <span>
                    Implemented responsive layouts
                  </span>

                </div>

              </div>

            </div>

          </article>

        </div>


        <!-- =========================================
             SIDE PANEL
        ========================================== -->

        <aside
          class="experience-side"
          v-reveal
          style="transition-delay: .2s"
        >

          <!-- =====================================
               APPROACH CARD
          ====================================== -->

          <div class="side-card">

            <div
              class="side-glow"
              aria-hidden="true"
            ></div>


            <span class="side-label">
              MY APPROACH
            </span>


            <h3>
              Building with
              <span>purpose.</span>
            </h3>


            <p>
              I believe great frontend development is a
              combination of clean engineering, thoughtful
              design and meaningful interactions.
            </p>


            <!-- Approach -->

            <div class="approach-list">

              <!-- Think -->

              <div class="approach-item">

                <div
                  class="approach-icon"
                  aria-hidden="true"
                >
                  01
                </div>

                <div>

                  <strong>
                    Think
                  </strong>

                  <small>
                    Understand the problem
                  </small>

                </div>

              </div>


              <!-- Design -->

              <div class="approach-item">

                <div
                  class="approach-icon"
                  aria-hidden="true"
                >
                  02
                </div>

                <div>

                  <strong>
                    Design
                  </strong>

                  <small>
                    Create intuitive experiences
                  </small>

                </div>

              </div>


              <!-- Build -->

              <div class="approach-item">

                <div
                  class="approach-icon"
                  aria-hidden="true"
                >
                  03
                </div>

                <div>

                  <strong>
                    Build
                  </strong>

                  <small>
                    Develop scalable solutions
                  </small>

                </div>

              </div>


              <!-- Improve -->

              <div class="approach-item">

                <div
                  class="approach-icon"
                  aria-hidden="true"
                >
                  04
                </div>

                <div>

                  <strong>
                    Improve
                  </strong>

                  <small>
                    Iterate and optimize
                  </small>

                </div>

              </div>

            </div>

          </div>


          <!-- =====================================
               AVAILABILITY
          ====================================== -->

          <div class="availability-card">

            <span
              class="availability-dot"
              aria-hidden="true"
            ></span>

            <div class="availability-content">

              <strong>
                Open to opportunities
              </strong>

              <span>
                Let's build something great.
              </span>

            </div>

            <a
              href="#contact"
              aria-label="Go to contact section"
            >
              <span aria-hidden="true">
                →
              </span>
            </a>

          </div>

        </aside>

      </div>

    </div>
  </section>
</template>


<script setup>
// The section uses the project's global `v-reveal` directive
// for scroll-based entrance animations.
</script>


<style scoped>

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

.experience-section {
  --experience-accent: #818cf8;
  --experience-accent-2: #22d3ee;

  --experience-card:
    rgba(255, 255, 255, 0.035);

  --experience-card-hover:
    rgba(99, 102, 241, 0.045);

  --experience-border:
    rgba(255, 255, 255, 0.075);

  --experience-border-hover:
    rgba(129, 140, 248, 0.25);

  --experience-muted:
    rgba(255, 255, 255, 0.42);

  --experience-soft:
    rgba(255, 255, 255, 0.06);

  position: relative;

  padding: 140px 0;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 90% 15%,
      rgba(99, 102, 241, 0.07),
      transparent 30%
    ),

    radial-gradient(
      circle at 5% 80%,
      rgba(6, 182, 212, 0.05),
      transparent 30%
    );
}


/* =========================================================
   LIGHT THEME
========================================================= */

:global(:root) .experience-section {
  --experience-card:
    rgba(255, 255, 255, 0.72);

  --experience-card-hover:
    rgba(99, 102, 241, 0.035);

  --experience-border:
    rgba(17, 24, 39, 0.09);

  --experience-border-hover:
    rgba(99, 102, 241, 0.22);

  --experience-muted:
    rgba(17, 24, 39, 0.52);

  --experience-soft:
    rgba(17, 24, 39, 0.06);
}


/* =========================================================
   DARK THEME
========================================================= */

:global([data-theme="dark"]) .experience-section {
  --experience-card:
    rgba(255, 255, 255, 0.035);

  --experience-card-hover:
    rgba(99, 102, 241, 0.045);

  --experience-border:
    rgba(255, 255, 255, 0.075);

  --experience-border-hover:
    rgba(129, 140, 248, 0.25);

  --experience-muted:
    rgba(255, 255, 255, 0.42);

  --experience-soft:
    rgba(255, 255, 255, 0.06);
}


/* =========================================================
   CONTAINER
========================================================= */

.experience-container {
  width:
    min(
      calc(100% - 40px),
      1200px
    );

  margin: 0 auto;
}


/* =========================================================
   SECTION HEADER
========================================================= */

.section-header {
  max-width: 760px;

  margin-bottom: 70px;
}


/* =========================================================
   EYEBROW
========================================================= */

.eyebrow {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 18px;

  color:
    var(
      --accent,
      #818cf8
    );

  font-size: 12px;

  font-weight: 700;

  letter-spacing: .15em;

  text-transform: uppercase;
}


/* Eyebrow dot */

.eyebrow-dot {
  width: 7px;
  height: 7px;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #22d3ee
    );

  box-shadow:
    0 0 15px
    rgba(99, 102, 241, .7);
}


/* =========================================================
   HEADER TITLE
========================================================= */

.section-header h2 {
  margin: 0;

  color:
    var(
      --text-primary,
      #ffffff
    );

  font-size:
    clamp(
      38px,
      5vw,
      64px
    );

  line-height: 1.02;

  letter-spacing: -.055em;

  font-weight: 700;
}


/* Gradient part */

.section-header h2 span {
  display: block;

  background:
    linear-gradient(
      100deg,
      #818cf8,
      #22d3ee
    );

  -webkit-background-clip: text;

  background-clip: text;

  -webkit-text-fill-color: transparent;

  color: transparent;
}


/* =========================================================
   HEADER DESCRIPTION
========================================================= */

.section-header p {
  max-width: 650px;

  margin:
    25px 0 0;

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 15px;

  line-height: 1.8;
}


/* =========================================================
   MAIN LAYOUT
========================================================= */

.experience-layout {
  display: grid;

  grid-template-columns:
    minmax(0, 1.5fr)
    minmax(280px, .7fr);

  gap: 60px;

  align-items: start;
}


/* =========================================================
   TIMELINE
========================================================= */

.timeline {
  position: relative;

  padding-left: 32px;
}


/* Vertical line */

.timeline::before {
  content: "";

  position: absolute;

  top: 10px;
  bottom: 10px;

  left: 5px;

  width: 1px;

  background:
    linear-gradient(
      180deg,
      #6366f1,
      rgba(129, 140, 248, .2),
      #22d3ee
    );
}


/* =========================================================
   EXPERIENCE ITEM
========================================================= */

.experience-item {
  position: relative;

  margin-bottom: 30px;
}

.experience-item:last-child {
  margin-bottom: 0;
}


/* =========================================================
   TIMELINE MARKER
========================================================= */

.timeline-marker {
  position: absolute;

  left: -32px;

  top: 27px;

  width: 12px;
  height: 12px;

  display: flex;

  align-items: center;
  justify-content: center;

  border:
    2px solid
    #818cf8;

  border-radius: 50%;

  background:
    var(
      --bg-primary,
      #05070b
    );

  box-shadow:
    0 0 0 5px
      rgba(99, 102, 241, .08),

    0 0 20px
      rgba(99, 102, 241, .3);

  z-index: 2;
}


.timeline-marker span {
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background:
    #22d3ee;
}


/* =========================================================
   EXPERIENCE CARD
========================================================= */

.experience-card {
  position: relative;

  padding: 30px;

  overflow: hidden;

  border:
    1px solid
    var(--experience-border);

  border-radius: 22px;

  background:
    var(--experience-card);

  backdrop-filter:
    blur(18px);

  -webkit-backdrop-filter:
    blur(18px);

  transition:
    transform .35s ease,
    border-color .35s ease,
    background .35s ease,
    box-shadow .35s ease;
}


/* Top accent */

.experience-card::before {
  content: "";

  position: absolute;

  top: 0;
  left: 0;

  width: 130px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      #6366f1,
      #22d3ee,
      transparent
    );
}


/* Soft glow */

.experience-card::after {
  content: "";

  position: absolute;

  width: 180px;
  height: 180px;

  top: -100px;
  right: -100px;

  border-radius: 50%;

  background:
    #6366f1;

  filter:
    blur(80px);

  opacity: 0;

  pointer-events: none;

  transition:
    opacity .4s ease;
}


/* Hover */

.experience-card:hover {
  transform:
    translateY(-6px);

  border-color:
    var(--experience-border-hover);

  background:
    var(--experience-card-hover);

  box-shadow:
    0 25px 70px
    rgba(0, 0, 0, .2);
}


.experience-card:hover::after {
  opacity: .08;
}


/* =========================================================
   CARD TOP
========================================================= */

.card-top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 24px;
}


.experience-meta {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 12px;
}


/* Number */

.experience-number {
  color:
    #818cf8;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: .1em;
}


/* Period */

.experience-period {
  color:
    var(
      --text-muted,
      #687286
    );

  font-size: 11px;
}


/* =========================================================
   STATUS BADGE
========================================================= */

.status-badge {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  flex-shrink: 0;

  padding:
    6px 9px;

  border:
    1px solid
    rgba(74, 222, 128, .15);

  border-radius: 999px;

  background:
    rgba(74, 222, 128, .06);

  color:
    #86efac;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: .05em;

  text-transform: uppercase;
}


.status-badge span {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background:
    #4ade80;

  box-shadow:
    0 0 8px
    rgba(74, 222, 128, .8);
}


/* Internship */

.status-badge.internship {
  border-color:
    rgba(129, 140, 248, .15);

  background:
    rgba(129, 140, 248, .06);

  color:
    #a5b4fc;
}


/* =========================================================
   EXPERIENCE MAIN
========================================================= */

.experience-main {
  display: flex;

  align-items: center;

  gap: 16px;

  margin-bottom: 20px;
}


/* =========================================================
   COMPANY LOGO
========================================================= */

.company-logo {
  width: 52px;
  height: 52px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #06b6d4
    );

  color: #ffffff;

  font-size: 16px;

  font-weight: 800;

  box-shadow:
    0 10px 30px
    rgba(99, 102, 241, .2);
}


.company-logo.secondary {
  background:
    linear-gradient(
      135deg,
      #334155,
      #6366f1
    );
}


/* =========================================================
   EXPERIENCE HEADING
========================================================= */

.experience-heading {
  min-width: 0;
}


.experience-heading h3 {
  margin:
    0 0 5px;

  color:
    var(
      --text-primary,
      #ffffff
    );

  font-size: 20px;

  line-height: 1.3;

  letter-spacing: -.025em;

  font-weight: 700;
}


.experience-heading h4 {
  margin: 0;

  color:
    #818cf8;

  font-size: 12px;

  font-weight: 600;
}


/* =========================================================
   DESCRIPTION
========================================================= */

.experience-description {
  max-width: 720px;

  margin: 0;

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 13px;

  line-height: 1.8;
}


/* =========================================================
   TECHNOLOGIES
========================================================= */

.tech-list {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 22px;
}


.tech-list span {
  padding:
    6px 9px;

  border:
    1px solid
    var(--experience-border);

  border-radius: 7px;

  background:
    rgba(255, 255, 255, .025);

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 9px;

  transition:
    color .25s ease,
    border-color .25s ease,
    background .25s ease,
    transform .25s ease;
}


.tech-list span:hover {
  transform:
    translateY(-1px);

  color:
    #a5b4fc;

  border-color:
    rgba(129, 140, 248, .25);

  background:
    rgba(99, 102, 241, .06);
}


/* =========================================================
   HIGHLIGHTS
========================================================= */

.highlights {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 8px;

  margin-top: 24px;

  padding-top: 22px;

  border-top:
    1px solid
    var(--experience-border);
}


.highlight {
  display: flex;

  align-items: flex-start;

  gap: 8px;

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 9px;

  line-height: 1.55;
}


.highlight-icon {
  flex-shrink: 0;

  color:
    #818cf8;

  font-weight: 700;
}


/* =========================================================
   SIDE PANEL
========================================================= */

.experience-side {
  position: sticky;

  top: 110px;

  display: flex;

  flex-direction: column;

  gap: 15px;
}


/* =========================================================
   SIDE CARD
========================================================= */

.side-card {
  position: relative;

  padding: 28px;

  overflow: hidden;

  border:
    1px solid
    var(--experience-border);

  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(99, 102, 241, .07),
      var(--experience-card)
    );

  backdrop-filter:
    blur(18px);

  -webkit-backdrop-filter:
    blur(18px);
}


/* Glow */

.side-glow {
  position: absolute;

  width: 150px;
  height: 150px;

  top: -75px;
  right: -75px;

  border-radius: 50%;

  background:
    #6366f1;

  filter:
    blur(70px);

  opacity: .15;

  pointer-events: none;
}


/* =========================================================
   SIDE LABEL
========================================================= */

.side-label {
  position: relative;

  color:
    #818cf8;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: .16em;
}


/* =========================================================
   SIDE HEADING
========================================================= */

.side-card h3 {
  position: relative;

  margin:
    15px 0;

  color:
    var(
      --text-primary,
      #ffffff
    );

  font-size: 27px;

  line-height: 1.15;

  letter-spacing: -.04em;
}


.side-card h3 span {
  background:
    linear-gradient(
      100deg,
      #818cf8,
      #22d3ee
    );

  -webkit-background-clip: text;

  background-clip: text;

  -webkit-text-fill-color: transparent;

  color: transparent;
}


/* Description */

.side-card > p {
  position: relative;

  margin: 0;

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 12px;

  line-height: 1.75;
}


/* =========================================================
   APPROACH LIST
========================================================= */

.approach-list {
  display: flex;

  flex-direction: column;

  gap: 9px;

  margin-top: 28px;
}


/* Approach item */

.approach-item {
  display: flex;

  align-items: center;

  gap: 11px;

  padding: 10px;

  border-radius: 11px;

  transition:
    background .25s ease,
    transform .25s ease;
}


.approach-item:hover {
  background:
    rgba(255, 255, 255, .035);

  transform:
    translateX(4px);
}


/* Approach icon */

.approach-icon {
  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 8px;

  background:
    rgba(99, 102, 241, .1);

  color:
    #a5b4fc;

  font-size: 8px;

  font-weight: 700;
}


/* Approach title */

.approach-item strong {
  display: block;

  color:
    var(
      --text-primary,
      #ffffff
    );

  font-size: 11px;
}


/* Approach description */

.approach-item small {
  display: block;

  margin-top: 2px;

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 9px;
}


/* =========================================================
   AVAILABILITY CARD
========================================================= */

.availability-card {
  display: flex;

  align-items: center;

  gap: 10px;

  padding:
    14px 16px;

  border:
    1px solid
    rgba(74, 222, 128, .15);

  border-radius: 15px;

  background:
    rgba(74, 222, 128, .035);

  transition:
    transform .25s ease,
    border-color .25s ease,
    background .25s ease;
}


.availability-card:hover {
  transform:
    translateY(-2px);

  border-color:
    rgba(74, 222, 128, .25);

  background:
    rgba(74, 222, 128, .055);
}


/* Green dot */

.availability-dot {
  width: 8px;
  height: 8px;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    #4ade80;

  box-shadow:
    0 0 12px
    rgba(74, 222, 128, .8);
}


/* Availability content */

.availability-content {
  min-width: 0;
}


.availability-card strong {
  display: block;

  color:
    #86efac;

  font-size: 10px;
}


.availability-card span {
  display: block;

  margin-top: 2px;

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 9px;
}


/* Arrow */

.availability-card a {
  width: 28px;
  height: 28px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-left: auto;

  flex-shrink: 0;

  border-radius: 8px;

  color:
    #86efac;

  text-decoration: none;

  transition:
    transform .25s ease,
    background .25s ease;
}


.availability-card a:hover {
  transform:
    translateX(4px);

  background:
    rgba(74, 222, 128, .08);
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1050px) {

  .experience-layout {
    grid-template-columns: 1fr;

    gap: 35px;
  }


  .experience-side {
    position: static;

    display: grid;

    grid-template-columns:
      1fr 1fr;

    align-items: start;
  }

}


/* =========================================================
   TABLET / SMALL LAPTOP
========================================================= */

@media (max-width: 850px) {

  .experience-section {
    padding:
      110px 0;
  }


  .experience-container {
    width:
      calc(100% - 32px);
  }


  .section-header {
    margin-bottom: 55px;
  }


  .section-header h2 {
    font-size:
      clamp(
        36px,
        7vw,
        54px
      );
  }


  .experience-layout {
    gap: 30px;
  }


  .experience-card {
    padding: 25px;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 750px) {

  .experience-section {
    padding:
      90px 0;
  }


  .experience-container {
    width:
      calc(100% - 30px);
  }


  .timeline {
    padding-left: 24px;
  }


  .timeline::before {
    left: 3px;
  }


  .timeline-marker {
    left: -24px;
  }


  .experience-card {
    padding: 22px;

    border-radius: 18px;
  }


  .highlights {
    grid-template-columns: 1fr;

    gap: 10px;
  }


  .experience-side {
    grid-template-columns: 1fr;
  }


  .side-card {
    padding: 24px;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 500px) {

  .experience-section {
    padding:
      75px 0;
  }


  .experience-container {
    width:
      calc(100% - 24px);
  }


  .section-header {
    margin-bottom: 45px;
  }


  .section-header h2 {
    font-size:
      clamp(
        32px,
        10vw,
        44px
      );

    letter-spacing:
      -.045em;
  }


  .section-header p {
    font-size: 13px;
  }


  .timeline {
    padding-left: 20px;
  }


  .timeline::before {
    left: 2px;
  }


  .timeline-marker {
    left: -20px;

    width: 11px;
    height: 11px;
  }


  .experience-card {
    padding: 18px;

    border-radius: 16px;
  }


  .card-top {
    align-items: flex-start;

    gap: 10px;
  }


  .experience-meta {
    align-items: flex-start;

    flex-direction: column;

    gap: 4px;
  }


  .experience-number {
    font-size: 10px;
  }


  .experience-period {
    font-size: 10px;
  }


  .status-badge {
    padding:
      5px 7px;

    font-size: 7px;
  }


  .experience-main {
    align-items: flex-start;

    gap: 12px;
  }


  .company-logo {
    width: 44px;
    height: 44px;

    border-radius: 11px;

    font-size: 13px;
  }


  .experience-heading h3 {
    font-size: 16px;

    line-height: 1.35;
  }


  .experience-heading h4 {
    font-size: 10px;
  }


  .experience-description {
    font-size: 12px;

    line-height: 1.75;
  }


  .tech-list {
    gap: 5px;

    margin-top: 18px;
  }


  .tech-list span {
    padding:
      5px 7px;

    font-size: 8px;
  }


  .highlights {
    margin-top: 20px;

    padding-top: 18px;
  }


  .highlight {
    font-size: 8px;
  }


  .side-card {
    padding: 20px;

    border-radius: 18px;
  }


  .side-card h3 {
    font-size: 24px;
  }


  .availability-card {
    padding:
      12px 13px;
  }

}


/* =========================================================
   VERY SMALL DEVICES
========================================================= */

@media (max-width: 360px) {

  .experience-container {
    width:
      calc(100% - 20px);
  }


  .experience-card {
    padding: 16px;
  }


  .experience-main {
    gap: 10px;
  }


  .company-logo {
    width: 40px;
    height: 40px;
  }


  .experience-heading h3 {
    font-size: 14px;
  }


  .experience-heading h4 {
    font-size: 9px;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .experience-card,
  .tech-list span,
  .approach-item,
  .availability-card,
  .availability-card a {
    transition: none;
  }


  .experience-card:hover,
  .tech-list span:hover,
  .approach-item:hover,
  .availability-card:hover {
    transform: none;
  }

}

</style>