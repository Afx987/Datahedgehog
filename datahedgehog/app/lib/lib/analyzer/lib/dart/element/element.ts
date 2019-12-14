/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/dart/element/element.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace FunctionElement {
    export type Constructors = 'FunctionElement';
    export type Interface = Omit<FunctionElement, Constructors>;
}
@DartClass
@Implements(ExecutableElement,LocalElement)
export class FunctionElement implements ExecutableElement.Interface,LocalElement.Interface {
    private static __$EMPTY_LIST : core.DartList<FunctionElement>;
    static get EMPTY_LIST() : core.DartList<FunctionElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<FunctionElement>();
        }
        return this.__$EMPTY_LIST;
    }

    private static __$CALL_METHOD_NAME : string;
    static get CALL_METHOD_NAME() : string { 
        if (this.__$CALL_METHOD_NAME===undefined) {
            this.__$CALL_METHOD_NAME = "call";
        }
        return this.__$CALL_METHOD_NAME;
    }
    static set CALL_METHOD_NAME(__$value : string)  { 
        this.__$CALL_METHOD_NAME = __$value;
    }

    private static __$LOAD_LIBRARY_NAME : string;
    static get LOAD_LIBRARY_NAME() : string { 
        if (this.__$LOAD_LIBRARY_NAME===undefined) {
            this.__$LOAD_LIBRARY_NAME = "loadLibrary";
        }
        return this.__$LOAD_LIBRARY_NAME;
    }
    static set LOAD_LIBRARY_NAME(__$value : string)  { 
        this.__$LOAD_LIBRARY_NAME = __$value;
    }

    private static __$MAIN_FUNCTION_NAME : string;
    static get MAIN_FUNCTION_NAME() : string { 
        if (this.__$MAIN_FUNCTION_NAME===undefined) {
            this.__$MAIN_FUNCTION_NAME = "main";
        }
        return this.__$MAIN_FUNCTION_NAME;
    }

    private static __$NO_SUCH_METHOD_METHOD_NAME : string;
    static get NO_SUCH_METHOD_METHOD_NAME() : string { 
        if (this.__$NO_SUCH_METHOD_METHOD_NAME===undefined) {
            this.__$NO_SUCH_METHOD_METHOD_NAME = "noSuchMethod";
        }
        return this.__$NO_SUCH_METHOD_METHOD_NAME;
    }
    static set NO_SUCH_METHOD_METHOD_NAME(__$value : string)  { 
        this.__$NO_SUCH_METHOD_METHOD_NAME = __$value;
    }

    @AbstractProperty
    get isEntryPoint() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FunctionElement() {
    }
}

export namespace ClassMemberElement {
    export type Constructors = 'ClassMemberElement';
    export type Interface = Omit<ClassMemberElement, Constructors>;
}
@DartClass
@Implements(Element)
export class ClassMemberElement implements Element.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enclosingElement() : ClassElement{ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ClassMemberElement() {
    }
}

export namespace CompilationUnitElement {
    export type Constructors = 'CompilationUnitElement';
    export type Interface = Omit<CompilationUnitElement, Constructors>;
}
@DartClass
@Implements(Element,UriReferencedElement)
export class CompilationUnitElement implements Element.Interface,UriReferencedElement.Interface {
    private static __$EMPTY_LIST : core.DartList<CompilationUnitElement>;
    static get EMPTY_LIST() : core.DartList<CompilationUnitElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<CompilationUnitElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get accessors() : core.DartList<PropertyAccessorElement>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enclosingElement() : LibraryElement{ throw 'abstract'}
    @AbstractProperty
    get enums() : core.DartList<ClassElement>{ throw 'abstract'}
    @AbstractProperty
    get functions() : core.DartList<FunctionElement>{ throw 'abstract'}
    @AbstractProperty
    get functionTypeAliases() : core.DartList<FunctionTypeAliasElement>{ throw 'abstract'}
    @AbstractProperty
    get hasLoadLibraryFunction() : boolean{ throw 'abstract'}
    @AbstractProperty
    get lineInfo() : any{ throw 'abstract'}
    @AbstractProperty
    get topLevelVariables() : core.DartList<TopLevelVariableElement>{ throw 'abstract'}
    @AbstractProperty
    get types() : core.DartList<ClassElement>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    @Abstract
    getElementAt(offset : number) : Element{ throw 'abstract'}
    @Abstract
    getEnum(name : string) : ClassElement{ throw 'abstract'}
    @Abstract
    getType(name : string) : ClassElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CompilationUnitElement() {
    }
}

export namespace ConstructorElement {
    export type Constructors = 'ConstructorElement';
    export type Interface = Omit<ConstructorElement, Constructors>;
}
@DartClass
@Implements(ClassMemberElement,ExecutableElement,any)
export class ConstructorElement implements ClassMemberElement.Interface,ExecutableElement.Interface,any.Interface {
    private static __$EMPTY_LIST : core.DartList<ConstructorElement>;
    static get EMPTY_LIST() : core.DartList<ConstructorElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ConstructorElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDefaultConstructor() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFactory() : boolean{ throw 'abstract'}
    @AbstractProperty
    get nameEnd() : number{ throw 'abstract'}
    @AbstractProperty
    get periodOffset() : number{ throw 'abstract'}
    @AbstractProperty
    get redirectedConstructor() : ConstructorElement{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ConstructorElement() {
    }
}

export namespace Element {
    export type Constructors = 'Element';
    export type Interface = Omit<Element, Constructors>;
}
@DartClass
@Implements(any,any)
export class Element implements any.Interface,any.Interface {
    private static __$SORT_BY_OFFSET : <T>(a : Element,b : Element) => number;
    static get SORT_BY_OFFSET() : <T>(a : Element,b : Element) => number { 
        if (this.__$SORT_BY_OFFSET===undefined) {
            this.__$SORT_BY_OFFSET = (firstElement : Element,secondElement : Element) =>  {
                return firstElement.nameOffset - secondElement.nameOffset;
            };
        }
        return this.__$SORT_BY_OFFSET;
    }
    static set SORT_BY_OFFSET(__$value : <T>(a : Element,b : Element) => number)  { 
        this.__$SORT_BY_OFFSET = __$value;
    }

    @AbstractProperty
    get context() : any{ throw 'abstract'}
    @AbstractProperty
    get displayName() : string{ throw 'abstract'}
    @AbstractProperty
    get documentationComment() : string{ throw 'abstract'}
    @AbstractProperty
    get enclosingElement() : Element{ throw 'abstract'}
    @AbstractProperty
    get id() : number{ throw 'abstract'}
    @AbstractProperty
    get isDeprecated() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFactory() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isJS() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isOverride() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isPrivate() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isProtected() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isPublic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isRequired() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSynthetic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get kind() : ElementKind{ throw 'abstract'}
    @AbstractProperty
    get library() : LibraryElement{ throw 'abstract'}
    @AbstractProperty
    get location() : ElementLocation{ throw 'abstract'}
    @AbstractProperty
    get metadata() : core.DartList<ElementAnnotation>{ throw 'abstract'}
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    @AbstractProperty
    get nameLength() : number{ throw 'abstract'}
    @AbstractProperty
    get nameOffset() : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get source() : any{ throw 'abstract'}
    @AbstractProperty
    get unit() : any{ throw 'abstract'}
    @Abstract
    accept(visitor : ElementVisitor<any>){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeDocumentationComment() : string{ throw 'abstract'}
    @Abstract
    computeNode() : any{ throw 'abstract'}
    @Abstract
    getAncestor(predicate : any) : Element{ throw 'abstract'}
    @Abstract
    getExtendedDisplayName(shortName : string) : string{ throw 'abstract'}
    @Abstract
    isAccessibleIn(library : LibraryElement) : boolean{ throw 'abstract'}
    @Abstract
    visitChildren(visitor : ElementVisitor<any>) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Element() {
    }
}

export namespace ElementAnnotation {
    export type Constructors = 'ElementAnnotation';
    export type Interface = Omit<ElementAnnotation, Constructors>;
}
@DartClass
@Implements(any,any)
export class ElementAnnotation implements any.Interface,any.Interface {
    private static __$EMPTY_LIST : core.DartList<ElementAnnotation>;
    static get EMPTY_LIST() : core.DartList<ElementAnnotation> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ElementAnnotation>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get constantValue() : any{ throw 'abstract'}
    @AbstractProperty
    get element() : Element{ throw 'abstract'}
    @AbstractProperty
    get isDeprecated() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFactory() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isImmutable() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isJS() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isMustCallSuper() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isOverride() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isProtected() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isProxy() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isRequired() : boolean{ throw 'abstract'}
    @Abstract
    computeConstantValue() : any{ throw 'abstract'}
    @Abstract
    toSource() : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ElementAnnotation() {
    }
}

export namespace ElementKind {
    export type Constructors = 'ElementKind';
    export type Interface = Omit<ElementKind, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class ElementKind implements core.DartComparable.Interface<ElementKind> {
    private static __$CLASS : ElementKind;
    static get CLASS() : ElementKind { 
        if (this.__$CLASS===undefined) {
            this.__$CLASS = new ElementKind('CLASS',0,"class");
        }
        return this.__$CLASS;
    }

    private static __$COMPILATION_UNIT : ElementKind;
    static get COMPILATION_UNIT() : ElementKind { 
        if (this.__$COMPILATION_UNIT===undefined) {
            this.__$COMPILATION_UNIT = new ElementKind('COMPILATION_UNIT',1,"compilation unit");
        }
        return this.__$COMPILATION_UNIT;
    }

    private static __$CONSTRUCTOR : ElementKind;
    static get CONSTRUCTOR() : ElementKind { 
        if (this.__$CONSTRUCTOR===undefined) {
            this.__$CONSTRUCTOR = new ElementKind('CONSTRUCTOR',2,"constructor");
        }
        return this.__$CONSTRUCTOR;
    }

    private static __$DYNAMIC : ElementKind;
    static get DYNAMIC() : ElementKind { 
        if (this.__$DYNAMIC===undefined) {
            this.__$DYNAMIC = new ElementKind('DYNAMIC',3,"<dynamic>");
        }
        return this.__$DYNAMIC;
    }

    private static __$ERROR : ElementKind;
    static get ERROR() : ElementKind { 
        if (this.__$ERROR===undefined) {
            this.__$ERROR = new ElementKind('ERROR',4,"<error>");
        }
        return this.__$ERROR;
    }

    private static __$EXPORT : ElementKind;
    static get EXPORT() : ElementKind { 
        if (this.__$EXPORT===undefined) {
            this.__$EXPORT = new ElementKind('EXPORT',5,"export directive");
        }
        return this.__$EXPORT;
    }

    private static __$FIELD : ElementKind;
    static get FIELD() : ElementKind { 
        if (this.__$FIELD===undefined) {
            this.__$FIELD = new ElementKind('FIELD',6,"field");
        }
        return this.__$FIELD;
    }

    private static __$FUNCTION : ElementKind;
    static get FUNCTION() : ElementKind { 
        if (this.__$FUNCTION===undefined) {
            this.__$FUNCTION = new ElementKind('FUNCTION',7,"function");
        }
        return this.__$FUNCTION;
    }

    private static __$GENERIC_FUNCTION_TYPE : ElementKind;
    static get GENERIC_FUNCTION_TYPE() : ElementKind { 
        if (this.__$GENERIC_FUNCTION_TYPE===undefined) {
            this.__$GENERIC_FUNCTION_TYPE = new ElementKind('GENERIC_FUNCTION_TYPE',8,'generic function type');
        }
        return this.__$GENERIC_FUNCTION_TYPE;
    }

    private static __$GETTER : ElementKind;
    static get GETTER() : ElementKind { 
        if (this.__$GETTER===undefined) {
            this.__$GETTER = new ElementKind('GETTER',9,"getter");
        }
        return this.__$GETTER;
    }

    private static __$IMPORT : ElementKind;
    static get IMPORT() : ElementKind { 
        if (this.__$IMPORT===undefined) {
            this.__$IMPORT = new ElementKind('IMPORT',10,"import directive");
        }
        return this.__$IMPORT;
    }

    private static __$LABEL : ElementKind;
    static get LABEL() : ElementKind { 
        if (this.__$LABEL===undefined) {
            this.__$LABEL = new ElementKind('LABEL',11,"label");
        }
        return this.__$LABEL;
    }

    private static __$LIBRARY : ElementKind;
    static get LIBRARY() : ElementKind { 
        if (this.__$LIBRARY===undefined) {
            this.__$LIBRARY = new ElementKind('LIBRARY',12,"library");
        }
        return this.__$LIBRARY;
    }

    private static __$LOCAL_VARIABLE : ElementKind;
    static get LOCAL_VARIABLE() : ElementKind { 
        if (this.__$LOCAL_VARIABLE===undefined) {
            this.__$LOCAL_VARIABLE = new ElementKind('LOCAL_VARIABLE',13,"local variable");
        }
        return this.__$LOCAL_VARIABLE;
    }

    private static __$METHOD : ElementKind;
    static get METHOD() : ElementKind { 
        if (this.__$METHOD===undefined) {
            this.__$METHOD = new ElementKind('METHOD',14,"method");
        }
        return this.__$METHOD;
    }

    private static __$NAME : ElementKind;
    static get NAME() : ElementKind { 
        if (this.__$NAME===undefined) {
            this.__$NAME = new ElementKind('NAME',15,"<name>");
        }
        return this.__$NAME;
    }

    private static __$PARAMETER : ElementKind;
    static get PARAMETER() : ElementKind { 
        if (this.__$PARAMETER===undefined) {
            this.__$PARAMETER = new ElementKind('PARAMETER',16,"parameter");
        }
        return this.__$PARAMETER;
    }

    private static __$PREFIX : ElementKind;
    static get PREFIX() : ElementKind { 
        if (this.__$PREFIX===undefined) {
            this.__$PREFIX = new ElementKind('PREFIX',17,"import prefix");
        }
        return this.__$PREFIX;
    }

    private static __$SETTER : ElementKind;
    static get SETTER() : ElementKind { 
        if (this.__$SETTER===undefined) {
            this.__$SETTER = new ElementKind('SETTER',18,"setter");
        }
        return this.__$SETTER;
    }

    private static __$TOP_LEVEL_VARIABLE : ElementKind;
    static get TOP_LEVEL_VARIABLE() : ElementKind { 
        if (this.__$TOP_LEVEL_VARIABLE===undefined) {
            this.__$TOP_LEVEL_VARIABLE = new ElementKind('TOP_LEVEL_VARIABLE',19,"top level variable");
        }
        return this.__$TOP_LEVEL_VARIABLE;
    }

    private static __$FUNCTION_TYPE_ALIAS : ElementKind;
    static get FUNCTION_TYPE_ALIAS() : ElementKind { 
        if (this.__$FUNCTION_TYPE_ALIAS===undefined) {
            this.__$FUNCTION_TYPE_ALIAS = new ElementKind('FUNCTION_TYPE_ALIAS',20,"function type alias");
        }
        return this.__$FUNCTION_TYPE_ALIAS;
    }

    private static __$TYPE_PARAMETER : ElementKind;
    static get TYPE_PARAMETER() : ElementKind { 
        if (this.__$TYPE_PARAMETER===undefined) {
            this.__$TYPE_PARAMETER = new ElementKind('TYPE_PARAMETER',21,"type parameter");
        }
        return this.__$TYPE_PARAMETER;
    }

    private static __$UNIVERSE : ElementKind;
    static get UNIVERSE() : ElementKind { 
        if (this.__$UNIVERSE===undefined) {
            this.__$UNIVERSE = new ElementKind('UNIVERSE',22,"<universe>");
        }
        return this.__$UNIVERSE;
    }

    private static __$values : core.DartList<ElementKind>;
    static get values() : core.DartList<ElementKind> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(ElementKind.CLASS,ElementKind.COMPILATION_UNIT,ElementKind.CONSTRUCTOR,ElementKind.DYNAMIC,ElementKind.ERROR,ElementKind.EXPORT,ElementKind.FIELD,ElementKind.FUNCTION,ElementKind.GENERIC_FUNCTION_TYPE,ElementKind.GETTER,ElementKind.IMPORT,ElementKind.LABEL,ElementKind.LIBRARY,ElementKind.LOCAL_VARIABLE,ElementKind.METHOD,ElementKind.NAME,ElementKind.PARAMETER,ElementKind.PREFIX,ElementKind.SETTER,ElementKind.TOP_LEVEL_VARIABLE,ElementKind.FUNCTION_TYPE_ALIAS,ElementKind.TYPE_PARAMETER,ElementKind.UNIVERSE);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    displayName : string;

    constructor(name : string,ordinal : number,displayName : string) {
    }
    @defaultConstructor
    ElementKind(name : string,ordinal : number,displayName : string) {
        this.name = name;
        this.ordinal = ordinal;
        this.displayName = displayName;
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
    compareTo(other : ElementKind) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
    static of(element : Element) : ElementKind {
        if (op(Op.EQUALS,element,null)) {
            return ElementKind.ERROR;
        }
        return element.kind;
    }
}

export namespace ElementLocation {
    export type Constructors = 'ElementLocation';
    export type Interface = Omit<ElementLocation, Constructors>;
}
@DartClass
export class ElementLocation {
    @AbstractProperty
    get components() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get encoding() : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ElementLocation() {
    }
}

export namespace ElementVisitor {
    export type Constructors = 'ElementVisitor';
    export type Interface<R> = Omit<ElementVisitor<R>, Constructors>;
}
@DartClass
export class ElementVisitor<R> {
    @Abstract
    visitClassElement(element : ClassElement) : R{ throw 'abstract'}
    @Abstract
    visitCompilationUnitElement(element : CompilationUnitElement) : R{ throw 'abstract'}
    @Abstract
    visitConstructorElement(element : ConstructorElement) : R{ throw 'abstract'}
    @Abstract
    visitExportElement(element : ExportElement) : R{ throw 'abstract'}
    @Abstract
    visitFieldElement(element : FieldElement) : R{ throw 'abstract'}
    @Abstract
    visitFieldFormalParameterElement(element : FieldFormalParameterElement) : R{ throw 'abstract'}
    @Abstract
    visitFunctionElement(element : FunctionElement) : R{ throw 'abstract'}
    @Abstract
    visitFunctionTypeAliasElement(element : FunctionTypeAliasElement) : R{ throw 'abstract'}
    @Abstract
    visitGenericFunctionTypeElement(element : GenericFunctionTypeElement) : R{ throw 'abstract'}
    @Abstract
    visitImportElement(element : ImportElement) : R{ throw 'abstract'}
    @Abstract
    visitLabelElement(element : LabelElement) : R{ throw 'abstract'}
    @Abstract
    visitLibraryElement(element : LibraryElement) : R{ throw 'abstract'}
    @Abstract
    visitLocalVariableElement(element : LocalVariableElement) : R{ throw 'abstract'}
    @Abstract
    visitMethodElement(element : MethodElement) : R{ throw 'abstract'}
    @Abstract
    visitMultiplyDefinedElement(element : MultiplyDefinedElement) : R{ throw 'abstract'}
    @Abstract
    visitParameterElement(element : ParameterElement) : R{ throw 'abstract'}
    @Abstract
    visitPrefixElement(element : PrefixElement) : R{ throw 'abstract'}
    @Abstract
    visitPropertyAccessorElement(element : PropertyAccessorElement) : R{ throw 'abstract'}
    @Abstract
    visitTopLevelVariableElement(element : TopLevelVariableElement) : R{ throw 'abstract'}
    @Abstract
    visitTypeParameterElement(element : TypeParameterElement) : R{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ElementVisitor() {
    }
}

export namespace ExecutableElement {
    export type Constructors = 'ExecutableElement';
    export type Interface = Omit<ExecutableElement, Constructors>;
}
@DartClass
@Implements(FunctionTypedElement)
export class ExecutableElement implements FunctionTypedElement.Interface {
    private static __$EMPTY_LIST : core.DartList<ExecutableElement>;
    static get EMPTY_LIST() : core.DartList<ExecutableElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ExecutableElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get functions() : core.DartList<FunctionElement>{ throw 'abstract'}
    @AbstractProperty
    get hasImplicitReturnType() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isAbstract() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isAsynchronous() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isExternal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isGenerator() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isOperator() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSynchronous() : boolean{ throw 'abstract'}
    @AbstractProperty
    get labels() : core.DartList<LabelElement>{ throw 'abstract'}
    @AbstractProperty
    get localVariables() : core.DartList<LocalVariableElement>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ExecutableElement() {
    }
}

export namespace ExportElement {
    export type Constructors = 'ExportElement';
    export type Interface = Omit<ExportElement, Constructors>;
}
@DartClass
@Implements(Element,UriReferencedElement)
export class ExportElement implements Element.Interface,UriReferencedElement.Interface {
    private static __$EMPTY_LIST : core.DartList<ExportElement>;
    static get EMPTY_LIST() : core.DartList<ExportElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ExportElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get combinators() : core.DartList<NamespaceCombinator>{ throw 'abstract'}
    @AbstractProperty
    get exportedLibrary() : LibraryElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ExportElement() {
    }
}

export namespace FieldElement {
    export type Constructors = 'FieldElement';
    export type Interface = Omit<FieldElement, Constructors>;
}
@DartClass
@Implements(ClassMemberElement,PropertyInducingElement)
export class FieldElement implements ClassMemberElement.Interface,PropertyInducingElement.Interface {
    private static __$EMPTY_LIST : core.DartList<FieldElement>;
    static get EMPTY_LIST() : core.DartList<FieldElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<FieldElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get isEnumConstant() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isVirtual() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FieldElement() {
    }
}

export namespace FieldFormalParameterElement {
    export type Constructors = 'FieldFormalParameterElement';
    export type Interface = Omit<FieldFormalParameterElement, Constructors>;
}
@DartClass
@Implements(ParameterElement)
export class FieldFormalParameterElement implements ParameterElement.Interface {
    @AbstractProperty
    get field() : FieldElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FieldFormalParameterElement() {
    }
}

export namespace ClassElement {
    export type Constructors = 'ClassElement';
    export type Interface = Omit<ClassElement, Constructors>;
}
@DartClass
@Implements(TypeDefiningElement,TypeParameterizedElement)
export class ClassElement implements TypeDefiningElement.Interface,TypeParameterizedElement.Interface {
    private static __$EMPTY_LIST : core.DartList<ClassElement>;
    static get EMPTY_LIST() : core.DartList<ClassElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ClassElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get accessors() : core.DartList<PropertyAccessorElement>{ throw 'abstract'}
    @AbstractProperty
    get allSupertypes() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get constructors() : core.DartList<ConstructorElement>{ throw 'abstract'}
    @AbstractProperty
    get fields() : core.DartList<FieldElement>{ throw 'abstract'}
    @AbstractProperty
    get hasNonFinalField() : boolean{ throw 'abstract'}
    @AbstractProperty
    get hasReferenceToSuper() : boolean{ throw 'abstract'}
    @AbstractProperty
    get hasStaticMember() : boolean{ throw 'abstract'}
    @AbstractProperty
    get interfaces() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get isAbstract() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isEnum() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isMixinApplication() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isOrInheritsProxy() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isProxy() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isValidMixin() : boolean{ throw 'abstract'}
    @AbstractProperty
    get methods() : core.DartList<MethodElement>{ throw 'abstract'}
    @AbstractProperty
    get mixins() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get supertype() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    @AbstractProperty
    get unnamedConstructor() : ConstructorElement{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    @Abstract
    getField(name : string) : FieldElement{ throw 'abstract'}
    @Abstract
    getGetter(name : string) : PropertyAccessorElement{ throw 'abstract'}
    @Abstract
    getMethod(name : string) : MethodElement{ throw 'abstract'}
    @Abstract
    getNamedConstructor(name : string) : ConstructorElement{ throw 'abstract'}
    @Abstract
    getSetter(name : string) : PropertyAccessorElement{ throw 'abstract'}
    @Abstract
    isSuperConstructorAccessible(constructor : ConstructorElement) : boolean{ throw 'abstract'}
    @Abstract
    lookUpConcreteMethod(methodName : string,library : LibraryElement) : MethodElement{ throw 'abstract'}
    @Abstract
    lookUpGetter(getterName : string,library : LibraryElement) : PropertyAccessorElement{ throw 'abstract'}
    @Abstract
    lookUpInheritedConcreteGetter(getterName : string,library : LibraryElement) : PropertyAccessorElement{ throw 'abstract'}
    @Abstract
    lookUpInheritedConcreteMethod(methodName : string,library : LibraryElement) : MethodElement{ throw 'abstract'}
    @Abstract
    lookUpInheritedConcreteSetter(setterName : string,library : LibraryElement) : PropertyAccessorElement{ throw 'abstract'}
    @Abstract
    lookUpInheritedMethod(methodName : string,library : LibraryElement) : MethodElement{ throw 'abstract'}
    @Abstract
    lookUpMethod(methodName : string,library : LibraryElement) : MethodElement{ throw 'abstract'}
    @Abstract
    lookUpSetter(setterName : string,library : LibraryElement) : PropertyAccessorElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ClassElement() {
    }
}

export namespace FunctionTypeAliasElement {
    export type Constructors = 'FunctionTypeAliasElement';
    export type Interface = Omit<FunctionTypeAliasElement, Constructors>;
}
@DartClass
@Implements(FunctionTypedElement,TypeDefiningElement)
export class FunctionTypeAliasElement implements FunctionTypedElement.Interface,TypeDefiningElement.Interface {
    private static __$EMPTY_LIST : core.DartList<FunctionTypeAliasElement>;
    static get EMPTY_LIST() : core.DartList<FunctionTypeAliasElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList<FunctionTypeAliasElement>(0);
        }
        return this.__$EMPTY_LIST;
    }
    static set EMPTY_LIST(__$value : core.DartList<FunctionTypeAliasElement>)  { 
        this.__$EMPTY_LIST = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enclosingElement() : CompilationUnitElement{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FunctionTypeAliasElement() {
    }
}

export namespace FunctionTypedElement {
    export type Constructors = 'FunctionTypedElement';
    export type Interface = Omit<FunctionTypedElement, Constructors>;
}
@DartClass
@Implements(TypeParameterizedElement)
export class FunctionTypedElement implements TypeParameterizedElement.Interface {
    @AbstractProperty
    get parameters() : core.DartList<ParameterElement>{ throw 'abstract'}
    @AbstractProperty
    get returnType() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FunctionTypedElement() {
    }
}

export namespace GenericFunctionTypeElement {
    export type Constructors = 'GenericFunctionTypeElement';
    export type Interface = Omit<GenericFunctionTypeElement, Constructors>;
}
@DartClass
@Implements(FunctionTypedElement)
export class GenericFunctionTypeElement implements FunctionTypedElement.Interface {
    constructor() {
    }
    @defaultConstructor
    GenericFunctionTypeElement() {
    }
}

export namespace GenericTypeAliasElement {
    export type Constructors = 'GenericTypeAliasElement';
    export type Interface = Omit<GenericTypeAliasElement, Constructors>;
}
@DartClass
@Implements(FunctionTypeAliasElement)
export class GenericTypeAliasElement implements FunctionTypeAliasElement.Interface {
    @AbstractProperty
    get function() : GenericFunctionTypeElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    GenericTypeAliasElement() {
    }
}

export namespace HideElementCombinator {
    export type Constructors = 'HideElementCombinator';
    export type Interface = Omit<HideElementCombinator, Constructors>;
}
@DartClass
@Implements(NamespaceCombinator)
export class HideElementCombinator implements NamespaceCombinator.Interface {
    @AbstractProperty
    get hiddenNames() : core.DartList<string>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HideElementCombinator() {
    }
}

export namespace ImportElement {
    export type Constructors = 'ImportElement';
    export type Interface = Omit<ImportElement, Constructors>;
}
@DartClass
@Implements(Element,UriReferencedElement)
export class ImportElement implements Element.Interface,UriReferencedElement.Interface {
    private static __$EMPTY_LIST : core.DartList<ImportElement>;
    static get EMPTY_LIST() : core.DartList<ImportElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ImportElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get combinators() : core.DartList<NamespaceCombinator>{ throw 'abstract'}
    @AbstractProperty
    get importedLibrary() : LibraryElement{ throw 'abstract'}
    @AbstractProperty
    get isDeferred() : boolean{ throw 'abstract'}
    @AbstractProperty
    get prefix() : PrefixElement{ throw 'abstract'}
    @AbstractProperty
    get prefixOffset() : number{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ImportElement() {
    }
}

export namespace LabelElement {
    export type Constructors = 'LabelElement';
    export type Interface = Omit<LabelElement, Constructors>;
}
@DartClass
@Implements(Element)
export class LabelElement implements Element.Interface {
    private static __$EMPTY_LIST : core.DartList<LabelElement>;
    static get EMPTY_LIST() : core.DartList<LabelElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<LabelElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enclosingElement() : ExecutableElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LabelElement() {
    }
}

export namespace LibraryElement {
    export type Constructors = 'LibraryElement';
    export type Interface = Omit<LibraryElement, Constructors>;
}
@DartClass
@Implements(Element)
export class LibraryElement implements Element.Interface {
    private static __$EMPTY_LIST : core.DartList<LibraryElement>;
    static get EMPTY_LIST() : core.DartList<LibraryElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<LibraryElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get definingCompilationUnit() : CompilationUnitElement{ throw 'abstract'}
    @AbstractProperty
    get entryPoint() : FunctionElement{ throw 'abstract'}
    @AbstractProperty
    get exportedLibraries() : core.DartList<LibraryElement>{ throw 'abstract'}
    @AbstractProperty
    get exportNamespace() : any{ throw 'abstract'}
    @AbstractProperty
    get exports() : core.DartList<ExportElement>{ throw 'abstract'}
    @AbstractProperty
    get hasExtUri() : boolean{ throw 'abstract'}
    @AbstractProperty
    get hasLoadLibraryFunction() : boolean{ throw 'abstract'}
    @AbstractProperty
    get identifier() : string{ throw 'abstract'}
    @AbstractProperty
    get importedLibraries() : core.DartList<LibraryElement>{ throw 'abstract'}
    @AbstractProperty
    get imports() : core.DartList<ImportElement>{ throw 'abstract'}
    @AbstractProperty
    get isBrowserApplication() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDartAsync() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDartCore() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isInSdk() : boolean{ throw 'abstract'}
    @AbstractProperty
    get libraryCycle() : core.DartList<LibraryElement>{ throw 'abstract'}
    @AbstractProperty
    get loadLibraryFunction() : FunctionElement{ throw 'abstract'}
    @AbstractProperty
    get parts() : core.DartList<CompilationUnitElement>{ throw 'abstract'}
    @AbstractProperty
    get prefixes() : core.DartList<PrefixElement>{ throw 'abstract'}
    @AbstractProperty
    get publicNamespace() : any{ throw 'abstract'}
    @AbstractProperty
    get units() : core.DartList<CompilationUnitElement>{ throw 'abstract'}
    @Abstract
    getImportsWithPrefix(prefix : PrefixElement) : core.DartList<ImportElement>{ throw 'abstract'}
    @Abstract
    getType(className : string) : ClassElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LibraryElement() {
    }
}

export namespace LocalElement {
    export type Constructors = 'LocalElement';
    export type Interface = Omit<LocalElement, Constructors>;
}
@DartClass
@Implements(Element)
export class LocalElement implements Element.Interface {
    @AbstractProperty
    get visibleRange() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LocalElement() {
    }
}

export namespace LocalVariableElement {
    export type Constructors = 'LocalVariableElement';
    export type Interface = Omit<LocalVariableElement, Constructors>;
}
@DartClass
@Implements(LocalElement,VariableElement)
export class LocalVariableElement implements LocalElement.Interface,VariableElement.Interface {
    private static __$EMPTY_LIST : core.DartList<LocalVariableElement>;
    static get EMPTY_LIST() : core.DartList<LocalVariableElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<LocalVariableElement>();
        }
        return this.__$EMPTY_LIST;
    }

    constructor() {
    }
    @defaultConstructor
    LocalVariableElement() {
    }
}

export namespace MethodElement {
    export type Constructors = 'MethodElement';
    export type Interface = Omit<MethodElement, Constructors>;
}
@DartClass
@Implements(ClassMemberElement,ExecutableElement)
export class MethodElement implements ClassMemberElement.Interface,ExecutableElement.Interface {
    private static __$EMPTY_LIST : core.DartList<MethodElement>;
    static get EMPTY_LIST() : core.DartList<MethodElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<MethodElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    @Abstract
    getReifiedType(objectType : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MethodElement() {
    }
}

export namespace VariableElement {
    export type Constructors = 'VariableElement';
    export type Interface = Omit<VariableElement, Constructors>;
}
@DartClass
@Implements(Element,any)
export class VariableElement implements Element.Interface,any.Interface {
    private static __$EMPTY_LIST : core.DartList<VariableElement>;
    static get EMPTY_LIST() : core.DartList<VariableElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<VariableElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get constantValue() : any{ throw 'abstract'}
    @AbstractProperty
    get hasImplicitType() : boolean{ throw 'abstract'}
    @AbstractProperty
    get initializer() : FunctionElement{ throw 'abstract'}
    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFinal() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get isPotentiallyMutatedInClosure() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get isPotentiallyMutatedInScope() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    @Abstract
    computeConstantValue() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    VariableElement() {
    }
}

export namespace MultiplyInheritedExecutableElement {
    export type Constructors = 'MultiplyInheritedExecutableElement';
    export type Interface = Omit<MultiplyInheritedExecutableElement, Constructors>;
}
@DartClass
@Implements(ExecutableElement)
export class MultiplyInheritedExecutableElement implements ExecutableElement.Interface {
    @AbstractProperty
    get inheritedElements() : core.DartList<ExecutableElement>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MultiplyInheritedExecutableElement() {
    }
}

export namespace NamespaceCombinator {
    export type Constructors = 'NamespaceCombinator';
    export type Interface = Omit<NamespaceCombinator, Constructors>;
}
@DartClass
export class NamespaceCombinator {
    private static __$EMPTY_LIST : core.DartList<NamespaceCombinator>;
    static get EMPTY_LIST() : core.DartList<NamespaceCombinator> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<NamespaceCombinator>();
        }
        return this.__$EMPTY_LIST;
    }

    constructor() {
    }
    @defaultConstructor
    NamespaceCombinator() {
    }
}

export namespace ParameterElement {
    export type Constructors = 'ParameterElement';
    export type Interface = Omit<ParameterElement, Constructors>;
}
@DartClass
@Implements(LocalElement,VariableElement,any)
export class ParameterElement implements LocalElement.Interface,VariableElement.Interface,any.Interface {
    private static __$EMPTY_LIST : core.DartList<ParameterElement>;
    static get EMPTY_LIST() : core.DartList<ParameterElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ParameterElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get defaultValueCode() : string{ throw 'abstract'}
    @AbstractProperty
    get isCovariant() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isInitializingFormal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get parameterKind() : any{ throw 'abstract'}
    @AbstractProperty
    get parameters() : core.DartList<ParameterElement>{ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : core.DartList<TypeParameterElement>{ throw 'abstract'}
    @Abstract
    appendToWithoutDelimiters(buffer : core.DartStringBuffer) : void{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ParameterElement() {
    }
}

export namespace PrefixElement {
    export type Constructors = 'PrefixElement';
    export type Interface = Omit<PrefixElement, Constructors>;
}
@DartClass
@Implements(Element)
export class PrefixElement implements Element.Interface {
    private static __$EMPTY_LIST : core.DartList<PrefixElement>;
    static get EMPTY_LIST() : core.DartList<PrefixElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<PrefixElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enclosingElement() : LibraryElement{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get importedLibraries() : core.DartList<LibraryElement>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PrefixElement() {
    }
}

export namespace PropertyAccessorElement {
    export type Constructors = 'PropertyAccessorElement';
    export type Interface = Omit<PropertyAccessorElement, Constructors>;
}
@DartClass
@Implements(ExecutableElement)
export class PropertyAccessorElement implements ExecutableElement.Interface {
    private static __$EMPTY_LIST : core.DartList<PropertyAccessorElement>;
    static get EMPTY_LIST() : core.DartList<PropertyAccessorElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<PropertyAccessorElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get correspondingGetter() : PropertyAccessorElement{ throw 'abstract'}
    @AbstractProperty
    get correspondingSetter() : PropertyAccessorElement{ throw 'abstract'}
    @AbstractProperty
    get isGetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get variable() : PropertyInducingElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PropertyAccessorElement() {
    }
}

export namespace PropertyInducingElement {
    export type Constructors = 'PropertyInducingElement';
    export type Interface = Omit<PropertyInducingElement, Constructors>;
}
@DartClass
@Implements(VariableElement)
export class PropertyInducingElement implements VariableElement.Interface {
    private static __$EMPTY_LIST : core.DartList<PropertyInducingElement>;
    static get EMPTY_LIST() : core.DartList<PropertyInducingElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<PropertyInducingElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get getter() : PropertyAccessorElement{ throw 'abstract'}
    @AbstractProperty
    get propagatedType() : any{ throw 'abstract'}
    @AbstractProperty
    get setter() : PropertyAccessorElement{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PropertyInducingElement() {
    }
}

export namespace ShowElementCombinator {
    export type Constructors = 'ShowElementCombinator';
    export type Interface = Omit<ShowElementCombinator, Constructors>;
}
@DartClass
@Implements(NamespaceCombinator)
export class ShowElementCombinator implements NamespaceCombinator.Interface {
    @AbstractProperty
    get end() : number{ throw 'abstract'}
    @AbstractProperty
    get offset() : number{ throw 'abstract'}
    @AbstractProperty
    get shownNames() : core.DartList<string>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ShowElementCombinator() {
    }
}

export namespace TopLevelVariableElement {
    export type Constructors = 'TopLevelVariableElement';
    export type Interface = Omit<TopLevelVariableElement, Constructors>;
}
@DartClass
@Implements(PropertyInducingElement)
export class TopLevelVariableElement implements PropertyInducingElement.Interface {
    private static __$EMPTY_LIST : core.DartList<TopLevelVariableElement>;
    static get EMPTY_LIST() : core.DartList<TopLevelVariableElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<TopLevelVariableElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeNode() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TopLevelVariableElement() {
    }
}

export namespace TypeDefiningElement {
    export type Constructors = 'TypeDefiningElement';
    export type Interface = Omit<TypeDefiningElement, Constructors>;
}
@DartClass
@Implements(Element)
export class TypeDefiningElement implements Element.Interface {
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeDefiningElement() {
    }
}

export namespace TypeParameterElement {
    export type Constructors = 'TypeParameterElement';
    export type Interface = Omit<TypeParameterElement, Constructors>;
}
@DartClass
@Implements(TypeDefiningElement)
export class TypeParameterElement implements TypeDefiningElement.Interface {
    private static __$EMPTY_LIST : core.DartList<TypeParameterElement>;
    static get EMPTY_LIST() : core.DartList<TypeParameterElement> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<TypeParameterElement>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get bound() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeParameterElement() {
    }
}

export namespace TypeParameterizedElement {
    export type Constructors = 'TypeParameterizedElement';
    export type Interface = Omit<TypeParameterizedElement, Constructors>;
}
@DartClass
@Implements(Element)
export class TypeParameterizedElement implements Element.Interface {
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : core.DartList<TypeParameterElement>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeParameterizedElement() {
    }
}

export namespace UndefinedElement {
    export type Constructors = 'UndefinedElement';
    export type Interface = Omit<UndefinedElement, Constructors>;
}
@DartClass
@Implements(Element)
export class UndefinedElement implements Element.Interface {
    constructor() {
    }
    @defaultConstructor
    UndefinedElement() {
    }
}

export namespace UriReferencedElement {
    export type Constructors = 'UriReferencedElement';
    export type Interface = Omit<UriReferencedElement, Constructors>;
}
@DartClass
@Implements(Element)
export class UriReferencedElement implements Element.Interface {
    @AbstractProperty
    get uri() : string{ throw 'abstract'}
    @AbstractProperty
    get uriEnd() : number{ throw 'abstract'}
    @AbstractProperty
    get uriOffset() : number{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    UriReferencedElement() {
    }
}

export namespace MultiplyDefinedElement {
    export type Constructors = 'MultiplyDefinedElement';
    export type Interface = Omit<MultiplyDefinedElement, Constructors>;
}
@DartClass
@Implements(Element)
export class MultiplyDefinedElement implements Element.Interface {
    @AbstractProperty
    get conflictingElements() : core.DartList<Element>{ throw 'abstract'}
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MultiplyDefinedElement() {
    }
}

export class properties {
}
