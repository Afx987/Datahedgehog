/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/heap_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    var check_sort : (initialOrder : core.DartIterable<number>) => any = (initialOrder : core.DartIterable<number>) =>  {
        let values = initialOrder.toList();
        let heap = new _intHeap();
        values.forEach(heap.add);
        values.sort();
        let result = new core.DartList.literal<number>();
        while (heap.isNotEmpty){
            expect(heap.isEmpty,isFalse);
            result.add(heap.remove());
        }
        expect(heap.isEmpty,isTrue);
        expect(result,values);
    };
    test('sort',() =>  {
        check_sort(new core.DartList.literal<number>(3,1,4,1,5,9,2,6));
    });
    test('sort_already_sorted',() =>  {
        check_sort(new core.DartList.literal<number>(1,1,2,3,4,5,6,9));
    });
    test('sort_reverse_sorted',() =>  {
        check_sort(new core.DartList.literal<number>(9,6,5,4,3,2,1,1));
    });
};
export namespace _intHeap {
    export type Constructors = '_intHeap';
    export type Interface = Omit<_intHeap, Constructors>;
}
@DartClass
export class _intHeap extends any {
    sortsBefore(a : number,b : number) : boolean {
        return a < b;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _intHeap() {
    }
}

export class properties {
}
