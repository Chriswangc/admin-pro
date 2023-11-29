<template>
    <div>
        <el-form :inline="true" class="search-form">
            <el-form-item>
                <el-button type="primary" @click="handleAddRole">添加角色</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="roleList" border style="width: 100%">
            <el-table-column prop="roleId" label="角色id" width="180"></el-table-column>
            <el-table-column prop="roleName" label="角色名称" width="180"></el-table-column>
            <el-table-column label="操作"
                ><template #default="scope">
                    <el-button type="primary" size="small" link @click="onChangeRole(scope.row)">
                        修改权限</el-button
                    ></template
                ></el-table-column
            >
        </el-table>
    </div>
</template>
<script lang="ts" setup>
// import { useUserStore } from "@/store/user";
// const userStore = useUserStore();
import { ref, onMounted } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { getRoleList } from '@/api/role';
const router = useRouter();
// 角色接口
export interface IRole {
    role: number; // 角色id
    roleName: string; // 角色名称
}

// 有权限的角色接口
export interface IRoleWithAuth {
    roleName: string;
    roleId: number;
    authority: [];
}
// 角色列表
let roleList = ref<IRole[]>([]);

const handleAddRole = () => {
    ElMessageBox.prompt('请输入角色名称', '添加角色', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    })
        .then(({ value, action }) => {
            if (value) {
                roleList.value.push({
                    roleId: roleList.value.length + 1,
                    authority: [],
                    roleName: value
                });
                ElMessage({
                    type: 'success',
                    message: `${value}角色添加成功`
                });
            }
        })
        .catch((err) => {
            ElMessage({
                type: 'info',
                message: `input canceled`
            });
        });
};
const onChangeRole = (row: IRole) => {
    console.log(row);
    router.push({
        path: 'auth',
        query: {
            id: row.roleId,
            authority: row.authority
        }
    });
    // router.push({
    //     name: "AuthPage",
    //     params: {
    //         id: row.roleId,
    //         authority: row.authority.join(","),
    //     },
    // });
};
onMounted(() => {
    // 获取角色列表
    getRoleList().then((res) => {
        console.log(res);
        roleList.value = res.data;
    });
});
</script>
