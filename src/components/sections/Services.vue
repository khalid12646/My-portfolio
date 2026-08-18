<template>
  <section id="services" class="services-section">
    <div class="container">

      <!-- Section Heading -->
      <div class="section-heading">
        <p>What I Do</p>
        <h2>My <span>Services</span></h2>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">

        <!-- Service 1 -->
      <article class="service-card" v-reveal="0">

          <div class="service-icon">
            💻
          </div>

          <h3>Web Development</h3>

          <p>
            Building modern, responsive and scalable websites
            with clean and maintainable frontend code.
          </p>

          <div class="service-number">
            01
          </div>

        </article>


        <!-- Service 2 -->
     <article class="service-card" v-reveal="0.1">

          <div class="service-icon">
            🎨
          </div>

          <h3>UI Development</h3>

          <p>
            Turning designs into clean, interactive and
            pixel-perfect user interfaces.
          </p>

          <div class="service-number">
            02
          </div>

        </article>


        <!-- Service 3 -->
         <article class="service-card" v-reveal="0.2">


          <div class="service-icon">
            📱
          </div>

          <h3>Responsive Design</h3>

          <p>
            Creating layouts that work smoothly across
            desktops, tablets and mobile devices.
          </p>

          <div class="service-number">
            03
          </div>

        </article>


        <!-- Service 4 -->
       <article class="service-card" v-reveal="0.3">


          <div class="service-icon">
            💚
          </div>

          <h3>Vue.js Development</h3>

          <p>
            Developing component-based web applications using
            Vue.js and modern frontend development practices.
          </p>

          <div class="service-number">
            04
          </div>

        </article>


        <!-- Service 5 -->
       <article class="service-card" v-reveal="0.4">


          <div class="service-icon">
            ⚡
          </div>

          <h3>Website Optimization</h3>

          <p>
            Improving frontend performance, usability and
            overall user experience.
          </p>

          <div class="service-number">
            05
          </div>

        </article>


        <!-- Service 6 -->
       <article class="service-card" v-reveal="0.5">


          <div class="service-icon">
            🔧
          </div>

          <h3>Website Maintenance</h3>

          <p>
            Fixing frontend issues, updating interfaces and
            maintaining existing web applications.
          </p>

          <div class="service-number">
            06
          </div>

        </article>

      </div>

    </div>
  </section>
</template>
<style scoped>
/* ========================================
   SERVICES SECTION
======================================== */

.services-section {
  padding: 120px 0;
  background: var(--bg-secondary);
}


/* ========================================
   SERVICES GRID
======================================== */

.services-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 25px;
}


/* ========================================
   SERVICE CARD
======================================== */

.service-card {
  position: relative;

  overflow: hidden;

  padding: 35px 30px;

  background: var(--bg-primary);

  border: 1px solid var(--border);

  border-radius: 16px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);

  border-color: var(--accent);

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}


/* ========================================
   SERVICE ICON
======================================== */

.service-icon {
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

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(-5deg);
}


/* ========================================
   SERVICE TITLE
======================================== */

.service-card h3 {
  margin-bottom: 15px;

  color: var(--text-primary);

  font-size: 21px;
}


/* ========================================
   SERVICE DESCRIPTION
======================================== */

.service-card p {
  max-width: 350px;

  margin: 0;

  color: var(--text-secondary);

  font-size: 15px;

  line-height: 1.8;
}


/* ========================================
   SERVICE NUMBER
======================================== */

.service-number {
  position: absolute;

  right: 25px;
  bottom: 20px;

  color: var(--accent);

  font-size: 50px;

  font-weight: 800;

  opacity: 0.06;

  line-height: 1;
}


/* ========================================
   HOVER NUMBER
======================================== */

.service-card:hover .service-number {
  opacity: 0.12;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1000px) {

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 650px) {

  .services-section {
    padding: 80px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 28px 25px;
  }

}
</style>