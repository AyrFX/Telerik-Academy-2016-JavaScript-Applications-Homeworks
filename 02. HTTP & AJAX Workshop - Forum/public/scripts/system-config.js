SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': './bower_components/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './bower_components/systemjs-plugin-babel/systemjs-babel-browser.js',
        // app start script
        'main': './scripts/main.js',
        'data': './scripts/data.js',
        'router': './scripts/router.js',
        'templatesLoader': './scripts/templates-loader.js'
    }
});
