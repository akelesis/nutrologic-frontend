<template>
  <div class="Symptoms">
    <Header headerStyle="TransparentHeader" />
    <main class="symptoms-container">
      <div class="symptoms-header">
        <p>{{ user.name }} - Auto Avaliação</p>
        <evaluation-breadcrumbs step="3" evalType="patient" stepsCounter="4" />
        <p class="page-title">Sintomas</p>
      </div>
      <div class="symptoms-container">
        <p>Durante as últimas duas semanas eu tenho tido os seguintes problemas que me impedem de comer o suficiente (marque todos os que tiver sentindo):</p>
        <div class="symptoms-grid">
          <symptom-button
            class="symptom-btn"
            :class="symptom.classList"
            v-for="symptom in symptoms"
            :key="symptom.symptom_name"
            :label="symptom.symptom_name"
            :status="symptom.status"
            @click.native="toggleSymptom(symptom)"
          />
        </div>
        <div class="pain-especification" v-if="patientEvaluation.activeSymptoms.find(symptom => symptom.symptom_name === 'Dor')">
          <label for="pain-input">Especifique o local da dor: </label>
          <input id='pain-input' type="text" v-model="patientEvaluation.painDetails">
        </div>
        <div class="other-especification" v-if="patientEvaluation.activeSymptoms.find(symptom => symptom.symptom_name === 'Outros')">
          <label for="other-input">Especifique o(s) sintoma(s) que não está(ão) listado(s): </label>
          <input id="other-input" type="text" v-model="patientEvaluation.otherDetails">
        </div>
      </div>
      <div class="btn-container">
        <div class="next-page-btn" @click="redirectToFoodIngestion">ANTERIOR</div>
        <div class="next-page-btn" @click="redirectToActivities">PRÓXIMO</div>
      </div>
    </main>
    <MainFooter :light="true" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import MainFooter from '../../components/MainFooter.vue'
import SymptomButton from '../../components/SymptomButton.vue'
import axios from 'axios'
import { baseUrl } from '../../global'
export default {
  components: {
    Header,
    EvaluationBreadcrumbs,
    MainFooter,
    SymptomButton
  },
  data () {
    return {
      symptoms: []
    }
  },
  methods: {
    redirectToFoodIngestion () {
      this.$router.push('/patient/evaluation/foodIngestion')
    },
    redirectToActivities () {
      console.log(this.patientEvaluation)
      this.$router.push('/patient/evaluation/activities')
    },
    getSymptoms () {
      axios.get(`${baseUrl}/symptom`)
        .then(res => {
          this.symptoms = res.data
        })
        .catch(err => { console.log(err.response.data) })
    },
    toggleSymptom (symptom) {
      if (this.patientEvaluation.activeSymptoms.find(activeSymptom => activeSymptom.symptom_name === symptom.symptom_name)) {
        this.removeFromActiveSymptoms(symptom)
      } else {
        this.addToActiveSymptoms(symptom)
      }
      this.$forceUpdate()
    },
    addToActiveSymptoms (symptom) {
      symptom.classList = 'active'
      this.patientEvaluation.activeSymptoms.push(symptom)
    },
    removeFromActiveSymptoms (symptom) {
      symptom.classList = ''
      this.patientEvaluation.activeSymptoms = this.patientEvaluation.activeSymptoms.filter(element => element.symptom_name !== symptom.symptom_name)
    },
    verifyActiveSymptoms () {
      this.symptoms.forEach(symptom => {
        for (let i = 0; i < this.patientEvaluation.activeSymptoms.length; i++) {
          if (this.patientEvaluation.activeSymptoms[i].symptom_name === symptom.symptom_name) {
            symptom.classList = 'active'
          }
        }
        this.$forceUpdate()
      })
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
    this.getSymptoms()
    if (!this.patientEvaluation.activeSymptoms) this.patientEvaluation.activeSymptoms = []
    setTimeout(() => {
      this.verifyActiveSymptoms()
    }, 300)
  }
}
</script>

<style>
.Symptoms {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

.symptoms-container {
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
}

.page-title {
  font-size: 1.2em;
}

.symptoms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 50px;
}

.symptom-btn {
  margin: 10px;
}

.btn-container {
  display: flex;
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

.active {
  background-color: #29ABC8;
  box-shadow: 0 0 10px #fff;
}

.pain-especification, .other-especification {
  font-size: 18px;
  margin: 5px 0;
}

.pain-especification input, .other-especification input {
  outline: none;
  background-color: #0000;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
}

</style>
