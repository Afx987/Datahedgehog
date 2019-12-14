/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/completion_performance.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CompletionPerformance {
    export type Constructors = 'CompletionPerformance';
    export type Interface = Omit<CompletionPerformance, Constructors>;
}
@DartClass
export class CompletionPerformance {
    start : core.DartDateTime;

    _startTimes : core.DartMap<string,core.DartDuration>;

    _stopwatch : core.DartStopwatch;

    operations : core.DartList<OperationPerformance>;

    source : any;

    snippet : string;

    notificationCount : number;

    suggestionCountFirst : number;

    suggestionCountLast : number;

    _firstNotification : core.DartDuration;

    constructor() {
    }
    @defaultConstructor
    CompletionPerformance() {
        this.start = new core.DartDateTime.now();
        this._startTimes = new core.DartMap<string,core.DartDuration>();
        this._stopwatch = new core.DartStopwatch();
        this.operations = new core.DartList.literal<OperationPerformance>();
        this.snippet = '';
        this.notificationCount = -1;
        this.suggestionCountFirst = -1;
        this.suggestionCountLast = -1;
        this._stopwatch.start();
    }
    get elapsedInMilliseconds() : number {
        return this.operations.length > 0 ? this.operations.last.elapsed.inMilliseconds : 0;
    }
    get firstNotificationInMilliseconds() : number {
        return this._firstNotification != null ? this._firstNotification.inMilliseconds : 0;
    }
    get startTimeAndMs() : string {
        return `${this.start.millisecondsSinceEpoch} - ${this.start}`;
    }
    get suggestionCount() : string {
        if (this.notificationCount < 1) return '';
        if (this.notificationCount == 1) return `${this.suggestionCountFirst}`;
        return `${this.suggestionCountFirst},  ${this.suggestionCountLast}`;
    }
    complete(tag? : string) : void {
        tag = tag || null;
        this._stopwatch.stop();
        this._logDuration((tag || 'total time'),this._stopwatch.elapsed);
    }
    logElapseTime(tag : string) : void {
        let end : core.DartDuration = this._stopwatch.elapsed;
        let start : core.DartDuration = this._startTimes.get(tag);
        if (op(Op.EQUALS,start,null)) {
            this._logDuration(tag,null);
            return null;
        }
        this._logDuration(tag,op(Op.MINUS,end,start));
    }
    logFirstNotificationComplete(tag : string) : void {
        this._firstNotification = this._stopwatch.elapsed;
        this._logDuration(tag,this._firstNotification);
    }
    logStartTime(tag : string) : void {
        this._startTimes.set(tag,this._stopwatch.elapsed);
    }
    setContentsAndOffset(contents : string,offset : number) : void {
        this.snippet = CompletionPerformance._computeSnippet(contents,offset);
    }
    _logDuration(tag : string,elapsed : core.DartDuration) : void {
        this.operations.add(new OperationPerformance(tag,elapsed));
    }
    static _computeSnippet(contents : string,offset : number) : string {
        if (contents == null || offset == null || offset < 0 || new core.DartString(contents).length < offset) {
            return '???';
        }
        let start : number = offset;
        while (start > 0){
            let ch : string = contents[start - 1];
            if (ch == '' || ch == '\n') {
                break;
            }
            --start;
        }
        let end : number = offset;
        while (end < new core.DartString(contents).length){
            let ch : string = contents[end];
            if (ch == '' || ch == '\n') {
                break;
            }
            ++end;
        }
        let prefix : string = new core.DartString(contents).substring(start,offset);
        let suffix : string = new core.DartString(contents).substring(offset,end);
        return `${prefix}^${suffix}`;
    }
}

export namespace OperationPerformance {
    export type Constructors = 'OperationPerformance';
    export type Interface = Omit<OperationPerformance, Constructors>;
}
@DartClass
export class OperationPerformance {
    name : string;

    elapsed : core.DartDuration;

    constructor(name : string,elapsed : core.DartDuration) {
    }
    @defaultConstructor
    OperationPerformance(name : string,elapsed : core.DartDuration) {
        this.name = name;
        this.elapsed = elapsed;
    }
}

export class properties {
}
