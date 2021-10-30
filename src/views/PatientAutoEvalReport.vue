<template>
  <div class="NutritionistDashboard">
    <Header headerStyle="NutritionistHeader" />
    <main class="patients-evaluations-main">
      <div class="patients-evaluations-top-content">
        <div class="nutritionist-name-container">
          <p>{{ user.name }}</p>
        </div>
        <div class="patient-report-container">
          <h1>{{ PatientInfo.patient_name }} - {{ PatientInfo.created_at }}</h1>
          <div class="patient-report-info">
            <div class="patient-info">
              <h2 class="info-title">Peso</h2>
              <p>
                <span>Peso atual: {{ PatientInfo.weight }} Kg</span>
                <span>Peso do mês anterior: {{ PatientInfo.last_month_weight }} Kg</span>
              </p>
              <p>
                <span>Altura: {{ PatientInfo.height }} m</span>
                <span>Peso seis mêses atrás: {{ PatientInfo.last_semester_weight }} Kg</span>
              </p>
            </div>
            <div class="patient-info">
              <h2 class="info-title">Ingestão Alimentar</h2>
              <span>{{ PatientInfo.food_amount_value }}</span>
            </div>
          </div>
          <div class="patient-report-info">
            <div class="patient-info">
              <h2 class="info-title">Sintomas</h2>
              <div class="symtoms-container">
                <span>{{ processedSymptoms }}</span>
              </div>
            </div>
            <div class="patient-info">
              <h2 class="info-title">Atividade e Função</h2>
              <span>{{ PatientInfo.function_value }}</span>
            </div>
          </div>
        </div>
      </div>
      <GreenButton
        label="Voltar"
        @click.native="redirectNutritionistDashboard"
      />
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
      processedSymptoms: '',
      PatientInfo: {
        patient_name: 'Julia Santana',
        created_at: '01/08/2020',
        weight: '65',
        last_month_weight: '66',
        last_semester_weight: '68',
        height: '1.65',
        food_amount_value: 'Estou comendo: A mesma comida(sólida) em menor quantidade que o habitual',
        function_value: 'Normal, sem nenhuma limitação',
        symptoms: ['Vômitos', 'Náuseas']
      },
      PatientEvaluations: [
        {
          id: '1',
          data: '01/08/2020',
          horario: '13:35',
          nome: 'Júlia Santana',
          nutricionista: '-',
          status: 'Pendente'
        },
        {
          id: '2',
          data: '01/08/2020',
          horario: '13:53',
          nome: 'Mario Alberto de Castro Gomes',
          nutricionista: 'Dr. Gustavo Rocha',
          status: 'Parcial'
        },
        {
          id: '3',
          data: '01/08/2020',
          horario: '14:28',
          nome: 'Amanda Meireles da Conceição',
          nutricionista: '-',
          status: 'Pendente'
        }
      ]
    }
  },
  methods: {
    symptomsToString () {
      for (let i = 0; i < this.PatientInfo.symptoms.length; i++) {
        if (i < this.PatientInfo.symptoms.length - 1) {
          this.processedSymptoms += this.PatientInfo.symptoms[i] + ', '
        } else {
          this.processedSymptoms += this.PatientInfo.symptoms[i]
        }
      }
    },
    redirectNutritionistDashboard () {
      this.$router.push('/nutritionist/patientsEvaluations')
    }
  },
  mounted () {
    this.symptomsToString()
  }
}
</script>

<style>
.NutritionistDashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
}

.patients-evaluations-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 50px;
}

.patients-evaluations-top-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.nutritionist-name-container {
  display: flex;
  justify-content: start;
  width: 100vw;
  padding-left: 50px;
}

.nutritionist-name-container p {
  font-size: 30px;
  color: #b0b0b0;
}

.patient-report-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  color: #b0b0b0;
}

.patient-report-container h1 {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
}

.patient-report-container .info-title{
  font-weight: 300;
  font-size: 30px;
  text-align: start;
  border-bottom: 2px solid #58E28F;
  padding-right: 100px;
  padding-left: 5px;
  margin-bottom: 10px;
}

.patient-report-info {
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin-top: 50px;
}

.patient-report-info p {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.patient-report-info span {
  font-size: 20px;
  line-height: 30px;
  text-align: start;
  margin-right: 20px;
}

.patient-info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
}

.symtoms-container{
  display: flex;
}

.symtoms-container span{
  margin-right: 5px;
}

.symtoms-container span::after{
  margin-right: 5px;
}
</style>
