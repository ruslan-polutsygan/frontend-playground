define(['src/test'], function(test){
    'use strict';

    var App = {};
    App.start = function (config) {

        console.log('started');
        console.log('name = ' + config.name);
    };

    console.log(test);

    return App;
});
