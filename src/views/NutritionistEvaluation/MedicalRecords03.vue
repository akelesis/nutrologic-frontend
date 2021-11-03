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
        <evaluation-breadcrumbs step="3"/>
        <p id="medical-records-title">Cadastro de Prontuário e Avaliação</p>
        <div class="medical-records-content-container">
          <div class="medical-records-evacuation">
            <p>Ritmo intestinal:</p>
            <div class="evacuation-radius-input">
              <nutritionist-radius value="Lento" id="evacuation-slow" name="evacuation"/>
              <nutritionist-radius value="Normal" id="evacuation-normal" name="evacuation"/>
              <nutritionist-radius value="Acelerado" id="evacuation-fast" name="evacuation"/>
            </div>
          </div>
          <div class="consistency-input-container">
            <span>Consistência: </span>
            <div class="consistency-text-input">
              <default-input inputType="text" placeholder=""/>
            </div>
          </div>
          <div class="medical-records-urinalysis">
            <p>Ritmo urinário:</p>
            <div class="urinalysis-radius-input">
              <nutritionist-radius value="Lento" id="urinalysis-slow" name="urinalysis"/>
              <nutritionist-radius value="Normal" id="urinalysis-normal" name="urinalysis"/>
              <nutritionist-radius value="Acelerado" id="urinalysis-fast" name="urinalysis"/>
            </div>
          </div>
          <default-text-area rows="3" placeholder="Evolução Clínica"/>
        </div>
      </div>
      <div class="nav-buttons-container">
        <green-button label="Anterior"/>
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
import DefaultTextArea from '../../components/DefaultTextArea.vue'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import NutritionistRadius from '../../components/NutritionistRadius.vue'
import DefaultInput from '../../components/DefaultInput.vue'

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
  margin-top: 20px;
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
  margin-top: 20px;
}

.nav-buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}
</style>
