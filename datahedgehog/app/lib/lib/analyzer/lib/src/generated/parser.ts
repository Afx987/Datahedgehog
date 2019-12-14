/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/parser.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as math from "@dart2ts/dart/math";

export namespace CommentAndMetadata {
    export type Constructors = 'CommentAndMetadata';
    export type Interface = Omit<CommentAndMetadata, Constructors>;
}
@DartClass
export class CommentAndMetadata {
    comment : any;

    metadata : core.DartList<any>;

    constructor(comment : any,metadata : core.DartList<any>) {
    }
    @defaultConstructor
    CommentAndMetadata(comment : any,metadata : core.DartList<any>) {
        this.comment = comment;
        this.metadata = metadata;
    }
    get hasMetadata() : boolean {
        return this.metadata != null && this.metadata.isNotEmpty;
    }
}

export namespace FinalConstVarOrType {
    export type Constructors = 'FinalConstVarOrType';
    export type Interface = Omit<FinalConstVarOrType, Constructors>;
}
@DartClass
export class FinalConstVarOrType {
    keyword : any;

    type : any;

    constructor(keyword : any,type : any) {
    }
    @defaultConstructor
    FinalConstVarOrType(keyword : any,type : any) {
        this.keyword = keyword;
        this.type = type;
    }
}

export namespace Modifiers {
    export type Constructors = 'Modifiers';
    export type Interface = Omit<Modifiers, Constructors>;
}
@DartClass
export class Modifiers {
    abstractKeyword : any;

    constKeyword : any;

    covariantKeyword : any;

    externalKeyword : any;

    factoryKeyword : any;

    finalKeyword : any;

    staticKeyword : any;

    varKeyword : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let needsSpace : boolean = this._appendKeyword(buffer,false,this.abstractKeyword);
        needsSpace = this._appendKeyword(buffer,needsSpace,this.constKeyword);
        needsSpace = this._appendKeyword(buffer,needsSpace,this.externalKeyword);
        needsSpace = this._appendKeyword(buffer,needsSpace,this.factoryKeyword);
        needsSpace = this._appendKeyword(buffer,needsSpace,this.finalKeyword);
        needsSpace = this._appendKeyword(buffer,needsSpace,this.staticKeyword);
        this._appendKeyword(buffer,needsSpace,this.varKeyword);
        return buffer.toString();
    }
    _appendKeyword(buffer : core.DartStringBuffer,needsSpace : boolean,keyword : any) : boolean {
        if (keyword != null) {
            if (needsSpace) {
                buffer.writeCharCode(32);
            }
            buffer.write(keyword.lexeme);
            return true;
        }
        return needsSpace;
    }
    constructor() {
    }
    @defaultConstructor
    Modifiers() {
    }
}

export namespace Parser {
    export type Constructors = 'Parser';
    export type Interface = Omit<Parser, Constructors>;
}
@DartClass
export class Parser {
    private static __$ASYNC : string;
    static get ASYNC() : string { 
        if (this.__$ASYNC===undefined) {
            this.__$ASYNC = Keyword.ASYNC.lexeme;
        }
        return this.__$ASYNC;
    }
    static set ASYNC(__$value : string)  { 
        this.__$ASYNC = __$value;
    }

    private static __$_AWAIT : string;
    static get _AWAIT() : string { 
        if (this.__$_AWAIT===undefined) {
            this.__$_AWAIT = Keyword.AWAIT.lexeme;
        }
        return this.__$_AWAIT;
    }
    static set _AWAIT(__$value : string)  { 
        this.__$_AWAIT = __$value;
    }

    private static __$_HIDE : string;
    static get _HIDE() : string { 
        if (this.__$_HIDE===undefined) {
            this.__$_HIDE = Keyword.HIDE.lexeme;
        }
        return this.__$_HIDE;
    }
    static set _HIDE(__$value : string)  { 
        this.__$_HIDE = __$value;
    }

    private static __$_SHOW : string;
    static get _SHOW() : string { 
        if (this.__$_SHOW===undefined) {
            this.__$_SHOW = Keyword.SHOW.lexeme;
        }
        return this.__$_SHOW;
    }
    static set _SHOW(__$value : string)  { 
        this.__$_SHOW = __$value;
    }

    private static __$SYNC : string;
    static get SYNC() : string { 
        if (this.__$SYNC===undefined) {
            this.__$SYNC = Keyword.SYNC.lexeme;
        }
        return this.__$SYNC;
    }
    static set SYNC(__$value : string)  { 
        this.__$SYNC = __$value;
    }

    private static __$_YIELD : string;
    static get _YIELD() : string { 
        if (this.__$_YIELD===undefined) {
            this.__$_YIELD = Keyword.YIELD.lexeme;
        }
        return this.__$_YIELD;
    }
    static set _YIELD(__$value : string)  { 
        this.__$_YIELD = __$value;
    }

    private static __$_MAX_TREE_DEPTH : number;
    static get _MAX_TREE_DEPTH() : number { 
        if (this.__$_MAX_TREE_DEPTH===undefined) {
            this.__$_MAX_TREE_DEPTH = 300;
        }
        return this.__$_MAX_TREE_DEPTH;
    }

    _source : any;

    _errorListener : any;

    _errorListenerLock : number;

    _enableAssertInitializer : boolean;

    _enableNnbd : boolean;

    _enableUriInPartOf : boolean;

    _parseFunctionBodies : boolean;

    _currentToken : any;

    _treeDepth : number;

    _inAsync : boolean;

    _inGenerator : boolean;

    _inLoop : boolean;

    _inSwitch : boolean;

    _inInitializer : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    parseGenericMethods : boolean;

    parseGenericMethodComments : boolean;

    constructor(_source : any,_errorListener : any) {
    }
    @defaultConstructor
    Parser(_source : any,_errorListener : any) {
        this._errorListenerLock = 0;
        this._enableAssertInitializer = false;
        this._enableNnbd = false;
        this._enableUriInPartOf = true;
        this._parseFunctionBodies = true;
        this._treeDepth = 0;
        this._inAsync = false;
        this._inGenerator = false;
        this._inLoop = false;
        this._inSwitch = false;
        this._inInitializer = false;
        this.parseGenericMethods = false;
        this.parseGenericMethodComments = false;
        this._source = _source;
        this._errorListener = _errorListener;
    }
    get currentToken() : any {
        return this._currentToken;
    }
    set currentToken(token : any) {
        this._currentToken = token;
    }
    get enableAssertInitializer() : boolean {
        return this._enableAssertInitializer;
    }
    set enableAssertInitializer(enable : boolean) {
        this._enableAssertInitializer = enable;
    }
    get enableNnbd() : boolean {
        return this._enableNnbd;
    }
    set enableNnbd(enable : boolean) {
        this._enableNnbd = enable;
    }
    get enableUriInPartOf() : boolean {
        return this._enableUriInPartOf;
    }
    set enableUriInPartOf(enable : boolean) {
        this._enableUriInPartOf = enable;
    }
    get hasReturnTypeInTypeAlias() : boolean {
        let next : any = this.skipReturnType(this._currentToken);
        if (op(Op.EQUALS,next,null)) {
            return false;
        }
        return this._tokenMatchesIdentifier(next);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set parseAsync(parseAsync : boolean) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get parseConditionalDirectives() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set parseConditionalDirectives(value : boolean) {
    }
    set parseFunctionBodies(parseFunctionBodies : boolean) {
        this._parseFunctionBodies = parseFunctionBodies;
    }
    computeStringValue(lexeme : string,isFirst : boolean,isLast : boolean) : string {
        let helper : any = new bare.createInstance(any,null,lexeme,isFirst,isLast);
        let start : number = helper.start;
        let end : number = helper.end;
        let stringEndsAfterStart : boolean = end >= start;
        /* TODO (AssertStatementImpl) : assert (stringEndsAfterStart); */;
        if (!stringEndsAfterStart) {
            AnalysisEngine.instance.logger.logError(`Internal error: computeStringValue(${lexeme}, ${isFirst}, ${isLast})`);
            return "";
        }
        if (helper.isRaw) {
            return new core.DartString(lexeme).substring(start,end);
        }
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let index : number = start;
        while (index < end){
            index = this._translateCharacter(buffer,lexeme,index);
        }
        return buffer.toString();
    }
    createSyntheticIdentifier(_namedArguments? : {isDeclaration? : boolean}) : any {
        let {isDeclaration} = Object.assign({
            "isDeclaration" : false}, _namedArguments );
        let syntheticToken : any;
        if (this._currentToken.type.isKeyword) {
            syntheticToken = this._injectToken(new bare.createInstance(any,null,TokenType.IDENTIFIER,this._currentToken.lexeme,this._currentToken.offset));
        }else {
            syntheticToken = this._createSyntheticToken(TokenType.IDENTIFIER);
        }
        return astFactory.simpleIdentifier(syntheticToken,{
            isDeclaration : isDeclaration});
    }
    createSyntheticStringLiteral() : any {
        return astFactory.simpleStringLiteral(this._createSyntheticToken(TokenType.STRING),"");
    }
    getAndAdvance() : any {
        let token : any = this._currentToken;
        this._currentToken = this._currentToken.next;
        return token;
    }
    isFunctionDeclaration() : boolean {
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.VOID)) {
            return true;
        }
        let afterReturnType : any = this.skipTypeName(this._currentToken);
        if (afterReturnType != null && this._tokenMatchesKeyword(afterReturnType,Keyword.FUNCTION)) {
            afterReturnType = this.skipGenericFunctionTypeAfterReturnType(afterReturnType);
        }
        if (op(Op.EQUALS,afterReturnType,null)) {
            afterReturnType = this._currentToken;
        }
        let afterIdentifier : any = this.skipSimpleIdentifier(afterReturnType);
        if (op(Op.EQUALS,afterIdentifier,null)) {
            afterIdentifier = this.skipSimpleIdentifier(this._currentToken);
        }
        if (op(Op.EQUALS,afterIdentifier,null)) {
            return false;
        }
        if (this.isFunctionExpression(afterIdentifier)) {
            return true;
        }
        if (op(Op.EQUALS,keyword,Keyword.GET)) {
            let afterName : any = this.skipSimpleIdentifier(this._currentToken.next);
            if (op(Op.EQUALS,afterName,null)) {
                return false;
            }
            let type : any = afterName.type;
            return op(Op.EQUALS,type,TokenType.FUNCTION) || op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET);
        }else if (this._tokenMatchesKeyword(afterReturnType,Keyword.GET)) {
            let afterName : any = this.skipSimpleIdentifier(afterReturnType.next);
            if (op(Op.EQUALS,afterName,null)) {
                return false;
            }
            let type : any = afterName.type;
            return op(Op.EQUALS,type,TokenType.FUNCTION) || op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET);
        }
        return false;
    }
    isFunctionExpression(token : any) : boolean {
        if (this._inInitializer) {
            return false;
        }
        let afterTypeParameters : any = this._skipTypeParameterList(token);
        if (op(Op.EQUALS,afterTypeParameters,null)) {
            afterTypeParameters = token;
        }
        let afterParameters : any = this._skipFormalParameterList(afterTypeParameters);
        if (op(Op.EQUALS,afterParameters,null)) {
            return false;
        }
        if (afterParameters.matchesAny(new core.DartList.literal<any>(TokenType.OPEN_CURLY_BRACKET,TokenType.FUNCTION))) {
            return true;
        }
        let lexeme : string = afterParameters.lexeme;
        return lexeme == Parser.ASYNC || lexeme == Parser.SYNC;
    }
    isInitializedVariableDeclaration() : boolean {
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.FINAL) || op(Op.EQUALS,keyword,Keyword.VAR)) {
            return true;
        }
        if (op(Op.EQUALS,keyword,Keyword.CONST)) {
            return !this._peek().matchesAny(new core.DartList.literal<any>(TokenType.LT,TokenType.OPEN_CURLY_BRACKET,TokenType.OPEN_SQUARE_BRACKET,TokenType.INDEX));
        }
        let allowAdditionalTokens : boolean = true;
        if (this._currentToken.type != TokenType.IDENTIFIER) {
            allowAdditionalTokens = false;
        }
        let token : any = this.skipTypeName(this._currentToken);
        if (op(Op.EQUALS,token,null)) {
            return false;
        }
        while (this._atGenericFunctionTypeAfterReturnType(token)){
            token = this.skipGenericFunctionTypeAfterReturnType(token);
            if (op(Op.EQUALS,token,null)) {
                return false;
            }
        }
        if (token.type != TokenType.IDENTIFIER) {
            allowAdditionalTokens = false;
        }
        token = this.skipSimpleIdentifier(token);
        if (op(Op.EQUALS,token,null)) {
            return false;
        }
        let type : any = token.type;
        if (op(Op.EQUALS,type,TokenType.EQ) || op(Op.EQUALS,type,TokenType.COMMA) || op(Op.EQUALS,type,TokenType.SEMICOLON) || op(Op.EQUALS,token.keyword,Keyword.IN)) {
            return true;
        }
        if (allowAdditionalTokens) {
            if (op(Op.EQUALS,type,TokenType.CLOSE_CURLY_BRACKET) || type.isKeyword || op(Op.EQUALS,type,TokenType.IDENTIFIER) || op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET)) {
                return true;
            }
        }
        return false;
    }
    isSwitchMember() : boolean {
        let token : any = this._currentToken;
        while (this._tokenMatches(token,TokenType.IDENTIFIER) && this._tokenMatches(token.next,TokenType.COLON)){
            token = token.next.next;
        }
        let keyword : any = token.keyword;
        return op(Op.EQUALS,keyword,Keyword.CASE) || op(Op.EQUALS,keyword,Keyword.DEFAULT);
    }
    parseAdditiveExpression() : any {
        let expression : any;
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && this._currentToken.next.type.isAdditiveOperator) {
            expression = astFactory.superExpression(this.getAndAdvance());
        }else {
            expression = this.parseMultiplicativeExpression();
        }
        while (this._currentToken.type.isAdditiveOperator){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseMultiplicativeExpression());
        }
        return expression;
    }
    parseAnnotation() : any {
        let atSign : any = this.getAndAdvance();
        let name : any = this.parsePrefixedIdentifier();
        let period : any = null;
        let constructorName : any = null;
        if (this._matches(TokenType.PERIOD)) {
            period = this.getAndAdvance();
            constructorName = this.parseSimpleIdentifier();
        }
        let arguments : any = null;
        if (this._matches(TokenType.OPEN_PAREN)) {
            arguments = this.parseArgumentList();
        }
        return astFactory.annotation(atSign,name,period,constructorName,arguments);
    }
    parseArgument() : any {
        if (this._matchesIdentifier() && this._tokenMatches(this._peek(),TokenType.COLON)) {
            return astFactory.namedExpression(this.parseLabel(),this.parseExpression2());
        }else {
            return this.parseExpression2();
        }
    }
    parseArgumentList() : any {
        let leftParenthesis : any = this.getAndAdvance();
        if (this._matches(TokenType.CLOSE_PAREN)) {
            return astFactory.argumentList(leftParenthesis,null,this.getAndAdvance());
        }
        var isLikelyMissingComma : () => boolean = () : boolean =>  {
            if (this._matchesIdentifier() && this._tokenMatches(this._currentToken.next,TokenType.COLON) && is(leftParenthesis, any) && leftParenthesis.endToken != null) {
                this._reportErrorForToken(ParserErrorCode.EXPECTED_TOKEN,this._currentToken.previous,new core.DartList.literal(','));
                return true;
            }
            return false;
        };
        let wasInInitializer : boolean = this._inInitializer;
        this._inInitializer = false;
        try {
            let previousStartOfArgument : any = this._currentToken;
            let argument : any = this.parseArgument();
            let arguments : core.DartList<any> = new core.DartList.literal<any>(argument);
            let foundNamedArgument : boolean = is(argument, any);
            let generatedError : boolean = false;
            while (this._optional(TokenType.COMMA) || (isLikelyMissingComma() && previousStartOfArgument != this._currentToken)){
                if (this._matches(TokenType.CLOSE_PAREN)) {
                    break;
                }
                previousStartOfArgument = this._currentToken;
                argument = this.parseArgument();
                arguments.add(argument);
                if (is(argument, any)) {
                    foundNamedArgument = true;
                }else if (foundNamedArgument) {
                    if (!generatedError) {
                        if (!argument.isSynthetic) {
                            this._reportErrorForCurrentToken(ParserErrorCode.POSITIONAL_AFTER_NAMED_ARGUMENT);
                            generatedError = true;
                        }
                    }
                }
            }
            let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
            return astFactory.argumentList(leftParenthesis,arguments,rightParenthesis);
        } finally {
            this._inInitializer = wasInInitializer;
        }
    }
    parseAssertStatement() : any {
        let keyword : any = this.getAndAdvance();
        let leftParen : any = this._expect(TokenType.OPEN_PAREN);
        let expression : any = this.parseExpression2();
        let comma : any;
        let message : any;
        if (this._matches(TokenType.COMMA)) {
            comma = this.getAndAdvance();
            message = this.parseExpression2();
        }
        let rightParen : any = this._expect(TokenType.CLOSE_PAREN);
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.assertStatement(keyword,leftParen,expression,comma,message,rightParen,semicolon);
    }
    parseAssignableExpression(primaryAllowed : boolean) : any {
        if (this._matchesKeyword(Keyword.SUPER)) {
            return this.parseAssignableSelector(astFactory.superExpression(this.getAndAdvance()),false,{
                allowConditional : false});
        }
        return this._parseAssignableExpressionNotStartingWithSuper(primaryAllowed);
    }
    parseAssignableSelector(prefix : any,optional : boolean,_namedArguments? : {allowConditional? : boolean}) : any {
        let {allowConditional} = Object.assign({
            "allowConditional" : true}, _namedArguments );
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.OPEN_SQUARE_BRACKET)) {
            let leftBracket : any = this.getAndAdvance();
            let wasInInitializer : boolean = this._inInitializer;
            this._inInitializer = false;
            try {
                let index : any = this.parseExpression2();
                let rightBracket : any = this._expect(TokenType.CLOSE_SQUARE_BRACKET);
                return astFactory.indexExpressionForTarget(prefix,leftBracket,index,rightBracket);
            } finally {
                this._inInitializer = wasInInitializer;
            }
        }else {
            let isQuestionPeriod : boolean = op(Op.EQUALS,type,TokenType.QUESTION_PERIOD);
            if (op(Op.EQUALS,type,TokenType.PERIOD) || isQuestionPeriod) {
                if (isQuestionPeriod && !allowConditional) {
                    this._reportErrorForCurrentToken(ParserErrorCode.INVALID_OPERATOR_FOR_SUPER,new core.DartList.literal(this._currentToken.lexeme));
                }
                let operator : any = this.getAndAdvance();
                return astFactory.propertyAccess(prefix,operator,this.parseSimpleIdentifier());
            }else if (op(Op.EQUALS,type,TokenType.INDEX)) {
                this._splitIndex();
                let leftBracket : any = this.getAndAdvance();
                let index : any = this.parseSimpleIdentifier();
                let rightBracket : any = this.getAndAdvance();
                return astFactory.indexExpressionForTarget(prefix,leftBracket,index,rightBracket);
            }else {
                if (!optional) {
                    this._reportErrorForCurrentToken(ParserErrorCode.MISSING_ASSIGNABLE_SELECTOR);
                }
                return prefix;
            }
        }
    }
    parseAwaitExpression() : any {
        let awaitToken : any = this.getAndAdvance();
        let expression : any = this.parseUnaryExpression();
        return astFactory.awaitExpression(awaitToken,expression);
    }
    parseBitwiseAndExpression() : any {
        let expression : any;
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && op(Op.EQUALS,this._currentToken.next.type,TokenType.AMPERSAND)) {
            expression = astFactory.superExpression(this.getAndAdvance());
        }else {
            expression = this.parseShiftExpression();
        }
        while (op(Op.EQUALS,this._currentToken.type,TokenType.AMPERSAND)){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseShiftExpression());
        }
        return expression;
    }
    parseBitwiseOrExpression() : any {
        let expression : any;
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && op(Op.EQUALS,this._currentToken.next.type,TokenType.BAR)) {
            expression = astFactory.superExpression(this.getAndAdvance());
        }else {
            expression = this.parseBitwiseXorExpression();
        }
        while (op(Op.EQUALS,this._currentToken.type,TokenType.BAR)){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseBitwiseXorExpression());
        }
        return expression;
    }
    parseBitwiseXorExpression() : any {
        let expression : any;
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && op(Op.EQUALS,this._currentToken.next.type,TokenType.CARET)) {
            expression = astFactory.superExpression(this.getAndAdvance());
        }else {
            expression = this.parseBitwiseAndExpression();
        }
        while (op(Op.EQUALS,this._currentToken.type,TokenType.CARET)){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseBitwiseAndExpression());
        }
        return expression;
    }
    parseBlock() : any {
        var isEndOfBlock : () => boolean = () : boolean =>  {
            let type : any = this._currentToken.type;
            return op(Op.EQUALS,type,TokenType.EOF) || op(Op.EQUALS,type,TokenType.CLOSE_CURLY_BRACKET);
        };
        let leftBracket : any = this.getAndAdvance();
        let statements : core.DartList<any> = new core.DartList.literal<any>();
        let statementStart : any = this._currentToken;
        while (!isEndOfBlock()){
            let statement : any = this.parseStatement2();
            if (core.identical(this._currentToken,statementStart)) {
                this._reportErrorForToken(ParserErrorCode.UNEXPECTED_TOKEN,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
                this._advance();
            }else if (statement != null) {
                statements.add(statement);
            }
            statementStart = this._currentToken;
        }
        let rightBracket : any = this._expect(TokenType.CLOSE_CURLY_BRACKET);
        return astFactory.block(leftBracket,statements,rightBracket);
    }
    parseBreakStatement() : any {
        let breakKeyword : any = this.getAndAdvance();
        let label : any = null;
        if (this._matchesIdentifier()) {
            label = this._parseSimpleIdentifierUnchecked();
        }
        if (!this._inLoop && !this._inSwitch && op(Op.EQUALS,label,null)) {
            this._reportErrorForToken(ParserErrorCode.BREAK_OUTSIDE_OF_LOOP,breakKeyword);
        }
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.breakStatement(breakKeyword,label,semicolon);
    }
    parseCascadeSection() : any {
        let period : any = this.getAndAdvance();
        let expression : any = null;
        let functionName : any = null;
        if (this._matchesIdentifier()) {
            functionName = this._parseSimpleIdentifierUnchecked();
        }else if (op(Op.EQUALS,this._currentToken.type,TokenType.OPEN_SQUARE_BRACKET)) {
            let leftBracket : any = this.getAndAdvance();
            let wasInInitializer : boolean = this._inInitializer;
            this._inInitializer = false;
            try {
                let index : any = this.parseExpression2();
                let rightBracket : any = this._expect(TokenType.CLOSE_SQUARE_BRACKET);
                expression = astFactory.indexExpressionForCascade(period,leftBracket,index,rightBracket);
                period = null;
            } finally {
                this._inInitializer = wasInInitializer;
            }
        }else {
            this._reportErrorForToken(ParserErrorCode.MISSING_IDENTIFIER,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
            functionName = this.createSyntheticIdentifier();
        }
        /* TODO (AssertStatementImpl) : assert ((expression == null && functionName != null) || (expression != null && functionName == null)); */;
        if (this._isLikelyArgumentList()) {
            do{
                let typeArguments : any = this._parseOptionalTypeArguments();
                if (functionName != null) {
                    expression = astFactory.methodInvocation(expression,period,functionName,typeArguments,this.parseArgumentList());
                    period = null;
                    functionName = null;
                }else if (op(Op.EQUALS,expression,null)) {
                    expression = astFactory.methodInvocation(expression,period,this.createSyntheticIdentifier(),typeArguments,this.parseArgumentList());
                }else {
                    expression = astFactory.functionExpressionInvocation(expression,typeArguments,this.parseArgumentList());
                }
            } while (this._isLikelyArgumentList());
        }else if (functionName != null) {
            expression = astFactory.propertyAccess(expression,period,functionName);
            period = null;
        }
        /* TODO (AssertStatementImpl) : assert (expression != null); */;
        let progress : boolean = true;
        while (progress){
            progress = false;
            let selector : any = this.parseAssignableSelector(expression,true);
            if (!core.identical(selector,expression)) {
                expression = selector;
                progress = true;
                while (this._isLikelyArgumentList()){
                    let typeArguments : any = this._parseOptionalTypeArguments();
                    let currentExpression : any = expression;
                    if (is(currentExpression, any)) {
                        expression = astFactory.methodInvocation(currentExpression.target,currentExpression.operator,currentExpression.propertyName,typeArguments,this.parseArgumentList());
                    }else {
                        expression = astFactory.functionExpressionInvocation(expression,typeArguments,this.parseArgumentList());
                    }
                }
            }
        }
        if (this._currentToken.type.isAssignmentOperator) {
            let operator : any = this.getAndAdvance();
            this._ensureAssignable(expression);
            expression = astFactory.assignmentExpression(expression,operator,this.parseExpressionWithoutCascade());
        }
        return expression;
    }
    parseClassDeclaration(commentAndMetadata : CommentAndMetadata,abstractKeyword : any) : any {
        let keyword : any = this.getAndAdvance();
        let name : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        let className : string = name.name;
        let typeParameters : any = null;
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.LT)) {
            typeParameters = this.parseTypeParameterList();
            type = this._currentToken.type;
        }
        if (op(Op.EQUALS,type,TokenType.EQ)) {
            return this._parseClassTypeAliasAfterName(commentAndMetadata,abstractKeyword,keyword,name,typeParameters);
        }
        let extendsClause : any = null;
        let withClause : any = null;
        let implementsClause : any = null;
        let foundClause : boolean = true;
        while (foundClause){
            let keyword : any = this._currentToken.keyword;
            if (op(Op.EQUALS,keyword,Keyword.EXTENDS)) {
                if (op(Op.EQUALS,extendsClause,null)) {
                    extendsClause = this.parseExtendsClause();
                    if (withClause != null) {
                        this._reportErrorForToken(ParserErrorCode.WITH_BEFORE_EXTENDS,withClause.withKeyword);
                    }else if (implementsClause != null) {
                        this._reportErrorForToken(ParserErrorCode.IMPLEMENTS_BEFORE_EXTENDS,implementsClause.implementsKeyword);
                    }
                }else {
                    this._reportErrorForToken(ParserErrorCode.MULTIPLE_EXTENDS_CLAUSES,extendsClause.extendsKeyword);
                    this.parseExtendsClause();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.WITH)) {
                if (op(Op.EQUALS,withClause,null)) {
                    withClause = this.parseWithClause();
                    if (implementsClause != null) {
                        this._reportErrorForToken(ParserErrorCode.IMPLEMENTS_BEFORE_WITH,implementsClause.implementsKeyword);
                    }
                }else {
                    this._reportErrorForToken(ParserErrorCode.MULTIPLE_WITH_CLAUSES,withClause.withKeyword);
                    this.parseWithClause();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.IMPLEMENTS)) {
                if (op(Op.EQUALS,implementsClause,null)) {
                    implementsClause = this.parseImplementsClause();
                }else {
                    this._reportErrorForToken(ParserErrorCode.MULTIPLE_IMPLEMENTS_CLAUSES,implementsClause.implementsKeyword);
                    this.parseImplementsClause();
                }
            }else {
                foundClause = false;
            }
        }
        if (withClause != null && op(Op.EQUALS,extendsClause,null)) {
            this._reportErrorForToken(ParserErrorCode.WITH_WITHOUT_EXTENDS,withClause.withKeyword);
        }
        let nativeClause : any = null;
        if (this._matchesKeyword(Keyword.NATIVE) && this._tokenMatches(this._peek(),TokenType.STRING)) {
            nativeClause = this._parseNativeClause();
        }
        let leftBracket : any = null;
        let members : core.DartList<any> = null;
        let rightBracket : any = null;
        if (this._matches(TokenType.OPEN_CURLY_BRACKET)) {
            leftBracket = this.getAndAdvance();
            members = this._parseClassMembers(className,this._getEndToken(leftBracket));
            rightBracket = this._expect(TokenType.CLOSE_CURLY_BRACKET);
        }else {
            leftBracket = this._createSyntheticToken(TokenType.OPEN_CURLY_BRACKET);
            rightBracket = this._createSyntheticToken(TokenType.CLOSE_CURLY_BRACKET);
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_CLASS_BODY);
        }
        let classDeclaration : any = astFactory.classDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,abstractKeyword,keyword,name,typeParameters,extendsClause,withClause,implementsClause,leftBracket,members,rightBracket);
        classDeclaration.nativeClause = nativeClause;
        return classDeclaration;
    }
    parseClassMember(className : string) : any {
        let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
        let modifiers : Modifiers = this.parseModifiers();
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.VOID) || this._atGenericFunctionTypeAfterReturnType(this._currentToken)) {
            let returnType : any;
            if (op(Op.EQUALS,keyword,Keyword.VOID)) {
                if (this._atGenericFunctionTypeAfterReturnType(this._peek())) {
                    returnType = this.parseTypeAnnotation(false);
                }else {
                    returnType = astFactory.typeName(astFactory.simpleIdentifier(this.getAndAdvance()),null);
                }
            }else {
                returnType = this.parseTypeAnnotation(false);
            }
            keyword = this._currentToken.keyword;
            let next : any = this._peek();
            let isFollowedByIdentifier : boolean = this._tokenMatchesIdentifier(next);
            if (op(Op.EQUALS,keyword,Keyword.GET) && isFollowedByIdentifier) {
                this._validateModifiersForGetterOrSetterOrMethod(modifiers);
                return this.parseGetter(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,returnType);
            }else if (op(Op.EQUALS,keyword,Keyword.SET) && isFollowedByIdentifier) {
                this._validateModifiersForGetterOrSetterOrMethod(modifiers);
                return this.parseSetter(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,returnType);
            }else if (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next)) {
                this._validateModifiersForOperator(modifiers);
                return this._parseOperatorAfterKeyword(commentAndMetadata,modifiers.externalKeyword,returnType,this.getAndAdvance());
            }else if (this._matchesIdentifier() && this._peek().matchesAny(new core.DartList.literal<any>(TokenType.OPEN_PAREN,TokenType.OPEN_CURLY_BRACKET,TokenType.FUNCTION,TokenType.LT))) {
                this._validateModifiersForGetterOrSetterOrMethod(modifiers);
                return this._parseMethodDeclarationAfterReturnType(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,returnType);
            }else if (this._matchesIdentifier() && this._peek().matchesAny(new core.DartList.literal<any>(TokenType.EQ,TokenType.COMMA,TokenType.SEMICOLON))) {
                if (isNot(returnType, any)) {
                    this._reportErrorForNode(ParserErrorCode.VOID_VARIABLE,returnType);
                }
                return this.parseInitializedIdentifierList(commentAndMetadata,modifiers.staticKeyword,modifiers.covariantKeyword,this._validateModifiersForField(modifiers),returnType);
            }else {
                if (this._isOperator(this._currentToken)) {
                    this._validateModifiersForOperator(modifiers);
                    return this.parseOperator(commentAndMetadata,modifiers.externalKeyword,returnType);
                }
                this._reportErrorForToken(ParserErrorCode.EXPECTED_EXECUTABLE,this._currentToken);
                return null;
            }
        }
        let next : any = this._peek();
        let isFollowedByIdentifier : boolean = this._tokenMatchesIdentifier(next);
        if (op(Op.EQUALS,keyword,Keyword.GET) && isFollowedByIdentifier) {
            this._validateModifiersForGetterOrSetterOrMethod(modifiers);
            return this.parseGetter(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,null);
        }else if (op(Op.EQUALS,keyword,Keyword.SET) && isFollowedByIdentifier) {
            this._validateModifiersForGetterOrSetterOrMethod(modifiers);
            return this.parseSetter(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,null);
        }else if (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next)) {
            this._validateModifiersForOperator(modifiers);
            return this._parseOperatorAfterKeyword(commentAndMetadata,modifiers.externalKeyword,null,this.getAndAdvance());
        }else if (!this._matchesIdentifier()) {
            if (this._matchesKeyword(Keyword.CLASS)) {
                this._reportErrorForCurrentToken(ParserErrorCode.CLASS_IN_CLASS);
                this.parseClassDeclaration(commentAndMetadata,null);
                return null;
            }else if (this._matchesKeyword(Keyword.ABSTRACT) && this._tokenMatchesKeyword(this._peek(),Keyword.CLASS)) {
                this._reportErrorForToken(ParserErrorCode.CLASS_IN_CLASS,this._peek());
                this.parseClassDeclaration(commentAndMetadata,this.getAndAdvance());
                return null;
            }else if (this._matchesKeyword(Keyword.ENUM)) {
                this._reportErrorForToken(ParserErrorCode.ENUM_IN_CLASS,this._peek());
                this.parseEnumDeclaration(commentAndMetadata);
                return null;
            }else if (this._isOperator(this._currentToken)) {
                this._validateModifiersForOperator(modifiers);
                return this.parseOperator(commentAndMetadata,modifiers.externalKeyword,null);
            }
            let keyword : any = ((modifiers.varKeyword || modifiers.finalKeyword) || modifiers.constKeyword);
            if (keyword != null) {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
                let variable : any = astFactory.variableDeclaration(this.createSyntheticIdentifier(),null,null);
                let variables : core.DartList<any> = new core.DartList.literal<any>(variable);
                return astFactory.fieldDeclaration2({
                    comment : commentAndMetadata.comment,metadata : commentAndMetadata.metadata,covariantKeyword : modifiers.covariantKeyword,fieldList : astFactory.variableDeclarationList(null,null,keyword,null,variables),semicolon : this._expect(TokenType.SEMICOLON)});
            }
            this._reportErrorForToken(ParserErrorCode.EXPECTED_CLASS_MEMBER,this._currentToken);
            if (commentAndMetadata.comment != null || commentAndMetadata.hasMetadata) {
                return astFactory.methodDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,null,null,null,null,null,this.createSyntheticIdentifier({
                    isDeclaration : true}),null,astFactory.formalParameterList(this._createSyntheticToken(TokenType.OPEN_PAREN),new core.DartList.literal<any>(),null,null,this._createSyntheticToken(TokenType.CLOSE_PAREN)),astFactory.emptyFunctionBody(this._createSyntheticToken(TokenType.SEMICOLON)));
            }
            return null;
        }else if (this._tokenMatches(next,TokenType.PERIOD) && this._tokenMatchesIdentifierOrKeyword(this._peekAt(2)) && this._tokenMatches(this._peekAt(3),TokenType.OPEN_PAREN)) {
            if (!this._tokenMatchesIdentifier(this._peekAt(2))) {
                this._reportErrorForToken(ParserErrorCode.INVALID_CONSTRUCTOR_NAME,this._peekAt(2),new core.DartList.literal(this._peekAt(2).lexeme));
            }
            return this._parseConstructor(commentAndMetadata,modifiers.externalKeyword,this._validateModifiersForConstructor(modifiers),modifiers.factoryKeyword,this.parseSimpleIdentifier(),this.getAndAdvance(),this.parseSimpleIdentifier({
                allowKeyword : true,isDeclaration : true}),this.parseFormalParameterList());
        }else if (this._tokenMatches(next,TokenType.OPEN_PAREN)) {
            let returnType : any = this._parseOptionalTypeNameComment();
            let methodName : any = this.parseSimpleIdentifier({
                isDeclaration : true});
            let typeParameters : any = this._parseGenericCommentTypeParameters();
            let parameters : any = this.parseFormalParameterList();
            if (this._matches(TokenType.COLON) || modifiers.factoryKeyword != null || op(Op.EQUALS,methodName.name,className)) {
                return this._parseConstructor(commentAndMetadata,modifiers.externalKeyword,this._validateModifiersForConstructor(modifiers),modifiers.factoryKeyword,astFactory.simpleIdentifier(methodName.token,{
                    isDeclaration : false}),null,null,parameters);
            }
            this._validateModifiersForGetterOrSetterOrMethod(modifiers);
            this._validateFormalParameterList(parameters);
            return this._parseMethodDeclarationAfterParameters(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,returnType,methodName,typeParameters,parameters);
        }else if (next.matchesAny(new core.DartList.literal<any>(TokenType.EQ,TokenType.COMMA,TokenType.SEMICOLON))) {
            if (op(Op.EQUALS,modifiers.constKeyword,null) && op(Op.EQUALS,modifiers.finalKeyword,null) && op(Op.EQUALS,modifiers.varKeyword,null)) {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE);
            }
            return this.parseInitializedIdentifierList(commentAndMetadata,modifiers.staticKeyword,modifiers.covariantKeyword,this._validateModifiersForField(modifiers),null);
        }else if (op(Op.EQUALS,keyword,Keyword.TYPEDEF)) {
            this._reportErrorForCurrentToken(ParserErrorCode.TYPEDEF_IN_CLASS);
            this._parseFunctionTypeAlias(commentAndMetadata,this.getAndAdvance());
            return null;
        }else {
            let token : any = this._skipTypeParameterList(this._peek());
            if (token != null && this._tokenMatches(token,TokenType.OPEN_PAREN)) {
                return this._parseMethodDeclarationAfterReturnType(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,null);
            }
        }
        let type : any = this._parseTypeAnnotationAfterIdentifier();
        keyword = this._currentToken.keyword;
        next = this._peek();
        isFollowedByIdentifier = this._tokenMatchesIdentifier(next);
        if (op(Op.EQUALS,keyword,Keyword.GET) && isFollowedByIdentifier) {
            this._validateModifiersForGetterOrSetterOrMethod(modifiers);
            return this.parseGetter(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,type);
        }else if (op(Op.EQUALS,keyword,Keyword.SET) && isFollowedByIdentifier) {
            this._validateModifiersForGetterOrSetterOrMethod(modifiers);
            return this.parseSetter(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,type);
        }else if (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next)) {
            this._validateModifiersForOperator(modifiers);
            return this._parseOperatorAfterKeyword(commentAndMetadata,modifiers.externalKeyword,type,this.getAndAdvance());
        }else if (!this._matchesIdentifier()) {
            if (this._matches(TokenType.CLOSE_CURLY_BRACKET)) {
                return this.parseInitializedIdentifierList(commentAndMetadata,modifiers.staticKeyword,modifiers.covariantKeyword,this._validateModifiersForField(modifiers),type);
            }
            if (this._isOperator(this._currentToken)) {
                this._validateModifiersForOperator(modifiers);
                return this.parseOperator(commentAndMetadata,modifiers.externalKeyword,type);
            }
            this._reportErrorForToken(ParserErrorCode.EXPECTED_CLASS_MEMBER,this._currentToken);
            try {
                this._lockErrorListener();
                return this.parseInitializedIdentifierList(commentAndMetadata,modifiers.staticKeyword,modifiers.covariantKeyword,this._validateModifiersForField(modifiers),type);
            } finally {
                this._unlockErrorListener();
            }
        }else if (this._tokenMatches(next,TokenType.OPEN_PAREN)) {
            let methodName : any = this._parseSimpleIdentifierUnchecked({
                isDeclaration : true});
            let typeParameters : any = this._parseGenericCommentTypeParameters();
            let parameters : any = this.parseFormalParameterList();
            if (op(Op.EQUALS,methodName.name,className)) {
                this._reportErrorForNode(ParserErrorCode.CONSTRUCTOR_WITH_RETURN_TYPE,type);
                return this._parseConstructor(commentAndMetadata,modifiers.externalKeyword,this._validateModifiersForConstructor(modifiers),modifiers.factoryKeyword,astFactory.simpleIdentifier(methodName.token,{
                    isDeclaration : true}),null,null,parameters);
            }
            this._validateModifiersForGetterOrSetterOrMethod(modifiers);
            this._validateFormalParameterList(parameters);
            return this._parseMethodDeclarationAfterParameters(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,type,methodName,typeParameters,parameters);
        }else if (this._tokenMatches(next,TokenType.LT)) {
            return this._parseMethodDeclarationAfterReturnType(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,type);
        }else if (this._tokenMatches(next,TokenType.OPEN_CURLY_BRACKET)) {
            this._validateModifiersForGetterOrSetterOrMethod(modifiers);
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_GET);
            this._currentToken = this._injectToken(new bare.createInstance(any,null,Keyword.GET,this._currentToken.offset));
            return this.parseGetter(commentAndMetadata,modifiers.externalKeyword,modifiers.staticKeyword,type);
        }
        return this.parseInitializedIdentifierList(commentAndMetadata,modifiers.staticKeyword,modifiers.covariantKeyword,this._validateModifiersForField(modifiers),type);
    }
    parseCombinator() : any {
        if (this._matchesKeyword(Keyword.SHOW)) {
            return astFactory.showCombinator(this.getAndAdvance(),this.parseIdentifierList());
        }else if (this._matchesKeyword(Keyword.HIDE)) {
            return astFactory.hideCombinator(this.getAndAdvance(),this.parseIdentifierList());
        }
        return null;
    }
    parseCombinators() : core.DartList<any> {
        let combinators : core.DartList<any> = null;
        while (true){
            let combinator : any = this.parseCombinator();
            if (op(Op.EQUALS,combinator,null)) {
                break;
            }
            combinators = ( combinators ) || ( new core.DartList.literal<any>() );
            combinators.add(combinator);
        }
        return combinators;
    }
    parseCommentAndMetadata() : CommentAndMetadata {
        let tokens : core.DartList<any> = this.parseDocumentationCommentTokens();
        let metadata : core.DartList<any> = null;
        while (this._matches(TokenType.AT)){
            metadata = ( metadata ) || ( new core.DartList.literal<any>() );
            metadata.add(this.parseAnnotation());
            let optionalTokens : core.DartList<any> = this.parseDocumentationCommentTokens();
            if (optionalTokens != null) {
                tokens = optionalTokens;
            }
        }
        return new CommentAndMetadata(this.parseDocumentationComment(tokens),metadata);
    }
    parseCommentReference(referenceSource : string,sourceOffset : number) : any {
        try {
            let listener : any = new bare.createInstance(any,null);
            let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,referenceSource,sourceOffset),listener);
            scanner.setSourceStart(1,1);
            let firstToken : any = scanner.tokenize();
            if (listener.errorReported) {
                return null;
            }
            if (op(Op.EQUALS,firstToken.type,TokenType.EOF)) {
                let syntheticToken : any = new bare.createInstance(any,null,TokenType.IDENTIFIER,"",sourceOffset);
                syntheticToken.setNext(firstToken);
                return astFactory.commentReference(null,astFactory.simpleIdentifier(syntheticToken));
            }
            let newKeyword : any = null;
            if (this._tokenMatchesKeyword(firstToken,Keyword.NEW)) {
                newKeyword = firstToken;
                firstToken = firstToken.next;
            }
            if (firstToken.isUserDefinableOperator) {
                if (firstToken.next.type != TokenType.EOF) {
                    return null;
                }
                let identifier : any = astFactory.simpleIdentifier(firstToken);
                return astFactory.commentReference(null,identifier);
            }else if (this._tokenMatchesKeyword(firstToken,Keyword.OPERATOR)) {
                let secondToken : any = firstToken.next;
                if (secondToken.isUserDefinableOperator) {
                    if (secondToken.next.type != TokenType.EOF) {
                        return null;
                    }
                    let identifier : any = astFactory.simpleIdentifier(secondToken);
                    return astFactory.commentReference(null,identifier);
                }
                return null;
            }else if (this._tokenMatchesIdentifier(firstToken)) {
                let secondToken : any = firstToken.next;
                let thirdToken : any = secondToken.next;
                let nextToken : any;
                let identifier : any;
                if (this._tokenMatches(secondToken,TokenType.PERIOD)) {
                    if (thirdToken.isUserDefinableOperator) {
                        identifier = astFactory.prefixedIdentifier(astFactory.simpleIdentifier(firstToken),secondToken,astFactory.simpleIdentifier(thirdToken));
                        nextToken = thirdToken.next;
                    }else if (this._tokenMatchesKeyword(thirdToken,Keyword.OPERATOR)) {
                        let fourthToken : any = thirdToken.next;
                        if (fourthToken.isUserDefinableOperator) {
                            identifier = astFactory.prefixedIdentifier(astFactory.simpleIdentifier(firstToken),secondToken,astFactory.simpleIdentifier(fourthToken));
                            nextToken = fourthToken.next;
                        }else {
                            return null;
                        }
                    }else if (this._tokenMatchesIdentifier(thirdToken)) {
                        identifier = astFactory.prefixedIdentifier(astFactory.simpleIdentifier(firstToken),secondToken,astFactory.simpleIdentifier(thirdToken));
                        nextToken = thirdToken.next;
                    }
                }else {
                    identifier = astFactory.simpleIdentifier(firstToken);
                    nextToken = firstToken.next;
                }
                if (nextToken.type != TokenType.EOF) {
                    return null;
                }
                return astFactory.commentReference(newKeyword,identifier);
            }else {
                let keyword : any = firstToken.keyword;
                if (op(Op.EQUALS,keyword,Keyword.THIS) || op(Op.EQUALS,keyword,Keyword.NULL) || op(Op.EQUALS,keyword,Keyword.TRUE) || op(Op.EQUALS,keyword,Keyword.FALSE)) {
                    return null;
                }
            }
        } catch (__error__) {

            {
                let exception = __error__;
            }
        }
        return null;
    }
    parseCommentReferences(tokens : core.DartList<any>) : core.DartList<any> {
        let references : core.DartList<any> = new core.DartList.literal<any>();
        let isInGitHubCodeBlock : boolean = false;
        for(let token of tokens) {
            let comment : string = token.lexeme;
            if (tokens.length != 1) {
                if (new core.DartString(comment).indexOf('```') != -1) {
                    isInGitHubCodeBlock = !isInGitHubCodeBlock;
                }
                if (isInGitHubCodeBlock) {
                    continue;
                }
            }
            comment = this._removeGitHubInlineCode(comment);
            let length : number = new core.DartString(comment).length;
            let codeBlockRanges : core.DartList<core.DartList<number>> = this._getCodeBlockRanges(comment);
            let leftIndex : number = new core.DartString(comment).indexOf('[');
            while (leftIndex >= 0 && leftIndex + 1 < length){
                let range : core.DartList<number> = this._findRange(codeBlockRanges,leftIndex);
                if (range == null) {
                    let nameOffset : number = op(Op.PLUS,op(Op.PLUS,token.offset,leftIndex),1);
                    let rightIndex : number = new core.DartString(comment).indexOf(']',leftIndex);
                    if (rightIndex >= 0) {
                        let firstChar : number = new core.DartString(comment).codeUnitAt(leftIndex + 1);
                        if (firstChar != 39 && firstChar != 34) {
                            if (this._isLinkText(comment,rightIndex)) {
                            }else {
                                let reference : any = this.parseCommentReference(new core.DartString(comment).substring(leftIndex + 1,rightIndex),nameOffset);
                                if (reference != null) {
                                    references.add(reference);
                                    token.references.add(reference.beginToken);
                                }
                            }
                        }
                    }else {
                        let charAfterLeft : number = new core.DartString(comment).codeUnitAt(leftIndex + 1);
                        let nameToken : any;
                        if (Character.isLetterOrDigit(charAfterLeft)) {
                            let nameEnd : number = StringUtilities.indexOfFirstNotLetterDigit(comment,leftIndex + 1);
                            let name : string = new core.DartString(comment).substring(leftIndex + 1,nameEnd);
                            nameToken = new bare.createInstance(any,null,TokenType.IDENTIFIER,name,nameOffset);
                        }else {
                            nameToken = new bare.createInstance(any,null,TokenType.IDENTIFIER,'',nameOffset);
                        }
                        nameToken.setNext(new bare.createInstance(any,null,TokenType.EOF,nameToken.end));
                        references.add(astFactory.commentReference(null,astFactory.simpleIdentifier(nameToken)));
                        token.references.add(nameToken);
                        rightIndex = leftIndex + 1;
                    }
                    leftIndex = new core.DartString(comment).indexOf('[',rightIndex);
                }else {
                    leftIndex = new core.DartString(comment).indexOf('[',range[1]);
                }
            }
        }
        return references;
    }
    parseCompilationUnit(token : any) : any {
        this._currentToken = token;
        return this.parseCompilationUnit2();
    }
    parseCompilationUnit2() : any {
        let firstToken : any = this._currentToken;
        let scriptTag : any = null;
        if (this._matches(TokenType.SCRIPT_TAG)) {
            scriptTag = astFactory.scriptTag(this.getAndAdvance());
        }
        let libraryDirectiveFound : boolean = false;
        let partOfDirectiveFound : boolean = false;
        let partDirectiveFound : boolean = false;
        let directiveFoundAfterDeclaration : boolean = false;
        let directives : core.DartList<any> = new core.DartList.literal<any>();
        let declarations : core.DartList<any> = new core.DartList.literal<any>();
        let memberStart : any = this._currentToken;
        let type : any = this._currentToken.type;
        while (type != TokenType.EOF){
            let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
            let keyword : any = this._currentToken.keyword;
            let nextType : any = this._currentToken.next.type;
            if ((op(Op.EQUALS,keyword,Keyword.IMPORT) || op(Op.EQUALS,keyword,Keyword.EXPORT) || op(Op.EQUALS,keyword,Keyword.LIBRARY) || op(Op.EQUALS,keyword,Keyword.PART)) && nextType != TokenType.PERIOD && nextType != TokenType.LT && nextType != TokenType.OPEN_PAREN) {
                var parseDirective : () => any = () : any =>  {
                    if (op(Op.EQUALS,keyword,Keyword.IMPORT)) {
                        if (partDirectiveFound) {
                            this._reportErrorForCurrentToken(ParserErrorCode.IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE);
                        }
                        return this.parseImportDirective(commentAndMetadata);
                    }else if (op(Op.EQUALS,keyword,Keyword.EXPORT)) {
                        if (partDirectiveFound) {
                            this._reportErrorForCurrentToken(ParserErrorCode.EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE);
                        }
                        return this.parseExportDirective(commentAndMetadata);
                    }else if (op(Op.EQUALS,keyword,Keyword.LIBRARY)) {
                        if (libraryDirectiveFound) {
                            this._reportErrorForCurrentToken(ParserErrorCode.MULTIPLE_LIBRARY_DIRECTIVES);
                        }else {
                            if (directives.length > 0) {
                                this._reportErrorForCurrentToken(ParserErrorCode.LIBRARY_DIRECTIVE_NOT_FIRST);
                            }
                            libraryDirectiveFound = true;
                        }
                        return this.parseLibraryDirective(commentAndMetadata);
                    }else if (op(Op.EQUALS,keyword,Keyword.PART)) {
                        if (this._tokenMatchesKeyword(this._peek(),Keyword.OF)) {
                            partOfDirectiveFound = true;
                            return this._parsePartOfDirective(commentAndMetadata);
                        }else {
                            partDirectiveFound = true;
                            return this._parsePartDirective(commentAndMetadata);
                        }
                    }else {
                        throw new core.StateError(`parseDirective invoked in an invalid state (currentToken = ${this._currentToken})`);
                    }
                };
                let directive : any = parseDirective();
                if (declarations.length > 0 && !directiveFoundAfterDeclaration) {
                    this._reportErrorForToken(ParserErrorCode.DIRECTIVE_AFTER_DECLARATION,directive.beginToken);
                    directiveFoundAfterDeclaration = true;
                }
                directives.add(directive);
            }else if (op(Op.EQUALS,type,TokenType.SEMICOLON)) {
                this._reportErrorForToken(ParserErrorCode.UNEXPECTED_TOKEN,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
                this._advance();
            }else {
                let member : any;
                try {
                    member = this.parseCompilationUnitMember(commentAndMetadata);
                } catch (__error__) {

                    if (is(__error__,_TooDeepTreeError)){
                        this._reportErrorForToken(ParserErrorCode.STACK_OVERFLOW,this._currentToken);
                        let eof : any = new bare.createInstance(any,null,TokenType.EOF,0);
                        eof.previous = eof;
                        eof.setNext(eof);
                        return astFactory.compilationUnit(eof,null,null,null,eof);
                    }
                }
                if (member != null) {
                    declarations.add(member);
                }
            }
            if (core.identical(this._currentToken,memberStart)) {
                this._reportErrorForToken(ParserErrorCode.UNEXPECTED_TOKEN,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
                this._advance();
                while (!this._matches(TokenType.EOF) && !this._couldBeStartOfCompilationUnitMember()){
                    this._advance();
                }
            }
            memberStart = this._currentToken;
            type = this._currentToken.type;
        }
        if (partOfDirectiveFound && directives.length > 1) {
            let firstPartOf : boolean = true;
            let directiveCount : number = directives.length;
            for(let i : number = 0; i < directiveCount; i++){
                let directive : any = directives[i];
                if (is(directive, any)) {
                    if (firstPartOf) {
                        firstPartOf = false;
                    }else {
                        this._reportErrorForToken(ParserErrorCode.MULTIPLE_PART_OF_DIRECTIVES,directive.partKeyword);
                    }
                }else {
                    this._reportErrorForToken(ParserErrorCode.NON_PART_OF_DIRECTIVE_IN_PART,directives[i].keyword);
                }
            }
        }
        return astFactory.compilationUnit(firstToken,scriptTag,directives,declarations,this._currentToken);
    }
    parseCompilationUnitMember(commentAndMetadata : CommentAndMetadata) : any {
        let modifiers : Modifiers = this.parseModifiers();
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.CLASS)) {
            return this.parseClassDeclaration(commentAndMetadata,this._validateModifiersForClass(modifiers));
        }
        let next : any = this._peek();
        let nextType : any = next.type;
        if (op(Op.EQUALS,keyword,Keyword.TYPEDEF) && nextType != TokenType.PERIOD && nextType != TokenType.LT && nextType != TokenType.OPEN_PAREN) {
            this._validateModifiersForTypedef(modifiers);
            return this.parseTypeAlias(commentAndMetadata);
        }else if (op(Op.EQUALS,keyword,Keyword.ENUM)) {
            this._validateModifiersForEnum(modifiers);
            return this.parseEnumDeclaration(commentAndMetadata);
        }else if (op(Op.EQUALS,keyword,Keyword.VOID) || this._atGenericFunctionTypeAfterReturnType(this._currentToken)) {
            let returnType : any;
            if (op(Op.EQUALS,keyword,Keyword.VOID)) {
                if (this._atGenericFunctionTypeAfterReturnType(next)) {
                    returnType = this.parseTypeAnnotation(false);
                }else {
                    returnType = astFactory.typeName(astFactory.simpleIdentifier(this.getAndAdvance()),null);
                }
            }else {
                returnType = this.parseTypeAnnotation(false);
            }
            keyword = this._currentToken.keyword;
            next = this._peek();
            if ((op(Op.EQUALS,keyword,Keyword.GET) || op(Op.EQUALS,keyword,Keyword.SET)) && this._tokenMatchesIdentifier(next)) {
                this._validateModifiersForTopLevelFunction(modifiers);
                return this.parseFunctionDeclaration(commentAndMetadata,modifiers.externalKeyword,returnType);
            }else if (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next)) {
                this._reportErrorForToken(ParserErrorCode.TOP_LEVEL_OPERATOR,this._currentToken);
                return this._convertToFunctionDeclaration(this._parseOperatorAfterKeyword(commentAndMetadata,modifiers.externalKeyword,returnType,this.getAndAdvance()));
            }else if (this._matchesIdentifier() && next.matchesAny(new core.DartList.literal<any>(TokenType.OPEN_PAREN,TokenType.OPEN_CURLY_BRACKET,TokenType.FUNCTION,TokenType.LT))) {
                this._validateModifiersForTopLevelFunction(modifiers);
                return this.parseFunctionDeclaration(commentAndMetadata,modifiers.externalKeyword,returnType);
            }else if (this._matchesIdentifier() && next.matchesAny(new core.DartList.literal<any>(TokenType.EQ,TokenType.COMMA,TokenType.SEMICOLON))) {
                if (isNot(returnType, any)) {
                    this._reportErrorForNode(ParserErrorCode.VOID_VARIABLE,returnType);
                }
                return astFactory.topLevelVariableDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,this.parseVariableDeclarationListAfterType(null,this._validateModifiersForTopLevelVariable(modifiers),returnType),this._expect(TokenType.SEMICOLON));
            }else {
                this._reportErrorForToken(ParserErrorCode.EXPECTED_EXECUTABLE,this._currentToken);
                return null;
            }
        }else if ((op(Op.EQUALS,keyword,Keyword.GET) || op(Op.EQUALS,keyword,Keyword.SET)) && this._tokenMatchesIdentifier(next)) {
            this._validateModifiersForTopLevelFunction(modifiers);
            return this.parseFunctionDeclaration(commentAndMetadata,modifiers.externalKeyword,null);
        }else if (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next)) {
            this._reportErrorForToken(ParserErrorCode.TOP_LEVEL_OPERATOR,this._currentToken);
            return this._convertToFunctionDeclaration(this._parseOperatorAfterKeyword(commentAndMetadata,modifiers.externalKeyword,null,this.getAndAdvance()));
        }else if (!this._matchesIdentifier()) {
            let keyword : any = modifiers.varKeyword;
            if (op(Op.EQUALS,keyword,null)) {
                keyword = modifiers.finalKeyword;
            }
            if (op(Op.EQUALS,keyword,null)) {
                keyword = modifiers.constKeyword;
            }
            if (keyword != null) {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
                let variable : any = astFactory.variableDeclaration(this.createSyntheticIdentifier(),null,null);
                let variables : core.DartList<any> = new core.DartList.literal<any>(variable);
                return astFactory.topLevelVariableDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,astFactory.variableDeclarationList(null,null,keyword,null,variables),this._expect(TokenType.SEMICOLON));
            }
            this._reportErrorForToken(ParserErrorCode.EXPECTED_EXECUTABLE,this._currentToken);
            return null;
        }else if (this._isPeekGenericTypeParametersAndOpenParen()) {
            return this.parseFunctionDeclaration(commentAndMetadata,modifiers.externalKeyword,null);
        }else if (this._tokenMatches(next,TokenType.OPEN_PAREN)) {
            let returnType : any = this._parseOptionalTypeNameComment();
            this._validateModifiersForTopLevelFunction(modifiers);
            return this.parseFunctionDeclaration(commentAndMetadata,modifiers.externalKeyword,returnType);
        }else if (next.matchesAny(new core.DartList.literal<any>(TokenType.EQ,TokenType.COMMA,TokenType.SEMICOLON))) {
            if (op(Op.EQUALS,modifiers.constKeyword,null) && op(Op.EQUALS,modifiers.finalKeyword,null) && op(Op.EQUALS,modifiers.varKeyword,null)) {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE);
            }
            return astFactory.topLevelVariableDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,this.parseVariableDeclarationListAfterType(null,this._validateModifiersForTopLevelVariable(modifiers),null),this._expect(TokenType.SEMICOLON));
        }
        let returnType : any = this.parseReturnType(false);
        keyword = this._currentToken.keyword;
        next = this._peek();
        if ((op(Op.EQUALS,keyword,Keyword.GET) || op(Op.EQUALS,keyword,Keyword.SET)) && this._tokenMatchesIdentifier(next)) {
            this._validateModifiersForTopLevelFunction(modifiers);
            return this.parseFunctionDeclaration(commentAndMetadata,modifiers.externalKeyword,returnType);
        }else if (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next)) {
            this._reportErrorForToken(ParserErrorCode.TOP_LEVEL_OPERATOR,this._currentToken);
            return this._convertToFunctionDeclaration(this._parseOperatorAfterKeyword(commentAndMetadata,modifiers.externalKeyword,returnType,this.getAndAdvance()));
        }else if (this._matches(TokenType.AT)) {
            return astFactory.topLevelVariableDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,this.parseVariableDeclarationListAfterType(null,this._validateModifiersForTopLevelVariable(modifiers),returnType),this._expect(TokenType.SEMICOLON));
        }else if (!this._matchesIdentifier()) {
            this._reportErrorForToken(ParserErrorCode.EXPECTED_EXECUTABLE,this._currentToken);
            let semicolon : any;
            if (this._matches(TokenType.SEMICOLON)) {
                semicolon = this.getAndAdvance();
            }else {
                semicolon = this._createSyntheticToken(TokenType.SEMICOLON);
            }
            let variable : any = astFactory.variableDeclaration(this.createSyntheticIdentifier(),null,null);
            let variables : core.DartList<any> = new core.DartList.literal<any>(variable);
            return astFactory.topLevelVariableDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,astFactory.variableDeclarationList(null,null,null,returnType,variables),semicolon);
        }else if (next.matchesAny(new core.DartList.literal<any>(TokenType.OPEN_PAREN,TokenType.FUNCTION,TokenType.OPEN_CURLY_BRACKET,TokenType.LT))) {
            this._validateModifiersForTopLevelFunction(modifiers);
            return this.parseFunctionDeclaration(commentAndMetadata,modifiers.externalKeyword,returnType);
        }
        return astFactory.topLevelVariableDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,this.parseVariableDeclarationListAfterType(null,this._validateModifiersForTopLevelVariable(modifiers),returnType),this._expect(TokenType.SEMICOLON));
    }
    parseConditionalExpression() : any {
        let condition : any = this.parseIfNullExpression();
        if (this._currentToken.type != TokenType.QUESTION) {
            return condition;
        }
        let question : any = this.getAndAdvance();
        let thenExpression : any = this.parseExpressionWithoutCascade();
        let colon : any = this._expect(TokenType.COLON);
        let elseExpression : any = this.parseExpressionWithoutCascade();
        return astFactory.conditionalExpression(condition,question,thenExpression,colon,elseExpression);
    }
    parseConfiguration() : any {
        let ifKeyword : any = this.getAndAdvance();
        let leftParenthesis : any = this._expect(TokenType.OPEN_PAREN);
        let name : any = this.parseDottedName();
        let equalToken : any = null;
        let value : any = null;
        if (this._matches(TokenType.EQ_EQ)) {
            equalToken = this.getAndAdvance();
            value = this.parseStringLiteral();
            if (is(value, any)) {
                this._reportErrorForNode(ParserErrorCode.INVALID_LITERAL_IN_CONFIGURATION,value);
            }
        }
        let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
        let libraryUri : any = this._parseUri();
        return astFactory.configuration(ifKeyword,leftParenthesis,name,equalToken,value,rightParenthesis,libraryUri);
    }
    parseConstExpression() : any {
        let keyword : any = this.getAndAdvance();
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.LT) || this._injectGenericCommentTypeList()) {
            return this.parseListOrMapLiteral(keyword);
        }else if (op(Op.EQUALS,type,TokenType.OPEN_SQUARE_BRACKET) || op(Op.EQUALS,type,TokenType.INDEX)) {
            return this.parseListLiteral(keyword,null);
        }else if (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET)) {
            return this.parseMapLiteral(keyword,null);
        }
        return this.parseInstanceCreationExpression(keyword);
    }
    parseConstructorFieldInitializer(hasThis : boolean) : any {
        let keywordToken : any = null;
        let period : any = null;
        if (hasThis) {
            keywordToken = this.getAndAdvance();
            period = this._expect(TokenType.PERIOD);
        }
        let fieldName : any = this.parseSimpleIdentifier();
        let equals : any = null;
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.EQ)) {
            equals = this.getAndAdvance();
        }else {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_ASSIGNMENT_IN_INITIALIZER);
            let keyword : any = this._currentToken.keyword;
            if (keyword != Keyword.THIS && keyword != Keyword.SUPER && type != TokenType.OPEN_CURLY_BRACKET && type != TokenType.FUNCTION) {
                equals = this._createSyntheticToken(TokenType.EQ);
            }else {
                return astFactory.constructorFieldInitializer(keywordToken,period,fieldName,this._createSyntheticToken(TokenType.EQ),this.createSyntheticIdentifier());
            }
        }
        let wasInInitializer : boolean = this._inInitializer;
        this._inInitializer = true;
        try {
            let expression : any = this.parseConditionalExpression();
            if (this._matches(TokenType.PERIOD_PERIOD)) {
                let cascadeSections : core.DartList<any> = new core.DartList.literal<any>();
                do{
                    let section : any = this.parseCascadeSection();
                    if (section != null) {
                        cascadeSections.add(section);
                    }
                } while (this._matches(TokenType.PERIOD_PERIOD));
                expression = astFactory.cascadeExpression(expression,cascadeSections);
            }
            return astFactory.constructorFieldInitializer(keywordToken,period,fieldName,equals,expression);
        } finally {
            this._inInitializer = wasInInitializer;
        }
    }
    parseConstructorName() : any {
        let type : any = this.parseTypeName(false);
        let period : any = null;
        let name : any = null;
        if (this._matches(TokenType.PERIOD)) {
            period = this.getAndAdvance();
            name = this.parseSimpleIdentifier();
        }
        return astFactory.constructorName(type,period,name);
    }
    parseContinueStatement() : any {
        let continueKeyword : any = this.getAndAdvance();
        if (!this._inLoop && !this._inSwitch) {
            this._reportErrorForToken(ParserErrorCode.CONTINUE_OUTSIDE_OF_LOOP,continueKeyword);
        }
        let label : any = null;
        if (this._matchesIdentifier()) {
            label = this._parseSimpleIdentifierUnchecked();
        }
        if (this._inSwitch && !this._inLoop && op(Op.EQUALS,label,null)) {
            this._reportErrorForToken(ParserErrorCode.CONTINUE_WITHOUT_LABEL_IN_CASE,continueKeyword);
        }
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.continueStatement(continueKeyword,label,semicolon);
    }
    parseDirective(commentAndMetadata : CommentAndMetadata) : any {
        if (this._matchesKeyword(Keyword.IMPORT)) {
            return this.parseImportDirective(commentAndMetadata);
        }else if (this._matchesKeyword(Keyword.EXPORT)) {
            return this.parseExportDirective(commentAndMetadata);
        }else if (this._matchesKeyword(Keyword.LIBRARY)) {
            return this.parseLibraryDirective(commentAndMetadata);
        }else if (this._matchesKeyword(Keyword.PART)) {
            return this.parsePartOrPartOfDirective(commentAndMetadata);
        }else {
            throw new core.StateError(`parseDirective invoked in an invalid state; currentToken = ${this._currentToken}`);
        }
    }
    parseDirectives(token : any) : any {
        this._currentToken = token;
        return this.parseDirectives2();
    }
    parseDirectives2() : any {
        let firstToken : any = this._currentToken;
        let scriptTag : any = null;
        if (this._matches(TokenType.SCRIPT_TAG)) {
            scriptTag = astFactory.scriptTag(this.getAndAdvance());
        }
        let directives : core.DartList<any> = new core.DartList.literal<any>();
        while (!this._matches(TokenType.EOF)){
            let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
            let keyword : any = this._currentToken.keyword;
            let type : any = this._peek().type;
            if ((op(Op.EQUALS,keyword,Keyword.IMPORT) || op(Op.EQUALS,keyword,Keyword.EXPORT) || op(Op.EQUALS,keyword,Keyword.LIBRARY) || op(Op.EQUALS,keyword,Keyword.PART)) && type != TokenType.PERIOD && type != TokenType.LT && type != TokenType.OPEN_PAREN) {
                directives.add(this.parseDirective(commentAndMetadata));
            }else if (this._matches(TokenType.SEMICOLON)) {
                this._advance();
            }else {
                while (!this._matches(TokenType.EOF)){
                    this._advance();
                }
                return astFactory.compilationUnit(firstToken,scriptTag,directives,null,this._currentToken);
            }
        }
        return astFactory.compilationUnit(firstToken,scriptTag,directives,null,this._currentToken);
    }
    parseDocumentationComment(tokens : core.DartList<any>) : any {
        if (tokens == null) {
            return null;
        }
        let references : core.DartList<any> = this.parseCommentReferences(tokens);
        return astFactory.documentationComment(tokens,references);
    }
    parseDocumentationCommentTokens() : core.DartList<any> {
        let tokens : core.DartList<any> = new core.DartList.literal<any>();
        let commentToken : any = this._currentToken.precedingComments;
        while (commentToken != null){
            if (is(commentToken, any)) {
                if (tokens.isNotEmpty) {
                    if (op(Op.EQUALS,commentToken.type,TokenType.SINGLE_LINE_COMMENT)) {
                        if (tokens[0].type != TokenType.SINGLE_LINE_COMMENT) {
                            tokens.clear();
                        }
                    }else {
                        tokens.clear();
                    }
                }
                tokens.add(commentToken);
            }
            commentToken = commentToken.next;
        }
        return tokens.isEmpty ? null : tokens;
    }
    parseDoStatement() : any {
        let wasInLoop : boolean = this._inLoop;
        this._inLoop = true;
        try {
            let doKeyword : any = this.getAndAdvance();
            let body : any = this.parseStatement2();
            let whileKeyword : any = this._expectKeyword(Keyword.WHILE);
            let leftParenthesis : any = this._expect(TokenType.OPEN_PAREN);
            let condition : any = this.parseExpression2();
            let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
            let semicolon : any = this._expect(TokenType.SEMICOLON);
            return astFactory.doStatement(doKeyword,body,whileKeyword,leftParenthesis,condition,rightParenthesis,semicolon);
        } finally {
            this._inLoop = wasInLoop;
        }
    }
    parseDottedName() : any {
        let components : core.DartList<any> = new core.DartList.literal<any>(this.parseSimpleIdentifier());
        while (this._optional(TokenType.PERIOD)){
            components.add(this.parseSimpleIdentifier());
        }
        return astFactory.dottedName(components);
    }
    parseEmptyStatement() : any {
        return astFactory.emptyStatement(this.getAndAdvance());
    }
    parseEnumDeclaration(commentAndMetadata : CommentAndMetadata) : any {
        let keyword : any = this.getAndAdvance();
        let name : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        let leftBracket : any = null;
        let constants : core.DartList<any> = new core.DartList.literal<any>();
        let rightBracket : any = null;
        if (this._matches(TokenType.OPEN_CURLY_BRACKET)) {
            leftBracket = this.getAndAdvance();
            if (this._matchesIdentifier() || this._matches(TokenType.AT)) {
                constants.add(this._parseEnumConstantDeclaration());
            }else if (this._matches(TokenType.COMMA) && this._tokenMatchesIdentifier(this._peek())) {
                constants.add(this._parseEnumConstantDeclaration());
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
            }else {
                constants.add(this._parseEnumConstantDeclaration());
                this._reportErrorForCurrentToken(ParserErrorCode.EMPTY_ENUM_BODY);
            }
            while (this._optional(TokenType.COMMA)){
                if (this._matches(TokenType.CLOSE_CURLY_BRACKET)) {
                    break;
                }
                constants.add(this._parseEnumConstantDeclaration());
            }
            rightBracket = this._expect(TokenType.CLOSE_CURLY_BRACKET);
        }else {
            leftBracket = this._createSyntheticToken(TokenType.OPEN_CURLY_BRACKET);
            rightBracket = this._createSyntheticToken(TokenType.CLOSE_CURLY_BRACKET);
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_ENUM_BODY);
        }
        return astFactory.enumDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,name,leftBracket,constants,rightBracket);
    }
    parseEqualityExpression() : any {
        let expression : any;
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && this._currentToken.next.type.isEqualityOperator) {
            expression = astFactory.superExpression(this.getAndAdvance());
        }else {
            expression = this.parseRelationalExpression();
        }
        let leftEqualityExpression : boolean = false;
        while (this._currentToken.type.isEqualityOperator){
            if (leftEqualityExpression) {
                this._reportErrorForNode(ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND,expression);
            }
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseRelationalExpression());
            leftEqualityExpression = true;
        }
        return expression;
    }
    parseExportDirective(commentAndMetadata : CommentAndMetadata) : any {
        let exportKeyword : any = this.getAndAdvance();
        let libraryUri : any = this._parseUri();
        let configurations : core.DartList<any> = this._parseConfigurations();
        let combinators : core.DartList<any> = this.parseCombinators();
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.exportDirective(commentAndMetadata.comment,commentAndMetadata.metadata,exportKeyword,libraryUri,configurations,combinators,semicolon);
    }
    parseExpression(token : any) : any {
        this._currentToken = token;
        return this.parseExpression2();
    }
    parseExpression2() : any {
        if (this._treeDepth > Parser._MAX_TREE_DEPTH) {
            throw new _TooDeepTreeError();
        }
        this._treeDepth++;
        try {
            let keyword : any = this._currentToken.keyword;
            if (op(Op.EQUALS,keyword,Keyword.THROW)) {
                return this.parseThrowExpression();
            }else if (op(Op.EQUALS,keyword,Keyword.RETHROW)) {
                return this.parseRethrowExpression();
            }
            let expression : any = this.parseConditionalExpression();
            let type : any = this._currentToken.type;
            if (op(Op.EQUALS,type,TokenType.PERIOD_PERIOD)) {
                let cascadeSections : core.DartList<any> = new core.DartList.literal<any>();
                do{
                    let section : any = this.parseCascadeSection();
                    if (section != null) {
                        cascadeSections.add(section);
                    }
                } while (op(Op.EQUALS,this._currentToken.type,TokenType.PERIOD_PERIOD));
                return astFactory.cascadeExpression(expression,cascadeSections);
            }else if (type.isAssignmentOperator) {
                let operator : any = this.getAndAdvance();
                this._ensureAssignable(expression);
                return astFactory.assignmentExpression(expression,operator,this.parseExpression2());
            }
            return expression;
        } finally {
            this._treeDepth--;
        }
    }
    parseExpressionList() : core.DartList<any> {
        let expressions : core.DartList<any> = new core.DartList.literal<any>(this.parseExpression2());
        while (this._optional(TokenType.COMMA)){
            expressions.add(this.parseExpression2());
        }
        return expressions;
    }
    parseExpressionWithoutCascade() : any {
        if (this._matchesKeyword(Keyword.THROW)) {
            return this.parseThrowExpressionWithoutCascade();
        }else if (this._matchesKeyword(Keyword.RETHROW)) {
            return this.parseRethrowExpression();
        }
        let expression : any = this.parseConditionalExpression();
        if (this._currentToken.type.isAssignmentOperator) {
            let operator : any = this.getAndAdvance();
            this._ensureAssignable(expression);
            expression = astFactory.assignmentExpression(expression,operator,this.parseExpressionWithoutCascade());
        }
        return expression;
    }
    parseExtendsClause() : any {
        let keyword : any = this.getAndAdvance();
        let superclass : any = this.parseTypeName(false);
        this._mustNotBeNullable(superclass,ParserErrorCode.NULLABLE_TYPE_IN_EXTENDS);
        return astFactory.extendsClause(keyword,superclass);
    }
    parseFinalConstVarOrType(optional : boolean,_namedArguments? : {inFunctionType? : boolean}) : FinalConstVarOrType {
        let {inFunctionType} = Object.assign({
            "inFunctionType" : false}, _namedArguments );
        let keywordToken : any = null;
        let type : any = null;
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.FINAL) || op(Op.EQUALS,keyword,Keyword.CONST)) {
            keywordToken = this.getAndAdvance();
            if (this._isTypedIdentifier(this._currentToken)) {
                type = this.parseTypeAnnotation(false);
            }else {
                type = this._parseOptionalTypeNameComment();
            }
        }else if (op(Op.EQUALS,keyword,Keyword.VAR)) {
            keywordToken = this.getAndAdvance();
            type = this._parseOptionalTypeNameComment();
            if (type != null) {
                keywordToken = null;
            }
        }else if (this._isTypedIdentifier(this._currentToken)) {
            type = this.parseReturnType(false);
        }else if (inFunctionType && this._matchesIdentifier()) {
            type = this.parseTypeAnnotation(false);
        }else if (!optional) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE);
        }else {
            type = this._parseOptionalTypeNameComment();
        }
        return new FinalConstVarOrType(keywordToken,type);
    }
    parseFormalParameter(kind : any,_namedArguments? : {inFunctionType? : boolean}) : any {
        let {inFunctionType} = Object.assign({
            "inFunctionType" : false}, _namedArguments );
        let parameter : any = this.parseNormalFormalParameter({
            inFunctionType : inFunctionType});
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.EQ)) {
            if (inFunctionType) {
                this._reportErrorForCurrentToken(ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE);
            }
            let separator : any = this.getAndAdvance();
            let defaultValue : any = this.parseExpression2();
            if (op(Op.EQUALS,kind,ParameterKind.REQUIRED)) {
                this._reportErrorForNode(ParserErrorCode.POSITIONAL_PARAMETER_OUTSIDE_GROUP,parameter);
                kind = ParameterKind.POSITIONAL;
            }else if (op(Op.EQUALS,kind,ParameterKind.NAMED) && inFunctionType && op(Op.EQUALS,parameter.identifier,null)) {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_NAME_FOR_NAMED_PARAMETER);
            }
            return astFactory.defaultFormalParameter(parameter,kind,separator,defaultValue);
        }else if (op(Op.EQUALS,type,TokenType.COLON)) {
            if (inFunctionType) {
                this._reportErrorForCurrentToken(ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE);
            }
            let separator : any = this.getAndAdvance();
            let defaultValue : any = this.parseExpression2();
            if (op(Op.EQUALS,kind,ParameterKind.REQUIRED)) {
                this._reportErrorForNode(ParserErrorCode.NAMED_PARAMETER_OUTSIDE_GROUP,parameter);
                kind = ParameterKind.NAMED;
            }else if (op(Op.EQUALS,kind,ParameterKind.POSITIONAL)) {
                this._reportErrorForToken(ParserErrorCode.WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER,separator);
            }else if (op(Op.EQUALS,kind,ParameterKind.NAMED) && inFunctionType && op(Op.EQUALS,parameter.identifier,null)) {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_NAME_FOR_NAMED_PARAMETER);
            }
            return astFactory.defaultFormalParameter(parameter,kind,separator,defaultValue);
        }else if (kind != ParameterKind.REQUIRED) {
            if (op(Op.EQUALS,kind,ParameterKind.NAMED) && inFunctionType && op(Op.EQUALS,parameter.identifier,null)) {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_NAME_FOR_NAMED_PARAMETER);
            }
            return astFactory.defaultFormalParameter(parameter,kind,null,null);
        }
        return parameter;
    }
    parseFormalParameterList(_namedArguments? : {inFunctionType? : boolean}) : any {
        let {inFunctionType} = Object.assign({
            "inFunctionType" : false}, _namedArguments );
        if (this._matches(TokenType.OPEN_PAREN)) {
            return this._parseFormalParameterListUnchecked({
                inFunctionType : inFunctionType});
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(TokenType.OPEN_PAREN.lexeme));
        return this._parseFormalParameterListAfterParen(this._createSyntheticToken(TokenType.OPEN_PAREN));
    }
    parseForStatement() : any {
        let wasInLoop : boolean = this._inLoop;
        this._inLoop = true;
        try {
            let awaitKeyword : any = null;
            if (this._matchesKeyword(Keyword.AWAIT)) {
                awaitKeyword = this.getAndAdvance();
            }
            let forKeyword : any = this._expectKeyword(Keyword.FOR);
            let leftParenthesis : any = this._expect(TokenType.OPEN_PAREN);
            let variableList : any = null;
            let initialization : any = null;
            if (!this._matches(TokenType.SEMICOLON)) {
                let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
                if (this._matchesIdentifier() && (this._tokenMatchesKeyword(this._peek(),Keyword.IN) || this._tokenMatches(this._peek(),TokenType.COLON))) {
                    let variableName : any = this._parseSimpleIdentifierUnchecked();
                    variableList = astFactory.variableDeclarationList(commentAndMetadata.comment,commentAndMetadata.metadata,null,null,new core.DartList.literal<any>(astFactory.variableDeclaration(variableName,null,null)));
                }else if (this.isInitializedVariableDeclaration()) {
                    variableList = this.parseVariableDeclarationListAfterMetadata(commentAndMetadata);
                }else {
                    initialization = this.parseExpression2();
                }
                let type : any = this._currentToken.type;
                if (this._matchesKeyword(Keyword.IN) || op(Op.EQUALS,type,TokenType.COLON)) {
                    if (op(Op.EQUALS,type,TokenType.COLON)) {
                        this._reportErrorForCurrentToken(ParserErrorCode.COLON_IN_PLACE_OF_IN);
                    }
                    let loopVariable : any = null;
                    let identifier : any = null;
                    if (op(Op.EQUALS,variableList,null)) {
                        this._reportErrorForCurrentToken(ParserErrorCode.MISSING_VARIABLE_IN_FOR_EACH);
                    }else {
                        let variables : any = variableList.variables;
                        if (op(Op.GT,variables.length,1)) {
                            this._reportErrorForCurrentToken(ParserErrorCode.MULTIPLE_VARIABLES_IN_FOR_EACH,new core.DartList.literal(variables.length.toString()));
                        }
                        let variable : any = op(Op.INDEX,variables,0);
                        if (variable.initializer != null) {
                            this._reportErrorForCurrentToken(ParserErrorCode.INITIALIZED_VARIABLE_IN_FOR_EACH);
                        }
                        let keyword : any = variableList.keyword;
                        let type : any = variableList.type;
                        if (keyword != null || type != null) {
                            loopVariable = astFactory.declaredIdentifier(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,type,astFactory.simpleIdentifier(variable.name.token,{
                                isDeclaration : true}));
                        }else {
                            if (commentAndMetadata.hasMetadata) {
                            }
                            identifier = variable.name;
                        }
                    }
                    let inKeyword : any = this.getAndAdvance();
                    let iterator : any = this.parseExpression2();
                    let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
                    let body : any = this.parseStatement2();
                    if (op(Op.EQUALS,loopVariable,null)) {
                        return astFactory.forEachStatementWithReference(awaitKeyword,forKeyword,leftParenthesis,identifier,inKeyword,iterator,rightParenthesis,body);
                    }
                    return astFactory.forEachStatementWithDeclaration(awaitKeyword,forKeyword,leftParenthesis,loopVariable,inKeyword,iterator,rightParenthesis,body);
                }
            }
            if (awaitKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.INVALID_AWAIT_IN_FOR,awaitKeyword);
            }
            let leftSeparator : any = this._expect(TokenType.SEMICOLON);
            let condition : any = null;
            if (!this._matches(TokenType.SEMICOLON)) {
                condition = this.parseExpression2();
            }
            let rightSeparator : any = this._expect(TokenType.SEMICOLON);
            let updaters : core.DartList<any> = null;
            if (!this._matches(TokenType.CLOSE_PAREN)) {
                updaters = this.parseExpressionList();
            }
            let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
            let body : any = this.parseStatement2();
            return astFactory.forStatement(forKeyword,leftParenthesis,variableList,initialization,leftSeparator,condition,rightSeparator,updaters,rightParenthesis,body);
        } finally {
            this._inLoop = wasInLoop;
        }
    }
    parseFunctionBody(mayBeEmpty : boolean,emptyErrorCode : any,inExpression : boolean) : any {
        let wasInAsync : boolean = this._inAsync;
        let wasInGenerator : boolean = this._inGenerator;
        let wasInLoop : boolean = this._inLoop;
        let wasInSwitch : boolean = this._inSwitch;
        this._inAsync = false;
        this._inGenerator = false;
        this._inLoop = false;
        this._inSwitch = false;
        try {
            let type : any = this._currentToken.type;
            if (op(Op.EQUALS,type,TokenType.SEMICOLON)) {
                if (!mayBeEmpty) {
                    this._reportErrorForCurrentToken(emptyErrorCode);
                }
                return astFactory.emptyFunctionBody(this.getAndAdvance());
            }
            let keyword : any = null;
            let star : any = null;
            let foundAsync : boolean = false;
            let foundSync : boolean = false;
            if (type.isKeyword) {
                let lexeme : string = this._currentToken.lexeme;
                if (lexeme == Parser.ASYNC) {
                    foundAsync = true;
                    keyword = this.getAndAdvance();
                    if (this._matches(TokenType.STAR)) {
                        star = this.getAndAdvance();
                        this._inGenerator = true;
                    }
                    type = this._currentToken.type;
                    this._inAsync = true;
                }else if (lexeme == Parser.SYNC) {
                    foundSync = true;
                    keyword = this.getAndAdvance();
                    if (this._matches(TokenType.STAR)) {
                        star = this.getAndAdvance();
                        this._inGenerator = true;
                    }
                    type = this._currentToken.type;
                }
            }
            if (op(Op.EQUALS,type,TokenType.FUNCTION)) {
                if (keyword != null) {
                    if (!foundAsync) {
                        this._reportErrorForToken(ParserErrorCode.INVALID_SYNC,keyword);
                        keyword = null;
                    }else if (star != null) {
                        this._reportErrorForToken(ParserErrorCode.INVALID_STAR_AFTER_ASYNC,star);
                    }
                }
                let functionDefinition : any = this.getAndAdvance();
                if (this._matchesKeyword(Keyword.RETURN)) {
                    this._reportErrorForToken(ParserErrorCode.UNEXPECTED_TOKEN,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }
                let expression : any = this.parseExpression2();
                let semicolon : any = null;
                if (!inExpression) {
                    semicolon = this._expect(TokenType.SEMICOLON);
                }
                if (!this._parseFunctionBodies) {
                    return astFactory.emptyFunctionBody(this._createSyntheticToken(TokenType.SEMICOLON));
                }
                return astFactory.expressionFunctionBody(keyword,functionDefinition,expression,semicolon);
            }else if (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET)) {
                if (keyword != null) {
                    if (foundSync && op(Op.EQUALS,star,null)) {
                        this._reportErrorForToken(ParserErrorCode.MISSING_STAR_AFTER_SYNC,keyword);
                    }
                }
                if (!this._parseFunctionBodies) {
                    this._skipBlock();
                    return astFactory.emptyFunctionBody(this._createSyntheticToken(TokenType.SEMICOLON));
                }
                return astFactory.blockFunctionBody(keyword,star,this.parseBlock());
            }else if (this._matchesKeyword(Keyword.NATIVE)) {
                let nativeToken : any = this.getAndAdvance();
                let stringLiteral : any = null;
                if (this._matches(TokenType.STRING)) {
                    stringLiteral = this._parseStringLiteralUnchecked();
                }
                return astFactory.nativeFunctionBody(nativeToken,stringLiteral,this._expect(TokenType.SEMICOLON));
            }else {
                this._reportErrorForCurrentToken(emptyErrorCode);
                return astFactory.emptyFunctionBody(this._createSyntheticToken(TokenType.SEMICOLON));
            }
        } finally {
            this._inAsync = wasInAsync;
            this._inGenerator = wasInGenerator;
            this._inLoop = wasInLoop;
            this._inSwitch = wasInSwitch;
        }
    }
    parseFunctionDeclaration(commentAndMetadata : CommentAndMetadata,externalKeyword : any,returnType : any) : any {
        let keywordToken : any = null;
        let isGetter : boolean = false;
        let keyword : any = this._currentToken.keyword;
        let name : any = null;
        if (op(Op.EQUALS,keyword,Keyword.GET)) {
            keywordToken = this.getAndAdvance();
            isGetter = true;
        }else if (op(Op.EQUALS,keyword,Keyword.SET)) {
            keywordToken = this.getAndAdvance();
        }
        if (keywordToken != null && this._matches(TokenType.OPEN_PAREN)) {
            name = astFactory.simpleIdentifier(keywordToken,{
                isDeclaration : true});
            keywordToken = null;
            isGetter = false;
        }else {
            name = this.parseSimpleIdentifier({
                isDeclaration : true});
        }
        let typeParameters : any = this._parseGenericMethodTypeParameters();
        let parameters : any = null;
        if (!isGetter) {
            if (this._matches(TokenType.OPEN_PAREN)) {
                parameters = this._parseFormalParameterListUnchecked();
                this._validateFormalParameterList(parameters);
            }else {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_FUNCTION_PARAMETERS);
                parameters = astFactory.formalParameterList(this._createSyntheticToken(TokenType.OPEN_PAREN),null,null,null,this._createSyntheticToken(TokenType.CLOSE_PAREN));
            }
        }else if (this._matches(TokenType.OPEN_PAREN)) {
            this._reportErrorForCurrentToken(ParserErrorCode.GETTER_WITH_PARAMETERS);
            this._parseFormalParameterListUnchecked();
        }
        let body : any;
        if (op(Op.EQUALS,externalKeyword,null)) {
            body = this.parseFunctionBody(false,ParserErrorCode.MISSING_FUNCTION_BODY,false);
        }else {
            body = astFactory.emptyFunctionBody(this._expect(TokenType.SEMICOLON));
        }
        return astFactory.functionDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,externalKeyword,returnType,keywordToken,name,astFactory.functionExpression(typeParameters,parameters,body));
    }
    parseFunctionDeclarationStatement() : any {
        let modifiers : Modifiers = this.parseModifiers();
        this._validateModifiersForFunctionDeclarationStatement(modifiers);
        return this._parseFunctionDeclarationStatementAfterReturnType(this.parseCommentAndMetadata(),this._parseOptionalReturnType());
    }
    parseFunctionExpression() : any {
        let typeParameters : any = this._parseGenericMethodTypeParameters();
        let parameters : any = this.parseFormalParameterList();
        this._validateFormalParameterList(parameters);
        let body : any = this.parseFunctionBody(false,ParserErrorCode.MISSING_FUNCTION_BODY,true);
        return astFactory.functionExpression(typeParameters,parameters,body);
    }
    parseGenericFunctionTypeAfterReturnType(returnType : any) : any {
        let functionKeyword : any = null;
        if (this._matchesKeyword(Keyword.FUNCTION)) {
            functionKeyword = this.getAndAdvance();
        }else if (this._matchesIdentifier()) {
            this._reportErrorForCurrentToken(ParserErrorCode.NAMED_FUNCTION_TYPE);
        }else {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_FUNCTION_KEYWORD);
        }
        let typeParameters : any = null;
        if (this._matches(TokenType.LT)) {
            typeParameters = this.parseTypeParameterList();
        }
        let parameters : any = this.parseFormalParameterList({
            inFunctionType : true});
        return astFactory.genericFunctionType(returnType,functionKeyword,typeParameters,parameters);
    }
    parseGenericTypeAlias(commentAndMetadata : CommentAndMetadata,keyword : any) : any {
        let name : any = this._parseSimpleIdentifierUnchecked({
            isDeclaration : true});
        let typeParameters : any = null;
        if (this._matches(TokenType.LT)) {
            typeParameters = this.parseTypeParameterList();
        }
        let equals : any = this._expect(TokenType.EQ);
        let functionType : any = this.parseTypeAnnotation(false);
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        if (isNot(functionType, any)) {
            this._reportErrorForToken(ParserErrorCode.INVALID_GENERIC_FUNCTION_TYPE,semicolon);
            return astFactory.genericTypeAlias(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,name,typeParameters,equals,null,semicolon);
        }
        return astFactory.genericTypeAlias(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,name,typeParameters,equals,functionType,semicolon);
    }
    parseGetter(commentAndMetadata : CommentAndMetadata,externalKeyword : any,staticKeyword : any,returnType : any) : any {
        let propertyKeyword : any = this.getAndAdvance();
        let name : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        if (this._matches(TokenType.OPEN_PAREN) && this._tokenMatches(this._peek(),TokenType.CLOSE_PAREN)) {
            this._reportErrorForCurrentToken(ParserErrorCode.GETTER_WITH_PARAMETERS);
            this._advance();
            this._advance();
        }
        let body : any = this.parseFunctionBody(externalKeyword != null || op(Op.EQUALS,staticKeyword,null),ParserErrorCode.STATIC_GETTER_WITHOUT_BODY,false);
        if (externalKeyword != null && isNot(body, any)) {
            this._reportErrorForCurrentToken(ParserErrorCode.EXTERNAL_GETTER_WITH_BODY);
        }
        return astFactory.methodDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,externalKeyword,staticKeyword,returnType,propertyKeyword,null,name,null,null,body);
    }
    parseIdentifierList() : core.DartList<any> {
        let identifiers : core.DartList<any> = new core.DartList.literal<any>(this.parseSimpleIdentifier());
        while (this._optional(TokenType.COMMA)){
            identifiers.add(this.parseSimpleIdentifier());
        }
        return identifiers;
    }
    parseIfNullExpression() : any {
        let expression : any = this.parseLogicalOrExpression();
        while (op(Op.EQUALS,this._currentToken.type,TokenType.QUESTION_QUESTION)){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseLogicalOrExpression());
        }
        return expression;
    }
    parseIfStatement() : any {
        let ifKeyword : any = this.getAndAdvance();
        let leftParenthesis : any = this._expect(TokenType.OPEN_PAREN);
        let condition : any = this.parseExpression2();
        let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
        let thenStatement : any = this.parseStatement2();
        let elseKeyword : any = null;
        let elseStatement : any = null;
        if (this._matchesKeyword(Keyword.ELSE)) {
            elseKeyword = this.getAndAdvance();
            elseStatement = this.parseStatement2();
        }
        return astFactory.ifStatement(ifKeyword,leftParenthesis,condition,rightParenthesis,thenStatement,elseKeyword,elseStatement);
    }
    parseImplementsClause() : any {
        let keyword : any = this.getAndAdvance();
        let interfaces : core.DartList<any> = new core.DartList.literal<any>();
        do{
            let typeName : any = this.parseTypeName(false);
            this._mustNotBeNullable(typeName,ParserErrorCode.NULLABLE_TYPE_IN_IMPLEMENTS);
            interfaces.add(typeName);
        } while (this._optional(TokenType.COMMA));
        return astFactory.implementsClause(keyword,interfaces);
    }
    parseImportDirective(commentAndMetadata : CommentAndMetadata) : any {
        let importKeyword : any = this.getAndAdvance();
        let libraryUri : any = this._parseUri();
        let configurations : core.DartList<any> = this._parseConfigurations();
        let deferredToken : any = null;
        let asToken : any = null;
        let prefix : any = null;
        if (this._matchesKeyword(Keyword.DEFERRED)) {
            deferredToken = this.getAndAdvance();
        }
        if (this._matchesKeyword(Keyword.AS)) {
            asToken = this.getAndAdvance();
            prefix = this.parseSimpleIdentifier({
                isDeclaration : true});
        }else if (deferredToken != null) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_PREFIX_IN_DEFERRED_IMPORT);
        }else if (!this._matches(TokenType.SEMICOLON) && !this._matchesKeyword(Keyword.SHOW) && !this._matchesKeyword(Keyword.HIDE)) {
            let nextToken : any = this._peek();
            if (this._tokenMatchesKeyword(nextToken,Keyword.AS) || this._tokenMatchesKeyword(nextToken,Keyword.SHOW) || this._tokenMatchesKeyword(nextToken,Keyword.HIDE)) {
                this._reportErrorForCurrentToken(ParserErrorCode.UNEXPECTED_TOKEN,new core.DartList.literal(this._currentToken));
                this._advance();
                if (this._matchesKeyword(Keyword.AS)) {
                    asToken = this.getAndAdvance();
                    prefix = this.parseSimpleIdentifier({
                        isDeclaration : true});
                }
            }
        }
        let combinators : core.DartList<any> = this.parseCombinators();
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.importDirective(commentAndMetadata.comment,commentAndMetadata.metadata,importKeyword,libraryUri,configurations,deferredToken,asToken,prefix,combinators,semicolon);
    }
    parseInitializedIdentifierList(commentAndMetadata : CommentAndMetadata,staticKeyword : any,covariantKeyword : any,keyword : any,type : any) : any {
        let fieldList : any = this.parseVariableDeclarationListAfterType(null,keyword,type);
        return astFactory.fieldDeclaration2({
            comment : commentAndMetadata.comment,metadata : commentAndMetadata.metadata,covariantKeyword : covariantKeyword,staticKeyword : staticKeyword,fieldList : fieldList,semicolon : this._expect(TokenType.SEMICOLON)});
    }
    parseInstanceCreationExpression(keyword : any) : any {
        let constructorName : any = this.parseConstructorName();
        let argumentList : any = this._parseArgumentListChecked();
        return astFactory.instanceCreationExpression(keyword,constructorName,argumentList);
    }
    parseLabel(_namedArguments? : {isDeclaration? : boolean}) : any {
        let {isDeclaration} = Object.assign({
            "isDeclaration" : false}, _namedArguments );
        let label : any = this._parseSimpleIdentifierUnchecked({
            isDeclaration : isDeclaration});
        let colon : any = this.getAndAdvance();
        return astFactory.label(label,colon);
    }
    parseLibraryDirective(commentAndMetadata : CommentAndMetadata) : any {
        let keyword : any = this.getAndAdvance();
        let libraryName : any = this._parseLibraryName(ParserErrorCode.MISSING_NAME_IN_LIBRARY_DIRECTIVE,keyword);
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.libraryDirective(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,libraryName,semicolon);
    }
    parseLibraryIdentifier() : any {
        let components : core.DartList<any> = new core.DartList.literal<any>();
        components.add(this.parseSimpleIdentifier());
        while (this._optional(TokenType.PERIOD)){
            components.add(this.parseSimpleIdentifier());
        }
        return astFactory.libraryIdentifier(components);
    }
    parseListLiteral(modifier : any,typeArguments : any) : any {
        if (this._matches(TokenType.INDEX)) {
            this._splitIndex();
            return astFactory.listLiteral(modifier,typeArguments,this.getAndAdvance(),null,this.getAndAdvance());
        }
        let leftBracket : any = this.getAndAdvance();
        if (this._matches(TokenType.CLOSE_SQUARE_BRACKET)) {
            return astFactory.listLiteral(modifier,typeArguments,leftBracket,null,this.getAndAdvance());
        }
        let wasInInitializer : boolean = this._inInitializer;
        this._inInitializer = false;
        try {
            let elements : core.DartList<any> = new core.DartList.literal<any>(this.parseExpression2());
            while (this._optional(TokenType.COMMA)){
                if (this._matches(TokenType.CLOSE_SQUARE_BRACKET)) {
                    return astFactory.listLiteral(modifier,typeArguments,leftBracket,elements,this.getAndAdvance());
                }
                elements.add(this.parseExpression2());
            }
            let rightBracket : any = this._expect(TokenType.CLOSE_SQUARE_BRACKET);
            return astFactory.listLiteral(modifier,typeArguments,leftBracket,elements,rightBracket);
        } finally {
            this._inInitializer = wasInInitializer;
        }
    }
    parseListOrMapLiteral(modifier : any) : any {
        let typeArguments : any = this._parseOptionalTypeArguments();
        if (this._matches(TokenType.OPEN_CURLY_BRACKET)) {
            return this.parseMapLiteral(modifier,typeArguments);
        }else if (this._matches(TokenType.OPEN_SQUARE_BRACKET) || this._matches(TokenType.INDEX)) {
            return this.parseListLiteral(modifier,typeArguments);
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_LIST_OR_MAP_LITERAL);
        return astFactory.listLiteral(modifier,typeArguments,this._createSyntheticToken(TokenType.OPEN_SQUARE_BRACKET),null,this._createSyntheticToken(TokenType.CLOSE_SQUARE_BRACKET));
    }
    parseLogicalAndExpression() : any {
        let expression : any = this.parseEqualityExpression();
        while (op(Op.EQUALS,this._currentToken.type,TokenType.AMPERSAND_AMPERSAND)){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseEqualityExpression());
        }
        return expression;
    }
    parseLogicalOrExpression() : any {
        let expression : any = this.parseLogicalAndExpression();
        while (op(Op.EQUALS,this._currentToken.type,TokenType.BAR_BAR)){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseLogicalAndExpression());
        }
        return expression;
    }
    parseMapLiteral(modifier : any,typeArguments : any) : any {
        let leftBracket : any = this.getAndAdvance();
        if (this._matches(TokenType.CLOSE_CURLY_BRACKET)) {
            return astFactory.mapLiteral(modifier,typeArguments,leftBracket,null,this.getAndAdvance());
        }
        let wasInInitializer : boolean = this._inInitializer;
        this._inInitializer = false;
        try {
            let entries : core.DartList<any> = new core.DartList.literal<any>(this.parseMapLiteralEntry());
            while (this._optional(TokenType.COMMA)){
                if (this._matches(TokenType.CLOSE_CURLY_BRACKET)) {
                    return astFactory.mapLiteral(modifier,typeArguments,leftBracket,entries,this.getAndAdvance());
                }
                entries.add(this.parseMapLiteralEntry());
            }
            let rightBracket : any = this._expect(TokenType.CLOSE_CURLY_BRACKET);
            return astFactory.mapLiteral(modifier,typeArguments,leftBracket,entries,rightBracket);
        } finally {
            this._inInitializer = wasInInitializer;
        }
    }
    parseMapLiteralEntry() : any {
        let key : any = this.parseExpression2();
        let separator : any = this._expect(TokenType.COLON);
        let value : any = this.parseExpression2();
        return astFactory.mapLiteralEntry(key,separator,value);
    }
    parseModifiers() : Modifiers {
        let modifiers : Modifiers = new Modifiers();
        let progress : boolean = true;
        while (progress){
            let nextType : any = this._peek().type;
            if (op(Op.EQUALS,nextType,TokenType.PERIOD) || op(Op.EQUALS,nextType,TokenType.LT) || op(Op.EQUALS,nextType,TokenType.OPEN_PAREN)) {
                return modifiers;
            }
            let keyword : any = this._currentToken.keyword;
            if (op(Op.EQUALS,keyword,Keyword.ABSTRACT)) {
                if (modifiers.abstractKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.abstractKeyword = this.getAndAdvance();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.CONST)) {
                if (modifiers.constKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.constKeyword = this.getAndAdvance();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.COVARIANT)) {
                if (modifiers.covariantKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.covariantKeyword = this.getAndAdvance();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.EXTERNAL)) {
                if (modifiers.externalKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.externalKeyword = this.getAndAdvance();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.FACTORY)) {
                if (modifiers.factoryKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.factoryKeyword = this.getAndAdvance();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.FINAL)) {
                if (modifiers.finalKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.finalKeyword = this.getAndAdvance();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.STATIC)) {
                if (modifiers.staticKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.staticKeyword = this.getAndAdvance();
                }
            }else if (op(Op.EQUALS,keyword,Keyword.VAR)) {
                if (modifiers.varKeyword != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.DUPLICATED_MODIFIER,new core.DartList.literal(this._currentToken.lexeme));
                    this._advance();
                }else {
                    modifiers.varKeyword = this.getAndAdvance();
                }
            }else {
                progress = false;
            }
        }
        return modifiers;
    }
    parseMultiplicativeExpression() : any {
        let expression : any;
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && this._currentToken.next.type.isMultiplicativeOperator) {
            expression = astFactory.superExpression(this.getAndAdvance());
        }else {
            expression = this.parseUnaryExpression();
        }
        while (this._currentToken.type.isMultiplicativeOperator){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseUnaryExpression());
        }
        return expression;
    }
    parseNewExpression() : any {
        return this.parseInstanceCreationExpression(this.getAndAdvance());
    }
    parseNonLabeledStatement() : any {
        let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET)) {
            if (this._tokenMatches(this._peek(),TokenType.STRING)) {
                let afterString : any = this.skipStringLiteral(this._currentToken.next);
                if (afterString != null && op(Op.EQUALS,afterString.type,TokenType.COLON)) {
                    return astFactory.expressionStatement(this.parseExpression2(),this._expect(TokenType.SEMICOLON));
                }
            }
            return this.parseBlock();
        }else if (type.isKeyword && !this._currentToken.keyword.isBuiltInOrPseudo) {
            let keyword : any = this._currentToken.keyword;
            if (op(Op.EQUALS,keyword,Keyword.ASSERT)) {
                return this.parseAssertStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.BREAK)) {
                return this.parseBreakStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.CONTINUE)) {
                return this.parseContinueStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.DO)) {
                return this.parseDoStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.FOR)) {
                return this.parseForStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.IF)) {
                return this.parseIfStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.RETHROW)) {
                return astFactory.expressionStatement(this.parseRethrowExpression(),this._expect(TokenType.SEMICOLON));
            }else if (op(Op.EQUALS,keyword,Keyword.RETURN)) {
                return this.parseReturnStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.SWITCH)) {
                return this.parseSwitchStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.THROW)) {
                return astFactory.expressionStatement(this.parseThrowExpression(),this._expect(TokenType.SEMICOLON));
            }else if (op(Op.EQUALS,keyword,Keyword.TRY)) {
                return this.parseTryStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.WHILE)) {
                return this.parseWhileStatement();
            }else if (op(Op.EQUALS,keyword,Keyword.VAR) || op(Op.EQUALS,keyword,Keyword.FINAL)) {
                return this.parseVariableDeclarationStatementAfterMetadata(commentAndMetadata);
            }else if (op(Op.EQUALS,keyword,Keyword.VOID)) {
                let returnType : any;
                if (this._atGenericFunctionTypeAfterReturnType(this._peek())) {
                    returnType = this.parseTypeAnnotation(false);
                }else {
                    returnType = astFactory.typeName(astFactory.simpleIdentifier(this.getAndAdvance()),null);
                }
                let next : any = this._currentToken.next;
                if (this._matchesIdentifier() && next.matchesAny(new core.DartList.literal<any>(TokenType.OPEN_PAREN,TokenType.OPEN_CURLY_BRACKET,TokenType.FUNCTION,TokenType.LT))) {
                    return this._parseFunctionDeclarationStatementAfterReturnType(commentAndMetadata,returnType);
                }else if (this._matchesIdentifier() && next.matchesAny(new core.DartList.literal<any>(TokenType.EQ,TokenType.COMMA,TokenType.SEMICOLON))) {
                    if (isNot(returnType, any)) {
                        this._reportErrorForNode(ParserErrorCode.VOID_VARIABLE,returnType);
                    }
                    return this._parseVariableDeclarationStatementAfterType(commentAndMetadata,null,returnType);
                }else {
                    if (this._matches(TokenType.CLOSE_CURLY_BRACKET)) {
                        return this._parseVariableDeclarationStatementAfterType(commentAndMetadata,null,returnType);
                    }
                    this._reportErrorForCurrentToken(ParserErrorCode.MISSING_STATEMENT);
                    return astFactory.emptyStatement(this._createSyntheticToken(TokenType.SEMICOLON));
                }
            }else if (op(Op.EQUALS,keyword,Keyword.CONST)) {
                let next : any = this._currentToken.next;
                if (next.matchesAny(new core.DartList.literal<any>(TokenType.LT,TokenType.OPEN_CURLY_BRACKET,TokenType.OPEN_SQUARE_BRACKET,TokenType.INDEX))) {
                    return astFactory.expressionStatement(this.parseExpression2(),this._expect(TokenType.SEMICOLON));
                }else if (this._tokenMatches(next,TokenType.IDENTIFIER)) {
                    let afterType : any = this.skipTypeName(next);
                    if (afterType != null) {
                        if (this._tokenMatches(afterType,TokenType.OPEN_PAREN) || (this._tokenMatches(afterType,TokenType.PERIOD) && this._tokenMatches(afterType.next,TokenType.IDENTIFIER) && this._tokenMatches(afterType.next.next,TokenType.OPEN_PAREN))) {
                            return astFactory.expressionStatement(this.parseExpression2(),this._expect(TokenType.SEMICOLON));
                        }
                    }
                }
                return this.parseVariableDeclarationStatementAfterMetadata(commentAndMetadata);
            }else if (op(Op.EQUALS,keyword,Keyword.NEW) || op(Op.EQUALS,keyword,Keyword.TRUE) || op(Op.EQUALS,keyword,Keyword.FALSE) || op(Op.EQUALS,keyword,Keyword.NULL) || op(Op.EQUALS,keyword,Keyword.SUPER) || op(Op.EQUALS,keyword,Keyword.THIS)) {
                return astFactory.expressionStatement(this.parseExpression2(),this._expect(TokenType.SEMICOLON));
            }else {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_STATEMENT);
                return astFactory.emptyStatement(this._createSyntheticToken(TokenType.SEMICOLON));
            }
        }else if (this._atGenericFunctionTypeAfterReturnType(this._currentToken)) {
            let returnType : any = this.parseTypeAnnotation(false);
            let next : any = this._currentToken.next;
            if (this._matchesIdentifier() && next.matchesAny(new core.DartList.literal<any>(TokenType.OPEN_PAREN,TokenType.OPEN_CURLY_BRACKET,TokenType.FUNCTION,TokenType.LT))) {
                return this._parseFunctionDeclarationStatementAfterReturnType(commentAndMetadata,returnType);
            }else if (this._matchesIdentifier() && next.matchesAny(new core.DartList.literal<any>(TokenType.EQ,TokenType.COMMA,TokenType.SEMICOLON))) {
                if (isNot(returnType, any)) {
                    this._reportErrorForNode(ParserErrorCode.VOID_VARIABLE,returnType);
                }
                return this._parseVariableDeclarationStatementAfterType(commentAndMetadata,null,returnType);
            }else {
                if (this._matches(TokenType.CLOSE_CURLY_BRACKET)) {
                    return this._parseVariableDeclarationStatementAfterType(commentAndMetadata,null,returnType);
                }
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_STATEMENT);
                return astFactory.emptyStatement(this._createSyntheticToken(TokenType.SEMICOLON));
            }
        }else if (this._inGenerator && this._matchesKeyword(Keyword.YIELD)) {
            return this.parseYieldStatement();
        }else if (this._inAsync && this._matchesKeyword(Keyword.AWAIT)) {
            if (this._tokenMatchesKeyword(this._peek(),Keyword.FOR)) {
                return this.parseForStatement();
            }
            return astFactory.expressionStatement(this.parseExpression2(),this._expect(TokenType.SEMICOLON));
        }else if (this._matchesKeyword(Keyword.AWAIT) && this._tokenMatchesKeyword(this._peek(),Keyword.FOR)) {
            let awaitToken : any = this._currentToken;
            let statement : any = this.parseForStatement();
            if (isNot(statement, any)) {
                this._reportErrorForToken(CompileTimeErrorCode.ASYNC_FOR_IN_WRONG_CONTEXT,awaitToken);
            }
            return statement;
        }else if (op(Op.EQUALS,type,TokenType.SEMICOLON)) {
            return this.parseEmptyStatement();
        }else if (this.isInitializedVariableDeclaration()) {
            return this.parseVariableDeclarationStatementAfterMetadata(commentAndMetadata);
        }else if (this.isFunctionDeclaration()) {
            return this.parseFunctionDeclarationStatement();
        }else if (op(Op.EQUALS,type,TokenType.CLOSE_CURLY_BRACKET)) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_STATEMENT);
            return astFactory.emptyStatement(this._createSyntheticToken(TokenType.SEMICOLON));
        }else {
            return astFactory.expressionStatement(this.parseExpression2(),this._expect(TokenType.SEMICOLON));
        }
    }
    parseNormalFormalParameter(_namedArguments? : {inFunctionType? : boolean}) : any {
        let {inFunctionType} = Object.assign({
            "inFunctionType" : false}, _namedArguments );
        let covariantKeyword : any;
        let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
        if (this._matchesKeyword(Keyword.COVARIANT)) {
            let next : any = this._peek();
            if (this._tokenMatchesKeyword(next,Keyword.FINAL) || this._tokenMatchesKeyword(next,Keyword.CONST) || this._tokenMatchesKeyword(next,Keyword.VAR) || this._tokenMatchesKeyword(next,Keyword.THIS) || this._tokenMatchesIdentifier(next)) {
                covariantKeyword = this.getAndAdvance();
            }
        }
        let holder : FinalConstVarOrType = this.parseFinalConstVarOrType(!inFunctionType,{
            inFunctionType : inFunctionType});
        let thisKeyword : any = null;
        let period : any = null;
        if (this._matchesKeyword(Keyword.THIS)) {
            thisKeyword = this.getAndAdvance();
            period = this._expect(TokenType.PERIOD);
        }
        if (!this._matchesIdentifier() && inFunctionType) {
            return astFactory.simpleFormalParameter2({
                comment : commentAndMetadata.comment,metadata : commentAndMetadata.metadata,covariantKeyword : covariantKeyword,keyword : holder.keyword,type : holder.type,identifier : null});
        }
        let identifier : any = this.parseSimpleIdentifier();
        let typeParameters : any = this._parseGenericMethodTypeParameters();
        if (this._matches(TokenType.OPEN_PAREN)) {
            let parameters : any = this._parseFormalParameterListUnchecked();
            if (op(Op.EQUALS,thisKeyword,null)) {
                if (holder.keyword != null) {
                    this._reportErrorForToken(ParserErrorCode.FUNCTION_TYPED_PARAMETER_VAR,holder.keyword);
                }
                let question : any = null;
                if (this.enableNnbd && this._matches(TokenType.QUESTION)) {
                    question = this.getAndAdvance();
                }
                return astFactory.functionTypedFormalParameter2({
                    comment : commentAndMetadata.comment,metadata : commentAndMetadata.metadata,covariantKeyword : covariantKeyword,returnType : holder.type,identifier : astFactory.simpleIdentifier(identifier.token,{
                        isDeclaration : true}),typeParameters : typeParameters,parameters : parameters,question : question});
            }else {
                return astFactory.fieldFormalParameter2({
                    comment : commentAndMetadata.comment,metadata : commentAndMetadata.metadata,covariantKeyword : covariantKeyword,keyword : holder.keyword,type : holder.type,thisKeyword : thisKeyword,period : period,identifier : identifier,typeParameters : typeParameters,parameters : parameters});
            }
        }else if (typeParameters != null) {
        }
        let type : any = holder.type;
        if (type != null) {
            if (is(type, any) && this._tokenMatchesKeyword(type.name.beginToken,Keyword.VOID)) {
                this._reportErrorForToken(ParserErrorCode.VOID_PARAMETER,type.name.beginToken);
            }else if (holder.keyword != null && this._tokenMatchesKeyword(holder.keyword,Keyword.VAR)) {
                this._reportErrorForToken(ParserErrorCode.VAR_AND_TYPE,holder.keyword);
            }
        }
        if (thisKeyword != null) {
            return astFactory.fieldFormalParameter2({
                comment : commentAndMetadata.comment,metadata : commentAndMetadata.metadata,covariantKeyword : covariantKeyword,keyword : holder.keyword,type : type,thisKeyword : thisKeyword,period : period,identifier : identifier});
        }
        return astFactory.simpleFormalParameter2({
            comment : commentAndMetadata.comment,metadata : commentAndMetadata.metadata,covariantKeyword : covariantKeyword,keyword : holder.keyword,type : type,identifier : astFactory.simpleIdentifier(identifier.token,{
                isDeclaration : true})});
    }
    parseOperator(commentAndMetadata : CommentAndMetadata,externalKeyword : any,returnType : any) : any {
        let operatorKeyword : any;
        if (this._matchesKeyword(Keyword.OPERATOR)) {
            operatorKeyword = this.getAndAdvance();
        }else {
            this._reportErrorForToken(ParserErrorCode.MISSING_KEYWORD_OPERATOR,this._currentToken);
            operatorKeyword = this._createSyntheticKeyword(Keyword.OPERATOR);
        }
        return this._parseOperatorAfterKeyword(commentAndMetadata,externalKeyword,returnType,operatorKeyword);
    }
    parsePartOrPartOfDirective(commentAndMetadata : CommentAndMetadata) : any {
        if (this._tokenMatchesKeyword(this._peek(),Keyword.OF)) {
            return this._parsePartOfDirective(commentAndMetadata);
        }
        return this._parsePartDirective(commentAndMetadata);
    }
    parsePostfixExpression() : any {
        let operand : any = this.parseAssignableExpression(true);
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.OPEN_SQUARE_BRACKET) || op(Op.EQUALS,type,TokenType.PERIOD) || op(Op.EQUALS,type,TokenType.QUESTION_PERIOD) || op(Op.EQUALS,type,TokenType.OPEN_PAREN) || op(Op.EQUALS,type,TokenType.LT) || op(Op.EQUALS,type,TokenType.INDEX)) {
            do{
                if (this._isLikelyArgumentList()) {
                    let typeArguments : any = this._parseOptionalTypeArguments();
                    let argumentList : any = this.parseArgumentList();
                    let currentOperand : any = operand;
                    if (is(currentOperand, any)) {
                        operand = astFactory.methodInvocation(currentOperand.target,currentOperand.operator,currentOperand.propertyName,typeArguments,argumentList);
                    }else {
                        operand = astFactory.functionExpressionInvocation(operand,typeArguments,argumentList);
                    }
                }else {
                    operand = this.parseAssignableSelector(operand,true);
                }
                type = this._currentToken.type;
            } while (op(Op.EQUALS,type,TokenType.OPEN_SQUARE_BRACKET) || op(Op.EQUALS,type,TokenType.PERIOD) || op(Op.EQUALS,type,TokenType.QUESTION_PERIOD) || op(Op.EQUALS,type,TokenType.OPEN_PAREN) || op(Op.EQUALS,type,TokenType.INDEX));
            return operand;
        }
        if (!this._currentToken.type.isIncrementOperator) {
            return operand;
        }
        this._ensureAssignable(operand);
        let operator : any = this.getAndAdvance();
        return astFactory.postfixExpression(operand,operator);
    }
    parsePrefixedIdentifier() : any {
        return this._parsePrefixedIdentifierAfterIdentifier(this.parseSimpleIdentifier());
    }
    parsePrimaryExpression() : any {
        if (this._matchesIdentifier()) {
            return this._parsePrefixedIdentifierUnchecked();
        }
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.STRING)) {
            return this.parseStringLiteral();
        }else if (op(Op.EQUALS,type,TokenType.INT)) {
            let token : any = this.getAndAdvance();
            let value : number = null;
            try {
                value = core.DartInt.parse(token.lexeme);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                }
            }
            return astFactory.integerLiteral(token,value);
        }
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.NULL)) {
            return astFactory.nullLiteral(this.getAndAdvance());
        }else if (op(Op.EQUALS,keyword,Keyword.NEW)) {
            return this.parseNewExpression();
        }else if (op(Op.EQUALS,keyword,Keyword.THIS)) {
            return astFactory.thisExpression(this.getAndAdvance());
        }else if (op(Op.EQUALS,keyword,Keyword.SUPER)) {
            return this.parseAssignableSelector(astFactory.superExpression(this.getAndAdvance()),false,{
                allowConditional : false});
        }else if (op(Op.EQUALS,keyword,Keyword.FALSE)) {
            return astFactory.booleanLiteral(this.getAndAdvance(),false);
        }else if (op(Op.EQUALS,keyword,Keyword.TRUE)) {
            return astFactory.booleanLiteral(this.getAndAdvance(),true);
        }
        if (op(Op.EQUALS,type,TokenType.DOUBLE)) {
            let token : any = this.getAndAdvance();
            let value : double = 0.0;
            try {
                value = core.DartDouble.parse(token.lexeme);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                }
            }
            return astFactory.doubleLiteral(token,value);
        }else if (op(Op.EQUALS,type,TokenType.HEXADECIMAL)) {
            let token : any = this.getAndAdvance();
            let value : number = null;
            try {
                value = core.DartInt.parse(token.lexeme.substring(2),{
                    radix : 16});
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                }
            }
            return astFactory.integerLiteral(token,value);
        }else if (op(Op.EQUALS,keyword,Keyword.CONST)) {
            return this.parseConstExpression();
        }else if (op(Op.EQUALS,type,TokenType.OPEN_PAREN)) {
            if (this.isFunctionExpression(this._currentToken)) {
                return this.parseFunctionExpression();
            }
            let leftParenthesis : any = this.getAndAdvance();
            let wasInInitializer : boolean = this._inInitializer;
            this._inInitializer = false;
            try {
                let expression : any = this.parseExpression2();
                let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
                return astFactory.parenthesizedExpression(leftParenthesis,expression,rightParenthesis);
            } finally {
                this._inInitializer = wasInInitializer;
            }
        }else if (op(Op.EQUALS,type,TokenType.LT) || this._injectGenericCommentTypeList()) {
            if (this.isFunctionExpression(this.currentToken)) {
                return this.parseFunctionExpression();
            }
            return this.parseListOrMapLiteral(null);
        }else if (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET)) {
            return this.parseMapLiteral(null,null);
        }else if (op(Op.EQUALS,type,TokenType.OPEN_SQUARE_BRACKET) || op(Op.EQUALS,type,TokenType.INDEX)) {
            return this.parseListLiteral(null,null);
        }else if (op(Op.EQUALS,type,TokenType.QUESTION) && this._tokenMatches(this._peek(),TokenType.IDENTIFIER)) {
            this._reportErrorForCurrentToken(ParserErrorCode.UNEXPECTED_TOKEN,new core.DartList.literal(this._currentToken.lexeme));
            this._advance();
            return this.parsePrimaryExpression();
        }else if (op(Op.EQUALS,keyword,Keyword.VOID)) {
            this._reportErrorForCurrentToken(ParserErrorCode.UNEXPECTED_TOKEN,new core.DartList.literal(this._currentToken.lexeme));
            this._advance();
            return this.parsePrimaryExpression();
        }else if (op(Op.EQUALS,type,TokenType.HASH)) {
            return this.parseSymbolLiteral();
        }else {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
            return this.createSyntheticIdentifier();
        }
    }
    parseRedirectingConstructorInvocation(hasPeriod : boolean) : any {
        let keyword : any = this.getAndAdvance();
        let period : any = null;
        let constructorName : any = null;
        if (hasPeriod) {
            period = this.getAndAdvance();
            if (this._matchesIdentifier()) {
                constructorName = this._parseSimpleIdentifierUnchecked({
                    isDeclaration : false});
            }else {
                this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
                constructorName = this.createSyntheticIdentifier({
                    isDeclaration : false});
                this._advance();
            }
        }
        let argumentList : any = this._parseArgumentListChecked();
        return astFactory.redirectingConstructorInvocation(keyword,period,constructorName,argumentList);
    }
    parseRelationalExpression() : any {
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && this._currentToken.next.type.isRelationalOperator) {
            let expression : any = astFactory.superExpression(this.getAndAdvance());
            let operator : any = this.getAndAdvance();
            return astFactory.binaryExpression(expression,operator,this.parseBitwiseOrExpression());
        }
        let expression : any = this.parseBitwiseOrExpression();
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.AS)) {
            let asOperator : any = this.getAndAdvance();
            return astFactory.asExpression(expression,asOperator,this.parseTypeAnnotation(true));
        }else if (op(Op.EQUALS,keyword,Keyword.IS)) {
            let isOperator : any = this.getAndAdvance();
            let notOperator : any = null;
            if (this._matches(TokenType.BANG)) {
                notOperator = this.getAndAdvance();
            }
            let type : any = this.parseTypeAnnotation(true);
            return astFactory.isExpression(expression,isOperator,notOperator,type);
        }else if (this._currentToken.type.isRelationalOperator) {
            let operator : any = this.getAndAdvance();
            return astFactory.binaryExpression(expression,operator,this.parseBitwiseOrExpression());
        }
        return expression;
    }
    parseRethrowExpression() : any {
        return astFactory.rethrowExpression(this.getAndAdvance());
    }
    parseReturnStatement() : any {
        let returnKeyword : any = this.getAndAdvance();
        if (this._matches(TokenType.SEMICOLON)) {
            return astFactory.returnStatement(returnKeyword,null,this.getAndAdvance());
        }
        let expression : any = this.parseExpression2();
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.returnStatement(returnKeyword,expression,semicolon);
    }
    parseReturnType(inExpression : boolean) : any {
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.VOID)) {
            if (this._atGenericFunctionTypeAfterReturnType(this._peek())) {
                return this.parseTypeAnnotation(false);
            }else {
                return astFactory.typeName(astFactory.simpleIdentifier(this.getAndAdvance()),null);
            }
        }else {
            return this.parseTypeAnnotation(inExpression);
        }
    }
    parseSetter(commentAndMetadata : CommentAndMetadata,externalKeyword : any,staticKeyword : any,returnType : any) : any {
        let propertyKeyword : any = this.getAndAdvance();
        let name : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        let parameters : any = this.parseFormalParameterList();
        this._validateFormalParameterList(parameters);
        let body : any = this.parseFunctionBody(externalKeyword != null || op(Op.EQUALS,staticKeyword,null),ParserErrorCode.STATIC_SETTER_WITHOUT_BODY,false);
        if (externalKeyword != null && isNot(body, any)) {
            this._reportErrorForCurrentToken(ParserErrorCode.EXTERNAL_SETTER_WITH_BODY);
        }
        return astFactory.methodDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,externalKeyword,staticKeyword,returnType,propertyKeyword,null,name,null,parameters,body);
    }
    parseShiftExpression() : any {
        let expression : any;
        if (op(Op.EQUALS,this._currentToken.keyword,Keyword.SUPER) && this._currentToken.next.type.isShiftOperator) {
            expression = astFactory.superExpression(this.getAndAdvance());
        }else {
            expression = this.parseAdditiveExpression();
        }
        while (this._currentToken.type.isShiftOperator){
            expression = astFactory.binaryExpression(expression,this.getAndAdvance(),this.parseAdditiveExpression());
        }
        return expression;
    }
    parseSimpleIdentifier(_namedArguments? : {allowKeyword? : boolean,isDeclaration? : boolean}) : any {
        let {allowKeyword,isDeclaration} = Object.assign({
            "allowKeyword" : false,
            "isDeclaration" : false}, _namedArguments );
        if (this._matchesIdentifier() || (allowKeyword && this._tokenMatchesIdentifierOrKeyword(this._currentToken))) {
            return this._parseSimpleIdentifierUnchecked({
                isDeclaration : isDeclaration});
        }
        this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
        return this.createSyntheticIdentifier({
            isDeclaration : isDeclaration});
    }
    parseStatement(token : any) : any {
        this._currentToken = token;
        return this.parseStatement2();
    }
    parseStatement2() : any {
        if (this._treeDepth > Parser._MAX_TREE_DEPTH) {
            throw new _TooDeepTreeError();
        }
        this._treeDepth++;
        try {
            let labels : core.DartList<any> = null;
            while (this._matchesIdentifier() && op(Op.EQUALS,this._currentToken.next.type,TokenType.COLON)){
                let label : any = this.parseLabel({
                    isDeclaration : true});
                if (labels == null) {
                    labels = new core.DartList.literal<any>(label);
                }else {
                    labels.add(label);
                }
            }
            let statement : any = this.parseNonLabeledStatement();
            if (labels == null) {
                return statement;
            }
            return astFactory.labeledStatement(labels,statement);
        } finally {
            this._treeDepth--;
        }
    }
    parseStatements(token : any) : core.DartList<any> {
        this._currentToken = token;
        return this._parseStatementList();
    }
    parseStringLiteral() : any {
        if (this._matches(TokenType.STRING)) {
            return this._parseStringLiteralUnchecked();
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_STRING_LITERAL);
        return this.createSyntheticStringLiteral();
    }
    parseSuperConstructorInvocation() : any {
        let keyword : any = this.getAndAdvance();
        let period : any = null;
        let constructorName : any = null;
        if (this._matches(TokenType.PERIOD)) {
            period = this.getAndAdvance();
            constructorName = this.parseSimpleIdentifier();
        }
        let argumentList : any = this._parseArgumentListChecked();
        return astFactory.superConstructorInvocation(keyword,period,constructorName,argumentList);
    }
    parseSwitchStatement() : any {
        let wasInSwitch : boolean = this._inSwitch;
        this._inSwitch = true;
        try {
            let definedLabels : core.DartHashSet<string> = new core.DartHashSet<string>();
            let keyword : any = this._expectKeyword(Keyword.SWITCH);
            let leftParenthesis : any = this._expect(TokenType.OPEN_PAREN);
            let expression : any = this.parseExpression2();
            let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
            let leftBracket : any = this._expect(TokenType.OPEN_CURLY_BRACKET);
            let defaultKeyword : any = null;
            let members : core.DartList<any> = new core.DartList.literal<any>();
            let type : any = this._currentToken.type;
            while (type != TokenType.EOF && type != TokenType.CLOSE_CURLY_BRACKET){
                let labels : core.DartList<any> = new core.DartList.literal<any>();
                while (this._matchesIdentifier() && this._tokenMatches(this._peek(),TokenType.COLON)){
                    let identifier : any = this._parseSimpleIdentifierUnchecked({
                        isDeclaration : true});
                    let label : string = identifier.token.lexeme;
                    if (definedLabels.contains(label)) {
                        this._reportErrorForToken(ParserErrorCode.DUPLICATE_LABEL_IN_SWITCH_STATEMENT,identifier.token,new core.DartList.literal(label));
                    }else {
                        definedLabels.add(label);
                    }
                    let colon : any = this.getAndAdvance();
                    labels.add(astFactory.label(identifier,colon));
                }
                let keyword : any = this._currentToken.keyword;
                if (op(Op.EQUALS,keyword,Keyword.CASE)) {
                    let caseKeyword : any = this.getAndAdvance();
                    let caseExpression : any = this.parseExpression2();
                    let colon : any = this._expect(TokenType.COLON);
                    members.add(astFactory.switchCase(labels,caseKeyword,caseExpression,colon,this._parseStatementList()));
                    if (defaultKeyword != null) {
                        this._reportErrorForToken(ParserErrorCode.SWITCH_HAS_CASE_AFTER_DEFAULT_CASE,caseKeyword);
                    }
                }else if (op(Op.EQUALS,keyword,Keyword.DEFAULT)) {
                    if (defaultKeyword != null) {
                        this._reportErrorForToken(ParserErrorCode.SWITCH_HAS_MULTIPLE_DEFAULT_CASES,this._peek());
                    }
                    defaultKeyword = this.getAndAdvance();
                    let colon : any = this._expect(TokenType.COLON);
                    members.add(astFactory.switchDefault(labels,defaultKeyword,colon,this._parseStatementList()));
                }else {
                    this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_CASE_OR_DEFAULT);
                    var atEndOrNextMember : () => boolean = () : boolean =>  {
                        let type : any = this._currentToken.type;
                        if (op(Op.EQUALS,type,TokenType.EOF) || op(Op.EQUALS,type,TokenType.CLOSE_CURLY_BRACKET)) {
                            return true;
                        }
                        let keyword : any = this._currentToken.keyword;
                        return op(Op.EQUALS,keyword,Keyword.CASE) || op(Op.EQUALS,keyword,Keyword.DEFAULT);
                    };
                    while (!atEndOrNextMember()){
                        this._advance();
                    }
                }
                type = this._currentToken.type;
            }
            let rightBracket : any = this._expect(TokenType.CLOSE_CURLY_BRACKET);
            return astFactory.switchStatement(keyword,leftParenthesis,expression,rightParenthesis,leftBracket,members,rightBracket);
        } finally {
            this._inSwitch = wasInSwitch;
        }
    }
    parseSymbolLiteral() : any {
        let poundSign : any = this.getAndAdvance();
        let components : core.DartList<any> = new core.DartList.literal<any>();
        if (this._matchesIdentifier()) {
            components.add(this.getAndAdvance());
            while (this._optional(TokenType.PERIOD)){
                if (this._matchesIdentifier()) {
                    components.add(this.getAndAdvance());
                }else {
                    this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
                    components.add(this._createSyntheticToken(TokenType.IDENTIFIER));
                    break;
                }
            }
        }else if (this._currentToken.isOperator) {
            components.add(this.getAndAdvance());
        }else if (this._matchesKeyword(Keyword.VOID)) {
            components.add(this.getAndAdvance());
        }else {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
            components.add(this._createSyntheticToken(TokenType.IDENTIFIER));
        }
        return astFactory.symbolLiteral(poundSign,components);
    }
    parseThrowExpression() : any {
        let keyword : any = this.getAndAdvance();
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.SEMICOLON) || op(Op.EQUALS,type,TokenType.CLOSE_PAREN)) {
            this._reportErrorForToken(ParserErrorCode.MISSING_EXPRESSION_IN_THROW,this._currentToken);
            return astFactory.throwExpression(keyword,this.createSyntheticIdentifier());
        }
        let expression : any = this.parseExpression2();
        return astFactory.throwExpression(keyword,expression);
    }
    parseThrowExpressionWithoutCascade() : any {
        let keyword : any = this.getAndAdvance();
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.SEMICOLON) || op(Op.EQUALS,type,TokenType.CLOSE_PAREN)) {
            this._reportErrorForToken(ParserErrorCode.MISSING_EXPRESSION_IN_THROW,this._currentToken);
            return astFactory.throwExpression(keyword,this.createSyntheticIdentifier());
        }
        let expression : any = this.parseExpressionWithoutCascade();
        return astFactory.throwExpression(keyword,expression);
    }
    parseTryStatement() : any {
        let tryKeyword : any = this.getAndAdvance();
        let body : any = this._parseBlockChecked();
        let catchClauses : core.DartList<any> = new core.DartList.literal<any>();
        let finallyClause : any = null;
        while (this._matchesKeyword(Keyword.ON) || this._matchesKeyword(Keyword.CATCH)){
            let onKeyword : any = null;
            let exceptionType : any = null;
            if (this._matchesKeyword(Keyword.ON)) {
                onKeyword = this.getAndAdvance();
                exceptionType = this.parseTypeAnnotation(false);
            }
            let catchKeyword : any = null;
            let leftParenthesis : any = null;
            let exceptionParameter : any = null;
            let comma : any = null;
            let stackTraceParameter : any = null;
            let rightParenthesis : any = null;
            if (this._matchesKeyword(Keyword.CATCH)) {
                catchKeyword = this.getAndAdvance();
                leftParenthesis = this._expect(TokenType.OPEN_PAREN);
                exceptionParameter = this.parseSimpleIdentifier({
                    isDeclaration : true});
                if (this._matches(TokenType.COMMA)) {
                    comma = this.getAndAdvance();
                    stackTraceParameter = this.parseSimpleIdentifier({
                        isDeclaration : true});
                }
                rightParenthesis = this._expect(TokenType.CLOSE_PAREN);
            }
            let catchBody : any = this._parseBlockChecked();
            catchClauses.add(astFactory.catchClause(onKeyword,exceptionType,catchKeyword,leftParenthesis,exceptionParameter,comma,stackTraceParameter,rightParenthesis,catchBody));
        }
        let finallyKeyword : any = null;
        if (this._matchesKeyword(Keyword.FINALLY)) {
            finallyKeyword = this.getAndAdvance();
            finallyClause = this._parseBlockChecked();
        }else if (catchClauses.isEmpty) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_CATCH_OR_FINALLY);
        }
        return astFactory.tryStatement(tryKeyword,body,catchClauses,finallyKeyword,finallyClause);
    }
    parseTypeAlias(commentAndMetadata : CommentAndMetadata) : any {
        let keyword : any = this.getAndAdvance();
        if (this._matchesIdentifier()) {
            let next : any = this._peek();
            if (this._tokenMatches(next,TokenType.LT)) {
                next = this._skipTypeParameterList(next);
                if (next != null && this._tokenMatches(next,TokenType.EQ)) {
                    let typeAlias : any = this.parseGenericTypeAlias(commentAndMetadata,keyword);
                    return typeAlias;
                }
            }else if (this._tokenMatches(next,TokenType.EQ)) {
                let typeAlias : any = this.parseGenericTypeAlias(commentAndMetadata,keyword);
                return typeAlias;
            }
        }
        return this._parseFunctionTypeAlias(commentAndMetadata,keyword);
    }
    parseTypeAnnotation(inExpression : boolean) : any {
        let type : any = null;
        if (this._atGenericFunctionTypeAfterReturnType(this._currentToken)) {
            type = this.parseGenericFunctionTypeAfterReturnType(null);
        }else if (op(Op.EQUALS,this._currentToken.keyword,Keyword.VOID) && this._atGenericFunctionTypeAfterReturnType(this._currentToken.next)) {
            type = astFactory.typeName(astFactory.simpleIdentifier(this.getAndAdvance()),null);
        }else {
            type = this.parseTypeName(inExpression);
        }
        while (this._atGenericFunctionTypeAfterReturnType(this._currentToken)){
            type = this.parseGenericFunctionTypeAfterReturnType(type);
        }
        return type;
    }
    parseTypeArgumentList() : any {
        let leftBracket : any = this.getAndAdvance();
        let arguments : core.DartList<any> = new core.DartList.literal<any>(this.parseTypeAnnotation(false));
        while (this._optional(TokenType.COMMA)){
            arguments.add(this.parseTypeAnnotation(false));
        }
        let rightBracket : any = this._expectGt();
        return astFactory.typeArgumentList(leftBracket,arguments,rightBracket);
    }
    parseTypeName(inExpression : boolean) : any {
        let realType : any = this._parseTypeName(inExpression);
        let typeFromComment : any = this._parseOptionalTypeNameComment();
        return (typeFromComment || realType);
    }
    parseTypeParameter() : any {
        let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
        let name : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        if (this._matches(TokenType.QUESTION)) {
            this._reportErrorForCurrentToken(ParserErrorCode.NULLABLE_TYPE_PARAMETER);
            this._advance();
        }
        if (this._matchesKeyword(Keyword.EXTENDS)) {
            let keyword : any = this.getAndAdvance();
            let bound : any = this.parseTypeAnnotation(false);
            return astFactory.typeParameter(commentAndMetadata.comment,commentAndMetadata.metadata,name,keyword,bound);
        }
        return astFactory.typeParameter(commentAndMetadata.comment,commentAndMetadata.metadata,name,null,null);
    }
    parseTypeParameterList() : any {
        let leftBracket : any = this.getAndAdvance();
        let typeParameters : core.DartList<any> = new core.DartList.literal<any>(this.parseTypeParameter());
        while (this._optional(TokenType.COMMA)){
            typeParameters.add(this.parseTypeParameter());
        }
        let rightBracket : any = this._expectGt();
        return astFactory.typeParameterList(leftBracket,typeParameters,rightBracket);
    }
    parseUnaryExpression() : any {
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.MINUS) || op(Op.EQUALS,type,TokenType.BANG) || op(Op.EQUALS,type,TokenType.TILDE)) {
            let operator : any = this.getAndAdvance();
            if (this._matchesKeyword(Keyword.SUPER)) {
                let nextType : any = this._peek().type;
                if (op(Op.EQUALS,nextType,TokenType.OPEN_SQUARE_BRACKET) || op(Op.EQUALS,nextType,TokenType.PERIOD)) {
                    return astFactory.prefixExpression(operator,this.parseUnaryExpression());
                }
                return astFactory.prefixExpression(operator,astFactory.superExpression(this.getAndAdvance()));
            }
            return astFactory.prefixExpression(operator,this.parseUnaryExpression());
        }else if (this._currentToken.type.isIncrementOperator) {
            let operator : any = this.getAndAdvance();
            if (this._matchesKeyword(Keyword.SUPER)) {
                let nextType : any = this._peek().type;
                if (op(Op.EQUALS,nextType,TokenType.OPEN_SQUARE_BRACKET) || op(Op.EQUALS,nextType,TokenType.PERIOD)) {
                    return astFactory.prefixExpression(operator,this.parseUnaryExpression());
                }
                if (op(Op.EQUALS,type,TokenType.MINUS_MINUS)) {
                    let firstOperator : any = this._createToken(operator,TokenType.MINUS);
                    let secondOperator : any = new bare.createInstance(any,null,TokenType.MINUS,op(Op.PLUS,operator.offset,1));
                    secondOperator.setNext(this._currentToken);
                    firstOperator.setNext(secondOperator);
                    operator.previous.setNext(firstOperator);
                    return astFactory.prefixExpression(firstOperator,astFactory.prefixExpression(secondOperator,astFactory.superExpression(this.getAndAdvance())));
                }
                this._reportErrorForCurrentToken(ParserErrorCode.INVALID_OPERATOR_FOR_SUPER,new core.DartList.literal(operator.lexeme));
                return astFactory.prefixExpression(operator,astFactory.superExpression(this.getAndAdvance()));
            }
            return astFactory.prefixExpression(operator,this._parseAssignableExpressionNotStartingWithSuper(false));
        }else if (op(Op.EQUALS,type,TokenType.PLUS)) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_IDENTIFIER);
            return this.createSyntheticIdentifier();
        }else if (this._inAsync && this._matchesKeyword(Keyword.AWAIT)) {
            return this.parseAwaitExpression();
        }
        return this.parsePostfixExpression();
    }
    parseVariableDeclaration() : any {
        let name : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        let equals : any = null;
        let initializer : any = null;
        if (this._matches(TokenType.EQ)) {
            equals = this.getAndAdvance();
            initializer = this.parseExpression2();
        }
        return astFactory.variableDeclaration(name,equals,initializer);
    }
    parseVariableDeclarationListAfterMetadata(commentAndMetadata : CommentAndMetadata) : any {
        let holder : FinalConstVarOrType = this.parseFinalConstVarOrType(false);
        return this.parseVariableDeclarationListAfterType(commentAndMetadata,holder.keyword,holder.type);
    }
    parseVariableDeclarationListAfterType(commentAndMetadata : CommentAndMetadata,keyword : any,type : any) : any {
        if (type != null && keyword != null && this._tokenMatchesKeyword(keyword,Keyword.VAR)) {
            this._reportErrorForToken(ParserErrorCode.VAR_AND_TYPE,keyword);
        }
        let variables : core.DartList<any> = new core.DartList.literal<any>(this.parseVariableDeclaration());
        while (this._optional(TokenType.COMMA)){
            variables.add(this.parseVariableDeclaration());
        }
        return astFactory.variableDeclarationList(((t)=>(!!t)?t.comment:null)(commentAndMetadata),((t)=>(!!t)?t.metadata:null)(commentAndMetadata),keyword,type,variables);
    }
    parseVariableDeclarationStatementAfterMetadata(commentAndMetadata : CommentAndMetadata) : any {
        let variableList : any = this.parseVariableDeclarationListAfterMetadata(commentAndMetadata);
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.variableDeclarationStatement(variableList,semicolon);
    }
    parseWhileStatement() : any {
        let wasInLoop : boolean = this._inLoop;
        this._inLoop = true;
        try {
            let keyword : any = this.getAndAdvance();
            let leftParenthesis : any = this._expect(TokenType.OPEN_PAREN);
            let condition : any = this.parseExpression2();
            let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
            let body : any = this.parseStatement2();
            return astFactory.whileStatement(keyword,leftParenthesis,condition,rightParenthesis,body);
        } finally {
            this._inLoop = wasInLoop;
        }
    }
    parseWithClause() : any {
        let withKeyword : any = this.getAndAdvance();
        let types : core.DartList<any> = new core.DartList.literal<any>();
        do{
            let typeName : any = this.parseTypeName(false);
            this._mustNotBeNullable(typeName,ParserErrorCode.NULLABLE_TYPE_IN_WITH);
            types.add(typeName);
        } while (this._optional(TokenType.COMMA));
        return astFactory.withClause(withKeyword,types);
    }
    parseYieldStatement() : any {
        let yieldToken : any = this.getAndAdvance();
        let star : any = null;
        if (this._matches(TokenType.STAR)) {
            star = this.getAndAdvance();
        }
        let expression : any = this.parseExpression2();
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.yieldStatement(yieldToken,star,expression,semicolon);
    }
    skipFormalParameterList(startToken : any) : any {
        if (!this._tokenMatches(startToken,TokenType.OPEN_PAREN)) {
            return null;
        }
        return ((t)=>(!!t)?t.next:null)((startToken as any).endToken);
    }
    skipGenericFunctionTypeAfterReturnType(startToken : any) : any {
        let next : any = startToken.next;
        if (this._tokenMatches(next,TokenType.LT)) {
            next = this.skipTypeParameterList(next);
            if (op(Op.EQUALS,next,null)) {
                return null;
            }
        }
        return this.skipFormalParameterList(next);
    }
    skipPrefixedIdentifier(startToken : any) : any {
        let token : any = this.skipSimpleIdentifier(startToken);
        if (op(Op.EQUALS,token,null)) {
            return null;
        }else if (!this._tokenMatches(token,TokenType.PERIOD)) {
            return token;
        }
        token = token.next;
        let nextToken : any = this.skipSimpleIdentifier(token);
        if (nextToken != null) {
            return nextToken;
        }else if (this._tokenMatches(token,TokenType.CLOSE_PAREN) || this._tokenMatches(token,TokenType.COMMA)) {
            return token;
        }
        return null;
    }
    skipReturnType(startToken : any) : any {
        if (this._tokenMatchesKeyword(startToken,Keyword.VOID)) {
            if (this._atGenericFunctionTypeAfterReturnType(this._peek())) {
                return this.skipTypeAnnotation(startToken);
            }
            return startToken.next;
        }else {
            return this.skipTypeAnnotation(startToken);
        }
    }
    skipSimpleIdentifier(startToken : any) : any {
        if (this._tokenMatches(startToken,TokenType.IDENTIFIER) || this._tokenMatchesPseudoKeyword(startToken)) {
            return startToken.next;
        }
        return null;
    }
    skipStringLiteral(startToken : any) : any {
        let token : any = startToken;
        while (token != null && this._tokenMatches(token,TokenType.STRING)){
            token = token.next;
            let type : any = token.type;
            if (op(Op.EQUALS,type,TokenType.STRING_INTERPOLATION_EXPRESSION) || op(Op.EQUALS,type,TokenType.STRING_INTERPOLATION_IDENTIFIER)) {
                token = this._skipStringInterpolation(token);
            }
        }
        if (core.identical(token,startToken)) {
            return null;
        }
        return token;
    }
    skipTypeAnnotation(startToken : any) : any {
        let next : any = null;
        if (this._atGenericFunctionTypeAfterReturnType(startToken)) {
            next = this.skipGenericFunctionTypeAfterReturnType(startToken);
        }else if (op(Op.EQUALS,startToken.keyword,Keyword.VOID) && this._atGenericFunctionTypeAfterReturnType(startToken.next)) {
            next = startToken.next;
        }else {
            next = this.skipTypeName(startToken);
        }
        while (next != null && this._atGenericFunctionTypeAfterReturnType(next)){
            next = this.skipGenericFunctionTypeAfterReturnType(next);
        }
        return next;
    }
    skipTypeArgumentList(startToken : any) : any {
        let token : any = startToken;
        if (!this._tokenMatches(token,TokenType.LT) && !this._injectGenericCommentTypeList()) {
            return null;
        }
        token = this.skipTypeName(token.next);
        if (op(Op.EQUALS,token,null)) {
            token = startToken.next;
            if (this._tokenMatches(token,TokenType.GT)) {
                return token.next;
            }
            return null;
        }
        while (this._tokenMatches(token,TokenType.COMMA)){
            token = this.skipTypeName(token.next);
            if (op(Op.EQUALS,token,null)) {
                return null;
            }
        }
        if (op(Op.EQUALS,token.type,TokenType.GT)) {
            return token.next;
        }else if (op(Op.EQUALS,token.type,TokenType.GT_GT)) {
            let second : any = new bare.createInstance(any,null,TokenType.GT,op(Op.PLUS,token.offset,1));
            second.setNextWithoutSettingPrevious(token.next);
            return second;
        }
        return null;
    }
    skipTypeName(startToken : any) : any {
        let token : any = this.skipPrefixedIdentifier(startToken);
        if (op(Op.EQUALS,token,null)) {
            return null;
        }
        if (this._tokenMatches(token,TokenType.LT)) {
            token = this.skipTypeArgumentList(token);
        }
        return token;
    }
    skipTypeParameterList(startToken : any) : any {
        if (!this._tokenMatches(startToken,TokenType.LT)) {
            return null;
        }
        let depth : number = 1;
        let previous : any = startToken;
        let next : any = startToken.next;
        while (next != previous){
            if (this._tokenMatches(next,TokenType.LT)) {
                depth++;
            }else if (this._tokenMatches(next,TokenType.GT)) {
                depth--;
                if (depth == 0) {
                    return next.next;
                }
            }
            previous = next;
            next = next.next;
        }
        return null;
    }
    _advance() : void {
        this._currentToken = this._currentToken.next;
    }
    _appendCodePoint(buffer : core.DartStringBuffer,source : string,codePoint : number,startIndex : number,endIndex : number) : void {
        if (codePoint < 0 || codePoint > Character.MAX_CODE_POINT) {
            let escapeSequence : string = new core.DartString(source).substring(startIndex,endIndex + 1);
            this._reportErrorForCurrentToken(ParserErrorCode.INVALID_CODE_POINT,new core.DartList.literal(escapeSequence));
            return;
        }
        if (codePoint < Character.MAX_VALUE) {
            buffer.writeCharCode(codePoint);
        }else {
            buffer.write(Character.toChars(codePoint));
        }
    }
    _atGenericFunctionTypeAfterReturnType(startToken : any) : boolean {
        if (this._tokenMatchesKeyword(startToken,Keyword.FUNCTION)) {
            let next : any = startToken.next;
            if (next != null && (this._tokenMatches(next,TokenType.OPEN_PAREN) || this._tokenMatches(next,TokenType.LT))) {
                return true;
            }
        }
        return false;
    }
    _cloneTokens(token : any) : any {
        if (op(Op.EQUALS,token,null)) {
            return null;
        }
        token = is(token, any) ? token.parent : token;
        let head : any = new bare.createInstance(any,null,TokenType.EOF,-1);
        head.setNext(head);
        let current : any = head;
        while (token.type != TokenType.EOF){
            let clone : any = token.copy();
            current.setNext(clone);
            current = clone;
            token = token.next;
        }
        let tail : any = new bare.createInstance(any,null,TokenType.EOF,0);
        tail.setNext(tail);
        current.setNext(tail);
        return head.next;
    }
    _convertToFunctionDeclaration(method : any) : any {
        return astFactory.functionDeclaration(method.documentationComment,method.metadata,method.externalKeyword,method.returnType,method.propertyKeyword,method.name,astFactory.functionExpression(method.typeParameters,method.parameters,method.body));
    }
    _couldBeStartOfCompilationUnitMember() : boolean {
        let keyword : any = this._currentToken.keyword;
        let next : any = this._currentToken.next;
        let nextType : any = next.type;
        if ((op(Op.EQUALS,keyword,Keyword.IMPORT) || op(Op.EQUALS,keyword,Keyword.EXPORT) || op(Op.EQUALS,keyword,Keyword.LIBRARY) || op(Op.EQUALS,keyword,Keyword.PART)) && nextType != TokenType.PERIOD && nextType != TokenType.LT) {
            return true;
        }else if (op(Op.EQUALS,keyword,Keyword.CLASS)) {
            return true;
        }else if (op(Op.EQUALS,keyword,Keyword.TYPEDEF) && nextType != TokenType.PERIOD && nextType != TokenType.LT) {
            return true;
        }else if (op(Op.EQUALS,keyword,Keyword.VOID) || ((op(Op.EQUALS,keyword,Keyword.GET) || op(Op.EQUALS,keyword,Keyword.SET)) && this._tokenMatchesIdentifier(next)) || (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next))) {
            return true;
        }else if (this._matchesIdentifier()) {
            if (op(Op.EQUALS,nextType,TokenType.OPEN_PAREN)) {
                return true;
            }
            let token : any = this.skipReturnType(this._currentToken);
            if (op(Op.EQUALS,token,null)) {
                return false;
            }
            if (op(Op.EQUALS,keyword,Keyword.GET) || op(Op.EQUALS,keyword,Keyword.SET) || (op(Op.EQUALS,keyword,Keyword.OPERATOR) && this._isOperator(next)) || this._matchesIdentifier()) {
                return true;
            }
        }
        return false;
    }
    _createSyntheticKeyword(keyword : any) : any {
        return this._injectToken(new bare.createInstance(any,null,keyword,this._currentToken.offset));
    }
    _createSyntheticToken(type : any) : any {
        return this._injectToken(new bare.createInstance(any,null,type,"",this._currentToken.offset));
    }
    _createToken(token : any,type : any,_namedArguments? : {isBegin? : boolean}) : any {
        let {isBegin} = Object.assign({
            "isBegin" : false}, _namedArguments );
        let comments : any = token.precedingComments;
        if (op(Op.EQUALS,comments,null)) {
            if (isBegin) {
                return new bare.createInstance(any,null,type,token.offset);
            }
            return new bare.createInstance(any,null,type,token.offset);
        }else if (isBegin) {
            return new bare.createInstance(any,null,type,token.offset,comments);
        }
        return new bare.createInstance(any,null,type,token.offset,comments);
    }
    _ensureAssignable(expression : any) : void {
        if (expression != null && !expression.isAssignable) {
            this._reportErrorForCurrentToken(ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE);
        }
    }
    _expect(type : any) : any {
        if (this._matches(type)) {
            return this.getAndAdvance();
        }
        if (op(Op.EQUALS,type,TokenType.SEMICOLON)) {
            if (this._tokenMatches(this._currentToken.next,TokenType.SEMICOLON)) {
                this._reportErrorForCurrentToken(ParserErrorCode.UNEXPECTED_TOKEN,new core.DartList.literal(this._currentToken.lexeme));
                this._advance();
                return this.getAndAdvance();
            }
            this._reportErrorForToken(ParserErrorCode.EXPECTED_TOKEN,this._currentToken.previous,new core.DartList.literal(type.lexeme));
            return this._createSyntheticToken(TokenType.SEMICOLON);
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(type.lexeme));
        return this._createSyntheticToken(type);
    }
    _expectGt() : any {
        if (this._matchesGt()) {
            return this.getAndAdvance();
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(TokenType.GT.lexeme));
        return this._createSyntheticToken(TokenType.GT);
    }
    _expectKeyword(keyword : any) : any {
        if (this._matchesKeyword(keyword)) {
            return this.getAndAdvance();
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(keyword.lexeme));
        return this._currentToken;
    }
    _findRange(ranges : core.DartList<core.DartList<number>>,index : number) : core.DartList<number> {
        let rangeCount : number = ranges.length;
        for(let i : number = 0; i < rangeCount; i++){
            let range : core.DartList<number> = ranges[i];
            if (range[0] <= index && index <= range[1]) {
                return range;
            }else if (index < range[0]) {
                return null;
            }
        }
        return null;
    }
    _getCodeBlockRanges(comment : string) : core.DartList<core.DartList<number>> {
        let ranges : core.DartList<core.DartList<number>> = new core.DartList.literal<core.DartList<number>>();
        let length : number = new core.DartString(comment).length;
        if (length < 3) {
            return ranges;
        }
        let index : number = 0;
        let firstChar : number = new core.DartString(comment).codeUnitAt(0);
        if (firstChar == 47) {
            let secondChar : number = new core.DartString(comment).codeUnitAt(1);
            let thirdChar : number = new core.DartString(comment).codeUnitAt(2);
            if ((secondChar == 42 && thirdChar == 42) || (secondChar == 47 && thirdChar == 47)) {
                index = 3;
            }
        }
        if (StringUtilities.startsWith4(comment,index,32,32,32,32)) {
            let end : number = index + 4;
            while (end < length && new core.DartString(comment).codeUnitAt(end) != 13 && new core.DartString(comment).codeUnitAt(end) != 10){
                end = end + 1;
            }
            ranges.add(new core.DartList.literal<number>(index,end));
            index = end;
        }
        while (index < length){
            let currentChar : number = new core.DartString(comment).codeUnitAt(index);
            if (currentChar == 13 || currentChar == 10) {
                index = index + 1;
                while (index < length && Character.isWhitespace(new core.DartString(comment).codeUnitAt(index))){
                    index = index + 1;
                }
                if (StringUtilities.startsWith6(comment,index,42,32,32,32,32,32)) {
                    let end : number = index + 6;
                    while (end < length && new core.DartString(comment).codeUnitAt(end) != 13 && new core.DartString(comment).codeUnitAt(end) != 10){
                        end = end + 1;
                    }
                    ranges.add(new core.DartList.literal<number>(index,end));
                    index = end;
                }
            }else if (index + 1 < length && currentChar == 91 && new core.DartString(comment).codeUnitAt(index + 1) == 58) {
                let end : number = StringUtilities.indexOf2(comment,index + 2,58,93);
                if (end < 0) {
                    end = length;
                }
                ranges.add(new core.DartList.literal<number>(index,end));
                index = end + 1;
            }else {
                index = index + 1;
            }
        }
        return ranges;
    }
    _getEndToken(beginToken : any) : any {
        if (is(beginToken, any)) {
            return beginToken.endToken;
        }
        return null;
    }
    _injectGenericComment(type : any,prefixLen : number) : boolean {
        if (this.parseGenericMethodComments) {
            let t : any = this._currentToken.precedingComments;
            for(; t != null; t = t.next){
                if (op(Op.EQUALS,t.type,type)) {
                    let comment : string = t.lexeme.substring(prefixLen,op(Op.MINUS,t.lexeme.length,2));
                    let list : any = this._scanGenericMethodComment(comment,op(Op.PLUS,t.offset,prefixLen));
                    if (list != null) {
                        t.remove();
                        this._injectTokenList(list);
                        return true;
                    }
                }
            }
        }
        return false;
    }
    _injectGenericCommentTypeAssign() : boolean {
        return this._injectGenericComment(TokenType.GENERIC_METHOD_TYPE_ASSIGN,3);
    }
    _injectGenericCommentTypeList() : boolean {
        return this._injectGenericComment(TokenType.GENERIC_METHOD_TYPE_LIST,2);
    }
    _injectToken(token : any) : any {
        let previous : any = this._currentToken.previous;
        token.setNext(this._currentToken);
        previous.setNext(token);
        return token;
    }
    _injectTokenList(firstToken : any) : void {
        let lastToken : any = firstToken;
        while (lastToken.next.type != TokenType.EOF){
            lastToken = lastToken.next;
        }
        let previous : any = this._currentToken.previous;
        lastToken.setNext(this._currentToken);
        previous.setNext(firstToken);
        this._currentToken = firstToken;
    }
    _isConditionalOperator() : boolean {
        var parseOperation : (parser : Parser) => void = (parser : Parser) : void =>  {
            parser.parseExpressionWithoutCascade();
        };
        let token : any = this._skip(this._currentToken.next,parseOperation);
        if (op(Op.EQUALS,token,null) || !this._tokenMatches(token,TokenType.COLON)) {
            return false;
        }
        token = this._skip(token.next,parseOperation);
        return token != null;
    }
    _isHexDigit(character : number) : boolean {
        return (48 <= character && character <= 57) || (65 <= character && character <= 70) || (97 <= character && character <= 102);
    }
    _isLikelyArgumentList() : boolean {
        if (this._matches(TokenType.OPEN_PAREN)) {
            return true;
        }
        let token : any = this.skipTypeArgumentList(this._currentToken);
        return token != null && this._tokenMatches(token,TokenType.OPEN_PAREN);
    }
    _isLinkText(comment : string,rightIndex : number) : boolean {
        let length : number = new core.DartString(comment).length;
        let index : number = rightIndex + 1;
        if (index >= length) {
            return false;
        }
        let nextChar : number = new core.DartString(comment).codeUnitAt(index);
        if (nextChar == 40 || nextChar == 58) {
            return true;
        }
        while (Character.isWhitespace(nextChar)){
            index = index + 1;
            if (index >= length) {
                return false;
            }
            nextChar = new core.DartString(comment).codeUnitAt(index);
        }
        return nextChar == 91;
    }
    _isOperator(startToken : any) : boolean {
        if (!startToken.isOperator) {
            return false;
        }
        if (op(Op.EQUALS,startToken.type,TokenType.EQ)) {
            return false;
        }
        let token : any = startToken.next;
        while (token.isOperator){
            token = token.next;
        }
        return this._tokenMatches(token,TokenType.OPEN_PAREN);
    }
    _isPeekGenericTypeParametersAndOpenParen() : boolean {
        let token : any = this._skipTypeParameterList(this._peek());
        return token != null && this._tokenMatches(token,TokenType.OPEN_PAREN);
    }
    _isTypedIdentifier(startToken : any) : boolean {
        let token : any = this.skipReturnType(startToken);
        if (op(Op.EQUALS,token,null)) {
            return false;
        }else if (this._tokenMatchesIdentifier(token)) {
            return true;
        }else if (this._tokenMatchesKeyword(token,Keyword.THIS) && this._tokenMatches(token.next,TokenType.PERIOD) && this._tokenMatchesIdentifier(token.next.next)) {
            return true;
        }else if (this._tokenMatchesKeyword(startToken,Keyword.VOID)) {
            return true;
        }else if (startToken.next != token && !this._tokenMatches(token,TokenType.OPEN_PAREN)) {
            return true;
        }
        return false;
    }
    _lockErrorListener() : void {
        this._errorListenerLock++;
    }
    _matches(type : any) : boolean {
        return op(Op.EQUALS,this._currentToken.type,type);
    }
    _matchesGt() : boolean {
        let currentType : any = this._currentToken.type;
        if (op(Op.EQUALS,currentType,TokenType.GT)) {
            return true;
        }else if (op(Op.EQUALS,currentType,TokenType.GT_GT)) {
            let first : any = this._createToken(this._currentToken,TokenType.GT);
            let second : any = new bare.createInstance(any,null,TokenType.GT,op(Op.PLUS,this._currentToken.offset,1));
            second.setNext(this._currentToken.next);
            first.setNext(second);
            this._currentToken.previous.setNext(first);
            this._currentToken = first;
            return true;
        }else if (op(Op.EQUALS,currentType,TokenType.GT_EQ)) {
            let first : any = this._createToken(this._currentToken,TokenType.GT);
            let second : any = new bare.createInstance(any,null,TokenType.EQ,op(Op.PLUS,this._currentToken.offset,1));
            second.setNext(this._currentToken.next);
            first.setNext(second);
            this._currentToken.previous.setNext(first);
            this._currentToken = first;
            return true;
        }else if (op(Op.EQUALS,currentType,TokenType.GT_GT_EQ)) {
            let offset : number = this._currentToken.offset;
            let first : any = this._createToken(this._currentToken,TokenType.GT);
            let second : any = new bare.createInstance(any,null,TokenType.GT,offset + 1);
            let third : any = new bare.createInstance(any,null,TokenType.EQ,offset + 2);
            third.setNext(this._currentToken.next);
            second.setNext(third);
            first.setNext(second);
            this._currentToken.previous.setNext(first);
            this._currentToken = first;
            return true;
        }
        return false;
    }
    _matchesIdentifier() : boolean {
        return this._tokenMatchesIdentifier(this._currentToken);
    }
    _matchesKeyword(keyword : any) : boolean {
        return this._tokenMatchesKeyword(this._currentToken,keyword);
    }
    _mustNotBeNullable(typeName : any,errorCode : any) : void {
        if (typeName.question != null) {
            this._reportErrorForToken(errorCode,typeName.question);
        }
    }
    _optional(type : any) : boolean {
        if (op(Op.EQUALS,this._currentToken.type,type)) {
            this._advance();
            return true;
        }
        return false;
    }
    _parseArgumentListChecked() : any {
        if (this._matches(TokenType.OPEN_PAREN)) {
            return this.parseArgumentList();
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(TokenType.OPEN_PAREN.lexeme));
        return astFactory.argumentList(this._createSyntheticToken(TokenType.OPEN_PAREN),null,this._createSyntheticToken(TokenType.CLOSE_PAREN));
    }
    _parseAssertInitializer() : any {
        let keyword : any = this.getAndAdvance();
        let leftParen : any = this._expect(TokenType.OPEN_PAREN);
        let expression : any = this.parseExpression2();
        let comma : any;
        let message : any;
        if (this._matches(TokenType.COMMA)) {
            comma = this.getAndAdvance();
            message = this.parseExpression2();
        }
        let rightParen : any = this._expect(TokenType.CLOSE_PAREN);
        return astFactory.assertInitializer(keyword,leftParen,expression,comma,message,rightParen);
    }
    _parseAssignableExpressionNotStartingWithSuper(primaryAllowed : boolean) : any {
        let expression : any = this.parsePrimaryExpression();
        let isOptional : boolean = primaryAllowed || is(expression, any);
        while (true){
            while (this._isLikelyArgumentList()){
                let typeArguments : any = this._parseOptionalTypeArguments();
                let argumentList : any = this.parseArgumentList();
                let currentExpression : any = expression;
                if (is(currentExpression, any)) {
                    expression = astFactory.methodInvocation(null,null,currentExpression,typeArguments,argumentList);
                }else if (is(currentExpression, any)) {
                    expression = astFactory.methodInvocation(currentExpression.prefix,currentExpression.period,currentExpression.identifier,typeArguments,argumentList);
                }else if (is(currentExpression, any)) {
                    expression = astFactory.methodInvocation(currentExpression.target,currentExpression.operator,currentExpression.propertyName,typeArguments,argumentList);
                }else {
                    expression = astFactory.functionExpressionInvocation(expression,typeArguments,argumentList);
                }
                if (!primaryAllowed) {
                    isOptional = false;
                }
            }
            let selectorExpression : any = this.parseAssignableSelector(expression,isOptional || (is(expression, any)));
            if (core.identical(selectorExpression,expression)) {
                return expression;
            }
            expression = selectorExpression;
            isOptional = true;
        }
    }
    _parseBlockChecked() : any {
        if (this._matches(TokenType.OPEN_CURLY_BRACKET)) {
            return this.parseBlock();
        }
        this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(TokenType.OPEN_CURLY_BRACKET.lexeme));
        return astFactory.block(this._createSyntheticToken(TokenType.OPEN_CURLY_BRACKET),null,this._createSyntheticToken(TokenType.CLOSE_CURLY_BRACKET));
    }
    _parseClassMembers(className : string,closingBracket : any) : core.DartList<any> {
        let members : core.DartList<any> = new core.DartList.literal<any>();
        let memberStart : any = this._currentToken;
        let type : any = this._currentToken.type;
        let keyword : any = this._currentToken.keyword;
        while (type != TokenType.EOF && type != TokenType.CLOSE_CURLY_BRACKET && (closingBracket != null || (keyword != Keyword.CLASS && keyword != Keyword.TYPEDEF))){
            if (op(Op.EQUALS,type,TokenType.SEMICOLON)) {
                this._reportErrorForToken(ParserErrorCode.UNEXPECTED_TOKEN,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
                this._advance();
            }else {
                let member : any = this.parseClassMember(className);
                if (member != null) {
                    members.add(member);
                }
            }
            if (core.identical(this._currentToken,memberStart)) {
                this._reportErrorForToken(ParserErrorCode.UNEXPECTED_TOKEN,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
                this._advance();
            }
            memberStart = this._currentToken;
            type = this._currentToken.type;
            keyword = this._currentToken.keyword;
        }
        return members;
    }
    _parseClassTypeAliasAfterName(commentAndMetadata : CommentAndMetadata,abstractKeyword : any,classKeyword : any,className : any,typeParameters : any) : any {
        let equals : any = this._expect(TokenType.EQ);
        let superclass : any = this.parseTypeName(false);
        let withClause : any = null;
        if (this._matchesKeyword(Keyword.WITH)) {
            withClause = this.parseWithClause();
        }else {
            this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(Keyword.WITH.lexeme));
        }
        let implementsClause : any = null;
        if (this._matchesKeyword(Keyword.IMPLEMENTS)) {
            implementsClause = this.parseImplementsClause();
        }
        let semicolon : any;
        if (this._matches(TokenType.SEMICOLON)) {
            semicolon = this.getAndAdvance();
        }else {
            if (this._matches(TokenType.OPEN_CURLY_BRACKET)) {
                this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(TokenType.SEMICOLON.lexeme));
                let leftBracket : any = this.getAndAdvance();
                this._parseClassMembers(className.name,this._getEndToken(leftBracket));
                this._expect(TokenType.CLOSE_CURLY_BRACKET);
            }else {
                this._reportErrorForToken(ParserErrorCode.EXPECTED_TOKEN,this._currentToken.previous,new core.DartList.literal(TokenType.SEMICOLON.lexeme));
            }
            semicolon = this._createSyntheticToken(TokenType.SEMICOLON);
        }
        return astFactory.classTypeAlias(commentAndMetadata.comment,commentAndMetadata.metadata,classKeyword,className,typeParameters,equals,abstractKeyword,superclass,withClause,implementsClause,semicolon);
    }
    _parseConfigurations() : core.DartList<any> {
        let configurations : core.DartList<any> = null;
        while (this._matchesKeyword(Keyword.IF)){
            configurations = ( configurations ) || ( new core.DartList.literal<any>() );
            configurations.add(this.parseConfiguration());
        }
        return configurations;
    }
    _parseConstructor(commentAndMetadata : CommentAndMetadata,externalKeyword : any,constKeyword : any,factoryKeyword : any,returnType : any,period : any,name : any,parameters : any) : any {
        let bodyAllowed : boolean = op(Op.EQUALS,externalKeyword,null);
        let separator : any = null;
        let initializers : core.DartList<any> = null;
        if (this._matches(TokenType.COLON)) {
            separator = this.getAndAdvance();
            initializers = new core.DartList.literal<any>();
            do{
                let keyword : any = this._currentToken.keyword;
                if (op(Op.EQUALS,keyword,Keyword.THIS)) {
                    let nextType : any = this._peek().type;
                    if (op(Op.EQUALS,nextType,TokenType.OPEN_PAREN)) {
                        bodyAllowed = false;
                        initializers.add(this.parseRedirectingConstructorInvocation(false));
                    }else if (op(Op.EQUALS,nextType,TokenType.PERIOD) && this._tokenMatches(this._peekAt(3),TokenType.OPEN_PAREN)) {
                        bodyAllowed = false;
                        initializers.add(this.parseRedirectingConstructorInvocation(true));
                    }else {
                        initializers.add(this.parseConstructorFieldInitializer(true));
                    }
                }else if (op(Op.EQUALS,keyword,Keyword.SUPER)) {
                    initializers.add(this.parseSuperConstructorInvocation());
                }else if (this._matches(TokenType.OPEN_CURLY_BRACKET) || this._matches(TokenType.FUNCTION)) {
                    this._reportErrorForCurrentToken(ParserErrorCode.MISSING_INITIALIZER);
                }else if (this._enableAssertInitializer && this._matchesKeyword(Keyword.ASSERT)) {
                    initializers.add(this._parseAssertInitializer());
                }else {
                    initializers.add(this.parseConstructorFieldInitializer(false));
                }
            } while (this._optional(TokenType.COMMA));
            if (factoryKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.FACTORY_WITH_INITIALIZERS,factoryKeyword);
            }
        }
        let redirectedConstructor : any = null;
        let body : any;
        if (this._matches(TokenType.EQ)) {
            separator = this.getAndAdvance();
            redirectedConstructor = this.parseConstructorName();
            body = astFactory.emptyFunctionBody(this._expect(TokenType.SEMICOLON));
            if (op(Op.EQUALS,factoryKeyword,null)) {
                this._reportErrorForNode(ParserErrorCode.REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR,redirectedConstructor);
            }
        }else {
            body = this.parseFunctionBody(true,ParserErrorCode.MISSING_FUNCTION_BODY,false);
            if (constKeyword != null && factoryKeyword != null && op(Op.EQUALS,externalKeyword,null) && isNot(body, any)) {
                this._reportErrorForToken(ParserErrorCode.CONST_FACTORY,factoryKeyword);
            }else if (is(body, any)) {
                if (factoryKeyword != null && op(Op.EQUALS,externalKeyword,null) && this._parseFunctionBodies) {
                    this._reportErrorForToken(ParserErrorCode.FACTORY_WITHOUT_BODY,factoryKeyword);
                }
            }else {
                if (constKeyword != null && isNot(body, any)) {
                    this._reportErrorForNode(ParserErrorCode.CONST_CONSTRUCTOR_WITH_BODY,body);
                }else if (externalKeyword != null) {
                    this._reportErrorForNode(ParserErrorCode.EXTERNAL_CONSTRUCTOR_WITH_BODY,body);
                }else if (!bodyAllowed) {
                    this._reportErrorForNode(ParserErrorCode.REDIRECTING_CONSTRUCTOR_WITH_BODY,body);
                }
            }
        }
        return astFactory.constructorDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,externalKeyword,constKeyword,factoryKeyword,returnType,period,name,parameters,separator,initializers,redirectedConstructor,body);
    }
    _parseEnumConstantDeclaration() : any {
        let commentAndMetadata : CommentAndMetadata = this.parseCommentAndMetadata();
        let name : any;
        if (this._matchesIdentifier()) {
            name = this._parseSimpleIdentifierUnchecked({
                isDeclaration : true});
        }else {
            name = this.createSyntheticIdentifier();
        }
        if (commentAndMetadata.hasMetadata) {
            this._reportErrorForNode(ParserErrorCode.ANNOTATION_ON_ENUM_CONSTANT,commentAndMetadata.metadata[0]);
        }
        return astFactory.enumConstantDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,name);
    }
    _parseFormalParameterListAfterParen(leftParenthesis : any,_namedArguments? : {inFunctionType? : boolean}) : any {
        let {inFunctionType} = Object.assign({
            "inFunctionType" : false}, _namedArguments );
        if (this._matches(TokenType.CLOSE_PAREN)) {
            return astFactory.formalParameterList(leftParenthesis,null,null,null,this.getAndAdvance());
        }
        let parameters : core.DartList<any> = new core.DartList.literal<any>();
        let leftSquareBracket : any = null;
        let rightSquareBracket : any = null;
        let leftCurlyBracket : any = null;
        let rightCurlyBracket : any = null;
        let kind : any = ParameterKind.REQUIRED;
        let firstParameter : boolean = true;
        let reportedMultiplePositionalGroups : boolean = false;
        let reportedMultipleNamedGroups : boolean = false;
        let reportedMixedGroups : boolean = false;
        let wasOptionalParameter : boolean = false;
        let initialToken : any = null;
        do{
            if (firstParameter) {
                firstParameter = false;
            }else if (!this._optional(TokenType.COMMA)) {
                if (this._getEndToken(leftParenthesis) != null) {
                    this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TOKEN,new core.DartList.literal(TokenType.COMMA.lexeme));
                }else {
                    this._reportErrorForToken(ParserErrorCode.MISSING_CLOSING_PARENTHESIS,this._currentToken.previous);
                    break;
                }
            }
            initialToken = this._currentToken;
            let type : any = this._currentToken.type;
            if (op(Op.EQUALS,type,TokenType.OPEN_SQUARE_BRACKET)) {
                wasOptionalParameter = true;
                if (leftSquareBracket != null && !reportedMultiplePositionalGroups) {
                    this._reportErrorForCurrentToken(ParserErrorCode.MULTIPLE_POSITIONAL_PARAMETER_GROUPS);
                    reportedMultiplePositionalGroups = true;
                }
                if (leftCurlyBracket != null && !reportedMixedGroups) {
                    this._reportErrorForCurrentToken(ParserErrorCode.MIXED_PARAMETER_GROUPS);
                    reportedMixedGroups = true;
                }
                leftSquareBracket = this.getAndAdvance();
                kind = ParameterKind.POSITIONAL;
            }else if (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET)) {
                wasOptionalParameter = true;
                if (leftCurlyBracket != null && !reportedMultipleNamedGroups) {
                    this._reportErrorForCurrentToken(ParserErrorCode.MULTIPLE_NAMED_PARAMETER_GROUPS);
                    reportedMultipleNamedGroups = true;
                }
                if (leftSquareBracket != null && !reportedMixedGroups) {
                    this._reportErrorForCurrentToken(ParserErrorCode.MIXED_PARAMETER_GROUPS);
                    reportedMixedGroups = true;
                }
                leftCurlyBracket = this.getAndAdvance();
                kind = ParameterKind.NAMED;
            }
            let parameter : any = this.parseFormalParameter(kind,{
                inFunctionType : inFunctionType});
            parameters.add(parameter);
            if (op(Op.EQUALS,kind,ParameterKind.REQUIRED) && wasOptionalParameter) {
                this._reportErrorForNode(ParserErrorCode.NORMAL_BEFORE_OPTIONAL_PARAMETERS,parameter);
            }
            type = this._currentToken.type;
            if (op(Op.EQUALS,type,TokenType.COMMA)) {
                if (op(Op.EQUALS,rightSquareBracket,null) && op(Op.EQUALS,rightCurlyBracket,null)) {
                    let next : any = this._peek();
                    if (op(Op.EQUALS,next.type,TokenType.CLOSE_PAREN) || op(Op.EQUALS,next.type,TokenType.CLOSE_CURLY_BRACKET) || op(Op.EQUALS,next.type,TokenType.CLOSE_SQUARE_BRACKET)) {
                        this._advance();
                        type = this._currentToken.type;
                    }
                }
            }
            if (op(Op.EQUALS,type,TokenType.CLOSE_SQUARE_BRACKET)) {
                rightSquareBracket = this.getAndAdvance();
                if (op(Op.EQUALS,leftSquareBracket,null)) {
                    if (leftCurlyBracket != null) {
                        this._reportErrorForCurrentToken(ParserErrorCode.WRONG_TERMINATOR_FOR_PARAMETER_GROUP,new core.DartList.literal('}',']'));
                        rightCurlyBracket = rightSquareBracket;
                        rightSquareBracket = null;
                    }else {
                        this._reportErrorForCurrentToken(ParserErrorCode.UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP,new core.DartList.literal("["));
                    }
                }
                kind = ParameterKind.REQUIRED;
            }else if (op(Op.EQUALS,type,TokenType.CLOSE_CURLY_BRACKET)) {
                rightCurlyBracket = this.getAndAdvance();
                if (op(Op.EQUALS,leftCurlyBracket,null)) {
                    if (leftSquareBracket != null) {
                        this._reportErrorForCurrentToken(ParserErrorCode.WRONG_TERMINATOR_FOR_PARAMETER_GROUP,new core.DartList.literal(']','}'));
                        rightSquareBracket = rightCurlyBracket;
                        rightCurlyBracket = null;
                    }else {
                        this._reportErrorForCurrentToken(ParserErrorCode.UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP,new core.DartList.literal("{"));
                    }
                }
                kind = ParameterKind.REQUIRED;
            }
        } while (!this._matches(TokenType.CLOSE_PAREN) && !core.identical(initialToken,this._currentToken));
        let rightParenthesis : any = this._expect(TokenType.CLOSE_PAREN);
        if (leftSquareBracket != null && op(Op.EQUALS,rightSquareBracket,null)) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_TERMINATOR_FOR_PARAMETER_GROUP,new core.DartList.literal("]"));
        }
        if (leftCurlyBracket != null && op(Op.EQUALS,rightCurlyBracket,null)) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_TERMINATOR_FOR_PARAMETER_GROUP,new core.DartList.literal("}"));
        }
        leftSquareBracket = ( leftSquareBracket ) || ( leftCurlyBracket );
        rightSquareBracket = ( rightSquareBracket ) || ( rightCurlyBracket );
        return astFactory.formalParameterList(leftParenthesis,parameters,leftSquareBracket,rightSquareBracket,rightParenthesis);
    }
    _parseFormalParameterListUnchecked(_namedArguments? : {inFunctionType? : boolean}) : any {
        let {inFunctionType} = Object.assign({
            "inFunctionType" : false}, _namedArguments );
        return this._parseFormalParameterListAfterParen(this.getAndAdvance(),{
            inFunctionType : inFunctionType});
    }
    _parseFunctionDeclarationStatementAfterReturnType(commentAndMetadata : CommentAndMetadata,returnType : any) : any {
        let declaration : any = this.parseFunctionDeclaration(commentAndMetadata,null,returnType);
        let propertyKeyword : any = declaration.propertyKeyword;
        if (propertyKeyword != null) {
            if (op(Op.EQUALS,propertyKeyword.keyword,Keyword.GET)) {
                this._reportErrorForToken(ParserErrorCode.GETTER_IN_FUNCTION,propertyKeyword);
            }else {
                this._reportErrorForToken(ParserErrorCode.SETTER_IN_FUNCTION,propertyKeyword);
            }
        }
        return astFactory.functionDeclarationStatement(declaration);
    }
    _parseFunctionTypeAlias(commentAndMetadata : CommentAndMetadata,keyword : any) : any {
        let returnType : any = null;
        if (this.hasReturnTypeInTypeAlias) {
            returnType = this.parseReturnType(false);
        }
        let name : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        let typeParameters : any = null;
        if (this._matches(TokenType.LT)) {
            typeParameters = this.parseTypeParameterList();
        }
        let type : any = this._currentToken.type;
        if (op(Op.EQUALS,type,TokenType.SEMICOLON) || op(Op.EQUALS,type,TokenType.EOF)) {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_TYPEDEF_PARAMETERS);
            let parameters : any = astFactory.formalParameterList(this._createSyntheticToken(TokenType.OPEN_PAREN),null,null,null,this._createSyntheticToken(TokenType.CLOSE_PAREN));
            let semicolon : any = this._expect(TokenType.SEMICOLON);
            return astFactory.functionTypeAlias(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,returnType,name,typeParameters,parameters,semicolon);
        }else if (op(Op.EQUALS,type,TokenType.OPEN_PAREN)) {
            let parameters : any = this._parseFormalParameterListUnchecked();
            this._validateFormalParameterList(parameters);
            let semicolon : any = this._expect(TokenType.SEMICOLON);
            return astFactory.functionTypeAlias(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,returnType,name,typeParameters,parameters,semicolon);
        }else {
            this._reportErrorForCurrentToken(ParserErrorCode.MISSING_TYPEDEF_PARAMETERS);
            return astFactory.functionTypeAlias(commentAndMetadata.comment,commentAndMetadata.metadata,keyword,returnType,name,typeParameters,astFactory.formalParameterList(this._createSyntheticToken(TokenType.OPEN_PAREN),null,null,null,this._createSyntheticToken(TokenType.CLOSE_PAREN)),this._createSyntheticToken(TokenType.SEMICOLON));
        }
    }
    _parseGenericCommentTypeParameters() : any {
        if (this._injectGenericCommentTypeList()) {
            return this.parseTypeParameterList();
        }
        return null;
    }
    _parseGenericMethodTypeParameters() : any {
        if (this._matches(TokenType.LT) || this._injectGenericCommentTypeList()) {
            return this.parseTypeParameterList();
        }
        return null;
    }
    _parseLibraryName(missingNameError : any,missingNameToken : any) : any {
        if (this._matchesIdentifier()) {
            return this.parseLibraryIdentifier();
        }else if (this._matches(TokenType.STRING)) {
            let string : any = this.parseStringLiteral();
            this._reportErrorForNode(ParserErrorCode.NON_IDENTIFIER_LIBRARY_NAME,string);
        }else {
            this._reportErrorForToken(missingNameError,missingNameToken);
        }
        return astFactory.libraryIdentifier(new core.DartList.literal<any>(this.createSyntheticIdentifier()));
    }
    _parseMethodDeclarationAfterParameters(commentAndMetadata : CommentAndMetadata,externalKeyword : any,staticKeyword : any,returnType : any,name : any,typeParameters : any,parameters : any) : any {
        let body : any = this.parseFunctionBody(externalKeyword != null || op(Op.EQUALS,staticKeyword,null),ParserErrorCode.MISSING_FUNCTION_BODY,false);
        if (externalKeyword != null) {
            if (isNot(body, any)) {
                this._reportErrorForNode(ParserErrorCode.EXTERNAL_METHOD_WITH_BODY,body);
            }
        }else if (staticKeyword != null) {
            if (is(body, any) && this._parseFunctionBodies) {
                this._reportErrorForNode(ParserErrorCode.ABSTRACT_STATIC_METHOD,body);
            }
        }
        return astFactory.methodDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,externalKeyword,staticKeyword,returnType,null,null,name,typeParameters,parameters,body);
    }
    _parseMethodDeclarationAfterReturnType(commentAndMetadata : CommentAndMetadata,externalKeyword : any,staticKeyword : any,returnType : any) : any {
        let methodName : any = this.parseSimpleIdentifier({
            isDeclaration : true});
        let typeParameters : any = this._parseGenericMethodTypeParameters();
        let parameters : any;
        let type : any = this._currentToken.type;
        if (type != TokenType.OPEN_PAREN && (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET) || op(Op.EQUALS,type,TokenType.FUNCTION))) {
            this._reportErrorForToken(ParserErrorCode.MISSING_METHOD_PARAMETERS,this._currentToken.previous);
            parameters = astFactory.formalParameterList(this._createSyntheticToken(TokenType.OPEN_PAREN),null,null,null,this._createSyntheticToken(TokenType.CLOSE_PAREN));
        }else {
            parameters = this.parseFormalParameterList();
        }
        this._validateFormalParameterList(parameters);
        return this._parseMethodDeclarationAfterParameters(commentAndMetadata,externalKeyword,staticKeyword,returnType,methodName,typeParameters,parameters);
    }
    _parseNativeClause() : any {
        let keyword : any = this.getAndAdvance();
        let name : any = this.parseStringLiteral();
        return astFactory.nativeClause(keyword,name);
    }
    _parseOperatorAfterKeyword(commentAndMetadata : CommentAndMetadata,externalKeyword : any,returnType : any,operatorKeyword : any) : any {
        if (!this._currentToken.isUserDefinableOperator) {
            this._reportErrorForCurrentToken(ParserErrorCode.NON_USER_DEFINABLE_OPERATOR,new core.DartList.literal(this._currentToken.lexeme));
        }
        let name : any = astFactory.simpleIdentifier(this.getAndAdvance(),{
            isDeclaration : true});
        if (this._matches(TokenType.EQ)) {
            let previous : any = this._currentToken.previous;
            if ((this._tokenMatches(previous,TokenType.EQ_EQ) || this._tokenMatches(previous,TokenType.BANG_EQ)) && op(Op.EQUALS,this._currentToken.offset,op(Op.PLUS,previous.offset,2))) {
                this._reportErrorForCurrentToken(ParserErrorCode.INVALID_OPERATOR,new core.DartList.literal(`${previous.lexeme}${this._currentToken.lexeme}`));
                this._advance();
            }
        }
        let parameters : any = this.parseFormalParameterList();
        this._validateFormalParameterList(parameters);
        let body : any = this.parseFunctionBody(true,ParserErrorCode.MISSING_FUNCTION_BODY,false);
        if (externalKeyword != null && isNot(body, any)) {
            this._reportErrorForCurrentToken(ParserErrorCode.EXTERNAL_OPERATOR_WITH_BODY);
        }
        return astFactory.methodDeclaration(commentAndMetadata.comment,commentAndMetadata.metadata,externalKeyword,null,returnType,null,operatorKeyword,name,null,parameters,body);
    }
    _parseOptionalReturnType() : any {
        let typeComment : any = this._parseOptionalTypeNameComment();
        if (typeComment != null) {
            return typeComment;
        }
        let keyword : any = this._currentToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.VOID)) {
            if (this._atGenericFunctionTypeAfterReturnType(this._peek())) {
                return this.parseTypeAnnotation(false);
            }
            return astFactory.typeName(astFactory.simpleIdentifier(this.getAndAdvance()),null);
        }else if (this._matchesIdentifier()) {
            let next : any = this._peek();
            if (keyword != Keyword.GET && keyword != Keyword.SET && keyword != Keyword.OPERATOR && (this._tokenMatchesIdentifier(next) || this._tokenMatches(next,TokenType.LT))) {
                let afterTypeParameters : any = this._skipTypeParameterList(next);
                if (afterTypeParameters != null && this._tokenMatches(afterTypeParameters,TokenType.OPEN_PAREN)) {
                    return null;
                }
                return this.parseReturnType(false);
            }
            let next2 : any = next.next;
            let next3 : any = next2.next;
            if (this._tokenMatches(next,TokenType.PERIOD) && this._tokenMatchesIdentifier(next2) && (this._tokenMatchesIdentifier(next3) || this._tokenMatches(next3,TokenType.LT))) {
                return this.parseReturnType(false);
            }
        }
        return null;
    }
    _parseOptionalTypeArguments() : any {
        if (this._matches(TokenType.LT) || this._injectGenericCommentTypeList()) {
            return this.parseTypeArgumentList();
        }
        return null;
    }
    _parseOptionalTypeNameComment() : any {
        if (this._injectGenericCommentTypeAssign()) {
            return this._parseTypeName(false);
        }
        return null;
    }
    _parsePartDirective(commentAndMetadata : CommentAndMetadata) : any {
        let partKeyword : any = this.getAndAdvance();
        let partUri : any = this._parseUri();
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.partDirective(commentAndMetadata.comment,commentAndMetadata.metadata,partKeyword,partUri,semicolon);
    }
    _parsePartOfDirective(commentAndMetadata : CommentAndMetadata) : any {
        let partKeyword : any = this.getAndAdvance();
        let ofKeyword : any = this.getAndAdvance();
        if (this.enableUriInPartOf && this._matches(TokenType.STRING)) {
            let libraryUri : any = this._parseUri();
            let semicolon : any = this._expect(TokenType.SEMICOLON);
            return astFactory.partOfDirective(commentAndMetadata.comment,commentAndMetadata.metadata,partKeyword,ofKeyword,libraryUri,null,semicolon);
        }
        let libraryName : any = this._parseLibraryName(ParserErrorCode.MISSING_NAME_IN_PART_OF_DIRECTIVE,ofKeyword);
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.partOfDirective(commentAndMetadata.comment,commentAndMetadata.metadata,partKeyword,ofKeyword,null,libraryName,semicolon);
    }
    _parsePrefixedIdentifierAfterIdentifier(qualifier : any) : any {
        if (!this._matches(TokenType.PERIOD) || this._injectGenericCommentTypeList()) {
            return qualifier;
        }
        let period : any = this.getAndAdvance();
        let qualified : any = this.parseSimpleIdentifier();
        return astFactory.prefixedIdentifier(qualifier,period,qualified);
    }
    _parsePrefixedIdentifierUnchecked() : any {
        return this._parsePrefixedIdentifierAfterIdentifier(this._parseSimpleIdentifierUnchecked());
    }
    _parseSimpleIdentifierUnchecked(_namedArguments? : {isDeclaration? : boolean}) : any {
        let {isDeclaration} = Object.assign({
            "isDeclaration" : false}, _namedArguments );
        let lexeme : string = this._currentToken.lexeme;
        if ((this._inAsync || this._inGenerator) && (lexeme == Parser.ASYNC || lexeme == Parser._AWAIT || lexeme == Parser._YIELD)) {
            this._reportErrorForCurrentToken(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER);
        }
        return astFactory.simpleIdentifier(this.getAndAdvance(),{
            isDeclaration : isDeclaration});
    }
    _parseStatementList() : core.DartList<any> {
        let statements : core.DartList<any> = new core.DartList.literal<any>();
        let statementStart : any = this._currentToken;
        let type : any = this._currentToken.type;
        while (type != TokenType.EOF && type != TokenType.CLOSE_CURLY_BRACKET && !this.isSwitchMember()){
            statements.add(this.parseStatement2());
            if (core.identical(this._currentToken,statementStart)) {
                this._reportErrorForToken(ParserErrorCode.UNEXPECTED_TOKEN,this._currentToken,new core.DartList.literal(this._currentToken.lexeme));
                this._advance();
            }
            statementStart = this._currentToken;
            type = this._currentToken.type;
        }
        return statements;
    }
    _parseStringInterpolation(string : any) : any {
        let elements : core.DartList<any> = new core.DartList.literal<any>(astFactory.interpolationString(string,this.computeStringValue(string.lexeme,true,false)));
        let hasMore : boolean = true;
        let isExpression : boolean = this._matches(TokenType.STRING_INTERPOLATION_EXPRESSION);
        while (hasMore){
            if (isExpression) {
                let openToken : any = this.getAndAdvance();
                let wasInInitializer : boolean = this._inInitializer;
                this._inInitializer = false;
                try {
                    let expression : any = this.parseExpression2();
                    let rightBracket : any = this._expect(TokenType.CLOSE_CURLY_BRACKET);
                    elements.add(astFactory.interpolationExpression(openToken,expression,rightBracket));
                } finally {
                    this._inInitializer = wasInInitializer;
                }
            }else {
                let openToken : any = this.getAndAdvance();
                let expression : any = null;
                if (this._matchesKeyword(Keyword.THIS)) {
                    expression = astFactory.thisExpression(this.getAndAdvance());
                }else {
                    expression = this.parseSimpleIdentifier();
                }
                elements.add(astFactory.interpolationExpression(openToken,expression,null));
            }
            if (this._matches(TokenType.STRING)) {
                string = this.getAndAdvance();
                isExpression = this._matches(TokenType.STRING_INTERPOLATION_EXPRESSION);
                hasMore = isExpression || this._matches(TokenType.STRING_INTERPOLATION_IDENTIFIER);
                elements.add(astFactory.interpolationString(string,this.computeStringValue(string.lexeme,false,!hasMore)));
            }else {
                hasMore = false;
            }
        }
        return astFactory.stringInterpolation(elements);
    }
    _parseStringLiteralUnchecked() : any {
        let strings : core.DartList<any> = new core.DartList.literal<any>();
        do{
            let string : any = this.getAndAdvance();
            if (this._matches(TokenType.STRING_INTERPOLATION_EXPRESSION) || this._matches(TokenType.STRING_INTERPOLATION_IDENTIFIER)) {
                strings.add(this._parseStringInterpolation(string));
            }else {
                strings.add(astFactory.simpleStringLiteral(string,this.computeStringValue(string.lexeme,true,true)));
            }
        } while (this._matches(TokenType.STRING));
        return strings.length == 1 ? strings[0] : astFactory.adjacentStrings(strings);
    }
    _parseTypeAnnotationAfterIdentifier() : any {
        let type : any = this.parseTypeAnnotation(false);
        let typeFromComment : any = this._parseOptionalTypeNameComment();
        return (typeFromComment || type);
    }
    _parseTypeName(inExpression : boolean) : any {
        let typeName : any;
        if (this._matchesIdentifier()) {
            typeName = this._parsePrefixedIdentifierUnchecked();
        }else if (this._matchesKeyword(Keyword.VAR)) {
            this._reportErrorForCurrentToken(ParserErrorCode.VAR_AS_TYPE_NAME);
            typeName = astFactory.simpleIdentifier(this.getAndAdvance());
        }else {
            typeName = this.createSyntheticIdentifier();
            this._reportErrorForCurrentToken(ParserErrorCode.EXPECTED_TYPE_NAME);
        }
        let typeArguments : any = this._parseOptionalTypeArguments();
        let question : any = null;
        if (this.enableNnbd && this._matches(TokenType.QUESTION)) {
            if (!inExpression || !this._isConditionalOperator()) {
                question = this.getAndAdvance();
            }
        }
        return astFactory.typeName(typeName,typeArguments,{
            question : question});
    }
    _parseUri() : any {
        var isKeywordAfterUri : (token : any) => boolean = (token : any) : boolean =>  {
            return op(Op.EQUALS,token.lexeme,Keyword.AS.lexeme) || op(Op.EQUALS,token.lexeme,Parser._HIDE) || op(Op.EQUALS,token.lexeme,Parser._SHOW);
        };
        let type : any = this._currentToken.type;
        if (type != TokenType.STRING && type != TokenType.SEMICOLON && !isKeywordAfterUri(this._currentToken)) {
            let token : any = this._currentToken;
            var isValidInUri : (token : any) => boolean = (token : any) : boolean =>  {
                let type : any = token.type;
                return op(Op.EQUALS,type,TokenType.COLON) || op(Op.EQUALS,type,TokenType.SLASH) || op(Op.EQUALS,type,TokenType.PERIOD) || op(Op.EQUALS,type,TokenType.PERIOD_PERIOD) || op(Op.EQUALS,type,TokenType.PERIOD_PERIOD_PERIOD) || op(Op.EQUALS,type,TokenType.INT) || op(Op.EQUALS,type,TokenType.DOUBLE);
            };
            while ((this._tokenMatchesIdentifier(token) && !isKeywordAfterUri(token)) || isValidInUri(token)){
                token = token.next;
            }
            if (this._tokenMatches(token,TokenType.SEMICOLON) || isKeywordAfterUri(token)) {
                let endToken : any = token.previous;
                token = this._currentToken;
                let endOffset : number = token.end;
                let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                buffer.write(token.lexeme);
                while (token != endToken){
                    token = token.next;
                    if (token.offset != endOffset || token.precedingComments != null) {
                        return this.parseStringLiteral();
                    }
                    buffer.write(token.lexeme);
                    endOffset = token.end;
                }
                let value : string = buffer.toString();
                let newToken : any = new bare.createInstance(any,null,TokenType.STRING,`'${value}'`,this._currentToken.offset);
                this._reportErrorForToken(ParserErrorCode.NON_STRING_LITERAL_AS_URI,newToken);
                this._currentToken = endToken.next;
                return astFactory.simpleStringLiteral(newToken,value);
            }
        }
        return this.parseStringLiteral();
    }
    _parseVariableDeclarationStatementAfterType(commentAndMetadata : CommentAndMetadata,keyword : any,type : any) : any {
        let variableList : any = this.parseVariableDeclarationListAfterType(commentAndMetadata,keyword,type);
        let semicolon : any = this._expect(TokenType.SEMICOLON);
        return astFactory.variableDeclarationStatement(variableList,semicolon);
    }
    _peek() : any {
        return this._currentToken.next;
    }
    _peekAt(distance : number) : any {
        let token : any = this._currentToken;
        for(let i : number = 0; i < distance; i++){
            token = token.next;
        }
        return token;
    }
    _removeGitHubInlineCode(comment : string) : string {
        let index : number = 0;
        while (true){
            let beginIndex : number = new core.DartString(comment).indexOf('`',index);
            if (beginIndex == -1) {
                break;
            }
            let endIndex : number = new core.DartString(comment).indexOf('`',beginIndex + 1);
            if (endIndex == -1) {
                break;
            }
            comment = new core.DartString(comment).substring(0,beginIndex + 1) + op(Op.TIMES,' ',(endIndex - beginIndex - 1)) + new core.DartString(comment).substring(endIndex);
            index = endIndex + 1;
        }
        return comment;
    }
    _reportError(error : any) : void {
        if (this._errorListenerLock != 0) {
            return;
        }
        this._errorListener.onError(error);
    }
    _reportErrorForCurrentToken(errorCode : any,arguments? : core.DartList<core.DartObject>) : void {
        this._reportErrorForToken(errorCode,this._currentToken,arguments);
    }
    _reportErrorForNode(errorCode : any,node : any,arguments? : core.DartList<core.DartObject>) : void {
        this._reportError(new bare.createInstance(any,null,this._source,node.offset,node.length,errorCode,arguments));
    }
    _reportErrorForToken(errorCode : any,token : any,arguments? : core.DartList<core.DartObject>) : void {
        if (op(Op.EQUALS,token.type,TokenType.EOF)) {
            token = token.previous;
        }
        this._reportError(new bare.createInstance(any,null,this._source,token.offset,math.max(token.length,1),errorCode,arguments));
    }
    _scanGenericMethodComment(code : string,offset : number) : any {
        let listener : any = new bare.createInstance(any,null);
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,code,offset),listener);
        scanner.setSourceStart(1,1);
        let firstToken : any = scanner.tokenize();
        if (listener.errorReported) {
            return null;
        }
        return firstToken;
    }
    _skip(startToken : any,parseOperation : (parser : Parser) => any) : any {
        let listener : any = new bare.createInstance(any,null);
        let parser : Parser = new Parser(this._source,listener);
        parser._currentToken = this._cloneTokens(startToken);
        parser._enableAssertInitializer = this._enableAssertInitializer;
        parser._enableNnbd = this._enableNnbd;
        parser._inAsync = this._inAsync;
        parser._inGenerator = this._inGenerator;
        parser._inInitializer = this._inInitializer;
        parser._inLoop = this._inLoop;
        parser._inSwitch = this._inSwitch;
        parser._parseFunctionBodies = this._parseFunctionBodies;
        try {
            parseOperation(parser);
        } catch (__error__) {

            {
                let exception = __error__;
                return null;
            }
        }
        if (listener.errorReported) {
            return null;
        }
        return parser._currentToken;
    }
    _skipBlock() : void {
        let endToken : any = (this._currentToken as any).endToken;
        if (op(Op.EQUALS,endToken,null)) {
            endToken = this._currentToken.next;
            while (!core.identical(endToken,this._currentToken)){
                this._currentToken = endToken;
                endToken = this._currentToken.next;
            }
            this._reportErrorForToken(ParserErrorCode.EXPECTED_TOKEN,this._currentToken.previous,new core.DartList.literal("}"));
        }else {
            this._currentToken = endToken.next;
        }
    }
    _skipFinalConstVarOrType(startToken : any) : any {
        let keyword : any = startToken.keyword;
        if (op(Op.EQUALS,keyword,Keyword.FINAL) || op(Op.EQUALS,keyword,Keyword.CONST)) {
            let next : any = startToken.next;
            if (this._tokenMatchesIdentifier(next)) {
                let next2 : any = next.next;
                if (this._tokenMatchesIdentifier(next2) || this._tokenMatches(next2,TokenType.LT) || this._tokenMatches(next2,TokenType.PERIOD)) {
                    return this.skipTypeName(next);
                }
                return next;
            }
        }else if (op(Op.EQUALS,keyword,Keyword.VAR)) {
            return startToken.next;
        }else if (this._tokenMatchesIdentifier(startToken)) {
            let next : any = startToken.next;
            if (this._tokenMatchesIdentifier(next) || this._tokenMatches(next,TokenType.LT) || this._tokenMatchesKeyword(next,Keyword.THIS) || (this._tokenMatches(next,TokenType.PERIOD) && this._tokenMatchesIdentifier(next.next) && (this._tokenMatchesIdentifier(next.next.next) || this._tokenMatches(next.next.next,TokenType.LT) || this._tokenMatchesKeyword(next.next.next,Keyword.THIS)))) {
                return this.skipReturnType(startToken);
            }
        }
        return null;
    }
    _skipFormalParameterList(startToken : any) : any {
        if (!this._tokenMatches(startToken,TokenType.OPEN_PAREN)) {
            return null;
        }
        let next : any = startToken.next;
        if (this._tokenMatches(next,TokenType.CLOSE_PAREN)) {
            return next.next;
        }
        if (next.matchesAny(new core.DartList.literal<any>(TokenType.AT,TokenType.OPEN_SQUARE_BRACKET,TokenType.OPEN_CURLY_BRACKET)) || this._tokenMatchesKeyword(next,Keyword.VOID) || (this._tokenMatchesIdentifier(next) && (next.next.matchesAny(new core.DartList.literal<any>(TokenType.COMMA,TokenType.CLOSE_PAREN))))) {
            return this._skipPastMatchingToken(startToken);
        }
        if (this._tokenMatchesIdentifier(next) && this._tokenMatches(next.next,TokenType.OPEN_PAREN)) {
            let afterParameters : any = this._skipFormalParameterList(next.next);
            if (afterParameters != null && afterParameters.matchesAny(new core.DartList.literal<any>(TokenType.COMMA,TokenType.CLOSE_PAREN))) {
                return this._skipPastMatchingToken(startToken);
            }
        }
        let afterType : any = this._skipFinalConstVarOrType(next);
        if (op(Op.EQUALS,afterType,null)) {
            return null;
        }
        if (op(Op.EQUALS,this.skipSimpleIdentifier(afterType),null)) {
            return null;
        }
        return this._skipPastMatchingToken(startToken);
    }
    _skipPastMatchingToken(startToken : any) : any {
        if (isNot(startToken, any)) {
            return null;
        }
        let closeParen : any = (startToken as any).endToken;
        if (op(Op.EQUALS,closeParen,null)) {
            return null;
        }
        return closeParen.next;
    }
    _skipStringInterpolation(startToken : any) : any {
        let token : any = startToken;
        let type : any = token.type;
        while (op(Op.EQUALS,type,TokenType.STRING_INTERPOLATION_EXPRESSION) || op(Op.EQUALS,type,TokenType.STRING_INTERPOLATION_IDENTIFIER)){
            if (op(Op.EQUALS,type,TokenType.STRING_INTERPOLATION_EXPRESSION)) {
                token = token.next;
                type = token.type;
                let bracketNestingLevel : number = 1;
                while (bracketNestingLevel > 0){
                    if (op(Op.EQUALS,type,TokenType.EOF)) {
                        return null;
                    }else if (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET)) {
                        bracketNestingLevel++;
                        token = token.next;
                    }else if (op(Op.EQUALS,type,TokenType.CLOSE_CURLY_BRACKET)) {
                        bracketNestingLevel--;
                        token = token.next;
                    }else if (op(Op.EQUALS,type,TokenType.STRING)) {
                        token = this.skipStringLiteral(token);
                        if (op(Op.EQUALS,token,null)) {
                            return null;
                        }
                    }else {
                        token = token.next;
                    }
                    type = token.type;
                }
                token = token.next;
                type = token.type;
            }else {
                token = token.next;
                if (token.type != TokenType.IDENTIFIER) {
                    return null;
                }
                token = token.next;
            }
            type = token.type;
            if (op(Op.EQUALS,type,TokenType.STRING)) {
                token = token.next;
                type = token.type;
            }
        }
        return token;
    }
    _skipTypeParameterList(startToken : any) : any {
        if (!this._tokenMatches(startToken,TokenType.LT)) {
            return null;
        }
        let depth : number = 1;
        let next : any = startToken.next;
        while (depth > 0){
            if (this._tokenMatches(next,TokenType.EOF)) {
                return null;
            }else if (this._tokenMatches(next,TokenType.LT)) {
                depth++;
            }else if (this._tokenMatches(next,TokenType.GT)) {
                depth--;
            }else if (this._tokenMatches(next,TokenType.GT_EQ)) {
                if (depth == 1) {
                    let fakeEquals : any = new bare.createInstance(any,null,TokenType.EQ,op(Op.PLUS,next.offset,2));
                    fakeEquals.setNextWithoutSettingPrevious(next.next);
                    return fakeEquals;
                }
                depth--;
            }else if (this._tokenMatches(next,TokenType.GT_GT)) {
                depth -= 2;
            }else if (this._tokenMatches(next,TokenType.GT_GT_EQ)) {
                if (depth < 2) {
                    return null;
                }else if (depth == 2) {
                    let fakeEquals : any = new bare.createInstance(any,null,TokenType.EQ,op(Op.PLUS,next.offset,2));
                    fakeEquals.setNextWithoutSettingPrevious(next.next);
                    return fakeEquals;
                }
                depth -= 2;
            }
            next = next.next;
        }
        return next;
    }
    _splitIndex() : void {
        let leftBracket : any = this._createToken(this._currentToken,TokenType.OPEN_SQUARE_BRACKET,{
            isBegin : true});
        let rightBracket : any = new bare.createInstance(any,null,TokenType.CLOSE_SQUARE_BRACKET,op(Op.PLUS,this._currentToken.offset,1));
        leftBracket.endToken = rightBracket;
        rightBracket.setNext(this._currentToken.next);
        leftBracket.setNext(rightBracket);
        this._currentToken.previous.setNext(leftBracket);
        this._currentToken = leftBracket;
    }
    _tokenMatches(token : any,type : any) : boolean {
        return op(Op.EQUALS,token.type,type);
    }
    _tokenMatchesIdentifier(token : any) : boolean {
        return this._tokenMatches(token,TokenType.IDENTIFIER) || this._tokenMatchesPseudoKeyword(token);
    }
    _tokenMatchesIdentifierOrKeyword(token : any) : boolean {
        return this._tokenMatches(token,TokenType.IDENTIFIER) || token.type.isKeyword;
    }
    _tokenMatchesKeyword(token : any,keyword : any) : boolean {
        return op(Op.EQUALS,token.keyword,keyword);
    }
    _tokenMatchesPseudoKeyword(token : any) : boolean {
        return (((t)=>(!!t)?t.isBuiltInOrPseudo:null)(token.keyword) || false);
    }
    _translateCharacter(buffer : core.DartStringBuffer,lexeme : string,index : number) : number {
        let currentChar : number = new core.DartString(lexeme).codeUnitAt(index);
        if (currentChar != 92) {
            buffer.writeCharCode(currentChar);
            return index + 1;
        }
        let length : number = new core.DartString(lexeme).length;
        let currentIndex : number = index + 1;
        if (currentIndex >= length) {
            return length;
        }
        currentChar = new core.DartString(lexeme).codeUnitAt(currentIndex);
        if (currentChar == 110) {
            buffer.writeCharCode(10);
        }else if (currentChar == 114) {
            buffer.writeCharCode(13);
        }else if (currentChar == 102) {
            buffer.writeCharCode(12);
        }else if (currentChar == 98) {
            buffer.writeCharCode(8);
        }else if (currentChar == 116) {
            buffer.writeCharCode(9);
        }else if (currentChar == 118) {
            buffer.writeCharCode(11);
        }else if (currentChar == 120) {
            if (currentIndex + 2 >= length) {
                this._reportErrorForCurrentToken(ParserErrorCode.INVALID_HEX_ESCAPE);
                return length;
            }
            let firstDigit : number = new core.DartString(lexeme).codeUnitAt(currentIndex + 1);
            let secondDigit : number = new core.DartString(lexeme).codeUnitAt(currentIndex + 2);
            if (!this._isHexDigit(firstDigit) || !this._isHexDigit(secondDigit)) {
                this._reportErrorForCurrentToken(ParserErrorCode.INVALID_HEX_ESCAPE);
            }else {
                let charCode : number = op(Op.PLUS,(op(Op.SHIFTLEFT,Character.digit(firstDigit,16),4)),Character.digit(secondDigit,16));
                buffer.writeCharCode(charCode);
            }
            return currentIndex + 3;
        }else if (currentChar == 117) {
            currentIndex++;
            if (currentIndex >= length) {
                this._reportErrorForCurrentToken(ParserErrorCode.INVALID_UNICODE_ESCAPE);
                return length;
            }
            currentChar = new core.DartString(lexeme).codeUnitAt(currentIndex);
            if (currentChar == 123) {
                currentIndex++;
                if (currentIndex >= length) {
                    this._reportErrorForCurrentToken(ParserErrorCode.INVALID_UNICODE_ESCAPE);
                    return length;
                }
                currentChar = new core.DartString(lexeme).codeUnitAt(currentIndex);
                let digitCount : number = 0;
                let value : number = 0;
                while (currentChar != 125){
                    if (!this._isHexDigit(currentChar)) {
                        this._reportErrorForCurrentToken(ParserErrorCode.INVALID_UNICODE_ESCAPE);
                        currentIndex++;
                        while (currentIndex < length && new core.DartString(lexeme).codeUnitAt(currentIndex) != 125){
                            currentIndex++;
                        }
                        return currentIndex + 1;
                    }
                    digitCount++;
                    value = (value << 4) + Character.digit(currentChar,16);
                    currentIndex++;
                    if (currentIndex >= length) {
                        this._reportErrorForCurrentToken(ParserErrorCode.INVALID_UNICODE_ESCAPE);
                        return length;
                    }
                    currentChar = new core.DartString(lexeme).codeUnitAt(currentIndex);
                }
                if (digitCount < 1 || digitCount > 6) {
                    this._reportErrorForCurrentToken(ParserErrorCode.INVALID_UNICODE_ESCAPE);
                }
                this._appendCodePoint(buffer,lexeme,value,index,currentIndex);
                return currentIndex + 1;
            }else {
                if (currentIndex + 3 >= length) {
                    this._reportErrorForCurrentToken(ParserErrorCode.INVALID_UNICODE_ESCAPE);
                    return length;
                }
                let firstDigit : number = currentChar;
                let secondDigit : number = new core.DartString(lexeme).codeUnitAt(currentIndex + 1);
                let thirdDigit : number = new core.DartString(lexeme).codeUnitAt(currentIndex + 2);
                let fourthDigit : number = new core.DartString(lexeme).codeUnitAt(currentIndex + 3);
                if (!this._isHexDigit(firstDigit) || !this._isHexDigit(secondDigit) || !this._isHexDigit(thirdDigit) || !this._isHexDigit(fourthDigit)) {
                    this._reportErrorForCurrentToken(ParserErrorCode.INVALID_UNICODE_ESCAPE);
                }else {
                    this._appendCodePoint(buffer,lexeme,op(Op.PLUS,(op(Op.SHIFTLEFT,(op(Op.PLUS,(op(Op.SHIFTLEFT,(op(Op.PLUS,(op(Op.SHIFTLEFT,Character.digit(firstDigit,16),4)),Character.digit(secondDigit,16))),4)),Character.digit(thirdDigit,16))),4)),Character.digit(fourthDigit,16)),index,currentIndex + 3);
                }
                return currentIndex + 4;
            }
        }else {
            buffer.writeCharCode(currentChar);
        }
        return currentIndex + 1;
    }
    _unlockErrorListener() : void {
        if (this._errorListenerLock == 0) {
            throw new core.StateError("Attempt to unlock not locked error listener.");
        }
        this._errorListenerLock--;
    }
    _validateFormalParameterList(parameterList : any) : void {
        for(let parameter of parameterList.parameters) {
            if (is(parameter, any)) {
                this._reportErrorForNode(ParserErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR,parameter.identifier);
            }
        }
    }
    _validateModifiersForClass(modifiers : Modifiers) : any {
        this._validateModifiersForTopLevelDeclaration(modifiers);
        if (modifiers.constKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.CONST_CLASS,modifiers.constKeyword);
        }
        if (modifiers.externalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_CLASS,modifiers.externalKeyword);
        }
        if (modifiers.finalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FINAL_CLASS,modifiers.finalKeyword);
        }
        if (modifiers.varKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.VAR_CLASS,modifiers.varKeyword);
        }
        return modifiers.abstractKeyword;
    }
    _validateModifiersForConstructor(modifiers : Modifiers) : any {
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.ABSTRACT_CLASS_MEMBER,modifiers.abstractKeyword);
        }
        if (modifiers.covariantKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.COVARIANT_CONSTRUCTOR,modifiers.covariantKeyword);
        }
        if (modifiers.finalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FINAL_CONSTRUCTOR,modifiers.finalKeyword);
        }
        if (modifiers.staticKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.STATIC_CONSTRUCTOR,modifiers.staticKeyword);
        }
        if (modifiers.varKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.CONSTRUCTOR_WITH_RETURN_TYPE,modifiers.varKeyword);
        }
        let externalKeyword : any = modifiers.externalKeyword;
        let constKeyword : any = modifiers.constKeyword;
        let factoryKeyword : any = modifiers.factoryKeyword;
        if (externalKeyword != null && constKeyword != null && op(Op.LT,constKeyword.offset,externalKeyword.offset)) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_AFTER_CONST,externalKeyword);
        }
        if (externalKeyword != null && factoryKeyword != null && op(Op.LT,factoryKeyword.offset,externalKeyword.offset)) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_AFTER_FACTORY,externalKeyword);
        }
        return constKeyword;
    }
    _validateModifiersForEnum(modifiers : Modifiers) : void {
        this._validateModifiersForTopLevelDeclaration(modifiers);
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.ABSTRACT_ENUM,modifiers.abstractKeyword);
        }
        if (modifiers.constKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.CONST_ENUM,modifiers.constKeyword);
        }
        if (modifiers.externalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_ENUM,modifiers.externalKeyword);
        }
        if (modifiers.finalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FINAL_ENUM,modifiers.finalKeyword);
        }
        if (modifiers.varKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.VAR_ENUM,modifiers.varKeyword);
        }
    }
    _validateModifiersForField(modifiers : Modifiers) : any {
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForCurrentToken(ParserErrorCode.ABSTRACT_CLASS_MEMBER);
        }
        if (modifiers.externalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_FIELD,modifiers.externalKeyword);
        }
        if (modifiers.factoryKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.NON_CONSTRUCTOR_FACTORY,modifiers.factoryKeyword);
        }
        let staticKeyword : any = modifiers.staticKeyword;
        let covariantKeyword : any = modifiers.covariantKeyword;
        let constKeyword : any = modifiers.constKeyword;
        let finalKeyword : any = modifiers.finalKeyword;
        let varKeyword : any = modifiers.varKeyword;
        if (constKeyword != null) {
            if (covariantKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.CONST_AND_COVARIANT,covariantKeyword);
            }
            if (finalKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.CONST_AND_FINAL,finalKeyword);
            }
            if (varKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.CONST_AND_VAR,varKeyword);
            }
            if (staticKeyword != null && op(Op.LT,constKeyword.offset,staticKeyword.offset)) {
                this._reportErrorForToken(ParserErrorCode.STATIC_AFTER_CONST,staticKeyword);
            }
        }else if (finalKeyword != null) {
            if (covariantKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.FINAL_AND_COVARIANT,covariantKeyword);
            }
            if (varKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.FINAL_AND_VAR,varKeyword);
            }
            if (staticKeyword != null && op(Op.LT,finalKeyword.offset,staticKeyword.offset)) {
                this._reportErrorForToken(ParserErrorCode.STATIC_AFTER_FINAL,staticKeyword);
            }
        }else if (varKeyword != null) {
            if (staticKeyword != null && op(Op.LT,varKeyword.offset,staticKeyword.offset)) {
                this._reportErrorForToken(ParserErrorCode.STATIC_AFTER_VAR,staticKeyword);
            }
            if (covariantKeyword != null && op(Op.LT,varKeyword.offset,covariantKeyword.offset)) {
                this._reportErrorForToken(ParserErrorCode.COVARIANT_AFTER_VAR,covariantKeyword);
            }
        }
        if (covariantKeyword != null && staticKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.COVARIANT_AND_STATIC,staticKeyword);
        }
        return Token.lexicallyFirst(new core.DartList.literal(constKeyword,finalKeyword,varKeyword));
    }
    _validateModifiersForFunctionDeclarationStatement(modifiers : Modifiers) : void {
        if (modifiers.abstractKeyword != null || modifiers.constKeyword != null || modifiers.externalKeyword != null || modifiers.factoryKeyword != null || modifiers.finalKeyword != null || modifiers.staticKeyword != null || modifiers.varKeyword != null) {
            this._reportErrorForCurrentToken(ParserErrorCode.LOCAL_FUNCTION_DECLARATION_MODIFIER);
        }
    }
    _validateModifiersForGetterOrSetterOrMethod(modifiers : Modifiers) : void {
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForCurrentToken(ParserErrorCode.ABSTRACT_CLASS_MEMBER);
        }
        if (modifiers.constKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.CONST_METHOD,modifiers.constKeyword);
        }
        if (modifiers.covariantKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.COVARIANT_MEMBER,modifiers.covariantKeyword);
        }
        if (modifiers.factoryKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.NON_CONSTRUCTOR_FACTORY,modifiers.factoryKeyword);
        }
        if (modifiers.finalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FINAL_METHOD,modifiers.finalKeyword);
        }
        if (modifiers.varKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.VAR_RETURN_TYPE,modifiers.varKeyword);
        }
        let externalKeyword : any = modifiers.externalKeyword;
        let staticKeyword : any = modifiers.staticKeyword;
        if (externalKeyword != null && staticKeyword != null && op(Op.LT,staticKeyword.offset,externalKeyword.offset)) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_AFTER_STATIC,externalKeyword);
        }
    }
    _validateModifiersForOperator(modifiers : Modifiers) : void {
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForCurrentToken(ParserErrorCode.ABSTRACT_CLASS_MEMBER);
        }
        if (modifiers.constKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.CONST_METHOD,modifiers.constKeyword);
        }
        if (modifiers.factoryKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.NON_CONSTRUCTOR_FACTORY,modifiers.factoryKeyword);
        }
        if (modifiers.finalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FINAL_METHOD,modifiers.finalKeyword);
        }
        if (modifiers.staticKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.STATIC_OPERATOR,modifiers.staticKeyword);
        }
        if (modifiers.varKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.VAR_RETURN_TYPE,modifiers.varKeyword);
        }
    }
    _validateModifiersForTopLevelDeclaration(modifiers : Modifiers) : void {
        if (modifiers.covariantKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.COVARIANT_TOP_LEVEL_DECLARATION,modifiers.covariantKeyword);
        }
        if (modifiers.factoryKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FACTORY_TOP_LEVEL_DECLARATION,modifiers.factoryKeyword);
        }
        if (modifiers.staticKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.STATIC_TOP_LEVEL_DECLARATION,modifiers.staticKeyword);
        }
    }
    _validateModifiersForTopLevelFunction(modifiers : Modifiers) : void {
        this._validateModifiersForTopLevelDeclaration(modifiers);
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForCurrentToken(ParserErrorCode.ABSTRACT_TOP_LEVEL_FUNCTION);
        }
        if (modifiers.constKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.CONST_CLASS,modifiers.constKeyword);
        }
        if (modifiers.finalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FINAL_CLASS,modifiers.finalKeyword);
        }
        if (modifiers.varKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.VAR_RETURN_TYPE,modifiers.varKeyword);
        }
    }
    _validateModifiersForTopLevelVariable(modifiers : Modifiers) : any {
        this._validateModifiersForTopLevelDeclaration(modifiers);
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForCurrentToken(ParserErrorCode.ABSTRACT_TOP_LEVEL_VARIABLE);
        }
        if (modifiers.externalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_FIELD,modifiers.externalKeyword);
        }
        let constKeyword : any = modifiers.constKeyword;
        let finalKeyword : any = modifiers.finalKeyword;
        let varKeyword : any = modifiers.varKeyword;
        if (constKeyword != null) {
            if (finalKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.CONST_AND_FINAL,finalKeyword);
            }
            if (varKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.CONST_AND_VAR,varKeyword);
            }
        }else if (finalKeyword != null) {
            if (varKeyword != null) {
                this._reportErrorForToken(ParserErrorCode.FINAL_AND_VAR,varKeyword);
            }
        }
        return Token.lexicallyFirst(new core.DartList.literal(constKeyword,finalKeyword,varKeyword));
    }
    _validateModifiersForTypedef(modifiers : Modifiers) : void {
        this._validateModifiersForTopLevelDeclaration(modifiers);
        if (modifiers.abstractKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.ABSTRACT_TYPEDEF,modifiers.abstractKeyword);
        }
        if (modifiers.constKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.CONST_TYPEDEF,modifiers.constKeyword);
        }
        if (modifiers.externalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.EXTERNAL_TYPEDEF,modifiers.externalKeyword);
        }
        if (modifiers.finalKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.FINAL_TYPEDEF,modifiers.finalKeyword);
        }
        if (modifiers.varKeyword != null) {
            this._reportErrorForToken(ParserErrorCode.VAR_TYPEDEF,modifiers.varKeyword);
        }
    }
}

export namespace _TooDeepTreeError {
    export type Constructors = '_TooDeepTreeError';
    export type Interface = Omit<_TooDeepTreeError, Constructors>;
}
@DartClass
export class _TooDeepTreeError {
    constructor() {
    }
    @defaultConstructor
    _TooDeepTreeError() {
    }
}

export class properties {
}
