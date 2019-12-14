/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/util/lru_map_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(_LRUCacheTest);
    });
};
export namespace _LRUCacheTest {
    export type Constructors = '_LRUCacheTest';
    export type Interface = Omit<_LRUCacheTest, Constructors>;
}
@DartClass
export class _LRUCacheTest {
    cache : any;

    test_evict_notGet() : void {
        let evictedKeys : core.DartList<number> = new core.DartList<number>();
        let evictedValues : core.DartList<string> = new core.DartList<string>();
        this.cache = new bare.createInstance(any,null,3,(key : number,value : string) =>  {
            evictedKeys.add(key);
            evictedValues.add(value);
        });
        this.cache.put(1,'A');
        this.cache.put(2,'B');
        this.cache.put(3,'C');
        this.cache.get(1);
        this.cache.get(3);
        this.cache.put(4,'D');
        expect(this.cache.get(1),'A');
        expect(this.cache.get(2),isNull);
        expect(this.cache.get(3),'C');
        expect(this.cache.get(4),'D');
        expect(evictedKeys,contains(2));
        expect(evictedValues,contains('B'));
    }
    test_evict_notPut() : void {
        let evictedKeys : core.DartList<number> = new core.DartList<number>();
        let evictedValues : core.DartList<string> = new core.DartList<string>();
        this.cache = new bare.createInstance(any,null,3,(key : number,value : string) =>  {
            evictedKeys.add(key);
            evictedValues.add(value);
        });
        this.cache.put(1,'A');
        this.cache.put(2,'B');
        this.cache.put(3,'C');
        this.cache.put(1,'AA');
        this.cache.put(3,'CC');
        this.cache.put(4,'D');
        expect(this.cache.get(1),'AA');
        expect(this.cache.get(2),isNull);
        expect(this.cache.get(3),'CC');
        expect(this.cache.get(4),'D');
        expect(evictedKeys,contains(2));
        expect(evictedValues,contains('B'));
    }
    test_putGet() : void {
        this.cache.put(1,'A');
        this.cache.put(2,'B');
        this.cache.put(3,'C');
        expect(this.cache.get(1),'A');
        expect(this.cache.get(2),'B');
        expect(this.cache.get(3),'C');
        expect(this.cache.get(4),isNull);
    }
    test_remove() : void {
        this.cache.put(1,'A');
        this.cache.put(2,'B');
        this.cache.put(3,'C');
        this.cache.remove(1);
        this.cache.remove(3);
        expect(this.cache.get(1),isNull);
        expect(this.cache.get(2),'B');
        expect(this.cache.get(3),isNull);
    }
    constructor() {
    }
    @defaultConstructor
    _LRUCacheTest() {
        this.cache = new bare.createInstance(any,null,3);
    }
}

export class properties {
}
