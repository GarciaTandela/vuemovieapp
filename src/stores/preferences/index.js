import actions from './actions';
import getters from './getters';
import state from './state';
import { defineStore, acceptHMRUpdate } from 'pinia';

const movieStore = defineStore('preferences', {
  state,
  getters,
  actions
});

export default movieStore;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(movieStore, import.meta.hot));
}
