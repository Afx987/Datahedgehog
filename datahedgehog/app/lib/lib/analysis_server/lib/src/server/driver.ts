/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/server/driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as math from "@dart2ts/dart/math";

export var _initIncrementalLogger : (spec : string) => void = (spec : string) : void =>  {
    logger = NULL_LOGGER;
    if (spec == null) {
        return;
    }
    if (spec == 'console') {
        logger = new bare.createInstance(any,null,io.properties.stdout);
    }else if (spec == 'stderr') {
        logger = new bare.createInstance(any,null,io.properties.stderr);
    }else if (new core.DartString(spec).startsWith('file:')) {
        let fileName : string = new core.DartString(spec).substring(new core.DartString('file:').length);
        let file : io.File = new io.File(fileName);
        let sink : io.IOSink = file.openWrite();
        logger = new bare.createInstance(any,null,sink);
    }
};
export namespace CommandLineParser {
    export type Constructors = 'CommandLineParser';
    export type Interface = Omit<CommandLineParser, Constructors>;
}
@DartClass
export class CommandLineParser {
    _knownFlags : core.DartList<string>;

    _alwaysIgnoreUnrecognized : boolean;

    _parser : any;

    constructor(_namedArguments? : {alwaysIgnoreUnrecognized? : boolean}) {
    }
    @defaultConstructor
    CommandLineParser(_namedArguments? : {alwaysIgnoreUnrecognized? : boolean}) {
        let {alwaysIgnoreUnrecognized} = Object.assign({
            "alwaysIgnoreUnrecognized" : false}, _namedArguments );
        this._knownFlags = new core.DartList.literal<string>();
        this._alwaysIgnoreUnrecognized = alwaysIgnoreUnrecognized;
        this._parser = new bare.createInstance(any,null,{
            allowTrailingOptions : true});
    }
    get parser() : any {
        return this._parser;
    }
    addFlag(name : string,_namedArguments? : {abbr? : string,help? : string,defaultsTo? : boolean,negatable? : boolean,callback? : (value : boolean) => void,hide? : boolean}) : void {
        let {abbr,help,defaultsTo,negatable,callback,hide} = Object.assign({
            "defaultsTo" : false,
            "negatable" : true,
            "hide" : false}, _namedArguments );
        this._knownFlags.add(name);
        this._parser.addFlag(name,{
            abbr : abbr,help : help,defaultsTo : defaultsTo,negatable : negatable,callback : callback,hide : hide});
    }
    addOption(name : string,_namedArguments? : {abbr? : string,help? : string,allowed? : core.DartList<string>,allowedHelp? : core.DartMap<string,string>,defaultsTo? : string,callback? : (value : any) => void,allowMultiple? : boolean}) : void {
        let {abbr,help,allowed,allowedHelp,defaultsTo,callback,allowMultiple} = Object.assign({
            "allowMultiple" : false}, _namedArguments );
        this._knownFlags.add(name);
        this._parser.addOption(name,{
            abbr : abbr,help : help,allowed : allowed,allowedHelp : allowedHelp,defaultsTo : defaultsTo,callback : callback,allowMultiple : allowMultiple});
    }
    getUsage() : string {
        return this._parser.usage;
    }
    parse(args : core.DartList<string>,definedVariables : core.DartMap<string,string>) : any {
        return this._parser.parse(this._filterUnknowns(this.parseDefinedVariables(args,definedVariables)));
    }
    parseDefinedVariables(args : core.DartList<string>,definedVariables : core.DartMap<string,string>) : core.DartList<string> {
        let count : number = args.length;
        let remainingArgs : core.DartList<string> = new core.DartList.literal<string>();
        for(let i : number = 0; i < count; i++){
            let arg : string = args[i];
            if (arg == '--') {
                while (i < count){
                    remainingArgs.add(args[i++]);
                }
            }else if (new core.DartString(arg).startsWith("-D")) {
                definedVariables.set(new core.DartString(arg).substring(2),args[++i]);
            }else {
                remainingArgs.add(arg);
            }
        }
        return remainingArgs;
    }
    _filterUnknowns(args : core.DartList<string>) : core.DartList<string> {
        if (this._alwaysIgnoreUnrecognized || args.contains('--ignore-unrecognized-flags')) {
            let filtered : core.DartList<string> = new core.DartList.literal<string>();
            for(let i : number = 0; i < args.length; ++i){
                let arg : string = args[i];
                if (new core.DartString(arg).startsWith('--') && new core.DartString(arg).length > 2) {
                    let option : string = new core.DartString(arg).substring(2);
                    let equalsOffset : number = new core.DartString(option).lastIndexOf('=');
                    if (equalsOffset != -1) {
                        option = new core.DartString(option).substring(0,equalsOffset);
                    }
                    if (!this._knownFlags.contains(option)) {
                        i = this._getNextFlagIndex(args,i);
                    }else {
                        filtered.add(arg);
                    }
                }else {
                    filtered.add(arg);
                }
            }
            return filtered;
        }else {
            return args;
        }
    }
    _getNextFlagIndex(args : any,i : any) {
        for(; op(Op.LT,i,args.length); ++i){
            if (op(Op.INDEX,args,i).startsWith('--')) {
                return i;
            }
        }
        return i;
    }
}

export namespace Driver {
    export type Constructors = 'Driver';
    export type Interface = Omit<Driver, Constructors>;
}
@DartClass
@Implements(any)
export class Driver implements any.Interface {
    private static __$BINARY_NAME;
    static get BINARY_NAME() { 
        if (this.__$BINARY_NAME===undefined) {
            this.__$BINARY_NAME = "server";
        }
        return this.__$BINARY_NAME;
    }

    private static __$CLIENT_ID : string;
    static get CLIENT_ID() : string { 
        if (this.__$CLIENT_ID===undefined) {
            this.__$CLIENT_ID = "client-id";
        }
        return this.__$CLIENT_ID;
    }

    private static __$CLIENT_VERSION : string;
    static get CLIENT_VERSION() : string { 
        if (this.__$CLIENT_VERSION===undefined) {
            this.__$CLIENT_VERSION = "client-version";
        }
        return this.__$CLIENT_VERSION;
    }

    private static __$ENABLE_INCREMENTAL_RESOLUTION_API : string;
    static get ENABLE_INCREMENTAL_RESOLUTION_API() : string { 
        if (this.__$ENABLE_INCREMENTAL_RESOLUTION_API===undefined) {
            this.__$ENABLE_INCREMENTAL_RESOLUTION_API = "enable-incremental-resolution-api";
        }
        return this.__$ENABLE_INCREMENTAL_RESOLUTION_API;
    }

    private static __$ENABLE_INSTRUMENTATION_OPTION : string;
    static get ENABLE_INSTRUMENTATION_OPTION() : string { 
        if (this.__$ENABLE_INSTRUMENTATION_OPTION===undefined) {
            this.__$ENABLE_INSTRUMENTATION_OPTION = "enable-instrumentation";
        }
        return this.__$ENABLE_INSTRUMENTATION_OPTION;
    }

    private static __$FILE_READ_MODE : string;
    static get FILE_READ_MODE() : string { 
        if (this.__$FILE_READ_MODE===undefined) {
            this.__$FILE_READ_MODE = "file-read-mode";
        }
        return this.__$FILE_READ_MODE;
    }

    private static __$HELP_OPTION : string;
    static get HELP_OPTION() : string { 
        if (this.__$HELP_OPTION===undefined) {
            this.__$HELP_OPTION = "help";
        }
        return this.__$HELP_OPTION;
    }

    private static __$INCREMENTAL_RESOLUTION_LOG : string;
    static get INCREMENTAL_RESOLUTION_LOG() : string { 
        if (this.__$INCREMENTAL_RESOLUTION_LOG===undefined) {
            this.__$INCREMENTAL_RESOLUTION_LOG = "incremental-resolution-log";
        }
        return this.__$INCREMENTAL_RESOLUTION_LOG;
    }

    private static __$INCREMENTAL_RESOLUTION_VALIDATION : string;
    static get INCREMENTAL_RESOLUTION_VALIDATION() : string { 
        if (this.__$INCREMENTAL_RESOLUTION_VALIDATION===undefined) {
            this.__$INCREMENTAL_RESOLUTION_VALIDATION = "incremental-resolution-validation";
        }
        return this.__$INCREMENTAL_RESOLUTION_VALIDATION;
    }

    private static __$DISABLE_NEW_ANALYSIS_DRIVER : string;
    static get DISABLE_NEW_ANALYSIS_DRIVER() : string { 
        if (this.__$DISABLE_NEW_ANALYSIS_DRIVER===undefined) {
            this.__$DISABLE_NEW_ANALYSIS_DRIVER = 'disable-new-analysis-driver';
        }
        return this.__$DISABLE_NEW_ANALYSIS_DRIVER;
    }

    private static __$INSTRUMENTATION_LOG_FILE : string;
    static get INSTRUMENTATION_LOG_FILE() : string { 
        if (this.__$INSTRUMENTATION_LOG_FILE===undefined) {
            this.__$INSTRUMENTATION_LOG_FILE = "instrumentation-log-file";
        }
        return this.__$INSTRUMENTATION_LOG_FILE;
    }

    private static __$INTERNAL_DELAY_FREQUENCY : string;
    static get INTERNAL_DELAY_FREQUENCY() : string { 
        if (this.__$INTERNAL_DELAY_FREQUENCY===undefined) {
            this.__$INTERNAL_DELAY_FREQUENCY = 'internal-delay-frequency';
        }
        return this.__$INTERNAL_DELAY_FREQUENCY;
    }

    private static __$INTERNAL_PRINT_TO_CONSOLE : string;
    static get INTERNAL_PRINT_TO_CONSOLE() : string { 
        if (this.__$INTERNAL_PRINT_TO_CONSOLE===undefined) {
            this.__$INTERNAL_PRINT_TO_CONSOLE = "internal-print-to-console";
        }
        return this.__$INTERNAL_PRINT_TO_CONSOLE;
    }

    private static __$NEW_ANALYSIS_DRIVER_LOG : string;
    static get NEW_ANALYSIS_DRIVER_LOG() : string { 
        if (this.__$NEW_ANALYSIS_DRIVER_LOG===undefined) {
            this.__$NEW_ANALYSIS_DRIVER_LOG = 'new-analysis-driver-log';
        }
        return this.__$NEW_ANALYSIS_DRIVER_LOG;
    }

    private static __$VERBOSE_FLUTTER_COMPLETIONS : string;
    static get VERBOSE_FLUTTER_COMPLETIONS() : string { 
        if (this.__$VERBOSE_FLUTTER_COMPLETIONS===undefined) {
            this.__$VERBOSE_FLUTTER_COMPLETIONS = 'verbose-flutter-completions';
        }
        return this.__$VERBOSE_FLUTTER_COMPLETIONS;
    }

    private static __$USE_ANALYSIS_HIGHLIGHT2 : string;
    static get USE_ANALYSIS_HIGHLIGHT2() : string { 
        if (this.__$USE_ANALYSIS_HIGHLIGHT2===undefined) {
            this.__$USE_ANALYSIS_HIGHLIGHT2 = "useAnalysisHighlight2";
        }
        return this.__$USE_ANALYSIS_HIGHLIGHT2;
    }

    private static __$PORT_OPTION : string;
    static get PORT_OPTION() : string { 
        if (this.__$PORT_OPTION===undefined) {
            this.__$PORT_OPTION = "port";
        }
        return this.__$PORT_OPTION;
    }

    private static __$SDK_OPTION : string;
    static get SDK_OPTION() : string { 
        if (this.__$SDK_OPTION===undefined) {
            this.__$SDK_OPTION = "sdk";
        }
        return this.__$SDK_OPTION;
    }

    instrumentationServer : any;

    fileResolverProvider : any;

    packageResolverProvider : any;

    useSingleContextManager : boolean;

    _userDefinedPlugins : core.DartList<any>;

    socketServer : any;

    httpServer : any;

    stdioServer : any;

    constructor() {
    }
    @defaultConstructor
    Driver() {
        this.useSingleContextManager = false;
        this._userDefinedPlugins = new core.DartList.literal<any>();
    }
    set userDefinedPlugins(plugins : core.DartList<any>) {
        this._userDefinedPlugins = (plugins || new core.DartList.literal<any>());
    }
    start(arguments : core.DartList<string>) : any {
        let parser : CommandLineParser = this._createArgParser();
        let results : any = parser.parse(arguments,new core.DartMap.literal([
        ]));
        if (op(Op.INDEX,results,Driver.HELP_OPTION)) {
            this._printUsage(parser.parser);
            return null;
        }
        if (op(Op.INDEX,results,Driver.INTERNAL_DELAY_FREQUENCY) != null) {
            AnalysisServer.performOperationDelayFrequency = core.DartInt.parse(op(Op.INDEX,results,Driver.INTERNAL_DELAY_FREQUENCY),{
                onError : (_ : any) =>  {
                    return 0;
                }});
        }
        let port : number;
        let serve_http : boolean = false;
        if (op(Op.INDEX,results,Driver.PORT_OPTION) != null) {
            try {
                port = core.DartInt.parse(op(Op.INDEX,results,Driver.PORT_OPTION));
                serve_http = true;
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    core.print(`Invalid port number: ${op(Op.INDEX,results,Driver.PORT_OPTION)}`);
                    core.print('');
                    this._printUsage(parser.parser);
                    io.properties.exitCode = 1;
                    return null;
                }
            }
        }
        let analysisServerOptions : any = new bare.createInstance(any,null);
        analysisServerOptions.enableIncrementalResolutionApi = op(Op.INDEX,results,Driver.ENABLE_INCREMENTAL_RESOLUTION_API);
        analysisServerOptions.enableIncrementalResolutionValidation = op(Op.INDEX,results,Driver.INCREMENTAL_RESOLUTION_VALIDATION);
        analysisServerOptions.enableNewAnalysisDriver = !op(Op.INDEX,results,Driver.DISABLE_NEW_ANALYSIS_DRIVER);
        analysisServerOptions.useAnalysisHighlight2 = op(Op.INDEX,results,Driver.USE_ANALYSIS_HIGHLIGHT2);
        analysisServerOptions.fileReadMode = op(Op.INDEX,results,Driver.FILE_READ_MODE);
        analysisServerOptions.newAnalysisDriverLog = op(Op.INDEX,results,Driver.NEW_ANALYSIS_DRIVER_LOG);
        analysisServerOptions.enableVerboseFlutterCompletions = op(Op.INDEX,results,Driver.VERBOSE_FLUTTER_COMPLETIONS);
        _initIncrementalLogger(op(Op.INDEX,results,Driver.INCREMENTAL_RESOLUTION_LOG));
        let serverPlugin : any = new bare.createInstance(any,null);
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        plugins.add(serverPlugin);
        plugins.add(dartCompletionPlugin);
        plugins.addAll(this._userDefinedPlugins);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
        null /*topLevl*/.registerLintRules();
        let defaultSdkPath : string;
        if (op(Op.INDEX,results,Driver.SDK_OPTION) != null) {
            defaultSdkPath = op(Op.INDEX,results,Driver.SDK_OPTION);
        }else {
            defaultSdkPath = FolderBasedDartSdk.defaultSdkDirectory(PhysicalResourceProvider.INSTANCE).path;
        }
        let useSummaries : boolean = op(Op.EQUALS,analysisServerOptions.fileReadMode,'as-is') || analysisServerOptions.enableNewAnalysisDriver;
        let defaultSdk : any = this._createDefaultSdk(defaultSdkPath,useSummaries);
        let logFilePath : string = op(Op.INDEX,results,Driver.INSTRUMENTATION_LOG_FILE);
        if (logFilePath != null) {
            Driver._rollLogFiles(logFilePath,5);
            let fileBasedServer : any = new bare.createInstance(any,null,logFilePath);
            this.instrumentationServer = this.instrumentationServer != null ? new bare.createInstance(any,null,new core.DartList.literal(this.instrumentationServer,fileBasedServer)) : fileBasedServer;
        }
        let instrumentationService : any = new bare.createInstance(any,null,this.instrumentationServer);
        instrumentationService.logVersion(this._readUuid(instrumentationService),op(Op.INDEX,results,Driver.CLIENT_ID),op(Op.INDEX,results,Driver.CLIENT_VERSION),AnalysisServer.VERSION,defaultSdk.sdkVersion);
        AnalysisEngine.instance.instrumentationService = instrumentationService;
        let diagnosticServer : _DiagnosticServerImpl = new _DiagnosticServerImpl();
        this.socketServer = new bare.createInstance(any,null,analysisServerOptions,new bare.createInstance(any,null,defaultSdkPath,useSummaries),defaultSdk,instrumentationService,diagnosticServer,serverPlugin,this.fileResolverProvider,this.packageResolverProvider,this.useSingleContextManager);
        this.httpServer = new bare.createInstance(any,null,this.socketServer);
        this.stdioServer = new bare.createInstance(any,null,this.socketServer);
        this.socketServer.userDefinedPlugins = this._userDefinedPlugins;
        diagnosticServer.httpServer = this.httpServer;
        if (serve_http) {
            diagnosticServer.startOnPort(port);
        }
        this._captureExceptions(instrumentationService,() =>  {
            this.stdioServer.serveStdio().then((_ : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                if (serve_http) {
                    this.httpServer.close();
                }
                await instrumentationService.shutdown();
                io.exit(0);
            })()));
        },{
            print : op(Op.INDEX,results,Driver.INTERNAL_PRINT_TO_CONSOLE) ? null : this.httpServer.recordPrint});
        return this.socketServer.analysisServer;
    }
    _captureExceptions(service : any,callback : () => any,_namedArguments? : {print? : (line : string) => void}) : any {
        let {print} = Object.assign({
        }, _namedArguments );
        let errorFunction = (self : async.DartZone,parent : async.ZoneDelegate,zone : async.DartZone,exception : any,stackTrace : core.DartStackTrace) =>  {
            service.logPriorityException(exception,stackTrace);
            let analysisServer : any = this.socketServer.analysisServer;
            analysisServer.sendServerErrorNotification('Captured exception',exception,stackTrace);
            throw exception;
        };
        let printFunction = op(Op.EQUALS,print,null) ? null : (self : async.DartZone,parent : async.ZoneDelegate,zone : async.DartZone,line : string) =>  {
            print(line);
        };
        let zoneSpecification : async.DartZoneSpecification = new async.DartZoneSpecification({
            handleUncaughtError : errorFunction,print : printFunction});
        return async.runZoned(callback,{
            zoneSpecification : zoneSpecification});
    }
    _createArgParser() : CommandLineParser {
        let parser : CommandLineParser = new CommandLineParser({
            alwaysIgnoreUnrecognized : true});
        parser.addOption(Driver.CLIENT_ID,{
            help : "an identifier used to identify the client"});
        parser.addOption(Driver.CLIENT_VERSION,{
            help : "the version of the client"});
        parser.addFlag(Driver.ENABLE_INCREMENTAL_RESOLUTION_API,{
            help : "enable using incremental resolution for API changes",defaultsTo : false,negatable : false});
        parser.addFlag(Driver.ENABLE_INSTRUMENTATION_OPTION,{
            help : "enable sending instrumentation information to a server",defaultsTo : false,negatable : false});
        parser.addFlag(Driver.HELP_OPTION,{
            help : "print this help message without starting a server",defaultsTo : false,negatable : false});
        parser.addOption(Driver.INCREMENTAL_RESOLUTION_LOG,{
            help : "set a destination for the incremental resolver's log"});
        parser.addFlag(Driver.INCREMENTAL_RESOLUTION_VALIDATION,{
            help : "enable validation of incremental resolution results (slow)",defaultsTo : false,negatable : false});
        parser.addFlag(Driver.DISABLE_NEW_ANALYSIS_DRIVER,{
            help : "disable using new analysis driver",defaultsTo : false,negatable : false});
        parser.addOption(Driver.INSTRUMENTATION_LOG_FILE,{
            help : "the path of the file to which instrumentation data will be written"});
        parser.addFlag(Driver.INTERNAL_PRINT_TO_CONSOLE,{
            help : "enable sending `print` output to the console",defaultsTo : false,negatable : false});
        parser.addOption(Driver.NEW_ANALYSIS_DRIVER_LOG,{
            help : "set a destination for the new analysis driver's log"});
        parser.addFlag(Driver.VERBOSE_FLUTTER_COMPLETIONS,{
            help : "enable verbose code completion for Flutter (experimental)"});
        parser.addOption(Driver.PORT_OPTION,{
            help : "the http diagnostic port on which the server provides" + " status and performance information"});
        parser.addOption(Driver.INTERNAL_DELAY_FREQUENCY);
        parser.addOption(Driver.SDK_OPTION,{
            help : "[path] the path to the sdk"});
        parser.addFlag(Driver.USE_ANALYSIS_HIGHLIGHT2,{
            help : "enable version 2 of semantic highlight",defaultsTo : false,negatable : false});
        parser.addOption(Driver.FILE_READ_MODE,{
            help : "an option for reading files (some clients normalize eol " + "characters, which make the file offset and range information " + "incorrect)",allowed : new core.DartList.literal("as-is","normalize-eol-always"),allowedHelp : new core.DartMap.literal([
                ["as-is","file contents are read as-is"],
                ["normalize-eol-always","eol characters normalized to the single character new line ('\n')"]]),defaultsTo : "as-is"});
        return parser;
    }
    _createDefaultSdk(defaultSdkPath : string,useSummaries : boolean) : any {
        let resourceProvider : any = PhysicalResourceProvider.INSTANCE;
        let sdk : any = new bare.createInstance(any,null,resourceProvider,resourceProvider.getFolder(defaultSdkPath));
        sdk.useSummary = useSummaries;
        return sdk;
    }
    _printUsage(parser : any) : void {
        core.print(`Usage: ${Driver.BINARY_NAME} [flags]`);
        core.print('');
        core.print('Supported flags are:');
        core.print(parser.usage);
    }
    _readUuid(service : any) : string {
        let uuidFile : io.File = new io.File(PhysicalResourceProvider.INSTANCE.getStateLocation('.instrumentation').getChild('uuid.txt').path);
        try {
            if (uuidFile.existsSync()) {
                let uuid : string = uuidFile.readAsStringSync();
                if (uuid != null && new core.DartString(uuid).length > 5) {
                    return uuid;
                }
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                service.logPriorityException(exception,stackTrace);
            }
        }
        let millisecondsSinceEpoch : number = new core.DartDateTime.now().millisecondsSinceEpoch;
        let random : number = new math.Random().nextInt(1073741823);
        let uuid : string = `${millisecondsSinceEpoch}${random}`;
        try {
            uuidFile.parent.createSync({
                recursive : true});
            uuidFile.writeAsStringSync(uuid);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                service.logPriorityException(exception,stackTrace);
                uuid = `temp-${uuid}`;
            }
        }
        return uuid;
    }
    static _rollLogFiles(path : string,numOld : number) : void {
        for(let i : number = numOld - 1; i >= 0; i--){
            try {
                let oldPath : string = i == 0 ? path : `${path}.${i}`;
                new io.File(oldPath).renameSync(`${path}.${i + 1}`);
            } catch (__error__) {

                {
                    let e = __error__;
                }
            }
        }
    }
}

export namespace _DiagnosticServerImpl {
    export type Constructors = '_DiagnosticServerImpl';
    export type Interface = Omit<_DiagnosticServerImpl, Constructors>;
}
@DartClass
export class _DiagnosticServerImpl extends any {
    httpServer : any;

    constructor() {
    }
    @defaultConstructor
    _DiagnosticServerImpl() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getServerPort() : async.Future<number> {
        return this.httpServer.serveHttp();
    }
    startOnPort(port : number) : async.Future<any> {
        return this.httpServer.serveHttp(port);
    }
}

export class properties {
}
