/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/list_literals_top_level.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test1 : () => any = () =>  {
    properties.x1.add('hi');
    properties.x1.add(4.0);
    properties.x1.add(4);
    let y : core.DartList<number> = properties.x1;
};
export var test2 : () => any = () =>  {
    properties.x2.add('hi');
    properties.x2.add(4.0);
    let y : core.DartList<number> = properties.x2;
};
export var main : () => any = () =>  {
    test1();
    test2();
};
export class properties {
    private static __$x1;
    static get x1() { 
        if (this.__$x1===undefined) {
            this.__$x1 = new core.DartList.literal(1,2,3);
        }
        return this.__$x1;
    }
    static set x1(__$value : any)  { 
        this.__$x1 = __$value;
    }

    private static __$x2;
    static get x2() { 
        if (this.__$x2===undefined) {
            this.__$x2 = new core.DartList.literal(1,2.0,3);
        }
        return this.__$x2;
    }
    static set x2(__$value : any)  { 
        this.__$x2 = __$value;
    }

}
