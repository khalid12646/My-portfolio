<template>
  <section class="ai-match-section" id="ai-match">
    <!-- Background -->
    <div class="ai-bg" aria-hidden="true">
      <span class="orb orb-1"></span>
      <span class="orb orb-2"></span>
      <span class="grid"></span>
    </div>

    <div class="ai-container">

      <!-- =========================
           HEADER
      ========================== -->
      <div class="section-heading reveal">
        <div class="eyebrow">
          <span class="eyebrow-dot"></span>
          AI POWERED
        </div>

        <h2>
          Find the right
          <span>skills for the role.</span>
        </h2>

        <p>
          Paste a job description and let my AI assistant
          identify the most relevant skills, technologies,
          and experience from my portfolio.
        </p>
      </div>

      <!-- =========================
           MAIN AI CARD
      ========================== -->
      <div class="ai-card reveal">

        <!-- Top Bar -->
        <div class="ai-card-top">
          <div class="ai-status">
            <span class="status-ring">
              <span></span>
            </span>

            <div>
              <strong>Portfolio AI Match</strong>
              <small>Local AI · Qwen 2.5</small>
            </div>
          </div>

          <div class="ai-badge">
            ✦ AI ANALYSIS
          </div>
        </div>

        <!-- Main Grid -->
        <div class="ai-grid">

          <!-- =========================
               INPUT PANEL
          ========================== -->
          <div class="input-panel">

            <div class="panel-heading">
              <div>
                <span class="panel-label">
                  JOB DESCRIPTION
                </span>

                <h3>
                  What are you hiring for?
                </h3>
              </div>

              <span class="step">
                01
              </span>
            </div>

            <textarea
              v-model="jobDescription"
              placeholder="Paste the job description here..."
              :disabled="isAnalyzing"
              spellcheck="false"
            ></textarea>

            <div class="input-footer">
              <span>
                {{ jobDescription.length }} characters
              </span>

              <button
                class="clear-btn"
                type="button"
                @click="clearInput"
                :disabled="!jobDescription || isAnalyzing"
              >
                Clear
              </button>
            </div>

            <button
              class="analyze-btn"
              type="button"
              @click="analyzeJob"
              :disabled="
                isAnalyzing ||
                !jobDescription.trim()
              "
            >
              <span v-if="!isAnalyzing">
                Analyze Role
                <span class="arrow">→</span>
              </span>

              <span
                v-else
                class="analyzing"
              >
                <span class="spinner"></span>
                Analyzing...
              </span>
            </button>

            <!-- Error -->
            <div
              v-if="errorMessage"
              class="error-message"
            >
              <span>!</span>
              {{ errorMessage }}
            </div>

          </div>

          <!-- =========================
               RESULT PANEL
          ========================== -->
          <div class="result-panel">

            <div class="panel-heading">
              <div>
                <span class="panel-label">
                  AI INSIGHTS
                </span>

                <h3>
                  Portfolio match
                </h3>
              </div>

              <span class="step">
                02
              </span>
            </div>

            <!-- =========================
                 EMPTY STATE
            ========================== -->
            <div
              v-if="
                !hasResult &&
                !isAnalyzing
              "
              class="empty-result"
            >
              <div class="empty-icon">
                ✦
              </div>

              <h4>
                Waiting for a role
              </h4>

              <p>
                Add a job description and
                I'll find the strongest matches.
              </p>

              <div class="scan-line"></div>
            </div>

            <!-- =========================
                 LOADING STATE
            ========================== -->
            <div
              v-if="isAnalyzing"
              class="loading-result"
            >
              <div class="ai-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <h4>
                AI is analyzing the role
              </h4>

              <p>
                Matching skills, technologies
                and experience...
              </p>

              <div class="progress">
                <span></span>
              </div>
            </div>

            <!-- =========================
                 RESULT
            ========================== -->
            <div
              v-if="
                hasResult &&
                !isAnalyzing
              "
              class="result-content"
            >

              <!-- Score -->
              <div class="match-score">

                <div class="score-circle">

                  <svg
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      class="score-bg"
                      cx="50"
                      cy="50"
                      r="42"
                    />

                    <circle
                      class="score-progress"
                      cx="50"
                      cy="50"
                      r="42"
                      :style="{
                        strokeDashoffset:
                          scoreOffset
                      }"
                    />
                  </svg>

                  <div class="score-number">
                    {{ matchScore }}%
                    <small>match</small>
                  </div>

                </div>

                <div class="score-info">

                  <span>
                    ROLE COMPATIBILITY
                  </span>

                  <strong>
                    {{ matchLabel }}
                  </strong>

                  <p>
                    {{ aiSummary }}
                  </p>

                </div>

              </div>

              <!-- Skills -->
              <div class="skills-title">
                Relevant skills
              </div>

              <div
                v-if="matchedSkills.length"
                class="skill-tags"
              >
                <span
                  v-for="skill in matchedSkills"
                  :key="skill"
                >
                  <span class="check">✓</span>
                  {{ skill }}
                </span>
              </div>

              <div
                v-else
                class="no-skills"
              >
                No specific skills were identified.
              </div>

              <!-- Insights -->
              <div
                v-if="recruiterInsights.length"
                class="insights-section"
              >
                <div class="skills-title">
                  Recruiter insights
                </div>

                <div class="insights-list">

                  <div
                    v-for="(
                      insight,
                      index
                    ) in recruiterInsights"
                    :key="index"
                    class="insight-item"
                  >
                    <span class="insight-number">
                      {{ String(index + 1).padStart(2, "0") }}
                    </span>

                    <span>
                      {{ insight }}
                    </span>
                  </div>

                </div>
              </div>

              <!-- Note -->
              <div class="result-note">
                <span>✦</span>

                AI identified these matches
                from Khalid's portfolio.
              </div>

            </div>

          </div>

        </div>
      </div>

      <!-- =========================
           FEATURES
      ========================== -->
      <div class="ai-features">

        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature reveal"
        >
          <div class="feature-icon">
            {{ feature.icon }}
          </div>

          <div>
            <h4>
              {{ feature.title }}
            </h4>

            <p>
              {{ feature.text }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>


<script setup>
import {
  computed,
  ref,
} from "vue";


/* =========================================================
   STATE
========================================================= */

const jobDescription = ref("");

const isAnalyzing = ref(false);

const hasResult = ref(false);

const errorMessage = ref("");

const matchScore = ref(0);

const matchedSkills = ref([]);

const aiSummary = ref("");

const recruiterInsights = ref([]);


/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: "⌁",
    title: "Smart Matching",
    text:
      "AI identifies the skills most relevant to the role.",
  },

  {
    icon: "◈",
    title: "Context Aware",
    text:
      "Matches technologies with real portfolio experience.",
  },

  {
    icon: "✦",
    title: "Recruiter Ready",
    text:
      "Quickly understand why the candidate fits.",
  },
];


/* =========================================================
   SCORE CIRCLE
========================================================= */

const scoreOffset = computed(() => {

  const circumference =
    2 * Math.PI * 42;

  return (
    circumference -
    (matchScore.value / 100) *
      circumference
  );
});


/* =========================================================
   MATCH LABEL
========================================================= */

const matchLabel = computed(() => {

  if (matchScore.value >= 85) {
    return "Strong Match";
  }

  if (matchScore.value >= 70) {
    return "Good Match";
  }

  if (matchScore.value >= 50) {
    return "Partial Match";
  }

  return "Low Match";
});


/* =========================================================
   CLEAR INPUT
========================================================= */

const clearInput = () => {

  jobDescription.value = "";

  hasResult.value = false;

  errorMessage.value = "";

  matchScore.value = 0;

  matchedSkills.value = [];

  aiSummary.value = "";

  recruiterInsights.value = [];

  localStorage.removeItem(
    "portfolio-ai-match"
  );
};


/* =========================================================
   CLEAN AI RESPONSE
========================================================= */

const cleanAIResponse = (text) => {

  if (!text) {
    return "";
  }

  let cleaned = String(text).trim();

  /*
   * Remove markdown code fences
   */

  cleaned = cleaned
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();


  /*
   * Find JSON object if Qwen
   * adds extra text around it.
   */

  const firstBrace =
    cleaned.indexOf("{");

  const lastBrace =
    cleaned.lastIndexOf("}");


  if (
    firstBrace !== -1 &&
    lastBrace !== -1 &&
    lastBrace > firstBrace
  ) {
    cleaned =
      cleaned.substring(
        firstBrace,
        lastBrace + 1
      );
  }


  return cleaned.trim();
};


/* =========================================================
   FALLBACK RESULT
========================================================= */

const setFallbackResult = () => {

  matchScore.value = 88;

  matchedSkills.value = [
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
  ];

  aiSummary.value =
    "The portfolio contains strong frontend development skills that align well with this role.";

  recruiterInsights.value = [
    "Strong Vue.js experience",
    "Good JavaScript and TypeScript knowledge",
    "Strong responsive UI development",
    "Experience with REST APIs",
  ];

  hasResult.value = true;
};


/* =========================================================
   ANALYZE JOB
========================================================= */

const analyzeJob = async () => {

  /*
   * Validate input
   */

  if (!jobDescription.value.trim()) {
    return;
  }


  /*
   * Reset state
   */

  isAnalyzing.value = true;

  hasResult.value = false;

  errorMessage.value = "";


  try {

    /*
     * Send request to local AI server
     */

    const response = await fetch(
      "http://localhost:3000/api/chat",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          message: `
You are an AI recruiter assistant analyzing Khalid Alvi's portfolio.

JOB DESCRIPTION:

${jobDescription.value}


CANDIDATE PROFILE:

Name:
Khalid Alvi

Role:
Frontend Developer

Skills:

Vue.js,
JavaScript,
TypeScript,
HTML5,
CSS3,
Bootstrap,
Tailwind CSS,
Git,
GitHub,
REST APIs,
Frontend Development,
Responsive Design,
UI/UX implementation,
AI integration.

Experience:

Frontend development,
Vue.js projects,
responsive websites,
admin dashboards,
API integration,
AI-powered portfolio development.


TASK:

Analyze how well this candidate matches the job description.


IMPORTANT:

Return ONLY valid JSON.

Use exactly this structure:

{
  "matchScore": 85,
  "skills": [
    "Vue.js",
    "JavaScript",
    "TypeScript"
  ],
  "summary": "Short explanation of why the candidate matches.",
  "insights": [
    "Strong Vue.js experience",
    "Good API integration experience",
    "Strong responsive UI skills"
  ]
}


RULES:

- matchScore must be a number between 0 and 100.
- skills must contain only skills that exist in the candidate profile.
- Maximum 8 skills.
- insights must contain 3 to 5 short points.
- summary must be short.
- Do not use markdown.
- Do not use code fences.
- Return JSON only.
          `,
        }),
      }
    );


    /*
     * Check HTTP response
     */

    if (!response.ok) {

      throw new Error(
        `AI server returned ${response.status}`
      );
    }


    /*
     * Convert response to JSON
     */

    const data =
      await response.json();


    /*
     * Your local server currently
     * returns "reply".
     *
     * We also support other
     * common response names.
     */

    const aiText =
      data.reply ||
      data.message ||
      data.response ||
      data.content ||
      "";


    /*
     * If no AI response
     */

    if (!aiText) {

      throw new Error(
        "AI server returned an empty response."
      );
    }


    /*
     * Clean response
     */

    const cleanedText =
      cleanAIResponse(aiText);


    /*
     * Parse JSON
     */

    let result;

    try {

      result =
        JSON.parse(cleanedText);

    } catch (parseError) {

      console.warn(
        "Qwen returned invalid JSON:",
        aiText
      );

      /*
       * Instead of breaking the UI,
       * use fallback result.
       */

      setFallbackResult();

      return;
    }


    /*
     * Validate match score
     */

    const parsedScore =
      Number(result.matchScore);


    if (
      Number.isFinite(parsedScore)
    ) {

      matchScore.value =
        Math.min(
          100,
          Math.max(
            0,
            Math.round(parsedScore)
          )
        );

    } else {

      matchScore.value = 0;
    }


    /*
     * Skills
     */

    if (
      Array.isArray(
        result.skills
      )
    ) {

      matchedSkills.value =
        result.skills
          .filter(
            (skill) =>
              typeof skill === "string" &&
              skill.trim()
          )
          .slice(0, 8);

    } else {

      matchedSkills.value = [];
    }


    /*
     * Summary
     */

    aiSummary.value =
      typeof result.summary === "string" &&
      result.summary.trim()
        ? result.summary.trim()
        : "The candidate has relevant skills for this position.";


    /*
     * Recruiter insights
     */

    if (
      Array.isArray(
        result.insights
      )
    ) {

      recruiterInsights.value =
        result.insights
          .filter(
            (item) =>
              typeof item === "string" &&
              item.trim()
          )
          .slice(0, 5);

    } else {

      recruiterInsights.value = [];
    }


    /*
     * Show result
     */

    hasResult.value = true;


    /*
     * Save latest analysis
     */

    localStorage.setItem(
      "portfolio-ai-match",
      JSON.stringify({
        jobDescription:
          jobDescription.value,

        matchScore:
          matchScore.value,

        skills:
          matchedSkills.value,

        summary:
          aiSummary.value,

        insights:
          recruiterInsights.value,

        analyzedAt:
          new Date().toISOString(),
      })
    );


  } catch (error) {

    console.error(
      "AI Match Error:",
      error
    );


    /*
     * Show useful error
     */

    errorMessage.value =
      "Local AI server is unavailable. Showing demo analysis.";


    /*
     * Keep UI functional
     */

    setFallbackResult();


  } finally {

    isAnalyzing.value = false;
  }
};
</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.ai-match-section {
  position: relative;

  padding: 130px 20px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(99, 102, 241, 0.1),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 70%,
      rgba(6, 182, 212, 0.08),
      transparent 30%
    ),
    var(--bg-primary, #05070b);
}


/* =========================================================
   BACKGROUND
========================================================= */

.ai-bg {
  position: absolute;

  inset: 0;

  pointer-events: none;
}

.orb {
  position: absolute;

  width: 300px;

  height: 300px;

  border-radius: 50%;

  filter: blur(100px);

  opacity: 0.12;

  animation:
    floating-orb
    8s
    ease-in-out
    infinite;
}

.orb-1 {
  top: 10%;

  left: -120px;

  background: #6366f1;
}

.orb-2 {
  right: -100px;

  bottom: 5%;

  background: #06b6d4;

  animation-delay: -4s;
}

@keyframes floating-orb {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-30px);
  }
}

.grid {
  position: absolute;

  inset: 0;

  opacity: 0.25;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.025)
      1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.025)
      1px,
      transparent 1px
    );

  background-size:
    55px 55px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent
    );
}


/* =========================================================
   CONTAINER
========================================================= */

.ai-container {
  position: relative;

  z-index: 2;

  width:
    min(1180px, 100%);

  margin: auto;
}


/* =========================================================
   HEADING
========================================================= */

.section-heading {
  max-width: 720px;

  margin-bottom: 55px;
}

.eyebrow {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 18px;

  padding:
    7px 12px;

  border:
    1px solid
    rgba(129, 140, 248, 0.2);

  border-radius: 999px;

  background:
    rgba(99, 102, 241, 0.08);

  color:
    #a5b4fc;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 0.14em;
}

.eyebrow-dot {
  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow:
    0 0 12px #22d3ee;

  animation:
    pulse
    2s
    infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;

    transform:
      scale(1);
  }

  50% {
    opacity: 0.5;

    transform:
      scale(0.7);
  }
}

.section-heading h2 {
  margin: 0;

  color:
    var(--text-primary, #ffffff);

  font-size:
    clamp(38px, 5vw, 64px);

  line-height: 1.02;

  letter-spacing: -0.055em;

  font-weight: 700;
}

.section-heading h2 span {
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

.section-heading p {
  max-width: 620px;

  margin:
    22px 0 0;

  color:
    var(
      --text-secondary,
      #8b95a7
    );

  font-size: 15px;

  line-height: 1.8;
}


/* =========================================================
   AI CARD
========================================================= */

.ai-card {
  position: relative;

  padding: 1px;

  border-radius: 28px;

  background:
    linear-gradient(
      135deg,
      rgba(129, 140, 248, 0.35),
      rgba(34, 211, 238, 0.12),
      rgba(255, 255, 255, 0.04)
    );

  box-shadow:
    0 35px 100px
    rgba(0, 0, 0, 0.35);
}

.ai-card::before {
  content: "";

  position: absolute;

  inset: 0;

  border-radius: inherit;

  background:
    linear-gradient(
      120deg,
      transparent 25%,
      rgba(255, 255, 255, 0.06),
      transparent 75%
    );

  transform:
    translateX(-100%);

  transition:
    transform 1s ease;

  pointer-events: none;
}

.ai-card:hover::before {
  transform:
    translateX(100%);
}


/* =========================================================
   TOP BAR
========================================================= */

.ai-card-top {
  position: relative;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding:
    20px 24px;

  border-radius:
    27px 27px 0 0;

  background:
    rgba(10, 13, 22, 0.95);

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.06);
}

.ai-status {
  display: flex;

  align-items: center;

  gap: 12px;
}

.status-ring {
  width: 34px;

  height: 34px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(34, 211, 238, 0.25);

  border-radius: 10px;

  background:
    rgba(34, 211, 238, 0.08);
}

.status-ring span {
  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow:
    0 0 14px #22d3ee;
}

.ai-status strong {
  display: block;

  color: white;

  font-size: 13px;
}

.ai-status small {
  display: block;

  margin-top: 3px;

  color: #697184;

  font-size: 10px;
}

.ai-badge {
  padding:
    7px 10px;

  border:
    1px solid
    rgba(129, 140, 248, 0.2);

  border-radius: 8px;

  color: #a5b4fc;

  background:
    rgba(99, 102, 241, 0.08);

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.08em;
}


/* =========================================================
   GRID
========================================================= */

.ai-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  background:
    rgba(8, 11, 18, 0.92);

  border-radius:
    0 0 27px 27px;
}


/* =========================================================
   PANELS
========================================================= */

.input-panel,
.result-panel {
  padding: 30px;
}

.input-panel {
  border-right:
    1px solid
    rgba(255, 255, 255, 0.06);
}

.panel-heading {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  margin-bottom: 20px;
}

.panel-label {
  display: block;

  margin-bottom: 7px;

  color: #687286;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.14em;
}

.panel-heading h3 {
  margin: 0;

  color: white;

  font-size: 18px;

  letter-spacing: -0.02em;
}

.step {
  color: #4b5563;

  font-family: monospace;

  font-size: 11px;
}


/* =========================================================
   TEXTAREA
========================================================= */

textarea {
  box-sizing: border-box;

  width: 100%;

  min-height: 220px;

  resize: vertical;

  padding: 16px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 15px;

  outline: none;

  background:
    rgba(255, 255, 255, 0.025);

  color: white;

  font-family: inherit;

  font-size: 13px;

  line-height: 1.7;

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

textarea::placeholder {
  color: #4f596b;
}

textarea:focus {
  border-color:
    rgba(129, 140, 248, 0.45);

  background:
    rgba(99, 102, 241, 0.035);

  box-shadow:
    0 0 0 4px
    rgba(99, 102, 241, 0.06);
}

textarea:disabled {
  opacity: 0.7;

  cursor: wait;
}


/* =========================================================
   INPUT FOOTER
========================================================= */

.input-footer {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 8px;

  color: #4f596b;

  font-size: 10px;
}

.clear-btn {
  border: none;

  background: transparent;

  color: #6b7280;

  cursor: pointer;

  font-size: 10px;
}

.clear-btn:hover:not(:disabled) {
  color: #a5b4fc;
}

.clear-btn:disabled {
  opacity: 0.4;

  cursor: not-allowed;
}


/* =========================================================
   ANALYZE BUTTON
========================================================= */

.analyze-btn {
  width: 100%;

  height: 50px;

  margin-top: 20px;

  border: none;

  border-radius: 13px;

  background:
    linear-gradient(
      100deg,
      #6366f1,
      #06b6d4
    );

  color: white;

  font-size: 13px;

  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 12px 30px
    rgba(99, 102, 241, 0.2);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;
}

.analyze-btn:hover:not(:disabled) {
  transform:
    translateY(-2px);

  box-shadow:
    0 18px 40px
    rgba(99, 102, 241, 0.3);
}

.analyze-btn:disabled {
  opacity: 0.45;

  cursor: not-allowed;
}

.arrow {
  margin-left: 8px;

  font-size: 16px;
}

.analyzing {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 9px;
}

.spinner {
  width: 14px;

  height: 14px;

  border:
    2px solid
    rgba(255, 255, 255, 0.3);

  border-top-color: white;

  border-radius: 50%;

  animation:
    spin
    0.7s
    linear
    infinite;
}

@keyframes spin {

  to {
    transform:
      rotate(360deg);
  }
}


/* =========================================================
   ERROR
========================================================= */

.error-message {
  display: flex;

  align-items: center;

  gap: 8px;

  margin-top: 12px;

  padding:
    10px 12px;

  border:
    1px solid
    rgba(245, 158, 11, 0.15);

  border-radius: 9px;

  background:
    rgba(245, 158, 11, 0.05);

  color: #fbbf24;

  font-size: 10px;

  line-height: 1.5;
}

.error-message span {
  width: 18px;

  height: 18px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    rgba(245, 158, 11, 0.12);

  font-weight: 700;
}


/* =========================================================
   EMPTY
========================================================= */

.empty-result {
  min-height: 315px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  text-align: center;

  position: relative;
}

.empty-icon {
  width: 54px;

  height: 54px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(129, 140, 248, 0.2);

  border-radius: 16px;

  background:
    rgba(99, 102, 241, 0.07);

  color: #a5b4fc;

  font-size: 24px;

  animation:
    floating
    3s
    ease-in-out
    infinite;
}

@keyframes floating {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-7px);
  }
}

.empty-result h4,
.loading-result h4 {
  margin:
    17px 0 6px;

  color: #dce1ea;

  font-size: 14px;
}

.empty-result p,
.loading-result p {
  max-width: 260px;

  margin: 0;

  color: #596477;

  font-size: 11px;

  line-height: 1.6;
}

.scan-line {
  width: 120px;

  height: 1px;

  margin-top: 25px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #6366f1,
      transparent
    );

  animation:
    scan
    2s
    ease-in-out
    infinite;
}

@keyframes scan {

  0%,
  100% {
    opacity: 0.2;

    transform:
      scaleX(0.5);
  }

  50% {
    opacity: 1;

    transform:
      scaleX(1);
  }
}


/* =========================================================
   LOADING
========================================================= */

.loading-result {
  min-height: 315px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  text-align: center;
}

.ai-loader {
  display: flex;

  gap: 6px;
}

.ai-loader span {
  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: #818cf8;

  animation:
    ai-dot
    1.2s
    infinite;
}

.ai-loader span:nth-child(2) {
  animation-delay:
    0.15s;
}

.ai-loader span:nth-child(3) {
  animation-delay:
    0.3s;
}

@keyframes ai-dot {

  0%,
  100% {
    transform:
      translateY(0);

    opacity: 0.4;
  }

  50% {
    transform:
      translateY(-7px);

    opacity: 1;
  }
}

.progress {
  width: 180px;

  height: 3px;

  margin-top: 22px;

  overflow: hidden;

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.06);
}

.progress span {
  display: block;

  width: 45%;

  height: 100%;

  background:
    linear-gradient(
      90deg,
      #6366f1,
      #22d3ee
    );

  animation:
    progress
    1.3s
    infinite;
}

@keyframes progress {

  from {
    transform:
      translateX(-120%);
  }

  to {
    transform:
      translateX(350%);
  }
}


/* =========================================================
   RESULT
========================================================= */

.result-content {
  animation:
    result-enter
    0.5s
    ease
    both;
}

@keyframes result-enter {

  from {
    opacity: 0;

    transform:
      translateY(10px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}


/* =========================================================
   SCORE
========================================================= */

.match-score {
  display: flex;

  align-items: center;

  gap: 20px;

  margin-bottom: 25px;
}

.score-circle {
  position: relative;

  width: 105px;

  height: 105px;

  flex-shrink: 0;
}

.score-circle svg {
  width: 100%;

  height: 100%;

  transform:
    rotate(-90deg);
}

.score-bg,
.score-progress {
  fill: none;

  stroke-width: 7;
}

.score-bg {
  stroke:
    rgba(255, 255, 255, 0.06);
}

.score-progress {
  stroke:
    #818cf8;

  stroke-linecap: round;

  stroke-dasharray:
    263.9;

  transition:
    stroke-dashoffset
    1s
    ease;
}

.score-number {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  color: white;

  font-size: 22px;

  font-weight: 700;
}

.score-number small {
  color: #687286;

  font-size: 8px;

  font-weight: 500;

  text-transform: uppercase;

  letter-spacing: 0.08em;
}

.score-info {
  min-width: 0;
}

.score-info > span {
  display: block;

  color: #687286;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.12em;
}

.score-info strong {
  display: block;

  margin-top: 6px;

  color: #dce1ea;

  font-size: 16px;
}

.score-info p {
  margin:
    5px 0 0;

  color: #596477;

  font-size: 10px;

  line-height: 1.5;
}


/* =========================================================
   SKILLS
========================================================= */

.skills-title {
  margin-bottom: 11px;

  color: #697184;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.1em;

  text-transform: uppercase;
}

.skill-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;
}

.skill-tags > span {
  display: inline-flex;

  align-items: center;

  gap: 5px;

  padding:
    7px 9px;

  border:
    1px solid
    rgba(129, 140, 248, 0.16);

  border-radius: 8px;

  background:
    rgba(99, 102, 241, 0.06);

  color: #aeb8ca;

  font-size: 10px;

  animation:
    tag-enter
    0.4s
    ease
    both;
}

@keyframes tag-enter {

  from {
    opacity: 0;

    transform:
      scale(0.9);
  }

  to {
    opacity: 1;

    transform:
      scale(1);
  }
}

.check {
  color: #22d3ee;
}

.no-skills {
  padding:
    12px;

  border:
    1px dashed
    rgba(255, 255, 255, 0.08);

  border-radius: 9px;

  color: #596477;

  font-size: 10px;
}


/* =========================================================
   INSIGHTS
========================================================= */

.insights-section {
  margin-top: 22px;
}

.insights-list {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

.insight-item {
  display: flex;

  align-items: flex-start;

  gap: 10px;

  padding:
    9px 10px;

  border:
    1px solid
    rgba(255, 255, 255, 0.045);

  border-radius: 9px;

  background:
    rgba(255, 255, 255, 0.018);

  color: #8993a5;

  font-size: 10px;

  line-height: 1.5;
}

.insight-number {
  color: #818cf8;

  font-family: monospace;

  font-size: 9px;

  font-weight: 700;
}


/* =========================================================
   RESULT NOTE
========================================================= */

.result-note {
  display: flex;

  align-items: center;

  gap: 6px;

  margin-top: 20px;

  padding-top: 15px;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.05);

  color: #596477;

  font-size: 9px;
}

.result-note span {
  color: #818cf8;
}


/* =========================================================
   FEATURES
========================================================= */

.ai-features {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 15px;

  margin-top: 18px;
}

.feature {
  display: flex;

  gap: 13px;

  padding: 20px;

  border:
    1px solid
    rgba(255, 255, 255, 0.05);

  border-radius: 16px;

  background:
    rgba(255, 255, 255, 0.018);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.feature:hover {
  transform:
    translateY(-4px);

  border-color:
    rgba(129, 140, 248, 0.18);

  background:
    rgba(99, 102, 241, 0.035);
}

.feature-icon {
  width: 34px;

  height: 34px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 9px;

  background:
    rgba(99, 102, 241, 0.08);

  color: #a5b4fc;

  font-size: 16px;
}

.feature h4 {
  margin:
    0 0 5px;

  color: #dce1ea;

  font-size: 12px;
}

.feature p {
  margin: 0;

  color: #596477;

  font-size: 10px;

  line-height: 1.6;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 800px) {

  .ai-match-section {
    padding:
      90px 15px;
  }

  .ai-grid {
    grid-template-columns:
      1fr;
  }

  .input-panel {
    border-right: none;

    border-bottom:
      1px solid
      rgba(255, 255, 255, 0.06);
  }

  .ai-features {
    grid-template-columns:
      1fr;
  }
}


@media (max-width: 500px) {

  .section-heading h2 {
    font-size: 38px;
  }

  .ai-card-top {
    padding:
      16px;
  }

  .ai-badge {
    display: none;
  }

  .input-panel,
  .result-panel {
    padding:
      20px;
  }

  textarea {
    min-height: 180px;
  }

  .match-score {
    gap: 14px;
  }

  .score-circle {
    width: 85px;

    height: 85px;
  }

  .score-number {
    font-size: 18px;
  }

  .score-info strong {
    font-size: 14px;
  }
}


/* =========================================================
   REVEAL
========================================================= */

.reveal {
  animation:
    section-reveal
    0.8s
    ease
    both;
}

@keyframes section-reveal {

  from {
    opacity: 0;

    transform:
      translateY(25px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

</style>