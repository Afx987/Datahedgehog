/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/link.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var isIncrementOrDecrement : (operator : any) => boolean = (operator : any) : boolean =>  {
    switch (operator) {
        case UnlinkedExprAssignOperator.prefixDecrement:
        case UnlinkedExprAssignOperator.prefixIncrement:
        case UnlinkedExprAssignOperator.postfixDecrement:
        case UnlinkedExprAssignOperator.postfixIncrement:
            return true;
        default:
            return false;
    }
};
export var link : (libraryUris : core.DartSet<string>,getDependency : (absoluteUri : string) => any,getUnit : (absoluteUri : string) => any,getDeclaredVariable : any,strong : boolean) => core.DartMap<string,any> = (libraryUris : core.DartSet<string>,getDependency : (absoluteUri : string) => any,getUnit : (absoluteUri : string) => any,getDeclaredVariable : any,strong : boolean) : core.DartMap<string,any> =>  {
    let linkedLibraries : core.DartMap<string,any> = setupForLink(libraryUris,getUnit,getDeclaredVariable);
    relink(linkedLibraries,getDependency,getUnit,strong);
    return linkedLibraries;
};
export var relink : (libraries : core.DartMap<string,any>,getDependency : (absoluteUri : string) => any,getUnit : (absoluteUri : string) => any,strong : boolean) => void = (libraries : core.DartMap<string,any>,getDependency : (absoluteUri : string) => any,getUnit : (absoluteUri : string) => any,strong : boolean) : void =>  {
    new Linker(libraries,getDependency,getUnit,strong).link();
};
export var setupForLink : (libraryUris : core.DartSet<string>,getUnit : (absoluteUri : string) => any,getDeclaredVariable : any) => core.DartMap<string,any> = (libraryUris : core.DartSet<string>,getUnit : (absoluteUri : string) => any,getDeclaredVariable : any) : core.DartMap<string,any> =>  {
    let linkedLibraries : core.DartMap<string,any> = new core.DartMap.literal([
    ]);
    for(let absoluteUri of libraryUris) {
        linkedLibraries.set(absoluteUri,prelink(absoluteUri,getUnit(absoluteUri),getUnit,(absoluteUri : string) =>  {
            return ((t)=>(!!t)?t.publicNamespace:null)(getUnit(absoluteUri));
        },getDeclaredVariable));
    }
    return linkedLibraries;
};
export var _createLinkedType : (type : any,compilationUnit : CompilationUnitElementInBuildUnit,typeParameterContext : any,_namedArguments? : {slot? : number}) => any = (type : any,compilationUnit : CompilationUnitElementInBuildUnit,typeParameterContext : any,_namedArguments? : {slot? : number}) : any =>  {
    let {slot} = Object.assign({
    }, _namedArguments );
    let result : any = new bare.createInstance(any,null,{
        slot : slot});
    if (is(type, any)) {
        let element : ClassElementForLink = type.element;
        result.reference = compilationUnit.addReference(element);
        _storeTypeArguments(type.typeArguments,result,compilationUnit,typeParameterContext);
        return result;
    }else if (is(type, any)) {
        result.reference = compilationUnit.addRawReference('dynamic');
        return result;
    }else if (is(type, any)) {
        result.reference = compilationUnit.addRawReference('void');
        return result;
    }else if (is(type, any)) {
        result.reference = compilationUnit.addRawReference('*bottom*');
        return result;
    }else if (is(type, any)) {
        let element : any = type.element;
        if (typeParameterContext.isTypeParameterInScope(element)) {
            result.paramReference = op(Op.MINUS,typeParameterContext.typeParameterNestingLevel,element.nestingLevel);
        }else {
            throw new core.StateError(`The type parameter ${type} (in ${((t)=>(!!t)?t.location:null)(element)}) ` + `is out of scope on ${((t)=>(!!t)?t.location:null)(typeParameterContext)}.`);
        }
        return result;
    }else if (is(type, any)) {
        let element : any = type.element;
        if (is(element, FunctionElementForLink_FunctionTypedParam)) {
            result.reference = compilationUnit.addReference(element.typeParameterContext);
            result.implicitFunctionTypeIndices = element.implicitFunctionTypeIndices;
            _storeTypeArguments(type.typeArguments,result,compilationUnit,typeParameterContext);
            return result;
        }
        if (is(element, TopLevelFunctionElementForLink)) {
            result.reference = compilationUnit.addReference(element);
            _storeTypeArguments(type.typeArguments,result,compilationUnit,typeParameterContext);
            return result;
        }
        if (is(element, MethodElementForLink)) {
            result.reference = compilationUnit.addReference(element);
            _storeTypeArguments(type.typeArguments,result,compilationUnit,typeParameterContext);
            return result;
        }
        if (is(element, FunctionTypeAliasElementForLink)) {
            result.reference = compilationUnit.addReference(element);
            _storeTypeArguments(type.typeArguments,result,compilationUnit,typeParameterContext);
            return result;
        }
        if (is(element, any) && op(Op.EQUALS,element.enclosingElement,null)) {
            result.syntheticReturnType = _createLinkedType(element.returnType,compilationUnit,typeParameterContext);
            result.entityKind = is(((t)=>(!!t)?t.element:null)(element.returnType), any) ? EntityRefKind.genericFunctionType : EntityRefKind.syntheticFunction;
            result.syntheticParams = element.parameters.map((param : any) =>  {
                return _serializeSyntheticParam(param,compilationUnit,typeParameterContext);
            }).toList();
            return result;
        }
        if (is(element, any)) {
            result.reference = compilationUnit.addReference(element);
            return result;
        }
        throw new core.UnimplementedError(`${element.runtimeType}`);
    }
    throw new core.UnimplementedError(`${type.runtimeType}`);
};
export var _dynamicIfNull : (type : any) => any = (type : any) : any =>  {
    if (op(Op.EQUALS,type,null) || type.isBottom || type.isDartCoreNull) {
        return DynamicTypeImpl.instance;
    }
    return type;
};
export var _serializeSyntheticParam : (parameter : any,compilationUnit : CompilationUnitElementInBuildUnit,typeParameterContext : any) => any = (parameter : any,compilationUnit : CompilationUnitElementInBuildUnit,typeParameterContext : any) : any =>  {
    let b : any = new bare.createInstance(any,null);
    b.name = parameter.name;
    switch (parameter.parameterKind) {
        case ParameterKind.REQUIRED:
            b.kind = UnlinkedParamKind.required;
            break;
        case ParameterKind.POSITIONAL:
            b.kind = UnlinkedParamKind.positional;
            break;
        case ParameterKind.NAMED:
            b.kind = UnlinkedParamKind.named;
            break;
    }
    let type : any = parameter.type;
    if (!parameter.hasImplicitType) {
        if (is(type, any) && type.element.isSynthetic) {
            b.isFunctionTyped = true;
            b.type = _createLinkedType(type.returnType,compilationUnit,typeParameterContext);
            b.parameters = type.parameters.map((parameter : any) =>  {
                return _serializeSyntheticParam(parameter,compilationUnit,typeParameterContext);
            }).toList();
        }else {
            b.type = _createLinkedType(type,compilationUnit,typeParameterContext);
        }
    }
    return b;
};
export var _storeTypeArguments : (typeArguments : core.DartList<any>,encodedType : any,compilationUnit : CompilationUnitElementInBuildUnit,typeParameterContext : any) => void = (typeArguments : core.DartList<any>,encodedType : any,compilationUnit : CompilationUnitElementInBuildUnit,typeParameterContext : any) : void =>  {
    let count : number = typeArguments.length;
    let encodedTypeArguments : core.DartList<any> = new core.DartList<any>(count);
    for(let i : number = 0; i < count; i++){
        encodedTypeArguments[i] = _createLinkedType(typeArguments[i],compilationUnit,typeParameterContext);
    }
    encodedType.typeArguments = encodedTypeArguments;
};
export namespace FunctionElementForLink_FunctionTypedParam {
    export type Constructors = 'FunctionElementForLink_FunctionTypedParam';
    export type Interface = Omit<FunctionElementForLink_FunctionTypedParam, Constructors>;
}
@DartClass
@Implements(any)
@With(ParameterParentElementForLink)
export class FunctionElementForLink_FunctionTypedParam extends core.DartObject implements any.Interface,ParameterParentElementForLink.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : ParameterElementForLink;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeParameterContext : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unlinkedParameters : core.DartList<any>;

    _returnType : any;

    _implicitFunctionTypeIndices : core.DartList<number>;

    constructor(enclosingElement : ParameterElementForLink,typeParameterContext : any,unlinkedParameters : core.DartList<any>) {
    }
    @defaultConstructor
    FunctionElementForLink_FunctionTypedParam(enclosingElement : ParameterElementForLink,typeParameterContext : any,unlinkedParameters : core.DartList<any>) {
        this.enclosingElement = enclosingElement;
        this.typeParameterContext = typeParameterContext;
        this.unlinkedParameters = unlinkedParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitFunctionTypeIndices() : core.DartList<number> {
        if (this._implicitFunctionTypeIndices == null) {
            this._implicitFunctionTypeIndices = this.enclosingElement.enclosingElement.implicitFunctionTypeIndices.toList();
            this._implicitFunctionTypeIndices.add(this.enclosingElement._parameterIndex);
        }
        return this._implicitFunctionTypeIndices;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        if (op(Op.EQUALS,this._returnType,null)) {
            if (op(Op.EQUALS,this.enclosingElement._unlinkedParam.type,null)) {
                this._returnType = DynamicTypeImpl.instance;
            }else {
                this._returnType = this.enclosingElement.compilationUnit.resolveTypeRef(this.enclosingElement,this.enclosingElement._unlinkedParam.type);
            }
        }
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace ClassElementForLink {
    export type Constructors = 'ClassElementForLink';
    export type Interface = Omit<ClassElementForLink, Constructors>;
}
@DartClass
@Implements(any)
@With(ReferenceableElementForLink)
export class ClassElementForLink extends core.DartObject implements any.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @Abstract
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        throw 'from mixin';
    }
    _containedNames : core.DartMap<string,ReferenceableElementForLink>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : CompilationUnitElementForLink;

    hasBeenInferred : boolean;

    constructor(enclosingElement : CompilationUnitElementForLink) {
    }
    @defaultConstructor
    ClassElementForLink(enclosingElement : CompilationUnitElementForLink) {
        this.enclosingElement = enclosingElement;
        this.hasBeenInferred = !enclosingElement.isInBuildUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get accessors() : core.DartList<PropertyAccessorElementForLink>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asClass() : ClassElementForLink {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asConstructor() : ConstructorElementForLink {
        return this.unnamedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.enclosingElement.enclosingElement._linker.typeProvider.typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get constructors() : core.DartList<ConstructorElementForLink>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingUnit() : any {
        return this.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get fields() : core.DartList<FieldElementForLink>{ throw 'abstract'}
    @AbstractProperty
    get isObject() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementForLink<any> {
        return this.enclosingElement.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get methods() : core.DartList<MethodElementForLink>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get unnamedConstructor() : ConstructorElementForLink{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContainedName(name : string) : ReferenceableElementForLink {
        if (this._containedNames == null) {
            this._containedNames = new core.DartMap.literal([
            ]);
            for(let constructor of this.constructors) {
                this._containedNames.set(constructor.name,constructor);
            }
            for(let accessor of this.accessors) {
                this._containedNames.set(accessor.name,accessor);
            }
            for(let method of this.methods) {
                this._containedNames.set(method.name,method);
            }
        }
        return this._containedNames.putIfAbsent(name,() =>  {
            return UndefinedElementForLink.instance;
        });
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
        for(let accessor of this.accessors) {
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
    getMethod(methodName : string) : any {
        for(let method of this.methods) {
            if (method.name == methodName) {
                return method;
            }
        }
        return null;
    }
    @Abstract
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace ContextForLink {
    export type Constructors = 'ContextForLink';
    export type Interface = Omit<ContextForLink, Constructors>;
}
@DartClass
@Implements(any)
export class ContextForLink implements any.Interface {
    _linker : Linker;

    constructor(_linker : Linker) {
    }
    @defaultConstructor
    ContextForLink(_linker : Linker) {
        this._linker = _linker;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisOptions() : AnalysisOptionsForLink {
        return this._linker.analysisOptions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeSystem() : any {
        return this._linker.typeSystem;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace CompilationUnitElementForLink {
    export type Constructors = 'CompilationUnitElementForLink';
    export type Interface = Omit<CompilationUnitElementForLink, Constructors>;
}
@DartClass
@Implements(any,any)
export class CompilationUnitElementForLink implements any.Interface,any.Interface {
    _unlinkedUnit : any;

    _references : core.DartList<ReferenceableElementForLink>;

    _absoluteUri : string;

    _types : core.DartList<ClassElementForLink_Class>;

    _containedNames : core.DartMap<string,ReferenceableElementForLink>;

    _topLevelVariables : core.DartList<TopLevelVariableElementForLink>;

    _enums : core.DartList<ClassElementForLink_Enum>;

    _functions : core.DartList<TopLevelFunctionElementForLink>;

    _accessors : core.DartList<PropertyAccessorElementForLink>;

    _functionTypeAliases : core.DartList<FunctionTypeAliasElementForLink>;

    unitNum : number;

    constructor(unlinkedUnit : any,unitNum : number,numReferences : number,_absoluteUri : string) {
    }
    @defaultConstructor
    CompilationUnitElementForLink(unlinkedUnit : any,unitNum : number,numReferences : number,_absoluteUri : string) {
        this._references = new core.DartList<ReferenceableElementForLink>(numReferences);
        this._unlinkedUnit = unlinkedUnit;
        this.unitNum = unitNum;
        this._absoluteUri = _absoluteUri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<PropertyAccessorElementForLink> {
        if (this._accessors == null) {
            this._accessors = new core.DartList.literal<PropertyAccessorElementForLink>();
            let syntheticVariables : core.DartMap<string,SyntheticVariableElementForLink> = new core.DartMap.literal([
            ]);
            for(let unlinkedExecutable of this._unlinkedUnit.executables) {
                if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.getter) || op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.setter)) {
                    let name : string = unlinkedExecutable.name;
                    if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.setter)) {
                        /* TODO (AssertStatementImpl) : assert (name.endsWith('=')); */;
                        name = new core.DartString(name).substring(0,new core.DartString(name).length - 1);
                    }
                    let syntheticVariable : SyntheticVariableElementForLink = syntheticVariables.putIfAbsent(name,() =>  {
                        return new SyntheticVariableElementForLink();
                    });
                    let accessor : PropertyAccessorElementForLink_Executable = new PropertyAccessorElementForLink_Executable(this,null,unlinkedExecutable,syntheticVariable);
                    this._accessors.add(accessor);
                    if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.getter)) {
                        syntheticVariable._getter = accessor;
                    }else {
                        syntheticVariable._setter = accessor;
                    }
                }
            }
            for(let variable of this.topLevelVariables) {
                this._accessors.add(variable.getter);
                if (!variable.isConst && !variable.isFinal) {
                    this._accessors.add(variable.setter);
                }
            }
        }
        return this._accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : ContextForLink {
        return this.library.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enclosingElement() : LibraryElementForLink<any>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enums() : core.DartList<ClassElementForLink_Enum> {
        if (this._enums == null) {
            this._enums = new core.DartList.literal<ClassElementForLink_Enum>();
            for(let unlinkedEnum of this._unlinkedUnit.enums) {
                this._enums.add(new ClassElementForLink_Enum(this,unlinkedEnum));
            }
        }
        return this._enums;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<TopLevelFunctionElementForLink> {
        if (this._functions == null) {
            this._functions = new core.DartList.literal<TopLevelFunctionElementForLink>();
            for(let executable of this._unlinkedUnit.executables) {
                if (op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.functionOrMethod)) {
                    this._functions.add(new TopLevelFunctionElementForLink(this,executable));
                }
            }
        }
        return this._functions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionTypeAliases() : core.DartList<FunctionTypeAliasElementForLink> {
        return this._functionTypeAliases = ( this._functionTypeAliases ) || ( this._unlinkedUnit.typedefs.map((t : any) =>  {
            if (op(Op.EQUALS,t.style,TypedefStyle.functionType)) {
                return new FunctionTypeAliasElementForLink(this,t);
            }else if (op(Op.EQUALS,t.style,TypedefStyle.genericFunctionType)) {
                return new GenericTypeAliasElementForLink(this,t);
            }
        }).toList() );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this._absoluteUri;
    }
    @AbstractProperty
    get isInBuildUnit() : boolean{ throw 'abstract'}
    get isTypeInferenceComplete() : boolean {
        let libraryCycleForLink : LibraryCycleForLink = this.library.libraryCycleForLink;
        if (op(Op.EQUALS,libraryCycleForLink,null)) {
            return true;
        }else {
            return libraryCycleForLink._node.isEvaluated;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementForLink<any> {
        return this.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get resynthesizerContext() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get topLevelVariables() : core.DartList<TopLevelVariableElementForLink> {
        if (this._topLevelVariables == null) {
            this._topLevelVariables = new core.DartList.literal<TopLevelVariableElementForLink>();
            for(let unlinkedVariable of this._unlinkedUnit.variables) {
                this._topLevelVariables.add(new TopLevelVariableElementForLink(this,unlinkedVariable));
            }
        }
        return this._topLevelVariables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get types() : core.DartList<ClassElementForLink_Class> {
        if (this._types == null) {
            this._types = new core.DartList.literal<ClassElementForLink_Class>();
            for(let unlinkedClass of this._unlinkedUnit.classes) {
                this._types.add(new ClassElementForLink_Class(this,unlinkedClass));
            }
        }
        return this._types;
    }
    @AbstractProperty
    get _linkedUnit() : any{ throw 'abstract'}
    getContainedName(name : any) : ReferenceableElementForLink {
        if (this._containedNames == null) {
            this._containedNames = new core.DartMap.literal([
            ]);
            for(let type of this.types) {
                this._containedNames.set(type.name,type);
            }
            for(let enm of this.enums) {
                this._containedNames.set(enm.name,enm);
            }
            for(let function of this.functions) {
                this._containedNames.set(function.name,function);
            }
            for(let accessor of this.accessors) {
                this._containedNames.set(accessor.name,accessor);
            }
            for(let functionTypeAlias of this.functionTypeAliases) {
                this._containedNames.set(functionTypeAlias.name,functionTypeAlias);
            }
        }
        return this._containedNames.putIfAbsent(name,() =>  {
            return UndefinedElementForLink.instance;
        });
    }
    @Abstract
    getLinkedType(context : any,slot : number) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    resolveConstructorClassRef(index : number) : ReferenceableElementForLink {
        let linkedReference : any = op(Op.INDEX,this._linkedUnit.references,index);
        if (op(Op.EQUALS,linkedReference.kind,ReferenceKind.classOrEnum)) {
            return this.resolveRef(index);
        }
        if (index < this._unlinkedUnit.references.length) {
            let unlinkedReference : any = op(Op.INDEX,this._unlinkedUnit.references,index);
            return this.resolveRef(unlinkedReference.prefixReference);
        }
        return UndefinedElementForLink.instance;
    }
    resolveRef(index : number) : ReferenceableElementForLink {
        if (op(Op.EQUALS,this._references[index],null)) {
            let unlinkedReference : any = index < this._unlinkedUnit.references.length ? op(Op.INDEX,this._unlinkedUnit.references,index) : null;
            let linkedReference : any = op(Op.INDEX,this._linkedUnit.references,index);
            let name : string = op(Op.EQUALS,unlinkedReference,null) ? linkedReference.name : unlinkedReference.name;
            let containingReference : number = op(Op.EQUALS,unlinkedReference,null) ? linkedReference.containingReference : unlinkedReference.prefixReference;
            if (containingReference != 0 && op(Op.INDEX,this._linkedUnit.references,containingReference).kind != ReferenceKind.prefix) {
                if (op(Op.EQUALS,linkedReference.kind,ReferenceKind.function)) {
                    this._references[index] = (this.resolveRef(containingReference).getLocalFunction(linkedReference.localIndex) || UndefinedElementForLink.instance);
                }else {
                    this._references[index] = this.resolveRef(containingReference).getContainedName(name);
                }
            }else if (op(Op.EQUALS,linkedReference.dependency,0)) {
                if (op(Op.EQUALS,linkedReference.kind,ReferenceKind.unresolved)) {
                    this._references[index] = UndefinedElementForLink.instance;
                }else if (name == 'void') {
                    this._references[index] = this.enclosingElement._linker.voidElement;
                }else if (name == '*bottom*') {
                    this._references[index] = this.enclosingElement._linker.bottomElement;
                }else if (name == 'dynamic') {
                    this._references[index] = this.enclosingElement._linker.dynamicElement;
                }else {
                    this._references[index] = this.enclosingElement.getContainedName(name);
                }
            }else {
                let dependency : LibraryElementForLink<any> = this.enclosingElement._getDependency(linkedReference.dependency);
                this._references[index] = dependency.getContainedName(name);
            }
        }
        return this._references[index];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveTypeRef(context : any,type : any,_namedArguments? : {defaultVoid? : boolean,instantiateToBoundsAllowed? : boolean,declaredType? : boolean}) : any {
        let {defaultVoid,instantiateToBoundsAllowed,declaredType} = Object.assign({
            "defaultVoid" : false,
            "instantiateToBoundsAllowed" : true,
            "declaredType" : false}, _namedArguments );
        if (op(Op.EQUALS,type,null)) {
            if (defaultVoid) {
                return VoidTypeImpl.instance;
            }else {
                return DynamicTypeImpl.instance;
            }
        }
        if (type.paramReference != 0) {
            return context.typeParameterContext.getTypeParameterType(type.paramReference);
        }else if (type.syntheticReturnType != null) {
            throw new core.UnimplementedError();
        }else if (type.implicitFunctionTypeIndices.isNotEmpty) {
            throw new core.UnimplementedError();
        }else {
            var getTypeArgument : (i : number) => any = (i : number) : any =>  {
                if (i < type.typeArguments.length) {
                    return this.resolveTypeRef(context,op(Op.INDEX,type.typeArguments,i));
                }else if (!instantiateToBoundsAllowed) {
                    return DynamicTypeImpl.instance;
                }else {
                    return null;
                }
            };
            let element : ReferenceableElementForLink = this.resolveRef(type.reference);
            return element.buildType(getTypeArgument,type.implicitFunctionTypeIndices);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.enclosingElement.toString();
    }
}

export namespace ConstDependencyWalker {
    export type Constructors = 'ConstDependencyWalker';
    export type Interface = Omit<ConstDependencyWalker, Constructors>;
}
@DartClass
export class ConstDependencyWalker extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(v : ConstNode) : void {
        if (is(v, ConstConstructorNode)) {
            v.isCycleFree = true;
        }
        v.isEvaluated = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<ConstNode>) : void {
        for(let v of scc) {
            if (is(v, ConstConstructorNode)) {
                v.isCycleFree = false;
            }
            v.isEvaluated = true;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstDependencyWalker() {
    }
}

export namespace ConstNode {
    export type Constructors = 'ConstNode';
    export type Interface = Omit<ConstNode, Constructors>;
}
@DartClass
export class ConstNode extends any {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEvaluated : boolean;

    collectDependencies(dependencies : core.DartList<ConstNode>,unlinkedConst : any,compilationUnit : CompilationUnitElementForLink) : void {
        if (op(Op.EQUALS,unlinkedConst,null)) {
            return;
        }
        let refPtr : number = 0;
        let intPtr : number = 0;
        for(let operation of unlinkedConst.operations) {
            switch (operation) {
                case UnlinkedExprOperation.pushInt:
                    intPtr++;
                    break;
                case UnlinkedExprOperation.pushLongInt:
                    let numInts : number = op(Op.INDEX,unlinkedConst.ints,intPtr++);
                    intPtr += numInts;
                    break;
                case UnlinkedExprOperation.concatenate:
                    intPtr++;
                    break;
                case UnlinkedExprOperation.pushReference:
                    let ref : any = op(Op.INDEX,unlinkedConst.references,refPtr++);
                    let variable : ConstVariableNode = compilationUnit.resolveRef(ref.reference).asConstVariable;
                    if (variable != null) {
                        dependencies.add(variable);
                    }
                    break;
                case UnlinkedExprOperation.makeUntypedList:
                case UnlinkedExprOperation.makeUntypedMap:
                    intPtr++;
                    break;
                case UnlinkedExprOperation.assignToRef:
                    refPtr++;
                    break;
                case UnlinkedExprOperation.invokeMethodRef:
                    let ref : any = op(Op.INDEX,unlinkedConst.references,refPtr++);
                    let variable : ConstVariableNode = compilationUnit.resolveRef(ref.reference).asConstVariable;
                    if (variable != null) {
                        dependencies.add(variable);
                    }
                    intPtr += 2;
                    let numTypeArguments : number = op(Op.INDEX,unlinkedConst.ints,intPtr++);
                    refPtr += numTypeArguments;
                    break;
                case UnlinkedExprOperation.invokeMethod:
                    intPtr += 2;
                    let numTypeArguments : number = op(Op.INDEX,unlinkedConst.ints,intPtr++);
                    refPtr += numTypeArguments;
                    break;
                case UnlinkedExprOperation.makeTypedList:
                    refPtr++;
                    intPtr++;
                    break;
                case UnlinkedExprOperation.makeTypedMap:
                    refPtr += 2;
                    intPtr++;
                    break;
                case UnlinkedExprOperation.invokeConstructor:
                    let ref : any = op(Op.INDEX,unlinkedConst.references,refPtr++);
                    let element : ConstructorElementForLink = compilationUnit.resolveRef(ref.reference).asConstructor;
                    if (((t)=>(!!t)?t._constNode:null)(element) != null) {
                        dependencies.add(element._constNode);
                    }
                    intPtr += 2;
                    break;
                case UnlinkedExprOperation.typeCast:
                case UnlinkedExprOperation.typeCheck:
                    refPtr++;
                    break;
                case UnlinkedExprOperation.pushLocalFunctionReference:
                    intPtr += 2;
                    break;
                default:
                    break;
            }
        }
        /* TODO (AssertStatementImpl) : assert (refPtr == unlinkedConst.references.length); */;
        /* TODO (AssertStatementImpl) : assert (intPtr == unlinkedConst.ints.length); */;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstNode() {
        this.isEvaluated = false;
    }
}

export namespace VariableElementForLink {
    export type Constructors = 'VariableElementForLink';
    export type Interface = Omit<VariableElementForLink, Constructors>;
}
@DartClass
@Implements(any,any)
export class VariableElementForLink implements any.Interface,any.Interface {
    unlinkedVariable : any;

    _constNode : ConstNode;

    _typeInferenceNode : TypeInferenceNode;

    _initializer : FunctionElementForLink_Initializer;

    _inferredType : any;

    _declaredType : any;

    _getter : PropertyAccessorElementForLink_Variable;

    _setter : PropertyAccessorElementForLink_Variable;

    compilationUnit : CompilationUnitElementForLink;

    constructor(unlinkedVariable : any,compilationUnit : CompilationUnitElementForLink) {
    }
    @defaultConstructor
    VariableElementForLink(unlinkedVariable : any,compilationUnit : CompilationUnitElementForLink) {
        this.unlinkedVariable = unlinkedVariable;
        this.compilationUnit = compilationUnit;
        if (this.compilationUnit.isInBuildUnit && ((t)=>(!!t)?t.bodyExpr:null)(this.unlinkedVariable.initializer) != null) {
            this._constNode = new ConstVariableNode(this);
            if (op(Op.EQUALS,this.unlinkedVariable.type,null)) {
                this._typeInferenceNode = this.initializer.asTypeInferenceNode;
            }
        }
    }
    get declaredType() : any {
        if (op(Op.EQUALS,this.unlinkedVariable.type,null)) {
            return null;
        }else {
            return this._declaredType = ( this._declaredType ) || ( this.compilationUnit.resolveTypeRef(this,this.unlinkedVariable.type) );
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.unlinkedVariable.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getter() : PropertyAccessorElementForLink_Variable {
        return this._getter = ( this._getter ) || ( new PropertyAccessorElementForLink_Variable(this,false) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitType() : boolean {
        return op(Op.EQUALS,this.unlinkedVariable.type,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this.unlinkedVariable.name;
    }
    get inferredType() : any {
        /* TODO (AssertStatementImpl) : assert (unlinkedVariable.type == null); */;
        if (op(Op.EQUALS,this._inferredType,null)) {
            if (this._typeInferenceNode != null) {
                /* TODO (AssertStatementImpl) : assert (Linker._initializerTypeInferenceCycle == null); */;
                Linker._initializerTypeInferenceCycle = this.compilationUnit.library.libraryCycleForLink;
                try {
                    new TypeInferenceDependencyWalker().walk(this._typeInferenceNode);
                    /* TODO (AssertStatementImpl) : assert (_inferredType != null); */;
                } finally {
                    Linker._initializerTypeInferenceCycle = null;
                }
            }else if (this.compilationUnit.isInBuildUnit) {
                this._inferredType = DynamicTypeImpl.instance;
            }else {
                this._inferredType = this.compilationUnit.getLinkedType(this,this.unlinkedVariable.inferredTypeSlot);
            }
        }
        return this._inferredType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : FunctionElementForLink_Initializer {
        if (op(Op.EQUALS,this.unlinkedVariable.initializer,null)) {
            return null;
        }else {
            return this._initializer = ( this._initializer ) || ( new FunctionElementForLink_Initializer(this) );
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this.unlinkedVariable.isConst;
    }
    get isCovariant() : boolean {
        return this.unlinkedVariable.isCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return this.unlinkedVariable.isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this.unlinkedVariable.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedType() : any {
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get setter() : PropertyAccessorElementForLink_Variable {
        if (!this.isConst && !this.isFinal) {
            return this._setter = ( this._setter ) || ( new PropertyAccessorElementForLink_Variable(this,true) );
        }else {
            return null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return (this.declaredType || this.inferredType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(newType : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameterContext() : any {
        return this._typeParameterContext;
    }
    @AbstractProperty
    get _typeParameterContext() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${enclosingElement}.${this.name}`;
    }
}

export namespace UndefinedElementForLink {
    export type Constructors = '_';
    export type Interface = Omit<UndefinedElementForLink, Constructors>;
}
@DartClass
@With(ReferenceableElementForLink)
export class UndefinedElementForLink extends core.DartObject implements ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    @Abstract
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        throw 'from mixin';
    }
    private static __$instance : UndefinedElementForLink;
    static get instance() : UndefinedElementForLink { 
        if (this.__$instance===undefined) {
            this.__$instance = new UndefinedElementForLink._();
        }
        return this.__$instance;
    }
    static set instance(__$value : UndefinedElementForLink)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
    }
    static _ : new() => UndefinedElementForLink;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace AnalysisOptionsForLink {
    export type Constructors = 'AnalysisOptionsForLink';
    export type Interface = Omit<AnalysisOptionsForLink, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisOptionsForLink implements any.Interface {
    _linker : Linker;

    constructor(_linker : Linker) {
    }
    @defaultConstructor
    AnalysisOptionsForLink(_linker : Linker) {
        this._linker = _linker;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strongMode() : boolean {
        return this._linker.strongMode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace ExecutableElementForLink {
    export type Constructors = 'ExecutableElementForLink';
    export type Interface = Omit<ExecutableElementForLink, Constructors>;
}
@DartClass
@Implements(any)
@With(any,ParameterParentElementForLink)
export class ExecutableElementForLink extends core.DartObject implements any.Interface,any.Interface,ParameterParentElementForLink.Interface {
    _unlinkedExecutable : any;

    _declaredReturnType : any;

    _inferredReturnType : any;

    _type : any;

    _name : string;

    _displayName : string;

    compilationUnit : CompilationUnitElementForLink;

    constructor(compilationUnit : CompilationUnitElementForLink,_unlinkedExecutable : any) {
    }
    @defaultConstructor
    ExecutableElementForLink(compilationUnit : CompilationUnitElementForLink,_unlinkedExecutable : any) {
        this.compilationUnit = compilationUnit;
        this._unlinkedExecutable = _unlinkedExecutable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : ContextForLink {
        return this.compilationUnit.context;
    }
    get declaredReturnType() : any {
        if (op(Op.EQUALS,this._unlinkedExecutable.returnType,null)) {
            return null;
        }else {
            return this._declaredReturnType = ( this._declaredReturnType ) || ( this.compilationUnit.resolveTypeRef(this,this._unlinkedExecutable.returnType) );
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        if (this._displayName == null) {
            this._displayName = this._unlinkedExecutable.name;
            if (op(Op.EQUALS,this._unlinkedExecutable.kind,UnlinkedExecutableKind.setter)) {
                this._displayName = new core.DartString(this._displayName).substring(0,new core.DartString(this._displayName).length - 1);
            }
        }
        return this._displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingUnit() : any {
        return this.compilationUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitReturnType() : boolean {
        return op(Op.EQUALS,this._unlinkedExecutable.returnType,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitFunctionTypeIndices() : core.DartList<number> {
        return new core.DartList.literal<number>();
    }
    get inferredReturnType() : any {
        /* TODO (AssertStatementImpl) : assert (_unlinkedExecutable.returnType == null); */;
        if (Linker._initializerTypeInferenceCycle != null && op(Op.EQUALS,Linker._initializerTypeInferenceCycle,this.compilationUnit.library.libraryCycleForLink)) {
            return this._computeDefaultReturnType();
        }
        if (op(Op.EQUALS,this._inferredReturnType,null)) {
            if (op(Op.EQUALS,this._unlinkedExecutable.kind,UnlinkedExecutableKind.constructor)) {
                throw new core.UnimplementedError();
            }else if (this.compilationUnit.isInBuildUnit) {
                this._inferredReturnType = this._computeDefaultReturnType();
            }else {
                this._inferredReturnType = this.compilationUnit.getLinkedType(this,this._unlinkedExecutable.inferredReturnTypeSlot);
            }
        }
        return this._inferredReturnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this._unlinkedExecutable.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : any {
        return enclosingElement.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        if (this._name == null) {
            this._name = this._unlinkedExecutable.name;
            if (this._name == '-' && this._unlinkedExecutable.parameters.isEmpty) {
                this._name = 'unary-';
            }
        }
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return (this.declaredReturnType || this.inferredReturnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(inferredType : any) {
        /* TODO (AssertStatementImpl) : assert (_inferredReturnType == null); */;
        this._inferredReturnType = inferredType;
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
    get typeParameterContext() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedParameters() : core.DartList<any> {
        return this._unlinkedExecutable.parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return this._unlinkedExecutable.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAccessibleIn(library : any) : boolean {
        return !Identifier.isPrivateName(this.name) || core.identical(this.library,library);
    }
    _computeDefaultReturnType() : any {
        if (op(Op.EQUALS,this._unlinkedExecutable.kind,UnlinkedExecutableKind.setter) && (this.library as LibraryElementForLink<any>)._linker.strongMode) {
            return VoidTypeImpl.instance;
        }else {
            return DynamicTypeImpl.instance;
        }
    }
}

export namespace ExprTypeComputer {
    export type Constructors = '_';
    export type Interface = Omit<ExprTypeComputer, Constructors>;
}
@DartClass
export class ExprTypeComputer {
    function : FunctionElementForLink_Local;

    unit : CompilationUnitElementForLink;

    library : LibraryElementForLink<any>;

    linker : Linker;

    typeProvider : any;

    unlinkedConst : any;

    stack : core.DartList<any>;

    intPtr : number;

    refPtr : number;

    strPtr : number;

    assignmentOperatorPtr : number;

    errorKind : any;

    constructor(functionElement : FunctionElementForLink_Local) {
    }
    @defaultFactory
    static $ExprTypeComputer(functionElement : FunctionElementForLink_Local) : ExprTypeComputer {
        let unit : CompilationUnitElementForLink = functionElement.compilationUnit;
        let library : LibraryElementForLink<any> = unit.enclosingElement;
        let linker : Linker = library._linker;
        let typeProvider : any = linker.typeProvider;
        let unlinkedConst : any = functionElement._unlinkedExecutable.bodyExpr;
        return new ExprTypeComputer._(functionElement,unit,library,linker,typeProvider,unlinkedConst);
    }
    @namedConstructor
    _(function : FunctionElementForLink_Local,unit : CompilationUnitElementForLink,library : LibraryElementForLink<any>,linker : Linker,typeProvider : any,unlinkedConst : any) {
        this.stack = new core.DartList.literal<any>();
        this.intPtr = 0;
        this.refPtr = 0;
        this.strPtr = 0;
        this.assignmentOperatorPtr = 0;
        this.function = function;
        this.unit = unit;
        this.library = library;
        this.linker = linker;
        this.typeProvider = typeProvider;
        this.unlinkedConst = unlinkedConst;
    }
    static _ : new(function : FunctionElementForLink_Local,unit : CompilationUnitElementForLink,library : LibraryElementForLink<any>,linker : Linker,typeProvider : any,unlinkedConst : any) => ExprTypeComputer;

    compute() : any {
        if (op(Op.EQUALS,this.unlinkedConst,null)) {
            return DynamicTypeImpl.instance;
        }
        if (this.unlinkedConst.operations.isEmpty) {
            return DynamicTypeImpl.instance;
        }
        for(let operation of this.unlinkedConst.operations) {
            switch (operation) {
                case UnlinkedExprOperation.pushInt:
                    this.intPtr++;
                    this.stack.add(this.typeProvider.intType);
                    break;
                case UnlinkedExprOperation.pushLongInt:
                    let numInts : number = this._getNextInt();
                    this.intPtr += numInts;
                    this.stack.add(this.typeProvider.intType);
                    break;
                case UnlinkedExprOperation.pushDouble:
                    this.stack.add(this.typeProvider.doubleType);
                    break;
                case UnlinkedExprOperation.pushTrue:
                case UnlinkedExprOperation.pushFalse:
                    this.stack.add(this.typeProvider.boolType);
                    break;
                case UnlinkedExprOperation.pushString:
                    this.strPtr++;
                    this.stack.add(this.typeProvider.stringType);
                    break;
                case UnlinkedExprOperation.concatenate:
                    this.stack.length -= this._getNextInt();
                    this.stack.add(this.typeProvider.stringType);
                    break;
                case UnlinkedExprOperation.makeSymbol:
                    this.strPtr++;
                    this.stack.add(this.typeProvider.symbolType);
                    break;
                case UnlinkedExprOperation.pushNull:
                    this.stack.add(this.typeProvider.nullType);
                    break;
                case UnlinkedExprOperation.pushSuper:
                    this.stack.add(DynamicTypeImpl.instance);
                    break;
                case UnlinkedExprOperation.pushThis:
                    this.stack.add(DynamicTypeImpl.instance);
                    break;
                case UnlinkedExprOperation.pushReference:
                    try {
                        this._doPushReference();
                    } catch (__error__) {

                        if (is(__error__,_InferenceFailedError)){
                            this.errorKind = TopLevelInferenceErrorKind.instanceGetter;
                            return DynamicTypeImpl.instance;
                        }
                    }
                    break;
                case UnlinkedExprOperation.extractProperty:
                    try {
                        this._doExtractProperty();
                    } catch (__error__) {

                        if (is(__error__,_InferenceFailedError)){
                            this.errorKind = TopLevelInferenceErrorKind.instanceGetter;
                            return DynamicTypeImpl.instance;
                        }
                    }
                    break;
                case UnlinkedExprOperation.invokeConstructor:
                    this._doInvokeConstructor();
                    break;
                case UnlinkedExprOperation.makeUntypedList:
                    this._doMakeUntypedList();
                    break;
                case UnlinkedExprOperation.makeUntypedMap:
                    this._doMakeUntypedMap();
                    break;
                case UnlinkedExprOperation.makeTypedList:
                    this._doMakeTypedList();
                    break;
                case UnlinkedExprOperation.makeTypedMap:
                    this._doMakeTypeMap();
                    break;
                case UnlinkedExprOperation.not:
                    this.stack.length -= 1;
                    this.stack.add(this.typeProvider.boolType);
                    break;
                case UnlinkedExprOperation.complement:
                    this._computePrefixExpressionType('~');
                    break;
                case UnlinkedExprOperation.negate:
                    this._computePrefixExpressionType('unary-');
                    break;
                case UnlinkedExprOperation.and:
                case UnlinkedExprOperation.or:
                case UnlinkedExprOperation.equal:
                case UnlinkedExprOperation.notEqual:
                    this.stack.length -= 2;
                    this.stack.add(this.typeProvider.boolType);
                    break;
                case UnlinkedExprOperation.bitXor:
                    this._computeBinaryExpressionType(TokenType.CARET);
                    break;
                case UnlinkedExprOperation.bitAnd:
                    this._computeBinaryExpressionType(TokenType.AMPERSAND);
                    break;
                case UnlinkedExprOperation.bitOr:
                    this._computeBinaryExpressionType(TokenType.BAR);
                    break;
                case UnlinkedExprOperation.bitShiftRight:
                    this._computeBinaryExpressionType(TokenType.GT_GT);
                    break;
                case UnlinkedExprOperation.bitShiftLeft:
                    this._computeBinaryExpressionType(TokenType.LT_LT);
                    break;
                case UnlinkedExprOperation.add:
                    this._computeBinaryExpressionType(TokenType.PLUS);
                    break;
                case UnlinkedExprOperation.subtract:
                    this._computeBinaryExpressionType(TokenType.MINUS);
                    break;
                case UnlinkedExprOperation.multiply:
                    this._computeBinaryExpressionType(TokenType.STAR);
                    break;
                case UnlinkedExprOperation.divide:
                    this._computeBinaryExpressionType(TokenType.SLASH);
                    break;
                case UnlinkedExprOperation.floorDivide:
                    this._computeBinaryExpressionType(TokenType.TILDE_SLASH);
                    break;
                case UnlinkedExprOperation.greater:
                    this._computeBinaryExpressionType(TokenType.GT);
                    break;
                case UnlinkedExprOperation.less:
                    this._computeBinaryExpressionType(TokenType.LT);
                    break;
                case UnlinkedExprOperation.greaterEqual:
                    this._computeBinaryExpressionType(TokenType.GT_EQ);
                    break;
                case UnlinkedExprOperation.lessEqual:
                    this._computeBinaryExpressionType(TokenType.LT_EQ);
                    break;
                case UnlinkedExprOperation.modulo:
                    this._computeBinaryExpressionType(TokenType.PERCENT);
                    break;
                case UnlinkedExprOperation.conditional:
                    this._doConditional();
                    break;
                case UnlinkedExprOperation.assignToIndex:
                case UnlinkedExprOperation.assignToProperty:
                case UnlinkedExprOperation.assignToRef:
                    this.errorKind = TopLevelInferenceErrorKind.assignment;
                    return DynamicTypeImpl.instance;
                case UnlinkedExprOperation.await:
                    this._doAwait();
                    break;
                case UnlinkedExprOperation.extractIndex:
                    this._doExtractIndex();
                    break;
                case UnlinkedExprOperation.invokeMethodRef:
                    try {
                        this._doInvokeMethodRef();
                    } catch (__error__) {

                        if (is(__error__,_InferenceFailedError)){
                            this.errorKind = TopLevelInferenceErrorKind.instanceGetter;
                            return DynamicTypeImpl.instance;
                        }
                    }
                    break;
                case UnlinkedExprOperation.invokeMethod:
                    this._doInvokeMethod();
                    break;
                case UnlinkedExprOperation.cascadeSectionBegin:
                    this.stack.add(this.stack.last);
                    break;
                case UnlinkedExprOperation.cascadeSectionEnd:
                    this.stack.removeLast();
                    break;
                case UnlinkedExprOperation.typeCast:
                    this.stack.removeLast();
                    let type : any = this._getNextTypeRef();
                    this.stack.add(type);
                    break;
                case UnlinkedExprOperation.typeCheck:
                    this.stack.removeLast();
                    this.refPtr++;
                    this.stack.add(this.typeProvider.boolType);
                    break;
                case UnlinkedExprOperation.throwException:
                    this.stack.removeLast();
                    this.stack.add(BottomTypeImpl.instance);
                    break;
                case UnlinkedExprOperation.pushLocalFunctionReference:
                    let popCount : number = this._getNextInt();
                    /* TODO (AssertStatementImpl) : assert (popCount == 0); */;
                    this.stack.add(op(Op.INDEX,this.function.functions,this._getNextInt()).type);
                    break;
                case UnlinkedExprOperation.pushParameter:
                    this.stack.add(this._findParameterType(this._getNextString()));
                    break;
                case UnlinkedExprOperation.ifNull:
                    this._doIfNull();
                    break;
                default:
                    throw new core.UnimplementedError(`${operation}`);
            }
        }
        /* TODO (AssertStatementImpl) : assert (intPtr == unlinkedConst.ints.length); */;
        /* TODO (AssertStatementImpl) : assert (refPtr == unlinkedConst.references.length); */;
        /* TODO (AssertStatementImpl) : assert (strPtr == unlinkedConst.strings.length); */;
        /* TODO (AssertStatementImpl) : assert (assignmentOperatorPtr == unlinkedConst.assignmentOperators.length); */;
        /* TODO (AssertStatementImpl) : assert (stack.length == 1); */;
        return this.stack[0];
    }
    _computeBinaryExpressionType(operator : any) : void {
        let right : any = this.stack.removeLast();
        let left : any = this.stack.removeLast();
        this._pushBinaryOperatorType(left,operator,right);
    }
    _computePrefixExpressionType(operatorName : string) : void {
        let operand : any = this.stack.removeLast();
        if (is(operand, any)) {
            let method : any = operand.lookUpInheritedMethod(operatorName,{
                library : this.library});
            if (method != null) {
                let type : any = method.returnType;
                this.stack.add(type);
                return;
            }
        }
        this.stack.add(DynamicTypeImpl.instance);
    }
    _doAwait() : void {
        let type : any = this.stack.removeLast();
        let typeArgument : any = ((_497_)=>(!!_497_)?_497_.flattenFutures(this.linker.typeSystem):null)(type);
        typeArgument = _dynamicIfNull(typeArgument);
        this.stack.add(typeArgument);
    }
    _doConditional() : void {
        let elseType : any = this.stack.removeLast();
        let thenType : any = this.stack.removeLast();
        this.stack.removeLast();
        let type : any = this._leastUpperBound(thenType,elseType);
        type = _dynamicIfNull(type);
        this.stack.add(type);
    }
    _doExtractIndex() : void {
        this.stack.removeLast();
        let target : any = this.stack.removeLast();
        this.stack.add((() =>  {
            if (is(target, any)) {
                let method : any = target.lookUpInheritedMethod('[]',{
                    library : this.library});
                if (method != null) {
                    return method.returnType;
                }
            }
            return DynamicTypeImpl.instance;
        })());
    }
    _doExtractProperty() : void {
        let target : any = this.stack.removeLast();
        if (target.isDynamic) {
            target = this.typeProvider.objectType;
        }
        let propertyName : string = this._getNextString();
        this.stack.add((() =>  {
            if (is(target, any)) {
                let element : any = target.lookUpInheritedGetterOrMethod(propertyName,{
                    library : this.library});
                if (element != null) {
                    this._throwIfInstanceFieldOrAccessor(element);
                    if (is(element, any)) {
                        return element.returnType;
                    }else {
                        return element.type;
                    }
                }
            }
            return DynamicTypeImpl.instance;
        })());
    }
    _doIfNull() : void {
        let secondType : any = this.stack.removeLast();
        let firstType : any = this.stack.removeLast();
        let type : any = this._leastUpperBound(firstType,secondType);
        type = _dynamicIfNull(type);
        this.stack.add(type);
    }
    _doInvokeConstructor() : void {
        let numNamed : number = op(Op.INDEX,this.unlinkedConst.ints,this.intPtr++);
        let numPositional : number = op(Op.INDEX,this.unlinkedConst.ints,this.intPtr++);
        let namedArgNames : core.DartList<string> = this._getNextStrings(numNamed);
        let namedArgTypeList : core.DartList<any> = this._popList(numNamed);
        let positionalArgTypes : core.DartList<any> = this._popList(numPositional);
        let ref : any = this._getNextRef();
        let refElement : ReferenceableElementForLink = this.unit.resolveRef(ref.reference);
        let constructorElement : ConstructorElementForLink = refElement.asConstructor;
        if (constructorElement != null) {
            this.stack.add((() =>  {
                if (ref.typeArguments.isNotEmpty) {
                    return constructorElement.enclosingClass.buildType((i : number) =>  {
                        if (i < ref.typeArguments.length) {
                            return this.unit.resolveTypeRef(this.function,op(Op.INDEX,ref.typeArguments,i));
                        }else {
                            return null;
                        }
                    },new core.DartList.literal<number>());
                }else {
                    let rawType : any = StaticTypeAnalyzer.constructorToGenericFunctionType(constructorElement);
                    let inferredType : any = this._inferExecutableType(rawType,numNamed,numPositional,namedArgNames,namedArgTypeList,positionalArgTypes,new core.DartList.literal<any>());
                    if (op(Op.EQUALS,inferredType,null) || core.identical(inferredType,rawType)) {
                        inferredType = this.linker.typeSystem.instantiateToBounds(rawType);
                    }
                    return inferredType.returnType;
                }
            })());
        }else {
            let classElement : ClassElementForLink = this.unit.resolveConstructorClassRef(ref.reference).asClass;
            let inferredType : any;
            if (classElement != null) {
                let rawType : any = classElement.type;
                inferredType = this.linker.typeSystem.instantiateToBounds(rawType);
            }else {
                inferredType = DynamicTypeImpl.instance;
            }
            this.stack.add(inferredType);
        }
    }
    _doInvokeMethod() : void {
        let numNamed : number = op(Op.INDEX,this.unlinkedConst.ints,this.intPtr++);
        let numPositional : number = op(Op.INDEX,this.unlinkedConst.ints,this.intPtr++);
        let namedArgNames : core.DartList<string> = this._getNextStrings(numNamed);
        let namedArgTypeList : core.DartList<any> = this._popList(numNamed);
        let positionalArgTypes : core.DartList<any> = this._popList(numPositional);
        let methodName : string = this._getNextString();
        let typeArguments : core.DartList<any> = this._getTypeArguments();
        let target : any = this.stack.removeLast();
        if (target.isDynamic) {
            target = this.typeProvider.objectType;
        }
        this.stack.add((() =>  {
            if (is(target, any)) {
                let method : any = target.lookUpInheritedMethod(methodName,{
                    library : this.library});
                let rawType : any = ((t)=>(!!t)?t.type:null)(method);
                let inferredType : any = this._inferExecutableType(rawType,numNamed,numPositional,namedArgNames,namedArgTypeList,positionalArgTypes,typeArguments);
                if (inferredType != null) {
                    return inferredType.returnType;
                }
            }
            return DynamicTypeImpl.instance;
        })());
    }
    _doInvokeMethodRef() : void {
        let numNamed : number = this._getNextInt();
        let numPositional : number = this._getNextInt();
        let namedArgNames : core.DartList<string> = this._getNextStrings(numNamed);
        let namedArgTypeList : core.DartList<any> = this._popList(numNamed);
        let positionalArgTypes : core.DartList<any> = this._popList(numPositional);
        let ref : any = this._getNextRef();
        let element : ReferenceableElementForLink = this.unit.resolveRef(ref.reference);
        this._throwIfInstanceFieldOrAccessor(element);
        let typeArguments : core.DartList<any> = this._getTypeArguments();
        this.stack.add((() =>  {
            let rawType : any = element.asStaticType;
            if (is(rawType, any)) {
                let inferredType : any = this._inferExecutableType(rawType,numNamed,numPositional,namedArgNames,namedArgTypeList,positionalArgTypes,typeArguments);
                if (inferredType != null) {
                    return inferredType.returnType;
                }
            }
            return DynamicTypeImpl.instance;
        })());
    }
    _doMakeTypedList() : void {
        let itemType : any = this._getNextTypeRef();
        this.stack.length -= this._getNextInt();
        this.stack.add(this.typeProvider.listType.instantiate(new core.DartList.literal<any>(itemType)));
    }
    _doMakeTypeMap() : void {
        let keyType : any = this._getNextTypeRef();
        let valueType : any = this._getNextTypeRef();
        this.stack.length -= 2 * this._getNextInt();
        this.stack.add(this.typeProvider.mapType.instantiate(new core.DartList.literal<any>(keyType,valueType)));
    }
    _doMakeUntypedList() : void {
        let numItems : number = this._getNextInt();
        let itemType : any = numItems == 0 ? DynamicTypeImpl.instance : this._popList(numItems).reduce(this._leastUpperBound.bind(this));
        itemType = _dynamicIfNull(itemType);
        this.stack.add(this.typeProvider.listType.instantiate(new core.DartList.literal<any>(itemType)));
    }
    _doMakeUntypedMap() : void {
        let numEntries : number = this._getNextInt();
        let keysValues : core.DartList<any> = this._popList(2 * numEntries);
        let keyType : any = null;
        let valueType : any = null;
        for(let i : number = 0; i < 2 * numEntries; i++){
            let type : any = keysValues[i];
            if (new core.DartInt(i).isEven) {
                keyType = op(Op.EQUALS,keyType,null) ? type : this._leastUpperBound(keyType,type);
            }else {
                valueType = op(Op.EQUALS,valueType,null) ? type : this._leastUpperBound(valueType,type);
            }
        }
        keyType = _dynamicIfNull(keyType);
        valueType = _dynamicIfNull(valueType);
        this.stack.add(this.typeProvider.mapType.instantiate(new core.DartList.literal<any>(keyType,valueType)));
    }
    _doPushReference() : void {
        let ref : any = this._getNextRef();
        if (ref.paramReference != 0) {
            this.stack.add(this.typeProvider.typeType);
        }else {
            /* TODO (AssertStatementImpl) : assert (ref.syntheticReturnType == null); */;
            /* TODO (AssertStatementImpl) : assert (ref.implicitFunctionTypeIndices.isEmpty); */;
            let element : ReferenceableElementForLink = this.unit.resolveRef(ref.reference);
            this._throwIfInstanceFieldOrAccessor(element);
            this.stack.add(element.asStaticType);
        }
    }
    _findParameterType(parameterName : string) : any {
        let f : FunctionElementForLink_Local = this.function;
        while (true){
            for(let parameter of f.parameters) {
                if (op(Op.EQUALS,parameter.name,parameterName)) {
                    return parameter.type;
                }
            }
            let parent : any = f.enclosingElement;
            if (is(parent, FunctionElementForLink_Local)) {
                f = parent;
            }else {
                /* TODO (AssertStatementImpl) : assert (false); */;
                return DynamicTypeImpl.instance;
            }
        }
    }
    _getNextInt() : number {
        return op(Op.INDEX,this.unlinkedConst.ints,this.intPtr++);
    }
    _getNextRef() : any {
        return op(Op.INDEX,this.unlinkedConst.references,this.refPtr++);
    }
    _getNextString() : string {
        return op(Op.INDEX,this.unlinkedConst.strings,this.strPtr++);
    }
    _getNextStrings(n : number) : core.DartList<string> {
        let result : core.DartList<string> = new core.DartList<string>(n);
        for(let i : number = 0; i < n; i++){
            result[i] = this._getNextString();
        }
        return result;
    }
    _getNextTypeRef() : any {
        let ref : any = this._getNextRef();
        return this.unit.resolveTypeRef(this.function,ref);
    }
    _getTypeArguments() : core.DartList<any> {
        let numTypeArguments : number = this._getNextInt();
        let typeArguments : core.DartList<any> = new core.DartList<any>(numTypeArguments);
        for(let i : number = 0; i < numTypeArguments; i++){
            typeArguments[i] = this._getNextTypeRef();
        }
        return typeArguments;
    }
    _inferExecutableType(rawMethodType : any,numNamedArguments : number,numPositionalArguments : number,namedArgNames : core.DartList<string>,namedArgTypeList : core.DartList<any>,positionalArgTypes : core.DartList<any>,typeArguments : core.DartList<any>) : any {
        let ts : any = this.linker.typeSystem;
        if (rawMethodType != null) {
            if (rawMethodType.typeFormals.isNotEmpty && typeArguments.isNotEmpty) {
                let methodElement : any = rawMethodType.element;
                if (is(methodElement, any) && op(Op.EQUALS,methodElement.typeParameters.length,typeArguments.length)) {
                    return rawMethodType.instantiate(typeArguments);
                }
            }else if (rawMethodType.typeFormals.isNotEmpty && is(ts, any)) {
                let namedArgTypes : core.DartMap<string,any> = new core.DartMap.literal([
                ]);
                for(let i : number = 0; i < numNamedArguments; i++){
                    let name : string = namedArgNames[i];
                    let type : any = namedArgTypeList[i];
                    namedArgTypes.set(name,type);
                }
                let parameters : core.DartList<any> = new core.DartList.literal<any>();
                let argumentTypes : core.DartList<any> = new core.DartList.literal<any>();
                let positionalIndex : number = 0;
                let numRequiredParameters : number = 0;
                for(let parameter of rawMethodType.parameters) {
                    if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.REQUIRED)) {
                        numRequiredParameters++;
                        if (numRequiredParameters > numPositionalArguments) {
                            return null;
                        }
                        parameters.add(parameter);
                        argumentTypes.add(positionalArgTypes[positionalIndex]);
                        positionalIndex++;
                    }else if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.POSITIONAL)) {
                        if (positionalIndex < numPositionalArguments) {
                            parameters.add(parameter);
                            argumentTypes.add(positionalArgTypes[positionalIndex]);
                            positionalIndex++;
                        }
                    }else if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.NAMED)) {
                        let namedArgumentType : any = namedArgTypes.get(parameter.name);
                        if (namedArgumentType != null) {
                            parameters.add(parameter);
                            argumentTypes.add(namedArgumentType);
                        }
                    }
                }
                let inferred : any = ts.inferGenericFunctionOrType(rawMethodType,parameters,argumentTypes,null);
                return inferred;
            }
        }
        return rawMethodType;
    }
    _leastUpperBound(s : any,t : any) : any {
        return this.linker.typeSystem.getLeastUpperBound(s,t);
    }
    _popList(n : number) : core.DartList<any> {
        let result : core.DartList<any> = this.stack.sublist(this.stack.length - n,this.stack.length);
        this.stack.length -= n;
        return result;
    }
    _pushBinaryOperatorType(left : any,operator : any,right : any) : void {
        if (is(left, any)) {
            let method : any = left.lookUpInheritedMethod(operator.lexeme,{
                library : this.library});
            if (method != null) {
                let type : any = method.returnType;
                type = this.linker.typeSystem.refineBinaryExpressionType(left,operator,right,type);
                this.stack.add(type);
                return;
            }
        }
        this.stack.add(DynamicTypeImpl.instance);
    }
    _throwIfInstanceFieldOrAccessor(element : core.DartObject) : void {
        if (is(element, NonstaticMemberElementForLink) && element.hasInstanceGetterReference || is(element, any) && !element.isStatic || is(element, any) && !element.isStatic) {
            throw new _InferenceFailedError('Instance fields cannot be used for type inference.');
        }
    }
}

export namespace FieldElementForLink {
    export type Constructors = 'FieldElementForLink';
    export type Interface = Omit<FieldElementForLink, Constructors>;
}
@DartClass
@Implements(any)
export class FieldElementForLink implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get getter() : PropertyAccessorElementForLink{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get setter() : PropertyAccessorElementForLink{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FieldElementForLink() {
    }
}

export namespace TypeProviderForLink {
    export type Constructors = 'TypeProviderForLink';
    export type Interface = Omit<TypeProviderForLink, Constructors>;
}
@DartClass
export class TypeProviderForLink extends any {
    _linker : Linker;

    _boolType : any;

    _deprecatedType : any;

    _doubleType : any;

    _functionType : any;

    _futureDynamicType : any;

    _futureNullType : any;

    _futureOrNullType : any;

    _futureOrType : any;

    _futureType : any;

    _intType : any;

    _iterableDynamicType : any;

    _iterableType : any;

    _listType : any;

    _mapType : any;

    _nullType : any;

    _numType : any;

    _objectType : any;

    _stackTraceType : any;

    _streamDynamicType : any;

    _streamType : any;

    _stringType : any;

    _symbolType : any;

    _typeType : any;

    constructor(_linker : Linker) {
    }
    @defaultConstructor
    TypeProviderForLink(_linker : Linker) {
        this._linker = _linker;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get boolType() : any {
        return this._boolType = ( this._boolType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'bool') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bottomType() : any {
        return BottomTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get deprecatedType() : any {
        return this._deprecatedType = ( this._deprecatedType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Deprecated') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get doubleType() : any {
        return this._doubleType = ( this._doubleType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'double') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dynamicType() : any {
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionType() : any {
        return this._functionType = ( this._functionType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Function') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureDynamicType() : any {
        return this._futureDynamicType = ( this._futureDynamicType ) || ( this.futureType.instantiate(new core.DartList.literal<any>(this.dynamicType)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureNullType() : any {
        return this._futureNullType = ( this._futureNullType ) || ( this.futureType.instantiate(new core.DartList.literal<any>(this.nullType)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrNullType() : any {
        return this._futureOrNullType = ( this._futureOrNullType ) || ( this.futureOrType.instantiate(new core.DartList.literal<any>(this.nullType)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrType() : any {
        return this._futureOrType = ( this._futureOrType ) || ( this._buildInterfaceType(this._linker.asyncLibrary,'FutureOr') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureType() : any {
        return this._futureType = ( this._futureType ) || ( this._buildInterfaceType(this._linker.asyncLibrary,'Future') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get intType() : any {
        return this._intType = ( this._intType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'int') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableDynamicType() : any {
        return this._iterableDynamicType = ( this._iterableDynamicType ) || ( this.iterableType.instantiate(new core.DartList.literal<any>(this.dynamicType)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableType() : any {
        return this._iterableType = ( this._iterableType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Iterable') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get listType() : any {
        return this._listType = ( this._listType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'List') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mapType() : any {
        return this._mapType = ( this._mapType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Map') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullObject() : any {
        throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullType() : any {
        return this._nullType = ( this._nullType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Null') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numType() : any {
        return this._numType = ( this._numType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'num') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get objectType() : any {
        return this._objectType = ( this._objectType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Object') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stackTraceType() : any {
        return this._stackTraceType = ( this._stackTraceType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'StackTrace') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamDynamicType() : any {
        return this._streamDynamicType = ( this._streamDynamicType ) || ( this.streamType.instantiate(new core.DartList.literal<any>(this.dynamicType)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamType() : any {
        return this._streamType = ( this._streamType ) || ( this._buildInterfaceType(this._linker.asyncLibrary,'Stream') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stringType() : any {
        return this._stringType = ( this._stringType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'String') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get symbolType() : any {
        return this._symbolType = ( this._symbolType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Symbol') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeType() : any {
        return this._typeType = ( this._typeType ) || ( this._buildInterfaceType(this._linker.coreLibrary,'Type') );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get undefinedType() : any {
        return UndefinedTypeImpl.instance;
    }
    _buildInterfaceType(library : LibraryElementForLink<any>,name : string) : any {
        return library.getContainedName(name).buildType((i : number) =>  {
            let element = new bare.createInstance(any,null,`T${i}`,-1);
            return new bare.createInstance(any,null,element);
        },new core.DartList.literal());
    }
}

export namespace TypeInferenceNode {
    export type Constructors = 'TypeInferenceNode';
    export type Interface = Omit<TypeInferenceNode, Constructors>;
}
@DartClass
export class TypeInferenceNode extends any {
    functionElement : FunctionElementForLink_Local;

    constructor(functionElement : FunctionElementForLink_Local) {
    }
    @defaultConstructor
    TypeInferenceNode(functionElement : FunctionElementForLink_Local) {
        this.functionElement = functionElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEvaluated() : boolean {
        return this.functionElement._hasTypeBeenInferred;
    }
    collectDependencies(dependencies : core.DartList<TypeInferenceNode>,unlinkedExecutable : any,compilationUnit : CompilationUnitElementForLink) : void {
        let unlinkedConst : any = ((t)=>(!!t)?t.bodyExpr:null)(unlinkedExecutable);
        if (op(Op.EQUALS,unlinkedConst,null)) {
            return;
        }
        let refPtr : number = 0;
        let intPtr : number = 0;
        for(let operation of unlinkedConst.operations) {
            switch (operation) {
                case UnlinkedExprOperation.pushInt:
                    intPtr++;
                    break;
                case UnlinkedExprOperation.pushLongInt:
                    let numInts : number = op(Op.INDEX,unlinkedConst.ints,intPtr++);
                    intPtr += numInts;
                    break;
                case UnlinkedExprOperation.concatenate:
                    intPtr++;
                    break;
                case UnlinkedExprOperation.pushReference:
                    let ref : any = op(Op.INDEX,unlinkedConst.references,refPtr++);
                    let dependency : TypeInferenceNode = compilationUnit.resolveRef(ref.reference).asTypeInferenceNode;
                    if (dependency != null) {
                        dependencies.add(dependency);
                    }
                    break;
                case UnlinkedExprOperation.invokeConstructor:
                    refPtr++;
                    intPtr += 2;
                    break;
                case UnlinkedExprOperation.makeUntypedList:
                case UnlinkedExprOperation.makeUntypedMap:
                    intPtr++;
                    break;
                case UnlinkedExprOperation.makeTypedList:
                    refPtr++;
                    intPtr++;
                    break;
                case UnlinkedExprOperation.makeTypedMap:
                    refPtr += 2;
                    intPtr++;
                    break;
                case UnlinkedExprOperation.assignToRef:
                    refPtr++;
                    break;
                case UnlinkedExprOperation.invokeMethodRef:
                    let ref : any = op(Op.INDEX,unlinkedConst.references,refPtr++);
                    let dependency : TypeInferenceNode = compilationUnit.resolveRef(ref.reference).asTypeInferenceNode;
                    if (dependency != null) {
                        dependencies.add(dependency);
                    }
                    intPtr += 2;
                    let numTypeArguments : number = op(Op.INDEX,unlinkedConst.ints,intPtr++);
                    refPtr += numTypeArguments;
                    break;
                case UnlinkedExprOperation.invokeMethod:
                    intPtr += 2;
                    let numTypeArguments : number = op(Op.INDEX,unlinkedConst.ints,intPtr++);
                    refPtr += numTypeArguments;
                    break;
                case UnlinkedExprOperation.typeCast:
                case UnlinkedExprOperation.typeCheck:
                    refPtr++;
                    break;
                case UnlinkedExprOperation.pushLocalFunctionReference:
                    let popCount : number = op(Op.INDEX,unlinkedConst.ints,intPtr++);
                    /* TODO (AssertStatementImpl) : assert (popCount == 0); */;
                    dependencies.add(this.functionElement.getLocalFunction(op(Op.INDEX,unlinkedConst.ints,intPtr++)).asTypeInferenceNode);
                    break;
                default:
                    break;
            }
        }
        /* TODO (AssertStatementImpl) : assert (refPtr == unlinkedConst.references.length); */;
        /* TODO (AssertStatementImpl) : assert (intPtr == unlinkedConst.ints.length); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<TypeInferenceNode> {
        let dependencies : core.DartList<TypeInferenceNode> = new core.DartList.literal<TypeInferenceNode>();
        this.collectDependencies(dependencies,this.functionElement._unlinkedExecutable,this.functionElement.compilationUnit);
        return dependencies;
    }
    evaluate(cycle : core.DartList<TypeInferenceNode>) : void {
        if (cycle != null) {
            let cycleNames : core.DartList<string> = cycle.map((node : any) =>  {
                let e : any = node.functionElement;
                while (e != null){
                    if (is(e, any)) {
                        return e.name;
                    }
                    e = e.enclosingElement;
                }
                return '<unknown>';
            }).toSet().toList();
            this.functionElement._setInferenceError(new bare.createInstance(any,null,{
                kind : TopLevelInferenceErrorKind.dependencyCycle,arguments : cycleNames}));
            this.functionElement._setInferredType(DynamicTypeImpl.instance);
        }else {
            let computer = new ExprTypeComputer(this.functionElement);
            let bodyType : any = computer.compute();
            if (computer.errorKind != null) {
                this.functionElement._setInferenceError(new bare.createInstance(any,null,{
                    kind : computer.errorKind}));
                this.functionElement._setInferredType(DynamicTypeImpl.instance);
            }else {
                if (this.functionElement.isAsynchronous) {
                    let linker = this.functionElement.compilationUnit.library._linker;
                    let typeProvider = linker.typeProvider;
                    let typeSystem = linker.typeSystem;
                    if (bodyType.isDartAsyncFutureOr) {
                        bodyType = op(Op.INDEX,(bodyType as any).typeArguments,0);
                    }
                    bodyType = typeProvider.futureType.instantiate(new core.DartList.literal(bodyType.flattenFutures(typeSystem)));
                }
                this.functionElement._setInferredType(bodyType);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `TypeInferenceNode(${this.functionElement})`;
    }
}

export namespace TypeInferenceDependencyWalker {
    export type Constructors = 'TypeInferenceDependencyWalker';
    export type Interface = Omit<TypeInferenceDependencyWalker, Constructors>;
}
@DartClass
export class TypeInferenceDependencyWalker extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(v : TypeInferenceNode) : void {
        v.evaluate(null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<TypeInferenceNode>) : void {
        for(let v of scc) {
            v.evaluate(scc);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeInferenceDependencyWalker() {
    }
}

export namespace PropertyAccessorElementForLink_Variable {
    export type Constructors = 'PropertyAccessorElementForLink_Variable';
    export type Interface = Omit<PropertyAccessorElementForLink_Variable, Constructors>;
}
@DartClass
@Implements(PropertyAccessorElementForLink)
@With(ReferenceableElementForLink)
export class PropertyAccessorElementForLink_Variable extends core.DartObject implements PropertyAccessorElementForLink.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSetter : boolean;

    variable : VariableElementForLink;

    _type : any;

    _parameter : ParameterElementForLink_VariableSetter;

    _parameters : core.DartList<any>;

    constructor(variable : VariableElementForLink,isSetter : boolean) {
    }
    @defaultConstructor
    PropertyAccessorElementForLink_Variable(variable : VariableElementForLink,isSetter : boolean) {
        this.variable = variable;
        this.isSetter = isSetter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asConstVariable() : ConstVariableNode {
        return this.variable._constNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asTypeInferenceNode() : TypeInferenceNode {
        return this.variable._typeInferenceNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this.variable.displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.variable.enclosingElement;
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
    get isStatic() : boolean {
        return this.variable.isStatic;
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
        return this.isSetter ? ElementKind.SETTER : ElementKind.GETTER;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementForLink<any> {
        return this.variable.compilationUnit.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this.isSetter ? `${this.variable.name}=` : this.variable.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        if (this._parameters == null) {
            this._parameters = new core.DartList.literal<ParameterElementForLink_VariableSetter>();
            if (this.isSetter) {
                this._parameter = new ParameterElementForLink_VariableSetter(this);
                this._parameters.add(this._parameter);
            }
        }
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        if (this.isSetter) {
            return VoidTypeImpl.instance;
        }else {
            return this.variable.type;
        }
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
    get typeParameters() : core.DartList<any> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContainedName(name : string) : ReferenceableElementForLink {
        return new NonstaticMemberElementForLink(this.library,this,name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        if (index == 0) {
            return this.variable.initializer;
        }else {
            return null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAccessibleIn(library : any) : boolean {
        return !Identifier.isPrivateName(this.name) || core.identical(this.library,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        if (this.isSetter && this._parameter != null) {
            if (this._parameter.inheritsCovariant) {
                compilationUnit._storeInheritsCovariant(this.variable.unlinkedVariable.inheritsCovariantSlot);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace FunctionElementForLink_Initializer {
    export type Constructors = 'FunctionElementForLink_Initializer';
    export type Interface = Omit<FunctionElementForLink_Initializer, Constructors>;
}
@DartClass
@Implements(FunctionElementForLink_Local)
@With(ReferenceableElementForLink,any)
export class FunctionElementForLink_Initializer extends core.DartObject implements FunctionElementForLink_Local.Interface,ReferenceableElementForLink.Interface,any.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    _variable : VariableElementForLink;

    _typeInferenceNode : TypeInferenceNode;

    _functions : core.DartList<FunctionElementForLink_Local_NonSynthetic>;

    _inferredReturnType : any;

    _inferenceError : any;

    constructor(_variable : VariableElementForLink) {
    }
    @defaultConstructor
    FunctionElementForLink_Initializer(_variable : VariableElementForLink) {
        this._variable = _variable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asTypeInferenceNode() : TypeInferenceNode {
        return this._typeInferenceNode = ( this._typeInferenceNode ) || ( new TypeInferenceNode(this) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get compilationUnit() : CompilationUnitElementForLink {
        return this._variable.compilationUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : VariableElementForLink {
        return this._variable;
    }
    get enclosingTypeParameterContext() : any {
        return is(this._variable.enclosingElement, ClassElementForLink) ? this._variable.enclosingElement : null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingUnit() : CompilationUnitElementForLink {
        return this._variable.compilationUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<FunctionElementForLink_Local_NonSynthetic> {
        return this._functions = ( this._functions ) || ( this._variable.unlinkedVariable.initializer.localFunctions.map((ex : any) =>  {
            return new FunctionElementForLink_Local_NonSynthetic(this._variable.compilationUnit,this,ex);
        }).toList() );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return '';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        return this._unlinkedExecutable.isAsynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        if (this._variable.hasImplicitType) {
            return this._variable.inferredType;
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
            return DynamicTypeImpl.instance;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(newType : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameterContext() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _hasTypeBeenInferred() : boolean {
        return this._inferredReturnType != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _unlinkedExecutable() : any {
        return this._variable.unlinkedVariable.initializer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        let functions : core.DartList<FunctionElementForLink_Local_NonSynthetic> = this.functions;
        return index < functions.length ? functions[index] : null;
    }
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        compilationUnit._storeLinkedType(this._unlinkedExecutable.inferredReturnTypeSlot,this._inferredReturnType,this.typeParameterContext);
        for(let function of this.functions) {
            function.link(compilationUnit);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _setInferenceError(error : any) : void {
        /* TODO (AssertStatementImpl) : assert (!_hasTypeBeenInferred); */;
        this._inferenceError = error;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _setInferredType(type : any) : void {
        /* TODO (AssertStatementImpl) : assert (!_hasTypeBeenInferred); */;
        this._inferredReturnType = type;
        this._variable._inferredType = _dynamicIfNull(type);
    }
}

export namespace FunctionElementForLink_Local {
    export type Constructors = 'FunctionElementForLink_Local';
    export type Interface = Omit<FunctionElementForLink_Local, Constructors>;
}
@DartClass
@Implements(ExecutableElementForLink,any,ReferenceableElementForLink)
export class FunctionElementForLink_Local implements ExecutableElementForLink.Interface,any.Interface,ReferenceableElementForLink.Interface {
    @AbstractProperty
    get _hasTypeBeenInferred() : boolean{ throw 'abstract'}
    @Abstract
    _setInferenceError(error : any) : void{ throw 'abstract'}
    @Abstract
    _setInferredType(type : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FunctionElementForLink_Local() {
    }
}

export namespace FunctionTypeAliasElementForLink {
    export type Constructors = 'FunctionTypeAliasElementForLink';
    export type Interface = Omit<FunctionTypeAliasElementForLink, Constructors>;
}
@DartClass
@Implements(any,any)
@With(any,ParameterParentElementForLink,ReferenceableElementForLink)
export class FunctionTypeAliasElementForLink extends core.DartObject implements any.Interface,any.Interface,any.Interface,ParameterParentElementForLink.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    @Abstract
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : CompilationUnitElementForLink;

    _unlinkedTypedef : any;

    _type : any;

    _returnType : any;

    constructor(enclosingElement : CompilationUnitElementForLink,_unlinkedTypedef : any) {
    }
    @defaultConstructor
    FunctionTypeAliasElementForLink(enclosingElement : CompilationUnitElementForLink,_unlinkedTypedef : any) {
        this.enclosingElement = enclosingElement;
        this._unlinkedTypedef = _unlinkedTypedef;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.enclosingElement.enclosingElement._linker.typeProvider.typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : ContextForLink {
        return this.enclosingElement.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingUnit() : any {
        return this.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this._unlinkedTypedef.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitFunctionTypeIndices() : core.DartList<number> {
        return new core.DartList.literal<number>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementForLink<any> {
        return this.enclosingElement.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._unlinkedTypedef.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType = ( this._returnType ) || ( this.enclosingElement.resolveTypeRef(this,this._unlinkedTypedef.returnType) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameterContext() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedParameters() : core.DartList<any> {
        return this._unlinkedTypedef.parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return this._unlinkedTypedef.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        let numTypeParameters : number = this._unlinkedTypedef.typeParameters.length;
        if (numTypeParameters != 0) {
            let typeArguments : core.DartList<any> = new core.DartList.generate(numTypeParameters,getTypeArgument);
            if (typeArguments.contains(null)) {
                return this.context.typeSystem.instantiateToBounds(new bare.createInstance(any,null,this));
            }else {
                return new bare.createInstance(any,null,this,this.name,typeArguments,true);
            }
        }else {
            return this._type = ( this._type ) || ( new bare.createInstance(any,null,this) );
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace GenericTypeAliasElementForLink {
    export type Constructors = 'GenericTypeAliasElementForLink';
    export type Interface = Omit<GenericTypeAliasElementForLink, Constructors>;
}
@DartClass
@Implements(FunctionTypeAliasElementForLink,any)
@With(any,ParameterParentElementForLink,ReferenceableElementForLink)
export class GenericTypeAliasElementForLink extends core.DartObject implements FunctionTypeAliasElementForLink.Interface,any.Interface,any.Interface,ParameterParentElementForLink.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    @Abstract
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : CompilationUnitElementForLink;

    _unlinkedTypedef : any;

    constructor(enclosingElement : CompilationUnitElementForLink,_unlinkedTypedef : any) {
    }
    @defaultConstructor
    GenericTypeAliasElementForLink(enclosingElement : CompilationUnitElementForLink,_unlinkedTypedef : any) {
        this.enclosingElement = enclosingElement;
        this._unlinkedTypedef = _unlinkedTypedef;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.enclosingElement.enclosingElement._linker.typeProvider.typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : ContextForLink {
        return this.enclosingElement.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingUnit() : any {
        return this.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this._unlinkedTypedef.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitFunctionTypeIndices() : core.DartList<number> {
        return new core.DartList.literal<number>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementForLink<any> {
        return this.enclosingElement.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._unlinkedTypedef.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameterContext() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return this._unlinkedTypedef.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        let numTypeParameters : number = this._unlinkedTypedef.typeParameters.length;
        if (numTypeParameters != 0) {
            let typeArguments : core.DartList<any> = new core.DartList.generate(numTypeParameters,getTypeArgument);
            if (typeArguments.contains(null)) {
                return this.context.typeSystem.instantiateToBounds(new bare.createInstance(any,null,this));
            }else {
                return new bare.createInstance(any,null,this,this.name,typeArguments,true);
            }
        }else {
            return new bare.createInstance(any,null,this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace LibraryCycleDependencyWalker {
    export type Constructors = 'LibraryCycleDependencyWalker';
    export type Interface = Omit<LibraryCycleDependencyWalker, Constructors>;
}
@DartClass
export class LibraryCycleDependencyWalker extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(v : LibraryCycleNode) : void {
        v.link();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<LibraryCycleNode>) : void {
        throw new core.StateError('Cycle among library cycles');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryCycleDependencyWalker() {
    }
}

export namespace LibraryCycleForLink {
    export type Constructors = 'LibraryCycleForLink';
    export type Interface = Omit<LibraryCycleForLink, Constructors>;
}
@DartClass
export class LibraryCycleForLink {
    libraries : core.DartList<LibraryElementInBuildUnit>;

    dependencies : core.DartList<LibraryCycleForLink>;

    _node : LibraryCycleNode;

    constructor(libraries : core.DartList<LibraryElementInBuildUnit>,dependencies : core.DartList<LibraryCycleForLink>) {
    }
    @defaultConstructor
    LibraryCycleForLink(libraries : core.DartList<LibraryElementInBuildUnit>,dependencies : core.DartList<LibraryCycleForLink>) {
        this.libraries = libraries;
        this.dependencies = dependencies;
        this._node = new LibraryCycleNode(this);
    }
    get node() : LibraryCycleNode {
        return this._node;
    }
    ensureLinked() : void {
        if (!this.node.isEvaluated) {
            new LibraryCycleDependencyWalker().walk(this.node);
        }
    }
}

export namespace LibraryCycleNode {
    export type Constructors = 'LibraryCycleNode';
    export type Interface = Omit<LibraryCycleNode, Constructors>;
}
@DartClass
export class LibraryCycleNode extends any {
    libraryCycle : LibraryCycleForLink;

    _isLinked : boolean;

    constructor(libraryCycle : LibraryCycleForLink) {
    }
    @defaultConstructor
    LibraryCycleNode(libraryCycle : LibraryCycleForLink) {
        this._isLinked = false;
        this.libraryCycle = libraryCycle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEvaluated() : boolean {
        return this._isLinked;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<LibraryCycleNode> {
        return this.libraryCycle.dependencies.map((cycle : LibraryCycleForLink) =>  {
            return cycle.node;
        }).toList();
    }
    link() : void {
        for(let library of this.libraryCycle.libraries) {
            library.link();
        }
        this._isLinked = true;
    }
}

export namespace LibraryDependencyWalker {
    export type Constructors = 'LibraryDependencyWalker';
    export type Interface = Omit<LibraryDependencyWalker, Constructors>;
}
@DartClass
export class LibraryDependencyWalker extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(v : LibraryNode) : void {
        return this.evaluateScc(new core.DartList.literal<LibraryNode>(v));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<LibraryNode>) : void {
        let dependentCycles : core.DartSet<LibraryCycleForLink> = new core.DartSet<LibraryCycleForLink>();
        for(let node of scc) {
            for(let dependency of node.dependencies) {
                if (dependency.isEvaluated) {
                    dependentCycles.add(dependency._libraryCycle);
                }
            }
        }
        let cycle : LibraryCycleForLink = new LibraryCycleForLink(scc.map((n : LibraryNode) =>  {
            return n.library;
        }).toList(),dependentCycles.toList());
        for(let node of scc) {
            node._libraryCycle = cycle;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryDependencyWalker() {
    }
}

export namespace LibraryElementForLink {
    export type Constructors = 'LibraryElementForLink';
    export type Interface<UnitElement extends CompilationUnitElementForLink> = Omit<LibraryElementForLink<UnitElement extends CompilationUnitElementForLink>, Constructors>;
}
@DartClass
@Implements(any)
export class LibraryElementForLink<UnitElement extends CompilationUnitElementForLink> implements any.Interface {
    _linker : Linker;

    _absoluteUri : lib3.Uri;

    _units : core.DartList<UnitElement>;

    _containedNames : core.DartMap<string,ReferenceableElementForLink>;

    _dependencies : core.DartList<LibraryElementForLink<any>>;

    _definingUnlinkedUnit : any;

    _importedLibraries : core.DartList<LibraryElementForLink<any>>;

    _exportedLibraries : core.DartList<LibraryElementForLink<any>>;

    constructor(_linker : Linker,_absoluteUri : lib3.Uri) {
    }
    @defaultConstructor
    LibraryElementForLink(_linker : Linker,_absoluteUri : lib3.Uri) {
        this._containedNames = new core.DartMap.literal([
        ]);
        this._dependencies = new core.DartList.literal<LibraryElementForLink<any>>();
        this._linker = _linker;
        this._absoluteUri = _absoluteUri;
        if (this._linkedLibrary != null) {
            this._dependencies.length = this._linkedLibrary.dependencies.length;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : ContextForLink {
        return this._linker.context;
    }
    get definingUnlinkedUnit() : any {
        return this._definingUnlinkedUnit = ( this._definingUnlinkedUnit ) || ( this._linker.getUnit(this._absoluteUri.toString()) );
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
    get exportedLibraries() : core.DartList<LibraryElementForLink<any>> {
        return this._exportedLibraries = ( this._exportedLibraries ) || ( this._linkedLibrary.exportDependencies.map(this._getDependency.bind(this)).where((library : any) =>  {
            return library != null;
        }).toList() );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this._absoluteUri.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get importedLibraries() : core.DartList<LibraryElementForLink<any>> {
        return this._importedLibraries = ( this._importedLibraries ) || ( this._linkedLibrary.importDependencies.map(this._getDependency.bind(this)).toList() );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartAsync() : boolean {
        return this._absoluteUri.toString() == 'dart:async';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCore() : boolean {
        return this._absoluteUri.toString() == 'dart:core';
    }
    @AbstractProperty
    get libraryCycleForLink() : LibraryCycleForLink{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._definingUnlinkedUnit.libraryName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get units() : core.DartList<UnitElement> {
        if (this._units == null) {
            let definingUnit : any = this.definingUnlinkedUnit;
            this._units = new core.DartList.literal<UnitElement>(this._makeUnitElement(definingUnit,0,this._absoluteUri.toString()));
            let numParts : number = definingUnit.parts.length;
            for(let i : number = 0; i < numParts; i++){
                let partRelativeUriStr : string = op(Op.INDEX,definingUnit.publicNamespace.parts,i);
                if (new core.DartString(partRelativeUriStr).isEmpty) {
                    continue;
                }
                let partRelativeUri : lib3.Uri;
                try {
                    partRelativeUri = lib3.Uri.parse(partRelativeUriStr);
                } catch (__error__) {

                    if (is(__error__,core.FormatException)){
                        continue;
                    }
                }
                let partAbsoluteUri : string = resolveRelativeUri(this._absoluteUri,partRelativeUri).toString();
                let partUnit : any = this._linker.getUnit(partAbsoluteUri);
                this._units.add(this._makeUnitElement((partUnit || new bare.createInstance(any,null)),i + 1,partAbsoluteUri));
            }
        }
        return this._units;
    }
    @AbstractProperty
    get _linkedLibrary() : any{ throw 'abstract'}
    getContainedName(name : string) : ReferenceableElementForLink {
        return this._containedNames.putIfAbsent(name,() =>  {
            for(let unit of this.units) {
                let element : ReferenceableElementForLink = unit.getContainedName(name);
                if (!core.identical(element,UndefinedElementForLink.instance)) {
                    return element;
                }
            }
            return UndefinedElementForLink.instance;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this._absoluteUri.toString();
    }
    _getDependency(index : number) : LibraryElementForLink<any> {
        let result : LibraryElementForLink<any> = this._dependencies[index];
        if (op(Op.EQUALS,result,null)) {
            let uri : lib3.Uri;
            let uriStr : string = op(Op.INDEX,this._linkedLibrary.dependencies,index).uri;
            if (new core.DartString(uriStr).isEmpty) {
                uri = this._absoluteUri;
            }else {
                try {
                    uri = lib3.Uri.parse(uriStr);
                } catch (__error__) {

                    if (is(__error__,core.FormatException)){
                        return null;
                    }
                }
            }
            result = this._linker.getLibrary(uri);
            this._dependencies[index] = result;
        }
        return result;
    }
    @Abstract
    _makeUnitElement(unlinkedUnit : any,i : number,absoluteUri : string) : UnitElement{ throw 'abstract'}
}

export namespace _InferenceFailedError {
    export type Constructors = '_InferenceFailedError';
    export type Interface = Omit<_InferenceFailedError, Constructors>;
}
@DartClass
export class _InferenceFailedError {
    message : string;

    constructor(message : string) {
    }
    @defaultConstructor
    _InferenceFailedError(message : string) {
        this.message = message;
    }
}

export namespace ParameterElementForLink_VariableSetter {
    export type Constructors = 'ParameterElementForLink_VariableSetter';
    export type Interface = Omit<ParameterElementForLink_VariableSetter, Constructors>;
}
@DartClass
@Implements(any)
export class ParameterElementForLink_VariableSetter implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : PropertyAccessorElementForLink_Variable;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inheritsCovariant : boolean;

    constructor(enclosingElement : PropertyAccessorElementForLink_Variable) {
    }
    @defaultConstructor
    ParameterElementForLink_VariableSetter(enclosingElement : PropertyAccessorElementForLink_Variable) {
        this.inheritsCovariant = false;
        this.enclosingElement = enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        return this.isExplicitlyCovariant || this.inheritsCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExplicitlyCovariant() : boolean {
        return this.enclosingElement.variable.isCovariant;
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
    get name() : string {
        return 'x';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameterKind() : any {
        return ParameterKind.REQUIRED;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.enclosingElement.variable.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace PropertyAccessorElementForLink {
    export type Constructors = 'PropertyAccessorElementForLink';
    export type Interface = Omit<PropertyAccessorElementForLink, Constructors>;
}
@DartClass
@Implements(any,ReferenceableElementForLink)
export class PropertyAccessorElementForLink implements any.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PropertyAccessorElementForLink() {
    }
}

export namespace LibraryNode {
    export type Constructors = 'LibraryNode';
    export type Interface = Omit<LibraryNode, Constructors>;
}
@DartClass
export class LibraryNode extends any {
    library : LibraryElementInBuildUnit;

    _libraryCycle : LibraryCycleForLink;

    constructor(library : LibraryElementInBuildUnit) {
    }
    @defaultConstructor
    LibraryNode(library : LibraryElementInBuildUnit) {
        this.library = library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEvaluated() : boolean {
        return this._libraryCycle != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<LibraryNode> {
        let dependencies : core.DartList<LibraryNode> = new core.DartList.literal<LibraryNode>();
        for(let dependency of this.library.importedLibraries) {
            if (is(dependency, LibraryElementInBuildUnit)) {
                dependencies.add(dependency._libraryNode);
            }
        }
        for(let dependency of this.library.exportedLibraries) {
            if (is(dependency, LibraryElementInBuildUnit)) {
                dependencies.add(dependency._libraryNode);
            }
        }
        return dependencies;
    }
}

export namespace SyntheticVariableElementForLink {
    export type Constructors = 'SyntheticVariableElementForLink';
    export type Interface = Omit<SyntheticVariableElementForLink, Constructors>;
}
@DartClass
@Implements(any)
export class SyntheticVariableElementForLink implements any.Interface {
    _getter : PropertyAccessorElementForLink_Executable;

    _setter : PropertyAccessorElementForLink_Executable;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getter() : PropertyAccessorElementForLink_Executable {
        return this._getter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return op(Op.EQUALS,this._setter,null);
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
    get setter() : PropertyAccessorElementForLink_Executable {
        return this._setter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(inferredType : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    SyntheticVariableElementForLink() {
    }
}

export namespace ParameterElementForLink {
    export type Constructors = 'ParameterElementForLink';
    export type Interface = Omit<ParameterElementForLink, Constructors>;
}
@DartClass
@Implements(any)
export class ParameterElementForLink implements any.Interface {
    _unlinkedParam : any;

    _typeParameterContext : any;

    _constNode : ConstNode;

    compilationUnit : CompilationUnitElementForLink;

    _parameterIndex : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : ParameterParentElementForLink;

    _inferredType : any;

    _inferenceError : any;

    _declaredType : any;

    _inheritsCovariant : boolean;

    constructor(enclosingElement : ParameterParentElementForLink,_unlinkedParam : any,_typeParameterContext : any,compilationUnit : CompilationUnitElementForLink,_parameterIndex : number) {
    }
    @defaultConstructor
    ParameterElementForLink(enclosingElement : ParameterParentElementForLink,_unlinkedParam : any,_typeParameterContext : any,compilationUnit : CompilationUnitElementForLink,_parameterIndex : number) {
        this._inheritsCovariant = false;
        this.enclosingElement = enclosingElement;
        this._unlinkedParam = _unlinkedParam;
        this._typeParameterContext = _typeParameterContext;
        this.compilationUnit = compilationUnit;
        this._parameterIndex = _parameterIndex;
        if (((t)=>(!!t)?t.bodyExpr:null)(this._unlinkedParam.initializer) != null) {
            this._constNode = new ConstParameterNode(this);
        }
    }
    @namedFactory
    static $forFactory(enclosingElement : ParameterParentElementForLink,unlinkedParameter : any,typeParameterContext : any,compilationUnit : CompilationUnitElementForLink,parameterIndex : number) : ParameterElementForLink {
        if (unlinkedParameter.isInitializingFormal) {
            return new FieldFormalParameterElementForLink(enclosingElement,unlinkedParameter,typeParameterContext,typeParameterContext.enclosingUnit.resynthesizerContext as CompilationUnitElementForLink,parameterIndex);
        }else {
            return new ParameterElementForLink(enclosingElement,unlinkedParameter,typeParameterContext,typeParameterContext.enclosingUnit.resynthesizerContext as CompilationUnitElementForLink,parameterIndex);
        }
    }
    static forFactory : new(enclosingElement : ParameterParentElementForLink,unlinkedParameter : any,typeParameterContext : any,compilationUnit : CompilationUnitElementForLink,parameterIndex : number) => ParameterElementForLink;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this._unlinkedParam.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasImplicitType() : boolean {
        return !this._unlinkedParam.isFunctionTyped && op(Op.EQUALS,this._unlinkedParam.type,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inheritsCovariant() : boolean {
        return this._inheritsCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set inheritsCovariant(value : boolean) {
        this._inheritsCovariant = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCovariant() : boolean {
        if (this.isExplicitlyCovariant || this.inheritsCovariant) {
            return true;
        }
        for(let annotation of this._unlinkedParam.annotations) {
            if (op(Op.EQUALS,annotation.operations.length,1) && op(Op.EQUALS,op(Op.INDEX,annotation.operations,0),UnlinkedExprOperation.pushReference)) {
                let element : ReferenceableElementForLink = this.compilationUnit.resolveRef(op(Op.INDEX,annotation.references,0).reference);
                if (is(element, PropertyAccessorElementForLink) && op(Op.EQUALS,element.name,'checked') && op(Op.EQUALS,element.library.name,'meta')) {
                    return true;
                }
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isExplicitlyCovariant() : boolean {
        return this._unlinkedParam.isExplicitlyCovariant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._unlinkedParam.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameterKind() : any {
        switch (this._unlinkedParam.kind) {
            case UnlinkedParamKind.required:
                return ParameterKind.REQUIRED;
            case UnlinkedParamKind.positional:
                return ParameterKind.POSITIONAL;
            case UnlinkedParamKind.named:
                return ParameterKind.NAMED;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        if (this._inferredType != null) {
            return this._inferredType;
        }else if (op(Op.EQUALS,this._declaredType,null)) {
            if (this._unlinkedParam.isFunctionTyped) {
                this._declaredType = new bare.createInstance(any,null,new FunctionElementForLink_FunctionTypedParam(this,this._typeParameterContext,this._unlinkedParam.parameters));
            }else if (op(Op.EQUALS,this._unlinkedParam.type,null)) {
                if (!this.compilationUnit.isInBuildUnit) {
                    this._inferredType = this.compilationUnit.getLinkedType(this,this._unlinkedParam.inferredTypeSlot);
                    return this._inferredType;
                }else {
                    this._declaredType = DynamicTypeImpl.instance;
                }
            }else {
                this._declaredType = this.compilationUnit.resolveTypeRef(this,this._unlinkedParam.type);
            }
        }
        return this._declaredType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(inferredType : any) {
        /* TODO (AssertStatementImpl) : assert (_inferredType == null); */;
        this._inferredType = inferredType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameterContext() : any {
        return this._typeParameterContext;
    }
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        compilationUnit._storeLinkedType(this._unlinkedParam.inferredTypeSlot,this._inferredType,this._typeParameterContext);
        compilationUnit._storeLinkedTypeError(this._unlinkedParam.inferredTypeSlot,this._inferenceError);
        if (this.inheritsCovariant) {
            compilationUnit._storeInheritsCovariant(this._unlinkedParam.inheritsCovariantSlot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    setInferenceError(error : any) : void {
        /* TODO (AssertStatementImpl) : assert (_inferenceError == null); */;
        this._inferenceError = error;
    }
}

export namespace NonstaticMemberElementForLink {
    export type Constructors = 'NonstaticMemberElementForLink';
    export type Interface = Omit<NonstaticMemberElementForLink, Constructors>;
}
@DartClass
@With(ReferenceableElementForLink)
export class NonstaticMemberElementForLink extends core.DartObject implements ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @Abstract
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        throw 'from mixin';
    }
    _target : ReferenceableElementForLink;

    _name : string;

    _library : LibraryElementForLink<any>;

    _elementReady : boolean;

    _element : any;

    constructor(_library : LibraryElementForLink<any>,_target : ReferenceableElementForLink,_name : string) {
    }
    @defaultConstructor
    NonstaticMemberElementForLink(_library : LibraryElementForLink<any>,_target : ReferenceableElementForLink,_name : string) {
        this._elementReady = false;
        this._library = _library;
        this._target = _target;
        this._name = _name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asConstVariable() : ConstVariableNode {
        return this._target.asConstVariable;
    }
    get asExecutableElement() : any {
        if (!this._elementReady) {
            this._elementReady = true;
            let targetType : any = this._target.asStaticType;
            if (targetType.isDynamic) {
                targetType = this._library._linker.typeProvider.objectType;
            }
            if (is(targetType, any)) {
                this._element = targetType.lookUpInheritedGetterOrMethod(this._name,{
                    library : this._library});
            }
        }
        return this._element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        if (this._library._linker.strongMode) {
            let element : any = this.asExecutableElement;
            if (element != null) {
                if (is(element, any)) {
                    return element.returnType;
                }else {
                    return element.type;
                }
            }
        }
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asTypeInferenceNode() : TypeInferenceNode {
        return this._target.asTypeInferenceNode;
    }
    get hasInstanceGetterReference() : boolean {
        let element : any = this.asExecutableElement;
        if (is(element, any)) {
            return !element.isStatic;
        }
        let target : ReferenceableElementForLink = this._target;
        if (is(target, NonstaticMemberElementForLink)) {
            return target.hasInstanceGetterReference;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContainedName(name : string) : ReferenceableElementForLink {
        return new NonstaticMemberElementForLink(this._library,this,name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this._target}.(dynamic)${this._name}`;
    }
}

export namespace PropertyAccessorElementForLink_EnumField {
    export type Constructors = 'PropertyAccessorElementForLink_EnumField';
    export type Interface = Omit<PropertyAccessorElementForLink_EnumField, Constructors>;
}
@DartClass
@Implements(PropertyAccessorElementForLink)
@With(ReferenceableElementForLink)
export class PropertyAccessorElementForLink_EnumField extends core.DartObject implements PropertyAccessorElementForLink.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variable : FieldElementForLink_EnumField;

    _type : any;

    constructor(variable : FieldElementForLink_EnumField) {
    }
    @defaultConstructor
    PropertyAccessorElementForLink_EnumField(variable : FieldElementForLink_EnumField) {
        this.variable = variable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return this.variable.enclosingElement;
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
    get isSetter() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.variable.isStatic;
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
        return ElementKind.GETTER;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementForLink<any> {
        return this.variable.enclosingElement.enclosingElement.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this.variable.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return new core.DartList.literal();
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
    get type() : any {
        return this._type = ( this._type ) || ( new bare.createInstance(any,null,this) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContainedName(name : string) : ReferenceableElementForLink {
        return new NonstaticMemberElementForLink(this.library,this,name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAccessibleIn(library : any) : boolean {
        return !Identifier.isPrivateName(this.name) || core.identical(this.library,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace ParameterParentElementForLink {
    export type Constructors = 'ParameterParentElementForLink';
    export type Interface = Omit<ParameterParentElementForLink, Constructors>;
}
@DartClass
@Implements(any)
export class ParameterParentElementForLink implements any.Interface {
    _parameters : core.DartList<any>;

    @AbstractProperty
    get implicitFunctionTypeIndices() : core.DartList<number>{ throw 'abstract'}
    get parameters() : core.DartList<any> {
        if (this._parameters == null) {
            let unlinkedParameters : core.DartList<any> = this.unlinkedParameters;
            let numParameters : number = unlinkedParameters.length;
            this._parameters = new core.DartList<any>(numParameters);
            for(let i : number = 0; i < numParameters; i++){
                let unlinkedParam : any = unlinkedParameters[i];
                this._parameters[i] = new ParameterElementForLink.forFactory(this,unlinkedParam,this.typeParameterContext,this.typeParameterContext.enclosingUnit.resynthesizerContext as CompilationUnitElementForLink,i);
            }
        }
        return this._parameters;
    }
    @AbstractProperty
    get typeParameterContext() : any{ throw 'abstract'}
    @AbstractProperty
    get unlinkedParameters() : core.DartList<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ParameterParentElementForLink() {
    }
}

export namespace SpecialTypeElementForLink {
    export type Constructors = 'SpecialTypeElementForLink';
    export type Interface = Omit<SpecialTypeElementForLink, Constructors>;
}
@DartClass
@With(ReferenceableElementForLink)
export class SpecialTypeElementForLink extends core.DartObject implements ReferenceableElementForLink.Interface {
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    @Abstract
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        throw 'from mixin';
    }
    linker : Linker;

    type : any;

    constructor(linker : Linker,type : any) {
    }
    @defaultConstructor
    SpecialTypeElementForLink(linker : Linker,type : any) {
        this.linker = linker;
        this.type = type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.linker.typeProvider.typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        return this.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.type.toString();
    }
}

export namespace Linker {
    export type Constructors = 'Linker';
    export type Interface = Omit<Linker, Constructors>;
}
@DartClass
export class Linker {
    private static __$_initializerTypeInferenceCycle : LibraryCycleForLink;
    static get _initializerTypeInferenceCycle() : LibraryCycleForLink { 
        return this.__$_initializerTypeInferenceCycle;
    }
    static set _initializerTypeInferenceCycle(__$value : LibraryCycleForLink)  { 
        this.__$_initializerTypeInferenceCycle = __$value;
    }

    getDependency : (absoluteUri : string) => any;

    getUnit : (absoluteUri : string) => any;

    _libraries : core.DartMap<lib3.Uri,LibraryElementForLink<any>>;

    _librariesInBuildUnit : core.DartList<LibraryElementInBuildUnit>;

    strongMode : boolean;

    _coreLibrary : LibraryElementForLink<any>;

    _asyncLibrary : LibraryElementForLink<any>;

    _typeProvider : TypeProviderForLink;

    _typeSystem : any;

    _voidElement : SpecialTypeElementForLink;

    _dynamicElement : SpecialTypeElementForLink;

    _bottomElement : SpecialTypeElementForLink;

    _context : ContextForLink;

    _analysisOptions : AnalysisOptionsForLink;

    constructor(linkedLibraries : core.DartMap<string,any>,getDependency : (absoluteUri : string) => any,getUnit : (absoluteUri : string) => any,strongMode : boolean) {
    }
    @defaultConstructor
    Linker(linkedLibraries : core.DartMap<string,any>,getDependency : (absoluteUri : string) => any,getUnit : (absoluteUri : string) => any,strongMode : boolean) {
        this._libraries = new core.DartMap.literal([
        ]);
        this._librariesInBuildUnit = new core.DartList.literal<LibraryElementInBuildUnit>();
        this.getDependency = getDependency;
        this.getUnit = getUnit;
        this.strongMode = strongMode;
        linkedLibraries.forEach((absoluteUri : string,linkedLibrary : any) =>  {
            let uri : lib3.Uri = lib3.Uri.parse(absoluteUri);
            this._librariesInBuildUnit.add(this._libraries.set(uri,new LibraryElementInBuildUnit(this,uri,linkedLibrary)));
        });
    }
    get analysisOptions() : AnalysisOptionsForLink {
        return this._analysisOptions = ( this._analysisOptions ) || ( new AnalysisOptionsForLink(this) );
    }
    get asyncLibrary() : LibraryElementForLink<any> {
        return this._asyncLibrary = ( this._asyncLibrary ) || ( this.getLibrary(lib3.Uri.parse('dart:async')) );
    }
    get bottomElement() : SpecialTypeElementForLink {
        return this._bottomElement = ( this._bottomElement ) || ( new SpecialTypeElementForLink(this,BottomTypeImpl.instance) );
    }
    get context() {
        return this._context = ( this._context ) || ( new ContextForLink(this) );
    }
    get coreLibrary() : LibraryElementForLink<any> {
        return this._coreLibrary = ( this._coreLibrary ) || ( this.getLibrary(lib3.Uri.parse('dart:core')) );
    }
    get dynamicElement() : SpecialTypeElementForLink {
        return this._dynamicElement = ( this._dynamicElement ) || ( new SpecialTypeElementForLink(this,DynamicTypeImpl.instance) );
    }
    get typeProvider() : TypeProviderForLink {
        return this._typeProvider = ( this._typeProvider ) || ( new TypeProviderForLink(this) );
    }
    get typeSystem() : any {
        return this._typeSystem = ( this._typeSystem ) || ( this.strongMode ? new bare.createInstance(any,null,this.typeProvider) : new bare.createInstance(any,null,this.typeProvider) );
    }
    get voidElement() : SpecialTypeElementForLink {
        return this._voidElement = ( this._voidElement ) || ( new SpecialTypeElementForLink(this,VoidTypeImpl.instance) );
    }
    getLibrary(uri : lib3.Uri) : LibraryElementForLink<any> {
        return this._libraries.putIfAbsent(uri,() =>  {
            return new LibraryElementInDependency(this,uri,this.getDependency(uri.toString()));
        });
    }
    link() : void {
        for(let library of this._librariesInBuildUnit) {
            library.libraryCycleForLink.ensureLinked();
        }
    }
    unlink() : void {
        for(let library of this._librariesInBuildUnit) {
            library.unlink();
        }
    }
}

export namespace ReferenceableElementForLink {
    export type Constructors = 'ReferenceableElementForLink';
    export type Interface = Omit<ReferenceableElementForLink, Constructors>;
}
@DartClass
@Implements(any)
export class ReferenceableElementForLink implements any.Interface {
    get asClass() : ClassElementForLink {
        return null;
    }
    get asConstructor() : ConstructorElementForLink {
        return null;
    }
    get asConstVariable() : ConstVariableNode {
        return null;
    }
    get asStaticType() : any {
        return DynamicTypeImpl.instance;
    }
    get asTypeInferenceNode() : TypeInferenceNode {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        return new bare.createInstance(any,null,this);
    }
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        return DynamicTypeImpl.instance;
    }
    getContainedName(name : string) : ReferenceableElementForLink {
        return UndefinedElementForLink.instance;
    }
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    ReferenceableElementForLink() {
    }
}

export namespace LibraryElementInDependency {
    export type Constructors = LibraryElementForLink.Constructors | 'LibraryElementInDependency';
    export type Interface = Omit<LibraryElementInDependency, Constructors>;
}
@DartClass
export class LibraryElementInDependency extends LibraryElementForLink<CompilationUnitElementInDependency> {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _linkedLibrary : any;

    constructor(linker : Linker,absoluteUri : lib3.Uri,_linkedLibrary : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryElementInDependency(linker : Linker,absoluteUri : lib3.Uri,_linkedLibrary : any) {
        super.LibraryElementForLink(linker,absoluteUri);
        this._linkedLibrary = _linkedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryCycleForLink() : LibraryCycleForLink {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _makeUnitElement(unlinkedUnit : any,i : number,absoluteUri : string) : CompilationUnitElementInDependency {
        return new CompilationUnitElementInDependency(this,unlinkedUnit,op(Op.INDEX,this._linkedLibrary.units,i),i,absoluteUri);
    }
}

export namespace FunctionElementForLink_Local_NonSynthetic {
    export type Constructors = ExecutableElementForLink.Constructors | 'FunctionElementForLink_Local_NonSynthetic';
    export type Interface = Omit<FunctionElementForLink_Local_NonSynthetic, Constructors>;
}
@DartClass
@Implements(FunctionElementForLink_Local)
@With(ReferenceableElementForLink)
export class FunctionElementForLink_Local_NonSynthetic extends ExecutableElementForLink implements FunctionElementForLink_Local.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : ExecutableElementForLink;

    _functions : core.DartList<FunctionElementForLink_Local_NonSynthetic>;

    _typeInferenceNode : TypeInferenceNode;

    constructor(compilationUnit : CompilationUnitElementForLink,enclosingElement : ExecutableElementForLink,unlinkedExecutable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionElementForLink_Local_NonSynthetic(compilationUnit : CompilationUnitElementForLink,enclosingElement : ExecutableElementForLink,unlinkedExecutable : any) {
        super.ExecutableElementForLink(compilationUnit,unlinkedExecutable);
        this.enclosingElement = enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asTypeInferenceNode() : TypeInferenceNode {
        return this._typeInferenceNode = ( this._typeInferenceNode ) || ( new TypeInferenceNode(this) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : any {
        return this.enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functions() : core.DartList<FunctionElementForLink_Local_NonSynthetic> {
        return this._functions = ( this._functions ) || ( this._unlinkedExecutable.localFunctions.map((ex : any) =>  {
            return new FunctionElementForLink_Local_NonSynthetic(this.compilationUnit,this,ex);
        }).toList() );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        let identifier : string = this._unlinkedExecutable.name;
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
    get isAsynchronous() : boolean {
        return this._unlinkedExecutable.isAsynchronous;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _hasTypeBeenInferred() : boolean {
        return this._inferredReturnType != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        /* TODO (AssertStatementImpl) : assert (implicitFunctionTypeIndices.isEmpty); */;
        return this.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        let functions : core.DartList<FunctionElementForLink_Local_NonSynthetic> = this.functions;
        return index < functions.length ? functions[index] : null;
    }
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        if (op(Op.EQUALS,this._unlinkedExecutable.returnType,null)) {
            compilationUnit._storeLinkedType(this._unlinkedExecutable.inferredReturnTypeSlot,this.inferredReturnType,this);
        }
        for(let function of this.functions) {
            function.link(compilationUnit);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _setInferenceError(error : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _setInferredType(type : any) : void {
        /* TODO (AssertStatementImpl) : assert (!_hasTypeBeenInferred); */;
        this._inferredReturnType = _dynamicIfNull(type);
    }
}

export namespace FieldFormalParameterElementForLink {
    export type Constructors = ParameterElementForLink.Constructors | 'FieldFormalParameterElementForLink';
    export type Interface = Omit<FieldFormalParameterElementForLink, Constructors>;
}
@DartClass
@Implements(any)
export class FieldFormalParameterElementForLink extends ParameterElementForLink implements any.Interface {
    _field : any;

    _type : any;

    constructor(enclosingElement : ParameterParentElementForLink,unlinkedParam : any,typeParameterContext : any,compilationUnit : CompilationUnitElementForLink,parameterIndex : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldFormalParameterElementForLink(enclosingElement : ParameterParentElementForLink,unlinkedParam : any,typeParameterContext : any,compilationUnit : CompilationUnitElementForLink,parameterIndex : number) {
        super.ParameterElementForLink(enclosingElement,unlinkedParam,typeParameterContext,compilationUnit,parameterIndex);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get field() : any {
        if (op(Op.EQUALS,this._field,null)) {
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
        return this._type = ( this._type ) || ( (((t)=>(!!t)?t.type:null)(this.field) || DynamicTypeImpl.instance) );
    }
}

export namespace TopLevelVariableElementForLink {
    export type Constructors = VariableElementForLink.Constructors | 'TopLevelVariableElementForLink';
    export type Interface = Omit<TopLevelVariableElementForLink, Constructors>;
}
@DartClass
@Implements(any)
export class TopLevelVariableElementForLink extends VariableElementForLink implements any.Interface {
    constructor(enclosingElement : CompilationUnitElementForLink,unlinkedVariable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelVariableElementForLink(enclosingElement : CompilationUnitElementForLink,unlinkedVariable : any) {
        super.VariableElementForLink(unlinkedVariable,enclosingElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : CompilationUnitElementForLink {
        return this.compilationUnit;
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
    get library() : LibraryElementForLink<any> {
        return this.compilationUnit.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _typeParameterContext() : any {
        return null;
    }
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        if (this.hasImplicitType) {
            let typeInferenceNode : TypeInferenceNode = this._typeInferenceNode;
            if (typeInferenceNode != null) {
                compilationUnit._storeLinkedType(this.unlinkedVariable.inferredTypeSlot,this.inferredType,null);
                compilationUnit._storeLinkedTypeError(this.unlinkedVariable.inferredTypeSlot,this.initializer._inferenceError);
            }
            ((_498_)=>(!!_498_)?_498_.link(compilationUnit):null)(this.initializer);
        }
    }
}

export namespace FieldElementForLink_EnumField {
    export type Constructors = FieldElementForLink.Constructors | 'FieldElementForLink_EnumField';
    export type Interface = Omit<FieldElementForLink_EnumField, Constructors>;
}
@DartClass
@Implements(any)
export class FieldElementForLink_EnumField extends FieldElementForLink implements any.Interface {
    _getter : PropertyAccessorElementForLink_EnumField;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : ClassElementForLink_Enum;

    constructor(enclosingElement : ClassElementForLink_Enum) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementForLink_EnumField(enclosingElement : ClassElementForLink_Enum) {
        this.enclosingElement = enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getter() : PropertyAccessorElementForLink_EnumField {
        return this._getter = ( this._getter ) || ( new PropertyAccessorElementForLink_EnumField(this) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${name}`;
    }
}

export namespace FieldElementForLink_ClassField {
    export type Constructors = VariableElementForLink.Constructors | 'FieldElementForLink_ClassField';
    export type Interface = Omit<FieldElementForLink_ClassField, Constructors>;
}
@DartClass
@Implements(FieldElementForLink)
export class FieldElementForLink_ClassField extends VariableElementForLink implements FieldElementForLink.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : ClassElementForLink_Class;

    _inferredInstanceType : any;

    _inferenceError : any;

    constructor(enclosingElement : ClassElementForLink_Class,unlinkedVariable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementForLink_ClassField(enclosingElement : ClassElementForLink_Class,unlinkedVariable : any) {
        this.enclosingElement = enclosingElement;
        super.VariableElementForLink(unlinkedVariable,enclosingElement.enclosingElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.unlinkedVariable.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(inferredType : any) {
        /* TODO (AssertStatementImpl) : assert (!isStatic); */;
        /* TODO (AssertStatementImpl) : assert (_inferredInstanceType == null); */;
        this._inferredInstanceType = inferredType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _typeParameterContext() : any {
        return this.enclosingElement;
    }
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        if (this.hasImplicitType) {
            compilationUnit._storeLinkedType(this.unlinkedVariable.inferredTypeSlot,this.isStatic ? this.inferredType : this._inferredInstanceType,this._typeParameterContext);
            compilationUnit._storeLinkedTypeError(this.unlinkedVariable.inferredTypeSlot,this._inferenceError);
            if (this.initializer != null) {
                compilationUnit._storeLinkedTypeError(this.unlinkedVariable.inferredTypeSlot,this.initializer._inferenceError);
                this.initializer.link(compilationUnit);
            }
        }
    }
    setInferenceError(error : any) : void {
        /* TODO (AssertStatementImpl) : assert (_inferenceError == null); */;
        this._inferenceError = error;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace ExecutableElementForLink_NonLocal {
    export type Constructors = ExecutableElementForLink.Constructors | 'ExecutableElementForLink_NonLocal';
    export type Interface = Omit<ExecutableElementForLink_NonLocal, Constructors>;
}
@DartClass
export class ExecutableElementForLink_NonLocal extends ExecutableElementForLink {
    enclosingClass : ClassElementForLink_Class;

    constructor(compilationUnit : CompilationUnitElementForLink,enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExecutableElementForLink_NonLocal(compilationUnit : CompilationUnitElementForLink,enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any) {
        super.ExecutableElementForLink(compilationUnit,unlinkedExecutable);
        this.enclosingClass = enclosingClass;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return (this.enclosingClass || this.compilationUnit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : any {
        return this.enclosingClass;
    }
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        if (op(Op.EQUALS,this._unlinkedExecutable.returnType,null)) {
            compilationUnit._storeLinkedType(this._unlinkedExecutable.inferredReturnTypeSlot,this.inferredReturnType,this);
        }
        for(let parameterElement of this.parameters) {
            parameterElement.link(compilationUnit);
        }
    }
}

export namespace ConstVariableNode {
    export type Constructors = ConstNode.Constructors | 'ConstVariableNode';
    export type Interface = Omit<ConstVariableNode, Constructors>;
}
@DartClass
export class ConstVariableNode extends ConstNode {
    variableElement : VariableElementForLink;

    constructor(variableElement : VariableElementForLink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstVariableNode(variableElement : VariableElementForLink) {
        this.variableElement = variableElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<ConstNode> {
        let dependencies : core.DartList<ConstNode> = new core.DartList.literal<ConstNode>();
        this.collectDependencies(dependencies,((t)=>(!!t)?t.bodyExpr:null)(this.variableElement.unlinkedVariable.initializer),this.variableElement.compilationUnit);
        return dependencies;
    }
}

export namespace ConstParameterNode {
    export type Constructors = ConstNode.Constructors | 'ConstParameterNode';
    export type Interface = Omit<ConstParameterNode, Constructors>;
}
@DartClass
export class ConstParameterNode extends ConstNode {
    parameterElement : ParameterElementForLink;

    constructor(parameterElement : ParameterElementForLink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstParameterNode(parameterElement : ParameterElementForLink) {
        this.parameterElement = parameterElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<ConstNode> {
        let dependencies : core.DartList<ConstNode> = new core.DartList.literal<ConstNode>();
        this.collectDependencies(dependencies,((t)=>(!!t)?t.bodyExpr:null)(this.parameterElement._unlinkedParam.initializer),this.parameterElement.compilationUnit);
        return dependencies;
    }
}

export namespace ConstConstructorNode {
    export type Constructors = ConstNode.Constructors | 'ConstConstructorNode';
    export type Interface = Omit<ConstConstructorNode, Constructors>;
}
@DartClass
export class ConstConstructorNode extends ConstNode {
    constructorElement : ConstructorElementForLink;

    isCycleFree : boolean;

    constructor(constructorElement : ConstructorElementForLink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstConstructorNode(constructorElement : ConstructorElementForLink) {
        this.isCycleFree = false;
        this.constructorElement = constructorElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<ConstNode> {
        let dependencies : core.DartList<ConstNode> = new core.DartList.literal<ConstNode>();
        var safeAddDependency : (target : ConstNode) => void = (target : ConstNode) : void =>  {
            if (target != null) {
                dependencies.add(target);
            }
        };
        let unlinkedExecutable : any = this.constructorElement._unlinkedExecutable;
        let enclosingClass : ClassElementForLink_Class = this.constructorElement.enclosingElement;
        let redirectedConstructor : ConstructorElementForLink = this._getFactoryRedirectedConstructor();
        if (redirectedConstructor != null) {
            if (redirectedConstructor._constNode != null) {
                safeAddDependency(redirectedConstructor._constNode);
            }
        }else if (unlinkedExecutable.isFactory) {
        }else {
            let superClass : ClassElementForLink = ((t)=>(!!t)?t.element:null)(enclosingClass.supertype);
            let defaultSuperInvocationNeeded : boolean = true;
            for(let constructorInitializer of this.constructorElement._unlinkedExecutable.constantInitializers) {
                if (op(Op.EQUALS,constructorInitializer.kind,UnlinkedConstructorInitializerKind.superInvocation)) {
                    defaultSuperInvocationNeeded = false;
                    if (superClass != null && !superClass.isObject) {
                        let constructor : ConstructorElementForLink = superClass.getContainedName(constructorInitializer.name).asConstructor;
                        safeAddDependency(((t)=>(!!t)?t._constNode:null)(constructor));
                    }
                }else if (op(Op.EQUALS,constructorInitializer.kind,UnlinkedConstructorInitializerKind.thisInvocation)) {
                    defaultSuperInvocationNeeded = false;
                    let constructor : ConstructorElementForLink = this.constructorElement.enclosingClass.getContainedName(constructorInitializer.name).asConstructor;
                    safeAddDependency(((t)=>(!!t)?t._constNode:null)(constructor));
                }
                let compilationUnit : CompilationUnitElementForLink = this.constructorElement.enclosingElement.enclosingElement;
                this.collectDependencies(dependencies,constructorInitializer.expression,compilationUnit);
                for(let unlinkedConst of constructorInitializer.arguments) {
                    this.collectDependencies(dependencies,unlinkedConst,compilationUnit);
                }
            }
            if (defaultSuperInvocationNeeded) {
                if (superClass != null && !superClass.isObject) {
                    let unnamedConstructor : ConstructorElementForLink = superClass.unnamedConstructor;
                    safeAddDependency(((t)=>(!!t)?t._constNode:null)(unnamedConstructor));
                }
            }
            for(let field of enclosingClass.fields) {
                if ((field.isFinal || field.isConst) && !field.isStatic) {
                    safeAddDependency(field.getter.asConstVariable);
                }
            }
            for(let parameterElement of this.constructorElement.parameters) {
                safeAddDependency(parameterElement._constNode);
            }
        }
        return dependencies;
    }
    _getFactoryRedirectedConstructor() : ConstructorElementForLink {
        let redirectedConstructor : any = this.constructorElement._unlinkedExecutable.redirectedConstructor;
        if (redirectedConstructor != null) {
            return this.constructorElement.compilationUnit.resolveRef(redirectedConstructor.reference).asConstructor;
        }else {
            return null;
        }
    }
}

export namespace CompilationUnitElementInDependency {
    export type Constructors = CompilationUnitElementForLink.Constructors | 'CompilationUnitElementInDependency';
    export type Interface = Omit<CompilationUnitElementInDependency, Constructors>;
}
@DartClass
export class CompilationUnitElementInDependency extends CompilationUnitElementForLink {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _linkedUnit : any;

    _linkedTypeRefs : core.DartList<any>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : LibraryElementInDependency;

    constructor(enclosingElement : LibraryElementInDependency,unlinkedUnit : any,linkedUnit : any,unitNum : number,absoluteUri : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitElementInDependency(enclosingElement : LibraryElementInDependency,unlinkedUnit : any,linkedUnit : any,unitNum : number,absoluteUri : string) {
        this._linkedUnit = linkedUnit;
        super.CompilationUnitElementForLink(unlinkedUnit,unitNum,linkedUnit.references.length,absoluteUri);
        this.enclosingElement = enclosingElement;
        let maxLinkedTypeSlot : number = 0;
        for(let ref of this._linkedUnit.types) {
            if (op(Op.GT,ref.slot,maxLinkedTypeSlot)) {
                maxLinkedTypeSlot = ref.slot;
            }
        }
        this._linkedTypeRefs = new core.DartList<any>(maxLinkedTypeSlot + 1);
        for(let ref of this._linkedUnit.types) {
            this._linkedTypeRefs[ref.slot] = ref;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInBuildUnit() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedType(context : any,slot : number) : any {
        if (slot < this._linkedTypeRefs.length) {
            return this.resolveTypeRef(context,this._linkedTypeRefs[slot]);
        }else {
            return DynamicTypeImpl.instance;
        }
    }
}

export namespace LibraryElementInBuildUnit {
    export type Constructors = LibraryElementForLink.Constructors | 'LibraryElementInBuildUnit';
    export type Interface = Omit<LibraryElementInBuildUnit, Constructors>;
}
@DartClass
export class LibraryElementInBuildUnit extends LibraryElementForLink<CompilationUnitElementInBuildUnit> {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _linkedLibrary : any;

    _libraryNode : LibraryNode;

    _inheritanceManager : any;

    constructor(linker : Linker,absoluteUri : lib3.Uri,_linkedLibrary : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryElementInBuildUnit(linker : Linker,absoluteUri : lib3.Uri,_linkedLibrary : any) {
        super.LibraryElementForLink(linker,absoluteUri);
        this._linkedLibrary = _linkedLibrary;
        this._libraryNode = new LibraryNode(this);
    }
    get inheritanceManager() : any {
        return this._inheritanceManager = ( this._inheritanceManager ) || ( new bare.createInstance(any,null,this,{
            ignoreErrors : true}) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryCycleForLink() : LibraryCycleForLink {
        if (!this._libraryNode.isEvaluated) {
            new LibraryDependencyWalker().walk(this._libraryNode);
        }
        return this._libraryNode._libraryCycle;
    }
    addDependency(library : LibraryElementForLink<any>) : number {
        for(let i : number = 0; i < this._linkedLibrary.dependencies.length; i++){
            if (core.identical(this._getDependency(i),library)) {
                return i;
            }
        }
        let result : number = this._linkedLibrary.dependencies.length;
        let libraryUri : lib3.Uri = library._absoluteUri;
        let partsRelativeToDependency : core.DartList<string> = library.definingUnlinkedUnit.publicNamespace.parts;
        let partsAbsolute : core.DartList<string> = partsRelativeToDependency.map((partUri : any) =>  {
            return resolveRelativeUri(libraryUri,lib3.Uri.parse(partUri)).toString();
        }).toList();
        this._linkedLibrary.dependencies.add(new bare.createInstance(any,null,{
            parts : partsAbsolute,uri : libraryUri.toString()}));
        this._dependencies.add(library);
        return result;
    }
    link() : void {
        for(let unit of this.units) {
            unit.link();
        }
    }
    unlink() : void {
        this._linkedLibrary.dependencies.length = this._linkedLibrary.numPrelinkedDependencies;
        for(let unit of this.units) {
            unit.unlink();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _makeUnitElement(unlinkedUnit : any,i : number,absoluteUri : string) : CompilationUnitElementInBuildUnit {
        return new CompilationUnitElementInBuildUnit(this,unlinkedUnit,op(Op.INDEX,this._linkedLibrary.units,i),i,absoluteUri);
    }
}

export namespace CompilationUnitElementInBuildUnit {
    export type Constructors = CompilationUnitElementForLink.Constructors | 'CompilationUnitElementInBuildUnit';
    export type Interface = Omit<CompilationUnitElementInBuildUnit, Constructors>;
}
@DartClass
export class CompilationUnitElementInBuildUnit extends CompilationUnitElementForLink {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _linkedUnit : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : LibraryElementInBuildUnit;

    constructor(enclosingElement : LibraryElementInBuildUnit,unlinkedUnit : any,_linkedUnit : any,unitNum : number,absoluteUri : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitElementInBuildUnit(enclosingElement : LibraryElementInBuildUnit,unlinkedUnit : any,_linkedUnit : any,unitNum : number,absoluteUri : string) {
        super.CompilationUnitElementForLink(unlinkedUnit,unitNum,unlinkedUnit.references.length,absoluteUri);
        this.enclosingElement = enclosingElement;
        this._linkedUnit = _linkedUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInBuildUnit() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementInBuildUnit {
        return this.enclosingElement;
    }
    addRawReference(name : string,_namedArguments? : {dependency? : number,numTypeParameters? : number,unitNum? : number,containingReference? : number,localIndex? : number,kind? : any}) : number {
        let {dependency,numTypeParameters,unitNum,containingReference,localIndex,kind} = Object.assign({
            "dependency" : 0,
            "numTypeParameters" : 0,
            "unitNum" : 0,
            "containingReference" : 0,
            "localIndex" : 0,
            "kind" : ReferenceKind.classOrEnum}, _namedArguments );
        let linkedReferences : core.DartList<any> = this._linkedUnit.references;
        let unlinkedReferences : core.DartList<any> = this._unlinkedUnit.references;
        for(let i : number = 0; i < linkedReferences.length; i++){
            let linkedReference : any = linkedReferences[i];
            let candidateContainingReference : number = i < unlinkedReferences.length ? unlinkedReferences[i].prefixReference : linkedReference.containingReference;
            if (candidateContainingReference != 0 && op(Op.EQUALS,linkedReferences[candidateContainingReference].kind,ReferenceKind.prefix)) {
                candidateContainingReference = 0;
            }
            if (op(Op.EQUALS,linkedReference.dependency,dependency) && op(Op.EQUALS,(i < unlinkedReferences.length ? unlinkedReferences[i].name : linkedReference.name),name) && op(Op.EQUALS,linkedReference.numTypeParameters,numTypeParameters) && op(Op.EQUALS,linkedReference.unit,unitNum) && candidateContainingReference == containingReference && op(Op.EQUALS,linkedReference.kind,kind) && op(Op.EQUALS,linkedReference.localIndex,localIndex)) {
                return i;
            }
        }
        let result : number = linkedReferences.length;
        linkedReferences.add(new bare.createInstance(any,null,{
            dependency : dependency,name : name,numTypeParameters : numTypeParameters,unit : unitNum,containingReference : containingReference,kind : kind,localIndex : localIndex}));
        return result;
    }
    addReference(element : any) : number {
        if (is(element, ClassElementForLink)) {
            return this.addRawReference(element.name,{
                dependency : this.library.addDependency(element.library),numTypeParameters : element.typeParameters.length,unitNum : element.enclosingElement.unitNum});
        }else if (is(element, FunctionTypeAliasElementForLink)) {
            return this.addRawReference(element.name,{
                dependency : this.library.addDependency(element.library),numTypeParameters : element.typeParameters.length,unitNum : element.enclosingElement.unitNum,kind : ReferenceKind.typedef});
        }else if (is(element, FunctionElementForLink_Initializer)) {
            return this.addRawReference('',{
                containingReference : this.addReference(element.enclosingElement),kind : ReferenceKind.function,localIndex : 0});
        }else if (is(element, FunctionElementForLink_Local_NonSynthetic)) {
            let parent : ExecutableElementForLink = element.enclosingElement;
            let localIndex : number = parent.functions.indexOf(element);
            /* TODO (AssertStatementImpl) : assert (localIndex != -1); */;
            return this.addRawReference(element.name,{
                containingReference : this.addReference(parent),kind : ReferenceKind.function,localIndex : localIndex});
        }else if (is(element, ExecutableElementForLink_NonLocal)) {
            let enclosingClass : ClassElementForLink_Class = element.enclosingClass;
            let kind : any;
            switch (element._unlinkedExecutable.kind) {
                case UnlinkedExecutableKind.functionOrMethod:
                    kind = enclosingClass != null ? ReferenceKind.method : ReferenceKind.topLevelFunction;
                    break;
                case UnlinkedExecutableKind.setter:
                    kind = ReferenceKind.propertyAccessor;
                    break;
                default:
                    throw new core.UnimplementedError(`${element._unlinkedExecutable.kind}`);
            }
            if (op(Op.EQUALS,enclosingClass,null)) {
                return this.addRawReference(element.name,{
                    numTypeParameters : element.typeParameters.length,dependency : this.library.addDependency(element.library as LibraryElementForLink<any>),unitNum : element.compilationUnit.unitNum,kind : kind});
            }else {
                return this.addRawReference(element.name,{
                    numTypeParameters : element.typeParameters.length,containingReference : this.addReference(enclosingClass),kind : kind});
            }
        }else if (is(element, FunctionElementForLink_Initializer)) {
            return this.addRawReference('',{
                containingReference : this.addReference(element.enclosingElement),kind : ReferenceKind.function});
        }else if (is(element, TopLevelVariableElementForLink)) {
            return this.addRawReference(element.name,{
                dependency : this.library.addDependency(element.library),unitNum : element.compilationUnit.unitNum,kind : ReferenceKind.topLevelPropertyAccessor});
        }else if (is(element, FieldElementForLink_ClassField)) {
            let enclosingClass : ClassElementForLink_Class = element.enclosingElement;
            return this.addRawReference(element.name,{
                containingReference : this.addReference(enclosingClass),kind : ReferenceKind.propertyAccessor});
        }
        throw new core.UnimplementedError(`${element.runtimeType}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedType(context : any,slot : number) : any {
        throw new core.StateError('Linker tried to access linked type from current build unit');
    }
    link() : void {
        if (this.library._linker.strongMode) {
            new bare.createInstance(any,null,this.enclosingElement._linker.typeProvider,(clazz : any) =>  {
                return (clazz.library as LibraryElementInBuildUnit).inheritanceManager;
            },new core.DartSet<any>()).inferCompilationUnit(this);
            for(let variable of this.topLevelVariables) {
                variable.link(this);
            }
        }
        for(let classElement of this.types) {
            classElement.link(this);
        }
    }
    unlink() : void {
        this._linkedUnit.constCycles.clear();
        this._linkedUnit.parametersInheritingCovariant.clear();
        this._linkedUnit.references.length = this._unlinkedUnit.references.length;
        this._linkedUnit.types.clear();
    }
    _storeConstCycle(slot : number) : void {
        this._linkedUnit.constCycles.add(slot);
    }
    _storeInheritsCovariant(slot : number) : void {
        this._linkedUnit.parametersInheritingCovariant.add(slot);
    }
    _storeLinkedType(slot : number,linkedType : any,typeParameterContext : any) : void {
        if (slot != 0) {
            if (linkedType != null && !linkedType.isDynamic) {
                this._linkedUnit.types.add(_createLinkedType(linkedType,this,typeParameterContext,{
                    slot : slot}));
            }
        }
    }
    _storeLinkedTypeError(slot : number,error : any) : void {
        if (slot != 0) {
            if (error != null) {
                error.slot = slot;
                this._linkedUnit.topLevelInferenceErrors.add(error);
            }
        }
    }
}

export namespace ClassElementForLink_Class {
    export type Constructors = ClassElementForLink.Constructors | 'ClassElementForLink_Class';
    export type Interface = Omit<ClassElementForLink_Class, Constructors>;
}
@DartClass
@Implements(any)
@With(any)
export class ClassElementForLink_Class extends ClassElementForLink implements any.Interface,any.Interface {
    _unlinkedClass : any;

    _constructors : core.DartList<ConstructorElementForLink>;

    _unnamedConstructor : ConstructorElementForLink;

    _unnamedConstructorComputed : boolean;

    _fields : core.DartList<FieldElementForLink_ClassField>;

    _supertype : any;

    _type : any;

    _methods : core.DartList<MethodElementForLink>;

    _mixins : core.DartList<any>;

    _interfaces : core.DartList<any>;

    _accessors : core.DartList<PropertyAccessorElementForLink>;

    constructor(enclosingElement : CompilationUnitElementForLink,_unlinkedClass : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassElementForLink_Class(enclosingElement : CompilationUnitElementForLink,_unlinkedClass : any) {
        this._unnamedConstructorComputed = false;
        super.ClassElementForLink(enclosingElement);
        this._unlinkedClass = _unlinkedClass;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<PropertyAccessorElementForLink> {
        if (this._accessors == null) {
            this._accessors = new core.DartList.literal<PropertyAccessorElementForLink>();
            let syntheticVariables : core.DartMap<string,SyntheticVariableElementForLink> = new core.DartMap.literal([
            ]);
            for(let unlinkedExecutable of this._unlinkedClass.executables) {
                if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.getter) || op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.setter)) {
                    let name : string = unlinkedExecutable.name;
                    if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.setter)) {
                        /* TODO (AssertStatementImpl) : assert (name.endsWith('=')); */;
                        name = new core.DartString(name).substring(0,new core.DartString(name).length - 1);
                    }
                    let syntheticVariable : SyntheticVariableElementForLink = syntheticVariables.putIfAbsent(name,() =>  {
                        return new SyntheticVariableElementForLink();
                    });
                    let accessor : PropertyAccessorElementForLink_Executable = new PropertyAccessorElementForLink_Executable(this.enclosingElement,this,unlinkedExecutable,syntheticVariable);
                    this._accessors.add(accessor);
                    if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.getter)) {
                        syntheticVariable._getter = accessor;
                    }else {
                        syntheticVariable._setter = accessor;
                    }
                }
            }
            for(let field of this.fields) {
                this._accessors.add(field.getter);
                if (!field.isConst && !field.isFinal) {
                    this._accessors.add(field.setter);
                }
            }
        }
        return this._accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructors() : core.DartList<ConstructorElementForLink> {
        if (this._constructors == null) {
            this._constructors = new core.DartList.literal<ConstructorElementForLink>();
            for(let unlinkedExecutable of this._unlinkedClass.executables) {
                if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.constructor)) {
                    this._constructors.add(new ConstructorElementForLink(this,unlinkedExecutable));
                }
            }
            if (this._constructors.isEmpty) {
                this._unnamedConstructorComputed = true;
                this._unnamedConstructor = new ConstructorElementForLink_Synthetic(this);
                this._constructors.add(this._unnamedConstructor);
            }
        }
        return this._constructors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : ContextForLink {
        return this.enclosingUnit.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this._unlinkedClass.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingTypeParameterContext() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<FieldElementForLink_ClassField> {
        if (this._fields == null) {
            this._fields = new core.DartList.literal<FieldElementForLink_ClassField>();
            for(let field of this._unlinkedClass.fields) {
                this._fields.add(new FieldElementForLink_ClassField(this,field));
            }
        }
        return this._fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<any> {
        return this._interfaces = ( this._interfaces ) || ( this._unlinkedClass.interfaces.map(this._computeInterfaceType.bind(this)).toList() );
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
        return this._unlinkedClass.isMixinApplication;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isObject() : boolean {
        return this._unlinkedClass.hasNoSupertype;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get library() : LibraryElementForLink<any> {
        return this.enclosingElement.library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methods() : core.DartList<MethodElementForLink> {
        if (this._methods == null) {
            this._methods = new core.DartList.literal<MethodElementForLink>();
            for(let unlinkedExecutable of this._unlinkedClass.executables) {
                if (op(Op.EQUALS,unlinkedExecutable.kind,UnlinkedExecutableKind.functionOrMethod)) {
                    this._methods.add(new MethodElementForLink(this,unlinkedExecutable));
                }
            }
        }
        return this._methods;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<any> {
        return this._mixins = ( this._mixins ) || ( this._unlinkedClass.mixins.map(this._computeInterfaceType.bind(this)).toList() );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._unlinkedClass.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get supertype() : any {
        if (this.isObject) {
            return null;
        }
        return this._supertype = ( this._supertype ) || ( this._computeInterfaceType(this._unlinkedClass.supertype) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type = ( this._type ) || ( this.buildType((i : number) =>  {
            return op(Op.INDEX,typeParameterTypes,i);
        },null) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlinkedTypeParams() : core.DartList<any> {
        return this._unlinkedClass.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unnamedConstructor() : ConstructorElementForLink {
        if (!this._unnamedConstructorComputed) {
            for(let constructor of this.constructors) {
                if (new core.DartString(constructor.name).isEmpty) {
                    this._unnamedConstructor = constructor;
                    break;
                }
            }
            this._unnamedConstructorComputed = true;
        }
        return this._unnamedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get version() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        let numTypeParameters : number = this._unlinkedClass.typeParameters.length;
        if (numTypeParameters != 0) {
            let typeArguments : core.DartList<any> = new core.DartList.generate(numTypeParameters,getTypeArgument);
            if (typeArguments.contains(null)) {
                return this.context.typeSystem.instantiateToBounds(this.type);
            }else {
                return new bare.createInstance(any,null,this,this.name,() =>  {
                    return typeArguments;
                });
            }
        }else {
            return this._type = ( this._type ) || ( new bare.createInstance(any,null,this) );
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        for(let constructorElement of this.constructors) {
            constructorElement.link(compilationUnit);
        }
        if (this.library._linker.strongMode) {
            for(let methodElement of this.methods) {
                methodElement.link(compilationUnit);
            }
            for(let propertyAccessorElement of this.accessors) {
                propertyAccessorElement.link(compilationUnit);
            }
            for(let fieldElement of this.fields) {
                fieldElement.link(compilationUnit);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
    _computeInterfaceType(typeRef : any) : any {
        if (typeRef != null) {
            let type : any = this.enclosingElement.resolveTypeRef(this,typeRef);
            if (is(type, any) && !type.element.isEnum) {
                return type;
            }
        }
        return this.enclosingElement.enclosingElement._linker.typeProvider.objectType;
    }
}

export namespace ClassElementForLink_Enum {
    export type Constructors = ClassElementForLink.Constructors | 'ClassElementForLink_Enum';
    export type Interface = Omit<ClassElementForLink_Enum, Constructors>;
}
@DartClass
@Implements(any)
export class ClassElementForLink_Enum extends ClassElementForLink implements any.Interface {
    _unlinkedEnum : any;

    _type : any;

    _fields : core.DartList<FieldElementForLink>;

    _accessors : core.DartList<PropertyAccessorElementForLink>;

    _valuesType : any;

    constructor(enclosingElement : CompilationUnitElementForLink,_unlinkedEnum : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassElementForLink_Enum(enclosingElement : CompilationUnitElementForLink,_unlinkedEnum : any) {
        super.ClassElementForLink(enclosingElement);
        this._unlinkedEnum = _unlinkedEnum;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<PropertyAccessorElementForLink> {
        if (this._accessors == null) {
            this._accessors = new core.DartList.literal<PropertyAccessorElementForLink>();
            for(let field of this.fields) {
                this._accessors.add(field.getter);
            }
        }
        return this._accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructors() : core.DartList<ConstructorElementForLink> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this._unlinkedEnum.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartList<FieldElementForLink> {
        if (this._fields == null) {
            this._fields = new core.DartList.literal<FieldElementForLink>();
            this._fields.add(new FieldElementForLink_EnumField_values(this));
            for(let value of this._unlinkedEnum.values) {
                this._fields.add(new FieldElementForLink_EnumField_value(this,value));
            }
            this._fields.add(new FieldElementForLink_EnumField_index(this));
        }
        return this._fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<any> {
        return new core.DartList.literal();
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
    get isObject() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methods() : core.DartList<MethodElementForLink> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<any> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._unlinkedEnum.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get supertype() : any {
        return this.library._linker.typeProvider.objectType;
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
    get typeParameters() : core.DartList<any> {
        return new core.DartList.literal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unnamedConstructor() : ConstructorElementForLink {
        return null;
    }
    get valuesType() : any {
        return this._valuesType = ( this._valuesType ) || ( this.library._linker.typeProvider.listType.instantiate(new core.DartList.literal(this.type)) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        return this.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace TopLevelFunctionElementForLink {
    export type Constructors = ExecutableElementForLink_NonLocal.Constructors | 'TopLevelFunctionElementForLink';
    export type Interface = Omit<TopLevelFunctionElementForLink, Constructors>;
}
@DartClass
@Implements(any)
@With(ReferenceableElementForLink)
export class TopLevelFunctionElementForLink extends ExecutableElementForLink_NonLocal implements any.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    _returnType : any;

    constructor(enclosingUnit : CompilationUnitElementForLink,_buf : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelFunctionElementForLink(enclosingUnit : CompilationUnitElementForLink,_buf : any) {
        super.ExecutableElementForLink_NonLocal(enclosingUnit,null,_buf);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this._unlinkedExecutable.name;
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
    get kind() : any {
        return ElementKind.FUNCTION;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace MethodElementForLink {
    export type Constructors = ExecutableElementForLink_NonLocal.Constructors | 'MethodElementForLink';
    export type Interface = Omit<MethodElementForLink, Constructors>;
}
@DartClass
@Implements(any)
@With(ReferenceableElementForLink)
export class MethodElementForLink extends ExecutableElementForLink_NonLocal implements any.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    constructor(enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodElementForLink(enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any) {
        super.ExecutableElementForLink_NonLocal(enclosingClass.enclosingElement,enclosingClass,unlinkedExecutable);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingClass;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this.name;
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
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace FieldElementForLink_EnumField_values {
    export type Constructors = FieldElementForLink_EnumField.Constructors | 'FieldElementForLink_EnumField_values';
    export type Interface = Omit<FieldElementForLink_EnumField_values, Constructors>;
}
@DartClass
export class FieldElementForLink_EnumField_values extends FieldElementForLink_EnumField {
    constructor(enclosingElement : ClassElementForLink_Enum) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementForLink_EnumField_values(enclosingElement : ClassElementForLink_Enum) {
        super.FieldElementForLink_EnumField(enclosingElement);
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
    get name() : string {
        return 'values';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.enclosingElement.valuesType;
    }
}

export namespace FieldElementForLink_EnumField_value {
    export type Constructors = FieldElementForLink_EnumField.Constructors | 'FieldElementForLink_EnumField_value';
    export type Interface = Omit<FieldElementForLink_EnumField_value, Constructors>;
}
@DartClass
export class FieldElementForLink_EnumField_value extends FieldElementForLink_EnumField {
    unlinkedEnumValue : any;

    constructor(enclosingElement : ClassElementForLink_Enum,unlinkedEnumValue : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementForLink_EnumField_value(enclosingElement : ClassElementForLink_Enum,unlinkedEnumValue : any) {
        super.FieldElementForLink_EnumField(enclosingElement);
        this.unlinkedEnumValue = unlinkedEnumValue;
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
    get name() : string {
        return this.unlinkedEnumValue.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.enclosingElement.type;
    }
}

export namespace FieldElementForLink_EnumField_index {
    export type Constructors = FieldElementForLink_EnumField.Constructors | 'FieldElementForLink_EnumField_index';
    export type Interface = Omit<FieldElementForLink_EnumField_index, Constructors>;
}
@DartClass
export class FieldElementForLink_EnumField_index extends FieldElementForLink_EnumField {
    constructor(enclosingElement : ClassElementForLink_Enum) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementForLink_EnumField_index(enclosingElement : ClassElementForLink_Enum) {
        super.FieldElementForLink_EnumField(enclosingElement);
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
    get name() : string {
        return 'index';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this.enclosingElement.enclosingElement.library._linker.typeProvider.intType;
    }
}

export namespace ConstructorElementForLink {
    export type Constructors = ExecutableElementForLink_NonLocal.Constructors | 'ConstructorElementForLink';
    export type Interface = Omit<ConstructorElementForLink, Constructors>;
}
@DartClass
@Implements(any)
@With(ReferenceableElementForLink)
export class ConstructorElementForLink extends ExecutableElementForLink_NonLocal implements any.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @Abstract
    getContainedName(name : string) : ReferenceableElementForLink {
        throw 'from mixin';
    }
    @Abstract
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        throw 'from mixin';
    }
    _constNode : ConstConstructorNode;

    constructor(enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorElementForLink(enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any) {
        super.ExecutableElementForLink_NonLocal(enclosingClass.enclosingElement,enclosingClass,unlinkedExecutable);
        if (enclosingClass.enclosingElement.isInBuildUnit && this._unlinkedExecutable != null && this._unlinkedExecutable.constCycleSlot != 0) {
            this._constNode = new ConstConstructorNode(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asConstructor() : ConstructorElementForLink {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enclosingElement() : any {
        return super.enclosingClass;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : string {
        return this.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCycleFree() : boolean {
        if (!this._constNode.isEvaluated) {
            new ConstDependencyWalker().walk(this._constNode);
        }
        return this._constNode.isCycleFree;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this.enclosingElement.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return new core.DartList.literal();
    }
    link(compilationUnit : CompilationUnitElementInBuildUnit) : void {
        if (this._constNode != null && !this.isCycleFree) {
            compilationUnit._storeConstCycle(this._unlinkedExecutable.constCycleSlot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace PropertyAccessorElementForLink_Executable {
    export type Constructors = ExecutableElementForLink_NonLocal.Constructors | 'PropertyAccessorElementForLink_Executable';
    export type Interface = Omit<PropertyAccessorElementForLink_Executable, Constructors>;
}
@DartClass
@Implements(PropertyAccessorElementForLink)
@With(ReferenceableElementForLink)
export class PropertyAccessorElementForLink_Executable extends ExecutableElementForLink_NonLocal implements PropertyAccessorElementForLink.Interface,ReferenceableElementForLink.Interface {
    @Abstract
    buildType(getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variable : any;

    constructor(enclosingUnit : CompilationUnitElementForLink,enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any,variable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessorElementForLink_Executable(enclosingUnit : CompilationUnitElementForLink,enclosingClass : ClassElementForLink_Class,unlinkedExecutable : any,variable : any) {
        super.ExecutableElementForLink_NonLocal(enclosingUnit,enclosingClass,unlinkedExecutable);
        this.variable = variable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asStaticType() : any {
        return this.returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get correspondingGetter() : PropertyAccessorElementForLink_Executable {
        return this.variable.getter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGetter() : boolean {
        return op(Op.EQUALS,this._unlinkedExecutable.kind,UnlinkedExecutableKind.getter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSetter() : boolean {
        return op(Op.EQUALS,this._unlinkedExecutable.kind,UnlinkedExecutableKind.setter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return op(Op.EQUALS,this.enclosingClass,null) || super.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        return op(Op.EQUALS,this._unlinkedExecutable.kind,UnlinkedExecutableKind.getter) ? ElementKind.GETTER : ElementKind.SETTER;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContainedName(name : string) : ReferenceableElementForLink {
        return new NonstaticMemberElementForLink(this.library as LibraryElementForLink<any>,this,name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLocalFunction(index : number) : FunctionElementForLink_Local {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.enclosingElement}.${this.name}`;
    }
}

export namespace ConstructorElementForLink_Synthetic {
    export type Constructors = ConstructorElementForLink.Constructors | 'ConstructorElementForLink_Synthetic';
    export type Interface = Omit<ConstructorElementForLink_Synthetic, Constructors>;
}
@DartClass
export class ConstructorElementForLink_Synthetic extends ConstructorElementForLink {
    constructor(enclosingElement : ClassElementForLink_Class) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorElementForLink_Synthetic(enclosingElement : ClassElementForLink_Class) {
        super.ConstructorElementForLink(enclosingElement,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return '';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return new core.DartList.literal<any>();
    }
}

export class properties {
}
