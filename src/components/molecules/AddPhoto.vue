<template>
  <v-ons-col>
    <v-ons-input type="file" :input-id="num" v-model="photo" v-show="inputImage" @change="addPhoto"></v-ons-input>
    <label :for="num">
      <v-ons-card class="center card-style">
        <v-ons-icon v-show="!uploadedImage" size="30px" icon="md-plus"></v-ons-icon>
        <img v-show="uploadedImage" :src="uploadedImage" class="add-img" />
      </v-ons-card>
    </label>
  </v-ons-col>
</template>
<script>
export default {
  props: ['num'],
  data () {
    return {
      inputImage: false,
      uploadedImage: '',
      photo: ''
    }
  },
  methods: {
    addPhoto (e) {
      let files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    createImage (file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        this.uploadedImage = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

}
</script>
<style scoped>
.center {
  text-align: center;
}
.card-style {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 100px;
}
.add-img {
  width: 100%;
  height: auto;
}
</style>

