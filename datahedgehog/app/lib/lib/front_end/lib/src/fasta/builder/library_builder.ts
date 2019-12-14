/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/library_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./../scope";
import * as lib6 from "./../export";
import * as lib7 from "./../errors";
import * as lib8 from "@dart2ts/dart/uri";
import * as lib9 from "./../util/relativize";
import * as lib10 from "./../loader";
import * as lib11 from "./../combinator";
import * as lib12 from "./../messages";
import * as lib13 from "./prefix_builder";
import * as lib14 from "./class_builder";
import * as lib15 from "./dynamic_type_builder";
import * as lib16 from "./void_type_builder";

export namespace LibraryBuilder {
    export type Constructors = lib3.Builder.Constructors | 'LibraryBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<LibraryBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class LibraryBuilder<T extends lib4.TypeBuilder,R> extends lib3.Builder {
    scope : lib5.Scope;

    exports : lib5.Scope;

    scopeBuilder : lib5.ScopeBuilder;

    exportScopeBuilder : lib5.ScopeBuilder;

    exporters : core.DartList<lib6.Export>;

    compileTimeErrors : core.DartList<lib7.InputError>;

    fileUri : lib8.Uri;

    relativeFileUri : string;

    partOfLibrary : LibraryBuilder<any,any>;

    constructor(fileUri : lib8.Uri,scope : lib5.Scope,exports : lib5.Scope) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryBuilder(fileUri : lib8.Uri,scope : lib5.Scope,exports : lib5.Scope) {
        this.exporters = new core.DartList.literal<lib6.Export>();
        this.compileTimeErrors = new core.DartList.literal<lib7.InputError>();
        this.fileUri = fileUri;
        this.relativeFileUri = lib9.relativizeUri(fileUri);
        this.scopeBuilder = new lib5.ScopeBuilder(scope);
        this.exportScopeBuilder = new lib5.ScopeBuilder(exports);
        super.Builder(null,-1,fileUri);
        this.scope = scope;
        this.exports = exports;
    }
    @AbstractProperty
    get loader() : lib10.Loader<any>{ throw 'abstract'}
    @AbstractProperty
    get uri() : lib8.Uri{ throw 'abstract'}
    @Abstract
    addBuilder(name : string,builder : lib3.Builder,charOffset : number) : lib3.Builder{ throw 'abstract'}
    addExporter(exporter : LibraryBuilder<any,any>,combinators : core.DartList<lib11.Combinator>,charOffset : number) : void {
        this.exporters.add(new lib6.Export(exporter,this,combinators,charOffset));
    }
    addCompileTimeError(charOffset : number,message : core.DartObject,_namedArguments? : {fileUri? : lib8.Uri,silent? : boolean}) : void {
        let {fileUri,silent} = Object.assign({
            "silent" : false}, _namedArguments );
        fileUri = ( fileUri ) || ( this.fileUri );
        if (!silent) {
            lib7.printUnexpected(fileUri,charOffset,message);
        }
        this.compileTimeErrors.add(new lib7.InputError(fileUri,charOffset,message));
    }
    addWarning(charOffset : number,message : core.DartObject,_namedArguments? : {fileUri? : lib8.Uri,silent? : boolean}) : void {
        let {fileUri,silent} = Object.assign({
            "silent" : false}, _namedArguments );
        fileUri = ( fileUri ) || ( this.fileUri );
        if (!silent) {
            lib12.warning(fileUri,charOffset,message);
        }
    }
    addNit(charOffset : number,message : core.DartObject,_namedArguments? : {fileUri? : lib8.Uri,silent? : boolean}) : void {
        let {fileUri,silent} = Object.assign({
            "silent" : false}, _namedArguments );
        fileUri = ( fileUri ) || ( this.fileUri );
        if (!silent) {
            lib12.nit(fileUri,charOffset,message);
        }
    }
    addToExportScope(name : string,member : lib3.Builder) : boolean {
        if (new core.DartString(name).startsWith("_")) return false;
        if (is(member, lib13.PrefixBuilder)) return false;
        let map : core.DartMap<string,lib3.Builder> = member.isSetter ? this.exports.setters : this.exports.local;
        let existing : lib3.Builder = map.get(name);
        if (op(Op.EQUALS,existing,member)) return false;
        if (existing != null) {
            let result : lib3.Builder = this.buildAmbiguousBuilder(name,existing,member,-1,{
                isExport : true});
            map.set(name,result);
            return result != existing;
        }else {
            map.set(name,member);
        }
        return true;
    }
    @Abstract
    addToScope(name : string,member : lib3.Builder,charOffset : number,isImport : boolean) : void{ throw 'abstract'}
    @Abstract
    buildAmbiguousBuilder(name : string,builder : lib3.Builder,other : lib3.Builder,charOffset : number,_namedArguments? : {isExport? : boolean,isImport? : boolean}) : lib3.Builder{ throw 'abstract'}
    finishStaticInvocations() : number {
        return 0;
    }
    finishNativeMethods() : number {
        return 0;
    }
    getConstructor(className : string,_namedArguments? : {constructorName? : string,isPrivate? : boolean}) : lib3.Builder {
        let {constructorName,isPrivate} = Object.assign({
            "isPrivate" : false}, _namedArguments );
        constructorName = ( constructorName ) || ( "" );
        let cls : lib3.Builder = (isPrivate ? this.scope : this.exports).lookup(className,-1,null);
        if (is(cls, lib14.ClassBuilder<any,any>)) {
            let constructor : lib3.Builder = cls.findConstructorOrFactory(constructorName,-1,null);
            if (op(Op.EQUALS,constructor,null)) {
            }else if (constructor.isConstructor) {
                if (!cls.isAbstract) {
                    return constructor;
                }
            }else if (constructor.isFactory) {
                return constructor;
            }
        }
        throw lib7.internalError("Internal error: No constructor named" + ` '${className}::${constructorName}' in '${this.uri}'.`);
    }
    finishTypeVariables(object : lib14.ClassBuilder<any,any>) : number {
        return 0;
    }
    becomeCoreLibrary(dynamicType : any,voidType : any) : void {
        this.addBuilder("dynamic",new lib15.DynamicTypeBuilder<T,any>(dynamicType,this,-1),-1);
        this.addBuilder("void",new lib16.VoidTypeBuilder<T,any>(voidType,this,-1),-1);
    }
    forEach(f : <T extends lib4.TypeBuilder,R>(name : string,builder : lib3.Builder) => void) : void {
        this.scope.forEach(f);
    }
    [OperatorMethods.INDEX](name : string) : lib3.Builder {
        return (this.scope.local.get(name) || lib7.internalError(`Not found: '${name}'.`));
    }
    lookup(name : string,charOffset : number,fileUri : lib8.Uri) : lib3.Builder {
        return this.scope.lookup(name,charOffset,fileUri);
    }
}

export class properties {
}
