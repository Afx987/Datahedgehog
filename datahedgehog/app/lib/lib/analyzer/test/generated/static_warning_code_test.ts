/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_warning_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticWarningCodeTest);
    });
};
export namespace StaticWarningCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StaticWarningCodeTest';
    export type Interface = Omit<StaticWarningCodeTest, Constructors>;
}
@DartClass
export class StaticWarningCodeTest extends lib3.ResolverTestCase {
    fail_argumentTypeNotAssignable_tearOff_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_undefinedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_undefinedIdentifier_commentReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/** [m] xxx [new B.c] */
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER,StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    fail_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ambiguousImport_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,CompileTimeErrorCode.EXTENDS_NON_CLASS));
        } )());
    }

    test_ambiguousImport_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,CompileTimeErrorCode.IMPLEMENTS_NON_CLASS));
        } )());
    }

    test_ambiguousImport_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            let partSource : any = this.addNamedSource("/part.dart",'part of lib;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(partSource);
            this.assertNoErrors(source);
            this.assertErrors(partSource,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,CompileTimeErrorCode.EXTENDS_NON_CLASS));
        } )());
    }

    test_ambiguousImport_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_qualifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_typeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_typeArgument_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_typeArgument_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_varRead() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_varWrite() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_withPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_argumentTypeNotAssignable_ambiguousClassName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            let errors : core.DartList<any> = analysisResult.errors;
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,error.errorCode);
            let message : string = error.message;
            expect(new core.DartString(message).indexOf("_A") != -1,isTrue);
            expect(new core.DartString(message).indexOf("lib1.dart") != -1,isTrue);
            expect(new core.DartString(message).indexOf("lib2.dart") != -1,isTrue);
        } )());
    }

    test_argumentTypeNotAssignable_annotation_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_annotation_unnamedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_binary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_cascadeSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('// filler filler filler filler filler filler filler filler filler filler
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_const_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_functionExpressionInvocation_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_callParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_callVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_functionParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('a(b(int p)) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_functionParameter_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K, V> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_functionTypes_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void acceptFunNumOptBool(void funNumOptBool([bool b])) {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({String p}) {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f([String p]) {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(String p) {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_typedef_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A<T>(T p);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_typedef_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(int p);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_typedef_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(int p);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_new_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_new_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_new_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_assignmentToConst_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToConst_instanceVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToConst_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToConst_localVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToEnumType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { e }
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_assignmentToFinal_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_instanceVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_localVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(final x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_postfixMinusMinus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_postfixPlusPlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_prefixMinusMinus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_prefixPlusPlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_suffixMinusMinus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_suffixPlusPlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('final x = 0;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinalNoSetter_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL_NO_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinalNoSetter_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL_NO_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FUNCTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef void F();
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_assignmentToTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_caseBlockNotTerminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int p) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CASE_BLOCK_NOT_TERMINATED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_castToNonType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var A = 0;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CAST_TO_NON_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_concreteClassWithAbstractMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_concreteClassWithAbstractMember_noSuchMethod_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingDartImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib.dart\';
            this.addNamedSource("/lib.dart",'library lib;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_DART_IMPORT));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declField_direct_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_direct_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_direct_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_direct_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_direct_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER2));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter_sameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter_setterInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter_setterInSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceSetterAndSuperclassMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticGetterAndInstanceSetter_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticGetterAndInstanceSetter_superClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticGetterAndInstanceSetter_thisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticSetterAndInstanceMember_thisClass_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticSetterAndInstanceMember_thisClass_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithAbstractClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONST_WITH_ABSTRACT_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_equalKeysInMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var m = {'a' : 0, 'b' : 1, 'a' : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EQUAL_KEYS_IN_MAP));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_equalKeysInMap_withEqualTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EQUAL_KEYS_IN_MAP));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_equalKeysInMap_withUnequalTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_exportDuplicatedLibraryNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;
            this.addNamedSource("/lib1.dart","library lib;");
            this.addNamedSource("/lib2.dart","library lib;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXPORT_DUPLICATED_LIBRARY_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArgumentsCouldBeNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({x, y}) {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArgumentsCouldBeNamed_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedInInitializerAndDeclaration_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZER_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializingFormalNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedInDeclarationAndConstructor_initializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedInDeclarationAndConstructor_initializingFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_inConstructor_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_1));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_inConstructor_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_2));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_inConstructor_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_instanceField_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_instanceField_final_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_library_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("final F;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_local_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements Function {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_mixin_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_direct_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_extends_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_implements_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_mixin_implements_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDuplicatedLibraryNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;
            this.addNamedSource("/lib1.dart","library lib;");
            this.addNamedSource("/lib2.dart","library lib;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.IMPORT_DUPLICATED_LIBRARY_NAMED,HintCode.UNUSED_IMPORT,HintCode.UNUSED_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importOfNonLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('part of lib;
        } )());
    }

    test_inconsistentMethodInheritanceGetterAndMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_getter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Base {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_method2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_setter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE,StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType_twoInterfaces_conflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNamedParamType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_superclass_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_twoInterfaces_conflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideOptionalParamType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideOptionalParamType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_interface_grandparent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_superclass_grandparent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefault_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefaultNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefaultNull_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_nonDefaultOverridesDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_nonDefaultOverridesDefault_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideNamed_fewerNamedParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideNamed_missingNamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverridePositional_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverridePositional_optionalAndRequired() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverridePositional_optionalAndRequired2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideRequired() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_REQUIRED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType_superclass_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType_twoInterfaces_conflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_listElementTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = <String> [42];");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mapKeyTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = <String, int > {1 : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MAP_KEY_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mapValueTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = <String, String> {'a' : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_getterAndSuperSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_setterAndSuperGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int get g { return 0; }
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingEnumConstantInSwitch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE, TWO, THREE, FOUR }
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISSING_ENUM_CONSTANT_IN_SWITCH,StaticWarningCode.MISSING_ENUM_CONSTANT_IN_SWITCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MIXED_RETURN_TYPES,StaticWarningCode.MIXED_RETURN_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MIXED_RETURN_TYPES,StaticWarningCode.MIXED_RETURN_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MIXED_RETURN_TYPES,StaticWarningCode.MIXED_RETURN_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithAbstractClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_ABSTRACT_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithInvalidTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithInvalidTypeParameters_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithInvalidTypeParameters_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithNonType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var A = 0;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithNonType_fromLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source1 : any = this.addNamedSource("/lib.dart","class B {}");
            let source2 : any = this.addNamedSource("/lib2.dart",'import \'lib.dart\' as lib;
            await this.computeAnalysisResult(source1);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(StaticWarningCode.NEW_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source1));
        } )());
    }

    test_newWithUndefinedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR));
        } )());
    }

    test_newWithUndefinedConstructorDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberFivePlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberFour() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class M {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class M {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_ensureCorrectFunctionSubtypeIsUsedInImplementation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_getter_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_getter_fromSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_method_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_method_fromSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_method_optionalParamCount() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixinInherits_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A { get g1; get g2; }
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixinInherits_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A { m1(); m2(); }
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixinInherits_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A { set s1(v); set s2(v); }
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_noSuchMethod_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_setter_and_implicitSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_setter_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_setter_fromSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_superclasses_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_variable_fromInterface_missingGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_variable_fromInterface_missingSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberThree() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberTwo() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberTwo_variable_fromInterface_missingBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberTwo_variable_fromMixin_missingBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_noElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_notType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var T = 0;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_OPERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int set x(int v) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notAType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_A_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int a, String b) {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments_getterReturningFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Getter(self);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_partOfDifferentLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;
            this.addNamedSource("/part.dart","part of lub;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.PART_OF_DIFFERENT_LIBRARY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToInvalidFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_INVALID_FUNCTION_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToInvalidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_INVALID_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToMissingConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B{
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_redirectToMissingConstructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B{
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_redirectToNonClass_notAType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToNonClass_undefinedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_factoryConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A { factory A() { return; } }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int f() { return; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A { int m() { return; } }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_mixedReturnTypes_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(int x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Null f() {return;}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
        } )());
    }

    test_staticAccessToInstanceMember_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_method_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_switchExpressionNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int p) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.SWITCH_EXPRESSION_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAnnotationDeferredClass_asExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_catchClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_functionDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_functionTypedFormalParameter_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_isExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_methodDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_simpleFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_typeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_typeArgumentList2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_typeParameter_bound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationDeferredClass_variableDeclarationList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_typeAnnotationGenericFunctionParameter_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAnnotationGenericFunctionParameter_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAnnotationGenericFunctionParameter_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('T function<T>(Object t) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_methodBodyReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_methodParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_methodReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_functionType_arg_InterToDyn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef FuncDyn(x);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
        } )());
    }

    test_typeTestNonType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var A = 0;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_TEST_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeTestWithUndefinedName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var p) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_TEST_WITH_UNDEFINED_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedClass_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { new C(); }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
        } )());
    }

    test_undefinedClass_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { C c; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
        } )());
    }

    test_undefinedClassBoolean_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { boolean v; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS_BOOLEAN));
        } )());
    }

    test_undefinedGetter_fromLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source1 : any = this.addNamedSource("/lib.dart","");
            let source2 : any = this.addNamedSource("/lib2.dart",'import \'lib.dart\' as lib;
            await this.computeAnalysisResult(source1);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(StaticWarningCode.UNDEFINED_GETTER));
            this.verify(new core.DartList.literal(source1));
        } )());
    }

    test_undefinedIdentifier_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var l) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int a() => b;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_importCore_withShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:core\' show List;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var a = b;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { C.m(); }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_private_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;
            let source : any = this.addSource('import \'lib.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_private_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;
            let source : any = this.addSource('import \'lib.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifierAwait_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("void a() { await; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT));
        } )());
    }

    test_undefinedNamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({a, b}) {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_NAMED_PARAMETER));
        } )());
    }

    test_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart","");
            let source2 : any = this.addNamedSource("/lib2.dart",'import \'lib.dart\' as lib;
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(StaticWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedStaticMethodOrGetter_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedStaticMethodOrGetter_getter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedStaticMethodOrGetter_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedStaticMethodOrGetter_method_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedStaticMethodOrGetter_setter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_voidReturnForGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.VOID_RETURN_FOR_GETTER));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticWarningCodeTest() {
    }
}

export class properties {
}