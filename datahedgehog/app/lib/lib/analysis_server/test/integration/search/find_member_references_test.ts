/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/search/find_member_references_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FindMemberReferencesTest);
    });
};
export namespace FindMemberReferencesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'FindMemberReferencesTest';
    export type Interface = Omit<FindMemberReferencesTest, Constructors>;
}
@DartClass
export class FindMemberReferencesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    pathname : string;

    test_findMemberReferences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'String qux() => \'qux\';\n\nclass Foo {\n  //int bar() => 1;\n  baz() => bar() * bar();\n}\n';
            this.pathname = this.sourcePath('foo.dart');
            this.writeFile(this.pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let referencesResult : any = await this.sendSearchFindMemberReferences('bar');
            expect(referencesResult.id,isNotNull);
            let searchParams : any = await this.onSearchResults.first;
            expect(searchParams.id,referencesResult.id);
            expect(searchParams.isLast,isTrue);
            expect(searchParams.results,isNotEmpty);
            expect(searchParams.results,hasLength(2));
            let result : any = searchParams.results.first;
            expect(result.location.file,this.pathname);
            expect(result.isPotential,isTrue);
            expect(result.kind.name,SearchResultKind.INVOCATION.name);
            expect(result.path.first.name,'baz');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FindMemberReferencesTest() {
    }
}

export class properties {
}
