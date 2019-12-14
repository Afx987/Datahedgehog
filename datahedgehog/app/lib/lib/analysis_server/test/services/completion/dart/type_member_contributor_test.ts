/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/type_member_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TypeMemberContributorTest);
    });
};
export namespace TypeMemberContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'TypeMemberContributorTest';
    export type Interface = Omit<TypeMemberContributorTest, Constructors>;
}
@DartClass
export class TypeMemberContributorTest extends lib3.DartCompletionContributorTest {
    check_shadowing(shadower : string,shadowee : string,shouldBeShadowed : boolean) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource(`class Base {\n  ${shadowee}\n}\nclass Derived extends Base {\n  ${shadower}\n}\nvoid f(Derived d) {\n  d.^\n}\n`);
            await this.computeSuggestions();
            let suggestionsForX : core.DartList<any> = this.suggestions.where((s : any) =>  {
                return op(Op.EQUALS,s.completion,'x');
            }).toList();
            expect(suggestionsForX,hasLength(1));
            if (shouldBeShadowed) {
                expect(suggestionsForX[0].declaringType,'Derived');
            }else {
                expect(suggestionsForX[0].declaringType,'Base');
            }
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_ArgDefaults_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  bool a(int b, bool c) => false;\n}\n\nvoid main() {new A().a^}');
            await this.computeSuggestions();
            this.assertSuggestMethod('a','A','bool',{
                defaultArgListString : 'b, c'});
        } )());
    }

    test_ArgDefaults_method_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  bool a() => false;\n}\n\nvoid main() {new A().a^}');
            await this.computeSuggestions();
            this.assertSuggestMethod('a','A','bool',{
                defaultArgListString : null});
        } )());
    }

    test_ArgDefaults_method_with_optional_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addMetaPackageSource();
            this.addTestSource('import \'package:meta/meta.dart\';\n\nclass A {\n  bool foo(int bar, [bool boo, int baz]) => false;\n}\n\nvoid main() {new A().f^}');
            await this.computeSuggestions();
            this.assertSuggestMethod('foo','A','bool',{
                defaultArgListString : 'bar'});
        } )());
    }

    test_ArgDefaults_method_with_required_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addMetaPackageSource();
            this.addTestSource('import \'package:meta/meta.dart\';\n\nclass A {\n  bool foo(int bar, {bool boo, @required int baz}) => false;\n}\n\nvoid main() {new A().f^}');
            await this.computeSuggestions();
            this.assertSuggestMethod('foo','A','bool',{
                defaultArgListString : 'bar, baz: null'});
        } )());
    }

    test_ArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        bool hasLength(int expected) { }\n        void baz() { }');
            this.addTestSource('        import \'/libA.dart\';\n        class B { }\n        String bar() => true;\n        void main() {expect(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_imported_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        bool hasLength(int expected) { }\n        expect(arg) { }\n        void baz() { }');
            this.addTestSource('        import \'/libA.dart\'\n        class B { }\n        String bar() => true;\n        void main() {expect(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_functionalArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        class A { A(f()) { } }\n        bool hasLength(int expected) { }\n        void baz() { }');
            this.addTestSource('        import \'dart:async\';\n        import \'/libA.dart\';\n        class B { }\n        String bar() => true;\n        void main() {new A(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_typedefArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        typedef Funct();\n        class A { A(Funct f) { } }\n        bool hasLength(int expected) { }\n        void baz() { }');
            this.addTestSource('        import \'dart:async\';\n        import \'/libA.dart\';\n        class B { }\n        String bar() => true;\n        void main() {new A(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_local_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        bool hasLength(int expected) { }\n        void baz() { }');
            this.addTestSource('        import \'/libA.dart\'\n        expect(arg) { }\n        class B { }\n        String bar() => true;\n        void main() {expect(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_local_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        bool hasLength(int expected) { }\n        void baz() { }');
            this.addTestSource('        import \'/libA.dart\'\n        class B {\n          expect(arg) { }\n          void foo() {expect(^)}}\n        String bar() => true;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_MethodInvocation_functionalArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        class A { A(f()) { } }\n        bool hasLength(int expected) { }\n        void baz() { }');
            this.addTestSource('        import \'dart:async\';\n        import \'/libA.dart\';\n        class B { }\n        String bar(f()) => true;\n        void main() {bar(^);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_MethodInvocation_methodArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        class A { A(f()) { } }\n        bool hasLength(int expected) { }\n        void baz() { }');
            this.addTestSource('        import \'dart:async\';\n        import \'/libA.dart\';\n        class B { String bar(f()) => true; }\n        void main() {new B().bar(^);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_namedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','        library A;\n        bool hasLength(int expected) { }');
            this.addTestSource('        import \'/libA.dart\'\n        String bar() => true;\n        void main() {expect(foo: ^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('main');
        } )());
    }

    test_AsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {var a; (a as ^).foo();}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_AssignmentExpression_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {int a; int ^b = 1;}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_AssignmentExpression_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {int a; int b = ^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_AssignmentExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {} main() {\n          int a;\n          ^ b = 1;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
        } )());
    }

    test_AssignmentExpression_type_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {} main() {\n          int a;\n          ^\n          b = 1;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('identical');
        } )());
    }

    test_AssignmentExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {} main() {\n          int a;\n          int^ b = 1;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
        } )());
    }

    test_AssignmentExpression_type_partial_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {} main() {\n          int a;\n          i^\n          b = 1;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('identical');
        } )());
    }

    test_AwaitExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {int x; int y() => 0;}\n        main() async {A a; await ^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_BinaryExpression_LHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {int a = 1, b = ^ + 2;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
        } )());
    }

    test_BinaryExpression_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {int a = 1, b = 2 + ^;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('==');
        } )());
    }

    test_Block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        export "dart:math" hide max;\n        class A {int x;}\n        @deprecated D1() {int x;}\n        class _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','        String T1;\n        var _T2;\n        class C { }\n        class D { }');
            this.addSource('/testEEF.dart','        class EE { }\n        class F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','        class H { }\n        int T3;\n        var _T4;');
            this.addTestSource('        import "/testAB.dart";\n        import "/testCD.dart" hide D;\n        import "/testEEF.dart" show EE;\n        import "/testG.dart" as g;\n        int T5;\n        var _T6;\n        String get T7 => \'hello\';\n        set T8(int value) { partT8() {} }\n        Z D2() {int x;}\n        class X {\n          int get clog => 8;\n          set blog(value) { }\n          a() {\n            var f;\n            localF(int arg1) { }\n            {var x;}\n            ^ var r;\n          }\n          void b() { }}\n        class Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        export "dart:math" hide max;\n        class A {int x;}\n        @deprecated D1() {int x;}\n        class _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','        String T1;\n        var _T2;\n        class C { }\n        class D { }');
            this.addSource('/testEEF.dart','        class EE { }\n        class F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','        class H { }\n        int T3;\n        var _T4;');
            this.addTestSource('        import "/testAB.dart";\n        import "/testCD.dart" hide D;\n        import "/testEEF.dart" show EE;\n        import "/testG.dart" as g;\n        int T5;\n        var _T6;\n        String get T7 => \'hello\';\n        set T8(int value) { partT8() {} }\n        Z D2() {int x;}\n        class X {\n          int get clog => 8;\n          set blog(value) { }\n          a() {\n            var f;\n            localF(int arg1) { }\n            {var x;}\n            final ^\n          }\n          void b() { }}\n        class Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_final2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final S^ v;}');
            await this.computeSuggestions();
            this.assertNotSuggested('String');
        } )());
    }

    test_Block_final3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^ v;}');
            await this.computeSuggestions();
            this.assertNotSuggested('String');
        } )());
    }

    test_Block_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        export "dart:math" hide max;\n        class A {int x;}\n        @deprecated D1() {int x;}\n        class _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','        String T1;\n        var _T2;\n        class C { }\n        class D { }');
            this.addSource('/testEEF.dart','        class EE { }\n        class F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','        class H { }\n        int T3;\n        var _T4;');
            this.addTestSource('        import "/testAB.dart";\n        import "/testCD.dart" hide D;\n        import "/testEEF.dart" show EE;\n        import "/testG.dart" as g;\n        int T5;\n        var _T6;\n        String get T7 => \'hello\';\n        set T8(int value) { partT8() {} }\n        Z D2() {int x;}\n        class X {\n          int get clog => 8;\n          set blog(value) { }\n          a() {\n            final ^\n            final var f;\n            localF(int arg1) { }\n            {var x;}\n          }\n          void b() { }}\n        class Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        export "dart:math" hide max;\n        class A {int x;}\n        @deprecated D1() {int x;}\n        class _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','        String T1;\n        var _T2;\n        class C { }\n        class D { }');
            this.addSource('/testEEF.dart','        class EE { }\n        class F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','        class H { }\n        int T3;\n        var _T4;');
            this.addTestSource('        import "/testAB.dart";\n        import "/testCD.dart" hide D;\n        import "/testEEF.dart" show EE;\n        import "/testG.dart" as g;\n        int T5;\n        var _T6;\n        String get T7 => \'hello\';\n        set T8(int value) { partT8() {} }\n        Z D2() {int x;}\n        class X {\n          int get clog => 8;\n          set blog(value) { }\n          a() {\n            final ^\n            var f;\n            localF(int arg1) { }\n            {var x;}\n          }\n          void b() { }}\n        class Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_identifier_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        export "dart:math" hide max;\n        class A {int x;}\n        @deprecated D1() {int x;}\n        class _B { }');
            this.addSource('/testCD.dart','        String T1;\n        var _T2;\n        class C { }\n        class D { }');
            this.addSource('/testEEF.dart','        class EE { }\n        class F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','        class H { }\n        class D3 { }\n        int T3;\n        var _T4;');
            this.addTestSource('        import "/testAB.dart";\n        import "/testCD.dart" hide D;\n        import "/testEEF.dart" show EE;\n        import "/testG.dart" as g;\n        int T5;\n        var _T6;\n        Z D2() {int x;}\n        class X {a() {var f; {var x;} D^ var r;} void b() { }}\n        class Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('D');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('D3');
            this.assertNotSuggested('G');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('==');
            this.assertNotSuggested('HtmlElement');
        } )());
    }

    test_Block_inherited_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        class F { var f1; f2() { } get f3 => 0; set f4(fx) { } var _pf; }\n        class E extends F { var e1; e2() { } }\n        class I { int i1; i2() { } }\n        class M { var m1; int m2() { } }');
            this.addTestSource('        import "/testB.dart";\n        class A extends E implements I with M {a() {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e1');
            this.assertNotSuggested('f1');
            this.assertNotSuggested('i1');
            this.assertNotSuggested('m1');
            this.assertNotSuggested('f3');
            this.assertNotSuggested('f4');
            this.assertNotSuggested('e2');
            this.assertNotSuggested('f2');
            this.assertNotSuggested('i2');
            this.assertNotSuggested('==');
        } )());
    }

    test_Block_inherited_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class F { var f1; f2() { } get f3 => 0; set f4(fx) { } }\n        class E extends F { var e1; e2() { } }\n        class I { int i1; i2() { } }\n        class M { var m1; int m2() { } }\n        class A extends E implements I with M {a() {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e1');
            this.assertNotSuggested('f1');
            this.assertNotSuggested('i1');
            this.assertNotSuggested('m1');
            this.assertNotSuggested('f3');
            this.assertNotSuggested('f4');
            this.assertNotSuggested('e2');
            this.assertNotSuggested('f2');
            this.assertNotSuggested('i2');
            this.assertNotSuggested('m2');
        } )());
    }

    test_Block_local_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        export "dart:math" hide max;\n        class A {int x;}\n        @deprecated D1() {int x;}\n        class _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','        String T1;\n        var _T2;\n        class C { }\n        class D { }');
            this.addSource('/testEEF.dart','        class EE { }\n        class F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','        class H { }\n        int T3;\n        var _T4;');
            this.addTestSource('        import "/testAB.dart";\n        import "/testCD.dart" hide D;\n        import "/testEEF.dart" show EE;\n        import "/testG.dart" as g;\n        int T5;\n        var _T6;\n        String get T7 => \'hello\';\n        set T8(int value) { partT8() {} }\n        Z D2() {int x;}\n        class X {\n          int get clog => 8;\n          set blog(value) { }\n          a() {\n            var f;\n            localF(int arg1) { }\n            {var x;}\n            p^ var r;\n          }\n          void b() { }}\n        class Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_unimported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('myBar','bar.dart','class Foo2 { Foo2() { } }');
            this.addSource('/proj/testAB.dart','import "package:myBar/bar.dart"; class Foo { }');
            this.testFile = '/proj/completionTest.dart';
            this.addTestSource('class C {foo(){F^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('Foo');
            this.assertNotSuggested('Foo2');
            this.assertNotSuggested('Future');
        } )());
    }

    test_CascadeExpression_method1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "/testB.dart";\n        class A {var b; X _c;}\n        class X{}\n        // looks like a cascade to the parser\n        // but the user is trying to get completions for a non-cascade\n        main() {A a; a.^.z()}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null);
            this.assertSuggestField('_c','X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('X');
            this.assertNotSuggested('z');
            this.assertNotSuggested('==');
        } )());
    }

    test_CascadeExpression_selector1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "/testB.dart";\n        class A {var b; X _c;}\n        class X{}\n        // looks like a cascade to the parser\n        // but the user is trying to get completions for a non-cascade\n        main() {A a; a.^.z}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null);
            this.assertSuggestField('_c','X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('X');
            this.assertNotSuggested('z');
            this.assertNotSuggested('==');
        } )());
    }

    test_CascadeExpression_selector2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "/testB.dart";\n        class A {var b; X _c;}\n        class X{}\n        main() {A a; a..^z}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,1);
            this.assertSuggestField('b',null);
            this.assertSuggestField('_c','X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('X');
            this.assertNotSuggested('z');
            this.assertNotSuggested('==');
        } )());
    }

    test_CascadeExpression_selector2_withTrailingReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "/testB.dart";\n        class A {var b; X _c;}\n        class X{}\n        main() {A a; a..^ return}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null);
            this.assertSuggestField('_c','X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('X');
            this.assertNotSuggested('z');
            this.assertNotSuggested('==');
        } )());
    }

    test_CascadeExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c;}\n        class X{}\n        main() {A a; a^..b}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('==');
        } )());
    }

    test_CatchClause_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on ^ {}}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('a');
            this.assertNotSuggested('x');
        } )());
    }

    test_CatchClause_onType_noBrackets() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('x');
        } )());
    }

    test_CatchClause_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on E catch (e) {^}}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('x');
        } )());
    }

    test_CatchClause_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} catch (e, s) {^}}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e');
            this.assertNotSuggested('s');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "testB.dart" as x;\n        @deprecated class A {^}\n        class _B {}\n        A T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "testB.dart" as x;\n        class A {final ^}\n        class _B {}\n        A T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "testB.dart" as x;\n        class A {final ^ A(){}}\n        class _B {}\n        A T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('String');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "testB.dart" as Soo;\n        class A {final S^ A();}\n        class _B {}\n        A Sew;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('String');
            this.assertNotSuggested('Sew');
            this.assertNotSuggested('Soo');
        } )());
    }

    test_ClassDeclaration_body_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "testB.dart" as x;\n        class A {final ^ final foo;}\n        class _B {}\n        A T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        class B { }');
            this.addTestSource('        import "testB.dart" as x;\n        class A {final ^ var foo;}\n        class _B {}\n        A T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_Combinator_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        library libAB;\n        part \'/partAB.dart\';\n        class A { }\n        class B { }');
            this.addSource('/partAB.dart','        part of libAB;\n        var T1;\n        PB F1() => new PB();\n        class PB { }');
            this.addSource('/testCD.dart','        class C { }\n        class D { }');
            this.addTestSource('        import "/testAB.dart" hide ^;\n        import "/testCD.dart";\n        class X {}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_Combinator_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','        library libAB;\n        part \'/partAB.dart\';\n        class A { }\n        class B { }');
            this.addSource('/partAB.dart','        part of libAB;\n        var T1;\n        PB F1() => new PB();\n        typedef PB2 F2(int blat);\n        class Clz = Object with Object;\n        class PB { }');
            this.addSource('/testCD.dart','        class C { }\n        class D { }');
            this.addTestSource('        import "/testAB.dart" show ^;\n        import "/testCD.dart";\n        class X {}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ConditionalExpression_elseExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        class B {int x;}\n        class C {foo(){var f; {var x;} return a ? T1 : T^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_ConditionalExpression_elseExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        class B {int x;}\n        class C {foo(){var f; {var x;} return a ? T1 : ^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('f');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('C');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_ConditionalExpression_partial_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        class B {int x;}\n        class C {foo(){var f; {var x;} return a ? T^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_ConditionalExpression_partial_thenExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        class B {int x;}\n        class C {foo(){var f; {var x;} return a ? ^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('f');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('C');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_ConditionalExpression_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        class B {int x;}\n        class C {foo(){var f; {var x;} return a ? T^ : c}}');
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_ConstructorName_importedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        var m;\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_importedFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {factory X.c(); factory X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        var m;\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_importedFactory2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() {new String.fr^omCharCodes([]);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,13);
            this.assertNotSuggested('fromCharCodes');
            this.assertNotSuggested('isEmpty');
            this.assertNotSuggested('isNotEmpty');
            this.assertNotSuggested('length');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('String');
        } )());
    }

    test_ConstructorName_localClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_localFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        int T1;\n        F1() { }\n        class X {factory X.c(); factory X._d(); z() {}}\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_DefaultFormalParameter_named_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        foo() { }\n        void bar() { }\n        class A {a(blat: ^) { }}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('String');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('bar');
        } )());
    }

    test_enumConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
            this.assertNotSuggested('index');
            this.assertNotSuggested('values');
        } )());
    }

    test_enumConst2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.o^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
            this.assertNotSuggested('index');
            this.assertNotSuggested('values');
        } )());
    }

    test_enumConst3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.^ int g;}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
            this.assertNotSuggested('index');
            this.assertNotSuggested('values');
        } )());
    }

    test_enumConst_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.one.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
            this.assertSuggestField('index','int');
            this.assertNotSuggested('values');
        } )());
    }

    test_enumConst_index2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.one.i^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
            this.assertSuggestField('index','int');
            this.assertNotSuggested('values');
        } )());
    }

    test_enumConst_index3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.one.^ int g;}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
            this.assertSuggestField('index','int');
            this.assertNotSuggested('values');
        } )());
    }

    test_ExpressionStatement_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        _B F1() { }\n        class A {int x;}\n        class _B { }');
            this.addTestSource('        import "/testA.dart";\n        typedef int F2(int blat);\n        class Clz = Object with Object;\n        class C {foo(){^} void bar() {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('C');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('Clz');
            this.assertNotSuggested('C');
            this.assertNotSuggested('x');
            this.assertNotSuggested('_B');
        } )());
    }

    test_ExpressionStatement_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        B T1;\n        class B{}');
            this.addTestSource('        import "/testA.dart";\n        class C {a() {C ^}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_FieldDeclaration_name_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A { }');
            this.addTestSource('        import "/testA.dart";\n        class C {A ^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_FieldDeclaration_name_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A { }');
            this.addTestSource('        import "/testA.dart";\n        class C {var ^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_FieldFormalParameter_in_non_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {B(this.^foo) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,3);
            this.assertNoSuggestions();
        } )());
    }

    test_ForEachStatement_body_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in bar) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_body_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (foo in bar) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in ^) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_loopVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (^ in args) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('String');
        } )());
    }

    test_ForEachStatement_loopVariable_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (^ foo in args) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('String');
        } )());
    }

    test_ForEachStatement_loopVariable_type2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (S^ foo in args) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('String');
        } )());
    }

    test_FormalParameterList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        foo() { }\n        void bar() { }\n        class A {a(^) { }}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('String');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('bar');
        } )());
    }

    test_ForStatement_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int i; i < 10; ++i) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('i');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('index');
        } )());
    }

    test_ForStatement_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List a; for (^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('int');
        } )());
    }

    test_ForStatement_updaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; index < 10; i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('index');
        } )());
    }

    test_ForStatement_updaters_prefix_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        void bar() { }\n        main() {for (int index = 0; index < 10; ++i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('index');
            this.assertNotSuggested('main');
            this.assertNotSuggested('bar');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 { }\n        /* */ ^ zoo(z) { } String name;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 { }\n        /** */ ^ zoo(z) { } String name;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        /// some dartdoc\n        class C2 { }\n        ^ zoo(z) { } String name;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionExpression_body_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        void bar() { }\n        String foo(List args) {x.then((R b) {^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('args');
            this.assertNotSuggested('b');
            this.assertNotSuggested('Object');
        } )());
    }

    test_generic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C<T> {\n  T t;\n}\nvoid f(C<int> c) {\n  c.^\n}\n');
            await this.computeSuggestions();
            this.assertSuggestField('t','int');
        } )());
    }

    test_generic_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C<T> {\n  T get t => null;\n}\nvoid f(C<int> c) {\n  c.^\n}\n');
            await this.computeSuggestions();
            this.assertSuggestGetter('t','int');
        } )());
    }

    test_generic_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C<T> {\n  T m(T t) {}\n}\nvoid f(C<int> c) {\n  c.^\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','C','int');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'int');
            expect(suggestion.element.returnType,'int');
            expect(suggestion.element.parameters,'(int t)');
        } )());
    }

    test_generic_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C<T> {\n  set t(T value) {}\n}\nvoid f(C<int> c) {\n  c.^\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestSetter('t');
            expect(suggestion.element.parameters,'(int value)');
        } )());
    }

    test_IfStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {A a; if (true) ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_IfStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {int x; int y() => 0;}\n        main(){var a; if (^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IfStatement_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {A a; if (^) something}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_IfStatement_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() {var a; if (a.^) something}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestMethod('toString','Object','String');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_ImportDirective_dart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        import "dart^";\n        main() {}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_IndexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        class B {int x;}\n        class C {foo(){var f; {var x;} f[^]}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('f');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('C');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_IndexExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        class B {int x;}\n        class C {foo(){var f; {var x;} f[T^]}}');
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_InstanceCreationExpression_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        class A {A(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        import "dart:async";\n        int T2;\n        F2() { }\n        class B {B(this.x, [String boo]) { } int x;}\n        class C {foo(){var f; {var x;} new ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('Future');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('f');
            this.assertNotSuggested('x');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
        } )());
    }

    test_InstanceCreationExpression_unimported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','class Foo { }');
            this.addTestSource('class C {foo(){new F^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('Future');
            this.assertNotSuggested('Foo');
        } )());
    }

    test_InterpolationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 { }\n        main() {String name; print("hello $^");}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_InterpolationExpression_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 { }\n        main() {String name; print("hello ${^}");}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_InterpolationExpression_block2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${n^}");}');
            await this.computeSuggestions();
            this.assertNotSuggested('name');
        } )());
    }

    test_InterpolationExpression_prefix_selector() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${name.^}");}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestGetter('length','int');
            this.assertNotSuggested('name');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_InterpolationExpression_prefix_selector2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello $name.^");}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_InterpolationExpression_prefix_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${nam^e.length}");}');
            await this.computeSuggestions();
            this.assertNotSuggested('name');
            this.assertNotSuggested('length');
        } )());
    }

    test_IsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        foo() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        class Y {Y.c(); Y._d(); z() {}}\n        main() {var x; if (x is ^) { }}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('x');
            this.assertNotSuggested('main');
            this.assertNotSuggested('foo');
        } )());
    }

    test_IsExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        foo() { }\n        void bar() { }\n        class A {int x; int y() => 0;}\n        main(){var a; if (^ is A)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {int x; int y() => 0;}\n        main(){var a; if (a is ^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {int x; int y() => 0;}\n        main(){var a; if (a is Obj^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C { static C get instance => null; } main() {C.in^}');
            await this.computeSuggestions();
            this.assertNotSuggested('instance');
        } )());
    }

    test_keyword2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int newT1;\n        int T1;\n        nowIsIt() { }\n        class X {factory X.c(); factory X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        String newer() {}\n        var m;\n        main() {new^ X.c();}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('c');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('nowIsIt');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
            this.assertNotSuggested('newer');
        } )());
    }

    test_libraryPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as bar; foo() {bar.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('Future');
            this.assertNotSuggested('loadLibrary');
        } )());
    }

    test_libraryPrefix2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as bar; foo() {bar.^ print("f")}');
            await this.computeSuggestions();
            this.assertNotSuggested('Future');
        } )());
    }

    test_libraryPrefix3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as bar; foo() {new bar.F^ print("f")}');
            await this.computeSuggestions();
            this.assertNotSuggested('Future');
            this.assertNotSuggested('Future.delayed');
        } )());
    }

    test_libraryPrefix_deferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" deferred as bar; foo() {bar.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('Future');
            this.assertNotSuggested('loadLibrary');
        } )());
    }

    test_libraryPrefix_with_exports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A { }');
            this.addSource('/libB.dart','library libB; export "/libA.dart"; class B { }');
            this.addTestSource('import "/libB.dart" as foo; main() {foo.^} class C { }');
            await this.computeSuggestions();
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
        } )());
    }

    test_Literal_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([^]);}');
            await this.computeSuggestions();
            this.assertNotSuggested('Some');
            this.assertNotSuggested('String');
        } )());
    }

    test_Literal_list2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([S^]);}');
            await this.computeSuggestions();
            this.assertNotSuggested('Some');
            this.assertNotSuggested('String');
        } )());
    }

    test_Literal_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hel^lo"}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {String x = "bar"; x.^}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_local_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {var x; if (x is String) x.^}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_local_propogatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {var x = "bar"; x.^}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_localVariableDeclarationName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String m^}');
            await this.computeSuggestions();
            this.assertNotSuggested('main');
            this.assertNotSuggested('min');
        } )());
    }

    test_MapLiteralEntry() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 { }\n        foo = {^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
        } )());
    }

    test_MapLiteralEntry1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 { }\n        foo = {T^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('T2');
        } )());
    }

    test_MapLiteralEntry2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 { }\n        foo = {7:T^};');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('T2');
        } )());
    }

    test_method_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  void m(x, {int y}) {}\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','C','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,1);
            expect(suggestion.hasNamedParameters,true);
        } )());
    }

    test_method_parameters_mixed_required_and_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  void m(x, [int y]) {}\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','C','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,1);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_method_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  void m({x, int y}) {}\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','C','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,true);
        } )());
    }

    test_method_parameters_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  void m() {}\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','C','void');
            expect(suggestion.parameterNames,isEmpty);
            expect(suggestion.parameterTypes,isEmpty);
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_method_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  void m([x, int y]) {}\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','C','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_method_parameters_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  void m(x, int y) {}\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','C','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,2);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_MethodDeclaration_body_getters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated X get f => 0; Z a() {^} get _g => 1;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
        } )());
    }

    test_MethodDeclaration_body_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testC.dart','        class C {\n          c1() {}\n          var c2;\n          static c3() {}\n          static var c4;}');
            this.addTestSource('        import "/testC.dart";\n        class B extends C {\n          b1() {}\n          var b2;\n          static b3() {}\n          static var b4;}\n        class A extends B {\n          a1() {}\n          var a2;\n          static a3() {}\n          static var a4;\n          static a() {^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('a1');
            this.assertNotSuggested('a2');
            this.assertNotSuggested('a3');
            this.assertNotSuggested('a4');
            this.assertNotSuggested('b1');
            this.assertNotSuggested('b2');
            this.assertNotSuggested('b3');
            this.assertNotSuggested('b4');
            this.assertNotSuggested('c1');
            this.assertNotSuggested('c2');
            this.assertNotSuggested('c3');
            this.assertNotSuggested('c4');
        } )());
    }

    test_MethodDeclaration_members() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated X f; Z _a() {^} var _g;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('_a');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('bool');
        } )());
    }

    test_MethodDeclaration_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated Z a(X x, _, b, {y: boo}) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
            this.assertNotSuggested('b');
            this.assertNotSuggested('int');
            this.assertNotSuggested('_');
        } )());
    }

    test_MethodDeclaration_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        foo() { }\n        void bar() { }\n        class A {Z a(X x, [int y=1]) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('a');
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
            this.assertNotSuggested('String');
        } )());
    }

    test_MethodDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 {^ zoo(z) { } String name; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 {/* */ ^ zoo(z) { } String name; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 {/** */ ^ zoo(z) { } String name; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        int T1;\n        F1() { }\n        typedef D1();\n        class C1 {C1(this.x) { } int x;}');
            this.addTestSource('        import "/testA.dart";\n        int T2;\n        F2() { }\n        typedef D2();\n        class C2 {\n          /// some dartdoc\n          ^ zoo(z) { } String name; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodInvocation_no_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A(); F $p; void $q(){}}\n        class A implements I {\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {x.^ m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestGetter('f','X');
            this.assertSuggestGetter('_g',null);
            this.assertSuggestField('$p','dynamic',{
                relevance : DART_RELEVANCE_LOW});
            this.assertSuggestMethod('$q','I','void',{
                relevance : DART_RELEVANCE_LOW});
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_new_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:math"; class A {x() {new Random().^}}');
            await this.computeSuggestions();
            this.assertSuggestMethod('nextBool','Random','bool');
            this.assertSuggestMethod('nextDouble','Random','double');
            this.assertSuggestMethod('nextInt','Random','int');
            this.assertNotSuggested('Random');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
        } )());
    }

    test_no_parameters_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  int x;\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestField('x','int');
            this.assertHasNoParameterInfo(suggestion);
        } )());
    }

    test_no_parameters_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  int get x => null;\n}\nvoid main() {int y = new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestGetter('x','int');
            this.assertHasNoParameterInfo(suggestion);
        } )());
    }

    test_no_parameters_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  set x(int value) {};\n}\nvoid main() {int y = new C().^}');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestSetter('x');
            this.assertHasNoParameterInfo(suggestion);
        } )());
    }

    test_only_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {new C().^}');
            await this.computeSuggestions();
            this.assertSuggestField('f1','int');
            this.assertNotSuggested('f2');
            this.assertSuggestMethod('m1','C',null);
            this.assertNotSuggested('m2');
        } )());
    }

    test_only_instance2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {new C().^ print("something");}');
            await this.computeSuggestions();
            this.assertSuggestField('f1','int');
            this.assertNotSuggested('f2');
            this.assertSuggestMethod('m1','C',null);
            this.assertNotSuggested('m2');
        } )());
    }

    test_only_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('f1');
            this.assertNotSuggested('f2');
            this.assertNotSuggested('m1');
            this.assertNotSuggested('m2');
        } )());
    }

    test_only_static2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C.^ print("something");}');
            await this.computeSuggestions();
            this.assertNotSuggested('f1');
            this.assertNotSuggested('f2');
            this.assertNotSuggested('m1');
            this.assertNotSuggested('m2');
        } )());
    }

    test_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo(String x) {x.^}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_param_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo(x) {if (x is String) x.^}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_parameterName_excludeTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(int ^) {}');
            await this.computeSuggestions();
            this.assertNotSuggested('int');
            this.assertNotSuggested('bool');
        } )());
    }

    test_partFile_TypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart',`        library libA;\n        import "/testB.dart";\n        part "${this.testFile}";\n        class A { }\n        var m;`);
            this.addTestSource('        part of libA;\n        class B { factory B.bar(int x) => null; }\n        main() {new ^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('B.bar');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_partFile_TypeName2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart','        part of libA;\n        class B { }');
            this.addTestSource('        library libA;\n        import "/testB.dart";\n        part "/testA.dart";\n        class A { A({String boo: \'hoo\'}) { } }\n        main() {new ^}\n        var m;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('B');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_PrefixedIdentifier_class_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        class I {\n          static const scI = \'boo\';\n          X get f => new A();\n          get _g => new A();}\n        class B implements I {\n          static const int scB = 12;\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          set s1(I x) {} set _s2(I x) {}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            this.addTestSource('        import "/testB.dart";\n        class A extends B {\n          static const String scA = \'foo\';\n          w() { }}\n        main() {A.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('scA');
            this.assertNotSuggested('scB');
            this.assertNotSuggested('scI');
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('w');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_class_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          static const int sc = 12;\n          @deprecated var b; X _c;\n          X get d => new A();get _e => new A();\n          set s1(I x) {} set _s2(I x) {}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            this.addTestSource('        import "/testB.dart";\n        main() {A a; a.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('sc');
            this.assertSuggestField('b',null,{
                isDeprecated : true});
            this.assertNotSuggested('_c');
            this.assertSuggestGetter('d','X');
            this.assertNotSuggested('_e');
            this.assertSuggestGetter('f','X');
            this.assertNotSuggested('_g');
            this.assertSuggestSetter('s1');
            this.assertNotSuggested('_s2');
            this.assertSuggestMethod('m','A',null);
            this.assertNotSuggested('_n');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_class_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() {A a; a.^}\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          static const int sc = 12;\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          set s1(I x) {} set _s2(I x) {}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('sc');
            this.assertSuggestField('b',null);
            this.assertSuggestField('_c','X');
            this.assertSuggestGetter('d','X');
            this.assertSuggestGetter('_e',null);
            this.assertSuggestGetter('f','X');
            this.assertSuggestGetter('_g',null);
            this.assertSuggestSetter('s1');
            this.assertSuggestSetter('_s2');
            this.assertSuggestMethod('m','A',null);
            this.assertSuggestMethod('_n','A','I');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String get g => "one"; f() {g.^}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        var T1;\n        class X { }\n        class Y { }');
            this.addTestSource('        import "/testB.dart" as b;\n        var T2;\n        class A { }\n        main() {b.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_library_typesOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        var T1;\n        class X { }\n        class Y { }');
            this.addTestSource('        import "/testB.dart" as b;\n        var T2;\n        class A { }\n        foo(b.^ f) {}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_library_typesOnly2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        var T1;\n        class X { }\n        class Y { }');
            this.addTestSource('        import "/testB.dart" as b;\n        var T2;\n        class A { }\n        foo(b.^) {}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        class _W {M y; var _z;}\n        class X extends _W {}\n        class M{}');
            this.addTestSource('        import "/testB.dart";\n        foo(X x) {x.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('y','M');
            this.assertNotSuggested('_z');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        class A {static int bar = 10;}\n        _B() {}');
            this.addTestSource('        import "/testA.dart";\n        class X {foo(){A^.bar}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('_B');
        } )());
    }

    test_PrefixedIdentifier_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String x; int get foo {x.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestGetter('isEmpty','bool');
            this.assertSuggestMethod('compareTo','Comparable','int');
        } )());
    }

    test_PrefixedIdentifier_propertyAccess_newStmt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String x; int get foo {x.^ int y = 0;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestGetter('isEmpty','bool');
            this.assertSuggestMethod('compareTo','Comparable','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('const String g = "hello"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_const_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('const g = "hello"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestMethod('toString','Object','String');
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g; f() {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String g() => "one"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('typedef String g(); f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String get g => "one"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_local_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f() {String g; g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_local_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f() {var g = "hello"; g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g() {}; f() {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {f(String g) {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f(String g) {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_topLevelVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String g; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertSuggestGetter('length','int');
        } )());
    }

    test_PropertyAccess_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hello".to^String().length}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,8);
            this.assertSuggestGetter('length','int');
            this.assertNotSuggested('A');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PropertyAccess_noTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','class Foo { }');
            this.addTestSource('class C {foo(){.^}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_PropertyAccess_noTarget2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','class Foo { }');
            this.addTestSource('main() {.^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_PropertyAccess_selector() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hello".length.^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestGetter('isEven','bool');
            this.assertNotSuggested('A');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_shadowing_field_over_field() {
        return this.check_shadowing('int x;','int x;',true);
    }
    test_shadowing_field_over_getter() {
        return this.check_shadowing('int x;','int get x => null;',true);
    }
    test_shadowing_field_over_method() {
        return this.check_shadowing('int x;','void x() {}',true);
    }
    test_shadowing_field_over_setter() {
        return this.check_shadowing('int x;','set x(int value) {}',true);
    }
    test_shadowing_getter_over_field() {
        return this.check_shadowing('int get x => null;','int x;',false);
    }
    test_shadowing_getter_over_getter() {
        return this.check_shadowing('int get x => null;','int get x => null;',true);
    }
    test_shadowing_getter_over_method() {
        return this.check_shadowing('int get x => null;','void x() {}',true);
    }
    test_shadowing_getter_over_setter() {
        return this.check_shadowing('int get x => null;','set x(int value) {}',false);
    }
    test_shadowing_method_over_field() {
        return this.check_shadowing('void x() {}','int x;',true);
    }
    test_shadowing_method_over_getter() {
        return this.check_shadowing('void x() {}','int get x => null;',true);
    }
    test_shadowing_method_over_method() {
        return this.check_shadowing('void x() {}','void x() {}',true);
    }
    test_shadowing_method_over_setter() {
        return this.check_shadowing('void x() {}','set x(int value) {}',true);
    }
    test_shadowing_mixin_order() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class Base {\n}\nclass Mixin1 {\n  void f() {}\n}\nclass Mixin2 {\n  void f() {}\n}\nclass Derived extends Base with Mixin1, Mixin2 {\n}\nvoid test(Derived d) {\n  d.^\n}\n');
            await this.computeSuggestions();
            this.assertSuggestMethod('f','Mixin2','void');
        } )());
    }

    test_shadowing_mixin_over_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class Base {\n  void f() {}\n}\nclass Mixin {\n  void f() {}\n}\nclass Derived extends Base with Mixin {\n}\nvoid test(Derived d) {\n  d.^\n}\n');
            await this.computeSuggestions();
            this.assertSuggestMethod('f','Mixin','void');
        } )());
    }

    test_shadowing_setter_over_field() {
        return this.check_shadowing('set x(int value) {}','int x;',false);
    }
    test_shadowing_setter_over_getter() {
        return this.check_shadowing('set x(int value) {}','int get x => null;',false);
    }
    test_shadowing_setter_over_method() {
        return this.check_shadowing('set x(int value) {}','void x() {}',true);
    }
    test_shadowing_setter_over_setter() {
        return this.check_shadowing('set x(int value) {}','set x(int value) {}',true);
    }
    test_shadowing_superclass_over_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class Base {\n  void f() {}\n}\nclass Interface {\n  void f() {}\n}\nclass Derived extends Base implements Interface {\n}\nvoid test(Derived d) {\n  d.^\n}\n');
            await this.computeSuggestions();
            this.assertSuggestMethod('f','Base','void');
        } )());
    }

    test_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C3 {\n  int fi3;\n  static int fs3;\n  m() {}\n  mi3() {}\n  static ms3() {}\n}\nclass C2 {\n  int fi2;\n  static int fs2;\n  m() {}\n  mi2() {}\n  static ms2() {}\n}\nclass C1 extends C2 implements C3 {\n  int fi1;\n  static int fs1;\n  m() {super.^}\n  mi1() {}\n  static ms1() {}\n}');
            await this.computeSuggestions();
            this.assertNotSuggested('fi1');
            this.assertNotSuggested('fs1');
            this.assertNotSuggested('mi1');
            this.assertNotSuggested('ms1');
            this.assertSuggestField('fi2','int');
            this.assertNotSuggested('fs2');
            this.assertSuggestMethod('mi2','C2',null);
            this.assertNotSuggested('ms2');
            this.assertSuggestMethod('m','C2',null,{
                relevance : DART_RELEVANCE_HIGH});
            this.assertNotSuggested('fi3');
            this.assertNotSuggested('fs3');
            this.assertNotSuggested('mi3');
            this.assertNotSuggested('ms3');
        } )());
    }

    test_SwitchStatement_c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g(int x) {switch(x) {c^}}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_SwitchStatement_case() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g(int x) {var t; switch(x) {case 0: ^}}}');
            await this.computeSuggestions();
            this.assertNotSuggested('A');
            this.assertNotSuggested('g');
            this.assertNotSuggested('t');
            this.assertNotSuggested('String');
        } )());
    }

    test_SwitchStatement_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g(int x) {switch(x) {^}}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ThisExpression_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          A() {}\n          A.z() {}\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {this.^ m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null);
            this.assertSuggestField('_c','X');
            this.assertSuggestGetter('d','X');
            this.assertSuggestGetter('_e',null);
            this.assertSuggestGetter('f','X');
            this.assertSuggestGetter('_g',null);
            this.assertSuggestMethod('m','A',null);
            this.assertSuggestMethod('_n','A','I');
            this.assertSuggestSetter('s1');
            this.assertSuggestSetter('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          A() {this.^}\n          A.z() {}\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null);
            this.assertSuggestField('_c','X');
            this.assertSuggestGetter('d','X');
            this.assertSuggestGetter('_e',null);
            this.assertSuggestGetter('f','X');
            this.assertSuggestGetter('_g',null);
            this.assertSuggestMethod('m','A',null);
            this.assertSuggestMethod('_n','A','I');
            this.assertSuggestSetter('s1');
            this.assertSuggestSetter('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          A(this.^) {}\n          A.z() {}\n          var b; X _c; static sb;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('sb');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          A(this.b^) {}\n          A.z() {}\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          A(this.^b) {}\n          A.z() {}\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          A(this.b, this.^) {}\n          A.z() {}\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_TopLevelVariableDeclaration_typed_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} B ^');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_TopLevelVariableDeclaration_untyped_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} var ^');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_TypeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        class C1 {int x;}\n        F1() => 0;\n        typedef String T1(int blat);');
            this.addTestSource('        import "/testA.dart";\'\n        class C2 {int x;}\n        F2() => 0;\n        typedef int T2(int blat);\n        class C<E> {}\n        main() { C<^> c; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('F2');
        } )());
    }

    test_TypeArgumentList2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        class C1 {int x;}\n        F1() => 0;\n        typedef String T1(int blat);');
            this.addTestSource('        import "/testA.dart";\'\n        class C2 {int x;}\n        F2() => 0;\n        typedef int T2(int blat);\n        class C<E> {}\n        main() { C<C^> c; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('C1');
            this.assertNotSuggested('C2');
        } )());
    }

    test_VariableDeclaration_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        foo() { }\n        class _B { }\n        class X {X.c(); X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        class Y {Y.c(); Y._d(); z() {}}\n        main() {var ^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_VariableDeclarationList_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^} class C { }');
            await this.computeSuggestions();
            this.assertNotSuggested('Object');
            this.assertNotSuggested('C');
            this.assertNotSuggested('==');
        } )());
    }

    test_VariableDeclarationStatement_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        foo() { }\n        class _B { }\n        class X {X.c(); X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        class Y {Y.c(); Y._d(); z() {}}\n        class C {bar(){var f; {var x;} var e = ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('C');
            this.assertNotSuggested('f');
            this.assertNotSuggested('x');
            this.assertNotSuggested('e');
        } )());
    }

    test_VariableDeclarationStatement_RHS_missing_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        foo1() { }\n        void bar1() { }\n        class _B { }\n        class X {X.c(); X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        foo2() { }\n        void bar2() { }\n        class Y {Y.c(); Y._d(); z() {}}\n        class C {bar(){var f; {var x;} var e = ^ var g}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('foo1');
            this.assertNotSuggested('bar1');
            this.assertNotSuggested('foo2');
            this.assertNotSuggested('bar2');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('C');
            this.assertNotSuggested('f');
            this.assertNotSuggested('x');
            this.assertNotSuggested('e');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeMemberContributorTest() {
    }
}

export class properties {
}
