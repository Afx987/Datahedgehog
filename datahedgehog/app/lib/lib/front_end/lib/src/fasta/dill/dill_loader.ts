/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/dill/dill_loader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../loader";
import * as lib4 from "./../target_implementation";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./dill_library_builder";

export namespace DillLoader {
    export type Constructors = lib3.Loader.Constructors | 'DillLoader';
    export type Interface = Omit<DillLoader, Constructors>;
}
@DartClass
export class DillLoader extends lib3.Loader<any> {
    libraries;

    constructor(target : lib4.TargetImplementation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DillLoader(target : lib4.TargetImplementation) {
        this.libraries = new core.DartList.literal<any>();
        super.Loader(target);
    }
    appendLibraries(program : any,filter? : (uri : lib5.Uri) => boolean) : core.DartList<lib6.DillLibraryBuilder> {
        let builders = new core.DartList.literal<lib6.DillLibraryBuilder>();
        for(let library of program.libraries) {
            if (op(Op.EQUALS,filter,null) || filter(library.importUri)) {
                this.libraries.add(library);
                let builder : lib6.DillLibraryBuilder = this.read(library.importUri);
                builder.library = library;
                builders.add(builder);
            }
        }
        return builders;
    }
    read(uri : lib5.Uri,fileUri? : lib5.Uri) : lib6.DillLibraryBuilder {
        return super.read(uri,fileUri);
    }
    buildOutline(builder : lib6.DillLibraryBuilder) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            builder.library.classes.forEach(builder.addClass.bind(builder));
            builder.library.procedures.forEach(builder.addMember.bind(builder));
            builder.library.typedefs.forEach(builder.addTypedef.bind(builder));
            builder.library.fields.forEach(builder.addMember.bind(builder));
        } )());
    }

    buildBody(builder : lib6.DillLibraryBuilder) : async.Future<core.Null> {
        return this.buildOutline(builder);
    }
}

export class properties {
}
