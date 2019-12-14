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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/uri_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib4 = require("@dart2ts.packages/path/lib/path");
var UriContributor = /** @class */ (function (_super) {
    __extends(UriContributor, _super);
    function UriContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    UriContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.builder = new _UriSuggestionBuilder(request);
                request.target.containingNode.accept(this.builder);
                return [2 /*return*/, this.builder.suggestions];
            });
        }); })());
    };
    UriContributor.prototype.UriContributor = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], UriContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], UriContributor.prototype, "UriContributor", null);
    UriContributor = __decorate([
        utils_1.DartClass
    ], UriContributor);
    return UriContributor;
}(any));
exports.UriContributor = UriContributor;
var _UriSuggestionBuilder = /** @class */ (function (_super) {
    __extends(_UriSuggestionBuilder, _super);
    function _UriSuggestionBuilder(request) {
        var _this = this;
        return _this;
    }
    _UriSuggestionBuilder.prototype._UriSuggestionBuilder = function (request) {
        this.suggestions = new core.DartList.literal();
        this.request = request;
    };
    _UriSuggestionBuilder.prototype.visitExportDirective = function (node) {
        this.visitNamespaceDirective(node);
    };
    _UriSuggestionBuilder.prototype.visitImportDirective = function (node) {
        this.visitNamespaceDirective(node);
    };
    _UriSuggestionBuilder.prototype.visitNamespaceDirective = function (node) {
        var uri = node.uri;
        if (_common_1.is(uri, any)) {
            var offset = this.request.offset;
            var start = uri.offset;
            var end = uri.end;
            if (offset > start) {
                if (offset < end) {
                    this.visitSimpleStringLiteral(uri);
                }
                else if (offset == end) {
                    if (end == start + 1) {
                        this.visitSimpleStringLiteral(uri);
                    }
                    else {
                        var data = this.request.sourceContents;
                        if (end == new core.DartString(data).length) {
                            var ch = data[end - 1];
                            if (ch != '"' && ch != "'") {
                                this.visitSimpleStringLiteral(uri);
                            }
                        }
                    }
                }
            }
            else if (offset == start && offset == end) {
                var data = this.request.sourceContents;
                if (end == new core.DartString(data).length) {
                    var ch = data[end - 1];
                    if (ch == '"' || ch == "'") {
                        this.visitSimpleStringLiteral(uri);
                    }
                }
            }
        }
    };
    _UriSuggestionBuilder.prototype.visitSimpleStringLiteral = function (node) {
        var parent = node.parent;
        if (_common_1.is(parent, any) && utils_1.op(utils_1.Op.EQUALS, parent.uri, node)) {
            var partialUri = this._extractPartialUri(node);
            if (partialUri != null) {
                this._addDartSuggestions();
                this._addPackageSuggestions(partialUri);
                this._addFileSuggestions(partialUri);
            }
        }
        else if (_common_1.is(parent, any) && utils_1.op(utils_1.Op.EQUALS, parent.uri, node)) {
            var partialUri = this._extractPartialUri(node);
            if (partialUri != null) {
                this._addFileSuggestions(partialUri);
            }
        }
    };
    _UriSuggestionBuilder.prototype._addDartSuggestions = function () {
        this._addSuggestion('dart:');
        var factory = this.request.sourceFactory;
        for (var _i = 0, _a = factory.dartSdk.sdkLibraries; _i < _a.length; _i++) {
            var lib = _a[_i];
            if (!lib.isInternal && !lib.isImplementation) {
                if (!lib.shortName.startsWith('dart:_')) {
                    this._addSuggestion(lib.shortName, {
                        relevance: utils_1.op(utils_1.Op.EQUALS, lib.shortName, 'dart:core') ? DART_RELEVANCE_LOW : DART_RELEVANCE_DEFAULT
                    });
                }
            }
        }
    };
    _UriSuggestionBuilder.prototype._addFileSuggestions = function (partialUri) {
        var resProvider = this.request.resourceProvider;
        var resContext = resProvider.pathContext;
        var source = this.request.source;
        var parentUri;
        if ((new core.DartString(partialUri).endsWith('/'))) {
            parentUri = partialUri;
        }
        else {
            parentUri = lib4.properties.posix.dirname(partialUri);
            if (parentUri != '.' && !new core.DartString(parentUri).endsWith('/')) {
                parentUri = parentUri + "/";
            }
        }
        var uriPrefix = parentUri == '.' ? '' : parentUri;
        var dirPath = resContext.normalize(parentUri);
        if (resContext.isRelative(dirPath)) {
            var sourceDirPath = resContext.dirname(source.fullName);
            if (resContext.isAbsolute(sourceDirPath)) {
                dirPath = resContext.normalize(resContext.join(sourceDirPath, dirPath));
            }
            else {
                return;
            }
            var srcInLib = resContext.split(sourceDirPath).contains('lib');
            var dstInLib = resContext.split(dirPath).contains('lib');
            if (srcInLib && !dstInLib) {
                return;
            }
        }
        if (new core.DartString(dirPath).endsWith('\.')) {
            dirPath = new core.DartString(dirPath).substring(0, new core.DartString(dirPath).length - 1);
        }
        var dir = resProvider.getResource(dirPath);
        if (_common_1.is(dir, any)) {
            try {
                for (var _i = 0, _a = dir.getChildren(); _i < _a.length; _i++) {
                    var child = _a[_i];
                    var completion = void 0;
                    if (_common_1.is(child, any)) {
                        completion = "" + uriPrefix + child.shortName + "/";
                    }
                    else {
                        completion = "" + uriPrefix + child.shortName;
                    }
                    if (completion != source.shortName) {
                        this._addSuggestion(completion);
                    }
                }
            }
            catch (__error__) {
                if (_common_1.is(__error__, any)) {
                }
            }
        }
    };
    _UriSuggestionBuilder.prototype._addPackageFolderSuggestions = function (partial, prefix, folder) {
        try {
            for (var _i = 0, _a = folder.getChildren(); _i < _a.length; _i++) {
                var child = _a[_i];
                if (_common_1.is(child, any)) {
                    var childPrefix = "" + prefix + child.shortName + "/";
                    this._addSuggestion(childPrefix);
                    if (new core.DartString(partial).startsWith(childPrefix)) {
                        this._addPackageFolderSuggestions(partial, childPrefix, child);
                    }
                }
                else {
                    this._addSuggestion("" + prefix + child.shortName);
                }
            }
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
                return;
            }
        }
    };
    _UriSuggestionBuilder.prototype._addPackageSuggestions = function (partial) {
        var _this = this;
        var factory = this.request.sourceFactory;
        var packageMap = factory.packageMap;
        if (packageMap != null) {
            this._addSuggestion('package:');
            packageMap.forEach(function (pkgName, folders) {
                var prefix = "package:" + pkgName + "/";
                _this._addSuggestion(prefix);
                for (var _i = 0, folders_1 = folders; _i < folders_1.length; _i++) {
                    var folder = folders_1[_i];
                    if (folder.exists) {
                        _this._addPackageFolderSuggestions(partial, prefix, folder);
                    }
                }
            });
        }
    };
    _UriSuggestionBuilder.prototype._addSuggestion = function (completion, _namedArguments) {
        var relevance = Object.assign({
            "relevance": DART_RELEVANCE_DEFAULT
        }, _namedArguments).relevance;
        this.suggestions.add(new bare.createInstance(any, null, CompletionSuggestionKind.IMPORT, relevance, completion, new core.DartString(completion).length, 0, false, false));
    };
    _UriSuggestionBuilder.prototype._extractPartialUri = function (node) {
        if (utils_1.op(utils_1.Op.LT, this.request.offset, node.contentsOffset)) {
            return null;
        }
        return node.literal.lexeme.substring(utils_1.op(utils_1.Op.MINUS, node.contentsOffset, node.offset), utils_1.op(utils_1.Op.MINUS, this.request.offset, node.offset));
    };
    __decorate([
        utils_1.defaultConstructor
    ], _UriSuggestionBuilder.prototype, "_UriSuggestionBuilder", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _UriSuggestionBuilder.prototype, "visitExportDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _UriSuggestionBuilder.prototype, "visitImportDirective", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _UriSuggestionBuilder.prototype, "visitSimpleStringLiteral", null);
    _UriSuggestionBuilder = __decorate([
        utils_1.DartClass
    ], _UriSuggestionBuilder);
    return _UriSuggestionBuilder;
}(any));
exports._UriSuggestionBuilder = _UriSuggestionBuilder;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=uri_contributor.js.map