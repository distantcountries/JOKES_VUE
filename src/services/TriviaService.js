import axios from 'axios'
const client = new axios.create({baseURL: 'http://jservice.io/api/'});

export default class TriviaService {

    getRandomTrivias() {
        return client.get('random');
    }

}

export const triviaService = new TriviaService()

