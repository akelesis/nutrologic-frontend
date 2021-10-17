<template>
  <div class="PatientDashboard">
    <Header headerStyle="PatientHeader" />
    <main class="patient-dashboard-main">
      <p>Olá {{user.name}}!</p>
      <div class="options-container">
        <button class="new-evaluation" @click="redirectEvaluation">NOVA AVALIAÇÃO</button>
        <button class="evaluations-history" @click="redirectEvaluationHistory">HISTÓRICO DE AVALIAÇÕES</button>
      </div>
    </main>
    <main-footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: {
    Header,
    MainFooter
  },
  data () {
    return {
      user: {
        name: 'João Carlos'
      }
    }
  },
  methods: {
    redirectEvaluationHistory () {
      this.$router.push('/patient/evaluationHistory')
    },
    redirectEvaluation () {
      this.$router.push('/patient/evaluation/weight')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');

.PatientDashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Roboto Condensed', sans-serif;
}

.patient-dashboard-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  font-weight: 300;
  color: #A4A4A4;
}

.patient-dashboard-main p {
  font-size: 40px;
}

.options-container {
  display: flex;
  justify-content: space-between;
  min-width: 50vw;
}

.new-evaluation, .evaluations-history {
  width: 300px;
  height: 300px;
  border: none;
  border-radius: 25px;
  font-size: 30px;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0 20px;
  transition: .5s;
  box-shadow: 0 4px 4px #0004;
}

.new-evaluation {
  background: radial-gradient(#5DEBF4, #34ADC8);
}

.evaluations-history {
  background: radial-gradient(#5DBEF4, #348AC8);
}

.new-evaluation:hover, .evaluations-history:hover {
  background-size: 300% 300%;
  background-position: center center;
  cursor: pointer;
  box-shadow: 0 0 1px #0004;
}

</style>
