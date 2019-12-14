/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/source/source_resource.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";

export namespace FileSource {
    export type Constructors = 'FileSource';
    export type Interface = Omit<FileSource, Constructors>;
}
@DartClass
export class FileSource extends any {
    private static __$fileReadMode : (s : string) => string;
    static get fileReadMode() : (s : string) => string { 
        if (this.__$fileReadMode===undefined) {
            this.__$fileReadMode = (s : string) =>  {
                return s;
            };
        }
        return this.__$fileReadMode;
    }
    static set fileReadMode(__$value : (s : string) => string)  { 
        this.__$fileReadMode = __$value;
    }

    private static __$_idTable : core.DartMap<string,number>;
    static get _idTable() : core.DartMap<string,number> { 
        if (this.__$_idTable===undefined) {
            this.__$_idTable = new core.DartHashMap<string,number>();
        }
        return this.__$_idTable;
    }
    static set _idTable(__$value : core.DartMap<string,number>)  { 
        this.__$_idTable = __$value;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib4.Uri;

    id : number;

    file : any;

    _absolutePath : string;

    _encoding : string;

    constructor(file : any,uri? : lib4.Uri) {
    }
    @defaultConstructor
    FileSource(file : any,uri? : lib4.Uri) {
        this.uri = (uri || file.toUri());
        this.file = file;
        this.id = FileSource._idTable.putIfAbsent(`${(uri || file.toUri())}@${file.path}`,() =>  {
            return FileSource._idTable.length;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contents() : any {
        return PerformanceStatistics.io.makeCurrentWhile(() =>  {
            return this.contentsFromFile;
        });
    }
    get contentsFromFile() : any {
        return new bare.createInstance(any,null,this.modificationStamp,FileSource.fileReadMode(this.file.readAsStringSync()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get encoding() : string {
        return this._encoding = ( this._encoding ) || ( this.uri.toString() );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullName() : string {
        return this._absolutePath = ( this._absolutePath ) || ( this.file.path );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.uri.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInSystemLibrary() : boolean {
        return this.uri.scheme == DartUriResolver.DART_SCHEME;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        try {
            return this.file.modificationStamp;
        } catch (__error__) {

            if (is(__error__,any)){
                return -1;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shortName() : string {
        return this.file.shortName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriKind() : any {
        return UriKind.fromScheme(this.uri.scheme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (is(object, FileSource)) {
            return this.id == object.id;
        }else if (is(object, any)) {
            return op(Op.EQUALS,this.uri,object.uri);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : boolean {
        return this.file.exists;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (op(Op.EQUALS,this.file,null)) {
            return "<unknown source>";
        }
        return this.file.path;
    }
}

export class properties {
}
