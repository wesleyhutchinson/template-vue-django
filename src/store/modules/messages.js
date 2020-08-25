import messageService from "../../services/messageService";

const state = {
  messages: [],
};

const getters = {
  messages: (state) => {
    return state.messages;
  },
};

const actions = {
  getMessages({ commit }) {
    messageService.fetchMessages().then((messages) => {
      commit("SET_MESSAGES", messages);
    });
  },
  addMessage({ commit }, message) {
    messageService.postMessage(message).then((response) => {
      commit("ADD_MESSAGE", response);
    });
  },
  deleteMessage({ commit }, msgId) {
    messageService.deleteMessage(msgId);
    commit("DELETE_MESSAGE", msgId);
  },
};

const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages;
  },
  ADD_MESSAGE(state, message) {
    state.messages.push(message);
  },
  DELETE_MESSAGE(state, msgId) {
    state.messages = state.messages.filter((obj) => obj.id !== msgId);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
