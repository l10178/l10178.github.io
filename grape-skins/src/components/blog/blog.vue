<template>
    <div class="container blog m-t-sm">
        <h1>
            <a :href="githubUrl" target="_blank">
                <fa-icon :icon="['fab','github']"/>
            </a>
            Bits And Pieces
        </h1>
        <p class="m-b-lg">
            I always have a lot of bits and pieces in my coat pocket.
        </p>
        <el-collapse accordion @change="showDetail">
            <el-collapse-item v-for="content in contents" :key="content.path" :name="content.path">
                <template slot="title">
                    <h5>{{ content.name }}</h5>
                </template>
                <vue-markdown :source="markdownSource"></vue-markdown>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueMarkdown from 'vue-markdown';
    import GitHub from 'github-api';
    import {GITHUB_BITS, GITHUB_API_TKKEEN, GITHUB_USER} from '../../constants';

    let github = new GitHub({
        // it's a token, but should set to username
        username: GITHUB_API_TKKEEN.replace('2018', '1201'),
    });
    let repo = github.getRepo(GITHUB_USER, 'bits-pieces');

    export default {
        name: 'GrpBlog',
        data() {
            return {
                githubUrl: GITHUB_BITS,
                markdownSource: '',
                contents: [],
            };
        },
        components: {
            VueMarkdown,
        },
        methods: {
            showDetail: function(filePath) {
                this.markdownSource = '';
                if (filePath) {
                    repo.getContents('master', filePath, true).then((response) => {
                        this.markdownSource = response.data;
                    });
                }
            },
        },
        mounted() {
            repo.getContents('master', '', true).then((response) => {
                this.contents = Vue.lodash.filter(response.data, function(rep) {
                    return Vue.lodash.endsWith(rep.name, '.md');
                });
            });
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .blog {

    }
</style>
