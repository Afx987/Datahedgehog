/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/testing/suite.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as convert from "@dart2ts/dart/convert";
import * as io from "@dart2ts/dart/io";

export var shortenAstKindName : (astKind : AstKind,strongMode : boolean) => string = (astKind : AstKind,strongMode : boolean) : string =>  {
    switch (astKind) {
        case AstKind.Analyzer:
            return strongMode ? "dartk-strong" : "dartk";
        case AstKind.Kernel:
            return strongMode ? "strong" : "direct";
    }
    throw `Unknown AST kind: ${astKind}`;
};
export enum AstKind {
    Analyzer,
    Kernel
}

export namespace FastaContext {
    export type Constructors = 'FastaContext';
    export type Interface = Omit<FastaContext, Constructors>;
}
@DartClass
export class FastaContext extends any {
    uriTranslator : any;

    steps : core.DartList<any>;

    vm : lib3.Uri;

    sdk : lib3.Uri;

    platformUri : lib3.Uri;

    outlineUri : lib3.Uri;

    outlineBytes : core.DartList<number>;

    expectationSet : any;

    constructor(vm : lib3.Uri,strongMode : boolean,updateExpectations : boolean,updateComments : boolean,skipVm : boolean,uriTranslator : any,fullCompile : boolean,astKind : AstKind) {
    }
    @defaultConstructor
    FastaContext(vm : lib3.Uri,strongMode : boolean,updateExpectations : boolean,updateComments : boolean,skipVm : boolean,uriTranslator : any,fullCompile : boolean,astKind : AstKind) {
        this.expectationSet = new bare.createInstance(any,null,convert.properties.JSON.decode(properties.EXPECTATIONS));
        this.steps = new core.DartList.literal<any>(new Outline(fullCompile,astKind,strongMode,{
            updateComments : updateComments}),new bare.createInstance(any,null),new bare.createInstance(any,null,fullCompile),new bare.createInstance(any,null,fullCompile ? `.${shortenAstKindName(astKind,strongMode)}.expect` : ".outline.expect",{
            updateExpectations : updateExpectations}));
        this.vm = vm;
        this.uriTranslator = uriTranslator;
        if (fullCompile && !skipVm) {
            this.steps.add(new bare.createInstance(any,null));
            this.steps.add(new Run());
        }
    }
    ensurePlatformUris() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,this.sdk,null)) {
                this.sdk = await computePatchedSdk();
                this.platformUri = this.sdk.resolve('platform.dill');
                this.outlineUri = this.sdk.resolve('outline.dill');
            }
        } )());
    }

    loadPlatformOutline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.outlineBytes == null) {
                await this.ensurePlatformUris();
                this.outlineBytes = new io.File.fromUri(this.outlineUri).readAsBytesSync();
            }
            return loadProgramFromBytes(this.outlineBytes);
        } )());
    }

    static create(suite : any,environment : core.DartMap<string,string>) : async.Future<FastaContext> { 
        return new async.Future.fromPromise(( async () =>  {
            let sdk : lib3.Uri = await computePatchedSdk();
            let vm : lib3.Uri = computeDartVm(sdk);
            let packages : lib3.Uri = lib3.Uri.base.resolve(".packages");
            let uriTranslator : any = await TranslateUri.parse(PhysicalFileSystem.instance,packages);
            let strongMode : boolean = environment.containsKey(properties.STRONG_MODE);
            let updateExpectations : boolean = environment.get("updateExpectations") == "true";
            let updateComments : boolean = environment.get("updateComments") == "true";
            let skipVm : boolean = environment.get("skipVm") == "true";
            let astKindString : string = environment.get(properties.AST_KIND_INDEX);
            let astKind : AstKind = astKindString == null ? null : AstKind.values[core.DartInt.parse(astKindString)];
            return new FastaContext(vm,strongMode,updateExpectations,updateComments,skipVm,uriTranslator,environment.containsKey(properties.ENABLE_FULL_COMPILE),astKind);
        } )());
    }

}

export namespace Run {
    export type Constructors = 'Run';
    export type Interface = Omit<Run, Constructors>;
}
@DartClass
export class Run extends any {
    constructor() {
    }
    @defaultConstructor
    Run() {
    }
    get name() : string {
        return "run";
    }
    get isAsync() : boolean {
        return true;
    }
    get isRuntime() : boolean {
        return true;
    }
    run(uri : lib3.Uri,context : FastaContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let generated : io.File = new io.File.fromUri(uri);
            let process : any;
            try {
                await context.ensurePlatformUris();
                let platformDill = context.platformUri.toFilePath();
                let args = new core.DartList.literal(`--platform=${platformDill}`,generated.path,"Hello, World!");
                process = await StdioProcess.run(context.vm.toFilePath(),args);
                core.print(process.output);
            } finally {
                generated.parent.delete({
                    recursive : true});
            }
            return process.toResult();
        } )());
    }

}

export namespace Outline {
    export type Constructors = 'Outline';
    export type Interface = Omit<Outline, Constructors>;
}
@DartClass
export class Outline extends any {
    fullCompile : boolean;

    astKind : AstKind;

    strongMode : boolean;

    constructor(fullCompile : boolean,astKind : AstKind,strongMode : boolean,_namedArguments? : {updateComments? : boolean}) {
    }
    @defaultConstructor
    Outline(fullCompile : boolean,astKind : AstKind,strongMode : boolean,_namedArguments? : {updateComments? : boolean}) {
        let {updateComments} = Object.assign({
            "updateComments" : false}, _namedArguments );
        this.fullCompile = fullCompile;
        this.astKind = astKind;
        this.strongMode = strongMode;
        this.updateComments = updateComments;
    }
    updateComments : boolean;

    get name() : string {
        return this.fullCompile ? `${this.astKind} compile` : "outline";
    }
    get isCompiler() : boolean {
        return this.fullCompile;
    }
    run(description : any,context : FastaContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let platformOutline : any = await context.loadPlatformOutline();
            let ticker : any = new bare.createInstance(any,null);
            let dillTarget : any = new bare.createInstance(any,null,ticker,context.uriTranslator,"vm");
            platformOutline.unbindCanonicalNames();
            dillTarget.loader.appendLibraries(platformOutline);
            let sourceTarget : any = op(Op.EQUALS,this.astKind,AstKind.Analyzer) ? new bare.createInstance(any,null,dillTarget,context.uriTranslator,this.strongMode) : new bare.createInstance(any,null,PhysicalFileSystem.instance,dillTarget,context.uriTranslator,this.strongMode);
            let p : any;
            try {
                sourceTarget.read(description.uri);
                await dillTarget.buildOutlines();
                let instrumentation : any;
                if (this.strongMode) {
                    instrumentation = new bare.createInstance(any,null);
                    await instrumentation.loadExpectations(description.uri);
                    sourceTarget.loader.instrumentation = instrumentation;
                }
                p = await sourceTarget.buildOutlines();
                if (this.fullCompile) {
                    p = await sourceTarget.buildProgram({
                        trimDependencies : true});
                    ((_569_)=>(!!_569_)?_569_.finish():null)(instrumentation);
                    if (instrumentation != null && instrumentation.hasProblems) {
                        if (this.updateComments) {
                            await instrumentation.fixSource(description.uri);
                        }else {
                            return fail(null,instrumentation.problemsAsString);
                        }
                    }
                }
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

    private static __$ENABLE_FULL_COMPILE : string;
    static get ENABLE_FULL_COMPILE() : string { 
        if (this.__$ENABLE_FULL_COMPILE===undefined) {
            this.__$ENABLE_FULL_COMPILE = " full compile ";
        }
        return this.__$ENABLE_FULL_COMPILE;
    }
    static set ENABLE_FULL_COMPILE(__$value : string)  { 
        this.__$ENABLE_FULL_COMPILE = __$value;
    }

    private static __$AST_KIND_INDEX : string;
    static get AST_KIND_INDEX() : string { 
        if (this.__$AST_KIND_INDEX===undefined) {
            this.__$AST_KIND_INDEX = " AST kind index ";
        }
        return this.__$AST_KIND_INDEX;
    }
    static set AST_KIND_INDEX(__$value : string)  { 
        this.__$AST_KIND_INDEX = __$value;
    }

    private static __$EXPECTATIONS : string;
    static get EXPECTATIONS() : string { 
        if (this.__$EXPECTATIONS===undefined) {
            this.__$EXPECTATIONS = '[\n  {\n    "name": "VerificationError",\n    "group": "Fail"\n  }\n]\n';
        }
        return this.__$EXPECTATIONS;
    }
    static set EXPECTATIONS(__$value : string)  { 
        this.__$EXPECTATIONS = __$value;
    }

}
