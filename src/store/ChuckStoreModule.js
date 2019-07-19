import { chuckService } from './../services/ChuckService'

export const ChuckStoreModule = {
    state: {
        joke:'',
    },
    mutations: {
        setJoke(state, payload) {
            state.joke = payload;
        }
    },
    actions: {
        callSetJoke(context, payload) {
            const category = payload ? payload.category : '';
           return  chuckService.getRandomJoke(category)
            .then((joke) => { 
                context.commit('setJoke', joke.value)
            })
            .catch((e) => alert('Error'));
        }
    },
    getters: {
        getRandomJoke(state) {
            return state.joke
        }
    }
};





