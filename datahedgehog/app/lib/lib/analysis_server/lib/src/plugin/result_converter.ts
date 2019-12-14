/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/result_converter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ResultConverter {
    export type Constructors = 'ResultConverter';
    export type Interface = Omit<ResultConverter, Constructors>;
}
@DartClass
export class ResultConverter {
    private static __$decoder : any;
    static get decoder() : any { 
        if (this.__$decoder===undefined) {
            this.__$decoder = new bare.createInstance(any,null,null);
        }
        return this.__$decoder;
    }
    static set decoder(__$value : any)  { 
        this.__$decoder = __$value;
    }

    convertAnalysisErrorFixes(fixes : any) : any {
        let changes : core.DartList<any> = fixes.fixes.map((change : any) =>  {
            return this.convertPrioritizedSourceChange(change);
        }).toList();
        return new bare.createInstance(any,null,fixes.error,{
            fixes : changes});
    }
    convertAnalysisNavigationParams(params : any) : any {
        return new bare.createInstance(any,"fromJson",ResultConverter.decoder,'',params.toJson());
    }
    convertEditGetRefactoringResult(kind : any,result : any) : any {
        return new bare.createInstance(any,"fromJson",new bare.createInstance(any,null,kind),'',result.toJson());
    }
    convertPrioritizedSourceChange(change : any) : any {
        return change.change;
    }
    constructor() {
    }
    @defaultConstructor
    ResultConverter() {
    }
}

export class properties {
}
