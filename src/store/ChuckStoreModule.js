export const ChuckStore = {
    state: {
        jokes,
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getRandomJoke(state) {
            var randomJoke = state.jokes[Math.floor(Math.random() * state.jokes.length)]
            return randomJoke;
        }
    }
}