<template>
    <v-row class="justify-center">
        <div class="my-2">
            <v-btn
                @click.stop="drawer = !drawer"
                small color="warning" dark
            >
                {{queueSize}} pessoas na fila...
            </v-btn>
        </div>
        <v-navigation-drawer
            style="z-index: 20;"
            v-model="drawer"
            app
            right
            fixed
            temporary
        >
            <v-list
            dense
            nav
            class="py-0"
            >
                <v-divider></v-divider>
                <v-spacer />
                <v-list-item
                    v-for="(item, index) in queue"
                    :key="index"
                    link
                >
                    <v-list-item-title class="council-title">{{ item.checksum }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-row>
</template>

<script>
  export default {
    name: 'ViewQueue',
    data: () => ({
        drawer: false
    })
  }
</script>
