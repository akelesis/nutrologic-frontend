<template>
  <div class="NutritionistRadius">
    <span class="nutritionist-radio-input">
      <input
        type="radio"
        :name="name"
        :id="id"
        :value="label"
      />
      <span class="nutritionist-radio-control"></span>
    </span>
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: ['value', 'id', 'name', 'label']
}
</script>

<style>
.NutritionistRadius {
  display: flex;
  margin: 5px 10px;
}

.NutritionistRadius span {
  margin: 0 5px 0 0;
}

.nutritionist-radio-input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nutritionist-radio-input input {
  opacity: 0;
  position: absolute;
}

.NutritionistRadius label {
  color: #A4A4A4;
  font-size: 18px;
}

.nutritionist-radio-input input:checked + .nutritionist-radio-control {
  background: radial-gradient(#4CBA78 40%, #fff 41%);
}

.nutritionist-radio-control {
  display: block;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  border: 0.1em solid #4CBA78;
  background: #fff;
}
</style>
