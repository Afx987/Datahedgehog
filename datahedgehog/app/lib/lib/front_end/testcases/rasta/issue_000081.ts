/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000081.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    core.print(new Sub().hashCode);
    let l = new core.DartList.literal(null);
    l[0] = ( l[0] ) || ( "fisk" );
};
export namespace Base {
    export type Constructors = 'Base';
    export type Interface = Omit<Base, Constructors>;
}
@DartClass
export class Base {
    hashCode : number;

    constructor() {
    }
    @defaultConstructor
    Base() {
        this.hashCode = 42;
    }
}

export namespace Sub {
    export type Constructors = Base.Constructors | 'Sub';
    export type Interface = Omit<Sub, Constructors>;
}
@DartClass
export class Sub extends Base {
    _hashCode : number;

    get hashCode() {
        return this._hashCode = ( this._hashCode ) || ( super.hashCode );
    }
    foo() {
        this._hashCode = ( this._hashCode ) || ( super.hashCode );
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Sub() {
        this._hashCode = null;
    }
}

export class properties {
}
