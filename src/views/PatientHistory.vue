<template>
  <div class="NutritionistDashboard">
    <Header headerStyle="NutritionistHeader" />
    <main class="patients-history-main">
      <div class="patients-history-top-content">
        <div class="nutritionist-name-container">
          <p>{{user.name}}</p>
        </div>
        <div class="patients-history-container">
          <p id="patient-name">{{user.patientName}}</p>
          <table class="patients-history-table">
            <thead>
              <th>Data</th>
              <th>Horário</th>
              <th>Status</th>
              <th>Pontuação</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr v-for="history in PatientHistory" :key="history.id">
                <td>{{history.data}}</td>
                <td>{{history.horario}}</td>
                <td>{{history.status}}</td>
                <td>{{history.pontuacao}}</td>
                <td class="action-buttons" v-if="history.pontuacao === 'undefined'">--</td>
                <td class="action-buttons" v-else>
                  <i class="fas fa-search"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <GreenButton label="Voltar"/>
    </main>
    <main-footer />
  </div>
</template>

<script>
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
      user: {
        name: 'Dr. João Carlos',
        patientName: 'Júlia Santana'
      },
      PatientHistory: [
        {
          id: '1',
          data: '01/08/2021',
          horario: '13:35',
          status: 'Aberta',
          pontuacao: 'undefined'
        },
        {
          id: '2',
          data: '04/07/2021',
          horario: '16:04',
          status: 'Em Andamento',
          pontuacao: 'undefined'
        },
        {
          id: '3',
          data: '20/06/2021',
          horario: '14:28',
          status: 'Finalizada',
          pontuacao: 'B'
        }
      ]
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
