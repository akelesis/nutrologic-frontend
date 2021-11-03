<template>
  <div class="NutritionistDashboard">
    <Header headerStyle="NutritionistHeader" />
    <main class="search-patients-main">
      <div class="search-patients-top-content">
        <div class="nutritionist-name-container">
          <p>{{user.name}}</p>
        </div>
        <div class="search-input-container">
          <input type="text" placeholder="Pesquisar"/>
          <i class="fas fa-search"></i>
        </div>
        <div class="search-patients-container">
          <table class="search-patients-table">
            <thead>
              <th>Última avaliação</th>
              <th>Nome</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr v-for="evaluation in PatientEvaluations" :key="evaluation.id">
                <td>{{evaluation.data}}</td>
                <td>{{evaluation.nome}}</td>
                <td class="action-button">
                  <i class="fas fa-search"></i>
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
        name: 'Dr. João Carlos'
      },
      PatientEvaluations: [
        {
          id: '1',
          data: '01/08/2020',
          nome: 'Júlia Santana'
        },
        {
          id: '2',
          data: '01/08/2020',
          nome: 'Mario Alberto de Castro Gomes'
        },
        {
          id: '3',
          data: '01/08/2020',
          nome: 'Amanda Meireles da Conceição'
        }
      ]
    }
  },
  methods: {
    redirectNutritionistDashboard () {
      this.$router.push('/nutritionist/dashboard')
    },
    redirectPatientsEvaluations () {
      this.$router.push('/nutritionist/patientsEvaluations')
    }
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

.search-patients-main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 50px;
}

.search-patients-top-content{
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

.search-input-container{
  display: flex;
  flex-direction: row;
  width: 40vw;
  margin: 30px 0;
  border-bottom: 2px solid #58E28F;
}

.search-input-container input{
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #B0B0B0;
  font-weight: 300;
  padding: 0 15px;
  border: none;
  outline: none;
  transition: 0.1s;
}

.search-input-container i{
  color: #58E28F;
  align-self: center;
  font-size: 30px;
  padding-right: 15px;
}

.search-input-container i:hover{
  cursor: pointer;
  filter: brightness(80%);
}

.search-patients-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 70vw;
  max-height: 400px;
  overflow: auto;
  margin-top: 50px;
  margin-bottom: 30px;
}

.search-patients-table{
  width: 100%;
  text-align: start;
  border-collapse: collapse;
  font-size: 25px;
  color: #B0B0B0;
}

.search-patients-table thead {
  border-bottom: 1px solid #C4C4C4;
}

.search-patients-table th {
  text-align: start;
}

.search-patients-table thead::after {
  height: 10px;
  display: table-row;
  content: '';
}

.search-patients-table tbody::before {
  height: 10px;
  display: table-row;
  content: '';
}

.search-patients-table tr{
  line-height: 40px;
}

.action-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20%;
  color: #58E28F;
}

.action-button i:hover{
  cursor: pointer;
  filter: brightness(80%);
}
</style>
