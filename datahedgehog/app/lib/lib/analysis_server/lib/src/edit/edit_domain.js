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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/edit/edit_domain.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("@dart2ts.packages/analyzer/lib/error/error");
var EditDomainHandler = /** @class */ (function (_super) {
    __extends(EditDomainHandler, _super);
    function EditDomainHandler(server) {
        var _this = this;
        return _this;
    }
    EditDomainHandler_1 = EditDomainHandler;
    EditDomainHandler.prototype.EditDomainHandler = function (server) {
        _super.prototype.DartObject.call(this, server);
        this.searchEngine = server.searchEngine;
        this._newRefactoringManager();
    };
    EditDomainHandler.prototype.format = function (request) {
        var params = new bare.createInstance(any, null, request);
        var file = params.file;
        var unformattedSource;
        try {
            var source = server.resourceProvider.getFile(file).createSource();
            if (server.options.enableNewAnalysisDriver) {
                unformattedSource = utils_1.op(utils_1.Op.INDEX, server.fileContentOverlay, file);
            }
            else {
                unformattedSource = server.overlayState.getContents(source);
            }
            unformattedSource = (unformattedSource) || (source.contents.data);
        }
        catch (__error__) {
            {
                var e = __error__;
                return new bare.createInstance(any, null, request);
            }
        }
        var start = params.selectionOffset;
        var length = params.selectionLength;
        if (start == 0 && length == 0) {
            start = null;
            length = null;
        }
        var code = new bare.createInstance(any, null, unformattedSource, {
            uri: null, isCompilationUnit: true, selectionStart: start, selectionLength: length
        });
        var formatter = new bare.createInstance(any, null, {
            pageWidth: params.lineLength
        });
        var formattedResult;
        try {
            formattedResult = formatter.formatSource(code);
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
                return new bare.createInstance(any, null, request);
            }
        }
        var formattedSource = formattedResult.text;
        var edits = new core.DartList.literal();
        if (formattedSource != unformattedSource) {
            var edit = new bare.createInstance(any, null, 0, new core.DartString(unformattedSource).length, formattedSource);
            edits.add(edit);
        }
        var newStart = formattedResult.selectionStart;
        var newLength = formattedResult.selectionLength;
        if (newStart == null) {
            newStart = 0;
        }
        if (newLength == null) {
            newLength = 0;
        }
        return new bare.createInstance(any, null, edits, newStart, newLength).toResponse(request.id);
    };
    EditDomainHandler.prototype.getAssists = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, offset, length, changes, pluginFutures, requestParams, driver, result, unit, compilationUnitElement, dartAssistContext, processor, assists, _i, assists_1, assist, __error__1, _, responses, converter, pluginChanges, _a, responses_1, response, result_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        file = params.file;
                        offset = params.offset;
                        length = params.length;
                        changes = new core.DartList.literal();
                        requestParams = new bare.createInstance(any, null, file, offset, length);
                        driver = server.getAnalysisDriver(file);
                        if (utils_1.op(utils_1.Op.EQUALS, driver, null)) {
                            pluginFutures = new core.DartMap.literal([]);
                        }
                        else {
                            pluginFutures = server.pluginManager.broadcastRequest(requestParams, {
                                contextRoot: driver.contextRoot
                            });
                        }
                        return [4 /*yield*/, server.getAnalysisResult(file)];
                    case 1:
                        result = _b.sent();
                        if (!(result != null)) return [3 /*break*/, 5];
                        unit = result.unit;
                        compilationUnitElement = resolutionMap.elementDeclaredByCompilationUnit(unit);
                        dartAssistContext = new _DartAssistContextForValues(compilationUnitElement.source, offset, length, driver, new bare.createInstance(any, null, driver), unit);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        processor = new bare.createInstance(any, null, dartAssistContext);
                        return [4 /*yield*/, processor.compute()];
                    case 3:
                        assists = _b.sent();
                        for (_i = 0, assists_1 = assists; _i < assists_1.length; _i++) {
                            assist = assists_1[_i];
                            changes.add(assist.change);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        __error__1 = _b.sent();
                        {
                            _ = __error__1;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, waitForResponses(pluginFutures, {
                            requestParameters: requestParams
                        })];
                    case 6:
                        responses = _b.sent();
                        converter = new bare.createInstance(any, null);
                        pluginChanges = new core.DartList.literal();
                        for (_a = 0, responses_1 = responses; _a < responses_1.length; _a++) {
                            response = responses_1[_a];
                            result_1 = new bare.createInstance(any, "fromResponse", response);
                            pluginChanges.addAll(result_1.assists);
                        }
                        pluginChanges.sort(function (first, second) {
                            return first.priority.compareTo(second.priority);
                        });
                        changes.addAll(pluginChanges.map(converter.convertPrioritizedSourceChange));
                        server.sendResponse(new bare.createInstance(any, null, changes).toResponse(request.id));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    EditDomainHandler.prototype.getFixes = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, offset, errorFixesList, pluginFutures, requestParams, driver, result, unit, lineInfo, requestLine, _loop_1, _i, _a, error, responses, converter, _b, responses_2, response, result_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        file = params.file;
                        offset = params.offset;
                        errorFixesList = new core.DartList.literal();
                        requestParams = new bare.createInstance(any, null, file, offset);
                        driver = server.getAnalysisDriver(file);
                        if (utils_1.op(utils_1.Op.EQUALS, driver, null)) {
                            pluginFutures = new core.DartMap.literal([]);
                        }
                        else {
                            pluginFutures = server.pluginManager.broadcastRequest(requestParams, {
                                contextRoot: driver.contextRoot
                            });
                        }
                        return [4 /*yield*/, server.getAnalysisResult(file)];
                    case 1:
                        result = _c.sent();
                        if (!(result != null)) return [3 /*break*/, 5];
                        unit = result.unit;
                        lineInfo = result.lineInfo;
                        requestLine = lineInfo.getLocation(offset).lineNumber;
                        _loop_1 = function (error) {
                            var errorLine, context, fixes, serverError, errorFixes_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        errorLine = lineInfo.getLocation(error.offset).lineNumber;
                                        if (!(errorLine == requestLine)) return [3 /*break*/, 2];
                                        context = new _DartFixContextImpl(server.resourceProvider, result.driver, new bare.createInstance(any, null, driver), unit, error);
                                        return [4 /*yield*/, new bare.createInstance(any, null).internalComputeFixes(context)];
                                    case 1:
                                        fixes = _a.sent();
                                        if (fixes.isNotEmpty) {
                                            fixes.sort(Fix.SORT_BY_RELEVANCE);
                                            serverError = newAnalysisError_fromEngine(lineInfo, error);
                                            errorFixes_1 = new bare.createInstance(any, null, serverError);
                                            errorFixesList.add(errorFixes_1);
                                            fixes.forEach(function (fix) {
                                                errorFixes_1.fixes.add(fix.change);
                                            });
                                        }
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, _a = result.errors;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        error = _a[_i];
                        return [5 /*yield**/, _loop_1(error)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [4 /*yield*/, waitForResponses(pluginFutures, {
                            requestParameters: requestParams
                        })];
                    case 6:
                        responses = _c.sent();
                        converter = new bare.createInstance(any, null);
                        for (_b = 0, responses_2 = responses; _b < responses_2.length; _b++) {
                            response = responses_2[_b];
                            result_2 = new bare.createInstance(any, "fromResponse", response);
                            errorFixesList.addAll(result_2.fixes.map(converter.convertAnalysisErrorFixes));
                        }
                        server.sendResponse(new bare.createInstance(any, null, errorFixesList).toResponse(request.id));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    EditDomainHandler.prototype.getStatementCompletion = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, change, result, unit, unitElement, context, processor, completion, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        return [4 /*yield*/, server.getAnalysisResult(params.file)];
                    case 1:
                        result = _a.sent();
                        if (!(result != null)) return [3 /*break*/, 3];
                        unit = result.unit;
                        unitElement = resolutionMap.elementDeclaredByCompilationUnit(unit);
                        if (!(unitElement.context != null)) return [3 /*break*/, 3];
                        context = new bare.createInstance(any, null, params.file, result.lineInfo, params.offset, unit, unitElement, result.errors);
                        processor = new bare.createInstance(any, null, context);
                        return [4 /*yield*/, processor.compute()];
                    case 2:
                        completion = _a.sent();
                        change = completion.change;
                        _a.label = 3;
                    case 3:
                        if (utils_1.op(utils_1.Op.EQUALS, change, null)) {
                            change = new bare.createInstance(any, null, "", {
                                edits: new core.DartList.literal()
                            });
                        }
                        response = new bare.createInstance(any, null, change, false).toResponse(request.id);
                        server.sendResponse(response);
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    EditDomainHandler.prototype.handleRequest = function (request) {
        try {
            var requestName = request.method;
            if (requestName == EDIT_FORMAT) {
                return this.format(request);
            }
            else if (requestName == EDIT_GET_ASSISTS) {
                this.getAssists(request);
                return Response.DELAYED_RESPONSE;
            }
            else if (requestName == EDIT_GET_AVAILABLE_REFACTORINGS) {
                return this._getAvailableRefactorings(request);
            }
            else if (requestName == EDIT_GET_FIXES) {
                this.getFixes(request);
                return Response.DELAYED_RESPONSE;
            }
            else if (requestName == EDIT_GET_REFACTORING) {
                return this._getRefactoring(request);
            }
            else if (requestName == EDIT_ORGANIZE_DIRECTIVES) {
                this.organizeDirectives(request);
                return Response.DELAYED_RESPONSE;
            }
            else if (requestName == EDIT_SORT_MEMBERS) {
                this.sortMembers(request);
                return Response.DELAYED_RESPONSE;
            }
            else if (requestName == EDIT_GET_STATEMENT_COMPLETION) {
                this.getStatementCompletion(request);
                return Response.DELAYED_RESPONSE;
            }
        }
        catch (__error__) {
            if (_common_1.is(__error__, any)) {
                var exception = __error__;
                return exception.response;
            }
        }
        return null;
    };
    EditDomainHandler.prototype.organizeDirectives = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, fileStamp, code, unit, errors, result, compilationUnitElement, context, source, numScanParseErrors, sorter, edits, fileEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        file = params.file;
                        if (!lib3.AnalysisEngine.isDartFileName(file)) {
                            server.sendResponse(new bare.createInstance(any, null, request, file));
                            return [2 /*return*/];
                        }
                        if (!server.options.enableNewAnalysisDriver) return [3 /*break*/, 2];
                        return [4 /*yield*/, server.getAnalysisResult(file)];
                    case 1:
                        result = _a.sent();
                        if (utils_1.op(utils_1.Op.EQUALS, result, null)) {
                            server.sendResponse(new bare.createInstance(any, null, request, file));
                            return [2 /*return*/];
                        }
                        fileStamp = -1;
                        code = result.content;
                        unit = result.unit;
                        errors = result.errors;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, server.getResolvedCompilationUnit(file)];
                    case 3:
                        unit = _a.sent();
                        if (utils_1.op(utils_1.Op.EQUALS, unit, null)) {
                            server.sendResponse(new bare.createInstance(any, null, request, file));
                            return [2 /*return*/];
                        }
                        compilationUnitElement = resolutionMap.elementDeclaredByCompilationUnit(unit);
                        context = compilationUnitElement.context;
                        source = compilationUnitElement.source;
                        errors = context.computeErrors(source);
                        fileStamp = context.getModificationStamp(source);
                        code = context.getContents(source).data;
                        _a.label = 4;
                    case 4:
                        numScanParseErrors = EditDomainHandler_1._getNumberOfScanParseErrors(errors);
                        if (numScanParseErrors != 0) {
                            server.sendResponse(new bare.createInstance(any, null, request, "File has " + numScanParseErrors + " scan/parse errors."));
                            return [2 /*return*/];
                        }
                        sorter = new bare.createInstance(any, null, code, unit, errors);
                        edits = sorter.organize();
                        fileEdit = new bare.createInstance(any, null, file, fileStamp, {
                            edits: edits
                        });
                        server.sendResponse(new bare.createInstance(any, null, fileEdit).toResponse(request.id));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    EditDomainHandler.prototype.sortMembers = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, fileStamp, code, unit, errors, driver, result, contextSource, context, source, e, numScanParseErrors, sorter, edits, fileEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        file = params.file;
                        if (!lib3.AnalysisEngine.isDartFileName(file)) {
                            server.sendResponse(new bare.createInstance(any, null, request));
                            return [2 /*return*/];
                        }
                        if (!server.options.enableNewAnalysisDriver) return [3 /*break*/, 2];
                        driver = server.getAnalysisDriver(file);
                        return [4 /*yield*/, (function (_19_) { return (!!_19_) ? _19_.parseFile(file) : null; })(driver)];
                    case 1:
                        result = _a.sent();
                        if (utils_1.op(utils_1.Op.EQUALS, result, null)) {
                            server.sendResponse(new bare.createInstance(any, null, request, file));
                            return [2 /*return*/];
                        }
                        fileStamp = -1;
                        code = result.content;
                        unit = result.unit;
                        errors = result.errors;
                        return [3 /*break*/, 3];
                    case 2:
                        contextSource = server.getContextSourcePair(file);
                        context = contextSource.context;
                        source = contextSource.source;
                        if (utils_1.op(utils_1.Op.EQUALS, context, null) || utils_1.op(utils_1.Op.EQUALS, source, null)) {
                            server.sendResponse(new bare.createInstance(any, null, request));
                            return [2 /*return*/];
                        }
                        fileStamp = context.getModificationStamp(source);
                        code = context.getContents(source).data;
                        try {
                            unit = context.parseCompilationUnit(source);
                        }
                        catch (__error__) {
                            {
                                e = __error__;
                                server.sendResponse(new bare.createInstance(any, null, request));
                                return [2 /*return*/];
                            }
                        }
                        errors = context.getErrors(source).errors;
                        _a.label = 3;
                    case 3:
                        numScanParseErrors = EditDomainHandler_1._getNumberOfScanParseErrors(errors);
                        if (numScanParseErrors != 0) {
                            server.sendResponse(new bare.createInstance(any, null, request, numScanParseErrors));
                            return [2 /*return*/];
                        }
                        sorter = new bare.createInstance(any, null, code, unit);
                        edits = sorter.sort();
                        fileEdit = new bare.createInstance(any, null, file, fileStamp, {
                            edits: edits
                        });
                        server.sendResponse(new bare.createInstance(any, null, fileEdit).toResponse(request.id));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    EditDomainHandler.prototype._getAvailableRefactorings = function (request) {
        this._getAvailableRefactoringsImpl(request);
        return Response.DELAYED_RESPONSE;
    };
    EditDomainHandler.prototype._getAvailableRefactoringsImpl = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, file, offset, length, kinds, element, refactoring, status_1, renameRefactoring, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, request);
                        file = params.file;
                        offset = params.offset;
                        length = params.length;
                        kinds = new core.DartList.literal();
                        if (length != 0) {
                            kinds.add(RefactoringKind.EXTRACT_LOCAL_VARIABLE);
                            kinds.add(RefactoringKind.EXTRACT_METHOD);
                        }
                        return [4 /*yield*/, server.getElementAtOffset(file, offset)];
                    case 1:
                        element = _a.sent();
                        if (!(element != null)) return [3 /*break*/, 4];
                        if (!_common_1.is(element, any)) return [3 /*break*/, 3];
                        refactoring = new bare.createInstance(any, null, this.searchEngine, server.getAstProvider(file), element);
                        return [4 /*yield*/, refactoring.checkInitialConditions()];
                    case 2:
                        status_1 = _a.sent();
                        if (!status_1.hasFatalError) {
                            kinds.add(RefactoringKind.CONVERT_METHOD_TO_GETTER);
                        }
                        _a.label = 3;
                    case 3:
                        {
                            renameRefactoring = new bare.createInstance(any, null, this.searchEngine, server.getAstProvider(file), element);
                            if (renameRefactoring != null) {
                                kinds.add(RefactoringKind.RENAME);
                            }
                        }
                        _a.label = 4;
                    case 4:
                        result = new bare.createInstance(any, null, kinds);
                        server.sendResponse(result.toResponse(request.id));
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    EditDomainHandler.prototype._getRefactoring = function (request) {
        if (this.refactoringManager.hasPendingRequest) {
            this.refactoringManager.cancel();
            this._newRefactoringManager();
        }
        this.refactoringManager.getRefactoring(request);
        return Response.DELAYED_RESPONSE;
    };
    EditDomainHandler.prototype._newRefactoringManager = function () {
        this.refactoringManager = new _RefactoringManager(server, this.searchEngine);
    };
    EditDomainHandler._getNumberOfScanParseErrors = function (errors) {
        var numScanParseErrors = 0;
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            if (_common_1.is(error.errorCode, any) || _common_1.is(error.errorCode, any)) {
                numScanParseErrors++;
            }
        }
        return numScanParseErrors;
    };
    var EditDomainHandler_1;
    __decorate([
        utils_1.defaultConstructor
    ], EditDomainHandler.prototype, "EditDomainHandler", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], EditDomainHandler.prototype, "handleRequest", null);
    EditDomainHandler = EditDomainHandler_1 = __decorate([
        utils_1.DartClass
    ], EditDomainHandler);
    return EditDomainHandler;
}(any));
exports.EditDomainHandler = EditDomainHandler;
var _DartAssistContextForValues = /** @class */ (function () {
    function _DartAssistContextForValues(source, selectionOffset, selectionLength, analysisDriver, astProvider, unit) {
    }
    _DartAssistContextForValues.prototype._DartAssistContextForValues = function (source, selectionOffset, selectionLength, analysisDriver, astProvider, unit) {
        this.source = source;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
        this.analysisDriver = analysisDriver;
        this.astProvider = astProvider;
        this.unit = unit;
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextForValues.prototype, "source", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextForValues.prototype, "selectionOffset", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextForValues.prototype, "selectionLength", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextForValues.prototype, "analysisDriver", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextForValues.prototype, "astProvider", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartAssistContextForValues.prototype, "unit", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], _DartAssistContextForValues.prototype, "_DartAssistContextForValues", null);
    _DartAssistContextForValues = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], _DartAssistContextForValues);
    return _DartAssistContextForValues;
}());
exports._DartAssistContextForValues = _DartAssistContextForValues;
var _DartFixContextImpl = /** @class */ (function () {
    function _DartFixContextImpl(resourceProvider, analysisDriver, astProvider, unit, error) {
    }
    _DartFixContextImpl.prototype._DartFixContextImpl = function (resourceProvider, analysisDriver, astProvider, unit, error) {
        this.resourceProvider = resourceProvider;
        this.analysisDriver = analysisDriver;
        this.astProvider = astProvider;
        this.unit = unit;
        this.error = error;
    };
    Object.defineProperty(_DartFixContextImpl.prototype, "getTopLevelDeclarations", {
        get: function () {
            return this.analysisDriver.getTopLevelNameDeclarations;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartFixContextImpl.prototype, "resourceProvider", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartFixContextImpl.prototype, "analysisDriver", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartFixContextImpl.prototype, "astProvider", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartFixContextImpl.prototype, "unit", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartFixContextImpl.prototype, "error", void 0);
    __decorate([
        utils_1.defaultConstructor
    ], _DartFixContextImpl.prototype, "_DartFixContextImpl", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DartFixContextImpl.prototype, "getTopLevelDeclarations", null);
    _DartFixContextImpl = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], _DartFixContextImpl);
    return _DartFixContextImpl;
}());
exports._DartFixContextImpl = _DartFixContextImpl;
var _RefactoringManager = /** @class */ (function () {
    function _RefactoringManager(server, searchEngine) {
    }
    _RefactoringManager_1 = _RefactoringManager;
    Object.defineProperty(_RefactoringManager, "EMPTY_PROBLEM_LIST", {
        get: function () {
            if (this.__$EMPTY_PROBLEM_LIST === undefined) {
                this.__$EMPTY_PROBLEM_LIST = new core.DartList.literal();
            }
            return this.__$EMPTY_PROBLEM_LIST;
        },
        enumerable: true,
        configurable: true
    });
    _RefactoringManager.prototype._RefactoringManager = function (server, searchEngine) {
        this.server = server;
        this.searchEngine = searchEngine;
        this._reset();
    };
    Object.defineProperty(_RefactoringManager.prototype, "hasPendingRequest", {
        get: function () {
            return this.request != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_RefactoringManager.prototype, "_hasFatalError", {
        get: function () {
            return this.initStatus.hasFatalError || this.optionsStatus.hasFatalError || this.finalStatus.hasFatalError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_RefactoringManager.prototype, "_requiresOptions", {
        get: function () {
            return _common_1.is(this.refactoring, any) || _common_1.is(this.refactoring, any) || _common_1.is(this.refactoring, any) || _common_1.is(this.refactoring, any) || _common_1.is(this.refactoring, any);
        },
        enumerable: true,
        configurable: true
    });
    _RefactoringManager.prototype.cancel = function () {
        if (this.request != null) {
            this.server.sendResponse(new bare.createInstance(any, null, this.request));
            this.request = null;
        }
        this._reset();
    };
    _RefactoringManager.prototype.getRefactoring = function (_request) {
        var _this = this;
        this.request = _request;
        this.result = new bare.createInstance(any, null, _RefactoringManager_1.EMPTY_PROBLEM_LIST, _RefactoringManager_1.EMPTY_PROBLEM_LIST, _RefactoringManager_1.EMPTY_PROBLEM_LIST);
        var params = new bare.createInstance(any, null, _request);
        async.runZoned(function () { return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._init(params.kind, params.file, params.offset, params.length)];
                    case 1:
                        _c.sent();
                        if (this.initStatus.hasFatalError) {
                            this.feedback = null;
                            this._sendResultResponse();
                            return [2 /*return*/];
                        }
                        if (this._requiresOptions) {
                            if (utils_1.op(utils_1.Op.EQUALS, params.options, null)) {
                                this.optionsStatus = new bare.createInstance(any, null);
                                this._sendResultResponse();
                                return [2 /*return*/];
                            }
                            this.optionsStatus = this._setOptions(params);
                            if (this._hasFatalError) {
                                this._sendResultResponse();
                                return [2 /*return*/];
                            }
                        }
                        if (params.validateOnly) {
                            this.finalStatus = new bare.createInstance(any, null);
                            this._sendResultResponse();
                            return [2 /*return*/];
                        }
                        if (properties.test_simulateRefactoringException_final) {
                            throw 'A simulated refactoring exception - final.';
                        }
                        _a = this;
                        return [4 /*yield*/, this.refactoring.checkFinalConditions()];
                    case 2:
                        _a.finalStatus = _c.sent();
                        this._checkForReset_afterFinalConditions();
                        if (this._hasFatalError) {
                            this._sendResultResponse();
                            return [2 /*return*/];
                        }
                        if (properties.test_simulateRefactoringException_change) {
                            throw 'A simulated refactoring exception - change.';
                        }
                        _b = this.result;
                        return [4 /*yield*/, this.refactoring.createChange()];
                    case 3:
                        _b.change = _c.sent();
                        this.result.potentialEdits = nullIfEmpty(this.refactoring.potentialEditIds);
                        this._checkForReset_afterCreateChange();
                        this._sendResultResponse();
                        return [2 /*return*/];
                }
            });
        }); })()); }, {
            onError: function (exception, stackTrace) {
                if (_common_1.is(exception, _ResetError)) {
                    _this.cancel();
                }
                else {
                    _this.server.instrumentationService.logException(exception, stackTrace);
                    _this.server.sendResponse(new bare.createInstance(any, null, _request, exception, stackTrace));
                }
                _this._reset();
            }
        });
    };
    _RefactoringManager.prototype._analyzeForRefactoring = function (file, kind) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var pair, context, source;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.server.options.enableNewAnalysisDriver) {
                            return [2 /*return*/];
                        }
                        if (!(utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.EXTRACT_LOCAL_VARIABLE) || utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.INLINE_LOCAL_VARIABLE))) return [3 /*break*/, 2];
                        pair = this.server.getContextSourcePair(file);
                        context = pair.context;
                        source = pair.source;
                        if (!(context != null && source != null)) return [3 /*break*/, 2];
                        if (!utils_1.op(utils_1.Op.EQUALS, context.computeResult(source, SOURCE_KIND), SourceKind.LIBRARY)) return [3 /*break*/, 2];
                        return [4 /*yield*/, context.computeResolvedCompilationUnitAsync(source, source)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.server.onAnalysisComplete];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    _RefactoringManager.prototype._checkForReset_afterCreateChange = function () {
        if (properties.test_simulateRefactoringReset_afterCreateChange) {
            this._reset();
        }
        if (utils_1.op(utils_1.Op.EQUALS, this.refactoring, null)) {
            throw new _ResetError();
        }
    };
    _RefactoringManager.prototype._checkForReset_afterFinalConditions = function () {
        if (properties.test_simulateRefactoringReset_afterFinalConditions) {
            this._reset();
        }
        if (utils_1.op(utils_1.Op.EQUALS, this.refactoring, null)) {
            throw new _ResetError();
        }
    };
    _RefactoringManager.prototype._checkForReset_afterInitialConditions = function () {
        if (properties.test_simulateRefactoringReset_afterInitialConditions) {
            this._reset();
        }
        if (utils_1.op(utils_1.Op.EQUALS, this.refactoring, null)) {
            throw new _ResetError();
        }
    };
    _RefactoringManager.prototype._init = function (kind, file, offset, length) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var element, element, unit, unit, unit, unit, contextSource, context, source, node, element, constructor, _a, refactoring, feedback, refactoring, feedback, refactoring, refactoring, refactoring, feedback;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._analyzeForRefactoring(file, kind)];
                    case 1:
                        _b.sent();
                        if (utils_1.op(utils_1.Op.EQUALS, this.kind, kind) && this.file == file && this.offset == offset && this.length == length) {
                            return [2 /*return*/];
                        }
                        this._reset();
                        this.kind = kind;
                        this.file = file;
                        this.offset = offset;
                        this.length = length;
                        if (properties.test_simulateRefactoringException_init) {
                            throw 'A simulated refactoring exception - init.';
                        }
                        if (!utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.CONVERT_GETTER_TO_METHOD)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.server.getElementAtOffset(file, offset)];
                    case 2:
                        element = _b.sent();
                        if (element != null) {
                            if (_common_1.is(element, any)) {
                                this._resetOnAnalysisStarted();
                                this.refactoring = new bare.createInstance(any, null, this.searchEngine, this.server.getAstProvider(file), element);
                            }
                        }
                        _b.label = 3;
                    case 3:
                        if (!utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.CONVERT_METHOD_TO_GETTER)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.server.getElementAtOffset(file, offset)];
                    case 4:
                        element = _b.sent();
                        if (element != null) {
                            if (_common_1.is(element, any)) {
                                this._resetOnAnalysisStarted();
                                this.refactoring = new bare.createInstance(any, null, this.searchEngine, this.server.getAstProvider(file), element);
                            }
                        }
                        _b.label = 5;
                    case 5:
                        if (!utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.EXTRACT_LOCAL_VARIABLE)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.server.getResolvedCompilationUnit(file)];
                    case 6:
                        unit = _b.sent();
                        if (unit != null) {
                            this._resetOnFileResolutionChanged(file);
                            this.refactoring = new bare.createInstance(any, null, unit, offset, length);
                            this.feedback = new bare.createInstance(any, null, new core.DartList.literal(), new core.DartList.literal(), new core.DartList.literal(), {
                                coveringExpressionOffsets: new core.DartList.literal(), coveringExpressionLengths: new core.DartList.literal()
                            });
                        }
                        _b.label = 7;
                    case 7:
                        if (!utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.EXTRACT_METHOD)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.server.getResolvedCompilationUnit(file)];
                    case 8:
                        unit = _b.sent();
                        if (unit != null) {
                            this._resetOnAnalysisStarted();
                            this.refactoring = new bare.createInstance(any, null, this.searchEngine, unit, offset, length);
                            this.feedback = new bare.createInstance(any, null, offset, length, '', new core.DartList.literal(), false, new core.DartList.literal(), new core.DartList.literal(), new core.DartList.literal());
                        }
                        _b.label = 9;
                    case 9:
                        if (!utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.INLINE_LOCAL_VARIABLE)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.server.getResolvedCompilationUnit(file)];
                    case 10:
                        unit = _b.sent();
                        if (unit != null) {
                            this._resetOnFileResolutionChanged(file);
                            this.refactoring = new bare.createInstance(any, null, this.searchEngine, this.server.getAstProvider(file), unit, offset);
                        }
                        _b.label = 11;
                    case 11:
                        if (!utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.INLINE_METHOD)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.server.getResolvedCompilationUnit(file)];
                    case 12:
                        unit = _b.sent();
                        if (unit != null) {
                            this._resetOnAnalysisStarted();
                            this.refactoring = new bare.createInstance(any, null, this.searchEngine, this.server.getAstProvider(file), unit, offset);
                        }
                        _b.label = 13;
                    case 13:
                        if (utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.MOVE_FILE)) {
                            this._resetOnAnalysisStarted();
                            contextSource = this.server.getContextSourcePair(file);
                            context = contextSource.context;
                            source = contextSource.source;
                            this.refactoring = new bare.createInstance(any, null, this.server.resourceProvider, this.searchEngine, context, source, file);
                        }
                        if (!utils_1.op(utils_1.Op.EQUALS, kind, RefactoringKind.RENAME)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.server.getNodeAtOffset(file, offset)];
                    case 14:
                        node = _b.sent();
                        element = this.server.getElementOfNode(node);
                        if (node != null && element != null) {
                            if (_common_1.is(element, any)) {
                                element = element.field;
                            }
                            if (_common_1.is(node.parent, any) && _common_1.is(node.parent.parent, any)) {
                                constructor = node.parent.parent;
                                node = constructor;
                                element = constructor.staticElement;
                            }
                            this._resetOnAnalysisStarted();
                            this.refactoring = new bare.createInstance(any, null, this.searchEngine, this.server.getAstProvider(file), element);
                            this.feedback = new bare.createInstance(any, null, node.offset, node.length, 'kind', 'oldName');
                        }
                        _b.label = 15;
                    case 15:
                        if (utils_1.op(utils_1.Op.EQUALS, this.refactoring, null)) {
                            this.initStatus = new bare.createInstance(any, null, 'Unable to create a refactoring');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.refactoring.checkInitialConditions()];
                    case 16:
                        _a.initStatus = _b.sent();
                        this._checkForReset_afterInitialConditions();
                        if (_common_1.is(this.refactoring, any)) {
                            refactoring = this.refactoring;
                            feedback = this.feedback;
                            feedback.names = refactoring.names;
                            feedback.offsets = refactoring.offsets;
                            feedback.lengths = refactoring.lengths;
                            feedback.coveringExpressionOffsets = refactoring.coveringExpressionOffsets;
                            feedback.coveringExpressionLengths = refactoring.coveringExpressionLengths;
                        }
                        if (_common_1.is(this.refactoring, any)) {
                            refactoring = this.refactoring;
                            feedback = this.feedback;
                            feedback.canCreateGetter = refactoring.canCreateGetter;
                            feedback.returnType = refactoring.returnType;
                            feedback.names = refactoring.names;
                            feedback.parameters = refactoring.parameters;
                            feedback.offsets = refactoring.offsets;
                            feedback.lengths = refactoring.lengths;
                        }
                        if (_common_1.is(this.refactoring, any)) {
                            refactoring = this.refactoring;
                            if (!this.initStatus.hasFatalError) {
                                this.feedback = new bare.createInstance(any, null, refactoring.variableName, refactoring.referenceCount);
                            }
                        }
                        if (_common_1.is(this.refactoring, any)) {
                            refactoring = this.refactoring;
                            if (!this.initStatus.hasFatalError) {
                                this.feedback = new bare.createInstance(any, null, refactoring.methodName, refactoring.isDeclaration, {
                                    className: refactoring.className
                                });
                            }
                        }
                        if (_common_1.is(this.refactoring, any)) {
                            refactoring = this.refactoring;
                            feedback = this.feedback;
                            feedback.elementKindName = refactoring.elementKindName;
                            feedback.oldName = refactoring.oldName;
                        }
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    _RefactoringManager.prototype._reset = function () {
        properties.test_resetCount++;
        this.kind = null;
        this.offset = null;
        this.length = null;
        this.refactoring = null;
        this.feedback = null;
        this.initStatus = new bare.createInstance(any, null);
        this.optionsStatus = new bare.createInstance(any, null);
        this.finalStatus = new bare.createInstance(any, null);
        (function (_20_) { return (!!_20_) ? _20_.cancel() : null; })(this.subscriptionToReset);
        this.subscriptionToReset = null;
    };
    _RefactoringManager.prototype._resetOnAnalysisStarted = function () {
        var _this = this;
        (function (_21_) { return (!!_21_) ? _21_.cancel() : null; })(this.subscriptionToReset);
        this.subscriptionToReset = this.server.onAnalysisStarted.listen(function (_) {
            return _this._reset();
        });
    };
    _RefactoringManager.prototype._resetOnFileResolutionChanged = function (file) {
        var _this = this;
        if (this.server.options.enableNewAnalysisDriver) {
            return;
        }
        (function (_22_) { return (!!_22_) ? _22_.cancel() : null; })(this.subscriptionToReset);
        this.subscriptionToReset = (function (_23_) { return (!!_23_) ? _23_.listen(function (event) {
            var targetSource = event.target.source;
            if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.fullName : null; })(targetSource), file)) {
                _this._reset();
            }
        }) : null; })((function (_24_) { return (!!_24_) ? _24_.onResultChanged(RESOLVED_UNIT) : null; })(this.server.getAnalysisContext(file)));
    };
    _RefactoringManager.prototype._sendResultResponse = function () {
        if (utils_1.op(utils_1.Op.EQUALS, this.request, null)) {
            return;
        }
        this.result.feedback = this.feedback;
        this.result.initialProblems = this.initStatus.problems;
        this.result.optionsProblems = this.optionsStatus.problems;
        this.result.finalProblems = this.finalStatus.problems;
        this.server.sendResponse(this.result.toResponse(this.request.id));
        this.request = null;
        this.result = null;
    };
    _RefactoringManager.prototype._setOptions = function (params) {
        if (_common_1.is(this.refactoring, any)) {
            var extractRefactoring = this.refactoring;
            var extractOptions = params.options;
            extractRefactoring.name = extractOptions.name;
            extractRefactoring.extractAll = extractOptions.extractAll;
            return extractRefactoring.checkName();
        }
        if (_common_1.is(this.refactoring, any)) {
            var extractRefactoring = this.refactoring;
            var extractOptions = params.options;
            extractRefactoring.createGetter = extractOptions.createGetter;
            extractRefactoring.extractAll = extractOptions.extractAll;
            extractRefactoring.name = extractOptions.name;
            if (extractOptions.parameters != null) {
                extractRefactoring.parameters = extractOptions.parameters;
            }
            extractRefactoring.returnType = extractOptions.returnType;
            return extractRefactoring.checkName();
        }
        if (_common_1.is(this.refactoring, any)) {
            var inlineRefactoring = this.refactoring;
            var inlineOptions = params.options;
            inlineRefactoring.deleteSource = inlineOptions.deleteSource;
            inlineRefactoring.inlineAll = inlineOptions.inlineAll;
            return new bare.createInstance(any, null);
        }
        if (_common_1.is(this.refactoring, any)) {
            var moveRefactoring = this.refactoring;
            var moveOptions = params.options;
            moveRefactoring.newFile = moveOptions.newFile;
            return new bare.createInstance(any, null);
        }
        if (_common_1.is(this.refactoring, any)) {
            var renameRefactoring = this.refactoring;
            var renameOptions = params.options;
            renameRefactoring.newName = renameOptions.newName;
            return renameRefactoring.checkNewName();
        }
        return new bare.createInstance(any, null);
    };
    var _RefactoringManager_1;
    __decorate([
        utils_1.defaultConstructor
    ], _RefactoringManager.prototype, "_RefactoringManager", null);
    _RefactoringManager = _RefactoringManager_1 = __decorate([
        utils_1.DartClass
    ], _RefactoringManager);
    return _RefactoringManager;
}());
exports._RefactoringManager = _RefactoringManager;
var _ResetError = /** @class */ (function () {
    function _ResetError() {
    }
    _ResetError.prototype._ResetError = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], _ResetError.prototype, "_ResetError", null);
    _ResetError = __decorate([
        utils_1.DartClass
    ], _ResetError);
    return _ResetError;
}());
exports._ResetError = _ResetError;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "test_resetCount", {
        get: function () {
            if (this.__$test_resetCount === undefined) {
                this.__$test_resetCount = 0;
            }
            return this.__$test_resetCount;
        },
        set: function (__$value) {
            this.__$test_resetCount = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "test_simulateRefactoringException_change", {
        get: function () {
            if (this.__$test_simulateRefactoringException_change === undefined) {
                this.__$test_simulateRefactoringException_change = false;
            }
            return this.__$test_simulateRefactoringException_change;
        },
        set: function (__$value) {
            this.__$test_simulateRefactoringException_change = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "test_simulateRefactoringException_final", {
        get: function () {
            if (this.__$test_simulateRefactoringException_final === undefined) {
                this.__$test_simulateRefactoringException_final = false;
            }
            return this.__$test_simulateRefactoringException_final;
        },
        set: function (__$value) {
            this.__$test_simulateRefactoringException_final = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "test_simulateRefactoringException_init", {
        get: function () {
            if (this.__$test_simulateRefactoringException_init === undefined) {
                this.__$test_simulateRefactoringException_init = false;
            }
            return this.__$test_simulateRefactoringException_init;
        },
        set: function (__$value) {
            this.__$test_simulateRefactoringException_init = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "test_simulateRefactoringReset_afterCreateChange", {
        get: function () {
            if (this.__$test_simulateRefactoringReset_afterCreateChange === undefined) {
                this.__$test_simulateRefactoringReset_afterCreateChange = false;
            }
            return this.__$test_simulateRefactoringReset_afterCreateChange;
        },
        set: function (__$value) {
            this.__$test_simulateRefactoringReset_afterCreateChange = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "test_simulateRefactoringReset_afterFinalConditions", {
        get: function () {
            if (this.__$test_simulateRefactoringReset_afterFinalConditions === undefined) {
                this.__$test_simulateRefactoringReset_afterFinalConditions = false;
            }
            return this.__$test_simulateRefactoringReset_afterFinalConditions;
        },
        set: function (__$value) {
            this.__$test_simulateRefactoringReset_afterFinalConditions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "test_simulateRefactoringReset_afterInitialConditions", {
        get: function () {
            if (this.__$test_simulateRefactoringReset_afterInitialConditions === undefined) {
                this.__$test_simulateRefactoringReset_afterInitialConditions = false;
            }
            return this.__$test_simulateRefactoringReset_afterInitialConditions;
        },
        set: function (__$value) {
            this.__$test_simulateRefactoringReset_afterInitialConditions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=edit_domain.js.map