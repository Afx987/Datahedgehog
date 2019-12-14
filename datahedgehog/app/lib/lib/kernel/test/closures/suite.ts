/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/closures/suite.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var createContext : (suite : any,environment : core.DartMap<string,string>) => async.Future<ClosureConversionContext> = (suite : any,environment : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<ClosureConversionContext> =>  {
    environment.set("updateExpectations",new core.DartString.fromEnvironment("updateExpectations").valueOf());
    return ClosureConversionContext.create(suite,environment);
})());
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    return runMe(arguments,createContext,"testing.json");
};
export namespace ClosureConversionContext {
    export type Constructors = 'ClosureConversionContext';
    export type Interface = Omit<ClosureConversionContext, Constructors>;
}
@DartClass
export class ClosureConversionContext extends any {
    strongMode : boolean;

    uriTranslator : any;

    steps : core.DartList<any>;

    constructor(strongMode : boolean,updateExpectations : boolean,uriTranslator : any) {
    }
    @defaultConstructor
    ClosureConversionContext(strongMode : boolean,updateExpectations : boolean,uriTranslator : any) {
        this.steps = new core.DartList.literal<any>(new FastaCompile(),new bare.createInstance(any,null),new bare.createInstance(any,null,true),new ClosureConversion(),new bare.createInstance(any,null),new bare.createInstance(any,null,true),new bare.createInstance(any,null,".expect",{
            updateExpectations : updateExpectations}),new bare.createInstance(any,null),new bare.createInstance(any,null));
        this.strongMode = strongMode;
        this.uriTranslator = uriTranslator;
    }
    loadPlatform() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let sdk : lib3.Uri = await computePatchedSdk();
            return loadProgramFromBinary(sdk.resolve('platform.dill').toFilePath());
        } )());
    }

    static create(suite : any,environment : core.DartMap<string,string>) : async.Future<ClosureConversionContext> { 
        return new async.Future.fromPromise(( async () =>  {
            let packages : lib3.Uri = lib3.Uri.base.resolve(".packages");
            let strongMode : boolean = environment.containsKey(properties.STRONG_MODE);
            let updateExpectations : boolean = environment.get("updateExpectations") == "true";
            let uriTranslator : any = await TranslateUri.parse(PhysicalFileSystem.instance,packages);
            return new ClosureConversionContext(strongMode,updateExpectations,uriTranslator);
        } )());
    }

}

export namespace FastaCompile {
    export type Constructors = 'FastaCompile';
    export type Interface = Omit<FastaCompile, Constructors>;
}
@DartClass
export class FastaCompile extends any {
    constructor() {
    }
    @defaultConstructor
    FastaCompile() {
    }
    get name() : string {
        return "fasta compilation";
    }
    run(description : any,context : ClosureConversionContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let platform : any = await context.loadPlatform();
            let ticker : any = new bare.createInstance(any,null);
            let dillTarget : any = new bare.createInstance(any,null,ticker,context.uriTranslator,"vm");
            platform.unbindCanonicalNames();
            dillTarget.loader.appendLibraries(platform);
            let sourceTarget : any = new bare.createInstance(any,null,PhysicalFileSystem.instance,dillTarget,context.uriTranslator,context.strongMode);
            let p : any;
            try {
                sourceTarget.read(description.uri);
                await dillTarget.buildOutlines();
                await sourceTarget.buildOutlines();
                p = await sourceTarget.buildProgram();
            } catch (__error__) {

                if (is(__error__,any)){
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e : any = __error__;
                    return fail(null,e.error,s);
                }
            }
            return pass(p);
        } )());
    }

}

export namespace ClosureConversion {
    export type Constructors = 'ClosureConversion';
    export type Interface = Omit<ClosureConversion, Constructors>;
}
@DartClass
export class ClosureConversion extends any {
    constructor() {
    }
    @defaultConstructor
    ClosureConversion() {
    }
    get name() : string {
        return "closure conversion";
    }
    run(program : any,testContext : ClosureConversionContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                program = null /*topLevl*/.transformProgram(program);
                return pass(program);
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    return crash(e,s);
                }
            }
        } )());
    }

}

export class properties {
    private static __$STRONG_MODE : string;
    static get STRONG_MODE() : string { 
        if (this.__$STRONG_MODE===undefined) {
            this.__$STRONG_MODE = " strong mode ";
        }
        return this.__$STRONG_MODE;
    }
    static set STRONG_MODE(__$value : string)  { 
        this.__$STRONG_MODE = __$value;
    }

}
