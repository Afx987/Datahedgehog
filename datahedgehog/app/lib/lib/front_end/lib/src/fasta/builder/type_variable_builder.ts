/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/type_variable_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_declaration_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./library_builder";

export namespace TypeVariableBuilder {
    export type Constructors = lib3.TypeDeclarationBuilder.Constructors | 'TypeVariableBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<TypeVariableBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class TypeVariableBuilder<T extends lib4.TypeBuilder,R> extends lib3.TypeDeclarationBuilder<T,R> {
    bound : T;

    constructor(name : string,bound : T,compilationUnit : lib5.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeVariableBuilder(name : string,bound : T,compilationUnit : lib5.LibraryBuilder<any,any>,charOffset : number) {
        super.TypeDeclarationBuilder(null,null,name,compilationUnit,charOffset);
        this.bound = bound;
    }
    get isTypeVariable() : boolean {
        return true;
    }
    get debugName() : string {
        return "TypeVariableBuilder";
    }
    printOn(buffer : core.DartStringBuffer) : core.DartStringBuffer {
        buffer.write(this.name);
        if (this.bound != null) {
            buffer.write(" extends ");
            this.bound.printOn(buffer);
        }
        return buffer;
    }
    toString() : string {
        return `${this.printOn(new core.DartStringBuffer())}`;
    }
    @Abstract
    asTypeBuilder() : T{ throw 'abstract'}
}

export class properties {
}
