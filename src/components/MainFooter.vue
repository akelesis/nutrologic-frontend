<template>
  <div :class="footerStyle">
    <footer class="nutrologic-footer">
      <p>Nutrologic 2021 | versão 1.0.0a</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['light'],
  data () {
    return {
      footerStyle: this.light ? 'light-footer' : 'dark-footer'
    }
  }
}
</script>

<style>
.light-footer, .dark-footer {
  font-family: "Roboto Condensed", sans-serif;
  height: 50px;
}

.light-footer {
  color: #fff;
}

.dark-footer {
  color: #a4a4a4;
}
</style>
