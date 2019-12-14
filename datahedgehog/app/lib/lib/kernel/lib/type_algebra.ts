/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/type_algebra.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";
import * as lib4 from "./visitor";

export var substitute : (type : lib3.DartType,substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>) => lib3.DartType = (type : lib3.DartType,substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>) : lib3.DartType =>  {
    if (substitution.isEmpty) return type;
    return Substitution.fromMap(substitution).substituteType(type);
};
export var getSubstitutionMap : (type : lib3.Supertype) => core.DartMap<lib3.TypeParameter,lib3.DartType> = (type : lib3.Supertype) : core.DartMap<lib3.TypeParameter,lib3.DartType> =>  {
    return type.typeArguments.isEmpty ? new core.DartMap.literal([
    ]) : new core.DartMap.fromIterables(type.classNode.typeParameters,type.typeArguments);
};
export var getUpperBoundSubstitutionMap : (host : lib3.Class) => core.DartMap<lib3.TypeParameter,lib3.DartType> = (host : lib3.Class) : core.DartMap<lib3.TypeParameter,lib3.DartType> =>  {
    if (host.typeParameters.isEmpty) return new core.DartMap.literal([
    ]);
    let result = new core.DartMap.literal([
    ]);
    for(let parameter of host.typeParameters) {
        result.set(parameter,new lib3.DynamicType());
    }
    for(let parameter of host.typeParameters) {
        result.set(parameter,substitute(parameter.bound,result));
    }
    return result;
};
export var substituteDeep : (type : lib3.DartType,substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>) => lib3.DartType = (type : lib3.DartType,substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>) : lib3.DartType =>  {
    if (substitution.isEmpty) return type;
    let substitutor = new _DeepTypeSubstitutor(substitution);
    let result = substitutor.visit(type);
    return substitutor.isInfinite ? null : result;
};
export var containsTypeVariable : (type : lib3.DartType,variables : core.DartSet<lib3.TypeParameter>) => boolean = (type : lib3.DartType,variables : core.DartSet<lib3.TypeParameter>) : boolean =>  {
    if (variables.isEmpty) return false;
    return new _OccurrenceVisitor(variables).visit(type);
};
export var unifyTypes : (type1 : lib3.DartType,type2 : lib3.DartType,quantifiedVariables : core.DartSet<lib3.TypeParameter>) => core.DartMap<lib3.TypeParameter,lib3.DartType> = (type1 : lib3.DartType,type2 : lib3.DartType,quantifiedVariables : core.DartSet<lib3.TypeParameter>) : core.DartMap<lib3.TypeParameter,lib3.DartType> =>  {
    let unifier = new _TypeUnification(type1,type2,quantifiedVariables);
    return unifier.success ? unifier.substitution : null;
};
export var getFreshTypeParameters : (typeParameters : core.DartList<lib3.TypeParameter>) => FreshTypeParameters = (typeParameters : core.DartList<lib3.TypeParameter>) : FreshTypeParameters =>  {
    let freshParameters = new core.DartList.generate(typeParameters.length,(i : any) =>  {
        return new lib3.TypeParameter(typeParameters[i].name);
    },{
        growable : true});
    let map = new core.DartMap.literal([
    ]);
    for(let i : number = 0; i < typeParameters.length; ++i){
        map.set(typeParameters[i],new lib3.TypeParameterType(freshParameters[i]));
        freshParameters[i].bound = substitute(typeParameters[i].bound,map);
    }
    return new FreshTypeParameters(freshParameters,Substitution.fromMap(map));
};
export namespace FreshTypeParameters {
    export type Constructors = 'FreshTypeParameters';
    export type Interface = Omit<FreshTypeParameters, Constructors>;
}
@DartClass
export class FreshTypeParameters {
    freshTypeParameters : core.DartList<lib3.TypeParameter>;

    substitution : Substitution;

    constructor(freshTypeParameters : core.DartList<lib3.TypeParameter>,substitution : Substitution) {
    }
    @defaultConstructor
    FreshTypeParameters(freshTypeParameters : core.DartList<lib3.TypeParameter>,substitution : Substitution) {
        this.freshTypeParameters = freshTypeParameters;
        this.substitution = substitution;
    }
    substitute(type : lib3.DartType) : lib3.DartType {
        return this.substitution.substituteType(type);
    }
    substituteSuper(type : lib3.Supertype) : lib3.Supertype {
        return this.substitution.substituteSupertype(type);
    }
}

export namespace Substitution {
    export type Constructors = 'Substitution';
    export type Interface = Omit<Substitution, Constructors>;
}
@DartClass
export class Substitution {
    constructor() {
    }
    @defaultConstructor
    Substitution() {
    }
    private static __$empty : Substitution;
    static get empty() : Substitution { 
        if (this.__$empty===undefined) {
            this.__$empty = _NullSubstitution.instance;
        }
        return this.__$empty;
    }

    static fromMap(map : core.DartMap<lib3.TypeParameter,lib3.DartType>) : Substitution {
        if (map.isEmpty) return _NullSubstitution.instance;
        return new _MapSubstitution(map,map);
    }
    static fromUpperAndLowerBounds(upper : core.DartMap<lib3.TypeParameter,lib3.DartType>,lower : core.DartMap<lib3.TypeParameter,lib3.DartType>) : Substitution {
        if (upper.isEmpty && lower.isEmpty) return _NullSubstitution.instance;
        return new _MapSubstitution(upper,lower);
    }
    static fromSupertype(supertype : lib3.Supertype) : Substitution {
        if (supertype.typeArguments.isEmpty) return _NullSubstitution.instance;
        return Substitution.fromMap(new core.DartMap.fromIterables(supertype.classNode.typeParameters,supertype.typeArguments));
    }
    static fromInterfaceType(type : lib3.InterfaceType) : Substitution {
        if (type.typeArguments.isEmpty) return _NullSubstitution.instance;
        return Substitution.fromMap(new core.DartMap.fromIterables(type.classNode.typeParameters,type.typeArguments));
    }
    static fromTypedefType(type : lib3.TypedefType) : Substitution {
        if (type.typeArguments.isEmpty) return _NullSubstitution.instance;
        return Substitution.fromMap(new core.DartMap.fromIterables(type.typedefNode.typeParameters,type.typeArguments));
    }
    static fromPairs(parameters : core.DartList<lib3.TypeParameter>,types : core.DartList<lib3.DartType>) : Substitution {
        /* TODO (AssertStatementImpl) : assert (parameters.length == types.length); */;
        if (parameters.isEmpty) return _NullSubstitution.instance;
        return Substitution.fromMap(new core.DartMap.fromIterables(parameters,types));
    }
    static bottomForClass(class_ : lib3.Class) : Substitution {
        if (class_.typeParameters.isEmpty) return _NullSubstitution.instance;
        return new _ClassBottomSubstitution(class_);
    }
    static upperBoundForClass(class_ : lib3.Class) : Substitution {
        if (class_.typeParameters.isEmpty) return _NullSubstitution.instance;
        let upper = new core.DartMap.literal([
        ]);
        for(let parameter of class_.typeParameters) {
            upper.set(parameter,new lib3.DynamicType());
        }
        for(let parameter of class_.typeParameters) {
            upper.set(parameter,substitute(parameter.bound,upper));
        }
        return Substitution.fromUpperAndLowerBounds(upper,new core.DartMap.literal([
        ]));
    }
    static combine(first : Substitution,second : Substitution) : Substitution {
        if (op(Op.EQUALS,first,_NullSubstitution.instance)) return second;
        if (op(Op.EQUALS,second,_NullSubstitution.instance)) return first;
        return new _CombinedSubstitution(first,second);
    }
    @Abstract
    getSubstitute(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType{ throw 'abstract'}
    substituteType(node : lib3.DartType,_namedArguments? : {contravariant? : boolean}) : lib3.DartType {
        let {contravariant} = Object.assign({
            "contravariant" : false}, _namedArguments );
        return new _TopSubstitutor(this,contravariant).visit(node);
    }
    substituteSupertype(node : lib3.Supertype) : lib3.Supertype {
        return new _TopSubstitutor(this,false).visitSupertype(node);
    }
}

export namespace _TypeSubstitutor {
    export type Constructors = lib4.DartTypeVisitor.Constructors | '_TypeSubstitutor';
    export type Interface = Omit<_TypeSubstitutor, Constructors>;
}
@DartClass
export class _TypeSubstitutor extends lib4.DartTypeVisitor<lib3.DartType> {
    outer : _TypeSubstitutor;

    covariantContext : boolean;

    constructor(outer : _TypeSubstitutor) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TypeSubstitutor(outer : _TypeSubstitutor) {
        this.covariantContext = true;
        this.useCounter = 0;
        this.outer = outer;
        this.covariantContext = op(Op.EQUALS,this.outer,null) ? true : this.outer.covariantContext;
    }
    @Abstract
    lookup(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType{ throw 'abstract'}
    useCounter : number;

    newInnerEnvironment() : _InnerTypeSubstitutor {
        return new _InnerTypeSubstitutor(this);
    }
    invertVariance() : void {
        this.covariantContext = !this.covariantContext;
    }
    visitSupertype(node : lib3.Supertype) : lib3.Supertype {
        if (node.typeArguments.isEmpty) return node;
        let before : number = this.useCounter;
        let typeArguments = node.typeArguments.map(this.visit.bind(this)).toList();
        if (this.useCounter == before) return node;
        return new lib3.Supertype(node.classNode,typeArguments);
    }
    visitNamedType(node : lib3.NamedType) : lib3.NamedType {
        let before : number = this.useCounter;
        let type = this.visit(node.type);
        if (this.useCounter == before) return node;
        return new lib3.NamedType(node.name,type);
    }
    visit(node : lib3.DartType) : lib3.DartType {
        return node.accept(this);
    }
    visitInvalidType(node : lib3.InvalidType) : lib3.DartType {
        return node;
    }
    visitDynamicType(node : lib3.DynamicType) : lib3.DartType {
        return node;
    }
    visitVoidType(node : lib3.VoidType) : lib3.DartType {
        return node;
    }
    visitBottomType(node : lib3.BottomType) : lib3.DartType {
        return node;
    }
    visitVector(node : lib3.VectorType) : lib3.DartType {
        return node;
    }
    visitInterfaceType(node : lib3.InterfaceType) : lib3.DartType {
        if (node.typeArguments.isEmpty) return node;
        let before : number = this.useCounter;
        let typeArguments = node.typeArguments.map(this.visit.bind(this)).toList();
        if (this.useCounter == before) return node;
        return new lib3.InterfaceType(node.classNode,typeArguments);
    }
    visitTypedefType(node : lib3.TypedefType) : lib3.DartType {
        if (node.typeArguments.isEmpty) return node;
        let before : number = this.useCounter;
        let typeArguments = node.typeArguments.map(this.visit.bind(this)).toList();
        if (this.useCounter == before) return node;
        return new lib3.TypedefType(node.typedefNode,typeArguments);
    }
    freshTypeParameters(parameters : core.DartList<lib3.TypeParameter>) : core.DartList<lib3.TypeParameter> {
        if (parameters.isEmpty) return new core.DartList.literal<lib3.TypeParameter>();
        return parameters.map(this.freshTypeParameter.bind(this)).toList();
    }
    @Abstract
    freshTypeParameter(node : lib3.TypeParameter) : lib3.TypeParameter{ throw 'abstract'}
    visitFunctionType(node : lib3.FunctionType) : lib3.DartType {
        let inner = node.typeParameters.isEmpty ? this : this.newInnerEnvironment();
        let before : number = this.useCounter;
        inner.invertVariance();
        let typeParameters = inner.freshTypeParameters(node.typeParameters);
        let positionalParameters = node.positionalParameters.isEmpty ? new core.DartList.literal<lib3.DartType>() : node.positionalParameters.map(inner.visit.bind(inner)).toList();
        let namedParameters = node.namedParameters.isEmpty ? new core.DartList.literal<lib3.NamedType>() : node.namedParameters.map(inner.visitNamedType.bind(inner)).toList();
        inner.invertVariance();
        let returnType = inner.visit(node.returnType);
        if (this.useCounter == before) return node;
        return new lib3.FunctionType(positionalParameters,returnType,{
            namedParameters : namedParameters,typeParameters : typeParameters,requiredParameterCount : node.requiredParameterCount});
    }
    bumpCountersUntil(target : _TypeSubstitutor) : void {
        let node = this;
        while (node != target){
            ++node.useCounter;
            node = node.outer;
        }
        ++target.useCounter;
    }
    getSubstitute(variable : lib3.TypeParameter) : lib3.DartType {
        let environment = this;
        while (environment != null){
            let replacement = environment.lookup(variable,this.covariantContext);
            if (replacement != null) {
                this.bumpCountersUntil(environment);
                return replacement;
            }
            environment = environment.outer;
        }
        return null;
    }
    visitTypeParameterType(node : lib3.TypeParameterType) : lib3.DartType {
        return (this.getSubstitute(node.parameter) || node);
    }
}

export namespace _TypeUnification {
    export type Constructors = '_TypeUnification';
    export type Interface = Omit<_TypeUnification, Constructors>;
}
@DartClass
export class _TypeUnification {
    substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    quantifiedVariables : core.DartSet<lib3.TypeParameter>;

    _universallyQuantifiedVariables : core.DartSet<lib3.TypeParameter>;

    success : boolean;

    constructor(type1 : lib3.DartType,type2 : lib3.DartType,quantifiedVariables : core.DartSet<lib3.TypeParameter>) {
    }
    @defaultConstructor
    _TypeUnification(type1 : lib3.DartType,type2 : lib3.DartType,quantifiedVariables : core.DartSet<lib3.TypeParameter>) {
        this.substitution = new core.DartMap.literal([
        ]);
        this._universallyQuantifiedVariables = new core.DartSet<lib3.TypeParameter>();
        this.success = true;
        this.quantifiedVariables = quantifiedVariables;
        this._unify(type1,type2);
        if (this.success && this.substitution.length >= 2) {
            for(let key of this.substitution.keys) {
                this.substitution.set(key,substituteDeep(this.substitution.get(key),this.substitution));
            }
        }
    }
    _substituteHead(type : lib3.TypeParameterType) : lib3.DartType {
        for(let i : number = 0; i <= this.substitution.length; ++i){
            let nextType : lib3.DartType = this.substitution.get(type.parameter);
            if (op(Op.EQUALS,nextType,null)) return type;
            if (is(nextType, lib3.TypeParameterType)) {
                type = nextType;
            }else {
                return nextType;
            }
        }
        throw 'Unexpected cycle found during unification';
    }
    _unify(type1 : lib3.DartType,type2 : lib3.DartType) : boolean {
        if (!this.success) return false;
        type1 = is(type1, lib3.TypeParameterType) ? this._substituteHead(type1) : type1;
        type2 = is(type2, lib3.TypeParameterType) ? this._substituteHead(type2) : type2;
        if (is(type1, lib3.DynamicType) && is(type2, lib3.DynamicType)) return true;
        if (is(type1, lib3.VoidType) && is(type2, lib3.VoidType)) return true;
        if (is(type1, lib3.InvalidType) && is(type2, lib3.InvalidType)) return true;
        if (is(type1, lib3.BottomType) && is(type2, lib3.BottomType)) return true;
        if (is(type1, lib3.VectorType) && is(type2, lib3.VectorType)) return true;
        if (is(type1, lib3.InterfaceType) && is(type2, lib3.InterfaceType)) {
            if (type1.classNode != type2.classNode) return this._fail();
            /* TODO (AssertStatementImpl) : assert (type1.typeArguments.length == type2.typeArguments.length); */;
            for(let i : number = 0; i < type1.typeArguments.length; ++i){
                if (!this._unify(type1.typeArguments[i],type2.typeArguments[i])) {
                    return false;
                }
            }
            return true;
        }
        if (is(type1, lib3.FunctionType) && is(type2, lib3.FunctionType)) {
            if (type1.typeParameters.length != type2.typeParameters.length || type1.positionalParameters.length != type2.positionalParameters.length || type1.namedParameters.length != type2.namedParameters.length || type1.requiredParameterCount != type2.requiredParameterCount) {
                return this._fail();
            }
            /* TODO (AssertStatementImpl) : assert (!type1.typeParameters.any(quantifiedVariables.contains)); */;
            /* TODO (AssertStatementImpl) : assert (!type2.typeParameters.any(quantifiedVariables.contains)); */;
            let leftInstance = new core.DartMap.literal([
            ]);
            let rightInstance = new core.DartMap.literal([
            ]);
            for(let i : number = 0; i < type1.typeParameters.length; ++i){
                let instantiator = new lib3.TypeParameter(type1.typeParameters[i].name);
                let instantiatorType = new lib3.TypeParameterType(instantiator);
                leftInstance.set(type1.typeParameters[i],instantiatorType);
                rightInstance.set(type2.typeParameters[i],instantiatorType);
                this._universallyQuantifiedVariables.add(instantiator);
            }
            for(let i : number = 0; i < type1.typeParameters.length; ++i){
                let left = substitute(type1.typeParameters[i].bound,leftInstance);
                let right = substitute(type2.typeParameters[i].bound,rightInstance);
                if (!this._unify(left,right)) return false;
            }
            for(let i : number = 0; i < type1.positionalParameters.length; ++i){
                let left = substitute(type1.positionalParameters[i],leftInstance);
                let right = substitute(type2.positionalParameters[i],rightInstance);
                if (!this._unify(left,right)) return false;
            }
            for(let i : number = 0; i < type1.namedParameters.length; ++i){
                if (type1.namedParameters[i].name != type2.namedParameters[i].name) {
                    return false;
                }
                let left = substitute(type1.namedParameters[i].type,leftInstance);
                let right = substitute(type2.namedParameters[i].type,rightInstance);
                if (!this._unify(left,right)) return false;
            }
            let leftReturn = substitute(type1.returnType,leftInstance);
            let rightReturn = substitute(type2.returnType,rightInstance);
            if (!this._unify(leftReturn,rightReturn)) return false;
            return true;
        }
        if (is(type1, lib3.TypeParameterType) && is(type2, lib3.TypeParameterType) && op(Op.EQUALS,type1.parameter,type2.parameter)) {
            return true;
        }
        if (is(type1, lib3.TypeParameterType) && this.quantifiedVariables.contains(type1.parameter)) {
            return this._trySubstitution(type1.parameter,type2);
        }
        if (is(type2, lib3.TypeParameterType) && this.quantifiedVariables.contains(type2.parameter)) {
            return this._trySubstitution(type2.parameter,type1);
        }
        return this._fail();
    }
    _trySubstitution(variable : lib3.TypeParameter,type : lib3.DartType) : boolean {
        if (containsTypeVariable(type,this._universallyQuantifiedVariables)) {
            return this._fail();
        }
        this.substitution.set(variable,type);
        let deepSubstitute : lib3.DartType = substituteDeep(type,this.substitution);
        if (op(Op.EQUALS,deepSubstitute,null)) return this._fail();
        this.substitution.set(variable,deepSubstitute);
        return true;
    }
    _fail() : boolean {
        return this.success = false;
    }
}

export namespace _OccurrenceVisitor {
    export type Constructors = lib4.DartTypeVisitor.Constructors | '_OccurrenceVisitor';
    export type Interface = Omit<_OccurrenceVisitor, Constructors>;
}
@DartClass
export class _OccurrenceVisitor extends lib4.DartTypeVisitor<boolean> {
    variables : core.DartSet<lib3.TypeParameter>;

    constructor(variables : core.DartSet<lib3.TypeParameter>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _OccurrenceVisitor(variables : core.DartSet<lib3.TypeParameter>) {
        this.variables = variables;
    }
    visit(node : lib3.DartType) : boolean {
        return node.accept(this);
    }
    visitNamedType(node : lib3.NamedType) : boolean {
        return this.visit(node.type);
    }
    visitInvalidType(node : lib3.InvalidType) : boolean {
        return false;
    }
    visitDynamicType(node : lib3.DynamicType) : boolean {
        return false;
    }
    visitVoidType(node : lib3.VoidType) : boolean {
        return false;
    }
    visitVectorType(node : lib3.VectorType) : boolean {
        return false;
    }
    visitInterfaceType(node : lib3.InterfaceType) : boolean {
        return node.typeArguments.any(this.visit.bind(this));
    }
    visitTypedefType(node : lib3.TypedefType) : boolean {
        return node.typeArguments.any(this.visit.bind(this));
    }
    visitFunctionType(node : lib3.FunctionType) : boolean {
        return node.typeParameters.any(this.handleTypeParameter.bind(this)) || node.positionalParameters.any(this.visit.bind(this)) || node.namedParameters.any(this.visitNamedType.bind(this)) || this.visit(node.returnType);
    }
    visitTypeParameterType(node : lib3.TypeParameterType) : boolean {
        return op(Op.EQUALS,this.variables,null) || this.variables.contains(node.parameter);
    }
    handleTypeParameter(node : lib3.TypeParameter) : boolean {
        /* TODO (AssertStatementImpl) : assert (!variables.contains(node)); */;
        return node.bound.accept(this);
    }
}

export namespace _NullSubstitution {
    export type Constructors = Substitution.Constructors | '_NullSubstitution';
    export type Interface = Omit<_NullSubstitution, Constructors>;
}
@DartClass
export class _NullSubstitution extends Substitution {
    private static __$instance : _NullSubstitution;
    static get instance() : _NullSubstitution { 
        if (this.__$instance===undefined) {
            this.__$instance = new _NullSubstitution();
        }
        return this.__$instance;
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NullSubstitution() {
    }
    getSubstitute(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType {
        return new lib3.TypeParameterType(parameter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substituteType(node : lib3.DartType,_namedArguments? : {contravariant? : boolean}) : lib3.DartType {
        let {contravariant} = Object.assign({
            "contravariant" : false}, _namedArguments );
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substituteSupertype(node : lib3.Supertype) : lib3.Supertype {
        return node;
    }
}

export namespace _MapSubstitution {
    export type Constructors = Substitution.Constructors | '_MapSubstitution';
    export type Interface = Omit<_MapSubstitution, Constructors>;
}
@DartClass
export class _MapSubstitution extends Substitution {
    upper : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    lower : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    constructor(upper : core.DartMap<lib3.TypeParameter,lib3.DartType>,lower : core.DartMap<lib3.TypeParameter,lib3.DartType>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MapSubstitution(upper : core.DartMap<lib3.TypeParameter,lib3.DartType>,lower : core.DartMap<lib3.TypeParameter,lib3.DartType>) {
        this.upper = upper;
        this.lower = lower;
    }
    getSubstitute(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType {
        return upperBound ? this.upper.get(parameter) : this.lower.get(parameter);
    }
}

export namespace _TopSubstitutor {
    export type Constructors = _TypeSubstitutor.Constructors | '_TopSubstitutor';
    export type Interface = Omit<_TopSubstitutor, Constructors>;
}
@DartClass
export class _TopSubstitutor extends _TypeSubstitutor {
    substitution : Substitution;

    constructor(substitution : Substitution,contravariant : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TopSubstitutor(substitution : Substitution,contravariant : boolean) {
        super._TypeSubstitutor(null);
        this.substitution = substitution;
        if (contravariant) {
            this.invertVariance();
        }
    }
    lookup(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType {
        return this.substitution.getSubstitute(parameter,upperBound);
    }
    freshTypeParameter(node : lib3.TypeParameter) : lib3.TypeParameter {
        throw 'Create a fresh environment first';
    }
}

export namespace _ClassBottomSubstitution {
    export type Constructors = Substitution.Constructors | '_ClassBottomSubstitution';
    export type Interface = Omit<_ClassBottomSubstitution, Constructors>;
}
@DartClass
export class _ClassBottomSubstitution extends Substitution {
    class_ : lib3.Class;

    constructor(class_ : lib3.Class) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ClassBottomSubstitution(class_ : lib3.Class) {
        this.class_ = class_;
    }
    getSubstitute(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType {
        if (op(Op.EQUALS,parameter.parent,this.class_)) {
            return upperBound ? new lib3.BottomType() : new lib3.DynamicType();
        }
        return null;
    }
}

export namespace _CombinedSubstitution {
    export type Constructors = Substitution.Constructors | '_CombinedSubstitution';
    export type Interface = Omit<_CombinedSubstitution, Constructors>;
}
@DartClass
export class _CombinedSubstitution extends Substitution {
    first : Substitution;
    second : Substitution;

    constructor(first : Substitution,second : Substitution) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CombinedSubstitution(first : Substitution,second : Substitution) {
        this.first = first;
        this.second = second;
    }
    getSubstitute(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType {
        return (this.first.getSubstitute(parameter,upperBound) || this.second.getSubstitute(parameter,upperBound));
    }
}

export namespace _InnerTypeSubstitutor {
    export type Constructors = _TypeSubstitutor.Constructors | '_InnerTypeSubstitutor';
    export type Interface = Omit<_InnerTypeSubstitutor, Constructors>;
}
@DartClass
export class _InnerTypeSubstitutor extends _TypeSubstitutor {
    substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    constructor(outer : _TypeSubstitutor) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InnerTypeSubstitutor(outer : _TypeSubstitutor) {
        this.substitution = new core.DartMap.literal([
        ]);
        super._TypeSubstitutor(outer);
    }
    lookup(parameter : lib3.TypeParameter,upperBound : boolean) : lib3.DartType {
        return this.substitution.get(parameter);
    }
    freshTypeParameter(node : lib3.TypeParameter) : lib3.TypeParameter {
        let fresh = new lib3.TypeParameter(node.name);
        this.substitution.set(node,new lib3.TypeParameterType(fresh));
        fresh.bound = this.visit(node.bound);
        return fresh;
    }
}

export namespace _DeepTypeSubstitutor {
    export type Constructors = _InnerTypeSubstitutor.Constructors | '_DeepTypeSubstitutor';
    export type Interface = Omit<_DeepTypeSubstitutor, Constructors>;
}
@DartClass
export class _DeepTypeSubstitutor extends _InnerTypeSubstitutor {
    depth : number;

    isInfinite : boolean;

    constructor(substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>,outer? : _DeepTypeSubstitutor) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DeepTypeSubstitutor(substitution : core.DartMap<lib3.TypeParameter,lib3.DartType>,outer? : _DeepTypeSubstitutor) {
        this.depth = 0;
        this.isInfinite = false;
        super._InnerTypeSubstitutor(outer);
        this.substitution.addAll(substitution);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    newInnerEnvironment() : _DeepTypeSubstitutor {
        return new _DeepTypeSubstitutor(new core.DartMap.literal([
        ]),this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterType(node : lib3.TypeParameterType) : lib3.DartType {
        let replacement : lib3.DartType = this.getSubstitute(node.parameter);
        if (op(Op.EQUALS,replacement,null)) return node;
        if (this.isInfinite) return replacement;
        ++this.depth;
        if (this.depth > this.substitution.length) {
            this.isInfinite = true;
            --this.depth;
            return replacement;
        }else {
            replacement = this.visit(replacement);
            this.substitution.set(node.parameter,replacement);
            --this.depth;
            return replacement;
        }
    }
}

export class properties {
}
