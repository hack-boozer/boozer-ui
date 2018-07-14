<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">新規投稿</div>
    </v-ons-toolbar>
    <div class="margin-title"><v-ons-icon icon="md-camera-add"></v-ons-icon>写真を追加</div>
    <v-ons-row>
      <add-photo v-for="i in 3" :key="i" :num="'photo' + i"></add-photo>
    </v-ons-row>
  </v-ons-page>
</template>
<script>
import AddPhoto from './molecules/AddPhoto'
export default {
  components: {
    AddPhoto
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.center {
  text-align: center;
}
.margin-title {
  margin: 10px 8px;
}
</style>


