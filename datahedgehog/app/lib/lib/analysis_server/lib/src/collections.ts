/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/collections.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var concat : (iterables : core.DartIterable<core.DartIterable<any>>) => core.DartIterable<any> = (iterables : core.DartIterable<core.DartIterable<any>>) : core.DartIterable<any> =>  {
    return iterables.expand((x : any) =>  {
        return x;
    });
};
export var concatToList : (iterables : core.DartIterable<core.DartIterable<any>>) => core.DartList<any> = (iterables : core.DartIterable<core.DartIterable<any>>) : core.DartList<any> =>  {
    return concat(iterables).toList();
};
export var nullIfEmpty : (list : core.DartList<any>) => core.DartList<any> = (list : core.DartList<any>) : core.DartList<any> =>  {
    if (list == null) {
        return null;
    }
    if (list.isEmpty) {
        return null;
    }
    return list;
};
export namespace Pair {
    export type Constructors = 'Pair';
    export type Interface<E,F> = Omit<Pair<E,F>, Constructors>;
}
@DartClass
export class Pair<E,F> {
    first : E;

    last : F;

    constructor(first : E,last : F) {
    }
    @defaultConstructor
    Pair(first : E,last : F) {
        this.first = first;
        this.last = last;
    }
    get hashCode() : number {
        return this.first.hashCode ^ this.last.hashCode;
    }
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, Pair<any,any>)) return false;
        return op(Op.EQUALS,other.first,this.first) && op(Op.EQUALS,other.last,this.last);
    }
    toString() : string {
        return `(${this.first}, ${this.last})`;
    }
}

export class properties {
}
