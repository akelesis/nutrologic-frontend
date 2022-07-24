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
        <evaluation-breadcrumbs step="3" stepsCounter="10"/>
        <p id="medical-records-title">Cadastro de Prontuário e Avaliação</p>
        <div class="medical-records-content-container">
          <div class="medical-records-evacuation">
            <p>Ritmo intestinal:</p>
            <div class="evacuation-radius-input">
              <nutritionist-radius v-model="evaluation.bowel_movements" label="Lento" id="evacuation-slow" name="evacuation"/>
              <nutritionist-radius v-model="evaluation.bowel_movements" label="Normal" id="evacuation-normal" name="evacuation"/>
              <nutritionist-radius v-model="evaluation.bowel_movements" label="Acelerado" id="evacuation-fast" name="evacuation"/>
            </div>
          </div>
          <div class="consistency-input-container">
            <span>Consistência: </span>
            <div class="consistency-text-input">
              <default-input v-model="evaluation.consistency" inputType="text" placeholder=""/>
            </div>
          </div>
          <div class="medical-records-urinalysis">
            <p>Ritmo urinário:</p>
            <div class="urinalysis-radius-input">
              <nutritionist-radius v-model="evaluation.urinary_rhythm" label="Lento" id="urinalysis-slow" name="urinalysis"/>
              <nutritionist-radius v-model="evaluation.urinary_rhythm" label="Normal" id="urinalysis-normal" name="urinalysis"/>
              <nutritionist-radius v-model="evaluation.urinary_rhythm" label="Acelarado" id="urinalysis-fast" name="urinalysis"/>
            </div>
          </div>
          <default-text-area v-model="evaluation.clinicalEvolution" rows="3" placeholder="Evolução Clínica"/>
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
import DefaultTextArea from '../../components/DefaultTextArea.vue'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import NutritionistRadius from '../../components/NutritionistRadius.vue'
import DefaultInput from '../../components/DefaultInput.vue'
import axios from 'axios'
import { baseUrl } from '../../global'

export default {
  components: {
    Header,
    MainFooter,
    GreenButton,
    PauseButton,
    DefaultTextArea,
    EvaluationBreadcrumbs,
    NutritionistRadius,
    DefaultInput
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
      this.$router.push(`/nutritionist/evaluation/medicalRecords04?
        patient=${this.$route.query.patient}&patient_evaluation=${this.$route.query.patient_evaluation}`)
    },
    redirectPreviousRecord () {
      this.$router.push(`/nutritionist/evaluation/medicalRecords02?
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

.nutritionist-name-container{
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  padding-left: 50px;
}

.nutritionist-name-container p{
  font-size: 30px;
  color: #B0B0B0;
}

.medical-records-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin-bottom: 30px;
}

.medical-records-content-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.medical-records-evacuation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.medical-records-evacuation p {
  font-size: 20px;
  margin-bottom: 5px;
}

.evacuation-radius-input {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.medical-records-urinalysis {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 20px;
}

.medical-records-urinalysis p {
  font-size: 20px;
  margin-bottom: 5px;
}

.urinalysis-radius-input {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.consistency-input-container {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 50%;
  font-size: 20px;
  margin-top: 40px;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
