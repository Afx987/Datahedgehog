/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/continuation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../visitor";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "./async";
import * as lib7 from "./../core_types";

export var transformProgram : (program : lib3.Program) => lib3.Program = (program : lib3.Program) : lib3.Program =>  {
    let helper = new HelperNodes.fromProgram(program);
    let rewriter = new RecursiveContinuationRewriter(helper);
    return rewriter.rewriteProgram(program);
};
export namespace RecursiveContinuationRewriter {
    export type Constructors = lib4.Transformer.Constructors | 'RecursiveContinuationRewriter';
    export type Interface = Omit<RecursiveContinuationRewriter, Constructors>;
}
@DartClass
export class RecursiveContinuationRewriter extends lib4.Transformer {
    helper : HelperNodes;

    asyncJumpVariable : lib3.VariableDeclaration;

    asyncContextVariable : lib3.VariableDeclaration;

    constructor(helper : HelperNodes) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RecursiveContinuationRewriter(helper : HelperNodes) {
        this.asyncJumpVariable = new lib3.VariableDeclaration(":await_jump_var",{
            initializer : new lib3.IntLiteral(0)});
        this.asyncContextVariable = new lib3.VariableDeclaration(":await_ctx_var");
        this.helper = helper;
    }
    rewriteProgram(node : lib3.Program) : lib3.Program {
        return node.accept(this);
    }
    visitFunctionNode(node : lib3.FunctionNode) {
        switch (node.asyncMarker) {
            case lib3.AsyncMarker.Sync:
            case lib3.AsyncMarker.SyncYielding:
                node.transformChildren(new RecursiveContinuationRewriter(this.helper));
                return node;
            case lib3.AsyncMarker.SyncStar:
                return new SyncStarFunctionRewriter(this.helper,node).rewrite();
            case lib3.AsyncMarker.Async:
                return new AsyncFunctionRewriter(this.helper,node).rewrite();
            case lib3.AsyncMarker.AsyncStar:
                return new AsyncStarFunctionRewriter(this.helper,node).rewrite();
        }
    }
}

export namespace HelperNodes {
    export type Constructors = 'HelperNodes';
    export type Interface = Omit<HelperNodes, Constructors>;
}
@DartClass
export class HelperNodes {
    asyncLibrary : lib3.Library;

    coreLibrary : lib3.Library;

    iteratorClass : lib3.Class;

    futureClass : lib3.Class;

    futureOrClass : lib3.Class;

    completerClass : lib3.Class;

    printProcedure : lib3.Procedure;

    completerConstructor : lib3.Procedure;

    futureMicrotaskConstructor : lib3.Procedure;

    streamControllerConstructor : lib3.Constructor;

    syncIterableConstructor : lib3.Constructor;

    streamIteratorConstructor : lib3.Constructor;

    asyncThenWrapper : lib3.Procedure;

    asyncErrorWrapper : lib3.Procedure;

    awaitHelper : lib3.Procedure;

    coreTypes : lib7.CoreTypes;

    constructor(asyncLibrary : lib3.Library,coreLibrary : lib3.Library,iteratorClass : lib3.Class,futureClass : lib3.Class,futureOrClass : lib3.Class,completerClass : lib3.Class,printProcedure : lib3.Procedure,completerConstructor : lib3.Procedure,syncIterableConstructor : lib3.Constructor,streamIteratorConstructor : lib3.Constructor,futureMicrotaskConstructor : lib3.Procedure,streamControllerConstructor : lib3.Constructor,asyncThenWrapper : lib3.Procedure,asyncErrorWrapper : lib3.Procedure,awaitHelper : lib3.Procedure,coreTypes : lib7.CoreTypes) {
    }
    @defaultConstructor
    HelperNodes(asyncLibrary : lib3.Library,coreLibrary : lib3.Library,iteratorClass : lib3.Class,futureClass : lib3.Class,futureOrClass : lib3.Class,completerClass : lib3.Class,printProcedure : lib3.Procedure,completerConstructor : lib3.Procedure,syncIterableConstructor : lib3.Constructor,streamIteratorConstructor : lib3.Constructor,futureMicrotaskConstructor : lib3.Procedure,streamControllerConstructor : lib3.Constructor,asyncThenWrapper : lib3.Procedure,asyncErrorWrapper : lib3.Procedure,awaitHelper : lib3.Procedure,coreTypes : lib7.CoreTypes) {
        this.asyncLibrary = asyncLibrary;
        this.coreLibrary = coreLibrary;
        this.iteratorClass = iteratorClass;
        this.futureClass = futureClass;
        this.futureOrClass = futureOrClass;
        this.completerClass = completerClass;
        this.printProcedure = printProcedure;
        this.completerConstructor = completerConstructor;
        this.syncIterableConstructor = syncIterableConstructor;
        this.streamIteratorConstructor = streamIteratorConstructor;
        this.futureMicrotaskConstructor = futureMicrotaskConstructor;
        this.streamControllerConstructor = streamControllerConstructor;
        this.asyncThenWrapper = asyncThenWrapper;
        this.asyncErrorWrapper = asyncErrorWrapper;
        this.awaitHelper = awaitHelper;
        this.coreTypes = coreTypes;
    }
    @namedFactory
    static $fromProgram(program : lib3.Program) : HelperNodes {
        let coreTypes = new lib7.CoreTypes(program);
        return new HelperNodes(coreTypes.asyncLibrary,coreTypes.coreLibrary,coreTypes.iteratorClass,coreTypes.futureClass,coreTypes.futureOrClass,coreTypes.completerClass,coreTypes.printProcedure,coreTypes.completerSyncConstructor,coreTypes.syncIterableDefaultConstructor,coreTypes.streamIteratorDefaultConstructor,coreTypes.futureMicrotaskConstructor,coreTypes.asyncStarStreamControllerDefaultConstructor,coreTypes.asyncThenWrapperHelperProcedure,coreTypes.asyncErrorWrapperHelperProcedure,coreTypes.awaitHelperProcedure,coreTypes);
    }
    static fromProgram : new(program : lib3.Program) => HelperNodes;

}

export namespace ContinuationRewriterBase {
    export type Constructors = RecursiveContinuationRewriter.Constructors | 'ContinuationRewriterBase';
    export type Interface = Omit<ContinuationRewriterBase, Constructors>;
}
@DartClass
export class ContinuationRewriterBase extends RecursiveContinuationRewriter {
    enclosingFunction : lib3.FunctionNode;

    currentTryDepth : number;

    currentCatchDepth : number;

    capturedTryDepth : number;

    capturedCatchDepth : number;

    constructor(helper : HelperNodes,enclosingFunction : lib3.FunctionNode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContinuationRewriterBase(helper : HelperNodes,enclosingFunction : lib3.FunctionNode) {
        this.currentTryDepth = 0;
        this.currentCatchDepth = 0;
        this.capturedTryDepth = 0;
        this.capturedCatchDepth = 0;
        super.RecursiveContinuationRewriter(helper);
        this.enclosingFunction = enclosingFunction;
    }
    createContinuationPoint(value? : lib3.Expression) : lib3.Statement {
        if (op(Op.EQUALS,value,null)) value = new lib3.NullLiteral();
        this.capturedTryDepth = math.max(this.capturedTryDepth,this.currentTryDepth);
        this.capturedCatchDepth = math.max(this.capturedCatchDepth,this.currentCatchDepth);
        return new lib3.YieldStatement(value,{
            isNative : true});
    }
    visitTryCatch(node : lib3.TryCatch) : lib3.TreeNode {
        if (node.body != null) {
            ++this.currentTryDepth;
            node.body = node.body.accept(this);
            ((t)=>(!!t)?t.parent:null)(node.body) = node;
            --this.currentTryDepth;
        }
        ++this.currentCatchDepth;
        lib3.transformList(node.catches,this,node);
        --this.currentCatchDepth;
        return node;
    }
    visitTryFinally(node : lib3.TryFinally) : lib3.TreeNode {
        if (node.body != null) {
            ++this.currentTryDepth;
            node.body = node.body.accept(this);
            ((t)=>(!!t)?t.parent:null)(node.body) = node;
            --this.currentTryDepth;
        }
        if (node.finalizer != null) {
            ++this.currentCatchDepth;
            node.finalizer = node.finalizer.accept(this);
            ((t)=>(!!t)?t.parent:null)(node.finalizer) = node;
            --this.currentCatchDepth;
        }
        return node;
    }
    createCapturedTryVariables() : core.DartIterable<lib3.VariableDeclaration> {
        return new core.DartIterable.generate(this.capturedTryDepth,(depth : any) =>  {
            return new lib3.VariableDeclaration(`:saved_try_context_var${depth}`);
        });
    }
    createCapturedCatchVariables() : core.DartIterable<lib3.VariableDeclaration> {
        return new core.DartIterable.generate(this.capturedCatchDepth).expand((depth : any) =>  {
            return new core.DartList.literal(new lib3.VariableDeclaration(`:exception${depth}`),new lib3.VariableDeclaration(`:stack_trace${depth}`));
        });
    }
    variableDeclarations() : core.DartList<lib3.VariableDeclaration> {
        return ((_) : core.DartList<any> =>  {
            {
                _.addAll(this.createCapturedTryVariables());
                _.addAll(this.createCapturedCatchVariables());
                return _;
            }
        })(new core.DartList.literal(this.asyncJumpVariable,this.asyncContextVariable));
    }
}

export namespace SyncStarFunctionRewriter {
    export type Constructors = ContinuationRewriterBase.Constructors | 'SyncStarFunctionRewriter';
    export type Interface = Omit<SyncStarFunctionRewriter, Constructors>;
}
@DartClass
export class SyncStarFunctionRewriter extends ContinuationRewriterBase {
    iteratorVariable : lib3.VariableDeclaration;

    constructor(helper : any,enclosingFunction : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SyncStarFunctionRewriter(helper : any,enclosingFunction : any) {
        this.iteratorVariable = ((_) : lib3.VariableDeclaration =>  {
            {
                _.type = helper.iteratorClass.rawType;
                return _;
            }
        })(new lib3.VariableDeclaration(':iterator'));
        super.ContinuationRewriterBase(helper,enclosingFunction);
    }
    rewrite() : lib3.FunctionNode {
        let nestedClosureVariable = new lib3.VariableDeclaration(":sync_op");
        let function = ((_) : lib3.FunctionNode =>  {
            {
                _.fileOffset = this.enclosingFunction.fileOffset;
                _.fileEndOffset = this.enclosingFunction.fileEndOffset;
                _.returnType = this.helper.coreTypes.boolClass.rawType;
                return _;
            }
        })(new lib3.FunctionNode(this.buildClosureBody(),{
            positionalParameters : new core.DartList.literal(this.iteratorVariable),requiredParameterCount : 1,asyncMarker : lib3.AsyncMarker.SyncYielding,dartAsyncMarker : lib3.AsyncMarker.Sync}));
        let closureFunction = ((_) : lib3.FunctionDeclaration =>  {
            {
                _.fileOffset = this.enclosingFunction.parent.fileOffset;
                return _;
            }
        })(new lib3.FunctionDeclaration(nestedClosureVariable,function));
        let arguments = new lib3.Arguments(new core.DartList.literal(new lib3.VariableGet(nestedClosureVariable)));
        let returnStatement = new lib3.ReturnStatement(new lib3.ConstructorInvocation(this.helper.syncIterableConstructor,arguments));
        this.enclosingFunction.body = new lib3.Block(((_) : core.DartList<any> =>  {
            {
                _.addAll(this.variableDeclarations());
                _.addAll(new core.DartList.literal(closureFunction,returnStatement));
                return _;
            }
        })(new core.DartList.literal()));
        this.enclosingFunction.body.parent = this.enclosingFunction;
        this.enclosingFunction.asyncMarker = lib3.AsyncMarker.Sync;
        return this.enclosingFunction;
    }
    buildClosureBody() : lib3.Statement {
        return new lib3.Block(new core.DartList.literal<lib3.Statement>(this.enclosingFunction.body.accept(this),new lib3.ReturnStatement(new lib3.BoolLiteral(false))));
    }
    visitYieldStatement(node : lib3.YieldStatement) {
        let transformedExpression = node.expression.accept(this);
        let statements = new core.DartList.literal<lib3.Statement>();
        if (node.isYieldStar) {
            let markYieldEach = new lib3.ExpressionStatement(new lib3.PropertySet(new lib3.VariableGet(this.iteratorVariable),new lib3.Name("isYieldEach",this.helper.coreLibrary),new lib3.BoolLiteral(true)));
            statements.add(markYieldEach);
        }
        let setCurrentIteratorValue = new lib3.ExpressionStatement(new lib3.PropertySet(new lib3.VariableGet(this.iteratorVariable),new lib3.Name("_current",this.helper.coreLibrary),transformedExpression));
        statements.add(setCurrentIteratorValue);
        statements.add(this.createContinuationPoint(new lib3.BoolLiteral(true)));
        return new lib3.Block(statements);
    }
    visitReturnStatement(node : lib3.ReturnStatement) : lib3.TreeNode {
        /* TODO (AssertStatementImpl) : assert (node.expression == null || node.expression is NullLiteral); */;
        node.expression = ((_) : lib3.BoolLiteral =>  {
            {
                _.parent = node;
                return _;
            }
        })(new lib3.BoolLiteral(false));
        return node;
    }
}

export namespace AsyncRewriterBase {
    export type Constructors = ContinuationRewriterBase.Constructors | 'AsyncRewriterBase';
    export type Interface = Omit<AsyncRewriterBase, Constructors>;
}
@DartClass
export class AsyncRewriterBase extends ContinuationRewriterBase {
    nestedClosureVariable : lib3.VariableDeclaration;

    thenContinuationVariable : lib3.VariableDeclaration;

    catchErrorContinuationVariable : lib3.VariableDeclaration;

    labeledBody : lib3.LabeledStatement;

    expressionRewriter : lib6.ExpressionLifter;

    constructor(helper : any,enclosingFunction : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsyncRewriterBase(helper : any,enclosingFunction : any) {
        this.nestedClosureVariable = new lib3.VariableDeclaration(":async_op");
        this.thenContinuationVariable = new lib3.VariableDeclaration(":async_op_then");
        this.catchErrorContinuationVariable = new lib3.VariableDeclaration(":async_op_error");
        this.statements = new core.DartList.literal<lib3.Statement>();
        super.ContinuationRewriterBase(helper,enclosingFunction);
    }
    setupAsyncContinuations(statements : core.DartList<lib3.Statement>) : void {
        this.expressionRewriter = new lib6.ExpressionLifter(this);
        statements.add(this.thenContinuationVariable);
        statements.add(this.catchErrorContinuationVariable);
        let parameters = new core.DartList.literal<lib3.VariableDeclaration>(this.expressionRewriter.asyncResult,new lib3.VariableDeclaration(':exception'),new lib3.VariableDeclaration(':stack_trace'));
        let function = ((_) : lib3.FunctionNode =>  {
            {
                _.fileOffset = this.enclosingFunction.fileOffset;
                _.fileEndOffset = this.enclosingFunction.fileEndOffset;
                return _;
            }
        })(new lib3.FunctionNode(this.buildWrappedBody(),{
            positionalParameters : parameters,requiredParameterCount : 0,asyncMarker : lib3.AsyncMarker.SyncYielding,dartAsyncMarker : lib3.AsyncMarker.Sync}));
        statements.addAll(this.variableDeclarations());
        statements.addAll(this.expressionRewriter.variables);
        let closureFunction = ((_) : lib3.FunctionDeclaration =>  {
            {
                _.fileOffset = this.enclosingFunction.parent.fileOffset;
                return _;
            }
        })(new lib3.FunctionDeclaration(this.nestedClosureVariable,function));
        statements.add(closureFunction);
        let boundThenClosure = new lib3.StaticInvocation(this.helper.asyncThenWrapper,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(new lib3.VariableGet(this.nestedClosureVariable))));
        let thenClosureVariableAssign = new lib3.ExpressionStatement(new lib3.VariableSet(this.thenContinuationVariable,boundThenClosure));
        statements.add(thenClosureVariableAssign);
        let boundCatchErrorClosure = new lib3.StaticInvocation(this.helper.asyncErrorWrapper,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(new lib3.VariableGet(this.nestedClosureVariable))));
        let catchErrorClosureVariableAssign = new lib3.ExpressionStatement(new lib3.VariableSet(this.catchErrorContinuationVariable,boundCatchErrorClosure));
        statements.add(catchErrorClosureVariableAssign);
    }
    buildWrappedBody() : lib3.Statement {
        ++this.currentTryDepth;
        this.labeledBody = new lib3.LabeledStatement(null);
        this.labeledBody.body = ((_) : lib3.Statement =>  {
            {
                _.parent = this.labeledBody;
                return _;
            }
        })(this.visitDelimited(this.enclosingFunction.body));
        --this.currentTryDepth;
        let exceptionVariable = new lib3.VariableDeclaration(":exception");
        let stackTraceVariable = new lib3.VariableDeclaration(":stack_trace");
        return new lib3.TryCatch(this.buildReturn(this.labeledBody),new core.DartList.literal<lib3.Catch>(new lib3.Catch(exceptionVariable,new lib3.Block(new core.DartList.literal<lib3.Statement>(this.buildCatchBody(exceptionVariable,stackTraceVariable))),{
            stackTrace : stackTraceVariable})));
    }
    @Abstract
    buildCatchBody(exceptionVariable : lib3.Statement,stackTraceVariable : lib3.Statement) : lib3.Statement{ throw 'abstract'}
    @Abstract
    buildReturn(body : lib3.Statement) : lib3.Statement{ throw 'abstract'}
    statements : core.DartList<lib3.Statement>;

    visitInvalidStatement(stmt : lib3.InvalidStatement) : lib3.TreeNode {
        this.statements.add(stmt);
        return null;
    }
    visitExpressionStatement(stmt : lib3.ExpressionStatement) : lib3.TreeNode {
        stmt.expression = ((_) : lib3.Expression =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.expressionRewriter.rewrite(stmt.expression,this.statements));
        this.statements.add(stmt);
        return null;
    }
    visitBlock(stmt : lib3.Block) : lib3.TreeNode {
        let saved = this.statements;
        this.statements = new core.DartList.literal<lib3.Statement>();
        for(let statement of stmt.statements) {
            statement.accept(this);
        }
        saved.add(new lib3.Block(this.statements));
        this.statements = saved;
        return null;
    }
    visitEmptyStatement(stmt : lib3.EmptyStatement) : lib3.TreeNode {
        this.statements.add(stmt);
        return null;
    }
    visitAssertStatement(stmt : lib3.AssertStatement) : lib3.TreeNode {
        return null;
    }
    visitDelimited(stmt : lib3.Statement) : lib3.Statement {
        let saved = this.statements;
        this.statements = new core.DartList.literal<lib3.Statement>();
        stmt.accept(this);
        let result : lib3.Statement = this.statements.length == 1 ? this.statements.first : new lib3.Block(this.statements);
        this.statements = saved;
        return result;
    }
    visitLabeledStatement(stmt : lib3.LabeledStatement) : lib3.Statement {
        stmt.body = ((_) : lib3.Statement =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.visitDelimited(stmt.body));
        this.statements.add(stmt);
        return null;
    }
    visitBreakStatement(stmt : lib3.BreakStatement) : lib3.Statement {
        this.statements.add(stmt);
        return null;
    }
    visitWhileStatement(stmt : lib3.WhileStatement) : lib3.TreeNode {
        let body : lib3.Statement = this.visitDelimited(stmt.body);
        let effects : core.DartList<lib3.Statement> = new core.DartList.literal<lib3.Statement>();
        let cond : lib3.Expression = this.expressionRewriter.rewrite(stmt.condition,effects);
        if (effects.isEmpty) {
            stmt.condition = ((_) : lib3.Expression =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(cond);
            stmt.body = ((_) : lib3.Statement =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(body);
            this.statements.add(stmt);
        }else {
            let labeled : lib3.LabeledStatement = new lib3.LabeledStatement(stmt);
            stmt.condition = ((_) : lib3.BoolLiteral =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(new lib3.BoolLiteral(true));
            effects.add(new lib3.IfStatement(cond,body,new lib3.BreakStatement(labeled)));
            stmt.body = ((_) : lib3.Block =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(new lib3.Block(effects));
            this.statements.add(labeled);
        }
        return null;
    }
    visitDoStatement(stmt : lib3.DoStatement) : lib3.TreeNode {
        let body : lib3.Statement = this.visitDelimited(stmt.body);
        let effects : core.DartList<lib3.Statement> = new core.DartList.literal<lib3.Statement>();
        stmt.condition = ((_) : lib3.Expression =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.expressionRewriter.rewrite(stmt.condition,effects));
        if (effects.isNotEmpty) {
            let block : lib3.Block = is(body, lib3.Block) ? body : body = new lib3.Block(new core.DartList.literal<lib3.Statement>(body));
            for(let effect of effects) {
                block.statements.add(effect);
                effect.parent = body;
            }
        }
        stmt.body = ((_) : lib3.Statement =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(body);
        this.statements.add(stmt);
        return null;
    }
    visitForStatement(stmt : lib3.ForStatement) : lib3.TreeNode {
        let isSimple : boolean = true;
        let length : number = stmt.variables.length;
        let initEffects : core.DartList<core.DartList<lib3.Statement>> = new core.DartList<core.DartList<lib3.Statement>>(length);
        for(let i : number = 0; i < length; ++i){
            let decl : lib3.VariableDeclaration = stmt.variables[i];
            initEffects[i] = new core.DartList.literal<lib3.Statement>();
            if (decl.initializer != null) {
                decl.initializer = ((_) : lib3.Expression =>  {
                    {
                        _.parent = decl;
                        return _;
                    }
                })(this.expressionRewriter.rewrite(decl.initializer,initEffects[i]));
            }
            isSimple = isSimple && initEffects[i].isEmpty;
        }
        length = stmt.updates.length;
        let updateEffects : core.DartList<core.DartList<lib3.Statement>> = new core.DartList<core.DartList<lib3.Statement>>(length);
        for(let i : number = 0; i < length; ++i){
            updateEffects[i] = new core.DartList.literal<lib3.Statement>();
            stmt.updates[i] = ((_) : lib3.Expression =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(this.expressionRewriter.rewrite(stmt.updates[i],updateEffects[i]));
            isSimple = isSimple && updateEffects[i].isEmpty;
        }
        let body : lib3.Statement = this.visitDelimited(stmt.body);
        let cond : lib3.Expression = stmt.condition;
        let condEffects : core.DartList<lib3.Statement>;
        if (cond != null) {
            condEffects = new core.DartList.literal<lib3.Statement>();
            cond = this.expressionRewriter.rewrite(stmt.condition,condEffects);
        }
        if (isSimple) {
            if (condEffects == null || condEffects.isEmpty) {
                if (cond != null) stmt.condition = ((_) : lib3.Expression =>  {
                    {
                        _.parent = stmt;
                        return _;
                    }
                })(cond);
                stmt.body = ((_) : lib3.Statement =>  {
                    {
                        _.parent = stmt;
                        return _;
                    }
                })(body);
                this.statements.add(stmt);
            }else {
                let labeled : lib3.LabeledStatement = new lib3.LabeledStatement(stmt);
                stmt.condition = null;
                condEffects.add(new lib3.IfStatement(cond,body,new lib3.BreakStatement(labeled)));
                stmt.body = ((_) : lib3.Block =>  {
                    {
                        _.parent = stmt;
                        return _;
                    }
                })(new lib3.Block(condEffects));
                this.statements.add(labeled);
            }
            return null;
        }
        let temps : core.DartList<lib3.VariableDeclaration> = new core.DartList.literal<lib3.VariableDeclaration>(new lib3.VariableDeclaration.forValue(new lib3.BoolLiteral(true),{
            isFinal : false}));
        let loopBody : core.DartList<lib3.Statement> = new core.DartList.literal<lib3.Statement>();
        let initializers : core.DartList<lib3.Statement> = new core.DartList.literal<lib3.Statement>(new lib3.ExpressionStatement(new lib3.VariableSet(temps.first,new lib3.BoolLiteral(false))));
        let updates : core.DartList<lib3.Statement> = new core.DartList.literal<lib3.Statement>();
        let newBody : core.DartList<lib3.Statement> = new core.DartList.literal<lib3.Statement>(body);
        for(let i : number = 0; i < stmt.variables.length; ++i){
            let decl : lib3.VariableDeclaration = stmt.variables[i];
            temps.add(new lib3.VariableDeclaration(null,{
                type : decl.type}));
            loopBody.add(decl);
            if (decl.initializer != null) {
                initializers.addAll(initEffects[i]);
                initializers.add(new lib3.ExpressionStatement(new lib3.VariableSet(decl,decl.initializer)));
                decl.initializer = null;
            }
            updates.add(new lib3.ExpressionStatement(new lib3.VariableSet(decl,new lib3.VariableGet(temps.last))));
            newBody.add(new lib3.ExpressionStatement(new lib3.VariableSet(temps.last,new lib3.VariableGet(decl))));
        }
        for(let i : number = 0; i < stmt.updates.length; ++i){
            updates.addAll(updateEffects[i]);
            updates.add(new lib3.ExpressionStatement(stmt.updates[i]));
        }
        loopBody.add(new lib3.IfStatement(new lib3.VariableGet(temps.first),new lib3.Block(initializers),new lib3.Block(updates)));
        let labeled : lib3.LabeledStatement = new lib3.LabeledStatement(null);
        if (cond != null) {
            loopBody.addAll(condEffects);
        }else {
            cond = new lib3.BoolLiteral(true);
        }
        loopBody.add(new lib3.IfStatement(cond,new lib3.Block(newBody),new lib3.BreakStatement(labeled)));
        labeled.body = ((_) : lib3.WhileStatement =>  {
            {
                _.parent = labeled;
                return _;
            }
        })(new lib3.WhileStatement(new lib3.BoolLiteral(true),new lib3.Block(loopBody)));
        this.statements.add(new lib3.Block(((_) : core.DartList<lib3.Statement> =>  {
            {
                _.addAll(temps);
                _.add(labeled);
                return _;
            }
        })(new core.DartList.literal<lib3.Statement>())));
        return null;
    }
    visitForInStatement(stmt : lib3.ForInStatement) : lib3.TreeNode {
        if (stmt.isAsync) {
            let iteratorVariable = new lib3.VariableDeclaration(':for-iterator',{
                initializer : new lib3.ConstructorInvocation(this.helper.streamIteratorConstructor,new lib3.Arguments(new core.DartList.literal<lib3.Expression>(stmt.iterable),{
                    types : new core.DartList.literal(new lib3.DynamicType())}))});
            let condition = ((_) : lib3.AwaitExpression =>  {
                {
                    _.fileOffset = stmt.fileOffset;
                    return _;
                }
            })(new lib3.AwaitExpression(new lib3.MethodInvocation(new lib3.VariableGet(iteratorVariable),new lib3.Name('moveNext'),new lib3.Arguments(new core.DartList.literal<lib3.Expression>()))));
            let valueVariable = stmt.variable;
            valueVariable.initializer = new lib3.PropertyGet(new lib3.VariableGet(iteratorVariable),new lib3.Name('current'));
            valueVariable.initializer.parent = valueVariable;
            let whileBody = new lib3.Block(new core.DartList.literal<lib3.Statement>(valueVariable,stmt.body));
            let tryBody = new lib3.WhileStatement(condition,whileBody);
            let tryFinalizer = new lib3.ExpressionStatement(new lib3.AwaitExpression(new lib3.MethodInvocation(new lib3.VariableGet(iteratorVariable),new lib3.Name('cancel'),new lib3.Arguments(new core.DartList.literal<lib3.Expression>()))));
            let tryFinally = new lib3.TryFinally(tryBody,tryFinalizer);
            let block = new lib3.Block(new core.DartList.literal<lib3.Statement>(iteratorVariable,tryFinally));
            block.accept(this);
        }else {
            stmt.iterable = ((_) : lib3.Expression =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(this.expressionRewriter.rewrite(stmt.iterable,this.statements));
            stmt.body = ((_) : lib3.Statement =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(this.visitDelimited(stmt.body));
            this.statements.add(stmt);
        }
        return null;
    }
    visitSwitchStatement(stmt : lib3.SwitchStatement) : lib3.TreeNode {
        stmt.expression = ((_) : lib3.Expression =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.expressionRewriter.rewrite(stmt.expression,this.statements));
        for(let switchCase of stmt.cases) {
            switchCase.body = ((_) : lib3.Statement =>  {
                {
                    _.parent = switchCase;
                    return _;
                }
            })(this.visitDelimited(switchCase.body));
        }
        this.statements.add(stmt);
        return null;
    }
    visitContinueSwitchStatement(stmt : lib3.ContinueSwitchStatement) : lib3.TreeNode {
        this.statements.add(stmt);
        return null;
    }
    visitIfStatement(stmt : lib3.IfStatement) : lib3.TreeNode {
        stmt.condition = ((_) : lib3.Expression =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.expressionRewriter.rewrite(stmt.condition,this.statements));
        stmt.then = ((_) : lib3.Statement =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.visitDelimited(stmt.then));
        if (stmt.otherwise != null) {
            stmt.otherwise = ((_) : lib3.Statement =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(this.visitDelimited(stmt.otherwise));
        }
        this.statements.add(stmt);
        return null;
    }
    visitTryCatch(stmt : lib3.TryCatch) : lib3.TreeNode {
        ++this.currentTryDepth;
        stmt.body = ((_) : lib3.Statement =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.visitDelimited(stmt.body));
        --this.currentTryDepth;
        ++this.currentCatchDepth;
        for(let clause of stmt.catches) {
            clause.body = ((_) : lib3.Statement =>  {
                {
                    _.parent = clause;
                    return _;
                }
            })(this.visitDelimited(clause.body));
        }
        --this.currentCatchDepth;
        this.statements.add(stmt);
        return null;
    }
    visitTryFinally(stmt : lib3.TryFinally) : lib3.TreeNode {
        ++this.currentTryDepth;
        stmt.body = ((_) : lib3.Statement =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.visitDelimited(stmt.body));
        --this.currentTryDepth;
        ++this.currentCatchDepth;
        stmt.finalizer = ((_) : lib3.Statement =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.visitDelimited(stmt.finalizer));
        --this.currentCatchDepth;
        this.statements.add(stmt);
        return null;
    }
    visitYieldStatement(stmt : lib3.YieldStatement) : lib3.TreeNode {
        stmt.expression = ((_) : lib3.Expression =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(this.expressionRewriter.rewrite(stmt.expression,this.statements));
        this.statements.add(stmt);
        return null;
    }
    visitVariableDeclaration(stmt : lib3.VariableDeclaration) : lib3.TreeNode {
        if (stmt.initializer != null) {
            stmt.initializer = ((_) : lib3.Expression =>  {
                {
                    _.parent = stmt;
                    return _;
                }
            })(this.expressionRewriter.rewrite(stmt.initializer,this.statements));
        }
        this.statements.add(stmt);
        return null;
    }
    visitFunctionDeclaration(stmt : lib3.FunctionDeclaration) : lib3.TreeNode {
        stmt.function = ((_) : any =>  {
            {
                _.parent = stmt;
                return _;
            }
        })(stmt.function.accept(this));
        this.statements.add(stmt);
        return null;
    }
    defaultExpression(node : lib3.TreeNode) {
        return throw 'unreachable';
    }
}

export namespace AsyncStarFunctionRewriter {
    export type Constructors = AsyncRewriterBase.Constructors | 'AsyncStarFunctionRewriter';
    export type Interface = Omit<AsyncStarFunctionRewriter, Constructors>;
}
@DartClass
export class AsyncStarFunctionRewriter extends AsyncRewriterBase {
    controllerVariable : lib3.VariableDeclaration;

    constructor(helper : any,enclosingFunction : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsyncStarFunctionRewriter(helper : any,enclosingFunction : any) {
        super.AsyncRewriterBase(helper,enclosingFunction);
    }
    rewrite() : lib3.FunctionNode {
        let statements = new core.DartList.literal<lib3.Statement>();
        this.controllerVariable = new lib3.VariableDeclaration(":controller");
        statements.add(this.controllerVariable);
        this.setupAsyncContinuations(statements);
        let arguments = new lib3.Arguments(new core.DartList.literal<lib3.Expression>(new lib3.VariableGet(this.nestedClosureVariable)));
        let buildController = ((_) : lib3.ConstructorInvocation =>  {
            {
                _.fileOffset = this.enclosingFunction.fileOffset;
                return _;
            }
        })(new lib3.ConstructorInvocation(this.helper.streamControllerConstructor,arguments));
        let setController = new lib3.ExpressionStatement(new lib3.VariableSet(this.controllerVariable,buildController));
        statements.add(setController);
        let completerGet = new lib3.VariableGet(this.controllerVariable);
        let returnStatement = new lib3.ReturnStatement(new lib3.PropertyGet(completerGet,new lib3.Name('stream',this.helper.asyncLibrary)));
        statements.add(returnStatement);
        this.enclosingFunction.body = new lib3.Block(statements);
        this.enclosingFunction.body.parent = this.enclosingFunction;
        this.enclosingFunction.asyncMarker = lib3.AsyncMarker.Sync;
        return this.enclosingFunction;
    }
    buildWrappedBody() : lib3.Statement {
        ++this.currentTryDepth;
        let body : lib3.Statement = super.buildWrappedBody();
        --this.currentTryDepth;
        let finallyBody = new lib3.ExpressionStatement(new lib3.MethodInvocation(new lib3.VariableGet(this.controllerVariable),new lib3.Name("close",this.helper.asyncLibrary),new lib3.Arguments(new core.DartList.literal<lib3.Expression>())));
        let tryFinally = new lib3.TryFinally(body,new lib3.Block(new core.DartList.literal<lib3.Statement>(finallyBody)));
        return tryFinally;
    }
    buildCatchBody(exceptionVariable : any,stackTraceVariable : any) : lib3.Statement {
        return new lib3.ExpressionStatement(new lib3.MethodInvocation(new lib3.VariableGet(this.controllerVariable),new lib3.Name("addError",this.helper.asyncLibrary),new lib3.Arguments(new core.DartList.literal<lib3.Expression>(new lib3.VariableGet(exceptionVariable),new lib3.VariableGet(stackTraceVariable)))));
    }
    buildReturn(body : lib3.Statement) : lib3.Statement {
        return new lib3.Block(new core.DartList.literal<lib3.Statement>(body,((_) : lib3.ReturnStatement =>  {
            {
                _.fileOffset = this.enclosingFunction.fileEndOffset;
                return _;
            }
        })(new lib3.ReturnStatement())));
    }
    visitYieldStatement(stmt : lib3.YieldStatement) : lib3.TreeNode {
        let expr : lib3.Expression = this.expressionRewriter.rewrite(stmt.expression,this.statements);
        let addExpression = ((_) : lib3.MethodInvocation =>  {
            {
                _.fileOffset = stmt.fileOffset;
                return _;
            }
        })(new lib3.MethodInvocation(new lib3.VariableGet(this.controllerVariable),new lib3.Name(stmt.isYieldStar ? 'addStream' : 'add',this.helper.asyncLibrary),new lib3.Arguments(new core.DartList.literal<lib3.Expression>(expr))));
        this.statements.add(new lib3.IfStatement(addExpression,new lib3.ReturnStatement(new lib3.NullLiteral()),((_) : lib3.Statement =>  {
            {
                _.fileOffset = stmt.fileOffset;
                return _;
            }
        })(this.createContinuationPoint())));
        return null;
    }
    visitReturnStatement(node : lib3.ReturnStatement) : lib3.TreeNode {
        /* TODO (AssertStatementImpl) : assert (node.expression == null || node.expression is NullLiteral); */;
        this.statements.add(((_) : lib3.BreakStatement =>  {
            {
                _.fileOffset = node.fileOffset;
                return _;
            }
        })(new lib3.BreakStatement(this.labeledBody)));
        return null;
    }
}

export namespace AsyncFunctionRewriter {
    export type Constructors = AsyncRewriterBase.Constructors | 'AsyncFunctionRewriter';
    export type Interface = Omit<AsyncFunctionRewriter, Constructors>;
}
@DartClass
export class AsyncFunctionRewriter extends AsyncRewriterBase {
    completerVariable : lib3.VariableDeclaration;

    returnVariable : lib3.VariableDeclaration;

    constructor(helper : any,enclosingFunction : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsyncFunctionRewriter(helper : any,enclosingFunction : any) {
        super.AsyncRewriterBase(helper,enclosingFunction);
    }
    rewrite() : lib3.FunctionNode {
        let statements = new core.DartList.literal<lib3.Statement>();
        let future_type = this.enclosingFunction.returnType;
        let returnType : lib3.DartType = new lib3.DynamicType();
        if (is(future_type, lib3.InterfaceType)) {
            if (op(Op.EQUALS,future_type.classNode,this.helper.futureClass)) {
                if (future_type.typeArguments.length == 0) {
                    returnType = new lib3.DynamicType();
                }else if (future_type.typeArguments.length == 1) {
                    returnType = future_type.typeArguments[0];
                }else {
                    returnType = new lib3.InvalidType();
                }
            }
        }
        returnType = new lib3.InterfaceType(this.helper.futureOrClass,new core.DartList.literal<lib3.DartType>(returnType));
        let completerTypeArguments = new core.DartList.literal<lib3.DartType>(returnType);
        let completerType = new lib3.InterfaceType(this.helper.completerClass,completerTypeArguments);
        this.completerVariable = new lib3.VariableDeclaration(":completer",{
            initializer : ((_) : lib3.StaticInvocation =>  {
                {
                    _.fileOffset = this.enclosingFunction.body.fileOffset;
                    return _;
                }
            })(new lib3.StaticInvocation(this.helper.completerConstructor,new lib3.Arguments(new core.DartList.literal(),{
                types : completerTypeArguments}))),isFinal : true,type : completerType});
        statements.add(this.completerVariable);
        this.returnVariable = new lib3.VariableDeclaration(":return_value",{
            type : returnType});
        statements.add(this.returnVariable);
        this.setupAsyncContinuations(statements);
        let newMicrotaskStatement = new lib3.ExpressionStatement(((_) : lib3.StaticInvocation =>  {
            {
                _.fileOffset = this.enclosingFunction.fileOffset;
                return _;
            }
        })(new lib3.StaticInvocation(this.helper.futureMicrotaskConstructor,new lib3.Arguments(new core.DartList.literal(new lib3.VariableGet(this.nestedClosureVariable)),{
            types : new core.DartList.literal(new lib3.DynamicType())}))));
        statements.add(newMicrotaskStatement);
        let completerGet = new lib3.VariableGet(this.completerVariable);
        let returnStatement = new lib3.ReturnStatement(new lib3.PropertyGet(completerGet,new lib3.Name('future',this.helper.asyncLibrary)));
        statements.add(returnStatement);
        this.enclosingFunction.body = new lib3.Block(statements);
        this.enclosingFunction.body.parent = this.enclosingFunction;
        this.enclosingFunction.asyncMarker = lib3.AsyncMarker.Sync;
        return this.enclosingFunction;
    }
    buildCatchBody(exceptionVariable : any,stackTraceVariable : any) : lib3.Statement {
        return new lib3.ExpressionStatement(new lib3.MethodInvocation(new lib3.VariableGet(this.completerVariable),new lib3.Name("completeError",this.helper.asyncLibrary),new lib3.Arguments(new core.DartList.literal(new lib3.VariableGet(exceptionVariable),new lib3.VariableGet(stackTraceVariable)))));
    }
    buildReturn(body : lib3.Statement) : lib3.Statement {
        return new lib3.Block(new core.DartList.literal<lib3.Statement>(body,new lib3.ExpressionStatement(new lib3.MethodInvocation(new lib3.VariableGet(this.completerVariable),new lib3.Name("complete",this.helper.asyncLibrary),new lib3.Arguments(new core.DartList.literal(new lib3.VariableGet(this.returnVariable))))),((_) : lib3.ReturnStatement =>  {
            {
                _.fileOffset = this.enclosingFunction.fileEndOffset;
                return _;
            }
        })(new lib3.ReturnStatement())));
    }
    visitReturnStatement(node : lib3.ReturnStatement) {
        let expr = op(Op.EQUALS,node.expression,null) ? new lib3.NullLiteral() : this.expressionRewriter.rewrite(node.expression,this.statements);
        this.statements.add(new lib3.ExpressionStatement(((_) : lib3.VariableSet =>  {
            {
                _.fileOffset = node.fileOffset;
                return _;
            }
        })(new lib3.VariableSet(this.returnVariable,expr))));
        this.statements.add(new lib3.BreakStatement(this.labeledBody));
        return null;
    }
}

export class properties {
}
