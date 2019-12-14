/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/optype.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace OpType {
    export type Constructors = '_';
    export type Interface = Omit<OpType, Constructors>;
}
@DartClass
export class OpType {
    includeConstructorSuggestions : boolean;

    constructorSuggestionsFilter : (dartType : any,relevance : number) => number;

    includeTypeNameSuggestions : boolean;

    typeNameSuggestionsFilter : (dartType : any,relevance : number) => number;

    includeVoidReturnSuggestions : boolean;

    includeReturnValueSuggestions : boolean;

    returnValueSuggestionsFilter : (dartType : any,relevance : number) => number;

    includeNamedArgumentSuggestions : boolean;

    includeStatementLabelSuggestions : boolean;

    includeCaseLabelSuggestions : boolean;

    includeVarNameSuggestions : boolean;

    inStaticMethodBody : boolean;

    isPrefixed : boolean;

    suggestKind : any;

    @namedFactory
    static $forCompletion(target : any,offset : number) : OpType {
        let optype : OpType = new OpType._();
        target.containingNode.accept(new _OpTypeAstVisitor(optype,target.entity,offset));
        let mthDecl = target.containingNode.getAncestor((p : any) =>  {
            return is(p, any);
        });
        optype.inStaticMethodBody = is(mthDecl, any) && mthDecl.isStatic;
        return optype;
    }
    static forCompletion : new(target : any,offset : number) => OpType;

    @namedConstructor
    _() {
        this.includeConstructorSuggestions = false;
        this.constructorSuggestionsFilter = (_ : any,relevance : number) =>  {
            return relevance;
        };
        this.includeTypeNameSuggestions = false;
        this.typeNameSuggestionsFilter = (_ : any,relevance : number) =>  {
            return relevance;
        };
        this.includeVoidReturnSuggestions = false;
        this.includeReturnValueSuggestions = false;
        this.returnValueSuggestionsFilter = (_ : any,relevance : number) =>  {
            return relevance;
        };
        this.includeNamedArgumentSuggestions = false;
        this.includeStatementLabelSuggestions = false;
        this.includeCaseLabelSuggestions = false;
        this.includeVarNameSuggestions = false;
        this.inStaticMethodBody = false;
        this.isPrefixed = false;
        this.suggestKind = CompletionSuggestionKind.INVOCATION;
    }
    static _ : new() => OpType;

    get includeIdentifiers() : boolean {
        return !this.isPrefixed && (this.includeReturnValueSuggestions || this.includeTypeNameSuggestions || this.includeVoidReturnSuggestions || this.includeConstructorSuggestions);
    }
    get includeOnlyNamedArgumentSuggestions() : boolean {
        return this.includeNamedArgumentSuggestions && !this.includeTypeNameSuggestions && !this.includeReturnValueSuggestions && !this.includeVoidReturnSuggestions;
    }
    get includeOnlyTypeNameSuggestions() : boolean {
        return this.includeTypeNameSuggestions && !this.includeNamedArgumentSuggestions && !this.includeReturnValueSuggestions && !this.includeVoidReturnSuggestions;
    }
    static getPreviousStatement(node : any,entity : core.DartObject) : any {
        if (op(Op.EQUALS,entity,node.rightBracket)) {
            return node.statements.isNotEmpty ? node.statements.last : null;
        }
        if (is(entity, any)) {
            let index : number = node.statements.indexOf(entity);
            if (index > 0) {
                return op(Op.INDEX,node.statements,index - 1);
            }
            return null;
        }
        return null;
    }
}

export namespace _OpTypeAstVisitor {
    export type Constructors = '_OpTypeAstVisitor';
    export type Interface = Omit<_OpTypeAstVisitor, Constructors>;
}
@DartClass
export class _OpTypeAstVisitor extends any {
    entity : core.DartObject;

    offset : number;

    optype : OpType;

    constructor(optype : OpType,entity : core.DartObject,offset : number) {
    }
    @defaultConstructor
    _OpTypeAstVisitor(optype : OpType,entity : core.DartObject,offset : number) {
        this.optype = optype;
        this.entity = entity;
        this.offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : void {
        if (core.identical(this.entity,node.name)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeReturnValueSuggestions = true;
        }else if (core.identical(this.entity,node.constructorName)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeReturnValueSuggestions = true;
            this.optype.isPrefixed = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : void {
        let parent : any = node.parent;
        let parameters : core.DartList<any>;
        if (is(parent, any)) {
            let constructor : any;
            let name : any = ((t)=>(!!t)?t.name:null)(parent.constructorName);
            if (name != null) {
                constructor = name.bestElement;
            }else {
                let classElem = ((t)=>(!!t)?t.bestElement:null)(((t)=>(!!t)?t.name:null)(((t)=>(!!t)?t.type:null)(parent.constructorName)));
                if (is(classElem, any)) {
                    constructor = classElem.unnamedConstructor;
                }
            }
            if (is(constructor, any)) {
                parameters = constructor.parameters;
            }else if (op(Op.EQUALS,constructor,null)) {
                this.optype.includeNamedArgumentSuggestions = true;
            }
        }else if (is(parent, any)) {
            let function : any = parent.function;
            if (is(function, any)) {
                let elem = function.bestElement;
                if (is(elem, any)) {
                    parameters = elem.parameters;
                }else if (op(Op.EQUALS,elem,null)) {
                    this.optype.includeNamedArgumentSuggestions = true;
                }
            }
        }
        if (parameters != null) {
            let index : number;
            if (node.arguments.isEmpty) {
                index = 0;
            }else if (op(Op.EQUALS,this.entity,node.rightParenthesis)) {
                if (op(Op.EQUALS,((t)=>(!!t)?t.lexeme:null)(node.rightParenthesis.previous),',')) {
                    index = node.arguments.length;
                }else {
                    index = op(Op.MINUS,node.arguments.length,1);
                }
            }else {
                index = node.arguments.indexOf(this.entity);
            }
            if (0 <= index && index < parameters.length) {
                let param : any = parameters[index];
                if (op(Op.EQUALS,((t)=>(!!t)?t.parameterKind:null)(param),ParameterKind.NAMED)) {
                    this.optype.includeNamedArgumentSuggestions = true;
                    return;
                }
            }
        }
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : void {
        if (core.identical(this.entity,node.type)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.typeNameSuggestionsFilter = (dartType : any,relevance : number) =>  {
                let staticType : any = node.expression.staticType;
                if (staticType != null && (staticType.isDynamic || (dartType.isSubtypeOf(staticType) && dartType != staticType))) {
                    return relevance;
                }else {
                    return null;
                }
            };
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : void {
        if (core.identical(this.entity,node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    visitAssignmentExpression(node : any) : void {
        if (core.identical(this.entity,node.rightHandSide)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : void {
        if (core.identical(this.entity,node.rightOperand)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : void {
        let prevStmt : any = OpType.getPreviousStatement(node,this.entity);
        if (is(prevStmt, any)) {
            if (prevStmt.catchClauses.isEmpty && op(Op.EQUALS,prevStmt.finallyBlock,null)) {
                return;
            }
        }
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
        this.optype.includeVoidReturnSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : void {
        if (op(Op.EQUALS,node.label,null) || core.identical(this.entity,node.label)) {
            this.optype.includeStatementLabelSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : void {
        if (node.cascadeSections.contains(this.entity)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : void {
        if (core.identical(this.entity,node.exceptionType)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : void {
        if (node.members.contains(this.entity) || core.identical(this.entity,node.rightBracket)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassMember(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
        this.optype.includeVoidReturnSuggestions = true;
        this.optype.suggestKind = CompletionSuggestionKind.IDENTIFIER;
    }
    visitCompilationUnit(node : any) : void {
        if (isNot(this.entity, any)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) {
        if (core.identical(this.entity,node.name)) {
            let type : any = node.type;
            if (type != null) {
                let prefix : any = type.name;
                if (prefix != null) {
                    this.optype.includeConstructorSuggestions = true;
                    this.optype.isPrefixed = true;
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : void {
        if (op(Op.EQUALS,node.label,null) || core.identical(this.entity,node.label)) {
            this.optype.includeStatementLabelSuggestions = true;
            this.optype.includeCaseLabelSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : void {
        if (core.identical(this.entity,node.defaultValue)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : void {
        if (core.identical(this.entity,node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
        this.optype.includeVoidReturnSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpression(node : any) : void {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : void {
        if (is(this.entity, any)) {
            let token : any = this.entity;
            if (op(Op.EQUALS,token.lexeme,'[]') && this.offset == op(Op.PLUS,token.offset,1)) {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
            }
            if ((token.isSynthetic || op(Op.EQUALS,token.lexeme,';')) && is(node.expression, any)) {
                this.optype.includeVarNameSuggestions = true;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) : void {
        if (core.identical(this.entity,node.superclass)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : void {
        if (op(Op.EQUALS,this.entity,node.identifier)) {
            this.optype.isPrefixed = true;
        }else {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : void {
        if (core.identical(this.entity,node.identifier)) {
            this.optype.includeTypeNameSuggestions = true;
        }
        if (core.identical(this.entity,node.loopVariable)) {
            this.optype.includeTypeNameSuggestions = true;
        }
        if (core.identical(this.entity,node.inKeyword) && this.offset <= node.inKeyword.offset) {
            if (op(Op.EQUALS,node.identifier,null) && op(Op.EQUALS,node.loopVariable,null)) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
        if (core.identical(this.entity,node.iterable)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : void {
        let entity : any = this.entity;
        if (is(entity, any) && entity.previous != null) {
            let type : any = entity.previous.type;
            if (op(Op.EQUALS,type,TokenType.OPEN_PAREN) || op(Op.EQUALS,type,TokenType.COMMA)) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
        if (is(entity, any)) {
            entity = entity.parameter;
        }
        if (is(entity, any)) {
            if (this.offset < entity.thisKeyword.offset) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
        if (is(entity, any)) {
            if (op(Op.EQUALS,entity.type,null)) {
                this.optype.includeTypeNameSuggestions = true;
            }
            if (entity.type != null && op(Op.LEQ,entity.type.offset,this.offset) && this.offset <= entity.type.end) {
                this.optype.includeTypeNameSuggestions = true;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : void {
        let entity = this.entity;
        if (this._isEntityPrevTokenSynthetic()) {
        }else if (is(entity, any) && entity.isSynthetic && op(Op.EQUALS,node.leftSeparator,entity)) {
            this.optype.includeVarNameSuggestions = true;
        }else {
            if (op(Op.EQUALS,entity,node.initialization) || op(Op.EQUALS,entity,node.variables)) {
                this.optype.includeTypeNameSuggestions = true;
            }
            if (op(Op.EQUALS,entity,node.condition)) {
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeReturnValueSuggestions = true;
            }
            if (node.updaters.contains(entity)) {
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeVoidReturnSuggestions = true;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : void {
        if (core.identical(this.entity,node.returnType) || core.identical(this.entity,node.name) && op(Op.EQUALS,node.returnType,null)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : void {
        if (core.identical(this.entity,node.returnType) || core.identical(this.entity,node.name) && op(Op.EQUALS,node.returnType,null)) {
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : void {
        if (this._isEntityPrevTokenSynthetic()) {
        }else if (core.identical(this.entity,node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }else if (core.identical(this.entity,node.thenStatement) || core.identical(this.entity,node.elseStatement)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeVoidReturnSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) : void {
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : void {
        if (core.identical(this.entity,node.constructorName)) {
            this.optype.includeConstructorSuggestions = true;
            this.optype.constructorSuggestionsFilter = (dartType : any,relevance : number) =>  {
                let localTypeAssertion : any = null;
                if (is(node.parent, any)) {
                    let varDeclaration : any = node.parent as any;
                    localTypeAssertion = ((t)=>(!!t)?t.type:null)(resolutionMap.elementDeclaredByVariableDeclaration(varDeclaration));
                }else if (is(node.parent, any)) {
                    let assignmentExpression : any = node.parent as any;
                    localTypeAssertion = assignmentExpression.leftHandSide.staticType;
                }
                if (op(Op.EQUALS,localTypeAssertion,null) || op(Op.EQUALS,dartType,null) || localTypeAssertion.isDynamic) {
                    return relevance;
                }else if (op(Op.EQUALS,localTypeAssertion,dartType)) {
                    return relevance + DART_RELEVANCE_INCREMENT;
                }else if (dartType.isSubtypeOf(localTypeAssertion)) {
                    return relevance;
                }else {
                    return null;
                }
            };
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = node.leftBracket != null && op(Op.GT,node.leftBracket.length,1);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : void {
        if (core.identical(this.entity,node.type)) {
            this.optype.includeTypeNameSuggestions = true;
            this.optype.typeNameSuggestionsFilter = (dartType : any,relevance : number) =>  {
                let staticType : any = node.expression.staticType;
                if (staticType != null && (staticType.isDynamic || (dartType.isSubtypeOf(staticType) && dartType != staticType))) {
                    return relevance;
                }else {
                    return null;
                }
            };
        }
    }
    visitLibraryIdentifier(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : void {
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : void {
        let isThis : boolean = is(node.target, any);
        if (core.identical(this.entity,node.operator) && this.offset > node.operator.offset) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }else if (core.identical(this.entity,node.methodName)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.returnValueSuggestionsFilter = (dartType : any,relevance : number) =>  {
                let type : any = ((t)=>(!!t)?t.type:null)(resolutionMap.elementForNamedExpression(node));
                let isEnum : boolean = type != null && is(type.element, any) && (type.element as any).isEnum;
                if (isEnum) {
                    if (op(Op.EQUALS,type,dartType)) {
                        return relevance + DART_RELEVANCE_INCREMENT;
                    }else {
                        return null;
                    }
                }
                if (type != null && dartType != null && !type.isDynamic && dartType.isSubtypeOf(type)) {
                    return relevance + DART_RELEVANCE_INCREMENT;
                }else {
                    return relevance;
                }
            };
            this.optype.includeTypeNameSuggestions = true;
            let grandparent : any = node.parent.parent;
            if (is(grandparent, any)) {
                let element : any = (grandparent as any).staticElement;
                let parameters : core.DartList<any> = element.parameters;
                let parameterElement : any = parameters.firstWhere((e : any) =>  {
                    if (is(e, any)) {
                        return op(Op.EQUALS,e.field.name,node.name.label.name);
                    }
                    return op(Op.EQUALS,e.parameterKind,ParameterKind.NAMED) && op(Op.EQUALS,e.name,node.name.label.name);
                },{
                    orElse : () =>  {
                        return null;
                    }});
                if (is(((t)=>(!!t)?t.type:null)(parameterElement), any)) {
                    this.optype.includeVoidReturnSuggestions = true;
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNormalFormalParameter(node : any) : void {
        if (node.identifier != this.entity) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    visitParenthesizedExpression(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : void {
        if (core.identical(this.entity,node.identifier) || (node.identifier != null && node.identifier.isSynthetic && core.identical(this.entity,node.identifier.beginToken.previous))) {
            this.optype.isPrefixed = true;
            if (is(node.parent, any) && is(node.parent.parent, any)) {
                this.optype.includeConstructorSuggestions = true;
            }else {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeVoidReturnSuggestions = is(node.parent, any);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : void {
        if (core.identical(this.entity,node.operand)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : void {
        let isThis : boolean = is(node.target, any);
        if (is(node.realTarget, any) && node.realTarget.isSynthetic) {
            return;
        }
        if (core.identical(this.entity,node.operator) && this.offset > node.operator.offset) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis;
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }else if (core.identical(this.entity,node.propertyName)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = !isThis && (isNot(node.parent, any));
            this.optype.includeVoidReturnSuggestions = true;
            this.optype.isPrefixed = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : void {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringLiteral(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }else if (node.statements.contains(this.entity)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
            this.optype.includeVoidReturnSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : void {
        if (core.identical(this.entity,node.expression)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
        if (core.identical(this.entity,node.rightBracket)) {
            if (node.members.isNotEmpty) {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeVoidReturnSuggestions = true;
            }
        }
        if (is(this.entity, any) && this.entity != node.members.first) {
            let member : any = this.entity as any;
            if (this.offset <= member.offset) {
                this.optype.includeReturnValueSuggestions = true;
                this.optype.includeTypeNameSuggestions = true;
                this.optype.includeVoidReturnSuggestions = true;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : void {
        if (is(this.entity, any)) {
            let token : any = this.entity;
            if (token.isSynthetic || op(Op.EQUALS,token.lexeme,';')) {
                this.optype.includeVarNameSuggestions = true;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeArgumentList(node : any) : void {
        let arguments : any = node.arguments;
        for(let type of arguments) {
            if (core.identical(this.entity,type)) {
                this.optype.includeTypeNameSuggestions = true;
                break;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypedLiteral(node : any) : void {
        this.optype.includeReturnValueSuggestions = true;
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : void {
        /* TODO (AssertStatementImpl) : assert (identical(entity, node.typeArguments)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : void {
        this.optype.includeTypeNameSuggestions = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : void {
        if (core.identical(this.entity,node.initializer)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : void {
        if (op(Op.EQUALS,node.keyword,null) || node.keyword.lexeme != 'var') {
            if (op(Op.EQUALS,node.type,null) || core.identical(this.entity,node.type)) {
                this.optype.includeTypeNameSuggestions = true;
            }else if (node.type != null && is(this.entity, any)) {
                this.optype.includeVarNameSuggestions = true;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : void {
        if (core.identical(this.entity,node.condition)) {
            this.optype.includeReturnValueSuggestions = true;
            this.optype.includeTypeNameSuggestions = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) : void {
        this.optype.includeTypeNameSuggestions = true;
    }
    _isEntityPrevTokenSynthetic() : boolean {
        let entity : core.DartObject = this.entity;
        if ((is(entity, any) && ((t)=>(!!t)?t.isSynthetic:null)(entity.beginToken.previous) || false)) {
            return true;
        }
        return false;
    }
}

export class properties {
}
