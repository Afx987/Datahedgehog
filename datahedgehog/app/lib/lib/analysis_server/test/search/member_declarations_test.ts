/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/search/member_declarations_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_search_domain";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(MemberDeclarationsTest);
    });
};
export namespace MemberDeclarationsTest {
    export type Constructors = lib3.AbstractSearchDomainTest.Constructors | 'MemberDeclarationsTest';
    export type Interface = Omit<MemberDeclarationsTest, Constructors>;
}
@DartClass
export class MemberDeclarationsTest extends lib3.AbstractSearchDomainTest {
    assertHasDeclaration(kind : any,className : string) : void {
        this.result = this.findTopLevelResult(kind,className);
        if (op(Op.EQUALS,this.result,null)) {
            fail(`Not found: kind=${kind} in="${className}"\nin\n` + this.results.join('\n'));
        }
    }
    findMemberDeclarations(name : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,name).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.searchId = result.id;
            return this.waitForSearchResults();
        } )());
    }

    findTopLevelResult(kind : any,enclosingClass : string) : any {
        for(let result of this.results) {
            let element : any = op(Op.INDEX,result.path,0);
            let clazz : any = op(Op.INDEX,result.path,1);
            if (op(Op.EQUALS,element.kind,kind) && op(Op.EQUALS,clazz.name,enclosingClass)) {
                return result;
            }
        }
        return null;
    }
    test_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  main() {\n    var foo = 42;\n  }\n}\n');
            await this.findMemberDeclarations('foo');
            expect(this.results,isEmpty);
        } )());
    }

    test_localVariable_forIn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  main() {\n    for (int foo in []) {\n    }\n  }\n}\n');
            await this.findMemberDeclarations('foo');
            expect(this.results,isEmpty);
        } )());
    }

    test_methodField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  foo() {}\n  bar() {}\n}\nclass B {\n  int foo;\n}\n');
            await this.findMemberDeclarations('foo');
            expect(this.results,hasLength(2));
            this.assertHasDeclaration(ElementKind.METHOD,'A');
            this.assertHasDeclaration(ElementKind.FIELD,'B');
        } )());
    }

    test_methodGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  foo() {}\n  bar() {}\n}\nclass B {\n  get foo => null;\n}\n');
            await this.findMemberDeclarations('foo');
            expect(this.results,hasLength(2));
            this.assertHasDeclaration(ElementKind.METHOD,'A');
            this.assertHasDeclaration(ElementKind.GETTER,'B');
        } )());
    }

    test_methodGetterSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  foo() {}\n  bar() {}\n}\nclass B {\n  get foo => null;\n  set foo(x) {}\n}\n');
            await this.findMemberDeclarations('foo');
            expect(this.results,hasLength(3));
            this.assertHasDeclaration(ElementKind.METHOD,'A');
            this.assertHasDeclaration(ElementKind.GETTER,'B');
            this.assertHasDeclaration(ElementKind.SETTER,'B');
        } )());
    }

    test_methodMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  foo() {}\n  bar() {}\n}\nclass B {\n  foo() {}\n}\n');
            await this.findMemberDeclarations('foo');
            expect(this.results,hasLength(2));
            this.assertHasDeclaration(ElementKind.METHOD,'A');
            this.assertHasDeclaration(ElementKind.METHOD,'B');
        } )());
    }

    test_methodSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  foo() {}\n  bar() {}\n}\nclass B {\n  set foo(x) {}\n}\n');
            await this.findMemberDeclarations('foo');
            expect(this.results,hasLength(2));
            this.assertHasDeclaration(ElementKind.METHOD,'A');
            this.assertHasDeclaration(ElementKind.SETTER,'B');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemberDeclarationsTest() {
    }
}

export class properties {
}
