<template>
    <div>
        <ul>
            <li v-for="(trivia, index) in trivias" :key="index">
                {{ trivia }}
            </li>
        </ul>
    </div>
</template>

<script>
import { store } from './../store';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            trivias:[]
        }
    },

    computed: {
        ...mapGetters({
            trivias:'getTrivia'
        })
    },

    created() {
        this.getTrivia();
    }

}
</script>

<style>

</style>
