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
            style="z-index: 20; width: 400px;"
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
                    v-for="({ own, checksum, message }, index) in queue"
                    :key="index"
                >
                    <v-card :class="own ? 'own' : ''" style="margin: 8px 0; width: 100%;">
                        <v-card-text>
                            <v-row>
                                <v-col class="col-9">
                                    <kbd>{{ checksum }}</kbd>
                                </v-col>
                                <v-col class="col-3">
                                    <span style="color: #2988B1;">#{{ index + 1 }}</span>
                                </v-col>
                            </v-row>
                            <template v-if="own">
                                <v-divider />
                                <v-row>
                                    <v-col class="col-12">
                                        <p>{{ message }}</p>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-card-text>
                    </v-card>
                </v-list-item>
            </v-list>
            <v-btn color="warning" v-if="queue.length > 0" @click="next">Próximo da fila</v-btn>
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
        }),
        methods: {
          next () {
            this.$emit('next')
          }
        }
    }
</script>

<style scoped>
    .own {
        background-color: #CEF0FF;
    }
</style>
