/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/instrumentation/log_viewer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./log/log";
import * as lib5 from "./server";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    let driver : Driver = new Driver();
    driver.start(args);
};
export namespace Driver {
    export type Constructors = 'Driver';
    export type Interface = Omit<Driver, Constructors>;
}
@DartClass
export class Driver {
    private static __$helpFlag : string;
    static get helpFlag() : string { 
        if (this.__$helpFlag===undefined) {
            this.__$helpFlag = 'help';
        }
        return this.__$helpFlag;
    }
    static set helpFlag(__$value : string)  { 
        this.__$helpFlag = __$value;
    }

    private static __$portOption : string;
    static get portOption() : string { 
        if (this.__$portOption===undefined) {
            this.__$portOption = 'port';
        }
        return this.__$portOption;
    }
    static set portOption(__$value : string)  { 
        this.__$portOption = __$value;
    }

    private static __$defaultPortNumber : number;
    static get defaultPortNumber() : number { 
        if (this.__$defaultPortNumber===undefined) {
            this.__$defaultPortNumber = 11000;
        }
        return this.__$defaultPortNumber;
    }
    static set defaultPortNumber(__$value : number)  { 
        this.__$defaultPortNumber = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    Driver() {
    }
    createParser() : any {
        let parser : any = new bare.createInstance(any,null);
        parser.addFlag(Driver.helpFlag,{
            help : 'Print this help text',negatable : false});
        parser.addOption(Driver.portOption,{
            help : 'The port number on which the server should listen for requests',defaultsTo : new core.DartInt(Driver.defaultPortNumber).toString()});
        return parser;
    }
    printUsage(parser : any,_namedArguments? : {error? : string,exception? : core.DartObject,stackTrace? : core.DartStackTrace}) : void {
        let {error,exception,stackTrace} = Object.assign({
        }, _namedArguments );
        if (error != null) {
            core.print(error);
            core.print('');
        }
        core.print('log_viewer [options] logFile');
        core.print('');
        core.print('Usage:');
        core.print('');
        core.print('The "logFile" is the file containing the content of the log that is being viewed');
        core.print('');
        core.print('Options:');
        core.print(parser.usage);
        if (exception != null) {
            core.print(exception);
        }
        if (stackTrace != null) {
            core.print(stackTrace);
        }
    }
    start(args : core.DartList<string>) : void {
        let parser : any = this.createParser();
        let options : any = parser.parse(args);
        if (op(Op.INDEX,options,Driver.helpFlag)) {
            this.printUsage(parser);
            return;
        }
        let port : number = Driver.defaultPortNumber;
        try {
            port = core.DartInt.parse(op(Op.INDEX,options,Driver.portOption));
        } catch (__error__) {

            {
                let exception = __error__;
                this.printUsage(parser,{
                    error : 'Invalid port number'});
                return;
            }
        }
        let arguments : core.DartList<string> = options.rest;
        if (arguments == null || arguments.length != 1) {
            this.printUsage(parser,{
                error : 'Missing log file'});
            return;
        }
        let fileName : string = arguments[0];
        let logFile : io.File = new io.File(fileName);
        let lines : core.DartList<string>;
        try {
            lines = logFile.readAsLinesSync();
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                this.printUsage(parser,{
                    error : `Could not read file "${fileName}":`,exception : exception,stackTrace : stackTrace});
                return;
            }
        }
        core.print(`Log file contains ${lines.length} lines`);
        let log : lib4.InstrumentationLog = new lib4.InstrumentationLog(new core.DartList.literal<string>(logFile.path),lines);
        let server : lib5.WebServer = new lib5.WebServer(log);
        server.serveHttp(port);
        core.print(`logViewer is listening on http://localhost:${port}/log`);
    }
}

export class properties {
}
