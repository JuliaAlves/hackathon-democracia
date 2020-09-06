<template>
  <v-card class="card">
    <v-row>
      <v-col class="col-10">
        <v-list dense nav class="py-0">
          <v-list-item two-line>
            <v-list-item-avatar>
              <img :src="data.avatar">
            </v-list-item-avatar>
            <span class="font-weight-black">{{ data.name }}</span>
          </v-list-item>
          <v-list-item>
            <p>{{data.description}}</p>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="col-2 d-flex flex-column justify-center align-end ">
        <v-list dense nav class="py-0">
          <v-list-item>
            <v-chip
              class="ma-1"
              color="#2988B1"
              text-color="white"
            >
              <v-avatar left>
                <v-icon small>mdi-thumb-up</v-icon>
              </v-avatar>
              {{data.likes}}
            </v-chip>
          </v-list-item>
          <v-list-item>
            <v-chip
              class="ma-1"
              color="#2988B1"
              text-color="white"
            >
              <v-avatar left>
                <v-icon small>mdi-thumb-down</v-icon>
              </v-avatar>
              {{data.dislikes}}
            </v-chip>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
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
  .card {
    width: 80%;
    background: #F2F2F2;
  }

  .v-list {
    background: #F2F2F2;
  }
</style>
