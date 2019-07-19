import Vue from 'vue'
import Vuex from 'vuex';

import { ChuckStoreModule } from './ChuckStoreModule'
import { TriviaStoreModule } from './TriviaStoreModule'
 
Vue.use(Vuex);

console.log(ChuckStoreModule)

export const store = new Vuex.Store({
    modules: {
      ChuckStoreModule,
      // TriviaStoreModule
    }
});