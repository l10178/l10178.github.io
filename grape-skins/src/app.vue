<template>
    <div id="app">
        <el-container>
            <el-header>
                <grp-header></grp-header>
            </el-header>
            <el-container>
                <!--<el-aside class="side-menu sidebar-inverse"></el-aside>-->
                <el-main>
                    <router-view/>
                </el-main>
                <el-footer>
                    Copyright © <a href="http://nxest.com" target="_blank">nxest.com</a> 2018
                    | Become a Sponsor, click
                    <el-button type="text" @click="thanks">
                        <fa-icon icon="coffee" size="lg"/>
                    </el-button>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import GrpHeader from './components/layouts/header/header';

    export default {
        name: 'app',
        components: {GrpHeader},
        methods: {
            thanks: function() {
                this.$notify({
                    title: 'Got it',
                    message: 'Thank you very much.',
                    type: 'success',
                });
            },
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./assets/styles/variables";

    .el-aside.side-menu {
        z-index: 100000;
        position: fixed;
        width: $app-aside-width !important;
        height: 100%;
        transition: all 0.25s;
        &.sidebar-inverse {
            background-color: $brand-black;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
        }
    }

    .el-header {
        padding: 0;
        background-color: $brand-black;
        //height: $app-header-height!important;
    }

    .el-footer {
        background-color: $brand-black;
        color: $brand-light;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        padding: 0;
        //background-color: $body-bg;
    }

    .el-footer {
        background-color: $brand-black;
    }
</style>
