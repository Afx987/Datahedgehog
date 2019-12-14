/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/fasta/model.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LazyEntityRef {
    export type Constructors = 'LazyEntityRef';
    export type Interface = Omit<LazyEntityRef, Constructors>;
}
@DartClass
export class LazyEntityRef extends any {
    scope : Scope;

    name : string;

    wasExpanded : boolean;

    constructor(name : string,scope : Scope) {
    }
    @defaultConstructor
    LazyEntityRef(name : string,scope : Scope) {
        this.wasExpanded = false;
        super.DartObject();
        this.name = name;
        this.scope = scope;
        this.scope.top._toExpand.add(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get paramReference() : number {
        this.expand();
        return super.paramReference;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reference() : number {
        this.expand();
        return super.reference;
    }
    expand() {
        if (!this.wasExpanded) {
            this.scope.computeReference(this);
            this.wasExpanded = true;
        }
    }
}

export namespace Scope {
    export type Constructors = 'Scope';
    export type Interface = Omit<Scope, Constructors>;
}
@DartClass
export class Scope {
    @AbstractProperty
    get parent() : Scope{ throw 'abstract'}
    get top() : TopScope {
        let s = this;
        while (s.parent != null)s = s.parent;
        return s;
    }
    @Abstract
    computeReference(ref : LazyEntityRef) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Scope() {
    }
}

export namespace EnumScope {
    export type Constructors = Scope.Constructors | 'EnumScope';
    export type Interface = Omit<EnumScope, Constructors>;
}
@DartClass
export class EnumScope extends Scope {
    parent : Scope;

    currentEnum : any;

    constructor(parent : Scope) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumScope(parent : Scope) {
        this.currentEnum = new bare.createInstance(any,null);
        this.parent = parent;
    }
    computeReference(ref : LazyEntityRef) : void {
        return throw "unexpected";
    }
}

export namespace NestedLazyEntityRef {
    export type Constructors = LazyEntityRef.Constructors | 'NestedLazyEntityRef';
    export type Interface = Omit<NestedLazyEntityRef, Constructors>;
}
@DartClass
export class NestedLazyEntityRef extends LazyEntityRef {
    prefix : any;

    constructor(prefix : any,name : string,scope : Scope) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NestedLazyEntityRef(prefix : any,name : string,scope : Scope) {
        super.LazyEntityRef(name,scope.top);
        this.prefix = prefix;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    expand() {
        if (!this.wasExpanded) {
            super.reference = this.scope.top.serializeReference(this.prefix.reference,this.name);
            this.wasExpanded = true;
        }
    }
}

export namespace TopScope {
    export type Constructors = Scope.Constructors | 'TopScope';
    export type Interface = Omit<TopScope, Constructors>;
}
@DartClass
export class TopScope extends Scope {
    unit : any;

    publicNamespace : any;

    _toExpand : core.DartList<LazyEntityRef>;

    nameToReference : core.DartMap<number,core.DartMap<string,number>>;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopScope() {
        this.unit = new bare.createInstance(any,null,{
            classes : new core.DartList.literal(),enums : new core.DartList.literal(),executables : new core.DartList.literal(),exports : new core.DartList.literal(),imports : new core.DartList.literal(),parts : new core.DartList.literal(),references : new core.DartList.literal(new bare.createInstance(any,null)),typedefs : new core.DartList.literal(),variables : new core.DartList.literal()});
        this.publicNamespace = new bare.createInstance(any,null,{
            names : new core.DartList.literal(),exports : new core.DartList.literal(),parts : new core.DartList.literal()});
        this._toExpand = new core.DartList.literal();
        this.nameToReference = new core.DartMap.literal([
        ]);
        this.unit.publicNamespace = this.publicNamespace;
    }
    get parent() {
        return null;
    }
    computeReference(ref : LazyEntityRef) : void {
        ref.reference = this.serializeReference(null,ref.name);
    }
    expandLazyReferences() : void {
        this._toExpand.forEach((r : any) =>  {
            return r.expand();
        });
    }
    serializeReference(prefixIndex : number,name : string) : number {
        return this.nameToReference.putIfAbsent(prefixIndex,() =>  {
            return new core.DartMap.literal([
            ]);
        }).putIfAbsent(name,() =>  {
            let index : number = this.unit.references.length;
            this.unit.references.add(new bare.createInstance(any,null,{
                prefixReference : prefixIndex,name : name}));
            return index;
        });
    }
    toString() {
        return "<top-scope>";
    }
}

export namespace TypeParameterScope {
    export type Constructors = Scope.Constructors | 'TypeParameterScope';
    export type Interface = Omit<TypeParameterScope, Constructors>;
}
@DartClass
export class TypeParameterScope extends Scope {
    parent : Scope;

    typeParameters : core.DartList<string>;

    constructor(parent : Scope) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterScope(parent : Scope) {
        this.typeParameters = new core.DartList.literal();
        this.parent = parent;
    }
    computeReference(ref : LazyEntityRef) : void {
        let i = this.typeParameters.indexOf(ref.name);
        if (i < 0) return this.parent.computeReference(ref);
        ref.paramReference = this.typeParameters.length - i;
    }
}

export namespace ClassScope {
    export type Constructors = TypeParameterScope.Constructors | 'ClassScope';
    export type Interface = Omit<ClassScope, Constructors>;
}
@DartClass
export class ClassScope extends TypeParameterScope {
    className : string;

    currentClass : any;

    publicName : any;

    members : core.DartSet<string>;

    constructor(parent : Scope) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassScope(parent : Scope) {
        this.currentClass = new bare.createInstance(any,null);
        this.publicName = new bare.createInstance(any,null);
        this.members = new core.DartSet<string>();
        super.TypeParameterScope(parent);
    }
    computeReference(ref : LazyEntityRef) : void {
        if (!this.members.contains(ref.name)) {
            return super.computeReference(ref);
        }
        ref.reference = this.top.serializeReference(this.top.serializeReference(null,this.className),ref.name);
    }
    toString() {
        return `<class-scope: ${this.className}>`;
    }
}

export class properties {
}
