<template>
    <div class="council-body">
        <ViewQueue :queue="queue" />
        <div class="active">
            <ActiveDiscussionCard :discussion="current" />
        </div>
        <div class="inactive">
            <v-row v-for="(card, index) of past" :key="index">
                <v-col class="col-12 d-flex flex-column align-center">
                    <InactiveDiscussionCard :data="card" />
                </v-col>
            </v-row>
        </div>
        <QueueAddition @send="addToQueue" />
  </div>
</template>

<script>
    import InactiveDiscussionCard from '@/components/InactiveDiscussionCard'
    import ActiveDiscussionCard from '@/components/ActiveDiscussionCard'
    import ViewQueue from '@/components/ViewQueue'
    import QueueAddition from '@/components/QueueAddition'
    import past from '@/assets/mock/past.json';

    export default {
        name: 'CouncilBody',
        components: {
            InactiveDiscussionCard,
            ActiveDiscussionCard,
            ViewQueue,
            QueueAddition
        },
        data () {
            return {
                active: {},
                past,
                current: {
                        name: 'Julia',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        photo: 'https://randomuser.me/api/portraits/women/81.jpg',
                        likes: 204,
                        dislikes: 102
                },
                queue: []
            }
        },
        methods: {
            onScroll (e) {
                this.offsetTop = e.target.scrollTop
            },
            addToQueue() {
                var array = new Uint32Array(4);
                crypto.getRandomValues(array);
                this.queue.push([...array].map(n => n.toString(16)).join(''))
            }
        },
    }
</script>

<style scoped>
.active {
    margin-top: 10px;
    width: 80%;
}

.inactive {
    margin-top: 10px;
    width: 70%;
}

.council-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
