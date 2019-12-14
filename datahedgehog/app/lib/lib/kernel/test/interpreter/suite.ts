/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/interpreter/suite.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    return runMe(arguments,InterpreterContext.create.bind(InterpreterContext),"testing.json");
};
export namespace InterpreterContext {
    export type Constructors = 'InterpreterContext';
    export type Interface = Omit<InterpreterContext, Constructors>;
}
@DartClass
export class InterpreterContext extends any {
    strongMode : boolean;

    uriTranslator : any;

    steps : core.DartList<any>;

    platform : async.Future<any>;

    constructor(strongMode : boolean,uriTranslator : any) {
    }
    @defaultConstructor
    InterpreterContext(strongMode : boolean,uriTranslator : any) {
        this.steps = new core.DartList.literal<any>(new FastaCompile(),new Interpret(),new MatchLogExpectation(".expect"));
        this.strongMode = strongMode;
        this.uriTranslator = uriTranslator;
    }
    loadPlatform() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let sdk : lib3.Uri = await computePatchedSdk();
            return loadProgramFromBinary(sdk.resolve('platform.dill').toFilePath());
        } )());
    }

    static create(suite : any,environment : core.DartMap<string,string>) : async.Future<InterpreterContext> { 
        return new async.Future.fromPromise(( async () =>  {
            let packages : lib3.Uri = lib3.Uri.base.resolve(".packages");
            let strongMode : boolean = environment.containsKey(properties.STRONG_MODE);
            let uriTranslator : any = await TranslateUri.parse(PhysicalFileSystem.instance,packages);
            return new InterpreterContext(strongMode,uriTranslator);
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
        return "fasta compile";
    }
    run(description : any,context : InterpreterContext) : async.Future<any> { 
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

export namespace Interpret {
    export type Constructors = 'Interpret';
    export type Interface = Omit<Interpret, Constructors>;
}
@DartClass
export class Interpret extends any {
    constructor() {
    }
    @defaultConstructor
    Interpret() {
    }
    get name() : string {
        return "interpret";
    }
    run(program : any,_ : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library : any = program.libraries.firstWhere((library : any) =>  {
                return library.importUri.scheme != "dart";
            });
            let uri : lib3.Uri = library.importUri;
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            log.onRecord.listen((rec : any) =>  {
                return buffer.write(rec.message);
            });
            try {
                new bare.createInstance(any,null,program).run();
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    return crash(e,s);
                }
            }
            return pass(new EvaluationLog(uri,`${buffer}`));
        } )());
    }

}

export namespace MatchLogExpectation {
    export type Constructors = 'MatchLogExpectation';
    export type Interface = Omit<MatchLogExpectation, Constructors>;
}
@DartClass
export class MatchLogExpectation extends any {
    suffix : string;

    get name() : string {
        return "match log expectation";
    }
    constructor(suffix : string) {
    }
    @defaultConstructor
    MatchLogExpectation(suffix : string) {
        this.suffix = suffix;
    }
    run(result : EvaluationLog,_ : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let uri : lib3.Uri = result.uri;
            let expectedFile : io.File = new io.File(`${uri.toFilePath()}${this.suffix}`);
            if (await expectedFile.exists()) {
                let expected : string = await expectedFile.readAsString();
                if (new core.DartString(expected).trim() != new core.DartString(result.log).trim()) {
                    let diff : string = await runDiff(expectedFile.uri,result.log);
                    return fail(null,`${uri} doesn't match ${expectedFile.uri}\n${diff}`);
                }else {
                    return pass(0);
                }
            }
            return fail(null,`Please create file ${expectedFile.path} with this content:\n        ${result.log}`);
        } )());
    }

}

export namespace EvaluationLog {
    export type Constructors = 'EvaluationLog';
    export type Interface = Omit<EvaluationLog, Constructors>;
}
@DartClass
export class EvaluationLog {
    uri : lib3.Uri;

    log : string;

    constructor(uri : lib3.Uri,log : string) {
    }
    @defaultConstructor
    EvaluationLog(uri : lib3.Uri,log : string) {
        this.uri = uri;
        this.log = log;
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
