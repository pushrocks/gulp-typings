/// <reference path="./typings/index.d.ts" />
import * as plugins from "./gulp-typings.plugins"

let forEach = function(file,enc,cb){
    plugins.typingsCore.install({production: false, cwd: plugins.path.dirname(file.path)})
        .then(function(){
            cb(null,file);
        },function(){
            console.error("something went wrong: Check if path is correct: " + file.path);
            cb(null,file);
        });
};

let atEnd = function(cb){
    cb();
};

export = function(optionsArg?) {
    return plugins.through2.obj(forEach,atEnd);
};
