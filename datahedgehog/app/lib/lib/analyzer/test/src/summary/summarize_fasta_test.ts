/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/summarize_fasta_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./summarize_ast_strong_test";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LinkedSummarizeAstFastaTest);
    });
};
export namespace LinkedSummarizeAstFastaTest {
    export type Constructors = lib3.LinkedSummarizeAstStrongTest.Constructors | 'LinkedSummarizeAstFastaTest';
    export type Interface = Omit<LinkedSummarizeAstFastaTest, Constructors>;
}
@DartClass
export class LinkedSummarizeAstFastaTest extends lib3.LinkedSummarizeAstStrongTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createUnlinkedSummary(uri : lib4.Uri,text : string) : any {
        let scanner = new bare.createInstance(any,null,text);
        let startingToken = scanner.tokenize();
        let listener = new bare.createInstance(any,null,uri);
        let parser = new bare.createInstance(any,null,listener);
        parser.parseUnit(startingToken);
        return listener.topScope.unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_alias_documented() : void {
        super.test_class_alias_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_codeRange() : void {
        super.test_class_codeRange();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_documented() : void {
        super.test_class_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_documented_tripleSlash() : void {
        super.test_class_documented_tripleSlash();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_documented_with_references() : void {
        super.test_class_documented_with_references();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_documented_with_with_windows_line_endings() : void {
        super.test_class_documented_with_with_windows_line_endings();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_name() : void {
        super.test_class_name();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_class_type_param_no_bound() : void {
        super.test_class_type_param_no_bound();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_constructor() : void {
        super.test_constructor();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_constructor_documented() : void {
        super.test_constructor_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_constructor_initializing_formal_named_withDefault() : void {
        super.test_constructor_initializing_formal_named_withDefault();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_constructor_initializing_formal_positional_withDefault() : void {
        super.test_constructor_initializing_formal_positional_withDefault();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_constructor_named() : void {
        super.test_constructor_named();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_enum() : void {
        super.test_enum();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_enum_documented() : void {
        super.test_enum_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_enum_value_documented() : void {
        super.test_enum_value_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_function() : void {
        super.test_executable_function();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_getter() : void {
        super.test_executable_getter();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_member_function() : void {
        super.test_executable_member_function();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_member_getter() : void {
        super.test_executable_member_getter();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_member_setter() : void {
        super.test_executable_member_setter();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_param_codeRange() : void {
        super.test_executable_param_codeRange();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_param_kind_named_withDefault() : void {
        super.test_executable_param_kind_named_withDefault();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_param_kind_positional_withDefault() : void {
        super.test_executable_param_kind_positional_withDefault();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_param_name() : void {
        super.test_executable_param_name();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_executable_setter() : void {
        super.test_executable_setter();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_field_documented() : void {
        super.test_field_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_function_documented() : void {
        super.test_function_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_getter_documented() : void {
        super.test_getter_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_method_documented() : void {
        super.test_method_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_setter_documented() : void {
        super.test_setter_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_type_param_codeRange() : void {
        super.test_type_param_codeRange();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_typedef_codeRange() : void {
        super.test_typedef_codeRange();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_typedef_documented() : void {
        super.test_typedef_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_typedef_name() : void {
        super.test_typedef_name();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unit_codeRange() : void {
        super.test_unit_codeRange();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_variable() : void {
        super.test_variable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_variable_codeRange() : void {
        super.test_variable_codeRange();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_variable_documented() : void {
        super.test_variable_documented();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_variable_initializer_literal() : void {
        super.test_variable_initializer_literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_variable_initializer_withLocals() : void {
        super.test_variable_initializer_withLocals();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinkedSummarizeAstFastaTest() {
    }
}

export class properties {
}
