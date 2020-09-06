<template>
  <v-card class="card">
    <v-col>
        <v-list class="py-0">
            <v-list-item>
                <span class="discussion"> Em discussão </span>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img :src="discussion.photo">
                </v-list-item-avatar>
                <span class="name">{{ discussion.name }}</span>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-btn icon class="icon">
                        <v-icon>mdi-comment</v-icon>
                    </v-btn>
                </v-list-item-icon>
                <span class="description">{{ discussion.description }}</span>
            </v-list-item>
        </v-list>
    </v-col>
  </v-card>
</template>

<script>
    export default {
        name: 'ActiveDiscussionCard',
        props: {
            discussion: Object
        },
        data () {
            return {}
        }
    }
</script>

<style scoped>
.card {
    background-color: #F2F2F2;
}

.v-list {
    background: transparent;
}

.discussion {
  color: rgba(41, 136, 177, 0.87);
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
}

.v-icon {
  color: #FD953A;
}

.name {
    color: #747474;
    font-size: 24px;
    font-weight: bold;
}

.description {
    margin-top: 8px;
    font-size: 16px;
    line-height: 19px;
    color: #747474;
}
</style>
