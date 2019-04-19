<template>
  <div class="wra">
    sdfghfsdfgbgddfgdfgbgfggf
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created(){
    this.detailList();
  },
  methods:{
    ...mapActions({
      detailList:"examList/students"
    })
  }
};
</script>
<style>
</style>


