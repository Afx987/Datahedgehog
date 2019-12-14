/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/error/hint_codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace HintCode {
    export type Constructors = 'HintCode';
    export type Interface = Omit<HintCode, Constructors>;
}
@DartClass
export class HintCode extends any {
    private static __$ABSTRACT_SUPER_MEMBER_REFERENCE : HintCode;
    static get ABSTRACT_SUPER_MEMBER_REFERENCE() : HintCode { 
        if (this.__$ABSTRACT_SUPER_MEMBER_REFERENCE===undefined) {
            this.__$ABSTRACT_SUPER_MEMBER_REFERENCE = new HintCode('ABSTRACT_SUPER_MEMBER_REFERENCE',"The {0} '{1}' is always abstract in the supertype.");
        }
        return this.__$ABSTRACT_SUPER_MEMBER_REFERENCE;
    }

    private static __$ARGUMENT_TYPE_NOT_ASSIGNABLE : HintCode;
    static get ARGUMENT_TYPE_NOT_ASSIGNABLE() : HintCode { 
        if (this.__$ARGUMENT_TYPE_NOT_ASSIGNABLE===undefined) {
            this.__$ARGUMENT_TYPE_NOT_ASSIGNABLE = new HintCode('ARGUMENT_TYPE_NOT_ASSIGNABLE',"The argument type '{0}' can't be assigned to the parameter type '{1}'.");
        }
        return this.__$ARGUMENT_TYPE_NOT_ASSIGNABLE;
    }

    private static __$CAN_BE_NULL_AFTER_NULL_AWARE : HintCode;
    static get CAN_BE_NULL_AFTER_NULL_AWARE() : HintCode { 
        if (this.__$CAN_BE_NULL_AFTER_NULL_AWARE===undefined) {
            this.__$CAN_BE_NULL_AFTER_NULL_AWARE = new HintCode('CAN_BE_NULL_AFTER_NULL_AWARE',"The target expression uses '?.', so its value can be null.","Replace the '.' with a '?.' in the invocation.");
        }
        return this.__$CAN_BE_NULL_AFTER_NULL_AWARE;
    }

    private static __$DEAD_CODE : HintCode;
    static get DEAD_CODE() : HintCode { 
        if (this.__$DEAD_CODE===undefined) {
            this.__$DEAD_CODE = new HintCode('DEAD_CODE',"Dead code.","Try removing the code, or " + "fixing the code before it so that it can be reached.");
        }
        return this.__$DEAD_CODE;
    }

    private static __$DEAD_CODE_CATCH_FOLLOWING_CATCH : HintCode;
    static get DEAD_CODE_CATCH_FOLLOWING_CATCH() : HintCode { 
        if (this.__$DEAD_CODE_CATCH_FOLLOWING_CATCH===undefined) {
            this.__$DEAD_CODE_CATCH_FOLLOWING_CATCH = new HintCode('DEAD_CODE_CATCH_FOLLOWING_CATCH',"Dead code: catch clauses after a 'catch (e)' or " + "an 'on Object catch (e)' are never reached.","Try reordering the catch clauses so that they can be reached, or " + "removing the unreachable catch clauses.");
        }
        return this.__$DEAD_CODE_CATCH_FOLLOWING_CATCH;
    }

    private static __$DEAD_CODE_ON_CATCH_SUBTYPE : HintCode;
    static get DEAD_CODE_ON_CATCH_SUBTYPE() : HintCode { 
        if (this.__$DEAD_CODE_ON_CATCH_SUBTYPE===undefined) {
            this.__$DEAD_CODE_ON_CATCH_SUBTYPE = new HintCode('DEAD_CODE_ON_CATCH_SUBTYPE',"Dead code: this on-catch block will never be executed because '{0}' is " + "a subtype of '{1}' and hence will have been caught above.","Try reordering the catch clauses so that this block can be reached, or " + "removing the unreachable catch clause.");
        }
        return this.__$DEAD_CODE_ON_CATCH_SUBTYPE;
    }

    private static __$DEPRECATED_MEMBER_USE : HintCode;
    static get DEPRECATED_MEMBER_USE() : HintCode { 
        if (this.__$DEPRECATED_MEMBER_USE===undefined) {
            this.__$DEPRECATED_MEMBER_USE = new HintCode('DEPRECATED_MEMBER_USE',"'{0}' is deprecated and shouldn't be used.","Try replacing the use of the deprecated member with the replacement.");
        }
        return this.__$DEPRECATED_MEMBER_USE;
    }

    private static __$DEPRECATED_FUNCTION_CLASS_DECLARATION : HintCode;
    static get DEPRECATED_FUNCTION_CLASS_DECLARATION() : HintCode { 
        if (this.__$DEPRECATED_FUNCTION_CLASS_DECLARATION===undefined) {
            this.__$DEPRECATED_FUNCTION_CLASS_DECLARATION = new HintCode('DEPRECATED_FUNCTION_CLASS_DECLARATION',"Declaring a class named 'Function' is deprecated.","Try renaming the class.");
        }
        return this.__$DEPRECATED_FUNCTION_CLASS_DECLARATION;
    }

    private static __$DEPRECATED_EXTENDS_FUNCTION : HintCode;
    static get DEPRECATED_EXTENDS_FUNCTION() : HintCode { 
        if (this.__$DEPRECATED_EXTENDS_FUNCTION===undefined) {
            this.__$DEPRECATED_EXTENDS_FUNCTION = new HintCode('DEPRECATED_EXTENDS_FUNCTION',"Extending 'Function' is deprecated.","Try removing 'Function' from the 'extends' clause.");
        }
        return this.__$DEPRECATED_EXTENDS_FUNCTION;
    }

    private static __$DEPRECATED_MIXIN_FUNCTION : HintCode;
    static get DEPRECATED_MIXIN_FUNCTION() : HintCode { 
        if (this.__$DEPRECATED_MIXIN_FUNCTION===undefined) {
            this.__$DEPRECATED_MIXIN_FUNCTION = new HintCode('DEPRECATED_MIXIN_FUNCTION',"Mixing in 'Function' is deprecated.","Try removing 'Function' from the 'with' clause.");
        }
        return this.__$DEPRECATED_MIXIN_FUNCTION;
    }

    private static __$DIVISION_OPTIMIZATION : HintCode;
    static get DIVISION_OPTIMIZATION() : HintCode { 
        if (this.__$DIVISION_OPTIMIZATION===undefined) {
            this.__$DIVISION_OPTIMIZATION = new HintCode('DIVISION_OPTIMIZATION',"The operator x ~/ y is more efficient than (x / y).toInt().","Try re-writing the expression to use the '~/' operator.");
        }
        return this.__$DIVISION_OPTIMIZATION;
    }

    private static __$DUPLICATE_IMPORT : HintCode;
    static get DUPLICATE_IMPORT() : HintCode { 
        if (this.__$DUPLICATE_IMPORT===undefined) {
            this.__$DUPLICATE_IMPORT = new HintCode('DUPLICATE_IMPORT',"Duplicate import.","Try removing all but one import of the library.");
        }
        return this.__$DUPLICATE_IMPORT;
    }

    private static __$FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE : HintCode;
    static get FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE() : HintCode { 
        if (this.__$FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE===undefined) {
            this.__$FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE = new HintCode('FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE',"A file in the 'lib' directory shouldn't import a file outside the " + "'lib' directory.","Try removing the import, or " + "moving the imported file inside the 'lib' directory.");
        }
        return this.__$FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE;
    }

    private static __$FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE : HintCode;
    static get FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE() : HintCode { 
        if (this.__$FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE===undefined) {
            this.__$FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE = new HintCode('FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE',"A file outside the 'lib' directory shouldn't reference a file " + "inside the 'lib' directory using a relative path.","Try using a package: URI instead.");
        }
        return this.__$FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE;
    }

    private static __$IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION : HintCode;
    static get IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION() : HintCode { 
        if (this.__$IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION===undefined) {
            this.__$IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION = new HintCode('IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION',"The library '{0}' defines a top-level function named 'loadLibrary' " + "which is hidden by deferring this library.","Try changing the import to not be deferred, or " + "rename the function in the imported library.");
        }
        return this.__$IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION;
    }

    private static __$INVALID_ASSIGNMENT : HintCode;
    static get INVALID_ASSIGNMENT() : HintCode { 
        if (this.__$INVALID_ASSIGNMENT===undefined) {
            this.__$INVALID_ASSIGNMENT = new HintCode('INVALID_ASSIGNMENT',"A value of type '{0}' can't be assigned to a variable of type '{1}'.","Try changing the type of the variable, or " + "casting the right-hand type to '{1}'.");
        }
        return this.__$INVALID_ASSIGNMENT;
    }

    private static __$INVALID_FACTORY_ANNOTATION : HintCode;
    static get INVALID_FACTORY_ANNOTATION() : HintCode { 
        if (this.__$INVALID_FACTORY_ANNOTATION===undefined) {
            this.__$INVALID_FACTORY_ANNOTATION = new HintCode('INVALID_FACTORY_ANNOTATION',"Only methods can be annotated as factories.");
        }
        return this.__$INVALID_FACTORY_ANNOTATION;
    }

    private static __$INVALID_FACTORY_METHOD_DECL : HintCode;
    static get INVALID_FACTORY_METHOD_DECL() : HintCode { 
        if (this.__$INVALID_FACTORY_METHOD_DECL===undefined) {
            this.__$INVALID_FACTORY_METHOD_DECL = new HintCode('INVALID_FACTORY_METHOD_DECL',"Factory method '{0}' must have a return type.");
        }
        return this.__$INVALID_FACTORY_METHOD_DECL;
    }

    private static __$INVALID_FACTORY_METHOD_IMPL : HintCode;
    static get INVALID_FACTORY_METHOD_IMPL() : HintCode { 
        if (this.__$INVALID_FACTORY_METHOD_IMPL===undefined) {
            this.__$INVALID_FACTORY_METHOD_IMPL = new HintCode('INVALID_FACTORY_METHOD_IMPL',"Factory method '{0}' doesn't return a newly allocated object.");
        }
        return this.__$INVALID_FACTORY_METHOD_IMPL;
    }

    private static __$INVALID_IMMUTABLE_ANNOTATION : HintCode;
    static get INVALID_IMMUTABLE_ANNOTATION() : HintCode { 
        if (this.__$INVALID_IMMUTABLE_ANNOTATION===undefined) {
            this.__$INVALID_IMMUTABLE_ANNOTATION = new HintCode('INVALID_IMMUTABLE_ANNOTATION',"Only classes can be annotated as being immutable.");
        }
        return this.__$INVALID_IMMUTABLE_ANNOTATION;
    }

    private static __$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS : HintCode;
    static get INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS() : HintCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS = new HintCode('INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS',"The method has {0} type parameters, but it is overriding a method " + "with {1} type parameters from '{2}'.","Try changing the number of type parameters so that they are the same.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETERS;
    }

    private static __$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND : HintCode;
    static get INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND() : HintCode { 
        if (this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND===undefined) {
            this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND = new HintCode('INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND',"The type parameter '{0}' extends '{1}', but that is stricter than " + "'{2}' extends '{3}' in the overridden method from '{4}'.","Try changing the bounds on the type parameters so that they are compatible.");
        }
        return this.__$INVALID_METHOD_OVERRIDE_TYPE_PARAMETER_BOUND;
    }

    private static __$INVALID_USE_OF_PROTECTED_MEMBER : HintCode;
    static get INVALID_USE_OF_PROTECTED_MEMBER() : HintCode { 
        if (this.__$INVALID_USE_OF_PROTECTED_MEMBER===undefined) {
            this.__$INVALID_USE_OF_PROTECTED_MEMBER = new HintCode('INVALID_USE_OF_PROTECTED_MEMBER',"The member '{0}' can only be used within instance members of subclasses " + "of '{1}'.");
        }
        return this.__$INVALID_USE_OF_PROTECTED_MEMBER;
    }

    private static __$IS_DOUBLE : HintCode;
    static get IS_DOUBLE() : HintCode { 
        if (this.__$IS_DOUBLE===undefined) {
            this.__$IS_DOUBLE = new HintCode('IS_DOUBLE',"When compiled to JS, this test might return true when the left hand " + "side is an int.","Try testing for 'num' instead.");
        }
        return this.__$IS_DOUBLE;
    }

    private static __$IS_INT : HintCode;
    static get IS_INT() : HintCode { 
        if (this.__$IS_INT===undefined) {
            this.__$IS_INT = new HintCode('IS_INT',"When compiled to JS, this test might return true when the left hand " + "side is a double.","Try testing for 'num' instead.");
        }
        return this.__$IS_INT;
    }

    private static __$IS_NOT_DOUBLE : HintCode;
    static get IS_NOT_DOUBLE() : HintCode { 
        if (this.__$IS_NOT_DOUBLE===undefined) {
            this.__$IS_NOT_DOUBLE = new HintCode('IS_NOT_DOUBLE',"When compiled to JS, this test might return false when the left hand " + "side is an int.","Try testing for 'num' instead.");
        }
        return this.__$IS_NOT_DOUBLE;
    }

    private static __$IS_NOT_INT : HintCode;
    static get IS_NOT_INT() : HintCode { 
        if (this.__$IS_NOT_INT===undefined) {
            this.__$IS_NOT_INT = new HintCode('IS_NOT_INT',"When compiled to JS, this test might return false when the left hand " + "side is a double.","Try testing for 'num' instead.");
        }
        return this.__$IS_NOT_INT;
    }

    private static __$MISSING_JS_LIB_ANNOTATION : HintCode;
    static get MISSING_JS_LIB_ANNOTATION() : HintCode { 
        if (this.__$MISSING_JS_LIB_ANNOTATION===undefined) {
            this.__$MISSING_JS_LIB_ANNOTATION = new HintCode('MISSING_JS_LIB_ANNOTATION',"The @JS() annotation can only be used if it is also declared on the " + "library directive.","Try adding the annotation to the library directive.");
        }
        return this.__$MISSING_JS_LIB_ANNOTATION;
    }

    private static __$MISSING_REQUIRED_PARAM : HintCode;
    static get MISSING_REQUIRED_PARAM() : HintCode { 
        if (this.__$MISSING_REQUIRED_PARAM===undefined) {
            this.__$MISSING_REQUIRED_PARAM = new HintCode('MISSING_REQUIRED_PARAM',"The parameter '{0}' is required.");
        }
        return this.__$MISSING_REQUIRED_PARAM;
    }

    private static __$MISSING_REQUIRED_PARAM_WITH_DETAILS : HintCode;
    static get MISSING_REQUIRED_PARAM_WITH_DETAILS() : HintCode { 
        if (this.__$MISSING_REQUIRED_PARAM_WITH_DETAILS===undefined) {
            this.__$MISSING_REQUIRED_PARAM_WITH_DETAILS = new HintCode('MISSING_REQUIRED_PARAM_WITH_DETAILS',"The parameter '{0}' is required. {1}.");
        }
        return this.__$MISSING_REQUIRED_PARAM_WITH_DETAILS;
    }

    private static __$MISSING_RETURN : HintCode;
    static get MISSING_RETURN() : HintCode { 
        if (this.__$MISSING_RETURN===undefined) {
            this.__$MISSING_RETURN = new HintCode('MISSING_RETURN',"This function declares a return type of '{0}', but doesn't end with a " + "return statement.","Try adding a return statement, or changing the return type to 'void'.");
        }
        return this.__$MISSING_RETURN;
    }

    private static __$MUST_BE_IMMUTABLE : HintCode;
    static get MUST_BE_IMMUTABLE() : HintCode { 
        if (this.__$MUST_BE_IMMUTABLE===undefined) {
            this.__$MUST_BE_IMMUTABLE = new HintCode('MUST_BE_IMMUTABLE',"This class inherits from a class marked as @immutable, " + "and therefore should be immutable (all instance fields must be final).");
        }
        return this.__$MUST_BE_IMMUTABLE;
    }

    private static __$MUST_CALL_SUPER : HintCode;
    static get MUST_CALL_SUPER() : HintCode { 
        if (this.__$MUST_CALL_SUPER===undefined) {
            this.__$MUST_CALL_SUPER = new HintCode('MUST_CALL_SUPER',"This method overrides a method annotated as @mustCallSuper in '{0}', " + "but does not invoke the overridden method.");
        }
        return this.__$MUST_CALL_SUPER;
    }

    private static __$NULL_AWARE_IN_CONDITION : HintCode;
    static get NULL_AWARE_IN_CONDITION() : HintCode { 
        if (this.__$NULL_AWARE_IN_CONDITION===undefined) {
            this.__$NULL_AWARE_IN_CONDITION = new HintCode('NULL_AWARE_IN_CONDITION',"The value of the '?.' operator can be 'null', which isn't appropriate " + "in a condition.","Try replacing the '?.' with a '.', testing the left-hand side for null if " + "necessary.");
        }
        return this.__$NULL_AWARE_IN_CONDITION;
    }

    private static __$OVERRIDE_EQUALS_BUT_NOT_HASH_CODE : HintCode;
    static get OVERRIDE_EQUALS_BUT_NOT_HASH_CODE() : HintCode { 
        if (this.__$OVERRIDE_EQUALS_BUT_NOT_HASH_CODE===undefined) {
            this.__$OVERRIDE_EQUALS_BUT_NOT_HASH_CODE = new HintCode('OVERRIDE_EQUALS_BUT_NOT_HASH_CODE',"The class '{0}' overrides 'operator==', but not 'get hashCode'.","Try implementing 'hashCode'.");
        }
        return this.__$OVERRIDE_EQUALS_BUT_NOT_HASH_CODE;
    }

    private static __$OVERRIDE_ON_NON_OVERRIDING_GETTER : HintCode;
    static get OVERRIDE_ON_NON_OVERRIDING_GETTER() : HintCode { 
        if (this.__$OVERRIDE_ON_NON_OVERRIDING_GETTER===undefined) {
            this.__$OVERRIDE_ON_NON_OVERRIDING_GETTER = new HintCode('OVERRIDE_ON_NON_OVERRIDING_GETTER',"Getter doesn't override an inherited getter.","Try updating this class to match the superclass, or " + "removing the override annotation.");
        }
        return this.__$OVERRIDE_ON_NON_OVERRIDING_GETTER;
    }

    private static __$OVERRIDE_ON_NON_OVERRIDING_FIELD : HintCode;
    static get OVERRIDE_ON_NON_OVERRIDING_FIELD() : HintCode { 
        if (this.__$OVERRIDE_ON_NON_OVERRIDING_FIELD===undefined) {
            this.__$OVERRIDE_ON_NON_OVERRIDING_FIELD = new HintCode('OVERRIDE_ON_NON_OVERRIDING_FIELD',"Field doesn't override an inherited getter or setter.","Try updating this class to match the superclass, or " + "removing the override annotation.");
        }
        return this.__$OVERRIDE_ON_NON_OVERRIDING_FIELD;
    }

    private static __$OVERRIDE_ON_NON_OVERRIDING_METHOD : HintCode;
    static get OVERRIDE_ON_NON_OVERRIDING_METHOD() : HintCode { 
        if (this.__$OVERRIDE_ON_NON_OVERRIDING_METHOD===undefined) {
            this.__$OVERRIDE_ON_NON_OVERRIDING_METHOD = new HintCode('OVERRIDE_ON_NON_OVERRIDING_METHOD',"Method doesn't override an inherited method.","Try updating this class to match the superclass, or " + "removing the override annotation.");
        }
        return this.__$OVERRIDE_ON_NON_OVERRIDING_METHOD;
    }

    private static __$OVERRIDE_ON_NON_OVERRIDING_SETTER : HintCode;
    static get OVERRIDE_ON_NON_OVERRIDING_SETTER() : HintCode { 
        if (this.__$OVERRIDE_ON_NON_OVERRIDING_SETTER===undefined) {
            this.__$OVERRIDE_ON_NON_OVERRIDING_SETTER = new HintCode('OVERRIDE_ON_NON_OVERRIDING_SETTER',"Setter doesn't override an inherited setter.","Try updating this class to match the superclass, or " + "removing the override annotation.");
        }
        return this.__$OVERRIDE_ON_NON_OVERRIDING_SETTER;
    }

    private static __$PACKAGE_IMPORT_CONTAINS_DOT_DOT : HintCode;
    static get PACKAGE_IMPORT_CONTAINS_DOT_DOT() : HintCode { 
        if (this.__$PACKAGE_IMPORT_CONTAINS_DOT_DOT===undefined) {
            this.__$PACKAGE_IMPORT_CONTAINS_DOT_DOT = new HintCode('PACKAGE_IMPORT_CONTAINS_DOT_DOT',"A package import shouldn't contain '..'.");
        }
        return this.__$PACKAGE_IMPORT_CONTAINS_DOT_DOT;
    }

    private static __$TYPE_CHECK_IS_NOT_NULL : HintCode;
    static get TYPE_CHECK_IS_NOT_NULL() : HintCode { 
        if (this.__$TYPE_CHECK_IS_NOT_NULL===undefined) {
            this.__$TYPE_CHECK_IS_NOT_NULL = new HintCode('TYPE_CHECK_IS_NOT_NULL',"Tests for non-null should be done with '!= null'.","Try replacing the 'is! Null' check with '!= null'.");
        }
        return this.__$TYPE_CHECK_IS_NOT_NULL;
    }

    private static __$TYPE_CHECK_IS_NULL : HintCode;
    static get TYPE_CHECK_IS_NULL() : HintCode { 
        if (this.__$TYPE_CHECK_IS_NULL===undefined) {
            this.__$TYPE_CHECK_IS_NULL = new HintCode('TYPE_CHECK_IS_NULL',"Tests for null should be done with '== null'.","Try replacing the 'is Null' check with '== null'.");
        }
        return this.__$TYPE_CHECK_IS_NULL;
    }

    private static __$UNDEFINED_GETTER : HintCode;
    static get UNDEFINED_GETTER() : HintCode { 
        if (this.__$UNDEFINED_GETTER===undefined) {
            this.__$UNDEFINED_GETTER = new HintCode('UNDEFINED_GETTER',"The getter '{0}' isn't defined for the class '{1}'.","Try defining a getter or field named '{0}', or invoke a different getter.");
        }
        return this.__$UNDEFINED_GETTER;
    }

    private static __$UNDEFINED_HIDDEN_NAME : HintCode;
    static get UNDEFINED_HIDDEN_NAME() : HintCode { 
        if (this.__$UNDEFINED_HIDDEN_NAME===undefined) {
            this.__$UNDEFINED_HIDDEN_NAME = new HintCode('UNDEFINED_HIDDEN_NAME',"The library '{0}' doesn't export a member with the hidden name '{1}'.","Try removing the name from the list of hidden members.");
        }
        return this.__$UNDEFINED_HIDDEN_NAME;
    }

    private static __$UNDEFINED_METHOD : HintCode;
    static get UNDEFINED_METHOD() : HintCode { 
        if (this.__$UNDEFINED_METHOD===undefined) {
            this.__$UNDEFINED_METHOD = new HintCode('UNDEFINED_METHOD',"The method '{0}' isn't defined for the class '{1}'.","Try correcting the name to the name of an existing method, or " + "defining a method named '{0}'.");
        }
        return this.__$UNDEFINED_METHOD;
    }

    private static __$UNDEFINED_OPERATOR : HintCode;
    static get UNDEFINED_OPERATOR() : HintCode { 
        if (this.__$UNDEFINED_OPERATOR===undefined) {
            this.__$UNDEFINED_OPERATOR = new HintCode('UNDEFINED_OPERATOR',"The operator '{0}' isn't defined for the class '{1}'.","Try defining the operator '{0}'.");
        }
        return this.__$UNDEFINED_OPERATOR;
    }

    private static __$UNDEFINED_SETTER : HintCode;
    static get UNDEFINED_SETTER() : HintCode { 
        if (this.__$UNDEFINED_SETTER===undefined) {
            this.__$UNDEFINED_SETTER = new HintCode('UNDEFINED_SETTER',"The setter '{0}' isn't defined for the class '{1}'.","Try defining a setter or field named '{0}', or invoke a different setter.");
        }
        return this.__$UNDEFINED_SETTER;
    }

    private static __$UNDEFINED_SHOWN_NAME : HintCode;
    static get UNDEFINED_SHOWN_NAME() : HintCode { 
        if (this.__$UNDEFINED_SHOWN_NAME===undefined) {
            this.__$UNDEFINED_SHOWN_NAME = new HintCode('UNDEFINED_SHOWN_NAME',"The library '{0}' doesn't export a member with the shown name '{1}'.","Try removing the name from the list of shown members.");
        }
        return this.__$UNDEFINED_SHOWN_NAME;
    }

    private static __$UNNECESSARY_CAST : HintCode;
    static get UNNECESSARY_CAST() : HintCode { 
        if (this.__$UNNECESSARY_CAST===undefined) {
            this.__$UNNECESSARY_CAST = new HintCode('UNNECESSARY_CAST',"Unnecessary cast.","Try removing the cast.");
        }
        return this.__$UNNECESSARY_CAST;
    }

    private static __$UNNECESSARY_NO_SUCH_METHOD : HintCode;
    static get UNNECESSARY_NO_SUCH_METHOD() : HintCode { 
        if (this.__$UNNECESSARY_NO_SUCH_METHOD===undefined) {
            this.__$UNNECESSARY_NO_SUCH_METHOD = new HintCode('UNNECESSARY_NO_SUCH_METHOD',"Unnecessary 'noSuchMethod' declaration.","Try removing the declaration of 'noSuchMethod'.");
        }
        return this.__$UNNECESSARY_NO_SUCH_METHOD;
    }

    private static __$UNNECESSARY_TYPE_CHECK_FALSE : HintCode;
    static get UNNECESSARY_TYPE_CHECK_FALSE() : HintCode { 
        if (this.__$UNNECESSARY_TYPE_CHECK_FALSE===undefined) {
            this.__$UNNECESSARY_TYPE_CHECK_FALSE = new HintCode('UNNECESSARY_TYPE_CHECK_FALSE',"Unnecessary type check, the result is always false.","Try correcting the type check, or removing the type check.");
        }
        return this.__$UNNECESSARY_TYPE_CHECK_FALSE;
    }

    private static __$UNNECESSARY_TYPE_CHECK_TRUE : HintCode;
    static get UNNECESSARY_TYPE_CHECK_TRUE() : HintCode { 
        if (this.__$UNNECESSARY_TYPE_CHECK_TRUE===undefined) {
            this.__$UNNECESSARY_TYPE_CHECK_TRUE = new HintCode('UNNECESSARY_TYPE_CHECK_TRUE',"Unnecessary type check, the result is always true.","Try correcting the type check, or removing the type check.");
        }
        return this.__$UNNECESSARY_TYPE_CHECK_TRUE;
    }

    private static __$UNUSED_CATCH_CLAUSE : HintCode;
    static get UNUSED_CATCH_CLAUSE() : HintCode { 
        if (this.__$UNUSED_CATCH_CLAUSE===undefined) {
            this.__$UNUSED_CATCH_CLAUSE = new HintCode('UNUSED_CATCH_CLAUSE',"The exception variable '{0}' isn't used, so the 'catch' clause can be removed.","Try removing the catch clause.");
        }
        return this.__$UNUSED_CATCH_CLAUSE;
    }

    private static __$UNUSED_CATCH_STACK : HintCode;
    static get UNUSED_CATCH_STACK() : HintCode { 
        if (this.__$UNUSED_CATCH_STACK===undefined) {
            this.__$UNUSED_CATCH_STACK = new HintCode('UNUSED_CATCH_STACK',"The stack trace variable '{0}' isn't used and can be removed.","Try removing the stack trace variable, or using it.");
        }
        return this.__$UNUSED_CATCH_STACK;
    }

    private static __$UNUSED_ELEMENT : HintCode;
    static get UNUSED_ELEMENT() : HintCode { 
        if (this.__$UNUSED_ELEMENT===undefined) {
            this.__$UNUSED_ELEMENT = new HintCode('UNUSED_ELEMENT',"The {0} '{1}' isn't used.","Try removing the declaration of '{1}'.");
        }
        return this.__$UNUSED_ELEMENT;
    }

    private static __$UNUSED_FIELD : HintCode;
    static get UNUSED_FIELD() : HintCode { 
        if (this.__$UNUSED_FIELD===undefined) {
            this.__$UNUSED_FIELD = new HintCode('UNUSED_FIELD',"The value of the field '{0}' isn't used.","Try removing the field, or using it.");
        }
        return this.__$UNUSED_FIELD;
    }

    private static __$UNUSED_IMPORT : HintCode;
    static get UNUSED_IMPORT() : HintCode { 
        if (this.__$UNUSED_IMPORT===undefined) {
            this.__$UNUSED_IMPORT = new HintCode('UNUSED_IMPORT',"Unused import.","Try removing the import directive.");
        }
        return this.__$UNUSED_IMPORT;
    }

    private static __$UNUSED_LOCAL_VARIABLE : HintCode;
    static get UNUSED_LOCAL_VARIABLE() : HintCode { 
        if (this.__$UNUSED_LOCAL_VARIABLE===undefined) {
            this.__$UNUSED_LOCAL_VARIABLE = new HintCode('UNUSED_LOCAL_VARIABLE',"The value of the local variable '{0}' isn't used.","Try removing the variable, or using it.");
        }
        return this.__$UNUSED_LOCAL_VARIABLE;
    }

    private static __$UNUSED_SHOWN_NAME : HintCode;
    static get UNUSED_SHOWN_NAME() : HintCode { 
        if (this.__$UNUSED_SHOWN_NAME===undefined) {
            this.__$UNUSED_SHOWN_NAME = new HintCode('UNUSED_SHOWN_NAME',"The name {0} is shown, but not used.","Try removing the name from the list of shown members.");
        }
        return this.__$UNUSED_SHOWN_NAME;
    }

    private static __$USE_OF_VOID_RESULT : HintCode;
    static get USE_OF_VOID_RESULT() : HintCode { 
        if (this.__$USE_OF_VOID_RESULT===undefined) {
            this.__$USE_OF_VOID_RESULT = new HintCode('USE_OF_VOID_RESULT',"The result of '{0}' is being used, even though it is declared to be 'void'.");
        }
        return this.__$USE_OF_VOID_RESULT;
    }

    private static __$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD : HintCode;
    static get WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD() : HintCode { 
        if (this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD===undefined) {
            this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD = new HintCode('WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD',"The method '{0}' is declared with {1} type parameters, " + "but {2} type arguments were given.","Try adjusting the number of type arguments.");
        }
        return this.__$WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    HintCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorType.HINT.severity;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.HINT;
    }
}

export class properties {
}
