<template>
  <section id="projects" class="projects-section">
    <div class="container">

      <!-- =========================
           SECTION HEADING
      ========================== -->

      <div class="section-heading" v-reveal="0">
        <p>My Recent Work</p>

        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>


      <!-- =========================
           PROJECTS GRID
      ========================== -->

      <div class="projects-grid">


        <!-- =========================
             PROJECT 1 — ATTENDO
        ========================== -->

        <article
          class="project-card"
          v-reveal="0"
        >

          <!-- Browser Mockup -->

          <div class="project-image project-one">

            <div class="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="browser-content">

              <div class="mock-sidebar">
                <div class="sidebar-logo"></div>
                <div class="sidebar-line"></div>
                <div class="sidebar-line"></div>
                <div class="sidebar-line"></div>
                <div class="sidebar-line"></div>
              </div>

              <div class="mock-main">

                <div class="mock-top">
                  <div class="mock-heading"></div>
                  <div class="mock-button"></div>
                </div>

                <div class="mock-cards">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div class="mock-table">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

              </div>

            </div>

            <div class="preview-label">
              Event Management
            </div>

          </div>


          <!-- Content -->

          <div class="project-content">

            <div class="project-top">

              <h3>Attendo</h3>

              <span class="project-status">
                Frontend
              </span>

            </div>


            <p>
              A modern event management dashboard for managing
              events, attendees, speakers, agendas and logistics.
            </p>


            <div class="project-tags">

              <span>Vue.js</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>CSS</span>

            </div>


            <div class="project-links">

              <a
                href="#"
                class="project-link"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="#"
                class="project-demo"
              >
                Live Demo
                <span>↗</span>
              </a>

            </div>

          </div>

        </article>



        <!-- =========================
             PROJECT 2 — EBRAINX
        ========================== -->

        <article
          class="project-card"
          v-reveal="0.1"
        >

          <div class="project-image project-two">

            <div class="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="browser-content">

              <div class="mock-sidebar">
                <div class="sidebar-logo"></div>
                <div class="sidebar-line"></div>
                <div class="sidebar-line"></div>
                <div class="sidebar-line"></div>
                <div class="sidebar-line"></div>
              </div>

              <div class="mock-main">

                <div class="mock-top">
                  <div class="mock-heading"></div>
                  <div class="mock-button"></div>
                </div>

                <div class="mock-cards">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div class="mock-table">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

              </div>

            </div>

            <div class="preview-label">
              Corporate Website
            </div>

          </div>


          <div class="project-content">

            <div class="project-top">

              <h3>eBrainX Website</h3>

              <span class="project-status">
                Website
              </span>

            </div>


            <p>
              A responsive corporate website featuring modern
              layouts, services, industries, careers and contact
              sections.
            </p>


            <div class="project-tags">

              <span>Vue.js</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>Tailwind</span>

            </div>


            <div class="project-links">

              <a
                href="#"
                class="project-link"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="#"
                class="project-demo"
              >
                Live Demo
                <span>↗</span>
              </a>

            </div>

          </div>

        </article>



        <!-- =========================
             PROJECT 3 — PORTFOLIO
        ========================== -->

        <article
          class="project-card"
          v-reveal="0.2"
        >

          <div class="project-image project-three">

            <div class="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="browser-content portfolio-preview">

              <div class="portfolio-nav">

                <div class="portfolio-logo"></div>

                <div class="portfolio-links">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

              <div class="portfolio-hero">

                <div class="portfolio-text">

                  <div></div>
                  <div></div>
                  <div></div>

                </div>

                <div class="portfolio-avatar"></div>

              </div>

              <div class="portfolio-buttons">
                <span></span>
                <span></span>
              </div>

            </div>

            <div class="preview-label">
              Developer Portfolio
            </div>

          </div>


          <div class="project-content">

            <div class="project-top">

              <h3>Developer Portfolio</h3>

              <span class="project-status">
                Personal
              </span>

            </div>


            <p>
              A modern responsive developer portfolio with dark
              and light mode, animations and reusable Vue components.
            </p>


            <div class="project-tags">

              <span>Vue.js</span>
              <span>Tailwind</span>
              <span>Bootstrap</span>
              <span>CSS</span>

            </div>


            <div class="project-links">

              <a
                href="#"
                class="project-link"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="#"
                class="project-demo"
              >
                Live Demo
                <span>↗</span>
              </a>

            </div>

          </div>

        </article>



        <!-- =========================
             PROJECT 4 — CAREER
        ========================== -->

        <article
          class="project-card"
          v-reveal="0.3"
        >

          <div class="project-image project-four">

            <div class="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="browser-content career-preview">

              <div class="career-header">

                <div class="career-logo"></div>

                <div class="career-nav">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>


              <div class="career-content">

                <div class="career-title"></div>

                <div class="career-form">

                  <div></div>
                  <div></div>
                  <div></div>

                </div>

              </div>

            </div>

            <div class="preview-label">
              Career Application
            </div>

          </div>


          <div class="project-content">

            <div class="project-top">

              <h3>Career Application</h3>

              <span class="project-status">
                Vue App
              </span>

            </div>


            <p>
              A career application flow with dynamic job information,
              form handling and route-based application details.
            </p>


            <div class="project-tags">

              <span>Vue.js</span>
              <span>Vue Router</span>
              <span>JavaScript</span>
              <span>CSS</span>

            </div>


            <div class="project-links">

              <a
                href="#"
                class="project-link"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="#"
                class="project-demo"
              >
                Live Demo
                <span>↗</span>
              </a>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>


<style scoped>

/* ========================================
   PROJECTS SECTION
======================================== */

.projects-section {
  padding: 120px 0;
  background: var(--bg-primary);
}


/* ========================================
   SECTION HEADING
======================================== */

.section-heading {
  text-align: center;
  margin-bottom: 60px;
}

.section-heading p {
  margin-bottom: 10px;

  color: var(--accent);

  font-size: 14px;

  font-weight: 600;

  text-transform: uppercase;

  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 0;

  color: var(--text-primary);

  font-size: clamp(36px, 5vw, 52px);

  line-height: 1.2;
}

.section-heading h2 span {
  color: var(--accent);
}


/* ========================================
   PROJECT GRID
======================================== */

.projects-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 30px;
}


/* ========================================
   PROJECT CARD
======================================== */

.project-card {
  overflow: hidden;

  background: var(--bg-secondary);

  border: 1px solid var(--border);

  border-radius: 18px;

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-8px);

  border-color: var(--accent);

  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.12);
}


/* ========================================
   PROJECT IMAGE
======================================== */

.project-image {
  height: 240px;

  position: relative;

  overflow: hidden;

  padding: 20px;

  background:
    linear-gradient(
      135deg,
      var(--accent),
      #0f172a
    );
}


/* ========================================
   BACKGROUND DECORATION
======================================== */

.project-image::before {
  content: '';

  position: absolute;

  width: 200px;
  height: 200px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.07);

  top: -90px;
  right: -50px;
}

.project-image::after {
  content: '';

  position: absolute;

  width: 130px;
  height: 130px;

  border-radius: 25px;

  background: rgba(255, 255, 255, 0.05);

  bottom: -55px;
  left: -30px;

  transform: rotate(30deg);
}


/* ========================================
   PROJECT VARIATIONS
======================================== */

.project-two {
  background:
    linear-gradient(
      135deg,
      #334155,
      var(--accent)
    );
}

.project-three {
  background:
    linear-gradient(
      135deg,
      #1e293b,
      #6366f1
    );
}

.project-four {
  background:
    linear-gradient(
      135deg,
      #312e81,
      #475569
    );
}


/* ========================================
   BROWSER BAR
======================================== */

.browser-bar {
  position: relative;

  z-index: 10;

  height: 28px;

  display: flex;

  align-items: center;

  gap: 6px;

  padding: 0 12px;

  background: rgba(255, 255, 255, 0.95);

  border-radius: 9px 9px 0 0;
}

.browser-bar span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #94a3b8;
}


/* ========================================
   BROWSER CONTENT
======================================== */

.browser-content {
  position: relative;

  z-index: 9;

  display: flex;

  height: 165px;

  overflow: hidden;

  background: #f8fafc;

  border-radius: 0 0 9px 9px;

  box-shadow:
    0 15px 30px rgba(0, 0, 0, 0.22);
}


/* ========================================
   MOCK SIDEBAR
======================================== */

.mock-sidebar {
  width: 22%;

  flex-shrink: 0;

  padding: 12px 8px;

  background: #1e293b;
}

.sidebar-logo {
  width: 45%;

  height: 8px;

  margin: 4px auto 18px;

  border-radius: 4px;

  background: #6366f1;
}

.sidebar-line {
  width: 75%;

  height: 6px;

  margin: 12px auto;

  border-radius: 4px;

  background: rgba(255, 255, 255, 0.18);
}


/* ========================================
   MOCK MAIN
======================================== */

.mock-main {
  flex: 1;

  padding: 18px;
}


/* ========================================
   MOCK TOP
======================================== */

.mock-top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 18px;
}

.mock-heading {
  width: 40%;

  height: 9px;

  border-radius: 5px;

  background: #334155;
}

.mock-button {
  width: 50px;

  height: 18px;

  border-radius: 5px;

  background: #6366f1;
}


/* ========================================
   MOCK CARDS
======================================== */

.mock-cards {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 8px;

  margin-bottom: 14px;
}

.mock-cards div {
  height: 43px;

  border-radius: 6px;

  background: #dbeafe;

  border: 1px solid #cbd5e1;
}


/* ========================================
   MOCK TABLE
======================================== */

.mock-table {
  display: flex;

  flex-direction: column;

  gap: 5px;

  width: 100%;
}

.mock-table div {
  height: 6px;

  border-radius: 3px;

  background: #cbd5e1;
}

.mock-table div:nth-child(1) {
  width: 90%;
}

.mock-table div:nth-child(2) {
  width: 75%;
}

.mock-table div:nth-child(3) {
  width: 85%;
}


/* ========================================
   PREVIEW LABEL
======================================== */

.preview-label {
  position: absolute;

  z-index: 20;

  left: 50%;
  bottom: 15px;

  transform: translateX(-50%);

  padding: 7px 14px;

  border-radius: 20px;

  background: rgba(15, 23, 42, 0.88);

  color: #ffffff;

  font-size: 11px;

  font-weight: 600;

  white-space: nowrap;

  backdrop-filter: blur(8px);
}


/* ========================================
   PORTFOLIO PREVIEW
======================================== */

.portfolio-preview {
  display: block;

  padding: 12px;

  background: #ffffff;
}

.portfolio-nav {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 18px;
}

.portfolio-logo {
  width: 35px;
  height: 7px;

  border-radius: 4px;

  background: #6366f1;
}

.portfolio-links {
  display: flex;

  gap: 7px;
}

.portfolio-links span {
  width: 20px;
  height: 4px;

  border-radius: 3px;

  background: #cbd5e1;
}

.portfolio-hero {
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 5px 15px;
}

.portfolio-text {
  width: 55%;
}

.portfolio-text div {
  height: 6px;

  margin-bottom: 7px;

  border-radius: 4px;

  background: #334155;
}

.portfolio-text div:nth-child(1) {
  width: 75%;
}

.portfolio-text div:nth-child(2) {
  width: 90%;
}

.portfolio-text div:nth-child(3) {
  width: 60%;
}

.portfolio-avatar {
  width: 55px;
  height: 55px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #c7d2fe
    );
}

.portfolio-buttons {
  display: flex;

  gap: 8px;

  margin: 12px 15px;
}

.portfolio-buttons span {
  width: 45px;
  height: 13px;

  border-radius: 4px;

  background: #6366f1;
}

.portfolio-buttons span:last-child {
  background: #e2e8f0;
}


/* ========================================
   CAREER PREVIEW
======================================== */

.career-preview {
  display: block;

  padding: 12px;

  background: #ffffff;
}

.career-header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 20px;
}

.career-logo {
  width: 45px;
  height: 8px;

  border-radius: 4px;

  background: #6366f1;
}

.career-nav {
  display: flex;

  gap: 7px;
}

.career-nav span {
  width: 20px;
  height: 4px;

  border-radius: 3px;

  background: #cbd5e1;
}

.career-content {
  padding: 5px 15px;
}

.career-title {
  width: 50%;

  height: 8px;

  margin-bottom: 15px;

  border-radius: 4px;

  background: #334155;
}

.career-form {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 8px;
}

.career-form div {
  height: 22px;

  border: 1px solid #cbd5e1;

  border-radius: 4px;

  background: #f8fafc;
}

.career-form div:last-child {
  grid-column: span 2;

  height: 35px;
}


/* ========================================
   PROJECT CONTENT
======================================== */

.project-content {
  padding: 30px;
}


/* ========================================
   PROJECT HEADER
======================================== */

.project-top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin-bottom: 15px;
}

.project-top h3 {
  margin: 0;

  color: var(--text-primary);

  font-size: 23px;

  line-height: 1.3;
}

.project-status {
  flex-shrink: 0;

  padding: 6px 10px;

  border-radius: 20px;

  background: rgba(99, 102, 241, 0.1);

  color: var(--accent);

  font-size: 11px;

  font-weight: 600;
}


/* ========================================
   DESCRIPTION
======================================== */

.project-content > p {
  margin-bottom: 20px;

  color: var(--text-secondary);

  font-size: 15px;

  line-height: 1.7;
}


/* ========================================
   TAGS
======================================== */

.project-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 25px;
}

.project-tags span {
  padding: 6px 10px;

  border-radius: 6px;

  background: var(--bg-primary);

  border: 1px solid var(--border);

  color: var(--text-secondary);

  font-size: 12px;

  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}

.project-card:hover .project-tags span {
  border-color: rgba(99, 102, 241, 0.25);
}


/* ========================================
   PROJECT LINKS
======================================== */

.project-links {
  display: flex;

  align-items: center;

  gap: 20px;
}

.project-link,
.project-demo {
  display: inline-flex;

  align-items: center;

  gap: 5px;

  font-size: 14px;

  font-weight: 600;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.project-link {
  color: var(--text-primary);
}

.project-demo {
  color: var(--accent);
}

.project-link:hover,
.project-demo:hover {
  color: var(--accent);

  transform: translateY(-2px);
}

.project-link span,
.project-demo span {
  font-size: 16px;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 250px;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .projects-section {
    padding: 80px 0;
  }

  .section-heading {
    margin-bottom: 40px;
  }

  .section-heading h2 {
    font-size: 36px;
  }

  .project-image {
    height: 205px;

    padding: 15px;
  }

  .browser-content {
    height: 140px;
  }

  .mock-main {
    padding: 12px;
  }

  .mock-cards div {
    height: 32px;
  }

  .mock-table div {
    height: 5px;
  }

  .project-content {
    padding: 22px;
  }

  .project-top {
    align-items: flex-start;
  }

  .project-top h3 {
    font-size: 20px;
  }

  .project-status {
    font-size: 10px;

    padding: 5px 8px;
  }

  .project-content > p {
    font-size: 14px;
  }

  .project-links {
    gap: 15px;
  }

}

</style>