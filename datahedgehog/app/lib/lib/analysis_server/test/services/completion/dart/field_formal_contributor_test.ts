/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/field_formal_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FieldFormalContributorTest);
    });
};
export namespace FieldFormalContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'FieldFormalContributorTest';
    export type Interface = Omit<FieldFormalContributorTest, Constructors>;
}
@DartClass
export class FieldFormalContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_ThisExpression_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class I {X get f => new A();get _g => new A();}\n        class A implements I {\n          A(this.^) {}\n          A.z() {}\n          var b; X _c; static sb;\n          X get d => new A();get _e => new A();\n          // no semicolon between completion point and next statement\n          set s1(I x) {} set _s2(I x) {m(null);}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('b',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertSuggestField('_c','X',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
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
            this.assertSuggestField('b',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertSuggestField('_c','X',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
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
            this.assertSuggestField('b',null,{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertSuggestField('_c','X',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
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
            this.assertSuggestField('_c','X',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
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

    test_ThisExpression_constructor_param_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class Point {\n          int x;\n          int y;\n          Point({this.x, this.^}) {}\n          ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('y','int',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertNotSuggested('x');
        } )());
    }

    test_ThisExpression_constructor_param_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() { }\n        class Point {\n          int x;\n          int y;\n          Point({this.x, this.^}) {}\n          ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('y','int',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertNotSuggested('x');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldFormalContributorTest() {
    }
}

export class properties {
}
