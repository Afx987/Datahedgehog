"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_outline.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var DartUnitOutlineComputer = /** @class */ (function () {
    function DartUnitOutlineComputer(file, lineInfo, unit) {
    }
    DartUnitOutlineComputer_1 = DartUnitOutlineComputer;
    DartUnitOutlineComputer.prototype.DartUnitOutlineComputer = function (file, lineInfo, unit) {
        this.file = file;
        this.lineInfo = lineInfo;
        this.unit = unit;
    };
    DartUnitOutlineComputer.prototype.compute = function () {
        var unitContents = new core.DartList.literal();
        for (var _i = 0, _a = this.unit.declarations; _i < _a.length; _i++) {
            var unitMember = _a[_i];
            if (_common_1.is(unitMember, any)) {
                var classDeclaration = unitMember;
                var classContents = new core.DartList.literal();
                for (var _b = 0, _c = classDeclaration.members; _b < _c.length; _b++) {
                    var classMember = _c[_b];
                    if (_common_1.is(classMember, any)) {
                        var constructorDeclaration = classMember;
                        classContents.add(this._newConstructorOutline(constructorDeclaration));
                    }
                    if (_common_1.is(classMember, any)) {
                        var fieldDeclaration = classMember;
                        var fields = fieldDeclaration.fields;
                        if (fields != null) {
                            var fieldType = fields.type;
                            var fieldTypeName = DartUnitOutlineComputer_1._safeToSource(fieldType);
                            for (var _d = 0, _e = fields.variables; _d < _e.length; _d++) {
                                var field = _e[_d];
                                classContents.add(this._newVariableOutline(fieldTypeName, ElementKind.FIELD, field, fieldDeclaration.isStatic));
                            }
                        }
                    }
                    if (_common_1.is(classMember, any)) {
                        var methodDeclaration = classMember;
                        classContents.add(this._newMethodOutline(methodDeclaration));
                    }
                }
                unitContents.add(this._newClassOutline(classDeclaration, classContents));
            }
            if (_common_1.is(unitMember, any)) {
                var enumDeclaration = unitMember;
                var constantOutlines = new core.DartList.literal();
                for (var _f = 0, _g = enumDeclaration.constants; _f < _g.length; _f++) {
                    var constant = _g[_f];
                    constantOutlines.add(this._newEnumConstant(constant));
                }
                unitContents.add(this._newEnumOutline(enumDeclaration, constantOutlines));
            }
            if (_common_1.is(unitMember, any)) {
                var fieldDeclaration = unitMember;
                var fields = fieldDeclaration.variables;
                if (fields != null) {
                    var fieldType = fields.type;
                    var fieldTypeName = DartUnitOutlineComputer_1._safeToSource(fieldType);
                    for (var _h = 0, _j = fields.variables; _h < _j.length; _h++) {
                        var field = _j[_h];
                        unitContents.add(this._newVariableOutline(fieldTypeName, ElementKind.TOP_LEVEL_VARIABLE, field, false));
                    }
                }
            }
            if (_common_1.is(unitMember, any)) {
                var functionDeclaration = unitMember;
                unitContents.add(this._newFunctionOutline(functionDeclaration, true));
            }
            if (_common_1.is(unitMember, any)) {
                var alias = unitMember;
                unitContents.add(this._newClassTypeAlias(alias));
            }
            if (_common_1.is(unitMember, any)) {
                var alias = unitMember;
                unitContents.add(this._newFunctionTypeAliasOutline(alias));
            }
        }
        var unitOutline = this._newUnitOutline(unitContents);
        return unitOutline;
    };
    DartUnitOutlineComputer.prototype._addLocalFunctionOutlines = function (body) {
        var contents = new core.DartList.literal();
        body.accept(new _LocalFunctionOutlinesVisitor(this, contents));
        return contents;
    };
    DartUnitOutlineComputer.prototype._getLocationNode = function (node) {
        var offset = node.offset;
        var length = node.length;
        return this._getLocationOffsetLength(offset, length);
    };
    DartUnitOutlineComputer.prototype._getLocationOffsetLength = function (offset, length) {
        var lineLocation = this.lineInfo.getLocation(offset);
        var startLine = lineLocation.lineNumber;
        var startColumn = lineLocation.columnNumber;
        return new bare.createInstance(any, null, this.file, offset, length, startLine, startColumn);
    };
    DartUnitOutlineComputer.prototype._getSourceRegion = function (node) {
        var endOffset = node.end;
        var firstOffset;
        var siblings;
        var parent = node.parent;
        if (_common_1.is(parent, any)) {
            var variableList = parent;
            var variables = variableList.variables;
            var variableIndex = variables.indexOf(node);
            if (variableIndex == variables.length - 1) {
                endOffset = variableList.parent.end;
            }
            if (variableIndex == 0) {
                node = parent.parent;
                parent = node.parent;
            }
            else if (variableIndex >= 1) {
                firstOffset = variables[variableIndex - 1].end;
                return new _SourceRegion(firstOffset, endOffset - firstOffset);
            }
        }
        if (_common_1.is(parent, any)) {
            firstOffset = node.offset;
            siblings = parent.declarations;
        }
        else if (_common_1.is(parent, any)) {
            firstOffset = parent.leftBracket.end;
            siblings = parent.members;
        }
        else {
            var offset = node.offset;
            return new _SourceRegion(offset, endOffset - offset);
        }
        var index = siblings.indexOf(node);
        if (index == 0) {
            return new _SourceRegion(firstOffset, endOffset - firstOffset);
        }
        var prevSiblingEnd = siblings[index - 1].end;
        return new _SourceRegion(prevSiblingEnd, endOffset - prevSiblingEnd);
    };
    DartUnitOutlineComputer.prototype._newClassOutline = function (node, classContents) {
        var nameNode = node.name;
        var name = nameNode.name;
        var sourceRegion = this._getSourceRegion(node);
        var element = new bare.createInstance(any, null, ElementKind.CLASS, name, Element.makeFlags({
            isPrivate: Identifier.isPrivateName(name), isDeprecated: DartUnitOutlineComputer_1._isDeprecated(node), isAbstract: node.isAbstract
        }), {
            location: this._getLocationNode(nameNode), typeParameters: DartUnitOutlineComputer_1._getTypeParametersStr(node.typeParameters)
        });
        return new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length, {
            children: nullIfEmpty(classContents)
        });
    };
    DartUnitOutlineComputer.prototype._newClassTypeAlias = function (node) {
        var nameNode = node.name;
        var name = nameNode.name;
        var sourceRegion = this._getSourceRegion(node);
        var element = new bare.createInstance(any, null, ElementKind.CLASS_TYPE_ALIAS, name, Element.makeFlags({
            isPrivate: Identifier.isPrivateName(name), isDeprecated: DartUnitOutlineComputer_1._isDeprecated(node), isAbstract: node.isAbstract
        }), {
            location: this._getLocationNode(nameNode), typeParameters: DartUnitOutlineComputer_1._getTypeParametersStr(node.typeParameters)
        });
        return new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length);
    };
    DartUnitOutlineComputer.prototype._newConstructorOutline = function (constructor) {
        var returnType = constructor.returnType;
        var name = returnType.name;
        var offset = returnType.offset;
        var length = returnType.length;
        var constructorNameNode = constructor.name;
        var isPrivate = false;
        if (constructorNameNode != null) {
            var constructorName = constructorNameNode.name;
            isPrivate = Identifier.isPrivateName(constructorName);
            name += "." + constructorName;
            offset = constructorNameNode.offset;
            length = constructorNameNode.length;
        }
        var sourceRegion = this._getSourceRegion(constructor);
        var parameters = constructor.parameters;
        var parametersStr = DartUnitOutlineComputer_1._safeToSource(parameters);
        var element = new bare.createInstance(any, null, ElementKind.CONSTRUCTOR, name, Element.makeFlags({
            isPrivate: isPrivate, isDeprecated: DartUnitOutlineComputer_1._isDeprecated(constructor)
        }), {
            location: this._getLocationOffsetLength(offset, length), parameters: parametersStr
        });
        var contents = this._addLocalFunctionOutlines(constructor.body);
        var outline = new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length, {
            children: nullIfEmpty(contents)
        });
        return outline;
    };
    DartUnitOutlineComputer.prototype._newEnumConstant = function (node) {
        var nameNode = node.name;
        var name = nameNode.name;
        var sourceRegion = this._getSourceRegion(node);
        var element = new bare.createInstance(any, null, ElementKind.ENUM_CONSTANT, name, Element.makeFlags({
            isPrivate: Identifier.isPrivateName(name), isDeprecated: DartUnitOutlineComputer_1._isDeprecated(node)
        }), {
            location: this._getLocationNode(nameNode)
        });
        return new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length);
    };
    DartUnitOutlineComputer.prototype._newEnumOutline = function (node, children) {
        var nameNode = node.name;
        var name = nameNode.name;
        var sourceRegion = this._getSourceRegion(node);
        var element = new bare.createInstance(any, null, ElementKind.ENUM, name, Element.makeFlags({
            isPrivate: Identifier.isPrivateName(name), isDeprecated: DartUnitOutlineComputer_1._isDeprecated(node)
        }), {
            location: this._getLocationNode(nameNode)
        });
        return new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length, {
            children: nullIfEmpty(children)
        });
    };
    DartUnitOutlineComputer.prototype._newFunctionOutline = function () { };
    var DartUnitOutlineComputer_1;
    __decorate([
        utils_1.defaultConstructor
    ], DartUnitOutlineComputer.prototype, "DartUnitOutlineComputer", null);
    DartUnitOutlineComputer = DartUnitOutlineComputer_1 = __decorate([
        utils_1.DartClass
    ], DartUnitOutlineComputer);
    return DartUnitOutlineComputer;
}());
exports.DartUnitOutlineComputer = DartUnitOutlineComputer;
any;
{
    var returnType = function () { }.returnType;
    var nameNode = function () { }.name;
    var name_1 = nameNode.name;
    var functionExpression = function () { }.functionExpression;
    var parameters = functionExpression.parameters;
    var kind = void 0;
    if (function () { }.isGetter) {
        kind = ElementKind.GETTER;
    }
    else if (function () { }.isSetter) {
        kind = ElementKind.SETTER;
    }
    else {
        kind = ElementKind.FUNCTION;
    }
    var sourceRegion = this._getSourceRegion(function () { });
    var parametersStr = DartUnitOutlineComputer._safeToSource(parameters);
    var returnTypeStr = DartUnitOutlineComputer._safeToSource(returnType);
    var element = new bare.createInstance(any, null, kind, name_1, Element.makeFlags({
        isPrivate: Identifier.isPrivateName(name_1), isDeprecated: DartUnitOutlineComputer._isDeprecated(function () { }), isStatic: isStatic
    }), {
        location: this._getLocationNode(nameNode), parameters: parametersStr, returnType: returnTypeStr
    });
    var contents = this._addLocalFunctionOutlines(functionExpression.body);
    var outline = new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length, {
        children: nullIfEmpty(contents)
    });
    return outline;
}
_newFunctionTypeAliasOutline(node, any);
any;
{
    var returnType = node.returnType;
    var nameNode = node.name;
    var name_2 = nameNode.name;
    var sourceRegion = this._getSourceRegion(node);
    var parameters = node.parameters;
    var parametersStr = DartUnitOutlineComputer._safeToSource(parameters);
    var returnTypeStr = DartUnitOutlineComputer._safeToSource(returnType);
    var element = new bare.createInstance(any, null, ElementKind.FUNCTION_TYPE_ALIAS, name_2, Element.makeFlags({
        isPrivate: Identifier.isPrivateName(name_2), isDeprecated: DartUnitOutlineComputer._isDeprecated(node)
    }), {
        location: this._getLocationNode(nameNode), parameters: parametersStr, returnType: returnTypeStr, typeParameters: DartUnitOutlineComputer._getTypeParametersStr(node.typeParameters)
    });
    return new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length);
}
_newMethodOutline(method, any);
any;
{
    var returnType = method.returnType;
    var nameNode = method.name;
    var name_3 = nameNode.name;
    var parameters = method.parameters;
    var kind = void 0;
    if (method.isGetter) {
        kind = ElementKind.GETTER;
    }
    else if (method.isSetter) {
        kind = ElementKind.SETTER;
    }
    else {
        kind = ElementKind.METHOD;
    }
    var sourceRegion = this._getSourceRegion(method);
    var parametersStr = (function (_7_) { return (!!_7_) ? _7_.toSource() : null; })(parameters);
    var returnTypeStr = DartUnitOutlineComputer._safeToSource(returnType);
    var element = new bare.createInstance(any, null, kind, name_3, Element.makeFlags({
        isPrivate: Identifier.isPrivateName(name_3), isDeprecated: DartUnitOutlineComputer._isDeprecated(method), isAbstract: method.isAbstract, isStatic: method.isStatic
    }), {
        location: this._getLocationNode(nameNode), parameters: parametersStr, returnType: returnTypeStr
    });
    var contents = this._addLocalFunctionOutlines(method.body);
    var outline = new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length, {
        children: nullIfEmpty(contents)
    });
    return outline;
}
_newUnitOutline(unitContents, core.DartList(), any, {
    let: let, element: any = new bare.createInstance(any, null, ElementKind.COMPILATION_UNIT, '<unit>', Element.makeFlags(), {
        location: this._getLocationNode(this.unit)
    }),
    return: new bare.createInstance(any, null, element, this.unit.offset, this.unit.length, {
        children: nullIfEmpty(unitContents)
    })
}, _newVariableOutline(typeName, string, kind, any, variable, any, isStatic, boolean), any, {
    let: let, nameNode: any = variable.name,
    let: let, name: string = nameNode.name,
    let: let, sourceRegion: exports._SourceRegion = _SourceRegion = this._getSourceRegion(variable),
    let: let, element: any = new bare.createInstance(any, null, kind, name, Element.makeFlags({
        isPrivate: Identifier.isPrivateName(name), isDeprecated: DartUnitOutlineComputer._isDeprecated(variable), isStatic: isStatic, isConst: variable.isConst, isFinal: variable.isFinal
    }), {
        location: this._getLocationNode(nameNode), returnType: typeName
    }),
    let: let, outline: any = new bare.createInstance(any, null, element, sourceRegion.offset, sourceRegion.length),
    return: outline
}, static, _getTypeParametersStr(parameters, any), string, {
    if: function (op) { }
}(utils_1.Op.EQUALS, parameters, null));
{
    return null;
}
return parameters.toSource();
_isDeprecated(declaration, any);
boolean;
{
    var element = declaration.element;
    return element != null && element.isDeprecated;
}
_safeToSource(node, any);
string;
{
    return utils_1.op(utils_1.Op.EQUALS, node, null) ? '' : node.toSource();
}
var _LocalFunctionOutlinesVisitor = /** @class */ (function (_super) {
    __extends(_LocalFunctionOutlinesVisitor, _super);
    function _LocalFunctionOutlinesVisitor(outlineComputer, contents) {
        var _this = this;
        return _this;
    }
    _LocalFunctionOutlinesVisitor.prototype._LocalFunctionOutlinesVisitor = function (outlineComputer, contents) {
        this.outlineComputer = outlineComputer;
        this.contents = contents;
    };
    _LocalFunctionOutlinesVisitor.prototype.visitFunctionDeclaration = function (node) {
        this.contents.add(this.outlineComputer._newFunctionOutline(node, false));
    };
    __decorate([
        utils_1.defaultConstructor
    ], _LocalFunctionOutlinesVisitor.prototype, "_LocalFunctionOutlinesVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _LocalFunctionOutlinesVisitor.prototype, "visitFunctionDeclaration", null);
    _LocalFunctionOutlinesVisitor = __decorate([
        utils_1.DartClass
    ], _LocalFunctionOutlinesVisitor);
    return _LocalFunctionOutlinesVisitor;
}(any));
exports._LocalFunctionOutlinesVisitor = _LocalFunctionOutlinesVisitor;
var _SourceRegion = /** @class */ (function () {
    function _SourceRegion(offset, length) {
    }
    _SourceRegion.prototype._SourceRegion = function (offset, length) {
        this.offset = offset;
        this.length = length;
    };
    __decorate([
        utils_1.defaultConstructor
    ], _SourceRegion.prototype, "_SourceRegion", null);
    _SourceRegion = __decorate([
        utils_1.DartClass
    ], _SourceRegion);
    return _SourceRegion;
}());
exports._SourceRegion = _SourceRegion;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=computer_outline.js.map