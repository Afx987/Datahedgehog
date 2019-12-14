/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/error/codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CheckedModeCompileTimeErrorCode {
    export type Constructors = 'CheckedModeCompileTimeErrorCode';
    export type Interface = Omit<CheckedModeCompileTimeErrorCode, Constructors>;
}
@DartClass
export class CheckedModeCompileTimeErrorCode extends any {
    private static __$CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH : CheckedModeCompileTimeErrorCode;
    static get CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH() : CheckedModeCompileTimeErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH===undefined) {
            this.__$CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH = new CheckedModeCompileTimeErrorCode('CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH',"A value of type '{0}' can't be assigned to the field '{1}', which " + "has type '{2}'.");
        }
        return this.__$CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH;
    }

    private static __$CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH : CheckedModeCompileTimeErrorCode;
    static get CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH() : CheckedModeCompileTimeErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH===undefined) {
            this.__$CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH = new CheckedModeCompileTimeErrorCode('CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH',"A value of type '{0}' can't be assigned to a parameter of type " + "'{1}'.");
        }
        return this.__$CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH;
    }

    private static __$CONST_EVAL_THROWS_EXCEPTION : CheckedModeCompileTimeErrorCode;
    static get CONST_EVAL_THROWS_EXCEPTION() : CheckedModeCompileTimeErrorCode { 
        if (this.__$CONST_EVAL_THROWS_EXCEPTION===undefined) {
            this.__$CONST_EVAL_THROWS_EXCEPTION = new CheckedModeCompileTimeErrorCode('CONST_EVAL_THROWS_EXCEPTION',"Evaluation of this constant expression throws an exception.");
        }
        return this.__$CONST_EVAL_THROWS_EXCEPTION;
    }

    private static __$CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE : CheckedModeCompileTimeErrorCode;
    static get CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE() : CheckedModeCompileTimeErrorCode { 
        if (this.__$CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE===undefined) {
            this.__$CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE = new CheckedModeCompileTimeErrorCode('CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE',"The initializer type '{0}' can't be assigned to the field type " + "'{1}'.");
        }
        return this.__$CONST_FIELD_INITIALIZER_NOT_ASSIGNABLE;
    }

    private static __$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE : CheckedModeCompileTimeErrorCode;
    static get LIST_ELEMENT_TYPE_NOT_ASSIGNABLE() : CheckedModeCompileTimeErrorCode { 
        if (this.__$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE = new CheckedModeCompileTimeErrorCode('LIST_ELEMENT_TYPE_NOT_ASSIGNABLE',"The element type '{0}' can't be assigned to the list type '{1}'.");
        }
        return this.__$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE;
    }

    private static __$MAP_KEY_TYPE_NOT_ASSIGNABLE : CheckedModeCompileTimeErrorCode;
    static get MAP_KEY_TYPE_NOT_ASSIGNABLE() : CheckedModeCompileTimeErrorCode { 
        if (this.__$MAP_KEY_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$MAP_KEY_TYPE_NOT_ASSIGNABLE = new CheckedModeCompileTimeErrorCode('MAP_KEY_TYPE_NOT_ASSIGNABLE',"The element type '{0}' can't be assigned to the map key type '{1}'.");
        }
        return this.__$MAP_KEY_TYPE_NOT_ASSIGNABLE;
    }

    private static __$MAP_VALUE_TYPE_NOT_ASSIGNABLE : CheckedModeCompileTimeErrorCode;
    static get MAP_VALUE_TYPE_NOT_ASSIGNABLE() : CheckedModeCompileTimeErrorCode { 
        if (this.__$MAP_VALUE_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$MAP_VALUE_TYPE_NOT_ASSIGNABLE = new CheckedModeCompileTimeErrorCode('MAP_VALUE_TYPE_NOT_ASSIGNABLE',"The element type '{0}' can't be assigned to the map value type " + "'{1}'.");
        }
        return this.__$MAP_VALUE_TYPE_NOT_ASSIGNABLE;
    }

    private static __$VARIABLE_TYPE_MISMATCH : CheckedModeCompileTimeErrorCode;
    static get VARIABLE_TYPE_MISMATCH() : CheckedModeCompileTimeErrorCode { 
        if (this.__$VARIABLE_TYPE_MISMATCH===undefined) {
            this.__$VARIABLE_TYPE_MISMATCH = new CheckedModeCompileTimeErrorCode('VARIABLE_TYPE_MISMATCH',"A value of type '{0}' can't be assigned to a variable of type " + "'{1}'.");
        }
        return this.__$VARIABLE_TYPE_MISMATCH;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    CheckedModeCompileTimeErrorCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorType.CHECKED_MODE_COMPILE_TIME_ERROR.severity;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.CHECKED_MODE_COMPILE_TIME_ERROR;
    }
}

export namespace CompileTimeErrorCode {
    export type Constructors = 'CompileTimeErrorCode';
    export type Interface = Omit<CompileTimeErrorCode, Constructors>;
}
@DartClass
export class CompileTimeErrorCode extends any {
    private static __$ACCESS_PRIVATE_ENUM_FIELD : CompileTimeErrorCode;
    static get ACCESS_PRIVATE_ENUM_FIELD() : CompileTimeErrorCode { 
        if (this.__$ACCESS_PRIVATE_ENUM_FIELD===undefined) {
            this.__$ACCESS_PRIVATE_ENUM_FIELD = new CompileTimeErrorCode('ACCESS_PRIVATE_ENUM_FIELD',"The private fields of an enum can't be accessed, even within the " + "same library.");
        }
        return this.__$ACCESS_PRIVATE_ENUM_FIELD;
    }

    private static __$AMBIGUOUS_EXPORT : CompileTimeErrorCode;
    static get AMBIGUOUS_EXPORT() : CompileTimeErrorCode { 
        if (this.__$AMBIGUOUS_EXPORT===undefined) {
            this.__$AMBIGUOUS_EXPORT = new CompileTimeErrorCode('AMBIGUOUS_EXPORT',"The name '{0}' is defined in the libraries '{1}' and '{2}'.","Try removing the export of one of the libraries, or " + "explicitly hiding the name in one of the export directives.");
        }
        return this.__$AMBIGUOUS_EXPORT;
    }

    private static __$ANNOTATION_WITH_NON_CLASS : CompileTimeErrorCode;
    static get ANNOTATION_WITH_NON_CLASS() : CompileTimeErrorCode { 
        if (this.__$ANNOTATION_WITH_NON_CLASS===undefined) {
            this.__$ANNOTATION_WITH_NON_CLASS = new CompileTimeErrorCode('ANNOTATION_WITH_NON_CLASS',"The name '{0}' isn't a class.","Try importing the library that declares the class, " + "correcting the name to match a defined class, or " + "defining a class with the given name.");
        }
        return this.__$ANNOTATION_WITH_NON_CLASS;
    }

    private static __$ARGUMENT_DEFINITION_TEST_NON_PARAMETER : CompileTimeErrorCode;
    static get ARGUMENT_DEFINITION_TEST_NON_PARAMETER() : CompileTimeErrorCode { 
        if (this.__$ARGUMENT_DEFINITION_TEST_NON_PARAMETER===undefined) {
            this.__$ARGUMENT_DEFINITION_TEST_NON_PARAMETER = new CompileTimeErrorCode('ARGUMENT_DEFINITION_TEST_NON_PARAMETER',"'{0}' isn't a parameter.");
        }
        return this.__$ARGUMENT_DEFINITION_TEST_NON_PARAMETER;
    }

    private static __$ASYNC_FOR_IN_WRONG_CONTEXT : CompileTimeErrorCode;
    static get ASYNC_FOR_IN_WRONG_CONTEXT() : CompileTimeErrorCode { 
        if (this.__$ASYNC_FOR_IN_WRONG_CONTEXT===undefined) {
            this.__$ASYNC_FOR_IN_WRONG_CONTEXT = new CompileTimeErrorCode('ASYNC_FOR_IN_WRONG_CONTEXT',"The asynchronous for-in can only be used in an asynchronous function.","Try marking the function body with either 'async' or 'async*', or " + "removing the 'await' before the for loop.");
        }
        return this.__$ASYNC_FOR_IN_WRONG_CONTEXT;
    }

    private static __$AWAIT_IN_WRONG_CONTEXT : CompileTimeErrorCode;
    static get AWAIT_IN_WRONG_CONTEXT() : CompileTimeErrorCode { 
        if (this.__$AWAIT_IN_WRONG_CONTEXT===undefined) {
            this.__$AWAIT_IN_WRONG_CONTEXT = new CompileTimeErrorCode('AWAIT_IN_WRONG_CONTEXT',"The await expression can only be used in an asynchronous function.","Try marking the function body with either 'async' or 'async*'.");
        }
        return this.__$AWAIT_IN_WRONG_CONTEXT;
    }

    private static __$BUILT_IN_IDENTIFIER_AS_PREFIX_NAME : CompileTimeErrorCode;
    static get BUILT_IN_IDENTIFIER_AS_PREFIX_NAME() : CompileTimeErrorCode { 
        if (this.__$BUILT_IN_IDENTIFIER_AS_PREFIX_NAME===undefined) {
            this.__$BUILT_IN_IDENTIFIER_AS_PREFIX_NAME = new CompileTimeErrorCode('BUILT_IN_IDENTIFIER_AS_PREFIX_NAME',"The built-in identifier '{0}' can't be used as a prefix name.","Try choosing a different name for the prefix.");
        }
        return this.__$BUILT_IN_IDENTIFIER_AS_PREFIX_NAME;
    }

    private static __$BUILT_IN_IDENTIFIER_AS_TYPE : CompileTimeErrorCode;
    static get BUILT_IN_IDENTIFIER_AS_TYPE() : CompileTimeErrorCode { 
        if (this.__$BUILT_IN_IDENTIFIER_AS_TYPE===undefined) {
            this.__$BUILT_IN_IDENTIFIER_AS_TYPE = new CompileTimeErrorCode('BUILT_IN_IDENTIFIER_AS_TYPE',"The built-in identifier '{0}' can't be used as a type.","Try correcting the name to match an existing type.");
        }
        return this.__$BUILT_IN_IDENTIFIER_AS_TYPE;
    }

    private static __$BUILT_IN_IDENTIFIER_AS_TYPE_NAME : CompileTimeErrorCode;
    static get BUILT_IN_IDENTIFIER_AS_TYPE_NAME() : CompileTimeErrorCode { 
        if (this.__$BUILT_IN_IDENTIFIER_AS_TYPE_NAME===undefined) {
            this.__$BUILT_IN_IDENTIFIER_AS_TYPE_NAME = new CompileTimeErrorCode('BUILT_IN_IDENTIFIER_AS_TYPE_NAME',"The built-in identifier '{0}' can't be used as a type name.","Try choosing a different name for the type.");
        }
        return this.__$BUILT_IN_IDENTIFIER_AS_TYPE_NAME;
    }

    private static __$BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME : CompileTimeErrorCode;
    static get BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME() : CompileTimeErrorCode { 
        if (this.__$BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME===undefined) {
            this.__$BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME = new CompileTimeErrorCode('BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME',"The built-in identifier '{0}' can't be used as a typedef name.","Try choosing a different name for the typedef.");
        }
        return this.__$BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME;
    }

    private static __$BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME : CompileTimeErrorCode;
    static get BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME() : CompileTimeErrorCode { 
        if (this.__$BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME===undefined) {
            this.__$BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME = new CompileTimeErrorCode('BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME',"The built-in identifier '{0}' can't be used as a type parameter name.","Try choosing a different name for the type parameter.");
        }
        return this.__$BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME;
    }

    private static __$CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS : CompileTimeErrorCode;
    static get CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS() : CompileTimeErrorCode { 
        if (this.__$CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS===undefined) {
            this.__$CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS = new CompileTimeErrorCode('CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS',"The switch case expression type '{0}' can't override the == operator.");
        }
        return this.__$CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS;
    }

    private static __$CONFLICTING_GETTER_AND_METHOD : CompileTimeErrorCode;
    static get CONFLICTING_GETTER_AND_METHOD() : CompileTimeErrorCode { 
        if (this.__$CONFLICTING_GETTER_AND_METHOD===undefined) {
            this.__$CONFLICTING_GETTER_AND_METHOD = new CompileTimeErrorCode('CONFLICTING_GETTER_AND_METHOD',"Class '{0}' can't have both getter '{1}.{2}' and method with the " + "same name.","Try converting the method to a getter, or " + "renaming the method to a name that doesn't conflit.");
        }
        return this.__$CONFLICTING_GETTER_AND_METHOD;
    }

    private static __$CONFLICTING_METHOD_AND_GETTER : CompileTimeErrorCode;
    static get CONFLICTING_METHOD_AND_GETTER() : CompileTimeErrorCode { 
        if (this.__$CONFLICTING_METHOD_AND_GETTER===undefined) {
            this.__$CONFLICTING_METHOD_AND_GETTER = new CompileTimeErrorCode('CONFLICTING_METHOD_AND_GETTER',"Class '{0}' can't have both method '{1}.{2}' and getter with the " + "same name.","Try converting the getter to a method, or " + "renaming the getter to a name that doesn't conflit.");
        }
        return this.__$CONFLICTING_METHOD_AND_GETTER;
    }

    private static __$CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD : CompileTimeErrorCode;
    static get CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD() : CompileTimeErrorCode { 
        if (this.__$CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD===undefined) {
            this.__$CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD = new CompileTimeErrorCode('CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD',"'{0}' can't be used to name both a constructor and a field in this " + "class.","Try renaming either the constructor or the field.");
        }
        return this.__$CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD;
    }

    private static __$CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD : CompileTimeErrorCode;
    static get CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD() : CompileTimeErrorCode { 
        if (this.__$CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD===undefined) {
            this.__$CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD = new CompileTimeErrorCode('CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD',"'{0}' can't be used to name both a constructor and a method in this " + "class.","Try renaming either the constructor or the field.");
        }
        return this.__$CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD;
    }

    private static __$CONFLICTING_TYPE_VARIABLE_AND_CLASS : CompileTimeErrorCode;
    static get CONFLICTING_TYPE_VARIABLE_AND_CLASS() : CompileTimeErrorCode { 
        if (this.__$CONFLICTING_TYPE_VARIABLE_AND_CLASS===undefined) {
            this.__$CONFLICTING_TYPE_VARIABLE_AND_CLASS = new CompileTimeErrorCode('CONFLICTING_TYPE_VARIABLE_AND_CLASS',"'{0}' can't be used to name both a type variable and the class in " + "which the type variable is defined.","Try renaming either the type variable or the class.");
        }
        return this.__$CONFLICTING_TYPE_VARIABLE_AND_CLASS;
    }

    private static __$CONFLICTING_TYPE_VARIABLE_AND_MEMBER : CompileTimeErrorCode;
    static get CONFLICTING_TYPE_VARIABLE_AND_MEMBER() : CompileTimeErrorCode { 
        if (this.__$CONFLICTING_TYPE_VARIABLE_AND_MEMBER===undefined) {
            this.__$CONFLICTING_TYPE_VARIABLE_AND_MEMBER = new CompileTimeErrorCode('CONFLICTING_TYPE_VARIABLE_AND_MEMBER',"'{0}' can't be used to name both a type variable and a member in " + "this class.","Try renaming either the type variable or the member.");
        }
        return this.__$CONFLICTING_TYPE_VARIABLE_AND_MEMBER;
    }

    private static __$CONST_CONSTRUCTOR_THROWS_EXCEPTION : CompileTimeErrorCode;
    static get CONST_CONSTRUCTOR_THROWS_EXCEPTION() : CompileTimeErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_THROWS_EXCEPTION===undefined) {
            this.__$CONST_CONSTRUCTOR_THROWS_EXCEPTION = new CompileTimeErrorCode('CONST_CONSTRUCTOR_THROWS_EXCEPTION',"Const constructors can't throw exceptions.","Try removing the throw statement, or removing the keyword 'const'.");
        }
        return this.__$CONST_CONSTRUCTOR_THROWS_EXCEPTION;
    }

    private static __$CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST : CompileTimeErrorCode;
    static get CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST() : CompileTimeErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST===undefined) {
            this.__$CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST = new CompileTimeErrorCode('CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST',"Can't define the const constructor because the field '{0}' " + "is initialized with a non-constant value.","Try initializing the field to a constant value, or " + "removing the keyword 'const' from the constructor.");
        }
        return this.__$CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST;
    }

    private static __$CONST_CONSTRUCTOR_WITH_MIXIN : CompileTimeErrorCode;
    static get CONST_CONSTRUCTOR_WITH_MIXIN() : CompileTimeErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_WITH_MIXIN===undefined) {
            this.__$CONST_CONSTRUCTOR_WITH_MIXIN = new CompileTimeErrorCode('CONST_CONSTRUCTOR_WITH_MIXIN',"Const constructor can't be declared for a class with a mixin.","Try removing the 'const' keyword, or " + "removing the 'with' clause from the class declaration.");
        }
        return this.__$CONST_CONSTRUCTOR_WITH_MIXIN;
    }

    private static __$CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER : CompileTimeErrorCode;
    static get CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER() : CompileTimeErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER===undefined) {
            this.__$CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER = new CompileTimeErrorCode('CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER',"Constant constructor can't call non-constant super constructor of " + "'{0}'.","Try calling a const constructor in the superclass, or " + "removing the keyword 'const' from the constructor.");
        }
        return this.__$CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER;
    }

    private static __$CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD : CompileTimeErrorCode;
    static get CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD() : CompileTimeErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD===undefined) {
            this.__$CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD = new CompileTimeErrorCode('CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD',"Can't define a const constructor for a class with non-final fields.","Try making all of the fields final, or " + "removing the keyword 'const' from the constructor.");
        }
        return this.__$CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD;
    }

    private static __$CONST_DEFERRED_CLASS : CompileTimeErrorCode;
    static get CONST_DEFERRED_CLASS() : CompileTimeErrorCode { 
        if (this.__$CONST_DEFERRED_CLASS===undefined) {
            this.__$CONST_DEFERRED_CLASS = new CompileTimeErrorCode('CONST_DEFERRED_CLASS',"Deferred classes can't be created with 'const'.","Try using 'new' to create the instance, or " + "changing the import to not be deferred.");
        }
        return this.__$CONST_DEFERRED_CLASS;
    }

    private static __$CONST_FORMAL_PARAMETER : CompileTimeErrorCode;
    static get CONST_FORMAL_PARAMETER() : CompileTimeErrorCode { 
        if (this.__$CONST_FORMAL_PARAMETER===undefined) {
            this.__$CONST_FORMAL_PARAMETER = new CompileTimeErrorCode('CONST_FORMAL_PARAMETER',"Parameters can't be const.","Try removing the 'const' keyword.");
        }
        return this.__$CONST_FORMAL_PARAMETER;
    }

    private static __$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE : CompileTimeErrorCode;
    static get CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE() : CompileTimeErrorCode { 
        if (this.__$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE===undefined) {
            this.__$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE = new CompileTimeErrorCode('CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE',"Const variables must be initialized with a constant value.","Try changing the initializer to be a constant expression.");
        }
        return this.__$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE;
    }

    private static __$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used to " + "initialized a const variable.","Try initializing the variable without referencing members of the " + "deferred library, or " + "changing the import to not be deferred.");
        }
        return this.__$CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY;
    }

    private static __$CONST_INSTANCE_FIELD : CompileTimeErrorCode;
    static get CONST_INSTANCE_FIELD() : CompileTimeErrorCode { 
        if (this.__$CONST_INSTANCE_FIELD===undefined) {
            this.__$CONST_INSTANCE_FIELD = new CompileTimeErrorCode('CONST_INSTANCE_FIELD',"Only static fields can be declared as const.","Try declaring the field as final, or adding the keyword 'static'.");
        }
        return this.__$CONST_INSTANCE_FIELD;
    }

    private static __$CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS : CompileTimeErrorCode;
    static get CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS() : CompileTimeErrorCode { 
        if (this.__$CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS===undefined) {
            this.__$CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS = new CompileTimeErrorCode('CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS',"The constant map entry key expression type '{0}' can't override " + "the == operator.","Try using a different value for the key, or " + "removing the keyword 'const' from the map.");
        }
        return this.__$CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS;
    }

    private static __$CONST_NOT_INITIALIZED : CompileTimeErrorCode;
    static get CONST_NOT_INITIALIZED() : CompileTimeErrorCode { 
        if (this.__$CONST_NOT_INITIALIZED===undefined) {
            this.__$CONST_NOT_INITIALIZED = new CompileTimeErrorCode('CONST_NOT_INITIALIZED',"The const variable '{0}' must be initialized.","Try adding an initialization to the declaration.");
        }
        return this.__$CONST_NOT_INITIALIZED;
    }

    private static __$CONST_EVAL_TYPE_BOOL : CompileTimeErrorCode;
    static get CONST_EVAL_TYPE_BOOL() : CompileTimeErrorCode { 
        if (this.__$CONST_EVAL_TYPE_BOOL===undefined) {
            this.__$CONST_EVAL_TYPE_BOOL = new CompileTimeErrorCode('CONST_EVAL_TYPE_BOOL',"In constant expressions, operands of this operator must be of type " + "'bool'.");
        }
        return this.__$CONST_EVAL_TYPE_BOOL;
    }

    private static __$CONST_EVAL_TYPE_BOOL_NUM_STRING : CompileTimeErrorCode;
    static get CONST_EVAL_TYPE_BOOL_NUM_STRING() : CompileTimeErrorCode { 
        if (this.__$CONST_EVAL_TYPE_BOOL_NUM_STRING===undefined) {
            this.__$CONST_EVAL_TYPE_BOOL_NUM_STRING = new CompileTimeErrorCode('CONST_EVAL_TYPE_BOOL_NUM_STRING',"In constant expressions, operands of this operator must be of type " + "'bool', 'num', 'String' or 'null'.");
        }
        return this.__$CONST_EVAL_TYPE_BOOL_NUM_STRING;
    }

    private static __$CONST_EVAL_TYPE_INT : CompileTimeErrorCode;
    static get CONST_EVAL_TYPE_INT() : CompileTimeErrorCode { 
        if (this.__$CONST_EVAL_TYPE_INT===undefined) {
            this.__$CONST_EVAL_TYPE_INT = new CompileTimeErrorCode('CONST_EVAL_TYPE_INT',"In constant expressions, operands of this operator must be of type " + "'int'.");
        }
        return this.__$CONST_EVAL_TYPE_INT;
    }

    private static __$CONST_EVAL_TYPE_NUM : CompileTimeErrorCode;
    static get CONST_EVAL_TYPE_NUM() : CompileTimeErrorCode { 
        if (this.__$CONST_EVAL_TYPE_NUM===undefined) {
            this.__$CONST_EVAL_TYPE_NUM = new CompileTimeErrorCode('CONST_EVAL_TYPE_NUM',"In constant expressions, operands of this operator must be of type " + "'num'.");
        }
        return this.__$CONST_EVAL_TYPE_NUM;
    }

    private static __$CONST_EVAL_THROWS_EXCEPTION : CompileTimeErrorCode;
    static get CONST_EVAL_THROWS_EXCEPTION() : CompileTimeErrorCode { 
        if (this.__$CONST_EVAL_THROWS_EXCEPTION===undefined) {
            this.__$CONST_EVAL_THROWS_EXCEPTION = new CompileTimeErrorCode('CONST_EVAL_THROWS_EXCEPTION',"Evaluation of this constant expression throws an exception.");
        }
        return this.__$CONST_EVAL_THROWS_EXCEPTION;
    }

    private static __$CONST_EVAL_THROWS_IDBZE : CompileTimeErrorCode;
    static get CONST_EVAL_THROWS_IDBZE() : CompileTimeErrorCode { 
        if (this.__$CONST_EVAL_THROWS_IDBZE===undefined) {
            this.__$CONST_EVAL_THROWS_IDBZE = new CompileTimeErrorCode('CONST_EVAL_THROWS_IDBZE',"Evaluation of this constant expression throws an " + "IntegerDivisionByZeroException.");
        }
        return this.__$CONST_EVAL_THROWS_IDBZE;
    }

    private static __$CONST_WITH_INVALID_TYPE_PARAMETERS : CompileTimeErrorCode;
    static get CONST_WITH_INVALID_TYPE_PARAMETERS() : CompileTimeErrorCode { 
        if (this.__$CONST_WITH_INVALID_TYPE_PARAMETERS===undefined) {
            this.__$CONST_WITH_INVALID_TYPE_PARAMETERS = new CompileTimeErrorCode('CONST_WITH_INVALID_TYPE_PARAMETERS',"The type '{0}' is declared with {1} type parameters, but {2} type " + "arguments were given.","Try adjusting the number of type arguments to match the number of " + "type parameters.");
        }
        return this.__$CONST_WITH_INVALID_TYPE_PARAMETERS;
    }

    private static __$CONST_WITH_NON_CONST : CompileTimeErrorCode;
    static get CONST_WITH_NON_CONST() : CompileTimeErrorCode { 
        if (this.__$CONST_WITH_NON_CONST===undefined) {
            this.__$CONST_WITH_NON_CONST = new CompileTimeErrorCode('CONST_WITH_NON_CONST',"The constructor being called isn't a const constructor.","Try using 'new' to call the constructor.");
        }
        return this.__$CONST_WITH_NON_CONST;
    }

    private static __$CONST_WITH_NON_CONSTANT_ARGUMENT : CompileTimeErrorCode;
    static get CONST_WITH_NON_CONSTANT_ARGUMENT() : CompileTimeErrorCode { 
        if (this.__$CONST_WITH_NON_CONSTANT_ARGUMENT===undefined) {
            this.__$CONST_WITH_NON_CONSTANT_ARGUMENT = new CompileTimeErrorCode('CONST_WITH_NON_CONSTANT_ARGUMENT',"Arguments of a constant creation must be constant expressions.","Try making the argument a valid constant, or " + "use 'new' to call the constructor.");
        }
        return this.__$CONST_WITH_NON_CONSTANT_ARGUMENT;
    }

    private static __$CONST_WITH_NON_TYPE : CompileTimeErrorCode;
    static get CONST_WITH_NON_TYPE() : CompileTimeErrorCode { 
        if (this.__$CONST_WITH_NON_TYPE===undefined) {
            this.__$CONST_WITH_NON_TYPE = new CompileTimeErrorCode('CONST_WITH_NON_TYPE',"The name '{0}' isn't a class.","Try correcting the name to match an existing class.");
        }
        return this.__$CONST_WITH_NON_TYPE;
    }

    private static __$CONST_WITH_TYPE_PARAMETERS : CompileTimeErrorCode;
    static get CONST_WITH_TYPE_PARAMETERS() : CompileTimeErrorCode { 
        if (this.__$CONST_WITH_TYPE_PARAMETERS===undefined) {
            this.__$CONST_WITH_TYPE_PARAMETERS = new CompileTimeErrorCode('CONST_WITH_TYPE_PARAMETERS',"A constant creation can't use a type parameter as a type argument.","Try replacing the type parameter with a different type.");
        }
        return this.__$CONST_WITH_TYPE_PARAMETERS;
    }

    private static __$CONST_WITH_UNDEFINED_CONSTRUCTOR : CompileTimeErrorCode;
    static get CONST_WITH_UNDEFINED_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$CONST_WITH_UNDEFINED_CONSTRUCTOR===undefined) {
            this.__$CONST_WITH_UNDEFINED_CONSTRUCTOR = new CompileTimeErrorCode('CONST_WITH_UNDEFINED_CONSTRUCTOR',"The class '{0}' doesn't have a constant constructor '{1}'.","Try calling a different contructor.");
        }
        return this.__$CONST_WITH_UNDEFINED_CONSTRUCTOR;
    }

    private static __$CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT : CompileTimeErrorCode;
    static get CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT() : CompileTimeErrorCode { 
        if (this.__$CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT===undefined) {
            this.__$CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT = new CompileTimeErrorCode('CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT',"The class '{0}' doesn't have a default constant constructor.","Try calling a different contructor.");
        }
        return this.__$CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT;
    }

    private static __$DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS : CompileTimeErrorCode;
    static get DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS() : CompileTimeErrorCode { 
        if (this.__$DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS===undefined) {
            this.__$DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS = new CompileTimeErrorCode('DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS',"Default parameter values aren't allowed in typedefs.","Try removing the default value.");
        }
        return this.__$DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS;
    }

    private static __$DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER : CompileTimeErrorCode;
    static get DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER() : CompileTimeErrorCode { 
        if (this.__$DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER===undefined) {
            this.__$DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER = new CompileTimeErrorCode('DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER',"Default values aren't allowed in function typed parameters.","Try removing the default value.");
        }
        return this.__$DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER;
    }

    private static __$DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR : CompileTimeErrorCode;
    static get DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR===undefined) {
            this.__$DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR = new CompileTimeErrorCode('DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR',"Default values aren't allowed in factory constructors that redirect " + "to another constructor.","Try removing the default value.");
        }
        return this.__$DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR;
    }

    private static __$DUPLICATE_CONSTRUCTOR_DEFAULT : CompileTimeErrorCode;
    static get DUPLICATE_CONSTRUCTOR_DEFAULT() : CompileTimeErrorCode { 
        if (this.__$DUPLICATE_CONSTRUCTOR_DEFAULT===undefined) {
            this.__$DUPLICATE_CONSTRUCTOR_DEFAULT = new CompileTimeErrorCode('DUPLICATE_CONSTRUCTOR_DEFAULT',"The default constructor is already defined.","Try giving one of the constructors a name.");
        }
        return this.__$DUPLICATE_CONSTRUCTOR_DEFAULT;
    }

    private static __$DUPLICATE_CONSTRUCTOR_NAME : CompileTimeErrorCode;
    static get DUPLICATE_CONSTRUCTOR_NAME() : CompileTimeErrorCode { 
        if (this.__$DUPLICATE_CONSTRUCTOR_NAME===undefined) {
            this.__$DUPLICATE_CONSTRUCTOR_NAME = new CompileTimeErrorCode('DUPLICATE_CONSTRUCTOR_NAME',"The constructor with name '{0}' is already defined.","Try renaming one of the constructors.");
        }
        return this.__$DUPLICATE_CONSTRUCTOR_NAME;
    }

    private static __$DUPLICATE_DEFINITION : CompileTimeErrorCode;
    static get DUPLICATE_DEFINITION() : CompileTimeErrorCode { 
        if (this.__$DUPLICATE_DEFINITION===undefined) {
            this.__$DUPLICATE_DEFINITION = new CompileTimeErrorCode('DUPLICATE_DEFINITION',"The name '{0}' is already defined.","Try renaming one of the declarations.");
        }
        return this.__$DUPLICATE_DEFINITION;
    }

    private static __$DUPLICATE_PART : CompileTimeErrorCode;
    static get DUPLICATE_PART() : CompileTimeErrorCode { 
        if (this.__$DUPLICATE_PART===undefined) {
            this.__$DUPLICATE_PART = new CompileTimeErrorCode('DUPLICATE_PART',"The library already contains a part with the uri '{0}'.","Try removing all but one of the duplicated part directives.");
        }
        return this.__$DUPLICATE_PART;
    }

    private static __$DUPLICATE_DEFINITION_INHERITANCE : CompileTimeErrorCode;
    static get DUPLICATE_DEFINITION_INHERITANCE() : CompileTimeErrorCode { 
        if (this.__$DUPLICATE_DEFINITION_INHERITANCE===undefined) {
            this.__$DUPLICATE_DEFINITION_INHERITANCE = new CompileTimeErrorCode('DUPLICATE_DEFINITION_INHERITANCE',"The name '{0}' is already defined in '{1}'.","Try renaming one of the declarations.");
        }
        return this.__$DUPLICATE_DEFINITION_INHERITANCE;
    }

    private static __$DUPLICATE_NAMED_ARGUMENT : CompileTimeErrorCode;
    static get DUPLICATE_NAMED_ARGUMENT() : CompileTimeErrorCode { 
        if (this.__$DUPLICATE_NAMED_ARGUMENT===undefined) {
            this.__$DUPLICATE_NAMED_ARGUMENT = new CompileTimeErrorCode('DUPLICATE_NAMED_ARGUMENT',"The argument for the named parameter '{0}' was already specified.","Try removing one of the named arguments, or " + "correcting one of the names to reference a different named parameter.");
        }
        return this.__$DUPLICATE_NAMED_ARGUMENT;
    }

    private static __$EXPORT_INTERNAL_LIBRARY : CompileTimeErrorCode;
    static get EXPORT_INTERNAL_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$EXPORT_INTERNAL_LIBRARY===undefined) {
            this.__$EXPORT_INTERNAL_LIBRARY = new CompileTimeErrorCode('EXPORT_INTERNAL_LIBRARY',"The library '{0}' is internal and can't be exported.");
        }
        return this.__$EXPORT_INTERNAL_LIBRARY;
    }

    private static __$EXPORT_OF_NON_LIBRARY : CompileTimeErrorCode;
    static get EXPORT_OF_NON_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$EXPORT_OF_NON_LIBRARY===undefined) {
            this.__$EXPORT_OF_NON_LIBRARY = new CompileTimeErrorCode('EXPORT_OF_NON_LIBRARY',"The exported library '{0}' can't have a part-of directive.","Try exporting the library that the part is a part of.");
        }
        return this.__$EXPORT_OF_NON_LIBRARY;
    }

    private static __$EXTENDS_ENUM : CompileTimeErrorCode;
    static get EXTENDS_ENUM() : CompileTimeErrorCode { 
        if (this.__$EXTENDS_ENUM===undefined) {
            this.__$EXTENDS_ENUM = new CompileTimeErrorCode('EXTENDS_ENUM',"Classes can't extend an enum.","Try specifying a different superclass, or removing the extends clause.");
        }
        return this.__$EXTENDS_ENUM;
    }

    private static __$EXTENDS_NON_CLASS : CompileTimeErrorCode;
    static get EXTENDS_NON_CLASS() : CompileTimeErrorCode { 
        if (this.__$EXTENDS_NON_CLASS===undefined) {
            this.__$EXTENDS_NON_CLASS = new CompileTimeErrorCode('EXTENDS_NON_CLASS',"Classes can only extend other classes.","Try specifying a different superclass, or removing the extends clause.");
        }
        return this.__$EXTENDS_NON_CLASS;
    }

    private static __$EXTENDS_DISALLOWED_CLASS : CompileTimeErrorCode;
    static get EXTENDS_DISALLOWED_CLASS() : CompileTimeErrorCode { 
        if (this.__$EXTENDS_DISALLOWED_CLASS===undefined) {
            this.__$EXTENDS_DISALLOWED_CLASS = new CompileTimeErrorCode('EXTENDS_DISALLOWED_CLASS',"Classes can't extend '{0}'.","Try specifying a different superclass, or " + "removing the extends clause.");
        }
        return this.__$EXTENDS_DISALLOWED_CLASS;
    }

    private static __$EXTENDS_DEFERRED_CLASS : CompileTimeErrorCode;
    static get EXTENDS_DEFERRED_CLASS() : CompileTimeErrorCode { 
        if (this.__$EXTENDS_DEFERRED_CLASS===undefined) {
            this.__$EXTENDS_DEFERRED_CLASS = new CompileTimeErrorCode('EXTENDS_DEFERRED_CLASS',"This class can't extend the deferred class '{0}'.","Try specifying a different superclass, or " + "removing the extends clause.");
        }
        return this.__$EXTENDS_DEFERRED_CLASS;
    }

    private static __$EXTRA_POSITIONAL_ARGUMENTS : CompileTimeErrorCode;
    static get EXTRA_POSITIONAL_ARGUMENTS() : CompileTimeErrorCode { 
        if (this.__$EXTRA_POSITIONAL_ARGUMENTS===undefined) {
            this.__$EXTRA_POSITIONAL_ARGUMENTS = new CompileTimeErrorCode('EXTRA_POSITIONAL_ARGUMENTS',"Too many positional arguments: {0} expected, but {1} found.","Try removing the extra arguments.");
        }
        return this.__$EXTRA_POSITIONAL_ARGUMENTS;
    }

    private static __$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED : CompileTimeErrorCode;
    static get EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED() : CompileTimeErrorCode { 
        if (this.__$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED===undefined) {
            this.__$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED = new CompileTimeErrorCode('EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED',"Too many positional arguments: {0} expected, but {1} found.","Try removing the extra positional arguments, " + "or specifying the name for named arguments.");
        }
        return this.__$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED;
    }

    private static __$FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS : CompileTimeErrorCode;
    static get FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS() : CompileTimeErrorCode { 
        if (this.__$FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS===undefined) {
            this.__$FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS = new CompileTimeErrorCode('FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS',"The field '{0}' can't be initialized twice in the same constructor.","Try removing one of the initializations.");
        }
        return this.__$FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS;
    }

    private static __$FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER : CompileTimeErrorCode;
    static get FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER() : CompileTimeErrorCode { 
        if (this.__$FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER===undefined) {
            this.__$FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER = new CompileTimeErrorCode('FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER',"Fields can't be initialized in both the parameter list and the " + "initializers.","Try removing one of the initializations.");
        }
        return this.__$FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER;
    }

    private static __$FINAL_INITIALIZED_MULTIPLE_TIMES : CompileTimeErrorCode;
    static get FINAL_INITIALIZED_MULTIPLE_TIMES() : CompileTimeErrorCode { 
        if (this.__$FINAL_INITIALIZED_MULTIPLE_TIMES===undefined) {
            this.__$FINAL_INITIALIZED_MULTIPLE_TIMES = new CompileTimeErrorCode('FINAL_INITIALIZED_MULTIPLE_TIMES',"'{0}' is a final field and so can only be set once.","Try removing all but one of the initializations.");
        }
        return this.__$FINAL_INITIALIZED_MULTIPLE_TIMES;
    }

    private static __$FIELD_INITIALIZER_FACTORY_CONSTRUCTOR : CompileTimeErrorCode;
    static get FIELD_INITIALIZER_FACTORY_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$FIELD_INITIALIZER_FACTORY_CONSTRUCTOR===undefined) {
            this.__$FIELD_INITIALIZER_FACTORY_CONSTRUCTOR = new CompileTimeErrorCode('FIELD_INITIALIZER_FACTORY_CONSTRUCTOR',"Initializing formal parameters can't be used in factory constructors.","Try using a normal parameter.");
        }
        return this.__$FIELD_INITIALIZER_FACTORY_CONSTRUCTOR;
    }

    private static __$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR : CompileTimeErrorCode;
    static get FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR===undefined) {
            this.__$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR = new CompileTimeErrorCode('FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR',"Initializing formal parameters can only be used in constructors.","Try using a normal parameter.");
        }
        return this.__$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR;
    }

    private static __$FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR : CompileTimeErrorCode;
    static get FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR===undefined) {
            this.__$FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR = new CompileTimeErrorCode('FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR',"The redirecting constructor can't have a field initializer.","Try using a normal parameter.");
        }
        return this.__$FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR;
    }

    private static __$GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED;
    static get GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED() { 
        if (this.__$GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED===undefined) {
            this.__$GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED = new CompileTimeErrorCode('GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED',"Analysis of generic function typed parameters is not yet supported.","Try using an explicit typedef, or changing type parameters to " + "`dynamic`.");
        }
        return this.__$GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED;
    }

    private static __$GETTER_AND_METHOD_WITH_SAME_NAME : CompileTimeErrorCode;
    static get GETTER_AND_METHOD_WITH_SAME_NAME() : CompileTimeErrorCode { 
        if (this.__$GETTER_AND_METHOD_WITH_SAME_NAME===undefined) {
            this.__$GETTER_AND_METHOD_WITH_SAME_NAME = new CompileTimeErrorCode('GETTER_AND_METHOD_WITH_SAME_NAME',"'{0}' can't be used to name a getter, there is already a method " + "with the same name.","Try renaming either the getter or the method.");
        }
        return this.__$GETTER_AND_METHOD_WITH_SAME_NAME;
    }

    private static __$IMPLEMENTS_DEFERRED_CLASS : CompileTimeErrorCode;
    static get IMPLEMENTS_DEFERRED_CLASS() : CompileTimeErrorCode { 
        if (this.__$IMPLEMENTS_DEFERRED_CLASS===undefined) {
            this.__$IMPLEMENTS_DEFERRED_CLASS = new CompileTimeErrorCode('IMPLEMENTS_DEFERRED_CLASS',"This class can't implement the deferred class '{0}'.","Try specifying a different interface, " + "removing the class from the list, or " + "changing the import to not be deferred.");
        }
        return this.__$IMPLEMENTS_DEFERRED_CLASS;
    }

    private static __$IMPLEMENTS_DISALLOWED_CLASS : CompileTimeErrorCode;
    static get IMPLEMENTS_DISALLOWED_CLASS() : CompileTimeErrorCode { 
        if (this.__$IMPLEMENTS_DISALLOWED_CLASS===undefined) {
            this.__$IMPLEMENTS_DISALLOWED_CLASS = new CompileTimeErrorCode('IMPLEMENTS_DISALLOWED_CLASS',"Classes can't implement '{0}'.","Try specifying a different interface, or " + "remove the class from the list.");
        }
        return this.__$IMPLEMENTS_DISALLOWED_CLASS;
    }

    private static __$IMPLEMENTS_DYNAMIC : CompileTimeErrorCode;
    static get IMPLEMENTS_DYNAMIC() : CompileTimeErrorCode { 
        if (this.__$IMPLEMENTS_DYNAMIC===undefined) {
            this.__$IMPLEMENTS_DYNAMIC = new CompileTimeErrorCode('IMPLEMENTS_DYNAMIC',"Classes can't implement 'dynamic'.","Try specifying an interface, or remove 'dynamic' from the list.");
        }
        return this.__$IMPLEMENTS_DYNAMIC;
    }

    private static __$IMPLEMENTS_ENUM : CompileTimeErrorCode;
    static get IMPLEMENTS_ENUM() : CompileTimeErrorCode { 
        if (this.__$IMPLEMENTS_ENUM===undefined) {
            this.__$IMPLEMENTS_ENUM = new CompileTimeErrorCode('IMPLEMENTS_ENUM',"Classes can't implement an enum.","Try specifying an interface, or remove the enum from the list.");
        }
        return this.__$IMPLEMENTS_ENUM;
    }

    private static __$IMPLEMENTS_NON_CLASS : CompileTimeErrorCode;
    static get IMPLEMENTS_NON_CLASS() : CompileTimeErrorCode { 
        if (this.__$IMPLEMENTS_NON_CLASS===undefined) {
            this.__$IMPLEMENTS_NON_CLASS = new CompileTimeErrorCode('IMPLEMENTS_NON_CLASS',"Classes can only implement other classes.","Try specifying a class, or remove the name from the list.");
        }
        return this.__$IMPLEMENTS_NON_CLASS;
    }

    private static __$IMPLEMENTS_REPEATED : CompileTimeErrorCode;
    static get IMPLEMENTS_REPEATED() : CompileTimeErrorCode { 
        if (this.__$IMPLEMENTS_REPEATED===undefined) {
            this.__$IMPLEMENTS_REPEATED = new CompileTimeErrorCode('IMPLEMENTS_REPEATED',"'{0}' can only be implemented once.","Try removing all but one occurance of the class name.");
        }
        return this.__$IMPLEMENTS_REPEATED;
    }

    private static __$IMPLEMENTS_SUPER_CLASS : CompileTimeErrorCode;
    static get IMPLEMENTS_SUPER_CLASS() : CompileTimeErrorCode { 
        if (this.__$IMPLEMENTS_SUPER_CLASS===undefined) {
            this.__$IMPLEMENTS_SUPER_CLASS = new CompileTimeErrorCode('IMPLEMENTS_SUPER_CLASS',"'{0}' can't be used in both 'extends' and 'implements' clauses.","Try removing one of the occurances.");
        }
        return this.__$IMPLEMENTS_SUPER_CLASS;
    }

    private static __$IMPLICIT_THIS_REFERENCE_IN_INITIALIZER : CompileTimeErrorCode;
    static get IMPLICIT_THIS_REFERENCE_IN_INITIALIZER() : CompileTimeErrorCode { 
        if (this.__$IMPLICIT_THIS_REFERENCE_IN_INITIALIZER===undefined) {
            this.__$IMPLICIT_THIS_REFERENCE_IN_INITIALIZER = new CompileTimeErrorCode('IMPLICIT_THIS_REFERENCE_IN_INITIALIZER',"Only static members can be accessed in initializers.");
        }
        return this.__$IMPLICIT_THIS_REFERENCE_IN_INITIALIZER;
    }

    private static __$IMPORT_INTERNAL_LIBRARY : CompileTimeErrorCode;
    static get IMPORT_INTERNAL_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$IMPORT_INTERNAL_LIBRARY===undefined) {
            this.__$IMPORT_INTERNAL_LIBRARY = new CompileTimeErrorCode('IMPORT_INTERNAL_LIBRARY',"The library '{0}' is internal and can't be imported.");
        }
        return this.__$IMPORT_INTERNAL_LIBRARY;
    }

    private static __$IMPORT_OF_NON_LIBRARY : CompileTimeErrorCode;
    static get IMPORT_OF_NON_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$IMPORT_OF_NON_LIBRARY===undefined) {
            this.__$IMPORT_OF_NON_LIBRARY = new CompileTimeErrorCode('IMPORT_OF_NON_LIBRARY',"The imported library '{0}' can't have a part-of directive.","Try importing the library that the part is a part of.");
        }
        return this.__$IMPORT_OF_NON_LIBRARY;
    }

    private static __$INCONSISTENT_CASE_EXPRESSION_TYPES : CompileTimeErrorCode;
    static get INCONSISTENT_CASE_EXPRESSION_TYPES() : CompileTimeErrorCode { 
        if (this.__$INCONSISTENT_CASE_EXPRESSION_TYPES===undefined) {
            this.__$INCONSISTENT_CASE_EXPRESSION_TYPES = new CompileTimeErrorCode('INCONSISTENT_CASE_EXPRESSION_TYPES',"Case expressions must have the same types, '{0}' isn't a '{1}'.");
        }
        return this.__$INCONSISTENT_CASE_EXPRESSION_TYPES;
    }

    private static __$INITIALIZER_FOR_NON_EXISTENT_FIELD : CompileTimeErrorCode;
    static get INITIALIZER_FOR_NON_EXISTENT_FIELD() : CompileTimeErrorCode { 
        if (this.__$INITIALIZER_FOR_NON_EXISTENT_FIELD===undefined) {
            this.__$INITIALIZER_FOR_NON_EXISTENT_FIELD = new CompileTimeErrorCode('INITIALIZER_FOR_NON_EXISTENT_FIELD',"'{0}' isn't a field in the enclosing class.","Try correcting the name to match an existing field, or " + "defining a field named '{0}'.");
        }
        return this.__$INITIALIZER_FOR_NON_EXISTENT_FIELD;
    }

    private static __$INITIALIZER_FOR_STATIC_FIELD : CompileTimeErrorCode;
    static get INITIALIZER_FOR_STATIC_FIELD() : CompileTimeErrorCode { 
        if (this.__$INITIALIZER_FOR_STATIC_FIELD===undefined) {
            this.__$INITIALIZER_FOR_STATIC_FIELD = new CompileTimeErrorCode('INITIALIZER_FOR_STATIC_FIELD',"'{0}' is a static field in the enclosing class. Fields initialized " + "in a constructor can't be static.","Try removing the initialization.");
        }
        return this.__$INITIALIZER_FOR_STATIC_FIELD;
    }

    private static __$INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD : CompileTimeErrorCode;
    static get INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD() : CompileTimeErrorCode { 
        if (this.__$INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD===undefined) {
            this.__$INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD = new CompileTimeErrorCode('INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD',"'{0}' isn't a field in the enclosing class.","Try correcting the name to match an existing field, or " + "defining a field named '{0}'.");
        }
        return this.__$INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD;
    }

    private static __$INITIALIZING_FORMAL_FOR_STATIC_FIELD : CompileTimeErrorCode;
    static get INITIALIZING_FORMAL_FOR_STATIC_FIELD() : CompileTimeErrorCode { 
        if (this.__$INITIALIZING_FORMAL_FOR_STATIC_FIELD===undefined) {
            this.__$INITIALIZING_FORMAL_FOR_STATIC_FIELD = new CompileTimeErrorCode('INITIALIZING_FORMAL_FOR_STATIC_FIELD',"'{0}' is a static field in the enclosing class. Fields initialized " + "in a constructor can't be static.","Try removing the initialization.");
        }
        return this.__$INITIALIZING_FORMAL_FOR_STATIC_FIELD;
    }

    private static __$INSTANCE_MEMBER_ACCESS_FROM_FACTORY : CompileTimeErrorCode;
    static get INSTANCE_MEMBER_ACCESS_FROM_FACTORY() : CompileTimeErrorCode { 
        if (this.__$INSTANCE_MEMBER_ACCESS_FROM_FACTORY===undefined) {
            this.__$INSTANCE_MEMBER_ACCESS_FROM_FACTORY = new CompileTimeErrorCode('INSTANCE_MEMBER_ACCESS_FROM_FACTORY',"Instance members can't be accessed from a factory constructor.","Try removing the reference to the instance member.");
        }
        return this.__$INSTANCE_MEMBER_ACCESS_FROM_FACTORY;
    }

    private static __$INSTANCE_MEMBER_ACCESS_FROM_STATIC : CompileTimeErrorCode;
    static get INSTANCE_MEMBER_ACCESS_FROM_STATIC() : CompileTimeErrorCode { 
        if (this.__$INSTANCE_MEMBER_ACCESS_FROM_STATIC===undefined) {
            this.__$INSTANCE_MEMBER_ACCESS_FROM_STATIC = new CompileTimeErrorCode('INSTANCE_MEMBER_ACCESS_FROM_STATIC',"Instance members can't be accessed from a static method.","Try removing the reference to the instance member, or ." + "removing the keyword 'static' from the method.");
        }
        return this.__$INSTANCE_MEMBER_ACCESS_FROM_STATIC;
    }

    private static __$INSTANTIATE_ENUM : CompileTimeErrorCode;
    static get INSTANTIATE_ENUM() : CompileTimeErrorCode { 
        if (this.__$INSTANTIATE_ENUM===undefined) {
            this.__$INSTANTIATE_ENUM = new CompileTimeErrorCode('INSTANTIATE_ENUM',"Enums can't be instantiated.","Try using one of the defined constants.");
        }
        return this.__$INSTANTIATE_ENUM;
    }

    private static __$INVALID_ANNOTATION : CompileTimeErrorCode;
    static get INVALID_ANNOTATION() : CompileTimeErrorCode { 
        if (this.__$INVALID_ANNOTATION===undefined) {
            this.__$INVALID_ANNOTATION = new CompileTimeErrorCode('INVALID_ANNOTATION',"Annotation must be either a const variable reference or const " + "constructor invocation.");
        }
        return this.__$INVALID_ANNOTATION;
    }

    private static __$INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used as annotations.","Try removing the annotation, or " + "changing the import to not be deferred.");
        }
        return this.__$INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY;
    }

    private static __$INVALID_IDENTIFIER_IN_ASYNC : CompileTimeErrorCode;
    static get INVALID_IDENTIFIER_IN_ASYNC() : CompileTimeErrorCode { 
        if (this.__$INVALID_IDENTIFIER_IN_ASYNC===undefined) {
            this.__$INVALID_IDENTIFIER_IN_ASYNC = new CompileTimeErrorCode('INVALID_IDENTIFIER_IN_ASYNC',"The identifier '{0}' can't be used in a function marked with " + "'async', 'async*' or 'sync*'.","Try using a different name, or " + "remove the modifier on the function body.");
        }
        return this.__$INVALID_IDENTIFIER_IN_ASYNC;
    }

    private static __$INVALID_MODIFIER_ON_CONSTRUCTOR : CompileTimeErrorCode;
    static get INVALID_MODIFIER_ON_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$INVALID_MODIFIER_ON_CONSTRUCTOR===undefined) {
            this.__$INVALID_MODIFIER_ON_CONSTRUCTOR = new CompileTimeErrorCode('INVALID_MODIFIER_ON_CONSTRUCTOR',"The modifier '{0}' can't be applied to the body of a constructor.","Try removing the modifier.");
        }
        return this.__$INVALID_MODIFIER_ON_CONSTRUCTOR;
    }

    private static __$INVALID_MODIFIER_ON_SETTER : CompileTimeErrorCode;
    static get INVALID_MODIFIER_ON_SETTER() : CompileTimeErrorCode { 
        if (this.__$INVALID_MODIFIER_ON_SETTER===undefined) {
            this.__$INVALID_MODIFIER_ON_SETTER = new CompileTimeErrorCode('INVALID_MODIFIER_ON_SETTER',"The modifier '{0}' can't be applied to the body of a setter.","Try removing the modifier.");
        }
        return this.__$INVALID_MODIFIER_ON_SETTER;
    }

    private static __$INVALID_CONSTANT : CompileTimeErrorCode;
    static get INVALID_CONSTANT() : CompileTimeErrorCode { 
        if (this.__$INVALID_CONSTANT===undefined) {
            this.__$INVALID_CONSTANT = new CompileTimeErrorCode('INVALID_CONSTANT',"Invalid constant value.");
        }
        return this.__$INVALID_CONSTANT;
    }

    private static __$INVALID_CONSTRUCTOR_NAME : CompileTimeErrorCode;
    static get INVALID_CONSTRUCTOR_NAME() : CompileTimeErrorCode { 
        if (this.__$INVALID_CONSTRUCTOR_NAME===undefined) {
            this.__$INVALID_CONSTRUCTOR_NAME = new CompileTimeErrorCode('INVALID_CONSTRUCTOR_NAME',"Invalid constructor name.");
        }
        return this.__$INVALID_CONSTRUCTOR_NAME;
    }

    private static __$INVALID_FACTORY_NAME_NOT_A_CLASS : CompileTimeErrorCode;
    static get INVALID_FACTORY_NAME_NOT_A_CLASS() : CompileTimeErrorCode { 
        if (this.__$INVALID_FACTORY_NAME_NOT_A_CLASS===undefined) {
            this.__$INVALID_FACTORY_NAME_NOT_A_CLASS = new CompileTimeErrorCode('INVALID_FACTORY_NAME_NOT_A_CLASS',"The name of a factory constructor must be the same as the name of " + "the immediately enclosing class.");
        }
        return this.__$INVALID_FACTORY_NAME_NOT_A_CLASS;
    }

    private static __$INVALID_REFERENCE_TO_THIS : CompileTimeErrorCode;
    static get INVALID_REFERENCE_TO_THIS() : CompileTimeErrorCode { 
        if (this.__$INVALID_REFERENCE_TO_THIS===undefined) {
            this.__$INVALID_REFERENCE_TO_THIS = new CompileTimeErrorCode('INVALID_REFERENCE_TO_THIS',"Invalid reference to 'this' expression.");
        }
        return this.__$INVALID_REFERENCE_TO_THIS;
    }

    private static __$INVALID_TYPE_ARGUMENT_IN_CONST_LIST : CompileTimeErrorCode;
    static get INVALID_TYPE_ARGUMENT_IN_CONST_LIST() : CompileTimeErrorCode { 
        if (this.__$INVALID_TYPE_ARGUMENT_IN_CONST_LIST===undefined) {
            this.__$INVALID_TYPE_ARGUMENT_IN_CONST_LIST = new CompileTimeErrorCode('INVALID_TYPE_ARGUMENT_IN_CONST_LIST',"Constant list literals can't include a type parameter as a type " + "argument, such as '{0}'.","Try replacing the type parameter with a different type.");
        }
        return this.__$INVALID_TYPE_ARGUMENT_IN_CONST_LIST;
    }

    private static __$INVALID_TYPE_ARGUMENT_IN_CONST_MAP : CompileTimeErrorCode;
    static get INVALID_TYPE_ARGUMENT_IN_CONST_MAP() : CompileTimeErrorCode { 
        if (this.__$INVALID_TYPE_ARGUMENT_IN_CONST_MAP===undefined) {
            this.__$INVALID_TYPE_ARGUMENT_IN_CONST_MAP = new CompileTimeErrorCode('INVALID_TYPE_ARGUMENT_IN_CONST_MAP',"Constant map literals can't include a type parameter as a type " + "argument, such as '{0}'.","Try replacing the type parameter with a different type.");
        }
        return this.__$INVALID_TYPE_ARGUMENT_IN_CONST_MAP;
    }

    private static __$INVALID_USE_OF_COVARIANT : CompileTimeErrorCode;
    static get INVALID_USE_OF_COVARIANT() : CompileTimeErrorCode { 
        if (this.__$INVALID_USE_OF_COVARIANT===undefined) {
            this.__$INVALID_USE_OF_COVARIANT = new CompileTimeErrorCode('INVALID_USE_OF_COVARIANT',"The 'covariant' keyword can only be used for parameters in instance " + "methods or before non-final instance fields.","Try removing the 'covariant' keyword.");
        }
        return this.__$INVALID_USE_OF_COVARIANT;
    }

    private static __$INVALID_URI : CompileTimeErrorCode;
    static get INVALID_URI() : CompileTimeErrorCode { 
        if (this.__$INVALID_URI===undefined) {
            this.__$INVALID_URI = new CompileTimeErrorCode('INVALID_URI',"Invalid URI syntax: '{0}'.");
        }
        return this.__$INVALID_URI;
    }

    private static __$LABEL_IN_OUTER_SCOPE : CompileTimeErrorCode;
    static get LABEL_IN_OUTER_SCOPE() : CompileTimeErrorCode { 
        if (this.__$LABEL_IN_OUTER_SCOPE===undefined) {
            this.__$LABEL_IN_OUTER_SCOPE = new CompileTimeErrorCode('LABEL_IN_OUTER_SCOPE',"Can't reference label '{0}' declared in an outer method.");
        }
        return this.__$LABEL_IN_OUTER_SCOPE;
    }

    private static __$LABEL_UNDEFINED : CompileTimeErrorCode;
    static get LABEL_UNDEFINED() : CompileTimeErrorCode { 
        if (this.__$LABEL_UNDEFINED===undefined) {
            this.__$LABEL_UNDEFINED = new CompileTimeErrorCode('LABEL_UNDEFINED',"Can't reference undefined label '{0}'.","Try defining the label, or " + "correcting the name to match an existing label.");
        }
        return this.__$LABEL_UNDEFINED;
    }

    private static __$MEMBER_WITH_CLASS_NAME : CompileTimeErrorCode;
    static get MEMBER_WITH_CLASS_NAME() : CompileTimeErrorCode { 
        if (this.__$MEMBER_WITH_CLASS_NAME===undefined) {
            this.__$MEMBER_WITH_CLASS_NAME = new CompileTimeErrorCode('MEMBER_WITH_CLASS_NAME',"Class members can't have the same name as the enclosing class.");
        }
        return this.__$MEMBER_WITH_CLASS_NAME;
    }

    private static __$METHOD_AND_GETTER_WITH_SAME_NAME : CompileTimeErrorCode;
    static get METHOD_AND_GETTER_WITH_SAME_NAME() : CompileTimeErrorCode { 
        if (this.__$METHOD_AND_GETTER_WITH_SAME_NAME===undefined) {
            this.__$METHOD_AND_GETTER_WITH_SAME_NAME = new CompileTimeErrorCode('METHOD_AND_GETTER_WITH_SAME_NAME',"'{0}' can't be used to name a method, there is already a getter " + "with the same name.");
        }
        return this.__$METHOD_AND_GETTER_WITH_SAME_NAME;
    }

    private static __$MISSING_CONST_IN_LIST_LITERAL : CompileTimeErrorCode;
    static get MISSING_CONST_IN_LIST_LITERAL() : CompileTimeErrorCode { 
        if (this.__$MISSING_CONST_IN_LIST_LITERAL===undefined) {
            this.__$MISSING_CONST_IN_LIST_LITERAL = new CompileTimeErrorCode('MISSING_CONST_IN_LIST_LITERAL',"List literals must be prefixed with 'const' when used as a constant " + "expression.","Try adding the keyword 'const' before the literal.");
        }
        return this.__$MISSING_CONST_IN_LIST_LITERAL;
    }

    private static __$MISSING_CONST_IN_MAP_LITERAL : CompileTimeErrorCode;
    static get MISSING_CONST_IN_MAP_LITERAL() : CompileTimeErrorCode { 
        if (this.__$MISSING_CONST_IN_MAP_LITERAL===undefined) {
            this.__$MISSING_CONST_IN_MAP_LITERAL = new CompileTimeErrorCode('MISSING_CONST_IN_MAP_LITERAL',"Map literals must be prefixed with 'const' when used as a constant " + "expression.","Try adding the keyword 'const' before the literal.");
        }
        return this.__$MISSING_CONST_IN_MAP_LITERAL;
    }

    private static __$MIXIN_DECLARES_CONSTRUCTOR : CompileTimeErrorCode;
    static get MIXIN_DECLARES_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$MIXIN_DECLARES_CONSTRUCTOR===undefined) {
            this.__$MIXIN_DECLARES_CONSTRUCTOR = new CompileTimeErrorCode('MIXIN_DECLARES_CONSTRUCTOR',"The class '{0}' can't be used as a mixin because it declares a " + "constructor.");
        }
        return this.__$MIXIN_DECLARES_CONSTRUCTOR;
    }

    private static __$MIXIN_DEFERRED_CLASS : CompileTimeErrorCode;
    static get MIXIN_DEFERRED_CLASS() : CompileTimeErrorCode { 
        if (this.__$MIXIN_DEFERRED_CLASS===undefined) {
            this.__$MIXIN_DEFERRED_CLASS = new CompileTimeErrorCode('MIXIN_DEFERRED_CLASS',"This class can't mixin the deferred class '{0}'.","Try changing the import to not be deferred.");
        }
        return this.__$MIXIN_DEFERRED_CLASS;
    }

    private static __$MIXIN_HAS_NO_CONSTRUCTORS : CompileTimeErrorCode;
    static get MIXIN_HAS_NO_CONSTRUCTORS() : CompileTimeErrorCode { 
        if (this.__$MIXIN_HAS_NO_CONSTRUCTORS===undefined) {
            this.__$MIXIN_HAS_NO_CONSTRUCTORS = new CompileTimeErrorCode('MIXIN_HAS_NO_CONSTRUCTORS',"This mixin application is invalid because all of the constructors " + "in the base class '{0}' have optional parameters.");
        }
        return this.__$MIXIN_HAS_NO_CONSTRUCTORS;
    }

    private static __$MIXIN_INHERITS_FROM_NOT_OBJECT : CompileTimeErrorCode;
    static get MIXIN_INHERITS_FROM_NOT_OBJECT() : CompileTimeErrorCode { 
        if (this.__$MIXIN_INHERITS_FROM_NOT_OBJECT===undefined) {
            this.__$MIXIN_INHERITS_FROM_NOT_OBJECT = new CompileTimeErrorCode('MIXIN_INHERITS_FROM_NOT_OBJECT',"The class '{0}' can't be used as a mixin because it extends a class " + "other than Object.");
        }
        return this.__$MIXIN_INHERITS_FROM_NOT_OBJECT;
    }

    private static __$MIXIN_OF_DISALLOWED_CLASS : CompileTimeErrorCode;
    static get MIXIN_OF_DISALLOWED_CLASS() : CompileTimeErrorCode { 
        if (this.__$MIXIN_OF_DISALLOWED_CLASS===undefined) {
            this.__$MIXIN_OF_DISALLOWED_CLASS = new CompileTimeErrorCode('MIXIN_OF_DISALLOWED_CLASS',"Classes can't mixin '{0}'.");
        }
        return this.__$MIXIN_OF_DISALLOWED_CLASS;
    }

    private static __$MIXIN_OF_ENUM : CompileTimeErrorCode;
    static get MIXIN_OF_ENUM() : CompileTimeErrorCode { 
        if (this.__$MIXIN_OF_ENUM===undefined) {
            this.__$MIXIN_OF_ENUM = new CompileTimeErrorCode('MIXIN_OF_ENUM',"Classes can't mixin an enum.");
        }
        return this.__$MIXIN_OF_ENUM;
    }

    private static __$MIXIN_OF_NON_CLASS : CompileTimeErrorCode;
    static get MIXIN_OF_NON_CLASS() : CompileTimeErrorCode { 
        if (this.__$MIXIN_OF_NON_CLASS===undefined) {
            this.__$MIXIN_OF_NON_CLASS = new CompileTimeErrorCode('MIXIN_OF_NON_CLASS',"Classes can only mixin other classes.");
        }
        return this.__$MIXIN_OF_NON_CLASS;
    }

    private static __$MIXIN_REFERENCES_SUPER : CompileTimeErrorCode;
    static get MIXIN_REFERENCES_SUPER() : CompileTimeErrorCode { 
        if (this.__$MIXIN_REFERENCES_SUPER===undefined) {
            this.__$MIXIN_REFERENCES_SUPER = new CompileTimeErrorCode('MIXIN_REFERENCES_SUPER',"The class '{0}' can't be used as a mixin because it references " + "'super'.");
        }
        return this.__$MIXIN_REFERENCES_SUPER;
    }

    private static __$MIXIN_WITH_NON_CLASS_SUPERCLASS : CompileTimeErrorCode;
    static get MIXIN_WITH_NON_CLASS_SUPERCLASS() : CompileTimeErrorCode { 
        if (this.__$MIXIN_WITH_NON_CLASS_SUPERCLASS===undefined) {
            this.__$MIXIN_WITH_NON_CLASS_SUPERCLASS = new CompileTimeErrorCode('MIXIN_WITH_NON_CLASS_SUPERCLASS',"Mixin can only be applied to class.");
        }
        return this.__$MIXIN_WITH_NON_CLASS_SUPERCLASS;
    }

    private static __$MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS : CompileTimeErrorCode;
    static get MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS() : CompileTimeErrorCode { 
        if (this.__$MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS===undefined) {
            this.__$MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS = new CompileTimeErrorCode('MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS',"Constructors can have at most one 'this' redirection.","Try removing all but one of the redirections.");
        }
        return this.__$MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS;
    }

    private static __$MULTIPLE_SUPER_INITIALIZERS : CompileTimeErrorCode;
    static get MULTIPLE_SUPER_INITIALIZERS() : CompileTimeErrorCode { 
        if (this.__$MULTIPLE_SUPER_INITIALIZERS===undefined) {
            this.__$MULTIPLE_SUPER_INITIALIZERS = new CompileTimeErrorCode('MULTIPLE_SUPER_INITIALIZERS',"Constructor may have at most one 'super' initializer.","Try removing all but one of the 'super' initializers.");
        }
        return this.__$MULTIPLE_SUPER_INITIALIZERS;
    }

    private static __$NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS : CompileTimeErrorCode;
    static get NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS() : CompileTimeErrorCode { 
        if (this.__$NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS===undefined) {
            this.__$NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS = new CompileTimeErrorCode('NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS',"Annotation creation must have arguments.","Try adding an empty argument list.");
        }
        return this.__$NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS;
    }

    private static __$NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT : CompileTimeErrorCode;
    static get NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT() : CompileTimeErrorCode { 
        if (this.__$NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT===undefined) {
            this.__$NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT = new CompileTimeErrorCode('NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT',"The superclass '{0}' doesn't have a zero argument constructor.","Try declaring a zero argument constructor in '{0}', or " + "explicitly invoking a different constructor in '{0}'.");
        }
        return this.__$NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT;
    }

    private static __$NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT : CompileTimeErrorCode;
    static get NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT() : CompileTimeErrorCode { 
        if (this.__$NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT===undefined) {
            this.__$NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT = new CompileTimeErrorCode('NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT',"The superclass '{0}' doesn't have a zero argument constructor.","Try declaring a zero argument constructor in '{0}', or " + "declaring a constructor in {1} that explicitly invokes a " + "constructor in '{0}'.");
        }
        return this.__$NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT;
    }

    private static __$NON_CONST_MAP_AS_EXPRESSION_STATEMENT : CompileTimeErrorCode;
    static get NON_CONST_MAP_AS_EXPRESSION_STATEMENT() : CompileTimeErrorCode { 
        if (this.__$NON_CONST_MAP_AS_EXPRESSION_STATEMENT===undefined) {
            this.__$NON_CONST_MAP_AS_EXPRESSION_STATEMENT = new CompileTimeErrorCode('NON_CONST_MAP_AS_EXPRESSION_STATEMENT',"A non-constant map literal without type arguments can't be used as " + "an expression statement.");
        }
        return this.__$NON_CONST_MAP_AS_EXPRESSION_STATEMENT;
    }

    private static __$NON_CONSTANT_CASE_EXPRESSION : CompileTimeErrorCode;
    static get NON_CONSTANT_CASE_EXPRESSION() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_CASE_EXPRESSION===undefined) {
            this.__$NON_CONSTANT_CASE_EXPRESSION = new CompileTimeErrorCode('NON_CONSTANT_CASE_EXPRESSION',"Case expressions must be constant.");
        }
        return this.__$NON_CONSTANT_CASE_EXPRESSION;
    }

    private static __$NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used as a case " + "expression.","Try re-writing the switch as a series of if statements, or " + "changing the import to not be deferred.");
        }
        return this.__$NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY;
    }

    private static __$NON_CONSTANT_DEFAULT_VALUE : CompileTimeErrorCode;
    static get NON_CONSTANT_DEFAULT_VALUE() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_DEFAULT_VALUE===undefined) {
            this.__$NON_CONSTANT_DEFAULT_VALUE = new CompileTimeErrorCode('NON_CONSTANT_DEFAULT_VALUE',"Default values of an optional parameter must be constant.");
        }
        return this.__$NON_CONSTANT_DEFAULT_VALUE;
    }

    private static __$NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used as a default " + "parameter value.","Try leaving the default as null and initializing the parameter " + "inside the function body.");
        }
        return this.__$NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY;
    }

    private static __$NON_CONSTANT_LIST_ELEMENT : CompileTimeErrorCode;
    static get NON_CONSTANT_LIST_ELEMENT() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_LIST_ELEMENT===undefined) {
            this.__$NON_CONSTANT_LIST_ELEMENT = new CompileTimeErrorCode('NON_CONSTANT_LIST_ELEMENT',"The values in a const list literal must be constants.","Try removing the keyword 'const' from the map literal.");
        }
        return this.__$NON_CONSTANT_LIST_ELEMENT;
    }

    private static __$NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used as values in " + "a 'const' list.","Try removing the keyword 'const' from the list literal.");
        }
        return this.__$NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY;
    }

    private static __$NON_CONSTANT_MAP_KEY : CompileTimeErrorCode;
    static get NON_CONSTANT_MAP_KEY() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_MAP_KEY===undefined) {
            this.__$NON_CONSTANT_MAP_KEY = new CompileTimeErrorCode('NON_CONSTANT_MAP_KEY',"The keys in a const map literal must be constant.","Try removing the keyword 'const' from the map literal.");
        }
        return this.__$NON_CONSTANT_MAP_KEY;
    }

    private static __$NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used as keys in a " + "const map literal.","Try removing the keyword 'const' from the map literal.");
        }
        return this.__$NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY;
    }

    private static __$NON_CONSTANT_MAP_VALUE : CompileTimeErrorCode;
    static get NON_CONSTANT_MAP_VALUE() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_MAP_VALUE===undefined) {
            this.__$NON_CONSTANT_MAP_VALUE = new CompileTimeErrorCode('NON_CONSTANT_MAP_VALUE',"The values in a const map literal must be constant.","Try removing the keyword 'const' from the map literal.");
        }
        return this.__$NON_CONSTANT_MAP_VALUE;
    }

    private static __$NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used as values in " + "a const map literal.","Try removing the keyword 'const' from the map literal.");
        }
        return this.__$NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY;
    }

    private static __$NON_CONSTANT_ANNOTATION_CONSTRUCTOR : CompileTimeErrorCode;
    static get NON_CONSTANT_ANNOTATION_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_ANNOTATION_CONSTRUCTOR===undefined) {
            this.__$NON_CONSTANT_ANNOTATION_CONSTRUCTOR = new CompileTimeErrorCode('NON_CONSTANT_ANNOTATION_CONSTRUCTOR',"Annotation creation can only call a const constructor.");
        }
        return this.__$NON_CONSTANT_ANNOTATION_CONSTRUCTOR;
    }

    private static __$NON_CONSTANT_VALUE_IN_INITIALIZER : CompileTimeErrorCode;
    static get NON_CONSTANT_VALUE_IN_INITIALIZER() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_VALUE_IN_INITIALIZER===undefined) {
            this.__$NON_CONSTANT_VALUE_IN_INITIALIZER = new CompileTimeErrorCode('NON_CONSTANT_VALUE_IN_INITIALIZER',"Initializer expressions in constant constructors must be constants.");
        }
        return this.__$NON_CONSTANT_VALUE_IN_INITIALIZER;
    }

    private static __$NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY : CompileTimeErrorCode;
    static get NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY() : CompileTimeErrorCode { 
        if (this.__$NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY===undefined) {
            this.__$NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY = new CompileTimeErrorCode('NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY',"Constant values from a deferred library can't be used as constant " + "initializers.","Try changing the import to not be deferred.");
        }
        return this.__$NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY;
    }

    private static __$NOT_ENOUGH_REQUIRED_ARGUMENTS : CompileTimeErrorCode;
    static get NOT_ENOUGH_REQUIRED_ARGUMENTS() : CompileTimeErrorCode { 
        if (this.__$NOT_ENOUGH_REQUIRED_ARGUMENTS===undefined) {
            this.__$NOT_ENOUGH_REQUIRED_ARGUMENTS = new CompileTimeErrorCode('NOT_ENOUGH_REQUIRED_ARGUMENTS',"{0} required argument(s) expected, but {1} found.","Try adding the missing arguments.");
        }
        return this.__$NOT_ENOUGH_REQUIRED_ARGUMENTS;
    }

    private static __$NON_GENERATIVE_CONSTRUCTOR : CompileTimeErrorCode;
    static get NON_GENERATIVE_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$NON_GENERATIVE_CONSTRUCTOR===undefined) {
            this.__$NON_GENERATIVE_CONSTRUCTOR = new CompileTimeErrorCode('NON_GENERATIVE_CONSTRUCTOR',"The generative constructor '{0}' expected, but factory found.","Try calling a different constructor in the superclass, or " + "making the called constructor not be a factory constructor.");
        }
        return this.__$NON_GENERATIVE_CONSTRUCTOR;
    }

    private static __$OBJECT_CANNOT_EXTEND_ANOTHER_CLASS : CompileTimeErrorCode;
    static get OBJECT_CANNOT_EXTEND_ANOTHER_CLASS() : CompileTimeErrorCode { 
        if (this.__$OBJECT_CANNOT_EXTEND_ANOTHER_CLASS===undefined) {
            this.__$OBJECT_CANNOT_EXTEND_ANOTHER_CLASS = new CompileTimeErrorCode('OBJECT_CANNOT_EXTEND_ANOTHER_CLASS',"The class 'Object' can't extend any other class.");
        }
        return this.__$OBJECT_CANNOT_EXTEND_ANOTHER_CLASS;
    }

    private static __$OPTIONAL_PARAMETER_IN_OPERATOR : CompileTimeErrorCode;
    static get OPTIONAL_PARAMETER_IN_OPERATOR() : CompileTimeErrorCode { 
        if (this.__$OPTIONAL_PARAMETER_IN_OPERATOR===undefined) {
            this.__$OPTIONAL_PARAMETER_IN_OPERATOR = new CompileTimeErrorCode('OPTIONAL_PARAMETER_IN_OPERATOR',"Optional parameters aren't allowed when defining an operator.","Try removing the optional parameters.");
        }
        return this.__$OPTIONAL_PARAMETER_IN_OPERATOR;
    }

    private static __$PART_OF_NON_PART : CompileTimeErrorCode;
    static get PART_OF_NON_PART() : CompileTimeErrorCode { 
        if (this.__$PART_OF_NON_PART===undefined) {
            this.__$PART_OF_NON_PART = new CompileTimeErrorCode('PART_OF_NON_PART',"The included part '{0}' must have a part-of directive.","Try adding a part-of directive to '{0}'.");
        }
        return this.__$PART_OF_NON_PART;
    }

    private static __$PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER : CompileTimeErrorCode;
    static get PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER() : CompileTimeErrorCode { 
        if (this.__$PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER===undefined) {
            this.__$PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER = new CompileTimeErrorCode('PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER',"The name '{0}' is already used as an import prefix and can't be " + "used to name a top-level element.","Try renaming either the top-level element or the prefix.");
        }
        return this.__$PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER;
    }

    private static __$PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT : CompileTimeErrorCode;
    static get PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT() : CompileTimeErrorCode { 
        if (this.__$PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT===undefined) {
            this.__$PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT = new CompileTimeErrorCode('PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT',"The name '{0}' refers to an import prefix, so it must be followed " + "by '.'.","Try correcting the name to refer to something other than a prefix, or " + "renaming the prefix.");
        }
        return this.__$PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT;
    }

    private static __$PRIVATE_COLLISION_IN_MIXIN_APPLICATION : CompileTimeErrorCode;
    static get PRIVATE_COLLISION_IN_MIXIN_APPLICATION() : CompileTimeErrorCode { 
        if (this.__$PRIVATE_COLLISION_IN_MIXIN_APPLICATION===undefined) {
            this.__$PRIVATE_COLLISION_IN_MIXIN_APPLICATION = new CompileTimeErrorCode('PRIVATE_COLLISION_IN_MIXIN_APPLICATION',"The private name {0}, defined by {1}, conflicts with the same name " + "defined by {2}.","Try removing {1} from the 'with' clause.");
        }
        return this.__$PRIVATE_COLLISION_IN_MIXIN_APPLICATION;
    }

    private static __$PRIVATE_OPTIONAL_PARAMETER : CompileTimeErrorCode;
    static get PRIVATE_OPTIONAL_PARAMETER() : CompileTimeErrorCode { 
        if (this.__$PRIVATE_OPTIONAL_PARAMETER===undefined) {
            this.__$PRIVATE_OPTIONAL_PARAMETER = new CompileTimeErrorCode('PRIVATE_OPTIONAL_PARAMETER',"Named optional parameters can't start with an underscore.");
        }
        return this.__$PRIVATE_OPTIONAL_PARAMETER;
    }

    private static __$RECURSIVE_COMPILE_TIME_CONSTANT : CompileTimeErrorCode;
    static get RECURSIVE_COMPILE_TIME_CONSTANT() : CompileTimeErrorCode { 
        if (this.__$RECURSIVE_COMPILE_TIME_CONSTANT===undefined) {
            this.__$RECURSIVE_COMPILE_TIME_CONSTANT = new CompileTimeErrorCode('RECURSIVE_COMPILE_TIME_CONSTANT',"Compile-time constant expression depends on itself.");
        }
        return this.__$RECURSIVE_COMPILE_TIME_CONSTANT;
    }

    private static __$RECURSIVE_CONSTRUCTOR_REDIRECT : CompileTimeErrorCode;
    static get RECURSIVE_CONSTRUCTOR_REDIRECT() : CompileTimeErrorCode { 
        if (this.__$RECURSIVE_CONSTRUCTOR_REDIRECT===undefined) {
            this.__$RECURSIVE_CONSTRUCTOR_REDIRECT = new CompileTimeErrorCode('RECURSIVE_CONSTRUCTOR_REDIRECT',"Cycle in redirecting generative constructors.");
        }
        return this.__$RECURSIVE_CONSTRUCTOR_REDIRECT;
    }

    private static __$RECURSIVE_FACTORY_REDIRECT : CompileTimeErrorCode;
    static get RECURSIVE_FACTORY_REDIRECT() : CompileTimeErrorCode { 
        if (this.__$RECURSIVE_FACTORY_REDIRECT===undefined) {
            this.__$RECURSIVE_FACTORY_REDIRECT = new CompileTimeErrorCode('RECURSIVE_FACTORY_REDIRECT',"Cycle in redirecting factory constructors.");
        }
        return this.__$RECURSIVE_FACTORY_REDIRECT;
    }

    private static __$RECURSIVE_INTERFACE_INHERITANCE : CompileTimeErrorCode;
    static get RECURSIVE_INTERFACE_INHERITANCE() : CompileTimeErrorCode { 
        if (this.__$RECURSIVE_INTERFACE_INHERITANCE===undefined) {
            this.__$RECURSIVE_INTERFACE_INHERITANCE = new CompileTimeErrorCode('RECURSIVE_INTERFACE_INHERITANCE',"'{0}' can't be a superinterface of itself: {1}.");
        }
        return this.__$RECURSIVE_INTERFACE_INHERITANCE;
    }

    private static __$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS : CompileTimeErrorCode;
    static get RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS() : CompileTimeErrorCode { 
        if (this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS===undefined) {
            this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS = new CompileTimeErrorCode('RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS',"'{0}' can't extend itself.");
        }
        return this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS;
    }

    private static __$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS : CompileTimeErrorCode;
    static get RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS() : CompileTimeErrorCode { 
        if (this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS===undefined) {
            this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS = new CompileTimeErrorCode('RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS',"'{0}' can't implement itself.");
        }
        return this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS;
    }

    private static __$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH : CompileTimeErrorCode;
    static get RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH() : CompileTimeErrorCode { 
        if (this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH===undefined) {
            this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH = new CompileTimeErrorCode('RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH',"'{0}' can't use itself as a mixin.");
        }
        return this.__$RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH;
    }

    private static __$REDIRECT_TO_MISSING_CONSTRUCTOR : CompileTimeErrorCode;
    static get REDIRECT_TO_MISSING_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$REDIRECT_TO_MISSING_CONSTRUCTOR===undefined) {
            this.__$REDIRECT_TO_MISSING_CONSTRUCTOR = new CompileTimeErrorCode('REDIRECT_TO_MISSING_CONSTRUCTOR',"The constructor '{0}' couldn't be found in '{1}'.","Try redirecting to a different constructor, or " + "define the constructor named '{0}'.");
        }
        return this.__$REDIRECT_TO_MISSING_CONSTRUCTOR;
    }

    private static __$REDIRECT_TO_NON_CLASS : CompileTimeErrorCode;
    static get REDIRECT_TO_NON_CLASS() : CompileTimeErrorCode { 
        if (this.__$REDIRECT_TO_NON_CLASS===undefined) {
            this.__$REDIRECT_TO_NON_CLASS = new CompileTimeErrorCode('REDIRECT_TO_NON_CLASS',"The name '{0}' isn't a type and can't be used in a redirected " + "constructor.","Try redirecting to a different constructor.");
        }
        return this.__$REDIRECT_TO_NON_CLASS;
    }

    private static __$REDIRECT_TO_NON_CONST_CONSTRUCTOR : CompileTimeErrorCode;
    static get REDIRECT_TO_NON_CONST_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$REDIRECT_TO_NON_CONST_CONSTRUCTOR===undefined) {
            this.__$REDIRECT_TO_NON_CONST_CONSTRUCTOR = new CompileTimeErrorCode('REDIRECT_TO_NON_CONST_CONSTRUCTOR',"Constant factory constructor can't delegate to a non-constant " + "constructor.","Try redirecting to a different constructor.");
        }
        return this.__$REDIRECT_TO_NON_CONST_CONSTRUCTOR;
    }

    private static __$REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR : CompileTimeErrorCode;
    static get REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR===undefined) {
            this.__$REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR = new CompileTimeErrorCode('REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR',"The constructor '{0}' couldn't be found in '{1}'.","Try redirecting to a different constructor, or " + "defining the constructor named '{0}'.");
        }
        return this.__$REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR;
    }

    private static __$REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR : CompileTimeErrorCode;
    static get REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR===undefined) {
            this.__$REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR = new CompileTimeErrorCode('REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR',"Generative constructor can't redirect to a factory constructor.","Try redirecting to a different constructor.");
        }
        return this.__$REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR;
    }

    private static __$REFERENCED_BEFORE_DECLARATION : CompileTimeErrorCode;
    static get REFERENCED_BEFORE_DECLARATION() : CompileTimeErrorCode { 
        if (this.__$REFERENCED_BEFORE_DECLARATION===undefined) {
            this.__$REFERENCED_BEFORE_DECLARATION = new CompileTimeErrorCode('REFERENCED_BEFORE_DECLARATION',"Local variable '{0}' can't be referenced before it is declared.","Try moving the declaration to before the first use, or " + "renaming the local variable so that it doesn't hide a name from an " + "enclosing scope.");
        }
        return this.__$REFERENCED_BEFORE_DECLARATION;
    }

    private static __$RETHROW_OUTSIDE_CATCH : CompileTimeErrorCode;
    static get RETHROW_OUTSIDE_CATCH() : CompileTimeErrorCode { 
        if (this.__$RETHROW_OUTSIDE_CATCH===undefined) {
            this.__$RETHROW_OUTSIDE_CATCH = new CompileTimeErrorCode('RETHROW_OUTSIDE_CATCH',"Rethrow must be inside of catch clause.","Try moving the expression into a catch clause, or using a 'throw' " + "expression.");
        }
        return this.__$RETHROW_OUTSIDE_CATCH;
    }

    private static __$RETURN_IN_GENERATIVE_CONSTRUCTOR : CompileTimeErrorCode;
    static get RETURN_IN_GENERATIVE_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$RETURN_IN_GENERATIVE_CONSTRUCTOR===undefined) {
            this.__$RETURN_IN_GENERATIVE_CONSTRUCTOR = new CompileTimeErrorCode('RETURN_IN_GENERATIVE_CONSTRUCTOR',"Constructors can't return values.","Try removing the return statement or using a factory constructor.");
        }
        return this.__$RETURN_IN_GENERATIVE_CONSTRUCTOR;
    }

    private static __$RETURN_IN_GENERATOR : CompileTimeErrorCode;
    static get RETURN_IN_GENERATOR() : CompileTimeErrorCode { 
        if (this.__$RETURN_IN_GENERATOR===undefined) {
            this.__$RETURN_IN_GENERATOR = new CompileTimeErrorCode('RETURN_IN_GENERATOR',"Can't return a value from a generator function (using the '{0}' modifier).","Try removing the value, replacing 'return' with 'yield' or changing the " + "method body modifier.");
        }
        return this.__$RETURN_IN_GENERATOR;
    }

    private static __$SHARED_DEFERRED_PREFIX : CompileTimeErrorCode;
    static get SHARED_DEFERRED_PREFIX() : CompileTimeErrorCode { 
        if (this.__$SHARED_DEFERRED_PREFIX===undefined) {
            this.__$SHARED_DEFERRED_PREFIX = new CompileTimeErrorCode('SHARED_DEFERRED_PREFIX',"The prefix of a deferred import can't be used in other import " + "directives.","Try renaming one of the prefixes.");
        }
        return this.__$SHARED_DEFERRED_PREFIX;
    }

    private static __$SUPER_IN_INVALID_CONTEXT : CompileTimeErrorCode;
    static get SUPER_IN_INVALID_CONTEXT() : CompileTimeErrorCode { 
        if (this.__$SUPER_IN_INVALID_CONTEXT===undefined) {
            this.__$SUPER_IN_INVALID_CONTEXT = new CompileTimeErrorCode('SUPER_IN_INVALID_CONTEXT',"Invalid context for 'super' invocation.");
        }
        return this.__$SUPER_IN_INVALID_CONTEXT;
    }

    private static __$SUPER_IN_REDIRECTING_CONSTRUCTOR : CompileTimeErrorCode;
    static get SUPER_IN_REDIRECTING_CONSTRUCTOR() : CompileTimeErrorCode { 
        if (this.__$SUPER_IN_REDIRECTING_CONSTRUCTOR===undefined) {
            this.__$SUPER_IN_REDIRECTING_CONSTRUCTOR = new CompileTimeErrorCode('SUPER_IN_REDIRECTING_CONSTRUCTOR',"The redirecting constructor can't have a 'super' initializer.");
        }
        return this.__$SUPER_IN_REDIRECTING_CONSTRUCTOR;
    }

    private static __$SUPER_INITIALIZER_IN_OBJECT : CompileTimeErrorCode;
    static get SUPER_INITIALIZER_IN_OBJECT() : CompileTimeErrorCode { 
        if (this.__$SUPER_INITIALIZER_IN_OBJECT===undefined) {
            this.__$SUPER_INITIALIZER_IN_OBJECT = new CompileTimeErrorCode('SUPER_INITIALIZER_IN_OBJECT',"The class 'Object' can't invoke a constructor from a superclass.");
        }
        return this.__$SUPER_INITIALIZER_IN_OBJECT;
    }

    private static __$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS : CompileTimeErrorCode;
    static get TYPE_ARGUMENT_NOT_MATCHING_BOUNDS() : CompileTimeErrorCode { 
        if (this.__$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS===undefined) {
            this.__$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS = new CompileTimeErrorCode('TYPE_ARGUMENT_NOT_MATCHING_BOUNDS',"'{0}' doesn't extend '{1}'.","Try using a type that is or is a subclass of '{1}'.");
        }
        return this.__$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS;
    }

    private static __$TYPE_ALIAS_CANNOT_REFERENCE_ITSELF : CompileTimeErrorCode;
    static get TYPE_ALIAS_CANNOT_REFERENCE_ITSELF() : CompileTimeErrorCode { 
        if (this.__$TYPE_ALIAS_CANNOT_REFERENCE_ITSELF===undefined) {
            this.__$TYPE_ALIAS_CANNOT_REFERENCE_ITSELF = new CompileTimeErrorCode('TYPE_ALIAS_CANNOT_REFERENCE_ITSELF',"Typedefs can't reference themselves directly or recursively via " + "another typedef.");
        }
        return this.__$TYPE_ALIAS_CANNOT_REFERENCE_ITSELF;
    }

    private static __$UNDEFINED_CLASS : CompileTimeErrorCode;
    static get UNDEFINED_CLASS() : CompileTimeErrorCode { 
        if (this.__$UNDEFINED_CLASS===undefined) {
            this.__$UNDEFINED_CLASS = new CompileTimeErrorCode('UNDEFINED_CLASS',"Undefined class '{0}'.","Try defining the class.");
        }
        return this.__$UNDEFINED_CLASS;
    }

    private static __$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER : CompileTimeErrorCode;
    static get UNDEFINED_CONSTRUCTOR_IN_INITIALIZER() : CompileTimeErrorCode { 
        if (this.__$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER===undefined) {
            this.__$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER = new CompileTimeErrorCode('UNDEFINED_CONSTRUCTOR_IN_INITIALIZER',"The class '{0}' doesn't have a constructor named '{1}'.","Try defining a constructor named '{1}' in '{0}', or " + "invoking a different constructor.");
        }
        return this.__$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER;
    }

    private static __$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT : CompileTimeErrorCode;
    static get UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT() : CompileTimeErrorCode { 
        if (this.__$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT===undefined) {
            this.__$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT = new CompileTimeErrorCode('UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT',"The class '{0}' doesn't have an unnamed constructor.","Try defining an unnamed constructor in '{0}', or " + "invoking a different constructor.");
        }
        return this.__$UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT;
    }

    private static __$UNDEFINED_NAMED_PARAMETER : CompileTimeErrorCode;
    static get UNDEFINED_NAMED_PARAMETER() : CompileTimeErrorCode { 
        if (this.__$UNDEFINED_NAMED_PARAMETER===undefined) {
            this.__$UNDEFINED_NAMED_PARAMETER = new CompileTimeErrorCode('UNDEFINED_NAMED_PARAMETER',"The named parameter '{0}' isn't defined.","Try correcting the name to an existing named parameter's name, or " + "defining a named parameter with the name '{0}'.");
        }
        return this.__$UNDEFINED_NAMED_PARAMETER;
    }

    private static __$URI_DOES_NOT_EXIST : CompileTimeErrorCode;
    static get URI_DOES_NOT_EXIST() : CompileTimeErrorCode { 
        if (this.__$URI_DOES_NOT_EXIST===undefined) {
            this.__$URI_DOES_NOT_EXIST = new CompileTimeErrorCode('URI_DOES_NOT_EXIST',"Target of URI doesn't exist: '{0}'.","Try creating the file referenced by the URI, or " + "try using a URI for a file that does exist.");
        }
        return this.__$URI_DOES_NOT_EXIST;
    }

    private static __$URI_HAS_NOT_BEEN_GENERATED : CompileTimeErrorCode;
    static get URI_HAS_NOT_BEEN_GENERATED() : CompileTimeErrorCode { 
        if (this.__$URI_HAS_NOT_BEEN_GENERATED===undefined) {
            this.__$URI_HAS_NOT_BEEN_GENERATED = new CompileTimeErrorCode('URI_HAS_NOT_BEEN_GENERATED',"Target of URI hasn't been generated: '{0}'.","Try running the generator that will generate the file referenced by " + "the URI.");
        }
        return this.__$URI_HAS_NOT_BEEN_GENERATED;
    }

    private static __$URI_WITH_INTERPOLATION : CompileTimeErrorCode;
    static get URI_WITH_INTERPOLATION() : CompileTimeErrorCode { 
        if (this.__$URI_WITH_INTERPOLATION===undefined) {
            this.__$URI_WITH_INTERPOLATION = new CompileTimeErrorCode('URI_WITH_INTERPOLATION',"URIs can't use string interpolation.");
        }
        return this.__$URI_WITH_INTERPOLATION;
    }

    private static __$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR : CompileTimeErrorCode;
    static get WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR() : CompileTimeErrorCode { 
        if (this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR===undefined) {
            this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR = new CompileTimeErrorCode('WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR',"Operator '{0}' should declare exactly {1} parameter(s), but {2} found.");
        }
        return this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR;
    }

    private static __$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS : CompileTimeErrorCode;
    static get WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS() : CompileTimeErrorCode { 
        if (this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS===undefined) {
            this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS = new CompileTimeErrorCode('WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS',"Operator '-' should declare 0 or 1 parameter, but {0} found.");
        }
        return this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS;
    }

    private static __$WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER : CompileTimeErrorCode;
    static get WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER() : CompileTimeErrorCode { 
        if (this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER===undefined) {
            this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER = new CompileTimeErrorCode('WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER',"Setters should declare exactly one required parameter.");
        }
        return this.__$WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER;
    }

    private static __$YIELD_EACH_IN_NON_GENERATOR : CompileTimeErrorCode;
    static get YIELD_EACH_IN_NON_GENERATOR() : CompileTimeErrorCode { 
        if (this.__$YIELD_EACH_IN_NON_GENERATOR===undefined) {
            this.__$YIELD_EACH_IN_NON_GENERATOR = new CompileTimeErrorCode('YIELD_EACH_IN_NON_GENERATOR',"Yield-each statements must be in a generator function " + "(one marked with either 'async*' or 'sync*').","Try adding 'async*' or 'sync*' to the enclosing function.");
        }
        return this.__$YIELD_EACH_IN_NON_GENERATOR;
    }

    private static __$YIELD_IN_NON_GENERATOR : CompileTimeErrorCode;
    static get YIELD_IN_NON_GENERATOR() : CompileTimeErrorCode { 
        if (this.__$YIELD_IN_NON_GENERATOR===undefined) {
            this.__$YIELD_IN_NON_GENERATOR = new CompileTimeErrorCode('YIELD_IN_NON_GENERATOR',"Yield statements must be in a generator function " + "(one marked with either 'async*' or 'sync*').","Try adding 'async*' or 'sync*' to the enclosing function.");
        }
        return this.__$YIELD_IN_NON_GENERATOR;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    CompileTimeErrorCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorType.COMPILE_TIME_ERROR.severity;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.COMPILE_TIME_ERROR;
    }
}

export namespace StaticTypeWarningCode {
    export type Constructors = 'StaticTypeWarningCode';
    export type Interface = Omit<StaticTypeWarningCode, Constructors>;
}
@DartClass
export class StaticTypeWarningCode extends any {
    private static __$EXPECTED_ONE_LIST_TYPE_ARGUMENTS : StaticTypeWarningCode;
    static get EXPECTED_ONE_LIST_TYPE_ARGUMENTS() : StaticTypeWarningCode { 
        if (this.__$EXPECTED_ONE_LIST_TYPE_ARGUMENTS===undefined) {
            this.__$EXPECTED_ONE_LIST_TYPE_ARGUMENTS = new StaticTypeWarningCode('EXPECTED_ONE_LIST_TYPE_ARGUMENTS',"List literals require exactly one type argument or none, " + "but {0} found.","Try adjusting the number of type arguments.");
        }
        return this.__$EXPECTED_ONE_LIST_TYPE_ARGUMENTS;
    }

    private static __$EXPECTED_TWO_MAP_TYPE_ARGUMENTS : StaticTypeWarningCode;
    static get EXPECTED_TWO_MAP_TYPE_ARGUMENTS() : StaticTypeWarningCode { 
        if (this.__$EXPECTED_TWO_MAP_TYPE_ARGUMENTS===undefined) {
            this.__$EXPECTED_TWO_MAP_TYPE_ARGUMENTS = new StaticTypeWarningCode('EXPECTED_TWO_MAP_TYPE_ARGUMENTS',"Map literals require exactly two type arguments or none, " + "but {0} found.","Try adjusting the number of type arguments.");
        }
        return this.__$EXPECTED_TWO_MAP_TYPE_ARGUMENTS;
    }

    private static __$ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE : StaticTypeWarningCode;
    static get ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE() : StaticTypeWarningCode { 
        if (this.__$ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE===undefined) {
            this.__$ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE = new StaticTypeWarningCode('ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE',"Functions marked 'async*' must have a return type assignable to " + "'Stream'.","Try fixing the return type of the function, or " + "removing the modifier 'async*' from the function body.");
        }
        return this.__$ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE;
    }

    private static __$ILLEGAL_ASYNC_RETURN_TYPE : StaticTypeWarningCode;
    static get ILLEGAL_ASYNC_RETURN_TYPE() : StaticTypeWarningCode { 
        if (this.__$ILLEGAL_ASYNC_RETURN_TYPE===undefined) {
            this.__$ILLEGAL_ASYNC_RETURN_TYPE = new StaticTypeWarningCode('ILLEGAL_ASYNC_RETURN_TYPE',"Functions marked 'async' must have a return type assignable to " + "'Future'.","Try fixing the return type of the function, or " + "removing the modifier 'async' from the function body.");
        }
        return this.__$ILLEGAL_ASYNC_RETURN_TYPE;
    }

    private static __$ILLEGAL_SYNC_GENERATOR_RETURN_TYPE : StaticTypeWarningCode;
    static get ILLEGAL_SYNC_GENERATOR_RETURN_TYPE() : StaticTypeWarningCode { 
        if (this.__$ILLEGAL_SYNC_GENERATOR_RETURN_TYPE===undefined) {
            this.__$ILLEGAL_SYNC_GENERATOR_RETURN_TYPE = new StaticTypeWarningCode('ILLEGAL_SYNC_GENERATOR_RETURN_TYPE',"Functions marked 'sync*' must have a return type assignable to 'Iterable'.","Try fixing the return type of the function, or " + "removing the modifier 'sync*' from the function body.");
        }
        return this.__$ILLEGAL_SYNC_GENERATOR_RETURN_TYPE;
    }

    private static __$INCONSISTENT_METHOD_INHERITANCE : StaticTypeWarningCode;
    static get INCONSISTENT_METHOD_INHERITANCE() : StaticTypeWarningCode { 
        if (this.__$INCONSISTENT_METHOD_INHERITANCE===undefined) {
            this.__$INCONSISTENT_METHOD_INHERITANCE = new StaticTypeWarningCode('INCONSISTENT_METHOD_INHERITANCE',"Inconsistent declarations of '{0}' are inherited from {1}.","Try adjusting the supertypes of this class to remove the " + "inconsistency.");
        }
        return this.__$INCONSISTENT_METHOD_INHERITANCE;
    }

    private static __$INSTANCE_ACCESS_TO_STATIC_MEMBER : StaticTypeWarningCode;
    static get INSTANCE_ACCESS_TO_STATIC_MEMBER() : StaticTypeWarningCode { 
        if (this.__$INSTANCE_ACCESS_TO_STATIC_MEMBER===undefined) {
            this.__$INSTANCE_ACCESS_TO_STATIC_MEMBER = new StaticTypeWarningCode('INSTANCE_ACCESS_TO_STATIC_MEMBER',"Static {1} '{0}' can't be accessed through an instance.","Try using the class '{2}' to access the {1}.");
        }
        return this.__$INSTANCE_ACCESS_TO_STATIC_MEMBER;
    }

    private static __$INVALID_ASSIGNMENT : StaticTypeWarningCode;
    static get INVALID_ASSIGNMENT() : StaticTypeWarningCode { 
        if (this.__$INVALID_ASSIGNMENT===undefined) {
            this.__$INVALID_ASSIGNMENT = new StaticTypeWarningCode('INVALID_ASSIGNMENT',"A value of type '{0}' can't be assigned to a variable of type '{1}'.","Try changing the type of the variable, or " + "casting the right-hand type to '{1}'.");
        }
        return this.__$INVALID_ASSIGNMENT;
    }

    private static __$INVOCATION_OF_NON_FUNCTION : StaticTypeWarningCode;
    static get INVOCATION_OF_NON_FUNCTION() : StaticTypeWarningCode { 
        if (this.__$INVOCATION_OF_NON_FUNCTION===undefined) {
            this.__$INVOCATION_OF_NON_FUNCTION = new StaticTypeWarningCode('INVOCATION_OF_NON_FUNCTION',"'{0}' isn't a function.","Try correcting the name to match an existing function, or " + "define a method or function named '{0}'.");
        }
        return this.__$INVOCATION_OF_NON_FUNCTION;
    }

    private static __$INVOCATION_OF_NON_FUNCTION_EXPRESSION : StaticTypeWarningCode;
    static get INVOCATION_OF_NON_FUNCTION_EXPRESSION() : StaticTypeWarningCode { 
        if (this.__$INVOCATION_OF_NON_FUNCTION_EXPRESSION===undefined) {
            this.__$INVOCATION_OF_NON_FUNCTION_EXPRESSION = new StaticTypeWarningCode('INVOCATION_OF_NON_FUNCTION_EXPRESSION',"The expression doesn't evaluate to a function, so it can't invoked.");
        }
        return this.__$INVOCATION_OF_NON_FUNCTION_EXPRESSION;
    }

    private static __$NON_BOOL_CONDITION : StaticTypeWarningCode;
    static get NON_BOOL_CONDITION() : StaticTypeWarningCode { 
        if (this.__$NON_BOOL_CONDITION===undefined) {
            this.__$NON_BOOL_CONDITION = new StaticTypeWarningCode('NON_BOOL_CONDITION',"Conditions must have a static type of 'bool'.","Try changing the condition.");
        }
        return this.__$NON_BOOL_CONDITION;
    }

    private static __$NON_BOOL_EXPRESSION : StaticTypeWarningCode;
    static get NON_BOOL_EXPRESSION() : StaticTypeWarningCode { 
        if (this.__$NON_BOOL_EXPRESSION===undefined) {
            this.__$NON_BOOL_EXPRESSION = new StaticTypeWarningCode('NON_BOOL_EXPRESSION',"Assertions must be on either a 'bool' or '() -> bool'.","Try changing the expression.");
        }
        return this.__$NON_BOOL_EXPRESSION;
    }

    private static __$NON_BOOL_NEGATION_EXPRESSION : StaticTypeWarningCode;
    static get NON_BOOL_NEGATION_EXPRESSION() : StaticTypeWarningCode { 
        if (this.__$NON_BOOL_NEGATION_EXPRESSION===undefined) {
            this.__$NON_BOOL_NEGATION_EXPRESSION = new StaticTypeWarningCode('NON_BOOL_NEGATION_EXPRESSION',"Negation argument must have a static type of 'bool'.","Try changing the argument to the '!' operator.");
        }
        return this.__$NON_BOOL_NEGATION_EXPRESSION;
    }

    private static __$NON_BOOL_OPERAND : StaticTypeWarningCode;
    static get NON_BOOL_OPERAND() : StaticTypeWarningCode { 
        if (this.__$NON_BOOL_OPERAND===undefined) {
            this.__$NON_BOOL_OPERAND = new StaticTypeWarningCode('NON_BOOL_OPERAND',"The operands of the '{0}' operator must be assignable to 'bool'.");
        }
        return this.__$NON_BOOL_OPERAND;
    }

    private static __$NON_NULLABLE_FIELD_NOT_INITIALIZED : StaticTypeWarningCode;
    static get NON_NULLABLE_FIELD_NOT_INITIALIZED() : StaticTypeWarningCode { 
        if (this.__$NON_NULLABLE_FIELD_NOT_INITIALIZED===undefined) {
            this.__$NON_NULLABLE_FIELD_NOT_INITIALIZED = new StaticTypeWarningCode('NON_NULLABLE_FIELD_NOT_INITIALIZED',"Variable '{0}' of non-nullable type '{1}' must be initialized.","Try adding an initializer to the declaration, or " + "making the variable nullable by adding a '?' after the type name.");
        }
        return this.__$NON_NULLABLE_FIELD_NOT_INITIALIZED;
    }

    private static __$NON_TYPE_AS_TYPE_ARGUMENT : StaticTypeWarningCode;
    static get NON_TYPE_AS_TYPE_ARGUMENT() : StaticTypeWarningCode { 
        if (this.__$NON_TYPE_AS_TYPE_ARGUMENT===undefined) {
            this.__$NON_TYPE_AS_TYPE_ARGUMENT = new StaticTypeWarningCode('NON_TYPE_AS_TYPE_ARGUMENT',"The name '{0}' isn't a type so it can't be used as a type argument.","Try correcting the name to an existing type, or " + "defining a type named '{0}'.");
        }
        return this.__$NON_TYPE_AS_TYPE_ARGUMENT;
    }

    private static __$RETURN_OF_INVALID_TYPE : StaticTypeWarningCode;
    static get RETURN_OF_INVALID_TYPE() : StaticTypeWarningCode { 
        if (this.__$RETURN_OF_INVALID_TYPE===undefined) {
            this.__$RETURN_OF_INVALID_TYPE = new StaticTypeWarningCode('RETURN_OF_INVALID_TYPE',"The return type '{0}' isn't a '{1}', as defined by the method '{2}'.");
        }
        return this.__$RETURN_OF_INVALID_TYPE;
    }

    private static __$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS : StaticTypeWarningCode;
    static get TYPE_ARGUMENT_NOT_MATCHING_BOUNDS() : StaticTypeWarningCode { 
        if (this.__$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS===undefined) {
            this.__$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS = new StaticTypeWarningCode('TYPE_ARGUMENT_NOT_MATCHING_BOUNDS',"'{0}' doesn't extend '{1}'.","Try using a type that is or is a subclass of '{1}'.");
        }
        return this.__$TYPE_ARGUMENT_NOT_MATCHING_BOUNDS;
    }

    private static __$TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND : StaticTypeWarningCode;
    static get TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND() : StaticTypeWarningCode { 
        if (this.__$TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND===undefined) {
            this.__$TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND = new StaticTypeWarningCode('TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND',"'{0}' can't be a supertype of its upper bound.","Try using a type that is or is a subclass of '{1}'.");
        }
        return this.__$TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND;
    }

    private static __$UNDEFINED_ENUM_CONSTANT : StaticTypeWarningCode;
    static get UNDEFINED_ENUM_CONSTANT() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_ENUM_CONSTANT===undefined) {
            this.__$UNDEFINED_ENUM_CONSTANT = new StaticTypeWarningCode('UNDEFINED_ENUM_CONSTANT',"There is no constant named '{0}' in '{1}'.","Try correcting the name to the name of an existing constant, or " + "defining a constant named '{0}'.");
        }
        return this.__$UNDEFINED_ENUM_CONSTANT;
    }

    private static __$UNDEFINED_FUNCTION : StaticTypeWarningCode;
    static get UNDEFINED_FUNCTION() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_FUNCTION===undefined) {
            this.__$UNDEFINED_FUNCTION = new StaticTypeWarningCode('UNDEFINED_FUNCTION',"The function '{0}' isn't defined.","Try importing the library that defines '{0}', " + "correcting the name to the name of an existing function, or " + "defining a funtion named '{0}'.");
        }
        return this.__$UNDEFINED_FUNCTION;
    }

    private static __$UNDEFINED_GETTER : StaticTypeWarningCode;
    static get UNDEFINED_GETTER() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_GETTER===undefined) {
            this.__$UNDEFINED_GETTER = new StaticTypeWarningCode('UNDEFINED_GETTER',"The getter '{0}' isn't defined for the class '{1}'.","Try importing the library that defines '{0}', " + "correcting the name to the name of an existing getter, or " + "defining a getter or field named '{0}'.");
        }
        return this.__$UNDEFINED_GETTER;
    }

    private static __$UNDEFINED_METHOD : StaticTypeWarningCode;
    static get UNDEFINED_METHOD() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_METHOD===undefined) {
            this.__$UNDEFINED_METHOD = new StaticTypeWarningCode('UNDEFINED_METHOD',"The method '{0}' isn't defined for the class '{1}'.","Try correcting the name to the name of an existing method, or " + "defining a method named '{0}'.");
        }
        return this.__$UNDEFINED_METHOD;
    }

    private static __$UNDEFINED_METHOD_WITH_CONSTRUCTOR : StaticTypeWarningCode;
    static get UNDEFINED_METHOD_WITH_CONSTRUCTOR() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_METHOD_WITH_CONSTRUCTOR===undefined) {
            this.__$UNDEFINED_METHOD_WITH_CONSTRUCTOR = new StaticTypeWarningCode('UNDEFINED_METHOD_WITH_CONSTRUCTOR',"The method '{0}' isn't defined for the class '{1}', but a constructor with that name is defined.","Try adding 'new' or 'const' to invoke the constructor, or " + "correcting the name to the name of an existing method.");
        }
        return this.__$UNDEFINED_METHOD_WITH_CONSTRUCTOR;
    }

    private static __$UNDEFINED_OPERATOR : StaticTypeWarningCode;
    static get UNDEFINED_OPERATOR() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_OPERATOR===undefined) {
            this.__$UNDEFINED_OPERATOR = new StaticTypeWarningCode('UNDEFINED_OPERATOR',"The operator '{0}' isn't defined for the class '{1}'.","Try defining the operator '{0}'.");
        }
        return this.__$UNDEFINED_OPERATOR;
    }

    private static __$UNDEFINED_SETTER : StaticTypeWarningCode;
    static get UNDEFINED_SETTER() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_SETTER===undefined) {
            this.__$UNDEFINED_SETTER = new StaticTypeWarningCode('UNDEFINED_SETTER',"The setter '{0}' isn't defined for the class '{1}'.","Try importing the library that defines '{0}', " + "correcting the name to the name of an existing setter, or " + "defining a setter or field named '{0}'.");
        }
        return this.__$UNDEFINED_SETTER;
    }

    private static __$UNDEFINED_SUPER_GETTER : StaticTypeWarningCode;
    static get UNDEFINED_SUPER_GETTER() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_SUPER_GETTER===undefined) {
            this.__$UNDEFINED_SUPER_GETTER = new StaticTypeWarningCode('UNDEFINED_SUPER_GETTER',"The getter '{0}' isn't defined in a superclass of '{1}'.","Try correcting the name to the name of an existing getter, or " + "defining a getter or field named '{0}' in a superclass.");
        }
        return this.__$UNDEFINED_SUPER_GETTER;
    }

    private static __$UNDEFINED_SUPER_METHOD : StaticTypeWarningCode;
    static get UNDEFINED_SUPER_METHOD() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_SUPER_METHOD===undefined) {
            this.__$UNDEFINED_SUPER_METHOD = new StaticTypeWarningCode('UNDEFINED_SUPER_METHOD',"The method '{0}' isn't defined in a superclass of '{1}'.","Try correcting the name to the name of an existing method, or " + "defining a method named '{0}' in a superclass.");
        }
        return this.__$UNDEFINED_SUPER_METHOD;
    }

    private static __$UNDEFINED_SUPER_OPERATOR : StaticTypeWarningCode;
    static get UNDEFINED_SUPER_OPERATOR() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_SUPER_OPERATOR===undefined) {
            this.__$UNDEFINED_SUPER_OPERATOR = new StaticTypeWarningCode('UNDEFINED_SUPER_OPERATOR',"The operator '{0}' isn't defined in a superclass of '{1}'.","Try defining the operator '{0}' in a superclass.");
        }
        return this.__$UNDEFINED_SUPER_OPERATOR;
    }

    private static __$UNDEFINED_SUPER_SETTER : StaticTypeWarningCode;
    static get UNDEFINED_SUPER_SETTER() : StaticTypeWarningCode { 
        if (this.__$UNDEFINED_SUPER_SETTER===undefined) {
            this.__$UNDEFINED_SUPER_SETTER = new StaticTypeWarningCode('UNDEFINED_SUPER_SETTER',"The setter '{0}' isn't defined in a superclass of '{1}'.","Try correcting the name to the name of an existing setter, or " + "defining a setter or field named '{0}' in a superclass.");
        }
        return this.__$UNDEFINED_SUPER_SETTER;
    }

    private static __$UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER : StaticTypeWarningCode;
    static get UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER() : StaticTypeWarningCode { 
        if (this.__$UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER===undefined) {
            this.__$UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER = new StaticTypeWarningCode('UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER',"Static members from supertypes must be qualified by the name of the defining type.","Try adding '{0}.' before the name.");
        }
        return this.__$UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER;
    }

    private static __$WRONG_NUMBER_OF_TYPE_ARGUMENTS : StaticTypeWarningCode;
    static get WRONG_NUMBER_OF_TYPE_ARGUMENTS() : StaticTypeWarningCode { 
        if (this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS===undefined) {
            this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS = new StaticTypeWarningCode('WRONG_NUMBER_OF_TYPE_ARGUMENTS',"The type '{0}' is declared with {1} type parameters, " + "but {2} type arguments were given.","Try adjusting the number of type arguments.");
        }
        return this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS;
    }

    private static __$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD : StaticTypeWarningCode;
    static get WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD() : StaticTypeWarningCode { 
        if (this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD===undefined) {
            this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD = new StaticTypeWarningCode('WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD',"The method '{0}' is declared with {1} type parameters, " + "but {2} type arguments were given.","Try adjusting the number of type arguments.");
        }
        return this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD;
    }

    private static __$YIELD_OF_INVALID_TYPE : StaticTypeWarningCode;
    static get YIELD_OF_INVALID_TYPE() : StaticTypeWarningCode { 
        if (this.__$YIELD_OF_INVALID_TYPE===undefined) {
            this.__$YIELD_OF_INVALID_TYPE = new StaticTypeWarningCode('YIELD_OF_INVALID_TYPE',"The type '{0}' implied by the 'yield' expression must be assignable " + "to '{1}'.");
        }
        return this.__$YIELD_OF_INVALID_TYPE;
    }

    private static __$FOR_IN_OF_INVALID_TYPE : StaticTypeWarningCode;
    static get FOR_IN_OF_INVALID_TYPE() : StaticTypeWarningCode { 
        if (this.__$FOR_IN_OF_INVALID_TYPE===undefined) {
            this.__$FOR_IN_OF_INVALID_TYPE = new StaticTypeWarningCode('FOR_IN_OF_INVALID_TYPE',"The type '{0}' used in the 'for' loop must implement {1}.");
        }
        return this.__$FOR_IN_OF_INVALID_TYPE;
    }

    private static __$FOR_IN_OF_INVALID_ELEMENT_TYPE : StaticTypeWarningCode;
    static get FOR_IN_OF_INVALID_ELEMENT_TYPE() : StaticTypeWarningCode { 
        if (this.__$FOR_IN_OF_INVALID_ELEMENT_TYPE===undefined) {
            this.__$FOR_IN_OF_INVALID_ELEMENT_TYPE = new StaticTypeWarningCode('FOR_IN_OF_INVALID_ELEMENT_TYPE',"The type '{0}' used in the 'for' loop must implement {1} with a " + "type argument that can be assigned to '{2}'.");
        }
        return this.__$FOR_IN_OF_INVALID_ELEMENT_TYPE;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    StaticTypeWarningCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorType.STATIC_TYPE_WARNING.severity;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.STATIC_TYPE_WARNING;
    }
}

export namespace StaticWarningCode {
    export type Constructors = 'StaticWarningCode';
    export type Interface = Omit<StaticWarningCode, Constructors>;
}
@DartClass
export class StaticWarningCode extends any {
    private static __$AMBIGUOUS_IMPORT : StaticWarningCode;
    static get AMBIGUOUS_IMPORT() : StaticWarningCode { 
        if (this.__$AMBIGUOUS_IMPORT===undefined) {
            this.__$AMBIGUOUS_IMPORT = new StaticWarningCode('AMBIGUOUS_IMPORT',"The name '{0}' is defined in the libraries {1}.","Try using 'as prefix' for one of the import directives, or " + "hiding the name from all but one of the imports.");
        }
        return this.__$AMBIGUOUS_IMPORT;
    }

    private static __$ARGUMENT_TYPE_NOT_ASSIGNABLE : StaticWarningCode;
    static get ARGUMENT_TYPE_NOT_ASSIGNABLE() : StaticWarningCode { 
        if (this.__$ARGUMENT_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$ARGUMENT_TYPE_NOT_ASSIGNABLE = new StaticWarningCode('ARGUMENT_TYPE_NOT_ASSIGNABLE',"The argument type '{0}' can't be assigned to the parameter type '{1}'.");
        }
        return this.__$ARGUMENT_TYPE_NOT_ASSIGNABLE;
    }

    private static __$ASSIGNMENT_TO_CONST : StaticWarningCode;
    static get ASSIGNMENT_TO_CONST() : StaticWarningCode { 
        if (this.__$ASSIGNMENT_TO_CONST===undefined) {
            this.__$ASSIGNMENT_TO_CONST = new StaticWarningCode('ASSIGNMENT_TO_CONST',"Constant variables can't be assigned a value.","Try removing the assignment, or " + "remove the modifier 'const' from the variable.");
        }
        return this.__$ASSIGNMENT_TO_CONST;
    }

    private static __$ASSIGNMENT_TO_FINAL : StaticWarningCode;
    static get ASSIGNMENT_TO_FINAL() : StaticWarningCode { 
        if (this.__$ASSIGNMENT_TO_FINAL===undefined) {
            this.__$ASSIGNMENT_TO_FINAL = new StaticWarningCode('ASSIGNMENT_TO_FINAL',"'{0}' can't be used as a setter because it is final.","Try finding a different setter, or making '{0}' non-final.");
        }
        return this.__$ASSIGNMENT_TO_FINAL;
    }

    private static __$ASSIGNMENT_TO_FINAL_NO_SETTER : StaticWarningCode;
    static get ASSIGNMENT_TO_FINAL_NO_SETTER() : StaticWarningCode { 
        if (this.__$ASSIGNMENT_TO_FINAL_NO_SETTER===undefined) {
            this.__$ASSIGNMENT_TO_FINAL_NO_SETTER = new StaticWarningCode('ASSIGNMENT_TO_FINAL_NO_SETTER',"No setter named '{0}' in class '{1}'.","Try correcting the name to reference an existing setter, or " + "declare the setter.");
        }
        return this.__$ASSIGNMENT_TO_FINAL_NO_SETTER;
    }

    private static __$ASSIGNMENT_TO_FUNCTION : StaticWarningCode;
    static get ASSIGNMENT_TO_FUNCTION() : StaticWarningCode { 
        if (this.__$ASSIGNMENT_TO_FUNCTION===undefined) {
            this.__$ASSIGNMENT_TO_FUNCTION = new StaticWarningCode('ASSIGNMENT_TO_FUNCTION',"Functions can't be assigned a value.");
        }
        return this.__$ASSIGNMENT_TO_FUNCTION;
    }

    private static __$ASSIGNMENT_TO_METHOD : StaticWarningCode;
    static get ASSIGNMENT_TO_METHOD() : StaticWarningCode { 
        if (this.__$ASSIGNMENT_TO_METHOD===undefined) {
            this.__$ASSIGNMENT_TO_METHOD = new StaticWarningCode('ASSIGNMENT_TO_METHOD',"Methods can't be assigned a value.");
        }
        return this.__$ASSIGNMENT_TO_METHOD;
    }

    private static __$ASSIGNMENT_TO_TYPE : StaticWarningCode;
    static get ASSIGNMENT_TO_TYPE() : StaticWarningCode { 
        if (this.__$ASSIGNMENT_TO_TYPE===undefined) {
            this.__$ASSIGNMENT_TO_TYPE = new StaticWarningCode('ASSIGNMENT_TO_TYPE',"Types can't be assigned a value.");
        }
        return this.__$ASSIGNMENT_TO_TYPE;
    }

    private static __$CASE_BLOCK_NOT_TERMINATED : StaticWarningCode;
    static get CASE_BLOCK_NOT_TERMINATED() : StaticWarningCode { 
        if (this.__$CASE_BLOCK_NOT_TERMINATED===undefined) {
            this.__$CASE_BLOCK_NOT_TERMINATED = new StaticWarningCode('CASE_BLOCK_NOT_TERMINATED',"The last statement of the 'case' should be 'break', 'continue', " + "'rethrow', 'return' or 'throw'.","Try adding one of the required statements.");
        }
        return this.__$CASE_BLOCK_NOT_TERMINATED;
    }

    private static __$CAST_TO_NON_TYPE : StaticWarningCode;
    static get CAST_TO_NON_TYPE() : StaticWarningCode { 
        if (this.__$CAST_TO_NON_TYPE===undefined) {
            this.__$CAST_TO_NON_TYPE = new StaticWarningCode('CAST_TO_NON_TYPE',"The name '{0}' isn't a type, so it can't be used in an 'as' expression.","Try changing the name to the name of an existing type, or " + "creating a type with the name '{0}'.");
        }
        return this.__$CAST_TO_NON_TYPE;
    }

    private static __$CONCRETE_CLASS_WITH_ABSTRACT_MEMBER : StaticWarningCode;
    static get CONCRETE_CLASS_WITH_ABSTRACT_MEMBER() : StaticWarningCode { 
        if (this.__$CONCRETE_CLASS_WITH_ABSTRACT_MEMBER===undefined) {
            this.__$CONCRETE_CLASS_WITH_ABSTRACT_MEMBER = new StaticWarningCode('CONCRETE_CLASS_WITH_ABSTRACT_MEMBER',"'{0}' must have a method body because '{1}' isn't abstract.","Try making '{1}' abstract, or adding a body to '{0}'.");
        }
        return this.__$CONCRETE_CLASS_WITH_ABSTRACT_MEMBER;
    }

    private static __$CONFLICTING_DART_IMPORT : StaticWarningCode;
    static get CONFLICTING_DART_IMPORT() : StaticWarningCode { 
        if (this.__$CONFLICTING_DART_IMPORT===undefined) {
            this.__$CONFLICTING_DART_IMPORT = new StaticWarningCode('CONFLICTING_DART_IMPORT',"Element '{0}' from SDK library '{1}' is implicitly hidden by '{2}'.","Try adding an explicit hide combinator.");
        }
        return this.__$CONFLICTING_DART_IMPORT;
    }

    private static __$CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER : StaticWarningCode;
    static get CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER() : StaticWarningCode { 
        if (this.__$CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER===undefined) {
            this.__$CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER = new StaticWarningCode('CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER',"Superclass '{0}' declares static member with the same name.","Try renaming either the getter or the static member.");
        }
        return this.__$CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER;
    }

    private static __$CONFLICTING_INSTANCE_METHOD_SETTER : StaticWarningCode;
    static get CONFLICTING_INSTANCE_METHOD_SETTER() : StaticWarningCode { 
        if (this.__$CONFLICTING_INSTANCE_METHOD_SETTER===undefined) {
            this.__$CONFLICTING_INSTANCE_METHOD_SETTER = new StaticWarningCode('CONFLICTING_INSTANCE_METHOD_SETTER',"Class '{0}' declares instance method '{1}', " + "but also has a setter with the same name from '{2}'.","Try renaming either the method or the setter.");
        }
        return this.__$CONFLICTING_INSTANCE_METHOD_SETTER;
    }

    private static __$CONFLICTING_INSTANCE_METHOD_SETTER2 : StaticWarningCode;
    static get CONFLICTING_INSTANCE_METHOD_SETTER2() : StaticWarningCode { 
        if (this.__$CONFLICTING_INSTANCE_METHOD_SETTER2===undefined) {
            this.__$CONFLICTING_INSTANCE_METHOD_SETTER2 = new StaticWarningCode('CONFLICTING_INSTANCE_METHOD_SETTER2',"Class '{0}' declares the setter '{1}', " + "but also has an instance method in the same class.","Try renaming either the method or the setter.");
        }
        return this.__$CONFLICTING_INSTANCE_METHOD_SETTER2;
    }

    private static __$CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER : StaticWarningCode;
    static get CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER() : StaticWarningCode { 
        if (this.__$CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER===undefined) {
            this.__$CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER = new StaticWarningCode('CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER',"Superclass '{0}' declares a static member with the same name.","Try renaming either the setter or the inherited member.");
        }
        return this.__$CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER;
    }

    private static __$CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER : StaticWarningCode;
    static get CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER() : StaticWarningCode { 
        if (this.__$CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER===undefined) {
            this.__$CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER = new StaticWarningCode('CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER',"Class '{0}' declares non-static setter with the same name.","Try renaming either the getter or the setter.");
        }
        return this.__$CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER;
    }

    private static __$CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER : StaticWarningCode;
    static get CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER() : StaticWarningCode { 
        if (this.__$CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER===undefined) {
            this.__$CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER = new StaticWarningCode('CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER',"Class '{0}' declares non-static member with the same name.","Try renaming either the inherited member or the setter.");
        }
        return this.__$CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER;
    }

    private static __$CONST_WITH_ABSTRACT_CLASS : StaticWarningCode;
    static get CONST_WITH_ABSTRACT_CLASS() : StaticWarningCode { 
        if (this.__$CONST_WITH_ABSTRACT_CLASS===undefined) {
            this.__$CONST_WITH_ABSTRACT_CLASS = new StaticWarningCode('CONST_WITH_ABSTRACT_CLASS',"Abstract classes can't be created with a 'const' expression.","Try creating an instance of a subtype.");
        }
        return this.__$CONST_WITH_ABSTRACT_CLASS;
    }

    private static __$EQUAL_KEYS_IN_MAP : StaticWarningCode;
    static get EQUAL_KEYS_IN_MAP() : StaticWarningCode { 
        if (this.__$EQUAL_KEYS_IN_MAP===undefined) {
            this.__$EQUAL_KEYS_IN_MAP = new StaticWarningCode('EQUAL_KEYS_IN_MAP',"Two keys in a map literal can't be equal.");
        }
        return this.__$EQUAL_KEYS_IN_MAP;
    }

    private static __$EXPORT_DUPLICATED_LIBRARY_NAMED : StaticWarningCode;
    static get EXPORT_DUPLICATED_LIBRARY_NAMED() : StaticWarningCode { 
        if (this.__$EXPORT_DUPLICATED_LIBRARY_NAMED===undefined) {
            this.__$EXPORT_DUPLICATED_LIBRARY_NAMED = new StaticWarningCode('EXPORT_DUPLICATED_LIBRARY_NAMED',"The exported libraries '{0}' and '{1}' can't have the same name '{2}'.","Try adding a hide clause to one of the export directives.");
        }
        return this.__$EXPORT_DUPLICATED_LIBRARY_NAMED;
    }

    private static __$EXTRA_POSITIONAL_ARGUMENTS : StaticWarningCode;
    static get EXTRA_POSITIONAL_ARGUMENTS() : StaticWarningCode { 
        if (this.__$EXTRA_POSITIONAL_ARGUMENTS===undefined) {
            this.__$EXTRA_POSITIONAL_ARGUMENTS = new StaticWarningCode('EXTRA_POSITIONAL_ARGUMENTS',"Too many positional arguments: {0} expected, but {1} found.","Try removing the extra positional arguments.");
        }
        return this.__$EXTRA_POSITIONAL_ARGUMENTS;
    }

    private static __$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED : StaticWarningCode;
    static get EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED() : StaticWarningCode { 
        if (this.__$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED===undefined) {
            this.__$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED = new StaticWarningCode('EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED',"Too many positional arguments: {0} expected, but {1} found.","Try removing the extra positional arguments, " + "or specifying the name for named arguments.");
        }
        return this.__$EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED;
    }

    private static __$FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION : StaticWarningCode;
    static get FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION() : StaticWarningCode { 
        if (this.__$FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION===undefined) {
            this.__$FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION = new StaticWarningCode('FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION',"Fields can't be initialized in the constructor if they are final " + "and have already been initialized at their declaration.","Try removing one of the initializations.");
        }
        return this.__$FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION;
    }

    private static __$FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR : StaticWarningCode;
    static get FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR() : StaticWarningCode { 
        if (this.__$FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR===undefined) {
            this.__$FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR = new StaticWarningCode('FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR',"'{0}' is final and was given a value when it was declared, " + "so it can't be set to a new value.","Try removing one of the initializations.");
        }
        return this.__$FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR;
    }

    private static __$FIELD_INITIALIZER_NOT_ASSIGNABLE : StaticWarningCode;
    static get FIELD_INITIALIZER_NOT_ASSIGNABLE() : StaticWarningCode { 
        if (this.__$FIELD_INITIALIZER_NOT_ASSIGNABLE===undefined) {
            this.__$FIELD_INITIALIZER_NOT_ASSIGNABLE = new StaticWarningCode('FIELD_INITIALIZER_NOT_ASSIGNABLE',"The initializer type '{0}' can't be assigned to the field type '{1}'.");
        }
        return this.__$FIELD_INITIALIZER_NOT_ASSIGNABLE;
    }

    private static __$FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE : StaticWarningCode;
    static get FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE() : StaticWarningCode { 
        if (this.__$FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE===undefined) {
            this.__$FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE = new StaticWarningCode('FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE',"The parameter type '{0}' is incompatible with the field type '{1}'.","Try changing or removing the parameter's type, or " + "changing the field's type.");
        }
        return this.__$FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE;
    }

    private static __$FINAL_NOT_INITIALIZED : StaticWarningCode;
    static get FINAL_NOT_INITIALIZED() : StaticWarningCode { 
        if (this.__$FINAL_NOT_INITIALIZED===undefined) {
            this.__$FINAL_NOT_INITIALIZED = new StaticWarningCode('FINAL_NOT_INITIALIZED',"The final variable '{0}' must be initialized.","Try initializing the variable.",false);
        }
        return this.__$FINAL_NOT_INITIALIZED;
    }

    private static __$FINAL_NOT_INITIALIZED_CONSTRUCTOR_1 : StaticWarningCode;
    static get FINAL_NOT_INITIALIZED_CONSTRUCTOR_1() : StaticWarningCode { 
        if (this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_1===undefined) {
            this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_1 = new StaticWarningCode('FINAL_NOT_INITIALIZED_CONSTRUCTOR_1',"The final variable '{0}' must be initialized.","Try adding an initializer for the field.",false);
        }
        return this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_1;
    }

    private static __$FINAL_NOT_INITIALIZED_CONSTRUCTOR_2 : StaticWarningCode;
    static get FINAL_NOT_INITIALIZED_CONSTRUCTOR_2() : StaticWarningCode { 
        if (this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_2===undefined) {
            this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_2 = new StaticWarningCode('FINAL_NOT_INITIALIZED_CONSTRUCTOR_2',"The final variables '{0}' and '{1}' must be initialized.","Try adding initializers for the fields.",false);
        }
        return this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_2;
    }

    private static __$FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS : StaticWarningCode;
    static get FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS() : StaticWarningCode { 
        if (this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS===undefined) {
            this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS = new StaticWarningCode('FINAL_NOT_INITIALIZED_CONSTRUCTOR_3',"The final variables '{0}', '{1}' and '{2}' more must be initialized.","Try adding initializers for the fields.",false);
        }
        return this.__$FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS;
    }

    private static __$FUNCTION_WITHOUT_CALL : StaticWarningCode;
    static get FUNCTION_WITHOUT_CALL() : StaticWarningCode { 
        if (this.__$FUNCTION_WITHOUT_CALL===undefined) {
            this.__$FUNCTION_WITHOUT_CALL = new StaticWarningCode('FUNCTION_WITHOUT_CALL',"Concrete classes that implement 'Function' must implement the method 'call'.","Try implementing a 'call' method, or don't implement 'Function'.");
        }
        return this.__$FUNCTION_WITHOUT_CALL;
    }

    private static __$IMPORT_DUPLICATED_LIBRARY_NAMED : StaticWarningCode;
    static get IMPORT_DUPLICATED_LIBRARY_NAMED() : StaticWarningCode { 
        if (this.__$IMPORT_DUPLICATED_LIBRARY_NAMED===undefined) {
            this.__$IMPORT_DUPLICATED_LIBRARY_NAMED = new StaticWarningCode('IMPORT_DUPLICATED_LIBRARY_NAMED',"The imported libraries '{0}' and '{1}' can't have the same name '{2}'.","Try adding a hide clause to one of the imports.");
        }
        return this.__$IMPORT_DUPLICATED_LIBRARY_NAMED;
    }

    private static __$IMPORT_OF_NON_LIBRARY : StaticWarningCode;
    static get IMPORT_OF_NON_LIBRARY() : StaticWarningCode { 
        if (this.__$IMPORT_OF_NON_LIBRARY===undefined) {
            this.__$IMPORT_OF_NON_LIBRARY = new StaticWarningCode('IMPORT_OF_NON_LIBRARY',"The imported library '{0}' can't have a part-of directive.","Try importing the library that the part is a part of.");
        }
        return this.__$IMPORT_OF_NON_LIBRARY;
    }

    private static __$INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD : StaticWarningCode;
    static get INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD() : StaticWarningCode { 
        if (this.__$INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD===undefined) {
            this.__$INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD = new StaticWarningCode('INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD',"'{0}' is inherited as a getter and also a method.","Try adjusting the supertypes of this class to remove the " + "inconsistency.");
        }
        return this.__$INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD;
    }

    private static __$INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC : StaticWarningCode;
    static get INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC() : StaticWarningCode { 
        if (this.__$INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC===undefined) {
            this.__$INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC = new StaticWarningCode('INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC',"'{0}' collides with a static member in the superclass '{1}'.","Try renaming either the method or the inherited member.");
        }
        return this.__$INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC;
    }

    private static __$INVALID_GETTER_OVERRIDE_RETURN_TYPE : StaticWarningCode;
    static get INVALID_GETTER_OVERRIDE_RETURN_TYPE() : StaticWarningCode { 
        if (this.__$INVALID_GETTER_OVERRIDE_RETURN_TYPE===undefined) {
            this.__$INVALID_GETTER_OVERRIDE_RETURN_TYPE = new StaticWarningCode('INVALID_GETTER_OVERRIDE_RETURN_TYPE',"The return type '{0}' isn't assignable to '{1}' as required by the " + "getter it is overriding from '{2}'.","Try changing the return types so that they are compatible.");
        }
        return this.__$INVALID_GETTER_OVERRIDE_RETURN_TYPE;
    }

    private static __$INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE : StaticWarningCode;
    static get INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE() : StaticWarningCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE = new StaticWarningCode('INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE',"The parameter type '{0}' isn't assignable to '{1}' as required by " + "the method it is overriding from '{2}'.","Try changing the parameter types so that they are compatible.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE;
    }

    private static __$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS : StaticWarningCode;
    static get INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS() : StaticWarningCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS = new StaticWarningCode('INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS',"The method has {0} type parameters, but it is overriding a method " + "with {1} type parameters from '{2}'.","Try changing the number of type parameters so that they are the same.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS;
    }

    private static __$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND : StaticWarningCode;
    static get INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND() : StaticWarningCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND = new StaticWarningCode('INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND',"The type parameter '{0}' extends '{1}', but that is stricter than " + "'{2}' extends '{3}' in the overridden method from '{4}'.","Try changing the bounds on the type parameters so that they are compatible.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND;
    }

    private static __$INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE : StaticWarningCode;
    static get INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE() : StaticWarningCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE = new StaticWarningCode('INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE',"The parameter type '{0}' isn't assignable to '{1}' as required by " + "the method it is overriding from '{2}'.","Try changing the parameter types so that they are compatible.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE;
    }

    private static __$INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE : StaticWarningCode;
    static get INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE() : StaticWarningCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE = new StaticWarningCode('INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE',"The parameter type '{0}' isn't assignable to '{1}' as required by " + "the method it is overriding from '{2}'.","Try changing the parameter types so that they are compatible.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE;
    }

    private static __$INVALID_METHOD_OVERRIDE_RETURN_TYPE : StaticWarningCode;
    static get INVALID_METHOD_OVERRIDE_RETURN_TYPE() : StaticWarningCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_RETURN_TYPE===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_RETURN_TYPE = new StaticWarningCode('INVALID_METHOD_OVERRIDE_RETURN_TYPE',"The return type '{0}' isn't assignable to '{1}' as required by the " + "method it is overriding from '{2}'.","Try changing the return types so that they are compatible.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_RETURN_TYPE;
    }

    private static __$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED : StaticWarningCode;
    static get INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED() : StaticWarningCode { 
        if (this.__$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED===undefined) {
            this.__$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED = new StaticWarningCode('INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED',"Parameters can't override default values, " + "this method overrides '{0}.{1}' where '{2}' has a different value.","Try using the same default value in both methods.");
        }
        return this.__$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED;
    }

    private static __$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL : StaticWarningCode;
    static get INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL() : StaticWarningCode { 
        if (this.__$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL===undefined) {
            this.__$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL = new StaticWarningCode('INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL',"Parameters can't override default values, this method overrides " + "'{0}.{1}' where this positional parameter has a different value.","Try using the same default value in both methods.");
        }
        return this.__$INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL;
    }

    private static __$INVALID_OVERRIDE_NAMED : StaticWarningCode;
    static get INVALID_OVERRIDE_NAMED() : StaticWarningCode { 
        if (this.__$INVALID_OVERRIDE_NAMED===undefined) {
            this.__$INVALID_OVERRIDE_NAMED = new StaticWarningCode('INVALID_OVERRIDE_NAMED',"Missing the named parameter '{0}' " + "to match the overridden method from '{1}' from '{2}'.","Try adding the named parameter to this method, or " + "removing it from the overridden method.");
        }
        return this.__$INVALID_OVERRIDE_NAMED;
    }

    private static __$INVALID_OVERRIDE_POSITIONAL : StaticWarningCode;
    static get INVALID_OVERRIDE_POSITIONAL() : StaticWarningCode { 
        if (this.__$INVALID_OVERRIDE_POSITIONAL===undefined) {
            this.__$INVALID_OVERRIDE_POSITIONAL = new StaticWarningCode('INVALID_OVERRIDE_POSITIONAL',"Must have at least {0} parameters " + "to match the overridden method '{1}' from '{2}'.","Try adding the necessary parameters.");
        }
        return this.__$INVALID_OVERRIDE_POSITIONAL;
    }

    private static __$INVALID_OVERRIDE_REQUIRED : StaticWarningCode;
    static get INVALID_OVERRIDE_REQUIRED() : StaticWarningCode { 
        if (this.__$INVALID_OVERRIDE_REQUIRED===undefined) {
            this.__$INVALID_OVERRIDE_REQUIRED = new StaticWarningCode('INVALID_OVERRIDE_REQUIRED',"Must have {0} required parameters or less " + "to match the overridden method '{1}' from '{2}'.","Try removing the extra parameters.");
        }
        return this.__$INVALID_OVERRIDE_REQUIRED;
    }

    private static __$INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE : StaticWarningCode;
    static get INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE() : StaticWarningCode { 
        if (this.__$INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE===undefined) {
            this.__$INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE = new StaticWarningCode('INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE',"The parameter type '{0}' isn't assignable to '{1}' as required by " + "the setter it is overriding from '{2}'.","Try changing the parameter types so that they are compatible.");
        }
        return this.__$INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE;
    }

    private static __$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE : StaticWarningCode;
    static get LIST_ELEMENT_TYPE_NOT_ASSIGNABLE() : StaticWarningCode { 
        if (this.__$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE = new StaticWarningCode('LIST_ELEMENT_TYPE_NOT_ASSIGNABLE',"The element type '{0}' can't be assigned to the list type '{1}'.");
        }
        return this.__$LIST_ELEMENT_TYPE_NOT_ASSIGNABLE;
    }

    private static __$MAP_KEY_TYPE_NOT_ASSIGNABLE : StaticWarningCode;
    static get MAP_KEY_TYPE_NOT_ASSIGNABLE() : StaticWarningCode { 
        if (this.__$MAP_KEY_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$MAP_KEY_TYPE_NOT_ASSIGNABLE = new StaticWarningCode('MAP_KEY_TYPE_NOT_ASSIGNABLE',"The element type '{0}' can't be assigned to the map key type '{1}'.");
        }
        return this.__$MAP_KEY_TYPE_NOT_ASSIGNABLE;
    }

    private static __$MAP_VALUE_TYPE_NOT_ASSIGNABLE : StaticWarningCode;
    static get MAP_VALUE_TYPE_NOT_ASSIGNABLE() : StaticWarningCode { 
        if (this.__$MAP_VALUE_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$MAP_VALUE_TYPE_NOT_ASSIGNABLE = new StaticWarningCode('MAP_VALUE_TYPE_NOT_ASSIGNABLE',"The element type '{0}' can't be assigned to the map value type '{1}'.");
        }
        return this.__$MAP_VALUE_TYPE_NOT_ASSIGNABLE;
    }

    private static __$MISMATCHED_GETTER_AND_SETTER_TYPES : StaticWarningCode;
    static get MISMATCHED_GETTER_AND_SETTER_TYPES() : StaticWarningCode { 
        if (this.__$MISMATCHED_GETTER_AND_SETTER_TYPES===undefined) {
            this.__$MISMATCHED_GETTER_AND_SETTER_TYPES = new StaticWarningCode('MISMATCHED_GETTER_AND_SETTER_TYPES',"The parameter type for setter '{0}' is '{1}' which isn't assignable " + "to its getter (of type '{2}').","Try changing the types so that they are compatible.",false);
        }
        return this.__$MISMATCHED_GETTER_AND_SETTER_TYPES;
    }

    private static __$MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE : StaticWarningCode;
    static get MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE() : StaticWarningCode { 
        if (this.__$MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE===undefined) {
            this.__$MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE = new StaticWarningCode('MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE',"The parameter type for setter '{0}' is '{1}' which isn't assignable " + "to its getter (of type '{2}'), from superclass '{3}'.","Try changing the types so that they are compatible.",false);
        }
        return this.__$MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE;
    }

    private static __$MISSING_ENUM_CONSTANT_IN_SWITCH : StaticWarningCode;
    static get MISSING_ENUM_CONSTANT_IN_SWITCH() : StaticWarningCode { 
        if (this.__$MISSING_ENUM_CONSTANT_IN_SWITCH===undefined) {
            this.__$MISSING_ENUM_CONSTANT_IN_SWITCH = new StaticWarningCode('MISSING_ENUM_CONSTANT_IN_SWITCH',"Missing case clause for '{0}'.","Try adding a case clause for the missing constant, or " + "adding a default clause.",false);
        }
        return this.__$MISSING_ENUM_CONSTANT_IN_SWITCH;
    }

    private static __$MIXED_RETURN_TYPES : StaticWarningCode;
    static get MIXED_RETURN_TYPES() : StaticWarningCode { 
        if (this.__$MIXED_RETURN_TYPES===undefined) {
            this.__$MIXED_RETURN_TYPES = new StaticWarningCode('MIXED_RETURN_TYPES',"Functions can't include return statements both with and without values.","Try making all the return statements consistent " + "(either include a value or not).",false);
        }
        return this.__$MIXED_RETURN_TYPES;
    }

    private static __$NEW_WITH_ABSTRACT_CLASS : StaticWarningCode;
    static get NEW_WITH_ABSTRACT_CLASS() : StaticWarningCode { 
        if (this.__$NEW_WITH_ABSTRACT_CLASS===undefined) {
            this.__$NEW_WITH_ABSTRACT_CLASS = new StaticWarningCode('NEW_WITH_ABSTRACT_CLASS',"Abstract classes can't be created with a 'new' expression.","Try creating an instance of a subtype.");
        }
        return this.__$NEW_WITH_ABSTRACT_CLASS;
    }

    private static __$NEW_WITH_INVALID_TYPE_PARAMETERS : StaticWarningCode;
    static get NEW_WITH_INVALID_TYPE_PARAMETERS() : StaticWarningCode { 
        if (this.__$NEW_WITH_INVALID_TYPE_PARAMETERS===undefined) {
            this.__$NEW_WITH_INVALID_TYPE_PARAMETERS = new StaticWarningCode('NEW_WITH_INVALID_TYPE_PARAMETERS',"The type '{0}' is declared with {1} type parameters, " + "but {2} type arguments were given.","Try adjusting the number of type arguments.");
        }
        return this.__$NEW_WITH_INVALID_TYPE_PARAMETERS;
    }

    private static __$NEW_WITH_NON_TYPE : StaticWarningCode;
    static get NEW_WITH_NON_TYPE() : StaticWarningCode { 
        if (this.__$NEW_WITH_NON_TYPE===undefined) {
            this.__$NEW_WITH_NON_TYPE = new StaticWarningCode('NEW_WITH_NON_TYPE',"The name '{0}' isn't a class.","Try correcting the name to match an existing class.");
        }
        return this.__$NEW_WITH_NON_TYPE;
    }

    private static __$NEW_WITH_UNDEFINED_CONSTRUCTOR : StaticWarningCode;
    static get NEW_WITH_UNDEFINED_CONSTRUCTOR() : StaticWarningCode { 
        if (this.__$NEW_WITH_UNDEFINED_CONSTRUCTOR===undefined) {
            this.__$NEW_WITH_UNDEFINED_CONSTRUCTOR = new StaticWarningCode('NEW_WITH_UNDEFINED_CONSTRUCTOR',"The class '{0}' doesn't have a constructor named '{1}'.","Try invoking a different constructor, or " + "define a constructor named '{1}'.");
        }
        return this.__$NEW_WITH_UNDEFINED_CONSTRUCTOR;
    }

    private static __$NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT : StaticWarningCode;
    static get NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT() : StaticWarningCode { 
        if (this.__$NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT===undefined) {
            this.__$NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT = new StaticWarningCode('NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT',"The class '{0}' doesn't have a default constructor.","Try using one of the named constructors defined in '{0}'.");
        }
        return this.__$NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT;
    }

    private static __$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS : StaticWarningCode;
    static get NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS() : StaticWarningCode { 
        if (this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS===undefined) {
            this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS = new StaticWarningCode('NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS',"Missing concrete implementations of {0}, {1}, {2}, {3} and {4} more.","Try implementing the missing methods, or make the class abstract.");
        }
        return this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS;
    }

    private static __$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR : StaticWarningCode;
    static get NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR() : StaticWarningCode { 
        if (this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR===undefined) {
            this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR = new StaticWarningCode('NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR',"Missing concrete implementations of {0}, {1}, {2} and {3}.","Try implementing the missing methods, or make the class abstract.");
        }
        return this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR;
    }

    private static __$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE : StaticWarningCode;
    static get NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE() : StaticWarningCode { 
        if (this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE===undefined) {
            this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE = new StaticWarningCode('NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE',"Missing concrete implementation of {0}.","Try implementing the missing method, or make the class abstract.");
        }
        return this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE;
    }

    private static __$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE : StaticWarningCode;
    static get NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE() : StaticWarningCode { 
        if (this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE===undefined) {
            this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE = new StaticWarningCode('NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE',"Missing concrete implementations of {0}, {1} and {2}.","Try implementing the missing methods, or make the class abstract.");
        }
        return this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE;
    }

    private static __$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO : StaticWarningCode;
    static get NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO() : StaticWarningCode { 
        if (this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO===undefined) {
            this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO = new StaticWarningCode('NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO',"Missing concrete implementations of {0} and {1}.","Try implementing the missing methods, or make the class abstract.");
        }
        return this.__$NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO;
    }

    private static __$NON_TYPE_IN_CATCH_CLAUSE : StaticWarningCode;
    static get NON_TYPE_IN_CATCH_CLAUSE() : StaticWarningCode { 
        if (this.__$NON_TYPE_IN_CATCH_CLAUSE===undefined) {
            this.__$NON_TYPE_IN_CATCH_CLAUSE = new StaticWarningCode('NON_TYPE_IN_CATCH_CLAUSE',"The name '{0}' isn't a type and can't be used in an on-catch clause.","Try correcting the name to match an existing class.");
        }
        return this.__$NON_TYPE_IN_CATCH_CLAUSE;
    }

    private static __$NON_VOID_RETURN_FOR_OPERATOR : StaticWarningCode;
    static get NON_VOID_RETURN_FOR_OPERATOR() : StaticWarningCode { 
        if (this.__$NON_VOID_RETURN_FOR_OPERATOR===undefined) {
            this.__$NON_VOID_RETURN_FOR_OPERATOR = new StaticWarningCode('NON_VOID_RETURN_FOR_OPERATOR',"The return type of the operator []= must be 'void'.","Try changing the return type to 'void'.",false);
        }
        return this.__$NON_VOID_RETURN_FOR_OPERATOR;
    }

    private static __$NON_VOID_RETURN_FOR_SETTER : StaticWarningCode;
    static get NON_VOID_RETURN_FOR_SETTER() : StaticWarningCode { 
        if (this.__$NON_VOID_RETURN_FOR_SETTER===undefined) {
            this.__$NON_VOID_RETURN_FOR_SETTER = new StaticWarningCode('NON_VOID_RETURN_FOR_SETTER',"The return type of the setter must be 'void' or absent.","Try removing the return type, or " + "define a method rather than a setter.",false);
        }
        return this.__$NON_VOID_RETURN_FOR_SETTER;
    }

    private static __$NOT_A_TYPE : StaticWarningCode;
    static get NOT_A_TYPE() : StaticWarningCode { 
        if (this.__$NOT_A_TYPE===undefined) {
            this.__$NOT_A_TYPE = new StaticWarningCode('NOT_A_TYPE',"{0} isn't a type.","Try correcting the name to match an existing type.");
        }
        return this.__$NOT_A_TYPE;
    }

    private static __$NOT_ENOUGH_REQUIRED_ARGUMENTS : StaticWarningCode;
    static get NOT_ENOUGH_REQUIRED_ARGUMENTS() : StaticWarningCode { 
        if (this.__$NOT_ENOUGH_REQUIRED_ARGUMENTS===undefined) {
            this.__$NOT_ENOUGH_REQUIRED_ARGUMENTS = new StaticWarningCode('NOT_ENOUGH_REQUIRED_ARGUMENTS',"{0} required argument(s) expected, but {1} found.","Try adding the additional required arguments.");
        }
        return this.__$NOT_ENOUGH_REQUIRED_ARGUMENTS;
    }

    private static __$PART_OF_DIFFERENT_LIBRARY : StaticWarningCode;
    static get PART_OF_DIFFERENT_LIBRARY() : StaticWarningCode { 
        if (this.__$PART_OF_DIFFERENT_LIBRARY===undefined) {
            this.__$PART_OF_DIFFERENT_LIBRARY = new StaticWarningCode('PART_OF_DIFFERENT_LIBRARY',"Expected this library to be part of '{0}', not '{1}'.","Try including a different part, or " + "changing the name of the library in the part's part-of directive.");
        }
        return this.__$PART_OF_DIFFERENT_LIBRARY;
    }

    private static __$REDIRECT_TO_INVALID_FUNCTION_TYPE : StaticWarningCode;
    static get REDIRECT_TO_INVALID_FUNCTION_TYPE() : StaticWarningCode { 
        if (this.__$REDIRECT_TO_INVALID_FUNCTION_TYPE===undefined) {
            this.__$REDIRECT_TO_INVALID_FUNCTION_TYPE = new StaticWarningCode('REDIRECT_TO_INVALID_FUNCTION_TYPE',"The redirected constructor '{0}' has incompatible parameters with '{1}'.","Try redirecting to a different constructor, or " + "directly invoking the desired constructor rather than redirecting to it.");
        }
        return this.__$REDIRECT_TO_INVALID_FUNCTION_TYPE;
    }

    private static __$REDIRECT_TO_INVALID_RETURN_TYPE : StaticWarningCode;
    static get REDIRECT_TO_INVALID_RETURN_TYPE() : StaticWarningCode { 
        if (this.__$REDIRECT_TO_INVALID_RETURN_TYPE===undefined) {
            this.__$REDIRECT_TO_INVALID_RETURN_TYPE = new StaticWarningCode('REDIRECT_TO_INVALID_RETURN_TYPE',"The return type '{0}' of the redirected constructor isn't assignable to '{1}'.","Try redirecting to a different constructor, or " + "directly invoking the desired constructor rather than redirecting to it.");
        }
        return this.__$REDIRECT_TO_INVALID_RETURN_TYPE;
    }

    private static __$REDIRECT_TO_MISSING_CONSTRUCTOR : StaticWarningCode;
    static get REDIRECT_TO_MISSING_CONSTRUCTOR() : StaticWarningCode { 
        if (this.__$REDIRECT_TO_MISSING_CONSTRUCTOR===undefined) {
            this.__$REDIRECT_TO_MISSING_CONSTRUCTOR = new StaticWarningCode('REDIRECT_TO_MISSING_CONSTRUCTOR',"The constructor '{0}' couldn't be found in '{1}'.","Try correcting the constructor name to an existing constructor, or " + "defining the constructor in '{1}'.");
        }
        return this.__$REDIRECT_TO_MISSING_CONSTRUCTOR;
    }

    private static __$REDIRECT_TO_NON_CLASS : StaticWarningCode;
    static get REDIRECT_TO_NON_CLASS() : StaticWarningCode { 
        if (this.__$REDIRECT_TO_NON_CLASS===undefined) {
            this.__$REDIRECT_TO_NON_CLASS = new StaticWarningCode('REDIRECT_TO_NON_CLASS',"The name '{0}' isn't a type and can't be used in a redirected constructor.","Try correcting the name to match an existing class.");
        }
        return this.__$REDIRECT_TO_NON_CLASS;
    }

    private static __$RETURN_WITHOUT_VALUE : StaticWarningCode;
    static get RETURN_WITHOUT_VALUE() : StaticWarningCode { 
        if (this.__$RETURN_WITHOUT_VALUE===undefined) {
            this.__$RETURN_WITHOUT_VALUE = new StaticWarningCode('RETURN_WITHOUT_VALUE',"Missing return value after 'return'.",null,false);
        }
        return this.__$RETURN_WITHOUT_VALUE;
    }

    private static __$STATIC_ACCESS_TO_INSTANCE_MEMBER : StaticWarningCode;
    static get STATIC_ACCESS_TO_INSTANCE_MEMBER() : StaticWarningCode { 
        if (this.__$STATIC_ACCESS_TO_INSTANCE_MEMBER===undefined) {
            this.__$STATIC_ACCESS_TO_INSTANCE_MEMBER = new StaticWarningCode('STATIC_ACCESS_TO_INSTANCE_MEMBER',"Instance member '{0}' can't be accessed using static access.");
        }
        return this.__$STATIC_ACCESS_TO_INSTANCE_MEMBER;
    }

    private static __$SWITCH_EXPRESSION_NOT_ASSIGNABLE : StaticWarningCode;
    static get SWITCH_EXPRESSION_NOT_ASSIGNABLE() : StaticWarningCode { 
        if (this.__$SWITCH_EXPRESSION_NOT_ASSIGNABLE===undefined) {
            this.__$SWITCH_EXPRESSION_NOT_ASSIGNABLE = new StaticWarningCode('SWITCH_EXPRESSION_NOT_ASSIGNABLE',"Type '{0}' of the switch expression isn't assignable to " + "the type '{1}' of case expressions.");
        }
        return this.__$SWITCH_EXPRESSION_NOT_ASSIGNABLE;
    }

    private static __$TYPE_ANNOTATION_DEFERRED_CLASS : StaticWarningCode;
    static get TYPE_ANNOTATION_DEFERRED_CLASS() : StaticWarningCode { 
        if (this.__$TYPE_ANNOTATION_DEFERRED_CLASS===undefined) {
            this.__$TYPE_ANNOTATION_DEFERRED_CLASS = new StaticWarningCode('TYPE_ANNOTATION_DEFERRED_CLASS',"The deferred type '{0}' can't be used in a declaration, cast or type test.","Try using a different type, or " + "changing the import to not be deferred.");
        }
        return this.__$TYPE_ANNOTATION_DEFERRED_CLASS;
    }

    private static __$TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER : StaticWarningCode;
    static get TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER() : StaticWarningCode { 
        if (this.__$TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER===undefined) {
            this.__$TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER = new StaticWarningCode('TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER',"The type parameter '{0}' can't be used in a type test.","Try using a different type.");
        }
        return this.__$TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER;
    }

    private static __$TYPE_TEST_WITH_NON_TYPE : StaticWarningCode;
    static get TYPE_TEST_WITH_NON_TYPE() : StaticWarningCode { 
        if (this.__$TYPE_TEST_WITH_NON_TYPE===undefined) {
            this.__$TYPE_TEST_WITH_NON_TYPE = new StaticWarningCode('TYPE_TEST_WITH_NON_TYPE',"The name '{0}' isn't a type and can't be used in an 'is' expression.","Try correcting the name to match an existing type.");
        }
        return this.__$TYPE_TEST_WITH_NON_TYPE;
    }

    private static __$TYPE_TEST_WITH_UNDEFINED_NAME : StaticWarningCode;
    static get TYPE_TEST_WITH_UNDEFINED_NAME() : StaticWarningCode { 
        if (this.__$TYPE_TEST_WITH_UNDEFINED_NAME===undefined) {
            this.__$TYPE_TEST_WITH_UNDEFINED_NAME = new StaticWarningCode('TYPE_TEST_WITH_UNDEFINED_NAME',"The name '{0}' isn't defined, so it can't be used in an 'is' expression.","Try changing the name to the name of an existing type, or " + "creating a type with the name '{0}'.");
        }
        return this.__$TYPE_TEST_WITH_UNDEFINED_NAME;
    }

    private static __$TYPE_PARAMETER_REFERENCED_BY_STATIC : StaticWarningCode;
    static get TYPE_PARAMETER_REFERENCED_BY_STATIC() : StaticWarningCode { 
        if (this.__$TYPE_PARAMETER_REFERENCED_BY_STATIC===undefined) {
            this.__$TYPE_PARAMETER_REFERENCED_BY_STATIC = new StaticWarningCode('TYPE_PARAMETER_REFERENCED_BY_STATIC',"Static members can't reference type parameters of the class.","Try removing the reference to the type parameter, or " + "making the member an instance member.");
        }
        return this.__$TYPE_PARAMETER_REFERENCED_BY_STATIC;
    }

    private static __$UNDEFINED_CLASS : StaticWarningCode;
    static get UNDEFINED_CLASS() : StaticWarningCode { 
        if (this.__$UNDEFINED_CLASS===undefined) {
            this.__$UNDEFINED_CLASS = new StaticWarningCode('UNDEFINED_CLASS',"Undefined class '{0}'.","Try changing the name to the name of an existing class, or " + "creating a class with the name '{0}'.");
        }
        return this.__$UNDEFINED_CLASS;
    }

    private static __$UNDEFINED_CLASS_BOOLEAN : StaticWarningCode;
    static get UNDEFINED_CLASS_BOOLEAN() : StaticWarningCode { 
        if (this.__$UNDEFINED_CLASS_BOOLEAN===undefined) {
            this.__$UNDEFINED_CLASS_BOOLEAN = new StaticWarningCode('UNDEFINED_CLASS_BOOLEAN',"Undefined class 'boolean'.","Try using the type 'bool'.");
        }
        return this.__$UNDEFINED_CLASS_BOOLEAN;
    }

    private static __$UNDEFINED_GETTER : StaticWarningCode;
    static get UNDEFINED_GETTER() : StaticWarningCode { 
        if (this.__$UNDEFINED_GETTER===undefined) {
            this.__$UNDEFINED_GETTER = new StaticWarningCode('UNDEFINED_GETTER',"The getter '{0}' isn't defined for the class '{1}'.","Try defining a getter or field named '{0}', or invoke a different getter.");
        }
        return this.__$UNDEFINED_GETTER;
    }

    private static __$UNDEFINED_IDENTIFIER : StaticWarningCode;
    static get UNDEFINED_IDENTIFIER() : StaticWarningCode { 
        if (this.__$UNDEFINED_IDENTIFIER===undefined) {
            this.__$UNDEFINED_IDENTIFIER = new StaticWarningCode('UNDEFINED_IDENTIFIER',"Undefined name '{0}'.","Try correcting the name to one that is defined, or " + "defining the name.");
        }
        return this.__$UNDEFINED_IDENTIFIER;
    }

    private static __$UNDEFINED_IDENTIFIER_AWAIT : StaticWarningCode;
    static get UNDEFINED_IDENTIFIER_AWAIT() : StaticWarningCode { 
        if (this.__$UNDEFINED_IDENTIFIER_AWAIT===undefined) {
            this.__$UNDEFINED_IDENTIFIER_AWAIT = new StaticWarningCode('UNDEFINED_IDENTIFIER_AWAIT',"Undefined name 'await' in function body not marked with 'async'.","Try correcting the name to one that is defined, " + "defining the name, or " + "adding 'async' to the enclosing function body.");
        }
        return this.__$UNDEFINED_IDENTIFIER_AWAIT;
    }

    private static __$UNDEFINED_NAMED_PARAMETER : StaticWarningCode;
    static get UNDEFINED_NAMED_PARAMETER() : StaticWarningCode { 
        if (this.__$UNDEFINED_NAMED_PARAMETER===undefined) {
            this.__$UNDEFINED_NAMED_PARAMETER = new StaticWarningCode('UNDEFINED_NAMED_PARAMETER',"The named parameter '{0}' isn't defined.","Try correcting the name to an existing named parameter, or " + "defining a new parameter with this name.");
        }
        return this.__$UNDEFINED_NAMED_PARAMETER;
    }

    private static __$UNDEFINED_SETTER : StaticWarningCode;
    static get UNDEFINED_SETTER() : StaticWarningCode { 
        if (this.__$UNDEFINED_SETTER===undefined) {
            this.__$UNDEFINED_SETTER = new StaticWarningCode('UNDEFINED_SETTER',"The setter '{0}' isn't defined for the class '{1}'.","Try defining a setter or field named '{0}', or invoke a different setter.");
        }
        return this.__$UNDEFINED_SETTER;
    }

    private static __$UNDEFINED_STATIC_METHOD_OR_GETTER : StaticWarningCode;
    static get UNDEFINED_STATIC_METHOD_OR_GETTER() : StaticWarningCode { 
        if (this.__$UNDEFINED_STATIC_METHOD_OR_GETTER===undefined) {
            this.__$UNDEFINED_STATIC_METHOD_OR_GETTER = new StaticWarningCode('UNDEFINED_STATIC_METHOD_OR_GETTER',"The static method, getter or setter '{0}' isn't defined for the class '{1}'.","Try correcting the name to an existing member, or " + "defining the member in '{1}'.");
        }
        return this.__$UNDEFINED_STATIC_METHOD_OR_GETTER;
    }

    private static __$UNDEFINED_SUPER_GETTER : StaticWarningCode;
    static get UNDEFINED_SUPER_GETTER() : StaticWarningCode { 
        if (this.__$UNDEFINED_SUPER_GETTER===undefined) {
            this.__$UNDEFINED_SUPER_GETTER = new StaticWarningCode('UNDEFINED_SUPER_GETTER',"The getter '{0}' isn't defined in a superclass of '{1}'.","Try correcting the name to an existing getter, or " + "defining the getter in a superclass of '{1}'.");
        }
        return this.__$UNDEFINED_SUPER_GETTER;
    }

    private static __$UNDEFINED_SUPER_SETTER : StaticWarningCode;
    static get UNDEFINED_SUPER_SETTER() : StaticWarningCode { 
        if (this.__$UNDEFINED_SUPER_SETTER===undefined) {
            this.__$UNDEFINED_SUPER_SETTER = new StaticWarningCode('UNDEFINED_SUPER_SETTER',"The setter '{0}' isn't defined in a superclass of '{1}'.","Try correcting the name to an existing setter, or " + "defining the setter in a superclass of '{1}'.");
        }
        return this.__$UNDEFINED_SUPER_SETTER;
    }

    private static __$VOID_RETURN_FOR_GETTER : StaticWarningCode;
    static get VOID_RETURN_FOR_GETTER() : StaticWarningCode { 
        if (this.__$VOID_RETURN_FOR_GETTER===undefined) {
            this.__$VOID_RETURN_FOR_GETTER = new StaticWarningCode('VOID_RETURN_FOR_GETTER',"The return type of a getter can't be 'void'.","Try providing a return type for the getter.",false);
        }
        return this.__$VOID_RETURN_FOR_GETTER;
    }

    isStrongModeError : boolean;

    constructor(name : string,message : string,correction? : string,isStrongModeError? : boolean) {
    }
    @defaultConstructor
    StaticWarningCode(name : string,message : string,correction? : string,isStrongModeError? : boolean) {
        isStrongModeError = isStrongModeError || true;
        super.DartObject(name,message,correction);
        this.isStrongModeError = isStrongModeError;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorType.STATIC_WARNING.severity;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.STATIC_WARNING;
    }
}

export namespace StrongModeCode {
    export type Constructors = 'StrongModeCode';
    export type Interface = Omit<StrongModeCode, Constructors>;
}
@DartClass
export class StrongModeCode extends any {
    private static __$_implicitCastMessage : string;
    static get _implicitCastMessage() : string { 
        if (this.__$_implicitCastMessage===undefined) {
            this.__$_implicitCastMessage = "Unsafe implicit cast from '{0}' to '{1}'. " + "This usually indicates that type information was lost and resulted in " + "'dynamic' and/or a place that will have a failure at runtime.";
        }
        return this.__$_implicitCastMessage;
    }

    private static __$_implicitCastCorrection : string;
    static get _implicitCastCorrection() : string { 
        if (this.__$_implicitCastCorrection===undefined) {
            this.__$_implicitCastCorrection = "Try adding an explicit cast to '{1}' or improving the type of '{0}'.";
        }
        return this.__$_implicitCastCorrection;
    }

    private static __$_invalidOverrideMessage : string;
    static get _invalidOverrideMessage() : string { 
        if (this.__$_invalidOverrideMessage===undefined) {
            this.__$_invalidOverrideMessage = "The type of '{0}.{1}' ('{2}') isn't a subtype of '{3}.{1}' ('{4}').";
        }
        return this.__$_invalidOverrideMessage;
    }

    private static __$_implicitDynamicCorrection : string;
    static get _implicitDynamicCorrection() : string { 
        if (this.__$_implicitDynamicCorrection===undefined) {
            this.__$_implicitDynamicCorrection = "Try adding an explicit type like 'dynamic', or " + "enable implicit-dynamic in your analysis options file.";
        }
        return this.__$_implicitDynamicCorrection;
    }

    private static __$_inferredTypeMessage : string;
    static get _inferredTypeMessage() : string { 
        if (this.__$_inferredTypeMessage===undefined) {
            this.__$_inferredTypeMessage = "'{0}' has inferred type '{1}'.";
        }
        return this.__$_inferredTypeMessage;
    }

    private static __$DOWN_CAST_COMPOSITE : StrongModeCode;
    static get DOWN_CAST_COMPOSITE() : StrongModeCode { 
        if (this.__$DOWN_CAST_COMPOSITE===undefined) {
            this.__$DOWN_CAST_COMPOSITE = new StrongModeCode(ErrorType.HINT,'DOWN_CAST_COMPOSITE',StrongModeCode._implicitCastMessage,StrongModeCode._implicitCastCorrection);
        }
        return this.__$DOWN_CAST_COMPOSITE;
    }

    private static __$DOWN_CAST_IMPLICIT : StrongModeCode;
    static get DOWN_CAST_IMPLICIT() : StrongModeCode { 
        if (this.__$DOWN_CAST_IMPLICIT===undefined) {
            this.__$DOWN_CAST_IMPLICIT = new StrongModeCode(ErrorType.HINT,'DOWN_CAST_IMPLICIT',StrongModeCode._implicitCastMessage,StrongModeCode._implicitCastCorrection);
        }
        return this.__$DOWN_CAST_IMPLICIT;
    }

    private static __$DOWN_CAST_IMPLICIT_ASSIGN : StrongModeCode;
    static get DOWN_CAST_IMPLICIT_ASSIGN() : StrongModeCode { 
        if (this.__$DOWN_CAST_IMPLICIT_ASSIGN===undefined) {
            this.__$DOWN_CAST_IMPLICIT_ASSIGN = new StrongModeCode(ErrorType.HINT,'DOWN_CAST_IMPLICIT_ASSIGN',StrongModeCode._implicitCastMessage,StrongModeCode._implicitCastCorrection);
        }
        return this.__$DOWN_CAST_IMPLICIT_ASSIGN;
    }

    private static __$DYNAMIC_CAST : StrongModeCode;
    static get DYNAMIC_CAST() : StrongModeCode { 
        if (this.__$DYNAMIC_CAST===undefined) {
            this.__$DYNAMIC_CAST = new StrongModeCode(ErrorType.HINT,'DYNAMIC_CAST',StrongModeCode._implicitCastMessage,StrongModeCode._implicitCastCorrection);
        }
        return this.__$DYNAMIC_CAST;
    }

    private static __$ASSIGNMENT_CAST : StrongModeCode;
    static get ASSIGNMENT_CAST() : StrongModeCode { 
        if (this.__$ASSIGNMENT_CAST===undefined) {
            this.__$ASSIGNMENT_CAST = new StrongModeCode(ErrorType.HINT,'ASSIGNMENT_CAST',StrongModeCode._implicitCastMessage,StrongModeCode._implicitCastCorrection);
        }
        return this.__$ASSIGNMENT_CAST;
    }

    private static __$INVALID_PARAMETER_DECLARATION : StrongModeCode;
    static get INVALID_PARAMETER_DECLARATION() : StrongModeCode { 
        if (this.__$INVALID_PARAMETER_DECLARATION===undefined) {
            this.__$INVALID_PARAMETER_DECLARATION = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_PARAMETER_DECLARATION',"Type check failed: '{0}' isn't of type '{1}'.");
        }
        return this.__$INVALID_PARAMETER_DECLARATION;
    }

    private static __$COULD_NOT_INFER : StrongModeCode;
    static get COULD_NOT_INFER() : StrongModeCode { 
        if (this.__$COULD_NOT_INFER===undefined) {
            this.__$COULD_NOT_INFER = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'COULD_NOT_INFER',"Couldn't infer type parameter '{0}'.{1}");
        }
        return this.__$COULD_NOT_INFER;
    }

    private static __$INFERRED_TYPE : StrongModeCode;
    static get INFERRED_TYPE() : StrongModeCode { 
        if (this.__$INFERRED_TYPE===undefined) {
            this.__$INFERRED_TYPE = new StrongModeCode(ErrorType.HINT,'INFERRED_TYPE',StrongModeCode._inferredTypeMessage);
        }
        return this.__$INFERRED_TYPE;
    }

    private static __$INFERRED_TYPE_LITERAL : StrongModeCode;
    static get INFERRED_TYPE_LITERAL() : StrongModeCode { 
        if (this.__$INFERRED_TYPE_LITERAL===undefined) {
            this.__$INFERRED_TYPE_LITERAL = new StrongModeCode(ErrorType.HINT,'INFERRED_TYPE_LITERAL',StrongModeCode._inferredTypeMessage);
        }
        return this.__$INFERRED_TYPE_LITERAL;
    }

    private static __$INFERRED_TYPE_ALLOCATION : StrongModeCode;
    static get INFERRED_TYPE_ALLOCATION() : StrongModeCode { 
        if (this.__$INFERRED_TYPE_ALLOCATION===undefined) {
            this.__$INFERRED_TYPE_ALLOCATION = new StrongModeCode(ErrorType.HINT,'INFERRED_TYPE_ALLOCATION',StrongModeCode._inferredTypeMessage);
        }
        return this.__$INFERRED_TYPE_ALLOCATION;
    }

    private static __$INFERRED_TYPE_CLOSURE : StrongModeCode;
    static get INFERRED_TYPE_CLOSURE() : StrongModeCode { 
        if (this.__$INFERRED_TYPE_CLOSURE===undefined) {
            this.__$INFERRED_TYPE_CLOSURE = new StrongModeCode(ErrorType.HINT,'INFERRED_TYPE_CLOSURE',StrongModeCode._inferredTypeMessage);
        }
        return this.__$INFERRED_TYPE_CLOSURE;
    }

    private static __$INVALID_CAST_LITERAL : StrongModeCode;
    static get INVALID_CAST_LITERAL() : StrongModeCode { 
        if (this.__$INVALID_CAST_LITERAL===undefined) {
            this.__$INVALID_CAST_LITERAL = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_CAST_LITERAL',"The literal '{0}' with type '{1}' isn't of expected type '{2}'.");
        }
        return this.__$INVALID_CAST_LITERAL;
    }

    private static __$INVALID_CAST_LITERAL_LIST : StrongModeCode;
    static get INVALID_CAST_LITERAL_LIST() : StrongModeCode { 
        if (this.__$INVALID_CAST_LITERAL_LIST===undefined) {
            this.__$INVALID_CAST_LITERAL_LIST = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_CAST_LITERAL_LIST',"The list literal type '{0}' isn't of expected type '{1}'. The list's " + "type can be changed with an explicit generic type argument or by " + "changing the element types.");
        }
        return this.__$INVALID_CAST_LITERAL_LIST;
    }

    private static __$INVALID_CAST_LITERAL_MAP : StrongModeCode;
    static get INVALID_CAST_LITERAL_MAP() : StrongModeCode { 
        if (this.__$INVALID_CAST_LITERAL_MAP===undefined) {
            this.__$INVALID_CAST_LITERAL_MAP = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_CAST_LITERAL_MAP',"The map literal type '{0}' isn't of expected type '{1}'. The maps's " + "type can be changed with an explicit generic type arguments or by " + "changing the key and value types.");
        }
        return this.__$INVALID_CAST_LITERAL_MAP;
    }

    private static __$INVALID_CAST_FUNCTION_EXPR : StrongModeCode;
    static get INVALID_CAST_FUNCTION_EXPR() : StrongModeCode { 
        if (this.__$INVALID_CAST_FUNCTION_EXPR===undefined) {
            this.__$INVALID_CAST_FUNCTION_EXPR = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_CAST_FUNCTION_EXPR',"The function expression type '{0}' isn't of type '{1}'. " + "This means its parameter or return type does not match what is " + "expected. Consider changing parameter type(s) or the returned type(s).");
        }
        return this.__$INVALID_CAST_FUNCTION_EXPR;
    }

    private static __$INVALID_CAST_NEW_EXPR : StrongModeCode;
    static get INVALID_CAST_NEW_EXPR() : StrongModeCode { 
        if (this.__$INVALID_CAST_NEW_EXPR===undefined) {
            this.__$INVALID_CAST_NEW_EXPR = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_CAST_NEW_EXPR',"The constructor returns type '{0}' that isn't of expected type '{1}'.");
        }
        return this.__$INVALID_CAST_NEW_EXPR;
    }

    private static __$INVALID_CAST_METHOD : StrongModeCode;
    static get INVALID_CAST_METHOD() : StrongModeCode { 
        if (this.__$INVALID_CAST_METHOD===undefined) {
            this.__$INVALID_CAST_METHOD = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_CAST_METHOD',"The method tear-off '{0}' has type '{1}' that isn't of expected type " + "'{2}'. This means its parameter or return type does not match what is " + "expected.");
        }
        return this.__$INVALID_CAST_METHOD;
    }

    private static __$INVALID_CAST_FUNCTION : StrongModeCode;
    static get INVALID_CAST_FUNCTION() : StrongModeCode { 
        if (this.__$INVALID_CAST_FUNCTION===undefined) {
            this.__$INVALID_CAST_FUNCTION = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_CAST_FUNCTION',"The function '{0}' has type '{1}' that isn't of expected type " + "'{2}'. This means its parameter or return type does not match what is " + "expected.");
        }
        return this.__$INVALID_CAST_FUNCTION;
    }

    private static __$INVALID_SUPER_INVOCATION : StrongModeCode;
    static get INVALID_SUPER_INVOCATION() : StrongModeCode { 
        if (this.__$INVALID_SUPER_INVOCATION===undefined) {
            this.__$INVALID_SUPER_INVOCATION = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_SUPER_INVOCATION',"super call must be last in an initializer " + "list (see https://goo.gl/EY6hDP): '{0}'.");
        }
        return this.__$INVALID_SUPER_INVOCATION;
    }

    private static __$NON_GROUND_TYPE_CHECK_INFO : StrongModeCode;
    static get NON_GROUND_TYPE_CHECK_INFO() : StrongModeCode { 
        if (this.__$NON_GROUND_TYPE_CHECK_INFO===undefined) {
            this.__$NON_GROUND_TYPE_CHECK_INFO = new StrongModeCode(ErrorType.HINT,'NON_GROUND_TYPE_CHECK_INFO',"Runtime check on non-ground type '{0}' may throw StrongModeError.");
        }
        return this.__$NON_GROUND_TYPE_CHECK_INFO;
    }

    private static __$DYNAMIC_INVOKE : StrongModeCode;
    static get DYNAMIC_INVOKE() : StrongModeCode { 
        if (this.__$DYNAMIC_INVOKE===undefined) {
            this.__$DYNAMIC_INVOKE = new StrongModeCode(ErrorType.HINT,'DYNAMIC_INVOKE',"'{0}' requires a dynamic invoke.");
        }
        return this.__$DYNAMIC_INVOKE;
    }

    private static __$INVALID_METHOD_OVERRIDE : StrongModeCode;
    static get INVALID_METHOD_OVERRIDE() : StrongModeCode { 
        if (this.__$INVALID_METHOD_OVERRIDE===undefined) {
            this.__$INVALID_METHOD_OVERRIDE = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_METHOD_OVERRIDE',`Invalid override. ${StrongModeCode._invalidOverrideMessage}`);
        }
        return this.__$INVALID_METHOD_OVERRIDE;
    }

    private static __$INVALID_METHOD_OVERRIDE_FROM_BASE : StrongModeCode;
    static get INVALID_METHOD_OVERRIDE_FROM_BASE() : StrongModeCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_FROM_BASE===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_FROM_BASE = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_METHOD_OVERRIDE_FROM_BASE',`Base class introduces an invalid override. ${StrongModeCode._invalidOverrideMessage}`);
        }
        return this.__$INVALID_METHOD_OVERRIDE_FROM_BASE;
    }

    private static __$INVALID_METHOD_OVERRIDE_FROM_MIXIN : StrongModeCode;
    static get INVALID_METHOD_OVERRIDE_FROM_MIXIN() : StrongModeCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_FROM_MIXIN===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_FROM_MIXIN = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_METHOD_OVERRIDE_FROM_MIXIN',`Mixin introduces an invalid override. ${StrongModeCode._invalidOverrideMessage}`);
        }
        return this.__$INVALID_METHOD_OVERRIDE_FROM_MIXIN;
    }

    private static __$INVALID_FIELD_OVERRIDE : StrongModeCode;
    static get INVALID_FIELD_OVERRIDE() : StrongModeCode { 
        if (this.__$INVALID_FIELD_OVERRIDE===undefined) {
            this.__$INVALID_FIELD_OVERRIDE = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'INVALID_FIELD_OVERRIDE',"Field declaration '{3}.{1}' can't be overridden in '{0}'.");
        }
        return this.__$INVALID_FIELD_OVERRIDE;
    }

    private static __$IMPLICIT_DYNAMIC_PARAMETER : StrongModeCode;
    static get IMPLICIT_DYNAMIC_PARAMETER() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_PARAMETER===undefined) {
            this.__$IMPLICIT_DYNAMIC_PARAMETER = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_PARAMETER',"Missing parameter type for '{0}'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_PARAMETER;
    }

    private static __$IMPLICIT_DYNAMIC_RETURN : StrongModeCode;
    static get IMPLICIT_DYNAMIC_RETURN() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_RETURN===undefined) {
            this.__$IMPLICIT_DYNAMIC_RETURN = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_RETURN',"Missing return type for '{0}'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_RETURN;
    }

    private static __$IMPLICIT_DYNAMIC_VARIABLE : StrongModeCode;
    static get IMPLICIT_DYNAMIC_VARIABLE() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_VARIABLE===undefined) {
            this.__$IMPLICIT_DYNAMIC_VARIABLE = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_VARIABLE',"Missing variable type for '{0}'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_VARIABLE;
    }

    private static __$IMPLICIT_DYNAMIC_FIELD : StrongModeCode;
    static get IMPLICIT_DYNAMIC_FIELD() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_FIELD===undefined) {
            this.__$IMPLICIT_DYNAMIC_FIELD = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_FIELD',"Missing field type for '{0}'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_FIELD;
    }

    private static __$IMPLICIT_DYNAMIC_TYPE : StrongModeCode;
    static get IMPLICIT_DYNAMIC_TYPE() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_TYPE===undefined) {
            this.__$IMPLICIT_DYNAMIC_TYPE = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_TYPE',"Missing type arguments for generic type '{0}'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_TYPE;
    }

    private static __$IMPLICIT_DYNAMIC_LIST_LITERAL : StrongModeCode;
    static get IMPLICIT_DYNAMIC_LIST_LITERAL() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_LIST_LITERAL===undefined) {
            this.__$IMPLICIT_DYNAMIC_LIST_LITERAL = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_LIST_LITERAL',"Missing type argument for list literal.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_LIST_LITERAL;
    }

    private static __$IMPLICIT_DYNAMIC_MAP_LITERAL : StrongModeCode;
    static get IMPLICIT_DYNAMIC_MAP_LITERAL() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_MAP_LITERAL===undefined) {
            this.__$IMPLICIT_DYNAMIC_MAP_LITERAL = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_MAP_LITERAL',"Missing type arguments for map literal.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_MAP_LITERAL;
    }

    private static __$IMPLICIT_DYNAMIC_FUNCTION : StrongModeCode;
    static get IMPLICIT_DYNAMIC_FUNCTION() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_FUNCTION===undefined) {
            this.__$IMPLICIT_DYNAMIC_FUNCTION = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_FUNCTION',"Missing type arguments for generic function '{0}<{1}>'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_FUNCTION;
    }

    private static __$IMPLICIT_DYNAMIC_METHOD : StrongModeCode;
    static get IMPLICIT_DYNAMIC_METHOD() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_METHOD===undefined) {
            this.__$IMPLICIT_DYNAMIC_METHOD = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_METHOD',"Missing type arguments for generic method '{0}<{1}>'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_METHOD;
    }

    private static __$IMPLICIT_DYNAMIC_INVOKE : StrongModeCode;
    static get IMPLICIT_DYNAMIC_INVOKE() : StrongModeCode { 
        if (this.__$IMPLICIT_DYNAMIC_INVOKE===undefined) {
            this.__$IMPLICIT_DYNAMIC_INVOKE = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'IMPLICIT_DYNAMIC_INVOKE',"Missing type arguments for calling generic function type '{0}'.",StrongModeCode._implicitDynamicCorrection);
        }
        return this.__$IMPLICIT_DYNAMIC_INVOKE;
    }

    private static __$NO_DEFAULT_BOUNDS : StrongModeCode;
    static get NO_DEFAULT_BOUNDS() : StrongModeCode { 
        if (this.__$NO_DEFAULT_BOUNDS===undefined) {
            this.__$NO_DEFAULT_BOUNDS = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'NO_DEFAULT_BOUNDS',"Type has no default bounds","Try adding explicit type arguments to type");
        }
        return this.__$NO_DEFAULT_BOUNDS;
    }

    private static __$NOT_INSTANTIATED_BOUND : StrongModeCode;
    static get NOT_INSTANTIATED_BOUND() : StrongModeCode { 
        if (this.__$NOT_INSTANTIATED_BOUND===undefined) {
            this.__$NOT_INSTANTIATED_BOUND = new StrongModeCode(ErrorType.COMPILE_TIME_ERROR,'NOT_INSTANTIATED_BOUND',"Type parameter bound types must be instantiated.","Try adding type arguments.");
        }
        return this.__$NOT_INSTANTIATED_BOUND;
    }

    private static __$TOP_LEVEL_CYCLE : StrongModeCode;
    static get TOP_LEVEL_CYCLE() : StrongModeCode { 
        if (this.__$TOP_LEVEL_CYCLE===undefined) {
            this.__$TOP_LEVEL_CYCLE = new StrongModeCode(ErrorType.HINT,'TOP_LEVEL_CYCLE',"The type of '{0}' can't be inferred because it depends on itself through the cycle: {1}.","Try adding an explicit type to one or more of the variables in the cycle in order to break the cycle.");
        }
        return this.__$TOP_LEVEL_CYCLE;
    }

    private static __$TOP_LEVEL_FUNCTION_LITERAL_BLOCK : StrongModeCode;
    static get TOP_LEVEL_FUNCTION_LITERAL_BLOCK() : StrongModeCode { 
        if (this.__$TOP_LEVEL_FUNCTION_LITERAL_BLOCK===undefined) {
            this.__$TOP_LEVEL_FUNCTION_LITERAL_BLOCK = new StrongModeCode(ErrorType.HINT,'TOP_LEVEL_FUNCTION_LITERAL_BLOCK',"The type of the function literal can't be inferred because the literal has a block as its body.","Try adding an explicit type to the variable.");
        }
        return this.__$TOP_LEVEL_FUNCTION_LITERAL_BLOCK;
    }

    private static __$TOP_LEVEL_FUNCTION_LITERAL_PARAMETER : StrongModeCode;
    static get TOP_LEVEL_FUNCTION_LITERAL_PARAMETER() : StrongModeCode { 
        if (this.__$TOP_LEVEL_FUNCTION_LITERAL_PARAMETER===undefined) {
            this.__$TOP_LEVEL_FUNCTION_LITERAL_PARAMETER = new StrongModeCode(ErrorType.HINT,'TOP_LEVEL_FUNCTION_LITERAL_PARAMETER',"The type of '{0}' can't be inferred because the parameter '{1}' does not have an explicit type.","Try adding an explicit type to the parameter '{1}', or add an explicit type for '{0}'.");
        }
        return this.__$TOP_LEVEL_FUNCTION_LITERAL_PARAMETER;
    }

    private static __$TOP_LEVEL_IDENTIFIER_NO_TYPE : StrongModeCode;
    static get TOP_LEVEL_IDENTIFIER_NO_TYPE() : StrongModeCode { 
        if (this.__$TOP_LEVEL_IDENTIFIER_NO_TYPE===undefined) {
            this.__$TOP_LEVEL_IDENTIFIER_NO_TYPE = new StrongModeCode(ErrorType.HINT,'TOP_LEVEL_IDENTIFIER_NO_TYPE',"The type of '{0}' can't be inferred because the type of '{1}' couldn't be inferred.","Try adding an explicit type to either the variable '{0}' or the variable '{1}'.");
        }
        return this.__$TOP_LEVEL_IDENTIFIER_NO_TYPE;
    }

    private static __$TOP_LEVEL_INSTANCE_GETTER : StrongModeCode;
    static get TOP_LEVEL_INSTANCE_GETTER() : StrongModeCode { 
        if (this.__$TOP_LEVEL_INSTANCE_GETTER===undefined) {
            this.__$TOP_LEVEL_INSTANCE_GETTER = new StrongModeCode(ErrorType.HINT,'TOP_LEVEL_INSTANCE_GETTER',"The type of '{0}' can't be inferred because of the use of the instance getter '{1}'.","Try removing the use of the instance getter {1}, or add an explicit type for '{0}'.");
        }
        return this.__$TOP_LEVEL_INSTANCE_GETTER;
    }

    private static __$TOP_LEVEL_TYPE_ARGUMENTS : StrongModeCode;
    static get TOP_LEVEL_TYPE_ARGUMENTS() : StrongModeCode { 
        if (this.__$TOP_LEVEL_TYPE_ARGUMENTS===undefined) {
            this.__$TOP_LEVEL_TYPE_ARGUMENTS = new StrongModeCode(ErrorType.HINT,'TOP_LEVEL_TYPE_ARGUMENTS',"The type of '{0}' can't be inferred because type arguments were not given for '{1}'.","Try adding type arguments for '{1}', or add an explicit type for '{0}'.");
        }
        return this.__$TOP_LEVEL_TYPE_ARGUMENTS;
    }

    private static __$TOP_LEVEL_UNSUPPORTED : StrongModeCode;
    static get TOP_LEVEL_UNSUPPORTED() : StrongModeCode { 
        if (this.__$TOP_LEVEL_UNSUPPORTED===undefined) {
            this.__$TOP_LEVEL_UNSUPPORTED = new StrongModeCode(ErrorType.HINT,'TOP_LEVEL_UNSUPPORTED',"The type of '{0}' can't be inferred because {1} expressions aren't supported.","Try adding an explicit type for '{0}'.");
        }
        return this.__$TOP_LEVEL_UNSUPPORTED;
    }

    private static __$UNSAFE_BLOCK_CLOSURE_INFERENCE : StrongModeCode;
    static get UNSAFE_BLOCK_CLOSURE_INFERENCE() : StrongModeCode { 
        if (this.__$UNSAFE_BLOCK_CLOSURE_INFERENCE===undefined) {
            this.__$UNSAFE_BLOCK_CLOSURE_INFERENCE = new StrongModeCode(ErrorType.STATIC_WARNING,'UNSAFE_BLOCK_CLOSURE_INFERENCE',"Unsafe use of a block closure in a type-inferred variable outside a function body.","Try adding a type annotation for '{0}'. See dartbug.com/26947.");
        }
        return this.__$UNSAFE_BLOCK_CLOSURE_INFERENCE;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    type : any;

    constructor(type : any,name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    StrongModeCode(type : any,name : string,message : string,correction? : string) {
        this.type = type;
        super.DartObject(`STRONG_MODE_${name}`,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return this.type.severity;
    }
}

export class properties {
}
