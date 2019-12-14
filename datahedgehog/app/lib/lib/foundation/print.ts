/** Library asset:datahedgehog_monitor/lib/lib/foundation/print.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var debugPrintSynchronously : (message : string,_namedArguments? : {wrapWidth? : number}) => any = (message : string,_namedArguments? : {wrapWidth? : number}) : any =>  {
    let {wrapWidth} = Object.assign({
    }, _namedArguments );
    if (wrapWidth != null) {
        core.print(new core.DartString(message).split('\n').expand((line : string) =>  {
            return debugWordWrap(line,wrapWidth);
        }).join('\n'));
    }else {
        core.print(message);
    }
};
export var debugPrintThrottled : (message : string,_namedArguments? : {wrapWidth? : number}) => any = (message : string,_namedArguments? : {wrapWidth? : number}) : any =>  {
    let {wrapWidth} = Object.assign({
    }, _namedArguments );
    let messageLines : core.DartList<string> = (((_536_)=>(!!_536_)?new core.DartString(_536_).split('\n'):null)(message) || new core.DartList.literal<string>('null'));
    if (wrapWidth != null) {
        properties._debugPrintBuffer.addAll(messageLines.expand((line : string) =>  {
            return debugWordWrap(line,wrapWidth);
        }));
    }else {
        properties._debugPrintBuffer.addAll(messageLines);
    }
    if (!properties._debugPrintScheduled) _debugPrintTask();
};
export var _debugPrintTask : () => any = () : any =>  {
    properties._debugPrintScheduled = false;
    if (op(Op.GT,properties._debugPrintStopwatch.elapsed,properties._kDebugPrintPauseTime)) {
        properties._debugPrintStopwatch.stop();
        properties._debugPrintStopwatch.reset();
        properties._debugPrintedCharacters = 0;
    }
    while (properties._debugPrintedCharacters < properties._kDebugPrintCapacity && properties._debugPrintBuffer.isNotEmpty){
        let line : string = properties._debugPrintBuffer.removeFirst();
        properties._debugPrintedCharacters += new core.DartString(line).length;
        core.print(line);
    }
    if (properties._debugPrintBuffer.isNotEmpty) {
        properties._debugPrintScheduled = true;
        properties._debugPrintedCharacters = 0;
        async.DartTimer(properties._kDebugPrintPauseTime,_debugPrintTask);
        properties._debugPrintCompleter = ( properties._debugPrintCompleter ) || ( op(Op.LT,async.DartCompleter<T>,) );
        op(Op.GT,,());
    }else {
        properties._debugPrintStopwatch.start();
        ((_537_)=>(!!_537_)?_537_.complete():null)(properties._debugPrintCompleter);
        properties._debugPrintCompleter = null;
    }
};
export var value : () => any = () =>  {
};
export var debugWordWrap : (message : string,width : number,_namedArguments? : {wrapIndent? : string}) => core.DartIterable<string> = (message : string,width : number,_namedArguments? : {wrapIndent? : string}) : core.DartIterable<string> => core.iter<string>(()=>(function*()  {
    let {wrapIndent} = Object.assign({
        "wrapIndent" : ''}, _namedArguments );
    if (new core.DartString(message).length < width || new core.DartString(message).trimLeft()[0] == '#') {
        yield message;
        return;
    }
    let prefixMatch : core.DartMatch = properties._indentPattern.matchAsPrefix(message);
    let prefix : string = wrapIndent + op(Op.TIMES,' ',new core.DartString(prefixMatch.group(0)).length);
    let start : number = 0;
    let startForLengthCalculations : number = 0;
    let addPrefix : boolean = false;
    let index : number = new core.DartString(prefix).length;
    let mode : _WordWrapParseMode = _WordWrapParseMode.inSpace;
    let lastWordStart : number;
    let lastWordEnd : number;
    while (true){
        switch (mode) {
            case _WordWrapParseMode.inSpace:
                while ((index < new core.DartString(message).length) && (message[index] == ' '))index += 1;
                lastWordStart = index;
                mode = _WordWrapParseMode.inWord;
                break;
            case _WordWrapParseMode.inWord:
                while ((index < new core.DartString(message).length) && (message[index] != ' '))index += 1;
                mode = _WordWrapParseMode.atBreak;
                break;
            case _WordWrapParseMode.atBreak:
                if ((index - startForLengthCalculations > width) || (index == new core.DartString(message).length)) {
                    if ((index - startForLengthCalculations <= width) || (lastWordEnd == null)) {
                        lastWordEnd = index;
                    }
                    if (addPrefix) {
                        yield prefix + new core.DartString(message).substring(start,lastWordEnd);
                    }else {
                        yield new core.DartString(message).substring(start,lastWordEnd);
                        addPrefix = true;
                    }
                    if (lastWordEnd >= new core.DartString(message).length) return;
                    if (lastWordEnd == index) {
                        while ((index < new core.DartString(message).length) && (message[index] == ' '))index += 1;
                        start = index;
                        mode = _WordWrapParseMode.inWord;
                    }else {
                        /* TODO (AssertStatementImpl) : assert (lastWordStart > lastWordEnd); */;
                        start = lastWordStart;
                        mode = _WordWrapParseMode.atBreak;
                    }
                    startForLengthCalculations = start - new core.DartString(prefix).length;
                    /* TODO (AssertStatementImpl) : assert (addPrefix); */;
                    lastWordEnd = null;
                }else {
                    lastWordEnd = index;
                    mode = _WordWrapParseMode.inSpace;
                }
                break;
        }
    }
}).call(this));
export enum _WordWrapParseMode {
    inSpace,
    inWord,
    atBreak
}

export class properties {
    private static __$debugPrint : (message : string,_namedArguments : {wrapWidth? : number?}) => any;
    static get debugPrint() : (message : string,_namedArguments : {wrapWidth? : number?}) => any { 
        if (this.__$debugPrint===undefined) {
            this.__$debugPrint = debugPrintThrottled;
        }
        return this.__$debugPrint;
    }
    static set debugPrint(__$value : (message : string,_namedArguments : {wrapWidth? : number?}) => any)  { 
        this.__$debugPrint = __$value;
    }

    private static __$_debugPrintedCharacters : number;
    static get _debugPrintedCharacters() : number { 
        if (this.__$_debugPrintedCharacters===undefined) {
            this.__$_debugPrintedCharacters = 0;
        }
        return this.__$_debugPrintedCharacters;
    }
    static set _debugPrintedCharacters(__$value : number)  { 
        this.__$_debugPrintedCharacters = __$value;
    }

    private static __$_kDebugPrintCapacity : number;
    static get _kDebugPrintCapacity() : number { 
        if (this.__$_kDebugPrintCapacity===undefined) {
            this.__$_kDebugPrintCapacity = 12 * 1024;
        }
        return this.__$_kDebugPrintCapacity;
    }
    static set _kDebugPrintCapacity(__$value : number)  { 
        this.__$_kDebugPrintCapacity = __$value;
    }

    private static __$_kDebugPrintPauseTime : core.DartDuration;
    static get _kDebugPrintPauseTime() : core.DartDuration { 
        if (this.__$_kDebugPrintPauseTime===undefined) {
            this.__$_kDebugPrintPauseTime = core.DartDuration({
                seconds : 1});
        }
        return this.__$_kDebugPrintPauseTime;
    }
    static set _kDebugPrintPauseTime(__$value : core.DartDuration)  { 
        this.__$_kDebugPrintPauseTime = __$value;
    }

    private static __$_debugPrintBuffer : collection.Queue<string>;
    static get _debugPrintBuffer() : collection.Queue<string> { 
        if (this.__$_debugPrintBuffer===undefined) {
            this.__$_debugPrintBuffer = collection.Queue();
        }
        return this.__$_debugPrintBuffer;
    }
    static set _debugPrintBuffer(__$value : collection.Queue<string>)  { 
        this.__$_debugPrintBuffer = __$value;
    }

    private static __$_debugPrintStopwatch : core.DartStopwatch;
    static get _debugPrintStopwatch() : core.DartStopwatch { 
        if (this.__$_debugPrintStopwatch===undefined) {
            this.__$_debugPrintStopwatch = core.DartStopwatch();
        }
        return this.__$_debugPrintStopwatch;
    }
    static set _debugPrintStopwatch(__$value : core.DartStopwatch)  { 
        this.__$_debugPrintStopwatch = __$value;
    }

    private static __$void : async.DartCompleter<any>;
    static get void() : async.DartCompleter<any> { 
        return this.__$void;
    }
    static set void(__$value : async.DartCompleter<any>)  { 
        this.__$void = __$value;
    }

    private static __$_debugPrintCompleter;
    static get _debugPrintCompleter() { 
        return this.__$_debugPrintCompleter;
    }
    static set _debugPrintCompleter(__$value : any)  { 
        this.__$_debugPrintCompleter = __$value;
    }

    private static __$_debugPrintScheduled : boolean;
    static get _debugPrintScheduled() : boolean { 
        if (this.__$_debugPrintScheduled===undefined) {
            this.__$_debugPrintScheduled = false;
        }
        return this.__$_debugPrintScheduled;
    }
    static set _debugPrintScheduled(__$value : boolean)  { 
        this.__$_debugPrintScheduled = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    static get debugPrintDone() {
        return (((t)=>(!!t)?t.future:null)(properties._debugPrintCompleter) || op(Op.LT,async.Future<T>,));
    }
    private static __$_indentPattern : core.DartRegExp;
    static get _indentPattern() : core.DartRegExp { 
        if (this.__$_indentPattern===undefined) {
            this.__$_indentPattern = core.DartRegExp('^ *(?:[-+*] |[0-9]+[.):] )?');
        }
        return this.__$_indentPattern;
    }
    static set _indentPattern(__$value : core.DartRegExp)  { 
        this.__$_indentPattern = __$value;
    }

}
