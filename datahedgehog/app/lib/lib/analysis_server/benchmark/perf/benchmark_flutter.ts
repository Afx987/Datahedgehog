/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/benchmark_flutter.dart */
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
        core.print('Usage: dart benchmark_local.dart path_to_flutter_checkout' + ' [benchmark_id]');
        return;
    }
    properties.paths = new PathHolder({
        flutterPath : args[0]});
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
export var run_flutter_change_1 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Open \'packages/flutter\'.\n2. Change a method body in lib/src/painting/colors.dart\n3. Measure the time to finish analysis.\n4. Rollback changes to the file and wait for analysis.\n5. Go to (2).\n';
    let times : core.DartList<number> = await new lib3.BenchmarkScenario().waitAnalyze_change_analyze({
        roots : new core.DartList.literal(properties.paths.packageFlutter),file : `${properties.paths.packageFlutter}/lib/src/painting/colors.dart`,fileChange : new lib3.FileChange({
            afterStr : 'final double h = hue % 360;',insertStr : 'print(12345);'}),numOfRepeats : 10});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_flutter_change_2 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Open \'packages/flutter\'.\n2. Change the name of a public method in lib/src/painting/colors.dart\n3. Measure the time to finish analysis.\n4. Rollback changes to the file and wait for analysis.\n5. Go to (2).\n';
    let times : core.DartList<number> = await new lib3.BenchmarkScenario().waitAnalyze_change_analyze({
        roots : new core.DartList.literal(properties.paths.packageFlutter),file : `${properties.paths.packageFlutter}/lib/src/painting/colors.dart`,fileChange : new lib3.FileChange({
            afterStr : 'withValue(dou',afterStrBack : 4,insertStr : 'NewName'}),numOfRepeats : 5});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_flutter_completion_1 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Open \'packages/flutter\'.\n2. Change a method body in packages/flutter/lib/src/material/button.dart\n3. Request code completion in this method and measure time to get results.\n4. Rollback changes to the file and wait for analysis.\n5. Go to (2).\n';
    let completionMarker : string = 'print(12345);';
    let times : core.DartList<number> = await new lib3.BenchmarkScenario().waitAnalyze_change_getCompletion({
        roots : new core.DartList.literal(properties.paths.packageFlutter),file : `${properties.paths.packageFlutter}/lib/src/material/button.dart`,fileChange : new lib3.FileChange({
            afterStr : 'Widget build(BuildContext context) {',insertStr : completionMarker}),completeAfterStr : completionMarker,numOfRepeats : 10});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_flutter_completion_2 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Open \'packages/flutter\'.\n2. Change the name of a public method in lib/src/rendering/layer.dart\n3. Request code completion in this method and measure time to get results.\n4. Rollback changes to the file and wait for analysis.\n5. Go to (2).\n';
    let times : core.DartList<number> = await new lib3.BenchmarkScenario().waitAnalyze_change_getCompletion({
        roots : new core.DartList.literal(properties.paths.packageFlutter),file : `${properties.paths.packageFlutter}/lib/src/rendering/layer.dart`,fileChange : new lib3.FileChange({
            replaceWhat : 'void removeAllChildren() {',replaceWith : 'void removeAllChildren2() {print(12345);parent.'}),completeAfterStr : 'print(12345);parent.',numOfRepeats : 5});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_flutter_initialAnalysis_1 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Start server, set \'hello_world\' analysis root.\n2. Measure the time to finish initial analysis.\n3. Shutdown the server.\n4. Go to (1).\n';
    let times : core.DartList<number> = await lib3.BenchmarkScenario.start_waitInitialAnalysis_shutdown({
        roots : new core.DartList.literal(properties.paths.exampleHelloWorld),numOfRepeats : 5});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_flutter_initialAnalysis_2 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Start server, set \'hello_world\' and \'flutter_gallery\' analysis roots.\n2. Measure the time to finish initial analysis.\n3. Shutdown the server.\n4. Go to (1).\n';
    let times : core.DartList<number> = await lib3.BenchmarkScenario.start_waitInitialAnalysis_shutdown({
        roots : new core.DartList.literal(properties.paths.exampleHelloWorld,properties.paths.exampleGallery),numOfRepeats : 5});
    lib3.printBenchmarkResults(id,description,times);
})());
export var run_flutter_memory_initialAnalysis_1 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Start server, set \'packages/flutter\' as the analysis root.\n2. Measure the memory usage after finishing initial analysis.\n3. Shutdown the server.\n4. Go to (1).\n';
    let sizes : core.DartList<number> = await lib4.AnalysisServerMemoryUsageTest.start_waitInitialAnalysis_shutdown({
        roots : new core.DartList.literal<string>(properties.paths.packageFlutter),numOfRepeats : 3});
    lib4.printMemoryResults(id,description,sizes);
})());
export var run_flutter_memory_initialAnalysis_2 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Start server, set \'packages/flutter\' and \'packages/flutter_markdown\' analysis roots.\n2. Measure the memory usage after finishing initial analysis.\n3. Shutdown the server.\n4. Go to (1).\n';
    let sizes : core.DartList<number> = await lib4.AnalysisServerMemoryUsageTest.start_waitInitialAnalysis_shutdown({
        roots : new core.DartList.literal<string>(properties.paths.packageFlutter,properties.paths.packageMarkdown),numOfRepeats : 3});
    lib4.printMemoryResults(id,description,sizes);
})());
export var run_flutter_refactoring_1 : (id : string) => async.Future<any> = (id : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let description : string = '1. Open \'packages/flutter\'.\n2. Change the name of a public method in lib/src/rendering/layer.dart\n3. Request rename refactoring for `getSourcesWithFullName` and measure time to get results.\n4. Rollback changes to the file and wait for analysis.\n5. Go to (2).\n';
    let times : core.DartList<number> = await new lib3.BenchmarkScenario().waitAnalyze_change_getRefactoring({
        roots : new core.DartList.literal(properties.paths.packageFlutter),file : `${properties.paths.packageFlutter}/lib/src/rendering/layer.dart`,fileChange : new lib3.FileChange({
            replaceWhat : 'void removeAllChildren() {',replaceWith : 'void removeAllChildren2() {'}),refactoringAtStr : 'addToScene(ui.SceneBuilder builder',refactoringKind : RefactoringKind.RENAME,refactoringOptions : new bare.createInstance(any,null,'addToScene2'),numOfRepeats : 5});
    lib3.printBenchmarkResults(id,description,times);
})());
export namespace PathHolder {
    export type Constructors = 'PathHolder';
    export type Interface = Omit<PathHolder, Constructors>;
}
@DartClass
export class PathHolder {
    exampleHelloWorld : string;

    exampleGallery : string;

    exampleStocks : string;

    packageFlutter : string;

    packageMarkdown : string;

    packageSprites : string;

    constructor(_namedArguments? : {flutterPath? : string}) {
    }
    @defaultConstructor
    PathHolder(_namedArguments? : {flutterPath? : string}) {
        let {flutterPath} = Object.assign({
        }, _namedArguments );
        this.exampleHelloWorld = `${flutterPath}/examples/hello_world`;
        this.exampleGallery = `${flutterPath}/examples/flutter_gallery`;
        this.exampleStocks = `${flutterPath}/examples/stocks`;
        this.packageFlutter = `${flutterPath}/packages/flutter`;
        this.packageMarkdown = `${flutterPath}/packages/flutter_markdown`;
        this.packageSprites = `${flutterPath}/packages/flutter_sprites`;
    }
}

export class properties {
    private static __$benchmarks : core.DartMap<string,(id : string) => any>;
    static get benchmarks() : core.DartMap<string,(id : string) => any> { 
        if (this.__$benchmarks===undefined) {
            this.__$benchmarks = new core.DartMap.literal([
                ['flutter-initialAnalysis-1',run_flutter_initialAnalysis_1],
                ['flutter-initialAnalysis-2',run_flutter_initialAnalysis_2],
                ['flutter-change-1',run_flutter_change_1],
                ['flutter-change-2',run_flutter_change_2],
                ['flutter-completion-1',run_flutter_completion_1],
                ['flutter-completion-2',run_flutter_completion_2],
                ['flutter-refactoring-1',run_flutter_refactoring_1],
                ['flutter-memory-initialAnalysis-1',run_flutter_memory_initialAnalysis_1],
                ['flutter-memory-initialAnalysis-2',run_flutter_memory_initialAnalysis_2]]);
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
