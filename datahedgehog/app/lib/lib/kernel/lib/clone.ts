/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/clone.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./visitor";
import * as lib4 from "./ast";
import * as lib5 from "./type_algebra";

export namespace CloneVisitor {
    export type Constructors = lib3.TreeVisitor.Constructors | 'CloneVisitor';
    export type Interface = Omit<CloneVisitor, Constructors>;
}
@DartClass
export class CloneVisitor extends lib3.TreeVisitor<any> {
    variables : core.DartMap<lib4.VariableDeclaration,lib4.VariableDeclaration>;

    labels : core.DartMap<lib4.LabeledStatement,lib4.LabeledStatement>;

    switchCases : core.DartMap<lib4.SwitchCase,lib4.SwitchCase>;

    typeSubstitution : core.DartMap<lib4.TypeParameter,lib4.DartType>;

    constructor(_namedArguments? : {typeSubstitution? : core.DartMap<lib4.TypeParameter,lib4.DartType>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CloneVisitor(_namedArguments? : {typeSubstitution? : core.DartMap<lib4.TypeParameter,lib4.DartType>}) {
        let {typeSubstitution} = Object.assign({
        }, _namedArguments );
        this.variables = new core.DartMap.literal([
        ]);
        this.labels = new core.DartMap.literal([
        ]);
        this.switchCases = new core.DartMap.literal([
        ]);
        this.typeSubstitution = CloneVisitor.ensureMutable(typeSubstitution);
    }
    static ensureMutable(map : core.DartMap<lib4.TypeParameter,lib4.DartType>) : core.DartMap<lib4.TypeParameter,lib4.DartType> {
        if (map == null || map.isEmpty) {
            return new core.DartMap.literal([
            ]);
        }
        return map;
    }
    visitLibrary(node : lib4.Library) : lib4.TreeNode {
        throw 'Cloning of libraries is not implemented';
    }
    visitClass(node : lib4.Class) : lib4.TreeNode {
        throw 'Cloning of classes is not implemented';
    }
    clone(node : lib4.TreeNode) : lib4.TreeNode {
        return ((_) : any =>  {
            {
                _.fileOffset = node.fileOffset;
                return _;
            }
        })(node.accept(this));
    }
    cloneOptional(node : lib4.TreeNode) : lib4.TreeNode {
        let result : lib4.TreeNode = ((_689_)=>(!!_689_)?_689_.accept(this):null)(node);
        if (result != null) result.fileOffset = node.fileOffset;
        return result;
    }
    visitType(type : lib4.DartType) : lib4.DartType {
        return lib5.substitute(type,this.typeSubstitution);
    }
    visitOptionalType(type : lib4.DartType) : lib4.DartType {
        return op(Op.EQUALS,type,null) ? null : lib5.substitute(type,this.typeSubstitution);
    }
    visitInvalidExpression(node : lib4.InvalidExpression) {
        return new lib4.InvalidExpression();
    }
    visitVariableGet(node : lib4.VariableGet) {
        return new lib4.VariableGet(this.variables.get(node.variable),this.visitOptionalType(node.promotedType));
    }
    visitVariableSet(node : lib4.VariableSet) {
        return new lib4.VariableSet(this.variables.get(node.variable),this.clone(node.value));
    }
    visitPropertyGet(node : lib4.PropertyGet) {
        return new lib4.PropertyGet.byReference(this.clone(node.receiver),node.name,node.interfaceTargetReference);
    }
    visitPropertySet(node : lib4.PropertySet) {
        return new lib4.PropertySet.byReference(this.clone(node.receiver),node.name,this.clone(node.value),node.interfaceTargetReference);
    }
    visitDirectPropertyGet(node : lib4.DirectPropertyGet) {
        return new lib4.DirectPropertyGet.byReference(this.clone(node.receiver),node.targetReference);
    }
    visitDirectPropertySet(node : lib4.DirectPropertySet) {
        return new lib4.DirectPropertySet.byReference(this.clone(node.receiver),node.targetReference,this.clone(node.value));
    }
    visitSuperPropertyGet(node : lib4.SuperPropertyGet) {
        return new lib4.SuperPropertyGet.byReference(node.name,node.interfaceTargetReference);
    }
    visitSuperPropertySet(node : lib4.SuperPropertySet) {
        return new lib4.SuperPropertySet.byReference(node.name,this.clone(node.value),node.interfaceTargetReference);
    }
    visitStaticGet(node : lib4.StaticGet) {
        return new lib4.StaticGet.byReference(node.targetReference);
    }
    visitStaticSet(node : lib4.StaticSet) {
        return new lib4.StaticSet.byReference(node.targetReference,this.clone(node.value));
    }
    visitMethodInvocation(node : lib4.MethodInvocation) {
        return new lib4.MethodInvocation.byReference(this.clone(node.receiver),node.name,this.clone(node.arguments),node.interfaceTargetReference);
    }
    visitDirectMethodInvocation(node : lib4.DirectMethodInvocation) {
        return new lib4.DirectMethodInvocation.byReference(this.clone(node.receiver),node.targetReference,this.clone(node.arguments));
    }
    visitSuperMethodInvocation(node : lib4.SuperMethodInvocation) {
        return new lib4.SuperMethodInvocation.byReference(node.name,this.clone(node.arguments),node.interfaceTargetReference);
    }
    visitStaticInvocation(node : lib4.StaticInvocation) {
        return new lib4.StaticInvocation.byReference(node.targetReference,this.clone(node.arguments),{
            isConst : node.isConst});
    }
    visitConstructorInvocation(node : lib4.ConstructorInvocation) {
        return new lib4.ConstructorInvocation.byReference(node.targetReference,this.clone(node.arguments),{
            isConst : node.isConst});
    }
    visitNot(node : lib4.Not) {
        return new lib4.Not(this.clone(node.operand));
    }
    visitLogicalExpression(node : lib4.LogicalExpression) {
        return new lib4.LogicalExpression(this.clone(node.left),node.operator,this.clone(node.right));
    }
    visitConditionalExpression(node : lib4.ConditionalExpression) {
        return new lib4.ConditionalExpression(this.clone(node.condition),this.clone(node.then),this.clone(node.otherwise),this.visitOptionalType(node.staticType));
    }
    visitStringConcatenation(node : lib4.StringConcatenation) {
        return new lib4.StringConcatenation(node.expressions.map(this.clone.bind(this)).toList());
    }
    visitIsExpression(node : lib4.IsExpression) {
        return new lib4.IsExpression(this.clone(node.operand),this.visitType(node.type));
    }
    visitAsExpression(node : lib4.AsExpression) {
        return new lib4.AsExpression(this.clone(node.operand),this.visitType(node.type));
    }
    visitSymbolLiteral(node : lib4.SymbolLiteral) {
        return new lib4.SymbolLiteral(node.value);
    }
    visitTypeLiteral(node : lib4.TypeLiteral) {
        return new lib4.TypeLiteral(this.visitType(node.type));
    }
    visitThisExpression(node : lib4.ThisExpression) {
        return new lib4.ThisExpression();
    }
    visitRethrow(node : lib4.Rethrow) {
        return new lib4.Rethrow();
    }
    visitThrow(node : lib4.Throw) {
        return new lib4.Throw(this.cloneOptional(node.expression));
    }
    visitListLiteral(node : lib4.ListLiteral) {
        return new lib4.ListLiteral(node.expressions.map(this.clone.bind(this)).toList(),{
            typeArgument : this.visitType(node.typeArgument),isConst : node.isConst});
    }
    visitMapLiteral(node : lib4.MapLiteral) {
        return new lib4.MapLiteral(node.entries.map(this.clone.bind(this)).toList(),{
            keyType : this.visitType(node.keyType),valueType : this.visitType(node.valueType),isConst : node.isConst});
    }
    visitMapEntry(node : lib4.MapEntry) {
        return new lib4.MapEntry(this.clone(node.key),this.clone(node.value));
    }
    visitAwaitExpression(node : lib4.AwaitExpression) {
        return new lib4.AwaitExpression(this.clone(node.operand));
    }
    visitFunctionExpression(node : lib4.FunctionExpression) {
        return new lib4.FunctionExpression(this.clone(node.function));
    }
    visitStringLiteral(node : lib4.StringLiteral) {
        return new lib4.StringLiteral(node.value);
    }
    visitIntLiteral(node : lib4.IntLiteral) {
        return new lib4.IntLiteral(node.value);
    }
    visitDoubleLiteral(node : lib4.DoubleLiteral) {
        return new lib4.DoubleLiteral(node.value);
    }
    visitBoolLiteral(node : lib4.BoolLiteral) {
        return new lib4.BoolLiteral(node.value);
    }
    visitNullLiteral(node : lib4.NullLiteral) {
        return new lib4.NullLiteral();
    }
    visitLet(node : lib4.Let) {
        let newVariable = this.clone(node.variable);
        return new lib4.Let(newVariable,this.clone(node.body));
    }
    visitVectorCreation(node : lib4.VectorCreation) {
        return new lib4.VectorCreation(node.length);
    }
    visitClosureCreation(node : lib4.ClosureCreation) {
        return new lib4.ClosureCreation.byReference(node.topLevelFunctionReference,this.cloneOptional(node.contextVector),this.visitOptionalType(node.functionType));
    }
    visitVectorSet(node : lib4.VectorSet) {
        return new lib4.VectorSet(this.clone(node.vectorExpression),node.index,this.clone(node.value));
    }
    visitVectorGet(node : lib4.VectorGet) {
        return new lib4.VectorGet(this.clone(node.vectorExpression),node.index);
    }
    visitVectorCopy(node : lib4.VectorCopy) {
        return new lib4.VectorCopy(this.clone(node.vectorExpression));
    }
    visitInvalidStatement(node : lib4.InvalidStatement) {
        return new lib4.InvalidStatement();
    }
    visitExpressionStatement(node : lib4.ExpressionStatement) {
        return new lib4.ExpressionStatement(this.clone(node.expression));
    }
    visitBlock(node : lib4.Block) {
        return new lib4.Block(node.statements.map(this.clone.bind(this)).toList());
    }
    visitEmptyStatement(node : lib4.EmptyStatement) {
        return new lib4.EmptyStatement();
    }
    visitAssertStatement(node : lib4.AssertStatement) {
        return new lib4.AssertStatement(this.clone(node.condition),this.cloneOptional(node.message));
    }
    visitLabeledStatement(node : lib4.LabeledStatement) {
        let newNode : lib4.LabeledStatement = new lib4.LabeledStatement(null);
        this.labels.set(node,newNode);
        newNode.body = ((_) : lib4.TreeNode =>  {
            {
                _.parent = newNode;
                return _;
            }
        })(this.clone(node.body));
        return newNode;
    }
    visitBreakStatement(node : lib4.BreakStatement) {
        return new lib4.BreakStatement(this.labels.get(node.target));
    }
    visitWhileStatement(node : lib4.WhileStatement) {
        return new lib4.WhileStatement(this.clone(node.condition),this.clone(node.body));
    }
    visitDoStatement(node : lib4.DoStatement) {
        return new lib4.DoStatement(this.clone(node.body),this.clone(node.condition));
    }
    visitForStatement(node : lib4.ForStatement) {
        let variables = node.variables.map(this.clone.bind(this)).toList();
        return new lib4.ForStatement(variables,this.cloneOptional(node.condition),node.updates.map(this.clone.bind(this)).toList(),this.clone(node.body));
    }
    visitForInStatement(node : lib4.ForInStatement) {
        let newVariable = this.clone(node.variable);
        return new lib4.ForInStatement(newVariable,this.clone(node.iterable),this.clone(node.body));
    }
    visitSwitchStatement(node : lib4.SwitchStatement) {
        for(let switchCase of node.cases) {
            this.switchCases.set(switchCase,new lib4.SwitchCase(switchCase.expressions.map(this.clone.bind(this)).toList(),new core.DartList.from(switchCase.expressionOffsets),null));
        }
        return new lib4.SwitchStatement(this.clone(node.expression),node.cases.map(this.clone.bind(this)).toList());
    }
    visitSwitchCase(node : lib4.SwitchCase) {
        let switchCase = this.switchCases.get(node);
        switchCase.body = ((_) : lib4.TreeNode =>  {
            {
                _.parent = switchCase;
                return _;
            }
        })(this.clone(node.body));
        return switchCase;
    }
    visitContinueSwitchStatement(node : lib4.ContinueSwitchStatement) {
        return new lib4.ContinueSwitchStatement(this.switchCases.get(node.target));
    }
    visitIfStatement(node : lib4.IfStatement) {
        return new lib4.IfStatement(this.clone(node.condition),this.clone(node.then),this.cloneOptional(node.otherwise));
    }
    visitReturnStatement(node : lib4.ReturnStatement) {
        return new lib4.ReturnStatement(this.cloneOptional(node.expression));
    }
    visitTryCatch(node : lib4.TryCatch) {
        return new lib4.TryCatch(this.clone(node.body),node.catches.map(this.clone.bind(this)).toList());
    }
    visitCatch(node : lib4.Catch) {
        let newException = this.cloneOptional(node.exception);
        let newStackTrace = this.cloneOptional(node.stackTrace);
        return new lib4.Catch(newException,this.clone(node.body),{
            stackTrace : newStackTrace,guard : this.visitType(node.guard)});
    }
    visitTryFinally(node : lib4.TryFinally) {
        return new lib4.TryFinally(this.clone(node.body),this.clone(node.finalizer));
    }
    visitYieldStatement(node : lib4.YieldStatement) {
        return new lib4.YieldStatement(this.clone(node.expression));
    }
    visitVariableDeclaration(node : lib4.VariableDeclaration) {
        return this.variables.set(node,new lib4.VariableDeclaration(node.name,{
            initializer : this.cloneOptional(node.initializer),type : this.visitType(node.type),isFinal : node.isFinal,isConst : node.isConst}));
    }
    visitFunctionDeclaration(node : lib4.FunctionDeclaration) {
        let newVariable = this.clone(node.variable);
        return new lib4.FunctionDeclaration(newVariable,this.clone(node.function));
    }
    visitConstructor(node : lib4.Constructor) {
        return ((_) : lib4.Constructor =>  {
            {
                _.fileEndOffset = node.fileEndOffset;
                return _;
            }
        })(new lib4.Constructor(this.clone(node.function),{
            name : node.name,isConst : node.isConst,isExternal : node.isExternal,initializers : node.initializers.map(this.clone.bind(this)).toList(),transformerFlags : node.transformerFlags}));
    }
    visitProcedure(node : lib4.Procedure) {
        return ((_) : lib4.Procedure =>  {
            {
                _.fileEndOffset = node.fileEndOffset;
                return _;
            }
        })(new lib4.Procedure(node.name,node.kind,this.clone(node.function),{
            isAbstract : node.isAbstract,isStatic : node.isStatic,isExternal : node.isExternal,isConst : node.isConst,transformerFlags : node.transformerFlags,fileUri : node.fileUri}));
    }
    visitField(node : lib4.Field) {
        return ((_) : lib4.Field =>  {
            {
                _.fileEndOffset = node.fileEndOffset;
                return _;
            }
        })(new lib4.Field(node.name,{
            type : this.visitType(node.type),initializer : this.cloneOptional(node.initializer),isFinal : node.isFinal,isConst : node.isConst,isStatic : node.isStatic,hasImplicitGetter : node.hasImplicitGetter,hasImplicitSetter : node.hasImplicitSetter,transformerFlags : node.transformerFlags,fileUri : node.fileUri}));
    }
    visitTypeParameter(node : lib4.TypeParameter) {
        let newNode = new lib4.TypeParameter(node.name);
        this.typeSubstitution.set(node,new lib4.TypeParameterType(newNode));
        newNode.bound = this.visitType(node.bound);
        return newNode;
    }
    cloneFunctionNodeBody(node : lib4.FunctionNode) : lib4.TreeNode {
        return this.cloneOptional(node.body);
    }
    visitFunctionNode(node : lib4.FunctionNode) {
        let typeParameters = node.typeParameters.map(this.clone.bind(this)).toList();
        let positional = node.positionalParameters.map(this.clone.bind(this)).toList();
        let named = node.namedParameters.map(this.clone.bind(this)).toList();
        return ((_) : lib4.FunctionNode =>  {
            {
                _.fileEndOffset = node.fileEndOffset;
                return _;
            }
        })(new lib4.FunctionNode(this.cloneFunctionNodeBody(node),{
            typeParameters : typeParameters,positionalParameters : positional,namedParameters : named,requiredParameterCount : node.requiredParameterCount,returnType : this.visitType(node.returnType),asyncMarker : node.asyncMarker,dartAsyncMarker : node.dartAsyncMarker}));
    }
    visitArguments(node : lib4.Arguments) {
        return new lib4.Arguments(node.positional.map(this.clone.bind(this)).toList(),{
            types : node.types.map(this.visitType.bind(this)).toList(),named : node.named.map(this.clone.bind(this)).toList()});
    }
    visitNamedExpression(node : lib4.NamedExpression) {
        return new lib4.NamedExpression(node.name,this.clone(node.value));
    }
}

export class properties {
}
