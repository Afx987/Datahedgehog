/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/incremental_kernel_generator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./compiler_options";

export namespace DeltaProgram {
    export type Constructors = 'DeltaProgram';
    export type Interface = Omit<DeltaProgram, Constructors>;
}
@DartClass
export class DeltaProgram {
    newProgram : any;

    constructor(newProgram : any) {
    }
    @defaultConstructor
    DeltaProgram(newProgram : any) {
        this.newProgram = newProgram;
    }
}

export namespace IncrementalKernelGenerator {
    export type Constructors = 'IncrementalKernelGenerator';
    export type Interface = Omit<IncrementalKernelGenerator, Constructors>;
}
@DartClass
export class IncrementalKernelGenerator {
    @Abstract
    computeDelta(_namedArguments? : {watch? : (uri : lib3.Uri,used : boolean) => async.Future<core.Null>}) : async.Future<DeltaProgram>{ throw 'abstract'}
    @Abstract
    invalidate(uri : lib3.Uri) : void{ throw 'abstract'}
    @Abstract
    invalidateAll() : void{ throw 'abstract'}
    static newInstance(options : lib4.CompilerOptions,entryPoint : lib3.Uri) : async.Future<IncrementalKernelGenerator> { 
        return new async.Future.fromPromise(( async () =>  {
            let processedOptions = new bare.createInstance(any,null,options);
            let uriTranslator = await processedOptions.getUriTranslator();
            return new bare.createInstance(any,null,processedOptions,uriTranslator,entryPoint);
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    IncrementalKernelGenerator() {
    }
}

export class properties {
}
