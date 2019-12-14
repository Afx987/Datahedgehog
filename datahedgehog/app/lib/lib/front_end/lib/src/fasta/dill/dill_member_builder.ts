/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/dill/dill_member_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/member_builder";
import * as lib4 from "./../builder/builder";
import * as lib5 from "./../kernel/kernel_builder";
import * as lib6 from "./../modifier";
import * as lib7 from "./../errors";

export var computeModifiers : (member : any) => number = (member : any) : number =>  {
    let modifier : number = member.isAbstract ? lib6.properties.abstractMask : 0;
    modifier |= member.isExternal ? lib6.properties.externalMask : 0;
    if (is(member, any)) {
        modifier |= member.isConst ? lib6.properties.constMask : 0;
        modifier |= member.isFinal ? lib6.properties.finalMask : 0;
        modifier |= member.isStatic ? lib6.properties.staticMask : 0;
    }else if (is(member, any)) {
        modifier |= member.isConst ? lib6.properties.constMask : 0;
        modifier |= member.isStatic ? lib6.properties.staticMask : 0;
    }else if (is(member, any)) {
        modifier |= member.isConst ? lib6.properties.constMask : 0;
    }else {
        lib7.internalError(`Unhandled: ${member.runtimeType}`);
    }
    return modifier;
};
export namespace DillMemberBuilder {
    export type Constructors = lib3.MemberBuilder.Constructors | 'DillMemberBuilder';
    export type Interface = Omit<DillMemberBuilder, Constructors>;
}
@DartClass
export class DillMemberBuilder extends lib3.MemberBuilder {
    modifiers : number;

    member : any;

    constructor(member : any,parent : lib4.Builder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DillMemberBuilder(member : any,parent : lib4.Builder) {
        this.modifiers = computeModifiers(member);
        this.member = member;
        super.MemberBuilder(parent,member.fileOffset);
    }
    get target() : any {
        return this.member;
    }
    get name() : string {
        return this.member.name.name;
    }
    get isConstructor() : boolean {
        return is(this.member, any);
    }
    get kind() : any {
        let member = this.member;
        return is(member, any) ? member.kind : null;
    }
    get isRegularMethod() : boolean {
        return core.identical(ProcedureKind.Method,this.kind);
    }
    get isGetter() : boolean {
        return core.identical(ProcedureKind.Getter,this.kind);
    }
    get isSetter() : boolean {
        return core.identical(ProcedureKind.Setter,this.kind);
    }
    get isOperator() : boolean {
        return core.identical(ProcedureKind.Operator,this.kind);
    }
    get isFactory() : boolean {
        return core.identical(ProcedureKind.Factory,this.kind);
    }
    get isRedirectingGenerativeConstructor() : boolean {
        return this.isConstructor && lib5.isRedirectingGenerativeConstructorImplementation(this.member);
    }
    get isSynthetic() : boolean {
        return this.isConstructor && this.name == "" && (this.charOffset == this.parent.charOffset || this.charOffset == -1);
    }
}

export class properties {
}
