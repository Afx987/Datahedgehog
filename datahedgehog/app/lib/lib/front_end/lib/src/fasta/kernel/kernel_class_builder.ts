/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_class_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/class_builder";
import * as lib4 from "./../builder/metadata_builder";
import * as lib5 from "./../builder/type_variable_builder";
import * as lib6 from "./kernel_type_builder";
import * as lib7 from "./../scope";
import * as lib8 from "./../builder/library_builder";
import * as lib9 from "./../errors";
import * as lib10 from "./kernel_builder";
import * as lib11 from "./../builder/member_builder";
import * as lib12 from "./../builder/builder";
import * as lib13 from "./kernel_procedure_builder";
import * as lib14 from "./../builder/constructor_reference_builder";
import * as lib15 from "./../builder/procedure_builder";
import * as lib16 from "./redirecting_factory_body";
import * as lib17 from "./../dill/dill_member_builder";
import * as lib18 from "./../messages";
import * as lib19 from "./kernel_library_builder";

export namespace KernelClassBuilder {
    export type Constructors = lib3.ClassBuilder.Constructors | 'KernelClassBuilder';
    export type Interface = Omit<KernelClassBuilder, Constructors>;
}
@DartClass
export class KernelClassBuilder extends lib3.ClassBuilder<lib6.KernelTypeBuilder,any> {
    constructor(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,name : string,typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>,supertype : lib6.KernelTypeBuilder,interfaces : core.DartList<lib6.KernelTypeBuilder>,scope : lib7.Scope,constructors : lib7.Scope,parent : lib8.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelClassBuilder(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,name : string,typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>,supertype : lib6.KernelTypeBuilder,interfaces : core.DartList<lib6.KernelTypeBuilder>,scope : lib7.Scope,constructors : lib7.Scope,parent : lib8.LibraryBuilder<any,any>,charOffset : number) {
        super.ClassBuilder(metadata,modifiers,name,typeVariables,supertype,interfaces,scope,constructors,parent,charOffset);
    }
    @AbstractProperty
    get cls() : any{ throw 'abstract'}
    get target() : any {
        return this.cls;
    }
    buildTypesWithBuiltArguments(library : lib8.LibraryBuilder<any,any>,arguments : core.DartList<any>) : any {
        /* TODO (AssertStatementImpl) : assert (arguments == null || cls.typeParameters.length == arguments.length); */;
        return arguments == null ? this.cls.rawType : new bare.createInstance(any,null,this.cls,arguments);
    }
    buildTypeArguments(library : lib8.LibraryBuilder<any,any>,arguments : core.DartList<lib6.KernelTypeBuilder>) : core.DartList<any> {
        let typeArguments : core.DartList<any> = new core.DartList.literal<any>();
        for(let builder of arguments) {
            let type : any = builder.build(library);
            if (op(Op.EQUALS,type,null)) {
                lib9.internalError(`Bad type: ${builder.runtimeType}`);
            }
            typeArguments.add(type);
        }
        return lib10.computeDefaultTypeArguments(library,this.cls.typeParameters,typeArguments);
    }
    buildType(library : lib8.LibraryBuilder<any,any>,arguments : core.DartList<lib6.KernelTypeBuilder>) : any {
        let typeArguments : core.DartList<any>;
        if (arguments != null) {
            typeArguments = this.buildTypeArguments(library,arguments);
        }
        return this.buildTypesWithBuiltArguments(library,typeArguments);
    }
    buildSupertype(library : lib8.LibraryBuilder<any,any>,arguments : core.DartList<lib6.KernelTypeBuilder>) : any {
        if (arguments != null) {
            return new bare.createInstance(any,null,this.cls,this.buildTypeArguments(library,arguments));
        }else {
            return this.cls.asRawSupertype;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveConstructors(library : lib8.LibraryBuilder<any,any>) : number {
        let count : number = super.resolveConstructors(library);
        if (count != 0) {
            let constructors : core.DartMap<string,lib11.MemberBuilder> = this.constructors.local;
            let names : core.DartList<string> = constructors.keys.toList();
            for(let name of names) {
                let builder : lib12.Builder = constructors.get(name);
                if (is(builder, lib13.KernelProcedureBuilder) && builder.isFactory) {
                    let redirectionTarget : lib14.ConstructorReferenceBuilder = builder.redirectionTarget;
                    if (redirectionTarget != null) {
                        /* TODO (AssertStatementImpl) : assert (builder.actualBody == null); */;
                        let targetBuilder : lib12.Builder = redirectionTarget.target;
                        this.addRedirectingConstructor(builder,library);
                        if (is(targetBuilder, lib15.ProcedureBuilder<any>)) {
                            let target : any = targetBuilder.target;
                            builder.body = new lib16.RedirectingFactoryBody(target);
                        }else if (is(targetBuilder, lib17.DillMemberBuilder)) {
                            builder.body = new lib16.RedirectingFactoryBody(targetBuilder.member);
                        }else {
                            let message : string = "Redirection constructor target not found: " + `${redirectionTarget.fullNameForErrors}`;
                            lib18.warning(library.fileUri,-1,message);
                            builder.body = new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,message)));
                        }
                    }
                }
            }
        }
        return count;
    }
    addRedirectingConstructor(constructor : lib13.KernelProcedureBuilder,library : lib19.KernelLibraryBuilder) : void {
        let constructorsField : lib17.DillMemberBuilder = this.scope.local.putIfAbsent("_redirecting#",() =>  {
            let literal : any = new bare.createInstance(any,null,new core.DartList.literal<any>());
            let name : any = new bare.createInstance(any,null,"_redirecting#",library.library);
            let field : any = ((_) : any =>  {
                {
                    _.fileOffset = this.cls.fileOffset;
                    return _;
                }
            })(new bare.createInstance(any,null,name,{
                isStatic : true,initializer : literal,fileUri : this.cls.fileUri}));
            this.cls.addMember(field);
            return new lib17.DillMemberBuilder(field,this);
        });
        let field : any = constructorsField.target;
        let literal : any = field.initializer;
        literal.expressions.add(((_) : any =>  {
            {
                _.parent = literal;
                return _;
            }
        })(new bare.createInstance(any,null,constructor.target)));
    }
    checkOverrides(hierarchy : any) : void {
        hierarchy.forEachOverridePair(this.cls,this.checkOverride.bind(this));
    }
    checkOverride(declaredMember : any,interfaceMember : any,isSetter : boolean) : void {
        if (is(declaredMember, any) || is(interfaceMember, any)) {
            lib9.internalError("Constructor in override check.",this.fileUri,declaredMember.fileOffset);
        }
        if (is(declaredMember, any) && is(interfaceMember, any)) {
            if (op(Op.EQUALS,declaredMember.kind,ProcedureKind.Method) && op(Op.EQUALS,interfaceMember.kind,ProcedureKind.Method)) {
                this.checkMethodOverride(declaredMember,interfaceMember);
                return;
            }
        }
    }
    checkMethodOverride(declaredMember : any,interfaceMember : any) : void {
        if (declaredMember.enclosingClass != this.cls) {
            return;
        }
        /* TODO (AssertStatementImpl) : assert (declaredMember.kind == ProcedureKind.Method); */;
        /* TODO (AssertStatementImpl) : assert (interfaceMember.kind == ProcedureKind.Method); */;
        let declaredFunction : any = declaredMember.function;
        let interfaceFunction : any = interfaceMember.function;
        if (((t)=>(!!t)?t.length:null)(declaredFunction.typeParameters) != ((t)=>(!!t)?t.length:null)(interfaceFunction.typeParameters)) {
            this.addWarning(declaredMember.fileOffset,`Declared type variables of '${this.name}::${declaredMember.name.name}' ` + "doesn't match those on overridden method " + `'${interfaceMember.enclosingClass.name}::` + `${interfaceMember.name.name}'.`);
        }
        if (op(Op.LT,declaredFunction.positionalParameters.length,interfaceFunction.requiredParameterCount) || op(Op.LT,declaredFunction.positionalParameters.length,interfaceFunction.positionalParameters.length)) {
            this.addWarning(declaredMember.fileOffset,`The method '${this.name}::${declaredMember.name.name}' has fewer ` + "positional arguments than those of overridden method " + `'${interfaceMember.enclosingClass.name}::` + `${interfaceMember.name.name}'.`);
        }
        if (op(Op.LT,interfaceFunction.requiredParameterCount,declaredFunction.requiredParameterCount)) {
            this.addWarning(declaredMember.fileOffset,`The method '${this.name}::${declaredMember.name.name}' has more ` + "required arguments than those of overridden method " + `'${interfaceMember.enclosingClass.name}::` + `${interfaceMember.name.name}'.`);
        }
        if (declaredFunction.namedParameters.isEmpty && interfaceFunction.namedParameters.isEmpty) {
            return;
        }
        if (op(Op.LT,declaredFunction.namedParameters.length,interfaceFunction.namedParameters.length)) {
            this.addWarning(declaredMember.fileOffset,`The method '${this.name}::${declaredMember.name.name}' has fewer named ` + "arguments than those of overridden method " + `'${interfaceMember.enclosingClass.name}::` + `${interfaceMember.name.name}'.`);
        }
        let declaredNamedParameters : core.DartIterator<any> = declaredFunction.namedParameters.iterator;
        let interfaceNamedParameters : core.DartIterator<any> = interfaceFunction.namedParameters.iterator;
        outer:
            while (declaredNamedParameters.moveNext() && interfaceNamedParameters.moveNext()){
                while (declaredNamedParameters.current.name != interfaceNamedParameters.current.name){
                    if (!declaredNamedParameters.moveNext()) {
                        this.addWarning(declaredMember.fileOffset,`The method '${this.name}::${declaredMember.name.name}' doesn't have ` + `the named parameter '${interfaceNamedParameters.current.name}' ` + `of overriden method '${interfaceMember.enclosingClass.name}::` + `${interfaceMember.name.name}'.`);
                        break;
                    }
                }
            };
    }
    get fullNameForErrors() : string {
        return this.isMixinApplication ? `${this.supertype.fullNameForErrors} with ${this.mixedInType.fullNameForErrors}` : this.name;
    }
}

export class properties {
}
