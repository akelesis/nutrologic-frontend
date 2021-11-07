<template>
  <div class="MedicalRecords">
    <Header headerStyle="NutritionistHeader" />
    <main class="medical-records-main">
      <div class="medical-records-container">
        <div class="nutritionist-name-container">
          <p>{{ user.name }}</p>
        </div>
        <div class="medical-records-container">
          <div class="patient-name-file-container">
            <span>Júlia Santana</span>
            <i class="far fa-file-alt" />
          </div>
          <evaluation-breadcrumbs step="2" stepsCounter="10" />
          <p id="medical-records-title">Cadastro de Prontuário e Avaliação</p>
          <div class="medical-records-content-container">
            <default-text-area placeholder="Exames Laboratoriais"/>
            <default-text-area placeholder="Medicamentos em uso"/>
            <div class="medical-record-alergy-container">
              <p class="question-title">Alergia ou intolerância alimentar:</p>
              <div class="radius-group">
                <nutritionist-radius id="positive-alergy" name="alergy-radius" value="Sim" />
                <nutritionist-radius id="positive-alergy" name="alergy-radius" value="Não" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main-footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import MainFooter from '../../components/MainFooter.vue'
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import DefaultTextArea from '../../components/DefaultTextArea.vue'
import NutritionistRadius from '../../components/NutritionistRadius.vue'
export default {
  components: {
    Header,
    MainFooter,
    EvaluationBreadcrumbs,
    DefaultTextArea,
    NutritionistRadius
  },
  data () {
    return {
      user: {
        name: 'Dr Teste'
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
  min-height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  color: #b0b0b0;
}

.medical-records-main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 80vh;
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
  justify-content: space-evenly;
  align-items: center;
}

.radius-group {
  display: flex;
}

.medical-record-alergy-container {
  width: 50vw;
}

.question-title {
  font-size: 20px;
  text-align: left;
}

</style>
