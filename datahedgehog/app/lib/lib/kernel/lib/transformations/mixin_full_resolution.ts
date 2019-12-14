/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/mixin_full_resolution.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../target/targets";
import * as lib5 from "./../class_hierarchy";
import * as lib6 from "./../core_types";
import * as lib7 from "./../type_algebra";
import * as lib8 from "./../clone";
import * as lib9 from "./../visitor";

export var transformProgram : (program : lib3.Program) => lib3.Program = (program : lib3.Program) : lib3.Program =>  {
    new MixinFullResolution(new lib4.NoneTarget(null)).transform(program);
    return program;
};
export namespace MixinFullResolution {
    export type Constructors = 'MixinFullResolution';
    export type Interface = Omit<MixinFullResolution, Constructors>;
}
@DartClass
export class MixinFullResolution {
    targetInfo : lib4.Target;

    hierarchy : lib5.ClassHierarchy;

    coreTypes : lib6.CoreTypes;

    constructor(targetInfo : lib4.Target) {
    }
    @defaultConstructor
    MixinFullResolution(targetInfo : lib4.Target) {
        this.targetInfo = targetInfo;
    }
    transform(program : lib3.Program) : void {
        let transformedClasses = new core.DartSet<lib3.Class>();
        let processedClasses = new core.DartSet<lib3.Class>();
        for(let library of program.libraries) {
            if (library.isExternal) continue;
            for(let class_ of library.classes) {
                this.transformClass(processedClasses,transformedClasses,class_);
            }
        }
        this.hierarchy = new lib5.ClassHierarchy(program);
        this.coreTypes = new lib6.CoreTypes(program);
        for(let library of program.libraries) {
            if (library.isExternal) continue;
            for(let class_ of library.classes) {
                let hasTransformedSuperclass : boolean = transformedClasses.contains(class_.superclass);
                for(let procedure of class_.procedures) {
                    if (procedure.containsSuperCalls) {
                        new SuperCallResolutionTransformer(this.hierarchy,this.coreTypes,class_.superclass,this.targetInfo).visit(procedure);
                    }
                }
                for(let constructor of class_.constructors) {
                    if (constructor.containsSuperCalls) {
                        new SuperCallResolutionTransformer(this.hierarchy,this.coreTypes,class_.superclass,this.targetInfo).visit(constructor);
                    }
                    if (hasTransformedSuperclass && constructor.initializers.length > 0) {
                        new SuperInitializerResolutionTransformer(class_.superclass).transformInitializers(constructor.initializers);
                    }
                }
            }
        }
    }
    transformClass(processedClasses : core.DartSet<lib3.Class>,transformedClasses : core.DartSet<lib3.Class>,class_ : lib3.Class) {
        if (!processedClasses.add(class_)) return;
        if (class_.superclass != null && class_.superclass.level.index >= lib3.ClassLevel.Mixin.index) {
            this.transformClass(processedClasses,transformedClasses,class_.superclass);
        }
        if (!class_.isMixinApplication) return;
        if (class_.mixedInClass.level.index < lib3.ClassLevel.Mixin.index) {
            throw new core.Exception(`Class "${class_.name}" mixes in "${class_.mixedInClass.name}" from` + ' an external library.  Did you forget --link?');
        }
        transformedClasses.add(class_);
        let substitution = lib7.getSubstitutionMap(class_.mixedInType);
        let cloner = new lib8.CloneVisitor({
            typeSubstitution : substitution});
        for(let field of class_.mixin.fields) {
            class_.addMember(cloner.clone(field));
        }
        for(let procedure of class_.mixin.procedures) {
            class_.addMember(cloner.clone(procedure));
        }
        if (class_.constructors.isEmpty) {
            let superclassSubstitution = lib7.getSubstitutionMap(class_.supertype);
            let superclassCloner = new lib8.CloneVisitor({
                typeSubstitution : superclassSubstitution});
            for(let superclassConstructor of class_.superclass.constructors) {
                let forwardingConstructor = this.buildForwardingConstructor(superclassCloner,superclassConstructor);
                class_.addMember(forwardingConstructor);
            }
        }
        class_.implementedTypes.add(class_.mixedInType);
        class_.mixedInType = null;
    }
    buildForwardingConstructor(cloner : lib8.CloneVisitor,superclassConstructor : lib3.Constructor) : lib3.Constructor {
        let superFunction = superclassConstructor.function;
        var cloneVariable : (variable : lib3.VariableDeclaration) => lib3.VariableDeclaration = (variable : lib3.VariableDeclaration) : lib3.VariableDeclaration =>  {
            let clone : lib3.VariableDeclaration = cloner.clone(variable);
            clone.isFinal = true;
            return clone;
        };
        let positionalParameters = superFunction.positionalParameters.map(cloneVariable).toList();
        let namedParameters = superFunction.namedParameters.map(cloneVariable).toList();
        let function = new lib3.FunctionNode(new lib3.EmptyStatement(),{
            positionalParameters : positionalParameters,namedParameters : namedParameters,requiredParameterCount : superFunction.requiredParameterCount,returnType : new lib3.VoidType()});
        let positionalArguments = new core.DartList.literal<lib3.Expression>();
        for(let variable of positionalParameters) {
            positionalArguments.add(new lib3.VariableGet(variable));
        }
        let namedArguments = new core.DartList.literal<lib3.NamedExpression>();
        for(let variable of namedParameters) {
            namedArguments.add(new lib3.NamedExpression(variable.name,new lib3.VariableGet(variable)));
        }
        let superInitializer = new lib3.SuperInitializer(superclassConstructor,new lib3.Arguments(positionalArguments,{
            named : namedArguments}));
        return new lib3.Constructor(function,{
            name : superclassConstructor.name,initializers : new core.DartList.literal<lib3.Initializer>(superInitializer)});
    }
}

export namespace SuperCallResolutionTransformer {
    export type Constructors = lib9.Transformer.Constructors | 'SuperCallResolutionTransformer';
    export type Interface = Omit<SuperCallResolutionTransformer, Constructors>;
}
@DartClass
export class SuperCallResolutionTransformer extends lib9.Transformer {
    hierarchy : lib5.ClassHierarchy;

    coreTypes : lib6.CoreTypes;

    lookupClass : lib3.Class;

    targetInfo : lib4.Target;

    _invocationMirrorConstructor : lib3.Constructor;

    constructor(hierarchy : lib5.ClassHierarchy,coreTypes : lib6.CoreTypes,lookupClass : lib3.Class,targetInfo : lib4.Target) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperCallResolutionTransformer(hierarchy : lib5.ClassHierarchy,coreTypes : lib6.CoreTypes,lookupClass : lib3.Class,targetInfo : lib4.Target) {
        this.hierarchy = hierarchy;
        this.coreTypes = coreTypes;
        this.lookupClass = lookupClass;
        this.targetInfo = targetInfo;
    }
    visit(node : lib3.TreeNode) : lib3.TreeNode {
        return node.accept(this);
    }
    visitSuperPropertyGet(node : lib3.SuperPropertyGet) {
        let target : lib3.Member = this.hierarchy.getDispatchTarget(this.lookupClass,node.name);
        if (target != null) {
            return ((_) : lib3.DirectPropertyGet =>  {
                {
                    _.fileOffset = node.fileOffset;
                    return _;
                }
            })(new lib3.DirectPropertyGet(new lib3.ThisExpression(),target));
        }else {
            return this._callNoSuchMethod(node.name.name,new lib3.Arguments.empty(),node,{
                isGetter : true,isSuper : true});
        }
    }
    visitSuperPropertySet(node : lib3.SuperPropertySet) {
        let target : lib3.Member = this.hierarchy.getDispatchTarget(this.lookupClass,node.name,{
            setter : true});
        if (target != null) {
            return ((_) : lib3.DirectPropertySet =>  {
                {
                    _.fileOffset = node.fileOffset;
                    return _;
                }
            })(new lib3.DirectPropertySet(new lib3.ThisExpression(),target,this.visit(node.value)));
        }else {
            let rightHandSide : lib3.VariableDeclaration = new lib3.VariableDeclaration.forValue(this.visit(node.value));
            let result : lib3.Expression = this._callNoSuchMethod(node.name.name,new lib3.Arguments(new core.DartList.literal(new lib3.VariableGet(rightHandSide))),node,{
                isSetter : true,isSuper : true});
            let call : lib3.VariableDeclaration = new lib3.VariableDeclaration.forValue(result);
            return new lib3.Let(rightHandSide,new lib3.Let(call,new lib3.VariableGet(rightHandSide)));
        }
    }
    visitSuperMethodInvocation(node : lib3.SuperMethodInvocation) {
        let target : lib3.Member = this.hierarchy.getDispatchTarget(this.lookupClass,node.name);
        let visitedArguments : lib3.Arguments = this.visit(node.arguments);
        if (is(target, lib3.Procedure) && !target.isAccessor && this._callIsLegal(target.function,visitedArguments)) {
            return ((_) : lib3.DirectMethodInvocation =>  {
                {
                    _.fileOffset = node.fileOffset;
                    return _;
                }
            })(new lib3.DirectMethodInvocation(new lib3.ThisExpression(),target,visitedArguments));
        }else if (op(Op.EQUALS,target,null) || (is(target, lib3.Procedure) && !target.isAccessor)) {
            return this._callNoSuchMethod(node.name.name,visitedArguments,node,{
                isSuper : true});
        }else if (target != null) {
            return ((_) : lib3.MethodInvocation =>  {
                {
                    _.fileOffset = node.fileOffset;
                    return _;
                }
            })(new lib3.MethodInvocation(new lib3.DirectPropertyGet(new lib3.ThisExpression(),target),new lib3.Name('call'),visitedArguments));
        }
    }
    _callNoSuchMethod(methodName : string,methodArguments : lib3.Arguments,node : lib3.TreeNode,_namedArguments? : {isSuper? : any,isGetter? : any,isSetter? : any}) : lib3.Expression {
        let {isSuper,isGetter,isSetter} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        let noSuchMethod : lib3.Member = this.hierarchy.getDispatchTarget(this.lookupClass,new lib3.Name("noSuchMethod"));
        let methodNameUsed : string = (isGetter) ? `get:${methodName}` : (isSetter) ? `set:${methodName}` : methodName;
        if (noSuchMethod != null && noSuchMethod.function.positionalParameters.length == 1 && noSuchMethod.function.namedParameters.isEmpty) {
            let invocation : lib3.ConstructorInvocation = this._createInvocation(methodNameUsed,methodArguments,isSuper,new lib3.ThisExpression());
            return ((_) : lib3.DirectMethodInvocation =>  {
                {
                    _.fileOffset = node.fileOffset;
                    return _;
                }
            })(new lib3.DirectMethodInvocation(new lib3.ThisExpression(),noSuchMethod,new lib3.Arguments(new core.DartList.literal(invocation))));
        }else {
            noSuchMethod = this.hierarchy.getDispatchTarget(this.hierarchy.rootClass,new lib3.Name("noSuchMethod"));
            let invocation : lib3.ConstructorInvocation = this._createInvocation(methodNameUsed,methodArguments,isSuper,new lib3.ThisExpression());
            let invocationPrime : lib3.ConstructorInvocation = this._createInvocation("noSuchMethod",new lib3.Arguments(new core.DartList.literal(invocation)),false,new lib3.ThisExpression());
            return ((_) : lib3.DirectMethodInvocation =>  {
                {
                    _.fileOffset = node.fileOffset;
                    return _;
                }
            })(new lib3.DirectMethodInvocation(new lib3.ThisExpression(),noSuchMethod,new lib3.Arguments(new core.DartList.literal(invocationPrime))));
        }
    }
    _createInvocation(methodName : string,callArguments : lib3.Arguments,isSuperInvocation : boolean,receiver : lib3.Expression) : lib3.ConstructorInvocation {
        if (op(Op.EQUALS,this._invocationMirrorConstructor,null)) {
            let clazz : lib3.Class = this.coreTypes.invocationMirrorClass;
            this._invocationMirrorConstructor = clazz.constructors[0];
        }
        return this.targetInfo.instantiateInvocation(this._invocationMirrorConstructor,receiver,methodName,callArguments,-1,isSuperInvocation);
    }
    _callIsLegal(targetFunction : lib3.FunctionNode,arguments : lib3.Arguments) : boolean {
        if ((targetFunction.requiredParameterCount > arguments.positional.length) || (targetFunction.positionalParameters.length < arguments.positional.length)) {
            return false;
        }
        let givenNamed : core.DartSet<string> = arguments.named.map((v : any) =>  {
            return v.name;
        }).toSet();
        let takenNamed : core.DartSet<string> = targetFunction.namedParameters.map((v : any) =>  {
            return v.name;
        }).toSet();
        givenNamed.removeAll(takenNamed);
        return givenNamed.isEmpty;
    }
}

export namespace SuperInitializerResolutionTransformer {
    export type Constructors = lib9.InitializerVisitor.Constructors | 'SuperInitializerResolutionTransformer';
    export type Interface = Omit<SuperInitializerResolutionTransformer, Constructors>;
}
@DartClass
export class SuperInitializerResolutionTransformer extends lib9.InitializerVisitor<any> {
    lookupClass : lib3.Class;

    constructor(lookupClass : lib3.Class) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperInitializerResolutionTransformer(lookupClass : lib3.Class) {
        this.lookupClass = lookupClass;
    }
    transformInitializers(initializers : core.DartList<lib3.Initializer>) {
        for(let initializer of initializers) {
            initializer.accept(this);
        }
    }
    visitSuperInitializer(node : lib3.SuperInitializer) {
        let constructor : lib3.Constructor = node.target;
        if (constructor.enclosingClass != this.lookupClass) {
            for(let replacement of this.lookupClass.constructors) {
                if (op(Op.EQUALS,constructor.name,replacement.name)) {
                    node.target = replacement;
                    return null;
                }
            }
            throw new core.Exception(`Could not find a generative constructor named "${constructor.name}" ` + `in lookup class "${this.lookupClass.name}"!`);
        }
    }
}

export class properties {
}
