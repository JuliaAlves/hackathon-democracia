<template>
  <v-container class="council-body">
        <v-row v-for="(card, index) of past" :key="index">
            <v-col class="col-12 d-flex flex-column align-center">
                <InactiveDiscussionCard :data="card" />
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
    import InactiveDiscussionCard from '@/components/InactiveDiscussionCard'
    import past from '@/assets/mock/past.json';

    export default {
        name: 'CouncilBody',
        components: {
            InactiveDiscussionCard
        },
        data () {
            return {
                active: {},
                past
            }
        },
        methods: {
            onScroll (e) {
                this.offsetTop = e.target.scrollTop
            },
        },
    }
</script>

<style scoped>
</style>
