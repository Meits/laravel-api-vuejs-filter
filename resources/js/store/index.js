/**
 * Created by viktor on 17.02.21.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import Data from './modules/Data'
import Preloader from './modules/Preloader'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
    modules: {
        Data,
        Preloader
    },
    strict: debug
})