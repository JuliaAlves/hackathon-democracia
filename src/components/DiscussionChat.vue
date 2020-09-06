<template>
    <v-card>
        <v-card-text>
            <v-row>
                <v-col class="col-12">
                    <v-list dense nav class="py-0">
                        <v-list-item two-line>
                            <v-list-item-avatar>
                                <img :src="discussion.photo">
                            </v-list-item-avatar>
                            <span class="name">{{ discussion.name }}</span>
                        </v-list-item>
                        <v-list-item>
                            <v-col>
                                <p class="description">{{discussion.description}}</p>
                            </v-col>
                            <v-col v-if="!isActive">
                                <v-chip
                                    class="ma-1"
                                    color="#2988B1"
                                    text-color="white"
                                >
                                    <v-avatar left>
                                        <v-icon small>mdi-thumb-up</v-icon>
                                    </v-avatar>
                                    {{discussion.likes}}
                                </v-chip>
                                <v-chip
                                    class="ma-1"
                                    color="#2988B1"
                                    text-color="white"
                                >
                                    <v-avatar left>
                                        <v-icon small>mdi-thumb-down</v-icon>
                                    </v-avatar>
                                    {{discussion.dislikes}}
                                </v-chip>
                            </v-col>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-container class="chat-container">
                <v-row
                    v-for="(message, index) in discussion.comments"
                    :key="index"
                    :class="message.owner ? 'message flex-row-reverse' : 'message'"
                >
                    <div :class="message.owner ? 'my-comment' : 'others-comment'">
                        <span class="author">{{ message.author }}</span>
                        <span>{{ message.text }}</span>
                    </div>
                </v-row>
            </v-container>
            <v-text-field
                v-if="isActive"
                label="Message"
                outlined
                v-model="comment.text"
            />
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="confirmation-button" text @click="exit">Sair</v-btn>
            <v-btn class="confirmation-button" v-if="isActive" text @click="send">Enviar</v-btn>
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
          owner: true,
          author: 'Julia'
      }
  }),
  methods: {
      exit () {
        this.$emit('exit')
      },
      send() {
        this.discussion.comments.push(JSON.parse(JSON.stringify(this.comment)))
        this.comment.text = ''
      }
  }
}
</script>
<style scoped>
.confirmation-button {
    color: #FD953A;
}

.description {
    font-size: 16px;
    line-height: 19px;
    color: #747474;
    text-align: left !important;
}

.name {
    color: #747474;
    font-size: 20px;
    font-weight: bold;
}

.my-comment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #CEF0FF;
}

.others-comment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #FD953A;
}

.author {
    font-weight: bold;
}

.message {
    margin-top: 15px;
}

</style>