<template>
  <v-card class="card">
        <v-card-text class="card-text">
            <div>
                <span class="discussion"> Em discussão </span>
            </div>
            <div class="main-class">
                <div class="first-grid">
                    <img :src="discussion.photo" class="photo">
                    <v-icon class="comment-icon">mdi-comment</v-icon>
                </div>
                <div>
                    <span class="name">{{ discussion.name }}</span>
                    <span class="description">{{ discussion.description }}</span>
                </div>
                <div>

                </div>
            </div>
        </v-card-text>
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

.card-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.main-class {
    display: flex;
    flex-direction: row;
}

.first-grid {
    display: flex;
    flex-direction: column;
}

.discussion {
  color: rgba(41, 136, 177, 0.87);
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
}

.comment-icon {
  color: #FD953A;
}

.name {
    color: #747474;
    font-size: 36px;
    font-weight: bold;
}

.description {
    margin-top: 8px;
    font-size: 16px;
    line-height: 19px;
    color: #747474;
}

.photo {
    border-radius: 100%;
    width: 20%;
    height: 20%;
}
</style>
