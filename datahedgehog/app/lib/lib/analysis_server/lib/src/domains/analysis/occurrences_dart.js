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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domains/analysis/occurrences_dart.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
exports.addDartOccurrences = function (collector, unit) {
    var visitor = new _DartUnitOccurrencesComputerVisitor();
    unit.accept(visitor);
    visitor.elementsOffsets.forEach(function (engineElement, offsets) {
        var length = engineElement.nameLength;
        var serverElement = null /*topLevl*/.convertElement(engineElement);
        var occurrences = new bare.createInstance(any, null, serverElement, offsets, length);
        collector.addOccurrences(occurrences);
    });
};
var DartOccurrencesComputer = /** @class */ (function () {
    function DartOccurrencesComputer() {
    }
    DartOccurrencesComputer.prototype.computeOccurrences = function (collector, context, source) {
        var libraries = context.getLibrariesContaining(source);
        if (libraries.isNotEmpty) {
            var unit = context.getResolvedCompilationUnit2(source, libraries.first);
            if (unit != null) {
                exports.addDartOccurrences(collector, unit);
            }
        }
    };
    DartOccurrencesComputer.prototype.DartOccurrencesComputer = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], DartOccurrencesComputer.prototype, "computeOccurrences", null);
    __decorate([
        utils_1.defaultConstructor
    ], DartOccurrencesComputer.prototype, "DartOccurrencesComputer", null);
    DartOccurrencesComputer = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], DartOccurrencesComputer);
    return DartOccurrencesComputer;
}());
exports.DartOccurrencesComputer = DartOccurrencesComputer;
var _DartUnitOccurrencesComputerVisitor = /** @class */ (function (_super) {
    __extends(_DartUnitOccurrencesComputerVisitor, _super);
    function _DartUnitOccurrencesComputerVisitor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _DartUnitOccurrencesComputerVisitor.prototype.visitSimpleIdentifier = function (node) {
        var element = node.bestElement;
        if (element != null) {
            this._addOccurrence(element, node.offset);
        }
        return _super.prototype.visitSimpleIdentifier.call(this, node);
    };
    _DartUnitOccurrencesComputerVisitor.prototype._addOccurrence = function (element, offset) {
        element = this._canonicalizeElement(element);
        if (utils_1.op(utils_1.Op.EQUALS, element, null) || utils_1.op(utils_1.Op.EQUALS, element, DynamicElementImpl.instance)) {
            return;
        }
        var offsets = this.elementsOffsets.get(element);
        if (offsets == null) {
            offsets = new core.DartList.literal();
            this.elementsOffsets.set(element, offsets);
        }
        offsets.add(offset);
    };
    _DartUnitOccurrencesComputerVisitor.prototype._canonicalizeElement = function (element) {
        if (_common_1.is(element, any)) {
            element = element.field;
        }
        if (_common_1.is(element, any)) {
            element = element.variable;
        }
        if (_common_1.is(element, any)) {
            element = element.baseElement;
        }
        return element;
    };
    _DartUnitOccurrencesComputerVisitor.prototype._DartUnitOccurrencesComputerVisitor = function () {
        this.elementsOffsets = new core.DartMap.literal([]);
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartUnitOccurrencesComputerVisitor.prototype, "visitSimpleIdentifier", null);
    __decorate([
        utils_1.defaultConstructor
    ], _DartUnitOccurrencesComputerVisitor.prototype, "_DartUnitOccurrencesComputerVisitor", null);
    _DartUnitOccurrencesComputerVisitor = __decorate([
        utils_1.DartClass
    ], _DartUnitOccurrencesComputerVisitor);
    return _DartUnitOccurrencesComputerVisitor;
}(any));
exports._DartUnitOccurrencesComputerVisitor = _DartUnitOccurrencesComputerVisitor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=occurrences_dart.js.map