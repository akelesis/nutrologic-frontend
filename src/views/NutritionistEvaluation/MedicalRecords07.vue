<template>
  <div class="MedicalRecords">
    <Header headerStyle="NutritionistHeader"/>
    <main class="medical-records-main">
      <div class="nutritionist-name-container">
        <p>{{user.name}}</p>
      </div>
      <div class="medical-records-container">
        <div class="patient-name-file-container">
          <span>Júlia Santana</span>
          <i class="far fa-file-alt" />
        </div>
        <evaluation-breadcrumbs step="7" stepsCounter="10"/>
        <p id="medical-records-title">Doenças e necessidades nutricionais</p>
        <div class="medical-records-input-container">
          <div class="text-area-input-container">
            <p>Outros diagnósticos relevantes</p>
            <default-text-area rows="2" placeholder=""/>
          </div>
          <div class="primary-disease-input-container default-width">
            <span>Estadiamento da doença primária: </span>
            <default-select :options="deseaseStateOptions" />
          </div>
          <div class="text-area-input-container">
            <p>Outro</p>
            <default-text-area rows="2" placeholder=""/>
          </div>
          <div class="conditions-grid-container">
            <p>Marque todas as condições que se encaixam</p>
            <default-checkbox class="grid-row-1 grid-item-1" id="item-1" name="item-1-check" value="Câncer"/>
            <default-checkbox class="grid-row-1 grid-item-2" id="item-2" name="item-2-check" value="AIDS"/>
            <default-checkbox class="grid-row-1 grid-item-3" id="item-3" name="item-3-check" value="Caquexia cardíaca ou pulmonar"/>
            <default-checkbox class="grid-row-2 grid-item-half-1" id="item-4" name="item-4-check" value="Úlcera de decúbito, ferida aberta ou fístula"/>
            <default-checkbox class="grid-row-2 grid-item-half-2" id="item-5" name="item-5-check" value="Presença de trauma"/>
            <default-checkbox class="grid-row-3 grid-item-half-1" id="item-6" name="item-6-check" value="Idade maior que 65 anos"/>
            <default-checkbox class="grid-row-3 grid-item-half-2" id="item-7" name="item-7-check" value="Insuficiência renal crônica"/>
          </div>
          <p id="total-score">Pontuação Total: 0</p>
        </div>
      </div>
      <div class="nav-buttons-container">
        <green-button label="Anterior" :isInverted="true" @click.native="redirectPreviousRecord"/>
        <green-button label="Próximo" @click.native="redirectNextRecord"/>
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import MainFooter from '../../components/MainFooter.vue'
import GreenButton from '../../components/GreenButton.vue'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import DefaultCheckbox from '../../components/DefaultCheckbox.vue'
import DefaultTextArea from '../../components/DefaultTextArea.vue'
import DefaultSelect from '../../components/DefaultSelect.vue'

export default {
  components: {
    Header,
    MainFooter,
    GreenButton,
    EvaluationBreadcrumbs,
    DefaultCheckbox,
    DefaultTextArea,
    DefaultSelect
  },
  data () {
    return {
      user: {
        name: 'Dr. João Carlos'
      },
      deseaseStateOptions: ['I', 'II', 'III', 'IV']
    }
  },
  methods: {
    redirectNextRecord () {
      this.$router.push('/nutritionist/evaluation/medicalRecords08')
    },
    redirectPreviousRecord () {
      this.$router.push('/nutritionist/evaluation/medicalRecords06')
    }
  }
}
</script>

<style scoped>
.MedicalRecords {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  color: #B0B0B0;
}

.medical-records-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 50px;
}

.nutritionist-name-container {
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  padding-left: 50px;
}

.nutritionist-name-container p {
  font-size: 30px;
  color: #B0B0B0;
}

.medical-records-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60vw;
  height: 100%;
}

.patient-name-file-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.patient-name-file-container span {
  font-size: 30px;
  margin-right: 5px;
}

.patient-name-file-container i {
  color: #fff;
  background-color: #58E28F;
  border: 3px solid #58E28F;
  border-radius: 2px;
  box-shadow: 1px 1px 5px 1px #DADADA;
  align-self: center;
  font-size: 25px;
}

.patient-name-file-container i:hover {
  cursor: pointer;
  filter: brightness(95%);
}

#medical-records-title {
  font-size: 20px;
  margin-bottom: 20px;
}

.text-area-input-container {
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medical-records-input-container {
  display: flex;
  flex-direction: column;
  /* width: 70%; */
}

.primary-disease-input-container {
  display: flex;
  font-size: 20px;
  gap: 30px;
  margin-bottom: 10px;
}

.default-width input {
  width: 150px;
}

.conditions-grid-container {
  display: grid;
  grid-template-rows: 4;
  grid-template-columns: 4;
}

.conditions-grid-container p {
  font-size: 20px;
  grid-row: 1;
  grid-column: 1 / span 4;
  margin-bottom: 10px;
}

.grid-row-1 {
  grid-row: 2;
}

.grid-row-2 {
  grid-row: 3;
}

.grid-row-3 {
  grid-row: 4;
}

.grid-item-1 {
  grid-column: 1;
}

.grid-item-2 {
  grid-column: 2;
}

.grid-item-3 {
  grid-column: 3 / span 2;
}

.grid-item-half-1 {
  grid-column: 1 / span 2;
}

.grid-item-half-2 {
  grid-column: 3 / span 2;
}

#total-score {
  font-size: 20px;
  color: #4CBA78;
  text-align: left;
  margin-top: 20px;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
