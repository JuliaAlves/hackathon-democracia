<template>
    <v-row class="justify-center">
        <div class="my-2">
            <v-btn
                @click.stop="drawer = !drawer"
                small color="warning" dark
            >
                {{ queue.length }} pessoas na fila...
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
                <v-list-item>
                    <span class="council-name">Discussões na fila</span>
                </v-list-item>
                <v-divider style="margin-bottom: 8px;" />
                <v-list-item
                    v-for="(checksum, index) in queue"
                    :key="index"
                >
                    <v-card style="margin: 8px 0;">
                        <v-card-text>
                            <v-row>
                                <v-col class="col-9">
                                    {{ checksum }}
                                </v-col>
                                <v-col class="col-3">
                                    <span style="color: #2988B1;">#{{ index + 1 }}</span>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-row>
</template>

<script>
  export default {
    name: 'ViewQueue',
    props: {
        queue: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        drawer: false
    })
  }
</script>
