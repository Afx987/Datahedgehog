/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/type_environment.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./core_types";
import * as lib4 from "./class_hierarchy";
import * as lib5 from "./ast";
import * as lib6 from "./type_algebra";

export namespace SubtypeTester {
    export type Constructors = 'SubtypeTester';
    export type Interface = Omit<SubtypeTester, Constructors>;
}
@DartClass
export class SubtypeTester {
    @AbstractProperty
    get objectType() : lib5.InterfaceType{ throw 'abstract'}
    @AbstractProperty
    get rawFunctionType() : lib5.InterfaceType{ throw 'abstract'}
    @AbstractProperty
    get hierarchy() : lib4.ClassHierarchy{ throw 'abstract'}
    isBottom(type : lib5.DartType) : boolean {
        return is(type, lib5.BottomType);
    }
    isTop(type : lib5.DartType) : boolean {
        return is(type, lib5.DynamicType) || is(type, lib5.VoidType) || op(Op.EQUALS,type,this.objectType);
    }
    isSubtypeOf(subtype : lib5.DartType,supertype : lib5.DartType) : boolean {
        subtype = subtype.unalias;
        supertype = supertype.unalias;
        if (core.identical(subtype,supertype)) return true;
        if (this.isBottom(subtype)) return true;
        if (this.isTop(supertype)) return true;
        if (is(subtype, lib5.InterfaceType) && is(supertype, lib5.InterfaceType)) {
            let upcastType = this.hierarchy.getTypeAsInstanceOf(subtype,supertype.classNode);
            if (op(Op.EQUALS,upcastType,null)) return false;
            for(let i : number = 0; i < upcastType.typeArguments.length; ++i){
                if (!this.isSubtypeOf(upcastType.typeArguments[i],supertype.typeArguments[i])) {
                    return false;
                }
            }
            return true;
        }
        if (is(subtype, lib5.TypeParameterType)) {
            if (is(supertype, lib5.TypeParameterType) && op(Op.EQUALS,subtype.parameter,supertype.parameter)) {
                return true;
            }
            return this.isSubtypeOf(subtype.parameter.bound,supertype);
        }
        if (is(subtype, lib5.FunctionType)) {
            if (op(Op.EQUALS,supertype,this.rawFunctionType)) return true;
            if (is(supertype, lib5.FunctionType)) {
                return this._isFunctionSubtypeOf(subtype,supertype);
            }
        }
        return false;
    }
    _isFunctionSubtypeOf(subtype : lib5.FunctionType,supertype : lib5.FunctionType) : boolean {
        if (subtype.requiredParameterCount > supertype.requiredParameterCount) {
            return false;
        }
        if (subtype.positionalParameters.length < supertype.positionalParameters.length) {
            return false;
        }
        if (subtype.typeParameters.length != supertype.typeParameters.length) {
            return false;
        }
        if (subtype.typeParameters.isNotEmpty) {
            let substitution = new core.DartMap.literal([
            ]);
            for(let i : number = 0; i < subtype.typeParameters.length; ++i){
                let subParameter = subtype.typeParameters[i];
                let superParameter = supertype.typeParameters[i];
                substitution.set(subParameter,new lib5.TypeParameterType(superParameter));
            }
            for(let i : number = 0; i < subtype.typeParameters.length; ++i){
                let subParameter = subtype.typeParameters[i];
                let superParameter = supertype.typeParameters[i];
                let subBound = lib6.substitute(subParameter.bound,substitution);
                if (!this.isSubtypeOf(superParameter.bound,subBound)) {
                    return false;
                }
            }
            subtype = lib6.substitute(subtype.withoutTypeParameters,substitution);
        }
        if (!this.isSubtypeOf(subtype.returnType,supertype.returnType)) {
            return false;
        }
        for(let i : number = 0; i < supertype.positionalParameters.length; ++i){
            let supertypeParameter = supertype.positionalParameters[i];
            let subtypeParameter = subtype.positionalParameters[i];
            if (!this.isSubtypeOf(supertypeParameter,subtypeParameter)) {
                return false;
            }
        }
        let subtypeNameIndex : number = 0;
        for(let supertypeParameter of supertype.namedParameters) {
            while (subtypeNameIndex < subtype.namedParameters.length && subtype.namedParameters[subtypeNameIndex].name != supertypeParameter.name){
                ++subtypeNameIndex;
            }
            if (subtypeNameIndex == subtype.namedParameters.length) return false;
            let subtypeParameter : lib5.NamedType = subtype.namedParameters[subtypeNameIndex];
            if (!this.isSubtypeOf(supertypeParameter.type,subtypeParameter.type)) {
                return false;
            }
        }
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    SubtypeTester() {
    }
}

export namespace TypeEnvironment {
    export type Constructors = SubtypeTester.Constructors | 'TypeEnvironment';
    export type Interface = Omit<TypeEnvironment, Constructors>;
}
@DartClass
export class TypeEnvironment extends SubtypeTester {
    coreTypes : lib3.CoreTypes;

    hierarchy : lib4.ClassHierarchy;

    thisType : lib5.InterfaceType;

    returnType : lib5.DartType;

    yieldType : lib5.DartType;

    currentAsyncMarker : lib5.AsyncMarker;

    errorHandler : (node : lib5.TreeNode,message : string) => void;

    constructor(coreTypes : lib3.CoreTypes,hierarchy : lib4.ClassHierarchy) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeEnvironment(coreTypes : lib3.CoreTypes,hierarchy : lib4.ClassHierarchy) {
        this.currentAsyncMarker = lib5.AsyncMarker.Sync;
        this.coreTypes = coreTypes;
        this.hierarchy = hierarchy;
    }
    get objectType() : lib5.InterfaceType {
        return this.coreTypes.objectClass.rawType;
    }
    get nullType() : lib5.InterfaceType {
        return this.coreTypes.nullClass.rawType;
    }
    get boolType() : lib5.InterfaceType {
        return this.coreTypes.boolClass.rawType;
    }
    get intType() : lib5.InterfaceType {
        return this.coreTypes.intClass.rawType;
    }
    get numType() : lib5.InterfaceType {
        return this.coreTypes.numClass.rawType;
    }
    get doubleType() : lib5.InterfaceType {
        return this.coreTypes.doubleClass.rawType;
    }
    get stringType() : lib5.InterfaceType {
        return this.coreTypes.stringClass.rawType;
    }
    get symbolType() : lib5.InterfaceType {
        return this.coreTypes.symbolClass.rawType;
    }
    get typeType() : lib5.InterfaceType {
        return this.coreTypes.typeClass.rawType;
    }
    get rawFunctionType() : lib5.InterfaceType {
        return this.coreTypes.functionClass.rawType;
    }
    get intClass() : lib5.Class {
        return this.coreTypes.intClass;
    }
    get numClass() : lib5.Class {
        return this.coreTypes.numClass;
    }
    literalListType(elementType : lib5.DartType) : lib5.InterfaceType {
        return new lib5.InterfaceType(this.coreTypes.listClass,new core.DartList.literal<lib5.DartType>(elementType));
    }
    literalMapType(key : lib5.DartType,value : lib5.DartType) : lib5.InterfaceType {
        return new lib5.InterfaceType(this.coreTypes.mapClass,new core.DartList.literal<lib5.DartType>(key,value));
    }
    iterableType(type : lib5.DartType) : lib5.InterfaceType {
        return new lib5.InterfaceType(this.coreTypes.iterableClass,new core.DartList.literal<lib5.DartType>(type));
    }
    streamType(type : lib5.DartType) : lib5.InterfaceType {
        return new lib5.InterfaceType(this.coreTypes.streamClass,new core.DartList.literal<lib5.DartType>(type));
    }
    futureType(type : lib5.DartType) : lib5.InterfaceType {
        return new lib5.InterfaceType(this.coreTypes.futureClass,new core.DartList.literal<lib5.DartType>(type));
    }
    unfutureType(type : lib5.DartType) : lib5.DartType {
        return is(type, lib5.InterfaceType) && op(Op.EQUALS,type.classNode,this.coreTypes.futureClass) ? this.unfutureType(type.typeArguments[0]) : type;
    }
    typeError(node : lib5.TreeNode,message : string) : void {
        if (this.errorHandler != null) {
            this.errorHandler(node,message);
        }else {
            throw `${message} in ${node}`;
        }
    }
    isOverloadedArithmeticOperator(member : lib5.Procedure) : boolean {
        let class_ : lib5.Class = member.enclosingClass;
        if (op(Op.EQUALS,class_,this.coreTypes.intClass) || op(Op.EQUALS,class_,this.coreTypes.numClass)) {
            let name : string = member.name.name;
            return name == '+' || name == '-' || name == '*' || name == 'remainder' || name == '%';
        }
        return false;
    }
    getTypeOfOverloadedArithmetic(type1 : lib5.DartType,type2 : lib5.DartType) : lib5.DartType {
        if (op(Op.EQUALS,type1,type2)) return type1;
        if (op(Op.EQUALS,type1,this.doubleType) || op(Op.EQUALS,type2,this.doubleType)) return this.doubleType;
        return this.numType;
    }
    isSealedClass(class_ : lib5.Class) : boolean {
        if (op(Op.EQUALS,class_,this.coreTypes.intClass) || op(Op.EQUALS,class_,this.coreTypes.doubleClass) || op(Op.EQUALS,class_,this.coreTypes.stringClass) || op(Op.EQUALS,class_,this.coreTypes.boolClass) || op(Op.EQUALS,class_,this.coreTypes.nullClass)) {
            return true;
        }
        return !this.hierarchy.hasProperSubtypes(class_);
    }
}

export class properties {
}
