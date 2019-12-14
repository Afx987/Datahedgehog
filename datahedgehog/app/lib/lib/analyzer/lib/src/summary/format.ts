/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/format.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./idl";
import * as convert from "@dart2ts/dart/convert";

export var readUnlinkedUnit : (buffer : core.DartList<number>) => lib3.UnlinkedUnit = (buffer : core.DartList<number>) : lib3.UnlinkedUnit =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _UnlinkedUnitReader().read(rootRef,0);
};
export var readAnalysisDriverExceptionContext : (buffer : core.DartList<number>) => lib3.AnalysisDriverExceptionContext = (buffer : core.DartList<number>) : lib3.AnalysisDriverExceptionContext =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _AnalysisDriverExceptionContextReader().read(rootRef,0);
};
export var readAnalysisDriverResolvedUnit : (buffer : core.DartList<number>) => lib3.AnalysisDriverResolvedUnit = (buffer : core.DartList<number>) : lib3.AnalysisDriverResolvedUnit =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _AnalysisDriverResolvedUnitReader().read(rootRef,0);
};
export var readAnalysisDriverUnitIndex : (buffer : core.DartList<number>) => lib3.AnalysisDriverUnitIndex = (buffer : core.DartList<number>) : lib3.AnalysisDriverUnitIndex =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _AnalysisDriverUnitIndexReader().read(rootRef,0);
};
export var readAnalysisDriverUnlinkedUnit : (buffer : core.DartList<number>) => lib3.AnalysisDriverUnlinkedUnit = (buffer : core.DartList<number>) : lib3.AnalysisDriverUnlinkedUnit =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _AnalysisDriverUnlinkedUnitReader().read(rootRef,0);
};
export var readLinkedLibrary : (buffer : core.DartList<number>) => lib3.LinkedLibrary = (buffer : core.DartList<number>) : lib3.LinkedLibrary =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _LinkedLibraryReader().read(rootRef,0);
};
export var readPackageBundle : (buffer : core.DartList<number>) => lib3.PackageBundle = (buffer : core.DartList<number>) : lib3.PackageBundle =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _PackageBundleReader().read(rootRef,0);
};
export var readPackageIndex : (buffer : core.DartList<number>) => lib3.PackageIndex = (buffer : core.DartList<number>) : lib3.PackageIndex =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _PackageIndexReader().read(rootRef,0);
};
export var readUnlinkedPublicNamespace : (buffer : core.DartList<number>) => lib3.UnlinkedPublicNamespace = (buffer : core.DartList<number>) : lib3.UnlinkedPublicNamespace =>  {
    let rootRef : any = new bare.createInstance(any,"fromBytes",buffer);
    return new _UnlinkedPublicNamespaceReader().read(rootRef,0);
};
export namespace _LinkedLibraryMixin {
    export type Constructors = '_LinkedLibraryMixin';
    export type Interface = Omit<_LinkedLibraryMixin, Constructors>;
}
@DartClass
@Implements(lib3.LinkedLibrary)
export class _LinkedLibraryMixin implements lib3.LinkedLibrary.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.dependencies.isNotEmpty) _result.set("dependencies",this.dependencies.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.exportDependencies.isNotEmpty) _result.set("exportDependencies",this.exportDependencies);
        if (this.exportNames.isNotEmpty) _result.set("exportNames",this.exportNames.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.importDependencies.isNotEmpty) _result.set("importDependencies",this.importDependencies);
        if (this.numPrelinkedDependencies != 0) _result.set("numPrelinkedDependencies",this.numPrelinkedDependencies);
        if (this.units.isNotEmpty) _result.set("units",this.units.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["dependencies",this.dependencies],
            ["exportDependencies",this.exportDependencies],
            ["exportNames",this.exportNames],
            ["importDependencies",this.importDependencies],
            ["numPrelinkedDependencies",this.numPrelinkedDependencies],
            ["units",this.units]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _LinkedLibraryMixin() {
    }
}

export namespace _UnlinkedExprOperationReader {
    export type Constructors = '_UnlinkedExprOperationReader';
    export type Interface = Omit<_UnlinkedExprOperationReader, Constructors>;
}
@DartClass
export class _UnlinkedExprOperationReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExprOperationReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.UnlinkedExprOperation {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.UnlinkedExprOperation.values.length ? lib3.UnlinkedExprOperation.values[index] : lib3.UnlinkedExprOperation.pushInt;
    }
}

export namespace _UnlinkedParamKindReader {
    export type Constructors = '_UnlinkedParamKindReader';
    export type Interface = Omit<_UnlinkedParamKindReader, Constructors>;
}
@DartClass
export class _UnlinkedParamKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedParamKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.UnlinkedParamKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.UnlinkedParamKind.values.length ? lib3.UnlinkedParamKind.values[index] : lib3.UnlinkedParamKind.required;
    }
}

export namespace AnalysisDriverExceptionContextBuilder {
    export type Constructors = 'AnalysisDriverExceptionContextBuilder';
    export type Interface = Omit<AnalysisDriverExceptionContextBuilder, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverExceptionContext)
@With(_AnalysisDriverExceptionContextMixin)
export class AnalysisDriverExceptionContextBuilder extends core.DartObject implements lib3.AnalysisDriverExceptionContext.Interface,_AnalysisDriverExceptionContextMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _exception : string;

    _files : core.DartList<AnalysisDriverExceptionFileBuilder>;

    _path : string;

    _stackTrace : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exception() : string {
        return this._exception = ( this._exception ) || ( '' );
    }
    set exception(value : string) {
        this._exception = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get files() : core.DartList<AnalysisDriverExceptionFileBuilder> {
        return this._files = ( this._files ) || ( new core.DartList.literal<AnalysisDriverExceptionFileBuilder>() );
    }
    set files(value : core.DartList<AnalysisDriverExceptionFileBuilder>) {
        this._files = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get path() : string {
        return this._path = ( this._path ) || ( '' );
    }
    set path(value : string) {
        this._path = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stackTrace() : string {
        return this._stackTrace = ( this._stackTrace ) || ( '' );
    }
    set stackTrace(value : string) {
        this._stackTrace = value;
    }
    constructor(_namedArguments? : {exception? : string,files? : core.DartList<AnalysisDriverExceptionFileBuilder>,path? : string,stackTrace? : string}) {
    }
    @defaultConstructor
    AnalysisDriverExceptionContextBuilder(_namedArguments? : {exception? : string,files? : core.DartList<AnalysisDriverExceptionFileBuilder>,path? : string,stackTrace? : string}) {
        let {exception,files,path,stackTrace} = Object.assign({
        }, _namedArguments );
        this._exception = exception;
        this._files = files;
        this._path = path;
        this._stackTrace = stackTrace;
    }
    flushInformative() : void {
        ((_355_)=>(!!_355_)?_355_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._files);
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._path || ''));
        signature.addString((this._exception || ''));
        signature.addString((this._stackTrace || ''));
        if (this._files == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._files.length);
            for(let x of this._files) {
                ((_356_)=>(!!_356_)?_356_.collectApiSignature(signature):null)(x);
            }
        }
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"ADEC");
    }
    finish(fbBuilder : any) : any {
        let offset_exception : any;
        let offset_files : any;
        let offset_path : any;
        let offset_stackTrace : any;
        if (this._exception != null) {
            offset_exception = fbBuilder.writeString(this._exception);
        }
        if (!(this._files == null || this._files.isEmpty)) {
            offset_files = fbBuilder.writeList(this._files.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._path != null) {
            offset_path = fbBuilder.writeString(this._path);
        }
        if (this._stackTrace != null) {
            offset_stackTrace = fbBuilder.writeString(this._stackTrace);
        }
        fbBuilder.startTable();
        if (offset_exception != null) {
            fbBuilder.addOffset(1,offset_exception);
        }
        if (offset_files != null) {
            fbBuilder.addOffset(3,offset_files);
        }
        if (offset_path != null) {
            fbBuilder.addOffset(0,offset_path);
        }
        if (offset_stackTrace != null) {
            fbBuilder.addOffset(2,offset_stackTrace);
        }
        return fbBuilder.endTable();
    }
}

export namespace _IndexNameKindReader {
    export type Constructors = '_IndexNameKindReader';
    export type Interface = Omit<_IndexNameKindReader, Constructors>;
}
@DartClass
export class _IndexNameKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _IndexNameKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.IndexNameKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.IndexNameKind.values.length ? lib3.IndexNameKind.values[index] : lib3.IndexNameKind.topLevel;
    }
}

export namespace _AnalysisDriverExceptionContextReader {
    export type Constructors = '_AnalysisDriverExceptionContextReader';
    export type Interface = Omit<_AnalysisDriverExceptionContextReader, Constructors>;
}
@DartClass
export class _AnalysisDriverExceptionContextReader extends any {
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverExceptionContextReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _AnalysisDriverExceptionContextImpl {
        return new _AnalysisDriverExceptionContextImpl(bc,offset);
    }
}

export namespace _AnalysisDriverExceptionContextImpl {
    export type Constructors = '_AnalysisDriverExceptionContextImpl';
    export type Interface = Omit<_AnalysisDriverExceptionContextImpl, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverExceptionContext)
@With(_AnalysisDriverExceptionContextMixin)
export class _AnalysisDriverExceptionContextImpl extends core.DartObject implements lib3.AnalysisDriverExceptionContext.Interface,_AnalysisDriverExceptionContextMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _AnalysisDriverExceptionContextImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _exception : string;

    _files : core.DartList<lib3.AnalysisDriverExceptionFile>;

    _path : string;

    _stackTrace : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exception() : string {
        this._exception = ( this._exception ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._exception;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get files() : core.DartList<lib3.AnalysisDriverExceptionFile> {
        this._files = ( this._files ) || ( new bare.createInstance(any,null,new _AnalysisDriverExceptionFileReader()).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<lib3.AnalysisDriverExceptionFile>()) );
        return this._files;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get path() : string {
        this._path = ( this._path ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stackTrace() : string {
        this._stackTrace = ( this._stackTrace ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,'') );
        return this._stackTrace;
    }
}

export namespace _AnalysisDriverExceptionContextMixin {
    export type Constructors = '_AnalysisDriverExceptionContextMixin';
    export type Interface = Omit<_AnalysisDriverExceptionContextMixin, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverExceptionContext)
export class _AnalysisDriverExceptionContextMixin implements lib3.AnalysisDriverExceptionContext.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.exception != '') _result.set("exception",this.exception);
        if (this.files.isNotEmpty) _result.set("files",this.files.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.path != '') _result.set("path",this.path);
        if (this.stackTrace != '') _result.set("stackTrace",this.stackTrace);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["exception",this.exception],
            ["files",this.files],
            ["path",this.path],
            ["stackTrace",this.stackTrace]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverExceptionContextMixin() {
    }
}

export namespace AnalysisDriverExceptionFileBuilder {
    export type Constructors = 'AnalysisDriverExceptionFileBuilder';
    export type Interface = Omit<AnalysisDriverExceptionFileBuilder, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverExceptionFile)
@With(_AnalysisDriverExceptionFileMixin)
export class AnalysisDriverExceptionFileBuilder extends core.DartObject implements lib3.AnalysisDriverExceptionFile.Interface,_AnalysisDriverExceptionFileMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _content : string;

    _path : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get content() : string {
        return this._content = ( this._content ) || ( '' );
    }
    set content(value : string) {
        this._content = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get path() : string {
        return this._path = ( this._path ) || ( '' );
    }
    set path(value : string) {
        this._path = value;
    }
    constructor(_namedArguments? : {content? : string,path? : string}) {
    }
    @defaultConstructor
    AnalysisDriverExceptionFileBuilder(_namedArguments? : {content? : string,path? : string}) {
        let {content,path} = Object.assign({
        }, _namedArguments );
        this._content = content;
        this._path = path;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._path || ''));
        signature.addString((this._content || ''));
    }
    finish(fbBuilder : any) : any {
        let offset_content : any;
        let offset_path : any;
        if (this._content != null) {
            offset_content = fbBuilder.writeString(this._content);
        }
        if (this._path != null) {
            offset_path = fbBuilder.writeString(this._path);
        }
        fbBuilder.startTable();
        if (offset_content != null) {
            fbBuilder.addOffset(1,offset_content);
        }
        if (offset_path != null) {
            fbBuilder.addOffset(0,offset_path);
        }
        return fbBuilder.endTable();
    }
}

export namespace _AnalysisDriverExceptionFileReader {
    export type Constructors = '_AnalysisDriverExceptionFileReader';
    export type Interface = Omit<_AnalysisDriverExceptionFileReader, Constructors>;
}
@DartClass
export class _AnalysisDriverExceptionFileReader extends any {
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverExceptionFileReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _AnalysisDriverExceptionFileImpl {
        return new _AnalysisDriverExceptionFileImpl(bc,offset);
    }
}

export namespace _AnalysisDriverExceptionFileImpl {
    export type Constructors = '_AnalysisDriverExceptionFileImpl';
    export type Interface = Omit<_AnalysisDriverExceptionFileImpl, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverExceptionFile)
@With(_AnalysisDriverExceptionFileMixin)
export class _AnalysisDriverExceptionFileImpl extends core.DartObject implements lib3.AnalysisDriverExceptionFile.Interface,_AnalysisDriverExceptionFileMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _AnalysisDriverExceptionFileImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _content : string;

    _path : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get content() : string {
        this._content = ( this._content ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._content;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get path() : string {
        this._path = ( this._path ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._path;
    }
}

export namespace _AnalysisDriverExceptionFileMixin {
    export type Constructors = '_AnalysisDriverExceptionFileMixin';
    export type Interface = Omit<_AnalysisDriverExceptionFileMixin, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverExceptionFile)
export class _AnalysisDriverExceptionFileMixin implements lib3.AnalysisDriverExceptionFile.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.content != '') _result.set("content",this.content);
        if (this.path != '') _result.set("path",this.path);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["content",this.content],
            ["path",this.path]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverExceptionFileMixin() {
    }
}

export namespace AnalysisDriverResolvedUnitBuilder {
    export type Constructors = 'AnalysisDriverResolvedUnitBuilder';
    export type Interface = Omit<AnalysisDriverResolvedUnitBuilder, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverResolvedUnit)
@With(_AnalysisDriverResolvedUnitMixin)
export class AnalysisDriverResolvedUnitBuilder extends core.DartObject implements lib3.AnalysisDriverResolvedUnit.Interface,_AnalysisDriverResolvedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _errors : core.DartList<AnalysisDriverUnitErrorBuilder>;

    _index : AnalysisDriverUnitIndexBuilder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errors() : core.DartList<AnalysisDriverUnitErrorBuilder> {
        return this._errors = ( this._errors ) || ( new core.DartList.literal<AnalysisDriverUnitErrorBuilder>() );
    }
    set errors(value : core.DartList<AnalysisDriverUnitErrorBuilder>) {
        this._errors = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get index() : AnalysisDriverUnitIndexBuilder {
        return this._index;
    }
    set index(value : AnalysisDriverUnitIndexBuilder) {
        this._index = value;
    }
    constructor(_namedArguments? : {errors? : core.DartList<AnalysisDriverUnitErrorBuilder>,index? : AnalysisDriverUnitIndexBuilder}) {
    }
    @defaultConstructor
    AnalysisDriverResolvedUnitBuilder(_namedArguments? : {errors? : core.DartList<AnalysisDriverUnitErrorBuilder>,index? : AnalysisDriverUnitIndexBuilder}) {
        let {errors,index} = Object.assign({
        }, _namedArguments );
        this._errors = errors;
        this._index = index;
    }
    flushInformative() : void {
        ((_357_)=>(!!_357_)?_357_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._errors);
        ((_358_)=>(!!_358_)?_358_.flushInformative():null)(this._index);
    }
    collectApiSignature(signature : any) : void {
        if (this._errors == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._errors.length);
            for(let x of this._errors) {
                ((_359_)=>(!!_359_)?_359_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._index != null);
        ((_360_)=>(!!_360_)?_360_.collectApiSignature(signature):null)(this._index);
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"ADRU");
    }
    finish(fbBuilder : any) : any {
        let offset_errors : any;
        let offset_index : any;
        if (!(this._errors == null || this._errors.isEmpty)) {
            offset_errors = fbBuilder.writeList(this._errors.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._index != null) {
            offset_index = this._index.finish(fbBuilder);
        }
        fbBuilder.startTable();
        if (offset_errors != null) {
            fbBuilder.addOffset(0,offset_errors);
        }
        if (offset_index != null) {
            fbBuilder.addOffset(1,offset_index);
        }
        return fbBuilder.endTable();
    }
}

export namespace _IndexRelationKindReader {
    export type Constructors = '_IndexRelationKindReader';
    export type Interface = Omit<_IndexRelationKindReader, Constructors>;
}
@DartClass
export class _IndexRelationKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _IndexRelationKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.IndexRelationKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.IndexRelationKind.values.length ? lib3.IndexRelationKind.values[index] : lib3.IndexRelationKind.IS_ANCESTOR_OF;
    }
}

export namespace _AnalysisDriverResolvedUnitReader {
    export type Constructors = '_AnalysisDriverResolvedUnitReader';
    export type Interface = Omit<_AnalysisDriverResolvedUnitReader, Constructors>;
}
@DartClass
export class _AnalysisDriverResolvedUnitReader extends any {
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverResolvedUnitReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _AnalysisDriverResolvedUnitImpl {
        return new _AnalysisDriverResolvedUnitImpl(bc,offset);
    }
}

export namespace _AnalysisDriverResolvedUnitImpl {
    export type Constructors = '_AnalysisDriverResolvedUnitImpl';
    export type Interface = Omit<_AnalysisDriverResolvedUnitImpl, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverResolvedUnit)
@With(_AnalysisDriverResolvedUnitMixin)
export class _AnalysisDriverResolvedUnitImpl extends core.DartObject implements lib3.AnalysisDriverResolvedUnit.Interface,_AnalysisDriverResolvedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _AnalysisDriverResolvedUnitImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _errors : core.DartList<lib3.AnalysisDriverUnitError>;

    _index : lib3.AnalysisDriverUnitIndex;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errors() : core.DartList<lib3.AnalysisDriverUnitError> {
        this._errors = ( this._errors ) || ( new bare.createInstance(any,null,new _AnalysisDriverUnitErrorReader()).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<lib3.AnalysisDriverUnitError>()) );
        return this._errors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get index() : lib3.AnalysisDriverUnitIndex {
        this._index = ( this._index ) || ( new _AnalysisDriverUnitIndexReader().vTableGet(this._bc,this._bcOffset,1,null) );
        return this._index;
    }
}

export namespace _AnalysisDriverResolvedUnitMixin {
    export type Constructors = '_AnalysisDriverResolvedUnitMixin';
    export type Interface = Omit<_AnalysisDriverResolvedUnitMixin, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverResolvedUnit)
export class _AnalysisDriverResolvedUnitMixin implements lib3.AnalysisDriverResolvedUnit.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.errors.isNotEmpty) _result.set("errors",this.errors.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.index != null) _result.set("index",this.index.toJson());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["errors",this.errors],
            ["index",this.index]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverResolvedUnitMixin() {
    }
}

export namespace AnalysisDriverUnitErrorBuilder {
    export type Constructors = 'AnalysisDriverUnitErrorBuilder';
    export type Interface = Omit<AnalysisDriverUnitErrorBuilder, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnitError)
@With(_AnalysisDriverUnitErrorMixin)
export class AnalysisDriverUnitErrorBuilder extends core.DartObject implements lib3.AnalysisDriverUnitError.Interface,_AnalysisDriverUnitErrorMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _correction : string;

    _length : number;

    _message : string;

    _offset : number;

    _uniqueName : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correction() : string {
        return this._correction = ( this._correction ) || ( '' );
    }
    set correction(value : string) {
        this._correction = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return this._length = ( this._length ) || ( 0 );
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._length = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get message() : string {
        return this._message = ( this._message ) || ( '' );
    }
    set message(value : string) {
        this._message = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this._offset = ( this._offset ) || ( 0 );
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._offset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uniqueName() : string {
        return this._uniqueName = ( this._uniqueName ) || ( '' );
    }
    set uniqueName(value : string) {
        this._uniqueName = value;
    }
    constructor(_namedArguments? : {correction? : string,length? : number,message? : string,offset? : number,uniqueName? : string}) {
    }
    @defaultConstructor
    AnalysisDriverUnitErrorBuilder(_namedArguments? : {correction? : string,length? : number,message? : string,offset? : number,uniqueName? : string}) {
        let {correction,length,message,offset,uniqueName} = Object.assign({
        }, _namedArguments );
        this._correction = correction;
        this._length = length;
        this._message = message;
        this._offset = offset;
        this._uniqueName = uniqueName;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addInt((this._offset || 0));
        signature.addInt((this._length || 0));
        signature.addString((this._uniqueName || ''));
        signature.addString((this._message || ''));
        signature.addString((this._correction || ''));
    }
    finish(fbBuilder : any) : any {
        let offset_correction : any;
        let offset_message : any;
        let offset_uniqueName : any;
        if (this._correction != null) {
            offset_correction = fbBuilder.writeString(this._correction);
        }
        if (this._message != null) {
            offset_message = fbBuilder.writeString(this._message);
        }
        if (this._uniqueName != null) {
            offset_uniqueName = fbBuilder.writeString(this._uniqueName);
        }
        fbBuilder.startTable();
        if (offset_correction != null) {
            fbBuilder.addOffset(4,offset_correction);
        }
        if (this._length != null && this._length != 0) {
            fbBuilder.addUint32(1,this._length);
        }
        if (offset_message != null) {
            fbBuilder.addOffset(3,offset_message);
        }
        if (this._offset != null && this._offset != 0) {
            fbBuilder.addUint32(0,this._offset);
        }
        if (offset_uniqueName != null) {
            fbBuilder.addOffset(2,offset_uniqueName);
        }
        return fbBuilder.endTable();
    }
}

export namespace _AnalysisDriverUnitErrorReader {
    export type Constructors = '_AnalysisDriverUnitErrorReader';
    export type Interface = Omit<_AnalysisDriverUnitErrorReader, Constructors>;
}
@DartClass
export class _AnalysisDriverUnitErrorReader extends any {
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverUnitErrorReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _AnalysisDriverUnitErrorImpl {
        return new _AnalysisDriverUnitErrorImpl(bc,offset);
    }
}

export namespace _AnalysisDriverUnitErrorImpl {
    export type Constructors = '_AnalysisDriverUnitErrorImpl';
    export type Interface = Omit<_AnalysisDriverUnitErrorImpl, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnitError)
@With(_AnalysisDriverUnitErrorMixin)
export class _AnalysisDriverUnitErrorImpl extends core.DartObject implements lib3.AnalysisDriverUnitError.Interface,_AnalysisDriverUnitErrorMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _AnalysisDriverUnitErrorImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _correction : string;

    _length : number;

    _message : string;

    _offset : number;

    _uniqueName : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correction() : string {
        this._correction = ( this._correction ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,4,'') );
        return this._correction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        this._length = ( this._length ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get message() : string {
        this._message = ( this._message ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,'') );
        return this._message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        this._offset = ( this._offset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uniqueName() : string {
        this._uniqueName = ( this._uniqueName ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,'') );
        return this._uniqueName;
    }
}

export namespace _AnalysisDriverUnitErrorMixin {
    export type Constructors = '_AnalysisDriverUnitErrorMixin';
    export type Interface = Omit<_AnalysisDriverUnitErrorMixin, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnitError)
export class _AnalysisDriverUnitErrorMixin implements lib3.AnalysisDriverUnitError.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.correction != '') _result.set("correction",this.correction);
        if (this.length != 0) _result.set("length",this.length);
        if (this.message != '') _result.set("message",this.message);
        if (this.offset != 0) _result.set("offset",this.offset);
        if (this.uniqueName != '') _result.set("uniqueName",this.uniqueName);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["correction",this.correction],
            ["length",this.length],
            ["message",this.message],
            ["offset",this.offset],
            ["uniqueName",this.uniqueName]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverUnitErrorMixin() {
    }
}

export namespace AnalysisDriverUnitIndexBuilder {
    export type Constructors = 'AnalysisDriverUnitIndexBuilder';
    export type Interface = Omit<AnalysisDriverUnitIndexBuilder, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnitIndex)
@With(_AnalysisDriverUnitIndexMixin)
export class AnalysisDriverUnitIndexBuilder extends core.DartObject implements lib3.AnalysisDriverUnitIndex.Interface,_AnalysisDriverUnitIndexMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _elementKinds : core.DartList<lib3.IndexSyntheticElementKind>;

    _elementNameClassMemberIds : core.DartList<number>;

    _elementNameParameterIds : core.DartList<number>;

    _elementNameUnitMemberIds : core.DartList<number>;

    _elementUnits : core.DartList<number>;

    _nullStringId : number;

    _strings : core.DartList<string>;

    _unitLibraryUris : core.DartList<number>;

    _unitUnitUris : core.DartList<number>;

    _usedElementIsQualifiedFlags : core.DartList<boolean>;

    _usedElementKinds : core.DartList<lib3.IndexRelationKind>;

    _usedElementLengths : core.DartList<number>;

    _usedElementOffsets : core.DartList<number>;

    _usedElements : core.DartList<number>;

    _usedNameIsQualifiedFlags : core.DartList<boolean>;

    _usedNameKinds : core.DartList<lib3.IndexRelationKind>;

    _usedNameOffsets : core.DartList<number>;

    _usedNames : core.DartList<number>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementKinds() : core.DartList<lib3.IndexSyntheticElementKind> {
        return this._elementKinds = ( this._elementKinds ) || ( new core.DartList.literal<lib3.IndexSyntheticElementKind>() );
    }
    set elementKinds(value : core.DartList<lib3.IndexSyntheticElementKind>) {
        this._elementKinds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameClassMemberIds() : core.DartList<number> {
        return this._elementNameClassMemberIds = ( this._elementNameClassMemberIds ) || ( new core.DartList.literal<number>() );
    }
    set elementNameClassMemberIds(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementNameClassMemberIds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameParameterIds() : core.DartList<number> {
        return this._elementNameParameterIds = ( this._elementNameParameterIds ) || ( new core.DartList.literal<number>() );
    }
    set elementNameParameterIds(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementNameParameterIds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameUnitMemberIds() : core.DartList<number> {
        return this._elementNameUnitMemberIds = ( this._elementNameUnitMemberIds ) || ( new core.DartList.literal<number>() );
    }
    set elementNameUnitMemberIds(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementNameUnitMemberIds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementUnits() : core.DartList<number> {
        return this._elementUnits = ( this._elementUnits ) || ( new core.DartList.literal<number>() );
    }
    set elementUnits(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementUnits = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullStringId() : number {
        return this._nullStringId = ( this._nullStringId ) || ( 0 );
    }
    set nullStringId(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nullStringId = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strings() : core.DartList<string> {
        return this._strings = ( this._strings ) || ( new core.DartList.literal<string>() );
    }
    set strings(value : core.DartList<string>) {
        this._strings = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitLibraryUris() : core.DartList<number> {
        return this._unitLibraryUris = ( this._unitLibraryUris ) || ( new core.DartList.literal<number>() );
    }
    set unitLibraryUris(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._unitLibraryUris = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitUnitUris() : core.DartList<number> {
        return this._unitUnitUris = ( this._unitUnitUris ) || ( new core.DartList.literal<number>() );
    }
    set unitUnitUris(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._unitUnitUris = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementIsQualifiedFlags() : core.DartList<boolean> {
        return this._usedElementIsQualifiedFlags = ( this._usedElementIsQualifiedFlags ) || ( new core.DartList.literal<boolean>() );
    }
    set usedElementIsQualifiedFlags(value : core.DartList<boolean>) {
        this._usedElementIsQualifiedFlags = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementKinds() : core.DartList<lib3.IndexRelationKind> {
        return this._usedElementKinds = ( this._usedElementKinds ) || ( new core.DartList.literal<lib3.IndexRelationKind>() );
    }
    set usedElementKinds(value : core.DartList<lib3.IndexRelationKind>) {
        this._usedElementKinds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementLengths() : core.DartList<number> {
        return this._usedElementLengths = ( this._usedElementLengths ) || ( new core.DartList.literal<number>() );
    }
    set usedElementLengths(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedElementLengths = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementOffsets() : core.DartList<number> {
        return this._usedElementOffsets = ( this._usedElementOffsets ) || ( new core.DartList.literal<number>() );
    }
    set usedElementOffsets(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedElementOffsets = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElements() : core.DartList<number> {
        return this._usedElements = ( this._usedElements ) || ( new core.DartList.literal<number>() );
    }
    set usedElements(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedElements = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameIsQualifiedFlags() : core.DartList<boolean> {
        return this._usedNameIsQualifiedFlags = ( this._usedNameIsQualifiedFlags ) || ( new core.DartList.literal<boolean>() );
    }
    set usedNameIsQualifiedFlags(value : core.DartList<boolean>) {
        this._usedNameIsQualifiedFlags = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameKinds() : core.DartList<lib3.IndexRelationKind> {
        return this._usedNameKinds = ( this._usedNameKinds ) || ( new core.DartList.literal<lib3.IndexRelationKind>() );
    }
    set usedNameKinds(value : core.DartList<lib3.IndexRelationKind>) {
        this._usedNameKinds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameOffsets() : core.DartList<number> {
        return this._usedNameOffsets = ( this._usedNameOffsets ) || ( new core.DartList.literal<number>() );
    }
    set usedNameOffsets(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedNameOffsets = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNames() : core.DartList<number> {
        return this._usedNames = ( this._usedNames ) || ( new core.DartList.literal<number>() );
    }
    set usedNames(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedNames = value;
    }
    constructor(_namedArguments? : {elementKinds? : core.DartList<lib3.IndexSyntheticElementKind>,elementNameClassMemberIds? : core.DartList<number>,elementNameParameterIds? : core.DartList<number>,elementNameUnitMemberIds? : core.DartList<number>,elementUnits? : core.DartList<number>,nullStringId? : number,strings? : core.DartList<string>,unitLibraryUris? : core.DartList<number>,unitUnitUris? : core.DartList<number>,usedElementIsQualifiedFlags? : core.DartList<boolean>,usedElementKinds? : core.DartList<lib3.IndexRelationKind>,usedElementLengths? : core.DartList<number>,usedElementOffsets? : core.DartList<number>,usedElements? : core.DartList<number>,usedNameIsQualifiedFlags? : core.DartList<boolean>,usedNameKinds? : core.DartList<lib3.IndexRelationKind>,usedNameOffsets? : core.DartList<number>,usedNames? : core.DartList<number>}) {
    }
    @defaultConstructor
    AnalysisDriverUnitIndexBuilder(_namedArguments? : {elementKinds? : core.DartList<lib3.IndexSyntheticElementKind>,elementNameClassMemberIds? : core.DartList<number>,elementNameParameterIds? : core.DartList<number>,elementNameUnitMemberIds? : core.DartList<number>,elementUnits? : core.DartList<number>,nullStringId? : number,strings? : core.DartList<string>,unitLibraryUris? : core.DartList<number>,unitUnitUris? : core.DartList<number>,usedElementIsQualifiedFlags? : core.DartList<boolean>,usedElementKinds? : core.DartList<lib3.IndexRelationKind>,usedElementLengths? : core.DartList<number>,usedElementOffsets? : core.DartList<number>,usedElements? : core.DartList<number>,usedNameIsQualifiedFlags? : core.DartList<boolean>,usedNameKinds? : core.DartList<lib3.IndexRelationKind>,usedNameOffsets? : core.DartList<number>,usedNames? : core.DartList<number>}) {
        let {elementKinds,elementNameClassMemberIds,elementNameParameterIds,elementNameUnitMemberIds,elementUnits,nullStringId,strings,unitLibraryUris,unitUnitUris,usedElementIsQualifiedFlags,usedElementKinds,usedElementLengths,usedElementOffsets,usedElements,usedNameIsQualifiedFlags,usedNameKinds,usedNameOffsets,usedNames} = Object.assign({
        }, _namedArguments );
        this._elementKinds = elementKinds;
        this._elementNameClassMemberIds = elementNameClassMemberIds;
        this._elementNameParameterIds = elementNameParameterIds;
        this._elementNameUnitMemberIds = elementNameUnitMemberIds;
        this._elementUnits = elementUnits;
        this._nullStringId = nullStringId;
        this._strings = strings;
        this._unitLibraryUris = unitLibraryUris;
        this._unitUnitUris = unitUnitUris;
        this._usedElementIsQualifiedFlags = usedElementIsQualifiedFlags;
        this._usedElementKinds = usedElementKinds;
        this._usedElementLengths = usedElementLengths;
        this._usedElementOffsets = usedElementOffsets;
        this._usedElements = usedElements;
        this._usedNameIsQualifiedFlags = usedNameIsQualifiedFlags;
        this._usedNameKinds = usedNameKinds;
        this._usedNameOffsets = usedNameOffsets;
        this._usedNames = usedNames;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        if (this._strings == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._strings.length);
            for(let x of this._strings) {
                signature.addString(x);
            }
        }
        signature.addInt((this._nullStringId || 0));
        if (this._unitLibraryUris == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._unitLibraryUris.length);
            for(let x of this._unitLibraryUris) {
                signature.addInt(x);
            }
        }
        if (this._unitUnitUris == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._unitUnitUris.length);
            for(let x of this._unitUnitUris) {
                signature.addInt(x);
            }
        }
        if (this._elementKinds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementKinds.length);
            for(let x of this._elementKinds) {
                signature.addInt(x.index);
            }
        }
        if (this._elementUnits == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementUnits.length);
            for(let x of this._elementUnits) {
                signature.addInt(x);
            }
        }
        if (this._elementNameUnitMemberIds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementNameUnitMemberIds.length);
            for(let x of this._elementNameUnitMemberIds) {
                signature.addInt(x);
            }
        }
        if (this._elementNameClassMemberIds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementNameClassMemberIds.length);
            for(let x of this._elementNameClassMemberIds) {
                signature.addInt(x);
            }
        }
        if (this._elementNameParameterIds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementNameParameterIds.length);
            for(let x of this._elementNameParameterIds) {
                signature.addInt(x);
            }
        }
        if (this._usedElements == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElements.length);
            for(let x of this._usedElements) {
                signature.addInt(x);
            }
        }
        if (this._usedElementKinds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementKinds.length);
            for(let x of this._usedElementKinds) {
                signature.addInt(x.index);
            }
        }
        if (this._usedElementOffsets == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementOffsets.length);
            for(let x of this._usedElementOffsets) {
                signature.addInt(x);
            }
        }
        if (this._usedElementLengths == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementLengths.length);
            for(let x of this._usedElementLengths) {
                signature.addInt(x);
            }
        }
        if (this._usedElementIsQualifiedFlags == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementIsQualifiedFlags.length);
            for(let x of this._usedElementIsQualifiedFlags) {
                signature.addBool(x);
            }
        }
        if (this._usedNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNames.length);
            for(let x of this._usedNames) {
                signature.addInt(x);
            }
        }
        if (this._usedNameKinds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNameKinds.length);
            for(let x of this._usedNameKinds) {
                signature.addInt(x.index);
            }
        }
        if (this._usedNameOffsets == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNameOffsets.length);
            for(let x of this._usedNameOffsets) {
                signature.addInt(x);
            }
        }
        if (this._usedNameIsQualifiedFlags == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNameIsQualifiedFlags.length);
            for(let x of this._usedNameIsQualifiedFlags) {
                signature.addBool(x);
            }
        }
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"ADUI");
    }
    finish(fbBuilder : any) : any {
        let offset_elementKinds : any;
        let offset_elementNameClassMemberIds : any;
        let offset_elementNameParameterIds : any;
        let offset_elementNameUnitMemberIds : any;
        let offset_elementUnits : any;
        let offset_strings : any;
        let offset_unitLibraryUris : any;
        let offset_unitUnitUris : any;
        let offset_usedElementIsQualifiedFlags : any;
        let offset_usedElementKinds : any;
        let offset_usedElementLengths : any;
        let offset_usedElementOffsets : any;
        let offset_usedElements : any;
        let offset_usedNameIsQualifiedFlags : any;
        let offset_usedNameKinds : any;
        let offset_usedNameOffsets : any;
        let offset_usedNames : any;
        if (!(this._elementKinds == null || this._elementKinds.isEmpty)) {
            offset_elementKinds = fbBuilder.writeListUint8(this._elementKinds.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._elementNameClassMemberIds == null || this._elementNameClassMemberIds.isEmpty)) {
            offset_elementNameClassMemberIds = fbBuilder.writeListUint32(this._elementNameClassMemberIds);
        }
        if (!(this._elementNameParameterIds == null || this._elementNameParameterIds.isEmpty)) {
            offset_elementNameParameterIds = fbBuilder.writeListUint32(this._elementNameParameterIds);
        }
        if (!(this._elementNameUnitMemberIds == null || this._elementNameUnitMemberIds.isEmpty)) {
            offset_elementNameUnitMemberIds = fbBuilder.writeListUint32(this._elementNameUnitMemberIds);
        }
        if (!(this._elementUnits == null || this._elementUnits.isEmpty)) {
            offset_elementUnits = fbBuilder.writeListUint32(this._elementUnits);
        }
        if (!(this._strings == null || this._strings.isEmpty)) {
            offset_strings = fbBuilder.writeList(this._strings.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._unitLibraryUris == null || this._unitLibraryUris.isEmpty)) {
            offset_unitLibraryUris = fbBuilder.writeListUint32(this._unitLibraryUris);
        }
        if (!(this._unitUnitUris == null || this._unitUnitUris.isEmpty)) {
            offset_unitUnitUris = fbBuilder.writeListUint32(this._unitUnitUris);
        }
        if (!(this._usedElementIsQualifiedFlags == null || this._usedElementIsQualifiedFlags.isEmpty)) {
            offset_usedElementIsQualifiedFlags = fbBuilder.writeListBool(this._usedElementIsQualifiedFlags);
        }
        if (!(this._usedElementKinds == null || this._usedElementKinds.isEmpty)) {
            offset_usedElementKinds = fbBuilder.writeListUint8(this._usedElementKinds.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._usedElementLengths == null || this._usedElementLengths.isEmpty)) {
            offset_usedElementLengths = fbBuilder.writeListUint32(this._usedElementLengths);
        }
        if (!(this._usedElementOffsets == null || this._usedElementOffsets.isEmpty)) {
            offset_usedElementOffsets = fbBuilder.writeListUint32(this._usedElementOffsets);
        }
        if (!(this._usedElements == null || this._usedElements.isEmpty)) {
            offset_usedElements = fbBuilder.writeListUint32(this._usedElements);
        }
        if (!(this._usedNameIsQualifiedFlags == null || this._usedNameIsQualifiedFlags.isEmpty)) {
            offset_usedNameIsQualifiedFlags = fbBuilder.writeListBool(this._usedNameIsQualifiedFlags);
        }
        if (!(this._usedNameKinds == null || this._usedNameKinds.isEmpty)) {
            offset_usedNameKinds = fbBuilder.writeListUint8(this._usedNameKinds.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._usedNameOffsets == null || this._usedNameOffsets.isEmpty)) {
            offset_usedNameOffsets = fbBuilder.writeListUint32(this._usedNameOffsets);
        }
        if (!(this._usedNames == null || this._usedNames.isEmpty)) {
            offset_usedNames = fbBuilder.writeListUint32(this._usedNames);
        }
        fbBuilder.startTable();
        if (offset_elementKinds != null) {
            fbBuilder.addOffset(4,offset_elementKinds);
        }
        if (offset_elementNameClassMemberIds != null) {
            fbBuilder.addOffset(7,offset_elementNameClassMemberIds);
        }
        if (offset_elementNameParameterIds != null) {
            fbBuilder.addOffset(8,offset_elementNameParameterIds);
        }
        if (offset_elementNameUnitMemberIds != null) {
            fbBuilder.addOffset(6,offset_elementNameUnitMemberIds);
        }
        if (offset_elementUnits != null) {
            fbBuilder.addOffset(5,offset_elementUnits);
        }
        if (this._nullStringId != null && this._nullStringId != 0) {
            fbBuilder.addUint32(1,this._nullStringId);
        }
        if (offset_strings != null) {
            fbBuilder.addOffset(0,offset_strings);
        }
        if (offset_unitLibraryUris != null) {
            fbBuilder.addOffset(2,offset_unitLibraryUris);
        }
        if (offset_unitUnitUris != null) {
            fbBuilder.addOffset(3,offset_unitUnitUris);
        }
        if (offset_usedElementIsQualifiedFlags != null) {
            fbBuilder.addOffset(13,offset_usedElementIsQualifiedFlags);
        }
        if (offset_usedElementKinds != null) {
            fbBuilder.addOffset(10,offset_usedElementKinds);
        }
        if (offset_usedElementLengths != null) {
            fbBuilder.addOffset(12,offset_usedElementLengths);
        }
        if (offset_usedElementOffsets != null) {
            fbBuilder.addOffset(11,offset_usedElementOffsets);
        }
        if (offset_usedElements != null) {
            fbBuilder.addOffset(9,offset_usedElements);
        }
        if (offset_usedNameIsQualifiedFlags != null) {
            fbBuilder.addOffset(17,offset_usedNameIsQualifiedFlags);
        }
        if (offset_usedNameKinds != null) {
            fbBuilder.addOffset(15,offset_usedNameKinds);
        }
        if (offset_usedNameOffsets != null) {
            fbBuilder.addOffset(16,offset_usedNameOffsets);
        }
        if (offset_usedNames != null) {
            fbBuilder.addOffset(14,offset_usedNames);
        }
        return fbBuilder.endTable();
    }
}

export namespace _IndexSyntheticElementKindReader {
    export type Constructors = '_IndexSyntheticElementKindReader';
    export type Interface = Omit<_IndexSyntheticElementKindReader, Constructors>;
}
@DartClass
export class _IndexSyntheticElementKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _IndexSyntheticElementKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.IndexSyntheticElementKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.IndexSyntheticElementKind.values.length ? lib3.IndexSyntheticElementKind.values[index] : lib3.IndexSyntheticElementKind.notSynthetic;
    }
}

export namespace _AnalysisDriverUnitIndexReader {
    export type Constructors = '_AnalysisDriverUnitIndexReader';
    export type Interface = Omit<_AnalysisDriverUnitIndexReader, Constructors>;
}
@DartClass
export class _AnalysisDriverUnitIndexReader extends any {
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverUnitIndexReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _AnalysisDriverUnitIndexImpl {
        return new _AnalysisDriverUnitIndexImpl(bc,offset);
    }
}

export namespace _AnalysisDriverUnitIndexImpl {
    export type Constructors = '_AnalysisDriverUnitIndexImpl';
    export type Interface = Omit<_AnalysisDriverUnitIndexImpl, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnitIndex)
@With(_AnalysisDriverUnitIndexMixin)
export class _AnalysisDriverUnitIndexImpl extends core.DartObject implements lib3.AnalysisDriverUnitIndex.Interface,_AnalysisDriverUnitIndexMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _AnalysisDriverUnitIndexImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _elementKinds : core.DartList<lib3.IndexSyntheticElementKind>;

    _elementNameClassMemberIds : core.DartList<number>;

    _elementNameParameterIds : core.DartList<number>;

    _elementNameUnitMemberIds : core.DartList<number>;

    _elementUnits : core.DartList<number>;

    _nullStringId : number;

    _strings : core.DartList<string>;

    _unitLibraryUris : core.DartList<number>;

    _unitUnitUris : core.DartList<number>;

    _usedElementIsQualifiedFlags : core.DartList<boolean>;

    _usedElementKinds : core.DartList<lib3.IndexRelationKind>;

    _usedElementLengths : core.DartList<number>;

    _usedElementOffsets : core.DartList<number>;

    _usedElements : core.DartList<number>;

    _usedNameIsQualifiedFlags : core.DartList<boolean>;

    _usedNameKinds : core.DartList<lib3.IndexRelationKind>;

    _usedNameOffsets : core.DartList<number>;

    _usedNames : core.DartList<number>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementKinds() : core.DartList<lib3.IndexSyntheticElementKind> {
        this._elementKinds = ( this._elementKinds ) || ( new bare.createInstance(any,null,new _IndexSyntheticElementKindReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.IndexSyntheticElementKind>()) );
        return this._elementKinds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameClassMemberIds() : core.DartList<number> {
        this._elementNameClassMemberIds = ( this._elementNameClassMemberIds ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,7,new core.DartList.literal<number>()) );
        return this._elementNameClassMemberIds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameParameterIds() : core.DartList<number> {
        this._elementNameParameterIds = ( this._elementNameParameterIds ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,8,new core.DartList.literal<number>()) );
        return this._elementNameParameterIds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameUnitMemberIds() : core.DartList<number> {
        this._elementNameUnitMemberIds = ( this._elementNameUnitMemberIds ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,new core.DartList.literal<number>()) );
        return this._elementNameUnitMemberIds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementUnits() : core.DartList<number> {
        this._elementUnits = ( this._elementUnits ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,new core.DartList.literal<number>()) );
        return this._elementUnits;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullStringId() : number {
        this._nullStringId = ( this._nullStringId ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nullStringId;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strings() : core.DartList<string> {
        this._strings = ( this._strings ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<string>()) );
        return this._strings;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitLibraryUris() : core.DartList<number> {
        this._unitLibraryUris = ( this._unitLibraryUris ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<number>()) );
        return this._unitLibraryUris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitUnitUris() : core.DartList<number> {
        this._unitUnitUris = ( this._unitUnitUris ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<number>()) );
        return this._unitUnitUris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementIsQualifiedFlags() : core.DartList<boolean> {
        this._usedElementIsQualifiedFlags = ( this._usedElementIsQualifiedFlags ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,13,new core.DartList.literal<boolean>()) );
        return this._usedElementIsQualifiedFlags;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementKinds() : core.DartList<lib3.IndexRelationKind> {
        this._usedElementKinds = ( this._usedElementKinds ) || ( new bare.createInstance(any,null,new _IndexRelationKindReader()).vTableGet(this._bc,this._bcOffset,10,new core.DartList.literal<lib3.IndexRelationKind>()) );
        return this._usedElementKinds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementLengths() : core.DartList<number> {
        this._usedElementLengths = ( this._usedElementLengths ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,12,new core.DartList.literal<number>()) );
        return this._usedElementLengths;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementOffsets() : core.DartList<number> {
        this._usedElementOffsets = ( this._usedElementOffsets ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,11,new core.DartList.literal<number>()) );
        return this._usedElementOffsets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElements() : core.DartList<number> {
        this._usedElements = ( this._usedElements ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,9,new core.DartList.literal<number>()) );
        return this._usedElements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameIsQualifiedFlags() : core.DartList<boolean> {
        this._usedNameIsQualifiedFlags = ( this._usedNameIsQualifiedFlags ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,17,new core.DartList.literal<boolean>()) );
        return this._usedNameIsQualifiedFlags;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameKinds() : core.DartList<lib3.IndexRelationKind> {
        this._usedNameKinds = ( this._usedNameKinds ) || ( new bare.createInstance(any,null,new _IndexRelationKindReader()).vTableGet(this._bc,this._bcOffset,15,new core.DartList.literal<lib3.IndexRelationKind>()) );
        return this._usedNameKinds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameOffsets() : core.DartList<number> {
        this._usedNameOffsets = ( this._usedNameOffsets ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,16,new core.DartList.literal<number>()) );
        return this._usedNameOffsets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNames() : core.DartList<number> {
        this._usedNames = ( this._usedNames ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,14,new core.DartList.literal<number>()) );
        return this._usedNames;
    }
}

export namespace _AnalysisDriverUnitIndexMixin {
    export type Constructors = '_AnalysisDriverUnitIndexMixin';
    export type Interface = Omit<_AnalysisDriverUnitIndexMixin, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnitIndex)
export class _AnalysisDriverUnitIndexMixin implements lib3.AnalysisDriverUnitIndex.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.elementKinds.isNotEmpty) _result.set("elementKinds",this.elementKinds.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.elementNameClassMemberIds.isNotEmpty) _result.set("elementNameClassMemberIds",this.elementNameClassMemberIds);
        if (this.elementNameParameterIds.isNotEmpty) _result.set("elementNameParameterIds",this.elementNameParameterIds);
        if (this.elementNameUnitMemberIds.isNotEmpty) _result.set("elementNameUnitMemberIds",this.elementNameUnitMemberIds);
        if (this.elementUnits.isNotEmpty) _result.set("elementUnits",this.elementUnits);
        if (this.nullStringId != 0) _result.set("nullStringId",this.nullStringId);
        if (this.strings.isNotEmpty) _result.set("strings",this.strings);
        if (this.unitLibraryUris.isNotEmpty) _result.set("unitLibraryUris",this.unitLibraryUris);
        if (this.unitUnitUris.isNotEmpty) _result.set("unitUnitUris",this.unitUnitUris);
        if (this.usedElementIsQualifiedFlags.isNotEmpty) _result.set("usedElementIsQualifiedFlags",this.usedElementIsQualifiedFlags);
        if (this.usedElementKinds.isNotEmpty) _result.set("usedElementKinds",this.usedElementKinds.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.usedElementLengths.isNotEmpty) _result.set("usedElementLengths",this.usedElementLengths);
        if (this.usedElementOffsets.isNotEmpty) _result.set("usedElementOffsets",this.usedElementOffsets);
        if (this.usedElements.isNotEmpty) _result.set("usedElements",this.usedElements);
        if (this.usedNameIsQualifiedFlags.isNotEmpty) _result.set("usedNameIsQualifiedFlags",this.usedNameIsQualifiedFlags);
        if (this.usedNameKinds.isNotEmpty) _result.set("usedNameKinds",this.usedNameKinds.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.usedNameOffsets.isNotEmpty) _result.set("usedNameOffsets",this.usedNameOffsets);
        if (this.usedNames.isNotEmpty) _result.set("usedNames",this.usedNames);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["elementKinds",this.elementKinds],
            ["elementNameClassMemberIds",this.elementNameClassMemberIds],
            ["elementNameParameterIds",this.elementNameParameterIds],
            ["elementNameUnitMemberIds",this.elementNameUnitMemberIds],
            ["elementUnits",this.elementUnits],
            ["nullStringId",this.nullStringId],
            ["strings",this.strings],
            ["unitLibraryUris",this.unitLibraryUris],
            ["unitUnitUris",this.unitUnitUris],
            ["usedElementIsQualifiedFlags",this.usedElementIsQualifiedFlags],
            ["usedElementKinds",this.usedElementKinds],
            ["usedElementLengths",this.usedElementLengths],
            ["usedElementOffsets",this.usedElementOffsets],
            ["usedElements",this.usedElements],
            ["usedNameIsQualifiedFlags",this.usedNameIsQualifiedFlags],
            ["usedNameKinds",this.usedNameKinds],
            ["usedNameOffsets",this.usedNameOffsets],
            ["usedNames",this.usedNames]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverUnitIndexMixin() {
    }
}

export namespace AnalysisDriverUnlinkedUnitBuilder {
    export type Constructors = 'AnalysisDriverUnlinkedUnitBuilder';
    export type Interface = Omit<AnalysisDriverUnlinkedUnitBuilder, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnlinkedUnit)
@With(_AnalysisDriverUnlinkedUnitMixin)
export class AnalysisDriverUnlinkedUnitBuilder extends core.DartObject implements lib3.AnalysisDriverUnlinkedUnit.Interface,_AnalysisDriverUnlinkedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _definedClassMemberNames : core.DartList<string>;

    _definedTopLevelNames : core.DartList<string>;

    _referencedNames : core.DartList<string>;

    _unit : UnlinkedUnitBuilder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedClassMemberNames() : core.DartList<string> {
        return this._definedClassMemberNames = ( this._definedClassMemberNames ) || ( new core.DartList.literal<string>() );
    }
    set definedClassMemberNames(value : core.DartList<string>) {
        this._definedClassMemberNames = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedTopLevelNames() : core.DartList<string> {
        return this._definedTopLevelNames = ( this._definedTopLevelNames ) || ( new core.DartList.literal<string>() );
    }
    set definedTopLevelNames(value : core.DartList<string>) {
        this._definedTopLevelNames = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get referencedNames() : core.DartList<string> {
        return this._referencedNames = ( this._referencedNames ) || ( new core.DartList.literal<string>() );
    }
    set referencedNames(value : core.DartList<string>) {
        this._referencedNames = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : UnlinkedUnitBuilder {
        return this._unit;
    }
    set unit(value : UnlinkedUnitBuilder) {
        this._unit = value;
    }
    constructor(_namedArguments? : {definedClassMemberNames? : core.DartList<string>,definedTopLevelNames? : core.DartList<string>,referencedNames? : core.DartList<string>,unit? : UnlinkedUnitBuilder}) {
    }
    @defaultConstructor
    AnalysisDriverUnlinkedUnitBuilder(_namedArguments? : {definedClassMemberNames? : core.DartList<string>,definedTopLevelNames? : core.DartList<string>,referencedNames? : core.DartList<string>,unit? : UnlinkedUnitBuilder}) {
        let {definedClassMemberNames,definedTopLevelNames,referencedNames,unit} = Object.assign({
        }, _namedArguments );
        this._definedClassMemberNames = definedClassMemberNames;
        this._definedTopLevelNames = definedTopLevelNames;
        this._referencedNames = referencedNames;
        this._unit = unit;
    }
    flushInformative() : void {
        ((_361_)=>(!!_361_)?_361_.flushInformative():null)(this._unit);
    }
    collectApiSignature(signature : any) : void {
        if (this._referencedNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._referencedNames.length);
            for(let x of this._referencedNames) {
                signature.addString(x);
            }
        }
        signature.addBool(this._unit != null);
        ((_362_)=>(!!_362_)?_362_.collectApiSignature(signature):null)(this._unit);
        if (this._definedTopLevelNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._definedTopLevelNames.length);
            for(let x of this._definedTopLevelNames) {
                signature.addString(x);
            }
        }
        if (this._definedClassMemberNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._definedClassMemberNames.length);
            for(let x of this._definedClassMemberNames) {
                signature.addString(x);
            }
        }
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"ADUU");
    }
    finish(fbBuilder : any) : any {
        let offset_definedClassMemberNames : any;
        let offset_definedTopLevelNames : any;
        let offset_referencedNames : any;
        let offset_unit : any;
        if (!(this._definedClassMemberNames == null || this._definedClassMemberNames.isEmpty)) {
            offset_definedClassMemberNames = fbBuilder.writeList(this._definedClassMemberNames.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._definedTopLevelNames == null || this._definedTopLevelNames.isEmpty)) {
            offset_definedTopLevelNames = fbBuilder.writeList(this._definedTopLevelNames.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._referencedNames == null || this._referencedNames.isEmpty)) {
            offset_referencedNames = fbBuilder.writeList(this._referencedNames.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (this._unit != null) {
            offset_unit = this._unit.finish(fbBuilder);
        }
        fbBuilder.startTable();
        if (offset_definedClassMemberNames != null) {
            fbBuilder.addOffset(3,offset_definedClassMemberNames);
        }
        if (offset_definedTopLevelNames != null) {
            fbBuilder.addOffset(2,offset_definedTopLevelNames);
        }
        if (offset_referencedNames != null) {
            fbBuilder.addOffset(0,offset_referencedNames);
        }
        if (offset_unit != null) {
            fbBuilder.addOffset(1,offset_unit);
        }
        return fbBuilder.endTable();
    }
}

export namespace _ReferenceKindReader {
    export type Constructors = '_ReferenceKindReader';
    export type Interface = Omit<_ReferenceKindReader, Constructors>;
}
@DartClass
export class _ReferenceKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _ReferenceKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.ReferenceKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.ReferenceKind.values.length ? lib3.ReferenceKind.values[index] : lib3.ReferenceKind.classOrEnum;
    }
}

export namespace _AnalysisDriverUnlinkedUnitReader {
    export type Constructors = '_AnalysisDriverUnlinkedUnitReader';
    export type Interface = Omit<_AnalysisDriverUnlinkedUnitReader, Constructors>;
}
@DartClass
export class _AnalysisDriverUnlinkedUnitReader extends any {
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverUnlinkedUnitReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _AnalysisDriverUnlinkedUnitImpl {
        return new _AnalysisDriverUnlinkedUnitImpl(bc,offset);
    }
}

export namespace _AnalysisDriverUnlinkedUnitImpl {
    export type Constructors = '_AnalysisDriverUnlinkedUnitImpl';
    export type Interface = Omit<_AnalysisDriverUnlinkedUnitImpl, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnlinkedUnit)
@With(_AnalysisDriverUnlinkedUnitMixin)
export class _AnalysisDriverUnlinkedUnitImpl extends core.DartObject implements lib3.AnalysisDriverUnlinkedUnit.Interface,_AnalysisDriverUnlinkedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _AnalysisDriverUnlinkedUnitImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _definedClassMemberNames : core.DartList<string>;

    _definedTopLevelNames : core.DartList<string>;

    _referencedNames : core.DartList<string>;

    _unit : lib3.UnlinkedUnit;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedClassMemberNames() : core.DartList<string> {
        this._definedClassMemberNames = ( this._definedClassMemberNames ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<string>()) );
        return this._definedClassMemberNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedTopLevelNames() : core.DartList<string> {
        this._definedTopLevelNames = ( this._definedTopLevelNames ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<string>()) );
        return this._definedTopLevelNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get referencedNames() : core.DartList<string> {
        this._referencedNames = ( this._referencedNames ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<string>()) );
        return this._referencedNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : lib3.UnlinkedUnit {
        this._unit = ( this._unit ) || ( new _UnlinkedUnitReader().vTableGet(this._bc,this._bcOffset,1,null) );
        return this._unit;
    }
}

export namespace _AnalysisDriverUnlinkedUnitMixin {
    export type Constructors = '_AnalysisDriverUnlinkedUnitMixin';
    export type Interface = Omit<_AnalysisDriverUnlinkedUnitMixin, Constructors>;
}
@DartClass
@Implements(lib3.AnalysisDriverUnlinkedUnit)
export class _AnalysisDriverUnlinkedUnitMixin implements lib3.AnalysisDriverUnlinkedUnit.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.definedClassMemberNames.isNotEmpty) _result.set("definedClassMemberNames",this.definedClassMemberNames);
        if (this.definedTopLevelNames.isNotEmpty) _result.set("definedTopLevelNames",this.definedTopLevelNames);
        if (this.referencedNames.isNotEmpty) _result.set("referencedNames",this.referencedNames);
        if (this.unit != null) _result.set("unit",this.unit.toJson());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["definedClassMemberNames",this.definedClassMemberNames],
            ["definedTopLevelNames",this.definedTopLevelNames],
            ["referencedNames",this.referencedNames],
            ["unit",this.unit]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _AnalysisDriverUnlinkedUnitMixin() {
    }
}

export namespace CodeRangeBuilder {
    export type Constructors = 'CodeRangeBuilder';
    export type Interface = Omit<CodeRangeBuilder, Constructors>;
}
@DartClass
@Implements(lib3.CodeRange)
@With(_CodeRangeMixin)
export class CodeRangeBuilder extends core.DartObject implements lib3.CodeRange.Interface,_CodeRangeMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _length : number;

    _offset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return this._length = ( this._length ) || ( 0 );
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._length = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this._offset = ( this._offset ) || ( 0 );
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._offset = value;
    }
    constructor(_namedArguments? : {length? : number,offset? : number}) {
    }
    @defaultConstructor
    CodeRangeBuilder(_namedArguments? : {length? : number,offset? : number}) {
        let {length,offset} = Object.assign({
        }, _namedArguments );
        this._length = length;
        this._offset = offset;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addInt((this._offset || 0));
        signature.addInt((this._length || 0));
    }
    finish(fbBuilder : any) : any {
        fbBuilder.startTable();
        if (this._length != null && this._length != 0) {
            fbBuilder.addUint32(1,this._length);
        }
        if (this._offset != null && this._offset != 0) {
            fbBuilder.addUint32(0,this._offset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _CodeRangeReader {
    export type Constructors = '_CodeRangeReader';
    export type Interface = Omit<_CodeRangeReader, Constructors>;
}
@DartClass
export class _CodeRangeReader extends any {
    constructor() {
    }
    @defaultConstructor
    _CodeRangeReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _CodeRangeImpl {
        return new _CodeRangeImpl(bc,offset);
    }
}

export namespace _CodeRangeImpl {
    export type Constructors = '_CodeRangeImpl';
    export type Interface = Omit<_CodeRangeImpl, Constructors>;
}
@DartClass
@Implements(lib3.CodeRange)
@With(_CodeRangeMixin)
export class _CodeRangeImpl extends core.DartObject implements lib3.CodeRange.Interface,_CodeRangeMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _CodeRangeImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _length : number;

    _offset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        this._length = ( this._length ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        this._offset = ( this._offset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._offset;
    }
}

export namespace _CodeRangeMixin {
    export type Constructors = '_CodeRangeMixin';
    export type Interface = Omit<_CodeRangeMixin, Constructors>;
}
@DartClass
@Implements(lib3.CodeRange)
export class _CodeRangeMixin implements lib3.CodeRange.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.length != 0) _result.set("length",this.length);
        if (this.offset != 0) _result.set("offset",this.offset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["length",this.length],
            ["offset",this.offset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _CodeRangeMixin() {
    }
}

export namespace EntityRefBuilder {
    export type Constructors = 'EntityRefBuilder';
    export type Interface = Omit<EntityRefBuilder, Constructors>;
}
@DartClass
@Implements(lib3.EntityRef)
@With(_EntityRefMixin)
export class EntityRefBuilder extends core.DartObject implements lib3.EntityRef.Interface,_EntityRefMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _entityKind : lib3.EntityRefKind;

    _implicitFunctionTypeIndices : core.DartList<number>;

    _paramReference : number;

    _reference : number;

    _slot : number;

    _syntheticParams : core.DartList<UnlinkedParamBuilder>;

    _syntheticReturnType : EntityRefBuilder;

    _typeArguments : core.DartList<EntityRefBuilder>;

    _typeParameters : core.DartList<UnlinkedTypeParamBuilder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get entityKind() : lib3.EntityRefKind {
        return this._entityKind = ( this._entityKind ) || ( lib3.EntityRefKind.named );
    }
    set entityKind(value : lib3.EntityRefKind) {
        this._entityKind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitFunctionTypeIndices() : core.DartList<number> {
        return this._implicitFunctionTypeIndices = ( this._implicitFunctionTypeIndices ) || ( new core.DartList.literal<number>() );
    }
    set implicitFunctionTypeIndices(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._implicitFunctionTypeIndices = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get paramReference() : number {
        return this._paramReference = ( this._paramReference ) || ( 0 );
    }
    set paramReference(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._paramReference = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reference() : number {
        return this._reference = ( this._reference ) || ( 0 );
    }
    set reference(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._reference = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get slot() : number {
        return this._slot = ( this._slot ) || ( 0 );
    }
    set slot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._slot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get syntheticParams() : core.DartList<UnlinkedParamBuilder> {
        return this._syntheticParams = ( this._syntheticParams ) || ( new core.DartList.literal<UnlinkedParamBuilder>() );
    }
    set syntheticParams(value : core.DartList<UnlinkedParamBuilder>) {
        this._syntheticParams = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get syntheticReturnType() : EntityRefBuilder {
        return this._syntheticReturnType;
    }
    set syntheticReturnType(value : EntityRefBuilder) {
        this._syntheticReturnType = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeArguments() : core.DartList<EntityRefBuilder> {
        return this._typeArguments = ( this._typeArguments ) || ( new core.DartList.literal<EntityRefBuilder>() );
    }
    set typeArguments(value : core.DartList<EntityRefBuilder>) {
        this._typeArguments = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<UnlinkedTypeParamBuilder> {
        return this._typeParameters = ( this._typeParameters ) || ( new core.DartList.literal<UnlinkedTypeParamBuilder>() );
    }
    set typeParameters(value : core.DartList<UnlinkedTypeParamBuilder>) {
        this._typeParameters = value;
    }
    constructor(_namedArguments? : {entityKind? : lib3.EntityRefKind,implicitFunctionTypeIndices? : core.DartList<number>,paramReference? : number,reference? : number,slot? : number,syntheticParams? : core.DartList<UnlinkedParamBuilder>,syntheticReturnType? : EntityRefBuilder,typeArguments? : core.DartList<EntityRefBuilder>,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>}) {
    }
    @defaultConstructor
    EntityRefBuilder(_namedArguments? : {entityKind? : lib3.EntityRefKind,implicitFunctionTypeIndices? : core.DartList<number>,paramReference? : number,reference? : number,slot? : number,syntheticParams? : core.DartList<UnlinkedParamBuilder>,syntheticReturnType? : EntityRefBuilder,typeArguments? : core.DartList<EntityRefBuilder>,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>}) {
        let {entityKind,implicitFunctionTypeIndices,paramReference,reference,slot,syntheticParams,syntheticReturnType,typeArguments,typeParameters} = Object.assign({
        }, _namedArguments );
        this._entityKind = entityKind;
        this._implicitFunctionTypeIndices = implicitFunctionTypeIndices;
        this._paramReference = paramReference;
        this._reference = reference;
        this._slot = slot;
        this._syntheticParams = syntheticParams;
        this._syntheticReturnType = syntheticReturnType;
        this._typeArguments = typeArguments;
        this._typeParameters = typeParameters;
    }
    flushInformative() : void {
        ((_363_)=>(!!_363_)?_363_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._syntheticParams);
        ((_364_)=>(!!_364_)?_364_.flushInformative():null)(this._syntheticReturnType);
        ((_365_)=>(!!_365_)?_365_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._typeArguments);
        ((_366_)=>(!!_366_)?_366_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._typeParameters);
    }
    collectApiSignature(signature : any) : void {
        signature.addInt((this._reference || 0));
        if (this._typeArguments == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._typeArguments.length);
            for(let x of this._typeArguments) {
                ((_367_)=>(!!_367_)?_367_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addInt((this._slot || 0));
        signature.addInt((this._paramReference || 0));
        if (this._implicitFunctionTypeIndices == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._implicitFunctionTypeIndices.length);
            for(let x of this._implicitFunctionTypeIndices) {
                signature.addInt(x);
            }
        }
        signature.addBool(this._syntheticReturnType != null);
        ((_368_)=>(!!_368_)?_368_.collectApiSignature(signature):null)(this._syntheticReturnType);
        if (this._syntheticParams == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._syntheticParams.length);
            for(let x of this._syntheticParams) {
                ((_369_)=>(!!_369_)?_369_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._typeParameters == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._typeParameters.length);
            for(let x of this._typeParameters) {
                ((_370_)=>(!!_370_)?_370_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addInt(op(Op.EQUALS,this._entityKind,null) ? 0 : this._entityKind.index);
    }
    finish(fbBuilder : any) : any {
        let offset_implicitFunctionTypeIndices : any;
        let offset_syntheticParams : any;
        let offset_syntheticReturnType : any;
        let offset_typeArguments : any;
        let offset_typeParameters : any;
        if (!(this._implicitFunctionTypeIndices == null || this._implicitFunctionTypeIndices.isEmpty)) {
            offset_implicitFunctionTypeIndices = fbBuilder.writeListUint32(this._implicitFunctionTypeIndices);
        }
        if (!(this._syntheticParams == null || this._syntheticParams.isEmpty)) {
            offset_syntheticParams = fbBuilder.writeList(this._syntheticParams.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._syntheticReturnType != null) {
            offset_syntheticReturnType = this._syntheticReturnType.finish(fbBuilder);
        }
        if (!(this._typeArguments == null || this._typeArguments.isEmpty)) {
            offset_typeArguments = fbBuilder.writeList(this._typeArguments.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._typeParameters == null || this._typeParameters.isEmpty)) {
            offset_typeParameters = fbBuilder.writeList(this._typeParameters.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (this._entityKind != null && this._entityKind != lib3.EntityRefKind.named) {
            fbBuilder.addUint8(8,this._entityKind.index);
        }
        if (offset_implicitFunctionTypeIndices != null) {
            fbBuilder.addOffset(4,offset_implicitFunctionTypeIndices);
        }
        if (this._paramReference != null && this._paramReference != 0) {
            fbBuilder.addUint32(3,this._paramReference);
        }
        if (this._reference != null && this._reference != 0) {
            fbBuilder.addUint32(0,this._reference);
        }
        if (this._slot != null && this._slot != 0) {
            fbBuilder.addUint32(2,this._slot);
        }
        if (offset_syntheticParams != null) {
            fbBuilder.addOffset(6,offset_syntheticParams);
        }
        if (offset_syntheticReturnType != null) {
            fbBuilder.addOffset(5,offset_syntheticReturnType);
        }
        if (offset_typeArguments != null) {
            fbBuilder.addOffset(1,offset_typeArguments);
        }
        if (offset_typeParameters != null) {
            fbBuilder.addOffset(7,offset_typeParameters);
        }
        return fbBuilder.endTable();
    }
}

export namespace _EntityRefReader {
    export type Constructors = '_EntityRefReader';
    export type Interface = Omit<_EntityRefReader, Constructors>;
}
@DartClass
export class _EntityRefReader extends any {
    constructor() {
    }
    @defaultConstructor
    _EntityRefReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _EntityRefImpl {
        return new _EntityRefImpl(bc,offset);
    }
}

export namespace _EntityRefImpl {
    export type Constructors = '_EntityRefImpl';
    export type Interface = Omit<_EntityRefImpl, Constructors>;
}
@DartClass
@Implements(lib3.EntityRef)
@With(_EntityRefMixin)
export class _EntityRefImpl extends core.DartObject implements lib3.EntityRef.Interface,_EntityRefMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _EntityRefImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _entityKind : lib3.EntityRefKind;

    _implicitFunctionTypeIndices : core.DartList<number>;

    _paramReference : number;

    _reference : number;

    _slot : number;

    _syntheticParams : core.DartList<lib3.UnlinkedParam>;

    _syntheticReturnType : lib3.EntityRef;

    _typeArguments : core.DartList<lib3.EntityRef>;

    _typeParameters : core.DartList<lib3.UnlinkedTypeParam>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get entityKind() : lib3.EntityRefKind {
        this._entityKind = ( this._entityKind ) || ( new _EntityRefKindReader().vTableGet(this._bc,this._bcOffset,8,lib3.EntityRefKind.named) );
        return this._entityKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitFunctionTypeIndices() : core.DartList<number> {
        this._implicitFunctionTypeIndices = ( this._implicitFunctionTypeIndices ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<number>()) );
        return this._implicitFunctionTypeIndices;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get paramReference() : number {
        this._paramReference = ( this._paramReference ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,0) );
        return this._paramReference;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reference() : number {
        this._reference = ( this._reference ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._reference;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get slot() : number {
        this._slot = ( this._slot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._slot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get syntheticParams() : core.DartList<lib3.UnlinkedParam> {
        this._syntheticParams = ( this._syntheticParams ) || ( new bare.createInstance(any,null,new _UnlinkedParamReader()).vTableGet(this._bc,this._bcOffset,6,new core.DartList.literal<lib3.UnlinkedParam>()) );
        return this._syntheticParams;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get syntheticReturnType() : lib3.EntityRef {
        this._syntheticReturnType = ( this._syntheticReturnType ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,5,null) );
        return this._syntheticReturnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeArguments() : core.DartList<lib3.EntityRef> {
        this._typeArguments = ( this._typeArguments ) || ( new bare.createInstance(any,null,new _EntityRefReader()).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<lib3.EntityRef>()) );
        return this._typeArguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<lib3.UnlinkedTypeParam> {
        this._typeParameters = ( this._typeParameters ) || ( new bare.createInstance(any,null,new _UnlinkedTypeParamReader()).vTableGet(this._bc,this._bcOffset,7,new core.DartList.literal<lib3.UnlinkedTypeParam>()) );
        return this._typeParameters;
    }
}

export namespace _EntityRefMixin {
    export type Constructors = '_EntityRefMixin';
    export type Interface = Omit<_EntityRefMixin, Constructors>;
}
@DartClass
@Implements(lib3.EntityRef)
export class _EntityRefMixin implements lib3.EntityRef.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.entityKind != lib3.EntityRefKind.named) _result.set("entityKind",new core.DartString(this.entityKind.toString()).split('.')[1]);
        if (this.implicitFunctionTypeIndices.isNotEmpty) _result.set("implicitFunctionTypeIndices",this.implicitFunctionTypeIndices);
        if (this.paramReference != 0) _result.set("paramReference",this.paramReference);
        if (this.reference != 0) _result.set("reference",this.reference);
        if (this.slot != 0) _result.set("slot",this.slot);
        if (this.syntheticParams.isNotEmpty) _result.set("syntheticParams",this.syntheticParams.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.syntheticReturnType != null) _result.set("syntheticReturnType",this.syntheticReturnType.toJson());
        if (this.typeArguments.isNotEmpty) _result.set("typeArguments",this.typeArguments.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.typeParameters.isNotEmpty) _result.set("typeParameters",this.typeParameters.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["entityKind",this.entityKind],
            ["implicitFunctionTypeIndices",this.implicitFunctionTypeIndices],
            ["paramReference",this.paramReference],
            ["reference",this.reference],
            ["slot",this.slot],
            ["syntheticParams",this.syntheticParams],
            ["syntheticReturnType",this.syntheticReturnType],
            ["typeArguments",this.typeArguments],
            ["typeParameters",this.typeParameters]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _EntityRefMixin() {
    }
}

export namespace LinkedDependencyBuilder {
    export type Constructors = 'LinkedDependencyBuilder';
    export type Interface = Omit<LinkedDependencyBuilder, Constructors>;
}
@DartClass
@Implements(lib3.LinkedDependency)
@With(_LinkedDependencyMixin)
export class LinkedDependencyBuilder extends core.DartObject implements lib3.LinkedDependency.Interface,_LinkedDependencyMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _parts : core.DartList<string>;

    _uri : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<string> {
        return this._parts = ( this._parts ) || ( new core.DartList.literal<string>() );
    }
    set parts(value : core.DartList<string>) {
        this._parts = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        return this._uri = ( this._uri ) || ( '' );
    }
    set uri(value : string) {
        this._uri = value;
    }
    constructor(_namedArguments? : {parts? : core.DartList<string>,uri? : string}) {
    }
    @defaultConstructor
    LinkedDependencyBuilder(_namedArguments? : {parts? : core.DartList<string>,uri? : string}) {
        let {parts,uri} = Object.assign({
        }, _namedArguments );
        this._parts = parts;
        this._uri = uri;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._uri || ''));
        if (this._parts == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._parts.length);
            for(let x of this._parts) {
                signature.addString(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_parts : any;
        let offset_uri : any;
        if (!(this._parts == null || this._parts.isEmpty)) {
            offset_parts = fbBuilder.writeList(this._parts.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (this._uri != null) {
            offset_uri = fbBuilder.writeString(this._uri);
        }
        fbBuilder.startTable();
        if (offset_parts != null) {
            fbBuilder.addOffset(1,offset_parts);
        }
        if (offset_uri != null) {
            fbBuilder.addOffset(0,offset_uri);
        }
        return fbBuilder.endTable();
    }
}

export namespace _LinkedDependencyReader {
    export type Constructors = '_LinkedDependencyReader';
    export type Interface = Omit<_LinkedDependencyReader, Constructors>;
}
@DartClass
export class _LinkedDependencyReader extends any {
    constructor() {
    }
    @defaultConstructor
    _LinkedDependencyReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _LinkedDependencyImpl {
        return new _LinkedDependencyImpl(bc,offset);
    }
}

export namespace _LinkedDependencyImpl {
    export type Constructors = '_LinkedDependencyImpl';
    export type Interface = Omit<_LinkedDependencyImpl, Constructors>;
}
@DartClass
@Implements(lib3.LinkedDependency)
@With(_LinkedDependencyMixin)
export class _LinkedDependencyImpl extends core.DartObject implements lib3.LinkedDependency.Interface,_LinkedDependencyMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _LinkedDependencyImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _parts : core.DartList<string>;

    _uri : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<string> {
        this._parts = ( this._parts ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<string>()) );
        return this._parts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        this._uri = ( this._uri ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._uri;
    }
}

export namespace _LinkedDependencyMixin {
    export type Constructors = '_LinkedDependencyMixin';
    export type Interface = Omit<_LinkedDependencyMixin, Constructors>;
}
@DartClass
@Implements(lib3.LinkedDependency)
export class _LinkedDependencyMixin implements lib3.LinkedDependency.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.parts.isNotEmpty) _result.set("parts",this.parts);
        if (this.uri != '') _result.set("uri",this.uri);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["parts",this.parts],
            ["uri",this.uri]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _LinkedDependencyMixin() {
    }
}

export namespace LinkedExportNameBuilder {
    export type Constructors = 'LinkedExportNameBuilder';
    export type Interface = Omit<LinkedExportNameBuilder, Constructors>;
}
@DartClass
@Implements(lib3.LinkedExportName)
@With(_LinkedExportNameMixin)
export class LinkedExportNameBuilder extends core.DartObject implements lib3.LinkedExportName.Interface,_LinkedExportNameMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _dependency : number;

    _kind : lib3.ReferenceKind;

    _name : string;

    _unit : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependency() : number {
        return this._dependency = ( this._dependency ) || ( 0 );
    }
    set dependency(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._dependency = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.ReferenceKind {
        return this._kind = ( this._kind ) || ( lib3.ReferenceKind.classOrEnum );
    }
    set kind(value : lib3.ReferenceKind) {
        this._kind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : number {
        return this._unit = ( this._unit ) || ( 0 );
    }
    set unit(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._unit = value;
    }
    constructor(_namedArguments? : {dependency? : number,kind? : lib3.ReferenceKind,name? : string,unit? : number}) {
    }
    @defaultConstructor
    LinkedExportNameBuilder(_namedArguments? : {dependency? : number,kind? : lib3.ReferenceKind,name? : string,unit? : number}) {
        let {dependency,kind,name,unit} = Object.assign({
        }, _namedArguments );
        this._dependency = dependency;
        this._kind = kind;
        this._name = name;
        this._unit = unit;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addInt((this._dependency || 0));
        signature.addString((this._name || ''));
        signature.addInt((this._unit || 0));
        signature.addInt(op(Op.EQUALS,this._kind,null) ? 0 : this._kind.index);
    }
    finish(fbBuilder : any) : any {
        let offset_name : any;
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (this._dependency != null && this._dependency != 0) {
            fbBuilder.addUint32(0,this._dependency);
        }
        if (this._kind != null && this._kind != lib3.ReferenceKind.classOrEnum) {
            fbBuilder.addUint8(3,this._kind.index);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(1,offset_name);
        }
        if (this._unit != null && this._unit != 0) {
            fbBuilder.addUint32(2,this._unit);
        }
        return fbBuilder.endTable();
    }
}

export namespace _LinkedExportNameReader {
    export type Constructors = '_LinkedExportNameReader';
    export type Interface = Omit<_LinkedExportNameReader, Constructors>;
}
@DartClass
export class _LinkedExportNameReader extends any {
    constructor() {
    }
    @defaultConstructor
    _LinkedExportNameReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _LinkedExportNameImpl {
        return new _LinkedExportNameImpl(bc,offset);
    }
}

export namespace _LinkedExportNameImpl {
    export type Constructors = '_LinkedExportNameImpl';
    export type Interface = Omit<_LinkedExportNameImpl, Constructors>;
}
@DartClass
@Implements(lib3.LinkedExportName)
@With(_LinkedExportNameMixin)
export class _LinkedExportNameImpl extends core.DartObject implements lib3.LinkedExportName.Interface,_LinkedExportNameMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _LinkedExportNameImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _dependency : number;

    _kind : lib3.ReferenceKind;

    _name : string;

    _unit : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependency() : number {
        this._dependency = ( this._dependency ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._dependency;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.ReferenceKind {
        this._kind = ( this._kind ) || ( new _ReferenceKindReader().vTableGet(this._bc,this._bcOffset,3,lib3.ReferenceKind.classOrEnum) );
        return this._kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : number {
        this._unit = ( this._unit ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._unit;
    }
}

export namespace _LinkedExportNameMixin {
    export type Constructors = '_LinkedExportNameMixin';
    export type Interface = Omit<_LinkedExportNameMixin, Constructors>;
}
@DartClass
@Implements(lib3.LinkedExportName)
export class _LinkedExportNameMixin implements lib3.LinkedExportName.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.dependency != 0) _result.set("dependency",this.dependency);
        if (this.kind != lib3.ReferenceKind.classOrEnum) _result.set("kind",new core.DartString(this.kind.toString()).split('.')[1]);
        if (this.name != '') _result.set("name",this.name);
        if (this.unit != 0) _result.set("unit",this.unit);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["dependency",this.dependency],
            ["kind",this.kind],
            ["name",this.name],
            ["unit",this.unit]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _LinkedExportNameMixin() {
    }
}

export namespace LinkedLibraryBuilder {
    export type Constructors = 'LinkedLibraryBuilder';
    export type Interface = Omit<LinkedLibraryBuilder, Constructors>;
}
@DartClass
@Implements(lib3.LinkedLibrary)
@With(_LinkedLibraryMixin)
export class LinkedLibraryBuilder extends core.DartObject implements lib3.LinkedLibrary.Interface,_LinkedLibraryMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _dependencies : core.DartList<LinkedDependencyBuilder>;

    _exportDependencies : core.DartList<number>;

    _exportNames : core.DartList<LinkedExportNameBuilder>;

    _importDependencies : core.DartList<number>;

    _numPrelinkedDependencies : number;

    _units : core.DartList<LinkedUnitBuilder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependencies() : core.DartList<LinkedDependencyBuilder> {
        return this._dependencies = ( this._dependencies ) || ( new core.DartList.literal<LinkedDependencyBuilder>() );
    }
    set dependencies(value : core.DartList<LinkedDependencyBuilder>) {
        this._dependencies = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportDependencies() : core.DartList<number> {
        return this._exportDependencies = ( this._exportDependencies ) || ( new core.DartList.literal<number>() );
    }
    set exportDependencies(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._exportDependencies = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportNames() : core.DartList<LinkedExportNameBuilder> {
        return this._exportNames = ( this._exportNames ) || ( new core.DartList.literal<LinkedExportNameBuilder>() );
    }
    set exportNames(value : core.DartList<LinkedExportNameBuilder>) {
        this._exportNames = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fallbackMode() : boolean {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importDependencies() : core.DartList<number> {
        return this._importDependencies = ( this._importDependencies ) || ( new core.DartList.literal<number>() );
    }
    set importDependencies(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._importDependencies = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numPrelinkedDependencies() : number {
        return this._numPrelinkedDependencies = ( this._numPrelinkedDependencies ) || ( 0 );
    }
    set numPrelinkedDependencies(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._numPrelinkedDependencies = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get units() : core.DartList<LinkedUnitBuilder> {
        return this._units = ( this._units ) || ( new core.DartList.literal<LinkedUnitBuilder>() );
    }
    set units(value : core.DartList<LinkedUnitBuilder>) {
        this._units = value;
    }
    constructor(_namedArguments? : {dependencies? : core.DartList<LinkedDependencyBuilder>,exportDependencies? : core.DartList<number>,exportNames? : core.DartList<LinkedExportNameBuilder>,importDependencies? : core.DartList<number>,numPrelinkedDependencies? : number,units? : core.DartList<LinkedUnitBuilder>}) {
    }
    @defaultConstructor
    LinkedLibraryBuilder(_namedArguments? : {dependencies? : core.DartList<LinkedDependencyBuilder>,exportDependencies? : core.DartList<number>,exportNames? : core.DartList<LinkedExportNameBuilder>,importDependencies? : core.DartList<number>,numPrelinkedDependencies? : number,units? : core.DartList<LinkedUnitBuilder>}) {
        let {dependencies,exportDependencies,exportNames,importDependencies,numPrelinkedDependencies,units} = Object.assign({
        }, _namedArguments );
        this._dependencies = dependencies;
        this._exportDependencies = exportDependencies;
        this._exportNames = exportNames;
        this._importDependencies = importDependencies;
        this._numPrelinkedDependencies = numPrelinkedDependencies;
        this._units = units;
    }
    flushInformative() : void {
        ((_371_)=>(!!_371_)?_371_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._dependencies);
        ((_372_)=>(!!_372_)?_372_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._exportNames);
        ((_373_)=>(!!_373_)?_373_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._units);
    }
    collectApiSignature(signature : any) : void {
        if (this._dependencies == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._dependencies.length);
            for(let x of this._dependencies) {
                ((_374_)=>(!!_374_)?_374_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._importDependencies == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._importDependencies.length);
            for(let x of this._importDependencies) {
                signature.addInt(x);
            }
        }
        signature.addInt((this._numPrelinkedDependencies || 0));
        if (this._units == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._units.length);
            for(let x of this._units) {
                ((_375_)=>(!!_375_)?_375_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._exportNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._exportNames.length);
            for(let x of this._exportNames) {
                ((_376_)=>(!!_376_)?_376_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._exportDependencies == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._exportDependencies.length);
            for(let x of this._exportDependencies) {
                signature.addInt(x);
            }
        }
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"LLib");
    }
    finish(fbBuilder : any) : any {
        let offset_dependencies : any;
        let offset_exportDependencies : any;
        let offset_exportNames : any;
        let offset_importDependencies : any;
        let offset_units : any;
        if (!(this._dependencies == null || this._dependencies.isEmpty)) {
            offset_dependencies = fbBuilder.writeList(this._dependencies.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._exportDependencies == null || this._exportDependencies.isEmpty)) {
            offset_exportDependencies = fbBuilder.writeListUint32(this._exportDependencies);
        }
        if (!(this._exportNames == null || this._exportNames.isEmpty)) {
            offset_exportNames = fbBuilder.writeList(this._exportNames.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._importDependencies == null || this._importDependencies.isEmpty)) {
            offset_importDependencies = fbBuilder.writeListUint32(this._importDependencies);
        }
        if (!(this._units == null || this._units.isEmpty)) {
            offset_units = fbBuilder.writeList(this._units.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_dependencies != null) {
            fbBuilder.addOffset(0,offset_dependencies);
        }
        if (offset_exportDependencies != null) {
            fbBuilder.addOffset(6,offset_exportDependencies);
        }
        if (offset_exportNames != null) {
            fbBuilder.addOffset(4,offset_exportNames);
        }
        if (offset_importDependencies != null) {
            fbBuilder.addOffset(1,offset_importDependencies);
        }
        if (this._numPrelinkedDependencies != null && this._numPrelinkedDependencies != 0) {
            fbBuilder.addUint32(2,this._numPrelinkedDependencies);
        }
        if (offset_units != null) {
            fbBuilder.addOffset(3,offset_units);
        }
        return fbBuilder.endTable();
    }
}

export namespace _TopLevelInferenceErrorKindReader {
    export type Constructors = '_TopLevelInferenceErrorKindReader';
    export type Interface = Omit<_TopLevelInferenceErrorKindReader, Constructors>;
}
@DartClass
export class _TopLevelInferenceErrorKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _TopLevelInferenceErrorKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.TopLevelInferenceErrorKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.TopLevelInferenceErrorKind.values.length ? lib3.TopLevelInferenceErrorKind.values[index] : lib3.TopLevelInferenceErrorKind.assignment;
    }
}

export namespace _LinkedLibraryReader {
    export type Constructors = '_LinkedLibraryReader';
    export type Interface = Omit<_LinkedLibraryReader, Constructors>;
}
@DartClass
export class _LinkedLibraryReader extends any {
    constructor() {
    }
    @defaultConstructor
    _LinkedLibraryReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _LinkedLibraryImpl {
        return new _LinkedLibraryImpl(bc,offset);
    }
}

export namespace _LinkedLibraryImpl {
    export type Constructors = '_LinkedLibraryImpl';
    export type Interface = Omit<_LinkedLibraryImpl, Constructors>;
}
@DartClass
@Implements(lib3.LinkedLibrary)
@With(_LinkedLibraryMixin)
export class _LinkedLibraryImpl extends core.DartObject implements lib3.LinkedLibrary.Interface,_LinkedLibraryMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _LinkedLibraryImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _dependencies : core.DartList<lib3.LinkedDependency>;

    _exportDependencies : core.DartList<number>;

    _exportNames : core.DartList<lib3.LinkedExportName>;

    _importDependencies : core.DartList<number>;

    _numPrelinkedDependencies : number;

    _units : core.DartList<lib3.LinkedUnit>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependencies() : core.DartList<lib3.LinkedDependency> {
        this._dependencies = ( this._dependencies ) || ( new bare.createInstance(any,null,new _LinkedDependencyReader()).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<lib3.LinkedDependency>()) );
        return this._dependencies;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportDependencies() : core.DartList<number> {
        this._exportDependencies = ( this._exportDependencies ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,new core.DartList.literal<number>()) );
        return this._exportDependencies;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportNames() : core.DartList<lib3.LinkedExportName> {
        this._exportNames = ( this._exportNames ) || ( new bare.createInstance(any,null,new _LinkedExportNameReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.LinkedExportName>()) );
        return this._exportNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fallbackMode() : boolean {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importDependencies() : core.DartList<number> {
        this._importDependencies = ( this._importDependencies ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<number>()) );
        return this._importDependencies;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numPrelinkedDependencies() : number {
        this._numPrelinkedDependencies = ( this._numPrelinkedDependencies ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._numPrelinkedDependencies;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get units() : core.DartList<lib3.LinkedUnit> {
        this._units = ( this._units ) || ( new bare.createInstance(any,null,new _LinkedUnitReader()).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<lib3.LinkedUnit>()) );
        return this._units;
    }
}

export namespace _EntityRefKindReader {
    export type Constructors = '_EntityRefKindReader';
    export type Interface = Omit<_EntityRefKindReader, Constructors>;
}
@DartClass
export class _EntityRefKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _EntityRefKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.EntityRefKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.EntityRefKind.values.length ? lib3.EntityRefKind.values[index] : lib3.EntityRefKind.named;
    }
}

export namespace LinkedReferenceBuilder {
    export type Constructors = 'LinkedReferenceBuilder';
    export type Interface = Omit<LinkedReferenceBuilder, Constructors>;
}
@DartClass
@Implements(lib3.LinkedReference)
@With(_LinkedReferenceMixin)
export class LinkedReferenceBuilder extends core.DartObject implements lib3.LinkedReference.Interface,_LinkedReferenceMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _containingReference : number;

    _dependency : number;

    _kind : lib3.ReferenceKind;

    _localIndex : number;

    _name : string;

    _numTypeParameters : number;

    _unit : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get containingReference() : number {
        return this._containingReference = ( this._containingReference ) || ( 0 );
    }
    set containingReference(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._containingReference = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependency() : number {
        return this._dependency = ( this._dependency ) || ( 0 );
    }
    set dependency(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._dependency = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.ReferenceKind {
        return this._kind = ( this._kind ) || ( lib3.ReferenceKind.classOrEnum );
    }
    set kind(value : lib3.ReferenceKind) {
        this._kind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localIndex() : number {
        return this._localIndex = ( this._localIndex ) || ( 0 );
    }
    set localIndex(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._localIndex = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numTypeParameters() : number {
        return this._numTypeParameters = ( this._numTypeParameters ) || ( 0 );
    }
    set numTypeParameters(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._numTypeParameters = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : number {
        return this._unit = ( this._unit ) || ( 0 );
    }
    set unit(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._unit = value;
    }
    constructor(_namedArguments? : {containingReference? : number,dependency? : number,kind? : lib3.ReferenceKind,localIndex? : number,name? : string,numTypeParameters? : number,unit? : number}) {
    }
    @defaultConstructor
    LinkedReferenceBuilder(_namedArguments? : {containingReference? : number,dependency? : number,kind? : lib3.ReferenceKind,localIndex? : number,name? : string,numTypeParameters? : number,unit? : number}) {
        let {containingReference,dependency,kind,localIndex,name,numTypeParameters,unit} = Object.assign({
        }, _namedArguments );
        this._containingReference = containingReference;
        this._dependency = dependency;
        this._kind = kind;
        this._localIndex = localIndex;
        this._name = name;
        this._numTypeParameters = numTypeParameters;
        this._unit = unit;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addInt((this._unit || 0));
        signature.addInt((this._dependency || 0));
        signature.addInt(op(Op.EQUALS,this._kind,null) ? 0 : this._kind.index);
        signature.addString((this._name || ''));
        signature.addInt((this._numTypeParameters || 0));
        signature.addInt((this._containingReference || 0));
        signature.addInt((this._localIndex || 0));
    }
    finish(fbBuilder : any) : any {
        let offset_name : any;
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (this._containingReference != null && this._containingReference != 0) {
            fbBuilder.addUint32(5,this._containingReference);
        }
        if (this._dependency != null && this._dependency != 0) {
            fbBuilder.addUint32(1,this._dependency);
        }
        if (this._kind != null && this._kind != lib3.ReferenceKind.classOrEnum) {
            fbBuilder.addUint8(2,this._kind.index);
        }
        if (this._localIndex != null && this._localIndex != 0) {
            fbBuilder.addUint32(6,this._localIndex);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(3,offset_name);
        }
        if (this._numTypeParameters != null && this._numTypeParameters != 0) {
            fbBuilder.addUint32(4,this._numTypeParameters);
        }
        if (this._unit != null && this._unit != 0) {
            fbBuilder.addUint32(0,this._unit);
        }
        return fbBuilder.endTable();
    }
}

export namespace _LinkedReferenceReader {
    export type Constructors = '_LinkedReferenceReader';
    export type Interface = Omit<_LinkedReferenceReader, Constructors>;
}
@DartClass
export class _LinkedReferenceReader extends any {
    constructor() {
    }
    @defaultConstructor
    _LinkedReferenceReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _LinkedReferenceImpl {
        return new _LinkedReferenceImpl(bc,offset);
    }
}

export namespace _LinkedReferenceImpl {
    export type Constructors = '_LinkedReferenceImpl';
    export type Interface = Omit<_LinkedReferenceImpl, Constructors>;
}
@DartClass
@Implements(lib3.LinkedReference)
@With(_LinkedReferenceMixin)
export class _LinkedReferenceImpl extends core.DartObject implements lib3.LinkedReference.Interface,_LinkedReferenceMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _LinkedReferenceImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _containingReference : number;

    _dependency : number;

    _kind : lib3.ReferenceKind;

    _localIndex : number;

    _name : string;

    _numTypeParameters : number;

    _unit : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get containingReference() : number {
        this._containingReference = ( this._containingReference ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,0) );
        return this._containingReference;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependency() : number {
        this._dependency = ( this._dependency ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._dependency;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.ReferenceKind {
        this._kind = ( this._kind ) || ( new _ReferenceKindReader().vTableGet(this._bc,this._bcOffset,2,lib3.ReferenceKind.classOrEnum) );
        return this._kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localIndex() : number {
        this._localIndex = ( this._localIndex ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,0) );
        return this._localIndex;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numTypeParameters() : number {
        this._numTypeParameters = ( this._numTypeParameters ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,4,0) );
        return this._numTypeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : number {
        this._unit = ( this._unit ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._unit;
    }
}

export namespace _LinkedReferenceMixin {
    export type Constructors = '_LinkedReferenceMixin';
    export type Interface = Omit<_LinkedReferenceMixin, Constructors>;
}
@DartClass
@Implements(lib3.LinkedReference)
export class _LinkedReferenceMixin implements lib3.LinkedReference.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.containingReference != 0) _result.set("containingReference",this.containingReference);
        if (this.dependency != 0) _result.set("dependency",this.dependency);
        if (this.kind != lib3.ReferenceKind.classOrEnum) _result.set("kind",new core.DartString(this.kind.toString()).split('.')[1]);
        if (this.localIndex != 0) _result.set("localIndex",this.localIndex);
        if (this.name != '') _result.set("name",this.name);
        if (this.numTypeParameters != 0) _result.set("numTypeParameters",this.numTypeParameters);
        if (this.unit != 0) _result.set("unit",this.unit);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["containingReference",this.containingReference],
            ["dependency",this.dependency],
            ["kind",this.kind],
            ["localIndex",this.localIndex],
            ["name",this.name],
            ["numTypeParameters",this.numTypeParameters],
            ["unit",this.unit]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _LinkedReferenceMixin() {
    }
}

export namespace LinkedUnitBuilder {
    export type Constructors = 'LinkedUnitBuilder';
    export type Interface = Omit<LinkedUnitBuilder, Constructors>;
}
@DartClass
@Implements(lib3.LinkedUnit)
@With(_LinkedUnitMixin)
export class LinkedUnitBuilder extends core.DartObject implements lib3.LinkedUnit.Interface,_LinkedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _constCycles : core.DartList<number>;

    _parametersInheritingCovariant : core.DartList<number>;

    _references : core.DartList<LinkedReferenceBuilder>;

    _topLevelInferenceErrors : core.DartList<TopLevelInferenceErrorBuilder>;

    _types : core.DartList<EntityRefBuilder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constCycles() : core.DartList<number> {
        return this._constCycles = ( this._constCycles ) || ( new core.DartList.literal<number>() );
    }
    set constCycles(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._constCycles = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parametersInheritingCovariant() : core.DartList<number> {
        return this._parametersInheritingCovariant = ( this._parametersInheritingCovariant ) || ( new core.DartList.literal<number>() );
    }
    set parametersInheritingCovariant(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._parametersInheritingCovariant = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get references() : core.DartList<LinkedReferenceBuilder> {
        return this._references = ( this._references ) || ( new core.DartList.literal<LinkedReferenceBuilder>() );
    }
    set references(value : core.DartList<LinkedReferenceBuilder>) {
        this._references = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get topLevelInferenceErrors() : core.DartList<TopLevelInferenceErrorBuilder> {
        return this._topLevelInferenceErrors = ( this._topLevelInferenceErrors ) || ( new core.DartList.literal<TopLevelInferenceErrorBuilder>() );
    }
    set topLevelInferenceErrors(value : core.DartList<TopLevelInferenceErrorBuilder>) {
        this._topLevelInferenceErrors = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get types() : core.DartList<EntityRefBuilder> {
        return this._types = ( this._types ) || ( new core.DartList.literal<EntityRefBuilder>() );
    }
    set types(value : core.DartList<EntityRefBuilder>) {
        this._types = value;
    }
    constructor(_namedArguments? : {constCycles? : core.DartList<number>,parametersInheritingCovariant? : core.DartList<number>,references? : core.DartList<LinkedReferenceBuilder>,topLevelInferenceErrors? : core.DartList<TopLevelInferenceErrorBuilder>,types? : core.DartList<EntityRefBuilder>}) {
    }
    @defaultConstructor
    LinkedUnitBuilder(_namedArguments? : {constCycles? : core.DartList<number>,parametersInheritingCovariant? : core.DartList<number>,references? : core.DartList<LinkedReferenceBuilder>,topLevelInferenceErrors? : core.DartList<TopLevelInferenceErrorBuilder>,types? : core.DartList<EntityRefBuilder>}) {
        let {constCycles,parametersInheritingCovariant,references,topLevelInferenceErrors,types} = Object.assign({
        }, _namedArguments );
        this._constCycles = constCycles;
        this._parametersInheritingCovariant = parametersInheritingCovariant;
        this._references = references;
        this._topLevelInferenceErrors = topLevelInferenceErrors;
        this._types = types;
    }
    flushInformative() : void {
        ((_377_)=>(!!_377_)?_377_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._references);
        ((_378_)=>(!!_378_)?_378_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._topLevelInferenceErrors);
        ((_379_)=>(!!_379_)?_379_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._types);
    }
    collectApiSignature(signature : any) : void {
        if (this._references == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._references.length);
            for(let x of this._references) {
                ((_380_)=>(!!_380_)?_380_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._types == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._types.length);
            for(let x of this._types) {
                ((_381_)=>(!!_381_)?_381_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._constCycles == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._constCycles.length);
            for(let x of this._constCycles) {
                signature.addInt(x);
            }
        }
        if (this._parametersInheritingCovariant == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._parametersInheritingCovariant.length);
            for(let x of this._parametersInheritingCovariant) {
                signature.addInt(x);
            }
        }
        if (this._topLevelInferenceErrors == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._topLevelInferenceErrors.length);
            for(let x of this._topLevelInferenceErrors) {
                ((_382_)=>(!!_382_)?_382_.collectApiSignature(signature):null)(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_constCycles : any;
        let offset_parametersInheritingCovariant : any;
        let offset_references : any;
        let offset_topLevelInferenceErrors : any;
        let offset_types : any;
        if (!(this._constCycles == null || this._constCycles.isEmpty)) {
            offset_constCycles = fbBuilder.writeListUint32(this._constCycles);
        }
        if (!(this._parametersInheritingCovariant == null || this._parametersInheritingCovariant.isEmpty)) {
            offset_parametersInheritingCovariant = fbBuilder.writeListUint32(this._parametersInheritingCovariant);
        }
        if (!(this._references == null || this._references.isEmpty)) {
            offset_references = fbBuilder.writeList(this._references.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._topLevelInferenceErrors == null || this._topLevelInferenceErrors.isEmpty)) {
            offset_topLevelInferenceErrors = fbBuilder.writeList(this._topLevelInferenceErrors.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._types == null || this._types.isEmpty)) {
            offset_types = fbBuilder.writeList(this._types.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_constCycles != null) {
            fbBuilder.addOffset(2,offset_constCycles);
        }
        if (offset_parametersInheritingCovariant != null) {
            fbBuilder.addOffset(3,offset_parametersInheritingCovariant);
        }
        if (offset_references != null) {
            fbBuilder.addOffset(0,offset_references);
        }
        if (offset_topLevelInferenceErrors != null) {
            fbBuilder.addOffset(4,offset_topLevelInferenceErrors);
        }
        if (offset_types != null) {
            fbBuilder.addOffset(1,offset_types);
        }
        return fbBuilder.endTable();
    }
}

export namespace _LinkedUnitReader {
    export type Constructors = '_LinkedUnitReader';
    export type Interface = Omit<_LinkedUnitReader, Constructors>;
}
@DartClass
export class _LinkedUnitReader extends any {
    constructor() {
    }
    @defaultConstructor
    _LinkedUnitReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _LinkedUnitImpl {
        return new _LinkedUnitImpl(bc,offset);
    }
}

export namespace _LinkedUnitImpl {
    export type Constructors = '_LinkedUnitImpl';
    export type Interface = Omit<_LinkedUnitImpl, Constructors>;
}
@DartClass
@Implements(lib3.LinkedUnit)
@With(_LinkedUnitMixin)
export class _LinkedUnitImpl extends core.DartObject implements lib3.LinkedUnit.Interface,_LinkedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _LinkedUnitImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _constCycles : core.DartList<number>;

    _parametersInheritingCovariant : core.DartList<number>;

    _references : core.DartList<lib3.LinkedReference>;

    _topLevelInferenceErrors : core.DartList<lib3.TopLevelInferenceError>;

    _types : core.DartList<lib3.EntityRef>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constCycles() : core.DartList<number> {
        this._constCycles = ( this._constCycles ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<number>()) );
        return this._constCycles;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parametersInheritingCovariant() : core.DartList<number> {
        this._parametersInheritingCovariant = ( this._parametersInheritingCovariant ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<number>()) );
        return this._parametersInheritingCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get references() : core.DartList<lib3.LinkedReference> {
        this._references = ( this._references ) || ( new bare.createInstance(any,null,new _LinkedReferenceReader()).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<lib3.LinkedReference>()) );
        return this._references;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get topLevelInferenceErrors() : core.DartList<lib3.TopLevelInferenceError> {
        this._topLevelInferenceErrors = ( this._topLevelInferenceErrors ) || ( new bare.createInstance(any,null,new _TopLevelInferenceErrorReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.TopLevelInferenceError>()) );
        return this._topLevelInferenceErrors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get types() : core.DartList<lib3.EntityRef> {
        this._types = ( this._types ) || ( new bare.createInstance(any,null,new _EntityRefReader()).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<lib3.EntityRef>()) );
        return this._types;
    }
}

export namespace _LinkedUnitMixin {
    export type Constructors = '_LinkedUnitMixin';
    export type Interface = Omit<_LinkedUnitMixin, Constructors>;
}
@DartClass
@Implements(lib3.LinkedUnit)
export class _LinkedUnitMixin implements lib3.LinkedUnit.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.constCycles.isNotEmpty) _result.set("constCycles",this.constCycles);
        if (this.parametersInheritingCovariant.isNotEmpty) _result.set("parametersInheritingCovariant",this.parametersInheritingCovariant);
        if (this.references.isNotEmpty) _result.set("references",this.references.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.topLevelInferenceErrors.isNotEmpty) _result.set("topLevelInferenceErrors",this.topLevelInferenceErrors.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.types.isNotEmpty) _result.set("types",this.types.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["constCycles",this.constCycles],
            ["parametersInheritingCovariant",this.parametersInheritingCovariant],
            ["references",this.references],
            ["topLevelInferenceErrors",this.topLevelInferenceErrors],
            ["types",this.types]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _LinkedUnitMixin() {
    }
}

export namespace PackageBundleBuilder {
    export type Constructors = 'PackageBundleBuilder';
    export type Interface = Omit<PackageBundleBuilder, Constructors>;
}
@DartClass
@Implements(lib3.PackageBundle)
@With(_PackageBundleMixin)
export class PackageBundleBuilder extends core.DartObject implements lib3.PackageBundle.Interface,_PackageBundleMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _apiSignature : string;

    _dependencies : core.DartList<PackageDependencyInfoBuilder>;

    _linkedLibraries : core.DartList<LinkedLibraryBuilder>;

    _linkedLibraryUris : core.DartList<string>;

    _majorVersion : number;

    _minorVersion : number;

    _unlinkedUnitHashes : core.DartList<string>;

    _unlinkedUnits : core.DartList<UnlinkedUnitBuilder>;

    _unlinkedUnitUris : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get apiSignature() : string {
        return this._apiSignature = ( this._apiSignature ) || ( '' );
    }
    set apiSignature(value : string) {
        this._apiSignature = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependencies() : core.DartList<PackageDependencyInfoBuilder> {
        return this._dependencies = ( this._dependencies ) || ( new core.DartList.literal<PackageDependencyInfoBuilder>() );
    }
    set dependencies(value : core.DartList<PackageDependencyInfoBuilder>) {
        this._dependencies = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get linkedLibraries() : core.DartList<LinkedLibraryBuilder> {
        return this._linkedLibraries = ( this._linkedLibraries ) || ( new core.DartList.literal<LinkedLibraryBuilder>() );
    }
    set linkedLibraries(value : core.DartList<LinkedLibraryBuilder>) {
        this._linkedLibraries = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get linkedLibraryUris() : core.DartList<string> {
        return this._linkedLibraryUris = ( this._linkedLibraryUris ) || ( new core.DartList.literal<string>() );
    }
    set linkedLibraryUris(value : core.DartList<string>) {
        this._linkedLibraryUris = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get majorVersion() : number {
        return this._majorVersion = ( this._majorVersion ) || ( 0 );
    }
    set majorVersion(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._majorVersion = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get minorVersion() : number {
        return this._minorVersion = ( this._minorVersion ) || ( 0 );
    }
    set minorVersion(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._minorVersion = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedUnitHashes() : core.DartList<string> {
        return this._unlinkedUnitHashes = ( this._unlinkedUnitHashes ) || ( new core.DartList.literal<string>() );
    }
    set unlinkedUnitHashes(value : core.DartList<string>) {
        this._unlinkedUnitHashes = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedUnits() : core.DartList<UnlinkedUnitBuilder> {
        return this._unlinkedUnits = ( this._unlinkedUnits ) || ( new core.DartList.literal<UnlinkedUnitBuilder>() );
    }
    set unlinkedUnits(value : core.DartList<UnlinkedUnitBuilder>) {
        this._unlinkedUnits = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedUnitUris() : core.DartList<string> {
        return this._unlinkedUnitUris = ( this._unlinkedUnitUris ) || ( new core.DartList.literal<string>() );
    }
    set unlinkedUnitUris(value : core.DartList<string>) {
        this._unlinkedUnitUris = value;
    }
    constructor(_namedArguments? : {apiSignature? : string,dependencies? : core.DartList<PackageDependencyInfoBuilder>,linkedLibraries? : core.DartList<LinkedLibraryBuilder>,linkedLibraryUris? : core.DartList<string>,majorVersion? : number,minorVersion? : number,unlinkedUnitHashes? : core.DartList<string>,unlinkedUnits? : core.DartList<UnlinkedUnitBuilder>,unlinkedUnitUris? : core.DartList<string>}) {
    }
    @defaultConstructor
    PackageBundleBuilder(_namedArguments? : {apiSignature? : string,dependencies? : core.DartList<PackageDependencyInfoBuilder>,linkedLibraries? : core.DartList<LinkedLibraryBuilder>,linkedLibraryUris? : core.DartList<string>,majorVersion? : number,minorVersion? : number,unlinkedUnitHashes? : core.DartList<string>,unlinkedUnits? : core.DartList<UnlinkedUnitBuilder>,unlinkedUnitUris? : core.DartList<string>}) {
        let {apiSignature,dependencies,linkedLibraries,linkedLibraryUris,majorVersion,minorVersion,unlinkedUnitHashes,unlinkedUnits,unlinkedUnitUris} = Object.assign({
        }, _namedArguments );
        this._apiSignature = apiSignature;
        this._dependencies = dependencies;
        this._linkedLibraries = linkedLibraries;
        this._linkedLibraryUris = linkedLibraryUris;
        this._majorVersion = majorVersion;
        this._minorVersion = minorVersion;
        this._unlinkedUnitHashes = unlinkedUnitHashes;
        this._unlinkedUnits = unlinkedUnits;
        this._unlinkedUnitUris = unlinkedUnitUris;
    }
    flushInformative() : void {
        this._dependencies = null;
        ((_383_)=>(!!_383_)?_383_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._linkedLibraries);
        this._unlinkedUnitHashes = null;
        ((_384_)=>(!!_384_)?_384_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._unlinkedUnits);
    }
    collectApiSignature(signature : any) : void {
        if (this._linkedLibraries == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._linkedLibraries.length);
            for(let x of this._linkedLibraries) {
                ((_385_)=>(!!_385_)?_385_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._linkedLibraryUris == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._linkedLibraryUris.length);
            for(let x of this._linkedLibraryUris) {
                signature.addString(x);
            }
        }
        if (this._unlinkedUnits == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._unlinkedUnits.length);
            for(let x of this._unlinkedUnits) {
                ((_386_)=>(!!_386_)?_386_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._unlinkedUnitUris == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._unlinkedUnitUris.length);
            for(let x of this._unlinkedUnitUris) {
                signature.addString(x);
            }
        }
        signature.addInt((this._majorVersion || 0));
        signature.addInt((this._minorVersion || 0));
        signature.addString((this._apiSignature || ''));
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"PBdl");
    }
    finish(fbBuilder : any) : any {
        let offset_apiSignature : any;
        let offset_dependencies : any;
        let offset_linkedLibraries : any;
        let offset_linkedLibraryUris : any;
        let offset_unlinkedUnitHashes : any;
        let offset_unlinkedUnits : any;
        let offset_unlinkedUnitUris : any;
        if (this._apiSignature != null) {
            offset_apiSignature = fbBuilder.writeString(this._apiSignature);
        }
        if (!(this._dependencies == null || this._dependencies.isEmpty)) {
            offset_dependencies = fbBuilder.writeList(this._dependencies.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._linkedLibraries == null || this._linkedLibraries.isEmpty)) {
            offset_linkedLibraries = fbBuilder.writeList(this._linkedLibraries.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._linkedLibraryUris == null || this._linkedLibraryUris.isEmpty)) {
            offset_linkedLibraryUris = fbBuilder.writeList(this._linkedLibraryUris.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._unlinkedUnitHashes == null || this._unlinkedUnitHashes.isEmpty)) {
            offset_unlinkedUnitHashes = fbBuilder.writeList(this._unlinkedUnitHashes.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._unlinkedUnits == null || this._unlinkedUnits.isEmpty)) {
            offset_unlinkedUnits = fbBuilder.writeList(this._unlinkedUnits.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._unlinkedUnitUris == null || this._unlinkedUnitUris.isEmpty)) {
            offset_unlinkedUnitUris = fbBuilder.writeList(this._unlinkedUnitUris.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_apiSignature != null) {
            fbBuilder.addOffset(7,offset_apiSignature);
        }
        if (offset_dependencies != null) {
            fbBuilder.addOffset(8,offset_dependencies);
        }
        if (offset_linkedLibraries != null) {
            fbBuilder.addOffset(0,offset_linkedLibraries);
        }
        if (offset_linkedLibraryUris != null) {
            fbBuilder.addOffset(1,offset_linkedLibraryUris);
        }
        if (this._majorVersion != null && this._majorVersion != 0) {
            fbBuilder.addUint32(5,this._majorVersion);
        }
        if (this._minorVersion != null && this._minorVersion != 0) {
            fbBuilder.addUint32(6,this._minorVersion);
        }
        if (offset_unlinkedUnitHashes != null) {
            fbBuilder.addOffset(4,offset_unlinkedUnitHashes);
        }
        if (offset_unlinkedUnits != null) {
            fbBuilder.addOffset(2,offset_unlinkedUnits);
        }
        if (offset_unlinkedUnitUris != null) {
            fbBuilder.addOffset(3,offset_unlinkedUnitUris);
        }
        return fbBuilder.endTable();
    }
}

export namespace _TypedefStyleReader {
    export type Constructors = '_TypedefStyleReader';
    export type Interface = Omit<_TypedefStyleReader, Constructors>;
}
@DartClass
export class _TypedefStyleReader extends any {
    constructor() {
    }
    @defaultConstructor
    _TypedefStyleReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.TypedefStyle {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.TypedefStyle.values.length ? lib3.TypedefStyle.values[index] : lib3.TypedefStyle.functionType;
    }
}

export namespace _PackageBundleReader {
    export type Constructors = '_PackageBundleReader';
    export type Interface = Omit<_PackageBundleReader, Constructors>;
}
@DartClass
export class _PackageBundleReader extends any {
    constructor() {
    }
    @defaultConstructor
    _PackageBundleReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _PackageBundleImpl {
        return new _PackageBundleImpl(bc,offset);
    }
}

export namespace _PackageBundleImpl {
    export type Constructors = '_PackageBundleImpl';
    export type Interface = Omit<_PackageBundleImpl, Constructors>;
}
@DartClass
@Implements(lib3.PackageBundle)
@With(_PackageBundleMixin)
export class _PackageBundleImpl extends core.DartObject implements lib3.PackageBundle.Interface,_PackageBundleMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _PackageBundleImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _apiSignature : string;

    _dependencies : core.DartList<lib3.PackageDependencyInfo>;

    _linkedLibraries : core.DartList<lib3.LinkedLibrary>;

    _linkedLibraryUris : core.DartList<string>;

    _majorVersion : number;

    _minorVersion : number;

    _unlinkedUnitHashes : core.DartList<string>;

    _unlinkedUnits : core.DartList<lib3.UnlinkedUnit>;

    _unlinkedUnitUris : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get apiSignature() : string {
        this._apiSignature = ( this._apiSignature ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,7,'') );
        return this._apiSignature;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dependencies() : core.DartList<lib3.PackageDependencyInfo> {
        this._dependencies = ( this._dependencies ) || ( new bare.createInstance(any,null,new _PackageDependencyInfoReader()).vTableGet(this._bc,this._bcOffset,8,new core.DartList.literal<lib3.PackageDependencyInfo>()) );
        return this._dependencies;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get linkedLibraries() : core.DartList<lib3.LinkedLibrary> {
        this._linkedLibraries = ( this._linkedLibraries ) || ( new bare.createInstance(any,null,new _LinkedLibraryReader()).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<lib3.LinkedLibrary>()) );
        return this._linkedLibraries;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get linkedLibraryUris() : core.DartList<string> {
        this._linkedLibraryUris = ( this._linkedLibraryUris ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<string>()) );
        return this._linkedLibraryUris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get majorVersion() : number {
        this._majorVersion = ( this._majorVersion ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,0) );
        return this._majorVersion;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get minorVersion() : number {
        this._minorVersion = ( this._minorVersion ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,0) );
        return this._minorVersion;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedUnitHashes() : core.DartList<string> {
        this._unlinkedUnitHashes = ( this._unlinkedUnitHashes ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<string>()) );
        return this._unlinkedUnitHashes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedUnits() : core.DartList<lib3.UnlinkedUnit> {
        this._unlinkedUnits = ( this._unlinkedUnits ) || ( new bare.createInstance(any,null,new _UnlinkedUnitReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedUnit>()) );
        return this._unlinkedUnits;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedUnitUris() : core.DartList<string> {
        this._unlinkedUnitUris = ( this._unlinkedUnitUris ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<string>()) );
        return this._unlinkedUnitUris;
    }
}

export namespace _PackageBundleMixin {
    export type Constructors = '_PackageBundleMixin';
    export type Interface = Omit<_PackageBundleMixin, Constructors>;
}
@DartClass
@Implements(lib3.PackageBundle)
export class _PackageBundleMixin implements lib3.PackageBundle.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.apiSignature != '') _result.set("apiSignature",this.apiSignature);
        if (this.dependencies.isNotEmpty) _result.set("dependencies",this.dependencies.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.linkedLibraries.isNotEmpty) _result.set("linkedLibraries",this.linkedLibraries.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.linkedLibraryUris.isNotEmpty) _result.set("linkedLibraryUris",this.linkedLibraryUris);
        if (this.majorVersion != 0) _result.set("majorVersion",this.majorVersion);
        if (this.minorVersion != 0) _result.set("minorVersion",this.minorVersion);
        if (this.unlinkedUnitHashes.isNotEmpty) _result.set("unlinkedUnitHashes",this.unlinkedUnitHashes);
        if (this.unlinkedUnits.isNotEmpty) _result.set("unlinkedUnits",this.unlinkedUnits.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.unlinkedUnitUris.isNotEmpty) _result.set("unlinkedUnitUris",this.unlinkedUnitUris);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["apiSignature",this.apiSignature],
            ["dependencies",this.dependencies],
            ["linkedLibraries",this.linkedLibraries],
            ["linkedLibraryUris",this.linkedLibraryUris],
            ["majorVersion",this.majorVersion],
            ["minorVersion",this.minorVersion],
            ["unlinkedUnitHashes",this.unlinkedUnitHashes],
            ["unlinkedUnits",this.unlinkedUnits],
            ["unlinkedUnitUris",this.unlinkedUnitUris]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _PackageBundleMixin() {
    }
}

export namespace PackageDependencyInfoBuilder {
    export type Constructors = 'PackageDependencyInfoBuilder';
    export type Interface = Omit<PackageDependencyInfoBuilder, Constructors>;
}
@DartClass
@Implements(lib3.PackageDependencyInfo)
@With(_PackageDependencyInfoMixin)
export class PackageDependencyInfoBuilder extends core.DartObject implements lib3.PackageDependencyInfo.Interface,_PackageDependencyInfoMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _apiSignature : string;

    _includedPackageNames : core.DartList<string>;

    _includesDartUris : boolean;

    _includesFileUris : boolean;

    _summaryPath : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get apiSignature() : string {
        return this._apiSignature = ( this._apiSignature ) || ( '' );
    }
    set apiSignature(value : string) {
        this._apiSignature = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get includedPackageNames() : core.DartList<string> {
        return this._includedPackageNames = ( this._includedPackageNames ) || ( new core.DartList.literal<string>() );
    }
    set includedPackageNames(value : core.DartList<string>) {
        this._includedPackageNames = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get includesDartUris() : boolean {
        return this._includesDartUris = ( this._includesDartUris ) || ( false );
    }
    set includesDartUris(value : boolean) {
        this._includesDartUris = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get includesFileUris() : boolean {
        return this._includesFileUris = ( this._includesFileUris ) || ( false );
    }
    set includesFileUris(value : boolean) {
        this._includesFileUris = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get summaryPath() : string {
        return this._summaryPath = ( this._summaryPath ) || ( '' );
    }
    set summaryPath(value : string) {
        this._summaryPath = value;
    }
    constructor(_namedArguments? : {apiSignature? : string,includedPackageNames? : core.DartList<string>,includesDartUris? : boolean,includesFileUris? : boolean,summaryPath? : string}) {
    }
    @defaultConstructor
    PackageDependencyInfoBuilder(_namedArguments? : {apiSignature? : string,includedPackageNames? : core.DartList<string>,includesDartUris? : boolean,includesFileUris? : boolean,summaryPath? : string}) {
        let {apiSignature,includedPackageNames,includesDartUris,includesFileUris,summaryPath} = Object.assign({
        }, _namedArguments );
        this._apiSignature = apiSignature;
        this._includedPackageNames = includedPackageNames;
        this._includesDartUris = includesDartUris;
        this._includesFileUris = includesFileUris;
        this._summaryPath = summaryPath;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._apiSignature || ''));
        signature.addString((this._summaryPath || ''));
        if (this._includedPackageNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._includedPackageNames.length);
            for(let x of this._includedPackageNames) {
                signature.addString(x);
            }
        }
        signature.addBool(this._includesFileUris == true);
        signature.addBool(this._includesDartUris == true);
    }
    finish(fbBuilder : any) : any {
        let offset_apiSignature : any;
        let offset_includedPackageNames : any;
        let offset_summaryPath : any;
        if (this._apiSignature != null) {
            offset_apiSignature = fbBuilder.writeString(this._apiSignature);
        }
        if (!(this._includedPackageNames == null || this._includedPackageNames.isEmpty)) {
            offset_includedPackageNames = fbBuilder.writeList(this._includedPackageNames.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (this._summaryPath != null) {
            offset_summaryPath = fbBuilder.writeString(this._summaryPath);
        }
        fbBuilder.startTable();
        if (offset_apiSignature != null) {
            fbBuilder.addOffset(0,offset_apiSignature);
        }
        if (offset_includedPackageNames != null) {
            fbBuilder.addOffset(2,offset_includedPackageNames);
        }
        if (this._includesDartUris == true) {
            fbBuilder.addBool(4,true);
        }
        if (this._includesFileUris == true) {
            fbBuilder.addBool(3,true);
        }
        if (offset_summaryPath != null) {
            fbBuilder.addOffset(1,offset_summaryPath);
        }
        return fbBuilder.endTable();
    }
}

export namespace _PackageDependencyInfoReader {
    export type Constructors = '_PackageDependencyInfoReader';
    export type Interface = Omit<_PackageDependencyInfoReader, Constructors>;
}
@DartClass
export class _PackageDependencyInfoReader extends any {
    constructor() {
    }
    @defaultConstructor
    _PackageDependencyInfoReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _PackageDependencyInfoImpl {
        return new _PackageDependencyInfoImpl(bc,offset);
    }
}

export namespace _PackageDependencyInfoImpl {
    export type Constructors = '_PackageDependencyInfoImpl';
    export type Interface = Omit<_PackageDependencyInfoImpl, Constructors>;
}
@DartClass
@Implements(lib3.PackageDependencyInfo)
@With(_PackageDependencyInfoMixin)
export class _PackageDependencyInfoImpl extends core.DartObject implements lib3.PackageDependencyInfo.Interface,_PackageDependencyInfoMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _PackageDependencyInfoImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _apiSignature : string;

    _includedPackageNames : core.DartList<string>;

    _includesDartUris : boolean;

    _includesFileUris : boolean;

    _summaryPath : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get apiSignature() : string {
        this._apiSignature = ( this._apiSignature ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._apiSignature;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get includedPackageNames() : core.DartList<string> {
        this._includedPackageNames = ( this._includedPackageNames ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<string>()) );
        return this._includedPackageNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get includesDartUris() : boolean {
        this._includesDartUris = ( this._includesDartUris ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,4,false) );
        return this._includesDartUris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get includesFileUris() : boolean {
        this._includesFileUris = ( this._includesFileUris ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,false) );
        return this._includesFileUris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get summaryPath() : string {
        this._summaryPath = ( this._summaryPath ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._summaryPath;
    }
}

export namespace _PackageDependencyInfoMixin {
    export type Constructors = '_PackageDependencyInfoMixin';
    export type Interface = Omit<_PackageDependencyInfoMixin, Constructors>;
}
@DartClass
@Implements(lib3.PackageDependencyInfo)
export class _PackageDependencyInfoMixin implements lib3.PackageDependencyInfo.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.apiSignature != '') _result.set("apiSignature",this.apiSignature);
        if (this.includedPackageNames.isNotEmpty) _result.set("includedPackageNames",this.includedPackageNames);
        if (this.includesDartUris != false) _result.set("includesDartUris",this.includesDartUris);
        if (this.includesFileUris != false) _result.set("includesFileUris",this.includesFileUris);
        if (this.summaryPath != '') _result.set("summaryPath",this.summaryPath);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["apiSignature",this.apiSignature],
            ["includedPackageNames",this.includedPackageNames],
            ["includesDartUris",this.includesDartUris],
            ["includesFileUris",this.includesFileUris],
            ["summaryPath",this.summaryPath]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _PackageDependencyInfoMixin() {
    }
}

export namespace PackageIndexBuilder {
    export type Constructors = 'PackageIndexBuilder';
    export type Interface = Omit<PackageIndexBuilder, Constructors>;
}
@DartClass
@Implements(lib3.PackageIndex)
@With(_PackageIndexMixin)
export class PackageIndexBuilder extends core.DartObject implements lib3.PackageIndex.Interface,_PackageIndexMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _elementKinds : core.DartList<lib3.IndexSyntheticElementKind>;

    _elementNameClassMemberIds : core.DartList<number>;

    _elementNameParameterIds : core.DartList<number>;

    _elementNameUnitMemberIds : core.DartList<number>;

    _elementUnits : core.DartList<number>;

    _strings : core.DartList<string>;

    _unitLibraryUris : core.DartList<number>;

    _units : core.DartList<UnitIndexBuilder>;

    _unitUnitUris : core.DartList<number>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementKinds() : core.DartList<lib3.IndexSyntheticElementKind> {
        return this._elementKinds = ( this._elementKinds ) || ( new core.DartList.literal<lib3.IndexSyntheticElementKind>() );
    }
    set elementKinds(value : core.DartList<lib3.IndexSyntheticElementKind>) {
        this._elementKinds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameClassMemberIds() : core.DartList<number> {
        return this._elementNameClassMemberIds = ( this._elementNameClassMemberIds ) || ( new core.DartList.literal<number>() );
    }
    set elementNameClassMemberIds(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementNameClassMemberIds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameParameterIds() : core.DartList<number> {
        return this._elementNameParameterIds = ( this._elementNameParameterIds ) || ( new core.DartList.literal<number>() );
    }
    set elementNameParameterIds(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementNameParameterIds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameUnitMemberIds() : core.DartList<number> {
        return this._elementNameUnitMemberIds = ( this._elementNameUnitMemberIds ) || ( new core.DartList.literal<number>() );
    }
    set elementNameUnitMemberIds(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementNameUnitMemberIds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementUnits() : core.DartList<number> {
        return this._elementUnits = ( this._elementUnits ) || ( new core.DartList.literal<number>() );
    }
    set elementUnits(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._elementUnits = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strings() : core.DartList<string> {
        return this._strings = ( this._strings ) || ( new core.DartList.literal<string>() );
    }
    set strings(value : core.DartList<string>) {
        this._strings = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitLibraryUris() : core.DartList<number> {
        return this._unitLibraryUris = ( this._unitLibraryUris ) || ( new core.DartList.literal<number>() );
    }
    set unitLibraryUris(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._unitLibraryUris = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get units() : core.DartList<UnitIndexBuilder> {
        return this._units = ( this._units ) || ( new core.DartList.literal<UnitIndexBuilder>() );
    }
    set units(value : core.DartList<UnitIndexBuilder>) {
        this._units = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitUnitUris() : core.DartList<number> {
        return this._unitUnitUris = ( this._unitUnitUris ) || ( new core.DartList.literal<number>() );
    }
    set unitUnitUris(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._unitUnitUris = value;
    }
    constructor(_namedArguments? : {elementKinds? : core.DartList<lib3.IndexSyntheticElementKind>,elementNameClassMemberIds? : core.DartList<number>,elementNameParameterIds? : core.DartList<number>,elementNameUnitMemberIds? : core.DartList<number>,elementUnits? : core.DartList<number>,strings? : core.DartList<string>,unitLibraryUris? : core.DartList<number>,units? : core.DartList<UnitIndexBuilder>,unitUnitUris? : core.DartList<number>}) {
    }
    @defaultConstructor
    PackageIndexBuilder(_namedArguments? : {elementKinds? : core.DartList<lib3.IndexSyntheticElementKind>,elementNameClassMemberIds? : core.DartList<number>,elementNameParameterIds? : core.DartList<number>,elementNameUnitMemberIds? : core.DartList<number>,elementUnits? : core.DartList<number>,strings? : core.DartList<string>,unitLibraryUris? : core.DartList<number>,units? : core.DartList<UnitIndexBuilder>,unitUnitUris? : core.DartList<number>}) {
        let {elementKinds,elementNameClassMemberIds,elementNameParameterIds,elementNameUnitMemberIds,elementUnits,strings,unitLibraryUris,units,unitUnitUris} = Object.assign({
        }, _namedArguments );
        this._elementKinds = elementKinds;
        this._elementNameClassMemberIds = elementNameClassMemberIds;
        this._elementNameParameterIds = elementNameParameterIds;
        this._elementNameUnitMemberIds = elementNameUnitMemberIds;
        this._elementUnits = elementUnits;
        this._strings = strings;
        this._unitLibraryUris = unitLibraryUris;
        this._units = units;
        this._unitUnitUris = unitUnitUris;
    }
    flushInformative() : void {
        ((_387_)=>(!!_387_)?_387_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._units);
    }
    collectApiSignature(signature : any) : void {
        if (this._elementUnits == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementUnits.length);
            for(let x of this._elementUnits) {
                signature.addInt(x);
            }
        }
        if (this._elementNameUnitMemberIds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementNameUnitMemberIds.length);
            for(let x of this._elementNameUnitMemberIds) {
                signature.addInt(x);
            }
        }
        if (this._unitLibraryUris == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._unitLibraryUris.length);
            for(let x of this._unitLibraryUris) {
                signature.addInt(x);
            }
        }
        if (this._unitUnitUris == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._unitUnitUris.length);
            for(let x of this._unitUnitUris) {
                signature.addInt(x);
            }
        }
        if (this._units == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._units.length);
            for(let x of this._units) {
                ((_388_)=>(!!_388_)?_388_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._elementKinds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementKinds.length);
            for(let x of this._elementKinds) {
                signature.addInt(x.index);
            }
        }
        if (this._strings == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._strings.length);
            for(let x of this._strings) {
                signature.addString(x);
            }
        }
        if (this._elementNameClassMemberIds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementNameClassMemberIds.length);
            for(let x of this._elementNameClassMemberIds) {
                signature.addInt(x);
            }
        }
        if (this._elementNameParameterIds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._elementNameParameterIds.length);
            for(let x of this._elementNameParameterIds) {
                signature.addInt(x);
            }
        }
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"Indx");
    }
    finish(fbBuilder : any) : any {
        let offset_elementKinds : any;
        let offset_elementNameClassMemberIds : any;
        let offset_elementNameParameterIds : any;
        let offset_elementNameUnitMemberIds : any;
        let offset_elementUnits : any;
        let offset_strings : any;
        let offset_unitLibraryUris : any;
        let offset_units : any;
        let offset_unitUnitUris : any;
        if (!(this._elementKinds == null || this._elementKinds.isEmpty)) {
            offset_elementKinds = fbBuilder.writeListUint8(this._elementKinds.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._elementNameClassMemberIds == null || this._elementNameClassMemberIds.isEmpty)) {
            offset_elementNameClassMemberIds = fbBuilder.writeListUint32(this._elementNameClassMemberIds);
        }
        if (!(this._elementNameParameterIds == null || this._elementNameParameterIds.isEmpty)) {
            offset_elementNameParameterIds = fbBuilder.writeListUint32(this._elementNameParameterIds);
        }
        if (!(this._elementNameUnitMemberIds == null || this._elementNameUnitMemberIds.isEmpty)) {
            offset_elementNameUnitMemberIds = fbBuilder.writeListUint32(this._elementNameUnitMemberIds);
        }
        if (!(this._elementUnits == null || this._elementUnits.isEmpty)) {
            offset_elementUnits = fbBuilder.writeListUint32(this._elementUnits);
        }
        if (!(this._strings == null || this._strings.isEmpty)) {
            offset_strings = fbBuilder.writeList(this._strings.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._unitLibraryUris == null || this._unitLibraryUris.isEmpty)) {
            offset_unitLibraryUris = fbBuilder.writeListUint32(this._unitLibraryUris);
        }
        if (!(this._units == null || this._units.isEmpty)) {
            offset_units = fbBuilder.writeList(this._units.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._unitUnitUris == null || this._unitUnitUris.isEmpty)) {
            offset_unitUnitUris = fbBuilder.writeListUint32(this._unitUnitUris);
        }
        fbBuilder.startTable();
        if (offset_elementKinds != null) {
            fbBuilder.addOffset(5,offset_elementKinds);
        }
        if (offset_elementNameClassMemberIds != null) {
            fbBuilder.addOffset(7,offset_elementNameClassMemberIds);
        }
        if (offset_elementNameParameterIds != null) {
            fbBuilder.addOffset(8,offset_elementNameParameterIds);
        }
        if (offset_elementNameUnitMemberIds != null) {
            fbBuilder.addOffset(1,offset_elementNameUnitMemberIds);
        }
        if (offset_elementUnits != null) {
            fbBuilder.addOffset(0,offset_elementUnits);
        }
        if (offset_strings != null) {
            fbBuilder.addOffset(6,offset_strings);
        }
        if (offset_unitLibraryUris != null) {
            fbBuilder.addOffset(2,offset_unitLibraryUris);
        }
        if (offset_units != null) {
            fbBuilder.addOffset(4,offset_units);
        }
        if (offset_unitUnitUris != null) {
            fbBuilder.addOffset(3,offset_unitUnitUris);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedConstructorInitializerKindReader {
    export type Constructors = '_UnlinkedConstructorInitializerKindReader';
    export type Interface = Omit<_UnlinkedConstructorInitializerKindReader, Constructors>;
}
@DartClass
export class _UnlinkedConstructorInitializerKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedConstructorInitializerKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.UnlinkedConstructorInitializerKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.UnlinkedConstructorInitializerKind.values.length ? lib3.UnlinkedConstructorInitializerKind.values[index] : lib3.UnlinkedConstructorInitializerKind.field;
    }
}

export namespace _PackageIndexReader {
    export type Constructors = '_PackageIndexReader';
    export type Interface = Omit<_PackageIndexReader, Constructors>;
}
@DartClass
export class _PackageIndexReader extends any {
    constructor() {
    }
    @defaultConstructor
    _PackageIndexReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _PackageIndexImpl {
        return new _PackageIndexImpl(bc,offset);
    }
}

export namespace _PackageIndexImpl {
    export type Constructors = '_PackageIndexImpl';
    export type Interface = Omit<_PackageIndexImpl, Constructors>;
}
@DartClass
@Implements(lib3.PackageIndex)
@With(_PackageIndexMixin)
export class _PackageIndexImpl extends core.DartObject implements lib3.PackageIndex.Interface,_PackageIndexMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _PackageIndexImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _elementKinds : core.DartList<lib3.IndexSyntheticElementKind>;

    _elementNameClassMemberIds : core.DartList<number>;

    _elementNameParameterIds : core.DartList<number>;

    _elementNameUnitMemberIds : core.DartList<number>;

    _elementUnits : core.DartList<number>;

    _strings : core.DartList<string>;

    _unitLibraryUris : core.DartList<number>;

    _units : core.DartList<lib3.UnitIndex>;

    _unitUnitUris : core.DartList<number>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementKinds() : core.DartList<lib3.IndexSyntheticElementKind> {
        this._elementKinds = ( this._elementKinds ) || ( new bare.createInstance(any,null,new _IndexSyntheticElementKindReader()).vTableGet(this._bc,this._bcOffset,5,new core.DartList.literal<lib3.IndexSyntheticElementKind>()) );
        return this._elementKinds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameClassMemberIds() : core.DartList<number> {
        this._elementNameClassMemberIds = ( this._elementNameClassMemberIds ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,7,new core.DartList.literal<number>()) );
        return this._elementNameClassMemberIds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameParameterIds() : core.DartList<number> {
        this._elementNameParameterIds = ( this._elementNameParameterIds ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,8,new core.DartList.literal<number>()) );
        return this._elementNameParameterIds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementNameUnitMemberIds() : core.DartList<number> {
        this._elementNameUnitMemberIds = ( this._elementNameUnitMemberIds ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<number>()) );
        return this._elementNameUnitMemberIds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elementUnits() : core.DartList<number> {
        this._elementUnits = ( this._elementUnits ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<number>()) );
        return this._elementUnits;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strings() : core.DartList<string> {
        this._strings = ( this._strings ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,6,new core.DartList.literal<string>()) );
        return this._strings;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitLibraryUris() : core.DartList<number> {
        this._unitLibraryUris = ( this._unitLibraryUris ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<number>()) );
        return this._unitLibraryUris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get units() : core.DartList<lib3.UnitIndex> {
        this._units = ( this._units ) || ( new bare.createInstance(any,null,new _UnitIndexReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.UnitIndex>()) );
        return this._units;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unitUnitUris() : core.DartList<number> {
        this._unitUnitUris = ( this._unitUnitUris ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<number>()) );
        return this._unitUnitUris;
    }
}

export namespace _PackageIndexMixin {
    export type Constructors = '_PackageIndexMixin';
    export type Interface = Omit<_PackageIndexMixin, Constructors>;
}
@DartClass
@Implements(lib3.PackageIndex)
export class _PackageIndexMixin implements lib3.PackageIndex.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.elementKinds.isNotEmpty) _result.set("elementKinds",this.elementKinds.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.elementNameClassMemberIds.isNotEmpty) _result.set("elementNameClassMemberIds",this.elementNameClassMemberIds);
        if (this.elementNameParameterIds.isNotEmpty) _result.set("elementNameParameterIds",this.elementNameParameterIds);
        if (this.elementNameUnitMemberIds.isNotEmpty) _result.set("elementNameUnitMemberIds",this.elementNameUnitMemberIds);
        if (this.elementUnits.isNotEmpty) _result.set("elementUnits",this.elementUnits);
        if (this.strings.isNotEmpty) _result.set("strings",this.strings);
        if (this.unitLibraryUris.isNotEmpty) _result.set("unitLibraryUris",this.unitLibraryUris);
        if (this.units.isNotEmpty) _result.set("units",this.units.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.unitUnitUris.isNotEmpty) _result.set("unitUnitUris",this.unitUnitUris);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["elementKinds",this.elementKinds],
            ["elementNameClassMemberIds",this.elementNameClassMemberIds],
            ["elementNameParameterIds",this.elementNameParameterIds],
            ["elementNameUnitMemberIds",this.elementNameUnitMemberIds],
            ["elementUnits",this.elementUnits],
            ["strings",this.strings],
            ["unitLibraryUris",this.unitLibraryUris],
            ["units",this.units],
            ["unitUnitUris",this.unitUnitUris]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _PackageIndexMixin() {
    }
}

export namespace TopLevelInferenceErrorBuilder {
    export type Constructors = 'TopLevelInferenceErrorBuilder';
    export type Interface = Omit<TopLevelInferenceErrorBuilder, Constructors>;
}
@DartClass
@Implements(lib3.TopLevelInferenceError)
@With(_TopLevelInferenceErrorMixin)
export class TopLevelInferenceErrorBuilder extends core.DartObject implements lib3.TopLevelInferenceError.Interface,_TopLevelInferenceErrorMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _arguments : core.DartList<string>;

    _kind : lib3.TopLevelInferenceErrorKind;

    _slot : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get arguments() : core.DartList<string> {
        return this._arguments = ( this._arguments ) || ( new core.DartList.literal<string>() );
    }
    set arguments(value : core.DartList<string>) {
        this._arguments = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.TopLevelInferenceErrorKind {
        return this._kind = ( this._kind ) || ( lib3.TopLevelInferenceErrorKind.assignment );
    }
    set kind(value : lib3.TopLevelInferenceErrorKind) {
        this._kind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get slot() : number {
        return this._slot = ( this._slot ) || ( 0 );
    }
    set slot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._slot = value;
    }
    constructor(_namedArguments? : {arguments? : core.DartList<string>,kind? : lib3.TopLevelInferenceErrorKind,slot? : number}) {
    }
    @defaultConstructor
    TopLevelInferenceErrorBuilder(_namedArguments? : {arguments? : core.DartList<string>,kind? : lib3.TopLevelInferenceErrorKind,slot? : number}) {
        let {arguments,kind,slot} = Object.assign({
        }, _namedArguments );
        this._arguments = arguments;
        this._kind = kind;
        this._slot = slot;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addInt((this._slot || 0));
        signature.addInt(op(Op.EQUALS,this._kind,null) ? 0 : this._kind.index);
        if (this._arguments == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._arguments.length);
            for(let x of this._arguments) {
                signature.addString(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_arguments : any;
        if (!(this._arguments == null || this._arguments.isEmpty)) {
            offset_arguments = fbBuilder.writeList(this._arguments.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_arguments != null) {
            fbBuilder.addOffset(2,offset_arguments);
        }
        if (this._kind != null && this._kind != lib3.TopLevelInferenceErrorKind.assignment) {
            fbBuilder.addUint8(1,this._kind.index);
        }
        if (this._slot != null && this._slot != 0) {
            fbBuilder.addUint32(0,this._slot);
        }
        return fbBuilder.endTable();
    }
}

export namespace _TopLevelInferenceErrorReader {
    export type Constructors = '_TopLevelInferenceErrorReader';
    export type Interface = Omit<_TopLevelInferenceErrorReader, Constructors>;
}
@DartClass
export class _TopLevelInferenceErrorReader extends any {
    constructor() {
    }
    @defaultConstructor
    _TopLevelInferenceErrorReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _TopLevelInferenceErrorImpl {
        return new _TopLevelInferenceErrorImpl(bc,offset);
    }
}

export namespace _TopLevelInferenceErrorImpl {
    export type Constructors = '_TopLevelInferenceErrorImpl';
    export type Interface = Omit<_TopLevelInferenceErrorImpl, Constructors>;
}
@DartClass
@Implements(lib3.TopLevelInferenceError)
@With(_TopLevelInferenceErrorMixin)
export class _TopLevelInferenceErrorImpl extends core.DartObject implements lib3.TopLevelInferenceError.Interface,_TopLevelInferenceErrorMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _TopLevelInferenceErrorImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _arguments : core.DartList<string>;

    _kind : lib3.TopLevelInferenceErrorKind;

    _slot : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get arguments() : core.DartList<string> {
        this._arguments = ( this._arguments ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<string>()) );
        return this._arguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.TopLevelInferenceErrorKind {
        this._kind = ( this._kind ) || ( new _TopLevelInferenceErrorKindReader().vTableGet(this._bc,this._bcOffset,1,lib3.TopLevelInferenceErrorKind.assignment) );
        return this._kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get slot() : number {
        this._slot = ( this._slot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._slot;
    }
}

export namespace _TopLevelInferenceErrorMixin {
    export type Constructors = '_TopLevelInferenceErrorMixin';
    export type Interface = Omit<_TopLevelInferenceErrorMixin, Constructors>;
}
@DartClass
@Implements(lib3.TopLevelInferenceError)
export class _TopLevelInferenceErrorMixin implements lib3.TopLevelInferenceError.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.arguments.isNotEmpty) _result.set("arguments",this.arguments);
        if (this.kind != lib3.TopLevelInferenceErrorKind.assignment) _result.set("kind",new core.DartString(this.kind.toString()).split('.')[1]);
        if (this.slot != 0) _result.set("slot",this.slot);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["arguments",this.arguments],
            ["kind",this.kind],
            ["slot",this.slot]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _TopLevelInferenceErrorMixin() {
    }
}

export namespace UnitIndexBuilder {
    export type Constructors = 'UnitIndexBuilder';
    export type Interface = Omit<UnitIndexBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnitIndex)
@With(_UnitIndexMixin)
export class UnitIndexBuilder extends core.DartObject implements lib3.UnitIndex.Interface,_UnitIndexMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _definedNameKinds : core.DartList<lib3.IndexNameKind>;

    _definedNameOffsets : core.DartList<number>;

    _definedNames : core.DartList<number>;

    _unit : number;

    _usedElementIsQualifiedFlags : core.DartList<boolean>;

    _usedElementKinds : core.DartList<lib3.IndexRelationKind>;

    _usedElementLengths : core.DartList<number>;

    _usedElementOffsets : core.DartList<number>;

    _usedElements : core.DartList<number>;

    _usedNameIsQualifiedFlags : core.DartList<boolean>;

    _usedNameKinds : core.DartList<lib3.IndexRelationKind>;

    _usedNameOffsets : core.DartList<number>;

    _usedNames : core.DartList<number>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedNameKinds() : core.DartList<lib3.IndexNameKind> {
        return this._definedNameKinds = ( this._definedNameKinds ) || ( new core.DartList.literal<lib3.IndexNameKind>() );
    }
    set definedNameKinds(value : core.DartList<lib3.IndexNameKind>) {
        this._definedNameKinds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedNameOffsets() : core.DartList<number> {
        return this._definedNameOffsets = ( this._definedNameOffsets ) || ( new core.DartList.literal<number>() );
    }
    set definedNameOffsets(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._definedNameOffsets = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedNames() : core.DartList<number> {
        return this._definedNames = ( this._definedNames ) || ( new core.DartList.literal<number>() );
    }
    set definedNames(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._definedNames = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : number {
        return this._unit = ( this._unit ) || ( 0 );
    }
    set unit(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._unit = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementIsQualifiedFlags() : core.DartList<boolean> {
        return this._usedElementIsQualifiedFlags = ( this._usedElementIsQualifiedFlags ) || ( new core.DartList.literal<boolean>() );
    }
    set usedElementIsQualifiedFlags(value : core.DartList<boolean>) {
        this._usedElementIsQualifiedFlags = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementKinds() : core.DartList<lib3.IndexRelationKind> {
        return this._usedElementKinds = ( this._usedElementKinds ) || ( new core.DartList.literal<lib3.IndexRelationKind>() );
    }
    set usedElementKinds(value : core.DartList<lib3.IndexRelationKind>) {
        this._usedElementKinds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementLengths() : core.DartList<number> {
        return this._usedElementLengths = ( this._usedElementLengths ) || ( new core.DartList.literal<number>() );
    }
    set usedElementLengths(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedElementLengths = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementOffsets() : core.DartList<number> {
        return this._usedElementOffsets = ( this._usedElementOffsets ) || ( new core.DartList.literal<number>() );
    }
    set usedElementOffsets(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedElementOffsets = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElements() : core.DartList<number> {
        return this._usedElements = ( this._usedElements ) || ( new core.DartList.literal<number>() );
    }
    set usedElements(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedElements = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameIsQualifiedFlags() : core.DartList<boolean> {
        return this._usedNameIsQualifiedFlags = ( this._usedNameIsQualifiedFlags ) || ( new core.DartList.literal<boolean>() );
    }
    set usedNameIsQualifiedFlags(value : core.DartList<boolean>) {
        this._usedNameIsQualifiedFlags = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameKinds() : core.DartList<lib3.IndexRelationKind> {
        return this._usedNameKinds = ( this._usedNameKinds ) || ( new core.DartList.literal<lib3.IndexRelationKind>() );
    }
    set usedNameKinds(value : core.DartList<lib3.IndexRelationKind>) {
        this._usedNameKinds = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameOffsets() : core.DartList<number> {
        return this._usedNameOffsets = ( this._usedNameOffsets ) || ( new core.DartList.literal<number>() );
    }
    set usedNameOffsets(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedNameOffsets = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNames() : core.DartList<number> {
        return this._usedNames = ( this._usedNames ) || ( new core.DartList.literal<number>() );
    }
    set usedNames(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._usedNames = value;
    }
    constructor(_namedArguments? : {definedNameKinds? : core.DartList<lib3.IndexNameKind>,definedNameOffsets? : core.DartList<number>,definedNames? : core.DartList<number>,unit? : number,usedElementIsQualifiedFlags? : core.DartList<boolean>,usedElementKinds? : core.DartList<lib3.IndexRelationKind>,usedElementLengths? : core.DartList<number>,usedElementOffsets? : core.DartList<number>,usedElements? : core.DartList<number>,usedNameIsQualifiedFlags? : core.DartList<boolean>,usedNameKinds? : core.DartList<lib3.IndexRelationKind>,usedNameOffsets? : core.DartList<number>,usedNames? : core.DartList<number>}) {
    }
    @defaultConstructor
    UnitIndexBuilder(_namedArguments? : {definedNameKinds? : core.DartList<lib3.IndexNameKind>,definedNameOffsets? : core.DartList<number>,definedNames? : core.DartList<number>,unit? : number,usedElementIsQualifiedFlags? : core.DartList<boolean>,usedElementKinds? : core.DartList<lib3.IndexRelationKind>,usedElementLengths? : core.DartList<number>,usedElementOffsets? : core.DartList<number>,usedElements? : core.DartList<number>,usedNameIsQualifiedFlags? : core.DartList<boolean>,usedNameKinds? : core.DartList<lib3.IndexRelationKind>,usedNameOffsets? : core.DartList<number>,usedNames? : core.DartList<number>}) {
        let {definedNameKinds,definedNameOffsets,definedNames,unit,usedElementIsQualifiedFlags,usedElementKinds,usedElementLengths,usedElementOffsets,usedElements,usedNameIsQualifiedFlags,usedNameKinds,usedNameOffsets,usedNames} = Object.assign({
        }, _namedArguments );
        this._definedNameKinds = definedNameKinds;
        this._definedNameOffsets = definedNameOffsets;
        this._definedNames = definedNames;
        this._unit = unit;
        this._usedElementIsQualifiedFlags = usedElementIsQualifiedFlags;
        this._usedElementKinds = usedElementKinds;
        this._usedElementLengths = usedElementLengths;
        this._usedElementOffsets = usedElementOffsets;
        this._usedElements = usedElements;
        this._usedNameIsQualifiedFlags = usedNameIsQualifiedFlags;
        this._usedNameKinds = usedNameKinds;
        this._usedNameOffsets = usedNameOffsets;
        this._usedNames = usedNames;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addInt((this._unit || 0));
        if (this._usedElementLengths == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementLengths.length);
            for(let x of this._usedElementLengths) {
                signature.addInt(x);
            }
        }
        if (this._usedElementOffsets == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementOffsets.length);
            for(let x of this._usedElementOffsets) {
                signature.addInt(x);
            }
        }
        if (this._usedElements == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElements.length);
            for(let x of this._usedElements) {
                signature.addInt(x);
            }
        }
        if (this._usedElementKinds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementKinds.length);
            for(let x of this._usedElementKinds) {
                signature.addInt(x.index);
            }
        }
        if (this._definedNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._definedNames.length);
            for(let x of this._definedNames) {
                signature.addInt(x);
            }
        }
        if (this._definedNameKinds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._definedNameKinds.length);
            for(let x of this._definedNameKinds) {
                signature.addInt(x.index);
            }
        }
        if (this._definedNameOffsets == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._definedNameOffsets.length);
            for(let x of this._definedNameOffsets) {
                signature.addInt(x);
            }
        }
        if (this._usedNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNames.length);
            for(let x of this._usedNames) {
                signature.addInt(x);
            }
        }
        if (this._usedNameOffsets == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNameOffsets.length);
            for(let x of this._usedNameOffsets) {
                signature.addInt(x);
            }
        }
        if (this._usedNameKinds == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNameKinds.length);
            for(let x of this._usedNameKinds) {
                signature.addInt(x.index);
            }
        }
        if (this._usedElementIsQualifiedFlags == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedElementIsQualifiedFlags.length);
            for(let x of this._usedElementIsQualifiedFlags) {
                signature.addBool(x);
            }
        }
        if (this._usedNameIsQualifiedFlags == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._usedNameIsQualifiedFlags.length);
            for(let x of this._usedNameIsQualifiedFlags) {
                signature.addBool(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_definedNameKinds : any;
        let offset_definedNameOffsets : any;
        let offset_definedNames : any;
        let offset_usedElementIsQualifiedFlags : any;
        let offset_usedElementKinds : any;
        let offset_usedElementLengths : any;
        let offset_usedElementOffsets : any;
        let offset_usedElements : any;
        let offset_usedNameIsQualifiedFlags : any;
        let offset_usedNameKinds : any;
        let offset_usedNameOffsets : any;
        let offset_usedNames : any;
        if (!(this._definedNameKinds == null || this._definedNameKinds.isEmpty)) {
            offset_definedNameKinds = fbBuilder.writeListUint8(this._definedNameKinds.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._definedNameOffsets == null || this._definedNameOffsets.isEmpty)) {
            offset_definedNameOffsets = fbBuilder.writeListUint32(this._definedNameOffsets);
        }
        if (!(this._definedNames == null || this._definedNames.isEmpty)) {
            offset_definedNames = fbBuilder.writeListUint32(this._definedNames);
        }
        if (!(this._usedElementIsQualifiedFlags == null || this._usedElementIsQualifiedFlags.isEmpty)) {
            offset_usedElementIsQualifiedFlags = fbBuilder.writeListBool(this._usedElementIsQualifiedFlags);
        }
        if (!(this._usedElementKinds == null || this._usedElementKinds.isEmpty)) {
            offset_usedElementKinds = fbBuilder.writeListUint8(this._usedElementKinds.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._usedElementLengths == null || this._usedElementLengths.isEmpty)) {
            offset_usedElementLengths = fbBuilder.writeListUint32(this._usedElementLengths);
        }
        if (!(this._usedElementOffsets == null || this._usedElementOffsets.isEmpty)) {
            offset_usedElementOffsets = fbBuilder.writeListUint32(this._usedElementOffsets);
        }
        if (!(this._usedElements == null || this._usedElements.isEmpty)) {
            offset_usedElements = fbBuilder.writeListUint32(this._usedElements);
        }
        if (!(this._usedNameIsQualifiedFlags == null || this._usedNameIsQualifiedFlags.isEmpty)) {
            offset_usedNameIsQualifiedFlags = fbBuilder.writeListBool(this._usedNameIsQualifiedFlags);
        }
        if (!(this._usedNameKinds == null || this._usedNameKinds.isEmpty)) {
            offset_usedNameKinds = fbBuilder.writeListUint8(this._usedNameKinds.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._usedNameOffsets == null || this._usedNameOffsets.isEmpty)) {
            offset_usedNameOffsets = fbBuilder.writeListUint32(this._usedNameOffsets);
        }
        if (!(this._usedNames == null || this._usedNames.isEmpty)) {
            offset_usedNames = fbBuilder.writeListUint32(this._usedNames);
        }
        fbBuilder.startTable();
        if (offset_definedNameKinds != null) {
            fbBuilder.addOffset(6,offset_definedNameKinds);
        }
        if (offset_definedNameOffsets != null) {
            fbBuilder.addOffset(7,offset_definedNameOffsets);
        }
        if (offset_definedNames != null) {
            fbBuilder.addOffset(5,offset_definedNames);
        }
        if (this._unit != null && this._unit != 0) {
            fbBuilder.addUint32(0,this._unit);
        }
        if (offset_usedElementIsQualifiedFlags != null) {
            fbBuilder.addOffset(11,offset_usedElementIsQualifiedFlags);
        }
        if (offset_usedElementKinds != null) {
            fbBuilder.addOffset(4,offset_usedElementKinds);
        }
        if (offset_usedElementLengths != null) {
            fbBuilder.addOffset(1,offset_usedElementLengths);
        }
        if (offset_usedElementOffsets != null) {
            fbBuilder.addOffset(2,offset_usedElementOffsets);
        }
        if (offset_usedElements != null) {
            fbBuilder.addOffset(3,offset_usedElements);
        }
        if (offset_usedNameIsQualifiedFlags != null) {
            fbBuilder.addOffset(12,offset_usedNameIsQualifiedFlags);
        }
        if (offset_usedNameKinds != null) {
            fbBuilder.addOffset(10,offset_usedNameKinds);
        }
        if (offset_usedNameOffsets != null) {
            fbBuilder.addOffset(9,offset_usedNameOffsets);
        }
        if (offset_usedNames != null) {
            fbBuilder.addOffset(8,offset_usedNames);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnitIndexReader {
    export type Constructors = '_UnitIndexReader';
    export type Interface = Omit<_UnitIndexReader, Constructors>;
}
@DartClass
export class _UnitIndexReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnitIndexReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnitIndexImpl {
        return new _UnitIndexImpl(bc,offset);
    }
}

export namespace _UnitIndexImpl {
    export type Constructors = '_UnitIndexImpl';
    export type Interface = Omit<_UnitIndexImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnitIndex)
@With(_UnitIndexMixin)
export class _UnitIndexImpl extends core.DartObject implements lib3.UnitIndex.Interface,_UnitIndexMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnitIndexImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _definedNameKinds : core.DartList<lib3.IndexNameKind>;

    _definedNameOffsets : core.DartList<number>;

    _definedNames : core.DartList<number>;

    _unit : number;

    _usedElementIsQualifiedFlags : core.DartList<boolean>;

    _usedElementKinds : core.DartList<lib3.IndexRelationKind>;

    _usedElementLengths : core.DartList<number>;

    _usedElementOffsets : core.DartList<number>;

    _usedElements : core.DartList<number>;

    _usedNameIsQualifiedFlags : core.DartList<boolean>;

    _usedNameKinds : core.DartList<lib3.IndexRelationKind>;

    _usedNameOffsets : core.DartList<number>;

    _usedNames : core.DartList<number>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedNameKinds() : core.DartList<lib3.IndexNameKind> {
        this._definedNameKinds = ( this._definedNameKinds ) || ( new bare.createInstance(any,null,new _IndexNameKindReader()).vTableGet(this._bc,this._bcOffset,6,new core.DartList.literal<lib3.IndexNameKind>()) );
        return this._definedNameKinds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedNameOffsets() : core.DartList<number> {
        this._definedNameOffsets = ( this._definedNameOffsets ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,7,new core.DartList.literal<number>()) );
        return this._definedNameOffsets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definedNames() : core.DartList<number> {
        this._definedNames = ( this._definedNames ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,new core.DartList.literal<number>()) );
        return this._definedNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : number {
        this._unit = ( this._unit ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementIsQualifiedFlags() : core.DartList<boolean> {
        this._usedElementIsQualifiedFlags = ( this._usedElementIsQualifiedFlags ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,11,new core.DartList.literal<boolean>()) );
        return this._usedElementIsQualifiedFlags;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementKinds() : core.DartList<lib3.IndexRelationKind> {
        this._usedElementKinds = ( this._usedElementKinds ) || ( new bare.createInstance(any,null,new _IndexRelationKindReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.IndexRelationKind>()) );
        return this._usedElementKinds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementLengths() : core.DartList<number> {
        this._usedElementLengths = ( this._usedElementLengths ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<number>()) );
        return this._usedElementLengths;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElementOffsets() : core.DartList<number> {
        this._usedElementOffsets = ( this._usedElementOffsets ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<number>()) );
        return this._usedElementOffsets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedElements() : core.DartList<number> {
        this._usedElements = ( this._usedElements ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<number>()) );
        return this._usedElements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameIsQualifiedFlags() : core.DartList<boolean> {
        this._usedNameIsQualifiedFlags = ( this._usedNameIsQualifiedFlags ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,12,new core.DartList.literal<boolean>()) );
        return this._usedNameIsQualifiedFlags;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameKinds() : core.DartList<lib3.IndexRelationKind> {
        this._usedNameKinds = ( this._usedNameKinds ) || ( new bare.createInstance(any,null,new _IndexRelationKindReader()).vTableGet(this._bc,this._bcOffset,10,new core.DartList.literal<lib3.IndexRelationKind>()) );
        return this._usedNameKinds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNameOffsets() : core.DartList<number> {
        this._usedNameOffsets = ( this._usedNameOffsets ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,9,new core.DartList.literal<number>()) );
        return this._usedNameOffsets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get usedNames() : core.DartList<number> {
        this._usedNames = ( this._usedNames ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,8,new core.DartList.literal<number>()) );
        return this._usedNames;
    }
}

export namespace _UnitIndexMixin {
    export type Constructors = '_UnitIndexMixin';
    export type Interface = Omit<_UnitIndexMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnitIndex)
export class _UnitIndexMixin implements lib3.UnitIndex.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.definedNameKinds.isNotEmpty) _result.set("definedNameKinds",this.definedNameKinds.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.definedNameOffsets.isNotEmpty) _result.set("definedNameOffsets",this.definedNameOffsets);
        if (this.definedNames.isNotEmpty) _result.set("definedNames",this.definedNames);
        if (this.unit != 0) _result.set("unit",this.unit);
        if (this.usedElementIsQualifiedFlags.isNotEmpty) _result.set("usedElementIsQualifiedFlags",this.usedElementIsQualifiedFlags);
        if (this.usedElementKinds.isNotEmpty) _result.set("usedElementKinds",this.usedElementKinds.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.usedElementLengths.isNotEmpty) _result.set("usedElementLengths",this.usedElementLengths);
        if (this.usedElementOffsets.isNotEmpty) _result.set("usedElementOffsets",this.usedElementOffsets);
        if (this.usedElements.isNotEmpty) _result.set("usedElements",this.usedElements);
        if (this.usedNameIsQualifiedFlags.isNotEmpty) _result.set("usedNameIsQualifiedFlags",this.usedNameIsQualifiedFlags);
        if (this.usedNameKinds.isNotEmpty) _result.set("usedNameKinds",this.usedNameKinds.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.usedNameOffsets.isNotEmpty) _result.set("usedNameOffsets",this.usedNameOffsets);
        if (this.usedNames.isNotEmpty) _result.set("usedNames",this.usedNames);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["definedNameKinds",this.definedNameKinds],
            ["definedNameOffsets",this.definedNameOffsets],
            ["definedNames",this.definedNames],
            ["unit",this.unit],
            ["usedElementIsQualifiedFlags",this.usedElementIsQualifiedFlags],
            ["usedElementKinds",this.usedElementKinds],
            ["usedElementLengths",this.usedElementLengths],
            ["usedElementOffsets",this.usedElementOffsets],
            ["usedElements",this.usedElements],
            ["usedNameIsQualifiedFlags",this.usedNameIsQualifiedFlags],
            ["usedNameKinds",this.usedNameKinds],
            ["usedNameOffsets",this.usedNameOffsets],
            ["usedNames",this.usedNames]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnitIndexMixin() {
    }
}

export namespace UnlinkedClassBuilder {
    export type Constructors = 'UnlinkedClassBuilder';
    export type Interface = Omit<UnlinkedClassBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedClass)
@With(_UnlinkedClassMixin)
export class UnlinkedClassBuilder extends core.DartObject implements lib3.UnlinkedClass.Interface,_UnlinkedClassMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _codeRange : CodeRangeBuilder;

    _documentationComment : UnlinkedDocumentationCommentBuilder;

    _executables : core.DartList<UnlinkedExecutableBuilder>;

    _fields : core.DartList<UnlinkedVariableBuilder>;

    _hasNoSupertype : boolean;

    _interfaces : core.DartList<EntityRefBuilder>;

    _isAbstract : boolean;

    _isMixinApplication : boolean;

    _mixins : core.DartList<EntityRefBuilder>;

    _name : string;

    _nameOffset : number;

    _supertype : EntityRefBuilder;

    _typeParameters : core.DartList<UnlinkedTypeParamBuilder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : UnlinkedDocumentationCommentBuilder {
        return this._documentationComment;
    }
    set documentationComment(value : UnlinkedDocumentationCommentBuilder) {
        this._documentationComment = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get executables() : core.DartList<UnlinkedExecutableBuilder> {
        return this._executables = ( this._executables ) || ( new core.DartList.literal<UnlinkedExecutableBuilder>() );
    }
    set executables(value : core.DartList<UnlinkedExecutableBuilder>) {
        this._executables = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<UnlinkedVariableBuilder> {
        return this._fields = ( this._fields ) || ( new core.DartList.literal<UnlinkedVariableBuilder>() );
    }
    set fields(value : core.DartList<UnlinkedVariableBuilder>) {
        this._fields = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasNoSupertype() : boolean {
        return this._hasNoSupertype = ( this._hasNoSupertype ) || ( false );
    }
    set hasNoSupertype(value : boolean) {
        this._hasNoSupertype = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<EntityRefBuilder> {
        return this._interfaces = ( this._interfaces ) || ( new core.DartList.literal<EntityRefBuilder>() );
    }
    set interfaces(value : core.DartList<EntityRefBuilder>) {
        this._interfaces = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return this._isAbstract = ( this._isAbstract ) || ( false );
    }
    set isAbstract(value : boolean) {
        this._isAbstract = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMixinApplication() : boolean {
        return this._isMixinApplication = ( this._isMixinApplication ) || ( false );
    }
    set isMixinApplication(value : boolean) {
        this._isMixinApplication = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<EntityRefBuilder> {
        return this._mixins = ( this._mixins ) || ( new core.DartList.literal<EntityRefBuilder>() );
    }
    set mixins(value : core.DartList<EntityRefBuilder>) {
        this._mixins = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get supertype() : EntityRefBuilder {
        return this._supertype;
    }
    set supertype(value : EntityRefBuilder) {
        this._supertype = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<UnlinkedTypeParamBuilder> {
        return this._typeParameters = ( this._typeParameters ) || ( new core.DartList.literal<UnlinkedTypeParamBuilder>() );
    }
    set typeParameters(value : core.DartList<UnlinkedTypeParamBuilder>) {
        this._typeParameters = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,executables? : core.DartList<UnlinkedExecutableBuilder>,fields? : core.DartList<UnlinkedVariableBuilder>,hasNoSupertype? : boolean,interfaces? : core.DartList<EntityRefBuilder>,isAbstract? : boolean,isMixinApplication? : boolean,mixins? : core.DartList<EntityRefBuilder>,name? : string,nameOffset? : number,supertype? : EntityRefBuilder,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>}) {
    }
    @defaultConstructor
    UnlinkedClassBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,executables? : core.DartList<UnlinkedExecutableBuilder>,fields? : core.DartList<UnlinkedVariableBuilder>,hasNoSupertype? : boolean,interfaces? : core.DartList<EntityRefBuilder>,isAbstract? : boolean,isMixinApplication? : boolean,mixins? : core.DartList<EntityRefBuilder>,name? : string,nameOffset? : number,supertype? : EntityRefBuilder,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>}) {
        let {annotations,codeRange,documentationComment,executables,fields,hasNoSupertype,interfaces,isAbstract,isMixinApplication,mixins,name,nameOffset,supertype,typeParameters} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._codeRange = codeRange;
        this._documentationComment = documentationComment;
        this._executables = executables;
        this._fields = fields;
        this._hasNoSupertype = hasNoSupertype;
        this._interfaces = interfaces;
        this._isAbstract = isAbstract;
        this._isMixinApplication = isMixinApplication;
        this._mixins = mixins;
        this._name = name;
        this._nameOffset = nameOffset;
        this._supertype = supertype;
        this._typeParameters = typeParameters;
    }
    flushInformative() : void {
        ((_389_)=>(!!_389_)?_389_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        this._codeRange = null;
        this._documentationComment = null;
        ((_390_)=>(!!_390_)?_390_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._executables);
        ((_391_)=>(!!_391_)?_391_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._fields);
        ((_392_)=>(!!_392_)?_392_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._interfaces);
        ((_393_)=>(!!_393_)?_393_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._mixins);
        this._nameOffset = null;
        ((_394_)=>(!!_394_)?_394_.flushInformative():null)(this._supertype);
        ((_395_)=>(!!_395_)?_395_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._typeParameters);
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        if (this._executables == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._executables.length);
            for(let x of this._executables) {
                ((_396_)=>(!!_396_)?_396_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._supertype != null);
        ((_397_)=>(!!_397_)?_397_.collectApiSignature(signature):null)(this._supertype);
        if (this._fields == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._fields.length);
            for(let x of this._fields) {
                ((_398_)=>(!!_398_)?_398_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_399_)=>(!!_399_)?_399_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._interfaces == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._interfaces.length);
            for(let x of this._interfaces) {
                ((_400_)=>(!!_400_)?_400_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._isAbstract == true);
        if (this._typeParameters == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._typeParameters.length);
            for(let x of this._typeParameters) {
                ((_401_)=>(!!_401_)?_401_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._mixins == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._mixins.length);
            for(let x of this._mixins) {
                ((_402_)=>(!!_402_)?_402_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._isMixinApplication == true);
        signature.addBool(this._hasNoSupertype == true);
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_codeRange : any;
        let offset_documentationComment : any;
        let offset_executables : any;
        let offset_fields : any;
        let offset_interfaces : any;
        let offset_mixins : any;
        let offset_name : any;
        let offset_supertype : any;
        let offset_typeParameters : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (this._documentationComment != null) {
            offset_documentationComment = this._documentationComment.finish(fbBuilder);
        }
        if (!(this._executables == null || this._executables.isEmpty)) {
            offset_executables = fbBuilder.writeList(this._executables.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._fields == null || this._fields.isEmpty)) {
            offset_fields = fbBuilder.writeList(this._fields.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._interfaces == null || this._interfaces.isEmpty)) {
            offset_interfaces = fbBuilder.writeList(this._interfaces.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._mixins == null || this._mixins.isEmpty)) {
            offset_mixins = fbBuilder.writeList(this._mixins.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        if (this._supertype != null) {
            offset_supertype = this._supertype.finish(fbBuilder);
        }
        if (!(this._typeParameters == null || this._typeParameters.isEmpty)) {
            offset_typeParameters = fbBuilder.writeList(this._typeParameters.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(5,offset_annotations);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(13,offset_codeRange);
        }
        if (offset_documentationComment != null) {
            fbBuilder.addOffset(6,offset_documentationComment);
        }
        if (offset_executables != null) {
            fbBuilder.addOffset(2,offset_executables);
        }
        if (offset_fields != null) {
            fbBuilder.addOffset(4,offset_fields);
        }
        if (this._hasNoSupertype == true) {
            fbBuilder.addBool(12,true);
        }
        if (offset_interfaces != null) {
            fbBuilder.addOffset(7,offset_interfaces);
        }
        if (this._isAbstract == true) {
            fbBuilder.addBool(8,true);
        }
        if (this._isMixinApplication == true) {
            fbBuilder.addBool(11,true);
        }
        if (offset_mixins != null) {
            fbBuilder.addOffset(10,offset_mixins);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        if (offset_supertype != null) {
            fbBuilder.addOffset(3,offset_supertype);
        }
        if (offset_typeParameters != null) {
            fbBuilder.addOffset(9,offset_typeParameters);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedClassReader {
    export type Constructors = '_UnlinkedClassReader';
    export type Interface = Omit<_UnlinkedClassReader, Constructors>;
}
@DartClass
export class _UnlinkedClassReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedClassReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedClassImpl {
        return new _UnlinkedClassImpl(bc,offset);
    }
}

export namespace _UnlinkedClassImpl {
    export type Constructors = '_UnlinkedClassImpl';
    export type Interface = Omit<_UnlinkedClassImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedClass)
@With(_UnlinkedClassMixin)
export class _UnlinkedClassImpl extends core.DartObject implements lib3.UnlinkedClass.Interface,_UnlinkedClassMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedClassImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _codeRange : lib3.CodeRange;

    _documentationComment : lib3.UnlinkedDocumentationComment;

    _executables : core.DartList<lib3.UnlinkedExecutable>;

    _fields : core.DartList<lib3.UnlinkedVariable>;

    _hasNoSupertype : boolean;

    _interfaces : core.DartList<lib3.EntityRef>;

    _isAbstract : boolean;

    _isMixinApplication : boolean;

    _mixins : core.DartList<lib3.EntityRef>;

    _name : string;

    _nameOffset : number;

    _supertype : lib3.EntityRef;

    _typeParameters : core.DartList<lib3.UnlinkedTypeParam>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,5,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,13,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : lib3.UnlinkedDocumentationComment {
        this._documentationComment = ( this._documentationComment ) || ( new _UnlinkedDocumentationCommentReader().vTableGet(this._bc,this._bcOffset,6,null) );
        return this._documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get executables() : core.DartList<lib3.UnlinkedExecutable> {
        this._executables = ( this._executables ) || ( new bare.createInstance(any,null,new _UnlinkedExecutableReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedExecutable>()) );
        return this._executables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<lib3.UnlinkedVariable> {
        this._fields = ( this._fields ) || ( new bare.createInstance(any,null,new _UnlinkedVariableReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.UnlinkedVariable>()) );
        return this._fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasNoSupertype() : boolean {
        this._hasNoSupertype = ( this._hasNoSupertype ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,12,false) );
        return this._hasNoSupertype;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<lib3.EntityRef> {
        this._interfaces = ( this._interfaces ) || ( new bare.createInstance(any,null,new _EntityRefReader()).vTableGet(this._bc,this._bcOffset,7,new core.DartList.literal<lib3.EntityRef>()) );
        return this._interfaces;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        this._isAbstract = ( this._isAbstract ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,8,false) );
        return this._isAbstract;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMixinApplication() : boolean {
        this._isMixinApplication = ( this._isMixinApplication ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,11,false) );
        return this._isMixinApplication;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<lib3.EntityRef> {
        this._mixins = ( this._mixins ) || ( new bare.createInstance(any,null,new _EntityRefReader()).vTableGet(this._bc,this._bcOffset,10,new core.DartList.literal<lib3.EntityRef>()) );
        return this._mixins;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get supertype() : lib3.EntityRef {
        this._supertype = ( this._supertype ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,3,null) );
        return this._supertype;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<lib3.UnlinkedTypeParam> {
        this._typeParameters = ( this._typeParameters ) || ( new bare.createInstance(any,null,new _UnlinkedTypeParamReader()).vTableGet(this._bc,this._bcOffset,9,new core.DartList.literal<lib3.UnlinkedTypeParam>()) );
        return this._typeParameters;
    }
}

export namespace _UnlinkedClassMixin {
    export type Constructors = '_UnlinkedClassMixin';
    export type Interface = Omit<_UnlinkedClassMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedClass)
export class _UnlinkedClassMixin implements lib3.UnlinkedClass.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.documentationComment != null) _result.set("documentationComment",this.documentationComment.toJson());
        if (this.executables.isNotEmpty) _result.set("executables",this.executables.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.fields.isNotEmpty) _result.set("fields",this.fields.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.hasNoSupertype != false) _result.set("hasNoSupertype",this.hasNoSupertype);
        if (this.interfaces.isNotEmpty) _result.set("interfaces",this.interfaces.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.isAbstract != false) _result.set("isAbstract",this.isAbstract);
        if (this.isMixinApplication != false) _result.set("isMixinApplication",this.isMixinApplication);
        if (this.mixins.isNotEmpty) _result.set("mixins",this.mixins.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        if (this.supertype != null) _result.set("supertype",this.supertype.toJson());
        if (this.typeParameters.isNotEmpty) _result.set("typeParameters",this.typeParameters.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["codeRange",this.codeRange],
            ["documentationComment",this.documentationComment],
            ["executables",this.executables],
            ["fields",this.fields],
            ["hasNoSupertype",this.hasNoSupertype],
            ["interfaces",this.interfaces],
            ["isAbstract",this.isAbstract],
            ["isMixinApplication",this.isMixinApplication],
            ["mixins",this.mixins],
            ["name",this.name],
            ["nameOffset",this.nameOffset],
            ["supertype",this.supertype],
            ["typeParameters",this.typeParameters]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedClassMixin() {
    }
}

export namespace UnlinkedCombinatorBuilder {
    export type Constructors = 'UnlinkedCombinatorBuilder';
    export type Interface = Omit<UnlinkedCombinatorBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedCombinator)
@With(_UnlinkedCombinatorMixin)
export class UnlinkedCombinatorBuilder extends core.DartObject implements lib3.UnlinkedCombinator.Interface,_UnlinkedCombinatorMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _end : number;

    _hides : core.DartList<string>;

    _offset : number;

    _shows : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get end() : number {
        return this._end = ( this._end ) || ( 0 );
    }
    set end(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._end = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hides() : core.DartList<string> {
        return this._hides = ( this._hides ) || ( new core.DartList.literal<string>() );
    }
    set hides(value : core.DartList<string>) {
        this._hides = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this._offset = ( this._offset ) || ( 0 );
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._offset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shows() : core.DartList<string> {
        return this._shows = ( this._shows ) || ( new core.DartList.literal<string>() );
    }
    set shows(value : core.DartList<string>) {
        this._shows = value;
    }
    constructor(_namedArguments? : {end? : number,hides? : core.DartList<string>,offset? : number,shows? : core.DartList<string>}) {
    }
    @defaultConstructor
    UnlinkedCombinatorBuilder(_namedArguments? : {end? : number,hides? : core.DartList<string>,offset? : number,shows? : core.DartList<string>}) {
        let {end,hides,offset,shows} = Object.assign({
        }, _namedArguments );
        this._end = end;
        this._hides = hides;
        this._offset = offset;
        this._shows = shows;
    }
    flushInformative() : void {
        this._end = null;
        this._offset = null;
    }
    collectApiSignature(signature : any) : void {
        if (this._shows == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._shows.length);
            for(let x of this._shows) {
                signature.addString(x);
            }
        }
        if (this._hides == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._hides.length);
            for(let x of this._hides) {
                signature.addString(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_hides : any;
        let offset_shows : any;
        if (!(this._hides == null || this._hides.isEmpty)) {
            offset_hides = fbBuilder.writeList(this._hides.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._shows == null || this._shows.isEmpty)) {
            offset_shows = fbBuilder.writeList(this._shows.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        fbBuilder.startTable();
        if (this._end != null && this._end != 0) {
            fbBuilder.addUint32(3,this._end);
        }
        if (offset_hides != null) {
            fbBuilder.addOffset(1,offset_hides);
        }
        if (this._offset != null && this._offset != 0) {
            fbBuilder.addUint32(2,this._offset);
        }
        if (offset_shows != null) {
            fbBuilder.addOffset(0,offset_shows);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedCombinatorReader {
    export type Constructors = '_UnlinkedCombinatorReader';
    export type Interface = Omit<_UnlinkedCombinatorReader, Constructors>;
}
@DartClass
export class _UnlinkedCombinatorReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedCombinatorReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedCombinatorImpl {
        return new _UnlinkedCombinatorImpl(bc,offset);
    }
}

export namespace _UnlinkedCombinatorImpl {
    export type Constructors = '_UnlinkedCombinatorImpl';
    export type Interface = Omit<_UnlinkedCombinatorImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedCombinator)
@With(_UnlinkedCombinatorMixin)
export class _UnlinkedCombinatorImpl extends core.DartObject implements lib3.UnlinkedCombinator.Interface,_UnlinkedCombinatorMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedCombinatorImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _end : number;

    _hides : core.DartList<string>;

    _offset : number;

    _shows : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get end() : number {
        this._end = ( this._end ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,0) );
        return this._end;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hides() : core.DartList<string> {
        this._hides = ( this._hides ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<string>()) );
        return this._hides;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        this._offset = ( this._offset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shows() : core.DartList<string> {
        this._shows = ( this._shows ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<string>()) );
        return this._shows;
    }
}

export namespace _UnlinkedCombinatorMixin {
    export type Constructors = '_UnlinkedCombinatorMixin';
    export type Interface = Omit<_UnlinkedCombinatorMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedCombinator)
export class _UnlinkedCombinatorMixin implements lib3.UnlinkedCombinator.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.end != 0) _result.set("end",this.end);
        if (this.hides.isNotEmpty) _result.set("hides",this.hides);
        if (this.offset != 0) _result.set("offset",this.offset);
        if (this.shows.isNotEmpty) _result.set("shows",this.shows);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["end",this.end],
            ["hides",this.hides],
            ["offset",this.offset],
            ["shows",this.shows]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedCombinatorMixin() {
    }
}

export namespace UnlinkedConfigurationBuilder {
    export type Constructors = 'UnlinkedConfigurationBuilder';
    export type Interface = Omit<UnlinkedConfigurationBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedConfiguration)
@With(_UnlinkedConfigurationMixin)
export class UnlinkedConfigurationBuilder extends core.DartObject implements lib3.UnlinkedConfiguration.Interface,_UnlinkedConfigurationMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _name : string;

    _uri : string;

    _value : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        return this._uri = ( this._uri ) || ( '' );
    }
    set uri(value : string) {
        this._uri = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : string {
        return this._value = ( this._value ) || ( '' );
    }
    set value(value : string) {
        this._value = value;
    }
    constructor(_namedArguments? : {name? : string,uri? : string,value? : string}) {
    }
    @defaultConstructor
    UnlinkedConfigurationBuilder(_namedArguments? : {name? : string,uri? : string,value? : string}) {
        let {name,uri,value} = Object.assign({
        }, _namedArguments );
        this._name = name;
        this._uri = uri;
        this._value = value;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addString((this._value || ''));
        signature.addString((this._uri || ''));
    }
    finish(fbBuilder : any) : any {
        let offset_name : any;
        let offset_uri : any;
        let offset_value : any;
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        if (this._uri != null) {
            offset_uri = fbBuilder.writeString(this._uri);
        }
        if (this._value != null) {
            offset_value = fbBuilder.writeString(this._value);
        }
        fbBuilder.startTable();
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (offset_uri != null) {
            fbBuilder.addOffset(2,offset_uri);
        }
        if (offset_value != null) {
            fbBuilder.addOffset(1,offset_value);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedConfigurationReader {
    export type Constructors = '_UnlinkedConfigurationReader';
    export type Interface = Omit<_UnlinkedConfigurationReader, Constructors>;
}
@DartClass
export class _UnlinkedConfigurationReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedConfigurationReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedConfigurationImpl {
        return new _UnlinkedConfigurationImpl(bc,offset);
    }
}

export namespace _UnlinkedConfigurationImpl {
    export type Constructors = '_UnlinkedConfigurationImpl';
    export type Interface = Omit<_UnlinkedConfigurationImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedConfiguration)
@With(_UnlinkedConfigurationMixin)
export class _UnlinkedConfigurationImpl extends core.DartObject implements lib3.UnlinkedConfiguration.Interface,_UnlinkedConfigurationMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedConfigurationImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _name : string;

    _uri : string;

    _value : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        this._uri = ( this._uri ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,'') );
        return this._uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : string {
        this._value = ( this._value ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._value;
    }
}

export namespace _UnlinkedConfigurationMixin {
    export type Constructors = '_UnlinkedConfigurationMixin';
    export type Interface = Omit<_UnlinkedConfigurationMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedConfiguration)
export class _UnlinkedConfigurationMixin implements lib3.UnlinkedConfiguration.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.name != '') _result.set("name",this.name);
        if (this.uri != '') _result.set("uri",this.uri);
        if (this.value != '') _result.set("value",this.value);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["name",this.name],
            ["uri",this.uri],
            ["value",this.value]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedConfigurationMixin() {
    }
}

export namespace UnlinkedConstructorInitializerBuilder {
    export type Constructors = 'UnlinkedConstructorInitializerBuilder';
    export type Interface = Omit<UnlinkedConstructorInitializerBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedConstructorInitializer)
@With(_UnlinkedConstructorInitializerMixin)
export class UnlinkedConstructorInitializerBuilder extends core.DartObject implements lib3.UnlinkedConstructorInitializer.Interface,_UnlinkedConstructorInitializerMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _argumentNames : core.DartList<string>;

    _arguments : core.DartList<UnlinkedExprBuilder>;

    _expression : UnlinkedExprBuilder;

    _kind : lib3.UnlinkedConstructorInitializerKind;

    _name : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get argumentNames() : core.DartList<string> {
        return this._argumentNames = ( this._argumentNames ) || ( new core.DartList.literal<string>() );
    }
    set argumentNames(value : core.DartList<string>) {
        this._argumentNames = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get arguments() : core.DartList<UnlinkedExprBuilder> {
        return this._arguments = ( this._arguments ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set arguments(value : core.DartList<UnlinkedExprBuilder>) {
        this._arguments = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : UnlinkedExprBuilder {
        return this._expression;
    }
    set expression(value : UnlinkedExprBuilder) {
        this._expression = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.UnlinkedConstructorInitializerKind {
        return this._kind = ( this._kind ) || ( lib3.UnlinkedConstructorInitializerKind.field );
    }
    set kind(value : lib3.UnlinkedConstructorInitializerKind) {
        this._kind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    constructor(_namedArguments? : {argumentNames? : core.DartList<string>,arguments? : core.DartList<UnlinkedExprBuilder>,expression? : UnlinkedExprBuilder,kind? : lib3.UnlinkedConstructorInitializerKind,name? : string}) {
    }
    @defaultConstructor
    UnlinkedConstructorInitializerBuilder(_namedArguments? : {argumentNames? : core.DartList<string>,arguments? : core.DartList<UnlinkedExprBuilder>,expression? : UnlinkedExprBuilder,kind? : lib3.UnlinkedConstructorInitializerKind,name? : string}) {
        let {argumentNames,arguments,expression,kind,name} = Object.assign({
        }, _namedArguments );
        this._argumentNames = argumentNames;
        this._arguments = arguments;
        this._expression = expression;
        this._kind = kind;
        this._name = name;
    }
    flushInformative() : void {
        ((_403_)=>(!!_403_)?_403_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._arguments);
        ((_404_)=>(!!_404_)?_404_.flushInformative():null)(this._expression);
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addBool(this._expression != null);
        ((_405_)=>(!!_405_)?_405_.collectApiSignature(signature):null)(this._expression);
        signature.addInt(op(Op.EQUALS,this._kind,null) ? 0 : this._kind.index);
        if (this._arguments == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._arguments.length);
            for(let x of this._arguments) {
                ((_406_)=>(!!_406_)?_406_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._argumentNames == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._argumentNames.length);
            for(let x of this._argumentNames) {
                signature.addString(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_argumentNames : any;
        let offset_arguments : any;
        let offset_expression : any;
        let offset_name : any;
        if (!(this._argumentNames == null || this._argumentNames.isEmpty)) {
            offset_argumentNames = fbBuilder.writeList(this._argumentNames.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        if (!(this._arguments == null || this._arguments.isEmpty)) {
            offset_arguments = fbBuilder.writeList(this._arguments.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._expression != null) {
            offset_expression = this._expression.finish(fbBuilder);
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (offset_argumentNames != null) {
            fbBuilder.addOffset(4,offset_argumentNames);
        }
        if (offset_arguments != null) {
            fbBuilder.addOffset(3,offset_arguments);
        }
        if (offset_expression != null) {
            fbBuilder.addOffset(1,offset_expression);
        }
        if (this._kind != null && this._kind != lib3.UnlinkedConstructorInitializerKind.field) {
            fbBuilder.addUint8(2,this._kind.index);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedConstructorInitializerReader {
    export type Constructors = '_UnlinkedConstructorInitializerReader';
    export type Interface = Omit<_UnlinkedConstructorInitializerReader, Constructors>;
}
@DartClass
export class _UnlinkedConstructorInitializerReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedConstructorInitializerReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedConstructorInitializerImpl {
        return new _UnlinkedConstructorInitializerImpl(bc,offset);
    }
}

export namespace _UnlinkedConstructorInitializerImpl {
    export type Constructors = '_UnlinkedConstructorInitializerImpl';
    export type Interface = Omit<_UnlinkedConstructorInitializerImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedConstructorInitializer)
@With(_UnlinkedConstructorInitializerMixin)
export class _UnlinkedConstructorInitializerImpl extends core.DartObject implements lib3.UnlinkedConstructorInitializer.Interface,_UnlinkedConstructorInitializerMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedConstructorInitializerImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _argumentNames : core.DartList<string>;

    _arguments : core.DartList<lib3.UnlinkedExpr>;

    _expression : lib3.UnlinkedExpr;

    _kind : lib3.UnlinkedConstructorInitializerKind;

    _name : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get argumentNames() : core.DartList<string> {
        this._argumentNames = ( this._argumentNames ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<string>()) );
        return this._argumentNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get arguments() : core.DartList<lib3.UnlinkedExpr> {
        this._arguments = ( this._arguments ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._arguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : lib3.UnlinkedExpr {
        this._expression = ( this._expression ) || ( new _UnlinkedExprReader().vTableGet(this._bc,this._bcOffset,1,null) );
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.UnlinkedConstructorInitializerKind {
        this._kind = ( this._kind ) || ( new _UnlinkedConstructorInitializerKindReader().vTableGet(this._bc,this._bcOffset,2,lib3.UnlinkedConstructorInitializerKind.field) );
        return this._kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
}

export namespace _UnlinkedConstructorInitializerMixin {
    export type Constructors = '_UnlinkedConstructorInitializerMixin';
    export type Interface = Omit<_UnlinkedConstructorInitializerMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedConstructorInitializer)
export class _UnlinkedConstructorInitializerMixin implements lib3.UnlinkedConstructorInitializer.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.argumentNames.isNotEmpty) _result.set("argumentNames",this.argumentNames);
        if (this.arguments.isNotEmpty) _result.set("arguments",this.arguments.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.expression != null) _result.set("expression",this.expression.toJson());
        if (this.kind != lib3.UnlinkedConstructorInitializerKind.field) _result.set("kind",new core.DartString(this.kind.toString()).split('.')[1]);
        if (this.name != '') _result.set("name",this.name);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["argumentNames",this.argumentNames],
            ["arguments",this.arguments],
            ["expression",this.expression],
            ["kind",this.kind],
            ["name",this.name]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedConstructorInitializerMixin() {
    }
}

export namespace UnlinkedDocumentationCommentBuilder {
    export type Constructors = 'UnlinkedDocumentationCommentBuilder';
    export type Interface = Omit<UnlinkedDocumentationCommentBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedDocumentationComment)
@With(_UnlinkedDocumentationCommentMixin)
export class UnlinkedDocumentationCommentBuilder extends core.DartObject implements lib3.UnlinkedDocumentationComment.Interface,_UnlinkedDocumentationCommentMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _text : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get text() : string {
        return this._text = ( this._text ) || ( '' );
    }
    set text(value : string) {
        this._text = value;
    }
    constructor(_namedArguments? : {text? : string}) {
    }
    @defaultConstructor
    UnlinkedDocumentationCommentBuilder(_namedArguments? : {text? : string}) {
        let {text} = Object.assign({
        }, _namedArguments );
        this._text = text;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._text || ''));
    }
    finish(fbBuilder : any) : any {
        let offset_text : any;
        if (this._text != null) {
            offset_text = fbBuilder.writeString(this._text);
        }
        fbBuilder.startTable();
        if (offset_text != null) {
            fbBuilder.addOffset(1,offset_text);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedDocumentationCommentReader {
    export type Constructors = '_UnlinkedDocumentationCommentReader';
    export type Interface = Omit<_UnlinkedDocumentationCommentReader, Constructors>;
}
@DartClass
export class _UnlinkedDocumentationCommentReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedDocumentationCommentReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedDocumentationCommentImpl {
        return new _UnlinkedDocumentationCommentImpl(bc,offset);
    }
}

export namespace _UnlinkedDocumentationCommentImpl {
    export type Constructors = '_UnlinkedDocumentationCommentImpl';
    export type Interface = Omit<_UnlinkedDocumentationCommentImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedDocumentationComment)
@With(_UnlinkedDocumentationCommentMixin)
export class _UnlinkedDocumentationCommentImpl extends core.DartObject implements lib3.UnlinkedDocumentationComment.Interface,_UnlinkedDocumentationCommentMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedDocumentationCommentImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _text : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get text() : string {
        this._text = ( this._text ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._text;
    }
}

export namespace _UnlinkedDocumentationCommentMixin {
    export type Constructors = '_UnlinkedDocumentationCommentMixin';
    export type Interface = Omit<_UnlinkedDocumentationCommentMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedDocumentationComment)
export class _UnlinkedDocumentationCommentMixin implements lib3.UnlinkedDocumentationComment.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.text != '') _result.set("text",this.text);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["text",this.text]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedDocumentationCommentMixin() {
    }
}

export namespace UnlinkedEnumBuilder {
    export type Constructors = 'UnlinkedEnumBuilder';
    export type Interface = Omit<UnlinkedEnumBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedEnum)
@With(_UnlinkedEnumMixin)
export class UnlinkedEnumBuilder extends core.DartObject implements lib3.UnlinkedEnum.Interface,_UnlinkedEnumMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _codeRange : CodeRangeBuilder;

    _documentationComment : UnlinkedDocumentationCommentBuilder;

    _name : string;

    _nameOffset : number;

    _values : core.DartList<UnlinkedEnumValueBuilder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : UnlinkedDocumentationCommentBuilder {
        return this._documentationComment;
    }
    set documentationComment(value : UnlinkedDocumentationCommentBuilder) {
        this._documentationComment = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get values() : core.DartList<UnlinkedEnumValueBuilder> {
        return this._values = ( this._values ) || ( new core.DartList.literal<UnlinkedEnumValueBuilder>() );
    }
    set values(value : core.DartList<UnlinkedEnumValueBuilder>) {
        this._values = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,name? : string,nameOffset? : number,values? : core.DartList<UnlinkedEnumValueBuilder>}) {
    }
    @defaultConstructor
    UnlinkedEnumBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,name? : string,nameOffset? : number,values? : core.DartList<UnlinkedEnumValueBuilder>}) {
        let {annotations,codeRange,documentationComment,name,nameOffset,values} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._codeRange = codeRange;
        this._documentationComment = documentationComment;
        this._name = name;
        this._nameOffset = nameOffset;
        this._values = values;
    }
    flushInformative() : void {
        ((_407_)=>(!!_407_)?_407_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        this._codeRange = null;
        this._documentationComment = null;
        this._nameOffset = null;
        ((_408_)=>(!!_408_)?_408_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._values);
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        if (this._values == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._values.length);
            for(let x of this._values) {
                ((_409_)=>(!!_409_)?_409_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_410_)=>(!!_410_)?_410_.collectApiSignature(signature):null)(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_codeRange : any;
        let offset_documentationComment : any;
        let offset_name : any;
        let offset_values : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (this._documentationComment != null) {
            offset_documentationComment = this._documentationComment.finish(fbBuilder);
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        if (!(this._values == null || this._values.isEmpty)) {
            offset_values = fbBuilder.writeList(this._values.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(4,offset_annotations);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(5,offset_codeRange);
        }
        if (offset_documentationComment != null) {
            fbBuilder.addOffset(3,offset_documentationComment);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        if (offset_values != null) {
            fbBuilder.addOffset(2,offset_values);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedEnumReader {
    export type Constructors = '_UnlinkedEnumReader';
    export type Interface = Omit<_UnlinkedEnumReader, Constructors>;
}
@DartClass
export class _UnlinkedEnumReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedEnumReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedEnumImpl {
        return new _UnlinkedEnumImpl(bc,offset);
    }
}

export namespace _UnlinkedEnumImpl {
    export type Constructors = '_UnlinkedEnumImpl';
    export type Interface = Omit<_UnlinkedEnumImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedEnum)
@With(_UnlinkedEnumMixin)
export class _UnlinkedEnumImpl extends core.DartObject implements lib3.UnlinkedEnum.Interface,_UnlinkedEnumMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedEnumImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _codeRange : lib3.CodeRange;

    _documentationComment : lib3.UnlinkedDocumentationComment;

    _name : string;

    _nameOffset : number;

    _values : core.DartList<lib3.UnlinkedEnumValue>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,5,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : lib3.UnlinkedDocumentationComment {
        this._documentationComment = ( this._documentationComment ) || ( new _UnlinkedDocumentationCommentReader().vTableGet(this._bc,this._bcOffset,3,null) );
        return this._documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get values() : core.DartList<lib3.UnlinkedEnumValue> {
        this._values = ( this._values ) || ( new bare.createInstance(any,null,new _UnlinkedEnumValueReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedEnumValue>()) );
        return this._values;
    }
}

export namespace _UnlinkedEnumMixin {
    export type Constructors = '_UnlinkedEnumMixin';
    export type Interface = Omit<_UnlinkedEnumMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedEnum)
export class _UnlinkedEnumMixin implements lib3.UnlinkedEnum.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.documentationComment != null) _result.set("documentationComment",this.documentationComment.toJson());
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        if (this.values.isNotEmpty) _result.set("values",this.values.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["codeRange",this.codeRange],
            ["documentationComment",this.documentationComment],
            ["name",this.name],
            ["nameOffset",this.nameOffset],
            ["values",this.values]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedEnumMixin() {
    }
}

export namespace UnlinkedEnumValueBuilder {
    export type Constructors = 'UnlinkedEnumValueBuilder';
    export type Interface = Omit<UnlinkedEnumValueBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedEnumValue)
@With(_UnlinkedEnumValueMixin)
export class UnlinkedEnumValueBuilder extends core.DartObject implements lib3.UnlinkedEnumValue.Interface,_UnlinkedEnumValueMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _documentationComment : UnlinkedDocumentationCommentBuilder;

    _name : string;

    _nameOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : UnlinkedDocumentationCommentBuilder {
        return this._documentationComment;
    }
    set documentationComment(value : UnlinkedDocumentationCommentBuilder) {
        this._documentationComment = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    constructor(_namedArguments? : {documentationComment? : UnlinkedDocumentationCommentBuilder,name? : string,nameOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedEnumValueBuilder(_namedArguments? : {documentationComment? : UnlinkedDocumentationCommentBuilder,name? : string,nameOffset? : number}) {
        let {documentationComment,name,nameOffset} = Object.assign({
        }, _namedArguments );
        this._documentationComment = documentationComment;
        this._name = name;
        this._nameOffset = nameOffset;
    }
    flushInformative() : void {
        this._documentationComment = null;
        this._nameOffset = null;
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
    }
    finish(fbBuilder : any) : any {
        let offset_documentationComment : any;
        let offset_name : any;
        if (this._documentationComment != null) {
            offset_documentationComment = this._documentationComment.finish(fbBuilder);
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (offset_documentationComment != null) {
            fbBuilder.addOffset(2,offset_documentationComment);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedEnumValueReader {
    export type Constructors = '_UnlinkedEnumValueReader';
    export type Interface = Omit<_UnlinkedEnumValueReader, Constructors>;
}
@DartClass
export class _UnlinkedEnumValueReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedEnumValueReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedEnumValueImpl {
        return new _UnlinkedEnumValueImpl(bc,offset);
    }
}

export namespace _UnlinkedEnumValueImpl {
    export type Constructors = '_UnlinkedEnumValueImpl';
    export type Interface = Omit<_UnlinkedEnumValueImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedEnumValue)
@With(_UnlinkedEnumValueMixin)
export class _UnlinkedEnumValueImpl extends core.DartObject implements lib3.UnlinkedEnumValue.Interface,_UnlinkedEnumValueMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedEnumValueImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _documentationComment : lib3.UnlinkedDocumentationComment;

    _name : string;

    _nameOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : lib3.UnlinkedDocumentationComment {
        this._documentationComment = ( this._documentationComment ) || ( new _UnlinkedDocumentationCommentReader().vTableGet(this._bc,this._bcOffset,2,null) );
        return this._documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
}

export namespace _UnlinkedEnumValueMixin {
    export type Constructors = '_UnlinkedEnumValueMixin';
    export type Interface = Omit<_UnlinkedEnumValueMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedEnumValue)
export class _UnlinkedEnumValueMixin implements lib3.UnlinkedEnumValue.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.documentationComment != null) _result.set("documentationComment",this.documentationComment.toJson());
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["documentationComment",this.documentationComment],
            ["name",this.name],
            ["nameOffset",this.nameOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedEnumValueMixin() {
    }
}

export namespace UnlinkedExecutableBuilder {
    export type Constructors = 'UnlinkedExecutableBuilder';
    export type Interface = Omit<UnlinkedExecutableBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExecutable)
@With(_UnlinkedExecutableMixin)
export class UnlinkedExecutableBuilder extends core.DartObject implements lib3.UnlinkedExecutable.Interface,_UnlinkedExecutableMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _bodyExpr : UnlinkedExprBuilder;

    _codeRange : CodeRangeBuilder;

    _constantInitializers : core.DartList<UnlinkedConstructorInitializerBuilder>;

    _constCycleSlot : number;

    _documentationComment : UnlinkedDocumentationCommentBuilder;

    _inferredReturnTypeSlot : number;

    _isAbstract : boolean;

    _isAsynchronous : boolean;

    _isConst : boolean;

    _isExternal : boolean;

    _isFactory : boolean;

    _isGenerator : boolean;

    _isRedirectedConstructor : boolean;

    _isStatic : boolean;

    _kind : lib3.UnlinkedExecutableKind;

    _localFunctions : core.DartList<UnlinkedExecutableBuilder>;

    _localLabels : core.DartList<UnlinkedLabelBuilder>;

    _localVariables : core.DartList<UnlinkedVariableBuilder>;

    _name : string;

    _nameEnd : number;

    _nameOffset : number;

    _parameters : core.DartList<UnlinkedParamBuilder>;

    _periodOffset : number;

    _redirectedConstructor : EntityRefBuilder;

    _redirectedConstructorName : string;

    _returnType : EntityRefBuilder;

    _typeParameters : core.DartList<UnlinkedTypeParamBuilder>;

    _visibleLength : number;

    _visibleOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bodyExpr() : UnlinkedExprBuilder {
        return this._bodyExpr;
    }
    set bodyExpr(value : UnlinkedExprBuilder) {
        this._bodyExpr = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constantInitializers() : core.DartList<UnlinkedConstructorInitializerBuilder> {
        return this._constantInitializers = ( this._constantInitializers ) || ( new core.DartList.literal<UnlinkedConstructorInitializerBuilder>() );
    }
    set constantInitializers(value : core.DartList<UnlinkedConstructorInitializerBuilder>) {
        this._constantInitializers = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constCycleSlot() : number {
        return this._constCycleSlot = ( this._constCycleSlot ) || ( 0 );
    }
    set constCycleSlot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._constCycleSlot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : UnlinkedDocumentationCommentBuilder {
        return this._documentationComment;
    }
    set documentationComment(value : UnlinkedDocumentationCommentBuilder) {
        this._documentationComment = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inferredReturnTypeSlot() : number {
        return this._inferredReturnTypeSlot = ( this._inferredReturnTypeSlot ) || ( 0 );
    }
    set inferredReturnTypeSlot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._inferredReturnTypeSlot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return this._isAbstract = ( this._isAbstract ) || ( false );
    }
    set isAbstract(value : boolean) {
        this._isAbstract = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        return this._isAsynchronous = ( this._isAsynchronous ) || ( false );
    }
    set isAsynchronous(value : boolean) {
        this._isAsynchronous = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this._isConst = ( this._isConst ) || ( false );
    }
    set isConst(value : boolean) {
        this._isConst = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExternal() : boolean {
        return this._isExternal = ( this._isExternal ) || ( false );
    }
    set isExternal(value : boolean) {
        this._isExternal = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        return this._isFactory = ( this._isFactory ) || ( false );
    }
    set isFactory(value : boolean) {
        this._isFactory = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGenerator() : boolean {
        return this._isGenerator = ( this._isGenerator ) || ( false );
    }
    set isGenerator(value : boolean) {
        this._isGenerator = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRedirectedConstructor() : boolean {
        return this._isRedirectedConstructor = ( this._isRedirectedConstructor ) || ( false );
    }
    set isRedirectedConstructor(value : boolean) {
        this._isRedirectedConstructor = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this._isStatic = ( this._isStatic ) || ( false );
    }
    set isStatic(value : boolean) {
        this._isStatic = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.UnlinkedExecutableKind {
        return this._kind = ( this._kind ) || ( lib3.UnlinkedExecutableKind.functionOrMethod );
    }
    set kind(value : lib3.UnlinkedExecutableKind) {
        this._kind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localFunctions() : core.DartList<UnlinkedExecutableBuilder> {
        return this._localFunctions = ( this._localFunctions ) || ( new core.DartList.literal<UnlinkedExecutableBuilder>() );
    }
    set localFunctions(value : core.DartList<UnlinkedExecutableBuilder>) {
        this._localFunctions = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localLabels() : core.DartList<UnlinkedLabelBuilder> {
        return this._localLabels = ( this._localLabels ) || ( new core.DartList.literal<UnlinkedLabelBuilder>() );
    }
    set localLabels(value : core.DartList<UnlinkedLabelBuilder>) {
        this._localLabels = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localVariables() : core.DartList<UnlinkedVariableBuilder> {
        return this._localVariables = ( this._localVariables ) || ( new core.DartList.literal<UnlinkedVariableBuilder>() );
    }
    set localVariables(value : core.DartList<UnlinkedVariableBuilder>) {
        this._localVariables = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameEnd() : number {
        return this._nameEnd = ( this._nameEnd ) || ( 0 );
    }
    set nameEnd(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameEnd = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<UnlinkedParamBuilder> {
        return this._parameters = ( this._parameters ) || ( new core.DartList.literal<UnlinkedParamBuilder>() );
    }
    set parameters(value : core.DartList<UnlinkedParamBuilder>) {
        this._parameters = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get periodOffset() : number {
        return this._periodOffset = ( this._periodOffset ) || ( 0 );
    }
    set periodOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._periodOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructor() : EntityRefBuilder {
        return this._redirectedConstructor;
    }
    set redirectedConstructor(value : EntityRefBuilder) {
        this._redirectedConstructor = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructorName() : string {
        return this._redirectedConstructorName = ( this._redirectedConstructorName ) || ( '' );
    }
    set redirectedConstructorName(value : string) {
        this._redirectedConstructorName = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : EntityRefBuilder {
        return this._returnType;
    }
    set returnType(value : EntityRefBuilder) {
        this._returnType = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<UnlinkedTypeParamBuilder> {
        return this._typeParameters = ( this._typeParameters ) || ( new core.DartList.literal<UnlinkedTypeParamBuilder>() );
    }
    set typeParameters(value : core.DartList<UnlinkedTypeParamBuilder>) {
        this._typeParameters = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleLength() : number {
        return this._visibleLength = ( this._visibleLength ) || ( 0 );
    }
    set visibleLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._visibleLength = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleOffset() : number {
        return this._visibleOffset = ( this._visibleOffset ) || ( 0 );
    }
    set visibleOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._visibleOffset = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,bodyExpr? : UnlinkedExprBuilder,codeRange? : CodeRangeBuilder,constantInitializers? : core.DartList<UnlinkedConstructorInitializerBuilder>,constCycleSlot? : number,documentationComment? : UnlinkedDocumentationCommentBuilder,inferredReturnTypeSlot? : number,isAbstract? : boolean,isAsynchronous? : boolean,isConst? : boolean,isExternal? : boolean,isFactory? : boolean,isGenerator? : boolean,isRedirectedConstructor? : boolean,isStatic? : boolean,kind? : lib3.UnlinkedExecutableKind,localFunctions? : core.DartList<UnlinkedExecutableBuilder>,localLabels? : core.DartList<UnlinkedLabelBuilder>,localVariables? : core.DartList<UnlinkedVariableBuilder>,name? : string,nameEnd? : number,nameOffset? : number,parameters? : core.DartList<UnlinkedParamBuilder>,periodOffset? : number,redirectedConstructor? : EntityRefBuilder,redirectedConstructorName? : string,returnType? : EntityRefBuilder,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>,visibleLength? : number,visibleOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedExecutableBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,bodyExpr? : UnlinkedExprBuilder,codeRange? : CodeRangeBuilder,constantInitializers? : core.DartList<UnlinkedConstructorInitializerBuilder>,constCycleSlot? : number,documentationComment? : UnlinkedDocumentationCommentBuilder,inferredReturnTypeSlot? : number,isAbstract? : boolean,isAsynchronous? : boolean,isConst? : boolean,isExternal? : boolean,isFactory? : boolean,isGenerator? : boolean,isRedirectedConstructor? : boolean,isStatic? : boolean,kind? : lib3.UnlinkedExecutableKind,localFunctions? : core.DartList<UnlinkedExecutableBuilder>,localLabels? : core.DartList<UnlinkedLabelBuilder>,localVariables? : core.DartList<UnlinkedVariableBuilder>,name? : string,nameEnd? : number,nameOffset? : number,parameters? : core.DartList<UnlinkedParamBuilder>,periodOffset? : number,redirectedConstructor? : EntityRefBuilder,redirectedConstructorName? : string,returnType? : EntityRefBuilder,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>,visibleLength? : number,visibleOffset? : number}) {
        let {annotations,bodyExpr,codeRange,constantInitializers,constCycleSlot,documentationComment,inferredReturnTypeSlot,isAbstract,isAsynchronous,isConst,isExternal,isFactory,isGenerator,isRedirectedConstructor,isStatic,kind,localFunctions,localLabels,localVariables,name,nameEnd,nameOffset,parameters,periodOffset,redirectedConstructor,redirectedConstructorName,returnType,typeParameters,visibleLength,visibleOffset} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._bodyExpr = bodyExpr;
        this._codeRange = codeRange;
        this._constantInitializers = constantInitializers;
        this._constCycleSlot = constCycleSlot;
        this._documentationComment = documentationComment;
        this._inferredReturnTypeSlot = inferredReturnTypeSlot;
        this._isAbstract = isAbstract;
        this._isAsynchronous = isAsynchronous;
        this._isConst = isConst;
        this._isExternal = isExternal;
        this._isFactory = isFactory;
        this._isGenerator = isGenerator;
        this._isRedirectedConstructor = isRedirectedConstructor;
        this._isStatic = isStatic;
        this._kind = kind;
        this._localFunctions = localFunctions;
        this._localLabels = localLabels;
        this._localVariables = localVariables;
        this._name = name;
        this._nameEnd = nameEnd;
        this._nameOffset = nameOffset;
        this._parameters = parameters;
        this._periodOffset = periodOffset;
        this._redirectedConstructor = redirectedConstructor;
        this._redirectedConstructorName = redirectedConstructorName;
        this._returnType = returnType;
        this._typeParameters = typeParameters;
        this._visibleLength = visibleLength;
        this._visibleOffset = visibleOffset;
    }
    flushInformative() : void {
        ((_411_)=>(!!_411_)?_411_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        ((_412_)=>(!!_412_)?_412_.flushInformative():null)(this._bodyExpr);
        this._codeRange = null;
        ((_413_)=>(!!_413_)?_413_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._constantInitializers);
        this._documentationComment = null;
        this._isAsynchronous = null;
        this._isGenerator = null;
        ((_414_)=>(!!_414_)?_414_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._localFunctions);
        this._localLabels = null;
        this._localVariables = null;
        this._nameEnd = null;
        this._nameOffset = null;
        ((_415_)=>(!!_415_)?_415_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._parameters);
        this._periodOffset = null;
        ((_416_)=>(!!_416_)?_416_.flushInformative():null)(this._redirectedConstructor);
        ((_417_)=>(!!_417_)?_417_.flushInformative():null)(this._returnType);
        ((_418_)=>(!!_418_)?_418_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._typeParameters);
        this._visibleLength = null;
        this._visibleOffset = null;
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        if (this._parameters == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._parameters.length);
            for(let x of this._parameters) {
                ((_419_)=>(!!_419_)?_419_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._returnType != null);
        ((_420_)=>(!!_420_)?_420_.collectApiSignature(signature):null)(this._returnType);
        signature.addInt(op(Op.EQUALS,this._kind,null) ? 0 : this._kind.index);
        signature.addInt((this._inferredReturnTypeSlot || 0));
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_421_)=>(!!_421_)?_421_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._isFactory == true);
        signature.addBool(this._isStatic == true);
        signature.addBool(this._isAbstract == true);
        signature.addBool(this._isExternal == true);
        signature.addBool(this._isConst == true);
        signature.addBool(this._isRedirectedConstructor == true);
        if (this._constantInitializers == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._constantInitializers.length);
            for(let x of this._constantInitializers) {
                ((_422_)=>(!!_422_)?_422_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._redirectedConstructor != null);
        ((_423_)=>(!!_423_)?_423_.collectApiSignature(signature):null)(this._redirectedConstructor);
        if (this._typeParameters == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._typeParameters.length);
            for(let x of this._typeParameters) {
                ((_424_)=>(!!_424_)?_424_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addString((this._redirectedConstructorName || ''));
        if (this._localFunctions == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._localFunctions.length);
            for(let x of this._localFunctions) {
                ((_425_)=>(!!_425_)?_425_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addInt((this._constCycleSlot || 0));
        signature.addBool(this._bodyExpr != null);
        ((_426_)=>(!!_426_)?_426_.collectApiSignature(signature):null)(this._bodyExpr);
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_bodyExpr : any;
        let offset_codeRange : any;
        let offset_constantInitializers : any;
        let offset_documentationComment : any;
        let offset_localFunctions : any;
        let offset_localLabels : any;
        let offset_localVariables : any;
        let offset_name : any;
        let offset_parameters : any;
        let offset_redirectedConstructor : any;
        let offset_redirectedConstructorName : any;
        let offset_returnType : any;
        let offset_typeParameters : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._bodyExpr != null) {
            offset_bodyExpr = this._bodyExpr.finish(fbBuilder);
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (!(this._constantInitializers == null || this._constantInitializers.isEmpty)) {
            offset_constantInitializers = fbBuilder.writeList(this._constantInitializers.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._documentationComment != null) {
            offset_documentationComment = this._documentationComment.finish(fbBuilder);
        }
        if (!(this._localFunctions == null || this._localFunctions.isEmpty)) {
            offset_localFunctions = fbBuilder.writeList(this._localFunctions.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._localLabels == null || this._localLabels.isEmpty)) {
            offset_localLabels = fbBuilder.writeList(this._localLabels.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._localVariables == null || this._localVariables.isEmpty)) {
            offset_localVariables = fbBuilder.writeList(this._localVariables.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        if (!(this._parameters == null || this._parameters.isEmpty)) {
            offset_parameters = fbBuilder.writeList(this._parameters.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._redirectedConstructor != null) {
            offset_redirectedConstructor = this._redirectedConstructor.finish(fbBuilder);
        }
        if (this._redirectedConstructorName != null) {
            offset_redirectedConstructorName = fbBuilder.writeString(this._redirectedConstructorName);
        }
        if (this._returnType != null) {
            offset_returnType = this._returnType.finish(fbBuilder);
        }
        if (!(this._typeParameters == null || this._typeParameters.isEmpty)) {
            offset_typeParameters = fbBuilder.writeList(this._typeParameters.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(6,offset_annotations);
        }
        if (offset_bodyExpr != null) {
            fbBuilder.addOffset(29,offset_bodyExpr);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(26,offset_codeRange);
        }
        if (offset_constantInitializers != null) {
            fbBuilder.addOffset(14,offset_constantInitializers);
        }
        if (this._constCycleSlot != null && this._constCycleSlot != 0) {
            fbBuilder.addUint32(25,this._constCycleSlot);
        }
        if (offset_documentationComment != null) {
            fbBuilder.addOffset(7,offset_documentationComment);
        }
        if (this._inferredReturnTypeSlot != null && this._inferredReturnTypeSlot != 0) {
            fbBuilder.addUint32(5,this._inferredReturnTypeSlot);
        }
        if (this._isAbstract == true) {
            fbBuilder.addBool(10,true);
        }
        if (this._isAsynchronous == true) {
            fbBuilder.addBool(27,true);
        }
        if (this._isConst == true) {
            fbBuilder.addBool(12,true);
        }
        if (this._isExternal == true) {
            fbBuilder.addBool(11,true);
        }
        if (this._isFactory == true) {
            fbBuilder.addBool(8,true);
        }
        if (this._isGenerator == true) {
            fbBuilder.addBool(28,true);
        }
        if (this._isRedirectedConstructor == true) {
            fbBuilder.addBool(13,true);
        }
        if (this._isStatic == true) {
            fbBuilder.addBool(9,true);
        }
        if (this._kind != null && this._kind != lib3.UnlinkedExecutableKind.functionOrMethod) {
            fbBuilder.addUint8(4,this._kind.index);
        }
        if (offset_localFunctions != null) {
            fbBuilder.addOffset(18,offset_localFunctions);
        }
        if (offset_localLabels != null) {
            fbBuilder.addOffset(22,offset_localLabels);
        }
        if (offset_localVariables != null) {
            fbBuilder.addOffset(19,offset_localVariables);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(1,offset_name);
        }
        if (this._nameEnd != null && this._nameEnd != 0) {
            fbBuilder.addUint32(23,this._nameEnd);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(0,this._nameOffset);
        }
        if (offset_parameters != null) {
            fbBuilder.addOffset(2,offset_parameters);
        }
        if (this._periodOffset != null && this._periodOffset != 0) {
            fbBuilder.addUint32(24,this._periodOffset);
        }
        if (offset_redirectedConstructor != null) {
            fbBuilder.addOffset(15,offset_redirectedConstructor);
        }
        if (offset_redirectedConstructorName != null) {
            fbBuilder.addOffset(17,offset_redirectedConstructorName);
        }
        if (offset_returnType != null) {
            fbBuilder.addOffset(3,offset_returnType);
        }
        if (offset_typeParameters != null) {
            fbBuilder.addOffset(16,offset_typeParameters);
        }
        if (this._visibleLength != null && this._visibleLength != 0) {
            fbBuilder.addUint32(20,this._visibleLength);
        }
        if (this._visibleOffset != null && this._visibleOffset != 0) {
            fbBuilder.addUint32(21,this._visibleOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedVariableMixin {
    export type Constructors = '_UnlinkedVariableMixin';
    export type Interface = Omit<_UnlinkedVariableMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedVariable)
export class _UnlinkedVariableMixin implements lib3.UnlinkedVariable.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.documentationComment != null) _result.set("documentationComment",this.documentationComment.toJson());
        if (this.inferredTypeSlot != 0) _result.set("inferredTypeSlot",this.inferredTypeSlot);
        if (this.inheritsCovariantSlot != 0) _result.set("inheritsCovariantSlot",this.inheritsCovariantSlot);
        if (this.initializer != null) _result.set("initializer",this.initializer.toJson());
        if (this.isConst != false) _result.set("isConst",this.isConst);
        if (this.isCovariant != false) _result.set("isCovariant",this.isCovariant);
        if (this.isFinal != false) _result.set("isFinal",this.isFinal);
        if (this.isStatic != false) _result.set("isStatic",this.isStatic);
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        if (this.propagatedTypeSlot != 0) _result.set("propagatedTypeSlot",this.propagatedTypeSlot);
        if (this.type != null) _result.set("type",this.type.toJson());
        if (this.visibleLength != 0) _result.set("visibleLength",this.visibleLength);
        if (this.visibleOffset != 0) _result.set("visibleOffset",this.visibleOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["codeRange",this.codeRange],
            ["documentationComment",this.documentationComment],
            ["inferredTypeSlot",this.inferredTypeSlot],
            ["inheritsCovariantSlot",this.inheritsCovariantSlot],
            ["initializer",this.initializer],
            ["isConst",this.isConst],
            ["isCovariant",this.isCovariant],
            ["isFinal",this.isFinal],
            ["isStatic",this.isStatic],
            ["name",this.name],
            ["nameOffset",this.nameOffset],
            ["propagatedTypeSlot",this.propagatedTypeSlot],
            ["type",this.type],
            ["visibleLength",this.visibleLength],
            ["visibleOffset",this.visibleOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedVariableMixin() {
    }
}

export namespace _UnlinkedExecutableImpl {
    export type Constructors = '_UnlinkedExecutableImpl';
    export type Interface = Omit<_UnlinkedExecutableImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExecutable)
@With(_UnlinkedExecutableMixin)
export class _UnlinkedExecutableImpl extends core.DartObject implements lib3.UnlinkedExecutable.Interface,_UnlinkedExecutableMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedExecutableImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _bodyExpr : lib3.UnlinkedExpr;

    _codeRange : lib3.CodeRange;

    _constantInitializers : core.DartList<lib3.UnlinkedConstructorInitializer>;

    _constCycleSlot : number;

    _documentationComment : lib3.UnlinkedDocumentationComment;

    _inferredReturnTypeSlot : number;

    _isAbstract : boolean;

    _isAsynchronous : boolean;

    _isConst : boolean;

    _isExternal : boolean;

    _isFactory : boolean;

    _isGenerator : boolean;

    _isRedirectedConstructor : boolean;

    _isStatic : boolean;

    _kind : lib3.UnlinkedExecutableKind;

    _localFunctions : core.DartList<lib3.UnlinkedExecutable>;

    _localLabels : core.DartList<lib3.UnlinkedLabel>;

    _localVariables : core.DartList<lib3.UnlinkedVariable>;

    _name : string;

    _nameEnd : number;

    _nameOffset : number;

    _parameters : core.DartList<lib3.UnlinkedParam>;

    _periodOffset : number;

    _redirectedConstructor : lib3.EntityRef;

    _redirectedConstructorName : string;

    _returnType : lib3.EntityRef;

    _typeParameters : core.DartList<lib3.UnlinkedTypeParam>;

    _visibleLength : number;

    _visibleOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,6,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bodyExpr() : lib3.UnlinkedExpr {
        this._bodyExpr = ( this._bodyExpr ) || ( new _UnlinkedExprReader().vTableGet(this._bc,this._bcOffset,29,null) );
        return this._bodyExpr;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,26,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constantInitializers() : core.DartList<lib3.UnlinkedConstructorInitializer> {
        this._constantInitializers = ( this._constantInitializers ) || ( new bare.createInstance(any,null,new _UnlinkedConstructorInitializerReader()).vTableGet(this._bc,this._bcOffset,14,new core.DartList.literal<lib3.UnlinkedConstructorInitializer>()) );
        return this._constantInitializers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constCycleSlot() : number {
        this._constCycleSlot = ( this._constCycleSlot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,25,0) );
        return this._constCycleSlot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : lib3.UnlinkedDocumentationComment {
        this._documentationComment = ( this._documentationComment ) || ( new _UnlinkedDocumentationCommentReader().vTableGet(this._bc,this._bcOffset,7,null) );
        return this._documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inferredReturnTypeSlot() : number {
        this._inferredReturnTypeSlot = ( this._inferredReturnTypeSlot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,0) );
        return this._inferredReturnTypeSlot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        this._isAbstract = ( this._isAbstract ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,10,false) );
        return this._isAbstract;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        this._isAsynchronous = ( this._isAsynchronous ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,27,false) );
        return this._isAsynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        this._isConst = ( this._isConst ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,12,false) );
        return this._isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExternal() : boolean {
        this._isExternal = ( this._isExternal ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,11,false) );
        return this._isExternal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        this._isFactory = ( this._isFactory ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,8,false) );
        return this._isFactory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGenerator() : boolean {
        this._isGenerator = ( this._isGenerator ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,28,false) );
        return this._isGenerator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRedirectedConstructor() : boolean {
        this._isRedirectedConstructor = ( this._isRedirectedConstructor ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,13,false) );
        return this._isRedirectedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        this._isStatic = ( this._isStatic ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,9,false) );
        return this._isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.UnlinkedExecutableKind {
        this._kind = ( this._kind ) || ( new _UnlinkedExecutableKindReader().vTableGet(this._bc,this._bcOffset,4,lib3.UnlinkedExecutableKind.functionOrMethod) );
        return this._kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localFunctions() : core.DartList<lib3.UnlinkedExecutable> {
        this._localFunctions = ( this._localFunctions ) || ( new bare.createInstance(any,null,new _UnlinkedExecutableReader()).vTableGet(this._bc,this._bcOffset,18,new core.DartList.literal<lib3.UnlinkedExecutable>()) );
        return this._localFunctions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localLabels() : core.DartList<lib3.UnlinkedLabel> {
        this._localLabels = ( this._localLabels ) || ( new bare.createInstance(any,null,new _UnlinkedLabelReader()).vTableGet(this._bc,this._bcOffset,22,new core.DartList.literal<lib3.UnlinkedLabel>()) );
        return this._localLabels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localVariables() : core.DartList<lib3.UnlinkedVariable> {
        this._localVariables = ( this._localVariables ) || ( new bare.createInstance(any,null,new _UnlinkedVariableReader()).vTableGet(this._bc,this._bcOffset,19,new core.DartList.literal<lib3.UnlinkedVariable>()) );
        return this._localVariables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameEnd() : number {
        this._nameEnd = ( this._nameEnd ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,23,0) );
        return this._nameEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<lib3.UnlinkedParam> {
        this._parameters = ( this._parameters ) || ( new bare.createInstance(any,null,new _UnlinkedParamReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedParam>()) );
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get periodOffset() : number {
        this._periodOffset = ( this._periodOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,24,0) );
        return this._periodOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructor() : lib3.EntityRef {
        this._redirectedConstructor = ( this._redirectedConstructor ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,15,null) );
        return this._redirectedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructorName() : string {
        this._redirectedConstructorName = ( this._redirectedConstructorName ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,17,'') );
        return this._redirectedConstructorName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : lib3.EntityRef {
        this._returnType = ( this._returnType ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,3,null) );
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<lib3.UnlinkedTypeParam> {
        this._typeParameters = ( this._typeParameters ) || ( new bare.createInstance(any,null,new _UnlinkedTypeParamReader()).vTableGet(this._bc,this._bcOffset,16,new core.DartList.literal<lib3.UnlinkedTypeParam>()) );
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleLength() : number {
        this._visibleLength = ( this._visibleLength ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,20,0) );
        return this._visibleLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleOffset() : number {
        this._visibleOffset = ( this._visibleOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,21,0) );
        return this._visibleOffset;
    }
}

export namespace _UnlinkedExecutableMixin {
    export type Constructors = '_UnlinkedExecutableMixin';
    export type Interface = Omit<_UnlinkedExecutableMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExecutable)
export class _UnlinkedExecutableMixin implements lib3.UnlinkedExecutable.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.bodyExpr != null) _result.set("bodyExpr",this.bodyExpr.toJson());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.constantInitializers.isNotEmpty) _result.set("constantInitializers",this.constantInitializers.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.constCycleSlot != 0) _result.set("constCycleSlot",this.constCycleSlot);
        if (this.documentationComment != null) _result.set("documentationComment",this.documentationComment.toJson());
        if (this.inferredReturnTypeSlot != 0) _result.set("inferredReturnTypeSlot",this.inferredReturnTypeSlot);
        if (this.isAbstract != false) _result.set("isAbstract",this.isAbstract);
        if (this.isAsynchronous != false) _result.set("isAsynchronous",this.isAsynchronous);
        if (this.isConst != false) _result.set("isConst",this.isConst);
        if (this.isExternal != false) _result.set("isExternal",this.isExternal);
        if (this.isFactory != false) _result.set("isFactory",this.isFactory);
        if (this.isGenerator != false) _result.set("isGenerator",this.isGenerator);
        if (this.isRedirectedConstructor != false) _result.set("isRedirectedConstructor",this.isRedirectedConstructor);
        if (this.isStatic != false) _result.set("isStatic",this.isStatic);
        if (this.kind != lib3.UnlinkedExecutableKind.functionOrMethod) _result.set("kind",new core.DartString(this.kind.toString()).split('.')[1]);
        if (this.localFunctions.isNotEmpty) _result.set("localFunctions",this.localFunctions.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.localLabels.isNotEmpty) _result.set("localLabels",this.localLabels.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.localVariables.isNotEmpty) _result.set("localVariables",this.localVariables.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.name != '') _result.set("name",this.name);
        if (this.nameEnd != 0) _result.set("nameEnd",this.nameEnd);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        if (this.parameters.isNotEmpty) _result.set("parameters",this.parameters.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.periodOffset != 0) _result.set("periodOffset",this.periodOffset);
        if (this.redirectedConstructor != null) _result.set("redirectedConstructor",this.redirectedConstructor.toJson());
        if (this.redirectedConstructorName != '') _result.set("redirectedConstructorName",this.redirectedConstructorName);
        if (this.returnType != null) _result.set("returnType",this.returnType.toJson());
        if (this.typeParameters.isNotEmpty) _result.set("typeParameters",this.typeParameters.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.visibleLength != 0) _result.set("visibleLength",this.visibleLength);
        if (this.visibleOffset != 0) _result.set("visibleOffset",this.visibleOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["bodyExpr",this.bodyExpr],
            ["codeRange",this.codeRange],
            ["constantInitializers",this.constantInitializers],
            ["constCycleSlot",this.constCycleSlot],
            ["documentationComment",this.documentationComment],
            ["inferredReturnTypeSlot",this.inferredReturnTypeSlot],
            ["isAbstract",this.isAbstract],
            ["isAsynchronous",this.isAsynchronous],
            ["isConst",this.isConst],
            ["isExternal",this.isExternal],
            ["isFactory",this.isFactory],
            ["isGenerator",this.isGenerator],
            ["isRedirectedConstructor",this.isRedirectedConstructor],
            ["isStatic",this.isStatic],
            ["kind",this.kind],
            ["localFunctions",this.localFunctions],
            ["localLabels",this.localLabels],
            ["localVariables",this.localVariables],
            ["name",this.name],
            ["nameEnd",this.nameEnd],
            ["nameOffset",this.nameOffset],
            ["parameters",this.parameters],
            ["periodOffset",this.periodOffset],
            ["redirectedConstructor",this.redirectedConstructor],
            ["redirectedConstructorName",this.redirectedConstructorName],
            ["returnType",this.returnType],
            ["typeParameters",this.typeParameters],
            ["visibleLength",this.visibleLength],
            ["visibleOffset",this.visibleOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExecutableMixin() {
    }
}

export namespace UnlinkedExportNonPublicBuilder {
    export type Constructors = 'UnlinkedExportNonPublicBuilder';
    export type Interface = Omit<UnlinkedExportNonPublicBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExportNonPublic)
@With(_UnlinkedExportNonPublicMixin)
export class UnlinkedExportNonPublicBuilder extends core.DartObject implements lib3.UnlinkedExportNonPublic.Interface,_UnlinkedExportNonPublicMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _offset : number;

    _uriEnd : number;

    _uriOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this._offset = ( this._offset ) || ( 0 );
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._offset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        return this._uriEnd = ( this._uriEnd ) || ( 0 );
    }
    set uriEnd(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._uriEnd = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        return this._uriOffset = ( this._uriOffset ) || ( 0 );
    }
    set uriOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._uriOffset = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,offset? : number,uriEnd? : number,uriOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedExportNonPublicBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,offset? : number,uriEnd? : number,uriOffset? : number}) {
        let {annotations,offset,uriEnd,uriOffset} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._offset = offset;
        this._uriEnd = uriEnd;
        this._uriOffset = uriOffset;
    }
    flushInformative() : void {
        ((_427_)=>(!!_427_)?_427_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        this._offset = null;
        this._uriEnd = null;
        this._uriOffset = null;
    }
    collectApiSignature(signature : any) : void {
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_428_)=>(!!_428_)?_428_.collectApiSignature(signature):null)(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(3,offset_annotations);
        }
        if (this._offset != null && this._offset != 0) {
            fbBuilder.addUint32(0,this._offset);
        }
        if (this._uriEnd != null && this._uriEnd != 0) {
            fbBuilder.addUint32(1,this._uriEnd);
        }
        if (this._uriOffset != null && this._uriOffset != 0) {
            fbBuilder.addUint32(2,this._uriOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedExportNonPublicReader {
    export type Constructors = '_UnlinkedExportNonPublicReader';
    export type Interface = Omit<_UnlinkedExportNonPublicReader, Constructors>;
}
@DartClass
export class _UnlinkedExportNonPublicReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExportNonPublicReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedExportNonPublicImpl {
        return new _UnlinkedExportNonPublicImpl(bc,offset);
    }
}

export namespace _UnlinkedExportNonPublicImpl {
    export type Constructors = '_UnlinkedExportNonPublicImpl';
    export type Interface = Omit<_UnlinkedExportNonPublicImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExportNonPublic)
@With(_UnlinkedExportNonPublicMixin)
export class _UnlinkedExportNonPublicImpl extends core.DartObject implements lib3.UnlinkedExportNonPublic.Interface,_UnlinkedExportNonPublicMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedExportNonPublicImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _offset : number;

    _uriEnd : number;

    _uriOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        this._offset = ( this._offset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        this._uriEnd = ( this._uriEnd ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        this._uriOffset = ( this._uriOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._uriOffset;
    }
}

export namespace _UnlinkedExportNonPublicMixin {
    export type Constructors = '_UnlinkedExportNonPublicMixin';
    export type Interface = Omit<_UnlinkedExportNonPublicMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExportNonPublic)
export class _UnlinkedExportNonPublicMixin implements lib3.UnlinkedExportNonPublic.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.offset != 0) _result.set("offset",this.offset);
        if (this.uriEnd != 0) _result.set("uriEnd",this.uriEnd);
        if (this.uriOffset != 0) _result.set("uriOffset",this.uriOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["offset",this.offset],
            ["uriEnd",this.uriEnd],
            ["uriOffset",this.uriOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExportNonPublicMixin() {
    }
}

export namespace UnlinkedExportPublicBuilder {
    export type Constructors = 'UnlinkedExportPublicBuilder';
    export type Interface = Omit<UnlinkedExportPublicBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExportPublic)
@With(_UnlinkedExportPublicMixin)
export class UnlinkedExportPublicBuilder extends core.DartObject implements lib3.UnlinkedExportPublic.Interface,_UnlinkedExportPublicMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _combinators : core.DartList<UnlinkedCombinatorBuilder>;

    _configurations : core.DartList<UnlinkedConfigurationBuilder>;

    _uri : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<UnlinkedCombinatorBuilder> {
        return this._combinators = ( this._combinators ) || ( new core.DartList.literal<UnlinkedCombinatorBuilder>() );
    }
    set combinators(value : core.DartList<UnlinkedCombinatorBuilder>) {
        this._combinators = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get configurations() : core.DartList<UnlinkedConfigurationBuilder> {
        return this._configurations = ( this._configurations ) || ( new core.DartList.literal<UnlinkedConfigurationBuilder>() );
    }
    set configurations(value : core.DartList<UnlinkedConfigurationBuilder>) {
        this._configurations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        return this._uri = ( this._uri ) || ( '' );
    }
    set uri(value : string) {
        this._uri = value;
    }
    constructor(_namedArguments? : {combinators? : core.DartList<UnlinkedCombinatorBuilder>,configurations? : core.DartList<UnlinkedConfigurationBuilder>,uri? : string}) {
    }
    @defaultConstructor
    UnlinkedExportPublicBuilder(_namedArguments? : {combinators? : core.DartList<UnlinkedCombinatorBuilder>,configurations? : core.DartList<UnlinkedConfigurationBuilder>,uri? : string}) {
        let {combinators,configurations,uri} = Object.assign({
        }, _namedArguments );
        this._combinators = combinators;
        this._configurations = configurations;
        this._uri = uri;
    }
    flushInformative() : void {
        ((_429_)=>(!!_429_)?_429_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._combinators);
        ((_430_)=>(!!_430_)?_430_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._configurations);
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._uri || ''));
        if (this._combinators == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._combinators.length);
            for(let x of this._combinators) {
                ((_431_)=>(!!_431_)?_431_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._configurations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._configurations.length);
            for(let x of this._configurations) {
                ((_432_)=>(!!_432_)?_432_.collectApiSignature(signature):null)(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_combinators : any;
        let offset_configurations : any;
        let offset_uri : any;
        if (!(this._combinators == null || this._combinators.isEmpty)) {
            offset_combinators = fbBuilder.writeList(this._combinators.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._configurations == null || this._configurations.isEmpty)) {
            offset_configurations = fbBuilder.writeList(this._configurations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._uri != null) {
            offset_uri = fbBuilder.writeString(this._uri);
        }
        fbBuilder.startTable();
        if (offset_combinators != null) {
            fbBuilder.addOffset(1,offset_combinators);
        }
        if (offset_configurations != null) {
            fbBuilder.addOffset(2,offset_configurations);
        }
        if (offset_uri != null) {
            fbBuilder.addOffset(0,offset_uri);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedExportPublicReader {
    export type Constructors = '_UnlinkedExportPublicReader';
    export type Interface = Omit<_UnlinkedExportPublicReader, Constructors>;
}
@DartClass
export class _UnlinkedExportPublicReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExportPublicReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedExportPublicImpl {
        return new _UnlinkedExportPublicImpl(bc,offset);
    }
}

export namespace _UnlinkedExportPublicImpl {
    export type Constructors = '_UnlinkedExportPublicImpl';
    export type Interface = Omit<_UnlinkedExportPublicImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExportPublic)
@With(_UnlinkedExportPublicMixin)
export class _UnlinkedExportPublicImpl extends core.DartObject implements lib3.UnlinkedExportPublic.Interface,_UnlinkedExportPublicMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedExportPublicImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _combinators : core.DartList<lib3.UnlinkedCombinator>;

    _configurations : core.DartList<lib3.UnlinkedConfiguration>;

    _uri : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<lib3.UnlinkedCombinator> {
        this._combinators = ( this._combinators ) || ( new bare.createInstance(any,null,new _UnlinkedCombinatorReader()).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<lib3.UnlinkedCombinator>()) );
        return this._combinators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get configurations() : core.DartList<lib3.UnlinkedConfiguration> {
        this._configurations = ( this._configurations ) || ( new bare.createInstance(any,null,new _UnlinkedConfigurationReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedConfiguration>()) );
        return this._configurations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        this._uri = ( this._uri ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._uri;
    }
}

export namespace _UnlinkedExportPublicMixin {
    export type Constructors = '_UnlinkedExportPublicMixin';
    export type Interface = Omit<_UnlinkedExportPublicMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExportPublic)
export class _UnlinkedExportPublicMixin implements lib3.UnlinkedExportPublic.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.combinators.isNotEmpty) _result.set("combinators",this.combinators.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.configurations.isNotEmpty) _result.set("configurations",this.configurations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.uri != '') _result.set("uri",this.uri);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["combinators",this.combinators],
            ["configurations",this.configurations],
            ["uri",this.uri]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExportPublicMixin() {
    }
}

export namespace UnlinkedExprBuilder {
    export type Constructors = 'UnlinkedExprBuilder';
    export type Interface = Omit<UnlinkedExprBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExpr)
@With(_UnlinkedExprMixin)
export class UnlinkedExprBuilder extends core.DartObject implements lib3.UnlinkedExpr.Interface,_UnlinkedExprMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _assignmentOperators : core.DartList<lib3.UnlinkedExprAssignOperator>;

    _doubles : core.DartList<double>;

    _ints : core.DartList<number>;

    _isValidConst : boolean;

    _operations : core.DartList<lib3.UnlinkedExprOperation>;

    _references : core.DartList<EntityRefBuilder>;

    _strings : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get assignmentOperators() : core.DartList<lib3.UnlinkedExprAssignOperator> {
        return this._assignmentOperators = ( this._assignmentOperators ) || ( new core.DartList.literal<lib3.UnlinkedExprAssignOperator>() );
    }
    set assignmentOperators(value : core.DartList<lib3.UnlinkedExprAssignOperator>) {
        this._assignmentOperators = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get doubles() : core.DartList<double> {
        return this._doubles = ( this._doubles ) || ( new core.DartList.literal<double>() );
    }
    set doubles(value : core.DartList<double>) {
        this._doubles = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get ints() : core.DartList<number> {
        return this._ints = ( this._ints ) || ( new core.DartList.literal<number>() );
    }
    set ints(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._ints = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isValidConst() : boolean {
        return this._isValidConst = ( this._isValidConst ) || ( false );
    }
    set isValidConst(value : boolean) {
        this._isValidConst = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get operations() : core.DartList<lib3.UnlinkedExprOperation> {
        return this._operations = ( this._operations ) || ( new core.DartList.literal<lib3.UnlinkedExprOperation>() );
    }
    set operations(value : core.DartList<lib3.UnlinkedExprOperation>) {
        this._operations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get references() : core.DartList<EntityRefBuilder> {
        return this._references = ( this._references ) || ( new core.DartList.literal<EntityRefBuilder>() );
    }
    set references(value : core.DartList<EntityRefBuilder>) {
        this._references = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strings() : core.DartList<string> {
        return this._strings = ( this._strings ) || ( new core.DartList.literal<string>() );
    }
    set strings(value : core.DartList<string>) {
        this._strings = value;
    }
    constructor(_namedArguments? : {assignmentOperators? : core.DartList<lib3.UnlinkedExprAssignOperator>,doubles? : core.DartList<double>,ints? : core.DartList<number>,isValidConst? : boolean,operations? : core.DartList<lib3.UnlinkedExprOperation>,references? : core.DartList<EntityRefBuilder>,strings? : core.DartList<string>}) {
    }
    @defaultConstructor
    UnlinkedExprBuilder(_namedArguments? : {assignmentOperators? : core.DartList<lib3.UnlinkedExprAssignOperator>,doubles? : core.DartList<double>,ints? : core.DartList<number>,isValidConst? : boolean,operations? : core.DartList<lib3.UnlinkedExprOperation>,references? : core.DartList<EntityRefBuilder>,strings? : core.DartList<string>}) {
        let {assignmentOperators,doubles,ints,isValidConst,operations,references,strings} = Object.assign({
        }, _namedArguments );
        this._assignmentOperators = assignmentOperators;
        this._doubles = doubles;
        this._ints = ints;
        this._isValidConst = isValidConst;
        this._operations = operations;
        this._references = references;
        this._strings = strings;
    }
    flushInformative() : void {
        ((_433_)=>(!!_433_)?_433_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._references);
    }
    collectApiSignature(signature : any) : void {
        if (this._operations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._operations.length);
            for(let x of this._operations) {
                signature.addInt(x.index);
            }
        }
        if (this._ints == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._ints.length);
            for(let x of this._ints) {
                signature.addInt(x);
            }
        }
        if (this._references == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._references.length);
            for(let x of this._references) {
                ((_434_)=>(!!_434_)?_434_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._strings == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._strings.length);
            for(let x of this._strings) {
                signature.addString(x);
            }
        }
        if (this._doubles == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._doubles.length);
            for(let x of this._doubles) {
                signature.addDouble(x);
            }
        }
        signature.addBool(this._isValidConst == true);
        if (this._assignmentOperators == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._assignmentOperators.length);
            for(let x of this._assignmentOperators) {
                signature.addInt(x.index);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_assignmentOperators : any;
        let offset_doubles : any;
        let offset_ints : any;
        let offset_operations : any;
        let offset_references : any;
        let offset_strings : any;
        if (!(this._assignmentOperators == null || this._assignmentOperators.isEmpty)) {
            offset_assignmentOperators = fbBuilder.writeListUint8(this._assignmentOperators.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._doubles == null || this._doubles.isEmpty)) {
            offset_doubles = fbBuilder.writeListFloat64(this._doubles);
        }
        if (!(this._ints == null || this._ints.isEmpty)) {
            offset_ints = fbBuilder.writeListUint32(this._ints);
        }
        if (!(this._operations == null || this._operations.isEmpty)) {
            offset_operations = fbBuilder.writeListUint8(this._operations.map((b : any) =>  {
                return b.index;
            }).toList());
        }
        if (!(this._references == null || this._references.isEmpty)) {
            offset_references = fbBuilder.writeList(this._references.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._strings == null || this._strings.isEmpty)) {
            offset_strings = fbBuilder.writeList(this._strings.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_assignmentOperators != null) {
            fbBuilder.addOffset(6,offset_assignmentOperators);
        }
        if (offset_doubles != null) {
            fbBuilder.addOffset(4,offset_doubles);
        }
        if (offset_ints != null) {
            fbBuilder.addOffset(1,offset_ints);
        }
        if (this._isValidConst == true) {
            fbBuilder.addBool(5,true);
        }
        if (offset_operations != null) {
            fbBuilder.addOffset(0,offset_operations);
        }
        if (offset_references != null) {
            fbBuilder.addOffset(2,offset_references);
        }
        if (offset_strings != null) {
            fbBuilder.addOffset(3,offset_strings);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedExprReader {
    export type Constructors = '_UnlinkedExprReader';
    export type Interface = Omit<_UnlinkedExprReader, Constructors>;
}
@DartClass
export class _UnlinkedExprReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExprReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedExprImpl {
        return new _UnlinkedExprImpl(bc,offset);
    }
}

export namespace _UnlinkedExprImpl {
    export type Constructors = '_UnlinkedExprImpl';
    export type Interface = Omit<_UnlinkedExprImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExpr)
@With(_UnlinkedExprMixin)
export class _UnlinkedExprImpl extends core.DartObject implements lib3.UnlinkedExpr.Interface,_UnlinkedExprMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedExprImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _assignmentOperators : core.DartList<lib3.UnlinkedExprAssignOperator>;

    _doubles : core.DartList<double>;

    _ints : core.DartList<number>;

    _isValidConst : boolean;

    _operations : core.DartList<lib3.UnlinkedExprOperation>;

    _references : core.DartList<lib3.EntityRef>;

    _strings : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get assignmentOperators() : core.DartList<lib3.UnlinkedExprAssignOperator> {
        this._assignmentOperators = ( this._assignmentOperators ) || ( new bare.createInstance(any,null,new _UnlinkedExprAssignOperatorReader()).vTableGet(this._bc,this._bcOffset,6,new core.DartList.literal<lib3.UnlinkedExprAssignOperator>()) );
        return this._assignmentOperators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get doubles() : core.DartList<double> {
        this._doubles = ( this._doubles ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<double>()) );
        return this._doubles;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get ints() : core.DartList<number> {
        this._ints = ( this._ints ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<number>()) );
        return this._ints;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isValidConst() : boolean {
        this._isValidConst = ( this._isValidConst ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,false) );
        return this._isValidConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get operations() : core.DartList<lib3.UnlinkedExprOperation> {
        this._operations = ( this._operations ) || ( new bare.createInstance(any,null,new _UnlinkedExprOperationReader()).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<lib3.UnlinkedExprOperation>()) );
        return this._operations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get references() : core.DartList<lib3.EntityRef> {
        this._references = ( this._references ) || ( new bare.createInstance(any,null,new _EntityRefReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.EntityRef>()) );
        return this._references;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strings() : core.DartList<string> {
        this._strings = ( this._strings ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<string>()) );
        return this._strings;
    }
}

export namespace _UnlinkedExprMixin {
    export type Constructors = '_UnlinkedExprMixin';
    export type Interface = Omit<_UnlinkedExprMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedExpr)
export class _UnlinkedExprMixin implements lib3.UnlinkedExpr.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.assignmentOperators.isNotEmpty) _result.set("assignmentOperators",this.assignmentOperators.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.doubles.isNotEmpty) _result.set("doubles",this.doubles.map((_value : any) =>  {
            return new core.DartDouble(_value).isFinite ? _value : new core.DartDouble(_value).toString();
        }).toList());
        if (this.ints.isNotEmpty) _result.set("ints",this.ints);
        if (this.isValidConst != false) _result.set("isValidConst",this.isValidConst);
        if (this.operations.isNotEmpty) _result.set("operations",this.operations.map((_value : any) =>  {
            return new core.DartString(_value.toString()).split('.')[1];
        }).toList());
        if (this.references.isNotEmpty) _result.set("references",this.references.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.strings.isNotEmpty) _result.set("strings",this.strings);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["assignmentOperators",this.assignmentOperators],
            ["doubles",this.doubles],
            ["ints",this.ints],
            ["isValidConst",this.isValidConst],
            ["operations",this.operations],
            ["references",this.references],
            ["strings",this.strings]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExprMixin() {
    }
}

export namespace UnlinkedImportBuilder {
    export type Constructors = 'UnlinkedImportBuilder';
    export type Interface = Omit<UnlinkedImportBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedImport)
@With(_UnlinkedImportMixin)
export class UnlinkedImportBuilder extends core.DartObject implements lib3.UnlinkedImport.Interface,_UnlinkedImportMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _combinators : core.DartList<UnlinkedCombinatorBuilder>;

    _configurations : core.DartList<UnlinkedConfigurationBuilder>;

    _isDeferred : boolean;

    _isImplicit : boolean;

    _offset : number;

    _prefixOffset : number;

    _prefixReference : number;

    _uri : string;

    _uriEnd : number;

    _uriOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<UnlinkedCombinatorBuilder> {
        return this._combinators = ( this._combinators ) || ( new core.DartList.literal<UnlinkedCombinatorBuilder>() );
    }
    set combinators(value : core.DartList<UnlinkedCombinatorBuilder>) {
        this._combinators = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get configurations() : core.DartList<UnlinkedConfigurationBuilder> {
        return this._configurations = ( this._configurations ) || ( new core.DartList.literal<UnlinkedConfigurationBuilder>() );
    }
    set configurations(value : core.DartList<UnlinkedConfigurationBuilder>) {
        this._configurations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeferred() : boolean {
        return this._isDeferred = ( this._isDeferred ) || ( false );
    }
    set isDeferred(value : boolean) {
        this._isDeferred = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isImplicit() : boolean {
        return this._isImplicit = ( this._isImplicit ) || ( false );
    }
    set isImplicit(value : boolean) {
        this._isImplicit = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this._offset = ( this._offset ) || ( 0 );
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._offset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixOffset() : number {
        return this._prefixOffset = ( this._prefixOffset ) || ( 0 );
    }
    set prefixOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._prefixOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixReference() : number {
        return this._prefixReference = ( this._prefixReference ) || ( 0 );
    }
    set prefixReference(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._prefixReference = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        return this._uri = ( this._uri ) || ( '' );
    }
    set uri(value : string) {
        this._uri = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        return this._uriEnd = ( this._uriEnd ) || ( 0 );
    }
    set uriEnd(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._uriEnd = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        return this._uriOffset = ( this._uriOffset ) || ( 0 );
    }
    set uriOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._uriOffset = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,combinators? : core.DartList<UnlinkedCombinatorBuilder>,configurations? : core.DartList<UnlinkedConfigurationBuilder>,isDeferred? : boolean,isImplicit? : boolean,offset? : number,prefixOffset? : number,prefixReference? : number,uri? : string,uriEnd? : number,uriOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedImportBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,combinators? : core.DartList<UnlinkedCombinatorBuilder>,configurations? : core.DartList<UnlinkedConfigurationBuilder>,isDeferred? : boolean,isImplicit? : boolean,offset? : number,prefixOffset? : number,prefixReference? : number,uri? : string,uriEnd? : number,uriOffset? : number}) {
        let {annotations,combinators,configurations,isDeferred,isImplicit,offset,prefixOffset,prefixReference,uri,uriEnd,uriOffset} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._combinators = combinators;
        this._configurations = configurations;
        this._isDeferred = isDeferred;
        this._isImplicit = isImplicit;
        this._offset = offset;
        this._prefixOffset = prefixOffset;
        this._prefixReference = prefixReference;
        this._uri = uri;
        this._uriEnd = uriEnd;
        this._uriOffset = uriOffset;
    }
    flushInformative() : void {
        ((_435_)=>(!!_435_)?_435_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        ((_436_)=>(!!_436_)?_436_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._combinators);
        ((_437_)=>(!!_437_)?_437_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._configurations);
        this._offset = null;
        this._prefixOffset = null;
        this._uriEnd = null;
        this._uriOffset = null;
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._uri || ''));
        if (this._combinators == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._combinators.length);
            for(let x of this._combinators) {
                ((_438_)=>(!!_438_)?_438_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._isImplicit == true);
        signature.addInt((this._prefixReference || 0));
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_439_)=>(!!_439_)?_439_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._isDeferred == true);
        if (this._configurations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._configurations.length);
            for(let x of this._configurations) {
                ((_440_)=>(!!_440_)?_440_.collectApiSignature(signature):null)(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_combinators : any;
        let offset_configurations : any;
        let offset_uri : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._combinators == null || this._combinators.isEmpty)) {
            offset_combinators = fbBuilder.writeList(this._combinators.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._configurations == null || this._configurations.isEmpty)) {
            offset_configurations = fbBuilder.writeList(this._configurations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._uri != null) {
            offset_uri = fbBuilder.writeString(this._uri);
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(8,offset_annotations);
        }
        if (offset_combinators != null) {
            fbBuilder.addOffset(4,offset_combinators);
        }
        if (offset_configurations != null) {
            fbBuilder.addOffset(10,offset_configurations);
        }
        if (this._isDeferred == true) {
            fbBuilder.addBool(9,true);
        }
        if (this._isImplicit == true) {
            fbBuilder.addBool(5,true);
        }
        if (this._offset != null && this._offset != 0) {
            fbBuilder.addUint32(0,this._offset);
        }
        if (this._prefixOffset != null && this._prefixOffset != 0) {
            fbBuilder.addUint32(6,this._prefixOffset);
        }
        if (this._prefixReference != null && this._prefixReference != 0) {
            fbBuilder.addUint32(7,this._prefixReference);
        }
        if (offset_uri != null) {
            fbBuilder.addOffset(1,offset_uri);
        }
        if (this._uriEnd != null && this._uriEnd != 0) {
            fbBuilder.addUint32(2,this._uriEnd);
        }
        if (this._uriOffset != null && this._uriOffset != 0) {
            fbBuilder.addUint32(3,this._uriOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedImportReader {
    export type Constructors = '_UnlinkedImportReader';
    export type Interface = Omit<_UnlinkedImportReader, Constructors>;
}
@DartClass
export class _UnlinkedImportReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedImportReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedImportImpl {
        return new _UnlinkedImportImpl(bc,offset);
    }
}

export namespace _UnlinkedImportImpl {
    export type Constructors = '_UnlinkedImportImpl';
    export type Interface = Omit<_UnlinkedImportImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedImport)
@With(_UnlinkedImportMixin)
export class _UnlinkedImportImpl extends core.DartObject implements lib3.UnlinkedImport.Interface,_UnlinkedImportMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedImportImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _combinators : core.DartList<lib3.UnlinkedCombinator>;

    _configurations : core.DartList<lib3.UnlinkedConfiguration>;

    _isDeferred : boolean;

    _isImplicit : boolean;

    _offset : number;

    _prefixOffset : number;

    _prefixReference : number;

    _uri : string;

    _uriEnd : number;

    _uriOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,8,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<lib3.UnlinkedCombinator> {
        this._combinators = ( this._combinators ) || ( new bare.createInstance(any,null,new _UnlinkedCombinatorReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.UnlinkedCombinator>()) );
        return this._combinators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get configurations() : core.DartList<lib3.UnlinkedConfiguration> {
        this._configurations = ( this._configurations ) || ( new bare.createInstance(any,null,new _UnlinkedConfigurationReader()).vTableGet(this._bc,this._bcOffset,10,new core.DartList.literal<lib3.UnlinkedConfiguration>()) );
        return this._configurations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeferred() : boolean {
        this._isDeferred = ( this._isDeferred ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,9,false) );
        return this._isDeferred;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isImplicit() : boolean {
        this._isImplicit = ( this._isImplicit ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,false) );
        return this._isImplicit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        this._offset = ( this._offset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixOffset() : number {
        this._prefixOffset = ( this._prefixOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,0) );
        return this._prefixOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixReference() : number {
        this._prefixReference = ( this._prefixReference ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,7,0) );
        return this._prefixReference;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        this._uri = ( this._uri ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,'') );
        return this._uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        this._uriEnd = ( this._uriEnd ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        this._uriOffset = ( this._uriOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,0) );
        return this._uriOffset;
    }
}

export namespace _UnlinkedImportMixin {
    export type Constructors = '_UnlinkedImportMixin';
    export type Interface = Omit<_UnlinkedImportMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedImport)
export class _UnlinkedImportMixin implements lib3.UnlinkedImport.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.combinators.isNotEmpty) _result.set("combinators",this.combinators.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.configurations.isNotEmpty) _result.set("configurations",this.configurations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.isDeferred != false) _result.set("isDeferred",this.isDeferred);
        if (this.isImplicit != false) _result.set("isImplicit",this.isImplicit);
        if (this.offset != 0) _result.set("offset",this.offset);
        if (this.prefixOffset != 0) _result.set("prefixOffset",this.prefixOffset);
        if (this.prefixReference != 0) _result.set("prefixReference",this.prefixReference);
        if (this.uri != '') _result.set("uri",this.uri);
        if (this.uriEnd != 0) _result.set("uriEnd",this.uriEnd);
        if (this.uriOffset != 0) _result.set("uriOffset",this.uriOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["combinators",this.combinators],
            ["configurations",this.configurations],
            ["isDeferred",this.isDeferred],
            ["isImplicit",this.isImplicit],
            ["offset",this.offset],
            ["prefixOffset",this.prefixOffset],
            ["prefixReference",this.prefixReference],
            ["uri",this.uri],
            ["uriEnd",this.uriEnd],
            ["uriOffset",this.uriOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedImportMixin() {
    }
}

export namespace UnlinkedLabelBuilder {
    export type Constructors = 'UnlinkedLabelBuilder';
    export type Interface = Omit<UnlinkedLabelBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedLabel)
@With(_UnlinkedLabelMixin)
export class UnlinkedLabelBuilder extends core.DartObject implements lib3.UnlinkedLabel.Interface,_UnlinkedLabelMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _isOnSwitchMember : boolean;

    _isOnSwitchStatement : boolean;

    _name : string;

    _nameOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOnSwitchMember() : boolean {
        return this._isOnSwitchMember = ( this._isOnSwitchMember ) || ( false );
    }
    set isOnSwitchMember(value : boolean) {
        this._isOnSwitchMember = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOnSwitchStatement() : boolean {
        return this._isOnSwitchStatement = ( this._isOnSwitchStatement ) || ( false );
    }
    set isOnSwitchStatement(value : boolean) {
        this._isOnSwitchStatement = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    constructor(_namedArguments? : {isOnSwitchMember? : boolean,isOnSwitchStatement? : boolean,name? : string,nameOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedLabelBuilder(_namedArguments? : {isOnSwitchMember? : boolean,isOnSwitchStatement? : boolean,name? : string,nameOffset? : number}) {
        let {isOnSwitchMember,isOnSwitchStatement,name,nameOffset} = Object.assign({
        }, _namedArguments );
        this._isOnSwitchMember = isOnSwitchMember;
        this._isOnSwitchStatement = isOnSwitchStatement;
        this._name = name;
        this._nameOffset = nameOffset;
    }
    flushInformative() : void {
        this._nameOffset = null;
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addBool(this._isOnSwitchMember == true);
        signature.addBool(this._isOnSwitchStatement == true);
    }
    finish(fbBuilder : any) : any {
        let offset_name : any;
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (this._isOnSwitchMember == true) {
            fbBuilder.addBool(2,true);
        }
        if (this._isOnSwitchStatement == true) {
            fbBuilder.addBool(3,true);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedLabelReader {
    export type Constructors = '_UnlinkedLabelReader';
    export type Interface = Omit<_UnlinkedLabelReader, Constructors>;
}
@DartClass
export class _UnlinkedLabelReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedLabelReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedLabelImpl {
        return new _UnlinkedLabelImpl(bc,offset);
    }
}

export namespace _UnlinkedLabelImpl {
    export type Constructors = '_UnlinkedLabelImpl';
    export type Interface = Omit<_UnlinkedLabelImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedLabel)
@With(_UnlinkedLabelMixin)
export class _UnlinkedLabelImpl extends core.DartObject implements lib3.UnlinkedLabel.Interface,_UnlinkedLabelMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedLabelImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _isOnSwitchMember : boolean;

    _isOnSwitchStatement : boolean;

    _name : string;

    _nameOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOnSwitchMember() : boolean {
        this._isOnSwitchMember = ( this._isOnSwitchMember ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,false) );
        return this._isOnSwitchMember;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOnSwitchStatement() : boolean {
        this._isOnSwitchStatement = ( this._isOnSwitchStatement ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,false) );
        return this._isOnSwitchStatement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
}

export namespace _UnlinkedLabelMixin {
    export type Constructors = '_UnlinkedLabelMixin';
    export type Interface = Omit<_UnlinkedLabelMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedLabel)
export class _UnlinkedLabelMixin implements lib3.UnlinkedLabel.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.isOnSwitchMember != false) _result.set("isOnSwitchMember",this.isOnSwitchMember);
        if (this.isOnSwitchStatement != false) _result.set("isOnSwitchStatement",this.isOnSwitchStatement);
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["isOnSwitchMember",this.isOnSwitchMember],
            ["isOnSwitchStatement",this.isOnSwitchStatement],
            ["name",this.name],
            ["nameOffset",this.nameOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedLabelMixin() {
    }
}

export namespace UnlinkedParamBuilder {
    export type Constructors = 'UnlinkedParamBuilder';
    export type Interface = Omit<UnlinkedParamBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedParam)
@With(_UnlinkedParamMixin)
export class UnlinkedParamBuilder extends core.DartObject implements lib3.UnlinkedParam.Interface,_UnlinkedParamMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _codeRange : CodeRangeBuilder;

    _defaultValueCode : string;

    _inferredTypeSlot : number;

    _inheritsCovariantSlot : number;

    _initializer : UnlinkedExecutableBuilder;

    _isExplicitlyCovariant : boolean;

    _isFinal : boolean;

    _isFunctionTyped : boolean;

    _isInitializingFormal : boolean;

    _kind : lib3.UnlinkedParamKind;

    _name : string;

    _nameOffset : number;

    _parameters : core.DartList<UnlinkedParamBuilder>;

    _type : EntityRefBuilder;

    _visibleLength : number;

    _visibleOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get defaultValueCode() : string {
        return this._defaultValueCode = ( this._defaultValueCode ) || ( '' );
    }
    set defaultValueCode(value : string) {
        this._defaultValueCode = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inferredTypeSlot() : number {
        return this._inferredTypeSlot = ( this._inferredTypeSlot ) || ( 0 );
    }
    set inferredTypeSlot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._inferredTypeSlot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritsCovariantSlot() : number {
        return this._inheritsCovariantSlot = ( this._inheritsCovariantSlot ) || ( 0 );
    }
    set inheritsCovariantSlot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._inheritsCovariantSlot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : UnlinkedExecutableBuilder {
        return this._initializer;
    }
    set initializer(value : UnlinkedExecutableBuilder) {
        this._initializer = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExplicitlyCovariant() : boolean {
        return this._isExplicitlyCovariant = ( this._isExplicitlyCovariant ) || ( false );
    }
    set isExplicitlyCovariant(value : boolean) {
        this._isExplicitlyCovariant = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return this._isFinal = ( this._isFinal ) || ( false );
    }
    set isFinal(value : boolean) {
        this._isFinal = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFunctionTyped() : boolean {
        return this._isFunctionTyped = ( this._isFunctionTyped ) || ( false );
    }
    set isFunctionTyped(value : boolean) {
        this._isFunctionTyped = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInitializingFormal() : boolean {
        return this._isInitializingFormal = ( this._isInitializingFormal ) || ( false );
    }
    set isInitializingFormal(value : boolean) {
        this._isInitializingFormal = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.UnlinkedParamKind {
        return this._kind = ( this._kind ) || ( lib3.UnlinkedParamKind.required );
    }
    set kind(value : lib3.UnlinkedParamKind) {
        this._kind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<UnlinkedParamBuilder> {
        return this._parameters = ( this._parameters ) || ( new core.DartList.literal<UnlinkedParamBuilder>() );
    }
    set parameters(value : core.DartList<UnlinkedParamBuilder>) {
        this._parameters = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : EntityRefBuilder {
        return this._type;
    }
    set type(value : EntityRefBuilder) {
        this._type = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleLength() : number {
        return this._visibleLength = ( this._visibleLength ) || ( 0 );
    }
    set visibleLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._visibleLength = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleOffset() : number {
        return this._visibleOffset = ( this._visibleOffset ) || ( 0 );
    }
    set visibleOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._visibleOffset = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,defaultValueCode? : string,inferredTypeSlot? : number,inheritsCovariantSlot? : number,initializer? : UnlinkedExecutableBuilder,isExplicitlyCovariant? : boolean,isFinal? : boolean,isFunctionTyped? : boolean,isInitializingFormal? : boolean,kind? : lib3.UnlinkedParamKind,name? : string,nameOffset? : number,parameters? : core.DartList<UnlinkedParamBuilder>,type? : EntityRefBuilder,visibleLength? : number,visibleOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedParamBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,defaultValueCode? : string,inferredTypeSlot? : number,inheritsCovariantSlot? : number,initializer? : UnlinkedExecutableBuilder,isExplicitlyCovariant? : boolean,isFinal? : boolean,isFunctionTyped? : boolean,isInitializingFormal? : boolean,kind? : lib3.UnlinkedParamKind,name? : string,nameOffset? : number,parameters? : core.DartList<UnlinkedParamBuilder>,type? : EntityRefBuilder,visibleLength? : number,visibleOffset? : number}) {
        let {annotations,codeRange,defaultValueCode,inferredTypeSlot,inheritsCovariantSlot,initializer,isExplicitlyCovariant,isFinal,isFunctionTyped,isInitializingFormal,kind,name,nameOffset,parameters,type,visibleLength,visibleOffset} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._codeRange = codeRange;
        this._defaultValueCode = defaultValueCode;
        this._inferredTypeSlot = inferredTypeSlot;
        this._inheritsCovariantSlot = inheritsCovariantSlot;
        this._initializer = initializer;
        this._isExplicitlyCovariant = isExplicitlyCovariant;
        this._isFinal = isFinal;
        this._isFunctionTyped = isFunctionTyped;
        this._isInitializingFormal = isInitializingFormal;
        this._kind = kind;
        this._name = name;
        this._nameOffset = nameOffset;
        this._parameters = parameters;
        this._type = type;
        this._visibleLength = visibleLength;
        this._visibleOffset = visibleOffset;
    }
    flushInformative() : void {
        ((_441_)=>(!!_441_)?_441_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        this._codeRange = null;
        this._defaultValueCode = null;
        ((_442_)=>(!!_442_)?_442_.flushInformative():null)(this._initializer);
        this._nameOffset = null;
        ((_443_)=>(!!_443_)?_443_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._parameters);
        ((_444_)=>(!!_444_)?_444_.flushInformative():null)(this._type);
        this._visibleLength = null;
        this._visibleOffset = null;
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addInt((this._inferredTypeSlot || 0));
        signature.addBool(this._type != null);
        ((_445_)=>(!!_445_)?_445_.collectApiSignature(signature):null)(this._type);
        signature.addInt(op(Op.EQUALS,this._kind,null) ? 0 : this._kind.index);
        signature.addBool(this._isFunctionTyped == true);
        signature.addBool(this._isInitializingFormal == true);
        if (this._parameters == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._parameters.length);
            for(let x of this._parameters) {
                ((_446_)=>(!!_446_)?_446_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_447_)=>(!!_447_)?_447_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._initializer != null);
        ((_448_)=>(!!_448_)?_448_.collectApiSignature(signature):null)(this._initializer);
        signature.addInt((this._inheritsCovariantSlot || 0));
        signature.addBool(this._isExplicitlyCovariant == true);
        signature.addBool(this._isFinal == true);
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_codeRange : any;
        let offset_defaultValueCode : any;
        let offset_initializer : any;
        let offset_name : any;
        let offset_parameters : any;
        let offset_type : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (this._defaultValueCode != null) {
            offset_defaultValueCode = fbBuilder.writeString(this._defaultValueCode);
        }
        if (this._initializer != null) {
            offset_initializer = this._initializer.finish(fbBuilder);
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        if (!(this._parameters == null || this._parameters.isEmpty)) {
            offset_parameters = fbBuilder.writeList(this._parameters.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._type != null) {
            offset_type = this._type.finish(fbBuilder);
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(9,offset_annotations);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(7,offset_codeRange);
        }
        if (offset_defaultValueCode != null) {
            fbBuilder.addOffset(13,offset_defaultValueCode);
        }
        if (this._inferredTypeSlot != null && this._inferredTypeSlot != 0) {
            fbBuilder.addUint32(2,this._inferredTypeSlot);
        }
        if (this._inheritsCovariantSlot != null && this._inheritsCovariantSlot != 0) {
            fbBuilder.addUint32(14,this._inheritsCovariantSlot);
        }
        if (offset_initializer != null) {
            fbBuilder.addOffset(12,offset_initializer);
        }
        if (this._isExplicitlyCovariant == true) {
            fbBuilder.addBool(15,true);
        }
        if (this._isFinal == true) {
            fbBuilder.addBool(16,true);
        }
        if (this._isFunctionTyped == true) {
            fbBuilder.addBool(5,true);
        }
        if (this._isInitializingFormal == true) {
            fbBuilder.addBool(6,true);
        }
        if (this._kind != null && this._kind != lib3.UnlinkedParamKind.required) {
            fbBuilder.addUint8(4,this._kind.index);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        if (offset_parameters != null) {
            fbBuilder.addOffset(8,offset_parameters);
        }
        if (offset_type != null) {
            fbBuilder.addOffset(3,offset_type);
        }
        if (this._visibleLength != null && this._visibleLength != 0) {
            fbBuilder.addUint32(10,this._visibleLength);
        }
        if (this._visibleOffset != null && this._visibleOffset != 0) {
            fbBuilder.addUint32(11,this._visibleOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedParamReader {
    export type Constructors = '_UnlinkedParamReader';
    export type Interface = Omit<_UnlinkedParamReader, Constructors>;
}
@DartClass
export class _UnlinkedParamReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedParamReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedParamImpl {
        return new _UnlinkedParamImpl(bc,offset);
    }
}

export namespace _UnlinkedParamImpl {
    export type Constructors = '_UnlinkedParamImpl';
    export type Interface = Omit<_UnlinkedParamImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedParam)
@With(_UnlinkedParamMixin)
export class _UnlinkedParamImpl extends core.DartObject implements lib3.UnlinkedParam.Interface,_UnlinkedParamMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedParamImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _codeRange : lib3.CodeRange;

    _defaultValueCode : string;

    _inferredTypeSlot : number;

    _inheritsCovariantSlot : number;

    _initializer : lib3.UnlinkedExecutable;

    _isExplicitlyCovariant : boolean;

    _isFinal : boolean;

    _isFunctionTyped : boolean;

    _isInitializingFormal : boolean;

    _kind : lib3.UnlinkedParamKind;

    _name : string;

    _nameOffset : number;

    _parameters : core.DartList<lib3.UnlinkedParam>;

    _type : lib3.EntityRef;

    _visibleLength : number;

    _visibleOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,9,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,7,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get defaultValueCode() : string {
        this._defaultValueCode = ( this._defaultValueCode ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,13,'') );
        return this._defaultValueCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inferredTypeSlot() : number {
        this._inferredTypeSlot = ( this._inferredTypeSlot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._inferredTypeSlot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritsCovariantSlot() : number {
        this._inheritsCovariantSlot = ( this._inheritsCovariantSlot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,14,0) );
        return this._inheritsCovariantSlot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : lib3.UnlinkedExecutable {
        this._initializer = ( this._initializer ) || ( new _UnlinkedExecutableReader().vTableGet(this._bc,this._bcOffset,12,null) );
        return this._initializer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExplicitlyCovariant() : boolean {
        this._isExplicitlyCovariant = ( this._isExplicitlyCovariant ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,15,false) );
        return this._isExplicitlyCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        this._isFinal = ( this._isFinal ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,16,false) );
        return this._isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFunctionTyped() : boolean {
        this._isFunctionTyped = ( this._isFunctionTyped ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,5,false) );
        return this._isFunctionTyped;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInitializingFormal() : boolean {
        this._isInitializingFormal = ( this._isInitializingFormal ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,false) );
        return this._isInitializingFormal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.UnlinkedParamKind {
        this._kind = ( this._kind ) || ( new _UnlinkedParamKindReader().vTableGet(this._bc,this._bcOffset,4,lib3.UnlinkedParamKind.required) );
        return this._kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<lib3.UnlinkedParam> {
        this._parameters = ( this._parameters ) || ( new bare.createInstance(any,null,new _UnlinkedParamReader()).vTableGet(this._bc,this._bcOffset,8,new core.DartList.literal<lib3.UnlinkedParam>()) );
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : lib3.EntityRef {
        this._type = ( this._type ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,3,null) );
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleLength() : number {
        this._visibleLength = ( this._visibleLength ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,10,0) );
        return this._visibleLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleOffset() : number {
        this._visibleOffset = ( this._visibleOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,11,0) );
        return this._visibleOffset;
    }
}

export namespace _UnlinkedParamMixin {
    export type Constructors = '_UnlinkedParamMixin';
    export type Interface = Omit<_UnlinkedParamMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedParam)
export class _UnlinkedParamMixin implements lib3.UnlinkedParam.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.defaultValueCode != '') _result.set("defaultValueCode",this.defaultValueCode);
        if (this.inferredTypeSlot != 0) _result.set("inferredTypeSlot",this.inferredTypeSlot);
        if (this.inheritsCovariantSlot != 0) _result.set("inheritsCovariantSlot",this.inheritsCovariantSlot);
        if (this.initializer != null) _result.set("initializer",this.initializer.toJson());
        if (this.isExplicitlyCovariant != false) _result.set("isExplicitlyCovariant",this.isExplicitlyCovariant);
        if (this.isFinal != false) _result.set("isFinal",this.isFinal);
        if (this.isFunctionTyped != false) _result.set("isFunctionTyped",this.isFunctionTyped);
        if (this.isInitializingFormal != false) _result.set("isInitializingFormal",this.isInitializingFormal);
        if (this.kind != lib3.UnlinkedParamKind.required) _result.set("kind",new core.DartString(this.kind.toString()).split('.')[1]);
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        if (this.parameters.isNotEmpty) _result.set("parameters",this.parameters.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.type != null) _result.set("type",this.type.toJson());
        if (this.visibleLength != 0) _result.set("visibleLength",this.visibleLength);
        if (this.visibleOffset != 0) _result.set("visibleOffset",this.visibleOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["codeRange",this.codeRange],
            ["defaultValueCode",this.defaultValueCode],
            ["inferredTypeSlot",this.inferredTypeSlot],
            ["inheritsCovariantSlot",this.inheritsCovariantSlot],
            ["initializer",this.initializer],
            ["isExplicitlyCovariant",this.isExplicitlyCovariant],
            ["isFinal",this.isFinal],
            ["isFunctionTyped",this.isFunctionTyped],
            ["isInitializingFormal",this.isInitializingFormal],
            ["kind",this.kind],
            ["name",this.name],
            ["nameOffset",this.nameOffset],
            ["parameters",this.parameters],
            ["type",this.type],
            ["visibleLength",this.visibleLength],
            ["visibleOffset",this.visibleOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedParamMixin() {
    }
}

export namespace UnlinkedPartBuilder {
    export type Constructors = 'UnlinkedPartBuilder';
    export type Interface = Omit<UnlinkedPartBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPart)
@With(_UnlinkedPartMixin)
export class UnlinkedPartBuilder extends core.DartObject implements lib3.UnlinkedPart.Interface,_UnlinkedPartMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _uriEnd : number;

    _uriOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        return this._uriEnd = ( this._uriEnd ) || ( 0 );
    }
    set uriEnd(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._uriEnd = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        return this._uriOffset = ( this._uriOffset ) || ( 0 );
    }
    set uriOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._uriOffset = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,uriEnd? : number,uriOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedPartBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,uriEnd? : number,uriOffset? : number}) {
        let {annotations,uriEnd,uriOffset} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._uriEnd = uriEnd;
        this._uriOffset = uriOffset;
    }
    flushInformative() : void {
        ((_449_)=>(!!_449_)?_449_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        this._uriEnd = null;
        this._uriOffset = null;
    }
    collectApiSignature(signature : any) : void {
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_450_)=>(!!_450_)?_450_.collectApiSignature(signature):null)(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(2,offset_annotations);
        }
        if (this._uriEnd != null && this._uriEnd != 0) {
            fbBuilder.addUint32(0,this._uriEnd);
        }
        if (this._uriOffset != null && this._uriOffset != 0) {
            fbBuilder.addUint32(1,this._uriOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedPartReader {
    export type Constructors = '_UnlinkedPartReader';
    export type Interface = Omit<_UnlinkedPartReader, Constructors>;
}
@DartClass
export class _UnlinkedPartReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedPartReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedPartImpl {
        return new _UnlinkedPartImpl(bc,offset);
    }
}

export namespace _UnlinkedPartImpl {
    export type Constructors = '_UnlinkedPartImpl';
    export type Interface = Omit<_UnlinkedPartImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPart)
@With(_UnlinkedPartMixin)
export class _UnlinkedPartImpl extends core.DartObject implements lib3.UnlinkedPart.Interface,_UnlinkedPartMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedPartImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _uriEnd : number;

    _uriOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        this._uriEnd = ( this._uriEnd ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,0) );
        return this._uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        this._uriOffset = ( this._uriOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._uriOffset;
    }
}

export namespace _UnlinkedPartMixin {
    export type Constructors = '_UnlinkedPartMixin';
    export type Interface = Omit<_UnlinkedPartMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPart)
export class _UnlinkedPartMixin implements lib3.UnlinkedPart.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.uriEnd != 0) _result.set("uriEnd",this.uriEnd);
        if (this.uriOffset != 0) _result.set("uriOffset",this.uriOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["uriEnd",this.uriEnd],
            ["uriOffset",this.uriOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedPartMixin() {
    }
}

export namespace UnlinkedPublicNameBuilder {
    export type Constructors = 'UnlinkedPublicNameBuilder';
    export type Interface = Omit<UnlinkedPublicNameBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPublicName)
@With(_UnlinkedPublicNameMixin)
export class UnlinkedPublicNameBuilder extends core.DartObject implements lib3.UnlinkedPublicName.Interface,_UnlinkedPublicNameMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _kind : lib3.ReferenceKind;

    _members : core.DartList<UnlinkedPublicNameBuilder>;

    _name : string;

    _numTypeParameters : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.ReferenceKind {
        return this._kind = ( this._kind ) || ( lib3.ReferenceKind.classOrEnum );
    }
    set kind(value : lib3.ReferenceKind) {
        this._kind = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get members() : core.DartList<UnlinkedPublicNameBuilder> {
        return this._members = ( this._members ) || ( new core.DartList.literal<UnlinkedPublicNameBuilder>() );
    }
    set members(value : core.DartList<UnlinkedPublicNameBuilder>) {
        this._members = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numTypeParameters() : number {
        return this._numTypeParameters = ( this._numTypeParameters ) || ( 0 );
    }
    set numTypeParameters(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._numTypeParameters = value;
    }
    constructor(_namedArguments? : {kind? : lib3.ReferenceKind,members? : core.DartList<UnlinkedPublicNameBuilder>,name? : string,numTypeParameters? : number}) {
    }
    @defaultConstructor
    UnlinkedPublicNameBuilder(_namedArguments? : {kind? : lib3.ReferenceKind,members? : core.DartList<UnlinkedPublicNameBuilder>,name? : string,numTypeParameters? : number}) {
        let {kind,members,name,numTypeParameters} = Object.assign({
        }, _namedArguments );
        this._kind = kind;
        this._members = members;
        this._name = name;
        this._numTypeParameters = numTypeParameters;
    }
    flushInformative() : void {
        ((_451_)=>(!!_451_)?_451_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._members);
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addInt(op(Op.EQUALS,this._kind,null) ? 0 : this._kind.index);
        if (this._members == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._members.length);
            for(let x of this._members) {
                ((_452_)=>(!!_452_)?_452_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addInt((this._numTypeParameters || 0));
    }
    finish(fbBuilder : any) : any {
        let offset_members : any;
        let offset_name : any;
        if (!(this._members == null || this._members.isEmpty)) {
            offset_members = fbBuilder.writeList(this._members.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (this._kind != null && this._kind != lib3.ReferenceKind.classOrEnum) {
            fbBuilder.addUint8(1,this._kind.index);
        }
        if (offset_members != null) {
            fbBuilder.addOffset(2,offset_members);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._numTypeParameters != null && this._numTypeParameters != 0) {
            fbBuilder.addUint32(3,this._numTypeParameters);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedPublicNameReader {
    export type Constructors = '_UnlinkedPublicNameReader';
    export type Interface = Omit<_UnlinkedPublicNameReader, Constructors>;
}
@DartClass
export class _UnlinkedPublicNameReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedPublicNameReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedPublicNameImpl {
        return new _UnlinkedPublicNameImpl(bc,offset);
    }
}

export namespace _UnlinkedPublicNameImpl {
    export type Constructors = '_UnlinkedPublicNameImpl';
    export type Interface = Omit<_UnlinkedPublicNameImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPublicName)
@With(_UnlinkedPublicNameMixin)
export class _UnlinkedPublicNameImpl extends core.DartObject implements lib3.UnlinkedPublicName.Interface,_UnlinkedPublicNameMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedPublicNameImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _kind : lib3.ReferenceKind;

    _members : core.DartList<lib3.UnlinkedPublicName>;

    _name : string;

    _numTypeParameters : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : lib3.ReferenceKind {
        this._kind = ( this._kind ) || ( new _ReferenceKindReader().vTableGet(this._bc,this._bcOffset,1,lib3.ReferenceKind.classOrEnum) );
        return this._kind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get members() : core.DartList<lib3.UnlinkedPublicName> {
        this._members = ( this._members ) || ( new bare.createInstance(any,null,new _UnlinkedPublicNameReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedPublicName>()) );
        return this._members;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numTypeParameters() : number {
        this._numTypeParameters = ( this._numTypeParameters ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,3,0) );
        return this._numTypeParameters;
    }
}

export namespace _UnlinkedPublicNameMixin {
    export type Constructors = '_UnlinkedPublicNameMixin';
    export type Interface = Omit<_UnlinkedPublicNameMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPublicName)
export class _UnlinkedPublicNameMixin implements lib3.UnlinkedPublicName.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.kind != lib3.ReferenceKind.classOrEnum) _result.set("kind",new core.DartString(this.kind.toString()).split('.')[1]);
        if (this.members.isNotEmpty) _result.set("members",this.members.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.name != '') _result.set("name",this.name);
        if (this.numTypeParameters != 0) _result.set("numTypeParameters",this.numTypeParameters);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["kind",this.kind],
            ["members",this.members],
            ["name",this.name],
            ["numTypeParameters",this.numTypeParameters]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedPublicNameMixin() {
    }
}

export namespace UnlinkedPublicNamespaceBuilder {
    export type Constructors = 'UnlinkedPublicNamespaceBuilder';
    export type Interface = Omit<UnlinkedPublicNamespaceBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPublicNamespace)
@With(_UnlinkedPublicNamespaceMixin)
export class UnlinkedPublicNamespaceBuilder extends core.DartObject implements lib3.UnlinkedPublicNamespace.Interface,_UnlinkedPublicNamespaceMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _exports : core.DartList<UnlinkedExportPublicBuilder>;

    _names : core.DartList<UnlinkedPublicNameBuilder>;

    _parts : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exports() : core.DartList<UnlinkedExportPublicBuilder> {
        return this._exports = ( this._exports ) || ( new core.DartList.literal<UnlinkedExportPublicBuilder>() );
    }
    set exports(value : core.DartList<UnlinkedExportPublicBuilder>) {
        this._exports = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get names() : core.DartList<UnlinkedPublicNameBuilder> {
        return this._names = ( this._names ) || ( new core.DartList.literal<UnlinkedPublicNameBuilder>() );
    }
    set names(value : core.DartList<UnlinkedPublicNameBuilder>) {
        this._names = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<string> {
        return this._parts = ( this._parts ) || ( new core.DartList.literal<string>() );
    }
    set parts(value : core.DartList<string>) {
        this._parts = value;
    }
    constructor(_namedArguments? : {exports? : core.DartList<UnlinkedExportPublicBuilder>,names? : core.DartList<UnlinkedPublicNameBuilder>,parts? : core.DartList<string>}) {
    }
    @defaultConstructor
    UnlinkedPublicNamespaceBuilder(_namedArguments? : {exports? : core.DartList<UnlinkedExportPublicBuilder>,names? : core.DartList<UnlinkedPublicNameBuilder>,parts? : core.DartList<string>}) {
        let {exports,names,parts} = Object.assign({
        }, _namedArguments );
        this._exports = exports;
        this._names = names;
        this._parts = parts;
    }
    flushInformative() : void {
        ((_453_)=>(!!_453_)?_453_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._exports);
        ((_454_)=>(!!_454_)?_454_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._names);
    }
    collectApiSignature(signature : any) : void {
        if (this._names == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._names.length);
            for(let x of this._names) {
                ((_455_)=>(!!_455_)?_455_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._parts == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._parts.length);
            for(let x of this._parts) {
                signature.addString(x);
            }
        }
        if (this._exports == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._exports.length);
            for(let x of this._exports) {
                ((_456_)=>(!!_456_)?_456_.collectApiSignature(signature):null)(x);
            }
        }
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"UPNS");
    }
    finish(fbBuilder : any) : any {
        let offset_exports : any;
        let offset_names : any;
        let offset_parts : any;
        if (!(this._exports == null || this._exports.isEmpty)) {
            offset_exports = fbBuilder.writeList(this._exports.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._names == null || this._names.isEmpty)) {
            offset_names = fbBuilder.writeList(this._names.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._parts == null || this._parts.isEmpty)) {
            offset_parts = fbBuilder.writeList(this._parts.map((b : any) =>  {
                return fbBuilder.writeString(b);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_exports != null) {
            fbBuilder.addOffset(2,offset_exports);
        }
        if (offset_names != null) {
            fbBuilder.addOffset(0,offset_names);
        }
        if (offset_parts != null) {
            fbBuilder.addOffset(1,offset_parts);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedExecutableKindReader {
    export type Constructors = '_UnlinkedExecutableKindReader';
    export type Interface = Omit<_UnlinkedExecutableKindReader, Constructors>;
}
@DartClass
export class _UnlinkedExecutableKindReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExecutableKindReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.UnlinkedExecutableKind {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.UnlinkedExecutableKind.values.length ? lib3.UnlinkedExecutableKind.values[index] : lib3.UnlinkedExecutableKind.functionOrMethod;
    }
}

export namespace _UnlinkedPublicNamespaceReader {
    export type Constructors = '_UnlinkedPublicNamespaceReader';
    export type Interface = Omit<_UnlinkedPublicNamespaceReader, Constructors>;
}
@DartClass
export class _UnlinkedPublicNamespaceReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedPublicNamespaceReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedPublicNamespaceImpl {
        return new _UnlinkedPublicNamespaceImpl(bc,offset);
    }
}

export namespace _UnlinkedPublicNamespaceImpl {
    export type Constructors = '_UnlinkedPublicNamespaceImpl';
    export type Interface = Omit<_UnlinkedPublicNamespaceImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPublicNamespace)
@With(_UnlinkedPublicNamespaceMixin)
export class _UnlinkedPublicNamespaceImpl extends core.DartObject implements lib3.UnlinkedPublicNamespace.Interface,_UnlinkedPublicNamespaceMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedPublicNamespaceImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _exports : core.DartList<lib3.UnlinkedExportPublic>;

    _names : core.DartList<lib3.UnlinkedPublicName>;

    _parts : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exports() : core.DartList<lib3.UnlinkedExportPublic> {
        this._exports = ( this._exports ) || ( new bare.createInstance(any,null,new _UnlinkedExportPublicReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedExportPublic>()) );
        return this._exports;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get names() : core.DartList<lib3.UnlinkedPublicName> {
        this._names = ( this._names ) || ( new bare.createInstance(any,null,new _UnlinkedPublicNameReader()).vTableGet(this._bc,this._bcOffset,0,new core.DartList.literal<lib3.UnlinkedPublicName>()) );
        return this._names;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<string> {
        this._parts = ( this._parts ) || ( new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<string>()) );
        return this._parts;
    }
}

export namespace _UnlinkedPublicNamespaceMixin {
    export type Constructors = '_UnlinkedPublicNamespaceMixin';
    export type Interface = Omit<_UnlinkedPublicNamespaceMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedPublicNamespace)
export class _UnlinkedPublicNamespaceMixin implements lib3.UnlinkedPublicNamespace.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.exports.isNotEmpty) _result.set("exports",this.exports.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.names.isNotEmpty) _result.set("names",this.names.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.parts.isNotEmpty) _result.set("parts",this.parts);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["exports",this.exports],
            ["names",this.names],
            ["parts",this.parts]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedPublicNamespaceMixin() {
    }
}

export namespace UnlinkedReferenceBuilder {
    export type Constructors = 'UnlinkedReferenceBuilder';
    export type Interface = Omit<UnlinkedReferenceBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedReference)
@With(_UnlinkedReferenceMixin)
export class UnlinkedReferenceBuilder extends core.DartObject implements lib3.UnlinkedReference.Interface,_UnlinkedReferenceMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _name : string;

    _prefixReference : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixReference() : number {
        return this._prefixReference = ( this._prefixReference ) || ( 0 );
    }
    set prefixReference(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._prefixReference = value;
    }
    constructor(_namedArguments? : {name? : string,prefixReference? : number}) {
    }
    @defaultConstructor
    UnlinkedReferenceBuilder(_namedArguments? : {name? : string,prefixReference? : number}) {
        let {name,prefixReference} = Object.assign({
        }, _namedArguments );
        this._name = name;
        this._prefixReference = prefixReference;
    }
    flushInformative() : void {
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addInt((this._prefixReference || 0));
    }
    finish(fbBuilder : any) : any {
        let offset_name : any;
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._prefixReference != null && this._prefixReference != 0) {
            fbBuilder.addUint32(1,this._prefixReference);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedReferenceReader {
    export type Constructors = '_UnlinkedReferenceReader';
    export type Interface = Omit<_UnlinkedReferenceReader, Constructors>;
}
@DartClass
export class _UnlinkedReferenceReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedReferenceReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedReferenceImpl {
        return new _UnlinkedReferenceImpl(bc,offset);
    }
}

export namespace _UnlinkedReferenceImpl {
    export type Constructors = '_UnlinkedReferenceImpl';
    export type Interface = Omit<_UnlinkedReferenceImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedReference)
@With(_UnlinkedReferenceMixin)
export class _UnlinkedReferenceImpl extends core.DartObject implements lib3.UnlinkedReference.Interface,_UnlinkedReferenceMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedReferenceImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _name : string;

    _prefixReference : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixReference() : number {
        this._prefixReference = ( this._prefixReference ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._prefixReference;
    }
}

export namespace _UnlinkedReferenceMixin {
    export type Constructors = '_UnlinkedReferenceMixin';
    export type Interface = Omit<_UnlinkedReferenceMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedReference)
export class _UnlinkedReferenceMixin implements lib3.UnlinkedReference.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.name != '') _result.set("name",this.name);
        if (this.prefixReference != 0) _result.set("prefixReference",this.prefixReference);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["name",this.name],
            ["prefixReference",this.prefixReference]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedReferenceMixin() {
    }
}

export namespace UnlinkedTypedefBuilder {
    export type Constructors = 'UnlinkedTypedefBuilder';
    export type Interface = Omit<UnlinkedTypedefBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedTypedef)
@With(_UnlinkedTypedefMixin)
export class UnlinkedTypedefBuilder extends core.DartObject implements lib3.UnlinkedTypedef.Interface,_UnlinkedTypedefMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _codeRange : CodeRangeBuilder;

    _documentationComment : UnlinkedDocumentationCommentBuilder;

    _name : string;

    _nameOffset : number;

    _parameters : core.DartList<UnlinkedParamBuilder>;

    _returnType : EntityRefBuilder;

    _style : lib3.TypedefStyle;

    _typeParameters : core.DartList<UnlinkedTypeParamBuilder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : UnlinkedDocumentationCommentBuilder {
        return this._documentationComment;
    }
    set documentationComment(value : UnlinkedDocumentationCommentBuilder) {
        this._documentationComment = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<UnlinkedParamBuilder> {
        return this._parameters = ( this._parameters ) || ( new core.DartList.literal<UnlinkedParamBuilder>() );
    }
    set parameters(value : core.DartList<UnlinkedParamBuilder>) {
        this._parameters = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : EntityRefBuilder {
        return this._returnType;
    }
    set returnType(value : EntityRefBuilder) {
        this._returnType = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get style() : lib3.TypedefStyle {
        return this._style = ( this._style ) || ( lib3.TypedefStyle.functionType );
    }
    set style(value : lib3.TypedefStyle) {
        this._style = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<UnlinkedTypeParamBuilder> {
        return this._typeParameters = ( this._typeParameters ) || ( new core.DartList.literal<UnlinkedTypeParamBuilder>() );
    }
    set typeParameters(value : core.DartList<UnlinkedTypeParamBuilder>) {
        this._typeParameters = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,name? : string,nameOffset? : number,parameters? : core.DartList<UnlinkedParamBuilder>,returnType? : EntityRefBuilder,style? : lib3.TypedefStyle,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>}) {
    }
    @defaultConstructor
    UnlinkedTypedefBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,name? : string,nameOffset? : number,parameters? : core.DartList<UnlinkedParamBuilder>,returnType? : EntityRefBuilder,style? : lib3.TypedefStyle,typeParameters? : core.DartList<UnlinkedTypeParamBuilder>}) {
        let {annotations,codeRange,documentationComment,name,nameOffset,parameters,returnType,style,typeParameters} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._codeRange = codeRange;
        this._documentationComment = documentationComment;
        this._name = name;
        this._nameOffset = nameOffset;
        this._parameters = parameters;
        this._returnType = returnType;
        this._style = style;
        this._typeParameters = typeParameters;
    }
    flushInformative() : void {
        ((_457_)=>(!!_457_)?_457_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        this._codeRange = null;
        this._documentationComment = null;
        this._nameOffset = null;
        ((_458_)=>(!!_458_)?_458_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._parameters);
        ((_459_)=>(!!_459_)?_459_.flushInformative():null)(this._returnType);
        ((_460_)=>(!!_460_)?_460_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._typeParameters);
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addBool(this._returnType != null);
        ((_461_)=>(!!_461_)?_461_.collectApiSignature(signature):null)(this._returnType);
        if (this._parameters == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._parameters.length);
            for(let x of this._parameters) {
                ((_462_)=>(!!_462_)?_462_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_463_)=>(!!_463_)?_463_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._typeParameters == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._typeParameters.length);
            for(let x of this._typeParameters) {
                ((_464_)=>(!!_464_)?_464_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addInt(op(Op.EQUALS,this._style,null) ? 0 : this._style.index);
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_codeRange : any;
        let offset_documentationComment : any;
        let offset_name : any;
        let offset_parameters : any;
        let offset_returnType : any;
        let offset_typeParameters : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (this._documentationComment != null) {
            offset_documentationComment = this._documentationComment.finish(fbBuilder);
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        if (!(this._parameters == null || this._parameters.isEmpty)) {
            offset_parameters = fbBuilder.writeList(this._parameters.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._returnType != null) {
            offset_returnType = this._returnType.finish(fbBuilder);
        }
        if (!(this._typeParameters == null || this._typeParameters.isEmpty)) {
            offset_typeParameters = fbBuilder.writeList(this._typeParameters.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(4,offset_annotations);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(7,offset_codeRange);
        }
        if (offset_documentationComment != null) {
            fbBuilder.addOffset(6,offset_documentationComment);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        if (offset_parameters != null) {
            fbBuilder.addOffset(3,offset_parameters);
        }
        if (offset_returnType != null) {
            fbBuilder.addOffset(2,offset_returnType);
        }
        if (this._style != null && this._style != lib3.TypedefStyle.functionType) {
            fbBuilder.addUint8(8,this._style.index);
        }
        if (offset_typeParameters != null) {
            fbBuilder.addOffset(5,offset_typeParameters);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedTypedefReader {
    export type Constructors = '_UnlinkedTypedefReader';
    export type Interface = Omit<_UnlinkedTypedefReader, Constructors>;
}
@DartClass
export class _UnlinkedTypedefReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedTypedefReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedTypedefImpl {
        return new _UnlinkedTypedefImpl(bc,offset);
    }
}

export namespace _UnlinkedTypedefImpl {
    export type Constructors = '_UnlinkedTypedefImpl';
    export type Interface = Omit<_UnlinkedTypedefImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedTypedef)
@With(_UnlinkedTypedefMixin)
export class _UnlinkedTypedefImpl extends core.DartObject implements lib3.UnlinkedTypedef.Interface,_UnlinkedTypedefMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedTypedefImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _codeRange : lib3.CodeRange;

    _documentationComment : lib3.UnlinkedDocumentationComment;

    _name : string;

    _nameOffset : number;

    _parameters : core.DartList<lib3.UnlinkedParam>;

    _returnType : lib3.EntityRef;

    _style : lib3.TypedefStyle;

    _typeParameters : core.DartList<lib3.UnlinkedTypeParam>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,7,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : lib3.UnlinkedDocumentationComment {
        this._documentationComment = ( this._documentationComment ) || ( new _UnlinkedDocumentationCommentReader().vTableGet(this._bc,this._bcOffset,6,null) );
        return this._documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<lib3.UnlinkedParam> {
        this._parameters = ( this._parameters ) || ( new bare.createInstance(any,null,new _UnlinkedParamReader()).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<lib3.UnlinkedParam>()) );
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : lib3.EntityRef {
        this._returnType = ( this._returnType ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,2,null) );
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get style() : lib3.TypedefStyle {
        this._style = ( this._style ) || ( new _TypedefStyleReader().vTableGet(this._bc,this._bcOffset,8,lib3.TypedefStyle.functionType) );
        return this._style;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<lib3.UnlinkedTypeParam> {
        this._typeParameters = ( this._typeParameters ) || ( new bare.createInstance(any,null,new _UnlinkedTypeParamReader()).vTableGet(this._bc,this._bcOffset,5,new core.DartList.literal<lib3.UnlinkedTypeParam>()) );
        return this._typeParameters;
    }
}

export namespace _UnlinkedTypedefMixin {
    export type Constructors = '_UnlinkedTypedefMixin';
    export type Interface = Omit<_UnlinkedTypedefMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedTypedef)
export class _UnlinkedTypedefMixin implements lib3.UnlinkedTypedef.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.documentationComment != null) _result.set("documentationComment",this.documentationComment.toJson());
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        if (this.parameters.isNotEmpty) _result.set("parameters",this.parameters.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.returnType != null) _result.set("returnType",this.returnType.toJson());
        if (this.style != lib3.TypedefStyle.functionType) _result.set("style",new core.DartString(this.style.toString()).split('.')[1]);
        if (this.typeParameters.isNotEmpty) _result.set("typeParameters",this.typeParameters.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["codeRange",this.codeRange],
            ["documentationComment",this.documentationComment],
            ["name",this.name],
            ["nameOffset",this.nameOffset],
            ["parameters",this.parameters],
            ["returnType",this.returnType],
            ["style",this.style],
            ["typeParameters",this.typeParameters]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedTypedefMixin() {
    }
}

export namespace UnlinkedTypeParamBuilder {
    export type Constructors = 'UnlinkedTypeParamBuilder';
    export type Interface = Omit<UnlinkedTypeParamBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedTypeParam)
@With(_UnlinkedTypeParamMixin)
export class UnlinkedTypeParamBuilder extends core.DartObject implements lib3.UnlinkedTypeParam.Interface,_UnlinkedTypeParamMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _bound : EntityRefBuilder;

    _codeRange : CodeRangeBuilder;

    _name : string;

    _nameOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bound() : EntityRefBuilder {
        return this._bound;
    }
    set bound(value : EntityRefBuilder) {
        this._bound = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,bound? : EntityRefBuilder,codeRange? : CodeRangeBuilder,name? : string,nameOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedTypeParamBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,bound? : EntityRefBuilder,codeRange? : CodeRangeBuilder,name? : string,nameOffset? : number}) {
        let {annotations,bound,codeRange,name,nameOffset} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._bound = bound;
        this._codeRange = codeRange;
        this._name = name;
        this._nameOffset = nameOffset;
    }
    flushInformative() : void {
        ((_465_)=>(!!_465_)?_465_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        ((_466_)=>(!!_466_)?_466_.flushInformative():null)(this._bound);
        this._codeRange = null;
        this._nameOffset = null;
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addBool(this._bound != null);
        ((_467_)=>(!!_467_)?_467_.collectApiSignature(signature):null)(this._bound);
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_468_)=>(!!_468_)?_468_.collectApiSignature(signature):null)(x);
            }
        }
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_bound : any;
        let offset_codeRange : any;
        let offset_name : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._bound != null) {
            offset_bound = this._bound.finish(fbBuilder);
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(3,offset_annotations);
        }
        if (offset_bound != null) {
            fbBuilder.addOffset(2,offset_bound);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(4,offset_codeRange);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedTypeParamReader {
    export type Constructors = '_UnlinkedTypeParamReader';
    export type Interface = Omit<_UnlinkedTypeParamReader, Constructors>;
}
@DartClass
export class _UnlinkedTypeParamReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedTypeParamReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedTypeParamImpl {
        return new _UnlinkedTypeParamImpl(bc,offset);
    }
}

export namespace _UnlinkedTypeParamImpl {
    export type Constructors = '_UnlinkedTypeParamImpl';
    export type Interface = Omit<_UnlinkedTypeParamImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedTypeParam)
@With(_UnlinkedTypeParamMixin)
export class _UnlinkedTypeParamImpl extends core.DartObject implements lib3.UnlinkedTypeParam.Interface,_UnlinkedTypeParamMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedTypeParamImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _bound : lib3.EntityRef;

    _codeRange : lib3.CodeRange;

    _name : string;

    _nameOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bound() : lib3.EntityRef {
        this._bound = ( this._bound ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,2,null) );
        return this._bound;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,4,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
}

export namespace _UnlinkedTypeParamMixin {
    export type Constructors = '_UnlinkedTypeParamMixin';
    export type Interface = Omit<_UnlinkedTypeParamMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedTypeParam)
export class _UnlinkedTypeParamMixin implements lib3.UnlinkedTypeParam.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.annotations.isNotEmpty) _result.set("annotations",this.annotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.bound != null) _result.set("bound",this.bound.toJson());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.name != '') _result.set("name",this.name);
        if (this.nameOffset != 0) _result.set("nameOffset",this.nameOffset);
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["annotations",this.annotations],
            ["bound",this.bound],
            ["codeRange",this.codeRange],
            ["name",this.name],
            ["nameOffset",this.nameOffset]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedTypeParamMixin() {
    }
}

export namespace UnlinkedUnitBuilder {
    export type Constructors = 'UnlinkedUnitBuilder';
    export type Interface = Omit<UnlinkedUnitBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedUnit)
@With(_UnlinkedUnitMixin)
export class UnlinkedUnitBuilder extends core.DartObject implements lib3.UnlinkedUnit.Interface,_UnlinkedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _apiSignature : core.DartList<number>;

    _classes : core.DartList<UnlinkedClassBuilder>;

    _codeRange : CodeRangeBuilder;

    _enums : core.DartList<UnlinkedEnumBuilder>;

    _executables : core.DartList<UnlinkedExecutableBuilder>;

    _exports : core.DartList<UnlinkedExportNonPublicBuilder>;

    _imports : core.DartList<UnlinkedImportBuilder>;

    _isPartOf : boolean;

    _libraryAnnotations : core.DartList<UnlinkedExprBuilder>;

    _libraryDocumentationComment : UnlinkedDocumentationCommentBuilder;

    _libraryName : string;

    _libraryNameLength : number;

    _libraryNameOffset : number;

    _lineStarts : core.DartList<number>;

    _parts : core.DartList<UnlinkedPartBuilder>;

    _publicNamespace : UnlinkedPublicNamespaceBuilder;

    _references : core.DartList<UnlinkedReferenceBuilder>;

    _typedefs : core.DartList<UnlinkedTypedefBuilder>;

    _variables : core.DartList<UnlinkedVariableBuilder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get apiSignature() : core.DartList<number> {
        return this._apiSignature = ( this._apiSignature ) || ( new core.DartList.literal<number>() );
    }
    set apiSignature(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._apiSignature = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get classes() : core.DartList<UnlinkedClassBuilder> {
        return this._classes = ( this._classes ) || ( new core.DartList.literal<UnlinkedClassBuilder>() );
    }
    set classes(value : core.DartList<UnlinkedClassBuilder>) {
        this._classes = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enums() : core.DartList<UnlinkedEnumBuilder> {
        return this._enums = ( this._enums ) || ( new core.DartList.literal<UnlinkedEnumBuilder>() );
    }
    set enums(value : core.DartList<UnlinkedEnumBuilder>) {
        this._enums = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get executables() : core.DartList<UnlinkedExecutableBuilder> {
        return this._executables = ( this._executables ) || ( new core.DartList.literal<UnlinkedExecutableBuilder>() );
    }
    set executables(value : core.DartList<UnlinkedExecutableBuilder>) {
        this._executables = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exports() : core.DartList<UnlinkedExportNonPublicBuilder> {
        return this._exports = ( this._exports ) || ( new core.DartList.literal<UnlinkedExportNonPublicBuilder>() );
    }
    set exports(value : core.DartList<UnlinkedExportNonPublicBuilder>) {
        this._exports = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fallbackModePath() : string {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get imports() : core.DartList<UnlinkedImportBuilder> {
        return this._imports = ( this._imports ) || ( new core.DartList.literal<UnlinkedImportBuilder>() );
    }
    set imports(value : core.DartList<UnlinkedImportBuilder>) {
        this._imports = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPartOf() : boolean {
        return this._isPartOf = ( this._isPartOf ) || ( false );
    }
    set isPartOf(value : boolean) {
        this._isPartOf = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryAnnotations() : core.DartList<UnlinkedExprBuilder> {
        return this._libraryAnnotations = ( this._libraryAnnotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set libraryAnnotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._libraryAnnotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryDocumentationComment() : UnlinkedDocumentationCommentBuilder {
        return this._libraryDocumentationComment;
    }
    set libraryDocumentationComment(value : UnlinkedDocumentationCommentBuilder) {
        this._libraryDocumentationComment = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryName() : string {
        return this._libraryName = ( this._libraryName ) || ( '' );
    }
    set libraryName(value : string) {
        this._libraryName = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryNameLength() : number {
        return this._libraryNameLength = ( this._libraryNameLength ) || ( 0 );
    }
    set libraryNameLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._libraryNameLength = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryNameOffset() : number {
        return this._libraryNameOffset = ( this._libraryNameOffset ) || ( 0 );
    }
    set libraryNameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._libraryNameOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lineStarts() : core.DartList<number> {
        return this._lineStarts = ( this._lineStarts ) || ( new core.DartList.literal<number>() );
    }
    set lineStarts(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.every((e) => e >= 0)); */;
        this._lineStarts = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<UnlinkedPartBuilder> {
        return this._parts = ( this._parts ) || ( new core.DartList.literal<UnlinkedPartBuilder>() );
    }
    set parts(value : core.DartList<UnlinkedPartBuilder>) {
        this._parts = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get publicNamespace() : UnlinkedPublicNamespaceBuilder {
        return this._publicNamespace;
    }
    set publicNamespace(value : UnlinkedPublicNamespaceBuilder) {
        this._publicNamespace = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get references() : core.DartList<UnlinkedReferenceBuilder> {
        return this._references = ( this._references ) || ( new core.DartList.literal<UnlinkedReferenceBuilder>() );
    }
    set references(value : core.DartList<UnlinkedReferenceBuilder>) {
        this._references = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typedefs() : core.DartList<UnlinkedTypedefBuilder> {
        return this._typedefs = ( this._typedefs ) || ( new core.DartList.literal<UnlinkedTypedefBuilder>() );
    }
    set typedefs(value : core.DartList<UnlinkedTypedefBuilder>) {
        this._typedefs = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variables() : core.DartList<UnlinkedVariableBuilder> {
        return this._variables = ( this._variables ) || ( new core.DartList.literal<UnlinkedVariableBuilder>() );
    }
    set variables(value : core.DartList<UnlinkedVariableBuilder>) {
        this._variables = value;
    }
    constructor(_namedArguments? : {apiSignature? : core.DartList<number>,classes? : core.DartList<UnlinkedClassBuilder>,codeRange? : CodeRangeBuilder,enums? : core.DartList<UnlinkedEnumBuilder>,executables? : core.DartList<UnlinkedExecutableBuilder>,exports? : core.DartList<UnlinkedExportNonPublicBuilder>,imports? : core.DartList<UnlinkedImportBuilder>,isPartOf? : boolean,libraryAnnotations? : core.DartList<UnlinkedExprBuilder>,libraryDocumentationComment? : UnlinkedDocumentationCommentBuilder,libraryName? : string,libraryNameLength? : number,libraryNameOffset? : number,lineStarts? : core.DartList<number>,parts? : core.DartList<UnlinkedPartBuilder>,publicNamespace? : UnlinkedPublicNamespaceBuilder,references? : core.DartList<UnlinkedReferenceBuilder>,typedefs? : core.DartList<UnlinkedTypedefBuilder>,variables? : core.DartList<UnlinkedVariableBuilder>}) {
    }
    @defaultConstructor
    UnlinkedUnitBuilder(_namedArguments? : {apiSignature? : core.DartList<number>,classes? : core.DartList<UnlinkedClassBuilder>,codeRange? : CodeRangeBuilder,enums? : core.DartList<UnlinkedEnumBuilder>,executables? : core.DartList<UnlinkedExecutableBuilder>,exports? : core.DartList<UnlinkedExportNonPublicBuilder>,imports? : core.DartList<UnlinkedImportBuilder>,isPartOf? : boolean,libraryAnnotations? : core.DartList<UnlinkedExprBuilder>,libraryDocumentationComment? : UnlinkedDocumentationCommentBuilder,libraryName? : string,libraryNameLength? : number,libraryNameOffset? : number,lineStarts? : core.DartList<number>,parts? : core.DartList<UnlinkedPartBuilder>,publicNamespace? : UnlinkedPublicNamespaceBuilder,references? : core.DartList<UnlinkedReferenceBuilder>,typedefs? : core.DartList<UnlinkedTypedefBuilder>,variables? : core.DartList<UnlinkedVariableBuilder>}) {
        let {apiSignature,classes,codeRange,enums,executables,exports,imports,isPartOf,libraryAnnotations,libraryDocumentationComment,libraryName,libraryNameLength,libraryNameOffset,lineStarts,parts,publicNamespace,references,typedefs,variables} = Object.assign({
        }, _namedArguments );
        this._apiSignature = apiSignature;
        this._classes = classes;
        this._codeRange = codeRange;
        this._enums = enums;
        this._executables = executables;
        this._exports = exports;
        this._imports = imports;
        this._isPartOf = isPartOf;
        this._libraryAnnotations = libraryAnnotations;
        this._libraryDocumentationComment = libraryDocumentationComment;
        this._libraryName = libraryName;
        this._libraryNameLength = libraryNameLength;
        this._libraryNameOffset = libraryNameOffset;
        this._lineStarts = lineStarts;
        this._parts = parts;
        this._publicNamespace = publicNamespace;
        this._references = references;
        this._typedefs = typedefs;
        this._variables = variables;
    }
    flushInformative() : void {
        ((_469_)=>(!!_469_)?_469_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._classes);
        this._codeRange = null;
        ((_470_)=>(!!_470_)?_470_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._enums);
        ((_471_)=>(!!_471_)?_471_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._executables);
        ((_472_)=>(!!_472_)?_472_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._exports);
        ((_473_)=>(!!_473_)?_473_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._imports);
        ((_474_)=>(!!_474_)?_474_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._libraryAnnotations);
        this._libraryDocumentationComment = null;
        this._libraryNameLength = null;
        this._libraryNameOffset = null;
        this._lineStarts = null;
        ((_475_)=>(!!_475_)?_475_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._parts);
        ((_476_)=>(!!_476_)?_476_.flushInformative():null)(this._publicNamespace);
        ((_477_)=>(!!_477_)?_477_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._references);
        ((_478_)=>(!!_478_)?_478_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._typedefs);
        ((_479_)=>(!!_479_)?_479_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._variables);
    }
    collectApiSignature(signature : any) : void {
        signature.addBool(this._publicNamespace != null);
        ((_480_)=>(!!_480_)?_480_.collectApiSignature(signature):null)(this._publicNamespace);
        if (this._references == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._references.length);
            for(let x of this._references) {
                ((_481_)=>(!!_481_)?_481_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._classes == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._classes.length);
            for(let x of this._classes) {
                ((_482_)=>(!!_482_)?_482_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._variables == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._variables.length);
            for(let x of this._variables) {
                ((_483_)=>(!!_483_)?_483_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._executables == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._executables.length);
            for(let x of this._executables) {
                ((_484_)=>(!!_484_)?_484_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._imports == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._imports.length);
            for(let x of this._imports) {
                ((_485_)=>(!!_485_)?_485_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addString((this._libraryName || ''));
        if (this._typedefs == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._typedefs.length);
            for(let x of this._typedefs) {
                ((_486_)=>(!!_486_)?_486_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._parts == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._parts.length);
            for(let x of this._parts) {
                ((_487_)=>(!!_487_)?_487_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._enums == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._enums.length);
            for(let x of this._enums) {
                ((_488_)=>(!!_488_)?_488_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._exports == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._exports.length);
            for(let x of this._exports) {
                ((_489_)=>(!!_489_)?_489_.collectApiSignature(signature):null)(x);
            }
        }
        if (this._libraryAnnotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._libraryAnnotations.length);
            for(let x of this._libraryAnnotations) {
                ((_490_)=>(!!_490_)?_490_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addBool(this._isPartOf == true);
        if (this._apiSignature == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._apiSignature.length);
            for(let x of this._apiSignature) {
                signature.addInt(x);
            }
        }
    }
    toBuffer() : core.DartList<number> {
        let fbBuilder : any = new bare.createInstance(any,null);
        return fbBuilder.finish(this.finish(fbBuilder),"UUnt");
    }
    finish(fbBuilder : any) : any {
        let offset_apiSignature : any;
        let offset_classes : any;
        let offset_codeRange : any;
        let offset_enums : any;
        let offset_executables : any;
        let offset_exports : any;
        let offset_imports : any;
        let offset_libraryAnnotations : any;
        let offset_libraryDocumentationComment : any;
        let offset_libraryName : any;
        let offset_lineStarts : any;
        let offset_parts : any;
        let offset_publicNamespace : any;
        let offset_references : any;
        let offset_typedefs : any;
        let offset_variables : any;
        if (!(this._apiSignature == null || this._apiSignature.isEmpty)) {
            offset_apiSignature = fbBuilder.writeListUint32(this._apiSignature);
        }
        if (!(this._classes == null || this._classes.isEmpty)) {
            offset_classes = fbBuilder.writeList(this._classes.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (!(this._enums == null || this._enums.isEmpty)) {
            offset_enums = fbBuilder.writeList(this._enums.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._executables == null || this._executables.isEmpty)) {
            offset_executables = fbBuilder.writeList(this._executables.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._exports == null || this._exports.isEmpty)) {
            offset_exports = fbBuilder.writeList(this._exports.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._imports == null || this._imports.isEmpty)) {
            offset_imports = fbBuilder.writeList(this._imports.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._libraryAnnotations == null || this._libraryAnnotations.isEmpty)) {
            offset_libraryAnnotations = fbBuilder.writeList(this._libraryAnnotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._libraryDocumentationComment != null) {
            offset_libraryDocumentationComment = this._libraryDocumentationComment.finish(fbBuilder);
        }
        if (this._libraryName != null) {
            offset_libraryName = fbBuilder.writeString(this._libraryName);
        }
        if (!(this._lineStarts == null || this._lineStarts.isEmpty)) {
            offset_lineStarts = fbBuilder.writeListUint32(this._lineStarts);
        }
        if (!(this._parts == null || this._parts.isEmpty)) {
            offset_parts = fbBuilder.writeList(this._parts.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._publicNamespace != null) {
            offset_publicNamespace = this._publicNamespace.finish(fbBuilder);
        }
        if (!(this._references == null || this._references.isEmpty)) {
            offset_references = fbBuilder.writeList(this._references.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._typedefs == null || this._typedefs.isEmpty)) {
            offset_typedefs = fbBuilder.writeList(this._typedefs.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (!(this._variables == null || this._variables.isEmpty)) {
            offset_variables = fbBuilder.writeList(this._variables.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        fbBuilder.startTable();
        if (offset_apiSignature != null) {
            fbBuilder.addOffset(19,offset_apiSignature);
        }
        if (offset_classes != null) {
            fbBuilder.addOffset(2,offset_classes);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(15,offset_codeRange);
        }
        if (offset_enums != null) {
            fbBuilder.addOffset(12,offset_enums);
        }
        if (offset_executables != null) {
            fbBuilder.addOffset(4,offset_executables);
        }
        if (offset_exports != null) {
            fbBuilder.addOffset(13,offset_exports);
        }
        if (offset_imports != null) {
            fbBuilder.addOffset(5,offset_imports);
        }
        if (this._isPartOf == true) {
            fbBuilder.addBool(18,true);
        }
        if (offset_libraryAnnotations != null) {
            fbBuilder.addOffset(14,offset_libraryAnnotations);
        }
        if (offset_libraryDocumentationComment != null) {
            fbBuilder.addOffset(9,offset_libraryDocumentationComment);
        }
        if (offset_libraryName != null) {
            fbBuilder.addOffset(6,offset_libraryName);
        }
        if (this._libraryNameLength != null && this._libraryNameLength != 0) {
            fbBuilder.addUint32(7,this._libraryNameLength);
        }
        if (this._libraryNameOffset != null && this._libraryNameOffset != 0) {
            fbBuilder.addUint32(8,this._libraryNameOffset);
        }
        if (offset_lineStarts != null) {
            fbBuilder.addOffset(17,offset_lineStarts);
        }
        if (offset_parts != null) {
            fbBuilder.addOffset(11,offset_parts);
        }
        if (offset_publicNamespace != null) {
            fbBuilder.addOffset(0,offset_publicNamespace);
        }
        if (offset_references != null) {
            fbBuilder.addOffset(1,offset_references);
        }
        if (offset_typedefs != null) {
            fbBuilder.addOffset(10,offset_typedefs);
        }
        if (offset_variables != null) {
            fbBuilder.addOffset(3,offset_variables);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedExprAssignOperatorReader {
    export type Constructors = '_UnlinkedExprAssignOperatorReader';
    export type Interface = Omit<_UnlinkedExprAssignOperatorReader, Constructors>;
}
@DartClass
export class _UnlinkedExprAssignOperatorReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExprAssignOperatorReader() {
        super.DartObject();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : any,offset : number) : lib3.UnlinkedExprAssignOperator {
        let index : number = new bare.createInstance(any,null).read(bc,offset);
        return index < lib3.UnlinkedExprAssignOperator.values.length ? lib3.UnlinkedExprAssignOperator.values[index] : lib3.UnlinkedExprAssignOperator.assign;
    }
}

export namespace _UnlinkedUnitReader {
    export type Constructors = '_UnlinkedUnitReader';
    export type Interface = Omit<_UnlinkedUnitReader, Constructors>;
}
@DartClass
export class _UnlinkedUnitReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedUnitReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedUnitImpl {
        return new _UnlinkedUnitImpl(bc,offset);
    }
}

export namespace _UnlinkedUnitImpl {
    export type Constructors = '_UnlinkedUnitImpl';
    export type Interface = Omit<_UnlinkedUnitImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedUnit)
@With(_UnlinkedUnitMixin)
export class _UnlinkedUnitImpl extends core.DartObject implements lib3.UnlinkedUnit.Interface,_UnlinkedUnitMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedUnitImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _apiSignature : core.DartList<number>;

    _classes : core.DartList<lib3.UnlinkedClass>;

    _codeRange : lib3.CodeRange;

    _enums : core.DartList<lib3.UnlinkedEnum>;

    _executables : core.DartList<lib3.UnlinkedExecutable>;

    _exports : core.DartList<lib3.UnlinkedExportNonPublic>;

    _imports : core.DartList<lib3.UnlinkedImport>;

    _isPartOf : boolean;

    _libraryAnnotations : core.DartList<lib3.UnlinkedExpr>;

    _libraryDocumentationComment : lib3.UnlinkedDocumentationComment;

    _libraryName : string;

    _libraryNameLength : number;

    _libraryNameOffset : number;

    _lineStarts : core.DartList<number>;

    _parts : core.DartList<lib3.UnlinkedPart>;

    _publicNamespace : lib3.UnlinkedPublicNamespace;

    _references : core.DartList<lib3.UnlinkedReference>;

    _typedefs : core.DartList<lib3.UnlinkedTypedef>;

    _variables : core.DartList<lib3.UnlinkedVariable>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get apiSignature() : core.DartList<number> {
        this._apiSignature = ( this._apiSignature ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,19,new core.DartList.literal<number>()) );
        return this._apiSignature;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get classes() : core.DartList<lib3.UnlinkedClass> {
        this._classes = ( this._classes ) || ( new bare.createInstance(any,null,new _UnlinkedClassReader()).vTableGet(this._bc,this._bcOffset,2,new core.DartList.literal<lib3.UnlinkedClass>()) );
        return this._classes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,15,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enums() : core.DartList<lib3.UnlinkedEnum> {
        this._enums = ( this._enums ) || ( new bare.createInstance(any,null,new _UnlinkedEnumReader()).vTableGet(this._bc,this._bcOffset,12,new core.DartList.literal<lib3.UnlinkedEnum>()) );
        return this._enums;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get executables() : core.DartList<lib3.UnlinkedExecutable> {
        this._executables = ( this._executables ) || ( new bare.createInstance(any,null,new _UnlinkedExecutableReader()).vTableGet(this._bc,this._bcOffset,4,new core.DartList.literal<lib3.UnlinkedExecutable>()) );
        return this._executables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exports() : core.DartList<lib3.UnlinkedExportNonPublic> {
        this._exports = ( this._exports ) || ( new bare.createInstance(any,null,new _UnlinkedExportNonPublicReader()).vTableGet(this._bc,this._bcOffset,13,new core.DartList.literal<lib3.UnlinkedExportNonPublic>()) );
        return this._exports;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fallbackModePath() : string {
        return throw new core.UnimplementedError('attempt to access deprecated field');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get imports() : core.DartList<lib3.UnlinkedImport> {
        this._imports = ( this._imports ) || ( new bare.createInstance(any,null,new _UnlinkedImportReader()).vTableGet(this._bc,this._bcOffset,5,new core.DartList.literal<lib3.UnlinkedImport>()) );
        return this._imports;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPartOf() : boolean {
        this._isPartOf = ( this._isPartOf ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,18,false) );
        return this._isPartOf;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryAnnotations() : core.DartList<lib3.UnlinkedExpr> {
        this._libraryAnnotations = ( this._libraryAnnotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,14,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._libraryAnnotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryDocumentationComment() : lib3.UnlinkedDocumentationComment {
        this._libraryDocumentationComment = ( this._libraryDocumentationComment ) || ( new _UnlinkedDocumentationCommentReader().vTableGet(this._bc,this._bcOffset,9,null) );
        return this._libraryDocumentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryName() : string {
        this._libraryName = ( this._libraryName ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,'') );
        return this._libraryName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryNameLength() : number {
        this._libraryNameLength = ( this._libraryNameLength ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,7,0) );
        return this._libraryNameLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryNameOffset() : number {
        this._libraryNameOffset = ( this._libraryNameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,8,0) );
        return this._libraryNameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lineStarts() : core.DartList<number> {
        this._lineStarts = ( this._lineStarts ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,17,new core.DartList.literal<number>()) );
        return this._lineStarts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<lib3.UnlinkedPart> {
        this._parts = ( this._parts ) || ( new bare.createInstance(any,null,new _UnlinkedPartReader()).vTableGet(this._bc,this._bcOffset,11,new core.DartList.literal<lib3.UnlinkedPart>()) );
        return this._parts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get publicNamespace() : lib3.UnlinkedPublicNamespace {
        this._publicNamespace = ( this._publicNamespace ) || ( new _UnlinkedPublicNamespaceReader().vTableGet(this._bc,this._bcOffset,0,null) );
        return this._publicNamespace;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get references() : core.DartList<lib3.UnlinkedReference> {
        this._references = ( this._references ) || ( new bare.createInstance(any,null,new _UnlinkedReferenceReader()).vTableGet(this._bc,this._bcOffset,1,new core.DartList.literal<lib3.UnlinkedReference>()) );
        return this._references;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typedefs() : core.DartList<lib3.UnlinkedTypedef> {
        this._typedefs = ( this._typedefs ) || ( new bare.createInstance(any,null,new _UnlinkedTypedefReader()).vTableGet(this._bc,this._bcOffset,10,new core.DartList.literal<lib3.UnlinkedTypedef>()) );
        return this._typedefs;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variables() : core.DartList<lib3.UnlinkedVariable> {
        this._variables = ( this._variables ) || ( new bare.createInstance(any,null,new _UnlinkedVariableReader()).vTableGet(this._bc,this._bcOffset,3,new core.DartList.literal<lib3.UnlinkedVariable>()) );
        return this._variables;
    }
}

export namespace _UnlinkedUnitMixin {
    export type Constructors = '_UnlinkedUnitMixin';
    export type Interface = Omit<_UnlinkedUnitMixin, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedUnit)
export class _UnlinkedUnitMixin implements lib3.UnlinkedUnit.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,core.DartObject> {
        let _result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (this.apiSignature.isNotEmpty) _result.set("apiSignature",this.apiSignature);
        if (this.classes.isNotEmpty) _result.set("classes",this.classes.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.codeRange != null) _result.set("codeRange",this.codeRange.toJson());
        if (this.enums.isNotEmpty) _result.set("enums",this.enums.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.executables.isNotEmpty) _result.set("executables",this.executables.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.exports.isNotEmpty) _result.set("exports",this.exports.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.imports.isNotEmpty) _result.set("imports",this.imports.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.isPartOf != false) _result.set("isPartOf",this.isPartOf);
        if (this.libraryAnnotations.isNotEmpty) _result.set("libraryAnnotations",this.libraryAnnotations.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.libraryDocumentationComment != null) _result.set("libraryDocumentationComment",this.libraryDocumentationComment.toJson());
        if (this.libraryName != '') _result.set("libraryName",this.libraryName);
        if (this.libraryNameLength != 0) _result.set("libraryNameLength",this.libraryNameLength);
        if (this.libraryNameOffset != 0) _result.set("libraryNameOffset",this.libraryNameOffset);
        if (this.lineStarts.isNotEmpty) _result.set("lineStarts",this.lineStarts);
        if (this.parts.isNotEmpty) _result.set("parts",this.parts.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.publicNamespace != null) _result.set("publicNamespace",this.publicNamespace.toJson());
        if (this.references.isNotEmpty) _result.set("references",this.references.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.typedefs.isNotEmpty) _result.set("typedefs",this.typedefs.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        if (this.variables.isNotEmpty) _result.set("variables",this.variables.map((_value : any) =>  {
            return _value.toJson();
        }).toList());
        return _result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMap() : core.DartMap<string,core.DartObject> {
        return new core.DartMap.literal([
            ["apiSignature",this.apiSignature],
            ["classes",this.classes],
            ["codeRange",this.codeRange],
            ["enums",this.enums],
            ["executables",this.executables],
            ["exports",this.exports],
            ["imports",this.imports],
            ["isPartOf",this.isPartOf],
            ["libraryAnnotations",this.libraryAnnotations],
            ["libraryDocumentationComment",this.libraryDocumentationComment],
            ["libraryName",this.libraryName],
            ["libraryNameLength",this.libraryNameLength],
            ["libraryNameOffset",this.libraryNameOffset],
            ["lineStarts",this.lineStarts],
            ["parts",this.parts],
            ["publicNamespace",this.publicNamespace],
            ["references",this.references],
            ["typedefs",this.typedefs],
            ["variables",this.variables]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedUnitMixin() {
    }
}

export namespace UnlinkedVariableBuilder {
    export type Constructors = 'UnlinkedVariableBuilder';
    export type Interface = Omit<UnlinkedVariableBuilder, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedVariable)
@With(_UnlinkedVariableMixin)
export class UnlinkedVariableBuilder extends core.DartObject implements lib3.UnlinkedVariable.Interface,_UnlinkedVariableMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _annotations : core.DartList<UnlinkedExprBuilder>;

    _codeRange : CodeRangeBuilder;

    _documentationComment : UnlinkedDocumentationCommentBuilder;

    _inferredTypeSlot : number;

    _inheritsCovariantSlot : number;

    _initializer : UnlinkedExecutableBuilder;

    _isConst : boolean;

    _isCovariant : boolean;

    _isFinal : boolean;

    _isStatic : boolean;

    _name : string;

    _nameOffset : number;

    _propagatedTypeSlot : number;

    _type : EntityRefBuilder;

    _visibleLength : number;

    _visibleOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<UnlinkedExprBuilder> {
        return this._annotations = ( this._annotations ) || ( new core.DartList.literal<UnlinkedExprBuilder>() );
    }
    set annotations(value : core.DartList<UnlinkedExprBuilder>) {
        this._annotations = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : CodeRangeBuilder {
        return this._codeRange;
    }
    set codeRange(value : CodeRangeBuilder) {
        this._codeRange = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : UnlinkedDocumentationCommentBuilder {
        return this._documentationComment;
    }
    set documentationComment(value : UnlinkedDocumentationCommentBuilder) {
        this._documentationComment = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inferredTypeSlot() : number {
        return this._inferredTypeSlot = ( this._inferredTypeSlot ) || ( 0 );
    }
    set inferredTypeSlot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._inferredTypeSlot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritsCovariantSlot() : number {
        return this._inheritsCovariantSlot = ( this._inheritsCovariantSlot ) || ( 0 );
    }
    set inheritsCovariantSlot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._inheritsCovariantSlot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : UnlinkedExecutableBuilder {
        return this._initializer;
    }
    set initializer(value : UnlinkedExecutableBuilder) {
        this._initializer = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this._isConst = ( this._isConst ) || ( false );
    }
    set isConst(value : boolean) {
        this._isConst = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        return this._isCovariant = ( this._isCovariant ) || ( false );
    }
    set isCovariant(value : boolean) {
        this._isCovariant = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return this._isFinal = ( this._isFinal ) || ( false );
    }
    set isFinal(value : boolean) {
        this._isFinal = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this._isStatic = ( this._isStatic ) || ( false );
    }
    set isStatic(value : boolean) {
        this._isStatic = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name = ( this._name ) || ( '' );
    }
    set name(value : string) {
        this._name = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset = ( this._nameOffset ) || ( 0 );
    }
    set nameOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._nameOffset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedTypeSlot() : number {
        return this._propagatedTypeSlot = ( this._propagatedTypeSlot ) || ( 0 );
    }
    set propagatedTypeSlot(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._propagatedTypeSlot = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : EntityRefBuilder {
        return this._type;
    }
    set type(value : EntityRefBuilder) {
        this._type = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleLength() : number {
        return this._visibleLength = ( this._visibleLength ) || ( 0 );
    }
    set visibleLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._visibleLength = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleOffset() : number {
        return this._visibleOffset = ( this._visibleOffset ) || ( 0 );
    }
    set visibleOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0); */;
        this._visibleOffset = value;
    }
    constructor(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,inferredTypeSlot? : number,inheritsCovariantSlot? : number,initializer? : UnlinkedExecutableBuilder,isConst? : boolean,isCovariant? : boolean,isFinal? : boolean,isStatic? : boolean,name? : string,nameOffset? : number,propagatedTypeSlot? : number,type? : EntityRefBuilder,visibleLength? : number,visibleOffset? : number}) {
    }
    @defaultConstructor
    UnlinkedVariableBuilder(_namedArguments? : {annotations? : core.DartList<UnlinkedExprBuilder>,codeRange? : CodeRangeBuilder,documentationComment? : UnlinkedDocumentationCommentBuilder,inferredTypeSlot? : number,inheritsCovariantSlot? : number,initializer? : UnlinkedExecutableBuilder,isConst? : boolean,isCovariant? : boolean,isFinal? : boolean,isStatic? : boolean,name? : string,nameOffset? : number,propagatedTypeSlot? : number,type? : EntityRefBuilder,visibleLength? : number,visibleOffset? : number}) {
        let {annotations,codeRange,documentationComment,inferredTypeSlot,inheritsCovariantSlot,initializer,isConst,isCovariant,isFinal,isStatic,name,nameOffset,propagatedTypeSlot,type,visibleLength,visibleOffset} = Object.assign({
        }, _namedArguments );
        this._annotations = annotations;
        this._codeRange = codeRange;
        this._documentationComment = documentationComment;
        this._inferredTypeSlot = inferredTypeSlot;
        this._inheritsCovariantSlot = inheritsCovariantSlot;
        this._initializer = initializer;
        this._isConst = isConst;
        this._isCovariant = isCovariant;
        this._isFinal = isFinal;
        this._isStatic = isStatic;
        this._name = name;
        this._nameOffset = nameOffset;
        this._propagatedTypeSlot = propagatedTypeSlot;
        this._type = type;
        this._visibleLength = visibleLength;
        this._visibleOffset = visibleOffset;
    }
    flushInformative() : void {
        ((_491_)=>(!!_491_)?_491_.forEach((b : any) =>  {
            return b.flushInformative();
        }):null)(this._annotations);
        this._codeRange = null;
        this._documentationComment = null;
        ((_492_)=>(!!_492_)?_492_.flushInformative():null)(this._initializer);
        this._nameOffset = null;
        ((_493_)=>(!!_493_)?_493_.flushInformative():null)(this._type);
        this._visibleLength = null;
        this._visibleOffset = null;
    }
    collectApiSignature(signature : any) : void {
        signature.addString((this._name || ''));
        signature.addInt((this._propagatedTypeSlot || 0));
        signature.addBool(this._type != null);
        ((_494_)=>(!!_494_)?_494_.collectApiSignature(signature):null)(this._type);
        signature.addBool(this._isStatic == true);
        signature.addBool(this._isConst == true);
        signature.addBool(this._isFinal == true);
        if (this._annotations == null) {
            signature.addInt(0);
        }else {
            signature.addInt(this._annotations.length);
            for(let x of this._annotations) {
                ((_495_)=>(!!_495_)?_495_.collectApiSignature(signature):null)(x);
            }
        }
        signature.addInt((this._inferredTypeSlot || 0));
        signature.addBool(this._initializer != null);
        ((_496_)=>(!!_496_)?_496_.collectApiSignature(signature):null)(this._initializer);
        signature.addBool(this._isCovariant == true);
        signature.addInt((this._inheritsCovariantSlot || 0));
    }
    finish(fbBuilder : any) : any {
        let offset_annotations : any;
        let offset_codeRange : any;
        let offset_documentationComment : any;
        let offset_initializer : any;
        let offset_name : any;
        let offset_type : any;
        if (!(this._annotations == null || this._annotations.isEmpty)) {
            offset_annotations = fbBuilder.writeList(this._annotations.map((b : any) =>  {
                return b.finish(fbBuilder);
            }).toList());
        }
        if (this._codeRange != null) {
            offset_codeRange = this._codeRange.finish(fbBuilder);
        }
        if (this._documentationComment != null) {
            offset_documentationComment = this._documentationComment.finish(fbBuilder);
        }
        if (this._initializer != null) {
            offset_initializer = this._initializer.finish(fbBuilder);
        }
        if (this._name != null) {
            offset_name = fbBuilder.writeString(this._name);
        }
        if (this._type != null) {
            offset_type = this._type.finish(fbBuilder);
        }
        fbBuilder.startTable();
        if (offset_annotations != null) {
            fbBuilder.addOffset(8,offset_annotations);
        }
        if (offset_codeRange != null) {
            fbBuilder.addOffset(5,offset_codeRange);
        }
        if (offset_documentationComment != null) {
            fbBuilder.addOffset(10,offset_documentationComment);
        }
        if (this._inferredTypeSlot != null && this._inferredTypeSlot != 0) {
            fbBuilder.addUint32(9,this._inferredTypeSlot);
        }
        if (this._inheritsCovariantSlot != null && this._inheritsCovariantSlot != 0) {
            fbBuilder.addUint32(15,this._inheritsCovariantSlot);
        }
        if (offset_initializer != null) {
            fbBuilder.addOffset(13,offset_initializer);
        }
        if (this._isConst == true) {
            fbBuilder.addBool(6,true);
        }
        if (this._isCovariant == true) {
            fbBuilder.addBool(14,true);
        }
        if (this._isFinal == true) {
            fbBuilder.addBool(7,true);
        }
        if (this._isStatic == true) {
            fbBuilder.addBool(4,true);
        }
        if (offset_name != null) {
            fbBuilder.addOffset(0,offset_name);
        }
        if (this._nameOffset != null && this._nameOffset != 0) {
            fbBuilder.addUint32(1,this._nameOffset);
        }
        if (this._propagatedTypeSlot != null && this._propagatedTypeSlot != 0) {
            fbBuilder.addUint32(2,this._propagatedTypeSlot);
        }
        if (offset_type != null) {
            fbBuilder.addOffset(3,offset_type);
        }
        if (this._visibleLength != null && this._visibleLength != 0) {
            fbBuilder.addUint32(11,this._visibleLength);
        }
        if (this._visibleOffset != null && this._visibleOffset != 0) {
            fbBuilder.addUint32(12,this._visibleOffset);
        }
        return fbBuilder.endTable();
    }
}

export namespace _UnlinkedVariableReader {
    export type Constructors = '_UnlinkedVariableReader';
    export type Interface = Omit<_UnlinkedVariableReader, Constructors>;
}
@DartClass
export class _UnlinkedVariableReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedVariableReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedVariableImpl {
        return new _UnlinkedVariableImpl(bc,offset);
    }
}

export namespace _UnlinkedVariableImpl {
    export type Constructors = '_UnlinkedVariableImpl';
    export type Interface = Omit<_UnlinkedVariableImpl, Constructors>;
}
@DartClass
@Implements(lib3.UnlinkedVariable)
@With(_UnlinkedVariableMixin)
export class _UnlinkedVariableImpl extends core.DartObject implements lib3.UnlinkedVariable.Interface,_UnlinkedVariableMixin.Interface {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toMap() : core.DartMap<string,core.DartObject> {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _bc : any;

    _bcOffset : number;

    constructor(_bc : any,_bcOffset : number) {
    }
    @defaultConstructor
    _UnlinkedVariableImpl(_bc : any,_bcOffset : number) {
        this._bc = _bc;
        this._bcOffset = _bcOffset;
    }
    _annotations : core.DartList<lib3.UnlinkedExpr>;

    _codeRange : lib3.CodeRange;

    _documentationComment : lib3.UnlinkedDocumentationComment;

    _inferredTypeSlot : number;

    _inheritsCovariantSlot : number;

    _initializer : lib3.UnlinkedExecutable;

    _isConst : boolean;

    _isCovariant : boolean;

    _isFinal : boolean;

    _isStatic : boolean;

    _name : string;

    _nameOffset : number;

    _propagatedTypeSlot : number;

    _type : lib3.EntityRef;

    _visibleLength : number;

    _visibleOffset : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get annotations() : core.DartList<lib3.UnlinkedExpr> {
        this._annotations = ( this._annotations ) || ( new bare.createInstance(any,null,new _UnlinkedExprReader()).vTableGet(this._bc,this._bcOffset,8,new core.DartList.literal<lib3.UnlinkedExpr>()) );
        return this._annotations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeRange() : lib3.CodeRange {
        this._codeRange = ( this._codeRange ) || ( new _CodeRangeReader().vTableGet(this._bc,this._bcOffset,5,null) );
        return this._codeRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : lib3.UnlinkedDocumentationComment {
        this._documentationComment = ( this._documentationComment ) || ( new _UnlinkedDocumentationCommentReader().vTableGet(this._bc,this._bcOffset,10,null) );
        return this._documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inferredTypeSlot() : number {
        this._inferredTypeSlot = ( this._inferredTypeSlot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,9,0) );
        return this._inferredTypeSlot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritsCovariantSlot() : number {
        this._inheritsCovariantSlot = ( this._inheritsCovariantSlot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,15,0) );
        return this._inheritsCovariantSlot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : lib3.UnlinkedExecutable {
        this._initializer = ( this._initializer ) || ( new _UnlinkedExecutableReader().vTableGet(this._bc,this._bcOffset,13,null) );
        return this._initializer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        this._isConst = ( this._isConst ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,6,false) );
        return this._isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        this._isCovariant = ( this._isCovariant ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,14,false) );
        return this._isCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        this._isFinal = ( this._isFinal ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,7,false) );
        return this._isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        this._isStatic = ( this._isStatic ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,4,false) );
        return this._isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        this._name = ( this._name ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,0,'') );
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        this._nameOffset = ( this._nameOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,1,0) );
        return this._nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedTypeSlot() : number {
        this._propagatedTypeSlot = ( this._propagatedTypeSlot ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,2,0) );
        return this._propagatedTypeSlot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : lib3.EntityRef {
        this._type = ( this._type ) || ( new _EntityRefReader().vTableGet(this._bc,this._bcOffset,3,null) );
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleLength() : number {
        this._visibleLength = ( this._visibleLength ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,11,0) );
        return this._visibleLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleOffset() : number {
        this._visibleOffset = ( this._visibleOffset ) || ( new bare.createInstance(any,null).vTableGet(this._bc,this._bcOffset,12,0) );
        return this._visibleOffset;
    }
}

export namespace _UnlinkedExecutableReader {
    export type Constructors = '_UnlinkedExecutableReader';
    export type Interface = Omit<_UnlinkedExecutableReader, Constructors>;
}
@DartClass
export class _UnlinkedExecutableReader extends any {
    constructor() {
    }
    @defaultConstructor
    _UnlinkedExecutableReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(bc : any,offset : number) : _UnlinkedExecutableImpl {
        return new _UnlinkedExecutableImpl(bc,offset);
    }
}

export class properties {
}
