<template>
    <el-container>
        <el-header></el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer></el-footer>
    </el-container>

</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
        }),
        components : {

        }
    }

</script>
