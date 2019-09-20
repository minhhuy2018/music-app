<template>
  <div>
    <div class="myform">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="passW">
          <el-input v-model="ruleForm.passW" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassW">
          <el-input v-model="ruleForm.rePassW" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>  //前端的数据怎么吧它的值怎么用的 
export default {
  data: function() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      // 刚你这里少了个回调
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passW) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        passW: "",
        rePassW: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 2,
            max: 6,
            message: "长度在 2 到 6 个字符",
            trigger: "blur"
          }
        ],
        passW: [
          {
            required: true,
            message: "请输入用户密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        rePassW: [
          {
            required: true,
            message: "请重新输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid,err) => {
        console.log(err)
        if (valid) {
          this.axios
            .post("/reg", this.ruleForm)
            .then(response => {
              if (response.data.msg == "username_has_exited") {
                this.$alert("该用户名已注册", "注册失败", {
                  confirmButtonText: "确定",
                  callback: action => {}
                });
              } else {
                this.$message("注册成功");
                this.$router.push({ path: "/" });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
          // alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.myform {
  width: 60%;

}

</style>
