/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/result_collector.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ResultCollector {
    export type Constructors = 'ResultCollector';
    export type Interface<E> = Omit<ResultCollector<E>, Constructors>;
}
@DartClass
export class ResultCollector<E> {
    serverId : string;

    _shouldCollect : (path : string) => boolean;

    resultMap : core.DartMap<string,core.DartMap<string,E>>;

    constructor(serverId : string,_namedArguments? : {predicate? : (path : string) => boolean}) {
    }
    @defaultConstructor
    ResultCollector(serverId : string,_namedArguments? : {predicate? : (path : string) => boolean}) {
        let {predicate} = Object.assign({
        }, _namedArguments );
        this.resultMap = new core.DartMap.literal([
        ]);
        this._shouldCollect = predicate;
        this.serverId = serverId;
    }
    clearResultsForFile(filePath : string) : void {
        ((_29_)=>(!!_29_)?_29_.clear():null)(this.resultMap.get(filePath));
    }
    clearResultsFromPlugin(pluginId : string) : void {
        for(let partialResults of this.resultMap.values) {
            partialResults.remove(pluginId);
        }
    }
    getResults(filePath : string) : core.DartList<E> {
        let partialResultMap : core.DartMap<string,E> = this.resultMap.get(filePath);
        if (partialResultMap == null) {
            return new core.DartList.literal<E>();
        }
        let values : core.DartList<E> = partialResultMap.values.toList();
        let serverContributions : E = partialResultMap.get(this.serverId);
        if (serverContributions != null && values.remove(serverContributions)) {
            values.insert(0,serverContributions);
        }
        return values;
    }
    isCollectingFor(filePath : string) : boolean {
        if (this._shouldCollect != null) {
            return this._shouldCollect(filePath);
        }
        return this.resultMap.containsKey(filePath);
    }
    putResults(filePath : string,pluginId : string,partialResults : E) : void {
        let fileResults : core.DartMap<string,E> = this.resultMap.get(filePath);
        if (fileResults == null) {
            if (this._shouldCollect != null && this._shouldCollect(filePath)) {
                this.resultMap.set(filePath,new core.DartMap.literal([
                    [pluginId,partialResults]]));
            }
        }else {
            fileResults.set(pluginId,partialResults);
        }
    }
    startCollectingFor(filePath : string) : void {
        this.resultMap.putIfAbsent(filePath,() =>  {
            return new core.DartMap.literal([
            ]);
        });
    }
    stopCollectingFor(filePath : string) : void {
        this.resultMap.remove(filePath);
    }
}

export class properties {
}
