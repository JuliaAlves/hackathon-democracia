<template>
    <v-dialog v-model="isDialogOpen" persistent max-width="900">
      <template v-slot:activator="{ on }">
        <button class="button" v-on="on">
            <InactiveDiscussionCard :discussion="discussion" />
        </button>
      </template>
      <DiscussionChat :discussion="discussion" :is-active="false" @exit="close"/>
    </v-dialog>
</template>
<script>
import DiscussionChat from '@/components/DiscussionChat'
import InactiveDiscussionCard from '@/components/InactiveDiscussionCard'

export default {
  name: 'ActiveDiscussionChatDialog',
  props: {
    discussion: Object,
  },
  components: {
    DiscussionChat,
    InactiveDiscussionCard
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
.button {
  width: 100%;
}
</style>