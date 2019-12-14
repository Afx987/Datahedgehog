/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as collection from "@dart2ts/dart/core";

export namespace DartSdk {
    export type Constructors = 'DartSdk';
    export type Interface = Omit<DartSdk, Constructors>;
}
@DartClass
export class DartSdk {
    private static __$DART_ASYNC : string;
    static get DART_ASYNC() : string { 
        if (this.__$DART_ASYNC===undefined) {
            this.__$DART_ASYNC = "dart:async";
        }
        return this.__$DART_ASYNC;
    }

    private static __$DART_CORE : string;
    static get DART_CORE() : string { 
        if (this.__$DART_CORE===undefined) {
            this.__$DART_CORE = "dart:core";
        }
        return this.__$DART_CORE;
    }

    private static __$DART_HTML : string;
    static get DART_HTML() : string { 
        if (this.__$DART_HTML===undefined) {
            this.__$DART_HTML = "dart:html";
        }
        return this.__$DART_HTML;
    }

    private static __$DART_LIBRARY_PREFIX : string;
    static get DART_LIBRARY_PREFIX() : string { 
        if (this.__$DART_LIBRARY_PREFIX===undefined) {
            this.__$DART_LIBRARY_PREFIX = "dart:";
        }
        return this.__$DART_LIBRARY_PREFIX;
    }

    private static __$DEFAULT_VERSION : string;
    static get DEFAULT_VERSION() : string { 
        if (this.__$DEFAULT_VERSION===undefined) {
            this.__$DEFAULT_VERSION = "0";
        }
        return this.__$DEFAULT_VERSION;
    }

    @AbstractProperty
    get context() : any{ throw 'abstract'}
    @AbstractProperty
    get sdkLibraries() : core.DartList<SdkLibrary>{ throw 'abstract'}
    @AbstractProperty
    get sdkVersion() : string{ throw 'abstract'}
    @AbstractProperty
    get uris() : core.DartList<string>{ throw 'abstract'}
    @Abstract
    fromFileUri(uri : lib3.Uri) : any{ throw 'abstract'}
    @Abstract
    getLinkedBundle() : any{ throw 'abstract'}
    @Abstract
    getSdkLibrary(uri : string) : SdkLibrary{ throw 'abstract'}
    @Abstract
    mapDartUri(uri : string) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartSdk() {
    }
}

export namespace DartSdkManager {
    export type Constructors = 'DartSdkManager';
    export type Interface = Omit<DartSdkManager, Constructors>;
}
@DartClass
export class DartSdkManager {
    defaultSdkDirectory : string;

    canUseSummaries : boolean;

    sdkMap : core.DartMap<SdkDescription,DartSdk>;

    constructor(defaultSdkDirectory : string,canUseSummaries : boolean,ignored? : any) {
    }
    @defaultConstructor
    DartSdkManager(defaultSdkDirectory : string,canUseSummaries : boolean,ignored? : any) {
        this.sdkMap = new core.DartHashMap<SdkDescription,DartSdk>();
        this.defaultSdkDirectory = defaultSdkDirectory;
        this.canUseSummaries = canUseSummaries;
    }
    get anySdk() : DartSdk {
        if (this.sdkMap.isEmpty) {
            return null;
        }
        return this.sdkMap.values.first;
    }
    get sdkDescriptors() : core.DartList<SdkDescription> {
        return this.sdkMap.keys.toList();
    }
    getSdk(description : SdkDescription,ifAbsent : () => DartSdk) : DartSdk {
        return this.sdkMap.putIfAbsent(description,ifAbsent);
    }
}

export namespace LibraryMap {
    export type Constructors = 'LibraryMap';
    export type Interface = Omit<LibraryMap, Constructors>;
}
@DartClass
export class LibraryMap {
    _libraryMap : core.DartLinkedHashMap<string,SdkLibraryImpl>;

    get sdkLibraries() : core.DartList<SdkLibrary> {
        return new core.DartList.from(this._libraryMap.values);
    }
    get uris() : core.DartList<string> {
        return this._libraryMap.keys.toList();
    }
    getLibrary(uri : string) : SdkLibrary {
        return op(Op.INDEX,this._libraryMap,uri);
    }
    setLibrary(dartUri : string,library : SdkLibraryImpl) : void {
        op(Op.INDEX_ASSIGN,this._libraryMap,dartUri,library);
    }
    size() : number {
        return this._libraryMap.length;
    }
    constructor() {
    }
    @defaultConstructor
    LibraryMap() {
        this._libraryMap = new core.DartLinkedHashMap<string,SdkLibraryImpl>();
    }
}

export namespace SdkDescription {
    export type Constructors = 'SdkDescription';
    export type Interface = Omit<SdkDescription, Constructors>;
}
@DartClass
export class SdkDescription {
    paths : core.DartList<string>;

    options : any;

    constructor(paths : core.DartList<string>,options : any) {
    }
    @defaultConstructor
    SdkDescription(paths : core.DartList<string>,options : any) {
        this.paths = paths;
        this.options = options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hashCode : number = 0;
        for(let value of this.options.signature) {
            hashCode = JenkinsSmiHash.combine(hashCode,value);
        }
        for(let path of this.paths) {
            hashCode = JenkinsSmiHash.combine(hashCode,new core.DartString(path).hashCode);
        }
        return JenkinsSmiHash.finish(hashCode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (is(other, SdkDescription)) {
            if (!AnalysisOptions.signaturesEqual(this.options.signature,other.options.signature)) {
                return false;
            }
            let length : number = this.paths.length;
            if (other.paths.length != length) {
                return false;
            }
            for(let i : number = 0; i < length; i++){
                if (other.paths[i] != this.paths[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let needsSeparator : boolean = false;
        var add : (optionName : string) => void = (optionName : string) : void =>  {
            if (needsSeparator) {
                buffer.write(', ');
            }
            buffer.write(optionName);
            needsSeparator = true;
        };
        for(let path of this.paths) {
            add(path);
        }
        if (needsSeparator) {
            buffer.write(' ');
        }
        buffer.write('(');
        buffer.write(this.options.signature);
        buffer.write(')');
        return buffer.toString();
    }
}

export namespace SdkLibrariesReader_LibraryBuilder {
    export type Constructors = 'SdkLibrariesReader_LibraryBuilder';
    export type Interface = Omit<SdkLibrariesReader_LibraryBuilder, Constructors>;
}
@DartClass
export class SdkLibrariesReader_LibraryBuilder extends any {
    private static __$_LIBRARY_PREFIX : string;
    static get _LIBRARY_PREFIX() : string { 
        if (this.__$_LIBRARY_PREFIX===undefined) {
            this.__$_LIBRARY_PREFIX = "dart:";
        }
        return this.__$_LIBRARY_PREFIX;
    }
    static set _LIBRARY_PREFIX(__$value : string)  { 
        this.__$_LIBRARY_PREFIX = __$value;
    }

    private static __$_IMPLEMENTATION : string;
    static get _IMPLEMENTATION() : string { 
        if (this.__$_IMPLEMENTATION===undefined) {
            this.__$_IMPLEMENTATION = "implementation";
        }
        return this.__$_IMPLEMENTATION;
    }
    static set _IMPLEMENTATION(__$value : string)  { 
        this.__$_IMPLEMENTATION = __$value;
    }

    private static __$_DART2JS_PATH : string;
    static get _DART2JS_PATH() : string { 
        if (this.__$_DART2JS_PATH===undefined) {
            this.__$_DART2JS_PATH = "dart2jsPath";
        }
        return this.__$_DART2JS_PATH;
    }
    static set _DART2JS_PATH(__$value : string)  { 
        this.__$_DART2JS_PATH = __$value;
    }

    private static __$_DOCUMENTED : string;
    static get _DOCUMENTED() : string { 
        if (this.__$_DOCUMENTED===undefined) {
            this.__$_DOCUMENTED = "documented";
        }
        return this.__$_DOCUMENTED;
    }
    static set _DOCUMENTED(__$value : string)  { 
        this.__$_DOCUMENTED = __$value;
    }

    private static __$_CATEGORIES : string;
    static get _CATEGORIES() : string { 
        if (this.__$_CATEGORIES===undefined) {
            this.__$_CATEGORIES = "categories";
        }
        return this.__$_CATEGORIES;
    }
    static set _CATEGORIES(__$value : string)  { 
        this.__$_CATEGORIES = __$value;
    }

    private static __$_PLATFORMS : string;
    static get _PLATFORMS() : string { 
        if (this.__$_PLATFORMS===undefined) {
            this.__$_PLATFORMS = "platforms";
        }
        return this.__$_PLATFORMS;
    }
    static set _PLATFORMS(__$value : string)  { 
        this.__$_PLATFORMS = __$value;
    }

    private static __$_VM_PLATFORM : string;
    static get _VM_PLATFORM() : string { 
        if (this.__$_VM_PLATFORM===undefined) {
            this.__$_VM_PLATFORM = "VM_PLATFORM";
        }
        return this.__$_VM_PLATFORM;
    }
    static set _VM_PLATFORM(__$value : string)  { 
        this.__$_VM_PLATFORM = __$value;
    }

    _useDart2jsPaths : boolean;

    _librariesMap : LibraryMap;

    constructor(_useDart2jsPaths : boolean) {
    }
    @defaultConstructor
    SdkLibrariesReader_LibraryBuilder(_useDart2jsPaths : boolean) {
        this._librariesMap = new LibraryMap();
        this._useDart2jsPaths = _useDart2jsPaths;
    }
    get librariesMap() : LibraryMap {
        return this._librariesMap;
    }
    convertCategories(categories : string) : string {
        switch (categories) {
            case "":
                return "Internal";
            case "Client":
                return "Client";
            case "Server":
                return "Server";
            case "Client,Server":
                return "Shared";
            case "Client,Server,Embedded":
                return "Shared";
        }
        return "Shared";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteralEntry(node : any) : core.DartObject {
        let libraryName : string = null;
        let key : any = node.key;
        if (is(key, any)) {
            libraryName = `${SdkLibrariesReader_LibraryBuilder._LIBRARY_PREFIX}${key.value}`;
        }
        let value : any = node.value;
        if (is(value, any)) {
            let library : SdkLibraryImpl = new SdkLibraryImpl(libraryName);
            let arguments : core.DartList<any> = value.argumentList.arguments;
            for(let argument of arguments) {
                if (is(argument, any)) {
                    library.path = argument.value;
                }else if (is(argument, any)) {
                    let name : string = argument.name.label.name;
                    let expression : any = argument.expression;
                    if (name == SdkLibrariesReader_LibraryBuilder._CATEGORIES) {
                        library.category = this.convertCategories((expression as any).stringValue);
                    }else if (name == SdkLibrariesReader_LibraryBuilder._IMPLEMENTATION) {
                        library._implementation = (expression as any).value;
                    }else if (name == SdkLibrariesReader_LibraryBuilder._DOCUMENTED) {
                        library.documented = (expression as any).value;
                    }else if (name == SdkLibrariesReader_LibraryBuilder._PLATFORMS) {
                        if (is(expression, any)) {
                            let identifier : string = expression.name;
                            if (identifier == SdkLibrariesReader_LibraryBuilder._VM_PLATFORM) {
                                library.setVmLibrary();
                            }else {
                                library.setDart2JsLibrary();
                            }
                        }
                    }else if (this._useDart2jsPaths && name == SdkLibrariesReader_LibraryBuilder._DART2JS_PATH) {
                        if (is(expression, any)) {
                            library.path = expression.value;
                        }
                    }
                }
            }
            this._librariesMap.setLibrary(libraryName,library);
        }
        return null;
    }
}

export namespace SdkLibrary {
    export type Constructors = 'SdkLibrary';
    export type Interface = Omit<SdkLibrary, Constructors>;
}
@DartClass
export class SdkLibrary {
    @AbstractProperty
    get category() : string{ throw 'abstract'}
    @AbstractProperty
    get isDart2JsLibrary() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDocumented() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isImplementation() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isInternal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isShared() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isVmLibrary() : boolean{ throw 'abstract'}
    @AbstractProperty
    get path() : string{ throw 'abstract'}
    @AbstractProperty
    get shortName() : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    SdkLibrary() {
    }
}

export namespace SdkLibraryImpl {
    export type Constructors = 'SdkLibraryImpl';
    export type Interface = Omit<SdkLibraryImpl, Constructors>;
}
@DartClass
@Implements(SdkLibrary)
export class SdkLibraryImpl implements SdkLibrary.Interface {
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

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shortName : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    path : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    category : string;

    _documented : boolean;

    _implementation : boolean;

    _platforms : number;

    constructor(shortName : string) {
    }
    @defaultConstructor
    SdkLibraryImpl(shortName : string) {
        this.path = null;
        this.category = "Shared";
        this._documented = true;
        this._implementation = false;
        this._platforms = 0;
        this.shortName = shortName;
    }
    set documented(documented : boolean) {
        this._documented = documented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDart2JsLibrary() : boolean {
        return (this._platforms & SdkLibraryImpl.DART2JS_PLATFORM) != 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDocumented() : boolean {
        return this._documented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isImplementation() : boolean {
        return this._implementation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInternal() : boolean {
        return this.category == "Internal";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isShared() : boolean {
        return this.category == "Shared";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVmLibrary() : boolean {
        return (this._platforms & SdkLibraryImpl.VM_PLATFORM) != 0;
    }
    setDart2JsLibrary() : void {
        this._platforms |= SdkLibraryImpl.DART2JS_PLATFORM;
    }
    setVmLibrary() : void {
        this._platforms |= SdkLibraryImpl.VM_PLATFORM;
    }
}

export class properties {
}
