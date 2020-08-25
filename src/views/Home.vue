<template>
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-lg-7 my-auto">
          <div class="header-content mx-auto">
            <h1 class="mb-5">Demo landing page demonstrating messaging from front end Vue.js to backend Django Rest Framework!</h1>
            
            <b-card class="add-message">
              <b-form @submit.prevent="addNewMessage">
                <b-form-group
                  id="input-group-1"
                  label="Subject"
                  label-for="subject"
                >
                  <b-form-input
                    id="subject"
                    v-model="subject"
                    required
                    placeholder="Enter subject"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Message"
                  label-for="message"
                >
                  <b-form-textarea
                    id="message"
                    v-model="msgBody"
                    required
                    placeholder="Enter message"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
            </b-card>
          </div>
        </div>
        <div class="col-lg-5 my-auto">
          <div class="device-container">
            <div class="device-mockup iphone6 portrait white">
              <div class="device">
                <div class="screen">
                  <messages
                    :messages="messages"
                  ></messages>
                </div>
                <div class="button" @click="alert">
                  <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Messages from "@/components/Messages";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      subject: "",
      msgBody: "",
    };
  },
  computed: mapState({
    messages: (state) => state.messages.messages,
  }),
  methods: {
    ...mapActions("messages", ["addMessage", "deleteMessage"]),
    addNewMessage() {
      this.addMessage({ subject: this.subject, body: this.msgBody });
      this.subject = "";
      this.msgBody = "";
    },
    alert() {
      alert("You clicked the 'Home' button");
    },
  },
  created() {
    this.$store.dispatch("messages/getMessages");
  },
  components: {
    Messages,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-message {
  background: #3b3a3a77;
}

.screen {
  background: #dddddd;
}

.device {
  overflow-y: scroll;
}
</style>
