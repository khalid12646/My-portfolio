<template>
  <section id="contact" class="contact-section">
    <div class="container">

      <!-- Section Heading -->
      <div class="section-heading">
        <p>Get In Touch</p>
        <h2>Let's Work <span>Together</span></h2>
      </div>

      <div class="contact-grid">

        <!-- Left Side -->
       <div class="contact-info" v-reveal>

          <h3>Have a project in mind?</h3>

          <p>
            I'm always open to discussing new projects, creative
            ideas and opportunities. Feel free to get in touch.
          </p>

          <div class="contact-details">

            <a href="mailto:your-email@example.com" class="contact-item">
              <div class="contact-icon">
                ✉️
              </div>

              <div>
                <span>Email</span>
                <strong>your-email@example.com</strong>
              </div>
            </a>

            <a href="tel:+923000000000" class="contact-item">
              <div class="contact-icon">
                📱
              </div>

              <div>
                <span>Phone</span>
                <strong>+92 300 0000000</strong>
              </div>
            </a>

            <div class="contact-item">
              <div class="contact-icon">
                📍
              </div>

              <div>
                <span>Location</span>
                <strong>Lahore, Pakistan</strong>
              </div>
            </div>

          </div>

        </div>


        <!-- Right Side -->
        <form
  class="contact-form"
  v-reveal
  @submit.prevent="submitForm"
>

          <div class="form-group">
            <label for="name">Your Name</label>

            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>


          <div class="form-group">
            <label for="email">Your Email</label>

            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>


          <div class="form-group">
            <label for="subject">Subject</label>

            <input
              id="subject"
              v-model="form.subject"
              type="text"
              placeholder="Project subject"
              required
            />
          </div>


          <div class="form-group">
            <label for="message">Message</label>

            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>


          <button type="submit" class="contact-submit">
            Send Message
            <span>↗</span>
          </button>

        </form>

      </div>

    </div>
  </section>
</template>


<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Contact Form:', form)

  alert('Thank you! Your message has been submitted.')

  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>
<style scoped>
/* ========================================
   CONTACT SECTION
======================================== */

.contact-section {
  padding: 120px 0;
  background: var(--bg-secondary);
}


/* ========================================
   CONTACT GRID
======================================== */

.contact-grid {
  display: grid;

  grid-template-columns: 0.8fr 1.2fr;

  gap: 70px;

  align-items: start;
}


/* ========================================
   CONTACT INFO
======================================== */

.contact-info h3 {
  margin-bottom: 20px;

  color: var(--text-primary);

  font-size: 32px;
}

.contact-info > p {
  max-width: 500px;

  margin-bottom: 35px;

  color: var(--text-secondary);

  font-size: 16px;

  line-height: 1.8;
}


/* ========================================
   CONTACT DETAILS
======================================== */

.contact-details {
  display: flex;

  flex-direction: column;

  gap: 18px;
}

.contact-item {
  display: flex;

  align-items: center;

  gap: 18px;

  padding: 18px;

  background: var(--bg-primary);

  border: 1px solid var(--border);

  border-radius: 12px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.contact-item:hover {
  transform: translateX(6px);

  border-color: var(--accent);
}

.contact-icon {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 10px;

  background: rgba(99, 102, 241, 0.12);

  font-size: 20px;
}

.contact-item span {
  display: block;

  margin-bottom: 4px;

  color: var(--text-secondary);

  font-size: 12px;
}

.contact-item strong {
  color: var(--text-primary);

  font-size: 14px;

  font-weight: 600;
}


/* ========================================
   CONTACT FORM
======================================== */

.contact-form {
  padding: 35px;

  background: var(--bg-primary);

  border: 1px solid var(--border);

  border-radius: 16px;
}


/* ========================================
   FORM GROUP
======================================== */

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;

  margin-bottom: 8px;

  color: var(--text-primary);

  font-size: 14px;

  font-weight: 600;
}


/* ========================================
   INPUTS
======================================== */

.form-group input,
.form-group textarea {
  width: 100%;

  padding: 14px 16px;

  border: 1px solid var(--border);

  border-radius: 8px;

  outline: none;

  background: var(--bg-secondary);

  color: var(--text-primary);

  font-family: inherit;

  font-size: 14px;

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.form-group textarea {
  resize: vertical;

  min-height: 140px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-secondary);

  opacity: 0.7;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent);

  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}


/* ========================================
   SUBMIT BUTTON
======================================== */

.contact-submit {
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 14px 25px;

  border: none;

  border-radius: 8px;

  background: var(--accent);

  color: white;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.contact-submit:hover {
  transform: translateY(-3px);

  opacity: 0.9;
}

.contact-submit span {
  font-size: 18px;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

  .contact-grid {
    grid-template-columns: 1fr;

    gap: 50px;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .contact-section {
    padding: 80px 0;
  }

  .contact-info {
    text-align: center;
  }

  .contact-info > p {
    margin-left: auto;
    margin-right: auto;
  }

  .contact-form {
    padding: 25px 20px;
  }

}
</style>