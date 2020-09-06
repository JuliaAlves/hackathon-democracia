<template>
  <v-container class="council-body">
        <v-row class="justify-center">
            <div class="my-2">
                <v-btn small color="warning" dark>{{queueSize}} pessoas na fila...</v-btn>
            </div>
        </v-row>
        <ActiveDiscussionCard :discussion="current" />
        <v-row v-for="(card, index) of past" :key="index">
            <v-col class="col-12 d-flex flex-column align-center">
                <InactiveDiscussionCard :data="card" />
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
    import InactiveDiscussionCard from '@/components/InactiveDiscussionCard'
    import ActiveDiscussionCard from '@/components/ActiveDiscussionCard'
    import past from '@/assets/mock/past.json';

    export default {
        name: 'CouncilBody',
        components: {
            InactiveDiscussionCard,
            ActiveDiscussionCard
        },
        data () {
            return {
                active: {},
                past,
                current: {
                        name: 'Julia',
                        description: 'Lorem ipsum dolor sit amet',
                        photo: 'https://randomuser.me/api/portraits/women/81.jpg',
                        likes: 204,
                        dislikes: 102
                },
                queueSize: 1729
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
