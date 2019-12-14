/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_outline_shaker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./../errors";

export var trimProgram : (program : any,data : RetainedData,isIncluded : (uri : lib3.Uri) => boolean) => void = (program : any,data : RetainedData,isIncluded : (uri : lib3.Uri) => boolean) : void =>  {
    new KernelOutlineShaker(data,isIncluded).transform(program);
};
export namespace RetainedData {
    export type Constructors = 'RetainedData';
    export type Interface = Omit<RetainedData, Constructors>;
}
@DartClass
export class RetainedData {
    @Abstract
    isLibraryUsed(library : any) : boolean{ throw 'abstract'}
    @Abstract
    isClassUsed(cls : any) : boolean{ throw 'abstract'}
    @Abstract
    isMemberUsed(member : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RetainedData() {
    }
}

export namespace TypeMarker {
    export type Constructors = 'TypeMarker';
    export type Interface = Omit<TypeMarker, Constructors>;
}
@DartClass
export class TypeMarker extends any {
    data : RetainedDataBuilder;

    constructor(data : RetainedDataBuilder) {
    }
    @defaultConstructor
    TypeMarker(data : RetainedDataBuilder) {
        this.data = data;
    }
    visitInterfaceType(node : any) {
        this.data.markClass(node.classNode);
        node.typeArguments.forEach((t : any) =>  {
            return t.accept(this);
        });
    }
    visitFunctionType(node : any) {
        node.typeParameters.forEach((t : any) =>  {
            return t.bound.accept(this);
        });
        node.positionalParameters.forEach((t : any) =>  {
            return t.accept(this);
        });
        node.namedParameters.forEach((t : any) =>  {
            return t.type.accept(this);
        });
        node.returnType.accept(this);
    }
    visitTypeParameterType(node : any) {
    }
    visitTypedefType(node : any) {
        node.typeArguments.forEach((t : any) =>  {
            return t.accept(this);
        });
    }
}

export namespace RootsMarker {
    export type Constructors = 'RootsMarker';
    export type Interface = Omit<RootsMarker, Constructors>;
}
@DartClass
export class RootsMarker extends any {
    data : RetainedDataBuilder;

    constructor(data : RetainedDataBuilder) {
    }
    @defaultConstructor
    RootsMarker(data : RetainedDataBuilder) {
        this.data = data;
    }
    run(program : any,isIncluded : (uri : lib3.Uri) => boolean) : void {
        this.markRequired(program);
        this.data.markMember(program.mainMethod);
        for(let library of program.libraries) {
            if (isIncluded(library.importUri)) {
                library.accept(this);
            }
        }
    }
    markRequired(program : any) : void {
        let coreTypes = new bare.createInstance(any,null,program);
        coreTypes.objectClass.members.forEach(this.data.markMember.bind(this.data));
        this.data.markClass(coreTypes.objectClass);
        this.data.markClass(coreTypes.nullClass);
        this.data.markClass(coreTypes.boolClass);
        this.data.markClass(coreTypes.intClass);
        this.data.markClass(coreTypes.numClass);
        this.data.markClass(coreTypes.doubleClass);
        this.data.markClass(coreTypes.stringClass);
        this.data.markClass(coreTypes.listClass);
        this.data.markClass(coreTypes.mapClass);
        this.data.markClass(coreTypes.iterableClass);
        this.data.markClass(coreTypes.iteratorClass);
        this.data.markClass(coreTypes.futureClass);
        this.data.markClass(coreTypes.streamClass);
        this.data.markClass(coreTypes.symbolClass);
        this.data.markClass(coreTypes.internalSymbolClass);
        this.data.markClass(coreTypes.typeClass);
        this.data.markClass(coreTypes.functionClass);
        this.data.markClass(coreTypes.invocationClass);
        this.data.markMember(coreTypes.externalNameDefaultConstructor);
        this.data.markClass(coreTypes.iteratorClass);
        this.data.markClass(coreTypes.futureClass);
        this.data.markClass(coreTypes.futureOrClass);
        this.data.markClass(coreTypes.completerClass);
        this.data.markMember(coreTypes.completerSyncConstructor);
        this.data.markMember(coreTypes.syncIterableDefaultConstructor);
        this.data.markMember(coreTypes.streamIteratorDefaultConstructor);
        this.data.markMember(coreTypes.futureMicrotaskConstructor);
        this.data.markMember(coreTypes.asyncStarStreamControllerDefaultConstructor);
        this.data.markMember(coreTypes.printProcedure);
        this.data.markMember(coreTypes.asyncThenWrapperHelperProcedure);
        this.data.markMember(coreTypes.asyncErrorWrapperHelperProcedure);
        this.data.markMember(coreTypes.awaitHelperProcedure);
        this.data.markMember(coreTypes.invocationMirrorDefaultConstructor);
        this.data.markMember(coreTypes.listFromConstructor);
    }
    visitConstructor(node : any) {
        if (!node.initializers.any((i : any) =>  {
            return is(i, any);
        })) {
            for(let ctor of node.enclosingClass.supertype.classNode.constructors) {
                if (op(Op.EQUALS,ctor.name.name,'')) this.data.markMember(ctor);
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperInitializer(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingInitializer(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInvocation(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticInvocation(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectMethodInvocation(node : any) {
        if (isNot(node.receiver, any)) {
            return lib4.internalError('Direct calls are only supported on "this"');
        }
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) {
        this.data.markMember(node.interfaceTarget);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticGet(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticSet(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertyGet(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertySet(node : any) {
        this.data.markMember(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperPropertyGet(node : any) {
        this.data.markMember(node.interfaceTarget);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperPropertySet(node : any) {
        this.data.markMember(node.interfaceTarget);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyGet(node : any) {
        this.data.markMember(node.interfaceTarget);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertySet(node : any) {
        this.data.markMember(node.interfaceTarget);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterfaceType(node : any) {
        this.data.markClass(node.classNode);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSupertype(node : any) {
        this.data.markClass(node.classNode);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypedefReference(node : any) {
        return lib4.internalError('not implemented');
    }
}

export namespace KernelOutlineShaker {
    export type Constructors = 'KernelOutlineShaker';
    export type Interface = Omit<KernelOutlineShaker, Constructors>;
}
@DartClass
export class KernelOutlineShaker extends any {
    data : RetainedData;

    isIncluded : (uri : lib3.Uri) => boolean;

    constructor(data : RetainedData,isIncluded : (uri : lib3.Uri) => boolean) {
    }
    @defaultConstructor
    KernelOutlineShaker(data : RetainedData,isIncluded : (uri : lib3.Uri) => boolean) {
        this.data = data;
        this.isIncluded = isIncluded;
    }
    transform(program : any) : void {
        let toRemove = new core.DartSet<any>();
        for(let library of program.libraries) {
            if (!this.isIncluded(library.importUri)) {
                if (!this.data.isLibraryUsed(library)) {
                    toRemove.add(library);
                }else {
                    library.isExternal = true;
                    library.transformChildren(this);
                }
            }
        }
        program.libraries.removeWhere(toRemove.contains.bind(toRemove));
    }
    visitClass(node : any) : any {
        if (!this.data.isClassUsed(node)) {
            ((_543_)=>(!!_543_)?_543_.unbind():null)(node.canonicalName);
            return null;
        }else {
            node.transformChildren(this);
            return node;
        }
    }
    defaultMember(node : any) : any {
        if (!this.data.isMemberUsed(node)) {
            ((_544_)=>(!!_544_)?_544_.unbind():null)(node.canonicalName);
            return null;
        }else {
            if (is(node, any)) {
                node.function.body = null;
            }else if (is(node, any)) {
                node.initializer = null;
            }else if (is(node, any)) {
                node.initializers.clear();
                node.function.body = null;
            }
            return node;
        }
    }
    visitTypedef(node : any) : any {
        return null;
    }
    defaultTreeNode(node : any) : any {
        return node;
    }
}

export namespace RetainedDataBuilder {
    export type Constructors = RetainedData.Constructors | 'RetainedDataBuilder';
    export type Interface = Omit<RetainedDataBuilder, Constructors>;
}
@DartClass
export class RetainedDataBuilder extends RetainedData {
    libraries : core.DartSet<any>;

    classes : core.DartSet<any>;

    members : core.DartSet<any>;

    typeMarker : TypeMarker;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isLibraryUsed(library : any) : boolean {
        return this.libraries.contains(library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isClassUsed(cls : any) : boolean {
        return this.classes.contains(cls);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMemberUsed(m : any) : boolean {
        return this.members.contains(m);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RetainedDataBuilder() {
        this.libraries = new core.DartSet<any>();
        this.classes = new core.DartSet<any>();
        this.members = new core.DartSet<any>();
        this.typeMarker = new TypeMarker(this);
    }
    markLibrary(lib : any) : void {
        this.libraries.add(lib);
    }
    markClass(cls : any) : void {
        if (op(Op.EQUALS,cls,null) || !this.classes.add(cls)) return;
        this.markLibrary(cls.parent);
        this.markSupertype(cls.supertype);
        this.markSupertype(cls.mixedInType);
        cls.implementedTypes.forEach(this.markSupertype.bind(this));
        cls.typeParameters.forEach((t : any) =>  {
            return t.bound.accept(this.typeMarker);
        });
    }
    markSupertype(node : any) : void {
        if (op(Op.EQUALS,node,null)) return;
        this.markClass(node.classNode);
        node.typeArguments.forEach((t : any) =>  {
            return t.accept(this.typeMarker);
        });
    }
    markMember(m : any) : void {
        if (op(Op.EQUALS,m,null) || !this.members.add(m)) return;
        this.markMemberInterface(m);
        let parent = m.parent;
        if (is(parent, any)) {
            this.markLibrary(parent);
        }else if (is(parent, any)) {
            this.markClass(parent);
        }
    }
    markMemberInterface(node : any) : void {
        if (is(node, any)) {
            node.type.accept(this.typeMarker);
        }else if (is(node, any)) {
            let function = node.function;
            function.typeParameters.forEach((p : any) =>  {
                return p.bound.accept(this.typeMarker);
            });
            function.positionalParameters.forEach((p : any) =>  {
                return p.type.accept(this.typeMarker);
            });
            function.namedParameters.forEach((p : any) =>  {
                return p.type.accept(this.typeMarker);
            });
            function.returnType.accept(this.typeMarker);
        }
    }
}

export class properties {
}
