/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/error/error.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var errorCodeByUniqueName : (uniqueName : string) => any = (uniqueName : string) : any =>  {
    if (op(Op.EQUALS,properties._uniqueNameToCodeMap,null)) {
        properties._uniqueNameToCodeMap = new core.DartHashMap<string,any>();
        for(let errorCode of properties.errorCodeValues) {
            op(Op.INDEX_ASSIGN,properties._uniqueNameToCodeMap,errorCode.uniqueName,errorCode);
        }
    }
    return op(Op.INDEX,properties._uniqueNameToCodeMap,uniqueName);
};
export namespace AnalysisError {
    export type Constructors = 'AnalysisError' | 'forValues';
    export type Interface = Omit<AnalysisError, Constructors>;
}
@DartClass
export class AnalysisError {
    private static __$NO_ERRORS : core.DartList<AnalysisError>;
    static get NO_ERRORS() : core.DartList<AnalysisError> { 
        if (this.__$NO_ERRORS===undefined) {
            this.__$NO_ERRORS = new core.DartList.literal<AnalysisError>();
        }
        return this.__$NO_ERRORS;
    }

    private static __$FILE_COMPARATOR : <T>(a : AnalysisError,b : AnalysisError) => number;
    static get FILE_COMPARATOR() : <T>(a : AnalysisError,b : AnalysisError) => number { 
        if (this.__$FILE_COMPARATOR===undefined) {
            this.__$FILE_COMPARATOR = (o1 : AnalysisError,o2 : AnalysisError) =>  {
                return o1.source.shortName.compareTo(o2.source.shortName);
            };
        }
        return this.__$FILE_COMPARATOR;
    }
    static set FILE_COMPARATOR(__$value : <T>(a : AnalysisError,b : AnalysisError) => number)  { 
        this.__$FILE_COMPARATOR = __$value;
    }

    private static __$ERROR_CODE_COMPARATOR : <T>(a : AnalysisError,b : AnalysisError) => number;
    static get ERROR_CODE_COMPARATOR() : <T>(a : AnalysisError,b : AnalysisError) => number { 
        if (this.__$ERROR_CODE_COMPARATOR===undefined) {
            this.__$ERROR_CODE_COMPARATOR = (o1 : AnalysisError,o2 : AnalysisError) =>  {
                let errorCode1 : any = o1.errorCode;
                let errorCode2 : any = o2.errorCode;
                let errorSeverity1 : any = errorCode1.errorSeverity;
                let errorSeverity2 : any = errorCode2.errorSeverity;
                if (op(Op.EQUALS,errorSeverity1,errorSeverity2)) {
                    let errorType1 : any = errorCode1.type;
                    let errorType2 : any = errorCode2.type;
                    return errorType1.compareTo(errorType2);
                }else {
                    return errorSeverity2.compareTo(errorSeverity1);
                }
            };
        }
        return this.__$ERROR_CODE_COMPARATOR;
    }
    static set ERROR_CODE_COMPARATOR(__$value : <T>(a : AnalysisError,b : AnalysisError) => number)  { 
        this.__$ERROR_CODE_COMPARATOR = __$value;
    }

    errorCode : any;

    _message : string;

    _correction : string;

    source : any;

    offset : number;

    length : number;

    isStaticOnly : boolean;

    constructor(source : any,offset : number,length : number,errorCode : any,arguments? : core.DartList<core.DartObject>) {
    }
    @defaultConstructor
    AnalysisError(source : any,offset : number,length : number,errorCode : any,arguments? : core.DartList<core.DartObject>) {
        this.offset = 0;
        this.length = 0;
        this.isStaticOnly = false;
        this.source = source;
        this.offset = offset;
        this.length = length;
        this.errorCode = errorCode;
        this._message = formatList(this.errorCode.message,arguments);
        let correctionTemplate : string = this.errorCode.correction;
        if (correctionTemplate != null) {
            this._correction = formatList(correctionTemplate,arguments);
        }
    }
    @namedConstructor
    forValues(source : any,offset : number,length : number,errorCode : any,_message : string,_correction : string) {
        this.offset = 0;
        this.length = 0;
        this.isStaticOnly = false;
        this.source = source;
        this.offset = offset;
        this.length = length;
        this.errorCode = errorCode;
        this._message = _message;
        this._correction = _correction;
    }
    static forValues : new(source : any,offset : number,length : number,errorCode : any,_message : string,_correction : string) => AnalysisError;

    get correction() : string {
        return this._correction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hashCode : number = this.offset;
        hashCode ^= (this._message != null) ? new core.DartString(this._message).hashCode : 0;
        hashCode ^= (this.source != null) ? this.source.hashCode : 0;
        return hashCode;
    }
    get message() : string {
        return this._message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(other,this)) {
            return true;
        }
        if (is(other, AnalysisError)) {
            if (!core.identical(this.errorCode,other.errorCode)) {
                return false;
            }
            if (this.offset != other.offset || this.length != other.length) {
                return false;
            }
            if (this.isStaticOnly != other.isStaticOnly) {
                return false;
            }
            if (this._message != other._message) {
                return false;
            }
            if (this.source != other.source) {
                return false;
            }
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write((this.source != null) ? this.source.fullName : "<unknown source>");
        buffer.write("(");
        buffer.write(this.offset);
        buffer.write("..");
        buffer.write(this.offset + this.length - 1);
        buffer.write("): ");
        buffer.write(this._message);
        return buffer.toString();
    }
    static mergeLists(errorLists : core.DartList<core.DartList<AnalysisError>>) : core.DartList<AnalysisError> {
        let errors : core.DartSet<AnalysisError> = new core.DartHashSet<AnalysisError>();
        for(let errorList of errorLists) {
            errors.addAll(errorList);
        }
        return errors.toList();
    }
}

export class properties {
    private static __$errorCodeValues : core.DartList<any>;
    static get errorCodeValues() : core.DartList<any> { 
        if (this.__$errorCodeValues===undefined) {
            this.__$errorCodeValues = new core.DartList.literal(AnalysisOptionsErrorCode.PARSE_ERROR,AnalysisOptionsWarningCode.UNRECOGNIZED_ERROR_CODE,AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUE,AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES,AnalysisOptionsWarningCode.UNSUPPORTED_VALUE,CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH,CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,CheckedModeCompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,CheckedModeCompileTimeErrorCode.CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE,CheckedModeCompileTimeErrorCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE,CheckedModeCompileTimeErrorCode.MAP_KEY_TYPE_NOT_ASSIGNABLE,CheckedModeCompileTimeErrorCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE,CheckedModeCompileTimeErrorCode.VARIABLE_TYPE_MISMATCH,CompileTimeErrorCode.ACCESS_PRIVATE_ENUM_FIELD,CompileTimeErrorCode.AMBIGUOUS_EXPORT,CompileTimeErrorCode.ANNOTATION_WITH_NON_CLASS,CompileTimeErrorCode.ARGUMENT_DEFINITION_TEST_NON_PARAMETER,CompileTimeErrorCode.ASYNC_FOR_IN_WRONG_CONTEXT,CompileTimeErrorCode.AWAIT_IN_WRONG_CONTEXT,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_PREFIX_NAME,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE_NAME,CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME,CompileTimeErrorCode.CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS,CompileTimeErrorCode.CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD,CompileTimeErrorCode.CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD,CompileTimeErrorCode.CONFLICTING_GETTER_AND_METHOD,CompileTimeErrorCode.CONFLICTING_METHOD_AND_GETTER,CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_CLASS,CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_MEMBER,CompileTimeErrorCode.CONST_CONSTRUCTOR_THROWS_EXCEPTION,CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST,CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_MIXIN,CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER,CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD,CompileTimeErrorCode.CONST_DEFERRED_CLASS,CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,CompileTimeErrorCode.CONST_EVAL_THROWS_IDBZE,CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL,CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL_NUM_STRING,CompileTimeErrorCode.CONST_EVAL_TYPE_INT,CompileTimeErrorCode.CONST_EVAL_TYPE_NUM,CompileTimeErrorCode.CONST_FORMAL_PARAMETER,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.CONST_INSTANCE_FIELD,CompileTimeErrorCode.CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS,CompileTimeErrorCode.CONST_NOT_INITIALIZED,CompileTimeErrorCode.CONST_WITH_INVALID_TYPE_PARAMETERS,CompileTimeErrorCode.CONST_WITH_NON_CONST,CompileTimeErrorCode.CONST_WITH_NON_CONSTANT_ARGUMENT,CompileTimeErrorCode.CONST_WITH_NON_TYPE,CompileTimeErrorCode.CONST_WITH_TYPE_PARAMETERS,CompileTimeErrorCode.CONST_WITH_UNDEFINED_CONSTRUCTOR,CompileTimeErrorCode.CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT,CompileTimeErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER,CompileTimeErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS,CompileTimeErrorCode.DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR,CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_DEFAULT,CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_NAME,CompileTimeErrorCode.DUPLICATE_DEFINITION,CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE,CompileTimeErrorCode.DUPLICATE_NAMED_ARGUMENT,CompileTimeErrorCode.DUPLICATE_PART,CompileTimeErrorCode.EXPORT_INTERNAL_LIBRARY,CompileTimeErrorCode.EXPORT_OF_NON_LIBRARY,CompileTimeErrorCode.EXTENDS_DEFERRED_CLASS,CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS,CompileTimeErrorCode.EXTENDS_ENUM,CompileTimeErrorCode.EXTENDS_NON_CLASS,CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS,CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED,CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS,CompileTimeErrorCode.FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER,CompileTimeErrorCode.FIELD_INITIALIZER_FACTORY_CONSTRUCTOR,CompileTimeErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR,CompileTimeErrorCode.FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR,CompileTimeErrorCode.FINAL_INITIALIZED_MULTIPLE_TIMES,CompileTimeErrorCode.GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED,CompileTimeErrorCode.GETTER_AND_METHOD_WITH_SAME_NAME,CompileTimeErrorCode.IMPLEMENTS_DEFERRED_CLASS,CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS,CompileTimeErrorCode.IMPLEMENTS_DYNAMIC,CompileTimeErrorCode.IMPLEMENTS_ENUM,CompileTimeErrorCode.IMPLEMENTS_NON_CLASS,CompileTimeErrorCode.IMPLEMENTS_REPEATED,CompileTimeErrorCode.IMPLEMENTS_SUPER_CLASS,CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER,CompileTimeErrorCode.IMPORT_INTERNAL_LIBRARY,CompileTimeErrorCode.IMPORT_OF_NON_LIBRARY,CompileTimeErrorCode.INCONSISTENT_CASE_EXPRESSION_TYPES,CompileTimeErrorCode.INITIALIZER_FOR_NON_EXISTENT_FIELD,CompileTimeErrorCode.INITIALIZER_FOR_STATIC_FIELD,CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD,CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_STATIC_FIELD,CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_FACTORY,CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_STATIC,CompileTimeErrorCode.INSTANTIATE_ENUM,CompileTimeErrorCode.INVALID_ANNOTATION,CompileTimeErrorCode.INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.INVALID_CONSTANT,CompileTimeErrorCode.INVALID_CONSTRUCTOR_NAME,CompileTimeErrorCode.INVALID_FACTORY_NAME_NOT_A_CLASS,CompileTimeErrorCode.INVALID_IDENTIFIER_IN_ASYNC,CompileTimeErrorCode.INVALID_MODIFIER_ON_CONSTRUCTOR,CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER,CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS,CompileTimeErrorCode.INVALID_TYPE_ARGUMENT_IN_CONST_LIST,CompileTimeErrorCode.INVALID_TYPE_ARGUMENT_IN_CONST_MAP,CompileTimeErrorCode.INVALID_URI,CompileTimeErrorCode.INVALID_USE_OF_COVARIANT,CompileTimeErrorCode.LABEL_IN_OUTER_SCOPE,CompileTimeErrorCode.LABEL_UNDEFINED,CompileTimeErrorCode.MEMBER_WITH_CLASS_NAME,CompileTimeErrorCode.METHOD_AND_GETTER_WITH_SAME_NAME,CompileTimeErrorCode.MISSING_CONST_IN_LIST_LITERAL,CompileTimeErrorCode.MISSING_CONST_IN_MAP_LITERAL,CompileTimeErrorCode.MIXIN_DECLARES_CONSTRUCTOR,CompileTimeErrorCode.MIXIN_DEFERRED_CLASS,CompileTimeErrorCode.MIXIN_HAS_NO_CONSTRUCTORS,CompileTimeErrorCode.MIXIN_INHERITS_FROM_NOT_OBJECT,CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS,CompileTimeErrorCode.MIXIN_OF_ENUM,CompileTimeErrorCode.MIXIN_OF_NON_CLASS,CompileTimeErrorCode.MIXIN_REFERENCES_SUPER,CompileTimeErrorCode.MIXIN_WITH_NON_CLASS_SUPERCLASS,CompileTimeErrorCode.MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS,CompileTimeErrorCode.MULTIPLE_SUPER_INITIALIZERS,CompileTimeErrorCode.NON_CONSTANT_ANNOTATION_CONSTRUCTOR,CompileTimeErrorCode.NON_CONSTANT_CASE_EXPRESSION,CompileTimeErrorCode.NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE,CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.NON_CONSTANT_LIST_ELEMENT,CompileTimeErrorCode.NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.NON_CONSTANT_MAP_KEY,CompileTimeErrorCode.NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.NON_CONSTANT_MAP_VALUE,CompileTimeErrorCode.NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER,CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY,CompileTimeErrorCode.NON_CONST_MAP_AS_EXPRESSION_STATEMENT,CompileTimeErrorCode.NON_GENERATIVE_CONSTRUCTOR,CompileTimeErrorCode.NOT_ENOUGH_REQUIRED_ARGUMENTS,CompileTimeErrorCode.NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT,CompileTimeErrorCode.OBJECT_CANNOT_EXTEND_ANOTHER_CLASS,CompileTimeErrorCode.OPTIONAL_PARAMETER_IN_OPERATOR,CompileTimeErrorCode.PART_OF_NON_PART,CompileTimeErrorCode.PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER,CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT,CompileTimeErrorCode.PRIVATE_COLLISION_IN_MIXIN_APPLICATION,CompileTimeErrorCode.PRIVATE_OPTIONAL_PARAMETER,CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT,CompileTimeErrorCode.RECURSIVE_CONSTRUCTOR_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH,CompileTimeErrorCode.REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR,CompileTimeErrorCode.REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR,CompileTimeErrorCode.REDIRECT_TO_MISSING_CONSTRUCTOR,CompileTimeErrorCode.REDIRECT_TO_NON_CLASS,CompileTimeErrorCode.REDIRECT_TO_NON_CONST_CONSTRUCTOR,CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION,CompileTimeErrorCode.RETHROW_OUTSIDE_CATCH,CompileTimeErrorCode.RETURN_IN_GENERATIVE_CONSTRUCTOR,CompileTimeErrorCode.RETURN_IN_GENERATOR,CompileTimeErrorCode.SHARED_DEFERRED_PREFIX,CompileTimeErrorCode.SUPER_INITIALIZER_IN_OBJECT,CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT,CompileTimeErrorCode.SUPER_IN_REDIRECTING_CONSTRUCTOR,CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF,CompileTimeErrorCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS,CompileTimeErrorCode.UNDEFINED_CLASS,CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER,CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT,CompileTimeErrorCode.UNDEFINED_NAMED_PARAMETER,CompileTimeErrorCode.URI_DOES_NOT_EXIST,CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED,CompileTimeErrorCode.URI_WITH_INTERPOLATION,CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR,CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS,CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER,CompileTimeErrorCode.YIELD_EACH_IN_NON_GENERATOR,CompileTimeErrorCode.YIELD_IN_NON_GENERATOR,HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE,HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,HintCode.CAN_BE_NULL_AFTER_NULL_AWARE,HintCode.DEAD_CODE,HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH,HintCode.DEAD_CODE_ON_CATCH_SUBTYPE,HintCode.DEPRECATED_MEMBER_USE,HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION,HintCode.DEPRECATED_EXTENDS_FUNCTION,HintCode.DEPRECATED_MIXIN_FUNCTION,HintCode.DIVISION_OPTIMIZATION,HintCode.DUPLICATE_IMPORT,HintCode.FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE,HintCode.FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE,HintCode.IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION,HintCode.INVALID_ASSIGNMENT,HintCode.INVALID_FACTORY_ANNOTATION,HintCode.INVALID_FACTORY_METHOD_DECL,HintCode.INVALID_FACTORY_METHOD_IMPL,HintCode.INVALID_IMMUTABLE_ANNOTATION,HintCode.INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS,HintCode.INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND,HintCode.INVALID_USE_OF_PROTECTED_MEMBER,HintCode.IS_DOUBLE,HintCode.IS_INT,HintCode.IS_NOT_DOUBLE,HintCode.IS_NOT_INT,HintCode.MISSING_JS_LIB_ANNOTATION,HintCode.MISSING_REQUIRED_PARAM,HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS,HintCode.MISSING_RETURN,HintCode.MUST_BE_IMMUTABLE,HintCode.MUST_CALL_SUPER,HintCode.NULL_AWARE_IN_CONDITION,HintCode.OVERRIDE_EQUALS_BUT_NOT_HASH_CODE,HintCode.OVERRIDE_ON_NON_OVERRIDING_FIELD,HintCode.OVERRIDE_ON_NON_OVERRIDING_GETTER,HintCode.OVERRIDE_ON_NON_OVERRIDING_METHOD,HintCode.OVERRIDE_ON_NON_OVERRIDING_SETTER,HintCode.PACKAGE_IMPORT_CONTAINS_DOT_DOT,HintCode.TYPE_CHECK_IS_NOT_NULL,HintCode.TYPE_CHECK_IS_NULL,HintCode.UNDEFINED_GETTER,HintCode.UNDEFINED_HIDDEN_NAME,HintCode.UNDEFINED_METHOD,HintCode.UNDEFINED_OPERATOR,HintCode.UNDEFINED_SETTER,HintCode.UNDEFINED_SHOWN_NAME,HintCode.UNNECESSARY_CAST,HintCode.UNNECESSARY_NO_SUCH_METHOD,HintCode.UNNECESSARY_TYPE_CHECK_FALSE,HintCode.UNNECESSARY_TYPE_CHECK_TRUE,HintCode.UNUSED_CATCH_CLAUSE,HintCode.UNUSED_CATCH_STACK,HintCode.UNUSED_ELEMENT,HintCode.UNUSED_FIELD,HintCode.UNUSED_IMPORT,HintCode.UNUSED_LOCAL_VARIABLE,HintCode.UNUSED_SHOWN_NAME,HintCode.USE_OF_VOID_RESULT,HintCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD,HtmlErrorCode.PARSE_ERROR,HtmlWarningCode.INVALID_URI,HtmlWarningCode.URI_DOES_NOT_EXIST,ParserErrorCode.ABSTRACT_CLASS_MEMBER,ParserErrorCode.ABSTRACT_ENUM,ParserErrorCode.ABSTRACT_STATIC_METHOD,ParserErrorCode.ABSTRACT_TOP_LEVEL_FUNCTION,ParserErrorCode.ABSTRACT_TOP_LEVEL_VARIABLE,ParserErrorCode.ABSTRACT_TYPEDEF,ParserErrorCode.ANNOTATION_ON_ENUM_CONSTANT,ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER,ParserErrorCode.BREAK_OUTSIDE_OF_LOOP,ParserErrorCode.CLASS_IN_CLASS,ParserErrorCode.COLON_IN_PLACE_OF_IN,ParserErrorCode.CONSTRUCTOR_WITH_RETURN_TYPE,ParserErrorCode.CONST_AND_COVARIANT,ParserErrorCode.CONST_AND_FINAL,ParserErrorCode.CONST_AND_VAR,ParserErrorCode.CONST_CLASS,ParserErrorCode.CONST_CONSTRUCTOR_WITH_BODY,ParserErrorCode.CONST_ENUM,ParserErrorCode.CONST_FACTORY,ParserErrorCode.CONST_METHOD,ParserErrorCode.CONST_TYPEDEF,ParserErrorCode.CONTINUE_OUTSIDE_OF_LOOP,ParserErrorCode.CONTINUE_WITHOUT_LABEL_IN_CASE,ParserErrorCode.COVARIANT_AFTER_VAR,ParserErrorCode.COVARIANT_AND_STATIC,ParserErrorCode.COVARIANT_CONSTRUCTOR,ParserErrorCode.COVARIANT_MEMBER,ParserErrorCode.COVARIANT_TOP_LEVEL_DECLARATION,ParserErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE,ParserErrorCode.DIRECTIVE_AFTER_DECLARATION,ParserErrorCode.DUPLICATED_MODIFIER,ParserErrorCode.DUPLICATE_LABEL_IN_SWITCH_STATEMENT,ParserErrorCode.EMPTY_ENUM_BODY,ParserErrorCode.ENUM_IN_CLASS,ParserErrorCode.EQUALITY_CANNOT_BE_EQUALITY_OPERAND,ParserErrorCode.EXPECTED_CASE_OR_DEFAULT,ParserErrorCode.EXPECTED_CLASS_MEMBER,ParserErrorCode.EXPECTED_EXECUTABLE,ParserErrorCode.EXPECTED_LIST_OR_MAP_LITERAL,ParserErrorCode.EXPECTED_STRING_LITERAL,ParserErrorCode.EXPECTED_TOKEN,ParserErrorCode.EXPECTED_TYPE_NAME,ParserErrorCode.EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE,ParserErrorCode.EXTERNAL_AFTER_CONST,ParserErrorCode.EXTERNAL_AFTER_FACTORY,ParserErrorCode.EXTERNAL_AFTER_STATIC,ParserErrorCode.EXTERNAL_CLASS,ParserErrorCode.EXTERNAL_CONSTRUCTOR_WITH_BODY,ParserErrorCode.EXTERNAL_ENUM,ParserErrorCode.EXTERNAL_FIELD,ParserErrorCode.EXTERNAL_GETTER_WITH_BODY,ParserErrorCode.EXTERNAL_METHOD_WITH_BODY,ParserErrorCode.EXTERNAL_OPERATOR_WITH_BODY,ParserErrorCode.EXTERNAL_SETTER_WITH_BODY,ParserErrorCode.EXTERNAL_TYPEDEF,ParserErrorCode.FACTORY_TOP_LEVEL_DECLARATION,ParserErrorCode.FACTORY_WITHOUT_BODY,ParserErrorCode.FACTORY_WITH_INITIALIZERS,ParserErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR,ParserErrorCode.FINAL_AND_COVARIANT,ParserErrorCode.FINAL_AND_VAR,ParserErrorCode.FINAL_CLASS,ParserErrorCode.FINAL_CONSTRUCTOR,ParserErrorCode.FINAL_ENUM,ParserErrorCode.FINAL_METHOD,ParserErrorCode.FINAL_TYPEDEF,ParserErrorCode.FUNCTION_TYPED_PARAMETER_VAR,ParserErrorCode.GETTER_IN_FUNCTION,ParserErrorCode.GETTER_WITH_PARAMETERS,ParserErrorCode.ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE,ParserErrorCode.IMPLEMENTS_BEFORE_EXTENDS,ParserErrorCode.IMPLEMENTS_BEFORE_WITH,ParserErrorCode.IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE,ParserErrorCode.INITIALIZED_VARIABLE_IN_FOR_EACH,ParserErrorCode.INVALID_AWAIT_IN_FOR,ParserErrorCode.INVALID_CODE_POINT,ParserErrorCode.INVALID_COMMENT_REFERENCE,ParserErrorCode.INVALID_CONSTRUCTOR_NAME,ParserErrorCode.INVALID_GENERIC_FUNCTION_TYPE,ParserErrorCode.INVALID_HEX_ESCAPE,ParserErrorCode.INVALID_LITERAL_IN_CONFIGURATION,ParserErrorCode.INVALID_OPERATOR,ParserErrorCode.INVALID_OPERATOR_FOR_SUPER,ParserErrorCode.INVALID_STAR_AFTER_ASYNC,ParserErrorCode.INVALID_SYNC,ParserErrorCode.INVALID_UNICODE_ESCAPE,ParserErrorCode.LIBRARY_DIRECTIVE_NOT_FIRST,ParserErrorCode.LOCAL_FUNCTION_DECLARATION_MODIFIER,ParserErrorCode.MISSING_ASSIGNABLE_SELECTOR,ParserErrorCode.MISSING_ASSIGNMENT_IN_INITIALIZER,ParserErrorCode.MISSING_CATCH_OR_FINALLY,ParserErrorCode.MISSING_CLASS_BODY,ParserErrorCode.MISSING_CLOSING_PARENTHESIS,ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE,ParserErrorCode.MISSING_ENUM_BODY,ParserErrorCode.MISSING_EXPRESSION_IN_INITIALIZER,ParserErrorCode.MISSING_EXPRESSION_IN_THROW,ParserErrorCode.MISSING_FUNCTION_BODY,ParserErrorCode.MISSING_FUNCTION_KEYWORD,ParserErrorCode.MISSING_FUNCTION_PARAMETERS,ParserErrorCode.MISSING_GET,ParserErrorCode.MISSING_IDENTIFIER,ParserErrorCode.MISSING_INITIALIZER,ParserErrorCode.MISSING_KEYWORD_OPERATOR,ParserErrorCode.MISSING_METHOD_PARAMETERS,ParserErrorCode.MISSING_NAME_FOR_NAMED_PARAMETER,ParserErrorCode.MISSING_NAME_IN_LIBRARY_DIRECTIVE,ParserErrorCode.MISSING_NAME_IN_PART_OF_DIRECTIVE,ParserErrorCode.MISSING_PREFIX_IN_DEFERRED_IMPORT,ParserErrorCode.MISSING_STAR_AFTER_SYNC,ParserErrorCode.MISSING_STATEMENT,ParserErrorCode.MISSING_TERMINATOR_FOR_PARAMETER_GROUP,ParserErrorCode.MISSING_TYPEDEF_PARAMETERS,ParserErrorCode.MISSING_VARIABLE_IN_FOR_EACH,ParserErrorCode.MIXED_PARAMETER_GROUPS,ParserErrorCode.MULTIPLE_EXTENDS_CLAUSES,ParserErrorCode.MULTIPLE_IMPLEMENTS_CLAUSES,ParserErrorCode.MULTIPLE_LIBRARY_DIRECTIVES,ParserErrorCode.MULTIPLE_NAMED_PARAMETER_GROUPS,ParserErrorCode.MULTIPLE_PART_OF_DIRECTIVES,ParserErrorCode.MULTIPLE_POSITIONAL_PARAMETER_GROUPS,ParserErrorCode.MULTIPLE_VARIABLES_IN_FOR_EACH,ParserErrorCode.MULTIPLE_WITH_CLAUSES,ParserErrorCode.NAMED_FUNCTION_EXPRESSION,ParserErrorCode.NAMED_FUNCTION_TYPE,ParserErrorCode.NAMED_PARAMETER_OUTSIDE_GROUP,ParserErrorCode.NATIVE_CLAUSE_IN_NON_SDK_CODE,ParserErrorCode.NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE,ParserErrorCode.NON_CONSTRUCTOR_FACTORY,ParserErrorCode.NON_IDENTIFIER_LIBRARY_NAME,ParserErrorCode.NON_PART_OF_DIRECTIVE_IN_PART,ParserErrorCode.NON_STRING_LITERAL_AS_URI,ParserErrorCode.NON_USER_DEFINABLE_OPERATOR,ParserErrorCode.NORMAL_BEFORE_OPTIONAL_PARAMETERS,ParserErrorCode.NULLABLE_TYPE_IN_EXTENDS,ParserErrorCode.NULLABLE_TYPE_IN_IMPLEMENTS,ParserErrorCode.NULLABLE_TYPE_IN_WITH,ParserErrorCode.NULLABLE_TYPE_PARAMETER,ParserErrorCode.POSITIONAL_AFTER_NAMED_ARGUMENT,ParserErrorCode.POSITIONAL_PARAMETER_OUTSIDE_GROUP,ParserErrorCode.REDIRECTING_CONSTRUCTOR_WITH_BODY,ParserErrorCode.REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR,ParserErrorCode.SETTER_IN_FUNCTION,ParserErrorCode.STACK_OVERFLOW,ParserErrorCode.STATIC_AFTER_CONST,ParserErrorCode.STATIC_AFTER_FINAL,ParserErrorCode.STATIC_AFTER_VAR,ParserErrorCode.STATIC_CONSTRUCTOR,ParserErrorCode.STATIC_GETTER_WITHOUT_BODY,ParserErrorCode.STATIC_OPERATOR,ParserErrorCode.STATIC_SETTER_WITHOUT_BODY,ParserErrorCode.STATIC_TOP_LEVEL_DECLARATION,ParserErrorCode.SWITCH_HAS_CASE_AFTER_DEFAULT_CASE,ParserErrorCode.SWITCH_HAS_MULTIPLE_DEFAULT_CASES,ParserErrorCode.TOP_LEVEL_OPERATOR,ParserErrorCode.TYPEDEF_IN_CLASS,ParserErrorCode.UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP,ParserErrorCode.UNEXPECTED_TOKEN,ParserErrorCode.VAR_AND_TYPE,ParserErrorCode.VAR_AS_TYPE_NAME,ParserErrorCode.VAR_CLASS,ParserErrorCode.VAR_ENUM,ParserErrorCode.VAR_RETURN_TYPE,ParserErrorCode.VAR_TYPEDEF,ParserErrorCode.VOID_PARAMETER,ParserErrorCode.VOID_VARIABLE,ParserErrorCode.WITH_BEFORE_EXTENDS,ParserErrorCode.WITH_WITHOUT_EXTENDS,ParserErrorCode.WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER,ParserErrorCode.WRONG_TERMINATOR_FOR_PARAMETER_GROUP,ResolverErrorCode.BREAK_LABEL_ON_SWITCH_MEMBER,ResolverErrorCode.CONTINUE_LABEL_ON_SWITCH,ResolverErrorCode.MISSING_LIBRARY_DIRECTIVE_WITH_PART,ScannerErrorCode.ILLEGAL_CHARACTER,ScannerErrorCode.MISSING_DIGIT,ScannerErrorCode.MISSING_HEX_DIGIT,ScannerErrorCode.MISSING_QUOTE,ScannerErrorCode.UNABLE_GET_CONTENT,ScannerErrorCode.UNTERMINATED_MULTI_LINE_COMMENT,ScannerErrorCode.UNTERMINATED_STRING_LITERAL,StaticTypeWarningCode.EXPECTED_ONE_LIST_TYPE_ARGUMENTS,StaticTypeWarningCode.EXPECTED_TWO_MAP_TYPE_ARGUMENTS,StaticTypeWarningCode.FOR_IN_OF_INVALID_ELEMENT_TYPE,StaticTypeWarningCode.FOR_IN_OF_INVALID_TYPE,StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE,StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE,StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE,StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER,StaticTypeWarningCode.INVALID_ASSIGNMENT,StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION,StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION_EXPRESSION,StaticTypeWarningCode.NON_BOOL_CONDITION,StaticTypeWarningCode.NON_BOOL_EXPRESSION,StaticTypeWarningCode.NON_BOOL_NEGATION_EXPRESSION,StaticTypeWarningCode.NON_BOOL_OPERAND,StaticTypeWarningCode.NON_NULLABLE_FIELD_NOT_INITIALIZED,StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT,StaticTypeWarningCode.RETURN_OF_INVALID_TYPE,StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS,StaticTypeWarningCode.TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND,StaticTypeWarningCode.UNDEFINED_ENUM_CONSTANT,StaticTypeWarningCode.UNDEFINED_FUNCTION,StaticTypeWarningCode.UNDEFINED_GETTER,StaticTypeWarningCode.UNDEFINED_METHOD,StaticTypeWarningCode.UNDEFINED_METHOD_WITH_CONSTRUCTOR,StaticTypeWarningCode.UNDEFINED_OPERATOR,StaticTypeWarningCode.UNDEFINED_SETTER,StaticTypeWarningCode.UNDEFINED_SUPER_GETTER,StaticTypeWarningCode.UNDEFINED_SUPER_METHOD,StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR,StaticTypeWarningCode.UNDEFINED_SUPER_SETTER,StaticTypeWarningCode.UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER,StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS,StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD,StaticTypeWarningCode.YIELD_OF_INVALID_TYPE,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,StaticWarningCode.ASSIGNMENT_TO_CONST,StaticWarningCode.ASSIGNMENT_TO_FINAL,StaticWarningCode.ASSIGNMENT_TO_FINAL_NO_SETTER,StaticWarningCode.ASSIGNMENT_TO_FUNCTION,StaticWarningCode.ASSIGNMENT_TO_METHOD,StaticWarningCode.ASSIGNMENT_TO_TYPE,StaticWarningCode.CASE_BLOCK_NOT_TERMINATED,StaticWarningCode.CAST_TO_NON_TYPE,StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER,StaticWarningCode.CONFLICTING_DART_IMPORT,StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER,StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER,StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER2,StaticWarningCode.CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER,StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER,StaticWarningCode.CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER,StaticWarningCode.CONST_WITH_ABSTRACT_CLASS,StaticWarningCode.EQUAL_KEYS_IN_MAP,StaticWarningCode.EXPORT_DUPLICATED_LIBRARY_NAMED,StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS,StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED,StaticWarningCode.FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION,StaticWarningCode.FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR,StaticWarningCode.FIELD_INITIALIZER_NOT_ASSIGNABLE,StaticWarningCode.FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE,StaticWarningCode.FINAL_NOT_INITIALIZED,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_1,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_2,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS,StaticWarningCode.FUNCTION_WITHOUT_CALL,StaticWarningCode.IMPORT_DUPLICATED_LIBRARY_NAMED,StaticWarningCode.IMPORT_OF_NON_LIBRARY,StaticWarningCode.INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD,StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC,StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE,StaticWarningCode.INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE,StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE,StaticWarningCode.INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE,StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE,StaticWarningCode.INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS,StaticWarningCode.INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND,StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED,StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL,StaticWarningCode.INVALID_OVERRIDE_NAMED,StaticWarningCode.INVALID_OVERRIDE_POSITIONAL,StaticWarningCode.INVALID_OVERRIDE_REQUIRED,StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE,StaticWarningCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE,StaticWarningCode.MAP_KEY_TYPE_NOT_ASSIGNABLE,StaticWarningCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE,StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES,StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE,StaticWarningCode.MISSING_ENUM_CONSTANT_IN_SWITCH,StaticWarningCode.MIXED_RETURN_TYPES,StaticWarningCode.NEW_WITH_ABSTRACT_CLASS,StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS,StaticWarningCode.NEW_WITH_NON_TYPE,StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR,StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO,StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE,StaticWarningCode.NON_VOID_RETURN_FOR_OPERATOR,StaticWarningCode.NON_VOID_RETURN_FOR_SETTER,StaticWarningCode.NOT_A_TYPE,StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS,StaticWarningCode.PART_OF_DIFFERENT_LIBRARY,StaticWarningCode.REDIRECT_TO_INVALID_FUNCTION_TYPE,StaticWarningCode.REDIRECT_TO_INVALID_RETURN_TYPE,StaticWarningCode.REDIRECT_TO_MISSING_CONSTRUCTOR,StaticWarningCode.REDIRECT_TO_NON_CLASS,StaticWarningCode.RETURN_WITHOUT_VALUE,StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER,StaticWarningCode.SWITCH_EXPRESSION_NOT_ASSIGNABLE,StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS,StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER,StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC,StaticWarningCode.TYPE_TEST_WITH_NON_TYPE,StaticWarningCode.TYPE_TEST_WITH_UNDEFINED_NAME,StaticWarningCode.UNDEFINED_CLASS,StaticWarningCode.UNDEFINED_CLASS_BOOLEAN,StaticWarningCode.UNDEFINED_GETTER,StaticWarningCode.UNDEFINED_IDENTIFIER,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT,StaticWarningCode.UNDEFINED_NAMED_PARAMETER,StaticWarningCode.UNDEFINED_SETTER,StaticWarningCode.UNDEFINED_STATIC_METHOD_OR_GETTER,StaticWarningCode.UNDEFINED_SUPER_GETTER,StaticWarningCode.UNDEFINED_SUPER_SETTER,StaticWarningCode.VOID_RETURN_FOR_GETTER,StrongModeCode.ASSIGNMENT_CAST,StrongModeCode.COULD_NOT_INFER,StrongModeCode.DOWN_CAST_COMPOSITE,StrongModeCode.DOWN_CAST_IMPLICIT,StrongModeCode.DOWN_CAST_IMPLICIT_ASSIGN,StrongModeCode.DYNAMIC_CAST,StrongModeCode.DYNAMIC_INVOKE,StrongModeCode.IMPLICIT_DYNAMIC_FIELD,StrongModeCode.IMPLICIT_DYNAMIC_FUNCTION,StrongModeCode.IMPLICIT_DYNAMIC_INVOKE,StrongModeCode.IMPLICIT_DYNAMIC_LIST_LITERAL,StrongModeCode.IMPLICIT_DYNAMIC_MAP_LITERAL,StrongModeCode.IMPLICIT_DYNAMIC_METHOD,StrongModeCode.IMPLICIT_DYNAMIC_PARAMETER,StrongModeCode.IMPLICIT_DYNAMIC_RETURN,StrongModeCode.IMPLICIT_DYNAMIC_TYPE,StrongModeCode.IMPLICIT_DYNAMIC_VARIABLE,StrongModeCode.INFERRED_TYPE,StrongModeCode.INFERRED_TYPE_ALLOCATION,StrongModeCode.INFERRED_TYPE_CLOSURE,StrongModeCode.INFERRED_TYPE_LITERAL,StrongModeCode.INVALID_CAST_LITERAL,StrongModeCode.INVALID_CAST_LITERAL_LIST,StrongModeCode.INVALID_CAST_LITERAL_MAP,StrongModeCode.INVALID_CAST_FUNCTION_EXPR,StrongModeCode.INVALID_CAST_NEW_EXPR,StrongModeCode.INVALID_CAST_METHOD,StrongModeCode.INVALID_CAST_FUNCTION,StrongModeCode.INVALID_FIELD_OVERRIDE,StrongModeCode.INVALID_METHOD_OVERRIDE,StrongModeCode.INVALID_METHOD_OVERRIDE_FROM_BASE,StrongModeCode.INVALID_METHOD_OVERRIDE_FROM_MIXIN,StrongModeCode.INVALID_PARAMETER_DECLARATION,StrongModeCode.INVALID_SUPER_INVOCATION,StrongModeCode.NO_DEFAULT_BOUNDS,StrongModeCode.NON_GROUND_TYPE_CHECK_INFO,StrongModeCode.NOT_INSTANTIATED_BOUND,StrongModeCode.TOP_LEVEL_CYCLE,StrongModeCode.TOP_LEVEL_FUNCTION_LITERAL_BLOCK,StrongModeCode.TOP_LEVEL_FUNCTION_LITERAL_PARAMETER,StrongModeCode.TOP_LEVEL_IDENTIFIER_NO_TYPE,StrongModeCode.TOP_LEVEL_INSTANCE_GETTER,StrongModeCode.TOP_LEVEL_TYPE_ARGUMENTS,StrongModeCode.TOP_LEVEL_UNSUPPORTED,StrongModeCode.UNSAFE_BLOCK_CLOSURE_INFERENCE,TodoCode.TODO);
        }
        return this.__$errorCodeValues;
    }
    static set errorCodeValues(__$value : core.DartList<any>)  { 
        this.__$errorCodeValues = __$value;
    }

    private static __$_uniqueNameToCodeMap : core.DartHashMap<string,any>;
    static get _uniqueNameToCodeMap() : core.DartHashMap<string,any> { 
        return this.__$_uniqueNameToCodeMap;
    }
    static set _uniqueNameToCodeMap(__$value : core.DartHashMap<string,any>)  { 
        this.__$_uniqueNameToCodeMap = __$value;
    }

}
