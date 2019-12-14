/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/search/find_element_references_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FindElementReferencesTest);
    });
};
export namespace FindElementReferencesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'FindElementReferencesTest';
    export type Interface = Omit<FindElementReferencesTest, Constructors>;
}
@DartClass
export class FindElementReferencesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    pathname : string;

    test_badTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'main() {\n  if /* target */ (true) {\n    print(\'Hello\');\n  }\n}\n';
            this.pathname = this.sourcePath('foo.dart');
            this.writeFile(this.pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let results : core.DartList<any> = await this._findElementReferences(text);
            expect(results,isNull);
        } )());
    }

    test_findReferences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'main() {\n  print /* target */ (\'Hello\');\n}\n';
            this.pathname = this.sourcePath('foo.dart');
            this.writeFile(this.pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let results : core.DartList<any> = await this._findElementReferences(text);
            expect(results,hasLength(1));
            let result : any = results.first;
            expect(result.location.file,this.pathname);
            expect(result.isPotential,isFalse);
            expect(result.kind.name,SearchResultKind.INVOCATION.name);
            expect(result.path.first.name,'main');
        } )());
    }

    _findElementReferences(text : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let offset : number = new core.DartString(text).indexOf(' /* target */') - 1;
            let result : any = await this.sendSearchFindElementReferences(this.pathname,offset,false);
            if (op(Op.EQUALS,result.id,null)) return null;
            let searchParams : any = await this.onSearchResults.first;
            expect(searchParams.id,result.id);
            expect(searchParams.isLast,isTrue);
            return searchParams.results;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FindElementReferencesTest() {
    }
}

export class properties {
}
