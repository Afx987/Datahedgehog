/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/get_library_dependencies_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetLibraryDependenciesTest);
    });
};
export namespace GetLibraryDependenciesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetLibraryDependenciesTest';
    export type Interface = Omit<GetLibraryDependenciesTest, Constructors>;
}
@DartClass
export class GetLibraryDependenciesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_libraryDeps() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'class Foo {}\n\nclass Bar {\n  Foo foo;\n}\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let result : any = await this.sendAnalysisGetLibraryDependencies();
            let libraries : core.DartList<string> = result.libraries;
            let packageMaps : core.DartMap<string,core.DartMap<string,core.DartList<string>>> = result.packageMap;
            expect(libraries,contains(pathname));
            expect(libraries.any((lib : string) =>  {
                return new core.DartString(lib).endsWith('core/core.dart');
            }),true);
            expect(packageMaps.keys,hasLength(1));
            let map : core.DartMap<string,core.DartList<string>> = packageMaps.get(packageMaps.keys.first);
            expect(map.keys,isEmpty);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetLibraryDependenciesTest() {
    }
}

export class properties {
}
