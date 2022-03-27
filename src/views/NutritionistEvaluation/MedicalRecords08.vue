<template>
  <div class="MedicalRecords">
    <Header headerStyle="NutritionistHeader"/>
    <main class="medical-records-main">
      <div class="nutritionist-name-container">
        <p>{{user.name}}</p>
      </div>
      <div class="medical-records-container">
        <div class="patient-name-file-container">
          <span>Júlia Santana</span>
          <i class="far fa-file-alt" />
        </div>
        <evaluation-breadcrumbs step="8" stepsCounter="10"/>
        <p id="medical-records-title">Demanda Metabólica</p>
        <div class="medical-records-input-container">
          <div class="grid-container">
            <p class="grid-title">Febre</p>
            <nutritionist-radius class="row-1 column-1" value="Sem febre" id="temperature-1" name="temperature"/>
            <nutritionist-radius class="row-2 column-1" value="Maior que 37.2ºC e menor que 38.3ºC" id="temperature-2" name="temperature"/>
            <nutritionist-radius class="row-1 column-2" value="Maior ou igual a 38.3ºC e menor que 38.9ºC" id="temperature-3" name="temperature"/>
            <nutritionist-radius class="row-2 column-2" value="Acima de 38.9ºC" id="temperature-4" name="temperature"/>
          </div>
          <div class="grid-container">
            <p class="grid-title">Tempo de febre</p>
            <nutritionist-radius class="row-1 column-1" value="Sem febre" id="duration-1" name="duration"/>
            <nutritionist-radius class="row-2 column-1" value="Menos de 72 horas" id="duration-2" name="duration"/>
            <nutritionist-radius class="row-1 column-2" value="Igual a 72 horas" id="duration-3" name="duration"/>
            <nutritionist-radius class="row-2 column-2" value="Acima de 72 horas" id="duration-4" name="duration"/>
          </div>
          <div class="grid-container">
            <p class="grid-title">Corticosteroides</p>
            <nutritionist-radius class="row-1 column-1" value="Sem corticosteoides" id="corticosteroids-1" name="corticosteroids"/>
            <nutritionist-radius class="row-2 column-1" value="Dose baixa (10mg equival. prednisolona/dia)" id="corticosteroids-2" name="corticosteroids"/>
            <nutritionist-radius class="row-1 column-2" value="Dose Moderada (≥ 10mb a < 30mg equival. prednisolona/dia)" id="corticosteroids-3" name="corticosteroids"/>
            <nutritionist-radius class="row-2 column-2" value="Dose elevada (≥ 30mg equival. prednisolona/dia)" id="corticosteroids-4" name="corticosteroids"/>
          </div>
        </div>
        <p id="total-score">Pontuação Total: 0</p>
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
import NutritionistRadius from '../../components/NutritionistRadius.vue'

export default {
  components: {
    Header,
    MainFooter,
    GreenButton,
    EvaluationBreadcrumbs,
    NutritionistRadius
  },
  data () {
    return {
      user: {
        name: 'Dr. João Carlos'
      }
    }
  },
  methods: {
    redirectNextRecord () {
      this.$router.push('/nutritionist/evaluation/medicalRecords09')
    },
    redirectPreviousRecord () {
      this.$router.push('/nutritionist/evaluation/medicalRecords07')
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

.medical-records-input-container {
  display: flex;
  flex-direction: column;
}

.grid-container {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 20px;
}

.grid-title {
  font-size: 25px;
  grid-row: 1;
  grid-column: 1 / span 2;
  margin-bottom: 10px;
}

.row-1 {
  grid-row: 2;
}

.row-2 {
  grid-row: 3;
}

.column-1 {
  grid-column: 1;
}

.column-2 {
  grid-column: 2;
}

#total-score {
  font-size: 20px;
  color: #4CBA78;
  text-align: left;
  margin-top: 20px;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
