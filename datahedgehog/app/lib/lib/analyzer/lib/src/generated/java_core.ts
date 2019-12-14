/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/java_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var format : (pattern : string,arg0? : any,arg1? : any,arg2? : any,arg3? : any,arg4? : any,arg5? : any,arg6? : any,arg7? : any) => string = (pattern : string,arg0? : any,arg1? : any,arg2? : any,arg3? : any,arg4? : any,arg5? : any,arg6? : any,arg7? : any) : string =>  {
    return formatList(pattern,new core.DartList.literal(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7));
};
export var formatList : (pattern : string,arguments : core.DartList<core.DartObject>) => string = (pattern : string,arguments : core.DartList<core.DartObject>) : string =>  {
    if (arguments == null || arguments.isEmpty) {
        /* TODO (AssertStatementImpl) : assert (!pattern.contains(new RegExp(r'\{(\d+)\}'))); */;
        return pattern;
    }
    return new core.DartString(pattern).replaceAllMapped(new core.DartRegExp('\{(\d+)\}'),(match : any) =>  {
        let indexStr : string = match.group(1);
        let index : number = core.DartInt.parse(indexStr);
        let arg : core.DartObject = arguments[index];
        /* TODO (AssertStatementImpl) : assert (arg != null); */;
        return ((_262_)=>(!!_262_)?_262_.toString():null)(arg);
    });
};
export var _printf : (fmt : string,args : core.DartList<any>) => string = (fmt : string,args : core.DartList<any>) : string =>  {
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    let markFound : boolean = false;
    let argIndex : number = 0;
    for(let i : number = 0; i < new core.DartString(fmt).length; i++){
        let c : number = new core.DartString(fmt).codeUnitAt(i);
        if (c == 37) {
            if (markFound) {
                sb.writeCharCode(c);
                markFound = false;
            }else {
                markFound = true;
            }
            continue;
        }
        if (markFound) {
            markFound = false;
            if (c == 100) {
                sb.write(args[argIndex++]);
                continue;
            }
            if (c == 115) {
                sb.write(args[argIndex++]);
                continue;
            }
            throw new core.ArgumentError(`[${fmt}][${i}] = 0x${new core.DartInt(c).toRadixString(16)}`);
        }else {
            sb.writeCharCode(c);
        }
    }
    return sb.toString();
};
export namespace Character {
    export type Constructors = 'Character';
    export type Interface = Omit<Character, Constructors>;
}
@DartClass
export class Character {
    private static __$MAX_VALUE : number;
    static get MAX_VALUE() : number { 
        if (this.__$MAX_VALUE===undefined) {
            this.__$MAX_VALUE = 65535;
        }
        return this.__$MAX_VALUE;
    }

    private static __$MAX_CODE_POINT : number;
    static get MAX_CODE_POINT() : number { 
        if (this.__$MAX_CODE_POINT===undefined) {
            this.__$MAX_CODE_POINT = 1114111;
        }
        return this.__$MAX_CODE_POINT;
    }

    private static __$MIN_SUPPLEMENTARY_CODE_POINT : number;
    static get MIN_SUPPLEMENTARY_CODE_POINT() : number { 
        if (this.__$MIN_SUPPLEMENTARY_CODE_POINT===undefined) {
            this.__$MIN_SUPPLEMENTARY_CODE_POINT = 65536;
        }
        return this.__$MIN_SUPPLEMENTARY_CODE_POINT;
    }

    private static __$MIN_LOW_SURROGATE : number;
    static get MIN_LOW_SURROGATE() : number { 
        if (this.__$MIN_LOW_SURROGATE===undefined) {
            this.__$MIN_LOW_SURROGATE = 56320;
        }
        return this.__$MIN_LOW_SURROGATE;
    }

    private static __$MIN_HIGH_SURROGATE : number;
    static get MIN_HIGH_SURROGATE() : number { 
        if (this.__$MIN_HIGH_SURROGATE===undefined) {
            this.__$MIN_HIGH_SURROGATE = 55296;
        }
        return this.__$MIN_HIGH_SURROGATE;
    }

    static digit(codePoint : number,radix : number) : number {
        if (radix != 16) {
            throw new core.ArgumentError("only radix == 16 is supported");
        }
        if (48 <= codePoint && codePoint <= 57) {
            return codePoint - 48;
        }
        if (65 <= codePoint && codePoint <= 70) {
            return 10 + (codePoint - 65);
        }
        if (97 <= codePoint && codePoint <= 102) {
            return 10 + (codePoint - 97);
        }
        return -1;
    }
    static isDigit(c : number) : boolean {
        return c >= 48 && c <= 57;
    }
    static isLetter(c : number) : boolean {
        return c >= 65 && c <= 90 || c >= 97 && c <= 122;
    }
    static isLetterOrDigit(c : number) : boolean {
        return Character.isLetter(c) || Character.isDigit(c);
    }
    static isWhitespace(c : number) : boolean {
        return c == 9 || c == 32 || c == 10 || c == 13;
    }
    static toChars(codePoint : number) : string {
        if (codePoint < 0 || codePoint > Character.MAX_CODE_POINT) {
            throw new core.ArgumentError();
        }
        if (codePoint < Character.MIN_SUPPLEMENTARY_CODE_POINT) {
            return new core.DartString.fromCharCode(codePoint).valueOf();
        }
        let offset : number = codePoint - Character.MIN_SUPPLEMENTARY_CODE_POINT;
        let c0 : number = ((offset & 2147483647) >> 10) + Character.MIN_HIGH_SURROGATE;
        let c1 : number = (offset & 1023) + Character.MIN_LOW_SURROGATE;
        return new core.DartString.fromCharCodes(new core.DartList.literal(c0,c1)).valueOf();
    }
    constructor() {
    }
    @defaultConstructor
    Character() {
    }
}

export namespace Enum {
    export type Constructors = 'Enum';
    export type Interface<E extends Enum<E>> = Omit<Enum<E extends Enum<E>>, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class Enum<E extends Enum<E>> implements core.DartComparable.Interface<E> {
    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    Enum(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    get hashCode() : number {
        return this.ordinal;
    }
    compareTo(other : E) : number {
        return this.ordinal - other.ordinal;
    }
    toString() : string {
        return this.name;
    }
}

export namespace PrintWriter {
    export type Constructors = 'PrintWriter';
    export type Interface = Omit<PrintWriter, Constructors>;
}
@DartClass
export class PrintWriter {
    newLine() : void {
        this.print('\n');
    }
    @Abstract
    print(x : any) : void{ throw 'abstract'}
    printf(fmt : string,args : core.DartList<any>) : void {
        this.print(_printf(fmt,args));
    }
    println(s : string) : void {
        this.print(s);
        this.newLine();
    }
    constructor() {
    }
    @defaultConstructor
    PrintWriter() {
    }
}

export namespace PrintStringWriter {
    export type Constructors = PrintWriter.Constructors | 'PrintStringWriter';
    export type Interface = Omit<PrintStringWriter, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class PrintStringWriter extends PrintWriter {
    _sb : core.DartStringBuffer;

    print(x : any) : void {
        this._sb.write(x);
    }
    toString() : string {
        return this._sb.toString();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrintStringWriter() {
        this._sb = new core.DartStringBuffer();
    }
}

export class properties {
}
