<template>
  <div class="ActivitiesAndFunctions">
      <Header headerStyle="TransparentHeader"/>
      <main class="activities-container">
        <div class="activities-header">
          <p>{{ user.name }} - Auto Avaliação</p>
          <evaluation-breadcrumbs step="4" evalType="patient" stepsCounter="4"/>
          <p>Atividade e Função</p>
        </div>
        <div class="activities-body">
          <p>No último mês, de um modo geral eu consideraria a minha atividade (função) como:</p>
          <div class="activity-options">
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" v-model="patientEvaluation.function_status" name="food-amount" id="normal" value="Normal, sem nenhuma limitação" />
                <span class="radio-control"></span>
              </span>
              <label for="normal">Normal, sem nenhuma limitação</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" v-model="patientEvaluation.function_status" name="food-amount" id="not-normal" value="Não totalmente normal, mas capaz de manter quase todas as atividades normais" />
                <span class="radio-control"></span>
              </span>
              <label for="not-normal">Não totalmente normal, mas capaz de manter quase todas as atividades normais</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" v-model="patientEvaluation.function_status" name="food-amount" id="no-energy" value="Sem disposição para a maioria das coisas mas ficando na cama ou na cadeira menos da metade do dia" />
                <span class="radio-control"></span>
              </span>
              <label for="no-energy">Sem disposição para a maioria das coisas mas ficando na cama ou na cadeira menos da metade do dia</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" v-model="patientEvaluation.function_status" name="food-amount" id="too-few-capability" value="Capaz de fazer pouca atividade e passando maior parte do dia na cadeira ou na cama" />
                <span class="radio-control"></span>
              </span>
              <label for="too-few-capability">Capaz de fazer pouca atividade e passando maior parte do dia na cadeira ou na cama</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" v-model="patientEvaluation.function_status" name="food-amount" id="in-bed" value="Praticamente acamado, raramente fora da cama" />
                <span class="radio-control"></span>
              </span>
              <label for="in-bed">Praticamente acamado, raramente fora da cama</label>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <div class="next-page-btn" @click="redirectSymptoms">ANTERIOR</div>
          <div class="next-page-btn" @click="finishEvaluation">FINALIZAR</div>
        </div>
      </main>
      <main-footer :light="true" />
  </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from '../../global'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import Header from '../../components/Header.vue'
import MainFooter from '../../components/MainFooter.vue'
export default {
  components: { Header, MainFooter, EvaluationBreadcrumbs },
  data () {
    return {
      patientEval: {},
      patientSymptoms: []
    }
  },
  methods: {
    divideData () {
      this.patientEval.patient_id = this.user.id
      this.patientEval.current_weight = this.patientEvaluation.currentWeight
      this.patientEval.last_month_weight = this.patientEvaluation.oneMonthWeight
      this.patientEval.last_semester_weight = this.patientEvaluation.sixMonthsWeight
      this.patientEval.height = this.patientEvaluation.sizeMeters + '.' + this.patientEvaluation.sizeCentimeters
      this.patientEval.first_screen_value = 0
      this.patientEval.weight_gain_status = this.patientEvaluation.weightStatus
      this.patientEval.weight_gain_value = 0
      this.patientEval.food_amount_status = this.patientEvaluation.foodAmountStatus
      this.patientEval.food_amount_value = this.patientEvaluation.foodAmountValue
      this.patientEval.second_screen_value = 0
      this.patientEval.third_screen_value = 0
      this.patientEval.function_status = this.patientEvaluation.function_status
      this.patientEval.function_value = 0
      this.patientEval.fourth_screen_value = 0
      this.patientSymptoms = this.patientEvaluation.activeSymptoms
      const indexPain = this.patientEvaluation.activeSymptoms.indexOf('Dor')
      const indexOther = this.patientEvaluation.activeSymptoms.indexOf('Outros')
      if (indexPain !== -1) {
        this.patientSymptoms[indexPain].symptom_detail = this.patientEvaluation.painDetails
      }
      if (indexOther !== -1) {
        this.patientSymptoms[indexOther].symptom_detail = this.patientEvaluation.otherDetails
      }
    },
    sendPatientEvalToDatabase () {
      return axios.post(`${baseUrl}/patientEval`, this.patientEval)
    },
    sendPatientSymptomsToDatabase (patientEvaluation) {
      console.log(this.patientSymptoms)
      return axios.post(`${baseUrl}/symptomByPatient`, { symptoms: this.patientSymptoms, evaluation: patientEvaluation })
    },
    createEvaluation (patientEvaluationId) {
      return axios.post(`${baseUrl}/evaluation`, { patient_evaluation_id: patientEvaluationId })
    },
    redirectSymptoms () {
      this.$router.push('/patient/evaluation/symptoms')
    },
    redirectToPatientHome () {
      this.$router.push('/patient/dashboard')
    },
    async finishEvaluation () {
      this.divideData()
      try {
        const patientEvalRes = await this.sendPatientEvalToDatabase()
        const patientSymptomsRes = await this.sendPatientSymptomsToDatabase(patientEvalRes.data.patient_evaluation_id)
        const evalRes = await this.createEvaluation(patientEvalRes.data.patient_evaluation_id)
        if (patientEvalRes && patientSymptomsRes && evalRes) {
          alert('Avaliação Salva com sucesso!')
          this.redirectToPatientHome()
        }
      } catch (err) {
        console.log({ ...err })
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    patientEvaluation () {
      return this.$store.state.patientEvaluation
    }
  },
  mounted () {
    console.log(this.patientEvaluation)
  }

}
</script>

<style>
.ActivitiesAndFunctions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: radial-gradient(#45d2db, #34adc8);
  background-size: 300% 300%;
  animation-name: gentleRoundMove;
  animation-duration: 7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  color: #fff;
}

.activities-header p {
  font-size: 30px;
}

.activities-container {
  font-size: 25px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.activities-body {
  margin-top: 50px;
}

.activity-options {
  margin-top: 30px;
  justify-content: flex-start;
}

.option-group {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  margin: 10px 0;
}

.option-group label {
  margin-left: 5px;
  text-align: left;
  width: 80%;
}

.radio-input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radio-input input {
  opacity: 0;
  position: absolute;
}

.radio-input input:checked + .radio-control {
  background: radial-gradient(#3c90b4 30%, #fff 31%);
}

.radio-control {
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.1em solid #3C90B4;
  background: #fff;
}

.next-page-btn {
  background-color: #3c90b4;
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 4px #0004;
  cursor:pointer;
  transition: .2s;
  margin: 30px 10px;
}

.next-page-btn:hover {
  box-shadow: 0 0 1px #0004;
}

.btn-container {
  display: flex;
}

</style>
