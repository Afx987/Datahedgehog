/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/abstract_scanner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../scanner";
import * as lib4 from "./token";
import * as lib5 from "./../../scanner/token";
import * as lib6 from "./error_token";
import * as lib7 from "./characters";
import * as lib8 from "./token_constants";
import * as lib9 from "./keyword_state";
import * as collection from "@dart2ts/dart/core";
import * as math from "@dart2ts/dart/math";
import * as typed_data from "@dart2ts/dart/typed_data";

export var closeBraceInfoFor : (begin : lib4.BeginGroupToken) => lib5.TokenType = (begin : lib4.BeginGroupToken) : lib5.TokenType =>  {
    return new core.DartMap.literal([
        ['(',lib5.TokenType.CLOSE_PAREN],
        ['[',lib5.TokenType.CLOSE_SQUARE_BRACKET],
        ['{',lib5.TokenType.CLOSE_CURLY_BRACKET],
        ['<',lib5.TokenType.GT],
        ['${',lib5.TokenType.CLOSE_CURLY_BRACKET]]).get(begin.lexeme);
};
export namespace AbstractScanner {
    export type Constructors = 'AbstractScanner';
    export type Interface = Omit<AbstractScanner, Constructors>;
}
@DartClass
@Implements(lib3.Scanner)
export class AbstractScanner implements lib3.Scanner.Interface {
    includeComments : boolean;

    scanGenericMethodComments : boolean;

    scanLazyAssignmentOperators : boolean;

    tokenStart : number;

    tokens : lib5.Token;

    tail : lib5.Token;

    comments : lib4.CommentToken;

    commentsTail : lib5.Token;

    lineStarts : core.DartList<number>;

    constructor(includeComments : boolean,scanGenericMethodComments : boolean,scanLazyAssignmentOperators : boolean,_namedArguments? : {numberOfBytesHint? : number}) {
    }
    @defaultConstructor
    AbstractScanner(includeComments : boolean,scanGenericMethodComments : boolean,scanLazyAssignmentOperators : boolean,_namedArguments? : {numberOfBytesHint? : number}) {
        let {numberOfBytesHint} = Object.assign({
        }, _namedArguments );
        this.scanGenericMethodComments = false;
        this.scanLazyAssignmentOperators = false;
        this.tokenStart = -1;
        this.tokens = new lib4.SymbolToken.eof(-1);
        this.lineStarts = new LineStarts(numberOfBytesHint);
        this.includeComments = includeComments;
        this.scanGenericMethodComments = scanGenericMethodComments;
        this.scanLazyAssignmentOperators = scanLazyAssignmentOperators;
        this.tail = this.tokens;
    }
    @Abstract
    advance() : number{ throw 'abstract'}
    @Abstract
    currentAsUnicode(next : number) : number{ throw 'abstract'}
    @Abstract
    peek() : number{ throw 'abstract'}
    @Abstract
    handleUnicode(startScanOffset : number) : void{ throw 'abstract'}
    @AbstractProperty
    get scanOffset() : number{ throw 'abstract'}
    @AbstractProperty
    get stringOffset() : number{ throw 'abstract'}
    firstToken() : lib5.Token {
        return this.tokens.next;
    }
    beginToken() : void {
        this.tokenStart = this.stringOffset;
    }
    @Abstract
    appendSubstringToken(type : lib5.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : void{ throw 'abstract'}
    @Abstract
    appendPrecedenceToken(type : lib5.TokenType) : void{ throw 'abstract'}
    @Abstract
    select(choice : number,yes : lib5.TokenType,no : lib5.TokenType) : number{ throw 'abstract'}
    @Abstract
    appendKeywordToken(keyword : lib5.Keyword) : void{ throw 'abstract'}
    @Abstract
    appendEofToken() : void{ throw 'abstract'}
    @Abstract
    appendWhiteSpace(next : number) : void{ throw 'abstract'}
    @Abstract
    lineFeedInMultiline() : void{ throw 'abstract'}
    @Abstract
    appendBeginGroup(type : lib5.TokenType) : void{ throw 'abstract'}
    @Abstract
    appendEndGroup(type : lib5.TokenType,openKind : number) : number{ throw 'abstract'}
    @Abstract
    appendGt(type : lib5.TokenType) : void{ throw 'abstract'}
    @Abstract
    appendGtGt(type : lib5.TokenType) : void{ throw 'abstract'}
    @Abstract
    appendErrorToken(token : lib6.ErrorToken) : void{ throw 'abstract'}
    @Abstract
    createCommentToken(type : lib5.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib4.CommentToken{ throw 'abstract'}
    @Abstract
    createDartDocToken(type : lib5.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib4.DartDocToken{ throw 'abstract'}
    @Abstract
    discardOpenLt() : void{ throw 'abstract'}
    @Abstract
    atEndOfFile() : boolean{ throw 'abstract'}
    tokenize() : lib5.Token {
        while (!this.atEndOfFile()){
            let next : number = this.advance();
            while (!core.identical(next,lib7.properties.$EOF)){
                next = this.bigSwitch(next);
            }
            if (this.atEndOfFile()) {
                this.appendEofToken();
            }else {
                this.unexpected(lib7.properties.$EOF);
            }
        }
        this.lineStarts.add(this.stringOffset + 1);
        return this.firstToken();
    }
    bigSwitch(next : number) : number {
        this.beginToken();
        if (core.identical(next,lib7.properties.$SPACE) || core.identical(next,lib7.properties.$TAB) || core.identical(next,lib7.properties.$LF) || core.identical(next,lib7.properties.$CR)) {
            this.appendWhiteSpace(next);
            next = this.advance();
            while (core.identical(next,lib7.properties.$SPACE)){
                next = this.advance();
            }
            return next;
        }
        let nextLower : number = next | 32;
        if (lib7.properties.$a <= nextLower && nextLower <= lib7.properties.$z) {
            if (core.identical(lib7.properties.$r,next)) {
                return this.tokenizeRawStringKeywordOrIdentifier(next);
            }
            return this.tokenizeKeywordOrIdentifier(next,true);
        }
        if (core.identical(next,lib7.properties.$CLOSE_PAREN)) {
            return this.appendEndGroup(lib5.TokenType.CLOSE_PAREN,lib8.properties.OPEN_PAREN_TOKEN);
        }
        if (core.identical(next,lib7.properties.$OPEN_PAREN)) {
            this.appendBeginGroup(lib5.TokenType.OPEN_PAREN);
            return this.advance();
        }
        if (core.identical(next,lib7.properties.$SEMICOLON)) {
            this.appendPrecedenceToken(lib5.TokenType.SEMICOLON);
            this.discardOpenLt();
            return this.advance();
        }
        if (core.identical(next,lib7.properties.$PERIOD)) {
            return this.tokenizeDotsOrNumber(next);
        }
        if (core.identical(next,lib7.properties.$COMMA)) {
            this.appendPrecedenceToken(lib5.TokenType.COMMA);
            return this.advance();
        }
        if (core.identical(next,lib7.properties.$EQ)) {
            return this.tokenizeEquals(next);
        }
        if (core.identical(next,lib7.properties.$CLOSE_CURLY_BRACKET)) {
            return this.appendEndGroup(lib5.TokenType.CLOSE_CURLY_BRACKET,lib8.properties.OPEN_CURLY_BRACKET_TOKEN);
        }
        if (core.identical(next,lib7.properties.$SLASH)) {
            return this.tokenizeSlashOrComment(next);
        }
        if (core.identical(next,lib7.properties.$OPEN_CURLY_BRACKET)) {
            this.appendBeginGroup(lib5.TokenType.OPEN_CURLY_BRACKET);
            return this.advance();
        }
        if (core.identical(next,lib7.properties.$DQ) || core.identical(next,lib7.properties.$SQ)) {
            return this.tokenizeString(next,this.scanOffset,false);
        }
        if (core.identical(next,lib7.properties.$_)) {
            return this.tokenizeKeywordOrIdentifier(next,true);
        }
        if (core.identical(next,lib7.properties.$COLON)) {
            this.appendPrecedenceToken(lib5.TokenType.COLON);
            return this.advance();
        }
        if (core.identical(next,lib7.properties.$LT)) {
            return this.tokenizeLessThan(next);
        }
        if (core.identical(next,lib7.properties.$GT)) {
            return this.tokenizeGreaterThan(next);
        }
        if (core.identical(next,lib7.properties.$BANG)) {
            return this.tokenizeExclamation(next);
        }
        if (core.identical(next,lib7.properties.$OPEN_SQUARE_BRACKET)) {
            return this.tokenizeOpenSquareBracket(next);
        }
        if (core.identical(next,lib7.properties.$CLOSE_SQUARE_BRACKET)) {
            return this.appendEndGroup(lib5.TokenType.CLOSE_SQUARE_BRACKET,lib8.properties.OPEN_SQUARE_BRACKET_TOKEN);
        }
        if (core.identical(next,lib7.properties.$AT)) {
            return this.tokenizeAt(next);
        }
        if (next >= lib7.properties.$1 && next <= lib7.properties.$9) {
            return this.tokenizeNumber(next);
        }
        if (core.identical(next,lib7.properties.$AMPERSAND)) {
            return this.tokenizeAmpersand(next);
        }
        if (core.identical(next,lib7.properties.$0)) {
            return this.tokenizeHexOrNumber(next);
        }
        if (core.identical(next,lib7.properties.$QUESTION)) {
            return this.tokenizeQuestion(next);
        }
        if (core.identical(next,lib7.properties.$BAR)) {
            return this.tokenizeBar(next);
        }
        if (core.identical(next,lib7.properties.$PLUS)) {
            return this.tokenizePlus(next);
        }
        if (core.identical(next,lib7.properties.$$)) {
            return this.tokenizeKeywordOrIdentifier(next,true);
        }
        if (core.identical(next,lib7.properties.$MINUS)) {
            return this.tokenizeMinus(next);
        }
        if (core.identical(next,lib7.properties.$STAR)) {
            return this.tokenizeMultiply(next);
        }
        if (core.identical(next,lib7.properties.$CARET)) {
            return this.tokenizeCaret(next);
        }
        if (core.identical(next,lib7.properties.$TILDE)) {
            return this.tokenizeTilde(next);
        }
        if (core.identical(next,lib7.properties.$PERCENT)) {
            return this.tokenizePercent(next);
        }
        if (core.identical(next,lib7.properties.$BACKPING)) {
            this.appendPrecedenceToken(lib5.TokenType.BACKPING);
            return this.advance();
        }
        if (core.identical(next,lib7.properties.$BACKSLASH)) {
            this.appendPrecedenceToken(lib5.TokenType.BACKSLASH);
            return this.advance();
        }
        if (core.identical(next,lib7.properties.$HASH)) {
            return this.tokenizeTag(next);
        }
        if (next < 31) {
            return this.unexpected(next);
        }
        next = this.currentAsUnicode(next);
        return this.unexpected(next);
    }
    tokenizeTag(next : number) : number {
        if (this.scanOffset == 0) {
            if (core.identical(this.peek(),lib7.properties.$BANG)) {
                let start : number = this.scanOffset;
                let asciiOnly : boolean = true;
                do{
                    next = this.advance();
                    if (next > 127) asciiOnly = false;
                } while (!core.identical(next,lib7.properties.$LF) && !core.identical(next,lib7.properties.$CR) && !core.identical(next,lib7.properties.$EOF));
                if (!asciiOnly) this.handleUnicode(start);
                this.appendSubstringToken(lib5.TokenType.SCRIPT_TAG,start,asciiOnly);
                return next;
            }
        }
        this.appendPrecedenceToken(lib5.TokenType.HASH);
        return this.advance();
    }
    tokenizeTilde(next : number) : number {
        next = this.advance();
        if (core.identical(next,lib7.properties.$SLASH)) {
            return this.select(lib7.properties.$EQ,lib5.TokenType.TILDE_SLASH_EQ,lib5.TokenType.TILDE_SLASH);
        }else {
            this.appendPrecedenceToken(lib5.TokenType.TILDE);
            return next;
        }
    }
    tokenizeOpenSquareBracket(next : number) : number {
        next = this.advance();
        if (core.identical(next,lib7.properties.$CLOSE_SQUARE_BRACKET)) {
            return this.select(lib7.properties.$EQ,lib5.TokenType.INDEX_EQ,lib5.TokenType.INDEX);
        }
        this.appendBeginGroup(lib5.TokenType.OPEN_SQUARE_BRACKET);
        return next;
    }
    tokenizeCaret(next : number) : number {
        return this.select(lib7.properties.$EQ,lib5.TokenType.CARET_EQ,lib5.TokenType.CARET);
    }
    tokenizeQuestion(next : number) : number {
        next = this.advance();
        if (core.identical(next,lib7.properties.$QUESTION)) {
            return this.select(lib7.properties.$EQ,lib5.TokenType.QUESTION_QUESTION_EQ,lib5.TokenType.QUESTION_QUESTION);
        }else if (core.identical(next,lib7.properties.$PERIOD)) {
            this.appendPrecedenceToken(lib5.TokenType.QUESTION_PERIOD);
            return this.advance();
        }else {
            this.appendPrecedenceToken(lib5.TokenType.QUESTION);
            return next;
        }
    }
    tokenizeBar(next : number) : number {
        next = this.advance();
        if (core.identical(next,lib7.properties.$BAR)) {
            next = this.advance();
            if (this.scanLazyAssignmentOperators && core.identical(next,lib7.properties.$EQ)) {
                this.appendPrecedenceToken(lib5.TokenType.BAR_BAR_EQ);
                return this.advance();
            }
            this.appendPrecedenceToken(lib5.TokenType.BAR_BAR);
            return next;
        }else if (core.identical(next,lib7.properties.$EQ)) {
            this.appendPrecedenceToken(lib5.TokenType.BAR_EQ);
            return this.advance();
        }else {
            this.appendPrecedenceToken(lib5.TokenType.BAR);
            return next;
        }
    }
    tokenizeAmpersand(next : number) : number {
        next = this.advance();
        if (core.identical(next,lib7.properties.$AMPERSAND)) {
            next = this.advance();
            if (this.scanLazyAssignmentOperators && core.identical(next,lib7.properties.$EQ)) {
                this.appendPrecedenceToken(lib5.TokenType.AMPERSAND_AMPERSAND_EQ);
                return this.advance();
            }
            this.appendPrecedenceToken(lib5.TokenType.AMPERSAND_AMPERSAND);
            return next;
        }else if (core.identical(next,lib7.properties.$EQ)) {
            this.appendPrecedenceToken(lib5.TokenType.AMPERSAND_EQ);
            return this.advance();
        }else {
            this.appendPrecedenceToken(lib5.TokenType.AMPERSAND);
            return next;
        }
    }
    tokenizePercent(next : number) : number {
        return this.select(lib7.properties.$EQ,lib5.TokenType.PERCENT_EQ,lib5.TokenType.PERCENT);
    }
    tokenizeMultiply(next : number) : number {
        return this.select(lib7.properties.$EQ,lib5.TokenType.STAR_EQ,lib5.TokenType.STAR);
    }
    tokenizeMinus(next : number) : number {
        next = this.advance();
        if (core.identical(next,lib7.properties.$MINUS)) {
            this.appendPrecedenceToken(lib5.TokenType.MINUS_MINUS);
            return this.advance();
        }else if (core.identical(next,lib7.properties.$EQ)) {
            this.appendPrecedenceToken(lib5.TokenType.MINUS_EQ);
            return this.advance();
        }else {
            this.appendPrecedenceToken(lib5.TokenType.MINUS);
            return next;
        }
    }
    tokenizePlus(next : number) : number {
        next = this.advance();
        if (core.identical(lib7.properties.$PLUS,next)) {
            this.appendPrecedenceToken(lib5.TokenType.PLUS_PLUS);
            return this.advance();
        }else if (core.identical(lib7.properties.$EQ,next)) {
            this.appendPrecedenceToken(lib5.TokenType.PLUS_EQ);
            return this.advance();
        }else {
            this.appendPrecedenceToken(lib5.TokenType.PLUS);
            return next;
        }
    }
    tokenizeExclamation(next : number) : number {
        next = this.advance();
        if (core.identical(next,lib7.properties.$EQ)) {
            return this.select(lib7.properties.$EQ,lib5.TokenType.BANG_EQ_EQ,lib5.TokenType.BANG_EQ);
        }
        this.appendPrecedenceToken(lib5.TokenType.BANG);
        return next;
    }
    tokenizeEquals(next : number) : number {
        this.discardOpenLt();
        next = this.advance();
        if (core.identical(next,lib7.properties.$EQ)) {
            return this.select(lib7.properties.$EQ,lib5.TokenType.EQ_EQ_EQ,lib5.TokenType.EQ_EQ);
        }else if (core.identical(next,lib7.properties.$GT)) {
            this.appendPrecedenceToken(lib5.TokenType.FUNCTION);
            return this.advance();
        }
        this.appendPrecedenceToken(lib5.TokenType.EQ);
        return next;
    }
    tokenizeGreaterThan(next : number) : number {
        next = this.advance();
        if (core.identical(lib7.properties.$EQ,next)) {
            this.appendPrecedenceToken(lib5.TokenType.GT_EQ);
            return this.advance();
        }else if (core.identical(lib7.properties.$GT,next)) {
            next = this.advance();
            if (core.identical(lib7.properties.$EQ,next)) {
                this.appendPrecedenceToken(lib5.TokenType.GT_GT_EQ);
                return this.advance();
            }else {
                this.appendGtGt(lib5.TokenType.GT_GT);
                return next;
            }
        }else {
            this.appendGt(lib5.TokenType.GT);
            return next;
        }
    }
    tokenizeLessThan(next : number) : number {
        next = this.advance();
        if (core.identical(lib7.properties.$EQ,next)) {
            this.appendPrecedenceToken(lib5.TokenType.LT_EQ);
            return this.advance();
        }else if (core.identical(lib7.properties.$LT,next)) {
            return this.select(lib7.properties.$EQ,lib5.TokenType.LT_LT_EQ,lib5.TokenType.LT_LT);
        }else {
            this.appendBeginGroup(lib5.TokenType.LT);
            return next;
        }
    }
    tokenizeNumber(next : number) : number {
        let start : number = this.scanOffset;
        while (true){
            next = this.advance();
            if (lib7.properties.$0 <= next && next <= lib7.properties.$9) {
                continue;
            }else if (core.identical(next,lib7.properties.$e) || core.identical(next,lib7.properties.$E)) {
                return this.tokenizeFractionPart(next,start);
            }else {
                if (core.identical(next,lib7.properties.$PERIOD)) {
                    let nextnext : number = this.peek();
                    if (lib7.properties.$0 <= nextnext && nextnext <= lib7.properties.$9) {
                        return this.tokenizeFractionPart(this.advance(),start);
                    }
                }
                this.appendSubstringToken(lib5.TokenType.INT,start,true);
                return next;
            }
        }
    }
    tokenizeHexOrNumber(next : number) : number {
        let x : number = this.peek();
        if (core.identical(x,lib7.properties.$x) || core.identical(x,lib7.properties.$X)) {
            return this.tokenizeHex(next);
        }
        return this.tokenizeNumber(next);
    }
    tokenizeHex(next : number) : number {
        let start : number = this.scanOffset;
        next = this.advance();
        let hasDigits : boolean = false;
        while (true){
            next = this.advance();
            if ((lib7.properties.$0 <= next && next <= lib7.properties.$9) || (lib7.properties.$A <= next && next <= lib7.properties.$F) || (lib7.properties.$a <= next && next <= lib7.properties.$f)) {
                hasDigits = true;
            }else {
                if (!hasDigits) {
                    this.unterminated('0x',{
                        shouldAdvance : false});
                    return next;
                }
                this.appendSubstringToken(lib5.TokenType.HEXADECIMAL,start,true);
                return next;
            }
        }
    }
    tokenizeDotsOrNumber(next : number) : number {
        let start : number = this.scanOffset;
        next = this.advance();
        if ((lib7.properties.$0 <= next && next <= lib7.properties.$9)) {
            return this.tokenizeFractionPart(next,start);
        }else if (core.identical(lib7.properties.$PERIOD,next)) {
            return this.select(lib7.properties.$PERIOD,lib5.TokenType.PERIOD_PERIOD_PERIOD,lib5.TokenType.PERIOD_PERIOD);
        }else {
            this.appendPrecedenceToken(lib5.TokenType.PERIOD);
            return next;
        }
    }
    tokenizeFractionPart(next : number,start : number) : number {
        let done : boolean = false;
        let hasDigit : boolean = false;
        LOOP:
            while (!done){
                if (lib7.properties.$0 <= next && next <= lib7.properties.$9) {
                    hasDigit = true;
                }else if (core.identical(lib7.properties.$e,next) || core.identical(lib7.properties.$E,next)) {
                    hasDigit = true;
                    next = this.advance();
                    if (core.identical(next,lib7.properties.$PLUS) || core.identical(next,lib7.properties.$MINUS)) {
                        next = this.advance();
                    }
                    let hasExponentDigits : boolean = false;
                    while (true){
                        if (lib7.properties.$0 <= next && next <= lib7.properties.$9) {
                            hasExponentDigits = true;
                        }else {
                            if (!hasExponentDigits) {
                                this.unterminated('1e',{
                                    shouldAdvance : false});
                                return next;
                            }
                            break;
                        }
                        next = this.advance();
                    }
                    done = true;
                    continue;
                }else {
                    done = true;
                    continue;
                }
                next = this.advance();
            };
        if (!hasDigit) {
            this.appendSubstringToken(lib5.TokenType.INT,start,true,-1);
            if (core.identical(lib7.properties.$PERIOD,next)) {
                return this.select(lib7.properties.$PERIOD,lib5.TokenType.PERIOD_PERIOD_PERIOD,lib5.TokenType.PERIOD_PERIOD);
            }
            this.appendPrecedenceToken(lib5.TokenType.PERIOD);
            return next;
        }
        this.appendSubstringToken(lib5.TokenType.DOUBLE,start,true);
        return next;
    }
    tokenizeSlashOrComment(next : number) : number {
        let start : number = this.scanOffset;
        next = this.advance();
        if (core.identical(lib7.properties.$STAR,next)) {
            return this.tokenizeMultiLineComment(next,start);
        }else if (core.identical(lib7.properties.$SLASH,next)) {
            return this.tokenizeSingleLineComment(next,start);
        }else if (core.identical(lib7.properties.$EQ,next)) {
            this.appendPrecedenceToken(lib5.TokenType.SLASH_EQ);
            return this.advance();
        }else {
            this.appendPrecedenceToken(lib5.TokenType.SLASH);
            return next;
        }
    }
    tokenizeSingleLineComment(next : number,start : number) : number {
        let asciiOnly : boolean = true;
        let dartdoc : boolean = core.identical(lib7.properties.$SLASH,this.peek());
        while (true){
            next = this.advance();
            if (next > 127) asciiOnly = false;
            if (core.identical(lib7.properties.$LF,next) || core.identical(lib7.properties.$CR,next) || core.identical(lib7.properties.$EOF,next)) {
                if (!asciiOnly) this.handleUnicode(start);
                if (dartdoc) {
                    this.appendDartDoc(start,lib5.TokenType.SINGLE_LINE_COMMENT,asciiOnly);
                }else {
                    this.appendComment(start,lib5.TokenType.SINGLE_LINE_COMMENT,asciiOnly);
                }
                return next;
            }
        }
    }
    tokenizeMultiLineComment(next : number,start : number) : number {
        let asciiOnlyComment : boolean = true;
        let asciiOnlyLines : boolean = true;
        let unicodeStart : number = start;
        let nesting : number = 1;
        next = this.advance();
        let dartdoc : boolean = core.identical(lib7.properties.$STAR,next);
        while (true){
            if (core.identical(lib7.properties.$EOF,next)) {
                if (!asciiOnlyLines) this.handleUnicode(unicodeStart);
                this.unterminated('/*');
                break;
            }else if (core.identical(lib7.properties.$STAR,next)) {
                next = this.advance();
                if (core.identical(lib7.properties.$SLASH,next)) {
                    --nesting;
                    if (0 == nesting) {
                        if (!asciiOnlyLines) this.handleUnicode(unicodeStart);
                        next = this.advance();
                        if (dartdoc) {
                            this.appendDartDoc(start,lib5.TokenType.MULTI_LINE_COMMENT,asciiOnlyComment);
                        }else {
                            this.appendComment(start,lib5.TokenType.MULTI_LINE_COMMENT,asciiOnlyComment);
                        }
                        break;
                    }else {
                        next = this.advance();
                    }
                }
            }else if (core.identical(lib7.properties.$SLASH,next)) {
                next = this.advance();
                if (core.identical(lib7.properties.$STAR,next)) {
                    next = this.advance();
                    ++nesting;
                }
            }else if (core.identical(next,lib7.properties.$LF)) {
                if (!asciiOnlyLines) {
                    this.handleUnicode(unicodeStart);
                    asciiOnlyLines = true;
                    unicodeStart = this.scanOffset;
                }
                this.lineFeedInMultiline();
                next = this.advance();
            }else {
                if (next > 127) {
                    asciiOnlyLines = false;
                    asciiOnlyComment = false;
                }
                next = this.advance();
            }
        }
        return next;
    }
    appendComment(start : number,type : lib5.TokenType,asciiOnly : boolean) : void {
        if (!this.includeComments) return;
        let newComment : lib4.CommentToken = this.createCommentToken(type,start,asciiOnly);
        if (this.scanGenericMethodComments) {
            let value : string = newComment.lexeme;
            let length : number = new core.DartString(value).length;
            if (length > 5 && new core.DartString(value).codeUnitAt(0) == lib7.properties.$SLASH && new core.DartString(value).codeUnitAt(1) == lib7.properties.$STAR && new core.DartString(value).codeUnitAt(2) == lib7.properties.$EQ) {
                newComment = new lib4.CommentToken.fromString(lib5.TokenType.GENERIC_METHOD_TYPE_ASSIGN,value,start);
            }else if (length > 6 && new core.DartString(value).codeUnitAt(0) == lib7.properties.$SLASH && new core.DartString(value).codeUnitAt(1) == lib7.properties.$STAR && new core.DartString(value).codeUnitAt(2) == lib7.properties.$LT && new core.DartString(value).codeUnitAt(length - 1) == lib7.properties.$SLASH && new core.DartString(value).codeUnitAt(length - 2) == lib7.properties.$STAR && new core.DartString(value).codeUnitAt(length - 3) == lib7.properties.$GT) {
                newComment = new lib4.CommentToken.fromString(lib5.TokenType.GENERIC_METHOD_TYPE_LIST,value,start);
            }
        }
        this._appendToCommentStream(newComment);
    }
    appendDartDoc(start : number,type : lib5.TokenType,asciiOnly : boolean) : void {
        if (!this.includeComments) return;
        let newComment : lib5.Token = this.createDartDocToken(type,start,asciiOnly);
        this._appendToCommentStream(newComment);
    }
    appendToken(token : lib5.Token) : void {
        this.tail.next = token;
        this.tail.next.previous = this.tail;
        this.tail = this.tail.next;
        if (this.comments != null) {
            /* TODO (AssertStatementImpl) : assert (identical(token.precedingComments, comments)); */;
            this.comments = null;
            this.commentsTail = null;
        }
    }
    _appendToCommentStream(newComment : lib5.Token) : void {
        if (op(Op.EQUALS,this.comments,null)) {
            this.comments = newComment;
            this.commentsTail = this.comments;
        }else {
            this.commentsTail.next = newComment;
            this.commentsTail.next.previous = this.commentsTail;
            this.commentsTail = this.commentsTail.next;
        }
    }
    tokenizeRawStringKeywordOrIdentifier(next : number) : number {
        let nextnext : number = this.peek();
        if (core.identical(nextnext,lib7.properties.$DQ) || core.identical(nextnext,lib7.properties.$SQ)) {
            let start : number = this.scanOffset;
            next = this.advance();
            return this.tokenizeString(next,start,true);
        }
        return this.tokenizeKeywordOrIdentifier(next,true);
    }
    tokenizeKeywordOrIdentifier(next : number,allowDollar : boolean) : number {
        let state : lib9.KeywordState = lib9.KeywordState.KEYWORD_STATE;
        let start : number = this.scanOffset;
        if (lib7.properties.$A <= next && next <= lib7.properties.$Z) {
            state = state.nextCapital(next);
            next = this.advance();
        }else if (lib7.properties.$a <= next && next <= lib7.properties.$z) {
            state = state.next(next);
            next = this.advance();
        }
        while (state != null && lib7.properties.$a <= next && next <= lib7.properties.$z){
            state = state.next(next);
            next = this.advance();
        }
        if (op(Op.EQUALS,state,null) || op(Op.EQUALS,state.keyword,null)) {
            return this.tokenizeIdentifier(next,start,allowDollar);
        }
        if ((lib7.properties.$A <= next && next <= lib7.properties.$Z) || (lib7.properties.$0 <= next && next <= lib7.properties.$9) || core.identical(next,lib7.properties.$_) || core.identical(next,lib7.properties.$$)) {
            return this.tokenizeIdentifier(next,start,allowDollar);
        }else {
            this.appendKeywordToken(state.keyword);
            return next;
        }
    }
    tokenizeIdentifier(next : number,start : number,allowDollar : boolean) : number {
        while (true){
            if ((lib7.properties.$a <= next && next <= lib7.properties.$z) || (lib7.properties.$A <= next && next <= lib7.properties.$Z) || (lib7.properties.$0 <= next && next <= lib7.properties.$9) || core.identical(next,lib7.properties.$_) || (core.identical(next,lib7.properties.$$) && allowDollar)) {
                next = this.advance();
            }else {
                if (start == this.scanOffset) {
                    return this.unexpected(next);
                }else {
                    this.appendSubstringToken(lib5.TokenType.IDENTIFIER,start,true);
                }
                break;
            }
        }
        return next;
    }
    tokenizeAt(next : number) : number {
        this.appendPrecedenceToken(lib5.TokenType.AT);
        return this.advance();
    }
    tokenizeString(next : number,start : number,raw : boolean) : number {
        let quoteChar : number = next;
        next = this.advance();
        if (core.identical(quoteChar,next)) {
            next = this.advance();
            if (core.identical(quoteChar,next)) {
                return this.tokenizeMultiLineString(quoteChar,start,raw);
            }else {
                this.appendSubstringToken(lib5.TokenType.STRING,start,true);
                return next;
            }
        }
        if (raw) {
            return this.tokenizeSingleLineRawString(next,quoteChar,start);
        }else {
            return this.tokenizeSingleLineString(next,quoteChar,start);
        }
    }
    tokenizeSingleLineString(next : number,quoteChar : number,start : number) : number {
        let asciiOnly : boolean = true;
        while (!core.identical(next,quoteChar)){
            if (core.identical(next,lib7.properties.$BACKSLASH)) {
                next = this.advance();
            }else if (core.identical(next,lib7.properties.$$)) {
                if (!asciiOnly) this.handleUnicode(start);
                next = this.tokenizeStringInterpolation(start,asciiOnly);
                start = this.scanOffset;
                asciiOnly = true;
                continue;
            }
            if (next <= lib7.properties.$CR && (core.identical(next,lib7.properties.$LF) || core.identical(next,lib7.properties.$CR) || core.identical(next,lib7.properties.$EOF))) {
                if (!asciiOnly) this.handleUnicode(start);
                return this.unterminatedString(quoteChar);
            }
            if (next > 127) asciiOnly = false;
            next = this.advance();
        }
        if (!asciiOnly) this.handleUnicode(start);
        next = this.advance();
        this.appendSubstringToken(lib5.TokenType.STRING,start,asciiOnly);
        return next;
    }
    tokenizeStringInterpolation(start : number,asciiOnly : boolean) : number {
        this.appendSubstringToken(lib5.TokenType.STRING,start,asciiOnly);
        this.beginToken();
        let next : number = this.advance();
        if (core.identical(next,lib7.properties.$OPEN_CURLY_BRACKET)) {
            return this.tokenizeInterpolatedExpression(next);
        }else {
            return this.tokenizeInterpolatedIdentifier(next);
        }
    }
    tokenizeInterpolatedExpression(next : number) : number {
        this.appendBeginGroup(lib5.TokenType.STRING_INTERPOLATION_EXPRESSION);
        this.beginToken();
        next = this.advance();
        while (!core.identical(next,lib7.properties.$EOF) && !core.identical(next,lib7.properties.$STX)){
            next = this.bigSwitch(next);
        }
        if (core.identical(next,lib7.properties.$EOF)) return next;
        next = this.advance();
        this.beginToken();
        return next;
    }
    tokenizeInterpolatedIdentifier(next : number) : number {
        this.appendPrecedenceToken(lib5.TokenType.STRING_INTERPOLATION_IDENTIFIER);
        if (lib7.properties.$a <= next && next <= lib7.properties.$z || lib7.properties.$A <= next && next <= lib7.properties.$Z || core.identical(next,lib7.properties.$_)) {
            this.beginToken();
            next = this.tokenizeKeywordOrIdentifier(next,false);
        }else {
            this.unterminated('$',{
                shouldAdvance : false});
        }
        this.beginToken();
        return next;
    }
    tokenizeSingleLineRawString(next : number,quoteChar : number,start : number) : number {
        let asciiOnly : boolean = true;
        while (next != lib7.properties.$EOF){
            if (core.identical(next,quoteChar)) {
                if (!asciiOnly) this.handleUnicode(start);
                next = this.advance();
                this.appendSubstringToken(lib5.TokenType.STRING,start,asciiOnly);
                return next;
            }else if (core.identical(next,lib7.properties.$LF) || core.identical(next,lib7.properties.$CR)) {
                if (!asciiOnly) this.handleUnicode(start);
                return this.unterminatedRawString(quoteChar);
            }else if (next > 127) {
                asciiOnly = false;
            }
            next = this.advance();
        }
        if (!asciiOnly) this.handleUnicode(start);
        return this.unterminatedRawString(quoteChar);
    }
    tokenizeMultiLineRawString(quoteChar : number,start : number) : number {
        let asciiOnlyString : boolean = true;
        let asciiOnlyLine : boolean = true;
        let unicodeStart : number = start;
        let next : number = this.advance();
        outer:
            while (!core.identical(next,lib7.properties.$EOF)){
                while (!core.identical(next,quoteChar)){
                    if (core.identical(next,lib7.properties.$LF)) {
                        if (!asciiOnlyLine) {
                            this.handleUnicode(unicodeStart);
                            asciiOnlyLine = true;
                            unicodeStart = this.scanOffset;
                        }
                        this.lineFeedInMultiline();
                    }else if (next > 127) {
                        asciiOnlyLine = false;
                        asciiOnlyString = false;
                    }
                    next = this.advance();
                    if (core.identical(next,lib7.properties.$EOF)) break;
                }
                next = this.advance();
                if (core.identical(next,quoteChar)) {
                    next = this.advance();
                    if (core.identical(next,quoteChar)) {
                        if (!asciiOnlyLine) this.handleUnicode(unicodeStart);
                        next = this.advance();
                        this.appendSubstringToken(lib5.TokenType.STRING,start,asciiOnlyString);
                        return next;
                    }
                }
            };
        if (!asciiOnlyLine) this.handleUnicode(unicodeStart);
        return this.unterminatedRawMultiLineString(quoteChar);
    }
    tokenizeMultiLineString(quoteChar : number,start : number,raw : boolean) : number {
        if (raw) return this.tokenizeMultiLineRawString(quoteChar,start);
        let asciiOnlyString : boolean = true;
        let asciiOnlyLine : boolean = true;
        let unicodeStart : number = start;
        let next : number = this.advance();
        while (!core.identical(next,lib7.properties.$EOF)){
            if (core.identical(next,lib7.properties.$$)) {
                if (!asciiOnlyLine) this.handleUnicode(unicodeStart);
                next = this.tokenizeStringInterpolation(start,asciiOnlyString);
                start = this.scanOffset;
                unicodeStart = start;
                asciiOnlyString = true;
                asciiOnlyLine = true;
                continue;
            }
            if (core.identical(next,quoteChar)) {
                next = this.advance();
                if (core.identical(next,quoteChar)) {
                    next = this.advance();
                    if (core.identical(next,quoteChar)) {
                        if (!asciiOnlyLine) this.handleUnicode(unicodeStart);
                        next = this.advance();
                        this.appendSubstringToken(lib5.TokenType.STRING,start,asciiOnlyString);
                        return next;
                    }
                }
                continue;
            }
            if (core.identical(next,lib7.properties.$BACKSLASH)) {
                next = this.advance();
                if (core.identical(next,lib7.properties.$EOF)) break;
            }
            if (core.identical(next,lib7.properties.$LF)) {
                if (!asciiOnlyLine) {
                    this.handleUnicode(unicodeStart);
                    asciiOnlyLine = true;
                    unicodeStart = this.scanOffset;
                }
                this.lineFeedInMultiline();
            }else if (next > 127) {
                asciiOnlyString = false;
                asciiOnlyLine = false;
            }
            next = this.advance();
        }
        if (!asciiOnlyLine) this.handleUnicode(unicodeStart);
        return this.unterminatedMultiLineString(quoteChar);
    }
    unexpected(character : number) : number {
        this.appendErrorToken(lib6.buildUnexpectedCharacterToken(character,this.tokenStart));
        return this.advanceAfterError(true);
    }
    unterminated(prefix : string,_namedArguments? : {shouldAdvance? : boolean}) : number {
        let {shouldAdvance} = Object.assign({
            "shouldAdvance" : true}, _namedArguments );
        this.appendErrorToken(new lib6.UnterminatedToken(prefix,this.tokenStart,this.stringOffset));
        return this.advanceAfterError(shouldAdvance);
    }
    unterminatedString(quoteChar : number) : number {
        return this.unterminated(new core.DartString.fromCharCodes(new core.DartList.literal(quoteChar)).valueOf());
    }
    unterminatedRawString(quoteChar : number) : number {
        return this.unterminated(`r${new core.DartString.fromCharCodes(new core.DartList.literal(quoteChar)).valueOf()}`);
    }
    unterminatedMultiLineString(quoteChar : number) : number {
        return this.unterminated(new core.DartString.fromCharCodes(new core.DartList.literal(quoteChar,quoteChar,quoteChar)).valueOf());
    }
    unterminatedRawMultiLineString(quoteChar : number) : number {
        return this.unterminated(`r${new core.DartString.fromCharCodes(new core.DartList.literal(quoteChar,quoteChar,quoteChar)).valueOf()}`);
    }
    advanceAfterError(shouldAdvance : boolean) : number {
        if (this.atEndOfFile()) return lib7.properties.$EOF;
        if (shouldAdvance) {
            return this.advance();
        }else {
            return -1;
        }
    }
}

export namespace LineStarts {
    export type Constructors = 'LineStarts';
    export type Interface = Omit<LineStarts, Constructors>;
}
@DartClass
@With(core.DartListMixin)
export class LineStarts extends core.DartObject implements core.DartListMixin.Interface<number> {
    @Abstract
    elementAt(index : number) : number {
        throw 'from mixin';
    }
    @Abstract
    forEach(action : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    every(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    any(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : number {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : number {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(element : E) => boolean) : number {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    where(test : <E>(element : E) => boolean) : core.DartIterable<number> {
        throw 'from mixin';
    }
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(previousValue : E,element : E) => E) : number {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<number> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<number> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<number> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<number> {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<number> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<number> {
        throw 'from mixin';
    }
    @Abstract
    addAll(iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    remove(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    _filter(test : <E>(element : any) => boolean,retainMatching : boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    clear() : void {
        throw 'from mixin';
    }
    @Abstract
    removeLast() : number {
        throw 'from mixin';
    }
    @Abstract
    sort(compare? : <E>(a : E,b : E) => number) : void {
        throw 'from mixin';
    }
    @Abstract
    _compareAny(a : any,b : any) : number {
        throw 'from mixin';
    }
    @Abstract
    shuffle(random? : math.Random) : void {
        throw 'from mixin';
    }
    @Abstract
    asMap() : core.DartMap<number,number> {
        throw 'from mixin';
    }
    @Abstract
    sublist(start : number,end? : number) : core.DartList<number> {
        throw 'from mixin';
    }
    @Abstract
    getRange(start : number,end : number) : core.DartIterable<number> {
        throw 'from mixin';
    }
    @Abstract
    removeRange(start : number,end : number) : void {
        throw 'from mixin';
    }
    @Abstract
    fillRange(start : number,end : number,fill? : E) : void {
        throw 'from mixin';
    }
    @Abstract
    setRange(start : number,end : number,iterable : core.DartIterable<E>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        throw 'from mixin';
    }
    @Abstract
    replaceRange(start : number,end : number,newContents : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    indexOf(element : core.DartObject,startIndex? : number) : number {
        startIndex = startIndex || 0;
        throw 'from mixin';
    }
    @Abstract
    lastIndexOf(element : core.DartObject,startIndex? : number) : number {
        throw 'from mixin';
    }
    @Abstract
    insert(index : number,element : E) : void {
        throw 'from mixin';
    }
    @Abstract
    removeAt(index : number) : number {
        throw 'from mixin';
    }
    @Abstract
    insertAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    setAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    array : core.DartList<number>;

    arrayLength : number;

    constructor(numberOfBytesHint : number) {
    }
    @defaultConstructor
    LineStarts(numberOfBytesHint : number) {
        this.arrayLength = 0;
        if (numberOfBytesHint == null) numberOfBytesHint = 300;
        let expectedNumberOfLines : number = 1 + (op(Op.QUOTIENT,numberOfBytesHint,22));
        if (numberOfBytesHint > 65535) {
            this.array = new typed_data.Uint32List(expectedNumberOfLines);
        }else {
            this.array = new typed_data.Uint16List(expectedNumberOfLines);
        }
        this.add(0);
    }
    get length() : number {
        return this.arrayLength;
    }
    [OperatorMethods.INDEX](index : number) : number {
        /* TODO (AssertStatementImpl) : assert (index < arrayLength); */;
        return this.array[index];
    }
    set length(newLength : number) {
        if (newLength > this.array.length) {
            this.grow(newLength);
        }
        this.arrayLength = newLength;
    }
    [OperatorMethods.INDEX_EQ](index : number,value : number) : void {
        if (value > 65535 && isNot(this.array, typed_data.Uint32List)) {
            this.switchToUint32(this.array.length);
        }
        this.array[index] = value;
    }
    add(value : number) : void {
        if (this.arrayLength >= this.array.length) {
            this.grow(0);
        }
        if (value > 65535 && isNot(this.array, typed_data.Uint32List)) {
            this.switchToUint32(this.array.length);
        }
        this.array[this.arrayLength++] = value;
    }
    grow(newLengthMinimum : number) : void {
        let newLength : number = this.array.length * 2;
        if (newLength < newLengthMinimum) newLength = newLengthMinimum;
        if (is(this.array, typed_data.Uint16List)) {
            let newArray = new typed_data.Uint16List(newLength);
            newArray.setRange(0,this.arrayLength,this.array);
            this.array = newArray;
        }else {
            this.switchToUint32(newLength);
        }
    }
    switchToUint32(newLength : number) : void {
        let newArray = new typed_data.Uint32List(newLength);
        newArray.setRange(0,this.arrayLength,this.array);
        this.array = newArray;
    }
}

export class properties {
}
