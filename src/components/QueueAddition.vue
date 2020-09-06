<template>
  <v-dialog v-model="isDialogOpen" persistent max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn
            fixed
            dark
            fab
            bottom
            right
            v-on="on"
            color="#FD953A"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Entrar na fila para falar</v-card-title>
        <v-card-text>
            <v-text-field
                label="Nome"
                outlined
                v-model="bundle.name"
            />
            <v-textarea
                label="Descrição"
                outlined
                rows="20"
                v-model="bundle.description"
            />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="confirmation-button" text @click="cancel">Cancelar</v-btn>
          <v-btn class="confirmation-button" text @click="send">Enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'QueueAddition',
    data: () => ({
        bundle: {
            name: '',
            description: ''
        },
        isDialogOpen: false
    }),
    methods: {
        send () {
            this.isDialogOpen = false
            this.$emit('send', this.bundle)
            this.reset()
        },
        cancel () {
            this.isDialogOpen = false
            this.$emit('cancel', this.bundle)
            this.reset()
        },
        reset() {
            this.bundle.name = ''
            this.bundle.description = ''
        }
    }
}
</script>
<style scoped>
.confirmation-button {
    color: #FD953A;
}
</style>