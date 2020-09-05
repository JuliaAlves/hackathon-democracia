<template>
  <v-card class="cards">
    <v-card-title>{{ data.name }}</v-card-title>
    <v-card-text><p>{{data.likes}}</p></v-card-text>
    <v-card-subtitle><p>{{data.dislikes}}</p></v-card-subtitle>
  </v-card>
</template>

<script>
    export default {
        name: 'InactiveDiscussionCard',
        props: {
          data: {
            type: Object,
            required: true
          }
        }
    }
</script>

<style scoped>
.cards{
    margin: left;
}
</style>
