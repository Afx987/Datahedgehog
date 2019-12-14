"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var FunctionElement = /** @class */ (function () {
    function FunctionElement() {
    }
    Object.defineProperty(FunctionElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionElement, "CALL_METHOD_NAME", {
        get: function () {
            if (this.__$CALL_METHOD_NAME === undefined) {
                this.__$CALL_METHOD_NAME = "call";
            }
            return this.__$CALL_METHOD_NAME;
        },
        set: function (__$value) {
            this.__$CALL_METHOD_NAME = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionElement, "LOAD_LIBRARY_NAME", {
        get: function () {
            if (this.__$LOAD_LIBRARY_NAME === undefined) {
                this.__$LOAD_LIBRARY_NAME = "loadLibrary";
            }
            return this.__$LOAD_LIBRARY_NAME;
        },
        set: function (__$value) {
            this.__$LOAD_LIBRARY_NAME = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionElement, "MAIN_FUNCTION_NAME", {
        get: function () {
            if (this.__$MAIN_FUNCTION_NAME === undefined) {
                this.__$MAIN_FUNCTION_NAME = "main";
            }
            return this.__$MAIN_FUNCTION_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionElement, "NO_SUCH_METHOD_METHOD_NAME", {
        get: function () {
            if (this.__$NO_SUCH_METHOD_METHOD_NAME === undefined) {
                this.__$NO_SUCH_METHOD_METHOD_NAME = "noSuchMethod";
            }
            return this.__$NO_SUCH_METHOD_METHOD_NAME;
        },
        set: function (__$value) {
            this.__$NO_SUCH_METHOD_METHOD_NAME = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionElement.prototype, "isEntryPoint", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    FunctionElement.prototype.computeNode = function () { throw 'abstract'; };
    FunctionElement.prototype.FunctionElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], FunctionElement.prototype, "isEntryPoint", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], FunctionElement.prototype, "computeNode", null);
    __decorate([
        utils_1.defaultConstructor
    ], FunctionElement.prototype, "FunctionElement", null);
    FunctionElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ExecutableElement, LocalElement)
    ], FunctionElement);
    return FunctionElement;
}());
exports.FunctionElement = FunctionElement;
var ClassMemberElement = /** @class */ (function () {
    function ClassMemberElement() {
    }
    Object.defineProperty(ClassMemberElement.prototype, "enclosingElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassMemberElement.prototype, "isStatic", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ClassMemberElement.prototype.ClassMemberElement = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], ClassMemberElement.prototype, "enclosingElement", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassMemberElement.prototype, "isStatic", null);
    __decorate([
        utils_1.defaultConstructor
    ], ClassMemberElement.prototype, "ClassMemberElement", null);
    ClassMemberElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], ClassMemberElement);
    return ClassMemberElement;
}());
exports.ClassMemberElement = ClassMemberElement;
var CompilationUnitElement = /** @class */ (function () {
    function CompilationUnitElement() {
    }
    Object.defineProperty(CompilationUnitElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "accessors", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "enclosingElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "enums", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "functions", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "functionTypeAliases", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "hasLoadLibraryFunction", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "lineInfo", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "topLevelVariables", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompilationUnitElement.prototype, "types", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    CompilationUnitElement.prototype.computeNode = function () { throw 'abstract'; };
    CompilationUnitElement.prototype.getElementAt = function (offset) { throw 'abstract'; };
    CompilationUnitElement.prototype.getEnum = function (name) { throw 'abstract'; };
    CompilationUnitElement.prototype.getType = function (name) { throw 'abstract'; };
    CompilationUnitElement.prototype.CompilationUnitElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "accessors", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "enclosingElement", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "enums", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "functions", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "functionTypeAliases", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "hasLoadLibraryFunction", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "lineInfo", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "topLevelVariables", null);
    __decorate([
        utils_1.AbstractProperty
    ], CompilationUnitElement.prototype, "types", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], CompilationUnitElement.prototype, "computeNode", null);
    __decorate([
        utils_1.Abstract
    ], CompilationUnitElement.prototype, "getElementAt", null);
    __decorate([
        utils_1.Abstract
    ], CompilationUnitElement.prototype, "getEnum", null);
    __decorate([
        utils_1.Abstract
    ], CompilationUnitElement.prototype, "getType", null);
    __decorate([
        utils_1.defaultConstructor
    ], CompilationUnitElement.prototype, "CompilationUnitElement", null);
    CompilationUnitElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element, UriReferencedElement)
    ], CompilationUnitElement);
    return CompilationUnitElement;
}());
exports.CompilationUnitElement = CompilationUnitElement;
var ConstructorElement = /** @class */ (function () {
    function ConstructorElement() {
    }
    Object.defineProperty(ConstructorElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstructorElement.prototype, "isConst", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstructorElement.prototype, "isDefaultConstructor", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstructorElement.prototype, "isFactory", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstructorElement.prototype, "nameEnd", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstructorElement.prototype, "periodOffset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstructorElement.prototype, "redirectedConstructor", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ConstructorElement.prototype.computeNode = function () { throw 'abstract'; };
    ConstructorElement.prototype.ConstructorElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ConstructorElement.prototype, "isConst", null);
    __decorate([
        utils_1.AbstractProperty
    ], ConstructorElement.prototype, "isDefaultConstructor", null);
    __decorate([
        utils_1.AbstractProperty
    ], ConstructorElement.prototype, "isFactory", null);
    __decorate([
        utils_1.AbstractProperty
    ], ConstructorElement.prototype, "nameEnd", null);
    __decorate([
        utils_1.AbstractProperty
    ], ConstructorElement.prototype, "periodOffset", null);
    __decorate([
        utils_1.AbstractProperty
    ], ConstructorElement.prototype, "redirectedConstructor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], ConstructorElement.prototype, "computeNode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ConstructorElement.prototype, "ConstructorElement", null);
    ConstructorElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ClassMemberElement, ExecutableElement, any)
    ], ConstructorElement);
    return ConstructorElement;
}());
exports.ConstructorElement = ConstructorElement;
var Element = /** @class */ (function () {
    function Element() {
    }
    Object.defineProperty(Element, "SORT_BY_OFFSET", {
        get: function () {
            if (this.__$SORT_BY_OFFSET === undefined) {
                this.__$SORT_BY_OFFSET = function (firstElement, secondElement) {
                    return firstElement.nameOffset - secondElement.nameOffset;
                };
            }
            return this.__$SORT_BY_OFFSET;
        },
        set: function (__$value) {
            this.__$SORT_BY_OFFSET = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "context", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "displayName", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "documentationComment", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "enclosingElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "id", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isDeprecated", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isFactory", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isJS", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isOverride", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isPrivate", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isProtected", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isPublic", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isRequired", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "isSynthetic", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "kind", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "library", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "location", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "metadata", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "name", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "nameLength", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "nameOffset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "source", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "unit", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.accept = function (visitor) { throw 'abstract'; };
    Element.prototype.computeDocumentationComment = function () { throw 'abstract'; };
    Element.prototype.computeNode = function () { throw 'abstract'; };
    Element.prototype.getAncestor = function (predicate) { throw 'abstract'; };
    Element.prototype.getExtendedDisplayName = function (shortName) { throw 'abstract'; };
    Element.prototype.isAccessibleIn = function (library) { throw 'abstract'; };
    Element.prototype.visitChildren = function (visitor) { throw 'abstract'; };
    Element.prototype.Element = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "context", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "displayName", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "documentationComment", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "enclosingElement", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "id", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isDeprecated", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isFactory", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isJS", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isOverride", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isPrivate", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isProtected", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isPublic", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isRequired", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "isSynthetic", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "kind", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "library", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "location", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "metadata", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "name", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "nameLength", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "nameOffset", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], Element.prototype, "source", null);
    __decorate([
        utils_1.AbstractProperty
    ], Element.prototype, "unit", null);
    __decorate([
        utils_1.Abstract
    ], Element.prototype, "accept", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'deprecated', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], Element.prototype, "computeDocumentationComment", null);
    __decorate([
        utils_1.Abstract
    ], Element.prototype, "computeNode", null);
    __decorate([
        utils_1.Abstract
    ], Element.prototype, "getAncestor", null);
    __decorate([
        utils_1.Abstract
    ], Element.prototype, "getExtendedDisplayName", null);
    __decorate([
        utils_1.Abstract
    ], Element.prototype, "isAccessibleIn", null);
    __decorate([
        utils_1.Abstract
    ], Element.prototype, "visitChildren", null);
    __decorate([
        utils_1.defaultConstructor
    ], Element.prototype, "Element", null);
    Element = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any, any)
    ], Element);
    return Element;
}());
exports.Element = Element;
var ElementAnnotation = /** @class */ (function () {
    function ElementAnnotation() {
    }
    Object.defineProperty(ElementAnnotation, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "constantValue", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "element", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isDeprecated", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isFactory", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isImmutable", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isJS", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isMustCallSuper", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isOverride", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isProtected", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isProxy", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementAnnotation.prototype, "isRequired", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ElementAnnotation.prototype.computeConstantValue = function () { throw 'abstract'; };
    ElementAnnotation.prototype.toSource = function () { throw 'abstract'; };
    ElementAnnotation.prototype.ElementAnnotation = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "constantValue", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "element", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isDeprecated", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isFactory", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isImmutable", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isJS", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isMustCallSuper", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isOverride", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isProtected", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isProxy", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementAnnotation.prototype, "isRequired", null);
    __decorate([
        utils_1.Abstract
    ], ElementAnnotation.prototype, "computeConstantValue", null);
    __decorate([
        utils_1.Abstract
    ], ElementAnnotation.prototype, "toSource", null);
    __decorate([
        utils_1.defaultConstructor
    ], ElementAnnotation.prototype, "ElementAnnotation", null);
    ElementAnnotation = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any, any)
    ], ElementAnnotation);
    return ElementAnnotation;
}());
exports.ElementAnnotation = ElementAnnotation;
var ElementKind = /** @class */ (function () {
    function ElementKind(name, ordinal, displayName) {
    }
    ElementKind_1 = ElementKind;
    Object.defineProperty(ElementKind, "CLASS", {
        get: function () {
            if (this.__$CLASS === undefined) {
                this.__$CLASS = new ElementKind_1('CLASS', 0, "class");
            }
            return this.__$CLASS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "COMPILATION_UNIT", {
        get: function () {
            if (this.__$COMPILATION_UNIT === undefined) {
                this.__$COMPILATION_UNIT = new ElementKind_1('COMPILATION_UNIT', 1, "compilation unit");
            }
            return this.__$COMPILATION_UNIT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "CONSTRUCTOR", {
        get: function () {
            if (this.__$CONSTRUCTOR === undefined) {
                this.__$CONSTRUCTOR = new ElementKind_1('CONSTRUCTOR', 2, "constructor");
            }
            return this.__$CONSTRUCTOR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "DYNAMIC", {
        get: function () {
            if (this.__$DYNAMIC === undefined) {
                this.__$DYNAMIC = new ElementKind_1('DYNAMIC', 3, "<dynamic>");
            }
            return this.__$DYNAMIC;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "ERROR", {
        get: function () {
            if (this.__$ERROR === undefined) {
                this.__$ERROR = new ElementKind_1('ERROR', 4, "<error>");
            }
            return this.__$ERROR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "EXPORT", {
        get: function () {
            if (this.__$EXPORT === undefined) {
                this.__$EXPORT = new ElementKind_1('EXPORT', 5, "export directive");
            }
            return this.__$EXPORT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "FIELD", {
        get: function () {
            if (this.__$FIELD === undefined) {
                this.__$FIELD = new ElementKind_1('FIELD', 6, "field");
            }
            return this.__$FIELD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "FUNCTION", {
        get: function () {
            if (this.__$FUNCTION === undefined) {
                this.__$FUNCTION = new ElementKind_1('FUNCTION', 7, "function");
            }
            return this.__$FUNCTION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "GENERIC_FUNCTION_TYPE", {
        get: function () {
            if (this.__$GENERIC_FUNCTION_TYPE === undefined) {
                this.__$GENERIC_FUNCTION_TYPE = new ElementKind_1('GENERIC_FUNCTION_TYPE', 8, 'generic function type');
            }
            return this.__$GENERIC_FUNCTION_TYPE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "GETTER", {
        get: function () {
            if (this.__$GETTER === undefined) {
                this.__$GETTER = new ElementKind_1('GETTER', 9, "getter");
            }
            return this.__$GETTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "IMPORT", {
        get: function () {
            if (this.__$IMPORT === undefined) {
                this.__$IMPORT = new ElementKind_1('IMPORT', 10, "import directive");
            }
            return this.__$IMPORT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "LABEL", {
        get: function () {
            if (this.__$LABEL === undefined) {
                this.__$LABEL = new ElementKind_1('LABEL', 11, "label");
            }
            return this.__$LABEL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "LIBRARY", {
        get: function () {
            if (this.__$LIBRARY === undefined) {
                this.__$LIBRARY = new ElementKind_1('LIBRARY', 12, "library");
            }
            return this.__$LIBRARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "LOCAL_VARIABLE", {
        get: function () {
            if (this.__$LOCAL_VARIABLE === undefined) {
                this.__$LOCAL_VARIABLE = new ElementKind_1('LOCAL_VARIABLE', 13, "local variable");
            }
            return this.__$LOCAL_VARIABLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "METHOD", {
        get: function () {
            if (this.__$METHOD === undefined) {
                this.__$METHOD = new ElementKind_1('METHOD', 14, "method");
            }
            return this.__$METHOD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "NAME", {
        get: function () {
            if (this.__$NAME === undefined) {
                this.__$NAME = new ElementKind_1('NAME', 15, "<name>");
            }
            return this.__$NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "PARAMETER", {
        get: function () {
            if (this.__$PARAMETER === undefined) {
                this.__$PARAMETER = new ElementKind_1('PARAMETER', 16, "parameter");
            }
            return this.__$PARAMETER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "PREFIX", {
        get: function () {
            if (this.__$PREFIX === undefined) {
                this.__$PREFIX = new ElementKind_1('PREFIX', 17, "import prefix");
            }
            return this.__$PREFIX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "SETTER", {
        get: function () {
            if (this.__$SETTER === undefined) {
                this.__$SETTER = new ElementKind_1('SETTER', 18, "setter");
            }
            return this.__$SETTER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "TOP_LEVEL_VARIABLE", {
        get: function () {
            if (this.__$TOP_LEVEL_VARIABLE === undefined) {
                this.__$TOP_LEVEL_VARIABLE = new ElementKind_1('TOP_LEVEL_VARIABLE', 19, "top level variable");
            }
            return this.__$TOP_LEVEL_VARIABLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "FUNCTION_TYPE_ALIAS", {
        get: function () {
            if (this.__$FUNCTION_TYPE_ALIAS === undefined) {
                this.__$FUNCTION_TYPE_ALIAS = new ElementKind_1('FUNCTION_TYPE_ALIAS', 20, "function type alias");
            }
            return this.__$FUNCTION_TYPE_ALIAS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "TYPE_PARAMETER", {
        get: function () {
            if (this.__$TYPE_PARAMETER === undefined) {
                this.__$TYPE_PARAMETER = new ElementKind_1('TYPE_PARAMETER', 21, "type parameter");
            }
            return this.__$TYPE_PARAMETER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "UNIVERSE", {
        get: function () {
            if (this.__$UNIVERSE === undefined) {
                this.__$UNIVERSE = new ElementKind_1('UNIVERSE', 22, "<universe>");
            }
            return this.__$UNIVERSE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementKind, "values", {
        get: function () {
            if (this.__$values === undefined) {
                this.__$values = new core.DartList.literal(ElementKind_1.CLASS, ElementKind_1.COMPILATION_UNIT, ElementKind_1.CONSTRUCTOR, ElementKind_1.DYNAMIC, ElementKind_1.ERROR, ElementKind_1.EXPORT, ElementKind_1.FIELD, ElementKind_1.FUNCTION, ElementKind_1.GENERIC_FUNCTION_TYPE, ElementKind_1.GETTER, ElementKind_1.IMPORT, ElementKind_1.LABEL, ElementKind_1.LIBRARY, ElementKind_1.LOCAL_VARIABLE, ElementKind_1.METHOD, ElementKind_1.NAME, ElementKind_1.PARAMETER, ElementKind_1.PREFIX, ElementKind_1.SETTER, ElementKind_1.TOP_LEVEL_VARIABLE, ElementKind_1.FUNCTION_TYPE_ALIAS, ElementKind_1.TYPE_PARAMETER, ElementKind_1.UNIVERSE);
            }
            return this.__$values;
        },
        enumerable: true,
        configurable: true
    });
    ElementKind.prototype.ElementKind = function (name, ordinal, displayName) {
        this.name = name;
        this.ordinal = ordinal;
        this.displayName = displayName;
    };
    Object.defineProperty(ElementKind.prototype, "hashCode", {
        get: function () {
            return this.ordinal;
        },
        enumerable: true,
        configurable: true
    });
    ElementKind.prototype.compareTo = function (other) {
        return this.ordinal - other.ordinal;
    };
    ElementKind.prototype.toString = function () {
        return this.name;
    };
    ElementKind.of = function (element) {
        if (utils_1.op(utils_1.Op.EQUALS, element, null)) {
            return ElementKind_1.ERROR;
        }
        return element.kind;
    };
    var ElementKind_1;
    __decorate([
        utils_1.defaultConstructor
    ], ElementKind.prototype, "ElementKind", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ElementKind.prototype, "hashCode", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ElementKind.prototype, "compareTo", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ElementKind.prototype, "toString", null);
    ElementKind = ElementKind_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(core.DartComparable)
    ], ElementKind);
    return ElementKind;
}());
exports.ElementKind = ElementKind;
var ElementLocation = /** @class */ (function () {
    function ElementLocation() {
    }
    Object.defineProperty(ElementLocation.prototype, "components", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementLocation.prototype, "encoding", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ElementLocation.prototype.ElementLocation = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ElementLocation.prototype, "components", null);
    __decorate([
        utils_1.AbstractProperty
    ], ElementLocation.prototype, "encoding", null);
    __decorate([
        utils_1.defaultConstructor
    ], ElementLocation.prototype, "ElementLocation", null);
    ElementLocation = __decorate([
        utils_1.DartClass
    ], ElementLocation);
    return ElementLocation;
}());
exports.ElementLocation = ElementLocation;
var ElementVisitor = /** @class */ (function () {
    function ElementVisitor() {
    }
    ElementVisitor.prototype.visitClassElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitCompilationUnitElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitConstructorElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitExportElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitFieldElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitFieldFormalParameterElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitFunctionElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitFunctionTypeAliasElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitGenericFunctionTypeElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitImportElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitLabelElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitLibraryElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitLocalVariableElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitMethodElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitMultiplyDefinedElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitParameterElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitPrefixElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitPropertyAccessorElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitTopLevelVariableElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.visitTypeParameterElement = function (element) { throw 'abstract'; };
    ElementVisitor.prototype.ElementVisitor = function () {
    };
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitClassElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitCompilationUnitElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitConstructorElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitExportElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitFieldElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitFieldFormalParameterElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitFunctionElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitFunctionTypeAliasElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitGenericFunctionTypeElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitImportElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitLabelElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitLibraryElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitLocalVariableElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitMethodElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitMultiplyDefinedElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitParameterElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitPrefixElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitPropertyAccessorElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitTopLevelVariableElement", null);
    __decorate([
        utils_1.Abstract
    ], ElementVisitor.prototype, "visitTypeParameterElement", null);
    __decorate([
        utils_1.defaultConstructor
    ], ElementVisitor.prototype, "ElementVisitor", null);
    ElementVisitor = __decorate([
        utils_1.DartClass
    ], ElementVisitor);
    return ElementVisitor;
}());
exports.ElementVisitor = ElementVisitor;
var ExecutableElement = /** @class */ (function () {
    function ExecutableElement() {
    }
    Object.defineProperty(ExecutableElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "functions", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "hasImplicitReturnType", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "isAbstract", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "isAsynchronous", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "isExternal", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "isGenerator", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "isOperator", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "isStatic", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "isSynchronous", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "labels", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExecutableElement.prototype, "localVariables", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ExecutableElement.prototype.ExecutableElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "functions", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "hasImplicitReturnType", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "isAbstract", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "isAsynchronous", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "isExternal", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "isGenerator", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "isOperator", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "isStatic", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "isSynchronous", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "labels", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExecutableElement.prototype, "localVariables", null);
    __decorate([
        utils_1.defaultConstructor
    ], ExecutableElement.prototype, "ExecutableElement", null);
    ExecutableElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(FunctionTypedElement)
    ], ExecutableElement);
    return ExecutableElement;
}());
exports.ExecutableElement = ExecutableElement;
var ExportElement = /** @class */ (function () {
    function ExportElement() {
    }
    Object.defineProperty(ExportElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportElement.prototype, "combinators", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportElement.prototype, "exportedLibrary", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ExportElement.prototype.ExportElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ExportElement.prototype, "combinators", null);
    __decorate([
        utils_1.AbstractProperty
    ], ExportElement.prototype, "exportedLibrary", null);
    __decorate([
        utils_1.defaultConstructor
    ], ExportElement.prototype, "ExportElement", null);
    ExportElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element, UriReferencedElement)
    ], ExportElement);
    return ExportElement;
}());
exports.ExportElement = ExportElement;
var FieldElement = /** @class */ (function () {
    function FieldElement() {
    }
    Object.defineProperty(FieldElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldElement.prototype, "isEnumConstant", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldElement.prototype, "isVirtual", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    FieldElement.prototype.computeNode = function () { throw 'abstract'; };
    FieldElement.prototype.FieldElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], FieldElement.prototype, "isEnumConstant", null);
    __decorate([
        utils_1.AbstractProperty
    ], FieldElement.prototype, "isVirtual", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], FieldElement.prototype, "computeNode", null);
    __decorate([
        utils_1.defaultConstructor
    ], FieldElement.prototype, "FieldElement", null);
    FieldElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ClassMemberElement, PropertyInducingElement)
    ], FieldElement);
    return FieldElement;
}());
exports.FieldElement = FieldElement;
var FieldFormalParameterElement = /** @class */ (function () {
    function FieldFormalParameterElement() {
    }
    Object.defineProperty(FieldFormalParameterElement.prototype, "field", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    FieldFormalParameterElement.prototype.FieldFormalParameterElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], FieldFormalParameterElement.prototype, "field", null);
    __decorate([
        utils_1.defaultConstructor
    ], FieldFormalParameterElement.prototype, "FieldFormalParameterElement", null);
    FieldFormalParameterElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ParameterElement)
    ], FieldFormalParameterElement);
    return FieldFormalParameterElement;
}());
exports.FieldFormalParameterElement = FieldFormalParameterElement;
var ClassElement = /** @class */ (function () {
    function ClassElement() {
    }
    Object.defineProperty(ClassElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "accessors", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "allSupertypes", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "constructors", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "fields", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "hasNonFinalField", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "hasReferenceToSuper", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "hasStaticMember", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "interfaces", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "isAbstract", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "isEnum", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "isMixinApplication", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "isOrInheritsProxy", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "isProxy", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "isValidMixin", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "methods", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "mixins", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "supertype", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "type", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassElement.prototype, "unnamedConstructor", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ClassElement.prototype.computeNode = function () { throw 'abstract'; };
    ClassElement.prototype.getField = function (name) { throw 'abstract'; };
    ClassElement.prototype.getGetter = function (name) { throw 'abstract'; };
    ClassElement.prototype.getMethod = function (name) { throw 'abstract'; };
    ClassElement.prototype.getNamedConstructor = function (name) { throw 'abstract'; };
    ClassElement.prototype.getSetter = function (name) { throw 'abstract'; };
    ClassElement.prototype.isSuperConstructorAccessible = function (constructor) { throw 'abstract'; };
    ClassElement.prototype.lookUpConcreteMethod = function (methodName, library) { throw 'abstract'; };
    ClassElement.prototype.lookUpGetter = function (getterName, library) { throw 'abstract'; };
    ClassElement.prototype.lookUpInheritedConcreteGetter = function (getterName, library) { throw 'abstract'; };
    ClassElement.prototype.lookUpInheritedConcreteMethod = function (methodName, library) { throw 'abstract'; };
    ClassElement.prototype.lookUpInheritedConcreteSetter = function (setterName, library) { throw 'abstract'; };
    ClassElement.prototype.lookUpInheritedMethod = function (methodName, library) { throw 'abstract'; };
    ClassElement.prototype.lookUpMethod = function (methodName, library) { throw 'abstract'; };
    ClassElement.prototype.lookUpSetter = function (setterName, library) { throw 'abstract'; };
    ClassElement.prototype.ClassElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "accessors", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "allSupertypes", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "constructors", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "fields", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "hasNonFinalField", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "hasReferenceToSuper", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "hasStaticMember", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "interfaces", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "isAbstract", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "isEnum", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "isMixinApplication", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "isOrInheritsProxy", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "isProxy", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "isValidMixin", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "methods", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "mixins", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "supertype", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], ClassElement.prototype, "type", null);
    __decorate([
        utils_1.AbstractProperty
    ], ClassElement.prototype, "unnamedConstructor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], ClassElement.prototype, "computeNode", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "getField", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "getGetter", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "getMethod", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "getNamedConstructor", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "getSetter", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "isSuperConstructorAccessible", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpConcreteMethod", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpGetter", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpInheritedConcreteGetter", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpInheritedConcreteMethod", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpInheritedConcreteSetter", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpInheritedMethod", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpMethod", null);
    __decorate([
        utils_1.Abstract
    ], ClassElement.prototype, "lookUpSetter", null);
    __decorate([
        utils_1.defaultConstructor
    ], ClassElement.prototype, "ClassElement", null);
    ClassElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(TypeDefiningElement, TypeParameterizedElement)
    ], ClassElement);
    return ClassElement;
}());
exports.ClassElement = ClassElement;
var FunctionTypeAliasElement = /** @class */ (function () {
    function FunctionTypeAliasElement() {
    }
    Object.defineProperty(FunctionTypeAliasElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList(0);
            }
            return this.__$EMPTY_LIST;
        },
        set: function (__$value) {
            this.__$EMPTY_LIST = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionTypeAliasElement.prototype, "enclosingElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    FunctionTypeAliasElement.prototype.computeNode = function () { throw 'abstract'; };
    FunctionTypeAliasElement.prototype.FunctionTypeAliasElement = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], FunctionTypeAliasElement.prototype, "enclosingElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], FunctionTypeAliasElement.prototype, "computeNode", null);
    __decorate([
        utils_1.defaultConstructor
    ], FunctionTypeAliasElement.prototype, "FunctionTypeAliasElement", null);
    FunctionTypeAliasElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(FunctionTypedElement, TypeDefiningElement)
    ], FunctionTypeAliasElement);
    return FunctionTypeAliasElement;
}());
exports.FunctionTypeAliasElement = FunctionTypeAliasElement;
var FunctionTypedElement = /** @class */ (function () {
    function FunctionTypedElement() {
    }
    Object.defineProperty(FunctionTypedElement.prototype, "parameters", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionTypedElement.prototype, "returnType", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionTypedElement.prototype, "type", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    FunctionTypedElement.prototype.FunctionTypedElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], FunctionTypedElement.prototype, "parameters", null);
    __decorate([
        utils_1.AbstractProperty
    ], FunctionTypedElement.prototype, "returnType", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], FunctionTypedElement.prototype, "type", null);
    __decorate([
        utils_1.defaultConstructor
    ], FunctionTypedElement.prototype, "FunctionTypedElement", null);
    FunctionTypedElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(TypeParameterizedElement)
    ], FunctionTypedElement);
    return FunctionTypedElement;
}());
exports.FunctionTypedElement = FunctionTypedElement;
var GenericFunctionTypeElement = /** @class */ (function () {
    function GenericFunctionTypeElement() {
    }
    GenericFunctionTypeElement.prototype.GenericFunctionTypeElement = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], GenericFunctionTypeElement.prototype, "GenericFunctionTypeElement", null);
    GenericFunctionTypeElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(FunctionTypedElement)
    ], GenericFunctionTypeElement);
    return GenericFunctionTypeElement;
}());
exports.GenericFunctionTypeElement = GenericFunctionTypeElement;
var GenericTypeAliasElement = /** @class */ (function () {
    function GenericTypeAliasElement() {
    }
    Object.defineProperty(GenericTypeAliasElement.prototype, "function", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    GenericTypeAliasElement.prototype.GenericTypeAliasElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], GenericTypeAliasElement.prototype, "function", null);
    __decorate([
        utils_1.defaultConstructor
    ], GenericTypeAliasElement.prototype, "GenericTypeAliasElement", null);
    GenericTypeAliasElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(FunctionTypeAliasElement)
    ], GenericTypeAliasElement);
    return GenericTypeAliasElement;
}());
exports.GenericTypeAliasElement = GenericTypeAliasElement;
var HideElementCombinator = /** @class */ (function () {
    function HideElementCombinator() {
    }
    Object.defineProperty(HideElementCombinator.prototype, "hiddenNames", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    HideElementCombinator.prototype.HideElementCombinator = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], HideElementCombinator.prototype, "hiddenNames", null);
    __decorate([
        utils_1.defaultConstructor
    ], HideElementCombinator.prototype, "HideElementCombinator", null);
    HideElementCombinator = __decorate([
        utils_1.DartClass,
        utils_1.Implements(NamespaceCombinator)
    ], HideElementCombinator);
    return HideElementCombinator;
}());
exports.HideElementCombinator = HideElementCombinator;
var ImportElement = /** @class */ (function () {
    function ImportElement() {
    }
    Object.defineProperty(ImportElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportElement.prototype, "combinators", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportElement.prototype, "importedLibrary", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportElement.prototype, "isDeferred", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportElement.prototype, "prefix", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportElement.prototype, "prefixOffset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ImportElement.prototype.ImportElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ImportElement.prototype, "combinators", null);
    __decorate([
        utils_1.AbstractProperty
    ], ImportElement.prototype, "importedLibrary", null);
    __decorate([
        utils_1.AbstractProperty
    ], ImportElement.prototype, "isDeferred", null);
    __decorate([
        utils_1.AbstractProperty
    ], ImportElement.prototype, "prefix", null);
    __decorate([
        utils_1.AbstractProperty
    ], ImportElement.prototype, "prefixOffset", null);
    __decorate([
        utils_1.defaultConstructor
    ], ImportElement.prototype, "ImportElement", null);
    ImportElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element, UriReferencedElement)
    ], ImportElement);
    return ImportElement;
}());
exports.ImportElement = ImportElement;
var LabelElement = /** @class */ (function () {
    function LabelElement() {
    }
    Object.defineProperty(LabelElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelElement.prototype, "enclosingElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    LabelElement.prototype.LabelElement = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], LabelElement.prototype, "enclosingElement", null);
    __decorate([
        utils_1.defaultConstructor
    ], LabelElement.prototype, "LabelElement", null);
    LabelElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], LabelElement);
    return LabelElement;
}());
exports.LabelElement = LabelElement;
var LibraryElement = /** @class */ (function () {
    function LibraryElement() {
    }
    Object.defineProperty(LibraryElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "definingCompilationUnit", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "entryPoint", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "exportedLibraries", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "exportNamespace", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "exports", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "hasExtUri", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "hasLoadLibraryFunction", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "identifier", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "importedLibraries", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "imports", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "isBrowserApplication", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "isDartAsync", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "isDartCore", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "isInSdk", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "libraryCycle", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "loadLibraryFunction", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "parts", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "prefixes", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "publicNamespace", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibraryElement.prototype, "units", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    LibraryElement.prototype.getImportsWithPrefix = function (prefix) { throw 'abstract'; };
    LibraryElement.prototype.getType = function (className) { throw 'abstract'; };
    LibraryElement.prototype.LibraryElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "definingCompilationUnit", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "entryPoint", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "exportedLibraries", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "exportNamespace", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "exports", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "hasExtUri", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "hasLoadLibraryFunction", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "identifier", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "importedLibraries", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "imports", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "isBrowserApplication", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "isDartAsync", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "isDartCore", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "isInSdk", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "libraryCycle", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "loadLibraryFunction", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "parts", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "prefixes", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "publicNamespace", null);
    __decorate([
        utils_1.AbstractProperty
    ], LibraryElement.prototype, "units", null);
    __decorate([
        utils_1.Abstract
    ], LibraryElement.prototype, "getImportsWithPrefix", null);
    __decorate([
        utils_1.Abstract
    ], LibraryElement.prototype, "getType", null);
    __decorate([
        utils_1.defaultConstructor
    ], LibraryElement.prototype, "LibraryElement", null);
    LibraryElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], LibraryElement);
    return LibraryElement;
}());
exports.LibraryElement = LibraryElement;
var LocalElement = /** @class */ (function () {
    function LocalElement() {
    }
    Object.defineProperty(LocalElement.prototype, "visibleRange", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    LocalElement.prototype.LocalElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], LocalElement.prototype, "visibleRange", null);
    __decorate([
        utils_1.defaultConstructor
    ], LocalElement.prototype, "LocalElement", null);
    LocalElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], LocalElement);
    return LocalElement;
}());
exports.LocalElement = LocalElement;
var LocalVariableElement = /** @class */ (function () {
    function LocalVariableElement() {
    }
    Object.defineProperty(LocalVariableElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    LocalVariableElement.prototype.LocalVariableElement = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], LocalVariableElement.prototype, "LocalVariableElement", null);
    LocalVariableElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(LocalElement, VariableElement)
    ], LocalVariableElement);
    return LocalVariableElement;
}());
exports.LocalVariableElement = LocalVariableElement;
var MethodElement = /** @class */ (function () {
    function MethodElement() {
    }
    Object.defineProperty(MethodElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    MethodElement.prototype.computeNode = function () { throw 'abstract'; };
    MethodElement.prototype.getReifiedType = function (objectType) { throw 'abstract'; };
    MethodElement.prototype.MethodElement = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], MethodElement.prototype, "computeNode", null);
    __decorate([
        utils_1.Abstract
    ], MethodElement.prototype, "getReifiedType", null);
    __decorate([
        utils_1.defaultConstructor
    ], MethodElement.prototype, "MethodElement", null);
    MethodElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ClassMemberElement, ExecutableElement)
    ], MethodElement);
    return MethodElement;
}());
exports.MethodElement = MethodElement;
var VariableElement = /** @class */ (function () {
    function VariableElement() {
    }
    Object.defineProperty(VariableElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "constantValue", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "hasImplicitType", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "initializer", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "isConst", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "isFinal", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "isPotentiallyMutatedInClosure", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "isPotentiallyMutatedInScope", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "isStatic", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VariableElement.prototype, "type", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    VariableElement.prototype.computeConstantValue = function () { throw 'abstract'; };
    VariableElement.prototype.VariableElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], VariableElement.prototype, "constantValue", null);
    __decorate([
        utils_1.AbstractProperty
    ], VariableElement.prototype, "hasImplicitType", null);
    __decorate([
        utils_1.AbstractProperty
    ], VariableElement.prototype, "initializer", null);
    __decorate([
        utils_1.AbstractProperty
    ], VariableElement.prototype, "isConst", null);
    __decorate([
        utils_1.AbstractProperty
    ], VariableElement.prototype, "isFinal", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'deprecated', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], VariableElement.prototype, "isPotentiallyMutatedInClosure", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'deprecated', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], VariableElement.prototype, "isPotentiallyMutatedInScope", null);
    __decorate([
        utils_1.AbstractProperty
    ], VariableElement.prototype, "isStatic", null);
    __decorate([
        utils_1.AbstractProperty
    ], VariableElement.prototype, "type", null);
    __decorate([
        utils_1.Abstract
    ], VariableElement.prototype, "computeConstantValue", null);
    __decorate([
        utils_1.defaultConstructor
    ], VariableElement.prototype, "VariableElement", null);
    VariableElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element, any)
    ], VariableElement);
    return VariableElement;
}());
exports.VariableElement = VariableElement;
var MultiplyInheritedExecutableElement = /** @class */ (function () {
    function MultiplyInheritedExecutableElement() {
    }
    Object.defineProperty(MultiplyInheritedExecutableElement.prototype, "inheritedElements", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    MultiplyInheritedExecutableElement.prototype.MultiplyInheritedExecutableElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], MultiplyInheritedExecutableElement.prototype, "inheritedElements", null);
    __decorate([
        utils_1.defaultConstructor
    ], MultiplyInheritedExecutableElement.prototype, "MultiplyInheritedExecutableElement", null);
    MultiplyInheritedExecutableElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ExecutableElement)
    ], MultiplyInheritedExecutableElement);
    return MultiplyInheritedExecutableElement;
}());
exports.MultiplyInheritedExecutableElement = MultiplyInheritedExecutableElement;
var NamespaceCombinator = /** @class */ (function () {
    function NamespaceCombinator() {
    }
    Object.defineProperty(NamespaceCombinator, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    NamespaceCombinator.prototype.NamespaceCombinator = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], NamespaceCombinator.prototype, "NamespaceCombinator", null);
    NamespaceCombinator = __decorate([
        utils_1.DartClass
    ], NamespaceCombinator);
    return NamespaceCombinator;
}());
exports.NamespaceCombinator = NamespaceCombinator;
var ParameterElement = /** @class */ (function () {
    function ParameterElement() {
    }
    Object.defineProperty(ParameterElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterElement.prototype, "defaultValueCode", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterElement.prototype, "isCovariant", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterElement.prototype, "isInitializingFormal", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterElement.prototype, "parameterKind", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterElement.prototype, "parameters", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterElement.prototype, "typeParameters", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ParameterElement.prototype.appendToWithoutDelimiters = function (buffer) { throw 'abstract'; };
    ParameterElement.prototype.computeNode = function () { throw 'abstract'; };
    ParameterElement.prototype.ParameterElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ParameterElement.prototype, "defaultValueCode", null);
    __decorate([
        utils_1.AbstractProperty
    ], ParameterElement.prototype, "isCovariant", null);
    __decorate([
        utils_1.AbstractProperty
    ], ParameterElement.prototype, "isInitializingFormal", null);
    __decorate([
        utils_1.AbstractProperty
    ], ParameterElement.prototype, "parameterKind", null);
    __decorate([
        utils_1.AbstractProperty
    ], ParameterElement.prototype, "parameters", null);
    __decorate([
        utils_1.AbstractProperty
    ], ParameterElement.prototype, "typeParameters", null);
    __decorate([
        utils_1.Abstract
    ], ParameterElement.prototype, "appendToWithoutDelimiters", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], ParameterElement.prototype, "computeNode", null);
    __decorate([
        utils_1.defaultConstructor
    ], ParameterElement.prototype, "ParameterElement", null);
    ParameterElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(LocalElement, VariableElement, any)
    ], ParameterElement);
    return ParameterElement;
}());
exports.ParameterElement = ParameterElement;
var PrefixElement = /** @class */ (function () {
    function PrefixElement() {
    }
    Object.defineProperty(PrefixElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrefixElement.prototype, "enclosingElement", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrefixElement.prototype, "importedLibraries", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    PrefixElement.prototype.PrefixElement = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], PrefixElement.prototype, "enclosingElement", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'deprecated', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], PrefixElement.prototype, "importedLibraries", null);
    __decorate([
        utils_1.defaultConstructor
    ], PrefixElement.prototype, "PrefixElement", null);
    PrefixElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], PrefixElement);
    return PrefixElement;
}());
exports.PrefixElement = PrefixElement;
var PropertyAccessorElement = /** @class */ (function () {
    function PropertyAccessorElement() {
    }
    Object.defineProperty(PropertyAccessorElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyAccessorElement.prototype, "correspondingGetter", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyAccessorElement.prototype, "correspondingSetter", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyAccessorElement.prototype, "isGetter", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyAccessorElement.prototype, "isSetter", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyAccessorElement.prototype, "variable", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    PropertyAccessorElement.prototype.PropertyAccessorElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], PropertyAccessorElement.prototype, "correspondingGetter", null);
    __decorate([
        utils_1.AbstractProperty
    ], PropertyAccessorElement.prototype, "correspondingSetter", null);
    __decorate([
        utils_1.AbstractProperty
    ], PropertyAccessorElement.prototype, "isGetter", null);
    __decorate([
        utils_1.AbstractProperty
    ], PropertyAccessorElement.prototype, "isSetter", null);
    __decorate([
        utils_1.AbstractProperty
    ], PropertyAccessorElement.prototype, "variable", null);
    __decorate([
        utils_1.defaultConstructor
    ], PropertyAccessorElement.prototype, "PropertyAccessorElement", null);
    PropertyAccessorElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(ExecutableElement)
    ], PropertyAccessorElement);
    return PropertyAccessorElement;
}());
exports.PropertyAccessorElement = PropertyAccessorElement;
var PropertyInducingElement = /** @class */ (function () {
    function PropertyInducingElement() {
    }
    Object.defineProperty(PropertyInducingElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyInducingElement.prototype, "getter", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyInducingElement.prototype, "propagatedType", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyInducingElement.prototype, "setter", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    PropertyInducingElement.prototype.PropertyInducingElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], PropertyInducingElement.prototype, "getter", null);
    __decorate([
        utils_1.AbstractProperty
    ], PropertyInducingElement.prototype, "propagatedType", null);
    __decorate([
        utils_1.AbstractProperty
    ], PropertyInducingElement.prototype, "setter", null);
    __decorate([
        utils_1.defaultConstructor
    ], PropertyInducingElement.prototype, "PropertyInducingElement", null);
    PropertyInducingElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(VariableElement)
    ], PropertyInducingElement);
    return PropertyInducingElement;
}());
exports.PropertyInducingElement = PropertyInducingElement;
var ShowElementCombinator = /** @class */ (function () {
    function ShowElementCombinator() {
    }
    Object.defineProperty(ShowElementCombinator.prototype, "end", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowElementCombinator.prototype, "offset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowElementCombinator.prototype, "shownNames", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    ShowElementCombinator.prototype.ShowElementCombinator = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], ShowElementCombinator.prototype, "end", null);
    __decorate([
        utils_1.AbstractProperty
    ], ShowElementCombinator.prototype, "offset", null);
    __decorate([
        utils_1.AbstractProperty
    ], ShowElementCombinator.prototype, "shownNames", null);
    __decorate([
        utils_1.defaultConstructor
    ], ShowElementCombinator.prototype, "ShowElementCombinator", null);
    ShowElementCombinator = __decorate([
        utils_1.DartClass,
        utils_1.Implements(NamespaceCombinator)
    ], ShowElementCombinator);
    return ShowElementCombinator;
}());
exports.ShowElementCombinator = ShowElementCombinator;
var TopLevelVariableElement = /** @class */ (function () {
    function TopLevelVariableElement() {
    }
    Object.defineProperty(TopLevelVariableElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    TopLevelVariableElement.prototype.computeNode = function () { throw 'abstract'; };
    TopLevelVariableElement.prototype.TopLevelVariableElement = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.Abstract
    ], TopLevelVariableElement.prototype, "computeNode", null);
    __decorate([
        utils_1.defaultConstructor
    ], TopLevelVariableElement.prototype, "TopLevelVariableElement", null);
    TopLevelVariableElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(PropertyInducingElement)
    ], TopLevelVariableElement);
    return TopLevelVariableElement;
}());
exports.TopLevelVariableElement = TopLevelVariableElement;
var TypeDefiningElement = /** @class */ (function () {
    function TypeDefiningElement() {
    }
    Object.defineProperty(TypeDefiningElement.prototype, "type", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    TypeDefiningElement.prototype.TypeDefiningElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], TypeDefiningElement.prototype, "type", null);
    __decorate([
        utils_1.defaultConstructor
    ], TypeDefiningElement.prototype, "TypeDefiningElement", null);
    TypeDefiningElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], TypeDefiningElement);
    return TypeDefiningElement;
}());
exports.TypeDefiningElement = TypeDefiningElement;
var TypeParameterElement = /** @class */ (function () {
    function TypeParameterElement() {
    }
    Object.defineProperty(TypeParameterElement, "EMPTY_LIST", {
        get: function () {
            if (this.__$EMPTY_LIST === undefined) {
                this.__$EMPTY_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_LIST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeParameterElement.prototype, "bound", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeParameterElement.prototype, "type", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    TypeParameterElement.prototype.TypeParameterElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], TypeParameterElement.prototype, "bound", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        }),
        utils_1.AbstractProperty
    ], TypeParameterElement.prototype, "type", null);
    __decorate([
        utils_1.defaultConstructor
    ], TypeParameterElement.prototype, "TypeParameterElement", null);
    TypeParameterElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(TypeDefiningElement)
    ], TypeParameterElement);
    return TypeParameterElement;
}());
exports.TypeParameterElement = TypeParameterElement;
var TypeParameterizedElement = /** @class */ (function () {
    function TypeParameterizedElement() {
    }
    Object.defineProperty(TypeParameterizedElement.prototype, "type", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeParameterizedElement.prototype, "typeParameters", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    TypeParameterizedElement.prototype.TypeParameterizedElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], TypeParameterizedElement.prototype, "type", null);
    __decorate([
        utils_1.AbstractProperty
    ], TypeParameterizedElement.prototype, "typeParameters", null);
    __decorate([
        utils_1.defaultConstructor
    ], TypeParameterizedElement.prototype, "TypeParameterizedElement", null);
    TypeParameterizedElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], TypeParameterizedElement);
    return TypeParameterizedElement;
}());
exports.TypeParameterizedElement = TypeParameterizedElement;
var UndefinedElement = /** @class */ (function () {
    function UndefinedElement() {
    }
    UndefinedElement.prototype.UndefinedElement = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], UndefinedElement.prototype, "UndefinedElement", null);
    UndefinedElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], UndefinedElement);
    return UndefinedElement;
}());
exports.UndefinedElement = UndefinedElement;
var UriReferencedElement = /** @class */ (function () {
    function UriReferencedElement() {
    }
    Object.defineProperty(UriReferencedElement.prototype, "uri", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UriReferencedElement.prototype, "uriEnd", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UriReferencedElement.prototype, "uriOffset", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    UriReferencedElement.prototype.UriReferencedElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], UriReferencedElement.prototype, "uri", null);
    __decorate([
        utils_1.AbstractProperty
    ], UriReferencedElement.prototype, "uriEnd", null);
    __decorate([
        utils_1.AbstractProperty
    ], UriReferencedElement.prototype, "uriOffset", null);
    __decorate([
        utils_1.defaultConstructor
    ], UriReferencedElement.prototype, "UriReferencedElement", null);
    UriReferencedElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], UriReferencedElement);
    return UriReferencedElement;
}());
exports.UriReferencedElement = UriReferencedElement;
var MultiplyDefinedElement = /** @class */ (function () {
    function MultiplyDefinedElement() {
    }
    Object.defineProperty(MultiplyDefinedElement.prototype, "conflictingElements", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiplyDefinedElement.prototype, "type", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    MultiplyDefinedElement.prototype.MultiplyDefinedElement = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], MultiplyDefinedElement.prototype, "conflictingElements", null);
    __decorate([
        utils_1.AbstractProperty
    ], MultiplyDefinedElement.prototype, "type", null);
    __decorate([
        utils_1.defaultConstructor
    ], MultiplyDefinedElement.prototype, "MultiplyDefinedElement", null);
    MultiplyDefinedElement = __decorate([
        utils_1.DartClass,
        utils_1.Implements(Element)
    ], MultiplyDefinedElement);
    return MultiplyDefinedElement;
}());
exports.MultiplyDefinedElement = MultiplyDefinedElement;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=element.js.map