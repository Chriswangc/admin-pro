<template>
    <div class="wrap-content">
        <el-form :inline="true" label="名称" :model="searchData" class="search-form">
            <el-form-item>
                <el-input v-model="searchData.title" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="searchData.introduce" placeholder="请输入详情"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearchGoods()">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="computedDataList" border style="width: 100%">
            <el-table-column prop="id" label="序号" width="180"></el-table-column>
            <el-table-column prop="title" label="名称" width="180"></el-table-column>
            <el-table-column prop="introduce" label="详情"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
            class="pagination"
            background
            layout="sizes, prev, pager, next"
            :total="searchData.dataCount"
            :page-size="searchData.single_page_size"
            :page-sizes="[5, 10, 15, 20]"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, computed, ref, watch } from 'vue';
import { getProject } from '@/api/project';
// 项目接口
export interface IProject {
    userId: number; // 项目
    id: number; // 项目id
    title: string; // 项目标题
    introduce: string; // 项目介绍
}
// 展示的商品数据 数组使用ref包裹定义
let projectList = ref<IProject[]>([]);

let searchData = reactive({
    userId: 0,
    id: 0,
    title: '',
    introduce: '',
    current_page: 1,
    dataCount: 0,
    single_page_size: 5
});
const data = reactive({}) as IProject[];
// 查询商品列表
const onSearchGoods = () => {
    console.log(projectList.value);
    let res: IProject[] = [];
    if (searchData.title || searchData.introduce) {
        if (searchData.title) {
            res = projectList.value.filter((value) => {
                return value.title.indexOf(searchData.title) !== -1;
            });
        }
        if (searchData.introduce) {
            res = projectList.value.filter((value) => {
                return value.introduce.indexOf(searchData.introduce) !== -1;
            });
        }
    } else {
        console.log(projectList.value);
        res = projectList.value;
    }
    projectList.value = res;
    searchData.current_page = 1;
    searchData.dataCount = projectList.value.length;
};
const fetchData = () => {
    getProject().then((res) => {
        projectList.value = res.data;
        searchData.dataCount = res.data.length;
    });
};

// 初始化数据 ajax调用后端接口
onMounted(() => {
    fetchData();
});
// 计算属性, 切割出实际上需要展示的数据
let computedDataList = computed(() => {
    return projectList.value.slice(
        (searchData.current_page - 1) * searchData.single_page_size,
        searchData.current_page * searchData.single_page_size
    );
});
// 改变当前页码
const handleCurrentChange = (page: number) => {
    searchData.current_page = page;
};
// 改变每页显示多少条数据
const handleSizeChange = (page_size: number) => {
    searchData.single_page_size = page_size;
};
// 解决搜索的问题
watch([() => searchData.title, () => searchData.introduce], () => {
    if (!searchData.title && !searchData.introduce) {
        fetchData();
    }
});
</script>

<style lang="less" scoped>
.wrap-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: max-content;
    flex-direction: column;

    .title {
        font-size: 60px;
        font-weight: 700;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right, #409eff, #ffc76b);
    }

    .subtitle {
        font-size: 40px;
        font-weight: 500;
        color: #213547;
    }

    .content {
        margin: 20px 0;
        font-size: 16px;
        color: #767676;
    }

    .op-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 0;

        > :last-child {
            background-color: #f1f1f1;
        }
    }

    .shields-icon {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .search-form {
        padding: 10px;
    }

    .pagination {
        display: flex;
        justify-content: right;
        align-items: right;
        margin: 10px;
    }
}
</style>
