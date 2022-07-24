<template>
  <input :type="inputType" class="DefaultInput" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: ['inputType', 'placeholder', 'value']
}
</script>

<style>
.DefaultInput {
  border: none;
  border-bottom: 1px solid #C4C4C4;
  font-size: 18px;
  font-family: 'Roboto Condensed' sans-serif;
  transition: .2s;
  color: #A4A4A4;
}

.DefaultInput::placeholder {
  color: #C4C4C4;
}

.DefaultInput:focus {
  border-bottom: 2px solid #58E28F;
  outline: none;
}
</style>
