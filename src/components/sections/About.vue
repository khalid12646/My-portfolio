<template>
  <section class="about-section" id="about">
    <div class="about-container">

      <!-- ================================
           SECTION HEADER
      ================================= -->

      <div class="section-header" v-reveal>

        <span class="eyebrow">
          <span class="eyebrow-dot"></span>
          About Me
        </span>

        <h2>
          Building digital experiences
          <span>that make an impact.</span>
        </h2>

        <p>
          I’m Khalid Alvi, a Frontend Developer specializing in
          Vue.js, JavaScript and TypeScript, focused on building
          modern, responsive and high-performance web applications.
        </p>

      </div>


      <!-- ================================
           MAIN CONTENT
      ================================= -->

      <div class="about-grid">


        <!-- ================================
             PROFILE IMAGE
        ================================= -->

        <div
          class="about-visual"
          v-reveal
        >

          <div class="image-glow"></div>

          <div class="image-card">

            <img
              src="/Khalid-Alvi.png"
              alt="Khalid Alvi - Frontend Developer specializing in Vue.js, JavaScript and TypeScript"
              loading="lazy"
            />

            <div class="image-overlay"></div>


            <!-- Availability -->

            <div class="available-badge">

              <span></span>

              Available for opportunities

            </div>


            <!-- Developer Information -->

            <div class="developer-badge">

              <strong>
                Frontend Developer
              </strong>

              <small>
                Vue.js · JavaScript · TypeScript
              </small>

            </div>

          </div>

        </div>


        <!-- ================================
             ABOUT CONTENT
        ================================= -->

        <div
          class="about-content"
          v-reveal
          style="transition-delay: .15s"
        >

          <span class="content-label">
            Who I am
          </span>


          <h3>
            I build modern
            <span>digital experiences.</span>
          </h3>


          <p>
            I’m Khalid Alvi, a passionate Frontend Developer
            specializing in Vue.js, JavaScript and TypeScript.
            I transform ideas and designs into polished,
            responsive and high-performance web applications
            with a strong focus on usability, accessibility
            and visual quality.
          </p>


          <p>
            My expertise includes responsive web development,
            REST API integration, reusable component architecture,
            modern UI/UX implementation, Tailwind CSS and
            Bootstrap. I write clean, maintainable and scalable
            frontend code designed to deliver reliable digital
            experiences across devices.
          </p>


          <!-- ================================
               EXPERTISE
          ================================= -->

          <div class="feature-list">


            <!-- Feature 01 -->

            <div class="feature-item">

              <div class="feature-icon">
                01
              </div>

              <div>

                <h4>
                  Scalable Development
                </h4>

                <p>
                  Clean, reusable and maintainable
                  frontend architecture.
                </p>

              </div>

            </div>


            <!-- Feature 02 -->

            <div class="feature-item">

              <div class="feature-icon">
                02
              </div>

              <div>

                <h4>
                  Modern UI / UX
                </h4>

                <p>
                  Responsive interfaces with
                  smooth and meaningful interactions.
                </p>

              </div>

            </div>


            <!-- Feature 03 -->

            <div class="feature-item">

              <div class="feature-icon">
                03
              </div>

              <div>

                <h4>
                  API Integration
                </h4>

                <p>
                  Reliable REST API integration
                  for dynamic web applications.
                </p>

              </div>

            </div>

          </div>


          <!-- ================================
               ACTION BUTTONS
          ================================= -->

          <div class="about-actions">


            <!-- Projects -->

            <a
              href="#projects"
              class="primary-button"
              aria-label="Explore Khalid Alvi's projects"
            >

              <span>
                Explore My Work
              </span>

              <span class="button-arrow">
                ↗
              </span>

            </a>


            <!-- CV -->

            <a
              href="/KhalidCV.pdf"
              download="Khalid-Alvi-CV.pdf"
              class="secondary-button"
              aria-label="Download Khalid Alvi CV"
            >

              <span>
                Download CV
              </span>

              <span>
                ↓
              </span>

            </a>


            <!-- Contact -->

            <a
              href="#contact"
              class="secondary-button"
              aria-label="Contact Khalid Alvi"
            >

              <span>
                Let's Connect
              </span>

            </a>

          </div>

        </div>

      </div>


      <!-- ================================
           STATS
      ================================= -->

      <div
        class="stats-grid"
        v-reveal
        style="transition-delay: .25s"
      >


        <div class="stat-card">

          <strong>
            Vue.js
          </strong>

          <span>
            Frontend Development
          </span>

        </div>


        <div class="stat-card">

          <strong>
            JS
          </strong>

          <span>
            Modern JavaScript
          </span>

        </div>


        <div class="stat-card">

          <strong>
            API
          </strong>

          <span>
            REST Integration
          </span>

        </div>


        <div class="stat-card">

          <strong>
            UI/UX
          </strong>

          <span>
            Responsive Interfaces
          </span>

        </div>


      </div>

    </div>
  </section>
</template>


<script setup>
// Profile image and CV are stored inside the public folder.
// Public assets are referenced directly using their root path.
</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.about-section {
  position: relative;

  padding: 90px 20px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 45%,
      rgba(99, 102, 241, 0.06),
      transparent 30%
    ),

    radial-gradient(
      circle at 90% 80%,
      rgba(6, 182, 212, 0.05),
      transparent 30%
    );
}


/* =========================================================
   CONTAINER
========================================================= */

.about-container {
  width: min(
    1120px,
    100%
  );

  margin: auto;
}


/* =========================================================
   SECTION HEADER
========================================================= */

.section-header {
  max-width: 720px;

  margin-bottom: 45px;
}


/* Eyebrow */

.eyebrow {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 14px;

  color:
    var(--accent, #818cf8);

  font-size: 11px;

  font-weight: 700;

  letter-spacing: .14em;

  text-transform: uppercase;
}


/* Eyebrow dot */

.eyebrow-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #22d3ee
    );

  box-shadow:
    0 0 12px
    rgba(34, 211, 238, .8);
}


/* Heading */

.section-header h2 {
  margin: 0;

  color:
    var(--text-primary, #fff);

  font-size:
    clamp(
      34px,
      4.5vw,
      56px
    );

  line-height: 1.04;

  letter-spacing: -.05em;

  font-weight: 700;
}


/* Gradient heading */

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

  color: transparent;
}


/* Header paragraph */

.section-header p {
  max-width: 650px;

  margin: 18px 0 0;

  color:
    var(--text-secondary, #9ca3af);

  font-size: 14px;

  line-height: 1.75;
}


/* =========================================================
   MAIN GRID
========================================================= */

.about-grid {
  display: grid;

  grid-template-columns:
    minmax(0, .85fr)
    minmax(0, 1.15fr);

  gap: 55px;

  align-items: center;
}


/* =========================================================
   PROFILE IMAGE
========================================================= */

.about-visual {
  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;
}


/* Glow */

.image-glow {
  position: absolute;

  width: 240px;
  height: 240px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #22d3ee
    );

  filter: blur(80px);

  opacity: .18;
}


/* Image card */

.image-card {
  position: relative;

  width: 100%;

  max-width: 410px;

  aspect-ratio: 4 / 5;

  overflow: hidden;

  border:
    1px solid
    rgba(255,255,255,.1);

  border-radius: 24px;

  background:
    #10141d;

  box-shadow:
    0 25px 70px
    rgba(0,0,0,.35);

  transition:
    transform .4s ease,
    border-color .4s ease,
    box-shadow .4s ease;
}


/* Image card hover */

.image-card:hover {
  transform:
    translateY(-7px);

  border-color:
    rgba(129,140,248,.3);

  box-shadow:
    0 35px 90px
    rgba(0,0,0,.45);
}


/* Image */

.image-card img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;

  transition:
    transform .6s ease;
}


/* Image hover */

.image-card:hover img {
  transform:
    scale(1.04);
}


/* Image overlay */

.image-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(5,7,11,.88),
      rgba(5,7,11,.05) 55%
    );
}


/* =========================================================
   AVAILABILITY BADGE
========================================================= */

.available-badge {
  position: absolute;

  top: 16px;
  left: 16px;

  display: flex;

  align-items: center;

  gap: 7px;

  padding: 8px 11px;

  border:
    1px solid
    rgba(255,255,255,.12);

  border-radius: 999px;

  background:
    rgba(8,11,18,.72);

  backdrop-filter:
    blur(12px);

  color:
    #dce1ea;

  font-size: 9px;
}


/* Status dot */

.available-badge span {
  width: 6px;
  height: 6px;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    #4ade80;

  box-shadow:
    0 0 10px
    #4ade80;
}


/* =========================================================
   DEVELOPER BADGE
========================================================= */

.developer-badge {
  position: absolute;

  left: 18px;
  right: 18px;
  bottom: 18px;

  padding: 13px 15px;

  border:
    1px solid
    rgba(255,255,255,.1);

  border-radius: 13px;

  background:
    rgba(8,11,18,.72);

  backdrop-filter:
    blur(15px);
}


/* Badge title */

.developer-badge strong {
  display: block;

  color: white;

  font-size: 12px;
}


/* Badge subtitle */

.developer-badge small {
  display: block;

  margin-top: 4px;

  color:
    #8b95a7;

  font-size: 9px;
}


/* =========================================================
   CONTENT
========================================================= */

.about-content {
  max-width: 560px;
}


/* Label */

.content-label {
  display: block;

  margin-bottom: 10px;

  color:
    #687286;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: .15em;

  text-transform: uppercase;
}


/* Main heading */

.about-content h3 {
  margin: 0 0 18px;

  color:
    var(--text-primary, #fff);

  font-size:
    clamp(
      28px,
      3.5vw,
      42px
    );

  line-height: 1.1;

  letter-spacing: -.045em;

  font-weight: 700;
}


/* Heading gradient */

.about-content h3 span {
  background:
    linear-gradient(
      100deg,
      #818cf8,
      #22d3ee
    );

  -webkit-background-clip: text;

  background-clip: text;

  color: transparent;
}


/* Paragraph */

.about-content > p {
  margin:
    0 0 12px;

  color:
    var(
      --text-secondary,
      #9ca3af
    );

  font-size: 13px;

  line-height: 1.8;
}


/* =========================================================
   FEATURES
========================================================= */

.feature-list {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 9px;

  margin-top: 25px;
}


/* Feature card */

.feature-item {
  padding: 13px;

  border:
    1px solid
    rgba(255,255,255,.06);

  border-radius: 13px;

  background:
    rgba(255,255,255,.025);

  transition:
    transform .3s ease,
    border-color .3s ease,
    background .3s ease;
}


/* Hover */

.feature-item:hover {
  transform:
    translateY(-3px);

  border-color:
    rgba(129,140,248,.2);

  background:
    rgba(99,102,241,.04);
}


/* Feature icon */

.feature-icon {
  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 9px;

  border-radius: 8px;

  background:
    rgba(99,102,241,.1);

  color:
    #a5b4fc;

  font-size: 9px;

  font-weight: 700;
}


/* Feature heading */

.feature-item h4 {
  margin:
    0 0 4px;

  color:
    var(--text-primary, white);

  font-size: 11px;

  font-weight: 700;
}


/* Feature description */

.feature-item p {
  margin: 0;

  color:
    #596477;

  font-size: 9px;

  line-height: 1.55;
}


/* =========================================================
   BUTTONS
========================================================= */

.about-actions {
  display: flex;

  flex-wrap: wrap;

  gap: 9px;

  margin-top: 25px;
}


/* Common */

.primary-button,
.secondary-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  min-height: 42px;

  padding:
    0 15px;

  border-radius: 10px;

  font-size: 11px;

  font-weight: 600;

  text-decoration: none;

  transition:
    transform .25s ease,
    box-shadow .25s ease,
    border-color .25s ease,
    background .25s ease;
}


/* Primary */

.primary-button {
  color: white;

  background:
    linear-gradient(
      110deg,
      #6366f1,
      #06b6d4
    );

  box-shadow:
    0 8px 25px
    rgba(99,102,241,.2);
}


/* Primary hover */

.primary-button:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0 14px 35px
    rgba(99,102,241,.3);
}


/* Secondary */

.secondary-button {
  border:
    1px solid
    rgba(255,255,255,.1);

  color:
    rgba(255,255,255,.75);

  background:
    rgba(255,255,255,.03);
}


/* Secondary hover */

.secondary-button:hover {
  transform:
    translateY(-2px);

  border-color:
    rgba(129,140,248,.3);

  background:
    rgba(99,102,241,.05);
}


/* Arrow */

.button-arrow {
  font-size: 14px;

  transition:
    transform .25s ease;
}


/* Arrow hover */

.primary-button:hover .button-arrow {
  transform:
    translate(
      3px,
      -3px
    );
}


/* =========================================================
   STATS
========================================================= */

.stats-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 10px;

  margin-top: 45px;
}


/* Stat card */

.stat-card {
  padding: 17px;

  border:
    1px solid
    rgba(255,255,255,.06);

  border-radius: 14px;

  background:
    rgba(255,255,255,.02);

  transition:
    transform .3s ease,
    border-color .3s ease,
    background .3s ease;
}


/* Stat hover */

.stat-card:hover {
  transform:
    translateY(-3px);

  border-color:
    rgba(129,140,248,.2);

  background:
    rgba(99,102,241,.035);
}


/* Number */

.stat-card strong {
  display: block;

  margin-bottom: 5px;

  color:
    var(--text-primary, white);

  font-size: 20px;

  font-weight: 700;

  letter-spacing: -.03em;
}


/* Label */

.stat-card span {
  color:
    #596477;

  font-size: 9px;
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 900px) {

  .about-grid {
    grid-template-columns: 1fr;

    gap: 45px;
  }


  .about-content {
    max-width: 700px;
  }


  .image-card {
    max-width: 380px;
  }

}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 650px) {

  .about-section {
    padding:
      75px 15px;
  }


  .feature-list {
    grid-template-columns: 1fr;
  }


  .stats-grid {
    grid-template-columns:
      repeat(2, 1fr);

    margin-top: 35px;
  }


  .section-header {
    margin-bottom: 35px;
  }

}


/* =========================================================
   RESPONSIVE — SMALL MOBILE
========================================================= */

@media (max-width: 450px) {

  .about-actions {
    flex-direction: column;
  }


  .primary-button,
  .secondary-button {
    width: 100%;
  }


  .image-card {
    max-width: 100%;
  }


  .available-badge {
    font-size: 8px;
  }


  .developer-badge {
    left: 12px;
    right: 12px;
    bottom: 12px;
  }

}

</style>