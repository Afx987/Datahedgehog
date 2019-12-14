/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/library_prefix_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LibraryPrefixContributorTest);
    });
};
export namespace LibraryPrefixContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'LibraryPrefixContributorTest';
    export type Interface = Omit<LibraryPrefixContributorTest, Constructors>;
}
@DartClass
export class LibraryPrefixContributorTest extends lib3.DartCompletionContributorTest {
    assertSuggestLibraryPrefixes(expectedPrefixes : core.DartList<string>) : void {
        for(let prefix of expectedPrefixes) {
            let cs : any = this.assertSuggest(prefix,{
                csKind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_DEFAULT});
            let element : any = cs.element;
            expect(element,isNotNull);
            expect(element.kind,equals(ElementKind.LIBRARY));
            expect(element.parameters,isNull);
            expect(element.returnType,isNull);
            this.assertHasNoParameterInfo(cs);
        }
        if (this.suggestions.length != expectedPrefixes.length) {
            this.failedCompletion(`expected only ${expectedPrefixes.length} suggestions`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_Block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nString get T7 => \'hello\';\nset T8(int value) { partT8() {} }\nZ D2() {int x;}\nclass X {\n  int get clog => 8;\n  set blog(value) { }\n  a() {\n    var f;\n    localF(int arg1) { }\n    {var x;}\n    ^ var r;\n  }\n  void b() { }}\nclass Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('g'));
        } )());
    }

    test_Block_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nString get T7 => \'hello\';\nset T8(int value) { partT8() {} }\nZ D2() {int x;}\nclass X {\n  int get clog => 8;\n  set blog(value) { }\n  a() {\n    final ^\n    final var f;\n    localF(int arg1) { }\n    {var x;}\n  }\n  void b() { }}\nclass Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('g'));
        } )());
    }

    test_Block_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nString get T7 => \'hello\';\nset T8(int value) { partT8() {} }\nZ D2() {int x;}\nclass X {\n  int get clog => 8;\n  set blog(value) { }\n  a() {\n    final ^\n    var f;\n    localF(int arg1) { }\n    {var x;}\n  }\n  void b() { }}\nclass Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('g'));
        } )());
    }

    test_ClassDeclaration_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\n@deprecated class A {^}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^ A(){}}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as Soo;\nclass A {final S^ A();}\nclass _B {}\nA Sew;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('Soo'));
        } )());
    }

    test_ClassDeclaration_body_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^ final foo;}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^ var foo;}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_InstanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {foo(){var f; {var x;}}}\nclass B {B(this.x, [String boo]) { } int x;}\nclass C {C.bar({boo: \'hoo\', int z: 0}) { } }');
            this.addTestSource('import "/testA.dart" as t;\nimport "dart:math" as math;\nmain() {new ^ String x = "hello";}');
            await this.computeSuggestions();
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('math','t'));
        } )());
    }

    test_InstanceCreationExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:convert" as json;f() {var x=new js^}');
            await this.computeSuggestions();
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('json'));
        } )());
    }

    test_InstanceCreationExpression_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {foo(){var f; {var x;}}}\nclass B {B(this.x, [String boo]) { } int x;}\nclass C {C.bar({boo: \'hoo\', int z: 0}) { } }');
            this.addSource('/testB.dart',`library testB;\nimport "/testA.dart" as t;\nimport "dart:math" as math;\npart "${this.testFile}"\nmain() {new ^ String x = "hello";}`);
            this.addTestSource('part of testB;\nmain() {new ^ String x = "hello";}');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('math','t'));
        } )());
    }

    test_InstanceCreationExpression_inPart_detached() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {foo(){var f; {var x;}}}\nclass B {B(this.x, [String boo]) { } int x;}\nclass C {C.bar({boo: \'hoo\', int z: 0}) { } }');
            this.addSource('/testB.dart',`library testB;\nimport "/testA.dart" as t;\nimport "dart:math" as math;\n//part "${this.testFile}"\nmain() {new ^ String x = "hello";}`);
            this.addTestSource('//part of testB;\nmain() {new ^ String x = "hello";}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryPrefixContributorTest() {
    }
}

export class properties {
}
