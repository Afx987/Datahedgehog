/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/memory_tests.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./../../test/integration/support/integration_tests";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export var printMemoryResults : (id : string,description : string,sizes : core.DartList<number>) => void = (id : string,description : string,sizes : core.DartList<number>) : void =>  {
    let minMemory : number = sizes.fold(sizes.first,math.min);
    let maxMemory : number = sizes.fold(sizes.first,math.max);
    let now : string = new core.DartDateTime.now().toUtc().toIso8601String();
    core.print(`${now} ========== ${id}`);
    core.print(`memory: ${sizes}`);
    core.print(`min_memory: ${minMemory}`);
    core.print(`max_memory: ${maxMemory}`);
    core.print(new core.DartString(description).trim());
    core.print('--------------------');
    core.print('');
    core.print('');
};
export namespace AnalysisServerMemoryUsageTest {
    export type Constructors = lib4.AbstractAnalysisServerIntegrationTest.Constructors | 'AnalysisServerMemoryUsageTest';
    export type Interface = Omit<AnalysisServerMemoryUsageTest, Constructors>;
}
@DartClass
export class AnalysisServerMemoryUsageTest extends lib4.AbstractAnalysisServerIntegrationTest {
    private static __$vmServicePort : number;
    static get vmServicePort() : number { 
        if (this.__$vmServicePort===undefined) {
            this.__$vmServicePort = 12345;
        }
        return this.__$vmServicePort;
    }

    getMemoryUsage() : number {
        let result : io.ProcessResult = this._run('curl',new core.DartList.literal<string>(`localhost:${AnalysisServerMemoryUsageTest.vmServicePort}/_getAllocationProfile?isolateId=isolates/root&gc=full`));
        let json : core.DartMap<any,any> = convert.properties.JSON.decode(result.stdout);
        let heaps : core.DartMap<any,any> = op(Op.INDEX,json.get('result'),'heaps');
        let newSpace : number = op(Op.INDEX,heaps.get('new'),'used');
        let oldSpace : number = op(Op.INDEX,heaps.get('old'),'used');
        return newSpace + oldSpace;
    }
    setAnalysisRoot() : async.Future<any> {
        return this.sendAnalysisSetAnalysisRoots(new core.DartList.literal(this.sourceDirectory.path),new core.DartList.literal());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : async.Future<any> {
        this.onAnalysisErrors.listen((params : any) =>  {
            op(Op.INDEX_ASSIGN,this.currentAnalysisErrors,params.file,params.errors);
        });
        this.onServerError.listen((params : any) =>  {
            fail(`${params.message}\n${params.stackTrace}`);
        });
        let serverConnected : async.DartCompleter<any> = new async.DartCompleter<any>();
        this.onServerConnected.listen((_ : any) =>  {
            lib4.outOfTestExpect(serverConnected.isCompleted,isFalse);
            serverConnected.complete();
        });
        return this.startServer({
            servicesPort : AnalysisServerMemoryUsageTest.vmServicePort}).then((_ : any) =>  {
            this.server.listenToOutput(this.dispatchNotification.bind(this));
            this.server.exitCode.then((_ : any) =>  {
                this.skipShutdown = true;
            });
            return serverConnected.future;
        });
    }
    shutdown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return await this.shutdownIfNeeded();
        } )());
    }

    subscribeToStatusNotifications() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.sendServerSetSubscriptions(new core.DartList.literal(ServerService.STATUS));
        } )());
    }

    _run(executable : string,arguments : core.DartList<string>) : io.ProcessResult {
        return io.Process.runSync(executable,arguments,{
            stderrEncoding : convert.properties.UTF8,stdoutEncoding : convert.properties.UTF8});
    }
    static start_waitInitialAnalysis_shutdown(_namedArguments? : {roots? : core.DartList<string>,numOfRepeats? : number}) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {roots,numOfRepeats} = Object.assign({
            }, _namedArguments );
            lib4.outOfTestExpect(roots,isNotNull,{
                reason : 'roots'});
            lib4.outOfTestExpect(numOfRepeats,isNotNull,{
                reason : 'numOfRepeats'});
            let sizes : core.DartList<number> = new core.DartList.literal<number>();
            for(let i : number = 0; i < numOfRepeats; i++){
                let test : AnalysisServerMemoryUsageTest = new AnalysisServerMemoryUsageTest();
                await test.setUp();
                await test.subscribeToStatusNotifications();
                await test.sendAnalysisSetAnalysisRoots(roots,new core.DartList.literal());
                await test.analysisFinished;
                sizes.add(test.getMemoryUsage());
                await test.shutdown();
            }
            return sizes;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisServerMemoryUsageTest() {
    }
}

export class properties {
}
