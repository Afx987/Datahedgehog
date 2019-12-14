/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/loader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./builder/library_builder";
import * as collection from "@dart2ts/dart/core";
import * as lib6 from "./target_implementation";
import * as lib7 from "./ticker";
import * as lib8 from "./errors";
import * as lib9 from "./builder/builder";

export var format : (d : double,fractionDigits : number,width : number) => string = (d : double,fractionDigits : number,width : number) : string =>  {
    return new core.DartString(new core.DartDouble(d).toStringAsFixed(fractionDigits)).padLeft(width);
};
export namespace Loader {
    export type Constructors = 'Loader';
    export type Interface<L> = Omit<Loader<L>, Constructors>;
}
@DartClass
export class Loader<L> {
    builders : core.DartMap<lib3.Uri,lib4.LibraryBuilder<any,any>>;

    unparsedLibraries : collection.Queue<lib4.LibraryBuilder<any,any>>;

    libraries : core.DartList<L>;

    target : lib6.TargetImplementation;

    coreLibrary : lib4.LibraryBuilder<any,any>;

    first : lib4.LibraryBuilder<any,any>;

    byteCount : number;

    currentUriForCrashReporting : lib3.Uri;

    constructor(target : lib6.TargetImplementation) {
    }
    @defaultConstructor
    Loader(target : lib6.TargetImplementation) {
        this.builders = new core.DartMap.literal([
        ]);
        this.unparsedLibraries = new collection.Queue<lib4.LibraryBuilder<any,any>>();
        this.libraries = new core.DartList.literal<L>();
        this.byteCount = 0;
        this.target = target;
    }
    get ticker() : lib7.Ticker {
        return this.target.ticker;
    }
    read(uri : lib3.Uri,fileUri? : lib3.Uri) : lib4.LibraryBuilder<any,any> {
        lib8.properties.firstSourceUri = ( lib8.properties.firstSourceUri ) || ( uri );
        let builder : lib4.LibraryBuilder<any,any> = this.builders.putIfAbsent(uri,() =>  {
            if (op(Op.EQUALS,fileUri,null)) {
                switch (uri.scheme) {
                    case "package":
                    case "dart":
                        fileUri = this.target.translateUri(uri);
                        break;
                    default:
                        fileUri = uri;
                        break;
                }
            }
            let library : lib4.LibraryBuilder<any,any> = this.target.createLibraryBuilder(uri,fileUri);
            if (uri.scheme == "dart" && uri.path == "core") {
                this.coreLibrary = library;
                this.target.loadExtraRequiredLibraries(this);
            }
            this.first = ( this.first ) || ( library );
            if (op(Op.EQUALS,library.loader,this)) {
                this.unparsedLibraries.addLast(library);
            }
            return library;
        });
        return builder;
    }
    ensureCoreLibrary() : void {
        if (op(Op.EQUALS,this.coreLibrary,null)) {
            this.read(lib3.Uri.parse("dart:core"));
            /* TODO (AssertStatementImpl) : assert (coreLibrary != null); */;
        }
    }
    buildBodies() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            /* TODO (AssertStatementImpl) : assert (coreLibrary != null); */;
            for(let library of this.builders.values) {
                this.currentUriForCrashReporting = library.uri;
                await this.buildBody(library);
            }
            this.currentUriForCrashReporting = null;
            this.ticker.log((elapsed : core.DartDuration,sinceStart : core.DartDuration) =>  {
                let libraryCount : number = this.builders.length;
                let ms : double = elapsed.inMicroseconds / core.DartDuration.MICROSECONDS_PER_MILLISECOND;
                let message : string = `Built ${libraryCount} compilation units`;
                core.print(`${sinceStart}: ${message} (${this.byteCount} bytes) in ${format(ms,3,0)}ms, that is,\n${format(this.byteCount / ms,3,12)} bytes/ms, and\n${format(ms / libraryCount,3,12)} ms/compilation unit.`);
            });
        } )());
    }

    buildOutlines() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.ensureCoreLibrary();
            while (this.unparsedLibraries.isNotEmpty){
                let library : lib4.LibraryBuilder<any,any> = this.unparsedLibraries.removeFirst();
                this.currentUriForCrashReporting = library.uri;
                await this.buildOutline(library);
            }
            this.currentUriForCrashReporting = null;
            this.ticker.log((elapsed : core.DartDuration,sinceStart : core.DartDuration) =>  {
                let libraryCount : number = this.builders.length;
                let ms : double = elapsed.inMicroseconds / core.DartDuration.MICROSECONDS_PER_MILLISECOND;
                let message : string = `Built outlines for ${libraryCount} compilation units`;
                core.print(`${sinceStart}: ${message} (${this.byteCount} bytes) in ${format(ms,3,0)}ms, that is,\n${format(this.byteCount / ms,3,12)} bytes/ms, and\n${format(ms / libraryCount,3,12)} ms/compilation unit.`);
            });
        } )());
    }

    @Abstract
    buildOutline(library : lib4.LibraryBuilder<any,any>) : async.Future<core.Null>{ throw 'abstract'}
    @Abstract
    buildBody(library : lib4.LibraryBuilder<any,any>) : async.Future<core.Null>{ throw 'abstract'}
    collectCompileTimeErrors() : core.DartList<lib8.InputError> {
        let errors : core.DartList<lib8.InputError> = new core.DartList.literal<lib8.InputError>();
        for(let library of this.builders.values) {
            if (op(Op.EQUALS,library.loader,this)) {
                errors.addAll(library.compileTimeErrors);
            }
        }
        return errors;
    }
    getCompileTimeError() : lib9.Builder {
        return this.target.getCompileTimeError(this);
    }
    getNativeAnnotation() : lib9.Builder {
        return this.target.getNativeAnnotation(this);
    }
    getAbstractClassInstantiationError() : lib9.Builder {
        return this.target.getAbstractClassInstantiationError(this);
    }
}

export class properties {
}
