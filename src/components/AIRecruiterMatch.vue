<template>
  <section id="ai-recruiter" class="ai-match-section">
    <div class="ai-match-container">

      <!-- HEADER -->
      <div class="ai-match-header">
        <div class="eyebrow">
          <span class="eyebrow-line"></span>
          AI RECRUITER MATCH
        </div>

        <h2>
          Find the right
          <span>skills for the role.</span>
        </h2>

        <p>
          Paste a job description and let AI analyze the role against
          my skills, technologies and portfolio projects.
        </p>
      </div>

      <!-- AI CARD -->
      <div class="ai-match-card">

        <div class="card-top">
          <div>
            <span class="card-label">JOB DESCRIPTION</span>

            <h3>
              Tell me what you're looking for.
            </h3>
          </div>

          <div class="ai-status">
            <span class="status-dot"></span>
            AI READY
          </div>
        </div>

        <!-- INPUT -->
        <textarea
          v-model="jobDescription"
          placeholder="Paste job description here..."
          :disabled="loading"
        ></textarea>

        <div class="input-footer">

          <span class="character-count">
            {{ jobDescription.length }} characters
          </span>

          <button
            class="analyze-button"
            :disabled="loading || !jobDescription.trim()"
            @click="analyzeJob"
          >
            <span v-if="!loading">
              Analyze with AI
            </span>

            <span v-else>
              Analyzing...
            </span>

            <span class="button-arrow">
              ↗
            </span>
          </button>

        </div>

        <!-- ERROR -->
        <div
          v-if="error"
          class="error-message"
        >
          {{ error }}
        </div>

        <!-- RESULT -->
        <div
          v-if="result"
          class="ai-result"
        >

          <div class="result-heading">

            <div>
              <span class="card-label">
                AI ANALYSIS
              </span>

              <h3>
                Recruiter match results
              </h3>
            </div>

            <div class="match-score">

              <span>
                {{ result.matchScore }}%
              </span>

              <small>
                MATCH
              </small>

            </div>

          </div>


          <div class="result-grid">

            <!-- MATCHING SKILLS -->
            <div class="result-box">

              <span class="result-box-label">
                MATCHING SKILLS
              </span>

              <div class="tag-list">

                <span
                  v-for="skill in result.matchingSkills"
                  :key="skill"
                  class="result-tag"
                >
                  ✓ {{ skill }}
                </span>

              </div>

            </div>


            <!-- MISSING SKILLS -->
            <div class="result-box">

              <span class="result-box-label">
                MISSING SKILLS
              </span>

              <div class="tag-list">

                <span
                  v-for="skill in result.missingSkills"
                  :key="skill"
                  class="result-tag muted"
                >
                  {{ skill }}
                </span>

              </div>

            </div>


            <!-- PROJECTS -->
            <div class="result-box">

              <span class="result-box-label">
                RELEVANT PROJECTS
              </span>

              <div class="project-list">

                <div
                  v-for="project in result.relevantProjects"
                  :key="project"
                  class="project-item"
                >
                  <span>↗</span>

                  {{ project }}
                </div>

              </div>

            </div>


            <!-- SUMMARY -->
            <div class="result-box summary-box">

              <span class="result-box-label">
                AI SUMMARY
              </span>

              <p>
                {{ result.summary }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";


/* =========================================================
   STATE
========================================================= */

const jobDescription = ref("");

const loading = ref(false);

const error = ref("");

const result = ref(null);


/* =========================================================
   PORTFOLIO DATA
========================================================= */

const portfolioSkills = [
  "Vue.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Vue Router",
  "REST API",
  "Node.js",
  "Responsive Design",
  "AI Integration",
];


const portfolioProjects = [
  "Attendo Event Management Dashboard",
  "AI-Powered Developer Portfolio",
  "Modern Vue.js Web Applications",
];


/* =========================================================
   FALLBACK MATCHING
========================================================= */

const fallbackAnalysis = (text) => {

  const normalized =
    text.toLowerCase();


  const matchingSkills =
    portfolioSkills.filter(
      (skill) =>
        normalized.includes(
          skill.toLowerCase()
        )
    );


  const missingSkills =
    portfolioSkills
      .filter(
        (skill) =>
          !matchingSkills.includes(skill)
      )
      .slice(0, 4);


  const matchScore =
    Math.min(
      98,
      Math.max(
        45,
        55 + matchingSkills.length * 5
      )
    );


  return {

    matchScore,

    matchingSkills:
      matchingSkills.length
        ? matchingSkills
        : [
            "Frontend Development",
            "Responsive Design",
          ],

    missingSkills,

    relevantProjects:
      portfolioProjects.slice(0, 3),

    summary:
      "The role has a strong overlap with my frontend development experience, especially around modern Vue.js interfaces, responsive design, API integration and AI-powered web experiences.",
  };
};


/* =========================================================
   PARSE AI RESPONSE
========================================================= */

const parseAIResponse = (reply) => {

  try {

    const parsed =
      JSON.parse(reply);


    return {

      matchScore:
        Number(parsed.matchScore) || 0,

      matchingSkills:
        Array.isArray(
          parsed.matchingSkills
        )
          ? parsed.matchingSkills
          : [],

      missingSkills:
        Array.isArray(
          parsed.missingSkills
        )
          ? parsed.missingSkills
          : [],

      relevantProjects:
        Array.isArray(
          parsed.relevantProjects
        )
          ? parsed.relevantProjects
          : [],

      summary:
        parsed.summary ||
        "The AI completed the recruiter analysis.",
    };

  } catch {

    return null;

  }
};


/* =========================================================
   AI ANALYSIS
========================================================= */

const analyzeJob = async () => {

  if (!jobDescription.value.trim()) {
    return;
  }


  loading.value = true;

  error.value = "";

  result.value = null;


  try {

    const response =
      await fetch(
        "http://localhost:3000/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            message: `
You are an AI recruiter assistant for a frontend developer portfolio.

Analyze the following job description against this portfolio.

Portfolio skills:
${portfolioSkills.join(", ")}

Portfolio projects:
${portfolioProjects.join(", ")}

Job description:
${jobDescription.value}

Return ONLY valid JSON in this exact structure:

{
  "matchScore": 87,
  "matchingSkills": ["Vue.js", "JavaScript"],
  "missingSkills": ["TypeScript"],
  "relevantProjects": ["Project name"],
  "summary": "Short recruiter-focused summary."
}

matchScore must be a number from 0 to 100.
            `,
          }),
        }
      );


    if (!response.ok) {
      throw new Error(
        "AI server request failed."
      );
    }


    const data =
      await response.json();


    const reply =
      data.reply ||
      data.message ||
      "";


    const parsed =
      parseAIResponse(reply);


    result.value =
      parsed && parsed.matchScore
        ? parsed
        : fallbackAnalysis(
            jobDescription.value
          );


  } catch (err) {

    console.error(err);


    /*
      If local AI server is unavailable,
      portfolio matching still works.
    */

    result.value =
      fallbackAnalysis(
        jobDescription.value
      );


    error.value =
      "AI server unavailable — showing local portfolio matching.";

  } finally {

    loading.value = false;

  }
};
</script>


<style scoped>

/* =========================================================
   SECTION
========================================================= */

.ai-match-section {

  position: relative;

  padding: 120px 0;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 30%,
      rgba(124, 58, 237, 0.08),
      transparent 32%
    ),
    radial-gradient(
      circle at 90% 70%,
      rgba(6, 182, 212, 0.06),
      transparent 32%
    ),
    var(--bg-primary, #080b12);

  color:
    var(--text-primary, #ffffff);
}


.ai-match-container {

  position: relative;

  z-index: 2;

  width:
    min(
      calc(100% - 40px),
      1200px
    );

  margin: 0 auto;
}


/* =========================================================
   HEADER
========================================================= */

.ai-match-header {

  max-width: 720px;

  margin-bottom: 55px;
}


.eyebrow {

  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 18px;

  color: #a78bfa;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.2em;
}


.eyebrow-line {

  width: 28px;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      #8b5cf6,
      #22d3ee
    );
}


.ai-match-header h2 {

  margin: 0;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size:
    clamp(
      42px,
      5vw,
      68px
    );

  line-height: 0.98;

  letter-spacing: -0.06em;
}


.ai-match-header h2 span {

  display: block;

  color: transparent;

  background:
    linear-gradient(
      100deg,
      #8b5cf6,
      #22d3ee
    );

  background-clip: text;

  -webkit-background-clip: text;
}


.ai-match-header p {

  max-width: 620px;

  margin: 22px 0 0;

  color: #8f96a8;

  font-size: 14px;

  line-height: 1.8;
}


/* =========================================================
   MAIN CARD
========================================================= */

.ai-match-card {

  position: relative;

  padding: 34px;

  overflow: hidden;

  border:
    1px solid
    rgba(139, 92, 246, 0.18);

  border-radius: 25px;

  background:
    linear-gradient(
      145deg,
      rgba(124, 58, 237, 0.09),
      rgba(255, 255, 255, 0.025)
    );

  box-shadow:
    0 30px 90px
    rgba(0, 0, 0, 0.25);

  backdrop-filter:
    blur(20px);
}


.ai-match-card::before {

  content: "";

  position: absolute;

  width: 400px;

  height: 400px;

  right: -180px;

  top: -220px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.18),
      transparent 70%
    );

  pointer-events: none;
}


/* =========================================================
   CARD TOP
========================================================= */

.card-top,
.result-heading {

  position: relative;

  z-index: 2;

  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 20px;
}


.card-label,
.result-box-label {

  color: #8b5cf6;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 0.16em;
}


.card-top h3,
.result-heading h3 {

  margin:
    8px 0 0;

  color: #ffffff;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size: 22px;

  letter-spacing: -0.035em;
}


/* =========================================================
   STATUS
========================================================= */

.ai-status {

  display: flex;

  align-items: center;

  gap: 8px;

  padding:
    7px 10px;

  border:
    1px solid
    rgba(34, 211, 238, 0.15);

  border-radius: 999px;

  color: #67e8f9;

  background:
    rgba(34, 211, 238, 0.05);

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 0.12em;

  white-space: nowrap;
}


.status-dot {

  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow:
    0 0 12px
    rgba(34, 211, 238, 0.8);
}


/* =========================================================
   TEXTAREA
========================================================= */

textarea {

  position: relative;

  z-index: 2;

  width: 100%;

  min-height: 190px;

  margin-top: 28px;

  padding: 18px;

  box-sizing: border-box;

  resize: vertical;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 14px;

  outline: none;

  background:
    rgba(0, 0, 0, 0.18);

  color: #ffffff;

  font: inherit;

  font-size: 13px;

  line-height: 1.7;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}


textarea::placeholder {
  color: #646b7b;
}


textarea:focus {

  border-color:
    rgba(139, 92, 246, 0.4);

  box-shadow:
    0 0 0 3px
    rgba(139, 92, 246, 0.06);
}


/* =========================================================
   BUTTON
========================================================= */

.input-footer {

  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin-top: 15px;
}


.character-count {

  color: #646b7b;

  font-size: 10px;
}


.analyze-button {

  display: inline-flex;

  align-items: center;

  gap: 18px;

  padding:
    13px 17px;

  border: 0;

  border-radius: 10px;

  background:
    linear-gradient(
      110deg,
      #7c3aed,
      #0891b2
    );

  color: #ffffff;

  font-size: 10px;

  font-weight: 800;

  cursor: pointer;

  box-shadow:
    0 10px 30px
    rgba(124, 58, 237, 0.2);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}


.analyze-button:hover:not(:disabled) {

  transform:
    translateY(-3px);

  box-shadow:
    0 18px 45px
    rgba(124, 58, 237, 0.35);
}


.analyze-button:disabled {

  opacity: 0.5;

  cursor: not-allowed;
}


.button-arrow {
  font-size: 15px;
}


/* =========================================================
   ERROR
========================================================= */

.error-message {

  position: relative;

  z-index: 2;

  margin-top: 16px;

  color: #fbbf24;

  font-size: 11px;
}


/* =========================================================
   RESULT
========================================================= */

.ai-result {

  position: relative;

  z-index: 2;

  margin-top: 32px;

  padding-top: 30px;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.07);
}


.match-score {

  display: flex;

  flex-direction: column;

  align-items: flex-end;
}


.match-score span {

  color: #67e8f9;

  font-family:
    "Space Grotesk",
    Inter,
    sans-serif;

  font-size: 38px;

  font-weight: 800;

  line-height: 1;
}


.match-score small {

  margin-top: 4px;

  color: #737b8c;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 0.15em;
}


/* =========================================================
   RESULT GRID
========================================================= */

.result-grid {

  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 14px;

  margin-top: 24px;
}


.result-box {

  min-height: 130px;

  padding: 20px;

  border:
    1px solid
    rgba(255, 255, 255, 0.07);

  border-radius: 15px;

  background:
    rgba(255, 255, 255, 0.025);
}


/* =========================================================
   TAGS
========================================================= */

.tag-list {

  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 15px;
}


.result-tag {

  padding:
    6px 8px;

  border:
    1px solid
    rgba(34, 211, 238, 0.12);

  border-radius: 7px;

  color: #a5f3fc;

  background:
    rgba(34, 211, 238, 0.04);

  font-size: 9px;

  font-weight: 700;
}


.result-tag.muted {

  border-color:
    rgba(255, 255, 255, 0.07);

  color: #8f96a8;

  background:
    rgba(255, 255, 255, 0.025);
}


/* =========================================================
   PROJECTS
========================================================= */

.project-list {

  display: flex;

  flex-direction: column;

  gap: 9px;

  margin-top: 15px;
}


.project-item {

  display: flex;

  align-items: center;

  gap: 9px;

  color: #c7ccd6;

  font-size: 11px;
}


.project-item span {
  color: #a78bfa;
}


/* =========================================================
   SUMMARY
========================================================= */

.summary-box p {

  margin:
    15px 0 0;

  color: #8f96a8;

  font-size: 11px;

  line-height: 1.75;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 700px) {

  .ai-match-section {
    padding: 90px 0;
  }

  .ai-match-container {
    width:
      calc(100% - 30px);
  }

  .ai-match-card {
    padding: 25px;
  }

  .card-top,
  .result-heading,
  .input-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .match-score {
    align-items: flex-start;
  }

  .result-grid {
    grid-template-columns: 1fr;
  }

  .analyze-button {
    width: 100%;
    justify-content: center;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .analyze-button,
  textarea {
    transition: none;
  }

}

</style>