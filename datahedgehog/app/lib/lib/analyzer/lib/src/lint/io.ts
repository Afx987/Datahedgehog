/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var collectFiles : (path : string) => core.DartIterable<io.File> = (path : string) : core.DartIterable<io.File> =>  {
    let files : core.DartList<io.File> = new core.DartList.literal();
    let file = new io.File(path);
    if (file.existsSync()) {
        files.add(file);
    }else {
        let directory = new io.Directory(path);
        if (directory.existsSync()) {
            for(let entry of directory.listSync({
                recursive : true,followLinks : false})) {
                let relative = lib4.relative(entry.path,{
                    from : directory.path});
                if (isLintable(entry) && !isInHiddenDir(relative)) {
                    files.add(entry);
                }
            }
        }
    }
    return files;
};
export var isDartFile : (entry : io.FileSystemEntity) => boolean = (entry : io.FileSystemEntity) : boolean =>  {
    return isDartFileName(entry.path);
};
export var isInHiddenDir : (relative : string) => boolean = (relative : string) : boolean =>  {
    return lib4.split(relative).any((part : any) =>  {
        return new core.DartString(part).startsWith(".");
    });
};
export var isLintable : (file : io.FileSystemEntity) => boolean = (file : io.FileSystemEntity) : boolean =>  {
    return is(file, io.File) && (isDartFile(file) || isPubspecFile(file));
};
export var isPubspecFile : (entry : io.FileSystemEntity) => boolean = (entry : io.FileSystemEntity) : boolean =>  {
    return isPubspecFileName(lib4.basename(entry.path));
};
export var readFile : (path : string) => string = (path : string) : string =>  {
    return new io.File(path).readAsStringSync();
};
export class properties {
    private static __$dartMatcher;
    static get dartMatcher() { 
        if (this.__$dartMatcher===undefined) {
            this.__$dartMatcher = new bare.createInstance(any,null,'**.dart');
        }
        return this.__$dartMatcher;
    }
    static set dartMatcher(__$value : any)  { 
        this.__$dartMatcher = __$value;
    }

    private static __$errorSink : io.IOSink;
    static get errorSink() : io.IOSink { 
        if (this.__$errorSink===undefined) {
            this.__$errorSink = io.properties.stderr;
        }
        return this.__$errorSink;
    }
    static set errorSink(__$value : io.IOSink)  { 
        this.__$errorSink = __$value;
    }

    private static __$outSink : io.IOSink;
    static get outSink() : io.IOSink { 
        if (this.__$outSink===undefined) {
            this.__$outSink = io.properties.stdout;
        }
        return this.__$outSink;
    }
    static set outSink(__$value : io.IOSink)  { 
        this.__$outSink = __$value;
    }

    private static __$_projectPackageName : string;
    static get _projectPackageName() : string { 
        return this.__$_projectPackageName;
    }
    static set _projectPackageName(__$value : string)  { 
        this.__$_projectPackageName = __$value;
    }

    private static __$_projectRoot : string;
    static get _projectRoot() : string { 
        return this.__$_projectRoot;
    }
    static set _projectRoot(__$value : string)  { 
        this.__$_projectRoot = __$value;
    }

}
