<template>
    <div class="council-body">
        <ViewQueue :queue="queue" />
        <div class="active">
            <ActiveDiscussionCard :discussion="current" />
        </div>
        <div class="inactive">
            <v-row v-for="(card, index) of past" :key="index">
                <v-col class="col-12 d-flex flex-column align-center">
                    <InactiveDiscussionItem :discussion="card" />
                </v-col>
            </v-row>
        </div>
        <QueueAddition @send="addToQueue" />
  </div>
</template>

<script>
    import InactiveDiscussionItem from '@/components/InactiveDiscussionItem'
    import ActiveDiscussionCard from '@/components/ActiveDiscussionCard'
    import ViewQueue from '@/components/ViewQueue'
    import QueueAddition from '@/components/QueueAddition'
    import past from '@/assets/mock/past.json';

    export default {
        name: 'CouncilBody',
        components: {
            InactiveDiscussionItem,
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
                        dislikes: 102,
                        comments: []
                },
                queue: [
                    { checksum: 'fc3ff98e8c6a0d3087d515c0473f8677' },
                    { checksum: 'c2e285cb33cecdbeb83d2189e983a8c0' },
                    { checksum: '459b9511a7f650ebd327889c45cc4e9b' }
                ]
            }
        },
        methods: {
            onScroll (e) {
                this.offsetTop = e.target.scrollTop
            },
            addToQueue(discussion) {
                var array = new Uint32Array(4);
                crypto.getRandomValues(array);
                this.queue.push({
                    own: true,
                    message: discussion.description,
                    checksum: [...array].map(n => n.toString(16)).join('')
                })
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
