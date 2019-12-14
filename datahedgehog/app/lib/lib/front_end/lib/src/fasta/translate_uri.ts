/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/translate_uri.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./errors";

export namespace TranslateUri {
    export type Constructors = 'TranslateUri';
    export type Interface = Omit<TranslateUri, Constructors>;
}
@DartClass
export class TranslateUri {
    packages : core.DartMap<string,lib3.Uri>;

    dartLibraries : core.DartMap<string,lib3.Uri>;

    constructor(packages : core.DartMap<string,lib3.Uri>,dartLibraries : core.DartMap<string,lib3.Uri>) {
    }
    @defaultConstructor
    TranslateUri(packages : core.DartMap<string,lib3.Uri>,dartLibraries : core.DartMap<string,lib3.Uri>) {
        this.packages = packages;
        this.dartLibraries = dartLibraries;
    }
    translate(uri : lib3.Uri) : lib3.Uri {
        if (uri.scheme == "dart") return this.translateDartUri(uri);
        if (uri.scheme == "package") return this.translatePackageUri(uri);
        return null;
    }
    translateDartUri(uri : lib3.Uri) : lib3.Uri {
        if (!uri.isScheme('dart')) return null;
        let path : string = uri.path;
        let index : number = new core.DartString(path).indexOf('/');
        if (index == -1) return this.dartLibraries.get(path);
        let libraryName : string = new core.DartString(path).substring(0,index);
        let relativePath : string = new core.DartString(path).substring(index + 1);
        let libraryFileUri : lib3.Uri = this.dartLibraries.get(libraryName);
        return ((_561_)=>(!!_561_)?_561_.resolve(relativePath):null)(libraryFileUri);
    }
    translatePackageUri(uri : lib3.Uri) : lib3.Uri {
        let index : number = new core.DartString(uri.path).indexOf("/");
        if (index == -1) return null;
        let name : string = new core.DartString(uri.path).substring(0,index);
        let path : string = new core.DartString(uri.path).substring(index + 1);
        let root : lib3.Uri = this.packages.get(name);
        if (op(Op.EQUALS,root,null)) return null;
        return root.resolve(path);
    }
    static parse(fileSystem : any,sdk : lib3.Uri,uri? : lib3.Uri) : async.Future<TranslateUri> { 
        return new async.Future.fromPromise(( async () =>  {
            let dartLibraries : core.DartMap<string,lib3.Uri> = new core.DartMap.literal([
            ]);
            if (sdk != null) {
                dartLibraries = new core.DartMap.literal([
                    ["_async_await_error_codes",sdk.resolve("lib/_internal/js_runtime/lib/shared/async_await_error_codes.dart")],
                    ["_blink",sdk.resolve("lib/_blink/dartium/_blink_dartium.dart")],
                    ["_builtin",sdk.resolve("lib/_builtin/_builtin.dart")],
                    ["_chrome",sdk.resolve("lib/_chrome/dart2js/chrome_dart2js.dart")],
                    ["_foreign_helper",sdk.resolve("lib/_internal/js_runtime/lib/foreign_helper.dart")],
                    ["_interceptors",sdk.resolve("lib/_internal/js_runtime/lib/interceptors.dart")],
                    ["_internal",sdk.resolve("lib/internal/internal.dart")],
                    ["_isolate_helper",sdk.resolve("lib/_internal/js_runtime/lib/isolate_helper.dart")],
                    ["_js_embedded_names",sdk.resolve("lib/_internal/js_runtime/lib/shared/embedded_names.dart")],
                    ["_js_helper",sdk.resolve("lib/_internal/js_runtime/lib/js_helper.dart")],
                    ["_js_mirrors",sdk.resolve("lib/_internal/js_runtime/lib/js_mirrors.dart")],
                    ["_js_names",sdk.resolve("lib/_internal/js_runtime/lib/js_names.dart")],
                    ["_js_primitives",sdk.resolve("lib/_internal/js_runtime/lib/js_primitives.dart")],
                    ["_metadata",sdk.resolve("lib/html/html_common/metadata.dart")],
                    ["_native_typed_data",sdk.resolve("lib/_internal/js_runtime/lib/native_typed_data.dart")],
                    ["_vmservice",sdk.resolve("lib/vmservice/vmservice.dart")],
                    ["async",sdk.resolve("lib/async/async.dart")],
                    ["collection",sdk.resolve("lib/collection/collection.dart")],
                    ["convert",sdk.resolve("lib/convert/convert.dart")],
                    ["core",sdk.resolve("lib/core/core.dart")],
                    ["developer",sdk.resolve("lib/developer/developer.dart")],
                    ["html",sdk.resolve("lib/html/dart2js/html_dart2js.dart")],
                    ["html_common",sdk.resolve("lib/html/html_common/html_common_dart2js.dart")],
                    ["indexed_db",sdk.resolve("lib/indexed_db/dart2js/indexed_db_dart2js.dart")],
                    ["io",sdk.resolve("lib/io/io.dart")],
                    ["isolate",sdk.resolve("lib/isolate/isolate.dart")],
                    ["js",sdk.resolve("lib/js/dart2js/js_dart2js.dart")],
                    ["js_util",sdk.resolve("lib/js_util/dart2js/js_util_dart2js.dart")],
                    ["math",sdk.resolve("lib/math/math.dart")],
                    ["mirrors",sdk.resolve("lib/mirrors/mirrors.dart")],
                    ["nativewrappers",sdk.resolve("lib/html/dartium/nativewrappers.dart")],
                    ["profiler",sdk.resolve("lib/profiler/profiler.dart")],
                    ["svg",sdk.resolve("lib/svg/dart2js/svg_dart2js.dart")],
                    ["typed_data",sdk.resolve("lib/typed_data/typed_data.dart")],
                    ["vmservice_io",sdk.resolve("lib/vmservice_io/vmservice_io.dart")],
                    ["web_audio",sdk.resolve("lib/web_audio/dart2js/web_audio_dart2js.dart")],
                    ["web_gl",sdk.resolve("lib/web_gl/dart2js/web_gl_dart2js.dart")],
                    ["web_sql",sdk.resolve("lib/web_sql/dart2js/web_sql_dart2js.dart")]]);
            }
            uri = ( uri ) || ( lib3.Uri.base.resolve(".packages") );
            let bytes : core.DartList<number>;
            try {
                bytes = await fileSystem.entityForUri(uri).readAsBytes();
            } catch (__error__) {

                if (is(__error__,any)){
                    let e : any = __error__;
                    lib4.inputError(uri,-1,e.message);
                }
            }
            let packages : core.DartMap<string,lib3.Uri> = new core.DartMap.literal([
            ]);
            try {
                packages = null /*topLevl*/.parse(bytes,uri);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    let e : core.FormatException = __error__;
                    return lib4.inputError(uri,e.offset,e.message);
                }
            }
            return new TranslateUri(packages,dartLibraries);
        } )());
    }

}

export class properties {
}
