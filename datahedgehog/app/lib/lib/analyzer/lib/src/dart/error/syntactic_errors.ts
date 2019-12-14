/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/error/syntactic_errors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ParserErrorCode {
    export type Constructors = 'ParserErrorCode';
    export type Interface = Omit<ParserErrorCode, Constructors>;
}
@DartClass
export class ParserErrorCode extends any {
    private static __$ABSTRACT_CLASS_MEMBER : ParserErrorCode;
    static get ABSTRACT_CLASS_MEMBER() : ParserErrorCode { 
        if (this.__$ABSTRACT_CLASS_MEMBER===undefined) {
            this.__$ABSTRACT_CLASS_MEMBER = new ParserErrorCode('ABSTRACT_CLASS_MEMBER',"Members of classes can't be declared to be 'abstract'.","Try removing the keyword 'abstract'.");
        }
        return this.__$ABSTRACT_CLASS_MEMBER;
    }

    private static __$ABSTRACT_ENUM : ParserErrorCode;
    static get ABSTRACT_ENUM() : ParserErrorCode { 
        if (this.__$ABSTRACT_ENUM===undefined) {
            this.__$ABSTRACT_ENUM = new ParserErrorCode('ABSTRACT_ENUM',"Enums can't be declared to be 'abstract'.","Try removing the keyword 'abstract'.");
        }
        return this.__$ABSTRACT_ENUM;
    }

    private static __$ABSTRACT_STATIC_METHOD : ParserErrorCode;
    static get ABSTRACT_STATIC_METHOD() : ParserErrorCode { 
        if (this.__$ABSTRACT_STATIC_METHOD===undefined) {
            this.__$ABSTRACT_STATIC_METHOD = new ParserErrorCode('ABSTRACT_STATIC_METHOD',"Static methods can't be declared to be 'abstract'.","Try removing the keyword 'abstract'.");
        }
        return this.__$ABSTRACT_STATIC_METHOD;
    }

    private static __$ABSTRACT_TOP_LEVEL_FUNCTION : ParserErrorCode;
    static get ABSTRACT_TOP_LEVEL_FUNCTION() : ParserErrorCode { 
        if (this.__$ABSTRACT_TOP_LEVEL_FUNCTION===undefined) {
            this.__$ABSTRACT_TOP_LEVEL_FUNCTION = new ParserErrorCode('ABSTRACT_TOP_LEVEL_FUNCTION',"Top-level functions can't be declared to be 'abstract'.","Try removing the keyword 'abstract'.");
        }
        return this.__$ABSTRACT_TOP_LEVEL_FUNCTION;
    }

    private static __$ABSTRACT_TOP_LEVEL_VARIABLE : ParserErrorCode;
    static get ABSTRACT_TOP_LEVEL_VARIABLE() : ParserErrorCode { 
        if (this.__$ABSTRACT_TOP_LEVEL_VARIABLE===undefined) {
            this.__$ABSTRACT_TOP_LEVEL_VARIABLE = new ParserErrorCode('ABSTRACT_TOP_LEVEL_VARIABLE',"Top-level variables can't be declared to be 'abstract'.","Try removing the keyword 'abstract'.");
        }
        return this.__$ABSTRACT_TOP_LEVEL_VARIABLE;
    }

    private static __$ABSTRACT_TYPEDEF : ParserErrorCode;
    static get ABSTRACT_TYPEDEF() : ParserErrorCode { 
        if (this.__$ABSTRACT_TYPEDEF===undefined) {
            this.__$ABSTRACT_TYPEDEF = new ParserErrorCode('ABSTRACT_TYPEDEF',"Typedefs can't be declared to be 'abstract'.","Try removing the keyword 'abstract'.");
        }
        return this.__$ABSTRACT_TYPEDEF;
    }

    private static __$ANNOTATION_ON_ENUM_CONSTANT : ParserErrorCode;
    static get ANNOTATION_ON_ENUM_CONSTANT() : ParserErrorCode { 
        if (this.__$ANNOTATION_ON_ENUM_CONSTANT===undefined) {
            this.__$ANNOTATION_ON_ENUM_CONSTANT = new ParserErrorCode('ANNOTATION_ON_ENUM_CONSTANT',"Enum constants can't have annotations.","Try removing the annotation.");
        }
        return this.__$ANNOTATION_ON_ENUM_CONSTANT;
    }

    private static __$ASYNC_KEYWORD_USED_AS_IDENTIFIER : ParserErrorCode;
    static get ASYNC_KEYWORD_USED_AS_IDENTIFIER() : ParserErrorCode { 
        if (this.__$ASYNC_KEYWORD_USED_AS_IDENTIFIER===undefined) {
            this.__$ASYNC_KEYWORD_USED_AS_IDENTIFIER = new ParserErrorCode('ASYNC_KEYWORD_USED_AS_IDENTIFIER',"The keywords 'async', 'await', and 'yield' can't be used as " + "identifiers in an asynchronous or generator function.");
        }
        return this.__$ASYNC_KEYWORD_USED_AS_IDENTIFIER;
    }

    private static __$BREAK_OUTSIDE_OF_LOOP : ParserErrorCode;
    static get BREAK_OUTSIDE_OF_LOOP() : ParserErrorCode { 
        if (this.__$BREAK_OUTSIDE_OF_LOOP===undefined) {
            this.__$BREAK_OUTSIDE_OF_LOOP = new ParserErrorCode('BREAK_OUTSIDE_OF_LOOP',"A break statement can't be used outside of a loop or switch statement.","Try removing the break statement.");
        }
        return this.__$BREAK_OUTSIDE_OF_LOOP;
    }

    private static __$CLASS_IN_CLASS : ParserErrorCode;
    static get CLASS_IN_CLASS() : ParserErrorCode { 
        if (this.__$CLASS_IN_CLASS===undefined) {
            this.__$CLASS_IN_CLASS = new ParserErrorCode('CLASS_IN_CLASS',"Classes can't be declared inside other classes.","Try moving the class to the top-level.");
        }
        return this.__$CLASS_IN_CLASS;
    }

    private static __$COLON_IN_PLACE_OF_IN : ParserErrorCode;
    static get COLON_IN_PLACE_OF_IN() : ParserErrorCode { 
        if (this.__$COLON_IN_PLACE_OF_IN===undefined) {
            this.__$COLON_IN_PLACE_OF_IN = new ParserErrorCode('COLON_IN_PLACE_OF_IN',"For-in loops use 'in' rather than a colon.","Try replacing the colon with the keyword 'in'.");
        }
        return this.__$COLON_IN_PLACE_OF_IN;
    }

    private static __$CONST_AND_COVARIANT : ParserErrorCode;
    static get CONST_AND_COVARIANT() : ParserErrorCode { 
        if (this.__$CONST_AND_COVARIANT===undefined) {
            this.__$CONST_AND_COVARIANT = new ParserErrorCode('CONST_AND_COVARIANT',"Members can't be declared to be both 'const' and 'covariant'.","Try removing either the 'const' or 'covariant' keyword.");
        }
        return this.__$CONST_AND_COVARIANT;
    }

    private static __$CONST_AND_FINAL : ParserErrorCode;
    static get CONST_AND_FINAL() : ParserErrorCode { 
        if (this.__$CONST_AND_FINAL===undefined) {
            this.__$CONST_AND_FINAL = new ParserErrorCode('CONST_AND_FINAL',"Members can't be declared to be both 'const' and 'final'.","Try removing either the 'const' or 'final' keyword.");
        }
        return this.__$CONST_AND_FINAL;
    }

    private static __$CONST_AND_VAR : ParserErrorCode;
    static get CONST_AND_VAR() : ParserErrorCode { 
        if (this.__$CONST_AND_VAR===undefined) {
            this.__$CONST_AND_VAR = new ParserErrorCode('CONST_AND_VAR',"Members can't be declared to be both 'const' and 'var'.","Try removing either the 'const' or 'var' keyword.");
        }
        return this.__$CONST_AND_VAR;
    }

    private static __$CONST_CLASS : ParserErrorCode;
    static get CONST_CLASS() : ParserErrorCode { 
        if (this.__$CONST_CLASS===undefined) {
            this.__$CONST_CLASS = new ParserErrorCode('CONST_CLASS',"Classes can't be declared to be 'const'.","Try removing the 'const' keyword. If you're trying to indicate that " + "instances of the class can be constants, place the 'const' keyword on " + "the class' constructor(s).");
        }
        return this.__$CONST_CLASS;
    }

    private static __$CONST_CONSTRUCTOR_WITH_BODY : ParserErrorCode;
    static get CONST_CONSTRUCTOR_WITH_BODY() : ParserErrorCode { 
        if (this.__$CONST_CONSTRUCTOR_WITH_BODY===undefined) {
            this.__$CONST_CONSTRUCTOR_WITH_BODY = new ParserErrorCode('CONST_CONSTRUCTOR_WITH_BODY',"Const constructors can't have a body.","Try removing either the 'const' keyword or the body.");
        }
        return this.__$CONST_CONSTRUCTOR_WITH_BODY;
    }

    private static __$CONST_ENUM : ParserErrorCode;
    static get CONST_ENUM() : ParserErrorCode { 
        if (this.__$CONST_ENUM===undefined) {
            this.__$CONST_ENUM = new ParserErrorCode('CONST_ENUM',"Enums can't be declared to be 'const'.","Try removing the 'const' keyword.");
        }
        return this.__$CONST_ENUM;
    }

    private static __$CONST_FACTORY : ParserErrorCode;
    static get CONST_FACTORY() : ParserErrorCode { 
        if (this.__$CONST_FACTORY===undefined) {
            this.__$CONST_FACTORY = new ParserErrorCode('CONST_FACTORY',"Only redirecting factory constructors can be declared to be 'const'.","Try removing the 'const' keyword, or " + "replacing the body with '=' followed by a valid target.");
        }
        return this.__$CONST_FACTORY;
    }

    private static __$CONST_METHOD : ParserErrorCode;
    static get CONST_METHOD() : ParserErrorCode { 
        if (this.__$CONST_METHOD===undefined) {
            this.__$CONST_METHOD = new ParserErrorCode('CONST_METHOD',"Getters, setters and methods can't be declared to be 'const'.","Try removing the 'const' keyword.");
        }
        return this.__$CONST_METHOD;
    }

    private static __$CONST_TYPEDEF : ParserErrorCode;
    static get CONST_TYPEDEF() : ParserErrorCode { 
        if (this.__$CONST_TYPEDEF===undefined) {
            this.__$CONST_TYPEDEF = new ParserErrorCode('CONST_TYPEDEF',"Type aliases can't be declared to be 'const'.","Try removing the 'const' keyword.");
        }
        return this.__$CONST_TYPEDEF;
    }

    private static __$CONSTRUCTOR_WITH_RETURN_TYPE : ParserErrorCode;
    static get CONSTRUCTOR_WITH_RETURN_TYPE() : ParserErrorCode { 
        if (this.__$CONSTRUCTOR_WITH_RETURN_TYPE===undefined) {
            this.__$CONSTRUCTOR_WITH_RETURN_TYPE = new ParserErrorCode('CONSTRUCTOR_WITH_RETURN_TYPE',"Constructors can't have a return type.","Try removing the return type.");
        }
        return this.__$CONSTRUCTOR_WITH_RETURN_TYPE;
    }

    private static __$CONTINUE_OUTSIDE_OF_LOOP : ParserErrorCode;
    static get CONTINUE_OUTSIDE_OF_LOOP() : ParserErrorCode { 
        if (this.__$CONTINUE_OUTSIDE_OF_LOOP===undefined) {
            this.__$CONTINUE_OUTSIDE_OF_LOOP = new ParserErrorCode('CONTINUE_OUTSIDE_OF_LOOP',"A continue statement can't be used outside of a loop or switch statement.","Try removing the continue statement.");
        }
        return this.__$CONTINUE_OUTSIDE_OF_LOOP;
    }

    private static __$CONTINUE_WITHOUT_LABEL_IN_CASE : ParserErrorCode;
    static get CONTINUE_WITHOUT_LABEL_IN_CASE() : ParserErrorCode { 
        if (this.__$CONTINUE_WITHOUT_LABEL_IN_CASE===undefined) {
            this.__$CONTINUE_WITHOUT_LABEL_IN_CASE = new ParserErrorCode('CONTINUE_WITHOUT_LABEL_IN_CASE',"A continue statement in a switch statement must have a label as a target.","Try adding a label associated with one of the case clauses to the continue statement.");
        }
        return this.__$CONTINUE_WITHOUT_LABEL_IN_CASE;
    }

    private static __$COVARIANT_AFTER_VAR : ParserErrorCode;
    static get COVARIANT_AFTER_VAR() : ParserErrorCode { 
        if (this.__$COVARIANT_AFTER_VAR===undefined) {
            this.__$COVARIANT_AFTER_VAR = new ParserErrorCode('COVARIANT_AFTER_VAR',"The modifier 'covariant' should be before the modifier 'var'.","Try re-ordering the modifiers.");
        }
        return this.__$COVARIANT_AFTER_VAR;
    }

    private static __$COVARIANT_AND_STATIC : ParserErrorCode;
    static get COVARIANT_AND_STATIC() : ParserErrorCode { 
        if (this.__$COVARIANT_AND_STATIC===undefined) {
            this.__$COVARIANT_AND_STATIC = new ParserErrorCode('COVARIANT_AND_STATIC',"Members can't be declared to be both 'covariant' and 'static'.","Try removing either the 'covariant' or 'static' keyword.");
        }
        return this.__$COVARIANT_AND_STATIC;
    }

    private static __$COVARIANT_MEMBER : ParserErrorCode;
    static get COVARIANT_MEMBER() : ParserErrorCode { 
        if (this.__$COVARIANT_MEMBER===undefined) {
            this.__$COVARIANT_MEMBER = new ParserErrorCode('COVARIANT_MEMBER',"Getters, setters and methods can't be declared to be 'covariant'.","Try removing the 'covariant' keyword.");
        }
        return this.__$COVARIANT_MEMBER;
    }

    private static __$COVARIANT_TOP_LEVEL_DECLARATION : ParserErrorCode;
    static get COVARIANT_TOP_LEVEL_DECLARATION() : ParserErrorCode { 
        if (this.__$COVARIANT_TOP_LEVEL_DECLARATION===undefined) {
            this.__$COVARIANT_TOP_LEVEL_DECLARATION = new ParserErrorCode('COVARIANT_TOP_LEVEL_DECLARATION',"Top-level declarations can't be declared to be covariant.","Try removing the keyword 'covariant'.");
        }
        return this.__$COVARIANT_TOP_LEVEL_DECLARATION;
    }

    private static __$COVARIANT_CONSTRUCTOR : ParserErrorCode;
    static get COVARIANT_CONSTRUCTOR() : ParserErrorCode { 
        if (this.__$COVARIANT_CONSTRUCTOR===undefined) {
            this.__$COVARIANT_CONSTRUCTOR = new ParserErrorCode('COVARIANT_CONSTRUCTOR',"A constructor can't be declared to be 'covariant'.","Try removing the keyword 'covariant'.");
        }
        return this.__$COVARIANT_CONSTRUCTOR;
    }

    private static __$DEFAULT_VALUE_IN_FUNCTION_TYPE : ParserErrorCode;
    static get DEFAULT_VALUE_IN_FUNCTION_TYPE() : ParserErrorCode { 
        if (this.__$DEFAULT_VALUE_IN_FUNCTION_TYPE===undefined) {
            this.__$DEFAULT_VALUE_IN_FUNCTION_TYPE = new ParserErrorCode('DEFAULT_VALUE_IN_FUNCTION_TYPE',"Parameters in a function type cannot have default values","Try removing the default value.");
        }
        return this.__$DEFAULT_VALUE_IN_FUNCTION_TYPE;
    }

    private static __$DIRECTIVE_AFTER_DECLARATION : ParserErrorCode;
    static get DIRECTIVE_AFTER_DECLARATION() : ParserErrorCode { 
        if (this.__$DIRECTIVE_AFTER_DECLARATION===undefined) {
            this.__$DIRECTIVE_AFTER_DECLARATION = new ParserErrorCode('DIRECTIVE_AFTER_DECLARATION',"Directives must appear before any declarations.","Try moving the directive before any declarations.");
        }
        return this.__$DIRECTIVE_AFTER_DECLARATION;
    }

    private static __$DUPLICATE_LABEL_IN_SWITCH_STATEMENT : ParserErrorCode;
    static get DUPLICATE_LABEL_IN_SWITCH_STATEMENT() : ParserErrorCode { 
        if (this.__$DUPLICATE_LABEL_IN_SWITCH_STATEMENT===undefined) {
            this.__$DUPLICATE_LABEL_IN_SWITCH_STATEMENT = new ParserErrorCode('DUPLICATE_LABEL_IN_SWITCH_STATEMENT',"The label '{0}' was already used in this switch statement.","Try choosing a different name for this label.");
        }
        return this.__$DUPLICATE_LABEL_IN_SWITCH_STATEMENT;
    }

    private static __$DUPLICATED_MODIFIER : ParserErrorCode;
    static get DUPLICATED_MODIFIER() : ParserErrorCode { 
        if (this.__$DUPLICATED_MODIFIER===undefined) {
            this.__$DUPLICATED_MODIFIER = new ParserErrorCode('DUPLICATED_MODIFIER',"The modifier '{0}' was already specified.","Try removing all but one occurance of the modifier.");
        }
        return this.__$DUPLICATED_MODIFIER;
    }

    private static __$EMPTY_ENUM_BODY : ParserErrorCode;
    static get EMPTY_ENUM_BODY() : ParserErrorCode { 
        if (this.__$EMPTY_ENUM_BODY===undefined) {
            this.__$EMPTY_ENUM_BODY = new ParserErrorCode('EMPTY_ENUM_BODY',"An enum must declare at least one constant name.","Try declaring a constant.");
        }
        return this.__$EMPTY_ENUM_BODY;
    }

    private static __$ENUM_IN_CLASS : ParserErrorCode;
    static get ENUM_IN_CLASS() : ParserErrorCode { 
        if (this.__$ENUM_IN_CLASS===undefined) {
            this.__$ENUM_IN_CLASS = new ParserErrorCode('ENUM_IN_CLASS',"Enums can't be declared inside classes.","Try moving the enum to the top-level.");
        }
        return this.__$ENUM_IN_CLASS;
    }

    private static __$EQUALITY_CANNOT_BE_EQUALITY_OPERAND : ParserErrorCode;
    static get EQUALITY_CANNOT_BE_EQUALITY_OPERAND() : ParserErrorCode { 
        if (this.__$EQUALITY_CANNOT_BE_EQUALITY_OPERAND===undefined) {
            this.__$EQUALITY_CANNOT_BE_EQUALITY_OPERAND = new ParserErrorCode('EQUALITY_CANNOT_BE_EQUALITY_OPERAND',"An equality expression can't be an operand of another equality expression.","Try re-writing the expression.");
        }
        return this.__$EQUALITY_CANNOT_BE_EQUALITY_OPERAND;
    }

    private static __$EXPECTED_CASE_OR_DEFAULT : ParserErrorCode;
    static get EXPECTED_CASE_OR_DEFAULT() : ParserErrorCode { 
        if (this.__$EXPECTED_CASE_OR_DEFAULT===undefined) {
            this.__$EXPECTED_CASE_OR_DEFAULT = new ParserErrorCode('EXPECTED_CASE_OR_DEFAULT',"Expected 'case' or 'default'.","Try placing this code inside a case clause.");
        }
        return this.__$EXPECTED_CASE_OR_DEFAULT;
    }

    private static __$EXPECTED_CLASS_MEMBER : ParserErrorCode;
    static get EXPECTED_CLASS_MEMBER() : ParserErrorCode { 
        if (this.__$EXPECTED_CLASS_MEMBER===undefined) {
            this.__$EXPECTED_CLASS_MEMBER = new ParserErrorCode('EXPECTED_CLASS_MEMBER',"Expected a class member.","Try placing this code inside a class member.");
        }
        return this.__$EXPECTED_CLASS_MEMBER;
    }

    private static __$EXPECTED_EXECUTABLE : ParserErrorCode;
    static get EXPECTED_EXECUTABLE() : ParserErrorCode { 
        if (this.__$EXPECTED_EXECUTABLE===undefined) {
            this.__$EXPECTED_EXECUTABLE = new ParserErrorCode('EXPECTED_EXECUTABLE',"Expected a method, getter, setter or operator declaration.","This appears to be incomplete code. Try removing it or completing it.");
        }
        return this.__$EXPECTED_EXECUTABLE;
    }

    private static __$EXPECTED_LIST_OR_MAP_LITERAL : ParserErrorCode;
    static get EXPECTED_LIST_OR_MAP_LITERAL() : ParserErrorCode { 
        if (this.__$EXPECTED_LIST_OR_MAP_LITERAL===undefined) {
            this.__$EXPECTED_LIST_OR_MAP_LITERAL = new ParserErrorCode('EXPECTED_LIST_OR_MAP_LITERAL',"Expected a list or map literal.","Try inserting a list or map literal, or remove the type arguments.");
        }
        return this.__$EXPECTED_LIST_OR_MAP_LITERAL;
    }

    private static __$EXPECTED_STRING_LITERAL : ParserErrorCode;
    static get EXPECTED_STRING_LITERAL() : ParserErrorCode { 
        if (this.__$EXPECTED_STRING_LITERAL===undefined) {
            this.__$EXPECTED_STRING_LITERAL = new ParserErrorCode('EXPECTED_STRING_LITERAL',"Expected a string literal.");
        }
        return this.__$EXPECTED_STRING_LITERAL;
    }

    private static __$EXPECTED_TOKEN : ParserErrorCode;
    static get EXPECTED_TOKEN() : ParserErrorCode { 
        if (this.__$EXPECTED_TOKEN===undefined) {
            this.__$EXPECTED_TOKEN = new ParserErrorCode('EXPECTED_TOKEN',"Expected to find '{0}'.");
        }
        return this.__$EXPECTED_TOKEN;
    }

    private static __$EXPECTED_TYPE_NAME : ParserErrorCode;
    static get EXPECTED_TYPE_NAME() : ParserErrorCode { 
        if (this.__$EXPECTED_TYPE_NAME===undefined) {
            this.__$EXPECTED_TYPE_NAME = new ParserErrorCode('EXPECTED_TYPE_NAME',"Expected a type name.");
        }
        return this.__$EXPECTED_TYPE_NAME;
    }

    private static __$EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE : ParserErrorCode;
    static get EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE() : ParserErrorCode { 
        if (this.__$EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE===undefined) {
            this.__$EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE = new ParserErrorCode('EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE',"Export directives must preceed part directives.","Try moving the export directives before the part directives.");
        }
        return this.__$EXPORT_DIRECTIVE_AFTER_PART_DIRECTIVE;
    }

    private static __$EXTERNAL_AFTER_CONST : ParserErrorCode;
    static get EXTERNAL_AFTER_CONST() : ParserErrorCode { 
        if (this.__$EXTERNAL_AFTER_CONST===undefined) {
            this.__$EXTERNAL_AFTER_CONST = new ParserErrorCode('EXTERNAL_AFTER_CONST',"The modifier 'external' should be before the modifier 'const'.","Try re-ordering the modifiers.");
        }
        return this.__$EXTERNAL_AFTER_CONST;
    }

    private static __$EXTERNAL_AFTER_FACTORY : ParserErrorCode;
    static get EXTERNAL_AFTER_FACTORY() : ParserErrorCode { 
        if (this.__$EXTERNAL_AFTER_FACTORY===undefined) {
            this.__$EXTERNAL_AFTER_FACTORY = new ParserErrorCode('EXTERNAL_AFTER_FACTORY',"The modifier 'external' should be before the modifier 'factory'.","Try re-ordering the modifiers.");
        }
        return this.__$EXTERNAL_AFTER_FACTORY;
    }

    private static __$EXTERNAL_AFTER_STATIC : ParserErrorCode;
    static get EXTERNAL_AFTER_STATIC() : ParserErrorCode { 
        if (this.__$EXTERNAL_AFTER_STATIC===undefined) {
            this.__$EXTERNAL_AFTER_STATIC = new ParserErrorCode('EXTERNAL_AFTER_STATIC',"The modifier 'external' should be before the modifier 'static'.","Try re-ordering the modifiers.");
        }
        return this.__$EXTERNAL_AFTER_STATIC;
    }

    private static __$EXTERNAL_CLASS : ParserErrorCode;
    static get EXTERNAL_CLASS() : ParserErrorCode { 
        if (this.__$EXTERNAL_CLASS===undefined) {
            this.__$EXTERNAL_CLASS = new ParserErrorCode('EXTERNAL_CLASS',"Classes can't be declared to be 'external'.","Try removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_CLASS;
    }

    private static __$EXTERNAL_CONSTRUCTOR_WITH_BODY : ParserErrorCode;
    static get EXTERNAL_CONSTRUCTOR_WITH_BODY() : ParserErrorCode { 
        if (this.__$EXTERNAL_CONSTRUCTOR_WITH_BODY===undefined) {
            this.__$EXTERNAL_CONSTRUCTOR_WITH_BODY = new ParserErrorCode('EXTERNAL_CONSTRUCTOR_WITH_BODY',"External constructors can't have a body.","Try removing the body of the constructor, or " + "removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_CONSTRUCTOR_WITH_BODY;
    }

    private static __$EXTERNAL_ENUM : ParserErrorCode;
    static get EXTERNAL_ENUM() : ParserErrorCode { 
        if (this.__$EXTERNAL_ENUM===undefined) {
            this.__$EXTERNAL_ENUM = new ParserErrorCode('EXTERNAL_ENUM',"Enums can't be declared to be 'external'.","Try removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_ENUM;
    }

    private static __$EXTERNAL_FIELD : ParserErrorCode;
    static get EXTERNAL_FIELD() : ParserErrorCode { 
        if (this.__$EXTERNAL_FIELD===undefined) {
            this.__$EXTERNAL_FIELD = new ParserErrorCode('EXTERNAL_FIELD',"Fields can't be declared to be 'external'.","Try removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_FIELD;
    }

    private static __$EXTERNAL_GETTER_WITH_BODY : ParserErrorCode;
    static get EXTERNAL_GETTER_WITH_BODY() : ParserErrorCode { 
        if (this.__$EXTERNAL_GETTER_WITH_BODY===undefined) {
            this.__$EXTERNAL_GETTER_WITH_BODY = new ParserErrorCode('EXTERNAL_GETTER_WITH_BODY',"External getters can't have a body.","Try removing the body of the getter, or " + "removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_GETTER_WITH_BODY;
    }

    private static __$EXTERNAL_METHOD_WITH_BODY : ParserErrorCode;
    static get EXTERNAL_METHOD_WITH_BODY() : ParserErrorCode { 
        if (this.__$EXTERNAL_METHOD_WITH_BODY===undefined) {
            this.__$EXTERNAL_METHOD_WITH_BODY = new ParserErrorCode('EXTERNAL_METHOD_WITH_BODY',"External methods can't have a body.","Try removing the body of the method, or " + "removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_METHOD_WITH_BODY;
    }

    private static __$EXTERNAL_OPERATOR_WITH_BODY : ParserErrorCode;
    static get EXTERNAL_OPERATOR_WITH_BODY() : ParserErrorCode { 
        if (this.__$EXTERNAL_OPERATOR_WITH_BODY===undefined) {
            this.__$EXTERNAL_OPERATOR_WITH_BODY = new ParserErrorCode('EXTERNAL_OPERATOR_WITH_BODY',"External operators can't have a body.","Try removing the body of the operator, or " + "removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_OPERATOR_WITH_BODY;
    }

    private static __$EXTERNAL_SETTER_WITH_BODY : ParserErrorCode;
    static get EXTERNAL_SETTER_WITH_BODY() : ParserErrorCode { 
        if (this.__$EXTERNAL_SETTER_WITH_BODY===undefined) {
            this.__$EXTERNAL_SETTER_WITH_BODY = new ParserErrorCode('EXTERNAL_SETTER_WITH_BODY',"External setters can't have a body.","Try removing the body of the setter, or " + "removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_SETTER_WITH_BODY;
    }

    private static __$EXTERNAL_TYPEDEF : ParserErrorCode;
    static get EXTERNAL_TYPEDEF() : ParserErrorCode { 
        if (this.__$EXTERNAL_TYPEDEF===undefined) {
            this.__$EXTERNAL_TYPEDEF = new ParserErrorCode('EXTERNAL_TYPEDEF',"Typedefs can't be declared to be 'external'.","Try removing the keyword 'external'.");
        }
        return this.__$EXTERNAL_TYPEDEF;
    }

    private static __$FACTORY_TOP_LEVEL_DECLARATION : ParserErrorCode;
    static get FACTORY_TOP_LEVEL_DECLARATION() : ParserErrorCode { 
        if (this.__$FACTORY_TOP_LEVEL_DECLARATION===undefined) {
            this.__$FACTORY_TOP_LEVEL_DECLARATION = new ParserErrorCode('FACTORY_TOP_LEVEL_DECLARATION',"Top-level declarations can't be declared to be 'factory'.","Try removing the keyword 'factory'.");
        }
        return this.__$FACTORY_TOP_LEVEL_DECLARATION;
    }

    private static __$FACTORY_WITH_INITIALIZERS : ParserErrorCode;
    static get FACTORY_WITH_INITIALIZERS() : ParserErrorCode { 
        if (this.__$FACTORY_WITH_INITIALIZERS===undefined) {
            this.__$FACTORY_WITH_INITIALIZERS = new ParserErrorCode('FACTORY_WITH_INITIALIZERS',"A 'factory' constructor can't have initializers.","Try removing the 'factory' keyword to make this a generative constructor, or " + "removing the initializers.");
        }
        return this.__$FACTORY_WITH_INITIALIZERS;
    }

    private static __$FACTORY_WITHOUT_BODY : ParserErrorCode;
    static get FACTORY_WITHOUT_BODY() : ParserErrorCode { 
        if (this.__$FACTORY_WITHOUT_BODY===undefined) {
            this.__$FACTORY_WITHOUT_BODY = new ParserErrorCode('FACTORY_WITHOUT_BODY',"A non-redirecting 'factory' constructor must have a body.","Try adding a body to the constructor.");
        }
        return this.__$FACTORY_WITHOUT_BODY;
    }

    private static __$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR : ParserErrorCode;
    static get FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR() : ParserErrorCode { 
        if (this.__$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR===undefined) {
            this.__$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR = new ParserErrorCode('FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR',"Field formal parameters can only be used in a constructor.","Try replacing the field formal parameter with a normal parameter.");
        }
        return this.__$FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR;
    }

    private static __$FINAL_AND_COVARIANT : ParserErrorCode;
    static get FINAL_AND_COVARIANT() : ParserErrorCode { 
        if (this.__$FINAL_AND_COVARIANT===undefined) {
            this.__$FINAL_AND_COVARIANT = new ParserErrorCode('FINAL_AND_COVARIANT',"Members can't be declared to be both 'final' and 'covariant'.","Try removing either the 'final' or 'covariant' keyword.");
        }
        return this.__$FINAL_AND_COVARIANT;
    }

    private static __$FINAL_AND_VAR : ParserErrorCode;
    static get FINAL_AND_VAR() : ParserErrorCode { 
        if (this.__$FINAL_AND_VAR===undefined) {
            this.__$FINAL_AND_VAR = new ParserErrorCode('FINAL_AND_VAR',"Members can't be declared to be both 'final' and 'var'.","Try removing the keyword 'var'.");
        }
        return this.__$FINAL_AND_VAR;
    }

    private static __$FINAL_CLASS : ParserErrorCode;
    static get FINAL_CLASS() : ParserErrorCode { 
        if (this.__$FINAL_CLASS===undefined) {
            this.__$FINAL_CLASS = new ParserErrorCode('FINAL_CLASS',"Classes can't be declared to be 'final'.","Try removing the keyword 'final'.");
        }
        return this.__$FINAL_CLASS;
    }

    private static __$FINAL_CONSTRUCTOR : ParserErrorCode;
    static get FINAL_CONSTRUCTOR() : ParserErrorCode { 
        if (this.__$FINAL_CONSTRUCTOR===undefined) {
            this.__$FINAL_CONSTRUCTOR = new ParserErrorCode('FINAL_CONSTRUCTOR',"A constructor can't be declared to be 'final'.","Try removing the keyword 'final'.");
        }
        return this.__$FINAL_CONSTRUCTOR;
    }

    private static __$FINAL_ENUM : ParserErrorCode;
    static get FINAL_ENUM() : ParserErrorCode { 
        if (this.__$FINAL_ENUM===undefined) {
            this.__$FINAL_ENUM = new ParserErrorCode('FINAL_ENUM',"Enums can't be declared to be 'final'.","Try removing the keyword 'final'.");
        }
        return this.__$FINAL_ENUM;
    }

    private static __$FINAL_METHOD : ParserErrorCode;
    static get FINAL_METHOD() : ParserErrorCode { 
        if (this.__$FINAL_METHOD===undefined) {
            this.__$FINAL_METHOD = new ParserErrorCode('FINAL_METHOD',"Getters, setters and methods can't be declared to be 'final'.","Try removing the keyword 'final'.");
        }
        return this.__$FINAL_METHOD;
    }

    private static __$FINAL_TYPEDEF : ParserErrorCode;
    static get FINAL_TYPEDEF() : ParserErrorCode { 
        if (this.__$FINAL_TYPEDEF===undefined) {
            this.__$FINAL_TYPEDEF = new ParserErrorCode('FINAL_TYPEDEF',"Typedefs can't be declared to be 'final'.","Try removing the keyword 'final'.");
        }
        return this.__$FINAL_TYPEDEF;
    }

    private static __$FUNCTION_TYPED_PARAMETER_VAR : ParserErrorCode;
    static get FUNCTION_TYPED_PARAMETER_VAR() : ParserErrorCode { 
        if (this.__$FUNCTION_TYPED_PARAMETER_VAR===undefined) {
            this.__$FUNCTION_TYPED_PARAMETER_VAR = new ParserErrorCode('FUNCTION_TYPED_PARAMETER_VAR',"Function-typed parameters can't specify 'const', 'final' or 'var' in place of a return type.","Try replacing the keyword with a return type.");
        }
        return this.__$FUNCTION_TYPED_PARAMETER_VAR;
    }

    private static __$GETTER_IN_FUNCTION : ParserErrorCode;
    static get GETTER_IN_FUNCTION() : ParserErrorCode { 
        if (this.__$GETTER_IN_FUNCTION===undefined) {
            this.__$GETTER_IN_FUNCTION = new ParserErrorCode('GETTER_IN_FUNCTION',"Getters can't be defined within methods or functions.","Try moving the getter outside the method or function, or " + "converting the getter to a function.");
        }
        return this.__$GETTER_IN_FUNCTION;
    }

    private static __$GETTER_WITH_PARAMETERS : ParserErrorCode;
    static get GETTER_WITH_PARAMETERS() : ParserErrorCode { 
        if (this.__$GETTER_WITH_PARAMETERS===undefined) {
            this.__$GETTER_WITH_PARAMETERS = new ParserErrorCode('GETTER_WITH_PARAMETERS',"Getters must be declared without a parameter list.","Try removing the parameter list, or " + "removing the keyword 'get' to define a method rather than a getter.");
        }
        return this.__$GETTER_WITH_PARAMETERS;
    }

    private static __$ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE : ParserErrorCode;
    static get ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE() : ParserErrorCode { 
        if (this.__$ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE===undefined) {
            this.__$ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE = new ParserErrorCode('ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE',"Illegal assignment to non-assignable expression.");
        }
        return this.__$ILLEGAL_ASSIGNMENT_TO_NON_ASSIGNABLE;
    }

    private static __$IMPLEMENTS_BEFORE_EXTENDS : ParserErrorCode;
    static get IMPLEMENTS_BEFORE_EXTENDS() : ParserErrorCode { 
        if (this.__$IMPLEMENTS_BEFORE_EXTENDS===undefined) {
            this.__$IMPLEMENTS_BEFORE_EXTENDS = new ParserErrorCode('IMPLEMENTS_BEFORE_EXTENDS',"The extends clause must be before the implements clause.","Try moving the extends clause before the implements clause.");
        }
        return this.__$IMPLEMENTS_BEFORE_EXTENDS;
    }

    private static __$IMPLEMENTS_BEFORE_WITH : ParserErrorCode;
    static get IMPLEMENTS_BEFORE_WITH() : ParserErrorCode { 
        if (this.__$IMPLEMENTS_BEFORE_WITH===undefined) {
            this.__$IMPLEMENTS_BEFORE_WITH = new ParserErrorCode('IMPLEMENTS_BEFORE_WITH',"The with clause must be before the implements clause.","Try moving the with clause before the implements clause.");
        }
        return this.__$IMPLEMENTS_BEFORE_WITH;
    }

    private static __$IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE : ParserErrorCode;
    static get IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE() : ParserErrorCode { 
        if (this.__$IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE===undefined) {
            this.__$IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE = new ParserErrorCode('IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE',"Import directives must preceed part directives.","Try moving the import directives before the part directives.");
        }
        return this.__$IMPORT_DIRECTIVE_AFTER_PART_DIRECTIVE;
    }

    private static __$INITIALIZED_VARIABLE_IN_FOR_EACH : ParserErrorCode;
    static get INITIALIZED_VARIABLE_IN_FOR_EACH() : ParserErrorCode { 
        if (this.__$INITIALIZED_VARIABLE_IN_FOR_EACH===undefined) {
            this.__$INITIALIZED_VARIABLE_IN_FOR_EACH = new ParserErrorCode('INITIALIZED_VARIABLE_IN_FOR_EACH',"The loop variable in a for-each loop can't be initialized.","Try removing the initializer, or using a different kind of loop.");
        }
        return this.__$INITIALIZED_VARIABLE_IN_FOR_EACH;
    }

    private static __$INVALID_AWAIT_IN_FOR : ParserErrorCode;
    static get INVALID_AWAIT_IN_FOR() : ParserErrorCode { 
        if (this.__$INVALID_AWAIT_IN_FOR===undefined) {
            this.__$INVALID_AWAIT_IN_FOR = new ParserErrorCode('INVALID_AWAIT_IN_FOR',"The keyword 'await' isn't allowed for a normal 'for' statement.","Try removing the keyword, or use a for-each statement.");
        }
        return this.__$INVALID_AWAIT_IN_FOR;
    }

    private static __$INVALID_CODE_POINT : ParserErrorCode;
    static get INVALID_CODE_POINT() : ParserErrorCode { 
        if (this.__$INVALID_CODE_POINT===undefined) {
            this.__$INVALID_CODE_POINT = new ParserErrorCode('INVALID_CODE_POINT',"The escape sequence '{0}' isn't a valid code point.");
        }
        return this.__$INVALID_CODE_POINT;
    }

    private static __$INVALID_COMMENT_REFERENCE : ParserErrorCode;
    static get INVALID_COMMENT_REFERENCE() : ParserErrorCode { 
        if (this.__$INVALID_COMMENT_REFERENCE===undefined) {
            this.__$INVALID_COMMENT_REFERENCE = new ParserErrorCode('INVALID_COMMENT_REFERENCE',"Comment references should contain a possibly prefixed identifier and " + "can start with 'new', but shouldn't contain anything else.");
        }
        return this.__$INVALID_COMMENT_REFERENCE;
    }

    private static __$INVALID_CONSTRUCTOR_NAME : ParserErrorCode;
    static get INVALID_CONSTRUCTOR_NAME() : ParserErrorCode { 
        if (this.__$INVALID_CONSTRUCTOR_NAME===undefined) {
            this.__$INVALID_CONSTRUCTOR_NAME = new ParserErrorCode('INVALID_CONSTRUCTOR_NAME',"The keyword '{0}' cannot be used to name a constructor.","Try giving the constructor a different name.");
        }
        return this.__$INVALID_CONSTRUCTOR_NAME;
    }

    private static __$INVALID_GENERIC_FUNCTION_TYPE : ParserErrorCode;
    static get INVALID_GENERIC_FUNCTION_TYPE() : ParserErrorCode { 
        if (this.__$INVALID_GENERIC_FUNCTION_TYPE===undefined) {
            this.__$INVALID_GENERIC_FUNCTION_TYPE = new ParserErrorCode('INVALID_GENERIC_FUNCTION_TYPE',"Invalid generic function type.","Try using a generic function type (returnType 'Function(' parameters ')').");
        }
        return this.__$INVALID_GENERIC_FUNCTION_TYPE;
    }

    private static __$INVALID_HEX_ESCAPE : ParserErrorCode;
    static get INVALID_HEX_ESCAPE() : ParserErrorCode { 
        if (this.__$INVALID_HEX_ESCAPE===undefined) {
            this.__$INVALID_HEX_ESCAPE = new ParserErrorCode('INVALID_HEX_ESCAPE',"An escape sequence starting with '\x' must be followed by 2 hexidecimal digits.");
        }
        return this.__$INVALID_HEX_ESCAPE;
    }

    private static __$INVALID_LITERAL_IN_CONFIGURATION : ParserErrorCode;
    static get INVALID_LITERAL_IN_CONFIGURATION() : ParserErrorCode { 
        if (this.__$INVALID_LITERAL_IN_CONFIGURATION===undefined) {
            this.__$INVALID_LITERAL_IN_CONFIGURATION = new ParserErrorCode('INVALID_LITERAL_IN_CONFIGURATION',"The literal in a configuration can't contain interpolation.","Try removing the interpolation expressions.");
        }
        return this.__$INVALID_LITERAL_IN_CONFIGURATION;
    }

    private static __$INVALID_OPERATOR : ParserErrorCode;
    static get INVALID_OPERATOR() : ParserErrorCode { 
        if (this.__$INVALID_OPERATOR===undefined) {
            this.__$INVALID_OPERATOR = new ParserErrorCode('INVALID_OPERATOR',"The string '{0}' isn't a user-definable operator.");
        }
        return this.__$INVALID_OPERATOR;
    }

    private static __$INVALID_OPERATOR_FOR_SUPER : ParserErrorCode;
    static get INVALID_OPERATOR_FOR_SUPER() : ParserErrorCode { 
        if (this.__$INVALID_OPERATOR_FOR_SUPER===undefined) {
            this.__$INVALID_OPERATOR_FOR_SUPER = new ParserErrorCode('INVALID_OPERATOR_FOR_SUPER',"The operator '{0}' can't be used with 'super'.");
        }
        return this.__$INVALID_OPERATOR_FOR_SUPER;
    }

    private static __$INVALID_STAR_AFTER_ASYNC : ParserErrorCode;
    static get INVALID_STAR_AFTER_ASYNC() : ParserErrorCode { 
        if (this.__$INVALID_STAR_AFTER_ASYNC===undefined) {
            this.__$INVALID_STAR_AFTER_ASYNC = new ParserErrorCode('INVALID_STAR_AFTER_ASYNC',"The modifier 'async*' isn't allowed for an expression function body.","Try converting the body to a block.");
        }
        return this.__$INVALID_STAR_AFTER_ASYNC;
    }

    private static __$INVALID_SYNC : ParserErrorCode;
    static get INVALID_SYNC() : ParserErrorCode { 
        if (this.__$INVALID_SYNC===undefined) {
            this.__$INVALID_SYNC = new ParserErrorCode('INVALID_SYNC',"The modifier 'sync' isn't allowed for an expression function body.","Try converting the body to a block.");
        }
        return this.__$INVALID_SYNC;
    }

    private static __$INVALID_UNICODE_ESCAPE : ParserErrorCode;
    static get INVALID_UNICODE_ESCAPE() : ParserErrorCode { 
        if (this.__$INVALID_UNICODE_ESCAPE===undefined) {
            this.__$INVALID_UNICODE_ESCAPE = new ParserErrorCode('INVALID_UNICODE_ESCAPE',"An escape sequence starting with '\u' must be followed by 4 " + "hexidecimal digits or from 1 to 6 digits between '{' and '}'.");
        }
        return this.__$INVALID_UNICODE_ESCAPE;
    }

    private static __$LIBRARY_DIRECTIVE_NOT_FIRST : ParserErrorCode;
    static get LIBRARY_DIRECTIVE_NOT_FIRST() : ParserErrorCode { 
        if (this.__$LIBRARY_DIRECTIVE_NOT_FIRST===undefined) {
            this.__$LIBRARY_DIRECTIVE_NOT_FIRST = new ParserErrorCode('LIBRARY_DIRECTIVE_NOT_FIRST',"The library directive must appear before all other directives.","Try moving the library directive before any other directives.");
        }
        return this.__$LIBRARY_DIRECTIVE_NOT_FIRST;
    }

    private static __$LOCAL_FUNCTION_DECLARATION_MODIFIER : ParserErrorCode;
    static get LOCAL_FUNCTION_DECLARATION_MODIFIER() : ParserErrorCode { 
        if (this.__$LOCAL_FUNCTION_DECLARATION_MODIFIER===undefined) {
            this.__$LOCAL_FUNCTION_DECLARATION_MODIFIER = new ParserErrorCode('LOCAL_FUNCTION_DECLARATION_MODIFIER',"Local function declarations can't specify any modifiers.","Try removing the modifier.");
        }
        return this.__$LOCAL_FUNCTION_DECLARATION_MODIFIER;
    }

    private static __$MISSING_ASSIGNABLE_SELECTOR : ParserErrorCode;
    static get MISSING_ASSIGNABLE_SELECTOR() : ParserErrorCode { 
        if (this.__$MISSING_ASSIGNABLE_SELECTOR===undefined) {
            this.__$MISSING_ASSIGNABLE_SELECTOR = new ParserErrorCode('MISSING_ASSIGNABLE_SELECTOR',"Missing selector such as '.<identifier>' or '[0]'.","Try adding a selector.");
        }
        return this.__$MISSING_ASSIGNABLE_SELECTOR;
    }

    private static __$MISSING_ASSIGNMENT_IN_INITIALIZER : ParserErrorCode;
    static get MISSING_ASSIGNMENT_IN_INITIALIZER() : ParserErrorCode { 
        if (this.__$MISSING_ASSIGNMENT_IN_INITIALIZER===undefined) {
            this.__$MISSING_ASSIGNMENT_IN_INITIALIZER = new ParserErrorCode('MISSING_ASSIGNMENT_IN_INITIALIZER',"Expected an assignment after the field name.","Try adding an assignment to initialize the field.");
        }
        return this.__$MISSING_ASSIGNMENT_IN_INITIALIZER;
    }

    private static __$MISSING_CATCH_OR_FINALLY : ParserErrorCode;
    static get MISSING_CATCH_OR_FINALLY() : ParserErrorCode { 
        if (this.__$MISSING_CATCH_OR_FINALLY===undefined) {
            this.__$MISSING_CATCH_OR_FINALLY = new ParserErrorCode('MISSING_CATCH_OR_FINALLY',"A try statement must have either a catch or finally clause.","Try adding either a catch or finally clause, or " + "remove the try statement.");
        }
        return this.__$MISSING_CATCH_OR_FINALLY;
    }

    private static __$MISSING_CLASS_BODY : ParserErrorCode;
    static get MISSING_CLASS_BODY() : ParserErrorCode { 
        if (this.__$MISSING_CLASS_BODY===undefined) {
            this.__$MISSING_CLASS_BODY = new ParserErrorCode('MISSING_CLASS_BODY',"A class definition must have a body, even if it is empty.","Try adding a class body.");
        }
        return this.__$MISSING_CLASS_BODY;
    }

    private static __$MISSING_CLOSING_PARENTHESIS : ParserErrorCode;
    static get MISSING_CLOSING_PARENTHESIS() : ParserErrorCode { 
        if (this.__$MISSING_CLOSING_PARENTHESIS===undefined) {
            this.__$MISSING_CLOSING_PARENTHESIS = new ParserErrorCode('MISSING_CLOSING_PARENTHESIS',"The closing parenthesis is missing.","Try adding the closing parenthesis.");
        }
        return this.__$MISSING_CLOSING_PARENTHESIS;
    }

    private static __$MISSING_CONST_FINAL_VAR_OR_TYPE : ParserErrorCode;
    static get MISSING_CONST_FINAL_VAR_OR_TYPE() : ParserErrorCode { 
        if (this.__$MISSING_CONST_FINAL_VAR_OR_TYPE===undefined) {
            this.__$MISSING_CONST_FINAL_VAR_OR_TYPE = new ParserErrorCode('MISSING_CONST_FINAL_VAR_OR_TYPE',"Variables must be declared using the keywords 'const', 'final', 'var' or a type name.","Try adding the name of the type of the variable or the keyword 'var'.");
        }
        return this.__$MISSING_CONST_FINAL_VAR_OR_TYPE;
    }

    private static __$MISSING_ENUM_BODY : ParserErrorCode;
    static get MISSING_ENUM_BODY() : ParserErrorCode { 
        if (this.__$MISSING_ENUM_BODY===undefined) {
            this.__$MISSING_ENUM_BODY = new ParserErrorCode('MISSING_ENUM_BODY',"An enum definition must have a body with at least one constant name.","Try adding a body and defining at least one constant.");
        }
        return this.__$MISSING_ENUM_BODY;
    }

    private static __$MISSING_EXPRESSION_IN_INITIALIZER : ParserErrorCode;
    static get MISSING_EXPRESSION_IN_INITIALIZER() : ParserErrorCode { 
        if (this.__$MISSING_EXPRESSION_IN_INITIALIZER===undefined) {
            this.__$MISSING_EXPRESSION_IN_INITIALIZER = new ParserErrorCode('MISSING_EXPRESSION_IN_INITIALIZER',"Expected an expression after the assignment operator.","Try adding the value to be assigned, or " + "remove the assignment operator.");
        }
        return this.__$MISSING_EXPRESSION_IN_INITIALIZER;
    }

    private static __$MISSING_EXPRESSION_IN_THROW : ParserErrorCode;
    static get MISSING_EXPRESSION_IN_THROW() : ParserErrorCode { 
        if (this.__$MISSING_EXPRESSION_IN_THROW===undefined) {
            this.__$MISSING_EXPRESSION_IN_THROW = new ParserErrorCode('MISSING_EXPRESSION_IN_THROW',"Missing expression after 'throw'.","Try using 'rethrow' to throw the caught exception.");
        }
        return this.__$MISSING_EXPRESSION_IN_THROW;
    }

    private static __$MISSING_FUNCTION_BODY : ParserErrorCode;
    static get MISSING_FUNCTION_BODY() : ParserErrorCode { 
        if (this.__$MISSING_FUNCTION_BODY===undefined) {
            this.__$MISSING_FUNCTION_BODY = new ParserErrorCode('MISSING_FUNCTION_BODY',"A function body must be provided.","Try adding a function body.");
        }
        return this.__$MISSING_FUNCTION_BODY;
    }

    private static __$MISSING_FUNCTION_KEYWORD : ParserErrorCode;
    static get MISSING_FUNCTION_KEYWORD() : ParserErrorCode { 
        if (this.__$MISSING_FUNCTION_KEYWORD===undefined) {
            this.__$MISSING_FUNCTION_KEYWORD = new ParserErrorCode('MISSING_FUNCTION_KEYWORD',"Function types must have the keyword 'Function' before the parameter list.","Try adding the keyword 'Function'.");
        }
        return this.__$MISSING_FUNCTION_KEYWORD;
    }

    private static __$MISSING_FUNCTION_PARAMETERS : ParserErrorCode;
    static get MISSING_FUNCTION_PARAMETERS() : ParserErrorCode { 
        if (this.__$MISSING_FUNCTION_PARAMETERS===undefined) {
            this.__$MISSING_FUNCTION_PARAMETERS = new ParserErrorCode('MISSING_FUNCTION_PARAMETERS',"Functions must have an explicit list of parameters.","Try adding a parameter list.");
        }
        return this.__$MISSING_FUNCTION_PARAMETERS;
    }

    private static __$MISSING_GET : ParserErrorCode;
    static get MISSING_GET() : ParserErrorCode { 
        if (this.__$MISSING_GET===undefined) {
            this.__$MISSING_GET = new ParserErrorCode('MISSING_GET',"Getters must have the keyword 'get' before the getter name.","Try adding the keyword 'get'.");
        }
        return this.__$MISSING_GET;
    }

    private static __$MISSING_IDENTIFIER : ParserErrorCode;
    static get MISSING_IDENTIFIER() : ParserErrorCode { 
        if (this.__$MISSING_IDENTIFIER===undefined) {
            this.__$MISSING_IDENTIFIER = new ParserErrorCode('MISSING_IDENTIFIER',"Expected an identifier.");
        }
        return this.__$MISSING_IDENTIFIER;
    }

    private static __$MISSING_INITIALIZER : ParserErrorCode;
    static get MISSING_INITIALIZER() : ParserErrorCode { 
        if (this.__$MISSING_INITIALIZER===undefined) {
            this.__$MISSING_INITIALIZER = new ParserErrorCode('MISSING_INITIALIZER',"Expected an initializer.");
        }
        return this.__$MISSING_INITIALIZER;
    }

    private static __$MISSING_KEYWORD_OPERATOR : ParserErrorCode;
    static get MISSING_KEYWORD_OPERATOR() : ParserErrorCode { 
        if (this.__$MISSING_KEYWORD_OPERATOR===undefined) {
            this.__$MISSING_KEYWORD_OPERATOR = new ParserErrorCode('MISSING_KEYWORD_OPERATOR',"Operator declarations must be preceeded by the keyword 'operator'.","Try adding the keyword 'operator'.");
        }
        return this.__$MISSING_KEYWORD_OPERATOR;
    }

    private static __$MISSING_METHOD_PARAMETERS : ParserErrorCode;
    static get MISSING_METHOD_PARAMETERS() : ParserErrorCode { 
        if (this.__$MISSING_METHOD_PARAMETERS===undefined) {
            this.__$MISSING_METHOD_PARAMETERS = new ParserErrorCode('MISSING_METHOD_PARAMETERS',"Methods must have an explicit list of parameters.","Try adding a parameter list.");
        }
        return this.__$MISSING_METHOD_PARAMETERS;
    }

    private static __$MISSING_NAME_FOR_NAMED_PARAMETER : ParserErrorCode;
    static get MISSING_NAME_FOR_NAMED_PARAMETER() : ParserErrorCode { 
        if (this.__$MISSING_NAME_FOR_NAMED_PARAMETER===undefined) {
            this.__$MISSING_NAME_FOR_NAMED_PARAMETER = new ParserErrorCode('MISSING_NAME_FOR_NAMED_PARAMETER',"Named parameters in a function type must have a name","Try providing a name for the parameter or removing the curly braces.");
        }
        return this.__$MISSING_NAME_FOR_NAMED_PARAMETER;
    }

    private static __$MISSING_NAME_IN_LIBRARY_DIRECTIVE : ParserErrorCode;
    static get MISSING_NAME_IN_LIBRARY_DIRECTIVE() : ParserErrorCode { 
        if (this.__$MISSING_NAME_IN_LIBRARY_DIRECTIVE===undefined) {
            this.__$MISSING_NAME_IN_LIBRARY_DIRECTIVE = new ParserErrorCode('MISSING_NAME_IN_LIBRARY_DIRECTIVE',"Library directives must include a library name.","Try adding a library name after the keyword 'library', or " + "remove the library directive if the library doesn't have any parts.");
        }
        return this.__$MISSING_NAME_IN_LIBRARY_DIRECTIVE;
    }

    private static __$MISSING_NAME_IN_PART_OF_DIRECTIVE : ParserErrorCode;
    static get MISSING_NAME_IN_PART_OF_DIRECTIVE() : ParserErrorCode { 
        if (this.__$MISSING_NAME_IN_PART_OF_DIRECTIVE===undefined) {
            this.__$MISSING_NAME_IN_PART_OF_DIRECTIVE = new ParserErrorCode('MISSING_NAME_IN_PART_OF_DIRECTIVE',"Part-of directives must include a library name.","Try adding a library name after the 'of'.");
        }
        return this.__$MISSING_NAME_IN_PART_OF_DIRECTIVE;
    }

    private static __$MISSING_PREFIX_IN_DEFERRED_IMPORT : ParserErrorCode;
    static get MISSING_PREFIX_IN_DEFERRED_IMPORT() : ParserErrorCode { 
        if (this.__$MISSING_PREFIX_IN_DEFERRED_IMPORT===undefined) {
            this.__$MISSING_PREFIX_IN_DEFERRED_IMPORT = new ParserErrorCode('MISSING_PREFIX_IN_DEFERRED_IMPORT',"Deferred imports must have a prefix.","Try adding a prefix to the import.");
        }
        return this.__$MISSING_PREFIX_IN_DEFERRED_IMPORT;
    }

    private static __$MISSING_STAR_AFTER_SYNC : ParserErrorCode;
    static get MISSING_STAR_AFTER_SYNC() : ParserErrorCode { 
        if (this.__$MISSING_STAR_AFTER_SYNC===undefined) {
            this.__$MISSING_STAR_AFTER_SYNC = new ParserErrorCode('MISSING_STAR_AFTER_SYNC',"The modifier 'sync' must be followed by a star ('*').","Try removing the modifier, or add a star.");
        }
        return this.__$MISSING_STAR_AFTER_SYNC;
    }

    private static __$MISSING_STATEMENT : ParserErrorCode;
    static get MISSING_STATEMENT() : ParserErrorCode { 
        if (this.__$MISSING_STATEMENT===undefined) {
            this.__$MISSING_STATEMENT = new ParserErrorCode('MISSING_STATEMENT',"Expected a statement.");
        }
        return this.__$MISSING_STATEMENT;
    }

    private static __$MISSING_TERMINATOR_FOR_PARAMETER_GROUP : ParserErrorCode;
    static get MISSING_TERMINATOR_FOR_PARAMETER_GROUP() : ParserErrorCode { 
        if (this.__$MISSING_TERMINATOR_FOR_PARAMETER_GROUP===undefined) {
            this.__$MISSING_TERMINATOR_FOR_PARAMETER_GROUP = new ParserErrorCode('MISSING_TERMINATOR_FOR_PARAMETER_GROUP',"There is no '{0}' to close the parameter group.","Try inserting a '{0}' at the end of the group.");
        }
        return this.__$MISSING_TERMINATOR_FOR_PARAMETER_GROUP;
    }

    private static __$MISSING_TYPEDEF_PARAMETERS : ParserErrorCode;
    static get MISSING_TYPEDEF_PARAMETERS() : ParserErrorCode { 
        if (this.__$MISSING_TYPEDEF_PARAMETERS===undefined) {
            this.__$MISSING_TYPEDEF_PARAMETERS = new ParserErrorCode('MISSING_TYPEDEF_PARAMETERS',"Typedefs must have an explicit list of parameters.","Try adding a parameter list.");
        }
        return this.__$MISSING_TYPEDEF_PARAMETERS;
    }

    private static __$MISSING_VARIABLE_IN_FOR_EACH : ParserErrorCode;
    static get MISSING_VARIABLE_IN_FOR_EACH() : ParserErrorCode { 
        if (this.__$MISSING_VARIABLE_IN_FOR_EACH===undefined) {
            this.__$MISSING_VARIABLE_IN_FOR_EACH = new ParserErrorCode('MISSING_VARIABLE_IN_FOR_EACH',"A loop variable must be declared in a for-each loop before the 'in', but none was found.","Try declaring a loop variable.");
        }
        return this.__$MISSING_VARIABLE_IN_FOR_EACH;
    }

    private static __$MIXED_PARAMETER_GROUPS : ParserErrorCode;
    static get MIXED_PARAMETER_GROUPS() : ParserErrorCode { 
        if (this.__$MIXED_PARAMETER_GROUPS===undefined) {
            this.__$MIXED_PARAMETER_GROUPS = new ParserErrorCode('MIXED_PARAMETER_GROUPS',"Can't have both positional and named parameters in a single parameter list.","Try choosing a single style of optional parameters.");
        }
        return this.__$MIXED_PARAMETER_GROUPS;
    }

    private static __$MULTIPLE_EXTENDS_CLAUSES : ParserErrorCode;
    static get MULTIPLE_EXTENDS_CLAUSES() : ParserErrorCode { 
        if (this.__$MULTIPLE_EXTENDS_CLAUSES===undefined) {
            this.__$MULTIPLE_EXTENDS_CLAUSES = new ParserErrorCode('MULTIPLE_EXTENDS_CLAUSES',"Each class definition can have at most one extends clause.","Try choosing one superclass and define your class to implement (or mix in) the others.");
        }
        return this.__$MULTIPLE_EXTENDS_CLAUSES;
    }

    private static __$MULTIPLE_IMPLEMENTS_CLAUSES : ParserErrorCode;
    static get MULTIPLE_IMPLEMENTS_CLAUSES() : ParserErrorCode { 
        if (this.__$MULTIPLE_IMPLEMENTS_CLAUSES===undefined) {
            this.__$MULTIPLE_IMPLEMENTS_CLAUSES = new ParserErrorCode('MULTIPLE_IMPLEMENTS_CLAUSES',"Each class definition can have at most one implements clause.","Try combining all of the implements clauses into a single clause.");
        }
        return this.__$MULTIPLE_IMPLEMENTS_CLAUSES;
    }

    private static __$MULTIPLE_LIBRARY_DIRECTIVES : ParserErrorCode;
    static get MULTIPLE_LIBRARY_DIRECTIVES() : ParserErrorCode { 
        if (this.__$MULTIPLE_LIBRARY_DIRECTIVES===undefined) {
            this.__$MULTIPLE_LIBRARY_DIRECTIVES = new ParserErrorCode('MULTIPLE_LIBRARY_DIRECTIVES',"Only one library directive may be declared in a file.","Try removing all but one of the library directives.");
        }
        return this.__$MULTIPLE_LIBRARY_DIRECTIVES;
    }

    private static __$MULTIPLE_NAMED_PARAMETER_GROUPS : ParserErrorCode;
    static get MULTIPLE_NAMED_PARAMETER_GROUPS() : ParserErrorCode { 
        if (this.__$MULTIPLE_NAMED_PARAMETER_GROUPS===undefined) {
            this.__$MULTIPLE_NAMED_PARAMETER_GROUPS = new ParserErrorCode('MULTIPLE_NAMED_PARAMETER_GROUPS',"Can't have multiple groups of named parameters in a single parameter list.","Try combining all of the groups into a single group.");
        }
        return this.__$MULTIPLE_NAMED_PARAMETER_GROUPS;
    }

    private static __$MULTIPLE_PART_OF_DIRECTIVES : ParserErrorCode;
    static get MULTIPLE_PART_OF_DIRECTIVES() : ParserErrorCode { 
        if (this.__$MULTIPLE_PART_OF_DIRECTIVES===undefined) {
            this.__$MULTIPLE_PART_OF_DIRECTIVES = new ParserErrorCode('MULTIPLE_PART_OF_DIRECTIVES',"Only one part-of directive may be declared in a file.","Try removing all but one of the part-of directives.");
        }
        return this.__$MULTIPLE_PART_OF_DIRECTIVES;
    }

    private static __$MULTIPLE_POSITIONAL_PARAMETER_GROUPS : ParserErrorCode;
    static get MULTIPLE_POSITIONAL_PARAMETER_GROUPS() : ParserErrorCode { 
        if (this.__$MULTIPLE_POSITIONAL_PARAMETER_GROUPS===undefined) {
            this.__$MULTIPLE_POSITIONAL_PARAMETER_GROUPS = new ParserErrorCode('MULTIPLE_POSITIONAL_PARAMETER_GROUPS',"Can't have multiple groups of positional parameters in a single parameter list.","Try combining all of the groups into a single group.");
        }
        return this.__$MULTIPLE_POSITIONAL_PARAMETER_GROUPS;
    }

    private static __$MULTIPLE_VARIABLES_IN_FOR_EACH : ParserErrorCode;
    static get MULTIPLE_VARIABLES_IN_FOR_EACH() : ParserErrorCode { 
        if (this.__$MULTIPLE_VARIABLES_IN_FOR_EACH===undefined) {
            this.__$MULTIPLE_VARIABLES_IN_FOR_EACH = new ParserErrorCode('MULTIPLE_VARIABLES_IN_FOR_EACH',"A single loop variable must be declared in a for-each loop before " + "the 'in', but {0} were found.","Try moving all but one of the declarations inside the loop body.");
        }
        return this.__$MULTIPLE_VARIABLES_IN_FOR_EACH;
    }

    private static __$MULTIPLE_WITH_CLAUSES : ParserErrorCode;
    static get MULTIPLE_WITH_CLAUSES() : ParserErrorCode { 
        if (this.__$MULTIPLE_WITH_CLAUSES===undefined) {
            this.__$MULTIPLE_WITH_CLAUSES = new ParserErrorCode('MULTIPLE_WITH_CLAUSES',"Each class definition can have at most one with clause.","Try combining all of the with clauses into a single clause.");
        }
        return this.__$MULTIPLE_WITH_CLAUSES;
    }

    private static __$NAMED_FUNCTION_EXPRESSION : ParserErrorCode;
    static get NAMED_FUNCTION_EXPRESSION() : ParserErrorCode { 
        if (this.__$NAMED_FUNCTION_EXPRESSION===undefined) {
            this.__$NAMED_FUNCTION_EXPRESSION = new ParserErrorCode('NAMED_FUNCTION_EXPRESSION',"Function expressions can't be named.","Try removing the name, or " + "moving the function expression to a function declaration statement.");
        }
        return this.__$NAMED_FUNCTION_EXPRESSION;
    }

    private static __$NAMED_FUNCTION_TYPE : ParserErrorCode;
    static get NAMED_FUNCTION_TYPE() : ParserErrorCode { 
        if (this.__$NAMED_FUNCTION_TYPE===undefined) {
            this.__$NAMED_FUNCTION_TYPE = new ParserErrorCode('NAMED_FUNCTION_TYPE',"Function types can't be named.","Try replacing the name with the keyword 'Function'.");
        }
        return this.__$NAMED_FUNCTION_TYPE;
    }

    private static __$NAMED_PARAMETER_OUTSIDE_GROUP : ParserErrorCode;
    static get NAMED_PARAMETER_OUTSIDE_GROUP() : ParserErrorCode { 
        if (this.__$NAMED_PARAMETER_OUTSIDE_GROUP===undefined) {
            this.__$NAMED_PARAMETER_OUTSIDE_GROUP = new ParserErrorCode('NAMED_PARAMETER_OUTSIDE_GROUP',"Named parameters must be enclosed in curly braces ('{' and '}').","Try surrounding the named parameters in curly braces.");
        }
        return this.__$NAMED_PARAMETER_OUTSIDE_GROUP;
    }

    private static __$NATIVE_CLAUSE_IN_NON_SDK_CODE : ParserErrorCode;
    static get NATIVE_CLAUSE_IN_NON_SDK_CODE() : ParserErrorCode { 
        if (this.__$NATIVE_CLAUSE_IN_NON_SDK_CODE===undefined) {
            this.__$NATIVE_CLAUSE_IN_NON_SDK_CODE = new ParserErrorCode('NATIVE_CLAUSE_IN_NON_SDK_CODE',"Native clause can only be used in the SDK and code that is loaded " + "through native extensions.","Try removing the native clause.");
        }
        return this.__$NATIVE_CLAUSE_IN_NON_SDK_CODE;
    }

    private static __$NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE : ParserErrorCode;
    static get NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE() : ParserErrorCode { 
        if (this.__$NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE===undefined) {
            this.__$NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE = new ParserErrorCode('NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE',"Native functions can only be declared in the SDK and code that is " + "loaded through native extensions.","Try removing the word 'native'.");
        }
        return this.__$NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE;
    }

    private static __$NON_CONSTRUCTOR_FACTORY : ParserErrorCode;
    static get NON_CONSTRUCTOR_FACTORY() : ParserErrorCode { 
        if (this.__$NON_CONSTRUCTOR_FACTORY===undefined) {
            this.__$NON_CONSTRUCTOR_FACTORY = new ParserErrorCode('NON_CONSTRUCTOR_FACTORY',"Only a constructor can be declared to be a factory.","Try removing the keyword 'factory'.");
        }
        return this.__$NON_CONSTRUCTOR_FACTORY;
    }

    private static __$NON_IDENTIFIER_LIBRARY_NAME : ParserErrorCode;
    static get NON_IDENTIFIER_LIBRARY_NAME() : ParserErrorCode { 
        if (this.__$NON_IDENTIFIER_LIBRARY_NAME===undefined) {
            this.__$NON_IDENTIFIER_LIBRARY_NAME = new ParserErrorCode('NON_IDENTIFIER_LIBRARY_NAME',"The name of a library must be an identifier.","Try using an identifier as the name of the library.");
        }
        return this.__$NON_IDENTIFIER_LIBRARY_NAME;
    }

    private static __$NON_PART_OF_DIRECTIVE_IN_PART : ParserErrorCode;
    static get NON_PART_OF_DIRECTIVE_IN_PART() : ParserErrorCode { 
        if (this.__$NON_PART_OF_DIRECTIVE_IN_PART===undefined) {
            this.__$NON_PART_OF_DIRECTIVE_IN_PART = new ParserErrorCode('NON_PART_OF_DIRECTIVE_IN_PART',"The part-of directive must be the only directive in a part.","Try removing the other directives, or " + "moving them to the library for which this is a part.");
        }
        return this.__$NON_PART_OF_DIRECTIVE_IN_PART;
    }

    private static __$NON_STRING_LITERAL_AS_URI : ParserErrorCode;
    static get NON_STRING_LITERAL_AS_URI() : ParserErrorCode { 
        if (this.__$NON_STRING_LITERAL_AS_URI===undefined) {
            this.__$NON_STRING_LITERAL_AS_URI = new ParserErrorCode('NON_STRING_LITERAL_AS_URI',"The URI must be a string literal.","Try enclosing the URI in either single or double quotes.");
        }
        return this.__$NON_STRING_LITERAL_AS_URI;
    }

    private static __$NON_USER_DEFINABLE_OPERATOR : ParserErrorCode;
    static get NON_USER_DEFINABLE_OPERATOR() : ParserErrorCode { 
        if (this.__$NON_USER_DEFINABLE_OPERATOR===undefined) {
            this.__$NON_USER_DEFINABLE_OPERATOR = new ParserErrorCode('NON_USER_DEFINABLE_OPERATOR',"The operator '{0}' isn't user definable.");
        }
        return this.__$NON_USER_DEFINABLE_OPERATOR;
    }

    private static __$NORMAL_BEFORE_OPTIONAL_PARAMETERS : ParserErrorCode;
    static get NORMAL_BEFORE_OPTIONAL_PARAMETERS() : ParserErrorCode { 
        if (this.__$NORMAL_BEFORE_OPTIONAL_PARAMETERS===undefined) {
            this.__$NORMAL_BEFORE_OPTIONAL_PARAMETERS = new ParserErrorCode('NORMAL_BEFORE_OPTIONAL_PARAMETERS',"Normal parameters must occur before optional parameters.","Try moving all of the normal parameters before the optional parameters.");
        }
        return this.__$NORMAL_BEFORE_OPTIONAL_PARAMETERS;
    }

    private static __$NULLABLE_TYPE_IN_EXTENDS : ParserErrorCode;
    static get NULLABLE_TYPE_IN_EXTENDS() : ParserErrorCode { 
        if (this.__$NULLABLE_TYPE_IN_EXTENDS===undefined) {
            this.__$NULLABLE_TYPE_IN_EXTENDS = new ParserErrorCode('NULLABLE_TYPE_IN_EXTENDS',"A nullable type can't be used in an extends clause.","Try removing the '?' from the type name.");
        }
        return this.__$NULLABLE_TYPE_IN_EXTENDS;
    }

    private static __$NULLABLE_TYPE_IN_IMPLEMENTS : ParserErrorCode;
    static get NULLABLE_TYPE_IN_IMPLEMENTS() : ParserErrorCode { 
        if (this.__$NULLABLE_TYPE_IN_IMPLEMENTS===undefined) {
            this.__$NULLABLE_TYPE_IN_IMPLEMENTS = new ParserErrorCode('NULLABLE_TYPE_IN_IMPLEMENTS',"A nullable type can't be used in an implements clause.","Try removing the '?' from the type name.");
        }
        return this.__$NULLABLE_TYPE_IN_IMPLEMENTS;
    }

    private static __$NULLABLE_TYPE_IN_WITH : ParserErrorCode;
    static get NULLABLE_TYPE_IN_WITH() : ParserErrorCode { 
        if (this.__$NULLABLE_TYPE_IN_WITH===undefined) {
            this.__$NULLABLE_TYPE_IN_WITH = new ParserErrorCode('NULLABLE_TYPE_IN_WITH',"A nullable type can't be used in a with clause.","Try removing the '?' from the type name.");
        }
        return this.__$NULLABLE_TYPE_IN_WITH;
    }

    private static __$NULLABLE_TYPE_PARAMETER : ParserErrorCode;
    static get NULLABLE_TYPE_PARAMETER() : ParserErrorCode { 
        if (this.__$NULLABLE_TYPE_PARAMETER===undefined) {
            this.__$NULLABLE_TYPE_PARAMETER = new ParserErrorCode('NULLABLE_TYPE_PARAMETER',"Type parameters can't be nullable.","Try removing the '?' from the type name.");
        }
        return this.__$NULLABLE_TYPE_PARAMETER;
    }

    private static __$POSITIONAL_AFTER_NAMED_ARGUMENT : ParserErrorCode;
    static get POSITIONAL_AFTER_NAMED_ARGUMENT() : ParserErrorCode { 
        if (this.__$POSITIONAL_AFTER_NAMED_ARGUMENT===undefined) {
            this.__$POSITIONAL_AFTER_NAMED_ARGUMENT = new ParserErrorCode('POSITIONAL_AFTER_NAMED_ARGUMENT',"Positional arguments must occur before named arguments.","Try moving all of the positional arguments before the named arguments.");
        }
        return this.__$POSITIONAL_AFTER_NAMED_ARGUMENT;
    }

    private static __$POSITIONAL_PARAMETER_OUTSIDE_GROUP : ParserErrorCode;
    static get POSITIONAL_PARAMETER_OUTSIDE_GROUP() : ParserErrorCode { 
        if (this.__$POSITIONAL_PARAMETER_OUTSIDE_GROUP===undefined) {
            this.__$POSITIONAL_PARAMETER_OUTSIDE_GROUP = new ParserErrorCode('POSITIONAL_PARAMETER_OUTSIDE_GROUP',"Positional parameters must be enclosed in square brackets ('[' and ']').","Try surrounding the positional parameters in square brackets.");
        }
        return this.__$POSITIONAL_PARAMETER_OUTSIDE_GROUP;
    }

    private static __$REDIRECTING_CONSTRUCTOR_WITH_BODY : ParserErrorCode;
    static get REDIRECTING_CONSTRUCTOR_WITH_BODY() : ParserErrorCode { 
        if (this.__$REDIRECTING_CONSTRUCTOR_WITH_BODY===undefined) {
            this.__$REDIRECTING_CONSTRUCTOR_WITH_BODY = new ParserErrorCode('REDIRECTING_CONSTRUCTOR_WITH_BODY',"Redirecting constructors can't have a body.","Try removing the body, or " + "not making this a redirecting constructor.");
        }
        return this.__$REDIRECTING_CONSTRUCTOR_WITH_BODY;
    }

    private static __$REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR : ParserErrorCode;
    static get REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR() : ParserErrorCode { 
        if (this.__$REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR===undefined) {
            this.__$REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR = new ParserErrorCode('REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR',"Only factory constructor can specify '=' redirection.","Try making this a factory constructor, or " + "not making this a redirecting constructor.");
        }
        return this.__$REDIRECTION_IN_NON_FACTORY_CONSTRUCTOR;
    }

    private static __$SETTER_IN_FUNCTION : ParserErrorCode;
    static get SETTER_IN_FUNCTION() : ParserErrorCode { 
        if (this.__$SETTER_IN_FUNCTION===undefined) {
            this.__$SETTER_IN_FUNCTION = new ParserErrorCode('SETTER_IN_FUNCTION',"Setters can't be defined within methods or functions.","Try moving the setter outside the method or function.");
        }
        return this.__$SETTER_IN_FUNCTION;
    }

    private static __$STACK_OVERFLOW : ParserErrorCode;
    static get STACK_OVERFLOW() : ParserErrorCode { 
        if (this.__$STACK_OVERFLOW===undefined) {
            this.__$STACK_OVERFLOW = new ParserErrorCode('STACK_OVERFLOW',"The file has too many nested expressions or statements.","Try simplifying the code.");
        }
        return this.__$STACK_OVERFLOW;
    }

    private static __$STATIC_AFTER_CONST : ParserErrorCode;
    static get STATIC_AFTER_CONST() : ParserErrorCode { 
        if (this.__$STATIC_AFTER_CONST===undefined) {
            this.__$STATIC_AFTER_CONST = new ParserErrorCode('STATIC_AFTER_CONST',"The modifier 'static' should be before the modifier 'const'.","Try re-ordering the modifiers.");
        }
        return this.__$STATIC_AFTER_CONST;
    }

    private static __$STATIC_AFTER_FINAL : ParserErrorCode;
    static get STATIC_AFTER_FINAL() : ParserErrorCode { 
        if (this.__$STATIC_AFTER_FINAL===undefined) {
            this.__$STATIC_AFTER_FINAL = new ParserErrorCode('STATIC_AFTER_FINAL',"The modifier 'static' should be before the modifier 'final'.","Try re-ordering the modifiers.");
        }
        return this.__$STATIC_AFTER_FINAL;
    }

    private static __$STATIC_AFTER_VAR : ParserErrorCode;
    static get STATIC_AFTER_VAR() : ParserErrorCode { 
        if (this.__$STATIC_AFTER_VAR===undefined) {
            this.__$STATIC_AFTER_VAR = new ParserErrorCode('STATIC_AFTER_VAR',"The modifier 'static' should be before the modifier 'var'.","Try re-ordering the modifiers.");
        }
        return this.__$STATIC_AFTER_VAR;
    }

    private static __$STATIC_CONSTRUCTOR : ParserErrorCode;
    static get STATIC_CONSTRUCTOR() : ParserErrorCode { 
        if (this.__$STATIC_CONSTRUCTOR===undefined) {
            this.__$STATIC_CONSTRUCTOR = new ParserErrorCode('STATIC_CONSTRUCTOR',"Constructors can't be static.","Try removing the keyword 'static'.");
        }
        return this.__$STATIC_CONSTRUCTOR;
    }

    private static __$STATIC_GETTER_WITHOUT_BODY : ParserErrorCode;
    static get STATIC_GETTER_WITHOUT_BODY() : ParserErrorCode { 
        if (this.__$STATIC_GETTER_WITHOUT_BODY===undefined) {
            this.__$STATIC_GETTER_WITHOUT_BODY = new ParserErrorCode('STATIC_GETTER_WITHOUT_BODY',"A 'static' getter must have a body.","Try adding a body to the getter, or removing the keyword 'static'.");
        }
        return this.__$STATIC_GETTER_WITHOUT_BODY;
    }

    private static __$STATIC_OPERATOR : ParserErrorCode;
    static get STATIC_OPERATOR() : ParserErrorCode { 
        if (this.__$STATIC_OPERATOR===undefined) {
            this.__$STATIC_OPERATOR = new ParserErrorCode('STATIC_OPERATOR',"Operators can't be static.","Try removing the keyword 'static'.");
        }
        return this.__$STATIC_OPERATOR;
    }

    private static __$STATIC_SETTER_WITHOUT_BODY : ParserErrorCode;
    static get STATIC_SETTER_WITHOUT_BODY() : ParserErrorCode { 
        if (this.__$STATIC_SETTER_WITHOUT_BODY===undefined) {
            this.__$STATIC_SETTER_WITHOUT_BODY = new ParserErrorCode('STATIC_SETTER_WITHOUT_BODY',"A 'static' setter must have a body.","Try adding a body to the setter, or removing the keyword 'static'.");
        }
        return this.__$STATIC_SETTER_WITHOUT_BODY;
    }

    private static __$STATIC_TOP_LEVEL_DECLARATION : ParserErrorCode;
    static get STATIC_TOP_LEVEL_DECLARATION() : ParserErrorCode { 
        if (this.__$STATIC_TOP_LEVEL_DECLARATION===undefined) {
            this.__$STATIC_TOP_LEVEL_DECLARATION = new ParserErrorCode('STATIC_TOP_LEVEL_DECLARATION',"Top-level declarations can't be declared to be static.","Try removing the keyword 'static'.");
        }
        return this.__$STATIC_TOP_LEVEL_DECLARATION;
    }

    private static __$SWITCH_HAS_CASE_AFTER_DEFAULT_CASE : ParserErrorCode;
    static get SWITCH_HAS_CASE_AFTER_DEFAULT_CASE() : ParserErrorCode { 
        if (this.__$SWITCH_HAS_CASE_AFTER_DEFAULT_CASE===undefined) {
            this.__$SWITCH_HAS_CASE_AFTER_DEFAULT_CASE = new ParserErrorCode('SWITCH_HAS_CASE_AFTER_DEFAULT_CASE',"The default case should be the last case in a switch statement.","Try moving the default case after the other case clauses.");
        }
        return this.__$SWITCH_HAS_CASE_AFTER_DEFAULT_CASE;
    }

    private static __$SWITCH_HAS_MULTIPLE_DEFAULT_CASES : ParserErrorCode;
    static get SWITCH_HAS_MULTIPLE_DEFAULT_CASES() : ParserErrorCode { 
        if (this.__$SWITCH_HAS_MULTIPLE_DEFAULT_CASES===undefined) {
            this.__$SWITCH_HAS_MULTIPLE_DEFAULT_CASES = new ParserErrorCode('SWITCH_HAS_MULTIPLE_DEFAULT_CASES',"The 'default' case can only be declared once.","Try removing all but one default case.");
        }
        return this.__$SWITCH_HAS_MULTIPLE_DEFAULT_CASES;
    }

    private static __$TOP_LEVEL_OPERATOR : ParserErrorCode;
    static get TOP_LEVEL_OPERATOR() : ParserErrorCode { 
        if (this.__$TOP_LEVEL_OPERATOR===undefined) {
            this.__$TOP_LEVEL_OPERATOR = new ParserErrorCode('TOP_LEVEL_OPERATOR',"Operators must be declared within a class.","Try removing the operator, " + "moving it to a class, or " + "converting it to be a function.");
        }
        return this.__$TOP_LEVEL_OPERATOR;
    }

    private static __$TYPEDEF_IN_CLASS : ParserErrorCode;
    static get TYPEDEF_IN_CLASS() : ParserErrorCode { 
        if (this.__$TYPEDEF_IN_CLASS===undefined) {
            this.__$TYPEDEF_IN_CLASS = new ParserErrorCode('TYPEDEF_IN_CLASS',"Typedefs can't be declared inside classes.","Try moving the typedef to the top-level.");
        }
        return this.__$TYPEDEF_IN_CLASS;
    }

    private static __$UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP : ParserErrorCode;
    static get UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP() : ParserErrorCode { 
        if (this.__$UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP===undefined) {
            this.__$UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP = new ParserErrorCode('UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP',"There is no '{0}' to open a parameter group.","Try inserting the '{0}' at the appropriate location.");
        }
        return this.__$UNEXPECTED_TERMINATOR_FOR_PARAMETER_GROUP;
    }

    private static __$UNEXPECTED_TOKEN : ParserErrorCode;
    static get UNEXPECTED_TOKEN() : ParserErrorCode { 
        if (this.__$UNEXPECTED_TOKEN===undefined) {
            this.__$UNEXPECTED_TOKEN = new ParserErrorCode('UNEXPECTED_TOKEN',"Unexpected text '{0}'.","Try removing the text.");
        }
        return this.__$UNEXPECTED_TOKEN;
    }

    private static __$WITH_BEFORE_EXTENDS : ParserErrorCode;
    static get WITH_BEFORE_EXTENDS() : ParserErrorCode { 
        if (this.__$WITH_BEFORE_EXTENDS===undefined) {
            this.__$WITH_BEFORE_EXTENDS = new ParserErrorCode('WITH_BEFORE_EXTENDS',"The extends clause must be before the with clause.","Try moving the extends clause before the with clause.");
        }
        return this.__$WITH_BEFORE_EXTENDS;
    }

    private static __$WITH_WITHOUT_EXTENDS : ParserErrorCode;
    static get WITH_WITHOUT_EXTENDS() : ParserErrorCode { 
        if (this.__$WITH_WITHOUT_EXTENDS===undefined) {
            this.__$WITH_WITHOUT_EXTENDS = new ParserErrorCode('WITH_WITHOUT_EXTENDS',"The with clause can't be used without an extends clause.","Try adding an extends clause such as 'extends Object'.");
        }
        return this.__$WITH_WITHOUT_EXTENDS;
    }

    private static __$WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER : ParserErrorCode;
    static get WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER() : ParserErrorCode { 
        if (this.__$WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER===undefined) {
            this.__$WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER = new ParserErrorCode('WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER',"The default value of a positional parameter should be preceeded by '='.","Try replacing the ':' with '='.");
        }
        return this.__$WRONG_SEPARATOR_FOR_POSITIONAL_PARAMETER;
    }

    private static __$WRONG_TERMINATOR_FOR_PARAMETER_GROUP : ParserErrorCode;
    static get WRONG_TERMINATOR_FOR_PARAMETER_GROUP() : ParserErrorCode { 
        if (this.__$WRONG_TERMINATOR_FOR_PARAMETER_GROUP===undefined) {
            this.__$WRONG_TERMINATOR_FOR_PARAMETER_GROUP = new ParserErrorCode('WRONG_TERMINATOR_FOR_PARAMETER_GROUP',"Expected '{0}' to close parameter group.","Try replacing '{0}' with '{1}'.");
        }
        return this.__$WRONG_TERMINATOR_FOR_PARAMETER_GROUP;
    }

    private static __$VAR_AND_TYPE : ParserErrorCode;
    static get VAR_AND_TYPE() : ParserErrorCode { 
        if (this.__$VAR_AND_TYPE===undefined) {
            this.__$VAR_AND_TYPE = new ParserErrorCode('VAR_AND_TYPE',"Variables can't be declared using both 'var' and a type name.","Try removing the keyword 'var'.");
        }
        return this.__$VAR_AND_TYPE;
    }

    private static __$VAR_AS_TYPE_NAME : ParserErrorCode;
    static get VAR_AS_TYPE_NAME() : ParserErrorCode { 
        if (this.__$VAR_AS_TYPE_NAME===undefined) {
            this.__$VAR_AS_TYPE_NAME = new ParserErrorCode('VAR_AS_TYPE_NAME',"The keyword 'var' can't be used as a type name.","Try using 'dynamic' instead of 'var'.");
        }
        return this.__$VAR_AS_TYPE_NAME;
    }

    private static __$VAR_CLASS : ParserErrorCode;
    static get VAR_CLASS() : ParserErrorCode { 
        if (this.__$VAR_CLASS===undefined) {
            this.__$VAR_CLASS = new ParserErrorCode('VAR_CLASS',"Classes can't be declared to be 'var'.","Try removing the keyword 'var'.");
        }
        return this.__$VAR_CLASS;
    }

    private static __$VAR_ENUM : ParserErrorCode;
    static get VAR_ENUM() : ParserErrorCode { 
        if (this.__$VAR_ENUM===undefined) {
            this.__$VAR_ENUM = new ParserErrorCode('VAR_ENUM',"Enums can't be declared to be 'var'.","Try removing the keyword 'var'.");
        }
        return this.__$VAR_ENUM;
    }

    private static __$VAR_RETURN_TYPE : ParserErrorCode;
    static get VAR_RETURN_TYPE() : ParserErrorCode { 
        if (this.__$VAR_RETURN_TYPE===undefined) {
            this.__$VAR_RETURN_TYPE = new ParserErrorCode('VAR_RETURN_TYPE',"The return type can't be 'var'.","Try removing the keyword 'var', or " + "replacing it with the name of the return type.");
        }
        return this.__$VAR_RETURN_TYPE;
    }

    private static __$VAR_TYPEDEF : ParserErrorCode;
    static get VAR_TYPEDEF() : ParserErrorCode { 
        if (this.__$VAR_TYPEDEF===undefined) {
            this.__$VAR_TYPEDEF = new ParserErrorCode('VAR_TYPEDEF',"Typedefs can't be declared to be 'var'.","Try removing the keyword 'var', or " + "replacing it with the name of the return type.");
        }
        return this.__$VAR_TYPEDEF;
    }

    private static __$VOID_PARAMETER : ParserErrorCode;
    static get VOID_PARAMETER() : ParserErrorCode { 
        if (this.__$VOID_PARAMETER===undefined) {
            this.__$VOID_PARAMETER = new ParserErrorCode('VOID_PARAMETER',"Parameters can't have a type of 'void'.","Try removing the keyword 'var', or " + "replacing it with the name of the type of the parameter.");
        }
        return this.__$VOID_PARAMETER;
    }

    private static __$VOID_VARIABLE : ParserErrorCode;
    static get VOID_VARIABLE() : ParserErrorCode { 
        if (this.__$VOID_VARIABLE===undefined) {
            this.__$VOID_VARIABLE = new ParserErrorCode('VOID_VARIABLE',"Variables can't have a type of 'void'.","Try removing the keyword 'void', or " + "replacing it with the name of the type of the variable.");
        }
        return this.__$VOID_VARIABLE;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    ParserErrorCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorSeverity.ERROR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.SYNTACTIC_ERROR;
    }
}

export class properties {
}
