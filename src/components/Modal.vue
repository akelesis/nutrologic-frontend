<template>
  <div class="Modal">
    <h1>Dados do paciente</h1>
    <p>Peso atual: <span>{{ patientEval.current_weight }} kg</span></p>
    <p>Altura: <span>{{ patientEval.height }} metros</span></p>
    <p>Peso a 1 mês atrás: <span>{{ patientEval.last_month_weight }} kg</span></p>
    <p>Peso a 1 semestre atrás: <span>{{ patientEval.last_semester_weight }} kg</span></p>
    <p>Durante as duas últimas semanas o peso: <span>{{ patientEval.weight_gain_status }}</span></p>
    <p>Comparada com a minha alimentação habitual no último mês, eu tenho comido: <span>{{ patientEval.food_amount_status }}</span></p>
    <p>Atualmente, eu estou comendo: <span>{{ patientEval.food_amount_value || "Sem valor" }}</span></p>
    <p>No último mês, de um modo geral eu consideraria a minha atividade (função) como: <span>{{ patientEval.function_status }}</span></p>
    <h2>Sintomas</h2>
    <p v-for="(symptom, index) in patientEval.symptoms" :key="index">{{ symptom.symptom_name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    patientEval: {}
  }
}
</script>

<style>
.Modal {
    position: absolute;
    top: 200px;
    width: 30vw;
    height: 60vh;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background-color: #fff;
    padding: 25px;
    z-index: 3;
}

.Modal h1, .Modal h2 {
  margin-bottom: 15px;
}

.Modal p{
  margin-bottom: 5px;
  text-align: left;
}

.Modal p span {
  font-weight: bold;
}
</style>
