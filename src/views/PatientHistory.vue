<template>
  <div class="NutritionistDashboard">
    <Header headerStyle="NutritionistHeader" />
    <main class="patients-history-main">
      <div class="patients-history-top-content">
        <div class="nutritionist-name-container">
          <p>Dr(a). {{user.name}}</p>
        </div>
        <div class="patients-history-container">
          <p id="patient-name">{{patientHistory[0].patient_name}}</p>
          <table class="patients-history-table">
            <thead>
              <th>Data</th>
              <th>Horário</th>
              <th>Status</th>
              <th>Avaliação Global</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr v-for="history in patientHistory" :key="history.id">
                <td>{{history.created_at.split('T')[0] | formatedDate}}</td>
                <td>{{history.created_at.split('T')[1] | formatedTime}}</td>
                <td>{{history.evaluation_status}}</td>
                <td>{{history.global_eval ? history.global_eval : 'não definido'}}</td>
                <td class="action-buttons" v-if="history.global_eval === null">--</td>
                <td class="action-buttons" v-else>
                  <i class="fas fa-search"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <GreenButton label="Voltar" @click.native="redirectSearchPatients" />
    </main>
    <main-footer />
  </div>
</template>

<script>
import axios from 'axios'
import GreenButton from '../components/GreenButton.vue'
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
import { baseUrl } from '../global'
export default {
  components: {
    Header,
    MainFooter,
    GreenButton
  },
  data () {
    return {
      patientHistory: []
    }
  },
  methods: {
    async loadPatientHistory () {
      const patientId = this.$route.query.patient
      try {
        this.patientHistory = await axios.get(`${baseUrl}/patientHistory/${patientId}`)
          .then(res => res.data)
        console.log(this.patientHistory)
      } catch (err) {
        console.log(err)
      }
    },
    redirectSearchPatients () {
      this.$router.push('/nutritionist/searchPatients')
    }
  },
  filters: {
    formatedDate (date) {
      const splitDate = date.split('-')
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
    },
    formatedTime (UTCTime) {
      const hoursMinutesSeconds = UTCTime.split('.')[0]
      const splitTime = hoursMinutesSeconds.split(':')
      return `${splitTime[0]}:${splitTime[1]}`
    }
  },
  mounted () {
    this.loadPatientHistory()
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
.NutritionistDashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
}

.patients-history-main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 50px;
}

#patient-name {
  font-size: 30px;
  color: #B0B0B0;
  margin-bottom: 40px;
}

.patients-history-top-content{
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

.patients-history-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 60vw;
  max-height: 500px;
  overflow: auto;
  margin-top: 50px;
  margin-bottom: 30px;
}

.patients-history-table{
  width: 100%;
  text-align: start;
  border-collapse: collapse;
  font-size: 25px;
  color: #B0B0B0;
}

.patients-history-table thead {
  border-bottom: 1px solid #C4C4C4;
}

.patients-history-table th {
  text-align: start;
}

.patients-history-table thead::after {
  height: 10px;
  display: table-row;
  content: '';
}

.patients-history-table tbody::before {
  height: 10px;
  display: table-row;
  content: '';
}

.patients-history-table tr{
  line-height: 40px;
}

.action-buttons {
  display: flex;
  justify-content: flex-start;
  padding-left: 20%;
  color: #58E28F;
}

.action-buttons i:hover{
  cursor: pointer;
  filter: brightness(80%);
}
</style>
