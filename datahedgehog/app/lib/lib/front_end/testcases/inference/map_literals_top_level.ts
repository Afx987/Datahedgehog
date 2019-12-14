/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/map_literals_top_level.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test1 : () => any = () =>  {
    op(Op.INDEX_ASSIGN,properties.x1,3,'z');
    op(Op.INDEX_ASSIGN,properties.x1,'hi','w');
    op(Op.INDEX_ASSIGN,properties.x1,4.0,'u');
    op(Op.INDEX_ASSIGN,properties.x1,3,42);
    let y : core.DartMap<number,string> = properties.x1;
};
export var test2 : () => any = () =>  {
    op(Op.INDEX_ASSIGN,properties.x2,3,'z');
    op(Op.INDEX_ASSIGN,properties.x2,'hi','w');
    op(Op.INDEX_ASSIGN,properties.x2,4.0,'u');
    op(Op.INDEX_ASSIGN,properties.x2,3,42);
    let p : core.DartPattern = null;
    op(Op.INDEX_ASSIGN,properties.x2,2,p);
    let y : core.DartMap<number,string> = properties.x2;
};
export class properties {
    private static __$x1;
    static get x1() { 
        if (this.__$x1===undefined) {
            this.__$x1 = new core.DartMap.literal([
                [1,'x'],
                [2,'y']]);
        }
        return this.__$x1;
    }
    static set x1(__$value : any)  { 
        this.__$x1 = __$value;
    }

    private static __$x2;
    static get x2() { 
        if (this.__$x2===undefined) {
            this.__$x2 = new core.DartMap.literal([
                [1,'x'],
                [2,'y'],
                [3.0,new core.DartRegExp('.')]]);
        }
        return this.__$x2;
    }
    static set x2(__$value : any)  { 
        this.__$x2 = __$value;
    }

}
