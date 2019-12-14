/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/performance_tests.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../test/integration/support/integration_tests";
import * as io from "@dart2ts/dart/io";

export namespace AbstractAnalysisServerPerformanceTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'AbstractAnalysisServerPerformanceTest';
    export type Interface = Omit<AbstractAnalysisServerPerformanceTest, Constructors>;
}
@DartClass
export class AbstractAnalysisServerPerformanceTest extends lib3.AbstractAnalysisServerIntegrationTest {
    stopwatch : core.DartStopwatch;

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
            lib3.outOfTestExpect(serverConnected.isCompleted,isFalse);
            serverConnected.complete();
        });
        return this.startServer({
            checked : false}).then((_ : any) =>  {
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

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractAnalysisServerPerformanceTest() {
        this.stopwatch = new core.DartStopwatch();
    }
}

export namespace AbstractTimingTest {
    export type Constructors = AbstractAnalysisServerPerformanceTest.Constructors | 'AbstractTimingTest';
    export type Interface = Omit<AbstractTimingTest, Constructors>;
}
@DartClass
export class AbstractTimingTest extends AbstractAnalysisServerPerformanceTest {
    init(source : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.setUp();
            this.sourceDirectory = new io.Directory(source);
            return this.subscribeToStatusNotifications();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractTimingTest() {
    }
}

export class properties {
}
