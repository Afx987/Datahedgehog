/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/fasta_codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var _formatExpectedClassBodyToSkip : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedClassBodyToSkip,{
        message : `Expected a class body, but got '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatStackOverflow : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeStackOverflow,{
        message : "Stack overflow.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatUnexpectedToken : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeUnexpectedToken,{
        message : `Unexpected token '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatAwaitAsIdentifier : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeAwaitAsIdentifier,{
        message : "'await' can't be used as an identifier in 'async', 'async*', or 'sync*' methods.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatFactoryNotSync : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeFactoryNotSync,{
        message : "Factories can't use 'async', 'async*', or 'sync*'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatYieldNotGenerator : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeYieldNotGenerator,{
        message : "'yield' can only be used in 'sync*' or 'async*' methods.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatSetterNotSync : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeSetterNotSync,{
        message : "Setters can't use 'async', 'async*', or 'sync*'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatNonAsciiWhitespace : (uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage = (uri : lib3.Uri,charOffset : number,codePoint : number) : FastaMessage =>  {
    let unicode : string = `(U+${new core.DartString(new core.DartInt(codePoint).toRadixString(16)).padLeft(4,'0')})`;
    return new FastaMessage(uri,charOffset,properties.codeNonAsciiWhitespace,{
        message : `The non-ASCII space character ${unicode} can only be used in strings and comments.`,arguments : new core.DartMap.literal([
            ['codePoint',codePoint]])});
};
export var _formatExpectedIdentifier : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedIdentifier,{
        message : `'${lexeme}' is a reserved word and can't be used here.`,tip : "Try using a different name.",arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatExpectedBlockToSkip : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeExpectedBlockToSkip,{
        message : "Expected a function body or '=>'.",tip : "Try adding {}.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatRequiredParameterWithDefault : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeRequiredParameterWithDefault,{
        message : "Non-optional parameters can't have a default value.",tip : "Try removing the default value or making the parameter optional.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatUnspecified : (uri : lib3.Uri,charOffset : number,string : string) => FastaMessage = (uri : lib3.Uri,charOffset : number,string : string) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeUnspecified,{
        message : `${string}`,arguments : new core.DartMap.literal([
            ['string',string]])});
};
export var _formatMissingExponent : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeMissingExponent,{
        message : "Numbers in exponential notation should always contain an exponent (an integer number with an optional sign).",tip : "Make sure there is an exponent, and remove any whitespace before it.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatPositionalParameterWithEquals : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codePositionalParameterWithEquals,{
        message : "Positional optional parameters can't use ':' to specify a default value.",tip : "Try replacing ':' with '='.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatUnexpectedDollarInString : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeUnexpectedDollarInString,{
        message : "A '$' has special meaning inside a string, and must be followed by an identifier or an expression in curly braces ({}).",tip : "Try adding a backslash () to escape the '$'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExtraneousModifier : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExtraneousModifier,{
        message : `Can't have modifier '${lexeme}' here.`,tip : `Try removing '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatBuiltInIdentifierInDeclaration : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeBuiltInIdentifierInDeclaration,{
        message : `Can't use '${lexeme}' as a name here.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatEmptyOptionalParameterList : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeEmptyOptionalParameterList,{
        message : "Optional parameter lists cannot be empty.",tip : "Try adding an optional parameter to the list.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatUnterminatedString : (uri : lib3.Uri,charOffset : number,string : string) => FastaMessage = (uri : lib3.Uri,charOffset : number,string : string) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeUnterminatedString,{
        message : `String must end with ${string}.`,arguments : new core.DartMap.literal([
            ['string',string]])});
};
export var _formatAwaitNotAsync : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeAwaitNotAsync,{
        message : "'await' can only be used in 'async' or 'async*' methods.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedFunctionBody : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedFunctionBody,{
        message : `Expected a function body, but got '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatExpectedHexDigit : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeExpectedHexDigit,{
        message : "A hex digit (0-9 or A-F) must follow '0x'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatEmptyNamedParameterList : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeEmptyNamedParameterList,{
        message : "Named parameter lists cannot be empty.",tip : "Try adding a named parameter to the list.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatUnsupportedPrefixPlus : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeUnsupportedPrefixPlus,{
        message : "'+' is not a prefix operator. ",tip : "Try removing '+'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedString : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedString,{
        message : `Expected a String, but got '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatTypeAfterVar : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeTypeAfterVar,{
        message : "Can't have both a type and 'var'.",tip : "Try removing 'var.'",arguments : new core.DartMap.literal([
        ])});
};
export var _formatAbstractNotSync : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeAbstractNotSync,{
        message : "Abstract methods can't use 'async', 'async*', or 'sync*'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedDeclaration : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedDeclaration,{
        message : `Expected a declaration, but got '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatAsciiControlCharacter : (uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage = (uri : lib3.Uri,charOffset : number,codePoint : number) : FastaMessage =>  {
    let unicode : string = `(U+${new core.DartString(new core.DartInt(codePoint).toRadixString(16)).padLeft(4,'0')})`;
    return new FastaMessage(uri,charOffset,properties.codeAsciiControlCharacter,{
        message : `The control character ${unicode} can only be used in strings and comments.`,arguments : new core.DartMap.literal([
            ['codePoint',codePoint]])});
};
export var _formatUnmatchedToken : (uri : lib3.Uri,charOffset : number,string : string,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,string : string,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeUnmatchedToken,{
        message : `Can't find '${string}' to match '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['string',string],
            ['token',token]])});
};
export var _formatInvalidSyncModifier : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeInvalidSyncModifier,{
        message : "Invalid modifier 'sync'.",tip : "Try replacing 'sync' with 'sync*'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedOpenParens : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeExpectedOpenParens,{
        message : "Expected '('.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatUnterminatedComment : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeUnterminatedComment,{
        message : "Comment starting with '/*' must end with '*/'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedClassBody : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedClassBody,{
        message : `Expected a class body, but got '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatNonAsciiIdentifier : (uri : lib3.Uri,charOffset : number,character : string,codePoint : number) => FastaMessage = (uri : lib3.Uri,charOffset : number,character : string,codePoint : number) : FastaMessage =>  {
    let unicode : string = `(U+${new core.DartString(new core.DartInt(codePoint).toRadixString(16)).padLeft(4,'0')})`;
    return new FastaMessage(uri,charOffset,properties.codeNonAsciiIdentifier,{
        message : `The non-ASCII character '${character}' (${unicode}) can't be used in identifiers, only in strings and comments.`,tip : "Try using an US-ASCII letter, a digit, '_' (an underscore), or '$' (a dollar sign).",arguments : new core.DartMap.literal([
            ['character',character],
            ['codePoint',codePoint]])});
};
export var _formatExpectedExpression : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedExpression,{
        message : `Expected an expression, but got '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatInvalidAwaitFor : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeInvalidAwaitFor,{
        message : "'await' is only supported in methods with an 'async' or 'async*' body modifier.",tip : "Try adding 'async' or 'async*' to the method body or removing the 'await' keyword.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedType : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeExpectedType,{
        message : `Expected a type, but got '${lexeme}'.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatUnterminatedToken : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeUnterminatedToken,{
        message : "Incomplete token.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedButGot : (uri : lib3.Uri,charOffset : number,string : string) => FastaMessage = (uri : lib3.Uri,charOffset : number,string : string) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeExpectedButGot,{
        message : `Expected '${string}' before this.`,tip : "DONT_KNOW_HOW_TO_FIX,",arguments : new core.DartMap.literal([
            ['string',string]])});
};
export var _formatAwaitForNotAsync : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeAwaitForNotAsync,{
        message : "Asynchronous for-loop can only be used in 'async' or 'async*' methods.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatEncoding : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeEncoding,{
        message : "Unable to decode bytes as UTF-8.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatAsyncAsIdentifier : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeAsyncAsIdentifier,{
        message : "'async' can't be used as an identifier in 'async', 'async*', or 'sync*' methods.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatYieldAsIdentifier : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeYieldAsIdentifier,{
        message : "'yield' can't be used as an identifier in 'async', 'async*', or 'sync*' methods.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatOnlyTry : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeOnlyTry,{
        message : "Try block should be followed by 'on', 'catch', or 'finally' block.",tip : "Did you forget to add a 'finally' block?",arguments : new core.DartMap.literal([
        ])});
};
export var _formatInvalidInlineFunctionType : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeInvalidInlineFunctionType,{
        message : "Invalid inline function type.",tip : "Try changing the inline function type (as in 'int f()') to a prefixed function type using the `Function` keyword (as in 'int Function() f').",arguments : new core.DartMap.literal([
        ])});
};
export var _formatExpectedBody : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeExpectedBody,{
        message : "Expected a function body or '=>'.",tip : "Try adding {}.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatTypeRequired : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeTypeRequired,{
        message : "A type or modifier is required here.",tip : "Try adding a type, 'var', 'const', or 'final'.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatInvalidVoid : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeInvalidVoid,{
        message : "Type 'void' can't be used here because it isn't a return type.",tip : "Try removing 'void' keyword or replace it with 'var', 'final', or a type.",arguments : new core.DartMap.literal([
        ])});
};
export var _formatBuiltInIdentifierAsType : (uri : lib3.Uri,charOffset : number,token : any) => FastaMessage = (uri : lib3.Uri,charOffset : number,token : any) : FastaMessage =>  {
    let lexeme : string = token.lexeme;
    return new FastaMessage(uri,charOffset,properties.codeBuiltInIdentifierAsType,{
        message : `Can't use '${lexeme}' as a type.`,arguments : new core.DartMap.literal([
            ['token',token]])});
};
export var _formatGeneratorReturnsValue : (uri : lib3.Uri,charOffset : number) => FastaMessage = (uri : lib3.Uri,charOffset : number) : FastaMessage =>  {
    return new FastaMessage(uri,charOffset,properties.codeGeneratorReturnsValue,{
        message : "'sync*' and 'async*' can't return a value.",arguments : new core.DartMap.literal([
        ])});
};
export namespace FastaMessage {
    export type Constructors = 'FastaMessage';
    export type Interface = Omit<FastaMessage, Constructors>;
}
@DartClass
export class FastaMessage {
    uri : lib3.Uri;

    charOffset : number;

    message : string;

    tip : string;

    code : FastaCode<any>;

    arguments : core.DartMap<string,any>;

    constructor(uri : lib3.Uri,charOffset : number,code : FastaCode<any>,_namedArguments? : {message? : string,tip? : string,arguments? : core.DartMap<string,any>}) {
    }
    @defaultConstructor
    FastaMessage(uri : lib3.Uri,charOffset : number,code : FastaCode<any>,_namedArguments? : {message? : string,tip? : string,arguments? : core.DartMap<string,any>}) {
        let {message,tip,arguments} = Object.assign({
        }, _namedArguments );
        this.uri = uri;
        this.charOffset = charOffset;
        this.code = code;
        this.message = message;
        this.tip = tip;
        this.arguments = arguments;
    }
}

export namespace FastaCode {
    export type Constructors = 'FastaCode';
    export type Interface<T> = Omit<FastaCode<T>, Constructors>;
}
@DartClass
export class FastaCode<T> {
    name : string;

    template : string;

    tip : string;

    analyzerCode : string;

    dart2jsCode : string;

    format : T;

    constructor(name : string,_namedArguments? : {template? : string,tip? : string,analyzerCode? : string,dart2jsCode? : string,format? : T}) {
    }
    @defaultConstructor
    FastaCode(name : string,_namedArguments? : {template? : string,tip? : string,analyzerCode? : string,dart2jsCode? : string,format? : T}) {
        let {template,tip,analyzerCode,dart2jsCode,format} = Object.assign({
        }, _namedArguments );
        this.name = name;
        this.template = template;
        this.tip = tip;
        this.analyzerCode = analyzerCode;
        this.dart2jsCode = dart2jsCode;
        this.format = format;
    }
    toString() : string {
        return this.name;
    }
}

export class properties {
    private static __$codeEmptyOptionalParameterList : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeEmptyOptionalParameterList() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeEmptyOptionalParameterList===undefined) {
            this.__$codeEmptyOptionalParameterList = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("EmptyOptionalParameterList",{
                template : "Optional parameter lists cannot be empty.",tip : "Try adding an optional parameter to the list.",dart2jsCode : "EMPTY_OPTIONAL_PARAMETER_LIST",format : _formatEmptyOptionalParameterList});
        }
        return this.__$codeEmptyOptionalParameterList;
    }
    static set codeEmptyOptionalParameterList(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeEmptyOptionalParameterList = __$value;
    }

    private static __$codeNonAsciiIdentifier : FastaCode<(uri : lib3.Uri,charOffset : number,character : string,codePoint : number) => FastaMessage>;
    static get codeNonAsciiIdentifier() : FastaCode<(uri : lib3.Uri,charOffset : number,character : string,codePoint : number) => FastaMessage> { 
        if (this.__$codeNonAsciiIdentifier===undefined) {
            this.__$codeNonAsciiIdentifier = new FastaCode<(uri : lib3.Uri,charOffset : number,character : string,codePoint : number) => FastaMessage>("NonAsciiIdentifier",{
                template : "The non-ASCII character '#character' (#unicode) can't be used in identifiers, only in strings and comments.",tip : "Try using an US-ASCII letter, a digit, '_' (an underscore), or '$' (a dollar sign).",analyzerCode : "ILLEGAL_CHARACTER",dart2jsCode : "BAD_INPUT_CHARACTER",format : _formatNonAsciiIdentifier});
        }
        return this.__$codeNonAsciiIdentifier;
    }
    static set codeNonAsciiIdentifier(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,character : string,codePoint : number) => FastaMessage>)  { 
        this.__$codeNonAsciiIdentifier = __$value;
    }

    private static __$codeExpectedClassBodyToSkip : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedClassBodyToSkip() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedClassBodyToSkip===undefined) {
            this.__$codeExpectedClassBodyToSkip = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedClassBodyToSkip",{
                template : "Expected a class body, but got '#lexeme'.",dart2jsCode : "FASTA_FATAL",format : _formatExpectedClassBodyToSkip});
        }
        return this.__$codeExpectedClassBodyToSkip;
    }
    static set codeExpectedClassBodyToSkip(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedClassBodyToSkip = __$value;
    }

    private static __$codeStackOverflow : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeStackOverflow() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeStackOverflow===undefined) {
            this.__$codeStackOverflow = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("StackOverflow",{
                template : "Stack overflow.",dart2jsCode : "GENERIC",format : _formatStackOverflow});
        }
        return this.__$codeStackOverflow;
    }
    static set codeStackOverflow(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeStackOverflow = __$value;
    }

    private static __$codeUnexpectedToken : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeUnexpectedToken() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeUnexpectedToken===undefined) {
            this.__$codeUnexpectedToken = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("UnexpectedToken",{
                template : "Unexpected token '#lexeme'.",dart2jsCode : "FASTA_FATAL",format : _formatUnexpectedToken});
        }
        return this.__$codeUnexpectedToken;
    }
    static set codeUnexpectedToken(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeUnexpectedToken = __$value;
    }

    private static __$codeAwaitAsIdentifier : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeAwaitAsIdentifier() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeAwaitAsIdentifier===undefined) {
            this.__$codeAwaitAsIdentifier = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("AwaitAsIdentifier",{
                template : "'await' can't be used as an identifier in 'async', 'async*', or 'sync*' methods.",dart2jsCode : "FASTA_IGNORED",format : _formatAwaitAsIdentifier});
        }
        return this.__$codeAwaitAsIdentifier;
    }
    static set codeAwaitAsIdentifier(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeAwaitAsIdentifier = __$value;
    }

    private static __$codeFactoryNotSync : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeFactoryNotSync() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeFactoryNotSync===undefined) {
            this.__$codeFactoryNotSync = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("FactoryNotSync",{
                template : "Factories can't use 'async', 'async*', or 'sync*'.",dart2jsCode : "FASTA_IGNORED",format : _formatFactoryNotSync});
        }
        return this.__$codeFactoryNotSync;
    }
    static set codeFactoryNotSync(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeFactoryNotSync = __$value;
    }

    private static __$codeYieldNotGenerator : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeYieldNotGenerator() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeYieldNotGenerator===undefined) {
            this.__$codeYieldNotGenerator = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("YieldNotGenerator",{
                template : "'yield' can only be used in 'sync*' or 'async*' methods.",dart2jsCode : "FASTA_IGNORED",format : _formatYieldNotGenerator});
        }
        return this.__$codeYieldNotGenerator;
    }
    static set codeYieldNotGenerator(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeYieldNotGenerator = __$value;
    }

    private static __$codeSetterNotSync : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeSetterNotSync() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeSetterNotSync===undefined) {
            this.__$codeSetterNotSync = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("SetterNotSync",{
                template : "Setters can't use 'async', 'async*', or 'sync*'.",dart2jsCode : "FASTA_IGNORED",format : _formatSetterNotSync});
        }
        return this.__$codeSetterNotSync;
    }
    static set codeSetterNotSync(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeSetterNotSync = __$value;
    }

    private static __$codeNonAsciiWhitespace : FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage>;
    static get codeNonAsciiWhitespace() : FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage> { 
        if (this.__$codeNonAsciiWhitespace===undefined) {
            this.__$codeNonAsciiWhitespace = new FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage>("NonAsciiWhitespace",{
                template : "The non-ASCII space character #unicode can only be used in strings and comments.",analyzerCode : "ILLEGAL_CHARACTER",dart2jsCode : "BAD_INPUT_CHARACTER",format : _formatNonAsciiWhitespace});
        }
        return this.__$codeNonAsciiWhitespace;
    }
    static set codeNonAsciiWhitespace(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage>)  { 
        this.__$codeNonAsciiWhitespace = __$value;
    }

    private static __$codeExpectedIdentifier : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedIdentifier() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedIdentifier===undefined) {
            this.__$codeExpectedIdentifier = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedIdentifier",{
                template : "'#lexeme' is a reserved word and can't be used here.",tip : "Try using a different name.",dart2jsCode : "EXPECTED_IDENTIFIER",format : _formatExpectedIdentifier});
        }
        return this.__$codeExpectedIdentifier;
    }
    static set codeExpectedIdentifier(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedIdentifier = __$value;
    }

    private static __$codeExpectedBlockToSkip : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeExpectedBlockToSkip() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeExpectedBlockToSkip===undefined) {
            this.__$codeExpectedBlockToSkip = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("ExpectedBlockToSkip",{
                template : "Expected a function body or '=>'.",tip : "Try adding {}.",dart2jsCode : "NATIVE_OR_BODY_EXPECTED",format : _formatExpectedBlockToSkip});
        }
        return this.__$codeExpectedBlockToSkip;
    }
    static set codeExpectedBlockToSkip(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeExpectedBlockToSkip = __$value;
    }

    private static __$codeRequiredParameterWithDefault : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeRequiredParameterWithDefault() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeRequiredParameterWithDefault===undefined) {
            this.__$codeRequiredParameterWithDefault = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("RequiredParameterWithDefault",{
                template : "Non-optional parameters can't have a default value.",tip : "Try removing the default value or making the parameter optional.",dart2jsCode : "REQUIRED_PARAMETER_WITH_DEFAULT",format : _formatRequiredParameterWithDefault});
        }
        return this.__$codeRequiredParameterWithDefault;
    }
    static set codeRequiredParameterWithDefault(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeRequiredParameterWithDefault = __$value;
    }

    private static __$codeUnspecified : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>;
    static get codeUnspecified() : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage> { 
        if (this.__$codeUnspecified===undefined) {
            this.__$codeUnspecified = new FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>("Unspecified",{
                template : "#string",dart2jsCode : "GENERIC",format : _formatUnspecified});
        }
        return this.__$codeUnspecified;
    }
    static set codeUnspecified(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>)  { 
        this.__$codeUnspecified = __$value;
    }

    private static __$codeMissingExponent : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeMissingExponent() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeMissingExponent===undefined) {
            this.__$codeMissingExponent = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("MissingExponent",{
                template : "Numbers in exponential notation should always contain an exponent (an integer number with an optional sign).",tip : "Make sure there is an exponent, and remove any whitespace before it.",analyzerCode : "MISSING_DIGIT",dart2jsCode : "EXPONENT_MISSING",format : _formatMissingExponent});
        }
        return this.__$codeMissingExponent;
    }
    static set codeMissingExponent(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeMissingExponent = __$value;
    }

    private static __$codePositionalParameterWithEquals : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codePositionalParameterWithEquals() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codePositionalParameterWithEquals===undefined) {
            this.__$codePositionalParameterWithEquals = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("PositionalParameterWithEquals",{
                template : "Positional optional parameters can't use ':' to specify a default value.",tip : "Try replacing ':' with '='.",dart2jsCode : "POSITIONAL_PARAMETER_WITH_EQUALS",format : _formatPositionalParameterWithEquals});
        }
        return this.__$codePositionalParameterWithEquals;
    }
    static set codePositionalParameterWithEquals(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codePositionalParameterWithEquals = __$value;
    }

    private static __$codeUnexpectedDollarInString : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeUnexpectedDollarInString() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeUnexpectedDollarInString===undefined) {
            this.__$codeUnexpectedDollarInString = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("UnexpectedDollarInString",{
                template : "A '$' has special meaning inside a string, and must be followed by an identifier or an expression in curly braces ({}).",tip : "Try adding a backslash (\) to escape the '$'.",dart2jsCode : "MALFORMED_STRING_LITERAL",format : _formatUnexpectedDollarInString});
        }
        return this.__$codeUnexpectedDollarInString;
    }
    static set codeUnexpectedDollarInString(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeUnexpectedDollarInString = __$value;
    }

    private static __$codeExtraneousModifier : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExtraneousModifier() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExtraneousModifier===undefined) {
            this.__$codeExtraneousModifier = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExtraneousModifier",{
                template : "Can't have modifier '#lexeme' here.",tip : "Try removing '#lexeme'.",dart2jsCode : "EXTRANEOUS_MODIFIER",format : _formatExtraneousModifier});
        }
        return this.__$codeExtraneousModifier;
    }
    static set codeExtraneousModifier(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExtraneousModifier = __$value;
    }

    private static __$codeUnterminatedString : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>;
    static get codeUnterminatedString() : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage> { 
        if (this.__$codeUnterminatedString===undefined) {
            this.__$codeUnterminatedString = new FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>("UnterminatedString",{
                template : "String must end with #string.",analyzerCode : "UNTERMINATED_STRING_LITERAL",dart2jsCode : "UNTERMINATED_STRING",format : _formatUnterminatedString});
        }
        return this.__$codeUnterminatedString;
    }
    static set codeUnterminatedString(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>)  { 
        this.__$codeUnterminatedString = __$value;
    }

    private static __$codeAwaitNotAsync : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeAwaitNotAsync() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeAwaitNotAsync===undefined) {
            this.__$codeAwaitNotAsync = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("AwaitNotAsync",{
                template : "'await' can only be used in 'async' or 'async*' methods.",dart2jsCode : "FASTA_IGNORED",format : _formatAwaitNotAsync});
        }
        return this.__$codeAwaitNotAsync;
    }
    static set codeAwaitNotAsync(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeAwaitNotAsync = __$value;
    }

    private static __$codeExpectedFunctionBody : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedFunctionBody() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedFunctionBody===undefined) {
            this.__$codeExpectedFunctionBody = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedFunctionBody",{
                template : "Expected a function body, but got '#lexeme'.",dart2jsCode : "NATIVE_OR_FATAL",format : _formatExpectedFunctionBody});
        }
        return this.__$codeExpectedFunctionBody;
    }
    static set codeExpectedFunctionBody(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedFunctionBody = __$value;
    }

    private static __$codeExpectedHexDigit : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeExpectedHexDigit() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeExpectedHexDigit===undefined) {
            this.__$codeExpectedHexDigit = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("ExpectedHexDigit",{
                template : "A hex digit (0-9 or A-F) must follow '0x'.",analyzerCode : "MISSING_HEX_DIGIT",dart2jsCode : "HEX_DIGIT_EXPECTED",format : _formatExpectedHexDigit});
        }
        return this.__$codeExpectedHexDigit;
    }
    static set codeExpectedHexDigit(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeExpectedHexDigit = __$value;
    }

    private static __$codeEmptyNamedParameterList : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeEmptyNamedParameterList() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeEmptyNamedParameterList===undefined) {
            this.__$codeEmptyNamedParameterList = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("EmptyNamedParameterList",{
                template : "Named parameter lists cannot be empty.",tip : "Try adding a named parameter to the list.",dart2jsCode : "EMPTY_NAMED_PARAMETER_LIST",format : _formatEmptyNamedParameterList});
        }
        return this.__$codeEmptyNamedParameterList;
    }
    static set codeEmptyNamedParameterList(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeEmptyNamedParameterList = __$value;
    }

    private static __$codeUnsupportedPrefixPlus : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeUnsupportedPrefixPlus() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeUnsupportedPrefixPlus===undefined) {
            this.__$codeUnsupportedPrefixPlus = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("UnsupportedPrefixPlus",{
                template : "'+' is not a prefix operator. ",tip : "Try removing '+'.",dart2jsCode : "UNSUPPORTED_PREFIX_PLUS",format : _formatUnsupportedPrefixPlus});
        }
        return this.__$codeUnsupportedPrefixPlus;
    }
    static set codeUnsupportedPrefixPlus(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeUnsupportedPrefixPlus = __$value;
    }

    private static __$codeExpectedString : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedString() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedString===undefined) {
            this.__$codeExpectedString = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedString",{
                template : "Expected a String, but got '#lexeme'.",dart2jsCode : "FASTA_FATAL",format : _formatExpectedString});
        }
        return this.__$codeExpectedString;
    }
    static set codeExpectedString(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedString = __$value;
    }

    private static __$codeTypeAfterVar : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeTypeAfterVar() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeTypeAfterVar===undefined) {
            this.__$codeTypeAfterVar = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("TypeAfterVar",{
                template : "Can't have both a type and 'var'.",tip : "Try removing 'var.'",dart2jsCode : "EXTRANEOUS_MODIFIER",format : _formatTypeAfterVar});
        }
        return this.__$codeTypeAfterVar;
    }
    static set codeTypeAfterVar(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeTypeAfterVar = __$value;
    }

    private static __$codeAbstractNotSync : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeAbstractNotSync() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeAbstractNotSync===undefined) {
            this.__$codeAbstractNotSync = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("AbstractNotSync",{
                template : "Abstract methods can't use 'async', 'async*', or 'sync*'.",dart2jsCode : "FASTA_IGNORED",format : _formatAbstractNotSync});
        }
        return this.__$codeAbstractNotSync;
    }
    static set codeAbstractNotSync(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeAbstractNotSync = __$value;
    }

    private static __$codeExpectedDeclaration : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedDeclaration() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedDeclaration===undefined) {
            this.__$codeExpectedDeclaration = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedDeclaration",{
                template : "Expected a declaration, but got '#lexeme'.",dart2jsCode : "FASTA_FATAL",format : _formatExpectedDeclaration});
        }
        return this.__$codeExpectedDeclaration;
    }
    static set codeExpectedDeclaration(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedDeclaration = __$value;
    }

    private static __$codeAsciiControlCharacter : FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage>;
    static get codeAsciiControlCharacter() : FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage> { 
        if (this.__$codeAsciiControlCharacter===undefined) {
            this.__$codeAsciiControlCharacter = new FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage>("AsciiControlCharacter",{
                template : "The control character #unicode can only be used in strings and comments.",dart2jsCode : "BAD_INPUT_CHARACTER",format : _formatAsciiControlCharacter});
        }
        return this.__$codeAsciiControlCharacter;
    }
    static set codeAsciiControlCharacter(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,codePoint : number) => FastaMessage>)  { 
        this.__$codeAsciiControlCharacter = __$value;
    }

    private static __$codeUnmatchedToken : FastaCode<(uri : lib3.Uri,charOffset : number,string : string,token : any) => FastaMessage>;
    static get codeUnmatchedToken() : FastaCode<(uri : lib3.Uri,charOffset : number,string : string,token : any) => FastaMessage> { 
        if (this.__$codeUnmatchedToken===undefined) {
            this.__$codeUnmatchedToken = new FastaCode<(uri : lib3.Uri,charOffset : number,string : string,token : any) => FastaMessage>("UnmatchedToken",{
                template : "Can't find '#string' to match '#lexeme'.",dart2jsCode : "UNMATCHED_TOKEN",format : _formatUnmatchedToken});
        }
        return this.__$codeUnmatchedToken;
    }
    static set codeUnmatchedToken(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,string : string,token : any) => FastaMessage>)  { 
        this.__$codeUnmatchedToken = __$value;
    }

    private static __$codeInvalidSyncModifier : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeInvalidSyncModifier() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeInvalidSyncModifier===undefined) {
            this.__$codeInvalidSyncModifier = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("InvalidSyncModifier",{
                template : "Invalid modifier 'sync'.",tip : "Try replacing 'sync' with 'sync*'.",dart2jsCode : "INVALID_SYNC_MODIFIER",format : _formatInvalidSyncModifier});
        }
        return this.__$codeInvalidSyncModifier;
    }
    static set codeInvalidSyncModifier(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeInvalidSyncModifier = __$value;
    }

    private static __$codeExpectedOpenParens : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeExpectedOpenParens() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeExpectedOpenParens===undefined) {
            this.__$codeExpectedOpenParens = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("ExpectedOpenParens",{
                template : "Expected '('.",dart2jsCode : "GENERIC",format : _formatExpectedOpenParens});
        }
        return this.__$codeExpectedOpenParens;
    }
    static set codeExpectedOpenParens(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeExpectedOpenParens = __$value;
    }

    private static __$codeUnterminatedComment : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeUnterminatedComment() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeUnterminatedComment===undefined) {
            this.__$codeUnterminatedComment = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("UnterminatedComment",{
                template : "Comment starting with '/*' must end with '*/'.",analyzerCode : "UNTERMINATED_MULTI_LINE_COMMENT",dart2jsCode : "UNTERMINATED_COMMENT",format : _formatUnterminatedComment});
        }
        return this.__$codeUnterminatedComment;
    }
    static set codeUnterminatedComment(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeUnterminatedComment = __$value;
    }

    private static __$codeExpectedClassBody : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedClassBody() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedClassBody===undefined) {
            this.__$codeExpectedClassBody = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedClassBody",{
                template : "Expected a class body, but got '#lexeme'.",dart2jsCode : "FASTA_FATAL",format : _formatExpectedClassBody});
        }
        return this.__$codeExpectedClassBody;
    }
    static set codeExpectedClassBody(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedClassBody = __$value;
    }

    private static __$codeInvalidAwaitFor : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeInvalidAwaitFor() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeInvalidAwaitFor===undefined) {
            this.__$codeInvalidAwaitFor = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("InvalidAwaitFor",{
                template : "'await' is only supported in methods with an 'async' or 'async*' body modifier.",tip : "Try adding 'async' or 'async*' to the method body or removing the 'await' keyword.",dart2jsCode : "INVALID_AWAIT_FOR",format : _formatInvalidAwaitFor});
        }
        return this.__$codeInvalidAwaitFor;
    }
    static set codeInvalidAwaitFor(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeInvalidAwaitFor = __$value;
    }

    private static __$codeExpectedType : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedType() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedType===undefined) {
            this.__$codeExpectedType = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedType",{
                template : "Expected a type, but got '#lexeme'.",dart2jsCode : "FASTA_FATAL",format : _formatExpectedType});
        }
        return this.__$codeExpectedType;
    }
    static set codeExpectedType(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedType = __$value;
    }

    private static __$codeUnterminatedToken : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeUnterminatedToken() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeUnterminatedToken===undefined) {
            this.__$codeUnterminatedToken = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("UnterminatedToken",{
                template : "Incomplete token.",dart2jsCode : "UNTERMINATED_TOKEN",format : _formatUnterminatedToken});
        }
        return this.__$codeUnterminatedToken;
    }
    static set codeUnterminatedToken(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeUnterminatedToken = __$value;
    }

    private static __$codeExpectedButGot : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>;
    static get codeExpectedButGot() : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage> { 
        if (this.__$codeExpectedButGot===undefined) {
            this.__$codeExpectedButGot = new FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>("ExpectedButGot",{
                template : "Expected '#string' before this.",tip : "DONT_KNOW_HOW_TO_FIX,",dart2jsCode : "MISSING_TOKEN_BEFORE_THIS",format : _formatExpectedButGot});
        }
        return this.__$codeExpectedButGot;
    }
    static set codeExpectedButGot(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,string : string) => FastaMessage>)  { 
        this.__$codeExpectedButGot = __$value;
    }

    private static __$codeAwaitForNotAsync : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeAwaitForNotAsync() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeAwaitForNotAsync===undefined) {
            this.__$codeAwaitForNotAsync = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("AwaitForNotAsync",{
                template : "Asynchronous for-loop can only be used in 'async' or 'async*' methods.",dart2jsCode : "FASTA_IGNORED",format : _formatAwaitForNotAsync});
        }
        return this.__$codeAwaitForNotAsync;
    }
    static set codeAwaitForNotAsync(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeAwaitForNotAsync = __$value;
    }

    private static __$codeEncoding : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeEncoding() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeEncoding===undefined) {
            this.__$codeEncoding = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("Encoding",{
                template : "Unable to decode bytes as UTF-8.",dart2jsCode : "FASTA_FATAL",format : _formatEncoding});
        }
        return this.__$codeEncoding;
    }
    static set codeEncoding(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeEncoding = __$value;
    }

    private static __$codeAsyncAsIdentifier : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeAsyncAsIdentifier() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeAsyncAsIdentifier===undefined) {
            this.__$codeAsyncAsIdentifier = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("AsyncAsIdentifier",{
                template : "'async' can't be used as an identifier in 'async', 'async*', or 'sync*' methods.",analyzerCode : "ASYNC_KEYWORD_USED_AS_IDENTIFIER",dart2jsCode : "GENERIC",format : _formatAsyncAsIdentifier});
        }
        return this.__$codeAsyncAsIdentifier;
    }
    static set codeAsyncAsIdentifier(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeAsyncAsIdentifier = __$value;
    }

    private static __$codeYieldAsIdentifier : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeYieldAsIdentifier() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeYieldAsIdentifier===undefined) {
            this.__$codeYieldAsIdentifier = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("YieldAsIdentifier",{
                template : "'yield' can't be used as an identifier in 'async', 'async*', or 'sync*' methods.",dart2jsCode : "FASTA_IGNORED",format : _formatYieldAsIdentifier});
        }
        return this.__$codeYieldAsIdentifier;
    }
    static set codeYieldAsIdentifier(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeYieldAsIdentifier = __$value;
    }

    private static __$codeOnlyTry : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeOnlyTry() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeOnlyTry===undefined) {
            this.__$codeOnlyTry = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("OnlyTry",{
                template : "Try block should be followed by 'on', 'catch', or 'finally' block.",tip : "Did you forget to add a 'finally' block?",dart2jsCode : "FASTA_IGNORED",format : _formatOnlyTry});
        }
        return this.__$codeOnlyTry;
    }
    static set codeOnlyTry(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeOnlyTry = __$value;
    }

    private static __$codeInvalidInlineFunctionType : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeInvalidInlineFunctionType() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeInvalidInlineFunctionType===undefined) {
            this.__$codeInvalidInlineFunctionType = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("InvalidInlineFunctionType",{
                template : "Invalid inline function type.",tip : "Try changing the inline function type (as in 'int f()') to a prefixed function type using the `Function` keyword (as in 'int Function() f').",dart2jsCode : "INVALID_INLINE_FUNCTION_TYPE",format : _formatInvalidInlineFunctionType});
        }
        return this.__$codeInvalidInlineFunctionType;
    }
    static set codeInvalidInlineFunctionType(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeInvalidInlineFunctionType = __$value;
    }

    private static __$codeExpectedBody : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeExpectedBody() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeExpectedBody===undefined) {
            this.__$codeExpectedBody = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("ExpectedBody",{
                template : "Expected a function body or '=>'.",tip : "Try adding {}.",dart2jsCode : "BODY_EXPECTED",format : _formatExpectedBody});
        }
        return this.__$codeExpectedBody;
    }
    static set codeExpectedBody(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeExpectedBody = __$value;
    }

    private static __$codeTypeRequired : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeTypeRequired() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeTypeRequired===undefined) {
            this.__$codeTypeRequired = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("TypeRequired",{
                template : "A type or modifier is required here.",tip : "Try adding a type, 'var', 'const', or 'final'.",format : _formatTypeRequired});
        }
        return this.__$codeTypeRequired;
    }
    static set codeTypeRequired(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeTypeRequired = __$value;
    }

    private static __$codeInvalidVoid : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeInvalidVoid() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeInvalidVoid===undefined) {
            this.__$codeInvalidVoid = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("InvalidVoid",{
                template : "Type 'void' can't be used here because it isn't a return type.",tip : "Try removing 'void' keyword or replace it with 'var', 'final', or a type.",dart2jsCode : "VOID_NOT_ALLOWED",format : _formatInvalidVoid});
        }
        return this.__$codeInvalidVoid;
    }
    static set codeInvalidVoid(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeInvalidVoid = __$value;
    }

    private static __$codeBuiltInIdentifierAsType : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeBuiltInIdentifierAsType() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeBuiltInIdentifierAsType===undefined) {
            this.__$codeBuiltInIdentifierAsType = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("BuiltInIdentifierAsType",{
                template : "Can't use '#lexeme' as a type.",dart2jsCode : "EXTRANEOUS_MODIFIER",format : _formatBuiltInIdentifierAsType});
        }
        return this.__$codeBuiltInIdentifierAsType;
    }
    static set codeBuiltInIdentifierAsType(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeBuiltInIdentifierAsType = __$value;
    }

    private static __$codeGeneratorReturnsValue : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>;
    static get codeGeneratorReturnsValue() : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage> { 
        if (this.__$codeGeneratorReturnsValue===undefined) {
            this.__$codeGeneratorReturnsValue = new FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>("GeneratorReturnsValue",{
                template : "'sync*' and 'async*' can't return a value.",dart2jsCode : "FASTA_IGNORED",format : _formatGeneratorReturnsValue});
        }
        return this.__$codeGeneratorReturnsValue;
    }
    static set codeGeneratorReturnsValue(__$value : FastaCode<(uri : lib3.Uri,charOffset : number) => FastaMessage>)  { 
        this.__$codeGeneratorReturnsValue = __$value;
    }

    private static __$codeBuiltInIdentifierInDeclaration : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeBuiltInIdentifierInDeclaration() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeBuiltInIdentifierInDeclaration===undefined) {
            this.__$codeBuiltInIdentifierInDeclaration = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("BuiltInIdentifierInDeclaration",{
                template : "Can't use '#lexeme' as a name here.",dart2jsCode : "GENERIC",format : _formatBuiltInIdentifierInDeclaration});
        }
        return this.__$codeBuiltInIdentifierInDeclaration;
    }
    static set codeBuiltInIdentifierInDeclaration(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeBuiltInIdentifierInDeclaration = __$value;
    }

    private static __$codeExpectedExpression : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>;
    static get codeExpectedExpression() : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage> { 
        if (this.__$codeExpectedExpression===undefined) {
            this.__$codeExpectedExpression = new FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>("ExpectedExpression",{
                template : "Expected an expression, but got '#lexeme'.",dart2jsCode : "FASTA_FATAL",format : _formatExpectedExpression});
        }
        return this.__$codeExpectedExpression;
    }
    static set codeExpectedExpression(__$value : FastaCode<(uri : lib3.Uri,charOffset : number,token : any) => FastaMessage>)  { 
        this.__$codeExpectedExpression = __$value;
    }

}
