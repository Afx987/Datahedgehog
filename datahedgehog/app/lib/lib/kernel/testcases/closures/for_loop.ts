/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/for_loop.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let closures = new core.DartList.literal();
    let closures2 = new core.DartList.literal();
    let last;
    for(let i : number = 0; i < properties.max; i++){
        closures.add(() =>  {
            return last = i;
        });
        closures2.add(() =>  {
            if (last != properties.max - 1) throw `last: ${last} != ${properties.max - 1}`;
        });
    }
    let sum : number = 0;
    for(let f of closures) {
        sum += f();
    }
    for(let f of closures2) {
        f();
    }
    let expectedSum : number = op(Op.QUOTIENT,(properties.max - 1) * properties.max,2);
    if (expectedSum != sum) {
        throw new core.Exception(`Unexpected sum = ${sum} != ${expectedSum}`);
    }
};
export class properties {
    private static __$max : number;
    static get max() : number { 
        if (this.__$max===undefined) {
            this.__$max = 100;
        }
        return this.__$max;
    }
    static set max(__$value : number)  { 
        this.__$max = __$value;
    }

}
