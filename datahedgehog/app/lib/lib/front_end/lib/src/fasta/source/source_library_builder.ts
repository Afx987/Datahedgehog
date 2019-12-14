/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/source_library_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/library_builder";
import * as lib4 from "./../builder/type_builder";
import * as lib5 from "./source_loader";
import * as lib6 from "./../builder/constructor_reference_builder";
import * as lib7 from "./../import";
import * as lib8 from "./../scope";
import * as lib9 from "@dart2ts/dart/uri";
import * as lib10 from "./../builder/metadata_builder";
import * as lib11 from "./unhandled_listener";
import * as lib12 from "./../combinator";
import * as lib13 from "./../builder/type_variable_builder";
import * as lib14 from "./../builder/formal_parameter_builder";
import * as lib15 from "./../builder/function_type_builder";
import * as lib16 from "./../builder/builder";
import * as lib17 from "./../builder/member_builder";
import * as lib18 from "./../builder/type_declaration_builder";
import * as lib19 from "./../builder/prefix_builder";
import * as lib20 from "./../errors";
import * as lib21 from "./../builder/procedure_builder";
import * as lib22 from "./../builder/class_builder";
import * as lib23 from "./../export";

export namespace SourceLibraryBuilder {
    export type Constructors = lib3.LibraryBuilder.Constructors | 'SourceLibraryBuilder' | 'fromScopes';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<SourceLibraryBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class SourceLibraryBuilder<T extends lib4.TypeBuilder,R> extends lib3.LibraryBuilder<T,R> {
    loader : lib5.SourceLoader<any>;

    libraryDeclaration : DeclarationBuilder<T>;

    constructorReferences : core.DartList<lib6.ConstructorReferenceBuilder>;

    parts : core.DartList<SourceLibraryBuilder<T,R>>;

    imports : core.DartList<lib7.Import>;

    importScope : lib8.Scope;

    fileUri : lib9.Uri;

    implementationBuilders : core.DartList<core.DartList<any>>;

    name : string;

    partOfName : string;

    partOfUri : lib9.Uri;

    metadata : core.DartList<lib10.MetadataBuilder<any>>;

    currentDeclaration : DeclarationBuilder<T>;

    canAddImplementationBuilders : boolean;

    constructor(loader : lib5.SourceLoader<any>,fileUri : lib9.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SourceLibraryBuilder(loader : lib5.SourceLoader<any>,fileUri : lib9.Uri) {
        this.constructorReferences = new core.DartList.literal<lib6.ConstructorReferenceBuilder>();
        this.parts = new core.DartList.literal<SourceLibraryBuilder<T,R>>();
        this.imports = new core.DartList.literal<lib7.Import>();
        this.implementationBuilders = new core.DartList.literal<core.DartList<core.DartList<any>>>();
        this.canAddImplementationBuilders = false;
        this.fromScopes(loader,fileUri,new DeclarationBuilder.library(),new lib8.Scope.top());
    }
    @namedConstructor
    fromScopes(loader : lib5.SourceLoader<any>,fileUri : lib9.Uri,libraryDeclaration : DeclarationBuilder<T>,importScope : lib8.Scope) {
        this.constructorReferences = new core.DartList.literal<lib6.ConstructorReferenceBuilder>();
        this.parts = new core.DartList.literal<SourceLibraryBuilder<T,R>>();
        this.imports = new core.DartList.literal<lib7.Import>();
        this.implementationBuilders = new core.DartList.literal<core.DartList<core.DartList<any>>>();
        this.canAddImplementationBuilders = false;
        this.currentDeclaration = libraryDeclaration;
        super.LibraryBuilder(fileUri,libraryDeclaration.toScope(importScope),new lib8.Scope.top());
        this.loader = loader;
        this.fileUri = fileUri;
        this.libraryDeclaration = libraryDeclaration;
        this.importScope = importScope;
    }
    static fromScopes : new<T extends lib4.TypeBuilder,R>(loader : lib5.SourceLoader<any>,fileUri : lib9.Uri,libraryDeclaration : DeclarationBuilder<T>,importScope : lib8.Scope) => SourceLibraryBuilder<T,R>;

    @AbstractProperty
    get uri() : lib9.Uri{ throw 'abstract'}
    get isPart() : boolean {
        return this.partOfName != null || this.partOfUri != null;
    }
    get types() : core.DartList<T> {
        return this.libraryDeclaration.types;
    }
    @Abstract
    addNamedType(name : string,arguments : core.DartList<T>,charOffset : number) : T{ throw 'abstract'}
    @Abstract
    addMixinApplication(supertype : T,mixins : core.DartList<T>,charOffset : number) : T{ throw 'abstract'}
    addType(type : T) : T {
        this.currentDeclaration.addType(type);
        return type;
    }
    @Abstract
    addVoidType(charOffset : number) : T{ throw 'abstract'}
    addConstructorReference(name : string,typeArguments : core.DartList<T>,suffix : string,charOffset : number) : lib6.ConstructorReferenceBuilder {
        let ref : lib6.ConstructorReferenceBuilder = new lib6.ConstructorReferenceBuilder(name,typeArguments,suffix,this,charOffset);
        this.constructorReferences.add(ref);
        return ref;
    }
    beginNestedDeclaration(name : string,_namedArguments? : {hasMembers? : boolean}) : void {
        let {hasMembers} = Object.assign({
            "hasMembers" : true}, _namedArguments );
        this.currentDeclaration = this.currentDeclaration.createNested(name,hasMembers);
    }
    endNestedDeclaration() : DeclarationBuilder<T> {
        let previous : DeclarationBuilder<T> = this.currentDeclaration;
        this.currentDeclaration = this.currentDeclaration.parent;
        return previous;
    }
    resolve(path : string) : lib9.Uri {
        return this.uri.resolve(path);
    }
    addExport(metadata : core.DartList<lib10.MetadataBuilder<any>>,uri : string,conditionalUris : lib11.Unhandled,combinators : core.DartList<lib12.Combinator>,charOffset : number) : void {
        this.loader.read(this.resolve(uri)).addExporter(this,combinators,charOffset);
    }
    addImport(metadata : core.DartList<lib10.MetadataBuilder<any>>,uri : string,conditionalUris : lib11.Unhandled,prefix : string,combinators : core.DartList<lib12.Combinator>,deferred : boolean,charOffset : number,prefixCharOffset : number) : void {
        this.imports.add(new lib7.Import(this,this.loader.read(this.resolve(uri)),deferred,prefix,combinators,charOffset,prefixCharOffset));
    }
    addPart(metadata : core.DartList<lib10.MetadataBuilder<any>>,path : string) : void {
        let resolvedUri : lib9.Uri;
        let newFileUri : lib9.Uri;
        if (this.uri.scheme == "dart") {
            resolvedUri = new lib9.Uri({
                scheme : "dart",path : `${this.uri.path}/${path}`});
            newFileUri = this.fileUri.resolve(path);
        }else {
            resolvedUri = this.uri.resolve(path);
            newFileUri = this.fileUri.resolve(path);
        }
        this.parts.add(this.loader.read(resolvedUri,newFileUri));
    }
    addPartOf(metadata : core.DartList<lib10.MetadataBuilder<any>>,name : string,uri : string) : void {
        this.partOfName = name;
        this.partOfUri = uri == null ? null : this.uri.resolve(uri);
    }
    @Abstract
    addClass(metadata : core.DartList<lib10.MetadataBuilder<any>>,modifiers : number,name : string,typeVariables : core.DartList<lib13.TypeVariableBuilder<any,any>>,supertype : T,interfaces : core.DartList<T>,charOffset : number) : void{ throw 'abstract'}
    @Abstract
    addNamedMixinApplication(metadata : core.DartList<lib10.MetadataBuilder<any>>,name : string,typeVariables : core.DartList<lib13.TypeVariableBuilder<any,any>>,modifiers : number,mixinApplication : T,interfaces : core.DartList<T>,charOffset : number) : void{ throw 'abstract'}
    @Abstract
    addField(metadata : core.DartList<lib10.MetadataBuilder<any>>,modifiers : number,type : T,name : string,charOffset : number,initializer : any) : void{ throw 'abstract'}
    addFields(metadata : core.DartList<lib10.MetadataBuilder<any>>,modifiers : number,type : T,namesOffsetsAndInitializers : core.DartList<core.DartObject>) : void {
        for(let i : number = 0; i < namesOffsetsAndInitializers.length; i += 4){
            let name : string = namesOffsetsAndInitializers[i];
            let charOffset : number = namesOffsetsAndInitializers[i + 1];
            let initializer : any;
            if (op(Op.EQUALS,type,null)) {
                initializer = namesOffsetsAndInitializers[i + 2];
                let afterInitializer : any = namesOffsetsAndInitializers[i + 3];
                ((_560_)=>(!!_560_)?_560_.setNext(new bare.createInstance(any,null,afterInitializer.offset)):null)(((t)=>(!!t)?t.previous:null)(afterInitializer));
            }
            this.addField(metadata,modifiers,type,name,charOffset,initializer);
        }
    }
    @Abstract
    addProcedure(metadata : core.DartList<lib10.MetadataBuilder<any>>,modifiers : number,returnType : T,name : string,typeVariables : core.DartList<lib13.TypeVariableBuilder<any,any>>,formals : core.DartList<lib14.FormalParameterBuilder<any>>,kind : any,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName : string,_namedArguments? : {isTopLevel? : boolean}) : void{ throw 'abstract'}
    @Abstract
    addEnum(metadata : core.DartList<lib10.MetadataBuilder<any>>,name : string,constantNamesAndOffsets : core.DartList<core.DartObject>,charOffset : number,charEndOffset : number) : void{ throw 'abstract'}
    @Abstract
    addFunctionTypeAlias(metadata : core.DartList<lib10.MetadataBuilder<any>>,returnType : T,name : string,typeVariables : core.DartList<lib13.TypeVariableBuilder<any,any>>,formals : core.DartList<lib14.FormalParameterBuilder<any>>,charOffset : number) : void{ throw 'abstract'}
    @Abstract
    addFunctionType(returnType : T,typeVariables : core.DartList<lib13.TypeVariableBuilder<any,any>>,formals : core.DartList<lib14.FormalParameterBuilder<any>>,charOffset : number) : lib15.FunctionTypeBuilder{ throw 'abstract'}
    @Abstract
    addFactoryMethod(metadata : core.DartList<lib10.MetadataBuilder<any>>,modifiers : number,name : lib6.ConstructorReferenceBuilder,formals : core.DartList<lib14.FormalParameterBuilder<any>>,redirectionTarget : lib6.ConstructorReferenceBuilder,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName : string) : void{ throw 'abstract'}
    @Abstract
    addFormalParameter(metadata : core.DartList<lib10.MetadataBuilder<any>>,modifiers : number,type : T,name : string,hasThis : boolean,charOffset : number) : lib14.FormalParameterBuilder<any>{ throw 'abstract'}
    @Abstract
    addTypeVariable(name : string,bound : T,charOffset : number) : lib13.TypeVariableBuilder<any,any>{ throw 'abstract'}
    addBuilder(name : string,builder : lib16.Builder,charOffset : number) : lib16.Builder {
        if (op(Op.EQUALS,this.currentDeclaration,this.libraryDeclaration)) {
            if (is(builder, lib17.MemberBuilder)) {
                builder.parent = this;
            }else if (is(builder, lib18.TypeDeclarationBuilder<any,any>)) {
                builder.parent = this;
            }else if (is(builder, lib19.PrefixBuilder)) {
                /* TODO (AssertStatementImpl) : assert (builder.parent == this); */;
            }else {
                return lib20.internalError(`Unhandled: ${builder.runtimeType}`);
            }
        }else {
            /* TODO (AssertStatementImpl) : assert (currentDeclaration.parent == libraryDeclaration); */;
        }
        let isConstructor : boolean = is(builder, lib21.ProcedureBuilder<any>) && (builder.isConstructor || builder.isFactory);
        let members : core.DartMap<string,lib16.Builder> = isConstructor ? this.currentDeclaration.constructors : (builder.isSetter ? this.currentDeclaration.setters : this.currentDeclaration.members);
        let existing : lib16.Builder = members.get(name);
        builder.next = existing;
        if (is(builder, lib19.PrefixBuilder) && is(existing, lib19.PrefixBuilder)) {
            /* TODO (AssertStatementImpl) : assert (existing.next == null); */;
            return ((_) : lib19.PrefixBuilder =>  {
                {
                    _.exports.merge(builder.exports,(name : string,existing : lib16.Builder,member : lib16.Builder) =>  {
                        return this.buildAmbiguousBuilder(name,existing,member,charOffset);
                    });
                    return _;
                }
            })(existing);
        }else if (this.isDuplicatedDefinition(existing,builder)) {
            this.addCompileTimeError(charOffset,`Duplicated definition of '${name}'.`);
        }
        return members.set(name,builder);
    }
    isDuplicatedDefinition(existing : lib16.Builder,other : lib16.Builder) : boolean {
        if (op(Op.EQUALS,existing,null)) return false;
        let next : lib16.Builder = existing.next;
        if (op(Op.EQUALS,next,null)) {
            if (existing.isGetter && other.isSetter) return false;
            if (existing.isSetter && other.isGetter) return false;
        }else {
            if (is(next, lib22.ClassBuilder<any,any>) && !next.isMixinApplication) return true;
        }
        if (is(existing, lib22.ClassBuilder<any,any>) && is(other, lib22.ClassBuilder<any,any>)) {
            return !existing.isMixinApplication || !other.isMixinApplication;
        }
        return true;
    }
    @Abstract
    buildBuilder(builder : lib16.Builder,coreLibrary : lib3.LibraryBuilder<any,any>) : void{ throw 'abstract'}
    build(coreLibrary : lib3.LibraryBuilder<any,any>) : R {
        /* TODO (AssertStatementImpl) : assert (implementationBuilders.isEmpty); */;
        this.canAddImplementationBuilders = true;
        this.forEach((name : string,builder : lib16.Builder) =>  {
            do{
                this.buildBuilder(builder,coreLibrary);
                builder = builder.next;
            } while (builder != null);
        });
        for(let list of this.implementationBuilders) {
            let name : string = list[0];
            let builder : lib16.Builder = list[1];
            let charOffset : number = list[2];
            this.addBuilder(name,builder,charOffset);
            this.buildBuilder(builder,coreLibrary);
        }
        this.canAddImplementationBuilders = false;
        this.scope.setters.forEach((name : string,setter : lib16.Builder) =>  {
            let member : lib16.Builder = op(Op.INDEX,this.scopeBuilder,name);
            if (op(Op.EQUALS,member,null) || !member.isField || member.isFinal) return;
            this.addCompileTimeError(setter.charOffset,`Conflicts with member '${name}'.`);
            this.addCompileTimeError(member.charOffset,`Conflicts with setter '${name}'.`);
        });
        return null;
    }
    addImplementationBuilder(name : string,builder : lib16.Builder,charOffset : number) : void {
        /* TODO (AssertStatementImpl) : assert (canAddImplementationBuilders, "$uri"); */;
        this.implementationBuilders.add(new core.DartList.literal(name,builder,charOffset));
    }
    validatePart() : void {
        if (this.parts.isNotEmpty) {
            lib20.inputError(this.fileUri,-1,"A file that's a part of a library can't have parts itself.");
        }
        if (this.exporters.isNotEmpty) {
            let export : lib23.Export = this.exporters.first;
            lib20.inputError(export.fileUri,export.charOffset,"A part can't be exported.");
        }
    }
    includeParts() : void {
        let seenParts : core.DartSet<lib9.Uri> = new core.DartSet<lib9.Uri>();
        for(let part of this.parts.toList()) {
            if (op(Op.EQUALS,part,this)) {
                this.addCompileTimeError(-1,"A file can't be a part of itself.");
            }else if (seenParts.add(part.fileUri)) {
                this.includePart(part);
            }else {
                this.addCompileTimeError(-1,`Can't use '${part.fileUri}' as a part more than once.`);
            }
        }
    }
    includePart(part : SourceLibraryBuilder<T,R>) : void {
        if (this.name != null) {
            if (!part.isPart) {
                this.addCompileTimeError(-1,`Can't use ${part.fileUri} as a part, because it has no 'part of'` + " declaration.");
                this.parts.remove(part);
                return;
            }
            if (part.partOfName != this.name && part.partOfUri != this.uri) {
                let partName : string = (part.partOfName || `${part.partOfUri}`);
                let myName : string = this.name == null ? `'${this.uri}'` : `'${this.name}' (${this.uri})`;
                this.addWarning(-1,`Using '${part.fileUri}' as part of '${myName}' but it's 'part of'` + ` declaration says '${partName}'.`);
            }
        }
        part.forEach((name : string,builder : lib16.Builder) =>  {
            if (builder.next != null) {
                /* TODO (AssertStatementImpl) : assert (builder.next.next == null); */;
                this.addBuilder(name,builder.next,builder.next.charOffset);
            }
            this.addBuilder(name,builder,builder.charOffset);
        });
        this.types.addAll(part.types);
        this.constructorReferences.addAll(part.constructorReferences);
        part.partOfLibrary = this;
        part.scope.becomePartOf(this.scope);
    }
    buildInitialScopes() : void {
        this.forEach(this.addToExportScope.bind(this));
    }
    addImportsToScope() : void {
        let explicitCoreImport : boolean = op(Op.EQUALS,this,this.loader.coreLibrary);
        for(let import of this.imports) {
            if (op(Op.EQUALS,import.imported,this.loader.coreLibrary)) {
                explicitCoreImport = true;
            }
            import.finalizeImports(this);
        }
        if (!explicitCoreImport) {
            this.loader.coreLibrary.exports.forEach((name : string,member : lib16.Builder) =>  {
                this.addToScope(name,member,-1,true);
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScope(name : string,member : lib16.Builder,charOffset : number,isImport : boolean) : void {
        let map : core.DartMap<string,lib16.Builder> = member.isSetter ? this.importScope.setters : this.importScope.local;
        let existing : lib16.Builder = map.get(name);
        if (existing != null) {
            if (existing != member) {
                map.set(name,this.buildAmbiguousBuilder(name,existing,member,charOffset,{
                    isImport : isImport}));
            }
        }else {
            map.set(name,member);
        }
    }
    resolveTypes(_ : any) : number {
        let typeCount : number = this.types.length;
        for(let t of this.types) {
            t.resolveIn(this.scope);
        }
        this.forEach((name : string,member : lib16.Builder) =>  {
            typeCount += member.resolveTypes(this);
        });
        return typeCount;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveConstructors(_ : any) : number {
        let count : number = 0;
        this.forEach((name : string,member : lib16.Builder) =>  {
            count += member.resolveConstructors(this);
        });
        return count;
    }
    @Abstract
    copyTypeVariables(original : core.DartList<lib13.TypeVariableBuilder<any,any>>) : core.DartList<lib13.TypeVariableBuilder<any,any>>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return (this.name || `<library '${this.relativeFileUri}'>`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    prepareInitializerInference(library : SourceLibraryBuilder<any,any>,currentClass : lib22.ClassBuilder<any,any>) : void {
        this.forEach((name : string,member : lib16.Builder) =>  {
            member.prepareInitializerInference(library,currentClass);
        });
    }
}

export namespace DeclarationBuilder {
    export type Constructors = 'DeclarationBuilder' | 'library';
    export type Interface<T extends lib4.TypeBuilder> = Omit<DeclarationBuilder<T extends lib4.TypeBuilder>, Constructors>;
}
@DartClass
export class DeclarationBuilder<T extends lib4.TypeBuilder> {
    parent : DeclarationBuilder<T>;

    members : core.DartMap<string,lib16.Builder>;

    constructors : core.DartMap<string,lib16.Builder>;

    setters : core.DartMap<string,lib16.Builder>;

    types : core.DartList<T>;

    name : string;

    factoryDeclarations : core.DartMap<lib21.ProcedureBuilder<any>,DeclarationBuilder<T>>;

    constructor(members : core.DartMap<string,lib16.Builder>,setters : core.DartMap<string,lib16.Builder>,constructors : core.DartMap<string,lib16.Builder>,factoryDeclarations : core.DartMap<lib21.ProcedureBuilder<any>,DeclarationBuilder<T>>,name : string,parent : DeclarationBuilder<T>) {
    }
    @defaultConstructor
    DeclarationBuilder(members : core.DartMap<string,lib16.Builder>,setters : core.DartMap<string,lib16.Builder>,constructors : core.DartMap<string,lib16.Builder>,factoryDeclarations : core.DartMap<lib21.ProcedureBuilder<any>,DeclarationBuilder<T>>,name : string,parent : DeclarationBuilder<T>) {
        this.types = new core.DartList.literal<T>();
        this.members = members;
        this.setters = setters;
        this.constructors = constructors;
        this.factoryDeclarations = factoryDeclarations;
        this.name = name;
        this.parent = parent;
    }
    @namedConstructor
    library() {
        this.types = new core.DartList.literal<T>();
        this.DeclarationBuilder(new core.DartMap.literal([
        ]),new core.DartMap.literal([
        ]),null,null,null,null);
    }
    static library : new<T extends lib4.TypeBuilder>() => DeclarationBuilder<T>;

    createNested(name : string,hasMembers : boolean) : DeclarationBuilder<any> {
        return new DeclarationBuilder<T>(hasMembers ? new core.DartMap.literal([
        ]) : null,hasMembers ? new core.DartMap.literal([
        ]) : null,hasMembers ? new core.DartMap.literal([
        ]) : null,new core.DartMap.literal([
        ]),name,this);
    }
    addType(type : T) : void {
        this.types.add(type);
    }
    resolveTypes(typeVariables : core.DartList<lib13.TypeVariableBuilder<any,any>>,library : SourceLibraryBuilder<any,any>) : void {
        if (typeVariables == null) {
            this.factoryDeclarations.forEach((_ : any,declaration : DeclarationBuilder<T>) =>  {
                this.parent.types.addAll(declaration.types);
            });
            this.parent.types.addAll(this.types);
        }else {
            this.factoryDeclarations.forEach((procedure : lib21.ProcedureBuilder<any>,declaration : DeclarationBuilder<T>) =>  {
                /* TODO (AssertStatementImpl) : assert (procedure.typeVariables.isEmpty); */;
                procedure.typeVariables.addAll(library.copyTypeVariables(typeVariables));
                declaration.resolveTypes(procedure.typeVariables,library);
            });
            let map : core.DartMap<string,lib13.TypeVariableBuilder<any,any>> = new core.DartMap.literal([
            ]);
            for(let builder of typeVariables) {
                map.set(builder.name,builder);
            }
            for(let type of this.types) {
                let name : string = type.name;
                let builder : lib13.TypeVariableBuilder<any,any>;
                if (name != null) {
                    builder = map.get(name);
                }
                if (op(Op.EQUALS,builder,null)) {
                    this.parent.addType(type);
                }else {
                    type.bind(builder);
                }
            }
        }
        this.types.clear();
    }
    addFactoryDeclaration(procedure : lib21.ProcedureBuilder<any>,factoryDeclaration : DeclarationBuilder<T>) : void {
        this.factoryDeclarations.set(procedure,factoryDeclaration);
    }
    toScope(parent : lib8.Scope) : lib8.Scope {
        return new lib8.Scope(this.members,this.setters,parent,{
            isModifiable : false});
    }
}

export class properties {
}
