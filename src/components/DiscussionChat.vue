<template>
    <v-card>
        <v-card-text>
            <v-text-field
                label="Name"
                outlined
                v-model="comment.text"
            />
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="confirmation-button" text @click="exit">Sair</v-btn>
            <v-btn class="confirmation-button" text @click="cancel">Cancelar</v-btn>
            <v-btn class="confirmation-button" text @click="send">Enviar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
  name: 'DiscussionChat',
  props: {
    discussion: Object,
    isActive: Boolean
  },
  data: () => ({
      comment: {
          text: '',
          owner: true
      }
  }),
  methods: {
      exit () {
        this.$emit('exit')
      },
      send() {
        this.discussion.comments.push(JSON.parse(JSON.stringify(this.comment)))
        this.comment.text = ''
      },
      cancel () {
            this.comment.text = ''
      }
  }
}
</script>
<style scoped>
.confirmation-button {
    color: #FD953A;
}
</style>