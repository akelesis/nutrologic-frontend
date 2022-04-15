<template>
  <div class="NutritionistDashboard">
    <Header headerStyle="NutritionistHeader" />
    <main class="nutritionist-dashboard-main">
      <p>Olá {{user.name}}!</p>
      <div class="options-container">
        <button class="open-evaluation" @click="redirectPatientsEvaluations">AUTO AVALIAÇÕES ABERTAS</button>
        <button class="search-patient" @click="redirectSearchPatients">PESQUISAR PACIENTE</button>
      </div>
    </main>
    <main-footer />
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
  methods: {
    redirectPatientsEvaluations () {
      this.$router.push('/nutritionist/patientsEvaluations')
    },
    redirectSearchPatients () {
      this.$router.push('/nutritionist/searchPatients')
    },
    placeUserInGlobalStorage () {
      if (localStorage.getItem('__nutrologic_user_info')) {
        const user = JSON.parse(localStorage.getItem('__nutrologic_user_info'))
        this.$store.commit('setUser', user)
      }
    }
  },
  mounted () {
    this.placeUserInGlobalStorage()
  },
  computed: {
    user () {
      return JSON.parse(localStorage.getItem('__nutrologic_user_info'))
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');

.NutritionistDashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Roboto Condensed', sans-serif;
}

.nutritionist-dashboard-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  font-weight: 300;
  color: #A4A4A4;
}

.nutritionist-dashboard-main p {
  font-size: 40px;
}

.options-container {
  display: flex;
  justify-content: space-between;
  min-width: 50vw;
}

.open-evaluation, .search-patient {
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

.open-evaluation {
  background: radial-gradient(#8CDD3B, #71BC26);
}

.search-patient {
  background: radial-gradient(#3BDD68, #27AC4C);
}

.open-evaluation:hover, .search-patient:hover {
  background-size: 300% 300%;
  background-position: center center;
  cursor: pointer;
  box-shadow: 0 0 1px #0004;
}

</style>
