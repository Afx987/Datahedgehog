/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/uncaptured_for_in_loop.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let closures = new core.DartList.literal();
    for(let i of properties.numbers) {
        let j : number = i;
        closures.add(() =>  {
            return j;
        });
    }
    let sum : number = 0;
    for(let f of closures) {
        sum += f();
    }
    let expectedSum : number = op(Op.QUOTIENT,op(Op.TIMES,(op(Op.MINUS,properties.numbers.length,1)),properties.numbers.length),2);
    if (expectedSum != sum) {
        throw new core.Exception(`Unexpected sum = ${sum} != ${expectedSum}`);
    }
};
export class properties {
    private static __$numbers;
    static get numbers() { 
        if (this.__$numbers===undefined) {
            this.__$numbers = new core.DartList.literal<number>(0,1,2,3,4,5,6,7,8,9);
        }
        return this.__$numbers;
    }
    static set numbers(__$value : any)  { 
        this.__$numbers = __$value;
    }

}
