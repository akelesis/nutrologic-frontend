<template>
  <div class="BlueBackground">

  </div>
</template>

<script>
export default {
  props: ['children'],
  data () {
    return {}
  }
}
</script>

<style>
.BlueBackground {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: radial-gradient(#5dbef4, #348ac8);
  background-size: 300% 300%;
  animation-name: gentleRoundMove;
  animation-duration: 7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes gentleRoundMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>
