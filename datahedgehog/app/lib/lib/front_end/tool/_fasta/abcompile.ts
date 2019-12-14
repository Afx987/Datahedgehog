/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/_fasta/abcompile.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./standard_deviation";
import * as math from "@dart2ts/dart/math";
import * as convert from "@dart2ts/dart/convert";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    core.print(args);
    if (properties.bRootPath == null) {
        core.print('Expected -DbRoot=/absolute/path/to/other/sdk/repo');
        io.exit(1);
    }
    let aRoot : lib4.Uri = io.Platform.script.resolve('../../../..');
    let bRoot : lib4.Uri = new lib4.Uri.directory(properties.bRootPath);
    let relPath : string = 'pkg/front_end/tool/_fasta/compile.dart';
    let aCompile : lib4.Uri = aRoot.resolve(relPath);
    if (!new io.File(aCompile.toFilePath()).existsSync()) {
        core.print(`Failed to find ${aCompile}`);
        io.exit(1);
    }
    let bCompile : lib4.Uri = bRoot.resolve(relPath);
    if (!new io.File(bCompile.toFilePath()).existsSync()) {
        core.print(`Failed to find ${bCompile}`);
        io.exit(1);
    }
    core.print('Comparing:');
    core.print(`A: ${aCompile}`);
    core.print(`B: ${bCompile}`);
    core.print('');
    let aCold : core.DartList<double> = new core.DartList.literal<double>();
    let aWarm : core.DartList<double> = new core.DartList.literal<double>();
    let bCold : core.DartList<double> = new core.DartList.literal<double>();
    let bWarm : core.DartList<double> = new core.DartList.literal<double>();
    let stopwatch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    for(let count : number = 0; count < properties.abIterations; ++count){
        core.print(`A/B iteration ${count + 1} of ${properties.abIterations} ...`);
        await run(aRoot,aCompile,args,aCold,aWarm);
        await run(bRoot,bCompile,args,bCold,bWarm);
    }
    stopwatch.stop();
    core.print(`Overall run time: ${stopwatch.elapsed.inMinutes} minutes`);
    core.print('');
    core.print('Raw data:');
    core.print('A cold, A warm, B cold, B warm');
    for(let index : number = 0; index < aCold.length; ++index){
        core.print(`${aCold[index]}, ${aWarm[index]}, ${bCold[index]}, ${bWarm[index]}`);
    }
    if (aWarm.length < 1) {
        return;
    }
    let aColdMean : double = lib5.average(aCold);
    let aWarmMean : double = lib5.average(aWarm);
    let bColdMean : double = lib5.average(bCold);
    let bWarmMean : double = lib5.average(bWarm);
    core.print('');
    core.print('Average:');
    core.print(`${aColdMean}, ${aWarmMean}, ${bColdMean}, ${bWarmMean}`);
    if (aWarm.length < 2) {
        return;
    }
    let aColdStdDev : double = lib5.standardDeviation(aColdMean,aCold);
    let aWarmStdDev : double = lib5.standardDeviation(aWarmMean,aWarm);
    let bColdStdDev : double = lib5.standardDeviation(bColdMean,bCold);
    let bWarmStdDev : double = lib5.standardDeviation(bWarmMean,bWarm);
    let aColdSDM : double = lib5.standardDeviationOfTheMean(aCold,aColdStdDev);
    let aWarmSDM : double = lib5.standardDeviationOfTheMean(aWarm,aWarmStdDev);
    let bColdSDM : double = lib5.standardDeviationOfTheMean(bCold,bColdStdDev);
    let bWarmSDM : double = lib5.standardDeviationOfTheMean(bWarm,bWarmStdDev);
    core.print('');
    core.print('Uncertainty:');
    core.print(`${aColdSDM}, ${aWarmSDM}, ${bColdSDM}, ${bWarmSDM}`);
    let coldDelta : double = aColdMean - bColdMean;
    let coldUncertainty : double = math.sqrt(math.pow(aColdSDM,2) + math.pow(bColdSDM,2));
    let warmDelta : double = aWarmMean - bWarmMean;
    let warmUncertainty : double = math.sqrt(math.pow(aWarmSDM,2) + math.pow(bWarmSDM,2));
    let coldDeltaPercent : double = new core.DartDouble((coldDelta / bColdMean * 1000)).round() / 10;
    let coldUncertaintyPercent : double = new core.DartDouble((coldUncertainty / bColdMean * 1000)).round() / 10;
    let warmDeltaPercent : double = new core.DartDouble((warmDelta / bWarmMean * 1000)).round() / 10;
    let warmUncertaintyPercent : double = new core.DartDouble((warmUncertainty / bWarmMean * 1000)).round() / 10;
    let coldBest : double = coldDelta - 3 * coldUncertainty;
    let coldBestPercent : double = coldDeltaPercent - 3 * coldUncertaintyPercent;
    let coldWorst : double = coldDelta + 3 * coldUncertainty;
    let coldWorstPercent : double = coldDeltaPercent + 3 * coldUncertaintyPercent;
    let warmBest : double = warmDelta - 3 * warmUncertainty;
    let warmBestPercent : double = warmDeltaPercent - 3 * warmUncertaintyPercent;
    let warmWorst : double = warmDelta + 3 * warmUncertainty;
    let warmWorstPercent : double = warmDeltaPercent + 3 * warmUncertaintyPercent;
    core.print('');
    core.print('Summary:');
    core.print(`${coldDelta}, ${coldDeltaPercent}%, A cold start - B cold start`);
    core.print(`${coldUncertainty}, ${coldUncertaintyPercent}%, Propagated uncertainty`);
    core.print(`${coldBest}, ${coldBestPercent}%, 99.9% best case`);
    core.print(`${coldWorst}, ${coldWorstPercent}%, 99.9% worst case`);
    core.print('');
    core.print(`${warmDelta}, ${warmDeltaPercent}%, A warm runs - B warm runs`);
    core.print(`${warmUncertainty}, ${warmUncertaintyPercent}%, Propagated uncertainty`);
    core.print(`${warmBest}, ${warmBestPercent}%, 99.9% best case`);
    core.print(`${warmWorst}, ${warmWorstPercent}%, 99.9% worst case`);
})());
export var run : (workingDir : lib4.Uri,dartApp : lib4.Uri,args : core.DartList<string>,cold : core.DartList<double>,warm : core.DartList<double>) => async.Future<core.Null> = (workingDir : lib4.Uri,dartApp : lib4.Uri,args : core.DartList<string>,cold : core.DartList<double>,warm : core.DartList<double>) => new async.Future.fromPromise(( async () : Promise<core.Null> =>  {
    core.print(`Running ${dartApp}`);
    var processLine : (line : string) => void = (line : string) : void =>  {
        if (new core.DartString(line).startsWith(properties._iterationTag)) {
            ((_) : io.Stdout =>  {
                {
                    _.write('.');
                    _.flush();
                    return _;
                }
            })(io.properties.stdout);
            return;
        }
        if (new core.DartString(line).startsWith(properties._summaryTag)) {
            let json : string = new core.DartString(line).substring(new core.DartString(properties._summaryTag).length - 2);
            let results : core.DartMap<string,any> = convert.properties.JSON.decode(json);
            let elapsedTimes : core.DartList<double> = results.get('elapsedTimes');
            core.print(`\nElapse times: ${elapsedTimes}`);
            if (elapsedTimes.length > 0) {
                cold.add(elapsedTimes[0]);
            }
            if (elapsedTimes.length > 4) {
                warm.add(lib5.average(elapsedTimes.sublist(3)));
            }
            return;
        }
    };
    let workingDirPath : string = workingDir.toFilePath();
    let procArgs : core.DartList<string> = new core.DartList.literal<string>(`-Diterations=${properties.iterations}`,'-Dsummary=true',dartApp.toFilePath());
    procArgs.addAll(args);
    let process : io.Process = await io.Process.start(io.Platform.executable,procArgs,{
        workingDirectory : workingDirPath});
    io.properties.stderr.addStream(process.stderr);
    let stdOutSubscription : async.DartStreamSubscription<string>;
    stdOutSubscription = process.stdout.transform(convert.properties.UTF8.decoder).transform(new convert.LineSplitter()).listen(processLine,{
        onDone : () =>  {
            stdOutSubscription.cancel();
        },onError : (e : any) =>  {
            core.print(`Error: ${e}`);
            stdOutSubscription.cancel();
        }});
    let code : number = await process.exitCode;
    if (code != 0) {
        throw `fail: ${code}`;
    }
    core.print('');
})());
export class properties {
    private static __$bRootPath : string;
    static get bRootPath() : string { 
        if (this.__$bRootPath===undefined) {
            this.__$bRootPath = new core.DartString.fromEnvironment("bRoot").valueOf();
        }
        return this.__$bRootPath;
    }
    static set bRootPath(__$value : string)  { 
        this.__$bRootPath = __$value;
    }

    private static __$abIterations : number;
    static get abIterations() : number { 
        if (this.__$abIterations===undefined) {
            this.__$abIterations = new core.DartInt.fromEnvironment("abIterations",{
                defaultValue : 15}).valueOf();
        }
        return this.__$abIterations;
    }
    static set abIterations(__$value : number)  { 
        this.__$abIterations = __$value;
    }

    private static __$iterations : number;
    static get iterations() : number { 
        if (this.__$iterations===undefined) {
            this.__$iterations = new core.DartInt.fromEnvironment("iterations",{
                defaultValue : 15}).valueOf();
        }
        return this.__$iterations;
    }
    static set iterations(__$value : number)  { 
        this.__$iterations = __$value;
    }

    private static __$_iterationTag : string;
    static get _iterationTag() : string { 
        if (this.__$_iterationTag===undefined) {
            this.__$_iterationTag = '=== Iteration ';
        }
        return this.__$_iterationTag;
    }
    static set _iterationTag(__$value : string)  { 
        this.__$_iterationTag = __$value;
    }

    private static __$_summaryTag : string;
    static get _summaryTag() : string { 
        if (this.__$_summaryTag===undefined) {
            this.__$_summaryTag = 'Summary: {"';
        }
        return this.__$_summaryTag;
    }
    static set _summaryTag(__$value : string)  { 
        this.__$_summaryTag = __$value;
    }

}
