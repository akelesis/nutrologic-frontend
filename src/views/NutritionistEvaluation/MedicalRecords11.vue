<template>
  <div class="MedicalRecords">
    <Header headerStyle="NutritionistHeader"/>
    <main class="medical-records-main">
      <div class="nutritionist-name-container">
        <p>Dr(a) {{user.name}}</p>
      </div>
      <div class="medical-records-container">
        <div class="patient-name-file-container">
          <span>{{patient.patient_name}}</span>
          <i class="far fa-file-alt" />
        </div>
        <evaluation-breadcrumbs step="9" stepsCounter="10"/>
        <p id="medical-records-title">Exame Físico</p>
        <div class="medical-records-grid-container">
          <span class="row-1 column-2 grid-text-center">sem déficit</span>
          <span class="row-1 column-3 grid-text-center">déficit leve</span>
          <span class="row-1 column-4 grid-text-center">déficit moderado</span>
          <span class="row-1 column-5 grid-text-center">déficit grave</span>
          <span class="row-2 column-1 grid-text-start">Avaliação geral do déficit de gordura - Estado de hidratação</span>
          <nutritionist-radius v-model="evaluation.hydrationFatStatus" class="row-2 column-2 grid-input" value="" id="item1-1" name="item1"/>
          <nutritionist-radius v-model="evaluation.hydrationFatStatus" class="row-2 column-3 grid-input" value="" id="item1-2" name="item1"/>
          <nutritionist-radius v-model="evaluation.hydrationFatStatus" class="row-2 column-4 grid-input" value="" id="item1-3" name="item1"/>
          <nutritionist-radius v-model="evaluation.hydrationFatStatus" class="row-2 column-5 grid-input" value="" id="item1-4" name="item1"/>
          <span class="row-3 column-1 grid-text-start">Edema do tornozelo</span>
          <nutritionist-radius v-model="evaluation.ankleSwelling" class="row-3 column-2 grid-input" value="" id="item2-1" name="item2"/>
          <nutritionist-radius v-model="evaluation.ankleSwelling" class="row-3 column-3 grid-input" value="" id="item2-2" name="item2"/>
          <nutritionist-radius v-model="evaluation.ankleSwelling" class="row-3 column-4 grid-input" value="" id="item2-3" name="item2"/>
          <nutritionist-radius v-model="evaluation.ankleSwelling" class="row-3 column-5 grid-input" value="" id="item2-4" name="item2"/>
          <span class="row-4 column-1 grid-text-start">Edema sacral</span>
          <nutritionist-radius v-model="evaluation.sacralEdema" class="row-4 column-2 grid-input" value="" id="item3-1" name="item3"/>
          <nutritionist-radius v-model="evaluation.sacralEdema" class="row-4 column-3 grid-input" value="" id="item3-2" name="item3"/>
          <nutritionist-radius v-model="evaluation.sacralEdema" class="row-4 column-4 grid-input" value="" id="item3-3" name="item3"/>
          <nutritionist-radius v-model="evaluation.sacralEdema" class="row-4 column-5 grid-input" value="" id="item3-4" name="item3"/>
          <span class="row-5 column-1 grid-text-start">Ascite</span>
          <nutritionist-radius v-model="evaluation.ascites" class="row-5 column-2 grid-input" value="" id="item4-1" name="item4"/>
          <nutritionist-radius v-model="evaluation.ascites" class="row-5 column-3 grid-input" value="" id="item4-2" name="item4"/>
          <nutritionist-radius v-model="evaluation.ascites" class="row-5 column-4 grid-input" value="" id="item4-3" name="item4"/>
          <nutritionist-radius v-model="evaluation.ascites" class="row-5 column-5 grid-input" value="" id="item4-4" name="item4"/>
          <span class="row-6 column-1 grid-text-start">Avaliação geral do estado de hidratação</span>
          <nutritionist-radius v-model="evaluation.hydrationGeneralStatus" class="row-6 column-2 grid-input" value="" id="item5-1" name="item5"/>
          <nutritionist-radius v-model="evaluation.hydrationGeneralStatus" class="row-6 column-3 grid-input" value="" id="item5-2" name="item5"/>
          <nutritionist-radius v-model="evaluation.hydrationGeneralStatus" class="row-6 column-4 grid-input" value="" id="item5-3" name="item5"/>
          <nutritionist-radius v-model="evaluation.hydrationGeneralStatus" class="row-6 column-5 grid-input" value="" id="item5-4" name="item5"/>
          <div class="row-7 column-1 score-container">
            <span class="grid-text-start">PONTUAÇÃO GERAL</span>
            <default-select v-model="generalScore" :options="options" />
          </div>
        </div>
        <p id="total-score">Pontuação Total: 0</p>
      </div>
      <evaluation-breadcrumbs class="no-margin" step="3" stepsCounter="3"/>
      <div class="nav-buttons-container">
        <green-button label="Anterior" :isInverted="true" @click.native="redirectPreviousRecord"/>
        <green-button label="Próximo" @click.native="redirectNextRecord"/>
      </div>
      <pause-button />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import MainFooter from '../../components/MainFooter.vue'
import GreenButton from '../../components/GreenButton.vue'
import PauseButton from '../../components/PauseButton.vue'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import NutritionistRadius from '../../components/NutritionistRadius.vue'
import DefaultSelect from '../../components/DefaultSelect.vue'
import axios from 'axios'
import { baseUrl } from '../../global'

export default {
  components: {
    Header,
    MainFooter,
    GreenButton,
    PauseButton,
    EvaluationBreadcrumbs,
    NutritionistRadius,
    DefaultSelect
  },
  data () {
    return {
      patient: {},
      options: [1, 2, 3]
    }
  },
  methods: {
    async getPatientInfo () {
      const patientId = this.$route.query.patient
      try {
        this.patient = await axios.get(`${baseUrl}/patient/${patientId}`)
          .then(res => res.data)
      } catch (err) {
        console.log(err)
      }
    },
    redirectNextRecord () {
      console.log(this.evaluation)
      this.$router.push(`/nutritionist/evaluation/medicalRecords12?
        patient=${this.$route.query.patient}&patient_evaluation=${this.$route.query.patient_evaluation}`)
    },
    redirectPreviousRecord () {
      this.$router.push(`/nutritionist/evaluation/medicalRecords10?
        patient=${this.$route.query.patient}&patient_evaluation=${this.$route.query.patient_evaluation}`)
    }
  },
  mounted () {
    this.getPatientInfo()
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    evaluation () {
      return this.$store.state.evaluation
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

.medical-records-grid-container {
  display: grid;
  grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
}

.grid-container {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 20px;
}

.grid-text-start {
  font-size: 20px;
  text-align: start;
  line-height: 40px;
}

.grid-text-center {
  font-size: 20px;
  text-align: center;
  line-height: 30px;
}

.grid-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-1 {
  grid-row: 1;
}

.row-2 {
  grid-row: 2;
}

.row-3 {
  grid-row: 3;
}

.row-4 {
  grid-row: 4;
}

.row-5 {
  grid-row: 5;
}

.row-6 {
  grid-row: 6;
}

.row-7 {
  grid-row: 7;
}

.column-1 {
  grid-column: 1;
}

.column-2 {
  grid-column: 2;
}

.column-3 {
  grid-column: 3;
}

.column-4 {
  grid-column: 4;
}

.column-5 {
  grid-column: 5;
}

.score-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.score-container input {
  width: 80px;
}

#total-score {
  font-size: 20px;
  color: #4CBA78;
  text-align: left;
  margin-top: 20px;
}

.no-margin {
  margin: 0;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
