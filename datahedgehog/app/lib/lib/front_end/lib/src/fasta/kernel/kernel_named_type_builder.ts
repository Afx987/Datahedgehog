/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_named_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/named_type_builder";
import * as lib4 from "./kernel_type_builder";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./../messages";
import * as lib7 from "./kernel_invalid_type_builder";
import * as lib8 from "./../builder/library_builder";
import * as lib9 from "./kernel_class_builder";
import * as lib10 from "./../builder/type_variable_builder";
import * as lib11 from "./../builder/type_builder";

export namespace KernelNamedTypeBuilder {
    export type Constructors = lib3.NamedTypeBuilder.Constructors | 'KernelNamedTypeBuilder';
    export type Interface = Omit<KernelNamedTypeBuilder, Constructors>;
}
@DartClass
@Implements(lib4.KernelTypeBuilder)
export class KernelNamedTypeBuilder extends lib3.NamedTypeBuilder<lib4.KernelTypeBuilder,any> implements lib4.KernelTypeBuilder.Interface {
    constructor(name : string,arguments : core.DartList<lib4.KernelTypeBuilder>,charOffset : number,fileUri : lib5.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelNamedTypeBuilder(name : string,arguments : core.DartList<lib4.KernelTypeBuilder>,charOffset : number,fileUri : lib5.Uri) {
        super.NamedTypeBuilder(name,arguments,charOffset,fileUri);
    }
    buildInvalidType(name : string) : lib7.KernelInvalidTypeBuilder {
        lib6.warning(this.fileUri,this.charOffset,`Type not found: '${name}'.`);
        return new lib7.KernelInvalidTypeBuilder(name,this.charOffset,this.fileUri);
    }
    handleMissingType() : any {
        lib6.warning(this.fileUri,this.charOffset,`No type for: '${this.name}'.`);
        return new bare.createInstance(any,null);
    }
    handleMissingSupertype() : any {
        lib6.warning(this.fileUri,this.charOffset,`No type for: '${this.name}'.`);
        return null;
    }
    handleInvalidSupertype(library : lib8.LibraryBuilder<any,any>) : any {
        let message : string = this.builder.isTypeVariable ? `The type variable '${this.name}' can't be used as supertype.` : `The type '${this.name}' can't be used as supertype.`;
        library.addCompileTimeError(this.charOffset,message,{
            fileUri : this.fileUri});
        return null;
    }
    build(library : lib8.LibraryBuilder<any,any>) : any {
        if (op(Op.EQUALS,this.builder,null)) return this.handleMissingType();
        return this.builder.buildType(library,this.arguments);
    }
    buildSupertype(library : lib8.LibraryBuilder<any,any>) : any {
        if (op(Op.EQUALS,this.builder,null)) return this.handleMissingSupertype();
        if (is(this.builder, lib9.KernelClassBuilder)) {
            let builder : lib9.KernelClassBuilder = this.builder;
            return builder.buildSupertype(library,this.arguments);
        }else {
            return this.handleInvalidSupertype(library);
        }
    }
    subst(substitution : core.DartMap<lib10.TypeVariableBuilder<any,any>,lib11.TypeBuilder>) : lib11.TypeBuilder {
        let result : lib11.TypeBuilder = substitution.get(this.builder);
        if (result != null) {
            /* TODO (AssertStatementImpl) : assert (builder is TypeVariableBuilder); */;
            return result;
        }else if (this.arguments != null) {
            let arguments : core.DartList<lib4.KernelTypeBuilder>;
            let i : number = 0;
            for(let argument of this.arguments) {
                let type : lib4.KernelTypeBuilder = argument.subst(substitution);
                if (type != argument) {
                    arguments = ( arguments ) || ( this.arguments.toList() );
                    arguments[i] = type;
                }
                i++;
            }
            if (arguments != null) {
                return ((_) : KernelNamedTypeBuilder =>  {
                    {
                        _.builder = this.builder;
                        return _;
                    }
                })(new KernelNamedTypeBuilder(this.name,arguments,this.charOffset,this.fileUri));
            }
        }
        return this;
    }
}

export class properties {
}
