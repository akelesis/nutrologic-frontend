<template>
  <button class="green-btn">{{label}}</button>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style>
.green-btn {
    margin-bottom: 50px;
    padding: 10px 100px;
    background-color: #4CBA78;
    color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 4px #0004;
    font-size: 30px;
    font-family: 'Roboto Condensed', sans-serif;
    transition: .3s;
    cursor: pointer;
}

.green-btn:hover {
    box-shadow: 0 1px 1px #0004;
}
</style>
