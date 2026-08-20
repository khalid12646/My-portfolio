<template>
  <div class="chatbot">

    <!-- Floating AI Button -->
    <Transition name="float">
      <button
        v-if="!isOpen"
        class="chat-button"
        @click="openChat"
        aria-label="Open AI assistant"
      >
        <span class="button-glow"></span>
        <span class="bot-icon">✦</span>
        <span class="notification-dot"></span>
      </button>
    </Transition>

    <!-- Chat Window -->
    <Transition name="chat">
      <div
        v-if="isOpen"
        class="chat-window"
      >

        <!-- Header -->
        <header class="chat-header">

          <div class="header-left">

            <div class="bot-avatar">
              <span>✦</span>
              <div class="avatar-glow"></div>
            </div>

            <div class="bot-info">
              <div class="title-row">
                <h3>Khalid AI</h3>
                <span class="ai-badge">AI</span>
              </div>

              <div class="online-status">
                <span class="status-dot"></span>
                <span>Local AI · Qwen 2.5</span>
              </div>
            </div>

          </div>

          <div class="header-actions">

            <button
              class="header-button"
              type="button"
              @click="clearChat"
              title="Clear conversation"
              aria-label="Clear conversation"
            >
              <span>⌫</span>
            </button>

            <button
              class="header-button close"
              type="button"
              @click="closeChat"
              title="Close"
              aria-label="Close AI assistant"
            >
              ×
            </button>

          </div>

        </header>

        <!-- AI Status Banner -->
        <div class="ai-status-banner">
          <div class="status-icon">
            ✦
          </div>

          <div>
            <strong>Portfolio AI Assistant</strong>
            <span>
              Ask about Khalid's skills, projects & experience
            </span>
          </div>
        </div>

        <!-- Messages -->
        <div
          ref="messagesContainer"
          class="messages"
        >

          <!-- Conversation -->
          <TransitionGroup name="message">

            <div
              v-for="(message, index) in messages"
              :key="`${index}-${message.role}`"
              :class="[
                'message',
                message.role === 'user'
                  ? 'user-message'
                  : 'ai-message'
              ]"
            >

              <!-- AI Avatar -->
              <div
                v-if="message.role !== 'user'"
                class="message-avatar"
              >
                ✦
              </div>

              <div class="message-body">

                <div class="message-content">
                  {{ message.content }}
                </div>

                <span class="message-time">
                  {{ formatTime(message.time) }}
                </span>

              </div>

            </div>

          </TransitionGroup>

          <!-- Suggested Questions -->
          <div
            v-if="
              messages.length === 1 &&
              !isLoading
            "
            class="suggested-section"
          >

            <div class="suggested-heading">
              <span>Quick questions</span>
              <span class="sparkle">✦</span>
            </div>

            <div class="suggested-grid">

              <button
                type="button"
                @click="
                  askQuestion(
                    `What are Khalid's skills?`
                  )
                "
              >
                <span class="suggestion-icon">
                  ◈
                </span>

                <span>
                  What are Khalid's skills?
                </span>

                <span class="arrow">
                  →
                </span>
              </button>

              <button
                type="button"
                @click="
                  askQuestion(
                    'Tell me about Attendo.'
                  )
                "
              >
                <span class="suggestion-icon">
                  ◉
                </span>

                <span>
                  Tell me about Attendo
                </span>

                <span class="arrow">
                  →
                </span>
              </button>

              <button
                type="button"
                @click="
                  askQuestion(
                    'What projects has Khalid worked on?'
                  )
                "
              >
                <span class="suggestion-icon">
                  ◆
                </span>

                <span>
                  Khalid's projects
                </span>

                <span class="arrow">
                  →
                </span>
              </button>

              <button
                type="button"
                @click="
                  askQuestion(
                    'What technologies does Khalid use?'
                  )
                "
              >
                <span class="suggestion-icon">
                  ⌘
                </span>

                <span>
                  Technologies he uses
                </span>

                <span class="arrow">
                  →
                </span>
              </button>

            </div>

          </div>

          <!-- Loading -->
          <div
            v-if="isLoading"
            class="message ai-message loading-message"
          >

            <div class="message-avatar">
              ✦
            </div>

            <div class="message-body">

              <div class="typing-content">

                <div class="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>
                  Thinking...
                </span>

              </div>

            </div>

          </div>

          <!-- Error -->
          <Transition name="error">

            <div
              v-if="errorMessage"
              class="error-box"
            >

              <div class="error-info">
                <span class="error-icon">!</span>

                <span>
                  {{ errorMessage }}
                </span>
              </div>

              <button
                type="button"
                @click="retryMessage"
                :disabled="isLoading"
              >
                Retry
              </button>

            </div>

          </Transition>

        </div>

        <!-- Input -->
        <form
          class="chat-input-wrapper"
          @submit.prevent="sendMessage"
        >

          <div class="input-box">

            <input
              ref="inputRef"
              v-model="userMessage"
              type="text"
              placeholder="Ask Khalid AI anything..."
              :disabled="isLoading"
              autocomplete="off"
              maxlength="500"
              @keydown.escape="closeChat"
            />

            <div class="input-actions">

              <span
                v-if="userMessage.length > 0"
                class="character-count"
              >
                {{ userMessage.length }}/500
              </span>

              <button
                type="submit"
                class="send-button"
                :disabled="
                  isLoading ||
                  !userMessage.trim()
                "
                aria-label="Send message"
              >
                <span>↑</span>
              </button>

            </div>

          </div>

        </form>

        <!-- Footer -->
        <footer class="chat-footer">

          <span class="footer-dot"></span>

          <span>
            Powered by local AI
          </span>

          <span class="footer-divider">·</span>

          <strong>
            Qwen 2.5
          </strong>

        </footer>

      </div>
    </Transition>

  </div>
</template>

<script setup>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";

/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/

const isOpen = ref(false);

const userMessage = ref("");

const isLoading = ref(false);

const messagesContainer = ref(null);

const inputRef = ref(null);

const errorMessage = ref("");

const lastFailedMessage = ref("");

/*
|--------------------------------------------------------------------------
| Initial Message
|--------------------------------------------------------------------------
*/

const initialMessage = {
  role: "assistant",

  content:
    "Hi! 👋 I'm Khalid's AI assistant. Ask me about his skills, projects, technologies, experience, or anything related to his portfolio.",

  time: new Date(),
};

const messages = ref([
  { ...initialMessage },
]);

/*
|--------------------------------------------------------------------------
| Open / Close Chat
|--------------------------------------------------------------------------
*/

const openChat = async () => {
  isOpen.value = true;

  await nextTick();

  scrollToBottom();

  setTimeout(() => {
    inputRef.value?.focus();
  }, 250);
};

const closeChat = () => {
  isOpen.value = false;
};

/*
|--------------------------------------------------------------------------
| Navbar AI Button
|--------------------------------------------------------------------------
*/

const openFromNavbar = () => {
  openChat();
};

/*
|--------------------------------------------------------------------------
| Scroll
|--------------------------------------------------------------------------
*/

const scrollToBottom = async () => {
  await nextTick();

  if (!messagesContainer.value) {
    return;
  }

  messagesContainer.value.scrollTo({
    top: messagesContainer.value.scrollHeight,
    behavior: "smooth",
  });
};

/*
|--------------------------------------------------------------------------
| Clear Chat
|--------------------------------------------------------------------------
*/

const clearChat = async () => {
  messages.value = [
    {
      ...initialMessage,
      time: new Date(),
    },
  ];

  userMessage.value = "";

  errorMessage.value = "";

  lastFailedMessage.value = "";

  await scrollToBottom();

  setTimeout(() => {
    inputRef.value?.focus();
  }, 100);
};

/*
|--------------------------------------------------------------------------
| Suggested Questions
|--------------------------------------------------------------------------
*/

const askQuestion = async (question) => {
  if (isLoading.value) {
    return;
  }

  userMessage.value = question;

  await sendMessage();
};

/*
|--------------------------------------------------------------------------
| Format Time
|--------------------------------------------------------------------------
*/

const formatTime = (time) => {
  if (!time) {
    return "";
  }

  const date =
    time instanceof Date
      ? time
      : new Date(time);

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

/*
|--------------------------------------------------------------------------
| Send Message
|--------------------------------------------------------------------------
*/

const sendMessage = async () => {
  const message =
    userMessage.value.trim();

  if (
    !message ||
    isLoading.value
  ) {
    return;
  }

  errorMessage.value = "";

  lastFailedMessage.value = "";

  /*
   * Add user message
   */

  messages.value.push({
    role: "user",
    content: message,
    time: new Date(),
  });

  /*
   * Clear input
   */

  userMessage.value = "";

  /*
   * Start loading
   */

  isLoading.value = true;

  await scrollToBottom();

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
          message,

          history:
            messages.value
              .slice(0, -1)
              .map((item) => ({
                role: item.role,
                content: item.content,
              })),
        }),
      }
    );

    const data =
      await response.json();

    /*
     * Handle server error
     */

    if (!response.ok) {
      throw new Error(
        data.error ||
          "Something went wrong"
      );
    }

    /*
     * Add AI response
     */

    messages.value.push({
      role: "assistant",

      content:
        data.reply ||
        "I couldn't generate a response.",

      time: new Date(),
    });

  } catch (error) {

    console.error(
      "Chat error:",
      error
    );

    errorMessage.value =
      "Unable to connect to the local AI server.";

    lastFailedMessage.value =
      message;

  } finally {

    isLoading.value = false;

    await scrollToBottom();

    setTimeout(() => {
      inputRef.value?.focus();
    }, 100);
  }
};

/*
|--------------------------------------------------------------------------
| Retry
|--------------------------------------------------------------------------
*/

const retryMessage = async () => {
  if (
    !lastFailedMessage.value ||
    isLoading.value
  ) {
    return;
  }

  const message =
    lastFailedMessage.value;

  errorMessage.value = "";

  lastFailedMessage.value = "";

  userMessage.value = message;

  await sendMessage();
};

/*
|--------------------------------------------------------------------------
| Navbar Event Listener
|--------------------------------------------------------------------------
*/

onMounted(() => {
  window.addEventListener(
    "open-ai-assistant",
    openFromNavbar
  );
});

/*
|--------------------------------------------------------------------------
| Cleanup
|--------------------------------------------------------------------------
*/

onBeforeUnmount(() => {
  window.removeEventListener(
    "open-ai-assistant",
    openFromNavbar
  );
});
</script>

<style scoped>

/* =========================================================
   ROOT
========================================================= */

.chatbot {
  position: fixed;

  right: 26px;
  bottom: 26px;

  z-index: 9999;

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

/* =========================================================
   FLOATING BUTTON
========================================================= */

.chat-button {
  position: relative;

  width: 64px;
  height: 64px;

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 20px;

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #06b6d4
    );

  color: white;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 15px 45px
    rgba(124, 58, 237, 0.35);

  overflow: visible;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.chat-button:hover {
  transform:
    translateY(-5px)
    scale(1.04);

  box-shadow:
    0 20px 55px
    rgba(124, 58, 237, 0.45);
}

.button-glow {
  position: absolute;

  inset: -5px;

  border-radius: 24px;

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #06b6d4
    );

  opacity: 0.25;

  filter: blur(12px);

  z-index: -1;

  animation:
    button-glow 2.5s infinite;
}

@keyframes button-glow {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.95);
  }

  50% {
    opacity: 0.45;
    transform: scale(1.08);
  }
}

.bot-icon {
  font-size: 25px;

  animation:
    sparkle 2s infinite;
}

@keyframes sparkle {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform:
      rotate(12deg)
      scale(1.12);
  }
}

.notification-dot {
  position: absolute;

  top: 4px;
  right: 4px;

  width: 10px;
  height: 10px;

  border: 2px solid
    var(--bg-primary, white);

  border-radius: 50%;

  background: #22c55e;
}

/* =========================================================
   CHAT WINDOW
========================================================= */

.chat-window {
  width: 400px;
  height: 620px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border: 1px solid
    var(--border, rgba(0, 0, 0, 0.08));

  border-radius: 24px;

  background:
    var(
      --bg-secondary,
      #ffffff
    );

  box-shadow:
    0 30px 100px
    rgba(0, 0, 0, 0.22),
    0 8px 30px
    rgba(124, 58, 237, 0.12);

  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

/* =========================================================
   HEADER
========================================================= */

.chat-header {
  min-height: 72px;

  padding: 13px 15px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  color: white;

  background:
    linear-gradient(
      135deg,
      #111827,
      #1e1b4b 60%,
      #172554
    );

  border-bottom: 1px solid
    rgba(255, 255, 255, 0.08);
}

.header-left {
  display: flex;

  align-items: center;

  gap: 11px;
}

.bot-avatar {
  position: relative;

  width: 42px;
  height: 42px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.8),
      rgba(6, 182, 212, 0.65)
    );

  font-size: 19px;

  overflow: hidden;
}

.avatar-glow {
  position: absolute;

  width: 25px;
  height: 25px;

  border-radius: 50%;

  background: white;

  opacity: 0.08;

  filter: blur(8px);

  animation:
    avatar-glow 2s infinite;
}

@keyframes avatar-glow {
  0%,
  100% {
    transform: translate(-10px, -8px);
  }

  50% {
    transform: translate(10px, 8px);
  }
}

.bot-info {
  display: flex;

  flex-direction: column;

  gap: 3px;
}

.title-row {
  display: flex;

  align-items: center;

  gap: 7px;
}

.chat-header h3 {
  margin: 0;

  font-size: 15px;

  font-weight: 700;

  letter-spacing: -0.02em;
}

.ai-badge {
  padding: 2px 6px;

  border: 1px solid
    rgba(255, 255, 255, 0.15);

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.08);

  color: #c4b5fd;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 0.08em;
}

.online-status {
  display: flex;

  align-items: center;

  gap: 6px;

  color:
    rgba(255, 255, 255, 0.62);

  font-size: 10px;
}

.status-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow:
    0 0 10px
    rgba(34, 197, 94, 0.8);

  animation:
    online-pulse 2s infinite;
}

@keyframes online-pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.45;
  }
}

.header-actions {
  display: flex;

  align-items: center;

  gap: 5px;
}

.header-button {
  width: 34px;
  height: 34px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.06);

  color: rgba(255, 255, 255, 0.8);

  cursor: pointer;

  font-size: 14px;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;
}

.header-button:hover {
  background:
    rgba(255, 255, 255, 0.12);

  color: white;

  transform: translateY(-1px);
}

.header-button.close {
  font-size: 23px;
}

/* =========================================================
   STATUS BANNER
========================================================= */

.ai-status-banner {
  margin: 12px 13px 2px;

  padding: 10px 11px;

  display: flex;

  align-items: center;

  gap: 10px;

  border: 1px solid
    rgba(124, 58, 237, 0.14);

  border-radius: 13px;

  background:
    linear-gradient(
      110deg,
      rgba(124, 58, 237, 0.07),
      rgba(6, 182, 212, 0.05)
    );
}

.status-icon {
  width: 31px;
  height: 31px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 9px;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.15),
      rgba(6, 182, 212, 0.12)
    );

  color:
    var(--accent, #7c3aed);

  font-size: 14px;
}

.ai-status-banner div:last-child {
  display: flex;

  flex-direction: column;

  gap: 2px;
}

.ai-status-banner strong {
  color:
    var(--text-primary, #111827);

  font-size: 11px;

  font-weight: 700;
}

.ai-status-banner span {
  color:
    var(--text-secondary, #6b7280);

  font-size: 9px;
}

/* =========================================================
   MESSAGES
========================================================= */

.messages {
  flex: 1;

  min-height: 0;

  padding: 14px;

  overflow-y: auto;

  display: flex;

  flex-direction: column;

  gap: 10px;

  background:
    var(
      --bg-primary,
      #f8fafc
    );

  scrollbar-width: thin;
}

.messages::-webkit-scrollbar {
  width: 5px;
}

.messages::-webkit-scrollbar-thumb {
  border-radius: 999px;

  background:
    rgba(107, 114, 128, 0.25);
}

/* =========================================================
   MESSAGE
========================================================= */

.message {
  display: flex;

  align-items: flex-end;

  gap: 7px;

  max-width: 88%;
}

.ai-message {
  align-self: flex-start;
}

.user-message {
  align-self: flex-end;

  flex-direction: row-reverse;
}

.message-avatar {
  width: 25px;
  height: 25px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid
    rgba(124, 58, 237, 0.12);

  border-radius: 8px;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.12),
      rgba(6, 182, 212, 0.08)
    );

  color:
    var(--accent, #7c3aed);

  font-size: 11px;
}

.message-body {
  display: flex;

  flex-direction: column;

  gap: 3px;

  min-width: 0;
}

.message-content {
  padding: 10px 12px;

  border-radius: 14px;

  font-size: 12px;

  line-height: 1.6;

  white-space: pre-wrap;

  word-break: break-word;
}

.ai-message .message-content {
  color:
    var(--text-primary, #111827);

  background:
    var(
      --card-bg,
      #e5e7eb
    );

  border:
    1px solid
    var(
      --border,
      rgba(0, 0, 0, 0.05)
    );

  border-bottom-left-radius: 4px;
}

.user-message .message-content {
  color: white;

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #5b21b6
    );

  border-bottom-right-radius: 4px;

  box-shadow:
    0 5px 18px
    rgba(124, 58, 237, 0.18);
}

.message-time {
  padding: 0 3px;

  color:
    var(
      --text-muted,
      #9ca3af
    );

  font-size: 8px;
}

.user-message .message-time {
  text-align: right;
}

/* =========================================================
   MESSAGE ANIMATION
========================================================= */

.message-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.message-enter-from {
  opacity: 0;

  transform:
    translateY(8px)
    scale(0.98);
}

/* =========================================================
   SUGGESTED QUESTIONS
========================================================= */

.suggested-section {
  margin-top: 3px;

  display: flex;

  flex-direction: column;

  gap: 8px;
}

.suggested-heading {
  display: flex;

  align-items: center;

  gap: 5px;

  color:
    var(
      --text-secondary,
      #6b7280
    );

  font-size: 10px;

  font-weight: 600;

  text-transform: uppercase;

  letter-spacing: 0.08em;
}

.sparkle {
  color:
    var(
      --accent,
      #7c3aed
    );
}

.suggested-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 7px;
}

.suggested-grid button {
  min-height: 58px;

  padding: 9px;

  display: grid;

  grid-template-columns:
    auto 1fr auto;

  align-items: center;

  gap: 7px;

  border: 1px solid
    var(
      --border,
      #e5e7eb
    );

  border-radius: 12px;

  background:
    var(
      --card-bg,
      white
    );

  color:
    var(
      --text-primary,
      #111827
    );

  text-align: left;

  font-size: 9px;

  line-height: 1.35;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.suggested-grid button:hover {
  transform:
    translateY(-2px);

  border-color:
    rgba(124, 58, 237, 0.3);

  background:
    rgba(124, 58, 237, 0.035);

  box-shadow:
    0 8px 25px
    rgba(124, 58, 237, 0.08);
}

.suggestion-icon {
  width: 23px;
  height: 23px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 7px;

  background:
    rgba(124, 58, 237, 0.08);

  color:
    var(
      --accent,
      #7c3aed
    );

  font-size: 11px;
}

.arrow {
  color:
    var(
      --text-muted,
      #9ca3af
    );

  transition:
    transform 0.2s ease;
}

.suggested-grid button:hover .arrow {
  transform:
    translateX(3px);

  color:
    var(
      --accent,
      #7c3aed
    );
}

/* =========================================================
   TYPING
========================================================= */

.loading-message {
  align-items: center;
}

.typing-content {
  display: flex;

  align-items: center;

  gap: 8px;

  padding: 10px 12px;

  border-radius: 14px;

  border-bottom-left-radius: 4px;

  background:
    var(
      --card-bg,
      #e5e7eb
    );

  color:
    var(
      --text-secondary,
      #6b7280
    );

  font-size: 10px;
}

.typing-dots {
  display: flex;

  align-items: center;

  gap: 3px;
}

.typing-dots span {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background:
    var(
      --accent,
      #7c3aed
    );

  animation:
    typing 1.2s
    infinite
    ease-in-out;
}

.typing-dots span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-dots span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);

    opacity: 0.4;
  }

  30% {
    transform: translateY(-4px);

    opacity: 1;
  }
}

/* =========================================================
   ERROR
========================================================= */

.error-box {
  padding: 9px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 8px;

  border: 1px solid
    rgba(239, 68, 68, 0.15);

  border-radius: 10px;

  background:
    rgba(239, 68, 68, 0.06);

  color: #991b1b;

  font-size: 10px;
}

.error-info {
  display: flex;

  align-items: center;

  gap: 7px;
}

.error-icon {
  width: 20px;
  height: 20px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    rgba(239, 68, 68, 0.12);

  font-weight: 800;
}

.error-box button {
  padding: 5px 8px;

  border: none;

  border-radius: 6px;

  background: #991b1b;

  color: white;

  font-size: 9px;

  cursor: pointer;
}

/* =========================================================
   INPUT
========================================================= */

.chat-input-wrapper {
  padding: 9px 11px 7px;

  background:
    var(
      --bg-secondary,
      white
    );

  border-top: 1px solid
    var(
      --border,
      #e5e7eb
    );
}

.input-box {
  min-height: 45px;

  display: flex;

  align-items: center;

  gap: 5px;

  padding: 3px 4px 3px 12px;

  border: 1px solid
    var(
      --border,
      #e5e7eb
    );

  border-radius: 13px;

  background:
    var(
      --bg-primary,
      #f8fafc
    );

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.input-box:focus-within {
  border-color:
    rgba(124, 58, 237, 0.4);

  box-shadow:
    0 0 0 3px
    rgba(124, 58, 237, 0.07);
}

.chat-input-wrapper input {
  flex: 1;

  min-width: 0;

  border: none;

  outline: none;

  background: transparent;

  color:
    var(
      --text-primary,
      #111827
    );

  font-size: 12px;
}

.chat-input-wrapper input::placeholder {
  color:
    var(
      --text-muted,
      #9ca3af
    );
}

.input-actions {
  display: flex;

  align-items: center;

  gap: 6px;
}

.character-count {
  color:
    var(
      --text-muted,
      #9ca3af
    );

  font-size: 8px;
}

.send-button {
  width: 35px;
  height: 35px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border: none;

  border-radius: 10px;

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #06b6d4
    );

  color: white;

  font-size: 17px;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.2s ease;
}

.send-button:not(:disabled):hover {
  transform:
    translateY(-2px);

  box-shadow:
    0 7px 18px
    rgba(124, 58, 237, 0.25);
}

.send-button:disabled {
  opacity: 0.35;

  cursor: not-allowed;
}

/* =========================================================
   FOOTER
========================================================= */

.chat-footer {
  min-height: 22px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 4px;

  color:
    var(
      --text-muted,
      #9ca3af
    );

  background:
    var(
      --bg-secondary,
      white
    );

  font-size: 8px;
}

.chat-footer strong {
  font-weight: 600;

  color:
    var(
      --text-secondary,
      #6b7280
    );
}

.footer-dot {
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: #22c55e;
}

.footer-divider {
  opacity: 0.5;
}

/* =========================================================
   CHAT TRANSITION
========================================================= */

.chat-enter-active,
.chat-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.3s ease;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;

  transform:
    translateY(20px)
    scale(0.95);
}

.float-enter-active,
.float-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.float-enter-from,
.float-leave-to {
  opacity: 0;

  transform: scale(0.8);
}

.error-enter-active,
.error-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;

  transform: translateY(5px);
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 500px) {

  .chatbot {
    right: 14px;
    bottom: 14px;
  }

  .chat-window {
    width:
      calc(100vw - 28px);

    height:
      min(680px, calc(100vh - 90px));

    border-radius: 20px;
  }

  .chat-button {
    width: 58px;
    height: 58px;

    border-radius: 18px;
  }

  .suggested-grid {
    grid-template-columns:
      1fr;
  }

  .suggested-grid button {
    min-height: 48px;
  }

}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 360px) {

  .chat-window {
    width:
      calc(100vw - 20px);
  }

  .chatbot {
    right: 10px;
    bottom: 10px;
  }

  .ai-status-banner {
    margin-inline: 9px;
  }

  .messages {
    padding-inline: 10px;
  }

}
</style>