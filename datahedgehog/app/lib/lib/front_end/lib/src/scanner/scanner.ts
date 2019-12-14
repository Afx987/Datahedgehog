/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/scanner/scanner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/charcode/lib/ascii";

export namespace KeywordState {
    export type Constructors = 'KeywordState';
    export type Interface = Omit<KeywordState, Constructors>;
}
@DartClass
export class KeywordState {
    private static __$_EMPTY_TABLE : core.DartList<KeywordState>;
    static get _EMPTY_TABLE() : core.DartList<KeywordState> { 
        if (this.__$_EMPTY_TABLE===undefined) {
            this.__$_EMPTY_TABLE = new core.DartList<KeywordState>(lib3.properties.$z - lib3.properties.$A + 1);
        }
        return this.__$_EMPTY_TABLE;
    }
    static set _EMPTY_TABLE(__$value : core.DartList<KeywordState>)  { 
        this.__$_EMPTY_TABLE = __$value;
    }

    private static __$KEYWORD_STATE : KeywordState;
    static get KEYWORD_STATE() : KeywordState { 
        if (this.__$KEYWORD_STATE===undefined) {
            this.__$KEYWORD_STATE = KeywordState._createKeywordStateTable();
        }
        return this.__$KEYWORD_STATE;
    }
    static set KEYWORD_STATE(__$value : KeywordState)  { 
        this.__$KEYWORD_STATE = __$value;
    }

    _table : core.DartList<KeywordState>;

    _keyword : any;

    constructor(_table : core.DartList<KeywordState>,syntax : string) {
    }
    @defaultConstructor
    KeywordState(_table : core.DartList<KeywordState>,syntax : string) {
        this._table = _table;
        this._keyword = (syntax == null) ? null : op(Op.INDEX,Keyword.keywords,syntax);
    }
    keyword() : any {
        return this._keyword;
    }
    next(character : number) : KeywordState {
        return this._table[character - lib3.properties.$A];
    }
    static _computeKeywordStateTable(start : number,strings : core.DartList<string>,offset : number,length : number) : KeywordState {
        let result : core.DartList<KeywordState> = new core.DartList<KeywordState>(lib3.properties.$z - lib3.properties.$A + 1);
        /* TODO (AssertStatementImpl) : assert (length != 0); */;
        let chunk : number = lib3.properties.$nul;
        let chunkStart : number = -1;
        let isLeaf : boolean = false;
        for(let i : number = offset; i < offset + length; i++){
            if (new core.DartString(strings[i]).length == start) {
                isLeaf = true;
            }
            if (new core.DartString(strings[i]).length > start) {
                let c : number = new core.DartString(strings[i]).codeUnitAt(start);
                if (chunk != c) {
                    if (chunkStart != -1) {
                        result[chunk - lib3.properties.$A] = KeywordState._computeKeywordStateTable(start + 1,strings,chunkStart,i - chunkStart);
                    }
                    chunkStart = i;
                    chunk = c;
                }
            }
        }
        if (chunkStart != -1) {
            /* TODO (AssertStatementImpl) : assert (result[chunk - $A] == null); */;
            result[chunk - lib3.properties.$A] = KeywordState._computeKeywordStateTable(start + 1,strings,chunkStart,offset + length - chunkStart);
        }else {
            /* TODO (AssertStatementImpl) : assert (length == 1); */;
            return new KeywordState(KeywordState._EMPTY_TABLE,strings[offset]);
        }
        if (isLeaf) {
            return new KeywordState(result,strings[offset]);
        }else {
            return new KeywordState(result,null);
        }
    }
    static _createKeywordStateTable() : KeywordState {
        let values : core.DartList<any> = Keyword.values;
        let strings : core.DartList<string> = new core.DartList<string>(values.length);
        for(let i : number = 0; i < values.length; i++){
            strings[i] = values[i].lexeme;
        }
        strings.sort();
        return KeywordState._computeKeywordStateTable(0,strings,0,strings.length);
    }
}

export namespace Scanner {
    export type Constructors = 'create';
    export type Interface = Omit<Scanner, Constructors>;
}
@DartClass
export class Scanner {
    private static __$useFasta : boolean;
    static get useFasta() : boolean { 
        if (this.__$useFasta===undefined) {
            this.__$useFasta = false;
        }
        return this.__$useFasta;
    }
    static set useFasta(__$value : boolean)  { 
        this.__$useFasta = __$value;
    }

    _reader : any;

    _preserveComments : boolean;

    _tokens : any;

    _tail : any;

    _firstComment : any;

    _lastComment : any;

    _tokenStart : number;

    _lineStarts : core.DartList<number>;

    _groupingStack : core.DartList<any>;

    _stackEnd : number;

    _hasUnmatchedGroups : boolean;

    scanGenericMethodComments : boolean;

    scanLazyAssignmentOperators : boolean;

    @namedConstructor
    create(_reader : any) {
        this._preserveComments = true;
        this._tokenStart = 0;
        this._lineStarts = new core.DartList<number>();
        this._groupingStack = new core.DartList<any>();
        this._stackEnd = -1;
        this._hasUnmatchedGroups = false;
        this.scanGenericMethodComments = false;
        this.scanLazyAssignmentOperators = false;
        this._reader = _reader;
        this._tokens = new bare.createInstance(any,null,TokenType.EOF,-1);
        this._tokens.setNext(this._tokens);
        this._tail = this._tokens;
        this._tokenStart = -1;
        this._lineStarts.add(0);
    }
    static create : new(_reader : any) => Scanner;

    get firstToken() : any {
        return this._tokens.next;
    }
    get hasUnmatchedGroups() : boolean {
        return this._hasUnmatchedGroups;
    }
    get lineStarts() : core.DartList<number> {
        return this._lineStarts;
    }
    set preserveComments(preserveComments : boolean) {
        this._preserveComments = preserveComments;
    }
    get tail() : any {
        return this._tail;
    }
    appendToken(token : any) : void {
        this._tail = this._tail.setNext(token);
    }
    bigSwitch(next : number) : number {
        this._beginToken();
        if (next == lib3.properties.$cr) {
            next = this._reader.advance();
            if (next == lib3.properties.$lf) {
                next = this._reader.advance();
            }
            this.recordStartOfLine();
            return next;
        }else if (next == lib3.properties.$lf) {
            next = this._reader.advance();
            this.recordStartOfLine();
            return next;
        }else if (next == lib3.properties.$tab || next == lib3.properties.$space) {
            return this._reader.advance();
        }
        if (next == lib3.properties.$r) {
            let peek : number = this._reader.peek();
            if (peek == lib3.properties.$double_quote || peek == lib3.properties.$single_quote) {
                let start : number = this._reader.offset;
                return this._tokenizeString(this._reader.advance(),start,true);
            }
        }
        if ((lib3.properties.$A <= next && next <= lib3.properties.$Z) || (lib3.properties.$a <= next && next <= lib3.properties.$z)) {
            return this._tokenizeKeywordOrIdentifier(next,true);
        }
        if (next == lib3.properties.$_ || next == lib3.properties.$$) {
            return this._tokenizeIdentifier(next,this._reader.offset,true);
        }
        if (next == lib3.properties.$lt) {
            return this._tokenizeLessThan(next);
        }
        if (next == lib3.properties.$gt) {
            return this._tokenizeGreaterThan(next);
        }
        if (next == lib3.properties.$equal) {
            return this._tokenizeEquals(next);
        }
        if (next == lib3.properties.$exclamation) {
            return this._tokenizeExclamation(next);
        }
        if (next == lib3.properties.$plus) {
            return this._tokenizePlus(next);
        }
        if (next == lib3.properties.$minus) {
            return this._tokenizeMinus(next);
        }
        if (next == lib3.properties.$asterisk) {
            return this._tokenizeMultiply(next);
        }
        if (next == lib3.properties.$percent) {
            return this._tokenizePercent(next);
        }
        if (next == lib3.properties.$ampersand) {
            return this._tokenizeAmpersand(next);
        }
        if (next == lib3.properties.$bar) {
            return this._tokenizeBar(next);
        }
        if (next == lib3.properties.$caret) {
            return this._tokenizeCaret(next);
        }
        if (next == lib3.properties.$open_bracket) {
            return this._tokenizeOpenSquareBracket(next);
        }
        if (next == lib3.properties.$tilde) {
            return this._tokenizeTilde(next);
        }
        if (next == lib3.properties.$backslash) {
            this._appendTokenOfType(TokenType.BACKSLASH);
            return this._reader.advance();
        }
        if (next == lib3.properties.$hash) {
            return this._tokenizeTag(next);
        }
        if (next == lib3.properties.$open_paren) {
            this._appendBeginToken(TokenType.OPEN_PAREN);
            return this._reader.advance();
        }
        if (next == lib3.properties.$close_paren) {
            this._appendEndToken(TokenType.CLOSE_PAREN,TokenType.OPEN_PAREN);
            return this._reader.advance();
        }
        if (next == lib3.properties.$comma) {
            this._appendTokenOfType(TokenType.COMMA);
            return this._reader.advance();
        }
        if (next == lib3.properties.$colon) {
            this._appendTokenOfType(TokenType.COLON);
            return this._reader.advance();
        }
        if (next == lib3.properties.$semicolon) {
            this._appendTokenOfType(TokenType.SEMICOLON);
            return this._reader.advance();
        }
        if (next == lib3.properties.$question) {
            return this._tokenizeQuestion();
        }
        if (next == lib3.properties.$close_bracket) {
            this._appendEndToken(TokenType.CLOSE_SQUARE_BRACKET,TokenType.OPEN_SQUARE_BRACKET);
            return this._reader.advance();
        }
        if (next == lib3.properties.$backquote) {
            this._appendTokenOfType(TokenType.BACKPING);
            return this._reader.advance();
        }
        if (next == lib3.properties.$lbrace) {
            this._appendBeginToken(TokenType.OPEN_CURLY_BRACKET);
            return this._reader.advance();
        }
        if (next == lib3.properties.$rbrace) {
            this._appendEndToken(TokenType.CLOSE_CURLY_BRACKET,TokenType.OPEN_CURLY_BRACKET);
            return this._reader.advance();
        }
        if (next == lib3.properties.$slash) {
            return this._tokenizeSlashOrComment(next);
        }
        if (next == lib3.properties.$at) {
            this._appendTokenOfType(TokenType.AT);
            return this._reader.advance();
        }
        if (next == lib3.properties.$double_quote || next == lib3.properties.$single_quote) {
            return this._tokenizeString(next,this._reader.offset,false);
        }
        if (next == lib3.properties.$dot) {
            return this._tokenizeDotOrNumber(next);
        }
        if (next == lib3.properties.$0) {
            return this._tokenizeHexOrNumber(next);
        }
        if (lib3.properties.$1 <= next && next <= lib3.properties.$9) {
            return this._tokenizeNumber(next);
        }
        if (next == -1) {
            return -1;
        }
        this._reportError(ScannerErrorCode.ILLEGAL_CHARACTER,new core.DartList.literal(next));
        return this._reader.advance();
    }
    recordStartOfLine() : void {
        this._lineStarts.add(this._reader.offset);
    }
    @Abstract
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void{ throw 'abstract'}
    setSourceStart(line : number,column : number) : void {
        let offset : number = this._reader.offset;
        if (line < 1 || column < 1 || offset < 0 || (line + column - 2) >= offset) {
            return;
        }
        for(let i : number = 2; i < line; i++){
            this._lineStarts.add(1);
        }
        this._lineStarts.add(offset - column + 1);
    }
    tokenize() : any {
        let next : number = this._reader.advance();
        while (next != -1){
            next = this.bigSwitch(next);
        }
        this._appendEofToken();
        return this.firstToken;
    }
    _appendBeginToken(type : any) : void {
        let token : any;
        if (op(Op.EQUALS,this._firstComment,null)) {
            token = new bare.createInstance(any,null,type,this._tokenStart);
        }else {
            token = new bare.createInstance(any,null,type,this._tokenStart,this._firstComment);
            this._firstComment = null;
            this._lastComment = null;
        }
        this._tail = this._tail.setNext(token);
        this._groupingStack.add(token);
        this._stackEnd++;
    }
    _appendCommentToken(type : any,value : string) : void {
        let token : any = null;
        let genericComment : any = this._matchGenericMethodCommentType(value);
        if (genericComment != null) {
            token = new bare.createInstance(any,null,genericComment,value,this._tokenStart);
        }else if (!this._preserveComments) {
            return;
        }else {
            if (Scanner._isDocumentationComment(value)) {
                token = new bare.createInstance(any,null,type,value,this._tokenStart);
            }else {
                token = new bare.createInstance(any,null,type,value,this._tokenStart);
            }
        }
        if (op(Op.EQUALS,this._firstComment,null)) {
            this._firstComment = token;
            this._lastComment = this._firstComment;
        }else {
            this._lastComment = this._lastComment.setNext(token);
        }
    }
    _appendEndToken(type : any,beginType : any) : void {
        let token : any;
        if (op(Op.EQUALS,this._firstComment,null)) {
            token = new bare.createInstance(any,null,type,this._tokenStart);
        }else {
            token = new bare.createInstance(any,null,type,this._tokenStart,this._firstComment);
            this._firstComment = null;
            this._lastComment = null;
        }
        this._tail = this._tail.setNext(token);
        if (this._stackEnd >= 0) {
            let begin : any = this._groupingStack[this._stackEnd];
            if (op(Op.EQUALS,begin.type,beginType)) {
                begin.endToken = token;
                this._groupingStack.removeAt(this._stackEnd--);
            }
        }
    }
    _appendEofToken() : void {
        let eofToken : any;
        if (op(Op.EQUALS,this._firstComment,null)) {
            eofToken = new bare.createInstance(any,null,TokenType.EOF,op(Op.PLUS,this._reader.offset,1));
        }else {
            eofToken = new bare.createInstance(any,null,TokenType.EOF,op(Op.PLUS,this._reader.offset,1),this._firstComment);
            this._firstComment = null;
            this._lastComment = null;
        }
        eofToken.setNext(eofToken);
        this._tail = this._tail.setNext(eofToken);
        if (this._stackEnd >= 0) {
            this._hasUnmatchedGroups = true;
        }
    }
    _appendKeywordToken(keyword : any) : void {
        if (op(Op.EQUALS,this._firstComment,null)) {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,keyword,this._tokenStart));
        }else {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,keyword,this._tokenStart,this._firstComment));
            this._firstComment = null;
            this._lastComment = null;
        }
    }
    _appendStringToken(type : any,value : string) : void {
        if (op(Op.EQUALS,this._firstComment,null)) {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,value,this._tokenStart));
        }else {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,value,this._tokenStart,this._firstComment));
            this._firstComment = null;
            this._lastComment = null;
        }
    }
    _appendStringTokenWithOffset(type : any,value : string,offset : number) : void {
        if (op(Op.EQUALS,this._firstComment,null)) {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,value,this._tokenStart + offset));
        }else {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,value,this._tokenStart + offset,this._firstComment));
            this._firstComment = null;
            this._lastComment = null;
        }
    }
    _appendTokenOfType(type : any) : void {
        if (op(Op.EQUALS,this._firstComment,null)) {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,this._tokenStart));
        }else {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,this._tokenStart,this._firstComment));
            this._firstComment = null;
            this._lastComment = null;
        }
    }
    _appendTokenOfTypeWithOffset(type : any,offset : number) : void {
        if (op(Op.EQUALS,this._firstComment,null)) {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,offset));
        }else {
            this._tail = this._tail.setNext(new bare.createInstance(any,null,type,offset,this._firstComment));
            this._firstComment = null;
            this._lastComment = null;
        }
    }
    _beginToken() : void {
        this._tokenStart = this._reader.offset;
    }
    _findTokenMatchingClosingBraceInInterpolationExpression() : any {
        while (this._stackEnd >= 0){
            let begin : any = this._groupingStack[this._stackEnd];
            if (op(Op.EQUALS,begin.type,TokenType.OPEN_CURLY_BRACKET) || op(Op.EQUALS,begin.type,TokenType.STRING_INTERPOLATION_EXPRESSION)) {
                return begin;
            }
            this._hasUnmatchedGroups = true;
            this._groupingStack.removeAt(this._stackEnd--);
        }
        return null;
    }
    _matchGenericMethodCommentType(value : string) : any {
        if (this.scanGenericMethodComments) {
            if (StringUtilities.startsWith3(value,0,lib3.properties.$slash,lib3.properties.$asterisk,lib3.properties.$lt) && StringUtilities.endsWith3(value,lib3.properties.$gt,lib3.properties.$asterisk,lib3.properties.$slash)) {
                return TokenType.GENERIC_METHOD_TYPE_LIST;
            }
            if (StringUtilities.startsWith3(value,0,lib3.properties.$slash,lib3.properties.$asterisk,lib3.properties.$equal)) {
                return TokenType.GENERIC_METHOD_TYPE_ASSIGN;
            }
        }
        return null;
    }
    _reportError(errorCode : any,arguments? : core.DartList<core.DartObject>) : void {
        this.reportError(errorCode,this._reader.offset,arguments);
    }
    _select(choice : number,yesType : any,noType : any) : number {
        let next : number = this._reader.advance();
        if (next == choice) {
            this._appendTokenOfType(yesType);
            return this._reader.advance();
        }else {
            this._appendTokenOfType(noType);
            return next;
        }
    }
    _selectWithOffset(choice : number,yesType : any,noType : any,offset : number) : number {
        let next : number = this._reader.advance();
        if (next == choice) {
            this._appendTokenOfTypeWithOffset(yesType,offset);
            return this._reader.advance();
        }else {
            this._appendTokenOfTypeWithOffset(noType,offset);
            return next;
        }
    }
    _tokenizeAmpersand(next : number) : number {
        next = this._reader.advance();
        if (next == lib3.properties.$ampersand) {
            next = this._reader.advance();
            if (this.scanLazyAssignmentOperators && next == lib3.properties.$equal) {
                this._appendTokenOfType(TokenType.AMPERSAND_AMPERSAND_EQ);
                return this._reader.advance();
            }
            this._appendTokenOfType(TokenType.AMPERSAND_AMPERSAND);
            return next;
        }else if (next == lib3.properties.$equal) {
            this._appendTokenOfType(TokenType.AMPERSAND_EQ);
            return this._reader.advance();
        }else {
            this._appendTokenOfType(TokenType.AMPERSAND);
            return next;
        }
    }
    _tokenizeBar(next : number) : number {
        next = this._reader.advance();
        if (next == lib3.properties.$bar) {
            next = this._reader.advance();
            if (this.scanLazyAssignmentOperators && next == lib3.properties.$equal) {
                this._appendTokenOfType(TokenType.BAR_BAR_EQ);
                return this._reader.advance();
            }
            this._appendTokenOfType(TokenType.BAR_BAR);
            return next;
        }else if (next == lib3.properties.$equal) {
            this._appendTokenOfType(TokenType.BAR_EQ);
            return this._reader.advance();
        }else {
            this._appendTokenOfType(TokenType.BAR);
            return next;
        }
    }
    _tokenizeCaret(next : number) : number {
        return this._select(lib3.properties.$equal,TokenType.CARET_EQ,TokenType.CARET);
    }
    _tokenizeDotOrNumber(next : number) : number {
        let start : number = this._reader.offset;
        next = this._reader.advance();
        if (lib3.properties.$0 <= next && next <= lib3.properties.$9) {
            return this._tokenizeFractionPart(next,start);
        }else if (lib3.properties.$dot == next) {
            return this._select(lib3.properties.$dot,TokenType.PERIOD_PERIOD_PERIOD,TokenType.PERIOD_PERIOD);
        }else {
            this._appendTokenOfType(TokenType.PERIOD);
            return next;
        }
    }
    _tokenizeEquals(next : number) : number {
        next = this._reader.advance();
        if (next == lib3.properties.$equal) {
            this._appendTokenOfType(TokenType.EQ_EQ);
            return this._reader.advance();
        }else if (next == lib3.properties.$gt) {
            this._appendTokenOfType(TokenType.FUNCTION);
            return this._reader.advance();
        }
        this._appendTokenOfType(TokenType.EQ);
        return next;
    }
    _tokenizeExclamation(next : number) : number {
        next = this._reader.advance();
        if (next == lib3.properties.$equal) {
            this._appendTokenOfType(TokenType.BANG_EQ);
            return this._reader.advance();
        }
        this._appendTokenOfType(TokenType.BANG);
        return next;
    }
    _tokenizeExponent(next : number) : number {
        if (next == lib3.properties.$plus || next == lib3.properties.$minus) {
            next = this._reader.advance();
        }
        let hasDigits : boolean = false;
        while (true){
            if (lib3.properties.$0 <= next && next <= lib3.properties.$9) {
                hasDigits = true;
            }else {
                if (!hasDigits) {
                    this._reportError(ScannerErrorCode.MISSING_DIGIT);
                }
                return next;
            }
            next = this._reader.advance();
        }
    }
    _tokenizeFractionPart(next : number,start : number) : number {
        let done : boolean = false;
        let hasDigit : boolean = false;
        LOOP:
            while (!done){
                if (lib3.properties.$0 <= next && next <= lib3.properties.$9) {
                    hasDigit = true;
                }else if (lib3.properties.$e == next || lib3.properties.$E == next) {
                    hasDigit = true;
                    next = this._tokenizeExponent(this._reader.advance());
                    done = true;
                    continue;
                }else {
                    done = true;
                    continue;
                }
                next = this._reader.advance();
            };
        if (!hasDigit) {
            this._appendStringToken(TokenType.INT,this._reader.getString(start,-2));
            if (lib3.properties.$dot == next) {
                return this._selectWithOffset(lib3.properties.$dot,TokenType.PERIOD_PERIOD_PERIOD,TokenType.PERIOD_PERIOD,op(Op.MINUS,this._reader.offset,1));
            }
            this._appendTokenOfTypeWithOffset(TokenType.PERIOD,op(Op.MINUS,this._reader.offset,1));
            return this.bigSwitch(next);
        }
        this._appendStringToken(TokenType.DOUBLE,this._reader.getString(start,next < 0 ? 0 : -1));
        return next;
    }
    _tokenizeGreaterThan(next : number) : number {
        next = this._reader.advance();
        if (lib3.properties.$equal == next) {
            this._appendTokenOfType(TokenType.GT_EQ);
            return this._reader.advance();
        }else if (lib3.properties.$gt == next) {
            next = this._reader.advance();
            if (lib3.properties.$equal == next) {
                this._appendTokenOfType(TokenType.GT_GT_EQ);
                return this._reader.advance();
            }else {
                this._appendTokenOfType(TokenType.GT_GT);
                return next;
            }
        }else {
            this._appendTokenOfType(TokenType.GT);
            return next;
        }
    }
    _tokenizeHex(next : number) : number {
        let start : number = op(Op.MINUS,this._reader.offset,1);
        let hasDigits : boolean = false;
        while (true){
            next = this._reader.advance();
            if ((lib3.properties.$0 <= next && next <= lib3.properties.$9) || (lib3.properties.$A <= next && next <= lib3.properties.$F) || (lib3.properties.$a <= next && next <= lib3.properties.$f)) {
                hasDigits = true;
            }else {
                if (!hasDigits) {
                    this._reportError(ScannerErrorCode.MISSING_HEX_DIGIT);
                }
                this._appendStringToken(TokenType.HEXADECIMAL,this._reader.getString(start,next < 0 ? 0 : -1));
                return next;
            }
        }
    }
    _tokenizeHexOrNumber(next : number) : number {
        let x : number = this._reader.peek();
        if (x == lib3.properties.$x || x == lib3.properties.$X) {
            this._reader.advance();
            return this._tokenizeHex(x);
        }
        return this._tokenizeNumber(next);
    }
    _tokenizeIdentifier(next : number,start : number,allowDollar : boolean) : number {
        while ((lib3.properties.$a <= next && next <= lib3.properties.$z) || (lib3.properties.$A <= next && next <= lib3.properties.$Z) || (lib3.properties.$0 <= next && next <= lib3.properties.$9) || next == lib3.properties.$_ || (next == lib3.properties.$$ && allowDollar)){
            next = this._reader.advance();
        }
        this._appendStringToken(TokenType.IDENTIFIER,this._reader.getString(start,next < 0 ? 0 : -1));
        return next;
    }
    _tokenizeInterpolatedExpression(next : number,start : number) : number {
        this._appendBeginToken(TokenType.STRING_INTERPOLATION_EXPRESSION);
        next = this._reader.advance();
        while (next != -1){
            if (next == lib3.properties.$rbrace) {
                let begin : any = this._findTokenMatchingClosingBraceInInterpolationExpression();
                if (op(Op.EQUALS,begin,null)) {
                    this._beginToken();
                    this._appendTokenOfType(TokenType.CLOSE_CURLY_BRACKET);
                    next = this._reader.advance();
                    this._beginToken();
                    return next;
                }else if (op(Op.EQUALS,begin.type,TokenType.OPEN_CURLY_BRACKET)) {
                    this._beginToken();
                    this._appendEndToken(TokenType.CLOSE_CURLY_BRACKET,TokenType.OPEN_CURLY_BRACKET);
                    next = this._reader.advance();
                    this._beginToken();
                }else if (op(Op.EQUALS,begin.type,TokenType.STRING_INTERPOLATION_EXPRESSION)) {
                    this._beginToken();
                    this._appendEndToken(TokenType.CLOSE_CURLY_BRACKET,TokenType.STRING_INTERPOLATION_EXPRESSION);
                    next = this._reader.advance();
                    this._beginToken();
                    return next;
                }
            }else {
                next = this.bigSwitch(next);
            }
        }
        return next;
    }
    _tokenizeInterpolatedIdentifier(next : number,start : number) : number {
        this._appendStringTokenWithOffset(TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",0);
        if ((lib3.properties.$A <= next && next <= lib3.properties.$Z) || (lib3.properties.$a <= next && next <= lib3.properties.$z) || next == lib3.properties.$_) {
            this._beginToken();
            next = this._tokenizeKeywordOrIdentifier(next,false);
        }
        this._beginToken();
        return next;
    }
    _tokenizeKeywordOrIdentifier(next : number,allowDollar : boolean) : number {
        let state : KeywordState = KeywordState.KEYWORD_STATE;
        let start : number = this._reader.offset;
        while (state != null && ((lib3.properties.$A <= next && next <= lib3.properties.$Z) || lib3.properties.$a <= next && next <= lib3.properties.$z)){
            state = state.next(next);
            next = this._reader.advance();
        }
        if (op(Op.EQUALS,state,null) || op(Op.EQUALS,state.keyword(),null)) {
            return this._tokenizeIdentifier(next,start,allowDollar);
        }
        if ((lib3.properties.$0 <= next && next <= lib3.properties.$9) || next == lib3.properties.$_ || next == lib3.properties.$$) {
            return this._tokenizeIdentifier(next,start,allowDollar);
        }else if (next < 128) {
            this._appendKeywordToken(state.keyword());
            return next;
        }else {
            return this._tokenizeIdentifier(next,start,allowDollar);
        }
    }
    _tokenizeLessThan(next : number) : number {
        next = this._reader.advance();
        if (lib3.properties.$equal == next) {
            this._appendTokenOfType(TokenType.LT_EQ);
            return this._reader.advance();
        }else if (lib3.properties.$lt == next) {
            return this._select(lib3.properties.$equal,TokenType.LT_LT_EQ,TokenType.LT_LT);
        }else {
            this._appendTokenOfType(TokenType.LT);
            return next;
        }
    }
    _tokenizeMinus(next : number) : number {
        next = this._reader.advance();
        if (next == lib3.properties.$minus) {
            this._appendTokenOfType(TokenType.MINUS_MINUS);
            return this._reader.advance();
        }else if (next == lib3.properties.$equal) {
            this._appendTokenOfType(TokenType.MINUS_EQ);
            return this._reader.advance();
        }else {
            this._appendTokenOfType(TokenType.MINUS);
            return next;
        }
    }
    _tokenizeMultiLineComment(next : number) : number {
        let nesting : number = 1;
        next = this._reader.advance();
        while (true){
            if (-1 == next) {
                this._reportError(ScannerErrorCode.UNTERMINATED_MULTI_LINE_COMMENT);
                this._appendCommentToken(TokenType.MULTI_LINE_COMMENT,this._reader.getString(this._tokenStart,0));
                return next;
            }else if (lib3.properties.$asterisk == next) {
                next = this._reader.advance();
                if (lib3.properties.$slash == next) {
                    --nesting;
                    if (0 == nesting) {
                        this._appendCommentToken(TokenType.MULTI_LINE_COMMENT,this._reader.getString(this._tokenStart,0));
                        return this._reader.advance();
                    }else {
                        next = this._reader.advance();
                    }
                }
            }else if (lib3.properties.$slash == next) {
                next = this._reader.advance();
                if (lib3.properties.$asterisk == next) {
                    next = this._reader.advance();
                    ++nesting;
                }
            }else if (next == lib3.properties.$cr) {
                next = this._reader.advance();
                if (next == lib3.properties.$lf) {
                    next = this._reader.advance();
                }
                this.recordStartOfLine();
            }else if (next == lib3.properties.$lf) {
                next = this._reader.advance();
                this.recordStartOfLine();
            }else {
                next = this._reader.advance();
            }
        }
    }
    _tokenizeMultiLineRawString(quoteChar : number,start : number) : number {
        let next : number = this._reader.advance();
        outer:
            while (next != -1){
                while (next != quoteChar){
                    if (next == -1) {
                        break;
                    }else if (next == lib3.properties.$cr) {
                        next = this._reader.advance();
                        if (next == lib3.properties.$lf) {
                            next = this._reader.advance();
                        }
                        this.recordStartOfLine();
                    }else if (next == lib3.properties.$lf) {
                        next = this._reader.advance();
                        this.recordStartOfLine();
                    }else {
                        next = this._reader.advance();
                    }
                }
                next = this._reader.advance();
                if (next == quoteChar) {
                    next = this._reader.advance();
                    if (next == quoteChar) {
                        this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
                        return this._reader.advance();
                    }
                }
            };
        this._reportError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
        this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
        return this._reader.advance();
    }
    _tokenizeMultiLineString(quoteChar : number,start : number,raw : boolean) : number {
        if (raw) {
            return this._tokenizeMultiLineRawString(quoteChar,start);
        }
        let next : number = this._reader.advance();
        while (next != -1){
            if (next == lib3.properties.$$) {
                this._appendStringToken(TokenType.STRING,this._reader.getString(start,-1));
                next = this._tokenizeStringInterpolation(start);
                this._beginToken();
                start = this._reader.offset;
                continue;
            }
            if (next == quoteChar) {
                next = this._reader.advance();
                if (next == quoteChar) {
                    next = this._reader.advance();
                    if (next == quoteChar) {
                        this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
                        return this._reader.advance();
                    }
                }
                continue;
            }
            if (next == lib3.properties.$backslash) {
                next = this._reader.advance();
                if (next == -1) {
                    break;
                }
                if (next == lib3.properties.$cr) {
                    next = this._reader.advance();
                    if (next == lib3.properties.$lf) {
                        next = this._reader.advance();
                    }
                    this.recordStartOfLine();
                }else if (next == lib3.properties.$lf) {
                    this.recordStartOfLine();
                    next = this._reader.advance();
                }else {
                    next = this._reader.advance();
                }
            }else if (next == lib3.properties.$cr) {
                next = this._reader.advance();
                if (next == lib3.properties.$lf) {
                    next = this._reader.advance();
                }
                this.recordStartOfLine();
            }else if (next == lib3.properties.$lf) {
                this.recordStartOfLine();
                next = this._reader.advance();
            }else {
                next = this._reader.advance();
            }
        }
        this._reportError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
        if (start == this._reader.offset) {
            this._appendStringTokenWithOffset(TokenType.STRING,"",1);
        }else {
            this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
        }
        return this._reader.advance();
    }
    _tokenizeMultiply(next : number) : number {
        return this._select(lib3.properties.$equal,TokenType.STAR_EQ,TokenType.STAR);
    }
    _tokenizeNumber(next : number) : number {
        let start : number = this._reader.offset;
        while (true){
            next = this._reader.advance();
            if (lib3.properties.$0 <= next && next <= lib3.properties.$9) {
                continue;
            }else if (next == lib3.properties.$dot) {
                return this._tokenizeFractionPart(this._reader.advance(),start);
            }else if (next == lib3.properties.$e || next == lib3.properties.$E) {
                return this._tokenizeFractionPart(next,start);
            }else {
                this._appendStringToken(TokenType.INT,this._reader.getString(start,next < 0 ? 0 : -1));
                return next;
            }
        }
    }
    _tokenizeOpenSquareBracket(next : number) : number {
        next = this._reader.advance();
        if (next == lib3.properties.$close_bracket) {
            return this._select(lib3.properties.$equal,TokenType.INDEX_EQ,TokenType.INDEX);
        }else {
            this._appendBeginToken(TokenType.OPEN_SQUARE_BRACKET);
            return next;
        }
    }
    _tokenizePercent(next : number) : number {
        return this._select(lib3.properties.$equal,TokenType.PERCENT_EQ,TokenType.PERCENT);
    }
    _tokenizePlus(next : number) : number {
        next = this._reader.advance();
        if (lib3.properties.$plus == next) {
            this._appendTokenOfType(TokenType.PLUS_PLUS);
            return this._reader.advance();
        }else if (lib3.properties.$equal == next) {
            this._appendTokenOfType(TokenType.PLUS_EQ);
            return this._reader.advance();
        }else {
            this._appendTokenOfType(TokenType.PLUS);
            return next;
        }
    }
    _tokenizeQuestion() : number {
        let next : number = this._reader.advance();
        if (next == lib3.properties.$dot) {
            this._appendTokenOfType(TokenType.QUESTION_PERIOD);
            return this._reader.advance();
        }else if (next == lib3.properties.$question) {
            next = this._reader.advance();
            if (next == lib3.properties.$equal) {
                this._appendTokenOfType(TokenType.QUESTION_QUESTION_EQ);
                return this._reader.advance();
            }else {
                this._appendTokenOfType(TokenType.QUESTION_QUESTION);
                return next;
            }
        }else {
            this._appendTokenOfType(TokenType.QUESTION);
            return next;
        }
    }
    _tokenizeSingleLineComment(next : number) : number {
        while (true){
            next = this._reader.advance();
            if (-1 == next) {
                this._appendCommentToken(TokenType.SINGLE_LINE_COMMENT,this._reader.getString(this._tokenStart,0));
                return next;
            }else if (lib3.properties.$lf == next || lib3.properties.$cr == next) {
                this._appendCommentToken(TokenType.SINGLE_LINE_COMMENT,this._reader.getString(this._tokenStart,-1));
                return next;
            }
        }
    }
    _tokenizeSingleLineRawString(next : number,quoteChar : number,start : number) : number {
        next = this._reader.advance();
        while (next != -1){
            if (next == quoteChar) {
                this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
                return this._reader.advance();
            }else if (next == lib3.properties.$cr || next == lib3.properties.$lf) {
                this._reportError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
                this._appendStringToken(TokenType.STRING,this._reader.getString(start,-1));
                return this._reader.advance();
            }
            next = this._reader.advance();
        }
        this._reportError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
        this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
        return this._reader.advance();
    }
    _tokenizeSingleLineString(next : number,quoteChar : number,start : number) : number {
        while (next != quoteChar){
            if (next == lib3.properties.$backslash) {
                next = this._reader.advance();
            }else if (next == lib3.properties.$$) {
                this._appendStringToken(TokenType.STRING,this._reader.getString(start,-1));
                next = this._tokenizeStringInterpolation(start);
                this._beginToken();
                start = this._reader.offset;
                continue;
            }
            if (next <= lib3.properties.$cr && (next == lib3.properties.$lf || next == lib3.properties.$cr || next == -1)) {
                this._reportError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
                if (start == this._reader.offset) {
                    this._appendStringTokenWithOffset(TokenType.STRING,"",1);
                }else if (next == -1) {
                    this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
                }else {
                    this._appendStringToken(TokenType.STRING,this._reader.getString(start,-1));
                }
                return this._reader.advance();
            }
            next = this._reader.advance();
        }
        this._appendStringToken(TokenType.STRING,this._reader.getString(start,0));
        return this._reader.advance();
    }
    _tokenizeSlashOrComment(next : number) : number {
        next = this._reader.advance();
        if (lib3.properties.$asterisk == next) {
            return this._tokenizeMultiLineComment(next);
        }else if (lib3.properties.$slash == next) {
            return this._tokenizeSingleLineComment(next);
        }else if (lib3.properties.$equal == next) {
            this._appendTokenOfType(TokenType.SLASH_EQ);
            return this._reader.advance();
        }else {
            this._appendTokenOfType(TokenType.SLASH);
            return next;
        }
    }
    _tokenizeString(next : number,start : number,raw : boolean) : number {
        let quoteChar : number = next;
        next = this._reader.advance();
        if (quoteChar == next) {
            next = this._reader.advance();
            if (quoteChar == next) {
                return this._tokenizeMultiLineString(quoteChar,start,raw);
            }else {
                this._appendStringToken(TokenType.STRING,this._reader.getString(start,-1));
                return next;
            }
        }
        if (raw) {
            return this._tokenizeSingleLineRawString(next,quoteChar,start);
        }else {
            return this._tokenizeSingleLineString(next,quoteChar,start);
        }
    }
    _tokenizeStringInterpolation(start : number) : number {
        this._beginToken();
        let next : number = this._reader.advance();
        if (next == lib3.properties.$lbrace) {
            return this._tokenizeInterpolatedExpression(next,start);
        }else {
            return this._tokenizeInterpolatedIdentifier(next,start);
        }
    }
    _tokenizeTag(next : number) : number {
        if (op(Op.EQUALS,this._reader.offset,0)) {
            if (op(Op.EQUALS,this._reader.peek(),lib3.properties.$exclamation)) {
                do{
                    next = this._reader.advance();
                } while (next != lib3.properties.$lf && next != lib3.properties.$cr && next > 0);
                this._appendStringToken(TokenType.SCRIPT_TAG,this._reader.getString(this._tokenStart,0));
                return next;
            }
        }
        this._appendTokenOfType(TokenType.HASH);
        return this._reader.advance();
    }
    _tokenizeTilde(next : number) : number {
        next = this._reader.advance();
        if (next == lib3.properties.$slash) {
            return this._select(lib3.properties.$equal,TokenType.TILDE_SLASH_EQ,TokenType.TILDE_SLASH);
        }else {
            this._appendTokenOfType(TokenType.TILDE);
            return next;
        }
    }
    static _isDocumentationComment(value : string) : boolean {
        return StringUtilities.startsWith3(value,0,lib3.properties.$slash,lib3.properties.$slash,lib3.properties.$slash) || StringUtilities.startsWith3(value,0,lib3.properties.$slash,lib3.properties.$asterisk,lib3.properties.$asterisk);
    }
}

export class properties {
}
