<template>
  <div :style="cssVars" class="EvaluationBreadcrumbs">
    <div class="dot" :class="step > 0 ? 'active' : ''"></div>
    <span v-for="n in dashCounter" :key="n" class="EvaluationBreadcrumbs">
      <div class="dash" :class="step > n ? 'active' : ''"></div>
      <div class="dot" :class="step > n ? 'active' : ''"></div>
    </span>
    <!-- <div class="dot" :class="step > 1  ? 'active' : ''"></div>
    <div class="dash" :class="step > 2  ? 'active' : ''"></div>
    <div class="dot" :class="step > 2  ? 'active' : ''"></div>
    <div class="dash" :class="step > 3  ? 'active' : ''"></div>
    <div class="dot" :class="step > 3  ? 'active' : ''"></div> -->
  </div>
</template>

<script>
export default {
  props: ['step', 'evalType', 'stepsCounter'],
  computed: {
    cssVars () {
      return {
        '--color': this.evalType === 'patient' ? '#9feeff' : '#58E28F',
        '--box-shadow': this.evalType === 'patient' ? '#fff' : '#58E28F'
      }
    },
    dotCounter () {
      return this.stepsCounter
    },
    dashCounter () {
      return this.stepsCounter - 1
    }
  }
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
  background-color: var(--color);
  box-shadow: 0 0 10px var(--box-shadow);
}
</style>
