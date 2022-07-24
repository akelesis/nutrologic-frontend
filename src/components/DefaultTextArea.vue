<template>
  <textarea class="DefaultTextArea" :value="value" :rows="rows" :placeholder="placeholder" @input="$emit('input', $event.target.value)"></textarea>
</template>

<script>
export default {
  props: ['rows', 'placeholder', 'value']
}
</script>

<style>
.DefaultTextArea {
  min-width: 50vw;
  resize: none;
  border-radius: 5px;
  border: 1px solid #4CBA78;
  outline: none;
  margin: 10px 0;
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 5px;
  box-sizing: border-box;
  color: #A4A4A4;
}

.DefaultTextArea::placeholder {
  color: #C4C4C4;
}
</style>
