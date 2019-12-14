/** Library asset:datahedgehog_monitor/lib/lib/_internal/sdk_library_metadata/lib/libraries.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var parseCategory : (name : string) => Category = (name : string) : Category =>  {
    switch (name) {
        case "Client":
            return Category.client;
        case "Server":
            return Category.server;
        case "Embedded":
            return Category.embedded;
    }
    return null;
};
export enum Category {
    client,
    server,
    embedded
}

export namespace LibraryInfo {
    export type Constructors = 'LibraryInfo';
    export type Interface = Omit<LibraryInfo, Constructors>;
}
@DartClass
export class LibraryInfo {
    path : string;

    _categories : string;

    dart2jsPath : string;

    dart2jsPatchPath : string;

    documented : boolean;

    platforms : number;

    implementation : boolean;

    maturity : Maturity;

    constructor(path : string,_namedArguments? : {categories? : string,dart2jsPath? : string,dart2jsPatchPath? : string,implementation? : boolean,documented? : boolean,maturity? : Maturity,platforms? : number}) {
    }
    @defaultConstructor
    LibraryInfo(path : string,_namedArguments? : {categories? : string,dart2jsPath? : string,dart2jsPatchPath? : string,implementation? : boolean,documented? : boolean,maturity? : Maturity,platforms? : number}) {
        let {categories,dart2jsPath,dart2jsPatchPath,implementation,documented,maturity,platforms} = Object.assign({
            "categories" : "",
            "implementation" : false,
            "documented" : true,
            "maturity" : Maturity.UNSPECIFIED,
            "platforms" : properties.DART2JS_PLATFORM | properties.VM_PLATFORM}, _namedArguments );
        this._categories = categories;
        this.path = path;
        this.dart2jsPath = dart2jsPath;
        this.dart2jsPatchPath = dart2jsPatchPath;
        this.implementation = implementation;
        this.documented = documented;
        this.maturity = maturity;
        this.platforms = platforms;
    }
    get isDart2jsLibrary() : boolean {
        return (this.platforms & properties.DART2JS_PLATFORM) != 0;
    }
    get isVmLibrary() : boolean {
        return (this.platforms & properties.VM_PLATFORM) != 0;
    }
    get categories() : core.DartList<Category> {
        if (this._categories == "") return new core.DartList.literal<Category>();
        return new core.DartString(this._categories).split(",").map(parseCategory).toList();
    }
    get isInternal() : boolean {
        return this.categories.isEmpty;
    }
    get categoriesString() : string {
        return this._categories;
    }
}

export namespace Maturity {
    export type Constructors = 'Maturity';
    export type Interface = Omit<Maturity, Constructors>;
}
@DartClass
export class Maturity {
    level : number;

    name : string;

    description : string;

    constructor(level : number,name : string,description : string) {
    }
    @defaultConstructor
    Maturity(level : number,name : string,description : string) {
        this.level = level;
        this.name = name;
        this.description = description;
    }
    toString() : string {
        return `${this.name}: ${this.level}\n${this.description}\n`;
    }
    private static __$DEPRECATED : Maturity;
    static get DEPRECATED() : Maturity { 
        if (this.__$DEPRECATED===undefined) {
            this.__$DEPRECATED = new Maturity(0,"Deprecated","This library will be remove before next major release.");
        }
        return this.__$DEPRECATED;
    }

    private static __$EXPERIMENTAL : Maturity;
    static get EXPERIMENTAL() : Maturity { 
        if (this.__$EXPERIMENTAL===undefined) {
            this.__$EXPERIMENTAL = new Maturity(1,"Experimental","This library is experimental and will likely change or be removed\n" + "in future versions.");
        }
        return this.__$EXPERIMENTAL;
    }

    private static __$UNSTABLE : Maturity;
    static get UNSTABLE() : Maturity { 
        if (this.__$UNSTABLE===undefined) {
            this.__$UNSTABLE = new Maturity(2,"Unstable","This library is in still changing and have not yet endured\n" + "sufficient real-world testing.\n" + "Backwards-compatibility is NOT guaranteed.");
        }
        return this.__$UNSTABLE;
    }

    private static __$WEB_STABLE : Maturity;
    static get WEB_STABLE() : Maturity { 
        if (this.__$WEB_STABLE===undefined) {
            this.__$WEB_STABLE = new Maturity(3,"Web Stable","This library is tracking the DOM evolution as defined by WC3.\n" + "Backwards-compatibility is NOT guaranteed.");
        }
        return this.__$WEB_STABLE;
    }

    private static __$STABLE : Maturity;
    static get STABLE() : Maturity { 
        if (this.__$STABLE===undefined) {
            this.__$STABLE = new Maturity(4,"Stable","The library is stable. API backwards-compatibility is guaranteed.\n" + "However implementation details might change.");
        }
        return this.__$STABLE;
    }

    private static __$LOCKED : Maturity;
    static get LOCKED() : Maturity { 
        if (this.__$LOCKED===undefined) {
            this.__$LOCKED = new Maturity(5,"Locked","This library will not change except when serious bugs are encountered.");
        }
        return this.__$LOCKED;
    }

    private static __$UNSPECIFIED : Maturity;
    static get UNSPECIFIED() : Maturity { 
        if (this.__$UNSPECIFIED===undefined) {
            this.__$UNSPECIFIED = new Maturity(-1,"Unspecified","The maturity for this library has not been specified.");
        }
        return this.__$UNSPECIFIED;
    }

}

export class properties {
    private static __$DART2JS_PLATFORM : number;
    static get DART2JS_PLATFORM() : number { 
        if (this.__$DART2JS_PLATFORM===undefined) {
            this.__$DART2JS_PLATFORM = 1;
        }
        return this.__$DART2JS_PLATFORM;
    }
    static set DART2JS_PLATFORM(__$value : number)  { 
        this.__$DART2JS_PLATFORM = __$value;
    }

    private static __$VM_PLATFORM : number;
    static get VM_PLATFORM() : number { 
        if (this.__$VM_PLATFORM===undefined) {
            this.__$VM_PLATFORM = 2;
        }
        return this.__$VM_PLATFORM;
    }
    static set VM_PLATFORM(__$value : number)  { 
        this.__$VM_PLATFORM = __$value;
    }

    private static __$libraries : core.DartMap<string,LibraryInfo>;
    static get libraries() : core.DartMap<string,LibraryInfo> { 
        if (this.__$libraries===undefined) {
            this.__$libraries = new core.DartMap.literal([
                ["async",new LibraryInfo("async/async.dart",{
                    categories : "Client,Server",maturity : Maturity.STABLE,dart2jsPatchPath : "_internal/js_runtime/lib/async_patch.dart"})],
                ["_blink",new LibraryInfo("_blink/dartium/_blink_dartium.dart",{
                    categories : "Client",implementation : true,documented : false,platforms : properties.VM_PLATFORM})],
                ["_chrome",new LibraryInfo("_chrome/dart2js/chrome_dart2js.dart",{
                    categories : "Client",documented : false})],
                ["collection",new LibraryInfo("collection/collection.dart",{
                    categories : "Client,Server,Embedded",maturity : Maturity.STABLE,dart2jsPatchPath : "_internal/js_runtime/lib/collection_patch.dart"})],
                ["convert",new LibraryInfo("convert/convert.dart",{
                    categories : "Client,Server",maturity : Maturity.STABLE,dart2jsPatchPath : "_internal/js_runtime/lib/convert_patch.dart"})],
                ["core",new LibraryInfo("core/core.dart",{
                    categories : "Client,Server,Embedded",maturity : Maturity.STABLE,dart2jsPatchPath : "_internal/js_runtime/lib/core_patch.dart"})],
                ["developer",new LibraryInfo("developer/developer.dart",{
                    categories : "Client,Server,Embedded",maturity : Maturity.UNSTABLE,dart2jsPatchPath : "_internal/js_runtime/lib/developer_patch.dart"})],
                ["html",new LibraryInfo("html/dartium/html_dartium.dart",{
                    categories : "Client",maturity : Maturity.WEB_STABLE,dart2jsPath : "html/dart2js/html_dart2js.dart"})],
                ["html_common",new LibraryInfo("html/html_common/html_common.dart",{
                    categories : "Client",maturity : Maturity.WEB_STABLE,dart2jsPath : "html/html_common/html_common_dart2js.dart",documented : false,implementation : true})],
                ["indexed_db",new LibraryInfo("indexed_db/dartium/indexed_db_dartium.dart",{
                    categories : "Client",maturity : Maturity.WEB_STABLE,dart2jsPath : "indexed_db/dart2js/indexed_db_dart2js.dart"})],
                ["io",new LibraryInfo("io/io.dart",{
                    categories : "Server",dart2jsPatchPath : "_internal/js_runtime/lib/io_patch.dart"})],
                ["isolate",new LibraryInfo("isolate/isolate.dart",{
                    categories : "Client,Server",maturity : Maturity.STABLE,dart2jsPatchPath : "_internal/js_runtime/lib/isolate_patch.dart"})],
                ["js",new LibraryInfo("js/dartium/js_dartium.dart",{
                    categories : "Client",maturity : Maturity.STABLE,dart2jsPath : "js/dart2js/js_dart2js.dart"})],
                ["js_util",new LibraryInfo("js_util/dartium/js_util_dartium.dart",{
                    categories : "Client",maturity : Maturity.STABLE,dart2jsPath : "js_util/dart2js/js_util_dart2js.dart"})],
                ["math",new LibraryInfo("math/math.dart",{
                    categories : "Client,Server,Embedded",maturity : Maturity.STABLE,dart2jsPatchPath : "_internal/js_runtime/lib/math_patch.dart"})],
                ["mirrors",new LibraryInfo("mirrors/mirrors.dart",{
                    categories : "Client,Server",maturity : Maturity.UNSTABLE,dart2jsPatchPath : "_internal/js_runtime/lib/mirrors_patch.dart"})],
                ["nativewrappers",new LibraryInfo("html/dartium/nativewrappers.dart",{
                    categories : "Client",implementation : true,documented : false,platforms : properties.VM_PLATFORM})],
                ["typed_data",new LibraryInfo("typed_data/typed_data.dart",{
                    categories : "Client,Server,Embedded",maturity : Maturity.STABLE,dart2jsPatchPath : "_internal/js_runtime/lib/typed_data_patch.dart"})],
                ["_native_typed_data",new LibraryInfo("_internal/js_runtime/lib/native_typed_data.dart",{
                    categories : "",implementation : true,documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["svg",new LibraryInfo("svg/dartium/svg_dartium.dart",{
                    categories : "Client",maturity : Maturity.WEB_STABLE,dart2jsPath : "svg/dart2js/svg_dart2js.dart"})],
                ["web_audio",new LibraryInfo("web_audio/dartium/web_audio_dartium.dart",{
                    categories : "Client",maturity : Maturity.WEB_STABLE,dart2jsPath : "web_audio/dart2js/web_audio_dart2js.dart"})],
                ["web_gl",new LibraryInfo("web_gl/dartium/web_gl_dartium.dart",{
                    categories : "Client",maturity : Maturity.WEB_STABLE,dart2jsPath : "web_gl/dart2js/web_gl_dart2js.dart"})],
                ["web_sql",new LibraryInfo("web_sql/dartium/web_sql_dartium.dart",{
                    categories : "Client",maturity : Maturity.WEB_STABLE,dart2jsPath : "web_sql/dart2js/web_sql_dart2js.dart"})],
                ["_internal",new LibraryInfo("internal/internal.dart",{
                    categories : "",documented : false,dart2jsPatchPath : "_internal/js_runtime/lib/internal_patch.dart"})],
                ["_js_helper",new LibraryInfo("_internal/js_runtime/lib/js_helper.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_interceptors",new LibraryInfo("_internal/js_runtime/lib/interceptors.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_foreign_helper",new LibraryInfo("_internal/js_runtime/lib/foreign_helper.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_isolate_helper",new LibraryInfo("_internal/js_runtime/lib/isolate_helper.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_js_mirrors",new LibraryInfo("_internal/js_runtime/lib/js_mirrors.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_js_names",new LibraryInfo("_internal/js_runtime/lib/js_names.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_js_primitives",new LibraryInfo("_internal/js_runtime/lib/js_primitives.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_js_embedded_names",new LibraryInfo("_internal/js_runtime/lib/shared/embedded_names.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_async_await_error_codes",new LibraryInfo("_internal/js_runtime/lib/shared/async_await_error_codes.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})],
                ["_metadata",new LibraryInfo("html/html_common/metadata.dart",{
                    categories : "",documented : false,platforms : properties.DART2JS_PLATFORM})]]);
        }
        return this.__$libraries;
    }
    static set libraries(__$value : core.DartMap<string,LibraryInfo>)  { 
        this.__$libraries = __$value;
    }

}
