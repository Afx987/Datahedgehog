"use strict";
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
var utils_1 = require("@dart2ts/dart/utils");
var async = require("@dart2ts/dart/async");
var lib3 = require("./integration_tests");
var lib4 = require("./protocol_matchers");
var IntegrationTestMixin = /** @class */ (function () {
    function IntegrationTestMixin() {
    }
    Object.defineProperty(IntegrationTestMixin.prototype, "server", {
        get: function () { throw 'abstract'; },
        enumerable: true,
        configurable: true
    });
    IntegrationTestMixin.prototype.sendServerGetVersion = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.send("server.getVersion", null)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendServerShutdown = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.send("server.shutdown", null)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendServerSetSubscriptions = function (subscriptions) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, subscriptions).toJson();
                        return [4 /*yield*/, this.server.send("server.setSubscriptions", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisGetErrors = function (file) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file).toJson();
                        return [4 /*yield*/, this.server.send("analysis.getErrors", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisGetHover = function (file, offset) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset).toJson();
                        return [4 /*yield*/, this.server.send("analysis.getHover", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisGetReachableSources = function (file) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file).toJson();
                        return [4 /*yield*/, this.server.send("analysis.getReachableSources", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisGetLibraryDependencies = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.send("analysis.getLibraryDependencies", null)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisGetNavigation = function (file, offset, length) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset, length).toJson();
                        return [4 /*yield*/, this.server.send("analysis.getNavigation", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisReanalyze = function (_namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var roots, params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        roots = Object.assign({}, _namedArguments).roots;
                        params = new bare.createInstance(any, null, {
                            roots: roots
                        }).toJson();
                        return [4 /*yield*/, this.server.send("analysis.reanalyze", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisSetAnalysisRoots = function (included, excluded, _namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var packageRoots, params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packageRoots = Object.assign({}, _namedArguments).packageRoots;
                        params = new bare.createInstance(any, null, included, excluded, {
                            packageRoots: packageRoots
                        }).toJson();
                        return [4 /*yield*/, this.server.send("analysis.setAnalysisRoots", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisSetGeneralSubscriptions = function (subscriptions) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, subscriptions).toJson();
                        return [4 /*yield*/, this.server.send("analysis.setGeneralSubscriptions", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisSetPriorityFiles = function (files) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, files).toJson();
                        return [4 /*yield*/, this.server.send("analysis.setPriorityFiles", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisSetSubscriptions = function (subscriptions) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, subscriptions).toJson();
                        return [4 /*yield*/, this.server.send("analysis.setSubscriptions", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisUpdateContent = function (files) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, files).toJson();
                        return [4 /*yield*/, this.server.send("analysis.updateContent", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendAnalysisUpdateOptions = function (options) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, options).toJson();
                        return [4 /*yield*/, this.server.send("analysis.updateOptions", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendCompletionGetSuggestions = function (file, offset) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset).toJson();
                        return [4 /*yield*/, this.server.send("completion.getSuggestions", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendSearchFindElementReferences = function (file, offset, includePotential) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset, includePotential).toJson();
                        return [4 /*yield*/, this.server.send("search.findElementReferences", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendSearchFindMemberDeclarations = function (name) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, name).toJson();
                        return [4 /*yield*/, this.server.send("search.findMemberDeclarations", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendSearchFindMemberReferences = function (name) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, name).toJson();
                        return [4 /*yield*/, this.server.send("search.findMemberReferences", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendSearchFindTopLevelDeclarations = function (pattern) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, pattern).toJson();
                        return [4 /*yield*/, this.server.send("search.findTopLevelDeclarations", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendSearchGetTypeHierarchy = function (file, offset, _namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var superOnly, params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        superOnly = Object.assign({}, _namedArguments).superOnly;
                        params = new bare.createInstance(any, null, file, offset, {
                            superOnly: superOnly
                        }).toJson();
                        return [4 /*yield*/, this.server.send("search.getTypeHierarchy", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditFormat = function (file, selectionOffset, selectionLength, _namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var lineLength, params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineLength = Object.assign({}, _namedArguments).lineLength;
                        params = new bare.createInstance(any, null, file, selectionOffset, selectionLength, {
                            lineLength: lineLength
                        }).toJson();
                        return [4 /*yield*/, this.server.send("edit.format", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditGetAssists = function (file, offset, length) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset, length).toJson();
                        return [4 /*yield*/, this.server.send("edit.getAssists", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditGetAvailableRefactorings = function (file, offset, length) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset, length).toJson();
                        return [4 /*yield*/, this.server.send("edit.getAvailableRefactorings", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditGetFixes = function (file, offset) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset).toJson();
                        return [4 /*yield*/, this.server.send("edit.getFixes", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditGetRefactoring = function (kind, file, offset, length, validateOnly, _namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var options, params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = Object.assign({}, _namedArguments).options;
                        params = new bare.createInstance(any, null, kind, file, offset, length, validateOnly, {
                            options: options
                        }).toJson();
                        return [4 /*yield*/, this.server.send("edit.getRefactoring", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, kind);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditGetStatementCompletion = function (file, offset) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file, offset).toJson();
                        return [4 /*yield*/, this.server.send("edit.getStatementCompletion", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditSortMembers = function (file) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file).toJson();
                        return [4 /*yield*/, this.server.send("edit.sortMembers", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendEditOrganizeDirectives = function (file) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, file).toJson();
                        return [4 /*yield*/, this.server.send("edit.organizeDirectives", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendExecutionCreateContext = function (contextRoot) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, contextRoot).toJson();
                        return [4 /*yield*/, this.server.send("execution.createContext", params)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendExecutionDeleteContext = function (id) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, id).toJson();
                        return [4 /*yield*/, this.server.send("execution.deleteContext", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendExecutionMapUri = function (id, _namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, file, uri, params, result, decoder;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Object.assign({}, _namedArguments), file = _a.file, uri = _a.uri;
                        params = new bare.createInstance(any, null, id, {
                            file: file, uri: uri
                        }).toJson();
                        return [4 /*yield*/, this.server.send("execution.mapUri", params)];
                    case 1:
                        result = _b.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendExecutionSetSubscriptions = function (subscriptions) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new bare.createInstance(any, null, subscriptions).toJson();
                        return [4 /*yield*/, this.server.send("execution.setSubscriptions", params)];
                    case 1:
                        result = _a.sent();
                        lib3.outOfTestExpect(result, isNull);
                        return [2 /*return*/, null];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendDiagnosticGetDiagnostics = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.send("diagnostic.getDiagnostics", null)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.sendDiagnosticGetServerPort = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var result, decoder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.send("diagnostic.getServerPort", null)];
                    case 1:
                        result = _a.sent();
                        decoder = new bare.createInstance(any, null, null);
                        return [2 /*return*/, new bare.createInstance(any, null, decoder, 'result', result)];
                }
            });
        }); })());
    };
    IntegrationTestMixin.prototype.initializeInttestMixin = function () {
        this._onServerConnected = new async.DartStreamController({
            sync: true
        });
        this.onServerConnected = this._onServerConnected.stream.asBroadcastStream();
        this._onServerError = new async.DartStreamController({
            sync: true
        });
        this.onServerError = this._onServerError.stream.asBroadcastStream();
        this._onServerStatus = new async.DartStreamController({
            sync: true
        });
        this.onServerStatus = this._onServerStatus.stream.asBroadcastStream();
        this._onAnalysisAnalyzedFiles = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisAnalyzedFiles = this._onAnalysisAnalyzedFiles.stream.asBroadcastStream();
        this._onAnalysisErrors = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisErrors = this._onAnalysisErrors.stream.asBroadcastStream();
        this._onAnalysisFlushResults = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisFlushResults = this._onAnalysisFlushResults.stream.asBroadcastStream();
        this._onAnalysisFolding = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisFolding = this._onAnalysisFolding.stream.asBroadcastStream();
        this._onAnalysisHighlights = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisHighlights = this._onAnalysisHighlights.stream.asBroadcastStream();
        this._onAnalysisImplemented = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisImplemented = this._onAnalysisImplemented.stream.asBroadcastStream();
        this._onAnalysisInvalidate = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisInvalidate = this._onAnalysisInvalidate.stream.asBroadcastStream();
        this._onAnalysisNavigation = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisNavigation = this._onAnalysisNavigation.stream.asBroadcastStream();
        this._onAnalysisOccurrences = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisOccurrences = this._onAnalysisOccurrences.stream.asBroadcastStream();
        this._onAnalysisOutline = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisOutline = this._onAnalysisOutline.stream.asBroadcastStream();
        this._onAnalysisOverrides = new async.DartStreamController({
            sync: true
        });
        this.onAnalysisOverrides = this._onAnalysisOverrides.stream.asBroadcastStream();
        this._onCompletionResults = new async.DartStreamController({
            sync: true
        });
        this.onCompletionResults = this._onCompletionResults.stream.asBroadcastStream();
        this._onSearchResults = new async.DartStreamController({
            sync: true
        });
        this.onSearchResults = this._onSearchResults.stream.asBroadcastStream();
        this._onExecutionLaunchData = new async.DartStreamController({
            sync: true
        });
        this.onExecutionLaunchData = this._onExecutionLaunchData.stream.asBroadcastStream();
    };
    IntegrationTestMixin.prototype.dispatchNotification = function (event, params) {
        var decoder = new bare.createInstance(any, null, null);
        switch (event) {
            case "server.connected":
                lib3.outOfTestExpect(params, lib4.properties.isServerConnectedParams);
                this._onServerConnected.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "server.error":
                lib3.outOfTestExpect(params, lib4.properties.isServerErrorParams);
                this._onServerError.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "server.status":
                lib3.outOfTestExpect(params, lib4.properties.isServerStatusParams);
                this._onServerStatus.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.analyzedFiles":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisAnalyzedFilesParams);
                this._onAnalysisAnalyzedFiles.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.errors":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisErrorsParams);
                this._onAnalysisErrors.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.flushResults":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisFlushResultsParams);
                this._onAnalysisFlushResults.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.folding":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisFoldingParams);
                this._onAnalysisFolding.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.highlights":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisHighlightsParams);
                this._onAnalysisHighlights.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.implemented":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisImplementedParams);
                this._onAnalysisImplemented.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.invalidate":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisInvalidateParams);
                this._onAnalysisInvalidate.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.navigation":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisNavigationParams);
                this._onAnalysisNavigation.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.occurrences":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisOccurrencesParams);
                this._onAnalysisOccurrences.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.outline":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisOutlineParams);
                this._onAnalysisOutline.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "analysis.overrides":
                lib3.outOfTestExpect(params, lib4.properties.isAnalysisOverridesParams);
                this._onAnalysisOverrides.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "completion.results":
                lib3.outOfTestExpect(params, lib4.properties.isCompletionResultsParams);
                this._onCompletionResults.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "search.results":
                lib3.outOfTestExpect(params, lib4.properties.isSearchResultsParams);
                this._onSearchResults.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            case "execution.launchData":
                lib3.outOfTestExpect(params, lib4.properties.isExecutionLaunchDataParams);
                this._onExecutionLaunchData.add(new bare.createInstance(any, null, decoder, 'params', params));
                break;
            default:
                fail("Unexpected notification: " + event);
                break;
        }
    };
    IntegrationTestMixin.prototype.IntegrationTestMixin = function () {
    };
    __decorate([
        utils_1.AbstractProperty
    ], IntegrationTestMixin.prototype, "server", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'deprecated', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], IntegrationTestMixin.prototype, "sendAnalysisUpdateOptions", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'deprecated', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], IntegrationTestMixin.prototype, "sendExecutionSetSubscriptions", null);
    __decorate([
        utils_1.defaultConstructor
    ], IntegrationTestMixin.prototype, "IntegrationTestMixin", null);
    IntegrationTestMixin = __decorate([
        utils_1.DartClass
    ], IntegrationTestMixin);
    return IntegrationTestMixin;
}());
exports.IntegrationTestMixin = IntegrationTestMixin;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=integration_test_methods.js.map