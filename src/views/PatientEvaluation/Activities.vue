<template>
  <div class="ActivitiesAndFunctions">
      <Header headerStyle="TransparentHeader"/>
      <main class="activities-container">
        <div class="activities-header">
          <p>{{ patient.name }} - Auto Avaliação</p>
          <evaluation-breadcrumbs step="4" />
          <p>Atividade e Função</p>
        </div>
        <div class="activities-body">
          <p>No último mês, de um modo geral eu consideraria a minha atividade (função) como:</p>
          <div class="activity-options">
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="normal" value="Normal, sem nenhuma limitação" />
                <span class="radio-control"></span>
              </span>
              <label for="normal">Normal, sem nenhuma limitação</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="not-normal" value="Não totalmente normal, mas capaz de manter quase todas as atividades normais" />
                <span class="radio-control"></span>
              </span>
              <label for="not-normal">Não totalmente normal, mas capaz de manter quase todas as atividades normais</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="no-energy" value="Sem disposição para a maioria das coisas mas ficando na cama ou na cadeira menos da metade do dia" />
                <span class="radio-control"></span>
              </span>
              <label for="no-energy">Sem disposição para a maioria das coisas mas ficando na cama ou na cadeira menos da metade do dia</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="too-few-capability" value="Capaz de fazer pouca atividade e passando maior parte do dia na cadeira ou na cama" />
                <span class="radio-control"></span>
              </span>
              <label for="too-few-capability">Capaz de fazer pouca atividade e passando maior parte do dia na cadeira ou na cama</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="in-bed" value="Praticamente acamado, raramente fora da cama" />
                <span class="radio-control"></span>
              </span>
              <label for="in-bed">Praticamente acamado, raramente fora da cama</label>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <div class="next-page-btn">ANTERIOR</div>
          <div class="next-page-btn">FINALIZAR</div>
        </div>
      </main>
      <main-footer :light="true" />
  </div>
</template>

<script>
import EvaluationBreadcrumbs from '../../components/EvaluationBreadcrumbs.vue'
import Header from '../../components/Header.vue'
import MainFooter from '../../components/MainFooter.vue'
export default {
  components: { Header, MainFooter, EvaluationBreadcrumbs },
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
.ActivitiesAndFunctions {
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
  font-weight: 300;
  color: #fff;
}

.activities-header p {
  font-size: 30px;
}

.activities-container {
  font-size: 25px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.activities-body {
  margin-top: 50px;
}

.activity-options {
  margin-top: 30px;
  justify-content: flex-start;
}

.option-group {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  margin: 10px 0;
}

.option-group label {
  margin-left: 5px;
  text-align: left;
  width: 80%;
}

.radio-input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radio-input input {
  opacity: 0;
  position: absolute;
}

.radio-input input:checked + .radio-control {
  background: radial-gradient(#3c90b4 30%, #fff 31%);
}

.radio-control {
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.1em solid #3C90B4;
  background: #fff;
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

.btn-container {
  display: flex;
}

</style>
