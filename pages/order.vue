<template>
  <div class="order-wrapper">
    <div class="orderTitle">今晚，我想來點 ......</div>
    <div class="nav">
      <nuxt-link to="/order/getPower">
        <span class="btn" :class="{'focus':currentTab==='/order/getPower' || currentTab==='/order/getPower/'}" @click="changeTab('/order/getPower')">給力盒子</span>
      </nuxt-link>
      <nuxt-link to="/order/letsEat">
        <span class="btn" :class="{'focus':currentTab==='/order/letsEat' || currentTab==='/order/letsEat/'}" @click="changeTab('/order/letsEat')">來喫</span>
      </nuxt-link>
      <nuxt-link to="/order/yummy">
        <span class="btn" :class="{'focus':currentTab==='/order/yummy' || currentTab==='/order/yummy/'}" @click="changeTab('/order/yummy')">雅咪</span>
      </nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: '',
      clickable: true
    }
  },
  watch: {
    '$store.state.path': function (newValue) {
      this.currentTab = newValue
    }
  },
  methods: {
    changeTab(tabName) {
      if (this.clickable) {
        this.clickable = false
        this.currentTab = tabName
        const vm = this
        setTimeout(function () {
          vm.clickable = true
        }, 300)
      }
    }
  },
  mounted() {
    const getUrlString = location.href
    const url = new URL(getUrlString)
    this.currentTab = url.pathname
  }
}
</script>

<style lang="scss" scoped>
.order-wrapper {
  background-color: #3c493f;
  padding-bottom: 10vw;
  .orderTitle {
    @apply text-center font-bold text-white;
    padding-top: 3vw;
    font-size: 3vw;
  }
  .nav {
    @apply text-center;
    padding: 1.5vw;
    & .focus {
      background-color: #3d8561 !important;
      color: white !important;
    }
    & .btn {
      @apply inline-block text-center cursor-pointer;
      color: #3c493f;
      font-size: 2vw;
      padding: 0.6vw;
      margin-right: 1vw;
      width: 11vw;
      background-color: #a2e3c4;
      border-radius: 0.3vw;
      transition-duration: 300ms;
      &:hover {
        @apply text-white;
        background-color: #3d8561;
      }
    }
  }
}

@media (max-width: 768px) {
  .order-wrapper {
    .orderTitle {
      font-size: 6vw;
    }
    .nav {
      & .btn {
        font-size: 3.4vw;
        padding: 1.2vw;
        margin-right: 1vw;
        width: 18vw;
        border-radius: 0.6vw;
      }
    }
  }
}
</style>
