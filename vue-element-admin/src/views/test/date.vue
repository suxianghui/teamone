<template>
    <div>
        <pan-thumb :image="image" class="user-avatar" />
        <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
            Change Avatar
        </el-button>

        <image-cropper v-show="imagecropperShow" :key="imagecropperKey" :width="40" :height="40" url="http://123.206.55.50:11000/upload"
            lang-type="en" @close="close" @crop-upload-success="cropSuccess" />
    </div>
</template>
<script>
    import ImageCropper from '@/components/ImageCropper'
    import PanThumb from '@/components/PanThumb'
    export default {
        data() {
            return {
                imagecropperShow: false,
                imagecropperKey: 0,
                image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
            }
        },
        components:{
            ImageCropper,
            PanThumb
        },
        methods:{
            close(){
                this.imagecropperShow= false
            },
            cropSuccess(e){
                this.image = e[0].path;
                this.imagecropperShow = false;
            }
        }
    }
</script>
<style>
    .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
</style>