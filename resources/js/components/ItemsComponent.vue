<template>

    <el-table
            :data="items"
            emptyText="No results"
            v-loading="loading"
            style="width: 100%">
        <el-table-column
                prop="name"
                label="Name"
                >
        </el-table-column>
        <el-table-column
                prop="bathrooms"
                label="Bathrooms"
                >
        </el-table-column>
        <el-table-column
                prop="bedrooms"
                label="Bedrooms"
                >
        </el-table-column>
        <el-table-column
                prop="storeys"
                label="Storeys">
        </el-table-column>
        <el-table-column
                prop="price"
                label="Price">
        </el-table-column>
    </el-table>

</template>

<script>

    import { mapState } from 'vuex';

    export default {
        data: function () {
            return {

            }
        }
        ,
        components : {

        },
        computed : {
            ...mapState({
                items: state => state.Data.items,
                loading: state => state.Preloader.loading,
            }),
        },
        mounted() {
            this.$store.dispatch('getItems');
        },
        methods : {

        }
    }
</script>

<style scoped>
</style>