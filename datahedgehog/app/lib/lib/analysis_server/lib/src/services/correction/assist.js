"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var AssistContextImpl = /** @class */ (function () {
    function AssistContextImpl(analysisDriver, source, selectionOffset, selectionLength) {
    }
    AssistContextImpl.prototype.AssistContextImpl = function (analysisDriver, source, selectionOffset, selectionLength) {
        this.analysisDriver = analysisDriver;
        this.source = source;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AssistContextImpl.prototype, "analysisDriver", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AssistContextImpl.prototype, "source", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AssistContextImpl.prototype, "selectionOffset", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AssistContextImpl.prototype, "selectionLength", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], AssistContextImpl.prototype, "AssistContextImpl", null);
    AssistContextImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], AssistContextImpl);
    return AssistContextImpl;
}());
exports.AssistContextImpl = AssistContextImpl;
var DartAssistKind = /** @class */ (function () {
    function DartAssistKind() {
    }
    Object.defineProperty(DartAssistKind, "ADD_PART_DIRECTIVE", {
        get: function () {
            if (this.__$ADD_PART_DIRECTIVE === undefined) {
                this.__$ADD_PART_DIRECTIVE = new bare.createInstance(any, null, 'ADD_PART_DIRECTIVE', 30, "Add 'part' directive");
            }
            return this.__$ADD_PART_DIRECTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "ADD_TYPE_ANNOTATION", {
        get: function () {
            if (this.__$ADD_TYPE_ANNOTATION === undefined) {
                this.__$ADD_TYPE_ANNOTATION = new bare.createInstance(any, null, 'ADD_TYPE_ANNOTATION', 30, "Add type annotation");
            }
            return this.__$ADD_TYPE_ANNOTATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "ASSIGN_TO_LOCAL_VARIABLE", {
        get: function () {
            if (this.__$ASSIGN_TO_LOCAL_VARIABLE === undefined) {
                this.__$ASSIGN_TO_LOCAL_VARIABLE = new bare.createInstance(any, null, 'ASSIGN_TO_LOCAL_VARIABLE', 30, "Assign value to new local variable");
            }
            return this.__$ASSIGN_TO_LOCAL_VARIABLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_DOCUMENTATION_INTO_BLOCK", {
        get: function () {
            if (this.__$CONVERT_DOCUMENTATION_INTO_BLOCK === undefined) {
                this.__$CONVERT_DOCUMENTATION_INTO_BLOCK = new bare.createInstance(any, null, 'CONVERT_DOCUMENTATION_INTO_BLOCK', 30, "Convert into block documentation comment");
            }
            return this.__$CONVERT_DOCUMENTATION_INTO_BLOCK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_DOCUMENTATION_INTO_LINE", {
        get: function () {
            if (this.__$CONVERT_DOCUMENTATION_INTO_LINE === undefined) {
                this.__$CONVERT_DOCUMENTATION_INTO_LINE = new bare.createInstance(any, null, 'CONVERT_DOCUMENTATION_INTO_LINE', 30, "Convert into line documentation comment");
            }
            return this.__$CONVERT_DOCUMENTATION_INTO_LINE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_FLUTTER_CHILD", {
        get: function () {
            if (this.__$CONVERT_FLUTTER_CHILD === undefined) {
                this.__$CONVERT_FLUTTER_CHILD = new bare.createInstance(any, null, 'CONVERT_FLUTTER_CHILD', 30, "Convert to children:");
            }
            return this.__$CONVERT_FLUTTER_CHILD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_INTO_BLOCK_BODY", {
        get: function () {
            if (this.__$CONVERT_INTO_BLOCK_BODY === undefined) {
                this.__$CONVERT_INTO_BLOCK_BODY = new bare.createInstance(any, null, 'CONVERT_INTO_BLOCK_BODY', 30, "Convert into block body");
            }
            return this.__$CONVERT_INTO_BLOCK_BODY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_INTO_EXPRESSION_BODY", {
        get: function () {
            if (this.__$CONVERT_INTO_EXPRESSION_BODY === undefined) {
                this.__$CONVERT_INTO_EXPRESSION_BODY = new bare.createInstance(any, null, 'CONVERT_INTO_EXPRESSION_BODY', 30, "Convert into expression body");
            }
            return this.__$CONVERT_INTO_EXPRESSION_BODY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_INTO_FOR_INDEX", {
        get: function () {
            if (this.__$CONVERT_INTO_FOR_INDEX === undefined) {
                this.__$CONVERT_INTO_FOR_INDEX = new bare.createInstance(any, null, 'CONVERT_INTO_FOR_INDEX', 30, "Convert into for-index loop");
            }
            return this.__$CONVERT_INTO_FOR_INDEX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_INTO_FINAL_FIELD", {
        get: function () {
            if (this.__$CONVERT_INTO_FINAL_FIELD === undefined) {
                this.__$CONVERT_INTO_FINAL_FIELD = new bare.createInstance(any, null, 'CONVERT_INTO_FINAL_FIELD', 30, "Convert into final field");
            }
            return this.__$CONVERT_INTO_FINAL_FIELD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_INTO_GETTER", {
        get: function () {
            if (this.__$CONVERT_INTO_GETTER === undefined) {
                this.__$CONVERT_INTO_GETTER = new bare.createInstance(any, null, 'CONVERT_INTO_GETTER', 30, "Convert into getter");
            }
            return this.__$CONVERT_INTO_GETTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_INTO_IS_NOT", {
        get: function () {
            if (this.__$CONVERT_INTO_IS_NOT === undefined) {
                this.__$CONVERT_INTO_IS_NOT = new bare.createInstance(any, null, 'CONVERT_INTO_IS_NOT', 30, "Convert into is!");
            }
            return this.__$CONVERT_INTO_IS_NOT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_INTO_IS_NOT_EMPTY", {
        get: function () {
            if (this.__$CONVERT_INTO_IS_NOT_EMPTY === undefined) {
                this.__$CONVERT_INTO_IS_NOT_EMPTY = new bare.createInstance(any, null, 'CONVERT_INTO_IS_NOT_EMPTY', 30, "Convert into 'isNotEmpty'");
            }
            return this.__$CONVERT_INTO_IS_NOT_EMPTY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_TO_FIELD_PARAMETER", {
        get: function () {
            if (this.__$CONVERT_TO_FIELD_PARAMETER === undefined) {
                this.__$CONVERT_TO_FIELD_PARAMETER = new bare.createInstance(any, null, 'CONVERT_TO_FIELD_PARAMETER', 30, "Convert to field formal parameter");
            }
            return this.__$CONVERT_TO_FIELD_PARAMETER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "CONVERT_TO_NORMAL_PARAMETER", {
        get: function () {
            if (this.__$CONVERT_TO_NORMAL_PARAMETER === undefined) {
                this.__$CONVERT_TO_NORMAL_PARAMETER = new bare.createInstance(any, null, 'CONVERT_TO_NORMAL_PARAMETER', 30, "Convert to normal parameter");
            }
            return this.__$CONVERT_TO_NORMAL_PARAMETER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "ENCAPSULATE_FIELD", {
        get: function () {
            if (this.__$ENCAPSULATE_FIELD === undefined) {
                this.__$ENCAPSULATE_FIELD = new bare.createInstance(any, null, 'ENCAPSULATE_FIELD', 30, "Encapsulate field");
            }
            return this.__$ENCAPSULATE_FIELD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "EXCHANGE_OPERANDS", {
        get: function () {
            if (this.__$EXCHANGE_OPERANDS === undefined) {
                this.__$EXCHANGE_OPERANDS = new bare.createInstance(any, null, 'EXCHANGE_OPERANDS', 30, "Exchange operands");
            }
            return this.__$EXCHANGE_OPERANDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "EXTRACT_CLASS", {
        get: function () {
            if (this.__$EXTRACT_CLASS === undefined) {
                this.__$EXTRACT_CLASS = new bare.createInstance(any, null, 'EXTRACT_CLASS', 30, "Extract class into file '{0}'");
            }
            return this.__$EXTRACT_CLASS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "IMPORT_ADD_SHOW", {
        get: function () {
            if (this.__$IMPORT_ADD_SHOW === undefined) {
                this.__$IMPORT_ADD_SHOW = new bare.createInstance(any, null, 'IMPORT_ADD_SHOW', 30, "Add explicit 'show' combinator");
            }
            return this.__$IMPORT_ADD_SHOW;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "INTRODUCE_LOCAL_CAST_TYPE", {
        get: function () {
            if (this.__$INTRODUCE_LOCAL_CAST_TYPE === undefined) {
                this.__$INTRODUCE_LOCAL_CAST_TYPE = new bare.createInstance(any, null, 'INTRODUCE_LOCAL_CAST_TYPE', 30, "Introduce new local with tested type");
            }
            return this.__$INTRODUCE_LOCAL_CAST_TYPE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "INVERT_IF_STATEMENT", {
        get: function () {
            if (this.__$INVERT_IF_STATEMENT === undefined) {
                this.__$INVERT_IF_STATEMENT = new bare.createInstance(any, null, 'INVERT_IF_STATEMENT', 30, "Invert 'if' statement");
            }
            return this.__$INVERT_IF_STATEMENT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "JOIN_IF_WITH_INNER", {
        get: function () {
            if (this.__$JOIN_IF_WITH_INNER === undefined) {
                this.__$JOIN_IF_WITH_INNER = new bare.createInstance(any, null, 'JOIN_IF_WITH_INNER', 30, "Join 'if' statement with inner 'if' statement");
            }
            return this.__$JOIN_IF_WITH_INNER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "JOIN_IF_WITH_OUTER", {
        get: function () {
            if (this.__$JOIN_IF_WITH_OUTER === undefined) {
                this.__$JOIN_IF_WITH_OUTER = new bare.createInstance(any, null, 'JOIN_IF_WITH_OUTER', 30, "Join 'if' statement with outer 'if' statement");
            }
            return this.__$JOIN_IF_WITH_OUTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "JOIN_VARIABLE_DECLARATION", {
        get: function () {
            if (this.__$JOIN_VARIABLE_DECLARATION === undefined) {
                this.__$JOIN_VARIABLE_DECLARATION = new bare.createInstance(any, null, 'JOIN_VARIABLE_DECLARATION', 30, "Join variable declaration");
            }
            return this.__$JOIN_VARIABLE_DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "MOVE_FLUTTER_WIDGET_DOWN", {
        get: function () {
            if (this.__$MOVE_FLUTTER_WIDGET_DOWN === undefined) {
                this.__$MOVE_FLUTTER_WIDGET_DOWN = new bare.createInstance(any, null, "MOVE_FLUTTER_WIDGET_DOWN", 30, "Move widget down");
            }
            return this.__$MOVE_FLUTTER_WIDGET_DOWN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "MOVE_FLUTTER_WIDGET_UP", {
        get: function () {
            if (this.__$MOVE_FLUTTER_WIDGET_UP === undefined) {
                this.__$MOVE_FLUTTER_WIDGET_UP = new bare.createInstance(any, null, "MOVE_FLUTTER_WIDGET_UP", 30, "Move widget up");
            }
            return this.__$MOVE_FLUTTER_WIDGET_UP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "REPARENT_FLUTTER_LIST", {
        get: function () {
            if (this.__$REPARENT_FLUTTER_LIST === undefined) {
                this.__$REPARENT_FLUTTER_LIST = new bare.createInstance(any, null, "REPARENT_FLUTTER_LIST", 30, "Wrap with new widget");
            }
            return this.__$REPARENT_FLUTTER_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "REPARENT_FLUTTER_WIDGET", {
        get: function () {
            if (this.__$REPARENT_FLUTTER_WIDGET === undefined) {
                this.__$REPARENT_FLUTTER_WIDGET = new bare.createInstance(any, null, "REPARENT_FLUTTER_WIDGET", 30, "Wrap with new widget");
            }
            return this.__$REPARENT_FLUTTER_WIDGET;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "REMOVE_TYPE_ANNOTATION", {
        get: function () {
            if (this.__$REMOVE_TYPE_ANNOTATION === undefined) {
                this.__$REMOVE_TYPE_ANNOTATION = new bare.createInstance(any, null, 'REMOVE_TYPE_ANNOTATION', 29, "Remove type annotation");
            }
            return this.__$REMOVE_TYPE_ANNOTATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "REPLACE_CONDITIONAL_WITH_IF_ELSE", {
        get: function () {
            if (this.__$REPLACE_CONDITIONAL_WITH_IF_ELSE === undefined) {
                this.__$REPLACE_CONDITIONAL_WITH_IF_ELSE = new bare.createInstance(any, null, 'REPLACE_CONDITIONAL_WITH_IF_ELSE', 30, "Replace conditional with 'if-else'");
            }
            return this.__$REPLACE_CONDITIONAL_WITH_IF_ELSE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "REPLACE_IF_ELSE_WITH_CONDITIONAL", {
        get: function () {
            if (this.__$REPLACE_IF_ELSE_WITH_CONDITIONAL === undefined) {
                this.__$REPLACE_IF_ELSE_WITH_CONDITIONAL = new bare.createInstance(any, null, 'REPLACE_IF_ELSE_WITH_CONDITIONAL', 30, "Replace 'if-else' with conditional ('c ? x : y')");
            }
            return this.__$REPLACE_IF_ELSE_WITH_CONDITIONAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SPLIT_AND_CONDITION", {
        get: function () {
            if (this.__$SPLIT_AND_CONDITION === undefined) {
                this.__$SPLIT_AND_CONDITION = new bare.createInstance(any, null, 'SPLIT_AND_CONDITION', 30, "Split && condition");
            }
            return this.__$SPLIT_AND_CONDITION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SPLIT_VARIABLE_DECLARATION", {
        get: function () {
            if (this.__$SPLIT_VARIABLE_DECLARATION === undefined) {
                this.__$SPLIT_VARIABLE_DECLARATION = new bare.createInstance(any, null, 'SPLIT_VARIABLE_DECLARATION', 30, "Split variable declaration");
            }
            return this.__$SPLIT_VARIABLE_DECLARATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_BLOCK", {
        get: function () {
            if (this.__$SURROUND_WITH_BLOCK === undefined) {
                this.__$SURROUND_WITH_BLOCK = new bare.createInstance(any, null, 'SURROUND_WITH_BLOCK', 30, "Surround with block");
            }
            return this.__$SURROUND_WITH_BLOCK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_DO_WHILE", {
        get: function () {
            if (this.__$SURROUND_WITH_DO_WHILE === undefined) {
                this.__$SURROUND_WITH_DO_WHILE = new bare.createInstance(any, null, 'SURROUND_WITH_DO_WHILE', 30, "Surround with 'do-while'");
            }
            return this.__$SURROUND_WITH_DO_WHILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_FOR", {
        get: function () {
            if (this.__$SURROUND_WITH_FOR === undefined) {
                this.__$SURROUND_WITH_FOR = new bare.createInstance(any, null, 'SURROUND_WITH_FOR', 30, "Surround with 'for'");
            }
            return this.__$SURROUND_WITH_FOR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_FOR_IN", {
        get: function () {
            if (this.__$SURROUND_WITH_FOR_IN === undefined) {
                this.__$SURROUND_WITH_FOR_IN = new bare.createInstance(any, null, 'SURROUND_WITH_FOR_IN', 30, "Surround with 'for-in'");
            }
            return this.__$SURROUND_WITH_FOR_IN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_IF", {
        get: function () {
            if (this.__$SURROUND_WITH_IF === undefined) {
                this.__$SURROUND_WITH_IF = new bare.createInstance(any, null, 'SURROUND_WITH_IF', 30, "Surround with 'if'");
            }
            return this.__$SURROUND_WITH_IF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_TRY_CATCH", {
        get: function () {
            if (this.__$SURROUND_WITH_TRY_CATCH === undefined) {
                this.__$SURROUND_WITH_TRY_CATCH = new bare.createInstance(any, null, 'SURROUND_WITH_TRY_CATCH', 30, "Surround with 'try-catch'");
            }
            return this.__$SURROUND_WITH_TRY_CATCH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_TRY_FINALLY", {
        get: function () {
            if (this.__$SURROUND_WITH_TRY_FINALLY === undefined) {
                this.__$SURROUND_WITH_TRY_FINALLY = new bare.createInstance(any, null, 'SURROUND_WITH_TRY_FINALLY', 30, "Surround with 'try-finally'");
            }
            return this.__$SURROUND_WITH_TRY_FINALLY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DartAssistKind, "SURROUND_WITH_WHILE", {
        get: function () {
            if (this.__$SURROUND_WITH_WHILE === undefined) {
                this.__$SURROUND_WITH_WHILE = new bare.createInstance(any, null, 'SURROUND_WITH_WHILE', 30, "Surround with 'while'");
            }
            return this.__$SURROUND_WITH_WHILE;
        },
        enumerable: true,
        configurable: true
    });
    DartAssistKind.prototype.DartAssistKind = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], DartAssistKind.prototype, "DartAssistKind", null);
    DartAssistKind = __decorate([
        utils_1.DartClass
    ], DartAssistKind);
    return DartAssistKind;
}());
exports.DartAssistKind = DartAssistKind;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=assist.js.map