<template>
    <v-app id="home">
        <Navigation />
        <v-main>
            <CouncilHeader class="header"/>
            <v-container class="fill-height" style="padding: 0;" fluid>
                <v-row>
                    <v-col class="col-12">
                        <CouncilBody class="body"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
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
            CouncilBody,
        }
    }
</script>

<style scoped>
    .header {
      position: fixed;
      width: 100%;
      top: 0;
      height: 220px;
      z-index: 10;
    }
    
    .body {
      position: absolute;
      top: 230px;
    }
</style>
