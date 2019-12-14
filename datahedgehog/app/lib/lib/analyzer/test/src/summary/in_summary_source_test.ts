/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/in_summary_source_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InSummarySourceTest);
    });
};
export namespace InSummarySourceTest {
    export type Constructors = 'InSummarySourceTest';
    export type Interface = Omit<InSummarySourceTest, Constructors>;
}
@DartClass
export class InSummarySourceTest extends any {
    test_InSummarySource() {
        let sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,PhysicalResourceProvider.INSTANCE,new MockSummaryDataStore.fake(new core.DartMap.literal([
            ['package:foo/foo.dart','foo.sum'],
            ['package:foo/src/foo_impl.dart','foo.sum'],
            ['package:bar/baz.dart','bar.sum']])))));
        let source : any = sourceFactory.forUri('package:foo/foo.dart');
        expect(source,isNotNull);
        expect(source.summaryPath,'foo.sum');
        source = sourceFactory.forUri('package:foo/src/foo_impl.dart');
        expect(source,isNotNull);
        expect(source.summaryPath,'foo.sum');
        source = sourceFactory.forUri('package:bar/baz.dart');
        expect(source,isNotNull);
        expect(source.summaryPath,'bar.sum');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InSummarySourceTest() {
    }
}

export namespace MockSummaryDataStore {
    export type Constructors = 'MockSummaryDataStore';
    export type Interface = Omit<MockSummaryDataStore, Constructors>;
}
@DartClass
@Implements(any)
export class MockSummaryDataStore implements any.Interface {
    linkedMap : core.DartMap<string,any>;

    unlinkedMap : core.DartMap<string,any>;

    uriToSummaryPath : core.DartMap<string,string>;

    constructor(linkedMap : core.DartMap<string,any>,unlinkedMap : core.DartMap<string,any>,uriToSummaryPath : core.DartMap<string,string>) {
    }
    @defaultConstructor
    MockSummaryDataStore(linkedMap : core.DartMap<string,any>,unlinkedMap : core.DartMap<string,any>,uriToSummaryPath : core.DartMap<string,string>) {
        this.linkedMap = linkedMap;
        this.unlinkedMap = unlinkedMap;
        this.uriToSummaryPath = uriToSummaryPath;
    }
    @namedFactory
    static $fake(uriToSummary : core.DartMap<string,string>) : MockSummaryDataStore {
        let unlinkedMap = new core.DartMap.fromIterable(uriToSummary.keys,{
            value : (uri : any) =>  {
                return new bare.createInstance(any,null);
            }});
        return new MockSummaryDataStore(null,unlinkedMap,uriToSummary);
    }
    static fake : new(uriToSummary : core.DartMap<string,string>) => MockSummaryDataStore;

    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export class properties {
}
