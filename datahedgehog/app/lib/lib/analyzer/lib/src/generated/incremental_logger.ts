/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/incremental_logger.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Logger {
    export type Constructors = 'Logger';
    export type Interface = Omit<Logger, Constructors>;
}
@DartClass
export class Logger {
    @Abstract
    enter(name : string) : void{ throw 'abstract'}
    @Abstract
    exit() : void{ throw 'abstract'}
    @Abstract
    log(obj : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    logException(exception : core.DartObject,stackTrace? : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    startTimer() : LoggingTimer{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Logger() {
    }
}

export namespace LoggingTimer {
    export type Constructors = 'LoggingTimer';
    export type Interface = Omit<LoggingTimer, Constructors>;
}
@DartClass
export class LoggingTimer {
    _logger : Logger;

    _stopwatch : core.DartStopwatch;

    constructor(_logger : Logger) {
    }
    @defaultConstructor
    LoggingTimer(_logger : Logger) {
        this._stopwatch = new core.DartStopwatch();
        this._logger = _logger;
        this._stopwatch.start();
    }
    stop(message : string) : void {
        this._stopwatch.stop();
        this._logger.log(`${message} in ${this._stopwatch.elapsedMilliseconds} ms`);
    }
}

export namespace StringSinkLogger {
    export type Constructors = 'StringSinkLogger';
    export type Interface = Omit<StringSinkLogger, Constructors>;
}
@DartClass
@Implements(Logger)
export class StringSinkLogger implements Logger.Interface {
    private static __$_MAX_LINE_LENGTH : number;
    static get _MAX_LINE_LENGTH() : number { 
        if (this.__$_MAX_LINE_LENGTH===undefined) {
            this.__$_MAX_LINE_LENGTH = 512;
        }
        return this.__$_MAX_LINE_LENGTH;
    }

    _sink : core.DartStringSink;

    _sectionStack : core.DartList<_LoggerSection>;

    _section : _LoggerSection;

    constructor(_sink : core.DartStringSink) {
    }
    @defaultConstructor
    StringSinkLogger(_sink : core.DartStringSink) {
        this._sectionStack = new core.DartList.literal<_LoggerSection>();
        this._section = new _LoggerSection('','ROOT');
        this._sink = _sink;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enter(name : string) : void {
        this.log(`+++ ${name}`);
        this._sectionStack.add(this._section);
        this._section = new _LoggerSection(this._section.indent + '	',name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exit() : void {
        let now : core.DartDateTime = new core.DartDateTime.now();
        let duration : core.DartDuration = now.difference(this._section.start);
        let message : string = `--- ${this._section.name} in ${duration.inMilliseconds} ms`;
        this._section = this._sectionStack.removeLast();
        this.log(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    log(obj : core.DartObject) : void {
        let now : core.DartDateTime = new core.DartDateTime.now();
        let indent : string = this._section.indent;
        let objStr : string = this._getObjectString(obj);
        let line : string = `[${now}] ${indent}${objStr}`;
        this._sink.writeln(line);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logException(exception : core.DartObject,stackTrace? : core.DartObject) : void {
        if (exception != null) {
            this.log(exception);
        }
        if (stackTrace != null) {
            this.log(stackTrace);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    startTimer() : LoggingTimer {
        return new LoggingTimer(this);
    }
    _getObjectString(obj : core.DartObject) : string {
        if (op(Op.EQUALS,obj,null)) {
            return 'null';
        }
        if (is(obj, "Function")) {
            obj = obj();
        }
        let str : string = obj.toString();
        if (new core.DartString(str).length < StringSinkLogger._MAX_LINE_LENGTH) {
            return str;
        }
        return new core.DartString(str).split('\n').map((line : string) =>  {
            if (new core.DartString(line).length > StringSinkLogger._MAX_LINE_LENGTH) {
                line = new core.DartString(line).substring(0,StringSinkLogger._MAX_LINE_LENGTH) + '...';
            }
            return line;
        }).join('\n');
    }
}

export namespace _LoggerSection {
    export type Constructors = '_LoggerSection';
    export type Interface = Omit<_LoggerSection, Constructors>;
}
@DartClass
export class _LoggerSection {
    start : core.DartDateTime;

    indent : string;

    name : string;

    constructor(indent : string,name : string) {
    }
    @defaultConstructor
    _LoggerSection(indent : string,name : string) {
        this.start = new core.DartDateTime.now();
        this.indent = indent;
        this.name = name;
    }
}

export namespace _NullLogger {
    export type Constructors = '_NullLogger';
    export type Interface = Omit<_NullLogger, Constructors>;
}
@DartClass
@Implements(Logger)
export class _NullLogger implements Logger.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enter(name : string) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exit() : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    log(obj : core.DartObject) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logException(exception : core.DartObject,stackTrace? : core.DartObject) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    startTimer() : LoggingTimer {
        return new LoggingTimer(this);
    }
    constructor() {
    }
    @defaultConstructor
    _NullLogger() {
    }
}

export namespace _PrintStringSink {
    export type Constructors = '_PrintStringSink';
    export type Interface = Omit<_PrintStringSink, Constructors>;
}
@DartClass
@Implements(core.DartStringSink)
export class _PrintStringSink implements core.DartStringSink.Interface {
    _line : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    write(obj : core.DartObject) : void {
        if (op(Op.EQUALS,obj,null)) {
            this._line += 'null';
        }else {
            this._line += obj.toString();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeAll(objects : core.DartIterable<any>,separator? : string) : void {
        separator = separator || '';
        this._line += objects.join(separator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeCharCode(charCode : number) : void {
        this._line += new core.DartString.fromCharCode(charCode).valueOf();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeln(obj? : core.DartObject) : void {
        obj = obj || '';
        this._line += obj;
        core.print(this._line);
        this._line = '';
    }
    constructor() {
    }
    @defaultConstructor
    _PrintStringSink() {
        this._line = '';
    }
}

export class properties {
    private static __$logger : Logger;
    static get logger() : Logger { 
        if (this.__$logger===undefined) {
            this.__$logger = properties.NULL_LOGGER;
        }
        return this.__$logger;
    }
    static set logger(__$value : Logger)  { 
        this.__$logger = __$value;
    }

    private static __$NULL_LOGGER : Logger;
    static get NULL_LOGGER() : Logger { 
        if (this.__$NULL_LOGGER===undefined) {
            this.__$NULL_LOGGER = new _NullLogger();
        }
        return this.__$NULL_LOGGER;
    }
    static set NULL_LOGGER(__$value : Logger)  { 
        this.__$NULL_LOGGER = __$value;
    }

    private static __$PRINT_LOGGER : Logger;
    static get PRINT_LOGGER() : Logger { 
        if (this.__$PRINT_LOGGER===undefined) {
            this.__$PRINT_LOGGER = new StringSinkLogger(new _PrintStringSink());
        }
        return this.__$PRINT_LOGGER;
    }
    static set PRINT_LOGGER(__$value : Logger)  { 
        this.__$PRINT_LOGGER = __$value;
    }

}
