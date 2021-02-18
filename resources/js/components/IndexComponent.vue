<template>

    <el-container>

        <el-row :gutter="20">
            <el-col :sm="24" :lg="6" :md="6" :xl="6">
                <filter-component></filter-component>
            </el-col>

            <el-col :sm="24" :lg="18" :md="18" :xl="18">
                <items-component></items-component>
            </el-col>
        </el-row>
    </el-container>

</template>

<script>
    import ItemsComponent from './ItemsComponent.vue';
    import FilterComponent from './FilterComponent.vue';

    export default {
        data: function () {
            return {
                greeting: 'Hello'
            }
        }
        ,
        components : {
            ItemsComponent,
            FilterComponent,
        }
    }
</script>

<style scoped>
</style>