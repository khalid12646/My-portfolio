<template>
  <footer class="footer">

    <!-- ==========================================
         TOP GLOW
    =========================================== -->
    <div class="footer-glow"></div>

    <div class="footer-container">

      <!-- ========================================
           CTA
      ========================================= -->
      <div class="footer-cta">

        <div class="cta-content">
          <span class="eyebrow">
            LET'S BUILD SOMETHING
          </span>

          <h2>
            Have an idea?
            <span>Let's make it real.</span>
          </h2>

          <p>
            I'm always open to discussing new projects,
            creative ideas and opportunities to build
            meaningful digital experiences.
          </p>
        </div>

        <a
          href="#contact"
          class="cta-button"
        >
          <span>Start a conversation</span>
          <span class="cta-arrow">↗</span>
        </a>

      </div>


      <!-- ========================================
           DIVIDER
      ========================================= -->
      <div class="footer-divider"></div>


      <!-- ========================================
           MAIN FOOTER
      ========================================= -->
      <div class="footer-main">

        <!-- BRAND -->
        <div class="footer-brand">

          <a
            href="#home"
            class="brand"
          >
            <span class="brand-mark">
              K
            </span>

            <span class="brand-name">
              Khalid<span>.</span>
            </span>
          </a>

          <p>
            Frontend Developer focused on creating
            modern, scalable and high-performance
            digital experiences.
          </p>

          <!-- Availability -->
          <div class="availability">

            <span class="availability-dot"></span>

            <span>
              Available for opportunities
            </span>

          </div>

        </div>


        <!-- NAVIGATION -->
        <div class="footer-column">

          <h3>
            Explore
          </h3>

          <a
            v-for="item in navigation"
            :key="item.id"
            :href="`#${item.id}`"
          >
            {{ item.label }}
            <span>↗</span>
          </a>

        </div>


        <!-- SERVICES -->
        <div class="footer-column">

          <h3>
            Expertise
          </h3>

          <a href="#services">
            Frontend Development
          </a>

          <a href="#services">
            Vue.js Development
          </a>

          <a href="#services">
            UI / UX Implementation
          </a>

          <a href="#services">
            AI Integration
          </a>

          <a href="#services">
            Responsive Web Apps
          </a>

        </div>


        <!-- CONNECT -->
        <div class="footer-column connect-column">

          <h3>
            Connect
          </h3>

          <a
            href="mailto:khalidalvi477@gmail.com"
            class="contact-link"
          >
            <span class="contact-icon">
              @
            </span>

            <span>
              khalidalvi477@gmail.com
            </span>
          </a>


          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <span class="contact-icon">
              GH
            </span>

            <span>
              GitHub
            </span>

            <span class="external">
              ↗
            </span>
          </a>


          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <span class="contact-icon">
              in
            </span>

            <span>
              LinkedIn
            </span>

            <span class="external">
              ↗
            </span>
          </a>


          <a
            href="https://wa.me/923341438022"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <span class="contact-icon">
              WA
            </span>

            <span>
              WhatsApp
            </span>

            <span class="external">
              ↗
            </span>
          </a>

        </div>

      </div>


      <!-- ========================================
           BOTTOM DIVIDER
      ========================================= -->
      <div class="footer-divider"></div>


      <!-- ========================================
           BOTTOM BAR
      ========================================= -->
      <div class="footer-bottom">

        <p>
          © {{ currentYear }}
          <strong>Khalid Alvi</strong>.
          All rights reserved.
        </p>

        <div class="footer-meta">

          <span>
            Designed & built with
            <b>Vue.js</b>
          </span>

          <span class="meta-dot"></span>

          <span>
            Pakistan
          </span>

        </div>

      </div>

    </div>

  </footer>
</template>


<script setup>
import { computed } from "vue";


/* ==========================================
   YEAR
========================================== */

const currentYear = computed(() => {
  return new Date().getFullYear();
});


/* ==========================================
   NAVIGATION
========================================== */

const navigation = [
  {
    id: "home",
    label: "Home"
  },
  {
    id: "about",
    label: "About"
  },
  {
    id: "skills",
    label: "Skills"
  },
  {
    id: "projects",
    label: "Projects"
  },
  {
    id: "services",
    label: "Services"
  },
  {
    id: "education",
    label: "Education"
  },
  {
    id: "contact",
    label: "Contact"
  }
];
</script>


<style scoped>

/* =========================================================
   FOOTER
========================================================= */

.footer {

  position: relative;

  overflow: hidden;

  padding:
    110px 0 30px;

  background:

    radial-gradient(
      circle at 15% 10%,
      rgba(99,102,241,0.08),
      transparent 30%
    ),

    radial-gradient(
      circle at 85% 50%,
      rgba(6,182,212,0.06),
      transparent 30%
    ),

    #05070b;

  color: #ffffff;
}


/* =========================================================
   GLOW
========================================================= */

.footer-glow {

  position: absolute;

  top: -150px;

  left: 50%;

  width: 500px;

  height: 300px;

  transform:
    translateX(-50%);

  border-radius: 50%;

  background:
    linear-gradient(
      90deg,
      rgba(99,102,241,0.10),
      rgba(6,182,212,0.08)
    );

  filter:
    blur(90px);

  pointer-events: none;
}


/* =========================================================
   CONTAINER
========================================================= */

.footer-container {

  position: relative;

  width:
    min(
      calc(100% - 40px),
      1200px
    );

  margin: auto;
}


/* =========================================================
   CTA
========================================================= */

.footer-cta {

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 50px;

  padding-bottom: 70px;
}


.eyebrow {

  display: inline-block;

  margin-bottom: 18px;

  color: #818cf8;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.22em;
}


.cta-content h2 {

  max-width: 650px;

  margin: 0;

  color: #ffffff;

  font-size:
    clamp(
      36px,
      5vw,
      64px
    );

  line-height: 1.05;

  letter-spacing: -0.055em;

  font-weight: 700;
}


.cta-content h2 span {

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


.cta-content p {

  max-width: 600px;

  margin:
    24px 0 0;

  color: #7b8496;

  font-size: 14px;

  line-height: 1.8;
}


/* =========================================================
   CTA BUTTON
========================================================= */

.cta-button {

  position: relative;

  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 16px;

  padding:
    15px 18px 15px 22px;

  border:
    1px solid
    rgba(129,140,248,0.25);

  border-radius: 999px;

  background:
    linear-gradient(
      110deg,
      rgba(99,102,241,0.15),
      rgba(6,182,212,0.10)
    );

  color: #ffffff;

  font-size: 13px;

  font-weight: 600;

  text-decoration: none;

  backdrop-filter:
    blur(15px);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


.cta-button:hover {

  transform:
    translateY(-5px);

  border-color:
    rgba(129,140,248,0.55);

  box-shadow:
    0 15px 45px
    rgba(99,102,241,0.16);
}


.cta-arrow {

  width: 32px;

  height: 32px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #06b6d4
    );

  font-size: 15px;

  transition:
    transform 0.3s ease;
}


.cta-button:hover .cta-arrow {

  transform:
    rotate(45deg);
}


/* =========================================================
   DIVIDER
========================================================= */

.footer-divider {

  width: 100%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.09),
      transparent
    );
}


/* =========================================================
   MAIN
========================================================= */

.footer-main {

  display: grid;

  grid-template-columns:
    1.6fr
    1fr
    1.2fr
    1.3fr;

  gap: 50px;

  padding:
    65px 0;
}


/* =========================================================
   BRAND
========================================================= */

.footer-brand {

  max-width: 330px;
}


.brand {

  display: inline-flex;

  align-items: center;

  gap: 10px;

  text-decoration: none;
}


.brand-mark {

  width: 40px;

  height: 40px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #06b6d4
    );

  color: #ffffff;

  font-size: 17px;

  font-weight: 800;

  box-shadow:
    0 10px 30px
    rgba(99,102,241,0.18);

  transition:
    transform 0.3s ease;
}


.brand:hover .brand-mark {

  transform:
    rotate(-8deg)
    scale(1.05);
}


.brand-name {

  color: #ffffff;

  font-size: 21px;

  font-weight: 700;

  letter-spacing: -0.04em;
}


.brand-name span {

  color: #818cf8;
}


.footer-brand > p {

  margin:
    22px 0 24px;

  color: #737d90;

  font-size: 13px;

  line-height: 1.8;
}


/* =========================================================
   AVAILABILITY
========================================================= */

.availability {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding:
    8px 11px;

  border:
    1px solid
    rgba(34,211,238,0.12);

  border-radius: 999px;

  background:
    rgba(34,211,238,0.04);

  color: #8a94a6;

  font-size: 10px;

  font-weight: 500;
}


.availability-dot {

  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 0 4px
    rgba(34,197,94,0.10),

    0 0 12px
    rgba(34,197,94,0.4);

  animation:
    availability-pulse
    2s
    infinite;
}


@keyframes availability-pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.45;
  }
}


/* =========================================================
   COLUMNS
========================================================= */

.footer-column {

  display: flex;

  flex-direction: column;

  align-items: flex-start;
}


.footer-column h3 {

  margin:
    0 0 20px;

  color: #ffffff;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 0.05em;
}


.footer-column > a {

  position: relative;

  display: flex;

  align-items: center;

  gap: 8px;

  width: fit-content;

  margin-bottom: 12px;

  color: #717b8e;

  font-size: 12px;

  line-height: 1.5;

  text-decoration: none;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}


.footer-column > a:hover {

  color: #ffffff;

  transform:
    translateX(4px);
}


.footer-column > a span {

  color: #6366f1;

  opacity: 0;

  transform:
    translateX(-4px);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}


.footer-column > a:hover span {

  opacity: 1;

  transform:
    translateX(0);
}


/* =========================================================
   CONTACT
========================================================= */

.connect-column > .contact-link {

  width: 100%;

  max-width: 220px;

  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 13px;

  transform: none;
}


.contact-link:hover {

  transform:
    translateX(3px) !important;
}


.contact-icon {

  width: 30px;

  height: 30px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(255,255,255,0.08);

  border-radius: 9px;

  background:
    rgba(255,255,255,0.03);

  color: #9ba4b5;

  font-size: 9px;

  font-weight: 700;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}


.contact-link:hover .contact-icon {

  color: #ffffff;

  border-color:
    rgba(129,140,248,0.35);

  background:
    rgba(99,102,241,0.12);
}


.connect-column .contact-link > span:nth-child(2) {

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
}


.contact-link .external {

  margin-left: auto;

  color: #6366f1;

  opacity: 0;

  transform:
    translate(-5px, 5px);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}


.contact-link:hover .external {

  opacity: 1;

  transform:
    translate(0, 0);
}


/* =========================================================
   BOTTOM
========================================================= */

.footer-bottom {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  padding-top: 25px;
}


.footer-bottom p {

  margin: 0;

  color: #596274;

  font-size: 10px;
}


.footer-bottom strong {

  color: #8b94a5;

  font-weight: 600;
}


.footer-meta {

  display: flex;

  align-items: center;

  gap: 12px;

  color: #596274;

  font-size: 10px;
}


.footer-meta b {

  color: #818cf8;

  font-weight: 500;
}


.meta-dot {

  width: 3px;

  height: 3px;

  border-radius: 50%;

  background: #4b5563;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 950px) {

  .footer-main {

    grid-template-columns:
      1.5fr
      1fr
      1fr;

    gap: 40px;
  }


  .footer-brand {

    grid-column:
      1 / -1;

    max-width: 500px;
  }


  .footer-cta {

    align-items: flex-start;

    flex-direction: column;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .footer {

    padding:
      80px 0 25px;
  }


  .footer-container {

    width:
      calc(100% - 30px);
  }


  .footer-cta {

    padding-bottom: 50px;

    gap: 30px;
  }


  .cta-content h2 {

    font-size:
      clamp(
        34px,
        11vw,
        48px
      );
  }


  .cta-content p {

    font-size: 13px;

    line-height: 1.7;
  }


  .cta-button {

    width: 100%;

    justify-content: space-between;
  }


  .footer-main {

    grid-template-columns:
      1fr 1fr;

    gap:
      40px 25px;

    padding:
      50px 0;
  }


  .footer-brand {

    grid-column:
      1 / -1;
  }


  .connect-column {

    grid-column:
      1 / -1;
  }


  .footer-bottom {

    flex-direction: column;

    align-items: flex-start;

    gap: 12px;
  }


  .footer-meta {

    flex-wrap: wrap;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 400px) {

  .footer-main {

    grid-template-columns:
      1fr;
  }


  .footer-brand,
  .connect-column {

    grid-column:
      auto;
  }


  .footer-column {

    width: 100%;
  }


  .footer-bottom p,
  .footer-meta {

    font-size: 9px;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .availability-dot {

    animation: none;
  }


  .cta-button,
  .brand-mark,
  .footer-column > a,
  .contact-icon {

    transition: none;
  }

}

</style>