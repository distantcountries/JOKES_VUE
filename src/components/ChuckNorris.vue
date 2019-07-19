<template>
    <div>
        <div style="margin-top:1rem;">
            <form @submit.prevent="getNewJoke">
                <div style="width:30%; margin:auto;">
                    <input 
                        type="text" 
                        class="form-control form-control-sm" 
                        style="margin-bottom:0.5rem;" 
                        placeholder="Category..."
                        v-model="category"
                    >
                    <button type="submit" class="btn btn-info">Get New Joke</button><br>
                </div>
            </form>
            <div class="quotes">
                <blockquote class="blockquote text-center">
                    <span style="margin-left:-100%; font-size:3rem;">"</span><br>
                    <p style="margin:-2rem;">{{ joke }}</p><br>
                    <span style="margin-left:100%; font-size:3rem;" >"</span>
                    <footer class="blockquote-footer"><cite title="Source Title" >Unknown</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from './../store';
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            category: ''
        }
    },

    beforeRouteEnter(to, from, next) {
        store.dispatch('callSetJoke').then(() => {
            next()
        })
    }, 

    computed: {
        ...mapGetters({
            joke: 'getRandomJoke'
        })
    },

    methods: {
        getNewJoke() {
            // store.dispatch('callSetJoke');
            this.$store.dispatch('callSetJoke', { category: this.category });
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
