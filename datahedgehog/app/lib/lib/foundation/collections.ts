/** Library asset:datahedgehog_monitor/lib/lib/foundation/collections.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var setEquals : <T>(a : core.DartSet<T>,b : core.DartSet<T>) => boolean = <T>(a : core.DartSet<T>,b : core.DartSet<T>) : boolean =>  {
    if (op(Op.EQUALS,a,null)) return op(Op.EQUALS,b,null);
    if (op(Op.EQUALS,b,null) || a.length != b.length) return false;
    for(let value of a) {
        if (!b.contains(value)) return false;
    }
    return true;
};
export var listEquals : <T>(a : core.DartList<T>,b : core.DartList<T>) => boolean = <T>(a : core.DartList<T>,b : core.DartList<T>) : boolean =>  {
    if (a == null) return b == null;
    if (b == null || a.length != b.length) return false;
    for(let index : number = 0; index < a.length; index += 1){
        if (a[index] != b[index]) return false;
    }
    return true;
};
export class properties {
}
