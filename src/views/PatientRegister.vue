<template>
  <div class="PatientRegister">
    <Header headerStyle="TransparentHeader" />
    <main class="register-form-container">
      <div class="register-form-header">
        <h1>REGISTRO</h1>
        <small>
          INFORME OS SEUS DADOS ABAIXO PARA REALIZAR AVALIAÇÕES E CONSULTAS NUTRICIONAIS NO PORTAL
        </small>
      </div>
      <div class="input-group">
        <input type="text" placeholder="* Nome Completo" />
        <input type="date"/>
        <input type="text" placeholder="* Telefone" />
        <input type="text" placeholder="CPF" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="* Usuário" />
        <input type="password" placeholder="* Senha" />
        <input type="password" placeholder="* Confirme a senha" />
      </div>
      <button class="patient-register-btn" @click="register">CADASTRAR</button>
    </main>
    <MainFooter light=true />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: { Header, MainFooter },
  methods: {
    register () {
      this.$router.push('/patientDashboard')
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.PatientRegister {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-image: #43e8ff;
  background-image: linear-gradient(to bottom, #43e8ff, #43e8ff, #5dadb8);
  background-size: 100% 300%;
  animation: gentleMove 3s infinite alternate;
}

.register-form-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  min-height: 450px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  color: #fff;
}

.register-form-container h1 {
  font-size: 50px;
  margin-bottom: 20px;
  font-weight: 300;
}

.register-form-container small {
  font-size: 15px;
}

.register-form-container a {
  color: #fff;
  font-size: 25px;
}

.register-form-header {
    margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group input {
  margin-bottom: 30px;
  font-size: 30px;
  font-family: "Roboto Condensed", sans-serif;
  background-color: #0000;
  color: #fff;
  border: none;
  border-bottom: 2px solid #fff;
  transition: 0.1s;
  outline: none;
}

.input-group input:focus {
  border-bottom: 4px solid #fff;
}

.input-group input::placeholder {
  color: #fff;
}

.patient-register-btn {
  height: 60px;
  border: none;
  border-radius: 5px;
  background-color: #107d8c;
  color: #fff;
  font-size: 25px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}

.patient-register-btn:hover {
  filter: brightness(110%);
  cursor: pointer;
}

@keyframes gentleMove {
  0% {
    background-position: top left;
  }
  100% {
    background-position: bottom left;
  }
}
</style>
