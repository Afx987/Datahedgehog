/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/import.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder/library_builder";
import * as lib4 from "./combinator";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./builder/builder";
import * as lib7 from "./builder/prefix_builder";

export namespace Import {
    export type Constructors = 'Import';
    export type Interface = Omit<Import, Constructors>;
}
@DartClass
export class Import {
    importer : lib3.LibraryBuilder<any,any>;

    imported : lib3.LibraryBuilder<any,any>;

    deferred : boolean;

    prefix : string;

    combinators : core.DartList<lib4.Combinator>;

    charOffset : number;

    prefixCharOffset : number;

    constructor(importer : lib3.LibraryBuilder<any,any>,imported : lib3.LibraryBuilder<any,any>,deferred : boolean,prefix : string,combinators : core.DartList<lib4.Combinator>,charOffset : number,prefixCharOffset : number) {
    }
    @defaultConstructor
    Import(importer : lib3.LibraryBuilder<any,any>,imported : lib3.LibraryBuilder<any,any>,deferred : boolean,prefix : string,combinators : core.DartList<lib4.Combinator>,charOffset : number,prefixCharOffset : number) {
        this.importer = importer;
        this.imported = imported;
        this.deferred = deferred;
        this.prefix = prefix;
        this.combinators = combinators;
        this.charOffset = charOffset;
        this.prefixCharOffset = prefixCharOffset;
    }
    get fileUri() : lib5.Uri {
        return this.importer.fileUri;
    }
    finalizeImports(importer : lib3.LibraryBuilder<any,any>) : void {
        let add : (name : string,member : lib6.Builder) => void;
        let prefix : lib7.PrefixBuilder;
        if (this.prefix == null) {
            add = (name : string,member : lib6.Builder) =>  {
                importer.addToScope(name,member,this.charOffset,true);
            };
        }else {
            prefix = new lib7.PrefixBuilder(this.prefix,this.deferred,importer,this.prefixCharOffset);
            add = (name : string,member : lib6.Builder) =>  {
                if (member.isSetter) {
                    prefix.exports.setters.set(name,member);
                }else {
                    prefix.exports.local.set(name,member);
                }
            };
        }
        this.imported.exports.forEach((name : string,member : lib6.Builder) =>  {
            if (this.combinators != null) {
                for(let combinator of this.combinators) {
                    if (combinator.isShow && !combinator.names.contains(name)) return;
                    if (combinator.isHide && combinator.names.contains(name)) return;
                }
            }
            add(name,member);
        });
        if (prefix != null) {
            let existing : lib6.Builder = importer.addBuilder(prefix.name,prefix,this.charOffset);
            if (op(Op.EQUALS,existing,prefix)) {
                importer.addToScope(prefix.name,prefix,this.prefixCharOffset,true);
            }
        }
    }
}

export class properties {
}
