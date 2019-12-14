/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/verifier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";
import * as lib4 from "./visitor";
import * as lib5 from "./transformations/flags";

export var verifyProgram : (program : lib3.Program) => void = (program : lib3.Program) : void =>  {
    VerifyingVisitor.check(program);
};
export var checkInitializers : (constructor : lib3.Constructor) => void = (constructor : lib3.Constructor) : void =>  {
};
export namespace VerificationError {
    export type Constructors = 'VerificationError';
    export type Interface = Omit<VerificationError, Constructors>;
}
@DartClass
export class VerificationError {
    context : lib3.TreeNode;

    node : lib3.TreeNode;

    details : string;

    constructor(context : lib3.TreeNode,node : lib3.TreeNode,details : string) {
    }
    @defaultConstructor
    VerificationError(context : lib3.TreeNode,node : lib3.TreeNode,details : string) {
        this.context = context;
        this.node = node;
        this.details = details;
    }
    toString() {
        let location : lib3.Location;
        try {
            location = (((t)=>(!!t)?t.location:null)(this.node) || ((t)=>(!!t)?t.location:null)(this.context));
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
        if (location != null) {
            let file : string = (location.file || "");
            return `${file}:${location.line}:${location.column}: Verification error:` + ` ${this.details}`;
        }else {
            return `Verification error: ${this.details}\n` + `Context: '${this.context}'.\n` + `Node: '${this.node}'.`;
        }
    }
}

export enum TypedefState {
    Done,
    BeingChecked
}

export namespace VerifyingVisitor {
    export type Constructors = lib4.RecursiveVisitor.Constructors | 'VerifyingVisitor';
    export type Interface = Omit<VerifyingVisitor, Constructors>;
}
@DartClass
export class VerifyingVisitor extends lib4.RecursiveVisitor<any> {
    classes : core.DartSet<lib3.Class>;

    typedefs : core.DartSet<lib3.Typedef>;

    typeParametersInScope : core.DartSet<lib3.TypeParameter>;

    variableStack : core.DartList<lib3.VariableDeclaration>;

    typedefState : core.DartMap<lib3.Typedef,TypedefState>;

    classTypeParametersAreInScope : boolean;

    isOutline : boolean;

    inCatchBlock : boolean;

    currentMember : lib3.Member;

    currentClass : lib3.Class;

    currentParent : lib3.TreeNode;

    get context() : lib3.TreeNode {
        return (this.currentMember || this.currentClass);
    }
    static check(program : lib3.Program) : void {
        program.accept(new VerifyingVisitor());
    }
    defaultTreeNode(node : lib3.TreeNode) {
        this.visitChildren(node);
    }
    problem(node : lib3.TreeNode,details : string,_namedArguments? : {context? : lib3.TreeNode}) {
        let {context} = Object.assign({
        }, _namedArguments );
        context = ( context ) || ( this.context );
        throw new VerificationError(context,node,details);
    }
    enterParent(node : lib3.TreeNode) : lib3.TreeNode {
        if (!core.identical(node.parent,this.currentParent)) {
            this.problem(node,`Incorrect parent pointer on ${node.runtimeType}:` + ` expected '${node.parent.runtimeType}',` + ` but found: '${this.currentParent.runtimeType}'.`);
        }
        let oldParent = this.currentParent;
        this.currentParent = node;
        return oldParent;
    }
    exitParent(oldParent : lib3.TreeNode) : void {
        this.currentParent = oldParent;
    }
    enterLocalScope() : number {
        return this.variableStack.length;
    }
    exitLocalScope(stackHeight : number) : void {
        for(let i : number = stackHeight; i < this.variableStack.length; ++i){
            this.undeclareVariable(this.variableStack[i]);
        }
        this.variableStack.length = stackHeight;
    }
    visitChildren(node : lib3.TreeNode) : void {
        let oldParent = this.enterParent(node);
        node.visitChildren(this);
        this.exitParent(oldParent);
    }
    visitWithLocalScope(node : lib3.TreeNode) : void {
        let stackHeight : number = this.enterLocalScope();
        this.visitChildren(node);
        this.exitLocalScope(stackHeight);
    }
    declareMember(member : lib3.Member) : void {
        if (member.transformerFlags & lib5.TransformerFlag.seenByVerifier != 0) {
            this.problem(member.function,`Member '${member}' has been declared more than once.`);
        }
        member.transformerFlags |= lib5.TransformerFlag.seenByVerifier;
    }
    undeclareMember(member : lib3.Member) : void {
        member.transformerFlags &= ~lib5.TransformerFlag.seenByVerifier;
    }
    declareVariable(variable : lib3.VariableDeclaration) : void {
        if (variable.flags & lib3.VariableDeclaration.FlagInScope != 0) {
            this.problem(variable,`Variable '${variable}' declared more than once.`);
        }
        variable.flags |= lib3.VariableDeclaration.FlagInScope;
        this.variableStack.add(variable);
    }
    undeclareVariable(variable : lib3.VariableDeclaration) : void {
        variable.flags &= ~lib3.VariableDeclaration.FlagInScope;
    }
    declareTypeParameters(parameters : core.DartList<lib3.TypeParameter>) : void {
        for(let i : number = 0; i < parameters.length; ++i){
            let parameter = parameters[i];
            if (!this.typeParametersInScope.add(parameter)) {
                this.problem(parameter,`Type parameter '${parameter}' redeclared.`);
            }
        }
    }
    undeclareTypeParameters(parameters : core.DartList<lib3.TypeParameter>) : void {
        this.typeParametersInScope.removeAll(parameters);
    }
    checkVariableInScope(variable : lib3.VariableDeclaration,where : lib3.TreeNode) : void {
        if (variable.flags & lib3.VariableDeclaration.FlagInScope == 0) {
            this.problem(where,`Variable '${variable}' used out of scope.`);
        }
    }
    visitProgram(program : lib3.Program) {
        try {
            for(let library of program.libraries) {
                for(let class_ of library.classes) {
                    if (!this.classes.add(class_)) {
                        this.problem(class_,`Class '${class_}' declared more than once.`);
                    }
                }
                for(let typedef_ of library.typedefs) {
                    if (!this.typedefs.add(typedef_)) {
                        this.problem(typedef_,`Typedef '${typedef_}' declared more than once.`);
                    }
                }
                library.members.forEach(this.declareMember.bind(this));
                for(let class_ of library.classes) {
                    class_.members.forEach(this.declareMember.bind(this));
                }
            }
            this.visitChildren(program);
        } finally {
            for(let library of program.libraries) {
                library.members.forEach(this.undeclareMember.bind(this));
                for(let class_ of library.classes) {
                    class_.members.forEach(this.undeclareMember.bind(this));
                }
            }
            this.variableStack.forEach(this.undeclareVariable.bind(this));
        }
    }
    checkTypedef(node : lib3.Typedef) : void {
        let state = this.typedefState.get(node);
        if (op(Op.EQUALS,state,TypedefState.Done)) return;
        if (op(Op.EQUALS,state,TypedefState.BeingChecked)) {
            this.problem(node,`The typedef '${node}' refers to itself`,{
                context : node});
        }
        /* TODO (AssertStatementImpl) : assert (state == null); */;
        this.typedefState.set(node,TypedefState.BeingChecked);
        let savedTypeParameters = this.typeParametersInScope;
        this.typeParametersInScope = node.typeParameters.toSet();
        let savedParent = this.currentParent;
        this.currentParent = node;
        node.visitChildren(this);
        this.currentParent = savedParent;
        this.typeParametersInScope = savedTypeParameters;
        this.typedefState.set(node,TypedefState.Done);
    }
    visitTypedef(node : lib3.Typedef) {
        this.checkTypedef(node);
        this.exitParent(this.enterParent(node));
    }
    visitField(node : lib3.Field) {
        this.currentMember = node;
        let oldParent = this.enterParent(node);
        this.classTypeParametersAreInScope = !node.isStatic;
        ((_709_)=>(!!_709_)?_709_.accept(this):null)(node.initializer);
        node.type.accept(this);
        this.classTypeParametersAreInScope = false;
        lib3.visitList(node.annotations,this);
        this.exitParent(oldParent);
        this.currentMember = null;
    }
    visitProcedure(node : lib3.Procedure) {
        this.currentMember = node;
        let oldParent = this.enterParent(node);
        this.classTypeParametersAreInScope = !node.isStatic;
        node.function.accept(this);
        this.classTypeParametersAreInScope = false;
        lib3.visitList(node.annotations,this);
        this.exitParent(oldParent);
        this.currentMember = null;
    }
    visitConstructor(node : lib3.Constructor) {
        this.currentMember = node;
        this.classTypeParametersAreInScope = true;
        let oldParent = this.enterParent(node);
        let stackHeight : number = this.enterLocalScope();
        this.visitChildren(node.function);
        lib3.visitList(node.initializers,this);
        if (!this.isOutline) {
            checkInitializers(node);
        }
        this.exitLocalScope(stackHeight);
        this.classTypeParametersAreInScope = false;
        lib3.visitList(node.annotations,this);
        this.exitParent(oldParent);
        this.classTypeParametersAreInScope = false;
        this.currentMember = null;
    }
    visitClass(node : lib3.Class) {
        this.currentClass = node;
        this.declareTypeParameters(node.typeParameters);
        let oldParent = this.enterParent(node);
        this.classTypeParametersAreInScope = false;
        lib3.visitList(node.annotations,this);
        this.classTypeParametersAreInScope = true;
        lib3.visitList(node.typeParameters,this);
        lib3.visitList(node.fields,this);
        lib3.visitList(node.constructors,this);
        lib3.visitList(node.procedures,this);
        this.exitParent(oldParent);
        this.undeclareTypeParameters(node.typeParameters);
        this.currentClass = null;
    }
    visitFunctionNode(node : lib3.FunctionNode) {
        this.declareTypeParameters(node.typeParameters);
        let savedInCatchBlock : boolean = this.inCatchBlock;
        this.inCatchBlock = false;
        this.visitWithLocalScope(node);
        this.inCatchBlock = savedInCatchBlock;
        this.undeclareTypeParameters(node.typeParameters);
    }
    visitFunctionType(node : lib3.FunctionType) {
        for(let i : number = 1; i < node.namedParameters.length; ++i){
            if (node.namedParameters[i - 1].compareTo(node.namedParameters[i]) >= 0) {
                this.problem(this.currentParent,`Named parameters are not sorted on function type (${node}).`);
            }
        }
        this.declareTypeParameters(node.typeParameters);
        for(let typeParameter of node.typeParameters) {
            ((_710_)=>(!!_710_)?_710_.accept(this):null)(typeParameter.bound);
        }
        lib3.visitList(node.positionalParameters,this);
        lib3.visitList(node.namedParameters,this);
        node.returnType.accept(this);
        this.undeclareTypeParameters(node.typeParameters);
    }
    visitBlock(node : lib3.Block) {
        this.visitWithLocalScope(node);
    }
    visitForStatement(node : lib3.ForStatement) {
        this.visitWithLocalScope(node);
    }
    visitForInStatement(node : lib3.ForInStatement) {
        this.visitWithLocalScope(node);
    }
    visitLet(node : lib3.Let) {
        this.visitWithLocalScope(node);
    }
    visitCatch(node : lib3.Catch) {
        let savedInCatchBlock : boolean = this.inCatchBlock;
        this.inCatchBlock = true;
        this.visitWithLocalScope(node);
        this.inCatchBlock = savedInCatchBlock;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrow(node : lib3.Rethrow) {
        if (!this.inCatchBlock) {
            this.problem(node,"Rethrow must be inside a Catch block.");
        }
    }
    visitVariableDeclaration(node : lib3.VariableDeclaration) {
        let parent = node.parent;
        if (isNot(parent, lib3.Block) && !(is(parent, lib3.Catch) && parent.body != node) && !(is(parent, lib3.FunctionNode) && parent.body != node) && isNot(parent, lib3.FunctionDeclaration) && !(is(parent, lib3.ForStatement) && parent.body != node) && !(is(parent, lib3.ForInStatement) && parent.body != node) && isNot(parent, lib3.Let) && isNot(parent, lib3.LocalInitializer)) {
            this.problem(node,"VariableDeclaration must be a direct child of a Block, " + `not ${parent.runtimeType}.`);
        }
        this.visitChildren(node);
        this.declareVariable(node);
    }
    visitVariableGet(node : lib3.VariableGet) {
        this.checkVariableInScope(node.variable,node);
        this.visitChildren(node);
    }
    visitVariableSet(node : lib3.VariableSet) {
        this.checkVariableInScope(node.variable,node);
        this.visitChildren(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticGet(node : lib3.StaticGet) {
        this.visitChildren(node);
        if (op(Op.EQUALS,node.target,null)) {
            this.problem(node,"StaticGet without target.");
        }
        if (!node.target.hasGetter) {
            this.problem(node,`StaticGet of '${node.target}' without getter.`);
        }
        if (node.target.isInstanceMember) {
            this.problem(node,`StaticGet of '${node.target}' that's an instance member.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticSet(node : lib3.StaticSet) {
        this.visitChildren(node);
        if (op(Op.EQUALS,node.target,null)) {
            this.problem(node,"StaticSet without target.");
        }
        if (!node.target.hasSetter) {
            this.problem(node,`StaticSet to '${node.target}' without setter.`);
        }
        if (node.target.isInstanceMember) {
            this.problem(node,`StaticSet to '${node.target}' that's an instance member.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticInvocation(node : lib3.StaticInvocation) {
        this.checkTargetedInvocation(node.target,node);
        if (node.target.isInstanceMember) {
            this.problem(node,`StaticInvocation of '${node.target}' that's an instance member.`);
        }
        if (node.isConst && (!node.target.isConst || !node.target.isExternal || node.target.kind != lib3.ProcedureKind.Factory)) {
            this.problem(node,`Constant StaticInvocation of '${node.target}' that isn't` + " a const external factory.");
        }
    }
    checkTargetedInvocation(target : lib3.Member,node : lib3.InvocationExpression) : void {
        this.visitChildren(node);
        if (op(Op.EQUALS,target,null)) {
            this.problem(node,`${node.runtimeType} without target.`);
        }
        if (op(Op.EQUALS,target.function,null)) {
            this.problem(node,`${node.runtimeType} without function.`);
        }
        if (!this.areArgumentsCompatible(node.arguments,target.function)) {
            this.problem(node,`${node.runtimeType} with incompatible arguments for '${target}'.`);
        }
        let expectedTypeParameters : number = is(target, lib3.Constructor) ? target.enclosingClass.typeParameters.length : target.function.typeParameters.length;
        if (node.arguments.types.length != expectedTypeParameters) {
            this.problem(node,`${node.runtimeType} with wrong number of type arguments` + ` for '${target}'.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertyGet(node : lib3.DirectPropertyGet) {
        this.visitChildren(node);
        if (op(Op.EQUALS,node.target,null)) {
            this.problem(node,"DirectPropertyGet without target.");
        }
        if (!node.target.hasGetter) {
            this.problem(node,`DirectPropertyGet of '${node.target}' without getter.`);
        }
        if (!node.target.isInstanceMember) {
            this.problem(node,`DirectPropertyGet of '${node.target}' that isn't an` + " instance member.");
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertySet(node : lib3.DirectPropertySet) {
        this.visitChildren(node);
        if (op(Op.EQUALS,node.target,null)) {
            this.problem(node,"DirectPropertySet without target.");
        }
        if (!node.target.hasSetter) {
            this.problem(node,`DirectPropertySet of '${node.target}' without setter.`);
        }
        if (!node.target.isInstanceMember) {
            this.problem(node,`DirectPropertySet of '${node.target}' that is static.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation) {
        this.checkTargetedInvocation(node.target,node);
        if (op(Op.EQUALS,node.receiver,null)) {
            this.problem(node,"DirectMethodInvocation without receiver.");
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInvocation(node : lib3.ConstructorInvocation) {
        this.checkTargetedInvocation(node.target,node);
        if (node.target.enclosingClass.isAbstract) {
            this.problem(node,"ConstructorInvocation of abstract class.");
        }
        if (node.isConst && !node.target.isConst) {
            this.problem(node,`Constant ConstructorInvocation fo '${node.target}' that` + " isn't const.");
        }
    }
    areArgumentsCompatible(arguments : lib3.Arguments,function : lib3.FunctionNode) : boolean {
        if (arguments.positional.length < function.requiredParameterCount) {
            return false;
        }
        if (arguments.positional.length > function.positionalParameters.length) {
            return false;
        }
        namedLoop:
            for(let i : number = 0; i < arguments.named.length; ++i){
                let argument = arguments.named[i];
                let name : string = argument.name;
                for(let j : number = 0; j < function.namedParameters.length; ++j){
                    if (function.namedParameters[j].name == name) continue;
                }
                return false;
            };
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueSwitchStatement(node : lib3.ContinueSwitchStatement) {
        if (op(Op.EQUALS,node.target,null)) {
            this.problem(node,"No target.");
        }else if (op(Op.EQUALS,node.target.parent,null)) {
            this.problem(node,"Target has no parent.");
        }else {
            let statement : lib3.SwitchStatement = node.target.parent;
            for(let switchCase of statement.cases) {
                if (op(Op.EQUALS,switchCase,node.target)) return;
            }
            this.problem(node,"Switch case isn't child of parent.");
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultMemberReference(node : lib3.Member) {
        if (node.transformerFlags & lib5.TransformerFlag.seenByVerifier == 0) {
            this.problem(node,`Dangling reference to '${node}', parent is: '${node.parent}'.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassReference(node : lib3.Class) {
        if (!this.classes.contains(node)) {
            this.problem(node,`Dangling reference to '${node}', parent is: '${node.parent}'.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypedefReference(node : lib3.Typedef) {
        if (!this.typedefs.contains(node)) {
            this.problem(node,`Dangling reference to '${node}', parent is: '${node.parent}'`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterType(node : lib3.TypeParameterType) {
        let parameter = node.parameter;
        if (!this.typeParametersInScope.contains(parameter)) {
            this.problem(this.currentParent,`Type parameter '${parameter}' referenced out of` + ` scope, parent is: '${parameter.parent}'.`);
        }
        if (is(parameter.parent, lib3.Class) && !this.classTypeParametersAreInScope) {
            this.problem(this.currentParent,`Type parameter '${parameter}' referenced from` + ` static context, parent is '${parameter.parent}'.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterfaceType(node : lib3.InterfaceType) {
        node.visitChildren(this);
        if (node.typeArguments.length != node.classNode.typeParameters.length) {
            this.problem(this.currentParent,`Type ${node} provides ${node.typeArguments.length}` + " type arguments but the class declares" + ` ${node.classNode.typeParameters.length} parameters.`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypedefType(node : lib3.TypedefType) {
        this.checkTypedef(node.typedefNode);
        node.visitChildren(this);
        if (node.typeArguments.length != node.typedefNode.typeParameters.length) {
            this.problem(this.currentParent,`The typedef type ${node} provides ${node.typeArguments.length}` + " type arguments but the typedef declares" + ` ${node.typedefNode.typeParameters.length} parameters.`);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VerifyingVisitor() {
        this.classes = new core.DartSet<lib3.Class>();
        this.typedefs = new core.DartSet<lib3.Typedef>();
        this.typeParametersInScope = new core.DartSet<lib3.TypeParameter>();
        this.variableStack = new core.DartList.literal<lib3.VariableDeclaration>();
        this.typedefState = new core.DartMap.literal([
        ]);
        this.classTypeParametersAreInScope = false;
        this.isOutline = false;
        this.inCatchBlock = false;
    }
}

export namespace CheckParentPointers {
    export type Constructors = lib4.Visitor.Constructors | 'CheckParentPointers';
    export type Interface = Omit<CheckParentPointers, Constructors>;
}
@DartClass
export class CheckParentPointers extends lib4.Visitor<any> {
    static check(node : lib3.TreeNode) : void {
        node.accept(new CheckParentPointers(node.parent));
    }
    parent : lib3.TreeNode;

    constructor(parent? : lib3.TreeNode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckParentPointers(parent? : lib3.TreeNode) {
        this.parent = parent;
    }
    defaultTreeNode(node : lib3.TreeNode) {
        if (node.parent != this.parent) {
            throw new VerificationError(this.parent,node,`Parent pointer on '${node.runtimeType}' ` + `is '${node.parent.runtimeType}' ` + `but should be '${this.parent.runtimeType}'.`);
        }
        let oldParent = this.parent;
        this.parent = node;
        node.visitChildren(this);
        this.parent = oldParent;
    }
}

export class properties {
}
