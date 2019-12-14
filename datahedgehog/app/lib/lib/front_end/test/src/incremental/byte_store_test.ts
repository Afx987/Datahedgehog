/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/incremental/byte_store_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(MemoryCachingByteStoreTest);
        defineReflectiveTests(NullByteStoreTest);
    });
};
export var _b : (length : number) => core.DartList<number> = (length : number) : core.DartList<number> =>  {
    return new core.DartList<number>(length);
};
export namespace MemoryCachingByteStoreTest {
    export type Constructors = 'MemoryCachingByteStoreTest';
    export type Interface = Omit<MemoryCachingByteStoreTest, Constructors>;
}
@DartClass
export class MemoryCachingByteStoreTest {
    test_get_notFound_evict() {
        let store = new _TestByteStore();
        let cachingStore = new bare.createInstance(any,null,store,100);
        cachingStore.get('1');
        cachingStore.put('2',_b(40));
        cachingStore.put('3',_b(40));
        cachingStore.put('4',_b(40));
    }
    test_get_notFound_retry() {
        let mockStore = new _TestByteStore();
        let baseStore = new bare.createInstance(any,null,mockStore,1000);
        let cachingStore = new bare.createInstance(any,null,baseStore,100);
        expect(cachingStore.get('1'),isNull);
        baseStore.put('1',_b(40));
        expect(cachingStore.get('1'),isNotNull);
    }
    test_get_put_evict() {
        let store = new _TestByteStore();
        let cachingStore = new bare.createInstance(any,null,store,100);
        cachingStore.put('1',_b(40));
        cachingStore.put('2',_b(50));
        cachingStore.get('1');
        cachingStore.put('3',_b(30));
        expect(cachingStore.get('1'),hasLength(40));
        expect(cachingStore.get('2'),isNull);
        expect(cachingStore.get('3'),hasLength(30));
    }
    test_put_evict_first() {
        let store = new _TestByteStore();
        let cachingStore = new bare.createInstance(any,null,store,100);
        cachingStore.put('1',_b(40));
        cachingStore.put('2',_b(50));
        expect(cachingStore.get('1'),hasLength(40));
        expect(cachingStore.get('2'),hasLength(50));
        cachingStore.put('3',_b(30));
        expect(cachingStore.get('1'),isNull);
        expect(cachingStore.get('2'),hasLength(50));
        expect(cachingStore.get('3'),hasLength(30));
    }
    test_put_evict_firstAndSecond() {
        let store = new _TestByteStore();
        let cachingStore = new bare.createInstance(any,null,store,100);
        cachingStore.put('1',_b(10));
        cachingStore.put('2',_b(80));
        expect(cachingStore.get('1'),hasLength(10));
        expect(cachingStore.get('2'),hasLength(80));
        cachingStore.put('3',_b(30));
        expect(cachingStore.get('1'),isNull);
        expect(cachingStore.get('2'),isNull);
        expect(cachingStore.get('3'),hasLength(30));
    }
    constructor() {
    }
    @defaultConstructor
    MemoryCachingByteStoreTest() {
    }
}

export namespace NullByteStoreTest {
    export type Constructors = 'NullByteStoreTest';
    export type Interface = Omit<NullByteStoreTest, Constructors>;
}
@DartClass
export class NullByteStoreTest {
    test_get() {
        let store = new bare.createInstance(any,null);
        expect(store.get('1'),isNull);
        store.put('1',_b(10));
        expect(store.get('1'),isNull);
    }
    constructor() {
    }
    @defaultConstructor
    NullByteStoreTest() {
    }
}

export namespace _TestByteStore {
    export type Constructors = '_TestByteStore';
    export type Interface = Omit<_TestByteStore, Constructors>;
}
@DartClass
@Implements(any)
export class _TestByteStore extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TestByteStore() {
    }
}

export class properties {
}
