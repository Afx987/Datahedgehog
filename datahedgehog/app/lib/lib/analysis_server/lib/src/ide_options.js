"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var IdeOptions = /** @class */ (function () {
    function IdeOptions() {
    }
    IdeOptions.$from = function (options) {
        return (function (_) {
            {
                _.generateFlutterWidgetChildrenBoilerPlate = options.enableVerboseFlutterCompletions;
                return _;
            }
        })(new IdeOptionsImpl());
    };
    Object.defineProperty(IdeOptions.prototype, "generateFlutterWidgetChildrenBoilerPlate", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        utils_1.AbstractProperty
    ], IdeOptions.prototype, "generateFlutterWidgetChildrenBoilerPlate", null);
    __decorate([
        utils_1.namedFactory
    ], IdeOptions, "$from", null);
    IdeOptions = __decorate([
        utils_1.DartClass
    ], IdeOptions);
    return IdeOptions;
}());
exports.IdeOptions = IdeOptions;
var IdeOptionsImpl = /** @class */ (function () {
    function IdeOptionsImpl() {
    }
    IdeOptionsImpl.prototype.IdeOptionsImpl = function () {
        this.generateFlutterWidgetChildrenBoilerPlate = false;
    };
    __decorate([
        utils_1.defaultConstructor
    ], IdeOptionsImpl.prototype, "IdeOptionsImpl", null);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], IdeOptionsImpl.prototype, "generateFlutterWidgetChildrenBoilerPlate", void 0);
    IdeOptionsImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(IdeOptions)
    ], IdeOptionsImpl);
    return IdeOptionsImpl;
}());
exports.IdeOptionsImpl = IdeOptionsImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=ide_options.js.map