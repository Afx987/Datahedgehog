/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/local_runner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "./main";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length < 3) printHelp('Expected 3 arguments');
    let gitDir = new io.Directory(args[0]);
    if (!gitDir.existsSync()) printHelp(`${gitDir.path} does not exist`);
    if (!new io.Directory(lib4.join(gitDir.path,'.git')).existsSync()) printHelp(`${gitDir.path} does not appear to be a local git repository`);
    let branch = args[1];
    let inputFile = new io.File(args[2]);
    if (!inputFile.existsSync()) printHelp(`${inputFile.path} does not exist`);
    let tmpDir = new io.Directory(lib4.join(io.Directory.systemTemp.path,'analysis_server_perf_target'));
    if (!new core.DartString(tmpDir.path).contains('tmp')) throw `invalid tmp directory\n  ${tmpDir}`;
    core.print(`Extracting target analysis environment into\n  ${tmpDir.path}`);
    if (tmpDir.existsSync()) tmpDir.deleteSync({
        recursive : true});
    tmpDir.createSync({
        recursive : true});
    let tarFilePath = lib4.join(tmpDir.path,'targetSrc.tar');
    let result = io.Process.runSync('git',new core.DartList.literal('archive',branch,'-o',tarFilePath),{
        workingDirectory : gitDir.path});
    if (result.exitCode != 0) throw `failed to obtain target source: ${result}`;
    let tmpSrcDirPath = lib4.join(tmpDir.path,'targetSrc');
    new io.Directory(tmpSrcDirPath).createSync();
    result = io.Process.runSync('tar',new core.DartList.literal('-xf',tarFilePath),{
        workingDirectory : tmpSrcDirPath});
    if (result.exitCode != 0) throw `failed to extract target source: ${result}`;
    let outDirName = 'out';
    if (!new io.Directory(lib4.join(gitDir.path,outDirName)).existsSync()) {
        outDirName = 'xcodebuild';
    }
    if (!new io.Directory(lib4.join(gitDir.path,outDirName)).existsSync()) {
        throw 'failed to find out or xcodebuild directory';
    }
    result = io.Process.runSync('ln',new core.DartList.literal('-s',lib4.join(gitDir.path,outDirName),lib4.join(tmpSrcDirPath,outDirName)));
    if (result.exitCode != 0) throw `failed to link out or xcodebuild: ${result}`;
    let perfArgs = new core.DartList.literal(`-i${inputFile.path}`,`-t${tmpSrcDirPath}`);
    for(let index : number = 3; index < args.length; ++index){
        perfArgs.add(new core.DartString(args[index]).replaceAll('@tmpSrcDir@',tmpSrcDirPath));
    }
    perfArgs.add(`-m${gitDir.path},${tmpSrcDirPath}`);
    lib5.main(perfArgs);
};
export var printHelp : (errMsg? : string) => void = (errMsg? : string) : void =>  {
    if (errMsg != null) {
        core.print('');
        core.print(`Error: ${errMsg}`);
        core.print('');
    }
    core.print('Required arguments: <gitDir> <branch> <inputFile>\ngitDir = a path to the git repository containing the initial target source\nbranch = the branch containing the initial target source\ninputFile = the instrumentation or log file\n\nOptional arguments:');
    core.print(lib5.properties.argParser.usage);
    io.exit(1);
};
export class properties {
}
