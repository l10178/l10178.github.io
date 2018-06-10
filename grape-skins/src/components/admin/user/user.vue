<template>
    <div class="container-fluid m-lg">
        <h2>
            <span>Users</span>
            <button class="btn btn-primary float-right m-r-lg">
                <fa-icon icon="user"/>
                Create a new User
            </button>
        </h2>

        <div class="table-responsive">
            <el-table
                :data="userList"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="login"
                    label="Login"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="Email">
                </el-table-column>
                <el-table-column
                    label="Created Date">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.createdDate }}</span>
                    </template>
                </el-table-column>

            </el-table>
        </div>

    </div>
</template>

<script>

    const testUserList = [
        {
            id: 1,
            login: 'admin',
            email: 'admin@localhost',
            createdDate: '2018-06-10 10:19:28',
        },
    ];
    export default {
        name: 'GrpUser',
        data() {
            return {
                userList: testUserList,
            };
        },
        methods: {
            login: function() {
            },
        },

    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
