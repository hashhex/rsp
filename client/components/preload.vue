<template>
  <div class="preload">
    <img src="~assets/img/logo.svg" width="161" alt="rsp">
  </div>
</template>

<script>
  export default {
    name: 'preload'
  }
</script>

<style lang="scss">
.preload{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    animation: zoom 2.5s ease infinite;
  }
}

@keyframes zoom {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>