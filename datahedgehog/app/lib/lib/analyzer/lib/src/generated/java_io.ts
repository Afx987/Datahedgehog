/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/java_io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";
import * as io from "@dart2ts/dart/io";
import * as lib6 from "@dart2ts/dart/uri";

export namespace JavaFile {
    export type Constructors = 'JavaFile' | 'fromUri' | 'relative';
    export type Interface = Omit<JavaFile, Constructors>;
}
@DartClass
export class JavaFile {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    private static __$pathContext : lib4.Context;
    static get pathContext() : lib4.Context { 
        if (this.__$pathContext===undefined) {
            this.__$pathContext = lib3.properties.context;
        }
        return this.__$pathContext;
    }
    static set pathContext(__$value : lib4.Context)  { 
        this.__$pathContext = __$value;
    }

    private static __$separator : string;
    static get separator() : string { 
        if (this.__$separator===undefined) {
            this.__$separator = io.Platform.pathSeparator;
        }
        return this.__$separator;
    }
    static set separator(__$value : string)  { 
        this.__$separator = __$value;
    }

    private static __$separatorChar : number;
    static get separatorChar() : number { 
        if (this.__$separatorChar===undefined) {
            this.__$separatorChar = new core.DartString(io.Platform.pathSeparator).codeUnitAt(0);
        }
        return this.__$separatorChar;
    }
    static set separatorChar(__$value : number)  { 
        this.__$separatorChar = __$value;
    }

    _path : string;

    constructor(path : string) {
    }
    @defaultConstructor
    JavaFile(path : string) {
        this._path = path;
    }
    @namedConstructor
    fromUri(uri : lib6.Uri) {
        this.JavaFile(lib3.properties.context.fromUri(uri));
    }
    static fromUri : new(uri : lib6.Uri) => JavaFile;

    @namedConstructor
    relative(base : JavaFile,child : string) {
        if (new core.DartString(child).isEmpty) {
            this._path = base._path;
        }else {
            this._path = lib3.properties.context.join(base._path,child);
        }
    }
    static relative : new(base : JavaFile,child : string) => JavaFile;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return new core.DartString(this._path).hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        return is(other, JavaFile) && other._path == this._path;
    }
    exists() : boolean {
        if (this._newFile().existsSync()) {
            return true;
        }
        if (this._newDirectory().existsSync()) {
            return true;
        }
        return false;
    }
    getAbsoluteFile() : JavaFile {
        return new JavaFile(this.getAbsolutePath());
    }
    getAbsolutePath() : string {
        let abolutePath : string = lib3.properties.context.absolute(this._path);
        abolutePath = lib3.properties.context.normalize(abolutePath);
        return abolutePath;
    }
    getCanonicalFile() : JavaFile {
        return new JavaFile(this.getCanonicalPath());
    }
    getCanonicalPath() : string {
        return this._newFile().resolveSymbolicLinksSync();
    }
    getName() : string {
        return lib3.properties.context.basename(this._path);
    }
    getParent() : string {
        let result = lib3.properties.context.dirname(this._path);
        if (new core.DartString(result).length < 4) return null;
        return result;
    }
    getParentFile() : JavaFile {
        let parent = this.getParent();
        if (parent == null) return null;
        return new JavaFile(parent);
    }
    getPath() : string {
        return this._path;
    }
    isDirectory() : boolean {
        return this._newDirectory().existsSync();
    }
    isExecutable() : boolean {
        return this._newFile().statSync().mode & 273 != 0;
    }
    isFile() : boolean {
        return this._newFile().existsSync();
    }
    lastModified() : number {
        try {
            return this._newFile().lastModifiedSync().millisecondsSinceEpoch;
        } catch (__error__) {

            {
                let exception = __error__;
                return -1;
            }
        }
    }
    listFiles() : core.DartList<JavaFile> {
        let files = new core.DartList.literal<JavaFile>();
        let entities = this._newDirectory().listSync();
        for(let entity of entities) {
            files.add(new JavaFile(entity.path));
        }
        return files;
    }
    readAsStringSync() : string {
        return this._newFile().readAsStringSync();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return new core.DartString(this._path).toString();
    }
    toURI() : lib6.Uri {
        let absolutePath : string = this.getAbsolutePath();
        return lib3.properties.context.toUri(absolutePath);
    }
    _newDirectory() : io.Directory {
        return new io.Directory(this._path);
    }
    _newFile() : io.File {
        return new io.File(this._path);
    }
}

export namespace JavaSystemIO {
    export type Constructors = 'JavaSystemIO';
    export type Interface = Omit<JavaSystemIO, Constructors>;
}
@DartClass
export class JavaSystemIO {
    private static __$_properties : core.DartMap<string,string>;
    static get _properties() : core.DartMap<string,string> { 
        if (this.__$_properties===undefined) {
            this.__$_properties = new core.DartMap<any,any>();
        }
        return this.__$_properties;
    }
    static set _properties(__$value : core.DartMap<string,string>)  { 
        this.__$_properties = __$value;
    }

    static getenv(name : string) : string {
        return io.Platform.environment.get(name);
    }
    static getProperty(name : string) : string {
        {
            let value : string = JavaSystemIO._properties.get(name);
            if (value != null) {
                return value;
            }
        }
        if (name == 'os.name') {
            return io.Platform.operatingSystem;
        }
        if (name == 'line.separator') {
            if (io.Platform.isWindows) {
                return '\n';
            }
            return '\n';
        }
        if (name == 'com.google.dart.sdk') {
            let exec : string = io.Platform.executable;
            if (new core.DartString(exec).length != 0) {
                let sdkPath : string;
                {
                    let outDir = lib3.properties.context.dirname(lib3.properties.context.dirname(exec));
                    sdkPath = lib3.properties.context.join(lib3.properties.context.dirname(outDir),"sdk");
                    if (new io.Directory(sdkPath).existsSync()) {
                        JavaSystemIO._properties.set(name,sdkPath);
                        return sdkPath;
                    }
                }
                sdkPath = lib3.properties.context.dirname(lib3.properties.context.dirname(exec));
                JavaSystemIO._properties.set(name,sdkPath);
                return sdkPath;
            }
        }
        return null;
    }
    static setProperty(name : string,value : string) : string {
        let oldValue : string = JavaSystemIO._properties.get(name);
        JavaSystemIO._properties.set(name,value);
        return oldValue;
    }
    constructor() {
    }
    @defaultConstructor
    JavaSystemIO() {
    }
}

export class properties {
}
