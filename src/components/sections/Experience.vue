<template>
  <section id="experience" class="experience-section">
    <div class="container">

      <!-- Section Heading -->
      <div class="section-heading">
        <p>My Journey</p>
        <h2>Work <span>Experience</span></h2>
      </div>

      <!-- Timeline -->
      <div class="experience-timeline">

        <!-- Experience 1 -->
      <div class="experience-item" v-reveal="0">

          <div class="experience-dot"></div>

          <div class="experience-card">

            <div class="experience-header">
              <div>
                <h3>Frontend Developer</h3>
                <h4>eBrainX Solutions</h4>
              </div>

              <span class="experience-date">
                2026 - Present
              </span>
            </div>

            <p class="experience-location">
              Lahore, Pakistan
            </p>

            <p class="experience-description">
              Developing modern and responsive web applications
              using Vue.js, JavaScript, Bootstrap and Tailwind CSS.
              Working on reusable components, responsive interfaces
              and frontend features.
            </p>

            <div class="experience-tags">
              <span>Vue.js</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>

          </div>

        </div>


        <!-- Experience 2 -->
     <div class="experience-item" v-reveal="0.15">

          <div class="experience-dot"></div>

          <div class="experience-card">

            <div class="experience-header">
              <div>
                <h3>Frontend Developer Intern</h3>
                <h4>eBrainX Solutions</h4>
              </div>

              <span class="experience-date">
                2025 - 2026
              </span>
            </div>

            <p class="experience-location">
              Lahore, Pakistan
            </p>

            <p class="experience-description">
              Built responsive pages and reusable Vue.js components.
              Worked with Git, GitHub, Bootstrap and Tailwind CSS
              while learning professional frontend development
              workflows.
            </p>

            <div class="experience-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Vue.js</span>
              <span>Git</span>
            </div>

          </div>

        </div>


        <!-- Experience 3 -->
    <div class="experience-item" v-reveal="0.3">

          <div class="experience-dot"></div>

          <div class="experience-card">

            <div class="experience-header">
              <div>
                <h3>Frontend Trainee</h3>
                <h4>Development Training</h4>
              </div>

              <span class="experience-date">
                2025
              </span>
            </div>

            <p class="experience-location">
              Lahore, Pakistan
            </p>

            <p class="experience-description">
              Learned frontend development fundamentals and created
              responsive web interfaces using HTML, CSS, JavaScript
              and modern CSS frameworks.
            </p>

            <div class="experience-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
<style scoped>
/* ========================================
   EXPERIENCE SECTION
======================================== */

.experience-section {
  padding: 120px 0;
  background: var(--bg-secondary);
}


/* ========================================
   TIMELINE
======================================== */

.experience-timeline {
  position: relative;

  max-width: 900px;

  margin: 0 auto;
}


/* Vertical Line */

.experience-timeline::before {
  content: '';

  position: absolute;

  top: 0;
  bottom: 0;
  left: 20px;

  width: 2px;

  background: var(--accent);

  opacity: 0.25;
}


/* ========================================
   EXPERIENCE ITEM
======================================== */

.experience-item {
  position: relative;

  padding-left: 70px;

  margin-bottom: 50px;
}

.experience-item:last-child {
  margin-bottom: 0;
}


/* ========================================
   TIMELINE DOT
======================================== */

.experience-dot {
  position: absolute;

  top: 5px;
  left: 11px;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  background: var(--accent);

  border: 4px solid var(--bg-secondary);

  box-shadow: 0 0 0 3px var(--accent);

  z-index: 2;
}


/* ========================================
   EXPERIENCE CARD
======================================== */

.experience-card {
  padding: 30px;

  background: var(--bg-primary);

  border: 1px solid var(--border);

  border-radius: 15px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateX(8px);

  border-color: var(--accent);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}


/* ========================================
   HEADER
======================================== */

.experience-header {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 20px;
}

.experience-header h3 {
  margin: 0 0 8px;

  color: var(--text-primary);

  font-size: 23px;
}

.experience-header h4 {
  margin: 0;

  color: var(--accent);

  font-size: 16px;

  font-weight: 600;
}


/* ========================================
   DATE
======================================== */

.experience-date {
  padding: 7px 13px;

  flex-shrink: 0;

  border-radius: 20px;

  background: rgba(99, 102, 241, 0.12);

  color: var(--accent);

  font-size: 13px;

  font-weight: 600;
}


/* ========================================
   LOCATION
======================================== */

.experience-location {
  margin: 15px 0;

  color: var(--text-secondary);

  font-size: 14px;
}


/* ========================================
   DESCRIPTION
======================================== */

.experience-description {
  margin-bottom: 20px;

  color: var(--text-secondary);

  font-size: 15px;

  line-height: 1.8;
}


/* ========================================
   TAGS
======================================== */

.experience-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;
}

.experience-tags span {
  padding: 6px 11px;

  border-radius: 6px;

  background: rgba(99, 102, 241, 0.1);

  color: var(--accent);

  font-size: 12px;

  font-weight: 600;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 768px) {

  .experience-section {
    padding: 80px 0;
  }

  .experience-header {
    flex-direction: column;
    gap: 12px;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .experience-timeline::before {
    left: 10px;
  }

  .experience-item {
    padding-left: 40px;
  }

  .experience-dot {
    left: 1px;

    width: 18px;
    height: 18px;

    border-width: 3px;
  }

  .experience-card {
    padding: 22px;
  }

  .experience-header h3 {
    font-size: 20px;
  }

  .experience-description {
    font-size: 14px;
  }

}
</style>