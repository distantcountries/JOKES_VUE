import Chuck from 'chucknorris-io';
const client = new Chuck();


export default class ChuckService {

    getRandomJoke(category) {
        return client.getRandomJoke(category)
    }
}

export const chuckService = new ChuckService()

