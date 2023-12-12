<template>
    <div class="wrap-about">
        <ElForm ref="formRef"></ElForm>
    </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue';
import { useCompRef } from '@/hooks/useCompRef';
import { ElForm } from 'element-plus';
const formRef = useCompRef<typeof ElForm>();

// formRef.value?.validate
</script>
<style lang="less" scoped>
.wrap-about {
    // color: @color;
    background: var(--dawei-color-dark-black);
}
</style>
