/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/element/element.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as math from "@dart2ts/dart/math";

export var _assertNotResynthesized : (object : core.DartObject) => void = (object : core.DartObject) : void =>  {
};
export namespace ParameterElementMixin {
    export type Constructors = 'ParameterElementMixin';
    export type Interface = Omit<ParameterElementMixin, Constructors>;
}
@DartClass
@Implements(any)
export class ParameterElementMixin implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendToWithoutDelimiters(buffer : core.DartStringBuffer) : void {
        buffer.write(type);
        buffer.write(" ");
        buffer.write(displayName);
        if (defaultValueCode != null) {
            if (op(Op.EQUALS,parameterKind,ParameterKind.NAMED)) {
                buffer.write(": ");
            }
            if (op(Op.EQUALS,parameterKind,ParameterKind.POSITIONAL)) {
                buffer.write(" = ");
            }
            buffer.write(defaultValueCode);
        }
    }
    constructor() {
    }
    @defaultConstructor
    ParameterElementMixin() {
    }
}

export namespace AuxiliaryElements {
    export type Constructors = 'AuxiliaryElements';
    export type Interface = Omit<AuxiliaryElements, Constructors>;
}
@DartClass
export class AuxiliaryElements {
    propagatedElement : any;

    staticElement : any;

    constructor(staticElement : any,propagatedElement : any) {
    }
    @defaultConstructor
    AuxiliaryElements(staticElement : any,propagatedElement : any) {
        this.staticElement = staticElement;
        this.propagatedElement = propagatedElement;
    }
}

export namespace UnitExplicitTopLevelVariables {
    export type Constructors = 'UnitExplicitTopLevelVariables';
    export type Interface = Omit<UnitExplicitTopLevelVariables, Constructors>;
}
@DartClass
export class UnitExplicitTopLevelVariables {
    variables : core.DartList<TopLevelVariableElementImpl>;

    implicitAccessors : core.DartList<PropertyAccessorElementImpl>;

    constructor(numberOfVariables : number) {
    }
    @defaultConstructor
    UnitExplicitTopLevelVariables(numberOfVariables : number) {
        this.implicitAccessors = new core.DartList.literal<PropertyAccessorElementImpl>();
        this.variables = numberOfVariables != 0 ? new core.DartList<TopLevelVariableElementImpl>(numberOfVariables) : new core.DartList.literal<TopLevelVariableElementImpl>();
    }
}

export namespace UnitExplicitTopLevelAccessors {
    export type Constructors = 'UnitExplicitTopLevelAccessors';
    export type Interface = Omit<UnitExplicitTopLevelAccessors, Constructors>;
}
@DartClass
export class UnitExplicitTopLevelAccessors {
    accessors : core.DartList<PropertyAccessorElementImpl>;

    implicitVariables : core.DartList<TopLevelVariableElementImpl>;

    constructor() {
    }
    @defaultConstructor
    UnitExplicitTopLevelAccessors() {
        this.accessors = new core.DartList.literal<PropertyAccessorElementImpl>();
        this.implicitVariables = new core.DartList.literal<TopLevelVariableElementImpl>();
    }
}

export namespace TypeParameterizedElementMixin {
    export type Constructors = 'TypeParameterizedElementMixin';
    export type Interface = Omit<TypeParameterizedElementMixin, Constructors>;
}
@DartClass
@Implements(any,ElementImpl)
export class TypeParameterizedElementMixin implements any.Interface,ElementImpl.Interface {
    _nestingLevel : number;

    _typeParameterElements : core.DartList<any>;

    _typeParameterTypes : core.DartList<any>;

    _allTypeParameterTypes : core.DartList<any>;

    get allEnclosingTypeParameterTypes() : core.DartList<any> {
        return (((t)=>(!!t)?t.allTypeParameterTypes:null)(this.enclosingTypeParameterContext) || new core.DartList.literal<any>());
    }
    get allTypeParameterTypes() : core.DartList<any> {
        if (this._allTypeParameterTypes == null) {
            this._allTypeParameterTypes = new core.DartList.literal<any>();
            this._allTypeParameterTypes.addAll(this.typeParameterTypes);
            this._allTypeParameterTypes.addAll(this.allEnclosingTypeParameterTypes);
        }
        return this._allTypeParameterTypes;
    }
    @AbstractProperty
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin{ throw 'abstract'}
    @AbstractProperty
    get enclosingUnit() : CompilationUnitElementImpl{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameterContext() : TypeParameterizedElementMixin {
        return this;
    }
    get typeParameterNestingLevel() : number {
        return this._nestingLevel = ( this._nestingLevel ) || ( this.unlinkedTypeParams.length + ((((t)=>(!!t)?t.typeParameterNestingLevel:null)(this.enclosingTypeParameterContext) || 0)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        if (this._typeParameterElements == null) {
            let unlinkedParams : core.DartList<any> = this.unlinkedTypeParams;
            if (unlinkedParams != null) {
                let enclosingNestingLevel : number = (((t)=>(!!t)?t.typeParameterNestingLevel:null)(this.enclosingTypeParameterContext) || 0);
                let numTypeParameters : number = unlinkedParams.length;
                this._typeParameterElements = new core.DartList<any>(numTypeParameters);
                for(let i : number = 0; i < numTypeParameters; i++){
                    this._typeParameterElements[i] = new TypeParameterElementImpl.forSerialized(unlinkedParams[i],this,enclosingNestingLevel + i);
                }
            }
        }
        return (this._typeParameterElements || new core.DartList.literal<any>());
    }
    get typeParameterTypes() : core.DartList<any> {
        return this._typeParameterTypes = ( this._typeParameterTypes ) || ( this.typeParameters.map((e : any) =>  {
            return e.type;
        }).toList({
            growable : false}) );
    }
    @AbstractProperty
    get unlinkedTypeParams() : core.DartList<any>{ throw 'abstract'}
    getTypeParameterType(index : number) : any {
        let types : core.DartList<any> = this.typeParameterTypes;
        if (index <= types.length) {
            return types[types.length - index];
        }else if (this.enclosingTypeParameterContext != null) {
            return this.enclosingTypeParameterContext.getTypeParameterType(index - types.length);
        }else {
            throw new core.RangeError('Invalid type parameter index');
        }
    }
    isTypeParameterInScope(typeParameter : any) : boolean {
        if (op(Op.EQUALS,typeParameter.enclosingElement,this)) {
            return true;
        }else if (this.enclosingTypeParameterContext != null) {
            return this.enclosingTypeParameterContext.isTypeParameterInScope(typeParameter);
        }else {
            return false;
        }
    }
    constructor() {
    }
    @defaultConstructor
    TypeParameterizedElementMixin() {
    }
}

export namespace HideElementCombinatorImpl {
    export type Constructors = 'HideElementCombinatorImpl' | 'forSerialized';
    export type Interface = Omit<HideElementCombinatorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class HideElementCombinatorImpl implements any.Interface {
    _unlinkedCombinator : any;

    _hiddenNames : core.DartList<string>;

    constructor() {
    }
    @defaultConstructor
    HideElementCombinatorImpl() {
        this._unlinkedCombinator = null;
    }
    @namedConstructor
    forSerialized(_unlinkedCombinator : any) {
        this._unlinkedCombinator = _unlinkedCombinator;
    }
    static forSerialized : new(_unlinkedCombinator : any) => HideElementCombinatorImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hiddenNames() : core.DartList<string> {
        if (this._unlinkedCombinator != null) {
            this._hiddenNames = ( this._hiddenNames ) || ( this._unlinkedCombinator.hides.toList({
                growable : false}) );
        }
        return (this._hiddenNames || new core.DartList.literal<string>());
    }
    set hiddenNames(hiddenNames : core.DartList<string>) {
        _assertNotResynthesized(this._unlinkedCombinator);
        this._hiddenNames = hiddenNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("show ");
        let count : number = this.hiddenNames.length;
        for(let i : number = 0; i < count; i++){
            if (i > 0) {
                buffer.write(", ");
            }
            buffer.write(this.hiddenNames[i]);
        }
        return buffer.toString();
    }
}

export namespace ConstVariableElement {
    export type Constructors = 'ConstVariableElement';
    export type Interface = Omit<ConstVariableElement, Constructors>;
}
@DartClass
@Implements(ElementImpl,any)
export class ConstVariableElement implements ElementImpl.Interface,any.Interface {
    _constantInitializer : any;

    _evaluationResult : any;

    get constantInitializer() : any {
        if (op(Op.EQUALS,this._constantInitializer,null) && this._unlinkedConst != null) {
            this._constantInitializer = this.enclosingUnit.resynthesizerContext.buildExpression(this,this._unlinkedConst);
        }
        return this._constantInitializer;
    }
    set constantInitializer(constantInitializer : any) {
        _assertNotResynthesized(this._unlinkedConst);
        this._constantInitializer = constantInitializer;
    }
    get evaluationResult() : any {
        return this._evaluationResult;
    }
    set evaluationResult(evaluationResult : any) {
        this._evaluationResult = evaluationResult;
    }
    @AbstractProperty
    get _unlinkedConst() : any{ throw 'abstract'}
    computeConstantValue() : any {
        if (op(Op.EQUALS,this.evaluationResult,null)) {
            ((_241_)=>(!!_241_)?_241_.computeResult(this,CONSTANT_VALUE):null)(this.context);
        }
        return ((t)=>(!!t)?t.value:null)(this.evaluationResult);
    }
    constructor() {
    }
    @defaultConstructor
    ConstVariableElement() {
    }
}

export namespace ShowElementCombinatorImpl {
    export type Constructors = 'ShowElementCombinatorImpl' | 'forSerialized';
    export type Interface = Omit<ShowElementCombinatorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ShowElementCombinatorImpl implements any.Interface {
    _unlinkedCombinator : any;

    _shownNames : core.DartList<string>;

    _end : number;

    _offset : number;

    constructor() {
    }
    @defaultConstructor
    ShowElementCombinatorImpl() {
        this._end = -1;
        this._offset = 0;
        this._unlinkedCombinator = null;
    }
    @namedConstructor
    forSerialized(_unlinkedCombinator : any) {
        this._end = -1;
        this._offset = 0;
        this._unlinkedCombinator = _unlinkedCombinator;
    }
    static forSerialized : new(_unlinkedCombinator : any) => ShowElementCombinatorImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get end() : number {
        if (this._unlinkedCombinator != null) {
            return this._unlinkedCombinator.end;
        }
        return this._end;
    }
    set end(end : number) {
        _assertNotResynthesized(this._unlinkedCombinator);
        this._end = end;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        if (this._unlinkedCombinator != null) {
            return this._unlinkedCombinator.offset;
        }
        return this._offset;
    }
    set offset(offset : number) {
        _assertNotResynthesized(this._unlinkedCombinator);
        this._offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shownNames() : core.DartList<string> {
        if (this._unlinkedCombinator != null) {
            this._shownNames = ( this._shownNames ) || ( this._unlinkedCombinator.shows.toList({
                growable : false}) );
        }
        return (this._shownNames || new core.DartList.literal<string>());
    }
    set shownNames(shownNames : core.DartList<string>) {
        _assertNotResynthesized(this._unlinkedCombinator);
        this._shownNames = shownNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("show ");
        let count : number = this.shownNames.length;
        for(let i : number = 0; i < count; i++){
            if (i > 0) {
                buffer.write(", ");
            }
            buffer.write(this.shownNames[i]);
        }
        return buffer.toString();
    }
}

export namespace ElementAnnotationImpl {
    export type Constructors = 'ElementAnnotationImpl';
    export type Interface = Omit<ElementAnnotationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ElementAnnotationImpl implements any.Interface {
    private static __$_COVARIANT_VARIABLE_NAME : string;
    static get _COVARIANT_VARIABLE_NAME() : string { 
        if (this.__$_COVARIANT_VARIABLE_NAME===undefined) {
            this.__$_COVARIANT_VARIABLE_NAME = "checked";
        }
        return this.__$_COVARIANT_VARIABLE_NAME;
    }
    static set _COVARIANT_VARIABLE_NAME(__$value : string)  { 
        this.__$_COVARIANT_VARIABLE_NAME = __$value;
    }

    private static __$_DEPRECATED_CLASS_NAME : string;
    static get _DEPRECATED_CLASS_NAME() : string { 
        if (this.__$_DEPRECATED_CLASS_NAME===undefined) {
            this.__$_DEPRECATED_CLASS_NAME = "Deprecated";
        }
        return this.__$_DEPRECATED_CLASS_NAME;
    }
    static set _DEPRECATED_CLASS_NAME(__$value : string)  { 
        this.__$_DEPRECATED_CLASS_NAME = __$value;
    }

    private static __$_DEPRECATED_VARIABLE_NAME : string;
    static get _DEPRECATED_VARIABLE_NAME() : string { 
        if (this.__$_DEPRECATED_VARIABLE_NAME===undefined) {
            this.__$_DEPRECATED_VARIABLE_NAME = "deprecated";
        }
        return this.__$_DEPRECATED_VARIABLE_NAME;
    }
    static set _DEPRECATED_VARIABLE_NAME(__$value : string)  { 
        this.__$_DEPRECATED_VARIABLE_NAME = __$value;
    }

    private static __$_FACTORY_VARIABLE_NAME : string;
    static get _FACTORY_VARIABLE_NAME() : string { 
        if (this.__$_FACTORY_VARIABLE_NAME===undefined) {
            this.__$_FACTORY_VARIABLE_NAME = "factory";
        }
        return this.__$_FACTORY_VARIABLE_NAME;
    }
    static set _FACTORY_VARIABLE_NAME(__$value : string)  { 
        this.__$_FACTORY_VARIABLE_NAME = __$value;
    }

    private static __$_IMMUTABLE_VARIABLE_NAME : string;
    static get _IMMUTABLE_VARIABLE_NAME() : string { 
        if (this.__$_IMMUTABLE_VARIABLE_NAME===undefined) {
            this.__$_IMMUTABLE_VARIABLE_NAME = "immutable";
        }
        return this.__$_IMMUTABLE_VARIABLE_NAME;
    }
    static set _IMMUTABLE_VARIABLE_NAME(__$value : string)  { 
        this.__$_IMMUTABLE_VARIABLE_NAME = __$value;
    }

    private static __$_JS_CLASS_NAME : string;
    static get _JS_CLASS_NAME() : string { 
        if (this.__$_JS_CLASS_NAME===undefined) {
            this.__$_JS_CLASS_NAME = "JS";
        }
        return this.__$_JS_CLASS_NAME;
    }
    static set _JS_CLASS_NAME(__$value : string)  { 
        this.__$_JS_CLASS_NAME = __$value;
    }

    private static __$_JS_LIB_NAME : string;
    static get _JS_LIB_NAME() : string { 
        if (this.__$_JS_LIB_NAME===undefined) {
            this.__$_JS_LIB_NAME = "js";
        }
        return this.__$_JS_LIB_NAME;
    }
    static set _JS_LIB_NAME(__$value : string)  { 
        this.__$_JS_LIB_NAME = __$value;
    }

    private static __$_META_LIB_NAME : string;
    static get _META_LIB_NAME() : string { 
        if (this.__$_META_LIB_NAME===undefined) {
            this.__$_META_LIB_NAME = "meta";
        }
        return this.__$_META_LIB_NAME;
    }
    static set _META_LIB_NAME(__$value : string)  { 
        this.__$_META_LIB_NAME = __$value;
    }

    private static __$_MUST_CALL_SUPER_VARIABLE_NAME : string;
    static get _MUST_CALL_SUPER_VARIABLE_NAME() : string { 
        if (this.__$_MUST_CALL_SUPER_VARIABLE_NAME===undefined) {
            this.__$_MUST_CALL_SUPER_VARIABLE_NAME = "mustCallSuper";
        }
        return this.__$_MUST_CALL_SUPER_VARIABLE_NAME;
    }
    static set _MUST_CALL_SUPER_VARIABLE_NAME(__$value : string)  { 
        this.__$_MUST_CALL_SUPER_VARIABLE_NAME = __$value;
    }

    private static __$_OVERRIDE_VARIABLE_NAME : string;
    static get _OVERRIDE_VARIABLE_NAME() : string { 
        if (this.__$_OVERRIDE_VARIABLE_NAME===undefined) {
            this.__$_OVERRIDE_VARIABLE_NAME = "override";
        }
        return this.__$_OVERRIDE_VARIABLE_NAME;
    }
    static set _OVERRIDE_VARIABLE_NAME(__$value : string)  { 
        this.__$_OVERRIDE_VARIABLE_NAME = __$value;
    }

    private static __$_PROTECTED_VARIABLE_NAME : string;
    static get _PROTECTED_VARIABLE_NAME() : string { 
        if (this.__$_PROTECTED_VARIABLE_NAME===undefined) {
            this.__$_PROTECTED_VARIABLE_NAME = "protected";
        }
        return this.__$_PROTECTED_VARIABLE_NAME;
    }
    static set _PROTECTED_VARIABLE_NAME(__$value : string)  { 
        this.__$_PROTECTED_VARIABLE_NAME = __$value;
    }

    private static __$PROXY_VARIABLE_NAME : string;
    static get PROXY_VARIABLE_NAME() : string { 
        if (this.__$PROXY_VARIABLE_NAME===undefined) {
            this.__$PROXY_VARIABLE_NAME = "proxy";
        }
        return this.__$PROXY_VARIABLE_NAME;
    }
    static set PROXY_VARIABLE_NAME(__$value : string)  { 
        this.__$PROXY_VARIABLE_NAME = __$value;
    }

    private static __$_REQUIRED_CLASS_NAME : string;
    static get _REQUIRED_CLASS_NAME() : string { 
        if (this.__$_REQUIRED_CLASS_NAME===undefined) {
            this.__$_REQUIRED_CLASS_NAME = "Required";
        }
        return this.__$_REQUIRED_CLASS_NAME;
    }
    static set _REQUIRED_CLASS_NAME(__$value : string)  { 
        this.__$_REQUIRED_CLASS_NAME = __$value;
    }

    private static __$_REQUIRED_VARIABLE_NAME : string;
    static get _REQUIRED_VARIABLE_NAME() : string { 
        if (this.__$_REQUIRED_VARIABLE_NAME===undefined) {
            this.__$_REQUIRED_VARIABLE_NAME = "required";
        }
        return this.__$_REQUIRED_VARIABLE_NAME;
    }
    static set _REQUIRED_VARIABLE_NAME(__$value : string)  { 
        this.__$_REQUIRED_VARIABLE_NAME = __$value;
    }

    element : any;

    compilationUnit : CompilationUnitElementImpl;

    annotationAst : any;

    evaluationResult : any;

    constructor(compilationUnit : CompilationUnitElementImpl) {
    }
    @defaultConstructor
    ElementAnnotationImpl(compilationUnit : CompilationUnitElementImpl) {
        this.compilationUnit = compilationUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constantValue() : any {
        return ((t)=>(!!t)?t.value:null)(this.evaluationResult);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        return this.compilationUnit.library.context;
    }
    get isCovariant() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl._COVARIANT_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._META_LIB_NAME);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeprecated() : boolean {
        if (op(Op.EQUALS,((t)=>(!!t)?t.isDartCore:null)(((t)=>(!!t)?t.library:null)(this.element)),true)) {
            if (is(this.element, any)) {
                return op(Op.EQUALS,this.element.enclosingElement.name,ElementAnnotationImpl._DEPRECATED_CLASS_NAME);
            }else if (is(this.element, any)) {
                return op(Op.EQUALS,this.element.name,ElementAnnotationImpl._DEPRECATED_VARIABLE_NAME);
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl._FACTORY_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._META_LIB_NAME);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isImmutable() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl._IMMUTABLE_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._META_LIB_NAME);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isJS() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.enclosingElement.name,ElementAnnotationImpl._JS_CLASS_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._JS_LIB_NAME);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMustCallSuper() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl._MUST_CALL_SUPER_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._META_LIB_NAME);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOverride() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl._OVERRIDE_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.isDartCore:null)(this.element.library),true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProtected() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl._PROTECTED_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._META_LIB_NAME);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProxy() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl.PROXY_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.isDartCore:null)(this.element.library),true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRequired() : boolean {
        return is(this.element, any) && op(Op.EQUALS,this.element.enclosingElement.name,ElementAnnotationImpl._REQUIRED_CLASS_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._META_LIB_NAME) || is(this.element, any) && op(Op.EQUALS,this.element.name,ElementAnnotationImpl._REQUIRED_VARIABLE_NAME) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(this.element.library),ElementAnnotationImpl._META_LIB_NAME);
    }
    get librarySource() : any {
        return this.compilationUnit.librarySource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this.compilationUnit.source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeConstantValue() : any {
        if (op(Op.EQUALS,this.evaluationResult,null)) {
            ((_242_)=>(!!_242_)?_242_.computeResult(this,CONSTANT_VALUE):null)(this.context);
        }
        return this.constantValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toSource() : string {
        return this.annotationAst.toSource();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `@${this.element}`;
    }
}

export namespace ElementImpl {
    export type Constructors = 'ElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ElementImpl implements any.Interface {
    private static __$RIGHT_ARROW : string;
    static get RIGHT_ARROW() : string { 
        if (this.__$RIGHT_ARROW===undefined) {
            this.__$RIGHT_ARROW = " → ";
        }
        return this.__$RIGHT_ARROW;
    }
    static set RIGHT_ARROW(__$value : string)  { 
        this.__$RIGHT_ARROW = __$value;
    }

    private static __$_NEXT_ID : number;
    static get _NEXT_ID() : number { 
        if (this.__$_NEXT_ID===undefined) {
            this.__$_NEXT_ID = 0;
        }
        return this.__$_NEXT_ID;
    }
    static set _NEXT_ID(__$value : number)  { 
        this.__$_NEXT_ID = __$value;
    }

    id : number;

    _enclosingElement : ElementImpl;

    _name : string;

    _nameOffset : number;

    _modifiers : number;

    _metadata : core.DartList<any>;

    _cachedHashCode : number;

    _cachedLocation : any;

    _docComment : string;

    _codeOffset : number;

    _codeLength : number;

    constructor(name : string,_nameOffset : number) {
    }
    @defaultConstructor
    ElementImpl(name : string,_nameOffset : number) {
        this.id = ElementImpl._NEXT_ID++;
        this._nameOffset = 0;
        this._modifiers = 0;
        this._nameOffset = _nameOffset;
        this._name = StringUtilities.intern(name);
    }
    @namedConstructor
    forNode(name : any) {
        this.id = ElementImpl._NEXT_ID++;
        this._nameOffset = 0;
        this._modifiers = 0;
        this.ElementImpl(op(Op.EQUALS,name,null) ? "" : name.name,op(Op.EQUALS,name,null) ? -1 : name.offset);
    }
    static forNode : new(name : any) => ElementImpl;

    @namedConstructor
    forSerialized(_enclosingElement : ElementImpl) {
        this.id = ElementImpl._NEXT_ID++;
        this._nameOffset = 0;
        this._modifiers = 0;
        this._enclosingElement = _enclosingElement;
    }
    static forSerialized : new(_enclosingElement : ElementImpl) => ElementImpl;

    get codeLength() : number {
        return this._codeLength;
    }
    get codeOffset() : number {
        return this._codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        if (op(Op.EQUALS,this._enclosingElement,null)) {
            return null;
        }
        return this._enclosingElement.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        return this._docComment;
    }
    set documentationComment(doc : string) {
        /* TODO (AssertStatementImpl) : assert (!isResynthesized); */;
        this._docComment = ((_243_)=>(!!_243_)?new core.DartString(_243_).replaceAll('\n','\n'):null)(doc);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this._enclosingElement;
    }
    set enclosingElement(element : any) {
        this._enclosingElement = element as ElementImpl;
    }
    get enclosingUnit() : CompilationUnitElementImpl {
        return ((t)=>(!!t)?t.enclosingUnit:null)(this._enclosingElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        if (this._cachedHashCode == null) {
            this._cachedHashCode = this.location.hashCode;
        }
        return this._cachedHashCode;
    }
    get identifier() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeprecated() : boolean {
        for(let annotation of this.metadata) {
            if (annotation.isDeprecated) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        for(let annotation of this.metadata) {
            if (annotation.isFactory) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isJS() : boolean {
        for(let annotation of this.metadata) {
            if (annotation.isJS) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOverride() : boolean {
        for(let annotation of this.metadata) {
            if (annotation.isOverride) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPrivate() : boolean {
        let name : string = this.displayName;
        if (name == null) {
            return true;
        }
        return Identifier.isPrivateName(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProtected() : boolean {
        for(let annotation of this.metadata) {
            if (annotation.isProtected) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPublic() : boolean {
        return !this.isPrivate;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRequired() : boolean {
        for(let annotation of this.metadata) {
            if (annotation.isRequired) {
                return true;
            }
        }
        return false;
    }
    get isResynthesized() : boolean {
        return ((t)=>(!!t)?t.resynthesizerContext:null)(this.enclosingUnit) != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this.hasModifier(Modifier.SYNTHETIC);
    }
    set isSynthetic(isSynthetic : boolean) {
        this.setModifier(Modifier.SYNTHETIC,isSynthetic);
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
        return ((t)=>(!!t)?t.source:null)(this.library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        if (op(Op.EQUALS,this._cachedLocation,null)) {
            if (op(Op.EQUALS,this.library,null)) {
                return new ElementLocationImpl.con1(this);
            }
            this._cachedLocation = new ElementLocationImpl.con1(this);
        }
        return this._cachedLocation;
    }
    get metadata() : core.DartList<any> {
        return (this._metadata || new core.DartList.literal<any>());
    }
    set metadata(metadata : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (!isResynthesized); */;
        this._metadata = metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name;
    }
    set name(name : string) {
        this._name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameLength() : number {
        return this.displayName != null ? new core.DartString(this.displayName).length : 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return this._nameOffset;
    }
    set nameOffset(offset : number) {
        this._nameOffset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        if (op(Op.EQUALS,this._enclosingElement,null)) {
            return null;
        }
        return this._enclosingElement.source;
    }
    get typeParameterContext() : TypeParameterizedElementMixin {
        return ((t)=>(!!t)?t.typeParameterContext:null)(this._enclosingElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : any {
        return this.context.resolveCompilationUnit(this.source,this.library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (core.identical(this,object)) {
            return true;
        }
        return is(object, any) && op(Op.EQUALS,object.kind,kind) && op(Op.EQUALS,object.location,this.location);
    }
    appendPathTo(buffer : core.DartStringBuffer) : void {
        let element : any = this;
        while (element != null){
            if (element != this) {
                buffer.write(', ');
            }
            buffer.write(element.runtimeType);
            let name : string = element.name;
            if (name != null) {
                buffer.write(' (');
                buffer.write(name);
                buffer.write(')');
            }
            element = element.enclosingElement;
        }
    }
    appendTo(buffer : core.DartStringBuffer) : void {
        if (this._name == null) {
            buffer.write("<unnamed ");
            buffer.write(this.runtimeType.toString());
            buffer.write(">");
        }else {
            buffer.write(this._name);
        }
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
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
    encloseElement(element : ElementImpl) : void {
        element.enclosingElement = this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAncestor(predicate : any) : any {
        let ancestor : any = this._enclosingElement;
        while (ancestor != null && !predicate(ancestor)){
            ancestor = ancestor.enclosingElement;
        }
        return ancestor as any;
    }
    getChild(identifier : string) : ElementImpl {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getExtendedDisplayName(shortName : string) : string {
        if (shortName == null) {
            shortName = this.displayName;
        }
        let source : any = this.source;
        if (source != null) {
            return `${shortName} (${source.fullName})`;
        }
        return shortName;
    }
    getNodeMatching(predicate : any) : any {
        let unit : any = this.unit;
        if (op(Op.EQUALS,unit,null)) {
            return null;
        }
        let offset : number = this.nameOffset;
        let node : any = new bare.createInstance(any,null,offset).searchWithin(unit);
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        return node.getAncestor(predicate);
    }
    hasModifier(modifier : Modifier) : boolean {
        return BooleanArray.get(this._modifiers,modifier.ordinal);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAccessibleIn(library : any) : boolean {
        if (Identifier.isPrivateName(this.name)) {
            return op(Op.EQUALS,library,this.library);
        }
        return true;
    }
    safelyVisitChildren(children : core.DartList<any>,visitor : any) : void {
        if (children != null) {
            for(let child of children) {
                child.accept(visitor);
            }
        }
    }
    setCodeRange(offset : number,length : number) : void {
        /* TODO (AssertStatementImpl) : assert (!isResynthesized); */;
        this._codeOffset = offset;
        this._codeLength = length;
    }
    setModifier(modifier : Modifier,value : boolean) : void {
        this._modifiers = BooleanArray.set(this._modifiers,modifier.ordinal,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        this.appendTo(buffer);
        return buffer.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
    _buildAnnotations(unit : CompilationUnitElementImpl,unlinkedConsts : core.DartList<any>) : core.DartList<any> {
        let length : number = unlinkedConsts.length;
        if (length != 0) {
            let annotations : core.DartList<any> = new core.DartList<any>(length);
            let context : ResynthesizerContext = unit.resynthesizerContext;
            for(let i : number = 0; i < length; i++){
                annotations[i] = context.buildAnnotation(this,unlinkedConsts[i]);
            }
            return annotations;
        }else {
            return new core.DartList.literal<any>();
        }
    }
    _checkElementOfType(type : any) : any {
        let element : any = ((t)=>(!!t)?t.element:null)(type);
        if (is(element, GenericFunctionTypeElementImpl) && op(Op.EQUALS,element.enclosingElement,null)) {
            element.enclosingElement = this;
        }
        return type;
    }
    _safelyVisitPossibleChild(type : any,visitor : any) : void {
        let element : any = ((t)=>(!!t)?t.element:null)(type);
        if (is(element, GenericFunctionTypeElementImpl)) {
            element.accept(visitor);
        }
    }
    static findElementIndexUsingIdentical(items : core.DartList<any>,item : core.DartObject) : number {
        let length : number = items.length;
        for(let i : number = 0; i < length; i++){
            if (core.identical(items[i],item)) {
                return i;
            }
        }
        throw new core.StateError(`Unable to find ${item} in ${items}`);
    }
}

export namespace ElementLocationImpl {
    export type Constructors = 'con1' | 'con2' | 'con3';
    export type Interface = Omit<ElementLocationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ElementLocationImpl implements any.Interface {
    private static __$_SEPARATOR_CHAR : number;
    static get _SEPARATOR_CHAR() : number { 
        if (this.__$_SEPARATOR_CHAR===undefined) {
            this.__$_SEPARATOR_CHAR = 59;
        }
        return this.__$_SEPARATOR_CHAR;
    }
    static set _SEPARATOR_CHAR(__$value : number)  { 
        this.__$_SEPARATOR_CHAR = __$value;
    }

    _components : core.DartList<string>;

    indexOwner : core.DartObject;

    indexKeyId : number;

    indexLocationId : number;

    @namedConstructor
    con1(element : any) {
        let components : core.DartList<string> = new core.DartList<string>();
        let ancestor : any = element;
        while (ancestor != null){
            components.insert(0,(ancestor as ElementImpl).identifier);
            ancestor = ancestor.enclosingElement;
        }
        this._components = components;
    }
    static con1 : new(element : any) => ElementLocationImpl;

    @namedConstructor
    con2(encoding : string) {
        this._components = this._decode(encoding);
    }
    static con2 : new(encoding : string) => ElementLocationImpl;

    @namedConstructor
    con3(components : core.DartList<string>) {
        this._components = components;
    }
    static con3 : new(components : core.DartList<string>) => ElementLocationImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get components() : core.DartList<string> {
        return this._components;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get encoding() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let length : number = this._components.length;
        for(let i : number = 0; i < length; i++){
            if (i > 0) {
                buffer.writeCharCode(ElementLocationImpl._SEPARATOR_CHAR);
            }
            this._encode(buffer,this._components[i]);
        }
        return buffer.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let result : number = 0;
        for(let i : number = 0; i < this._components.length; i++){
            let component : string = this._components[i];
            result = JenkinsSmiHash.combine(result,new core.DartString(component).hashCode);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (core.identical(this,object)) {
            return true;
        }
        if (is(object, ElementLocationImpl)) {
            let otherComponents : core.DartList<string> = object._components;
            let length : number = this._components.length;
            if (otherComponents.length != length) {
                return false;
            }
            for(let i : number = 0; i < length; i++){
                if (this._components[i] != otherComponents[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.encoding;
    }
    _decode(encoding : string) : core.DartList<string> {
        let components : core.DartList<string> = new core.DartList<string>();
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let index : number = 0;
        let length : number = new core.DartString(encoding).length;
        while (index < length){
            let currentChar : number = new core.DartString(encoding).codeUnitAt(index);
            if (currentChar == ElementLocationImpl._SEPARATOR_CHAR) {
                if (index + 1 < length && new core.DartString(encoding).codeUnitAt(index + 1) == ElementLocationImpl._SEPARATOR_CHAR) {
                    buffer.writeCharCode(ElementLocationImpl._SEPARATOR_CHAR);
                    index += 2;
                }else {
                    components.add(buffer.toString());
                    buffer = new core.DartStringBuffer();
                    index++;
                }
            }else {
                buffer.writeCharCode(currentChar);
                index++;
            }
        }
        components.add(buffer.toString());
        return components;
    }
    _encode(buffer : core.DartStringBuffer,component : string) : void {
        let length : number = new core.DartString(component).length;
        for(let i : number = 0; i < length; i++){
            let currentChar : number = new core.DartString(component).codeUnitAt(i);
            if (currentChar == ElementLocationImpl._SEPARATOR_CHAR) {
                buffer.writeCharCode(ElementLocationImpl._SEPARATOR_CHAR);
            }
            buffer.writeCharCode(currentChar);
        }
    }
}

export namespace ResynthesizerContext {
    export type Constructors = 'ResynthesizerContext';
    export type Interface = Omit<ResynthesizerContext, Constructors>;
}
@DartClass
export class ResynthesizerContext {
    @AbstractProperty
    get isStrongMode() : boolean{ throw 'abstract'}
    @Abstract
    buildAnnotation(context : ElementImpl,uc : any) : ElementAnnotationImpl{ throw 'abstract'}
    @Abstract
    buildExpression(context : ElementImpl,uc : any) : any{ throw 'abstract'}
    @Abstract
    buildTopLevelAccessors() : UnitExplicitTopLevelAccessors{ throw 'abstract'}
    @Abstract
    buildTopLevelVariables() : UnitExplicitTopLevelVariables{ throw 'abstract'}
    @Abstract
    getTypeInferenceError(slot : number) : any{ throw 'abstract'}
    @Abstract
    inheritsCovariant(slot : number) : boolean{ throw 'abstract'}
    @Abstract
    isInConstCycle(slot : number) : boolean{ throw 'abstract'}
    @Abstract
    resolveConstructorRef(context : ElementImpl,entry : any) : any{ throw 'abstract'}
    @Abstract
    resolveLinkedType(context : ElementImpl,slot : number) : any{ throw 'abstract'}
    @Abstract
    resolveTypeRef(context : ElementImpl,type : any,_namedArguments? : {defaultVoid? : boolean,instantiateToBoundsAllowed? : boolean,declaredType? : boolean}) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ResynthesizerContext() {
    }
}

export enum LibraryResolutionCapability {
    resolvedTypeNames,
    constantExpressions
}

export namespace LibraryResynthesizerContext {
    export type Constructors = 'LibraryResynthesizerContext';
    export type Interface = Omit<LibraryResynthesizerContext, Constructors>;
}
@DartClass
export class LibraryResynthesizerContext {
    @AbstractProperty
    get linkedLibrary() : any{ throw 'abstract'}
    @Abstract
    buildExportedLibrary(relativeUri : string) : any{ throw 'abstract'}
    @Abstract
    buildExportNamespace() : any{ throw 'abstract'}
    @Abstract
    buildImportedLibrary(dependency : number) : any{ throw 'abstract'}
    @Abstract
    buildPublicNamespace() : any{ throw 'abstract'}
    @Abstract
    findEntryPoint() : any{ throw 'abstract'}
    @Abstract
    patchTopLevelAccessors() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LibraryResynthesizerContext() {
    }
}

export namespace Modifier {
    export type Constructors = 'Modifier';
    export type Interface = Omit<Modifier, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class Modifier implements core.DartComparable.Interface<Modifier> {
    private static __$ABSTRACT : Modifier;
    static get ABSTRACT() : Modifier { 
        if (this.__$ABSTRACT===undefined) {
            this.__$ABSTRACT = new Modifier('ABSTRACT',0);
        }
        return this.__$ABSTRACT;
    }

    private static __$ASYNCHRONOUS : Modifier;
    static get ASYNCHRONOUS() : Modifier { 
        if (this.__$ASYNCHRONOUS===undefined) {
            this.__$ASYNCHRONOUS = new Modifier('ASYNCHRONOUS',1);
        }
        return this.__$ASYNCHRONOUS;
    }

    private static __$CONST : Modifier;
    static get CONST() : Modifier { 
        if (this.__$CONST===undefined) {
            this.__$CONST = new Modifier('CONST',2);
        }
        return this.__$CONST;
    }

    private static __$COVARIANT : Modifier;
    static get COVARIANT() : Modifier { 
        if (this.__$COVARIANT===undefined) {
            this.__$COVARIANT = new Modifier('COVARIANT',3);
        }
        return this.__$COVARIANT;
    }

    private static __$DEFERRED : Modifier;
    static get DEFERRED() : Modifier { 
        if (this.__$DEFERRED===undefined) {
            this.__$DEFERRED = new Modifier('DEFERRED',4);
        }
        return this.__$DEFERRED;
    }

    private static __$ENUM : Modifier;
    static get ENUM() : Modifier { 
        if (this.__$ENUM===undefined) {
            this.__$ENUM = new Modifier('ENUM',5);
        }
        return this.__$ENUM;
    }

    private static __$EXTERNAL : Modifier;
    static get EXTERNAL() : Modifier { 
        if (this.__$EXTERNAL===undefined) {
            this.__$EXTERNAL = new Modifier('EXTERNAL',6);
        }
        return this.__$EXTERNAL;
    }

    private static __$FACTORY : Modifier;
    static get FACTORY() : Modifier { 
        if (this.__$FACTORY===undefined) {
            this.__$FACTORY = new Modifier('FACTORY',7);
        }
        return this.__$FACTORY;
    }

    private static __$FINAL : Modifier;
    static get FINAL() : Modifier { 
        if (this.__$FINAL===undefined) {
            this.__$FINAL = new Modifier('FINAL',8);
        }
        return this.__$FINAL;
    }

    private static __$GENERATOR : Modifier;
    static get GENERATOR() : Modifier { 
        if (this.__$GENERATOR===undefined) {
            this.__$GENERATOR = new Modifier('GENERATOR',9);
        }
        return this.__$GENERATOR;
    }

    private static __$GETTER : Modifier;
    static get GETTER() : Modifier { 
        if (this.__$GETTER===undefined) {
            this.__$GETTER = new Modifier('GETTER',10);
        }
        return this.__$GETTER;
    }

    private static __$HAS_EXT_URI : Modifier;
    static get HAS_EXT_URI() : Modifier { 
        if (this.__$HAS_EXT_URI===undefined) {
            this.__$HAS_EXT_URI = new Modifier('HAS_EXT_URI',11);
        }
        return this.__$HAS_EXT_URI;
    }

    private static __$IMPLICIT_TYPE : Modifier;
    static get IMPLICIT_TYPE() : Modifier { 
        if (this.__$IMPLICIT_TYPE===undefined) {
            this.__$IMPLICIT_TYPE = new Modifier('IMPLICIT_TYPE',12);
        }
        return this.__$IMPLICIT_TYPE;
    }

    private static __$MIXIN_APPLICATION : Modifier;
    static get MIXIN_APPLICATION() : Modifier { 
        if (this.__$MIXIN_APPLICATION===undefined) {
            this.__$MIXIN_APPLICATION = new Modifier('MIXIN_APPLICATION',13);
        }
        return this.__$MIXIN_APPLICATION;
    }

    private static __$REFERENCES_SUPER : Modifier;
    static get REFERENCES_SUPER() : Modifier { 
        if (this.__$REFERENCES_SUPER===undefined) {
            this.__$REFERENCES_SUPER = new Modifier('REFERENCES_SUPER',14);
        }
        return this.__$REFERENCES_SUPER;
    }

    private static __$SETTER : Modifier;
    static get SETTER() : Modifier { 
        if (this.__$SETTER===undefined) {
            this.__$SETTER = new Modifier('SETTER',15);
        }
        return this.__$SETTER;
    }

    private static __$STATIC : Modifier;
    static get STATIC() : Modifier { 
        if (this.__$STATIC===undefined) {
            this.__$STATIC = new Modifier('STATIC',16);
        }
        return this.__$STATIC;
    }

    private static __$SYNTHETIC : Modifier;
    static get SYNTHETIC() : Modifier { 
        if (this.__$SYNTHETIC===undefined) {
            this.__$SYNTHETIC = new Modifier('SYNTHETIC',17);
        }
        return this.__$SYNTHETIC;
    }

    private static __$values : core.DartList<Modifier>;
    static get values() : core.DartList<Modifier> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(Modifier.ABSTRACT,Modifier.ASYNCHRONOUS,Modifier.CONST,Modifier.COVARIANT,Modifier.DEFERRED,Modifier.ENUM,Modifier.EXTERNAL,Modifier.FACTORY,Modifier.FINAL,Modifier.GENERATOR,Modifier.GETTER,Modifier.HAS_EXT_URI,Modifier.IMPLICIT_TYPE,Modifier.MIXIN_APPLICATION,Modifier.REFERENCES_SUPER,Modifier.SETTER,Modifier.STATIC,Modifier.SYNTHETIC);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    Modifier(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : Modifier) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace MultiplyDefinedElementImpl {
    export type Constructors = 'MultiplyDefinedElementImpl';
    export type Interface = Omit<MultiplyDefinedElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MultiplyDefinedElementImpl implements any.Interface {
    id : number;

    context : any;

    _name : string;

    sdkElements : core.DartList<any>;

    nonSdkElements : core.DartList<any>;

    constructor(context : any,sdkElements : core.DartList<any>,nonSdkElements : core.DartList<any>) {
    }
    @defaultConstructor
    MultiplyDefinedElementImpl(context : any,sdkElements : core.DartList<any>,nonSdkElements : core.DartList<any>) {
        this.id = ElementImpl._NEXT_ID++;
        this.context = context;
        this.sdkElements = sdkElements;
        this.nonSdkElements = nonSdkElements;
        if (this.nonSdkElements.length > 0) {
            this._name = this.nonSdkElements[0].name;
        }else {
            this._name = this.sdkElements[0].name;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get conflictingElements() : core.DartList<any> {
        if (this.sdkElements.isEmpty) {
            return this.nonSdkElements;
        }else if (this.nonSdkElements.isEmpty) {
            return this.sdkElements;
        }
        let elements : core.DartList<any> = this.nonSdkElements.toList();
        elements.addAll(this.sdkElements);
        return elements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeprecated() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isJS() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOverride() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPrivate() : boolean {
        let name : string = this.displayName;
        if (name == null) {
            return false;
        }
        return Identifier.isPrivateName(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProtected() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPublic() : boolean {
        return !this.isPrivate;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRequired() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.ERROR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySource() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameLength() : number {
        return this.displayName != null ? new core.DartString(this.displayName).length : 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        return -1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unit() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitMultiplyDefinedElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDocumentationComment() : string {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAncestor(predicate : any) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getExtendedDisplayName(shortName : string) : string {
        if (shortName != null) {
            return shortName;
        }
        return this.displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAccessibleIn(library : any) : boolean {
        for(let element of this.conflictingElements) {
            if (element.isAccessibleIn(library)) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let needsSeparator : boolean = false;
        var writeList : (elements : core.DartList<any>) => void = (elements : core.DartList<any>) : void =>  {
            for(let element of elements) {
                if (needsSeparator) {
                    buffer.write(", ");
                }else {
                    needsSeparator = true;
                }
                if (is(element, ElementImpl)) {
                    element.appendTo(buffer);
                }else {
                    buffer.write(element);
                }
            }
        };
        buffer.write("[");
        writeList(this.nonSdkElements);
        writeList(this.sdkElements);
        buffer.write("]");
        return buffer.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
    static fromElements(context : any,firstElement : any,secondElement : any) : any {
        let sdkElements : core.DartSet<any> = new core.DartHashSet.identity();
        let nonSdkElements : core.DartSet<any> = new core.DartHashSet.identity();
        var add : (element : any) => void = (element : any) : void =>  {
            if (element != null) {
                if (is(element, MultiplyDefinedElementImpl)) {
                    sdkElements.addAll(element.sdkElements);
                    nonSdkElements.addAll(element.nonSdkElements);
                }else if (element.library.isInSdk) {
                    sdkElements.add(element);
                }else {
                    nonSdkElements.add(element);
                }
            }
        };
        add(firstElement);
        add(secondElement);
        let nonSdkCount : number = nonSdkElements.length;
        if (nonSdkCount == 0) {
            let sdkCount : number = sdkElements.length;
            if (sdkCount == 0) {
                return null;
            }else if (sdkCount == 1) {
                return sdkElements.first;
            }
        }else if (nonSdkCount == 1) {
            return nonSdkElements.first;
        }
        return new MultiplyDefinedElementImpl(context,sdkElements.toList({
            growable : false}),nonSdkElements.toList({
            growable : false}));
    }
}

export namespace _BuildOffsetToElementMap {
    export type Constructors = '_BuildOffsetToElementMap';
    export type Interface = Omit<_BuildOffsetToElementMap, Constructors>;
}
@DartClass
export class _BuildOffsetToElementMap extends any {
    map : core.DartMap<number,any>;

    constructor(map : core.DartMap<number,any>) {
    }
    @defaultConstructor
    _BuildOffsetToElementMap(map : core.DartMap<number,any>) {
        this.map = map;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) : void {
        let offset : number = element.nameOffset;
        if (offset != -1) {
            this.map.set(offset,element);
        }
        super.visitElement(element);
    }
}

export namespace ExecutableElementImpl {
    export type Constructors = ElementImpl.Constructors | 'ExecutableElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ExecutableElementImpl, Constructors>;
}
@DartClass
@Implements(any)
@With(TypeParameterizedElementMixin)
export class ExecutableElementImpl extends ElementImpl implements any.Interface,TypeParameterizedElementMixin.Interface {
    @Abstract
    getTypeParameterType(index : number) : any {
        throw 'from mixin';
    }
    @Abstract
    isTypeParameterInScope(typeParameter : any) : boolean {
        throw 'from mixin';
    }
    serializedExecutable : any;

    _functions : core.DartList<any>;

    _labels : core.DartList<any>;

    _localVariables : core.DartList<any>;

    _parameters : core.DartList<any>;

    _declaredReturnType : any;

    _returnType : any;

    _type : any;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExecutableElementImpl(name : string,offset : number) {
        this.serializedExecutable = null;
        super.ElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this.serializedExecutable = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => ExecutableElementImpl;

    @namedConstructor
    forSerialized(serializedExecutable : any,enclosingElement : ElementImpl) {
        super.forSerialized(enclosingElement);
        this.serializedExecutable = serializedExecutable;
    }
    static forSerialized : new(serializedExecutable : any,enclosingElement : ElementImpl) => ExecutableElementImpl;

    set asynchronous(isAsynchronous : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.ASYNCHRONOUS,isAsynchronous);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this.serializedExecutable != null) {
            return ((t)=>(!!t)?t.length:null)(this.serializedExecutable.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this.serializedExecutable != null) {
            return ((t)=>(!!t)?t.offset:null)(this.serializedExecutable.codeRange);
        }
        return super.codeOffset;
    }
    set declaredReturnType(returnType : any) {
        _assertNotResynthesized(this.serializedExecutable);
        this._declaredReturnType = this._checkElementOfType(returnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.name;
        }
        return super.displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this.serializedExecutable != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.documentationComment:null)(this.serializedExecutable));
        }
        return super.documentationComment;
    }
    set external(isExternal : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.EXTERNAL,isExternal);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<any> {
        if (this.serializedExecutable != null) {
            this._functions = ( this._functions ) || ( FunctionElementImpl.resynthesizeList(this,this.serializedExecutable.localFunctions) );
        }
        return (this._functions || new core.DartList.literal<any>());
    }
    set functions(functions : core.DartList<any>) {
        _assertNotResynthesized(this.serializedExecutable);
        for(let function of functions) {
            (function as FunctionElementImpl).enclosingElement = this;
        }
        this._functions = functions;
    }
    set generator(isGenerator : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.GENERATOR,isGenerator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitReturnType() : boolean {
        if (this.serializedExecutable != null) {
            return op(Op.EQUALS,this.serializedExecutable.returnType,null) && this.serializedExecutable.kind != UnlinkedExecutableKind.constructor;
        }
        return this.hasModifier(Modifier.IMPLICIT_TYPE);
    }
    set hasImplicitReturnType(hasImplicitReturnType : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.IMPLICIT_TYPE,hasImplicitReturnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isAbstract;
        }
        return this.hasModifier(Modifier.ABSTRACT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isAsynchronous;
        }
        return this.hasModifier(Modifier.ASYNCHRONOUS);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExternal() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isExternal;
        }
        return this.hasModifier(Modifier.EXTERNAL);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGenerator() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isGenerator;
        }
        return this.hasModifier(Modifier.GENERATOR);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOperator() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynchronous() : boolean {
        return !this.isAsynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get labels() : core.DartList<any> {
        if (this.serializedExecutable != null) {
            this._labels = ( this._labels ) || ( LabelElementImpl.resynthesizeList(this,this.serializedExecutable.localLabels) );
        }
        return (this._labels || new core.DartList.literal<any>());
    }
    set labels(labels : core.DartList<any>) {
        _assertNotResynthesized(this.serializedExecutable);
        for(let label of labels) {
            (label as LabelElementImpl).enclosingElement = this;
        }
        this._labels = labels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get localVariables() : core.DartList<any> {
        if (this.serializedExecutable != null && this._localVariables == null) {
            let unlinkedVariables : core.DartList<any> = this.serializedExecutable.localVariables;
            let length : number = unlinkedVariables.length;
            if (length != 0) {
                let localVariables : core.DartList<LocalVariableElementImpl> = new core.DartList<LocalVariableElementImpl>(length);
                for(let i : number = 0; i < length; i++){
                    localVariables[i] = new LocalVariableElementImpl.forSerializedFactory(unlinkedVariables[i],this);
                }
                this._localVariables = localVariables;
            }else {
                this._localVariables = new core.DartList.literal<any>();
            }
        }
        return (this._localVariables || new core.DartList.literal<any>());
    }
    set localVariables(variables : core.DartList<any>) {
        _assertNotResynthesized(this.serializedExecutable);
        for(let variable of variables) {
            (variable as LocalVariableElementImpl).enclosingElement = this;
        }
        this._localVariables = variables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        if (this.serializedExecutable != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(enclosingUnit,this.serializedExecutable.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this.serializedExecutable != null) {
            return this.serializedExecutable.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        if (this.serializedExecutable != null) {
            this._parameters = ( this._parameters ) || ( ParameterElementImpl.resynthesizeList(this.serializedExecutable.parameters,this) );
        }
        return (this._parameters || new core.DartList.literal<any>());
    }
    set parameters(parameters : core.DartList<any>) {
        _assertNotResynthesized(this.serializedExecutable);
        for(let parameter of parameters) {
            (parameter as ParameterElementImpl).enclosingElement = this;
        }
        this._parameters = parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        if (this.serializedExecutable != null && op(Op.EQUALS,this._declaredReturnType,null) && op(Op.EQUALS,this._returnType,null)) {
            let isSetter : boolean = op(Op.EQUALS,this.serializedExecutable.kind,UnlinkedExecutableKind.setter);
            this._returnType = enclosingUnit.resynthesizerContext.resolveLinkedType(this,this.serializedExecutable.inferredReturnTypeSlot);
            this._declaredReturnType = enclosingUnit.resynthesizerContext.resolveTypeRef(this,this.serializedExecutable.returnType,{
                defaultVoid : isSetter && this.context.analysisOptions.strongMode,declaredType : true});
        }
        return (this._returnType || this._declaredReturnType);
    }
    set returnType(returnType : any) {
        _assertNotResynthesized(this.serializedExecutable);
        this._returnType = this._checkElementOfType(returnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this.serializedExecutable != null) {
            this._type = ( this._type ) || ( new bare.createInstance(any,null,this,null,this.allEnclosingTypeParameterTypes,false) );
        }
        return this._type;
    }
    set type(type : any) {
        _assertNotResynthesized(this.serializedExecutable);
        this._type = type;
    }
    set typeParameters(typeParameters : core.DartList<any>) {
        _assertNotResynthesized(this.serializedExecutable);
        for(let parameter of typeParameters) {
            (parameter as TypeParameterElementImpl).enclosingElement = this;
        }
        this._typeParameterElements = typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return ((t)=>(!!t)?t.typeParameters:null)(this.serializedExecutable);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        if (this.kind != ElementKind.GETTER) {
            let typeParameterCount : number = typeParameters.length;
            if (typeParameterCount > 0) {
                buffer.write('<');
                for(let i : number = 0; i < typeParameterCount; i++){
                    if (i > 0) {
                        buffer.write(", ");
                    }
                    (typeParameters[i] as TypeParameterElementImpl).appendTo(buffer);
                }
                buffer.write('>');
            }
            buffer.write("(");
            let closing : string = null;
            let kind : any = ParameterKind.REQUIRED;
            let parameterCount : number = this.parameters.length;
            for(let i : number = 0; i < parameterCount; i++){
                if (i > 0) {
                    buffer.write(", ");
                }
                let parameter : any = this.parameters[i];
                let parameterKind : any = parameter.parameterKind;
                if (parameterKind != kind) {
                    if (closing != null) {
                        buffer.write(closing);
                    }
                    if (op(Op.EQUALS,parameterKind,ParameterKind.POSITIONAL)) {
                        buffer.write("[");
                        closing = "]";
                    }else if (op(Op.EQUALS,parameterKind,ParameterKind.NAMED)) {
                        buffer.write("{");
                        closing = "}";
                    }else {
                        closing = null;
                    }
                }
                kind = parameterKind;
                parameter.appendToWithoutDelimiters(buffer);
            }
            if (closing != null) {
                buffer.write(closing);
            }
            buffer.write(")");
        }
        if (this.type != null) {
            buffer.write(ElementImpl.RIGHT_ARROW);
            buffer.write(this.type.returnType);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        for(let function of this._functions) {
            let functionImpl : FunctionElementImpl = function;
            if (functionImpl.identifier == identifier) {
                return functionImpl;
            }
        }
        for(let label of this._labels) {
            let labelImpl : LabelElementImpl = label;
            if (labelImpl.identifier == identifier) {
                return labelImpl;
            }
        }
        for(let variable of this._localVariables) {
            let variableImpl : LocalVariableElementImpl = variable;
            if (variableImpl.identifier == identifier) {
                return variableImpl;
            }
        }
        for(let parameter of this.parameters) {
            let parameterImpl : ParameterElementImpl = parameter;
            if (parameterImpl.identifier == identifier) {
                return parameterImpl;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this._safelyVisitPossibleChild(this.returnType,visitor);
        this.safelyVisitChildren(typeParameters,visitor);
        this.safelyVisitChildren(this.parameters,visitor);
        this.safelyVisitChildren(this.functions,visitor);
        this.safelyVisitChildren(this.labels,visitor);
        this.safelyVisitChildren(this.localVariables,visitor);
    }
}

export namespace TypeParameterElementImpl {
    export type Constructors = ElementImpl.Constructors | 'TypeParameterElementImpl' | 'forNode' | 'forSerialized' | 'synthetic';
    export type Interface = Omit<TypeParameterElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeParameterElementImpl extends ElementImpl implements any.Interface {
    _unlinkedTypeParam : any;

    nestingLevel : number;

    _type : any;

    _bound : any;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterElementImpl(name : string,offset : number) {
        this._unlinkedTypeParam = null;
        this.nestingLevel = null;
        super.ElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this._unlinkedTypeParam = null;
        this.nestingLevel = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => TypeParameterElementImpl;

    @namedConstructor
    forSerialized(_unlinkedTypeParam : any,enclosingElement : TypeParameterizedElementMixin,nestingLevel : number) {
        super.forSerialized(enclosingElement);
        this._unlinkedTypeParam = _unlinkedTypeParam;
        this.nestingLevel = nestingLevel;
    }
    static forSerialized : new(_unlinkedTypeParam : any,enclosingElement : TypeParameterizedElementMixin,nestingLevel : number) => TypeParameterElementImpl;

    @namedConstructor
    synthetic(name : string) {
        this._unlinkedTypeParam = null;
        this.nestingLevel = null;
        super.ElementImpl(name,-1);
        this.isSynthetic = true;
    }
    static synthetic : new(name : string) => TypeParameterElementImpl;

    get bound() : any {
        if (this._unlinkedTypeParam != null) {
            if (op(Op.EQUALS,this._unlinkedTypeParam.bound,null)) {
                return null;
            }
            return this._bound = ( this._bound ) || ( this.enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._unlinkedTypeParam.bound,{
                instantiateToBoundsAllowed : false,declaredType : true}) );
        }
        return this._bound;
    }
    set bound(bound : any) {
        _assertNotResynthesized(this._unlinkedTypeParam);
        this._bound = this._checkElementOfType(bound);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedTypeParam != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedTypeParam.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedTypeParam != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedTypeParam.codeRange);
        }
        return super.codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.name;
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
    get metadata() : core.DartList<any> {
        if (this._unlinkedTypeParam != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.enclosingUnit,this._unlinkedTypeParam.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedTypeParam != null) {
            return this._unlinkedTypeParam.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedTypeParam != null) {
            return this._unlinkedTypeParam.nameOffset;
        }
        return offset;
    }
    get type() : any {
        if (this._unlinkedTypeParam != null) {
            this._type = ( this._type ) || ( new bare.createInstance(any,null,this) );
        }
        return this._type;
    }
    set type(type : any) {
        this._type = type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitTypeParameterElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write(this.displayName);
        if (this.bound != null) {
            buffer.write(" extends ");
            buffer.write(this.bound);
        }
    }
}

export namespace UriReferencedElementImpl {
    export type Constructors = ElementImpl.Constructors | 'UriReferencedElementImpl' | 'forSerialized';
    export type Interface = Omit<UriReferencedElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class UriReferencedElementImpl extends ElementImpl implements any.Interface {
    _uriOffset : number;

    _uriEnd : number;

    _uri : string;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriReferencedElementImpl(name : string,offset : number) {
        this._uriOffset = -1;
        this._uriEnd = -1;
        super.ElementImpl(name,offset);
    }
    @namedConstructor
    forSerialized(enclosingElement : ElementImpl) {
        this._uriOffset = -1;
        this._uriEnd = -1;
        super.forSerialized(enclosingElement);
    }
    static forSerialized : new(enclosingElement : ElementImpl) => UriReferencedElementImpl;

    get uri() : string {
        return this._uri;
    }
    set uri(uri : string) {
        this._uri = uri;
    }
    get uriEnd() : number {
        return this._uriEnd;
    }
    set uriEnd(offset : number) {
        this._uriEnd = offset;
    }
    get uriOffset() : number {
        return this._uriOffset;
    }
    set uriOffset(offset : number) {
        this._uriOffset = offset;
    }
    _selectUri(defaultUri : string,configurations : core.DartList<any>) : string {
        for(let configuration of configurations) {
            if (op(Op.EQUALS,this.context.declaredVariables.get(configuration.name),configuration.value)) {
                return configuration.uri;
            }
        }
        return defaultUri;
    }
}

export namespace FunctionTypeAliasElementImpl {
    export type Constructors = ElementImpl.Constructors | 'FunctionTypeAliasElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<FunctionTypeAliasElementImpl, Constructors>;
}
@DartClass
@Implements(any)
@With(TypeParameterizedElementMixin)
export class FunctionTypeAliasElementImpl extends ElementImpl implements any.Interface,TypeParameterizedElementMixin.Interface {
    @Abstract
    getTypeParameterType(index : number) : any {
        throw 'from mixin';
    }
    @Abstract
    isTypeParameterInScope(typeParameter : any) : boolean {
        throw 'from mixin';
    }
    _unlinkedTypedef : any;

    _parameters : core.DartList<any>;

    _returnType : any;

    _type : any;

    constructor(name : string,nameOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeAliasElementImpl(name : string,nameOffset : number) {
        this._unlinkedTypedef = null;
        super.ElementImpl(name,nameOffset);
    }
    @namedConstructor
    forNode(name : any) {
        this._unlinkedTypedef = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => FunctionTypeAliasElementImpl;

    @namedConstructor
    forSerialized(_unlinkedTypedef : any,enclosingUnit : CompilationUnitElementImpl) {
        super.forSerialized(enclosingUnit);
        this._unlinkedTypedef = _unlinkedTypedef;
    }
    static forSerialized : new(_unlinkedTypedef : any,enclosingUnit : CompilationUnitElementImpl) => FunctionTypeAliasElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedTypedef != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedTypedef.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedTypedef != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedTypedef.codeRange);
        }
        return super.codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this._unlinkedTypedef != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.documentationComment:null)(this._unlinkedTypedef));
        }
        return super.documentationComment;
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
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingUnit() : CompilationUnitElementImpl {
        return this._enclosingElement as CompilationUnitElementImpl;
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
    get metadata() : core.DartList<any> {
        if (this._unlinkedTypedef != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.enclosingUnit,this._unlinkedTypedef.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedTypedef != null) {
            return this._unlinkedTypedef.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedTypedef != null) {
            return this._unlinkedTypedef.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        if (this._unlinkedTypedef != null) {
            this._parameters = ( this._parameters ) || ( ParameterElementImpl.resynthesizeList(this._unlinkedTypedef.parameters,this) );
        }
        return (this._parameters || new core.DartList.literal<any>());
    }
    set parameters(parameters : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedTypedef);
        if (parameters != null) {
            for(let parameter of parameters) {
                (parameter as ParameterElementImpl).enclosingElement = this;
            }
        }
        this._parameters = parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        if (this._unlinkedTypedef != null && op(Op.EQUALS,this._returnType,null)) {
            this._returnType = this.enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._unlinkedTypedef.returnType,{
                declaredType : true});
        }
        return this._returnType;
    }
    set returnType(returnType : any) {
        _assertNotResynthesized(this._unlinkedTypedef);
        this._returnType = this._checkElementOfType(returnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this._unlinkedTypedef != null && op(Op.EQUALS,this._type,null)) {
            this._type = new bare.createInstance(any,null,this);
        }
        return this._type;
    }
    set type(type : any) {
        _assertNotResynthesized(this._unlinkedTypedef);
        this._type = type;
    }
    set typeParameters(typeParameters : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedTypedef);
        for(let typeParameter of typeParameters) {
            (typeParameter as TypeParameterElementImpl).enclosingElement = this;
        }
        this._typeParameterElements = typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return ((t)=>(!!t)?t.typeParameters:null)(this._unlinkedTypedef);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitFunctionTypeAliasElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write("typedef ");
        buffer.write(this.displayName);
        let typeParameters : core.DartList<any> = this.typeParameters;
        let typeParameterCount : number = typeParameters.length;
        if (typeParameterCount > 0) {
            buffer.write("<");
            for(let i : number = 0; i < typeParameterCount; i++){
                if (i > 0) {
                    buffer.write(", ");
                }
                (typeParameters[i] as TypeParameterElementImpl).appendTo(buffer);
            }
            buffer.write(">");
        }
        buffer.write("(");
        let parameterList : core.DartList<any> = this.parameters;
        let parameterCount : number = parameterList.length;
        for(let i : number = 0; i < parameterCount; i++){
            if (i > 0) {
                buffer.write(", ");
            }
            (parameterList[i] as ParameterElementImpl).appendTo(buffer);
        }
        buffer.write(")");
        if (this.type != null) {
            buffer.write(ElementImpl.RIGHT_ARROW);
            buffer.write(this.type.returnType);
        }else if (this.returnType != null) {
            buffer.write(ElementImpl.RIGHT_ARROW);
            buffer.write(this.returnType);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        for(let parameter of this.parameters) {
            let parameterImpl : ParameterElementImpl = parameter;
            if (parameterImpl.identifier == identifier) {
                return parameterImpl;
            }
        }
        for(let typeParameter of typeParameters) {
            let typeParameterImpl : TypeParameterElementImpl = typeParameter;
            if (typeParameterImpl.identifier == identifier) {
                return typeParameterImpl;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this._safelyVisitPossibleChild(this.returnType,visitor);
        this.safelyVisitChildren(this.parameters,visitor);
        this.safelyVisitChildren(typeParameters,visitor);
    }
}

export namespace GenericFunctionTypeElementImpl {
    export type Constructors = ElementImpl.Constructors | 'forOffset' | 'forSerialized';
    export type Interface = Omit<GenericFunctionTypeElementImpl, Constructors>;
}
@DartClass
@Implements(any)
@With(TypeParameterizedElementMixin)
export class GenericFunctionTypeElementImpl extends ElementImpl implements any.Interface,TypeParameterizedElementMixin.Interface {
    @Abstract
    getTypeParameterType(index : number) : any {
        throw 'from mixin';
    }
    @Abstract
    isTypeParameterInScope(typeParameter : any) : boolean {
        throw 'from mixin';
    }
    _entityRef : any;

    _returnType : any;

    _parameters : core.DartList<any>;

    _type : any;

    @namedConstructor
    forOffset(nameOffset : number) {
        super.ElementImpl("",nameOffset);
    }
    static forOffset : new(nameOffset : number) => GenericFunctionTypeElementImpl;

    @namedConstructor
    forSerialized(enclosingElement : ElementImpl,_entityRef : any) {
        super.forSerialized(enclosingElement);
        this._entityRef = _entityRef;
    }
    static forSerialized : new(enclosingElement : ElementImpl,_entityRef : any) => GenericFunctionTypeElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return this._enclosingElement.typeParameterContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return '-';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.GENERIC_FUNCTION_TYPE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        if (this._entityRef != null) {
            this._parameters = ( this._parameters ) || ( ParameterElementImpl.resynthesizeList(this._entityRef.syntheticParams,this) );
        }
        return (this._parameters || new core.DartList.literal<any>());
    }
    set parameters(parameters : core.DartList<any>) {
        _assertNotResynthesized(this._entityRef);
        for(let parameter of parameters) {
            (parameter as ParameterElementImpl).enclosingElement = this;
        }
        this._parameters = parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        if (this._entityRef != null && op(Op.EQUALS,this._returnType,null)) {
            this._returnType = enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._entityRef.syntheticReturnType,{
                defaultVoid : false,declaredType : true});
        }
        return this._returnType;
    }
    set returnType(returnType : any) {
        _assertNotResynthesized(this._entityRef);
        this._returnType = this._checkElementOfType(returnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this._entityRef != null) {
            this._type = ( this._type ) || ( new bare.createInstance(any,null,this,null,this.allEnclosingTypeParameterTypes,false) );
        }
        return this._type;
    }
    set type(type : any) {
        _assertNotResynthesized(this._entityRef);
        this._type = type;
    }
    set typeParameters(typeParameters : core.DartList<any>) {
        _assertNotResynthesized(this._entityRef);
        for(let parameter of typeParameters) {
            (parameter as TypeParameterElementImpl).enclosingElement = this;
        }
        this._typeParameterElements = typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return ((t)=>(!!t)?t.typeParameters:null)(this._entityRef);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept<T>(visitor : any) : T {
        return visitor.visitGenericFunctionTypeElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        let type : any = this.returnType;
        if (is(type, any)) {
            type.appendTo(buffer,new core.DartHashSet<any>());
            buffer.write(' Function');
        }else {
            buffer.write('Function');
        }
        let typeParams : core.DartList<any> = typeParameters;
        let typeParameterCount : number = typeParams.length;
        if (typeParameterCount > 0) {
            buffer.write('<');
            for(let i : number = 0; i < typeParameterCount; i++){
                if (i > 0) {
                    buffer.write(', ');
                }
                (typeParams[i] as TypeParameterElementImpl).appendTo(buffer);
            }
            buffer.write('>');
        }
        let params : core.DartList<any> = this.parameters;
        buffer.write('(');
        for(let i : number = 0; i < params.length; i++){
            if (i > 0) {
                buffer.write(', ');
            }
            (params[i] as ParameterElementImpl).appendTo(buffer);
        }
        buffer.write(')');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this._safelyVisitPossibleChild(this.returnType,visitor);
        this.safelyVisitChildren(typeParameters,visitor);
        this.safelyVisitChildren(this.parameters,visitor);
    }
}

export namespace GenericTypeAliasElementImpl {
    export type Constructors = ElementImpl.Constructors | 'forNode' | 'forSerialized';
    export type Interface = Omit<GenericTypeAliasElementImpl, Constructors>;
}
@DartClass
@Implements(any)
@With(TypeParameterizedElementMixin)
export class GenericTypeAliasElementImpl extends ElementImpl implements any.Interface,TypeParameterizedElementMixin.Interface {
    @Abstract
    getTypeParameterType(index : number) : any {
        throw 'from mixin';
    }
    @Abstract
    isTypeParameterInScope(typeParameter : any) : boolean {
        throw 'from mixin';
    }
    _unlinkedTypedef : any;

    _function : any;

    _type : any;

    @namedConstructor
    forNode(name : any) {
        this._unlinkedTypedef = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => GenericTypeAliasElementImpl;

    @namedConstructor
    forSerialized(_unlinkedTypedef : any,enclosingUnit : CompilationUnitElementImpl) {
        super.forSerialized(enclosingUnit);
        this._unlinkedTypedef = _unlinkedTypedef;
    }
    static forSerialized : new(_unlinkedTypedef : any,enclosingUnit : CompilationUnitElementImpl) => GenericTypeAliasElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedTypedef != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedTypedef.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedTypedef != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedTypedef.codeRange);
        }
        return super.codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this._unlinkedTypedef != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.documentationComment:null)(this._unlinkedTypedef));
        }
        return super.documentationComment;
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
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingUnit() : CompilationUnitElementImpl {
        return this._enclosingElement as CompilationUnitElementImpl;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get function() : any {
        if (op(Op.EQUALS,this._function,null) && this._unlinkedTypedef != null) {
            let type : any = this.enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._unlinkedTypedef.returnType,{
                declaredType : true});
            if (is(type, any)) {
                let element : any = type.element;
                if (is(element, any)) {
                    (element as GenericFunctionTypeElementImpl).enclosingElement = this;
                    this._function = element;
                }
            }
        }
        return this._function;
    }
    set function(function : any) {
        _assertNotResynthesized(this._unlinkedTypedef);
        if (function != null) {
            (function as GenericFunctionTypeElementImpl).enclosingElement = this;
        }
        this._function = function;
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
    get metadata() : core.DartList<any> {
        if (this._unlinkedTypedef != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.enclosingUnit,this._unlinkedTypedef.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedTypedef != null) {
            return this._unlinkedTypedef.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedTypedef != null) {
            return this._unlinkedTypedef.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return (((t)=>(!!t)?t.parameters:null)(this.function) || new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return ((t)=>(!!t)?t.returnType:null)(this.function);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this._unlinkedTypedef != null && op(Op.EQUALS,this._type,null)) {
            this._type = new bare.createInstance(any,null,this);
        }
        return this._type;
    }
    set type(type : any) {
        _assertNotResynthesized(this._unlinkedTypedef);
        this._type = type;
    }
    set typeParameters(typeParameters : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedTypedef);
        for(let typeParameter of typeParameters) {
            (typeParameter as TypeParameterElementImpl).enclosingElement = this;
        }
        this._typeParameterElements = typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return ((t)=>(!!t)?t.typeParameters:null)(this._unlinkedTypedef);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitFunctionTypeAliasElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write("typedef ");
        buffer.write(this.displayName);
        let typeParameters = this.typeParameters;
        let typeParameterCount : number = typeParameters.length;
        if (typeParameterCount > 0) {
            buffer.write("<");
            for(let i : number = 0; i < typeParameterCount; i++){
                if (i > 0) {
                    buffer.write(", ");
                }
                (typeParameters[i] as TypeParameterElementImpl).appendTo(buffer);
            }
            buffer.write(">");
        }
        buffer.write(" = ");
        if (this.function != null) {
            (this.function as ElementImpl).appendTo(buffer);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        for(let typeParameter of typeParameters) {
            let typeParameterImpl : TypeParameterElementImpl = typeParameter;
            if (typeParameterImpl.identifier == identifier) {
                return typeParameterImpl;
            }
        }
        return null;
    }
    typeAfterSubstitution(typeArguments : core.DartList<any>) : any {
        let function : any = this.function;
        if (op(Op.EQUALS,function,null)) {
            return null;
        }
        let functionType : any = function.type;
        let parameterElements : core.DartList<any> = typeParameters;
        let parameterTypes : core.DartList<any> = TypeParameterTypeImpl.getTypes(parameterElements);
        let parameterCount : number = parameterTypes.length;
        if (typeArguments == null || parameterElements.length != typeArguments.length) {
            let dynamicType : any = DynamicElementImpl.instance.type;
            typeArguments = new core.DartList.filled(parameterCount,dynamicType);
        }
        return functionType.substitute2(typeArguments,parameterTypes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.safelyVisitChildren(typeParameters,visitor);
        ((_244_)=>(!!_244_)?_244_.accept(visitor):null)(this.function);
    }
}

export namespace LabelElementImpl {
    export type Constructors = ElementImpl.Constructors | 'LabelElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<LabelElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LabelElementImpl extends ElementImpl implements any.Interface {
    _unlinkedLabel : any;

    _onSwitchStatement : boolean;

    _onSwitchMember : boolean;

    constructor(name : string,nameOffset : number,_onSwitchStatement : boolean,_onSwitchMember : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabelElementImpl(name : string,nameOffset : number,_onSwitchStatement : boolean,_onSwitchMember : boolean) {
        this._unlinkedLabel = null;
        super.ElementImpl(name,nameOffset);
        this._onSwitchStatement = _onSwitchStatement;
        this._onSwitchMember = _onSwitchMember;
    }
    @namedConstructor
    forNode(name : any,_onSwitchStatement : boolean,_onSwitchMember : boolean) {
        this._unlinkedLabel = null;
        super.forNode(name);
        this._onSwitchStatement = _onSwitchStatement;
        this._onSwitchMember = _onSwitchMember;
    }
    static forNode : new(name : any,_onSwitchStatement : boolean,_onSwitchMember : boolean) => LabelElementImpl;

    @namedConstructor
    forSerialized(unlinkedLabel : any,enclosingExecutable : ExecutableElementImpl) {
        this._unlinkedLabel = unlinkedLabel;
        this._onSwitchStatement = unlinkedLabel.isOnSwitchStatement;
        this._onSwitchMember = unlinkedLabel.isOnSwitchMember;
        super.forSerialized(enclosingExecutable);
    }
    static forSerialized : new(unlinkedLabel : any,enclosingExecutable : ExecutableElementImpl) => LabelElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    get isOnSwitchMember() : boolean {
        return this._onSwitchMember;
    }
    get isOnSwitchStatement() : boolean {
        return this._onSwitchStatement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.LABEL;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedLabel != null) {
            return this._unlinkedLabel.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedLabel != null && this._unlinkedLabel.nameOffset != 0) {
            return this._unlinkedLabel.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitLabelElement(this);
    }
    static resynthesizeList(enclosingExecutable : ExecutableElementImpl,unlinkedLabels : core.DartList<any>) : core.DartList<any> {
        let length : number = unlinkedLabels.length;
        if (length != 0) {
            let elements : core.DartList<any> = new core.DartList<any>(length);
            for(let i : number = 0; i < length; i++){
                elements[i] = new LabelElementImpl.forSerialized(unlinkedLabels[i],enclosingExecutable);
            }
            return elements;
        }else {
            return new core.DartList.literal<any>();
        }
    }
}

export namespace LibraryElementImpl {
    export type Constructors = ElementImpl.Constructors | 'LibraryElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<LibraryElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LibraryElementImpl extends ElementImpl implements any.Interface {
    context : any;

    resynthesizerContext : LibraryResynthesizerContext;

    _unlinkedDefiningUnit : any;

    _definingCompilationUnit : any;

    _entryPoint : any;

    _imports : core.DartList<any>;

    _exports : core.DartList<any>;

    _libraryCycle : core.DartList<any>;

    _parts : core.DartList<any>;

    _loadLibraryFunction : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nameLength : number;

    _exportNamespace : any;

    _publicNamespace : any;

    _resolutionCapabilities : number;

    _prefixes : core.DartList<any>;

    constructor(context : any,name : string,offset : number,nameLength : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryElementImpl(context : any,name : string,offset : number,nameLength : number) {
        this._libraryCycle = null;
        this._parts = CompilationUnitElement.EMPTY_LIST;
        this._resolutionCapabilities = 0;
        this.resynthesizerContext = null;
        this._unlinkedDefiningUnit = null;
        super.ElementImpl(name,offset);
        this.context = context;
        this.nameLength = nameLength;
    }
    @namedConstructor
    forNode(context : any,name : any) {
        this._libraryCycle = null;
        this._parts = CompilationUnitElement.EMPTY_LIST;
        this._resolutionCapabilities = 0;
        this.nameLength = name != null ? name.length : 0;
        this.resynthesizerContext = null;
        this._unlinkedDefiningUnit = null;
        super.forNode(name);
        this.context = context;
    }
    static forNode : new(context : any,name : any) => LibraryElementImpl;

    @namedConstructor
    forSerialized(context : any,name : string,offset : number,nameLength : number,resynthesizerContext : LibraryResynthesizerContext,_unlinkedDefiningUnit : any) {
        this._libraryCycle = null;
        this._parts = CompilationUnitElement.EMPTY_LIST;
        this._resolutionCapabilities = 0;
        super.forSerialized(null);
        this.context = context;
        this.nameLength = nameLength;
        this.resynthesizerContext = resynthesizerContext;
        this._unlinkedDefiningUnit = _unlinkedDefiningUnit;
        this._name = name;
        this._nameOffset = offset;
        this.setResolutionCapability(LibraryResolutionCapability.resolvedTypeNames,true);
        this.setResolutionCapability(LibraryResolutionCapability.constantExpressions,true);
    }
    static forSerialized : new(context : any,name : string,offset : number,nameLength : number,resynthesizerContext : LibraryResynthesizerContext,_unlinkedDefiningUnit : any) => LibraryElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        let unit : any = this._definingCompilationUnit;
        if (is(unit, CompilationUnitElementImpl)) {
            return unit.codeLength;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        let unit : any = this._definingCompilationUnit;
        if (is(unit, CompilationUnitElementImpl)) {
            return unit.codeOffset;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definingCompilationUnit() : any {
        return this._definingCompilationUnit;
    }
    set definingCompilationUnit(unit : any) {
        /* TODO (AssertStatementImpl) : assert ((unit as CompilationUnitElementImpl).librarySource == unit.source); */;
        (unit as CompilationUnitElementImpl).enclosingElement = this;
        this._definingCompilationUnit = unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this._unlinkedDefiningUnit != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.libraryDocumentationComment:null)(this._unlinkedDefiningUnit));
        }
        return super.documentationComment;
    }
    get entryPoint() : any {
        if (this.resynthesizerContext != null) {
            this._entryPoint = ( this._entryPoint ) || ( this.resynthesizerContext.findEntryPoint() );
        }
        return this._entryPoint;
    }
    set entryPoint(entryPoint : any) {
        this._entryPoint = entryPoint;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportedLibraries() : core.DartList<any> {
        let libraries : core.DartHashSet<any> = new core.DartHashSet<any>();
        for(let element of this.exports) {
            let library : any = element.exportedLibrary;
            if (library != null) {
                libraries.add(library);
            }
        }
        return libraries.toList({
            growable : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportNamespace() : any {
        if (this.resynthesizerContext != null) {
            this._exportNamespace = ( this._exportNamespace ) || ( this.resynthesizerContext.buildExportNamespace() );
        }
        return this._exportNamespace;
    }
    set exportNamespace(exportNamespace : any) {
        this._exportNamespace = exportNamespace;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exports() : core.DartList<any> {
        if (this._unlinkedDefiningUnit != null && this._exports == null) {
            let unlinkedNonPublicExports : core.DartList<any> = this._unlinkedDefiningUnit.exports;
            let unlinkedPublicExports : core.DartList<any> = this._unlinkedDefiningUnit.publicNamespace.exports;
            /* TODO (AssertStatementImpl) : assert (_unlinkedDefiningUnit.exports.length == unlinkedPublicExports.length); */;
            let length : number = unlinkedNonPublicExports.length;
            if (length != 0) {
                let exports : core.DartList<any> = new core.DartList<any>();
                for(let i : number = 0; i < length; i++){
                    let serializedExportPublic : any = unlinkedPublicExports[i];
                    let serializedExportNonPublic : any = unlinkedNonPublicExports[i];
                    let exportElement : ExportElementImpl = new ExportElementImpl.forSerialized(serializedExportPublic,serializedExportNonPublic,this.library);
                    exports.add(exportElement);
                }
                this._exports = exports;
            }else {
                this._exports = new core.DartList.literal<any>();
            }
        }
        return (this._exports || new core.DartList.literal<any>());
    }
    set exports(exports : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedDefiningUnit);
        for(let exportElement of exports) {
            (exportElement as ExportElementImpl).enclosingElement = this;
        }
        this._exports = exports;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasExtUri() : boolean {
        if (this._unlinkedDefiningUnit != null) {
            let unlinkedImports : core.DartList<any> = this._unlinkedDefiningUnit.imports;
            for(let import of unlinkedImports) {
                if (DartUriResolver.isDartExtUri(import.uri)) {
                    return true;
                }
            }
            return false;
        }
        return this.hasModifier(Modifier.HAS_EXT_URI);
    }
    set hasExtUri(hasExtUri : boolean) {
        this.setModifier(Modifier.HAS_EXT_URI,hasExtUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasLoadLibraryFunction() : boolean {
        if (this._definingCompilationUnit.hasLoadLibraryFunction) {
            return true;
        }
        for(let i : number = 0; i < this._parts.length; i++){
            if (this._parts[i].hasLoadLibraryFunction) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this._definingCompilationUnit.source.encoding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importedLibraries() : core.DartList<any> {
        let libraries : core.DartHashSet<any> = new core.DartHashSet<any>();
        for(let element of this.imports) {
            let library : any = element.importedLibrary;
            if (library != null) {
                libraries.add(library);
            }
        }
        return libraries.toList({
            growable : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get imports() : core.DartList<any> {
        if (this._unlinkedDefiningUnit != null && this._imports == null) {
            let unlinkedImports : core.DartList<any> = this._unlinkedDefiningUnit.imports;
            let length : number = unlinkedImports.length;
            if (length != 0) {
                let imports : core.DartList<any> = new core.DartList<any>();
                let linkedLibrary : any = this.resynthesizerContext.linkedLibrary;
                for(let i : number = 0; i < length; i++){
                    let dependency : number = op(Op.INDEX,linkedLibrary.importDependencies,i);
                    let importElement : ImportElementImpl = new ImportElementImpl.forSerialized(unlinkedImports[i],dependency,this.library);
                    imports.add(importElement);
                }
                this._imports = imports;
            }else {
                this._imports = new core.DartList.literal<any>();
            }
        }
        return (this._imports || ImportElement.EMPTY_LIST);
    }
    set imports(imports : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedDefiningUnit);
        for(let importElement of imports) {
            (importElement as ImportElementImpl).enclosingElement = this;
            let prefix : PrefixElementImpl = importElement.prefix as PrefixElementImpl;
            if (prefix != null) {
                prefix.enclosingElement = this;
            }
        }
        this._imports = imports;
        this._prefixes = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBrowserApplication() : boolean {
        return this.entryPoint != null && this.isOrImportsBrowserLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartAsync() : boolean {
        return this.name == "dart.async";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCore() : boolean {
        return this.name == "dart.core";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInSdk() : boolean {
        return StringUtilities.startsWith5(this.name,0,100,97,114,116,46);
    }
    get isOrImportsBrowserLibrary() : boolean {
        let visited : core.DartList<any> = new core.DartList<any>();
        let htmlLibSource : any = this.context.sourceFactory.forUri(DartSdk.DART_HTML);
        visited.add(this);
        for(let index : number = 0; index < visited.length; index++){
            let library : any = visited[index];
            let source : any = library.definingCompilationUnit.source;
            if (op(Op.EQUALS,source,htmlLibSource)) {
                return true;
            }
            for(let importedLibrary of library.importedLibraries) {
                if (!visited.contains(importedLibrary)) {
                    visited.add(importedLibrary);
                }
            }
            for(let exportedLibrary of library.exportedLibraries) {
                if (!visited.contains(exportedLibrary)) {
                    visited.add(exportedLibrary);
                }
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isResynthesized() : boolean {
        return this.resynthesizerContext != null;
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
    get library() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryCycle() : core.DartList<any> {
        if (this._libraryCycle != null) {
            return this._libraryCycle;
        }
        let counter : number = 0;
        let indices : core.DartMap<LibraryElementImpl,number> = new core.DartMap.literal([
        ]);
        let active : core.DartSet<LibraryElementImpl> = new core.DartSet<any>();
        let stack : core.DartList<LibraryElementImpl> = new core.DartList.literal();
        var scc : (library : LibraryElementImpl) => number = (library : LibraryElementImpl) : number =>  {
            let index : number = counter++;
            let root : number = index;
            indices.set(library,index);
            active.add(library);
            stack.add(library);
            var getActualLibrary : (lib : any) => LibraryElementImpl = (lib : any) : LibraryElementImpl =>  {
                if (is(lib, any)) {
                    return lib.actualElement;
                }else {
                    return lib;
                }
            };
            var recurse : (child : LibraryElementImpl) => void = (child : LibraryElementImpl) : void =>  {
                if (!indices.containsKey(child)) {
                    root = math.min(root,scc(child));
                }else if (active.contains(child)) {
                    root = math.min(root,indices.get(child));
                }
            };
            library.exportedLibraries.map(getActualLibrary).where((l : any) =>  {
                return op(Op.EQUALS,l._libraryCycle,null);
            }).forEach(recurse);
            library.importedLibraries.map(getActualLibrary).where((l : any) =>  {
                return op(Op.EQUALS,l._libraryCycle,null);
            }).forEach(recurse);
            if (root == index) {
                let component : core.DartList<any> = new core.DartList.literal<any>();
                let cur : LibraryElementImpl = null;
                do{
                    cur = stack.removeLast();
                    active.remove(cur);
                    component.add(cur);
                    cur._libraryCycle = component;
                } while (cur != library);
            }
            return root;
        };
        scc(this.library);
        return this._libraryCycle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get loadLibraryFunction() : any {
        /* TODO (AssertStatementImpl) : assert (_loadLibraryFunction != null); */;
        return this._loadLibraryFunction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        if (this._unlinkedDefiningUnit != null) {
            this._metadata = ( this._metadata ) || ( this._buildAnnotations(this._definingCompilationUnit as CompilationUnitElementImpl,this._unlinkedDefiningUnit.libraryAnnotations) );
            return this._metadata;
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parts() : core.DartList<any> {
        return this._parts;
    }
    set parts(parts : core.DartList<any>) {
        for(let compilationUnit of parts) {
            /* TODO (AssertStatementImpl) : assert ((compilationUnit as CompilationUnitElementImpl).librarySource == source); */;
            (compilationUnit as CompilationUnitElementImpl).enclosingElement = this;
        }
        this._parts = parts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixes() : core.DartList<any> {
        if (this._prefixes == null) {
            let prefixes : core.DartHashSet<any> = new core.DartHashSet<any>();
            for(let element of this.imports) {
                let prefix : any = element.prefix;
                if (prefix != null) {
                    prefixes.add(prefix);
                }
            }
            this._prefixes = prefixes.toList({
                growable : false});
        }
        return this._prefixes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get publicNamespace() : any {
        if (this.resynthesizerContext != null) {
            this._publicNamespace = ( this._publicNamespace ) || ( this.resynthesizerContext.buildPublicNamespace() );
        }
        return this._publicNamespace;
    }
    set publicNamespace(publicNamespace : any) {
        this._publicNamespace = publicNamespace;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        if (op(Op.EQUALS,this._definingCompilationUnit,null)) {
            return null;
        }
        return this._definingCompilationUnit.source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get units() : core.DartList<any> {
        let units : core.DartList<any> = new core.DartList<any>();
        units.add(this._definingCompilationUnit);
        units.addAll(this._parts);
        return units;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitLibraryElement(this);
    }
    createLoadLibraryFunction(typeProvider : any) : void {
        let function : FunctionElementImpl = new FunctionElementImpl(FunctionElement.LOAD_LIBRARY_NAME,-1);
        function.isSynthetic = true;
        function.enclosingElement = this;
        function.returnType = typeProvider.futureDynamicType;
        function.type = new bare.createInstance(any,null,function);
        this._loadLibraryFunction = function;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        let unitImpl : CompilationUnitElementImpl = this._definingCompilationUnit;
        if (unitImpl.identifier == identifier) {
            return unitImpl;
        }
        for(let part of this._parts) {
            let partImpl : CompilationUnitElementImpl = part;
            if (partImpl.identifier == identifier) {
                return partImpl;
            }
        }
        for(let importElement of this.imports) {
            let importElementImpl : ImportElementImpl = importElement;
            if (importElementImpl.identifier == identifier) {
                return importElementImpl;
            }
        }
        for(let exportElement of this.exports) {
            let exportElementImpl : ExportElementImpl = exportElement;
            if (exportElementImpl.identifier == identifier) {
                return exportElementImpl;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getImportsWithPrefix(prefixElement : any) : core.DartList<any> {
        let imports = this.imports;
        let count : number = imports.length;
        let importList : core.DartList<any> = new core.DartList<any>();
        for(let i : number = 0; i < count; i++){
            if (core.identical(imports[i].prefix,prefixElement)) {
                importList.add(imports[i]);
            }
        }
        return importList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getType(className : string) : any {
        let type : any = this._definingCompilationUnit.getType(className);
        if (type != null) {
            return type;
        }
        for(let part of this._parts) {
            type = part.getType(className);
            if (type != null) {
                return type;
            }
        }
        return null;
    }
    invalidateLibraryCycles() : void {
        let active : core.DartSet<LibraryElementImpl> = new core.DartHashSet<any>();
        var invalidate : (element : any) => void = (element : any) : void =>  {
            let library : LibraryElementImpl = is(element, any) ? element.actualElement : element;
            if (active.add(library)) {
                if (library._libraryCycle != null) {
                    library._libraryCycle.forEach(invalidate);
                    library._libraryCycle = null;
                }
                library.exportedLibraries.forEach(invalidate);
                library.importedLibraries.forEach(invalidate);
            }
        };
        invalidate(this);
    }
    setResolutionCapability(capability : LibraryResolutionCapability,value : boolean) : void {
        this._resolutionCapabilities = BooleanArray.set(this._resolutionCapabilities,capability.index,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_246_)=>(!!_246_)?_246_.accept(visitor):null)(this._definingCompilationUnit);
        this.safelyVisitChildren(this.exports,visitor);
        this.safelyVisitChildren(this.imports,visitor);
        this.safelyVisitChildren(this._parts,visitor);
    }
    static getImpl(element : any) : LibraryElementImpl {
        if (is(element, any)) {
            return LibraryElementImpl.getImpl(element.actualElement);
        }
        return element as LibraryElementImpl;
    }
    static hasResolutionCapability(library : any,capability : LibraryResolutionCapability) : boolean {
        return is(library, LibraryElementImpl) && BooleanArray.get(library._resolutionCapabilities,capability.index);
    }
}

export namespace AbstractClassElementImpl {
    export type Constructors = ElementImpl.Constructors | 'AbstractClassElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<AbstractClassElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AbstractClassElementImpl extends ElementImpl implements any.Interface {
    _accessors : core.DartList<any>;

    _fields : core.DartList<any>;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractClassElementImpl(name : string,offset : number) {
        super.ElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => AbstractClassElementImpl;

    @namedConstructor
    forSerialized(enclosingUnit : CompilationUnitElementImpl) {
        super.forSerialized(enclosingUnit);
    }
    static forSerialized : new(enclosingUnit : CompilationUnitElementImpl) => AbstractClassElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<any> {
        return (this._accessors || new core.DartList.literal<any>());
    }
    set accessors(accessors : core.DartList<any>) {
        for(let accessor of accessors) {
            (accessor as PropertyAccessorElementImpl).enclosingElement = this;
        }
        this._accessors = accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<any> {
        return (this._fields || new core.DartList.literal<any>());
    }
    set fields(fields : core.DartList<any>) {
        for(let field of fields) {
            (field as FieldElementImpl).enclosingElement = this;
        }
        this._fields = fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get isEnum() : boolean{ throw 'abstract'}
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
    accept(visitor : any) {
        return visitor.visitClassElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        if (this.isEnum) {
            return this.getNodeMatching((node : any) =>  {
                return is(node, any);
            });
        }else {
            return this.getNodeMatching((node : any) =>  {
                return is(node, any) || is(node, any);
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        for(let accessor of this.accessors) {
            let accessorImpl : PropertyAccessorElementImpl = accessor;
            if (accessorImpl.identifier == identifier) {
                return accessorImpl;
            }
        }
        for(let field of this.fields) {
            let fieldImpl : FieldElementImpl = field;
            if (fieldImpl.identifier == identifier) {
                return fieldImpl;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getField(name : string) : any {
        for(let fieldElement of this.fields) {
            if (name == fieldElement.name) {
                return fieldElement;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getGetter(getterName : string) : any {
        let length : number = this.accessors.length;
        for(let i : number = 0; i < length; i++){
            let accessor : any = this.accessors[i];
            if (accessor.isGetter && op(Op.EQUALS,accessor.name,getterName)) {
                return accessor;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSetter(setterName : string) : any {
        if (!StringUtilities.endsWithChar(setterName,61)) {
            setterName += '=';
        }
        for(let accessor of this.accessors) {
            if (accessor.isSetter && op(Op.EQUALS,accessor.name,setterName)) {
                return accessor;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpConcreteMethod(methodName : string,library : any) : any {
        return this._first(this._implementationsOfMethod(methodName).where((method : any) =>  {
            return !method.isAbstract && method.isAccessibleIn(library);
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpGetter(getterName : string,library : any) : any {
        return this._first(this._implementationsOfGetter(getterName).where((getter : any) =>  {
            return getter.isAccessibleIn(library);
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedConcreteGetter(getterName : string,library : any) : any {
        return this._first(this._implementationsOfGetter(getterName).where((getter : any) =>  {
            return !getter.isAbstract && getter.isAccessibleIn(library) && getter.enclosingElement != this;
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedConcreteMethod(methodName : string,library : any) : any {
        return this._first(this._implementationsOfMethod(methodName).where((method : any) =>  {
            return !method.isAbstract && method.isAccessibleIn(library) && method.enclosingElement != this;
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedConcreteSetter(setterName : string,library : any) : any {
        return this._first(this._implementationsOfSetter(setterName).where((setter : any) =>  {
            return !setter.isAbstract && setter.isAccessibleIn(library) && setter.enclosingElement != this;
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedMethod(methodName : string,library : any) : any {
        return this._first(this._implementationsOfMethod(methodName).where((method : any) =>  {
            return method.isAccessibleIn(library) && method.enclosingElement != this;
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpMethod(methodName : string,library : any) : any {
        return this._first(this._implementationsOfMethod(methodName).where((method : any) =>  {
            return method.isAccessibleIn(library);
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpSetter(setterName : string,library : any) : any {
        return this._first(this._implementationsOfSetter(setterName).where((setter : any) =>  {
            return setter.isAccessibleIn(library);
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.safelyVisitChildren(this.accessors,visitor);
        this.safelyVisitChildren(this.fields,visitor);
    }
    _first(iterable : core.DartIterable<any>) : core.DartObject {
        if (iterable.isEmpty) {
            return null;
        }
        return iterable.first;
    }
    _implementationsOfGetter(getterName : string) : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            let classElement : any = this;
            let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
            while (classElement != null && visitedClasses.add(classElement)){
                let getter : any = classElement.getGetter(getterName);
                if (getter != null) {
                    yield getter;
                }
                for(let mixin of classElement.mixins.reversed) {
                    getter = ((_237_)=>(!!_237_)?_237_.getGetter(getterName):null)(mixin.element);
                    if (getter != null) {
                        yield getter;
                    }
                }
                classElement = ((t)=>(!!t)?t.element:null)(classElement.supertype);
            }
        }).call(this));
    }

    _implementationsOfMethod(methodName : string) : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            let classElement : any = this;
            let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
            while (classElement != null && visitedClasses.add(classElement)){
                let method : any = classElement.getMethod(methodName);
                if (method != null) {
                    yield method;
                }
                for(let mixin of classElement.mixins.reversed) {
                    method = ((_238_)=>(!!_238_)?_238_.getMethod(methodName):null)(mixin.element);
                    if (method != null) {
                        yield method;
                    }
                }
                classElement = ((t)=>(!!t)?t.element:null)(classElement.supertype);
            }
        }).call(this));
    }

    _implementationsOfSetter(setterName : string) : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            let classElement : any = this;
            let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
            while (classElement != null && visitedClasses.add(classElement)){
                let setter : any = classElement.getSetter(setterName);
                if (setter != null) {
                    yield setter;
                }
                for(let mixin of classElement.mixins.reversed) {
                    setter = ((_239_)=>(!!_239_)?_239_.getSetter(setterName):null)(mixin.element);
                    if (setter != null) {
                        yield setter;
                    }
                }
                classElement = ((t)=>(!!t)?t.element:null)(classElement.supertype);
            }
        }).call(this));
    }

    static getImpl(classElement : any) : AbstractClassElementImpl {
        if (is(classElement, any)) {
            return AbstractClassElementImpl.getImpl(classElement.actualElement);
        }
        return classElement as AbstractClassElementImpl;
    }
}

export namespace DynamicElementImpl {
    export type Constructors = ElementImpl.Constructors | 'DynamicElementImpl';
    export type Interface = Omit<DynamicElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DynamicElementImpl extends ElementImpl implements any.Interface {
    static get instance() : DynamicElementImpl {
        return DynamicTypeImpl.instance.element as DynamicElementImpl;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    type : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DynamicElementImpl() {
        super.ElementImpl(Keyword.DYNAMIC.lexeme,-1);
        this.setModifier(Modifier.SYNTHETIC,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return ElementKind.DYNAMIC;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return null;
    }
}

export namespace VariableElementImpl {
    export type Constructors = ElementImpl.Constructors | 'VariableElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<VariableElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class VariableElementImpl extends ElementImpl implements any.Interface {
    _declaredType : any;

    _type : any;

    _initializer : any;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableElementImpl(name : string,offset : number) {
        super.ElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => VariableElementImpl;

    @namedConstructor
    forSerialized(enclosingElement : ElementImpl) {
        super.forSerialized(enclosingElement);
    }
    static forSerialized : new(enclosingElement : ElementImpl) => VariableElementImpl;

    get constantInitializer() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constantValue() : any {
        return ((t)=>(!!t)?t.value:null)(this.evaluationResult);
    }
    set declaredType(type : any) {
        this._declaredType = this._checkElementOfType(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.name;
    }
    get evaluationResult() : any {
        return null;
    }
    set evaluationResult(result : any) {
        throw new core.StateError("Invalid attempt to set a compile-time constant result");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitType() : boolean {
        return this.hasModifier(Modifier.IMPLICIT_TYPE);
    }
    set hasImplicitType(hasImplicitType : boolean) {
        this.setModifier(Modifier.IMPLICIT_TYPE,hasImplicitType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : any {
        return this._initializer;
    }
    set initializer(function : any) {
        if (function != null) {
            (function as FunctionElementImpl).enclosingElement = this;
        }
        this._initializer = function;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this.hasModifier(Modifier.CONST);
    }
    set isConst(isConst : boolean) {
        this.setModifier(Modifier.CONST,isConst);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return this.hasModifier(Modifier.FINAL);
    }
    set isFinal(isFinal : boolean) {
        this.setModifier(Modifier.FINAL,isFinal);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInClosure() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInScope() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.hasModifier(Modifier.STATIC);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return (this._type || this._declaredType);
    }
    set type(type : any) {
        this._type = this._checkElementOfType(type);
    }
    get typeInferenceError() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write(this.type);
        buffer.write(" ");
        buffer.write(this.displayName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeConstantValue() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_247_)=>(!!_247_)?_247_.accept(visitor):null)(this._initializer);
    }
}

export namespace PrefixElementImpl {
    export type Constructors = ElementImpl.Constructors | 'PrefixElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<PrefixElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PrefixElementImpl extends ElementImpl implements any.Interface {
    _unlinkedImport : any;

    constructor(name : string,nameOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixElementImpl(name : string,nameOffset : number) {
        this._unlinkedImport = null;
        super.ElementImpl(name,nameOffset);
    }
    @namedConstructor
    forNode(name : any) {
        this._unlinkedImport = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => PrefixElementImpl;

    @namedConstructor
    forSerialized(_unlinkedImport : any,enclosingLibrary : LibraryElementImpl) {
        super.forSerialized(enclosingLibrary);
        this._unlinkedImport = _unlinkedImport;
    }
    static forSerialized : new(_unlinkedImport : any,enclosingLibrary : LibraryElementImpl) => PrefixElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.name;
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
    get identifier() : string {
        return `_${super.identifier}`;
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
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedImport != null) {
            if (this._name == null) {
                let library : LibraryElementImpl = this.enclosingElement as LibraryElementImpl;
                let prefixId : number = this._unlinkedImport.prefixReference;
                return this._name = op(Op.INDEX,library._unlinkedDefiningUnit.references,prefixId).name;
            }
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedImport != null) {
            return this._unlinkedImport.prefixOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitPrefixElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write("as ");
        super.appendTo(buffer);
    }
}

export namespace EnumElementImpl {
    export type Constructors = AbstractClassElementImpl.Constructors | 'EnumElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<EnumElementImpl, Constructors>;
}
@DartClass
export class EnumElementImpl extends AbstractClassElementImpl {
    _unlinkedEnum : any;

    _type : any;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumElementImpl(name : string,offset : number) {
        this._unlinkedEnum = null;
        super.AbstractClassElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this._unlinkedEnum = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => EnumElementImpl;

    @namedConstructor
    forSerialized(_unlinkedEnum : any,enclosingUnit : CompilationUnitElementImpl) {
        super.forSerialized(enclosingUnit);
        this._unlinkedEnum = _unlinkedEnum;
    }
    static forSerialized : new(_unlinkedEnum : any,enclosingUnit : CompilationUnitElementImpl) => EnumElementImpl;

    set abstract(isAbstract : boolean) {
        _assertNotResynthesized(this._unlinkedEnum);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<any> {
        if (this._unlinkedEnum != null && this._accessors == null) {
            this._resynthesizeFieldsAndPropertyAccessors();
        }
        return (this._accessors || new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set accessors(accessors : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedEnum);
        super.accessors = accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allSupertypes() : core.DartList<any> {
        return new core.DartList.literal<any>(this.supertype);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedEnum != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedEnum.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedEnum != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedEnum.codeRange);
        }
        return super.codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructors() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this._unlinkedEnum != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.documentationComment:null)(this._unlinkedEnum));
        }
        return super.documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<any> {
        if (this._unlinkedEnum != null && this._fields == null) {
            this._resynthesizeFieldsAndPropertyAccessors();
        }
        return (this._fields || new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set fields(fields : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedEnum);
        super.fields = fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasNonFinalField() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasReferenceToSuper() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasStaticMember() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnum() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMixinApplication() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOrInheritsProxy() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProxy() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isValidMixin() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        if (this._unlinkedEnum != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.enclosingUnit,this._unlinkedEnum.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methods() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedEnum != null) {
            return this._unlinkedEnum.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedEnum != null && this._unlinkedEnum.nameOffset != 0) {
            return this._unlinkedEnum.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get supertype() : any {
        return this.context.typeProvider.objectType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (op(Op.EQUALS,this._type,null)) {
            let type : any = new bare.createInstance(any,null,this);
            type.typeArguments = new core.DartList.literal<any>();
            this._type = type;
        }
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unnamedConstructor() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write('enum ');
        let name : string = this.displayName;
        if (name == null) {
            buffer.write("{unnamed enum}");
        }else {
            buffer.write(name);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMethod(name : string) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNamedConstructor(name : string) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSuperConstructorAccessible(constructor : any) : boolean {
        return false;
    }
    _resynthesizeFieldsAndPropertyAccessors() : void {
        let fields : core.DartList<FieldElementImpl> = new core.DartList.literal<FieldElementImpl>();
        fields.add(((_) : FieldElementImpl =>  {
            {
                _.enclosingElement = this;
                _.isSynthetic = true;
                _.isFinal = true;
                _.type = this.context.typeProvider.intType;
                return _;
            }
        })(new FieldElementImpl('index',-1)));
        fields.add(new ConstFieldElementImpl_EnumValues(this));
        for(let i : number = 0; i < this._unlinkedEnum.values.length; i++){
            let unlinkedValue : any = op(Op.INDEX,this._unlinkedEnum.values,i);
            let field : ConstFieldElementImpl_EnumValue = new ConstFieldElementImpl_EnumValue(this,unlinkedValue,i);
            fields.add(field);
        }
        this._fields = fields;
        this._accessors = fields.map((field : FieldElementImpl) =>  {
            return ((_) : PropertyAccessorElementImpl_ImplicitGetter =>  {
                {
                    _.enclosingElement = this;
                    return _;
                }
            })(new PropertyAccessorElementImpl_ImplicitGetter(field));
        }).toList({
            growable : false});
    }
}

export namespace ExportElementImpl {
    export type Constructors = UriReferencedElementImpl.Constructors | 'ExportElementImpl' | 'forSerialized';
    export type Interface = Omit<ExportElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExportElementImpl extends UriReferencedElementImpl implements any.Interface {
    _unlinkedExportPublic : any;

    _unlinkedExportNonPublic : any;

    _exportedLibrary : any;

    _combinators : core.DartList<any>;

    _selectedUri : string;

    constructor(offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExportElementImpl(offset : number) {
        this._unlinkedExportPublic = null;
        this._unlinkedExportNonPublic = null;
        super.UriReferencedElementImpl(null,offset);
    }
    @namedConstructor
    forSerialized(_unlinkedExportPublic : any,_unlinkedExportNonPublic : any,enclosingLibrary : LibraryElementImpl) {
        super.forSerialized(enclosingLibrary);
        this._unlinkedExportPublic = _unlinkedExportPublic;
        this._unlinkedExportNonPublic = _unlinkedExportNonPublic;
    }
    static forSerialized : new(_unlinkedExportPublic : any,_unlinkedExportNonPublic : any,enclosingLibrary : LibraryElementImpl) => ExportElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<any> {
        if (this._unlinkedExportPublic != null && this._combinators == null) {
            this._combinators = ImportElementImpl._buildCombinators(this._unlinkedExportPublic.combinators);
        }
        return (this._combinators || new core.DartList.literal<any>());
    }
    set combinators(combinators : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedExportPublic);
        this._combinators = combinators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exportedLibrary() : any {
        if (this._unlinkedExportNonPublic != null && op(Op.EQUALS,this._exportedLibrary,null)) {
            let library : LibraryElementImpl = this.enclosingElement as LibraryElementImpl;
            this._exportedLibrary = library.resynthesizerContext.buildExportedLibrary(this.uri);
        }
        return this._exportedLibrary;
    }
    set exportedLibrary(exportedLibrary : any) {
        _assertNotResynthesized(this._unlinkedExportNonPublic);
        this._exportedLibrary = exportedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this.exportedLibrary.name;
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
    get metadata() : core.DartList<any> {
        if (this._unlinkedExportNonPublic != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.library.definingCompilationUnit as CompilationUnitElementImpl,this._unlinkedExportNonPublic.annotations) );
        }
        return super.metadata;
    }
    set metadata(metadata : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedExportNonPublic);
        super.metadata = metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedExportNonPublic != null) {
            return this._unlinkedExportNonPublic.offset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        if (this._unlinkedExportPublic != null) {
            return this._selectedUri = ( this._selectedUri ) || ( this._selectUri(this._unlinkedExportPublic.uri,this._unlinkedExportPublic.configurations) );
        }
        return super.uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uri(uri : string) {
        _assertNotResynthesized(this._unlinkedExportPublic);
        super.uri = uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        if (this._unlinkedExportNonPublic != null) {
            return this._unlinkedExportNonPublic.uriEnd;
        }
        return super.uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uriEnd(uriEnd : number) {
        _assertNotResynthesized(this._unlinkedExportNonPublic);
        super.uriEnd = uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        if (this._unlinkedExportNonPublic != null) {
            return this._unlinkedExportNonPublic.uriOffset;
        }
        return super.uriOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uriOffset(uriOffset : number) {
        _assertNotResynthesized(this._unlinkedExportNonPublic);
        super.uriOffset = uriOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitExportElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write("export ");
        LibraryElementImpl.getImpl(this.exportedLibrary).appendTo(buffer);
    }
}

export namespace FunctionElementImpl {
    export type Constructors = ExecutableElementImpl.Constructors | 'FunctionElementImpl' | 'forNode' | 'forOffset' | 'forSerialized' | 'synthetic';
    export type Interface = Omit<FunctionElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionElementImpl extends ExecutableElementImpl implements any.Interface {
    _visibleRangeOffset : number;

    _visibleRangeLength : number;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionElementImpl(name : string,offset : number) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.ExecutableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.forNode(name);
    }
    static forNode : new(name : any) => FunctionElementImpl;

    @namedConstructor
    forOffset(nameOffset : number) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.ExecutableElementImpl("",nameOffset);
    }
    static forOffset : new(nameOffset : number) => FunctionElementImpl;

    @namedConstructor
    forSerialized(serializedExecutable : any,enclosingElement : ElementImpl) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.forSerialized(serializedExecutable,enclosingElement);
    }
    static forSerialized : new(serializedExecutable : any,enclosingElement : ElementImpl) => FunctionElementImpl;

    @namedConstructor
    synthetic(parameters : core.DartList<any>,returnType : any) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.ExecutableElementImpl("",-1);
        this.isSynthetic = true;
        this.returnType = returnType;
        this.parameters = parameters;
        this.type = new bare.createInstance(any,null,this);
    }
    static synthetic : new(parameters : core.DartList<any>,returnType : any) => FunctionElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return (this.enclosingElement as ElementImpl).typeParameterContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        let identifier : string = super.identifier;
        let enclosing : any = this.enclosingElement;
        if (is(enclosing, any)) {
            let id : number = ElementImpl.findElementIndexUsingIdentical(enclosing.functions,this);
            identifier += `@${id}`;
        }
        return identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEntryPoint() : boolean {
        return this.isStatic && this.displayName == FunctionElement.MAIN_FUNCTION_NAME;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return is(this.enclosingElement, any);
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
        if (this.serializedExecutable != null) {
            if (op(Op.EQUALS,this.serializedExecutable.visibleLength,0)) {
                return null;
            }
            return new bare.createInstance(any,null,this.serializedExecutable.visibleOffset,this.serializedExecutable.visibleLength);
        }
        if (this._visibleRangeLength < 0) {
            return null;
        }
        return new bare.createInstance(any,null,this._visibleRangeOffset,this._visibleRangeLength);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitFunctionElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        let name : string = this.displayName;
        if (name != null) {
            buffer.write(name);
        }
        super.appendTo(buffer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
    setVisibleRange(offset : number,length : number) : void {
        _assertNotResynthesized(this.serializedExecutable);
        this._visibleRangeOffset = offset;
        this._visibleRangeLength = length;
    }
    shareParameters(parameters : core.DartList<any>) : void {
        this._parameters = parameters;
    }
    shareTypeParameters(typeParameters : core.DartList<any>) : void {
        this._typeParameterElements = typeParameters;
    }
    static resynthesizeList(executableElement : ExecutableElementImpl,unlinkedFunctions : core.DartList<any>) : core.DartList<any> {
        let length : number = unlinkedFunctions.length;
        if (length != 0) {
            let elements : core.DartList<any> = new core.DartList<any>(length);
            for(let i : number = 0; i < length; i++){
                elements[i] = new FunctionElementImpl.forSerialized(unlinkedFunctions[i],executableElement);
            }
            return elements;
        }else {
            return new core.DartList.literal<any>();
        }
    }
}

export namespace ConstructorElementImpl {
    export type Constructors = ExecutableElementImpl.Constructors | 'ConstructorElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ConstructorElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConstructorElementImpl extends ExecutableElementImpl implements any.Interface {
    _redirectedConstructor : any;

    _constantInitializers : core.DartList<any>;

    _periodOffset : number;

    _nameEnd : number;

    _isCycleFree : boolean;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorElementImpl(name : string,offset : number) {
        this._isCycleFree = false;
        super.ExecutableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this._isCycleFree = false;
        super.forNode(name);
    }
    static forNode : new(name : any) => ConstructorElementImpl;

    @namedConstructor
    forSerialized(serializedExecutable : any,enclosingClass : ClassElementImpl) {
        this._isCycleFree = false;
        super.forSerialized(serializedExecutable,enclosingClass);
    }
    static forSerialized : new(serializedExecutable : any,enclosingClass : ClassElementImpl) => ConstructorElementImpl;

    get constantInitializers() : core.DartList<any> {
        if (this.serializedExecutable != null && this._constantInitializers == null) {
            this._constantInitializers = ( this._constantInitializers ) || ( this.serializedExecutable.constantInitializers.map((i : any) =>  {
                return this._buildConstructorInitializer(i);
            }).toList({
                growable : false}) );
        }
        return this._constantInitializers;
    }
    set constantInitializers(constantInitializers : core.DartList<any>) {
        _assertNotResynthesized(this.serializedExecutable);
        this._constantInitializers = constantInitializers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : ClassElementImpl {
        return super.enclosingElement as ClassElementImpl;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return super.enclosingElement as ClassElementImpl;
    }
    set factory(isFactory : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.FACTORY,isFactory);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isConst;
        }
        return this.hasModifier(Modifier.CONST);
    }
    set isConst(isConst : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.CONST,isConst);
    }
    get isCycleFree() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isConst && !enclosingUnit.resynthesizerContext.isInConstCycle(this.serializedExecutable.constCycleSlot);
        }
        return this._isCycleFree;
    }
    set isCycleFree(isCycleFree : boolean) {
        this._isCycleFree = isCycleFree;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDefaultConstructor() : boolean {
        let name : string = this.name;
        if (name != null && new core.DartString(name).length != 0) {
            return false;
        }
        for(let parameter of this.parameters) {
            if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.REQUIRED)) {
                return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFactory() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isFactory;
        }
        return this.hasModifier(Modifier.FACTORY);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return false;
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
        if (this.serializedExecutable != null) {
            if (this.serializedExecutable.name.isNotEmpty) {
                return this.serializedExecutable.nameEnd;
            }else {
                return op(Op.PLUS,this.serializedExecutable.nameOffset,new core.DartString(this.enclosingElement.name).length);
            }
        }
        return this._nameEnd;
    }
    set nameEnd(nameEnd : number) {
        _assertNotResynthesized(this.serializedExecutable);
        this._nameEnd = nameEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get periodOffset() : number {
        if (this.serializedExecutable != null) {
            if (this.serializedExecutable.name.isNotEmpty) {
                return this.serializedExecutable.periodOffset;
            }
        }
        return this._periodOffset;
    }
    set periodOffset(periodOffset : number) {
        _assertNotResynthesized(this.serializedExecutable);
        this._periodOffset = periodOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructor() : any {
        if (this.serializedExecutable != null && op(Op.EQUALS,this._redirectedConstructor,null)) {
            if (this.serializedExecutable.isRedirectedConstructor) {
                if (this.serializedExecutable.isFactory) {
                    this._redirectedConstructor = enclosingUnit.resynthesizerContext.resolveConstructorRef(this.enclosingElement,this.serializedExecutable.redirectedConstructor);
                }else {
                    this._redirectedConstructor = this.enclosingElement.getNamedConstructor(this.serializedExecutable.redirectedConstructorName);
                }
            }else {
                return null;
            }
        }
        return this._redirectedConstructor;
    }
    set redirectedConstructor(redirectedConstructor : any) {
        _assertNotResynthesized(this.serializedExecutable);
        this._redirectedConstructor = redirectedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this.enclosingElement.type;
    }
    set returnType(returnType : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type = ( this._type ) || ( new bare.createInstance(any,null,this) );
    }
    set type(type : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitConstructorElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        if (op(Op.EQUALS,this.enclosingElement,null)) {
            let message : string;
            let name : string = this.displayName;
            if (name != null && !new core.DartString(name).isEmpty) {
                message = `Found constructor element named ${name} with no enclosing element`;
            }else {
                message = 'Found unnamed constructor element with no enclosing element';
            }
            AnalysisEngine.instance.logger.logError(message);
            buffer.write('<unknown class>');
        }else {
            buffer.write(this.enclosingElement.displayName);
        }
        let name : string = this.displayName;
        if (name != null && !new core.DartString(name).isEmpty) {
            buffer.write(".");
            buffer.write(name);
        }
        super.appendTo(buffer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
    _buildConstructorInitializer(serialized : any) : any {
        let kind : any = serialized.kind;
        let name : string = serialized.name;
        let arguments : core.DartList<any> = new core.DartList.literal<any>();
        {
            let numArguments : number = serialized.arguments.length;
            let numNames : number = serialized.argumentNames.length;
            for(let i : number = 0; i < numArguments; i++){
                let expression : any = enclosingUnit.resynthesizerContext.buildExpression(this,op(Op.INDEX,serialized.arguments,i));
                let nameIndex : number = numNames + i - numArguments;
                if (nameIndex >= 0) {
                    expression = AstTestFactory.namedExpression2(op(Op.INDEX,serialized.argumentNames,nameIndex),expression);
                }
                arguments.add(expression);
            }
        }
        switch (kind) {
            case UnlinkedConstructorInitializerKind.field:
                let initializer : any = AstTestFactory.constructorFieldInitializer(false,name,enclosingUnit.resynthesizerContext.buildExpression(this,serialized.expression));
                initializer.fieldName.staticElement = this.enclosingElement.getField(name);
                return initializer;
            case UnlinkedConstructorInitializerKind.assertInvocation:
                return AstTestFactory.assertInitializer(arguments[0],arguments.length > 1 ? arguments[1] : null);
            case UnlinkedConstructorInitializerKind.superInvocation:
                let initializer : any = AstTestFactory.superConstructorInvocation2(new core.DartString(name).isNotEmpty ? name : null,arguments);
                let superElement : any = this.enclosingElement.supertype.element;
                let element : any = new core.DartString(name).isEmpty ? superElement.unnamedConstructor : superElement.getNamedConstructor(name);
                initializer.staticElement = element;
                ((t)=>(!!t)?t.staticElement:null)(initializer.constructorName) = element;
                return initializer;
            case UnlinkedConstructorInitializerKind.thisInvocation:
                let initializer : any = AstTestFactory.redirectingConstructorInvocation2(new core.DartString(name).isNotEmpty ? name : null,arguments);
                let element : any = new core.DartString(name).isEmpty ? this.enclosingElement.unnamedConstructor : this.enclosingElement.getNamedConstructor(name);
                initializer.staticElement = element;
                ((t)=>(!!t)?t.staticElement:null)(initializer.constructorName) = element;
                return initializer;
        }
        return null;
    }
}

export namespace ImportElementImpl {
    export type Constructors = UriReferencedElementImpl.Constructors | 'ImportElementImpl' | 'forSerialized';
    export type Interface = Omit<ImportElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ImportElementImpl extends UriReferencedElementImpl implements any.Interface {
    _unlinkedImport : any;

    _linkedDependency : number;

    _prefixOffset : number;

    _importedLibrary : any;

    _combinators : core.DartList<any>;

    _prefix : any;

    _selectedUri : string;

    constructor(offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImportElementImpl(offset : number) {
        this._prefixOffset = 0;
        this._unlinkedImport = null;
        this._linkedDependency = null;
        super.UriReferencedElementImpl(null,offset);
    }
    @namedConstructor
    forSerialized(_unlinkedImport : any,_linkedDependency : number,enclosingLibrary : LibraryElementImpl) {
        this._prefixOffset = 0;
        super.forSerialized(enclosingLibrary);
        this._unlinkedImport = _unlinkedImport;
        this._linkedDependency = _linkedDependency;
    }
    static forSerialized : new(_unlinkedImport : any,_linkedDependency : number,enclosingLibrary : LibraryElementImpl) => ImportElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : core.DartList<any> {
        if (this._unlinkedImport != null && this._combinators == null) {
            this._combinators = ImportElementImpl._buildCombinators(this._unlinkedImport.combinators);
        }
        return (this._combinators || new core.DartList.literal<any>());
    }
    set combinators(combinators : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedImport);
        this._combinators = combinators;
    }
    set deferred(isDeferred : boolean) {
        _assertNotResynthesized(this._unlinkedImport);
        this.setModifier(Modifier.DEFERRED,isDeferred);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return `${this.importedLibrary.identifier}@${this.nameOffset}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importedLibrary() : any {
        if (this._linkedDependency != null) {
            if (op(Op.EQUALS,this._importedLibrary,null)) {
                let library : LibraryElementImpl = this.enclosingElement as LibraryElementImpl;
                if (this._linkedDependency == 0) {
                    this._importedLibrary = library;
                }else {
                    this._importedLibrary = library.resynthesizerContext.buildImportedLibrary(this._linkedDependency);
                }
            }
        }
        return this._importedLibrary;
    }
    set importedLibrary(importedLibrary : any) {
        _assertNotResynthesized(this._unlinkedImport);
        this._importedLibrary = importedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeferred() : boolean {
        if (this._unlinkedImport != null) {
            return this._unlinkedImport.isDeferred;
        }
        return this.hasModifier(Modifier.DEFERRED);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        if (this._unlinkedImport != null) {
            return this._unlinkedImport.isImplicit;
        }
        return super.isSynthetic;
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
    get metadata() : core.DartList<any> {
        if (this._unlinkedImport != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.library.definingCompilationUnit as CompilationUnitElementImpl,this._unlinkedImport.annotations) );
        }
        return super.metadata;
    }
    set metadata(metadata : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedImport);
        super.metadata = metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedImport != null) {
            if (this._unlinkedImport.isImplicit) {
                return -1;
            }
            return this._unlinkedImport.offset;
        }
        return offset;
    }
    get prefix() : any {
        if (this._unlinkedImport != null) {
            if (this._unlinkedImport.prefixReference != 0 && op(Op.EQUALS,this._prefix,null)) {
                let library : LibraryElementImpl = this.enclosingElement as LibraryElementImpl;
                this._prefix = new PrefixElementImpl.forSerialized(this._unlinkedImport,library);
            }
        }
        return this._prefix;
    }
    set prefix(prefix : any) {
        _assertNotResynthesized(this._unlinkedImport);
        this._prefix = prefix;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefixOffset() : number {
        if (this._unlinkedImport != null) {
            return this._unlinkedImport.prefixOffset;
        }
        return this._prefixOffset;
    }
    set prefixOffset(prefixOffset : number) {
        _assertNotResynthesized(this._unlinkedImport);
        this._prefixOffset = prefixOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : string {
        if (this._unlinkedImport != null) {
            if (this._unlinkedImport.isImplicit) {
                return null;
            }
            return this._selectedUri = ( this._selectedUri ) || ( this._selectUri(this._unlinkedImport.uri,this._unlinkedImport.configurations) );
        }
        return super.uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uri(uri : string) {
        _assertNotResynthesized(this._unlinkedImport);
        super.uri = uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriEnd() : number {
        if (this._unlinkedImport != null) {
            if (this._unlinkedImport.isImplicit) {
                return -1;
            }
            return this._unlinkedImport.uriEnd;
        }
        return super.uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uriEnd(uriEnd : number) {
        _assertNotResynthesized(this._unlinkedImport);
        super.uriEnd = uriEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriOffset() : number {
        if (this._unlinkedImport != null) {
            if (this._unlinkedImport.isImplicit) {
                return -1;
            }
            return this._unlinkedImport.uriOffset;
        }
        return super.uriOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uriOffset(uriOffset : number) {
        _assertNotResynthesized(this._unlinkedImport);
        super.uriOffset = uriOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitImportElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write("import ");
        LibraryElementImpl.getImpl(this.importedLibrary).appendTo(buffer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_245_)=>(!!_245_)?_245_.accept(visitor):null)(this.prefix);
    }
    static _buildCombinators(unlinkedCombinators : core.DartList<any>) : core.DartList<any> {
        let length : number = unlinkedCombinators.length;
        if (length != 0) {
            let combinators : core.DartList<any> = new core.DartList<any>(length);
            for(let i : number = 0; i < length; i++){
                let unlinkedCombinator : any = unlinkedCombinators[i];
                combinators[i] = unlinkedCombinator.shows.isNotEmpty ? new ShowElementCombinatorImpl.forSerialized(unlinkedCombinator) : new HideElementCombinatorImpl.forSerialized(unlinkedCombinator);
            }
            return combinators;
        }else {
            return new core.DartList.literal<any>();
        }
    }
}

export namespace MethodElementImpl {
    export type Constructors = ExecutableElementImpl.Constructors | 'MethodElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<MethodElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MethodElementImpl extends ExecutableElementImpl implements any.Interface {
    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodElementImpl(name : string,offset : number) {
        super.ExecutableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => MethodElementImpl;

    @namedConstructor
    forSerialized(serializedExecutable : any,enclosingClass : ClassElementImpl) {
        super.forSerialized(serializedExecutable,enclosingClass);
    }
    static forSerialized : new(serializedExecutable : any,enclosingClass : ClassElementImpl) => MethodElementImpl;

    set abstract(isAbstract : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.ABSTRACT,isAbstract);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allEnclosingTypeParameterTypes() : core.DartList<any> {
        if (this.isStatic) {
            return new core.DartList.literal<any>();
        }
        return super.allEnclosingTypeParameterTypes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        let displayName : string = super.displayName;
        if ("unary-" == displayName) {
            return "-";
        }
        return displayName;
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
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return super.enclosingElement as ClassElementImpl;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOperator() : boolean {
        let name : string = this.displayName;
        if (new core.DartString(name).isEmpty) {
            return false;
        }
        let first : number = new core.DartString(name).codeUnitAt(0);
        return !((97 <= first && first <= 122) || (65 <= first && first <= 90) || first == 95 || first == 36);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isStatic;
        }
        return this.hasModifier(Modifier.STATIC);
    }
    set isStatic(isStatic : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.STATIC,isStatic);
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
    get name() : string {
        let name : string = super.name;
        if (name == '-' && this.parameters.isEmpty) {
            return 'unary-';
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitMethodElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write(this.displayName);
        super.appendTo(buffer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getReifiedType(objectType : any) : any {
        let hasCovariant : boolean = false;
        for(let parameter of this.parameters) {
            if (parameter.isCovariant) {
                hasCovariant = true;
                break;
            }
        }
        if (!hasCovariant) {
            return this.type;
        }
        let covariantParameters : core.DartList<any> = this.parameters.map((parameter : any) =>  {
            let type : any = parameter.isCovariant ? objectType : parameter.type;
            return new ParameterElementImpl.synthetic(parameter.name,objectType,parameter.parameterKind);
        }).toList();
        return new FunctionElementImpl.synthetic(covariantParameters,this.returnType).type;
    }
}

export namespace ClassElementImpl {
    export type Constructors = AbstractClassElementImpl.Constructors | 'ClassElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ClassElementImpl, Constructors>;
}
@DartClass
@With(TypeParameterizedElementMixin)
export class ClassElementImpl extends AbstractClassElementImpl implements TypeParameterizedElementMixin.Interface {
    @Abstract
    getTypeParameterType(index : number) : any {
        throw 'from mixin';
    }
    @Abstract
    isTypeParameterInScope(typeParameter : any) : boolean {
        throw 'from mixin';
    }
    _unlinkedClass : any;

    _supertype : any;

    _type : any;

    _mixins : core.DartList<any>;

    _interfaces : core.DartList<any>;

    _constructors : core.DartList<any>;

    _methods : core.DartList<any>;

    _hasBeenInferred : boolean;

    version : number;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassElementImpl(name : string,offset : number) {
        this._hasBeenInferred = false;
        this.version = 0;
        this._unlinkedClass = null;
        super.AbstractClassElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this._hasBeenInferred = false;
        this.version = 0;
        this._unlinkedClass = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => ClassElementImpl;

    @namedConstructor
    forSerialized(_unlinkedClass : any,enclosingUnit : CompilationUnitElementImpl) {
        this._hasBeenInferred = false;
        this.version = 0;
        super.forSerialized(enclosingUnit);
        this._unlinkedClass = _unlinkedClass;
    }
    static forSerialized : new(_unlinkedClass : any,enclosingUnit : CompilationUnitElementImpl) => ClassElementImpl;

    set abstract(isAbstract : boolean) {
        _assertNotResynthesized(this._unlinkedClass);
        this.setModifier(Modifier.ABSTRACT,isAbstract);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<any> {
        if (this._unlinkedClass != null && this._accessors == null) {
            this._resynthesizeFieldsAndPropertyAccessors();
        }
        return (this._accessors || new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set accessors(accessors : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedClass);
        super.accessors = accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allSupertypes() : core.DartList<any> {
        let list : core.DartList<any> = new core.DartList<any>();
        this._collectAllSupertypes(list);
        return list;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedClass != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedClass.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedClass != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedClass.codeRange);
        }
        return super.codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructors() : core.DartList<any> {
        if (this.isMixinApplication) {
            return this._computeMixinAppConstructors();
        }
        if (this._unlinkedClass != null && this._constructors == null) {
            this._constructors = this._unlinkedClass.executables.where((e : any) =>  {
                return op(Op.EQUALS,e.kind,UnlinkedExecutableKind.constructor);
            }).map((e : any) =>  {
                return new ConstructorElementImpl.forSerialized(e,this);
            }).toList({
                growable : false});
            if (this._constructors.isEmpty) {
                let constructor : ConstructorElementImpl = new ConstructorElementImpl('',-1);
                constructor.isSynthetic = true;
                constructor.enclosingElement = this;
                this._constructors = new core.DartList.literal<any>(constructor);
            }
        }
        /* TODO (AssertStatementImpl) : assert (_constructors != null); */;
        return (this._constructors || new core.DartList.literal<any>());
    }
    set constructors(constructors : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedClass);
        /* TODO (AssertStatementImpl) : assert (!isMixinApplication); */;
        for(let constructor of constructors) {
            (constructor as ConstructorElementImpl).enclosingElement = this;
        }
        this._constructors = constructors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this._unlinkedClass != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.documentationComment:null)(this._unlinkedClass));
        }
        return super.documentationComment;
    }
    get doesMixinLackConstructors() : boolean {
        if (!this.isMixinApplication && this.mixins.isEmpty) {
            return false;
        }
        if (op(Op.EQUALS,this.supertype,null)) {
            /* TODO (AssertStatementImpl) : assert (false); */;
            return false;
        }
        let nearestNonMixinClass : any = this.supertype.element;
        if (nearestNonMixinClass.isMixinApplication) {
            let classesSeen : core.DartList<any> = new core.DartList.literal<any>(this);
            while (nearestNonMixinClass.isMixinApplication){
                if (classesSeen.contains(nearestNonMixinClass)) {
                    return false;
                }
                classesSeen.add(nearestNonMixinClass);
                if (op(Op.EQUALS,nearestNonMixinClass.supertype,null)) {
                    /* TODO (AssertStatementImpl) : assert (false); */;
                    return false;
                }
                nearestNonMixinClass = nearestNonMixinClass.supertype.element;
            }
        }
        return !nearestNonMixinClass.constructors.any(this.isSuperConstructorAccessible.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<any> {
        if (this._unlinkedClass != null && this._fields == null) {
            this._resynthesizeFieldsAndPropertyAccessors();
        }
        return (this._fields || new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set fields(fields : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedClass);
        super.fields = fields;
    }
    get hasBeenInferred() : boolean {
        if (this._unlinkedClass != null) {
            return this.context.analysisOptions.strongMode;
        }
        return this._hasBeenInferred;
    }
    set hasBeenInferred(hasBeenInferred : boolean) {
        _assertNotResynthesized(this._unlinkedClass);
        this._hasBeenInferred = hasBeenInferred;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasNonFinalField() : boolean {
        let classesToVisit : core.DartList<any> = new core.DartList<any>();
        let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
        classesToVisit.add(this);
        while (!classesToVisit.isEmpty){
            let currentElement : any = classesToVisit.removeAt(0);
            if (visitedClasses.add(currentElement)) {
                for(let field of currentElement.fields) {
                    if (!field.isFinal && !field.isConst && !field.isStatic && !field.isSynthetic) {
                        return true;
                    }
                }
                for(let mixinType of currentElement.mixins) {
                    let mixinElement : any = mixinType.element;
                    classesToVisit.add(mixinElement);
                }
                let supertype : any = currentElement.supertype;
                if (supertype != null) {
                    let superElement : any = supertype.element;
                    if (superElement != null) {
                        classesToVisit.add(superElement);
                    }
                }
            }
        }
        return false;
    }
    get hasNoSuchMethod() : boolean {
        let method : any = this.lookUpMethod(FunctionElement.NO_SUCH_METHOD_METHOD_NAME,this.library);
        let definingClass : any = ((t)=>(!!t)?t.enclosingElement:null)(method);
        return definingClass != null && !definingClass.type.isObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasReferenceToSuper() : boolean {
        return this.hasModifier(Modifier.REFERENCES_SUPER);
    }
    set hasReferenceToSuper(isReferencedSuper : boolean) {
        this.setModifier(Modifier.REFERENCES_SUPER,isReferencedSuper);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasStaticMember() : boolean {
        for(let method of this.methods) {
            if (method.isStatic) {
                return true;
            }
        }
        for(let accessor of this.accessors) {
            if (accessor.isStatic) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<any> {
        if (this._unlinkedClass != null && this._interfaces == null) {
            let context : ResynthesizerContext = enclosingUnit.resynthesizerContext;
            this._interfaces = this._unlinkedClass.interfaces.map((t : any) =>  {
                return context.resolveTypeRef(this,t);
            }).where(ClassElementImpl._isClassInterfaceType.bind(this)).toList({
                growable : false});
        }
        return (this._interfaces || new core.DartList.literal<any>());
    }
    set interfaces(interfaces : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedClass);
        this._interfaces = interfaces;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        if (this._unlinkedClass != null) {
            return this._unlinkedClass.isAbstract;
        }
        return this.hasModifier(Modifier.ABSTRACT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnum() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMixinApplication() : boolean {
        if (this._unlinkedClass != null) {
            return this._unlinkedClass.isMixinApplication;
        }
        return this.hasModifier(Modifier.MIXIN_APPLICATION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOrInheritsProxy() : boolean {
        return this._safeIsOrInheritsProxy(this,new core.DartHashSet<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isProxy() : boolean {
        for(let annotation of this.metadata) {
            if (annotation.isProxy) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isValidMixin() : boolean {
        if (!this.context.analysisOptions.enableSuperMixins) {
            if (this.hasReferenceToSuper) {
                return false;
            }
            if (!this.supertype.isObject) {
                return false;
            }
        }
        for(let constructor of this.constructors) {
            if (!constructor.isSynthetic && !constructor.isFactory) {
                return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        if (this._unlinkedClass != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(enclosingUnit,this._unlinkedClass.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methods() : core.DartList<any> {
        if (this._unlinkedClass != null) {
            this._methods = ( this._methods ) || ( this._unlinkedClass.executables.where((e : any) =>  {
                return op(Op.EQUALS,e.kind,UnlinkedExecutableKind.functionOrMethod);
            }).map((e : any) =>  {
                return new MethodElementImpl.forSerialized(e,this);
            }).toList({
                growable : false}) );
        }
        return (this._methods || new core.DartList.literal<any>());
    }
    set methods(methods : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedClass);
        for(let method of methods) {
            (method as MethodElementImpl).enclosingElement = this;
        }
        this._methods = methods;
    }
    set mixinApplication(isMixinApplication : boolean) {
        _assertNotResynthesized(this._unlinkedClass);
        this.setModifier(Modifier.MIXIN_APPLICATION,isMixinApplication);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<any> {
        if (this._unlinkedClass != null && this._mixins == null) {
            let context : ResynthesizerContext = enclosingUnit.resynthesizerContext;
            this._mixins = this._unlinkedClass.mixins.map((t : any) =>  {
                return context.resolveTypeRef(this,t);
            }).where(ClassElementImpl._isClassInterfaceType.bind(this)).toList({
                growable : false});
        }
        return (this._mixins || new core.DartList.literal<any>());
    }
    set mixins(mixins : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedClass);
        this._mixins = mixins;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedClass != null) {
            return this._unlinkedClass.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedClass != null) {
            return this._unlinkedClass.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get supertype() : any {
        if (this._unlinkedClass != null && op(Op.EQUALS,this._supertype,null)) {
            if (this._unlinkedClass.supertype != null) {
                let type : any = enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._unlinkedClass.supertype);
                if (ClassElementImpl._isClassInterfaceType(type)) {
                    this._supertype = type;
                }else {
                    this._supertype = this.context.typeProvider.objectType;
                }
            }else if (this._unlinkedClass.hasNoSupertype) {
                return null;
            }else {
                this._supertype = this.context.typeProvider.objectType;
            }
        }
        return this._supertype;
    }
    set supertype(supertype : any) {
        _assertNotResynthesized(this._unlinkedClass);
        this._supertype = supertype;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (op(Op.EQUALS,this._type,null)) {
            let type : any = new bare.createInstance(any,null,this);
            type.typeArguments = this.typeParameterTypes;
            this._type = type;
        }
        return this._type;
    }
    set typeParameters(typeParameters : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedClass);
        for(let typeParameter of typeParameters) {
            (typeParameter as TypeParameterElementImpl).enclosingElement = this;
        }
        this._typeParameterElements = typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return ((t)=>(!!t)?t.typeParameters:null)(this._unlinkedClass);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unnamedConstructor() : any {
        for(let element of this.constructors) {
            let name : string = element.displayName;
            if (name == null || new core.DartString(name).isEmpty) {
                return element;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        if (this.isAbstract) {
            buffer.write('abstract ');
        }
        buffer.write('class ');
        let name : string = this.displayName;
        if (name == null) {
            buffer.write("{unnamed class}");
        }else {
            buffer.write(name);
        }
        let variableCount : number = typeParameters.length;
        if (variableCount > 0) {
            buffer.write("<");
            for(let i : number = 0; i < variableCount; i++){
                if (i > 0) {
                    buffer.write(", ");
                }
                (typeParameters[i] as TypeParameterElementImpl).appendTo(buffer);
            }
            buffer.write(">");
        }
        if (this.supertype != null && !this.supertype.isObject) {
            buffer.write(' extends ');
            buffer.write(this.supertype.displayName);
        }
        if (this.mixins.isNotEmpty) {
            buffer.write(' with ');
            buffer.write(this.mixins.map((t : any) =>  {
                return t.displayName;
            }).join(', '));
        }
        if (this.interfaces.isNotEmpty) {
            buffer.write(' implements ');
            buffer.write(this.interfaces.map((t : any) =>  {
                return t.displayName;
            }).join(', '));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        let child : ElementImpl = super.getChild(identifier);
        if (child != null) {
            return child;
        }
        for(let constructor of this._constructors) {
            let constructorImpl : ConstructorElementImpl = constructor;
            if (constructorImpl.identifier == identifier) {
                return constructorImpl;
            }
        }
        for(let method of this.methods) {
            let methodImpl : MethodElementImpl = method;
            if (methodImpl.identifier == identifier) {
                return methodImpl;
            }
        }
        for(let typeParameter of typeParameters) {
            let typeParameterImpl : TypeParameterElementImpl = typeParameter;
            if (typeParameterImpl.identifier == identifier) {
                return typeParameterImpl;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMethod(methodName : string) : any {
        let length : number = this.methods.length;
        for(let i : number = 0; i < length; i++){
            let method : any = this.methods[i];
            if (op(Op.EQUALS,method.name,methodName)) {
                return method;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNamedConstructor(name : string) : any {
        for(let element of this.constructors) {
            let elementName : string = element.name;
            if (elementName != null && elementName == name) {
                return element;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSuperConstructorAccessible(constructor : any) : boolean {
        if (this.mixins.isEmpty) {
            return true;
        }
        for(let parameter of constructor.parameters) {
            if (parameter.parameterKind != ParameterKind.REQUIRED) {
                return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.safelyVisitChildren(this.constructors,visitor);
        this.safelyVisitChildren(this.methods,visitor);
        this.safelyVisitChildren(typeParameters,visitor);
    }
    _collectAllSupertypes(supertypes : core.DartList<any>) : void {
        let typesToVisit : core.DartList<any> = new core.DartList<any>();
        let visitedClasses : core.DartList<any> = new core.DartList<any>();
        typesToVisit.add(this.type);
        while (!typesToVisit.isEmpty){
            let currentType : any = typesToVisit.removeAt(0);
            let currentElement : any = currentType.element;
            if (!visitedClasses.contains(currentElement)) {
                visitedClasses.add(currentElement);
                if (!core.identical(currentType,this.type)) {
                    supertypes.add(currentType);
                }
                let supertype : any = currentType.superclass;
                if (supertype != null) {
                    typesToVisit.add(supertype);
                }
                for(let type of currentElement.interfaces) {
                    typesToVisit.add(type);
                }
                for(let type of currentElement.mixins) {
                    let element : any = type.element;
                    if (!visitedClasses.contains(element)) {
                        supertypes.add(type);
                    }
                }
            }
        }
    }
    _computeMixinAppConstructors(visitedClasses? : core.DartList<ClassElementImpl>) : core.DartList<any> {
        visitedClasses = visitedClasses || null;
        let constructorsToForward : core.DartIterable<any>;
        if (op(Op.EQUALS,this.supertype,null)) {
            /* TODO (AssertStatementImpl) : assert (false); */;
            constructorsToForward = new core.DartList.literal<any>();
        }else if (!this.supertype.element.isMixinApplication) {
            let superclassConstructors : core.DartList<any> = this.supertype.element.constructors;
            constructorsToForward = superclassConstructors.where(this.isSuperConstructorAccessible.bind(this));
        }else {
            if (visitedClasses == null) {
                visitedClasses = new core.DartList.literal<ClassElementImpl>(this);
            }else {
                if (visitedClasses.contains(this)) {
                    return new core.DartList.literal<any>();
                }
                visitedClasses.add(this);
            }
            try {
                let superElement : ClassElementImpl = AbstractClassElementImpl.getImpl(this.supertype.element) as ClassElementImpl;
                constructorsToForward = superElement._computeMixinAppConstructors(visitedClasses);
            } finally {
                visitedClasses.removeLast();
            }
        }
        let parameterTypes : core.DartList<any> = TypeParameterTypeImpl.getTypes(this.supertype.typeParameters);
        let argumentTypes : core.DartList<any> = new core.DartList.filled(parameterTypes.length,DynamicTypeImpl.instance);
        for(let i : number = 0; i < this.supertype.typeArguments.length; i++){
            if (i >= argumentTypes.length) {
                break;
            }
            argumentTypes[i] = op(Op.INDEX,this.supertype.typeArguments,i);
        }
        return constructorsToForward.map((superclassConstructor : any) =>  {
            let implicitConstructor : ConstructorElementImpl = new ConstructorElementImpl(superclassConstructor.name,-1);
            implicitConstructor.isSynthetic = true;
            implicitConstructor.redirectedConstructor = superclassConstructor;
            let superParameters : core.DartList<any> = superclassConstructor.parameters;
            let count : number = superParameters.length;
            if (count > 0) {
                let implicitParameters : core.DartList<any> = new core.DartList<any>(count);
                for(let i : number = 0; i < count; i++){
                    let superParameter : any = superParameters[i];
                    let implicitParameter : ParameterElementImpl = new ParameterElementImpl(superParameter.name,-1);
                    implicitParameter.isConst = superParameter.isConst;
                    implicitParameter.isFinal = superParameter.isFinal;
                    implicitParameter.parameterKind = superParameter.parameterKind;
                    implicitParameter.isSynthetic = true;
                    implicitParameter.type = superParameter.type.substitute2(argumentTypes,parameterTypes);
                    implicitParameters[i] = implicitParameter;
                }
                implicitConstructor.parameters = implicitParameters;
            }
            implicitConstructor.enclosingElement = this;
            return implicitConstructor;
        }).toList({
            growable : false});
    }
    _resynthesizeFieldsAndPropertyAccessors() : void {
        /* TODO (AssertStatementImpl) : assert (_fields == null); */;
        /* TODO (AssertStatementImpl) : assert (_accessors == null); */;
        let explicitFields = new core.DartList.literal<any>();
        let implicitAccessors = new core.DartList.literal<any>();
        for(let v of this._unlinkedClass.fields) {
            let field : FieldElementImpl = new FieldElementImpl.forSerializedFactory(v,this);
            explicitFields.add(field);
            implicitAccessors.add(((_) : PropertyAccessorElementImpl_ImplicitGetter =>  {
                {
                    _.enclosingElement = this;
                    return _;
                }
            })(new PropertyAccessorElementImpl_ImplicitGetter(field)));
            if (!field.isConst && !field.isFinal) {
                implicitAccessors.add(((_) : PropertyAccessorElementImpl_ImplicitSetter =>  {
                    {
                        _.enclosingElement = this;
                        return _;
                    }
                })(new PropertyAccessorElementImpl_ImplicitSetter(field)));
            }
        }
        let explicitAccessors = new core.DartList.literal<any>();
        let implicitFields = new core.DartMap.literal([
        ]);
        for(let e of this._unlinkedClass.executables) {
            if (op(Op.EQUALS,e.kind,UnlinkedExecutableKind.getter) || op(Op.EQUALS,e.kind,UnlinkedExecutableKind.setter)) {
                let accessor : PropertyAccessorElementImpl = new PropertyAccessorElementImpl.forSerialized(e,this);
                explicitAccessors.add(accessor);
                let fieldName : string = accessor.displayName;
                let field : FieldElementImpl = implicitFields.get(fieldName);
                if (op(Op.EQUALS,field,null)) {
                    field = new FieldElementImpl(fieldName,-1);
                    implicitFields.set(fieldName,field);
                    field.enclosingElement = this;
                    field.isSynthetic = true;
                    field.isFinal = op(Op.EQUALS,e.kind,UnlinkedExecutableKind.getter);
                    field.isStatic = e.isStatic;
                }else {
                    field.isFinal = false;
                }
                accessor.variable = field;
                if (op(Op.EQUALS,e.kind,UnlinkedExecutableKind.getter)) {
                    field.getter = accessor;
                }else {
                    field.setter = accessor;
                }
            }
        }
        this._fields = ((_) : core.DartList<any> =>  {
            {
                _.addAll(explicitFields);
                _.addAll(implicitFields.values);
                return _;
            }
        })(new core.DartList.literal<any>());
        this._accessors = ((_) : core.DartList<any> =>  {
            {
                _.addAll(explicitAccessors);
                _.addAll(implicitAccessors);
                return _;
            }
        })(new core.DartList.literal<any>());
    }
    _safeIsOrInheritsProxy(element : any,visited : core.DartHashSet<any>) : boolean {
        if (visited.contains(element)) {
            return false;
        }
        visited.add(element);
        if (element.isProxy) {
            return true;
        }else if (element.supertype != null && this._safeIsOrInheritsProxy(element.supertype.element,visited)) {
            return true;
        }
        let supertypes : core.DartList<any> = element.interfaces;
        for(let i : number = 0; i < supertypes.length; i++){
            if (this._safeIsOrInheritsProxy(supertypes[i].element,visited)) {
                return true;
            }
        }
        supertypes = element.mixins;
        for(let i : number = 0; i < supertypes.length; i++){
            if (this._safeIsOrInheritsProxy(supertypes[i].element,visited)) {
                return true;
            }
        }
        return false;
    }
    static _isClassInterfaceType(type : any) : boolean {
        return is(type, any) && !type.element.isEnum;
    }
}

export namespace CompilationUnitElementImpl {
    export type Constructors = UriReferencedElementImpl.Constructors | 'CompilationUnitElementImpl' | 'forSerialized';
    export type Interface = Omit<CompilationUnitElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CompilationUnitElementImpl extends UriReferencedElementImpl implements any.Interface {
    resynthesizerContext : ResynthesizerContext;

    _unlinkedUnit : any;

    _unlinkedPart : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lineInfo : any;

    librarySource : any;

    annotationMap : core.DartMap<number,core.DartList<any>>;

    _accessors : core.DartList<any>;

    _enums : core.DartList<any>;

    _functions : core.DartList<any>;

    _typeAliases : core.DartList<any>;

    _types : core.DartList<any>;

    _variables : core.DartList<any>;

    _offsetToElementMap : core.DartMap<number,any>;

    _explicitTopLevelAccessors : UnitExplicitTopLevelAccessors;

    _explicitTopLevelVariables : UnitExplicitTopLevelVariables;

    _topLevelVariableReplaceMap : core.DartMap<any,any>;

    constructor(name : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitElementImpl(name : string) {
        this.annotationMap = null;
        this._offsetToElementMap = new core.DartHashMap<number,any>();
        this.resynthesizerContext = null;
        this._unlinkedUnit = null;
        this._unlinkedPart = null;
        super.UriReferencedElementImpl(name,-1);
    }
    @namedConstructor
    forSerialized(enclosingLibrary : LibraryElementImpl,resynthesizerContext : ResynthesizerContext,_unlinkedUnit : any,_unlinkedPart : any,name : string) {
        this.annotationMap = null;
        this._offsetToElementMap = new core.DartHashMap<number,any>();
        super.forSerialized(null);
        this.resynthesizerContext = resynthesizerContext;
        this._unlinkedUnit = _unlinkedUnit;
        this._unlinkedPart = _unlinkedPart;
        this._enclosingElement = enclosingLibrary;
        this._name = name;
        this._nameOffset = -1;
    }
    static forSerialized : new(enclosingLibrary : LibraryElementImpl,resynthesizerContext : ResynthesizerContext,_unlinkedUnit : any,_unlinkedPart : any,name : string) => CompilationUnitElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<any> {
        if (this._unlinkedUnit != null) {
            if (this._accessors == null) {
                this._explicitTopLevelAccessors = ( this._explicitTopLevelAccessors ) || ( this.resynthesizerContext.buildTopLevelAccessors() );
                this._explicitTopLevelVariables = ( this._explicitTopLevelVariables ) || ( this.resynthesizerContext.buildTopLevelVariables() );
                let accessors : core.DartList<PropertyAccessorElementImpl> = new core.DartList.literal<PropertyAccessorElementImpl>();
                accessors.addAll(this._explicitTopLevelAccessors.accessors);
                accessors.addAll(this._explicitTopLevelVariables.implicitAccessors);
                this._accessors = accessors;
            }
        }
        return (this._accessors || PropertyAccessorElement.EMPTY_LIST);
    }
    set accessors(accessors : core.DartList<any>) {
        for(let accessor of accessors) {
            (accessor as PropertyAccessorElementImpl).enclosingElement = this;
        }
        this._accessors = accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedUnit != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedUnit.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedUnit != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedUnit.codeRange);
        }
        return super.codeOffset;
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
    get enclosingUnit() : CompilationUnitElementImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enums() : core.DartList<any> {
        if (this._unlinkedUnit != null) {
            this._enums = ( this._enums ) || ( this._unlinkedUnit.enums.map((e : any) =>  {
                return new EnumElementImpl.forSerialized(e,this);
            }).toList({
                growable : false}) );
        }
        return (this._enums || new core.DartList.literal<any>());
    }
    set enums(enums : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedUnit);
        for(let enumDeclaration of enums) {
            (enumDeclaration as EnumElementImpl).enclosingElement = this;
        }
        this._enums = enums;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<any> {
        if (this._unlinkedUnit != null) {
            this._functions = ( this._functions ) || ( this._unlinkedUnit.executables.where((e : any) =>  {
                return op(Op.EQUALS,e.kind,UnlinkedExecutableKind.functionOrMethod);
            }).map((e : any) =>  {
                return new FunctionElementImpl.forSerialized(e,this);
            }).toList({
                growable : false}) );
        }
        return (this._functions || new core.DartList.literal<any>());
    }
    set functions(functions : core.DartList<any>) {
        for(let function of functions) {
            (function as FunctionElementImpl).enclosingElement = this;
        }
        this._functions = functions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionTypeAliases() : core.DartList<any> {
        if (this._unlinkedUnit != null) {
            this._typeAliases = ( this._typeAliases ) || ( this._unlinkedUnit.typedefs.map((t : any) =>  {
                if (op(Op.EQUALS,t.style,TypedefStyle.functionType)) {
                    return new FunctionTypeAliasElementImpl.forSerialized(t,this);
                }else if (op(Op.EQUALS,t.style,TypedefStyle.genericFunctionType)) {
                    return new GenericTypeAliasElementImpl.forSerialized(t,this);
                }
            }).toList({
                growable : false}) );
        }
        return (this._typeAliases || new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.source.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasLoadLibraryFunction() : boolean {
        let functions : core.DartList<any> = this.functions;
        for(let i : number = 0; i < functions.length; i++){
            if (op(Op.EQUALS,functions[i].name,FunctionElement.LOAD_LIBRARY_NAME)) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this.source.encoding;
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
    get metadata() : core.DartList<any> {
        if (this._unlinkedPart != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.library.definingCompilationUnit as CompilationUnitElementImpl,this._unlinkedPart.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get topLevelVariables() : core.DartList<any> {
        if (this._unlinkedUnit != null) {
            if (this._variables == null) {
                this._explicitTopLevelAccessors = ( this._explicitTopLevelAccessors ) || ( this.resynthesizerContext.buildTopLevelAccessors() );
                this._explicitTopLevelVariables = ( this._explicitTopLevelVariables ) || ( this.resynthesizerContext.buildTopLevelVariables() );
                let variables : core.DartList<TopLevelVariableElementImpl> = new core.DartList.literal<TopLevelVariableElementImpl>();
                variables.addAll(this._explicitTopLevelVariables.variables);
                variables.addAll(this._explicitTopLevelAccessors.implicitVariables);
                (this.enclosingElement as LibraryElementImpl).resynthesizerContext.patchTopLevelAccessors();
                this._variables = variables;
                ((_240_)=>(!!_240_)?_240_.forEach((from : any,to : any) =>  {
                    let index : number = this._variables.indexOf(from);
                    this._variables[index] = to;
                }):null)(this._topLevelVariableReplaceMap);
                this._topLevelVariableReplaceMap = null;
            }
        }
        return (this._variables || TopLevelVariableElement.EMPTY_LIST);
    }
    set topLevelVariables(variables : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (!isResynthesized); */;
        for(let field of variables) {
            (field as TopLevelVariableElementImpl).enclosingElement = this;
        }
        this._variables = variables;
    }
    set typeAliases(typeAliases : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedUnit);
        for(let typeAlias of typeAliases) {
            (typeAlias as ElementImpl).enclosingElement = this;
        }
        this._typeAliases = typeAliases;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameterContext() : TypeParameterizedElementMixin {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get types() : core.DartList<any> {
        if (this._unlinkedUnit != null) {
            this._types = ( this._types ) || ( this._unlinkedUnit.classes.map((c : any) =>  {
                return new ClassElementImpl.forSerialized(c,this);
            }).toList({
                growable : false}) );
        }
        return (this._types || new core.DartList.literal<any>());
    }
    set types(types : core.DartList<any>) {
        _assertNotResynthesized(this._unlinkedUnit);
        for(let type of types) {
            if (is(type, ClassElementImpl)) {
                type.enclosingElement = this;
            }
        }
        this._types = types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, CompilationUnitElementImpl) && op(Op.EQUALS,this.source,object.source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitCompilationUnitElement(this);
    }
    afterIncrementalResolution() : void {
        this._offsetToElementMap.clear();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        if (op(Op.EQUALS,this.source,null)) {
            buffer.write("{compilation unit}");
        }else {
            buffer.write(this.source.fullName);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.unit;
    }
    getAnnotations(offset : number) : core.DartList<any> {
        if (this.annotationMap == null) {
            return new core.DartList.literal<any>();
        }
        return (this.annotationMap.get(offset) || new core.DartList.literal<any>());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        for(let accessor of this.accessors) {
            let accessorImpl : PropertyAccessorElementImpl = accessor;
            if (accessorImpl.identifier == identifier) {
                return accessorImpl;
            }
        }
        for(let variable of this.topLevelVariables) {
            let variableImpl : TopLevelVariableElementImpl = variable;
            if (variableImpl.identifier == identifier) {
                return variableImpl;
            }
        }
        for(let function of this.functions) {
            let functionImpl : FunctionElementImpl = function;
            if (functionImpl.identifier == identifier) {
                return functionImpl;
            }
        }
        for(let typeAlias of this.functionTypeAliases) {
            let typeAliasImpl : FunctionTypeAliasElementImpl = typeAlias;
            if (typeAliasImpl.identifier == identifier) {
                return typeAliasImpl;
            }
        }
        for(let type of this.types) {
            let typeImpl : ClassElementImpl = type;
            if (typeImpl.name == identifier) {
                return typeImpl;
            }
        }
        for(let type of this._enums) {
            let typeImpl : EnumElementImpl = type;
            if (typeImpl.identifier == identifier) {
                return typeImpl;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getElementAt(offset : number) : any {
        if (this._offsetToElementMap.isEmpty) {
            this.accept(new _BuildOffsetToElementMap(this._offsetToElementMap));
        }
        return this._offsetToElementMap.get(offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getEnum(enumName : string) : any {
        for(let enumDeclaration of this._enums) {
            if (op(Op.EQUALS,enumDeclaration.name,enumName)) {
                return enumDeclaration;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getType(className : string) : any {
        for(let type of this.types) {
            if (op(Op.EQUALS,type.name,className)) {
                return type;
            }
        }
        return null;
    }
    replaceTopLevelVariable(from : any,to : any) : void {
        if (this._unlinkedUnit != null) {
            /* TODO (AssertStatementImpl) : assert (_variables == null); */;
            this._topLevelVariableReplaceMap = ( this._topLevelVariableReplaceMap ) || ( new core.DartMap.literal([
            ]) );
            this._topLevelVariableReplaceMap.set(from,to);
        }else {
            let index : number = this._variables.indexOf(from);
            this._variables[index] = to;
        }
    }
    setAnnotations(offset : number,annotations : core.DartList<any>) : void {
        this.annotationMap = ( this.annotationMap ) || ( new core.DartHashMap<number,core.DartList<any>>() );
        this.annotationMap.set(offset,annotations);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.safelyVisitChildren(this.accessors,visitor);
        this.safelyVisitChildren(this.enums,visitor);
        this.safelyVisitChildren(this.functions,visitor);
        this.safelyVisitChildren(this.functionTypeAliases,visitor);
        this.safelyVisitChildren(this.types,visitor);
        this.safelyVisitChildren(this.topLevelVariables,visitor);
    }
}

export namespace NonParameterVariableElementImpl {
    export type Constructors = VariableElementImpl.Constructors | 'NonParameterVariableElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<NonParameterVariableElementImpl, Constructors>;
}
@DartClass
export class NonParameterVariableElementImpl extends VariableElementImpl {
    _unlinkedVariable : any;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonParameterVariableElementImpl(name : string,offset : number) {
        this._unlinkedVariable = null;
        super.VariableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this._unlinkedVariable = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => NonParameterVariableElementImpl;

    @namedConstructor
    forSerialized(_unlinkedVariable : any,enclosingElement : ElementImpl) {
        super.forSerialized(enclosingElement);
        this._unlinkedVariable = _unlinkedVariable;
    }
    static forSerialized : new(_unlinkedVariable : any,enclosingElement : ElementImpl) => NonParameterVariableElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedVariable != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedVariable.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedVariable != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedVariable.codeRange);
        }
        return super.codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this._unlinkedVariable != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.documentationComment:null)(this._unlinkedVariable));
        }
        return super.documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitType() : boolean {
        if (this._unlinkedVariable != null) {
            return op(Op.EQUALS,this._unlinkedVariable.type,null);
        }
        return super.hasImplicitType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set hasImplicitType(hasImplicitType : boolean) {
        _assertNotResynthesized(this._unlinkedVariable);
        super.hasImplicitType = hasImplicitType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : any {
        if (this._unlinkedVariable != null && op(Op.EQUALS,this._initializer,null)) {
            let unlinkedInitializer : any = this._unlinkedVariable.initializer;
            if (unlinkedInitializer != null) {
                this._initializer = ((_) : FunctionElementImpl =>  {
                    {
                        _.isSynthetic = true;
                        return _;
                    }
                })(new FunctionElementImpl.forSerialized(unlinkedInitializer,this));
            }else {
                return null;
            }
        }
        return super.initializer;
    }
    set initializer(function : any) {
        _assertNotResynthesized(this._unlinkedVariable);
        super.initializer = function;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        if (this._unlinkedVariable != null) {
            return this._unlinkedVariable.isConst;
        }
        return super.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isConst(isConst : boolean) {
        _assertNotResynthesized(this._unlinkedVariable);
        super.isConst = isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        if (this._unlinkedVariable != null) {
            return this._unlinkedVariable.isFinal;
        }
        return super.isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isFinal(isFinal : boolean) {
        _assertNotResynthesized(this._unlinkedVariable);
        super.isFinal = isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : core.DartList<any> {
        if (this._unlinkedVariable != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.enclosingUnit,this._unlinkedVariable.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedVariable != null) {
            return this._unlinkedVariable.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedVariable != null) {
            return this._unlinkedVariable.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this._unlinkedVariable != null && op(Op.EQUALS,this._declaredType,null) && op(Op.EQUALS,this._type,null)) {
            this._type = this.enclosingUnit.resynthesizerContext.resolveLinkedType(this,this._unlinkedVariable.inferredTypeSlot);
            this.declaredType = this.enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._unlinkedVariable.type,{
                declaredType : true});
        }
        return super.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        _assertNotResynthesized(this._unlinkedVariable);
        this._type = this._checkElementOfType(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeInferenceError() : any {
        if (this._unlinkedVariable != null) {
            return this.enclosingUnit.resynthesizerContext.getTypeInferenceError(this._unlinkedVariable.inferredTypeSlot);
        }
        return null;
    }
    get _unlinkedConst() : any {
        return ((t)=>(!!t)?t.bodyExpr:null)(((t)=>(!!t)?t.initializer:null)(this._unlinkedVariable));
    }
}

export namespace ParameterElementImpl {
    export type Constructors = VariableElementImpl.Constructors | 'ParameterElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ParameterElementImpl, Constructors>;
}
@DartClass
@Implements(any)
@With(ParameterElementMixin)
export class ParameterElementImpl extends VariableElementImpl implements any.Interface,ParameterElementMixin.Interface {
    @Abstract
    appendToWithoutDelimiters(buffer : core.DartStringBuffer) : void {
        throw 'from mixin';
    }
    _unlinkedParam : any;

    _parameters : core.DartList<any>;

    _typeParameters : core.DartList<any>;

    _parameterKind : any;

    _defaultValueCode : string;

    _visibleRangeOffset : number;

    _visibleRangeLength : number;

    _inheritsCovariant : boolean;

    constructor(name : string,nameOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParameterElementImpl(name : string,nameOffset : number) {
        this._parameters = ParameterElement.EMPTY_LIST;
        this._typeParameters = TypeParameterElement.EMPTY_LIST;
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        this._inheritsCovariant = false;
        this._unlinkedParam = null;
        super.VariableElementImpl(name,nameOffset);
    }
    @namedConstructor
    forNode(name : any) {
        this._parameters = ParameterElement.EMPTY_LIST;
        this._typeParameters = TypeParameterElement.EMPTY_LIST;
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        this._inheritsCovariant = false;
        this._unlinkedParam = null;
        super.forNode(name);
    }
    static forNode : new(name : any) => ParameterElementImpl;

    @namedConstructor
    forSerialized(_unlinkedParam : any,enclosingElement : ElementImpl) {
        this._parameters = ParameterElement.EMPTY_LIST;
        this._typeParameters = TypeParameterElement.EMPTY_LIST;
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        this._inheritsCovariant = false;
        super.forSerialized(enclosingElement);
        this._unlinkedParam = _unlinkedParam;
    }
    static forSerialized : new(_unlinkedParam : any,enclosingElement : ElementImpl) => ParameterElementImpl;

    @namedFactory
    static $forSerializedFactory(unlinkedParameter : any,enclosingElement : ElementImpl,_namedArguments? : {synthetic? : boolean}) : ParameterElementImpl {
        let {synthetic} = Object.assign({
            "synthetic" : false}, _namedArguments );
        let element : ParameterElementImpl;
        if (unlinkedParameter.isInitializingFormal) {
            if (op(Op.EQUALS,unlinkedParameter.kind,UnlinkedParamKind.required)) {
                element = new FieldFormalParameterElementImpl.forSerialized(unlinkedParameter,enclosingElement);
            }else {
                element = new DefaultFieldFormalParameterElementImpl.forSerialized(unlinkedParameter,enclosingElement);
            }
        }else {
            if (op(Op.EQUALS,unlinkedParameter.kind,UnlinkedParamKind.required)) {
                element = new ParameterElementImpl.forSerialized(unlinkedParameter,enclosingElement);
            }else {
                element = new DefaultParameterElementImpl.forSerialized(unlinkedParameter,enclosingElement);
            }
        }
        element.isSynthetic = synthetic;
        return element;
    }
    static forSerializedFactory : new(unlinkedParameter : any,enclosingElement : ElementImpl,_namedArguments? : {synthetic? : boolean}) => ParameterElementImpl;

    @namedFactory
    static $synthetic(name : string,type : any,kind : any) : ParameterElementImpl {
        let element : ParameterElementImpl = new ParameterElementImpl(name,-1);
        element.type = type;
        element.isSynthetic = true;
        element.parameterKind = kind;
        return element;
    }
    static synthetic : new(name : string,type : any,kind : any) => ParameterElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeLength() : number {
        if (this._unlinkedParam != null) {
            return ((t)=>(!!t)?t.length:null)(this._unlinkedParam.codeRange);
        }
        return super.codeLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get codeOffset() : number {
        if (this._unlinkedParam != null) {
            return ((t)=>(!!t)?t.offset:null)(this._unlinkedParam.codeRange);
        }
        return super.codeOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get defaultValueCode() : string {
        if (this._unlinkedParam != null) {
            if (op(Op.EQUALS,((t)=>(!!t)?t.bodyExpr:null)(this._unlinkedParam.initializer),null)) {
                return null;
            }
            return this._unlinkedParam.defaultValueCode;
        }
        return this._defaultValueCode;
    }
    set defaultValueCode(defaultValueCode : string) {
        _assertNotResynthesized(this._unlinkedParam);
        this._defaultValueCode = StringUtilities.intern(defaultValueCode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitType() : boolean {
        if (this._unlinkedParam != null) {
            return op(Op.EQUALS,this._unlinkedParam.type,null);
        }
        return super.hasImplicitType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set hasImplicitType(hasImplicitType : boolean) {
        _assertNotResynthesized(this._unlinkedParam);
        super.hasImplicitType = hasImplicitType;
    }
    get inheritsCovariant() : boolean {
        if (this._unlinkedParam != null) {
            return this.enclosingUnit.resynthesizerContext.inheritsCovariant(this._unlinkedParam.inheritsCovariantSlot);
        }else {
            return this._inheritsCovariant;
        }
    }
    set inheritsCovariant(value : boolean) {
        _assertNotResynthesized(this._unlinkedParam);
        this._inheritsCovariant = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : any {
        if (this._unlinkedParam != null && op(Op.EQUALS,this._initializer,null)) {
            let unlinkedInitializer : any = this._unlinkedParam.initializer;
            if (unlinkedInitializer != null) {
                this._initializer = ((_) : FunctionElementImpl =>  {
                    {
                        _.isSynthetic = true;
                        return _;
                    }
                })(new FunctionElementImpl.forSerialized(unlinkedInitializer,this));
            }else {
                return null;
            }
        }
        return super.initializer;
    }
    set initializer(function : any) {
        _assertNotResynthesized(this._unlinkedParam);
        super.initializer = function;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        if (this._unlinkedParam != null) {
            return false;
        }
        return super.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isConst(isConst : boolean) {
        _assertNotResynthesized(this._unlinkedParam);
        super.isConst = isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        if (this.isExplicitlyCovariant || this.inheritsCovariant) {
            return true;
        }
        for(let annotation of this.metadata) {
            if (annotation.isCovariant) {
                return true;
            }
        }
        return false;
    }
    get isExplicitlyCovariant() : boolean {
        if (this._unlinkedParam != null) {
            return this._unlinkedParam.isExplicitlyCovariant;
        }
        return this.hasModifier(Modifier.COVARIANT);
    }
    set isExplicitlyCovariant(isCovariant : boolean) {
        _assertNotResynthesized(this._unlinkedParam);
        this.setModifier(Modifier.COVARIANT,isCovariant);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        if (this._unlinkedParam != null) {
            return this._unlinkedParam.isFinal;
        }
        return super.isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isFinal(isFinal : boolean) {
        _assertNotResynthesized(this._unlinkedParam);
        super.isFinal = isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInitializingFormal() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInClosure() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInScope() : boolean {
        return true;
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
    get metadata() : core.DartList<any> {
        if (this._unlinkedParam != null) {
            return this._metadata = ( this._metadata ) || ( this._buildAnnotations(this.enclosingUnit,this._unlinkedParam.annotations) );
        }
        return super.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedParam != null) {
            return this._unlinkedParam.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == 0 && this._unlinkedParam != null) {
            if (this.isSynthetic || (this._unlinkedParam.name.isEmpty && is(this.enclosingElement, any))) {
                return -1;
            }
            return this._unlinkedParam.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameterKind() : any {
        if (this._unlinkedParam != null && op(Op.EQUALS,this._parameterKind,null)) {
            switch (this._unlinkedParam.kind) {
                case UnlinkedParamKind.named:
                    this._parameterKind = ParameterKind.NAMED;
                    break;
                case UnlinkedParamKind.positional:
                    this._parameterKind = ParameterKind.POSITIONAL;
                    break;
                case UnlinkedParamKind.required:
                    this._parameterKind = ParameterKind.REQUIRED;
                    break;
            }
        }
        return this._parameterKind;
    }
    set parameterKind(parameterKind : any) {
        _assertNotResynthesized(this._unlinkedParam);
        this._parameterKind = parameterKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        this._resynthesizeTypeAndParameters();
        return this._parameters;
    }
    set parameters(parameters : core.DartList<any>) {
        for(let parameter of parameters) {
            (parameter as ParameterElementImpl).enclosingElement = this;
        }
        this._parameters = parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        this._resynthesizeTypeAndParameters();
        return super.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeInferenceError() : any {
        if (this._unlinkedParam != null) {
            return this.enclosingUnit.resynthesizerContext.getTypeInferenceError(this._unlinkedParam.inferredTypeSlot);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this._typeParameters;
    }
    set typeParameters(typeParameters : core.DartList<any>) {
        for(let parameter of typeParameters) {
            (parameter as TypeParameterElementImpl).enclosingElement = this;
        }
        this._typeParameters = typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get visibleRange() : any {
        if (this._unlinkedParam != null) {
            if (op(Op.EQUALS,this._unlinkedParam.visibleLength,0)) {
                return null;
            }
            return new bare.createInstance(any,null,this._unlinkedParam.visibleOffset,this._unlinkedParam.visibleLength);
        }
        if (this._visibleRangeLength < 0) {
            return null;
        }
        return new bare.createInstance(any,null,this._visibleRangeOffset,this._visibleRangeLength);
    }
    get _unlinkedConst() : any {
        return ((t)=>(!!t)?t.bodyExpr:null)(((t)=>(!!t)?t.initializer:null)(this._unlinkedParam));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitParameterElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        let left : string = "";
        let right : string = "";
        while (true){
            if (op(Op.EQUALS,this.parameterKind,ParameterKind.NAMED)) {
                left = "{";
                right = "}";
            }else if (op(Op.EQUALS,this.parameterKind,ParameterKind.POSITIONAL)) {
                left = "[";
                right = "]";
            }else if (op(Op.EQUALS,this.parameterKind,ParameterKind.REQUIRED)) {
            }
            break;
        }
        buffer.write(left);
        this.appendToWithoutDelimiters(buffer);
        buffer.write(right);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(identifier : string) : ElementImpl {
        for(let parameter of this._parameters) {
            let parameterImpl : ParameterElementImpl = parameter;
            if (parameterImpl.identifier == identifier) {
                return parameterImpl;
            }
        }
        return null;
    }
    setVisibleRange(offset : number,length : number) : void {
        _assertNotResynthesized(this._unlinkedParam);
        this._visibleRangeOffset = offset;
        this._visibleRangeLength = length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.safelyVisitChildren(this.parameters,visitor);
    }
    _resynthesizeTypeAndParameters() : void {
        if (this._unlinkedParam != null && op(Op.EQUALS,this._declaredType,null) && op(Op.EQUALS,this._type,null)) {
            if (this._unlinkedParam.isFunctionTyped) {
                let enclosingUnit : CompilationUnitElementImpl = this.enclosingUnit;
                let parameterTypeElement : FunctionElementImpl = new FunctionElementImpl_forFunctionTypedParameter(enclosingUnit,this);
                if (!this.isSynthetic) {
                    parameterTypeElement.enclosingElement = this;
                }
                let subParameters : core.DartList<any> = ParameterElementImpl.resynthesizeList(this._unlinkedParam.parameters,this,{
                    synthetic : this.isSynthetic});
                if (this.isSynthetic) {
                    parameterTypeElement.parameters = subParameters;
                }else {
                    this._parameters = subParameters;
                    parameterTypeElement.shareParameters(subParameters);
                }
                parameterTypeElement.returnType = enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._unlinkedParam.type);
                let parameterType : any = new bare.createInstance(any,null,parameterTypeElement,null,this.typeParameterContext.allTypeParameterTypes,false);
                parameterTypeElement.type = parameterType;
                this._type = parameterType;
            }else {
                this._type = this.enclosingUnit.resynthesizerContext.resolveLinkedType(this,this._unlinkedParam.inferredTypeSlot);
                this.declaredType = this.enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._unlinkedParam.type,{
                    declaredType : true});
            }
        }
    }
    static resynthesizeList(unlinkedParameters : core.DartList<any>,enclosingElement : ElementImpl,_namedArguments? : {synthetic? : boolean}) : core.DartList<any> {
        let {synthetic} = Object.assign({
            "synthetic" : false}, _namedArguments );
        let length : number = unlinkedParameters.length;
        if (length != 0) {
            let parameters : core.DartList<any> = new core.DartList<any>(length);
            for(let i : number = 0; i < length; i++){
                parameters[i] = new ParameterElementImpl.forSerializedFactory(unlinkedParameters[i],enclosingElement,{
                    synthetic : synthetic});
            }
            return parameters;
        }else {
            return new core.DartList.literal<any>();
        }
    }
}

export namespace PropertyAccessorElementImpl {
    export type Constructors = ExecutableElementImpl.Constructors | 'PropertyAccessorElementImpl' | 'forNode' | 'forSerialized' | 'forVariable';
    export type Interface = Omit<PropertyAccessorElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PropertyAccessorElementImpl extends ExecutableElementImpl implements any.Interface {
    variable : any;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessorElementImpl(name : string,offset : number) {
        super.ExecutableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => PropertyAccessorElementImpl;

    @namedConstructor
    forSerialized(serializedExecutable : any,enclosingElement : ElementImpl) {
        super.forSerialized(serializedExecutable,enclosingElement);
    }
    static forSerialized : new(serializedExecutable : any,enclosingElement : ElementImpl) => PropertyAccessorElementImpl;

    @namedConstructor
    forVariable(variable : PropertyInducingElementImpl) {
        super.ExecutableElementImpl(variable.name,variable.nameOffset);
        this.variable = variable;
        this.isStatic = variable.isStatic;
        this.isSynthetic = true;
    }
    static forVariable : new(variable : PropertyInducingElementImpl) => PropertyAccessorElementImpl;

    set abstract(isAbstract : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.ABSTRACT,isAbstract);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allEnclosingTypeParameterTypes() : core.DartList<any> {
        if (this.isStatic) {
            return new core.DartList.literal<any>();
        }
        return super.allEnclosingTypeParameterTypes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correspondingGetter() : any {
        if (this.isGetter || op(Op.EQUALS,this.variable,null)) {
            return null;
        }
        return this.variable.getter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correspondingSetter() : any {
        if (this.isSetter || op(Op.EQUALS,this.variable,null)) {
            return null;
        }
        return this.variable.setter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        if (this.serializedExecutable != null && this.isSetter) {
            let name : string = this.serializedExecutable.name;
            /* TODO (AssertStatementImpl) : assert (name.endsWith('=')); */;
            return new core.DartString(name).substring(0,new core.DartString(name).length - 1);
        }
        return super.displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return (this.enclosingElement as ElementImpl).typeParameterContext;
    }
    set getter(isGetter : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.GETTER,isGetter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        let name : string = this.displayName;
        let suffix : string = this.isGetter ? "?" : "=";
        return `${name}${suffix}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGetter() : boolean {
        if (this.serializedExecutable != null) {
            return op(Op.EQUALS,this.serializedExecutable.kind,UnlinkedExecutableKind.getter);
        }
        return this.hasModifier(Modifier.GETTER);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSetter() : boolean {
        if (this.serializedExecutable != null) {
            return op(Op.EQUALS,this.serializedExecutable.kind,UnlinkedExecutableKind.setter);
        }
        return this.hasModifier(Modifier.SETTER);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.isStatic || is(this.variable, any);
        }
        return this.hasModifier(Modifier.STATIC);
    }
    set isStatic(isStatic : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.STATIC,isStatic);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        if (this.isGetter) {
            return ElementKind.GETTER;
        }
        return ElementKind.SETTER;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this.serializedExecutable != null) {
            return this.serializedExecutable.name;
        }
        if (this.isSetter) {
            return `${super.name}=`;
        }
        return super.name;
    }
    set setter(isSetter : boolean) {
        _assertNotResynthesized(this.serializedExecutable);
        this.setModifier(Modifier.SETTER,isSetter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitPropertyAccessorElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write(this.isGetter ? "get " : "set ");
        buffer.write(this.variable.displayName);
        super.appendTo(buffer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        if (this.isSynthetic) {
            return null;
        }
        if (is(this.enclosingElement, any)) {
            return this.getNodeMatching((node : any) =>  {
                return is(node, any);
            });
        }else if (is(this.enclosingElement, any)) {
            return this.getNodeMatching((node : any) =>  {
                return is(node, any);
            });
        }
        return null;
    }
}

export namespace FieldFormalParameterElementImpl {
    export type Constructors = ParameterElementImpl.Constructors | 'FieldFormalParameterElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<FieldFormalParameterElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FieldFormalParameterElementImpl extends ParameterElementImpl implements any.Interface {
    _field : any;

    constructor(name : string,nameOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldFormalParameterElementImpl(name : string,nameOffset : number) {
        super.ParameterElementImpl(name,nameOffset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => FieldFormalParameterElementImpl;

    @namedConstructor
    forSerialized(unlinkedParam : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedParam,enclosingElement);
    }
    static forSerialized : new(unlinkedParam : any,enclosingElement : ElementImpl) => FieldFormalParameterElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get field() : any {
        if (this._unlinkedParam != null && op(Op.EQUALS,this._field,null)) {
            let enclosingConstructor : any = this.enclosingElement;
            if (is(enclosingConstructor, any)) {
                let enclosingClass : any = enclosingConstructor.enclosingElement;
                if (is(enclosingClass, any)) {
                    let field : any = enclosingClass.getField(this._unlinkedParam.name);
                    if (field != null && !field.isSynthetic) {
                        this._field = field;
                    }
                }
            }
        }
        return this._field;
    }
    set field(field : any) {
        _assertNotResynthesized(this._unlinkedParam);
        this._field = field;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInitializingFormal() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this._unlinkedParam != null && op(Op.EQUALS,this._unlinkedParam.type,null)) {
            this._type = ( this._type ) || ( (((t)=>(!!t)?t.type:null)(this.field) || DynamicTypeImpl.instance) );
        }
        return super.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        _assertNotResynthesized(this._unlinkedParam);
        this._type = type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitFieldFormalParameterElement(this);
    }
}

export namespace FunctionElementImpl_forFunctionTypedParameter {
    export type Constructors = FunctionElementImpl.Constructors | 'FunctionElementImpl_forFunctionTypedParameter';
    export type Interface = Omit<FunctionElementImpl_forFunctionTypedParameter, Constructors>;
}
@DartClass
export class FunctionElementImpl_forFunctionTypedParameter extends FunctionElementImpl {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingUnit : CompilationUnitElementImpl;

    _parameter : ParameterElementImpl;

    constructor(enclosingUnit : CompilationUnitElementImpl,_parameter : ParameterElementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionElementImpl_forFunctionTypedParameter(enclosingUnit : CompilationUnitElementImpl,_parameter : ParameterElementImpl) {
        super.FunctionElementImpl('',-1);
        this.enclosingUnit = enclosingUnit;
        this._parameter = _parameter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return this._parameter.typeParameterContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return true;
    }
}

export namespace FunctionElementImpl_forLUB {
    export type Constructors = FunctionElementImpl.Constructors | 'FunctionElementImpl_forLUB';
    export type Interface = Omit<FunctionElementImpl_forLUB, Constructors>;
}
@DartClass
export class FunctionElementImpl_forLUB extends FunctionElementImpl {
    _entityRef : any;

    constructor(enclosingElement : ElementImpl,_entityRef : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionElementImpl_forLUB(enclosingElement : ElementImpl,_entityRef : any) {
        super.forSerialized(null,enclosingElement);
        this._entityRef = _entityRef;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this._parameters = ( this._parameters ) || ( ParameterElementImpl.resynthesizeList(this._entityRef.syntheticParams,this,{
            synthetic : true}) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType = ( this._returnType ) || ( enclosingUnit.resynthesizerContext.resolveTypeRef(this,this._entityRef.syntheticReturnType) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(returnType : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type = ( this._type ) || ( new bare.createInstance(any,null,this,null,null,false) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
}

export namespace DefaultParameterElementImpl {
    export type Constructors = ParameterElementImpl.Constructors | 'DefaultParameterElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<DefaultParameterElementImpl, Constructors>;
}
@DartClass
@With(ConstVariableElement)
export class DefaultParameterElementImpl extends ParameterElementImpl implements ConstVariableElement.Interface {
    @Abstract
    computeConstantValue() : any {
        throw 'from mixin';
    }
    constructor(name : string,nameOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultParameterElementImpl(name : string,nameOffset : number) {
        super.ParameterElementImpl(name,nameOffset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => DefaultParameterElementImpl;

    @namedConstructor
    forSerialized(unlinkedParam : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedParam,enclosingElement);
    }
    static forSerialized : new(unlinkedParam : any,enclosingElement : ElementImpl) => DefaultParameterElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
}

export namespace LocalVariableElementImpl {
    export type Constructors = NonParameterVariableElementImpl.Constructors | 'LocalVariableElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<LocalVariableElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LocalVariableElementImpl extends NonParameterVariableElementImpl implements any.Interface {
    _visibleRangeOffset : number;

    _visibleRangeLength : number;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalVariableElementImpl(name : string,offset : number) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.NonParameterVariableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.forNode(name);
    }
    static forNode : new(name : any) => LocalVariableElementImpl;

    @namedConstructor
    forSerialized(unlinkedVariable : any,enclosingExecutable : ExecutableElementImpl) {
        this._visibleRangeOffset = 0;
        this._visibleRangeLength = -1;
        super.forSerialized(unlinkedVariable,enclosingExecutable);
    }
    static forSerialized : new(unlinkedVariable : any,enclosingExecutable : ExecutableElementImpl) => LocalVariableElementImpl;

    @namedFactory
    static $forSerializedFactory(unlinkedVariable : any,enclosingExecutable : ExecutableElementImpl) : LocalVariableElementImpl {
        if (unlinkedVariable.isConst && ((t)=>(!!t)?t.bodyExpr:null)(unlinkedVariable.initializer) != null) {
            return new ConstLocalVariableElementImpl.forSerialized(unlinkedVariable,enclosingExecutable);
        }else {
            return new LocalVariableElementImpl.forSerialized(unlinkedVariable,enclosingExecutable);
        }
    }
    static forSerializedFactory : new(unlinkedVariable : any,enclosingExecutable : ExecutableElementImpl) => LocalVariableElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        let identifier : string = super.identifier;
        let enclosing : any = this.enclosingElement;
        if (is(enclosing, any)) {
            let id : number = ElementImpl.findElementIndexUsingIdentical(enclosing.localVariables,this);
            identifier += `@${id}`;
        }
        return identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInClosure() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isPotentiallyMutatedInScope() : boolean {
        return true;
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
        if (this._unlinkedVariable != null) {
            if (op(Op.EQUALS,this._unlinkedVariable.visibleLength,0)) {
                return null;
            }
            return new bare.createInstance(any,null,this._unlinkedVariable.visibleOffset,this._unlinkedVariable.visibleLength);
        }
        if (this._visibleRangeLength < 0) {
            return null;
        }
        return new bare.createInstance(any,null,this._visibleRangeOffset,this._visibleRangeLength);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return visitor.visitLocalVariableElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer) : void {
        buffer.write(this.type);
        buffer.write(" ");
        buffer.write(this.displayName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any) || is(node, any);
        });
    }
    setVisibleRange(offset : number,length : number) : void {
        _assertNotResynthesized(this._unlinkedVariable);
        this._visibleRangeOffset = offset;
        this._visibleRangeLength = length;
    }
}

export namespace MultiplyInheritedPropertyAccessorElementImpl {
    export type Constructors = PropertyAccessorElementImpl.Constructors | 'MultiplyInheritedPropertyAccessorElementImpl';
    export type Interface = Omit<MultiplyInheritedPropertyAccessorElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MultiplyInheritedPropertyAccessorElementImpl extends PropertyAccessorElementImpl implements any.Interface {
    _elements : core.DartList<any>;

    constructor(name : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiplyInheritedPropertyAccessorElementImpl(name : any) {
        this._elements = PropertyAccessorElement.EMPTY_LIST;
        super.forNode(name);
        this.isSynthetic = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : TypeParameterizedElementMixin {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritedElements() : core.DartList<any> {
        return this._elements;
    }
    set inheritedElements(elements : core.DartList<any>) {
        this._elements = elements;
    }
}

export namespace ParameterElementImpl_ofImplicitSetter {
    export type Constructors = ParameterElementImpl.Constructors | 'ParameterElementImpl_ofImplicitSetter';
    export type Interface = Omit<ParameterElementImpl_ofImplicitSetter, Constructors>;
}
@DartClass
export class ParameterElementImpl_ofImplicitSetter extends ParameterElementImpl {
    setter : PropertyAccessorElementImpl_ImplicitSetter;

    constructor(setter : PropertyAccessorElementImpl_ImplicitSetter) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParameterElementImpl_ofImplicitSetter(setter : PropertyAccessorElementImpl_ImplicitSetter) {
        this.setter = setter;
        super.ParameterElementImpl(`_${setter.variable.name}`,setter.variable.nameOffset);
        this.enclosingElement = setter;
        this.isSynthetic = true;
        this.parameterKind = ParameterKind.REQUIRED;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritsCovariant() : boolean {
        let variable : any = this.setter.variable;
        if (is(variable, FieldElementImpl) && variable._unlinkedVariable != null) {
            return this.enclosingUnit.resynthesizerContext.inheritsCovariant(variable._unlinkedVariable.inheritsCovariantSlot);
        }
        return super.inheritsCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        if (this.isExplicitlyCovariant || this.inheritsCovariant) {
            return true;
        }
        for(let annotation of this.setter.variable.metadata) {
            if (annotation.isCovariant) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExplicitlyCovariant() : boolean {
        let variable : any = this.setter.variable;
        if (is(variable, FieldElementImpl)) {
            return variable.isCovariant;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.setter.variable.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
}

export namespace PropertyAccessorElementImpl_ImplicitGetter {
    export type Constructors = PropertyAccessorElementImpl.Constructors | 'PropertyAccessorElementImpl_ImplicitGetter';
    export type Interface = Omit<PropertyAccessorElementImpl_ImplicitGetter, Constructors>;
}
@DartClass
export class PropertyAccessorElementImpl_ImplicitGetter extends PropertyAccessorElementImpl {
    constructor(property : PropertyInducingElementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessorElementImpl_ImplicitGetter(property : PropertyInducingElementImpl) {
        super.forVariable(property);
        property.getter = this;
        this.enclosingElement = property.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitReturnType() : boolean {
        return this.variable.hasImplicitType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGetter() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this.variable.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(returnType : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type = ( this._type ) || ( new bare.createInstance(any,null,this) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
}

export namespace PropertyAccessorElementImpl_ImplicitSetter {
    export type Constructors = PropertyAccessorElementImpl.Constructors | 'PropertyAccessorElementImpl_ImplicitSetter';
    export type Interface = Omit<PropertyAccessorElementImpl_ImplicitSetter, Constructors>;
}
@DartClass
export class PropertyAccessorElementImpl_ImplicitSetter extends PropertyAccessorElementImpl {
    constructor(property : PropertyInducingElementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessorElementImpl_ImplicitSetter(property : PropertyInducingElementImpl) {
        super.forVariable(property);
        property.setter = this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSetter() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this._parameters = ( this._parameters ) || ( new core.DartList.literal<any>(new ParameterElementImpl_ofImplicitSetter(this)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return VoidTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(returnType : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type = ( this._type ) || ( new bare.createInstance(any,null,this) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
}

export namespace PropertyInducingElementImpl {
    export type Constructors = NonParameterVariableElementImpl.Constructors | 'PropertyInducingElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<PropertyInducingElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PropertyInducingElementImpl extends NonParameterVariableElementImpl implements any.Interface {
    getter : any;

    setter : any;

    _propagatedType : any;

    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyInducingElementImpl(name : string,offset : number) {
        super.NonParameterVariableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => PropertyInducingElementImpl;

    @namedConstructor
    forSerialized(unlinkedVariable : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedVariable,enclosingElement);
    }
    static forSerialized : new(unlinkedVariable : any,enclosingElement : ElementImpl) => PropertyInducingElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedType() : any {
        if (this._unlinkedVariable != null && op(Op.EQUALS,this._propagatedType,null)) {
            this._propagatedType = this.enclosingUnit.resynthesizerContext.resolveLinkedType(this,this._unlinkedVariable.propagatedTypeSlot);
        }
        return this._propagatedType;
    }
    set propagatedType(propagatedType : any) {
        _assertNotResynthesized(this._unlinkedVariable);
        this._propagatedType = this._checkElementOfType(propagatedType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this.isSynthetic && op(Op.EQUALS,this._type,null)) {
            if (this.getter != null) {
                this._type = this.getter.returnType;
            }else if (this.setter != null) {
                let parameters : core.DartList<any> = this.setter.parameters;
                this._type = parameters.isNotEmpty ? parameters[0].type : DynamicTypeImpl.instance;
            }else {
                this._type = DynamicTypeImpl.instance;
            }
        }
        return super.type;
    }
}

export namespace MultiplyInheritedMethodElementImpl {
    export type Constructors = MethodElementImpl.Constructors | 'MultiplyInheritedMethodElementImpl';
    export type Interface = Omit<MultiplyInheritedMethodElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MultiplyInheritedMethodElementImpl extends MethodElementImpl implements any.Interface {
    _elements : core.DartList<any>;

    constructor(name : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiplyInheritedMethodElementImpl(name : any) {
        this._elements = MethodElement.EMPTY_LIST;
        super.forNode(name);
        this.isSynthetic = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritedElements() : core.DartList<any> {
        return this._elements;
    }
    set inheritedElements(elements : core.DartList<any>) {
        this._elements = elements;
    }
}

export namespace DefaultFieldFormalParameterElementImpl {
    export type Constructors = FieldFormalParameterElementImpl.Constructors | 'DefaultFieldFormalParameterElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<DefaultFieldFormalParameterElementImpl, Constructors>;
}
@DartClass
@With(ConstVariableElement)
export class DefaultFieldFormalParameterElementImpl extends FieldFormalParameterElementImpl implements ConstVariableElement.Interface {
    @Abstract
    computeConstantValue() : any {
        throw 'from mixin';
    }
    constructor(name : string,nameOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultFieldFormalParameterElementImpl(name : string,nameOffset : number) {
        super.FieldFormalParameterElementImpl(name,nameOffset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => DefaultFieldFormalParameterElementImpl;

    @namedConstructor
    forSerialized(unlinkedParam : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedParam,enclosingElement);
    }
    static forSerialized : new(unlinkedParam : any,enclosingElement : ElementImpl) => DefaultFieldFormalParameterElementImpl;

}

export namespace TopLevelVariableElementImpl {
    export type Constructors = PropertyInducingElementImpl.Constructors | 'TopLevelVariableElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<TopLevelVariableElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TopLevelVariableElementImpl extends PropertyInducingElementImpl implements any.Interface {
    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelVariableElementImpl(name : string,offset : number) {
        super.PropertyInducingElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => TopLevelVariableElementImpl;

    @namedConstructor
    forSerialized(unlinkedVariable : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedVariable,enclosingElement);
    }
    static forSerialized : new(unlinkedVariable : any,enclosingElement : ElementImpl) => TopLevelVariableElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return true;
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
    accept(visitor : any) {
        return visitor.visitTopLevelVariableElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        return this.getNodeMatching((node : any) =>  {
            return is(node, any);
        });
    }
}

export namespace ConstLocalVariableElementImpl {
    export type Constructors = LocalVariableElementImpl.Constructors | 'ConstLocalVariableElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ConstLocalVariableElementImpl, Constructors>;
}
@DartClass
@With(ConstVariableElement)
export class ConstLocalVariableElementImpl extends LocalVariableElementImpl implements ConstVariableElement.Interface {
    @Abstract
    computeConstantValue() : any {
        throw 'from mixin';
    }
    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstLocalVariableElementImpl(name : string,offset : number) {
        super.LocalVariableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => ConstLocalVariableElementImpl;

    @namedConstructor
    forSerialized(unlinkedVariable : any,enclosingExecutable : ExecutableElementImpl) {
        super.forSerialized(unlinkedVariable,enclosingExecutable);
    }
    static forSerialized : new(unlinkedVariable : any,enclosingExecutable : ExecutableElementImpl) => ConstLocalVariableElementImpl;

}

export namespace FieldElementImpl {
    export type Constructors = PropertyInducingElementImpl.Constructors | 'FieldElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<FieldElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FieldElementImpl extends PropertyInducingElementImpl implements any.Interface {
    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementImpl(name : string,offset : number) {
        super.PropertyInducingElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => FieldElementImpl;

    @namedConstructor
    forSerialized(unlinkedVariable : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedVariable,enclosingElement);
    }
    static forSerialized : new(unlinkedVariable : any,enclosingElement : ElementImpl) => FieldElementImpl;

    @namedFactory
    static $forSerializedFactory(unlinkedVariable : any,enclosingClass : ClassElementImpl) : FieldElementImpl {
        if (((t)=>(!!t)?t.bodyExpr:null)(unlinkedVariable.initializer) != null && (unlinkedVariable.isConst || unlinkedVariable.isFinal && !unlinkedVariable.isStatic)) {
            return new ConstFieldElementImpl.forSerialized(unlinkedVariable,enclosingClass);
        }else {
            return new FieldElementImpl.forSerialized(unlinkedVariable,enclosingClass);
        }
    }
    static forSerializedFactory : new(unlinkedVariable : any,enclosingClass : ClassElementImpl) => FieldElementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingElement as any;
    }
    get isCovariant() : boolean {
        if (this._unlinkedVariable != null) {
            return this._unlinkedVariable.isCovariant;
        }
        return this.hasModifier(Modifier.COVARIANT);
    }
    set isCovariant(isCovariant : boolean) {
        _assertNotResynthesized(this._unlinkedVariable);
        this.setModifier(Modifier.COVARIANT,isCovariant);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnumConstant() : boolean {
        return this.enclosingElement != null && this.enclosingElement.isEnum && !this.isSynthetic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        if (this._unlinkedVariable != null) {
            return this._unlinkedVariable.isStatic;
        }
        return this.hasModifier(Modifier.STATIC);
    }
    set isStatic(isStatic : boolean) {
        _assertNotResynthesized(this._unlinkedVariable);
        this.setModifier(Modifier.STATIC,isStatic);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVirtual() : boolean {
        return true;
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
    accept(visitor : any) {
        return visitor.visitFieldElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNode() : any {
        if (this.isEnumConstant) {
            return this.getNodeMatching((node : any) =>  {
                return is(node, any);
            });
        }else {
            return this.getNodeMatching((node : any) =>  {
                return is(node, any);
            });
        }
    }
}

export namespace ConstTopLevelVariableElementImpl {
    export type Constructors = TopLevelVariableElementImpl.Constructors | 'ConstTopLevelVariableElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ConstTopLevelVariableElementImpl, Constructors>;
}
@DartClass
@With(ConstVariableElement)
export class ConstTopLevelVariableElementImpl extends TopLevelVariableElementImpl implements ConstVariableElement.Interface {
    @Abstract
    computeConstantValue() : any {
        throw 'from mixin';
    }
    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstTopLevelVariableElementImpl(name : string,offset : number) {
        super.TopLevelVariableElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => ConstTopLevelVariableElementImpl;

    @namedConstructor
    forSerialized(unlinkedVariable : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedVariable,enclosingElement);
    }
    static forSerialized : new(unlinkedVariable : any,enclosingElement : ElementImpl) => ConstTopLevelVariableElementImpl;

}

export namespace ConstFieldElementImpl {
    export type Constructors = FieldElementImpl.Constructors | 'ConstFieldElementImpl' | 'forNode' | 'forSerialized';
    export type Interface = Omit<ConstFieldElementImpl, Constructors>;
}
@DartClass
@With(ConstVariableElement)
export class ConstFieldElementImpl extends FieldElementImpl implements ConstVariableElement.Interface {
    @Abstract
    computeConstantValue() : any {
        throw 'from mixin';
    }
    constructor(name : string,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstFieldElementImpl(name : string,offset : number) {
        super.FieldElementImpl(name,offset);
    }
    @namedConstructor
    forNode(name : any) {
        super.forNode(name);
    }
    static forNode : new(name : any) => ConstFieldElementImpl;

    @namedConstructor
    forSerialized(unlinkedVariable : any,enclosingElement : ElementImpl) {
        super.forSerialized(unlinkedVariable,enclosingElement);
    }
    static forSerialized : new(unlinkedVariable : any,enclosingElement : ElementImpl) => ConstFieldElementImpl;

}

export namespace ConstFieldElementImpl_ofEnum {
    export type Constructors = ConstFieldElementImpl.Constructors | 'ConstFieldElementImpl_ofEnum';
    export type Interface = Omit<ConstFieldElementImpl_ofEnum, Constructors>;
}
@DartClass
export class ConstFieldElementImpl_ofEnum extends ConstFieldElementImpl {
    _enum : EnumElementImpl;

    constructor(_enum : EnumElementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstFieldElementImpl_ofEnum(_enum : EnumElementImpl) {
        super.ConstFieldElementImpl(null,-1);
        this._enum = _enum;
        enclosingElement = this._enum;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set evaluationResult(_ : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isConst(isConst : boolean) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isFinal(isFinal : boolean) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isStatic(isStatic : boolean) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    set type(type : any) {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
}

export namespace ConstFieldElementImpl_EnumValues {
    export type Constructors = ConstFieldElementImpl_ofEnum.Constructors | 'ConstFieldElementImpl_EnumValues';
    export type Interface = Omit<ConstFieldElementImpl_EnumValues, Constructors>;
}
@DartClass
export class ConstFieldElementImpl_EnumValues extends ConstFieldElementImpl_ofEnum {
    constructor(enumElement : EnumElementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstFieldElementImpl_EnumValues(enumElement : EnumElementImpl) {
        super.ConstFieldElementImpl_ofEnum(enumElement);
        this.isSynthetic = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get evaluationResult() : any {
        if (op(Op.EQUALS,this._evaluationResult,null)) {
            let constantValues : core.DartList<any> = new core.DartList.literal<any>();
            for(let field of this._enum.fields) {
                if (is(field, ConstFieldElementImpl_EnumValue)) {
                    constantValues.add(field.evaluationResult.value);
                }
            }
            this._evaluationResult = new bare.createInstance(any,null,new bare.createInstance(any,null,this.type,new bare.createInstance(any,null,constantValues)));
        }
        return this._evaluationResult;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return 'values';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (op(Op.EQUALS,this._type,null)) {
            let listType : any = this.context.typeProvider.listType;
            return this._type = listType.instantiate(new core.DartList.literal<any>(this._enum.type));
        }
        return this._type;
    }
}

export namespace ConstFieldElementImpl_EnumValue {
    export type Constructors = ConstFieldElementImpl_ofEnum.Constructors | 'ConstFieldElementImpl_EnumValue';
    export type Interface = Omit<ConstFieldElementImpl_EnumValue, Constructors>;
}
@DartClass
export class ConstFieldElementImpl_EnumValue extends ConstFieldElementImpl_ofEnum {
    _unlinkedEnumValue : any;

    _index : number;

    constructor(enumElement : EnumElementImpl,_unlinkedEnumValue : any,_index : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstFieldElementImpl_EnumValue(enumElement : EnumElementImpl,_unlinkedEnumValue : any,_index : number) {
        super.ConstFieldElementImpl_ofEnum(enumElement);
        this._unlinkedEnumValue = _unlinkedEnumValue;
        this._index = _index;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : string {
        if (this._unlinkedEnumValue != null) {
            return ((t)=>(!!t)?t.text:null)(((t)=>(!!t)?t.documentationComment:null)(this._unlinkedEnumValue));
        }
        return super.documentationComment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get evaluationResult() : any {
        if (op(Op.EQUALS,this._evaluationResult,null)) {
            let fieldMap : core.DartMap<string,any> = new core.DartMap.literal([
                [this.name,new bare.createInstance(any,null,this.context.typeProvider.intType,new bare.createInstance(any,null,this._index))]]);
            let value : any = new bare.createInstance(any,null,this.type,new bare.createInstance(any,null,fieldMap));
            this._evaluationResult = new bare.createInstance(any,null,value);
        }
        return this._evaluationResult;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._unlinkedEnumValue != null) {
            return this._unlinkedEnumValue.name;
        }
        return super.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nameOffset() : number {
        let offset : number = super.nameOffset;
        if (offset == -1 && this._unlinkedEnumValue != null) {
            return this._unlinkedEnumValue.nameOffset;
        }
        return offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._enum.type;
    }
}

export class properties {
}
