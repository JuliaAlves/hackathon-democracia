<template>
  <v-navigation-drawer
    class="nav"
    v-model="drawer"
    app
    permanent
    left
    fixed
    dark
  >
    <v-list
      dense
      nav
      class="py-0"
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg">
        </v-list-item-avatar>

        <div>
          <span class="name">{{ name }}</span>
        </div>
      </v-list-item>

      <v-divider></v-divider>

      <v-spacer />

      <v-list-item
        v-for="(council, index) in councils"
        :key="index"
        link
      >
        <v-list-item-title class="council-title">{{ council }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        name: 'Julia',
        photo: 'https://randomuser.me/api/portraits/women/81.jpg',
        drawer: true,
        councils: [
          'Assembleia 20/10',
        ]
      }
    }
  }
</script>

<style scoped>
.council-title {
  font-size:  20px !important;
}

.nav {
  background-color: #2988B1;
}

.name{
  margin-left: 25px;
  font-size: 30px;
  line-height: 42px;
}
</style>