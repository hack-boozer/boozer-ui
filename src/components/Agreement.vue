<template>
  <v-ons-page class="container">
    <v-ons-row>
      <v-ons-col>
        <img src="../../static/tokkuri.svg" alt="">    
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <p>お酒探しが楽しく便利に♪</p>
        <p>リアルな口コミ5件以上が無料で見放題!!</p>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <a href="#">利用規約</a>をご確認の上、登録へ進んでください
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <v-ons-button modifier="large" @click="initialize">同意して今すぐはじめる</v-ons-button>
      </v-ons-col>
    </v-ons-row>
    <p><a href="#">アカウントをお持ちの方はこちら</a></p>
    

  </v-ons-page>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    initialize () {
      return this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  text-align: center;
}
img{
  width: 50%;
}

.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title {
  text-transform: none;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item, ons-card {
  cursor: pointer;
}
</style>
