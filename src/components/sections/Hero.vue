<template>
  <section class="hero-section" id="hero">

    <!-- Ambient Background -->
    <div class="hero-background">
      <div class="gradient-orb orb-one"></div>
      <div class="gradient-orb orb-two"></div>
      <div class="gradient-orb orb-three"></div>

      <div class="grid-overlay"></div>

      <div class="glow-line line-one"></div>
      <div class="glow-line line-two"></div>
    </div>

    <div class="hero-container">

      <!-- LEFT CONTENT -->
      <div class="hero-content" v-reveal>

        <!-- Availability -->
        <div class="availability-badge">
          <span class="availability-dot"></span>

          <span>Available for opportunities</span>

          <span class="badge-arrow">↗</span>
        </div>

        <!-- Heading -->
        <h1 class="hero-title">
          Building
          <span class="gradient-text">
            digital experiences
          </span>
          that feel different.
        </h1>

        <!-- Description -->
        <p class="hero-description">
          I'm
          <strong>Khalid Alvi</strong>,
          a Frontend Developer focused on building
          high-performance, modern and intelligent
          web experiences with Vue.js, JavaScript,
          Tailwind CSS and AI-powered technologies.
        </p>

        <!-- CTA -->
        <div class="hero-actions">

          <a
            href="#projects"
            class="primary-button"
          >
            <span>Explore my work</span>
            <span class="button-icon">↗</span>
          </a>

          <a
            href="#contact"
            class="secondary-button"
          >
            <span class="play-icon">○</span>
            Let's connect
          </a>

        </div>

        <!-- Quick Info -->
        <div class="hero-meta">

          <div class="meta-item">
            <span class="meta-number">01</span>

            <div>
              <strong>Frontend</strong>
              <small>Development</small>
            </div>
          </div>

          <div class="meta-divider"></div>

          <div class="meta-item">
            <span class="meta-number">02</span>

            <div>
              <strong>AI Powered</strong>
              <small>Experiences</small>
            </div>
          </div>

          <div class="meta-divider"></div>

          <div class="meta-item">
            <span class="meta-number">03</span>

            <div>
              <strong>Modern UI</strong>
              <small>Architecture</small>
            </div>
          </div>

        </div>

      </div>


      <!-- RIGHT VISUAL -->
      <div
        class="hero-visual"
        v-reveal
        style="transition-delay: .2s"
      >

        <!-- Main Glass Card -->
        <div class="developer-card">

          <!-- Card Top -->
          <div class="developer-card-top">

            <div class="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span class="card-label">
              DEVELOPER.PORTFOLIO
            </span>

            <span class="card-status">
              ● LIVE
            </span>

          </div>


          <!-- Code Area -->
          <div class="code-area">

            <div class="code-line">
              <span class="line-number">01</span>

              <span>
                <span class="code-keyword">const</span>
                <span class="code-variable"> developer</span>
                <span class="code-symbol"> = </span>
                <span class="code-bracket">{</span>
              </span>
            </div>

            <div class="code-line indent">
              <span class="line-number">02</span>

              <span>
                <span class="code-property">name</span>
                <span class="code-symbol">:</span>
                <span class="code-string">
                  "Khalid Alvi"
                </span>
                <span class="code-symbol">,</span>
              </span>
            </div>

            <div class="code-line indent">
              <span class="line-number">03</span>

              <span>
                <span class="code-property">role</span>
                <span class="code-symbol">:</span>
                <span class="code-string">
                  "Frontend Developer"
                </span>
                <span class="code-symbol">,</span>
              </span>
            </div>

            <div class="code-line indent">
              <span class="line-number">04</span>

              <span>
                <span class="code-property">stack</span>
                <span class="code-symbol">:</span>
                <span class="code-bracket">[</span>
              </span>
            </div>

            <div class="code-line indent-more">
              <span class="line-number">05</span>

              <span>
                <span class="code-string">"Vue"</span>
                <span class="code-symbol">,</span>
                <span class="code-string">"JavaScript"</span>
              </span>
            </div>

            <div class="code-line indent-more">
              <span class="line-number">06</span>

              <span>
                <span class="code-string">"Tailwind"</span>
                <span class="code-symbol">,</span>
                <span class="code-string">"AI"</span>
              </span>
            </div>

            <div class="code-line indent">
              <span class="line-number">07</span>

              <span>
                <span class="code-bracket">]</span>
                <span class="code-symbol">,</span>
              </span>
            </div>

            <div class="code-line indent">
              <span class="line-number">08</span>

              <span>
                <span class="code-property">passion</span>
                <span class="code-symbol">:</span>
                <span class="code-string">
                  "Building great products"
                </span>
              </span>
            </div>

            <div class="code-line">
              <span class="line-number">09</span>

              <span class="code-bracket">}</span>
            </div>

          </div>


          <!-- Card Footer -->
          <div class="developer-card-footer">

            <div class="footer-tech">
              <span class="tech-icon">◈</span>
              Vue 3
            </div>

            <div class="footer-tech">
              <span class="tech-icon">◇</span>
              AI Ready
            </div>

            <div class="footer-tech">
              <span class="tech-icon">◆</span>
              UI/UX
            </div>

          </div>

        </div>


        <!-- Floating Experience Card -->
        <div class="floating-card experience-card">

          <div class="floating-icon">
            ✦
          </div>

          <div>
            <strong>Modern</strong>
            <span>Digital Experiences</span>
          </div>

        </div>


        <!-- Floating AI Card -->
        <div class="floating-card ai-card">

          <div class="ai-orbit">
            <span>✦</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>Powered Portfolio</span>
          </div>

        </div>


        <!-- Floating Status -->
        <div class="floating-status">

          <span class="status-pulse"></span>

          <span>Open to work</span>

        </div>

      </div>

    </div>


    <!-- Bottom Scroll Indicator -->
    <a
      href="#about"
      class="scroll-indicator"
      aria-label="Scroll to about"
    >
      <span>Scroll to explore</span>

      <span class="scroll-arrow">
        ↓
      </span>
    </a>

  </section>
</template>


<script setup>
/*
|--------------------------------------------------------------------------
| Hero
|--------------------------------------------------------------------------
|
| No external data required.
| Theme colors are inherited from global style.css variables.
|
*/
</script>


<style scoped>

/* =========================================================
   HERO
========================================================= */

.hero-section {
  position: relative;

  min-height: 100vh;

  display: flex;

  align-items: center;

  overflow: hidden;

  padding:
    150px
    0
    90px;

  background:
    var(--bg-primary);
}


/* =========================================================
   BACKGROUND
========================================================= */

.hero-background {
  position: absolute;

  inset: 0;

  overflow: hidden;

  pointer-events: none;
}

.gradient-orb {
  position: absolute;

  border-radius: 50%;

  filter: blur(90px);

  opacity: 0.35;

  animation:
    orb-float
    10s
    ease-in-out
    infinite;
}

.orb-one {
  width: 420px;
  height: 420px;

  top: -160px;
  left: -120px;

  background:
    var(--accent);

  opacity: 0.12;
}

.orb-two {
  width: 380px;
  height: 380px;

  right: -120px;
  top: 20%;

  background:
    var(--accent-secondary);

  opacity: 0.10;

  animation-delay: -3s;
}

.orb-three {
  width: 300px;
  height: 300px;

  bottom: -120px;
  left: 45%;

  background:
    #8b5cf6;

  opacity: 0.08;

  animation-delay: -6s;
}

@keyframes orb-float {

  0%,
  100% {
    transform:
      translate3d(0, 0, 0)
      scale(1);
  }

  50% {
    transform:
      translate3d(20px, -25px, 0)
      scale(1.05);
  }

}


/* =========================================================
   GRID
========================================================= */

.grid-overlay {
  position: absolute;

  inset: 0;

  opacity: 0.35;

  background-image:
    linear-gradient(
      var(--border) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      var(--border) 1px,
      transparent 1px
    );

  background-size:
    70px 70px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent 85%
    );
}


/* =========================================================
   GLOW LINES
========================================================= */

.glow-line {
  position: absolute;

  width: 1px;

  height: 220px;

  background:
    linear-gradient(
      to bottom,
      transparent,
      var(--accent),
      transparent
    );

  opacity: 0.2;

  transform: rotate(35deg);
}

.line-one {
  top: 15%;
  left: 18%;
}

.line-two {
  right: 20%;
  bottom: 12%;

  transform:
    rotate(-35deg);
}


/* =========================================================
   CONTAINER
========================================================= */

.hero-container {
  position: relative;

  z-index: 2;

  width:
    min(
      calc(100% - 40px),
      1200px
    );

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(420px, 0.95fr);

  align-items: center;

  gap: 80px;
}


/* =========================================================
   CONTENT
========================================================= */

.hero-content {
  max-width: 700px;
}


/* =========================================================
   AVAILABILITY
========================================================= */

.availability-badge {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding:
    7px
    11px
    7px
    9px;

  margin-bottom: 25px;

  border:
    1px solid
    var(--border);

  border-radius: 999px;

  background:
    color-mix(
      in srgb,
      var(--card-bg) 80%,
      transparent
    );

  color:
    var(--text-secondary);

  font-size: 11px;

  letter-spacing:
    0.03em;

  backdrop-filter:
    blur(12px);

  box-shadow:
    var(--shadow-sm);
}

.availability-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 0 4px
    rgba(34, 197, 94, 0.12);

  animation:
    availability-pulse
    2s
    infinite;
}

@keyframes availability-pulse {

  0%,
  100% {
    box-shadow:
      0 0 0 3px
      rgba(34, 197, 94, 0.10);
  }

  50% {
    box-shadow:
      0 0 0 7px
      rgba(34, 197, 94, 0.02);
  }

}

.badge-arrow {
  color:
    var(--accent);

  font-size: 14px;
}


/* =========================================================
   TITLE
========================================================= */

.hero-title {
  margin: 0;

  color:
    var(--text-primary);

  font-size:
    clamp(
      48px,
      6vw,
      78px
    );

  line-height:
    0.98;

  letter-spacing:
    -0.065em;

  font-weight: 800;

  max-width: 760px;
}

.gradient-text {
  display: inline;

  background:
    linear-gradient(
      110deg,
      var(--accent),
      var(--accent-secondary),
      #8b5cf6
    );

  background-size:
    200% auto;

  -webkit-background-clip:
    text;

  background-clip:
    text;

  -webkit-text-fill-color:
    transparent;

  animation:
    gradient-shift
    5s
    ease
    infinite;
}

@keyframes gradient-shift {

  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }

}


/* =========================================================
   DESCRIPTION
========================================================= */

.hero-description {
  max-width: 650px;

  margin:
    28px
    0
    0;

  color:
    var(--text-secondary);

  font-size: 16px;

  line-height: 1.8;
}

.hero-description strong {
  color:
    var(--text-primary);

  font-weight: 650;
}


/* =========================================================
   ACTIONS
========================================================= */

.hero-actions {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 35px;
}


/* =========================================================
   PRIMARY BUTTON
========================================================= */

.primary-button,
.secondary-button {
  min-height: 52px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding:
    0
    19px;

  border-radius: 14px;

  font-size: 13px;

  font-weight: 650;

  text-decoration: none;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.primary-button {
  position: relative;

  overflow: hidden;

  color: white;

  background:
    linear-gradient(
      110deg,
      var(--accent),
      var(--accent-secondary)
    );

  box-shadow:
    0 12px 35px
    color-mix(
      in srgb,
      var(--accent) 25%,
      transparent
    );
}

.primary-button::before {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      110deg,
      transparent,
      rgba(255,255,255,0.22),
      transparent
    );

  transform:
    translateX(-120%);

  transition:
    transform 0.6s ease;
}

.primary-button:hover::before {
  transform:
    translateX(120%);
}

.primary-button:hover {
  transform:
    translateY(-4px);

  box-shadow:
    0 18px 45px
    color-mix(
      in srgb,
      var(--accent) 35%,
      transparent
    );
}

.button-icon {
  font-size: 17px;

  transition:
    transform 0.3s ease;
}

.primary-button:hover
.button-icon {
  transform:
    translate(3px, -3px);
}


/* =========================================================
   SECONDARY BUTTON
========================================================= */

.secondary-button {
  border:
    1px solid
    var(--border-strong);

  background:
    var(--card-bg);

  color:
    var(--text-primary);

  backdrop-filter:
    blur(12px);
}

.secondary-button:hover {
  transform:
    translateY(-4px);

  border-color:
    color-mix(
      in srgb,
      var(--accent) 45%,
      var(--border)
    );

  box-shadow:
    var(--shadow-md);
}

.play-icon {
  width: 22px;
  height: 22px;

  display: flex;

  align-items: center;
  justify-content: center;

  border:
    1px solid
    var(--border-strong);

  border-radius: 50%;

  font-size: 10px;
}


/* =========================================================
   META
========================================================= */

.hero-meta {
  display: flex;

  align-items: center;

  gap: 20px;

  margin-top: 55px;
}

.meta-item {
  display: flex;

  align-items: center;

  gap: 10px;
}

.meta-number {
  color:
    var(--accent);

  font-family:
    monospace;

  font-size: 10px;

  opacity: 0.8;
}

.meta-item strong {
  display: block;

  color:
    var(--text-primary);

  font-size: 11px;

  font-weight: 650;
}

.meta-item small {
  display: block;

  margin-top: 2px;

  color:
    var(--text-muted);

  font-size: 9px;
}

.meta-divider {
  width: 1px;

  height: 28px;

  background:
    var(--border);
}


/* =========================================================
   HERO VISUAL
========================================================= */

.hero-visual {
  position: relative;

  min-height: 520px;

  display: flex;

  align-items: center;

  justify-content: center;
}


/* =========================================================
   DEVELOPER CARD
========================================================= */

.developer-card {
  position: relative;

  width: min(
    100%,
    500px
  );

  border:
    1px solid
    var(--border-strong);

  border-radius: 24px;

  overflow: hidden;

  background:
    color-mix(
      in srgb,
      var(--card-bg) 88%,
      transparent
    );

  backdrop-filter:
    blur(25px);

  box-shadow:
    var(--shadow-lg),
    0 0 80px
    color-mix(
      in srgb,
      var(--accent) 8%,
      transparent
    );

  transform:
    perspective(1200px)
    rotateY(-5deg)
    rotateX(3deg);

  transition:
    transform 0.6s ease,
    box-shadow 0.6s ease;

  animation:
    card-float
    6s
    ease-in-out
    infinite;
}

.developer-card:hover {
  transform:
    perspective(1200px)
    rotateY(0deg)
    rotateX(0deg)
    translateY(-8px);

  box-shadow:
    var(--shadow-lg),
    0 0 100px
    color-mix(
      in srgb,
      var(--accent) 14%,
      transparent
    );
}

@keyframes card-float {

  0%,
  100% {
    transform:
      perspective(1200px)
      rotateY(-5deg)
      rotateX(3deg)
      translateY(0);
  }

  50% {
    transform:
      perspective(1200px)
      rotateY(-3deg)
      rotateX(2deg)
      translateY(-10px);
  }

}


/* =========================================================
   CARD TOP
========================================================= */

.developer-card-top {
  height: 54px;

  display: flex;

  align-items: center;

  gap: 12px;

  padding:
    0
    18px;

  border-bottom:
    1px solid
    var(--border);
}

.window-dots {
  display: flex;

  gap: 5px;
}

.window-dots span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background:
    var(--border-strong);
}

.window-dots span:first-child {
  background: #fb7185;
}

.window-dots span:nth-child(2) {
  background: #fbbf24;
}

.window-dots span:last-child {
  background: #34d399;
}

.card-label {
  flex: 1;

  color:
    var(--text-muted);

  font-family:
    monospace;

  font-size: 9px;

  letter-spacing:
    0.08em;
}

.card-status {
  color: #34d399;

  font-family:
    monospace;

  font-size: 8px;
}


/* =========================================================
   CODE
========================================================= */

.code-area {
  padding:
    25px
    18px;

  font-family:
    "JetBrains Mono",
    "Fira Code",
    monospace;

  font-size: 11px;

  line-height: 2;
}

.code-line {
  display: grid;

  grid-template-columns: 28px 1fr;

  gap: 10px;

  min-height: 22px;
}

.code-line.indent {
  padding-left: 22px;
}

.code-line.indent-more {
  padding-left: 45px;
}

.line-number {
  color:
    var(--text-muted);

  opacity: 0.45;

  user-select: none;
}

.code-keyword {
  color:
    #c084fc;
}

.code-variable {
  color:
    #60a5fa;
}

.code-property {
  color:
    #22d3ee;
}

.code-string {
  color:
    #86efac;
}

.code-symbol,
.code-bracket {
  color:
    var(--text-secondary);
}


/* =========================================================
   CARD FOOTER
========================================================= */

.developer-card-footer {
  display: flex;

  align-items: center;

  gap: 8px;

  padding:
    12px 18px;

  border-top:
    1px solid
    var(--border);
}

.footer-tech {
  display: inline-flex;

  align-items: center;

  gap: 5px;

  padding:
    5px 8px;

  border:
    1px solid
    var(--border);

  border-radius: 7px;

  color:
    var(--text-muted);

  font-size: 8px;
}

.tech-icon {
  color:
    var(--accent);
}


/* =========================================================
   FLOATING CARDS
========================================================= */

.floating-card {
  position: absolute;

  display: flex;

  align-items: center;

  gap: 10px;

  padding:
    11px 13px;

  border:
    1px solid
    var(--border-strong);

  border-radius: 14px;

  background:
    color-mix(
      in srgb,
      var(--card-bg) 88%,
      transparent
    );

  backdrop-filter:
    blur(18px);

  box-shadow:
    var(--shadow-md);

  z-index: 5;
}

.floating-card strong {
  display: block;

  color:
    var(--text-primary);

  font-size: 11px;
}

.floating-card span:not(.floating-icon):not(.ai-orbit) {
  display: block;

  margin-top: 2px;

  color:
    var(--text-muted);

  font-size: 8px;
}

.experience-card {
  top: 8%;

  left: -15px;

  animation:
    floating-one
    5s
    ease-in-out
    infinite;
}

.ai-card {
  right: -10px;

  bottom: 12%;

  animation:
    floating-two
    5.5s
    ease-in-out
    infinite;
}

@keyframes floating-one {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-12px);
  }

}

@keyframes floating-two {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(10px);
  }

}

.floating-icon {
  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 9px;

  background:
    color-mix(
      in srgb,
      var(--accent) 15%,
      transparent
    );

  color:
    var(--accent);

  font-size: 14px;
}

.ai-orbit {
  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;
  justify-content: center;

  border:
    1px solid
    color-mix(
      in srgb,
      var(--accent-secondary) 40%,
      var(--border)
    );

  border-radius: 50%;

  color:
    var(--accent-secondary);

  animation:
    ai-spin
    4s
    linear
    infinite;
}

@keyframes ai-spin {
  to {
    transform:
      rotate(360deg);
  }
}


/* =========================================================
   STATUS
========================================================= */

.floating-status {
  position: absolute;

  bottom: 4%;

  left: 8%;

  display: flex;

  align-items: center;

  gap: 7px;

  padding:
    7px 10px;

  border:
    1px solid
    var(--border);

  border-radius: 999px;

  background:
    color-mix(
      in srgb,
      var(--card-bg) 90%,
      transparent
    );

  color:
    var(--text-muted);

  font-size: 8px;

  backdrop-filter:
    blur(12px);
}

.status-pulse {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 0 4px
    rgba(34, 197, 94, 0.10);
}


/* =========================================================
   SCROLL INDICATOR
========================================================= */

.scroll-indicator {
  position: absolute;

  left: 50%;

  bottom: 25px;

  z-index: 3;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 7px;

  color:
    var(--text-muted);

  font-size: 9px;

  text-decoration: none;

  letter-spacing:
    0.08em;

  text-transform: uppercase;

  transform:
    translateX(-50%);

  transition:
    color 0.25s ease;
}

.scroll-indicator:hover {
  color:
    var(--text-primary);
}

.scroll-arrow {
  font-size: 16px;

  animation:
    scroll-bounce
    1.8s
    ease-in-out
    infinite;
}

@keyframes scroll-bounce {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(6px);
  }

}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1050px) {

  .hero-container {
    grid-template-columns:
      1fr;

    gap: 60px;

    text-align: center;
  }

  .hero-content {
    margin: 0 auto;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-meta {
    justify-content: center;
  }

  .hero-visual {
    min-height: 480px;
  }

}


@media (max-width: 600px) {

  .hero-section {
    min-height: auto;

    padding:
      130px
      0
      100px;
  }

  .hero-container {
    width:
      calc(100% - 30px);

    gap: 45px;
  }

  .availability-badge {
    margin-bottom: 20px;
  }

  .hero-title {
    font-size:
      clamp(
        42px,
        13vw,
        58px
      );
  }

  .hero-description {
    font-size: 14px;

    line-height: 1.7;
  }

  .hero-actions {
    flex-direction: column;

    width: 100%;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .hero-meta {
    flex-wrap: wrap;

    gap: 14px;

    margin-top: 40px;
  }

  .meta-divider {
    display: none;
  }

  .hero-visual {
    min-height: 390px;
  }

  .developer-card {
    width: 100%;

    border-radius: 18px;

    transform: none;

    animation: none;
  }

  .developer-card:hover {
    transform:
      translateY(-5px);
  }

  .code-area {
    padding:
      18px 10px;

    font-size: 8px;
  }

  .code-line {
    grid-template-columns:
      20px 1fr;

    gap: 5px;
  }

  .code-line.indent {
    padding-left: 10px;
  }

  .code-line.indent-more {
    padding-left: 22px;
  }

  .developer-card-footer {
    overflow-x: auto;
  }

  .experience-card {
    left: -5px;

    top: 4%;

    transform:
      scale(0.85);
  }

  .ai-card {
    right: -5px;

    bottom: 8%;

    transform:
      scale(0.85);
  }

  .floating-status {
    left: 5%;

    bottom: 0;
  }

  .scroll-indicator {
    display: none;
  }

}


@media (prefers-reduced-motion: reduce) {

  .gradient-orb,
  .developer-card,
  .floating-card,
  .ai-orbit,
  .availability-dot,
  .gradient-text,
  .scroll-arrow {
    animation: none;
  }

}

</style>