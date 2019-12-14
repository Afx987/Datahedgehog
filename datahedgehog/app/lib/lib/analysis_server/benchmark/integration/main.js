"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/main.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var lib3 = require("./driver");
var io = require("@dart2ts/dart/io");
var lib6 = require("./input_converter");
var convert = require("@dart2ts/dart/convert");
var lib8 = require("@dart2ts.packages/path/lib/path");
exports.main = function (rawArgs) {
    var logger = new bare.createInstance(any, null, 'Performance Measurement Client');
    logger.onRecord.listen(function (rec) {
        core.print(rec.message);
    });
    var args = exports.parseArgs(rawArgs);
    var driver = new lib3.Driver({
        diagnosticPort: args.diagnosticPort
    });
    var stream = exports.openInput(args);
    var subscription;
    subscription = stream.listen(function (op) {
        var future = driver.perform(op);
        if (future != null) {
            logger.log(Level.FINE, "pausing operations for " + op.runtimeType);
            subscription.pause(future.then(function (_) {
                logger.log(Level.FINE, 'resuming operations');
            }));
        }
    }, {
        onDone: function () {
            subscription.cancel();
            driver.stopServer(properties.SHUTDOWN_TIMEOUT);
        }, onError: function (e, s) {
            subscription.cancel();
            logger.log(Level.SEVERE, e + "\n" + s);
            driver.stopServer(properties.SHUTDOWN_TIMEOUT);
        }
    });
    driver.runComplete.then(function (results) {
        results.printResults();
    }).whenComplete(function () {
        return subscription.cancel();
    });
};
exports.openInput = function (args) {
    var logger = new bare.createInstance(any, null, 'openInput');
    var inputRaw;
    if (args.inputPath == 'stdin') {
        inputRaw = io.properties.stdin;
    }
    else {
        inputRaw = new io.File(args.inputPath).openRead();
    }
    for (var _i = 0, _a = args.srcPathMap.entries; _i < _a.length; _i++) {
        var entry = _a[_i];
        logger.log(Level.INFO, 'mapping source path\n' + ("  from " + entry.oldSrcPrefix + "\n  to   " + entry.newSrcPrefix));
    }
    logger.log(Level.INFO, "tmpSrcDir: " + args.tmpSrcDirPath);
    return inputRaw.transform(io.properties.SYSTEM_ENCODING.decoder).transform(new convert.LineSplitter()).transform(new lib6.InputConverter(args.tmpSrcDirPath, args.srcPathMap));
};
exports.parseArgs = function (rawArgs) {
    var args;
    var perfArgs = new PerfArgs();
    try {
        args = properties.argParser.parse(rawArgs);
    }
    catch (__error__) {
        if (_common_1.is(__error__, core.Exception)) {
            var e = __error__;
            core.print(e);
            exports.printHelp();
            io.exit(1);
        }
    }
    var showHelp = utils_1.op(utils_1.Op.INDEX, args, properties.HELP_CMDLINE_OPTION) || args.rest.isNotEmpty;
    var isMissing = function (key) {
        return utils_1.op(utils_1.Op.EQUALS, utils_1.op(utils_1.Op.INDEX, args, key), null) || utils_1.op(utils_1.Op.INDEX, args, key).isEmpty;
    };
    perfArgs.inputPath = utils_1.op(utils_1.Op.INDEX, args, properties.INPUT_CMDLINE_OPTION);
    if (isMissing(properties.INPUT_CMDLINE_OPTION)) {
        core.print("missing " + properties.INPUT_CMDLINE_OPTION + " argument");
        showHelp = true;
    }
    for (var _i = 0, _a = utils_1.op(utils_1.Op.INDEX, args, properties.MAP_OPTION); _i < _a.length; _i++) {
        var pair = _a[_i];
        if (_common_1.is(pair, "string")) {
            var index = new core.DartString(pair).indexOf(',');
            if (index != -1 && new core.DartString(pair).indexOf(',', index + 1) == -1) {
                var oldSrcPrefix = exports._withTrailingSeparator(new core.DartString(pair).substring(0, index));
                var newSrcPrefix = exports._withTrailingSeparator(new core.DartString(pair).substring(index + 1));
                if (new io.Directory(newSrcPrefix).existsSync()) {
                    perfArgs.srcPathMap.add(oldSrcPrefix, newSrcPrefix);
                    continue;
                }
            }
        }
        core.print("must specifiy " + properties.MAP_OPTION + " <oldSrcPath>,<newSrcPath>");
        showHelp = true;
    }
    perfArgs.tmpSrcDirPath = exports._withTrailingSeparator(utils_1.op(utils_1.Op.INDEX, args, properties.TMP_SRC_DIR_OPTION));
    if (isMissing(properties.TMP_SRC_DIR_OPTION)) {
        core.print("missing " + properties.TMP_SRC_DIR_OPTION + " argument");
        showHelp = true;
    }
    var portText = utils_1.op(utils_1.Op.INDEX, args, properties.DIAGNOSTIC_PORT_OPTION);
    if (portText != null) {
        perfArgs.diagnosticPort = core.DartInt.parse(portText, {
            onError: function (s) {
                core.print("invalid " + properties.DIAGNOSTIC_PORT_OPTION + ": " + s);
                showHelp = true;
            }
        });
    }
    if (utils_1.op(utils_1.Op.INDEX, args, properties.VERY_VERBOSE_CMDLINE_OPTION) || rawArgs.contains('-vv')) {
        Logger.root.level = Level.FINE;
    }
    else if (utils_1.op(utils_1.Op.INDEX, args, properties.VERBOSE_CMDLINE_OPTION)) {
        Logger.root.level = Level.INFO;
    }
    else {
        Logger.root.level = Level.WARNING;
    }
    if (showHelp) {
        exports.printHelp();
        io.exit(1);
    }
    return perfArgs;
};
exports.printHelp = function () {
    core.print('');
    core.print('Launch and interact with the AnalysisServer');
    core.print('');
    core.print(properties.argParser.usage);
};
exports._withTrailingSeparator = function (dirPath) {
    if (dirPath != null && new core.DartString(dirPath).length > 4) {
        if (!new core.DartString(dirPath).endsWith(lib8.properties.separator)) {
            return "" + dirPath + lib8.properties.separator;
        }
    }
    return dirPath;
};
var PerfArgs = /** @class */ (function () {
    function PerfArgs() {
    }
    PerfArgs.prototype.PerfArgs = function () {
        this.srcPathMap = new lib6.PathMap();
    };
    __decorate([
        utils_1.defaultConstructor
    ], PerfArgs.prototype, "PerfArgs", null);
    PerfArgs = __decorate([
        utils_1.DartClass
    ], PerfArgs);
    return PerfArgs;
}());
exports.PerfArgs = PerfArgs;
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "DIAGNOSTIC_PORT_OPTION", {
        get: function () {
            if (this.__$DIAGNOSTIC_PORT_OPTION === undefined) {
                this.__$DIAGNOSTIC_PORT_OPTION = 'diagnosticPort';
            }
            return this.__$DIAGNOSTIC_PORT_OPTION;
        },
        set: function (__$value) {
            this.__$DIAGNOSTIC_PORT_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "HELP_CMDLINE_OPTION", {
        get: function () {
            if (this.__$HELP_CMDLINE_OPTION === undefined) {
                this.__$HELP_CMDLINE_OPTION = 'help';
            }
            return this.__$HELP_CMDLINE_OPTION;
        },
        set: function (__$value) {
            this.__$HELP_CMDLINE_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "INPUT_CMDLINE_OPTION", {
        get: function () {
            if (this.__$INPUT_CMDLINE_OPTION === undefined) {
                this.__$INPUT_CMDLINE_OPTION = 'input';
            }
            return this.__$INPUT_CMDLINE_OPTION;
        },
        set: function (__$value) {
            this.__$INPUT_CMDLINE_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "MAP_OPTION", {
        get: function () {
            if (this.__$MAP_OPTION === undefined) {
                this.__$MAP_OPTION = 'map';
            }
            return this.__$MAP_OPTION;
        },
        set: function (__$value) {
            this.__$MAP_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "SHUTDOWN_TIMEOUT", {
        get: function () {
            if (this.__$SHUTDOWN_TIMEOUT === undefined) {
                this.__$SHUTDOWN_TIMEOUT = new core.DartDuration({
                    seconds: 25
                });
            }
            return this.__$SHUTDOWN_TIMEOUT;
        },
        set: function (__$value) {
            this.__$SHUTDOWN_TIMEOUT = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "TMP_SRC_DIR_OPTION", {
        get: function () {
            if (this.__$TMP_SRC_DIR_OPTION === undefined) {
                this.__$TMP_SRC_DIR_OPTION = 'tmpSrcDir';
            }
            return this.__$TMP_SRC_DIR_OPTION;
        },
        set: function (__$value) {
            this.__$TMP_SRC_DIR_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "VERBOSE_CMDLINE_OPTION", {
        get: function () {
            if (this.__$VERBOSE_CMDLINE_OPTION === undefined) {
                this.__$VERBOSE_CMDLINE_OPTION = 'verbose';
            }
            return this.__$VERBOSE_CMDLINE_OPTION;
        },
        set: function (__$value) {
            this.__$VERBOSE_CMDLINE_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "VERY_VERBOSE_CMDLINE_OPTION", {
        get: function () {
            if (this.__$VERY_VERBOSE_CMDLINE_OPTION === undefined) {
                this.__$VERY_VERBOSE_CMDLINE_OPTION = 'vv';
            }
            return this.__$VERY_VERBOSE_CMDLINE_OPTION;
        },
        set: function (__$value) {
            this.__$VERY_VERBOSE_CMDLINE_OPTION = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "_argParser", {
        get: function () {
            return this.__$_argParser;
        },
        set: function (__$value) {
            this.__$_argParser = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "argParser", {
        get: function () {
            properties._argParser = new bare.createInstance(any, null);
            properties._argParser.addOption(properties.INPUT_CMDLINE_OPTION, {
                abbr: 'i', help: '<filePath>\n' + 'The input file specifying how this client should interact with the server.\n' + 'If the input file name is "stdin", then the instructions are read from standard input.'
            });
            properties._argParser.addOption(properties.MAP_OPTION, {
                abbr: 'm', allowMultiple: true, splitCommas: false, help: '<oldSrcPath>,<newSrcPath>\n' + 'This option defines a mapping from the original source directory <oldSrcPath>\n' + 'when the instrumentation or log file was generated\n' + 'to the target source directory <newSrcPath> used during performance testing.\n' + 'Multiple mappings can be specified.\n' + 'WARNING: The contents of the target directory will be modified'
            });
            properties._argParser.addOption(properties.TMP_SRC_DIR_OPTION, {
                abbr: 't', help: '<dirPath>\n' + 'The temporary directory containing source used during performance measurement.\n' + 'WARNING: The contents of the target directory will be modified'
            });
            properties._argParser.addOption(properties.DIAGNOSTIC_PORT_OPTION, {
                abbr: 'd', help: 'localhost port on which server will provide diagnostic web pages'
            });
            properties._argParser.addFlag(properties.VERBOSE_CMDLINE_OPTION, {
                abbr: 'v', help: 'Verbose logging', negatable: false
            });
            properties._argParser.addFlag(properties.VERY_VERBOSE_CMDLINE_OPTION, {
                help: 'Extra verbose logging', negatable: false
            });
            properties._argParser.addFlag(properties.HELP_CMDLINE_OPTION, {
                abbr: 'h', help: 'Print this help information', negatable: false
            });
            return properties._argParser;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=main.js.map