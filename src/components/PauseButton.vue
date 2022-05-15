<template>
  <div class="pause-btn">
      <i class="fas fa-pause"></i>
  </div>
</template>

<script>
export default {
  props: {
  },
  computed: {
  }
}
</script>

<style>
.pause-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30%;
    right: 15%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background-color: #4CBA78;
    z-index: 1;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    transition: .3s;
}

.pause-btn:hover {
  filter: brightness(80%);
}
</style>
