<template>
    <div>
        <h1>详情页面</h1>
        <p>商品详情: {{ userId }}</p>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="content" label="内容" width="180" />
            <el-table-column prop="data" label="发布日期" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="danger" plain icon="Delete" @click="deleteItem(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  
  const route = useRoute();
  const userId = ref(route.params.id);
  

  const tableData = ref([
     {
    title: '计算机',
    content: 'Computer',
    data: '2012',
  },
  {
   title: '路由器',
    content: 'Router',
    data: '2011',
  },
  {
    title: '苹果',
    content: 'Apple',
    data: '2023',
  },
  {
    title: 'XiaoMi',
   content: '为发烧而生',
    data: '2012',
  },

]);
const deleteItem = (index) => {
    tableData.value.splice(index, 1);
}

  
  </script>
  
<style scoped>
div {
  margin: 50px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.el-table {
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.el-table th {
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
}

.el-table tr {
  transition: all 0.3s ease;
}

.el-table tr:hover {
  background-color: #f5f5f5;
}
</style>
  