/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/visitor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";

export namespace ExpressionVisitor {
    export type Constructors = 'ExpressionVisitor';
    export type Interface<R> = Omit<ExpressionVisitor<R>, Constructors>;
}
@DartClass
export class ExpressionVisitor<R> {
    defaultExpression(node : lib3.Expression) : R {
        return null;
    }
    defaultBasicLiteral(node : lib3.BasicLiteral) : R {
        return this.defaultExpression(node);
    }
    visitInvalidExpression(node : lib3.InvalidExpression) : R {
        return this.defaultExpression(node);
    }
    visitVariableGet(node : lib3.VariableGet) : R {
        return this.defaultExpression(node);
    }
    visitVariableSet(node : lib3.VariableSet) : R {
        return this.defaultExpression(node);
    }
    visitPropertyGet(node : lib3.PropertyGet) : R {
        return this.defaultExpression(node);
    }
    visitPropertySet(node : lib3.PropertySet) : R {
        return this.defaultExpression(node);
    }
    visitDirectPropertyGet(node : lib3.DirectPropertyGet) : R {
        return this.defaultExpression(node);
    }
    visitDirectPropertySet(node : lib3.DirectPropertySet) : R {
        return this.defaultExpression(node);
    }
    visitSuperPropertyGet(node : lib3.SuperPropertyGet) : R {
        return this.defaultExpression(node);
    }
    visitSuperPropertySet(node : lib3.SuperPropertySet) : R {
        return this.defaultExpression(node);
    }
    visitStaticGet(node : lib3.StaticGet) : R {
        return this.defaultExpression(node);
    }
    visitStaticSet(node : lib3.StaticSet) : R {
        return this.defaultExpression(node);
    }
    visitMethodInvocation(node : lib3.MethodInvocation) : R {
        return this.defaultExpression(node);
    }
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation) : R {
        return this.defaultExpression(node);
    }
    visitSuperMethodInvocation(node : lib3.SuperMethodInvocation) : R {
        return this.defaultExpression(node);
    }
    visitStaticInvocation(node : lib3.StaticInvocation) : R {
        return this.defaultExpression(node);
    }
    visitConstructorInvocation(node : lib3.ConstructorInvocation) : R {
        return this.defaultExpression(node);
    }
    visitNot(node : lib3.Not) : R {
        return this.defaultExpression(node);
    }
    visitLogicalExpression(node : lib3.LogicalExpression) : R {
        return this.defaultExpression(node);
    }
    visitConditionalExpression(node : lib3.ConditionalExpression) : R {
        return this.defaultExpression(node);
    }
    visitStringConcatenation(node : lib3.StringConcatenation) : R {
        return this.defaultExpression(node);
    }
    visitIsExpression(node : lib3.IsExpression) : R {
        return this.defaultExpression(node);
    }
    visitAsExpression(node : lib3.AsExpression) : R {
        return this.defaultExpression(node);
    }
    visitSymbolLiteral(node : lib3.SymbolLiteral) : R {
        return this.defaultExpression(node);
    }
    visitTypeLiteral(node : lib3.TypeLiteral) : R {
        return this.defaultExpression(node);
    }
    visitThisExpression(node : lib3.ThisExpression) : R {
        return this.defaultExpression(node);
    }
    visitRethrow(node : lib3.Rethrow) : R {
        return this.defaultExpression(node);
    }
    visitThrow(node : lib3.Throw) : R {
        return this.defaultExpression(node);
    }
    visitListLiteral(node : lib3.ListLiteral) : R {
        return this.defaultExpression(node);
    }
    visitMapLiteral(node : lib3.MapLiteral) : R {
        return this.defaultExpression(node);
    }
    visitAwaitExpression(node : lib3.AwaitExpression) : R {
        return this.defaultExpression(node);
    }
    visitFunctionExpression(node : lib3.FunctionExpression) : R {
        return this.defaultExpression(node);
    }
    visitStringLiteral(node : lib3.StringLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitIntLiteral(node : lib3.IntLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitDoubleLiteral(node : lib3.DoubleLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitBoolLiteral(node : lib3.BoolLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitNullLiteral(node : lib3.NullLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitLet(node : lib3.Let) : R {
        return this.defaultExpression(node);
    }
    visitLoadLibrary(node : lib3.LoadLibrary) : R {
        return this.defaultExpression(node);
    }
    visitCheckLibraryIsLoaded(node : lib3.CheckLibraryIsLoaded) : R {
        return this.defaultExpression(node);
    }
    visitVectorCreation(node : lib3.VectorCreation) : R {
        return this.defaultExpression(node);
    }
    visitVectorGet(node : lib3.VectorGet) : R {
        return this.defaultExpression(node);
    }
    visitVectorSet(node : lib3.VectorSet) : R {
        return this.defaultExpression(node);
    }
    visitVectorCopy(node : lib3.VectorCopy) : R {
        return this.defaultExpression(node);
    }
    visitClosureCreation(node : lib3.ClosureCreation) : R {
        return this.defaultExpression(node);
    }
    constructor() {
    }
    @defaultConstructor
    ExpressionVisitor() {
    }
}

export namespace StatementVisitor {
    export type Constructors = 'StatementVisitor';
    export type Interface<R> = Omit<StatementVisitor<R>, Constructors>;
}
@DartClass
export class StatementVisitor<R> {
    defaultStatement(node : lib3.Statement) : R {
        return null;
    }
    visitInvalidStatement(node : lib3.InvalidStatement) : R {
        return this.defaultStatement(node);
    }
    visitExpressionStatement(node : lib3.ExpressionStatement) : R {
        return this.defaultStatement(node);
    }
    visitBlock(node : lib3.Block) : R {
        return this.defaultStatement(node);
    }
    visitEmptyStatement(node : lib3.EmptyStatement) : R {
        return this.defaultStatement(node);
    }
    visitAssertStatement(node : lib3.AssertStatement) : R {
        return this.defaultStatement(node);
    }
    visitLabeledStatement(node : lib3.LabeledStatement) : R {
        return this.defaultStatement(node);
    }
    visitBreakStatement(node : lib3.BreakStatement) : R {
        return this.defaultStatement(node);
    }
    visitWhileStatement(node : lib3.WhileStatement) : R {
        return this.defaultStatement(node);
    }
    visitDoStatement(node : lib3.DoStatement) : R {
        return this.defaultStatement(node);
    }
    visitForStatement(node : lib3.ForStatement) : R {
        return this.defaultStatement(node);
    }
    visitForInStatement(node : lib3.ForInStatement) : R {
        return this.defaultStatement(node);
    }
    visitSwitchStatement(node : lib3.SwitchStatement) : R {
        return this.defaultStatement(node);
    }
    visitContinueSwitchStatement(node : lib3.ContinueSwitchStatement) : R {
        return this.defaultStatement(node);
    }
    visitIfStatement(node : lib3.IfStatement) : R {
        return this.defaultStatement(node);
    }
    visitReturnStatement(node : lib3.ReturnStatement) : R {
        return this.defaultStatement(node);
    }
    visitTryCatch(node : lib3.TryCatch) : R {
        return this.defaultStatement(node);
    }
    visitTryFinally(node : lib3.TryFinally) : R {
        return this.defaultStatement(node);
    }
    visitYieldStatement(node : lib3.YieldStatement) : R {
        return this.defaultStatement(node);
    }
    visitVariableDeclaration(node : lib3.VariableDeclaration) : R {
        return this.defaultStatement(node);
    }
    visitFunctionDeclaration(node : lib3.FunctionDeclaration) : R {
        return this.defaultStatement(node);
    }
    constructor() {
    }
    @defaultConstructor
    StatementVisitor() {
    }
}

export namespace MemberVisitor {
    export type Constructors = 'MemberVisitor';
    export type Interface<R> = Omit<MemberVisitor<R>, Constructors>;
}
@DartClass
export class MemberVisitor<R> {
    defaultMember(node : lib3.Member) : R {
        return null;
    }
    visitConstructor(node : lib3.Constructor) : R {
        return this.defaultMember(node);
    }
    visitProcedure(node : lib3.Procedure) : R {
        return this.defaultMember(node);
    }
    visitField(node : lib3.Field) : R {
        return this.defaultMember(node);
    }
    constructor() {
    }
    @defaultConstructor
    MemberVisitor() {
    }
}

export namespace InitializerVisitor {
    export type Constructors = 'InitializerVisitor';
    export type Interface<R> = Omit<InitializerVisitor<R>, Constructors>;
}
@DartClass
export class InitializerVisitor<R> {
    defaultInitializer(node : lib3.Initializer) : R {
        return null;
    }
    visitInvalidInitializer(node : lib3.InvalidInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitFieldInitializer(node : lib3.FieldInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitSuperInitializer(node : lib3.SuperInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitRedirectingInitializer(node : lib3.RedirectingInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitLocalInitializer(node : lib3.LocalInitializer) : R {
        return this.defaultInitializer(node);
    }
    constructor() {
    }
    @defaultConstructor
    InitializerVisitor() {
    }
}

export namespace TreeVisitor {
    export type Constructors = 'TreeVisitor';
    export type Interface<R> = Omit<TreeVisitor<R>, Constructors>;
}
@DartClass
@Implements(ExpressionVisitor,StatementVisitor,MemberVisitor,InitializerVisitor)
export class TreeVisitor<R> implements ExpressionVisitor.Interface<R>,StatementVisitor.Interface<R>,MemberVisitor.Interface<R>,InitializerVisitor.Interface<R> {
    defaultTreeNode(node : lib3.TreeNode) : R {
        return null;
    }
    defaultExpression(node : lib3.Expression) : R {
        return this.defaultTreeNode(node);
    }
    defaultBasicLiteral(node : lib3.BasicLiteral) : R {
        return this.defaultExpression(node);
    }
    visitInvalidExpression(node : lib3.InvalidExpression) : R {
        return this.defaultExpression(node);
    }
    visitVariableGet(node : lib3.VariableGet) : R {
        return this.defaultExpression(node);
    }
    visitVariableSet(node : lib3.VariableSet) : R {
        return this.defaultExpression(node);
    }
    visitPropertyGet(node : lib3.PropertyGet) : R {
        return this.defaultExpression(node);
    }
    visitPropertySet(node : lib3.PropertySet) : R {
        return this.defaultExpression(node);
    }
    visitDirectPropertyGet(node : lib3.DirectPropertyGet) : R {
        return this.defaultExpression(node);
    }
    visitDirectPropertySet(node : lib3.DirectPropertySet) : R {
        return this.defaultExpression(node);
    }
    visitSuperPropertyGet(node : lib3.SuperPropertyGet) : R {
        return this.defaultExpression(node);
    }
    visitSuperPropertySet(node : lib3.SuperPropertySet) : R {
        return this.defaultExpression(node);
    }
    visitStaticGet(node : lib3.StaticGet) : R {
        return this.defaultExpression(node);
    }
    visitStaticSet(node : lib3.StaticSet) : R {
        return this.defaultExpression(node);
    }
    visitMethodInvocation(node : lib3.MethodInvocation) : R {
        return this.defaultExpression(node);
    }
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation) : R {
        return this.defaultExpression(node);
    }
    visitSuperMethodInvocation(node : lib3.SuperMethodInvocation) : R {
        return this.defaultExpression(node);
    }
    visitStaticInvocation(node : lib3.StaticInvocation) : R {
        return this.defaultExpression(node);
    }
    visitConstructorInvocation(node : lib3.ConstructorInvocation) : R {
        return this.defaultExpression(node);
    }
    visitNot(node : lib3.Not) : R {
        return this.defaultExpression(node);
    }
    visitLogicalExpression(node : lib3.LogicalExpression) : R {
        return this.defaultExpression(node);
    }
    visitConditionalExpression(node : lib3.ConditionalExpression) : R {
        return this.defaultExpression(node);
    }
    visitStringConcatenation(node : lib3.StringConcatenation) : R {
        return this.defaultExpression(node);
    }
    visitIsExpression(node : lib3.IsExpression) : R {
        return this.defaultExpression(node);
    }
    visitAsExpression(node : lib3.AsExpression) : R {
        return this.defaultExpression(node);
    }
    visitSymbolLiteral(node : lib3.SymbolLiteral) : R {
        return this.defaultExpression(node);
    }
    visitTypeLiteral(node : lib3.TypeLiteral) : R {
        return this.defaultExpression(node);
    }
    visitThisExpression(node : lib3.ThisExpression) : R {
        return this.defaultExpression(node);
    }
    visitRethrow(node : lib3.Rethrow) : R {
        return this.defaultExpression(node);
    }
    visitThrow(node : lib3.Throw) : R {
        return this.defaultExpression(node);
    }
    visitListLiteral(node : lib3.ListLiteral) : R {
        return this.defaultExpression(node);
    }
    visitMapLiteral(node : lib3.MapLiteral) : R {
        return this.defaultExpression(node);
    }
    visitAwaitExpression(node : lib3.AwaitExpression) : R {
        return this.defaultExpression(node);
    }
    visitFunctionExpression(node : lib3.FunctionExpression) : R {
        return this.defaultExpression(node);
    }
    visitStringLiteral(node : lib3.StringLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitIntLiteral(node : lib3.IntLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitDoubleLiteral(node : lib3.DoubleLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitBoolLiteral(node : lib3.BoolLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitNullLiteral(node : lib3.NullLiteral) : R {
        return this.defaultBasicLiteral(node);
    }
    visitLet(node : lib3.Let) : R {
        return this.defaultExpression(node);
    }
    visitLoadLibrary(node : lib3.LoadLibrary) : R {
        return this.defaultExpression(node);
    }
    visitCheckLibraryIsLoaded(node : lib3.CheckLibraryIsLoaded) : R {
        return this.defaultExpression(node);
    }
    visitVectorCreation(node : lib3.VectorCreation) : R {
        return this.defaultExpression(node);
    }
    visitVectorGet(node : lib3.VectorGet) : R {
        return this.defaultExpression(node);
    }
    visitVectorSet(node : lib3.VectorSet) : R {
        return this.defaultExpression(node);
    }
    visitVectorCopy(node : lib3.VectorCopy) : R {
        return this.defaultExpression(node);
    }
    visitClosureCreation(node : lib3.ClosureCreation) : R {
        return this.defaultExpression(node);
    }
    defaultStatement(node : lib3.Statement) : R {
        return this.defaultTreeNode(node);
    }
    visitInvalidStatement(node : lib3.InvalidStatement) : R {
        return this.defaultStatement(node);
    }
    visitExpressionStatement(node : lib3.ExpressionStatement) : R {
        return this.defaultStatement(node);
    }
    visitBlock(node : lib3.Block) : R {
        return this.defaultStatement(node);
    }
    visitEmptyStatement(node : lib3.EmptyStatement) : R {
        return this.defaultStatement(node);
    }
    visitAssertStatement(node : lib3.AssertStatement) : R {
        return this.defaultStatement(node);
    }
    visitLabeledStatement(node : lib3.LabeledStatement) : R {
        return this.defaultStatement(node);
    }
    visitBreakStatement(node : lib3.BreakStatement) : R {
        return this.defaultStatement(node);
    }
    visitWhileStatement(node : lib3.WhileStatement) : R {
        return this.defaultStatement(node);
    }
    visitDoStatement(node : lib3.DoStatement) : R {
        return this.defaultStatement(node);
    }
    visitForStatement(node : lib3.ForStatement) : R {
        return this.defaultStatement(node);
    }
    visitForInStatement(node : lib3.ForInStatement) : R {
        return this.defaultStatement(node);
    }
    visitSwitchStatement(node : lib3.SwitchStatement) : R {
        return this.defaultStatement(node);
    }
    visitContinueSwitchStatement(node : lib3.ContinueSwitchStatement) : R {
        return this.defaultStatement(node);
    }
    visitIfStatement(node : lib3.IfStatement) : R {
        return this.defaultStatement(node);
    }
    visitReturnStatement(node : lib3.ReturnStatement) : R {
        return this.defaultStatement(node);
    }
    visitTryCatch(node : lib3.TryCatch) : R {
        return this.defaultStatement(node);
    }
    visitTryFinally(node : lib3.TryFinally) : R {
        return this.defaultStatement(node);
    }
    visitYieldStatement(node : lib3.YieldStatement) : R {
        return this.defaultStatement(node);
    }
    visitVariableDeclaration(node : lib3.VariableDeclaration) : R {
        return this.defaultStatement(node);
    }
    visitFunctionDeclaration(node : lib3.FunctionDeclaration) : R {
        return this.defaultStatement(node);
    }
    defaultMember(node : lib3.Member) : R {
        return this.defaultTreeNode(node);
    }
    visitConstructor(node : lib3.Constructor) : R {
        return this.defaultMember(node);
    }
    visitProcedure(node : lib3.Procedure) : R {
        return this.defaultMember(node);
    }
    visitField(node : lib3.Field) : R {
        return this.defaultMember(node);
    }
    visitClass(node : lib3.Class) : R {
        return this.defaultTreeNode(node);
    }
    defaultInitializer(node : lib3.Initializer) : R {
        return this.defaultTreeNode(node);
    }
    visitInvalidInitializer(node : lib3.InvalidInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitFieldInitializer(node : lib3.FieldInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitSuperInitializer(node : lib3.SuperInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitRedirectingInitializer(node : lib3.RedirectingInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitLocalInitializer(node : lib3.LocalInitializer) : R {
        return this.defaultInitializer(node);
    }
    visitLibrary(node : lib3.Library) : R {
        return this.defaultTreeNode(node);
    }
    visitLibraryDependency(node : lib3.LibraryDependency) : R {
        return this.defaultTreeNode(node);
    }
    visitCombinator(node : lib3.Combinator) : R {
        return this.defaultTreeNode(node);
    }
    visitTypedef(node : lib3.Typedef) : R {
        return this.defaultTreeNode(node);
    }
    visitTypeParameter(node : lib3.TypeParameter) : R {
        return this.defaultTreeNode(node);
    }
    visitFunctionNode(node : lib3.FunctionNode) : R {
        return this.defaultTreeNode(node);
    }
    visitArguments(node : lib3.Arguments) : R {
        return this.defaultTreeNode(node);
    }
    visitNamedExpression(node : lib3.NamedExpression) : R {
        return this.defaultTreeNode(node);
    }
    visitSwitchCase(node : lib3.SwitchCase) : R {
        return this.defaultTreeNode(node);
    }
    visitCatch(node : lib3.Catch) : R {
        return this.defaultTreeNode(node);
    }
    visitMapEntry(node : lib3.MapEntry) : R {
        return this.defaultTreeNode(node);
    }
    visitProgram(node : lib3.Program) : R {
        return this.defaultTreeNode(node);
    }
    constructor() {
    }
    @defaultConstructor
    TreeVisitor() {
    }
}

export namespace DartTypeVisitor {
    export type Constructors = 'DartTypeVisitor';
    export type Interface<R> = Omit<DartTypeVisitor<R>, Constructors>;
}
@DartClass
export class DartTypeVisitor<R> {
    defaultDartType(node : lib3.DartType) : R {
        return null;
    }
    visitInvalidType(node : lib3.InvalidType) : R {
        return this.defaultDartType(node);
    }
    visitDynamicType(node : lib3.DynamicType) : R {
        return this.defaultDartType(node);
    }
    visitVoidType(node : lib3.VoidType) : R {
        return this.defaultDartType(node);
    }
    visitBottomType(node : lib3.BottomType) : R {
        return this.defaultDartType(node);
    }
    visitInterfaceType(node : lib3.InterfaceType) : R {
        return this.defaultDartType(node);
    }
    visitVectorType(node : lib3.VectorType) : R {
        return this.defaultDartType(node);
    }
    visitFunctionType(node : lib3.FunctionType) : R {
        return this.defaultDartType(node);
    }
    visitTypeParameterType(node : lib3.TypeParameterType) : R {
        return this.defaultDartType(node);
    }
    visitTypedefType(node : lib3.TypedefType) : R {
        return this.defaultDartType(node);
    }
    constructor() {
    }
    @defaultConstructor
    DartTypeVisitor() {
    }
}

export namespace MemberReferenceVisitor {
    export type Constructors = 'MemberReferenceVisitor';
    export type Interface<R> = Omit<MemberReferenceVisitor<R>, Constructors>;
}
@DartClass
export class MemberReferenceVisitor<R> {
    defaultMemberReference(node : lib3.Member) : R {
        return null;
    }
    visitFieldReference(node : lib3.Field) : R {
        return this.defaultMemberReference(node);
    }
    visitConstructorReference(node : lib3.Constructor) : R {
        return this.defaultMemberReference(node);
    }
    visitProcedureReference(node : lib3.Procedure) : R {
        return this.defaultMemberReference(node);
    }
    constructor() {
    }
    @defaultConstructor
    MemberReferenceVisitor() {
    }
}

export namespace ExpressionVisitor1 {
    export type Constructors = 'ExpressionVisitor1';
    export type Interface<R,T> = Omit<ExpressionVisitor1<R,T>, Constructors>;
}
@DartClass
export class ExpressionVisitor1<R,T> {
    defaultExpression(node : lib3.Expression,arg : T) : R {
        return null;
    }
    defaultBasicLiteral(node : lib3.BasicLiteral,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitInvalidExpression(node : lib3.InvalidExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitVariableGet(node : lib3.VariableGet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitVariableSet(node : lib3.VariableSet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitPropertyGet(node : lib3.PropertyGet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitPropertySet(node : lib3.PropertySet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitDirectPropertyGet(node : lib3.DirectPropertyGet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitDirectPropertySet(node : lib3.DirectPropertySet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitSuperPropertyGet(node : lib3.SuperPropertyGet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitSuperPropertySet(node : lib3.SuperPropertySet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitStaticGet(node : lib3.StaticGet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitStaticSet(node : lib3.StaticSet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitMethodInvocation(node : lib3.MethodInvocation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitSuperMethodInvocation(node : lib3.SuperMethodInvocation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitStaticInvocation(node : lib3.StaticInvocation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitConstructorInvocation(node : lib3.ConstructorInvocation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitNot(node : lib3.Not,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitLogicalExpression(node : lib3.LogicalExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitConditionalExpression(node : lib3.ConditionalExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitStringConcatenation(node : lib3.StringConcatenation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitIsExpression(node : lib3.IsExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitAsExpression(node : lib3.AsExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitSymbolLiteral(node : lib3.SymbolLiteral,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitTypeLiteral(node : lib3.TypeLiteral,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitThisExpression(node : lib3.ThisExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitRethrow(node : lib3.Rethrow,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitThrow(node : lib3.Throw,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitListLiteral(node : lib3.ListLiteral,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitMapLiteral(node : lib3.MapLiteral,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitAwaitExpression(node : lib3.AwaitExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitFunctionExpression(node : lib3.FunctionExpression,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitStringLiteral(node : lib3.StringLiteral,arg : T) : R {
        return this.defaultBasicLiteral(node,arg);
    }
    visitIntLiteral(node : lib3.IntLiteral,arg : T) : R {
        return this.defaultBasicLiteral(node,arg);
    }
    visitDoubleLiteral(node : lib3.DoubleLiteral,arg : T) : R {
        return this.defaultBasicLiteral(node,arg);
    }
    visitBoolLiteral(node : lib3.BoolLiteral,arg : T) : R {
        return this.defaultBasicLiteral(node,arg);
    }
    visitNullLiteral(node : lib3.NullLiteral,arg : T) : R {
        return this.defaultBasicLiteral(node,arg);
    }
    visitLet(node : lib3.Let,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitLoadLibrary(node : lib3.LoadLibrary,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitCheckLibraryIsLoaded(node : lib3.CheckLibraryIsLoaded,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitVectorCreation(node : lib3.VectorCreation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitVectorGet(node : lib3.VectorGet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitVectorSet(node : lib3.VectorSet,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitVectorCopy(node : lib3.VectorCopy,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    visitClosureCreation(node : lib3.ClosureCreation,arg : T) : R {
        return this.defaultExpression(node,arg);
    }
    constructor() {
    }
    @defaultConstructor
    ExpressionVisitor1() {
    }
}

export namespace StatementVisitor1 {
    export type Constructors = 'StatementVisitor1';
    export type Interface<R,T> = Omit<StatementVisitor1<R,T>, Constructors>;
}
@DartClass
export class StatementVisitor1<R,T> {
    defaultStatement(node : lib3.Statement,arg : T) : R {
        return null;
    }
    visitInvalidStatement(node : lib3.InvalidStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitExpressionStatement(node : lib3.ExpressionStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitBlock(node : lib3.Block,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitEmptyStatement(node : lib3.EmptyStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitAssertStatement(node : lib3.AssertStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitLabeledStatement(node : lib3.LabeledStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitBreakStatement(node : lib3.BreakStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitWhileStatement(node : lib3.WhileStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitDoStatement(node : lib3.DoStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitForStatement(node : lib3.ForStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitForInStatement(node : lib3.ForInStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitSwitchStatement(node : lib3.SwitchStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitContinueSwitchStatement(node : lib3.ContinueSwitchStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitIfStatement(node : lib3.IfStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitReturnStatement(node : lib3.ReturnStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitTryCatch(node : lib3.TryCatch,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitTryFinally(node : lib3.TryFinally,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitYieldStatement(node : lib3.YieldStatement,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitVariableDeclaration(node : lib3.VariableDeclaration,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    visitFunctionDeclaration(node : lib3.FunctionDeclaration,arg : T) : R {
        return this.defaultStatement(node,arg);
    }
    constructor() {
    }
    @defaultConstructor
    StatementVisitor1() {
    }
}

export namespace Visitor {
    export type Constructors = TreeVisitor.Constructors | 'Visitor';
    export type Interface<R> = Omit<Visitor<R>, Constructors>;
}
@DartClass
@Implements(DartTypeVisitor,MemberReferenceVisitor)
export class Visitor<R> extends TreeVisitor<R> implements DartTypeVisitor.Interface<R>,MemberReferenceVisitor.Interface<R> {
    defaultNode(node : lib3.Node) : R {
        return null;
    }
    defaultTreeNode(node : lib3.TreeNode) : R {
        return this.defaultNode(node);
    }
    defaultDartType(node : lib3.DartType) : R {
        return this.defaultNode(node);
    }
    visitInvalidType(node : lib3.InvalidType) : R {
        return this.defaultDartType(node);
    }
    visitDynamicType(node : lib3.DynamicType) : R {
        return this.defaultDartType(node);
    }
    visitVoidType(node : lib3.VoidType) : R {
        return this.defaultDartType(node);
    }
    visitBottomType(node : lib3.BottomType) : R {
        return this.defaultDartType(node);
    }
    visitInterfaceType(node : lib3.InterfaceType) : R {
        return this.defaultDartType(node);
    }
    visitVectorType(node : lib3.VectorType) : R {
        return this.defaultDartType(node);
    }
    visitFunctionType(node : lib3.FunctionType) : R {
        return this.defaultDartType(node);
    }
    visitTypeParameterType(node : lib3.TypeParameterType) : R {
        return this.defaultDartType(node);
    }
    visitTypedefType(node : lib3.TypedefType) : R {
        return this.defaultDartType(node);
    }
    visitClassReference(node : lib3.Class) : R {
        return null;
    }
    visitTypedefReference(node : lib3.Typedef) : R {
        return null;
    }
    defaultMemberReference(node : lib3.Member) : R {
        return null;
    }
    visitFieldReference(node : lib3.Field) : R {
        return this.defaultMemberReference(node);
    }
    visitConstructorReference(node : lib3.Constructor) : R {
        return this.defaultMemberReference(node);
    }
    visitProcedureReference(node : lib3.Procedure) : R {
        return this.defaultMemberReference(node);
    }
    visitName(node : lib3.Name) : R {
        return this.defaultNode(node);
    }
    visitSupertype(node : lib3.Supertype) : R {
        return this.defaultNode(node);
    }
    visitNamedType(node : lib3.NamedType) : R {
        return this.defaultNode(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Visitor() {
    }
}

export namespace Transformer {
    export type Constructors = TreeVisitor.Constructors | 'Transformer';
    export type Interface = Omit<Transformer, Constructors>;
}
@DartClass
export class Transformer extends TreeVisitor<lib3.TreeNode> {
    visitDartType(node : lib3.DartType) : lib3.DartType {
        return node;
    }
    visitSupertype(node : lib3.Supertype) : lib3.Supertype {
        return node;
    }
    defaultTreeNode(node : lib3.TreeNode) : lib3.TreeNode {
        node.transformChildren(this);
        return node;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Transformer() {
    }
}

export namespace RecursiveVisitor {
    export type Constructors = Visitor.Constructors | 'RecursiveVisitor';
    export type Interface<R> = Omit<RecursiveVisitor<R>, Constructors>;
}
@DartClass
export class RecursiveVisitor<R> extends Visitor<R> {
    defaultNode(node : lib3.Node) : R {
        node.visitChildren(this);
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RecursiveVisitor() {
    }
}

export class properties {
}
