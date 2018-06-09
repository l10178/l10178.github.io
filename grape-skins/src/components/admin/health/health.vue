<template>
    <div>
        <h2>
            <span>Health Checks</span>
            <!--<button class="btn btn-primary float-right" (click)="refresh()">-->
            <!--<span class="fa fa-refresh"></span> <span jhiTranslate="health.refresh.button">Refresh</span>-->
            <!--</button>-->
        </h2>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Service Name</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Details</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="health in healthData" :key="health.name">
                    <!--<td>{{subSystemName(health.name)}}</td>-->
                    <td>{{health.name}}</td>
                    <td class="text-center">
                        {{health.status}}
                        <!--<span class="badge" [ngClass]="getBadgeClass(health.status)"-->
                        <!--jhiTranslate="{{'health.status.' + health.status}}">-->
                        <!--</span>-->
                    </td>
                    <!--<td class="text-center">-->
                    <!--<a class="hand" (click)="showHealth(health)" *ngIf="health.details || health.error">-->
                    <!--<i class="fa fa-eye"></i>-->
                    <!--</a>-->
                    <!--</td>-->
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    const loginUrl = '/api/authenticate';
    export default {
        name: 'GrpHealth',
        data() {
            return {
                healthData: [],
            };
        },
        methods: {
            test: function() {
            },
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
