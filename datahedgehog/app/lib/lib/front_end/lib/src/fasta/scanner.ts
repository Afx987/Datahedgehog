/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "./../scanner/token";
import * as lib5 from "./scanner/utf8_bytes_scanner";
import * as lib6 from "./scanner/string_scanner";
import * as lib7 from "./scanner/recover";

export var scan : (bytes : core.DartList<number>,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,recover? : (bytes : core.DartList<number>,tokens : lib4.Token,lineStarts : core.DartList<number>) => lib4.Token}) => ScannerResult = (bytes : core.DartList<number>,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,recover? : (bytes : core.DartList<number>,tokens : lib4.Token,lineStarts : core.DartList<number>) => lib4.Token}) : ScannerResult =>  {
    let {includeComments,scanGenericMethodComments,recover} = Object.assign({
        "includeComments" : false,
        "scanGenericMethodComments" : false}, _namedArguments );
    if (bytes.last != 0) {
        throw new core.ArgumentError("[bytes]: the last byte must be null.");
    }
    let scanner : Scanner = new lib5.Utf8BytesScanner(bytes,{
        includeComments : includeComments,scanGenericMethodComments : scanGenericMethodComments});
    return _tokenizeAndRecover(scanner,recover,{
        bytes : bytes});
};
export var scanString : (source : string,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,scanLazyAssignmentOperators? : boolean,recover? : (bytes : core.DartList<number>,tokens : lib4.Token,lineStarts : core.DartList<number>) => lib4.Token}) => ScannerResult = (source : string,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,scanLazyAssignmentOperators? : boolean,recover? : (bytes : core.DartList<number>,tokens : lib4.Token,lineStarts : core.DartList<number>) => lib4.Token}) : ScannerResult =>  {
    let {includeComments,scanGenericMethodComments,scanLazyAssignmentOperators,recover} = Object.assign({
        "includeComments" : false,
        "scanGenericMethodComments" : false,
        "scanLazyAssignmentOperators" : false}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (source != null, 'source must not be null'); */;
    let scanner : lib6.StringScanner = new lib6.StringScanner(source,{
        includeComments : includeComments,scanGenericMethodComments : scanGenericMethodComments,scanLazyAssignmentOperators : scanLazyAssignmentOperators});
    return _tokenizeAndRecover(scanner,recover,{
        source : source});
};
export var _tokenizeAndRecover : (scanner : Scanner,recover : (bytes : core.DartList<number>,tokens : lib4.Token,lineStarts : core.DartList<number>) => lib4.Token,_namedArguments? : {bytes? : core.DartList<number>,source? : string}) => ScannerResult = (scanner : Scanner,recover : (bytes : core.DartList<number>,tokens : lib4.Token,lineStarts : core.DartList<number>) => lib4.Token,_namedArguments? : {bytes? : core.DartList<number>,source? : string}) : ScannerResult =>  {
    let {bytes,source} = Object.assign({
    }, _namedArguments );
    let tokens : lib4.Token = scanner.tokenize();
    if (scanner.hasErrors) {
        if (bytes == null) bytes = convert.properties.UTF8.encode(source);
        recover = ( recover ) || ( lib7.defaultRecoveryStrategy );
        tokens = recover(bytes,tokens,scanner.lineStarts);
    }
    return new ScannerResult(tokens,scanner.lineStarts,scanner.hasErrors);
};
export namespace Scanner {
    export type Constructors = 'Scanner';
    export type Interface = Omit<Scanner, Constructors>;
}
@DartClass
export class Scanner {
    @AbstractProperty
    get hasErrors() : boolean{ throw 'abstract'}
    @AbstractProperty
    get lineStarts() : core.DartList<number>{ throw 'abstract'}
    @Abstract
    tokenize() : lib4.Token{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Scanner() {
    }
}

export namespace ScannerResult {
    export type Constructors = 'ScannerResult';
    export type Interface = Omit<ScannerResult, Constructors>;
}
@DartClass
export class ScannerResult {
    tokens : lib4.Token;

    lineStarts : core.DartList<number>;

    hasErrors : boolean;

    constructor(tokens : lib4.Token,lineStarts : core.DartList<number>,hasErrors : boolean) {
    }
    @defaultConstructor
    ScannerResult(tokens : lib4.Token,lineStarts : core.DartList<number>,hasErrors : boolean) {
        this.tokens = tokens;
        this.lineStarts = lineStarts;
        this.hasErrors = hasErrors;
    }
}

export class properties {
    private static __$unicodeReplacementCharacter : number;
    static get unicodeReplacementCharacter() : number { 
        if (this.__$unicodeReplacementCharacter===undefined) {
            this.__$unicodeReplacementCharacter = convert.properties.UNICODE_REPLACEMENT_CHARACTER_RUNE;
        }
        return this.__$unicodeReplacementCharacter;
    }
    static set unicodeReplacementCharacter(__$value : number)  { 
        this.__$unicodeReplacementCharacter = __$value;
    }

}
