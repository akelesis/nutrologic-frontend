<template>
  <div class="PatientEvaluationResult">
      <Header headerStyle="TransparentHeader"/>
      <main class="patient-result">
        <div class="head-information">
          <h2>Histórico de avaliações</h2>
          <p>Júlia Santana - 12/05/2021</p>
        </div>
        <div class="diagnosis-info">
          <div class="diagnosis">
            <p>DIAGNÓSTICO</p>
            <hr class="eval-result-hr" />
            <p>Não definido</p>
          </div>
          <div class="nutritional-orientation">
            <p>ORIENTAÇÃO NUTRICIONAL</p>
            <hr class="eval-result-hr" />
            <p>Não definido</p>
          </div>
        </div>
        <div class="erase-unfinished-evaluation">
          <p>Esta avaliação ainda não foi aberta pelo nutricionista, deseja apagá-la?</p>
          <button class="erase-btn">Sim</button>
        </div>
      </main>
      <main-footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: { Header, MainFooter }
}
</script>

<style>
.PatientEvaluationResult {
  min-height: 100vh;
  width: 100vw;
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
  font-family: 'Roboto Condensed', sans-serif;
}

.patient-result {
  display: flex;
  min-height: 70vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.head-information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100px;
  color: #fff;
  width: 100vw;
  padding: 10px 20px;
  font-size: 1.4em;
}

.diagnosis-info {
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  font-size: 1.3em;
  color: #fff;
}

.diagnosis-info hr {
  width: 50vw;
  border-color: #fff;
  height: 3px;
  background-color: #fff;
  margin: 10px 0;
}

.erase-unfinished-evaluation {
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  padding: 20px;
  color: #fff;
  font-size: 1.2em;
}

.erase-btn {
  margin: 0 10px;
  padding: 5px 20px;
  border: none;
  background-color: #348ac8;
  color: #fff;
  font-size: 1.1em;
  border-radius: 10px;
  box-shadow: 0 4px 4px #0004;
  cursor: pointer;
  transition: .3s;
}

.erase-btn:hover {
  box-shadow: 0 0 0 #0004;
}

</style>
