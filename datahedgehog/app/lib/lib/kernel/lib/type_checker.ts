/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/type_checker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./core_types";
import * as lib4 from "./class_hierarchy";
import * as lib5 from "./type_environment";
import * as lib6 from "./ast";
import * as lib7 from "./type_algebra";
import * as lib8 from "./visitor";

export namespace TypeChecker {
    export type Constructors = 'TypeChecker';
    export type Interface = Omit<TypeChecker, Constructors>;
}
@DartClass
export class TypeChecker {
    coreTypes : lib3.CoreTypes;

    hierarchy : lib4.ClassHierarchy;

    environment : lib5.TypeEnvironment;

    constructor(coreTypes : lib3.CoreTypes,hierarchy : lib4.ClassHierarchy) {
    }
    @defaultConstructor
    TypeChecker(coreTypes : lib3.CoreTypes,hierarchy : lib4.ClassHierarchy) {
        this.coreTypes = coreTypes;
        this.hierarchy = hierarchy;
        this.environment = new lib5.TypeEnvironment(this.coreTypes,this.hierarchy);
    }
    checkProgram(program : lib6.Program) : void {
        for(let library of program.libraries) {
            if (library.importUri.scheme == 'dart') continue;
            for(let class_ of library.classes) {
                this.hierarchy.forEachOverridePair(class_,(ownMember : lib6.Member,superMember : lib6.Member,isSetter : boolean) =>  {
                    this.checkOverride(class_,ownMember,superMember,isSetter);
                });
            }
        }
        let visitor = new TypeCheckingVisitor(this,this.environment);
        for(let library of program.libraries) {
            if (library.importUri.scheme == 'dart') continue;
            for(let class_ of library.classes) {
                this.environment.thisType = class_.thisType;
                for(let field of class_.fields) {
                    visitor.visitField(field);
                }
                for(let constructor of class_.constructors) {
                    visitor.visitConstructor(constructor);
                }
                for(let procedure of class_.procedures) {
                    visitor.visitProcedure(procedure);
                }
            }
            this.environment.thisType = null;
            for(let procedure of library.procedures) {
                visitor.visitProcedure(procedure);
            }
            for(let field of library.fields) {
                visitor.visitField(field);
            }
        }
    }
    getterType(host : lib6.Class,member : lib6.Member) : lib6.DartType {
        let hostType = this.hierarchy.getClassAsInstanceOf(host,member.enclosingClass);
        let substitution = lib7.Substitution.fromSupertype(hostType);
        return substitution.substituteType(member.getterType);
    }
    setterType(host : lib6.Class,member : lib6.Member) : lib6.DartType {
        let hostType = this.hierarchy.getClassAsInstanceOf(host,member.enclosingClass);
        let substitution = lib7.Substitution.fromSupertype(hostType);
        return substitution.substituteType(member.setterType,{
            contravariant : true});
    }
    checkOverride(host : lib6.Class,ownMember : lib6.Member,superMember : lib6.Member,isSetter : boolean) : void {
        if (isSetter) {
            this.checkAssignable(ownMember,this.setterType(host,superMember),this.setterType(host,ownMember));
        }else {
            this.checkAssignable(ownMember,this.getterType(host,ownMember),this.getterType(host,superMember));
        }
    }
    @Abstract
    checkAssignable(where : lib6.TreeNode,from : lib6.DartType,to : lib6.DartType) : void{ throw 'abstract'}
    checkAndDowncastExpression(expression : lib6.Expression,from : lib6.DartType,to : lib6.DartType) : lib6.Expression {
        this.checkAssignable(expression,from,to);
        return expression;
    }
    @Abstract
    fail(where : lib6.TreeNode,message : string) : void{ throw 'abstract'}
}

export namespace TypeCheckingVisitor {
    export type Constructors = 'TypeCheckingVisitor';
    export type Interface = Omit<TypeCheckingVisitor, Constructors>;
}
@DartClass
@Implements(lib8.ExpressionVisitor,lib8.StatementVisitor,lib8.MemberVisitor,lib8.InitializerVisitor)
export class TypeCheckingVisitor implements lib8.ExpressionVisitor.Interface<lib6.DartType>,lib8.StatementVisitor.Interface<core.Null>,lib8.MemberVisitor.Interface<core.Null>,lib8.InitializerVisitor.Interface<core.Null> {
    checker : TypeChecker;

    environment : lib5.TypeEnvironment;

    get coreTypes() : lib3.CoreTypes {
        return this.environment.coreTypes;
    }
    get hierarchy() : lib4.ClassHierarchy {
        return this.environment.hierarchy;
    }
    get currentClass() : lib6.Class {
        return this.environment.thisType.classNode;
    }
    constructor(checker : TypeChecker,environment : lib5.TypeEnvironment) {
    }
    @defaultConstructor
    TypeCheckingVisitor(checker : TypeChecker,environment : lib5.TypeEnvironment) {
        this.checker = checker;
        this.environment = environment;
    }
    checkAssignable(where : lib6.TreeNode,from : lib6.DartType,to : lib6.DartType) : void {
        this.checker.checkAssignable(where,from,to);
    }
    checkAndDowncastExpression(from : lib6.Expression,to : lib6.DartType) : lib6.Expression {
        let parent = from.parent;
        let type = this.visitExpression(from);
        let result = this.checker.checkAndDowncastExpression(from,type,to);
        result.parent = parent;
        return result;
    }
    checkExpressionNoDowncast(expression : lib6.Expression,to : lib6.DartType) : void {
        this.checkAssignable(expression,this.visitExpression(expression),to);
    }
    fail(node : lib6.TreeNode,message : string) : void {
        this.checker.fail(node,message);
    }
    visitExpression(node : lib6.Expression) : lib6.DartType {
        return node.accept(this);
    }
    visitStatement(node : lib6.Statement) : void {
        node.accept(this);
    }
    visitInitializer(node : lib6.Initializer) : void {
        node.accept(this);
    }
    defaultMember(node : lib6.Member) {
        return throw 'Unused';
    }
    defaultBasicLiteral(node : lib6.BasicLiteral) : lib6.DartType {
        return this.defaultExpression(node);
    }
    defaultExpression(node : lib6.Expression) : lib6.DartType {
        throw `Unexpected expression ${node.runtimeType}`;
    }
    defaultStatement(node : lib6.Statement) {
        throw `Unexpected statement ${node.runtimeType}`;
    }
    defaultInitializer(node : lib6.Initializer) {
        throw `Unexpected initializer ${node.runtimeType}`;
    }
    visitField(node : lib6.Field) {
        if (node.initializer != null) {
            node.initializer = this.checkAndDowncastExpression(node.initializer,node.type);
        }
    }
    visitConstructor(node : lib6.Constructor) {
        this.environment.returnType = null;
        this.environment.yieldType = null;
        node.initializers.forEach(this.visitInitializer.bind(this));
        this.handleFunctionNode(node.function);
    }
    visitProcedure(node : lib6.Procedure) {
        this.environment.returnType = this._getInternalReturnType(node.function);
        this.environment.yieldType = this._getYieldType(node.function);
        this.handleFunctionNode(node.function);
    }
    handleFunctionNode(node : lib6.FunctionNode) : void {
        let oldAsyncMarker = this.environment.currentAsyncMarker;
        this.environment.currentAsyncMarker = node.asyncMarker;
        node.positionalParameters.skip(node.requiredParameterCount).forEach(this.handleOptionalParameter.bind(this));
        node.namedParameters.forEach(this.handleOptionalParameter.bind(this));
        if (node.body != null) {
            this.visitStatement(node.body);
        }
        this.environment.currentAsyncMarker = oldAsyncMarker;
    }
    handleNestedFunctionNode(node : lib6.FunctionNode) : void {
        let oldReturn = this.environment.returnType;
        let oldYield = this.environment.yieldType;
        this.environment.returnType = this._getInternalReturnType(node);
        this.environment.yieldType = this._getYieldType(node);
        this.handleFunctionNode(node);
        this.environment.returnType = oldReturn;
        this.environment.yieldType = oldYield;
    }
    handleOptionalParameter(parameter : lib6.VariableDeclaration) : void {
        if (parameter.initializer != null) {
            this.checkExpressionNoDowncast(parameter.initializer,parameter.type);
        }
    }
    getReceiverType(access : lib6.TreeNode,receiver : lib6.Expression,member : lib6.Member) : lib7.Substitution {
        let type = this.visitExpression(receiver);
        let superclass : lib6.Class = member.enclosingClass;
        if (op(Op.EQUALS,superclass.supertype,null)) {
            return lib7.Substitution.empty;
        }
        while (is(type, lib6.TypeParameterType)){
            type = (type as lib6.TypeParameterType).parameter.bound;
        }
        if (is(type, lib6.BottomType)) {
            return lib7.Substitution.bottomForClass(superclass);
        }
        if (is(type, lib6.InterfaceType)) {
            let upcastType = this.hierarchy.getTypeAsInstanceOf(type,superclass);
            if (upcastType != null) {
                return lib7.Substitution.fromInterfaceType(upcastType);
            }
        }
        if (is(type, lib6.FunctionType) && op(Op.EQUALS,superclass,this.coreTypes.functionClass)) {
            /* TODO (AssertStatementImpl) : assert (type.typeParameters.isEmpty); */;
            return lib7.Substitution.empty;
        }
        this.fail(access,`${member} is not accessible on a receiver of type ${type}`);
        return lib7.Substitution.bottomForClass(superclass);
    }
    getSuperReceiverType(member : lib6.Member) : lib7.Substitution {
        return lib7.Substitution.fromSupertype(this.hierarchy.getClassAsInstanceOf(this.currentClass,member.enclosingClass));
    }
    handleCall(arguments : lib6.Arguments,function : lib6.FunctionNode,_namedArguments? : {receiver? : lib7.Substitution,typeParameters? : core.DartList<lib6.TypeParameter>}) : lib6.DartType {
        let {receiver,typeParameters} = Object.assign({
            "receiver" : lib7.Substitution.empty}, _namedArguments );
        typeParameters = ( typeParameters ) || ( function.typeParameters );
        if (arguments.positional.length < function.requiredParameterCount) {
            this.fail(arguments,'Too few positional arguments');
            return new lib6.BottomType();
        }
        if (arguments.positional.length > function.positionalParameters.length) {
            this.fail(arguments,'Too many positional arguments');
            return new lib6.BottomType();
        }
        if (arguments.types.length != typeParameters.length) {
            this.fail(arguments,'Wrong number of type arguments');
            return new lib6.BottomType();
        }
        let instantiation = lib7.Substitution.fromPairs(typeParameters,arguments.types);
        let substitution = lib7.Substitution.combine(receiver,instantiation);
        for(let i : number = 0; i < typeParameters.length; ++i){
            let argument = arguments.types[i];
            let bound = substitution.substituteType(typeParameters[i].bound);
            this.checkAssignable(arguments,argument,bound);
        }
        for(let i : number = 0; i < arguments.positional.length; ++i){
            let expectedType = substitution.substituteType(function.positionalParameters[i].type,{
                contravariant : true});
            arguments.positional[i] = this.checkAndDowncastExpression(arguments.positional[i],expectedType);
        }
        for(let i : number = 0; i < arguments.named.length; ++i){
            let argument = arguments.named[i];
            let found : boolean = false;
            for(let j : number = 0; j < function.namedParameters.length; ++j){
                if (argument.name == function.namedParameters[j].name) {
                    let expectedType = substitution.substituteType(function.namedParameters[j].type,{
                        contravariant : true});
                    argument.value = this.checkAndDowncastExpression(argument.value,expectedType);
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.fail(argument.value,`Unexpected named parameter: ${argument.name}`);
                return new lib6.BottomType();
            }
        }
        return substitution.substituteType(function.returnType);
    }
    _getInternalReturnType(function : lib6.FunctionNode) : lib6.DartType {
        switch (function.asyncMarker) {
            case lib6.AsyncMarker.Sync:
                return function.returnType;
            case lib6.AsyncMarker.Async:
                let container : lib6.Class = this.coreTypes.futureClass;
                let returnType : lib6.DartType = function.returnType;
                if (is(returnType, lib6.InterfaceType) && op(Op.EQUALS,returnType.classNode,container)) {
                    return returnType.typeArguments.single;
                }
                return new lib6.DynamicType();
            case lib6.AsyncMarker.SyncStar:
            case lib6.AsyncMarker.AsyncStar:
            case lib6.AsyncMarker.SyncYielding:
                return null;
            default:
                throw `Unexpected async marker: ${function.asyncMarker}`;
        }
    }
    _getYieldType(function : lib6.FunctionNode) : lib6.DartType {
        switch (function.asyncMarker) {
            case lib6.AsyncMarker.Sync:
            case lib6.AsyncMarker.Async:
                return null;
            case lib6.AsyncMarker.SyncStar:
            case lib6.AsyncMarker.AsyncStar:
                let container : lib6.Class = op(Op.EQUALS,function.asyncMarker,lib6.AsyncMarker.SyncStar) ? this.coreTypes.iterableClass : this.coreTypes.streamClass;
                let returnType : lib6.DartType = function.returnType;
                if (is(returnType, lib6.InterfaceType) && op(Op.EQUALS,returnType.classNode,container)) {
                    return returnType.typeArguments.single;
                }
                return new lib6.DynamicType();
            case lib6.AsyncMarker.SyncYielding:
                return function.returnType;
            default:
                throw `Unexpected async marker: ${function.asyncMarker}`;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : lib6.AsExpression) : lib6.DartType {
        this.visitExpression(node.operand);
        return node.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : lib6.AwaitExpression) : lib6.DartType {
        return this.environment.unfutureType(this.visitExpression(node.operand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBoolLiteral(node : lib6.BoolLiteral) : lib6.DartType {
        return this.environment.boolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : lib6.ConditionalExpression) : lib6.DartType {
        node.condition = this.checkAndDowncastExpression(node.condition,this.environment.boolType);
        node.then = this.checkAndDowncastExpression(node.then,node.staticType);
        node.otherwise = this.checkAndDowncastExpression(node.otherwise,node.staticType);
        return node.staticType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInvocation(node : lib6.ConstructorInvocation) : lib6.DartType {
        let target : lib6.Constructor = node.target;
        let arguments : lib6.Arguments = node.arguments;
        let class_ : lib6.Class = target.enclosingClass;
        this.handleCall(arguments,target.function,{
            typeParameters : class_.typeParameters});
        return new lib6.InterfaceType(target.enclosingClass,arguments.types);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectMethodInvocation(node : lib6.DirectMethodInvocation) : lib6.DartType {
        return this.handleCall(node.arguments,node.target.function,{
            receiver : this.getReceiverType(node,node.receiver,node.target)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertyGet(node : lib6.DirectPropertyGet) : lib6.DartType {
        let receiver = this.getReceiverType(node,node.receiver,node.target);
        return receiver.substituteType(node.target.getterType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertySet(node : lib6.DirectPropertySet) : lib6.DartType {
        let receiver = this.getReceiverType(node,node.receiver,node.target);
        let value = this.visitExpression(node.value);
        this.checkAssignable(node,value,receiver.substituteType(node.target.setterType,{
            contravariant : true}));
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : lib6.DoubleLiteral) : lib6.DartType {
        return this.environment.doubleType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : lib6.FunctionExpression) : lib6.DartType {
        this.handleNestedFunctionNode(node.function);
        return node.function.functionType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntLiteral(node : lib6.IntLiteral) : lib6.DartType {
        return this.environment.intType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInvalidExpression(node : lib6.InvalidExpression) : lib6.DartType {
        return new lib6.BottomType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : lib6.IsExpression) : lib6.DartType {
        this.visitExpression(node.operand);
        return this.environment.boolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLet(node : lib6.Let) : lib6.DartType {
        let value = this.visitExpression(node.variable.initializer);
        if (is(node.variable.type, lib6.DynamicType)) {
            node.variable.type = value;
        }
        return this.visitExpression(node.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : lib6.ListLiteral) : lib6.DartType {
        for(let i : number = 0; i < node.expressions.length; ++i){
            node.expressions[i] = this.checkAndDowncastExpression(node.expressions[i],node.typeArgument);
        }
        return this.environment.literalListType(node.typeArgument);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLogicalExpression(node : lib6.LogicalExpression) : lib6.DartType {
        node.left = this.checkAndDowncastExpression(node.left,this.environment.boolType);
        node.right = this.checkAndDowncastExpression(node.right,this.environment.boolType);
        return this.environment.boolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : lib6.MapLiteral) : lib6.DartType {
        for(let entry of node.entries) {
            entry.key = this.checkAndDowncastExpression(entry.key,node.keyType);
            entry.value = this.checkAndDowncastExpression(entry.value,node.valueType);
        }
        return this.environment.literalMapType(node.keyType,node.valueType);
    }
    handleDynamicCall(receiver : lib6.DartType,arguments : lib6.Arguments) : lib6.DartType {
        arguments.positional.forEach(this.visitExpression.bind(this));
        arguments.named.forEach((n : lib6.NamedExpression) =>  {
            return this.visitExpression(n.value);
        });
        return new lib6.DynamicType();
    }
    handleFunctionCall(access : lib6.TreeNode,function : lib6.FunctionType,arguments : lib6.Arguments) : lib6.DartType {
        if (function.requiredParameterCount > arguments.positional.length) {
            this.fail(access,'Too few positional arguments');
            return new lib6.BottomType();
        }
        if (function.positionalParameters.length < arguments.positional.length) {
            this.fail(access,'Too many positional arguments');
            return new lib6.BottomType();
        }
        if (function.typeParameters.length != arguments.types.length) {
            this.fail(access,'Wrong number of type arguments');
            return new lib6.BottomType();
        }
        let instantiation = lib7.Substitution.fromPairs(function.typeParameters,arguments.types);
        for(let i : number = 0; i < arguments.positional.length; ++i){
            let expectedType = instantiation.substituteType(function.positionalParameters[i],{
                contravariant : true});
            arguments.positional[i] = this.checkAndDowncastExpression(arguments.positional[i],expectedType);
        }
        for(let i : number = 0; i < arguments.named.length; ++i){
            let argument = arguments.named[i];
            let parameterType = function.getNamedParameter(argument.name);
            if (parameterType != null) {
                let expectedType = instantiation.substituteType(parameterType,{
                    contravariant : true});
                argument.value = this.checkAndDowncastExpression(argument.value,expectedType);
            }else {
                this.fail(argument.value,`Unexpected named parameter: ${argument.name}`);
                return new lib6.BottomType();
            }
        }
        return instantiation.substituteType(function.returnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : lib6.MethodInvocation) : lib6.DartType {
        let target = node.interfaceTarget;
        if (op(Op.EQUALS,target,null)) {
            let receiver = this.visitExpression(node.receiver);
            if (node.name.name == '==') {
                this.visitExpression(node.arguments.positional.single);
                return this.environment.boolType;
            }
            if (node.name.name == 'call' && is(receiver, lib6.FunctionType)) {
                return this.handleFunctionCall(node,receiver,node.arguments);
            }
            return this.handleDynamicCall(receiver,node.arguments);
        }else if (this.environment.isOverloadedArithmeticOperator(target)) {
            /* TODO (AssertStatementImpl) : assert (node.arguments.positional.length == 1); */;
            let receiver = this.visitExpression(node.receiver);
            let argument = this.visitExpression(node.arguments.positional[0]);
            return this.environment.getTypeOfOverloadedArithmetic(receiver,argument);
        }else {
            return this.handleCall(node.arguments,target.function,{
                receiver : this.getReceiverType(node,node.receiver,node.interfaceTarget)});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyGet(node : lib6.PropertyGet) : lib6.DartType {
        if (op(Op.EQUALS,node.interfaceTarget,null)) {
            this.visitExpression(node.receiver);
            return new lib6.DynamicType();
        }else {
            let receiver = this.getReceiverType(node,node.receiver,node.interfaceTarget);
            return receiver.substituteType(node.interfaceTarget.getterType);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertySet(node : lib6.PropertySet) : lib6.DartType {
        let value = this.visitExpression(node.value);
        if (node.interfaceTarget != null) {
            let receiver = this.getReceiverType(node,node.receiver,node.interfaceTarget);
            this.checkAssignable(node.value,value,receiver.substituteType(node.interfaceTarget.setterType,{
                contravariant : true}));
        }else {
            this.visitExpression(node.receiver);
        }
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNot(node : lib6.Not) : lib6.DartType {
        this.visitExpression(node.operand);
        return this.environment.boolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : lib6.NullLiteral) : lib6.DartType {
        return new lib6.BottomType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrow(node : lib6.Rethrow) : lib6.DartType {
        return new lib6.BottomType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticGet(node : lib6.StaticGet) : lib6.DartType {
        return node.target.getterType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticInvocation(node : lib6.StaticInvocation) : lib6.DartType {
        return this.handleCall(node.arguments,node.target.function);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticSet(node : lib6.StaticSet) : lib6.DartType {
        let value = this.visitExpression(node.value);
        this.checkAssignable(node.value,value,node.target.setterType);
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringConcatenation(node : lib6.StringConcatenation) : lib6.DartType {
        node.expressions.forEach(this.visitExpression.bind(this));
        return this.environment.stringType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringLiteral(node : lib6.StringLiteral) : lib6.DartType {
        return this.environment.stringType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperMethodInvocation(node : lib6.SuperMethodInvocation) : lib6.DartType {
        if (op(Op.EQUALS,node.interfaceTarget,null)) {
            return this.handleDynamicCall(this.environment.thisType,node.arguments);
        }else {
            return this.handleCall(node.arguments,node.interfaceTarget.function,{
                receiver : this.getSuperReceiverType(node.interfaceTarget)});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperPropertyGet(node : lib6.SuperPropertyGet) : lib6.DartType {
        if (op(Op.EQUALS,node.interfaceTarget,null)) {
            return new lib6.DynamicType();
        }else {
            let receiver = this.getSuperReceiverType(node.interfaceTarget);
            return receiver.substituteType(node.interfaceTarget.getterType);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperPropertySet(node : lib6.SuperPropertySet) : lib6.DartType {
        let value = this.visitExpression(node.value);
        if (node.interfaceTarget != null) {
            let receiver = this.getSuperReceiverType(node.interfaceTarget);
            this.checkAssignable(node.value,value,receiver.substituteType(node.interfaceTarget.setterType,{
                contravariant : true}));
        }
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : lib6.SymbolLiteral) : lib6.DartType {
        return this.environment.symbolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : lib6.ThisExpression) : lib6.DartType {
        return this.environment.thisType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrow(node : lib6.Throw) : lib6.DartType {
        this.visitExpression(node.expression);
        return new lib6.BottomType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeLiteral(node : lib6.TypeLiteral) : lib6.DartType {
        return this.environment.typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableGet(node : lib6.VariableGet) : lib6.DartType {
        return (node.promotedType || node.variable.type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableSet(node : lib6.VariableSet) : lib6.DartType {
        let value = this.visitExpression(node.value);
        this.checkAssignable(node.value,value,node.variable.type);
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLoadLibrary(node : lib6.LoadLibrary) : lib6.DartType {
        return this.environment.futureType(new lib6.DynamicType());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCheckLibraryIsLoaded(node : lib6.CheckLibraryIsLoaded) : lib6.DartType {
        return this.environment.objectType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVectorCreation(node : lib6.VectorCreation) : lib6.DartType {
        return new lib6.VectorType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVectorGet(node : lib6.VectorGet) : lib6.DartType {
        let type = this.visitExpression(node.vectorExpression);
        if (isNot(type, lib6.VectorType)) {
            this.fail(node.vectorExpression,'The type of vector-expression in vector-get node is expected to be ' + `VectorType, but ${type} found`);
        }
        return new lib6.DynamicType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVectorSet(node : lib6.VectorSet) {
        let type = this.visitExpression(node.vectorExpression);
        if (isNot(type, lib6.VectorType)) {
            this.fail(node.vectorExpression,'The type of vector-expression in vector-set node is expected to be ' + `VectorType, but ${type} found`);
        }
        return this.visitExpression(node.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVectorCopy(node : lib6.VectorCopy) {
        let type = this.visitExpression(node.vectorExpression);
        if (isNot(type, lib6.VectorType)) {
            this.fail(node.vectorExpression,'The type of vector-expression in vector-copy node is exected to be ' + `VectorType, but ${type} found`);
        }
        return new lib6.VectorType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClosureCreation(node : lib6.ClosureCreation) {
        let contextType = this.visitExpression(node.contextVector);
        if (isNot(contextType, lib6.VectorType)) {
            this.fail(node.contextVector,"The second child of 'ClosureConversion' node is supposed to be a " + `Vector, but ${contextType} found.`);
        }
        return node.functionType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : lib6.AssertStatement) {
        this.visitExpression(node.condition);
        if (node.message != null) {
            this.visitExpression(node.message);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : lib6.Block) {
        node.statements.forEach(this.visitStatement.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : lib6.BreakStatement) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueSwitchStatement(node : lib6.ContinueSwitchStatement) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : lib6.DoStatement) {
        this.visitStatement(node.body);
        node.condition = this.checkAndDowncastExpression(node.condition,this.environment.boolType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : lib6.EmptyStatement) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : lib6.ExpressionStatement) {
        this.visitExpression(node.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForInStatement(node : lib6.ForInStatement) {
        let iterable = this.visitExpression(node.iterable);
        if (node.isAsync) {
            this.checkAssignable(node,this.getStreamElementType(iterable),node.variable.type);
        }else {
            this.checkAssignable(node,this.getIterableElementType(iterable),node.variable.type);
        }
        this.visitStatement(node.body);
    }
    private static __$iteratorName : lib6.Name;
    static get iteratorName() : lib6.Name { 
        if (this.__$iteratorName===undefined) {
            this.__$iteratorName = new lib6.Name('iterator');
        }
        return this.__$iteratorName;
    }
    static set iteratorName(__$value : lib6.Name)  { 
        this.__$iteratorName = __$value;
    }

    private static __$currentName : lib6.Name;
    static get currentName() : lib6.Name { 
        if (this.__$currentName===undefined) {
            this.__$currentName = new lib6.Name('current');
        }
        return this.__$currentName;
    }
    static set currentName(__$value : lib6.Name)  { 
        this.__$currentName = __$value;
    }

    getIterableElementType(iterable : lib6.DartType) : lib6.DartType {
        if (is(iterable, lib6.InterfaceType)) {
            let iteratorGetter = this.hierarchy.getInterfaceMember(iterable.classNode,TypeCheckingVisitor.iteratorName);
            if (op(Op.EQUALS,iteratorGetter,null)) return new lib6.DynamicType();
            let castedIterable = this.hierarchy.getTypeAsInstanceOf(iterable,iteratorGetter.enclosingClass);
            let iteratorType = lib7.Substitution.fromInterfaceType(castedIterable).substituteType(iteratorGetter.getterType);
            if (is(iteratorType, lib6.InterfaceType)) {
                let currentGetter = this.hierarchy.getInterfaceMember(iteratorType.classNode,TypeCheckingVisitor.currentName);
                if (op(Op.EQUALS,currentGetter,null)) return new lib6.DynamicType();
                let castedIteratorType = this.hierarchy.getTypeAsInstanceOf(iteratorType,currentGetter.enclosingClass);
                return lib7.Substitution.fromInterfaceType(castedIteratorType).substituteType(currentGetter.getterType);
            }
        }
        return new lib6.DynamicType();
    }
    getStreamElementType(stream : lib6.DartType) : lib6.DartType {
        if (is(stream, lib6.InterfaceType)) {
            let asStream = this.hierarchy.getTypeAsInstanceOf(stream,this.coreTypes.streamClass);
            if (op(Op.EQUALS,asStream,null)) return new lib6.DynamicType();
            return asStream.typeArguments.single;
        }
        return new lib6.DynamicType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : lib6.ForStatement) {
        node.variables.forEach(this.visitVariableDeclaration.bind(this));
        if (node.condition != null) {
            node.condition = this.checkAndDowncastExpression(node.condition,this.environment.boolType);
        }
        node.updates.forEach(this.visitExpression.bind(this));
        this.visitStatement(node.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : lib6.FunctionDeclaration) {
        this.handleNestedFunctionNode(node.function);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : lib6.IfStatement) {
        node.condition = this.checkAndDowncastExpression(node.condition,this.environment.boolType);
        this.visitStatement(node.then);
        if (node.otherwise != null) {
            this.visitStatement(node.otherwise);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInvalidStatement(node : lib6.InvalidStatement) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : lib6.LabeledStatement) {
        this.visitStatement(node.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : lib6.ReturnStatement) {
        if (node.expression != null) {
            if (op(Op.EQUALS,this.environment.returnType,null)) {
                this.fail(node,'Return of a value from void method');
            }else {
                let type = this.visitExpression(node.expression);
                if (op(Op.EQUALS,this.environment.currentAsyncMarker,lib6.AsyncMarker.Async)) {
                    type = this.environment.unfutureType(type);
                }
                this.checkAssignable(node.expression,type,this.environment.returnType);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : lib6.SwitchStatement) {
        this.visitExpression(node.expression);
        for(let switchCase of node.cases) {
            switchCase.expressions.forEach(this.visitExpression.bind(this));
            this.visitStatement(switchCase.body);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryCatch(node : lib6.TryCatch) {
        this.visitStatement(node.body);
        for(let catchClause of node.catches) {
            this.visitStatement(catchClause.body);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryFinally(node : lib6.TryFinally) {
        this.visitStatement(node.body);
        this.visitStatement(node.finalizer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : lib6.VariableDeclaration) {
        if (node.initializer != null) {
            node.initializer = this.checkAndDowncastExpression(node.initializer,node.type);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : lib6.WhileStatement) {
        node.condition = this.checkAndDowncastExpression(node.condition,this.environment.boolType);
        this.visitStatement(node.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : lib6.YieldStatement) {
        if (node.isYieldStar) {
            let container : lib6.Class = op(Op.EQUALS,this.environment.currentAsyncMarker,lib6.AsyncMarker.AsyncStar) ? this.coreTypes.streamClass : this.coreTypes.iterableClass;
            let type = this.visitExpression(node.expression);
            let asContainer = is(type, lib6.InterfaceType) ? this.hierarchy.getTypeAsInstanceOf(type,container) : null;
            if (asContainer != null) {
                this.checkAssignable(node.expression,asContainer.typeArguments[0],this.environment.yieldType);
            }else {
                this.fail(node.expression,`${type} is not an instance of ${container}`);
            }
        }else {
            node.expression = this.checkAndDowncastExpression(node.expression,this.environment.yieldType);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldInitializer(node : lib6.FieldInitializer) {
        node.value = this.checkAndDowncastExpression(node.value,node.field.type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingInitializer(node : lib6.RedirectingInitializer) {
        this.handleCall(node.arguments,node.target.function,{
            typeParameters : new core.DartList.literal<lib6.TypeParameter>()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperInitializer(node : lib6.SuperInitializer) {
        this.handleCall(node.arguments,node.target.function,{
            typeParameters : new core.DartList.literal<lib6.TypeParameter>(),receiver : this.getSuperReceiverType(node.target)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLocalInitializer(node : lib6.LocalInitializer) {
        this.visitVariableDeclaration(node.variable);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInvalidInitializer(node : lib6.InvalidInitializer) {
    }
}

export class properties {
}
