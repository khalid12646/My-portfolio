<template>
  <section id="skills" class="skills-section">
    <div class="container">

      <!-- Section Heading -->
      <div class="section-heading">
        <p>My Expertise</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <!-- Skills Grid -->
      <div class="skills-grid">

        <!-- HTML -->
       <div class="skill-card" v-reveal>
          <div class="skill-icon">🌐</div>

          <h3>HTML5</h3>

          <p>
            Semantic and accessible web page structure.
          </p>

          <div class="skill-bar">
            <span style="width: 90%"></span>
          </div>

          <div class="skill-percentage">
            90%
          </div>
        </div>


        <!-- CSS -->
     <div class="skill-card" v-reveal>
          <div class="skill-icon">🎨</div>

          <h3>CSS3</h3>

          <p>
            Responsive layouts, animations and modern styling.
          </p>

          <div class="skill-bar">
            <span style="width: 85%"></span>
          </div>

          <div class="skill-percentage">
            85%
          </div>
        </div>


        <!-- JavaScript -->
      <div class="skill-card" v-reveal>
          <div class="skill-icon">⚡</div>

          <h3>JavaScript</h3>

          <p>
            Interactive and dynamic web applications.
          </p>

          <div class="skill-bar">
            <span style="width: 80%"></span>
          </div>

          <div class="skill-percentage">
            80%
          </div>
        </div>


        <!-- Vue -->
       <div class="skill-card" v-reveal>
          <div class="skill-icon">💚</div>

          <h3>Vue.js</h3>

          <p>
            Modern component-based frontend applications.
          </p>

          <div class="skill-bar">
            <span style="width: 85%"></span>
          </div>

          <div class="skill-percentage">
            85%
          </div>
        </div>


        <!-- Bootstrap -->
        <div class="skill-card" v-reveal>
          <div class="skill-icon">🅱️</div>

          <h3>Bootstrap</h3>

          <p>
            Responsive UI components and grid systems.
          </p>

          <div class="skill-bar">
            <span style="width: 85%"></span>
          </div>

          <div class="skill-percentage">
            85%
          </div>
        </div>


        <!-- Tailwind -->
      <div class="skill-card" v-reveal>
          <div class="skill-icon">🌊</div>

          <h3>Tailwind CSS</h3>

          <p>
            Utility-first responsive interface development.
          </p>

          <div class="skill-bar">
            <span style="width: 80%"></span>
          </div>

          <div class="skill-percentage">
            80%
          </div>
        </div>


        <!-- Git -->
      <div class="skill-card" v-reveal>
          <div class="skill-icon">🔀</div>

          <h3>Git</h3>

          <p>
            Version control and collaborative development.
          </p>

          <div class="skill-bar">
            <span style="width: 80%"></span>
          </div>

          <div class="skill-percentage">
            80%
          </div>
        </div>


        <!-- GitHub -->
      <div class="skill-card" v-reveal>
          <div class="skill-icon">🐙</div>

          <h3>GitHub</h3>

          <p>
            Code hosting, branches, pull requests and collaboration.
          </p>

          <div class="skill-bar">
            <span style="width: 80%"></span>
          </div>

          <div class="skill-percentage">
            80%
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
<style scoped>
/* ========================================
   SKILLS SECTION
======================================== */

.skills-section {
  padding: 120px 0;
  background: var(--bg-primary);
}


/* ========================================
   SKILLS GRID
======================================== */

.skills-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 25px;
}


/* ========================================
   SKILL CARD
======================================== */

.skill-card {
  padding: 30px 25px;

  background: var(--bg-secondary);

  border: 1px solid var(--border);

  border-radius: 15px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px);

  border-color: var(--accent);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}


/* ========================================
   SKILL ICON
======================================== */

.skill-icon {
  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 12px;

  background: rgba(99, 102, 241, 0.12);

  font-size: 25px;
}


/* ========================================
   SKILL TITLE
======================================== */

.skill-card h3 {
  margin-bottom: 12px;

  color: var(--text-primary);

  font-size: 20px;
}


/* ========================================
   SKILL DESCRIPTION
======================================== */

.skill-card p {
  min-height: 48px;

  margin-bottom: 20px;

  color: var(--text-secondary);

  font-size: 14px;

  line-height: 1.6;
}


/* ========================================
   SKILL BAR
======================================== */

.skill-bar {
  width: 100%;
  height: 7px;

  overflow: hidden;

  border-radius: 10px;

  background: rgba(128, 128, 128, 0.15);
}

.skill-bar span {
  display: block;

  height: 100%;

  border-radius: inherit;

  background: var(--accent);

  transform-origin: left;

  animation: skillProgress 1.2s ease forwards;
}


/* ========================================
   PERCENTAGE
======================================== */

.skill-percentage {
  margin-top: 10px;

  text-align: right;

  color: var(--accent);

  font-size: 13px;

  font-weight: 600;
}


/* ========================================
   SKILL ANIMATION
======================================== */

@keyframes skillProgress {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1100px) {

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .skills-section {
    padding: 80px 0;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    padding: 25px 20px;
  }

}
</style>