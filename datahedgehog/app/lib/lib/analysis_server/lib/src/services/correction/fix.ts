/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/fix.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var hasFix : (errorCode : any) => boolean = (errorCode : any) : boolean =>  {
    return op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_CLASS_BOOLEAN) || op(Op.EQUALS,errorCode,StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER) || op(Op.EQUALS,errorCode,StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS) || op(Op.EQUALS,errorCode,StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED) || op(Op.EQUALS,errorCode,StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS) || op(Op.EQUALS,errorCode,StaticWarningCode.CAST_TO_NON_TYPE) || op(Op.EQUALS,errorCode,StaticWarningCode.TYPE_TEST_WITH_UNDEFINED_NAME) || op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_CLASS) || op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED) || op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_1) || op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_2) || op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS) || op(Op.EQUALS,errorCode,StaticWarningCode.FUNCTION_WITHOUT_CALL) || op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.INVALID_ANNOTATION) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.PART_OF_NON_PART) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.URI_DOES_NOT_EXIST) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED) || op(Op.EQUALS,errorCode,HintCode.CAN_BE_NULL_AFTER_NULL_AWARE) || op(Op.EQUALS,errorCode,HintCode.DEAD_CODE) || op(Op.EQUALS,errorCode,HintCode.DIVISION_OPTIMIZATION) || op(Op.EQUALS,errorCode,HintCode.TYPE_CHECK_IS_NOT_NULL) || op(Op.EQUALS,errorCode,HintCode.TYPE_CHECK_IS_NULL) || op(Op.EQUALS,errorCode,HintCode.UNDEFINED_GETTER) || op(Op.EQUALS,errorCode,HintCode.UNDEFINED_SETTER) || op(Op.EQUALS,errorCode,HintCode.UNNECESSARY_CAST) || op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_CLAUSE) || op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_STACK) || op(Op.EQUALS,errorCode,HintCode.UNUSED_IMPORT) || op(Op.EQUALS,errorCode,HintCode.UNDEFINED_METHOD) || op(Op.EQUALS,errorCode,ParserErrorCode.EXPECTED_TOKEN) || op(Op.EQUALS,errorCode,ParserErrorCode.GETTER_WITH_PARAMETERS) || op(Op.EQUALS,errorCode,ParserErrorCode.VAR_AS_TYPE_NAME) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_FUNCTION) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_GETTER) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_METHOD) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_SETTER) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.UNDEFINED_NAMED_PARAMETER) || (is(errorCode, any) && (op(Op.EQUALS,errorCode.name,LintNames.annotate_overrides) || op(Op.EQUALS,errorCode.name,LintNames.avoid_init_to_null) || op(Op.EQUALS,errorCode.name,LintNames.prefer_collection_literals) || op(Op.EQUALS,errorCode.name,LintNames.prefer_conditional_assignment) || op(Op.EQUALS,errorCode.name,LintNames.unnecessary_brace_in_string_interp) || op(Op.EQUALS,errorCode.name,LintNames.unnecessary_lambdas) || op(Op.EQUALS,errorCode.name,LintNames.unnecessary_this)));
};
export namespace DartFixKind {
    export type Constructors = 'DartFixKind';
    export type Interface = Omit<DartFixKind, Constructors>;
}
@DartClass
export class DartFixKind {
    private static __$ADD_ASYNC;
    static get ADD_ASYNC() { 
        if (this.__$ADD_ASYNC===undefined) {
            this.__$ADD_ASYNC = new bare.createInstance(any,null,'ADD_ASYNC',50,"Add 'async' modifier");
        }
        return this.__$ADD_ASYNC;
    }

    private static __$ADD_FIELD_FORMAL_PARAMETERS;
    static get ADD_FIELD_FORMAL_PARAMETERS() { 
        if (this.__$ADD_FIELD_FORMAL_PARAMETERS===undefined) {
            this.__$ADD_FIELD_FORMAL_PARAMETERS = new bare.createInstance(any,null,'ADD_FIELD_FORMAL_PARAMETERS',30,"Add final field formal parameters");
        }
        return this.__$ADD_FIELD_FORMAL_PARAMETERS;
    }

    private static __$ADD_MISSING_PARAMETER_POSITIONAL;
    static get ADD_MISSING_PARAMETER_POSITIONAL() { 
        if (this.__$ADD_MISSING_PARAMETER_POSITIONAL===undefined) {
            this.__$ADD_MISSING_PARAMETER_POSITIONAL = new bare.createInstance(any,null,'ADD_MISSING_PARAMETER_POSITIONAL',31,"Add optional positional parameter");
        }
        return this.__$ADD_MISSING_PARAMETER_POSITIONAL;
    }

    private static __$ADD_MISSING_PARAMETER_REQUIRED;
    static get ADD_MISSING_PARAMETER_REQUIRED() { 
        if (this.__$ADD_MISSING_PARAMETER_REQUIRED===undefined) {
            this.__$ADD_MISSING_PARAMETER_REQUIRED = new bare.createInstance(any,null,'ADD_MISSING_PARAMETER_REQUIRED',30,"Add required parameter");
        }
        return this.__$ADD_MISSING_PARAMETER_REQUIRED;
    }

    private static __$ADD_MISSING_REQUIRED_ARGUMENT;
    static get ADD_MISSING_REQUIRED_ARGUMENT() { 
        if (this.__$ADD_MISSING_REQUIRED_ARGUMENT===undefined) {
            this.__$ADD_MISSING_REQUIRED_ARGUMENT = new bare.createInstance(any,null,'ADD_MISSING_REQUIRED_ARGUMENT',30,"Add required argument '{0}'");
        }
        return this.__$ADD_MISSING_REQUIRED_ARGUMENT;
    }

    private static __$ADD_NE_NULL;
    static get ADD_NE_NULL() { 
        if (this.__$ADD_NE_NULL===undefined) {
            this.__$ADD_NE_NULL = new bare.createInstance(any,null,'ADD_NE_NULL',50,"Add != null");
        }
        return this.__$ADD_NE_NULL;
    }

    private static __$ADD_PACKAGE_DEPENDENCY;
    static get ADD_PACKAGE_DEPENDENCY() { 
        if (this.__$ADD_PACKAGE_DEPENDENCY===undefined) {
            this.__$ADD_PACKAGE_DEPENDENCY = new bare.createInstance(any,null,'ADD_PACKAGE_DEPENDENCY',50,"Add dependency on package '{0}'");
        }
        return this.__$ADD_PACKAGE_DEPENDENCY;
    }

    private static __$ADD_SUPER_CONSTRUCTOR_INVOCATION;
    static get ADD_SUPER_CONSTRUCTOR_INVOCATION() { 
        if (this.__$ADD_SUPER_CONSTRUCTOR_INVOCATION===undefined) {
            this.__$ADD_SUPER_CONSTRUCTOR_INVOCATION = new bare.createInstance(any,null,'ADD_SUPER_CONSTRUCTOR_INVOCATION',50,"Add super constructor {0} invocation");
        }
        return this.__$ADD_SUPER_CONSTRUCTOR_INVOCATION;
    }

    private static __$CHANGE_TO;
    static get CHANGE_TO() { 
        if (this.__$CHANGE_TO===undefined) {
            this.__$CHANGE_TO = new bare.createInstance(any,null,'CHANGE_TO',49,"Change to '{0}'");
        }
        return this.__$CHANGE_TO;
    }

    private static __$CHANGE_TO_STATIC_ACCESS;
    static get CHANGE_TO_STATIC_ACCESS() { 
        if (this.__$CHANGE_TO_STATIC_ACCESS===undefined) {
            this.__$CHANGE_TO_STATIC_ACCESS = new bare.createInstance(any,null,'CHANGE_TO_STATIC_ACCESS',50,"Change access to static using '{0}'");
        }
        return this.__$CHANGE_TO_STATIC_ACCESS;
    }

    private static __$CHANGE_TYPE_ANNOTATION;
    static get CHANGE_TYPE_ANNOTATION() { 
        if (this.__$CHANGE_TYPE_ANNOTATION===undefined) {
            this.__$CHANGE_TYPE_ANNOTATION = new bare.createInstance(any,null,'CHANGE_TYPE_ANNOTATION',50,"Change '{0}' to '{1}' type annotation");
        }
        return this.__$CHANGE_TYPE_ANNOTATION;
    }

    private static __$CONVERT_FLUTTER_CHILD;
    static get CONVERT_FLUTTER_CHILD() { 
        if (this.__$CONVERT_FLUTTER_CHILD===undefined) {
            this.__$CONVERT_FLUTTER_CHILD = new bare.createInstance(any,null,'CONVERT_FLUTTER_CHILD',50,"Convert to children:");
        }
        return this.__$CONVERT_FLUTTER_CHILD;
    }

    private static __$CREATE_CLASS;
    static get CREATE_CLASS() { 
        if (this.__$CREATE_CLASS===undefined) {
            this.__$CREATE_CLASS = new bare.createInstance(any,null,'CREATE_CLASS',50,"Create class '{0}'");
        }
        return this.__$CREATE_CLASS;
    }

    private static __$CREATE_CONSTRUCTOR;
    static get CREATE_CONSTRUCTOR() { 
        if (this.__$CREATE_CONSTRUCTOR===undefined) {
            this.__$CREATE_CONSTRUCTOR = new bare.createInstance(any,null,'CREATE_CONSTRUCTOR',50,"Create constructor '{0}'");
        }
        return this.__$CREATE_CONSTRUCTOR;
    }

    private static __$CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS;
    static get CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS() { 
        if (this.__$CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS===undefined) {
            this.__$CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS = new bare.createInstance(any,null,'CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS',50,"Create constructor for final fields");
        }
        return this.__$CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS;
    }

    private static __$CREATE_CONSTRUCTOR_SUPER;
    static get CREATE_CONSTRUCTOR_SUPER() { 
        if (this.__$CREATE_CONSTRUCTOR_SUPER===undefined) {
            this.__$CREATE_CONSTRUCTOR_SUPER = new bare.createInstance(any,null,'CREATE_CONSTRUCTOR_SUPER',50,"Create constructor to call {0}");
        }
        return this.__$CREATE_CONSTRUCTOR_SUPER;
    }

    private static __$CREATE_FIELD;
    static get CREATE_FIELD() { 
        if (this.__$CREATE_FIELD===undefined) {
            this.__$CREATE_FIELD = new bare.createInstance(any,null,'CREATE_FIELD',51,"Create field '{0}'");
        }
        return this.__$CREATE_FIELD;
    }

    private static __$CREATE_FILE;
    static get CREATE_FILE() { 
        if (this.__$CREATE_FILE===undefined) {
            this.__$CREATE_FILE = new bare.createInstance(any,null,'CREATE_FILE',50,"Create file '{0}'");
        }
        return this.__$CREATE_FILE;
    }

    private static __$CREATE_FUNCTION;
    static get CREATE_FUNCTION() { 
        if (this.__$CREATE_FUNCTION===undefined) {
            this.__$CREATE_FUNCTION = new bare.createInstance(any,null,'CREATE_FUNCTION',51,"Create function '{0}'");
        }
        return this.__$CREATE_FUNCTION;
    }

    private static __$CREATE_GETTER;
    static get CREATE_GETTER() { 
        if (this.__$CREATE_GETTER===undefined) {
            this.__$CREATE_GETTER = new bare.createInstance(any,null,'CREATE_GETTER',50,"Create getter '{0}'");
        }
        return this.__$CREATE_GETTER;
    }

    private static __$CREATE_LOCAL_VARIABLE;
    static get CREATE_LOCAL_VARIABLE() { 
        if (this.__$CREATE_LOCAL_VARIABLE===undefined) {
            this.__$CREATE_LOCAL_VARIABLE = new bare.createInstance(any,null,'CREATE_LOCAL_VARIABLE',50,"Create local variable '{0}'");
        }
        return this.__$CREATE_LOCAL_VARIABLE;
    }

    private static __$CREATE_METHOD;
    static get CREATE_METHOD() { 
        if (this.__$CREATE_METHOD===undefined) {
            this.__$CREATE_METHOD = new bare.createInstance(any,null,'CREATE_METHOD',50,"Create method '{0}'");
        }
        return this.__$CREATE_METHOD;
    }

    private static __$CREATE_MISSING_METHOD_CALL;
    static get CREATE_MISSING_METHOD_CALL() { 
        if (this.__$CREATE_MISSING_METHOD_CALL===undefined) {
            this.__$CREATE_MISSING_METHOD_CALL = new bare.createInstance(any,null,'CREATE_MISSING_METHOD_CALL',49,"Create method 'call'.");
        }
        return this.__$CREATE_MISSING_METHOD_CALL;
    }

    private static __$CREATE_MISSING_OVERRIDES;
    static get CREATE_MISSING_OVERRIDES() { 
        if (this.__$CREATE_MISSING_OVERRIDES===undefined) {
            this.__$CREATE_MISSING_OVERRIDES = new bare.createInstance(any,null,'CREATE_MISSING_OVERRIDES',49,"Create {0} missing override(s)");
        }
        return this.__$CREATE_MISSING_OVERRIDES;
    }

    private static __$CREATE_NO_SUCH_METHOD;
    static get CREATE_NO_SUCH_METHOD() { 
        if (this.__$CREATE_NO_SUCH_METHOD===undefined) {
            this.__$CREATE_NO_SUCH_METHOD = new bare.createInstance(any,null,'CREATE_NO_SUCH_METHOD',51,"Create 'noSuchMethod' method");
        }
        return this.__$CREATE_NO_SUCH_METHOD;
    }

    private static __$IMPORT_LIBRARY_PREFIX;
    static get IMPORT_LIBRARY_PREFIX() { 
        if (this.__$IMPORT_LIBRARY_PREFIX===undefined) {
            this.__$IMPORT_LIBRARY_PREFIX = new bare.createInstance(any,null,'IMPORT_LIBRARY_PREFIX',51,"Use imported library '{0}' with prefix '{1}'");
        }
        return this.__$IMPORT_LIBRARY_PREFIX;
    }

    private static __$IMPORT_LIBRARY_PROJECT1;
    static get IMPORT_LIBRARY_PROJECT1() { 
        if (this.__$IMPORT_LIBRARY_PROJECT1===undefined) {
            this.__$IMPORT_LIBRARY_PROJECT1 = new bare.createInstance(any,null,'IMPORT_LIBRARY_PROJECT1',47,"Import library '{0}'");
        }
        return this.__$IMPORT_LIBRARY_PROJECT1;
    }

    private static __$IMPORT_LIBRARY_PROJECT2;
    static get IMPORT_LIBRARY_PROJECT2() { 
        if (this.__$IMPORT_LIBRARY_PROJECT2===undefined) {
            this.__$IMPORT_LIBRARY_PROJECT2 = new bare.createInstance(any,null,'IMPORT_LIBRARY_PROJECT2',48,"Import library '{0}'");
        }
        return this.__$IMPORT_LIBRARY_PROJECT2;
    }

    private static __$IMPORT_LIBRARY_PROJECT3;
    static get IMPORT_LIBRARY_PROJECT3() { 
        if (this.__$IMPORT_LIBRARY_PROJECT3===undefined) {
            this.__$IMPORT_LIBRARY_PROJECT3 = new bare.createInstance(any,null,'IMPORT_LIBRARY_PROJECT3',49,"Import library '{0}'");
        }
        return this.__$IMPORT_LIBRARY_PROJECT3;
    }

    private static __$IMPORT_LIBRARY_SDK;
    static get IMPORT_LIBRARY_SDK() { 
        if (this.__$IMPORT_LIBRARY_SDK===undefined) {
            this.__$IMPORT_LIBRARY_SDK = new bare.createInstance(any,null,'IMPORT_LIBRARY_SDK',46,"Import library '{0}'");
        }
        return this.__$IMPORT_LIBRARY_SDK;
    }

    private static __$IMPORT_LIBRARY_SHOW;
    static get IMPORT_LIBRARY_SHOW() { 
        if (this.__$IMPORT_LIBRARY_SHOW===undefined) {
            this.__$IMPORT_LIBRARY_SHOW = new bare.createInstance(any,null,'IMPORT_LIBRARY_SHOW',45,"Update library '{0}' import");
        }
        return this.__$IMPORT_LIBRARY_SHOW;
    }

    private static __$INSERT_SEMICOLON;
    static get INSERT_SEMICOLON() { 
        if (this.__$INSERT_SEMICOLON===undefined) {
            this.__$INSERT_SEMICOLON = new bare.createInstance(any,null,'INSERT_SEMICOLON',50,"Insert ';'");
        }
        return this.__$INSERT_SEMICOLON;
    }

    private static __$LINT_ADD_OVERRIDE;
    static get LINT_ADD_OVERRIDE() { 
        if (this.__$LINT_ADD_OVERRIDE===undefined) {
            this.__$LINT_ADD_OVERRIDE = new bare.createInstance(any,null,'LINT_ADD_OVERRIDE',50,"Add '@override' annotation");
        }
        return this.__$LINT_ADD_OVERRIDE;
    }

    private static __$LINT_REMOVE_INTERPOLATION_BRACES;
    static get LINT_REMOVE_INTERPOLATION_BRACES() { 
        if (this.__$LINT_REMOVE_INTERPOLATION_BRACES===undefined) {
            this.__$LINT_REMOVE_INTERPOLATION_BRACES = new bare.createInstance(any,null,'LINT_REMOVE_INTERPOLATION_BRACES',50,'Remove unnecessary interpolation braces');
        }
        return this.__$LINT_REMOVE_INTERPOLATION_BRACES;
    }

    private static __$MAKE_CLASS_ABSTRACT;
    static get MAKE_CLASS_ABSTRACT() { 
        if (this.__$MAKE_CLASS_ABSTRACT===undefined) {
            this.__$MAKE_CLASS_ABSTRACT = new bare.createInstance(any,null,'MAKE_CLASS_ABSTRACT',50,"Make class '{0}' abstract");
        }
        return this.__$MAKE_CLASS_ABSTRACT;
    }

    private static __$REMOVE_DEAD_CODE;
    static get REMOVE_DEAD_CODE() { 
        if (this.__$REMOVE_DEAD_CODE===undefined) {
            this.__$REMOVE_DEAD_CODE = new bare.createInstance(any,null,'REMOVE_DEAD_CODE',50,"Remove dead code");
        }
        return this.__$REMOVE_DEAD_CODE;
    }

    private static __$MAKE_FIELD_NOT_FINAL;
    static get MAKE_FIELD_NOT_FINAL() { 
        if (this.__$MAKE_FIELD_NOT_FINAL===undefined) {
            this.__$MAKE_FIELD_NOT_FINAL = new bare.createInstance(any,null,'MAKE_FIELD_NOT_FINAL',50,"Make field '{0}' not final");
        }
        return this.__$MAKE_FIELD_NOT_FINAL;
    }

    private static __$REMOVE_AWAIT;
    static get REMOVE_AWAIT() { 
        if (this.__$REMOVE_AWAIT===undefined) {
            this.__$REMOVE_AWAIT = new bare.createInstance(any,null,'REMOVE_AWAIT',50,"Remove await");
        }
        return this.__$REMOVE_AWAIT;
    }

    private static __$REMOVE_EMPTY_STATEMENT;
    static get REMOVE_EMPTY_STATEMENT() { 
        if (this.__$REMOVE_EMPTY_STATEMENT===undefined) {
            this.__$REMOVE_EMPTY_STATEMENT = new bare.createInstance(any,null,'REMOVE_EMPTY_STATEMENT',50,"Remove empty statement");
        }
        return this.__$REMOVE_EMPTY_STATEMENT;
    }

    private static __$REMOVE_INITIALIZER;
    static get REMOVE_INITIALIZER() { 
        if (this.__$REMOVE_INITIALIZER===undefined) {
            this.__$REMOVE_INITIALIZER = new bare.createInstance(any,null,'REMOVE_INITIALIZER',50,"Remove initializer");
        }
        return this.__$REMOVE_INITIALIZER;
    }

    private static __$REMOVE_METHOD_DECLARATION;
    static get REMOVE_METHOD_DECLARATION() { 
        if (this.__$REMOVE_METHOD_DECLARATION===undefined) {
            this.__$REMOVE_METHOD_DECLARATION = new bare.createInstance(any,null,'REMOVE_METHOD_DECLARATION',50,'Remove method declaration');
        }
        return this.__$REMOVE_METHOD_DECLARATION;
    }

    private static __$REMOVE_PARAMETERS_IN_GETTER_DECLARATION;
    static get REMOVE_PARAMETERS_IN_GETTER_DECLARATION() { 
        if (this.__$REMOVE_PARAMETERS_IN_GETTER_DECLARATION===undefined) {
            this.__$REMOVE_PARAMETERS_IN_GETTER_DECLARATION = new bare.createInstance(any,null,'REMOVE_PARAMETERS_IN_GETTER_DECLARATION',50,"Remove parameters in getter declaration");
        }
        return this.__$REMOVE_PARAMETERS_IN_GETTER_DECLARATION;
    }

    private static __$REMOVE_PARENTHESIS_IN_GETTER_INVOCATION;
    static get REMOVE_PARENTHESIS_IN_GETTER_INVOCATION() { 
        if (this.__$REMOVE_PARENTHESIS_IN_GETTER_INVOCATION===undefined) {
            this.__$REMOVE_PARENTHESIS_IN_GETTER_INVOCATION = new bare.createInstance(any,null,'REMOVE_PARENTHESIS_IN_GETTER_INVOCATION',50,"Remove parentheses in getter invocation");
        }
        return this.__$REMOVE_PARENTHESIS_IN_GETTER_INVOCATION;
    }

    private static __$REMOVE_THIS_EXPRESSION;
    static get REMOVE_THIS_EXPRESSION() { 
        if (this.__$REMOVE_THIS_EXPRESSION===undefined) {
            this.__$REMOVE_THIS_EXPRESSION = new bare.createInstance(any,null,'REMOVE_THIS_EXPRESSION',50,"Remove this expression");
        }
        return this.__$REMOVE_THIS_EXPRESSION;
    }

    private static __$REMOVE_TYPE_NAME;
    static get REMOVE_TYPE_NAME() { 
        if (this.__$REMOVE_TYPE_NAME===undefined) {
            this.__$REMOVE_TYPE_NAME = new bare.createInstance(any,null,'REMOVE_TYPE_NAME',50,"Remove type name");
        }
        return this.__$REMOVE_TYPE_NAME;
    }

    private static __$REMOVE_UNNECESSARY_CAST;
    static get REMOVE_UNNECESSARY_CAST() { 
        if (this.__$REMOVE_UNNECESSARY_CAST===undefined) {
            this.__$REMOVE_UNNECESSARY_CAST = new bare.createInstance(any,null,'REMOVE_UNNECESSARY_CAST',50,"Remove unnecessary cast");
        }
        return this.__$REMOVE_UNNECESSARY_CAST;
    }

    private static __$REMOVE_UNUSED_CATCH_CLAUSE;
    static get REMOVE_UNUSED_CATCH_CLAUSE() { 
        if (this.__$REMOVE_UNUSED_CATCH_CLAUSE===undefined) {
            this.__$REMOVE_UNUSED_CATCH_CLAUSE = new bare.createInstance(any,null,'REMOVE_UNUSED_CATCH',50,"Remove unused 'catch' clause");
        }
        return this.__$REMOVE_UNUSED_CATCH_CLAUSE;
    }

    private static __$REMOVE_UNUSED_CATCH_STACK;
    static get REMOVE_UNUSED_CATCH_STACK() { 
        if (this.__$REMOVE_UNUSED_CATCH_STACK===undefined) {
            this.__$REMOVE_UNUSED_CATCH_STACK = new bare.createInstance(any,null,'REMOVE_UNUSED_CATCH_STACK',50,"Remove unused stack trace variable");
        }
        return this.__$REMOVE_UNUSED_CATCH_STACK;
    }

    private static __$REMOVE_UNUSED_IMPORT;
    static get REMOVE_UNUSED_IMPORT() { 
        if (this.__$REMOVE_UNUSED_IMPORT===undefined) {
            this.__$REMOVE_UNUSED_IMPORT = new bare.createInstance(any,null,'REMOVE_UNUSED_IMPORT',50,"Remove unused import");
        }
        return this.__$REMOVE_UNUSED_IMPORT;
    }

    private static __$REPLACE_BOOLEAN_WITH_BOOL;
    static get REPLACE_BOOLEAN_WITH_BOOL() { 
        if (this.__$REPLACE_BOOLEAN_WITH_BOOL===undefined) {
            this.__$REPLACE_BOOLEAN_WITH_BOOL = new bare.createInstance(any,null,'REPLACE_BOOLEAN_WITH_BOOL',50,"Replace 'boolean' with 'bool'");
        }
        return this.__$REPLACE_BOOLEAN_WITH_BOOL;
    }

    private static __$REPLACE_VAR_WITH_DYNAMIC;
    static get REPLACE_VAR_WITH_DYNAMIC() { 
        if (this.__$REPLACE_VAR_WITH_DYNAMIC===undefined) {
            this.__$REPLACE_VAR_WITH_DYNAMIC = new bare.createInstance(any,null,'REPLACE_VAR_WITH_DYNAMIC',50,"Replace 'var' with 'dynamic'");
        }
        return this.__$REPLACE_VAR_WITH_DYNAMIC;
    }

    private static __$REPLACE_RETURN_TYPE_FUTURE;
    static get REPLACE_RETURN_TYPE_FUTURE() { 
        if (this.__$REPLACE_RETURN_TYPE_FUTURE===undefined) {
            this.__$REPLACE_RETURN_TYPE_FUTURE = new bare.createInstance(any,null,'REPLACE_RETURN_TYPE_FUTURE',50,"Return 'Future' from 'async' function");
        }
        return this.__$REPLACE_RETURN_TYPE_FUTURE;
    }

    private static __$REPLACE_WITH_BRACKETS;
    static get REPLACE_WITH_BRACKETS() { 
        if (this.__$REPLACE_WITH_BRACKETS===undefined) {
            this.__$REPLACE_WITH_BRACKETS = new bare.createInstance(any,null,'REPLACE_WITH_BRACKETS',50,"Replace with { }");
        }
        return this.__$REPLACE_WITH_BRACKETS;
    }

    private static __$REPLACE_WITH_CONDITIONAL_ASSIGNMENT;
    static get REPLACE_WITH_CONDITIONAL_ASSIGNMENT() { 
        if (this.__$REPLACE_WITH_CONDITIONAL_ASSIGNMENT===undefined) {
            this.__$REPLACE_WITH_CONDITIONAL_ASSIGNMENT = new bare.createInstance(any,null,'REPLACE_WITH_CONDITIONAL_ASSIGNMENT',50,'Replace with ??=');
        }
        return this.__$REPLACE_WITH_CONDITIONAL_ASSIGNMENT;
    }

    private static __$REPLACE_WITH_IDENTIFIER;
    static get REPLACE_WITH_IDENTIFIER() { 
        if (this.__$REPLACE_WITH_IDENTIFIER===undefined) {
            this.__$REPLACE_WITH_IDENTIFIER = new bare.createInstance(any,null,'REPLACE_WITH_IDENTIFIER',50,"Replace with identifier");
        }
        return this.__$REPLACE_WITH_IDENTIFIER;
    }

    private static __$REPLACE_WITH_LITERAL;
    static get REPLACE_WITH_LITERAL() { 
        if (this.__$REPLACE_WITH_LITERAL===undefined) {
            this.__$REPLACE_WITH_LITERAL = new bare.createInstance(any,null,'REPLACE_WITH_LITERAL',50,'Replace with literal');
        }
        return this.__$REPLACE_WITH_LITERAL;
    }

    private static __$REPLACE_WITH_NULL_AWARE;
    static get REPLACE_WITH_NULL_AWARE() { 
        if (this.__$REPLACE_WITH_NULL_AWARE===undefined) {
            this.__$REPLACE_WITH_NULL_AWARE = new bare.createInstance(any,null,'REPLACE_WITH_NULL_AWARE',50,"Replace the '.' with a '?.' in the invocation");
        }
        return this.__$REPLACE_WITH_NULL_AWARE;
    }

    private static __$REPLACE_WITH_TEAR_OFF;
    static get REPLACE_WITH_TEAR_OFF() { 
        if (this.__$REPLACE_WITH_TEAR_OFF===undefined) {
            this.__$REPLACE_WITH_TEAR_OFF = new bare.createInstance(any,null,'REPLACE_WITH_TEAR_OFF',50,"Replace function literal with tear-off");
        }
        return this.__$REPLACE_WITH_TEAR_OFF;
    }

    private static __$USE_CONST;
    static get USE_CONST() { 
        if (this.__$USE_CONST===undefined) {
            this.__$USE_CONST = new bare.createInstance(any,null,'USE_CONST',50,"Change to constant");
        }
        return this.__$USE_CONST;
    }

    private static __$USE_EFFECTIVE_INTEGER_DIVISION;
    static get USE_EFFECTIVE_INTEGER_DIVISION() { 
        if (this.__$USE_EFFECTIVE_INTEGER_DIVISION===undefined) {
            this.__$USE_EFFECTIVE_INTEGER_DIVISION = new bare.createInstance(any,null,'USE_EFFECTIVE_INTEGER_DIVISION',50,"Use effective integer division ~/");
        }
        return this.__$USE_EFFECTIVE_INTEGER_DIVISION;
    }

    private static __$USE_EQ_EQ_NULL;
    static get USE_EQ_EQ_NULL() { 
        if (this.__$USE_EQ_EQ_NULL===undefined) {
            this.__$USE_EQ_EQ_NULL = new bare.createInstance(any,null,'USE_EQ_EQ_NULL',50,"Use == null instead of 'is Null'");
        }
        return this.__$USE_EQ_EQ_NULL;
    }

    private static __$USE_NOT_EQ_NULL;
    static get USE_NOT_EQ_NULL() { 
        if (this.__$USE_NOT_EQ_NULL===undefined) {
            this.__$USE_NOT_EQ_NULL = new bare.createInstance(any,null,'USE_NOT_EQ_NULL',50,"Use != null instead of 'is! Null'");
        }
        return this.__$USE_NOT_EQ_NULL;
    }

    constructor() {
    }
    @defaultConstructor
    DartFixKind() {
    }
}

export namespace FixContextImpl {
    export type Constructors = 'FixContextImpl' | 'from';
    export type Interface = Omit<FixContextImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FixContextImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resourceProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisDriver : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    error : any;

    constructor(resourceProvider : any,analysisDriver : any,error : any) {
    }
    @defaultConstructor
    FixContextImpl(resourceProvider : any,analysisDriver : any,error : any) {
        this.resourceProvider = resourceProvider;
        this.analysisDriver = analysisDriver;
        this.error = error;
    }
    @namedConstructor
    from(other : any) {
        this.resourceProvider = other.resourceProvider;
        this.analysisDriver = other.analysisDriver;
        this.error = other.error;
    }
    static from : new(other : any) => FixContextImpl;

}

export class properties {
}
