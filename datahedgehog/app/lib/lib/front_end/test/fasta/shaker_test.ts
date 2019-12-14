/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/shaker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./testing/suite";
import * as convert from "@dart2ts/dart/convert";
import * as io from "@dart2ts/dart/io";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    return runMe(arguments,createContext,"testing.json");
};
export var createContext : (suite : any,environment : core.DartMap<string,string>) => async.Future<TreeShakerContext> = (suite : any,environment : core.DartMap<string,string>) : async.Future<TreeShakerContext> =>  {
    return TreeShakerContext.create(environment);
};
export namespace TreeShakerContext {
    export type Constructors = 'TreeShakerContext';
    export type Interface = Omit<TreeShakerContext, Constructors>;
}
@DartClass
export class TreeShakerContext extends any {
    uriTranslator : any;

    outlineUri : lib3.Uri;

    steps : core.DartList<any>;

    outlineBytes : core.DartList<number>;

    expectationSet : any;

    constructor(outlineUri : lib3.Uri,uriTranslator : any,outlineBytes : core.DartList<number>,updateExpectations : boolean) {
    }
    @defaultConstructor
    TreeShakerContext(outlineUri : lib3.Uri,uriTranslator : any,outlineBytes : core.DartList<number>,updateExpectations : boolean) {
        this.expectationSet = new bare.createInstance(any,null,convert.properties.JSON.decode(lib4.properties.EXPECTATIONS));
        this.steps = new core.DartList.literal<any>(new BuildProgram(),new CheckShaker({
            updateExpectations : updateExpectations}));
        this.outlineUri = outlineUri;
        this.uriTranslator = uriTranslator;
        this.outlineBytes = outlineBytes;
    }
    loadPlatformOutline() : any {
        return loadProgramFromBytes(this.outlineBytes);
    }
    static create(environment : core.DartMap<string,string>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            environment.set(lib4.properties.ENABLE_FULL_COMPILE,"");
            environment.set(lib4.properties.AST_KIND_INDEX,`${lib4.AstKind.Kernel.index}`);
            let updateExpectations : boolean = environment.get("updateExpectations") == "true";
            let sdk : lib3.Uri = await computePatchedSdk();
            let outlineUri : lib3.Uri = sdk.resolve('outline.dill');
            let packages : lib3.Uri = lib3.Uri.base.resolve(".packages");
            let uriTranslator : any = await TranslateUri.parse(PhysicalFileSystem.instance,packages);
            let outlineBytes : core.DartList<number> = new io.File.fromUri(outlineUri).readAsBytesSync();
            return new TreeShakerContext(outlineUri,uriTranslator,outlineBytes,updateExpectations);
        } )());
    }

}

export namespace BuildProgram {
    export type Constructors = 'BuildProgram';
    export type Interface = Omit<BuildProgram, Constructors>;
}
@DartClass
export class BuildProgram extends any {
    constructor() {
    }
    @defaultConstructor
    BuildProgram() {
    }
    get name() : string {
        return "build program";
    }
    run(description : any,context : TreeShakerContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let platformOutline = context.loadPlatformOutline();
                platformOutline.unbindCanonicalNames();
                let dillTarget = new bare.createInstance(any,null,new bare.createInstance(any,null,{
                    isVerbose : false}),context.uriTranslator,"vm");
                dillTarget.loader.appendLibraries(platformOutline);
                let sourceTarget = new bare.createInstance(any,null,PhysicalFileSystem.instance,dillTarget,context.uriTranslator,false);
                await dillTarget.buildOutlines();
                let inputUri = description.uri;
                let libUri = inputUri.resolve('lib/lib.dart');
                sourceTarget.read(libUri);
                dillTarget.loader.appendLibraries(await sourceTarget.buildOutlines(),(uri : any) =>  {
                    return op(Op.EQUALS,uri,libUri);
                });
                sourceTarget = new bare.createInstance(any,null,PhysicalFileSystem.instance,dillTarget,context.uriTranslator,false);
                await dillTarget.buildOutlines();
                sourceTarget.read(inputUri);
                let contents = new io.File.fromUri(inputUri).readAsStringSync();
                let showCoreLibraries = new core.DartString(contents).contains("@@SHOW_CORE_LIBRARIES@@");
                await sourceTarget.buildOutlines();
                let program = await sourceTarget.buildProgram({
                    trimDependencies : true});
                return pass(new _IntermediateData(inputUri,program,showCoreLibraries));
            } catch (__error__) {

                if (is(__error__,any)){
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e : any = __error__;
                    return fail(null,e.error,s);
                }
            }
        } )());
    }

}

export namespace _IntermediateData {
    export type Constructors = '_IntermediateData';
    export type Interface = Omit<_IntermediateData, Constructors>;
}
@DartClass
export class _IntermediateData {
    uri : lib3.Uri;

    program : any;

    showCoreLibraries : boolean;

    constructor(uri : lib3.Uri,program : any,showCoreLibraries : boolean) {
    }
    @defaultConstructor
    _IntermediateData(uri : lib3.Uri,program : any,showCoreLibraries : boolean) {
        this.uri = uri;
        this.program = program;
        this.showCoreLibraries = showCoreLibraries;
    }
}

export namespace CheckShaker {
    export type Constructors = 'CheckShaker';
    export type Interface = Omit<CheckShaker, Constructors>;
}
@DartClass
export class CheckShaker extends any {
    updateExpectations : boolean;

    constructor(_namedArguments? : {updateExpectations? : boolean}) {
    }
    @defaultConstructor
    CheckShaker(_namedArguments? : {updateExpectations? : boolean}) {
        let {updateExpectations} = Object.assign({
            "updateExpectations" : false}, _namedArguments );
        this.updateExpectations = updateExpectations;
    }
    get name() : string {
        return "match shaker expectation";
    }
    _isTreeShaken(uri : lib3.Uri) : boolean {
        return uri.isScheme('dart') || new core.DartString(lib3.Uri.base.resolveUri(uri).path).endsWith(properties._specialLibraryPath);
    }
    run(data : _IntermediateData,context : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let actualResult : string;
            let entryUri = data.program.libraries.firstWhere((l : any) =>  {
                return !l.importUri.isScheme('dart');
            }).importUri;
            let program = data.program;
            let errors = verifyProgram(program,{
                isOutline : false});
            if (!errors.isEmpty) {
                return new bare.createInstance(any,null,null,op(Op.INDEX,context.expectationSet,"VerificationError"),errors,null);
            }
            let buffer = new core.DartStringBuffer();
            buffer.writeln('DO NOT EDIT -- this file is autogenerated ---');
            buffer.writeln('Tree-shaker preserved the following:');
            for(let library of program.libraries) {
                let importUri = library.importUri;
                if (!this._isTreeShaken(importUri)) continue;
                if (importUri.isScheme('dart') && !data.showCoreLibraries) continue;
                let uri : string = relativizeUri(library.importUri);
                buffer.writeln(`\nlibrary ${uri}:`);
                for(let member of library.members) {
                    buffer.writeln(`  - member ${member.name}`);
                }
                for(let typedef_ of library.typedefs) {
                    buffer.writeln(`  - typedef ${typedef_.name}`);
                }
                for(let cls of library.classes) {
                    buffer.writeln(`  - class ${cls.name}`);
                    for(let member of cls.members) {
                        let name = `${member.name}`;
                        if (name == "") {
                            buffer.writeln('    - (default constructor)');
                        }else {
                            buffer.writeln(`    - ${name}`);
                        }
                    }
                }
            }
            actualResult = `${buffer}`;
            let expectedFile : io.File = new io.File(`${entryUri.toFilePath()}.shaker`);
            if (await expectedFile.exists()) {
                let expected : string = await expectedFile.readAsString();
                if (new core.DartString(expected).trim() != new core.DartString(actualResult).trim()) {
                    if (!this.updateExpectations) {
                        let diff : string = await runDiff(expectedFile.uri,actualResult);
                        return fail(null,`${entryUri} doesn't match ${expectedFile.uri}\n${diff}`);
                    }
                }else {
                    return pass(actualResult);
                }
            }
            if (this.updateExpectations) {
                expectedFile.writeAsStringSync(actualResult);
                return pass(actualResult);
            }else {
                return fail(actualResult,`Please create file ${expectedFile.path} with this content:\n${buffer}`);
            }
        } )());
    }

}

export class properties {
    private static __$_specialLibraryPath;
    static get _specialLibraryPath() { 
        if (this.__$_specialLibraryPath===undefined) {
            this.__$_specialLibraryPath = 'pkg/front_end/testcases/shaker/lib/lib.dart';
        }
        return this.__$_specialLibraryPath;
    }
    static set _specialLibraryPath(__$value : any)  { 
        this.__$_specialLibraryPath = __$value;
    }

}
