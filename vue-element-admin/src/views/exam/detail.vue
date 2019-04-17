<template>
  <div class="add-layout">
    <h2>详情页</h2>
    <div class="add-layout-content">
      detail
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.add-layout {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  padding: 0px 24px 24px;
}
h2 {
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 1.5em;
}
.add-layout-content {
  width: 100%;
  height: 100%;
  flex: auto;
  min-height: 0;
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
}
</style>
