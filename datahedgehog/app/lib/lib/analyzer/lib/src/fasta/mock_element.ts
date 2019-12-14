/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/mock_element.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace MockElement {
    export type Constructors = 'MockElement';
    export type Interface = Omit<MockElement, Constructors>;
}
@DartClass
@Implements(any,any)
export class MockElement extends any implements any.Interface,any.Interface {
    kind : any;

    constructor(kind : any) {
    }
    @defaultConstructor
    MockElement(kind : any) {
        super.DartObject(null,-1,null);
        this.kind = kind;
    }
    get librarySource() {
        return internalError("not supported.");
    }
    get source() {
        return internalError("not supported.");
    }
    get context() {
        return internalError("not supported.");
    }
    get displayName() : string {
        return internalError("not supported.");
    }
    get documentationComment() : string {
        return internalError("not supported.");
    }
    get enclosingElement() : any {
        return internalError("not supported.");
    }
    get id() : number {
        return internalError("not supported.");
    }
    get isDeprecated() : boolean {
        return internalError("not supported.");
    }
    get isFactory() : boolean {
        return internalError("not supported.");
    }
    get isJS() : boolean {
        return internalError("not supported.");
    }
    get isOverride() : boolean {
        return internalError("not supported.");
    }
    get isPrivate() : boolean {
        return internalError("not supported.");
    }
    get isProtected() : boolean {
        return internalError("not supported.");
    }
    get isPublic() : boolean {
        return internalError("not supported.");
    }
    get isRequired() : boolean {
        return internalError("not supported.");
    }
    get isSynthetic() : boolean {
        return internalError("not supported.");
    }
    get library() : any {
        return internalError("not supported.");
    }
    get location() {
        return internalError("not supported.");
    }
    get metadata() {
        return internalError("not supported.");
    }
    get name() : string {
        return internalError("not supported.");
    }
    get fullNameForErrors() : string {
        return this.name;
    }
    get nameLength() : number {
        return internalError("not supported.");
    }
    get nameOffset() : number {
        return -1;
    }
    get unit() {
        return internalError("not supported.");
    }
    accept<T>(visitor : any) {
        return internalError("not supported.");
    }
    computeDocumentationComment() : string {
        return internalError("not supported.");
    }
    computeNode() {
        return internalError("not supported.");
    }
    getAncestor<E>(predicate : any) {
        return internalError("not supported.");
    }
    getExtendedDisplayName(shortName : string) : string {
        return internalError("not supported.");
    }
    isAccessibleIn(library : any) : boolean {
        return internalError("not supported.");
    }
    visitChildren(visitor : any) : void {
        return internalError("not supported.");
    }
    get uri() : string {
        return internalError("not supported.");
    }
    get uriEnd() : number {
        return internalError("not supported.");
    }
    get uriOffset() : number {
        return internalError("not supported.");
    }
    get parameters() : core.DartList<any> {
        return internalError("not supported.");
    }
    get functions() : core.DartList<any> {
        return internalError("not supported.");
    }
    get hasImplicitReturnType() : boolean {
        return internalError("not supported.");
    }
    get isAbstract() : boolean {
        return internalError("not supported.");
    }
    get isAsynchronous() : boolean {
        return internalError("not supported.");
    }
    get isExternal() : boolean {
        return internalError("not supported.");
    }
    get isGenerator() : boolean {
        return internalError("not supported.");
    }
    get isOperator() : boolean {
        return internalError("not supported.");
    }
    get isStatic() : boolean {
        return internalError("not supported.");
    }
    get isSynchronous() : boolean {
        return internalError("not supported.");
    }
    get labels() : core.DartList<any> {
        return internalError("not supported.");
    }
    get localVariables() : core.DartList<any> {
        return internalError("not supported.");
    }
    get visibleRange() {
        return internalError("not supported.");
    }
    get hasImplicitType() : boolean {
        return internalError("not supported.");
    }
    get initializer() : any {
        return internalError("not supported.");
    }
    get isConst() : boolean {
        return internalError("not supported.");
    }
    get isFinal() : boolean {
        return internalError("not supported.");
    }
    get isPotentiallyMutatedInClosure() : boolean {
        return internalError("not supported.");
    }
    get isPotentiallyMutatedInScope() : boolean {
        return internalError("not supported.");
    }
}

export namespace MockLibraryElement {
    export type Constructors = MockElement.Constructors | 'MockLibraryElement';
    export type Interface = Omit<MockLibraryElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockLibraryElement extends MockElement implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockLibraryElement() {
        super.MockElement(ElementKind.LIBRARY);
    }
    get definingCompilationUnit() : any {
        return internalError("not supported.");
    }
    get entryPoint() : any {
        return internalError("not supported.");
    }
    get exportedLibraries() : core.DartList<any> {
        return internalError("not supported.");
    }
    get exportNamespace() {
        return internalError("not supported.");
    }
    get exports() {
        return internalError("not supported.");
    }
    get hasExtUri() : boolean {
        return internalError("not supported.");
    }
    get hasLoadLibraryFunction() : boolean {
        return internalError("not supported.");
    }
    get identifier() : string {
        return internalError("not supported.");
    }
    get importedLibraries() : core.DartList<any> {
        return internalError("not supported.");
    }
    get imports() {
        return internalError("not supported.");
    }
    get isBrowserApplication() : boolean {
        return internalError("not supported.");
    }
    get isDartAsync() : boolean {
        return internalError("not supported.");
    }
    get isDartCore() : boolean {
        return internalError("not supported.");
    }
    get isInSdk() : boolean {
        return internalError("not supported.");
    }
    get libraryCycle() : core.DartList<any> {
        return internalError("not supported.");
    }
    get loadLibraryFunction() : any {
        return internalError("not supported.");
    }
    get parts() : core.DartList<any> {
        return internalError("not supported.");
    }
    get prefixes() : core.DartList<any> {
        return internalError("not supported.");
    }
    get publicNamespace() {
        return internalError("not supported.");
    }
    get units() : core.DartList<any> {
        return internalError("not supported.");
    }
    getImportsWithPrefix(prefix : any) {
        return internalError("not supported.");
    }
    getType(className : string) : any {
        return internalError("not supported.");
    }
}

export namespace MockCompilationUnitElement {
    export type Constructors = MockElement.Constructors | 'MockCompilationUnitElement';
    export type Interface = Omit<MockCompilationUnitElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockCompilationUnitElement extends MockElement implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockCompilationUnitElement() {
        super.MockElement(ElementKind.COMPILATION_UNIT);
    }
    get accessors() : core.DartList<any> {
        return internalError("not supported.");
    }
    get enclosingElement() : any {
        return internalError("not supported.");
    }
    get enums() : core.DartList<any> {
        return internalError("not supported.");
    }
    get functions() : core.DartList<any> {
        return internalError("not supported.");
    }
    get functionTypeAliases() : core.DartList<any> {
        return internalError("not supported.");
    }
    get hasLoadLibraryFunction() : boolean {
        return internalError("not supported.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lineInfo() : any {
        return internalError("not supported.");
    }
    get topLevelVariables() : core.DartList<any> {
        return internalError("not supported.");
    }
    get types() : core.DartList<any> {
        return internalError("not supported.");
    }
    getElementAt(offset : number) : any {
        return internalError("not supported.");
    }
    getEnum(name : string) : any {
        return internalError("not supported.");
    }
    getType(name : string) : any {
        return internalError("not supported.");
    }
    computeNode() : any {
        return internalError("not supported.");
    }
}

export namespace MockClassElement {
    export type Constructors = MockElement.Constructors | 'MockClassElement';
    export type Interface = Omit<MockClassElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockClassElement extends MockElement implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockClassElement() {
        super.MockElement(ElementKind.CLASS);
    }
    get accessors() : core.DartList<any> {
        return internalError("not supported.");
    }
    get allSupertypes() {
        return internalError("not supported.");
    }
    get constructors() : core.DartList<any> {
        return internalError("not supported.");
    }
    get fields() : core.DartList<any> {
        return internalError("not supported.");
    }
    get hasNonFinalField() : boolean {
        return internalError("not supported.");
    }
    get hasReferenceToSuper() : boolean {
        return internalError("not supported.");
    }
    get hasStaticMember() : boolean {
        return internalError("not supported.");
    }
    get interfaces() {
        return internalError("not supported.");
    }
    get isAbstract() : boolean {
        return internalError("not supported.");
    }
    get isEnum() : boolean {
        return internalError("not supported.");
    }
    get isMixinApplication() : boolean {
        return internalError("not supported.");
    }
    get isOrInheritsProxy() : boolean {
        return internalError("not supported.");
    }
    get isProxy() : boolean {
        return internalError("not supported.");
    }
    get isValidMixin() : boolean {
        return internalError("not supported.");
    }
    get typeParameters() {
        return internalError("not supported.");
    }
    get methods() : core.DartList<any> {
        return internalError("not supported.");
    }
    get mixins() {
        return internalError("not supported.");
    }
    get supertype() {
        return internalError("not supported.");
    }
    get unnamedConstructor() : any {
        return internalError("not supported.");
    }
    getField(name : string) : any {
        return internalError("not supported.");
    }
    getGetter(name : string) : any {
        return internalError("not supported.");
    }
    getMethod(name : string) : any {
        return internalError("not supported.");
    }
    getNamedConstructor(name : string) : any {
        return internalError("not supported.");
    }
    getSetter(name : string) : any {
        return internalError("not supported.");
    }
    isSuperConstructorAccessible(constructor : any) : boolean {
        return internalError("not supported.");
    }
    lookUpConcreteMethod(methodName : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpGetter(getterName : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpInheritedConcreteGetter(getterName : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpInheritedConcreteMethod(methodName : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpInheritedConcreteSetter(setterName : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpInheritedMethod(methodName : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpMethod(methodName : string,library : any) : any {
        return internalError("not supported.");
    }
    lookUpSetter(setterName : string,library : any) : any {
        return internalError("not supported.");
    }
    computeNode() : any {
        return internalError("not supported.");
    }
    get type() : any {
        return internalError("not supported.");
    }
}

export namespace MockFunctionElement {
    export type Constructors = MockElement.Constructors | 'MockFunctionElement';
    export type Interface = Omit<MockFunctionElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockFunctionElement extends MockElement implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockFunctionElement() {
        super.MockElement(ElementKind.FUNCTION);
    }
    get isEntryPoint() : boolean {
        return internalError("not supported.");
    }
    get typeParameters() {
        return internalError("not supported.");
    }
    get type() : any {
        return internalError("not supported.");
    }
    get returnType() : any {
        return internalError("not supported.");
    }
    computeNode() : any {
        return internalError("not supported.");
    }
}

export namespace MockFunctionTypeAliasElement {
    export type Constructors = MockElement.Constructors | 'MockFunctionTypeAliasElement';
    export type Interface = Omit<MockFunctionTypeAliasElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockFunctionTypeAliasElement extends MockElement implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockFunctionTypeAliasElement() {
        super.MockElement(ElementKind.FUNCTION_TYPE_ALIAS);
    }
    get enclosingElement() : any {
        return internalError("not supported.");
    }
    computeNode() : any {
        return internalError("not supported.");
    }
}

export namespace MockParameterElement {
    export type Constructors = MockElement.Constructors | 'MockParameterElement';
    export type Interface = Omit<MockParameterElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockParameterElement extends MockElement implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockParameterElement() {
        super.MockElement(ElementKind.PARAMETER);
    }
    get defaultValueCode() : string {
        return internalError("not supported.");
    }
    get isCovariant() : boolean {
        return internalError("not supported.");
    }
    get isInitializingFormal() : boolean {
        return internalError("not supported.");
    }
    get parameterKind() {
        return internalError("not supported.");
    }
    get parameters() : core.DartList<any> {
        return internalError("not supported.");
    }
    get type() {
        return null;
    }
    get typeParameters() {
        return internalError("not supported.");
    }
    get constantValue() {
        return internalError("not supported.");
    }
    computeConstantValue() {
        return internalError("not supported.");
    }
    appendToWithoutDelimiters(buffer : core.DartStringBuffer) : void {
        return internalError("not supported.");
    }
    computeNode() : any {
        return internalError("not supported.");
    }
}

export class properties {
}
