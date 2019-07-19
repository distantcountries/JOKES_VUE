import axios from 'axios'

export default class ChuckService {

    constructor() {
        axios.defaults.baseURL = 'http://api.icndb.com/jokes/'
    }

    getRandomJoke() {
        return axios.get('random')
    }

    // getAllJokes() {
    //     return axios.get('jokes');
    // }

    // getRandomJoke(index) {
    //     return axios.get('jokes/' + index)
    // }



    // // Retrieve a random chuck joke from the given category
    // client.getRandomJoke('dev').then(function(response) {
    //     // do stuff here
    // }).catch(function(err) {
    //     // handle error
    // });

    // // Retrieve a list of available joke categories
    // client.getJokeCategories().then(function(response) {
    //     // do stuff here
    // }).catch(function(err) {
    //     // handle error
    // });

    // // Free text search
    // client.search(searchTerm).then(function(response) {
    //     // do stuff here
    // }).catch(function(err) {
    //     // handle error
    // });

}

export const chuckService = new ChuckService()