import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import plugins from './plugins';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins
});

export default store;
