/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/class_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_declaration_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./type_variable_builder";
import * as lib6 from "./../scope";
import * as lib7 from "./metadata_builder";
import * as lib8 from "./library_builder";
import * as lib9 from "./constructor_reference_builder";
import * as lib10 from "@dart2ts/dart/uri";
import * as lib11 from "./builder";
import * as lib12 from "./mixin_application_builder";
import * as lib13 from "./named_type_builder";
import * as lib14 from "./../errors";
import * as lib15 from "./member_builder";

export namespace ClassBuilder {
    export type Constructors = lib3.TypeDeclarationBuilder.Constructors | 'ClassBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<ClassBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class ClassBuilder<T extends lib4.TypeBuilder,R> extends lib3.TypeDeclarationBuilder<T,R> {
    typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>;

    supertype : T;

    interfaces : core.DartList<T>;

    scope : lib6.Scope;

    constructors : lib6.Scope;

    scopeBuilder : lib6.ScopeBuilder;

    constructorScopeBuilder : lib6.ScopeBuilder;

    constructor(metadata : core.DartList<lib7.MetadataBuilder<any>>,modifiers : number,name : string,typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>,supertype : T,interfaces : core.DartList<T>,scope : lib6.Scope,constructors : lib6.Scope,parent : lib8.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassBuilder(metadata : core.DartList<lib7.MetadataBuilder<any>>,modifiers : number,name : string,typeVariables : core.DartList<lib5.TypeVariableBuilder<any,any>>,supertype : T,interfaces : core.DartList<T>,scope : lib6.Scope,constructors : lib6.Scope,parent : lib8.LibraryBuilder<any,any>,charOffset : number) {
        this.scopeBuilder = new lib6.ScopeBuilder(scope);
        this.constructorScopeBuilder = new lib6.ScopeBuilder(constructors);
        super.TypeDeclarationBuilder(metadata,modifiers,name,parent,charOffset);
        this.typeVariables = typeVariables;
        this.supertype = supertype;
        this.interfaces = interfaces;
        this.scope = scope;
        this.constructors = constructors;
    }
    get isMixinApplication() : boolean {
        return this.mixedInType != null;
    }
    get isNamedMixinApplication() : boolean {
        return this.isMixinApplication && super.isNamedMixinApplication;
    }
    @AbstractProperty
    get mixedInType() : T{ throw 'abstract'}
    set mixedInType(mixin : T){ throw 'abstract'}
    get constructorReferences() : core.DartList<lib9.ConstructorReferenceBuilder> {
        return null;
    }
    get library() : lib8.LibraryBuilder<any,any> {
        let library : lib8.LibraryBuilder<any,any> = this.parent;
        return (library.partOfLibrary || library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveConstructors(library : lib8.LibraryBuilder<any,any>) : number {
        if (this.constructorReferences == null) return 0;
        for(let ref of this.constructorReferences) {
            ref.resolveIn(this.scope);
        }
        return this.constructorReferences.length;
    }
    findStaticBuilder(name : string,charOffset : number,fileUri : lib10.Uri,_namedArguments? : {isSetter? : boolean}) : lib11.Builder {
        let {isSetter} = Object.assign({
            "isSetter" : false}, _namedArguments );
        let builder : lib11.Builder = isSetter ? this.scope.lookupSetter(name,charOffset,fileUri,{
            isInstanceScope : false}) : this.scope.lookup(name,charOffset,fileUri,{
            isInstanceScope : false});
        return builder;
    }
    findConstructorOrFactory(name : string,charOffset : number,uri : lib10.Uri) : lib11.Builder {
        return this.constructors.lookup(name,charOffset,uri);
    }
    getSubstitutionMap(superclass : ClassBuilder<any,any>,fileUri : lib10.Uri,charOffset : number,dynamicType : lib4.TypeBuilder) : core.DartMap<lib5.TypeVariableBuilder<any,any>,lib4.TypeBuilder> {
        let supertype : lib4.TypeBuilder = this.supertype;
        let substitutionMap : core.DartMap<lib5.TypeVariableBuilder<any,any>,lib4.TypeBuilder>;
        let arguments : core.DartList<any>;
        let variables : core.DartList<any>;
        let builder : lib11.Builder;
        var findSuperclass : (application : lib12.MixinApplicationBuilder<any>) => lib13.NamedTypeBuilder<any,any> = (application : lib12.MixinApplicationBuilder<any>) : lib13.NamedTypeBuilder<any,any> =>  {
            for(let t of application.mixins) {
                if (is(t, lib13.NamedTypeBuilder<any,any>)) {
                    if (op(Op.EQUALS,t.builder,superclass)) return t;
                }else if (is(t, lib12.MixinApplicationBuilder<any>)) {
                    let s : lib13.NamedTypeBuilder<any,any> = findSuperclass(t);
                    if (s != null) return s;
                }
            }
            return null;
        };
        var handleNamedTypeBuilder : (t : lib13.NamedTypeBuilder<any,any>) => void = (t : lib13.NamedTypeBuilder<any,any>) : void =>  {
            builder = t.builder;
            arguments = (t.arguments || new core.DartList.literal());
            if (is(builder, ClassBuilder<any,any>)) {
                let cls : ClassBuilder<any,any> = builder;
                variables = cls.typeVariables;
                supertype = cls.supertype;
            }
        };
        while (builder != superclass){
            variables = null;
            if (is(supertype, lib13.NamedTypeBuilder<any,any>)) {
                handleNamedTypeBuilder(supertype);
            }else if (is(supertype, lib12.MixinApplicationBuilder<any>)) {
                let t : lib12.MixinApplicationBuilder<any> = supertype;
                let s : lib13.NamedTypeBuilder<any,any> = findSuperclass(t);
                if (s != null) {
                    handleNamedTypeBuilder(s);
                }
                supertype = t.supertype;
            }else {
                lib14.internalError(`Superclass not found '${superclass.fullNameForErrors}'.`,fileUri,charOffset);
            }
            if (variables != null) {
                let directSubstitutionMap : core.DartMap<lib5.TypeVariableBuilder<any,any>,lib4.TypeBuilder> = new core.DartMap.literal([
                ]);
                for(let i : number = 0; i < variables.length; i++){
                    let argument : lib4.TypeBuilder = i < arguments.length ? arguments[i] : dynamicType;
                    if (substitutionMap != null) {
                        argument = argument.subst(substitutionMap);
                    }
                    directSubstitutionMap.set(variables[i],argument);
                }
                substitutionMap = directSubstitutionMap;
            }
        }
        return substitutionMap;
    }
    forEach(f : <T extends lib4.TypeBuilder,R>(name : string,builder : lib15.MemberBuilder) => void) : void {
        this.scope.forEach(f);
    }
    [OperatorMethods.INDEX](name : string) : lib15.MemberBuilder {
        return (this.scope.local.get(name) || lib14.internalError(`Not found: '${name}'.`));
    }
    addCompileTimeError(charOffset : number,message : string) : void {
        this.library.addCompileTimeError(charOffset,message,{
            fileUri : this.fileUri});
    }
    addWarning(charOffset : number,message : string) : void {
        this.library.addWarning(charOffset,message,{
            fileUri : this.fileUri});
    }
    addNit(charOffset : number,message : string) : void {
        this.library.addNit(charOffset,message,{
            fileUri : this.fileUri});
    }
}

export class properties {
}
