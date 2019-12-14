/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/benchmark_scenario.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./performance_tests";
import * as lib5 from "./../../test/integration/support/integration_tests";
import * as io from "@dart2ts/dart/io";

export var printBenchmarkResults : (id : string,description : string,times : core.DartList<number>) => void = (id : string,description : string,times : core.DartList<number>) : void =>  {
    let minTime : number = times.fold(1 << 20,math.min);
    let now : string = new core.DartDateTime.now().toUtc().toIso8601String();
    core.print(`${now} ========== ${id}`);
    core.print(`times: ${times}`);
    core.print(`min_time: ${minTime}`);
    core.print(new core.DartString(description).trim());
    core.print('--------------------');
    core.print('');
    core.print('');
};
export namespace BenchmarkScenario {
    export type Constructors = lib4.AbstractTimingTest.Constructors | 'BenchmarkScenario';
    export type Interface = Omit<BenchmarkScenario, Constructors>;
}
@DartClass
export class BenchmarkScenario extends lib4.AbstractTimingTest {
    waitAnalyze_change_analyze(_namedArguments? : {roots? : core.DartList<string>,file? : string,fileChange? : FileChange,numOfRepeats? : number}) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {roots,file,fileChange,numOfRepeats} = Object.assign({
            }, _namedArguments );
            lib5.outOfTestExpect(roots,isNotNull,{
                reason : 'roots'});
            lib5.outOfTestExpect(file,isNotNull,{
                reason : 'file'});
            lib5.outOfTestExpect(fileChange,isNotNull,{
                reason : 'fileChange'});
            lib5.outOfTestExpect(numOfRepeats,isNotNull,{
                reason : 'numOfRepeats'});
            await super.setUp();
            await this.subscribeToStatusNotifications();
            await this.sendAnalysisSetAnalysisRoots(roots,new core.DartList.literal());
            await this.analysisFinished;
            await this.sendAnalysisSetPriorityFiles(new core.DartList.literal(file));
            let times : core.DartList<number> = new core.DartList.literal<number>();
            for(let i : number = 0; i < numOfRepeats; i++){
                let stopwatch : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
                    {
                        _.start();
                        return _;
                    }
                })(new core.DartStopwatch());
                await this._applyFileChange(file,fileChange);
                await this.analysisFinished;
                times.add(stopwatch.elapsed.inMilliseconds);
                await this.sendAnalysisUpdateContent(new core.DartMap.literal([
                    [file,new bare.createInstance(any,null)]]));
                await this.analysisFinished;
            }
            await this.shutdown();
            return times;
        } )());
    }

    waitAnalyze_change_getCompletion(_namedArguments? : {roots? : core.DartList<string>,file? : string,fileChange? : FileChange,completeAfterStr? : string,numOfRepeats? : number}) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {roots,file,fileChange,completeAfterStr,numOfRepeats} = Object.assign({
            }, _namedArguments );
            lib5.outOfTestExpect(roots,isNotNull,{
                reason : 'roots'});
            lib5.outOfTestExpect(file,isNotNull,{
                reason : 'file'});
            lib5.outOfTestExpect(fileChange,isNotNull,{
                reason : 'fileChange'});
            lib5.outOfTestExpect(completeAfterStr,isNotNull,{
                reason : 'completeAfterStr'});
            lib5.outOfTestExpect(numOfRepeats,isNotNull,{
                reason : 'numOfRepeats'});
            await super.setUp();
            await this.subscribeToStatusNotifications();
            await this.sendAnalysisSetAnalysisRoots(roots,new core.DartList.literal());
            await this.analysisFinished;
            await this.sendAnalysisSetPriorityFiles(new core.DartList.literal(file));
            let times : core.DartList<number> = new core.DartList.literal<number>();
            for(let i : number = 0; i < numOfRepeats; i++){
                let updatedContent : string = await this._applyFileChange(file,fileChange);
                let completionOffset : number = BenchmarkScenario._indexOfEnd(file,updatedContent,completeAfterStr);
                let completionDuration : core.DartDuration = await this._measureCompletionTime(file,completionOffset);
                times.add(completionDuration.inMilliseconds);
                await this.sendAnalysisUpdateContent(new core.DartMap.literal([
                    [file,new bare.createInstance(any,null)]]));
                await this.analysisFinished;
            }
            await this.shutdown();
            return times;
        } )());
    }

    waitAnalyze_change_getRefactoring(_namedArguments? : {roots? : core.DartList<string>,file? : string,fileChange? : FileChange,refactoringAtStr? : string,refactoringKind? : any,refactoringOptions? : any,numOfRepeats? : number}) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {roots,file,fileChange,refactoringAtStr,refactoringKind,refactoringOptions,numOfRepeats} = Object.assign({
            }, _namedArguments );
            lib5.outOfTestExpect(roots,isNotNull,{
                reason : 'roots'});
            lib5.outOfTestExpect(file,isNotNull,{
                reason : 'file'});
            lib5.outOfTestExpect(fileChange,isNotNull,{
                reason : 'fileChange'});
            lib5.outOfTestExpect(refactoringAtStr,isNotNull,{
                reason : 'refactoringAtStr'});
            lib5.outOfTestExpect(refactoringKind,isNotNull,{
                reason : 'refactoringKind'});
            lib5.outOfTestExpect(refactoringOptions,isNotNull,{
                reason : 'refactoringOptions'});
            lib5.outOfTestExpect(numOfRepeats,isNotNull,{
                reason : 'numOfRepeats'});
            await super.setUp();
            await this.subscribeToStatusNotifications();
            await this.sendAnalysisSetAnalysisRoots(roots,new core.DartList.literal());
            await this.analysisFinished;
            await this.sendAnalysisSetPriorityFiles(new core.DartList.literal(file));
            let times : core.DartList<number> = new core.DartList.literal<number>();
            for(let i : number = 0; i < numOfRepeats; i++){
                let updatedContent : string = await this._applyFileChange(file,fileChange);
                let refactoringOffset : number = BenchmarkScenario._indexOf(file,updatedContent,refactoringAtStr);
                let refactoringDuration : core.DartDuration = await this._measureRefactoringTime(file,refactoringOffset,refactoringKind,refactoringOptions);
                times.add(refactoringDuration.inMilliseconds);
                await this.sendAnalysisUpdateContent(new core.DartMap.literal([
                    [file,new bare.createInstance(any,null)]]));
                await this.analysisFinished;
            }
            await this.shutdown();
            return times;
        } )());
    }

    _applyFileChange(file : string,desc : FileChange) : async.Future<string> { 
        return new async.Future.fromPromise(( async () =>  {
            let originalContent : string = BenchmarkScenario._getFileContent(file);
            let updatedContent : string;
            if (desc.afterStr != null) {
                let offset : number = BenchmarkScenario._indexOfEnd(file,originalContent,desc.afterStr);
                offset -= desc.afterStrBack;
                updatedContent = new core.DartString(originalContent).substring(0,offset) + desc.insertStr + new core.DartString(originalContent).substring(offset);
            }else if (desc.replaceWhat != null) {
                let offset : number = BenchmarkScenario._indexOf(file,originalContent,desc.replaceWhat);
                updatedContent = new core.DartString(originalContent).substring(0,offset) + desc.replaceWith + new core.DartString(originalContent).substring(offset + new core.DartString(desc.replaceWhat).length);
            }
            await this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [file,new bare.createInstance(any,null,updatedContent)]]));
            return updatedContent;
        } )());
    }

    _measureCompletionTime(file : string,offset : number) : async.Future<core.DartDuration> { 
        return new async.Future.fromPromise(( async () =>  {
            let stopwatch : core.DartStopwatch = new core.DartStopwatch();
            stopwatch.start();
            let completer : async.DartCompleter<core.DartDuration> = new async.DartCompleter<core.DartDuration>();
            let completionSubscription = this.onCompletionResults.listen((_ : any) =>  {
                completer.complete(stopwatch.elapsed);
            });
            try {
                await this.sendCompletionGetSuggestions(file,offset);
                return await completer.future;
            } finally {
                completionSubscription.cancel();
            }
        } )());
    }

    _measureRefactoringTime(file : string,offset : number,refactoringKind : any,refactoringOptions : any) : async.Future<core.DartDuration> { 
        return new async.Future.fromPromise(( async () =>  {
            let stopwatch : core.DartStopwatch = new core.DartStopwatch();
            stopwatch.start();
            await this.sendEditGetRefactoring(refactoringKind,file,offset,0,false,{
                options : refactoringOptions});
            return stopwatch.elapsed;
        } )());
    }

    static start_waitInitialAnalysis_shutdown(_namedArguments? : {roots? : core.DartList<string>,numOfRepeats? : number}) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {roots,numOfRepeats} = Object.assign({
            }, _namedArguments );
            lib5.outOfTestExpect(roots,isNotNull,{
                reason : 'roots'});
            lib5.outOfTestExpect(numOfRepeats,isNotNull,{
                reason : 'numOfRepeats'});
            let times : core.DartList<number> = new core.DartList.literal<number>();
            for(let i : number = 0; i < numOfRepeats; i++){
                let instance : BenchmarkScenario = new BenchmarkScenario();
                await instance.setUp();
                await instance.subscribeToStatusNotifications();
                let stopwatch : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
                    {
                        _.start();
                        return _;
                    }
                })(new core.DartStopwatch());
                await instance.sendAnalysisSetAnalysisRoots(roots,new core.DartList.literal());
                await instance.analysisFinished;
                times.add(stopwatch.elapsed.inMilliseconds);
                await instance.shutdown();
            }
            return times;
        } )());
    }

    static _getFileContent(path : string) : string {
        let file : io.File = new io.File(path);
        lib5.outOfTestExpect(file.existsSync(),isTrue,{
            reason : `File ${path} does not exist.`});
        return file.readAsStringSync();
    }
    static _indexOf(file : string,where : string,what : string) : number {
        let index : number = new core.DartString(where).indexOf(what);
        lib5.outOfTestExpect(index,isNot(-1),{
            reason : `Cannot find |${what}| in ${file}.`});
        return index;
    }
    static _indexOfEnd(file : string,where : string,what : string) : number {
        return BenchmarkScenario._indexOf(file,where,what) + new core.DartString(what).length;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BenchmarkScenario() {
    }
}

export namespace FileChange {
    export type Constructors = 'FileChange';
    export type Interface = Omit<FileChange, Constructors>;
}
@DartClass
export class FileChange {
    afterStr : string;

    afterStrBack : number;

    insertStr : string;

    replaceWhat : string;

    replaceWith : string;

    constructor(_namedArguments? : {afterStr? : string,afterStrBack? : number,insertStr? : string,replaceWhat? : string,replaceWith? : string}) {
    }
    @defaultConstructor
    FileChange(_namedArguments? : {afterStr? : string,afterStrBack? : number,insertStr? : string,replaceWhat? : string,replaceWith? : string}) {
        let {afterStr,afterStrBack,insertStr,replaceWhat,replaceWith} = Object.assign({
            "afterStrBack" : 0}, _namedArguments );
        this.afterStr = afterStr;
        this.afterStrBack = afterStrBack;
        this.insertStr = insertStr;
        this.replaceWhat = replaceWhat;
        this.replaceWith = replaceWith;
        if (this.afterStr != null) {
            lib5.outOfTestExpect(this.insertStr,isNotNull,{
                reason : 'insertStr'});
        }else if (this.replaceWhat != null) {
            lib5.outOfTestExpect(this.replaceWith,isNotNull,{
                reason : 'replaceWith'});
        }
    }
}

export class properties {
}
