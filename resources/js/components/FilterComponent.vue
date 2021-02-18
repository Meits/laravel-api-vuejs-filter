<template>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="Bathrooms">
            <el-input v-model="form.bathrooms"></el-input>
        </el-form-item>

        <el-form-item label="Bedrooms">
            <el-input v-model="form.bedrooms"></el-input>
        </el-form-item>

        <el-form-item label="Storeys">
            <el-input v-model="form.storeys"></el-input>
        </el-form-item>

        <el-form-item label="Price min">
            <el-input v-model="form.price_min"></el-input>
        </el-form-item>

        <el-form-item label="Price max">
            <el-input v-model="form.price_max"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Search</el-button>
            <el-button @click="resetForm">Cancel</el-button>
        </el-form-item>
    </el-form>
</template>


<script>

    export default {
        data: function () {
            return {
                form : {
                    name : '',
                    bathrooms : '',
                    bedrooms : '',
                    storeys : '',
                    price_min : '',
                    price_max : '',
                }
            }
        }
        ,
        components : {

        },
        mounted() {

        },
        methods : {
            onSubmit () {
                this.updateItems();
            },

            resetForm() {
                let self = this;
                Object.keys(this.form).forEach(function(key, index) {
                    self.form[key] = "";
                });
                this.updateItems();
            },
            updateItems() {
                this.$store.dispatch('getItems',this.form);
            }
        }
    }
</script>

<style scoped>
</style>