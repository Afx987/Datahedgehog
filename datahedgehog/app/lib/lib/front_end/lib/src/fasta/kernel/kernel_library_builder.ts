/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_library_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../source/source_library_builder";
import * as lib4 from "./../source/source_class_builder";
import * as lib5 from "./kernel_procedure_builder";
import * as lib6 from "./kernel_type_variable_builder";
import * as lib7 from "@dart2ts/dart/uri";
import * as lib8 from "./../loader";
import * as lib9 from "./../util/relativize";
import * as lib10 from "./kernel_type_builder";
import * as lib11 from "./kernel_named_type_builder";
import * as lib12 from "./kernel_mixin_application_builder";
import * as lib13 from "./../builder/metadata_builder";
import * as lib14 from "./../builder/type_variable_builder";
import * as lib15 from "./../builder/member_builder";
import * as lib16 from "./../scope";
import * as lib17 from "./../builder/constructor_reference_builder";
import * as lib18 from "./../builder/class_builder";
import * as lib19 from "./../builder/builder";
import * as lib20 from "./../modifier";
import * as lib21 from "./../builder/type_builder";
import * as lib22 from "./../builder/named_type_builder";
import * as lib23 from "./kernel_field_builder";
import * as lib24 from "./../builder/formal_parameter_builder";
import * as lib25 from "./../builder/procedure_builder";
import * as lib26 from "./kernel_enum_builder";
import * as lib27 from "./kernel_function_type_alias_builder";
import * as lib28 from "./../builder/function_type_alias_builder";
import * as lib29 from "./kernel_function_type_builder";
import * as lib30 from "./kernel_formal_parameter_builder";
import * as lib31 from "./../builder/library_builder";
import * as lib32 from "./../builder/prefix_builder";
import * as lib33 from "./../builder/builtin_type_builder";
import * as lib34 from "./../errors";
import * as lib35 from "./kernel_builder";
import * as lib36 from "./../builder/invalid_type_builder";
import * as lib37 from "./kernel_invalid_type_builder";

export namespace KernelLibraryBuilder {
    export type Constructors = lib3.SourceLibraryBuilder.Constructors | 'KernelLibraryBuilder';
    export type Interface = Omit<KernelLibraryBuilder, Constructors>;
}
@DartClass
export class KernelLibraryBuilder extends lib3.SourceLibraryBuilder<lib10.KernelTypeBuilder,any> {
    library : any;

    mixinApplicationClasses : core.DartMap<string,lib4.SourceClassBuilder>;

    argumentsWithMissingDefaultValues : core.DartList<core.DartList<any>>;

    nativeMethods : core.DartList<lib5.KernelProcedureBuilder>;

    boundlessTypeVariables : core.DartList<lib6.KernelTypeVariableBuilder>;

    constructor(uri : lib7.Uri,fileUri : lib7.Uri,loader : lib8.Loader<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelLibraryBuilder(uri : lib7.Uri,fileUri : lib7.Uri,loader : lib8.Loader<any>) {
        this.mixinApplicationClasses = new core.DartMap.literal([
        ]);
        this.argumentsWithMissingDefaultValues = new core.DartList.literal<core.DartList<any>>();
        this.nativeMethods = new core.DartList.literal<lib5.KernelProcedureBuilder>();
        this.boundlessTypeVariables = new core.DartList.literal<lib6.KernelTypeVariableBuilder>();
        this.library = new bare.createInstance(any,null,uri,{
            fileUri : lib9.relativizeUri(fileUri)});
        super.SourceLibraryBuilder(loader,fileUri);
    }
    get target() : any {
        return this.library;
    }
    get uri() : lib7.Uri {
        return this.library.importUri;
    }
    addNamedType(name : string,arguments : core.DartList<lib10.KernelTypeBuilder>,charOffset : number) : lib10.KernelTypeBuilder {
        return this.addType(new lib11.KernelNamedTypeBuilder(name,arguments,charOffset,this.fileUri));
    }
    addMixinApplication(supertype : lib10.KernelTypeBuilder,mixins : core.DartList<lib10.KernelTypeBuilder>,charOffset : number) : lib10.KernelTypeBuilder {
        let type : lib10.KernelTypeBuilder = new lib12.KernelMixinApplicationBuilder(supertype,mixins,this,charOffset,this.fileUri);
        return this.addType(type);
    }
    addVoidType(charOffset : number) : lib10.KernelTypeBuilder {
        return this.addNamedType("void",null,charOffset);
    }
    addClass(metadata : core.DartList<lib13.MetadataBuilder<any>>,modifiers : number,className : string,typeVariables : core.DartList<lib14.TypeVariableBuilder<any,any>>,supertype : lib10.KernelTypeBuilder,interfaces : core.DartList<lib10.KernelTypeBuilder>,charOffset : number) : void {
        let declaration = ((_) : lib3.DeclarationBuilder<lib10.KernelTypeBuilder> =>  {
            {
                _.resolveTypes(typeVariables,this);
                return _;
            }
        })(this.endNestedDeclaration());
        /* TODO (AssertStatementImpl) : assert (declaration.parent == libraryDeclaration); */;
        let members : core.DartMap<string,lib15.MemberBuilder> = declaration.members;
        let constructors : core.DartMap<string,lib15.MemberBuilder> = declaration.constructors;
        let setters : core.DartMap<string,lib15.MemberBuilder> = declaration.setters;
        let classScope : lib16.Scope = new lib16.Scope(members,setters,this.scope.withTypeVariables(typeVariables),{
            isModifiable : false});
        let constructorScope : lib16.Scope = new lib16.Scope(constructors,null,null,{
            isModifiable : false});
        let cls : lib18.ClassBuilder<any,any> = new lib4.SourceClassBuilder(metadata,modifiers,className,typeVariables,this.applyMixins(supertype,{
            subclassName : className,typeVariables : typeVariables}),interfaces,classScope,constructorScope,this,new core.DartList.from(this.constructorReferences),charOffset);
        this.constructorReferences.clear();
        let typeVariablesByName : core.DartMap<string,lib14.TypeVariableBuilder<any,any>> = this.checkTypeVariables(typeVariables,cls);
        var setParent : (name : string,member : lib15.MemberBuilder) => void = (name : string,member : lib15.MemberBuilder) : void =>  {
            while (member != null){
                member.parent = cls;
                member = member.next;
            }
        };
        var setParentAndCheckConflicts : (name : string,member : lib15.MemberBuilder) => void = (name : string,member : lib15.MemberBuilder) : void =>  {
            if (typeVariablesByName != null) {
                let tv : lib14.TypeVariableBuilder<any,any> = typeVariablesByName.get(name);
                if (tv != null) {
                    cls.addCompileTimeError(member.charOffset,`Conflict with type variable '${name}'.`);
                    cls.addCompileTimeError(tv.charOffset,"This is the type variable.");
                }
            }
            setParent(name,member);
        };
        members.forEach(setParentAndCheckConflicts);
        constructors.forEach(setParentAndCheckConflicts);
        setters.forEach(setParent);
        this.addBuilder(className,cls,charOffset);
    }
    checkTypeVariables(typeVariables : core.DartList<lib14.TypeVariableBuilder<any,any>>,owner : lib19.Builder) : core.DartMap<string,lib14.TypeVariableBuilder<any,any>> {
        if ((((t)=>(!!t)?t.isEmpty:null)(typeVariables) || true)) return null;
        let typeVariablesByName : core.DartMap<string,lib14.TypeVariableBuilder<any,any>> = new core.DartMap.literal([
        ]);
        for(let tv of typeVariables) {
            let existing : lib14.TypeVariableBuilder<any,any> = typeVariablesByName.get(tv.name);
            if (existing != null) {
                this.addCompileTimeError(tv.charOffset,"A type variable can't have the same name as another.");
                this.addCompileTimeError(existing.charOffset,`The other type variable named '${tv.name}'.`);
            }else {
                typeVariablesByName.set(tv.name,tv);
                if (is(owner, lib18.ClassBuilder<any,any>)) {
                    if (tv.name == owner.name) {
                        this.addCompileTimeError(tv.charOffset,"A type variable can't have the same name as its enclosing " + "declaration.");
                    }
                }
            }
        }
        return typeVariablesByName;
    }
    applyMixin(supertype : lib10.KernelTypeBuilder,mixin : lib10.KernelTypeBuilder,signature : string,_namedArguments? : {metadata? : core.DartList<lib13.MetadataBuilder<any>>,name? : string,typeVariables? : core.DartList<lib14.TypeVariableBuilder<any,any>>,modifiers? : number,interfaces? : core.DartList<lib10.KernelTypeBuilder>,charOffset? : number}) : lib10.KernelTypeBuilder {
        let {metadata,name,typeVariables,modifiers,interfaces,charOffset} = Object.assign({
            "modifiers" : lib20.properties.abstractMask,
            "charOffset" : -1}, _namedArguments );
        let constructors = new core.DartMap.literal([
        ]);
        let isNamed : boolean = name != null;
        let builder : lib4.SourceClassBuilder;
        if (isNamed) {
            modifiers |= lib20.properties.namedMixinApplicationMask;
        }else {
            name = supertype.name;
            let index : number = new core.DartString(name).indexOf("^");
            if (index != -1) {
                name = new core.DartString(name).substring(0,index);
            }
            name = `${name}&${mixin.name}${signature}`;
            builder = this.mixinApplicationClasses.get(name);
        }
        if (op(Op.EQUALS,builder,null)) {
            builder = new lib4.SourceClassBuilder(metadata,modifiers,name,typeVariables,supertype,interfaces,new lib16.Scope(new core.DartMap.literal([
            ]),new core.DartMap.literal([
            ]),this.scope.withTypeVariables(typeVariables),{
                isModifiable : false}),new lib16.Scope(constructors,null,null,{
                isModifiable : false}),this,new core.DartList.literal<lib17.ConstructorReferenceBuilder>(),charOffset,null,mixin);
            this.addBuilder(name,builder,charOffset);
            if (!isNamed) {
                this.mixinApplicationClasses.set(name,builder);
            }
        }
        return ((_) : lib10.KernelTypeBuilder =>  {
            {
                _.bind(isNamed ? builder : null);
                return _;
            }
        })(this.addNamedType(name,new core.DartList.literal<lib10.KernelTypeBuilder>(),charOffset));
    }
    applyMixins(type : lib10.KernelTypeBuilder,_namedArguments? : {metadata? : core.DartList<lib13.MetadataBuilder<any>>,name? : string,subclassName? : string,typeVariables? : core.DartList<lib14.TypeVariableBuilder<any,any>>,modifiers? : number,interfaces? : core.DartList<lib10.KernelTypeBuilder>,charOffset? : number}) : lib10.KernelTypeBuilder {
        let {metadata,name,subclassName,typeVariables,modifiers,interfaces,charOffset} = Object.assign({
            "modifiers" : lib20.properties.abstractMask,
            "charOffset" : -1}, _namedArguments );
        if (is(type, lib12.KernelMixinApplicationBuilder)) {
            subclassName = ( subclassName ) || ( name );
            let signatureParts : core.DartList<core.DartList<string>> = new core.DartList.literal<core.DartList<string>>();
            let unresolved : core.DartMap<string,string> = new core.DartMap.literal([
            ]);
            let unresolvedReversed : core.DartMap<string,string> = new core.DartMap.literal([
            ]);
            let unresolvedCount : number = 0;
            let freeTypes : core.DartMap<string,lib21.TypeBuilder> = new core.DartMap.literal([
            ]);
            if (name == null || type.mixins.length != 1) {
                let last : lib21.TypeBuilder = type.mixins.last;
                var analyzeArguments : (type : lib21.TypeBuilder) => void = (type : lib21.TypeBuilder) : void =>  {
                    if (name != null && op(Op.EQUALS,type,last)) {
                        return;
                    }
                    if (is(type, lib22.NamedTypeBuilder<any,any>)) {
                        let part : core.DartList<string> = new core.DartList.literal<string>();
                        for(let i : number = 0; i < ((((t)=>(!!t)?t.length:null)(type.arguments) || 0)); i++){
                            let argument = type.arguments[i];
                            let name : string;
                            if (is(argument, lib22.NamedTypeBuilder<any,any>)) {
                                if (argument.builder != null) {
                                    let index : number = (((_541_)=>(!!_541_)?_541_.indexOf(argument.builder):null)(typeVariables) || -1);
                                    if (index != -1) {
                                        name = `#T${index}`;
                                    }
                                }else if (argument.arguments == null) {
                                    name = unresolved.set(argument.name,`#U${unresolvedCount++}`);
                                }
                            }
                            name = ( name ) || ( `#U${unresolvedCount++}` );
                            unresolvedReversed.set(name,argument.name);
                            freeTypes.set(name,argument);
                            part.add(name);
                            type.arguments[i] = new lib11.KernelNamedTypeBuilder(name,null,-1,this.fileUri);
                        }
                        signatureParts.add(part);
                    }
                };
                analyzeArguments(type.supertype);
                type.mixins.forEach(analyzeArguments);
            }
            let supertype : lib10.KernelTypeBuilder = type.supertype;
            let currentSignatureParts : core.DartList<core.DartList<string>> = new core.DartList.literal<core.DartList<string>>();
            let currentSignatureCount : number = 0;
            var computeSignature : () => string = () : string =>  {
                if (freeTypes.isEmpty) return "";
                currentSignatureParts.add(signatureParts[currentSignatureCount++]);
                if (currentSignatureParts.any((l : any) =>  {
                    return l.isNotEmpty;
                })) {
                    return `^${currentSignatureParts.map((l : any) =>  {
                        return l.join('&');
                    }).join('^')}`;
                }else {
                    return "";
                }
            };
            var computeTypeVariables : () => core.DartMap<string,lib14.TypeVariableBuilder<any,any>> = () : core.DartMap<string,lib14.TypeVariableBuilder<any,any>> =>  {
                let variables : core.DartMap<string,lib14.TypeVariableBuilder<any,any>> = new core.DartMap.literal([
                ]);
                for(let strings of currentSignatureParts) {
                    for(let name of strings) {
                        variables.set(name,this.addTypeVariable(name,null,-1));
                    }
                }
                return variables;
            };
            var checkArguments : (t : any) => any = (t : any) =>  {
                for(let argument of (t.arguments || new core.DartList.literal())) {
                    if (op(Op.EQUALS,argument.builder,null) && argument.name.startsWith("#")) {
                        throw `No builder on ${argument.name}`;
                    }
                }
            };
            computeSignature();
            for(let i : number = 0; i < type.mixins.length - 1; i++){
                let supertypeArguments : core.DartSet<string> = new core.DartSet<string>();
                for(let part of currentSignatureParts) {
                    supertypeArguments.addAll(part);
                }
                let signature : string = computeSignature();
                let variables = computeTypeVariables();
                if (supertypeArguments.isNotEmpty) {
                    supertype = this.addNamedType(supertype.name,supertypeArguments.map((n : any) =>  {
                        return ((_) : lib10.KernelTypeBuilder =>  {
                            {
                                _.bind(variables.get(n));
                                return _;
                            }
                        })(this.addNamedType(n,null,-1));
                    }).toList(),-1);
                }
                let mixin : lib11.KernelNamedTypeBuilder = type.mixins[i];
                for(let type of (mixin.arguments || new core.DartList.literal())) {
                    type.bind(variables.get(type.name));
                }
                checkArguments(supertype);
                checkArguments(mixin);
                supertype = this.applyMixin(supertype,mixin,signature,{
                    typeVariables : new core.DartList.from(variables.values)});
            }
            let mixin : lib11.KernelNamedTypeBuilder = type.mixins.last;
            let supertypeArguments : core.DartSet<string> = new core.DartSet<string>();
            for(let part of currentSignatureParts) {
                supertypeArguments.addAll(part);
            }
            let signature : string = name == null ? computeSignature() : "";
            let variables;
            if (name == null) {
                variables = computeTypeVariables();
                typeVariables = new core.DartList.from(variables.values);
                if (supertypeArguments.isNotEmpty) {
                    supertype = this.addNamedType(supertype.name,supertypeArguments.map((n : any) =>  {
                        return ((_) : lib10.KernelTypeBuilder =>  {
                            {
                                _.bind(variables.get(n));
                                return _;
                            }
                        })(this.addNamedType(n,null,-1));
                    }).toList(),-1);
                }
            }else {
                if (supertypeArguments.isNotEmpty) {
                    supertype = this.addNamedType(supertype.name,supertypeArguments.map((n : any) =>  {
                        return freeTypes.get(n);
                    }).toList(),-1);
                }
            }
            if (name == null) {
                for(let type of (mixin.arguments || new core.DartList.literal())) {
                    type.bind(op(Op.INDEX,variables,type.name));
                }
            }
            checkArguments(supertype);
            checkArguments(mixin);
            let t : lib11.KernelNamedTypeBuilder = this.applyMixin(supertype,mixin,signature,{
                metadata : metadata,name : name,typeVariables : typeVariables,modifiers : modifiers,interfaces : interfaces,charOffset : charOffset});
            if (name == null) {
                let builder = t.builder;
                t = this.addNamedType(t.name,freeTypes.keys.map((k : any) =>  {
                    return freeTypes.get(k);
                }).toList(),-1);
                if (builder != null) {
                    t.bind(builder);
                }
            }
            return t;
        }else {
            return type;
        }
    }
    addNamedMixinApplication(metadata : core.DartList<lib13.MetadataBuilder<any>>,name : string,typeVariables : core.DartList<lib14.TypeVariableBuilder<any,any>>,modifiers : number,mixinApplication : lib10.KernelTypeBuilder,interfaces : core.DartList<lib10.KernelTypeBuilder>,charOffset : number) : void {
        this.endNestedDeclaration().resolveTypes(typeVariables,this);
        let supertype : lib11.KernelNamedTypeBuilder = this.applyMixins(mixinApplication,{
            metadata : metadata,name : name,typeVariables : typeVariables,modifiers : modifiers,interfaces : interfaces,charOffset : charOffset});
        this.checkTypeVariables(typeVariables,supertype.builder);
    }
    addField(metadata : core.DartList<lib13.MetadataBuilder<any>>,modifiers : number,type : lib10.KernelTypeBuilder,name : string,charOffset : number,initializer : any) : void {
        this.addBuilder(name,new lib23.KernelFieldBuilder(metadata,type,name,modifiers,this,charOffset,initializer),charOffset);
    }
    computeAndValidateConstructorName(name : string,charOffset : number) : string {
        let className : string = this.currentDeclaration.name;
        let startsWithClassName : boolean = new core.DartString(name).startsWith(className);
        if (startsWithClassName && new core.DartString(name).length == new core.DartString(className).length) {
            return "";
        }
        let index : number = new core.DartString(name).indexOf(".");
        if (startsWithClassName && index == new core.DartString(className).length) {
            return new core.DartString(name).substring(index + 1);
        }
        if (index == -1) {
            return null;
        }
        let suffix : string = new core.DartString(name).substring(index + 1);
        this.addCompileTimeError(charOffset,`'${name}' isn't a legal method name.\n` + `Did you mean '${className}.${suffix}'?`);
        return suffix;
    }
    addProcedure(metadata : core.DartList<lib13.MetadataBuilder<any>>,modifiers : number,returnType : lib10.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib14.TypeVariableBuilder<any,any>>,formals : core.DartList<lib24.FormalParameterBuilder<any>>,kind : any,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName : string,_namedArguments? : {isTopLevel? : boolean}) : void {
        let {isTopLevel} = Object.assign({
        }, _namedArguments );
        this.endNestedDeclaration().resolveTypes(typeVariables,this);
        let procedure : lib25.ProcedureBuilder<any>;
        let constructorName : string = isTopLevel ? null : this.computeAndValidateConstructorName(name,charOffset);
        if (constructorName != null) {
            name = constructorName;
            procedure = new lib5.KernelConstructorBuilder(metadata,modifiers & ~lib20.properties.abstractMask,returnType,name,typeVariables,formals,this,charOffset,charOpenParenOffset,charEndOffset,nativeMethodName);
        }else {
            procedure = new lib5.KernelProcedureBuilder(metadata,modifiers,returnType,name,typeVariables,formals,kind,this,charOffset,charOpenParenOffset,charEndOffset,nativeMethodName);
        }
        this.addBuilder(name,procedure,charOffset);
        if (nativeMethodName != null) {
            this.addNativeMethod(procedure);
        }
    }
    addFactoryMethod(metadata : core.DartList<lib13.MetadataBuilder<any>>,modifiers : number,constructorNameReference : lib17.ConstructorReferenceBuilder,formals : core.DartList<lib24.FormalParameterBuilder<any>>,redirectionTarget : lib17.ConstructorReferenceBuilder,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName : string) : void {
        let factoryDeclaration : lib3.DeclarationBuilder<lib10.KernelTypeBuilder> = this.endNestedDeclaration();
        let name : string = constructorNameReference.name;
        let constructorName : string = this.computeAndValidateConstructorName(name,charOffset);
        if (constructorName != null) {
            name = constructorName;
        }
        /* TODO (AssertStatementImpl) : assert (constructorNameReference.suffix == null); */;
        let procedure : lib5.KernelProcedureBuilder = new lib5.KernelProcedureBuilder(metadata,lib20.properties.staticMask | modifiers,null,name,new core.DartList.literal<lib14.TypeVariableBuilder<any,any>>(),formals,ProcedureKind.Factory,this,charOffset,charOpenParenOffset,charEndOffset,nativeMethodName,redirectionTarget);
        this.currentDeclaration.addFactoryDeclaration(procedure,factoryDeclaration);
        this.addBuilder(name,procedure,charOffset);
        if (nativeMethodName != null) {
            this.addNativeMethod(procedure);
        }
    }
    addEnum(metadata : core.DartList<lib13.MetadataBuilder<any>>,name : string,constantNamesAndOffsets : core.DartList<core.DartObject>,charOffset : number,charEndOffset : number) : void {
        this.addBuilder(name,new lib26.KernelEnumBuilder(this.loader.astFactory,metadata,name,constantNamesAndOffsets,this,charOffset,charEndOffset),charOffset);
    }
    addFunctionTypeAlias(metadata : core.DartList<lib13.MetadataBuilder<any>>,returnType : lib10.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib14.TypeVariableBuilder<any,any>>,formals : core.DartList<lib24.FormalParameterBuilder<any>>,charOffset : number) : void {
        let typedef : lib28.FunctionTypeAliasBuilder<any,any> = new lib27.KernelFunctionTypeAliasBuilder(metadata,returnType,name,typeVariables,formals,this,charOffset);
        this.endNestedDeclaration().resolveTypes(typeVariables,this);
        this.addBuilder(name,typedef,charOffset);
    }
    addFunctionType(returnType : lib10.KernelTypeBuilder,typeVariables : core.DartList<lib14.TypeVariableBuilder<any,any>>,formals : core.DartList<lib24.FormalParameterBuilder<any>>,charOffset : number) : lib29.KernelFunctionTypeBuilder {
        return this.addType(new lib29.KernelFunctionTypeBuilder(charOffset,this.fileUri,returnType,typeVariables,formals));
    }
    addFormalParameter(metadata : core.DartList<lib13.MetadataBuilder<any>>,modifiers : number,type : lib10.KernelTypeBuilder,name : string,hasThis : boolean,charOffset : number) : lib30.KernelFormalParameterBuilder {
        return new lib30.KernelFormalParameterBuilder(metadata,modifiers,type,name,hasThis,this,charOffset);
    }
    addTypeVariable(name : string,bound : lib10.KernelTypeBuilder,charOffset : number) : lib6.KernelTypeVariableBuilder {
        let builder = new lib6.KernelTypeVariableBuilder(name,this,charOffset,bound);
        this.boundlessTypeVariables.add(builder);
        return builder;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildBuilder(builder : lib19.Builder,coreLibrary : lib31.LibraryBuilder<any,any>) : void {
        if (is(builder, lib4.SourceClassBuilder)) {
            let cls : any = builder.build(this,coreLibrary);
            this.library.addClass(cls);
        }else if (is(builder, lib23.KernelFieldBuilder)) {
            this.library.addMember(((_) : any =>  {
                {
                    _.isStatic = true;
                    return _;
                }
            })(builder.build(this)));
        }else if (is(builder, lib5.KernelProcedureBuilder)) {
            this.library.addMember(((_) : any =>  {
                {
                    _.isStatic = true;
                    return _;
                }
            })(builder.build(this)));
        }else if (is(builder, lib27.KernelFunctionTypeAliasBuilder)) {
            this.library.addTypedef(builder.build(this));
        }else if (is(builder, lib26.KernelEnumBuilder)) {
            this.library.addClass(builder.build(this,coreLibrary));
        }else if (is(builder, lib32.PrefixBuilder)) {
        }else if (is(builder, lib33.BuiltinTypeBuilder<any,any>)) {
        }else {
            lib34.internalError(`Unhandled builder: ${builder.runtimeType}`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(coreLibrary : lib31.LibraryBuilder<any,any>) : any {
        super.build(coreLibrary);
        this.library.name = this.name;
        this.library.procedures.sort(lib35.compareProcedures);
        return this.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildAmbiguousBuilder(name : string,builder : lib19.Builder,other : lib19.Builder,charOffset : number,_namedArguments? : {isExport? : boolean,isImport? : boolean}) : lib19.Builder {
        let {isExport,isImport} = Object.assign({
            "isExport" : false,
            "isImport" : false}, _namedArguments );
        if (op(Op.EQUALS,builder,other)) return builder;
        if (is(builder, lib36.InvalidTypeBuilder<any,any>)) return builder;
        if (is(other, lib36.InvalidTypeBuilder<any,any>)) return other;
        if (is(builder, lib16.AccessErrorBuilder)) {
            let error : lib16.AccessErrorBuilder = builder;
            builder = error.builder;
        }
        if (is(other, lib16.AccessErrorBuilder)) {
            let error : lib16.AccessErrorBuilder = other;
            other = error.builder;
        }
        let isLocal : boolean = false;
        let preferred : lib19.Builder;
        let uri : lib7.Uri;
        let otherUri : lib7.Uri;
        let preferredUri : lib7.Uri;
        let hiddenUri : lib7.Uri;
        if (op(Op.EQUALS,this.scope.local.get(name),builder)) {
            isLocal = true;
            preferred = builder;
            hiddenUri = other.computeLibraryUri();
        }else {
            uri = builder.computeLibraryUri();
            otherUri = other.computeLibraryUri();
            if (((t)=>(!!t)?t.scheme:null)(otherUri) == "dart" && ((t)=>(!!t)?t.scheme:null)(uri) != "dart") {
                preferred = builder;
                preferredUri = uri;
                hiddenUri = otherUri;
            }else if (((t)=>(!!t)?t.scheme:null)(uri) == "dart" && ((t)=>(!!t)?t.scheme:null)(otherUri) != "dart") {
                preferred = other;
                preferredUri = otherUri;
                hiddenUri = uri;
            }
        }
        if (preferred != null) {
            if (isLocal) {
                if (isExport) {
                    this.addNit(charOffset,`Local definition of '${name}' hides export from '${hiddenUri}'.`);
                }else {
                    this.addNit(charOffset,`Local definition of '${name}' hides import from '${hiddenUri}'.`);
                }
            }else {
                if (isExport) {
                    this.addNit(charOffset,`Export of '${name}' (from '${preferredUri}') hides export from ` + `'${hiddenUri}'.`);
                }else {
                    this.addNit(charOffset,`Import of '${name}' (from '${preferredUri}') hides import from ` + `'${hiddenUri}'.`);
                }
            }
            return preferred;
        }
        if (op(Op.EQUALS,builder.next,null) && op(Op.EQUALS,other.next,null)) {
            if (isImport && is(builder, lib32.PrefixBuilder) && is(other, lib32.PrefixBuilder)) {
                return ((_) : lib32.PrefixBuilder =>  {
                    {
                        _.exports.merge(other.exports,(name : string,existing : lib19.Builder,member : lib19.Builder) =>  {
                            return this.buildAmbiguousBuilder(name,existing,member,charOffset,{
                                isExport : isExport,isImport : isImport});
                        });
                        return _;
                    }
                })(builder);
            }
        }
        if (isExport) {
            this.addNit(charOffset,`'${name}' is exported from both '${uri}' and '${otherUri}'.`);
        }else {
            this.addNit(charOffset,`'${name}' is imported from both '${uri}' and '${otherUri}'.`);
        }
        return new lib37.KernelInvalidTypeBuilder(name,charOffset,this.fileUri);
    }
    finishStaticInvocations() : number {
        let cloner : any;
        for(let list of this.argumentsWithMissingDefaultValues) {
            let arguments : any = list[0];
            let function : any = list[1];
            var defaultArgumentFrom : (expression : any) => any = (expression : any) : any =>  {
                if (op(Op.EQUALS,expression,null)) {
                    return new bare.createInstance(any,null);
                }
                cloner = ( cloner ) || ( new bare.createInstance(any,null) );
                return cloner.clone(expression);
            };
            for(let i : number = function.requiredParameterCount; i < function.positionalParameters.length; i++){
                op(Op.INDEX_ASSIGN,arguments.positional,i,((_) : any =>  {
                    {
                        _.parent = arguments;
                        return _;
                    }
                })(defaultArgumentFrom(op(Op.INDEX,function.positionalParameters,i).initializer)));
            }
            let names : core.DartMap<string,any>;
            for(let expression of arguments.named) {
                if (op(Op.EQUALS,expression.value,null)) {
                    if (names == null) {
                        names = new core.DartMap.literal([
                        ]);
                        for(let parameter of function.namedParameters) {
                            names.set(parameter.name,parameter);
                        }
                    }
                    expression.value = ((_) : any =>  {
                        {
                            _.parent = expression;
                            return _;
                        }
                    })(defaultArgumentFrom(names.get(expression.name).initializer));
                }
            }
        }
        return this.argumentsWithMissingDefaultValues.length;
    }
    addNativeMethod(method : lib5.KernelProcedureBuilder) : void {
        this.nativeMethods.add(method);
    }
    finishNativeMethods() : number {
        for(let method of this.nativeMethods) {
            method.becomeNative(this.loader);
        }
        return this.nativeMethods.length;
    }
    copyTypeVariables(original : core.DartList<lib14.TypeVariableBuilder<any,any>>) : core.DartList<lib14.TypeVariableBuilder<any,any>> {
        let copy : core.DartList<lib14.TypeVariableBuilder<any,any>> = new core.DartList.literal<lib14.TypeVariableBuilder<any,any>>();
        for(let variable of original) {
            let newVariable = new lib6.KernelTypeVariableBuilder(variable.name,this,variable.charOffset);
            copy.add(newVariable);
            this.boundlessTypeVariables.add(newVariable);
        }
        let substitution : core.DartMap<lib14.TypeVariableBuilder<any,any>,lib21.TypeBuilder> = new core.DartMap.literal([
        ]);
        let i : number = 0;
        for(let variable of original) {
            substitution.set(variable,copy[i++].asTypeBuilder());
        }
        i = 0;
        for(let variable of original) {
            copy[i++].bound = ((_542_)=>(!!_542_)?_542_.subst(substitution):null)(variable.bound);
        }
        return copy;
    }
    finishTypeVariables(object : lib18.ClassBuilder<any,any>) : number {
        let count : number = this.boundlessTypeVariables.length;
        for(let builder of this.boundlessTypeVariables) {
            builder.finish(this,object);
        }
        this.boundlessTypeVariables.clear();
        return count;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    includePart(part : KernelLibraryBuilder) : void {
        part.mixinApplicationClasses.forEach((name : string,builder : lib4.SourceClassBuilder) =>  {
            let existing : lib4.SourceClassBuilder = this.mixinApplicationClasses.putIfAbsent(name,() =>  {
                return builder;
            });
            if (existing != builder) {
                part.scope.local.remove(name);
            }
        });
        super.includePart(part);
        this.nativeMethods.addAll(part.nativeMethods);
        this.boundlessTypeVariables.addAll(part.boundlessTypeVariables);
    }
}

export class properties {
}
