/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/dependencies/reachable_source_collector.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ReachableSourceCollector {
    export type Constructors = 'ReachableSourceCollector';
    export type Interface = Omit<ReachableSourceCollector, Constructors>;
}
@DartClass
export class ReachableSourceCollector {
    _sourceMap : core.DartMap<string,core.DartList<string>>;

    source : any;

    context : any;

    constructor(source : any,context : any) {
    }
    @defaultConstructor
    ReachableSourceCollector(source : any,context : any) {
        this._sourceMap = new core.DartHashMap<string,core.DartList<string>>();
        this.source = source;
        this.context = context;
        if (op(Op.EQUALS,this.source,null)) {
            throw new core.ArgumentError.notNull('source');
        }
        if (op(Op.EQUALS,this.context,null)) {
            throw new core.ArgumentError.notNull('context');
        }
    }
    collectSources() : core.DartMap<string,core.DartList<string>> {
        this._addDependencies(this.source);
        return this._sourceMap;
    }
    _addDependencies(source : any) : void {
        let sourceUri : string = source.uri.toString();
        if (this._sourceMap.get(source.uri.toString()) != null) {
            return;
        }
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        sources.addAll(this.context.computeResult(source,IMPORTED_LIBRARIES));
        sources.addAll(this.context.computeResult(source,EXPORTED_LIBRARIES));
        this._sourceMap.set(sourceUri,sources.map((source : any) =>  {
            return source.uri.toString();
        }).toList());
        sources.forEach((s : any) =>  {
            return this._addDependencies(s);
        });
    }
}

export class properties {
}
