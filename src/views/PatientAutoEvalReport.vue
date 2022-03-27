<template>
  <div class="NutritionistDashboard">
    <Header headerStyle="NutritionistHeader" />
    <main class="patients-evaluations-main">
      <div class="patients-evaluations-top-content">
        <div class="nutritionist-name-container">
          <p>Dr(a). {{ user.name }}</p>
        </div>
        <div class="patient-report-container">
          <h1>{{ patientInfo.patient_name }} - {{ evaluationInfo.created_at.split('T')[0] | formatedDate }}</h1>
          <div class="patient-report-info">
            <div class="patient-info">
              <h2 class="info-title">Peso</h2>
              <p>
                <span>Peso atual: {{ evaluationInfo.current_weight }} Kg</span>
                <span>Peso do mês anterior: {{ evaluationInfo.last_month_weight }} Kg</span>
              </p>
              <p>
                <span>Altura: {{ evaluationInfo.height }} m</span>
                <span>Peso seis mêses atrás: {{ evaluationInfo.last_semester_weight }} Kg</span>
              </p>
            </div>
            <div class="patient-info">
              <h2 class="info-title">Ingestão Alimentar</h2>
              <span>{{ evaluationInfo.food_amount_value }}</span>
            </div>
          </div>
          <div class="patient-report-info">
            <div class="patient-info">
              <h2 class="info-title">Sintomas</h2>
              <div class="symtoms-container">
                <span>{{ processedSymptoms }}</span>
              </div>
            </div>
            <div class="patient-info">
              <h2 class="info-title">Atividade e Função</h2>
              <span>{{ evaluationInfo.function_status }}</span>
            </div>
          </div>
        </div>
      </div>
      <GreenButton
        label="Voltar"
        @click.native="redirectNutritionistDashboard"
      />
    </main>
    <main-footer />
  </div>
</template>

<script>
import axios from 'axios'
import GreenButton from '../components/GreenButton.vue'
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: {
    Header,
    MainFooter,
    GreenButton
  },
  data () {
    return {
      processedSymptoms: '',
      patientInfo: {},
      evaluationInfo: {}
    }
  },
  filters: {
    formatedDate (date) {
      const splitDate = date.split('-')
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
    }
  },
  methods: {
    symptomsToString () {
      console.log(this.evaluationInfo)
      console.log('Teste')
      if (this.evaluationInfo) {
        for (let i = 0; i < this.evaluationInfo.symptoms.length; i++) {
          if (i < this.evaluationInfo.symptoms.length - 1) {
            this.processedSymptoms += this.evaluationInfo.symptoms[i].symptom_name +
              (this.evaluationInfo.symptoms[i].symptom_detail ? ' (' +
              this.evaluationInfo.symptoms[i].symptom_detail + ')' : '') + ', '
          } else {
            this.processedSymptoms += this.evaluationInfo.symptoms[i].symptom_name
          }
        }
      }
    },
    redirectNutritionistDashboard () {
      this.$router.push('/nutritionist/patientsEvaluations')
    },
    async getPatientInfo () {
      const patientId = this.$route.query.patient
      try {
        this.patientInfo = await axios.get(`http://localhost:4000/patient/${patientId}`)
          .then(res => res.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getPatientEvaluationInfo () {
      const patientEvalId = this.$route.query.patient_evaluation
      try {
        this.evaluationInfo = await axios.get(`http://localhost:4000/patientEval/${patientEvalId}`)
          .then(res => res.data)

        if (this.evaluationInfo) this.symptomsToString()
      } catch (err) {
        console.log(err)
      }
    },
    placeUserInGlobalStorage () {
      if (localStorage.getItem('__nutrologic_user_info')) {
        const user = JSON.parse(localStorage.getItem('__nutrologic_user_info'))
        this.$store.commit('setUser', user)
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    this.placeUserInGlobalStorage()
    this.getPatientInfo()
    this.getPatientEvaluationInfo()
  }
}
</script>

<style>
.NutritionistDashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
}

.patients-evaluations-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 50px;
}

.patients-evaluations-top-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.nutritionist-name-container {
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  padding-left: 50px;
}

.nutritionist-name-container p {
  font-size: 30px;
  color: #b0b0b0;
}

.patient-report-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  color: #b0b0b0;
}

.patient-report-container h1 {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
}

.patient-report-container .info-title{
  font-weight: 300;
  font-size: 30px;
  text-align: start;
  border-bottom: 2px solid #58E28F;
  padding-right: 100px;
  padding-left: 5px;
  margin-bottom: 10px;
}

.patient-report-info {
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin-top: 50px;
}

.patient-report-info p {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.patient-report-info span {
  font-size: 20px;
  line-height: 30px;
  text-align: start;
  margin-right: 20px;
}

.patient-info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
}

.symtoms-container{
  display: flex;
}

.symtoms-container span{
  margin-right: 5px;
}

.symtoms-container span::after{
  margin-right: 5px;
}
</style>
