/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/static.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var use : (x : any) => any = (x : any) =>  {
    if (op(Op.EQUALS,x,new core.DartDateTime.now().millisecondsSinceEpoch)) throw "Shouldn't happen";
};
export var main : () => any = () =>  {
    try {
        Foo.staticConstant;
        use(Foo.staticConstant);
        Foo.staticField;
        use(Foo.staticField);
        Foo.staticFunction.bind(Foo);
        use(Foo.staticFunction.bind(Foo));
        Foo.staticGetter;
        use(Foo.staticGetter);
        Foo.staticSetter;
        use(Foo.staticSetter);
        Foo.staticConstant++;
        use(Foo.staticConstant++);
        Foo.staticField++;
        use(Foo.staticField++);
        Foo.staticFunction.bind(Foo)++;
        use(Foo.staticFunction.bind(Foo)++);
        Foo.staticGetter++;
        use(Foo.staticGetter++);
        Foo.staticSetter++;
        use(Foo.staticSetter++);
        ++Foo.staticConstant;
        use(++Foo.staticConstant);
        ++Foo.staticField;
        use(++Foo.staticField);
        ++Foo.staticFunction.bind(Foo);
        use(++Foo.staticFunction.bind(Foo));
        ++Foo.staticGetter;
        use(++Foo.staticGetter);
        ++Foo.staticSetter;
        use(++Foo.staticSetter);
        Foo.staticConstant();
        use(Foo.staticConstant());
        Foo.staticField();
        use(Foo.staticField());
        Foo.staticFunction();
        use(Foo.staticFunction());
        Foo.staticGetter();
        use(Foo.staticGetter());
        Foo.staticSetter();
        use(Foo.staticSetter());
        Foo.staticConstant = 87;
        use(Foo.staticConstant = 87);
        Foo.staticField = 87;
        use(Foo.staticField = 87);
        Foo.staticFunction.bind(Foo);
        use(Foo.staticFunction.bind(Foo));
        Foo.staticGetter = 87;
        use(Foo.staticGetter = 87);
        Foo.staticSetter = 87;
        use(Foo.staticSetter = 87);
        Foo.staticConstant = ( Foo.staticConstant ) || ( 87 );
        use(Foo.staticConstant = ( Foo.staticConstant ) || ( 87 ));
        Foo.staticField = ( Foo.staticField ) || ( 87 );
        use(Foo.staticField = ( Foo.staticField ) || ( 87 ));
        Foo.staticFunction.bind(Foo);
        use(Foo.staticFunction.bind(Foo));
        Foo.staticGetter = ( Foo.staticGetter ) || ( 87 );
        use(Foo.staticGetter = ( Foo.staticGetter ) || ( 87 ));
        Foo.staticSetter = ( Foo.staticSetter ) || ( 87 );
        use(Foo.staticSetter = ( Foo.staticSetter ) || ( 87 ));
    } catch (__error__) {

        if (is(__error__,core.NoSuchMethodError)){
        }
    }
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    private static __$staticConstant;
    static get staticConstant() { 
        if (this.__$staticConstant===undefined) {
            this.__$staticConstant = 42;
        }
        return this.__$staticConstant;
    }

    private static __$staticField;
    static get staticField() { 
        if (this.__$staticField===undefined) {
            this.__$staticField = 42;
        }
        return this.__$staticField;
    }
    static set staticField(__$value : any)  { 
        this.__$staticField = __$value;
    }

    static staticFunction() {
    }
    static get staticGetter() {
        return null;
    }
    static set staticSetter(_ : any) {
    }
    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export class properties {
}
