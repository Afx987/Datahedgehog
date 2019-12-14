/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/operation/operation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ServerOperation {
    export type Constructors = 'ServerOperation';
    export type Interface = Omit<ServerOperation, Constructors>;
}
@DartClass
export class ServerOperation {
    context : any;

    constructor(context : any) {
    }
    @defaultConstructor
    ServerOperation(context : any) {
        this.context = context;
    }
    @AbstractProperty
    get priority() : ServerOperationPriority{ throw 'abstract'}
    @Abstract
    perform(server : any) : void{ throw 'abstract'}
}

export namespace ServerOperationPriority {
    export type Constructors = '_';
    export type Interface = Omit<ServerOperationPriority, Constructors>;
}
@DartClass
export class ServerOperationPriority {
    private static __$COUNT : number;
    static get COUNT() : number { 
        if (this.__$COUNT===undefined) {
            this.__$COUNT = 6;
        }
        return this.__$COUNT;
    }

    private static __$ANALYSIS_NOTIFICATION : ServerOperationPriority;
    static get ANALYSIS_NOTIFICATION() : ServerOperationPriority { 
        if (this.__$ANALYSIS_NOTIFICATION===undefined) {
            this.__$ANALYSIS_NOTIFICATION = new ServerOperationPriority._(0,"ANALYSIS_NOTIFICATION");
        }
        return this.__$ANALYSIS_NOTIFICATION;
    }

    private static __$ANALYSIS_INDEX : ServerOperationPriority;
    static get ANALYSIS_INDEX() : ServerOperationPriority { 
        if (this.__$ANALYSIS_INDEX===undefined) {
            this.__$ANALYSIS_INDEX = new ServerOperationPriority._(1,"ANALYSIS_INDEX");
        }
        return this.__$ANALYSIS_INDEX;
    }

    private static __$PRIORITY_ANALYSIS_CONTINUE : ServerOperationPriority;
    static get PRIORITY_ANALYSIS_CONTINUE() : ServerOperationPriority { 
        if (this.__$PRIORITY_ANALYSIS_CONTINUE===undefined) {
            this.__$PRIORITY_ANALYSIS_CONTINUE = new ServerOperationPriority._(2,"PRIORITY_ANALYSIS_CONTINUE");
        }
        return this.__$PRIORITY_ANALYSIS_CONTINUE;
    }

    private static __$PRIORITY_ANALYSIS : ServerOperationPriority;
    static get PRIORITY_ANALYSIS() : ServerOperationPriority { 
        if (this.__$PRIORITY_ANALYSIS===undefined) {
            this.__$PRIORITY_ANALYSIS = new ServerOperationPriority._(3,"PRIORITY_ANALYSIS");
        }
        return this.__$PRIORITY_ANALYSIS;
    }

    private static __$ANALYSIS_CONTINUE : ServerOperationPriority;
    static get ANALYSIS_CONTINUE() : ServerOperationPriority { 
        if (this.__$ANALYSIS_CONTINUE===undefined) {
            this.__$ANALYSIS_CONTINUE = new ServerOperationPriority._(4,"ANALYSIS_CONTINUE");
        }
        return this.__$ANALYSIS_CONTINUE;
    }

    private static __$ANALYSIS : ServerOperationPriority;
    static get ANALYSIS() : ServerOperationPriority { 
        if (this.__$ANALYSIS===undefined) {
            this.__$ANALYSIS = new ServerOperationPriority._(5,"ANALYSIS");
        }
        return this.__$ANALYSIS;
    }

    ordinal : number;

    name : string;

    @namedConstructor
    _(ordinal : number,name : string) {
        this.ordinal = ordinal;
        this.name = name;
    }
    static _ : new(ordinal : number,name : string) => ServerOperationPriority;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace MergeableOperation {
    export type Constructors = ServerOperation.Constructors | 'MergeableOperation';
    export type Interface = Omit<MergeableOperation, Constructors>;
}
@DartClass
export class MergeableOperation extends ServerOperation {
    constructor(context : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MergeableOperation(context : any) {
        super.ServerOperation(context);
    }
    @Abstract
    merge(other : ServerOperation) : boolean{ throw 'abstract'}
}

export namespace SourceSensitiveOperation {
    export type Constructors = ServerOperation.Constructors | 'SourceSensitiveOperation';
    export type Interface = Omit<SourceSensitiveOperation, Constructors>;
}
@DartClass
export class SourceSensitiveOperation extends ServerOperation {
    constructor(context : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SourceSensitiveOperation(context : any) {
        super.ServerOperation(context);
    }
    @Abstract
    shouldBeDiscardedOnSourceChange(source : any) : boolean{ throw 'abstract'}
}

export class properties {
}
