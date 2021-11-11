<template>
  <div class="DefaultSelect">
      <select>
          <option v-for="option in options" :key="option" :value="option">{{option}}</option>
      </select>
  </div>
</template>

<script>
export default {
  props: ['options']
}
</script>

<style>
    .DefaultSelect select {
        border: none;
        border-bottom: 1px solid #C4C4C4;
        outline: none;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 18px;
        color: #A2A2A2;
        font-weight: 300;
    }

    .DefaultSelect select:focus {
        border-bottom: 3px solid #58e28f;
    }
</style>
