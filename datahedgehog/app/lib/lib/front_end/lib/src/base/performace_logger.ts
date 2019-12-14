/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/performace_logger.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace PerformanceLog {
    export type Constructors = 'PerformanceLog';
    export type Interface = Omit<PerformanceLog, Constructors>;
}
@DartClass
export class PerformanceLog {
    sink : core.DartStringSink;

    _level : number;

    constructor(sink : core.DartStringSink) {
    }
    @defaultConstructor
    PerformanceLog(sink : core.DartStringSink) {
        this._level = 0;
        this.sink = sink;
    }
    enter(msg : string) : PerformanceLogSection {
        this.writeln(`+++ ${msg}.`);
        this._level++;
        return new PerformanceLogSection(this,msg);
    }
    run<T>(msg : string,f : <T>() => T) : T {
        let timer : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        try {
            this.writeln(`+++ ${msg}.`);
            this._level++;
            return f();
        } finally {
            this._level--;
            let ms : number = timer.elapsedMilliseconds;
            this.writeln(`--- ${msg} in ${ms} ms.`);
        }
    }
    runAsync<T>(msg : string,f : <T>() => async.Future<T>) : async.Future<T> { 
        return new async.Future.fromPromise(( async () =>  {
            let timer : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
                {
                    _.start();
                    return _;
                }
            })(new core.DartStopwatch());
            try {
                this.writeln(`+++ ${msg}.`);
                this._level++;
                return await f();
            } finally {
                this._level--;
                let ms : number = timer.elapsedMilliseconds;
                this.writeln(`--- ${msg} in ${ms} ms.`);
            }
        } )());
    }

    writeln(msg : string) : void {
        if (this.sink != null) {
            let indent : string = op(Op.TIMES,'	',this._level);
            this.sink.writeln(`${indent}${msg}`);
        }
    }
}

export namespace PerformanceLogSection {
    export type Constructors = 'PerformanceLogSection';
    export type Interface = Omit<PerformanceLogSection, Constructors>;
}
@DartClass
export class PerformanceLogSection {
    _logger : PerformanceLog;

    _msg : string;

    _timer : core.DartStopwatch;

    constructor(_logger : PerformanceLog,_msg : string) {
    }
    @defaultConstructor
    PerformanceLogSection(_logger : PerformanceLog,_msg : string) {
        this._timer = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        this._logger = _logger;
        this._msg = _msg;
    }
    exit() : void {
        this._timer.stop();
        this._logger._level--;
        let ms : number = this._timer.elapsedMilliseconds;
        this._logger.writeln(`--- ${this._msg} in ${ms} ms.`);
    }
}

export class properties {
}
