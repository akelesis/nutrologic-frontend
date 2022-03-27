<template>
  <button :class="isInverted ? 'inverted' : 'green-btn'">{{label}}</button>
</template>

<script>
export default {
  props: ['label', 'isInverted']
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
    font-size: 30px;
    font-family: 'Roboto Condensed', sans-serif;
    transition: .3s;
    cursor: pointer;
}

.inverted {
    margin-bottom: 50px;
    padding: 10px 100px;
    background-color: #fff;
    border:1px solid #4CBA78;
    color: #4CBA78;
    border-radius: 10px;
    font-size: 30px;
    font-family: 'Roboto Condensed', sans-serif;
    transition: .3s;
    cursor: pointer;
}

.green-btn:hover {
  filter: brightness(80%);
}
</style>
