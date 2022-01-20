<template>
  <transition name="fade">
    <div class="loading-wrapper">
      <lottie-player class="loading" src="https://assets9.lottiefiles.com/packages/lf20_sxhnff0a.json" speed="1" loop autoplay />
    </div>
  </transition>
</template>

<script>
export default {
  head() {
    return {
      script: [{
        src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
      }],
    }
  },
}
</script>

<style lang="scss" scoped>
// 過渡效果
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.loading-wrapper {
  @apply fixed z-50 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center;
  background-color: rgba(255,255,255,0.8);
  & .loading {
    width: 20vw;
  }
}

@media (max-width: 768px) {
  .loading-wrapper {
    & .loading {
      width: 50vw;
    }
  }
}
</style>
