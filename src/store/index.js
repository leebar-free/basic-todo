import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios';
import todo from './modules/todo.js';
import user from './modules/user.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  modules: {
    todo,
    user
  }

})
