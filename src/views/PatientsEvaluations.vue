<template>
  <div class="NutritionistDashboard">
    <Header headerStyle="NutritionistHeader" />
    <main class="patients-evaluations-main">
      <div class="patients-evaluations-top-content">
        <div class="nutritionist-name-container">
          <p>Dr(a). {{user.name}}</p>
        </div>
        <div class="patients-evaluations-container">
          <table class="patients-evaluations-table">
            <thead>
              <th>Data</th>
              <th>Horário</th>
              <th>Nome</th>
              <th>Nutricionista</th>
              <th>Status</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr v-for="evaluation in PatientEvaluations" :key="evaluation.id">
                <td>{{ evaluation.created_at.split('T')[0] | formatedDate }}</td>
                <td>{{ evaluation.created_at.split('T')[1].split('.')[0] }}</td>
                <td>{{evaluation.patient_name}}</td>
                <td>{{evaluation.nutritionist_name || '-'}}</td>
                <td>{{evaluation.evaluation_status}}</td>
                <td class="action-buttons">
                  <i class="far fa-check-square"></i>
                  <i class="fas fa-search" @click="redirectPatientAutoEvalReport"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <GreenButton label="Voltar" @click.native="redirectNutritionistDashboard"/>
    </main>
    <main-footer />
  </div>
</template>

<script>
import axios from 'axios'
import GreenButton from '../components/GreenButton.vue'
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: {
    Header,
    MainFooter,
    GreenButton
  },
  data () {
    return {
      PatientEvaluations: []
    }
  },
  filters: {
    formatedDate (date) {
      const splitDate = date.split('-')
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
    }
  },
  methods: {
    async getOpenEvaluations () {
      this.PatientEvaluations = await axios.get('http://localhost:4000/evaluation')
        .then(res => res.data)
        .catch(err => console.log(err))
    },
    redirectNutritionistDashboard () {
      this.$router.push('/nutritionist/dashboard')
    },
    redirectPatientAutoEvalReport () {
      this.$router.push('/nutritionist/patientAutoEvalReport')
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    this.getOpenEvaluations()
    console.log(this.PatientEvaluations)
  }
}
</script>

<style>
.NutritionistDashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
}

.patients-evaluations-main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 50px;
}

.patients-evaluations-top-content{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

.patients-evaluations-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 70vw;
  max-height: 500px;
  overflow: auto;
  margin-top: 50px;
  margin-bottom: 30px;
}

.patients-evaluations-table{
  width: 100%;
  text-align: start;
  border-collapse: collapse;
  font-size: 25px;
  color: #B0B0B0;
}

.patients-evaluations-table thead {
  border-bottom: 1px solid #C4C4C4;
}

.patients-evaluations-table th {
  text-align: start;
}

.patients-evaluations-table thead::after {
  height: 10px;
  display: table-row;
  content: '';
}

.patients-evaluations-table tbody::before {
  height: 10px;
  display: table-row;
  content: '';
}

.patients-evaluations-table tr{
  line-height: 40px;
}

.action-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #58E28F;
}

.action-buttons i:hover{
  cursor: pointer;
  filter: brightness(80%);
}
</style>
