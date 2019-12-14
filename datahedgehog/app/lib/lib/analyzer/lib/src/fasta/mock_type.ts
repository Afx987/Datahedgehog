/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/mock_type.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace MockType {
    export type Constructors = 'MockType';
    export type Interface = Omit<MockType, Constructors>;
}
@DartClass
export class MockType extends any {
    get displayName() : string {
        return internalError("not supported.");
    }
    get element() : any {
        return internalError("not supported.");
    }
    get isBottom() : boolean {
        return internalError("not supported.");
    }
    get isDartAsyncFuture() : boolean {
        return internalError("not supported.");
    }
    get isDartAsyncFutureOr() : boolean {
        return internalError("not supported.");
    }
    get isDartCoreFunction() : boolean {
        return internalError("not supported.");
    }
    get isDynamic() : boolean {
        return internalError("not supported.");
    }
    get isObject() : boolean {
        return internalError("not supported.");
    }
    get isUndefined() : boolean {
        return internalError("not supported.");
    }
    get isVoid() : boolean {
        return internalError("not supported.");
    }
    get name() : string {
        return internalError("not supported.");
    }
    flattenFutures(typeSystem : any) : any {
        return internalError("not supported.");
    }
    isAssignableTo(type : any) : boolean {
        return internalError("not supported.");
    }
    isMoreSpecificThan(type : any) : boolean {
        return internalError("not supported.");
    }
    isSubtypeOf(type : any) : boolean {
        return internalError("not supported.");
    }
    isSupertypeOf(type : any) : boolean {
        return internalError("not supported.");
    }
    resolveToBound(objectType : any) : any {
        return internalError("not supported.");
    }
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>) : any {
        return internalError("not supported.");
    }
    get typeArguments() : core.DartList<any> {
        return internalError("not supported.");
    }
    get typeParameters() : core.DartList<any> {
        return internalError("not supported.");
    }
    instantiate(argumentTypes : core.DartList<any>) : any {
        return internalError("not supported.");
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockType() {
    }
}

export namespace MockInterfaceType {
    export type Constructors = MockType.Constructors | 'MockInterfaceType';
    export type Interface = Omit<MockInterfaceType, Constructors>;
}
@DartClass
@Implements(any)
export class MockInterfaceType extends MockType implements any.Interface {
    get element() : any {
        return internalError("not supported.");
    }
    get accessors() : core.DartList<any> {
        return internalError("not supported.");
    }
    get constructors() : core.DartList<any> {
        return internalError("not supported.");
    }
    get interfaces() : core.DartList<any> {
        return internalError("not supported.");
    }
    get methods() : core.DartList<any> {
        return internalError("not supported.");
    }
    get mixins() : core.DartList<any> {
        return internalError("not supported.");
    }
    get superclass() : any {
        return internalError("not supported.");
    }
    getGetter(name : string) : any {
        return internalError("not supported.");
    }
    getMethod(name : string) : any {
        return internalError("not supported.");
    }
    getSetter(name : string) : any {
        return internalError("not supported.");
    }
    isDirectSupertypeOf(type : any) : boolean {
        return internalError("not supported.");
    }
    lookUpConstructor(name : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpGetter(name : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpGetterInSuperclass(name : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpInheritedGetter(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any {
        let {library,thisType} = Object.assign({
            "thisType" : true}, _namedArguments );
        return internalError("not supported.");
    }
    lookUpInheritedGetterOrMethod(name : string,_namedArguments? : {library? : any}) : any {
        let {library} = Object.assign({
        }, _namedArguments );
        return internalError("not supported.");
    }
    lookUpInheritedMethod(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any {
        let {library,thisType} = Object.assign({
            "thisType" : true}, _namedArguments );
        return internalError("not supported.");
    }
    lookUpInheritedSetter(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any {
        let {library,thisType} = Object.assign({
            "thisType" : true}, _namedArguments );
        return internalError("not supported.");
    }
    lookUpMethod(name : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpMethodInSuperclass(name : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpSetter(name : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpSetterInSuperclass(name : string,library : any) : any {
        return internalError("not supported.");
    }
    instantiate(argumentTypes : core.DartList<any>) : any {
        return internalError("not supported.");
    }
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>) : any {
        return internalError("not supported.");
    }
    substitute4(argumentTypes : core.DartList<any>) : any {
        return internalError("not supported.");
    }
    get isDartCoreNull() {
        return internalError("not supported.");
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockInterfaceType() {
    }
}

export class properties {
}
