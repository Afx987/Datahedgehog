/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/timing/timing_framework.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./../integration/support/integration_test_methods";
import * as lib5 from "./../integration/support/integration_tests";
import * as io from "@dart2ts/dart/io";
import * as lib7 from "@dart2ts.packages/path/lib/path";

export namespace TimingResult {
    export type Constructors = 'TimingResult';
    export type Interface = Omit<TimingResult, Constructors>;
}
@DartClass
export class TimingResult {
    private static __$NANOSECONDS_PER_MILLISECOND : number;
    static get NANOSECONDS_PER_MILLISECOND() : number { 
        if (this.__$NANOSECONDS_PER_MILLISECOND===undefined) {
            this.__$NANOSECONDS_PER_MILLISECOND = 1000000;
        }
        return this.__$NANOSECONDS_PER_MILLISECOND;
    }
    static set NANOSECONDS_PER_MILLISECOND(__$value : number)  { 
        this.__$NANOSECONDS_PER_MILLISECOND = __$value;
    }

    times : core.DartList<number>;

    constructor(times : core.DartList<number>) {
    }
    @defaultConstructor
    TimingResult(times : core.DartList<number>) {
        this.times = times;
    }
    get averageTime() : number {
        return op(Op.QUOTIENT,this.totalTime,this.times.length);
    }
    get maxTime() : number {
        let maxTime : number = 0;
        let count : number = this.times.length;
        for(let i : number = 0; i < count; i++){
            maxTime = math.max(maxTime,this.times[i]);
        }
        return op(Op.QUOTIENT,maxTime,TimingResult.NANOSECONDS_PER_MILLISECOND);
    }
    get minTime() : number {
        let minTime : number = this.times[0];
        let count : number = this.times.length;
        for(let i : number = 1; i < count; i++){
            minTime = math.min(minTime,this.times[i]);
        }
        return op(Op.QUOTIENT,minTime,TimingResult.NANOSECONDS_PER_MILLISECOND);
    }
    get standardDeviation() : double {
        return this.computeStandardDeviation(this.toMilliseconds(this.times));
    }
    get totalTime() : number {
        let totalTime : number = 0;
        let count : number = this.times.length;
        for(let i : number = 0; i < count; i++){
            totalTime += this.times[i];
        }
        return op(Op.QUOTIENT,totalTime,TimingResult.NANOSECONDS_PER_MILLISECOND);
    }
    computeStandardDeviation(values : core.DartList<number>) : double {
        let count : number = values.length;
        let sumOfValues : double = 0.0;
        for(let i : number = 0; i < count; i++){
            sumOfValues += values[i];
        }
        let average : double = sumOfValues / count;
        let sumOfDiffSquared : double = 0.0;
        for(let i : number = 0; i < count; i++){
            let diff : double = values[i] - average;
            sumOfDiffSquared += diff * diff;
        }
        return math.sqrt((sumOfDiffSquared / (count - 1)));
    }
    toMilliseconds(times : core.DartList<number>) : core.DartList<number> {
        let count : number = times.length;
        let convertedValues : core.DartList<number> = new core.DartList<number>();
        for(let i : number = 0; i < count; i++){
            convertedValues.add(op(Op.QUOTIENT,times[i],TimingResult.NANOSECONDS_PER_MILLISECOND));
        }
        return convertedValues;
    }
}

export namespace TimingTest {
    export type Constructors = lib4.IntegrationTestMixin.Constructors | 'TimingTest';
    export type Interface = Omit<TimingTest, Constructors>;
}
@DartClass
export class TimingTest extends lib4.IntegrationTestMixin {
    private static __$DEFAULT_WARMUP_COUNT : number;
    static get DEFAULT_WARMUP_COUNT() : number { 
        if (this.__$DEFAULT_WARMUP_COUNT===undefined) {
            this.__$DEFAULT_WARMUP_COUNT = 10;
        }
        return this.__$DEFAULT_WARMUP_COUNT;
    }
    static set DEFAULT_WARMUP_COUNT(__$value : number)  { 
        this.__$DEFAULT_WARMUP_COUNT = __$value;
    }

    private static __$DEFAULT_TIMING_COUNT : number;
    static get DEFAULT_TIMING_COUNT() : number { 
        if (this.__$DEFAULT_TIMING_COUNT===undefined) {
            this.__$DEFAULT_TIMING_COUNT = 10;
        }
        return this.__$DEFAULT_TIMING_COUNT;
    }
    static set DEFAULT_TIMING_COUNT(__$value : number)  { 
        this.__$DEFAULT_TIMING_COUNT = __$value;
    }

    private static __$DART_SUFFIX : string;
    static get DART_SUFFIX() : string { 
        if (this.__$DART_SUFFIX===undefined) {
            this.__$DART_SUFFIX = '.dart';
        }
        return this.__$DART_SUFFIX;
    }
    static set DART_SUFFIX(__$value : string)  { 
        this.__$DART_SUFFIX = __$value;
    }

    private static __$HTML_SUFFIX : string;
    static get HTML_SUFFIX() : string { 
        if (this.__$HTML_SUFFIX===undefined) {
            this.__$HTML_SUFFIX = '.html';
        }
        return this.__$HTML_SUFFIX;
    }
    static set HTML_SUFFIX(__$value : string)  { 
        this.__$HTML_SUFFIX = __$value;
    }

    private static __$SHUTDOWN_TIMEOUT : core.DartDuration;
    static get SHUTDOWN_TIMEOUT() : core.DartDuration { 
        if (this.__$SHUTDOWN_TIMEOUT===undefined) {
            this.__$SHUTDOWN_TIMEOUT = new core.DartDuration({
                seconds : 5});
        }
        return this.__$SHUTDOWN_TIMEOUT;
    }

    server : lib5.Server;

    sourceDirectory : io.Directory;

    skipShutdown : boolean;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TimingTest() {
        this.skipShutdown = false;
    }
    get timingCount() : number {
        return TimingTest.DEFAULT_TIMING_COUNT;
    }
    get warmupCount() : number {
        return TimingTest.DEFAULT_WARMUP_COUNT;
    }
    oneTimeSetUp() : async.Future<any> {
        this.initializeInttestMixin();
        this.server = new lib5.Server();
        this.sourceDirectory = io.Directory.systemTemp.createTempSync('analysisServer');
        let serverConnected : async.DartCompleter<any> = new async.DartCompleter<any>();
        this.onServerConnected.listen((_ : any) =>  {
            serverConnected.complete();
        });
        this.skipShutdown = true;
        return this.server.start().then((_ : any) =>  {
            this.server.listenToOutput(this.dispatchNotification.bind(this));
            this.server.exitCode.then((_ : any) =>  {
                this.skipShutdown = true;
            });
            return serverConnected.future;
        });
    }
    oneTimeTearDown() : async.Future<any> {
        return this._shutdownIfNeeded().then((_ : any) =>  {
            this.sourceDirectory.deleteSync({
                recursive : true});
        });
    }
    @Abstract
    perform() : async.Future<any>{ throw 'abstract'}
    run() : async.Future<TimingResult> { 
        return new async.Future.fromPromise(( async () =>  {
            let times : core.DartList<number> = new core.DartList<number>();
            await this.oneTimeSetUp();
            await this._repeat(this.warmupCount,null);
            await this._repeat(this.timingCount,times);
            await this.oneTimeTearDown();
            return new async.Future.value(new TimingResult(times));
        } )());
    }

    @Abstract
    setUp() : async.Future<any>{ throw 'abstract'}
    sourcePath(relativePath : string) : string {
        return lib7.join(this.sourceDirectory.path,new core.DartString(relativePath).replaceAll('/',lib7.properties.separator));
    }
    @Abstract
    tearDown() : async.Future<any>{ throw 'abstract'}
    writeFile(pathname : string,contents : string) : void {
        new io.Directory(lib7.dirname(pathname)).createSync({
            recursive : true});
        new io.File(pathname).writeAsStringSync(contents);
    }
    _elapsedNanoseconds(stopwatch : core.DartStopwatch) : number {
        return op(Op.QUOTIENT,(stopwatch.elapsedTicks * 1000000000),stopwatch.frequency);
    }
    _repeat(count : number,times : core.DartList<number>) : async.Future<any> {
        let stopwatch : core.DartStopwatch = new core.DartStopwatch();
        return this.setUp().then((_ : any) =>  {
            stopwatch.start();
            return this.perform().then((_ : any) =>  {
                stopwatch.stop();
                if (times != null) {
                    times.add(this._elapsedNanoseconds(stopwatch));
                }
                return this.tearDown().then((_ : any) =>  {
                    if (count > 0) {
                        return this._repeat(count - 1,times);
                    }else {
                        return new async.Future.value();
                    }
                });
            });
        });
    }
    _shutdownIfNeeded() : async.Future<any> {
        if (this.skipShutdown) {
            return new async.Future.value();
        }
        this.sendServerShutdown();
        return this.server.exitCode.timeout(TimingTest.SHUTDOWN_TIMEOUT,{
            onTimeout : () =>  {
                return this.server.kill('server failed to exit');
            }});
    }
}

export class properties {
}
