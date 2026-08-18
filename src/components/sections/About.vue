<template>
  <section id="about" class="about-section">
    <div class="container">

      <div class="section-heading">
        <p>Get To Know Me</p>
        <h2>About <span>Me</span></h2>
      </div>

     <div class="about-content" v-reveal>

        <!-- Left Side -->
        <div class="about-text">
          <h3>I'm a Frontend Developer.</h3>

          <p>
            I create modern, responsive and user-friendly websites
            with a focus on clean design and great user experience.
          </p>

          <p>
            I enjoy turning ideas and designs into interactive web
            experiences using modern frontend technologies.
          </p>

          <a href="#contact" class="btn-primary">
            Let's Talk
          </a>
        </div>

        <!-- Right Side -->
        <div class="about-info">

          <div class="info-card">
            <span class="info-icon">💻</span>
            <div>
              <h4>Frontend Development</h4>
              <p>Vue.js, JavaScript, HTML & CSS</p>
            </div>
          </div>

          <div class="info-card">
            <span class="info-icon">🎨</span>
            <div>
              <h4>UI & Responsive Design</h4>
              <p>Bootstrap, Tailwind CSS & modern layouts</p>
            </div>
          </div>

          <div class="info-card">
            <span class="info-icon">⚡</span>
            <div>
              <h4>Performance & UX</h4>
              <p>Fast, accessible and user-friendly interfaces</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
<style scoped>
/* ========================================
   ABOUT SECTION
======================================== */

.about-section {
  padding: 120px 0;
  background: var(--bg-secondary);
}


/* ========================================
   SECTION HEADING
======================================== */

.section-heading {
  text-align: center;
  margin-bottom: 70px;
}

.section-heading p {
  color: var(--accent);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}

.section-heading h2 {
  margin: 0;
  font-size: 48px;
  line-height: 1.2;
  color: var(--text-primary);
}

.section-heading h2 span {
  color: var(--accent);
}


/* ========================================
   ABOUT CONTENT
======================================== */

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;
}


/* ========================================
   ABOUT TEXT
======================================== */

.about-text h3 {
  margin-bottom: 25px;

  font-size: 32px;
  line-height: 1.3;

  color: var(--text-primary);
}

.about-text p {
  margin-bottom: 20px;

  color: var(--text-secondary);

  font-size: 17px;
  line-height: 1.8;
}

.about-text .btn-primary {
  display: inline-block;
  margin-top: 15px;
}


/* ========================================
   ABOUT INFO
======================================== */

.about-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}


/* ========================================
   INFO CARD
======================================== */

.info-card {
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 25px;

  background: var(--bg-primary);

  border: 1px solid var(--border);
  border-radius: 12px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateX(8px);

  border-color: var(--accent);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}


/* ========================================
   INFO ICON
======================================== */

.info-icon {
  width: 55px;
  height: 55px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: rgba(99, 102, 241, 0.12);

  font-size: 25px;
}


/* ========================================
   INFO CARD TEXT
======================================== */

.info-card h4 {
  margin: 0 0 7px;

  color: var(--text-primary);

  font-size: 17px;
}

.info-card p {
  margin: 0;

  color: var(--text-secondary);

  font-size: 14px;
  line-height: 1.5;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 992px) {

  .about-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .about-text {
    max-width: 750px;
    margin: 0 auto;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .about-section {
    padding: 80px 0;
  }

  .section-heading {
    margin-bottom: 50px;
  }

  .section-heading h2 {
    font-size: 38px;
  }

  .about-text {
    text-align: center;
  }

  .about-text h3 {
    font-size: 27px;
  }

  .about-text p {
    font-size: 16px;
  }

  .about-info {
    gap: 15px;
  }

  .info-card {
    padding: 20px;
  }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

  .section-heading h2 {
    font-size: 32px;
  }

  .about-text h3 {
    font-size: 24px;
  }

  .info-card {
    align-items: flex-start;
  }

  .info-icon {
    width: 48px;
    height: 48px;
    font-size: 21px;
  }

  .info-card h4 {
    font-size: 15px;
  }

  .info-card p {
    font-size: 13px;
  }

}
</style>