/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/element/type.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace TypeImpl {
    export type Constructors = 'TypeImpl';
    export type Interface = Omit<TypeImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeImpl implements any.Interface {
    _element : any;

    name : string;

    constructor(_element : any,name : string) {
    }
    @defaultConstructor
    TypeImpl(_element : any,name : string) {
        this._element = _element;
        this.name = name;
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
    get element() : any {
        return this._element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBottom() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartAsyncFuture() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartAsyncFutureOr() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCoreFunction() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCoreNull() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDynamic() : boolean {
        return false;
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
    get isUndefined() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVoid() : boolean {
        return false;
    }
    appendTo(buffer : core.DartStringBuffer,visitedTypes : core.DartSet<TypeImpl>) : void {
        if (visitedTypes.add(this)) {
            if (this.name == null) {
                buffer.write("<unnamed type>");
            }else {
                buffer.write(this.name);
            }
            visitedTypes.remove(this);
        }else {
            buffer.write('<recursive>');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    flattenFutures(typeSystem : any) : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAssignableTo(type : any) : boolean {
        return this.isSubtypeOf(type) || type.isSubtypeOf(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    isMoreSpecificThan(type : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(type : any) : boolean {
        return this.isMoreSpecificThan(type,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSupertypeOf(type : any) : boolean {
        return type.isSubtypeOf(this);
    }
    @Abstract
    pruned(prune : core.DartList<any>) : TypeImpl{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveToBound(objectType : any) : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        this.appendTo(buffer,new core.DartSet.identity());
        return buffer.toString();
    }
    static equalArrays(first : core.DartList<any>,second : core.DartList<any>) : boolean {
        if (first.length != second.length) {
            return false;
        }
        for(let i : number = 0; i < first.length; i++){
            if (op(Op.EQUALS,first[i],null)) {
                AnalysisEngine.instance.logger.logInformation('Found null type argument in TypeImpl.equalArrays');
                return op(Op.EQUALS,second[i],null);
            }else if (op(Op.EQUALS,second[i],null)) {
                AnalysisEngine.instance.logger.logInformation('Found null type argument in TypeImpl.equalArrays');
                return false;
            }
            if (first[i] != second[i]) {
                return false;
            }
        }
        return true;
    }
    static substitute(types : core.DartList<any>,argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : core.DartList<any> {
        let length : number = types.length;
        if (length == 0) {
            return types;
        }
        let newTypes : core.DartList<any> = new core.DartList<any>(length);
        for(let i : number = 0; i < length; i++){
            newTypes[i] = (types[i] as TypeImpl).substitute2(argumentTypes,parameterTypes,prune);
        }
        return newTypes;
    }
}

export namespace VoidType {
    export type Constructors = 'VoidType';
    export type Interface = Omit<VoidType, Constructors>;
}
@DartClass
@Implements(any)
export class VoidType implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>) : VoidType{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    VoidType() {
    }
}

export namespace BottomTypeImpl {
    export type Constructors = TypeImpl.Constructors | '_';
    export type Interface = Omit<BottomTypeImpl, Constructors>;
}
@DartClass
export class BottomTypeImpl extends TypeImpl {
    private static __$instance : BottomTypeImpl;
    static get instance() : BottomTypeImpl { 
        if (this.__$instance===undefined) {
            this.__$instance = new BottomTypeImpl._();
        }
        return this.__$instance;
    }
    static set instance(__$value : BottomTypeImpl)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
        super.TypeImpl(null,"<bottom>");
    }
    static _ : new() => BottomTypeImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBottom() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return core.identical(object,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(type : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean {
        withDynamic = withDynamic || false;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(type : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSupertypeOf(type : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : TypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : BottomTypeImpl {
        return this;
    }
}

export namespace DynamicTypeImpl {
    export type Constructors = TypeImpl.Constructors | '_' | '_circular';
    export type Interface = Omit<DynamicTypeImpl, Constructors>;
}
@DartClass
export class DynamicTypeImpl extends TypeImpl {
    private static __$instance : DynamicTypeImpl;
    static get instance() : DynamicTypeImpl { 
        if (this.__$instance===undefined) {
            this.__$instance = new DynamicTypeImpl._();
        }
        return this.__$instance;
    }
    static set instance(__$value : DynamicTypeImpl)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
        super.TypeImpl(new bare.createInstance(any,null),Keyword.DYNAMIC.lexeme);
        (this.element as any).type = this;
    }
    static _ : new() => DynamicTypeImpl;

    @namedConstructor
    _circular() {
        super.TypeImpl(DynamicTypeImpl.instance.element,Keyword.DYNAMIC.lexeme);
    }
    static _circular : new() => DynamicTypeImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDynamic() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return core.identical(object,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(type : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean {
        withDynamic = withDynamic || false;
        if (core.identical(this,type)) {
            return true;
        }
        return withDynamic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(type : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSupertypeOf(type : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : TypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : any {
        let length : number = parameterTypes.length;
        for(let i : number = 0; i < length; i++){
            if (op(Op.EQUALS,parameterTypes[i],this)) {
                return argumentTypes[i];
            }
        }
        return this;
    }
}

export namespace FunctionTypeImpl {
    export type Constructors = TypeImpl.Constructors | 'FunctionTypeImpl' | 'elementWithNameAndArgs' | 'forTypedef' | '_';
    export type Interface = Omit<FunctionTypeImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionTypeImpl extends TypeImpl implements any.Interface {
    _typeArguments : core.DartList<any>;

    _typeParameters : core.DartList<any>;

    _explicitTypeParameters : core.DartList<any>;

    _returnType : any;

    _parameters : core.DartList<any>;

    _isInstantiated : boolean;

    prunedTypedefs : core.DartList<any>;

    constructor(element : any,prunedTypedefs? : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeImpl(element : any,prunedTypedefs? : core.DartList<any>) {
        this._(element,null,prunedTypedefs,null,null,null,null,false);
    }
    @namedConstructor
    elementWithNameAndArgs(element : any,name : string,typeArguments : core.DartList<any>,isInstantiated : boolean) {
        this._(element,name,null,typeArguments,null,null,null,isInstantiated);
    }
    static elementWithNameAndArgs : new(element : any,name : string,typeArguments : core.DartList<any>,isInstantiated : boolean) => FunctionTypeImpl;

    @namedConstructor
    forTypedef(element : any,prunedTypedefs? : core.DartList<any>) {
        this._(element,((t)=>(!!t)?t.name:null)(element),prunedTypedefs,null,null,null,null,false);
    }
    static forTypedef : new(element : any,prunedTypedefs : core.DartList<any>) => FunctionTypeImpl;

    @namedConstructor
    _(element : any,name : string,prunedTypedefs : core.DartList<any>,_typeArguments : core.DartList<any>,_explicitTypeParameters : core.DartList<any>,_returnType : any,_parameters : core.DartList<any>,_isInstantiated : boolean) {
        this._typeParameters = _explicitTypeParameters;
        super.TypeImpl(element,name);
        this.prunedTypedefs = prunedTypedefs;
        this._typeArguments = _typeArguments;
        this._explicitTypeParameters = _explicitTypeParameters;
        this._returnType = _returnType;
        this._parameters = _parameters;
        this._isInstantiated = _isInstantiated;
    }
    static _ : new(element : any,name : string,prunedTypedefs : core.DartList<any>,_typeArguments : core.DartList<any>,_explicitTypeParameters : core.DartList<any>,_returnType : any,_parameters : core.DartList<any>,_isInstantiated : boolean) => FunctionTypeImpl;

    get baseParameters() : core.DartList<any> {
        return (this._parameters || this.element.parameters);
    }
    get baseReturnType() : any {
        return (this._returnType || this.element.returnType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get boundTypeParameters() : core.DartList<any> {
        return this.typeFormals;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        let name : string = this.name;
        if (name == null || new core.DartString(name).length == 0) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            this.appendTo(buffer,new core.DartSet.identity());
            return buffer.toString();
        }
        let typeArguments : core.DartList<any> = this.typeArguments;
        var areAllTypeArgumentsDynamic : () => boolean = () : boolean =>  {
            for(let type of typeArguments) {
                if (type != null && !type.isDynamic) {
                    return false;
                }
            }
            return true;
        };
        if (!areAllTypeArgumentsDynamic()) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write(name);
            buffer.write("<");
            for(let i : number = 0; i < typeArguments.length; i++){
                if (i != 0) {
                    buffer.write(", ");
                }
                let typeArg : any = typeArguments[i];
                buffer.write(typeArg.displayName);
            }
            buffer.write(">");
            name = buffer.toString();
        }
        return name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return super.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        if (op(Op.EQUALS,this.element,null)) {
            return 0;
        }
        let normalParameterTypes : core.DartList<any> = this.normalParameterTypes;
        let optionalParameterTypes : core.DartList<any> = this.optionalParameterTypes;
        let namedParameterTypes : core.DartIterable<any> = this.namedParameterTypes.values;
        let code : number = this.returnType.hashCode;
        for(let i : number = 0; i < normalParameterTypes.length; i++){
            code = (code << 1) + normalParameterTypes[i].hashCode;
        }
        for(let i : number = 0; i < optionalParameterTypes.length; i++){
            code = (code << 1) + optionalParameterTypes[i].hashCode;
        }
        for(let type of namedParameterTypes) {
            code = (code << 1) + type.hashCode;
        }
        return code;
    }
    get isInstantiated() : boolean {
        return this._isInstantiated;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get namedParameterTypes() : core.DartMap<string,any> {
        let types : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        this._forEachParameterType(ParameterKind.NAMED,(name : any,type : any) =>  {
            types.set(name,type);
        });
        return types;
    }
    get newPrune() : core.DartList<any> {
        let element : any = this.element;
        if (is(element, any) && !element.isSynthetic) {
            if (this.prunedTypedefs == null) {
                return new core.DartList.literal<any>(element);
            }else {
                return ((_) : core.DartList<any> =>  {
                    {
                        _.add(element);
                        return _;
                    }
                })(new core.DartList.from(this.prunedTypedefs));
            }
        }else {
            return this.prunedTypedefs;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get normalParameterNames() : core.DartList<string> {
        return this.baseParameters.where((parameter : any) =>  {
            return op(Op.EQUALS,parameter.parameterKind,ParameterKind.REQUIRED);
        }).map((parameter : any) =>  {
            return parameter.name;
        }).toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get normalParameterTypes() : core.DartList<any> {
        let types : core.DartList<any> = new core.DartList.literal<any>();
        this._forEachParameterType(ParameterKind.REQUIRED,(name : any,type : any) =>  {
            types.add(type);
        });
        return types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get optionalParameterNames() : core.DartList<string> {
        return this.baseParameters.where((parameter : any) =>  {
            return op(Op.EQUALS,parameter.parameterKind,ParameterKind.POSITIONAL);
        }).map((parameter : any) =>  {
            return parameter.name;
        }).toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get optionalParameterTypes() : core.DartList<any> {
        let types : core.DartList<any> = new core.DartList.literal<any>();
        this._forEachParameterType(ParameterKind.POSITIONAL,(name : any,type : any) =>  {
            types.add(type);
        });
        return types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        let baseParameters : core.DartList<any> = this.baseParameters;
        let parameterCount : number = baseParameters.length;
        if (parameterCount == 0) {
            return baseParameters;
        }
        let specializedParams = new core.DartList<any>(parameterCount);
        let parameterTypes = TypeParameterTypeImpl.getTypes(this.typeParameters);
        for(let i : number = 0; i < parameterCount; i++){
            let parameter = baseParameters[i];
            if (op(Op.EQUALS,((t)=>(!!t)?t.type:null)(parameter),null)) {
                specializedParams[i] = parameter;
                continue;
            }
            if (is(parameter, any)) {
                specializedParams[i] = new bare.createInstance(any,null,parameter,this);
                continue;
            }
            let baseType = parameter.type as TypeImpl;
            let type : TypeImpl;
            if (this.typeArguments.isEmpty || this.typeArguments.length != this.typeParameters.length) {
                type = baseType.pruned(this.newPrune);
            }else {
                type = baseType.substitute2(this.typeArguments,parameterTypes,this.newPrune);
            }
            specializedParams[i] = core.identical(type,baseType) ? parameter : new bare.createInstance(any,null,parameter,this,type);
        }
        return specializedParams;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        let baseReturnType : any = this.baseReturnType;
        if (op(Op.EQUALS,baseReturnType,null)) {
            return DynamicTypeImpl.instance;
        }
        if (this.typeArguments.length == 0 || this.typeArguments.length != this.typeParameters.length) {
            return (baseReturnType as TypeImpl).pruned(this.newPrune);
        }
        return (baseReturnType as TypeImpl).substitute2(this.typeArguments,TypeParameterTypeImpl.getTypes(this.typeParameters),this.newPrune);
    }
    get typeArguments() : core.DartList<any> {
        if (this._typeArguments == null) {
            if (this.typeParameters.isEmpty) {
                this._typeArguments = DartType.EMPTY_LIST;
            }else {
                this._typeArguments = new core.DartList.from(this.typeParameters.map((t : any) =>  {
                    return t.type;
                }),{
                    growable : false});
            }
        }
        return this._typeArguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeFormals() : core.DartList<any> {
        if (this._isInstantiated || op(Op.EQUALS,this.element,null)) {
            return TypeParameterElement.EMPTY_LIST;
        }
        let baseTypeFormals : core.DartList<any> = this.element.typeParameters;
        let formalCount : number = baseTypeFormals.length;
        if (formalCount == 0) {
            return TypeParameterElement.EMPTY_LIST;
        }
        return TypeParameterMember.from(baseTypeFormals,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        if (this._typeParameters == null) {
            this._typeParameters = new core.DartList.literal<any>();
            let e : any = this.element;
            while (e != null){
                if (is(e, any) && e.isStatic) {
                    e = e.enclosingElement;
                }
                e = e.enclosingElement;
                if (is(e, any)) {
                    this._typeParameters.addAll(e.typeParameters);
                }
            }
            if (this._isInstantiated) {
                let parametersToAdd : core.DartList<any> = ((t)=>(!!t)?t.typeParameters:null)(this.element);
                if (parametersToAdd != null) {
                    this._typeParameters.addAll(parametersToAdd);
                }
            }
        }
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (is(object, FunctionTypeImpl)) {
            if (this.typeFormals.length != object.typeFormals.length) {
                return false;
            }
            if (this.typeFormals.isNotEmpty) {
                let freshVariables : core.DartList<any> = FunctionTypeImpl.relateTypeFormals(this,object,(t : any,s : any) =>  {
                    return op(Op.EQUALS,t,s);
                });
                if (freshVariables == null) {
                    return false;
                }
                return op(Op.EQUALS,this.instantiate(freshVariables),object.instantiate(freshVariables));
            }
            return op(Op.EQUALS,this.returnType,object.returnType) && TypeImpl.equalArrays(this.normalParameterTypes,object.normalParameterTypes) && TypeImpl.equalArrays(this.optionalParameterTypes,object.optionalParameterTypes) && FunctionTypeImpl._equals(this.namedParameterTypes,object.namedParameterTypes) && TypeImpl.equalArrays(this.typeArguments,object.typeArguments);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer,visitedTypes : core.DartSet<TypeImpl>) : void {
        if (visitedTypes.add(this)) {
            if (this.typeFormals.isNotEmpty) {
                let freeVariables : core.DartSet<any> = new core.DartHashSet<any>();
                this._freeVariablesInFunctionType(this,freeVariables);
                let namesToAvoid : core.DartSet<string> = new core.DartHashSet<string>();
                for(let arg of freeVariables) {
                    if (is(arg, any)) {
                        namesToAvoid.add(arg.displayName);
                    }
                }
                let instantiateTypeArgs : core.DartList<any> = new core.DartList.literal<any>();
                let variables : core.DartList<any> = new core.DartList.literal<any>();
                buffer.write("<");
                for(let e of this.typeFormals) {
                    if (e != this.typeFormals[0]) {
                        buffer.write(",");
                    }
                    let name : string = e.name;
                    let counter : number = 0;
                    while (!namesToAvoid.add(name)){
                        let subscript : string = new core.DartString.fromCharCodes(new core.DartString(new core.DartInt(counter).toString()).codeUnits.map((n : any) =>  {
                            return n + 8272;
                        })).valueOf();
                        name = op(Op.PLUS,e.name,subscript);
                        counter++;
                    }
                    let t : TypeParameterTypeImpl = new TypeParameterTypeImpl(new bare.createInstance(any,null,name,-1));
                    t.appendTo(buffer,visitedTypes);
                    instantiateTypeArgs.add(t);
                    variables.add(e.type);
                    if (e.bound != null) {
                        buffer.write(" extends ");
                        let renamed : TypeImpl = e.bound.substitute2(instantiateTypeArgs,variables);
                        renamed.appendTo(buffer,visitedTypes);
                    }
                }
                buffer.write(">");
                this.instantiate(instantiateTypeArgs).appendTo(buffer,visitedTypes);
                return;
            }
            let normalParameterTypes : core.DartList<any> = this.normalParameterTypes;
            let optionalParameterTypes : core.DartList<any> = this.optionalParameterTypes;
            let namedParameterTypes : core.DartMap<string,any> = this.namedParameterTypes;
            let returnType : any = this.returnType;
            let needsComma : boolean = false;
            var writeSeparator : () => void = () : void =>  {
                if (needsComma) {
                    buffer.write(", ");
                }else {
                    needsComma = true;
                }
            };
            var startOptionalParameters : () => void = () : void =>  {
                if (needsComma) {
                    buffer.write(", ");
                    needsComma = false;
                }
            };
            buffer.write("(");
            if (normalParameterTypes.isNotEmpty) {
                for(let type of normalParameterTypes) {
                    writeSeparator();
                    (type as TypeImpl).appendTo(buffer,visitedTypes);
                }
            }
            if (optionalParameterTypes.isNotEmpty) {
                startOptionalParameters();
                buffer.write("[");
                for(let type of optionalParameterTypes) {
                    writeSeparator();
                    (type as TypeImpl).appendTo(buffer,visitedTypes);
                }
                buffer.write("]");
                needsComma = true;
            }
            if (namedParameterTypes.isNotEmpty) {
                startOptionalParameters();
                buffer.write("{");
                namedParameterTypes.forEach((name : string,type : any) =>  {
                    writeSeparator();
                    buffer.write(name);
                    buffer.write(": ");
                    (type as TypeImpl).appendTo(buffer,visitedTypes);
                });
                buffer.write("}");
                needsComma = true;
            }
            buffer.write(")");
            buffer.write(ElementImpl.RIGHT_ARROW);
            if (op(Op.EQUALS,returnType,null)) {
                buffer.write("null");
            }else {
                (returnType as TypeImpl).appendTo(buffer,visitedTypes);
            }
            visitedTypes.remove(this);
        }else {
            buffer.write('<recursive>');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    instantiate(argumentTypes : core.DartList<any>) : FunctionTypeImpl {
        if (argumentTypes.length != this.typeFormals.length) {
            throw new core.ArgumentError(`argumentTypes.length (${argumentTypes.length}) != ` + `typeFormals.length (${this.typeFormals.length})`);
        }
        if (argumentTypes.isEmpty) {
            return this;
        }
        let newTypeArgs : core.DartList<any> = new core.DartList.literal<any>();
        newTypeArgs.addAll(this.typeArguments);
        newTypeArgs.addAll(argumentTypes);
        return new FunctionTypeImpl._(this.element,this.name,this.prunedTypedefs,newTypeArgs,this._explicitTypeParameters,this._returnType,this._parameters,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAssignableTo(type : any) : boolean {
        return this.isSubtypeOf(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(type : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean {
        withDynamic = withDynamic || false;
        return FunctionTypeImpl.relate(this,type,(t : any,s : any,_ : any,__ : any) =>  {
            return (t as TypeImpl).isMoreSpecificThan(s,withDynamic);
        },new bare.createInstance(any,null,null).instantiateToBounds);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(type : any) : boolean {
        let typeSystem = new bare.createInstance(any,null,null);
        return FunctionTypeImpl.relate(typeSystem.instantiateToBounds(this),typeSystem.instantiateToBounds(type),(t : any,s : any,_ : any,__ : any) =>  {
            return t.isAssignableTo(s);
        },typeSystem.instantiateToBounds);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : FunctionTypeImpl {
        if (prune == null) {
            return this;
        }else if (prune.contains(this.element)) {
            return new CircularFunctionTypeImpl();
        }else {
            /* TODO (AssertStatementImpl) : assert (this.prunedTypedefs == null); */;
            let typeArgs : core.DartList<any> = this.typeArguments.map((t : any) =>  {
                return (t as TypeImpl).pruned(prune);
            }).toList({
                growable : false});
            return new FunctionTypeImpl._(this.element,this.name,prune,typeArgs,this._explicitTypeParameters,this._returnType,this._parameters,this._isInstantiated);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : any {
        /* TODO (AssertStatementImpl) : assert (this.prunedTypedefs == null); */;
        if (argumentTypes.length != parameterTypes.length) {
            throw new core.ArgumentError(`argumentTypes.length (${argumentTypes.length}) != parameterTypes.length (${parameterTypes.length})`);
        }
        let element : any = this.element;
        if (prune != null && prune.contains(element)) {
            return new CircularFunctionTypeImpl();
        }
        if (argumentTypes.length == 0) {
            return this.pruned(prune);
        }
        let typeArgs : core.DartList<any> = TypeImpl.substitute(this.typeArguments,argumentTypes,parameterTypes);
        return new FunctionTypeImpl._(element,this.name,prune,typeArgs,this._explicitTypeParameters,this._returnType,this._parameters,this._isInstantiated);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute3(argumentTypes : core.DartList<any>) : FunctionTypeImpl {
        return this.substitute2(argumentTypes,this.typeArguments);
    }
    _forEachParameterType(kind : any,callback : (name : string,type : any) => any) : void {
        let parameters : core.DartList<any> = this.baseParameters;
        if (parameters.isEmpty) {
            return;
        }
        let typeParameters : core.DartList<any> = TypeParameterTypeImpl.getTypes(this.typeParameters);
        let length : number = parameters.length;
        for(let i : number = 0; i < length; i++){
            let parameter : any = parameters[i];
            if (op(Op.EQUALS,parameter.parameterKind,kind)) {
                let type : TypeImpl = (parameter.type || DynamicTypeImpl.instance);
                if (this.typeArguments.length != 0 && this.typeArguments.length == typeParameters.length) {
                    type = type.substitute2(this.typeArguments,typeParameters,this.newPrune);
                }else {
                    type = type.pruned(this.newPrune);
                }
                callback(parameter.name,type);
            }
        }
    }
    _freeVariablesInFunctionType(type : any,free : core.DartSet<any>) : void {
        let typeArgs : core.DartList<any> = DartType.EMPTY_LIST;
        if (type.typeFormals.isNotEmpty) {
            typeArgs = new core.DartList.from(type.typeFormals.map((e : any) =>  {
                return new TypeParameterTypeImpl(new bare.createInstance(any,null,e.name,-1));
            }));
            type = type.instantiate(typeArgs);
        }
        for(let p of type.parameters) {
            this._freeVariablesInType(p.type,free);
        }
        this._freeVariablesInType(type.returnType,free);
        free.removeAll(typeArgs);
    }
    _freeVariablesInInterfaceType(type : any,free : core.DartSet<any>) : void {
        for(let typeArg of type.typeArguments) {
            this._freeVariablesInType(typeArg,free);
        }
    }
    _freeVariablesInType(type : any,free : core.DartSet<any>) : void {
        if (is(type, any)) {
            free.add(type);
        }else if (is(type, any)) {
            this._freeVariablesInFunctionType(type,free);
        }else if (is(type, any)) {
            this._freeVariablesInInterfaceType(type,free);
        }
    }
    static recoverTypeArguments(g : any,f : any) : core.DartIterable<any> {
        /* TODO (AssertStatementImpl) : assert (identical(g.element, f.element)); */;
        if (g.typeFormals.isEmpty) {
            /* TODO (AssertStatementImpl) : assert (g == f); */;
            return DartType.EMPTY_LIST;
        }
        /* TODO (AssertStatementImpl) : assert (f.typeFormals.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (g.typeFormals.length + g.typeArguments.length == f.typeArguments.length); */;
        return f.typeArguments.skip(g.typeArguments.length);
    }
    static relate(t : any,other : any,parameterRelation : (t : any,s : any,tIsCovariant : boolean,sIsCovariant : boolean) => boolean,instantiateToBounds : (t : any) => any,_namedArguments? : {returnRelation? : (t : any,s : any) => boolean}) : boolean {
        let {returnRelation} = Object.assign({
        }, _namedArguments );
        returnRelation = ( returnRelation ) || ( (t : any,s : any) =>  {
            return parameterRelation(t,s,false,false);
        } );
        if (op(Op.EQUALS,other,null)) {
            return false;
        }else if (core.identical(t,other) || other.isDynamic || other.isDartCoreFunction || other.isObject) {
            return true;
        }else if (isNot(other, any)) {
            return false;
        }
        let s : any = other as any;
        if (t.typeFormals.isNotEmpty) {
            let freshVariables : core.DartList<any> = FunctionTypeImpl.relateTypeFormals(t,s,returnRelation);
            if (freshVariables == null) {
                return false;
            }
            t = t.instantiate(freshVariables);
            s = s.instantiate(freshVariables);
        }else if (s.typeFormals.isNotEmpty) {
            return false;
        }
        let sRetType : any = s.returnType;
        if (!sRetType.isVoid && !returnRelation(t.returnType,sRetType)) {
            return false;
        }
        let tRequired = new core.DartList.literal<any>();
        let tOptional = new core.DartList.literal<any>();
        let tNamed = new core.DartMap.literal([
        ]);
        for(let p of t.parameters) {
            let kind = p.parameterKind;
            if (op(Op.EQUALS,kind,ParameterKind.REQUIRED)) {
                tRequired.add(p);
            }else if (op(Op.EQUALS,kind,ParameterKind.POSITIONAL)) {
                tOptional.add(p);
            }else {
                /* TODO (AssertStatementImpl) : assert (kind == ParameterKind.NAMED); */;
                tNamed.set(p.name,p);
            }
        }
        let sRequired = new core.DartList.literal<any>();
        let sOptional = new core.DartList.literal<any>();
        let sNamed = new core.DartMap.literal([
        ]);
        for(let p of s.parameters) {
            let kind = p.parameterKind;
            if (op(Op.EQUALS,kind,ParameterKind.REQUIRED)) {
                sRequired.add(p);
            }else if (op(Op.EQUALS,kind,ParameterKind.POSITIONAL)) {
                sOptional.add(p);
            }else {
                /* TODO (AssertStatementImpl) : assert (kind == ParameterKind.NAMED); */;
                sNamed.set(p.name,p);
            }
        }
        if (sOptional.isNotEmpty && tNamed.isNotEmpty || tOptional.isNotEmpty && sNamed.isNotEmpty) {
            return false;
        }
        if (tNamed.length < sNamed.length) {
            return false;
        }
        for(let key of sNamed.keys) {
            let tParam = tNamed.get(key);
            if (op(Op.EQUALS,tParam,null)) {
                return false;
            }
            let sParam = sNamed.get(key);
            if (!parameterRelation(tParam.type,sParam.type,tParam.isCovariant,sParam.isCovariant)) {
                return false;
            }
        }
        let tPositional = tRequired;
        let sPositional = sRequired;
        if (tOptional.isNotEmpty) {
            tPositional = ((_) : core.DartList<any> =>  {
                {
                    _.addAll(tOptional);
                    return _;
                }
            })(tPositional.toList());
        }
        if (sOptional.isNotEmpty) {
            sPositional = ((_) : core.DartList<any> =>  {
                {
                    _.addAll(sOptional);
                    return _;
                }
            })(sPositional.toList());
        }
        if (sRequired.length < tRequired.length) {
            return false;
        }
        if (tPositional.length < sPositional.length) {
            return false;
        }
        for(let i : number = 0; i < sPositional.length; i++){
            let tParam = tPositional[i];
            let sParam = sPositional[i];
            if (!parameterRelation(tParam.type,sParam.type,tParam.isCovariant,sParam.isCovariant)) {
                return false;
            }
        }
        return true;
    }
    static relateTypeFormals(f1 : any,f2 : any,relation : (t : any,s : any) => boolean) : core.DartList<any> {
        let params1 : core.DartList<any> = f1.typeFormals;
        let params2 : core.DartList<any> = f2.typeFormals;
        let count : number = params1.length;
        if (params2.length != count) {
            return null;
        }
        let variables1 : core.DartList<any> = new core.DartList.literal<any>();
        let variables2 : core.DartList<any> = new core.DartList.literal<any>();
        let variablesFresh : core.DartList<any> = new core.DartList.literal<any>();
        for(let i : number = 0; i < count; i++){
            let p1 : any = params1[i];
            let p2 : any = params2[i];
            let pFresh : any = new bare.createInstance(any,null,p2.name);
            let variable1 : any = p1.type;
            let variable2 : any = p2.type;
            let variableFresh : any = new TypeParameterTypeImpl(pFresh);
            variables1.add(variable1);
            variables2.add(variable2);
            variablesFresh.add(variableFresh);
            let bound1 : any = (p1.bound || DynamicTypeImpl.instance);
            let bound2 : any = (p2.bound || DynamicTypeImpl.instance);
            bound1 = bound1.substitute2(variablesFresh,variables1);
            bound2 = bound2.substitute2(variablesFresh,variables2);
            pFresh.bound = bound2;
            if (!relation(bound2,bound1)) {
                return null;
            }
        }
        return variablesFresh;
    }
    static _equals(firstTypes : core.DartMap<string,any>,secondTypes : core.DartMap<string,any>) : boolean {
        if (secondTypes.length != firstTypes.length) {
            return false;
        }
        let firstKeys : core.DartIterator<string> = firstTypes.keys.iterator;
        let secondKeys : core.DartIterator<string> = secondTypes.keys.iterator;
        while (firstKeys.moveNext() && secondKeys.moveNext()){
            let firstKey : string = firstKeys.current;
            let secondKey : string = secondKeys.current;
            let firstType : TypeImpl = firstTypes.get(firstKey);
            let secondType : TypeImpl = secondTypes.get(secondKey);
            if (firstKey != secondKey || firstType != secondType) {
                return false;
            }
        }
        return true;
    }
}

export namespace InterfaceTypeImpl {
    export type Constructors = TypeImpl.Constructors | 'InterfaceTypeImpl' | 'elementWithNameAndArgs' | 'named' | '_';
    export type Interface = Omit<InterfaceTypeImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InterfaceTypeImpl extends TypeImpl implements any.Interface {
    _typeArguments : core.DartList<any>;

    _typeArgumentsComputer : () => core.DartList<any>;

    prunedTypedefs : core.DartList<any>;

    _versionOfCachedMembers : number;

    _constructors : core.DartList<any>;

    _accessors : core.DartList<any>;

    _methods : core.DartList<any>;

    constructor(element : any,prunedTypedefs? : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterfaceTypeImpl(element : any,prunedTypedefs? : core.DartList<any>) {
        this._typeArguments = DartType.EMPTY_LIST;
        this._versionOfCachedMembers = null;
        super.TypeImpl(element,element.displayName);
        this.prunedTypedefs = prunedTypedefs;
    }
    @namedConstructor
    elementWithNameAndArgs(element : any,name : string,_typeArgumentsComputer : () => core.DartList<any>) {
        this._typeArguments = DartType.EMPTY_LIST;
        this._versionOfCachedMembers = null;
        this.prunedTypedefs = null;
        super.TypeImpl(element,name);
        this._typeArgumentsComputer = _typeArgumentsComputer;
        this._typeArguments = null;
    }
    static elementWithNameAndArgs : new(element : any,name : string,_typeArgumentsComputer : () => core.DartList<any>) => InterfaceTypeImpl;

    @namedConstructor
    named(name : string) {
        this._typeArguments = DartType.EMPTY_LIST;
        this._versionOfCachedMembers = null;
        this.prunedTypedefs = null;
        super.TypeImpl(null,name);
    }
    static named : new(name : string) => InterfaceTypeImpl;

    @namedConstructor
    _(element : any,name : string,prunedTypedefs : core.DartList<any>) {
        this._typeArguments = DartType.EMPTY_LIST;
        this._versionOfCachedMembers = null;
        super.TypeImpl(element,name);
        this.prunedTypedefs = prunedTypedefs;
    }
    static _ : new(element : any,name : string,prunedTypedefs : core.DartList<any>) => InterfaceTypeImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get accessors() : core.DartList<any> {
        this._flushCachedMembersIfStale();
        if (this._accessors == null) {
            let accessors : core.DartList<any> = this.element.accessors;
            let members : core.DartList<any> = new core.DartList<any>(accessors.length);
            for(let i : number = 0; i < accessors.length; i++){
                members[i] = PropertyAccessorMember.from(accessors[i],this);
            }
            this._accessors = members;
        }
        return this._accessors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructors() : core.DartList<any> {
        this._flushCachedMembersIfStale();
        if (this._constructors == null) {
            let constructors : core.DartList<any> = this.element.constructors;
            let members : core.DartList<any> = new core.DartList<any>(constructors.length);
            for(let i : number = 0; i < constructors.length; i++){
                members[i] = ConstructorMember.from(constructors[i],this);
            }
            this._constructors = members;
        }
        return this._constructors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        let name : string = this.name;
        let typeArguments : core.DartList<any> = this.typeArguments;
        var areAllTypeArgumentsDynamic : () => boolean = () : boolean =>  {
            for(let type of typeArguments) {
                if (type != null && !type.isDynamic) {
                    return false;
                }
            }
            return true;
        };
        if (!areAllTypeArgumentsDynamic()) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write(name);
            buffer.write("<");
            for(let i : number = 0; i < typeArguments.length; i++){
                if (i != 0) {
                    buffer.write(", ");
                }
                let typeArg : any = typeArguments[i];
                buffer.write(typeArg.displayName);
            }
            buffer.write(">");
            name = buffer.toString();
        }
        return name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return super.element as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let element : any = this.element;
        if (op(Op.EQUALS,element,null)) {
            return 0;
        }
        return element.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : core.DartList<any> {
        let classElement : any = this.element;
        let interfaces : core.DartList<any> = classElement.interfaces;
        let typeParameters : core.DartList<any> = classElement.typeParameters;
        let parameterTypes : core.DartList<any> = classElement.type.typeArguments;
        if (typeParameters.length == 0) {
            return interfaces;
        }
        let count : number = interfaces.length;
        let typedInterfaces : core.DartList<any> = new core.DartList<any>(count);
        for(let i : number = 0; i < count; i++){
            typedInterfaces[i] = interfaces[i].substitute2(this.typeArguments,parameterTypes);
        }
        return typedInterfaces;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartAsyncFuture() : boolean {
        let element : any = this.element;
        if (op(Op.EQUALS,element,null)) {
            return false;
        }
        return op(Op.EQUALS,element.name,"Future") && element.library.isDartAsync;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartAsyncFutureOr() : boolean {
        let element : any = this.element;
        if (op(Op.EQUALS,element,null)) {
            return false;
        }
        return op(Op.EQUALS,element.name,"FutureOr") && element.library.isDartAsync;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCoreFunction() : boolean {
        let element : any = this.element;
        if (op(Op.EQUALS,element,null)) {
            return false;
        }
        return op(Op.EQUALS,element.name,"Function") && element.library.isDartCore;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCoreNull() : boolean {
        let element : any = this.element;
        if (op(Op.EQUALS,element,null)) {
            return false;
        }
        return op(Op.EQUALS,element.name,"Null") && element.library.isDartCore;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isObject() : boolean {
        return op(Op.EQUALS,this.element.supertype,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methods() : core.DartList<any> {
        this._flushCachedMembersIfStale();
        if (this._methods == null) {
            let methods : core.DartList<any> = this.element.methods;
            let members : core.DartList<any> = new core.DartList<any>(methods.length);
            for(let i : number = 0; i < methods.length; i++){
                members[i] = MethodMember.from(methods[i],this);
            }
            this._methods = members;
        }
        return this._methods;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixins() : core.DartList<any> {
        let classElement : any = this.element;
        let mixins : core.DartList<any> = classElement.mixins;
        let typeParameters : core.DartList<any> = classElement.typeParameters;
        let parameterTypes : core.DartList<any> = classElement.type.typeArguments;
        if (typeParameters.length == 0) {
            return mixins;
        }
        let count : number = mixins.length;
        let typedMixins : core.DartList<any> = new core.DartList<any>(count);
        for(let i : number = 0; i < count; i++){
            typedMixins[i] = mixins[i].substitute2(this.typeArguments,parameterTypes);
        }
        return typedMixins;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get superclass() : any {
        let classElement : any = this.element;
        let supertype : any = classElement.supertype;
        if (op(Op.EQUALS,supertype,null)) {
            return null;
        }
        let typeParameters : core.DartList<any> = classElement.type.typeArguments;
        if (this.typeArguments.length == 0 || this.typeArguments.length != typeParameters.length) {
            return supertype;
        }
        return supertype.substitute2(this.typeArguments,typeParameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeArguments() : core.DartList<any> {
        if (this._typeArguments == null) {
            this._typeArguments = this._typeArgumentsComputer();
            this._typeArgumentsComputer = null;
        }
        return this._typeArguments;
    }
    set typeArguments(typeArguments : core.DartList<any>) {
        this._typeArguments = typeArguments;
        this._typeArgumentsComputer = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return this.element.typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (core.identical(object,this)) {
            return true;
        }
        if (is(object, InterfaceTypeImpl)) {
            return (op(Op.EQUALS,this.element,object.element)) && TypeImpl.equalArrays(this.typeArguments,object.typeArguments);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer,visitedTypes : core.DartSet<TypeImpl>) : void {
        if (visitedTypes.add(this)) {
            buffer.write(this.name);
            let argumentCount : number = this.typeArguments.length;
            if (argumentCount > 0) {
                buffer.write("<");
                for(let i : number = 0; i < argumentCount; i++){
                    if (i > 0) {
                        buffer.write(", ");
                    }
                    (this.typeArguments[i] as TypeImpl).appendTo(buffer,visitedTypes);
                }
                buffer.write(">");
            }
            visitedTypes.remove(this);
        }else {
            buffer.write('<recursive>');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    flattenFutures(typeSystem : any) : any {
        if (this.isDartAsyncFuture && this.typeArguments.isNotEmpty) {
            return this.typeArguments[0].flattenFutures(typeSystem);
        }
        let candidateTypes : core.DartList<any> = this._searchTypeHierarchyForFutureTypeParameters();
        let flattenResult : any = InterfaceTypeImpl.findMostSpecificType(candidateTypes,typeSystem);
        if (flattenResult != null) {
            return flattenResult;
        }
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getGetter(getterName : string) : any {
        return PropertyAccessorMember.from(this.element.getGetter(getterName),this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMethod(methodName : string) : any {
        return MethodMember.from(this.element.getMethod(methodName),this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSetter(setterName : string) : any {
        return PropertyAccessorMember.from(this.element.getSetter(setterName),this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    instantiate(argumentTypes : core.DartList<any>) : InterfaceTypeImpl {
        return this.substitute2(argumentTypes,this.typeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDirectSupertypeOf(type : any) : boolean {
        let i : any = this;
        let j : any = type;
        let jElement : any = j.element;
        let supertype : any = jElement.supertype;
        if (op(Op.EQUALS,supertype,null)) {
            return false;
        }
        let jArgs : core.DartList<any> = j.typeArguments;
        let jVars : core.DartList<any> = jElement.type.typeArguments;
        supertype = supertype.substitute2(jArgs,jVars);
        if (op(Op.EQUALS,supertype,i)) {
            return true;
        }
        for(let interfaceType of jElement.interfaces) {
            interfaceType = interfaceType.substitute2(jArgs,jVars);
            if (op(Op.EQUALS,interfaceType,i)) {
                return true;
            }
        }
        for(let mixinType of jElement.mixins) {
            mixinType = mixinType.substitute2(jArgs,jVars);
            if (op(Op.EQUALS,mixinType,i)) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(type : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean {
        withDynamic = withDynamic || false;
        if (this.isDartCoreNull && !type.isBottom) {
            return true;
        }
        if (type.isDynamic) {
            return true;
        }
        if (op(Op.EQUALS,this,type)) {
            return true;
        }
        if (is(type, any)) {
            if (type.isDirectSupertypeOf(this)) {
                return true;
            }
            let tElement : any = this.element;
            let sElement : any = type.element;
            if (op(Op.EQUALS,tElement,sElement)) {
                let tArguments : core.DartList<any> = this.typeArguments;
                let sArguments : core.DartList<any> = type.typeArguments;
                if (tArguments.length != sArguments.length) {
                    return false;
                }
                for(let i : number = 0; i < tArguments.length; i++){
                    if (!(tArguments[i] as TypeImpl).isMoreSpecificThan(sArguments[i],withDynamic)) {
                        return false;
                    }
                }
                return true;
            }
        }
        if (op(Op.EQUALS,this.element,null)) {
            return false;
        }
        if (op(Op.EQUALS,visitedElements,null)) {
            visitedElements = new core.DartHashSet<any>();
        }else if (visitedElements.contains(this.element)) {
            return false;
        }
        visitedElements.add(this.element);
        try {
            let supertype : InterfaceTypeImpl = this.superclass;
            if (supertype != null && supertype.isMoreSpecificThan(type,withDynamic,visitedElements)) {
                return true;
            }
            for(let interfaceType of this.interfaces) {
                if ((interfaceType as InterfaceTypeImpl).isMoreSpecificThan(type,withDynamic,visitedElements)) {
                    return true;
                }
            }
            for(let mixinType of this.mixins) {
                if ((mixinType as InterfaceTypeImpl).isMoreSpecificThan(type,withDynamic,visitedElements)) {
                    return true;
                }
            }
            let callMethod : any = this.getMethod('call');
            if (callMethod != null && !callMethod.isStatic) {
                let callType : FunctionTypeImpl = callMethod.type;
                if (callType.isMoreSpecificThan(type,withDynamic,visitedElements)) {
                    return true;
                }
            }
            return false;
        } finally {
            visitedElements.remove(this.element);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpConstructor(constructorName : string,library : any) : any {
        let constructorElement : any;
        if (constructorName == null) {
            constructorElement = this.element.unnamedConstructor;
        }else {
            constructorElement = this.element.getNamedConstructor(constructorName);
        }
        if (op(Op.EQUALS,constructorElement,null) || !constructorElement.isAccessibleIn(library)) {
            return null;
        }
        return ConstructorMember.from(constructorElement,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpGetter(getterName : string,library : any) : any {
        let element : any = this.getGetter(getterName);
        if (element != null && element.isAccessibleIn(library)) {
            return element;
        }
        return this.lookUpGetterInSuperclass(getterName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpGetterInSuperclass(getterName : string,library : any) : any {
        for(let mixin of this.mixins.reversed) {
            let element : any = mixin.getGetter(getterName);
            if (element != null && element.isAccessibleIn(library)) {
                return element;
            }
        }
        let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
        let supertype : any = this.superclass;
        let supertypeElement : any = ((t)=>(!!t)?t.element:null)(supertype);
        while (supertype != null && !visitedClasses.contains(supertypeElement)){
            visitedClasses.add(supertypeElement);
            let element : any = supertype.getGetter(getterName);
            if (element != null && element.isAccessibleIn(library)) {
                return element;
            }
            for(let mixin of supertype.mixins.reversed) {
                element = mixin.getGetter(getterName);
                if (element != null && element.isAccessibleIn(library)) {
                    return element;
                }
            }
            supertype = supertype.superclass;
            supertypeElement = ((t)=>(!!t)?t.element:null)(supertype);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedGetter(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any {
        let {library,thisType} = Object.assign({
            "thisType" : true}, _namedArguments );
        let result : any;
        if (thisType) {
            result = this.lookUpGetter(name,library);
        }else {
            result = this.lookUpGetterInSuperclass(name,library);
        }
        if (result != null) {
            return result;
        }
        return InterfaceTypeImpl._lookUpMemberInInterfaces(this,false,library,new core.DartHashSet<any>(),(t : any) =>  {
            return t.getGetter(name);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedGetterOrMethod(name : string,_namedArguments? : {library? : any}) : any {
        let {library} = Object.assign({
        }, _namedArguments );
        let result : any = (this.lookUpGetter(name,library) || this.lookUpMethod(name,library));
        if (result != null) {
            return result;
        }
        return InterfaceTypeImpl._lookUpMemberInInterfaces(this,false,library,new core.DartHashSet<any>(),(t : any) =>  {
            return (t.getGetter(name) || t.getMethod(name));
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedMethod(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any {
        let {library,thisType} = Object.assign({
            "thisType" : true}, _namedArguments );
        let result : any;
        if (thisType) {
            result = this.lookUpMethod(name,library);
        }else {
            result = this.lookUpMethodInSuperclass(name,library);
        }
        if (result != null) {
            return result;
        }
        return InterfaceTypeImpl._lookUpMemberInInterfaces(this,false,library,new core.DartHashSet<any>(),(t : any) =>  {
            return t.getMethod(name);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpInheritedSetter(name : string,_namedArguments? : {library? : any,thisType? : boolean}) : any {
        let {library,thisType} = Object.assign({
            "thisType" : true}, _namedArguments );
        let result : any;
        if (thisType) {
            result = this.lookUpSetter(name,library);
        }else {
            result = this.lookUpSetterInSuperclass(name,library);
        }
        if (result != null) {
            return result;
        }
        return InterfaceTypeImpl._lookUpMemberInInterfaces(this,false,library,new core.DartHashSet<any>(),(t : any) =>  {
            return t.getSetter(name);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpMethod(methodName : string,library : any) : any {
        let element : any = this.getMethod(methodName);
        if (element != null && element.isAccessibleIn(library)) {
            return element;
        }
        return this.lookUpMethodInSuperclass(methodName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpMethodInSuperclass(methodName : string,library : any) : any {
        for(let mixin of this.mixins.reversed) {
            let element : any = mixin.getMethod(methodName);
            if (element != null && element.isAccessibleIn(library)) {
                return element;
            }
        }
        let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
        let supertype : any = this.superclass;
        let supertypeElement : any = ((t)=>(!!t)?t.element:null)(supertype);
        while (supertype != null && !visitedClasses.contains(supertypeElement)){
            visitedClasses.add(supertypeElement);
            let element : any = supertype.getMethod(methodName);
            if (element != null && element.isAccessibleIn(library)) {
                return element;
            }
            for(let mixin of supertype.mixins.reversed) {
                element = mixin.getMethod(methodName);
                if (element != null && element.isAccessibleIn(library)) {
                    return element;
                }
            }
            supertype = supertype.superclass;
            supertypeElement = ((t)=>(!!t)?t.element:null)(supertype);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpSetter(setterName : string,library : any) : any {
        let element : any = this.getSetter(setterName);
        if (element != null && element.isAccessibleIn(library)) {
            return element;
        }
        return this.lookUpSetterInSuperclass(setterName,library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookUpSetterInSuperclass(setterName : string,library : any) : any {
        for(let mixin of this.mixins.reversed) {
            let element : any = mixin.getSetter(setterName);
            if (element != null && element.isAccessibleIn(library)) {
                return element;
            }
        }
        let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
        let supertype : any = this.superclass;
        let supertypeElement : any = ((t)=>(!!t)?t.element:null)(supertype);
        while (supertype != null && !visitedClasses.contains(supertypeElement)){
            visitedClasses.add(supertypeElement);
            let element : any = supertype.getSetter(setterName);
            if (element != null && element.isAccessibleIn(library)) {
                return element;
            }
            for(let mixin of supertype.mixins.reversed) {
                element = mixin.getSetter(setterName);
                if (element != null && element.isAccessibleIn(library)) {
                    return element;
                }
            }
            supertype = supertype.superclass;
            supertypeElement = ((t)=>(!!t)?t.element:null)(supertype);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : InterfaceTypeImpl {
        if (prune == null) {
            return this;
        }else {
            /* TODO (AssertStatementImpl) : assert (this.prunedTypedefs == null); */;
            let result : InterfaceTypeImpl = new InterfaceTypeImpl._(this.element,this.name,prune);
            result.typeArguments = this.typeArguments.map((t : any) =>  {
                return (t as TypeImpl).pruned(prune);
            }).toList();
            return result;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : InterfaceTypeImpl {
        if (argumentTypes.length != parameterTypes.length) {
            throw new core.ArgumentError(`argumentTypes.length (${argumentTypes.length}) != parameterTypes.length (${parameterTypes.length})`);
        }
        if (argumentTypes.length == 0 || this.typeArguments.length == 0) {
            return this.pruned(prune);
        }
        let newTypeArguments : core.DartList<any> = TypeImpl.substitute(this.typeArguments,argumentTypes,parameterTypes,prune);
        if (listsEqual(newTypeArguments,this.typeArguments)) {
            return this;
        }
        if (this.isDartAsyncFuture && newTypeArguments.isNotEmpty) {
            if (this.element.library.context.analysisOptions.strongMode) {
                let t : TypeImpl = newTypeArguments[0];
                newTypeArguments[0] = t.flattenFutures(new bare.createInstance(any,null,null));
            }
        }
        let newType : InterfaceTypeImpl = new InterfaceTypeImpl(this.element,prune);
        newType.typeArguments = newTypeArguments;
        return newType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute4(argumentTypes : core.DartList<any>) : InterfaceTypeImpl {
        return this.instantiate(argumentTypes);
    }
    _flushCachedMembersIfStale() : void {
        let element : any = this.element;
        if (is(element, any)) {
            let currentVersion : number = element.version;
            if (this._versionOfCachedMembers != currentVersion) {
                this._constructors = null;
                this._accessors = null;
                this._methods = null;
            }
            this._versionOfCachedMembers = currentVersion;
        }
    }
    _searchTypeHierarchyForFutureTypeParameters() : core.DartList<any> {
        let result : core.DartList<any> = new core.DartList.literal<any>();
        let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
        var recurse : (type : InterfaceTypeImpl) => void = (type : InterfaceTypeImpl) : void =>  {
            if (type.isDartAsyncFuture && type.typeArguments.isNotEmpty) {
                result.add(type.typeArguments[0]);
            }
            if (visitedClasses.add(type.element)) {
                if (type.superclass != null) {
                    recurse(type.superclass);
                }
                for(let interface of type.interfaces) {
                    recurse(interface);
                }
                visitedClasses.remove(type.element);
            }
        };
        recurse(this);
        return result;
    }
    static computeLeastUpperBound(i : any,j : any) : any {
        let si : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(i);
        let sj : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(j);
        si.add(i);
        sj.add(j);
        let s : core.DartList<any> = InterfaceTypeImpl._intersection(si,sj);
        return InterfaceTypeImpl.computeTypeAtMaxUniqueDepth(s);
    }
    static computeLongestInheritancePathToObject(type : any) : number {
        return InterfaceTypeImpl._computeLongestInheritancePathToObject(type,0,new core.DartHashSet<any>());
    }
    static computeSuperinterfaceSet(type : any) : core.DartSet<any> {
        return InterfaceTypeImpl._computeSuperinterfaceSet(type,new core.DartHashSet<any>());
    }
    static computeTypeAtMaxUniqueDepth(types : core.DartList<any>) : any {
        let depths : core.DartList<number> = new core.DartList.filled(types.length,0);
        let maxDepth : number = 0;
        for(let n : number = 0; n < types.length; n++){
            depths[n] = InterfaceTypeImpl.computeLongestInheritancePathToObject(types[n]);
            if (depths[n] > maxDepth) {
                maxDepth = depths[n];
            }
        }
        for(; maxDepth >= 0; maxDepth--){
            let indexOfLeastUpperBound : number = -1;
            let numberOfTypesAtMaxDepth : number = 0;
            for(let m : number = 0; m < depths.length; m++){
                if (depths[m] == maxDepth) {
                    numberOfTypesAtMaxDepth++;
                    indexOfLeastUpperBound = m;
                }
            }
            if (numberOfTypesAtMaxDepth == 1) {
                return types[indexOfLeastUpperBound];
            }
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
    static findMostSpecificType(types : core.DartList<any>,typeSystem : any) : any {
        let bucket : core.DartList<any> = new core.DartList.literal<any>();
        for(let type of types) {
            if (bucket.any((t : any) =>  {
                return typeSystem.isMoreSpecificThan(t,type);
            })) {
                continue;
            }
            let added : boolean = false;
            let i : number = 0;
            while (i < bucket.length){
                if (typeSystem.isMoreSpecificThan(type,bucket[i])) {
                    if (added) {
                        if (i < bucket.length - 1) {
                            bucket[i] = bucket.removeLast();
                        }else {
                            bucket.removeLast();
                        }
                    }else {
                        bucket[i] = type;
                        i++;
                        added = true;
                    }
                }else {
                    i++;
                }
            }
            if (!added) {
                bucket.add(type);
            }
        }
        if (bucket.length == 1) {
            return bucket[0];
        }
        return null;
    }
    static getSmartLeastUpperBound(first : any,second : any) : any {
        if (op(Op.EQUALS,first.element,second.element)) {
            return InterfaceTypeImpl._leastUpperBound(first,second);
        }
        let context : any = first.element.context;
        return context.typeSystem.getLeastUpperBound(first,second);
    }
    static _computeLongestInheritancePathToObject(type : any,depth : number,visitedTypes : core.DartHashSet<any>) : number {
        let classElement : any = type.element;
        if (op(Op.EQUALS,classElement.supertype,null) || visitedTypes.contains(classElement)) {
            return depth;
        }
        let longestPath : number = 1;
        try {
            visitedTypes.add(classElement);
            let superinterfaces : core.DartList<any> = classElement.interfaces;
            let pathLength : number;
            if (superinterfaces.length > 0) {
                for(let superinterface of superinterfaces) {
                    pathLength = InterfaceTypeImpl._computeLongestInheritancePathToObject(superinterface,depth + 1,visitedTypes);
                    if (pathLength > longestPath) {
                        longestPath = pathLength;
                    }
                }
            }
            let supertype : any = classElement.supertype;
            pathLength = InterfaceTypeImpl._computeLongestInheritancePathToObject(supertype,depth + 1,visitedTypes);
            if (pathLength > longestPath) {
                longestPath = pathLength;
            }
        } finally {
            visitedTypes.remove(classElement);
        }
        return longestPath;
    }
    static _computeSuperinterfaceSet(type : any,set : core.DartHashSet<any>) : core.DartSet<any> {
        let element : any = type.element;
        if (element != null) {
            let superinterfaces : core.DartList<any> = type.interfaces;
            for(let superinterface of superinterfaces) {
                if (set.add(superinterface)) {
                    InterfaceTypeImpl._computeSuperinterfaceSet(superinterface,set);
                }
            }
            let supertype : any = type.superclass;
            if (supertype != null) {
                if (set.add(supertype)) {
                    InterfaceTypeImpl._computeSuperinterfaceSet(supertype,set);
                }
            }
        }
        return set;
    }
    static _intersection(first : core.DartSet<any>,second : core.DartSet<any>) : core.DartList<any> {
        let result : core.DartSet<any> = new core.DartHashSet.from(first);
        result.retainAll(second);
        return new core.DartList.from(result);
    }
    static _leastUpperBound(firstType : any,secondType : any) : any {
        let firstElement : any = firstType.element;
        let secondElement : any = secondType.element;
        if (firstElement != secondElement) {
            throw new core.ArgumentError('The same elements expected, but ' + `${firstElement} and ${secondElement} are given.`);
        }
        if (op(Op.EQUALS,firstType,secondType)) {
            return firstType;
        }
        let firstArguments : core.DartList<any> = firstType.typeArguments;
        let secondArguments : core.DartList<any> = secondType.typeArguments;
        let argumentCount : number = firstArguments.length;
        if (argumentCount == 0) {
            return firstType;
        }
        let lubArguments : core.DartList<any> = new core.DartList<any>(argumentCount);
        for(let i : number = 0; i < argumentCount; i++){
            if (op(Op.EQUALS,firstArguments[i],secondArguments[i])) {
                lubArguments[i] = firstArguments[i];
            }
            if (op(Op.EQUALS,lubArguments[i],null)) {
                lubArguments[i] = DynamicTypeImpl.instance;
            }
        }
        let lub : InterfaceTypeImpl = new InterfaceTypeImpl(firstElement);
        lub.typeArguments = lubArguments;
        return lub;
    }
    static _lookUpMemberInInterfaces(targetType : any,includeTargetType : boolean,library : any,visitedInterfaces : core.DartHashSet<any>,getMember : (type : any) => any) : any {
        let targetClass : any = targetType.element;
        if (!visitedInterfaces.add(targetClass)) {
            return null;
        }
        if (includeTargetType) {
            let member : any = getMember(targetType);
            if (member != null && member.isAccessibleIn(library)) {
                return member;
            }
        }
        for(let interfaceType of targetType.interfaces) {
            let member : any = InterfaceTypeImpl._lookUpMemberInInterfaces(interfaceType,true,library,visitedInterfaces,getMember);
            if (member != null) {
                return member;
            }
        }
        for(let mixinType of targetType.mixins.reversed) {
            let member : any = InterfaceTypeImpl._lookUpMemberInInterfaces(mixinType,true,library,visitedInterfaces,getMember);
            if (member != null) {
                return member;
            }
        }
        let superclass : any = targetType.superclass;
        if (op(Op.EQUALS,superclass,null)) {
            return null;
        }
        return InterfaceTypeImpl._lookUpMemberInInterfaces(superclass,true,library,visitedInterfaces,getMember);
    }
}

export namespace TypeParameterTypeImpl {
    export type Constructors = TypeImpl.Constructors | 'TypeParameterTypeImpl';
    export type Interface = Omit<TypeParameterTypeImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeParameterTypeImpl extends TypeImpl implements any.Interface {
    private static __$_comparingBounds : boolean;
    static get _comparingBounds() : boolean { 
        if (this.__$_comparingBounds===undefined) {
            this.__$_comparingBounds = false;
        }
        return this.__$_comparingBounds;
    }
    static set _comparingBounds(__$value : boolean)  { 
        this.__$_comparingBounds = __$value;
    }

    private static __$_appendingBounds : boolean;
    static get _appendingBounds() : boolean { 
        if (this.__$_appendingBounds===undefined) {
            this.__$_appendingBounds = false;
        }
        return this.__$_appendingBounds;
    }
    static set _appendingBounds(__$value : boolean)  { 
        this.__$_appendingBounds = __$value;
    }

    constructor(element : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterTypeImpl(element : any) {
        super.TypeImpl(element,element.name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bound() : any {
        return (this.element.bound || DynamicTypeImpl.instance);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get definition() : any {
        return this.element.location;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return super.element as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.element.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (is(other, TypeParameterTypeImpl) && op(Op.EQUALS,this.element,other.element)) {
            if (TypeParameterTypeImpl._comparingBounds) {
                return true;
            }
            TypeParameterTypeImpl._comparingBounds = true;
            try {
                return op(Op.EQUALS,this.bound,other.bound);
            } finally {
                TypeParameterTypeImpl._comparingBounds = false;
            }
        }
        return false;
    }
    appendTo(buffer : core.DartStringBuffer,visitedTypes : core.DartSet<TypeImpl>) : void {
        super.appendTo(buffer,visitedTypes);
        let e : any = this.element;
        if (is(e, any) && e.bound != e.baseElement.bound && !TypeParameterTypeImpl._appendingBounds) {
            buffer.write(' extends ');
            TypeParameterTypeImpl._appendingBounds = true;
            try {
                (e.bound as TypeImpl).appendTo(buffer,visitedTypes);
            } finally {
                TypeParameterTypeImpl._appendingBounds = false;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(s : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean {
        withDynamic = withDynamic || false;
        if (op(Op.EQUALS,this,s)) {
            return true;
        }
        if (s.isDynamic) {
            return true;
        }
        let bound : TypeImpl = this.element.bound;
        if (op(Op.EQUALS,s,bound)) {
            return true;
        }
        if (s.isObject) {
            return true;
        }
        if (op(Op.EQUALS,bound,null)) {
            return false;
        }
        if (op(Op.EQUALS,this.element,null)) {
            return false;
        }
        if (op(Op.EQUALS,visitedElements,null)) {
            visitedElements = new core.DartHashSet<any>();
        }else if (visitedElements.contains(this.element)) {
            return false;
        }
        visitedElements.add(this.element);
        try {
            return bound.isMoreSpecificThan(s,withDynamic,visitedElements);
        } finally {
            visitedElements.remove(this.element);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(type : any) : boolean {
        return this.isMoreSpecificThan(type,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : TypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveToBound(objectType : any) : any {
        if (op(Op.EQUALS,this.element.bound,null)) {
            return objectType;
        }
        return this.element.bound.resolveToBound(objectType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : any {
        let length : number = parameterTypes.length;
        for(let i : number = 0; i < length; i++){
            if (op(Op.EQUALS,parameterTypes[i],this)) {
                return argumentTypes[i];
            }
        }
        return this;
    }
    static getTypes(typeParameters : core.DartList<any>) : core.DartList<any> {
        let count : number = typeParameters.length;
        if (count == 0) {
            return TypeParameterType.EMPTY_LIST;
        }
        let types : core.DartList<any> = new core.DartList<any>(count);
        for(let i : number = 0; i < count; i++){
            types[i] = typeParameters[i].type;
        }
        return types;
    }
}

export namespace UndefinedTypeImpl {
    export type Constructors = TypeImpl.Constructors | '_';
    export type Interface = Omit<UndefinedTypeImpl, Constructors>;
}
@DartClass
export class UndefinedTypeImpl extends TypeImpl {
    private static __$instance : UndefinedTypeImpl;
    static get instance() : UndefinedTypeImpl { 
        if (this.__$instance===undefined) {
            this.__$instance = new UndefinedTypeImpl._();
        }
        return this.__$instance;
    }
    static set instance(__$value : UndefinedTypeImpl)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
        super.TypeImpl(DynamicElementImpl.instance,Keyword.DYNAMIC.lexeme);
    }
    static _ : new() => UndefinedTypeImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDynamic() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUndefined() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return core.identical(object,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(type : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean {
        withDynamic = withDynamic || false;
        if (core.identical(this,type)) {
            return true;
        }
        return withDynamic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(type : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSupertypeOf(type : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : TypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : any {
        let length : number = parameterTypes.length;
        for(let i : number = 0; i < length; i++){
            if (op(Op.EQUALS,parameterTypes[i],this)) {
                return argumentTypes[i];
            }
        }
        return this;
    }
}

export namespace VoidTypeImpl {
    export type Constructors = TypeImpl.Constructors | '_';
    export type Interface = Omit<VoidTypeImpl, Constructors>;
}
@DartClass
@Implements(VoidType)
export class VoidTypeImpl extends TypeImpl implements VoidType.Interface {
    private static __$instance : VoidTypeImpl;
    static get instance() : VoidTypeImpl { 
        if (this.__$instance===undefined) {
            this.__$instance = new VoidTypeImpl._();
        }
        return this.__$instance;
    }
    static set instance(__$value : VoidTypeImpl)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
        super.TypeImpl(null,Keyword.VOID.lexeme);
    }
    static _ : new() => VoidTypeImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 2;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVoid() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return core.identical(object,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(type : any,withDynamic? : boolean,visitedElements? : core.DartSet<any>) : boolean {
        withDynamic = withDynamic || false;
        return this.isSubtypeOf(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(type : any) : boolean {
        return core.identical(type,this) || type.isDynamic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : TypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : VoidTypeImpl {
        return this;
    }
}

export namespace CircularFunctionTypeImpl {
    export type Constructors = DynamicTypeImpl.Constructors | 'CircularFunctionTypeImpl';
    export type Interface = Omit<CircularFunctionTypeImpl, Constructors>;
}
@DartClass
@Implements(FunctionTypeImpl)
export class CircularFunctionTypeImpl extends DynamicTypeImpl implements FunctionTypeImpl.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CircularFunctionTypeImpl() {
        super._circular();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseParameters() : core.DartList<any> {
        return ParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get baseReturnType() : any {
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get boundTypeParameters() : core.DartList<any> {
        return TypeParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return super.element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInstantiated() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get namedParameterTypes() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get newPrune() : core.DartList<any> {
        return FunctionTypeAliasElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get normalParameterNames() : core.DartList<string> {
        return new core.DartList.literal<string>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get normalParameterTypes() : core.DartList<any> {
        return DartType.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get optionalParameterNames() : core.DartList<string> {
        return new core.DartList.literal<string>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get optionalParameterTypes() : core.DartList<any> {
        return DartType.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return ParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prunedTypedefs() : core.DartList<any> {
        return FunctionTypeAliasElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeArguments() : core.DartList<any> {
        return DartType.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeFormals() : core.DartList<any> {
        return TypeParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : core.DartList<any> {
        return TypeParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _explicitTypeParameters() : core.DartList<any> {
        return TypeParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _isInstantiated() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _parameters() : core.DartList<any> {
        return ParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _returnType() : any {
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _typeArguments() : core.DartList<any> {
        return DartType.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set _typeArguments(arguments : core.DartList<any>) {
        throw new core.UnsupportedError('Cannot have type arguments');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _typeParameters() : core.DartList<any> {
        return TypeParameterElement.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set _typeParameters(parameters : core.DartList<any>) {
        throw new core.UnsupportedError('Cannot have type parameters');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, CircularFunctionTypeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer,visitedTypes : core.DartSet<TypeImpl>) : void {
        buffer.write('...');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    instantiate(argumentTypes : core.DartList<any>) : FunctionTypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : FunctionTypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute2(argumentTypes : core.DartList<any>,parameterTypes : core.DartList<any>,prune? : core.DartList<any>) : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    substitute3(argumentTypes : core.DartList<any>) : FunctionTypeImpl {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _forEachParameterType(kind : any,callback : (name : string,type : any) => any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _freeVariablesInFunctionType(type : any,free : core.DartSet<any>) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _freeVariablesInInterfaceType(type : any,free : core.DartSet<any>) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _freeVariablesInType(type : any,free : core.DartSet<any>) : void {
    }
}

export namespace CircularTypeImpl {
    export type Constructors = DynamicTypeImpl.Constructors | 'CircularTypeImpl';
    export type Interface = Omit<CircularTypeImpl, Constructors>;
}
@DartClass
export class CircularTypeImpl extends DynamicTypeImpl {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CircularTypeImpl() {
        super._circular();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, CircularTypeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendTo(buffer : core.DartStringBuffer,visitedTypes : core.DartSet<TypeImpl>) : void {
        buffer.write('...');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pruned(prune : core.DartList<any>) : TypeImpl {
        return this;
    }
}

export namespace DeferredFunctionTypeImpl {
    export type Constructors = FunctionTypeImpl.Constructors | 'DeferredFunctionTypeImpl';
    export type Interface = Omit<DeferredFunctionTypeImpl, Constructors>;
}
@DartClass
export class DeferredFunctionTypeImpl extends FunctionTypeImpl {
    _computeElement : () => any;

    _computedElement : any;

    constructor(_computeElement : () => any,name : string,typeArguments : core.DartList<any>,isInstantiated : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeferredFunctionTypeImpl(_computeElement : () => any,name : string,typeArguments : core.DartList<any>,isInstantiated : boolean) {
        super._(null,name,null,typeArguments,null,null,null,isInstantiated);
        this._computeElement = _computeElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        if (this._computeElement != null) {
            this._computedElement = this._computeElement();
            this._computeElement = null;
        }
        return this._computedElement;
    }
}

export class properties {
}
