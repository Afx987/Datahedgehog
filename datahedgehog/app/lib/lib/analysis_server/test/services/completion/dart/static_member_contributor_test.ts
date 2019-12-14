/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/static_member_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticMemberContributorTest);
    });
};
export namespace StaticMemberContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'StaticMemberContributorTest';
    export type Interface = Omit<StaticMemberContributorTest, Constructors>;
}
@DartClass
export class StaticMemberContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    fail_enumConst_deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('@deprecated enum E { one, two } main() {E.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertSuggestEnumConst('one',{
                isDeprecated : true});
            this.assertSuggestEnumConst('two',{
                isDeprecated : true});
            this.assertNotSuggested('index');
            this.assertSuggestField('values','List<E>',{
                isDeprecated : true});
        } )());
    }

    test_enumConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertSuggestEnumConst('one');
            this.assertSuggestEnumConst('two');
            this.assertNotSuggested('index');
            this.assertSuggestField('values','List<E>');
        } )());
    }

    test_enumConst2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.o^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertSuggestEnumConst('one');
            this.assertSuggestEnumConst('two');
            this.assertNotSuggested('index');
            this.assertSuggestField('values','List<E>');
        } )());
    }

    test_enumConst3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.^ int g;}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertSuggestEnumConst('one');
            this.assertSuggestEnumConst('two');
            this.assertNotSuggested('index');
            this.assertSuggestField('values','List<E>');
        } )());
    }

    test_enumConst_cascade1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E..^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_enumConst_cascade2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.^.}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertSuggestEnumConst('one');
            this.assertSuggestEnumConst('two');
            this.assertNotSuggested('index');
            this.assertSuggestField('values','List<E>');
        } )());
    }

    test_enumConst_cascade3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E..o^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_enumConst_cascade4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {E.^.o}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertSuggestEnumConst('one');
            this.assertSuggestEnumConst('two');
            this.assertNotSuggested('index');
            this.assertSuggestField('values','List<E>');
        } )());
    }

    test_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C { static C get instance => null; } main() {C.in^}');
            await this.computeSuggestions();
            this.assertSuggestGetter('instance','C');
        } )());
    }

    test_only_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class B {\n  static int b1;\n}\nclass C extends B {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('b1');
            this.assertNotSuggested('f1');
            this.assertSuggestField('f2','int');
            this.assertNotSuggested('m1');
            this.assertSuggestMethod('m2','C',null);
        } )());
    }

    test_only_static2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class B {\n  static int b1;\n}\nclass C extends B {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C.^ print("something");}');
            await this.computeSuggestions();
            this.assertNotSuggested('b1');
            this.assertNotSuggested('f1');
            this.assertSuggestField('f2','int');
            this.assertNotSuggested('m1');
            this.assertSuggestMethod('m2','C',null);
        } )());
    }

    test_only_static_cascade1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class B {\n  static int b1;\n}\nclass C extends B {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C..^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_only_static_cascade2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class B {\n  static int b1;\n}\nclass C extends B {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C.^.}');
            await this.computeSuggestions();
            this.assertNotSuggested('b1');
            this.assertNotSuggested('f1');
            this.assertSuggestField('f2','int');
            this.assertNotSuggested('m1');
            this.assertSuggestMethod('m2','C',null);
        } )());
    }

    test_only_static_cascade3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class B {\n  static int b1;\n}\nclass C extends B {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C..m^()}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_only_static_cascade4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class B {\n  static int b1;\n}\nclass C extends B {\n  int f1;\n  static int f2;\n  m1() {}\n  static m2() {}\n}\nvoid main() {C.^.m()}');
            await this.computeSuggestions();
            this.assertNotSuggested('b1');
            this.assertNotSuggested('f1');
            this.assertSuggestField('f2','int');
            this.assertNotSuggested('m1');
            this.assertSuggestMethod('m2','C',null);
        } )());
    }

    test_only_static_cascade_prefixed1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as async;\nvoid main() {async.Future..w^()}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_only_static_cascade_prefixed2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as async;\nvoid main() {async.Future.^.w()}');
            await this.computeSuggestions();
            this.assertSuggestMethod('wait','Future','Future<dynamic>');
        } )());
    }

    test_PrefixedIdentifier_class_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        class I {\n          static const scI = \'boo\';\n          X get f => new A();\n          get _g => new A();}\n        class B implements I {\n          static const int scB = 12;\n          var b; X _c;\n          X get d => new A();get _e => new A();\n          set s1(I x) {} set _s2(I x) {}\n          m(X x) {} I _n(X x) {}}\n        class X{}');
            this.addTestSource('        import "/testB.dart";\n        class A extends B {\n          static const String scA = \'foo\';\n          w() { }}\n        main() {A.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('scA','String');
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

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticMemberContributorTest() {
    }
}

export class properties {
}
