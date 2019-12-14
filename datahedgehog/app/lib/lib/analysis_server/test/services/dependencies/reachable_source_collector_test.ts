/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/dependencies/reachable_source_collector_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ReachableSourceCollectorTest);
    });
};
export namespace ReachableSourceCollectorTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'ReachableSourceCollectorTest';
    export type Interface = Omit<ReachableSourceCollectorTest, Constructors>;
}
@DartClass
export class ReachableSourceCollectorTest extends lib3.AbstractContextTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    importsFor(source : any) : core.DartMap<string,core.DartList<string>> {
        return new bare.createInstance(any,null,source,this.context).collectSources();
    }
    test_null_context() {
        let lib : any = this.addSource('/lib.dart','');
        expect(() =>  {
            return new bare.createInstance(any,null,lib,null);
        },throwsA(new bare.createInstance(any,null)));
    }
    test_null_source() {
        expect(() =>  {
            return new bare.createInstance(any,null,null,this.context);
        },throwsA(new bare.createInstance(any,null)));
    }
    test_sources() {
        let lib1 : any = this.addSource('/lib1.dart','import "lib2.dart";\nimport "dart:html";');
        let lib2 : any = this.addSource('/lib2.dart','import "lib1.dart";');
        let lib3 : any = this.addSource('/lib3.dart','import "lib4.dart";');
        this.addSource('/lib4.dart','import "lib3.dart";');
        let imports : core.DartMap<string,core.DartList<string>> = this.importsFor(lib1);
        expect(imports.keys,unorderedEquals(new core.DartList.literal('dart:_internal','dart:async','dart:core','dart:html','dart:math','file:///lib1.dart','file:///lib2.dart')));
        expect(imports.get('file:///lib1.dart'),unorderedEquals(new core.DartList.literal('dart:core','dart:html','file:///lib2.dart')));
        expect(this.importsFor(lib2).keys,contains('dart:html'));
        expect(this.importsFor(lib3).keys,unorderedEquals(new core.DartList.literal('dart:_internal','dart:async','dart:core','dart:math','file:///lib3.dart','file:///lib4.dart')));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReachableSourceCollectorTest() {
    }
}

export class properties {
}
