<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      msg: "商品列表1"
    };
  },
  methods: {}
};
</script>
<style scoped="scoped">
.el-form {
  padding: 0 20%;
  width: 30%;
  margin: 0 auto;
}
.el-button {
  width: 30%;
}
</style>
