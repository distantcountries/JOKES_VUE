import { triviaService } from './../services/TriviaService'

export const TriviaStoreModule = {
    state: {
        trivias:[],
    },
    mutations: {
        setTrivias(state, payload) {
            state.trivia = payload;
        }
    },
    actions: {
        callSetTrivia(context, payload) {
           return  triviaService.getRandomTrivias()
            .then((trivias) => { 
                context.commit('setTrivias', trivias)
            })
            .catch((e) => alert('Error'));
        }
    },
    getters: {
        getTrivia(state) {
            return state.trivias
        }
    }
};



