<template>
   <div class="container">
    <div class="buttons-container">
      <el-button type="primary" @click="fetchUsers" >删除商品</el-button>
      <el-button type="success" @click="addUser">新增商品</el-button>
    </div>
     <div class="table-container">
    <el-table :data="userStore.users" style="width: 100%">
      <el-table-column label="标题" width="180">
        <template #default="scope">
          <a @click="goToUserDetail(scope.row)">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column label="摘要" width="180">
        <template #default="scope">
          <span>{{ scope.row.content}}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布日期">
        <template #default="scope">
          <span>{{ scope.row.data }}</span>
        </template>
      </el-table-column>
    </el-table>
     </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import instance from '../axios'; 
import { useRouter } from 'vue-router';
import { useStore } from '../store'; 

const userStore = useStore();
const router = useRouter();

const fetchUsers = () => {
  instance({
    url: '/users',
    method: 'get'
  }).then(res => {
    userStore.setUsers(res.data.data); 
  }).catch(error => {
    console.error('Error fetching users:', error);
    alert('获取商品数据失败，请稍后重试。'); 
  });
};

const goToUserDetail = (user) => {
  router.push({ name: 'userDetail', params: { id: user.id } });
};

const addUser = () => {
  const newUser = {
    id: userStore.users.length + 1,
    name: '新增商品',
    content: 'computer',
    data: `发布日期${userStore.users.length + 1}`
  };
  userStore.addUser(newUser); 
};

onMounted(() => {
  fetchUsers();
});


</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}


.table-container {
  overflow-x: auto;
}


.el-table td, .el-table th {
  border: 1px solid #ddd;
  padding: 10px;
}


.el-table th {
  background-color: #e9ecef;
  font-weight: bold;
}


a {
  color: #409eff;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}


.el-table__row--striped td {
  background-color: #f8f9fa;
}

.el-table__row:hover > td {
  background-color: #e9ecef;
}
</style>