/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/testing/patched_sdk_location.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./environment_variable";

export var computePatchedSdk : () => async.Future<lib4.Uri> = () => new async.Future.fromPromise(( async () : Promise<lib4.Uri> =>  {
    let config : string = await properties.testConfigVariable.value;
    let path : string;
    switch (io.Platform.operatingSystem) {
        case "linux":
            path = `out/${config}/patched_sdk`;
            break;
        case "macos":
            path = `xcodebuild/${config}/patched_sdk`;
            break;
        case "windows":
            path = `build/${config}/patched_sdk`;
            break;
        default:
            throw `Unsupported operating system: '${io.Platform.operatingSystem}'.`;
    }
    let sdk : lib4.Uri = lib4.Uri.base.resolve(`${path}/`);
    let asyncDart : string = "lib/async/async.dart";
    if (!await fileExists(sdk,asyncDart)) {
        throw `Couldn't find '${asyncDart}' in '${sdk}'.`;
    }
    let asyncSources : string = "lib/async/async_sources.gypi";
    if (await fileExists(sdk,asyncSources)) {
        throw `Found '${asyncSources}' in '${sdk}', so it isn't a patched SDK.`;
    }
    return sdk;
})());
export var computeDartVm : (patchedSdk : lib4.Uri) => lib4.Uri = (patchedSdk : lib4.Uri) : lib4.Uri =>  {
    return patchedSdk.resolve(io.Platform.isWindows ? "../dart.exe" : "../dart");
};
export var fileExists : (base : lib4.Uri,path : string) => async.Future<boolean> = (base : lib4.Uri,path : string) => new async.Future.fromPromise(( async () : Promise<boolean> =>  {
    return await new io.File.fromUri(base.resolve(path)).exists();
})());
export class properties {
    private static __$testConfigVariable : lib5.EnvironmentVariable;
    static get testConfigVariable() : lib5.EnvironmentVariable { 
        if (this.__$testConfigVariable===undefined) {
            this.__$testConfigVariable = new lib5.EnvironmentVariable("DART_CONFIGURATION","It should be something like 'ReleaseX64', depending on which" + " configuration you're testing.");
        }
        return this.__$testConfigVariable;
    }
    static set testConfigVariable(__$value : lib5.EnvironmentVariable)  { 
        this.__$testConfigVariable = __$value;
    }

}
