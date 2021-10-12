<template>
  <div class="Selection">
      <div class="patient">
          <router-link to="/patientLogin"><p>SOU PACIENTE</p></router-link>
      </div>
      <div class="nutritionist">
          <router-link to="/nutritionistLogin"><p>SOU NUTRICIONISTA</p></router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

    .Selection {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .patient, .nutritionist {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 60px;
        width: 50vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        transition: 0.5s;
        background-size: 500%;
        transform: rotate(0);
        background-position: top;
    }

    .patient > a, .nutritionist > a {
        text-decoration: none;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .patient:hover, .nutritionist:hover {
        background-color: #5DADB8;
        width: 90vw;
        background-position: 100%;
        cursor: pointer;
        filter: brightness(110%);
    }

    .Selection:hover > div:not(:hover) {
        font-size: 25px;
        width: 10vw;
        background: #aaa;
    }

    .patient {
        background: linear-gradient(to bottom, #43E8FF, #5DADB8);
        background-size: 300%;
        background-position: 0;
    }

    .nutritionist {
        background: linear-gradient(#58E28F, #2C8851);
    }

</style>
