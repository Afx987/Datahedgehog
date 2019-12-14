/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/parser.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../scanner/token";
import * as lib4 from "./listener";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./async_modifier";
import * as lib7 from "./../scanner/token_constants";
import * as lib8 from "./identifier_context";
import * as lib9 from "./../fasta_codes";
import * as lib10 from "./../scanner/token";
import * as lib11 from "./../scanner/characters";
import * as lib12 from "./../util/link";
import * as lib13 from "./../scanner/error_token";
import * as lib14 from "./../scanner/recover";

export var optional : (value : string,token : lib3.Token) => boolean = (value : string,token : lib3.Token) : boolean =>  {
    return core.identical(value,token.stringValue);
};
export namespace FormalParameterType {
    export type Constructors = 'FormalParameterType';
    export type Interface = Omit<FormalParameterType, Constructors>;
}
@DartClass
export class FormalParameterType {
    type : string;

    constructor(type : string) {
    }
    @defaultConstructor
    FormalParameterType(type : string) {
        this.type = type;
    }
    get isRequired() : boolean {
        return op(Op.EQUALS,this,FormalParameterType.REQUIRED);
    }
    get isPositional() : boolean {
        return op(Op.EQUALS,this,FormalParameterType.POSITIONAL);
    }
    get isNamed() : boolean {
        return op(Op.EQUALS,this,FormalParameterType.NAMED);
    }
    private static __$REQUIRED;
    static get REQUIRED() { 
        if (this.__$REQUIRED===undefined) {
            this.__$REQUIRED = new FormalParameterType('required');
        }
        return this.__$REQUIRED;
    }
    static set REQUIRED(__$value : any)  { 
        this.__$REQUIRED = __$value;
    }

    private static __$POSITIONAL;
    static get POSITIONAL() { 
        if (this.__$POSITIONAL===undefined) {
            this.__$POSITIONAL = new FormalParameterType('positional');
        }
        return this.__$POSITIONAL;
    }
    static set POSITIONAL(__$value : any)  { 
        this.__$POSITIONAL = __$value;
    }

    private static __$NAMED;
    static get NAMED() { 
        if (this.__$NAMED===undefined) {
            this.__$NAMED = new FormalParameterType('named');
        }
        return this.__$NAMED;
    }
    static set NAMED(__$value : any)  { 
        this.__$NAMED = __$value;
    }

}

export enum MemberKind {
    Catch,
    Factory,
    FunctionTypeAlias,
    FunctionTypedParameter,
    GeneralizedFunctionType,
    Local,
    NonStaticMethod,
    StaticMethod,
    TopLevelMethod,
    NonStaticField,
    StaticField,
    TopLevelField
}

export namespace Parser {
    export type Constructors = 'Parser';
    export type Interface = Omit<Parser, Constructors>;
}
@DartClass
export class Parser {
    listener : lib4.Listener;

    get uri() : lib5.Uri {
        return this.listener.uri;
    }
    mayParseFunctionExpressions : boolean;

    asyncState : lib6.AsyncModifier;

    constructor(listener : lib4.Listener) {
    }
    @defaultConstructor
    Parser(listener : lib4.Listener) {
        this.mayParseFunctionExpressions = true;
        this.asyncState = lib6.AsyncModifier.Sync;
        this.statementDepth = 0;
        this.expressionDepth = 0;
        this.listener = listener;
    }
    get inGenerator() : boolean {
        return op(Op.EQUALS,this.asyncState,lib6.AsyncModifier.AsyncStar) || op(Op.EQUALS,this.asyncState,lib6.AsyncModifier.SyncStar);
    }
    get inAsync() : boolean {
        return op(Op.EQUALS,this.asyncState,lib6.AsyncModifier.Async) || op(Op.EQUALS,this.asyncState,lib6.AsyncModifier.AsyncStar);
    }
    get inPlainSync() : boolean {
        return op(Op.EQUALS,this.asyncState,lib6.AsyncModifier.Sync);
    }
    parseUnit(token : lib3.Token) : lib3.Token {
        this.listener.beginCompilationUnit(token);
        let count : number = 0;
        while (!core.identical(token.kind,lib7.properties.EOF_TOKEN)){
            token = this.parseTopLevelDeclaration(token);
            count++;
        }
        this.listener.endCompilationUnit(count,token);
        return token;
    }
    parseTopLevelDeclaration(token : lib3.Token) : lib3.Token {
        token = this._parseTopLevelDeclaration(token);
        this.listener.endTopLevelDeclaration(token);
        return token;
    }
    _parseTopLevelDeclaration(token : lib3.Token) : lib3.Token {
        if (core.identical(token.type,lib3.TokenType.SCRIPT_TAG)) {
            return this.parseScript(token);
        }
        token = this.parseMetadataStar(token);
        let value : string = token.stringValue;
        if ((core.identical(value,'abstract') && optional('class',token.next)) || core.identical(value,'class')) {
            return this.parseClassOrNamedMixinApplication(token);
        }else if (core.identical(value,'enum')) {
            return this.parseEnum(token);
        }else if (core.identical(value,'typedef') && (token.next.isIdentifier || optional("void",token.next))) {
            return this.parseTypedef(token);
        }else if (core.identical(value,'library')) {
            return this.parseLibraryName(token);
        }else if (core.identical(value,'import')) {
            return this.parseImport(token);
        }else if (core.identical(value,'export')) {
            return this.parseExport(token);
        }else if (core.identical(value,'part')) {
            return this.parsePartOrPartOf(token);
        }else {
            return this.parseTopLevelMember(token);
        }
    }
    parseLibraryName(token : lib3.Token) : lib3.Token {
        let libraryKeyword : lib3.Token = token;
        this.listener.beginLibraryName(libraryKeyword);
        /* TODO (AssertStatementImpl) : assert (optional('library', token)); */;
        token = this.parseQualified(token.next,lib8.IdentifierContext.libraryName,lib8.IdentifierContext.libraryNameContinuation);
        let semicolon : lib3.Token = token;
        token = this.expect(';',token);
        this.listener.endLibraryName(libraryKeyword,semicolon);
        return token;
    }
    parseImport(token : lib3.Token) : lib3.Token {
        let importKeyword : lib3.Token = token;
        this.listener.beginImport(importKeyword);
        /* TODO (AssertStatementImpl) : assert (optional('import', token)); */;
        token = this.parseLiteralStringOrRecoverExpression(token.next);
        token = this.parseConditionalUris(token);
        let deferredKeyword : lib3.Token;
        if (optional('deferred',token)) {
            deferredKeyword = token;
            token = token.next;
        }
        let asKeyword : lib3.Token;
        if (optional('as',token)) {
            asKeyword = token;
            token = this.parseIdentifier(token.next,lib8.IdentifierContext.importPrefixDeclaration);
        }
        token = this.parseCombinators(token);
        let semicolon : lib3.Token = token;
        token = this.expect(';',token);
        this.listener.endImport(importKeyword,deferredKeyword,asKeyword,semicolon);
        return token;
    }
    parseConditionalUris(token : lib3.Token) : lib3.Token {
        this.listener.beginConditionalUris(token);
        let count : number = 0;
        while (optional('if',token)){
            count++;
            token = this.parseConditionalUri(token);
        }
        this.listener.endConditionalUris(count);
        return token;
    }
    parseConditionalUri(token : lib3.Token) : lib3.Token {
        this.listener.beginConditionalUri(token);
        let ifKeyword : lib3.Token = token;
        token = this.expect('if',token);
        token = this.expect('(',token);
        token = this.parseDottedName(token);
        let equalitySign : lib3.Token;
        if (optional('==',token)) {
            equalitySign = token;
            token = this.parseLiteralStringOrRecoverExpression(token.next);
        }
        token = this.expect(')',token);
        token = this.parseLiteralStringOrRecoverExpression(token);
        this.listener.endConditionalUri(ifKeyword,equalitySign);
        return token;
    }
    parseDottedName(token : lib3.Token) : lib3.Token {
        this.listener.beginDottedName(token);
        let firstIdentifier : lib3.Token = token;
        token = this.parseIdentifier(token,lib8.IdentifierContext.dottedName);
        let count : number = 1;
        while (optional('.',token)){
            token = this.parseIdentifier(token.next,lib8.IdentifierContext.dottedNameContinuation);
            count++;
        }
        this.listener.endDottedName(count,firstIdentifier);
        return token;
    }
    parseExport(token : lib3.Token) : lib3.Token {
        let exportKeyword : lib3.Token = token;
        this.listener.beginExport(exportKeyword);
        /* TODO (AssertStatementImpl) : assert (optional('export', token)); */;
        token = this.parseLiteralStringOrRecoverExpression(token.next);
        token = this.parseConditionalUris(token);
        token = this.parseCombinators(token);
        let semicolon : lib3.Token = token;
        token = this.expect(';',token);
        this.listener.endExport(exportKeyword,semicolon);
        return token;
    }
    parseCombinators(token : lib3.Token) : lib3.Token {
        this.listener.beginCombinators(token);
        let count : number = 0;
        while (true){
            let value : string = token.stringValue;
            if (core.identical('hide',value)) {
                token = this.parseHide(token);
            }else if (core.identical('show',value)) {
                token = this.parseShow(token);
            }else {
                this.listener.endCombinators(count);
                break;
            }
            count++;
        }
        return token;
    }
    parseHide(token : lib3.Token) : lib3.Token {
        let hideKeyword : lib3.Token = token;
        this.listener.beginHide(hideKeyword);
        /* TODO (AssertStatementImpl) : assert (optional('hide', token)); */;
        token = this.parseIdentifierList(token.next);
        this.listener.endHide(hideKeyword);
        return token;
    }
    parseShow(token : lib3.Token) : lib3.Token {
        let showKeyword : lib3.Token = token;
        this.listener.beginShow(showKeyword);
        /* TODO (AssertStatementImpl) : assert (optional('show', token)); */;
        token = this.parseIdentifierList(token.next);
        this.listener.endShow(showKeyword);
        return token;
    }
    parseIdentifierList(token : lib3.Token) : lib3.Token {
        this.listener.beginIdentifierList(token);
        token = this.parseIdentifier(token,lib8.IdentifierContext.combinator);
        let count : number = 1;
        while (optional(',',token)){
            token = this.parseIdentifier(token.next,lib8.IdentifierContext.combinator);
            count++;
        }
        this.listener.endIdentifierList(count);
        return token;
    }
    parseTypeList(token : lib3.Token) : lib3.Token {
        this.listener.beginTypeList(token);
        token = this.parseType(token);
        let count : number = 1;
        while (optional(',',token)){
            token = this.parseType(token.next);
            count++;
        }
        this.listener.endTypeList(count);
        return token;
    }
    parsePartOrPartOf(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('part', token)); */;
        if (optional('of',token.next)) {
            return this.parsePartOf(token);
        }else {
            return this.parsePart(token);
        }
    }
    parsePart(token : lib3.Token) : lib3.Token {
        let partKeyword : lib3.Token = token;
        this.listener.beginPart(token);
        /* TODO (AssertStatementImpl) : assert (optional('part', token)); */;
        token = this.parseLiteralStringOrRecoverExpression(token.next);
        let semicolon : lib3.Token = token;
        token = this.expect(';',token);
        this.listener.endPart(partKeyword,semicolon);
        return token;
    }
    parsePartOf(token : lib3.Token) : lib3.Token {
        this.listener.beginPartOf(token);
        /* TODO (AssertStatementImpl) : assert (optional('part', token)); */;
        /* TODO (AssertStatementImpl) : assert (optional('of', token.next)); */;
        let partKeyword : lib3.Token = token;
        token = token.next.next;
        let hasName : boolean = token.isIdentifier;
        if (hasName) {
            token = this.parseQualified(token,lib8.IdentifierContext.partName,lib8.IdentifierContext.partNameContinuation);
        }else {
            token = this.parseLiteralStringOrRecoverExpression(token);
        }
        let semicolon : lib3.Token = token;
        token = this.expect(';',token);
        this.listener.endPartOf(partKeyword,semicolon,hasName);
        return token;
    }
    parseMetadataStar(token : lib3.Token,_namedArguments? : {forParameter? : boolean}) : lib3.Token {
        let {forParameter} = Object.assign({
            "forParameter" : false}, _namedArguments );
        token = this.listener.injectGenericCommentTypeAssign(token);
        this.listener.beginMetadataStar(token);
        let count : number = 0;
        while (optional('@',token)){
            token = this.parseMetadata(token);
            count++;
        }
        this.listener.endMetadataStar(count,forParameter);
        return token;
    }
    parseMetadata(token : lib3.Token) : lib3.Token {
        this.listener.beginMetadata(token);
        let atToken : lib3.Token = token;
        /* TODO (AssertStatementImpl) : assert (optional('@', token)); */;
        token = this.parseIdentifier(token.next,lib8.IdentifierContext.metadataReference);
        token = this.parseQualifiedRestOpt(token,lib8.IdentifierContext.metadataContinuation);
        token = this.parseTypeArgumentsOpt(token);
        let period : lib3.Token = null;
        if (optional('.',token)) {
            period = token;
            token = this.parseIdentifier(token.next,lib8.IdentifierContext.metadataContinuationAfterTypeArguments);
        }
        token = this.parseArgumentsOpt(token);
        this.listener.endMetadata(atToken,period,token);
        return token;
    }
    parseScript(token : lib3.Token) : lib3.Token {
        this.listener.handleScript(token);
        return token.next;
    }
    parseTypedef(token : lib3.Token) : lib3.Token {
        let typedefKeyword : lib3.Token = token;
        this.listener.beginFunctionTypeAlias(token);
        let equals : lib3.Token;
        if (optional('=',this.peekAfterNominalType(token.next))) {
            token = this.parseIdentifier(token.next,lib8.IdentifierContext.typedefDeclaration);
            token = this.parseTypeVariablesOpt(token);
            equals = token;
            token = this.expect('=',token);
            token = this.parseType(token);
        }else {
            token = this.parseReturnTypeOpt(token.next);
            token = this.parseIdentifier(token,lib8.IdentifierContext.typedefDeclaration);
            token = this.parseTypeVariablesOpt(token);
            token = this.parseFormalParameters(token,MemberKind.FunctionTypeAlias);
        }
        this.listener.endFunctionTypeAlias(typedefKeyword,equals,token);
        return this.expect(';',token);
    }
    parseMixinApplication(token : lib3.Token) : lib3.Token {
        this.listener.beginMixinApplication(token);
        token = this.parseType(token);
        let withKeyword : lib3.Token = token;
        token = this.expect('with',token);
        token = this.parseTypeList(token);
        this.listener.endMixinApplication(withKeyword);
        return token;
    }
    parseReturnTypeOpt(token : lib3.Token) : lib3.Token {
        if (core.identical(token.stringValue,'void')) {
            if (this.isGeneralizedFunctionType(token.next)) {
                return this.parseType(token);
            }else {
                this.listener.handleVoidKeyword(token);
                return token.next;
            }
        }else {
            return this.parseTypeOpt(token);
        }
    }
    parseFormalParametersOpt(token : lib3.Token,kind : MemberKind) : lib3.Token {
        if (optional('(',token)) {
            return this.parseFormalParameters(token,kind);
        }else {
            this.listener.handleNoFormalParameters(token,kind);
            return token;
        }
    }
    skipFormalParameters(token : lib3.Token,kind : MemberKind) : lib3.Token {
        this.listener.beginOptionalFormalParameters(token);
        if (!optional('(',token)) {
            if (optional(';',token)) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeExpectedOpenParens);
                return token;
            }
            return this.reportUnrecoverableErrorCodeWithString(token,lib9.properties.codeExpectedButGot,"(").next;
        }
        let beginGroupToken : lib10.BeginGroupToken = token;
        let endToken : lib3.Token = beginGroupToken.endGroup;
        this.listener.endFormalParameters(0,token,endToken,kind);
        return endToken.next;
    }
    parseFormalParameters(token : lib3.Token,kind : MemberKind) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginFormalParameters(begin,kind);
        this.expect('(',token);
        let parameterCount : number = 0;
        do{
            token = token.next;
            if (optional(')',token)) {
                break;
            }
            ++parameterCount;
            let value : string = token.stringValue;
            if (core.identical(value,'[')) {
                token = this.parseOptionalFormalParameters(token,false,kind);
                break;
            }else if (core.identical(value,'{')) {
                token = this.parseOptionalFormalParameters(token,true,kind);
                break;
            }else if (core.identical(value,'[]')) {
                --parameterCount;
                this.reportRecoverableErrorCode(token,lib9.properties.codeEmptyOptionalParameterList);
                token = token.next;
                break;
            }
            token = this.parseFormalParameter(token,FormalParameterType.REQUIRED,kind);
        } while (optional(',',token));
        this.listener.endFormalParameters(parameterCount,begin,token,kind);
        return this.expect(')',token);
    }
    parseFormalParameter(token : lib3.Token,parameterKind : FormalParameterType,memberKind : MemberKind) : lib3.Token {
        token = this.parseMetadataStar(token,{
            forParameter : true});
        this.listener.beginFormalParameter(token,memberKind);
        let inFunctionType : boolean = op(Op.EQUALS,memberKind,MemberKind.GeneralizedFunctionType);
        token = this.parseModifiers(token,memberKind,{
            parameterKind : parameterKind});
        let isNamedParameter : boolean = op(Op.EQUALS,parameterKind,FormalParameterType.NAMED);
        let thisKeyword : lib3.Token = null;
        let nameToken : lib3.Token;
        if (inFunctionType) {
            if (isNamedParameter || token.isIdentifier) {
                token = this.parseIdentifier(token,lib8.IdentifierContext.formalParameterDeclaration);
            }else {
                this.listener.handleNoName(token);
            }
        }else {
            if (optional('this',token)) {
                thisKeyword = token;
                token = this.expect('.',token.next);
                nameToken = token;
                token = this.parseIdentifier(token,lib8.IdentifierContext.fieldInitializer);
            }else {
                nameToken = token;
                token = this.parseIdentifier(token,lib8.IdentifierContext.formalParameterDeclaration);
            }
        }
        token = this.listener.injectGenericCommentTypeList(token);
        if (optional('(',token)) {
            let inlineFunctionTypeStart : lib3.Token = token;
            this.listener.beginFunctionTypedFormalParameter(token);
            this.listener.handleNoTypeVariables(token);
            token = this.parseFormalParameters(token,MemberKind.FunctionTypedParameter);
            this.listener.endFunctionTypedFormalParameter(thisKeyword,parameterKind);
            if (op(Op.EQUALS,memberKind,MemberKind.GeneralizedFunctionType)) {
                this.reportRecoverableErrorCode(inlineFunctionTypeStart,lib9.properties.codeInvalidInlineFunctionType);
            }
        }else if (optional('<',token)) {
            let inlineFunctionTypeStart : lib3.Token = token;
            this.listener.beginFunctionTypedFormalParameter(token);
            token = this.parseTypeVariablesOpt(token);
            token = this.parseFormalParameters(token,MemberKind.FunctionTypedParameter);
            this.listener.endFunctionTypedFormalParameter(thisKeyword,parameterKind);
            if (op(Op.EQUALS,memberKind,MemberKind.GeneralizedFunctionType)) {
                this.reportRecoverableErrorCode(inlineFunctionTypeStart,lib9.properties.codeInvalidInlineFunctionType);
            }
        }
        let value : string = token.stringValue;
        if ((core.identical('=',value)) || (core.identical(':',value))) {
            let equal : lib3.Token = token;
            token = this.parseExpression(token.next);
            this.listener.handleValuedFormalParameter(equal,token);
            if (parameterKind.isRequired) {
                this.reportRecoverableErrorCode(equal,lib9.properties.codeRequiredParameterWithDefault);
            }else if (parameterKind.isPositional && core.identical(':',value)) {
                this.reportRecoverableErrorCode(equal,lib9.properties.codePositionalParameterWithEquals);
            }
        }else {
            this.listener.handleFormalParameterWithoutValue(token);
        }
        this.listener.endFormalParameter(thisKeyword,nameToken,parameterKind,memberKind);
        return token;
    }
    parseOptionalFormalParameters(token : lib3.Token,isNamed : boolean,kind : MemberKind) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginOptionalFormalParameters(begin);
        /* TODO (AssertStatementImpl) : assert ((isNamed && optional('{', token)) || optional('[', token)); */;
        let parameterCount : number = 0;
        do{
            token = token.next;
            if (isNamed && optional('}',token)) {
                break;
            }else if (!isNamed && optional(']',token)) {
                break;
            }
            let type = isNamed ? FormalParameterType.NAMED : FormalParameterType.POSITIONAL;
            token = this.parseFormalParameter(token,type,kind);
            ++parameterCount;
        } while (optional(',',token));
        if (parameterCount == 0) {
            this.reportRecoverableErrorCode(token,isNamed ? lib9.properties.codeEmptyNamedParameterList : lib9.properties.codeEmptyOptionalParameterList);
        }
        this.listener.endOptionalFormalParameters(parameterCount,begin,token);
        if (isNamed) {
            return this.expect('}',token);
        }else {
            return this.expect(']',token);
        }
    }
    parseTypeOpt(token : lib3.Token) : lib3.Token {
        if (this.isGeneralizedFunctionType(token)) {
            return this.parseType(token);
        }
        token = this.listener.injectGenericCommentTypeAssign(token);
        let peek : lib3.Token = this.peekAfterIfType(token);
        if (peek != null && (peek.isIdentifier || optional('this',peek))) {
            return this.parseType(token);
        }
        this.listener.handleNoType(token);
        return token;
    }
    isValidTypeReference(token : lib3.Token) : boolean {
        let kind : number = token.kind;
        if (lib7.properties.IDENTIFIER_TOKEN == kind) return true;
        if (lib7.properties.KEYWORD_TOKEN == kind) {
            let value : string = token.type.lexeme;
            return token.type.isPseudo || (core.identical(value,'dynamic')) || (core.identical(value,'void'));
        }
        return false;
    }
    isValidMethodTypeArguments(token : lib3.Token) : boolean {
        return this.tryParseMethodTypeArguments(token) != null;
    }
    tryParseMethodTypeArguments(token : lib3.Token) : lib3.Token {
        if (!core.identical(token.kind,lib7.properties.LT_TOKEN)) return null;
        let beginToken : lib10.BeginGroupToken = token;
        let endToken : lib3.Token = beginToken.endGroup;
        if (op(Op.EQUALS,endToken,null) || !core.identical(endToken.next.kind,lib7.properties.OPEN_PAREN_TOKEN)) {
            return null;
        }
        token = this.tryParseType(token.next);
        while (token != null && core.identical(token.kind,lib7.properties.COMMA_TOKEN)){
            token = this.tryParseType(token.next);
        }
        if (op(Op.EQUALS,token,null) || !core.identical(token.kind,lib7.properties.GT_TOKEN)) return null;
        return token.next;
    }
    tryParseType(token : lib3.Token) : lib3.Token {
        token = this.tryParseQualified(token);
        if (op(Op.EQUALS,token,null)) return null;
        let tokenAfterQualified : lib3.Token = token;
        token = this.tryParseNestedTypeArguments(token);
        return op(Op.EQUALS,token,null) ? tokenAfterQualified : token;
    }
    tryParseQualified(token : lib3.Token) : lib3.Token {
        if (!this.isValidTypeReference(token)) return null;
        token = token.next;
        if (!core.identical(token.kind,lib7.properties.PERIOD_TOKEN)) return token;
        token = token.next;
        if (!core.identical(token.kind,lib7.properties.IDENTIFIER_TOKEN)) return null;
        return token.next;
    }
    tryParseNestedTypeArguments(token : lib3.Token) : lib3.Token {
        if (!core.identical(token.kind,lib7.properties.LT_TOKEN)) return null;
        token = this.tryParseType(token.next);
        while (token != null && core.identical(token.kind,lib7.properties.COMMA_TOKEN)){
            token = this.tryParseType(token.next);
        }
        if (op(Op.EQUALS,token,null)) return null;
        if (core.identical(token.kind,lib7.properties.GT_TOKEN)) return token.next;
        if (!core.identical(token.kind,lib7.properties.GT_GT_TOKEN)) return null;
        let syntheticToken : lib3.Token = new lib10.SymbolToken(lib3.TokenType.GT,token.charOffset + 1);
        syntheticToken.next = token.next;
        return syntheticToken;
    }
    parseQualified(token : lib3.Token,context : lib8.IdentifierContext,continuationContext : lib8.IdentifierContext) : lib3.Token {
        token = this.parseIdentifier(token,context);
        while (optional('.',token)){
            token = this.parseQualifiedRest(token,continuationContext);
        }
        return token;
    }
    parseQualifiedRestOpt(token : lib3.Token,continuationContext : lib8.IdentifierContext) : lib3.Token {
        if (optional('.',token)) {
            return this.parseQualifiedRest(token,continuationContext);
        }else {
            return token;
        }
    }
    parseQualifiedRest(token : lib3.Token,context : lib8.IdentifierContext) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('.', token)); */;
        let period : lib3.Token = token;
        token = this.parseIdentifier(token.next,context);
        this.listener.handleQualified(period);
        return token;
    }
    skipBlock(token : lib3.Token) : lib3.Token {
        if (!optional('{',token)) {
            return this.reportUnrecoverableErrorCode(token,lib9.properties.codeExpectedBlockToSkip).next;
        }
        let beginGroupToken : lib10.BeginGroupToken = token;
        let endGroup : lib3.Token = beginGroupToken.endGroup;
        if (op(Op.EQUALS,endGroup,null) || !core.identical(endGroup.kind,lib11.properties.$CLOSE_CURLY_BRACKET)) {
            return this.reportUnmatchedToken(beginGroupToken).next;
        }
        return beginGroupToken.endGroup;
    }
    parseEnum(token : lib3.Token) : lib3.Token {
        this.listener.beginEnum(token);
        let enumKeyword : lib3.Token = token;
        token = this.parseIdentifier(token.next,lib8.IdentifierContext.enumDeclaration);
        token = this.expect('{',token);
        let count : number = 0;
        if (!optional('}',token)) {
            token = this.parseIdentifier(token,lib8.IdentifierContext.enumValueDeclaration);
            count++;
            while (optional(',',token)){
                token = token.next;
                if (optional('}',token)) break;
                token = this.parseIdentifier(token,lib8.IdentifierContext.enumValueDeclaration);
                count++;
            }
        }
        let endBrace : lib3.Token = token;
        token = this.expect('}',token);
        this.listener.endEnum(enumKeyword,endBrace,count);
        return token;
    }
    parseClassOrNamedMixinApplication(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        let abstractKeyword : lib3.Token;
        let classKeyword : lib3.Token = token;
        if (optional('abstract',token)) {
            abstractKeyword = token;
            token = token.next;
            classKeyword = token;
        }
        /* TODO (AssertStatementImpl) : assert (optional('class', classKeyword)); */;
        let modifierCount : number = 0;
        if (abstractKeyword != null) {
            this.parseModifier(abstractKeyword);
            modifierCount++;
        }
        this.listener.handleModifiers(modifierCount);
        let isMixinApplication : boolean = optional('=',this.peekAfterNominalType(token));
        let name : lib3.Token = token.next;
        if (isMixinApplication) {
            token = this.parseIdentifier(name,lib8.IdentifierContext.namedMixinDeclaration);
            this.listener.beginNamedMixinApplication(begin,name);
        }else {
            token = this.parseIdentifier(name,lib8.IdentifierContext.classDeclaration);
            this.listener.beginClassDeclaration(begin,name);
        }
        token = this.parseTypeVariablesOpt(token);
        if (optional('=',token)) {
            let equals : lib3.Token = token;
            token = token.next;
            return this.parseNamedMixinApplication(token,begin,classKeyword,name,equals);
        }else {
            return this.parseClass(token,begin,classKeyword,name);
        }
    }
    parseNamedMixinApplication(token : lib3.Token,begin : lib3.Token,classKeyword : lib3.Token,name : lib3.Token,equals : lib3.Token) : lib3.Token {
        token = this.parseMixinApplication(token);
        let implementsKeyword : lib3.Token = null;
        if (optional('implements',token)) {
            implementsKeyword = token;
            token = this.parseTypeList(token.next);
        }
        this.listener.endNamedMixinApplication(begin,classKeyword,equals,implementsKeyword,token);
        return this.expect(';',token);
    }
    parseClass(token : lib3.Token,begin : lib3.Token,classKeyword : lib3.Token,name : lib3.Token) : lib3.Token {
        let extendsKeyword : lib3.Token;
        if (optional('extends',token)) {
            extendsKeyword = token;
            if (optional('with',this.peekAfterNominalType(token.next))) {
                token = this.parseMixinApplication(token.next);
            }else {
                token = this.parseType(token.next);
            }
        }else {
            extendsKeyword = null;
            this.listener.handleNoType(token);
        }
        let implementsKeyword : lib3.Token;
        let interfacesCount : number = 0;
        if (optional('implements',token)) {
            implementsKeyword = token;
            do{
                token = this.parseType(token.next);
                ++interfacesCount;
            } while (optional(',',token));
        }
        token = this.parseClassBody(token);
        this.listener.endClassDeclaration(interfacesCount,begin,classKeyword,extendsKeyword,implementsKeyword,token);
        return token.next;
    }
    parseStringPart(token : lib3.Token) : lib3.Token {
        if (token.kind != lib7.properties.STRING_TOKEN) {
            token = this.reportUnrecoverableErrorCodeWithToken(token,lib9.properties.codeExpectedString).next;
        }
        this.listener.handleStringPart(token);
        return token.next;
    }
    parseIdentifier(token : lib3.Token,context : lib8.IdentifierContext) : lib3.Token {
        if (!token.isIdentifier) {
            if (optional("void",token)) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeInvalidVoid);
            }else {
                token = this.reportUnrecoverableErrorCodeWithToken(token,lib9.properties.codeExpectedIdentifier).next;
            }
        }else if (token.type.isBuiltIn && !context.isBuiltInIdentifierAllowed) {
            if (context.inDeclaration) {
                this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeBuiltInIdentifierInDeclaration);
            }else if (!optional("dynamic",token)) {
                this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeBuiltInIdentifierAsType);
            }
        }else if (!this.inPlainSync && token.type.isPseudo) {
            if (optional('await',token)) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeAwaitAsIdentifier);
            }else if (optional('yield',token)) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeYieldAsIdentifier);
            }else if (optional('async',token)) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeAsyncAsIdentifier);
            }
        }
        this.listener.handleIdentifier(token,context);
        return token.next;
    }
    expect(string : string,token : lib3.Token) : lib3.Token {
        if (!core.identical(string,token.stringValue)) {
            return this.reportUnrecoverableErrorCodeWithString(token,lib9.properties.codeExpectedButGot,string).next;
        }
        return token.next;
    }
    parseTypeVariable(token : lib3.Token) : lib3.Token {
        this.listener.beginTypeVariable(token);
        token = this.parseMetadataStar(token);
        token = this.parseIdentifier(token,lib8.IdentifierContext.typeVariableDeclaration);
        let extendsOrSuper : lib3.Token = null;
        if (optional('extends',token) || optional('super',token)) {
            extendsOrSuper = token;
            token = this.parseType(token.next);
        }else {
            this.listener.handleNoType(token);
        }
        this.listener.endTypeVariable(token,extendsOrSuper);
        return token;
    }
    isOneOf3(token : lib3.Token,value1 : string,value2 : string,value3 : string) : boolean {
        let stringValue : string = token.stringValue;
        return core.identical(value1,stringValue) || core.identical(value2,stringValue) || core.identical(value3,stringValue);
    }
    isOneOf4(token : lib3.Token,value1 : string,value2 : string,value3 : string,value4 : string) : boolean {
        let stringValue : string = token.stringValue;
        return core.identical(value1,stringValue) || core.identical(value2,stringValue) || core.identical(value3,stringValue) || core.identical(value4,stringValue);
    }
    notEofOrValue(value : string,token : lib3.Token) : boolean {
        return !core.identical(token.kind,lib7.properties.EOF_TOKEN) && !core.identical(value,token.stringValue);
    }
    isGeneralizedFunctionType(token : lib3.Token) : boolean {
        return optional('Function',token) && (optional('<',token.next) || optional('(',token.next));
    }
    parseType(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        if (this.isGeneralizedFunctionType(token)) {
            this.listener.handleNoType(token);
        }else if (optional("void",token) && this.isGeneralizedFunctionType(token.next)) {
            this.listener.handleVoidKeyword(token);
            token = token.next;
        }else {
            let context : lib8.IdentifierContext = lib8.IdentifierContext.typeReference;
            if (token.isIdentifier && optional(".",token.next)) {
                context = lib8.IdentifierContext.prefixedTypeReference;
            }
            token = this.parseIdentifier(token,context);
            token = this.parseQualifiedRestOpt(token,lib8.IdentifierContext.typeReferenceContinuation);
            token = this.parseTypeArgumentsOpt(token);
            this.listener.handleType(begin,token);
        }
        {
            let newBegin : lib3.Token = this.listener.replaceTokenWithGenericCommentTypeAssign(begin,token);
            if (!core.identical(newBegin,begin)) {
                this.listener.discardTypeReplacedWithCommentTypeAssign();
                return this.parseType(newBegin);
            }
        }
        while (this.isGeneralizedFunctionType(token)){
            token = this.parseFunctionType(token);
        }
        return token;
    }
    parseFunctionType(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('Function', token)); */;
        let functionToken : lib3.Token = token;
        token = token.next;
        token = this.parseTypeVariablesOpt(token);
        token = this.parseFormalParameters(token,MemberKind.GeneralizedFunctionType);
        this.listener.handleFunctionType(functionToken,token);
        return token;
    }
    parseTypeArgumentsOpt(token : lib3.Token) : lib3.Token {
        return this.parseStuff(token,(t : any) =>  {
            return this.listener.beginTypeArguments(t);
        },(t : any) =>  {
            return this.parseType(t);
        },(c : any,bt : any,et : any) =>  {
            return this.listener.endTypeArguments(c,bt,et);
        },(t : any) =>  {
            return this.listener.handleNoTypeArguments(t);
        });
    }
    parseTypeVariablesOpt(token : lib3.Token) : lib3.Token {
        return this.parseStuff(token,(t : any) =>  {
            return this.listener.beginTypeVariables(t);
        },(t : any) =>  {
            return this.parseTypeVariable(t);
        },(c : any,bt : any,et : any) =>  {
            return this.listener.endTypeVariables(c,bt,et);
        },(t : any) =>  {
            return this.listener.handleNoTypeVariables(t);
        });
    }
    parseStuff(token : lib3.Token,beginStuff : Function,stuffParser : Function,endStuff : Function,handleNoStuff : Function) : lib3.Token {
        token = this.listener.injectGenericCommentTypeList(token);
        if (optional('<',token)) {
            let begin : lib3.Token = token;
            beginStuff(begin);
            let count : number = 0;
            do{
                token = stuffParser(token.next);
                ++count;
            } while (optional(',',token));
            let next : lib3.Token = token.next;
            if (core.identical(token.stringValue,'>>')) {
                token = new lib10.SymbolToken(lib3.TokenType.GT,token.charOffset);
                token.next = new lib10.SymbolToken(lib3.TokenType.GT,token.charOffset + 1);
                token.next.next = next;
            }
            endStuff(count,begin,token);
            return this.expect('>',token);
        }
        handleNoStuff(token);
        return token;
    }
    parseTopLevelMember(token : lib3.Token) : lib3.Token {
        let start : lib3.Token = token;
        this.listener.beginTopLevelMember(token);
        let identifiers : lib12.Link<lib3.Token> = this.findMemberName(token);
        if (identifiers.isEmpty) {
            return this.reportUnrecoverableErrorCodeWithToken(start,lib9.properties.codeExpectedDeclaration).next;
        }
        let afterName : lib3.Token = identifiers.head;
        identifiers = identifiers.tail;
        if (identifiers.isEmpty) {
            return this.reportUnrecoverableErrorCodeWithToken(start,lib9.properties.codeExpectedDeclaration).next;
        }
        let name : lib3.Token = identifiers.head;
        identifiers = identifiers.tail;
        let getOrSet : lib3.Token;
        if (!identifiers.isEmpty) {
            let value : string = identifiers.head.stringValue;
            if ((core.identical(value,'get')) || (core.identical(value,'set'))) {
                getOrSet = identifiers.head;
                identifiers = identifiers.tail;
            }
        }
        let type : lib3.Token;
        if (!identifiers.isEmpty) {
            if (this.isValidTypeReference(identifiers.head)) {
                type = identifiers.head;
                identifiers = identifiers.tail;
            }
        }
        token = afterName;
        let isField : boolean;
        while (true){
            let value : string = token.stringValue;
            if ((core.identical(value,'(')) || (core.identical(value,'{')) || (core.identical(value,'=>'))) {
                isField = false;
                break;
            }else if ((core.identical(value,'=')) || (core.identical(value,','))) {
                isField = true;
                break;
            }else if (core.identical(value,';')) {
                if (getOrSet != null) {
                    isField = (!core.identical(getOrSet.stringValue,'get'));
                }else {
                    isField = true;
                }
                break;
            }else {
                token = this.reportUnexpectedToken(token).next;
                if (core.identical(token.kind,lib7.properties.EOF_TOKEN)) return token;
            }
        }
        let modifiers = identifiers.reverse();
        return isField ? this.parseFields(start,modifiers,type,getOrSet,name,true) : this.parseTopLevelMethod(start,modifiers,type,getOrSet,name);
    }
    parseFields(start : lib3.Token,modifiers : lib12.Link<lib3.Token>,type : lib3.Token,getOrSet : lib3.Token,name : lib3.Token,isTopLevel : boolean) : lib3.Token {
        let token : lib3.Token = this.parseModifiers(start,isTopLevel ? MemberKind.TopLevelField : MemberKind.NonStaticField,{
            isVariable : true});
        if (token != name) {
            this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
            token = name;
        }
        let context : lib8.IdentifierContext = isTopLevel ? lib8.IdentifierContext.topLevelVariableDeclaration : lib8.IdentifierContext.fieldDeclaration;
        token = this.parseIdentifier(token,context);
        let fieldCount : number = 1;
        token = this.parseFieldInitializerOpt(token);
        while (optional(',',token)){
            token = this.parseIdentifier(token.next,context);
            token = this.parseFieldInitializerOpt(token);
            ++fieldCount;
        }
        let semicolon : lib3.Token = token;
        token = this.expectSemicolon(token);
        if (isTopLevel) {
            this.listener.endTopLevelFields(fieldCount,start,semicolon);
        }else {
            this.listener.endFields(fieldCount,start,semicolon);
        }
        return token;
    }
    parseTopLevelMethod(start : lib3.Token,modifiers : lib12.Link<lib3.Token>,type : lib3.Token,getOrSet : lib3.Token,name : lib3.Token) : lib3.Token {
        this.listener.beginTopLevelMethod(start,name);
        let externalModifier : lib3.Token;
        for(let modifier of modifiers) {
            if (op(Op.EQUALS,externalModifier,null) && optional('external',modifier)) {
                externalModifier = modifier;
            }else {
                this.reportRecoverableErrorCodeWithToken(modifier,lib9.properties.codeExtraneousModifier);
            }
        }
        if (externalModifier != null) {
            this.parseModifier(externalModifier);
            this.listener.handleModifiers(1);
        }else {
            this.listener.handleModifiers(0);
        }
        if (op(Op.EQUALS,type,null)) {
            this.listener.handleNoType(name);
        }else {
            this.parseReturnTypeOpt(type);
        }
        let token : lib3.Token = this.parseIdentifier(name,lib8.IdentifierContext.topLevelFunctionDeclaration);
        if (op(Op.EQUALS,getOrSet,null)) {
            token = this.parseTypeVariablesOpt(token);
        }else {
            this.listener.handleNoTypeVariables(token);
        }
        token = this.parseFormalParametersOpt(token,MemberKind.TopLevelMethod);
        let savedAsyncModifier : lib6.AsyncModifier = this.asyncState;
        let asyncToken : lib3.Token = token;
        token = this.parseAsyncModifier(token);
        if (getOrSet != null && !this.inPlainSync && optional("set",getOrSet)) {
            this.reportRecoverableErrorCode(asyncToken,lib9.properties.codeSetterNotSync);
        }
        token = this.parseFunctionBody(token,false,externalModifier != null);
        this.asyncState = savedAsyncModifier;
        let endToken : lib3.Token = token;
        token = token.next;
        this.listener.endTopLevelMethod(start,getOrSet,endToken);
        return token;
    }
    findMemberName(token : lib3.Token) : lib12.Link<lib3.Token> {
        let identifiers : lib12.Link<lib3.Token> = new lib12.Link<lib3.Token>();
        let isGetter : boolean = false;
        let hasName : boolean = false;
        while (token.kind != lib7.properties.EOF_TOKEN){
            if (optional('get',token)) {
                isGetter = true;
            }else if (hasName && (optional("sync",token) || optional("async",token))) {
                token = token.next;
                if (optional("*",token)) {
                    token = token.next;
                }
                continue;
            }else if (optional("(",token) || optional("{",token) || optional("=>",token)) {
                identifiers = identifiers.prepend(token);
                return this.listener.handleMemberName(identifiers);
            }else if (optional("=",token) || optional(";",token) || optional(",",token)) {
                identifiers = identifiers.prepend(token);
                return this.listener.handleMemberName(identifiers);
            }else if (isGetter) {
                hasName = true;
            }
            token = this.listener.injectGenericCommentTypeAssign(token);
            identifiers = identifiers.prepend(token);
            if (!this.isGeneralizedFunctionType(token)) {
                if (this.isValidTypeReference(token)) {
                    let type : lib3.Token = token;
                    if (optional('.',token.next)) {
                        if (token.next.next.isIdentifier) {
                            token = token.next.next;
                        }
                    }
                    if (optional('<',token.next)) {
                        if (is(token.next, lib10.BeginGroupToken)) {
                            let beginGroup : lib10.BeginGroupToken = token.next;
                            if (op(Op.EQUALS,beginGroup.endGroup,null)) {
                                token = this.reportUnmatchedToken(beginGroup).next;
                            }else {
                                token = beginGroup.endGroup;
                            }
                        }
                    }
                    {
                        let newType : lib3.Token = this.listener.replaceTokenWithGenericCommentTypeAssign(type,token.next);
                        if (!core.identical(newType,type)) {
                            identifiers = identifiers.tail;
                            token = newType;
                            continue;
                        }
                    }
                }
                token = token.next;
            }
            while (this.isGeneralizedFunctionType(token)){
                token = token.next;
                if (optional('<',token)) {
                    if (is(token, lib10.BeginGroupToken)) {
                        let beginGroup : lib10.BeginGroupToken = token;
                        if (op(Op.EQUALS,beginGroup.endGroup,null)) {
                            token = this.reportUnmatchedToken(beginGroup).next;
                        }else {
                            token = beginGroup.endGroup.next;
                        }
                    }
                }
                if (!optional('(',token)) {
                    if (optional(';',token)) {
                        this.reportRecoverableErrorCode(token,lib9.properties.codeExpectedOpenParens);
                    }
                    token = this.expect("(",token);
                }
                if (is(token, lib10.BeginGroupToken)) {
                    let beginGroup : lib10.BeginGroupToken = token;
                    if (op(Op.EQUALS,beginGroup.endGroup,null)) {
                        token = this.reportUnmatchedToken(beginGroup).next;
                    }else {
                        token = beginGroup.endGroup.next;
                    }
                }
            }
        }
        return this.listener.handleMemberName(new lib12.Link<lib3.Token>());
    }
    parseFieldInitializerOpt(token : lib3.Token) : lib3.Token {
        if (optional('=',token)) {
            let assignment : lib3.Token = token;
            this.listener.beginFieldInitializer(token);
            token = this.parseExpression(token.next);
            this.listener.endFieldInitializer(assignment,token);
        }else {
            this.listener.handleNoFieldInitializer(token);
        }
        return token;
    }
    parseVariableInitializerOpt(token : lib3.Token) : lib3.Token {
        if (optional('=',token)) {
            let assignment : lib3.Token = token;
            this.listener.beginVariableInitializer(token);
            token = this.parseExpression(token.next);
            this.listener.endVariableInitializer(assignment);
        }else {
            this.listener.handleNoVariableInitializer(token);
        }
        return token;
    }
    parseInitializersOpt(token : lib3.Token) : lib3.Token {
        if (optional(':',token)) {
            return this.parseInitializers(token);
        }else {
            this.listener.handleNoInitializers();
            return token;
        }
    }
    parseInitializers(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginInitializers(begin);
        this.expect(':',token);
        let count : number = 0;
        let old : boolean = this.mayParseFunctionExpressions;
        this.mayParseFunctionExpressions = false;
        do{
            token = token.next;
            this.listener.beginInitializer(token);
            token = this.parseExpression(token);
            this.listener.endInitializer(token);
            ++count;
        } while (optional(',',token));
        this.mayParseFunctionExpressions = old;
        this.listener.endInitializers(count,begin,token);
        return token;
    }
    parseLiteralStringOrRecoverExpression(token : lib3.Token) : lib3.Token {
        if (core.identical(token.kind,lib7.properties.STRING_TOKEN)) {
            return this.parseLiteralString(token);
        }else {
            this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExpectedString);
            return this.parseRecoverExpression(token);
        }
    }
    expectSemicolon(token : lib3.Token) : lib3.Token {
        return this.expect(';',token);
    }
    isModifier(token : lib3.Token) : boolean {
        return this.modifierOrder(token) < 127;
    }
    modifierOrder(token : lib3.Token) : number {
        let value : string = token.stringValue;
        if (core.identical('external',value)) return 0;
        if (core.identical('static',value) || core.identical('covariant',value)) {
            return 1;
        }
        if (core.identical('final',value) || core.identical('var',value) || core.identical('const',value)) {
            return 2;
        }
        if (core.identical('abstract',value)) return 3;
        return 127;
    }
    parseModifier(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (isModifier(token)); */;
        this.listener.handleModifier(token);
        return token.next;
    }
    parseModifiers(token : lib3.Token,memberKind : MemberKind,_namedArguments? : {parameterKind? : FormalParameterType,isVariable? : boolean}) : lib3.Token {
        let {parameterKind,isVariable} = Object.assign({
            "isVariable" : false}, _namedArguments );
        let returnTypeAllowed : boolean = !isVariable && memberKind != MemberKind.GeneralizedFunctionType;
        let typeRequired : boolean = isVariable || op(Op.EQUALS,memberKind,MemberKind.GeneralizedFunctionType);
        let count : number = 0;
        let currentOrder : number = -1;
        let hasVar : boolean = false;
        while (token.kind == lib7.properties.KEYWORD_TOKEN){
            if (token.type.isPseudo) {
                break;
            }
            if (token.type.isBuiltIn) {
                if (token.next.kind != lib7.properties.KEYWORD_TOKEN && !token.next.isIdentifier) {
                    break;
                }
            }
            let order : number = this.modifierOrder(token);
            if (order < 3) {
                if (order > currentOrder) {
                    currentOrder = order;
                    if (optional("var",token)) {
                        if (!isVariable && op(Op.EQUALS,parameterKind,null)) {
                            this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                        }
                        hasVar = true;
                        typeRequired = false;
                    }else if (optional("final",token)) {
                        if (!isVariable && op(Op.EQUALS,parameterKind,null)) {
                            this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                        }
                        typeRequired = false;
                    }else if (optional("const",token)) {
                        if (!isVariable) {
                            this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                        }
                        typeRequired = false;
                    }else if (optional("static",token)) {
                        if (op(Op.EQUALS,memberKind,MemberKind.NonStaticMethod)) {
                            memberKind = MemberKind.StaticMethod;
                        }else if (op(Op.EQUALS,memberKind,MemberKind.NonStaticField)) {
                            memberKind = MemberKind.StaticField;
                        }else {
                            this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                            token = token.next;
                            continue;
                        }
                    }else if (optional("covariant",token)) {
                        switch (memberKind) {
                            case MemberKind.StaticField:
                            case MemberKind.StaticMethod:
                            case MemberKind.TopLevelField:
                            case MemberKind.TopLevelMethod:
                                this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                                token = token.next;
                                continue;
                            default:
                                break;
                        }
                    }else if (optional("external",token)) {
                        switch (memberKind) {
                            case MemberKind.Factory:
                            case MemberKind.NonStaticMethod:
                            case MemberKind.StaticMethod:
                            case MemberKind.TopLevelMethod:
                                break;
                            default:
                                this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                                token = token.next;
                                continue;
                        }
                    }
                    token = this.parseModifier(token);
                    count++;
                }else {
                    this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                    token = token.next;
                }
            }else {
                break;
            }
        }
        this.listener.handleModifiers(count);
        let beforeType : lib3.Token = token;
        if (returnTypeAllowed) {
            token = this.parseReturnTypeOpt(token);
        }else {
            token = typeRequired ? this.parseType(token) : this.parseTypeOpt(token);
        }
        if (typeRequired && op(Op.EQUALS,beforeType,token)) {
            this.reportRecoverableErrorCode(token,lib9.properties.codeTypeRequired);
        }
        if (hasVar && beforeType != token) {
            this.reportRecoverableErrorCode(beforeType,lib9.properties.codeTypeAfterVar);
        }
        return token;
    }
    peekAfterType(token : lib3.Token) : lib3.Token {
        let peek : lib3.Token = token;
        if (!this.isGeneralizedFunctionType(token)) {
            peek = this.peekAfterNominalType(token);
        }
        while (this.isGeneralizedFunctionType(peek)){
            peek = this.peekAfterFunctionType(peek.next);
        }
        return peek;
    }
    peekAfterNominalType(token : lib3.Token) : lib3.Token {
        let peek : lib3.Token = token.next;
        if (core.identical(peek.kind,lib7.properties.PERIOD_TOKEN)) {
            if (peek.next.isIdentifier) {
                peek = peek.next.next;
            }
        }
        if (core.identical(peek.kind,lib7.properties.LT_TOKEN)) {
            let beginGroupToken : lib10.BeginGroupToken = peek;
            let gtToken : lib3.Token = beginGroupToken.endGroup;
            if (gtToken != null) {
                peek = gtToken.next;
            }
        }
        return peek;
    }
    peekAfterFunctionType(token : lib3.Token) : lib3.Token {
        let peek : lib3.Token = token;
        if (core.identical(peek.kind,lib7.properties.LT_TOKEN)) {
            let beginGroupToken : lib10.BeginGroupToken = peek;
            let closeToken : lib3.Token = beginGroupToken.endGroup;
            if (closeToken != null) {
                peek = closeToken.next;
            }
        }
        this.expect('(',peek);
        let beginGroupToken : lib10.BeginGroupToken = peek;
        let closeToken : lib3.Token = beginGroupToken.endGroup;
        if (closeToken != null) {
            peek = closeToken.next;
        }
        return peek;
    }
    peekAfterIfType(token : lib3.Token) : lib3.Token {
        if (!optional('void',token) && !token.isIdentifier) {
            return null;
        }
        return this.peekAfterType(token);
    }
    skipClassBody(token : lib3.Token) : lib3.Token {
        if (!optional('{',token)) {
            return this.reportUnrecoverableErrorCodeWithToken(token,lib9.properties.codeExpectedClassBodyToSkip).next;
        }
        let beginGroupToken : lib10.BeginGroupToken = token;
        let endGroup : lib3.Token = beginGroupToken.endGroup;
        if (op(Op.EQUALS,endGroup,null) || !core.identical(endGroup.kind,lib11.properties.$CLOSE_CURLY_BRACKET)) {
            return this.reportUnmatchedToken(beginGroupToken).next;
        }
        return endGroup;
    }
    parseClassBody(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginClassBody(token);
        if (!optional('{',token)) {
            token = this.reportUnrecoverableErrorCodeWithToken(token,lib9.properties.codeExpectedClassBody).next;
        }
        token = token.next;
        let count : number = 0;
        while (this.notEofOrValue('}',token)){
            token = this.parseMember(token);
            ++count;
        }
        this.expect('}',token);
        this.listener.endClassBody(count,begin,token);
        return token;
    }
    isGetOrSet(token : lib3.Token) : boolean {
        let value : string = token.stringValue;
        return (core.identical(value,'get')) || (core.identical(value,'set'));
    }
    isFactoryDeclaration(token : lib3.Token) : boolean {
        if (optional('external',token)) token = token.next;
        if (optional('const',token)) token = token.next;
        return optional('factory',token);
    }
    parseMember(token : lib3.Token) : lib3.Token {
        token = this.parseMetadataStar(token);
        let start : lib3.Token = token;
        this.listener.beginMember(token);
        if (this.isFactoryDeclaration(token)) {
            token = this.parseFactoryMethod(token);
            this.listener.endMember();
            /* TODO (AssertStatementImpl) : assert (token != null); */;
            return token;
        }
        let identifiers : lib12.Link<lib3.Token> = this.findMemberName(token);
        if (identifiers.isEmpty) {
            return this.reportUnrecoverableErrorCodeWithToken(start,lib9.properties.codeExpectedDeclaration).next;
        }
        let afterName : lib3.Token = identifiers.head;
        identifiers = identifiers.tail;
        if (identifiers.isEmpty) {
            return this.reportUnrecoverableErrorCodeWithToken(start,lib9.properties.codeExpectedDeclaration).next;
        }
        let name : lib3.Token = identifiers.head;
        identifiers = identifiers.tail;
        if (!identifiers.isEmpty) {
            if (optional('operator',identifiers.head)) {
                name = identifiers.head;
                identifiers = identifiers.tail;
            }
        }
        let getOrSet : lib3.Token;
        if (!identifiers.isEmpty) {
            if (this.isGetOrSet(identifiers.head)) {
                getOrSet = identifiers.head;
                identifiers = identifiers.tail;
            }
        }
        let type : lib3.Token;
        if (!identifiers.isEmpty) {
            if (this.isValidTypeReference(identifiers.head)) {
                type = identifiers.head;
                identifiers = identifiers.tail;
            }
        }
        token = afterName;
        let isField : boolean;
        while (true){
            let value : string = token.stringValue;
            if ((core.identical(value,'(')) || (core.identical(value,'.')) || (core.identical(value,'{')) || (core.identical(value,'=>')) || (core.identical(value,'<'))) {
                isField = false;
                break;
            }else if (core.identical(value,';')) {
                if (getOrSet != null) {
                    isField = !optional("get",getOrSet);
                }else {
                    isField = true;
                }
                break;
            }else if ((core.identical(value,'=')) || (core.identical(value,','))) {
                isField = true;
                break;
            }else {
                token = this.reportUnexpectedToken(token).next;
                if (core.identical(token.kind,lib7.properties.EOF_TOKEN)) {
                    this.listener.endFields(1,start,token);
                    this.listener.endMember();
                    return token;
                }
            }
        }
        let modifiers = identifiers.reverse();
        token = isField ? this.parseFields(start,modifiers,type,getOrSet,name,false) : this.parseMethod(start,modifiers,type,getOrSet,name);
        this.listener.endMember();
        return token;
    }
    parseMethod(start : lib3.Token,modifiers : lib12.Link<lib3.Token>,type : lib3.Token,getOrSet : lib3.Token,name : lib3.Token) : lib3.Token {
        this.listener.beginMethod(start,name);
        let externalModifier : lib3.Token;
        let staticModifier : lib3.Token;
        var parseModifierList : (tokens : lib12.Link<lib3.Token>) => void = (tokens : lib12.Link<lib3.Token>) : void =>  {
            let count : number = 0;
            let currentOrder : number = -1;
            for(; !tokens.isEmpty; tokens = tokens.tail){
                let token : lib3.Token = tokens.head;
                if (optional("abstract",token)) {
                    this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                    continue;
                }
                let order : number = this.modifierOrder(token);
                if (order < 127) {
                    if (order > currentOrder) {
                        currentOrder = order;
                        if (optional("var",token)) {
                            this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                        }else if (optional("const",token)) {
                            if (getOrSet != null) {
                                this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                                continue;
                            }
                        }else if (optional("external",token)) {
                            externalModifier = token;
                        }else if (optional("static",token)) {
                            staticModifier = token;
                        }else if (optional("covariant",token)) {
                            if (staticModifier != null || op(Op.EQUALS,getOrSet,null) || optional("get",getOrSet)) {
                                this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                                continue;
                            }
                        }
                    }else {
                        this.reportRecoverableErrorCodeWithToken(token,lib9.properties.codeExtraneousModifier);
                        continue;
                    }
                }else {
                    this.reportUnexpectedToken(token);
                    break;
                }
                this.parseModifier(token);
                count++;
            }
            this.listener.handleModifiers(count);
        };
        parseModifierList(modifiers);
        if (op(Op.EQUALS,type,null)) {
            this.listener.handleNoType(name);
        }else {
            this.parseReturnTypeOpt(type);
        }
        let token : lib3.Token;
        if (optional('operator',name)) {
            token = this.parseOperatorName(name);
            if (staticModifier != null) {
                this.reportRecoverableErrorCodeWithToken(staticModifier,lib9.properties.codeExtraneousModifier);
            }
        }else {
            token = this.parseIdentifier(name,lib8.IdentifierContext.methodDeclaration);
        }
        token = this.parseQualifiedRestOpt(token,lib8.IdentifierContext.methodDeclarationContinuation);
        if (op(Op.EQUALS,getOrSet,null)) {
            token = this.parseTypeVariablesOpt(token);
        }else {
            this.listener.handleNoTypeVariables(token);
        }
        token = this.parseFormalParametersOpt(token,staticModifier != null ? MemberKind.StaticMethod : MemberKind.NonStaticMethod);
        token = this.parseInitializersOpt(token);
        let savedAsyncModifier : lib6.AsyncModifier = this.asyncState;
        let asyncToken : lib3.Token = token;
        token = this.parseAsyncModifier(token);
        if (getOrSet != null && !this.inPlainSync && optional("set",getOrSet)) {
            this.reportRecoverableErrorCode(asyncToken,lib9.properties.codeSetterNotSync);
        }
        if (optional('=',token)) {
            token = this.parseRedirectingFactoryBody(token);
        }else {
            token = this.parseFunctionBody(token,false,op(Op.EQUALS,staticModifier,null) || externalModifier != null);
        }
        this.asyncState = savedAsyncModifier;
        this.listener.endMethod(getOrSet,start,token);
        return token.next;
    }
    parseFactoryMethod(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (isFactoryDeclaration(token)); */;
        let start : lib3.Token = token;
        let isExternal : boolean = false;
        let modifierCount : number = 0;
        while (this.isModifier(token)){
            if (optional('external',token)) {
                isExternal = true;
            }
            token = this.parseModifier(token);
            modifierCount++;
        }
        this.listener.handleModifiers(modifierCount);
        let factoryKeyword : lib3.Token = token;
        this.listener.beginFactoryMethod(factoryKeyword);
        token = this.expect('factory',token);
        token = this.parseConstructorReference(token);
        token = this.parseFormalParameters(token,MemberKind.Factory);
        let asyncToken : lib3.Token = token;
        token = this.parseAsyncModifier(token);
        if (!this.inPlainSync) {
            this.reportRecoverableErrorCode(asyncToken,lib9.properties.codeFactoryNotSync);
        }
        if (optional('=',token)) {
            token = this.parseRedirectingFactoryBody(token);
        }else {
            token = this.parseFunctionBody(token,false,isExternal);
        }
        this.listener.endFactoryMethod(start,factoryKeyword,token);
        return token.next;
    }
    parseOperatorName(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('operator', token)); */;
        if (lib10.isUserDefinableOperator(token.next.stringValue)) {
            let operator : lib3.Token = token;
            token = token.next;
            this.listener.handleOperatorName(operator,token);
            return token.next;
        }else {
            return this.parseIdentifier(token,lib8.IdentifierContext.operatorName);
        }
    }
    parseFunction(token : lib3.Token) : lib3.Token {
        let beginToken : lib3.Token = token;
        this.listener.beginFunction(token);
        token = this.parseModifiers(token,MemberKind.Local);
        this.listener.beginFunctionName(token);
        token = this.parseIdentifier(token,lib8.IdentifierContext.localFunctionDeclaration);
        token = this.parseQualifiedRestOpt(token,lib8.IdentifierContext.localFunctionDeclarationContinuation);
        this.listener.endFunctionName(beginToken,token);
        token = this.parseTypeVariablesOpt(token);
        token = this.parseFormalParametersOpt(token,MemberKind.Local);
        token = this.parseInitializersOpt(token);
        let savedAsyncModifier : lib6.AsyncModifier = this.asyncState;
        token = this.parseAsyncModifier(token);
        token = this.parseFunctionBody(token,false,true);
        this.asyncState = savedAsyncModifier;
        this.listener.endFunction(null,token);
        return token.next;
    }
    parseUnnamedFunction(token : lib3.Token) : lib3.Token {
        let beginToken : lib3.Token = token;
        this.listener.beginUnnamedFunction(token);
        token = this.parseFormalParameters(token,MemberKind.Local);
        let savedAsyncModifier : lib6.AsyncModifier = this.asyncState;
        token = this.parseAsyncModifier(token);
        let isBlock : boolean = optional('{',token);
        token = this.parseFunctionBody(token,true,false);
        this.asyncState = savedAsyncModifier;
        this.listener.endUnnamedFunction(beginToken,token);
        return isBlock ? token.next : token;
    }
    parseFunctionDeclaration(token : lib3.Token) : lib3.Token {
        this.listener.beginFunctionDeclaration(token);
        token = this.parseFunction(token);
        this.listener.endFunctionDeclaration(token);
        return token;
    }
    parseFunctionExpression(token : lib3.Token) : lib3.Token {
        let beginToken : lib3.Token = token;
        this.listener.beginFunction(token);
        this.listener.handleModifiers(0);
        token = this.parseReturnTypeOpt(token);
        this.listener.beginFunctionName(token);
        token = this.parseIdentifier(token,lib8.IdentifierContext.functionExpressionName);
        this.listener.endFunctionName(beginToken,token);
        token = this.parseTypeVariablesOpt(token);
        token = this.parseFormalParameters(token,MemberKind.Local);
        this.listener.handleNoInitializers();
        let savedAsyncModifier : lib6.AsyncModifier = this.asyncState;
        token = this.parseAsyncModifier(token);
        let isBlock : boolean = optional('{',token);
        token = this.parseFunctionBody(token,true,false);
        this.asyncState = savedAsyncModifier;
        this.listener.endFunction(null,token);
        return isBlock ? token.next : token;
    }
    parseConstructorReference(token : lib3.Token) : lib3.Token {
        let start : lib3.Token = token;
        this.listener.beginConstructorReference(start);
        token = this.parseIdentifier(token,lib8.IdentifierContext.constructorReference);
        token = this.parseQualifiedRestOpt(token,lib8.IdentifierContext.constructorReferenceContinuation);
        token = this.parseTypeArgumentsOpt(token);
        let period : lib3.Token = null;
        if (optional('.',token)) {
            period = token;
            token = this.parseIdentifier(token.next,lib8.IdentifierContext.constructorReferenceContinuationAfterTypeArguments);
        }else {
            this.listener.handleNoConstructorReferenceContinuationAfterTypeArguments(token);
        }
        this.listener.endConstructorReference(start,period,token);
        return token;
    }
    parseRedirectingFactoryBody(token : lib3.Token) : lib3.Token {
        this.listener.beginRedirectingFactoryBody(token);
        /* TODO (AssertStatementImpl) : assert (optional('=', token)); */;
        let equals : lib3.Token = token;
        token = this.parseConstructorReference(token.next);
        let semicolon : lib3.Token = token;
        this.expectSemicolon(token);
        this.listener.endRedirectingFactoryBody(equals,semicolon);
        return token;
    }
    skipFunctionBody(token : lib3.Token,isExpression : boolean,allowAbstract : boolean) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (!isExpression); */;
        token = this.skipAsyncModifier(token);
        let value : string = token.stringValue;
        if (core.identical(value,';')) {
            if (!allowAbstract) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeExpectedBody);
            }
            this.listener.handleNoFunctionBody(token);
        }else {
            if (core.identical(value,'=>')) {
                token = this.parseExpression(token.next);
                this.expectSemicolon(token);
                this.listener.handleFunctionBodySkipped(token,true);
            }else if (core.identical(value,'=')) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeExpectedBody);
                token = this.parseExpression(token.next);
                this.expectSemicolon(token);
                this.listener.handleFunctionBodySkipped(token,true);
            }else {
                token = this.skipBlock(token);
                this.listener.handleFunctionBodySkipped(token,false);
            }
        }
        return token;
    }
    parseFunctionBody(token : lib3.Token,isExpression : boolean,allowAbstract : boolean) : lib3.Token {
        if (optional(';',token)) {
            if (!allowAbstract) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeExpectedBody);
            }
            this.listener.handleEmptyFunctionBody(token);
            return token;
        }else if (optional('=>',token)) {
            let begin : lib3.Token = token;
            token = this.parseExpression(token.next);
            if (!isExpression) {
                this.expectSemicolon(token);
                this.listener.handleExpressionFunctionBody(begin,token);
            }else {
                this.listener.handleExpressionFunctionBody(begin,null);
            }
            return token;
        }else if (optional('=',token)) {
            let begin : lib3.Token = token;
            this.reportRecoverableErrorCode(token,lib9.properties.codeExpectedBody);
            token = this.parseExpression(token.next);
            if (!isExpression) {
                this.expectSemicolon(token);
                this.listener.handleExpressionFunctionBody(begin,token);
            }else {
                this.listener.handleExpressionFunctionBody(begin,null);
            }
            return token;
        }
        let begin : lib3.Token = token;
        let statementCount : number = 0;
        if (!optional('{',token)) {
            token = this.reportUnrecoverableErrorCodeWithToken(token,lib9.properties.codeExpectedFunctionBody).next;
            this.listener.handleInvalidFunctionBody(token);
            return token;
        }
        this.listener.beginBlockFunctionBody(begin);
        token = token.next;
        while (this.notEofOrValue('}',token)){
            token = this.parseStatement(token);
            ++statementCount;
        }
        this.listener.endBlockFunctionBody(statementCount,begin,token);
        this.expect('}',token);
        return token;
    }
    skipAsyncModifier(token : lib3.Token) : lib3.Token {
        let value : string = token.stringValue;
        if (core.identical(value,'async')) {
            token = token.next;
            value = token.stringValue;
            if (core.identical(value,'*')) {
                token = token.next;
            }
        }else if (core.identical(value,'sync')) {
            token = token.next;
            value = token.stringValue;
            if (core.identical(value,'*')) {
                token = token.next;
            }
        }
        return token;
    }
    parseAsyncModifier(token : lib3.Token) : lib3.Token {
        let async : lib3.Token;
        let star : lib3.Token;
        this.asyncState = lib6.AsyncModifier.Sync;
        if (optional('async',token)) {
            async = token;
            token = token.next;
            if (optional('*',token)) {
                this.asyncState = lib6.AsyncModifier.AsyncStar;
                star = token;
                token = token.next;
            }else {
                this.asyncState = lib6.AsyncModifier.Async;
            }
        }else if (optional('sync',token)) {
            async = token;
            token = token.next;
            if (optional('*',token)) {
                this.asyncState = lib6.AsyncModifier.SyncStar;
                star = token;
                token = token.next;
            }else {
                this.reportRecoverableErrorCode(async,lib9.properties.codeInvalidSyncModifier);
            }
        }
        this.listener.handleAsyncModifier(async,star);
        if (this.inGenerator && optional('=>',token)) {
            this.reportRecoverableErrorCode(token,lib9.properties.codeGeneratorReturnsValue);
        }else if (!this.inPlainSync && optional(';',token)) {
            this.reportRecoverableErrorCode(token,lib9.properties.codeAbstractNotSync);
        }
        return token;
    }
    statementDepth : number;

    parseStatement(token : lib3.Token) : lib3.Token {
        if (this.statementDepth++ > 500) {
            return this.reportUnrecoverableErrorCode(token,lib9.properties.codeStackOverflow).next;
        }
        let result : lib3.Token = this.parseStatementX(token);
        this.statementDepth--;
        return result;
    }
    parseStatementX(token : lib3.Token) : lib3.Token {
        let value = token.stringValue;
        if (core.identical(token.kind,lib7.properties.IDENTIFIER_TOKEN)) {
            return this.parseExpressionStatementOrDeclaration(token);
        }else if (core.identical(value,'{')) {
            return this.parseBlock(token);
        }else if (core.identical(value,'return')) {
            return this.parseReturnStatement(token);
        }else if (core.identical(value,'var') || core.identical(value,'final')) {
            return this.parseVariablesDeclaration(token);
        }else if (core.identical(value,'if')) {
            return this.parseIfStatement(token);
        }else if (core.identical(value,'await') && optional('for',token.next)) {
            if (!this.inAsync) {
                this.reportRecoverableErrorCode(token,lib9.properties.codeAwaitForNotAsync);
            }
            return this.parseForStatement(token,token.next);
        }else if (core.identical(value,'for')) {
            return this.parseForStatement(null,token);
        }else if (core.identical(value,'rethrow')) {
            return this.parseRethrowStatement(token);
        }else if (core.identical(value,'throw') && optional(';',token.next)) {
            return this.parseRethrowStatement(token);
        }else if (core.identical(value,'void')) {
            return this.parseExpressionStatementOrDeclaration(token);
        }else if (core.identical(value,'while')) {
            return this.parseWhileStatement(token);
        }else if (core.identical(value,'do')) {
            return this.parseDoWhileStatement(token);
        }else if (core.identical(value,'try')) {
            return this.parseTryStatement(token);
        }else if (core.identical(value,'switch')) {
            return this.parseSwitchStatement(token);
        }else if (core.identical(value,'break')) {
            return this.parseBreakStatement(token);
        }else if (core.identical(value,'continue')) {
            return this.parseContinueStatement(token);
        }else if (core.identical(value,'assert')) {
            return this.parseAssertStatement(token);
        }else if (core.identical(value,';')) {
            return this.parseEmptyStatement(token);
        }else if (core.identical(value,'yield')) {
            switch (this.asyncState) {
                case lib6.AsyncModifier.Sync:
                    return this.parseExpressionStatementOrDeclaration(token);
                case lib6.AsyncModifier.SyncStar:
                case lib6.AsyncModifier.AsyncStar:
                    return this.parseYieldStatement(token);
                case lib6.AsyncModifier.Async:
                    this.reportRecoverableErrorCode(token,lib9.properties.codeYieldNotGenerator);
                    return this.parseYieldStatement(token);
            }
            throw `Internal error: Unknown asyncState: '${this.asyncState}'.`;
        }else if (core.identical(value,'const')) {
            return this.parseExpressionStatementOrConstDeclaration(token);
        }else if (token.isIdentifier) {
            return this.parseExpressionStatementOrDeclaration(token);
        }else {
            return this.parseExpressionStatement(token);
        }
    }
    parseYieldStatement(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginYieldStatement(begin);
        /* TODO (AssertStatementImpl) : assert (identical('yield', token.stringValue)); */;
        token = token.next;
        let starToken : lib3.Token;
        if (optional('*',token)) {
            starToken = token;
            token = token.next;
        }
        token = this.parseExpression(token);
        this.listener.endYieldStatement(begin,starToken,token);
        return this.expectSemicolon(token);
    }
    parseReturnStatement(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginReturnStatement(begin);
        /* TODO (AssertStatementImpl) : assert (identical('return', token.stringValue)); */;
        token = token.next;
        if (optional(';',token)) {
            this.listener.endReturnStatement(false,begin,token);
        }else {
            token = this.parseExpression(token);
            if (this.inGenerator) {
                this.reportRecoverableErrorCode(begin.next,lib9.properties.codeGeneratorReturnsValue);
            }
            this.listener.endReturnStatement(true,begin,token);
        }
        return this.expectSemicolon(token);
    }
    peekIdentifierAfterType(token : lib3.Token) : lib3.Token {
        let peek : lib3.Token = this.peekAfterType(token);
        if (peek != null && peek.isIdentifier) {
            return peek;
        }else {
            return null;
        }
    }
    peekIdentifierAfterOptionalType(token : lib3.Token) : lib3.Token {
        let peek : lib3.Token = this.peekAfterIfType(token);
        if (peek != null && peek.isIdentifier) {
            return peek;
        }else if (token.isIdentifier) {
            return token;
        }else {
            return null;
        }
    }
    parseExpressionStatementOrDeclaration(token : lib3.Token) : lib3.Token {
        if (!this.inPlainSync && optional("await",token)) {
            return this.parseExpressionStatement(token);
        }
        /* TODO (AssertStatementImpl) : assert (token.isIdentifier || identical(token.stringValue, 'void')); */;
        let identifier : lib3.Token = this.peekIdentifierAfterType(token);
        if (identifier != null) {
            /* TODO (AssertStatementImpl) : assert (identifier.isIdentifier); */;
            token = this.listener.replaceTokenWithGenericCommentTypeAssign(token,identifier);
            let afterId : lib3.Token = identifier.next;
            let afterIdKind : number = afterId.kind;
            if (core.identical(afterIdKind,lib7.properties.EQ_TOKEN) || core.identical(afterIdKind,lib7.properties.SEMICOLON_TOKEN) || core.identical(afterIdKind,lib7.properties.COMMA_TOKEN)) {
                return this.parseVariablesDeclaration(token);
            }else if (core.identical(afterIdKind,lib7.properties.OPEN_PAREN_TOKEN)) {
                let beginParen : lib10.BeginGroupToken = afterId;
                let endParen : lib3.Token = beginParen.endGroup;
                let afterParens : lib3.Token = endParen.next;
                if (optional('{',afterParens) || optional('=>',afterParens) || optional('async',afterParens) || optional('sync',afterParens)) {
                    return this.parseFunctionDeclaration(token);
                }
            }else if (core.identical(afterIdKind,lib7.properties.LT_TOKEN)) {
                let beginAngle : lib10.BeginGroupToken = afterId;
                let endAngle : lib3.Token = beginAngle.endGroup;
                if (endAngle != null && core.identical(endAngle.next.kind,lib7.properties.OPEN_PAREN_TOKEN)) {
                    let beginParen : lib10.BeginGroupToken = endAngle.next;
                    let endParen : lib3.Token = beginParen.endGroup;
                    if (endParen != null) {
                        let afterParens : lib3.Token = endParen.next;
                        if (optional('{',afterParens) || optional('=>',afterParens) || optional('async',afterParens) || optional('sync',afterParens)) {
                            return this.parseFunctionDeclaration(token);
                        }
                    }
                }
            }
        }else {
            if (optional(':',token.next)) {
                return this.parseLabeledStatement(token);
            }else if (optional('(',token.next)) {
                let begin : lib10.BeginGroupToken = token.next;
                let afterParens : string = begin.endGroup.next.stringValue;
                if (core.identical(afterParens,'{') || core.identical(afterParens,'=>') || core.identical(afterParens,'async') || core.identical(afterParens,'sync')) {
                    return this.parseFunctionDeclaration(token);
                }
            }else if (optional('<',token.next)) {
                let beginAngle : lib10.BeginGroupToken = token.next;
                let endAngle : lib3.Token = beginAngle.endGroup;
                if (endAngle != null && core.identical(endAngle.next.kind,lib7.properties.OPEN_PAREN_TOKEN)) {
                    let beginParen : lib10.BeginGroupToken = endAngle.next;
                    let endParen : lib3.Token = beginParen.endGroup;
                    if (endParen != null) {
                        let afterParens : string = endParen.next.stringValue;
                        if (core.identical(afterParens,'{') || core.identical(afterParens,'=>') || core.identical(afterParens,'async') || core.identical(afterParens,'sync')) {
                            return this.parseFunctionDeclaration(token);
                        }
                    }
                }
            }
        }
        return this.parseExpressionStatement(token);
    }
    parseExpressionStatementOrConstDeclaration(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (identical(token.stringValue, 'const')); */;
        if (this.isModifier(token.next)) {
            return this.parseVariablesDeclaration(token);
        }
        this.listener.injectGenericCommentTypeAssign(token.next);
        let identifier : lib3.Token = this.peekIdentifierAfterOptionalType(token.next);
        if (identifier != null) {
            /* TODO (AssertStatementImpl) : assert (identifier.isIdentifier); */;
            let afterId : lib3.Token = identifier.next;
            let afterIdKind : number = afterId.kind;
            if (core.identical(afterIdKind,lib7.properties.EQ_TOKEN) || core.identical(afterIdKind,lib7.properties.SEMICOLON_TOKEN) || core.identical(afterIdKind,lib7.properties.COMMA_TOKEN)) {
                return this.parseVariablesDeclaration(token);
            }
        }
        return this.parseExpressionStatement(token);
    }
    parseLabel(token : lib3.Token) : lib3.Token {
        token = this.parseIdentifier(token,lib8.IdentifierContext.labelDeclaration);
        let colon : lib3.Token = token;
        token = this.expect(':',token);
        this.listener.handleLabel(colon);
        return token;
    }
    parseLabeledStatement(token : lib3.Token) : lib3.Token {
        let labelCount : number = 0;
        do{
            token = this.parseLabel(token);
            labelCount++;
        } while (token.isIdentifier && optional(':',token.next));
        this.listener.beginLabeledStatement(token,labelCount);
        token = this.parseStatement(token);
        this.listener.endLabeledStatement(labelCount);
        return token;
    }
    parseExpressionStatement(token : lib3.Token) : lib3.Token {
        this.listener.beginExpressionStatement(token);
        token = this.parseExpression(token);
        this.listener.endExpressionStatement(token);
        return this.expectSemicolon(token);
    }
    skipExpression(token : lib3.Token) : lib3.Token {
        while (true){
            let kind = token.kind;
            let value = token.stringValue;
            if ((core.identical(kind,lib7.properties.EOF_TOKEN)) || (core.identical(value,';')) || (core.identical(value,',')) || (core.identical(value,'}')) || (core.identical(value,')')) || (core.identical(value,']'))) {
                break;
            }
            if (core.identical(value,'=') || core.identical(value,'?') || core.identical(value,':') || core.identical(value,'??')) {
                let nextValue = token.next.stringValue;
                if (core.identical(nextValue,'const')) {
                    token = token.next;
                    nextValue = token.next.stringValue;
                }
                if (core.identical(nextValue,'{')) {
                    let begin : lib10.BeginGroupToken = token.next;
                    token = (begin.endGroup != null) ? begin.endGroup : token;
                    token = token.next;
                    continue;
                }
                if (core.identical(nextValue,'<')) {
                    let begin : lib10.BeginGroupToken = token.next;
                    token = (begin.endGroup != null) ? begin.endGroup : token;
                    token = token.next;
                    if (core.identical(token.stringValue,'{')) {
                        begin = token;
                        token = (begin.endGroup != null) ? begin.endGroup : token;
                        token = token.next;
                    }
                    continue;
                }
            }
            if (!this.mayParseFunctionExpressions && core.identical(value,'{')) {
                break;
            }
            if (is(token, lib10.BeginGroupToken)) {
                let begin : lib10.BeginGroupToken = token;
                token = (begin.endGroup != null) ? begin.endGroup : token;
            }else if (is(token, lib13.ErrorToken)) {
                this.reportErrorToken(token,false).next;
            }
            token = token.next;
        }
        return token;
    }
    parseRecoverExpression(token : lib3.Token) : lib3.Token {
        return this.parseExpression(token);
    }
    expressionDepth : number;

    parseExpression(token : lib3.Token) : lib3.Token {
        if (this.expressionDepth++ > 500) {
            return this.reportUnrecoverableErrorCode(token,lib9.properties.codeStackOverflow).next;
        }
        this.listener.beginExpression(token);
        let result : lib3.Token = optional('throw',token) ? this.parseThrowExpression(token,true) : this.parsePrecedenceExpression(token,lib3.properties.ASSIGNMENT_PRECEDENCE,true);
        this.expressionDepth--;
        return result;
    }
    parseExpressionWithoutCascade(token : lib3.Token) : lib3.Token {
        this.listener.beginExpression(token);
        return optional('throw',token) ? this.parseThrowExpression(token,false) : this.parsePrecedenceExpression(token,lib3.properties.ASSIGNMENT_PRECEDENCE,false);
    }
    parseConditionalExpressionRest(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('?', token)); */;
        let question : lib3.Token = token;
        token = this.parseExpressionWithoutCascade(token.next);
        let colon : lib3.Token = token;
        token = this.expect(':',token);
        token = this.parseExpressionWithoutCascade(token);
        this.listener.handleConditionalExpression(question,colon);
        return token;
    }
    parsePrecedenceExpression(token : lib3.Token,precedence : number,allowCascades : boolean) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (precedence >= 1); */;
        /* TODO (AssertStatementImpl) : assert (precedence <= POSTFIX_PRECEDENCE); */;
        token = this.parseUnaryExpression(token,allowCascades);
        let type : lib3.TokenType = token.type;
        let tokenLevel : number = type.precedence;
        for(let level : number = tokenLevel; level >= precedence; --level){
            while (core.identical(tokenLevel,level)){
                let operator : lib3.Token = token;
                if (core.identical(tokenLevel,lib3.properties.CASCADE_PRECEDENCE)) {
                    if (!allowCascades) {
                        return token;
                    }
                    token = this.parseCascadeExpression(token);
                }else if (core.identical(tokenLevel,lib3.properties.ASSIGNMENT_PRECEDENCE)) {
                    this.listener.beginExpression(token.next);
                    token = this.parsePrecedenceExpression(token.next,level,allowCascades);
                    this.listener.handleAssignmentExpression(operator);
                }else if (core.identical(tokenLevel,lib3.properties.POSTFIX_PRECEDENCE)) {
                    if (core.identical(type,lib3.TokenType.PERIOD) || core.identical(type,lib3.TokenType.QUESTION_PERIOD)) {
                        token = this.parsePrimary(token.next,lib8.IdentifierContext.expressionContinuation);
                        this.listener.handleBinaryExpression(operator);
                    }else if ((core.identical(type,lib3.TokenType.OPEN_PAREN)) || (core.identical(type,lib3.TokenType.OPEN_SQUARE_BRACKET))) {
                        token = this.parseArgumentOrIndexStar(token);
                    }else if ((core.identical(type,lib3.TokenType.PLUS_PLUS)) || (core.identical(type,lib3.TokenType.MINUS_MINUS))) {
                        this.listener.handleUnaryPostfixAssignmentExpression(token);
                        token = token.next;
                    }else {
                        token = this.reportUnexpectedToken(token).next;
                    }
                }else if (core.identical(type,lib3.TokenType.IS)) {
                    token = this.parseIsOperatorRest(token);
                }else if (core.identical(type,lib3.TokenType.AS)) {
                    token = this.parseAsOperatorRest(token);
                }else if (core.identical(type,lib3.TokenType.QUESTION)) {
                    token = this.parseConditionalExpressionRest(token);
                }else {
                    this.listener.beginExpression(token.next);
                    token = this.parsePrecedenceExpression(token.next,level + 1,allowCascades);
                    this.listener.handleBinaryExpression(operator);
                }
                type = token.type;
                tokenLevel = type.precedence;
                if (level == lib3.properties.EQUALITY_PRECEDENCE || level == lib3.properties.RELATIONAL_PRECEDENCE) {
                    break;
                }
            }
        }
        return token;
    }
    parseCascadeExpression(token : lib3.Token) : lib3.Token {
        this.listener.beginCascade(token);
        /* TODO (AssertStatementImpl) : assert (optional('..', token)); */;
        let cascadeOperator : lib3.Token = token;
        token = token.next;
        if (optional('[',token)) {
            token = this.parseArgumentOrIndexStar(token);
        }else if (token.isIdentifier) {
            token = this.parseSend(token,lib8.IdentifierContext.expressionContinuation);
            this.listener.handleBinaryExpression(cascadeOperator);
        }else {
            return this.reportUnexpectedToken(token).next;
        }
        let mark : lib3.Token;
        do{
            mark = token;
            if (optional('.',token)) {
                let period : lib3.Token = token;
                token = this.parseSend(token.next,lib8.IdentifierContext.expressionContinuation);
                this.listener.handleBinaryExpression(period);
            }
            token = this.parseArgumentOrIndexStar(token);
        } while (!core.identical(mark,token));
        if (core.identical(token.type.precedence,lib3.properties.ASSIGNMENT_PRECEDENCE)) {
            let assignment : lib3.Token = token;
            token = this.parseExpressionWithoutCascade(token.next);
            this.listener.handleAssignmentExpression(assignment);
        }
        this.listener.endCascade();
        return token;
    }
    parseUnaryExpression(token : lib3.Token,allowCascades : boolean) : lib3.Token {
        let value : string = token.stringValue;
        if (optional('await',token)) {
            if (this.inPlainSync) {
                return this.parsePrimary(token,lib8.IdentifierContext.expression);
            }else {
                return this.parseAwaitExpression(token,allowCascades);
            }
        }else if (core.identical(value,'+')) {
            this.reportRecoverableErrorCode(token,lib9.properties.codeUnsupportedPrefixPlus);
            return this.parseUnaryExpression(token.next,allowCascades);
        }else if ((core.identical(value,'!')) || (core.identical(value,'-')) || (core.identical(value,'~'))) {
            let operator : lib3.Token = token;
            token = this.parsePrecedenceExpression(token.next,lib3.properties.POSTFIX_PRECEDENCE,allowCascades);
            this.listener.handleUnaryPrefixExpression(operator);
            return token;
        }else if ((core.identical(value,'++')) || core.identical(value,'--')) {
            let operator : lib3.Token = token;
            token = this.parsePrecedenceExpression(token.next,lib3.properties.POSTFIX_PRECEDENCE,allowCascades);
            this.listener.handleUnaryPrefixAssignmentExpression(operator);
            return token;
        }else {
            return this.parsePrimary(token,lib8.IdentifierContext.expression);
        }
    }
    parseArgumentOrIndexStar(token : lib3.Token) : lib3.Token {
        let beginToken : lib3.Token = token;
        while (true){
            if (optional('[',token)) {
                let openSquareBracket : lib3.Token = token;
                let old : boolean = this.mayParseFunctionExpressions;
                this.mayParseFunctionExpressions = true;
                token = this.parseExpression(token.next);
                this.mayParseFunctionExpressions = old;
                this.listener.handleIndexedExpression(openSquareBracket,token);
                token = this.expect(']',token);
            }else if (optional('(',token)) {
                this.listener.handleNoTypeArguments(token);
                token = this.parseArguments(token);
                this.listener.endSend(beginToken,token);
            }else {
                break;
            }
        }
        return token;
    }
    parsePrimary(token : lib3.Token,context : lib8.IdentifierContext) : lib3.Token {
        token = this.listener.injectGenericCommentTypeList(token);
        let kind = token.kind;
        if (kind == lib7.properties.IDENTIFIER_TOKEN) {
            return this.parseSendOrFunctionLiteral(token,context);
        }else if (kind == lib7.properties.INT_TOKEN || kind == lib7.properties.HEXADECIMAL_TOKEN) {
            return this.parseLiteralInt(token);
        }else if (kind == lib7.properties.DOUBLE_TOKEN) {
            return this.parseLiteralDouble(token);
        }else if (kind == lib7.properties.STRING_TOKEN) {
            return this.parseLiteralString(token);
        }else if (kind == lib7.properties.HASH_TOKEN) {
            return this.parseLiteralSymbol(token);
        }else if (kind == lib7.properties.KEYWORD_TOKEN) {
            let value : string = token.stringValue;
            if (core.identical(value,"true") || core.identical(value,"false")) {
                return this.parseLiteralBool(token);
            }else if (core.identical(value,"null")) {
                return this.parseLiteralNull(token);
            }else if (core.identical(value,"this")) {
                return this.parseThisExpression(token,context);
            }else if (core.identical(value,"super")) {
                return this.parseSuperExpression(token,context);
            }else if (core.identical(value,"new")) {
                return this.parseNewExpression(token);
            }else if (core.identical(value,"const")) {
                return this.parseConstExpression(token);
            }else if (core.identical(value,"void")) {
                return this.parseFunctionExpression(token);
            }else if (!this.inPlainSync && (core.identical(value,"yield") || core.identical(value,"async"))) {
                return this.expressionExpected(token);
            }else if (token.isIdentifier) {
                return this.parseSendOrFunctionLiteral(token,context);
            }else {
                return this.expressionExpected(token);
            }
        }else if (kind == lib7.properties.OPEN_PAREN_TOKEN) {
            return this.parseParenthesizedExpressionOrFunctionLiteral(token);
        }else if (kind == lib7.properties.OPEN_SQUARE_BRACKET_TOKEN || optional('[]',token)) {
            this.listener.handleNoTypeArguments(token);
            return this.parseLiteralListSuffix(token,null);
        }else if (kind == lib7.properties.OPEN_CURLY_BRACKET_TOKEN) {
            this.listener.handleNoTypeArguments(token);
            return this.parseLiteralMapSuffix(token,null);
        }else if (kind == lib7.properties.LT_TOKEN) {
            return this.parseLiteralListOrMapOrFunction(token,null);
        }else {
            return this.expressionExpected(token);
        }
    }
    expressionExpected(token : lib3.Token) : lib3.Token {
        token = this.reportUnrecoverableErrorCodeWithToken(token,lib9.properties.codeExpectedExpression).next;
        this.listener.handleInvalidExpression(token);
        return token;
    }
    parseParenthesizedExpressionOrFunctionLiteral(token : lib3.Token) : lib3.Token {
        let beginGroup : lib10.BeginGroupToken = token;
        let nextToken : lib3.Token = beginGroup.endGroup.next;
        let kind : number = nextToken.kind;
        if (this.mayParseFunctionExpressions && (core.identical(kind,lib7.properties.FUNCTION_TOKEN) || core.identical(kind,lib7.properties.OPEN_CURLY_BRACKET_TOKEN) || (core.identical(kind,lib7.properties.KEYWORD_TOKEN) && (optional('async',nextToken) || optional('sync',nextToken))))) {
            this.listener.handleNoTypeVariables(token);
            return this.parseUnnamedFunction(token);
        }else {
            let old : boolean = this.mayParseFunctionExpressions;
            this.mayParseFunctionExpressions = true;
            token = this.parseParenthesizedExpression(token);
            this.mayParseFunctionExpressions = old;
            return token;
        }
    }
    parseParenthesizedExpression(token : lib3.Token) : lib3.Token {
        let begin : any = token;
        token = this.expect('(',token);
        token = this.parseExpression(token);
        if (!core.identical(begin.endGroup,token)) {
            this.reportUnexpectedToken(token).next;
            token = begin.endGroup;
        }
        this.listener.handleParenthesizedExpression(begin);
        return this.expect(')',token);
    }
    parseThisExpression(token : lib3.Token,context : lib8.IdentifierContext) : lib3.Token {
        let beginToken : lib3.Token = token;
        this.listener.handleThisExpression(token,context);
        token = token.next;
        if (optional('(',token)) {
            this.listener.handleNoTypeArguments(token);
            token = this.parseArguments(token);
            this.listener.endSend(beginToken,token);
        }
        return token;
    }
    parseSuperExpression(token : lib3.Token,context : lib8.IdentifierContext) : lib3.Token {
        let beginToken : lib3.Token = token;
        this.listener.handleSuperExpression(token,context);
        token = token.next;
        if (optional('(',token)) {
            this.listener.handleNoTypeArguments(token);
            token = this.parseArguments(token);
            this.listener.endSend(beginToken,token);
        }
        return token;
    }
    parseLiteralListSuffix(token : lib3.Token,constKeyword : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('[', token) || optional('[]', token)); */;
        let beginToken : lib3.Token = token;
        let count : number = 0;
        if (optional('[',token)) {
            let old : boolean = this.mayParseFunctionExpressions;
            this.mayParseFunctionExpressions = true;
            do{
                if (optional(']',token.next)) {
                    token = token.next;
                    break;
                }
                token = this.parseExpression(token.next);
                ++count;
            } while (optional(',',token));
            this.mayParseFunctionExpressions = old;
            this.listener.handleLiteralList(count,beginToken,constKeyword,token);
            return this.expect(']',token);
        }
        this.listener.handleLiteralList(0,token,constKeyword,token);
        return token.next;
    }
    parseLiteralMapSuffix(token : lib3.Token,constKeyword : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('{', token)); */;
        let beginToken : lib3.Token = token;
        let count : number = 0;
        let old : boolean = this.mayParseFunctionExpressions;
        this.mayParseFunctionExpressions = true;
        do{
            if (optional('}',token.next)) {
                token = token.next;
                break;
            }
            token = this.parseMapLiteralEntry(token.next);
            ++count;
        } while (optional(',',token));
        this.mayParseFunctionExpressions = old;
        this.listener.handleLiteralMap(count,beginToken,constKeyword,token);
        return this.expect('}',token);
    }
    parseLiteralFunctionSuffix(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('(', token)); */;
        let beginGroup : lib10.BeginGroupToken = token;
        if (beginGroup.endGroup != null) {
            let nextToken : lib3.Token = beginGroup.endGroup.next;
            let kind : number = nextToken.kind;
            if (core.identical(kind,lib7.properties.FUNCTION_TOKEN) || core.identical(kind,lib7.properties.OPEN_CURLY_BRACKET_TOKEN) || (core.identical(kind,lib7.properties.KEYWORD_TOKEN) && (optional('async',nextToken) || optional('sync',nextToken)))) {
                return this.parseUnnamedFunction(token);
            }
        }
        return this.reportUnexpectedToken(token).next;
    }
    parseLiteralListOrMapOrFunction(token : lib3.Token,constKeyword : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('<', token)); */;
        let begin : lib10.BeginGroupToken = token;
        if (op(Op.EQUALS,constKeyword,null) && begin.endGroup != null && core.identical(begin.endGroup.next.kind,lib7.properties.OPEN_PAREN_TOKEN)) {
            token = this.parseTypeVariablesOpt(token);
            return this.parseLiteralFunctionSuffix(token);
        }else {
            token = this.parseTypeArgumentsOpt(token);
            if (optional('{',token)) {
                return this.parseLiteralMapSuffix(token,constKeyword);
            }else if ((optional('[',token)) || (optional('[]',token))) {
                return this.parseLiteralListSuffix(token,constKeyword);
            }
            return this.reportUnexpectedToken(token).next;
        }
    }
    parseMapLiteralEntry(token : lib3.Token) : lib3.Token {
        this.listener.beginLiteralMapEntry(token);
        token = this.parseExpression(token);
        let colon : lib3.Token = token;
        token = this.expect(':',token);
        token = this.parseExpression(token);
        this.listener.endLiteralMapEntry(colon,token);
        return token;
    }
    parseSendOrFunctionLiteral(token : lib3.Token,context : lib8.IdentifierContext) : lib3.Token {
        if (!this.mayParseFunctionExpressions) {
            return this.parseSend(token,context);
        }
        let peek : lib3.Token = this.peekAfterIfType(token);
        if (peek != null && core.identical(peek.kind,lib7.properties.IDENTIFIER_TOKEN) && this.isFunctionDeclaration(peek.next)) {
            return this.parseFunctionExpression(token);
        }else if (this.isFunctionDeclaration(token.next)) {
            return this.parseFunctionExpression(token);
        }else {
            return this.parseSend(token,context);
        }
    }
    isFunctionDeclaration(token : lib3.Token) : boolean {
        if (optional('<',token)) {
            let begin : lib10.BeginGroupToken = token;
            if (op(Op.EQUALS,begin.endGroup,null)) return false;
            token = begin.endGroup.next;
        }
        if (optional('(',token)) {
            let begin : lib10.BeginGroupToken = token;
            let afterParens : string = begin.endGroup.next.stringValue;
            if (core.identical(afterParens,'{') || core.identical(afterParens,'=>') || core.identical(afterParens,'async') || core.identical(afterParens,'sync')) {
                return true;
            }
        }
        return false;
    }
    parseRequiredArguments(token : lib3.Token) : lib3.Token {
        if (optional('(',token)) {
            token = this.parseArguments(token);
        }else {
            this.listener.handleNoArguments(token);
            token = this.reportUnexpectedToken(token).next;
        }
        return token;
    }
    parseNewExpression(token : lib3.Token) : lib3.Token {
        let newKeyword : lib3.Token = token;
        token = this.expect('new',token);
        this.listener.beginNewExpression(newKeyword);
        token = this.parseConstructorReference(token);
        token = this.parseRequiredArguments(token);
        this.listener.endNewExpression(newKeyword);
        return token;
    }
    parseConstExpression(token : lib3.Token) : lib3.Token {
        let constKeyword : lib3.Token = token;
        token = this.expect('const',token);
        token = this.listener.injectGenericCommentTypeList(token);
        let value : string = token.stringValue;
        if ((core.identical(value,'[')) || (core.identical(value,'[]'))) {
            this.listener.beginConstLiteral(token);
            this.listener.handleNoTypeArguments(token);
            token = this.parseLiteralListSuffix(token,constKeyword);
            this.listener.endConstLiteral(token);
            return token;
        }
        if (core.identical(value,'{')) {
            this.listener.beginConstLiteral(token);
            this.listener.handleNoTypeArguments(token);
            token = this.parseLiteralMapSuffix(token,constKeyword);
            this.listener.endConstLiteral(token);
            return token;
        }
        if (core.identical(value,'<')) {
            this.listener.beginConstLiteral(token);
            token = this.parseLiteralListOrMapOrFunction(token,constKeyword);
            this.listener.endConstLiteral(token);
            return token;
        }
        this.listener.beginConstExpression(constKeyword);
        token = this.parseConstructorReference(token);
        token = this.parseRequiredArguments(token);
        this.listener.endConstExpression(constKeyword);
        return token;
    }
    parseLiteralInt(token : lib3.Token) : lib3.Token {
        this.listener.handleLiteralInt(token);
        return token.next;
    }
    parseLiteralDouble(token : lib3.Token) : lib3.Token {
        this.listener.handleLiteralDouble(token);
        return token.next;
    }
    parseLiteralString(token : lib3.Token) : lib3.Token {
        let old : boolean = this.mayParseFunctionExpressions;
        this.mayParseFunctionExpressions = true;
        token = this.parseSingleLiteralString(token);
        let count : number = 1;
        while (core.identical(token.kind,lib7.properties.STRING_TOKEN)){
            token = this.parseSingleLiteralString(token);
            count++;
        }
        if (count > 1) {
            this.listener.handleStringJuxtaposition(count);
        }
        this.mayParseFunctionExpressions = old;
        return token;
    }
    parseLiteralSymbol(token : lib3.Token) : lib3.Token {
        let hashToken : lib3.Token = token;
        this.listener.beginLiteralSymbol(hashToken);
        token = token.next;
        if (lib10.isUserDefinableOperator(token.stringValue)) {
            this.listener.handleOperator(token);
            this.listener.endLiteralSymbol(hashToken,1);
            return token.next;
        }else if (core.identical(token.stringValue,'void')) {
            this.listener.handleSymbolVoid(token);
            this.listener.endLiteralSymbol(hashToken,1);
            return token.next;
        }else {
            let count : number = 1;
            token = this.parseIdentifier(token,lib8.IdentifierContext.literalSymbol);
            while (core.identical(token.stringValue,'.')){
                count++;
                token = this.parseIdentifier(token.next,lib8.IdentifierContext.literalSymbolContinuation);
            }
            this.listener.endLiteralSymbol(hashToken,count);
            return token;
        }
    }
    parseSingleLiteralString(token : lib3.Token) : lib3.Token {
        this.listener.beginLiteralString(token);
        token = token.next;
        let interpolationCount : number = 0;
        let kind = token.kind;
        while (kind != lib7.properties.EOF_TOKEN){
            if (core.identical(kind,lib7.properties.STRING_INTERPOLATION_TOKEN)) {
                token = token.next;
                token = this.parseExpression(token);
                token = this.expect('}',token);
            }else if (core.identical(kind,lib7.properties.STRING_INTERPOLATION_IDENTIFIER_TOKEN)) {
                token = token.next;
                token = this.parseExpression(token);
            }else {
                break;
            }
            ++interpolationCount;
            token = this.parseStringPart(token);
            kind = token.kind;
        }
        this.listener.endLiteralString(interpolationCount,token);
        return token;
    }
    parseLiteralBool(token : lib3.Token) : lib3.Token {
        this.listener.handleLiteralBool(token);
        return token.next;
    }
    parseLiteralNull(token : lib3.Token) : lib3.Token {
        this.listener.handleLiteralNull(token);
        return token.next;
    }
    parseSend(token : lib3.Token,context : lib8.IdentifierContext) : lib3.Token {
        let beginToken : lib3.Token = token;
        this.listener.beginSend(token);
        token = this.parseIdentifier(token,context);
        token = this.listener.injectGenericCommentTypeList(token);
        if (this.isValidMethodTypeArguments(token)) {
            token = this.parseTypeArgumentsOpt(token);
        }else {
            this.listener.handleNoTypeArguments(token);
        }
        token = this.parseArgumentsOpt(token);
        this.listener.endSend(beginToken,token);
        return token;
    }
    skipArgumentsOpt(token : lib3.Token) : lib3.Token {
        this.listener.handleNoArguments(token);
        if (optional('(',token)) {
            let begin : lib10.BeginGroupToken = token;
            return begin.endGroup.next;
        }else {
            return token;
        }
    }
    parseArgumentsOpt(token : lib3.Token) : lib3.Token {
        if (!optional('(',token)) {
            this.listener.handleNoArguments(token);
            return token;
        }else {
            return this.parseArguments(token);
        }
    }
    parseArguments(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginArguments(begin);
        /* TODO (AssertStatementImpl) : assert (identical('(', token.stringValue)); */;
        let argumentCount : number = 0;
        if (optional(')',token.next)) {
            this.listener.endArguments(argumentCount,begin,token.next);
            return token.next.next;
        }
        let old : boolean = this.mayParseFunctionExpressions;
        this.mayParseFunctionExpressions = true;
        do{
            if (optional(')',token.next)) {
                token = token.next;
                break;
            }
            let colon : lib3.Token = null;
            if (optional(':',token.next.next)) {
                token = this.parseIdentifier(token.next,lib8.IdentifierContext.namedArgumentReference);
                colon = token;
            }
            token = this.parseExpression(token.next);
            if (colon != null) this.listener.handleNamedArgument(colon);
            ++argumentCount;
        } while (optional(',',token));
        this.mayParseFunctionExpressions = old;
        this.listener.endArguments(argumentCount,begin,token);
        return this.expect(')',token);
    }
    parseIsOperatorRest(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('is', token)); */;
        let operator : lib3.Token = token;
        let not : lib3.Token = null;
        if (optional('!',token.next)) {
            token = token.next;
            not = token;
        }
        token = this.parseType(token.next);
        this.listener.handleIsOperator(operator,not,token);
        let value : string = token.stringValue;
        if (core.identical(value,'is') || core.identical(value,'as')) {
            this.reportUnexpectedToken(token);
        }
        return token;
    }
    parseAsOperatorRest(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('as', token)); */;
        let operator : lib3.Token = token;
        token = this.parseType(token.next);
        this.listener.handleAsOperator(operator,token);
        let value : string = token.stringValue;
        if (core.identical(value,'is') || core.identical(value,'as')) {
            this.reportUnexpectedToken(token);
        }
        return token;
    }
    parseVariablesDeclaration(token : lib3.Token) : lib3.Token {
        return this.parseVariablesDeclarationMaybeSemicolon(token,true);
    }
    parseVariablesDeclarationNoSemicolon(token : lib3.Token) : lib3.Token {
        return this.parseVariablesDeclarationMaybeSemicolon(token,false);
    }
    parseVariablesDeclarationMaybeSemicolon(token : lib3.Token,endWithSemicolon : boolean) : lib3.Token {
        let count : number = 1;
        token = this.parseMetadataStar(token);
        if (optional('var',token)) {
            token = this.listener.replaceTokenWithGenericCommentTypeAssign(token,token.next);
        }
        token = this.parseModifiers(token,MemberKind.Local,{
            isVariable : true});
        this.listener.beginVariablesDeclaration(token);
        token = this.parseOptionallyInitializedIdentifier(token);
        while (optional(',',token)){
            token = this.parseOptionallyInitializedIdentifier(token.next);
            ++count;
        }
        if (endWithSemicolon) {
            let semicolon : lib3.Token = token;
            token = this.expectSemicolon(semicolon);
            this.listener.endVariablesDeclaration(count,semicolon);
            return token;
        }else {
            this.listener.endVariablesDeclaration(count,null);
            return token;
        }
    }
    parseOptionallyInitializedIdentifier(token : lib3.Token) : lib3.Token {
        let nameToken : lib3.Token = token;
        this.listener.beginInitializedIdentifier(token);
        token = this.parseIdentifier(token,lib8.IdentifierContext.localVariableDeclaration);
        token = this.parseVariableInitializerOpt(token);
        this.listener.endInitializedIdentifier(nameToken);
        return token;
    }
    parseIfStatement(token : lib3.Token) : lib3.Token {
        let ifToken : lib3.Token = token;
        this.listener.beginIfStatement(ifToken);
        token = this.expect('if',token);
        token = this.parseParenthesizedExpression(token);
        this.listener.beginThenStatement(token);
        token = this.parseStatement(token);
        this.listener.endThenStatement(token);
        let elseToken : lib3.Token = null;
        if (optional('else',token)) {
            elseToken = token;
            this.listener.beginElseStatement(token);
            token = this.parseStatement(token.next);
            this.listener.endElseStatement(token);
        }
        this.listener.endIfStatement(ifToken,elseToken);
        return token;
    }
    parseForStatement(awaitToken : lib3.Token,token : lib3.Token) : lib3.Token {
        let forKeyword : lib3.Token = token;
        this.listener.beginForStatement(forKeyword);
        token = this.expect('for',token);
        let leftParenthesis : lib3.Token = token;
        token = this.expect('(',token);
        token = this.parseVariablesDeclarationOrExpressionOpt(token);
        if (optional('in',token)) {
            return this.parseForInRest(awaitToken,forKeyword,leftParenthesis,token);
        }else {
            if (awaitToken != null) {
                this.reportRecoverableErrorCode(awaitToken,lib9.properties.codeInvalidAwaitFor);
            }
            return this.parseForRest(forKeyword,leftParenthesis,token);
        }
    }
    parseVariablesDeclarationOrExpressionOpt(token : lib3.Token) : lib3.Token {
        let value : string = token.stringValue;
        if (core.identical(value,';')) {
            this.listener.handleNoExpression(token);
            return token;
        }else if (this.isOneOf4(token,'@','var','final','const')) {
            return this.parseVariablesDeclarationNoSemicolon(token);
        }
        let identifier : lib3.Token = this.peekIdentifierAfterType(token);
        if (identifier != null) {
            /* TODO (AssertStatementImpl) : assert (identifier.isIdentifier); */;
            if (this.isOneOf4(identifier.next,'=',';',',','in')) {
                return this.parseVariablesDeclarationNoSemicolon(token);
            }
        }
        return this.parseExpression(token);
    }
    parseForRest(forToken : lib3.Token,leftParenthesis : lib3.Token,token : lib3.Token) : lib3.Token {
        let leftSeparator : lib3.Token = token;
        token = this.expectSemicolon(token);
        if (optional(';',token)) {
            token = this.parseEmptyStatement(token);
        }else {
            token = this.parseExpressionStatement(token);
        }
        let expressionCount : number = 0;
        while (true){
            if (optional(')',token)) break;
            token = this.parseExpression(token);
            ++expressionCount;
            if (optional(',',token)) {
                token = token.next;
            }else {
                break;
            }
        }
        token = this.expect(')',token);
        this.listener.beginForStatementBody(token);
        token = this.parseStatement(token);
        this.listener.endForStatementBody(token);
        this.listener.endForStatement(forToken,leftSeparator,expressionCount,token);
        return token;
    }
    parseForInRest(awaitToken : lib3.Token,forKeyword : lib3.Token,leftParenthesis : lib3.Token,token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('in', token)); */;
        let inKeyword : lib3.Token = token;
        token = token.next;
        this.listener.beginForInExpression(token);
        token = this.parseExpression(token);
        this.listener.endForInExpression(token);
        let rightParenthesis : lib3.Token = token;
        token = this.expect(')',token);
        this.listener.beginForInBody(token);
        token = this.parseStatement(token);
        this.listener.endForInBody(token);
        this.listener.endForIn(awaitToken,forKeyword,leftParenthesis,inKeyword,rightParenthesis,token);
        return token;
    }
    parseWhileStatement(token : lib3.Token) : lib3.Token {
        let whileToken : lib3.Token = token;
        this.listener.beginWhileStatement(whileToken);
        token = this.expect('while',token);
        token = this.parseParenthesizedExpression(token);
        this.listener.beginWhileStatementBody(token);
        token = this.parseStatement(token);
        this.listener.endWhileStatementBody(token);
        this.listener.endWhileStatement(whileToken,token);
        return token;
    }
    parseDoWhileStatement(token : lib3.Token) : lib3.Token {
        let doToken : lib3.Token = token;
        this.listener.beginDoWhileStatement(doToken);
        token = this.expect('do',token);
        this.listener.beginDoWhileStatementBody(token);
        token = this.parseStatement(token);
        this.listener.endDoWhileStatementBody(token);
        let whileToken : lib3.Token = token;
        token = this.expect('while',token);
        token = this.parseParenthesizedExpression(token);
        this.listener.endDoWhileStatement(doToken,whileToken,token);
        return this.expectSemicolon(token);
    }
    parseBlock(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginBlock(begin);
        let statementCount : number = 0;
        token = this.expect('{',token);
        while (this.notEofOrValue('}',token)){
            token = this.parseStatement(token);
            ++statementCount;
        }
        this.listener.endBlock(statementCount,begin,token);
        return this.expect('}',token);
    }
    parseAwaitExpression(token : lib3.Token,allowCascades : boolean) : lib3.Token {
        let awaitToken : lib3.Token = token;
        this.listener.beginAwaitExpression(awaitToken);
        token = this.expect('await',token);
        if (!this.inAsync) {
            this.reportRecoverableErrorCode(awaitToken,lib9.properties.codeAwaitNotAsync);
        }
        token = this.parsePrecedenceExpression(token,lib3.properties.POSTFIX_PRECEDENCE,allowCascades);
        this.listener.endAwaitExpression(awaitToken,token);
        return token;
    }
    parseThrowExpression(token : lib3.Token,allowCascades : boolean) : lib3.Token {
        let throwToken : lib3.Token = token;
        this.listener.beginThrowExpression(throwToken);
        token = this.expect('throw',token);
        token = allowCascades ? this.parseExpression(token) : this.parseExpressionWithoutCascade(token);
        this.listener.endThrowExpression(throwToken,token);
        return token;
    }
    parseRethrowStatement(token : lib3.Token) : lib3.Token {
        let throwToken : lib3.Token = token;
        this.listener.beginRethrowStatement(throwToken);
        if (core.identical(throwToken.stringValue,'throw')) {
            token = this.expect('throw',token);
        }else {
            token = this.expect('rethrow',token);
        }
        this.listener.endRethrowStatement(throwToken,token);
        return this.expectSemicolon(token);
    }
    parseTryStatement(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('try', token)); */;
        let tryKeyword : lib3.Token = token;
        this.listener.beginTryStatement(tryKeyword);
        token = this.parseBlock(token.next);
        let catchCount : number = 0;
        let value : string = token.stringValue;
        while (core.identical(value,'catch') || core.identical(value,'on')){
            this.listener.beginCatchClause(token);
            let onKeyword = null;
            if (core.identical(value,'on')) {
                onKeyword = token;
                token = this.parseType(token.next);
                value = token.stringValue;
            }
            let catchKeyword : lib3.Token = null;
            if (core.identical(value,'catch')) {
                catchKeyword = token;
                token = this.parseFormalParameters(token.next,MemberKind.Catch);
            }
            this.listener.endCatchClause(token);
            token = this.parseBlock(token);
            ++catchCount;
            this.listener.handleCatchBlock(onKeyword,catchKeyword);
            value = token.stringValue;
        }
        let finallyKeyword : lib3.Token = null;
        if (optional('finally',token)) {
            finallyKeyword = token;
            token = this.parseBlock(token.next);
            this.listener.handleFinallyBlock(finallyKeyword);
        }else {
            if (catchCount == 0) {
                this.reportRecoverableErrorCode(tryKeyword,lib9.properties.codeOnlyTry);
            }
        }
        this.listener.endTryStatement(catchCount,tryKeyword,finallyKeyword);
        return token;
    }
    parseSwitchStatement(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('switch', token)); */;
        let switchKeyword : lib3.Token = token;
        this.listener.beginSwitchStatement(switchKeyword);
        token = this.parseParenthesizedExpression(token.next);
        token = this.parseSwitchBlock(token);
        this.listener.endSwitchStatement(switchKeyword,token);
        return token.next;
    }
    parseSwitchBlock(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        this.listener.beginSwitchBlock(begin);
        token = this.expect('{',token);
        let caseCount : number = 0;
        while (!core.identical(token.kind,lib7.properties.EOF_TOKEN)){
            if (optional('}',token)) {
                break;
            }
            token = this.parseSwitchCase(token);
            ++caseCount;
        }
        this.listener.endSwitchBlock(caseCount,begin,token);
        this.expect('}',token);
        return token;
    }
    peekPastLabels(token : lib3.Token) : lib3.Token {
        while (token.isIdentifier && optional(':',token.next)){
            token = token.next.next;
        }
        return token;
    }
    parseSwitchCase(token : lib3.Token) : lib3.Token {
        let begin : lib3.Token = token;
        let defaultKeyword : lib3.Token = null;
        let expressionCount : number = 0;
        let labelCount : number = 0;
        let peek : lib3.Token = this.peekPastLabels(token);
        while (true){
            let value : string = peek.stringValue;
            if (core.identical(value,'default')) {
                while (!core.identical(token,peek)){
                    token = this.parseLabel(token);
                    labelCount++;
                }
                defaultKeyword = token;
                token = this.expect(':',token.next);
                peek = token;
                break;
            }else if (core.identical(value,'case')) {
                while (!core.identical(token,peek)){
                    token = this.parseLabel(token);
                    labelCount++;
                }
                let caseKeyword : lib3.Token = token;
                this.listener.beginCaseExpression(token);
                token = this.parseExpression(token.next);
                this.listener.endCaseExpression(token);
                let colonToken : lib3.Token = token;
                token = this.expect(':',token);
                this.listener.handleCaseMatch(caseKeyword,colonToken);
                expressionCount++;
                peek = this.peekPastLabels(token);
            }else {
                if (expressionCount == 0) {
                    this.reportUnrecoverableErrorCodeWithString(token,lib9.properties.codeExpectedButGot,"case");
                }
                break;
            }
        }
        this.listener.beginSwitchCase(labelCount,expressionCount,begin);
        let statementCount : number = 0;
        while (!core.identical(token.kind,lib7.properties.EOF_TOKEN)){
            let value : string = peek.stringValue;
            if ((core.identical(value,'case')) || (core.identical(value,'default')) || ((core.identical(value,'}')) && (core.identical(token,peek)))) {
                break;
            }else {
                token = this.parseStatement(token);
            }
            statementCount++;
            peek = this.peekPastLabels(token);
        }
        this.listener.handleSwitchCase(labelCount,expressionCount,defaultKeyword,statementCount,begin,token);
        return token;
    }
    parseBreakStatement(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('break', token)); */;
        let breakKeyword : lib3.Token = token;
        token = token.next;
        let hasTarget : boolean = false;
        if (token.isIdentifier) {
            token = this.parseIdentifier(token,lib8.IdentifierContext.labelReference);
            hasTarget = true;
        }
        this.listener.handleBreakStatement(hasTarget,breakKeyword,token);
        return this.expectSemicolon(token);
    }
    parseAssertStatement(token : lib3.Token) : lib3.Token {
        let assertKeyword : lib3.Token = token;
        let commaToken : lib3.Token = null;
        token = this.expect('assert',token);
        let leftParenthesis : lib3.Token = token;
        token = this.expect('(',token);
        let old : boolean = this.mayParseFunctionExpressions;
        this.mayParseFunctionExpressions = true;
        token = this.parseExpression(token);
        if (optional(',',token)) {
            commaToken = token;
            token = token.next;
            token = this.parseExpression(token);
        }
        let rightParenthesis : lib3.Token = token;
        token = this.expect(')',token);
        this.mayParseFunctionExpressions = old;
        this.listener.handleAssertStatement(assertKeyword,leftParenthesis,commaToken,rightParenthesis,token);
        return this.expectSemicolon(token);
    }
    parseContinueStatement(token : lib3.Token) : lib3.Token {
        /* TODO (AssertStatementImpl) : assert (optional('continue', token)); */;
        let continueKeyword : lib3.Token = token;
        token = token.next;
        let hasTarget : boolean = false;
        if (token.isIdentifier) {
            token = this.parseIdentifier(token,lib8.IdentifierContext.labelReference);
            hasTarget = true;
        }
        this.listener.handleContinueStatement(hasTarget,continueKeyword,token);
        return this.expectSemicolon(token);
    }
    parseEmptyStatement(token : lib3.Token) : lib3.Token {
        this.listener.handleEmptyStatement(token);
        return this.expectSemicolon(token);
    }
    reportUnrecoverableError(token : lib3.Token,format : () => lib9.FastaMessage) : lib3.Token {
        let next : lib3.Token;
        if (is(token, lib13.ErrorToken)) {
            next = this.reportErrorToken(token,false);
        }else {
            next = this.listener.handleUnrecoverableError(token,format());
        }
        return (next || lib14.skipToEof(token));
    }
    reportRecoverableError(token : lib3.Token,format : () => lib9.FastaMessage) : void {
        if (is(token, lib13.ErrorToken)) {
            this.reportErrorToken(token,true);
        }else {
            this.listener.handleRecoverableError(token,format());
        }
    }
    reportErrorToken(token : lib13.ErrorToken,isRecoverable : boolean) : lib3.Token {
        let code : lib9.FastaCode<any> = token.errorCode;
        let message : lib9.FastaMessage;
        if (op(Op.EQUALS,code,lib9.properties.codeAsciiControlCharacter)) {
            message = lib9.properties.codeAsciiControlCharacter.format(this.uri,token.charOffset,token.character);
        }else if (op(Op.EQUALS,code,lib9.properties.codeNonAsciiWhitespace)) {
            message = lib9.properties.codeNonAsciiWhitespace.format(this.uri,token.charOffset,token.character);
        }else if (op(Op.EQUALS,code,lib9.properties.codeEncoding)) {
            message = lib9.properties.codeEncoding.format(this.uri,token.charOffset);
        }else if (op(Op.EQUALS,code,lib9.properties.codeNonAsciiIdentifier)) {
            message = lib9.properties.codeNonAsciiIdentifier.format(this.uri,token.charOffset,new core.DartString.fromCharCodes(new core.DartList.literal(token.character)).valueOf(),token.character);
        }else if (op(Op.EQUALS,code,lib9.properties.codeUnterminatedString)) {
            message = lib9.properties.codeUnterminatedString.format(this.uri,token.charOffset,token.start);
        }else if (op(Op.EQUALS,code,lib9.properties.codeUnmatchedToken)) {
            let begin : lib3.Token = token.begin;
            message = lib9.properties.codeUnmatchedToken.format(this.uri,token.charOffset,lib14.closeBraceFor(begin.lexeme),begin);
        }else if (op(Op.EQUALS,code,lib9.properties.codeUnspecified)) {
            message = lib9.properties.codeUnspecified.format(this.uri,token.charOffset,token.assertionMessage);
        }else {
            message = code.format(this.uri,token.charOffset);
        }
        if (isRecoverable) {
            this.listener.handleRecoverableError(token,message);
            return null;
        }else {
            let next : lib3.Token = this.listener.handleUnrecoverableError(token,message);
            return (next || lib14.skipToEof(token));
        }
    }
    reportUnmatchedToken(token : lib10.BeginGroupToken) : lib3.Token {
        return this.reportUnrecoverableError(token,() =>  {
            return lib9.properties.codeUnmatchedToken.format(this.uri,token.charOffset,lib14.closeBraceFor(token.lexeme),token);
        });
    }
    reportUnexpectedToken(token : lib3.Token) : lib3.Token {
        return this.reportUnrecoverableError(token,() =>  {
            return lib9.properties.codeUnexpectedToken.format(this.uri,token.charOffset,token);
        });
    }
    reportRecoverableErrorCode(token : lib3.Token,code : lib9.FastaCode<(uri : lib5.Uri,charOffset : number) => lib9.FastaMessage>) : void {
        this.reportRecoverableError(token,() =>  {
            return code.format(this.uri,token.charOffset);
        });
    }
    reportUnrecoverableErrorCode(token : lib3.Token,code : lib9.FastaCode<(uri : lib5.Uri,charOffset : number) => lib9.FastaMessage>) : lib3.Token {
        return this.reportUnrecoverableError(token,() =>  {
            return code.format(this.uri,token.charOffset);
        });
    }
    reportRecoverableErrorCodeWithToken(token : lib3.Token,code : lib9.FastaCode<(uri : lib5.Uri,charOffset : number,token : lib3.Token) => lib9.FastaMessage>) : void {
        this.reportRecoverableError(token,() =>  {
            return code.format(this.uri,token.charOffset,token);
        });
    }
    reportUnrecoverableErrorCodeWithToken(token : lib3.Token,code : lib9.FastaCode<(uri : lib5.Uri,charOffset : number,token : lib3.Token) => lib9.FastaMessage>) : lib3.Token {
        return this.reportUnrecoverableError(token,() =>  {
            return code.format(this.uri,token.charOffset,token);
        });
    }
    reportUnrecoverableErrorCodeWithString(token : lib3.Token,code : lib9.FastaCode<(uri : lib5.Uri,charOffset : number,string : string) => lib9.FastaMessage>,string : string) : lib3.Token {
        return this.reportUnrecoverableError(token,() =>  {
            return code.format(this.uri,token.charOffset,string);
        });
    }
}

export class properties {
}
