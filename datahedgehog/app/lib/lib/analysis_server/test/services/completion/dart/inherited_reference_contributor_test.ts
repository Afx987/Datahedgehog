/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/inherited_reference_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InheritedContributorTest);
    });
};
export namespace InheritedContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'InheritedContributorTest';
    export type Interface = Omit<InheritedContributorTest, Constructors>;
}
@DartClass
export class InheritedContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isNullExpectedReturnTypeConsideredDynamic() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_ArgDefaults_inherited_method_with_required_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addMetaPackageSource();
            this.resolveSource('/testB.dart','import \'package:meta/meta.dart\';\n\nlib libB;\nclass A {\n   bool foo(int bar, {bool boo, @required int baz}) => false;\n}');
            this.addTestSource('import "/testB.dart";\nclass B extends A {\n  b() => f^\n}\n');
            await this.computeSuggestions();
            this.assertSuggestMethod('foo','A','bool',{
                defaultArgListString : 'bar, baz: null'});
        } )());
    }

    test_AwaitExpression_inherited() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/testB.dart','lib libB;\nclass A {\n  Future y() async {return 0;}\n}');
            this.addTestSource('import "/testB.dart";\nclass B extends A {\n  Future a() async {return 0;}\n  foo() async {await ^}\n}\n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertSuggestMethod('y','A','dynamic');
        } )());
    }

    test_Block_inherited_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/testB.dart','      lib B;\n      class F { var f1; f2() { } get f3 => 0; set f4(fx) { } var _pf; }\n      class E extends F { var e1; e2() { } }\n      class I { int i1; i2() { } }\n      class M { var m1; int m2() { } }');
            this.addTestSource('      import "/testB.dart";\n      class A extends E implements I with M {a() {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('e1',null);
            this.assertSuggestField('f1',null);
            this.assertSuggestField('i1','int');
            this.assertSuggestField('m1',null);
            this.assertSuggestGetter('f3',null);
            this.assertSuggestSetter('f4');
            this.assertSuggestMethod('e2','E',null);
            this.assertSuggestMethod('f2','F',null);
            this.assertSuggestMethod('i2','I',null);
            this.assertSuggestMethod('m2','M','int');
            this.assertNotSuggested('==');
        } )());
    }

    test_Block_inherited_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class F { var f1; f2() { } get f3 => 0; set f4(fx) { } }\nclass E extends F { var e1; e2() { } }\nclass I { int i1; i2() { } }\nclass M { var m1; int m2() { } }\nclass A extends E implements I with M {a() {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestField('e1',null);
            this.assertSuggestField('f1',null);
            this.assertSuggestField('i1','int');
            this.assertSuggestField('m1',null);
            this.assertSuggestGetter('f3',null);
            this.assertSuggestSetter('f4');
            this.assertSuggestMethod('e2','E',null);
            this.assertSuggestMethod('f2','F',null);
            this.assertSuggestMethod('i2','I',null);
            this.assertSuggestMethod('m2','M','int');
        } )());
    }

    test_inherited() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/testB.dart','lib libB;\nclass A2 {\n  int x;\n  int y() {return 0;}\n  int x2;\n  int y2() {return 0;}\n}');
            this.addTestSource('import "/testB.dart";\nclass A1 {\n  int x;\n  int y() {return 0;}\n  int x1;\n  int y1() {return 0;}\n}\nclass B extends A1 with A2 {\n  int a;\n  int b() {return 0;}\n  foo() {^}\n}\n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('B');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('A');
            this.assertSuggestField('x','int');
            this.assertSuggestMethod('y','A2','int');
            this.assertSuggestField('x1','int');
            this.assertSuggestMethod('y1','A1','int');
            this.assertSuggestField('x2','int');
            this.assertSuggestMethod('y2','A2','int');
        } )());
    }

    test_method_in_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m(x, int y) {}\n  main() {^}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/libA.dart','class A {\n  void m(x, {int y}) {}\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,1);
            expect(suggestion.hasNamedParameters,true);
        } )());
    }

    test_method_parameters_mixed_required_and_named_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m(x, {int y}) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
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
            this.resolveSource('/libA.dart','class A {\n  void m(x, [int y]) {}\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,1);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_method_parameters_mixed_required_and_positional_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m(x, [int y]) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
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
            this.resolveSource('/libA.dart','class A {\n  void m({x, int y}) {}\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,true);
        } )());
    }

    test_method_parameters_named_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m({x, int y}) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
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
            this.resolveSource('/libA.dart','class A {\n  void m() {}\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
            expect(suggestion.parameterNames,isEmpty);
            expect(suggestion.parameterTypes,isEmpty);
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_method_parameters_none_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m() {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
            expect(suggestion.parameterNames,isEmpty);
            expect(suggestion.parameterTypes,isEmpty);
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_method_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/libA.dart','class A {\n  void m([x, int y]) {}\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_method_parameters_positional_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  void m([x, int y]) {}\n}\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
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
            this.resolveSource('/libA.dart','class A {\n  void m(x, int y) {}\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestMethod('m','A','void');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'y');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,2);
            expect(suggestion.hasNamedParameters,false);
        } )());
    }

    test_mixin_ordering() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/libA.dart','class B {}\nclass M1 {\n  void m() {}\n}\nclass M2 {\n  void m() {}\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass C extends B with M1, M2 {\n  void f() {\n    ^\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestMethod('m','M1','void');
        } )());
    }

    test_no_parameters_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/libA.dart','class A {\n  int x;\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestField('x','int');
            this.assertHasNoParameterInfo(suggestion);
        } )());
    }

    test_no_parameters_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/libA.dart','class A {\n  int get x => null;\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestGetter('x','int');
            this.assertHasNoParameterInfo(suggestion);
        } )());
    }

    test_no_parameters_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/libA.dart','class A {\n  set x(int value) {};\n}\n');
            this.addTestSource('import \'/libA.dart\';\nclass B extends A {\n  main() {^}\n}\n');
            await this.computeSuggestions();
            let suggestion : any = this.assertSuggestSetter('x');
            this.assertHasNoParameterInfo(suggestion);
        } )());
    }

    test_ouside_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/testB.dart','lib libB;\nclass A2 {\n  int x;\n  int y() {return 0;}\n  int x2;\n  int y2() {return 0;}\n}');
            this.addTestSource('import "/testB.dart";\nclass A1 {\n  int x;\n  int y() {return 0;}\n  int x1;\n  int y1() {return 0;}\n}\nclass B extends A1 with A2 {\n  int a;\n  int b() {return 0;}\n}\nfoo() {^}\n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('B');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('A');
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
            this.assertNotSuggested('x1');
            this.assertNotSuggested('y1');
            this.assertNotSuggested('x2');
            this.assertNotSuggested('y2');
        } )());
    }

    test_static_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/testB.dart','lib libB;\nclass A2 {\n  int x;\n  int y() {return 0;}\n  int x2;\n  int y2() {return 0;}\n}');
            this.addTestSource('import "/testB.dart";\nclass A1 {\n  int x;\n  int y() {return 0;}\n  int x1;\n  int y1() {return 0;}\n}\nclass B extends A1 with A2 {\n  int a;\n  int b() {return 0;}\n  static foo = ^\n}\n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('B');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('A');
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
            this.assertNotSuggested('x1');
            this.assertNotSuggested('y1');
            this.assertNotSuggested('x2');
            this.assertNotSuggested('y2');
        } )());
    }

    test_static_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resolveSource('/testB.dart','lib libB;\nclass A2 {\n  int x;\n  int y() {return 0;}\n  int x2;\n  int y2() {return 0;}\n}');
            this.addTestSource('import "/testB.dart";\nclass A1 {\n  int x;\n  int y() {return 0;}\n  int x1;\n  int y1() {return 0;}\n}\nclass B extends A1 with A2 {\n  int a;\n  int b() {return 0;}\n  static foo() {^}\n}\n');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('B');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('A');
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
            this.assertNotSuggested('x1');
            this.assertNotSuggested('y1');
            this.assertNotSuggested('x2');
            this.assertNotSuggested('y2');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InheritedContributorTest() {
    }
}

export class properties {
}
