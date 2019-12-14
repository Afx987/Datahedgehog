/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/scanner/token.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace SimpleToken {
    export type Constructors = 'SimpleToken';
    export type Interface = Omit<SimpleToken, Constructors>;
}
@DartClass
@Implements(Token)
export class SimpleToken implements Token.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    type : TokenType;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    offset : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    previous : Token;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    next : Token;

    constructor(type : TokenType,offset : number) {
    }
    @defaultConstructor
    SimpleToken(type : TokenType,offset : number) {
        this.offset = 0;
        this.type = type;
        this.offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get charCount() : number {
        return this.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get charOffset() : number {
        return this.offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get charEnd() : number {
        return this.end;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get end() : number {
        return this.offset + this.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEof() : boolean {
        return op(Op.EQUALS,this.type,TokenType.EOF);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentifier() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOperator() : boolean {
        return this.type.isOperator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this.length == 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUserDefinableOperator() : boolean {
        return this.type.isUserDefinableOperator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get keyword() : Keyword {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : number {
        return this.type.kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return new core.DartString(this.lexeme).length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lexeme() : string {
        return this.type.lexeme;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedingComments() : CommentToken {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stringValue() : string {
        return this.type.stringValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new Token(this.type,this.offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyComments(token : Token) : Token {
        if (op(Op.EQUALS,token,null)) {
            return null;
        }
        let head : Token = token.copy();
        let tail : Token = head;
        token = token.next;
        while (token != null){
            tail = tail.setNext(token.copy());
            token = token.next;
        }
        return head;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matchesAny(types : core.DartList<TokenType>) : boolean {
        for(let type of types) {
            if (op(Op.EQUALS,this.type,type)) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setNext(token : Token) : Token {
        this.next = token;
        token.previous = this;
        return token;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setNextWithoutSettingPrevious(token : Token) : Token {
        this.next = token;
        return token;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.lexeme;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value() : core.DartObject {
        return this.lexeme;
    }
    _setCommentParent(comment : CommentToken) : void {
        while (comment != null){
            comment.parent = this;
            comment = comment.next;
        }
    }
}

export namespace Token {
    export type Constructors = never;
    export type Interface = Omit<Token, Constructors>;
}
@DartClass
@Implements(any)
export class Token implements any.Interface {
    constructor(type : TokenType,offset : number) {
    }
    @defaultFactory
    static $Token(type : TokenType,offset : number) : Token {
        return new SimpleToken(type,offset);
    }
    @AbstractProperty
    get charCount() : number{ throw 'abstract'}
    @AbstractProperty
    get charOffset() : number{ throw 'abstract'}
    @AbstractProperty
    get charEnd() : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get end() : number{ throw 'abstract'}
    @AbstractProperty
    get isEof() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isIdentifier() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isOperator() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSynthetic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isUserDefinableOperator() : boolean{ throw 'abstract'}
    @AbstractProperty
    get keyword() : Keyword{ throw 'abstract'}
    @AbstractProperty
    get kind() : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get length() : number{ throw 'abstract'}
    @AbstractProperty
    get lexeme() : string{ throw 'abstract'}
    @AbstractProperty
    get next() : Token{ throw 'abstract'}
    set next(next : Token){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get offset() : number{ throw 'abstract'}
    set offset(offset : number){ throw 'abstract'}
    @AbstractProperty
    get precedingComments() : Token{ throw 'abstract'}
    @AbstractProperty
    get previous() : Token{ throw 'abstract'}
    set previous(token : Token){ throw 'abstract'}
    @AbstractProperty
    get stringValue() : string{ throw 'abstract'}
    @AbstractProperty
    get type() : TokenType{ throw 'abstract'}
    @Abstract
    copy() : Token{ throw 'abstract'}
    @Abstract
    copyComments(token : Token) : Token{ throw 'abstract'}
    @Abstract
    matchesAny(types : core.DartList<TokenType>) : boolean{ throw 'abstract'}
    @Abstract
    setNext(token : Token) : Token{ throw 'abstract'}
    @Abstract
    setNextWithoutSettingPrevious(token : Token) : Token{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    toString() : string{ throw 'abstract'}
    @Abstract
    value() : core.DartObject{ throw 'abstract'}
    static lexicallyFirst(tokens : core.DartList<Token>) : Token {
        let first : Token = null;
        let offset : number = -1;
        let length : number = tokens.length;
        for(let i : number = 0; i < length; i++){
            let token : Token = tokens[i];
            if (token != null && (offset < 0 || token.offset < offset)) {
                first = token;
                offset = token.offset;
            }
        }
        return first;
    }
}

export namespace TokenClass {
    export type Constructors = 'TokenClass';
    export type Interface = Omit<TokenClass, Constructors>;
}
@DartClass
export class TokenClass {
    private static __$NO_CLASS : TokenClass;
    static get NO_CLASS() : TokenClass { 
        if (this.__$NO_CLASS===undefined) {
            this.__$NO_CLASS = new TokenClass('NO_CLASS');
        }
        return this.__$NO_CLASS;
    }

    private static __$ADDITIVE_OPERATOR : TokenClass;
    static get ADDITIVE_OPERATOR() : TokenClass { 
        if (this.__$ADDITIVE_OPERATOR===undefined) {
            this.__$ADDITIVE_OPERATOR = new TokenClass('ADDITIVE_OPERATOR',13);
        }
        return this.__$ADDITIVE_OPERATOR;
    }

    private static __$ASSIGNMENT_OPERATOR : TokenClass;
    static get ASSIGNMENT_OPERATOR() : TokenClass { 
        if (this.__$ASSIGNMENT_OPERATOR===undefined) {
            this.__$ASSIGNMENT_OPERATOR = new TokenClass('ASSIGNMENT_OPERATOR',1);
        }
        return this.__$ASSIGNMENT_OPERATOR;
    }

    private static __$BITWISE_AND_OPERATOR : TokenClass;
    static get BITWISE_AND_OPERATOR() : TokenClass { 
        if (this.__$BITWISE_AND_OPERATOR===undefined) {
            this.__$BITWISE_AND_OPERATOR = new TokenClass('BITWISE_AND_OPERATOR',11);
        }
        return this.__$BITWISE_AND_OPERATOR;
    }

    private static __$BITWISE_OR_OPERATOR : TokenClass;
    static get BITWISE_OR_OPERATOR() : TokenClass { 
        if (this.__$BITWISE_OR_OPERATOR===undefined) {
            this.__$BITWISE_OR_OPERATOR = new TokenClass('BITWISE_OR_OPERATOR',9);
        }
        return this.__$BITWISE_OR_OPERATOR;
    }

    private static __$BITWISE_XOR_OPERATOR : TokenClass;
    static get BITWISE_XOR_OPERATOR() : TokenClass { 
        if (this.__$BITWISE_XOR_OPERATOR===undefined) {
            this.__$BITWISE_XOR_OPERATOR = new TokenClass('BITWISE_XOR_OPERATOR',10);
        }
        return this.__$BITWISE_XOR_OPERATOR;
    }

    private static __$CASCADE_OPERATOR : TokenClass;
    static get CASCADE_OPERATOR() : TokenClass { 
        if (this.__$CASCADE_OPERATOR===undefined) {
            this.__$CASCADE_OPERATOR = new TokenClass('CASCADE_OPERATOR',2);
        }
        return this.__$CASCADE_OPERATOR;
    }

    private static __$CONDITIONAL_OPERATOR : TokenClass;
    static get CONDITIONAL_OPERATOR() : TokenClass { 
        if (this.__$CONDITIONAL_OPERATOR===undefined) {
            this.__$CONDITIONAL_OPERATOR = new TokenClass('CONDITIONAL_OPERATOR',3);
        }
        return this.__$CONDITIONAL_OPERATOR;
    }

    private static __$EQUALITY_OPERATOR : TokenClass;
    static get EQUALITY_OPERATOR() : TokenClass { 
        if (this.__$EQUALITY_OPERATOR===undefined) {
            this.__$EQUALITY_OPERATOR = new TokenClass('EQUALITY_OPERATOR',7);
        }
        return this.__$EQUALITY_OPERATOR;
    }

    private static __$IF_NULL_OPERATOR : TokenClass;
    static get IF_NULL_OPERATOR() : TokenClass { 
        if (this.__$IF_NULL_OPERATOR===undefined) {
            this.__$IF_NULL_OPERATOR = new TokenClass('IF_NULL_OPERATOR',4);
        }
        return this.__$IF_NULL_OPERATOR;
    }

    private static __$LOGICAL_AND_OPERATOR : TokenClass;
    static get LOGICAL_AND_OPERATOR() : TokenClass { 
        if (this.__$LOGICAL_AND_OPERATOR===undefined) {
            this.__$LOGICAL_AND_OPERATOR = new TokenClass('LOGICAL_AND_OPERATOR',6);
        }
        return this.__$LOGICAL_AND_OPERATOR;
    }

    private static __$LOGICAL_OR_OPERATOR : TokenClass;
    static get LOGICAL_OR_OPERATOR() : TokenClass { 
        if (this.__$LOGICAL_OR_OPERATOR===undefined) {
            this.__$LOGICAL_OR_OPERATOR = new TokenClass('LOGICAL_OR_OPERATOR',5);
        }
        return this.__$LOGICAL_OR_OPERATOR;
    }

    private static __$MULTIPLICATIVE_OPERATOR : TokenClass;
    static get MULTIPLICATIVE_OPERATOR() : TokenClass { 
        if (this.__$MULTIPLICATIVE_OPERATOR===undefined) {
            this.__$MULTIPLICATIVE_OPERATOR = new TokenClass('MULTIPLICATIVE_OPERATOR',14);
        }
        return this.__$MULTIPLICATIVE_OPERATOR;
    }

    private static __$RELATIONAL_OPERATOR : TokenClass;
    static get RELATIONAL_OPERATOR() : TokenClass { 
        if (this.__$RELATIONAL_OPERATOR===undefined) {
            this.__$RELATIONAL_OPERATOR = new TokenClass('RELATIONAL_OPERATOR',8);
        }
        return this.__$RELATIONAL_OPERATOR;
    }

    private static __$SHIFT_OPERATOR : TokenClass;
    static get SHIFT_OPERATOR() : TokenClass { 
        if (this.__$SHIFT_OPERATOR===undefined) {
            this.__$SHIFT_OPERATOR = new TokenClass('SHIFT_OPERATOR',12);
        }
        return this.__$SHIFT_OPERATOR;
    }

    private static __$UNARY_POSTFIX_OPERATOR : TokenClass;
    static get UNARY_POSTFIX_OPERATOR() : TokenClass { 
        if (this.__$UNARY_POSTFIX_OPERATOR===undefined) {
            this.__$UNARY_POSTFIX_OPERATOR = new TokenClass('UNARY_POSTFIX_OPERATOR',16);
        }
        return this.__$UNARY_POSTFIX_OPERATOR;
    }

    private static __$UNARY_PREFIX_OPERATOR : TokenClass;
    static get UNARY_PREFIX_OPERATOR() : TokenClass { 
        if (this.__$UNARY_PREFIX_OPERATOR===undefined) {
            this.__$UNARY_PREFIX_OPERATOR = new TokenClass('UNARY_PREFIX_OPERATOR',15);
        }
        return this.__$UNARY_PREFIX_OPERATOR;
    }

    name : string;

    precedence : number;

    constructor(name : string,precedence? : number) {
    }
    @defaultConstructor
    TokenClass(name : string,precedence? : number) {
        precedence = precedence || 0;
        this.name = name;
        this.precedence = precedence;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace TokenType {
    export type Constructors = 'TokenType';
    export type Interface = Omit<TokenType, Constructors>;
}
@DartClass
export class TokenType {
    private static __$EOF : TokenType;
    static get EOF() : TokenType { 
        if (this.__$EOF===undefined) {
            this.__$EOF = new TokenType('','EOF',properties.NO_PRECEDENCE,EOF_TOKEN);
        }
        return this.__$EOF;
    }

    private static __$DOUBLE : TokenType;
    static get DOUBLE() : TokenType { 
        if (this.__$DOUBLE===undefined) {
            this.__$DOUBLE = new TokenType('double','DOUBLE',properties.NO_PRECEDENCE,DOUBLE_TOKEN,{
                stringValue : null});
        }
        return this.__$DOUBLE;
    }

    private static __$HEXADECIMAL : TokenType;
    static get HEXADECIMAL() : TokenType { 
        if (this.__$HEXADECIMAL===undefined) {
            this.__$HEXADECIMAL = new TokenType('hexadecimal','HEXADECIMAL',properties.NO_PRECEDENCE,HEXADECIMAL_TOKEN,{
                stringValue : null});
        }
        return this.__$HEXADECIMAL;
    }

    private static __$IDENTIFIER : TokenType;
    static get IDENTIFIER() : TokenType { 
        if (this.__$IDENTIFIER===undefined) {
            this.__$IDENTIFIER = new TokenType('identifier','STRING_INT',properties.NO_PRECEDENCE,IDENTIFIER_TOKEN,{
                stringValue : null});
        }
        return this.__$IDENTIFIER;
    }

    private static __$INT : TokenType;
    static get INT() : TokenType { 
        if (this.__$INT===undefined) {
            this.__$INT = new TokenType('int','INT',properties.NO_PRECEDENCE,INT_TOKEN,{
                stringValue : null});
        }
        return this.__$INT;
    }

    private static __$MULTI_LINE_COMMENT : TokenType;
    static get MULTI_LINE_COMMENT() : TokenType { 
        if (this.__$MULTI_LINE_COMMENT===undefined) {
            this.__$MULTI_LINE_COMMENT = new TokenType('comment','MULTI_LINE_COMMENT',properties.NO_PRECEDENCE,COMMENT_TOKEN,{
                stringValue : null});
        }
        return this.__$MULTI_LINE_COMMENT;
    }

    private static __$SCRIPT_TAG : TokenType;
    static get SCRIPT_TAG() : TokenType { 
        if (this.__$SCRIPT_TAG===undefined) {
            this.__$SCRIPT_TAG = new TokenType('script','SCRIPT_TAG',properties.NO_PRECEDENCE,SCRIPT_TOKEN);
        }
        return this.__$SCRIPT_TAG;
    }

    private static __$SINGLE_LINE_COMMENT : TokenType;
    static get SINGLE_LINE_COMMENT() : TokenType { 
        if (this.__$SINGLE_LINE_COMMENT===undefined) {
            this.__$SINGLE_LINE_COMMENT = new TokenType('comment','SINGLE_LINE_COMMENT',properties.NO_PRECEDENCE,COMMENT_TOKEN,{
                stringValue : null});
        }
        return this.__$SINGLE_LINE_COMMENT;
    }

    private static __$STRING : TokenType;
    static get STRING() : TokenType { 
        if (this.__$STRING===undefined) {
            this.__$STRING = new TokenType('string','STRING',properties.NO_PRECEDENCE,STRING_TOKEN,{
                stringValue : null});
        }
        return this.__$STRING;
    }

    private static __$AMPERSAND : TokenType;
    static get AMPERSAND() : TokenType { 
        if (this.__$AMPERSAND===undefined) {
            this.__$AMPERSAND = new TokenType('&','AMPERSAND',properties.BITWISE_AND_PRECEDENCE,AMPERSAND_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$AMPERSAND;
    }

    private static __$AMPERSAND_AMPERSAND : TokenType;
    static get AMPERSAND_AMPERSAND() : TokenType { 
        if (this.__$AMPERSAND_AMPERSAND===undefined) {
            this.__$AMPERSAND_AMPERSAND = new TokenType('&&','AMPERSAND_AMPERSAND',properties.LOGICAL_AND_PRECEDENCE,AMPERSAND_AMPERSAND_TOKEN,{
                isOperator : true});
        }
        return this.__$AMPERSAND_AMPERSAND;
    }

    private static __$AMPERSAND_AMPERSAND_EQ : TokenType;
    static get AMPERSAND_AMPERSAND_EQ() : TokenType { 
        if (this.__$AMPERSAND_AMPERSAND_EQ===undefined) {
            this.__$AMPERSAND_AMPERSAND_EQ = new TokenType('&&=','AMPERSAND_AMPERSAND_EQ',1,-1);
        }
        return this.__$AMPERSAND_AMPERSAND_EQ;
    }

    private static __$AMPERSAND_EQ : TokenType;
    static get AMPERSAND_EQ() : TokenType { 
        if (this.__$AMPERSAND_EQ===undefined) {
            this.__$AMPERSAND_EQ = new TokenType('&=','AMPERSAND_EQ',properties.ASSIGNMENT_PRECEDENCE,AMPERSAND_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$AMPERSAND_EQ;
    }

    private static __$AT : TokenType;
    static get AT() : TokenType { 
        if (this.__$AT===undefined) {
            this.__$AT = new TokenType('@','AT',properties.NO_PRECEDENCE,AT_TOKEN);
        }
        return this.__$AT;
    }

    private static __$BANG : TokenType;
    static get BANG() : TokenType { 
        if (this.__$BANG===undefined) {
            this.__$BANG = new TokenType('!','BANG',properties.PREFIX_PRECEDENCE,BANG_TOKEN,{
                isOperator : true});
        }
        return this.__$BANG;
    }

    private static __$BANG_EQ : TokenType;
    static get BANG_EQ() : TokenType { 
        if (this.__$BANG_EQ===undefined) {
            this.__$BANG_EQ = new TokenType('!=','BANG_EQ',properties.EQUALITY_PRECEDENCE,BANG_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$BANG_EQ;
    }

    private static __$BANG_EQ_EQ : TokenType;
    static get BANG_EQ_EQ() : TokenType { 
        if (this.__$BANG_EQ_EQ===undefined) {
            this.__$BANG_EQ_EQ = new TokenType('!==','BANG_EQ_EQ',properties.EQUALITY_PRECEDENCE,BANG_EQ_EQ_TOKEN);
        }
        return this.__$BANG_EQ_EQ;
    }

    private static __$BAR : TokenType;
    static get BAR() : TokenType { 
        if (this.__$BAR===undefined) {
            this.__$BAR = new TokenType('|','BAR',properties.BITWISE_OR_PRECEDENCE,BAR_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$BAR;
    }

    private static __$BAR_BAR : TokenType;
    static get BAR_BAR() : TokenType { 
        if (this.__$BAR_BAR===undefined) {
            this.__$BAR_BAR = new TokenType('||','BAR_BAR',properties.LOGICAL_OR_PRECEDENCE,BAR_BAR_TOKEN,{
                isOperator : true});
        }
        return this.__$BAR_BAR;
    }

    private static __$BAR_BAR_EQ : TokenType;
    static get BAR_BAR_EQ() : TokenType { 
        if (this.__$BAR_BAR_EQ===undefined) {
            this.__$BAR_BAR_EQ = new TokenType('||=','BAR_BAR_EQ',1,-1);
        }
        return this.__$BAR_BAR_EQ;
    }

    private static __$BAR_EQ : TokenType;
    static get BAR_EQ() : TokenType { 
        if (this.__$BAR_EQ===undefined) {
            this.__$BAR_EQ = new TokenType('|=','BAR_EQ',properties.ASSIGNMENT_PRECEDENCE,BAR_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$BAR_EQ;
    }

    private static __$COLON : TokenType;
    static get COLON() : TokenType { 
        if (this.__$COLON===undefined) {
            this.__$COLON = new TokenType(':','COLON',properties.NO_PRECEDENCE,COLON_TOKEN);
        }
        return this.__$COLON;
    }

    private static __$COMMA : TokenType;
    static get COMMA() : TokenType { 
        if (this.__$COMMA===undefined) {
            this.__$COMMA = new TokenType(',','COMMA',properties.NO_PRECEDENCE,COMMA_TOKEN);
        }
        return this.__$COMMA;
    }

    private static __$CARET : TokenType;
    static get CARET() : TokenType { 
        if (this.__$CARET===undefined) {
            this.__$CARET = new TokenType('^','CARET',properties.BITWISE_XOR_PRECEDENCE,CARET_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$CARET;
    }

    private static __$CARET_EQ : TokenType;
    static get CARET_EQ() : TokenType { 
        if (this.__$CARET_EQ===undefined) {
            this.__$CARET_EQ = new TokenType('^=','CARET_EQ',properties.ASSIGNMENT_PRECEDENCE,CARET_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$CARET_EQ;
    }

    private static __$CLOSE_CURLY_BRACKET : TokenType;
    static get CLOSE_CURLY_BRACKET() : TokenType { 
        if (this.__$CLOSE_CURLY_BRACKET===undefined) {
            this.__$CLOSE_CURLY_BRACKET = new TokenType('}','CLOSE_CURLY_BRACKET',properties.NO_PRECEDENCE,CLOSE_CURLY_BRACKET_TOKEN);
        }
        return this.__$CLOSE_CURLY_BRACKET;
    }

    private static __$CLOSE_PAREN : TokenType;
    static get CLOSE_PAREN() : TokenType { 
        if (this.__$CLOSE_PAREN===undefined) {
            this.__$CLOSE_PAREN = new TokenType(')','CLOSE_PAREN',properties.NO_PRECEDENCE,CLOSE_PAREN_TOKEN);
        }
        return this.__$CLOSE_PAREN;
    }

    private static __$CLOSE_SQUARE_BRACKET : TokenType;
    static get CLOSE_SQUARE_BRACKET() : TokenType { 
        if (this.__$CLOSE_SQUARE_BRACKET===undefined) {
            this.__$CLOSE_SQUARE_BRACKET = new TokenType(']','CLOSE_SQUARE_BRACKET',properties.NO_PRECEDENCE,CLOSE_SQUARE_BRACKET_TOKEN);
        }
        return this.__$CLOSE_SQUARE_BRACKET;
    }

    private static __$EQ : TokenType;
    static get EQ() : TokenType { 
        if (this.__$EQ===undefined) {
            this.__$EQ = new TokenType('=','EQ',properties.ASSIGNMENT_PRECEDENCE,EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$EQ;
    }

    private static __$EQ_EQ : TokenType;
    static get EQ_EQ() : TokenType { 
        if (this.__$EQ_EQ===undefined) {
            this.__$EQ_EQ = new TokenType('==','EQ_EQ',properties.EQUALITY_PRECEDENCE,EQ_EQ_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$EQ_EQ;
    }

    private static __$EQ_EQ_EQ : TokenType;
    static get EQ_EQ_EQ() : TokenType { 
        if (this.__$EQ_EQ_EQ===undefined) {
            this.__$EQ_EQ_EQ = new TokenType('===','EQ_EQ_EQ',properties.EQUALITY_PRECEDENCE,EQ_EQ_EQ_TOKEN);
        }
        return this.__$EQ_EQ_EQ;
    }

    private static __$FUNCTION : TokenType;
    static get FUNCTION() : TokenType { 
        if (this.__$FUNCTION===undefined) {
            this.__$FUNCTION = new TokenType('=>','FUNCTION',properties.NO_PRECEDENCE,FUNCTION_TOKEN);
        }
        return this.__$FUNCTION;
    }

    private static __$GT : TokenType;
    static get GT() : TokenType { 
        if (this.__$GT===undefined) {
            this.__$GT = new TokenType('>','GT',properties.RELATIONAL_PRECEDENCE,GT_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$GT;
    }

    private static __$GT_EQ : TokenType;
    static get GT_EQ() : TokenType { 
        if (this.__$GT_EQ===undefined) {
            this.__$GT_EQ = new TokenType('>=','GT_EQ',properties.RELATIONAL_PRECEDENCE,GT_EQ_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$GT_EQ;
    }

    private static __$GT_GT : TokenType;
    static get GT_GT() : TokenType { 
        if (this.__$GT_GT===undefined) {
            this.__$GT_GT = new TokenType('>>','GT_GT',properties.SHIFT_PRECEDENCE,GT_GT_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$GT_GT;
    }

    private static __$GT_GT_EQ : TokenType;
    static get GT_GT_EQ() : TokenType { 
        if (this.__$GT_GT_EQ===undefined) {
            this.__$GT_GT_EQ = new TokenType('>>=','GT_GT_EQ',properties.ASSIGNMENT_PRECEDENCE,GT_GT_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$GT_GT_EQ;
    }

    private static __$HASH : TokenType;
    static get HASH() : TokenType { 
        if (this.__$HASH===undefined) {
            this.__$HASH = new TokenType('#','HASH',properties.NO_PRECEDENCE,HASH_TOKEN);
        }
        return this.__$HASH;
    }

    private static __$INDEX : TokenType;
    static get INDEX() : TokenType { 
        if (this.__$INDEX===undefined) {
            this.__$INDEX = new TokenType('[]','INDEX',properties.NO_PRECEDENCE,INDEX_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$INDEX;
    }

    private static __$INDEX_EQ : TokenType;
    static get INDEX_EQ() : TokenType { 
        if (this.__$INDEX_EQ===undefined) {
            this.__$INDEX_EQ = new TokenType('[]=','INDEX_EQ',properties.NO_PRECEDENCE,INDEX_EQ_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$INDEX_EQ;
    }

    private static __$LT : TokenType;
    static get LT() : TokenType { 
        if (this.__$LT===undefined) {
            this.__$LT = new TokenType('<','LT',properties.RELATIONAL_PRECEDENCE,LT_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$LT;
    }

    private static __$LT_EQ : TokenType;
    static get LT_EQ() : TokenType { 
        if (this.__$LT_EQ===undefined) {
            this.__$LT_EQ = new TokenType('<=','LT_EQ',properties.RELATIONAL_PRECEDENCE,LT_EQ_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$LT_EQ;
    }

    private static __$LT_LT : TokenType;
    static get LT_LT() : TokenType { 
        if (this.__$LT_LT===undefined) {
            this.__$LT_LT = new TokenType('<<','LT_LT',properties.SHIFT_PRECEDENCE,LT_LT_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$LT_LT;
    }

    private static __$LT_LT_EQ : TokenType;
    static get LT_LT_EQ() : TokenType { 
        if (this.__$LT_LT_EQ===undefined) {
            this.__$LT_LT_EQ = new TokenType('<<=','LT_LT_EQ',properties.ASSIGNMENT_PRECEDENCE,LT_LT_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$LT_LT_EQ;
    }

    private static __$MINUS : TokenType;
    static get MINUS() : TokenType { 
        if (this.__$MINUS===undefined) {
            this.__$MINUS = new TokenType('-','MINUS',properties.ADDITIVE_PRECEDENCE,MINUS_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$MINUS;
    }

    private static __$MINUS_EQ : TokenType;
    static get MINUS_EQ() : TokenType { 
        if (this.__$MINUS_EQ===undefined) {
            this.__$MINUS_EQ = new TokenType('-=','MINUS_EQ',properties.ASSIGNMENT_PRECEDENCE,MINUS_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$MINUS_EQ;
    }

    private static __$MINUS_MINUS : TokenType;
    static get MINUS_MINUS() : TokenType { 
        if (this.__$MINUS_MINUS===undefined) {
            this.__$MINUS_MINUS = new TokenType('--','MINUS_MINUS',properties.POSTFIX_PRECEDENCE,MINUS_MINUS_TOKEN,{
                isOperator : true});
        }
        return this.__$MINUS_MINUS;
    }

    private static __$OPEN_CURLY_BRACKET : TokenType;
    static get OPEN_CURLY_BRACKET() : TokenType { 
        if (this.__$OPEN_CURLY_BRACKET===undefined) {
            this.__$OPEN_CURLY_BRACKET = new TokenType('{','OPEN_CURLY_BRACKET',properties.NO_PRECEDENCE,OPEN_CURLY_BRACKET_TOKEN);
        }
        return this.__$OPEN_CURLY_BRACKET;
    }

    private static __$OPEN_PAREN : TokenType;
    static get OPEN_PAREN() : TokenType { 
        if (this.__$OPEN_PAREN===undefined) {
            this.__$OPEN_PAREN = new TokenType('(','OPEN_PAREN',properties.POSTFIX_PRECEDENCE,OPEN_PAREN_TOKEN);
        }
        return this.__$OPEN_PAREN;
    }

    private static __$OPEN_SQUARE_BRACKET : TokenType;
    static get OPEN_SQUARE_BRACKET() : TokenType { 
        if (this.__$OPEN_SQUARE_BRACKET===undefined) {
            this.__$OPEN_SQUARE_BRACKET = new TokenType('[','OPEN_SQUARE_BRACKET',properties.POSTFIX_PRECEDENCE,OPEN_SQUARE_BRACKET_TOKEN);
        }
        return this.__$OPEN_SQUARE_BRACKET;
    }

    private static __$PERCENT : TokenType;
    static get PERCENT() : TokenType { 
        if (this.__$PERCENT===undefined) {
            this.__$PERCENT = new TokenType('%','PERCENT',properties.MULTIPLICATIVE_PRECEDENCE,PERCENT_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$PERCENT;
    }

    private static __$PERCENT_EQ : TokenType;
    static get PERCENT_EQ() : TokenType { 
        if (this.__$PERCENT_EQ===undefined) {
            this.__$PERCENT_EQ = new TokenType('%=','PERCENT_EQ',properties.ASSIGNMENT_PRECEDENCE,PERCENT_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$PERCENT_EQ;
    }

    private static __$PERIOD : TokenType;
    static get PERIOD() : TokenType { 
        if (this.__$PERIOD===undefined) {
            this.__$PERIOD = new TokenType('.','PERIOD',properties.POSTFIX_PRECEDENCE,PERIOD_TOKEN);
        }
        return this.__$PERIOD;
    }

    private static __$PERIOD_PERIOD : TokenType;
    static get PERIOD_PERIOD() : TokenType { 
        if (this.__$PERIOD_PERIOD===undefined) {
            this.__$PERIOD_PERIOD = new TokenType('..','PERIOD_PERIOD',properties.CASCADE_PRECEDENCE,PERIOD_PERIOD_TOKEN,{
                isOperator : true});
        }
        return this.__$PERIOD_PERIOD;
    }

    private static __$PLUS : TokenType;
    static get PLUS() : TokenType { 
        if (this.__$PLUS===undefined) {
            this.__$PLUS = new TokenType('+','PLUS',properties.ADDITIVE_PRECEDENCE,PLUS_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$PLUS;
    }

    private static __$PLUS_EQ : TokenType;
    static get PLUS_EQ() : TokenType { 
        if (this.__$PLUS_EQ===undefined) {
            this.__$PLUS_EQ = new TokenType('+=','PLUS_EQ',properties.ASSIGNMENT_PRECEDENCE,PLUS_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$PLUS_EQ;
    }

    private static __$PLUS_PLUS : TokenType;
    static get PLUS_PLUS() : TokenType { 
        if (this.__$PLUS_PLUS===undefined) {
            this.__$PLUS_PLUS = new TokenType('++','PLUS_PLUS',properties.POSTFIX_PRECEDENCE,PLUS_PLUS_TOKEN,{
                isOperator : true});
        }
        return this.__$PLUS_PLUS;
    }

    private static __$QUESTION : TokenType;
    static get QUESTION() : TokenType { 
        if (this.__$QUESTION===undefined) {
            this.__$QUESTION = new TokenType('?','QUESTION',properties.CONDITIONAL_PRECEDENCE,QUESTION_TOKEN,{
                isOperator : true});
        }
        return this.__$QUESTION;
    }

    private static __$QUESTION_PERIOD : TokenType;
    static get QUESTION_PERIOD() : TokenType { 
        if (this.__$QUESTION_PERIOD===undefined) {
            this.__$QUESTION_PERIOD = new TokenType('?.','QUESTION_PERIOD',properties.POSTFIX_PRECEDENCE,QUESTION_PERIOD_TOKEN,{
                isOperator : true});
        }
        return this.__$QUESTION_PERIOD;
    }

    private static __$QUESTION_QUESTION : TokenType;
    static get QUESTION_QUESTION() : TokenType { 
        if (this.__$QUESTION_QUESTION===undefined) {
            this.__$QUESTION_QUESTION = new TokenType('??','QUESTION_QUESTION',properties.IF_NULL_PRECEDENCE,QUESTION_QUESTION_TOKEN,{
                isOperator : true});
        }
        return this.__$QUESTION_QUESTION;
    }

    private static __$QUESTION_QUESTION_EQ : TokenType;
    static get QUESTION_QUESTION_EQ() : TokenType { 
        if (this.__$QUESTION_QUESTION_EQ===undefined) {
            this.__$QUESTION_QUESTION_EQ = new TokenType('??=','QUESTION_QUESTION_EQ',properties.ASSIGNMENT_PRECEDENCE,QUESTION_QUESTION_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$QUESTION_QUESTION_EQ;
    }

    private static __$SEMICOLON : TokenType;
    static get SEMICOLON() : TokenType { 
        if (this.__$SEMICOLON===undefined) {
            this.__$SEMICOLON = new TokenType(';','SEMICOLON',properties.NO_PRECEDENCE,SEMICOLON_TOKEN);
        }
        return this.__$SEMICOLON;
    }

    private static __$SLASH : TokenType;
    static get SLASH() : TokenType { 
        if (this.__$SLASH===undefined) {
            this.__$SLASH = new TokenType('/','SLASH',properties.MULTIPLICATIVE_PRECEDENCE,SLASH_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$SLASH;
    }

    private static __$SLASH_EQ : TokenType;
    static get SLASH_EQ() : TokenType { 
        if (this.__$SLASH_EQ===undefined) {
            this.__$SLASH_EQ = new TokenType('/=','SLASH_EQ',properties.ASSIGNMENT_PRECEDENCE,SLASH_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$SLASH_EQ;
    }

    private static __$STAR : TokenType;
    static get STAR() : TokenType { 
        if (this.__$STAR===undefined) {
            this.__$STAR = new TokenType('*','STAR',properties.MULTIPLICATIVE_PRECEDENCE,STAR_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$STAR;
    }

    private static __$STAR_EQ : TokenType;
    static get STAR_EQ() : TokenType { 
        if (this.__$STAR_EQ===undefined) {
            this.__$STAR_EQ = new TokenType('*=','STAR_EQ',properties.ASSIGNMENT_PRECEDENCE,STAR_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$STAR_EQ;
    }

    private static __$STRING_INTERPOLATION_EXPRESSION : TokenType;
    static get STRING_INTERPOLATION_EXPRESSION() : TokenType { 
        if (this.__$STRING_INTERPOLATION_EXPRESSION===undefined) {
            this.__$STRING_INTERPOLATION_EXPRESSION = new TokenType('${','STRING_INTERPOLATION_EXPRESSION',properties.NO_PRECEDENCE,STRING_INTERPOLATION_TOKEN);
        }
        return this.__$STRING_INTERPOLATION_EXPRESSION;
    }

    private static __$STRING_INTERPOLATION_IDENTIFIER : TokenType;
    static get STRING_INTERPOLATION_IDENTIFIER() : TokenType { 
        if (this.__$STRING_INTERPOLATION_IDENTIFIER===undefined) {
            this.__$STRING_INTERPOLATION_IDENTIFIER = new TokenType('$','STRING_INTERPOLATION_IDENTIFIER',properties.NO_PRECEDENCE,STRING_INTERPOLATION_IDENTIFIER_TOKEN);
        }
        return this.__$STRING_INTERPOLATION_IDENTIFIER;
    }

    private static __$TILDE : TokenType;
    static get TILDE() : TokenType { 
        if (this.__$TILDE===undefined) {
            this.__$TILDE = new TokenType('~','TILDE',properties.PREFIX_PRECEDENCE,TILDE_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$TILDE;
    }

    private static __$TILDE_SLASH : TokenType;
    static get TILDE_SLASH() : TokenType { 
        if (this.__$TILDE_SLASH===undefined) {
            this.__$TILDE_SLASH = new TokenType('~/','TILDE_SLASH',properties.MULTIPLICATIVE_PRECEDENCE,TILDE_SLASH_TOKEN,{
                isOperator : true,isUserDefinableOperator : true});
        }
        return this.__$TILDE_SLASH;
    }

    private static __$TILDE_SLASH_EQ : TokenType;
    static get TILDE_SLASH_EQ() : TokenType { 
        if (this.__$TILDE_SLASH_EQ===undefined) {
            this.__$TILDE_SLASH_EQ = new TokenType('~/=','TILDE_SLASH_EQ',properties.ASSIGNMENT_PRECEDENCE,TILDE_SLASH_EQ_TOKEN,{
                isOperator : true});
        }
        return this.__$TILDE_SLASH_EQ;
    }

    private static __$BACKPING : TokenType;
    static get BACKPING() : TokenType { 
        if (this.__$BACKPING===undefined) {
            this.__$BACKPING = new TokenType('`','BACKPING',properties.NO_PRECEDENCE,BACKPING_TOKEN);
        }
        return this.__$BACKPING;
    }

    private static __$BACKSLASH : TokenType;
    static get BACKSLASH() : TokenType { 
        if (this.__$BACKSLASH===undefined) {
            this.__$BACKSLASH = new TokenType('\','BACKSLASH',properties.NO_PRECEDENCE,BACKSLASH_TOKEN);
        }
        return this.__$BACKSLASH;
    }

    private static __$PERIOD_PERIOD_PERIOD : TokenType;
    static get PERIOD_PERIOD_PERIOD() : TokenType { 
        if (this.__$PERIOD_PERIOD_PERIOD===undefined) {
            this.__$PERIOD_PERIOD_PERIOD = new TokenType('...','PERIOD_PERIOD_PERIOD',properties.NO_PRECEDENCE,PERIOD_PERIOD_PERIOD_TOKEN);
        }
        return this.__$PERIOD_PERIOD_PERIOD;
    }

    private static __$GENERIC_METHOD_TYPE_LIST : TokenType;
    static get GENERIC_METHOD_TYPE_LIST() : TokenType { 
        if (this.__$GENERIC_METHOD_TYPE_LIST===undefined) {
            this.__$GENERIC_METHOD_TYPE_LIST = new TokenType('generic_comment_list','GENERIC_METHOD_TYPE_LIST',properties.NO_PRECEDENCE,GENERIC_METHOD_TYPE_LIST_TOKEN,{
                stringValue : null});
        }
        return this.__$GENERIC_METHOD_TYPE_LIST;
    }

    private static __$GENERIC_METHOD_TYPE_ASSIGN : TokenType;
    static get GENERIC_METHOD_TYPE_ASSIGN() : TokenType { 
        if (this.__$GENERIC_METHOD_TYPE_ASSIGN===undefined) {
            this.__$GENERIC_METHOD_TYPE_ASSIGN = new TokenType('generic_comment_assign','GENERIC_METHOD_TYPE_ASSIGN',properties.NO_PRECEDENCE,GENERIC_METHOD_TYPE_ASSIGN_TOKEN,{
                stringValue : null});
        }
        return this.__$GENERIC_METHOD_TYPE_ASSIGN;
    }

    private static __$AS : TokenType;
    static get AS() : TokenType { 
        if (this.__$AS===undefined) {
            this.__$AS = Keyword.AS;
        }
        return this.__$AS;
    }

    private static __$IS : TokenType;
    static get IS() : TokenType { 
        if (this.__$IS===undefined) {
            this.__$IS = Keyword.IS;
        }
        return this.__$IS;
    }

    private static __$BAD_INPUT : TokenType;
    static get BAD_INPUT() : TokenType { 
        if (this.__$BAD_INPUT===undefined) {
            this.__$BAD_INPUT = new TokenType('malformed input','BAD_INPUT',properties.NO_PRECEDENCE,BAD_INPUT_TOKEN,{
                stringValue : null});
        }
        return this.__$BAD_INPUT;
    }

    private static __$RECOVERY : TokenType;
    static get RECOVERY() : TokenType { 
        if (this.__$RECOVERY===undefined) {
            this.__$RECOVERY = new TokenType('recovery','RECOVERY',properties.NO_PRECEDENCE,RECOVERY_TOKEN,{
                stringValue : null});
        }
        return this.__$RECOVERY;
    }

    private static __$all : core.DartList<TokenType>;
    static get all() : core.DartList<TokenType> { 
        if (this.__$all===undefined) {
            this.__$all = new core.DartList.literal<TokenType>(TokenType.EOF,TokenType.DOUBLE,TokenType.HEXADECIMAL,TokenType.IDENTIFIER,TokenType.INT,TokenType.MULTI_LINE_COMMENT,TokenType.SCRIPT_TAG,TokenType.SINGLE_LINE_COMMENT,TokenType.STRING,TokenType.AMPERSAND,TokenType.AMPERSAND_AMPERSAND,TokenType.AMPERSAND_EQ,TokenType.AT,TokenType.BANG,TokenType.BANG_EQ,TokenType.BAR,TokenType.BAR_BAR,TokenType.BAR_EQ,TokenType.COLON,TokenType.COMMA,TokenType.CARET,TokenType.CARET_EQ,TokenType.CLOSE_CURLY_BRACKET,TokenType.CLOSE_PAREN,TokenType.CLOSE_SQUARE_BRACKET,TokenType.EQ,TokenType.EQ_EQ,TokenType.FUNCTION,TokenType.GT,TokenType.GT_EQ,TokenType.GT_GT,TokenType.GT_GT_EQ,TokenType.HASH,TokenType.INDEX,TokenType.INDEX_EQ,TokenType.LT,TokenType.LT_EQ,TokenType.LT_LT,TokenType.LT_LT_EQ,TokenType.MINUS,TokenType.MINUS_EQ,TokenType.MINUS_MINUS,TokenType.OPEN_CURLY_BRACKET,TokenType.OPEN_PAREN,TokenType.OPEN_SQUARE_BRACKET,TokenType.PERCENT,TokenType.PERCENT_EQ,TokenType.PERIOD,TokenType.PERIOD_PERIOD,TokenType.PLUS,TokenType.PLUS_EQ,TokenType.PLUS_PLUS,TokenType.QUESTION,TokenType.QUESTION_PERIOD,TokenType.QUESTION_QUESTION,TokenType.QUESTION_QUESTION_EQ,TokenType.SEMICOLON,TokenType.SLASH,TokenType.SLASH_EQ,TokenType.STAR,TokenType.STAR_EQ,TokenType.STRING_INTERPOLATION_EXPRESSION,TokenType.STRING_INTERPOLATION_IDENTIFIER,TokenType.TILDE,TokenType.TILDE_SLASH,TokenType.TILDE_SLASH_EQ,TokenType.BACKPING,TokenType.BACKSLASH,TokenType.PERIOD_PERIOD_PERIOD,TokenType.GENERIC_METHOD_TYPE_LIST,TokenType.GENERIC_METHOD_TYPE_ASSIGN);
        }
        return this.__$all;
    }

    kind : number;

    isOperator : boolean;

    isUserDefinableOperator : boolean;

    lexeme : string;

    name : string;

    precedence : number;

    stringValue : string;

    constructor(lexeme : string,name : string,precedence : number,kind : number,_namedArguments? : {isOperator? : boolean,isUserDefinableOperator? : boolean,stringValue? : string}) {
    }
    @defaultConstructor
    TokenType(lexeme : string,name : string,precedence : number,kind : number,_namedArguments? : {isOperator? : boolean,isUserDefinableOperator? : boolean,stringValue? : string}) {
        let {isOperator,isUserDefinableOperator,stringValue} = Object.assign({
            "isOperator" : false,
            "isUserDefinableOperator" : false,
            "stringValue" : 'unspecified'}, _namedArguments );
        this.stringValue = stringValue == 'unspecified' ? lexeme : stringValue;
        this.lexeme = lexeme;
        this.name = name;
        this.precedence = precedence;
        this.kind = kind;
        this.isOperator = isOperator;
        this.isUserDefinableOperator = isUserDefinableOperator;
    }
    get isAdditiveOperator() : boolean {
        return this.precedence == properties.ADDITIVE_PRECEDENCE;
    }
    get isAssignmentOperator() : boolean {
        return this.precedence == properties.ASSIGNMENT_PRECEDENCE;
    }
    get isAssociativeOperator() : boolean {
        return op(Op.EQUALS,this,TokenType.AMPERSAND) || op(Op.EQUALS,this,TokenType.AMPERSAND_AMPERSAND) || op(Op.EQUALS,this,TokenType.BAR) || op(Op.EQUALS,this,TokenType.BAR_BAR) || op(Op.EQUALS,this,TokenType.CARET) || op(Op.EQUALS,this,TokenType.PLUS) || op(Op.EQUALS,this,TokenType.STAR);
    }
    get isBuiltIn() : boolean {
        return false;
    }
    get isEqualityOperator() : boolean {
        return op(Op.EQUALS,this,TokenType.BANG_EQ) || op(Op.EQUALS,this,TokenType.EQ_EQ);
    }
    get isIncrementOperator() : boolean {
        return op(Op.EQUALS,this,TokenType.PLUS_PLUS) || op(Op.EQUALS,this,TokenType.MINUS_MINUS);
    }
    get isKeyword() : boolean {
        return this.kind == KEYWORD_TOKEN;
    }
    get isPseudo() : boolean {
        return false;
    }
    get isMultiplicativeOperator() : boolean {
        return this.precedence == properties.MULTIPLICATIVE_PRECEDENCE;
    }
    get isRelationalOperator() : boolean {
        return op(Op.EQUALS,this,TokenType.LT) || op(Op.EQUALS,this,TokenType.LT_EQ) || op(Op.EQUALS,this,TokenType.GT) || op(Op.EQUALS,this,TokenType.GT_EQ);
    }
    get isShiftOperator() : boolean {
        return this.precedence == properties.SHIFT_PRECEDENCE;
    }
    get isUnaryPostfixOperator() : boolean {
        return this.precedence == properties.POSTFIX_PRECEDENCE;
    }
    get isUnaryPrefixOperator() : boolean {
        return this.precedence == properties.PREFIX_PRECEDENCE || op(Op.EQUALS,this,TokenType.PLUS_PLUS) || op(Op.EQUALS,this,TokenType.MINUS_MINUS);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : string {
        return this.lexeme;
    }
}

export namespace BeginToken {
    export type Constructors = SimpleToken.Constructors | 'BeginToken';
    export type Interface = Omit<BeginToken, Constructors>;
}
@DartClass
export class BeginToken extends SimpleToken {
    endToken : Token;

    constructor(type : TokenType,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BeginToken(type : TokenType,offset : number) {
        super.SimpleToken(type,offset);
        /* TODO (AssertStatementImpl) : assert (type == TokenType.OPEN_CURLY_BRACKET || type == TokenType.OPEN_PAREN || type == TokenType.OPEN_SQUARE_BRACKET || type == TokenType.STRING_INTERPOLATION_EXPRESSION); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new BeginToken(this.type,this.offset);
    }
}

export namespace Keyword {
    export type Constructors = TokenType.Constructors | 'Keyword';
    export type Interface = Omit<Keyword, Constructors>;
}
@DartClass
export class Keyword extends TokenType {
    private static __$ABSTRACT : Keyword;
    static get ABSTRACT() : Keyword { 
        if (this.__$ABSTRACT===undefined) {
            this.__$ABSTRACT = new Keyword("abstract","ABSTRACT",{
                isBuiltIn : true});
        }
        return this.__$ABSTRACT;
    }

    private static __$AS : Keyword;
    static get AS() : Keyword { 
        if (this.__$AS===undefined) {
            this.__$AS = new Keyword("as","AS",{
                precedence : properties.RELATIONAL_PRECEDENCE,isBuiltIn : true});
        }
        return this.__$AS;
    }

    private static __$ASSERT : Keyword;
    static get ASSERT() : Keyword { 
        if (this.__$ASSERT===undefined) {
            this.__$ASSERT = new Keyword("assert","ASSERT");
        }
        return this.__$ASSERT;
    }

    private static __$ASYNC : Keyword;
    static get ASYNC() : Keyword { 
        if (this.__$ASYNC===undefined) {
            this.__$ASYNC = new Keyword("async","ASYNC",{
                isPseudo : true});
        }
        return this.__$ASYNC;
    }

    private static __$AWAIT : Keyword;
    static get AWAIT() : Keyword { 
        if (this.__$AWAIT===undefined) {
            this.__$AWAIT = new Keyword("await","AWAIT",{
                isPseudo : true});
        }
        return this.__$AWAIT;
    }

    private static __$BREAK : Keyword;
    static get BREAK() : Keyword { 
        if (this.__$BREAK===undefined) {
            this.__$BREAK = new Keyword("break","BREAK");
        }
        return this.__$BREAK;
    }

    private static __$CASE : Keyword;
    static get CASE() : Keyword { 
        if (this.__$CASE===undefined) {
            this.__$CASE = new Keyword("case","CASE");
        }
        return this.__$CASE;
    }

    private static __$CATCH : Keyword;
    static get CATCH() : Keyword { 
        if (this.__$CATCH===undefined) {
            this.__$CATCH = new Keyword("catch","CATCH");
        }
        return this.__$CATCH;
    }

    private static __$CLASS : Keyword;
    static get CLASS() : Keyword { 
        if (this.__$CLASS===undefined) {
            this.__$CLASS = new Keyword("class","CLASS");
        }
        return this.__$CLASS;
    }

    private static __$CONST : Keyword;
    static get CONST() : Keyword { 
        if (this.__$CONST===undefined) {
            this.__$CONST = new Keyword("const","CONST");
        }
        return this.__$CONST;
    }

    private static __$CONTINUE : Keyword;
    static get CONTINUE() : Keyword { 
        if (this.__$CONTINUE===undefined) {
            this.__$CONTINUE = new Keyword("continue","CONTINUE");
        }
        return this.__$CONTINUE;
    }

    private static __$COVARIANT : Keyword;
    static get COVARIANT() : Keyword { 
        if (this.__$COVARIANT===undefined) {
            this.__$COVARIANT = new Keyword("covariant","COVARIANT",{
                isBuiltIn : true});
        }
        return this.__$COVARIANT;
    }

    private static __$DEFAULT : Keyword;
    static get DEFAULT() : Keyword { 
        if (this.__$DEFAULT===undefined) {
            this.__$DEFAULT = new Keyword("default","DEFAULT");
        }
        return this.__$DEFAULT;
    }

    private static __$DEFERRED : Keyword;
    static get DEFERRED() : Keyword { 
        if (this.__$DEFERRED===undefined) {
            this.__$DEFERRED = new Keyword("deferred","DEFERRED",{
                isBuiltIn : true});
        }
        return this.__$DEFERRED;
    }

    private static __$DO : Keyword;
    static get DO() : Keyword { 
        if (this.__$DO===undefined) {
            this.__$DO = new Keyword("do","DO");
        }
        return this.__$DO;
    }

    private static __$DYNAMIC : Keyword;
    static get DYNAMIC() : Keyword { 
        if (this.__$DYNAMIC===undefined) {
            this.__$DYNAMIC = new Keyword("dynamic","DYNAMIC",{
                isBuiltIn : true});
        }
        return this.__$DYNAMIC;
    }

    private static __$ELSE : Keyword;
    static get ELSE() : Keyword { 
        if (this.__$ELSE===undefined) {
            this.__$ELSE = new Keyword("else","ELSE");
        }
        return this.__$ELSE;
    }

    private static __$ENUM : Keyword;
    static get ENUM() : Keyword { 
        if (this.__$ENUM===undefined) {
            this.__$ENUM = new Keyword("enum","ENUM");
        }
        return this.__$ENUM;
    }

    private static __$EXPORT : Keyword;
    static get EXPORT() : Keyword { 
        if (this.__$EXPORT===undefined) {
            this.__$EXPORT = new Keyword("export","EXPORT",{
                isBuiltIn : true});
        }
        return this.__$EXPORT;
    }

    private static __$EXTENDS : Keyword;
    static get EXTENDS() : Keyword { 
        if (this.__$EXTENDS===undefined) {
            this.__$EXTENDS = new Keyword("extends","EXTENDS");
        }
        return this.__$EXTENDS;
    }

    private static __$EXTERNAL : Keyword;
    static get EXTERNAL() : Keyword { 
        if (this.__$EXTERNAL===undefined) {
            this.__$EXTERNAL = new Keyword("external","EXTERNAL",{
                isBuiltIn : true});
        }
        return this.__$EXTERNAL;
    }

    private static __$FACTORY : Keyword;
    static get FACTORY() : Keyword { 
        if (this.__$FACTORY===undefined) {
            this.__$FACTORY = new Keyword("factory","FACTORY",{
                isBuiltIn : true});
        }
        return this.__$FACTORY;
    }

    private static __$FALSE : Keyword;
    static get FALSE() : Keyword { 
        if (this.__$FALSE===undefined) {
            this.__$FALSE = new Keyword("false","FALSE");
        }
        return this.__$FALSE;
    }

    private static __$FINAL : Keyword;
    static get FINAL() : Keyword { 
        if (this.__$FINAL===undefined) {
            this.__$FINAL = new Keyword("final","FINAL");
        }
        return this.__$FINAL;
    }

    private static __$FINALLY : Keyword;
    static get FINALLY() : Keyword { 
        if (this.__$FINALLY===undefined) {
            this.__$FINALLY = new Keyword("finally","FINALLY");
        }
        return this.__$FINALLY;
    }

    private static __$FOR : Keyword;
    static get FOR() : Keyword { 
        if (this.__$FOR===undefined) {
            this.__$FOR = new Keyword("for","FOR");
        }
        return this.__$FOR;
    }

    private static __$FUNCTION : Keyword;
    static get FUNCTION() : Keyword { 
        if (this.__$FUNCTION===undefined) {
            this.__$FUNCTION = new Keyword("Function","FUNCTION",{
                isPseudo : true});
        }
        return this.__$FUNCTION;
    }

    private static __$GET : Keyword;
    static get GET() : Keyword { 
        if (this.__$GET===undefined) {
            this.__$GET = new Keyword("get","GET",{
                isBuiltIn : true});
        }
        return this.__$GET;
    }

    private static __$HIDE : Keyword;
    static get HIDE() : Keyword { 
        if (this.__$HIDE===undefined) {
            this.__$HIDE = new Keyword("hide","HIDE",{
                isPseudo : true});
        }
        return this.__$HIDE;
    }

    private static __$IF : Keyword;
    static get IF() : Keyword { 
        if (this.__$IF===undefined) {
            this.__$IF = new Keyword("if","IF");
        }
        return this.__$IF;
    }

    private static __$IMPLEMENTS : Keyword;
    static get IMPLEMENTS() : Keyword { 
        if (this.__$IMPLEMENTS===undefined) {
            this.__$IMPLEMENTS = new Keyword("implements","IMPLEMENTS",{
                isBuiltIn : true});
        }
        return this.__$IMPLEMENTS;
    }

    private static __$IMPORT : Keyword;
    static get IMPORT() : Keyword { 
        if (this.__$IMPORT===undefined) {
            this.__$IMPORT = new Keyword("import","IMPORT",{
                isBuiltIn : true});
        }
        return this.__$IMPORT;
    }

    private static __$IN : Keyword;
    static get IN() : Keyword { 
        if (this.__$IN===undefined) {
            this.__$IN = new Keyword("in","IN");
        }
        return this.__$IN;
    }

    private static __$IS : Keyword;
    static get IS() : Keyword { 
        if (this.__$IS===undefined) {
            this.__$IS = new Keyword("is","IS",{
                precedence : properties.RELATIONAL_PRECEDENCE});
        }
        return this.__$IS;
    }

    private static __$LIBRARY : Keyword;
    static get LIBRARY() : Keyword { 
        if (this.__$LIBRARY===undefined) {
            this.__$LIBRARY = new Keyword("library","LIBRARY",{
                isBuiltIn : true});
        }
        return this.__$LIBRARY;
    }

    private static __$NATIVE : Keyword;
    static get NATIVE() : Keyword { 
        if (this.__$NATIVE===undefined) {
            this.__$NATIVE = new Keyword("native","NATIVE",{
                isPseudo : true});
        }
        return this.__$NATIVE;
    }

    private static __$NEW : Keyword;
    static get NEW() : Keyword { 
        if (this.__$NEW===undefined) {
            this.__$NEW = new Keyword("new","NEW");
        }
        return this.__$NEW;
    }

    private static __$NULL : Keyword;
    static get NULL() : Keyword { 
        if (this.__$NULL===undefined) {
            this.__$NULL = new Keyword("null","NULL");
        }
        return this.__$NULL;
    }

    private static __$OF : Keyword;
    static get OF() : Keyword { 
        if (this.__$OF===undefined) {
            this.__$OF = new Keyword("of","OF",{
                isPseudo : true});
        }
        return this.__$OF;
    }

    private static __$ON : Keyword;
    static get ON() : Keyword { 
        if (this.__$ON===undefined) {
            this.__$ON = new Keyword("on","ON",{
                isPseudo : true});
        }
        return this.__$ON;
    }

    private static __$OPERATOR : Keyword;
    static get OPERATOR() : Keyword { 
        if (this.__$OPERATOR===undefined) {
            this.__$OPERATOR = new Keyword("operator","OPERATOR",{
                isBuiltIn : true});
        }
        return this.__$OPERATOR;
    }

    private static __$PART : Keyword;
    static get PART() : Keyword { 
        if (this.__$PART===undefined) {
            this.__$PART = new Keyword("part","PART",{
                isBuiltIn : true});
        }
        return this.__$PART;
    }

    private static __$PATCH : Keyword;
    static get PATCH() : Keyword { 
        if (this.__$PATCH===undefined) {
            this.__$PATCH = new Keyword("patch","PATCH",{
                isPseudo : true});
        }
        return this.__$PATCH;
    }

    private static __$RETHROW : Keyword;
    static get RETHROW() : Keyword { 
        if (this.__$RETHROW===undefined) {
            this.__$RETHROW = new Keyword("rethrow","RETHROW");
        }
        return this.__$RETHROW;
    }

    private static __$RETURN : Keyword;
    static get RETURN() : Keyword { 
        if (this.__$RETURN===undefined) {
            this.__$RETURN = new Keyword("return","RETURN");
        }
        return this.__$RETURN;
    }

    private static __$SET : Keyword;
    static get SET() : Keyword { 
        if (this.__$SET===undefined) {
            this.__$SET = new Keyword("set","SET",{
                isBuiltIn : true});
        }
        return this.__$SET;
    }

    private static __$SHOW : Keyword;
    static get SHOW() : Keyword { 
        if (this.__$SHOW===undefined) {
            this.__$SHOW = new Keyword("show","SHOW",{
                isPseudo : true});
        }
        return this.__$SHOW;
    }

    private static __$SOURCE : Keyword;
    static get SOURCE() : Keyword { 
        if (this.__$SOURCE===undefined) {
            this.__$SOURCE = new Keyword("source","SOURCE",{
                isPseudo : true});
        }
        return this.__$SOURCE;
    }

    private static __$STATIC : Keyword;
    static get STATIC() : Keyword { 
        if (this.__$STATIC===undefined) {
            this.__$STATIC = new Keyword("static","STATIC",{
                isBuiltIn : true});
        }
        return this.__$STATIC;
    }

    private static __$SUPER : Keyword;
    static get SUPER() : Keyword { 
        if (this.__$SUPER===undefined) {
            this.__$SUPER = new Keyword("super","SUPER");
        }
        return this.__$SUPER;
    }

    private static __$SWITCH : Keyword;
    static get SWITCH() : Keyword { 
        if (this.__$SWITCH===undefined) {
            this.__$SWITCH = new Keyword("switch","SWITCH");
        }
        return this.__$SWITCH;
    }

    private static __$SYNC : Keyword;
    static get SYNC() : Keyword { 
        if (this.__$SYNC===undefined) {
            this.__$SYNC = new Keyword("sync","SYNC",{
                isPseudo : true});
        }
        return this.__$SYNC;
    }

    private static __$THIS : Keyword;
    static get THIS() : Keyword { 
        if (this.__$THIS===undefined) {
            this.__$THIS = new Keyword("this","THIS");
        }
        return this.__$THIS;
    }

    private static __$THROW : Keyword;
    static get THROW() : Keyword { 
        if (this.__$THROW===undefined) {
            this.__$THROW = new Keyword("throw","THROW");
        }
        return this.__$THROW;
    }

    private static __$TRUE : Keyword;
    static get TRUE() : Keyword { 
        if (this.__$TRUE===undefined) {
            this.__$TRUE = new Keyword("true","TRUE");
        }
        return this.__$TRUE;
    }

    private static __$TRY : Keyword;
    static get TRY() : Keyword { 
        if (this.__$TRY===undefined) {
            this.__$TRY = new Keyword("try","TRY");
        }
        return this.__$TRY;
    }

    private static __$TYPEDEF : Keyword;
    static get TYPEDEF() : Keyword { 
        if (this.__$TYPEDEF===undefined) {
            this.__$TYPEDEF = new Keyword("typedef","TYPEDEF",{
                isBuiltIn : true});
        }
        return this.__$TYPEDEF;
    }

    private static __$VAR : Keyword;
    static get VAR() : Keyword { 
        if (this.__$VAR===undefined) {
            this.__$VAR = new Keyword("var","VAR");
        }
        return this.__$VAR;
    }

    private static __$VOID : Keyword;
    static get VOID() : Keyword { 
        if (this.__$VOID===undefined) {
            this.__$VOID = new Keyword("void","VOID");
        }
        return this.__$VOID;
    }

    private static __$WHILE : Keyword;
    static get WHILE() : Keyword { 
        if (this.__$WHILE===undefined) {
            this.__$WHILE = new Keyword("while","WHILE");
        }
        return this.__$WHILE;
    }

    private static __$WITH : Keyword;
    static get WITH() : Keyword { 
        if (this.__$WITH===undefined) {
            this.__$WITH = new Keyword("with","WITH");
        }
        return this.__$WITH;
    }

    private static __$YIELD : Keyword;
    static get YIELD() : Keyword { 
        if (this.__$YIELD===undefined) {
            this.__$YIELD = new Keyword("yield","YIELD",{
                isPseudo : true});
        }
        return this.__$YIELD;
    }

    private static __$values : core.DartList<Keyword>;
    static get values() : core.DartList<Keyword> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal<Keyword>(Keyword.ABSTRACT,Keyword.AS,Keyword.ASSERT,Keyword.ASYNC,Keyword.AWAIT,Keyword.BREAK,Keyword.CASE,Keyword.CATCH,Keyword.CLASS,Keyword.CONST,Keyword.CONTINUE,Keyword.COVARIANT,Keyword.DEFAULT,Keyword.DEFERRED,Keyword.DO,Keyword.DYNAMIC,Keyword.ELSE,Keyword.ENUM,Keyword.EXPORT,Keyword.EXTENDS,Keyword.EXTERNAL,Keyword.FACTORY,Keyword.FALSE,Keyword.FINAL,Keyword.FINALLY,Keyword.FOR,Keyword.FUNCTION,Keyword.GET,Keyword.HIDE,Keyword.IF,Keyword.IMPLEMENTS,Keyword.IMPORT,Keyword.IN,Keyword.IS,Keyword.LIBRARY,Keyword.NATIVE,Keyword.NEW,Keyword.NULL,Keyword.OF,Keyword.ON,Keyword.OPERATOR,Keyword.PART,Keyword.PATCH,Keyword.RETHROW,Keyword.RETURN,Keyword.SET,Keyword.SHOW,Keyword.SOURCE,Keyword.STATIC,Keyword.SUPER,Keyword.SWITCH,Keyword.SYNC,Keyword.THIS,Keyword.THROW,Keyword.TRUE,Keyword.TRY,Keyword.TYPEDEF,Keyword.VAR,Keyword.VOID,Keyword.WHILE,Keyword.WITH,Keyword.YIELD);
        }
        return this.__$values;
    }

    private static __$keywords : core.DartMap<string,Keyword>;
    static get keywords() : core.DartMap<string,Keyword> { 
        if (this.__$keywords===undefined) {
            this.__$keywords = Keyword._createKeywordMap();
        }
        return this.__$keywords;
    }
    static set keywords(__$value : core.DartMap<string,Keyword>)  { 
        this.__$keywords = __$value;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isBuiltIn : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isPseudo : boolean;

    constructor(lexeme : string,name : string,_namedArguments? : {isBuiltIn? : boolean,isPseudo? : boolean,precedence? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Keyword(lexeme : string,name : string,_namedArguments? : {isBuiltIn? : boolean,isPseudo? : boolean,precedence? : number}) {
        let {isBuiltIn,isPseudo,precedence} = Object.assign({
            "isBuiltIn" : false,
            "isPseudo" : false,
            "precedence" : properties.NO_PRECEDENCE}, _namedArguments );
        super.TokenType(lexeme,name,precedence,KEYWORD_TOKEN);
        this.isBuiltIn = isBuiltIn;
        this.isPseudo = isPseudo;
    }
    get isBuiltInOrPseudo() : boolean {
        return this.isBuiltIn || this.isPseudo;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get isPseudoKeyword() : boolean {
        return this.isBuiltIn;
    }
    get name() : string {
        return new core.DartString(this.lexeme).toUpperCase();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get syntax() : string {
        return this.lexeme;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
    static _createKeywordMap() : core.DartMap<string,Keyword> {
        let result : core.DartLinkedHashMap<string,Keyword> = new core.DartLinkedHashMap<string,Keyword>();
        for(let keyword of Keyword.values) {
            op(Op.INDEX_ASSIGN,result,keyword.lexeme,keyword);
        }
        return result;
    }
}

export namespace KeywordToken {
    export type Constructors = SimpleToken.Constructors | 'KeywordToken';
    export type Interface = Omit<KeywordToken, Constructors>;
}
@DartClass
export class KeywordToken extends SimpleToken {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : Keyword;

    constructor(keyword : Keyword,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeywordToken(keyword : Keyword,offset : number) {
        super.SimpleToken(keyword,offset);
        this.keyword = keyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new KeywordToken(this.keyword,this.offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentifier() : boolean {
        return this.keyword.isPseudo || this.keyword.isBuiltIn;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value() : core.DartObject {
        return this.keyword;
    }
}

export namespace StringToken {
    export type Constructors = SimpleToken.Constructors | 'StringToken';
    export type Interface = Omit<StringToken, Constructors>;
}
@DartClass
export class StringToken extends SimpleToken {
    _value : string;

    constructor(type : TokenType,value : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringToken(type : TokenType,value : string,offset : number) {
        super.SimpleToken(type,offset);
        this._value = StringUtilities.intern(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentifier() : boolean {
        return core.identical(this.kind,IDENTIFIER_TOKEN);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lexeme() : string {
        return this._value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new StringToken(this.type,this._value,this.offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value() : string {
        return this._value;
    }
}

export namespace TokenWithComment {
    export type Constructors = SimpleToken.Constructors | 'TokenWithComment';
    export type Interface = Omit<TokenWithComment, Constructors>;
}
@DartClass
export class TokenWithComment extends SimpleToken {
    _precedingComment : CommentToken;

    constructor(type : TokenType,offset : number,_precedingComment : CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TokenWithComment(type : TokenType,offset : number,_precedingComment : CommentToken) {
        super.SimpleToken(type,offset);
        this._precedingComment = _precedingComment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedingComments() : CommentToken {
        return this._precedingComment;
    }
    set precedingComments(comment : CommentToken) {
        this._precedingComment = comment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new TokenWithComment(this.type,this.offset,this.copyComments(this.precedingComments));
    }
}

export namespace BeginTokenWithComment {
    export type Constructors = BeginToken.Constructors | 'BeginTokenWithComment';
    export type Interface = Omit<BeginTokenWithComment, Constructors>;
}
@DartClass
@Implements(TokenWithComment)
export class BeginTokenWithComment extends BeginToken implements TokenWithComment.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _precedingComment : CommentToken;

    constructor(type : TokenType,offset : number,_precedingComment : CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BeginTokenWithComment(type : TokenType,offset : number,_precedingComment : CommentToken) {
        super.BeginToken(type,offset);
        this._precedingComment = _precedingComment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedingComments() : CommentToken {
        return this._precedingComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set precedingComments(comment : CommentToken) {
        this._precedingComment = comment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new BeginTokenWithComment(this.type,this.offset,this.copyComments(this.precedingComments));
    }
}

export namespace CommentToken {
    export type Constructors = StringToken.Constructors | 'CommentToken';
    export type Interface = Omit<CommentToken, Constructors>;
}
@DartClass
export class CommentToken extends StringToken {
    parent : TokenWithComment;

    constructor(type : TokenType,value : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CommentToken(type : TokenType,value : string,offset : number) {
        super.StringToken(type,value,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : CommentToken {
        return new CommentToken(this.type,this._value,this.offset);
    }
    remove() : void {
        if (this.previous != null) {
            this.previous.setNextWithoutSettingPrevious(this.next);
            ((t)=>(!!t)?t.previous:null)(this.next) = this.previous;
        }else {
            /* TODO (AssertStatementImpl) : assert (parent.precedingComments == this); */;
            this.parent.precedingComments = this.next;
        }
    }
}

export namespace KeywordTokenWithComment {
    export type Constructors = KeywordToken.Constructors | 'KeywordTokenWithComment';
    export type Interface = Omit<KeywordTokenWithComment, Constructors>;
}
@DartClass
@Implements(TokenWithComment)
export class KeywordTokenWithComment extends KeywordToken implements TokenWithComment.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _precedingComment : CommentToken;

    constructor(keyword : Keyword,offset : number,_precedingComment : CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeywordTokenWithComment(keyword : Keyword,offset : number,_precedingComment : CommentToken) {
        super.KeywordToken(keyword,offset);
        this._precedingComment = _precedingComment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedingComments() : CommentToken {
        return this._precedingComment;
    }
    set precedingComments(comment : CommentToken) {
        this._precedingComment = comment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new KeywordTokenWithComment(this.keyword,this.offset,this.copyComments(this.precedingComments));
    }
}

export namespace StringTokenWithComment {
    export type Constructors = StringToken.Constructors | 'StringTokenWithComment';
    export type Interface = Omit<StringTokenWithComment, Constructors>;
}
@DartClass
@Implements(TokenWithComment)
export class StringTokenWithComment extends StringToken implements TokenWithComment.Interface {
    _precedingComment : CommentToken;

    constructor(type : TokenType,value : string,offset : number,_precedingComment : CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringTokenWithComment(type : TokenType,value : string,offset : number,_precedingComment : CommentToken) {
        super.StringToken(type,value,offset);
        this._precedingComment = _precedingComment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedingComments() : CommentToken {
        return this._precedingComment;
    }
    set precedingComments(comment : CommentToken) {
        this._precedingComment = comment;
        this._setCommentParent(this._precedingComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new StringTokenWithComment(this.type,this.lexeme,this.offset,this.copyComments(this.precedingComments));
    }
}

export namespace SyntheticKeywordToken {
    export type Constructors = KeywordToken.Constructors | 'SyntheticKeywordToken';
    export type Interface = Omit<SyntheticKeywordToken, Constructors>;
}
@DartClass
export class SyntheticKeywordToken extends KeywordToken {
    constructor(keyword : Keyword,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SyntheticKeywordToken(keyword : Keyword,offset : number) {
        super.KeywordToken(keyword,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : Token {
        return new SyntheticKeywordToken(this.keyword,this.offset);
    }
}

export namespace SyntheticStringToken {
    export type Constructors = StringToken.Constructors | 'SyntheticStringToken';
    export type Interface = Omit<SyntheticStringToken, Constructors>;
}
@DartClass
export class SyntheticStringToken extends StringToken {
    constructor(type : TokenType,value : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SyntheticStringToken(type : TokenType,value : string,offset : number) {
        super.StringToken(type,value,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return true;
    }
}

export namespace DocumentationCommentToken {
    export type Constructors = CommentToken.Constructors | 'DocumentationCommentToken';
    export type Interface = Omit<DocumentationCommentToken, Constructors>;
}
@DartClass
export class DocumentationCommentToken extends CommentToken {
    references : core.DartList<Token>;

    constructor(type : TokenType,value : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DocumentationCommentToken(type : TokenType,value : string,offset : number) {
        this.references = new core.DartList.literal<Token>();
        super.CommentToken(type,value,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : CommentToken {
        let copy : DocumentationCommentToken = new DocumentationCommentToken(this.type,this._value,this.offset);
        this.references.forEach((ref : any) =>  {
            return copy.references.add(ref.copy());
        });
        return copy;
    }
}

export class properties {
    private static __$NO_PRECEDENCE : number;
    static get NO_PRECEDENCE() : number { 
        if (this.__$NO_PRECEDENCE===undefined) {
            this.__$NO_PRECEDENCE = 0;
        }
        return this.__$NO_PRECEDENCE;
    }
    static set NO_PRECEDENCE(__$value : number)  { 
        this.__$NO_PRECEDENCE = __$value;
    }

    private static __$ASSIGNMENT_PRECEDENCE : number;
    static get ASSIGNMENT_PRECEDENCE() : number { 
        if (this.__$ASSIGNMENT_PRECEDENCE===undefined) {
            this.__$ASSIGNMENT_PRECEDENCE = 1;
        }
        return this.__$ASSIGNMENT_PRECEDENCE;
    }
    static set ASSIGNMENT_PRECEDENCE(__$value : number)  { 
        this.__$ASSIGNMENT_PRECEDENCE = __$value;
    }

    private static __$CASCADE_PRECEDENCE : number;
    static get CASCADE_PRECEDENCE() : number { 
        if (this.__$CASCADE_PRECEDENCE===undefined) {
            this.__$CASCADE_PRECEDENCE = 2;
        }
        return this.__$CASCADE_PRECEDENCE;
    }
    static set CASCADE_PRECEDENCE(__$value : number)  { 
        this.__$CASCADE_PRECEDENCE = __$value;
    }

    private static __$CONDITIONAL_PRECEDENCE : number;
    static get CONDITIONAL_PRECEDENCE() : number { 
        if (this.__$CONDITIONAL_PRECEDENCE===undefined) {
            this.__$CONDITIONAL_PRECEDENCE = 3;
        }
        return this.__$CONDITIONAL_PRECEDENCE;
    }
    static set CONDITIONAL_PRECEDENCE(__$value : number)  { 
        this.__$CONDITIONAL_PRECEDENCE = __$value;
    }

    private static __$IF_NULL_PRECEDENCE : number;
    static get IF_NULL_PRECEDENCE() : number { 
        if (this.__$IF_NULL_PRECEDENCE===undefined) {
            this.__$IF_NULL_PRECEDENCE = 4;
        }
        return this.__$IF_NULL_PRECEDENCE;
    }
    static set IF_NULL_PRECEDENCE(__$value : number)  { 
        this.__$IF_NULL_PRECEDENCE = __$value;
    }

    private static __$LOGICAL_OR_PRECEDENCE : number;
    static get LOGICAL_OR_PRECEDENCE() : number { 
        if (this.__$LOGICAL_OR_PRECEDENCE===undefined) {
            this.__$LOGICAL_OR_PRECEDENCE = 5;
        }
        return this.__$LOGICAL_OR_PRECEDENCE;
    }
    static set LOGICAL_OR_PRECEDENCE(__$value : number)  { 
        this.__$LOGICAL_OR_PRECEDENCE = __$value;
    }

    private static __$LOGICAL_AND_PRECEDENCE : number;
    static get LOGICAL_AND_PRECEDENCE() : number { 
        if (this.__$LOGICAL_AND_PRECEDENCE===undefined) {
            this.__$LOGICAL_AND_PRECEDENCE = 6;
        }
        return this.__$LOGICAL_AND_PRECEDENCE;
    }
    static set LOGICAL_AND_PRECEDENCE(__$value : number)  { 
        this.__$LOGICAL_AND_PRECEDENCE = __$value;
    }

    private static __$EQUALITY_PRECEDENCE : number;
    static get EQUALITY_PRECEDENCE() : number { 
        if (this.__$EQUALITY_PRECEDENCE===undefined) {
            this.__$EQUALITY_PRECEDENCE = 7;
        }
        return this.__$EQUALITY_PRECEDENCE;
    }
    static set EQUALITY_PRECEDENCE(__$value : number)  { 
        this.__$EQUALITY_PRECEDENCE = __$value;
    }

    private static __$RELATIONAL_PRECEDENCE : number;
    static get RELATIONAL_PRECEDENCE() : number { 
        if (this.__$RELATIONAL_PRECEDENCE===undefined) {
            this.__$RELATIONAL_PRECEDENCE = 8;
        }
        return this.__$RELATIONAL_PRECEDENCE;
    }
    static set RELATIONAL_PRECEDENCE(__$value : number)  { 
        this.__$RELATIONAL_PRECEDENCE = __$value;
    }

    private static __$BITWISE_OR_PRECEDENCE : number;
    static get BITWISE_OR_PRECEDENCE() : number { 
        if (this.__$BITWISE_OR_PRECEDENCE===undefined) {
            this.__$BITWISE_OR_PRECEDENCE = 9;
        }
        return this.__$BITWISE_OR_PRECEDENCE;
    }
    static set BITWISE_OR_PRECEDENCE(__$value : number)  { 
        this.__$BITWISE_OR_PRECEDENCE = __$value;
    }

    private static __$BITWISE_XOR_PRECEDENCE : number;
    static get BITWISE_XOR_PRECEDENCE() : number { 
        if (this.__$BITWISE_XOR_PRECEDENCE===undefined) {
            this.__$BITWISE_XOR_PRECEDENCE = 10;
        }
        return this.__$BITWISE_XOR_PRECEDENCE;
    }
    static set BITWISE_XOR_PRECEDENCE(__$value : number)  { 
        this.__$BITWISE_XOR_PRECEDENCE = __$value;
    }

    private static __$BITWISE_AND_PRECEDENCE : number;
    static get BITWISE_AND_PRECEDENCE() : number { 
        if (this.__$BITWISE_AND_PRECEDENCE===undefined) {
            this.__$BITWISE_AND_PRECEDENCE = 11;
        }
        return this.__$BITWISE_AND_PRECEDENCE;
    }
    static set BITWISE_AND_PRECEDENCE(__$value : number)  { 
        this.__$BITWISE_AND_PRECEDENCE = __$value;
    }

    private static __$SHIFT_PRECEDENCE : number;
    static get SHIFT_PRECEDENCE() : number { 
        if (this.__$SHIFT_PRECEDENCE===undefined) {
            this.__$SHIFT_PRECEDENCE = 12;
        }
        return this.__$SHIFT_PRECEDENCE;
    }
    static set SHIFT_PRECEDENCE(__$value : number)  { 
        this.__$SHIFT_PRECEDENCE = __$value;
    }

    private static __$ADDITIVE_PRECEDENCE : number;
    static get ADDITIVE_PRECEDENCE() : number { 
        if (this.__$ADDITIVE_PRECEDENCE===undefined) {
            this.__$ADDITIVE_PRECEDENCE = 13;
        }
        return this.__$ADDITIVE_PRECEDENCE;
    }
    static set ADDITIVE_PRECEDENCE(__$value : number)  { 
        this.__$ADDITIVE_PRECEDENCE = __$value;
    }

    private static __$MULTIPLICATIVE_PRECEDENCE : number;
    static get MULTIPLICATIVE_PRECEDENCE() : number { 
        if (this.__$MULTIPLICATIVE_PRECEDENCE===undefined) {
            this.__$MULTIPLICATIVE_PRECEDENCE = 14;
        }
        return this.__$MULTIPLICATIVE_PRECEDENCE;
    }
    static set MULTIPLICATIVE_PRECEDENCE(__$value : number)  { 
        this.__$MULTIPLICATIVE_PRECEDENCE = __$value;
    }

    private static __$PREFIX_PRECEDENCE : number;
    static get PREFIX_PRECEDENCE() : number { 
        if (this.__$PREFIX_PRECEDENCE===undefined) {
            this.__$PREFIX_PRECEDENCE = 15;
        }
        return this.__$PREFIX_PRECEDENCE;
    }
    static set PREFIX_PRECEDENCE(__$value : number)  { 
        this.__$PREFIX_PRECEDENCE = __$value;
    }

    private static __$POSTFIX_PRECEDENCE : number;
    static get POSTFIX_PRECEDENCE() : number { 
        if (this.__$POSTFIX_PRECEDENCE===undefined) {
            this.__$POSTFIX_PRECEDENCE = 16;
        }
        return this.__$POSTFIX_PRECEDENCE;
    }
    static set POSTFIX_PRECEDENCE(__$value : number)  { 
        this.__$POSTFIX_PRECEDENCE = __$value;
    }

}
