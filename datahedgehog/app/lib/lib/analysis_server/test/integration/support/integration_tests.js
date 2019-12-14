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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/support/integration_tests.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var lib3 = require("./protocol_matchers");
var lib4 = require("./integration_test_methods");
var io = require("@dart2ts/dart/io");
var lib7 = require("@dart2ts.packages/path/lib/path");
var convert = require("@dart2ts/dart/convert");
exports.isListOf = function (elementMatcher) {
    return new _ListOf(elementMatcher);
};
exports.isMapOf = function (keyMatcher, valueMatcher) {
    return new _MapOf(keyMatcher, valueMatcher);
};
exports.isOneOf = function (choiceMatchers) {
    return new _OneOf(choiceMatchers);
};
exports.outOfTestExpect = function (actual, matcher, _namedArguments) {
    var _a = Object.assign({
        "verbose": false
    }, _namedArguments), reason = _a.reason, skip = _a.skip, verbose = _a.verbose;
    var matchState = new core.DartMap.literal([]);
    try {
        if (matcher.matches(actual, matchState))
            return;
    }
    catch (__error__) {
        {
            var trace = new core.DartStackTrace.fromError(__error__);
            var e = __error__;
            if (reason == null) {
                reason = ((_common_1.is(e, "string")) ? e : e.toString()) + " at " + trace;
            }
        }
    }
    fail(exports._defaultFailFormatter(actual, matcher, reason, matchState, verbose));
};
exports._defaultFailFormatter = function (actual, matcher, reason, matchState, verbose) {
    var description = new bare.createInstance(any, null);
    description.add('Expected: ').addDescriptionOf(matcher).add('\n');
    description.add('  Actual: ').addDescriptionOf(actual).add('\n');
    var mismatchDescription = new bare.createInstance(any, null);
    matcher.describeMismatch(actual, mismatchDescription, matchState, verbose);
    if (utils_1.op(utils_1.Op.GT, mismatchDescription.length, 0)) {
        description.add("   Which: " + mismatchDescription + "\n");
    }
    if (reason != null)
        description.add(reason).add('\n');
    return description.toString();
};
var AbstractAnalysisServerIntegrationTest = /** @class */ (function (_super) {
    __extends(AbstractAnalysisServerIntegrationTest, _super);
    function AbstractAnalysisServerIntegrationTest() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    AbstractAnalysisServerIntegrationTest_1 = AbstractAnalysisServerIntegrationTest;
    Object.defineProperty(AbstractAnalysisServerIntegrationTest, "SHUTDOWN_TIMEOUT", {
        get: function () {
            if (this.__$SHUTDOWN_TIMEOUT === undefined) {
                this.__$SHUTDOWN_TIMEOUT = new core.DartDuration({
                    seconds: 5
                });
            }
            return this.__$SHUTDOWN_TIMEOUT;
        },
        enumerable: true,
        configurable: true
    });
    AbstractAnalysisServerIntegrationTest.prototype.AbstractAnalysisServerIntegrationTest = function () {
        this.server = new Server();
        this.currentAnalysisErrors = new core.DartHashMap();
        this.skipShutdown = false;
        this._subscribedToServerStatus = false;
        this.initializeInttestMixin();
    };
    Object.defineProperty(AbstractAnalysisServerIntegrationTest.prototype, "analysisFinished", {
        get: function () {
            var completer = new async.DartCompleter();
            var subscription;
            exports.outOfTestExpect(this._subscribedToServerStatus, isTrue);
            subscription = this.onServerStatus.listen(function (params) {
                if (params.analysis != null && !params.analysis.isAnalyzing) {
                    completer.complete(params);
                    subscription.cancel();
                }
            });
            return completer.future;
        },
        enumerable: true,
        configurable: true
    });
    AbstractAnalysisServerIntegrationTest.prototype.debugStdio = function () {
        this.server.debugStdio();
    };
    AbstractAnalysisServerIntegrationTest.prototype.getErrors = function (pathname) {
        return utils_1.op(utils_1.Op.INDEX, this.currentAnalysisErrors, pathname);
    };
    AbstractAnalysisServerIntegrationTest.prototype.readFile = function (pathname) {
        return new io.File(pathname).readAsStringSync();
    };
    AbstractAnalysisServerIntegrationTest.prototype.sendServerSetSubscriptions = function (subscriptions) {
        this._subscribedToServerStatus = subscriptions.contains(ServerService.STATUS);
        return _super.prototype.sendServerSetSubscriptions.call(this, subscriptions);
    };
    AbstractAnalysisServerIntegrationTest.prototype.setUp = function () {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var serverConnected;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sourceDirectory = new io.Directory(io.Directory.systemTemp.createTempSync('analysisServer').resolveSymbolicLinksSync());
                        this.onAnalysisErrors.listen(function (params) {
                            utils_1.op(utils_1.Op.INDEX_ASSIGN, _this.currentAnalysisErrors, params.file, params.errors);
                        });
                        this.onAnalysisAnalyzedFiles.listen(function (params) {
                            _this.lastAnalyzedFiles = params.directories;
                        });
                        serverConnected = new async.DartCompleter();
                        this.onServerConnected.listen(function (_) {
                            exports.outOfTestExpect(serverConnected.isCompleted, isFalse);
                            serverConnected.complete();
                        });
                        this.onServerError.listen(function (params) {
                            fail(params.message + "\n" + params.stackTrace);
                        });
                        return [4 /*yield*/, this.startServer()];
                    case 1:
                        _a.sent();
                        this.server.listenToOutput(this.dispatchNotification.bind(this));
                        this.server.exitCode.then(function (_) {
                            _this.skipShutdown = true;
                        });
                        return [2 /*return*/, serverConnected.future];
                }
            });
        }); })());
    };
    AbstractAnalysisServerIntegrationTest.prototype.shutdownIfNeeded = function () {
        var _this = this;
        if (this.skipShutdown) {
            return new async.Future.value();
        }
        this.sendServerShutdown();
        return this.server.exitCode.timeout(AbstractAnalysisServerIntegrationTest_1.SHUTDOWN_TIMEOUT, {
            onTimeout: function () {
                return _this.server.kill('server failed to exit').then(function (_) {
                    return -1;
                });
            }
        });
    };
    AbstractAnalysisServerIntegrationTest.prototype.sourcePath = function (relativePath) {
        return lib7.join(this.sourceDirectory.path, new core.DartString(relativePath).replaceAll('/', lib7.properties.separator));
    };
    AbstractAnalysisServerIntegrationTest.prototype.standardAnalysisSetup = function (_namedArguments) {
        var subscribeStatus = Object.assign({
            "subscribeStatus": true
        }, _namedArguments).subscribeStatus;
        var futures = new core.DartList.literal();
        if (subscribeStatus) {
            futures.add(this.sendServerSetSubscriptions(new core.DartList.literal(ServerService.STATUS)));
        }
        futures.add(this.sendAnalysisSetAnalysisRoots(new core.DartList.literal(this.sourceDirectory.path), new core.DartList.literal()));
        return async.Future.wait(futures);
    };
    AbstractAnalysisServerIntegrationTest.prototype.startServer = function (_namedArguments) {
        var _a = Object.assign({
            "checked": true
        }, _namedArguments), checked = _a.checked, diagnosticPort = _a.diagnosticPort, servicesPort = _a.servicesPort;
        return this.server.start({
            checked: checked, diagnosticPort: diagnosticPort, servicesPort: servicesPort
        });
    };
    AbstractAnalysisServerIntegrationTest.prototype.tearDown = function () {
        var _this = this;
        return this.shutdownIfNeeded().then(function (_) {
            _this.sourceDirectory.deleteSync({
                recursive: true
            });
        });
    };
    AbstractAnalysisServerIntegrationTest.prototype.writeFile = function (pathname, contents) {
        new io.Directory(lib7.dirname(pathname)).createSync({
            recursive: true
        });
        var file = new io.File(pathname);
        file.writeAsStringSync(contents);
        return file.resolveSymbolicLinksSync();
    };
    var AbstractAnalysisServerIntegrationTest_1;
    __decorate([
        utils_1.defaultConstructor
    ], AbstractAnalysisServerIntegrationTest.prototype, "AbstractAnalysisServerIntegrationTest", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], AbstractAnalysisServerIntegrationTest.prototype, "sendServerSetSubscriptions", null);
    AbstractAnalysisServerIntegrationTest = AbstractAnalysisServerIntegrationTest_1 = __decorate([
        utils_1.DartClass
    ], AbstractAnalysisServerIntegrationTest);
    return AbstractAnalysisServerIntegrationTest;
}(lib4.IntegrationTestMixin));
exports.AbstractAnalysisServerIntegrationTest = AbstractAnalysisServerIntegrationTest;
var LazyMatcher = /** @class */ (function () {
    function LazyMatcher(_creator) {
    }
    LazyMatcher.prototype.LazyMatcher = function (_creator) {
        this._creator = _creator;
    };
    LazyMatcher.prototype.describe = function (description) {
        this._createMatcher();
        return this._wrappedMatcher.describe(description);
    };
    LazyMatcher.prototype.describeMismatch = function (item, mismatchDescription, matchState, verbose) {
        this._createMatcher();
        return this._wrappedMatcher.describeMismatch(item, mismatchDescription, matchState, verbose);
    };
    LazyMatcher.prototype.matches = function (item, matchState) {
        this._createMatcher();
        return this._wrappedMatcher.matches(item, matchState);
    };
    LazyMatcher.prototype._createMatcher = function () {
        if (utils_1.op(utils_1.Op.EQUALS, this._wrappedMatcher, null)) {
            this._wrappedMatcher = this._creator();
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], LazyMatcher.prototype, "LazyMatcher", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LazyMatcher.prototype, "describe", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LazyMatcher.prototype, "describeMismatch", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], LazyMatcher.prototype, "matches", null);
    LazyMatcher = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], LazyMatcher);
    return LazyMatcher;
}());
exports.LazyMatcher = LazyMatcher;
var MatchesEnum = /** @class */ (function (_super) {
    __extends(MatchesEnum, _super);
    function MatchesEnum(description, allowedValues) {
        var _this = this;
        return _this;
    }
    MatchesEnum.prototype.MatchesEnum = function (description, allowedValues) {
        this.description = description;
        this.allowedValues = allowedValues;
    };
    MatchesEnum.prototype.describe = function (description) {
        return description.add(this.description);
    };
    MatchesEnum.prototype.matches = function (item, matchState) {
        return this.allowedValues.contains(item);
    };
    __decorate([
        utils_1.defaultConstructor
    ], MatchesEnum.prototype, "MatchesEnum", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MatchesEnum.prototype, "describe", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MatchesEnum.prototype, "matches", null);
    MatchesEnum = __decorate([
        utils_1.DartClass
    ], MatchesEnum);
    return MatchesEnum;
}(any));
exports.MatchesEnum = MatchesEnum;
var Server = /** @class */ (function () {
    function Server() {
    }
    Object.defineProperty(Server.prototype, "currentElapseTime", {
        get: function () {
            return this._time.elapsedTicks / this._time.frequency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "exitCode", {
        get: function () {
            return this._process.exitCode;
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.debugStdio = function () {
        if (this._debuggingStdio) {
            return;
        }
        this._debuggingStdio = true;
        for (var _i = 0, _a = this._recordedStdio; _i < _a.length; _i++) {
            var line = _a[_i];
            core.print(line);
        }
    };
    Server.prototype.findRoot = function (pathname) {
        while (!new core.DartList.literal('benchmark', 'test').contains(lib7.basename(pathname))) {
            var parent_1 = lib7.dirname(pathname);
            if (new core.DartString(parent_1).length >= new core.DartString(pathname).length) {
                throw new core.Exception("Can't find root directory");
            }
            pathname = parent_1;
        }
        return lib7.dirname(pathname);
    };
    Server.prototype.flushCommands = function () {
        return this._process.stdin.flush();
    };
    Server.prototype.kill = function (reason) {
        this.debugStdio();
        this._recordStdio("FORCIBLY TERMINATING PROCESS: " + reason);
        this._process.kill();
        return this._process.exitCode;
    };
    Server.prototype.listenToOutput = function (notificationProcessor) {
        var _this = this;
        this._process.stdout.transform((new convert.Utf8Codec()).decoder).transform(new convert.LineSplitter()).listen(function (line) {
            _this.lastCommunicationTime = _this.currentElapseTime;
            var trimmedLine = new core.DartString(line).trim();
            if (new core.DartString(trimmedLine).startsWith('Observatory listening on ')) {
                return;
            }
            _this._recordStdio("RECV: " + trimmedLine);
            var message;
            try {
                message = convert.properties.JSON.decoder.convert(trimmedLine);
            }
            catch (__error__) {
                {
                    var exception = __error__;
                    _this._badDataFromServer("JSON decode failure: " + exception);
                    return;
                }
            }
            exports.outOfTestExpect(message, isMap);
            var messageAsMap = message;
            if (messageAsMap.containsKey('id')) {
                exports.outOfTestExpect(messageAsMap.get('id'), properties.isString);
                var id = utils_1.op(utils_1.Op.INDEX, message, 'id');
                var completer = _this._pendingCommands.get(id);
                if (utils_1.op(utils_1.Op.EQUALS, completer, null)) {
                    fail("Unexpected response from server: id=" + id);
                }
                else {
                    _this._pendingCommands.remove(id);
                }
                if (messageAsMap.containsKey('error')) {
                    completer.completeError(new ServerErrorMessage(messageAsMap));
                }
                else {
                    completer.complete(messageAsMap.get('result'));
                }
                exports.outOfTestExpect(message, properties.isResponse);
            }
            else {
                exports.outOfTestExpect(messageAsMap, contains('event'));
                exports.outOfTestExpect(messageAsMap.get('event'), properties.isString);
                notificationProcessor(messageAsMap.get('event'), messageAsMap.get('params'));
                exports.outOfTestExpect(message, properties.isNotification);
            }
        });
        this._process.stderr.transform((new convert.Utf8Codec()).decoder).transform(new convert.LineSplitter()).listen(function (line) {
            var trimmedLine = new core.DartString(line).trim();
            _this._recordStdio("ERR:  " + trimmedLine);
            _this._badDataFromServer('Message received on stderr', {
                silent: true
            });
        });
    };
    Server.prototype.send = function (method, params) {
        var id = "" + this._nextId++;
        var command = new core.DartMap.literal([
            ['id', id],
            ['method', method]
        ]);
        if (params != null) {
            command.set('params', params);
        }
        var completer = new async.DartCompleter();
        this._pendingCommands.set(id, completer);
        var line = convert.properties.JSON.encode(command);
        this._recordStdio("SEND: " + line);
        this._process.stdin.add(convert.properties.UTF8.encoder.convert(line + "\n"));
        return completer.future;
    };
    Server.prototype.start = function (_namedArguments) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, checked, diagnosticPort, instrumentationLogFile, profileServer, sdkPath, servicesPort, useAnalysisHighlight2, dartBinary, rootDir, serverPath, arguments, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Object.assign({
                            "checked": true,
                            "profileServer": false,
                            "useAnalysisHighlight2": false
                        }, _namedArguments), checked = _a.checked, diagnosticPort = _a.diagnosticPort, instrumentationLogFile = _a.instrumentationLogFile, profileServer = _a.profileServer, sdkPath = _a.sdkPath, servicesPort = _a.servicesPort, useAnalysisHighlight2 = _a.useAnalysisHighlight2;
                        if (this._process != null) {
                            throw new core.Exception('Process already started');
                        }
                        this._time.start();
                        dartBinary = io.Platform.executable;
                        rootDir = this.findRoot(io.Platform.script.toFilePath({
                            windows: io.Platform.isWindows
                        }));
                        serverPath = lib7.normalize(lib7.join(rootDir, 'bin', 'server.dart'));
                        arguments = new core.DartList.literal();
                        if (profileServer) {
                            if (servicesPort == null) {
                                arguments.add('--observe');
                            }
                            else {
                                arguments.add("--observe=" + servicesPort);
                            }
                            arguments.add('--pause-isolates-on-exit');
                        }
                        else if (servicesPort != null) {
                            arguments.add("--enable-vm-service=" + servicesPort);
                        }
                        if (io.Platform.packageRoot != null) {
                            arguments.add("--package-root=" + io.Platform.packageRoot);
                        }
                        if (io.Platform.packageConfig != null) {
                            arguments.add("--packages=" + io.Platform.packageConfig);
                        }
                        if (checked) {
                            arguments.add('--checked');
                        }
                        arguments.add(serverPath);
                        if (diagnosticPort != null) {
                            arguments.add('--port');
                            arguments.add(new core.DartInt(diagnosticPort).toString());
                        }
                        if (instrumentationLogFile != null) {
                            arguments.add("--instrumentation-log-file=" + instrumentationLogFile);
                        }
                        if (sdkPath != null) {
                            arguments.add("--sdk=" + sdkPath);
                        }
                        if (useAnalysisHighlight2) {
                            arguments.add('--useAnalysisHighlight2');
                        }
                        _b = this;
                        return [4 /*yield*/, io.Process.start(dartBinary, arguments)];
                    case 1:
                        _b._process = _c.sent();
                        this._process.exitCode.then(function (code) {
                            if (code != 0) {
                                _this._badDataFromServer("server terminated with exit code " + code);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); })());
    };
    Server.prototype._badDataFromServer = function (details, _namedArguments) {
        var silent = Object.assign({
            "silent": false
        }, _namedArguments).silent;
        if (!silent) {
            this._recordStdio("BAD DATA FROM SERVER: " + details);
        }
        if (this._receivedBadDataFromServer) {
            return;
        }
        this._receivedBadDataFromServer = true;
        this.debugStdio();
        new async.Future.delayed(new core.DartDuration({
            seconds: 1
        }), expectAsync0(function () {
            fail("Bad data received from server: " + details);
        }));
    };
    Server.prototype._recordStdio = function (line) {
        var elapsedTime = this.currentElapseTime;
        line = elapsedTime + ": " + line;
        if (this._debuggingStdio) {
            core.print(line);
        }
        this._recordedStdio.add(line);
    };
    Server.prototype.Server = function () {
        this._pendingCommands = new core.DartMap.literal([]);
        this._nextId = 0;
        this._recordedStdio = new core.DartList.literal();
        this._debuggingStdio = false;
        this._receivedBadDataFromServer = false;
        this._time = new core.DartStopwatch();
    };
    __decorate([
        utils_1.defaultConstructor
    ], Server.prototype, "Server", null);
    Server = __decorate([
        utils_1.DartClass
    ], Server);
    return Server;
}());
exports.Server = Server;
var ServerErrorMessage = /** @class */ (function () {
    function ServerErrorMessage(message) {
    }
    ServerErrorMessage.prototype.ServerErrorMessage = function (message) {
        this.message = message;
    };
    Object.defineProperty(ServerErrorMessage.prototype, "error", {
        get: function () {
            return this.message.get('error');
        },
        enumerable: true,
        configurable: true
    });
    ServerErrorMessage.prototype.toString = function () {
        return this.message.toString();
    };
    __decorate([
        utils_1.defaultConstructor
    ], ServerErrorMessage.prototype, "ServerErrorMessage", null);
    ServerErrorMessage = __decorate([
        utils_1.DartClass
    ], ServerErrorMessage);
    return ServerErrorMessage;
}());
exports.ServerErrorMessage = ServerErrorMessage;
var _ListOf = /** @class */ (function (_super) {
    __extends(_ListOf, _super);
    function _ListOf(elementMatcher) {
        var _this = this;
        return _this;
    }
    _ListOf.prototype._ListOf = function (elementMatcher) {
        this.elementMatcher = elementMatcher;
        this.iterableMatcher = everyElement(elementMatcher);
    };
    _ListOf.prototype.describe = function (description) {
        return description.add('List of ').addDescriptionOf(this.elementMatcher);
    };
    _ListOf.prototype.describeMismatch = function (item, mismatchDescription, matchState, verbose) {
        if (_common_1.isNot(item, core.DartList())) {
            return _super.prototype.describeMismatch.call(this, item, mismatchDescription, matchState, verbose);
        }
        else {
            return this.iterableMatcher.describeMismatch(item, mismatchDescription, matchState, verbose);
        }
    };
    _ListOf.prototype.matches = function (item, matchState) {
        if (_common_1.isNot(item, core.DartList())) {
            return false;
        }
        return this.iterableMatcher.matches(item, matchState);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _ListOf.prototype, "_ListOf", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _ListOf.prototype, "describe", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _ListOf.prototype, "describeMismatch", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _ListOf.prototype, "matches", null);
    _ListOf = __decorate([
        utils_1.DartClass
    ], _ListOf);
    return _ListOf;
}(any));
exports._ListOf = _ListOf;
var _OneOf = /** @class */ (function (_super) {
    __extends(_OneOf, _super);
    function _OneOf(choiceMatchers) {
        var _this = this;
        return _this;
    }
    _OneOf.prototype._OneOf = function (choiceMatchers) {
        this.choiceMatchers = choiceMatchers;
    };
    _OneOf.prototype.describe = function (description) {
        for (var i = 0; i < this.choiceMatchers.length; i++) {
            if (i != 0) {
                if (this.choiceMatchers.length == 2) {
                    description = description.add(' or ');
                }
                else {
                    description = description.add(', ');
                    if (i == this.choiceMatchers.length - 1) {
                        description = description.add('or ');
                    }
                }
            }
            description = description.addDescriptionOf(this.choiceMatchers[i]);
        }
        return description;
    };
    _OneOf.prototype.matches = function (item, matchState) {
        for (var _i = 0, _a = this.choiceMatchers; _i < _a.length; _i++) {
            var choiceMatcher = _a[_i];
            var subState = new core.DartMap.literal([]);
            if (choiceMatcher.matches(item, subState)) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        utils_1.defaultConstructor
    ], _OneOf.prototype, "_OneOf", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OneOf.prototype, "describe", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _OneOf.prototype, "matches", null);
    _OneOf = __decorate([
        utils_1.DartClass
    ], _OneOf);
    return _OneOf;
}(any));
exports._OneOf = _OneOf;
var _RecursiveMatcher = /** @class */ (function (_super) {
    __extends(_RecursiveMatcher, _super);
    function _RecursiveMatcher() {
        var _this = this;
        return _this;
    }
    _RecursiveMatcher.prototype._RecursiveMatcher = function () {
    };
    _RecursiveMatcher.prototype.checkSubstructure = function (item, matcher, mismatches, describeSubstructure) {
        var subState = new core.DartMap.literal([]);
        if (!matcher.matches(item, subState)) {
            mismatches.add(function (mismatchDescription) {
                mismatchDescription = mismatchDescription.add('contains malformed ');
                mismatchDescription = describeSubstructure(mismatchDescription);
                mismatchDescription = mismatchDescription.add(' (should be ').addDescriptionOf(matcher);
                var subDescription = matcher.describeMismatch(item, new bare.createInstance(any, null), subState, false).toString();
                if (new core.DartString(subDescription).isNotEmpty) {
                    mismatchDescription = mismatchDescription.add('; ').add(subDescription);
                }
                return mismatchDescription.add(')');
            });
        }
    };
    _RecursiveMatcher.prototype.describeMismatch = function (item, mismatchDescription, matchState, verbose) {
        var mismatches = matchState.get('mismatches');
        if (mismatches != null) {
            for (var i = 0; i < mismatches.length; i++) {
                var mismatch = mismatches[i];
                if (i > 0) {
                    if (mismatches.length == 2) {
                        mismatchDescription = mismatchDescription.add(' and ');
                    }
                    else if (i == mismatches.length - 1) {
                        mismatchDescription = mismatchDescription.add(', and ');
                    }
                    else {
                        mismatchDescription = mismatchDescription.add(', ');
                    }
                }
                mismatchDescription = mismatch(mismatchDescription);
            }
            return mismatchDescription;
        }
        else {
            return _super.prototype.describeMismatch.call(this, item, mismatchDescription, matchState, verbose);
        }
    };
    _RecursiveMatcher.prototype.matches = function (item, matchState) {
        var mismatches = new core.DartList.literal();
        this.populateMismatches(item, mismatches);
        if (mismatches.isEmpty) {
            return true;
        }
        else {
            addStateInfo(matchState, new core.DartMap.literal([
                ['mismatches', mismatches]
            ]));
            return false;
        }
    };
    _RecursiveMatcher.prototype.populateMismatches = function (item, mismatches) { throw 'abstract'; };
    _RecursiveMatcher.prototype.simpleDescription = function (description) {
        return function (mismatchDescription) {
            mismatchDescription.add(description);
        };
    };
    __decorate([
        utils_1.defaultConstructor
    ], _RecursiveMatcher.prototype, "_RecursiveMatcher", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _RecursiveMatcher.prototype, "describeMismatch", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _RecursiveMatcher.prototype, "matches", null);
    __decorate([
        utils_1.Abstract
    ], _RecursiveMatcher.prototype, "populateMismatches", null);
    _RecursiveMatcher = __decorate([
        utils_1.DartClass
    ], _RecursiveMatcher);
    return _RecursiveMatcher;
}(any));
exports._RecursiveMatcher = _RecursiveMatcher;
var MatchesJsonObject = /** @class */ (function (_super) {
    __extends(MatchesJsonObject, _super);
    function MatchesJsonObject(description, requiredFields, _namedArguments) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    MatchesJsonObject.prototype.MatchesJsonObject = function (description, requiredFields, _namedArguments) {
        var optionalFields = Object.assign({}, _namedArguments).optionalFields;
        this.description = description;
        this.requiredFields = requiredFields;
        this.optionalFields = optionalFields;
    };
    MatchesJsonObject.prototype.describe = function (description) {
        return description.add(this.description);
    };
    MatchesJsonObject.prototype.populateMismatches = function (item, mismatches) {
        var _this = this;
        if (_common_1.isNot(item, core.DartMap())) {
            mismatches.add(this.simpleDescription('is not a map'));
            return;
        }
        if (this.requiredFields != null) {
            this.requiredFields.forEach(function (key, valueMatcher) {
                if (!item.containsKey(key)) {
                    mismatches.add(function (mismatchDescription) {
                        return mismatchDescription.add('is missing field ').addDescriptionOf(key).add(' (').addDescriptionOf(valueMatcher).add(')');
                    });
                }
                else {
                    _this._checkField(key, item.get(key), valueMatcher, mismatches);
                }
            });
        }
        item.forEach(function (key, value) {
            if (_this.requiredFields != null && _this.requiredFields.containsKey(key)) {
            }
            else if (_this.optionalFields != null && _this.optionalFields.containsKey(key)) {
                _this._checkField(key, value, _this.optionalFields.get(key), mismatches);
            }
            else {
                mismatches.add(function (mismatchDescription) {
                    return mismatchDescription.add('has unexpected field ').addDescriptionOf(key);
                });
            }
        });
    };
    MatchesJsonObject.prototype._checkField = function (key, value, valueMatcher, mismatches) {
        this.checkSubstructure(value, valueMatcher, mismatches, function (description) {
            return description.add('field ').addDescriptionOf(key);
        });
    };
    __decorate([
        utils_1.defaultConstructor
    ], MatchesJsonObject.prototype, "MatchesJsonObject", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MatchesJsonObject.prototype, "describe", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], MatchesJsonObject.prototype, "populateMismatches", null);
    MatchesJsonObject = __decorate([
        utils_1.DartClass
    ], MatchesJsonObject);
    return MatchesJsonObject;
}(_RecursiveMatcher));
exports.MatchesJsonObject = MatchesJsonObject;
var _MapOf = /** @class */ (function (_super) {
    __extends(_MapOf, _super);
    function _MapOf(keyMatcher, valueMatcher) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    _MapOf.prototype._MapOf = function (keyMatcher, valueMatcher) {
        this.keyMatcher = keyMatcher;
        this.valueMatcher = valueMatcher;
    };
    _MapOf.prototype.describe = function (description) {
        return description.add('Map from ').addDescriptionOf(this.keyMatcher).add(' to ').addDescriptionOf(this.valueMatcher);
    };
    _MapOf.prototype.populateMismatches = function (item, mismatches) {
        var _this = this;
        if (_common_1.isNot(item, core.DartMap())) {
            mismatches.add(this.simpleDescription('is not a map'));
            return;
        }
        item.forEach(function (key, value) {
            _this.checkSubstructure(key, _this.keyMatcher, mismatches, function (description) {
                return description.add('key ').addDescriptionOf(key);
            });
            _this.checkSubstructure(value, _this.valueMatcher, mismatches, function (description) {
                return description.add('field ').addDescriptionOf(key);
            });
        });
    };
    __decorate([
        utils_1.defaultConstructor
    ], _MapOf.prototype, "_MapOf", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _MapOf.prototype, "describe", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _MapOf.prototype, "populateMismatches", null);
    _MapOf = __decorate([
        utils_1.DartClass
    ], _MapOf);
    return _MapOf;
}(_RecursiveMatcher));
exports._MapOf = _MapOf;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "isBool", {
        get: function () {
            if (this.__$isBool === undefined) {
                this.__$isBool = new bare.createInstance(any, null);
            }
            return this.__$isBool;
        },
        set: function (__$value) {
            this.__$isBool = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isInt", {
        get: function () {
            if (this.__$isInt === undefined) {
                this.__$isInt = new bare.createInstance(any, null);
            }
            return this.__$isInt;
        },
        set: function (__$value) {
            this.__$isInt = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isNotification", {
        get: function () {
            if (this.__$isNotification === undefined) {
                this.__$isNotification = new MatchesJsonObject('notification', new core.DartMap.literal([
                    ['event', properties.isString]
                ]), {
                    optionalFields: new core.DartMap.literal([
                        ['params', isMap]
                    ])
                });
            }
            return this.__$isNotification;
        },
        set: function (__$value) {
            this.__$isNotification = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isObject", {
        get: function () {
            if (this.__$isObject === undefined) {
                this.__$isObject = isMap;
            }
            return this.__$isObject;
        },
        set: function (__$value) {
            this.__$isObject = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isString", {
        get: function () {
            if (this.__$isString === undefined) {
                this.__$isString = new bare.createInstance(any, null);
            }
            return this.__$isString;
        },
        set: function (__$value) {
            this.__$isString = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isResponse", {
        get: function () {
            if (this.__$isResponse === undefined) {
                this.__$isResponse = new MatchesJsonObject('response', new core.DartMap.literal([
                    ['id', properties.isString]
                ]), {
                    optionalFields: new core.DartMap.literal([
                        ['result', anything],
                        ['error', lib3.properties.isRequestError]
                    ])
                });
            }
            return this.__$isResponse;
        },
        set: function (__$value) {
            this.__$isResponse = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=integration_tests.js.map