/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/general.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SourceBasedAnalysisTask {
    export type Constructors = 'SourceBasedAnalysisTask';
    export type Interface = Omit<SourceBasedAnalysisTask, Constructors>;
}
@DartClass
export class SourceBasedAnalysisTask extends any {
    constructor(context : any,target : any) {
    }
    @defaultConstructor
    SourceBasedAnalysisTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get description() : string {
        let source : any = target.source;
        let sourceName : string = op(Op.EQUALS,source,null) ? '<unknown source>' : source.fullName;
        return `${descriptor.name} for source ${sourceName}`;
    }
}

export namespace GetContentTask {
    export type Constructors = SourceBasedAnalysisTask.Constructors | 'GetContentTask';
    export type Interface = Omit<GetContentTask, Constructors>;
}
@DartClass
export class GetContentTask extends SourceBasedAnalysisTask {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'GetContentTask',GetContentTask.createTask.bind(this),GetContentTask.buildInputs.bind(this),new core.DartList.literal<any>(CONTENT,MODIFICATION_TIME));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetContentTask(context : any,target : any) {
        super.SourceBasedAnalysisTask(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return GetContentTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() {
        let source : any = getRequiredSource();
        let content : string;
        let modificationTime : number;
        try {
            let data : any = context.getContents(source);
            content = data.data;
            modificationTime = data.modificationTime;
        } catch (__error__) {

            {
                let exception = __error__;
                content = '';
                modificationTime = -1;
            }
        }
        this._validateModificationTime(source,modificationTime);
        op(Op.INDEX_ASSIGN,outputs,CONTENT,content);
        op(Op.INDEX_ASSIGN,outputs,MODIFICATION_TIME,modificationTime);
    }
    _validateModificationTime(source : any,modificationTime : number) : void {
        let context : any = this.context;
        if (is(context, any)) {
            let entry : any = context.getCacheEntry(target);
            if (entry != null && entry.modificationTime != modificationTime) {
                entry.modificationTime = modificationTime;
                entry.setState(CONTENT,CacheState.INVALID);
                entry.setState(MODIFICATION_TIME,CacheState.INVALID);
                throw new bare.createInstance(any,null,source);
            }
        }
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    static createTask(context : any,target : any) : GetContentTask {
        return new GetContentTask(context,target);
    }
}

export class properties {
}
