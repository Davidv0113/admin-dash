
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// TODO: This code is to match the users option of what theme they want depending on the 
//device theme, but if the user has dark mode enalbled it doesnt let the site be saved in light mode.

// if (window.matchMedia("(prefers-color-scheme: dark)" && "(prefers-color-scheme: light").matches) {
//   window.localStorage.setItem("isDarkMode", "true");
// }
// // else (window.matchMedia("(prefers-color-scheme: light)").matches)
// // {
// //   window.localStorage.setItem("isDarkMode", "false");
// // }

if (window.matchMedia("(perfers-color-scheme: dark") && ("(perfers-color-scheme: light").matches) {

  window.localStorage.setItem("isDarkMode", "true");
}

const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode
}

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode
  }
}

// Mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "true");
    }
  }
}

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
