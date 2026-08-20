<template>
  <section id="contact" class="contact-section">
    <!-- Animated Background -->
    <div class="contact-bg">
      <div class="glow glow-one"></div>
      <div class="glow glow-two"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container">

      <!-- Section Heading -->
      <div class="section-heading" v-reveal>
        <span class="section-label">
          <span class="label-dot"></span>
          GET IN TOUCH
        </span>

        <h2>
          Let's Build Something
          <span>Amazing</span>
        </h2>

        <p>
          Have a project, opportunity, or idea in mind?
          Let's connect and turn it into something meaningful.
        </p>
      </div>

      <!-- Main Contact Layout -->
      <div class="contact-wrapper">

        <!-- Left Content -->
        <div class="contact-content" v-reveal>

          <div class="contact-intro">
            <span class="intro-number">01</span>

            <div>
              <h3>Let's work together</h3>

              <p>
                I'm always interested in exciting projects,
                frontend development opportunities, and
                innovative digital experiences.
              </p>
            </div>
          </div>

          <!-- Contact Cards -->
          <div class="contact-cards">

            <!-- Email -->
            <a
              href="mailto:khalidalvi477@gmail.com"
              class="contact-card"
            >
              <div class="card-icon email-icon">
                ✉
              </div>

              <div class="card-content">
                <span>Email</span>
                <strong>khalidalvi477@gmail.com</strong>
              </div>

              <span class="card-arrow">↗</span>
            </a>

            <!-- WhatsApp -->
            <a
              href="https://wa.me/923341438022"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-card"
            >
              <div class="card-icon whatsapp-icon">
                ☎
              </div>

              <div class="card-content">
                <span>WhatsApp</span>
                <strong>0334 1438022</strong>
              </div>

              <span class="card-arrow">↗</span>
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-card"
            >
              <div class="card-icon github-icon">
                GH
              </div>

              <div class="card-content">
                <span>GitHub</span>
                <strong>View my repositories</strong>
              </div>

              <span class="card-arrow">↗</span>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-card"
            >
              <div class="card-icon linkedin-icon">
                in
              </div>

              <div class="card-content">
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </div>

              <span class="card-arrow">↗</span>
            </a>

          </div>
        </div>

        <!-- Right Side -->
        <div class="contact-visual" v-reveal>

          <div class="visual-card">

            <!-- Decorative Number -->
            <div class="visual-number">
              02
            </div>

            <!-- Orb -->
            <div class="orb-wrapper">
              <div class="orb">
                <div class="orb-inner">
                  <span>&lt;/&gt;</span>
                </div>
              </div>

              <div class="orb-ring ring-one"></div>
              <div class="orb-ring ring-two"></div>
            </div>

            <div class="visual-content">
              <span class="available-badge">
                <span></span>
                AVAILABLE FOR WORK
              </span>

              <h3>
                Have an idea?
              </h3>

              <p>
                Let's transform your idea into a
                modern, scalable and memorable
                digital experience.
              </p>

              <a
                href="mailto:khalidalvi477@gmail.com"
                class="start-button"
              >
                <span>Start a conversation</span>
                <span class="button-arrow">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      <!-- Bottom CTA -->
      <div class="bottom-cta" v-reveal>

        <div class="cta-line"></div>

        <div class="cta-content">
          <span>READY TO CREATE?</span>

          <h3>
            Let's make your next project
            <em>stand out.</em>
          </h3>
        </div>

        <a
          href="mailto:khalidalvi477@gmail.com"
          class="cta-button"
        >
          Contact Me
          <span>↗</span>
        </a>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* =========================================================
   SECTION
========================================================= */

.contact-section {
  position: relative;
  overflow: hidden;
  padding: 120px 0;
  background: #05070b;
  color: #ffffff;
}

/* =========================================================
   BACKGROUND
========================================================= */

.contact-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.grid-overlay {
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

  mask-image: linear-gradient(
    to bottom,
    black,
    transparent 90%
  );
}

.glow {
  position: absolute;
  width: 450px;
  height: 450px;

  border-radius: 50%;

  filter: blur(120px);

  opacity: 0.15;
}

.glow-one {
  top: -150px;
  left: -150px;
  background: #6366f1;
}

.glow-two {
  right: -150px;
  bottom: -150px;
  background: #06b6d4;
}

/* =========================================================
   CONTAINER
========================================================= */

.container {
  position: relative;
  z-index: 2;

  width: min(1180px, calc(100% - 40px));

  margin: 0 auto;
}

/* =========================================================
   HEADING
========================================================= */

.section-heading {
  max-width: 720px;
  margin-bottom: 70px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 18px;

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.2em;

  color: #8b93a7;
}

.label-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #6366f1;

  box-shadow:
    0 0 15px rgba(99, 102, 241, 0.8);
}

.section-heading h2 {
  margin: 0;

  font-size: clamp(42px, 6vw, 76px);

  line-height: 0.98;

  letter-spacing: -0.055em;

  font-weight: 700;
}

.section-heading h2 span {
  display: block;

  background: linear-gradient(
    100deg,
    #818cf8,
    #22d3ee
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-heading p {
  max-width: 600px;

  margin-top: 25px;

  color: #8c94a7;

  font-size: 16px;

  line-height: 1.8;
}

/* =========================================================
   MAIN WRAPPER
========================================================= */

.contact-wrapper {
  display: grid;

  grid-template-columns:
    minmax(0, 1.1fr)
    minmax(350px, 0.9fr);

  gap: 70px;

  align-items: stretch;
}

/* =========================================================
   INTRO
========================================================= */

.contact-intro {
  display: flex;

  gap: 20px;

  margin-bottom: 30px;
}

.intro-number {
  font-size: 12px;

  color: #6366f1;

  font-weight: 700;

  padding-top: 5px;
}

.contact-intro h3 {
  margin: 0 0 10px;

  font-size: 24px;

  letter-spacing: -0.02em;
}

.contact-intro p {
  max-width: 570px;

  margin: 0;

  color: #858da0;

  line-height: 1.7;

  font-size: 14px;
}

/* =========================================================
   CONTACT CARDS
========================================================= */

.contact-cards {
  display: flex;

  flex-direction: column;

  gap: 12px;
}

.contact-card {
  position: relative;

  display: flex;

  align-items: center;

  gap: 15px;

  padding: 17px;

  text-decoration: none;

  color: white;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 15px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.015)
    );

  backdrop-filter: blur(15px);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.contact-card:hover {
  transform: translateX(8px);

  border-color:
    rgba(129, 140, 248, 0.35);

  background:
    linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.12),
      rgba(255, 255, 255, 0.025)
    );

  box-shadow:
    0 15px 40px
    rgba(0, 0, 0, 0.2);
}

.card-icon {
  width: 45px;
  height: 45px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  font-size: 15px;

  font-weight: 700;

  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(255, 255, 255, 0.07);
}

.email-icon {
  color: #a5b4fc;
}

.whatsapp-icon {
  color: #4ade80;
}

.github-icon {
  color: #ffffff;
  font-size: 11px;
}

.linkedin-icon {
  color: #60a5fa;
  font-size: 18px;
}

.card-content {
  display: flex;

  flex-direction: column;

  gap: 4px;

  min-width: 0;
}

.card-content span {
  font-size: 10px;

  text-transform: uppercase;

  letter-spacing: 0.15em;

  color: #737b8e;
}

.card-content strong {
  font-size: 14px;

  font-weight: 500;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
}

.card-arrow {
  margin-left: auto;

  color: #697184;

  font-size: 18px;

  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.contact-card:hover .card-arrow {
  transform: translate(3px, -3px);

  color: #a5b4fc;
}

/* =========================================================
   VISUAL CARD
========================================================= */

.contact-visual {
  min-height: 500px;
}

.visual-card {
  position: relative;

  height: 100%;

  min-height: 500px;

  overflow: hidden;

  display: flex;

  align-items: flex-end;

  padding: 38px;

  border-radius: 25px;

  border: 1px solid
    rgba(255, 255, 255, 0.08);

  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(99, 102, 241, 0.15),
      transparent 45%
    ),
    linear-gradient(
      145deg,
      #0d111b,
      #07090e
    );

  box-shadow:
    inset 0 1px 0
    rgba(255, 255, 255, 0.04),
    0 30px 80px
    rgba(0, 0, 0, 0.3);
}

.visual-number {
  position: absolute;

  top: 25px;
  right: 30px;

  font-size: 11px;

  color: #555d70;

  letter-spacing: 0.15em;
}

/* =========================================================
   ORB
========================================================= */

.orb-wrapper {
  position: absolute;

  top: 50px;
  left: 50%;

  width: 230px;
  height: 230px;

  transform: translateX(-50%);
}

.orb {
  position: absolute;

  inset: 35px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at 35% 30%,
      #818cf8,
      #312e81 45%,
      #0f172a 75%
    );

  box-shadow:
    0 0 60px
    rgba(99, 102, 241, 0.4),
    inset -15px -15px 35px
    rgba(0, 0, 0, 0.45);

  animation: floatOrb 5s ease-in-out infinite;
}

.orb-inner {
  width: 85px;
  height: 85px;

  border-radius: 50%;

  display: flex;

  align-items: center;
  justify-content: center;

  background:
    rgba(5, 7, 11, 0.6);

  border: 1px solid
    rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(10px);

  box-shadow:
    inset 0 0 20px
    rgba(255, 255, 255, 0.05);
}

.orb-inner span {
  font-size: 25px;

  color: #ffffff;

  font-weight: 600;
}

.orb-ring {
  position: absolute;

  inset: 15px;

  border: 1px solid
    rgba(129, 140, 248, 0.22);

  border-radius: 50%;

  animation: rotateRing 12s linear infinite;
}

.ring-two {
  inset: 2px;

  border-style: dashed;

  opacity: 0.5;

  animation-direction: reverse;

  animation-duration: 18s;
}

@keyframes floatOrb {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

@keyframes rotateRing {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

/* =========================================================
   VISUAL CONTENT
========================================================= */

.visual-content {
  position: relative;

  z-index: 2;

  max-width: 360px;
}

.available-badge {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 18px;

  font-size: 9px;

  letter-spacing: 0.15em;

  color: #8b93a7;
}

.available-badge span {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 10px
    rgba(34, 197, 94, 0.7);
}

.visual-content h3 {
  margin: 0 0 12px;

  font-size: 32px;

  letter-spacing: -0.04em;
}

.visual-content p {
  margin: 0 0 25px;

  color: #858da0;

  line-height: 1.7;

  font-size: 14px;
}

/* =========================================================
   START BUTTON
========================================================= */

.start-button {
  display: inline-flex;

  align-items: center;

  gap: 18px;

  padding: 12px 14px 12px 18px;

  border-radius: 10px;

  background: white;

  color: #080a0f;

  text-decoration: none;

  font-size: 13px;

  font-weight: 600;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.start-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 12px 30px
    rgba(255, 255, 255, 0.12);
}

.button-arrow {
  width: 28px;
  height: 28px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 7px;

  background: #111827;

  color: white;

  font-size: 16px;
}

/* =========================================================
   BOTTOM CTA
========================================================= */

.bottom-cta {
  margin-top: 100px;

  padding-top: 35px;

  border-top: 1px solid
    rgba(255, 255, 255, 0.08);

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;
}

.cta-content > span {
  font-size: 10px;

  letter-spacing: 0.18em;

  color: #6f7789;
}

.cta-content h3 {
  margin: 8px 0 0;

  font-size: clamp(20px, 3vw, 30px);

  letter-spacing: -0.03em;
}

.cta-content em {
  font-style: normal;

  color: #818cf8;
}

.cta-button {
  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 18px;

  padding: 13px 16px 13px 20px;

  border-radius: 10px;

  background: #ffffff;

  color: #080a0f;

  text-decoration: none;

  font-size: 13px;

  font-weight: 600;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.cta-button span {
  font-size: 17px;
}

.cta-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 15px 35px
    rgba(255, 255, 255, 0.1);
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 900px) {
  .contact-wrapper {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .contact-visual {
    min-height: 450px;
  }

  .visual-card {
    min-height: 450px;
  }
}

@media (max-width: 600px) {
  .contact-section {
    padding: 80px 0;
  }

  .container {
    width: min(100% - 30px, 1180px);
  }

  .section-heading {
    margin-bottom: 45px;
  }

  .section-heading h2 {
    font-size: 43px;
  }

  .contact-intro {
    gap: 12px;
  }

  .contact-intro h3 {
    font-size: 21px;
  }

  .contact-card {
    padding: 13px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
  }

  .card-content strong {
    font-size: 12px;
  }

  .visual-card {
    padding: 25px;
    min-height: 450px;
  }

  .orb-wrapper {
    transform: translateX(-50%) scale(0.85);
  }

  .visual-content h3 {
    font-size: 28px;
  }

  .bottom-cta {
    flex-direction: column;

    align-items: flex-start;

    margin-top: 70px;
  }

  .cta-button {
    width: 100%;

    justify-content: space-between;
  }
}
</style>