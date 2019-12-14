/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/search/top_level_declarations_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_search_domain";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TopLevelDeclarationsTest);
    });
};
export namespace TopLevelDeclarationsTest {
    export type Constructors = lib3.AbstractSearchDomainTest.Constructors | 'TopLevelDeclarationsTest';
    export type Interface = Omit<TopLevelDeclarationsTest, Constructors>;
}
@DartClass
export class TopLevelDeclarationsTest extends lib3.AbstractSearchDomainTest {
    assertHasDeclaration(kind : any,name : string) : void {
        this.result = this.findTopLevelResult(kind,name);
        if (op(Op.EQUALS,this.result,null)) {
            fail(`Not found: kind=${kind} name="${name}"\nin\n` + this.results.join('\n'));
        }
    }
    assertNoDeclaration(kind : any,name : string) : void {
        this.result = this.findTopLevelResult(kind,name);
        if (this.result != null) {
            fail(`Unexpected: kind=${kind} name="${name}"\nin\n` + this.results.join('\n'));
        }
    }
    findTopLevelDeclarations(pattern : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,pattern).toRequest('0');
            let response : any = await this.waitResponse(request);
            if (response.error != null) {
                return response.error;
            }
            this.searchId = new bare.createInstance(any,null,response).id;
            return this.waitForSearchResults();
        } )());
    }

    findTopLevelResult(kind : any,name : string) : any {
        for(let result of this.results) {
            let element : any = op(Op.INDEX,result.path,0);
            if (op(Op.EQUALS,element.kind,kind) && op(Op.EQUALS,element.name,name)) {
                return result;
            }
        }
        return null;
    }
    test_invalidRegex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result = await this.findTopLevelDeclarations('[A');
            expect(result,new bare.createInstance(any,null));
        } )());
    }

    test_startEndPattern() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {} // A\nclass B = Object with A;\ntypedef C();\nD() {}\nvar E = null;\nclass ABC {}\n');
            await this.findTopLevelDeclarations('^[A-E]$');
            this.assertHasDeclaration(ElementKind.CLASS,'A');
            this.assertHasDeclaration(ElementKind.CLASS,'B');
            this.assertHasDeclaration(ElementKind.FUNCTION_TYPE_ALIAS,'C');
            this.assertHasDeclaration(ElementKind.FUNCTION,'D');
            this.assertHasDeclaration(ElementKind.TOP_LEVEL_VARIABLE,'E');
            this.assertNoDeclaration(ElementKind.CLASS,'ABC');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelDeclarationsTest() {
    }
}

export class properties {
}
