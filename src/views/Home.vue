<template>
    <div class="home">
        <Navigation />
        <v-container>
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
    </div>
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
    .home {
        padding-left: 248px;
    }

    .header {
      position: fixed;
      width: 100%;
      top: 0;
      height: 256px;
    }
    
    .body {
      margin-top: 256px;
    }
</style>
