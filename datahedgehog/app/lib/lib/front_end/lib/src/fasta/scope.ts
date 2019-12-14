/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scope.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder/builder";
import * as lib4 from "./errors";
import * as lib5 from "./builder/type_variable_builder";
import * as lib6 from "@dart2ts/dart/uri";

export namespace MutableScope {
    export type Constructors = 'MutableScope';
    export type Interface = Omit<MutableScope, Constructors>;
}
@DartClass
export class MutableScope {
    local : core.DartMap<string,lib3.Builder>;

    setters : core.DartMap<string,lib3.Builder>;

    parent : Scope;

    constructor(local : core.DartMap<string,lib3.Builder>,setters : core.DartMap<string,lib3.Builder>,parent : Scope) {
    }
    @defaultConstructor
    MutableScope(local : core.DartMap<string,lib3.Builder>,setters : core.DartMap<string,lib3.Builder>,parent : Scope) {
        this.local = local;
        this.setters = setters;
        this.parent = parent;
    }
}

export namespace ScopeBuilder {
    export type Constructors = 'ScopeBuilder';
    export type Interface = Omit<ScopeBuilder, Constructors>;
}
@DartClass
export class ScopeBuilder {
    scope : Scope;

    constructor(scope : Scope) {
    }
    @defaultConstructor
    ScopeBuilder(scope : Scope) {
        this.scope = scope;
    }
    addMember(name : string,builder : lib3.Builder) : void {
        this.scope.local.set(name,builder);
    }
    addSetter(name : string,builder : lib3.Builder) : void {
        this.scope.setters.set(name,builder);
    }
    [OperatorMethods.INDEX](name : string) : lib3.Builder {
        return this.scope.local.get(name);
    }
}

export namespace ProblemBuilder {
    export type Constructors = lib3.Builder.Constructors | 'ProblemBuilder';
    export type Interface = Omit<ProblemBuilder, Constructors>;
}
@DartClass
export class ProblemBuilder extends lib3.Builder {
    name : string;

    builder : lib3.Builder;

    constructor(name : string,builder : lib3.Builder,charOffset : number,fileUri : lib6.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ProblemBuilder(name : string,builder : lib3.Builder,charOffset : number,fileUri : lib6.Uri) {
        super.Builder(null,charOffset,fileUri);
        this.name = name;
        this.builder = builder;
    }
    get target() {
        return null;
    }
    get hasProblem() : boolean {
        return true;
    }
    @AbstractProperty
    get message() : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return this.name;
    }
}

export namespace Scope {
    export type Constructors = MutableScope.Constructors | 'Scope' | 'top' | 'immutable' | 'nested';
    export type Interface = Omit<Scope, Constructors>;
}
@DartClass
export class Scope extends MutableScope {
    isModifiable : boolean;

    labels : core.DartMap<string,lib3.Builder>;

    forwardDeclaredLabels : core.DartMap<string,lib3.Builder>;

    constructor(local : core.DartMap<string,lib3.Builder>,setters : core.DartMap<string,lib3.Builder>,parent : Scope,_namedArguments? : {isModifiable? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Scope(local : core.DartMap<string,lib3.Builder>,setters : core.DartMap<string,lib3.Builder>,parent : Scope,_namedArguments? : {isModifiable? : boolean}) {
        let {isModifiable} = Object.assign({
            "isModifiable" : true}, _namedArguments );
        super.MutableScope(local,setters = (setters || new core.DartMap.literal([
        ])),parent);
        this.isModifiable = isModifiable;
    }
    @namedConstructor
    top(_namedArguments? : {isModifiable? : boolean}) {
        let {isModifiable} = Object.assign({
            "isModifiable" : false}, _namedArguments );
        this.Scope(new core.DartMap.literal([
        ]),new core.DartMap.literal([
        ]),null,{
            isModifiable : isModifiable});
    }
    static top : new(_namedArguments? : {isModifiable? : boolean}) => Scope;

    @namedConstructor
    immutable() {
        this.Scope(new core.DartMap.literal([
        ]),new core.DartMap.literal([
        ]),null,{
            isModifiable : false});
    }
    static immutable : new() => Scope;

    @namedConstructor
    nested(parent : Scope,_namedArguments? : {isModifiable? : boolean}) {
        let {isModifiable} = Object.assign({
            "isModifiable" : true}, _namedArguments );
        this.Scope(new core.DartMap.literal([
        ]),null,parent,{
            isModifiable : isModifiable});
    }
    static nested : new(parent : Scope,_namedArguments? : {isModifiable? : boolean}) => Scope;

    set local(_ : any) {
        lib4.internalError("Unsupported operation.");
    }
    set setters(_ : any) {
        lib4.internalError("Unsupported operation.");
    }
    set parent(_ : any) {
        lib4.internalError("Unsupported operation.");
    }
    becomePartOf(scope : Scope) : void {
        /* TODO (AssertStatementImpl) : assert (parent.parent == null); */;
        /* TODO (AssertStatementImpl) : assert (scope.parent.parent == null); */;
        super.local = scope.local;
        super.setters = scope.setters;
        super.parent = scope.parent;
    }
    createNestedScope(_namedArguments? : {isModifiable? : boolean}) : Scope {
        let {isModifiable} = Object.assign({
            "isModifiable" : true}, _namedArguments );
        return new Scope.nested(this,{
            isModifiable : isModifiable});
    }
    withTypeVariables(typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>) : Scope {
        if (typeVariables == null) return this;
        let newScope : Scope = new Scope.nested(this,{
            isModifiable : false});
        for(let t of typeVariables) {
            newScope.local.set(t.name,t);
        }
        return newScope;
    }
    createNestedLabelScope() : Scope {
        return new Scope(local,setters,parent,{
            isModifiable : true});
    }
    lookupIn(name : string,charOffset : number,fileUri : lib6.Uri,map : core.DartMap<string,lib3.Builder>,isInstanceScope : boolean) : lib3.Builder {
        let builder : lib3.Builder = map.get(name);
        if (op(Op.EQUALS,builder,null)) return null;
        if (builder.next != null) {
            return new AmbiguousBuilder(name,builder,charOffset,fileUri);
        }else if (!isInstanceScope && builder.isInstanceMember) {
            return null;
        }else {
            return builder;
        }
    }
    lookup(name : string,charOffset : number,fileUri : lib6.Uri,_namedArguments? : {isInstanceScope? : boolean}) : lib3.Builder {
        let {isInstanceScope} = Object.assign({
            "isInstanceScope" : true}, _namedArguments );
        let builder : lib3.Builder = this.lookupIn(name,charOffset,fileUri,local,isInstanceScope);
        if (builder != null) return builder;
        builder = this.lookupIn(name,charOffset,fileUri,setters,isInstanceScope);
        if (builder != null && !builder.hasProblem) {
            return new AccessErrorBuilder(name,builder,charOffset,fileUri);
        }
        if (!isInstanceScope) {
            return builder;
        }
        return (builder || ((_554_)=>(!!_554_)?_554_.lookup(name,charOffset,fileUri):null)(parent));
    }
    lookupSetter(name : string,charOffset : number,fileUri : lib6.Uri,_namedArguments? : {isInstanceScope? : boolean}) : lib3.Builder {
        let {isInstanceScope} = Object.assign({
            "isInstanceScope" : true}, _namedArguments );
        let builder : lib3.Builder = this.lookupIn(name,charOffset,fileUri,setters,isInstanceScope);
        if (builder != null) return builder;
        builder = this.lookupIn(name,charOffset,fileUri,local,isInstanceScope);
        if (builder != null && !builder.hasProblem) {
            return new AccessErrorBuilder(name,builder,charOffset,fileUri);
        }
        if (!isInstanceScope) {
            return builder;
        }
        return (builder || ((_555_)=>(!!_555_)?_555_.lookupSetter(name,charOffset,fileUri):null)(parent));
    }
    hasLocalLabel(name : string) : boolean {
        return this.labels != null && this.labels.containsKey(name);
    }
    declareLabel(name : string,target : lib3.Builder) : void {
        if (this.isModifiable) {
            this.labels = ( this.labels ) || ( new core.DartMap.literal([
            ]) );
            this.labels.set(name,target);
        }else {
            lib4.internalError("Can't extend an unmodifiable scope.");
        }
    }
    forwardDeclareLabel(name : string,target : lib3.Builder) : void {
        this.declareLabel(name,target);
        this.forwardDeclaredLabels = ( this.forwardDeclaredLabels ) || ( new core.DartMap.literal([
        ]) );
        this.forwardDeclaredLabels.set(name,target);
    }
    claimLabel(name : string) : void {
        if (this.forwardDeclaredLabels == null) return;
        this.forwardDeclaredLabels.remove(name);
        if (this.forwardDeclaredLabels.length == 0) {
            this.forwardDeclaredLabels = null;
        }
    }
    get unclaimedForwardDeclarations() : core.DartMap<string,lib3.Builder> {
        return this.forwardDeclaredLabels;
    }
    lookupLabel(name : string) : lib3.Builder {
        return ((this.labels == null ? null : this.labels.get(name)) || ((_556_)=>(!!_556_)?_556_.lookupLabel(name):null)(parent));
    }
    [OperatorMethods.INDEX_EQ](name : string,member : lib3.Builder) : void {
        if (this.isModifiable) {
            local.set(name,member);
        }else {
            lib4.internalError("Can't extend an unmodifiable scope.");
        }
    }
    merge(scope : Scope,buildAmbiguousBuilder : (name : string,existing : lib3.Builder,member : lib3.Builder) => any) : void {
        let map : core.DartMap<string,lib3.Builder> = local;
        var mergeMember : (name : string,member : lib3.Builder) => void = (name : string,member : lib3.Builder) : void =>  {
            let existing : lib3.Builder = map.get(name);
            if (existing != null) {
                if (existing != member) {
                    member = buildAmbiguousBuilder(name,existing,member);
                }
            }
            map.set(name,member);
        };
        scope.local.forEach(mergeMember);
        map = setters;
        scope.setters.forEach(mergeMember);
    }
    forEach(f : (name : string,member : lib3.Builder) => any) : void {
        local.forEach(f);
        setters.forEach(f);
    }
    get debugString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let nestingLevel : number = this.writeOn(buffer);
        for(let i : number = nestingLevel; i >= 0; i--){
            buffer.writeln(`${op(Op.TIMES,'  ',i)}}`);
        }
        return `${buffer}`;
    }
    writeOn(sink : core.DartStringSink) : number {
        let nestingLevel : number = ((((_557_)=>(!!_557_)?_557_.writeOn(sink):null)(parent) || -1)) + 1;
        let indent : string = op(Op.TIMES,"  ",nestingLevel);
        sink.writeln(`${indent}{`);
        local.forEach((name : string,member : lib3.Builder) =>  {
            sink.writeln(`${indent}  ${name}`);
        });
        setters.forEach((name : string,member : lib3.Builder) =>  {
            sink.writeln(`${indent}  ${name}=`);
        });
        return nestingLevel;
    }
}

export namespace AccessErrorBuilder {
    export type Constructors = ProblemBuilder.Constructors | 'AccessErrorBuilder';
    export type Interface = Omit<AccessErrorBuilder, Constructors>;
}
@DartClass
export class AccessErrorBuilder extends ProblemBuilder {
    constructor(name : string,builder : lib3.Builder,charOffset : number,fileUri : lib6.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AccessErrorBuilder(name : string,builder : lib3.Builder,charOffset : number,fileUri : lib6.Uri) {
        super.ProblemBuilder(name,builder,charOffset,fileUri);
    }
    get parent() : lib3.Builder {
        return this.builder;
    }
    get isFinal() : boolean {
        return this.builder.isFinal;
    }
    get isField() : boolean {
        return this.builder.isField;
    }
    get isRegularMethod() : boolean {
        return this.builder.isRegularMethod;
    }
    get isGetter() : boolean {
        return !this.builder.isGetter;
    }
    get isSetter() : boolean {
        return !this.builder.isSetter;
    }
    get isInstanceMember() : boolean {
        return this.builder.isInstanceMember;
    }
    get isStatic() : boolean {
        return this.builder.isStatic;
    }
    get isTopLevel() : boolean {
        return this.builder.isTopLevel;
    }
    get isTypeDeclaration() : boolean {
        return this.builder.isTypeDeclaration;
    }
    get isLocal() : boolean {
        return this.builder.isLocal;
    }
    get message() : string {
        return `Access error: '${this.name}'.`;
    }
}

export namespace AmbiguousBuilder {
    export type Constructors = ProblemBuilder.Constructors | 'AmbiguousBuilder';
    export type Interface = Omit<AmbiguousBuilder, Constructors>;
}
@DartClass
export class AmbiguousBuilder extends ProblemBuilder {
    constructor(name : string,builder : lib3.Builder,charOffset : number,fileUri : lib6.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AmbiguousBuilder(name : string,builder : lib3.Builder,charOffset : number,fileUri : lib6.Uri) {
        super.ProblemBuilder(name,builder,charOffset,fileUri);
    }
    get message() : string {
        return `Duplicated named: '${this.name}'.`;
    }
}

export class properties {
}
