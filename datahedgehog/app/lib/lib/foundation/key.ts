/** Library asset:datahedgehog_monitor/lib/lib/foundation/key.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Key {
    export type Constructors = 'empty';
    export type Interface = Omit<Key, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Key {
    constructor(value : string) {
    }
    @defaultFactory
    static $Key(value : string) : Key {
        return new ValueKey<string>(value);
    }
    @namedConstructor
    empty() {
    }
    static empty : new() => Key;

}

export namespace _TypeLiteral {
    export type Constructors = '_TypeLiteral';
    export type Interface<T> = Omit<_TypeLiteral<T>, Constructors>;
}
@DartClass
export class _TypeLiteral<T> {
    get type() : core.Type {
        return T;
    }
    constructor() {
    }
    @defaultConstructor
    _TypeLiteral() {
    }
}

export namespace LocalKey {
    export type Constructors = Key.Constructors | 'LocalKey';
    export type Interface = Omit<LocalKey, Constructors>;
}
@DartClass
export class LocalKey extends Key {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalKey() {
        super.empty();
    }
}

export namespace ValueKey {
    export type Constructors = LocalKey.Constructors | 'ValueKey';
    export type Interface<T> = Omit<ValueKey<T>, Constructors>;
}
@DartClass
export class ValueKey<T> extends LocalKey {
    constructor(value : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ValueKey(value : T) {
        this.value = value;
    }
    value : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : ValueKey<T> = other;
        return op(Op.EQUALS,this.value,typedOther.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.runtimeType,this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let valueString : string = op(Op.EQUALS,T,string) ? `<'${this.value}'>` : `<${this.value}>`;
        if (op(Op.EQUALS,this.runtimeType,_TypeLiteral().type)) return `[${valueString}]`;
        return `[${T} ${valueString}]`;
    }
}

export class properties {
}
