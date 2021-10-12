<template>
  <div class="Selection">
      <div class="patient">
          <p>SOU PACIENTE</p>
      </div>
      <div class="nutritionist">
          <p>SOU NUTRICIONISTA</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
        transition: 0.3s;
        background-size: 500%;
        background-position: top;
        animation: teste 1s;
    }

    .patient:hover, .nutritionist:hover {
        filter:brightness(110%);
        cursor: pointer;
    }

    .patient {
        background: linear-gradient(#43E8FF, #5DADB8);
    }

    .nutritionist {
        background: linear-gradient(#58E28F, #2C8851);
    }

</style>
