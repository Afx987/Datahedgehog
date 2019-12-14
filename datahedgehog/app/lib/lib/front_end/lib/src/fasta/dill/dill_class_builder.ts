/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/dill/dill_class_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../kernel/kernel_class_builder";
import * as lib4 from "./dill_library_builder";
import * as lib5 from "./../builder/member_builder";
import * as lib6 from "./../scope";
import * as lib7 from "./dill_member_builder";
import * as lib8 from "./../errors";
import * as lib9 from "./../kernel/kernel_type_builder";
import * as lib10 from "./../modifier";

export var computeModifiers : (cls : any) => number = (cls : any) : number =>  {
    return cls.isAbstract ? lib10.properties.abstractMask : 0;
};
export namespace DillClassBuilder {
    export type Constructors = lib3.KernelClassBuilder.Constructors | 'DillClassBuilder';
    export type Interface = Omit<DillClassBuilder, Constructors>;
}
@DartClass
export class DillClassBuilder extends lib3.KernelClassBuilder {
    cls : any;

    constructor(cls : any,parent : lib4.DillLibraryBuilder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DillClassBuilder(cls : any,parent : lib4.DillLibraryBuilder) {
        this.cls = cls;
        super.KernelClassBuilder(null,computeModifiers(cls),cls.name,null,null,null,new lib6.Scope(new core.DartMap.literal([
        ]),new core.DartMap.literal([
        ]),parent.scope,{
            isModifiable : false}),new lib6.Scope(new core.DartMap.literal([
        ]),null,null,{
            isModifiable : false}),parent,cls.fileOffset);
    }
    addMember(member : any) : void {
        let builder : lib7.DillMemberBuilder = new lib7.DillMemberBuilder(member,this);
        let name : string = member.name.name;
        if (builder.isConstructor || builder.isFactory) {
            this.constructorScopeBuilder.addMember(name,builder);
        }else if (builder.isSetter) {
            this.scopeBuilder.addSetter(name,builder);
        }else {
            this.scopeBuilder.addMember(name,builder);
        }
    }
    get isMixinApplication() : boolean {
        return this.cls.isMixinApplication;
    }
    get mixedInType() : lib9.KernelTypeBuilder {
        return lib8.internalError("Not implemented.");
    }
    set mixedInType(mixin : lib9.KernelTypeBuilder) {
        lib8.internalError("Not implemented.");
    }
}

export class properties {
}
