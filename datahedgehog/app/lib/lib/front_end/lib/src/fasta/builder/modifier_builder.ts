/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/modifier_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../modifier";

export namespace ModifierBuilder {
    export type Constructors = lib3.Builder.Constructors | 'ModifierBuilder';
    export type Interface = Omit<ModifierBuilder, Constructors>;
}
@DartClass
export class ModifierBuilder extends lib3.Builder {
    charOffset : number;

    constructor(parent : lib3.Builder,charOffset : number,fileUri? : lib4.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ModifierBuilder(parent : lib3.Builder,charOffset : number,fileUri? : lib4.Uri) {
        super.Builder(parent,charOffset,(fileUri || ((t)=>(!!t)?t.fileUri:null)(parent)));
        this.charOffset = charOffset;
    }
    @AbstractProperty
    get modifiers() : number{ throw 'abstract'}
    get isAbstract() : boolean {
        return (this.modifiers & lib5.properties.abstractMask) != 0;
    }
    get isConst() : boolean {
        return (this.modifiers & lib5.properties.constMask) != 0;
    }
    get isExternal() : boolean {
        return (this.modifiers & lib5.properties.externalMask) != 0;
    }
    get isFinal() : boolean {
        return (this.modifiers & lib5.properties.finalMask) != 0;
    }
    get isStatic() : boolean {
        return (this.modifiers & lib5.properties.staticMask) != 0;
    }
    get isNamedMixinApplication() : boolean {
        return (this.modifiers & lib5.properties.namedMixinApplicationMask) != 0;
    }
}

export class properties {
}
