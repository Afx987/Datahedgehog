/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/null_literal_should_not_infer_as_bottom.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : (f : (_ : core.DartObject) => number) => void = (f : (_ : core.DartObject) => number) : void =>  {
};
export var main : () => any = () =>  {
    let f = (x : core.DartObject) =>  {
        return null;
    };
    let y : string = f(42);
    f = (x : any) =>  {
        return 'hello';
    };
    let g = null;
    g = 'hello';
    (new core.DartString(g).foo());
    properties.h = 'hello';
    (properties.h.foo());
    foo((x : any) =>  {
        return null;
    });
    foo((x : any) =>  {
        return throw "not implemented";
    });
};
export class properties {
    private static __$h;
    static get h() { 
        if (this.__$h===undefined) {
            this.__$h = null;
        }
        return this.__$h;
    }
    static set h(__$value : any)  { 
        this.__$h = __$value;
    }

}
