/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../target_implementation";
import * as lib4 from "./../dill/dill_target";
import * as lib5 from "./../source/source_loader";
import * as lib6 from "./kernel_named_type_builder";
import * as lib7 from "./../builder/type_builder";
import * as lib8 from "./../translate_uri";
import * as lib9 from "./../errors";
import * as lib10 from "./../compiler_context";
import * as lib11 from "@dart2ts/dart/uri";
import * as lib12 from "./../util/relativize";
import * as lib13 from "./kernel_library_builder";
import * as lib14 from "./../builder/library_builder";
import * as lib15 from "./../builder/class_builder";
import * as lib16 from "./../builder/named_type_builder";
import * as lib17 from "./../builder/builder";
import * as lib18 from "./kernel_class_builder";
import * as lib19 from "./../source/source_class_builder";
import * as io from "@dart2ts/dart/io";
import * as lib21 from "./kernel_procedure_builder";
import * as lib22 from "./../builder/type_declaration_builder";
import * as lib23 from "./../builder/invalid_type_builder";
import * as lib24 from "./../builder/type_variable_builder";
import * as lib25 from "./../builder/member_builder";
import * as lib26 from "./verifier";
import * as lib27 from "./kernel_outline_shaker";

export var defaultSuperConstructor : (cls : any) => any = (cls : any) : any =>  {
    let superclass : any = cls.superclass;
    while (superclass != null && superclass.isMixinApplication){
        superclass = superclass.superclass;
    }
    for(let constructor of superclass.constructors) {
        if (constructor.name.name.isEmpty) {
            return op(Op.EQUALS,constructor.function.requiredParameterCount,0) ? constructor : null;
        }
    }
    return null;
};
export namespace KernelTarget {
    export type Constructors = lib3.TargetImplementation.Constructors | 'KernelTarget';
    export type Interface = Omit<KernelTarget, Constructors>;
}
@DartClass
export class KernelTarget extends lib3.TargetImplementation {
    fileSystem : any;

    strongMode : boolean;

    dillTarget : lib4.DillTarget;

    uriToSource : core.DartMap<string,any>;

    loader : lib5.SourceLoader<any>;

    _program : any;

    errors : core.DartList<string>;

    dynamicType : lib7.TypeBuilder;

    constructor(fileSystem : any,dillTarget : lib4.DillTarget,uriTranslator : lib8.TranslateUri,strongMode : boolean,uriToSource? : core.DartMap<string,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelTarget(fileSystem : any,dillTarget : lib4.DillTarget,uriTranslator : lib8.TranslateUri,strongMode : boolean,uriToSource? : core.DartMap<string,any>) {
        this.errors = new core.DartList.literal<string>();
        this.dynamicType = new lib6.KernelNamedTypeBuilder("dynamic",null,-1,null);
        this.dillTarget = dillTarget;
        this.uriToSource = (uriToSource || lib10.CompilerContext.current.uriToSource);
        super.TargetImplementation(dillTarget.ticker,uriTranslator,dillTarget.backendTarget);
        this.fileSystem = fileSystem;
        this.strongMode = strongMode;
        lib9.resetCrashReporting();
        this.loader = this.createLoader();
    }
    addError(file : any,charOffset : number,message : string) : void {
        let uri : lib11.Uri = is(file, "string") ? lib11.Uri.parse(file) : file;
        let error : lib9.InputError = new lib9.InputError(uri,charOffset,message);
        let formatterMessage : string = error.format();
        core.print(formatterMessage);
        this.errors.add(formatterMessage);
    }
    createLoader() : lib5.SourceLoader<any> {
        return new lib5.SourceLoader<any>(this.fileSystem,this);
    }
    addSourceInformation(uri : lib11.Uri,lineStarts : core.DartList<number>,sourceCode : core.DartList<number>) : void {
        let fileUri : string = lib12.relativizeUri(uri);
        this.uriToSource.set(fileUri,new bare.createInstance(any,null,lineStarts,sourceCode));
    }
    read(uri : lib11.Uri) : void {
        this.loader.read(uri);
    }
    createLibraryBuilder(uri : lib11.Uri,fileUri : lib11.Uri) : lib14.LibraryBuilder<any,any> {
        if (this.dillTarget.isLoaded) {
            let builder = this.dillTarget.loader.builders.get(uri);
            if (builder != null) {
                return builder;
            }
        }
        return new lib13.KernelLibraryBuilder(uri,fileUri,this.loader);
    }
    forEachDirectSupertype(cls : lib15.ClassBuilder<any,any>,f : (type : lib16.NamedTypeBuilder<any,any>) => void) : void {
        let supertype : lib7.TypeBuilder = cls.supertype;
        if (is(supertype, lib16.NamedTypeBuilder<any,any>)) {
            f(supertype);
        }else if (supertype != null) {
            lib9.internalError(`Unhandled: ${supertype.runtimeType}`);
        }
        if (cls.interfaces != null) {
            for(let t of cls.interfaces) {
                f(t);
            }
        }
        if (op(Op.EQUALS,cls.library.loader,this.loader) && cls.mixedInType != null) {
            f(cls.mixedInType);
        }
    }
    addDirectSupertype(cls : lib15.ClassBuilder<any,any>,set : core.DartSet<lib15.ClassBuilder<any,any>>) : void {
        if (op(Op.EQUALS,cls,null)) return;
        this.forEachDirectSupertype(cls,(type : lib16.NamedTypeBuilder<any,any>) =>  {
            let builder : lib17.Builder = type.builder;
            if (is(builder, lib15.ClassBuilder<any,any>)) {
                set.add(builder);
            }
        });
    }
    collectAllClasses() : core.DartList<lib15.ClassBuilder<any,any>> {
        let result : core.DartList<lib15.ClassBuilder<any,any>> = new core.DartList.literal<lib15.ClassBuilder<any,any>>();
        this.loader.builders.forEach((uri : lib11.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            library.forEach((name : string,member : lib17.Builder) =>  {
                if (is(member, lib18.KernelClassBuilder)) {
                    result.add(member);
                }
            });
        });
        return result;
    }
    collectAllSourceClasses() : core.DartList<lib19.SourceClassBuilder> {
        let result : core.DartList<lib19.SourceClassBuilder> = new core.DartList.literal<lib19.SourceClassBuilder>();
        this.loader.builders.forEach((uri : lib11.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            library.forEach((name : string,member : lib17.Builder) =>  {
                if (is(member, lib19.SourceClassBuilder)) {
                    result.add(member);
                }
            });
        });
        return result;
    }
    breakCycle(builder : lib15.ClassBuilder<any,any>) : void {
        let cls : any = builder.target;
        cls.implementedTypes.clear();
        cls.supertype = null;
        cls.mixedInType = null;
        builder.supertype = ((_) : lib6.KernelNamedTypeBuilder =>  {
            {
                _.builder = this.objectClassBuilder;
                return _;
            }
        })(new lib6.KernelNamedTypeBuilder("Object",null,builder.charOffset,(builder.fileUri || lib11.Uri.parse(cls.fileUri))));
        builder.interfaces = null;
        builder.mixedInType = null;
    }
    handleInputError(error : lib9.InputError,_namedArguments? : {isFullProgram? : boolean,trimDependencies? : boolean}) : void {
        let {isFullProgram,trimDependencies} = Object.assign({
            "trimDependencies" : false}, _namedArguments );
        if (error != null) {
            let message : string = error.format();
            core.print(message);
            this.errors.add(message);
        }
        this._program = this.erroneousProgram(isFullProgram);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildOutlines(_namedArguments? : {nameRoot? : any}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {nameRoot} = Object.assign({
            }, _namedArguments );
            if (op(Op.EQUALS,this.loader.first,null)) return null;
            try {
                this.loader.createTypeInferenceEngine();
                await this.loader.buildOutlines();
                this.loader.coreLibrary.becomeCoreLibrary(new bare.createInstance(any,null),new bare.createInstance(any,null));
                this.dynamicType.bind(op(Op.INDEX,this.loader.coreLibrary,"dynamic"));
                this.loader.resolveParts();
                this.loader.computeLibraryScopes();
                this.loader.resolveTypes();
                this.loader.checkSemantics();
                this.loader.buildProgram();
                let sourceClasses : core.DartList<lib19.SourceClassBuilder> = this.collectAllSourceClasses();
                this.installDefaultSupertypes();
                this.installDefaultConstructors(sourceClasses);
                this.loader.resolveConstructors();
                this.loader.finishTypeVariables(this.objectClassBuilder);
                this._program = this.link(new core.DartList.from(this.loader.libraries),{
                    nameRoot : nameRoot});
                this.loader.computeHierarchy(this._program);
                this.loader.checkOverrides(sourceClasses);
                this.loader.prepareInitializerInference();
                this.loader.performInitializerInference();
            } catch (__error__) {

                if (is(__error__,lib9.InputError)){
                    let e : lib9.InputError = __error__;
                    this.handleInputError(e,{
                        isFullProgram : false});
                }


                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    return lib9.reportCrash(e,s,((t)=>(!!t)?t.currentUriForCrashReporting:null)(this.loader));
                }
            }
            return this._program;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildProgram(_namedArguments? : {verify? : boolean,trimDependencies? : boolean}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {verify,trimDependencies} = Object.assign({
                "verify" : false,
                "trimDependencies" : false}, _namedArguments );
            if (op(Op.EQUALS,this.loader.first,null)) return null;
            if (this.errors.isNotEmpty) {
                this.handleInputError(null,{
                    isFullProgram : true,trimDependencies : trimDependencies});
                if (trimDependencies) this.trimDependenciesInProgram();
                return this._program;
            }
            try {
                await this.loader.buildBodies();
                this.loader.finishStaticInvocations();
                this.finishAllConstructors();
                this.loader.finishNativeMethods();
                this.runBuildTransformations();
                if (verify) this.verify();
                this.errors.addAll(this.loader.collectCompileTimeErrors().map((e : any) =>  {
                    return e.format();
                }));
                if (this.errors.isNotEmpty) {
                    this.handleInputError(null,{
                        isFullProgram : true,trimDependencies : trimDependencies});
                }
            } catch (__error__) {

                if (is(__error__,lib9.InputError)){
                    let e : lib9.InputError = __error__;
                    this.handleInputError(e,{
                        isFullProgram : true,trimDependencies : trimDependencies});
                }


                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    return lib9.reportCrash(e,s,((t)=>(!!t)?t.currentUriForCrashReporting:null)(this.loader));
                }
            }
            if (trimDependencies) this.trimDependenciesInProgram();
            return this._program;
        } )());
    }

    writeDepsFile(output : lib11.Uri,depsFile : lib11.Uri,_namedArguments? : {extraDependencies? : core.DartIterable<lib11.Uri>}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {extraDependencies} = Object.assign({
            }, _namedArguments );
            var toRelativeFilePath : (uri : lib11.Uri) => string = (uri : lib11.Uri) : string =>  {
                return lib11.Uri.parse(lib12.relativizeUri(uri,{
                    base : lib11.Uri.base})).toFilePath();
            };
            if (op(Op.EQUALS,this.loader.first,null)) return null;
            let sb : core.DartStringBuffer = new core.DartStringBuffer();
            sb.write(toRelativeFilePath(output));
            sb.write(":");
            let allDependencies : core.DartSet<string> = new core.DartSet<string>();
            allDependencies.addAll(this.loader.getDependencies().map(toRelativeFilePath));
            if (extraDependencies != null) {
                allDependencies.addAll(extraDependencies.map(toRelativeFilePath));
            }
            for(let path of allDependencies) {
                sb.write(" ");
                sb.write(path);
            }
            sb.writeln();
            await new io.File.fromUri(depsFile).writeAsString(`${sb}`);
            this.ticker.logMs("Wrote deps file");
        } )());
    }

    erroneousProgram(isFullProgram : boolean) : any {
        let uri : lib11.Uri = (((t)=>(!!t)?t.uri:null)(this.loader.first) || lib11.Uri.parse("error:error"));
        let fileUri : lib11.Uri = (((t)=>(!!t)?t.fileUri:null)(this.loader.first) || uri);
        let library : lib13.KernelLibraryBuilder = new lib13.KernelLibraryBuilder(uri,fileUri,this.loader);
        this.loader.first = library;
        if (isFullProgram) {
            let mainBuilder : lib21.KernelProcedureBuilder = new lib21.KernelProcedureBuilder(null,0,null,"main",null,null,ProcedureKind.Method,library,-1,-1,-1);
            library.addBuilder(mainBuilder.name,mainBuilder,-1);
            mainBuilder.body = new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,`${this.errors.join('\n')}`)));
        }
        library.build(this.loader.coreLibrary);
        return this.link(new core.DartList.literal<any>(library.library));
    }
    link(libraries : core.DartList<any>,_namedArguments? : {nameRoot? : any}) : any {
        let {nameRoot} = Object.assign({
        }, _namedArguments );
        let uriToSource : core.DartMap<string,any> = new core.DartMap.from(this.uriToSource);
        let extraLibraries : core.DartList<any> = this.dillTarget.loader.libraries;
        libraries.addAll(extraLibraries);
        uriToSource.set("",new bare.createInstance(any,null,new core.DartList.literal<number>(0),new core.DartList.literal<number>()));
        let program : any = new bare.createInstance(any,null,{
            nameRoot : nameRoot,libraries : libraries,uriToSource : uriToSource});
        if (this.loader.first != null) {
            let builder : lib17.Builder = this.loader.first.lookup("main",-1,null);
            if (is(builder, lib21.KernelProcedureBuilder)) {
                program.mainMethod = builder.procedure;
            }
        }
        this.ticker.logMs("Linked program");
        return program;
    }
    installDefaultSupertypes() : void {
        let objectClass : any = this.objectClass;
        this.loader.builders.forEach((uri : lib11.Uri,library : lib14.LibraryBuilder<any,any>) =>  {
            library.forEach((name : string,builder : lib17.Builder) =>  {
                if (is(builder, lib19.SourceClassBuilder)) {
                    let cls : any = builder.target;
                    if (cls != objectClass) {
                        cls.supertype = ( cls.supertype ) || ( objectClass.asRawSupertype );
                    }
                    if (builder.isMixinApplication) {
                        cls.mixedInType = builder.mixedInType.buildSupertype(library);
                    }
                }
            });
        });
        this.ticker.logMs("Installed Object as implicit superclass");
    }
    installDefaultConstructors(builders : core.DartList<lib19.SourceClassBuilder>) : void {
        let objectClass : any = this.objectClass;
        for(let builder of builders) {
            if (builder.target != objectClass) {
                this.installDefaultConstructor(builder);
            }
        }
        this.ticker.logMs("Installed default constructors");
    }
    get objectClassBuilder() : lib18.KernelClassBuilder {
        return op(Op.INDEX,this.loader.coreLibrary,"Object");
    }
    get objectClass() : any {
        return this.objectClassBuilder.cls;
    }
    installDefaultConstructor(builder : lib19.SourceClassBuilder) : void {
        if (builder.isMixinApplication && !builder.isNamedMixinApplication) return;
        if (builder.constructors.local.isNotEmpty) return;
        if (builder.isNamedMixinApplication) {
            let supertype : lib22.TypeDeclarationBuilder<any,any> = builder;
            while (supertype.isMixinApplication){
                let named : lib19.SourceClassBuilder = supertype;
                let type : lib7.TypeBuilder = named.supertype;
                if (is(type, lib16.NamedTypeBuilder<any,any>)) {
                    supertype = type.builder;
                }else {
                    lib9.internalError(`Unhandled: ${type.runtimeType}`);
                }
            }
            if (is(supertype, lib18.KernelClassBuilder)) {
                let substitutionMap : core.DartMap<any,any> = this.computeKernelSubstitutionMap(builder.getSubstitutionMap(supertype,builder.fileUri,builder.charOffset,this.dynamicType),builder.parent);
                if (supertype.cls.constructors.isEmpty) {
                    builder.addSyntheticConstructor(this.makeDefaultConstructor());
                }else {
                    for(let constructor of supertype.cls.constructors) {
                        builder.addSyntheticConstructor(this.makeMixinApplicationConstructor(builder.cls.mixin,constructor,substitutionMap));
                    }
                }
            }else if (is(supertype, lib23.InvalidTypeBuilder<any,any>)) {
                builder.addSyntheticConstructor(this.makeDefaultConstructor());
            }else {
                lib9.internalError(`Unhandled: ${supertype.runtimeType}`);
            }
        }else {
            builder.addSyntheticConstructor(this.makeDefaultConstructor());
        }
    }
    computeKernelSubstitutionMap(substitutionMap : core.DartMap<lib24.TypeVariableBuilder<any,any>,lib7.TypeBuilder>,library : lib14.LibraryBuilder<any,any>) : core.DartMap<any,any> {
        if (substitutionMap == null) return new core.DartMap.literal([
        ]);
        let result : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        substitutionMap.forEach((variable : lib24.TypeVariableBuilder<any,any>,argument : lib7.TypeBuilder) =>  {
            result.set(variable.target,argument.build(library));
        });
        return result;
    }
    makeMixinApplicationConstructor(mixin : any,constructor : any,substitutionMap : core.DartMap<any,any>) : any {
        var copyFormal : (formal : any) => any = (formal : any) : any =>  {
            return new bare.createInstance(any,null,formal.name,{
                type : substitute(formal.type,substitutionMap),isFinal : formal.isFinal,isConst : formal.isConst});
        };
        let positionalParameters : core.DartList<any> = new core.DartList.literal<any>();
        let namedParameters : core.DartList<any> = new core.DartList.literal<any>();
        let positional : core.DartList<any> = new core.DartList.literal<any>();
        let named : core.DartList<any> = new core.DartList.literal<any>();
        for(let formal of constructor.function.positionalParameters) {
            positionalParameters.add(copyFormal(formal));
            positional.add(new bare.createInstance(any,null,positionalParameters.last));
        }
        for(let formal of constructor.function.namedParameters) {
            namedParameters.add(copyFormal(formal));
            named.add(new bare.createInstance(any,null,formal.name,new bare.createInstance(any,null,namedParameters.last)));
        }
        let function : any = new bare.createInstance(any,null,new bare.createInstance(any,null),{
            positionalParameters : positionalParameters,namedParameters : namedParameters,requiredParameterCount : constructor.function.requiredParameterCount,returnType : new bare.createInstance(any,null)});
        let initializer : any = new bare.createInstance(any,null,constructor,new bare.createInstance(any,null,positional,{
            named : named}));
        return new bare.createInstance(any,null,function,{
            name : constructor.name,initializers : new core.DartList.literal<any>(initializer)});
    }
    makeDefaultConstructor() : any {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null),{
            returnType : new bare.createInstance(any,null)}),{
            name : new bare.createInstance(any,null,"")});
    }
    finishAllConstructors() : void {
        let objectClass : any = this.objectClass;
        for(let builder of this.collectAllSourceClasses()) {
            let cls : any = builder.target;
            if (cls != objectClass) {
                this.finishConstructors(builder);
            }
        }
        this.ticker.logMs("Finished constructors");
    }
    finishConstructors(builder : lib19.SourceClassBuilder) : void {
        let cls : any = builder.target;
        let uninitializedFields : core.DartList<any> = new core.DartList.literal<any>();
        let nonFinalFields : core.DartList<any> = new core.DartList.literal<any>();
        for(let field of cls.fields) {
            if (field.isInstanceMember && !field.isFinal) {
                nonFinalFields.add(field);
            }
            if (op(Op.EQUALS,field.initializer,null)) {
                uninitializedFields.add(field);
            }
        }
        let fieldInitializers : core.DartMap<any,core.DartList<any>> = new core.DartMap.literal([
        ]);
        let superTarget : any;
        builder.constructors.forEach((name : string,member : lib17.Builder) =>  {
            if (member.isFactory) return;
            let constructorBuilder : lib25.MemberBuilder = member;
            let constructor : any = constructorBuilder.target;
            if (!constructorBuilder.isRedirectingGenerativeConstructor) {
                if (constructor.initializers.isEmpty) {
                    superTarget = ( superTarget ) || ( defaultSuperConstructor(cls) );
                    let initializer : any;
                    if (op(Op.EQUALS,superTarget,null)) {
                        this.addError(constructor.enclosingClass.fileUri,constructor.fileOffset,`${cls.superclass.name} has no constructor that takes no` + " arguments.");
                        initializer = new bare.createInstance(any,null);
                    }else {
                        initializer = new bare.createInstance(any,null,superTarget,new bare.createInstance(any,null));
                    }
                    constructor.initializers.add(initializer);
                    initializer.parent = constructor;
                }
                if (op(Op.EQUALS,constructor.function.body,null)) {
                    constructor.function.body = new bare.createInstance(any,null);
                    constructor.function.body.parent = constructor.function;
                }
                let myFieldInitializers : core.DartList<any> = new core.DartList.literal<any>();
                for(let initializer of constructor.initializers) {
                    if (is(initializer, any)) {
                        myFieldInitializers.add(initializer);
                    }
                }
                fieldInitializers.set(constructor,myFieldInitializers);
                if (constructor.isConst && nonFinalFields.isNotEmpty) {
                    this.addError(constructor.enclosingClass.fileUri,constructor.fileOffset,"Constructor is marked 'const' so all fields must be final.");
                    for(let field of nonFinalFields) {
                        this.addError(constructor.enclosingClass.fileUri,field.fileOffset,"Field isn't final, but constructor is 'const'.");
                    }
                    nonFinalFields.clear();
                }
            }
        });
        let initializedFields : core.DartSet<any>;
        fieldInitializers.forEach((constructor : any,initializers : core.DartList<any>) =>  {
            let fields : core.DartIterable<any> = initializers.map((i : any) =>  {
                return i.field;
            });
            if (op(Op.EQUALS,initializedFields,null)) {
                initializedFields = new core.DartSet.from(fields);
            }else {
                initializedFields.addAll(fields);
            }
        });
        for(let field of uninitializedFields) {
            if (op(Op.EQUALS,initializedFields,null) || !initializedFields.contains(field)) {
                field.initializer = ((_) : any =>  {
                    {
                        _.parent = field;
                        return _;
                    }
                })(new bare.createInstance(any,null));
            }
        }
        fieldInitializers.forEach((constructor : any,initializers : core.DartList<any>) =>  {
            let fields : core.DartIterable<any> = initializers.map((i : any) =>  {
                return i.field;
            });
            for(let field of initializedFields.difference(fields.toSet())) {
                if (op(Op.EQUALS,field.initializer,null)) {
                    let initializer : any = new bare.createInstance(any,null,field,new bare.createInstance(any,null));
                    initializer.parent = constructor;
                    constructor.initializers.insert(0,initializer);
                }
            }
        });
    }
    runBuildTransformations() : void {
        this.transformMixinApplications();
        this.otherTransformations();
    }
    transformMixinApplications() : void {
        new bare.createInstance(any,null,this.backendTarget).transform(this._program);
        this.ticker.logMs("Transformed mixin applications");
    }
    otherTransformations() : void {
        if (!this.strongMode) {
            this._program.accept(new bare.createInstance(any,null));
            this.ticker.logMs("Erased type variables in generic methods");
        }
        null /*topLevl*/.transformProgram(this._program);
        this.ticker.logMs("Transformed async methods");
    }
    verify() : void {
        let verifyErrors = lib26.verifyProgram(this._program);
        this.errors.addAll(verifyErrors.map((error : any) =>  {
            return `${error}`;
        }));
        this.ticker.logMs("Verified program");
    }
    trimDependenciesInProgram() {
        let toShake = this.dillTarget.loader.libraries.map((lib : any) =>  {
            return lib.importUri;
        }).toSet();
        let isIncluded = (uri : lib11.Uri) =>  {
            return !toShake.contains(uri);
        };
        let data = new lib27.RetainedDataBuilder();
        new lib27.RootsMarker(data).run(this._program,isIncluded);
        lib27.trimProgram(this._program,data,isIncluded);
    }
    isSourceLibrary(library : any) : boolean {
        return this.loader.libraries.contains(library);
    }
}

export class properties {
}
