/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/assist.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AssistContextImpl {
    export type Constructors = 'AssistContextImpl';
    export type Interface = Omit<AssistContextImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AssistContextImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisDriver : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectionOffset : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectionLength : number;

    constructor(analysisDriver : any,source : any,selectionOffset : number,selectionLength : number) {
    }
    @defaultConstructor
    AssistContextImpl(analysisDriver : any,source : any,selectionOffset : number,selectionLength : number) {
        this.analysisDriver = analysisDriver;
        this.source = source;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
    }
}

export namespace DartAssistKind {
    export type Constructors = 'DartAssistKind';
    export type Interface = Omit<DartAssistKind, Constructors>;
}
@DartClass
export class DartAssistKind {
    private static __$ADD_PART_DIRECTIVE;
    static get ADD_PART_DIRECTIVE() { 
        if (this.__$ADD_PART_DIRECTIVE===undefined) {
            this.__$ADD_PART_DIRECTIVE = new bare.createInstance(any,null,'ADD_PART_DIRECTIVE',30,"Add 'part' directive");
        }
        return this.__$ADD_PART_DIRECTIVE;
    }

    private static __$ADD_TYPE_ANNOTATION;
    static get ADD_TYPE_ANNOTATION() { 
        if (this.__$ADD_TYPE_ANNOTATION===undefined) {
            this.__$ADD_TYPE_ANNOTATION = new bare.createInstance(any,null,'ADD_TYPE_ANNOTATION',30,"Add type annotation");
        }
        return this.__$ADD_TYPE_ANNOTATION;
    }

    private static __$ASSIGN_TO_LOCAL_VARIABLE;
    static get ASSIGN_TO_LOCAL_VARIABLE() { 
        if (this.__$ASSIGN_TO_LOCAL_VARIABLE===undefined) {
            this.__$ASSIGN_TO_LOCAL_VARIABLE = new bare.createInstance(any,null,'ASSIGN_TO_LOCAL_VARIABLE',30,"Assign value to new local variable");
        }
        return this.__$ASSIGN_TO_LOCAL_VARIABLE;
    }

    private static __$CONVERT_DOCUMENTATION_INTO_BLOCK;
    static get CONVERT_DOCUMENTATION_INTO_BLOCK() { 
        if (this.__$CONVERT_DOCUMENTATION_INTO_BLOCK===undefined) {
            this.__$CONVERT_DOCUMENTATION_INTO_BLOCK = new bare.createInstance(any,null,'CONVERT_DOCUMENTATION_INTO_BLOCK',30,"Convert into block documentation comment");
        }
        return this.__$CONVERT_DOCUMENTATION_INTO_BLOCK;
    }

    private static __$CONVERT_DOCUMENTATION_INTO_LINE;
    static get CONVERT_DOCUMENTATION_INTO_LINE() { 
        if (this.__$CONVERT_DOCUMENTATION_INTO_LINE===undefined) {
            this.__$CONVERT_DOCUMENTATION_INTO_LINE = new bare.createInstance(any,null,'CONVERT_DOCUMENTATION_INTO_LINE',30,"Convert into line documentation comment");
        }
        return this.__$CONVERT_DOCUMENTATION_INTO_LINE;
    }

    private static __$CONVERT_FLUTTER_CHILD;
    static get CONVERT_FLUTTER_CHILD() { 
        if (this.__$CONVERT_FLUTTER_CHILD===undefined) {
            this.__$CONVERT_FLUTTER_CHILD = new bare.createInstance(any,null,'CONVERT_FLUTTER_CHILD',30,"Convert to children:");
        }
        return this.__$CONVERT_FLUTTER_CHILD;
    }

    private static __$CONVERT_INTO_BLOCK_BODY;
    static get CONVERT_INTO_BLOCK_BODY() { 
        if (this.__$CONVERT_INTO_BLOCK_BODY===undefined) {
            this.__$CONVERT_INTO_BLOCK_BODY = new bare.createInstance(any,null,'CONVERT_INTO_BLOCK_BODY',30,"Convert into block body");
        }
        return this.__$CONVERT_INTO_BLOCK_BODY;
    }

    private static __$CONVERT_INTO_EXPRESSION_BODY;
    static get CONVERT_INTO_EXPRESSION_BODY() { 
        if (this.__$CONVERT_INTO_EXPRESSION_BODY===undefined) {
            this.__$CONVERT_INTO_EXPRESSION_BODY = new bare.createInstance(any,null,'CONVERT_INTO_EXPRESSION_BODY',30,"Convert into expression body");
        }
        return this.__$CONVERT_INTO_EXPRESSION_BODY;
    }

    private static __$CONVERT_INTO_FOR_INDEX;
    static get CONVERT_INTO_FOR_INDEX() { 
        if (this.__$CONVERT_INTO_FOR_INDEX===undefined) {
            this.__$CONVERT_INTO_FOR_INDEX = new bare.createInstance(any,null,'CONVERT_INTO_FOR_INDEX',30,"Convert into for-index loop");
        }
        return this.__$CONVERT_INTO_FOR_INDEX;
    }

    private static __$CONVERT_INTO_FINAL_FIELD;
    static get CONVERT_INTO_FINAL_FIELD() { 
        if (this.__$CONVERT_INTO_FINAL_FIELD===undefined) {
            this.__$CONVERT_INTO_FINAL_FIELD = new bare.createInstance(any,null,'CONVERT_INTO_FINAL_FIELD',30,"Convert into final field");
        }
        return this.__$CONVERT_INTO_FINAL_FIELD;
    }

    private static __$CONVERT_INTO_GETTER;
    static get CONVERT_INTO_GETTER() { 
        if (this.__$CONVERT_INTO_GETTER===undefined) {
            this.__$CONVERT_INTO_GETTER = new bare.createInstance(any,null,'CONVERT_INTO_GETTER',30,"Convert into getter");
        }
        return this.__$CONVERT_INTO_GETTER;
    }

    private static __$CONVERT_INTO_IS_NOT;
    static get CONVERT_INTO_IS_NOT() { 
        if (this.__$CONVERT_INTO_IS_NOT===undefined) {
            this.__$CONVERT_INTO_IS_NOT = new bare.createInstance(any,null,'CONVERT_INTO_IS_NOT',30,"Convert into is!");
        }
        return this.__$CONVERT_INTO_IS_NOT;
    }

    private static __$CONVERT_INTO_IS_NOT_EMPTY;
    static get CONVERT_INTO_IS_NOT_EMPTY() { 
        if (this.__$CONVERT_INTO_IS_NOT_EMPTY===undefined) {
            this.__$CONVERT_INTO_IS_NOT_EMPTY = new bare.createInstance(any,null,'CONVERT_INTO_IS_NOT_EMPTY',30,"Convert into 'isNotEmpty'");
        }
        return this.__$CONVERT_INTO_IS_NOT_EMPTY;
    }

    private static __$CONVERT_TO_FIELD_PARAMETER;
    static get CONVERT_TO_FIELD_PARAMETER() { 
        if (this.__$CONVERT_TO_FIELD_PARAMETER===undefined) {
            this.__$CONVERT_TO_FIELD_PARAMETER = new bare.createInstance(any,null,'CONVERT_TO_FIELD_PARAMETER',30,"Convert to field formal parameter");
        }
        return this.__$CONVERT_TO_FIELD_PARAMETER;
    }

    private static __$CONVERT_TO_NORMAL_PARAMETER;
    static get CONVERT_TO_NORMAL_PARAMETER() { 
        if (this.__$CONVERT_TO_NORMAL_PARAMETER===undefined) {
            this.__$CONVERT_TO_NORMAL_PARAMETER = new bare.createInstance(any,null,'CONVERT_TO_NORMAL_PARAMETER',30,"Convert to normal parameter");
        }
        return this.__$CONVERT_TO_NORMAL_PARAMETER;
    }

    private static __$ENCAPSULATE_FIELD;
    static get ENCAPSULATE_FIELD() { 
        if (this.__$ENCAPSULATE_FIELD===undefined) {
            this.__$ENCAPSULATE_FIELD = new bare.createInstance(any,null,'ENCAPSULATE_FIELD',30,"Encapsulate field");
        }
        return this.__$ENCAPSULATE_FIELD;
    }

    private static __$EXCHANGE_OPERANDS;
    static get EXCHANGE_OPERANDS() { 
        if (this.__$EXCHANGE_OPERANDS===undefined) {
            this.__$EXCHANGE_OPERANDS = new bare.createInstance(any,null,'EXCHANGE_OPERANDS',30,"Exchange operands");
        }
        return this.__$EXCHANGE_OPERANDS;
    }

    private static __$EXTRACT_CLASS;
    static get EXTRACT_CLASS() { 
        if (this.__$EXTRACT_CLASS===undefined) {
            this.__$EXTRACT_CLASS = new bare.createInstance(any,null,'EXTRACT_CLASS',30,"Extract class into file '{0}'");
        }
        return this.__$EXTRACT_CLASS;
    }

    private static __$IMPORT_ADD_SHOW;
    static get IMPORT_ADD_SHOW() { 
        if (this.__$IMPORT_ADD_SHOW===undefined) {
            this.__$IMPORT_ADD_SHOW = new bare.createInstance(any,null,'IMPORT_ADD_SHOW',30,"Add explicit 'show' combinator");
        }
        return this.__$IMPORT_ADD_SHOW;
    }

    private static __$INTRODUCE_LOCAL_CAST_TYPE;
    static get INTRODUCE_LOCAL_CAST_TYPE() { 
        if (this.__$INTRODUCE_LOCAL_CAST_TYPE===undefined) {
            this.__$INTRODUCE_LOCAL_CAST_TYPE = new bare.createInstance(any,null,'INTRODUCE_LOCAL_CAST_TYPE',30,"Introduce new local with tested type");
        }
        return this.__$INTRODUCE_LOCAL_CAST_TYPE;
    }

    private static __$INVERT_IF_STATEMENT;
    static get INVERT_IF_STATEMENT() { 
        if (this.__$INVERT_IF_STATEMENT===undefined) {
            this.__$INVERT_IF_STATEMENT = new bare.createInstance(any,null,'INVERT_IF_STATEMENT',30,"Invert 'if' statement");
        }
        return this.__$INVERT_IF_STATEMENT;
    }

    private static __$JOIN_IF_WITH_INNER;
    static get JOIN_IF_WITH_INNER() { 
        if (this.__$JOIN_IF_WITH_INNER===undefined) {
            this.__$JOIN_IF_WITH_INNER = new bare.createInstance(any,null,'JOIN_IF_WITH_INNER',30,"Join 'if' statement with inner 'if' statement");
        }
        return this.__$JOIN_IF_WITH_INNER;
    }

    private static __$JOIN_IF_WITH_OUTER;
    static get JOIN_IF_WITH_OUTER() { 
        if (this.__$JOIN_IF_WITH_OUTER===undefined) {
            this.__$JOIN_IF_WITH_OUTER = new bare.createInstance(any,null,'JOIN_IF_WITH_OUTER',30,"Join 'if' statement with outer 'if' statement");
        }
        return this.__$JOIN_IF_WITH_OUTER;
    }

    private static __$JOIN_VARIABLE_DECLARATION;
    static get JOIN_VARIABLE_DECLARATION() { 
        if (this.__$JOIN_VARIABLE_DECLARATION===undefined) {
            this.__$JOIN_VARIABLE_DECLARATION = new bare.createInstance(any,null,'JOIN_VARIABLE_DECLARATION',30,"Join variable declaration");
        }
        return this.__$JOIN_VARIABLE_DECLARATION;
    }

    private static __$MOVE_FLUTTER_WIDGET_DOWN;
    static get MOVE_FLUTTER_WIDGET_DOWN() { 
        if (this.__$MOVE_FLUTTER_WIDGET_DOWN===undefined) {
            this.__$MOVE_FLUTTER_WIDGET_DOWN = new bare.createInstance(any,null,"MOVE_FLUTTER_WIDGET_DOWN",30,"Move widget down");
        }
        return this.__$MOVE_FLUTTER_WIDGET_DOWN;
    }

    private static __$MOVE_FLUTTER_WIDGET_UP;
    static get MOVE_FLUTTER_WIDGET_UP() { 
        if (this.__$MOVE_FLUTTER_WIDGET_UP===undefined) {
            this.__$MOVE_FLUTTER_WIDGET_UP = new bare.createInstance(any,null,"MOVE_FLUTTER_WIDGET_UP",30,"Move widget up");
        }
        return this.__$MOVE_FLUTTER_WIDGET_UP;
    }

    private static __$REPARENT_FLUTTER_LIST;
    static get REPARENT_FLUTTER_LIST() { 
        if (this.__$REPARENT_FLUTTER_LIST===undefined) {
            this.__$REPARENT_FLUTTER_LIST = new bare.createInstance(any,null,"REPARENT_FLUTTER_LIST",30,"Wrap with new widget");
        }
        return this.__$REPARENT_FLUTTER_LIST;
    }

    private static __$REPARENT_FLUTTER_WIDGET;
    static get REPARENT_FLUTTER_WIDGET() { 
        if (this.__$REPARENT_FLUTTER_WIDGET===undefined) {
            this.__$REPARENT_FLUTTER_WIDGET = new bare.createInstance(any,null,"REPARENT_FLUTTER_WIDGET",30,"Wrap with new widget");
        }
        return this.__$REPARENT_FLUTTER_WIDGET;
    }

    private static __$REMOVE_TYPE_ANNOTATION;
    static get REMOVE_TYPE_ANNOTATION() { 
        if (this.__$REMOVE_TYPE_ANNOTATION===undefined) {
            this.__$REMOVE_TYPE_ANNOTATION = new bare.createInstance(any,null,'REMOVE_TYPE_ANNOTATION',29,"Remove type annotation");
        }
        return this.__$REMOVE_TYPE_ANNOTATION;
    }

    private static __$REPLACE_CONDITIONAL_WITH_IF_ELSE;
    static get REPLACE_CONDITIONAL_WITH_IF_ELSE() { 
        if (this.__$REPLACE_CONDITIONAL_WITH_IF_ELSE===undefined) {
            this.__$REPLACE_CONDITIONAL_WITH_IF_ELSE = new bare.createInstance(any,null,'REPLACE_CONDITIONAL_WITH_IF_ELSE',30,"Replace conditional with 'if-else'");
        }
        return this.__$REPLACE_CONDITIONAL_WITH_IF_ELSE;
    }

    private static __$REPLACE_IF_ELSE_WITH_CONDITIONAL;
    static get REPLACE_IF_ELSE_WITH_CONDITIONAL() { 
        if (this.__$REPLACE_IF_ELSE_WITH_CONDITIONAL===undefined) {
            this.__$REPLACE_IF_ELSE_WITH_CONDITIONAL = new bare.createInstance(any,null,'REPLACE_IF_ELSE_WITH_CONDITIONAL',30,"Replace 'if-else' with conditional ('c ? x : y')");
        }
        return this.__$REPLACE_IF_ELSE_WITH_CONDITIONAL;
    }

    private static __$SPLIT_AND_CONDITION;
    static get SPLIT_AND_CONDITION() { 
        if (this.__$SPLIT_AND_CONDITION===undefined) {
            this.__$SPLIT_AND_CONDITION = new bare.createInstance(any,null,'SPLIT_AND_CONDITION',30,"Split && condition");
        }
        return this.__$SPLIT_AND_CONDITION;
    }

    private static __$SPLIT_VARIABLE_DECLARATION;
    static get SPLIT_VARIABLE_DECLARATION() { 
        if (this.__$SPLIT_VARIABLE_DECLARATION===undefined) {
            this.__$SPLIT_VARIABLE_DECLARATION = new bare.createInstance(any,null,'SPLIT_VARIABLE_DECLARATION',30,"Split variable declaration");
        }
        return this.__$SPLIT_VARIABLE_DECLARATION;
    }

    private static __$SURROUND_WITH_BLOCK;
    static get SURROUND_WITH_BLOCK() { 
        if (this.__$SURROUND_WITH_BLOCK===undefined) {
            this.__$SURROUND_WITH_BLOCK = new bare.createInstance(any,null,'SURROUND_WITH_BLOCK',30,"Surround with block");
        }
        return this.__$SURROUND_WITH_BLOCK;
    }

    private static __$SURROUND_WITH_DO_WHILE;
    static get SURROUND_WITH_DO_WHILE() { 
        if (this.__$SURROUND_WITH_DO_WHILE===undefined) {
            this.__$SURROUND_WITH_DO_WHILE = new bare.createInstance(any,null,'SURROUND_WITH_DO_WHILE',30,"Surround with 'do-while'");
        }
        return this.__$SURROUND_WITH_DO_WHILE;
    }

    private static __$SURROUND_WITH_FOR;
    static get SURROUND_WITH_FOR() { 
        if (this.__$SURROUND_WITH_FOR===undefined) {
            this.__$SURROUND_WITH_FOR = new bare.createInstance(any,null,'SURROUND_WITH_FOR',30,"Surround with 'for'");
        }
        return this.__$SURROUND_WITH_FOR;
    }

    private static __$SURROUND_WITH_FOR_IN;
    static get SURROUND_WITH_FOR_IN() { 
        if (this.__$SURROUND_WITH_FOR_IN===undefined) {
            this.__$SURROUND_WITH_FOR_IN = new bare.createInstance(any,null,'SURROUND_WITH_FOR_IN',30,"Surround with 'for-in'");
        }
        return this.__$SURROUND_WITH_FOR_IN;
    }

    private static __$SURROUND_WITH_IF;
    static get SURROUND_WITH_IF() { 
        if (this.__$SURROUND_WITH_IF===undefined) {
            this.__$SURROUND_WITH_IF = new bare.createInstance(any,null,'SURROUND_WITH_IF',30,"Surround with 'if'");
        }
        return this.__$SURROUND_WITH_IF;
    }

    private static __$SURROUND_WITH_TRY_CATCH;
    static get SURROUND_WITH_TRY_CATCH() { 
        if (this.__$SURROUND_WITH_TRY_CATCH===undefined) {
            this.__$SURROUND_WITH_TRY_CATCH = new bare.createInstance(any,null,'SURROUND_WITH_TRY_CATCH',30,"Surround with 'try-catch'");
        }
        return this.__$SURROUND_WITH_TRY_CATCH;
    }

    private static __$SURROUND_WITH_TRY_FINALLY;
    static get SURROUND_WITH_TRY_FINALLY() { 
        if (this.__$SURROUND_WITH_TRY_FINALLY===undefined) {
            this.__$SURROUND_WITH_TRY_FINALLY = new bare.createInstance(any,null,'SURROUND_WITH_TRY_FINALLY',30,"Surround with 'try-finally'");
        }
        return this.__$SURROUND_WITH_TRY_FINALLY;
    }

    private static __$SURROUND_WITH_WHILE;
    static get SURROUND_WITH_WHILE() { 
        if (this.__$SURROUND_WITH_WHILE===undefined) {
            this.__$SURROUND_WITH_WHILE = new bare.createInstance(any,null,'SURROUND_WITH_WHILE',30,"Surround with 'while'");
        }
        return this.__$SURROUND_WITH_WHILE;
    }

    constructor() {
    }
    @defaultConstructor
    DartAssistKind() {
    }
}

export class properties {
}
