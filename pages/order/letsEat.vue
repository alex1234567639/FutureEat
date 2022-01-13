<template>
  <div class="getPower-wrapper">
    <div class="input-box">
      <input class="input" v-model="inputName" type="text" placeholder="姓名">
      <input class="input" v-model="inputNote" type="text" placeholder="備註">
      <div class="send-btn" @click="sendOrder">點餐送出</div>
    </div>
    <div class="ordered">
      <div class="ordered-title">已選擇項目：</div>
      <div style="display:inline-block;" v-for="(item, index) in menuCopy" @click="deleteOrder(index)">
        <div class="ordered-item" v-if="item.amount > 0">{{ item.name + ' ' }}<span class="red">{{ item.amount }}</span></div>
      </div>
    </div>
    <hr class="line">
    <div class="choose-list">
      <div v-for="(item, index) in menu" class="choose-item" :key="item.id" @click="addOrder(index)">
        {{ item.name + ' +' }}
      </div>
    </div>
    <img class="menu" src="@/assets/letsEat/menu.jpg" alt="">
  </div>
</template>

<script>
export default {
  middleware: 'routePath',
  head() {
    return {
      titleTemplate: '%s - 來喫',
      script: [{
        src: 'https://code.jquery.com/jquery-3.3.1.js',
        integrity: 'sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=',
        crossorigin: 'anonymous'
      }],
    }
  },
  data() {
    return {
      inputName: '',
      inputNote: '',
      menu: [
        { id: 0, name: '泰式手撕雞', price: 100, amount: 0 },
        { id: 1, name: '椒麻去骨雞腿', price: 110, amount: 0 },
        { id: 2, name: '泰式打拋雞', price: 100, amount: 0 },
        { id: 3, name: '紐約街頭雞佐白醬', price: 100, amount: 0 },
        { id: 4, name: '蔥炒吻仔魚', price: 110, amount: 0 },
        { id: 5, name: '蒜香椒鹽豬五花', price: 100, amount: 0 },
        { id: 6, name: '香嫩豬腱', price: 100, amount: 0 },
        { id: 7, name: '活力蔬食', price: 100, amount: 0 }
      ],
      menuCopy: [],
      orderList: []
    }
  },
  methods: {
    addOrder(index) {
      this.menuCopy[index].amount++
    },
    deleteOrder(index) {
      this.menuCopy[index].amount--
    },
    sendOrder() {
      const length = this.menuCopy.length
      for (let i = 0; i < length; i++) {
        if (this.menuCopy[i].amount > 0) {
          this.orderList.push(this.menuCopy[i])
        }
      }
      if (!this.inputName) {
        alert('請輸入姓名')
      } else if (this.orderList.length === 0) {
        alert('請選擇餐點')
      } else {
        let total_name = ''
        let total_price = 0
        for (let i = 0; i < this.orderList.length; i++) {
          if (i !== this.orderList.length - 1) {
            total_name += this.orderList[i].name + ' (' + this.orderList[i].price + ' x ' + this.orderList[i].amount + ')' + `\n`
            total_price += (this.orderList[i].price) * (this.orderList[i].amount)
          } else {
            total_name += this.orderList[i].name + ' (' + this.orderList[i].price + ' x ' + this.orderList[i].amount + ')'
            total_price += (this.orderList[i].price) * (this.orderList[i].amount)
          }
        }
        const vm = this
        $.ajax({
          url: 'https://script.google.com/macros/s/AKfycbzn1hkiVs6dAF9C22dAExLKkUJFErPTrhMGJhqbezOrfXzH0i70/exec',
          data: {
            name: this.inputName,
            order: total_name,
            price: total_price,
            note: this.inputNote
          },
          success: function(response) {
            vm.inputName = ''
            vm.inputNote = ''
            vm.menuCopy = vm.menu
            vm.orderList = []
            if (response === 'success') {
              alert('成功送單')
            }
          }
        })
      }
    }
  },
  mounted() {
    this.menuCopy = JSON.parse(JSON.stringify(this.menu))
  }
}
</script>

<style lang="scss" scoped>
.getPower-wrapper {
  & .input-box {
    width: 40vw;
    margin: 1vw auto 2vw;
    & .input {
      font-size: 1.3vw;
      width: 14.5vw;
      padding: 0.6vw 0.8vw;
      margin-right: 1vw;
      border-radius: 0.5vw;
      border: 1px solid #357355;
      background-color: #f0f7f4;
      outline: none;
    }
    & .send-btn {
      @apply inline-block text-center text-white cursor-pointer;
      font-size: 1.3vw;
      padding: 0.7vw;
      width: 8vw;
      background-color: #3d8561;
      border-radius: 0.3vw;
      transition-duration: 300ms;
      &:hover {
        background-color: #357355;
      }
    }
  }
  & .ordered {
    font-size: 1.3vw;
    width: 40vw;
    margin: 0 auto;
    & .ordered-title {
      @apply text-white;
    }
    & .ordered-item {
      @apply inline-block text-center cursor-pointer;
      font-size: 1.3vw;
      width: 12vw;
      margin: 0.5vw 1vw 0 0;
      padding: 0.3vw;
      border-radius: 0.5vw;
      background-color: #f0f7f4;
      transition-duration: 300ms;
      &:hover {
        background-color: #dee5e2;
      }
      & .red {
        color: red;
      }
    }
  }
  & .line {
    border: 1px solid #ffffff;
    width: 90vw;
    margin: 2vw auto 0;
  }
  & .choose-list {
    padding: 1vw 0;
    @apply text-center;
    & .choose-item {
      @apply text-center inline-block cursor-pointer;
      padding: 0.8vw;
      margin: 0.5vw 1vw;
      border-radius: 0.5vw;
      width: 15vw;
      font-size: 1.5vw;
      background-color: #b3bfb8;
      transition-duration: 300ms;
      &:hover {
        background-color: #7e8d85;
      }
    }
  }
  & .menu {
    width: 60vw;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .getPower-wrapper {
    & .input-box {
      width: 75vw;
      margin: 1vw auto 2vw;
      & .input {
        font-size: 3vw;
        width: 25vw;
        padding: 1.2vw 1.6vw;
        margin-right: 2vw;
        border-radius: 1vw;
      }
      & .send-btn {
        font-size: 3vw;
        padding: 1.4vw;
        width: 18vw;
        border-radius: 0.6vw;
      }
    }
    & .ordered {
      font-size: 3vw;
      width: 90vw;
      & .ordered-item {
        font-size: 3vw;
        width: 28vw;
        margin: 1vw 2vw 0 0;
        padding: 0.6vw;
        border-radius: 1vw;
        &:hover {
          background-color: #f0f7f4;
        }
      }
    }
    & .line {
      border: 0.5px solid #ffffff;
      margin: 4vw auto 0;
    }
    & .choose-list {
      padding: 1.5vw 0;
      & .choose-item {
        padding: 1.6vw;
        margin: 1vw 1vw;
        border-radius: 1vw;
        width: 30vw;
        font-size: 3vw;
      }
    }
    & .menu {
      width: 90vw;
    }
  }
}
</style>
