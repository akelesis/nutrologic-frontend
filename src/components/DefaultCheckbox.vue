<template>
  <div class="DefaultCheckbox">
    <span class="nutritionist-checkbox-input">
      <input type="checkbox" :name="name" :id="id" :value="value" />
      <span class="nutritionist-checkbox-control"><i class="fas fa-check"></i></span>
    </span>
    <label :for="id">{{ value }}</label>
  </div>
</template>

<script>
export default {
  props: ['name', 'id', 'value']
}
</script>

<style>
.DefaultCheckbox {
  display: flex;
  margin: 5px 0;
}

.DefaultCheckbox span {
  margin: 0 5px 0 0;
}

.DefaultCheckbox label {
  color: #A4A4A4;
  font-size: 18px;
}

.nutritionist-checkbox-input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nutritionist-checkbox-input input {
  position: absolute;
  z-index: 1;
  opacity: 0;
}

.nutritionist-checkbox-control i{
  opacity: 0;
  font-size: 15px;
}

.nutritionist-checkbox-input input:checked + .nutritionist-checkbox-control i {
  opacity: 1;
  color: #4CBA78;
}

.nutritionist-checkbox-control {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1.2em;
  height: 1.2em;
  border-radius: 3px;
  border: 0.1em solid #4CBA78;
  background: #fff;
}
</style>
