/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/procedure_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./member_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./metadata_builder";
import * as lib6 from "./type_variable_builder";
import * as lib7 from "./formal_parameter_builder";
import * as lib8 from "./library_builder";
import * as lib9 from "./../scope";
import * as lib10 from "./builder";

export namespace ProcedureBuilder {
    export type Constructors = lib3.MemberBuilder.Constructors | 'ProcedureBuilder';
    export type Interface<T extends lib4.TypeBuilder> = Omit<ProcedureBuilder<T extends lib4.TypeBuilder>, Constructors>;
}
@DartClass
export class ProcedureBuilder<T extends lib4.TypeBuilder> extends lib3.MemberBuilder {
    metadata : core.DartList<lib5.MetadataBuilder<any>>;

    modifiers : number;

    returnType : T;

    name : string;

    typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>;

    formals : core.DartList<lib7.FormalParameterBuilder<any>>;

    constructor(metadata : core.DartList<lib5.MetadataBuilder<any>>,modifiers : number,returnType : T,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,compilationUnit : lib8.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ProcedureBuilder(metadata : core.DartList<lib5.MetadataBuilder<any>>,modifiers : number,returnType : T,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,compilationUnit : lib8.LibraryBuilder<any,any>,charOffset : number) {
        super.MemberBuilder(compilationUnit,charOffset);
        this.metadata = metadata;
        this.modifiers = modifiers;
        this.returnType = returnType;
        this.name = name;
        this.typeVariables = typeVariables;
        this.formals = formals;
    }
    @AbstractProperty
    get asyncModifier() : any{ throw 'abstract'}
    @AbstractProperty
    get kind() : any{ throw 'abstract'}
    get isConstructor() : boolean {
        return false;
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
    set body(statement : any){ throw 'abstract'}
    computeFormalParameterScope(parent : lib9.Scope) : lib9.Scope {
        if (this.formals == null) return parent;
        let local : core.DartMap<string,lib10.Builder> = new core.DartMap.literal([
        ]);
        for(let formal of this.formals) {
            if (!this.isConstructor || !formal.hasThis) {
                local.set(formal.name,formal);
            }
        }
        return new lib9.Scope(local,null,parent,{
            isModifiable : false});
    }
    computeTypeParameterScope(parent : lib9.Scope) : lib9.Scope {
        if (this.typeVariables == null) return parent;
        let local : core.DartMap<string,lib10.Builder> = new core.DartMap.literal([
        ]);
        for(let variable of this.typeVariables) {
            local.set(variable.name,variable);
        }
        return new lib9.Scope(local,null,parent,{
            isModifiable : false});
    }
}

export class properties {
}
