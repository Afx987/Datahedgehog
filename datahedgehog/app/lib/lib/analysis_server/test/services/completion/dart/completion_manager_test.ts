/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/completion_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CompletionManagerTest);
    });
};
export namespace CompletionManagerTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'CompletionManagerTest';
    export type Interface = Omit<CompletionManagerTest, Constructors>;
}
@DartClass
export class CompletionManagerTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_resolveDirectives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;\n/// My class.\n/// Short description.\n///\n/// Longer description.\nclass A {}\n');
            this.addSource('/libB.dart',`library libB;\nimport "/libA.dart" as foo;\npart '${this.testFile}';\n`);
            this.addTestSource('part of libB; main() {^}');
            let baseRequest : any = new bare.createInstance(any,null,await this.driver.getResult(this.testFile),this.provider,this.testSource,this.completionOffset,new bare.createInstance(any,null),null);
            let requestCompleter : async.DartCompleter<any> = new async.DartCompleter<any>();
            DartCompletionRequestImpl.from(baseRequest,{
                resultDescriptor : RESOLVED_UNIT1}).then((request : any) =>  {
                requestCompleter.complete(request);
            });
            this.request = await this.performAnalysis(200,requestCompleter);
            let directives = this.request.target.unit.directives;
            let imports : core.DartList<any> = this.request.libraryElement.imports;
            expect(imports,hasLength(op(Op.PLUS,directives.length,1)));
            var importNamed : (expectedUri : string) => any = (expectedUri : string) : any =>  {
                return imports.firstWhere((elem : any) =>  {
                    return op(Op.EQUALS,elem.uri,expectedUri);
                },{
                    orElse : () =>  {
                        let importedNames = imports.map((elem : any) =>  {
                            return elem.uri;
                        });
                        fail(`Failed to find ${expectedUri} in ${importedNames}`);
                    }});
            };
            var assertImportedLib : (expectedUri : string) => void = (expectedUri : string) : void =>  {
                let importElem : any = importNamed(expectedUri);
                expect(importElem.importedLibrary.exportNamespace,isNotNull);
            };
            assertImportedLib(null);
            assertImportedLib('/libA.dart');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompletionManagerTest() {
    }
}

export class properties {
}
