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
        <evaluation-breadcrumbs step="4" stepsCounter="10"/>
        <p id="medical-records-title">Cadastro de Prontuário e Avaliação - Antropometria</p>
        <div class="medical-records-form-container">
          <div class="input-row-container">
            <div class="input-container">
              <span>Altura: </span>
              <div>
                <default-input v-model="evaluation.height" inputType="text" placeholder=""/>
                <span>m</span>
              </div>
            </div>
            <div class="input-container">
              <span>Peso atual: </span>
              <div>
                <default-input v-model="evaluation.current_weight" inputType="text" placeholder=""/>
                <span>Kg</span>
              </div>
            </div>
          </div>
          <div class="input-row-container">
            <div class="input-container">
              <span>Peso usual: </span>
              <div>
                <default-input v-model="evaluation.usual_weight" inputType="text" placeholder=""/>
                <span>Kg</span>
              </div>
            </div>
            <div class="input-container">
              <span>Obs. peso atual: </span>
              <default-input v-model="evaluation.usual_weight_note" inputType="text" placeholder=""/>
            </div>
          </div>
          <div class="input-row-container">
            <div class="input-container">
              <span>%PP: </span>
              <div>
                <default-input v-model="evaluation.pp" inputType="text" placeholder=""/>
                <span>%</span>
              </div>
            </div>
            <div class="input-container">
              <span>Obs. %PP: </span>
              <default-input v-model="evaluation.pp_note" inputType="text" placeholder=""/>
            </div>
          </div>
          <div class="input-row-container">
            <div class="input-container">
              <span>IMC: </span>
              <div>
                <default-input v-model="evaluation.imc" inputType="text" placeholder=""/>
                <span>Kg/m²</span>
              </div>
            </div>
            <div class="input-container">
              <span>Cabd: </span>
              <div>
                <default-input v-model="evaluation.cabd" inputType="text" placeholder=""/>
                <span>cm</span>
              </div>
            </div>
          </div>
          <div class="input-row-container">
            <div class="input-container">
              <span>AMBc: </span>
              <div>
                <default-input v-model="evaluation.ambc" inputType="text" placeholder=""/>
                <span>cm</span>
              </div>
            </div>
            <div class="input-container">
              <span>Dinamometria: </span>
              <div>
                <default-input v-model="evaluation.dynamometry" inputType="text" placeholder=""/>
                <span>cm</span>
              </div>
            </div>
          </div>
          <div class="last-input-container">
            <span>Circunferência da panturrilha: </span>
            <div>
              <default-input v-model="evaluation.calfCircumference" inputType="text" placeholder=""/>
              <span>cm</span>
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
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import DefaultInput from '../../components/DefaultInput.vue'
import axios from 'axios'
import { baseUrl } from '../../global'

export default {
  components: {
    Header,
    MainFooter,
    GreenButton,
    EvaluationBreadcrumbs,
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
      this.$router.push(`/nutritionist/evaluation/medicalRecords05?
        patient=${this.$route.query.patient}&patient_evaluation=${this.$route.query.patient_evaluation}`)
    },
    redirectPreviousRecord () {
      this.$router.push(`/nutritionist/evaluation/medicalRecords03?
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
  margin-bottom: 30px;
}

.medical-records-form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.input-row-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
}

.input-container {
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.input-container div {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}

.input-container input {
  max-width: 50%;
  margin-right: 10px;
}

.last-input-container {
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 50%;
  font-size: 25px;
}

.last-input-container div {
  width: 30%;
}

.last-input-container input {
  width: 50%;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
