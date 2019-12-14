/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/scanner/errors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var translateErrorToken : (token : any,reportError : (errorCode : ScannerErrorCode,offset : number,arguments : core.DartList<core.DartObject>) => any) => void = (token : any,reportError : (errorCode : ScannerErrorCode,offset : number,arguments : core.DartList<core.DartObject>) => any) : void =>  {
    let charOffset : number = token.charOffset;
    let endOffset : number = (token.endOffset || charOffset);
    var _makeError : (errorCode : ScannerErrorCode,arguments : core.DartList<core.DartObject>) => void = (errorCode : ScannerErrorCode,arguments : core.DartList<core.DartObject>) : void =>  {
        if (_isAtEnd(token,charOffset)) {
            charOffset--;
        }
        reportError(errorCode,charOffset,arguments);
    };
    let errorCode = token.errorCode;
    switch (errorCode.analyzerCode) {
        case "UNTERMINATED_STRING_LITERAL":
            charOffset = endOffset;
            return _makeError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,null);
        case "UNTERMINATED_MULTI_LINE_COMMENT":
            charOffset = endOffset;
            return _makeError(ScannerErrorCode.UNTERMINATED_MULTI_LINE_COMMENT,null);
        case "MISSING_DIGIT":
            charOffset = endOffset - 1;
            return _makeError(ScannerErrorCode.MISSING_DIGIT,null);
        case "MISSING_HEX_DIGIT":
            charOffset = endOffset - 1;
            return _makeError(ScannerErrorCode.MISSING_HEX_DIGIT,null);
        case "ILLEGAL_CHARACTER":
            return _makeError(ScannerErrorCode.ILLEGAL_CHARACTER,new core.DartList.literal(token.character));
        default:
            if (op(Op.EQUALS,errorCode,codeUnmatchedToken) || op(Op.EQUALS,errorCode,codeUnexpectedDollarInString)) {
                return null;
            }
            throw new core.UnimplementedError(`${errorCode}`);
    }
};
export var _isAtEnd : (token : any,charOffset : number) => boolean = (token : any,charOffset : number) : boolean =>  {
    while (true){
        token = token.next;
        if (token.isEof) return op(Op.EQUALS,token.charOffset,charOffset);
        if (token.type.kind != BAD_INPUT_TOKEN) return false;
    }
};
export namespace ScannerErrorCode {
    export type Constructors = 'ScannerErrorCode';
    export type Interface = Omit<ScannerErrorCode, Constructors>;
}
@DartClass
export class ScannerErrorCode extends any {
    private static __$ILLEGAL_CHARACTER : ScannerErrorCode;
    static get ILLEGAL_CHARACTER() : ScannerErrorCode { 
        if (this.__$ILLEGAL_CHARACTER===undefined) {
            this.__$ILLEGAL_CHARACTER = new ScannerErrorCode('ILLEGAL_CHARACTER',"Illegal character '{0}'.");
        }
        return this.__$ILLEGAL_CHARACTER;
    }

    private static __$MISSING_DIGIT : ScannerErrorCode;
    static get MISSING_DIGIT() : ScannerErrorCode { 
        if (this.__$MISSING_DIGIT===undefined) {
            this.__$MISSING_DIGIT = new ScannerErrorCode('MISSING_DIGIT',"Decimal digit expected.");
        }
        return this.__$MISSING_DIGIT;
    }

    private static __$MISSING_HEX_DIGIT : ScannerErrorCode;
    static get MISSING_HEX_DIGIT() : ScannerErrorCode { 
        if (this.__$MISSING_HEX_DIGIT===undefined) {
            this.__$MISSING_HEX_DIGIT = new ScannerErrorCode('MISSING_HEX_DIGIT',"Hexidecimal digit expected.");
        }
        return this.__$MISSING_HEX_DIGIT;
    }

    private static __$MISSING_QUOTE : ScannerErrorCode;
    static get MISSING_QUOTE() : ScannerErrorCode { 
        if (this.__$MISSING_QUOTE===undefined) {
            this.__$MISSING_QUOTE = new ScannerErrorCode('MISSING_QUOTE',"Expected quote (' or \").");
        }
        return this.__$MISSING_QUOTE;
    }

    private static __$UNABLE_GET_CONTENT : ScannerErrorCode;
    static get UNABLE_GET_CONTENT() : ScannerErrorCode { 
        if (this.__$UNABLE_GET_CONTENT===undefined) {
            this.__$UNABLE_GET_CONTENT = new ScannerErrorCode('UNABLE_GET_CONTENT',"Unable to get content of '{0}'.");
        }
        return this.__$UNABLE_GET_CONTENT;
    }

    private static __$UNTERMINATED_MULTI_LINE_COMMENT : ScannerErrorCode;
    static get UNTERMINATED_MULTI_LINE_COMMENT() : ScannerErrorCode { 
        if (this.__$UNTERMINATED_MULTI_LINE_COMMENT===undefined) {
            this.__$UNTERMINATED_MULTI_LINE_COMMENT = new ScannerErrorCode('UNTERMINATED_MULTI_LINE_COMMENT',"Unterminated multi-line comment.","Try terminating the comment with '*/', or " + "removing any unbalanced occurances of '/*' (because comments nest in Dart).");
        }
        return this.__$UNTERMINATED_MULTI_LINE_COMMENT;
    }

    private static __$UNTERMINATED_STRING_LITERAL : ScannerErrorCode;
    static get UNTERMINATED_STRING_LITERAL() : ScannerErrorCode { 
        if (this.__$UNTERMINATED_STRING_LITERAL===undefined) {
            this.__$UNTERMINATED_STRING_LITERAL = new ScannerErrorCode('UNTERMINATED_STRING_LITERAL',"Unterminated string literal.");
        }
        return this.__$UNTERMINATED_STRING_LITERAL;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    ScannerErrorCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorSeverity.ERROR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.SYNTACTIC_ERROR;
    }
}

export class properties {
}
