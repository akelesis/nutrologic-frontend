<template>
  <div class="PatientEvaluationResult">
      <Header headerStyle="TransparentHeader"/>
      <main class="patient-result">
        <div class="head-information">
          <h2>Histórico de avaliações</h2>
          <p>
            {{user.name}} -
            {{ patientEval.created_at.split('T')[0] | formatedDate }} -
            {{patientEval.created_at.split('T')[1].split('.')[0]}}
          </p>
        </div>
        <div class="diagnosis-info">
          <div class="nutritional-orientation">
            <p>ORIENTAÇÃO NUTRICIONAL</p>
            <hr class="eval-result-hr" />
            <div class="nutrition-info">
              <p><strong>Suplementação:</strong> {{ patientEval.supplementation || 'Não definido' }}</p>
              <p><strong>Tipo de Suplementação:</strong> {{ patientEval.type_supplementation || 'Não definido' }}</p>
              <p><strong>Proteina:</strong> {{ patientEval.protein || 'Não definido' }}</p>
              <p><strong>Calorias:</strong> {{ patientEval.calories || 'Não definido' }}</p>
              <p><strong>Ômega Três:</strong> {{ patientEval.omega_three || 'Não definido' }}</p>
              <p><strong>Outras Orientações:</strong> {{ patientEval.other_guidelines || 'Não definido' }}</p>
            </div>
          </div>
        </div>
        <div class="erase-unfinished-evaluation" v-if="patientEval.evaluation_status == 'em espera'">
          <p>Esta avaliação ainda não foi aberta pelo nutricionista, deseja apagá-la?</p>
          <button class="erase-btn" @click="deleteEvaluation">Sim</button>
        </div>
        <blue-back-button class="back-button" @click.native="returnToHistory"/>
      </main>
      <main-footer :light="true" />
  </div>
</template>

<script>
import axios from 'axios'
import BlueBackButton from '../components/BlueBackButton.vue'
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
import { baseUrl } from '../global'
export default {
  components: { Header, MainFooter, BlueBackButton },
  data () {
    return {
      patientEval: {}
    }
  },
  methods: {
    async getPatientEvaluation () {
      try {
        this.patientEval = await axios.get(`${baseUrl}/patient/evaluation/${this.$route.params.eval_id}`)
          .then(res => res.data[0])
      } catch (err) {
        console.log(err)
      }
    },
    async deleteEvaluation () {
      try {
        await axios.put(`${baseUrl}/evaluation/${this.$route.params.eval_id}`, { evaluation_status: 'inativa' })
        this.$router.push('/patient/evaluationHistory')
      } catch (err) {
        console.log(err)
      }
    },
    returnToHistory () {
      this.$router.push('/patient/evaluationHistory')
    }
  },
  filters: {
    formatedDate (date) {
      const splitDate = date.split('-')
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    this.getPatientEvaluation()
  }

}
</script>

<style>
.PatientEvaluationResult {
  min-height: 100vh;
  width: 100vw;
  background-image: radial-gradient(#5dbef4, #348ac8);
  background-size: 300% 300%;
  animation-name: gentleRoundMove;
  animation-duration: 7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
}

.patient-result {
  display: flex;
  min-height: 70vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.head-information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100px;
  color: #fff;
  width: 100vw;
  padding: 10px 20px;
  font-size: 1.4em;
}

.diagnosis-info {
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  font-size: 1.3em;
  color: #fff;
}

.diagnosis-info hr {
  width: 50vw;
  border-color: #fff;
  height: 3px;
  background-color: #fff;
  margin: 10px 0;
}

.nutrition-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.erase-unfinished-evaluation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  padding: 20px;
  color: #fff;
  font-size: 1.3em;
  margin-bottom: 50px;
}

.erase-btn {
  margin: 0 10px;
  padding: 5px 20px;
  border: none;
  background-color: #348ac8;
  color: #fff;
  font-size: 1.1em;
  border-radius: 10px;
  box-shadow: 0 4px 4px #0004;
  cursor: pointer;
  transition: .3s;
}

.erase-btn:hover {
  box-shadow: 0 0 0 #0004;
}

</style>
