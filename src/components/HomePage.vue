<template>
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
          <!-- <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon> -->
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

    <div class="header">
        <v-ons-list>
          <v-ons-list-item>
            <div class="center">
              <p>
                <v-ons-search-input placeholder="Search Liquor"></v-ons-search-input>
              </p>
              <p>{{ query }}</p>
            </div>
          </v-ons-list-item>
        </v-ons-list>
    </div>
    <v-ons-row v-masonry class="masonry-container" origin-left="true" item-selector=".item">
      <v-ons-col v-masonry-tile class="item">
        <v-ons-card>
          <img src="../assets/sake.png" alt="Onsen UI" style="width: 100%">
          <div class="title">
            <p>{{ nickname }}</p>
          </div>
          <div class="content">
            <div>
                <v-ons-icon style="color: red;" size="20px" icon="md-face"></v-ons-icon>
              <v-ons-icon style="color: blue;" size="20px" icon="md-face"></v-ons-icon>
            </div>
            <v-ons-list>
              <v-ons-list-header>コメント</v-ons-list-header>
              <v-ons-list-item>さけ</v-ons-list-item>
            </v-ons-list>
          </div>
        </v-ons-card>
      </v-ons-col>
      <v-ons-col v-masonry-tile class="item">
        <v-ons-card>
          <img src="../assets/sake2.png" alt="Onsen UI" style="width: 100%">
          <div class="title">
            <p>{{ nickname }}</p>
          </div>
          <div class="content">
            <div>
                <v-ons-icon style="color: red;" size="20px" icon="md-face"></v-ons-icon>
              <v-ons-icon style="color: blue;" size="20px" icon="md-face"></v-ons-icon>
            </div>
            <v-ons-list>
              <v-ons-list-header>コメント</v-ons-list-header>
              <v-ons-list-item>さけ</v-ons-list-item>
            </v-ons-list>
          </div>
        </v-ons-card>
      </v-ons-col>
      <v-ons-col v-masonry-tile class="item">
        <v-ons-card>
          <img src="../assets/sake3.png" alt="Onsen UI" style="width: 100%">
          <div class="title">
            <p>{{ nickname }}</p>
          </div>
          <div class="content">
            <div>
              <v-ons-icon style="color: red;" size="20px" icon="md-face"></v-ons-icon>
              <v-ons-icon style="color: blue;" size="20px" icon="md-face"></v-ons-icon>
            </div>
            <v-ons-list>
              <v-ons-list-header>コメント</v-ons-list-header>
              <v-ons-list-item>さけ</v-ons-list-item>
            </v-ons-list>
          </div>
        </v-ons-card>
      </v-ons-col>
      <v-ons-col v-masonry-tile class="item">
        <v-ons-card>
          <img src="../assets/sake4.png" alt="Onsen UI" style="width: 100%">
          <div class="title">
            <p>{{ nickname }}</p>
          </div>
          <div class="content">
            <div>
                <v-ons-icon style="color: red;" size="20px" icon="md-face"></v-ons-icon>
              <v-ons-icon style="color: blue;" size="20px" icon="md-face"></v-ons-icon>
            </div>
            <v-ons-list>
              <v-ons-list-header>コメント</v-ons-list-header>
              <v-ons-list-item>さけ</v-ons-list-item>
            </v-ons-list>
          </div>
        </v-ons-card>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      nickname: '',
      msg: 'Welcome 酒',
      essentialLinks: [
        {
          label: 'Core Docs',
          link: 'https://vuejs.org',
          icon: 'fa-book'
        },
        {
          label: 'Community Chat',
          link: 'https://chat.vuejs.org',
          icon: 'fa-commenting'
        },
        {
          label: 'Forum',
          link: 'https://forum.vuejs.org',
          icon: 'ion-chatboxes'
        },
        {
          label: 'Twitter',
          link: 'https://twitter.com/vuejs',
          icon: 'fa-twitter'
        },
        {
          label: 'Docs for this template',
          link: 'http://vuejs-templates.github.io/webpack/',
          icon: 'fa-file-text'
        }
      ],
      query: ''
    }
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    goTo (url) {
      window.open(url, '_blank')
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

.item {
  width: 50%;
}
</style>
