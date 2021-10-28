<template>
  <div class="EvaluationBreadcrumbs">
    <div class="dot" :class="step > 0 ? 'active' : ''"></div>
    <div class="dash" :class="step > 1 ? 'active' : ''"></div>
    <div class="dot" :class="step > 1  ? 'active' : ''"></div>
    <div class="dash" :class="step > 2  ? 'active' : ''"></div>
    <div class="dot" :class="step > 2  ? 'active' : ''"></div>
    <div class="dash" :class="step > 3  ? 'active' : ''"></div>
    <div class="dot" :class="step > 3  ? 'active' : ''"></div>
  </div>
</template>

<script>
export default {
  props: ['step']
}
</script>

<style>
.EvaluationBreadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #c7c7c7;
  border-radius: 50%;
}

.dash {
  width: 20px;
  height: 1px;
  margin: 0 2px;
  background-color: #c7c7c7;
}

.active {
  background-color: #9feeff;
  box-shadow: 0 0 10px #fff;
}
</style>
