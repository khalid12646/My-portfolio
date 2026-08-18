<template>
  <section id="education" class="education-section">
    <div class="container">

      <!-- Section Heading -->
      <div class="section-heading">
        <p>My Academic Journey</p>
        <h2>My <span>Education</span></h2>
      </div>

      <!-- Education Content -->
      <div class="education-grid">

        <!-- Education 1 -->
       <article class="education-card" v-reveal="0">

          <div class="education-icon">
            🎓
          </div>

          <div class="education-content">

            <span class="education-year">
              2022 - Present
            </span>

            <h3>Bachelor's Degree</h3>

            <h4>University of Lahore</h4>

            <p>
              Studying computer science and developing a strong
              foundation in programming, software development and
              modern web technologies.
            </p>

            <div class="education-tags">
              <span>Computer Science</span>
              <span>Programming</span>
              <span>Web Development</span>
            </div>

          </div>

        </article>


        <!-- Education 2 -->
     <article class="education-card" v-reveal="0.15">

          <div class="education-icon">
            📚
          </div>

          <div class="education-content">

            <span class="education-year">
              Previous
            </span>

            <h3>Intermediate</h3>

            <h4>Higher Secondary Education</h4>

            <p>
              Completed intermediate education with a focus on
              building analytical, technical and problem-solving
              skills.
            </p>

          </div>

        </article>


        <!-- Education 3 -->
      <article class="education-card" v-reveal="0.3">

          <div class="education-icon">
            💻
          </div>

          <div class="education-content">

            <span class="education-year">
              Professional Learning
            </span>

            <h3>Frontend Development</h3>

            <h4>Practical Training</h4>

            <p>
              Hands-on learning and professional experience with
              Vue.js, JavaScript, Bootstrap, Tailwind CSS, Git
              and GitHub.
            </p>

            <div class="education-tags">
              <span>Vue.js</span>
              <span>JavaScript</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>
<style scoped>
/* ========================================
   EDUCATION SECTION
======================================== */

.education-section {
  padding: 120px 0;
  background: var(--bg-primary);
}


/* ========================================
   EDUCATION GRID
======================================== */

.education-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 25px;
}


/* ========================================
   EDUCATION CARD
======================================== */

.education-card {
  position: relative;

  padding: 30px;

  background: var(--bg-secondary);

  border: 1px solid var(--border);

  border-radius: 16px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-8px);

  border-color: var(--accent);

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}


/* ========================================
   EDUCATION ICON
======================================== */

.education-icon {
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;

  border-radius: 14px;

  background: rgba(99, 102, 241, 0.12);

  font-size: 28px;

  transition: transform 0.3s ease;
}

.education-card:hover .education-icon {
  transform: scale(1.08) rotate(-4deg);
}


/* ========================================
   YEAR
======================================== */

.education-year {
  display: inline-block;

  margin-bottom: 12px;

  padding: 6px 11px;

  border-radius: 20px;

  background: rgba(99, 102, 241, 0.1);

  color: var(--accent);

  font-size: 12px;

  font-weight: 600;
}


/* ========================================
   TITLE
======================================== */

.education-content h3 {
  margin-bottom: 8px;

  color: var(--text-primary);

  font-size: 22px;
}


/* ========================================
   INSTITUTE
======================================== */

.education-content h4 {
  margin-bottom: 18px;

  color: var(--accent);

  font-size: 15px;

  font-weight: 600;
}


/* ========================================
   DESCRIPTION
======================================== */

.education-content p {
  margin-bottom: 20px;

  color: var(--text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


/* ========================================
   TAGS
======================================== */

.education-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;
}

.education-tags span {
  padding: 6px 10px;

  border-radius: 6px;

  background: var(--bg-primary);

  border: 1px solid var(--border);

  color: var(--text-secondary);

  font-size: 11px;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1000px) {

  .education-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 650px) {

  .education-section {
    padding: 80px 0;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .education-card {
    padding: 25px;
  }

}
</style>