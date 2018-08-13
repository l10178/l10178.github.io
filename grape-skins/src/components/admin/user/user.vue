<template>
    <div class="container-fluid m-t-lg">
        <h2>
            <span>Users</span>
            <button class="btn btn-primary float-right m-r-lg">
                <font-awesome-icon icon="user"/>
                Create a new User
            </button>
        </h2>

        <div class="table-responsive">
            <el-table
                :data="userList"
                stripe
                style="width: 100%">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="login"
                    label="Name"
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

                <el-table-column label="Operation">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">Edit
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="m-t-sm text-center">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1">
                </el-pagination>
            </div>
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
            handleEdit: function(index, row) {
            },
            handleDelete: function(index, row) {
            },
        },

    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
