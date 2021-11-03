<template>
  <textarea class="DefaultTextArea" :rows="rows" :placeholder="placeholder" :value="value"></textarea>
</template>

<script>
export default {
  props: ['rows', 'placeholder', 'value']
}
</script>

<style>
.DefaultTextArea {
  width: 100%;
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
