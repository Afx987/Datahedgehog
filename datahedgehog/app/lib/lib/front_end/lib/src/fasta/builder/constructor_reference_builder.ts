/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/constructor_reference_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./../scope";
import * as lib6 from "./prefix_builder";
import * as lib7 from "./class_builder";
import * as lib8 from "./../messages";

export namespace ConstructorReferenceBuilder {
    export type Constructors = lib3.Builder.Constructors | 'ConstructorReferenceBuilder';
    export type Interface = Omit<ConstructorReferenceBuilder, Constructors>;
}
@DartClass
export class ConstructorReferenceBuilder extends lib3.Builder {
    name : string;

    typeArguments : core.DartList<lib4.TypeBuilder>;

    suffix : string;

    target : lib3.Builder;

    constructor(name : string,typeArguments : core.DartList<lib4.TypeBuilder>,suffix : string,parent : lib3.Builder,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorReferenceBuilder(name : string,typeArguments : core.DartList<lib4.TypeBuilder>,suffix : string,parent : lib3.Builder,charOffset : number) {
        super.Builder(parent,charOffset,parent.fileUri);
        this.name = name;
        this.typeArguments = typeArguments;
        this.suffix = suffix;
    }
    get fullNameForErrors() : string {
        return `${this.name}${this.suffix == null ? '' : `.${this.suffix}`}`;
    }
    resolveIn(scope : lib5.Scope) : void {
        let index : number = new core.DartString(this.name).indexOf(".");
        let builder : lib3.Builder;
        if (index == -1) {
            builder = scope.lookup(this.name,this.charOffset,this.fileUri);
        }else {
            let prefix : string = new core.DartString(this.name).substring(0,index);
            let middle : string = new core.DartString(this.name).substring(index + 1);
            builder = scope.lookup(prefix,this.charOffset,this.fileUri);
            if (is(builder, lib6.PrefixBuilder)) {
                let prefix : lib6.PrefixBuilder = builder;
                builder = prefix.lookup(middle,this.charOffset,this.fileUri);
            }else if (is(builder, lib7.ClassBuilder<any,any>)) {
                let cls : lib7.ClassBuilder<any,any> = builder;
                builder = cls.findConstructorOrFactory(middle,this.charOffset,this.fileUri);
                if (this.suffix == null) {
                    this.target = builder;
                    return;
                }
            }
        }
        if (is(builder, lib7.ClassBuilder<any,any>)) {
            this.target = builder.findConstructorOrFactory((this.suffix || ""),this.charOffset,this.fileUri);
        }
        if (op(Op.EQUALS,this.target,null)) {
            lib8.warning(this.fileUri,this.charOffset,`Couldn't find constructor '${this.fullNameForErrors}'.`);
        }
    }
}

export class properties {
}
