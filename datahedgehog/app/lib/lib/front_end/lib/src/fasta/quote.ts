/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/quote.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./errors";
import * as lib4 from "./scanner/characters";

export var analyzeQuote : (first : string) => Quote = (first : string) : Quote =>  {
    if (new core.DartString(first).startsWith('"""')) return Quote.MultiLineDouble;
    if (new core.DartString(first).startsWith('r"""')) return Quote.RawMultiLineDouble;
    if (new core.DartString(first).startsWith("'''")) return Quote.MultiLineSingle;
    if (new core.DartString(first).startsWith("r'''")) return Quote.RawMultiLineSingle;
    if (new core.DartString(first).startsWith('"')) return Quote.Double;
    if (new core.DartString(first).startsWith('r"')) return Quote.RawDouble;
    if (new core.DartString(first).startsWith("'")) return Quote.Single;
    if (new core.DartString(first).startsWith("r'")) return Quote.RawSingle;
    return lib3.internalError(`Unexpected string literal: ${first}`);
};
export var lengthOfOptionalWhitespacePrefix : (first : string,start : number) => number = (first : string,start : number) : number =>  {
    let codeUnits : core.DartList<number> = new core.DartString(first).codeUnits;
    for(let i : number = start; i < codeUnits.length; i++){
        let code : number = codeUnits[i];
        if (code == lib4.properties.$BACKSLASH) {
            i++;
            if (i < codeUnits.length) {
                code = codeUnits[i];
            }else {
                break;
            }
        }
        if (code == lib4.properties.$TAB || code == lib4.properties.$SPACE) continue;
        if (code == lib4.properties.$CR) {
            if (i + 1 < codeUnits.length && codeUnits[i + 1] == lib4.properties.$LF) {
                i++;
            }
            return i + 1;
        }
        if (code == lib4.properties.$LF) {
            return i + 1;
        }
        break;
    }
    return start;
};
export var firstQuoteLength : (first : string,quote : Quote) => number = (first : string,quote : Quote) : number =>  {
    switch (quote) {
        case Quote.Single:
        case Quote.Double:
            return 1;
        case Quote.MultiLineSingle:
        case Quote.MultiLineDouble:
            return lengthOfOptionalWhitespacePrefix(first,3);
        case Quote.RawSingle:
        case Quote.RawDouble:
            return 2;
        case Quote.RawMultiLineSingle:
        case Quote.RawMultiLineDouble:
            return lengthOfOptionalWhitespacePrefix(first,4);
    }
    return lib3.internalError(`Unhandled string quote: ${quote}`);
};
export var lastQuoteLength : (quote : Quote) => number = (quote : Quote) : number =>  {
    switch (quote) {
        case Quote.Single:
        case Quote.Double:
        case Quote.RawSingle:
        case Quote.RawDouble:
            return 1;
        case Quote.MultiLineSingle:
        case Quote.MultiLineDouble:
        case Quote.RawMultiLineSingle:
        case Quote.RawMultiLineDouble:
            return 3;
    }
    return lib3.internalError(`Unhandled string quote: ${quote}`);
};
export var unescapeFirstStringPart : (first : string,quote : Quote) => string = (first : string,quote : Quote) : string =>  {
    return unescape(new core.DartString(first).substring(firstQuoteLength(first,quote)),quote);
};
export var unescapeLastStringPart : (last : string,quote : Quote) => string = (last : string,quote : Quote) : string =>  {
    return unescape(new core.DartString(last).substring(0,new core.DartString(last).length - lastQuoteLength(quote)),quote);
};
export var unescapeString : (string : string) => string = (string : string) : string =>  {
    let quote : Quote = analyzeQuote(string);
    return unescape(new core.DartString(string).substring(firstQuoteLength(string,quote),new core.DartString(string).length - lastQuoteLength(quote)),quote);
};
export var unescape : (string : string,quote : Quote) => string = (string : string,quote : Quote) : string =>  {
    switch (quote) {
        case Quote.Single:
        case Quote.Double:
            return !new core.DartString(string).contains("\") ? string : unescapeCodeUnits(new core.DartString(string).codeUnits,false);
        case Quote.MultiLineSingle:
        case Quote.MultiLineDouble:
            return !new core.DartString(string).contains("\") && !new core.DartString(string).contains("") ? string : unescapeCodeUnits(new core.DartString(string).codeUnits,false);
        case Quote.RawSingle:
        case Quote.RawDouble:
            return string;
        case Quote.RawMultiLineSingle:
        case Quote.RawMultiLineDouble:
            return !new core.DartString(string).contains("") ? string : unescapeCodeUnits(new core.DartString(string).codeUnits,true);
    }
    return lib3.internalError(`Unhandled string quote: ${quote}`);
};
export var unescapeCodeUnits : (codeUnits : core.DartList<number>,isRaw : boolean) => string = (codeUnits : core.DartList<number>,isRaw : boolean) : string =>  {
    let result : core.DartList<number> = new core.DartList<number>(codeUnits.length);
    let resultOffset : number = 0;
    var error : (offset : number,message : string) => any = (offset : number,message : string) =>  {
        lib3.inputError(null,null,message);
    };
    for(let i : number = 0; i < codeUnits.length; i++){
        let code : number = codeUnits[i];
        if (code == lib4.properties.$CR) {
            if (i + 1 < codeUnits.length && codeUnits[i + 1] == lib4.properties.$LF) {
                i++;
            }
            code = lib4.properties.$LF;
        }else if (!isRaw && code == lib4.properties.$BACKSLASH) {
            if (codeUnits.length == ++i) return error(i,properties.incompleteSequence);
            code = codeUnits[i];
            if (code == lib4.properties.$n) {
                code = lib4.properties.$LF;
            }else if (code == lib4.properties.$r) {
                code = lib4.properties.$CR;
            }else if (code == lib4.properties.$f) {
                code = lib4.properties.$FF;
            }else if (code == lib4.properties.$b) {
                code = lib4.properties.$BS;
            }else if (code == lib4.properties.$t) {
                code = lib4.properties.$TAB;
            }else if (code == lib4.properties.$v) {
                code = lib4.properties.$VTAB;
            }else if (code == lib4.properties.$x) {
                if (codeUnits.length <= i + 2) return error(i,properties.incompleteSequence);
                code = 0;
                for(let j : number = 0; j < 2; j++){
                    let digit : number = codeUnits[++i];
                    if (!lib4.isHexDigit(digit)) return error(i,properties.invalidCharacter);
                    code = (code << 4) + lib4.hexDigitValue(digit);
                }
            }else if (code == lib4.properties.$u) {
                if (codeUnits.length == i + 1) return error(i,properties.incompleteSequence);
                code = codeUnits[i + 1];
                if (code == lib4.properties.$OPEN_CURLY_BRACKET) {
                    if (codeUnits.length == ++i) return error(i,properties.incompleteSequence);
                    code = 0;
                    for(let j : number = 0; j < 7; j++){
                        if (codeUnits.length == ++i) return error(i,properties.incompleteSequence);
                        let digit : number = codeUnits[i];
                        if (j != 0 && digit == lib4.properties.$CLOSE_CURLY_BRACKET) break;
                        if (!lib4.isHexDigit(digit)) return error(i,properties.invalidCharacter);
                        code = (code << 4) + lib4.hexDigitValue(digit);
                    }
                }else {
                    if (codeUnits.length <= i + 4) return error(i,properties.incompleteSequence);
                    code = 0;
                    for(let j : number = 0; j < 4; j++){
                        let digit : number = codeUnits[++i];
                        if (!lib4.isHexDigit(digit)) return error(i,properties.invalidCharacter);
                        code = (code << 4) + lib4.hexDigitValue(digit);
                    }
                }
            }else {
            }
            if (code > 1114111) return error(i,properties.invalidCodePoint);
        }
        result[resultOffset++] = code;
    }
    return new core.DartString.fromCharCodes(result,0,resultOffset).valueOf();
};
export enum Quote {
    Single,
    Double,
    MultiLineSingle,
    MultiLineDouble,
    RawSingle,
    RawDouble,
    RawMultiLineSingle,
    RawMultiLineDouble
}

export class properties {
    private static __$incompleteSequence : string;
    static get incompleteSequence() : string { 
        if (this.__$incompleteSequence===undefined) {
            this.__$incompleteSequence = "Incomplete escape sequence.";
        }
        return this.__$incompleteSequence;
    }
    static set incompleteSequence(__$value : string)  { 
        this.__$incompleteSequence = __$value;
    }

    private static __$invalidCharacter : string;
    static get invalidCharacter() : string { 
        if (this.__$invalidCharacter===undefined) {
            this.__$invalidCharacter = "Invalid character in escape sequence.";
        }
        return this.__$invalidCharacter;
    }
    static set invalidCharacter(__$value : string)  { 
        this.__$invalidCharacter = __$value;
    }

    private static __$invalidCodePoint : string;
    static get invalidCodePoint() : string { 
        if (this.__$invalidCodePoint===undefined) {
            this.__$invalidCodePoint = "Invalid code point.";
        }
        return this.__$invalidCodePoint;
    }
    static set invalidCodePoint(__$value : string)  { 
        this.__$invalidCodePoint = __$value;
    }

}
