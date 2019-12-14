/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domains/analysis/navigation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var computeNavigation : (server : any,context : any,source : any,offset : number,length : number) => NavigationCollectorImpl = (server : any,context : any,source : any,offset : number,length : number) : NavigationCollectorImpl =>  {
    let collector : NavigationCollectorImpl = new NavigationCollectorImpl();
    let contributors : core.DartList<any> = server.serverPlugin.navigationContributors;
    for(let contributor of contributors) {
        try {
            contributor.computeNavigation(collector,context,source,offset,length);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logError(`Exception from navigation contributor: ${contributor.runtimeType}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
    }
    collector.createRegions();
    return collector;
};
export namespace NavigationCollectorImpl {
    export type Constructors = 'NavigationCollectorImpl';
    export type Interface = Omit<NavigationCollectorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NavigationCollectorImpl implements any.Interface {
    regions : core.DartList<any>;

    regionMap : core.DartMap<any,core.DartList<number>>;

    targets : core.DartList<any>;

    targetMap : core.DartMap<any,number>;

    files : core.DartList<string>;

    fileMap : core.DartMap<string,number>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addRegion(offset : number,length : number,targetKind : any,targetLocation : any) : void {
        let range : any = new bare.createInstance(any,null,offset,length);
        let targets : core.DartList<number> = this.regionMap.get(range);
        if (targets == null) {
            targets = new core.DartList.literal<number>();
            this.regionMap.set(range,targets);
        }
        let targetIndex : number = this._addTarget(targetKind,targetLocation);
        targets.add(targetIndex);
    }
    createRegions() : void {
        this.regionMap.forEach((range : any,targets : any) =>  {
            let region : any = new bare.createInstance(any,null,range.offset,range.length,targets);
            this.regions.add(region);
        });
        this.regions.sort((a : any,b : any) =>  {
            return op(Op.MINUS,a.offset,b.offset);
        });
    }
    _addFile(file : string) : number {
        let index : number = this.fileMap.get(file);
        if (index == null) {
            index = this.files.length;
            this.files.add(file);
            this.fileMap.set(file,index);
        }
        return index;
    }
    _addTarget(kind : any,location : any) : number {
        let pair = new bare.createInstance(any,null,kind,location);
        let index : number = this.targetMap.get(pair);
        if (index == null) {
            let file : string = location.file;
            let fileIndex : number = this._addFile(file);
            index = this.targets.length;
            let target : any = new bare.createInstance(any,null,kind,fileIndex,location.offset,location.length,location.startLine,location.startColumn);
            this.targets.add(target);
            this.targetMap.set(pair,index);
        }
        return index;
    }
    constructor() {
    }
    @defaultConstructor
    NavigationCollectorImpl() {
        this.regions = new core.DartList.literal<any>();
        this.regionMap = new core.DartHashMap<any,core.DartList<number>>();
        this.targets = new core.DartList.literal<any>();
        this.targetMap = new core.DartHashMap<any,number>();
        this.files = new core.DartList.literal<string>();
        this.fileMap = new core.DartHashMap<string,number>();
    }
}

export class properties {
}
