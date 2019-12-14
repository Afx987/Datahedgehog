/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_procedure_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/procedure_builder";
import * as lib4 from "./../builder/metadata_builder";
import * as lib5 from "./kernel_type_builder";
import * as lib6 from "./../builder/type_variable_builder";
import * as lib7 from "./../builder/formal_parameter_builder";
import * as lib8 from "./kernel_library_builder";
import * as lib9 from "./../errors";
import * as lib10 from "./../builder/library_builder";
import * as lib11 from "./../builder/class_builder";
import * as lib12 from "./../messages";
import * as lib13 from "./../loader";
import * as lib14 from "./../builder/builder";
import * as lib15 from "./../builder/constructor_reference_builder";
import * as lib16 from "./kernel_builder";

export namespace KernelFunctionBuilder {
    export type Constructors = lib3.ProcedureBuilder.Constructors | 'KernelFunctionBuilder';
    export type Interface = Omit<KernelFunctionBuilder, Constructors>;
}
@DartClass
export class KernelFunctionBuilder extends lib3.ProcedureBuilder<lib5.KernelTypeBuilder> {
    nativeMethodName : string;

    function : any;

    actualBody : any;

    constructor(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,compilationUnit : lib8.KernelLibraryBuilder,charOffset : number,nativeMethodName : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelFunctionBuilder(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,compilationUnit : lib8.KernelLibraryBuilder,charOffset : number,nativeMethodName : string) {
        super.ProcedureBuilder(metadata,modifiers,returnType,name,typeVariables,formals,compilationUnit,charOffset);
        this.nativeMethodName = nativeMethodName;
    }
    set body(newBody : any) {
        if (this.isAbstract && newBody != null) {
            return lib9.internalError("Attempting to set body on abstract method.");
        }
        this.actualBody = newBody;
        if (this.function != null) {
            this.function.body = newBody;
            ((t)=>(!!t)?t.parent:null)(newBody) = this.function;
        }
    }
    get body() : any {
        return this.actualBody = ( this.actualBody ) || ( new bare.createInstance(any,null) );
    }
    get isNative() : boolean {
        return this.nativeMethodName != null;
    }
    buildFunction(library : lib10.LibraryBuilder<any,any>) : any {
        /* TODO (AssertStatementImpl) : assert (function == null); */;
        let result : any = new bare.createInstance(any,null,this.body,{
            asyncMarker : this.asyncModifier});
        if (this.typeVariables != null) {
            for(let t of this.typeVariables) {
                result.typeParameters.add(t.parameter);
            }
            setParents(result.typeParameters,result);
        }
        if (this.formals != null) {
            for(let formal of this.formals) {
                let parameter : any = formal.build(library);
                if (formal.isNamed) {
                    result.namedParameters.add(parameter);
                }else {
                    result.positionalParameters.add(parameter);
                }
                parameter.parent = result;
                if (formal.isRequired) {
                    result.requiredParameterCount++;
                }
            }
        }
        if (this.returnType != null) {
            result.returnType = this.returnType.build(library);
        }
        if (!this.isConstructor && !this.isInstanceMember && is(this.parent, lib11.ClassBuilder<any,any>)) {
            let typeParameters : core.DartList<any> = this.parent.target.typeParameters;
            if (typeParameters.isNotEmpty) {
                let substitution : core.DartMap<any,any>;
                var removeTypeVariables : (type : any) => any = (type : any) : any =>  {
                    if (substitution == null) {
                        substitution = new core.DartMap.literal([
                        ]);
                        for(let parameter of typeParameters) {
                            substitution.set(parameter,new bare.createInstance(any,null));
                        }
                    }
                    lib12.warning(this.fileUri,this.charOffset,"Can only use type variables in instance methods.");
                    return substitute(type,substitution);
                };
                let set : core.DartSet<any> = typeParameters.toSet();
                for(let parameter of result.positionalParameters) {
                    if (containsTypeVariable(parameter.type,set)) {
                        parameter.type = removeTypeVariables(parameter.type);
                    }
                }
                for(let parameter of result.namedParameters) {
                    if (containsTypeVariable(parameter.type,set)) {
                        parameter.type = removeTypeVariables(parameter.type);
                    }
                }
                if (containsTypeVariable(result.returnType,set)) {
                    result.returnType = removeTypeVariables(result.returnType);
                }
            }
        }
        return this.function = result;
    }
    @Abstract
    build(library : lib10.LibraryBuilder<any,any>) : any{ throw 'abstract'}
    becomeNative(loader : lib13.Loader<any>) : void {
        this.target.isExternal = true;
        let constructor : lib14.Builder = loader.getNativeAnnotation();
        let arguments : any = new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,this.nativeMethodName)));
        let annotation : any;
        if (constructor.isConstructor) {
            annotation = ((_) : any =>  {
                {
                    _.isConst = true;
                    return _;
                }
            })(new bare.createInstance(any,null,constructor.target,arguments));
        }else {
            annotation = ((_) : any =>  {
                {
                    _.isConst = true;
                    return _;
                }
            })(new bare.createInstance(any,null,constructor.target,arguments));
        }
        this.target.addAnnotation(annotation);
    }
}

export namespace KernelProcedureBuilder {
    export type Constructors = KernelFunctionBuilder.Constructors | 'KernelProcedureBuilder';
    export type Interface = Omit<KernelProcedureBuilder, Constructors>;
}
@DartClass
export class KernelProcedureBuilder extends KernelFunctionBuilder {
    procedure : any;

    charOpenParenOffset : number;

    actualAsyncModifier : any;

    redirectionTarget : lib15.ConstructorReferenceBuilder;

    constructor(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,kind : any,compilationUnit : lib8.KernelLibraryBuilder,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName? : string,redirectionTarget? : lib15.ConstructorReferenceBuilder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelProcedureBuilder(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,kind : any,compilationUnit : lib8.KernelLibraryBuilder,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName? : string,redirectionTarget? : lib15.ConstructorReferenceBuilder) {
        this.actualAsyncModifier = AsyncMarker.Sync;
        this.procedure = ((_) : any =>  {
            {
                _.fileOffset = charOffset;
                _.fileEndOffset = charEndOffset;
                return _;
            }
        })(new bare.createInstance(any,null,null,kind,null,{
            fileUri : ((t)=>(!!t)?t.relativeFileUri:null)(compilationUnit)}));
        super.KernelFunctionBuilder(metadata,modifiers,returnType,name,typeVariables,formals,compilationUnit,charOffset,nativeMethodName);
        this.charOpenParenOffset = charOpenParenOffset;
        this.redirectionTarget = redirectionTarget;
    }
    get kind() : any {
        return this.procedure.kind;
    }
    get asyncModifier() : any {
        return this.actualAsyncModifier;
    }
    get body() : any {
        if (op(Op.EQUALS,this.actualBody,null) && op(Op.EQUALS,this.redirectionTarget,null) && !this.isAbstract && !this.isExternal) {
            this.actualBody = new bare.createInstance(any,null);
        }
        return this.actualBody;
    }
    set asyncModifier(newModifier : any) {
        this.actualAsyncModifier = newModifier;
        if (this.function != null) {
            this.function.asyncMarker = this.actualAsyncModifier;
            this.function.dartAsyncMarker = this.actualAsyncModifier;
        }
    }
    build(library : lib10.LibraryBuilder<any,any>) : any {
        if (op(Op.EQUALS,this.procedure.name,null)) {
            this.procedure.function = this.buildFunction(library);
            this.procedure.function.parent = this.procedure;
            this.procedure.function.fileOffset = this.charOpenParenOffset;
            this.procedure.function.fileEndOffset = this.procedure.fileEndOffset;
            this.procedure.isAbstract = this.isAbstract;
            this.procedure.isStatic = this.isStatic;
            this.procedure.isExternal = this.isExternal;
            this.procedure.isConst = this.isConst;
            this.procedure.name = new bare.createInstance(any,null,this.name,library.target);
        }
        return this.procedure;
    }
    get target() : any {
        return this.procedure;
    }
}

export namespace KernelConstructorBuilder {
    export type Constructors = KernelFunctionBuilder.Constructors | 'KernelConstructorBuilder';
    export type Interface = Omit<KernelConstructorBuilder, Constructors>;
}
@DartClass
export class KernelConstructorBuilder extends KernelFunctionBuilder {
    constructor : any;

    charOpenParenOffset : number;

    hasMovedSuperInitializer : boolean;

    superInitializer : any;

    redirectingInitializer : any;

    constructor(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,compilationUnit : lib8.KernelLibraryBuilder,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName? : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelConstructorBuilder(metadata : core.DartList<lib4.MetadataBuilder<any>>,modifiers : number,returnType : lib5.KernelTypeBuilder,name : string,typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>,formals : core.DartList<lib7.FormalParameterBuilder<any>>,compilationUnit : lib8.KernelLibraryBuilder,charOffset : number,charOpenParenOffset : number,charEndOffset : number,nativeMethodName? : string) {
        this.hasMovedSuperInitializer = false;
        this.constructor = ((_) : any =>  {
            {
                _.fileOffset = charOffset;
                _.fileEndOffset = charEndOffset;
                return _;
            }
        })(new bare.createInstance(any,null,null));
        super.KernelFunctionBuilder(metadata,modifiers,returnType,name,typeVariables,formals,compilationUnit,charOffset,nativeMethodName);
        this.charOpenParenOffset = charOpenParenOffset;
    }
    get isInstanceMember() : boolean {
        return false;
    }
    get isConstructor() : boolean {
        return true;
    }
    get asyncModifier() : any {
        return AsyncMarker.Sync;
    }
    get kind() : any {
        return null;
    }
    get isRedirectingGenerativeConstructor() : boolean {
        return lib16.isRedirectingGenerativeConstructorImplementation(this.constructor);
    }
    build(library : lib10.LibraryBuilder<any,any>) : any {
        if (op(Op.EQUALS,this.constructor.name,null)) {
            this.constructor.function = this.buildFunction(library);
            this.constructor.function.parent = this.constructor;
            this.constructor.function.fileOffset = this.charOpenParenOffset;
            this.constructor.function.fileEndOffset = this.constructor.fileEndOffset;
            this.constructor.isConst = this.isConst;
            this.constructor.isExternal = this.isExternal;
            this.constructor.name = new bare.createInstance(any,null,this.name,library.target);
        }
        return this.constructor;
    }
    buildFunction(library : lib10.LibraryBuilder<any,any>) : any {
        return ((_) : any =>  {
            {
                _.returnType = new bare.createInstance(any,null);
                return _;
            }
        })(super.buildFunction(library));
    }
    get target() : any {
        return this.constructor;
    }
    checkSuperOrThisInitializer(initializer : any) : void {
        if (this.superInitializer != null || this.redirectingInitializer != null) {
            lib16.memberError(this.target,"Can't have more than one 'super' or 'this' initializer.",initializer.fileOffset);
        }
    }
    addInitializer(initializer : any) : void {
        let initializers : core.DartList<any> = this.constructor.initializers;
        if (is(initializer, any)) {
            this.checkSuperOrThisInitializer(initializer);
            this.superInitializer = initializer;
        }else if (is(initializer, any)) {
            this.checkSuperOrThisInitializer(initializer);
            this.redirectingInitializer = initializer;
            if (this.constructor.initializers.isNotEmpty) {
                lib16.memberError(this.target,"'this' initializer must be the only initializer.",initializer.fileOffset);
            }
        }else if (this.redirectingInitializer != null) {
            lib16.memberError(this.target,"'this' initializer must be the only initializer.",initializer.fileOffset);
        }else if (this.superInitializer != null) {
            /* TODO (AssertStatementImpl) : assert (superInitializer != initializer); */;
            /* TODO (AssertStatementImpl) : assert (initializers.last == superInitializer); */;
            initializers.removeLast();
            if (!this.hasMovedSuperInitializer) {
                this.hasMovedSuperInitializer = true;
                let arguments : any = this.superInitializer.arguments;
                let positional : core.DartList<any> = arguments.positional;
                for(let i : number = 0; i < positional.length; i++){
                    let variable : any = new bare.createInstance(any,null,positional[i],{
                        isFinal : true});
                    initializers.add(((_) : any =>  {
                        {
                            _.parent = this.constructor;
                            return _;
                        }
                    })(new bare.createInstance(any,null,variable)));
                    positional[i] = ((_) : any =>  {
                        {
                            _.parent = arguments;
                            return _;
                        }
                    })(new bare.createInstance(any,null,variable));
                }
                for(let named of arguments.named) {
                    let variable : any = new bare.createInstance(any,null,named.value,{
                        isFinal : true});
                    named.value = ((_) : any =>  {
                        {
                            _.parent = named;
                            return _;
                        }
                    })(new bare.createInstance(any,null,variable));
                    initializers.add(((_) : any =>  {
                        {
                            _.parent = this.constructor;
                            return _;
                        }
                    })(new bare.createInstance(any,null,variable)));
                }
            }
            initializers.add(((_) : any =>  {
                {
                    _.parent = this.constructor;
                    return _;
                }
            })(initializer));
            initializers.add(this.superInitializer);
            return;
        }
        initializers.add(initializer);
        initializer.parent = this.constructor;
    }
}

export class properties {
}
