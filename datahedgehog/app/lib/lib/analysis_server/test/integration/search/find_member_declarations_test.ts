/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/search/find_member_declarations_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FindMemberDeclarationsTest);
    });
};
export namespace FindMemberDeclarationsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'FindMemberDeclarationsTest';
    export type Interface = Omit<FindMemberDeclarationsTest, Constructors>;
}
@DartClass
export class FindMemberDeclarationsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    pathname : string;

    test_findMemberDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'String qux() => \'qux\';\n\nclass Foo {\n  void bar() { };\n  int baz() => 0;\n}\n';
            this.pathname = this.sourcePath('foo.dart');
            this.writeFile(this.pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let declarationsResult : any = await this.sendSearchFindMemberDeclarations('bar');
            expect(declarationsResult.id,isNotNull);
            let searchParams : any = await this.onSearchResults.first;
            expect(searchParams.id,declarationsResult.id);
            expect(searchParams.isLast,isTrue);
            expect(searchParams.results,isNotEmpty);
            let result : any = searchParams.results.first;
            expect(result.location.file,this.pathname);
            expect(result.isPotential,isFalse);
            expect(result.kind.name,SearchResultKind.DECLARATION.name);
            expect(result.path.first.name,'bar');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FindMemberDeclarationsTest() {
    }
}

export class properties {
}
