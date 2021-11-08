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
        <evaluation-breadcrumbs step="5" stepsCounter="10"/>
        <p id="medical-records-title">Cadastro de Prontuário e Avaliação - Outros</p>
        <div class="medical-records-grid-container">
          <p>IDN</p>
          <div class="medical-records-left-input">
            <nutritionist-radius value="Desnutrição Grave" id="IDN-1" name="IDN"/>
            <nutritionist-radius value="Desnutrição Moderada" id="IDN-2" name="IDN"/>
            <nutritionist-radius value="Desnutrição Leve" id="IDN-3" name="IDN"/>
            <nutritionist-radius value="Magreza" id="IDN-4" name="IDN"/>
            <nutritionist-radius value="Eutrofia" id="IDN-5" name="IDN"/>
          </div>
          <div class="medical-records-right-input">
            <nutritionist-radius value="Sobrepeso" id="IDN-6" name="IDN"/>
            <nutritionist-radius value="Obesidade I" id="IDN-7" name="IDN"/>
            <nutritionist-radius value="Obesidade II" id="IDN-8" name="IDN"/>
            <nutritionist-radius value="Obesidade III" id="IDN-9" name="IDN"/>
          </div>
        </div>
        <div class="risks-input-container">
          <p>Risco Nutricional: </p>
          <div class="risks-radius-input">
            <nutritionist-radius value="Não" id="risks-no" name="risks"/>
            <nutritionist-radius value="Sim" id="risks-yes" name="risks"/>
          </div>
        </div>
        <div class="conduct-input-container">
          <p>Conduta: </p>
          <default-text-area rows="3" placeholder=""/>
        </div>
      </div>
      <div class="nav-buttons-container">
        <green-button label="Anterior" :isInverted="true"/>
        <green-button label="Próximo"/>
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
import DefaultTextArea from '../../components/DefaultTextArea.vue'

export default {
  components: {
    Header,
    MainFooter,
    GreenButton,
    EvaluationBreadcrumbs,
    NutritionistRadius,
    DefaultTextArea
  },
  data () {
    return {
      user: {
        name: 'Dr. João Carlos'
      }
    }
  }
}
</script>

<style>
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

.medical-records-grid-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  grid-column-gap: 150px;
  max-width: 50vw;
  margin-bottom: 20px;
}

.medical-records-grid-container label {
  font-size: 20px;
}

.medical-records-grid-container p {
  font-size: 25px;
  grid-column: 1 / 3;
  grid-row-start: 1;
}

.medical-records-left-input {
  grid-column: 1;
  grid-row: 2;
}

.medical-records-right-input {
  grid-column: 2;
  grid-row: 2;
}

.risks-input-container {
  margin-bottom: 20px;
}

.risks-input-container p, .risks-input-container label {
  font-size: 25px;
}

.risks-radius-input {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.conduct-input-container {
  font-size: 25px;
  min-width: 60%;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
