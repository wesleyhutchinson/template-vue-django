<template>
  <div class="view-screen">
    

    <p v-if="messages.length === 0" id="no-msg">No Messages</p>
    <b-card class="msg" v-for="(msg, index) in messages" :key="index" :class="getFormatting(index)">

        <p class="msg-subject" v-html="msg.subject"></p>
        <div class="msg-align">
        <p class="msg-body" v-html="msg.body"></p>
        </div>
        <b-button class="del-button" variant="danger" type="submit" @click="deleteMessage(msg.id)">Delete</b-button>
      </b-card>

  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Messages",
  props: {
    messages: Array,
  },
  methods: {
    ...mapActions("messages", ["deleteMessage"]),
    getFormatting(index) {
      if (index % 2 == 0) {
        return "right";
      }
      return "left";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  max-width: 65%;
}

.msg {
  width: 80%;
  text-align: left;
  padding: 10px;
  margin: 5px 10px 5px;
  position: relative;
  /* overflow-x: hidden; */
}

.msg-subject {
  color: #7b4397;
  font-size: 0.8rem;
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: 500;
}

.msg-body {
  color: #444444;
  font-size: 0.9rem;
}

/* .view-screen {
  overflow-y: scroll;
} */

.del-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.8em;
}

.card {
  border-radius: 10px;
}

.card-body {
  padding: 20px 0 9px !important;
}

#no-msg {
  text-align: center;
  margin: 0 auto;
  margin-top: 40%;
  color: #333333;
}

.right {
  float: right;
}

.left {
  float: left;
}

.right:after {
  border-left: 20px solid transparent;
  border-top: 20px solid #ffffff;
  display: inline-block;
  bottom: -20px;
  content: "";
  position: absolute;
  right: 20px;
}

.left:after {
  border-right: 20px solid transparent;
  border-top: 20px solid #ffffff;
  display: inline-block;
  bottom: -20px;
  content: "";
  position: absolute;
  left: 20px;
}
</style>
