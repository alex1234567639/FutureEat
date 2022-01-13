<template>
  <div class="index-wrapper">
    <div class="title">Welcome to <span class="white fade-in">Future</span><span class="green fade-in">Eat</span></div>
    <div class="btn-box">
      <nuxt-link to="/order/getPower">
        <div class="btn">前往點餐</div>
      </nuxt-link>
      <div class="btn">
        <a href="https://alex1234567639.github.io/foodpanda_calculator/" target="_blank">餐費計算機</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-wrapper {
  height: 100vh;
  background-color: #ffffff;
  & .fade-in {
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInAnimation {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
  & .title {
    @apply text-center font-bold;
    padding: 15vw 0 8vw 0;
    font-size: 5vw;
    & .white {
      @apply bg-black;
      color: white;
      padding: 0.3vw 0.5vw 0.3vw 1vw;
      border-radius: 0.5vw 0 0 0.5vw;
    }
    & .green {
      @apply bg-black;
      color: #12a512;
      padding: 0.3vw 1vw 0.3vw 0;
      border-radius: 0 0.5vw 0.5vw 0;
    }
  }
  & .btn-box {
    @apply text-center;
    & .btn {
      @apply inline-block text-center text-white cursor-pointer;
      font-size: 2vw;
      padding: 1vw 2vw;
      margin-right: 1vw;
      background-color: #3d8561;
      border-radius: 0.3vw;
      transition-duration: 300ms;
      &:hover {
        background-color: #357355;
      }
    }
  }
}

@media (max-width: 768px) {
  .index-wrapper {
    & .title {
      font-size: 7vw;
      padding: 50vw 0 10vw 0;
      & .white {
        @apply bg-black;
        color: white;
        padding: 0 1vw 0 2vw;
        border-radius: 1vw 0 0 1vw;
      }
      & .green {
        @apply bg-black;
        color: #12a512;
        padding: 0 2vw 0 0;
        border-radius: 0 1vw 1vw 0;
      }
    }
    & .btn-box {
      @apply text-center;
      & .btn {
        font-size: 3.4vw;
        padding: 2vw 4vw;
        margin-right: 2vw;
        border-radius: 1vw;
      }
    }
  }
}
</style>
