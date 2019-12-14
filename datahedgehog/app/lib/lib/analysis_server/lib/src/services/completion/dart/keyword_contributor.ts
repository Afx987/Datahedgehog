/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/keyword_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace KeywordContributor {
    export type Constructors = 'KeywordContributor';
    export type Interface = Omit<KeywordContributor, Constructors>;
}
@DartClass
export class KeywordContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            request.target.containingNode.accept(new _KeywordVisitor(request,suggestions));
            return suggestions;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeywordContributor() {
    }
}

export namespace _KeywordVisitor {
    export type Constructors = '_KeywordVisitor';
    export type Interface = Omit<_KeywordVisitor, Constructors>;
}
@DartClass
export class _KeywordVisitor extends any {
    request : any;

    entity : core.DartObject;

    suggestions : core.DartList<any>;

    constructor(request : any,suggestions : core.DartList<any>) {
    }
    @defaultConstructor
    _KeywordVisitor(request : any,suggestions : core.DartList<any>) {
        this.request = request;
        this.entity = request.target.entity;
        this.suggestions = suggestions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) {
        if (is(this.request, any)) {
            let opType : any = (this.request as any).opType;
            if (opType.includeOnlyNamedArgumentSuggestions) {
                return;
            }
        }
        if (op(Op.EQUALS,this.entity,node.rightParenthesis)) {
            this._addExpressionKeywords(node);
            let previous : any = (this.entity as any).previous;
            if (previous.isSynthetic) {
                previous = previous.previous;
            }
            if (op(Op.EQUALS,previous.lexeme,')')) {
                this._addSuggestion(Keyword.ASYNC);
                this._addSuggestion2(properties.ASYNC_STAR);
                this._addSuggestion2(properties.SYNC_STAR);
            }
        }
        if (is(this.entity, any) && node.arguments.contains(this.entity)) {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) {
        if (core.identical(this.entity,node.asOperator) && is(node.expression, any)) {
            this._addSuggestion(Keyword.ASYNC,DART_RELEVANCE_HIGH);
            this._addSuggestion2(properties.ASYNC_STAR,{
                relevance : DART_RELEVANCE_HIGH});
            this._addSuggestion2(properties.SYNC_STAR,{
                relevance : DART_RELEVANCE_HIGH});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) {
        let prevStmt : any = OpType.getPreviousStatement(node,this.entity);
        if (is(prevStmt, any)) {
            if (op(Op.EQUALS,prevStmt.finallyBlock,null)) {
                this._addSuggestion(Keyword.ON);
                this._addSuggestion(Keyword.CATCH);
                this._addSuggestion(Keyword.FINALLY);
                if (prevStmt.catchClauses.isEmpty) {
                    return;
                }
            }
        }
        if (is(this.entity, any)) {
            let expression : any = (this.entity as any).expression;
            if (is(expression, any)) {
                let token : any = expression.token;
                let previous : any = token.previous;
                if (previous.isSynthetic) {
                    previous = previous.previous;
                }
                let next : any = token.next;
                if (next.isSynthetic) {
                    next = next.next;
                }
                if (op(Op.EQUALS,previous.type,TokenType.CLOSE_PAREN) && op(Op.EQUALS,next.type,TokenType.OPEN_CURLY_BRACKET)) {
                    this._addSuggestion(Keyword.ASYNC);
                    this._addSuggestion2(properties.ASYNC_STAR);
                    this._addSuggestion2(properties.SYNC_STAR);
                }
            }
        }
        this._addStatementKeywords(node);
        if (this._inCatchClause(node)) {
            this._addSuggestion(Keyword.RETHROW,op(Op.MINUS,DART_RELEVANCE_KEYWORD,1));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) {
        if (op(Op.EQUALS,this.entity,node.name)) {
            return;
        }
        if (op(Op.EQUALS,this.entity,node.rightBracket)) {
            this._addClassBodyKeywords();
        }else if (is(this.entity, any)) {
            this._addClassBodyKeywords();
            let index : number = node.members.indexOf(this.entity);
            let previous : any = index > 0 ? op(Op.INDEX,node.members,index - 1) : null;
            if (is(previous, any) && is(previous.body, any)) {
                this._addSuggestion(Keyword.ASYNC);
                this._addSuggestion2(properties.ASYNC_STAR);
                this._addSuggestion2(properties.SYNC_STAR);
            }
        }else {
            this._addClassDeclarationKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) {
        let previousMember = null;
        for(let member of node.childEntities) {
            if (op(Op.EQUALS,this.entity,member)) {
                break;
            }
            previousMember = member;
        }
        if (is(previousMember, any)) {
            if (op(Op.EQUALS,previousMember.leftBracket,null) || previousMember.leftBracket.isSynthetic) {
                this._addClassDeclarationKeywords(previousMember);
                return;
            }
        }
        if (is(previousMember, any)) {
            if (op(Op.EQUALS,previousMember.semicolon,null) || previousMember.semicolon.isSynthetic) {
                this._addImportDirectiveKeywords(previousMember);
                return;
            }
        }
        if (op(Op.EQUALS,previousMember,null) || is(previousMember, any)) {
            if (op(Op.EQUALS,previousMember,null) && !node.directives.any((d : any) =>  {
                return is(d, any);
            })) {
                this._addSuggestions(new core.DartList.literal(Keyword.LIBRARY),DART_RELEVANCE_HIGH);
            }
            this._addSuggestion2(properties.IMPORT_STATEMENT,{
                offset : 8,relevance : DART_RELEVANCE_HIGH});
            this._addSuggestion2(properties.EXPORT_STATEMENT,{
                offset : 8,relevance : DART_RELEVANCE_HIGH});
            this._addSuggestion2(properties.PART_STATEMENT,{
                offset : 6,relevance : DART_RELEVANCE_HIGH});
        }
        if (op(Op.EQUALS,this.entity,null) || is(this.entity, any)) {
            if (is(previousMember, any) && is(previousMember.functionExpression, any) && is(previousMember.functionExpression.body, any)) {
                this._addSuggestion(Keyword.ASYNC,DART_RELEVANCE_HIGH);
                this._addSuggestion2(properties.ASYNC_STAR,{
                    relevance : DART_RELEVANCE_HIGH});
                this._addSuggestion2(properties.SYNC_STAR,{
                    relevance : DART_RELEVANCE_HIGH});
            }
            this._addCompilationUnitKeywords();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) {
        if (node.initializers.isNotEmpty && op(Op.EQUALS,node.initializers.last,this.entity)) {
            this._addSuggestion(Keyword.SUPER);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) {
        if (op(Op.EQUALS,this.entity,node.defaultValue)) {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpression(node : any) {
        this._addExpressionKeywords(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) {
        if (op(Op.EQUALS,this.entity,node.expression)) {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) {
        if (op(Op.EQUALS,this.entity,node.inKeyword)) {
            let previous : any = node.inKeyword.previous;
            if (is(previous, any) && op(Op.EQUALS,previous.lexeme,'in')) {
                previous = previous.previous;
            }
            if (previous != null && op(Op.EQUALS,previous.type,TokenType.EQ)) {
                this._addSuggestions(new core.DartList.literal(Keyword.CONST,Keyword.FALSE,Keyword.NEW,Keyword.NULL,Keyword.TRUE));
            }else {
                this._addSuggestion(Keyword.IN,DART_RELEVANCE_HIGH);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) {
        let constructorDeclaration : any = node.getAncestor((p : any) =>  {
            return is(p, any);
        });
        if (constructorDeclaration != null) {
            this._addSuggestions(new core.DartList.literal(Keyword.THIS));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) {
        if (op(Op.EQUALS,node.initialization,this.entity) && is(this.entity, any)) {
            if (_KeywordVisitor._isNextTokenSynthetic(this.entity,TokenType.SEMICOLON)) {
                this._addSuggestion(Keyword.VAR,DART_RELEVANCE_HIGH);
            }
        }
        if (op(Op.EQUALS,node.condition,this.entity) && is(this.entity, any) && node.variables != null) {
            if (_KeywordVisitor._isPreviousTokenSynthetic(this.entity,TokenType.SEMICOLON)) {
                this._addSuggestion(Keyword.IN,DART_RELEVANCE_HIGH);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) {
        if (op(Op.EQUALS,this.entity,node.body)) {
            let body : any = node.body;
            if (!body.isAsynchronous) {
                this._addSuggestion(Keyword.ASYNC,DART_RELEVANCE_HIGH);
                if (isNot(body, any)) {
                    this._addSuggestion2(properties.ASYNC_STAR,{
                        relevance : DART_RELEVANCE_HIGH});
                    this._addSuggestion2(properties.SYNC_STAR,{
                        relevance : DART_RELEVANCE_HIGH});
                }
            }
            if (is(node.body, any) && is(node.parent, any) && is(node.parent.parent, any)) {
                this._addCompilationUnitKeywords();
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) {
        if (_KeywordVisitor._isPreviousTokenSynthetic(this.entity,TokenType.CLOSE_PAREN)) {
            this._addSuggestion(Keyword.IS,DART_RELEVANCE_HIGH);
        }else if (op(Op.EQUALS,this.entity,node.thenStatement) || op(Op.EQUALS,this.entity,node.elseStatement)) {
            this._addStatementKeywords(node);
        }else if (op(Op.EQUALS,this.entity,node.condition)) {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) {
        if (op(Op.EQUALS,this.entity,node.asKeyword)) {
            if (op(Op.EQUALS,node.deferredKeyword,null)) {
                this._addSuggestion(Keyword.DEFERRED,DART_RELEVANCE_HIGH);
            }
        }
        if ((op(Op.EQUALS,this.entity,node.semicolon) && node.uri != null && op(Op.PLUS,node.uri.offset,1) != this.request.offset) || node.combinators.contains(this.entity)) {
            this._addImportDirectiveKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) {
        if (op(Op.EQUALS,this.entity,node.constructorName)) {
        }else {
            super.visitInstanceCreationExpression(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) {
        if (op(Op.EQUALS,this.entity,node.isOperator)) {
            this._addSuggestion(Keyword.IS,DART_RELEVANCE_HIGH);
        }else {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) {
        if (op(Op.EQUALS,this.entity,node.body)) {
            if (is(node.body, any)) {
                this._addClassBodyKeywords();
                this._addSuggestion(Keyword.ASYNC);
                this._addSuggestion2(properties.ASYNC_STAR);
                this._addSuggestion2(properties.SYNC_STAR);
            }else {
                this._addSuggestion(Keyword.ASYNC,DART_RELEVANCE_HIGH);
                if (isNot(node.body, any)) {
                    this._addSuggestion2(properties.ASYNC_STAR,{
                        relevance : DART_RELEVANCE_HIGH});
                    this._addSuggestion2(properties.SYNC_STAR,{
                        relevance : DART_RELEVANCE_HIGH});
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) {
        if (op(Op.EQUALS,this.entity,node.methodName)) {
        }else {
            super.visitMethodInvocation(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) {
        if (is(this.entity, any) && op(Op.EQUALS,this.entity,node.expression)) {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) {
        if (this.entity != node.identifier) {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) {
        if (this.entity != node.propertyName) {
            super.visitPropertyAccess(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) {
        if (op(Op.EQUALS,this.entity,node.expression)) {
            this._addExpressionKeywords(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringLiteral(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) {
        if (op(Op.EQUALS,this.entity,node.expression)) {
            this._addExpressionKeywords(node);
        }else if (op(Op.EQUALS,this.entity,node.rightBracket)) {
            if (node.members.isEmpty) {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),DART_RELEVANCE_HIGH);
            }else {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT));
                this._addStatementKeywords(node);
            }
        }
        if (node.members.contains(this.entity)) {
            if (op(Op.EQUALS,this.entity,node.members.first)) {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),DART_RELEVANCE_HIGH);
            }else {
                this._addSuggestions(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT));
                this._addStatementKeywords(node);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) {
        let obj = this.entity;
        if (is(obj, any) || (is(obj, any) && op(Op.EQUALS,obj.value(),Keyword.FINALLY))) {
            this._addSuggestion(Keyword.ON);
            this._addSuggestion(Keyword.CATCH);
            return null;
        }
        return visitStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) {
        if (op(Op.EQUALS,this.entity,node.initializer)) {
            this._addExpressionKeywords(node);
        }
    }
    _addClassBodyKeywords() : void {
        this._addSuggestions(new core.DartList.literal(Keyword.CONST,Keyword.DYNAMIC,Keyword.FACTORY,Keyword.FINAL,Keyword.GET,Keyword.OPERATOR,Keyword.SET,Keyword.STATIC,Keyword.VAR,Keyword.VOID));
    }
    _addClassDeclarationKeywords(node : any) : void {
        if (op(Op.EQUALS,node.extendsClause,null)) {
            this._addSuggestion(Keyword.EXTENDS,DART_RELEVANCE_HIGH);
        }else if (op(Op.EQUALS,node.withClause,null)) {
            this._addSuggestion(Keyword.WITH,DART_RELEVANCE_HIGH);
        }
        if (op(Op.EQUALS,node.implementsClause,null)) {
            this._addSuggestion(Keyword.IMPLEMENTS,DART_RELEVANCE_HIGH);
        }
    }
    _addCompilationUnitKeywords() : void {
        this._addSuggestions(new core.DartList.literal(Keyword.ABSTRACT,Keyword.CLASS,Keyword.CONST,Keyword.DYNAMIC,Keyword.FINAL,Keyword.TYPEDEF,Keyword.VAR,Keyword.VOID),DART_RELEVANCE_HIGH);
    }
    _addExpressionKeywords(node : any) : void {
        this._addSuggestions(new core.DartList.literal(Keyword.CONST,Keyword.FALSE,Keyword.NEW,Keyword.NULL,Keyword.TRUE));
        if (this._inClassMemberBody(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.SUPER,Keyword.THIS));
        }
        if (this._inAsyncMethodOrFunction(node)) {
            this._addSuggestion(Keyword.AWAIT);
        }
    }
    _addImportDirectiveKeywords(node : any) : void {
        let hasDeferredKeyword : boolean = node.deferredKeyword != null;
        let hasAsKeyword : boolean = node.asKeyword != null;
        if (!hasAsKeyword) {
            this._addSuggestion(Keyword.AS,DART_RELEVANCE_HIGH);
        }
        if (!hasDeferredKeyword) {
            if (!hasAsKeyword) {
                this._addSuggestion2(properties.DEFERRED_AS,{
                    relevance : DART_RELEVANCE_HIGH});
            }else if (op(Op.EQUALS,this.entity,node.asKeyword)) {
                this._addSuggestion(Keyword.DEFERRED,DART_RELEVANCE_HIGH);
            }
        }
        if (!hasDeferredKeyword || hasAsKeyword) {
            if (node.combinators.isEmpty) {
                this._addSuggestion(Keyword.SHOW,DART_RELEVANCE_HIGH);
                this._addSuggestion(Keyword.HIDE,DART_RELEVANCE_HIGH);
            }
        }
    }
    _addStatementKeywords(node : any) : void {
        if (this._inClassMemberBody(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.SUPER,Keyword.THIS));
        }
        if (this._inAsyncMethodOrFunction(node)) {
            this._addSuggestion(Keyword.AWAIT);
        }else if (this._inAsyncStarOrSyncStarMethodOrFunction(node)) {
            this._addSuggestion(Keyword.AWAIT);
            this._addSuggestion(Keyword.YIELD);
            this._addSuggestion2(properties.YIELD_STAR);
        }
        if (this._inLoop(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.BREAK,Keyword.CONTINUE));
        }
        if (this._inSwitch(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.BREAK));
        }
        if (this._isEntityAfterIfWithoutElse(node)) {
            this._addSuggestions(new core.DartList.literal(Keyword.ELSE));
        }
        this._addSuggestions(new core.DartList.literal(Keyword.ASSERT,Keyword.CONST,Keyword.DO,Keyword.FINAL,Keyword.FOR,Keyword.IF,Keyword.NEW,Keyword.RETURN,Keyword.SWITCH,Keyword.THROW,Keyword.TRY,Keyword.VAR,Keyword.VOID,Keyword.WHILE));
    }
    _addSuggestion(keyword : any,relevance? : number) : void {
        relevance = relevance || DART_RELEVANCE_KEYWORD;
        this._addSuggestion2(keyword.lexeme,{
            relevance : relevance});
    }
    _addSuggestion2(completion : string,_namedArguments? : {offset? : number,relevance? : number}) : void {
        let {offset,relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_KEYWORD}, _namedArguments );
        if (offset == null) {
            offset = new core.DartString(completion).length;
        }
        this.suggestions.add(new bare.createInstance(any,null,CompletionSuggestionKind.KEYWORD,relevance,completion,offset,0,false,false));
    }
    _addSuggestions(keywords : core.DartList<any>,relevance? : number) : void {
        relevance = relevance || DART_RELEVANCE_KEYWORD;
        keywords.forEach((keyword : any) =>  {
            this._addSuggestion(keyword,relevance);
        });
    }
    _inAsyncMethodOrFunction(node : any) : boolean {
        let body : any = node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        return body != null && body.isAsynchronous && op(Op.EQUALS,body.star,null);
    }
    _inAsyncStarOrSyncStarMethodOrFunction(node : any) : boolean {
        let body : any = node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        return body != null && body.keyword != null && body.star != null;
    }
    _inCatchClause(node : any) : boolean {
        return node.getAncestor((p : any) =>  {
            return is(p, any);
        }) != null;
    }
    _inClassMemberBody(node : any) : boolean {
        while (true){
            let body : any = node.getAncestor((n : any) =>  {
                return is(n, any);
            });
            if (op(Op.EQUALS,body,null)) {
                return false;
            }
            let parent : any = body.parent;
            if (is(parent, any) || is(parent, any)) {
                return true;
            }
            node = parent;
        }
    }
    _inDoLoop(node : any) : boolean {
        return node.getAncestor((p : any) =>  {
            return is(p, any);
        }) != null;
    }
    _inForLoop(node : any) : boolean {
        return node.getAncestor((p : any) =>  {
            return is(p, any) || is(p, any);
        }) != null;
    }
    _inLoop(node : any) : boolean {
        return this._inDoLoop(node) || this._inForLoop(node) || this._inWhileLoop(node);
    }
    _inSwitch(node : any) : boolean {
        return node.getAncestor((p : any) =>  {
            return is(p, any);
        }) != null;
    }
    _inWhileLoop(node : any) : boolean {
        return node.getAncestor((p : any) =>  {
            return is(p, any);
        }) != null;
    }
    _isEntityAfterIfWithoutElse(node : any) : boolean {
        let block : any = ((_32_)=>(!!_32_)?_32_.getAncestor((n : any) =>  {
            return is(n, any);
        }):null)(node);
        if (op(Op.EQUALS,block,null)) {
            return false;
        }
        let entity : core.DartObject = this.entity;
        if (is(entity, any)) {
            let entityIndex : number = block.statements.indexOf(entity);
            if (entityIndex > 0) {
                let prevStatement : any = op(Op.INDEX,block.statements,entityIndex - 1);
                return is(prevStatement, any) && op(Op.EQUALS,prevStatement.elseStatement,null);
            }
        }
        if (is(entity, any)) {
            for(let statement of block.statements) {
                if (op(Op.EQUALS,statement.endToken.next,entity)) {
                    return is(statement, any) && op(Op.EQUALS,statement.elseStatement,null);
                }
            }
        }
        return false;
    }
    static _isNextTokenSynthetic(entity : core.DartObject,type : any) : boolean {
        if (is(entity, any)) {
            let token : any = entity.beginToken;
            let nextToken : any = token.next;
            return nextToken.isSynthetic && op(Op.EQUALS,nextToken.type,type);
        }
        return false;
    }
    static _isPreviousTokenSynthetic(entity : core.DartObject,type : any) : boolean {
        if (is(entity, any)) {
            let token : any = entity.beginToken;
            let previousToken : any = token.previous;
            return previousToken.isSynthetic && op(Op.EQUALS,previousToken.type,type);
        }
        return false;
    }
}

export class properties {
    private static __$ASYNC_STAR;
    static get ASYNC_STAR() { 
        if (this.__$ASYNC_STAR===undefined) {
            this.__$ASYNC_STAR = 'async*';
        }
        return this.__$ASYNC_STAR;
    }
    static set ASYNC_STAR(__$value : any)  { 
        this.__$ASYNC_STAR = __$value;
    }

    private static __$DEFERRED_AS;
    static get DEFERRED_AS() { 
        if (this.__$DEFERRED_AS===undefined) {
            this.__$DEFERRED_AS = 'deferred as';
        }
        return this.__$DEFERRED_AS;
    }
    static set DEFERRED_AS(__$value : any)  { 
        this.__$DEFERRED_AS = __$value;
    }

    private static __$EXPORT_STATEMENT;
    static get EXPORT_STATEMENT() { 
        if (this.__$EXPORT_STATEMENT===undefined) {
            this.__$EXPORT_STATEMENT = "export '';";
        }
        return this.__$EXPORT_STATEMENT;
    }
    static set EXPORT_STATEMENT(__$value : any)  { 
        this.__$EXPORT_STATEMENT = __$value;
    }

    private static __$IMPORT_STATEMENT;
    static get IMPORT_STATEMENT() { 
        if (this.__$IMPORT_STATEMENT===undefined) {
            this.__$IMPORT_STATEMENT = "import '';";
        }
        return this.__$IMPORT_STATEMENT;
    }
    static set IMPORT_STATEMENT(__$value : any)  { 
        this.__$IMPORT_STATEMENT = __$value;
    }

    private static __$PART_STATEMENT;
    static get PART_STATEMENT() { 
        if (this.__$PART_STATEMENT===undefined) {
            this.__$PART_STATEMENT = "part '';";
        }
        return this.__$PART_STATEMENT;
    }
    static set PART_STATEMENT(__$value : any)  { 
        this.__$PART_STATEMENT = __$value;
    }

    private static __$SYNC_STAR;
    static get SYNC_STAR() { 
        if (this.__$SYNC_STAR===undefined) {
            this.__$SYNC_STAR = 'sync*';
        }
        return this.__$SYNC_STAR;
    }
    static set SYNC_STAR(__$value : any)  { 
        this.__$SYNC_STAR = __$value;
    }

    private static __$YIELD_STAR;
    static get YIELD_STAR() { 
        if (this.__$YIELD_STAR===undefined) {
            this.__$YIELD_STAR = 'yield*';
        }
        return this.__$YIELD_STAR;
    }
    static set YIELD_STAR(__$value : any)  { 
        this.__$YIELD_STAR = __$value;
    }

}
