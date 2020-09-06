<template>
    <v-dialog v-model="isDialogOpen" persistent max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
            <v-icon size="30px">mdi-comment</v-icon>
        </v-btn>
      </template>
      <DiscussionChat :discussion="discussion" :is-active="true" @exit="close"/>
    </v-dialog>
</template>
<script>
import DiscussionChat from '@/components/DiscussionChat'

export default {
  name: 'ActiveDiscussionChatDialog',
  props: {
    discussion: Object,
  },
  components: {
    DiscussionChat
  },
  data: () => ({
      isDialogOpen: false
  }),
  methods: {
      close() {
          this.isDialogOpen = false
      }
  }
}
</script>
<style scoped>
.v-icon {
  color: #FD953A !important;
}
</style>