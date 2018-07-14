<template>
  <v-ons-page>
    <v-ons-toolbar>
        <div class="center">ログイン</div>
    </v-ons-toolbar>

    <v-ons-list>
        <v-ons-list-item>
            <div class="center">
                <v-ons-input placeholder="Email" float v-model="email"></v-ons-input>
            </div>
        </v-ons-list-item>
        <v-ons-list-item>
            <div class="center">
                <v-ons-input placeholder="Password" float v-model="password"></v-ons-input>
            </div>
        </v-ons-list-item>
        <v-ons-list-item>
            <div class="right">
                Hello {{ email || 'anonymous' }}!
            </div>
        </v-ons-list-item>
    </v-ons-list>
    <v-ons-button @click="login">Tap me</v-ons-button>

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
    login () {
      console.log(this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
