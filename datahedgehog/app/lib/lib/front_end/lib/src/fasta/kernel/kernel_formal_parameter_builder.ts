/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_formal_parameter_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/formal_parameter_builder";
import * as lib4 from "./../builder/metadata_builder";
import * as lib5 from "./kernel_type_builder";
import * as lib6 from "./kernel_library_builder";
import * as lib7 from "./../builder/library_builder";

export namespace KernelFormalParameterBuilder {
    export type Constructors = lib3.FormalParameterBuilder.Constructors | 'KernelFormalParameterBuilder';
    export type Interface = Omit<KernelFormalParameterBuilder, Constructors>;
}
@DartClass
export class KernelFormalParameterBuilder extends lib3.FormalParameterBuilder<lib5.KernelTypeBuilder> {
    declaration : any;

    charOffset : number;

    constructor(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,type : lib5.KernelTypeBuilder,name : string,hasThis : boolean,compilationUnit : lib6.KernelLibraryBuilder,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelFormalParameterBuilder(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,type : lib5.KernelTypeBuilder,name : string,hasThis : boolean,compilationUnit : lib6.KernelLibraryBuilder,charOffset : number) {
        super.FormalParameterBuilder(metadata,modifiers,type,name,hasThis,compilationUnit,charOffset);
        this.charOffset = charOffset;
    }
    get target() : any {
        return this.declaration;
    }
    build(library : lib7.LibraryBuilder<any,any>) : any {
        return this.declaration = ( this.declaration ) || ( ((_) : any =>  {
            {
                _.fileOffset = this.charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,this.name,0,{
            type : ((_538_)=>(!!_538_)?_538_.build(library):null)(this.type),isFinal : this.isFinal,isConst : this.isConst})) );
    }
}

export class properties {
}
