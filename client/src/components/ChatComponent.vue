<template>
  <div>
    <button @click="toggleChat" class="toggle-button">
      {{ isOpen ? "Close Chat" : "Open Chat" }}
    </button>
    <div v-if="isOpen" class="chat-container">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <span :class="message.type">{{ message.content }}</span>
        </div>
        <div v-if="loading" class="message bot">
          <span>...</span>
        </div>
      </div>
      <div class="input-container">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Type your message here..."
        />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
      newMessage: "",
      isOpen: false,
      loading: false,
    };
  },
  methods: {
    toggleChat() {
      if (this.isOpen) {
        this.closeChat();
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    async closeChat() {
      try {
        await axios.delete("http://localhost:8000/");
        this.isOpen = false;
        this.messages = [];
      } catch (error) {
        console.error("Error closing chat:", error);
      }
    },
    async sendMessage() {
      if (this.newMessage.trim() === "") {
        return;
      }

      const userMessage = {
        content: this.newMessage,
        type: "user",
      };

      this.messages.push(userMessage);
      this.newMessage = "";

      this.loading = true;

      try {
        const response = await axios.post("http://localhost:8000/", {
          query: userMessage.content,
        });

        const botMessage = {
          content: response.data[0],
          type: "bot",
        };

        this.messages.push(botMessage);
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.toggle-button {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: green;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.chat-container {
  position: fixed;
  bottom: 50px;
  left: 0;
  z-index: 2;
  width: 350px;
  height: 500px;
  border: 1px solid #ccc;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin: 5px 0;
  display: flex;
}

.message .user {
  color: white;
  background-color: var(--navClr);
  width: 60%;
  margin-left: auto;
  border-radius: 5px;
  padding: 5px;
  text-align: right;
}

.message .bot {
  color: black;
  text-align: left;
  background-color: rgb(230, 230, 230);
  width: 60%;
  margin-right: auto;
  border-radius: 5px;
  padding: 5px;
}

.input-container {
  display: flex;
  padding: 10px;
}

input {
  flex-grow: 1;
  padding: 5px;
}

button {
  margin-left: 10px;
  background-color: var(--navClr);
  border: none;
  color: white;
}
</style>
