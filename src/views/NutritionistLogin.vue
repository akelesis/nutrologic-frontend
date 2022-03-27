<template>
  <div class="PatientLogin">
    <Header headerStyle="TransparentHeader" />
    <main class="login-form-container">
      <div class="login-form-header">
        <h1>LOGIN</h1>
      </div>
      <div class="input-group">
        <input type="text" placeholder="Usuário" v-model="login.nutritionist_email" />
        <input type="password" placeholder="Senha" v-model="login.nutritionist_password" />
      </div>
      <button class="patient-login-btn" @click="signin">ENTRAR</button>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainFooter from '../components/MainFooter.vue'
import axios from 'axios'
export default {
  components: { Header, MainFooter },
  data () {
    return {
      login: {}
    }
  },
  methods: {
    signin () {
      axios.post('http://localhost:4000/nutritionist/signin', this.login)
        .then((res) => {
          this.$store.commit('setUser', res.data)
          localStorage.setItem('__nutrologic_user_info', JSON.stringify(res.data))
          this.$router.push('/nutritionist/dashboard')
        })
        .catch((err) => {
          console.log({ ...err })
          this.error = err.response.data.msg
        })
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");

.PatientLogin {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-image: #43e8ff;
  background-image: linear-gradient(to bottom, #58E28F, #58E28F, #2C8851);
  background-size: 100% 300%;
  animation: gentleMove 5s infinite alternate;
}

.login-form-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  min-height: 450px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  color: #fff;
}

.login-form-container h1 {
  font-size: 50px;
  margin-bottom: 20px;
}

.login-form-container small {
  font-size: 15px;
}

.login-form-container a {
  color: #fff;
  font-size: 25px;
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

.patient-login-btn {
  height: 60px;
  border: none;
  border-radius: 5px;
  background-color: #126D3C;
  color: #fff;
  font-size: 25px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}

.patient-login-btn:hover {
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
