/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/instrumentation/file_instrumentation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export namespace FileInstrumentationServer {
    export type Constructors = 'FileInstrumentationServer';
    export type Interface = Omit<FileInstrumentationServer, Constructors>;
}
@DartClass
@Implements(any)
export class FileInstrumentationServer implements any.Interface {
    filePath : string;

    _sink : io.IOSink;

    constructor(filePath : string) {
    }
    @defaultConstructor
    FileInstrumentationServer(filePath : string) {
        this.filePath = filePath;
        let file : io.File = new io.File(this.filePath);
        this._sink = file.openWrite();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sessionId() : string {
        return '';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get describe() : string {
        return `file: ${this.filePath}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    log(message : string) : void {
        this._sink.writeln(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logWithPriority(message : string) : void {
        this.log(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shutdown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._sink.close();
            this._sink = null;
        } )());
    }

}

export class properties {
}
