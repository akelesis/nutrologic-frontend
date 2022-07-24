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
        <evaluation-breadcrumbs step="6" stepsCounter="10"/>
        <p id="medical-records-title">Variação de Peso</p>
        <div class="weight-loss-container">
          <div class="weight-input-container">
              <span>Peso anterior: </span>
              <default-input v-model="evaluation.last_weight" inputType="text" placeholder=""/>
          </div>
          <div class="weight-input-container">
              <span>Peso atual: </span>
              <default-input v-model="evaluation.current_weight" inputType="text" placeholder=""/>
          </div>
          <div class="weight-input-container">
              <span>Percentual de perda: </span>
              <default-input v-model="evaluation.loss_percentage" inputType="text" placeholder=""/>
          </div>
          <default-checkbox v-model="evaluation.weightLoss2weeks" class="recent-weight-loss" id="recent-weight-loss" name="recent-weight-loss-check" label="Houve perda de peso nas últimas 2 semanas"/>
          <p id="total-score">Pontuação Total: 0</p>
        </div>
      </div>
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
import DefaultInput from '../../components/DefaultInput.vue'
import DefaultCheckbox from '../../components/DefaultCheckbox.vue'
import axios from 'axios'
import { baseUrl } from '../../global'

export default {
  components: {
    Header,
    MainFooter,
    GreenButton,
    PauseButton,
    EvaluationBreadcrumbs,
    DefaultInput,
    DefaultCheckbox
  },
  data () {
    return {
      patient: {}
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
      this.$router.push(`/nutritionist/evaluation/medicalRecords07?
        patient=${this.$route.query.patient}&patient_evaluation=${this.$route.query.patient_evaluation}`)
    },
    redirectPreviousRecord () {
      this.$router.push(`/nutritionist/evaluation/medicalRecords05?
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

.weight-loss-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
}

.weight-loss-container label {
  font-size: 20px;
}

.weight-input-container {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  max-width: 300px;
  margin-bottom: 10px;
}

.weight-input-container input {
  width: 100px;
}

#total-score {
  font-size: 20px;
  color: #4CBA78;
  text-align: left;
  margin-top: 50px;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
