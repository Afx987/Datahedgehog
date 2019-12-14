/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/mixin_application_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./type_variable_builder";
import * as lib6 from "./../scope";
import * as lib7 from "./type_declaration_builder";
import * as lib8 from "./../errors";

export namespace MixinApplicationBuilder {
    export type Constructors = lib3.TypeBuilder.Constructors | 'MixinApplicationBuilder';
    export type Interface<T extends lib3.TypeBuilder> = Omit<MixinApplicationBuilder<T extends lib3.TypeBuilder>, Constructors>;
}
@DartClass
export class MixinApplicationBuilder<T extends lib3.TypeBuilder> extends lib3.TypeBuilder {
    supertype : T;

    mixins : core.DartList<T>;

    constructor(supertype : T,mixins : core.DartList<T>,charOffset : number,fileUri : lib4.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MixinApplicationBuilder(supertype : T,mixins : core.DartList<T>,charOffset : number,fileUri : lib4.Uri) {
        super.TypeBuilder(charOffset,fileUri);
        this.supertype = supertype;
        this.mixins = mixins;
    }
    set typeVariables(variables : core.DartList<lib5.TypeVariableBuilder<any,any>>){ throw 'abstract'}
    set subclassName(value : string){ throw 'abstract'}
    get name() : string {
        return null;
    }
    resolveIn(scope : lib6.Scope) : void {
        this.supertype.resolveIn(scope);
        for(let t of this.mixins) {
            t.resolveIn(scope);
        }
    }
    bind(builder : lib7.TypeDeclarationBuilder<any,any>) : void {
        lib8.internalError("Internal error: can't bind a mixin application.");
    }
    get debugName() : string {
        return "MixinApplicationBuilder";
    }
    printOn(buffer : core.DartStringBuffer) : core.DartStringBuffer {
        buffer.write(this.supertype);
        buffer.write(" with ");
        let first : boolean = true;
        for(let t of this.mixins) {
            if (!first) buffer.write(", ");
            first = false;
            t.printOn(buffer);
        }
        return buffer;
    }
}

export class properties {
}
