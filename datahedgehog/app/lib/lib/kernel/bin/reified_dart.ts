/** Library asset:datahedgehog_monitor/lib/lib/kernel/bin/reified_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts/dart/uri";

export var getUsage : () => string = () : string =>  {
    return `Usage: reified_dart [options] FILE\n\nReifies generic types in FILE and runs the transformed program.\n\nExamples:\n    reified_dart foo.dart\n    reified_dart --sdk=/path/to/sdk foo.dart\n    reified_dart --sdk=/path/to/sdk --dartk=/path/to/dartk foo.dart\n\nOptions:\n${properties.parser.usage}\n`;
};
export var fail : (message : string) => void = (message : string) : void =>  {
    io.properties.stderr.writeln(message);
    io.exit(1);
};
export var checkIsDirectory : (path : string,_namedArguments? : {option? : string,description? : string}) => void = (path : string,_namedArguments? : {option? : string,description? : string}) : void =>  {
    let {option,description} = Object.assign({
    }, _namedArguments );
    description = (description == null ? "" : `${description}\n`);
    switch (new io.File(path).statSync().type) {
        case io.FileSystemEntityType.DIRECTORY:
        case io.FileSystemEntityType.LINK:
            return;
        case io.FileSystemEntityType.NOT_FOUND:
            throw fail(`${description}${option} not found: ${path}`);
        default:
            fail(`${description}${option} is not a directory: ${path}`);
    }
};
export var checkIsFile : (path : string,_namedArguments? : {option? : string,description? : string}) => void = (path : string,_namedArguments? : {option? : string,description? : string}) : void =>  {
    let {option,description} = Object.assign({
    }, _namedArguments );
    description = (description == null ? "" : `${description}\n`);
    let stat = new io.File(path).statSync();
    switch (stat.type) {
        case io.FileSystemEntityType.DIRECTORY:
            throw fail(`${description}${option} is a directory: ${path}`);
        case io.FileSystemEntityType.NOT_FOUND:
            throw fail(`${description}${option} not found: ${path}`);
    }
};
export var getDefaultSdk : () => string = () : string =>  {
    let currentFile : string = io.Platform.script.toFilePath();
    let relativePath : string = "../../../out/ReleaseX64/patched_sdk";
    let components : core.DartList<string> = new core.DartString(relativePath).split("/");
    relativePath = "";
    for(let component of components) {
        relativePath = lib4.join(relativePath,component);
    }
    let currentDir : string = lib4.dirname(currentFile);
    let sdkPath : string = lib4.normalize(lib4.join(currentDir,relativePath));
    checkIsDirectory(sdkPath,{
        option : "Path to Dart SDK",description : "The --sdk option wasn't specified, " + "so default location was checked."});
    return sdkPath;
};
export var getDefaultDartk : () => string = () : string =>  {
    let currentFile : string = io.Platform.script.toFilePath();
    let dartkPath : string = lib4.join(lib4.dirname(currentFile),"../tool/dartk.dart");
    checkIsFile(dartkPath,{
        option : "Path to 'dartk'",description : "The --dartk option wasn't specified, " + "so default location was checked."});
    return dartkPath;
};
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (arguments.length == 0) {
        fail(getUsage());
    }
    try {
        properties.options = properties.parser.parse(arguments);
    } catch (__error__) {

        if (is(__error__,core.FormatException)){
            let e : core.FormatException = __error__;
            fail(e.message);
        }
    }
    if (properties.options.rest.length != 1) {
        fail("Exactly one FILE should be given.");
    }
    let inputFilename : string = properties.options.rest.single;
    checkIsFile(inputFilename,{
        option : "Input file"});
    let sdkPath : string = (op(Op.INDEX,properties.options,"sdk") || getDefaultSdk());
    checkIsDirectory(sdkPath,{
        option : "Path to Dart SDK"});
    let dartkPath : string = (op(Op.INDEX,properties.options,"dartk") || getDefaultDartk());
    checkIsFile(dartkPath,{
        option : "Path to 'dartk'"});
    let dillOutput : string = op(Op.INDEX,properties.options,"dill-output");
    let tempFile : io.File = null;
    if (dillOutput == null) {
        let tmp : io.Directory = await io.Directory.systemTemp.createTemp();
        let uri : lib5.Uri = tmp.uri.resolve("generated.dill");
        dillOutput = uri.toFilePath();
        tempFile = new io.File.fromUri(uri);
    }
    let result : io.ProcessResult = await io.Process.run(dartkPath,new core.DartList.literal("--strong",`--sdk=${sdkPath}`,"--target=vmreify","--link",`--out=${dillOutput}`,inputFilename));
    if (result.exitCode != 0) {
        ((_574_)=>(!!_574_)?_574_.delete({
            recursive : true}):null)(((t)=>(!!t)?t.parent:null)(tempFile));
        io.properties.stdout.write(result.stdout);
        io.properties.stderr.write(result.stderr);
        io.properties.stderr.writeln("ERROR: execution of 'dartk' failed with exit code " + `${result.exitCode}`);
        io.exit(result.exitCode);
    }
    result = await io.Process.run("/usr/bin/env",new core.DartList.literal("dart",dillOutput,inputFilename));
    io.properties.stdout.write(result.stdout);
    io.properties.stderr.write(result.stderr);
    ((_575_)=>(!!_575_)?_575_.delete({
        recursive : true}):null)(((t)=>(!!t)?t.parent:null)(tempFile));
    if (result.exitCode != 0) {
        io.properties.stderr.writeln("ERROR: execution of 'dart' failed with exit code " + `${result.exitCode}`);
        io.exit(result.exitCode);
    }
})());
export class properties {
    private static __$parser : any;
    static get parser() : any { 
        if (this.__$parser===undefined) {
            this.__$parser = ((_) : any =>  {
                {
                    addOption("sdk",{
                        abbr : "s",help : "Path to the Dart SDK. By default it will be searched at the path\n" + "'../../../out/ReleaseX64/patched_sdk' relative to the directory\n" + "of 'reified_dart'.",defaultsTo : null});
                    addOption("dartk",{
                        abbr : "k",help : "Path to 'dartk' executable. By default it will be searched for\n" + "in the tool directory of the kernel package.",defaultsTo : null});
                    addOption("dill-output",{
                        abbr : "d",help : "Path to intermediate reified .dill file. If not specified,\n" + "the intermediate file is created in a temporary location\n" + "and is removed after program execution.",defaultsTo : null});
                    return _;
                }
            })(new bare.createInstance(any,null,{
                allowTrailingOptions : true}));
        }
        return this.__$parser;
    }
    static set parser(__$value : any)  { 
        this.__$parser = __$value;
    }

    private static __$options : any;
    static get options() : any { 
        return this.__$options;
    }
    static set options(__$value : any)  { 
        this.__$options = __$value;
    }

}
