/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/stress/replay/operation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../utilities/server";

export namespace ServerOperation {
    export type Constructors = 'ServerOperation';
    export type Interface = Omit<ServerOperation, Constructors>;
}
@DartClass
export class ServerOperation {
    @Abstract
    perform(server : lib3.Server) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ServerOperation() {
    }
}

export namespace Analysis_UpdateContent {
    export type Constructors = ServerOperation.Constructors | 'Analysis_UpdateContent';
    export type Interface = Omit<Analysis_UpdateContent, Constructors>;
}
@DartClass
export class Analysis_UpdateContent extends ServerOperation {
    filePath : string;

    overlay : any;

    constructor(filePath : string,overlay : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Analysis_UpdateContent(filePath : string,overlay : any) {
        this.filePath = filePath;
        this.overlay = overlay;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : lib3.Server) : void {
        server.sendAnalysisUpdateContent(new core.DartMap.literal([
            [this.filePath,this.overlay]]));
    }
}

export namespace Completion_GetSuggestions {
    export type Constructors = ServerOperation.Constructors | 'Completion_GetSuggestions';
    export type Interface = Omit<Completion_GetSuggestions, Constructors>;
}
@DartClass
export class Completion_GetSuggestions extends ServerOperation {
    filePath : string;

    offset : number;

    constructor(filePath : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Completion_GetSuggestions(filePath : string,offset : number) {
        this.filePath = filePath;
        this.offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : lib3.Server) : void {
        server.sendCompletionGetSuggestions(this.filePath,this.offset);
    }
}

export class properties {
}
