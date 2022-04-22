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
        <evaluation-breadcrumbs step="2" stepsCounter="10" />
        <p id="medical-records-title">Cadastro de Prontuário e Avaliação</p>
        <div class="medical-records-content-container">
          <default-text-area v-model="evaluation.lab_exams" rows="3" placeholder="Exames laboratoriais"/>
          <default-text-area v-model="evaluation.medicines" rows="3" placeholder="Medicamentos em uso"/>
          <div class="medical-records-allergies">
            <p>Alergia ou intolerância alimentar:</p>
            <div class="allergies-radius-input">
              <nutritionist-radius v-model="evaluation.alergies" value="Não" id="allergies-no" name="allergies"/>
              <nutritionist-radius v-model="evaluation.alergies" value="Sim" id="allergies-yes" name="allergies"/>
            </div>
            <default-text-area v-model="evaluation.foods" rows="2" placeholder="Alimentos relacionados"/>
          </div>
          <div class="medical-records-exercises">
            <div class="exercises-input-container">
              <p>Atividades físicas:</p>
              <div class="exercises-radius-input">
                <nutritionist-radius v-model="evaluation.physical_activities" value="Não" id="exercises-no" name="exercises"/>
                <nutritionist-radius v-model="evaluation.physical_activities" value="Sim" id="exercises-yes" name="exercises"/>
              </div>
            </div>
            <div class="exercises-input-container">
              <p>Frequência semanal:</p>
              <div class="exercises-text-input">
                <default-input v-model="evaluation.frequency" inputType="text" placeholder=""/>
              </div>
            </div>
          </div>
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
      this.$router.push(`/nutritionist/evaluation/medicalRecords03?
        patient=${this.$route.query.patient}&patient_evaluation=${this.$route.query.patient_evaluation}`)
    },
    redirectPreviousRecord () {
      this.$router.push(`/nutritionist/evaluation/medicalRecords01?
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
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0;
}

.medical-records-allergies {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
}

.medical-records-allergies p {
  font-size: 20px;
  margin-bottom: 5px;
}

.allergies-radius-input {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.medical-records-exercises {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  width: 100%;
}

.exercises-input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 50%;
}

.exercises-input-container p {
  font-size: 20px;
  margin-bottom: 5px;
}

.exercises-radius-input {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.exercises-text-input input {
  display: flex;
  justify-content: flex-start;
  width: 50%;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
