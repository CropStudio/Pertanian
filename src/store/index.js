import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import petani from './petani'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      petani
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./petani'], () => {
      const newPetani = require('./petani').default
      Store.hotUpdate({ modules: {
        petani: newPetani
      } })
    })
  }

  return Store
}
