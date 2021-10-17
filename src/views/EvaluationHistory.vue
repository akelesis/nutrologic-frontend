<template>
  <div class="EvaluationHistory">
    <Header headerStyle="TransparentHeader" />
    <div class="evaluation-history-container">
      <h1>Histórico de avaliações</h1>
      <table class="evaluation-history-table">
        <thead>
          <th>Data</th>
          <th>Nutricionista</th>
          <th>Status</th>
          <th>Categoria</th>
        </thead>
        <tbody>
          <tr v-for="evaluation in evaluationHistory" :key="evaluation.id" @click="redirectToResult(evaluation.id)">
            <td>{{ evaluation.date }}</td>
            <td>{{ evaluation.nutritionist }}</td>
            <td>{{ evaluation.evaluation_status }}</td>
            <td>{{ evaluation.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <blue-back-button />
    <main-footer :light="true" />
  </div>
</template>

<script>
import BlueBackButton from '../components/BlueBackButton.vue'
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: { Header, MainFooter, BlueBackButton },
  data () {
    return {
      evaluationHistory: [
        {
          id: 'xyz',
          date: '2021-08-20',
          nutritionist: 'Marcelo Castro',
          evaluation_status: 'em andamento',
          category: 'indefinido'
        },
        {
          id: 'yzx',
          date: '2021-07-15',
          nutritionist: 'Cristina Brito',
          evaluation_status: 'concluido',
          category: 'B'
        }
      ]
    }
  },
  methods: {
    redirectToResult (evaluationId) {
      this.$router.push('/patient/evaluationResult')
      console.log(evaluationId)
    }
  }
}
</script>

<style>
.EvaluationHistory {
  min-height: 100vh;
  background-image: radial-gradient(#5dbef4, #348ac8);
  background-size: 300% 300%;
  animation-name: gentleRoundMove;
  animation-duration: 7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.evaluation-history-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
  margin-top: 50px;
  height: 650px;
}

.evaluation-history-container > h1 {
  font-size: 40px;
}

.evaluation-history-table {
    font-size: 25px;
    min-width: 50vw;
    margin-top: 50px;
    font-weight: 300;
    border-collapse: collapse;
    text-align: start;
    max-height: 500px;
    overflow: auto;
    margin-bottom: 30px;
}

.evaluation-history-container th {
    text-align: start;
}

.evaluation-history-container tbody::before {
    height: 30px;
    display: table-row;
    content: '';
}

.evaluation-history-container tr {
    border-bottom: 1px solid #fff;
    cursor: pointer;
}

.evaluation-history-container tr:hover {
    filter: brightness(80%);
}

.evaluation-history-container td {
    padding: 10px 5px;
}

@keyframes gentleRoundMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>
