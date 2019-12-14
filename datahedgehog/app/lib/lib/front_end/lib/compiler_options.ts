/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/compiler_options.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./compilation_error";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./physical_file_system";
import * as lib6 from "./file_system";

export var defaultErrorHandler : (error : lib3.CompilationError) => void = (error : lib3.CompilationError) : void =>  {
    return throw error;
};
export namespace CompilerOptions {
    export type Constructors = 'CompilerOptions';
    export type Interface = Omit<CompilerOptions, Constructors>;
}
@DartClass
export class CompilerOptions {
    sdkRoot : lib4.Uri;

    dartLibraries : core.DartMap<string,lib4.Uri>;

    onError : (error : lib3.CompilationError) => void;

    packagesFileUri : lib4.Uri;

    inputSummaries : core.DartList<lib4.Uri>;

    sdkSummary : lib4.Uri;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    uriOverride : core.DartMap<lib4.Uri,lib4.Uri>;

    multiRoots : core.DartList<lib4.Uri>;

    declaredVariables : core.DartMap<string,string>;

    fileSystem : lib6.FileSystem;

    byteStore : any;

    logger : any;

    compileSdk : boolean;

    chaseDependencies : boolean;

    strongMode : boolean;

    targetPatches : core.DartMap<lib4.Uri,core.DartList<lib4.Uri>>;

    additionalLibraries : core.DartList<lib4.Uri>;

    constructor() {
    }
    @defaultConstructor
    CompilerOptions() {
        this.dartLibraries = new core.DartMap.literal([
        ]);
        this.onError = defaultErrorHandler;
        this.inputSummaries = new core.DartList.literal();
        this.uriOverride = new core.DartMap.literal([
        ]);
        this.multiRoots = new core.DartList.literal();
        this.fileSystem = lib5.PhysicalFileSystem.instance;
        this.byteStore = new bare.createInstance(any,null);
        this.logger = new bare.createInstance(any,null,new core.DartStringBuffer());
        this.compileSdk = false;
        this.chaseDependencies = false;
        this.strongMode = true;
        this.targetPatches = new core.DartMap.literal([
        ]);
        this.additionalLibraries = new core.DartList.literal();
    }
}

export class properties {
}
