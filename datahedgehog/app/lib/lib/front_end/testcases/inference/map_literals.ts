/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/map_literals.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test1 : () => any = () =>  {
    let x = new core.DartMap.literal([
        [1,'x'],
        [2,'y']]);
    x.set(3,'z');
    x.set('hi','w');
    x.set(4.0,'u');
    x.set(3,42);
    let y : core.DartMap<number,string> = x;
};
export var test2 : () => any = () =>  {
    let x = new core.DartMap.literal([
        [1,'x'],
        [2,'y'],
        [3.0,new core.DartRegExp('.')]]);
    x.set(3,'z');
    x.set('hi','w');
    x.set(4.0,'u');
    x.set(3,42);
    let p : core.DartPattern = null;
    x.set(2,p);
    let y : core.DartMap<number,string> = x;
};
export class properties {
}
