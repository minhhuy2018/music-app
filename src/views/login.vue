<template>
<div class="myform">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passW">
            <el-input v-model="ruleForm.passW" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
    <div>
        还没有账号， <router-link to="/reg">去注册</router-link>
    </div>
</div>
</template>

<script>
export default {
data: function() {
    return {
        ruleForm: {
            name: "",
            passW: ""
        },
        rules: {
            name: [
                { required: true, message: "请输入用户名",trigger: "blur" }
            ],
            passW: [
                { required: true,  message: "请输入用户密码", trigger: "blur"},
                { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur"}
            ]
        }
    };
},
methods: {
    submitForm() {
        this.$refs.ruleForm.validate(valid => {
            if (valid) {
                this.axios.post("/login", this.ruleForm).then(response => {
                    if (!response.data.status) {
                        this.$message.error(response.data.msg)
                    } else {
                        this.$message(`登录成功,欢迎${response.data.data.username}回来!`);
                  
                        this.$router.push({ path: "/" }); 
                    }
                }).catch(function(error) {
                    console.log(error);
                });
            }
        });
    },
    resetForm() {
        this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style>
.myform {
  width: 60%;
  margin: 60px auto;
}
</style>
