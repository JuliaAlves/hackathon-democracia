<template>
  <div class="council-header">
    <v-row>
        <span class="council-name"> {{ name }} </span>
    </v-row>
    <v-row>
        <span class="council-description">
          {{ description }}
        </span>
    </v-row>
  </div>
</template>

<script>
    export default {
        name: 'CouncilHeader',
        data () {
            return {
                name: 'Assembleia Geral 20/10',
                description: "Nesta reunião será discutida a nova proposta de mudança do fornecimento de bosas SAE, a proposta de lei PL529 e afins. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        }
    }
</script>

<style scoped>
.council-description {
    color:#747474;
    font-size: 18;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 75%;
    text-align: left;
}

.council-header {
    box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.25);
    padding-left: 15px;
    background-color: #F8F8F8;
    padding: 1% 2%;
}

.council-name {
    font-weight: bold;
    font-size: 36px;
    color: #747474;
}

</style>
