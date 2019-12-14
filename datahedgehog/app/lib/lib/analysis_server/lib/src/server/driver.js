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
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/server/driver.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var async = require("@dart2ts/dart/async");
var io = require("@dart2ts/dart/io");
var math = require("@dart2ts/dart/math");
exports._initIncrementalLogger = function (spec) {
    logger = NULL_LOGGER;
    if (spec == null) {
        return;
    }
    if (spec == 'console') {
        logger = new bare.createInstance(any, null, io.properties.stdout);
    }
    else if (spec == 'stderr') {
        logger = new bare.createInstance(any, null, io.properties.stderr);
    }
    else if (new core.DartString(spec).startsWith('file:')) {
        var fileName = new core.DartString(spec).substring(new core.DartString('file:').length);
        var file = new io.File(fileName);
        var sink = file.openWrite();
        logger = new bare.createInstance(any, null, sink);
    }
};
var CommandLineParser = /** @class */ (function () {
    function CommandLineParser(_namedArguments) {
    }
    CommandLineParser.prototype.CommandLineParser = function (_namedArguments) {
        var alwaysIgnoreUnrecognized = Object.assign({
            "alwaysIgnoreUnrecognized": false
        }, _namedArguments).alwaysIgnoreUnrecognized;
        this._knownFlags = new core.DartList.literal();
        this._alwaysIgnoreUnrecognized = alwaysIgnoreUnrecognized;
        this._parser = new bare.createInstance(any, null, {
            allowTrailingOptions: true
        });
    };
    Object.defineProperty(CommandLineParser.prototype, "parser", {
        get: function () {
            return this._parser;
        },
        enumerable: true,
        configurable: true
    });
    CommandLineParser.prototype.addFlag = function (name, _namedArguments) {
        var _a = Object.assign({
            "defaultsTo": false,
            "negatable": true,
            "hide": false
        }, _namedArguments), abbr = _a.abbr, help = _a.help, defaultsTo = _a.defaultsTo, negatable = _a.negatable, callback = _a.callback, hide = _a.hide;
        this._knownFlags.add(name);
        this._parser.addFlag(name, {
            abbr: abbr, help: help, defaultsTo: defaultsTo, negatable: negatable, callback: callback, hide: hide
        });
    };
    CommandLineParser.prototype.addOption = function (name, _namedArguments) {
        var _a = Object.assign({
            "allowMultiple": false
        }, _namedArguments), abbr = _a.abbr, help = _a.help, allowed = _a.allowed, allowedHelp = _a.allowedHelp, defaultsTo = _a.defaultsTo, callback = _a.callback, allowMultiple = _a.allowMultiple;
        this._knownFlags.add(name);
        this._parser.addOption(name, {
            abbr: abbr, help: help, allowed: allowed, allowedHelp: allowedHelp, defaultsTo: defaultsTo, callback: callback, allowMultiple: allowMultiple
        });
    };
    CommandLineParser.prototype.getUsage = function () {
        return this._parser.usage;
    };
    CommandLineParser.prototype.parse = function (args, definedVariables) {
        return this._parser.parse(this._filterUnknowns(this.parseDefinedVariables(args, definedVariables)));
    };
    CommandLineParser.prototype.parseDefinedVariables = function (args, definedVariables) {
        var count = args.length;
        var remainingArgs = new core.DartList.literal();
        for (var i = 0; i < count; i++) {
            var arg = args[i];
            if (arg == '--') {
                while (i < count) {
                    remainingArgs.add(args[i++]);
                }
            }
            else if (new core.DartString(arg).startsWith("-D")) {
                definedVariables.set(new core.DartString(arg).substring(2), args[++i]);
            }
            else {
                remainingArgs.add(arg);
            }
        }
        return remainingArgs;
    };
    CommandLineParser.prototype._filterUnknowns = function (args) {
        if (this._alwaysIgnoreUnrecognized || args.contains('--ignore-unrecognized-flags')) {
            var filtered = new core.DartList.literal();
            for (var i = 0; i < args.length; ++i) {
                var arg = args[i];
                if (new core.DartString(arg).startsWith('--') && new core.DartString(arg).length > 2) {
                    var option = new core.DartString(arg).substring(2);
                    var equalsOffset = new core.DartString(option).lastIndexOf('=');
                    if (equalsOffset != -1) {
                        option = new core.DartString(option).substring(0, equalsOffset);
                    }
                    if (!this._knownFlags.contains(option)) {
                        i = this._getNextFlagIndex(args, i);
                    }
                    else {
                        filtered.add(arg);
                    }
                }
                else {
                    filtered.add(arg);
                }
            }
            return filtered;
        }
        else {
            return args;
        }
    };
    CommandLineParser.prototype._getNextFlagIndex = function (args, i) {
        for (; utils_1.op(utils_1.Op.LT, i, args.length); ++i) {
            if (utils_1.op(utils_1.Op.INDEX, args, i).startsWith('--')) {
                return i;
            }
        }
        return i;
    };
    __decorate([
        utils_1.defaultConstructor
    ], CommandLineParser.prototype, "CommandLineParser", null);
    CommandLineParser = __decorate([
        utils_1.DartClass
    ], CommandLineParser);
    return CommandLineParser;
}());
exports.CommandLineParser = CommandLineParser;
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver_1 = Driver;
    Object.defineProperty(Driver, "BINARY_NAME", {
        get: function () {
            if (this.__$BINARY_NAME === undefined) {
                this.__$BINARY_NAME = "server";
            }
            return this.__$BINARY_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "CLIENT_ID", {
        get: function () {
            if (this.__$CLIENT_ID === undefined) {
                this.__$CLIENT_ID = "client-id";
            }
            return this.__$CLIENT_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "CLIENT_VERSION", {
        get: function () {
            if (this.__$CLIENT_VERSION === undefined) {
                this.__$CLIENT_VERSION = "client-version";
            }
            return this.__$CLIENT_VERSION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "ENABLE_INCREMENTAL_RESOLUTION_API", {
        get: function () {
            if (this.__$ENABLE_INCREMENTAL_RESOLUTION_API === undefined) {
                this.__$ENABLE_INCREMENTAL_RESOLUTION_API = "enable-incremental-resolution-api";
            }
            return this.__$ENABLE_INCREMENTAL_RESOLUTION_API;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "ENABLE_INSTRUMENTATION_OPTION", {
        get: function () {
            if (this.__$ENABLE_INSTRUMENTATION_OPTION === undefined) {
                this.__$ENABLE_INSTRUMENTATION_OPTION = "enable-instrumentation";
            }
            return this.__$ENABLE_INSTRUMENTATION_OPTION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "FILE_READ_MODE", {
        get: function () {
            if (this.__$FILE_READ_MODE === undefined) {
                this.__$FILE_READ_MODE = "file-read-mode";
            }
            return this.__$FILE_READ_MODE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "HELP_OPTION", {
        get: function () {
            if (this.__$HELP_OPTION === undefined) {
                this.__$HELP_OPTION = "help";
            }
            return this.__$HELP_OPTION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "INCREMENTAL_RESOLUTION_LOG", {
        get: function () {
            if (this.__$INCREMENTAL_RESOLUTION_LOG === undefined) {
                this.__$INCREMENTAL_RESOLUTION_LOG = "incremental-resolution-log";
            }
            return this.__$INCREMENTAL_RESOLUTION_LOG;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "INCREMENTAL_RESOLUTION_VALIDATION", {
        get: function () {
            if (this.__$INCREMENTAL_RESOLUTION_VALIDATION === undefined) {
                this.__$INCREMENTAL_RESOLUTION_VALIDATION = "incremental-resolution-validation";
            }
            return this.__$INCREMENTAL_RESOLUTION_VALIDATION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "DISABLE_NEW_ANALYSIS_DRIVER", {
        get: function () {
            if (this.__$DISABLE_NEW_ANALYSIS_DRIVER === undefined) {
                this.__$DISABLE_NEW_ANALYSIS_DRIVER = 'disable-new-analysis-driver';
            }
            return this.__$DISABLE_NEW_ANALYSIS_DRIVER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "INSTRUMENTATION_LOG_FILE", {
        get: function () {
            if (this.__$INSTRUMENTATION_LOG_FILE === undefined) {
                this.__$INSTRUMENTATION_LOG_FILE = "instrumentation-log-file";
            }
            return this.__$INSTRUMENTATION_LOG_FILE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "INTERNAL_DELAY_FREQUENCY", {
        get: function () {
            if (this.__$INTERNAL_DELAY_FREQUENCY === undefined) {
                this.__$INTERNAL_DELAY_FREQUENCY = 'internal-delay-frequency';
            }
            return this.__$INTERNAL_DELAY_FREQUENCY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "INTERNAL_PRINT_TO_CONSOLE", {
        get: function () {
            if (this.__$INTERNAL_PRINT_TO_CONSOLE === undefined) {
                this.__$INTERNAL_PRINT_TO_CONSOLE = "internal-print-to-console";
            }
            return this.__$INTERNAL_PRINT_TO_CONSOLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "NEW_ANALYSIS_DRIVER_LOG", {
        get: function () {
            if (this.__$NEW_ANALYSIS_DRIVER_LOG === undefined) {
                this.__$NEW_ANALYSIS_DRIVER_LOG = 'new-analysis-driver-log';
            }
            return this.__$NEW_ANALYSIS_DRIVER_LOG;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "VERBOSE_FLUTTER_COMPLETIONS", {
        get: function () {
            if (this.__$VERBOSE_FLUTTER_COMPLETIONS === undefined) {
                this.__$VERBOSE_FLUTTER_COMPLETIONS = 'verbose-flutter-completions';
            }
            return this.__$VERBOSE_FLUTTER_COMPLETIONS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "USE_ANALYSIS_HIGHLIGHT2", {
        get: function () {
            if (this.__$USE_ANALYSIS_HIGHLIGHT2 === undefined) {
                this.__$USE_ANALYSIS_HIGHLIGHT2 = "useAnalysisHighlight2";
            }
            return this.__$USE_ANALYSIS_HIGHLIGHT2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "PORT_OPTION", {
        get: function () {
            if (this.__$PORT_OPTION === undefined) {
                this.__$PORT_OPTION = "port";
            }
            return this.__$PORT_OPTION;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver, "SDK_OPTION", {
        get: function () {
            if (this.__$SDK_OPTION === undefined) {
                this.__$SDK_OPTION = "sdk";
            }
            return this.__$SDK_OPTION;
        },
        enumerable: true,
        configurable: true
    });
    Driver.prototype.Driver = function () {
        this.useSingleContextManager = false;
        this._userDefinedPlugins = new core.DartList.literal();
    };
    Object.defineProperty(Driver.prototype, "userDefinedPlugins", {
        set: function (plugins) {
            this._userDefinedPlugins = (plugins || new core.DartList.literal());
        },
        enumerable: true,
        configurable: true
    });
    Driver.prototype.start = function (arguments) {
        var _this = this;
        var parser = this._createArgParser();
        var results = parser.parse(arguments, new core.DartMap.literal([]));
        if (utils_1.op(utils_1.Op.INDEX, results, Driver_1.HELP_OPTION)) {
            this._printUsage(parser.parser);
            return null;
        }
        if (utils_1.op(utils_1.Op.INDEX, results, Driver_1.INTERNAL_DELAY_FREQUENCY) != null) {
            AnalysisServer.performOperationDelayFrequency = core.DartInt.parse(utils_1.op(utils_1.Op.INDEX, results, Driver_1.INTERNAL_DELAY_FREQUENCY), {
                onError: function (_) {
                    return 0;
                }
            });
        }
        var port;
        var serve_http = false;
        if (utils_1.op(utils_1.Op.INDEX, results, Driver_1.PORT_OPTION) != null) {
            try {
                port = core.DartInt.parse(utils_1.op(utils_1.Op.INDEX, results, Driver_1.PORT_OPTION));
                serve_http = true;
            }
            catch (__error__) {
                if (_common_1.is(__error__, core.FormatException)) {
                    core.print("Invalid port number: " + utils_1.op(utils_1.Op.INDEX, results, Driver_1.PORT_OPTION));
                    core.print('');
                    this._printUsage(parser.parser);
                    io.properties.exitCode = 1;
                    return null;
                }
            }
        }
        var analysisServerOptions = new bare.createInstance(any, null);
        analysisServerOptions.enableIncrementalResolutionApi = utils_1.op(utils_1.Op.INDEX, results, Driver_1.ENABLE_INCREMENTAL_RESOLUTION_API);
        analysisServerOptions.enableIncrementalResolutionValidation = utils_1.op(utils_1.Op.INDEX, results, Driver_1.INCREMENTAL_RESOLUTION_VALIDATION);
        analysisServerOptions.enableNewAnalysisDriver = !utils_1.op(utils_1.Op.INDEX, results, Driver_1.DISABLE_NEW_ANALYSIS_DRIVER);
        analysisServerOptions.useAnalysisHighlight2 = utils_1.op(utils_1.Op.INDEX, results, Driver_1.USE_ANALYSIS_HIGHLIGHT2);
        analysisServerOptions.fileReadMode = utils_1.op(utils_1.Op.INDEX, results, Driver_1.FILE_READ_MODE);
        analysisServerOptions.newAnalysisDriverLog = utils_1.op(utils_1.Op.INDEX, results, Driver_1.NEW_ANALYSIS_DRIVER_LOG);
        analysisServerOptions.enableVerboseFlutterCompletions = utils_1.op(utils_1.Op.INDEX, results, Driver_1.VERBOSE_FLUTTER_COMPLETIONS);
        exports._initIncrementalLogger(utils_1.op(utils_1.Op.INDEX, results, Driver_1.INCREMENTAL_RESOLUTION_LOG));
        var serverPlugin = new bare.createInstance(any, null);
        var plugins = new core.DartList.literal();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        plugins.add(serverPlugin);
        plugins.add(dartCompletionPlugin);
        plugins.addAll(this._userDefinedPlugins);
        var manager = new bare.createInstance(any, null);
        manager.processPlugins(plugins);
        null /*topLevl*/.registerLintRules();
        var defaultSdkPath;
        if (utils_1.op(utils_1.Op.INDEX, results, Driver_1.SDK_OPTION) != null) {
            defaultSdkPath = utils_1.op(utils_1.Op.INDEX, results, Driver_1.SDK_OPTION);
        }
        else {
            defaultSdkPath = FolderBasedDartSdk.defaultSdkDirectory(PhysicalResourceProvider.INSTANCE).path;
        }
        var useSummaries = utils_1.op(utils_1.Op.EQUALS, analysisServerOptions.fileReadMode, 'as-is') || analysisServerOptions.enableNewAnalysisDriver;
        var defaultSdk = this._createDefaultSdk(defaultSdkPath, useSummaries);
        var logFilePath = utils_1.op(utils_1.Op.INDEX, results, Driver_1.INSTRUMENTATION_LOG_FILE);
        if (logFilePath != null) {
            Driver_1._rollLogFiles(logFilePath, 5);
            var fileBasedServer = new bare.createInstance(any, null, logFilePath);
            this.instrumentationServer = this.instrumentationServer != null ? new bare.createInstance(any, null, new core.DartList.literal(this.instrumentationServer, fileBasedServer)) : fileBasedServer;
        }
        var instrumentationService = new bare.createInstance(any, null, this.instrumentationServer);
        instrumentationService.logVersion(this._readUuid(instrumentationService), utils_1.op(utils_1.Op.INDEX, results, Driver_1.CLIENT_ID), utils_1.op(utils_1.Op.INDEX, results, Driver_1.CLIENT_VERSION), AnalysisServer.VERSION, defaultSdk.sdkVersion);
        AnalysisEngine.instance.instrumentationService = instrumentationService;
        var diagnosticServer = new _DiagnosticServerImpl();
        this.socketServer = new bare.createInstance(any, null, analysisServerOptions, new bare.createInstance(any, null, defaultSdkPath, useSummaries), defaultSdk, instrumentationService, diagnosticServer, serverPlugin, this.fileResolverProvider, this.packageResolverProvider, this.useSingleContextManager);
        this.httpServer = new bare.createInstance(any, null, this.socketServer);
        this.stdioServer = new bare.createInstance(any, null, this.socketServer);
        this.socketServer.userDefinedPlugins = this._userDefinedPlugins;
        diagnosticServer.httpServer = this.httpServer;
        if (serve_http) {
            diagnosticServer.startOnPort(port);
        }
        this._captureExceptions(instrumentationService, function () {
            _this.stdioServer.serveStdio().then(function (_) { return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (serve_http) {
                                this.httpServer.close();
                            }
                            return [4 /*yield*/, instrumentationService.shutdown()];
                        case 1:
                            _a.sent();
                            io.exit(0);
                            return [2 /*return*/];
                    }
                });
            }); })()); });
        }, {
            print: utils_1.op(utils_1.Op.INDEX, results, Driver_1.INTERNAL_PRINT_TO_CONSOLE) ? null : this.httpServer.recordPrint
        });
        return this.socketServer.analysisServer;
    };
    Driver.prototype._captureExceptions = function (service, callback, _namedArguments) {
        var _this = this;
        var print = Object.assign({}, _namedArguments).print;
        var errorFunction = function (self, parent, zone, exception, stackTrace) {
            service.logPriorityException(exception, stackTrace);
            var analysisServer = _this.socketServer.analysisServer;
            analysisServer.sendServerErrorNotification('Captured exception', exception, stackTrace);
            throw exception;
        };
        var printFunction = utils_1.op(utils_1.Op.EQUALS, print, null) ? null : function (self, parent, zone, line) {
            print(line);
        };
        var zoneSpecification = new async.DartZoneSpecification({
            handleUncaughtError: errorFunction, print: printFunction
        });
        return async.runZoned(callback, {
            zoneSpecification: zoneSpecification
        });
    };
    Driver.prototype._createArgParser = function () {
        var parser = new CommandLineParser({
            alwaysIgnoreUnrecognized: true
        });
        parser.addOption(Driver_1.CLIENT_ID, {
            help: "an identifier used to identify the client"
        });
        parser.addOption(Driver_1.CLIENT_VERSION, {
            help: "the version of the client"
        });
        parser.addFlag(Driver_1.ENABLE_INCREMENTAL_RESOLUTION_API, {
            help: "enable using incremental resolution for API changes", defaultsTo: false, negatable: false
        });
        parser.addFlag(Driver_1.ENABLE_INSTRUMENTATION_OPTION, {
            help: "enable sending instrumentation information to a server", defaultsTo: false, negatable: false
        });
        parser.addFlag(Driver_1.HELP_OPTION, {
            help: "print this help message without starting a server", defaultsTo: false, negatable: false
        });
        parser.addOption(Driver_1.INCREMENTAL_RESOLUTION_LOG, {
            help: "set a destination for the incremental resolver's log"
        });
        parser.addFlag(Driver_1.INCREMENTAL_RESOLUTION_VALIDATION, {
            help: "enable validation of incremental resolution results (slow)", defaultsTo: false, negatable: false
        });
        parser.addFlag(Driver_1.DISABLE_NEW_ANALYSIS_DRIVER, {
            help: "disable using new analysis driver", defaultsTo: false, negatable: false
        });
        parser.addOption(Driver_1.INSTRUMENTATION_LOG_FILE, {
            help: "the path of the file to which instrumentation data will be written"
        });
        parser.addFlag(Driver_1.INTERNAL_PRINT_TO_CONSOLE, {
            help: "enable sending `print` output to the console", defaultsTo: false, negatable: false
        });
        parser.addOption(Driver_1.NEW_ANALYSIS_DRIVER_LOG, {
            help: "set a destination for the new analysis driver's log"
        });
        parser.addFlag(Driver_1.VERBOSE_FLUTTER_COMPLETIONS, {
            help: "enable verbose code completion for Flutter (experimental)"
        });
        parser.addOption(Driver_1.PORT_OPTION, {
            help: "the http diagnostic port on which the server provides" + " status and performance information"
        });
        parser.addOption(Driver_1.INTERNAL_DELAY_FREQUENCY);
        parser.addOption(Driver_1.SDK_OPTION, {
            help: "[path] the path to the sdk"
        });
        parser.addFlag(Driver_1.USE_ANALYSIS_HIGHLIGHT2, {
            help: "enable version 2 of semantic highlight", defaultsTo: false, negatable: false
        });
        parser.addOption(Driver_1.FILE_READ_MODE, {
            help: "an option for reading files (some clients normalize eol " + "characters, which make the file offset and range information " + "incorrect)", allowed: new core.DartList.literal("as-is", "normalize-eol-always"), allowedHelp: new core.DartMap.literal([
                ["as-is", "file contents are read as-is"],
                ["normalize-eol-always", "eol characters normalized to the single character new line ('\n')"]
            ]), defaultsTo: "as-is"
        });
        return parser;
    };
    Driver.prototype._createDefaultSdk = function (defaultSdkPath, useSummaries) {
        var resourceProvider = PhysicalResourceProvider.INSTANCE;
        var sdk = new bare.createInstance(any, null, resourceProvider, resourceProvider.getFolder(defaultSdkPath));
        sdk.useSummary = useSummaries;
        return sdk;
    };
    Driver.prototype._printUsage = function (parser) {
        core.print("Usage: " + Driver_1.BINARY_NAME + " [flags]");
        core.print('');
        core.print('Supported flags are:');
        core.print(parser.usage);
    };
    Driver.prototype._readUuid = function (service) {
        var uuidFile = new io.File(PhysicalResourceProvider.INSTANCE.getStateLocation('.instrumentation').getChild('uuid.txt').path);
        try {
            if (uuidFile.existsSync()) {
                var uuid_1 = uuidFile.readAsStringSync();
                if (uuid_1 != null && new core.DartString(uuid_1).length > 5) {
                    return uuid_1;
                }
            }
        }
        catch (__error__) {
            {
                var stackTrace = new core.DartStackTrace.fromError(__error__);
                var exception = __error__;
                service.logPriorityException(exception, stackTrace);
            }
        }
        var millisecondsSinceEpoch = new core.DartDateTime.now().millisecondsSinceEpoch;
        var random = new math.Random().nextInt(1073741823);
        var uuid = "" + millisecondsSinceEpoch + random;
        try {
            uuidFile.parent.createSync({
                recursive: true
            });
            uuidFile.writeAsStringSync(uuid);
        }
        catch (__error__) {
            {
                var stackTrace = new core.DartStackTrace.fromError(__error__);
                var exception = __error__;
                service.logPriorityException(exception, stackTrace);
                uuid = "temp-" + uuid;
            }
        }
        return uuid;
    };
    Driver._rollLogFiles = function (path, numOld) {
        for (var i = numOld - 1; i >= 0; i--) {
            try {
                var oldPath = i == 0 ? path : path + "." + i;
                new io.File(oldPath).renameSync(path + "." + (i + 1));
            }
            catch (__error__) {
                {
                    var e = __error__;
                }
            }
        }
    };
    var Driver_1;
    __decorate([
        utils_1.defaultConstructor
    ], Driver.prototype, "Driver", null);
    Driver = Driver_1 = __decorate([
        utils_1.DartClass,
        utils_1.Implements(any)
    ], Driver);
    return Driver;
}());
exports.Driver = Driver;
var _DiagnosticServerImpl = /** @class */ (function (_super) {
    __extends(_DiagnosticServerImpl, _super);
    function _DiagnosticServerImpl() {
        var _this = this;
        return _this;
    }
    _DiagnosticServerImpl.prototype._DiagnosticServerImpl = function () {
    };
    _DiagnosticServerImpl.prototype.getServerPort = function () {
        return this.httpServer.serveHttp();
    };
    _DiagnosticServerImpl.prototype.startOnPort = function (port) {
        return this.httpServer.serveHttp(port);
    };
    __decorate([
        utils_1.defaultConstructor
    ], _DiagnosticServerImpl.prototype, "_DiagnosticServerImpl", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], _DiagnosticServerImpl.prototype, "getServerPort", null);
    _DiagnosticServerImpl = __decorate([
        utils_1.DartClass
    ], _DiagnosticServerImpl);
    return _DiagnosticServerImpl;
}(any));
exports._DiagnosticServerImpl = _DiagnosticServerImpl;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=driver.js.map