/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_list_literals_infer_if_value_types_match_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let assertAOf : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void;
    assertAOf(new core.DartList.literal(properties._isInt,properties._isString));
    properties.assertBOf(new core.DartList.literal(properties._isInt,properties._isString));
    properties.assertCOf(new core.DartList.literal(properties._isInt,properties._isString));
    C.assertBOf(new core.DartList.literal(properties._isInt,properties._isString));
    C.assertCOf(new core.DartList.literal(properties._isInt,properties._isString));
    let c : C;
    c.assertAOf(new core.DartList.literal(properties._isInt,properties._isString));
    c.assertDOf(new core.DartList.literal(properties._isInt,properties._isString));
    let g : G<number>;
    g.assertAOf(new core.DartList.literal(properties._isInt,properties._isString));
    g.assertDOf(new core.DartList.literal(properties._isInt,properties._isString));
};
export namespace DartType {
    export type Constructors = 'DartType';
    export type Interface = Omit<DartType, Constructors>;
}
@DartClass
export class DartType {
    constructor() {
    }
    @defaultConstructor
    DartType() {
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    private static __$assertBOf : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void;
    static get assertBOf() : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void { 
        return this.__$assertBOf;
    }
    static set assertBOf(__$value : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void)  { 
        this.__$assertBOf = __$value;
    }

    static get assertCOf() : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void {
        return null;
    }
    assertAOf : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void;

    @AbstractProperty
    get assertDOf() : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void{ throw 'abstract'}
    method(assertEOf : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void) {
        this.assertAOf(new core.DartList.literal(properties._isInt,properties._isString));
        C.assertBOf(new core.DartList.literal(properties._isInt,properties._isString));
        C.assertCOf(new core.DartList.literal(properties._isInt,properties._isString));
        this.assertDOf(new core.DartList.literal(properties._isInt,properties._isString));
        assertEOf(new core.DartList.literal(properties._isInt,properties._isString));
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace G {
    export type Constructors = 'G';
    export type Interface<T> = Omit<G<T>, Constructors>;
}
@DartClass
export class G<T> {
    assertAOf : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void;

    @AbstractProperty
    get assertDOf() : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void{ throw 'abstract'}
    method(assertEOf : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void) {
        this.assertAOf(new core.DartList.literal(properties._isInt,properties._isString));
        this.this.assertAOf(new core.DartList.literal(properties._isInt,properties._isString));
        this.this.assertDOf(new core.DartList.literal(properties._isInt,properties._isString));
        assertEOf(new core.DartList.literal(properties._isInt,properties._isString));
    }
    constructor() {
    }
    @defaultConstructor
    G() {
    }
}

export class properties {
    private static __$_isInt : <T>(type : DartType) => void;
    static get _isInt() : <T>(type : DartType) => void { 
        return this.__$_isInt;
    }
    static set _isInt(__$value : <T>(type : DartType) => void)  { 
        this.__$_isInt = __$value;
    }

    private static __$_isString : <T>(type : DartType) => void;
    static get _isString() : <T>(type : DartType) => void { 
        return this.__$_isString;
    }
    static set _isString(__$value : <T>(type : DartType) => void)  { 
        this.__$_isString = __$value;
    }

    private static __$assertBOf : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void;
    static get assertBOf() : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void { 
        return this.__$assertBOf;
    }
    static set assertBOf(__$value : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void)  { 
        this.__$assertBOf = __$value;
    }

    static get assertCOf() : <S,T>(arg : core.DartList<<T>(type : DartType) => void>) => <T>(type : DartType) => void {
        return null;
    }
}
