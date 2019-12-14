/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/summarize_ast_strong_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./summarize_ast_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LinkedSummarizeAstStrongTest);
    });
};
export namespace LinkedSummarizeAstStrongTest {
    export type Constructors = lib3.LinkedSummarizeAstTest.Constructors | 'LinkedSummarizeAstStrongTest';
    export type Interface = Omit<LinkedSummarizeAstStrongTest, Constructors>;
}
@DartClass
export class LinkedSummarizeAstStrongTest extends lib3.LinkedSummarizeAstTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strongMode() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_bottom_reference_shared() {
        super.test_bottom_reference_shared();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_closure_executable_with_imported_return_type() {
        super.test_closure_executable_with_imported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_closure_executable_with_return_type_from_closure() {
        super.test_closure_executable_with_return_type_from_closure();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_closure_executable_with_unimported_return_type() {
        super.test_closure_executable_with_unimported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_implicit_dependencies_follow_other_dependencies() {
        super.test_implicit_dependencies_follow_other_dependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_inferred_type_refers_to_function_typed_param_of_typedef() {
        super.test_inferred_type_refers_to_function_typed_param_of_typedef();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_inferred_type_refers_to_nested_function_typed_param() {
        super.test_inferred_type_refers_to_nested_function_typed_param();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_inferred_type_refers_to_nested_function_typed_param_named() {
        super.test_inferred_type_refers_to_nested_function_typed_param_named();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_bottom_return_type() {
        super.test_initializer_executable_with_bottom_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_imported_return_type() {
        super.test_initializer_executable_with_imported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_return_type_from_closure() {
        super.test_initializer_executable_with_return_type_from_closure();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_return_type_from_closure_field() {
        super.test_initializer_executable_with_return_type_from_closure_field();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_return_type_from_closure_local() {
        super.test_initializer_executable_with_return_type_from_closure_local();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_unimported_return_type() {
        super.test_initializer_executable_with_unimported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_genericClosure() {
        super.test_syntheticFunctionType_genericClosure();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_genericClosure_inGenericFunction() {
        super.test_syntheticFunctionType_genericClosure_inGenericFunction();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_inGenericClass() {
        super.test_syntheticFunctionType_inGenericClass();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_inGenericFunction() {
        super.test_syntheticFunctionType_inGenericFunction();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinkedSummarizeAstStrongTest() {
    }
}

export class properties {
}
