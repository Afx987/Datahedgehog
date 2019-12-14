/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_type_variable_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/type_variable_builder";
import * as lib4 from "./kernel_library_builder";
import * as lib5 from "./kernel_type_builder";
import * as lib6 from "./../builder/library_builder";
import * as lib7 from "./../errors";
import * as lib8 from "./kernel_named_type_builder";
import * as lib9 from "./kernel_class_builder";

export namespace KernelTypeVariableBuilder {
    export type Constructors = lib3.TypeVariableBuilder.Constructors | 'KernelTypeVariableBuilder';
    export type Interface = Omit<KernelTypeVariableBuilder, Constructors>;
}
@DartClass
export class KernelTypeVariableBuilder extends lib3.TypeVariableBuilder<lib5.KernelTypeBuilder,any> {
    parameter : any;

    constructor(name : string,compilationUnit : lib4.KernelLibraryBuilder,charOffset : number,bound? : lib5.KernelTypeBuilder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelTypeVariableBuilder(name : string,compilationUnit : lib4.KernelLibraryBuilder,charOffset : number,bound? : lib5.KernelTypeBuilder) {
        this.parameter = new bare.createInstance(any,null,name,null);
        super.TypeVariableBuilder(name,bound,compilationUnit,charOffset);
    }
    get target() : any {
        return this.parameter;
    }
    buildType(library : lib6.LibraryBuilder<any,any>,arguments : core.DartList<lib5.KernelTypeBuilder>) : any {
        if (arguments != null) {
            return lib7.inputError(null,null,`Can't use type arguments with type parameter ${this.parameter}`);
        }else {
            return new bare.createInstance(any,null,this.parameter);
        }
    }
    buildTypesWithBuiltArguments(library : lib6.LibraryBuilder<any,any>,arguments : core.DartList<any>) : any {
        if (arguments != null) {
            return lib7.inputError(null,null,`Can't use type arguments with type parameter ${this.parameter}`);
        }else {
            return this.buildType(library,null);
        }
    }
    asTypeBuilder() : lib5.KernelTypeBuilder {
        return ((_) : lib8.KernelNamedTypeBuilder =>  {
            {
                _.builder = this;
                return _;
            }
        })(new lib8.KernelNamedTypeBuilder(this.name,null,-1,null));
    }
    finish(library : lib6.LibraryBuilder<any,any>,object : lib9.KernelClassBuilder) : void {
        this.parameter.bound = (((_550_)=>(!!_550_)?_550_.build(library):null)(this.bound) || object.buildType(library,null));
    }
}

export class properties {
}
