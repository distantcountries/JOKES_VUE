import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TriviaApp from './components/TriviaApp'
import Chuck from './components/ChuckNorris'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/trivia',
            name: 'trivia-app',
            component: TriviaApp
        },
        {
            path: '/chuck',
            name: 'chuck',
            component: Chuck
        },
    ]
})