/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/element/handle.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ElementHandle {
    export type Constructors = 'ElementHandle';
    export type Interface = Omit<ElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class ElementHandle implements any.Interface {
    id : number;

    _resynthesizer : ElementResynthesizer;

    _location : any;

    _elementReference : any;

    constructor(_resynthesizer : ElementResynthesizer,_location : any) {
    }
    @defaultConstructor
    ElementHandle(_resynthesizer : ElementResynthesizer,_location : any) {
        this.id = 0;
        this._resynthesizer = _resynthesizer;
        this._location = _location;
    }
    get actualElement() : any {
        if (op(Op.EQUALS,this._elementReference,null)) {
            this._elementReference = this._resynthesizer.getElement(this._location);
        }
        return this._elementReference;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        return this._resynthesizer.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.actualElement.displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        return this.actualElement.documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.actualElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this._location.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeprecated() : boolean {
        return this.actualElement.isDeprecated;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        return this.actualElement.isFactory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isJS() : boolean {
        return this.actualElement.isJS;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOverride() : boolean {
        return this.actualElement.isOverride;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPrivate() : boolean {
        return this.actualElement.isPrivate;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProtected() : boolean {
        return this.actualElement.isProtected;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPublic() : boolean {
        return this.actualElement.isPublic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRequired() : boolean {
        return this.actualElement.isRequired;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this.actualElement.isSynthetic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : any {
        return this.getAncestor((element : any) =>  {
            return is(element, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySource() : any {
        return this.actualElement.librarySource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        return this._location;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        return this.actualElement.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this.actualElement.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameLength() : number {
        return this.actualElement.nameLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this.actualElement.nameOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this.actualElement.source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : any {
        return this.actualElement.unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, any) && op(Op.EQUALS,object.location,this._location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return this.actualElement.accept(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDocumentationComment() : string {
        return this.documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAncestor(predicate : any) : any {
        return this.actualElement.getAncestor(predicate);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getExtendedDisplayName(shortName : string) : string {
        return this.actualElement.getExtendedDisplayName(shortName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAccessibleIn(library : any) : boolean {
        return this.actualElement.isAccessibleIn(library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.actualElement.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this.actualElement.visitChildren(visitor);
    }
}

export namespace ElementResynthesizer {
    export type Constructors = 'ElementResynthesizer';
    export type Interface = Omit<ElementResynthesizer, Constructors>;
}
@DartClass
export class ElementResynthesizer {
    context : any;

    constructor(context : any) {
    }
    @defaultConstructor
    ElementResynthesizer(context : any) {
        this.context = context;
    }
    @Abstract
    getElement(location : any) : any{ throw 'abstract'}
}

export namespace ClassElementHandle {
    export type Constructors = ElementHandle.Constructors | 'ClassElementHandle';
    export type Interface = Omit<ClassElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class ClassElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<any> {
        return this.actualElement.accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allSupertypes() : core.DartList<any> {
        return this.actualElement.allSupertypes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructors() : core.DartList<any> {
        return this.actualElement.constructors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<any> {
        return this.actualElement.fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasNonFinalField() : boolean {
        return this.actualElement.hasNonFinalField;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasReferenceToSuper() : boolean {
        return this.actualElement.hasReferenceToSuper;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasStaticMember() : boolean {
        return this.actualElement.hasStaticMember;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<any> {
        return this.actualElement.interfaces;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return this.actualElement.isAbstract;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnum() : boolean {
        return this.actualElement.isEnum;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isJS() : boolean {
        return this.actualElement.isJS;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMixinApplication() : boolean {
        return this.actualElement.isMixinApplication;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOrInheritsProxy() : boolean {
        return this.actualElement.isOrInheritsProxy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProxy() : boolean {
        return this.actualElement.isProxy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRequired() : boolean {
        return this.actualElement.isRequired;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isValidMixin() : boolean {
        return this.actualElement.isValidMixin;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.CLASS;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methods() : core.DartList<any> {
        return this.actualElement.methods;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<any> {
        return this.actualElement.mixins;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get supertype() : any {
        return this.actualElement.supertype;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.actualElement.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.actualElement.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unnamedConstructor() : any {
        return this.actualElement.unnamedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return super.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getField(fieldName : string) : any {
        return this.actualElement.getField(fieldName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getGetter(getterName : string) : any {
        return this.actualElement.getGetter(getterName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMethod(methodName : string) : any {
        return this.actualElement.getMethod(methodName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNamedConstructor(name : string) : any {
        return this.actualElement.getNamedConstructor(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSetter(setterName : string) : any {
        return this.actualElement.getSetter(setterName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSuperConstructorAccessible(constructor : any) : boolean {
        return this.actualElement.isSuperConstructorAccessible(constructor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpConcreteMethod(methodName : string,library : any) : any {
        return this.actualElement.lookUpConcreteMethod(methodName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpGetter(getterName : string,library : any) : any {
        return this.actualElement.lookUpGetter(getterName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedConcreteGetter(methodName : string,library : any) : any {
        return this.actualElement.lookUpInheritedConcreteGetter(methodName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedConcreteMethod(methodName : string,library : any) : any {
        return this.actualElement.lookUpInheritedConcreteMethod(methodName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedConcreteSetter(methodName : string,library : any) : any {
        return this.actualElement.lookUpInheritedConcreteSetter(methodName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedMethod(methodName : string,library : any) : any {
        return this.actualElement.lookUpInheritedMethod(methodName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpMethod(methodName : string,library : any) : any {
        return this.actualElement.lookUpMethod(methodName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpSetter(setterName : string,library : any) : any {
        return this.actualElement.lookUpSetter(setterName,library);
    }
}

export namespace CompilationUnitElementHandle {
    export type Constructors = ElementHandle.Constructors | 'CompilationUnitElementHandle';
    export type Interface = Omit<CompilationUnitElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class CompilationUnitElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<any> {
        return this.actualElement.accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enums() : core.DartList<any> {
        return this.actualElement.enums;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<any> {
        return this.actualElement.functions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionTypeAliases() : core.DartList<any> {
        return this.actualElement.functionTypeAliases;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasLoadLibraryFunction() : boolean {
        return this.actualElement.hasLoadLibraryFunction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.COMPILATION_UNIT;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lineInfo() : any {
        return this.actualElement.lineInfo;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this.actualElement.source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get topLevelVariables() : core.DartList<any> {
        return this.actualElement.topLevelVariables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get types() : core.DartList<any> {
        return this.actualElement.types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        return this.actualElement.uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        return this.actualElement.uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        return this.actualElement.uriOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getElementAt(offset : number) : any {
        return this.actualElement.getElementAt(offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getEnum(enumName : string) : any {
        return this.actualElement.getEnum(enumName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getType(className : string) : any {
        return this.actualElement.getType(className);
    }
}

export namespace ExecutableElementHandle {
    export type Constructors = ElementHandle.Constructors | 'ExecutableElementHandle';
    export type Interface = Omit<ExecutableElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutableElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExecutableElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<any> {
        return this.actualElement.functions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitReturnType() : boolean {
        return this.actualElement.hasImplicitReturnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return this.actualElement.isAbstract;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        return this.actualElement.isAsynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExternal() : boolean {
        return this.actualElement.isExternal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGenerator() : boolean {
        return this.actualElement.isGenerator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOperator() : boolean {
        return this.actualElement.isOperator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.actualElement.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynchronous() : boolean {
        return this.actualElement.isSynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get labels() : core.DartList<any> {
        return this.actualElement.labels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localVariables() : core.DartList<any> {
        return this.actualElement.localVariables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this.actualElement.parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this.actualElement.returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.actualElement.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.actualElement.typeParameters;
    }
}

export namespace ExportElementHandle {
    export type Constructors = ElementHandle.Constructors | 'ExportElementHandle';
    export type Interface = Omit<ExportElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class ExportElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExportElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<any> {
        return this.actualElement.combinators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportedLibrary() : any {
        return this.actualElement.exportedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.EXPORT;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        return this.actualElement.uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        return this.actualElement.uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        return this.actualElement.uriOffset;
    }
}

export namespace FunctionTypeAliasElementHandle {
    export type Constructors = ElementHandle.Constructors | 'FunctionTypeAliasElementHandle';
    export type Interface = Omit<FunctionTypeAliasElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionTypeAliasElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeAliasElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.FUNCTION_TYPE_ALIAS;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this.actualElement.parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this.actualElement.returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.actualElement.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.actualElement.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
}

export namespace GenericTypeAliasElementHandle {
    export type Constructors = ElementHandle.Constructors | 'GenericTypeAliasElementHandle';
    export type Interface = Omit<GenericTypeAliasElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class GenericTypeAliasElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericTypeAliasElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get function() : any {
        return this.actualElement.function;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.FUNCTION_TYPE_ALIAS;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this.actualElement.parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this.actualElement.returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.actualElement.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.actualElement.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
}

export namespace ImportElementHandle {
    export type Constructors = ElementHandle.Constructors | 'ImportElementHandle';
    export type Interface = Omit<ImportElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class ImportElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImportElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<any> {
        return this.actualElement.combinators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importedLibrary() : any {
        return this.actualElement.importedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeferred() : boolean {
        return this.actualElement.isDeferred;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.IMPORT;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefix() : any {
        return this.actualElement.prefix;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixOffset() : number {
        return this.actualElement.prefixOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        return this.actualElement.uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        return this.actualElement.uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        return this.actualElement.uriOffset;
    }
}

export namespace LabelElementHandle {
    export type Constructors = ElementHandle.Constructors | 'LabelElementHandle';
    export type Interface = Omit<LabelElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class LabelElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabelElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.LABEL;
    }
}

export namespace LibraryElementHandle {
    export type Constructors = ElementHandle.Constructors | 'LibraryElementHandle';
    export type Interface = Omit<LibraryElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class LibraryElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definingCompilationUnit() : any {
        return this.actualElement.definingCompilationUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get entryPoint() : any {
        return this.actualElement.entryPoint;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportedLibraries() : core.DartList<any> {
        return this.actualElement.exportedLibraries;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportNamespace() : any {
        return this.actualElement.exportNamespace;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exports() : core.DartList<any> {
        return this.actualElement.exports;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasExtUri() : boolean {
        return this.actualElement.hasExtUri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasLoadLibraryFunction() : boolean {
        return this.actualElement.hasLoadLibraryFunction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this.location.components.last;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importedLibraries() : core.DartList<any> {
        return this.actualElement.importedLibraries;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get imports() : core.DartList<any> {
        return this.actualElement.imports;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBrowserApplication() : boolean {
        return this.actualElement.isBrowserApplication;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartAsync() : boolean {
        return this.actualElement.isDartAsync;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCore() : boolean {
        return this.actualElement.isDartCore;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInSdk() : boolean {
        return this.actualElement.isInSdk;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.LIBRARY;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryCycle() : core.DartList<any> {
        return this.actualElement.libraryCycle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get loadLibraryFunction() : any {
        return this.actualElement.loadLibraryFunction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<any> {
        return this.actualElement.parts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixes() : core.DartList<any> {
        return this.actualElement.prefixes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get publicNamespace() : any {
        return this.actualElement.publicNamespace;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get units() : core.DartList<any> {
        return this.actualElement.units;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getImportsWithPrefix(prefixElement : any) : core.DartList<any> {
        return this.actualElement.getImportsWithPrefix(prefixElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getType(className : string) : any {
        return this.actualElement.getType(className);
    }
}

export namespace PrefixElementHandle {
    export type Constructors = ElementHandle.Constructors | 'PrefixElementHandle';
    export type Interface = Omit<PrefixElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class PrefixElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importedLibraries() : core.DartList<any> {
        return LibraryElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.PREFIX;
    }
}

export namespace TypeParameterElementHandle {
    export type Constructors = ElementHandle.Constructors | 'TypeParameterElementHandle';
    export type Interface = Omit<TypeParameterElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class TypeParameterElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bound() : any {
        return this.actualElement.bound;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.TYPE_PARAMETER;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.actualElement.type;
    }
}

export namespace VariableElementHandle {
    export type Constructors = ElementHandle.Constructors | 'VariableElementHandle';
    export type Interface = Omit<VariableElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class VariableElementHandle extends ElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constantValue() : any {
        return this.actualElement.constantValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitType() : boolean {
        return this.actualElement.hasImplicitType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : any {
        return this.actualElement.initializer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this.actualElement.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return this.actualElement.isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInClosure() : boolean {
        return this.actualElement.isPotentiallyMutatedInClosure;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInScope() : boolean {
        return this.actualElement.isPotentiallyMutatedInScope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.actualElement.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.actualElement.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeConstantValue() : any {
        return this.actualElement.computeConstantValue();
    }
}

export namespace ConstructorElementHandle {
    export type Constructors = ExecutableElementHandle.Constructors | 'ConstructorElementHandle';
    export type Interface = Omit<ConstructorElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class ConstructorElementHandle extends ExecutableElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ExecutableElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.actualElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this.actualElement.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDefaultConstructor() : boolean {
        return this.actualElement.isDefaultConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        return this.actualElement.isFactory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.CONSTRUCTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameEnd() : number {
        return this.actualElement.nameEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get periodOffset() : number {
        return this.actualElement.periodOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructor() : any {
        return this.actualElement.redirectedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
}

export namespace FunctionElementHandle {
    export type Constructors = ExecutableElementHandle.Constructors | 'FunctionElementHandle';
    export type Interface = Omit<FunctionElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionElementHandle extends ExecutableElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ExecutableElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEntryPoint() : boolean {
        return this.actualElement.isEntryPoint;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.FUNCTION;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleRange() : any {
        return this.actualElement.visibleRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
}

export namespace LocalVariableElementHandle {
    export type Constructors = VariableElementHandle.Constructors | 'LocalVariableElementHandle';
    export type Interface = Omit<LocalVariableElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class LocalVariableElementHandle extends VariableElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalVariableElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.VariableElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.LOCAL_VARIABLE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleRange() : any {
        return this.actualElement.visibleRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
}

export namespace MethodElementHandle {
    export type Constructors = ExecutableElementHandle.Constructors | 'MethodElementHandle';
    export type Interface = Omit<MethodElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class MethodElementHandle extends ExecutableElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ExecutableElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.actualElement.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.METHOD;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getReifiedType(objectType : any) : any {
        return this.actualElement.getReifiedType(objectType);
    }
}

export namespace ParameterElementHandle {
    export type Constructors = VariableElementHandle.Constructors | 'ParameterElementHandle';
    export type Interface = Omit<ParameterElementHandle, Constructors>;
}
@DartClass
@Implements(any)
@With(any)
export class ParameterElementHandle extends VariableElementHandle implements any.Interface,any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParameterElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.VariableElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get defaultValueCode() : string {
        return this.actualElement.defaultValueCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        return this.actualElement.isCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInitializingFormal() : boolean {
        return this.actualElement.isInitializingFormal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.PARAMETER;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameterKind() : any {
        return this.actualElement.parameterKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this.actualElement.parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.actualElement.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleRange() : any {
        return this.actualElement.visibleRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return super.computeNode();
    }
}

export namespace PropertyAccessorElementHandle {
    export type Constructors = ExecutableElementHandle.Constructors | 'PropertyAccessorElementHandle';
    export type Interface = Omit<PropertyAccessorElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class PropertyAccessorElementHandle extends ExecutableElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessorElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.ExecutableElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correspondingGetter() : any {
        return this.actualElement.correspondingGetter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correspondingSetter() : any {
        return this.actualElement.correspondingSetter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGetter() : boolean {
        return !this.isSetter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSetter() : boolean {
        return this.location.components.last.endsWith('=');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        if (this.isGetter) {
            return ElementKind.GETTER;
        }else {
            return ElementKind.SETTER;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variable() : any {
        return this.actualElement.variable;
    }
}

export namespace PropertyInducingElementHandle {
    export type Constructors = VariableElementHandle.Constructors | 'PropertyInducingElementHandle';
    export type Interface = Omit<PropertyInducingElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class PropertyInducingElementHandle extends VariableElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyInducingElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.VariableElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getter() : any {
        return this.actualElement.getter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedType() : any {
        return this.actualElement.propagatedType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get setter() : any {
        return this.actualElement.setter;
    }
}

export namespace FieldElementHandle {
    export type Constructors = PropertyInducingElementHandle.Constructors | 'FieldElementHandle';
    export type Interface = Omit<FieldElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class FieldElementHandle extends PropertyInducingElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.PropertyInducingElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return super.actualElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.actualElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnumConstant() : boolean {
        return this.actualElement.isEnumConstant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVirtual() : boolean {
        return this.actualElement.isVirtual;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.FIELD;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.actualElement.computeNode();
    }
}

export namespace TopLevelVariableElementHandle {
    export type Constructors = PropertyInducingElementHandle.Constructors | 'TopLevelVariableElementHandle';
    export type Interface = Omit<TopLevelVariableElementHandle, Constructors>;
}
@DartClass
@Implements(any)
export class TopLevelVariableElementHandle extends PropertyInducingElementHandle implements any.Interface {
    constructor(resynthesizer : ElementResynthesizer,location : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelVariableElementHandle(resynthesizer : ElementResynthesizer,location : any) {
        super.PropertyInducingElementHandle(resynthesizer,location);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.TOP_LEVEL_VARIABLE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return super.computeNode();
    }
}

export class properties {
}
