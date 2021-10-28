<template>
  <div class="SymptomButton" :class="status == 'active' ? 'active' : ''">
    {{label}}
  </div>
</template>

<script>
export default {
  props: ['label', 'status']
}
</script>

<style>
.SymptomButton {
  box-sizing: border-box;
  background-color: #3C90B4;
  width: 220px;
  min-height: 50px;
  border-radius: 5px;
  box-shadow: 0 4px 4px #0004;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  transition: .3s;
}

.SymptomButton:hover {
  box-shadow: 0 0 1px #0004;
}

.active {
  background-color: #29ABC8;
  box-shadow: 0 0 10px #fff;
}

</style>
