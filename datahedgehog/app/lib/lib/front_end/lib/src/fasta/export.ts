/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/export.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder/library_builder";
import * as lib4 from "./combinator";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./builder/builder";

export namespace Export {
    export type Constructors = 'Export';
    export type Interface = Omit<Export, Constructors>;
}
@DartClass
export class Export {
    exporter : lib3.LibraryBuilder<any,any>;

    exported : lib3.LibraryBuilder<any,any>;

    combinators : core.DartList<lib4.Combinator>;

    charOffset : number;

    constructor(exporter : lib3.LibraryBuilder<any,any>,exported : lib3.LibraryBuilder<any,any>,combinators : core.DartList<lib4.Combinator>,charOffset : number) {
    }
    @defaultConstructor
    Export(exporter : lib3.LibraryBuilder<any,any>,exported : lib3.LibraryBuilder<any,any>,combinators : core.DartList<lib4.Combinator>,charOffset : number) {
        this.exporter = exporter;
        this.exported = exported;
        this.combinators = combinators;
        this.charOffset = charOffset;
    }
    get fileUri() : lib5.Uri {
        return this.exporter.fileUri;
    }
    addToExportScope(name : string,member : lib6.Builder) : boolean {
        if (this.combinators != null) {
            for(let combinator of this.combinators) {
                if (combinator.isShow && !combinator.names.contains(name)) return false;
                if (combinator.isHide && combinator.names.contains(name)) return false;
            }
        }
        return this.exporter.addToExportScope(name,member);
    }
}

export class properties {
}
