/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/prefix_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder";
import * as lib4 from "./../scope";
import * as lib5 from "./library_builder";
import * as lib6 from "@dart2ts/dart/uri";

export namespace PrefixBuilder {
    export type Constructors = lib3.Builder.Constructors | 'PrefixBuilder';
    export type Interface = Omit<PrefixBuilder, Constructors>;
}
@DartClass
export class PrefixBuilder extends lib3.Builder {
    name : string;

    exports : lib4.Scope;

    parent : lib5.LibraryBuilder<any,any>;

    deferred : boolean;

    constructor(name : string,deferred : boolean,parent : lib5.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixBuilder(name : string,deferred : boolean,parent : lib5.LibraryBuilder<any,any>,charOffset : number) {
        this.exports = new lib4.Scope.top();
        this.parent = parent;
        super.Builder(parent,charOffset,parent.fileUri);
        this.name = name;
        this.deferred = deferred;
    }
    lookup(name : string,charOffset : number,fileUri : lib6.Uri) : lib3.Builder {
        return this.exports.lookup(name,charOffset,fileUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return this.name;
    }
}

export class properties {
}
