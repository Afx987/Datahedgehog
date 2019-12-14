/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/dill/dill_library_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/library_builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./dill_loader";
import * as lib6 from "./../scope";
import * as lib7 from "./dill_class_builder";
import * as lib8 from "./../kernel/redirecting_factory_body";
import * as lib9 from "./dill_member_builder";
import * as lib10 from "./../builder/builder";
import * as lib11 from "./../errors";
import * as lib12 from "./../builder/invalid_type_builder";
import * as lib13 from "./../kernel/kernel_invalid_type_builder";

export namespace DillLibraryBuilder {
    export type Constructors = lib3.LibraryBuilder.Constructors | 'DillLibraryBuilder';
    export type Interface = Omit<DillLibraryBuilder, Constructors>;
}
@DartClass
export class DillLibraryBuilder extends lib3.LibraryBuilder<lib14.KernelTypeBuilder,any> {
    uri : lib4.Uri;

    loader : lib5.DillLoader;

    library : any;

    constructor(uri : lib4.Uri,loader : lib5.DillLoader) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DillLibraryBuilder(uri : lib4.Uri,loader : lib5.DillLoader) {
        super.LibraryBuilder(uri,new lib6.Scope.top(),new lib6.Scope.top());
        this.uri = uri;
        this.loader = loader;
    }
    get fileUri() : lib4.Uri {
        return this.uri;
    }
    addClass(cls : any) : void {
        let classBulder : lib7.DillClassBuilder = new lib7.DillClassBuilder(cls,this);
        this.addBuilder(cls.name,classBulder,cls.fileOffset);
        cls.procedures.forEach(classBulder.addMember.bind(classBulder));
        cls.constructors.forEach(classBulder.addMember.bind(classBulder));
        for(let field of cls.fields) {
            if (op(Op.EQUALS,field.name.name,"_redirecting#")) {
                let initializer : any = field.initializer;
                for(let get of initializer.expressions) {
                    let factory : any = get.target;
                    let function : any = factory.function;
                    let statement : any = function.body;
                    let let : any = statement.expression;
                    let getTarget : any = let.variable.initializer;
                    function.body = ((_) : lib8.RedirectingFactoryBody =>  {
                        {
                            _.parent = function;
                            return _;
                        }
                    })(new lib8.RedirectingFactoryBody(getTarget.target));
                }
                initializer.expressions.clear();
            }else {
                classBulder.addMember(field);
            }
        }
    }
    addMember(member : any) : void {
        let name : string = member.name.name;
        if (name == "_exports#") {
        }else {
            this.addBuilder(name,new lib9.DillMemberBuilder(member,this),member.fileOffset);
        }
    }
    addBuilder(name : string,builder : lib10.Builder,charOffset : number) : lib10.Builder {
        if (name == null || new core.DartString(name).isEmpty) return null;
        let isSetter : boolean = builder.isSetter;
        if (isSetter) {
            this.scopeBuilder.addSetter(name,builder);
        }else {
            this.scopeBuilder.addMember(name,builder);
        }
        if (!new core.DartString(name).startsWith("_")) {
            if (isSetter) {
                this.exportScopeBuilder.addSetter(name,builder);
            }else {
                this.exportScopeBuilder.addMember(name,builder);
            }
        }
        return builder;
    }
    addTypedef(typedef : any) : void {
        let typedefBuilder = new bare.createInstance(any,null,typedef,this);
        this.addBuilder(typedef.name,typedefBuilder,typedef.fileOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScope(name : string,member : lib10.Builder,charOffset : number,isImport : boolean) : void {
        lib11.internalError("Not implemented yet.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildAmbiguousBuilder(name : string,builder : lib10.Builder,other : lib10.Builder,charOffset : number,_namedArguments? : {isExport? : boolean,isImport? : boolean}) : lib10.Builder {
        let {isExport,isImport} = Object.assign({
            "isExport" : false,
            "isImport" : false}, _namedArguments );
        if (op(Op.EQUALS,builder,other)) return builder;
        if (is(builder, lib12.InvalidTypeBuilder<any,any>)) return builder;
        if (is(other, lib12.InvalidTypeBuilder<any,any>)) return other;
        if (op(Op.EQUALS,builder.parent,this)) return builder;
        return new lib13.KernelInvalidTypeBuilder(name,charOffset,this.fileUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return (this.library.name || `<library '${this.library.fileUri}'>`);
    }
}

export class properties {
}
