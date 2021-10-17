<template>
  <div class="Weight">
    <Header headerStyle="TransparentHeader" />
    <main class="weight-container">
      <div class="weight-header">
        <p>{{ patient.name }} - Auto Avaliação</p>
        <div class="patient-breadcrumbs">
          <div class="dot active"></div>
          <div class="dash"></div>
          <div class="dot"></div>
          <div class="dash"></div>
          <div class="dot"></div>
          <div class="dash"></div>
          <div class="dot"></div>
        </div>
        <p>Peso</p>
      </div>
      <div class="weight-form">
        <p>Resumindo meu peso atual e recente:</p>
        <div class="statement-container">
          <p>Eu atualmente peso aproximadamente</p>
          <input class="small-input" type="text" />
          <p>Kg</p>
        </div>
        <div class="statement-container">
          <p>Eu tenho aproximadamente</p>
          <input class="small-input" type="text" />
          <p>metro(s) e</p>
          <input class="small-input" type="text" />
          <p>cm</p>
        </div>
        <div class="statement-container">
          <p>Há um mês eu costumava pesar</p>
          <input class="small-input" type="text" />
          <p>Kg</p>
        </div>
        <div class="statement-container">
          <p>Há seis meses eu costumava pesar</p>
          <input class="small-input" type="text" />
          <p>Kg</p>
        </div>
        <div class="weight-status-container">
          <p>Durante as duas últimas semanas o meu peso:</p>
          <div class="btn-container">
            <button class="patient-option-btn active-btn">Diminuiu</button>
            <button class="patient-option-btn">Ficou igual</button>
            <button class="patient-option-btn">Aumentou</button>
          </div>
        </div>
      </div>
      <div class="next-page-btn">PRÓXIMO</div>
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
.Weight {
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

.weight-container {
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

.weight-form {
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

.weight-status-container {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  min-width: 50vw;
}

.weight-status-container p {
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
  margin-top: 30px;
  box-shadow: 0 4px 4px #0004;
  cursor:pointer;
  transition: .2s;
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
