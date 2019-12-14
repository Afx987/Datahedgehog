/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/analyzer_diet_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./element_store";
import * as lib4 from "./ast_builder";

export namespace AnalyzerDietListener {
    export type Constructors = 'AnalyzerDietListener';
    export type Interface = Omit<AnalyzerDietListener, Constructors>;
}
@DartClass
export class AnalyzerDietListener extends any {
    elementStore : lib3.ElementStore;

    constructor(library : any,elementStore : lib3.ElementStore) {
    }
    @defaultConstructor
    AnalyzerDietListener(library : any,elementStore : lib3.ElementStore) {
        super.DartObject(library,null,null,null);
        this.elementStore = elementStore;
    }
    createListener(builder : any,memberScope : any,isInstanceMember : boolean,formalParameterScope? : any) : any {
        return new lib4.AstBuilder(null,library,builder,this.elementStore,memberScope,uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAsyncMarker(listener : any) : any {
        return null;
    }
}

export class properties {
}
