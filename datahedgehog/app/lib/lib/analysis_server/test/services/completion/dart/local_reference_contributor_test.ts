/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/local_reference_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LocalReferenceContributorTest);
    });
};
export namespace LocalReferenceContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'LocalReferenceContributorTest';
    export type Interface = Omit<LocalReferenceContributorTest, Constructors>;
}
@DartClass
export class LocalReferenceContributorTest extends lib3.DartCompletionContributorTest {
    assertSuggestLocalVariable(name : string,returnType : string,_namedArguments? : {relevance? : number}) : any {
        let {relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_LOCAL_VARIABLE}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : CompletionSuggestionKind.INVOCATION,relevance : relevance});
        expect(cs.returnType,returnType != null ? returnType : 'dynamic');
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.LOCAL_VARIABLE));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,returnType != null ? returnType : 'dynamic');
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestParameter(name : string,returnType : string,_namedArguments? : {relevance? : number}) : any {
        let {relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_PARAMETER}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : CompletionSuggestionKind.INVOCATION,relevance : relevance});
        expect(cs.returnType,returnType != null ? returnType : 'dynamic');
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.PARAMETER));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,equals(returnType != null ? returnType : 'dynamic'));
        return cs;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_ArgDefaults_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('bool hasLength(int a, bool b) => false;\nvoid main() {h^}');
            await this.computeSuggestions();
            this.assertSuggestFunction('hasLength','bool',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION,defaultArgListString : 'a, b',defaultArgumentListTextRanges : new core.DartList.literal(0,1,3,1)});
        } )());
    }

    test_ArgDefaults_function_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('bool hasLength() => false;\nvoid main() {h^}');
            await this.computeSuggestions();
            this.assertSuggestFunction('hasLength','bool',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION,defaultArgListString : null,defaultArgumentListTextRanges : null});
        } )());
    }

    test_ArgDefaults_function_with_optional_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addMetaPackageSource();
            this.addTestSource('import \'package:meta/meta.dart\';\n\nbool foo(int bar, [bool boo, int baz]) => false;\nvoid main() {h^}');
            await this.computeSuggestions();
            this.assertSuggestFunction('foo','bool',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION,defaultArgListString : 'bar',defaultArgumentListTextRanges : new core.DartList.literal(0,3)});
        } )());
    }

    test_ArgDefaults_function_with_required_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addMetaPackageSource();
            this.addTestSource('import \'package:meta/meta.dart\';\n\nbool foo(int bar, {bool boo, @required int baz}) => false;\nvoid main() {h^}');
            await this.computeSuggestions();
            this.assertSuggestFunction('foo','bool',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION,defaultArgListString : 'bar, baz: null',defaultArgumentListTextRanges : new core.DartList.literal(0,3,10,4)});
        } )());
    }

    test_ArgDefaults_method_with_required_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addMetaPackageSource();
            this.addTestSource('import \'package:meta/meta.dart\';\n\nclass A {\n  bool foo(int bar, {bool boo, @required int baz}) => false;\n  baz() {\n    f^\n  }\n}');
            await this.computeSuggestions();
            this.assertSuggestMethod('foo','A','bool',{
                relevance : DART_RELEVANCE_LOCAL_METHOD,defaultArgListString : 'bar, baz: null',defaultArgumentListTextRanges : new core.DartList.literal(0,3,10,4)});
        } )());
    }

    test_ArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'/libA.dart\';\nclass B { }\nString bar() => true;\nvoid main() {expect(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_imported_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nbool hasLength(int expected) { }\nexpect(arg) { }\nvoid baz() { }');
            this.addTestSource('import \'/libA.dart\'\nclass B { }\nString bar() => true;\nvoid main() {expect(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_functionalArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nclass A { A(f()) { } }\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'dart:async\';\nimport \'/libA.dart\';\nclass B { }\nString bar() => true;\nvoid main() {new A(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B',{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_typedefArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\ntypedef Funct();\nclass A { A(Funct f) { } }\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'dart:async\';\nimport \'/libA.dart\';\nclass B { }\nString bar() => true;\nvoid main() {new A(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B',{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_local_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'/libA.dart\'\nexpect(arg) { }\nclass B { }\nString bar() => true;\nvoid main() {expect(^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_local_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'/libA.dart\'\nclass B {\n  expect(arg) { }\n  void foo() {expect(^)}}\nString bar() => true;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_MethodInvocation_functionalArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nclass A { A(f()) { } }\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'dart:async\';\nimport \'/libA.dart\';\nclass B { }\nString bar(f()) => true;\nvoid main() {boo(){} bar(^);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestFunction('boo','dynamic',{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B',{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_MethodInvocation_functionalArg2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nclass A { A(f()) { } }\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'dart:async\';\nimport \'/libA.dart\';\nclass B { }\nString bar({inc()}) => true;\nvoid main() {boo(){} bar(inc: ^);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertSuggestFunction('bar','String',{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : op(Op.PLUS,DART_RELEVANCE_LOCAL_FUNCTION,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestFunction('boo','dynamic',{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : op(Op.PLUS,DART_RELEVANCE_LOCAL_FUNCTION,DART_RELEVANCE_INCREMENT)});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B',{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_MethodInvocation_methodArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nclass A { A(f()) { } }\nbool hasLength(int expected) { }\nvoid baz() { }');
            this.addTestSource('import \'dart:async\';\nimport \'/libA.dart\';\nclass B { String bar(f()) => true; }\nvoid main() {new B().bar(^);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertSuggestClass('B',{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_namedFieldParam_tear_off() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','typedef void VoidCallback();\n        \nclass Button {\n  final VoidCallback onPressed;\n  Button({this.onPressed});\n}\n');
            this.addTestSource('import \'/libA.dart\';\n\nclass PageState {\n  void _incrementCounter() { }\n  build() =>\n    new Button(\n      onPressed: ^\n    );  \n}    \n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('_incrementCounter',{
                csKind : CompletionSuggestionKind.IDENTIFIER});
        } )());
    }

    test_ArgumentList_namedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;\nbool hasLength(int expected) { }');
            this.addTestSource('import \'/libA.dart\'\nString bar() => true;\nvoid main() {expect(foo: ^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestFunction('bar','String',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('main');
        } )());
    }

    test_ArgumentList_namedParam_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {}\n        class B extends A {}\n        class C implements A {}\n        class D {}\n        class E {\n          A a;\n          E({A someA});\n        }\n        A a = new A();\n        B b = new B();\n        C c = new C();\n        D d = new D();\n        E e = new E(someA: ^);\n  ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestTopLevelVar('a','A',{
                relevance : op(Op.PLUS,DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestTopLevelVar('b','B',{
                relevance : op(Op.PLUS,DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestTopLevelVar('c','C',{
                relevance : op(Op.PLUS,DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestTopLevelVar('d','D',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestTopLevelVar('e','E',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        } )());
    }

    test_ArgumentList_namedParam_tear_off() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','typedef void VoidCallback();\n        \nclass Button {\n  Button({VoidCallback onPressed});\n}\n');
            this.addTestSource('import \'/libA.dart\';\n\nclass PageState {\n  void _incrementCounter() { }\n  build() =>\n    new Button(\n      onPressed: ^\n    );  \n}    \n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('_incrementCounter',{
                csKind : CompletionSuggestionKind.IDENTIFIER});
        } )());
    }

    test_ArgumentList_namedParam_tear_off_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','typedef void VoidCallback();\n        \nclass Button {\n  Button({VoidCallback onPressed, int x});\n}\n');
            this.addTestSource('import \'/libA.dart\';\n\nclass PageState {\n  void _incrementCounter() { }\n  build() =>\n    new Button(\n      onPressed: ^\n    );  \n}    \n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('_incrementCounter',{
                csKind : CompletionSuggestionKind.IDENTIFIER});
        } )());
    }

    test_ArgumentList_namedParam_tear_off_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','typedef void VoidCallback();\n        \nclass Button {\n  Button({ int x, VoidCallback onPressed);\n}\n');
            this.addTestSource('import \'/libA.dart\';\n\nclass PageState {\n  void _incrementCounter() { }\n  build() =>\n    new Button(\n      onPressed: ^\n    );  \n}    \n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('_incrementCounter',{
                csKind : CompletionSuggestionKind.IDENTIFIER});
        } )());
    }

    test_AsExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {var a; (a as ^).foo();}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertSuggestClass('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_AsExpression_type_filter_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B extends A {} class C extends A {} class D {}\nf(A a){ (a as ^) }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('B');
            this.assertSuggestClass('C');
            this.assertNotSuggested('A');
            this.assertNotSuggested('D');
            this.assertNotSuggested('Object');
        } )());
    }

    test_AsExpression_type_filter_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B implements A {} class C implements A {} class D {}\nf(A a){ (a as ^) }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('B');
            this.assertSuggestClass('C');
            this.assertNotSuggested('A');
            this.assertNotSuggested('D');
            this.assertNotSuggested('Object');
        } )());
    }

    test_AsExpression_type_filter_undefined_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {}\nf(U u){ (u as ^) }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
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
            this.assertSuggestLocalVariable('a','int');
            this.assertSuggestFunction('main',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestClass('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_AssignmentExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {\n  int a;\n  ^ b = 1;\n}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
            this.assertNotSuggested('int');
        } )());
    }

    test_AssignmentExpression_type_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {\n  int a;\n  ^\n  b = 1;\n}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
            this.assertNotSuggested('int');
            this.assertSuggestLocalVariable('a','int');
            this.assertSuggestFunction('main',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('identical');
        } )());
    }

    test_AssignmentExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {\n  int a;\n  int^ b = 1;\n}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertSuggestClass('A');
            this.assertNotSuggested('int');
        } )());
    }

    test_AssignmentExpression_type_partial_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {\n  int a;\n  i^\n  b = 1;\n}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestClass('A');
            this.assertNotSuggested('int');
            this.assertSuggestLocalVariable('a','int');
            this.assertSuggestFunction('main',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('identical');
        } )());
    }

    test_AwaitExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}\nmain() async {A a; await ^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLocalVariable('a','A');
            this.assertSuggestFunction('main',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestClass('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_AwaitExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {\n          int x;\n          Future y() async {return 0;}\n          foo() async {await ^ await y();}\n        }\n        ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestMethod('y','A','Future',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestClass('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_BinaryExpression_LHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {int a = 1, b = ^ + 2;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLocalVariable('a','int');
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
            this.assertSuggestLocalVariable('a','int');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('==');
        } )());
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
            this.assertSuggestClass('X',{
                elemFile : this.testFile});
            this.assertSuggestClass('Z');
            this.assertSuggestMethod('a','X',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestMethod('b','X','void',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestFunction('localF',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestLocalVariable('f',null);
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertSuggestFunction('D2','Z',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertSuggestTopLevelVar('T5','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestTopLevelVar('_T6',null,{
                relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('==');
            this.assertSuggestGetter('T7','String',{
                relevance : DART_RELEVANCE_LOCAL_ACCESSOR});
            this.assertSuggestSetter('T8',{
                relevance : DART_RELEVANCE_LOCAL_ACCESSOR});
            this.assertSuggestGetter('clog','int',{
                relevance : DART_RELEVANCE_LOCAL_ACCESSOR});
            this.assertSuggestSetter('blog',{
                relevance : DART_RELEVANCE_LOCAL_ACCESSOR});
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nString get T7 => \'hello\';\nset T8(int value) { partT8() {} }\nZ D2() {int x;}\nclass X {\n  int get clog => 8;\n  set blog(value) { }\n  a() {\n    var f;\n    localF(int arg1) { }\n    {var x;}\n    final ^\n  }\n  void b() { }}\nclass Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Z');
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
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nString get T7 => \'hello\';\nset T8(int value) { partT8() {} }\nZ D2() {int x;}\nclass X {\n  int get clog => 8;\n  set blog(value) { }\n  a() {\n    final ^\n    final var f;\n    localF(int arg1) { }\n    {var x;}\n  }\n  void b() { }}\nclass Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Z');
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
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nString get T7 => \'hello\';\nset T8(int value) { partT8() {} }\nZ D2() {int x;}\nclass X {\n  int get clog => 8;\n  set blog(value) { }\n  a() {\n    final ^\n    var f;\n    localF(int arg1) { }\n    {var x;}\n  }\n  void b() { }}\nclass Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Z');
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
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B { }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nclass D3 { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nZ D2() {int x;}\nclass X {a() {var f; {var x;} D^ var r;} void b() { }}\nclass Z { }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Z');
            this.assertSuggestMethod('a','X',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestMethod('b','X','void',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestLocalVariable('f',null);
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('D');
            this.assertNotSuggested('D1');
            this.assertSuggestFunction('D2','Z',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
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
            this.resolveSource('/testB.dart','lib B;\nclass F { var f1; f2() { } get f3 => 0; set f4(fx) { } var _pf; }\nclass E extends F { var e1; e2() { } }\nclass I { int i1; i2() { } }\nclass M { var m1; int m2() { } }');
            this.addTestSource('import "/testB.dart";\nclass A extends E implements I with M {a() {^}}');
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
            this.addTestSource('class F { var f1; f2() { } get f3 => 0; set f4(fx) { } }\nclass E extends F { var e1; e2() { } }\nclass I { int i1; i2() { } }\nclass M { var m1; int m2() { } }\nclass A extends E implements I with M {a() {^}}');
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
            this.addSource('/testAB.dart','export "dart:math" hide max;\nclass A {int x;}\n@deprecated D1() {int x;}\nclass _B {boo() { partBoo() {}} }');
            this.addSource('/testCD.dart','String T1;\nvar _T2;\nclass C { }\nclass D { }');
            this.addSource('/testEEF.dart','class EE { }\nclass F { }');
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }\nint T3;\nvar _T4;');
            this.addTestSource('import "/testAB.dart";\nimport "/testCD.dart" hide D;\nimport "/testEEF.dart" show EE;\nimport "/testG.dart" as g;\nint T5;\nvar _T6;\nString get T7 => \'hello\';\nset T8(int value) { partT8() {} }\nZ D2() {int x;}\nclass X {\n  int get clog => 8;\n  set blog(value) { }\n  a() {\n    var f;\n    localF(int arg1) { }\n    {var x;}\n    p^ var r;\n  }\n  void b() { }}\nclass Z { }');
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

    test_CascadeExpression_selector1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "/testB.dart";\nclass A {var b; X _c;}\nclass X{}\n// looks like a cascade to the parser\n// but the user is trying to get completions for a non-cascade\nmain() {A a; a.^.z}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
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
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "/testB.dart";\nclass A {var b; X _c;}\nclass X{}\nmain() {A a; a..^z}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
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
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "/testB.dart";\nclass A {var b; X _c;}\nclass X{}\nmain() {A a; a..^ return}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
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
            this.addTestSource('class A {var b; X _c;}\nclass X{}\nmain() {A a; a^..b}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertSuggestLocalVariable('a','A');
            this.assertSuggestClass('A');
            this.assertSuggestClass('X');
            this.assertNotSuggested('==');
        } )());
    }

    test_CatchClause_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on ^ {}}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
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
            this.assertSuggestClass('A',{
                elemOffset : 6});
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
            this.assertSuggestParameter('e','E');
            this.assertSuggestMethod('a','A',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
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
            this.assertSuggestParameter('e',null);
            this.assertSuggestParameter('s','StackTrace');
            this.assertSuggestMethod('a','A',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertNotSuggested('Object');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\n@deprecated class A {^}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            let suggestionA : any = this.assertSuggestClass('A',{
                relevance : DART_RELEVANCE_LOW,isDeprecated : true});
            if (suggestionA != null) {
                expect(suggestionA.element.isDeprecated,isTrue);
                expect(suggestionA.element.isPrivate,isFalse);
            }
            let suggestionB : any = this.assertSuggestClass('_B');
            if (suggestionB != null) {
                expect(suggestionB.element.isDeprecated,isFalse);
                expect(suggestionB.element.isPrivate,isTrue);
            }
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
            this.assertSuggestClass('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^ A(){}}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
            this.assertSuggestClass('_B');
            this.assertNotSuggested('String');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as Soo;\nclass A {final S^ A();}\nclass _B {}\nA Sew;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestClass('A');
            this.assertSuggestClass('_B');
            this.assertNotSuggested('String');
            this.assertNotSuggested('Sew');
            this.assertNotSuggested('Soo');
        } )());
    }

    test_ClassDeclaration_body_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^ final foo;}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
            this.assertSuggestClass('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;\nclass A {final ^ var foo;}\nclass _B {}\nA T;');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
            this.assertSuggestClass('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_Combinator_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','library libAB;\npart \'/partAB.dart\';\nclass A { }\nclass B { }');
            this.addSource('/partAB.dart','part of libAB;\nvar T1;\nPB F1() => new PB();\nclass PB { }');
            this.addSource('/testCD.dart','class C { }\nclass D { }');
            this.addTestSource('import "/testAB.dart" hide ^;\nimport "/testCD.dart";\nclass X {}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_Combinator_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','library libAB;\npart \'/partAB.dart\';\nclass A { }\nclass B { }');
            this.addSource('/partAB.dart','part of libAB;\nvar T1;\nPB F1() => new PB();\ntypedef PB2 F2(int blat);\nclass Clz = Object with Object;\nclass PB { }');
            this.addSource('/testCD.dart','class C { }\nclass D { }');
            this.addTestSource('import "/testAB.dart" show ^;\nimport "/testCD.dart";\nclass X {}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ConditionalExpression_elseExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\nclass B {int x;}\nclass C {foo(){var f; {var x;} return a ? T1 : T^}}');
            await this.computeSuggestions();
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        } )());
    }

    test_ConditionalExpression_elseExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\nclass B {int x;}\nclass C {foo(){var f; {var x;} return a ? T1 : ^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertSuggestLocalVariable('f',null);
            this.assertSuggestMethod('foo','C',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestClass('C');
            this.assertSuggestFunction('F2',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_ConditionalExpression_partial_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\nclass B {int x;}\nclass C {foo(){var f; {var x;} return a ? T^}}');
            await this.computeSuggestions();
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        } )());
    }

    test_ConditionalExpression_partial_thenExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\nclass B {int x;}\nclass C {foo(){var f; {var x;} return a ? ^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertSuggestLocalVariable('f',null);
            this.assertSuggestMethod('foo','C',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestClass('C');
            this.assertSuggestFunction('F2',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_ConditionalExpression_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\nclass B {int x;}\nclass C {foo(){var f; {var x;} return a ? T^ : c}}');
            await this.computeSuggestions();
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        } )());
    }

    test_constructor_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A(x, {int y}) {^}}');
            await this.computeSuggestions();
            this.assertSuggestParameter('x',null);
            this.assertSuggestParameter('y','int');
        } )());
    }

    test_constructor_parameters_mixed_required_and_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A(x, [int y]) {^}}');
            await this.computeSuggestions();
            this.assertSuggestParameter('x',null);
            this.assertSuggestParameter('y','int');
        } )());
    }

    test_constructor_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A({x, int y}) {^}}');
            await this.computeSuggestions();
            this.assertSuggestParameter('x',null);
            this.assertSuggestParameter('y','int');
        } )());
    }

    test_constructor_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A([x, int y]) {^}}');
            await this.computeSuggestions();
            this.assertSuggestParameter('x',null);
            this.assertSuggestParameter('y','int');
        } )());
    }

    test_constructor_parameters_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A(x, int y) {^}}');
            await this.computeSuggestions();
            this.assertSuggestParameter('x',null);
            this.assertSuggestParameter('y','int');
        } )());
    }

    test_ConstructorName_importedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;\nint T1;\nF1() { }\nclass X {X.c(); X._d(); z() {}}');
            this.addTestSource('import "/testB.dart";\nvar m;\nmain() {new X.^}');
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
            this.addSource('/testB.dart','lib B;\nint T1;\nF1() { }\nclass X {factory X.c(); factory X._d(); z() {}}');
            this.addTestSource('import "/testB.dart";\nvar m;\nmain() {new X.^}');
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
            this.addTestSource('int T1;\nF1() { }\nclass X {X.c(); X._d(); z() {}}\nmain() {new X.^}');
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
            this.addTestSource('int T1;\nF1() { }\nclass X {factory X.c(); factory X._d(); z() {}}\nmain() {new X.^}');
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
            this.addTestSource('foo() { }\nvoid bar() { }\nclass A {a(blat: ^) { }}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestFunction('foo',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestMethod('a','A',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestClass('A');
            this.assertNotSuggested('String');
            this.assertNotSuggested('identical');
        } )());
    }

    test_doc_classMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let docLines : string = '  /// My documentation.\n  /// Short description.\n  ///\n  /// Longer description.\n';
            var assertDoc : (suggestion : any) => void = (suggestion : any) : void =>  {
                expect(suggestion.docSummary,'My documentation.\nShort description.');
                expect(suggestion.docComplete,'My documentation.\nShort description.\n\nLonger description.');
            };
            this.addTestSource(`class C {\n${docLines}\n  int myField;\n\n${docLines}\n  myMethod() {}\n\n${docLines}\n  int get myGetter => 0;\n\n  main() {^}\n}`);
            await this.computeSuggestions();
            {
                let suggestion : any = this.assertSuggestField('myField','int',{
                    relevance : DART_RELEVANCE_LOCAL_FIELD});
                assertDoc(suggestion);
            }
            {
                let suggestion : any = this.assertSuggestMethod('myMethod','C',null,{
                    relevance : DART_RELEVANCE_LOCAL_METHOD});
                assertDoc(suggestion);
            }
            {
                let suggestion : any = this.assertSuggestGetter('myGetter','int',{
                    relevance : DART_RELEVANCE_LOCAL_ACCESSOR});
                assertDoc(suggestion);
            }
        } )());
    }

    test_doc_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let docLines : string = '/// My documentation.\n/// Short description.\n///\n/// Longer description.\n';
            var assertDoc : (suggestion : any) => void = (suggestion : any) : void =>  {
                expect(suggestion.docSummary,'My documentation.\nShort description.');
                expect(suggestion.docComplete,'My documentation.\nShort description.\n\nLonger description.');
            };
            this.addTestSource(`${docLines}\nclass MyClass {}\n\n${docLines}\nclass MyClassTypeAlias = Object with MyClass;\n\n${docLines}\nenum MyEnum {A, B, C}\n\n${docLines}\nvoid myFunction() {}\n\n${docLines}\nint myVariable;\n\nmain() {^}\n`);
            await this.computeSuggestions();
            {
                let suggestion : any = this.assertSuggestClass('MyClass');
                assertDoc(suggestion);
            }
            {
                let suggestion : any = this.assertSuggestClassTypeAlias('MyClassTypeAlias');
                assertDoc(suggestion);
            }
            {
                let suggestion : any = this.assertSuggestEnum('MyEnum');
                assertDoc(suggestion);
            }
            {
                let suggestion : any = this.assertSuggestFunction('myFunction','void',{
                    relevance : DART_RELEVANCE_LOCAL_FUNCTION});
                assertDoc(suggestion);
            }
            {
                let suggestion : any = this.assertSuggestTopLevelVar('myVariable','int',{
                    relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
                assertDoc(suggestion);
            }
        } )());
    }

    test_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {^}');
            await this.computeSuggestions();
            this.assertSuggestEnum('E');
            this.assertSuggestEnumConst('E.one');
            this.assertSuggestEnumConst('E.two');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
        } )());
    }

    test_enum_deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('@deprecated enum E { one, two } main() {^}');
            await this.computeSuggestions();
            this.assertSuggestEnum('E',{
                isDeprecated : true});
            this.assertSuggestEnumConst('E.one',{
                isDeprecated : true});
            this.assertSuggestEnumConst('E.two',{
                isDeprecated : true});
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
        } )());
    }

    test_enum_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        enum E { one, two }\n        enum F { three, four }\n        class A {}\n        class B {\n          B({E someE});\n        }\n        A a = new A();\n        B b = new B(someE: ^);\n  ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestEnumConst('E.one',{
                relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestEnumConst('E.two',{
                relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertNotSuggested('a');
            this.assertNotSuggested('F.three');
            this.assertNotSuggested('F.four');
        } )());
    }

    test_ExpressionStatement_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','_B F1() { }\nclass A {int x;}\nclass _B { }');
            this.addTestSource('import "/testA.dart";\ntypedef int F2(int blat);\nclass Clz = Object with Object;\nclass C {foo(){^} void bar() {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
            this.assertSuggestClass('C');
            this.assertSuggestMethod('foo','C',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestMethod('bar','C','void',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestFunctionTypeAlias('F2','int');
            this.assertSuggestClassTypeAlias('Clz');
            this.assertSuggestClass('C');
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

    test_ForEachStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List<int> values; for (int index in ^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLocalVariable('values','List');
            this.assertNotSuggested('index');
        } )());
    }

    test_ForEachStatement2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List<int> values; for (int index in i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestLocalVariable('values','List');
            this.assertNotSuggested('index');
        } )());
    }

    test_ForEachStatement3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List<int> values; for (int index in (i^))}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestLocalVariable('values','List');
            this.assertNotSuggested('index');
        } )());
    }

    test_ForEachStatement_body_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in bar) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestParameter('args',null);
            this.assertSuggestLocalVariable('foo','int');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_body_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (foo in bar) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestParameter('args',null);
            this.assertSuggestLocalVariable('foo',null);
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in ^) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestParameter('args',null);
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
            this.addTestSource('foo() { }\nvoid bar() { }\nclass A {a(^) { }}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('a');
            this.assertSuggestClass('A');
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
            this.assertSuggestLocalVariable('i','int');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestLocalVariable('index','int');
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
            this.assertSuggestLocalVariable('index','int');
        } )());
    }

    test_ForStatement_updaters_prefix_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void bar() { }\nmain() {for (int index = 0; index < 10; ++i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestLocalVariable('index','int');
            this.assertSuggestFunction('main',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('bar');
        } )());
    }

    test_function_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m(x, {int y}) {}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestFunction('m','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,1);
            expect(suggestion.hasNamedParameters,true);
        } )());
    }

    test_function_parameters_mixed_required_and_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m(x, [int y]) {}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestFunction('m','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,1);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_function_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m({x, int y}) {}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestFunction('m','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,true);
        } )());
    }

    test_function_parameters_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m() {}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestFunction('m','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            expect(suggestion.parameterNames,isEmpty);
            expect(suggestion.parameterTypes,isEmpty);
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_function_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m([x, int y]) {}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestFunction('m','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_function_parameters_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m(x, int y) {}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestFunction('m','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,2);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 { }\n/* */ ^ zoo(z) { } String name;');
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
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 { }\n/** */ ^ zoo(z) { } String name;');
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
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\n/// some dartdoc\nclass C2 { }\n^ zoo(z) { } String name;');
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
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionExpression_body_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        void bar() { }\n        String foo(List args) {x.then((R b) {^});}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            let f = this.assertSuggestFunction('foo','String',{
                isDeprecated : false,relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            if (f != null) {
                expect(f.element.isPrivate,isFalse);
            }
            this.assertSuggestFunction('bar','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestParameter('args','List');
            this.assertSuggestParameter('b','R');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IfStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {A a; if (true) ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertSuggestField('_c','X',{
                relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('Object');
            this.assertSuggestClass('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_IfStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}\nmain(){var a; if (^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLocalVariable('a',null);
            this.assertSuggestFunction('main',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestClass('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IfStatement_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {A a; if (^) something}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertSuggestField('_c','X',{
                relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('Object');
            this.assertSuggestClass('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_IfStatement_empty_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {A a; if (_^) something}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestField('b',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertSuggestField('_c','X',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertNotSuggested('Object');
            this.assertSuggestClass('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_IfStatement_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var a; if (a.^) something}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('toString');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_ignore_symbol_being_completed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class MyClass { } main(MC^) { }');
            await this.computeSuggestions();
            this.assertSuggestClass('MyClass');
            this.assertNotSuggested('MC');
        } )());
    }

    test_ImportDirective_dart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart^";\nmain() {}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_inDartDoc_reference3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/// The [^]\nmain(aaa, bbb) {}');
            await this.computeSuggestions();
            this.assertSuggestFunction('main',null,{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_LOCAL_FUNCTION});
        } )());
    }

    test_inDartDoc_reference4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/// The [m^]\nmain(aaa, bbb) {}');
            await this.computeSuggestions();
            this.assertSuggestFunction('main',null,{
                kind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_LOCAL_FUNCTION});
        } )());
    }

    test_IndexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\nclass B {int x;}\nclass C {foo(){var f; {var x;} f[^]}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertSuggestLocalVariable('f',null);
            this.assertSuggestMethod('foo','C',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestClass('C');
            this.assertSuggestFunction('F2',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_IndexExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\nclass B {int x;}\nclass C {foo(){var f; {var x;} f[T^]}}');
            await this.computeSuggestions();
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        } )());
    }

    test_InstanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo(){var f; {var x;}}}\nclass B {B(this.x, [String boo]) { } int x;}\nclass C {C.bar({boo: \'hoo\', int z: 0}) { } }\nmain() {new ^ String x = "hello";}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_InstanceCreationExpression_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\nclass A {A(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nimport "dart:async";\nint T2;\nF2() { }\nclass B {B(this.x, [String boo]) { } int x;}\nclass C {foo(){var f; {var x;} new ^}}');
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
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 { }\nmain() {String name; print("hello $^");}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestFunction('F2',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertSuggestLocalVariable('name','String');
        } )());
    }

    test_InterpolationExpression_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 { }\nmain() {String name; print("hello ${^}");}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestFunction('F2',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertSuggestLocalVariable('name','String');
        } )());
    }

    test_InterpolationExpression_block2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${n^}");}');
            await this.computeSuggestions();
            this.assertSuggestLocalVariable('name','String');
        } )());
    }

    test_InterpolationExpression_prefix_selector() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${name.^}");}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('length');
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
            this.assertSuggestLocalVariable('name','String');
            this.assertNotSuggested('length');
        } )());
    }

    test_IsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;\nfoo() { }\nclass X {X.c(); X._d(); z() {}}');
            this.addTestSource('import "/testB.dart";\nclass Y {Y.c(); Y._d(); z() {}}\nmain() {var x; if (x is ^) { }}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertSuggestClass('Y');
            this.assertNotSuggested('x');
            this.assertNotSuggested('main');
            this.assertNotSuggested('foo');
        } )());
    }

    test_IsExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() { }\nvoid bar() { }\nclass A {int x; int y() => 0;}\nmain(){var a; if (^ is A)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLocalVariable('a',null);
            this.assertSuggestFunction('main',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestFunction('foo',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('bar');
            this.assertSuggestClass('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}\nmain(){var a; if (a is ^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertSuggestClass('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type_filter_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B extends A {} class C extends A {} class D {}\nf(A a){ if (a is ^) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('B');
            this.assertSuggestClass('C');
            this.assertNotSuggested('A');
            this.assertNotSuggested('D');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type_filter_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B implements A {} class C implements A {} class D {}\nf(A a){ if (a is ^) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('B');
            this.assertSuggestClass('C');
            this.assertNotSuggested('A');
            this.assertNotSuggested('D');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type_filter_undefined_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {}\nf(U u){ (u as ^) }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('A');
        } )());
    }

    test_IsExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}\nmain(){var a; if (a is Obj^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertSuggestClass('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;\nint newT1;\nint T1;\nnowIsIt() { }\nclass X {factory X.c(); factory X._d(); z() {}}');
            this.addTestSource('import "/testB.dart";\nString newer() {}\nvar m;\nmain() {new^ X.c();}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('c');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('nowIsIt');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('newT1');
            this.assertNotSuggested('z');
            this.assertSuggestTopLevelVar('m','dynamic',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestFunction('newer','String',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
        } )());
    }

    test_Literal_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([^]);}');
            await this.computeSuggestions();
            this.assertSuggestLocalVariable('Some',null);
            this.assertNotSuggested('String');
        } )());
    }

    test_Literal_list2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([S^]);}');
            await this.computeSuggestions();
            this.assertSuggestLocalVariable('Some',null);
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
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 { }\nfoo = {^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertSuggestFunction('F2',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
        } )());
    }

    test_MapLiteralEntry1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 { }\nfoo = {T^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('T1');
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        } )());
    }

    test_MapLiteralEntry2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 { }\nfoo = {7:T^};');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('T1');
            this.assertSuggestTopLevelVar('T2','int',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        } )());
    }

    test_method_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m(x, {int y}) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_mixed_required_and_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m(x, [int y]) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m({x, int y}) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m() {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m([x, int y]) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m(x, int y) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_MethodDeclaration_body_getters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated X get f => 0; Z a() {^} get _g => 1;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            let methodA : any = this.assertSuggestMethod('a','A','Z',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            if (methodA != null) {
                expect(methodA.element.isDeprecated,isFalse);
                expect(methodA.element.isPrivate,isFalse);
            }
            let getterF : any = this.assertSuggestGetter('f','X',{
                relevance : DART_RELEVANCE_LOW,isDeprecated : true});
            if (getterF != null) {
                expect(getterF.element.isDeprecated,isTrue);
                expect(getterF.element.isPrivate,isFalse);
            }
            let getterG : any = this.assertSuggestGetter('_g',null,{
                relevance : DART_RELEVANCE_DEFAULT});
            if (getterG != null) {
                expect(getterG.element.isDeprecated,isFalse);
                expect(getterG.element.isPrivate,isTrue);
            }
        } )());
    }

    test_MethodDeclaration_body_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testC.dart','class C {\n  c1() {}\n  var c2;\n  static c3() {}\n  static var c4;}');
            this.addTestSource('import "/testC.dart";\nclass B extends C {\n  b1() {}\n  var b2;\n  static b3() {}\n  static var b4;}\nclass A extends B {\n  a1() {}\n  var a2;\n  static a3() {}\n  static var a4;\n  static a() {^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('a1');
            this.assertNotSuggested('a2');
            this.assertSuggestMethod('a3','A',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestField('a4',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
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
            let methodA : any = this.assertSuggestMethod('_a','A','Z',{
                relevance : DART_RELEVANCE_DEFAULT});
            if (methodA != null) {
                expect(methodA.element.isDeprecated,isFalse);
                expect(methodA.element.isPrivate,isTrue);
            }
            let getterF : any = this.assertSuggestField('f','X',{
                relevance : DART_RELEVANCE_LOW,isDeprecated : true});
            if (getterF != null) {
                expect(getterF.element.isDeprecated,isTrue);
                expect(getterF.element.isPrivate,isFalse);
                expect(getterF.element.parameters,isNull);
            }
            let getterG : any = this.assertSuggestField('_g',null,{
                relevance : DART_RELEVANCE_DEFAULT});
            if (getterG != null) {
                expect(getterG.element.isDeprecated,isFalse);
                expect(getterG.element.isPrivate,isTrue);
                expect(getterF.element.parameters,isNull);
            }
            this.assertNotSuggested('bool');
        } )());
    }

    test_MethodDeclaration_members_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated X f; Z _a() {_^} var _g;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            let methodA : any = this.assertSuggestMethod('_a','A','Z',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            if (methodA != null) {
                expect(methodA.element.isDeprecated,isFalse);
                expect(methodA.element.isPrivate,isTrue);
            }
            let getterF : any = this.assertSuggestField('f','X',{
                relevance : DART_RELEVANCE_LOW,isDeprecated : true});
            if (getterF != null) {
                expect(getterF.element.isDeprecated,isTrue);
                expect(getterF.element.isPrivate,isFalse);
                expect(getterF.element.parameters,isNull);
            }
            let getterG : any = this.assertSuggestField('_g',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            if (getterG != null) {
                expect(getterG.element.isDeprecated,isFalse);
                expect(getterG.element.isPrivate,isTrue);
                expect(getterF.element.parameters,isNull);
            }
            this.assertNotSuggested('bool');
        } )());
    }

    test_MethodDeclaration_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated Z a(X x, _, b, {y: boo}) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            let methodA : any = this.assertSuggestMethod('a','A','Z',{
                relevance : DART_RELEVANCE_LOW,isDeprecated : true});
            if (methodA != null) {
                expect(methodA.element.isDeprecated,isTrue);
                expect(methodA.element.isPrivate,isFalse);
            }
            this.assertSuggestParameter('x','X');
            this.assertSuggestParameter('y',null);
            this.assertSuggestParameter('b',null);
            this.assertNotSuggested('int');
            this.assertNotSuggested('_');
        } )());
    }

    test_MethodDeclaration_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() { }\nvoid bar() { }\nclass A {Z a(X x, [int y=1]) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestFunction('foo',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestFunction('bar','void',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestMethod('a','A','Z',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestParameter('x','X');
            this.assertSuggestParameter('y','int');
            this.assertNotSuggested('String');
        } )());
    }

    test_MethodDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 {^ zoo(z) { } String name; }');
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
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 {/* */ ^ zoo(z) { } String name; }');
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
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 {/** */ ^ zoo(z) { } String name; }');
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
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;\nF1() { }\ntypedef D1();\nclass C1 {C1(this.x) { } int x;}');
            this.addTestSource('import "/testA.dart";\nint T2;\nF2() { }\ntypedef D2();\nclass C2 {\n  /// some dartdoc\n  ^ zoo(z) { } String name; }');
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
            this.assertSuggestFunctionTypeAlias('D2',null);
            this.assertSuggestClass('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodInvocation_no_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  // no semicolon between completion point and next statement\n  set s1(I x) {} set _s2(I x) {x.^ m(null);}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
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

    test_missing_params_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C1{C1{} main(){C^}}');
            await this.computeSuggestions();
        } )());
    }

    test_missing_params_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('int f1{} main(){f^}');
            await this.computeSuggestions();
        } )());
    }

    test_missing_params_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C1{int f1{} main(){f^}}');
            await this.computeSuggestions();
        } )());
    }

    test_new_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:math"; class A {x() {new Random().^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('nextBool');
            this.assertNotSuggested('nextDouble');
            this.assertNotSuggested('nextInt');
            this.assertNotSuggested('Random');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
        } )());
    }

    test_overrides() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {m() {}}\nclass B extends A {m() {^}}\n');
            await this.computeSuggestions();
            this.assertSuggestMethod('m','B',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
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
            this.addSource('/testB.dart','lib B;\nint T1;\nF1() { }\nclass X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart',`library libA;\nimport "/testB.dart";\npart "${this.testFile}";\nclass A { }\nvar m;`);
            this.addTestSource('part of libA;\nclass B { factory B.bar(int x) => null; }\nmain() {new ^}');
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
            this.addSource('/testB.dart','lib B;\nint T1;\nF1() { }\nclass X {X.c(); X._d(); z() {}}');
            this.addSource('/testA.dart','part of libA;\nclass B { }');
            this.addTestSource('library libA;\nimport "/testB.dart";\npart "/testA.dart";\nclass A { A({String boo: \'hoo\'}) { } }\nmain() {new ^}\nvar m;');
            await this.computeLibrariesContaining();
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
            this.addSource('/testB.dart','lib B;\nclass I {\n  static const scI = \'boo\';\n  X get f => new A();\n  get _g => new A();}\nclass B implements I {\n  static const int scB = 12;\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  set s1(I x) {} set _s2(I x) {}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
            this.addTestSource('import "/testB.dart";\nclass A extends B {\n  static const String scA = \'foo\';\n  w() { }}\nmain() {A.^}');
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
            this.addSource('/testB.dart','lib B;\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  static const int sc = 12;\n  @deprecated var b; X _c;\n  X get d => new A();get _e => new A();\n  set s1(I x) {} set _s2(I x) {}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
            this.addTestSource('import "/testB.dart";\nmain() {A a; a.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('sc');
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
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_class_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {A a; a.^}\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  static const int sc = 12;\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  set s1(I x) {} set _s2(I x) {}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('sc');
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
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String get g => "one"; f() {g.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;\nvar T1;\nclass X { }\nclass Y { }');
            this.addTestSource('import "/testB.dart" as b;\nvar T2;\nclass A { }\nmain() {b.^}');
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
            this.addSource('/testB.dart','lib B;\nvar T1;\nclass X { }\nclass Y { }');
            this.addTestSource('import "/testB.dart" as b;\nvar T2;\nclass A { }\nfoo(b.^ f) {}');
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
            this.addSource('/testB.dart','lib B;\nvar T1;\nclass X { }\nclass Y { }');
            this.addTestSource('import "/testB.dart" as b;\nvar T2;\nclass A { }\nfoo(b.^) {}');
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
            this.addSource('/testB.dart','lib B;\nclass _W {M y; var _z;}\nclass X extends _W {}\nclass M{}');
            this.addTestSource('import "/testB.dart";\nfoo(X x) {x.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('y');
            this.assertNotSuggested('_z');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {static int bar = 10;}\n_B() {}');
            this.addTestSource('import "/testA.dart";\nclass X {foo(){A^.bar}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('A');
            this.assertSuggestClass('X');
            this.assertSuggestMethod('foo','X',null,{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
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
            this.assertNotSuggested('isEmpty');
            this.assertNotSuggested('compareTo');
        } )());
    }

    test_PrefixedIdentifier_propertyAccess_newStmt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String x; int get foo {x.^ int y = 0;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('isEmpty');
            this.assertNotSuggested('compareTo');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('const String g = "hello"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g; f() {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String g() => "one"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('typedef String g(); f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String get g => "one"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_local_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f() {String g; g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_local_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f() {var g = "hello"; g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g() {}; f() {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {f(String g) {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f(String g) {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_topLevelVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String g; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_prioritization() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var ab; var _ab; ^}');
            await this.computeSuggestions();
            this.assertSuggestLocalVariable('ab',null);
            this.assertSuggestLocalVariable('_ab',null,{
                relevance : DART_RELEVANCE_DEFAULT});
        } )());
    }

    test_prioritization_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var ab; var _ab; _^}');
            await this.computeSuggestions();
            this.assertSuggestLocalVariable('ab',null);
            this.assertSuggestLocalVariable('_ab',null);
        } )());
    }

    test_prioritization_public() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var ab; var _ab; a^}');
            await this.computeSuggestions();
            this.assertSuggestLocalVariable('ab',null);
            this.assertSuggestLocalVariable('_ab',null,{
                relevance : DART_RELEVANCE_DEFAULT});
        } )());
    }

    test_PropertyAccess_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hello".to^String().length}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,8);
            this.assertNotSuggested('length');
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
            this.assertNotSuggested('isEven');
            this.assertNotSuggested('A');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_shadowed_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('var a; class A { var a; m() { ^ } }');
            await this.computeSuggestions();
            this.assertSuggestField('a',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
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
            this.assertSuggestClass('A');
            this.assertSuggestMethod('g','A','String',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertSuggestLocalVariable('t',null);
            this.assertNotSuggested('String');
        } )());
    }

    test_SwitchStatement_case_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('g(int x) {var t; switch(x) {case 0: var bar; b^}}');
            await this.computeSuggestions();
            this.assertSuggestFunction('g','dynamic',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertSuggestLocalVariable('t','dynamic',{
                relevance : DART_RELEVANCE_LOCAL_VARIABLE});
            this.assertSuggestParameter('x','int',{
                relevance : DART_RELEVANCE_PARAMETER});
            this.assertSuggestLocalVariable('bar','dynamic',{
                relevance : DART_RELEVANCE_LOCAL_VARIABLE});
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
            this.addTestSource('main() { }\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  A() {}\n  A.z() {}\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  // no semicolon between completion point and next statement\n  set s1(I x) {} set _s2(I x) {this.^ m(null);}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
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

    test_ThisExpression_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  A() {this.^}\n  A.z() {}\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  // no semicolon between completion point and next statement\n  set s1(I x) {} set _s2(I x) {m(null);}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
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

    test_ThisExpression_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  A(this.^) {}\n  A.z() {}\n  var b; X _c; static sb;\n  X get d => new A();get _e => new A();\n  // no semicolon between completion point and next statement\n  set s1(I x) {} set _s2(I x) {m(null);}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
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
            this.addTestSource('main() { }\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  A(this.b^) {}\n  A.z() {}\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  // no semicolon between completion point and next statement\n  set s1(I x) {} set _s2(I x) {m(null);}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
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
            this.addTestSource('main() { }\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  A(this.^b) {}\n  A.z() {}\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  // no semicolon between completion point and next statement\n  set s1(I x) {} set _s2(I x) {m(null);}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
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
            this.addTestSource('main() { }\nclass I {X get f => new A();get _g => new A();}\nclass A implements I {\n  A(this.b, this.^) {}\n  A.z() {}\n  var b; X _c;\n  X get d => new A();get _e => new A();\n  // no semicolon between completion point and next statement\n  set s1(I x) {} set _s2(I x) {m(null);}\n  m(X x) {} I _n(X x) {}}\nclass X{}');
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
            this.addSource('/testA.dart','class C1 {int x;}\nF1() => 0;\ntypedef String T1(int blat);');
            this.addTestSource('import "/testA.dart";\'\nclass C2 {int x;}\nF2() => 0;\ntypedef int T2(int blat);\nclass C<E> {}\nmain() { C<^> c; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T1');
            this.assertSuggestClass('C2');
            this.assertSuggestFunctionTypeAlias('T2','int');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('F2');
        } )());
    }

    test_TypeArgumentList2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class C1 {int x;}\nF1() => 0;\ntypedef String T1(int blat);');
            this.addTestSource('import "/testA.dart";\'\nclass C2 {int x;}\nF2() => 0;\ntypedef int T2(int blat);\nclass C<E> {}\nmain() { C<C^> c; }');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('C1');
            this.assertSuggestClass('C2');
        } )());
    }

    test_VariableDeclaration_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;\nfoo() { }\nclass _B { }\nclass X {X.c(); X._d(); z() {}}');
            this.addTestSource('import "/testB.dart";\nclass Y {Y.c(); Y._d(); z() {}}\nmain() {var ^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_VariableDeclarationList_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^} class C { }');
            await this.computeSuggestions();
            this.assertNotSuggested('Object');
            this.assertSuggestClass('C');
            this.assertNotSuggested('==');
        } )());
    }

    test_VariableDeclarationStatement_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;\nfoo() { }\nclass _B { }\nclass X {X.c(); X._d(); z() {}}');
            this.addTestSource('import "/testB.dart";\nclass Y {Y.c(); Y._d(); z() {}}\nclass C {bar(){var f; {var x;} var e = ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('_B');
            this.assertSuggestClass('Y');
            this.assertSuggestClass('C');
            this.assertSuggestLocalVariable('f',null);
            this.assertNotSuggested('x');
            this.assertNotSuggested('e');
        } )());
    }

    test_VariableDeclarationStatement_RHS_missing_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;\nfoo1() { }\nvoid bar1() { }\nclass _B { }\nclass X {X.c(); X._d(); z() {}}');
            this.addTestSource('import "/testB.dart";\nfoo2() { }\nvoid bar2() { }\nclass Y {Y.c(); Y._d(); z() {}}\nclass C {bar(){var f; {var x;} var e = ^ var g}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('foo1');
            this.assertNotSuggested('bar1');
            this.assertSuggestFunction('foo2',null,{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertNotSuggested('bar2');
            this.assertNotSuggested('_B');
            this.assertSuggestClass('Y');
            this.assertSuggestClass('C');
            this.assertSuggestLocalVariable('f',null);
            this.assertNotSuggested('x');
            this.assertNotSuggested('e');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalReferenceContributorTest() {
    }
}

export class properties {
}
