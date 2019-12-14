/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/name_filter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NameFilterTest);
    });
};
export namespace NameFilterTest {
    export type Constructors = 'NameFilterTest';
    export type Interface = Omit<NameFilterTest, Constructors>;
}
@DartClass
export class NameFilterTest {
    test_accepts_accessors_hide() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('bar')}));
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('foo='),isTrue);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('bar='),isFalse);
    }
    test_accepts_accessors_show() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo')}));
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('foo='),isTrue);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('bar='),isFalse);
    }
    test_forNamespaceCombinator_hide() {
        let filter : any = new bare.createInstance(any,null,((_) : any =>  {
            {
                _.hiddenNames = new core.DartList.literal('foo','bar');
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isTrue);
        expect(filter.shownNames,isNull);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_forNamespaceCombinator_show() {
        let filter : any = new bare.createInstance(any,null,((_) : any =>  {
            {
                _.shownNames = new core.DartList.literal('foo','bar');
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('bar'),isTrue);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_forNamespaceCombinators() {
        let filter : any = new bare.createInstance(any,null,new core.DartList.literal(((_) : any =>  {
            {
                _.hiddenNames = new core.DartList.literal('foo');
                return _;
            }
        })(new bare.createInstance(any,null)),((_) : any =>  {
            {
                _.hiddenNames = new core.DartList.literal('bar');
                return _;
            }
        })(new bare.createInstance(any,null))));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isTrue);
        expect(filter.shownNames,isNull);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_forUnlinkedCombinator_hide() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('foo','bar')}));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isTrue);
        expect(filter.shownNames,isNull);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_forUnlinkedCombinator_show() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo','bar')}));
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('bar'),isTrue);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_forUnlinkedCombinators() {
        let filter : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,{
            hides : new core.DartList.literal('foo')}),new bare.createInstance(any,null,{
            hides : new core.DartList.literal('bar')})));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isTrue);
        expect(filter.shownNames,isNull);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_identity() {
        expect(NameFilter.identity.accepts('foo'),isTrue);
        expect(NameFilter.identity.hiddenNames,isNotNull);
        expect(NameFilter.identity.hiddenNames,isEmpty);
        expect(NameFilter.identity.shownNames,isNull);
    }
    test_merge_hides_hides() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('foo')})).merge(new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('bar')})));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isTrue);
        expect(filter.shownNames,isNull);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_merge_hides_identity() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('foo','bar')})).merge(NameFilter.identity);
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isTrue);
        expect(filter.shownNames,isNull);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_merge_hides_shows() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('bar','baz')})).merge(new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo','bar')})));
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,new core.DartList.literal('foo').toSet());
    }
    test_merge_identity_hides() {
        let filter : any = NameFilter.identity.merge(new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('foo','bar')})));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isTrue);
        expect(filter.shownNames,isNull);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_merge_identity_identity() {
        let filter : any = NameFilter.identity.merge(NameFilter.identity);
        expect(filter.accepts('foo'),isTrue);
        expect(filter.hiddenNames,isNotNull);
        expect(filter.hiddenNames,isEmpty);
        expect(filter.shownNames,isNull);
    }
    test_merge_identity_shows() {
        let filter : any = NameFilter.identity.merge(new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo','bar')})));
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('bar'),isTrue);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_merge_shows_hides() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo','bar')})).merge(new bare.createInstance(any,null,new bare.createInstance(any,null,{
            hides : new core.DartList.literal('bar','baz')})));
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,new core.DartList.literal('foo').toSet());
    }
    test_merge_shows_identity() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo','bar')})).merge(NameFilter.identity);
        expect(filter.accepts('foo'),isTrue);
        expect(filter.accepts('bar'),isTrue);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,new core.DartList.literal('foo','bar').toSet());
    }
    test_merge_shows_shows() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo','bar')})).merge(new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('bar','baz')})));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isTrue);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,new core.DartList.literal('bar').toSet());
    }
    test_merge_shows_shows_emptyResult() {
        let filter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo')})).merge(new bare.createInstance(any,null,new bare.createInstance(any,null,{
            shows : new core.DartList.literal('bar')})));
        expect(filter.accepts('foo'),isFalse);
        expect(filter.accepts('bar'),isFalse);
        expect(filter.accepts('baz'),isFalse);
        expect(filter.hiddenNames,isNull);
        expect(filter.shownNames,isNotNull);
        expect(filter.shownNames,isEmpty);
    }
    constructor() {
    }
    @defaultConstructor
    NameFilterTest() {
    }
}

export class properties {
}
