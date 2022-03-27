<template>
  <div class="modal-container" v-if="show">
    <div class="modal">
      <h1>Orientação nutricional</h1>
      <div class="input-section">
        <p id="section-title">Necessidade de suplementação</p>
        <div class="input-container">
          <span>Suplementação</span>
          <nutritionist-radius value="Sim" id="item1-1" name="item1"/>
          <nutritionist-radius value="Não" id="item1-2" name="item1"/>
        </div>
        <div class="input-container">
          <span>Tipo</span>
          <nutritionist-radius value="Pó" id="item2-1" name="item2"/>
          <nutritionist-radius value="Preparado" id="item2-2" name="item2"/>
          <nutritionist-radius value="Pronto" id="item2-3" name="item2"/>
        </div>
        <div class="input-container">
          <span>Proteína</span>
          <nutritionist-radius value="Hiperproteico" id="item3-1" name="item3"/>
          <nutritionist-radius value="Normoproteico" id="item3-2" name="item3"/>
        </div>
        <div class="input-container">
          <span>Calorias</span>
          <nutritionist-radius value="Hipercalórico" id="item4-1" name="item4"/>
          <nutritionist-radius value="Normocalórico" id="item4-2" name="item4"/>
        </div>
        <div class="input-container">
          <span>Rico em Ômega 3</span>
          <nutritionist-radius value="Sim" id="item5-1" name="item5"/>
          <nutritionist-radius value="Não" id="item5-2" name="item5"/>
        </div>
      </div>
      <div class="input-section">
        <p id="section-title">Outras informações</p>
        <default-text-area rows="3" placeholder=""/>
      </div>
      <div class="modal-buttons">
        <green-button label="Voltar" @click.native="closeModal"/>
        <green-button label="Gerar Relatório" :isInverted="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultTextArea from './DefaultTextArea.vue'
import GreenButton from './GreenButton.vue'
import NutritionistRadius from './NutritionistRadius.vue'

export default {
  components: {
    DefaultTextArea,
    GreenButton,
    NutritionistRadius
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    closeModal () {
      this.show = false
    },
    openModal () {
      this.show = true
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
}

.modal {
  height: 70vh;
  min-width: 50vw;
  background-color: #FFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.modal h1 {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 25px;
  margin: 20px 0;
}

.input-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 70%;
}

#section-title {
  font-size: 20px;
  font-weight: bold;
}

.input-container {
  display: flex;
  align-items: center;
  margin: 15px 0;
  width: 100%;
}

.input-container span {
  font-size: 20px;
  text-align: start;
  width: 40%;
}

.input-section textarea {
  min-width: 0;
  width: 100%;
}

.modal-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.modal-buttons button {
  font-size: 25px;
  width: 30%;
  padding: 10px 50px;
  margin-top: 20px;
}
</style>
