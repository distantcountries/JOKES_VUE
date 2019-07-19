<template>
    <div>
        <div style="margin-top:1rem;">
            <button type="button" class="btn btn-info" @click="getRandomJoke">Get New Joke</button><br>
            <div class="quotes">
                <blockquote class="blockquote text-center">
                    <span style="margin-left:-100%; font-size:3rem;">"</span><br>
                    <p style="margin:-2rem;">{{ joke.value.joke }}</p><br>
                    <!-- <p style="margin:-2rem;">{{ joke }}</p><br> -->
                    <span style="margin-left:100%; font-size:3rem;" >"</span>
                    <footer class="blockquote-footer"><cite title="Source Title" >Unknown</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
import { chuckService } from '../services/ChuckService'
export default {
    data() {
        return {
            jokes:[], 
            joke:'', 
            // randomID: Math.floor((Math.random() * jokes.length) + 1)
        }
    },

    created() {
        chuckService.getRandomJoke()
        .then(response => {
            this.joke = response.data
            console.log(this.joke)
        })
        .catch(e => {
            console.log('Error: get random joke!')
        })
    },

    // beforeRouteEnter (to, from, next) {
    //     next(vm => {
    //         chuckService.getRandomJoke(vm.$route.params.id)
    //         .then(response => { vm.joke = response.data })
    //         .catch(error => { alert('Problem with getting joke');})
    //     })
    // },

    computed: {
        joke() {
            return this.$store.getters.getRandomJoke
        }
    },

    methods: {
        getRandomJoke() {
            console.log('test')
        }
    }
}
</script>

<style>
    .quotes {
        width:50%;
        margin: 0 auto;
        margin-top:2rem;
    }

    .quotes p {
        padding: -1rem;
    }

    span {
        font-size:2rem;
    }
</style>
