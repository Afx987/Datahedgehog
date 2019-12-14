/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/named_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_builder";
import * as lib4 from "./type_declaration_builder";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./invalid_type_builder";
import * as lib7 from "./../scope";
import * as lib8 from "./builder";
import * as lib9 from "./prefix_builder";

export namespace NamedTypeBuilder {
    export type Constructors = lib3.TypeBuilder.Constructors | 'NamedTypeBuilder';
    export type Interface<T extends lib3.TypeBuilder,R> = Omit<NamedTypeBuilder<T extends lib3.TypeBuilder,R>, Constructors>;
}
@DartClass
export class NamedTypeBuilder<T extends lib3.TypeBuilder,R> extends lib3.TypeBuilder {
    name : string;

    arguments : core.DartList<T>;

    builder : lib4.TypeDeclarationBuilder<T,R>;

    constructor(name : string,arguments : core.DartList<T>,charOffset : number,fileUri : lib5.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedTypeBuilder(name : string,arguments : core.DartList<T>,charOffset : number,fileUri : lib5.Uri) {
        super.TypeBuilder(charOffset,fileUri);
        this.name = name;
        this.arguments = arguments;
    }
    @Abstract
    buildInvalidType(name : string) : lib6.InvalidTypeBuilder<T,R>{ throw 'abstract'}
    bind(builder : lib4.TypeDeclarationBuilder<any,any>) : void {
        this.builder = builder;
    }
    resolveIn(scope : lib7.Scope) : void {
        if (this.builder != null) return;
        let member : lib8.Builder = scope.lookup(this.name,this.charOffset,this.fileUri);
        if (is(member, lib4.TypeDeclarationBuilder<any,any>)) {
            this.builder = member;
            return;
        }
        if (new core.DartString(this.name).contains(".")) {
            let index : number = new core.DartString(this.name).lastIndexOf(".");
            let first : string = new core.DartString(this.name).substring(0,index);
            let last : string = new core.DartString(this.name).substring(new core.DartString(this.name).lastIndexOf(".") + 1);
            let prefix = scope.lookup(first,this.charOffset,this.fileUri);
            if (is(prefix, lib9.PrefixBuilder)) {
                member = prefix.lookup(last,this.charOffset,this.fileUri);
            }
            if (is(member, lib4.TypeDeclarationBuilder<any,any>)) {
                this.builder = member;
                return;
            }
        }
        this.builder = this.buildInvalidType(this.name);
    }
    get debugName() : string {
        return "NamedTypeBuilder";
    }
    printOn(buffer : core.DartStringBuffer) : core.DartStringBuffer {
        buffer.write(this.name);
        if ((((t)=>(!!t)?t.isEmpty:null)(this.arguments) || true)) return buffer;
        buffer.write("<");
        let first : boolean = true;
        for(let t of this.arguments) {
            if (!first) buffer.write(", ");
            first = false;
            t.printOn(buffer);
        }
        buffer.write(">");
        return buffer;
    }
}

export class properties {
}
