<template>
  <section class="recruiter-view" id="recruiter-view">
    <div class="rv-bg">
      <span class="rv-orb rv-orb-1"></span>
      <span class="rv-orb rv-orb-2"></span>
      <span class="rv-grid"></span>
    </div>

    <div class="rv-container">

      <!-- Header -->
      <div class="rv-header">
        <div>
          <div class="rv-eyebrow">
            <span class="rv-dot"></span>
            RECRUITER VIEW
          </div>

          <h2>
            Why Khalid is a
            <span>strong fit.</span>
          </h2>

          <p>
            AI-powered insights based on the role you are
            hiring for and Khalid's portfolio.
          </p>
        </div>

        <div class="rv-ai-status">
          <span class="status-dot"></span>
          AI ANALYSIS ACTIVE
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="!hasAnalysis"
        class="empty-state"
      >
        <div class="empty-icon">
          ✦
        </div>

        <h3>No recruiter analysis yet</h3>

        <p>
          Analyze a job description in the AI Match section
          to generate a recruiter-focused view.
        </p>

        <button
          type="button"
          @click="goToAiMatch"
        >
          Analyze a Role
          <span>→</span>
        </button>
      </div>

      <!-- Recruiter Dashboard -->
      <div
        v-else
        class="recruiter-dashboard"
      >

        <!-- Top Cards -->
        <div class="top-grid">

          <!-- Candidate -->
          <div class="candidate-card">
            <div class="card-label">
              CANDIDATE
            </div>

            <div class="candidate-content">
              <div class="avatar">
                KA
              </div>

              <div>
                <h3>Khalid Alvi</h3>

                <p>
                  Frontend Developer
                </p>

                <span>
                  Vue.js · TypeScript · JavaScript
                </span>
              </div>
            </div>
          </div>

          <!-- Match -->
          <div class="match-card">

            <div class="card-label">
              AI MATCH SCORE
            </div>

            <div class="match-content">

              <div class="mini-score">
                <svg viewBox="0 0 100 100">
                  <circle
                    class="mini-score-bg"
                    cx="50"
                    cy="50"
                    r="40"
                  />

                  <circle
                    class="mini-score-progress"
                    cx="50"
                    cy="50"
                    r="40"
                    :style="{
                      strokeDashoffset: scoreOffset
                    }"
                  />
                </svg>

                <strong>
                  {{ analysis.matchScore }}%
                </strong>
              </div>

              <div>
                <span class="match-label">
                  ROLE COMPATIBILITY
                </span>

                <h3>
                  {{ matchLabel }}
                </h3>

                <p>
                  Strong alignment with the
                  requirements of this role.
                </p>
              </div>

            </div>
          </div>

        </div>

        <!-- Job Description -->
        <div class="job-card">

          <div class="card-heading">
            <div>
              <span class="card-label">
                ANALYZED ROLE
              </span>

              <h3>
                Job Description
              </h3>
            </div>

            <span class="analysis-date">
              {{ formattedDate }}
            </span>
          </div>

          <div class="job-description">
            {{ analysis.jobDescription }}
          </div>

        </div>

        <!-- Main Grid -->
        <div class="main-grid">

          <!-- Skills -->
          <div class="skills-card">

            <div class="card-heading">
              <div>
                <span class="card-label">
                  AI IDENTIFIED
                </span>

                <h3>
                  Relevant Skills
                </h3>
              </div>

              <span class="count">
                {{ analysis.skills.length }}
              </span>
            </div>

            <div class="skills-list">

              <div
                v-for="(skill, index) in analysis.skills"
                :key="skill"
                class="skill-item"
                :style="{
                  animationDelay: `${index * 0.06}s`
                }"
              >
                <span class="skill-check">
                  ✓
                </span>

                <span>
                  {{ skill }}
                </span>
              </div>

            </div>

          </div>

          <!-- Summary -->
          <div class="summary-card">

            <div class="card-heading">
              <div>
                <span class="card-label">
                  AI SUMMARY
                </span>

                <h3>
                  Why the candidate fits
                </h3>
              </div>
            </div>

            <div class="summary-content">

              <div class="summary-icon">
                ✦
              </div>

              <p>
                {{ analysis.summary }}
              </p>

            </div>

          </div>

        </div>

        <!-- Insights -->
        <div class="insights-card">

          <div class="card-heading">
            <div>
              <span class="card-label">
                RECRUITER INSIGHTS
              </span>

              <h3>
                Key reasons to consider Khalid
              </h3>
            </div>

            <span class="ai-badge">
              AI GENERATED
            </span>
          </div>

          <div class="insights-grid">

            <div
              v-for="(insight, index) in analysis.insights"
              :key="index"
              class="insight"
            >
              <div class="insight-number">
                {{ String(index + 1).padStart(2, "0") }}
              </div>

              <p>
                {{ insight }}
              </p>
            </div>

          </div>

        </div>

        <!-- Actions -->
        <div class="rv-actions">

          <button
            type="button"
            class="secondary-btn"
            @click="goToAiMatch"
          >
            ← Analyze Another Role
          </button>

          <button
            type="button"
            class="primary-btn"
            @click="downloadAnalysis"
          >
            Save Analysis
            <span>↓</span>
          </button>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
} from "vue";


/* =========================================================
   STATE
========================================================= */

const analysis = ref({
  jobDescription: "",
  matchScore: 0,
  skills: [],
  summary: "",
  insights: [],
  analyzedAt: "",
});


const hasAnalysis = ref(false);


/* =========================================================
   LOAD AI ANALYSIS
========================================================= */

const loadAnalysis = () => {

  try {

    const saved =
      localStorage.getItem(
        "portfolio-ai-match"
      );


    if (!saved) {

      hasAnalysis.value = false;

      return;

    }


    const parsed =
      JSON.parse(saved);


    analysis.value = {
      jobDescription:
        parsed.jobDescription || "",

      matchScore:
        Number(parsed.matchScore) || 0,

      skills:
        Array.isArray(parsed.skills)
          ? parsed.skills
          : [],

      summary:
        parsed.summary ||
        "The candidate has relevant skills for this position.",

      insights:
        Array.isArray(parsed.insights)
          ? parsed.insights
          : [],

      analyzedAt:
        parsed.analyzedAt || "",
    };


    hasAnalysis.value =
      Boolean(
        parsed.jobDescription ||
        parsed.skills?.length
      );


  } catch (error) {

    console.error(
      "Failed to load recruiter analysis:",
      error
    );

    hasAnalysis.value = false;

  }

};


/* =========================================================
   SCORE
========================================================= */

const scoreOffset = computed(() => {

  const circumference =
    2 * Math.PI * 40;

  return (
    circumference -
    (analysis.value.matchScore / 100) *
      circumference
  );

});


/* =========================================================
   MATCH LABEL
========================================================= */

const matchLabel = computed(() => {

  const score =
    analysis.value.matchScore;


  if (score >= 90) {
    return "Excellent Match";
  }

  if (score >= 80) {
    return "Strong Match";
  }

  if (score >= 70) {
    return "Good Match";
  }

  if (score >= 50) {
    return "Potential Match";
  }

  return "Low Match";

});


/* =========================================================
   DATE
========================================================= */

const formattedDate = computed(() => {

  if (!analysis.value.analyzedAt) {
    return "Recently analyzed";
  }


  try {

    return new Date(
      analysis.value.analyzedAt
    ).toLocaleString(
      undefined,
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );

  } catch {

    return "Recently analyzed";

  }

});


/* =========================================================
   GO TO AI MATCH
========================================================= */

const goToAiMatch = () => {

  const section =
    document.getElementById(
      "ai-match"
    );


  if (section) {

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }

};


/* =========================================================
   DOWNLOAD / SAVE ANALYSIS
========================================================= */

const downloadAnalysis = () => {

  const content = `
KHALID ALVI
Frontend Developer

AI RECRUITER ANALYSIS
=====================

Match Score:
${analysis.value.matchScore}%

Job Description:
${analysis.value.jobDescription}

Relevant Skills:
${analysis.value.skills.join(", ")}

Summary:
${analysis.value.summary}

Recruiter Insights:
${analysis.value.insights
  .map(
    (item, index) =>
      `${index + 1}. ${item}`
  )
  .join("\n")}

Analyzed:
${formattedDate.value}
  `.trim();


  const blob =
    new Blob(
      [content],
      {
        type: "text/plain",
      }
    );


  const url =
    URL.createObjectURL(blob);


  const link =
    document.createElement("a");


  link.href = url;

  link.download =
    "khalid-ai-recruiter-analysis.txt";


  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);

};


/* =========================================================
   MOUNT
========================================================= */

onMounted(() => {

  loadAnalysis();


  /*
   * If AIMatch updates localStorage
   * while this page is open.
   */

  window.addEventListener(
    "storage",
    loadAnalysis
  );

});
</script>

<style scoped>

/* =========================================================
   SECTION
========================================================= */

.recruiter-view {
  position: relative;

  overflow: hidden;

  padding: 130px 20px;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(99,102,241,0.09),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(6,182,212,0.07),
      transparent 30%
    ),
    var(--bg-primary,#05070b);
}


/* =========================================================
   BACKGROUND
========================================================= */

.rv-bg {
  position: absolute;

  inset: 0;

  pointer-events: none;
}


.rv-orb {
  position: absolute;

  width: 280px;

  height: 280px;

  border-radius: 50%;

  filter: blur(100px);

  opacity: 0.1;

  animation:
    rv-float
    8s
    ease-in-out
    infinite;
}


.rv-orb-1 {
  left: -120px;

  top: 20%;

  background: #6366f1;
}


.rv-orb-2 {
  right: -100px;

  bottom: 10%;

  background: #22d3ee;

  animation-delay: -4s;
}


@keyframes rv-float {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-25px);
  }

}


.rv-grid {
  position: absolute;

  inset: 0;

  opacity: 0.2;

  background-image:
    linear-gradient(
      rgba(255,255,255,0.025)
      1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.025)
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

.rv-container {
  position: relative;

  z-index: 2;

  width:
    min(1180px,100%);

  margin: auto;
}


/* =========================================================
   HEADER
========================================================= */

.rv-header {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 30px;

  margin-bottom: 50px;
}


.rv-eyebrow {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 17px;

  padding:
    7px 12px;

  border:
    1px solid
    rgba(129,140,248,0.2);

  border-radius: 999px;

  color: #a5b4fc;

  background:
    rgba(99,102,241,0.08);

  font-size: 10px;

  font-weight: 700;

  letter-spacing:
    0.14em;
}


.rv-dot,
.status-dot {
  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow:
    0 0 12px #22d3ee;
}


.rv-header h2 {
  margin: 0;

  color:
    var(--text-primary,#fff);

  font-size:
    clamp(38px,5vw,60px);

  line-height: 1.02;

  letter-spacing:
    -0.055em;
}


.rv-header h2 span {
  display: block;

  background:
    linear-gradient(
      100deg,
      #818cf8,
      #22d3ee
    );

  -webkit-background-clip:
    text;

  background-clip: text;

  color: transparent;
}


.rv-header p {
  max-width: 620px;

  margin:
    20px 0 0;

  color:
    var(
      --text-secondary,
      #8b95a7
    );

  font-size: 14px;

  line-height: 1.8;
}


.rv-ai-status {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding:
    9px 12px;

  border:
    1px solid
    rgba(34,211,238,0.16);

  border-radius: 9px;

  color: #67e8f9;

  background:
    rgba(34,211,238,0.05);

  font-size: 9px;

  font-weight: 700;

  letter-spacing:
    0.08em;

  white-space: nowrap;
}


/* =========================================================
   EMPTY STATE
========================================================= */

.empty-state {
  min-height: 380px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  text-align: center;

  padding: 40px;

  border:
    1px solid
    rgba(255,255,255,0.06);

  border-radius: 24px;

  background:
    rgba(255,255,255,0.018);
}


.empty-icon {
  width: 65px;

  height: 65px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(129,140,248,0.2);

  border-radius: 18px;

  color: #a5b4fc;

  background:
    rgba(99,102,241,0.08);

  font-size: 27px;
}


.empty-state h3 {
  margin:
    18px 0 8px;

  color: #e5e7eb;

  font-size: 18px;
}


.empty-state p {
  max-width: 400px;

  margin: 0;

  color: #667085;

  font-size: 12px;

  line-height: 1.7;
}


.empty-state button {
  margin-top: 22px;

  padding:
    11px 17px;

  border: none;

  border-radius: 10px;

  color: white;

  background:
    linear-gradient(
      100deg,
      #6366f1,
      #06b6d4
    );

  cursor: pointer;

  font-size: 11px;

  font-weight: 700;
}


.empty-state button span {
  margin-left: 8px;

  font-size: 15px;
}


/* =========================================================
   DASHBOARD
========================================================= */

.recruiter-dashboard {
  animation:
    rv-enter
    0.6s
    ease both;
}


@keyframes rv-enter {

  from {
    opacity: 0;

    transform:
      translateY(15px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }

}


/* =========================================================
   TOP GRID
========================================================= */

.top-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 15px;
}


.candidate-card,
.match-card,
.job-card,
.skills-card,
.summary-card,
.insights-card {
  border:
    1px solid
    rgba(255,255,255,0.06);

  border-radius: 20px;

  background:
    rgba(9,12,20,0.82);

  box-shadow:
    0 20px 60px
    rgba(0,0,0,0.2);
}


.candidate-card,
.match-card {
  padding: 25px;
}


.card-label {
  display: block;

  margin-bottom: 8px;

  color: #687286;

  font-size: 8px;

  font-weight: 700;

  letter-spacing:
    0.14em;
}


.candidate-content {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-top: 18px;
}


.avatar {
  width: 58px;

  height: 58px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 16px;

  color: white;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #06b6d4
    );

  font-size: 16px;

  font-weight: 800;

  box-shadow:
    0 12px 30px
    rgba(99,102,241,0.2);
}


.candidate-content h3 {
  margin: 0;

  color: #e5e7eb;

  font-size: 17px;
}


.candidate-content p {
  margin:
    4px 0;

  color: #8b95a7;

  font-size: 11px;
}


.candidate-content span {
  color: #586274;

  font-size: 9px;
}


/* =========================================================
   MATCH
========================================================= */

.match-content {
  display: flex;

  align-items: center;

  gap: 18px;

  margin-top: 12px;
}


.mini-score {
  position: relative;

  width: 90px;

  height: 90px;

  flex-shrink: 0;
}


.mini-score svg {
  width: 100%;

  height: 100%;

  transform:
    rotate(-90deg);
}


.mini-score-bg,
.mini-score-progress {
  fill: none;

  stroke-width: 7;
}


.mini-score-bg {
  stroke:
    rgba(255,255,255,0.06);
}


.mini-score-progress {
  stroke: #818cf8;

  stroke-linecap: round;

  stroke-dasharray:
    251.3;

  transition:
    stroke-dashoffset
    1s ease;
}


.mini-score strong {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  color: white;

  font-size: 19px;
}


.match-label {
  color: #687286;

  font-size: 8px;

  font-weight: 700;

  letter-spacing:
    0.12em;
}


.match-content h3 {
  margin:
    6px 0;

  color: #dce1ea;

  font-size: 16px;
}


.match-content p {
  max-width: 240px;

  margin: 0;

  color: #596477;

  font-size: 10px;

  line-height: 1.6;
}


/* =========================================================
   JOB CARD
========================================================= */

.job-card {
  margin-top: 15px;

  padding: 25px;
}


.card-heading {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 20px;
}


.card-heading h3 {
  margin: 0;

  color: #dce1ea;

  font-size: 16px;
}


.analysis-date {
  color: #596477;

  font-size: 9px;
}


.job-description {
  margin-top: 18px;

  padding: 16px;

  max-height: 160px;

  overflow-y: auto;

  border:
    1px solid
    rgba(255,255,255,0.05);

  border-radius: 12px;

  color: #7d8798;

  background:
    rgba(255,255,255,0.018);

  font-size: 11px;

  line-height: 1.8;

  white-space: pre-line;
}


/* =========================================================
   MAIN GRID
========================================================= */

.main-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 15px;

  margin-top: 15px;
}


.skills-card,
.summary-card {
  padding: 25px;
}


.count {
  min-width: 25px;

  height: 25px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 8px;

  color: #a5b4fc;

  background:
    rgba(99,102,241,0.08);

  font-size: 10px;
}


.skills-list {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 8px;

  margin-top: 22px;
}


.skill-item {
  display: flex;

  align-items: center;

  gap: 8px;

  padding:
    9px 10px;

  border:
    1px solid
    rgba(129,140,248,0.12);

  border-radius: 9px;

  color: #aeb8ca;

  background:
    rgba(99,102,241,0.045);

  font-size: 10px;

  animation:
    skill-enter
    0.4s
    ease both;
}


@keyframes skill-enter {

  from {
    opacity: 0;

    transform:
      translateY(6px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }

}


.skill-check {
  color: #22d3ee;

  font-weight: 700;
}


.summary-content {
  display: flex;

  gap: 13px;

  margin-top: 23px;

  padding: 17px;

  border:
    1px solid
    rgba(255,255,255,0.05);

  border-radius: 12px;

  background:
    rgba(255,255,255,0.018);
}


.summary-icon {
  width: 30px;

  height: 30px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 8px;

  color: #a5b4fc;

  background:
    rgba(99,102,241,0.08);
}


.summary-content p {
  margin: 0;

  color: #8a94a6;

  font-size: 11px;

  line-height: 1.8;
}


/* =========================================================
   INSIGHTS
========================================================= */

.insights-card {
  margin-top: 15px;

  padding: 25px;
}


.ai-badge {
  padding:
    6px 9px;

  border:
    1px solid
    rgba(129,140,248,0.16);

  border-radius: 7px;

  color: #a5b4fc;

  background:
    rgba(99,102,241,0.06);

  font-size: 8px;

  font-weight: 700;

  letter-spacing:
    0.08em;
}


.insights-grid {
  display: grid;

  grid-template-columns:
    repeat(2,1fr);

  gap: 10px;

  margin-top: 22px;
}


.insight {
  display: flex;

  align-items: flex-start;

  gap: 12px;

  padding: 14px;

  border:
    1px solid
    rgba(255,255,255,0.05);

  border-radius: 11px;

  background:
    rgba(255,255,255,0.018);
}


.insight-number {
  color: #6366f1;

  font-family:
    monospace;

  font-size: 10px;

  font-weight: 700;
}


.insight p {
  margin: 0;

  color: #8791a3;

  font-size: 10px;

  line-height: 1.6;
}


/* =========================================================
   ACTIONS
========================================================= */

.rv-actions {
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 20px;
}


.secondary-btn,
.primary-btn {
  padding:
    11px 15px;

  border-radius: 10px;

  cursor: pointer;

  font-size: 10px;

  font-weight: 700;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}


.secondary-btn {
  border:
    1px solid
    rgba(255,255,255,0.08);

  color: #8993a5;

  background:
    rgba(255,255,255,0.02);
}


.primary-btn {
  border: none;

  color: white;

  background:
    linear-gradient(
      100deg,
      #6366f1,
      #06b6d4
    );

  box-shadow:
    0 10px 25px
    rgba(99,102,241,0.18);
}


.secondary-btn:hover,
.primary-btn:hover {
  transform:
    translateY(-2px);
}


.primary-btn span {
  margin-left: 7px;

  font-size: 13px;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 800px) {

  .recruiter-view {
    padding:
      90px 15px;
  }


  .rv-header {
    align-items:
      flex-start;

    flex-direction:
      column;
  }


  .top-grid,
  .main-grid {
    grid-template-columns:
      1fr;
  }


  .insights-grid {
    grid-template-columns:
      1fr;
  }

}


@media (max-width: 500px) {

  .rv-header h2 {
    font-size: 38px;
  }


  .candidate-card,
  .match-card,
  .job-card,
  .skills-card,
  .summary-card,
  .insights-card {
    padding: 20px;
  }


  .skills-list {
    grid-template-columns:
      1fr;
  }


  .match-content {
    gap: 12px;
  }


  .mini-score {
    width: 75px;

    height: 75px;
  }


  .rv-actions {
    flex-direction:
      column;
  }


  .secondary-btn,
  .primary-btn {
    width: 100%;
  }

}

</style>