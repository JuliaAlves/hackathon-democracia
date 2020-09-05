<template>
  <v-container class="council-body">
    <v-row v-for="(card, index) of past" :key="index">
        <v-col class="col-12">
            <InactiveDiscussionCard :data="card" />
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import InactiveDiscussionCard from '@/components/InactiveDiscussionCard'

    export default {
        name: 'CouncilBody',
        components: {
            InactiveDiscussionCard
        },
        data () {
            return {
                active: {},
                past: [
                    {
                        name: 'Gustavo',
                        description: 'Lorem ipsum dolor sit amet',
                        likes: 204,
                        dislikes: 102
                    },
                    {
                        name: 'Júlia',
                        description: 'Lorem ipsum dolor sit amet',
                        likes: 204,
                        dislikes: 102
                    },
                    {
                        name: 'Guilherme',
                        description: 'Lorem ipsum dolor sit amet',
                        likes: 204,
                        dislikes: 102
                    },
                    {
                        name: 'Gustavo',
                        description: 'Lorem ipsum dolor sit amet',
                        likes: 204,
                        dislikes: 102
                    },
                    {
                        name: 'Júlia',
                        description: 'Lorem ipsum dolor sit amet',
                        likes: 204,
                        dislikes: 102
                    },
                    {
                        name: 'Guilherme',
                        description: 'Lorem ipsum dolor sit amet',
                        likes: 204,
                        dislikes: 102
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>
