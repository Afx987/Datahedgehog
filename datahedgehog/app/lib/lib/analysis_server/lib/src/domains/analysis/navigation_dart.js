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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domains/analysis/navigation_dart.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
exports.computeDartNavigation = function (collector, unit, offset, length) {
    var dartCollector = new _DartNavigationCollector(collector);
    var visitor = new _DartNavigationComputerVisitor(dartCollector);
    if (offset == null || length == null) {
        unit.accept(visitor);
    }
    else {
        var node = exports._getNodeForRange(unit, offset, length);
        (function (_9_) { return (!!_9_) ? _9_.accept(visitor) : null; })(node);
    }
    return collector;
};
exports._getNodeForRange = function (unit, offset, length) {
    var node = new bare.createInstance(any, null, offset, offset + length).searchWithin(unit);
    for (var n = node; n != null; n = n.parent) {
        if (_common_1.is(n, any)) {
            return n;
        }
    }
    return node;
};
var DartNavigationComputer = /** @class */ (function () {
    function DartNavigationComputer() {
    }
    DartNavigationComputer.prototype.computeNavigation = function (collector, context, source, offset, length) {
        var libraries = context.getLibrariesContaining(source);
        if (libraries.isNotEmpty) {
            var unit = context.getResolvedCompilationUnit2(source, libraries.first);
            if (unit != null) {
                exports.computeDartNavigation(collector, unit, offset, length);
            }
        }
    };
    DartNavigationComputer.prototype.DartNavigationComputer = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartNavigationComputer.prototype, "computeNavigation", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartNavigationComputer.prototype, "DartNavigationComputer", null);
    DartNavigationComputer = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DartNavigationComputer);
    return DartNavigationComputer;
}());
exports.DartNavigationComputer = DartNavigationComputer;
var _DartNavigationCollector = /** @class */ (function () {
    function _DartNavigationCollector(collector) {
    }
    _DartNavigationCollector.prototype._DartNavigationCollector = function (collector) {
        this.collector = collector;
    };
    _DartNavigationCollector.prototype._addRegion = function (offset, length, element) {
        if (_common_1.is(element, any)) {
            element = element.field;
        }
        if (utils_1.op(utils_1.Op.EQUALS, element, null) || utils_1.op(utils_1.Op.EQUALS, element, DynamicElementImpl.instance)) {
            return;
        }
        if (utils_1.op(utils_1.Op.EQUALS, element.location, null)) {
            return;
        }
        var kind = null /*topLevl*/.convertElementKind(element.kind);
        var location = null /*topLevl*/.newLocation_fromElement(element);
        if (utils_1.op(utils_1.Op.EQUALS, location, null)) {
            return;
        }
        this.collector.addRegion(offset, length, kind, location);
    };
    _DartNavigationCollector.prototype._addRegion_nodeStart_nodeEnd = function (a, b, element) {
        var offset = a.offset;
        var length = utils_1.op(utils_1.Op.MINUS, b.end, offset);
        this._addRegion(offset, length, element);
    };
    _DartNavigationCollector.prototype._addRegionForNode = function (node, element) {
        if (utils_1.op(utils_1.Op.EQUALS, node, null)) {
            return;
        }
        var offset = node.offset;
        var length = node.length;
        this._addRegion(offset, length, element);
    };
    _DartNavigationCollector.prototype._addRegionForToken = function (token, element) {
        var offset = token.offset;
        var length = token.length;
        this._addRegion(offset, length, element);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DartNavigationCollector.prototype, "_DartNavigationCollector", null);
    _DartNavigationCollector = __decorate([
        utils_1.DartClass
    ], _DartNavigationCollector);
    return _DartNavigationCollector;
}());
exports._DartNavigationCollector = _DartNavigationCollector;
var _DartNavigationComputerVisitor = /** @class */ (function (_super) {
    __extends(_DartNavigationComputerVisitor, _super);
    function _DartNavigationComputerVisitor(computer) {
        var _this = this;
        return _this;
    }
    _DartNavigationComputerVisitor.prototype._DartNavigationComputerVisitor = function (computer) {
        this.computer = computer;
    };
    _DartNavigationComputerVisitor.prototype.visitAnnotation = function (node) {
        var _this = this;
        var element = node.element;
        if (_common_1.is(element, any) && element.isSynthetic) {
            element = element.enclosingElement;
        }
        var name = node.name;
        if (_common_1.is(name, any)) {
            var prefixElement = name.prefix.staticElement;
            if (_common_1.is(prefixElement, any)) {
                prefixElement = element;
            }
            this.computer._addRegionForNode(name.prefix, prefixElement);
            this.computer._addRegionForNode(name.identifier, element);
        }
        else {
            this.computer._addRegionForNode(name, element);
        }
        this.computer._addRegionForNode(node.constructorName, element);
        (function (_10_) { return (!!_10_) ? _10_.accept(_this) : null; })(node.arguments);
    };
    _DartNavigationComputerVisitor.prototype.visitAssignmentExpression = function (node) {
        var _this = this;
        (function (_11_) { return (!!_11_) ? _11_.accept(_this) : null; })(node.leftHandSide);
        this.computer._addRegionForToken(node.operator, node.bestElement);
        (function (_12_) { return (!!_12_) ? _12_.accept(_this) : null; })(node.rightHandSide);
    };
    _DartNavigationComputerVisitor.prototype.visitBinaryExpression = function (node) {
        var _this = this;
        (function (_13_) { return (!!_13_) ? _13_.accept(_this) : null; })(node.leftOperand);
        this.computer._addRegionForToken(node.operator, node.bestElement);
        (function (_14_) { return (!!_14_) ? _14_.accept(_this) : null; })(node.rightOperand);
    };
    _DartNavigationComputerVisitor.prototype.visitCompilationUnit = function (unit) {
        var nodes = new core.DartList.literal();
        nodes.addAll(unit.directives);
        nodes.addAll(unit.declarations);
        nodes.sort(function (a, b) {
            return utils_1.op(utils_1.Op.MINUS, a.offset, b.offset);
        });
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            node.accept(this);
        }
    };
    _DartNavigationComputerVisitor.prototype.visitConstructorDeclaration = function (node) {
        {
            var firstNode = node.returnType;
            var lastNode = node.name;
            if (utils_1.op(utils_1.Op.EQUALS, lastNode, null)) {
                lastNode = firstNode;
            }
            if (firstNode != null && lastNode != null) {
                this.computer._addRegion_nodeStart_nodeEnd(firstNode, lastNode, node.element);
            }
        }
        _super.prototype.visitConstructorDeclaration.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype.visitConstructorName = function (node) {
        var parent = node.parent;
        if (_common_1.is(parent, any) && utils_1.op(utils_1.Op.EQUALS, parent.constructorName, node)) {
            this._addConstructorName(parent, node);
        }
        else if (_common_1.is(parent, any) && utils_1.op(utils_1.Op.EQUALS, parent.redirectedConstructor, node)) {
            this._addConstructorName(node, node);
        }
    };
    _DartNavigationComputerVisitor.prototype.visitDeclaredIdentifier = function (node) {
        if (utils_1.op(utils_1.Op.EQUALS, node.type, null)) {
            var token = node.keyword;
            if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.keyword : null; })(token), Keyword.VAR)) {
                var inferredType = (function (t) { return (!!t) ? t.bestType : null; })(node.identifier);
                var element = (function (t) { return (!!t) ? t.element : null; })(inferredType);
                if (element != null) {
                    this.computer._addRegionForToken(token, element);
                }
            }
        }
        _super.prototype.visitDeclaredIdentifier.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype.visitExportDirective = function (node) {
        var exportElement = node.element;
        if (exportElement != null) {
            var libraryElement = exportElement.exportedLibrary;
            this._addUriDirectiveRegion(node, libraryElement);
        }
        _super.prototype.visitExportDirective.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype.visitImportDirective = function (node) {
        var importElement = node.element;
        if (importElement != null) {
            var libraryElement = importElement.importedLibrary;
            this._addUriDirectiveRegion(node, libraryElement);
        }
        _super.prototype.visitImportDirective.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype.visitIndexExpression = function (node) {
        _super.prototype.visitIndexExpression.call(this, node);
        var element = node.bestElement;
        this.computer._addRegionForToken(node.leftBracket, element);
        this.computer._addRegionForToken(node.rightBracket, element);
    };
    _DartNavigationComputerVisitor.prototype.visitLibraryDirective = function (node) {
        this.computer._addRegionForNode(node.name, node.element);
    };
    _DartNavigationComputerVisitor.prototype.visitPartDirective = function (node) {
        this._addUriDirectiveRegion(node, node.element);
        _super.prototype.visitPartDirective.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype.visitPartOfDirective = function (node) {
        this.computer._addRegionForNode(node.libraryName, node.element);
        _super.prototype.visitPartOfDirective.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype.visitPostfixExpression = function (node) {
        _super.prototype.visitPostfixExpression.call(this, node);
        this.computer._addRegionForToken(node.operator, node.bestElement);
    };
    _DartNavigationComputerVisitor.prototype.visitPrefixExpression = function (node) {
        this.computer._addRegionForToken(node.operator, node.bestElement);
        _super.prototype.visitPrefixExpression.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype.visitRedirectingConstructorInvocation = function (node) {
        var _this = this;
        var element = node.staticElement;
        if (element != null && element.isSynthetic) {
            element = element.enclosingElement;
        }
        this.computer._addRegionForToken(node.thisKeyword, element);
        this.computer._addRegionForNode(node.constructorName, element);
        (function (_15_) { return (!!_15_) ? _15_.accept(_this) : null; })(node.argumentList);
    };
    _DartNavigationComputerVisitor.prototype.visitSimpleIdentifier = function (node) {
        if (_common_1.is(node.parent, any)) {
            return;
        }
        var element = node.bestElement;
        this.computer._addRegionForNode(node, element);
    };
    _DartNavigationComputerVisitor.prototype.visitSuperConstructorInvocation = function (node) {
        var _this = this;
        var element = node.staticElement;
        if (element != null && element.isSynthetic) {
            element = element.enclosingElement;
        }
        this.computer._addRegionForToken(node.superKeyword, element);
        this.computer._addRegionForNode(node.constructorName, element);
        (function (_16_) { return (!!_16_) ? _16_.accept(_this) : null; })(node.argumentList);
    };
    _DartNavigationComputerVisitor.prototype.visitVariableDeclarationList = function (node) {
        var getCommonElement = function (variables) {
            var firstElement = (function (t) { return (!!t) ? t.element : null; })((function (t) { return (!!t) ? t.bestType : null; })(variables[0].name));
            if (utils_1.op(utils_1.Op.EQUALS, firstElement, null)) {
                return null;
            }
            for (var i = 1; i < variables.length; i++) {
                var element = (function (t) { return (!!t) ? t.element : null; })((function (t) { return (!!t) ? t.bestType : null; })(variables[1].name));
                if (element != firstElement) {
                    return null;
                }
            }
            return firstElement;
        };
        if (utils_1.op(utils_1.Op.EQUALS, node.type, null)) {
            var token = node.keyword;
            if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.keyword : null; })(token), Keyword.VAR)) {
                var element = getCommonElement(node.variables);
                if (element != null) {
                    this.computer._addRegionForToken(token, element);
                }
            }
        }
        _super.prototype.visitVariableDeclarationList.call(this, node);
    };
    _DartNavigationComputerVisitor.prototype._addConstructorName = function (parent, node) {
        var element = node.staticElement;
        if (utils_1.op(utils_1.Op.EQUALS, element, null)) {
            return;
        }
        if (element.isSynthetic) {
            element = element.enclosingElement;
        }
        var typeName = node.type;
        {
            var name_1 = typeName.name;
            var className = name_1;
            if (_common_1.is(name_1, any)) {
                name_1.prefix.accept(this);
                className = name_1.identifier;
            }
            this.computer._addRegionForNode(className, element);
        }
        var typeArguments = typeName.typeArguments;
        if (typeArguments != null) {
            typeArguments.accept(this);
        }
        if (node.name != null) {
            this.computer._addRegionForNode(node.name, element);
        }
    };
    _DartNavigationComputerVisitor.prototype._addUriDirectiveRegion = function (node, element) {
        if (element != null) {
            var source = element.source;
            if (element.context.exists(source)) {
                this.computer._addRegionForNode(node.uri, element);
            }
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DartNavigationComputerVisitor.prototype, "_DartNavigationComputerVisitor", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitAnnotation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitAssignmentExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitBinaryExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitCompilationUnit", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitConstructorDeclaration", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitConstructorName", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitDeclaredIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitExportDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitImportDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitIndexExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitLibraryDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitPartDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitPartOfDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitPostfixExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitPrefixExpression", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitRedirectingConstructorInvocation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitSimpleIdentifier", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitSuperConstructorInvocation", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartNavigationComputerVisitor.prototype, "visitVariableDeclarationList", null);
    _DartNavigationComputerVisitor = __decorate([
        utils_1.DartClass
    ], _DartNavigationComputerVisitor);
    return _DartNavigationComputerVisitor;
}(any));
exports._DartNavigationComputerVisitor = _DartNavigationComputerVisitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=navigation_dart.js.map