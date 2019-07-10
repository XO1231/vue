<template>
	<div>
		<el-button type="success" @click="addFormVisible = true" class="addbtn">新增</el-button>
		<el-table :data="user" height="250" border style="width: 100%">
			<el-table-column prop="name" label="用户名" min-width="20%" align="center">
			</el-table-column>
			<el-table-column prop="age" label="年龄" min-width="20%" align="center">
			</el-table-column>
			<el-table-column prop="address" label="地址" align="center" min-width="20%">
			</el-table-column>
			<el-table-column label="操作" min-width="40%" align="center">
				<template slot-scope="scope">
					<el-button type="primary" size="mini" round @click="update(scope.$index)">编辑</el-button>
					<el-button type="primary" size="mini" round @click="deleteuser(scope.row.name)">删除</el-button>
				</template>
			</el-table-column>
 
		</el-table>
		<el-dialog title="修改用户信息" :visible.sync="updateVisible">
			<el-form :model="currform">
				<el-form-item label="用户名" :label-width="formLabelWidth">
					<el-input v-model="currform.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="年龄" :label-width="formLabelWidth">
					<el-input v-model="currform.age" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input v-model="currform.address" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="updateVisible = false">取 消</el-button>
				<el-button type="primary" @click="updateVisible = false">确 定</el-button>
			</div>
		</el-dialog>
 
		<el-dialog title="新增用户" :visible.sync="addFormVisible">
			<el-form :model="addform">
				<el-form-item label="用户名" :label-width="formLabelWidth">
					<el-input v-model="addform.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="年龄" :label-width="formLabelWidth">
					<el-input v-model="addform.age" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input v-model="addform.address" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="adduser">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
 
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				currform: {
					"name": '',
					"age": '',
					"address": ''
				},
				addform: {
					"name": '',
					"age": '',
					"address": ''
				},
				formLabelWidth: '120px',
				updateVisible: false,
				addFormVisible: false,
				
				user: []
			}
		},
		created() {
			this.fetchData()
		},
		methods: {
			fetchData() {
				axios.get('./static/user.json').then((response)=> {
					console.log(response); //请求正确时执行的代码 
					this.user = response.data;
					console.log(this.user)
					
				}).catch(function(response) {
					console.log(response); //发生错误时执行的代码  
				});
			},
			update(index) {
				this.currform = this.user[index];
				this.updateVisible = true;
 
			},
			deleteuser(name) {
				alert(name);
			},
			adduser() {
				alert(this.addform.name + this.addform.age + this.addform.address);
				this.addFormVisible = false;
			}
		}
	}
</script>
 
<style>
	.addbtn {
		float: right;
		margin-right: 100px;
        margin-top: 150px
	}
</style>
