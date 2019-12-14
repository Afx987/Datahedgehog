/** Library asset:datahedgehog_monitor/lib/lib/kernel/runtime/reify/types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./declarations";

export var isSubtypeOf : (a : ReifiedType,b : ReifiedType) => boolean = (a : ReifiedType,b : ReifiedType) : boolean =>  {
    return a._isSubtypeOf(b);
};
export var isMoreSpecificThan : (a : ReifiedType,b : ReifiedType) => boolean = (a : ReifiedType,b : ReifiedType) : boolean =>  {
    return a._isMoreSpecificThan(b);
};
export var getKind : (type : ReifiedType) => Kind = (type : ReifiedType) : Kind =>  {
    return type._kind;
};
export var asInstanceOf : (type : Interface,declaration : lib3.Class) => ReifiedType = (type : Interface,declaration : lib3.Class) : ReifiedType =>  {
    return type.asInstanceOf(declaration);
};
export var getTypeArguments : (type : Interface) => core.DartList<ReifiedType> = (type : Interface) : core.DartList<ReifiedType> =>  {
    return type._typeArguments;
};
export var isDynamic : (type : ReifiedType) => boolean = (type : ReifiedType) : boolean =>  {
    return type._isDynamic;
};
export var isFunction : (type : ReifiedType) => boolean = (type : ReifiedType) : boolean =>  {
    return type._isFunction;
};
export var isInterface : (type : ReifiedType) => boolean = (type : ReifiedType) : boolean =>  {
    return type._isInterface;
};
export var isIntersection : (type : ReifiedType) => boolean = (type : ReifiedType) : boolean =>  {
    return type._isIntersection;
};
export var isVariable : (type : ReifiedType) => boolean = (type : ReifiedType) : boolean =>  {
    return type._isVariable;
};
export var isVoid : (type : ReifiedType) => boolean = (type : ReifiedType) : boolean =>  {
    return type._isVoid;
};
export var isObject : (type : ReifiedType) => boolean = (type : ReifiedType) : boolean =>  {
    return false;
};
export var getSupertype : (type : any) => ReifiedType = (type : any) : ReifiedType =>  {
    return type._supertype;
};
export var getInterfaces : (type : Interface) => core.DartIterable<ReifiedType> = (type : Interface) : core.DartIterable<ReifiedType> =>  {
    return type._interfaces;
};
export var subst : (type : ReifiedType,arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) => ReifiedType = (type : ReifiedType,arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : ReifiedType =>  {
    return type._subst(arguments,parameters);
};
export var _intersection : (a : ReifiedType,b : ReifiedType) => ReifiedType = (a : ReifiedType,b : ReifiedType) : ReifiedType =>  {
    if (op(Op.EQUALS,a,null)) return b;
    if (op(Op.EQUALS,b,null)) return a;
    if (op(Op.EQUALS,a,b)) return a;
    return new Intersection(a,b);
};
export var getBoundOrNull : (type : ReifiedType) => ReifiedType = (type : ReifiedType) : ReifiedType =>  {
    if (op(Op.EQUALS,type,null)) return null;
    if (!type._isVariable) return null;
    let tv : TypeVariable = type;
    return tv.bound;
};
export enum Kind {
    Bottom,
    Dynamic,
    Function,
    Interface,
    Intersection,
    Variable,
    Void
}

export namespace ReifiedType {
    export type Constructors = 'ReifiedType';
    export type Interface = Omit<ReifiedType, Constructors>;
}
@DartClass
export class ReifiedType {
    _kind : Kind;

    constructor(_kind : Kind) {
    }
    @defaultConstructor
    ReifiedType(_kind : Kind) {
        this._kind = _kind;
    }
    get _isDynamic() : boolean {
        return op(Op.EQUALS,this._kind,Kind.Dynamic);
    }
    get _isFunction() : boolean {
        return op(Op.EQUALS,this._kind,Kind.Function);
    }
    get _isInterface() : boolean {
        return op(Op.EQUALS,this._kind,Kind.Interface);
    }
    get _isIntersection() : boolean {
        return op(Op.EQUALS,this._kind,Kind.Intersection);
    }
    get _isVariable() : boolean {
        return op(Op.EQUALS,this._kind,Kind.Variable);
    }
    get _isVoid() : boolean {
        return op(Op.EQUALS,this._kind,Kind.Void);
    }
    get _isObject() : boolean {
        return false;
    }
    @Abstract
    _isMoreSpecificThan(type : ReifiedType) : boolean{ throw 'abstract'}
    @Abstract
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : ReifiedType{ throw 'abstract'}
    _isSubtypeOf(type : ReifiedType) : boolean {
        return this._subst(new core.DartList.literal<ReifiedType>(new Bottom()),new core.DartList.literal<ReifiedType>(new Dynamic()))._isMoreSpecificThan(type);
    }
    _isAssignableTo(type : ReifiedType) : boolean {
        if (type._isDynamic) return true;
        return this._isSubtypeOf(type) || type._isSubtypeOf(this);
    }
}

export namespace FunctionTypeRelation {
    export type Constructors = 'FunctionTypeRelation';
    export type Interface = Omit<FunctionTypeRelation, Constructors>;
}
@DartClass
export class FunctionTypeRelation {
    constructor() {
    }
    @defaultConstructor
    FunctionTypeRelation() {
    }
    areRelated(self : FunctionType,type : ReifiedType,_namedArguments? : {isMoreSpecific? : boolean}) : boolean {
        let {isMoreSpecific} = Object.assign({
        }, _namedArguments );
        if (!type._isFunction) {
            return this.arePartsRelated(self._supertype,type);
        }
        let other : FunctionType = type;
        if (!other._returnType._isVoid) {
            if (!this.arePartsRelated(self._returnType,other._returnType)) return false;
        }
        let positionalParameters : number = self.hasNamedParameters ? self.requiredParameters : self.parameters;
        let otherPositionalParameters : number = other.hasNamedParameters ? other.requiredParameters : other.parameters;
        if (self.requiredParameters > other.requiredParameters) return false;
        if (positionalParameters < otherPositionalParameters) return false;
        for(let i : number = 0; i < otherPositionalParameters; i++){
            if (!this.arePartsRelated(self._encodedParameters[i],other._encodedParameters[i])) {
                return false;
            }
        }
        if (!other.hasNamedParameters) true;
        let j : number = positionalParameters;
        for(let i : number = otherPositionalParameters; i < other._encodedParameters.length; i += 2){
            let name : string = other._encodedParameters[i];
            for(; j < self._encodedParameters.length; j += 2){
                if (op(Op.EQUALS,self._encodedParameters[j],name)) break;
            }
            if (j == self._encodedParameters.length) return false;
            if (!this.arePartsRelated(self._encodedParameters[j + 1],other._encodedParameters[i + 1])) {
                return false;
            }
        }
        return true;
    }
    @Abstract
    arePartsRelated(a : ReifiedType,b : ReifiedType) : boolean{ throw 'abstract'}
}

export namespace Dynamic {
    export type Constructors = ReifiedType.Constructors | 'Dynamic';
    export type Interface = Omit<Dynamic, Constructors>;
}
@DartClass
export class Dynamic extends ReifiedType {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Dynamic() {
        super.ReifiedType(Kind.Dynamic);
    }
    _isMoreSpecificThan(type : ReifiedType) : boolean {
        return type._isDynamic;
    }
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : ReifiedType {
        let index : number = 0;
        for(let parameter of parameters) {
            if (parameter._isDynamic) return arguments[index];
            index++;
        }
        return this;
    }
    toString() : string {
        return "dynamic";
    }
}

export namespace Bottom {
    export type Constructors = ReifiedType.Constructors | 'Bottom';
    export type Interface = Omit<Bottom, Constructors>;
}
@DartClass
export class Bottom extends ReifiedType {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Bottom() {
        super.ReifiedType(Kind.Bottom);
    }
    _isMoreSpecificThan(type : ReifiedType) : boolean {
        return true;
    }
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : ReifiedType {
        return this;
    }
    toString() : string {
        return "<bottom>";
    }
}

export namespace Void {
    export type Constructors = ReifiedType.Constructors | 'Void';
    export type Interface = Omit<Void, Constructors>;
}
@DartClass
export class Void extends ReifiedType {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Void() {
        super.ReifiedType(Kind.Void);
    }
    _isMoreSpecificThan(type : ReifiedType) : boolean {
        return type._isVoid;
    }
    _isSubtypeOf(type : ReifiedType) : boolean {
        return type._isVoid || type._isDynamic;
    }
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : ReifiedType {
        return this;
    }
    toString() : string {
        return "void";
    }
}

export namespace Interface {
    export type Constructors = ReifiedType.Constructors | 'Interface';
    export type Interface = Omit<Interface, Constructors>;
}
@DartClass
@Implements(core.Type)
export class Interface extends ReifiedType implements core.Type.Interface {
    _declaration : lib3.Class;

    _typeArguments : core.DartList<ReifiedType>;

    constructor(_declaration : lib3.Class,_typeArguments? : core.DartList<ReifiedType>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Interface(_declaration : lib3.Class,_typeArguments? : core.DartList<ReifiedType>) {
        _typeArguments = _typeArguments || new core.DartList.literal<ReifiedType>();
        super.ReifiedType(Kind.Interface);
        this._declaration = _declaration;
        this._typeArguments = _typeArguments;
    }
    get _isObject() : boolean {
        return op(Op.EQUALS,this._declaration.supertype,null);
    }
    get _supertype() : Interface {
        return ((_711_)=>(!!_711_)?_711_._subst(this._typeArguments,this._declaration.variables):null)(this._declaration.supertype);
    }
    get _interfaces() : core.DartIterable<Interface> {
        return this._declaration.interfaces.map((type : Interface) =>  {
            return type._subst(this._typeArguments,this._declaration.variables);
        });
    }
    get _callableType() : FunctionType {
        return ((_712_)=>(!!_712_)?_712_._subst(this._typeArguments,this._declaration.variables):null)(this._declaration.callableType);
    }
    _isMoreSpecificThan(type : ReifiedType) : boolean {
        if (type._isDynamic) return true;
        /* TODO (AssertStatementImpl) : assert (!type._isIntersection); */;
        if (type._isFunction) {
            return (((_713_)=>(!!_713_)?_713_._isMoreSpecificThan(type):null)(this._callableType) || false);
        }
        if (!type._isInterface) return false;
        if (op(Op.EQUALS,this,type)) return true;
        let supertype : ReifiedType = this.asInstanceOfType(type);
        if (op(Op.EQUALS,supertype,null)) {
            return (((_714_)=>(!!_714_)?_714_._isSubtypeOf(type):null)(((t)=>(!!t)?t._supertype:null)(this._declaration.callableType)) || false);
        }
        if (op(Op.EQUALS,type,supertype)) return true;
        switch (supertype._kind) {
            case Kind.Dynamic:
            case Kind.Variable:
                throw `internal error: ${supertype}`;
            case Kind.Interface:
                let s : Interface = supertype;
                let t : Interface = type;
                for(let i : number = 0; i < s._typeArguments.length; i++){
                    if (!s._typeArguments[i]._isMoreSpecificThan(t._typeArguments[i])) {
                        return false;
                    }
                }
                return true;
            case Kind.Intersection:
                return supertype._isMoreSpecificThan(type);
            default:
                throw `Internal error: unhandled kind '${type._kind}'`;
        }
    }
    _isSubtypeOf(type : ReifiedType) : boolean {
        if (type._isInterface) {
            let interface : Interface = type;
            if (interface._declaration != this._declaration) {
                let that : ReifiedType = this.asInstanceOf(interface._declaration);
                if (that != null) {
                    return that._isSubtypeOf(type);
                }
            }
        }
        return super._isSubtypeOf(type) || ((((_715_)=>(!!_715_)?_715_._isSubtypeOf(type):null)(this._callableType) || false));
    }
    asInstanceOf(other : lib3.Class) : ReifiedType {
        if (op(Op.EQUALS,this._declaration,other)) return this;
        let result : ReifiedType = ((_716_)=>(!!_716_)?_716_.asInstanceOf(other):null)(((_717_)=>(!!_717_)?_717_._subst(this._typeArguments,this._declaration.variables):null)(this._declaration.supertype));
        for(let interface of this._declaration.interfaces) {
            result = _intersection(result,interface._subst(this._typeArguments,this._declaration.variables).asInstanceOf(other));
        }
        return result;
    }
    asInstanceOfType(type : Interface) : ReifiedType {
        return this.asInstanceOf(type._declaration);
    }
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : Interface {
        let copy : core.DartList<ReifiedType>;
        let index : number = 0;
        for(let typeArgument of this._typeArguments) {
            let substitution : ReifiedType = typeArgument._subst(arguments,parameters);
            if (substitution != typeArgument) {
                if (copy == null) {
                    copy = new core.DartList.from(this._typeArguments);
                }
                copy[index] = substitution;
            }
            index++;
        }
        return copy == null ? this : new Interface(this._declaration,copy);
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write(this._declaration.name);
        if (this._typeArguments.isNotEmpty) {
            sb.write("<");
            sb.writeAll(this._typeArguments,", ");
            sb.write(">");
        }
        return `${sb}`;
    }
    get hashCode() : number {
        let code : number = 23;
        code = (71 * code + this._declaration.hashCode) & 1073741823;
        for(let typeArgument of this._typeArguments) {
            code = (71 * code + typeArgument.hashCode) & 1073741823;
        }
        return code;
    }
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, Interface)) {
            if (this._declaration != other._declaration) return false;
            if (core.identical(this._typeArguments,other._typeArguments)) return true;
            /* TODO (AssertStatementImpl) : assert (_typeArguments.length == other._typeArguments.length); */;
            for(let i : number = 0; i < this._typeArguments.length; i++){
                if (this._typeArguments[i] != other._typeArguments[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}

export namespace Intersection {
    export type Constructors = ReifiedType.Constructors | 'Intersection';
    export type Interface = Omit<Intersection, Constructors>;
}
@DartClass
export class Intersection extends ReifiedType {
    typeA : ReifiedType;

    typeB : ReifiedType;

    constructor(typeA : ReifiedType,typeB : ReifiedType) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Intersection(typeA : ReifiedType,typeB : ReifiedType) {
        super.ReifiedType(Kind.Intersection);
        this.typeA = typeA;
        this.typeB = typeB;
    }
    _isMoreSpecificThan(type : ReifiedType) : boolean {
        return this.typeA._isMoreSpecificThan(type) || this.typeB._isMoreSpecificThan(type);
    }
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : ReifiedType {
        let aSubstitution : ReifiedType = this.typeA._subst(arguments,parameters);
        let bSubstitution : ReifiedType = this.typeB._subst(arguments,parameters);
        return (op(Op.EQUALS,aSubstitution,this.typeA) && op(Op.EQUALS,bSubstitution,this.typeB)) ? this : _intersection(aSubstitution,bSubstitution);
    }
    toString() : string {
        return `{ ${this.typeA}, ${this.typeB} }`;
    }
}

export namespace TypeVariable {
    export type Constructors = ReifiedType.Constructors | 'TypeVariable';
    export type Interface = Omit<TypeVariable, Constructors>;
}
@DartClass
export class TypeVariable extends ReifiedType {
    _id : number;

    bound : ReifiedType;

    constructor(_id : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeVariable(_id : number) {
        super.ReifiedType(Kind.Variable);
        this._id = _id;
    }
    _isMoreSpecificThan(type : ReifiedType) : boolean {
        if (op(Op.EQUALS,type,this) || type._isDynamic || type._isObject) return true;
        let tortoise : ReifiedType = this.bound;
        if (op(Op.EQUALS,tortoise,type)) return true;
        let hare : ReifiedType = getBoundOrNull(this.bound);
        while (tortoise != hare){
            tortoise = getBoundOrNull(tortoise);
            if (op(Op.EQUALS,tortoise,type)) return true;
            hare = getBoundOrNull(getBoundOrNull(hare));
        }
        if (tortoise != null) {
            return false;
        }
        return this.bound._isMoreSpecificThan(type);
    }
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : ReifiedType {
        let index : number = 0;
        for(let parameter of parameters) {
            if (op(Op.EQUALS,this,parameter)) return arguments[index];
            index++;
        }
        return this;
    }
    toString() : string {
        return `#${this._id}`;
    }
}

export namespace FunctionType {
    export type Constructors = ReifiedType.Constructors | 'FunctionType';
    export type Interface = Omit<FunctionType, Constructors>;
}
@DartClass
export class FunctionType extends ReifiedType {
    _supertype : ReifiedType;

    _returnType : ReifiedType;

    _data : number;

    _encodedParameters : core.DartList<any>;

    private static __$subtypeRelation : FunctionTypeRelation;
    static get subtypeRelation() : FunctionTypeRelation { 
        if (this.__$subtypeRelation===undefined) {
            this.__$subtypeRelation = new FunctionSubtypeRelation();
        }
        return this.__$subtypeRelation;
    }

    private static __$moreSpecificRelation : FunctionTypeRelation;
    static get moreSpecificRelation() : FunctionTypeRelation { 
        if (this.__$moreSpecificRelation===undefined) {
            this.__$moreSpecificRelation = new FunctionMoreSpecificRelation();
        }
        return this.__$moreSpecificRelation;
    }

    constructor(_supertype : ReifiedType,_returnType : ReifiedType,_data : number,_encodedParameters : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionType(_supertype : ReifiedType,_returnType : ReifiedType,_data : number,_encodedParameters : core.DartList<any>) {
        super.ReifiedType(Kind.Function);
        this._supertype = _supertype;
        this._returnType = _returnType;
        this._data = _data;
        this._encodedParameters = _encodedParameters;
    }
    get hasNamedParameters() : boolean {
        return (this._data & 1) == 1;
    }
    get optionalParameters() : number {
        return this._data >> 1;
    }
    get parameters() : number {
        return this.hasNamedParameters ? this._encodedParameters.length - this.optionalParameters : this._encodedParameters.length;
    }
    get requiredParameters() : number {
        return this.hasNamedParameters ? this._encodedParameters.length - this.optionalParameters * 2 : this._encodedParameters.length - this.optionalParameters;
    }
    _isSubtypeOf(type : ReifiedType) : boolean {
        return FunctionType.subtypeRelation.areRelated(this,type);
    }
    _isMoreSpecificThan(type : ReifiedType) : boolean {
        return FunctionType.moreSpecificRelation.areRelated(this,type);
    }
    _subst(arguments : core.DartList<ReifiedType>,parameters : core.DartList<ReifiedType>) : FunctionType {
        let substitutedParameters : core.DartList<any>;
        let positionalParameters : number = this.hasNamedParameters ? this.requiredParameters : this.parameters;
        for(let i : number = 0; i < this._encodedParameters.length; i++){
            if (i >= positionalParameters) {
                i++;
            }
            let type : ReifiedType = this._encodedParameters[i];
            let substitution : ReifiedType = type._subst(arguments,parameters);
            if (substitution != type) {
                if (substitutedParameters == null) {
                    substitutedParameters = new core.DartList.from(this._encodedParameters);
                }
                substitutedParameters[i] = substitution;
            }
        }
        let substitutedReturnType : ReifiedType = this._returnType._subst(arguments,parameters);
        if (substitutedParameters == null) {
            if (op(Op.EQUALS,this._returnType,substitutedReturnType)) return this;
            substitutedParameters = this._encodedParameters;
        }
        return new FunctionType(this._supertype,substitutedReturnType,this._data,substitutedParameters);
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write("(");
        let first : boolean = true;
        for(let i : number = 0; i < this.requiredParameters; i++){
            if (!first) {
                sb.write(", ");
            }
            sb.write(this._encodedParameters[i]);
            first = false;
        }
        if (this.requiredParameters != this.parameters) {
            if (!first) {
                sb.write(", ");
            }
            if (this.hasNamedParameters) {
                sb.write("{");
                first = true;
                for(let i : number = this.requiredParameters; i < this._encodedParameters.length; i += 2){
                    if (!first) {
                        sb.write(", ");
                    }
                    sb.write(this._encodedParameters[i + 1]);
                    sb.write(" ");
                    sb.write(this._encodedParameters[i]);
                    first = false;
                }
                sb.write("}");
            }else {
                sb.write("[");
                first = true;
                for(let i : number = this.requiredParameters; i < this._encodedParameters.length; i++){
                    if (!first) {
                        sb.write(", ");
                    }
                    sb.write(this._encodedParameters[i]);
                    first = false;
                }
                sb.write("]");
            }
        }
        sb.write(") -> ");
        sb.write(this._returnType);
        return `${sb}`;
    }
}

export namespace FunctionSubtypeRelation {
    export type Constructors = FunctionTypeRelation.Constructors | 'FunctionSubtypeRelation';
    export type Interface = Omit<FunctionSubtypeRelation, Constructors>;
}
@DartClass
export class FunctionSubtypeRelation extends FunctionTypeRelation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionSubtypeRelation() {
    }
    arePartsRelated(a : ReifiedType,b : ReifiedType) : boolean {
        return a._isAssignableTo(b);
    }
}

export namespace FunctionMoreSpecificRelation {
    export type Constructors = FunctionTypeRelation.Constructors | 'FunctionMoreSpecificRelation';
    export type Interface = Omit<FunctionMoreSpecificRelation, Constructors>;
}
@DartClass
export class FunctionMoreSpecificRelation extends FunctionTypeRelation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionMoreSpecificRelation() {
    }
    arePartsRelated(a : ReifiedType,b : ReifiedType) : boolean {
        return a._isMoreSpecificThan(b);
    }
}

export class properties {
}
