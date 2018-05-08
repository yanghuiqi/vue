<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form>
      <el-input placeholder="请输入用户名" size="small" type="text" name="username" v-model="userName"></el-input> <br>
      <el-input  placeholder="请输入密码" size="small" type="password" name="age" @keyup.enter.native="addUser" v-model="password"></el-input> <br>

    </el-form>
    <el-button type="primary" @click="addUser" >提交</el-button>

  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userName: "",
      password: ""
    };
  },
  methods: {
    addUser() {
      var name = this.userName;
      var password = this.password;
      this.$http
        .post(
          "/api/user/addUser",
          {
            username: name,
            password: password
          },
          {}
        )
        .then(response => {
          this.$message({
            message: "登录成功",
            center: true
          });
          this.$router.push("/todolist");
          console.log(response);
        });
    }
  }
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
