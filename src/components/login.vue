<template>
	<el-form label-width="500px" class="demo-ruleForm loginform" align="center">
		<el-form-item label="用户名">
			<el-input v-model="name"></el-input>
		</el-form-item>
 
		<el-form-item label="密    码" prop="pass">
			<el-input v-model="pwd" type="password" auto-complete="off"></el-input>
		</el-form-item>
 
		<el-form-item size="large">
			<el-button type="primary" @click="login()">登录</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</template>
 
<script>
	import axios from 'axios'
	/*var user=[{"name":"张三","pwd":"123"},
{"name":"李四","pwd":"456"}]; */
	var user;
	export default {
		data() {
			return {
				name: "",
				pwd: ""
			}
		},
		methods: {
			login() {
				//=>表示可以渲染模板数据
				axios.get('/static/login').then((response) => {
					console.log(response); //请求正确时执行的代码 
					user = response.data;
					for(var i = 0; i < user.length; i++) {
						if(user[i].name == this.name) {
							if(user[i].pwd == this.pwd) {
								this.$router.push('/moroute');
							} else {
								alert("密码错误");
							}
						}
					}
				}).catch(function(response) {
					console.log(response); //发生错误时执行的代码  
				});
			}
		}
	}
</script>
<style>
	.loginform {
		float: left;
		margin: auto;
	}
</style>
