<template>
  <div class="MedicalRecords">
    <Header headerStyle="NutritionistHeader" />
    <main class="medical-records-main">
      <div class="medical-records-container">
        <div class="nutritionist-name-container">
          <p>Dr(a) {{ user.name }}</p>
        </div>
        <div class="medical-records-container">
          <div class="patient-name-file-container">
            <span>{{patient.patient_name}}</span>
            <i class="far fa-file-alt" />
          </div>
          <evaluation-breadcrumbs step="1" stepsCounter="10" />
          <p id="medical-records-title">Cadastro de Prontuário e Avaliação</p>
          <div class="medical-records-content-container">
            <div class="nutritionist-input-group">
              <default-input v-model="evaluation.med_record_number" placeholder="Número do prontuário"/>
            </div>
            <div class="nutritionist-input-group">
              <default-input v-model="evaluation.companion" placeholder="Acompanhante"/>
              <default-input v-model="evaluation.diagnosis" placeholder="Diagnóstico"/>
            </div>
            <div class="desease-info-container">
              <p class="question-title">Estadiamento:</p>
              <div class="desease-stage-container">
                <div class="radius-group">
                  <nutritionist-radius id="one" v-model="evaluation.state" name="desease-stage-radius" label="I" />
                  <nutritionist-radius id="two" v-model="evaluation.state" name="desease-stage-radius" label="II" />
                  <nutritionist-radius id="three" v-model="evaluation.state" name="desease-stage-radius" label="III" />
                  <nutritionist-radius id="four" v-model="evaluation.state" name="desease-stage-radius" label="IV" />
                </div>
                <div class="tmng-fields">
                  <label for="t-field">T</label>
                  <input type="text" v-model="evaluation.t"  class="tmng-field" id="t-field">
                  <label for="m-field">M</label>
                  <input type="text" v-model="evaluation.m" id="m-field" class="tmng-field">
                  <label for="n-field">N</label>
                  <input type="text" v-model="evaluation.n"  id="n-field" class="tmng-field">
                  <label for="g-field">G</label>
                  <input type="text" v-model="evaluation.g" id="g-field" class="tmng-field">
                </div>
              </div>
            </div>
            <default-text-area v-model="evaluation.treatment" placeholder="Tratamento" :rows="3"/>
          </div>
        </div>
        <green-button label="Próximo" @click.native="redirectMedicalRecord02"/>
        <pause-button />
      </div>
    </main>
    <main-footer />
    <modal />
    <overlay />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import MainFooter from '../../components/MainFooter.vue'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import NutritionistRadius from '../../components/NutritionistRadius.vue'
import DefaultInput from '../../components/DefaultInput.vue'
import DefaultTextArea from '../../components/DefaultTextArea.vue'
import GreenButton from '../../components/GreenButton.vue'
import PauseButton from '../../components/PauseButton.vue'
import Modal from '../../components/Modal.vue'
import Overlay from '../../components/Overlay.vue'
import axios from 'axios'
import { baseUrl } from '../../global'
export default {
  components: {
    Header,
    MainFooter,
    EvaluationBreadcrumbs,
    NutritionistRadius,
    DefaultInput,
    DefaultTextArea,
    GreenButton,
    PauseButton,
    Modal,
    Overlay
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
    redirectMedicalRecord02 () {
      console.log(this.patient)
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
  align-items: center;
  height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  color: #B0B0B0;
}

.medical-records-main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  color: #b0b0b0;
}

.medical-records-container {
  display: flex;
  flex-direction: column;
  min-width: 60vw;
  height: 100%;
  align-items: center;
  margin: 0;
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
  background-color: #58e28f;
  border: 3px solid #58e28f;
  border-radius: 2px;
  box-shadow: 1px 1px 5px 1px #dadada;
  align-self: center;
  font-size: 25px;
}

.patient-name-file-container i:hover {
  cursor: pointer;
  filter: brightness(95%);
}

.medical-records-content-container {
  margin-top: 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 30vw;
}

.medical-records-content-container input {
  font-family: "Roboto Condensed", sans-serif;
}

.nutritionist-input-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0;
}

.radius-group {
  display: flex;
}

.desease-stage-container {
  justify-content: flex-start;
  margin: 0 0 40px 0;
}

.desease-info-container {
  width: 100%;
}

.question-title {
  font-size: 20px;
  text-align: left;
}

.tmng-field {
  width: 40px;
  border: none;
  border-bottom: 1px solid #C4C4C4;
  transition: .2s;
}

.tmng-field:focus {
  outline: none;
  border-bottom: 3px solid #58e28f;
}

.desease-stage-container {
  display: flex;
  justify-content: space-between;
}

#medical-records-title {
  font-size: 20px;
  margin-bottom: 30px;
}

</style>
