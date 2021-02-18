import VueRouter from 'vue-router'
import IndexComponent from './components/IndexComponent.vue'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: IndexComponent,
            name : 'home'

        }
    ],
    mode: 'history'
})