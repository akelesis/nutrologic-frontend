<template>
  <div class="FoodIngestion">
    <Header headerStyle="TransparentHeader" />
    <main class="food-ingestion-container">
      <div class="food-ingestion-header">
        <p>{{ patient.name }} - Auto Avaliação</p>
        <div class="patient-breadcrumbs">
          <div class="dot active"></div>
          <div class="dash active"></div>
          <div class="dot active"></div>
          <div class="dash"></div>
          <div class="dot"></div>
          <div class="dash"></div>
          <div class="dot"></div>
        </div>
        <p>Peso</p>
      </div>
      <div class="food-ingestion-form">
        <div class="food-ingestion-status-container">
          <p>Comparada com a minha alimentação habitual no último mês, eu tenho comido:</p>
          <div class="btn-container">
            <button class="patient-option-btn active-btn">A mesma coisa</button>
            <button class="patient-option-btn">Mais que o habitual</button>
            <button class="patient-option-btn">Menos que o habitual</button>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <div class="next-page-btn">ANTERIOR</div>
        <div class="next-page-btn">PRÓXIMO</div>
      </div>
    </main>
    <main-footer :light="true"/>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import MainFooter from '../../components/MainFooter.vue'
export default {
  components: { Header, MainFooter },
  data () {
    return {
      patient: {
        name: 'João da Silva'
      }
    }
  }
}
</script>

<style>
.FoodIngestion {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: radial-gradient(#45d2db, #34adc8);
  background-size: 300% 300%;
  animation-name: gentleRoundMove;
  animation-duration: 7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
}

.food-ingestion-container {
  font-size: 25px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.patient-breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #c7c7c7;
  border-radius: 50%;
}

.dash {
  width: 20px;
  height: 1px;
  margin: 0 2px;
  background-color: #c7c7c7;
}

.active {
  background-color: #9feeff;
  box-shadow: 0 0 10px #fff;
}

.food-ingestion-form {
  margin-top: 30px;
  min-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.statement-container {
  display: flex;
  margin: 20px 0;
}

.statement-container .small-input {
  border: none;
  width: 65px;
  color: #fff;
  font-size: 20px;
  background-color: #0000;
  border-bottom: 1px solid #fff;
  outline: none;
  padding: 0 5px;
  margin: 0 5px;
}

.food-ingestion-status-container {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  min-width: 50vw;
}

.food-ingestion-status-container p {
  text-align: start;
}

.btn-container {
  display: flex;
}

.patient-option-btn {
  background-color: #3c90b4;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-family: "Roboto Condensed", sans-serif;
  padding: 10px 20px;
  margin: 10px 20px 10px 0;
  cursor: pointer;
}

.active-btn {
  background-color: #1E788C;
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

@keyframes gentleRoundMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>
