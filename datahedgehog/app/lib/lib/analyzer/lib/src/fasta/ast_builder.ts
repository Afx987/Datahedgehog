/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/ast_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer/lib/dart/ast/standard_ast_factory";
import * as lib4 from "./element_store";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./token_utils";
import * as lib7 from "./analyzer";

export namespace AstBuilder {
    export type Constructors = 'AstBuilder';
    export type Interface = Omit<AstBuilder, Constructors>;
}
@DartClass
export class AstBuilder extends any {
    ast : any;

    errorReporter : any;

    library : any;

    member : any;

    elementStore : lib4.ElementStore;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib5.Uri;

    parser : any;

    parseGenericMethodComments : boolean;

    className : string;

    constructor(errorReporter : any,library : any,member : any,elementStore : lib4.ElementStore,scope : any,uri? : lib5.Uri) {
    }
    @defaultConstructor
    AstBuilder(errorReporter : any,library : any,member : any,elementStore : lib4.ElementStore,scope : any,uri? : lib5.Uri) {
        this.ast = lib3.astFactory;
        this.parseGenericMethodComments = false;
        this.uri = (uri || library.fileUri);
        super.DartObject(scope);
        this.errorReporter = errorReporter;
        this.library = library;
        this.member = member;
        this.elementStore = elementStore;
    }
    createJumpTarget(kind : any,charOffset : number) {
        return null;
    }
    beginLiteralString(token : any) : void {
        this.debugEvent("beginLiteralString");
        push(token);
    }
    handleNamedArgument(colon : any) : void {
        this.debugEvent("NamedArgument");
        let expression : any = pop();
        let name : any = pop();
        push(this.ast.namedExpression(this.ast.label(name,lib6.toAnalyzerToken(colon)),expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoConstructorReferenceContinuationAfterTypeArguments(token : any) : void {
        this.debugEvent("NoConstructorReferenceContinuationAfterTypeArguments");
        push(NullValue.ConstructorReferenceContinuationAfterTypeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstructorReference(start : any,periodBeforeName : any,endToken : any) : void {
        this.debugEvent("ConstructorReference");
        let constructorName : any = pop();
        let typeArguments : any = pop();
        let typeNameIdentifier : any = pop();
        push(this.ast.constructorName(this.ast.typeName(typeNameIdentifier,typeArguments),lib6.toAnalyzerToken(periodBeforeName),constructorName));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstExpression(token : any) : void {
        this.debugEvent("ConstExpression");
        this._handleInstanceCreation(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstLiteral(token : any) : void {
        this.debugEvent("endConstLiteral");
    }
    _handleInstanceCreation(token : any) : void {
        let arguments : any = pop();
        let constructorName : any = pop();
        push(this.ast.instanceCreationExpression(lib6.toAnalyzerToken(token),constructorName,arguments.argumentList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endNewExpression(token : any) : void {
        this.debugEvent("NewExpression");
        this._handleInstanceCreation(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleParenthesizedExpression(token : any) : void {
        this.debugEvent("ParenthesizedExpression");
        let expression : any = pop();
        push(this.ast.parenthesizedExpression(lib6.toAnalyzerToken(token),expression,lib6.toAnalyzerToken(token.endGroup)));
    }
    handleStringPart(token : any) : void {
        this.debugEvent("StringPart");
        push(token);
    }
    doStringPart(token : any) : void {
        push(this.ast.simpleStringLiteral(lib6.toAnalyzerToken(token),token.lexeme));
    }
    endLiteralString(interpolationCount : number,endToken : any) : void {
        this.debugEvent("endLiteralString");
        if (interpolationCount == 0) {
            let token : any = pop();
            let value : string = unescapeString(token.lexeme);
            push(this.ast.simpleStringLiteral(lib6.toAnalyzerToken(token),value));
        }else {
            let parts : core.DartList<any> = popList(1 + interpolationCount * 2);
            let first : any = parts.first;
            let last : any = parts.last;
            let quote : any = analyzeQuote(first.lexeme);
            let elements : core.DartList<any> = new core.DartList.literal<any>();
            elements.add(this.ast.interpolationString(lib6.toAnalyzerToken(first),unescapeFirstStringPart(first.lexeme,quote)));
            for(let i : number = 1; i < parts.length - 1; i++){
                let part = parts[i];
                if (is(part, any)) {
                    elements.add(this.ast.interpolationString(lib6.toAnalyzerToken(part),part.lexeme));
                }else if (is(part, any)) {
                    elements.add(this.ast.interpolationExpression(null,part,null));
                }else {
                    internalError(`Unexpected part in string interpolation: ${part.runtimeType}`);
                }
            }
            elements.add(this.ast.interpolationString(lib6.toAnalyzerToken(last),unescapeLastStringPart(last.lexeme,quote)));
            push(this.ast.stringInterpolation(elements));
        }
    }
    handleScript(token : any) : void {
        this.debugEvent("Script");
        push(this.ast.scriptTag(lib6.toAnalyzerToken(token)));
    }
    handleStringJuxtaposition(literalCount : number) : void {
        this.debugEvent("StringJuxtaposition");
        push(this.ast.adjacentStrings(popList(literalCount)));
    }
    endArguments(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("Arguments");
        let expressions : core.DartList<any> = popList(count);
        let arguments : any = this.ast.argumentList(lib6.toAnalyzerToken(beginToken),expressions,lib6.toAnalyzerToken(endToken));
        push(this.ast.methodInvocation(null,null,null,null,arguments));
    }
    handleIdentifier(token : any,context : any) : void {
        this.debugEvent("handleIdentifier");
        let analyzerToken : any = lib6.toAnalyzerToken(token);
        if (context.inSymbol) {
            push(analyzerToken);
            return;
        }
        let identifier : any = this.ast.simpleIdentifier(analyzerToken,{
            isDeclaration : context.inDeclaration});
        if (context.inLibraryOrPartOfDeclaration) {
            if (!context.isContinuation) {
                push(new core.DartList.literal(identifier));
            }else {
                push(identifier);
            }
        }else if (op(Op.EQUALS,context,IdentifierContext.enumValueDeclaration)) {
            let metadata : core.DartList<any>;
            let comment : any = this._toAnalyzerComment(token.precedingComments);
            push(this.ast.enumConstantDeclaration(comment,metadata,identifier));
        }else {
            if (context.isScopeReference) {
                let name : string = token.lexeme;
                let builder : any = scope.lookup(name,token.charOffset,this.uri);
                if (builder != null) {
                    let element : any = op(Op.INDEX,this.elementStore,builder);
                    /* TODO (AssertStatementImpl) : assert (element != null); */;
                    identifier.staticElement = element;
                }
            }else if (op(Op.EQUALS,context,IdentifierContext.classDeclaration)) {
                this.className = identifier.name;
            }
            push(identifier);
        }
    }
    endSend(beginToken : any,endToken : any) : void {
        this.debugEvent("Send");
        let arguments : any = pop();
        let typeArguments : any = pop();
        if (arguments != null) {
            this.doInvocation(endToken,typeArguments,arguments);
        }else {
            this.doPropertyGet(endToken);
        }
    }
    doInvocation(token : any,typeArguments : any,arguments : any) : void {
        let receiver : any = pop();
        if (is(receiver, any)) {
            arguments.methodName = receiver;
            if (typeArguments != null) {
                arguments.typeArguments = typeArguments;
            }
            push(arguments);
        }else {
            push(this.ast.functionExpressionInvocation(receiver,typeArguments,arguments.argumentList));
        }
    }
    doPropertyGet(token : any) : void {
    }
    endExpressionStatement(token : any) : void {
        this.debugEvent("ExpressionStatement");
        push(this.ast.expressionStatement(pop(),lib6.toAnalyzerToken(token)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEmptyFunctionBody(semicolon : any) : void {
        this.debugEvent("EmptyFunctionBody");
        pop();
        pop();
        push(this.ast.emptyFunctionBody(lib6.toAnalyzerToken(semicolon)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEmptyStatement(token : any) : void {
        this.debugEvent("EmptyStatement");
        push(this.ast.emptyStatement(lib6.toAnalyzerToken(token)));
    }
    endBlockFunctionBody(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("BlockFunctionBody");
        let statements : core.DartList<any> = popList(count);
        if (beginToken != null) {
            exitLocalScope();
        }
        let block : any = this.ast.block(lib6.toAnalyzerToken(beginToken),statements,lib6.toAnalyzerToken(endToken));
        let star : any = pop();
        let asyncKeyword : any = pop();
        push(this.ast.blockFunctionBody(asyncKeyword,star,block));
    }
    finishFunction(formals : any,asyncModifier : any,body : any) : void {
        this.debugEvent("finishFunction");
        let bodyStatement : any;
        if (is(body, any)) {
            bodyStatement = this.ast.emptyStatement(body.semicolon);
        }else if (is(body, any)) {
            bodyStatement = this.ast.returnStatement(null,body.expression,null);
        }else {
            bodyStatement = (body as any).block;
        }
        let kernel = lib7.toKernel(bodyStatement,this.elementStore,this.library.library,scope);
        if (is(this.member, any)) {
            let builder : any = this.member;
            builder.body = kernel;
        }else {
            internalError(`Internal error: expected procedure, but got: ${this.member}`);
        }
    }
    beginCascade(token : any) : void {
        this.debugEvent("beginCascade");
        let expression : any = pop();
        push(token);
        if (is(expression, any)) {
            push(expression);
        }else {
            push(this.ast.cascadeExpression(expression,new core.DartList.literal<any>()));
        }
        push(NullValue.CascadeReceiver);
    }
    endCascade() : void {
        this.debugEvent("Cascade");
        let expression : any = pop();
        let receiver : any = pop();
        pop();
        receiver.cascadeSections.add(expression);
        push(receiver);
    }
    handleOperator(token : any) : void {
        this.debugEvent("Operator");
        push(lib6.toAnalyzerToken(token));
    }
    handleSymbolVoid(token : any) : void {
        this.debugEvent("SymbolVoid");
        push(lib6.toAnalyzerToken(token));
    }
    handleBinaryExpression(token : any) : void {
        this.debugEvent("BinaryExpression");
        if (core.identical(".",token.stringValue) || core.identical("?.",token.stringValue) || core.identical("..",token.stringValue)) {
            this.doDotExpression(token);
        }else {
            let right : any = pop();
            let left : any = pop();
            push(this.ast.binaryExpression(left,lib6.toAnalyzerToken(token),right));
        }
    }
    doDotExpression(token : any) : void {
        let identifierOrInvoke : any = pop();
        let receiver : any = pop();
        if (is(identifierOrInvoke, any)) {
            if (is(receiver, any) && core.identical('.',token.stringValue)) {
                push(this.ast.prefixedIdentifier(receiver,lib6.toAnalyzerToken(token),identifierOrInvoke));
            }else {
                push(this.ast.propertyAccess(receiver,lib6.toAnalyzerToken(token),identifierOrInvoke));
            }
        }else if (is(identifierOrInvoke, any)) {
            /* TODO (AssertStatementImpl) : assert (identifierOrInvoke.target == null); */;
            ((_) : any =>  {
                {
                    _.target = receiver;
                    _.operator = lib6.toAnalyzerToken(token);
                    return _;
                }
            })(identifierOrInvoke);
            push(identifierOrInvoke);
        }else {
            internalError(`Unhandled property access: ${identifierOrInvoke.runtimeType}`);
        }
    }
    handleLiteralInt(token : any) : void {
        this.debugEvent("LiteralInt");
        push(this.ast.integerLiteral(lib6.toAnalyzerToken(token),core.DartInt.parse(token.lexeme)));
    }
    handleExpressionFunctionBody(arrowToken : any,endToken : any) : void {
        this.debugEvent("ExpressionFunctionBody");
        let expression : any = pop();
        let star : any = pop();
        let asyncKeyword : any = pop();
        /* TODO (AssertStatementImpl) : assert (star == null); */;
        push(this.ast.expressionFunctionBody(asyncKeyword,lib6.toAnalyzerToken(arrowToken),expression,lib6.toAnalyzerToken(endToken)));
    }
    endReturnStatement(hasExpression : boolean,beginToken : any,endToken : any) : void {
        this.debugEvent("ReturnStatement");
        let expression : any = hasExpression ? pop() : null;
        push(this.ast.returnStatement(lib6.toAnalyzerToken(beginToken),expression,lib6.toAnalyzerToken(endToken)));
    }
    endIfStatement(ifToken : any,elseToken : any) : void {
        let elsePart : any = popIfNotNull(elseToken);
        let thenPart : any = pop();
        let condition : any = pop();
        let leftParenthesis : any = ifToken.next;
        push(this.ast.ifStatement(lib6.toAnalyzerToken(ifToken),lib6.toAnalyzerToken(ifToken.next),condition,lib6.toAnalyzerToken(leftParenthesis.endGroup),thenPart,lib6.toAnalyzerToken(elseToken),elsePart));
    }
    prepareInitializers() : void {
        this.debugEvent("prepareInitializers");
    }
    handleNoInitializers() : void {
        this.debugEvent("NoInitializers");
        push(NullValue.ConstructorInitializerSeparator);
        push(NullValue.ConstructorInitializers);
    }
    endInitializers(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("Initializers");
        let initializerObjects : core.DartList<core.DartObject> = (popList(count) || new core.DartList.literal());
        push(beginToken);
        let initializers = new core.DartList.literal<any>();
        for(let initializerObject of initializerObjects) {
            if (is(initializerObject, any)) {
                let function : any = initializerObject.function;
                if (is(function, any)) {
                    initializers.add(this.ast.superConstructorInvocation(function.superKeyword,null,null,initializerObject.argumentList));
                }else {
                    initializers.add(this.ast.redirectingConstructorInvocation((function as any).thisKeyword,null,null,initializerObject.argumentList));
                }
            }else if (is(initializerObject, any)) {
                let target : any = initializerObject.target;
                if (is(target, any)) {
                    initializers.add(this.ast.superConstructorInvocation(target.superKeyword,initializerObject.operator,initializerObject.methodName,initializerObject.argumentList));
                }else {
                    initializers.add(this.ast.redirectingConstructorInvocation((target as any).thisKeyword,initializerObject.operator,initializerObject.methodName,initializerObject.argumentList));
                }
            }else if (is(initializerObject, any)) {
                let thisKeyword : any;
                let period : any;
                let fieldName : any;
                let left : any = initializerObject.leftHandSide;
                if (is(left, any)) {
                    let thisExpression = left.target as any;
                    thisKeyword = thisExpression.thisKeyword;
                    period = left.operator;
                    fieldName = left.propertyName;
                }else {
                    fieldName = left as any;
                }
                initializers.add(this.ast.constructorFieldInitializer(thisKeyword,period,fieldName,initializerObject.operator,initializerObject.rightHandSide));
            }
        }
        push(initializers);
    }
    endVariableInitializer(assignmentOperator : any) : void {
        this.debugEvent("VariableInitializer");
        /* TODO (AssertStatementImpl) : assert (assignmentOperator.stringValue == "="); */;
        let initializer : any = pop();
        let identifier : any = pop();
        push(this.ast.variableDeclaration(identifier,lib6.toAnalyzerToken(assignmentOperator),initializer));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endWhileStatement(whileKeyword : any,endToken : any) : void {
        this.debugEvent("WhileStatement");
        let body : any = pop();
        let condition : any = pop();
        exitContinueTarget();
        exitBreakTarget();
        push(this.ast.whileStatement(lib6.toAnalyzerToken(whileKeyword),condition.leftParenthesis,condition.expression,condition.rightParenthesis,body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endYieldStatement(yieldToken : any,starToken : any,endToken : any) : void {
        this.debugEvent("YieldStatement");
        /* TODO (AssertStatementImpl) : assert (endToken.lexeme == ';'); */;
        let expression : any = pop();
        push(this.ast.yieldStatement(lib6.toAnalyzerToken(yieldToken),lib6.toAnalyzerToken(starToken),expression,lib6.toAnalyzerToken(endToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoVariableInitializer(token : any) : void {
        this.debugEvent("NoVariableInitializer");
    }
    endInitializedIdentifier(nameToken : any) : void {
        this.debugEvent("InitializedIdentifier");
        let node : any = pop();
        let variable : any;
        if (is(node, any)) {
            variable = node;
        }else if (is(node, any)) {
            variable = this.ast.variableDeclaration(node,null,null);
        }else {
            internalError(`unhandled identifier: ${node.runtimeType}`);
        }
        push(variable);
        op(Op.INDEX_ASSIGN,scope,variable.name.name,variable.name.staticElement = new lib4.AnalyzerLocalVariableElemment(variable));
    }
    endVariablesDeclaration(count : number,endToken : any) : void {
        this.debugEvent("VariablesDeclaration");
        let variables : core.DartList<any> = popList(count);
        let type : any = pop();
        let modifiers : _Modifiers = pop();
        let keyword : any = ((t)=>(!!t)?t.finalConstOrVarKeyword:null)(modifiers);
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.variableDeclarationStatement(this.ast.variableDeclarationList(comment,metadata,lib6.toAnalyzerToken(keyword),type,variables),lib6.toAnalyzerToken(endToken)));
    }
    handleAssignmentExpression(token : any) : void {
        this.debugEvent("AssignmentExpression");
        let rhs : any = pop();
        let lhs : any = pop();
        push(this.ast.assignmentExpression(lhs,lib6.toAnalyzerToken(token),rhs));
    }
    endBlock(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("Block");
        let statements : core.DartList<any> = (popList(count) || new core.DartList.literal<any>());
        exitLocalScope();
        push(this.ast.block(lib6.toAnalyzerToken(beginToken),statements,lib6.toAnalyzerToken(endToken)));
    }
    endForStatement(forKeyword : any,leftSeparator : any,updateExpressionCount : number,endToken : any) : void {
        this.debugEvent("ForStatement");
        let body : any = pop();
        let updates : core.DartList<any> = popList(updateExpressionCount);
        let conditionStatement : any = pop();
        let initializerPart : core.DartObject = pop();
        exitLocalScope();
        exitContinueTarget();
        exitBreakTarget();
        let leftParenthesis : any = forKeyword.next;
        let variableList : any;
        let initializer : any;
        if (is(initializerPart, any)) {
            variableList = initializerPart.variables;
        }else {
            initializer = initializerPart as any;
        }
        let condition : any;
        let rightSeparator : any;
        if (is(conditionStatement, any)) {
            condition = conditionStatement.expression;
            rightSeparator = conditionStatement.semicolon;
        }else {
            rightSeparator = (conditionStatement as any).semicolon;
        }
        push(this.ast.forStatement(lib6.toAnalyzerToken(forKeyword),lib6.toAnalyzerToken(leftParenthesis),variableList,initializer,lib6.toAnalyzerToken(leftSeparator),condition,rightSeparator,updates,lib6.toAnalyzerToken(leftParenthesis.endGroup),body));
    }
    handleLiteralList(count : number,beginToken : any,constKeyword : any,endToken : any) : void {
        this.debugEvent("LiteralList");
        let expressions : core.DartList<any> = popList(count);
        let typeArguments : any = pop();
        push(this.ast.listLiteral(lib6.toAnalyzerToken(constKeyword),typeArguments,lib6.toAnalyzerToken(beginToken),expressions,lib6.toAnalyzerToken(endToken)));
    }
    handleAsyncModifier(asyncToken : any,starToken : any) : void {
        this.debugEvent("AsyncModifier");
        push((lib6.toAnalyzerToken(asyncToken) || NullValue.FunctionBodyAsyncToken));
        push((lib6.toAnalyzerToken(starToken) || NullValue.FunctionBodyStarToken));
    }
    endAwaitExpression(beginToken : any,endToken : any) : void {
        this.debugEvent("AwaitExpression");
        push(this.ast.awaitExpression(lib6.toAnalyzerToken(beginToken),pop()));
    }
    handleLiteralBool(token : any) : void {
        this.debugEvent("LiteralBool");
        let value : boolean = core.identical(token.stringValue,"true");
        /* TODO (AssertStatementImpl) : assert (value || identical(token.stringValue, "false")); */;
        push(this.ast.booleanLiteral(lib6.toAnalyzerToken(token),value));
    }
    handleLiteralDouble(token : any) : void {
        this.debugEvent("LiteralDouble");
        push(this.ast.doubleLiteral(lib6.toAnalyzerToken(token),core.DartDouble.parse(token.lexeme)));
    }
    handleLiteralNull(token : any) : void {
        this.debugEvent("LiteralNull");
        push(this.ast.nullLiteral(lib6.toAnalyzerToken(token)));
    }
    handleLiteralMap(count : number,beginToken : any,constKeyword : any,endToken : any) : void {
        this.debugEvent("LiteralMap");
        let entries : core.DartList<any> = (popList(count) || new core.DartList.literal<any>());
        let typeArguments : any = pop();
        push(this.ast.mapLiteral(lib6.toAnalyzerToken(constKeyword),typeArguments,lib6.toAnalyzerToken(beginToken),entries,lib6.toAnalyzerToken(endToken)));
    }
    endLiteralMapEntry(colon : any,endToken : any) : void {
        this.debugEvent("LiteralMapEntry");
        let value : any = pop();
        let key : any = pop();
        push(this.ast.mapLiteralEntry(key,lib6.toAnalyzerToken(colon),value));
    }
    endLiteralSymbol(hashToken : any,tokenCount : number) : void {
        this.debugEvent("LiteralSymbol");
        let components : core.DartList<any> = popList(tokenCount);
        push(this.ast.symbolLiteral(lib6.toAnalyzerToken(hashToken),components));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSuperExpression(token : any,context : any) : void {
        this.debugEvent("SuperExpression");
        push(this.ast.superExpression(lib6.toAnalyzerToken(token)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleThisExpression(token : any,context : any) : void {
        this.debugEvent("ThisExpression");
        push(this.ast.thisExpression(lib6.toAnalyzerToken(token)));
    }
    handleType(beginToken : any,endToken : any) : void {
        this.debugEvent("Type");
        let arguments : any = pop();
        let name : any = pop();
        let cls : lib4.KernelClassElement = name.staticElement;
        push(((_) : any =>  {
            {
                _.type = ((t)=>(!!t)?t.rawType:null)(cls);
                return _;
            }
        })(this.ast.typeName(name,arguments)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAssertStatement(assertKeyword : any,leftParenthesis : any,comma : any,rightParenthesis : any,semicolon : any) : void {
        this.debugEvent("AssertStatement");
        let message : any = popIfNotNull(comma);
        let condition : any = pop();
        push(this.ast.assertStatement(lib6.toAnalyzerToken(assertKeyword),lib6.toAnalyzerToken(leftParenthesis),condition,lib6.toAnalyzerToken(comma),message,lib6.toAnalyzerToken(rightParenthesis),lib6.toAnalyzerToken(semicolon)));
    }
    handleAsOperator(operator : any,endToken : any) : void {
        this.debugEvent("AsOperator");
        let type : any = pop();
        let expression : any = pop();
        push(this.ast.asExpression(expression,lib6.toAnalyzerToken(operator),type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleBreakStatement(hasTarget : boolean,breakKeyword : any,semicolon : any) : void {
        this.debugEvent("BreakStatement");
        let label : any = hasTarget ? pop() : null;
        push(this.ast.breakStatement(lib6.toAnalyzerToken(breakKeyword),label,lib6.toAnalyzerToken(semicolon)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleContinueStatement(hasTarget : boolean,continueKeyword : any,semicolon : any) : void {
        this.debugEvent("ContinueStatement");
        let label : any = hasTarget ? pop() : null;
        push(this.ast.continueStatement(lib6.toAnalyzerToken(continueKeyword),label,lib6.toAnalyzerToken(semicolon)));
    }
    handleIsOperator(operator : any,not : any,endToken : any) : void {
        this.debugEvent("IsOperator");
        let type : any = pop();
        let expression : any = pop();
        push(this.ast.isExpression(expression,lib6.toAnalyzerToken(operator),lib6.toAnalyzerToken(not),type));
    }
    handleConditionalExpression(question : any,colon : any) : void {
        this.debugEvent("ConditionalExpression");
        let elseExpression : any = pop();
        let thenExpression : any = pop();
        let condition : any = pop();
        push(this.ast.conditionalExpression(condition,lib6.toAnalyzerToken(question),thenExpression,lib6.toAnalyzerToken(colon),elseExpression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endRedirectingFactoryBody(equalToken : any,endToken : any) : void {
        this.debugEvent("RedirectingFactoryBody");
        let constructorName : any = pop();
        let starToken : any = pop();
        let asyncToken : any = pop();
        push(new _RedirectingFactoryBody(asyncToken,starToken,equalToken,constructorName));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endRethrowStatement(rethrowToken : any,endToken : any) : void {
        this.debugEvent("RethrowStatement");
        let expression : any = this.ast.rethrowExpression(lib6.toAnalyzerToken(rethrowToken));
        push(this.ast.expressionStatement(expression,lib6.toAnalyzerToken(endToken)));
    }
    endThrowExpression(throwToken : any,endToken : any) : void {
        this.debugEvent("ThrowExpression");
        push(this.ast.throwExpression(lib6.toAnalyzerToken(throwToken),pop()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endOptionalFormalParameters(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("OptionalFormalParameters");
        push(new _OptionalFormalParameters(popList(count),beginToken,endToken));
    }
    handleValuedFormalParameter(equals : any,token : any) : void {
        this.debugEvent("ValuedFormalParameter");
        let value : any = pop();
        push(new _ParameterDefaultValue(equals,value));
    }
    handleFunctionType(functionToken : any,semicolon : any) : void {
        this.debugEvent("FunctionType");
        let parameters : any = pop();
        let typeParameters : any = pop();
        let returnType : any = pop();
        push(this.ast.genericFunctionType(returnType,lib6.toAnalyzerToken(functionToken),typeParameters,parameters));
    }
    handleFormalParameterWithoutValue(token : any) : void {
        this.debugEvent("FormalParameterWithoutValue");
        push(NullValue.ParameterDefaultValue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endForInExpression(token : any) : void {
        this.debugEvent("ForInExpression");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endForIn(awaitToken : any,forToken : any,leftParenthesis : any,inKeyword : any,rightParenthesis : any,endToken : any) : void {
        this.debugEvent("ForInExpression");
        let body : any = pop();
        let iterator : any = pop();
        let variableOrDeclaration : core.DartObject = pop();
        exitLocalScope();
        exitContinueTarget();
        exitBreakTarget();
        if (is(variableOrDeclaration, any)) {
            push(this.ast.forEachStatementWithReference(lib6.toAnalyzerToken(awaitToken),lib6.toAnalyzerToken(forToken),lib6.toAnalyzerToken(leftParenthesis),variableOrDeclaration,lib6.toAnalyzerToken(inKeyword),iterator,lib6.toAnalyzerToken(rightParenthesis),body));
        }else {
            let statement = variableOrDeclaration as any;
            let variableList : any = statement.variables;
            push(this.ast.forEachStatementWithDeclaration(lib6.toAnalyzerToken(awaitToken),lib6.toAnalyzerToken(forToken),lib6.toAnalyzerToken(leftParenthesis),this.ast.declaredIdentifier(variableList.documentationComment,variableList.metadata,variableList.keyword,variableList.type,variableList.variables.single.name),lib6.toAnalyzerToken(inKeyword),iterator,lib6.toAnalyzerToken(rightParenthesis),body));
        }
    }
    endFormalParameter(thisKeyword : any,nameToken : any,kind : any,memberKind : any) : void {
        this.debugEvent("FormalParameter");
        let defaultValue : _ParameterDefaultValue = pop();
        let nameOrFunctionTypedParameter : any = pop();
        let node : any;
        let name : any;
        if (is(nameOrFunctionTypedParameter, any)) {
            node = nameOrFunctionTypedParameter;
            name = nameOrFunctionTypedParameter.identifier;
        }else {
            name = nameOrFunctionTypedParameter;
            let type : any = pop();
            let modifiers : _Modifiers = pop();
            let keyword : any = ((t)=>(!!t)?t.finalConstOrVarKeyword:null)(modifiers);
            let covariantKeyword : any = ((t)=>(!!t)?t.covariantKeyword:null)(modifiers);
            pop();
            let comment : any = pop();
            if (op(Op.EQUALS,thisKeyword,null)) {
                node = this.ast.simpleFormalParameter2({
                    comment : comment,covariantKeyword : lib6.toAnalyzerToken(covariantKeyword),keyword : lib6.toAnalyzerToken(keyword),type : type,identifier : name});
            }else {
                let period : any = core.identical('.',((t)=>(!!t)?t.stringValue:null)(thisKeyword.next)) ? thisKeyword.next : null;
                node = this.ast.fieldFormalParameter2({
                    comment : comment,covariantKeyword : lib6.toAnalyzerToken(covariantKeyword),keyword : lib6.toAnalyzerToken(keyword),type : type,thisKeyword : lib6.toAnalyzerToken(thisKeyword),period : lib6.toAnalyzerToken(period),identifier : name});
            }
        }
        let analyzerKind : any = this._toAnalyzerParameterKind(kind);
        if (analyzerKind != ParameterKind.REQUIRED) {
            node = this.ast.defaultFormalParameter(node,analyzerKind,lib6.toAnalyzerToken(((t)=>(!!t)?t.separator:null)(defaultValue)),((t)=>(!!t)?t.value:null)(defaultValue));
        }
        if (name != null) {
            op(Op.INDEX_ASSIGN,scope,name.name,name.staticElement = new lib4.AnalyzerParameterElement(node));
        }
        push(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionTypedFormalParameter(thisKeyword : any,kind : any) : void {
        this.debugEvent("FunctionTypedFormalParameter");
        let formalParameters : any = pop();
        let typeParameters : any = pop();
        let name : any = pop();
        let returnType : any = pop();
        let modifiers : _Modifiers = pop();
        let covariantKeyword : any = ((t)=>(!!t)?t.covariantKeyword:null)(modifiers);
        pop();
        let comment : any = pop();
        let node : any;
        if (op(Op.EQUALS,thisKeyword,null)) {
            node = this.ast.functionTypedFormalParameter2({
                comment : comment,covariantKeyword : lib6.toAnalyzerToken(covariantKeyword),returnType : returnType,identifier : name,typeParameters : typeParameters,parameters : formalParameters});
        }else {
            let period : any = core.identical('.',((t)=>(!!t)?t.stringValue:null)(((t)=>(!!t)?t.next:null)(thisKeyword))) ? thisKeyword.next : null;
            node = this.ast.fieldFormalParameter2({
                comment : comment,covariantKeyword : lib6.toAnalyzerToken(covariantKeyword),type : returnType,thisKeyword : lib6.toAnalyzerToken(thisKeyword),period : lib6.toAnalyzerToken(period),identifier : name,typeParameters : typeParameters,parameters : formalParameters});
        }
        op(Op.INDEX_ASSIGN,scope,name.name,name.staticElement = new lib4.AnalyzerParameterElement(node));
        push(node);
    }
    endFormalParameters(count : number,beginToken : any,endToken : any,kind : any) : void {
        this.debugEvent("FormalParameters");
        let rawParameters : core.DartList<any> = (popList(count) || new core.DartList.literal<core.DartObject>());
        let parameters : core.DartList<any> = new core.DartList.literal<any>();
        let leftDelimiter : any;
        let rightDelimiter : any;
        for(let raw of rawParameters) {
            if (is(raw, _OptionalFormalParameters)) {
                parameters.addAll(raw.parameters);
                leftDelimiter = raw.leftDelimiter;
                rightDelimiter = raw.rightDelimiter;
            }else {
                parameters.add(raw as any);
            }
        }
        push(this.ast.formalParameterList(lib6.toAnalyzerToken(beginToken),parameters,lib6.toAnalyzerToken(leftDelimiter),lib6.toAnalyzerToken(rightDelimiter),lib6.toAnalyzerToken(endToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endSwitchBlock(caseCount : number,leftBracket : any,rightBracket : any) : void {
        this.debugEvent("SwitchBlock");
        let membersList : core.DartList<core.DartList<any>> = popList(caseCount);
        exitBreakTarget();
        exitLocalScope();
        let members : core.DartList<any> = (((_253_)=>(!!_253_)?_253_.toList():null)(((_254_)=>(!!_254_)?_254_.expand((members : any) =>  {
            return members;
        }):null)(membersList)) || new core.DartList.literal<any>());
        push(leftBracket);
        push(members);
        push(rightBracket);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSwitchCase(labelCount : number,expressionCount : number,defaultKeyword : any,statementCount : number,firstToken : any,endToken : any) : void {
        this.debugEvent("SwitchCase");
        let statements : core.DartList<any> = popList(statementCount);
        let members : core.DartList<any> = (popList(expressionCount) || new core.DartList.literal());
        let labels : core.DartList<any> = popList(labelCount);
        if (defaultKeyword != null) {
            members.add(this.ast.switchDefault(new core.DartList.literal<any>(),defaultKeyword,defaultKeyword.next,new core.DartList.literal<any>()));
        }
        members.last.statements.addAll(statements);
        members.first.labels.addAll(labels);
        push(members);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleCaseMatch(caseKeyword : any,colon : any) : void {
        this.debugEvent("CaseMatch");
        let expression : any = pop();
        push(this.ast.switchCase(new core.DartList.literal<any>(),caseKeyword,expression,colon,new core.DartList.literal<any>()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endSwitchStatement(switchKeyword : any,endToken : any) : void {
        this.debugEvent("SwitchStatement");
        let rightBracket : any = pop();
        let members : core.DartList<any> = pop();
        let leftBracket : any = pop();
        let expression : any = pop();
        push(this.ast.switchStatement(switchKeyword,expression.leftParenthesis,expression.expression,expression.rightParenthesis,leftBracket,members,rightBracket));
    }
    handleCatchBlock(onKeyword : any,catchKeyword : any) : void {
        this.debugEvent("CatchBlock");
        let body : any = pop();
        let catchParameterList : any = popIfNotNull(catchKeyword);
        let type : any = popIfNotNull(onKeyword);
        let exception : any;
        let stackTrace : any;
        if (catchParameterList != null) {
            let catchParameters : core.DartList<any> = catchParameterList.parameters;
            if (catchParameters.length > 0) {
                exception = catchParameters[0].identifier;
            }
            if (catchParameters.length > 1) {
                stackTrace = catchParameters[1].identifier;
            }
        }
        push(this.ast.catchClause(lib6.toAnalyzerToken(onKeyword),type,lib6.toAnalyzerToken(catchKeyword),((t)=>(!!t)?t.leftParenthesis:null)(catchParameterList),exception,null,stackTrace,((t)=>(!!t)?t.rightParenthesis:null)(catchParameterList),body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFinallyBlock(finallyKeyword : any) : void {
        this.debugEvent("FinallyBlock");
    }
    endTryStatement(catchCount : number,tryKeyword : any,finallyKeyword : any) : void {
        let finallyBlock : any = popIfNotNull(finallyKeyword);
        let catchClauses : core.DartList<any> = popList(catchCount);
        let body : any = pop();
        push(this.ast.tryStatement(lib6.toAnalyzerToken(tryKeyword),body,catchClauses,lib6.toAnalyzerToken(finallyKeyword),finallyBlock));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLabel(colon : any) : void {
        this.debugEvent("Label");
        let name : any = pop();
        push(this.ast.label(name,colon));
    }
    handleNoExpression(token : any) : void {
        this.debugEvent("NoExpression");
        push(NullValue.Expression);
    }
    handleIndexedExpression(openCurlyBracket : any,closeCurlyBracket : any) : void {
        this.debugEvent("IndexedExpression");
        let index : any = pop();
        let target : any = pop();
        if (op(Op.EQUALS,target,null)) {
            let receiver : any = pop();
            let token : any = peek();
            push(receiver);
            let expression : any = this.ast.indexExpressionForCascade(lib6.toAnalyzerToken(token),lib6.toAnalyzerToken(openCurlyBracket),index,lib6.toAnalyzerToken(closeCurlyBracket));
            /* TODO (AssertStatementImpl) : assert (expression.isCascaded); */;
            push(expression);
        }else {
            push(this.ast.indexExpressionForTarget(target,lib6.toAnalyzerToken(openCurlyBracket),index,lib6.toAnalyzerToken(closeCurlyBracket)));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleInvalidExpression(token : any) : void {
        this.debugEvent("InvalidExpression");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleInvalidFunctionBody(token : any) : void {
        this.debugEvent("InvalidFunctionBody");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnrecoverableError(token : any,message : any) : any {
        if (op(Op.EQUALS,message.code,codeExpectedFunctionBody)) {
            if (core.identical('native',token.stringValue) && this.parser != null) {
                let nativeKeyword : any = token;
                let semicolon : any = this.parser.parseLiteralString(token.next);
                token = this.parser.expectSemicolon(semicolon);
                let name : any = pop();
                pop();
                pop();
                push(this.ast.nativeFunctionBody(lib6.toAnalyzerToken(nativeKeyword),name,lib6.toAnalyzerToken(semicolon)));
                return token;
            }
        }else if (op(Op.EQUALS,message.code,codeExpectedExpression)) {
            let lexeme : string = token.lexeme;
            if (core.identical('async',lexeme) || core.identical('yield',lexeme)) {
                ((_255_)=>(!!_255_)?_255_.reportErrorForOffset(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER,token.charOffset,token.charCount):null)(this.errorReporter);
                push(this.ast.simpleIdentifier(lib6.toAnalyzerToken(token)));
                return token;
            }
        }
        return super.handleUnrecoverableError(token,message);
    }
    handleUnaryPrefixExpression(token : any) : void {
        this.debugEvent("UnaryPrefixExpression");
        push(this.ast.prefixExpression(lib6.toAnalyzerToken(token),pop()));
    }
    handleUnaryPrefixAssignmentExpression(token : any) : void {
        this.debugEvent("UnaryPrefixAssignmentExpression");
        push(this.ast.prefixExpression(lib6.toAnalyzerToken(token),pop()));
    }
    handleUnaryPostfixAssignmentExpression(token : any) : void {
        this.debugEvent("UnaryPostfixAssignmentExpression");
        push(this.ast.postfixExpression(pop(),lib6.toAnalyzerToken(token)));
    }
    handleModifier(token : any) : void {
        this.debugEvent("Modifier");
        push(token);
    }
    handleModifiers(count : number) : void {
        this.debugEvent("Modifiers");
        if (count == 0) {
            push(NullValue.Modifiers);
        }else {
            push(new _Modifiers(popList(count)));
        }
    }
    endTopLevelMethod(beginToken : any,getOrSet : any,endToken : any) : void {
        this.debugEvent("TopLevelMethod");
        let body : any = pop();
        let parameters : any = pop();
        let typeParameters : any = pop();
        let name : any = pop();
        let propertyKeyword : any = lib6.toAnalyzerToken(getOrSet);
        let returnType : any = pop();
        let modifiers : _Modifiers = pop();
        let externalKeyword : any = ((t)=>(!!t)?t.externalKeyword:null)(modifiers);
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.functionDeclaration(comment,metadata,lib6.toAnalyzerToken(externalKeyword),returnType,propertyKeyword,name,this.ast.functionExpression(typeParameters,parameters,body)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelDeclaration(token : any) : void {
        this.debugEvent("TopLevelDeclaration");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginCompilationUnit(token : any) : void {
        push(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCompilationUnit(count : number,endToken : any) : void {
        this.debugEvent("CompilationUnit");
        let elements : core.DartList<core.DartObject> = popList(count);
        let beginToken : any = pop();
        let scriptTag : any = null;
        let directives = new core.DartList.literal<any>();
        let declarations = new core.DartList.literal<any>();
        if (elements != null) {
            for(let node of elements) {
                if (is(node, any)) {
                    scriptTag = node;
                }else if (is(node, any)) {
                    directives.add(node);
                }else if (is(node, any)) {
                    declarations.add(node);
                }else {
                    internalError(`Unrecognized compilation unit member: ${node.runtimeType}`);
                }
            }
        }
        push(this.ast.compilationUnit(beginToken,scriptTag,directives,declarations,endToken));
    }
    endImport(importKeyword : any,deferredKeyword : any,asKeyword : any,semicolon : any) : void {
        this.debugEvent("Import");
        let combinators : core.DartList<any> = pop();
        let prefix : any;
        if (asKeyword != null) prefix = pop();
        let configurations : core.DartList<any> = pop();
        let uri : any = pop();
        let metadata : core.DartList<any> = pop();
        /* TODO (AssertStatementImpl) : assert (metadata == null); */;
        let comment : any = pop();
        push(this.ast.importDirective(comment,metadata,lib6.toAnalyzerToken(importKeyword),uri,configurations,lib6.toAnalyzerToken(deferredKeyword),lib6.toAnalyzerToken(asKeyword),prefix,combinators,lib6.toAnalyzerToken(semicolon)));
    }
    endExport(exportKeyword : any,semicolon : any) : void {
        this.debugEvent("Export");
        let combinators : core.DartList<any> = pop();
        let configurations : core.DartList<any> = pop();
        let uri : any = pop();
        let metadata : core.DartList<any> = pop();
        /* TODO (AssertStatementImpl) : assert (metadata == null); */;
        let comment : any = pop();
        push(this.ast.exportDirective(comment,metadata,lib6.toAnalyzerToken(exportKeyword),uri,configurations,combinators,lib6.toAnalyzerToken(semicolon)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endDottedName(count : number,firstIdentifier : any) : void {
        this.debugEvent("DottedName");
        let components : core.DartList<any> = popList(count);
        push(this.ast.dottedName(components));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endDoWhileStatement(doKeyword : any,whileKeyword : any,semicolon : any) : void {
        this.debugEvent("DoWhileStatement");
        let condition : any = pop();
        let body : any = pop();
        exitContinueTarget();
        exitBreakTarget();
        push(this.ast.doStatement(lib6.toAnalyzerToken(doKeyword),body,lib6.toAnalyzerToken(whileKeyword),condition.leftParenthesis,condition.expression,condition.rightParenthesis,lib6.toAnalyzerToken(semicolon)));
    }
    endConditionalUri(ifKeyword : any,equalitySign : any) : void {
        this.debugEvent("ConditionalUri");
        let libraryUri : any = pop();
        let rightParen : any = null;
        let value : any;
        if (equalitySign != null) {
            value = pop();
        }
        let name : any = pop();
        let leftParen : any = ifKeyword.next;
        push(this.ast.configuration(lib6.toAnalyzerToken(ifKeyword),lib6.toAnalyzerToken(leftParen),name,lib6.toAnalyzerToken(equalitySign),value,lib6.toAnalyzerToken(rightParen),libraryUri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConditionalUris(count : number) : void {
        this.debugEvent("ConditionalUris");
        push((popList(count) || NullValue.ConditionalUris));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endIdentifierList(count : number) : void {
        this.debugEvent("IdentifierList");
        push((popList(count) || NullValue.IdentifierList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endShow(showKeyword : any) : void {
        this.debugEvent("Show");
        let shownNames : core.DartList<any> = pop();
        push(this.ast.showCombinator(lib6.toAnalyzerToken(showKeyword),shownNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endHide(hideKeyword : any) : void {
        this.debugEvent("Hide");
        let hiddenNames : core.DartList<any> = pop();
        push(this.ast.hideCombinator(lib6.toAnalyzerToken(hideKeyword),hiddenNames));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeList(count : number) : void {
        this.debugEvent("TypeList");
        push((popList(count) || NullValue.TypeList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endClassBody(memberCount : number,beginToken : any,endToken : any) : void {
        this.debugEvent("ClassBody");
        push(new _ClassBody(beginToken,(popList(memberCount) || new core.DartList.literal<any>()),endToken));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endClassDeclaration(interfacesCount : number,beginToken : any,classKeyword : any,extendsKeyword : any,implementsKeyword : any,endToken : any) : void {
        this.debugEvent("ClassDeclaration");
        let body : _ClassBody = pop();
        let implementsClause : any;
        if (implementsKeyword != null) {
            let interfaces : core.DartList<any> = popList(interfacesCount);
            implementsClause = this.ast.implementsClause(lib6.toAnalyzerToken(implementsKeyword),interfaces);
        }
        let extendsClause : any;
        let withClause : any;
        let supertype = pop();
        if (op(Op.EQUALS,supertype,null)) {
        }else if (is(supertype, any)) {
            extendsClause = this.ast.extendsClause(lib6.toAnalyzerToken(extendsKeyword),supertype);
        }else if (is(supertype, _MixinApplication)) {
            extendsClause = this.ast.extendsClause(lib6.toAnalyzerToken(extendsKeyword),supertype.supertype);
            withClause = this.ast.withClause(lib6.toAnalyzerToken(supertype.withKeyword),supertype.mixinTypes);
        }else {
            internalError(`Unexpected kind of supertype ${supertype.runtimeType}`);
        }
        let typeParameters : any = pop();
        let name : any = pop();
        /* TODO (AssertStatementImpl) : assert (className == name.name); */;
        this.className = null;
        let modifiers : _Modifiers = pop();
        let abstractKeyword : any = ((t)=>(!!t)?t.abstractKeyword:null)(modifiers);
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.classDeclaration(comment,metadata,lib6.toAnalyzerToken(abstractKeyword),lib6.toAnalyzerToken(classKeyword),name,typeParameters,extendsClause,withClause,implementsClause,lib6.toAnalyzerToken(body.beginToken),body.members,lib6.toAnalyzerToken(body.endToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMixinApplication(withKeyword : any) : void {
        this.debugEvent("MixinApplication");
        let mixinTypes : core.DartList<any> = pop();
        let supertype : any = pop();
        push(new _MixinApplication(supertype,withKeyword,mixinTypes));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endNamedMixinApplication(beginToken : any,classKeyword : any,equalsToken : any,implementsKeyword : any,endToken : any) : void {
        this.debugEvent("NamedMixinApplication");
        let implementsClause : any;
        if (implementsKeyword != null) {
            let interfaces : core.DartList<any> = pop();
            implementsClause = this.ast.implementsClause(lib6.toAnalyzerToken(implementsKeyword),interfaces);
        }
        let mixinApplication : _MixinApplication = pop();
        let superclass = mixinApplication.supertype;
        let withClause = this.ast.withClause(lib6.toAnalyzerToken(mixinApplication.withKeyword),mixinApplication.mixinTypes);
        let equals : any = lib6.toAnalyzerToken(equalsToken);
        let typeParameters : any = pop();
        let name : any = pop();
        let modifiers : _Modifiers = pop();
        let abstractKeyword : any = ((t)=>(!!t)?t.abstractKeyword:null)(modifiers);
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.classTypeAlias(comment,metadata,lib6.toAnalyzerToken(classKeyword),name,typeParameters,equals,lib6.toAnalyzerToken(abstractKeyword),superclass,withClause,implementsClause,lib6.toAnalyzerToken(endToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLabeledStatement(labelCount : number) : void {
        this.debugEvent("LabeledStatement");
        let statement : any = pop();
        let labels : core.DartList<any> = popList(labelCount);
        push(this.ast.labeledStatement(labels,statement));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLibraryName(libraryKeyword : any,semicolon : any) : void {
        this.debugEvent("LibraryName");
        let libraryName : core.DartList<any> = pop();
        let name = this.ast.libraryIdentifier(libraryName);
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.libraryDirective(comment,metadata,lib6.toAnalyzerToken(libraryKeyword),name,lib6.toAnalyzerToken(semicolon)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleQualified(period : any) : void {
        let identifier : any = pop();
        let prefix = pop();
        if (is(prefix, core.DartList<any>)) {
            prefix.add(identifier);
            push(prefix);
        }else if (is(prefix, any)) {
            push(this.ast.prefixedIdentifier(prefix,lib6.toAnalyzerToken(period),identifier));
        }else {
            logEvent('Qualified with >1 dot');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endPart(partKeyword : any,semicolon : any) : void {
        this.debugEvent("Part");
        let uri : any = pop();
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.partDirective(comment,metadata,lib6.toAnalyzerToken(partKeyword),uri,lib6.toAnalyzerToken(semicolon)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endPartOf(partKeyword : any,semicolon : any,hasName : boolean) : void {
        this.debugEvent("PartOf");
        let libraryName : core.DartList<any> = pop();
        let name = this.ast.libraryIdentifier(libraryName);
        let uri : any = null;
        let ofKeyword = partKeyword.next;
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.partOfDirective(comment,metadata,lib6.toAnalyzerToken(partKeyword),lib6.toAnalyzerToken(ofKeyword),uri,name,lib6.toAnalyzerToken(semicolon)));
    }
    endUnnamedFunction(beginToken : any,token : any) : void {
        this.debugEvent("UnnamedFunction");
        let body : any = pop();
        let parameters : any = pop();
        let typeParameters : any = pop();
        push(this.ast.functionExpression(typeParameters,parameters,body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFieldInitializer(token : any) : void {
        this.debugEvent("NoFieldInitializer");
        let name : any = pop();
        push(this.ast.variableDeclaration(name,null,null));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFactoryMethod(beginToken : any,factoryKeyword : any,semicolon : any) : void {
        this.debugEvent("FactoryMethod");
        let body : any;
        let separator : any;
        let redirectedConstructor : any;
        let bodyObject : core.DartObject = pop();
        if (is(bodyObject, any)) {
            body = bodyObject;
        }else if (is(bodyObject, _RedirectingFactoryBody)) {
            separator = bodyObject.equalToken;
            redirectedConstructor = bodyObject.constructorName;
            body = this.ast.emptyFunctionBody(lib6.toAnalyzerToken(semicolon));
        }else {
            internalError(`Unexpected body object: ${bodyObject.runtimeType}`);
        }
        let parameters : any = pop();
        let constructorName : any = pop();
        let modifiers : _Modifiers = pop();
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        let returnType : any;
        let period : any;
        let name : any;
        let typeName : any = constructorName.type.name;
        if (is(typeName, any)) {
            returnType = typeName;
        }else if (is(typeName, any)) {
            returnType = typeName.prefix;
            period = typeName.period;
            name = this.ast.simpleIdentifier(typeName.identifier.token,{
                isDeclaration : true});
        }
        push(this.ast.constructorDeclaration(comment,metadata,lib6.toAnalyzerToken(((t)=>(!!t)?t.externalKeyword:null)(modifiers)),lib6.toAnalyzerToken(((t)=>(!!t)?t.finalConstOrVarKeyword:null)(modifiers)),lib6.toAnalyzerToken(factoryKeyword),this.ast.simpleIdentifier(returnType.token),period,name,parameters,lib6.toAnalyzerToken(separator),null,redirectedConstructor,body));
    }
    endFieldInitializer(assignment : any,token : any) : void {
        this.debugEvent("FieldInitializer");
        let initializer : any = pop();
        let name : any = pop();
        push(this.ast.variableDeclaration(name,lib6.toAnalyzerToken(assignment),initializer));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunction(getOrSet : any,endToken : any) : void {
        this.debugEvent("Function");
        let body : any = pop();
        pop();
        pop();
        let parameters : any = pop();
        let typeParameters : any = pop();
        push(this.ast.functionExpression(typeParameters,parameters,body));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionDeclaration(token : any) : void {
        this.debugEvent("FunctionDeclaration");
        let functionExpression : any = pop();
        let name : any = pop();
        let returnType : any = pop();
        pop();
        push(this.ast.functionDeclarationStatement(this.ast.functionDeclaration(null,null,null,returnType,null,name,functionExpression)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionName(beginToken : any,token : any) : void {
        this.debugEvent("FunctionName");
    }
    endTopLevelFields(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("TopLevelFields");
        let variables : core.DartList<any> = popList(count);
        let type : any = pop();
        let modifiers : _Modifiers = pop();
        let keyword : any = ((t)=>(!!t)?t.finalConstOrVarKeyword:null)(modifiers);
        let variableList = this.ast.variableDeclarationList(null,null,lib6.toAnalyzerToken(keyword),type,variables);
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.topLevelVariableDeclaration(comment,metadata,variableList,lib6.toAnalyzerToken(endToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariable(token : any,extendsOrSuper : any) : void {
        this.debugEvent("TypeVariable");
        let bound : any = pop();
        let name : any = pop();
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.typeParameter(comment,metadata,name,lib6.toAnalyzerToken(extendsOrSuper),bound));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariables(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("TypeVariables");
        let typeParameters : core.DartList<any> = popList(count);
        push(this.ast.typeParameterList(lib6.toAnalyzerToken(beginToken),typeParameters,lib6.toAnalyzerToken(endToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMethod(getOrSet : any,beginToken : any,endToken : any) : void {
        this.debugEvent("Method");
        let body : any = pop();
        let redirectedConstructor : any = null;
        let initializers : core.DartList<any> = (pop() || new core.DartList.literal());
        let separator : any = pop();
        let parameters : any = pop();
        let typeParameters : any = pop();
        let name = pop();
        let returnType : any = pop();
        let modifiers : _Modifiers = pop();
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        var constructor : (returnType : any,period : any,name : any) => void = (returnType : any,period : any,name : any) : void =>  {
            push(this.ast.constructorDeclaration(comment,metadata,lib6.toAnalyzerToken(((t)=>(!!t)?t.externalKeyword:null)(modifiers)),lib6.toAnalyzerToken(((t)=>(!!t)?t.finalConstOrVarKeyword:null)(modifiers)),null,this.ast.simpleIdentifier(returnType.token),period,name,parameters,lib6.toAnalyzerToken(separator),initializers,redirectedConstructor,body));
        };
        var method : (operatorKeyword : any,name : any) => void = (operatorKeyword : any,name : any) : void =>  {
            push(this.ast.methodDeclaration(comment,metadata,lib6.toAnalyzerToken(((t)=>(!!t)?t.externalKeyword:null)(modifiers)),lib6.toAnalyzerToken((((t)=>(!!t)?t.abstractKeyword:null)(modifiers) || ((t)=>(!!t)?t.staticKeyword:null)(modifiers))),returnType,lib6.toAnalyzerToken(getOrSet),lib6.toAnalyzerToken(operatorKeyword),name,typeParameters,parameters,body));
        };
        if (is(name, any)) {
            if (op(Op.EQUALS,name.name,this.className)) {
                constructor(name,null,null);
            }else {
                method(null,name);
            }
        }else if (is(name, _OperatorName)) {
            method(name.operatorKeyword,name.name);
        }else if (is(name, any)) {
            constructor(name.prefix,name.period,name.identifier);
        }else {
            throw new core.UnimplementedError();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMember() : void {
        this.debugEvent("Member");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleVoidKeyword(token : any) : void {
        this.debugEvent("VoidKeyword");
        this.handleIdentifier(token,IdentifierContext.typeReference);
        handleNoTypeArguments(token);
        this.handleType(token,token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionTypeAlias(typedefKeyword : any,equals : any,endToken : any) : void {
        this.debugEvent("FunctionTypeAlias");
        if (op(Op.EQUALS,equals,null)) {
            let parameters : any = pop();
            let typeParameters : any = pop();
            let name : any = pop();
            let returnType : any = pop();
            let metadata : core.DartList<any> = pop();
            let comment : any = pop();
            push(this.ast.functionTypeAlias(comment,metadata,lib6.toAnalyzerToken(typedefKeyword),returnType,name,typeParameters,parameters,lib6.toAnalyzerToken(endToken)));
        }else {
            let type : any = pop();
            let templateParameters : any = pop();
            let name : any = pop();
            let metadata : core.DartList<any> = pop();
            let comment : any = pop();
            if (isNot(type, any)) {
                type = null;
            }
            push(this.ast.genericTypeAlias(comment,metadata,lib6.toAnalyzerToken(typedefKeyword),name,templateParameters,lib6.toAnalyzerToken(equals),type,lib6.toAnalyzerToken(endToken)));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endEnum(enumKeyword : any,endBrace : any,count : number) : void {
        this.debugEvent("Enum");
        let constants : core.DartList<any> = popList(count);
        let openBrace = enumKeyword.next.next as any;
        let closeBrace : any = openBrace.endGroup;
        let name : any = pop();
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.enumDeclaration(comment,metadata,lib6.toAnalyzerToken(enumKeyword),name,lib6.toAnalyzerToken(openBrace),constants,lib6.toAnalyzerToken(closeBrace)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeArguments(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("TypeArguments");
        let arguments : core.DartList<any> = popList(count);
        push(this.ast.typeArgumentList(lib6.toAnalyzerToken(beginToken),arguments,lib6.toAnalyzerToken(endToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFields(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("Fields");
        let variables : core.DartList<any> = popList(count);
        let type : any = pop();
        let modifiers : _Modifiers = pop();
        let variableList = this.ast.variableDeclarationList(null,null,lib6.toAnalyzerToken(((t)=>(!!t)?t.finalConstOrVarKeyword:null)(modifiers)),type,variables);
        let covariantKeyword : any = ((t)=>(!!t)?t.covariantKeyword:null)(modifiers);
        let metadata : core.DartList<any> = pop();
        let comment : any = pop();
        push(this.ast.fieldDeclaration2({
            comment : comment,metadata : metadata,covariantKeyword : lib6.toAnalyzerToken(covariantKeyword),staticKeyword : lib6.toAnalyzerToken(((t)=>(!!t)?t.staticKeyword:null)(modifiers)),fieldList : variableList,semicolon : lib6.toAnalyzerToken(endToken)}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleOperatorName(operatorKeyword : any,token : any) : void {
        this.debugEvent("OperatorName");
        push(new _OperatorName(operatorKeyword,this.ast.simpleIdentifier(lib6.toAnalyzerToken(token),{
            isDeclaration : true})));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginMetadataStar(token : any) : void {
        this.debugEvent("beginMetadataStar");
        if (token.precedingComments != null) {
            push(this._toAnalyzerComment(token.precedingComments));
        }else {
            push(NullValue.Comments);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadata(beginToken : any,periodBeforeName : any,endToken : any) : void {
        this.debugEvent("Metadata");
        let invocation : any = pop();
        let constructorName : any = periodBeforeName != null ? pop() : null;
        pop();
        let name : any = pop();
        push(this.ast.annotation(lib6.toAnalyzerToken(beginToken),name,lib6.toAnalyzerToken(periodBeforeName),constructorName,((t)=>(!!t)?t.argumentList:null)(invocation)));
    }
    _toAnalyzerParameterKind(type : any) : any {
        if (op(Op.EQUALS,type,FormalParameterType.POSITIONAL)) {
            return ParameterKind.POSITIONAL;
        }else if (op(Op.EQUALS,type,FormalParameterType.NAMED)) {
            return ParameterKind.NAMED;
        }else {
            return ParameterKind.REQUIRED;
        }
    }
    _toAnalyzerComment(comments : any) : any {
        if (op(Op.EQUALS,comments,null)) return null;
        let tokens = new core.DartList.literal<any>(lib6.toAnalyzerCommentToken(comments));
        let references = new core.DartList.literal<any>();
        return this.ast.documentationComment(tokens,references);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugEvent(name : string) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    injectGenericCommentTypeAssign(token : any) : any {
        return this._injectGenericComment(token,TokenType.GENERIC_METHOD_TYPE_ASSIGN,3);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    injectGenericCommentTypeList(token : any) : any {
        return this._injectGenericComment(token,TokenType.GENERIC_METHOD_TYPE_LIST,2);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    replaceTokenWithGenericCommentTypeAssign(tokenToStartReplacing : any,tokenWithComment : any) : any {
        let injected : any = this.injectGenericCommentTypeAssign(tokenWithComment);
        if (!core.identical(injected,tokenWithComment)) {
            let prev : any = tokenToStartReplacing.previous;
            prev.setNextWithoutSettingPrevious(injected);
            tokenToStartReplacing = injected;
            tokenToStartReplacing.previous = prev;
        }
        return tokenToStartReplacing;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    discardTypeReplacedWithCommentTypeAssign() : void {
        pop();
    }
    _injectGenericComment(token : any,type : any,prefixLen : number) : any {
        if (this.parseGenericMethodComments) {
            let t : any = token.precedingComments;
            for(; t != null; t = t.next){
                if (op(Op.EQUALS,t.type,type)) {
                    let code : string = t.lexeme.substring(prefixLen,op(Op.MINUS,t.lexeme.length,2));
                    let tokens : any = this._scanGenericMethodComment(code,op(Op.PLUS,t.offset,prefixLen));
                    if (tokens != null) {
                        t.remove();
                        this._injectTokenList(token,tokens);
                        return tokens;
                    }
                }
            }
        }
        return token;
    }
    _injectTokenList(beforeToken : any,firstToken : any) : void {
        let lastToken : any = firstToken;
        while (lastToken.next.type != TokenType.EOF){
            lastToken = lastToken.next;
        }
        let previous : any = beforeToken.previous;
        lastToken.setNext(beforeToken);
        previous.setNext(firstToken);
        beforeToken = firstToken;
    }
    _scanGenericMethodComment(code : string,offset : number) : any {
        let scanner = new bare.createInstance(any,null,offset,code);
        let firstToken : any = scanner.tokenize();
        if (scanner.hasErrors) {
            return null;
        }
        return firstToken;
    }
}

export namespace _ClassBody {
    export type Constructors = '_ClassBody';
    export type Interface = Omit<_ClassBody, Constructors>;
}
@DartClass
export class _ClassBody {
    beginToken : any;

    members : core.DartList<any>;

    endToken : any;

    constructor(beginToken : any,members : core.DartList<any>,endToken : any) {
    }
    @defaultConstructor
    _ClassBody(beginToken : any,members : core.DartList<any>,endToken : any) {
        this.beginToken = beginToken;
        this.members = members;
        this.endToken = endToken;
    }
}

export namespace _MixinApplication {
    export type Constructors = '_MixinApplication';
    export type Interface = Omit<_MixinApplication, Constructors>;
}
@DartClass
export class _MixinApplication {
    supertype : any;

    withKeyword : any;

    mixinTypes : core.DartList<any>;

    constructor(supertype : any,withKeyword : any,mixinTypes : core.DartList<any>) {
    }
    @defaultConstructor
    _MixinApplication(supertype : any,withKeyword : any,mixinTypes : core.DartList<any>) {
        this.supertype = supertype;
        this.withKeyword = withKeyword;
        this.mixinTypes = mixinTypes;
    }
}

export namespace _ParameterDefaultValue {
    export type Constructors = '_ParameterDefaultValue';
    export type Interface = Omit<_ParameterDefaultValue, Constructors>;
}
@DartClass
export class _ParameterDefaultValue {
    separator : any;

    value : any;

    constructor(separator : any,value : any) {
    }
    @defaultConstructor
    _ParameterDefaultValue(separator : any,value : any) {
        this.separator = separator;
        this.value = value;
    }
}

export namespace _RedirectingFactoryBody {
    export type Constructors = '_RedirectingFactoryBody';
    export type Interface = Omit<_RedirectingFactoryBody, Constructors>;
}
@DartClass
export class _RedirectingFactoryBody {
    asyncKeyword : any;

    starKeyword : any;

    equalToken : any;

    constructorName : any;

    constructor(asyncKeyword : any,starKeyword : any,equalToken : any,constructorName : any) {
    }
    @defaultConstructor
    _RedirectingFactoryBody(asyncKeyword : any,starKeyword : any,equalToken : any,constructorName : any) {
        this.asyncKeyword = asyncKeyword;
        this.starKeyword = starKeyword;
        this.equalToken = equalToken;
        this.constructorName = constructorName;
    }
}

export namespace _OptionalFormalParameters {
    export type Constructors = '_OptionalFormalParameters';
    export type Interface = Omit<_OptionalFormalParameters, Constructors>;
}
@DartClass
export class _OptionalFormalParameters {
    parameters : core.DartList<any>;

    leftDelimiter : any;

    rightDelimiter : any;

    constructor(parameters : core.DartList<any>,leftDelimiter : any,rightDelimiter : any) {
    }
    @defaultConstructor
    _OptionalFormalParameters(parameters : core.DartList<any>,leftDelimiter : any,rightDelimiter : any) {
        this.parameters = parameters;
        this.leftDelimiter = leftDelimiter;
        this.rightDelimiter = rightDelimiter;
    }
}

export namespace _OperatorName {
    export type Constructors = '_OperatorName';
    export type Interface = Omit<_OperatorName, Constructors>;
}
@DartClass
export class _OperatorName {
    operatorKeyword : any;

    name : any;

    constructor(operatorKeyword : any,name : any) {
    }
    @defaultConstructor
    _OperatorName(operatorKeyword : any,name : any) {
        this.operatorKeyword = operatorKeyword;
        this.name = name;
    }
}

export namespace _Modifiers {
    export type Constructors = '_Modifiers';
    export type Interface = Omit<_Modifiers, Constructors>;
}
@DartClass
export class _Modifiers {
    abstractKeyword : any;

    externalKeyword : any;

    finalConstOrVarKeyword : any;

    staticKeyword : any;

    covariantKeyword : any;

    constructor(modifierTokens : core.DartList<any>) {
    }
    @defaultConstructor
    _Modifiers(modifierTokens : core.DartList<any>) {
        for(let token of modifierTokens) {
            let s = token.lexeme;
            if (core.identical('abstract',s)) {
                this.abstractKeyword = token;
            }else if (core.identical('const',s)) {
                this.finalConstOrVarKeyword = token;
            }else if (core.identical('external',s)) {
                this.externalKeyword = token;
            }else if (core.identical('final',s)) {
                this.finalConstOrVarKeyword = token;
            }else if (core.identical('static',s)) {
                this.staticKeyword = token;
            }else if (core.identical('var',s)) {
                this.finalConstOrVarKeyword = token;
            }else if (core.identical('covariant',s)) {
                this.covariantKeyword = token;
            }else {
                internalError(`Unhandled modifier: ${s}`);
            }
        }
    }
}

export class properties {
}
