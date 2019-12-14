/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../test/integration/support/integration_test_methods";
import * as lib4 from "./../../test/integration/support/integration_tests";
import * as lib5 from "./operation";
import * as math from "@dart2ts/dart/math";

export var _printColumn : (sb : core.DartStringBuffer,text : string,keyLen : number,_namedArguments? : {rightJustified? : boolean}) => void = (sb : core.DartStringBuffer,text : string,keyLen : number,_namedArguments? : {rightJustified? : boolean}) : void =>  {
    let {rightJustified} = Object.assign({
        "rightJustified" : false}, _namedArguments );
    if (!rightJustified) {
        sb.write(text);
        sb.write(',');
    }
    for(let i : number = new core.DartString(text).length; i < keyLen; ++i){
        sb.writeCharCode(properties.SPACE);
    }
    if (rightJustified) {
        sb.write(text);
        sb.write(',');
    }
    sb.writeCharCode(properties.SPACE);
};
export namespace Driver {
    export type Constructors = lib3.IntegrationTestMixin.Constructors | 'Driver';
    export type Interface = Omit<Driver, Constructors>;
}
@DartClass
export class Driver extends lib3.IntegrationTestMixin {
    private static __$SHUTDOWN_TIMEOUT : core.DartDuration;
    static get SHUTDOWN_TIMEOUT() : core.DartDuration { 
        if (this.__$SHUTDOWN_TIMEOUT===undefined) {
            this.__$SHUTDOWN_TIMEOUT = new core.DartDuration({
                seconds : 5});
        }
        return this.__$SHUTDOWN_TIMEOUT;
    }

    logger : any;

    diagnosticPort : number;

    running : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    server : lib4.Server;

    results : Results;

    _runCompleter : async.DartCompleter<Results>;

    constructor(_namedArguments? : {diagnosticPort? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Driver(_namedArguments? : {diagnosticPort? : number}) {
        let {diagnosticPort} = Object.assign({
        }, _namedArguments );
        this.logger = new bare.createInstance(any,null,'Driver');
        this.running = false;
        this.results = new Results();
        this._runCompleter = new async.DartCompleter<Results>();
        this.diagnosticPort = diagnosticPort;
    }
    get runComplete() : async.Future<Results> {
        return this._runCompleter.future;
    }
    perform(op : lib5.Operation) : async.Future<any> {
        return op.perform(this);
    }
    send(method : string,params : core.DartMap<string,any>) : async.Future<any> {
        return this.server.send(method,params);
    }
    startServer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.logger.log(Level.FINE,'starting server');
            this.initializeInttestMixin();
            this.server = new lib4.Server();
            let serverConnected : async.DartCompleter<any> = new async.DartCompleter<any>();
            this.onServerConnected.listen((_ : any) =>  {
                this.logger.log(Level.FINE,'connected to server');
                serverConnected.complete();
            });
            this.running = true;
            return this.server.start({
                diagnosticPort : this.diagnosticPort}).then((params : any) =>  {
                this.server.listenToOutput(this.dispatchNotification.bind(this));
                this.server.exitCode.then((_ : any) =>  {
                    this.logger.log(Level.FINE,'server stopped');
                    this.running = false;
                    this._resultsReady();
                });
                return serverConnected.future;
            });
        } )());
    }

    stopServer(timeout? : core.DartDuration) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            timeout = timeout || Driver.SHUTDOWN_TIMEOUT;
            if (this.running) {
                this.logger.log(Level.FINE,'requesting server shutdown');
                this.sendServerShutdown();
                await this.server.exitCode.timeout(timeout,{
                    onTimeout : () =>  {
                        return this.server.kill('server failed to exit');
                    }});
            }
            this._resultsReady();
        } )());
    }

    _resultsReady() : void {
        if (!this._runCompleter.isCompleted) {
            this._runCompleter.complete(this.results);
        }
    }
}

export namespace Measurement {
    export type Constructors = 'Measurement';
    export type Interface = Omit<Measurement, Constructors>;
}
@DartClass
export class Measurement {
    tag : string;

    notification : boolean;

    elapsedTimes : core.DartList<core.DartDuration>;

    errorCount : number;

    unexpectedResultCount : number;

    constructor(tag : string,notification : boolean) {
    }
    @defaultConstructor
    Measurement(tag : string,notification : boolean) {
        this.elapsedTimes = new core.DartList<core.DartDuration>();
        this.errorCount = 0;
        this.unexpectedResultCount = 0;
        this.tag = tag;
        this.notification = notification;
    }
    get count() : number {
        return this.elapsedTimes.length;
    }
    printSummary(keyLen : number) : void {
        let count : number = 0;
        let maxTime : core.DartDuration = this.elapsedTimes[0];
        let minTime : core.DartDuration = this.elapsedTimes[0];
        let totalTimeMicros : number = 0;
        for(let elapsed of this.elapsedTimes) {
            ++count;
            let timeMicros : number = elapsed.inMicroseconds;
            maxTime = maxTime.compareTo(elapsed) > 0 ? maxTime : elapsed;
            minTime = minTime.compareTo(elapsed) < 0 ? minTime : elapsed;
            totalTimeMicros += timeMicros;
        }
        let meanTime : number = new core.DartDouble((totalTimeMicros / count)).round();
        let sorted : core.DartList<core.DartDuration> = ((_) : core.DartList<core.DartDuration> =>  {
            {
                _.sort();
                return _;
            }
        })(this.elapsedTimes.toList());
        let time90th : core.DartDuration = sorted[new core.DartDouble((sorted.length * 0.9)).round() - 1];
        let time99th : core.DartDuration = sorted[new core.DartDouble((sorted.length * 0.99)).round() - 1];
        let differenceFromMeanSquared : number = 0;
        for(let elapsed of this.elapsedTimes) {
            let timeMicros : number = elapsed.inMicroseconds;
            let differenceFromMean : number = timeMicros - meanTime;
            differenceFromMeanSquared += differenceFromMean * differenceFromMean;
        }
        let variance : double = differenceFromMeanSquared / count;
        let standardDeviation : number = new core.DartDouble(math.sqrt(variance)).round();
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        _printColumn(sb,this.tag,keyLen);
        _printColumn(sb,new core.DartInt(count).toString(),6,{
            rightJustified : true});
        _printColumn(sb,new core.DartInt(this.errorCount).toString(),6,{
            rightJustified : true});
        _printColumn(sb,new core.DartInt(this.unexpectedResultCount).toString(),6,{
            rightJustified : true});
        this._printDuration(sb,new core.DartDuration({
            microseconds : meanTime}));
        this._printDuration(sb,time90th);
        this._printDuration(sb,time99th);
        this._printDuration(sb,new core.DartDuration({
            microseconds : standardDeviation}));
        this._printDuration(sb,minTime);
        this._printDuration(sb,maxTime);
        this._printDuration(sb,new core.DartDuration({
            microseconds : totalTimeMicros}));
        core.print(sb.toString());
    }
    record(success : boolean,elapsed : core.DartDuration) : void {
        if (!success) {
            ++this.errorCount;
        }
        this.elapsedTimes.add(elapsed);
    }
    recordUnexpectedResults() : void {
        ++this.unexpectedResultCount;
    }
    _printDuration(sb : core.DartStringBuffer,duration : core.DartDuration) : void {
        _printColumn(sb,new core.DartInt(duration.inMilliseconds).toString(),15,{
            rightJustified : true});
    }
}

export namespace Results {
    export type Constructors = 'Results';
    export type Interface = Omit<Results, Constructors>;
}
@DartClass
export class Results {
    measurements : core.DartMap<string,Measurement>;

    printResults() : void {
        core.print('');
        core.print('==================================================================');
        core.print('');
        let keys : core.DartList<string> = ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(this.measurements.keys.toList());
        let keyLen : number = keys.fold(0,(len : number,key : string) =>  {
            return math.max(len,new core.DartString(key).length);
        });
        this._printGroupHeader('Request/Response',keyLen);
        let totalCount : number = 0;
        let totalErrorCount : number = 0;
        let totalUnexpectedResultCount : number = 0;
        for(let tag of keys) {
            let m : Measurement = this.measurements.get(tag);
            if (!m.notification) {
                m.printSummary(keyLen);
                totalCount += m.count;
                totalErrorCount += m.errorCount;
                totalUnexpectedResultCount += m.unexpectedResultCount;
            }
        }
        this._printTotals(keyLen,totalCount,totalErrorCount,totalUnexpectedResultCount);
        core.print('');
        this._printGroupHeader('Notifications',keyLen);
        for(let tag of keys) {
            let m : Measurement = this.measurements.get(tag);
            if (m.notification) {
                m.printSummary(keyLen);
            }
        }
        core.print('\n(1) uxr = UneXpected Results or responses received from the server\n          that do not match the recorded response for that request.\n(2) all times in milliseconds');
    }
    record(tag : string,elapsed : core.DartDuration,_namedArguments? : {notification? : boolean,success? : boolean}) : void {
        let {notification,success} = Object.assign({
            "notification" : false,
            "success" : true}, _namedArguments );
        let measurement : Measurement = this.measurements.get(tag);
        if (op(Op.EQUALS,measurement,null)) {
            measurement = new Measurement(tag,notification);
            this.measurements.set(tag,measurement);
        }
        measurement.record(success,elapsed);
    }
    recordUnexpectedResults(tag : string) : void {
        this.measurements.get(tag).recordUnexpectedResults();
    }
    _printGroupHeader(groupName : string,keyLen : number) : void {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        _printColumn(sb,groupName,keyLen);
        _printColumn(sb,'count',6,{
            rightJustified : true});
        _printColumn(sb,'error',6,{
            rightJustified : true});
        _printColumn(sb,'uxr(1)',6,{
            rightJustified : true});
        sb.write('  ');
        _printColumn(sb,'mean(2)',15);
        _printColumn(sb,'90th',15);
        _printColumn(sb,'99th',15);
        _printColumn(sb,'std-dev',15);
        _printColumn(sb,'minimum',15);
        _printColumn(sb,'maximum',15);
        _printColumn(sb,'total',15);
        core.print(sb.toString());
    }
    _printTotals(keyLen : number,totalCount : number,totalErrorCount : number,totalUnexpectedResultCount : number) : void {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        _printColumn(sb,'Totals',keyLen);
        _printColumn(sb,new core.DartInt(totalCount).toString(),6,{
            rightJustified : true});
        _printColumn(sb,new core.DartInt(totalErrorCount).toString(),6,{
            rightJustified : true});
        _printColumn(sb,new core.DartInt(totalUnexpectedResultCount).toString(),6,{
            rightJustified : true});
        core.print(sb.toString());
    }
    constructor() {
    }
    @defaultConstructor
    Results() {
        this.measurements = new core.DartMap<string,Measurement>();
    }
}

export class properties {
    private static __$SPACE;
    static get SPACE() { 
        if (this.__$SPACE===undefined) {
            this.__$SPACE = new core.DartString(' ').codeUnitAt(0);
        }
        return this.__$SPACE;
    }
    static set SPACE(__$value : any)  { 
        this.__$SPACE = __$value;
    }

}
