/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/dart/element/type.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartType {
    export type Constructors = 'DartType';
    export type Interface = Omit<DartType, Constructors>;
}
@DartClass
@Implements(any)
export class DartType implements any.Interface {
    private static __$EMPTY_LIST : core.DartList<DartType>;
    static get EMPTY_LIST() : core.DartList<DartType> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<DartType>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get displayName() : string{ throw 'abstract'}
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get isBottom() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDartAsyncFuture() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDartAsyncFutureOr() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDartCoreFunction() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDartCoreNull() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDynamic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isObject() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isUndefined() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isVoid() : boolean{ throw 'abstract'}
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    @Abstract
    flattenFutures(typeSystem : any) : DartType{ throw 'abstract'}
    @Abstract
    isAssignableTo(type : DartType) : boolean{ throw 'abstract'}
    @Abstract
    isMoreSpecificThan(type : DartType) : boolean{ throw 'abstract'}
    @Abstract
    isSubtypeOf(type : DartType) : boolean{ throw 'abstract'}
    @Abstract
    isSupertypeOf(type : DartType) : boolean{ throw 'abstract'}
    @Abstract
    resolveToBound(objectType : DartType) : DartType{ throw 'abstract'}
    @Abstract
    substitute2(argumentTypes : core.DartList<DartType>,parameterTypes : core.DartList<DartType>) : DartType{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartType() {
    }
}

export namespace FunctionType {
    export type Constructors = 'FunctionType';
    export type Interface = Omit<FunctionType, Constructors>;
}
@DartClass
@Implements(ParameterizedType)
export class FunctionType implements ParameterizedType.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get boundTypeParameters() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get namedParameterTypes() : core.DartMap<string,DartType>{ throw 'abstract'}
    @AbstractProperty
    get normalParameterNames() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get normalParameterTypes() : core.DartList<DartType>{ throw 'abstract'}
    @AbstractProperty
    get optionalParameterNames() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get optionalParameterTypes() : core.DartList<DartType>{ throw 'abstract'}
    @AbstractProperty
    get parameters() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get returnType() : DartType{ throw 'abstract'}
    @AbstractProperty
    get typeFormals() : core.DartList<any>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    instantiate(argumentTypes : core.DartList<DartType>) : FunctionType{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    isSubtypeOf(type : DartType) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    substitute2(argumentTypes : core.DartList<DartType>,parameterTypes : core.DartList<DartType>) : FunctionType{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    substitute3(argumentTypes : core.DartList<DartType>) : FunctionType{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FunctionType() {
    }
}

export namespace InterfaceType {
    export type Constructors = 'InterfaceType';
    export type Interface = Omit<InterfaceType, Constructors>;
}
@DartClass
@Implements(ParameterizedType)
export class InterfaceType implements ParameterizedType.Interface {
    private static __$EMPTY_LIST : core.DartList<InterfaceType>;
    static get EMPTY_LIST() : core.DartList<InterfaceType> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<InterfaceType>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get accessors() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get constructors() : core.DartList<any>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get interfaces() : core.DartList<InterfaceType>{ throw 'abstract'}
    @AbstractProperty
    get methods() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get mixins() : core.DartList<InterfaceType>{ throw 'abstract'}
    @AbstractProperty
    get superclass() : InterfaceType{ throw 'abstract'}
    @Abstract
    getGetter(name : string) : any{ throw 'abstract'}
    @Abstract
    getMethod(name : string) : any{ throw 'abstract'}
    @Abstract
    getSetter(name : string) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    instantiate(argumentTypes : core.DartList<DartType>) : InterfaceType{ throw 'abstract'}
    @Abstract
    isDirectSupertypeOf(type : InterfaceType) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    isMoreSpecificThan(type : DartType) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    isSubtypeOf(type : DartType) : boolean{ throw 'abstract'}
    @Abstract
    lookUpConstructor(name : string,library : any) : any{ throw 'abstract'}
    @Abstract
    lookUpGetter(name : string,library : any) : any{ throw 'abstract'}
    @Abstract
    lookUpGetterInSuperclass(name : string,library : any) : any{ throw 'abstract'}
    @Abstract
    lookUpInheritedGetter(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any{ throw 'abstract'}
    @Abstract
    lookUpInheritedGetterOrMethod(name : string,_namedArguments? : {library? : any}) : any{ throw 'abstract'}
    @Abstract
    lookUpInheritedMethod(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any{ throw 'abstract'}
    @Abstract
    lookUpInheritedSetter(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any{ throw 'abstract'}
    @Abstract
    lookUpMethod(name : string,library : any) : any{ throw 'abstract'}
    @Abstract
    lookUpMethodInSuperclass(name : string,library : any) : any{ throw 'abstract'}
    @Abstract
    lookUpSetter(name : string,library : any) : any{ throw 'abstract'}
    @Abstract
    lookUpSetterInSuperclass(name : string,library : any) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    substitute2(argumentTypes : core.DartList<DartType>,parameterTypes : core.DartList<DartType>) : InterfaceType{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    substitute4(argumentTypes : core.DartList<DartType>) : InterfaceType{ throw 'abstract'}
    static getSmartLeastUpperBound(first : InterfaceType,second : InterfaceType) : InterfaceType {
        return InterfaceTypeImpl.getSmartLeastUpperBound(first,second);
    }
    constructor() {
    }
    @defaultConstructor
    InterfaceType() {
    }
}

export namespace ParameterizedType {
    export type Constructors = 'ParameterizedType';
    export type Interface = Omit<ParameterizedType, Constructors>;
}
@DartClass
@Implements(DartType)
export class ParameterizedType implements DartType.Interface {
    @AbstractProperty
    get typeArguments() : core.DartList<DartType>{ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : core.DartList<any>{ throw 'abstract'}
    @Abstract
    instantiate(argumentTypes : core.DartList<DartType>) : ParameterizedType{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ParameterizedType() {
    }
}

export namespace TypeParameterType {
    export type Constructors = 'TypeParameterType';
    export type Interface = Omit<TypeParameterType, Constructors>;
}
@DartClass
@Implements(DartType)
export class TypeParameterType implements DartType.Interface {
    private static __$EMPTY_LIST : core.DartList<TypeParameterType>;
    static get EMPTY_LIST() : core.DartList<TypeParameterType> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<TypeParameterType>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get bound() : DartType{ throw 'abstract'}
    @AbstractProperty
    get definition() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeParameterType() {
    }
}

export class properties {
}
