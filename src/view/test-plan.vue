<template>
<div>
<p>&nbsp;</p>
<el-form label-width="80px" >
  <el-form-item label="企业ID">
    <el-input v-model="enterpriseName"></el-input>
  </el-form-item>
  <el-form-item label="">
      <el-button @click="submit">提交</el-button>
      <el-button @click="view">查看</el-button>
  </el-form-item>
</el-form>


<el-container style="height: 45vh; border: 1px solid #eee">
  <el-aside width="200px">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>{{$t('导航一')}}</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
    <el-main>
        <router-view></router-view>
    </el-main>
</el-container>
    </div>
</template>
<script>
import request from '@/request.js';
export default {
    data() {
        return{
            enterpriseName:'',
            registerName: '',
        }
    },
    methods:{
        submit() {
            console.log('发送到了福建省方尽快');
        },
        register() {
          request.post('/v1/enterprise')
            .then((res)=>{
              console.log(res);
            })
        },
        view(){
            
        }
    }
}
</script>