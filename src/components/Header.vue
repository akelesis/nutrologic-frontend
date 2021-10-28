<template>
  <div :class="headerStyle">
      <p class="nutrologic-logo">Nutrologic</p>
  </div>
</template>

<script>
export default {
  props: ['headerStyle']
}
</script>

<style>
.TransparentHeader {
    display: flex;
    width: 100vw;
    padding: 10px 20px;
    font-weight: 300;
    color: #fff;
}

.PatientHeader {
    display: flex;
    width: 100vw;
    padding: 10px 20px;
    font-weight: 300;
    color: #fff;
    background-image: linear-gradient(270deg, #43E8FF, #5DADB8);
}

.NutritionistHeader {
    display: flex;
    width: 100vw;
    padding: 10px 20px;
    font-weight: 300;
    color: #fff;
    background-image: linear-gradient(270deg, #58E28F, #2C8851);
}

.nutrologic-logo {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 50px;
}
</style>
