/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/analysis_logger.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/logging/lib/logging";

export namespace AnalysisLogger {
    export type Constructors = 'AnalysisLogger';
    export type Interface = Omit<AnalysisLogger, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisLogger implements any.Interface {
    baseLogger : any;

    server : any;

    constructor(server : any) {
    }
    @defaultConstructor
    AnalysisLogger(server : any) {
        this.baseLogger = new bare.createInstance(any,null,'analysis.server');
        this.server = server;
        /* TODO (AssertStatementImpl) : assert (server != null); */;
        lib3.Logger.root.onRecord.listen((record : any) =>  {
            AnalysisEngine.instance.instrumentationService.logLogEntry(record.level.name,record.time,record.message,record.error,record.stackTrace);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logError(message : string,exception? : any) : void {
        if (op(Op.EQUALS,exception,null)) {
            this.baseLogger.severe(message);
        }else {
            this.baseLogger.severe(message,exception.exception,exception.stackTrace);
        }
        this.server.sendServerErrorNotification(message,exception,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logInformation(message : string,exception? : any) : void {
        if (op(Op.EQUALS,exception,null)) {
            this.baseLogger.info(message);
        }else {
            this.baseLogger.info(message,exception.exception,exception.stackTrace);
        }
    }
}

export class properties {
}
