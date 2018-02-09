import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

//VUEX Stores
const store = new Vuex.Store({
  state: {
    widgets: [],
    settings: {
      powerUsageDevice: ""
    }
  },
  mutations: {
    // WIDGETS
    addWidget (state) {
      let newBox = {};
      newBox.name = "Box " + state.widgets.length;
      newBox.w = 1;
      newBox.h = 1;
      newBox.x = 0;
      newBox.y = 0;
      newBox.i = state.widgets.length;
      state.widgets.push(newBox);
    },
    updateWidgets (state, newWidgets){
      state.widgets = newWidgets;
    },
    // SETTINGS
    updateSettings (state, newSettings){
      state.settings = newSettings;
    }
  },
  plugins: [createPersistedState()]
});

export default store;
