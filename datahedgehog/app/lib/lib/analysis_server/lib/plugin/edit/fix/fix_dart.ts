/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/edit/fix/fix_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartFixContext {
    export type Constructors = 'DartFixContext';
    export type Interface = Omit<DartFixContext, Constructors>;
}
@DartClass
@Implements(any)
export class DartFixContext implements any.Interface {
    @AbstractProperty
    get astProvider() : any{ throw 'abstract'}
    @AbstractProperty
    get getTopLevelDeclarations() : (name : string) => async.Future<core.DartList<any>>{ throw 'abstract'}
    @AbstractProperty
    get unit() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartFixContext() {
    }
}

export namespace DartFixContributor {
    export type Constructors = 'DartFixContributor';
    export type Interface = Omit<DartFixContributor, Constructors>;
}
@DartClass
@Implements(any)
export class DartFixContributor implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeFixes(context : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver : any = context.analysisDriver;
            let source : any = context.error.source;
            if (!AnalysisEngine.isDartFileName(source.fullName)) {
                return Fix.EMPTY_LIST;
            }
            let unit : any = (await driver.getResult(source.fullName)).unit;
            if (op(Op.EQUALS,unit,null)) {
                return Fix.EMPTY_LIST;
            }
            let dartContext : DartFixContext = new bare.createInstance(any,null,context,new bare.createInstance(any,null,driver),unit);
            return this.internalComputeFixes(dartContext);
        } )());
    }

    @Abstract
    internalComputeFixes(context : DartFixContext) : async.Future<core.DartList<any>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartFixContributor() {
    }
}

export class properties {
}
