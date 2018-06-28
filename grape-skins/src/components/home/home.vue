<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="logo-big">
                            <img class="img-responsive" src="../../assets/images/logo/logo.png" alt="">
                        </div>
                        <div class="intro-text">
                            <span class="brand">Greetings, Grapes!</span>
                            <hr class="star-light">
                            <div class="row stats">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <a href="https://github.com/l10178/grapes" target="_blank">
                                        <div class="card dark summary-inline">
                                            <div class="card-body">
                                                <fa-icon icon="download" size="3x"></fa-icon>
                                                <div class="content">
                                                    <div class="title">{{npmDownloads}}</div>
                                                    <div class="sub-title">Downloads in last 30 days</div>
                                                </div>
                                                <div class="clear-both"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <a href="https://github.com/l10178/grapes" target="_blank">
                                        <div class="card dark summary-inline">
                                            <div class="card-body">
                                                <fa-icon icon="star" size="3x"></fa-icon>
                                                <div class="content">
                                                    <div class="title">{{stars}}</div>
                                                    <div class="sub-title">Stars</div>
                                                </div>
                                                <div class="clear-both"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <a href="https://github.com/l10178/grapes/contributors" target="_blank">
                                        <div class="card dark summary-inline">
                                            <div class="card-body">
                                                <fa-icon icon="user" size="3x"></fa-icon>
                                                <div class="content">
                                                    <div class="title">{{contributors}}</div>
                                                    <div class="sub-title">Contributors</div>
                                                </div>
                                                <div class="clear-both"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">What is Grapes</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row text-center">
                <span class="title text-center">
                    <div class="head-icons">
                        <a href="http://projects.spring.io/spring-boot/" target="_blank">
                            <img src="../../assets/images/third/logo-spring-boot.png"
                                 class="project-icon img-responsive">
                        </a>
                        <i class="fa fa-4x">+</i>
                        <a href="https://cn.vuejs.org/" target="_blank">
                            <img src="../../assets/images/third/vuejs.png" class="project-icon img-responsive">
                        </a>
                        <i class="fa fa-4x">=</i>
                        <a href="/">
                            <img src="../../assets/images/logo/logo.png" class="project-icon img-responsive">
                        </a>
                    </div>
                    <p class="lead">
                        Grapes is a
                        <a class="dark" href="https://spring.io/projects/spring-boot" target="_blank">Spring Boot</a> +
                        <a class="dark" href="https://cn.vuejs.org/" target="_blank">Vue.js</a> Web application.
                        <br>
                    </p>
                </span>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="heading">Goal</h2>
                        <p>
                            Our goal is to generate for you a complete and modern Web app or micro service architecture,
                            unifying:
                        </p>
                        <ul>
                            <li>A high-performance and robust Java stack on the server side with Spring Boot</li>
                            <li>A sleek, modern, mobile-first front-end with Vue.js and Bootstrap</li>
                            <li>A powerful workflow to build your application with Webpack and Maven</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h2 class="heading">Sample &amp; Sources</h2>
                        <p>
                            You can checkout a sample application
                            <a href="https://github.com/l10178/grapes" target="_blank">here</a>.
                        </p>
                        <ul>
                            <li> If you want to code with us, feel free to join!</li>
                            <li> If you like the project, please give us a star on GitHub</li>
                            <li> I think you will like
                                <a href="https://www.jhipster.tech/" target="_blank">JHipster</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Grapes Quick Start</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <ol class="text-body">
                            <li>Checkout grapes <code>git clone https://github.com/l10178/grapes.git</code></li>
                            <li>Run backend by the java main method <code>com.nxest.grapes.GrapesApp.main</code></li>
                            <li>Run frontend by yarn
                                <code>cd grape-skins &amp;&amp; yarn &amp;&amp; yarn start</code>
                            </li>
                            <li>Navigate to <a href="http://localhost:9000">http://localhost:9000</a> in your browser
                            </li>
                        </ol>
                    </div>
                    <div class="col-lg-12">
                        <p>
                            <small>
                                * Assuming you have already installed
                                <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html"
                                   target="_blank">Java</a>,
                                <a href="https://git-scm.com/" target="_blank">Git</a>,
                                <a href="https://nodejs.org/" target="_blank">Node.js</a>,and
                                <a href="https://yarnpkg.com/en/docs/install" target="_blank">Yarn</a>.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!--technology stack-->
        <section id="technology-stack" class="stack-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Client Side Stack</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle">
                            <fa-icon :icon="['fab','html5']" class="ico-circle" style="color: #e44d26"/>
                            <span class="title-sub-tech">HTML5</span>
                        </li>
                        <li class="clip img-circle">
                            <fa-icon :icon="['fab','css3-alt']" class="ico-circle text-info"/>
                            <span class="title-sub-tech">CSS3</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/bootstrap.svg"/>
                            <span class="title-sub-tech">Bootstrap</span>
                        </li>

                        <li class="clip img-circle">
                            <img src="../../assets/images/third/vuejs.png"/>
                            <span class="title-sub-tech">Vue.js</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/jquery.svg" class="width invert-hover"/>
                            <span class="title-sub-tech">JQuery</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/websocket.png" class="invert"/>
                            <span class="title-sub-tech">Websockets</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/yarn.svg"/>
                            <span class="title-sub-tech">Yarn</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/webpack.svg"/>
                            <span class="title-sub-tech">Webpack</span>
                        </li>

                        <li class="clip img-circle">
                            <fa-icon :icon="['fab','sass']" class="ico-circle" style="color: #cd6799"/>
                            <span class="title-sub-tech">Sass</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/browsersync.svg"/>
                            <span class="title-sub-tech">Browsersync</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/karma.svg"/>
                            <span class="title-sub-tech">Karma</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/protarctor.png"/>
                            <span class="title-sub-tech">Protractor</span>
                        </li>

                        <li class="clear"></li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Server Side Stack</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/spring-boot.png"/>
                            <span class="title-sub-tech">Spring Boot</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/spring.png"/>
                            <span class="title-sub-tech">Spring Security</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/netflix.png"/>
                            <span class="title-sub-tech">Netflix OSS</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/consul.svg"/>
                            <span class="title-sub-tech">Consul</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/gradle-new.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">Gradle</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/maven.png" class="invert-hover-white width"/>
                            <span class="title-sub-tech">Maven</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/hibernate.svg"/>
                            <span class="title-sub-tech">Hibernate</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/liquibase.gif" class="width"/>
                            <span class="title-sub-tech">Liquibase</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/mysql.svg"/>
                            <span class="title-sub-tech">MySQL</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/mariadb.svg"/>
                            <span class="title-sub-tech">MariaDB</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/postgresql.svg" class="height"/>
                            <span class="title-sub-tech">PostgreSQL</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/oracle.svg" class="width"/>
                            <span class="title-sub-tech">Oracle</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/mssql.png"/>
                            <span class="title-sub-tech">MS SQL</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/mongo.png"/>
                            <span class="title-sub-tech">MongoDB</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/cassandra.svg" class="invert-hover-white"/>
                            <span class="title-sub-tech">Cassandra</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/ehcache.png"/>
                            <span class="title-sub-tech">EhCache</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/Hazelcast.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">Hazelcast</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/infinispan.png"/>
                            <span class="title-sub-tech">Infinispan</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/elasticsearch.svg"/>
                            <span class="title-sub-tech">ElasticSearch</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/kafka.svg" class="invert-hover-white"/>
                            <span class="title-sub-tech">Kafka</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/swagger.png"/>
                            <span class="title-sub-tech">Swagger</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/elk-stack.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">ELK Stack</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/prometheus.svg"/>
                            <span class="title-sub-tech">Prometheus</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/thymeleaf.png"/>
                            <span class="title-sub-tech">Thymeleaf</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/gatling.png"/>
                            <span class="title-sub-tech">Gatling</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/cucumber.svg"/>
                            <span class="title-sub-tech">Cucumber</span>
                        </li>
                        <li class="clear"></li>
                    </ul>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Deployment</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle">
                            <fa-icon :icon="['fab','docker']" class="ico-circle text-info"/>
                            <span class="title-sub-tech">Docker</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/kubernets.svg"/>
                            <span class="title-sub-tech">Kubernetes</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/heroku.svg"/>
                            <span class="title-sub-tech">Heroku</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/cf.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">CloudFoundry</span>
                        </li>
                        <li class="clip img-circle">
                            <fa-icon :icon="['fab','aws']" class="ico-circle" style="color: #335061"/>
                            <span class="title-sub-tech">AWS</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/boxfuse.svg"/>
                            <span class="title-sub-tech">Boxfuse</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/rancher.svg" class="width"/>
                            <span class="title-sub-tech">Rancher</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/openshift.svg"/>
                            <span class="title-sub-tech">OpenShift</span>
                        </li>
                        <li class="clear"></li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">CI/CD</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle">
                            <fa-icon :icon="['fab','jenkins']" class="ico-circle" style="color: #335061"/>
                            <span class="title-sub-tech">Jenkins</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/travis.svg"/>
                            <span class="title-sub-tech">Travis CI</span>
                        </li>
                        <li class="clip img-circle">
                            <!--<img src="../../assets/images/third/gitlab.svg"/>-->
                            <fa-icon :icon="['fab','gitlab']" class="ico-circle" style="color: #e24329"/>
                            <span class="title-sub-tech">Gitlab CI</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/circleci.svg"/>
                            <span class="title-sub-tech">Circle CI</span>
                        </li>
                        <li class="clear"></li>
                    </ul>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: 'GrpHome',
        data() {
            return {
                npmDownloads: 10178 * 12,
                stars: 987 * 16,
                contributors: 3,
            };
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    $primary-color: #3E8ACC;
    $color-clear-blue: #91d5fb;
    $color-blue: #3E8ACC;
    $dark-blue: #09486b;

    /* Card */
    .card {
        background-color: #FFF;
        border-radius: 1px;
        overflow: hidden;
        position: relative;
        &.dark {
            background-color: #09486b;
            color: #FFF;
        }
        &.summary-inline {
            .card-body {
                padding: 20px;
                .content {
                    float: right;
                    .title {
                        padding: 5px 15px;
                        font-size: 3.5em;
                        text-align: right;
                    }
                    .sub-title {
                        font-size: 0.9em;
                        text-align: right;
                    }
                }
            }
        }
    }

    p {
        font-size: 20px;
        &.small {
            font-size: 16px;
        }
    }

    a {
        outline: 0;
        color: $primary-color;
        &:hover,
        &:focus,
        &:active,
        &.active {
            outline: 0;
            color: $primary-color;
        }
    }

    hr {
        &.star-light,
        &.star-primary {
            margin: 30px auto 30px;
            padding: 0;
            max-width: 250px;
            border: 0;
            border-top: solid 5px;
            text-align: center;
        }
        &.star-light {
            border-color: #fff;
            &:after {
                color: #fff;
                background-color: $primary-color;
            }
        }
        &.star-primary {
            border-color: #2c3e50;
            &:after {
                color: #2c3e50;
                background-color: #F9F9F9;
            }
        }
    }

    header {
        text-align: center;
        color: #fff;
        background: $primary-color;
        .card {
            .card-body {
                text-align: left;
            }
            &.summary-inline {
                .card-body {
                    padding: 10px;
                    .content {
                        .title {
                            font-size: 2em;
                        }
                    }
                }
            }
        }
        .container {
            padding-top: 100px;
            padding-bottom: 50px;
            .logo-big {
                outline: white;
                max-width: 360px;
                width: 100%;
                background: #fff;
                border-radius: 100%;
                max-height: 360px;
                height: 100%;
                padding: 15px;
                margin: 0 auto;
            }
            .brand {
                margin-bottom: 15px;
                font-size: 5em;
                font-family: 'Pacifico', cursive;
                text-transform: capitalize;
            }
            .stats {
                margin-top: 80px;
            }
        }
        img {
            display: block;
            margin: 0 auto 20px;
            max-width: 100%;
            height: auto;
        }
        .intro-text {
            .name {
                display: block;
                text-transform: uppercase;
                font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 2em;
                font-weight: 700;
            }
        }
    }

    @media (min-width: 768px) {
        header {
            .container {
                padding-top: 100px;
                padding-bottom: 50px;
            }
            .intro-text {
                .name {
                    font-size: 4.75em;
                }
            }
        }
    }

    section {
        padding: 100px 0;
        h2 {
            margin: 0;
            font-size: 3em;
        }
        .title {
            padding: 15px;
            width: 100%;
            .head-icons {
                margin: 0 0 20px;
                a {
                    display: inline-block;
                    vertical-align: top;
                }
                & img {
                    height: 80px;
                    width: 80px;
                }
            }
        }
        ul {
            font-size: 1.2em;
        }
    }

    @media (max-width: 767px) {
        section {
            padding: 75px 0;
            &.first {
                padding-top: 75px;
            }
        }
    }

    .stacks {
        margin: 0 auto;
        list-style: none;
        padding: 0 50px;
        max-width: 1200px;
        .clip {
            margin: 5px;
            width: 150px;
            height: 150px;
            background-color: white;
            border: 1px solid white;
            color: $dark-blue;
            float: left;
            text-align: center;
            &.img-circle {
                -webkit-border-radius: 500px;
                -moz-border-radius: 500px;
                border-radius: 500px;
                .ico-circle {
                    margin-top: 24px;
                    font-size: 4em;
                }
            }
            i {
                display: block;
                padding-top: 25px;
                font-size: 4.8em;
            }
            img {
                padding-top: 25px;
                display: block;
                margin: 0 auto;
                height: 100px;
                &.height {
                    height: 100px;
                    width: auto;
                }
                &.width {
                    height: auto;
                    width: 100px;
                    margin: 28px auto;
                }
                &.white {
                    -webkit-filter: grayscale(100%) brightness(1.5);
                    filter: grayscale(100%) brightness(1.5);
                }
                &.white-inv {
                    -webkit-filter: grayscale(100%) brightness(1.5) invert(100%);
                    filter: grayscale(100%) brightness(1.5) invert(100%);
                }
                &.invert {
                    -webkit-filter: invert(100%);
                    filter: invert(100%);
                }
                &.saturate {
                    -webkit-filter: saturate(3);
                    filter: saturate(3);
                }
                &.grayscale {
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);
                }
                &.brightness {
                    -webkit-filter: brightness(0.25);
                    filter: brightness(0.25);
                }
                &.contrast {
                    -webkit-filter: contrast(160%);
                    filter: contrast(160%);
                }
            }
            .title-sub-tech {
                margin-top: 5px;
                font-size: 13px;
                color: $dark-blue;
                display: block;
                text-align: center;
            }
            &:hover {
                background-color: $dark-blue;
                border: 1px solid $dark-blue;
                color: white;
                img {
                    -webkit-filter: grayscale(100%) brightness(1.5);
                    filter: grayscale(100%) brightness(1.5);
                    &.invert-hover {
                        -webkit-filter: invert(100%);
                        filter: invert(100%);
                    }
                    &.invert-hover-white {
                        -webkit-filter: grayscale(100%) brightness(1.5) invert(100%);
                        filter: grayscale(100%) brightness(1.5) invert(100%);
                    }
                }
                .title-sub-tech {
                    color: white;
                }
            }

        }
    }

    .text-body {
        font-size: 1.2em;
    }

    .stack-section {
        color: #fff;
        background: $primary-color;
    }

    .stack-container {
        margin: 0 0 50px 0;
    }

</style>
