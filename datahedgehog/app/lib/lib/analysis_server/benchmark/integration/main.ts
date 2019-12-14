/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/main.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./driver";
import * as lib4 from "./operation";
import * as io from "@dart2ts/dart/io";
import * as lib6 from "./input_converter";
import * as convert from "@dart2ts/dart/convert";
import * as lib8 from "@dart2ts.packages/path/lib/path";

export var main : (rawArgs : core.DartList<string>) => any = (rawArgs : core.DartList<string>) =>  {
    let logger : any = new bare.createInstance(any,null,'Performance Measurement Client');
    logger.onRecord.listen((rec : any) =>  {
        core.print(rec.message);
    });
    let args : PerfArgs = parseArgs(rawArgs);
    let driver : lib3.Driver = new lib3.Driver({
        diagnosticPort : args.diagnosticPort});
    let stream : async.DartStream<lib4.Operation> = openInput(args);
    let subscription : async.DartStreamSubscription<lib4.Operation>;
    subscription = stream.listen((op : lib4.Operation) =>  {
        let future : async.Future<any> = driver.perform(op);
        if (future != null) {
            logger.log(Level.FINE,`pausing operations for ${op.runtimeType}`);
            subscription.pause(future.then((_ : any) =>  {
                logger.log(Level.FINE,'resuming operations');
            }));
        }
    },{
        onDone : () =>  {
            subscription.cancel();
            driver.stopServer(properties.SHUTDOWN_TIMEOUT);
        },onError : (e : any,s : any) =>  {
            subscription.cancel();
            logger.log(Level.SEVERE,`${e}\n${s}`);
            driver.stopServer(properties.SHUTDOWN_TIMEOUT);
        }});
    driver.runComplete.then((results : lib3.Results) =>  {
        results.printResults();
    }).whenComplete(() =>  {
        return subscription.cancel();
    });
};
export var openInput : (args : PerfArgs) => async.DartStream<lib4.Operation> = (args : PerfArgs) : async.DartStream<lib4.Operation> =>  {
    let logger = new bare.createInstance(any,null,'openInput');
    let inputRaw : async.DartStream<core.DartList<number>>;
    if (args.inputPath == 'stdin') {
        inputRaw = io.properties.stdin;
    }else {
        inputRaw = new io.File(args.inputPath).openRead();
    }
    for(let entry of args.srcPathMap.entries) {
        logger.log(Level.INFO,'mapping source path\n' + `  from ${entry.oldSrcPrefix}\n  to   ${entry.newSrcPrefix}`);
    }
    logger.log(Level.INFO,`tmpSrcDir: ${args.tmpSrcDirPath}`);
    return inputRaw.transform(io.properties.SYSTEM_ENCODING.decoder).transform(new convert.LineSplitter()).transform(new lib6.InputConverter(args.tmpSrcDirPath,args.srcPathMap));
};
export var parseArgs : (rawArgs : core.DartList<string>) => PerfArgs = (rawArgs : core.DartList<string>) : PerfArgs =>  {
    let args : any;
    let perfArgs : PerfArgs = new PerfArgs();
    try {
        args = properties.argParser.parse(rawArgs);
    } catch (__error__) {

        if (is(__error__,core.Exception)){
            let e : core.Exception = __error__;
            core.print(e);
            printHelp();
            io.exit(1);
        }
    }
    let showHelp : boolean = op(Op.INDEX,args,properties.HELP_CMDLINE_OPTION) || args.rest.isNotEmpty;
    var isMissing : (key : any) => boolean = (key : any) : boolean =>  {
        return op(Op.EQUALS,op(Op.INDEX,args,key),null) || op(Op.INDEX,args,key).isEmpty;
    };
    perfArgs.inputPath = op(Op.INDEX,args,properties.INPUT_CMDLINE_OPTION);
    if (isMissing(properties.INPUT_CMDLINE_OPTION)) {
        core.print(`missing ${properties.INPUT_CMDLINE_OPTION} argument`);
        showHelp = true;
    }
    for(let pair of op(Op.INDEX,args,properties.MAP_OPTION)) {
        if (is(pair, "string")) {
            let index : number = new core.DartString(pair).indexOf(',');
            if (index != -1 && new core.DartString(pair).indexOf(',',index + 1) == -1) {
                let oldSrcPrefix : string = _withTrailingSeparator(new core.DartString(pair).substring(0,index));
                let newSrcPrefix : string = _withTrailingSeparator(new core.DartString(pair).substring(index + 1));
                if (new io.Directory(newSrcPrefix).existsSync()) {
                    perfArgs.srcPathMap.add(oldSrcPrefix,newSrcPrefix);
                    continue;
                }
            }
        }
        core.print(`must specifiy ${properties.MAP_OPTION} <oldSrcPath>,<newSrcPath>`);
        showHelp = true;
    }
    perfArgs.tmpSrcDirPath = _withTrailingSeparator(op(Op.INDEX,args,properties.TMP_SRC_DIR_OPTION));
    if (isMissing(properties.TMP_SRC_DIR_OPTION)) {
        core.print(`missing ${properties.TMP_SRC_DIR_OPTION} argument`);
        showHelp = true;
    }
    let portText : string = op(Op.INDEX,args,properties.DIAGNOSTIC_PORT_OPTION);
    if (portText != null) {
        perfArgs.diagnosticPort = core.DartInt.parse(portText,{
            onError : (s : any) =>  {
                core.print(`invalid ${properties.DIAGNOSTIC_PORT_OPTION}: ${s}`);
                showHelp = true;
            }});
    }
    if (op(Op.INDEX,args,properties.VERY_VERBOSE_CMDLINE_OPTION) || rawArgs.contains('-vv')) {
        Logger.root.level = Level.FINE;
    }else if (op(Op.INDEX,args,properties.VERBOSE_CMDLINE_OPTION)) {
        Logger.root.level = Level.INFO;
    }else {
        Logger.root.level = Level.WARNING;
    }
    if (showHelp) {
        printHelp();
        io.exit(1);
    }
    return perfArgs;
};
export var printHelp : () => void = () : void =>  {
    core.print('');
    core.print('Launch and interact with the AnalysisServer');
    core.print('');
    core.print(properties.argParser.usage);
};
export var _withTrailingSeparator : (dirPath : string) => string = (dirPath : string) : string =>  {
    if (dirPath != null && new core.DartString(dirPath).length > 4) {
        if (!new core.DartString(dirPath).endsWith(lib8.properties.separator)) {
            return `${dirPath}${lib8.properties.separator}`;
        }
    }
    return dirPath;
};
export namespace PerfArgs {
    export type Constructors = 'PerfArgs';
    export type Interface = Omit<PerfArgs, Constructors>;
}
@DartClass
export class PerfArgs {
    inputPath : string;

    srcPathMap : lib6.PathMap;

    tmpSrcDirPath : string;

    diagnosticPort : number;

    constructor() {
    }
    @defaultConstructor
    PerfArgs() {
        this.srcPathMap = new lib6.PathMap();
    }
}

export class properties {
    private static __$DIAGNOSTIC_PORT_OPTION;
    static get DIAGNOSTIC_PORT_OPTION() { 
        if (this.__$DIAGNOSTIC_PORT_OPTION===undefined) {
            this.__$DIAGNOSTIC_PORT_OPTION = 'diagnosticPort';
        }
        return this.__$DIAGNOSTIC_PORT_OPTION;
    }
    static set DIAGNOSTIC_PORT_OPTION(__$value : any)  { 
        this.__$DIAGNOSTIC_PORT_OPTION = __$value;
    }

    private static __$HELP_CMDLINE_OPTION;
    static get HELP_CMDLINE_OPTION() { 
        if (this.__$HELP_CMDLINE_OPTION===undefined) {
            this.__$HELP_CMDLINE_OPTION = 'help';
        }
        return this.__$HELP_CMDLINE_OPTION;
    }
    static set HELP_CMDLINE_OPTION(__$value : any)  { 
        this.__$HELP_CMDLINE_OPTION = __$value;
    }

    private static __$INPUT_CMDLINE_OPTION;
    static get INPUT_CMDLINE_OPTION() { 
        if (this.__$INPUT_CMDLINE_OPTION===undefined) {
            this.__$INPUT_CMDLINE_OPTION = 'input';
        }
        return this.__$INPUT_CMDLINE_OPTION;
    }
    static set INPUT_CMDLINE_OPTION(__$value : any)  { 
        this.__$INPUT_CMDLINE_OPTION = __$value;
    }

    private static __$MAP_OPTION;
    static get MAP_OPTION() { 
        if (this.__$MAP_OPTION===undefined) {
            this.__$MAP_OPTION = 'map';
        }
        return this.__$MAP_OPTION;
    }
    static set MAP_OPTION(__$value : any)  { 
        this.__$MAP_OPTION = __$value;
    }

    private static __$SHUTDOWN_TIMEOUT : core.DartDuration;
    static get SHUTDOWN_TIMEOUT() : core.DartDuration { 
        if (this.__$SHUTDOWN_TIMEOUT===undefined) {
            this.__$SHUTDOWN_TIMEOUT = new core.DartDuration({
                seconds : 25});
        }
        return this.__$SHUTDOWN_TIMEOUT;
    }
    static set SHUTDOWN_TIMEOUT(__$value : core.DartDuration)  { 
        this.__$SHUTDOWN_TIMEOUT = __$value;
    }

    private static __$TMP_SRC_DIR_OPTION;
    static get TMP_SRC_DIR_OPTION() { 
        if (this.__$TMP_SRC_DIR_OPTION===undefined) {
            this.__$TMP_SRC_DIR_OPTION = 'tmpSrcDir';
        }
        return this.__$TMP_SRC_DIR_OPTION;
    }
    static set TMP_SRC_DIR_OPTION(__$value : any)  { 
        this.__$TMP_SRC_DIR_OPTION = __$value;
    }

    private static __$VERBOSE_CMDLINE_OPTION;
    static get VERBOSE_CMDLINE_OPTION() { 
        if (this.__$VERBOSE_CMDLINE_OPTION===undefined) {
            this.__$VERBOSE_CMDLINE_OPTION = 'verbose';
        }
        return this.__$VERBOSE_CMDLINE_OPTION;
    }
    static set VERBOSE_CMDLINE_OPTION(__$value : any)  { 
        this.__$VERBOSE_CMDLINE_OPTION = __$value;
    }

    private static __$VERY_VERBOSE_CMDLINE_OPTION;
    static get VERY_VERBOSE_CMDLINE_OPTION() { 
        if (this.__$VERY_VERBOSE_CMDLINE_OPTION===undefined) {
            this.__$VERY_VERBOSE_CMDLINE_OPTION = 'vv';
        }
        return this.__$VERY_VERBOSE_CMDLINE_OPTION;
    }
    static set VERY_VERBOSE_CMDLINE_OPTION(__$value : any)  { 
        this.__$VERY_VERBOSE_CMDLINE_OPTION = __$value;
    }

    private static __$_argParser : any;
    static get _argParser() : any { 
        return this.__$_argParser;
    }
    static set _argParser(__$value : any)  { 
        this.__$_argParser = __$value;
    }

    static get argParser() : any {
        properties._argParser = new bare.createInstance(any,null);
        properties._argParser.addOption(properties.INPUT_CMDLINE_OPTION,{
            abbr : 'i',help : '<filePath>\n' + 'The input file specifying how this client should interact with the server.\n' + 'If the input file name is "stdin", then the instructions are read from standard input.'});
        properties._argParser.addOption(properties.MAP_OPTION,{
            abbr : 'm',allowMultiple : true,splitCommas : false,help : '<oldSrcPath>,<newSrcPath>\n' + 'This option defines a mapping from the original source directory <oldSrcPath>\n' + 'when the instrumentation or log file was generated\n' + 'to the target source directory <newSrcPath> used during performance testing.\n' + 'Multiple mappings can be specified.\n' + 'WARNING: The contents of the target directory will be modified'});
        properties._argParser.addOption(properties.TMP_SRC_DIR_OPTION,{
            abbr : 't',help : '<dirPath>\n' + 'The temporary directory containing source used during performance measurement.\n' + 'WARNING: The contents of the target directory will be modified'});
        properties._argParser.addOption(properties.DIAGNOSTIC_PORT_OPTION,{
            abbr : 'd',help : 'localhost port on which server will provide diagnostic web pages'});
        properties._argParser.addFlag(properties.VERBOSE_CMDLINE_OPTION,{
            abbr : 'v',help : 'Verbose logging',negatable : false});
        properties._argParser.addFlag(properties.VERY_VERBOSE_CMDLINE_OPTION,{
            help : 'Extra verbose logging',negatable : false});
        properties._argParser.addFlag(properties.HELP_CMDLINE_OPTION,{
            abbr : 'h',help : 'Print this help information',negatable : false});
        return properties._argParser;
    }
}
