<template>
    <v-app id="home">
        <Navigation />
        <v-main>
            <v-container class="fill-height" style="padding: 0;" fluid>
                <v-row>
                    <v-col class="col-12">
                        <CouncilHeader class="header"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="col-12">
                        <CouncilBody class="body"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <v-btn
            fixed
            dark
            fab
            bottom
            right
            color="#FD953A">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-app>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import CouncilHeader from '@/components/CouncilHeader'
    import CouncilBody from '@/components/CouncilBody'

    export default {
        components: {
            Navigation,
            CouncilHeader,
            CouncilBody
        }
    }
</script>

<style scoped>
    .header {
      position: fixed;
      width: 100%;
      top: 0;
      height: 196px;
      z-index: 10;
    }
    
    .body {
      position: absolute;
      top: 196px;
    }
</style>
