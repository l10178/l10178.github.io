# grapes-skins
This is the source of [grapes][] frontend.


## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.


Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    yarn start

[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.


## Building for production

To optimize the grapes application for production, run:

    ./mvnw -Pprod clean package
    
 or skip test
 
    ./mvnw -Pprod clean package -Dmaven.test.skip=true

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## swagger-ui

Active maven `swagger` profile and then navigate to [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) in your browser 

## Testing

To launch your application's tests, run:

    ./mvnw clean test

### Client tests

Unit tests can be run with:

    yarn test


## Webpack Bundle Analyzer

To analyz your application's JavaScript packages:

    yarn analyz
  
Webpack Bundle Analyzer will start at http://127.0.0.1:8888


## Style Guide

* Please read the [vue.js official style guide][] for Vue-specific code.
* add the prefix `grp`.


## Vue.js route lazy load

In the route.js, import `component` as blow:

```javascript 1.8
    {
        path: '/user',
        name: 'user',
        component: () => import(
            /* webpackChunkName: 'user' */
            '@/components/admin/user/user'
            )
    }
```

Learn more about webpack's `import`, please see [webpack document](https://webpack.js.org/api/module-methods/#import-).


## License

Licensed under [MIT][]. Copyright (c) 2018 [l10178][]

[grapes]: https://github.com/l10178/grapes
[vue.js official style guide]: https://cn.vuejs.org/v2/style-guide/index.html
[MIT]: https://opensource.org/licenses/MIT
[l10178]: http://nxest.com/
[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
