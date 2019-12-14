/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/get_reachable_sources_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";
import * as io from "@dart2ts/dart/io";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetReachableSourcesTest);
    });
};
export namespace GetReachableSourcesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetReachableSourcesTest';
    export type Interface = Omit<GetReachableSourcesTest, Constructors>;
}
@DartClass
export class GetReachableSourcesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_reachable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'class Foo {}\n\nclass Bar {\n  Foo foo;\n}\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let result : any = await this.sendAnalysisGetReachableSources(pathname);
            let sources : core.DartMap<string,core.DartList<string>> = result.sources;
            let keys : core.DartList<string> = sources.keys.toList();
            let url : string = new io.File(pathname).uri.toString();
            expect(keys,contains('dart:core'));
            expect(keys,contains('dart:collection'));
            expect(keys,contains('dart:math'));
            expect(keys,contains(url));
            expect(sources.get(url),contains('dart:core'));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetReachableSourcesTest() {
    }
}

export class properties {
}
