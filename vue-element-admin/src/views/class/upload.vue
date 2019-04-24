<template>
  <div>
    <pan-thumb :image="image" />
    <!-- ALTER TABLE `user` ADD `avatar` VARCHAR(200) NULL AFTER `identity_id`; -->
    <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
    Change Avatar
    </el-button>

    <image-cropper
    v-show="imagecropperShow"
    :key="imagecropperKey"
    :width="300"
    :height="300"
    url="http://123.206.55.50:11000/upload"
    lang-type="en"
    @close="close"
    @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  methods:{
    cropSuccess(resData) {
      console.log('resData',resData)
      this.image=resData[0].path;
      this.imagecropperShow = false
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>
