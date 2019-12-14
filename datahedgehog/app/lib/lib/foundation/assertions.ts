/** Library asset:datahedgehog_monitor/lib/lib/foundation/assertions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./print";

export var debugPrintStack : (_namedArguments? : {label? : string,maxFrames? : number}) => any = (_namedArguments? : {label? : string,maxFrames? : number}) : any =>  {
    let {label,maxFrames} = Object.assign({
    }, _namedArguments );
    if (label != null) lib3.properties.debugPrint(label);
    let lines : core.DartIterable<string> = new core.DartString(new core.DartString(core.DartStackTrace.current.toString()).trimRight()).split('\n');
    if (maxFrames != null) lines = lines.take(maxFrames);
    lib3.properties.debugPrint(FlutterError.defaultStackFilter(lines).join('\n'));
};
export namespace FlutterErrorDetails {
    export type Constructors = 'FlutterErrorDetails';
    export type Interface = Omit<FlutterErrorDetails, Constructors>;
}
@DartClass
export class FlutterErrorDetails {
    constructor(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,stackFilter? : <T>(input : core.DartIterable<string>) => core.DartIterable<string>,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
    }
    @defaultConstructor
    FlutterErrorDetails(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,stackFilter? : <T>(input : core.DartIterable<string>) => core.DartIterable<string>,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
        let {exception,stack,library,context,stackFilter,informationCollector,silent} = Object.assign({
            "library" : 'Flutter framework',
            "silent" : false}, _namedArguments );
        this.exception = exception;
        this.stack = stack;
        this.library = library;
        this.context = context;
        this.stackFilter = stackFilter;
        this.informationCollector = informationCollector;
        this.silent = silent;
    }
    exception : any;

    stack : core.DartStackTrace;

    library : string;

    context : string;

    stackFilter : <T>(input : core.DartIterable<string>) => core.DartIterable<string>;

    informationCollector : (information : core.DartStringBuffer) => any;

    silent : boolean;

    exceptionAsString() : string {
        let longMessage : string;
        if (is(this.exception, core.AssertionError)) {
            let message : string = this.exception.message;
            let fullMessage : string = this.exception.toString();
            if (is(message, "string") && message != fullMessage) {
                if (new core.DartString(fullMessage).length > new core.DartString(message).length) {
                    let position : number = new core.DartString(fullMessage).lastIndexOf(message);
                    if (position == new core.DartString(fullMessage).length - new core.DartString(message).length && position > 2 && new core.DartString(fullMessage).substring(position - 2,position) == ': ') {
                        longMessage = `${new core.DartString(message).trimRight()}\n${new core.DartString(fullMessage).substring(0,position - 2)}`;
                    }
                }
            }
            longMessage = ( longMessage ) || ( fullMessage );
        }else if (is(this.exception, "string")) {
            longMessage = this.exception;
        }else if (is(this.exception, core.DartError) || is(this.exception, core.Exception)) {
            longMessage = this.exception.toString();
        }else {
            longMessage = `  ${this.exception.toString()}`;
        }
        longMessage = new core.DartString(longMessage).trimRight();
        if (new core.DartString(longMessage).isEmpty) longMessage = '  <no message available>';
        return longMessage;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = core.DartStringBuffer();
        if ((this.library != null && this.library != '') || (this.context != null && this.context != '')) {
            if (this.library != null && this.library != '') {
                buffer.write(`Error caught by ${this.library}`);
                if (this.context != null && this.context != '') buffer.write(', ');
            }else {
                buffer.writeln('Exception ');
            }
            if (this.context != null && this.context != '') buffer.write(`thrown ${this.context}`);
            buffer.writeln('.');
        }else {
            buffer.write('An error was caught.');
        }
        buffer.writeln(this.exceptionAsString());
        if (this.informationCollector != null) this.informationCollector(buffer);
        if (this.stack != null) {
            let stackLines : core.DartIterable<string> = new core.DartString(new core.DartString(this.stack.toString()).trimRight()).split('\n');
            if (this.stackFilter != null) {
                stackLines = this.stackFilter(stackLines);
            }else {
                stackLines = FlutterError.defaultStackFilter(stackLines);
            }
            buffer.writeAll(stackLines,'\n');
        }
        return new core.DartString(buffer.toString()).trimRight();
    }
}

export namespace FlutterError {
    export type Constructors = core.AssertionError.Constructors | 'FlutterError';
    export type Interface = Omit<FlutterError, Constructors>;
}
@DartClass
export class FlutterError extends core.AssertionError {
    constructor(message : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlutterError(message : string) {
        super.AssertionError(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get message() : string {
        return super.message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.message;
    }
    private static __$onError : (details : FlutterErrorDetails) => any;
    static get onError() : (details : FlutterErrorDetails) => any { 
        if (this.__$onError===undefined) {
            this.__$onError = FlutterError.dumpErrorToConsole.bind(this);
        }
        return this.__$onError;
    }
    static set onError(__$value : (details : FlutterErrorDetails) => any)  { 
        this.__$onError = __$value;
    }

    private static __$_errorCount : number;
    static get _errorCount() : number { 
        if (this.__$_errorCount===undefined) {
            this.__$_errorCount = 0;
        }
        return this.__$_errorCount;
    }
    static set _errorCount(__$value : number)  { 
        this.__$_errorCount = __$value;
    }

    static resetErrorCount() : any {
        FlutterError._errorCount = 0;
    }
    private static __$wrapWidth : number;
    static get wrapWidth() : number { 
        if (this.__$wrapWidth===undefined) {
            this.__$wrapWidth = 100;
        }
        return this.__$wrapWidth;
    }

    static dumpErrorToConsole(details : FlutterErrorDetails,_namedArguments? : {forceReport? : boolean}) : any {
        let {forceReport} = Object.assign({
            "forceReport" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (details != null); */;
        /* TODO (AssertStatementImpl) : assert (details.exception != null); */;
        let reportError : boolean = details.silent != true;
        /* TODO (AssertStatementImpl) : assert (() {reportError = true; return true;}()); */;
        if (!reportError && !forceReport) return;
        if (FlutterError._errorCount == 0 || forceReport) {
            let header : string = new core.DartString(`══╡ EXCEPTION CAUGHT BY ${details.library} ╞`).toUpperCase();
            let footer : string = op(Op.TIMES,'═',FlutterError.wrapWidth);
            lib3.properties.debugPrint(`${header}${op(Op.TIMES,"═",(new core.DartString(footer).length - new core.DartString(header).length))}`);
            let verb : string = `thrown${details.context != null ? ` ${details.context}` : ""}`;
            if (is(details.exception, core.NullThrownError)) {
                lib3.properties.debugPrint(`The null value was ${verb}.`,{
                    wrapWidth : FlutterError.wrapWidth});
            }else if (is(details.exception, "number")) {
                lib3.properties.debugPrint(`The number ${details.exception} was ${verb}.`,{
                    wrapWidth : FlutterError.wrapWidth});
            }else {
                let errorName : string;
                if (is(details.exception, core.AssertionError)) {
                    errorName = 'assertion';
                }else if (is(details.exception, "string")) {
                    errorName = 'message';
                }else if (is(details.exception, core.DartError) || is(details.exception, core.Exception)) {
                    errorName = `${details.exception.runtimeType}`;
                }else {
                    errorName = `${details.exception.runtimeType} object`;
                }
                let prefix : string = `${details.exception.runtimeType}: `;
                let message : string = details.exceptionAsString();
                if (new core.DartString(message).startsWith(prefix)) message = new core.DartString(message).substring(new core.DartString(prefix).length);
                lib3.properties.debugPrint(`The following ${errorName} was ${verb}:\n${message}`,{
                    wrapWidth : FlutterError.wrapWidth});
            }
            let stackLines : core.DartIterable<string> = (details.stack != null) ? new core.DartString(new core.DartString(details.stack.toString()).trimRight()).split('\n') : null;
            if ((is(details.exception, core.AssertionError)) && (isNot(details.exception, FlutterError))) {
                let ourFault : boolean = true;
                if (stackLines != null) {
                    let stackList : core.DartList<string> = stackLines.take(2).toList();
                    if (stackList.length >= 2) {
                        let throwPattern : core.DartRegExp = core.DartRegExp('^#0 +_AssertionError._throwNew \(dart:.+\)$');
                        let assertPattern : core.DartRegExp = core.DartRegExp('^#1 +[^(]+ \((.+?):([0-9]+)(?::[0-9]+)?\)$');
                        if (throwPattern.hasMatch(stackList[0])) {
                            let assertMatch : core.DartMatch = assertPattern.firstMatch(stackList[1]);
                            if (assertMatch != null) {
                                /* TODO (AssertStatementImpl) : assert (assertMatch.groupCount == 2); */;
                                let ourLibraryPattern : core.DartRegExp = core.DartRegExp('^package:flutter/');
                                ourFault = ourLibraryPattern.hasMatch(assertMatch.group(1));
                            }
                        }
                    }
                }
                if (ourFault) {
                    lib3.properties.debugPrint('\nEither the assertion indicates an error in the framework itself, or we should ' + 'provide substantially more information in this error message to help you determine ' + 'and fix the underlying cause.',{
                        wrapWidth : FlutterError.wrapWidth});
                    lib3.properties.debugPrint('In either case, please report this assertion by filing a bug on GitHub:',{
                        wrapWidth : FlutterError.wrapWidth});
                    lib3.properties.debugPrint('  https://github.com/flutter/flutter/issues/new?template=BUG.md');
                }
            }
            if (details.stack != null) {
                lib3.properties.debugPrint('\nWhen the exception was thrown, this was the stack:',{
                    wrapWidth : FlutterError.wrapWidth});
                if (details.stackFilter != null) {
                    stackLines = details.stackFilter(stackLines);
                }else {
                    stackLines = FlutterError.defaultStackFilter(stackLines);
                }
                for(let line of stackLines) lib3.properties.debugPrint(line,{
                    wrapWidth : FlutterError.wrapWidth});
            }
            if (details.informationCollector != null) {
                let information : core.DartStringBuffer = core.DartStringBuffer();
                details.informationCollector(information);
                lib3.properties.debugPrint(`\n${new core.DartString(information.toString()).trimRight()}`,{
                    wrapWidth : FlutterError.wrapWidth});
            }
            lib3.properties.debugPrint(footer);
        }else {
            lib3.properties.debugPrint(`Another exception was thrown: ${new core.DartString(new core.DartString(details.exceptionAsString()).split("\n")[0]).trimLeft()}`);
        }
        FlutterError._errorCount += 1;
    }
    static defaultStackFilter(frames : core.DartIterable<string>) : core.DartIterable<string> {
        let filteredPackages : core.DartList<string> = new core.DartList.literal<string>('dart:async-patch','dart:async','package:stack_trace');
        let filteredClasses : core.DartList<string> = new core.DartList.literal<string>('_AssertionError','_FakeAsync','_FrameCallbackEntry');
        let stackParser : core.DartRegExp = core.DartRegExp('^#[0-9]+ +([^.]+).* \(([^/\\]*)[/\\].+:[0-9]+(?::[0-9]+)?\)$');
        let packageParser : core.DartRegExp = core.DartRegExp('^([^:]+):(.+)$');
        let result : core.DartList<string> = new core.DartList.literal<string>();
        let skipped : core.DartList<string> = new core.DartList.literal<string>();
        for(let line of frames) {
            let match : core.DartMatch = stackParser.firstMatch(line);
            if (match != null) {
                /* TODO (AssertStatementImpl) : assert (match.groupCount == 2); */;
                if (filteredPackages.contains(match.group(2))) {
                    let packageMatch : core.DartMatch = packageParser.firstMatch(match.group(2));
                    if (packageMatch != null && packageMatch.group(1) == 'package') {
                        skipped.add(`package ${packageMatch.group(2)}`);
                    }else {
                        skipped.add(`package ${match.group(2)}`);
                    }
                    continue;
                }
                if (filteredClasses.contains(match.group(1))) {
                    skipped.add(`class ${match.group(1)}`);
                    continue;
                }
            }
            result.add(line);
        }
        if (skipped.length == 1) {
            result.add(`(elided one frame from ${skipped.single})`);
        }else if (skipped.length > 1) {
            let where : core.DartList<string> = op(Op.LT,core.DartSet<E>,string);
            ((_) : any =>  {
                {
                    sort();
                    return _;
                }
            })(op(Op.GT,,.from(skipped).toList()));
            if (where.length > 1) where[where.length - 1] = `and ${where.last}`;
            if (where.length > 2) {
                result.add(`(elided ${skipped.length} frames from ${where.join(", ")})`);
            }else {
                result.add(`(elided ${skipped.length} frames from ${where.join(" ")})`);
            }
        }
        return result;
    }
    static reportError(details : FlutterErrorDetails) : any {
        /* TODO (AssertStatementImpl) : assert (details != null); */;
        /* TODO (AssertStatementImpl) : assert (details.exception != null); */;
        if (FlutterError.onError != null) FlutterError.onError(details);
    }
}

export class properties {
}
