/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/checked_mode_compile_time_error_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CheckedModeCompileTimeErrorCodeTest);
    });
};
export namespace CheckedModeCompileTimeErrorCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'CheckedModeCompileTimeErrorCodeTest';
    export type Interface = Omit<CheckedModeCompileTimeErrorCodeTest, Constructors>;
}
@DartClass
export class CheckedModeCompileTimeErrorCodeTest extends lib3.ResolverTestCase {
    test_fieldFormalParameterAssignableToField_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B extends A {\n  const B();\n}\nclass C {\n  final A a;\n  const C(this.a);\n}\nvar v = const C(const B());');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_fieldType_unresolved_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final Unresolved x;\n  const A(String this.x);\n}\nvar v = const A(null);');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B implements A {\n  const B();\n}\nclass C {\n  final A a;\n  const C(this.a);\n}\nvar v = const C(const B());');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_list_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(List<int> x);\n}\nvar x = const A(const [1, 2, 3]);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_list_nonDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(List<num> x);\n}\nvar x = const A(const <int>[1, 2, 3]);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_map_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(Map<int, int> x);\n}\nvar x = const A(const {1: 2});');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_map_keyDifferent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(Map<num, int> x);\n}\nvar x = const A(const <int, int>{1: 2});');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_map_valueDifferent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(Map<int, num> x);\n}\nvar x = const A(const <int, int>{1: 2});');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_notype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x;\n  const A(this.x);\n}\nvar v = const A(5);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  const A(this.x);\n}\nvar v = const A(null);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef String Int2String(int x);\nclass A {\n  final Int2String f;\n  const A(this.f);\n}\nfoo(x) => 1;\nvar v = const A(foo);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterAssignableToField_typeSubstitution() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  final T x;\n  const A(this.x);\n}\nvar v = const A<int>(3);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  const A(this.x);\n}\nvar v = const A(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B extends A {\n  const B();\n}\nclass C {\n  final B b;\n  const C(this.b);\n}\nvar v = const C(const A());');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_fieldType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  const A(String this.x);\n}\nvar v = const A(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticWarningCode.FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_fieldType_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final Unresolved x;\n  const A(String this.x);\n}\nvar v = const A(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B implements A {}\nclass C {\n  final B b;\n  const C(this.b);\n}\nvar v = const C(const A());');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(List<int> x);\n}\nvar x = const A(const <num>[1, 2, 3]);');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_map_keyMismatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(Map<int, int> x);\n}\nvar x = const A(const <num, int>{1: 2});');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_map_valueMismatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(Map<int, int> x);\n}\nvar x = const A(const <int, num>{1: 2});');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  const A([this.x = \'foo\']);\n}\nvar v = const A();');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticTypeWarningCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameterNotAssignableToField_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef String Int2String(int x);\nclass A {\n  final Int2String f;\n  const A(this.f);\n}\nint foo(String x) => 1;\nvar v = const A(foo);');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  const A() : x = \'\';\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE,StaticWarningCode.FIELD_INITIALIZER_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldTypeMismatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(x) : y = x;\n  final int y;\n}\nvar v = const A(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldTypeMismatch_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  final T x = y;\n  const C();\n}\nconst int y = 1;\nvar v = const C<String>();\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH,StaticTypeWarningCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldTypeMismatch_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(x) : y = x;\n  final Unresolved y;\n}\nvar v = const A(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH,StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldTypeOk_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  final T x = y;\n  const C();\n}\nconst int y = 1;\nvar v = const C<int>();\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldTypeOk_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(x) : y = x;\n  final int y;\n}\nvar v = const A(null);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldTypeOk_unresolved_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(x) : y = x;\n  final Unresolved y;\n}\nvar v = const A(null);');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_listElementTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = const <String> [42];");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE,StaticWarningCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mapKeyTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = const <String, int > {1 : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.MAP_KEY_TYPE_NOT_ASSIGNABLE,StaticWarningCode.MAP_KEY_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mapValueTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = const <String, String> {'a' : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE,StaticWarningCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterAssignable_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(int x);\n}\nvar v = const A(null);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterAssignable_typeSubstitution() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  const A(T x);\n}\nvar v = const A<int>(3);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterAssignable_undefined_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(Unresolved x);\n}\nvar v = const A(null);');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(int x);\n}\nvar v = const A(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterNotAssignable_typeSubstitution() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  const A(T x);\n}\nvar v = const A<int>(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterNotAssignable_undefined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(Unresolved x);\n}\nvar v = const A(\'foo\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectingConstructor_paramTypeMismatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.a1(x) : this.a2(x);\n  const A.a2(String x);\n}\nvar v = const A.a1(0);');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_superConstructor_paramTypeMismatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  final double d;\n  const C(this.d);\n}\nclass D extends C {\n  const D(d) : super(d);\n}\nconst f = const D(0);\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_topLevelVarAssignable_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const int x = null;");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_topLevelVarAssignable_undefined_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const Unresolved x = null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_topLevelVarNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const int x = 'foo';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.VARIABLE_TYPE_MISMATCH,StaticTypeWarningCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_topLevelVarNotAssignable_undefined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const Unresolved x = 'foo';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CheckedModeCompileTimeErrorCode.VARIABLE_TYPE_MISMATCH,StaticWarningCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckedModeCompileTimeErrorCodeTest() {
    }
}

export class properties {
}
