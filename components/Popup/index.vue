<template>
  <transition name="fade">
    <div v-if="show" class="pop-up-wrapper">
      <div class="title">登入</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
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
.pop-up-wrapper {
  @apply fixed z-50 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center;
  background-color: rgba(0,0,0,0.7);
  & .title {
    @apply text-white;
  }
}
</style>
