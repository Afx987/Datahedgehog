/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/reify/suite.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./kernel_chain";
import * as io from "@dart2ts/dart/io";

export var getEnvironmentVariable : (name : string,kind : Environment,undefined : string,notFound : (n : string) => any) => async.Future<string> = (name : string,kind : Environment,undefined : string,notFound : (n : string) => any) => new async.Future.fromPromise(( async () : Promise<string> =>  {
    let result : string = io.Platform.environment.get(name);
    if (result == null) {
        throw undefined;
    }
    switch (kind) {
        case Environment.directory:
            if (!await new io.Directory(result).exists()) throw notFound(result);
            break;
        case Environment.file:
            if (!await new io.File(result).exists()) throw notFound(result);
            break;
    }
    return result;
})());
export var fileExists : (base : lib3.Uri,path : string) => async.Future<boolean> = (base : lib3.Uri,path : string) => new async.Future.fromPromise(( async () : Promise<boolean> =>  {
    return await new io.File.fromUri(base.resolve(path)).exists();
})());
export var createContext : (suite : any,environment : core.DartMap<string,string>) => async.Future<TestContext> = (suite : any,environment : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<TestContext> =>  {
    let suggestion : string = "Try building the patched SDK by running\n    'tools/build.py patched_sdk'";
    let sdk : string = "out/DebugX64/patched_sdk/";
    let sdkUri : lib3.Uri = lib3.Uri.base.resolve(sdk);
    let asyncDart : string = "lib/async/async.dart";
    if (!await fileExists(sdkUri,asyncDart)) {
        throw `Couldn't find the patched SDK. ${suggestion}`;
    }
    let asyncSources : string = "lib/async/async_sources.gypi";
    if (await fileExists(sdkUri,asyncSources)) {
        throw `Found '${asyncSources}' in '${sdk}', so it isn't a patched SDK. ` + `${suggestion}`;
    }
    let vm : lib3.Uri = lib3.Uri.base.resolve("out/ReleaseX64/dart");
    let packages : lib3.Uri = lib3.Uri.base.resolve(".packages");
    let strongMode : boolean = true;
    let updateExpectations : boolean = new core.DartString.fromEnvironment("updateExpectations",{
        defaultValue : "false"}).valueOf() == "true";
    return new TestContext(sdk,vm,packages,strongMode,createDartSdk(sdk,{
        strongMode : strongMode}),updateExpectations);
})());
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    return runMe(arguments,createContext,"testing.json");
};
export namespace TestContext {
    export type Constructors = 'TestContext';
    export type Interface = Omit<TestContext, Constructors>;
}
@DartClass
export class TestContext extends any {
    vm : lib3.Uri;

    packages : lib3.Uri;

    options : any;

    dartSdk : any;

    steps : core.DartList<any>;

    constructor(sdk : string,vm : lib3.Uri,packages : lib3.Uri,strongMode : boolean,dartSdk : any,updateExpectations : boolean) {
    }
    @defaultConstructor
    TestContext(sdk : string,vm : lib3.Uri,packages : lib3.Uri,strongMode : boolean,dartSdk : any,updateExpectations : boolean) {
        this.packages = packages;
        this.options = new bare.createInstance(any,null,{
            strongMode : strongMode,sdk : sdk,packagePath : packages.toFilePath()});
        this.steps = new core.DartList.literal<any>(new NotReifiedKernel(),new lib4.Print(),new lib4.SanityCheck(),new GenericTypesReification(),new lib4.Print(),new lib4.SanityCheck(),new lib4.MatchExpectation(".expect",{
            updateExpectations : updateExpectations}),new lib4.WriteDill(),new lib4.ReadDill(),new Run());
        this.vm = vm;
        this.dartSdk = dartSdk;
    }
    createLoader() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return new bare.createInstance(any,null,new bare.createInstance(any,null),this.options,await loadPackagesFile(this.packages),{
                dartSdk : this.dartSdk});
        } )());
    }

}

export enum Environment {
    directory,
    file
}

export namespace NotReifiedTarget {
    export type Constructors = 'NotReifiedTarget';
    export type Interface = Omit<NotReifiedTarget, Constructors>;
}
@DartClass
export class NotReifiedTarget extends any {
    constructor(flags : any) {
    }
    @defaultConstructor
    NotReifiedTarget(flags : any) {
        super.DartObject(flags);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return "not reified target";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performTreeShaking(program : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performErasure(program : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get extraRequiredLibraries() : core.DartList<string> {
        let reifyTarget : any = getTarget("vmreify",this.flags);
        let x = reifyTarget.extraRequiredLibraries;
        return x;
    }
}

export namespace NotReifiedKernel {
    export type Constructors = 'NotReifiedKernel';
    export type Interface = Omit<NotReifiedKernel, Constructors>;
}
@DartClass
export class NotReifiedKernel extends any {
    constructor() {
    }
    @defaultConstructor
    NotReifiedKernel() {
    }
    get name() : string {
        return "kernel";
    }
    run(description : any,testContext : TestContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let loader : any = await testContext.createLoader();
                let target : any = new NotReifiedTarget(new bare.createInstance(any,null,{
                    strongMode : true,kernelRuntime : io.Platform.script.resolve("../../runtime/")}));
                let path : string = description.file.path;
                let uri : lib3.Uri = lib3.Uri.base.resolve(path);
                loader.loadProgram(uri,{
                    target : target});
                let program = loader.program;
                for(let error of loader.errors) {
                    return fail(program,`${error}`);
                }
                ((_) : NotReifiedTarget =>  {
                    {
                        performModularTransformations(program);
                        performGlobalTransformations(program);
                        return _;
                    }
                })(target);
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

export namespace GenericTypesReification {
    export type Constructors = 'GenericTypesReification';
    export type Interface = Omit<GenericTypesReification, Constructors>;
}
@DartClass
export class GenericTypesReification extends any {
    constructor() {
    }
    @defaultConstructor
    GenericTypesReification() {
    }
    get name() : string {
        return "generic types reification";
    }
    run(program : any,testContext : TestContext) : async.Future<any> { 
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
    run(uri : lib3.Uri,context : TestContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let generated : io.File = new io.File.fromUri(uri);
            let process : any;
            try {
                process = await StdioProcess.run(context.vm.toFilePath(),new core.DartList.literal(generated.path));
                core.print(process.output);
            } finally {
                generated.parent.delete({
                    recursive : true});
            }
            return process.toResult();
        } )());
    }

}

export class properties {
}
