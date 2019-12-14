"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("@dart2ts/dart/core");
var io = require("@dart2ts/dart/io");
var lib4 = require("@dart2ts.packages/path/lib/path");
var lib5 = require("./main");
exports.main = function (args) {
    if (args.length < 3)
        exports.printHelp('Expected 3 arguments');
    var gitDir = new io.Directory(args[0]);
    if (!gitDir.existsSync())
        exports.printHelp(gitDir.path + " does not exist");
    if (!new io.Directory(lib4.join(gitDir.path, '.git')).existsSync())
        exports.printHelp(gitDir.path + " does not appear to be a local git repository");
    var branch = args[1];
    var inputFile = new io.File(args[2]);
    if (!inputFile.existsSync())
        exports.printHelp(inputFile.path + " does not exist");
    var tmpDir = new io.Directory(lib4.join(io.Directory.systemTemp.path, 'analysis_server_perf_target'));
    if (!new core.DartString(tmpDir.path).contains('tmp'))
        throw "invalid tmp directory\n  " + tmpDir;
    core.print("Extracting target analysis environment into\n  " + tmpDir.path);
    if (tmpDir.existsSync())
        tmpDir.deleteSync({
            recursive: true
        });
    tmpDir.createSync({
        recursive: true
    });
    var tarFilePath = lib4.join(tmpDir.path, 'targetSrc.tar');
    var result = io.Process.runSync('git', new core.DartList.literal('archive', branch, '-o', tarFilePath), {
        workingDirectory: gitDir.path
    });
    if (result.exitCode != 0)
        throw "failed to obtain target source: " + result;
    var tmpSrcDirPath = lib4.join(tmpDir.path, 'targetSrc');
    new io.Directory(tmpSrcDirPath).createSync();
    result = io.Process.runSync('tar', new core.DartList.literal('-xf', tarFilePath), {
        workingDirectory: tmpSrcDirPath
    });
    if (result.exitCode != 0)
        throw "failed to extract target source: " + result;
    var outDirName = 'out';
    if (!new io.Directory(lib4.join(gitDir.path, outDirName)).existsSync()) {
        outDirName = 'xcodebuild';
    }
    if (!new io.Directory(lib4.join(gitDir.path, outDirName)).existsSync()) {
        throw 'failed to find out or xcodebuild directory';
    }
    result = io.Process.runSync('ln', new core.DartList.literal('-s', lib4.join(gitDir.path, outDirName), lib4.join(tmpSrcDirPath, outDirName)));
    if (result.exitCode != 0)
        throw "failed to link out or xcodebuild: " + result;
    var perfArgs = new core.DartList.literal("-i" + inputFile.path, "-t" + tmpSrcDirPath);
    for (var index = 3; index < args.length; ++index) {
        perfArgs.add(new core.DartString(args[index]).replaceAll('@tmpSrcDir@', tmpSrcDirPath));
    }
    perfArgs.add("-m" + gitDir.path + "," + tmpSrcDirPath);
    lib5.main(perfArgs);
};
exports.printHelp = function (errMsg) {
    if (errMsg != null) {
        core.print('');
        core.print("Error: " + errMsg);
        core.print('');
    }
    core.print('Required arguments: <gitDir> <branch> <inputFile>);
};
ngitDir = a;
path;
to;
the;
git;
repository;
containing;
the;
initial;
target;
source;
nbranch = the;
branch;
containing;
the;
initial;
target;
source;
ninputFile = the;
instrumentation;
or;
log;
file;
n;
nOptional;
arguments: ');;
core.print(lib5.properties.argParser.usage);
io.exit(1);
;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=local_runner.js.map