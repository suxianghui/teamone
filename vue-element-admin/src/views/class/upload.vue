<template>
  <div>
    <pan-thumb :image="avatar" />
    <!-- ALTER TABLE `user` ADD `avatar` VARCHAR(200) NULL AFTER `identity_id`; -->
    <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
    Change Avatar
    </el-button>
    <!-- 上传图片弹框 -->
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
import {mapState,mapMutations} from 'vuex'
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
  computed:{
    ...mapState({
      avatar:state=>state.user.avatar
    })
  },
  methods:{
    ...mapMutations({
      setAvatar:'user/SET_AVATAR'
    }),
    cropSuccess(resData) {
      console.log('resData',resData)
      this.image=resData[0].path;
      // this.setAvatar(this.image);
      this.imagecropperShow = false
    },
    close() {
      this.imagecropperShow = false
    },
    // 导出excel表
    exportExcel(){
      console.log('allExamList',this.allExamList)
      // 表格的表头，只需要每一个对象中的属性的键名
      let header = Object.keys(this.allExamList[0]);
      let list = this.allExamList.map(item=> {
        // 只要每一项的属性值，不需要键名，最后为为二维数组
        let arr = Object.values(item);
        // 将数组转为字符串，导出excel的数据是字符串格式
        return arr.map(item=>JSON.stringify(item))
      })
      console.log('allExamList',list);
      // 导出excel组件，只需要表头和数据
      import('@/vendor/Export2Excel').then(excel=>{
        excel.export_json_to_excel({
          header:header,// 表头
          data:list,// 数据
          filename:'',
          bookType:'xlsx'// 表格后缀名
        })
      })
    }
  }
}
</script>
