/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/token_utils.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/front_end/lib/src/scanner/token";

export var toAnalyzerCommentToken : (token : any) => any = (token : any) : any =>  {
    let type : any;
    if (op(Op.EQUALS,token.type,TokenType.GENERIC_METHOD_TYPE_ASSIGN)) {
        type = TokenType.GENERIC_METHOD_TYPE_ASSIGN;
    }else if (op(Op.EQUALS,token.type,TokenType.GENERIC_METHOD_TYPE_LIST)) {
        type = TokenType.GENERIC_METHOD_TYPE_LIST;
    }else {
        type = token.lexeme.startsWith('/*') ? TokenType.MULTI_LINE_COMMENT : TokenType.SINGLE_LINE_COMMENT;
    }
    return new bare.createInstance(any,null,type,token.lexeme,token.charOffset);
};
export var fromAnalyzerTokenStream : (analyzerToken : any) => any = (analyzerToken : any) : any =>  {
    let tokenHead : any = new bare.createInstance(any,null,-1);
    let tokenTail : any = tokenHead;
    let beginTokenStack = new core.DartList.literal<any>(null);
    let endTokenStack = new core.DartList.literal<any>(null);
    let angleBracketStack = new core.DartList.literal<any>();
    var matchGroups : (analyzerToken : any,translatedToken : any) => void = (analyzerToken : any,translatedToken : any) : void =>  {
        if (core.identical(endTokenStack.last,analyzerToken)) {
            angleBracketStack.clear();
            beginTokenStack.last.endGroup = translatedToken;
            beginTokenStack.removeLast();
            endTokenStack.removeLast();
        }else if (op(Op.EQUALS,translatedToken.type.kind,LT_TOKEN)) {
            let beginGroupToken : any = translatedToken;
            angleBracketStack.add(beginGroupToken);
        }else if (op(Op.EQUALS,translatedToken.type.kind,GT_TOKEN) && angleBracketStack.isNotEmpty) {
            angleBracketStack.removeLast().endGroup = translatedToken;
        }else if (op(Op.EQUALS,translatedToken.type.kind,GT_GT_TOKEN) && angleBracketStack.isNotEmpty) {
            angleBracketStack.removeLast();
            if (angleBracketStack.isNotEmpty) {
                angleBracketStack.removeLast().endGroup = translatedToken;
            }
        }
        if (is(translatedToken, any) && is(analyzerToken, any) && analyzerToken.endToken != null) {
            angleBracketStack.clear();
            beginTokenStack.add(translatedToken);
            endTokenStack.add(analyzerToken.endToken);
        }
    };
    var translateAndAppend : (analyzerToken : any) => any = (analyzerToken : any) : any =>  {
        let token = fromAnalyzerToken(analyzerToken);
        if (analyzerToken.precedingComments != null) {
            if (op(Op.EQUALS,token.precedingComments,null)) {
                return internalError(`expected translated token ${token} to have preceedingComments`);
            }
        }else {
            if (token.precedingComments != null) {
                return internalError(`token ${token} has unexpected preceedingComments`);
            }
        }
        tokenTail.next = token;
        tokenTail.next.previous = tokenTail;
        tokenTail = token;
        matchGroups(analyzerToken,token);
        return analyzerToken.next;
    };
    while (true){
        if (op(Op.EQUALS,analyzerToken.type,TokenType.EOF)) {
            let eof : any = new bare.createInstance(any,null,analyzerToken.offset);
            tokenTail.next = eof;
            eof.previous = tokenTail;
            eof.precedingComments = _translateComments(analyzerToken.precedingComments);
            eof.next = eof;
            return tokenHead.next;
        }
        analyzerToken = translateAndAppend(analyzerToken);
    }
};
export var fromAnalyzerToken : (token : any) => any = (token : any) : any =>  {
    let comments : any = _translateComments(token.precedingComments);
    var beginGroup : (type : any) => any = (type : any) : any =>  {
        return new bare.createInstance(any,null,type,token.offset,comments);
    };
    var string : (type : any) => any = (type : any) : any =>  {
        return new bare.createInstance(any,null,type,token.lexeme,token.offset,{
            precedingComments : comments});
    };
    var symbol : (type : any) => any = (type : any) : any =>  {
        return new bare.createInstance(any,null,type,token.offset,comments);
    };
    if (token.type.isKeyword) {
        let keyword = op(Op.INDEX,Keyword.keywords,token.lexeme);
        if (keyword != null) {
            return new bare.createInstance(any,null,keyword,token.offset,comments);
        }else {
            return internalError(`Unrecognized keyword: '${token.lexeme}'.`);
        }
    }
    switch (token.type) {
        case TokenType.DOUBLE:
            return string(TokenType.DOUBLE);
        case TokenType.HEXADECIMAL:
            return string(TokenType.HEXADECIMAL);
        case TokenType.IDENTIFIER:
            let keyword = op(Op.INDEX,Keyword.keywords,token.lexeme);
            if (keyword != null) {
                /* TODO (AssertStatementImpl) : assert (keyword.isPseudo); */;
                return new bare.createInstance(any,null,keyword,token.offset,comments);
            }else {
                return string(TokenType.IDENTIFIER);
            }
            break;
        case TokenType.INT:
            return string(TokenType.INT);
        case TokenType.MULTI_LINE_COMMENT:
            if (token.lexeme.startsWith('/**')) {
                return new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,token.lexeme,0,token.lexeme.length,0);
            }
            return new bare.createInstance(any,null,TokenType.MULTI_LINE_COMMENT,token.lexeme,0,token.lexeme.length,0);
        case TokenType.SCRIPT_TAG:
            return string(TokenType.SCRIPT_TAG);
        case TokenType.SINGLE_LINE_COMMENT:
            if (token.lexeme.startsWith('///')) {
                return new bare.createInstance(any,null,TokenType.SINGLE_LINE_COMMENT,token.lexeme,0,token.lexeme.length,0);
            }
            return new bare.createInstance(any,null,TokenType.SINGLE_LINE_COMMENT,token.lexeme,0,token.lexeme.length,0);
        case TokenType.STRING:
            return string(TokenType.STRING);
        case TokenType.AMPERSAND:
            return symbol(TokenType.AMPERSAND);
        case TokenType.AMPERSAND_AMPERSAND:
            return symbol(TokenType.AMPERSAND_AMPERSAND);
        case TokenType.AMPERSAND_AMPERSAND_EQ:
            return symbol(TokenType.AMPERSAND_AMPERSAND_EQ);
        case TokenType.AMPERSAND_EQ:
            return symbol(TokenType.AMPERSAND_EQ);
        case TokenType.AT:
            return symbol(TokenType.AT);
        case TokenType.BANG:
            return symbol(TokenType.BANG);
        case TokenType.BANG_EQ:
            return symbol(TokenType.BANG_EQ);
        case TokenType.BAR:
            return symbol(TokenType.BAR);
        case TokenType.BAR_BAR:
            return symbol(TokenType.BAR_BAR);
        case TokenType.BAR_BAR_EQ:
            return symbol(TokenType.BAR_BAR_EQ);
        case TokenType.BAR_EQ:
            return symbol(TokenType.BAR_EQ);
        case TokenType.COLON:
            return symbol(TokenType.COLON);
        case TokenType.COMMA:
            return symbol(TokenType.COMMA);
        case TokenType.CARET:
            return symbol(TokenType.CARET);
        case TokenType.CARET_EQ:
            return symbol(TokenType.CARET_EQ);
        case TokenType.CLOSE_CURLY_BRACKET:
            return symbol(TokenType.CLOSE_CURLY_BRACKET);
        case TokenType.CLOSE_PAREN:
            return symbol(TokenType.CLOSE_PAREN);
        case TokenType.CLOSE_SQUARE_BRACKET:
            return symbol(TokenType.CLOSE_SQUARE_BRACKET);
        case TokenType.EQ:
            return symbol(TokenType.EQ);
        case TokenType.EQ_EQ:
            return symbol(TokenType.EQ_EQ);
        case TokenType.FUNCTION:
            return symbol(TokenType.FUNCTION);
        case TokenType.GT:
            return symbol(TokenType.GT);
        case TokenType.GT_EQ:
            return symbol(TokenType.GT_EQ);
        case TokenType.GT_GT:
            return symbol(TokenType.GT_GT);
        case TokenType.GT_GT_EQ:
            return symbol(TokenType.GT_GT_EQ);
        case TokenType.HASH:
            return symbol(TokenType.HASH);
        case TokenType.INDEX:
            return symbol(TokenType.INDEX);
        case TokenType.INDEX_EQ:
            return symbol(TokenType.INDEX_EQ);
        case TokenType.LT:
            return beginGroup(TokenType.LT);
        case TokenType.LT_EQ:
            return symbol(TokenType.LT_EQ);
        case TokenType.LT_LT:
            return symbol(TokenType.LT_LT);
        case TokenType.LT_LT_EQ:
            return symbol(TokenType.LT_LT_EQ);
        case TokenType.MINUS:
            return symbol(TokenType.MINUS);
        case TokenType.MINUS_EQ:
            return symbol(TokenType.MINUS_EQ);
        case TokenType.MINUS_MINUS:
            return symbol(TokenType.MINUS_MINUS);
        case TokenType.OPEN_CURLY_BRACKET:
            return beginGroup(TokenType.OPEN_CURLY_BRACKET);
        case TokenType.OPEN_PAREN:
            return beginGroup(TokenType.OPEN_PAREN);
        case TokenType.OPEN_SQUARE_BRACKET:
            return beginGroup(TokenType.OPEN_SQUARE_BRACKET);
        case TokenType.PERCENT:
            return symbol(TokenType.PERCENT);
        case TokenType.PERCENT_EQ:
            return symbol(TokenType.PERCENT_EQ);
        case TokenType.PERIOD:
            return symbol(TokenType.PERIOD);
        case TokenType.PERIOD_PERIOD:
            return symbol(TokenType.PERIOD_PERIOD);
        case TokenType.PLUS:
            return symbol(TokenType.PLUS);
        case TokenType.PLUS_EQ:
            return symbol(TokenType.PLUS_EQ);
        case TokenType.PLUS_PLUS:
            return symbol(TokenType.PLUS_PLUS);
        case TokenType.QUESTION:
            return symbol(TokenType.QUESTION);
        case TokenType.QUESTION_PERIOD:
            return symbol(TokenType.QUESTION_PERIOD);
        case TokenType.QUESTION_QUESTION:
            return symbol(TokenType.QUESTION_QUESTION);
        case TokenType.QUESTION_QUESTION_EQ:
            return symbol(TokenType.QUESTION_QUESTION_EQ);
        case TokenType.SEMICOLON:
            return symbol(TokenType.SEMICOLON);
        case TokenType.SLASH:
            return symbol(TokenType.SLASH);
        case TokenType.SLASH_EQ:
            return symbol(TokenType.SLASH_EQ);
        case TokenType.STAR:
            return symbol(TokenType.STAR);
        case TokenType.STAR_EQ:
            return symbol(TokenType.STAR_EQ);
        case TokenType.STRING_INTERPOLATION_EXPRESSION:
            return beginGroup(TokenType.STRING_INTERPOLATION_EXPRESSION);
        case TokenType.STRING_INTERPOLATION_IDENTIFIER:
            return symbol(TokenType.STRING_INTERPOLATION_IDENTIFIER);
        case TokenType.TILDE:
            return symbol(TokenType.TILDE);
        case TokenType.TILDE_SLASH:
            return symbol(TokenType.TILDE_SLASH);
        case TokenType.TILDE_SLASH_EQ:
            return symbol(TokenType.TILDE_SLASH_EQ);
        case TokenType.BACKPING:
            return symbol(TokenType.BACKPING);
        case TokenType.BACKSLASH:
            return symbol(TokenType.BACKSLASH);
        case TokenType.PERIOD_PERIOD_PERIOD:
            return symbol(TokenType.PERIOD_PERIOD_PERIOD);
        default:
            return internalError(`Unhandled token type ${token.type}`);
    }
};
export var toAnalyzerToken : (token : any,commentToken? : any) => any = (token : any,commentToken? : any) : any =>  {
    if (op(Op.EQUALS,token,null)) return null;
    var makeStringToken : (tokenType : any) => any = (tokenType : any) : any =>  {
        if (op(Op.EQUALS,commentToken,null)) {
            return new bare.createInstance(any,null,tokenType,token.lexeme,token.charOffset);
        }else {
            return new bare.createInstance(any,null,tokenType,token.lexeme,token.charOffset,commentToken);
        }
    };
    var makeBeginToken : (tokenType : any) => any = (tokenType : any) : any =>  {
        if (op(Op.EQUALS,commentToken,null)) {
            return new bare.createInstance(any,null,tokenType,token.charOffset);
        }else {
            return new bare.createInstance(any,null,tokenType,token.charOffset,commentToken);
        }
    };
    switch (token.kind) {
        case DOUBLE_TOKEN:
            return makeStringToken(TokenType.DOUBLE);
        case HEXADECIMAL_TOKEN:
            return makeStringToken(TokenType.HEXADECIMAL);
        case IDENTIFIER_TOKEN:
            return makeStringToken(TokenType.IDENTIFIER);
        case INT_TOKEN:
            return makeStringToken(TokenType.INT);
        case KEYWORD_TOKEN:
            let syntax = token.type.lexeme;
            let keyword = (op(Op.INDEX,properties._keywordMap,syntax) || internalError(`Unknown keyword: ${syntax}`));
            if (op(Op.EQUALS,commentToken,null)) {
                return new bare.createInstance(any,null,keyword,token.charOffset);
            }else {
                return new bare.createInstance(any,null,keyword,token.charOffset,commentToken);
            }
            break;
        case SCRIPT_TOKEN:
            return makeStringToken(TokenType.SCRIPT_TAG);
        case STRING_TOKEN:
            return makeStringToken(TokenType.STRING);
        case OPEN_CURLY_BRACKET_TOKEN:
        case OPEN_SQUARE_BRACKET_TOKEN:
        case OPEN_PAREN_TOKEN:
        case STRING_INTERPOLATION_TOKEN:
            return makeBeginToken(token.type);
        default:
            if (op(Op.EQUALS,commentToken,null)) {
                return new bare.createInstance(any,null,token.type,token.charOffset);
            }else {
                return new bare.createInstance(any,null,token.type,token.charOffset,commentToken);
            }
            break;
    }
};
export var _translateComments : (token : any) => any = (token : any) : any =>  {
    if (op(Op.EQUALS,token,null)) {
        return null;
    }
    let head : any = fromAnalyzerToken(token);
    let tail : any = head;
    token = token.next;
    while (token != null){
        tail.next = fromAnalyzerToken(token);
        tail.next.previous = tail;
        tail = tail.next;
        token = token.next;
    }
    return head;
};
export namespace ToAnalyzerTokenStreamConverter {
    export type Constructors = 'ToAnalyzerTokenStreamConverter';
    export type Interface = Omit<ToAnalyzerTokenStreamConverter, Constructors>;
}
@DartClass
export class ToAnalyzerTokenStreamConverter {
    _analyzerTokenHead : any;

    _analyzerTokenTail : any;

    _beginTokenStack : core.DartList<any>;

    _endTokenStack : core.DartList<any>;

    convertTokens(token : any) : any {
        this._analyzerTokenHead = new bare.createInstance(any,null,TokenType.EOF,-1);
        this._analyzerTokenHead.previous = this._analyzerTokenHead;
        this._analyzerTokenTail = this._analyzerTokenHead;
        this._beginTokenStack = new core.DartList.literal(null);
        this._endTokenStack = new core.DartList.literal<any>(null);
        while (true){
            if (op(Op.EQUALS,token.type.kind,BAD_INPUT_TOKEN)) {
                let errorToken : any = token;
                translateErrorToken(errorToken,this.reportError.bind(this));
            }else {
                let translatedToken = this.translateToken(token,this.translateCommentTokens(token.precedingComments));
                this._matchGroups(token,translatedToken);
                translatedToken.setNext(translatedToken);
                this._analyzerTokenTail.setNext(translatedToken);
                translatedToken.previous = this._analyzerTokenTail;
                this._analyzerTokenTail = translatedToken;
            }
            if (token.isEof) {
                return this._analyzerTokenHead.next;
            }
            token = token.next;
        }
    }
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
    }
    translateCommentTokens(token : any) : any {
        let head : any;
        if (token != null) {
            head = toAnalyzerCommentToken(token);
            let tail : any = head;
            token = token.next;
            while (token != null){
                tail = tail.setNext(toAnalyzerCommentToken(token));
                token = token.next;
            }
        }
        return head;
    }
    translateToken(token : any,precedingComments : any) : any {
        return toAnalyzerToken(token,precedingComments);
    }
    _matchGroups(token : any,translatedToken : any) : void {
        if (core.identical(this._endTokenStack.last,token)) {
            this._beginTokenStack.last.endToken = translatedToken;
            this._beginTokenStack.removeLast();
            this._endTokenStack.removeLast();
        }
        if (is(translatedToken, any) && is(token, any) && token.endGroup != null && token.endGroup.charOffset != token.charOffset) {
            this._beginTokenStack.add(translatedToken);
            this._endTokenStack.add(token.endGroup);
        }
    }
    constructor() {
    }
    @defaultConstructor
    ToAnalyzerTokenStreamConverter() {
    }
}

export class properties {
    private static __$_keywordMap;
    static get _keywordMap() { 
        if (this.__$_keywordMap===undefined) {
            this.__$_keywordMap = new core.DartMap.literal([
                ["assert",lib3.Keyword.ASSERT],
                ["break",lib3.Keyword.BREAK],
                ["case",lib3.Keyword.CASE],
                ["catch",lib3.Keyword.CATCH],
                ["class",lib3.Keyword.CLASS],
                ["const",lib3.Keyword.CONST],
                ["continue",lib3.Keyword.CONTINUE],
                ["default",lib3.Keyword.DEFAULT],
                ["do",lib3.Keyword.DO],
                ["else",lib3.Keyword.ELSE],
                ["enum",lib3.Keyword.ENUM],
                ["extends",lib3.Keyword.EXTENDS],
                ["false",lib3.Keyword.FALSE],
                ["final",lib3.Keyword.FINAL],
                ["finally",lib3.Keyword.FINALLY],
                ["for",lib3.Keyword.FOR],
                ["if",lib3.Keyword.IF],
                ["in",lib3.Keyword.IN],
                ["new",lib3.Keyword.NEW],
                ["null",lib3.Keyword.NULL],
                ["rethrow",lib3.Keyword.RETHROW],
                ["return",lib3.Keyword.RETURN],
                ["super",lib3.Keyword.SUPER],
                ["switch",lib3.Keyword.SWITCH],
                ["this",lib3.Keyword.THIS],
                ["throw",lib3.Keyword.THROW],
                ["true",lib3.Keyword.TRUE],
                ["try",lib3.Keyword.TRY],
                ["var",lib3.Keyword.VAR],
                ["void",lib3.Keyword.VOID],
                ["while",lib3.Keyword.WHILE],
                ["with",lib3.Keyword.WITH],
                ["is",lib3.Keyword.IS],
                ["abstract",lib3.Keyword.ABSTRACT],
                ["as",lib3.Keyword.AS],
                ["covariant",lib3.Keyword.COVARIANT],
                ["deferred",lib3.Keyword.DEFERRED],
                ["dynamic",lib3.Keyword.DYNAMIC],
                ["export",lib3.Keyword.EXPORT],
                ["external",lib3.Keyword.EXTERNAL],
                ["factory",lib3.Keyword.FACTORY],
                ["get",lib3.Keyword.GET],
                ["implements",lib3.Keyword.IMPLEMENTS],
                ["import",lib3.Keyword.IMPORT],
                ["library",lib3.Keyword.LIBRARY],
                ["operator",lib3.Keyword.OPERATOR],
                ["part",lib3.Keyword.PART],
                ["set",lib3.Keyword.SET],
                ["static",lib3.Keyword.STATIC],
                ["typedef",lib3.Keyword.TYPEDEF],
                ["async",lib3.Keyword.ASYNC],
                ["await",lib3.Keyword.AWAIT],
                ["Function",lib3.Keyword.FUNCTION],
                ["hide",lib3.Keyword.HIDE],
                ["native",lib3.Keyword.NATIVE],
                ["of",lib3.Keyword.OF],
                ["on",lib3.Keyword.ON],
                ["patch",lib3.Keyword.PATCH],
                ["show",lib3.Keyword.SHOW],
                ["source",lib3.Keyword.SOURCE],
                ["sync",lib3.Keyword.SYNC],
                ["yield",lib3.Keyword.YIELD]]);
        }
        return this.__$_keywordMap;
    }
    static set _keywordMap(__$value : any)  { 
        this.__$_keywordMap = __$value;
    }

}
