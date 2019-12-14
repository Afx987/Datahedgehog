/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/local_library_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LocalLibraryContributorTest);
    });
};
export namespace LocalLibraryContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'LocalLibraryContributorTest';
    export type Interface = Omit<LocalLibraryContributorTest, Constructors>;
}
@DartClass
export class LocalLibraryContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_partFile_Constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart',`        library libA;\n        import "/testB.dart";\n        part "${this.testFile}";\n        class A { }\n        var m;`);
            this.addTestSource('        part of libA;\n        class B { factory B.bar(int x) => null; }\n        main() {new ^}');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestConstructor('A');
            this.assertNotSuggested('B.bar');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_partFile_Constructor2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart','        part of libA;\n        class B { }');
            this.addTestSource('        library libA;\n        import "/testB.dart";\n        part "/testA.dart";\n        class A { A({String boo: \'hoo\'}) { } }\n        main() {new ^}\n        var m;');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestConstructor('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_partFile_InstanceCreationExpression_assignment_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart','        part of libA;\n        class A {} class B extends A {} class C implements A {} class D {}\n        ');
            this.addTestSource('        library libA;\n        import "/testB.dart";\n        part "/testA.dart";\n        class Local { }\n        main() {\n          A a;\n          // FAIL:\n          a = new ^\n        }\n        var m;');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestConstructor('A',{
                elemOffset : -1,relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestConstructor('B',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertSuggestConstructor('C',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('D');
            this.assertNotSuggested('Local');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_partFile_InstanceCreationExpression_variable_declaration_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart','        part of libA;\n        class A {} class B extends A {} class C implements A {} class D {}\n        ');
            this.addTestSource('        library libA;\n        import "/testB.dart";\n        part "/testA.dart";\n        class Local { }\n        main() {\n          A a = new ^\n        }\n        var m;');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestConstructor('A',{
                elemOffset : -1,relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestConstructor('B',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertSuggestConstructor('C',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('D');
            this.assertNotSuggested('Local');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_partFile_TypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart',`        library libA;\n        import "/testB.dart";\n        part "${this.testFile}";\n        class A { var a1; a2(){}}\n        var m;\n        typedef t1(int blue);\n        int af() {return 0;}`);
            this.addTestSource('        part of libA;\n        class B { factory B.bar(int x) => null; }\n        main() {^}');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
            this.assertSuggestFunction('af','int',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestTopLevelVar('m',null,{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestFunctionTypeAlias('t1',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('a1');
            this.assertNotSuggested('a2');
            this.assertNotSuggested('B.bar');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
        } )());
    }

    test_partFile_TypeName2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart','        part of libA;\n        class B { var b1; b2(){}}\n        int bf() => 0;\n        typedef t1(int blue);\n        var n;');
            this.addTestSource('        library libA;\n        import "/testB.dart";\n        part "/testA.dart";\n        class A { A({String boo: \'hoo\'}) { } }\n        main() {^}\n        var m;');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('B');
            this.assertSuggestFunction('bf','int',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestTopLevelVar('n',null,{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestFunctionTypeAlias('t1',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('b1');
            this.assertNotSuggested('b2');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalLibraryContributorTest() {
    }
}

export class properties {
}
