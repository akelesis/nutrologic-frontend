<template>
  <div class="FoodIngestion">
    <Header headerStyle="TransparentHeader" />
    <main class="food-ingestion-container">
      <div class="food-ingestion-header">
        <p>{{ user.name }} - Auto Avaliação</p>
        <evaluation-breadcrumbs step="2" evalType="patient" stepsCounter="4" />
        <p>Peso</p>
      </div>
      <div class="food-ingestion-form">
        <div class="food-ingestion-status-container">
          <p>Comparada com a minha alimentação habitual no último mês, eu tenho comido:</p>
          <div class="btn-container">
            <button @click="changeFeedStatus(0)" :class="feedStatus[0].classList">A mesma coisa</button>
            <button @click="changeFeedStatus(1)" :class="feedStatus[1].classList">Mais que o habitual</button>
            <button @click="changeFeedStatus(2)" :class="feedStatus[2].classList">Menos que o habitual</button>
          </div>
        </div>
        <div class="food-quantity-container" v-if="feedStatus[2].active">
          <p>Atualmente, eu estou comendo:</p>
          <div class="food-quantity-options">
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="same-less" v-model="patientEvaluation.foodAmountValue" :value="foodQuantity.sameLess" />
                <span class="radio-control"></span>
              </span>
              <label for="same-less">{{foodQuantity.sameLess}}</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="same-lesser" v-model="patientEvaluation.foodAmountValue" :value="foodQuantity.sameLesser" />
                <span class="radio-control"></span>
              </span>
              <label for="same-lesser">{{foodQuantity.sameLesser}}</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="liquid" v-model="patientEvaluation.foodAmountValue" :value="foodQuantity.liquid" />
                <span class="radio-control"></span>
              </span>
              <label for="liquid">{{foodQuantity.liquid}}</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="suplement" v-model="patientEvaluation.foodAmountValue" :value="foodQuantity.suplement" />
                <span class="radio-control"></span>
              </span>
              <label for="suplement">{{foodQuantity.suplement}}</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="too-few" v-model="patientEvaluation.foodAmountValue" :value="foodQuantity.tooFew" />
                <span class="radio-control"></span>
              </span>
              <label for="too-few">{{foodQuantity.tooFew}}</label>
            </div>
            <div class="option-group">
              <span class="radio-input">
                <input type="radio" name="food-amount" id="probe" v-model="patientEvaluation.foodAmountValue" :value="foodQuantity.probe" />
                <span class="radio-control"></span>
              </span>
              <label for="probe">{{foodQuantity.probe}}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <div class="next-page-btn" @click="redirectToWeight">ANTERIOR</div>
        <div class="next-page-btn" @click="redirectToSymptoms">PRÓXIMO</div>
      </div>
    </main>
    <main-footer :light="true"/>
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
      foodQuantity: {
        sameLess: 'A mesma comida(sólida) em menor quantidade que o habitual',
        sameLesser: 'A mesma comida(sólida) em pouca quantidade',
        liquid: 'Apenas alimentos líquidos',
        suplement: 'Apenas suplementos nutricionais',
        tooFew: 'Muito pouca quantidade de qualquer alimento',
        probe: 'Apenas alimentos por sonda ou pela veia'
      },
      feedStatus: [
        { value: 'A mesma coisa', active: false, classList: 'patient-option-btn' },
        { value: 'Mais que o habitual', active: false, classList: 'patient-option-btn' },
        { value: 'Menos que o habitual', active: false, classList: 'patient-option-btn' }
      ]
    }
  },
  methods: {
    redirectToWeight () {
      this.$router.push('/patient/evaluation/weight')
    },
    redirectToSymptoms () {
      this.$router.push('/patient/evaluation/symptoms')
    },
    changeFeedStatus (position) {
      this.feedStatus.forEach(element => {
        element.active = false
        element.classList = 'patient-option-btn'
      })
      this.feedStatus[position].active = true
      this.feedStatus[position].classList = 'patient-option-btn active-btn'
      this.patientEvaluation.foodAmountStatus = this.feedStatus[position].value
    },
    verifyFeedStatus () {
      if (this.patientEvaluation.foodAmountStatus) {
        this.feedStatus.forEach(element => {
          if (element.value === this.patientEvaluation.foodAmountStatus) {
            element.active = true
            element.classList = 'patient-option-btn active-btn'
          }
        })
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    patientEvaluation () {
      return this.$store.state.patientEvaluation
    }
  },
  mounted () {
    this.verifyFeedStatus()
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
  font-weight: 300;
  color: #fff;
}

.food-ingestion-container {
  font-size: 25px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-ingestion-form {
  margin: 30px 0;
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

.food-quantity-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;

}

.food-quantity-options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
}

.food-quantity-options label {
  margin-left: 10px;
}

.option-group {
  display: flex;
  align-items: center;
  line-height: 1;
  margin: 2px 0;
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

@keyframes gentleRoundMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

</style>
