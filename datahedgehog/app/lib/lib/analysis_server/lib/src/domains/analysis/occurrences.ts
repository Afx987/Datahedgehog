/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domains/analysis/occurrences.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var computeOccurrences : (server : any,context : any,source : any) => OccurrencesCollectorImpl = (server : any,context : any,source : any) : OccurrencesCollectorImpl =>  {
    let collector : OccurrencesCollectorImpl = new OccurrencesCollectorImpl();
    let contributors : core.DartList<any> = server.serverPlugin.occurrencesContributors;
    for(let contributor of contributors) {
        try {
            contributor.computeOccurrences(collector,context,source);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logError(`Exception from occurrences contributor: ${contributor.runtimeType}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
    }
    return collector;
};
export namespace OccurrencesCollectorImpl {
    export type Constructors = 'OccurrencesCollectorImpl';
    export type Interface = Omit<OccurrencesCollectorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class OccurrencesCollectorImpl implements any.Interface {
    elementOccurrences : core.DartMap<any,any>;

    get allOccurrences() : core.DartList<any> {
        return this.elementOccurrences.values.toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addOccurrences(current : any) : void {
        let element : any = current.element;
        let existing : any = this.elementOccurrences.get(element);
        if (existing != null) {
            let offsets : core.DartList<number> = OccurrencesCollectorImpl._merge(existing.offsets,current.offsets);
            current = new bare.createInstance(any,null,element,offsets,existing.length);
        }
        this.elementOccurrences.set(element,current);
    }
    static _merge(a : core.DartList<number>,b : core.DartList<number>) : core.DartList<number> {
        return ((_) : core.DartList<number> =>  {
            {
                _.addAll(a);
                _.addAll(b);
                return _;
            }
        })(new core.DartList.literal<number>());
    }
    constructor() {
    }
    @defaultConstructor
    OccurrencesCollectorImpl() {
        this.elementOccurrences = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
