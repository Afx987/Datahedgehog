/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/benchmark_angular.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./benchmark_scenario";
import * as lib4 from "./memory_tests";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let length : number = args.length;
    if (length < 1) {
        core.print('Usage: dart benchmark_local.dart path_to_np8080 (an example ngdart project)' + ' [benchmark_id]');
        return;
    }
    properties.paths = new PathHolder({
        projectPath : args[0]});
    let id : string = args.length >= 2 ? args[1] : null;
    if (id == null) {
        for(let id of properties.benchmarks.keys) {
            let benchmark : (id : string) => any = properties.benchmarks.get(id);
            await benchmark(id);
        }
    }else {
        let benchmark : (id : string) => any = properties.benchmarks.get(id);
        if (benchmark != null) {
            benchmark(id);
        }
    }
})());
export var run_ng_change_dart : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Open \'packages/np8080\'.\n2. Add an @Output to the class\n3. Measure the time to finish analysis.\n4. Rollback changes to the file and wait for analysis.\n5. Go to (2).\n';
    let times : core.DartList<number> = await new lib3.BenchmarkScenario().waitAnalyze_change_analyze({
        roots : new core.DartList.literal(properties.paths.packageNp8080),file : properties.paths.editorDart,fileChange : new lib3.FileChange({
            afterStr : 'showPreview = false;',insertStr : '@Output() EventEmitter<int> myEventEmitter;'}),numOfRepeats : 10});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_ng_change_html : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Open \'packages/np8080\'.\n2. Change the contents of a mustache\n3. Measure the time to finish analysis.\n4. Rollback changes to the file and wait for analysis.\n5. Go to (2).\n';
    let times : core.DartList<number> = await new lib3.BenchmarkScenario().waitAnalyze_change_analyze({
        roots : new core.DartList.literal(properties.paths.packageNp8080),file : properties.paths.editorHtml,fileChange : new lib3.FileChange({
            afterStr : 'note.lastModified',afterStrBack : 4,insertStr : 'NewName'}),numOfRepeats : 4});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_ng_initialAnalysis : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Start server, set \'package/np8080\' analysis roots.\n2. Measure the time to finish initial analysis.\n3. Shutdown the server.\n4. Go to (1).\n';
    let times : core.DartList<number> = await lib3.BenchmarkScenario.start_waitInitialAnalysis_shutdown({
        roots : new core.DartList.literal(properties.paths.packageNp8080),numOfRepeats : 5});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_ng_memory_initialAnalysis : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Start server, set \'package/np8080\' as the analysis root.\n2. Measure the memory usage after finishing initial analysis.\n3. Shutdown the server.\n4. Go to (1).\n';
    let sizes : core.DartList<number> = await lib4.AnalysisServerMemoryUsageTest.start_waitInitialAnalysis_shutdown({
        roots : new core.DartList.literal<string>(properties.paths.packageNp8080),numOfRepeats : 3});
    lib4.printMemoryResults(id,description,sizes);
})());
export namespace PathHolder {
    export type Constructors = 'PathHolder';
    export type Interface = Omit<PathHolder, Constructors>;
}
@DartClass
export class PathHolder {
    editorHtml : string;

    editorDart : string;

    packageNp8080 : string;

    constructor(_namedArguments? : {projectPath? : string}) {
    }
    @defaultConstructor
    PathHolder(_namedArguments? : {projectPath? : string}) {
        let {projectPath} = Object.assign({
        }, _namedArguments );
        this.editorHtml = `${projectPath}/lib/editor/editor_component.html`;
        this.editorDart = `${projectPath}/lib/editor/editor_component.dart`;
        this.packageNp8080 = projectPath;
    }
}

export class properties {
    private static __$benchmarks : core.DartMap<string,(id : string) => any>;
    static get benchmarks() : core.DartMap<string,(id : string) => any> { 
        if (this.__$benchmarks===undefined) {
            this.__$benchmarks = new core.DartMap.literal([
                ['ng-initialAnalysis',run_ng_initialAnalysis],
                ['ng-change-dart',run_ng_change_dart],
                ['ng-change-html',run_ng_change_html],
                ['ng-memory-initialAnalysis',run_ng_memory_initialAnalysis]]);
        }
        return this.__$benchmarks;
    }
    static set benchmarks(__$value : core.DartMap<string,(id : string) => any>)  { 
        this.__$benchmarks = __$value;
    }

    private static __$paths : PathHolder;
    static get paths() : PathHolder { 
        return this.__$paths;
    }
    static set paths(__$value : PathHolder)  { 
        this.__$paths = __$value;
    }

}
