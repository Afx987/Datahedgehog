/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/operation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./driver";
import * as lib4 from "./input_converter";

export namespace Operation {
    export type Constructors = 'Operation';
    export type Interface = Omit<Operation, Constructors>;
}
@DartClass
export class Operation {
    @Abstract
    perform(driver : lib3.Driver) : async.Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Operation() {
    }
}

export namespace RequestOperation {
    export type Constructors = Operation.Constructors | 'RequestOperation';
    export type Interface = Omit<RequestOperation, Constructors>;
}
@DartClass
export class RequestOperation extends Operation {
    converter : lib4.CommonInputConverter;

    json : core.DartMap<string,any>;

    constructor(converter : lib4.CommonInputConverter,json : core.DartMap<string,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RequestOperation(converter : lib4.CommonInputConverter,json : core.DartMap<string,any>) {
        this.converter = converter;
        this.json = json;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(driver : lib3.Driver) : async.Future<any> {
        let stopwatch : core.DartStopwatch = new core.DartStopwatch();
        let originalId : string = this.json.get('id');
        let method : string = this.json.get('method');
        this.json.set('clientRequestTime',new core.DartDateTime.now().millisecondsSinceEpoch);
        driver.logger.log(Level.FINE,`Sending request: ${method}\n  ${this.json}`);
        stopwatch.start();
        var recordResult : (success : boolean,result : any) => void = (success : boolean,result : any) : void =>  {
            let elapsed : core.DartDuration = stopwatch.elapsed;
            driver.results.record(method,elapsed,{
                success : success});
            driver.logger.log(Level.FINE,`Response received: ${method} : ${elapsed}\n  ${result}`);
        };
        driver.send(method,this.converter.asMap(this.json.get('params'))).then((result : core.DartMap<string,any>) =>  {
            recordResult(true,result);
            this.processResult(originalId,result,stopwatch);
        }).catchError((exception : any) =>  {
            recordResult(false,exception);
            this.converter.processErrorResponse(originalId,exception);
        });
        return null;
    }
    processResult(id : string,result : core.DartMap<string,any>,stopwatch : core.DartStopwatch) : void {
        this.converter.processResponseResult(id,result);
    }
}

export namespace ResponseOperation {
    export type Constructors = Operation.Constructors | 'ResponseOperation';
    export type Interface = Omit<ResponseOperation, Constructors>;
}
@DartClass
export class ResponseOperation extends Operation {
    private static __$responseTimeout : core.DartDuration;
    static get responseTimeout() : core.DartDuration { 
        if (this.__$responseTimeout===undefined) {
            this.__$responseTimeout = new core.DartDuration({
                seconds : 60});
        }
        return this.__$responseTimeout;
    }
    static set responseTimeout(__$value : core.DartDuration)  { 
        this.__$responseTimeout = __$value;
    }

    converter : lib4.CommonInputConverter;

    requestJson : core.DartMap<string,any>;

    responseJson : core.DartMap<string,any>;

    completer : async.DartCompleter<any>;

    driver : lib3.Driver;

    constructor(converter : lib4.CommonInputConverter,requestJson : core.DartMap<string,any>,responseJson : core.DartMap<string,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResponseOperation(converter : lib4.CommonInputConverter,requestJson : core.DartMap<string,any>,responseJson : core.DartMap<string,any>) {
        this.completer = new async.DartCompleter<any>();
        this.converter = converter;
        this.requestJson = requestJson;
        this.responseJson = responseJson;
        this.completer.future.then(this._processResult.bind(this)).timeout(ResponseOperation.responseTimeout);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(driver : lib3.Driver) : async.Future<any> {
        this.driver = driver;
        return this.converter.processExpectedResponse(this.responseJson.get('id'),this.completer);
    }
    _equal(expectedResult : any,actualResult : any) : boolean {
        if (is(expectedResult, core.DartMap<any,any>) && is(actualResult, core.DartMap<any,any>)) {
            if (expectedResult.length == actualResult.length) {
                return expectedResult.keys.every((key : string) =>  {
                    return key == 'fileStamp' || this._equal(expectedResult.get(key),actualResult.get(key));
                });
            }
        }else if (is(expectedResult, core.DartList<any>) && is(actualResult, core.DartList<any>)) {
            if (expectedResult.length == actualResult.length) {
                for(let i : number = 0; i < expectedResult.length; ++i){
                    if (!this._equal(expectedResult[i],actualResult[i])) {
                        return false;
                    }
                }
                return true;
            }
        }
        return op(Op.EQUALS,expectedResult,actualResult);
    }
    _processResult(actualResult : any) : void {
        let expectedResult = this.responseJson.get('result');
        if (!this._equal(expectedResult,actualResult)) {
            let expectedError = this.responseJson.get('error');
            var format : (value : any) => string = (value : any) : string =>  {
                let text : string = `\n${value}`;
                if (new core.DartString(text).endsWith('\n')) {
                    text = new core.DartString(text).substring(0,new core.DartString(text).length - 1);
                }
                return new core.DartString(text).replaceAll('\n','\n  ');
            };
            let message : string = `Request:${format(this.requestJson)}\n` + `expected result:${format(expectedResult)}\n` + `expected error:${format(expectedError)}\n` + `but received:${format(actualResult)}`;
            this.driver.results.recordUnexpectedResults(this.requestJson.get('method'));
            this.converter.logOverlayContent();
            if (op(Op.EQUALS,expectedError,null)) {
                this.converter.logger.log(Level.SEVERE,message);
            }else {
                throw message;
            }
        }
    }
}

export namespace StartServerOperation {
    export type Constructors = Operation.Constructors | 'StartServerOperation';
    export type Interface = Omit<StartServerOperation, Constructors>;
}
@DartClass
export class StartServerOperation extends Operation {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(driver : lib3.Driver) : async.Future<any> {
        return driver.startServer();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StartServerOperation() {
    }
}

export namespace WaitForAnalysisCompleteOperation {
    export type Constructors = Operation.Constructors | 'WaitForAnalysisCompleteOperation';
    export type Interface = Omit<WaitForAnalysisCompleteOperation, Constructors>;
}
@DartClass
export class WaitForAnalysisCompleteOperation extends Operation {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(driver : lib3.Driver) : async.Future<any> {
        let start : core.DartDateTime = new core.DartDateTime.now();
        driver.logger.log(Level.FINE,'waiting for analysis to complete');
        let subscription : async.DartStreamSubscription<any>;
        let timer : async.DartTimer;
        let completer : async.DartCompleter<any> = new async.DartCompleter<any>();
        let isAnalyzing : boolean = false;
        subscription = driver.onServerStatus.listen((params : any) =>  {
            if (params.analysis != null) {
                if (params.analysis.isAnalyzing) {
                    isAnalyzing = true;
                }else {
                    subscription.cancel();
                    timer.cancel();
                    let end : core.DartDateTime = new core.DartDateTime.now();
                    let delta : core.DartDuration = end.difference(start);
                    driver.logger.log(Level.FINE,`analysis complete after ${delta}`);
                    completer.complete();
                    driver.results.record('analysis complete',delta,{
                        notification : true});
                }
            }
        });
        timer = new async.DartTimer.periodic(new core.DartDuration({
            milliseconds : 20}),(_ : any) =>  {
            if (!isAnalyzing) {
                subscription.cancel();
                timer.cancel();
                driver.logger.log(Level.INFO,'analysis never started');
                completer.complete();
                return;
            }
            let currentTime : double = driver.server.currentElapseTime;
            let lastTime : double = driver.server.lastCommunicationTime;
            if (currentTime - lastTime > 60) {
                subscription.cancel();
                timer.cancel();
                let message : string = 'gave up waiting for analysis to complete';
                driver.logger.log(Level.WARNING,message);
                completer.completeError(message);
            }
        });
        return completer.future;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WaitForAnalysisCompleteOperation() {
    }
}

export namespace CompletionRequestOperation {
    export type Constructors = RequestOperation.Constructors | 'CompletionRequestOperation';
    export type Interface = Omit<CompletionRequestOperation, Constructors>;
}
@DartClass
export class CompletionRequestOperation extends RequestOperation {
    driver : lib3.Driver;

    subscription : async.DartStreamSubscription<any>;

    notificationId : string;

    stopwatch : core.DartStopwatch;

    firstNotification : boolean;

    constructor(converter : lib4.CommonInputConverter,json : core.DartMap<string,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompletionRequestOperation(converter : lib4.CommonInputConverter,json : core.DartMap<string,any>) {
        this.firstNotification = true;
        super.RequestOperation(converter,json);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(driver : lib3.Driver) : async.Future<any> {
        this.driver = driver;
        this.subscription = driver.onCompletionResults.listen(this.processNotification.bind(this));
        return super.perform(driver);
    }
    processNotification(event : any) : void {
        if (op(Op.EQUALS,event.id,this.notificationId)) {
            let elapsed : core.DartDuration = this.stopwatch.elapsed;
            if (this.firstNotification) {
                this.firstNotification = false;
                this.driver.results.record('completion notification first',elapsed,{
                    notification : true});
            }
            if (event.isLast) {
                this.subscription.cancel();
                this.driver.results.record('completion notification last',elapsed,{
                    notification : true});
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    processResult(id : string,result : core.DartMap<string,any>,stopwatch : core.DartStopwatch) : void {
        this.notificationId = result.get('id');
        this.stopwatch = stopwatch;
        super.processResult(id,result,stopwatch);
    }
}

export class properties {
}
