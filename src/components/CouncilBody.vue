<template>
    <div class="council-body">
        <ViewQueue :queue="queue" @next="nextOnQueue"/>
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
                        comments: [
                          { text: 'ta falando nada com nada minha filha', owner: false , author: "fulano"},
                        ],
                        own: true
                },
                queue: [
                    {
                        name: 'José',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        photo: 'https://randomuser.me/api/portraits/women/81.jpg',
                        likes: 204,
                        dislikes: 102,
                        comments: [
                            { text: 'ta falando nada com nada minha filha', owner: false , author: "fulano"},
                        ],
                        checksum: 'fc3ff98e8c6a0d3087d515c0473f8677',
                        own: false
                    },
                    {
                        name: 'Kleber',
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        photo: 'https://randomuser.me/api/portraits/women/81.jpg',
                        likes: 204,
                        dislikes: 102,
                        comments: [
                            { text: 'ta falando nada com nada minha filha', owner: false , author: "fulano"},
                        ],
                        checksum: 'c2e285cb33cecdbeb83d2189e983a8c0',
                        own: false
                    }
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
                    name: discussion.name,
                    photo: discussion.photo,
                    likes: discussion.likes,
                    dislikes: discussion.dislikes,
                    description: discussion.description,
                    comments: discussion.comments,
                    message: discussion.description,
                    checksum: [...array].map(n => n.toString(16)).join('')
                })
            },
            nextOnQueue () {
                this.past.splice(0, 0, JSON.parse(JSON.stringify(this.current)));
                this.current = JSON.parse(JSON.stringify(this.queue[0]))
                this.queue.splice(0, 1);
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
