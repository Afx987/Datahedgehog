"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/fix.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
exports.hasFix = function (errorCode) {
    return utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.UNDEFINED_CLASS_BOOLEAN) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.CAST_TO_NON_TYPE) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.TYPE_TEST_WITH_UNDEFINED_NAME) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.UNDEFINED_CLASS) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.FINAL_NOT_INITIALIZED) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_1) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_2) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.FUNCTION_WITHOUT_CALL) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticWarningCode.UNDEFINED_IDENTIFIER) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.INVALID_ANNOTATION) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.PART_OF_NON_PART) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.URI_DOES_NOT_EXIST) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.CAN_BE_NULL_AFTER_NULL_AWARE) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.DEAD_CODE) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.DIVISION_OPTIMIZATION) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.TYPE_CHECK_IS_NOT_NULL) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.TYPE_CHECK_IS_NULL) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.UNDEFINED_GETTER) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.UNDEFINED_SETTER) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.UNNECESSARY_CAST) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.UNUSED_CATCH_CLAUSE) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.UNUSED_CATCH_STACK) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.UNUSED_IMPORT) || utils_1.op(utils_1.Op.EQUALS, errorCode, HintCode.UNDEFINED_METHOD) || utils_1.op(utils_1.Op.EQUALS, errorCode, ParserErrorCode.EXPECTED_TOKEN) || utils_1.op(utils_1.Op.EQUALS, errorCode, ParserErrorCode.GETTER_WITH_PARAMETERS) || utils_1.op(utils_1.Op.EQUALS, errorCode, ParserErrorCode.VAR_AS_TYPE_NAME) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.UNDEFINED_FUNCTION) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.UNDEFINED_GETTER) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.UNDEFINED_METHOD) || utils_1.op(utils_1.Op.EQUALS, errorCode, StaticTypeWarningCode.UNDEFINED_SETTER) || utils_1.op(utils_1.Op.EQUALS, errorCode, CompileTimeErrorCode.UNDEFINED_NAMED_PARAMETER) || (_common_1.is(errorCode, any) && (utils_1.op(utils_1.Op.EQUALS, errorCode.name, LintNames.annotate_overrides) || utils_1.op(utils_1.Op.EQUALS, errorCode.name, LintNames.avoid_init_to_null) || utils_1.op(utils_1.Op.EQUALS, errorCode.name, LintNames.prefer_collection_literals) || utils_1.op(utils_1.Op.EQUALS, errorCode.name, LintNames.prefer_conditional_assignment) || utils_1.op(utils_1.Op.EQUALS, errorCode.name, LintNames.unnecessary_brace_in_string_interp) || utils_1.op(utils_1.Op.EQUALS, errorCode.name, LintNames.unnecessary_lambdas) || utils_1.op(utils_1.Op.EQUALS, errorCode.name, LintNames.unnecessary_this)));
};
var DartFixKind = /** @class */ (function () {
    function DartFixKind() {
    }
    Object.defineProperty(DartFixKind, "ADD_ASYNC", {
        get: function () {
            if (this.__$ADD_ASYNC === undefined) {
                this.__$ADD_ASYNC = new bare.createInstance(any, null, 'ADD_ASYNC', 50, "Add 'async' modifier");
            }
            return this.__$ADD_ASYNC;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "ADD_FIELD_FORMAL_PARAMETERS", {
        get: function () {
            if (this.__$ADD_FIELD_FORMAL_PARAMETERS === undefined) {
                this.__$ADD_FIELD_FORMAL_PARAMETERS = new bare.createInstance(any, null, 'ADD_FIELD_FORMAL_PARAMETERS', 30, "Add final field formal parameters");
            }
            return this.__$ADD_FIELD_FORMAL_PARAMETERS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "ADD_MISSING_PARAMETER_POSITIONAL", {
        get: function () {
            if (this.__$ADD_MISSING_PARAMETER_POSITIONAL === undefined) {
                this.__$ADD_MISSING_PARAMETER_POSITIONAL = new bare.createInstance(any, null, 'ADD_MISSING_PARAMETER_POSITIONAL', 31, "Add optional positional parameter");
            }
            return this.__$ADD_MISSING_PARAMETER_POSITIONAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "ADD_MISSING_PARAMETER_REQUIRED", {
        get: function () {
            if (this.__$ADD_MISSING_PARAMETER_REQUIRED === undefined) {
                this.__$ADD_MISSING_PARAMETER_REQUIRED = new bare.createInstance(any, null, 'ADD_MISSING_PARAMETER_REQUIRED', 30, "Add required parameter");
            }
            return this.__$ADD_MISSING_PARAMETER_REQUIRED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "ADD_MISSING_REQUIRED_ARGUMENT", {
        get: function () {
            if (this.__$ADD_MISSING_REQUIRED_ARGUMENT === undefined) {
                this.__$ADD_MISSING_REQUIRED_ARGUMENT = new bare.createInstance(any, null, 'ADD_MISSING_REQUIRED_ARGUMENT', 30, "Add required argument '{0}'");
            }
            return this.__$ADD_MISSING_REQUIRED_ARGUMENT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "ADD_NE_NULL", {
        get: function () {
            if (this.__$ADD_NE_NULL === undefined) {
                this.__$ADD_NE_NULL = new bare.createInstance(any, null, 'ADD_NE_NULL', 50, "Add != null");
            }
            return this.__$ADD_NE_NULL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "ADD_PACKAGE_DEPENDENCY", {
        get: function () {
            if (this.__$ADD_PACKAGE_DEPENDENCY === undefined) {
                this.__$ADD_PACKAGE_DEPENDENCY = new bare.createInstance(any, null, 'ADD_PACKAGE_DEPENDENCY', 50, "Add dependency on package '{0}'");
            }
            return this.__$ADD_PACKAGE_DEPENDENCY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "ADD_SUPER_CONSTRUCTOR_INVOCATION", {
        get: function () {
            if (this.__$ADD_SUPER_CONSTRUCTOR_INVOCATION === undefined) {
                this.__$ADD_SUPER_CONSTRUCTOR_INVOCATION = new bare.createInstance(any, null, 'ADD_SUPER_CONSTRUCTOR_INVOCATION', 50, "Add super constructor {0} invocation");
            }
            return this.__$ADD_SUPER_CONSTRUCTOR_INVOCATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CHANGE_TO", {
        get: function () {
            if (this.__$CHANGE_TO === undefined) {
                this.__$CHANGE_TO = new bare.createInstance(any, null, 'CHANGE_TO', 49, "Change to '{0}'");
            }
            return this.__$CHANGE_TO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CHANGE_TO_STATIC_ACCESS", {
        get: function () {
            if (this.__$CHANGE_TO_STATIC_ACCESS === undefined) {
                this.__$CHANGE_TO_STATIC_ACCESS = new bare.createInstance(any, null, 'CHANGE_TO_STATIC_ACCESS', 50, "Change access to static using '{0}'");
            }
            return this.__$CHANGE_TO_STATIC_ACCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CHANGE_TYPE_ANNOTATION", {
        get: function () {
            if (this.__$CHANGE_TYPE_ANNOTATION === undefined) {
                this.__$CHANGE_TYPE_ANNOTATION = new bare.createInstance(any, null, 'CHANGE_TYPE_ANNOTATION', 50, "Change '{0}' to '{1}' type annotation");
            }
            return this.__$CHANGE_TYPE_ANNOTATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CONVERT_FLUTTER_CHILD", {
        get: function () {
            if (this.__$CONVERT_FLUTTER_CHILD === undefined) {
                this.__$CONVERT_FLUTTER_CHILD = new bare.createInstance(any, null, 'CONVERT_FLUTTER_CHILD', 50, "Convert to children:");
            }
            return this.__$CONVERT_FLUTTER_CHILD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_CLASS", {
        get: function () {
            if (this.__$CREATE_CLASS === undefined) {
                this.__$CREATE_CLASS = new bare.createInstance(any, null, 'CREATE_CLASS', 50, "Create class '{0}'");
            }
            return this.__$CREATE_CLASS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_CONSTRUCTOR", {
        get: function () {
            if (this.__$CREATE_CONSTRUCTOR === undefined) {
                this.__$CREATE_CONSTRUCTOR = new bare.createInstance(any, null, 'CREATE_CONSTRUCTOR', 50, "Create constructor '{0}'");
            }
            return this.__$CREATE_CONSTRUCTOR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS", {
        get: function () {
            if (this.__$CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS === undefined) {
                this.__$CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS = new bare.createInstance(any, null, 'CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS', 50, "Create constructor for final fields");
            }
            return this.__$CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_CONSTRUCTOR_SUPER", {
        get: function () {
            if (this.__$CREATE_CONSTRUCTOR_SUPER === undefined) {
                this.__$CREATE_CONSTRUCTOR_SUPER = new bare.createInstance(any, null, 'CREATE_CONSTRUCTOR_SUPER', 50, "Create constructor to call {0}");
            }
            return this.__$CREATE_CONSTRUCTOR_SUPER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_FIELD", {
        get: function () {
            if (this.__$CREATE_FIELD === undefined) {
                this.__$CREATE_FIELD = new bare.createInstance(any, null, 'CREATE_FIELD', 51, "Create field '{0}'");
            }
            return this.__$CREATE_FIELD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_FILE", {
        get: function () {
            if (this.__$CREATE_FILE === undefined) {
                this.__$CREATE_FILE = new bare.createInstance(any, null, 'CREATE_FILE', 50, "Create file '{0}'");
            }
            return this.__$CREATE_FILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_FUNCTION", {
        get: function () {
            if (this.__$CREATE_FUNCTION === undefined) {
                this.__$CREATE_FUNCTION = new bare.createInstance(any, null, 'CREATE_FUNCTION', 51, "Create function '{0}'");
            }
            return this.__$CREATE_FUNCTION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_GETTER", {
        get: function () {
            if (this.__$CREATE_GETTER === undefined) {
                this.__$CREATE_GETTER = new bare.createInstance(any, null, 'CREATE_GETTER', 50, "Create getter '{0}'");
            }
            return this.__$CREATE_GETTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_LOCAL_VARIABLE", {
        get: function () {
            if (this.__$CREATE_LOCAL_VARIABLE === undefined) {
                this.__$CREATE_LOCAL_VARIABLE = new bare.createInstance(any, null, 'CREATE_LOCAL_VARIABLE', 50, "Create local variable '{0}'");
            }
            return this.__$CREATE_LOCAL_VARIABLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_METHOD", {
        get: function () {
            if (this.__$CREATE_METHOD === undefined) {
                this.__$CREATE_METHOD = new bare.createInstance(any, null, 'CREATE_METHOD', 50, "Create method '{0}'");
            }
            return this.__$CREATE_METHOD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_MISSING_METHOD_CALL", {
        get: function () {
            if (this.__$CREATE_MISSING_METHOD_CALL === undefined) {
                this.__$CREATE_MISSING_METHOD_CALL = new bare.createInstance(any, null, 'CREATE_MISSING_METHOD_CALL', 49, "Create method 'call'.");
            }
            return this.__$CREATE_MISSING_METHOD_CALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_MISSING_OVERRIDES", {
        get: function () {
            if (this.__$CREATE_MISSING_OVERRIDES === undefined) {
                this.__$CREATE_MISSING_OVERRIDES = new bare.createInstance(any, null, 'CREATE_MISSING_OVERRIDES', 49, "Create {0} missing override(s)");
            }
            return this.__$CREATE_MISSING_OVERRIDES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "CREATE_NO_SUCH_METHOD", {
        get: function () {
            if (this.__$CREATE_NO_SUCH_METHOD === undefined) {
                this.__$CREATE_NO_SUCH_METHOD = new bare.createInstance(any, null, 'CREATE_NO_SUCH_METHOD', 51, "Create 'noSuchMethod' method");
            }
            return this.__$CREATE_NO_SUCH_METHOD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "IMPORT_LIBRARY_PREFIX", {
        get: function () {
            if (this.__$IMPORT_LIBRARY_PREFIX === undefined) {
                this.__$IMPORT_LIBRARY_PREFIX = new bare.createInstance(any, null, 'IMPORT_LIBRARY_PREFIX', 51, "Use imported library '{0}' with prefix '{1}'");
            }
            return this.__$IMPORT_LIBRARY_PREFIX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "IMPORT_LIBRARY_PROJECT1", {
        get: function () {
            if (this.__$IMPORT_LIBRARY_PROJECT1 === undefined) {
                this.__$IMPORT_LIBRARY_PROJECT1 = new bare.createInstance(any, null, 'IMPORT_LIBRARY_PROJECT1', 47, "Import library '{0}'");
            }
            return this.__$IMPORT_LIBRARY_PROJECT1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "IMPORT_LIBRARY_PROJECT2", {
        get: function () {
            if (this.__$IMPORT_LIBRARY_PROJECT2 === undefined) {
                this.__$IMPORT_LIBRARY_PROJECT2 = new bare.createInstance(any, null, 'IMPORT_LIBRARY_PROJECT2', 48, "Import library '{0}'");
            }
            return this.__$IMPORT_LIBRARY_PROJECT2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "IMPORT_LIBRARY_PROJECT3", {
        get: function () {
            if (this.__$IMPORT_LIBRARY_PROJECT3 === undefined) {
                this.__$IMPORT_LIBRARY_PROJECT3 = new bare.createInstance(any, null, 'IMPORT_LIBRARY_PROJECT3', 49, "Import library '{0}'");
            }
            return this.__$IMPORT_LIBRARY_PROJECT3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "IMPORT_LIBRARY_SDK", {
        get: function () {
            if (this.__$IMPORT_LIBRARY_SDK === undefined) {
                this.__$IMPORT_LIBRARY_SDK = new bare.createInstance(any, null, 'IMPORT_LIBRARY_SDK', 46, "Import library '{0}'");
            }
            return this.__$IMPORT_LIBRARY_SDK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "IMPORT_LIBRARY_SHOW", {
        get: function () {
            if (this.__$IMPORT_LIBRARY_SHOW === undefined) {
                this.__$IMPORT_LIBRARY_SHOW = new bare.createInstance(any, null, 'IMPORT_LIBRARY_SHOW', 45, "Update library '{0}' import");
            }
            return this.__$IMPORT_LIBRARY_SHOW;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "INSERT_SEMICOLON", {
        get: function () {
            if (this.__$INSERT_SEMICOLON === undefined) {
                this.__$INSERT_SEMICOLON = new bare.createInstance(any, null, 'INSERT_SEMICOLON', 50, "Insert ';'");
            }
            return this.__$INSERT_SEMICOLON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "LINT_ADD_OVERRIDE", {
        get: function () {
            if (this.__$LINT_ADD_OVERRIDE === undefined) {
                this.__$LINT_ADD_OVERRIDE = new bare.createInstance(any, null, 'LINT_ADD_OVERRIDE', 50, "Add '@override' annotation");
            }
            return this.__$LINT_ADD_OVERRIDE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "LINT_REMOVE_INTERPOLATION_BRACES", {
        get: function () {
            if (this.__$LINT_REMOVE_INTERPOLATION_BRACES === undefined) {
                this.__$LINT_REMOVE_INTERPOLATION_BRACES = new bare.createInstance(any, null, 'LINT_REMOVE_INTERPOLATION_BRACES', 50, 'Remove unnecessary interpolation braces');
            }
            return this.__$LINT_REMOVE_INTERPOLATION_BRACES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "MAKE_CLASS_ABSTRACT", {
        get: function () {
            if (this.__$MAKE_CLASS_ABSTRACT === undefined) {
                this.__$MAKE_CLASS_ABSTRACT = new bare.createInstance(any, null, 'MAKE_CLASS_ABSTRACT', 50, "Make class '{0}' abstract");
            }
            return this.__$MAKE_CLASS_ABSTRACT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_DEAD_CODE", {
        get: function () {
            if (this.__$REMOVE_DEAD_CODE === undefined) {
                this.__$REMOVE_DEAD_CODE = new bare.createInstance(any, null, 'REMOVE_DEAD_CODE', 50, "Remove dead code");
            }
            return this.__$REMOVE_DEAD_CODE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "MAKE_FIELD_NOT_FINAL", {
        get: function () {
            if (this.__$MAKE_FIELD_NOT_FINAL === undefined) {
                this.__$MAKE_FIELD_NOT_FINAL = new bare.createInstance(any, null, 'MAKE_FIELD_NOT_FINAL', 50, "Make field '{0}' not final");
            }
            return this.__$MAKE_FIELD_NOT_FINAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_AWAIT", {
        get: function () {
            if (this.__$REMOVE_AWAIT === undefined) {
                this.__$REMOVE_AWAIT = new bare.createInstance(any, null, 'REMOVE_AWAIT', 50, "Remove await");
            }
            return this.__$REMOVE_AWAIT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_EMPTY_STATEMENT", {
        get: function () {
            if (this.__$REMOVE_EMPTY_STATEMENT === undefined) {
                this.__$REMOVE_EMPTY_STATEMENT = new bare.createInstance(any, null, 'REMOVE_EMPTY_STATEMENT', 50, "Remove empty statement");
            }
            return this.__$REMOVE_EMPTY_STATEMENT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_INITIALIZER", {
        get: function () {
            if (this.__$REMOVE_INITIALIZER === undefined) {
                this.__$REMOVE_INITIALIZER = new bare.createInstance(any, null, 'REMOVE_INITIALIZER', 50, "Remove initializer");
            }
            return this.__$REMOVE_INITIALIZER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_METHOD_DECLARATION", {
        get: function () {
            if (this.__$REMOVE_METHOD_DECLARATION === undefined) {
                this.__$REMOVE_METHOD_DECLARATION = new bare.createInstance(any, null, 'REMOVE_METHOD_DECLARATION', 50, 'Remove method declaration');
            }
            return this.__$REMOVE_METHOD_DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_PARAMETERS_IN_GETTER_DECLARATION", {
        get: function () {
            if (this.__$REMOVE_PARAMETERS_IN_GETTER_DECLARATION === undefined) {
                this.__$REMOVE_PARAMETERS_IN_GETTER_DECLARATION = new bare.createInstance(any, null, 'REMOVE_PARAMETERS_IN_GETTER_DECLARATION', 50, "Remove parameters in getter declaration");
            }
            return this.__$REMOVE_PARAMETERS_IN_GETTER_DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_PARENTHESIS_IN_GETTER_INVOCATION", {
        get: function () {
            if (this.__$REMOVE_PARENTHESIS_IN_GETTER_INVOCATION === undefined) {
                this.__$REMOVE_PARENTHESIS_IN_GETTER_INVOCATION = new bare.createInstance(any, null, 'REMOVE_PARENTHESIS_IN_GETTER_INVOCATION', 50, "Remove parentheses in getter invocation");
            }
            return this.__$REMOVE_PARENTHESIS_IN_GETTER_INVOCATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_THIS_EXPRESSION", {
        get: function () {
            if (this.__$REMOVE_THIS_EXPRESSION === undefined) {
                this.__$REMOVE_THIS_EXPRESSION = new bare.createInstance(any, null, 'REMOVE_THIS_EXPRESSION', 50, "Remove this expression");
            }
            return this.__$REMOVE_THIS_EXPRESSION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_TYPE_NAME", {
        get: function () {
            if (this.__$REMOVE_TYPE_NAME === undefined) {
                this.__$REMOVE_TYPE_NAME = new bare.createInstance(any, null, 'REMOVE_TYPE_NAME', 50, "Remove type name");
            }
            return this.__$REMOVE_TYPE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_UNNECESSARY_CAST", {
        get: function () {
            if (this.__$REMOVE_UNNECESSARY_CAST === undefined) {
                this.__$REMOVE_UNNECESSARY_CAST = new bare.createInstance(any, null, 'REMOVE_UNNECESSARY_CAST', 50, "Remove unnecessary cast");
            }
            return this.__$REMOVE_UNNECESSARY_CAST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_UNUSED_CATCH_CLAUSE", {
        get: function () {
            if (this.__$REMOVE_UNUSED_CATCH_CLAUSE === undefined) {
                this.__$REMOVE_UNUSED_CATCH_CLAUSE = new bare.createInstance(any, null, 'REMOVE_UNUSED_CATCH', 50, "Remove unused 'catch' clause");
            }
            return this.__$REMOVE_UNUSED_CATCH_CLAUSE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_UNUSED_CATCH_STACK", {
        get: function () {
            if (this.__$REMOVE_UNUSED_CATCH_STACK === undefined) {
                this.__$REMOVE_UNUSED_CATCH_STACK = new bare.createInstance(any, null, 'REMOVE_UNUSED_CATCH_STACK', 50, "Remove unused stack trace variable");
            }
            return this.__$REMOVE_UNUSED_CATCH_STACK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REMOVE_UNUSED_IMPORT", {
        get: function () {
            if (this.__$REMOVE_UNUSED_IMPORT === undefined) {
                this.__$REMOVE_UNUSED_IMPORT = new bare.createInstance(any, null, 'REMOVE_UNUSED_IMPORT', 50, "Remove unused import");
            }
            return this.__$REMOVE_UNUSED_IMPORT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_BOOLEAN_WITH_BOOL", {
        get: function () {
            if (this.__$REPLACE_BOOLEAN_WITH_BOOL === undefined) {
                this.__$REPLACE_BOOLEAN_WITH_BOOL = new bare.createInstance(any, null, 'REPLACE_BOOLEAN_WITH_BOOL', 50, "Replace 'boolean' with 'bool'");
            }
            return this.__$REPLACE_BOOLEAN_WITH_BOOL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_VAR_WITH_DYNAMIC", {
        get: function () {
            if (this.__$REPLACE_VAR_WITH_DYNAMIC === undefined) {
                this.__$REPLACE_VAR_WITH_DYNAMIC = new bare.createInstance(any, null, 'REPLACE_VAR_WITH_DYNAMIC', 50, "Replace 'var' with 'dynamic'");
            }
            return this.__$REPLACE_VAR_WITH_DYNAMIC;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_RETURN_TYPE_FUTURE", {
        get: function () {
            if (this.__$REPLACE_RETURN_TYPE_FUTURE === undefined) {
                this.__$REPLACE_RETURN_TYPE_FUTURE = new bare.createInstance(any, null, 'REPLACE_RETURN_TYPE_FUTURE', 50, "Return 'Future' from 'async' function");
            }
            return this.__$REPLACE_RETURN_TYPE_FUTURE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_WITH_BRACKETS", {
        get: function () {
            if (this.__$REPLACE_WITH_BRACKETS === undefined) {
                this.__$REPLACE_WITH_BRACKETS = new bare.createInstance(any, null, 'REPLACE_WITH_BRACKETS', 50, "Replace with { }");
            }
            return this.__$REPLACE_WITH_BRACKETS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_WITH_CONDITIONAL_ASSIGNMENT", {
        get: function () {
            if (this.__$REPLACE_WITH_CONDITIONAL_ASSIGNMENT === undefined) {
                this.__$REPLACE_WITH_CONDITIONAL_ASSIGNMENT = new bare.createInstance(any, null, 'REPLACE_WITH_CONDITIONAL_ASSIGNMENT', 50, 'Replace with ??=');
            }
            return this.__$REPLACE_WITH_CONDITIONAL_ASSIGNMENT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_WITH_IDENTIFIER", {
        get: function () {
            if (this.__$REPLACE_WITH_IDENTIFIER === undefined) {
                this.__$REPLACE_WITH_IDENTIFIER = new bare.createInstance(any, null, 'REPLACE_WITH_IDENTIFIER', 50, "Replace with identifier");
            }
            return this.__$REPLACE_WITH_IDENTIFIER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_WITH_LITERAL", {
        get: function () {
            if (this.__$REPLACE_WITH_LITERAL === undefined) {
                this.__$REPLACE_WITH_LITERAL = new bare.createInstance(any, null, 'REPLACE_WITH_LITERAL', 50, 'Replace with literal');
            }
            return this.__$REPLACE_WITH_LITERAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_WITH_NULL_AWARE", {
        get: function () {
            if (this.__$REPLACE_WITH_NULL_AWARE === undefined) {
                this.__$REPLACE_WITH_NULL_AWARE = new bare.createInstance(any, null, 'REPLACE_WITH_NULL_AWARE', 50, "Replace the '.' with a '?.' in the invocation");
            }
            return this.__$REPLACE_WITH_NULL_AWARE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "REPLACE_WITH_TEAR_OFF", {
        get: function () {
            if (this.__$REPLACE_WITH_TEAR_OFF === undefined) {
                this.__$REPLACE_WITH_TEAR_OFF = new bare.createInstance(any, null, 'REPLACE_WITH_TEAR_OFF', 50, "Replace function literal with tear-off");
            }
            return this.__$REPLACE_WITH_TEAR_OFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "USE_CONST", {
        get: function () {
            if (this.__$USE_CONST === undefined) {
                this.__$USE_CONST = new bare.createInstance(any, null, 'USE_CONST', 50, "Change to constant");
            }
            return this.__$USE_CONST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "USE_EFFECTIVE_INTEGER_DIVISION", {
        get: function () {
            if (this.__$USE_EFFECTIVE_INTEGER_DIVISION === undefined) {
                this.__$USE_EFFECTIVE_INTEGER_DIVISION = new bare.createInstance(any, null, 'USE_EFFECTIVE_INTEGER_DIVISION', 50, "Use effective integer division ~/");
            }
            return this.__$USE_EFFECTIVE_INTEGER_DIVISION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "USE_EQ_EQ_NULL", {
        get: function () {
            if (this.__$USE_EQ_EQ_NULL === undefined) {
                this.__$USE_EQ_EQ_NULL = new bare.createInstance(any, null, 'USE_EQ_EQ_NULL', 50, "Use == null instead of 'is Null'");
            }
            return this.__$USE_EQ_EQ_NULL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartFixKind, "USE_NOT_EQ_NULL", {
        get: function () {
            if (this.__$USE_NOT_EQ_NULL === undefined) {
                this.__$USE_NOT_EQ_NULL = new bare.createInstance(any, null, 'USE_NOT_EQ_NULL', 50, "Use != null instead of 'is! Null'");
            }
            return this.__$USE_NOT_EQ_NULL;
        },
        enumerable: true,
        configurable: true
    });
    DartFixKind.prototype.DartFixKind = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], DartFixKind.prototype, "DartFixKind", null);
    DartFixKind = __decorate([
        utils_1.DartClass
    ], DartFixKind);
    return DartFixKind;
}());
exports.DartFixKind = DartFixKind;
var FixContextImpl = /** @class */ (function () {
    function FixContextImpl(resourceProvider, analysisDriver, error) {
    }
    FixContextImpl.prototype.FixContextImpl = function (resourceProvider, analysisDriver, error) {
        this.resourceProvider = resourceProvider;
        this.analysisDriver = analysisDriver;
        this.error = error;
    };
    FixContextImpl.prototype.from = function (other) {
        this.resourceProvider = other.resourceProvider;
        this.analysisDriver = other.analysisDriver;
        this.error = other.error;
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], FixContextImpl.prototype, "resourceProvider", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], FixContextImpl.prototype, "analysisDriver", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], FixContextImpl.prototype, "error", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], FixContextImpl.prototype, "FixContextImpl", null);
    __decorate([
        utils_1.namedConstructor
    ], FixContextImpl.prototype, "from", null);
    FixContextImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], FixContextImpl);
    return FixContextImpl;
}());
exports.FixContextImpl = FixContextImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=fix.js.map