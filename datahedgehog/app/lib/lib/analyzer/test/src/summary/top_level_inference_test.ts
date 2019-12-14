/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/top_level_inference_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./element_text";
import * as lib4 from "./../task/strong/strong_test_helper";
import * as lib5 from "./../dart/analysis/base";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TopLevelInferenceTest);
        defineReflectiveTests(TopLevelInferenceErrorsTest);
    });
};
export namespace ApplyCheckElementTextReplacements {
    export type Constructors = 'ApplyCheckElementTextReplacements';
    export type Interface = Omit<ApplyCheckElementTextReplacements, Constructors>;
}
@DartClass
export class ApplyCheckElementTextReplacements {
    test_applyReplacements() {
        lib3.applyCheckElementTextReplacements();
    }
    constructor() {
    }
    @defaultConstructor
    ApplyCheckElementTextReplacements() {
    }
}

export namespace TopLevelInferenceErrorsTest {
    export type Constructors = lib4.AbstractStrongTest.Constructors | 'TopLevelInferenceErrorsTest';
    export type Interface = Omit<TopLevelInferenceErrorsTest, Constructors>;
}
@DartClass
export class TopLevelInferenceErrorsTest extends lib4.AbstractStrongTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    test_initializer_additive() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('+','-'));
        } )());
    }

    test_initializer_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t1 = /*error:TOP_LEVEL_UNSUPPORTED*/a += 1;\nvar t2 = (/*error:TOP_LEVEL_UNSUPPORTED*/a = 2);\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_binary_onlyLeft() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t = (/*error:TOP_LEVEL_UNSUPPORTED*/a = 1) + (a = 2);\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_bitwise() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('&','|','^'));
        } )());
    }

    test_initializer_boolean() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t1 = ((a = 1) == 0) || ((a = 2) == 0);\nvar t2 = ((a = 1) == 0) && ((a = 2) == 0);\nvar t3 = !((a = 1) == 0);\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 0;\nvar t = (/*error:TOP_LEVEL_UNSUPPORTED*/a = 1)..isEven;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_classField_instance_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A<T> {}\nclass B {\n  var t1 = new A<int>();\n  var t2 = /*info:INFERRED_TYPE_ALLOCATION*/new\n           /*error:TOP_LEVEL_TYPE_ARGUMENTS*/A();\n}\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_classField_static_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A<T> {}\nclass B {\n  static var t1 = 1;\n  static var t2 = /*info:INFERRED_TYPE_ALLOCATION*/new\n                  /*error:TOP_LEVEL_TYPE_ARGUMENTS*/A();\n}\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar b = true;\nvar t = b ?\n          (/*error:TOP_LEVEL_UNSUPPORTED*/a = 1) :\n          (/*error:TOP_LEVEL_UNSUPPORTED*/a = 2);\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_dependencyCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = /*error:TOP_LEVEL_CYCLE*/b;\nvar b = /*error:TOP_LEVEL_CYCLE*/a;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_equality() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t1 = ((a = 1) == 0) == ((a = 2) == 0);\nvar t2 = ((a = 1) == 0) != ((a = 2) == 0);\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_extractIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = /*info:INFERRED_TYPE_LITERAL*/[0, 1.2];\nvar b0 = a[0];\nvar b1 = a[1];\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_functionLiteral_blockBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var t = /*error:TOP_LEVEL_FUNCTION_LITERAL_BLOCK*/\n        /*info:INFERRED_TYPE_CLOSURE*/\n        (int p) {};\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_functionLiteral_expressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 0;\nvar t = (int p) => (/*error:TOP_LEVEL_UNSUPPORTED*/a = 1);\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_functionLiteral_parameters_withoutType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var t = (int a,\n         /*error:TOP_LEVEL_FUNCTION_LITERAL_PARAMETER*/b,\n         int c,\n         /*error:TOP_LEVEL_FUNCTION_LITERAL_PARAMETER*/d) => 0;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_hasTypeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nint t = (a = 1);\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'int top_function() => 0;\nvar top_variable = 0;\nint get top_getter => 0;\nclass A {\n  static var static_field = 0;\n  static int get static_getter => 0;\n  static int static_method() => 0;\n  int instance_method() => 0;\n}\nvar t1 = top_function;\nvar t2 = top_variable;\nvar t3 = top_getter;\nvar t4 = A.static_field;\nvar t5 = A.static_getter;\nvar t6 = A.static_method;\nvar t7 = new A().instance_method;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_identifier_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 0;\nvar b = (/*error:TOP_LEVEL_UNSUPPORTED*/a = 1);\nvar c = /*error:TOP_LEVEL_IDENTIFIER_NO_TYPE*/b;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_ifNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t = /*error:TOP_LEVEL_UNSUPPORTED*/a ?? 2;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_instanceCreation_withoutTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A {}\nvar t = new A();\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_instanceCreation_withTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A<T> {}\nvar t1 = new A<int>();\nvar t2 = /*info:INFERRED_TYPE_ALLOCATION*/new\n         /*error:TOP_LEVEL_TYPE_ARGUMENTS*/A();\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_instanceGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A {\n  int f = 1;\n}\nvar a = new A()./*error:TOP_LEVEL_INSTANCE_GETTER*/f;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_methodInvocation_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'int f1() => null;\nT f2<T>() => null;\nvar t1 = f1();\nvar t2 = /*error:TOP_LEVEL_TYPE_ARGUMENTS*/f2();\nvar t3 = f2<int>();\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_methodInvocation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A {\n  int m1() => null;\n  T m2<T>() => null;\n}\nvar a = new A();\nvar t1 = a.m1();\nvar t2 = a./*error:TOP_LEVEL_TYPE_ARGUMENTS*/m2();\nvar t3 = a.m2<int>();\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_multiplicative() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('*','/','%','~/'));
        } )());
    }

    test_initializer_postfixIncDec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t1 = a++;\nvar t2 = a--;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_prefixIncDec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t1 = ++a;\nvar t2 = --a;\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_relational() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('>','>=','<','<='));
        } )());
    }

    test_initializer_shift() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('<<','>>'));
        } )());
    }

    test_initializer_typedList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t = <int>[a = 1];\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_typedMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t = <int, int>{(a = 1) : (a = 2)};\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_untypedList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t = /*info:INFERRED_TYPE_LITERAL*/[\n            /*error:TOP_LEVEL_UNSUPPORTED*/a = 1,\n            2, 3];\n';
            await this.checkFile(content);
        } )());
    }

    test_initializer_untypedMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;\nvar t = /*info:INFERRED_TYPE_LITERAL*/{\n            (/*error:TOP_LEVEL_UNSUPPORTED*/a = 1) :\n            (/*error:TOP_LEVEL_UNSUPPORTED*/a = 2)};\n';
            await this.checkFile(content);
        } )());
    }

    test_override_conflictFieldType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'abstract class A {\n  int aaa;\n}\nabstract class B {\n  String aaa;\n}\nclass C implements A, B {\n  /*error:INVALID_METHOD_OVERRIDE*/var aaa;\n}\n';
            await this.checkFile(content);
        } )());
    }

    test_override_conflictParameterType_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'abstract class A {\n  void mmm(int a);\n}\nabstract class B {\n  void mmm(String a);\n}\nclass C implements A, B {\n  void mmm(/*error:TOP_LEVEL_INFERENCE_ERROR*/a) {}\n}\n';
            await this.checkFile(content);
        } )());
    }

    _assertErrorOnlyLeft(operators : core.DartList<string>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let err = '/*error:TOP_LEVEL_UNSUPPORTED*/';
            let code : string = 'var a = 1;\n';
            for(let i = 0; i < operators.length; i++){
                let operator : string = operators[i];
                code += `var t${i} = (${err}a = 1) ${operator} (a = 2);\n`;
            }
            await this.checkFile(code);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelInferenceErrorsTest() {
    }
}

export namespace TopLevelInferenceTest {
    export type Constructors = lib5.BaseAnalysisDriverTest.Constructors | 'TopLevelInferenceTest';
    export type Interface = Omit<TopLevelInferenceTest, Constructors>;
}
@DartClass
export class TopLevelInferenceTest extends lib5.BaseAnalysisDriverTest {
    addFile(path : string,code : string) : void {
        this.provider.newFile(this._p(path),code);
    }
    test_initializer_additive() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vPlusIntInt = 1 + 2;\nvar vPlusIntDouble = 1 + 2.0;\nvar vPlusDoubleInt = 1.0 + 2;\nvar vPlusDoubleDouble = 1.0 + 2.0;\nvar vMinusIntInt = 1 - 2;\nvar vMinusIntDouble = 1 - 2.0;\nvar vMinusDoubleInt = 1.0 - 2;\nvar vMinusDoubleDouble = 1.0 - 2.0;\n');
            lib3.checkElementText(library,'int vPlusIntInt;\ndouble vPlusIntDouble;\ndouble vPlusDoubleInt;\ndouble vPlusDoubleDouble;\nint vMinusIntInt;\ndouble vMinusIntDouble;\ndouble vMinusDoubleInt;\ndouble vMinusDoubleDouble;\n');
        } )());
    }

    test_initializer_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = 1 as num;\n');
            lib3.checkElementText(library,'num V;\n');
        } )());
    }

    test_initializer_await() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('import \'dart:async\';\nint fValue() => 42;\nFuture<int> fFuture() async => 42;\nvar uValue = () async => await fValue();\nvar uFuture = () async => await fFuture();\n');
            lib3.checkElementText(library,'import \'dart:async\';\n() → Future<int> uValue;\n() → Future<int> uFuture;\nint fValue() {}\nFuture<int> fFuture() async {}\n');
        } )());
    }

    test_initializer_bitwise() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vBitXor = 1 ^ 2;\nvar vBitAnd = 1 & 2;\nvar vBitOr = 1 | 2;\nvar vBitShiftLeft = 1 << 2;\nvar vBitShiftRight = 1 >> 2;\n');
            lib3.checkElementText(library,'int vBitXor;\nint vBitAnd;\nint vBitOr;\nint vBitShiftLeft;\nint vBitShiftRight;\n');
        } )());
    }

    test_initializer_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  int a;\n  void m() {}\n}\nvar vSetField = new A()..a = 1;\nvar vInvokeMethod = new A()..m();\nvar vBoth = new A()..a = 1..m();\n');
            lib3.checkElementText(library,'class A {\n  int a;\n  void m() {}\n}\nA vSetField;\nA vInvokeMethod;\nA vBoth;\n');
        } )());
    }

    test_initializer_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = true ? 1 : 2.3;\n');
            lib3.checkElementText(library,'num V;\n');
        } )());
    }

    test_initializer_equality() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vEq = 1 == 2;\nvar vNotEq = 1 != 2;\n');
            lib3.checkElementText(library,'bool vEq;\nbool vNotEq;\n');
        } )());
    }

    test_initializer_error_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = 1;\nvar t1 = (a = 2);\nvar t2 = (a += 2);\n');
            lib3.checkElementText(library,'int a;\ndynamic t1/*error: assignment*/;\ndynamic t2/*error: assignment*/;\n');
        } )());
    }

    test_initializer_error_assign_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  int f;\n}\nvar a = new A();\nvar t1 = (a.f = 1);\nvar t2 = (a.f += 2);\n');
            lib3.checkElementText(library,'class A {\n  int f;\n}\nA a;\ndynamic t1/*error: assignment*/;\ndynamic t2/*error: assignment*/;\n');
        } )());
    }

    test_initializer_error_assign_prefixed_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {\n  int f;\n}\nabstract class C implements I {}\nC c;\nvar t1 = (c.f = 1);\nvar t2 = (c.f += 2);\n');
            lib3.checkElementText(library,'class I {\n  int f;\n}\nabstract class C implements I {\n}\nC c;\ndynamic t1/*error: assignment*/;\ndynamic t2/*error: assignment*/;\n');
        } )());
    }

    test_initializer_error_assign_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {\n  int f;\n}\nabstract class C implements I {}\nC getC() => null;\nvar t1 = (getC().f = 1);\nvar t2 = (getC().f += 2);\n');
            lib3.checkElementText(library,'class I {\n  int f;\n}\nabstract class C implements I {\n}\ndynamic t1/*error: assignment*/;\ndynamic t2/*error: assignment*/;\nC getC() {}\n');
        } )());
    }

    test_initializer_error_classField_useInstanceGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  int f = 1;\n}\nclass B {\n  A a;\n}\nclass C {\n  B b;\n}\nclass X {\n  A a = new A();\n  B b = new B();\n  C c = new C();\n  var t01 = a.f;\n  var t02 = b.a.f;\n  var t03 = c.b.a.f;\n  var t11 = new A().f;\n  var t12 = new B().a.f;\n  var t13 = new C().b.a.f;\n  var t21 = newA().f;\n  var t22 = newB().a.f;\n  var t23 = newC().b.a.f;\n}\nA newA() => new A();\nB newB() => new B();\nC newC() => new C();\n');
            lib3.checkElementText(library,'class A {\n  int f;\n}\nclass B {\n  A a;\n}\nclass C {\n  B b;\n}\nclass X {\n  A a;\n  B b;\n  C c;\n  dynamic t01/*error: instanceGetter*/;\n  dynamic t02/*error: instanceGetter*/;\n  dynamic t03/*error: instanceGetter*/;\n  dynamic t11/*error: instanceGetter*/;\n  dynamic t12/*error: instanceGetter*/;\n  dynamic t13/*error: instanceGetter*/;\n  dynamic t21/*error: instanceGetter*/;\n  dynamic t22/*error: instanceGetter*/;\n  dynamic t23/*error: instanceGetter*/;\n}\nA newA() {}\nB newB() {}\nC newC() {}\n');
        } )());
    }

    test_initializer_error_extractProperty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {\n  bool b;\n}\nC f() => null;\nvar x = f().b;\n');
            lib3.checkElementText(library,'class C {\n  bool b;\n}\ndynamic x/*error: instanceGetter*/;\nC f() {}\n');
        } )());
    }

    test_initializer_error_extractProperty_inOtherLibraryCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('/a.dart','import \'b.dart\';\nvar x = new C().f;\n');
            this.addFile('/b.dart','class C {\n  var f = 0;\n}\n');
            let library = await this._encodeDecodeLibrary('import \'a.dart\';\nvar t1 = x;\n');
            lib3.checkElementText(library,'import \'a.dart\';\ndynamic t1;\n');
        } )());
    }

    test_initializer_error_extractProperty_inStaticField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  int f;\n}\nclass B {\n  static var t = new A().f;\n}\n');
            lib3.checkElementText(library,'class A {\n  int f;\n}\nclass B {\n  static dynamic t/*error: instanceGetter*/;\n}\n');
        } )());
    }

    test_initializer_error_extractProperty_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {\n  bool b;\n}\nC c;\nvar x = c.b;\n');
            lib3.checkElementText(library,'class C {\n  bool b;\n}\nC c;\ndynamic x/*error: instanceGetter*/;\n');
        } )());
    }

    test_initializer_error_extractProperty_prefixedIdentifier_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {\n  bool b;\n}\nabstract class C implements I {}\nC c;\nvar x = c.b;\n');
            lib3.checkElementText(library,'class I {\n  bool b;\n}\nabstract class C implements I {\n}\nC c;\ndynamic x/*error: instanceGetter*/;\n');
        } )());
    }

    test_initializer_error_extractProperty_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {\n  bool b;\n}\nabstract class C implements I {}\nC f() => null;\nvar x = f().b;\n');
            lib3.checkElementText(library,'class I {\n  bool b;\n}\nabstract class C implements I {\n}\ndynamic x/*error: instanceGetter*/;\nC f() {}\n');
        } )());
    }

    test_initializer_error_instanceGetterOfObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('dynamic f() => null;\nvar s = f().toString();\nvar h = f().hashCode;\n');
            lib3.checkElementText(library,'String s;\ndynamic h/*error: instanceGetter*/;\ndynamic f() {}\n');
        } )());
    }

    test_initializer_error_instanceGetterOfObject_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('dynamic d;\nvar s = d.toString();\nvar h = d.hashCode;\n');
            lib3.checkElementText(library,'dynamic d;\nString s;\ndynamic h/*error: instanceGetter*/;\n');
        } )());
    }

    test_initializer_error_methodInvocation_cycle_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = b.foo();\nvar b = a.foo();\n');
            lib3.checkElementText(library,'dynamic a/*error: dependencyCycle*/;\ndynamic b/*error: dependencyCycle*/;\n');
        } )());
    }

    test_initializer_error_methodInvocation_cycle_topLevel_self() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = a.foo();\n');
            lib3.checkElementText(library,'dynamic a/*error: dependencyCycle*/;\n');
        } )());
    }

    test_initializer_error_referenceToFieldOfStaticField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {\n  static D d;\n}\nclass D {\n  int i;\n}\nfinal x = C.d.i;\n');
            lib3.checkElementText(library,'class C {\n  static D d;\n}\nclass D {\n  int i;\n}\nfinal dynamic x/*error: instanceGetter*/;\n');
        } )());
    }

    test_initializer_error_referenceToFieldOfStaticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {\n  static D get d => null;\n}\nclass D {\n  int i;\n}\nvar x = C.d.i;\n');
            lib3.checkElementText(library,'class C {\n  static D get d {}\n}\nclass D {\n  int i;\n}\ndynamic x/*error: instanceGetter*/;\n');
        } )());
    }

    test_initializer_extractIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = [0, 1.2];\nvar b0 = a[0];\nvar b1 = a[1];\n');
            lib3.checkElementText(library,'List<num> a;\nnum b0;\nnum b1;\n');
        } )());
    }

    test_initializer_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('import \'dart:async\';\nvar vFuture = new Future<int>(42);\nvar v_noParameters_inferredReturnType = () => 42;\nvar v_hasParameter_withType_inferredReturnType = (String a) => 42;\nvar v_hasParameter_withType_returnParameter = (String a) => a;\nvar v_async_returnValue = () async => 42;\nvar v_async_returnFuture = () async => vFuture;\n');
            lib3.checkElementText(library,'import \'dart:async\';\nFuture<int> vFuture;\n() → int v_noParameters_inferredReturnType;\n(String) → int v_hasParameter_withType_inferredReturnType;\n(String) → String v_hasParameter_withType_returnParameter;\n() → Future<int> v_async_returnValue;\n() → Future<int> v_async_returnFuture;\n');
        } )());
    }

    test_initializer_functionExpressionInvocation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var v = (() => 42)();\n');
            lib3.checkElementText(library,'int v;\n');
        } )());
    }

    test_initializer_functionInvocation_hasTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('T f<T>() => null;\nvar vHasTypeArgument = f<int>();\nvar vNoTypeArgument = f();\n');
            lib3.checkElementText(library,'int vHasTypeArgument;\ndynamic vNoTypeArgument;\nT f<T>() {}\n');
        } )());
    }

    test_initializer_functionInvocation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('String f(int p) => null;\nvar vOkArgumentType = f(1);\nvar vWrongArgumentType = f(2.0);\n');
            lib3.checkElementText(library,'String vOkArgumentType;\nString vWrongArgumentType;\nString f(int p) {}\n');
        } )());
    }

    test_initializer_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('String topLevelFunction(int p) => null;\nvar topLevelVariable = 0;\nint get topLevelGetter => 0;\nclass A {\n  static var staticClassVariable = 0;\n  static int get staticGetter => 0;\n  static String staticClassMethod(int p) => null;\n  String instanceClassMethod(int p) => null;\n}\nvar r_topLevelFunction = topLevelFunction;\nvar r_topLevelVariable = topLevelVariable;\nvar r_topLevelGetter = topLevelGetter;\nvar r_staticClassVariable = A.staticClassVariable;\nvar r_staticGetter = A.staticGetter;\nvar r_staticClassMethod = A.staticClassMethod;\nvar instanceOfA = new A();\nvar r_instanceClassMethod = instanceOfA.instanceClassMethod;\n');
            lib3.checkElementText(library,'class A {\n  static int staticClassVariable;\n  static int get staticGetter {}\n  static String staticClassMethod(int p) {}\n  String instanceClassMethod(int p) {}\n}\nint topLevelVariable;\n(int) → String r_topLevelFunction;\nint r_topLevelVariable;\nint r_topLevelGetter;\nint r_staticClassVariable;\nint r_staticGetter;\n(int) → String r_staticClassMethod;\nA instanceOfA;\n(int) → String r_instanceClassMethod;\nint get topLevelGetter {}\nString topLevelFunction(int p) {}\n');
        } )());
    }

    test_initializer_identifier_error_cycle_classField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  static var a = B.b;\n}\nclass B {\n  static var b = A.a;\n}\nvar c = A.a;\n');
            lib3.checkElementText(library,'class A {\n  static dynamic a/*error: dependencyCycle*/;\n}\nclass B {\n  static dynamic b/*error: dependencyCycle*/;\n}\ndynamic c;\n');
        } )());
    }

    test_initializer_identifier_error_cycle_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  static var a = b;\n}\nvar b = A.a;\nvar c = b;\n');
            lib3.checkElementText(library,'class A {\n  static dynamic a/*error: dependencyCycle*/;\n}\ndynamic b/*error: dependencyCycle*/;\ndynamic c;\n');
        } )());
    }

    test_initializer_identifier_error_cycle_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = b;\nvar b = c;\nvar c = a;\nvar d = a;\n');
            lib3.checkElementText(library,'dynamic a/*error: dependencyCycle*/;\ndynamic b/*error: dependencyCycle*/;\ndynamic c/*error: dependencyCycle*/;\ndynamic d;\n');
        } )());
    }

    test_initializer_identifier_formalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
        } )());
    }

    test_initializer_instanceCreation_hasTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<T> {}\nvar a = new A<int>();\nvar b = new A();\n');
            lib3.checkElementText(library,'class A<T> {\n}\nA<int> a;\ndynamic b;\n');
        } )());
    }

    test_initializer_instanceCreation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {}\nvar a = new A();\n');
            lib3.checkElementText(library,'class A {\n}\nA a;\n');
        } )());
    }

    test_initializer_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = 1.2;\nvar b = a is int;\n');
            lib3.checkElementText(library,'double a;\nbool b;\n');
        } )());
    }

    test_initializer_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNull = null;\nvar vBoolFalse = false;\nvar vBoolTrue = true;\nvar vInt = 1;\nvar vIntLong = 0x9876543210987654321;\nvar vDouble = 2.3;\nvar vString = \'abc\';\nvar vStringConcat = \'aaa\' \'bbb\';\nvar vStringInterpolation = \'aaa ${true} ${42} bbb\';\nvar vSymbol = #aaa.bbb.ccc;\n');
            lib3.checkElementText(library,'Null vNull;\nbool vBoolFalse;\nbool vBoolTrue;\nint vInt;\nint vIntLong;\ndouble vDouble;\nString vString;\nString vStringConcat;\nString vStringInterpolation;\nSymbol vSymbol;\n');
        } )());
    }

    test_initializer_literal_list_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vObject = <Object>[1, 2, 3];\nvar vNum = <num>[1, 2, 3];\nvar vNumEmpty = <num>[];\nvar vInt = <int>[1, 2, 3];\n');
            lib3.checkElementText(library,'List<Object> vObject;\nList<num> vNum;\nList<num> vNumEmpty;\nList<int> vInt;\n');
        } )());
    }

    test_initializer_literal_list_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vInt = [1, 2, 3];\nvar vNum = [1, 2.0];\nvar vObject = [1, 2.0, \'333\'];\n');
            lib3.checkElementText(library,'List<int> vInt;\nList<num> vNum;\nList<Object> vObject;\n');
        } )());
    }

    test_initializer_literal_list_untyped_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNonConst = [];\nvar vConst = const [];\n');
            lib3.checkElementText(library,'List<dynamic> vNonConst;\nList<Null> vConst;\n');
        } )());
    }

    test_initializer_literal_map_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vObjectObject = <Object, Object>{1: \'a\'};\nvar vComparableObject = <Comparable<int>, Object>{1: \'a\'};\nvar vNumString = <num, String>{1: \'a\'};\nvar vNumStringEmpty = <num, String>{};\nvar vIntString = <int, String>{};\n');
            lib3.checkElementText(library,'Map<Object, Object> vObjectObject;\nMap<Comparable<int>, Object> vComparableObject;\nMap<num, String> vNumString;\nMap<num, String> vNumStringEmpty;\nMap<int, String> vIntString;\n');
        } )());
    }

    test_initializer_literal_map_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vIntString = {1: \'a\', 2: \'b\'};\nvar vNumString = {1: \'a\', 2.0: \'b\'};\nvar vIntObject = {1: \'a\', 2: 3.0};\n');
            lib3.checkElementText(library,'Map<int, String> vIntString;\nMap<num, String> vNumString;\nMap<int, Object> vIntObject;\n');
        } )());
    }

    test_initializer_literal_map_untyped_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNonConst = {};\nvar vConst = const {};\n');
            lib3.checkElementText(library,'Map<dynamic, dynamic> vNonConst;\nMap<Null, Null> vConst;\n');
        } )());
    }

    test_initializer_logicalBool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = true;\nvar b = true;\nvar vEq = 1 == 2;\nvar vAnd = a && b;\nvar vOr = a || b;\n');
            lib3.checkElementText(library,'bool a;\nbool b;\nbool vEq;\nbool vAnd;\nbool vOr;\n');
        } )());
    }

    test_initializer_methodInvocation_hasTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  List<T> m<T>() => null;\n}\nvar vWithTypeArgument = new A().m<int>();\nvar vWithoutTypeArgument = new A().m();\n');
            lib3.checkElementText(library,'class A {\n  List<T> m<T>(int p) {}\n}\nList<int> vWithTypeArgument;\ndynamic vWithoutTypeArgument;\n');
        } )());
    }

    test_initializer_methodInvocation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int p) => null;\n}\nvar instanceOfA = new A();\nvar v1 = instanceOfA.m();\nvar v2 = new A().m();\n');
            lib3.checkElementText(library,'class A {\n  String m(int p) {}\n}\nA instanceOfA;\nString v1;\nString v2;\n');
        } )());
    }

    test_initializer_multiplicative() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vModuloIntInt = 1 % 2;\nvar vModuloIntDouble = 1 % 2.0;\nvar vMultiplyIntInt = 1 * 2;\nvar vMultiplyIntDouble = 1 * 2.0;\nvar vMultiplyDoubleInt = 1.0 * 2;\nvar vMultiplyDoubleDouble = 1.0 * 2.0;\nvar vDivideIntInt = 1 / 2;\nvar vDivideIntDouble = 1 / 2.0;\nvar vDivideDoubleInt = 1.0 / 2;\nvar vDivideDoubleDouble = 1.0 / 2.0;\nvar vFloorDivide = 1 ~/ 2;\n');
            lib3.checkElementText(library,'int vModuloIntInt;\ndouble vModuloIntDouble;\nint vMultiplyIntInt;\ndouble vMultiplyIntDouble;\ndouble vMultiplyDoubleInt;\ndouble vMultiplyDoubleDouble;\nnum vDivideIntInt;\nnum vDivideIntDouble;\ndouble vDivideDoubleInt;\ndouble vDivideDoubleDouble;\nint vFloorDivide;\n');
        } )());
    }

    test_initializer_onlyLeft() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = 1;\nvar vEq = a == ((a = 2) == 0);\nvar vNotEq = a != ((a = 2) == 0);\n');
            lib3.checkElementText(library,'int a;\nbool vEq;\nbool vNotEq;\n');
        } )());
    }

    test_initializer_parenthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = (42);\n');
            lib3.checkElementText(library,'int V;\n');
        } )());
    }

    test_initializer_postfix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vInt = 1;\nvar vDouble = 2;\nvar vIncInt = vInt++;\nvar vDecInt = vInt--;\nvar vIncDouble = vDouble++;\nvar vDecDouble = vDouble--;\n');
            lib3.checkElementText(library,'int vInt;\nint vDouble;\nint vIncInt;\nint vDecInt;\ndouble vIncDouble;\ndouble vDecDouble;\n');
        } )());
    }

    test_initializer_prefix_incDec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vInt = 1;\nvar vDouble = 2.0;\nvar vIncInt = ++vInt;\nvar vDecInt = --vInt;\nvar vIncDouble = ++vDouble;\nvar vDecInt = --vDouble;\n');
            lib3.checkElementText(library,'int vInt;\ndouble vDouble;\nint vIncInt;\nint vDecInt;\ndouble vIncDouble;\ndouble vDecInt;\n');
        } )());
    }

    test_initializer_prefix_incDec_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  B operator+(int v) => null;\n}\nclass B {}\nvar a = new A();\nvar vInc = ++a;\nvar vDec = --a;\n');
            lib3.checkElementText(library,'A a;\nB vInc;\nB vDec;\n');
        } )());
    }

    test_initializer_prefix_not() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNot = !true;\n');
            lib3.checkElementText(library,'bool vNot;\n');
        } )());
    }

    test_initializer_prefix_other() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNegateInt = -1;\nvar vNegateDouble = -1.0;\nvar vComplement = ~1;\n');
            lib3.checkElementText(library,'int vNegateInt;\ndouble vNegateDouble;\nint vComplement;\n');
        } )());
    }

    test_initializer_relational() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vLess = 1 < 2;\nvar vLessOrEqual = 1 <= 2;\nvar vGreater = 1 > 2;\nvar vGreaterOrEqual = 1 >= 2;\n');
            lib3.checkElementText(library,'bool vLess;\nbool vLessOrEqual;\nbool vGreater;\nbool vGreaterOrEqual;\n');
        } )());
    }

    test_initializer_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = throw 42;\n');
            lib3.checkElementText(library,'Null V;\n');
        } )());
    }

    test_instanceField_error_noSetterParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int x;\n}\nclass B implements A {\n  set x() {}\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int x;\n}\nclass B implements A {\n  void set x() {}\n}\n');
        } )());
    }

    test_instanceField_fieldFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  var f = 0;\n  A([this.f = \'hello\']);\n}\n');
            lib3.checkElementText(library,'class A {\n  int f;\n  A([int this.f]);\n}\n');
        } )());
    }

    test_instanceField_fromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int x;\n  int y;\n  int z;\n}\nclass B implements A {\n  var x;\n  get y => null;\n  set z(_) {}\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int x;\n  int y;\n  int z;\n}\nclass B implements A {\n  int x;\n  synthetic final int y;\n  synthetic int z;\n  int get y {}\n  void set z(int _) {}\n}\n',{
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromField_explicitDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  dynamic x;\n}\nclass B implements A {\n  var x = 1;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  dynamic x;\n}\nclass B implements A {\n  dynamic x;\n}\n');
        } )());
    }

    test_instanceField_fromField_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<E> {\n  E x;\n  E y;\n  E z;\n}\nclass B<T> implements A<T> {\n  var x;\n  get y => null;\n  set z(_) {}\n}\n');
            lib3.checkElementText(library,'abstract class A<E> {\n  E x;\n  E y;\n  E z;\n}\nclass B<T> implements A<T> {\n  T x;\n  synthetic final T y;\n  synthetic T z;\n  T get y {}\n  void set z(T _) {}\n}\n',{
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromField_implicitDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  var x;\n}\nclass B implements A {\n  var x = 1;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  dynamic x;\n}\nclass B implements A {\n  dynamic x;\n}\n');
        } )());
    }

    test_instanceField_fromField_narrowType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  num x;\n}\nclass B implements A {\n  var x = 1;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  num x;\n}\nclass B implements A {\n  num x;\n}\n');
        } )());
    }

    test_instanceField_fromGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n  int get y;\n  int get z;\n}\nclass B implements A {\n  var x;\n  get y => null;\n  set z(_) {}\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int get x;\n  int get y;\n  int get z;\n}\nclass B implements A {\n  int x;\n  int get y {}\n  void set z(int _) {}\n}\n');
        } )());
    }

    test_instanceField_fromGetter_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<E> {\n  E get x;\n  E get y;\n  E get z;\n}\nclass B<T> implements A<T> {\n  var x;\n  get y => null;\n  set z(_) {}\n}\n');
            lib3.checkElementText(library,'abstract class A<E> {\n  E get x;\n  E get y;\n  E get z;\n}\nclass B<T> implements A<T> {\n  T x;\n  T get y {}\n  void set z(T _) {}\n}\n');
        } )());
    }

    test_instanceField_fromGetter_multiple_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  String get x;\n}\nclass C implements A, B {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int get x;\n}\nabstract class B {\n  String get x;\n}\nclass C implements A, B {\n  dynamic get x {}\n}\n');
        } )());
    }

    test_instanceField_fromGetter_multiple_different_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  dynamic get x;\n}\nclass C implements A, B {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int get x;\n}\nabstract class B {\n  dynamic get x;\n}\nclass C implements A, B {\n  dynamic get x {}\n}\n');
        } )());
    }

    test_instanceField_fromGetter_multiple_different_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<T> {\n  T get x;\n}\nabstract class B<T> {\n  T get x;\n}\nclass C implements A<int>, B<String> {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A<T> {\n  T get x;\n}\nabstract class B<T> {\n  T get x;\n}\nclass C implements A<int>, B<String> {\n  dynamic get x {}\n}\n');
        } )());
    }

    test_instanceField_fromGetter_multiple_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  int get x;\n}\nclass C implements A, B {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int get x;\n}\nabstract class B {\n  int get x;\n}\nclass C implements A, B {\n  int get x {}\n}\n');
        } )());
    }

    test_instanceField_fromGetterSetter_different_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n  int get y;\n}\nabstract class B {\n  void set x(String _);\n  void set y(String _);\n}\nclass C implements A, B {\n  var x;\n  final y;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int get x;\n  int get y;\n}\nabstract class B {\n  void set x(String _);\n  void set y(String _);\n}\nclass C implements A, B {\n  dynamic x/*error: overrideConflictFieldType*/;\n  final int y;\n}\n');
        } )());
    }

    test_instanceField_fromGetterSetter_different_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  void set x(String _);\n}\nclass C implements A, B {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  synthetic final int x;\n  int get x;\n}\nabstract class B {\n  synthetic String x;\n  void set x(String _);\n}\nclass C implements A, B {\n  synthetic final int x;\n  int get x {}\n}\n',{
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromGetterSetter_different_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  void set x(String _);\n}\nclass C implements A, B {\n  set x(_);\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  synthetic final int x;\n  int get x;\n}\nabstract class B {\n  synthetic String x;\n  void set x(String _);\n}\nclass C implements A, B {\n  synthetic dynamic x;\n  void set x(dynamic _);\n}\n',{
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromGetterSetter_same_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  void set x(int _);\n}\nclass C implements A, B {\n  var x;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  int get x;\n}\nabstract class B {\n  void set x(int _);\n}\nclass C implements A, B {\n  int x;\n}\n');
        } )());
    }

    test_instanceField_fromGetterSetter_same_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  void set x(int _);\n}\nclass C implements A, B {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  synthetic final int x;\n  int get x;\n}\nabstract class B {\n  synthetic int x;\n  void set x(int _);\n}\nclass C implements A, B {\n  synthetic final int x;\n  int get x {}\n}\n',{
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromGetterSetter_same_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  int get x;\n}\nabstract class B {\n  void set x(int _);\n}\nclass C implements A, B {\n  set x(_);\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  synthetic final int x;\n  int get x;\n}\nabstract class B {\n  synthetic int x;\n  void set x(int _);\n}\nclass C implements A, B {\n  synthetic int x;\n  void set x(int _);\n}\n',{
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  void set x(int _);\n  void set y(int _);\n  void set z(int _);\n}\nclass B implements A {\n  var x;\n  get y => null;\n  set z(_) {}\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  void set x(int _);\n  void set y(int _);\n  void set z(int _);\n}\nclass B implements A {\n  int x;\n  int get y {}\n  void set z(int _) {}\n}\n');
        } )());
    }

    test_instanceField_fromSetter_multiple_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  void set x(int _);\n}\nabstract class B {\n  void set x(String _);\n}\nclass C implements A, B {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  void set x(int _);\n}\nabstract class B {\n  void set x(String _);\n}\nclass C implements A, B {\n  dynamic get x {}\n}\n');
        } )());
    }

    test_instanceField_fromSetter_multiple_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  void set x(int _);\n}\nabstract class B {\n  void set x(int _);\n}\nclass C implements A, B {\n  get x => null;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  void set x(int _);\n}\nabstract class B {\n  void set x(int _);\n}\nclass C implements A, B {\n  int get x {}\n}\n');
        } )());
    }

    test_instanceField_functionTypeAlias_doesNotUseItsTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('typedef F<T>();\n\nclass A<T> {\n  F<T> get x => null;\n  List<F<T>> get y => null;\n}\n\nclass B extends A<int> {\n  get x => null;\n  get y => null;\n}\n');
            lib3.checkElementText(library,'typedef dynamic F<T>();\nclass A<T> {\n  F<T> get x {}\n  List<F<T>> get y {}\n}\nclass B extends A<int> {\n  F<int> get x {}\n  List<F<int>> get y {}\n}\n');
        } )());
    }

    test_instanceField_inheritsCovariant_fromSetter_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  num get x;\n  void set x(covariant num _);\n}\nclass B implements A {\n  int x;\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  num get x;\n  void set x(covariant num _);\n}\nclass B implements A {\n  int x;\n  synthetic int get x {}\n  synthetic void set x(covariant int _x) {}\n}\n',{
                withSyntheticAccessors : true});
        } )());
    }

    test_instanceField_inheritsCovariant_fromSetter_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  num get x;\n  void set x(covariant num _);\n}\nclass B implements A {\n  set x(int _) {}\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  num get x;\n  void set x(covariant num _);\n}\nclass B implements A {\n  void set x(covariant int _) {}\n}\n');
        } )());
    }

    test_instanceField_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  var t1 = 1;\n  var t2 = 2.0;\n  var t3 = null;\n}\n');
            lib3.checkElementText(library,'class A {\n  int t1;\n  double t2;\n  dynamic t3;\n}\n');
        } )());
    }

    test_method_error_conflict_parameterType_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<T> {\n  void m(T a) {}\n}\nclass B<E> {\n  void m(E a) {}\n}\nclass C extends A<int> implements B<double> {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A<T> {\n  void m(T a) {}\n}\nclass B<E> {\n  void m(E a) {}\n}\nclass C extends A<int> implements B<double> {\n  void m(dynamic a/*error: overrideConflictParameterType*/) {}\n}\n');
        } )());
    }

    test_method_error_conflict_parameterType_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  void m(int a) {}\n}\nclass B {\n  void m(String a) {}\n}\nclass C extends A implements B {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  void m(int a) {}\n}\nclass B {\n  void m(String a) {}\n}\nclass C extends A implements B {\n  void m(dynamic a/*error: overrideConflictParameterType*/) {}\n}\n');
        } )());
    }

    test_method_error_conflict_returnType_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> {\n  T m(int a) {}\n}\nclass C extends A<int, String> implements B<double> {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> {\n  T m(int a) {}\n}\nclass C extends A<int, String> implements B<double> {\n  dynamic m(int a) {}\n}\n');
        } )());
    }

    test_method_error_conflict_returnType_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  int m() {}\n}\nclass B {\n  String m() {}\n}\nclass C extends A implements B {\n  m() {}\n}\n');
            lib3.checkElementText(library,'class A {\n  int m() {}\n}\nclass B {\n  String m() {}\n}\nclass C extends A implements B {\n  dynamic m() {}\n}\n');
        } )());
    }

    test_method_error_hasMethod_noParameter_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  void m(int a) {}\n}\nclass B extends A {\n  m(a, b) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  void m(int a) {}\n}\nclass B extends A {\n  void m(int a, dynamic b) {}\n}\n');
        } )());
    }

    test_method_missing_hasMethod_noParameter_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  void m(int a) {}\n}\nclass B extends A {\n  m(a, {b}) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  void m(int a) {}\n}\nclass B extends A {\n  void m(int a, {dynamic b}) {}\n}\n');
        } )());
    }

    test_method_missing_hasMethod_noParameter_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  void m(int a) {}\n}\nclass B extends A {\n  m(a, [b]) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  void m(int a) {}\n}\nclass B extends A {\n  void m(int a, [dynamic b]) {}\n}\n');
        } )());
    }

    test_method_missing_hasMethod_withoutTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  m(a) {}\n}\nclass B extends A {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  dynamic m(dynamic a) {}\n}\nclass B extends A {\n  dynamic m(dynamic a) {}\n}\n');
        } )());
    }

    test_method_missing_noMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  int foo(String a) => null;\n}\nclass B extends A {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  int foo(String a) {}\n}\nclass B extends A {\n  dynamic m(dynamic a) {}\n}\n');
        } )());
    }

    test_method_missing_notMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  int m = 42;\n}\nclass B extends A {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  int m;\n}\nclass B extends A {\n  dynamic m(dynamic a) {}\n}\n');
        } )());
    }

    test_method_OK_sequence_extendsExtends_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> extends A<int, T> {}\nclass C extends B<String> {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> extends A<int, T> {\n}\nclass C extends B<String> {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_sequence_inferMiddle_extendsExtends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a) {}\n}\nclass B extends A {\n  m(a) {}\n}\nclass C extends B {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a) {}\n}\nclass B extends A {\n  String m(int a) {}\n}\nclass C extends B {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_sequence_inferMiddle_extendsImplements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a) {}\n}\nclass B implements A {\n  m(a) {}\n}\nclass C extends B {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a) {}\n}\nclass B implements A {\n  String m(int a) {}\n}\nclass C extends B {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_sequence_inferMiddle_extendsWith() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a) {}\n}\nclass B extends Object with A {\n  m(a) {}\n}\nclass C extends B {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a) {}\n}\nclass B extends Object with A {\n  synthetic B();\n  String m(int a) {}\n}\nclass C extends B {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_single_extends_direct_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {\n  V m(K a, double b) {}\n}\nclass B extends A<int, String> {\n  m(a, b) {}\n}\n');
            lib3.checkElementText(library,'class A<K, V> {\n  V m(K a, double b) {}\n}\nclass B extends A<int, String> {\n  String m(int a, double b) {}\n}\n');
        } )());
    }

    test_method_OK_single_extends_direct_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a) {}\n}\nclass B extends A {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a) {}\n}\nclass B extends A {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_single_extends_direct_notGeneric_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a, {double b}) {}\n}\nclass B extends A {\n  m(a, {b}) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a, {double b}) {}\n}\nclass B extends A {\n  String m(int a, {double b}) {}\n}\n');
        } )());
    }

    test_method_OK_single_extends_direct_notGeneric_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a, [double b]) {}\n}\nclass B extends A {\n  m(a, [b]) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a, [double b]) {}\n}\nclass B extends A {\n  String m(int a, [double b]) {}\n}\n');
        } )());
    }

    test_method_OK_single_extends_indirect_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> extends A<int, T> {}\nclass C extends B<String> {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> extends A<int, T> {\n}\nclass C extends B<String> {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_single_implements_direct_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<K, V> {\n  V m(K a);\n}\nclass B implements A<int, String> {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'abstract class A<K, V> {\n  V m(K a);\n}\nclass B implements A<int, String> {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_single_implements_direct_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {\n  String m(int a);\n}\nclass B implements A {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'abstract class A {\n  String m(int a);\n}\nclass B implements A {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_single_implements_indirect_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<K, V> {\n  V m(K a);\n}\nabstract class B<T1, T2> extends A<T2, T1> {}\nclass C implements B<int, String> {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'abstract class A<K, V> {\n  V m(K a);\n}\nabstract class B<T1, T2> extends A<T2, T1> {\n}\nclass C implements B<int, String> {\n  int m(String a) {}\n}\n');
        } )());
    }

    test_method_OK_single_private_linkThroughOtherLibraryOfCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = this._p('/other.dart');
            this.provider.newFile(path,'import \'test.dart\';\nclass B extends A2 {}\n');
            let library = await this._encodeDecodeLibrary('import \'other.dart\';\nclass A1 {\n  int _foo() => 1;\n}\nclass A2 extends A1 {\n  _foo() => 2;\n}\n');
            lib3.checkElementText(library,'import \'other.dart\';\nclass A1 {\n  int _foo() {}\n}\nclass A2 extends A1 {\n  int _foo() {}\n}\n');
        } )());
    }

    test_method_OK_single_withExtends_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a) {}\n}\nclass B extends Object with A {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a) {}\n}\nclass B extends Object with A {\n  synthetic B();\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_two_extendsImplements_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> {\n  T m(int a) {}\n}\nclass C extends A<int, String> implements B<String> {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A<K, V> {\n  V m(K a) {}\n}\nclass B<T> {\n  T m(int a) {}\n}\nclass C extends A<int, String> implements B<String> {\n  String m(int a) {}\n}\n');
        } )());
    }

    test_method_OK_two_extendsImplements_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {\n  String m(int a) {}\n}\nclass B {\n  String m(int a) {}\n}\nclass C extends A implements B {\n  m(a) {}\n}\n');
            lib3.checkElementText(library,'class A {\n  String m(int a) {}\n}\nclass B {\n  String m(int a) {}\n}\nclass C extends A implements B {\n  String m(int a) {}\n}\n');
        } )());
    }

    _encodeDecodeLibrary(text : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = this._p('/test.dart');
            this.provider.newFile(path,text);
            let result : any = await this.driver.getUnitElement(path);
            return result.element.library;
        } )());
    }

    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelInferenceTest() {
    }
}

export class properties {
}
