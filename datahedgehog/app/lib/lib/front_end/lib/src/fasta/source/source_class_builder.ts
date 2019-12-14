/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/source_class_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../kernel/kernel_library_builder";
import * as lib4 from "./../kernel/kernel_class_builder";
import * as lib5 from "./../builder/constructor_reference_builder";
import * as lib6 from "./../kernel/kernel_type_builder";
import * as lib7 from "./../builder/metadata_builder";
import * as lib8 from "./../builder/type_variable_builder";
import * as lib9 from "./../scope";
import * as lib10 from "./../builder/library_builder";
import * as lib11 from "./../builder/builder";
import * as lib12 from "./../kernel/kernel_field_builder";
import * as lib13 from "./../kernel/kernel_procedure_builder";
import * as lib14 from "./../errors";
import * as lib15 from "./../kernel/kernel_builder";
import * as lib16 from "./../dill/dill_member_builder";

export var initializeClass : (cls : any,name : string,parent : lib3.KernelLibraryBuilder,charOffset : number) => any = (cls : any,name : string,parent : lib3.KernelLibraryBuilder,charOffset : number) : any =>  {
    cls = ( cls ) || ( new bare.createInstance(any,null,{
        name : name}) );
    cls.fileUri = ( cls.fileUri ) || ( parent.library.fileUri );
    if (op(Op.EQUALS,cls.fileOffset,TreeNode.noOffset)) {
        cls.fileOffset = charOffset;
    }
    return cls;
};
export namespace SourceClassBuilder {
    export type Constructors = lib4.KernelClassBuilder.Constructors | 'SourceClassBuilder';
    export type Interface = Omit<SourceClassBuilder, Constructors>;
}
@DartClass
export class SourceClassBuilder extends lib4.KernelClassBuilder {
    cls : any;

    constructorReferences : core.DartList<lib5.ConstructorReferenceBuilder>;

    mixedInType : lib6.KernelTypeBuilder;

    constructor(metadata : core.DartList<lib7.MetadataBuilder<any>>,modifiers : number,name : string,typeVariables : core.DartList<lib8.TypeVariableBuilder<any,any>>,supertype : lib6.KernelTypeBuilder,interfaces : core.DartList<lib6.KernelTypeBuilder>,scope : lib9.Scope,constructors : lib9.Scope,parent : lib10.LibraryBuilder<any,any>,constructorReferences : core.DartList<lib5.ConstructorReferenceBuilder>,charOffset : number,cls? : any,mixedInType? : lib6.KernelTypeBuilder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SourceClassBuilder(metadata : core.DartList<lib7.MetadataBuilder<any>>,modifiers : number,name : string,typeVariables : core.DartList<lib8.TypeVariableBuilder<any,any>>,supertype : lib6.KernelTypeBuilder,interfaces : core.DartList<lib6.KernelTypeBuilder>,scope : lib9.Scope,constructors : lib9.Scope,parent : lib10.LibraryBuilder<any,any>,constructorReferences : core.DartList<lib5.ConstructorReferenceBuilder>,charOffset : number,cls? : any,mixedInType? : lib6.KernelTypeBuilder) {
        this.cls = initializeClass(cls,name,parent,charOffset);
        super.KernelClassBuilder(metadata,modifiers,name,typeVariables,supertype,interfaces,scope,constructors,parent,charOffset);
        this.constructorReferences = constructorReferences;
        this.mixedInType = mixedInType;
    }
    resolveTypes(library : lib10.LibraryBuilder<any,any>) : number {
        let count : number = 0;
        if (this.typeVariables != null) {
            for(let t of this.typeVariables) {
                this.cls.typeParameters.add(t.parameter);
            }
            setParents(this.cls.typeParameters,this.cls);
            count += this.cls.typeParameters.length;
        }
        return count + super.resolveTypes(library);
    }
    build(library : lib3.KernelLibraryBuilder,coreLibrary : lib10.LibraryBuilder<any,any>) : any {
        var buildBuilders : (name : string,builder : lib11.Builder) => void = (name : string,builder : lib11.Builder) : void =>  {
            do{
                if (is(builder, lib12.KernelFieldBuilder)) {
                    this.cls.addMember(builder.build(library));
                }else if (is(builder, lib13.KernelFunctionBuilder)) {
                    this.cls.addMember(builder.build(library));
                }else {
                    lib14.internalError(`Unhandled builder: ${builder.runtimeType}`);
                }
                builder = builder.next;
            } while (builder != null);
        };
        this.scope.forEach(buildBuilders);
        this.constructors.forEach(buildBuilders);
        this.cls.supertype = ((_558_)=>(!!_558_)?_558_.buildSupertype(library):null)(this.supertype);
        this.cls.mixedInType = ((_559_)=>(!!_559_)?_559_.buildSupertype(library):null)(this.mixedInType);
        this.cls.isAbstract = this.isAbstract;
        if (this.interfaces != null) {
            for(let interface of this.interfaces) {
                let supertype : any = interface.buildSupertype(library);
                if (supertype != null) {
                    this.cls.implementedTypes.add(supertype);
                }
            }
        }
        this.constructors.forEach((name : string,constructor : lib11.Builder) =>  {
            let member : lib11.Builder = op(Op.INDEX,this.scopeBuilder,name);
            if (op(Op.EQUALS,member,null)) return;
            this.addCompileTimeError(constructor.charOffset,`Conflicts with member '${name}'.`);
            if (constructor.isFactory) {
                this.addCompileTimeError(member.charOffset,`Conflicts with factory '${this.name}.${name}'.`);
            }else {
                this.addCompileTimeError(member.charOffset,`Conflicts with constructor '${this.name}.${name}'.`);
            }
        });
        this.scope.setters.forEach((name : string,setter : lib11.Builder) =>  {
            let member : lib11.Builder = op(Op.INDEX,this.scopeBuilder,name);
            if (op(Op.EQUALS,member,null) || !member.isField || member.isFinal) return;
            let report = member.isInstanceMember != setter.isInstanceMember ? this.addWarning.bind(this) : this.addCompileTimeError.bind(this);
            report(setter.charOffset,`Conflicts with member '${name}'.`);
            report(member.charOffset,`Conflicts with setter '${name}'.`);
        });
        this.cls.procedures.sort(lib15.compareProcedures);
        return this.cls;
    }
    addSyntheticConstructor(constructor : any) : void {
        let name : string = constructor.name.name;
        this.cls.constructors.add(constructor);
        constructor.parent = this.cls;
        let memberBuilder : lib16.DillMemberBuilder = new lib16.DillMemberBuilder(constructor,this);
        memberBuilder.next = op(Op.INDEX,this.constructorScopeBuilder,name);
        this.constructorScopeBuilder.addMember(name,memberBuilder);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    prepareInitializerInference(library : any,currentClass : any) : void {
        this.scope.forEach((name : any,builder : any) =>  {
            builder.prepareInitializerInference(library,this);
        });
    }
}

export class properties {
}
