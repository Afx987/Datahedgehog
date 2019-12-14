/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/recover.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../scanner/token";
import * as lib4 from "./error_token";
import * as lib5 from "./../fasta_codes";
import * as lib6 from "./token";

export var defaultRecoveryStrategy : (bytes : core.DartList<number>,tokens : lib3.Token,lineStarts : core.DartList<number>) => lib3.Token = (bytes : core.DartList<number>,tokens : lib3.Token,lineStarts : core.DartList<number>) : lib3.Token =>  {
    let error : lib4.ErrorToken;
    let errorTail : lib4.ErrorToken;
    let good : lib3.Token;
    let goodTail : lib3.Token;
    let beforeGoodTail : lib3.Token;
    var recoverIdentifier : (first : lib4.NonAsciiIdentifierToken) => any = (first : lib4.NonAsciiIdentifierToken) =>  {
        let codeUnits : core.DartList<number> = new core.DartList.literal<number>();
        let prepend : boolean = false;
        let append : boolean = false;
        if (goodTail != null) {
            if (op(Op.EQUALS,goodTail.type,lib3.TokenType.IDENTIFIER) && goodTail.charEnd == first.charOffset) {
                prepend = true;
            }
        }
        let next : lib3.Token = errorTail.next;
        if (op(Op.EQUALS,next.type,lib3.TokenType.IDENTIFIER) && errorTail.charOffset + 1 == next.charOffset) {
            append = true;
        }
        if (prepend) {
            codeUnits.addAll(new core.DartString(goodTail.lexeme).codeUnits);
        }
        let current : lib4.NonAsciiIdentifierToken = first;
        while (current != errorTail){
            codeUnits.add(current.character);
            current = current.next;
        }
        codeUnits.add(errorTail.character);
        let charOffset : number = first.charOffset;
        if (prepend) {
            charOffset = goodTail.charOffset;
            if (op(Op.EQUALS,beforeGoodTail,null)) {
                good = null;
                goodTail = null;
                beforeGoodTail = null;
            }else {
                goodTail = beforeGoodTail;
            }
        }
        if (append) {
            codeUnits.addAll(new core.DartString(next.lexeme).codeUnits);
            next = next.next;
        }
        let value : string = new core.DartString.fromCharCodes(codeUnits).valueOf();
        return ((_) : lib3.Token =>  {
            {
                _.next = next;
                return _;
            }
        })(synthesizeToken(charOffset,value,lib3.TokenType.IDENTIFIER));
    };
    var recoverExponent : () => any = () =>  {
        return ((_) : lib3.Token =>  {
            {
                _.next = errorTail.next;
                return _;
            }
        })(synthesizeToken(errorTail.charOffset,"NaN",lib3.TokenType.DOUBLE));
    };
    var recoverString : () => any = () =>  {
        return skipToEof(errorTail);
    };
    var recoverHexDigit : () => any = () =>  {
        return ((_) : lib3.Token =>  {
            {
                _.next = errorTail.next;
                return _;
            }
        })(synthesizeToken(errorTail.charOffset,"-1",lib3.TokenType.INT));
    };
    var recoverStringInterpolation : () => any = () =>  {
        return skipToEof(errorTail);
    };
    var recoverComment : () => any = () =>  {
        return skipToEof(errorTail);
    };
    var recoverUnmatched : () => any = () =>  {
        return errorTail.next;
    };
    for(let current : lib3.Token = tokens; !current.isEof; current = current.next){
        if (is(current, lib4.ErrorToken)) {
            let first : lib4.ErrorToken = current;
            let next : lib3.Token = current;
            let treatAsWhitespace : boolean = false;
            do{
                current = next;
                if (op(Op.EQUALS,errorTail,null)) {
                    error = next;
                }else {
                    errorTail.next = next;
                    next.previous = errorTail;
                }
                errorTail = next;
                next = next.next;
            } while (is(next, lib4.ErrorToken) && op(Op.EQUALS,first.errorCode,next.errorCode));
            let code : lib5.FastaCode<any> = first.errorCode;
            if (op(Op.EQUALS,code,lib5.properties.codeEncoding) || op(Op.EQUALS,code,lib5.properties.codeNonAsciiWhitespace) || op(Op.EQUALS,code,lib5.properties.codeAsciiControlCharacter)) {
                treatAsWhitespace = true;
            }else if (op(Op.EQUALS,code,lib5.properties.codeNonAsciiIdentifier)) {
                current = recoverIdentifier(first);
                /* TODO (AssertStatementImpl) : assert (current.next != null); */;
            }else if (op(Op.EQUALS,code,lib5.properties.codeMissingExponent)) {
                current = recoverExponent();
                /* TODO (AssertStatementImpl) : assert (current.next != null); */;
            }else if (op(Op.EQUALS,code,lib5.properties.codeUnterminatedString)) {
                current = recoverString();
                /* TODO (AssertStatementImpl) : assert (current.next != null); */;
            }else if (op(Op.EQUALS,code,lib5.properties.codeExpectedHexDigit)) {
                current = recoverHexDigit();
                /* TODO (AssertStatementImpl) : assert (current.next != null); */;
            }else if (op(Op.EQUALS,code,lib5.properties.codeUnexpectedDollarInString)) {
                current = recoverStringInterpolation();
                /* TODO (AssertStatementImpl) : assert (current.next != null); */;
            }else if (op(Op.EQUALS,code,lib5.properties.codeUnterminatedComment)) {
                current = recoverComment();
                /* TODO (AssertStatementImpl) : assert (current.next != null); */;
            }else if (op(Op.EQUALS,code,lib5.properties.codeUnmatchedToken)) {
                current = recoverUnmatched();
                /* TODO (AssertStatementImpl) : assert (current.next != null); */;
            }else {
                treatAsWhitespace = true;
            }
            if (treatAsWhitespace) continue;
        }
        if (op(Op.EQUALS,goodTail,null)) {
            good = current;
        }else {
            goodTail.next = current;
            current.previous = goodTail;
        }
        beforeGoodTail = goodTail;
        goodTail = current;
    }
    error.previous = ((_) : lib6.SymbolToken =>  {
        {
            _.next = error;
            return _;
        }
    })(new lib6.SymbolToken.eof(-1));
    let tail : lib3.Token;
    if (good != null) {
        errorTail.next = good;
        good.previous = errorTail;
        tail = goodTail;
    }else {
        tail = errorTail;
    }
    if (!tail.isEof) tail.next = ((_) : lib6.SymbolToken =>  {
        {
            _.previous = tail;
            return _;
        }
    })(new lib6.SymbolToken.eof(tail.end));
    return error;
};
export var synthesizeToken : (charOffset : number,value : string,type : lib3.TokenType) => lib3.Token = (charOffset : number,value : string,type : lib3.TokenType) : lib3.Token =>  {
    return new lib6.StringToken.fromString(type,value,charOffset);
};
export var skipToEof : (token : lib3.Token) => lib3.Token = (token : lib3.Token) : lib3.Token =>  {
    while (!token.isEof){
        token = token.next;
    }
    return token;
};
export var closeBraceFor : (openBrace : string) => string = (openBrace : string) : string =>  {
    return new core.DartMap.literal([
        ['(',')'],
        ['[',']'],
        ['{','}'],
        ['<','>'],
        ['${','}']]).get(openBrace);
};
export class properties {
}
