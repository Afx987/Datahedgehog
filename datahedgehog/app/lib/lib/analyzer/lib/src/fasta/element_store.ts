/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/element_store.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./mock_element";
import * as lib5 from "./mock_type";

export namespace ElementStore {
    export type Constructors = never;
    export type Interface = Omit<ElementStore, Constructors>;
}
@DartClass
@Implements(any)
export class ElementStore implements any.Interface {
    @Abstract
    [OperatorMethods.INDEX](builder : any) : any{ throw 'abstract'}
    constructor(coreLibrary : any,builders : core.DartMap<lib3.Uri,any>) {
    }
    @defaultFactory
    static $ElementStore(coreLibrary : any,builders : core.DartMap<lib3.Uri,any>) : ElementStore {
        return new ElementStoreImplementation.$create(coreLibrary,builders);
    }
}

export namespace ElementStoreImplementation {
    export type Constructors = 'internal';
    export type Interface = Omit<ElementStoreImplementation, Constructors>;
}
@DartClass
@Implements(ElementStore)
export class ElementStoreImplementation implements ElementStore.Interface {
    coreLibrary : any;

    elements : core.DartMap<any,any>;

    @namedConstructor
    internal(coreLibrary : any,elements : core.DartMap<any,any>) {
        this.coreLibrary = coreLibrary;
        this.elements = elements;
    }
    static internal : new(coreLibrary : any,elements : core.DartMap<any,any>) => ElementStoreImplementation;

    [OperatorMethods.INDEX](builder : any) : any {
        return is(builder, any) ? builder : this.elements.get(builder);
    }
    constructor(coreLibrary : any,libraries : core.DartMap<lib3.Uri,any>) {
    }
    @defaultFactory
    static $ElementStoreImplementation(coreLibrary : any,libraries : core.DartMap<lib3.Uri,any>) : ElementStoreImplementation {
        let elements : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        libraries.forEach((uri : lib3.Uri,library : any) =>  {
            let unit : KernelCompilationUnitElement = new KernelCompilationUnitElement(library);
            let element : KernelLibraryElement = new KernelLibraryElement(unit);
            elements.set(library,element);
            unit.library = element;
            library.forEach((name : string,builder : any) =>  {
                do{
                    if (is(builder, any)) {
                        elements.set(builder,new KernelClassElement(builder));
                    }else if (is(builder, any)) {
                        elements.set(builder,new KernelFunctionTypeAliasElement(builder));
                    }else if (is(builder, any)) {
                        let member : any = builder.member;
                        if (is(member, any)) {
                        }else if (is(member, any)) {
                            ElementStoreImplementation.buildDillFunctionElement(builder,unit,elements);
                        }else {
                            internalError(`Unhandled ${name} ${member.runtimeType} in ${uri}`);
                        }
                    }else if (is(builder, any)) {
                        ElementStoreImplementation.buildKernelFunctionElement(builder,unit,elements);
                    }else if (is(builder, any)) {
                    }else {
                        internalError(`Unhandled ${name} ${builder.runtimeType} in ${uri}`);
                    }
                    builder = builder.next;
                } while (builder != null);
            });
        });
        return new ElementStoreImplementation.internal(coreLibrary,elements);
    }
    get ignoreRedirectingFactories() : boolean {
        return false;
    }
    getCoreClassConstructorReference(className : string,_namedArguments? : {constructorName? : string,library? : string}) : any {
        let {constructorName,library} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (library == null); */;
        return this.coreLibrary.getConstructor(className,{
            constructorName : constructorName}).target;
    }
    getLibraryReference(element : any) : any {
        return internalError("not supported.");
    }
    getClassReference(cls : KernelClassElement) : any {
        return cls.builder.cls;
    }
    getMemberReference(element : any) : any {
        if (is(element, KernelFunctionElement)) {
            return element.procedure;
        }else {
            return internalError(`getMemberReference(${element.runtimeType})`);
        }
    }
    getRootClassReference() : any {
        return internalError("not supported.");
    }
    getRootClassConstructorReference() : any {
        return internalError("not supported.");
    }
    getCoreClassReference(className : string) : any {
        return internalError("not supported.");
    }
    tryGetClassTypeParameter(element : any) : any {
        return internalError("not supported.");
    }
    getSharedMixinApplicationClass(library : any,supertype : any,mixin : any) : any {
        return internalError("not supported.");
    }
    get strongMode() : boolean {
        return false;
    }
    static buildDillFunctionElement(builder : any,unit : KernelCompilationUnitElement,elements : core.DartMap<any,any>) : void {
        let procedure : any = builder.member;
        let positionalParameters : core.DartList<any> = procedure.function.positionalParameters;
        let namedParameters : core.DartList<any> = procedure.function.namedParameters;
        let requiredParameterCount : number = procedure.function.requiredParameterCount;
        let parameters : core.DartList<KernelParameterElement> = new core.DartList<KernelParameterElement>(positionalParameters.length + namedParameters.length);
        let i : number = 0;
        for(let parameter of positionalParameters) {
            parameters[i] = ElementStoreImplementation.buildFormalParameter(parameter,{
                isOptional : i >= requiredParameterCount});
            i++;
        }
        for(let parameter of namedParameters) {
            parameters[i++] = ElementStoreImplementation.buildFormalParameter(parameter,{
                isNamed : true});
        }
        elements.set(builder,new KernelFunctionElement(procedure,unit,parameters));
    }
    static buildKernelFunctionElement(builder : any,unit : KernelCompilationUnitElement,elements : core.DartMap<any,any>) : void {
        /* TODO (AssertStatementImpl) : assert (builder.procedure != null); */;
        let parameters : core.DartList<KernelParameterElement>;
        let i : number = 0;
        if (builder.formals != null) {
            parameters = new core.DartList<KernelParameterElement>(builder.formals.length);
            for(let parameter of builder.formals) {
                /* TODO (AssertStatementImpl) : assert (parameter.declaration != null); */;
                elements.set(parameter,parameters[i++] = ElementStoreImplementation.buildFormalParameter(parameter.declaration,{
                    isOptional : parameter.isOptional,isNamed : parameter.isNamed}));
            }
        }else {
            parameters = new core.DartList<KernelParameterElement>(0);
        }
        elements.set(builder,new KernelFunctionElement(builder.procedure,unit,parameters));
    }
    static buildFormalParameter(parameter : any,_namedArguments? : {isOptional? : boolean,isNamed? : boolean}) : KernelParameterElement {
        let {isOptional,isNamed} = Object.assign({
            "isOptional" : true,
            "isNamed" : false}, _namedArguments );
        let kind : any = isOptional ? (isNamed ? ParameterKind.NAMED : ParameterKind.POSITIONAL) : ParameterKind.REQUIRED;
        return new KernelParameterElement(parameter,kind);
    }
}

export namespace KernelLibraryElement {
    export type Constructors = lib4.MockLibraryElement.Constructors | 'KernelLibraryElement';
    export type Interface = Omit<KernelLibraryElement, Constructors>;
}
@DartClass
export class KernelLibraryElement extends lib4.MockLibraryElement {
    definingCompilationUnit : KernelCompilationUnitElement;

    constructor(definingCompilationUnit : KernelCompilationUnitElement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelLibraryElement(definingCompilationUnit : KernelCompilationUnitElement) {
        this.definingCompilationUnit = definingCompilationUnit;
    }
    get loadLibraryFunction() : any {
        return null;
    }
}

export namespace KernelCompilationUnitElement {
    export type Constructors = lib4.MockCompilationUnitElement.Constructors | 'KernelCompilationUnitElement';
    export type Interface = Omit<KernelCompilationUnitElement, Constructors>;
}
@DartClass
export class KernelCompilationUnitElement extends lib4.MockCompilationUnitElement {
    builder : any;

    library : KernelLibraryElement;

    constructor(builder : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelCompilationUnitElement(builder : any) {
        this.builder = builder;
    }
    get enclosingElement() : KernelLibraryElement {
        return this.library;
    }
    get uri() : string {
        return `${this.builder.uri}`;
    }
}

export namespace KernelFunctionElement {
    export type Constructors = lib4.MockFunctionElement.Constructors | 'KernelFunctionElement';
    export type Interface = Omit<KernelFunctionElement, Constructors>;
}
@DartClass
export class KernelFunctionElement extends lib4.MockFunctionElement {
    procedure : any;

    enclosingElement : KernelCompilationUnitElement;

    parameters : core.DartList<KernelParameterElement>;

    constructor(procedure : any,enclosingElement : KernelCompilationUnitElement,parameters : core.DartList<KernelParameterElement>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelFunctionElement(procedure : any,enclosingElement : KernelCompilationUnitElement,parameters : core.DartList<KernelParameterElement>) {
        this.procedure = procedure;
        this.enclosingElement = enclosingElement;
        this.parameters = parameters;
    }
    get library() : KernelLibraryElement {
        return this.enclosingElement.library;
    }
}

export namespace KernelParameterElement {
    export type Constructors = lib4.MockParameterElement.Constructors | 'KernelParameterElement';
    export type Interface = Omit<KernelParameterElement, Constructors>;
}
@DartClass
export class KernelParameterElement extends lib4.MockParameterElement {
    declaration : any;

    parameterKind : any;

    constructor(declaration : any,parameterKind : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelParameterElement(declaration : any,parameterKind : any) {
        this.declaration = declaration;
        this.parameterKind = parameterKind;
    }
}

export namespace AnalyzerLocalVariableElemment {
    export type Constructors = lib4.MockElement.Constructors | 'AnalyzerLocalVariableElemment';
    export type Interface = Omit<AnalyzerLocalVariableElemment, Constructors>;
}
@DartClass
@Implements(any)
export class AnalyzerLocalVariableElemment extends lib4.MockElement implements any.Interface {
    variable : any;

    constructor(variable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalyzerLocalVariableElemment(variable : any) {
        super.MockElement(ElementKind.LOCAL_VARIABLE);
        this.variable = variable;
    }
    get name() : string {
        return this.variable.name.name;
    }
    get isFinal() : boolean {
        return false;
    }
    get isConst() : boolean {
        return false;
    }
    get target() : any {
        return this.variable;
    }
    get type() {
        return null;
    }
    get constantValue() {
        return internalError("not supported.");
    }
    computeConstantValue() {
        return internalError("not supported.");
    }
}

export namespace AnalyzerParameterElement {
    export type Constructors = lib4.MockParameterElement.Constructors | 'AnalyzerParameterElement';
    export type Interface = Omit<AnalyzerParameterElement, Constructors>;
}
@DartClass
export class AnalyzerParameterElement extends lib4.MockParameterElement {
    parameter : any;

    constructor(parameter : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalyzerParameterElement(parameter : any) {
        this.parameter = parameter;
    }
    get name() : string {
        return this.parameter.identifier.name;
    }
    get isFinal() : boolean {
        return false;
    }
    get isConst() : boolean {
        return false;
    }
    get target() : any {
        return this.parameter;
    }
}

export namespace KernelClassElement {
    export type Constructors = lib4.MockClassElement.Constructors | 'KernelClassElement';
    export type Interface = Omit<KernelClassElement, Constructors>;
}
@DartClass
export class KernelClassElement extends lib4.MockClassElement {
    builder : any;

    rawType : KernelInterfaceType;

    constructor(builder : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelClassElement(builder : any) {
        this.builder = builder;
        this.rawType = new KernelInterfaceType(this);
    }
}

export namespace KernelFunctionTypeAliasElement {
    export type Constructors = lib4.MockFunctionTypeAliasElement.Constructors | 'KernelFunctionTypeAliasElement';
    export type Interface = Omit<KernelFunctionTypeAliasElement, Constructors>;
}
@DartClass
export class KernelFunctionTypeAliasElement extends lib4.MockFunctionTypeAliasElement {
    builder : any;

    constructor(builder : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelFunctionTypeAliasElement(builder : any) {
        this.builder = builder;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return internalError("not supported.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return internalError("not supported.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return internalError("not supported.");
    }
}

export namespace KernelInterfaceType {
    export type Constructors = lib5.MockInterfaceType.Constructors | 'KernelInterfaceType';
    export type Interface = Omit<KernelInterfaceType, Constructors>;
}
@DartClass
export class KernelInterfaceType extends lib5.MockInterfaceType {
    element : KernelClassElement;

    constructor(element : KernelClassElement) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelInterfaceType(element : KernelClassElement) {
        this.element = element;
    }
    get typeArguments() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
}

export class properties {
}
