<template>
  <div class="Symptoms">
    <Header headerStyle="TransparentHeader" />
    <main class="symptoms-container">
      <div class="symptoms-header">
        <p>{{ patient.name }} - Auto Avaliação</p>
        <evaluation-breadcrumbs step="3" />
        <p class="page-title">Sintomas</p>
      </div>
      <div class="symptoms-container">
        <p>Durante as últimas duas semanas eu tenho tido os seguintes problemas que me impedem de comer o suficiente (marque todos os que tiver sentindo):</p>
        <div class="symptoms-grid">
          <symptom-button class="symptom-btn" v-for="symptom in symptoms" :key="symptom.description" :label="symptom.description" :status="symptom.status" />
        </div>
      </div>
      <div class="btn-container">
        <div class="next-page-btn">ANTERIOR</div>
        <div class="next-page-btn">PRÓXIMO</div>
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
export default {
  components: {
    Header,
    EvaluationBreadcrumbs,
    MainFooter,
    SymptomButton
  },
  data () {
    return {
      patient: {
        name: 'José Silva'
      },
      symptoms: [
        {
          description: 'Sem problemas para me alimentar',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Vômitos',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Sem apetite, apenas sem vontade de comer',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Náuseas',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Boca seca',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Obstipação (Intestino preso)',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Os cheiros me incomodam',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Feridas na boca',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Me sinto rapidamente satisfeito',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Dor',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Coisas tem gosto estranho ou não tem gosto',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Cansaço, fadiga',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Problemas para engolir',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Diarréia',
          status: 'inactive',
          score: 0
        },
        {
          description: 'Outros',
          status: 'inactive',
          score: 0
        }
      ]
    }
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

</style>
