/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/reify/transformation/transformer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "./binding";
import * as lib5 from "./builder";
import * as lib6 from "./../analysis/program_analysis";
import * as lib7 from "./../asts";

export enum RuntimeTypeStorage {
    none,
    inheritedField,
    field,
    getter
}

export namespace TransformationContext {
    export type Constructors = 'TransformationContext';
    export type Interface = Omit<TransformationContext, Constructors>;
}
@DartClass
export class TransformationContext {
    runtimeTypeStorage : RuntimeTypeStorage;

    runtimeTypeField : any;

    parameter : any;

    initializers : core.DartLinkedHashMap<any,any>;

    inInitializer : boolean;

    toString() : string {
        return `s: ${this.runtimeTypeStorage} f: ${this.runtimeTypeField},` + ` p: ${this.parameter}, i: ${this.inInitializer}`;
    }
    constructor() {
    }
    @defaultConstructor
    TransformationContext() {
        this.inInitializer = false;
    }
}

export namespace DebugTrace {
    export type Constructors = 'DebugTrace';
    export type Interface = Omit<DebugTrace, Constructors>;
}
@DartClass
export class DebugTrace {
    private static __$debugTrace : boolean;
    static get debugTrace() : boolean { 
        if (this.__$debugTrace===undefined) {
            this.__$debugTrace = false;
        }
        return this.__$debugTrace;
    }

    private static __$lineLength : number;
    static get lineLength() : number { 
        if (this.__$lineLength===undefined) {
            this.__$lineLength = 80;
        }
        return this.__$lineLength;
    }

    @AbstractProperty
    get context() : TransformationContext{ throw 'abstract'}
    getNodeLevel(node : any) : string {
        let level : string = "";
        while (node != null && isNot(node, any)){
            level = ` ${level}`;
            node = node.parent;
        }
        return level;
    }
    shorten(s : string) : string {
        return new core.DartString(s).length > DebugTrace.lineLength ? new core.DartString(s).substring(0,DebugTrace.lineLength) : s;
    }
    trace(node : any) : void {
        if (DebugTrace.debugTrace) {
            let nodeText : string = new core.DartString(node.toString()).replaceAll("\n"," ");
            core.print(this.shorten(`trace:${this.getNodeLevel(node)}${this.context}` + ` [${node.runtimeType}] ${nodeText}`));
        }
    }
    constructor() {
    }
    @defaultConstructor
    DebugTrace() {
    }
}

export namespace ReifyVisitor {
    export type Constructors = 'ReifyVisitor';
    export type Interface = Omit<ReifyVisitor, Constructors>;
}
@DartClass
@With(DebugTrace)
export class ReifyVisitor extends any implements DebugTrace.Interface {
    @Abstract
    getNodeLevel(node : any) : string {
        throw 'from mixin';
    }
    @Abstract
    shorten(s : string) : string {
        throw 'from mixin';
    }
    @Abstract
    trace(node : any) : void {
        throw 'from mixin';
    }
    rtiLibrary : lib4.RuntimeLibrary;

    builder : lib5.RuntimeTypeSupportBuilder;

    knowledge : lib6.ProgramKnowledge;

    constructor(rtiLibrary : lib4.RuntimeLibrary,builder : lib5.RuntimeTypeSupportBuilder,knowledge : lib6.ProgramKnowledge,libraryToTransform? : any) {
    }
    @defaultConstructor
    ReifyVisitor(rtiLibrary : lib4.RuntimeLibrary,builder : lib5.RuntimeTypeSupportBuilder,knowledge : lib6.ProgramKnowledge,libraryToTransform? : any) {
        this.rtiLibrary = rtiLibrary;
        this.builder = builder;
        this.knowledge = knowledge;
        this.libraryToTransform = libraryToTransform;
    }
    libraryToTransform : any;

    context : TransformationContext;

    private static __$genericMethodTypeParametersName : string;
    static get genericMethodTypeParametersName() : string { 
        if (this.__$genericMethodTypeParametersName===undefined) {
            this.__$genericMethodTypeParametersName = "$typeParameters";
        }
        return this.__$genericMethodTypeParametersName;
    }

    libraryShouldBeTransformed(library : any) : boolean {
        return op(Op.EQUALS,this.libraryToTransform,null) || op(Op.EQUALS,this.libraryToTransform,library);
    }
    needsTypeInformation(cls : any) : boolean {
        return !this.isObject(cls) && !this.rtiLibrary.contains(cls) && this.libraryShouldBeTransformed(cls.enclosingLibrary);
    }
    usesTypeGetter(cls : any) : boolean {
        return cls.typeParameters.isEmpty;
    }
    isObject(cls : any) : boolean {
        return `${cls}` == 'dart.core::Object';
    }
    addTypeAsArgument(initializer : any) : any {
        /* TODO (AssertStatementImpl) : assert (initializer is SuperInitializer || initializer is RedirectingInitializer); */;
        let cls : any = lib7.getEnclosingClass(initializer.target);
        if (this.needsTypeInformation(cls) && !this.usesTypeGetter(cls)) {
            let type : any = (this.context.parameter != null) ? new bare.createInstance(any,null,this.context.parameter) : new bare.createInstance(any,null);
            this.builder.insertAsFirstArgument(initializer.arguments,type);
        }
        return initializer;
    }
    interceptInstantiation(invocation : any,target : any) : any {
        let targetClass : any = target.parent;
        let targetLibrary : any = targetClass.parent;
        let currentLibrary : any = lib7.getEnclosingLibrary(invocation);
        if (this.libraryShouldBeTransformed(currentLibrary) && !this.libraryShouldBeTransformed(targetLibrary) && !this.rtiLibrary.contains(target)) {
            return this.builder.attachTypeToConstructorInvocation(invocation,target);
        }
        return invocation;
    }
    createRuntimeType(type : any) : any {
        if (((t)=>(!!t)?t.inInitializer:null)(this.context) == true) {
            return this.builder.createRuntimeType(type,{
                typeContext : this.context.parameter});
        }else {
            return this.builder.createRuntimeType(type);
        }
    }
    defaultTreeNode(node : any) : any {
        this.trace(node);
        return super.defaultTreeNode(node);
    }
    visitStaticInvocation(invocation : any) : any {
        this.trace(invocation);
        invocation.transformChildren(this);
        let target : any = invocation.target;
        if (op(Op.EQUALS,target,this.rtiLibrary.reifyFunction)) {
            let literal : any = invocation.arguments.positional.single;
            return this.createRuntimeType(literal.type);
        }else if (op(Op.EQUALS,target.kind,ProcedureKind.Factory)) {
            return this.interceptInstantiation(invocation,target);
        }
        this.addTypeArgumentToGenericInvocation(invocation);
        return invocation;
    }
    visitLibrary(library : any) : any {
        this.trace(library);
        if (this.libraryShouldBeTransformed(library)) {
            library.transformChildren(this);
        }
        return library;
    }
    visitConstructorInvocation(invocation : any) : any {
        invocation.transformChildren(this);
        return this.interceptInstantiation(invocation,invocation.target);
    }
    getStaticInvocationTarget(invocation : any) : any {
        if (is(invocation, any)) {
            return invocation.target;
        }else if (is(invocation, any)) {
            return invocation.target;
        }else {
            throw `Unexpected InvocationExpression ${invocation}.`;
        }
    }
    isInstantiation(invocation : any) : boolean {
        return is(invocation, any) || is(invocation, any) && op(Op.EQUALS,invocation.target.kind,ProcedureKind.Factory);
    }
    isTypeVariable(type : any) : boolean {
        return is(type, any);
    }
    visitArguments(arguments : any) : any {
        this.trace(arguments);
        arguments.transformChildren(this);
        let parent : any = arguments.parent;
        if (this.isInstantiation(parent)) {
            let targetClass : any = lib7.getEnclosingClass(this.getStaticInvocationTarget(parent));
            if (!this.needsTypeInformation(targetClass) || this.usesTypeGetter(targetClass)) {
                return arguments;
            }
            let typeArguments : core.DartList<any> = arguments.types;
            let type : any = this.createRuntimeType(new bare.createInstance(any,null,targetClass,typeArguments));
            this.builder.insertAsFirstArgument(arguments,type);
        }
        return arguments;
    }
    visitField(field : any) : any {
        this.trace(field);
        visitDartType(field.type);
        for(let annotation of field.annotations) {
            annotation.accept(this);
        }
        return field;
    }
    rewriteFieldInitializers(cls : any) : void {
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        this.context.initializers = new core.DartLinkedHashMap<any,any>();
        let fields : core.DartList<any> = cls.fields;
        let initializerRewritten : boolean = false;
        for(let field of fields) {
            if (!initializerRewritten && this.knowledge.usedParameters(field).isEmpty) {
                continue;
            }
            let initializer : any = field.initializer;
            if (op(Op.EQUALS,initializer,null) || field.isStatic) continue;
            let typeObject : any = new bare.createInstance(any,null,"$type");
            this.context.parameter = typeObject;
            this.context.inInitializer = true;
            initializer = initializer.accept(this);
            this.context.parameter = null;
            this.context.inInitializer = false;
            let name : any = new bare.createInstance(any,null,`$init$${field.name.name}`);
            let body : any = new bare.createInstance(any,null,initializer);
            let staticInitializer : any = new bare.createInstance(any,null,name,ProcedureKind.Method,new bare.createInstance(any,null,body,{
                positionalParameters : new core.DartList.literal<any>(typeObject)}),{
                isStatic : true,fileUri : cls.fileUri});
            op(Op.INDEX_ASSIGN,this.context.initializers,field,staticInitializer);
            field.initializer = null;
        }
    }
    inheritsTypeProperty(cls : any) : boolean {
        /* TODO (AssertStatementImpl) : assert (needsTypeInformation(cls)); */;
        let superclass : any = cls.superclass;
        return this.needsTypeInformation(superclass);
    }
    visitClass(cls : any) : any {
        this.trace(cls);
        if (this.needsTypeInformation(cls)) {
            this.context = new TransformationContext();
            let typeParameters : core.DartList<any> = cls.typeParameters;
            if (this.usesTypeGetter(cls)) {
                /* TODO (AssertStatementImpl) : assert (typeParameters.isEmpty); */;
                this.context.runtimeTypeStorage = RuntimeTypeStorage.getter;
                let getter : any = this.builder.createGetter(this.rtiLibrary.runtimeTypeName,this.createRuntimeType(cls.rawType),cls,this.rtiLibrary.typeType);
                cls.addMember(getter);
            }else if (!this.inheritsTypeProperty(cls)) {
                this.context.runtimeTypeStorage = RuntimeTypeStorage.field;
                this.context.runtimeTypeField = new bare.createInstance(any,null,this.rtiLibrary.runtimeTypeName,{
                    fileUri : cls.fileUri,isFinal : true,type : this.rtiLibrary.typeType});
                cls.addMember(this.context.runtimeTypeField);
            }else {
                this.context.runtimeTypeStorage = RuntimeTypeStorage.inheritedField;
            }
            for(let i : number = 0; i < typeParameters.length; ++i){
                let variable : any = typeParameters[i];
                cls.addMember(this.builder.createTypeVariableGetter(cls,variable,i));
            }
            let interfaceTypeForSupertype : any = new bare.createInstance(any,null,this.rtiLibrary.markerClass);
            cls.implementedTypes.add(new bare.createInstance(any,null,interfaceTypeForSupertype.classNode,interfaceTypeForSupertype.typeArguments));
            this.rewriteFieldInitializers(cls);
            for(let test of this.knowledge.classTests) {
                if (op(Op.EQUALS,test,this.rtiLibrary.markerClass)) continue;
                let tag : any = this.builder.createGetter(this.builder.getTypeTestTagName(test),new bare.createInstance(any,null,this.isSuperClass(test,cls)),cls,this.builder.coreTypes.boolClass.rawType);
                cls.addMember(tag);
            }
            if (!this.usesTypeGetter(cls) && !this.inheritsTypeProperty(cls)) {
                cls.addMember(new bare.createInstance(any,null,new bare.createInstance(any,null,"runtimeType"),ProcedureKind.Getter,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null),this.context.runtimeTypeField)),{
                    returnType : this.builder.coreTypes.typeClass.rawType}),{
                    fileUri : cls.fileUri}));
            }
        }
        cls.transformChildren(this);
        if (((t)=>(!!t)?t.initializers:null)(this.context) != null) {
            this.context.initializers.forEach((_ : any,initializer : any) =>  {
                cls.addMember(initializer);
            });
        }
        this.context = null;
        return cls;
    }
    isSuperClass(a : any,b : any) : boolean {
        if (op(Op.EQUALS,b,null)) return false;
        if (op(Op.EQUALS,a,b)) return true;
        if (this.isSuperClass(a,b.superclass)) {
            return true;
        }
        let interfaceClasses : core.DartIterable<any> = b.implementedTypes.map((type : any) =>  {
            return type.classNode;
        }).where((cls : any) =>  {
            return cls != this.rtiLibrary.markerClass;
        });
        return interfaceClasses.any((declaration : any) =>  {
            return this.isSuperClass(a,declaration);
        });
    }
    isConstructorOrFactory(node : any) : boolean {
        return this.isFactory(node) || is(node, any);
    }
    isFactory(node : any) : boolean {
        return is(node, any) && op(Op.EQUALS,node.kind,ProcedureKind.Factory);
    }
    needsParameterForRuntimeType(node : any) : boolean {
        if (!this.isConstructorOrFactory(node)) return false;
        let access : RuntimeTypeStorage = this.context.runtimeTypeStorage;
        /* TODO (AssertStatementImpl) : assert (access != RuntimeTypeStorage.none); */;
        return op(Op.EQUALS,access,RuntimeTypeStorage.field) || op(Op.EQUALS,access,RuntimeTypeStorage.inheritedField);
    }
    visitFunctionNode(node : any) : any {
        this.trace(node);
        this.addTypeArgumentToGenericDeclaration(node);
        if (this.context != null && this.needsParameterForRuntimeType(node.parent)) {
            /* TODO (AssertStatementImpl) : assert (context.parameter == null); */;
            this.context.parameter = new bare.createInstance(any,null,this.rtiLibrary.runtimeTypeName.name,{
                type : this.rtiLibrary.typeType});
            this.context.parameter.parent = node;
            node.positionalParameters.insert(0,this.context.parameter);
            node.requiredParameterCount++;
        }
        node.transformChildren(this);
        return node;
    }
    visitSuperInitializer(initializer : any) : any {
        initializer.transformChildren(this);
        return this.addTypeAsArgument(initializer);
    }
    visitRedirectingInitializer(initializer : any) : any {
        initializer.transformChildren(this);
        return this.addTypeAsArgument(initializer);
    }
    visitProcedure(procedure : any) : any {
        this.trace(procedure);
        transformList(procedure.annotations,this,procedure.parent);
        ((t)=>(!!t)?t.inInitializer:null)(this.context) = this.isFactory(procedure);
        ((_699_)=>(!!_699_)?_699_.accept(this):null)(procedure.function);
        ((t)=>(!!t)?t.inInitializer:null)(this.context) = false;
        ((t)=>(!!t)?t.parameter:null)(this.context) = null;
        return procedure;
    }
    visitConstructor(constructor : any) : any {
        this.trace(constructor);
        transformList(constructor.annotations,this,constructor);
        if (constructor.function != null) {
            constructor.function = constructor.function.accept(this);
            ((t)=>(!!t)?t.parent:null)(constructor.function) = constructor;
        }
        ((t)=>(!!t)?t.inInitializer:null)(this.context) = true;
        transformList(constructor.initializers,this,constructor);
        ((t)=>(!!t)?t.inInitializer:null)(this.context) = false;
        if (this.context != null) {
            if (op(Op.EQUALS,this.context.runtimeTypeStorage,RuntimeTypeStorage.field)) {
                /* TODO (AssertStatementImpl) : assert (context.parameter != null); */;
                let initializer : any = new bare.createInstance(any,null,this.context.runtimeTypeField,new bare.createInstance(any,null,this.context.parameter));
                initializer.parent = constructor;
                constructor.initializers.insert(0,initializer);
            }
            if (this.context.initializers != null) {
                let fieldInitializers : core.DartList<any> = new core.DartList.literal<any>();
                this.context.initializers.forEach((field : any,initializer : any) =>  {
                    /* TODO (AssertStatementImpl) : assert (context.parameter != null); */;
                    let argument : any = new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,this.context.parameter)));
                    fieldInitializers.add(new bare.createInstance(any,null,field,new bare.createInstance(any,null,initializer,argument)));
                });
                constructor.initializers.insertAll(0,fieldInitializers);
            }
            this.context.parameter = null;
        }
        return constructor;
    }
    typeSupportsTagTest(type : any) : boolean {
        return this.needsTypeInformation(type.classNode);
    }
    visitIsExpression(expression : any) : any {
        this.trace(expression);
        expression.transformChildren(this);
        if (op(Op.EQUALS,lib7.getEnclosingLibrary(expression),this.rtiLibrary.interceptorsLibrary)) {
            return expression;
        }
        let target : any = expression.operand;
        let type : any = expression.type;
        if (is(type, any) && this.typeSupportsTagTest(type)) {
            /* TODO (AssertStatementImpl) : assert (knowledge.classTests.contains(type.classNode)); */;
            let checkArguments : boolean = type.typeArguments.any((type : any) =>  {
                return isNot(type, any);
            });
            let declaration : any = type.classNode;
            let typeExpression : any = new bare.createInstance(any,null,null,{
                initializer : this.createRuntimeType(type)});
            let targetValue : any = new bare.createInstance(any,null,null,{
                initializer : target});
            let markerClassTest : any = new bare.createInstance(any,null,new bare.createInstance(any,null,targetValue),this.rtiLibrary.markerClass.rawType);
            let tagCheck : any = new bare.createInstance(any,null,new bare.createInstance(any,null,targetValue),this.builder.getTypeTestTagName(declaration));
            let check : any = new bare.createInstance(any,null,markerClassTest,"&&",tagCheck);
            if (checkArguments) {
                let uninterceptedCheck : any = new bare.createInstance(any,null,typeExpression,this.builder.createIsSubtypeOf(new bare.createInstance(any,null,targetValue),new bare.createInstance(any,null,typeExpression),{
                    targetHasTypeProperty : true}));
                check = new bare.createInstance(any,null,check,"&&",uninterceptedCheck);
            }
            return new bare.createInstance(any,null,targetValue,check);
        }else {
            return this.builder.createIsSubtypeOf(target,this.createRuntimeType(type));
        }
    }
    visitListLiteral(node : any) : any {
        this.trace(node);
        node.transformChildren(this);
        return this.builder.callAttachType(node,new bare.createInstance(any,null,this.builder.coreTypes.listClass,new core.DartList.literal<any>(node.typeArgument)));
    }
    visitMapLiteral(node : any) : any {
        this.trace(node);
        node.transformChildren(this);
        return this.builder.callAttachType(node,new bare.createInstance(any,null,this.builder.coreTypes.mapClass,new core.DartList.literal<any>(node.keyType,node.valueType)));
    }
    visitMethodInvocation(node : any) : any {
        node.transformChildren(this);
        this.addTypeArgumentToGenericInvocation(node);
        return node;
    }
    isGenericMethod(node : any) : boolean {
        if (is(node.parent, any)) {
            let member : any = node.parent;
            if (is(member, any) || is(member, any) && op(Op.EQUALS,member.kind,ProcedureKind.Factory)) {
                return op(Op.LT,member.enclosingClass.typeParameters.length,node.typeParameters.length);
            }
        }
        return node.typeParameters.isNotEmpty;
    }
    addTypeArgumentToGenericInvocation(expression : any) : void {
        if (op(Op.GT,expression.arguments.types.length,0)) {
            let genericMethodTypeParameters : any = new bare.createInstance(any,null,expression.arguments.types.map(this.createRuntimeType.bind(this)).toList({
                growable : false}),{
                typeArgument : this.rtiLibrary.typeType});
            expression.arguments.named.add(((_) : any =>  {
                {
                    _.parent = expression.arguments;
                    return _;
                }
            })(new bare.createInstance(any,null,ReifyVisitor.genericMethodTypeParametersName,genericMethodTypeParameters)));
        }
    }
    addTypeArgumentToGenericDeclaration(node : any) : void {
        if (this.isGenericMethod(node)) {
            let genericMethodTypeParameters : any = new bare.createInstance(any,null,ReifyVisitor.genericMethodTypeParametersName,{
                type : new bare.createInstance(any,null,this.builder.coreTypes.listClass,new core.DartList.literal<any>(this.rtiLibrary.typeType))});
            genericMethodTypeParameters.parent = node;
            node.namedParameters.insert(0,genericMethodTypeParameters);
        }
    }
}

export class properties {
}
