/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/type_system.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as collection from "@dart2ts/dart/core";

export var _isBottom : (t : any,_namedArguments? : {dynamicIsBottom? : boolean}) => boolean = (t : any,_namedArguments? : {dynamicIsBottom? : boolean}) : boolean =>  {
    let {dynamicIsBottom} = Object.assign({
        "dynamicIsBottom" : false}, _namedArguments );
    return (t.isDynamic && dynamicIsBottom) || t.isBottom || t.isDartCoreNull || core.identical(t,UnknownInferredType.instance);
};
export var _isTop : (t : any,_namedArguments? : {dynamicIsBottom? : boolean}) => boolean = (t : any,_namedArguments? : {dynamicIsBottom? : boolean}) : boolean =>  {
    let {dynamicIsBottom} = Object.assign({
        "dynamicIsBottom" : false}, _namedArguments );
    if (t.isDartAsyncFutureOr) {
        return _isTop(op(Op.INDEX,(t as any).typeArguments,0));
    }
    return (t.isDynamic && !dynamicIsBottom) || t.isObject || core.identical(t,UnknownInferredType.instance);
};
export namespace TypeSystem {
    export type Constructors = 'TypeSystem';
    export type Interface = Omit<TypeSystem, Constructors>;
}
@DartClass
export class TypeSystem {
    @AbstractProperty
    get isStrong() : boolean{ throw 'abstract'}
    @AbstractProperty
    get typeProvider() : any{ throw 'abstract'}
    @Abstract
    functionTypeToConcreteType(t : any) : any{ throw 'abstract'}
    getLeastUpperBound(type1 : any,type2 : any,_namedArguments? : {dynamicIsBottom? : boolean}) : any {
        let {dynamicIsBottom} = Object.assign({
            "dynamicIsBottom" : false}, _namedArguments );
        if (core.identical(type1,type2)) {
            return type1;
        }
        if (core.identical(type1,UnknownInferredType.instance)) {
            return type2;
        }
        if (core.identical(type2,UnknownInferredType.instance)) {
            return type1;
        }
        if (_isTop(type1,{
            dynamicIsBottom : dynamicIsBottom}) || _isBottom(type2,{
            dynamicIsBottom : dynamicIsBottom})) {
            return type1;
        }
        if (_isTop(type2,{
            dynamicIsBottom : dynamicIsBottom}) || _isBottom(type1,{
            dynamicIsBottom : dynamicIsBottom})) {
            return type2;
        }
        if (type1.isVoid) {
            return type1;
        }
        if (type2.isVoid) {
            return type2;
        }
        if (is(type1, any) || is(type2, any)) {
            return this._typeParameterLeastUpperBound(type1,type2);
        }
        if (is(type1, any) && is(type2, any)) {
            type1 = this.typeProvider.functionType;
        }
        if (is(type2, any) && is(type1, any)) {
            type2 = this.typeProvider.functionType;
        }
        if (is(type1, any) && is(type2, any)) {
            return this._interfaceLeastUpperBound(type1,type2);
        }
        if (is(type1, any) && is(type2, any)) {
            return this._functionLeastUpperBound(type1,type2);
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return this.typeProvider.dynamicType;
    }
    @Abstract
    instantiateToBounds(type : any,_namedArguments? : {hasError? : core.DartList<boolean>}) : any{ throw 'abstract'}
    instantiateType(type : any,typeArguments : core.DartList<any>) : any {
        if (is(type, any)) {
            return type.instantiate(typeArguments);
        }else {
            return type;
        }
    }
    @Abstract
    isAssignableTo(leftType : any,rightType : any) : boolean{ throw 'abstract'}
    @Abstract
    isMoreSpecificThan(leftType : any,rightType : any) : boolean{ throw 'abstract'}
    @Abstract
    isSubtypeOf(leftType : any,rightType : any) : boolean{ throw 'abstract'}
    mostSpecificTypeArgument(type : any,genericType : any) : any {
        if (isNot(type, any)) return null;
        let candidates : core.DartList<any> = new core.DartList.literal<any>();
        let visitedClasses : core.DartHashSet<any> = new core.DartHashSet<any>();
        var recurse : (interface : any) => void = (interface : any) : void =>  {
            if (op(Op.EQUALS,interface.element,genericType.element) && interface.typeArguments.isNotEmpty) {
                candidates.add(op(Op.INDEX,interface.typeArguments,0));
            }
            if (visitedClasses.add(interface.element)) {
                if (interface.superclass != null) {
                    recurse(interface.superclass);
                }
                interface.mixins.forEach(recurse);
                interface.interfaces.forEach(recurse);
                visitedClasses.remove(interface.element);
            }
        };
        recurse(type);
        return InterfaceTypeImpl.findMostSpecificType(candidates,this);
    }
    refineBinaryExpressionType(leftType : any,operator : any,rightType : any,currentType : any) : any {
        if (op(Op.EQUALS,operator,TokenType.AMPERSAND_AMPERSAND) || op(Op.EQUALS,operator,TokenType.BAR_BAR) || op(Op.EQUALS,operator,TokenType.EQ_EQ) || op(Op.EQUALS,operator,TokenType.BANG_EQ)) {
            return this.typeProvider.boolType;
        }
        let intType : any = this.typeProvider.intType;
        if (op(Op.EQUALS,leftType,intType)) {
            if (op(Op.EQUALS,operator,TokenType.MINUS) || op(Op.EQUALS,operator,TokenType.PERCENT) || op(Op.EQUALS,operator,TokenType.PLUS) || op(Op.EQUALS,operator,TokenType.STAR) || op(Op.EQUALS,operator,TokenType.MINUS_EQ) || op(Op.EQUALS,operator,TokenType.PERCENT_EQ) || op(Op.EQUALS,operator,TokenType.PLUS_EQ) || op(Op.EQUALS,operator,TokenType.STAR_EQ)) {
                let doubleType : any = this.typeProvider.doubleType;
                if (op(Op.EQUALS,rightType,doubleType)) {
                    return doubleType;
                }
            }
            if (op(Op.EQUALS,operator,TokenType.MINUS) || op(Op.EQUALS,operator,TokenType.PERCENT) || op(Op.EQUALS,operator,TokenType.PLUS) || op(Op.EQUALS,operator,TokenType.STAR) || op(Op.EQUALS,operator,TokenType.TILDE_SLASH) || op(Op.EQUALS,operator,TokenType.MINUS_EQ) || op(Op.EQUALS,operator,TokenType.PERCENT_EQ) || op(Op.EQUALS,operator,TokenType.PLUS_EQ) || op(Op.EQUALS,operator,TokenType.STAR_EQ) || op(Op.EQUALS,operator,TokenType.TILDE_SLASH_EQ)) {
                if (op(Op.EQUALS,rightType,intType)) {
                    return intType;
                }
            }
        }
        return currentType;
    }
    @Abstract
    tryPromoteToType(to : any,from : any) : any{ throw 'abstract'}
    typeFormalsAsElements(type : any) : core.DartList<any> {
        if (is(type, any)) {
            return type.typeFormals;
        }else if (is(type, any)) {
            return type.typeParameters;
        }else {
            return TypeParameterElement.EMPTY_LIST;
        }
    }
    typeFormalsAsTypes(type : any) : core.DartList<any> {
        return TypeParameterTypeImpl.getTypes(this.typeFormalsAsElements(type));
    }
    @Abstract
    typeToConcreteType(t : any) : any{ throw 'abstract'}
    _functionLeastUpperBound(f : any,g : any) : any {
        let fRequired : core.DartList<any> = f.normalParameterTypes;
        let gRequired : core.DartList<any> = g.normalParameterTypes;
        let fRequiredNames : core.DartList<string> = f.normalParameterNames;
        let fPositionalNames : core.DartList<string> = f.optionalParameterNames;
        if (fRequired.length != gRequired.length) {
            return this.typeProvider.functionType;
        }
        let parameters : core.DartList<any> = new core.DartList.literal();
        for(let i : number = 0; i < fRequired.length; i++){
            parameters.add(new bare.createInstance(any,null,fRequiredNames[i],this._functionParameterBound(fRequired[i],gRequired[i]),ParameterKind.REQUIRED));
        }
        let fPositional : core.DartList<any> = f.optionalParameterTypes;
        let gPositional : core.DartList<any> = g.optionalParameterTypes;
        let length : number = math.min(fPositional.length,gPositional.length);
        for(let i : number = 0; i < length; i++){
            parameters.add(new bare.createInstance(any,null,fPositionalNames[i],this._functionParameterBound(fPositional[i],gPositional[i]),ParameterKind.POSITIONAL));
        }
        let fNamed : core.DartMap<string,any> = f.namedParameterTypes;
        let gNamed : core.DartMap<string,any> = g.namedParameterTypes;
        for(let name of ((_) : core.DartSet<string> =>  {
            {
                _.retainAll(gNamed.keys);
                return _;
            }
        })(fNamed.keys.toSet())) {
            parameters.add(new bare.createInstance(any,null,name,this._functionParameterBound(fNamed.get(name),gNamed.get(name)),ParameterKind.NAMED));
        }
        let returnType : any = this.getLeastUpperBound(f.returnType,g.returnType);
        return new bare.createInstance(any,null,parameters,returnType).type;
    }
    _functionParameterBound(f : any,g : any) : any {
        return this.getLeastUpperBound(f,g);
    }
    @Abstract
    _interfaceLeastUpperBound(type1 : any,type2 : any) : any{ throw 'abstract'}
    @Abstract
    _typeParameterLeastUpperBound(type1 : any,type2 : any) : any{ throw 'abstract'}
    static create(context : any) : TypeSystem {
        let options = context.analysisOptions as any;
        return options.strongMode ? new StrongTypeSystemImpl(context.typeProvider,{
            implicitCasts : options.implicitCasts,nonnullableTypes : options.nonnullableTypes}) : new TypeSystemImpl(context.typeProvider);
    }
    constructor() {
    }
    @defaultConstructor
    TypeSystem() {
    }
}

export namespace UnknownInferredType {
    export type Constructors = '_';
    export type Interface = Omit<UnknownInferredType, Constructors>;
}
@DartClass
export class UnknownInferredType extends any {
    private static __$instance : UnknownInferredType;
    static get instance() : UnknownInferredType { 
        if (this.__$instance===undefined) {
            this.__$instance = new UnknownInferredType._();
        }
        return this.__$instance;
    }
    static set instance(__$value : UnknownInferredType)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
        super.DartObject(UnknownInferredTypeElement.instance,Keyword.DYNAMIC.lexeme);
    }
    static _ : new() => UnknownInferredType;

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
    appendTo(buffer : core.DartStringBuffer,types : core.DartSet<any>) : void {
        buffer.write('?');
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
    pruned(prune : core.DartList<any>) : any {
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
    static isKnown(type : any) : boolean {
        return !UnknownInferredType.isUnknown(type);
    }
    static isUnknown(type : any) : boolean {
        if (core.identical(type,UnknownInferredType.instance)) {
            return true;
        }
        if (is(type, any)) {
            return type.typeArguments.any(UnknownInferredType.isUnknown.bind(this));
        }
        if (is(type, any)) {
            return UnknownInferredType.isUnknown(type.returnType) || type.parameters.any((p : any) =>  {
                return UnknownInferredType.isUnknown(p.type);
            });
        }
        return false;
    }
}

export namespace UnknownInferredTypeElement {
    export type Constructors = '_';
    export type Interface = Omit<UnknownInferredTypeElement, Constructors>;
}
@DartClass
@Implements(any)
export class UnknownInferredTypeElement extends any implements any.Interface {
    private static __$instance : UnknownInferredTypeElement;
    static get instance() : UnknownInferredTypeElement { 
        if (this.__$instance===undefined) {
            this.__$instance = new UnknownInferredTypeElement._();
        }
        return this.__$instance;
    }
    static set instance(__$value : UnknownInferredTypeElement)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
        super.DartObject(Keyword.DYNAMIC.lexeme,-1);
        setModifier(Modifier.SYNTHETIC,true);
    }
    static _ : new() => UnknownInferredTypeElement;

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
    get type() : UnknownInferredType {
        return UnknownInferredType.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        return null;
    }
}

export namespace _GenericInferrer {
    export type Constructors = '_GenericInferrer';
    export type Interface = Omit<_GenericInferrer, Constructors>;
}
@DartClass
export class _GenericInferrer {
    _typeSystem : StrongTypeSystemImpl;

    typeProvider : any;

    _constraints : core.DartMap<any,core.DartList<_TypeConstraint>>;

    _constraintCount : number;

    constructor(typeProvider : any,_typeSystem : StrongTypeSystemImpl,typeFormals : core.DartIterable<any>) {
    }
    @defaultConstructor
    _GenericInferrer(typeProvider : any,_typeSystem : StrongTypeSystemImpl,typeFormals : core.DartIterable<any>) {
        this._constraintCount = 0;
        this._constraints = new core.DartHashMap<any,any>({
            equals : (x : any,y : any) =>  {
                return op(Op.EQUALS,x.location,y.location);
            },hashCode : (x : any) =>  {
                return x.location.hashCode;
            }});
        this.typeProvider = typeProvider;
        this._typeSystem = _typeSystem;
        for(let formal of typeFormals) {
            this._constraints.set(formal,new core.DartList.literal());
        }
    }
    constrainArgument(argumentType : any,parameterType : any,parameterName : string,_namedArguments? : {genericType? : any}) : void {
        let {genericType} = Object.assign({
        }, _namedArguments );
        let origin = new _TypeConstraintFromArgument(argumentType,parameterType,parameterName,{
            genericType : genericType});
        this._matchSubtypeOf(argumentType,parameterType,null,origin,{
            covariant : false});
    }
    constrainGenericFunctionInContext(fnType : any,contextType : any) : void {
        let origin = new _TypeConstraintFromFunctionContext(fnType,contextType);
        let inferFnType = fnType.instantiate(TypeParameterTypeImpl.getTypes(fnType.typeFormals));
        this._matchSubtypeOf(inferFnType,contextType,null,origin,{
            covariant : true});
    }
    constrainReturnType(declaredType : any,contextType : any) : void {
        let origin = new _TypeConstraintFromReturnType(declaredType,contextType);
        this._matchSubtypeOf(declaredType,contextType,null,origin,{
            covariant : true});
    }
    infer(genericType : any,typeFormals : core.DartList<any>,_namedArguments? : {errorReporter? : any,errorNode? : any,downwardsInferPhase? : boolean}) {
        let {errorReporter,errorNode,downwardsInferPhase} = Object.assign({
            "downwardsInferPhase" : false}, _namedArguments );
        let fnTypeParams = TypeParameterTypeImpl.getTypes(typeFormals);
        let inferredTypes = new core.DartList.filled(fnTypeParams.length,UnknownInferredType.instance);
        let _inferTypeParameter = downwardsInferPhase ? this._inferTypeParameterFromContext.bind(this) : this._inferTypeParameterFromAll.bind(this);
        for(let i : number = 0; i < fnTypeParams.length; i++){
            let typeParam : any = op(Op.INDEX,fnTypeParams,i);
            let typeParamBound = typeParam.bound;
            let extendsClause : _TypeConstraint;
            if (!typeParamBound.isDynamic) {
                extendsClause = new _TypeConstraint.fromExtends(typeParam,typeParam.bound.substitute2(inferredTypes,fnTypeParams));
            }
            let constraints = this._constraints.get(typeParam.element);
            inferredTypes[i] = _inferTypeParameter(constraints,extendsClause);
        }
        if (downwardsInferPhase) {
            return genericType.instantiate(inferredTypes) as any;
        }
        let knownTypes = new core.DartHashMap<any,any>({
            equals : (x : any,y : any) =>  {
                return op(Op.EQUALS,x.element,y.element);
            },hashCode : (x : any) =>  {
                return x.element.hashCode;
            }});
        for(let i : number = 0; i < fnTypeParams.length; i++){
            let typeParam : any = op(Op.INDEX,fnTypeParams,i);
            let constraints = this._constraints.get(typeParam.element);
            let typeParamBound = typeParam.bound.substitute2(inferredTypes,fnTypeParams);
            let inferred = inferredTypes[i];
            let success : boolean = constraints.every((c : any) =>  {
                return c.isSatisifedBy(this._typeSystem,inferred);
            });
            if (success && !typeParamBound.isDynamic) {
                let extendsConstraint = new _TypeConstraint.fromExtends(typeParam,typeParamBound);
                constraints.add(extendsConstraint);
                success = extendsConstraint.isSatisifedBy(this._typeSystem,inferred);
            }
            if (!success) {
                ((_343_)=>(!!_343_)?_343_.reportErrorForNode(StrongModeCode.COULD_NOT_INFER,errorNode,new core.DartList.literal(typeParam,this._formatError(typeParam,inferred,constraints))):null)(errorReporter);
            }
            if (UnknownInferredType.isKnown(inferred)) {
                op(Op.INDEX_ASSIGN,knownTypes,typeParam,inferred);
            }
        }
        let hasError = new core.DartList.filled(fnTypeParams.length,false);
        let result = this._typeSystem.instantiateToBounds(genericType,{
            hasError : hasError,knownTypes : knownTypes}) as any;
        for(let i : number = 0; i < hasError.length; i++){
            if (hasError[i]) {
                let typeParam : any = op(Op.INDEX,fnTypeParams,i);
                let typeParamBound = typeParam.bound.substitute2(inferredTypes,fnTypeParams);
                ((_344_)=>(!!_344_)?_344_.reportErrorForNode(StrongModeCode.COULD_NOT_INFER,errorNode,new core.DartList.literal(typeParam,`\nRecursive bound cannot be instantiated: '${typeParamBound}'.` + "\nConsider passing explicit type argument(s) " + "to the generic.\n\n'")):null)(errorReporter);
            }
        }
        return result;
    }
    _chooseTypeFromConstraints(constraints : core.DartIterable<_TypeConstraint>,_namedArguments? : {toKnownType? : boolean}) : any {
        let {toKnownType} = Object.assign({
            "toKnownType" : false}, _namedArguments );
        let lower : any = UnknownInferredType.instance;
        let upper : any = UnknownInferredType.instance;
        for(let constraint of constraints) {
            upper = this._getGreatestLowerBound(upper,constraint.upperBound);
            lower = this._typeSystem.getLeastUpperBound(lower,constraint.lowerBound);
        }
        if (UnknownInferredType.isKnown(lower)) {
            return lower;
        }
        if (UnknownInferredType.isKnown(upper)) {
            return upper;
        }
        if (!core.identical(UnknownInferredType.instance,lower)) {
            return toKnownType ? this._typeSystem.lowerBoundForType(lower) : lower;
        }
        if (!core.identical(UnknownInferredType.instance,upper)) {
            return toKnownType ? this._typeSystem.upperBoundForType(upper) : upper;
        }
        return lower;
    }
    _formatError(typeParam : any,inferred : any,constraints : core.DartIterable<_TypeConstraint>) : string {
        let intro = `Tried to infer '${inferred}' for '${typeParam}'` + " which doesn't work:";
        let constraintsByOrigin = new core.DartMap.literal([
        ]);
        for(let c of constraints) {
            constraintsByOrigin.putIfAbsent(c.origin,() =>  {
                return new core.DartList.literal();
            }).add(c);
        }
        var isSatisified : (expected : boolean) => core.DartIterable<_TypeConstraint> = (expected : boolean) : core.DartIterable<_TypeConstraint> =>  {
            return constraintsByOrigin.values.where((l : any) =>  {
                return l.every((c : any) =>  {
                    return c.isSatisifedBy(this._typeSystem,inferred);
                }) == expected;
            }).expand((i : any) =>  {
                return i;
            });
        };
        let unsatisified : string = _GenericInferrer._formatConstraints(isSatisified(false));
        let satisified : string = _GenericInferrer._formatConstraints(isSatisified(true));
        /* TODO (AssertStatementImpl) : assert (unsatisified.isNotEmpty); */;
        if (new core.DartString(satisified).isNotEmpty) {
            satisified = `\nThe type '${inferred}' was inferred from:\n${satisified}`;
        }
        return `\n\n${intro}\n${unsatisified}${satisified}\n\n` + 'Consider passing explicit type argument(s) to the generic.\n\n';
    }
    _getGreatestLowerBound(t1 : any,t2 : any) : any {
        let result = this._typeSystem.getGreatestLowerBound(t1,t2);
        if (result.isBottom) {
            if (is(t1, any) && t1.isDartAsyncFutureOr) {
                let t1TypeArg = op(Op.INDEX,t1.typeArguments,0);
                if (is(t2, any)) {
                    if (t2.isDartAsyncFutureOr) {
                        let t2TypeArg = op(Op.INDEX,t2.typeArguments,0);
                        return this.typeProvider.futureOrType.instantiate(new core.DartList.literal(this._getGreatestLowerBound(t1TypeArg,t2TypeArg)));
                    }
                    if (t2.isDartAsyncFuture) {
                        let t2TypeArg = op(Op.INDEX,t2.typeArguments,0);
                        return this.typeProvider.futureType.instantiate(new core.DartList.literal(this._getGreatestLowerBound(t1TypeArg,t2TypeArg)));
                    }
                }
                return this._getGreatestLowerBound(t1TypeArg,t2);
            }
            if (is(t2, any) && t2.isDartAsyncFutureOr) {
                return this._getGreatestLowerBound(t2,t1);
            }
            return this.typeProvider.nullType;
        }
        return result;
    }
    _inferTypeParameterFromAll(constraints : core.DartList<_TypeConstraint>,extendsClause : _TypeConstraint) : any {
        let t : any = this._inferTypeParameterFromContext(constraints.where((c : any) =>  {
            return c.isDownwards;
        }),extendsClause);
        if (UnknownInferredType.isKnown(t)) {
            constraints.removeWhere((c : any) =>  {
                return !c.isDownwards;
            });
            return t;
        }
        if (extendsClause != null) {
            constraints = ((_) : core.DartList<_TypeConstraint> =>  {
                {
                    _.add(extendsClause);
                    return _;
                }
            })(constraints.toList());
        }
        let choice = this._chooseTypeFromConstraints(constraints,{
            toKnownType : true});
        return choice;
    }
    _inferTypeParameterFromContext(constraints : core.DartIterable<_TypeConstraint>,extendsClause : _TypeConstraint) : any {
        let t : any = this._chooseTypeFromConstraints(constraints);
        if (UnknownInferredType.isUnknown(t)) {
            return t;
        }
        if (extendsClause != null) {
            constraints = ((_) : core.DartList<_TypeConstraint> =>  {
                {
                    _.add(extendsClause);
                    return _;
                }
            })(constraints.toList());
            return this._chooseTypeFromConstraints(constraints);
        }
        return t;
    }
    _matchInterfaceSubtypeOf(i1 : any,i2 : any,visited : core.DartSet<any>,origin : _TypeConstraintOrigin,_namedArguments? : {covariant? : boolean}) : void {
        let {covariant} = Object.assign({
        }, _namedArguments );
        if (core.identical(i1,i2)) {
            return;
        }
        if (op(Op.EQUALS,i1.element,i2.element)) {
            let tArgs1 : core.DartList<any> = i1.typeArguments;
            let tArgs2 : core.DartList<any> = i2.typeArguments;
            /* TODO (AssertStatementImpl) : assert (tArgs1.length == tArgs2.length); */;
            for(let i : number = 0; i < tArgs1.length; i++){
                this._matchSubtypeOf(tArgs1[i],tArgs2[i],visited,origin,{
                    covariant : covariant});
            }
            return;
        }
        if (i2.isDartCoreFunction && i1.element.getMethod("call") != null) {
            return;
        }
        if (i1.isObject) {
            return;
        }
        var guardedInterfaceSubtype : (t1 : any) => void = (t1 : any) : void =>  {
            let visitedSet = (visited || new core.DartHashSet<any>());
            if (visitedSet.add(t1.element)) {
                this._matchInterfaceSubtypeOf(t1,i2,visited,origin,{
                    covariant : covariant});
                visitedSet.remove(t1.element);
            }
        };
        guardedInterfaceSubtype(i1.superclass);
        for(let parent of i1.interfaces) {
            guardedInterfaceSubtype(parent);
        }
        for(let parent of i1.mixins) {
            guardedInterfaceSubtype(parent);
        }
    }
    _matchSubtypeOf(t1 : any,t2 : any,visited : core.DartSet<any>,origin : _TypeConstraintOrigin,_namedArguments? : {covariant? : boolean,dynamicIsBottom? : boolean}) : void {
        let {covariant,dynamicIsBottom} = Object.assign({
            "dynamicIsBottom" : false}, _namedArguments );
        if (covariant && is(t1, any)) {
            let constraints = this._constraints.get(t1.element);
            if (constraints != null) {
                if (!core.identical(t2,UnknownInferredType.instance)) {
                    constraints.add(new _TypeConstraint(origin,t1,{
                        upper : t2}));
                    this._constraintCount++;
                }
                return;
            }
        }
        if (!covariant && is(t2, any)) {
            let constraints = this._constraints.get(t2.element);
            if (constraints != null) {
                if (!core.identical(t1,UnknownInferredType.instance)) {
                    constraints.add(new _TypeConstraint(origin,t2,{
                        lower : t1}));
                    this._constraintCount++;
                }
                return;
            }
        }
        if (core.identical(t1,t2)) {
            return;
        }
        var matchSubtype : (t1 : any,t2 : any) => void = (t1 : any,t2 : any) : void =>  {
            this._matchSubtypeOf(t1,t2,null,origin,{
                covariant : covariant});
        };
        if (is(t1, any) && t1.isDartAsyncFutureOr) {
            let t1TypeArg = op(Op.INDEX,t1.typeArguments,0);
            if (is(t2, any) && t2.isDartAsyncFutureOr) {
                let t2TypeArg = op(Op.INDEX,t2.typeArguments,0);
                matchSubtype(t1TypeArg,t2TypeArg);
                return;
            }
            let t1Future = this.typeProvider.futureType.instantiate(new core.DartList.literal(t1TypeArg));
            matchSubtype(t1Future,t2);
            matchSubtype(t1TypeArg,t2);
            return;
        }
        if (is(t2, any) && t2.isDartAsyncFutureOr) {
            let t2TypeArg = op(Op.INDEX,t2.typeArguments,0);
            let t2Future = this.typeProvider.futureType.instantiate(new core.DartList.literal(t2TypeArg));
            let constraintCount : number = this._constraintCount;
            matchSubtype(t1,t2Future);
            if (constraintCount == this._constraintCount) {
                matchSubtype(t1,t2TypeArg);
            }
            return;
        }
        if (is(t1, any)) {
            var guardedSubtype : (t1 : any,t2 : any) => void = (t1 : any,t2 : any) : void =>  {
                let visitedSet = (visited || new core.DartHashSet<any>());
                if (visitedSet.add(t1.element)) {
                    matchSubtype(t1,t2);
                    visitedSet.remove(t1.element);
                }
            };
            if (is(t2, any) && op(Op.EQUALS,t1.definition,t2.definition)) {
                guardedSubtype(t1.bound,t2.bound);
                return;
            }
            guardedSubtype(t1.bound,t2);
            return;
        }
        if (is(t2, any)) {
            return;
        }
        if (is(t1, any) && is(t2, any)) {
            this._matchInterfaceSubtypeOf(t1,t2,visited,origin,{
                covariant : covariant});
            return;
        }
        if (is(t1, any)) {
            t1 = this._typeSystem.getCallMethodDefiniteType(t1);
            if (op(Op.EQUALS,t1,null)) return;
        }
        if (is(t1, any) && is(t2, any)) {
            FunctionTypeImpl.relate(t1,t2,(t1 : any,t2 : any,_ : any,__ : any) =>  {
                this._matchSubtypeOf(t2,t1,null,origin,{
                    covariant : !covariant,dynamicIsBottom : true});
                return true;
            },this._typeSystem.instantiateToBounds.bind(this._typeSystem),{
                returnRelation : (t1 : any,t2 : any) =>  {
                    matchSubtype(t1,t2);
                    return true;
                }});
        }
    }
    static _formatConstraints(constraints : core.DartIterable<_TypeConstraint>) : string {
        let lineParts : core.DartList<core.DartList<string>> = new core.DartSet.from(constraints.map((c : any) =>  {
            return c.origin;
        })).map((o : any) =>  {
            return o.formatError();
        }).toList();
        let prefixMax : number = lineParts.map((p : any) =>  {
            return new core.DartString(p[0]).length;
        }).fold(0,math.max);
        let messageLines = new core.DartSet.from(lineParts.map((parts : any) =>  {
            let prefix = parts[0];
            let middle = parts[1];
            let prefixPad = op(Op.TIMES,' ',(prefixMax - new core.DartString(prefix).length));
            let middlePad = op(Op.TIMES,' ',(prefixMax));
            let end = "";
            if (parts.length > 2) {
                end = `\n  ${middlePad} ${parts[2]}`;
            }
            return `  ${prefix}${prefixPad} ${middle}${end}`;
        }));
        return messageLines.join('\n');
    }
}

export namespace _TypeConstraintOrigin {
    export type Constructors = '_TypeConstraintOrigin';
    export type Interface = Omit<_TypeConstraintOrigin, Constructors>;
}
@DartClass
export class _TypeConstraintOrigin {
    @Abstract
    formatError() : core.DartList<string>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _TypeConstraintOrigin() {
    }
}

export namespace _TypeRange {
    export type Constructors = '_TypeRange';
    export type Interface = Omit<_TypeRange, Constructors>;
}
@DartClass
export class _TypeRange {
    upperBound : any;

    lowerBound : any;

    constructor(_namedArguments? : {lower? : any,upper? : any}) {
    }
    @defaultConstructor
    _TypeRange(_namedArguments? : {lower? : any,upper? : any}) {
        let {lower,upper} = Object.assign({
        }, _namedArguments );
        this.lowerBound = (lower || UnknownInferredType.instance);
        this.upperBound = (upper || UnknownInferredType.instance);
    }
}

export namespace StrongTypeSystemImpl {
    export type Constructors = TypeSystem.Constructors | 'StrongTypeSystemImpl';
    export type Interface = Omit<StrongTypeSystemImpl, Constructors>;
}
@DartClass
export class StrongTypeSystemImpl extends TypeSystem {
    private static __$_comparingTypeParameterBounds : boolean;
    static get _comparingTypeParameterBounds() : boolean { 
        if (this.__$_comparingTypeParameterBounds===undefined) {
            this.__$_comparingTypeParameterBounds = false;
        }
        return this.__$_comparingTypeParameterBounds;
    }
    static set _comparingTypeParameterBounds(__$value : boolean)  { 
        this.__$_comparingTypeParameterBounds = __$value;
    }

    implicitCasts : boolean;

    nonnullableTypes : core.DartList<string>;

    typeProvider : any;

    constructor(typeProvider : any,_namedArguments? : {implicitCasts? : boolean,nonnullableTypes? : core.DartList<string>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongTypeSystemImpl(typeProvider : any,_namedArguments? : {implicitCasts? : boolean,nonnullableTypes? : core.DartList<string>}) {
        let {implicitCasts,nonnullableTypes} = Object.assign({
            "implicitCasts" : true,
            "nonnullableTypes" : AnalysisOptionsImpl.NONNULLABLE_TYPES}, _namedArguments );
        this.typeProvider = typeProvider;
        this.implicitCasts = implicitCasts;
        this.nonnullableTypes = nonnullableTypes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStrong() : boolean {
        return true;
    }
    anyParameterType(ft : any,predicate : (t : any) => boolean) : boolean {
        return ft.parameters.any((p : any) =>  {
            return predicate(p.type);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionTypeToConcreteType(t : any) : any {
        if (!t.parameters.any((p : any) =>  {
            return p.type.isDynamic;
        })) {
            return t;
        }
        var shave : (p : any) => any = (p : any) : any =>  {
            if (p.type.isDynamic) {
                return new bare.createInstance(any,null,p.name,this.typeProvider.objectType,p.parameterKind);
            }
            return p;
        };
        let parameters : core.DartList<any> = t.parameters.map(shave).toList();
        let function : any = new bare.createInstance(any,null,"",-1);
        function.isSynthetic = true;
        function.returnType = t.returnType;
        function.shareTypeParameters(t.typeFormals);
        function.shareParameters(parameters);
        return function.type = new bare.createInstance(any,null,function);
    }
    getCallMethodDefiniteType(t : any) : any {
        let type = this.getCallMethodType(t);
        if (op(Op.EQUALS,type,null)) return type;
        return this.functionTypeToConcreteType(type);
    }
    getCallMethodType(t : any) : any {
        if (is(t, any)) {
            return ((t)=>(!!t)?t.type:null)(t.lookUpInheritedMethod("call"));
        }
        return null;
    }
    getGreatestLowerBound(type1 : any,type2 : any,_namedArguments? : {dynamicIsBottom? : any}) : any {
        let {dynamicIsBottom} = Object.assign({
            "dynamicIsBottom" : false}, _namedArguments );
        if (core.identical(type1,type2)) {
            return type1;
        }
        if (core.identical(type1,UnknownInferredType.instance)) {
            return type2;
        }
        if (core.identical(type2,UnknownInferredType.instance)) {
            return type1;
        }
        if (_isTop(type1,{
            dynamicIsBottom : dynamicIsBottom}) || _isBottom(type2,{
            dynamicIsBottom : dynamicIsBottom})) {
            return type2;
        }
        if (_isTop(type2,{
            dynamicIsBottom : dynamicIsBottom}) || _isBottom(type1,{
            dynamicIsBottom : dynamicIsBottom})) {
            return type1;
        }
        if (type1.isVoid) {
            return type2;
        }
        if (type2.isVoid) {
            return type1;
        }
        if (is(type1, any) && is(type2, any)) {
            return this._functionGreatestLowerBound(type1,type2);
        }
        if (this.isSubtypeOf(type1,type2)) {
            return type1;
        }
        if (this.isSubtypeOf(type2,type1)) {
            return type2;
        }
        return this.typeProvider.bottomType;
    }
    getLeastNullableSupertype(type : any) : any {
        let s : core.DartList<any> = InterfaceTypeImpl.computeSuperinterfaceSet(type).where(this.isNullableType.bind(this)).toList();
        return InterfaceTypeImpl.computeTypeAtMaxUniqueDepth(s);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLeastUpperBound(type1 : any,type2 : any,_namedArguments? : {dynamicIsBottom? : boolean}) : any {
        let {dynamicIsBottom} = Object.assign({
            "dynamicIsBottom" : false}, _namedArguments );
        if (this.isNullableType(type1) && this.isNonNullableType(type2)) {
            /* TODO (AssertStatementImpl) : assert (type2 is InterfaceType); */;
            type2 = this.getLeastNullableSupertype(type2 as any);
        }
        if (this.isNullableType(type2) && this.isNonNullableType(type1)) {
            /* TODO (AssertStatementImpl) : assert (type1 is InterfaceType); */;
            type1 = this.getLeastNullableSupertype(type1 as any);
        }
        return super.getLeastUpperBound(type1,type2,{
            dynamicIsBottom : dynamicIsBottom});
    }
    inferFunctionTypeInstantiation(contextType : any,fnType : any,_namedArguments? : {errorReporter? : any,errorNode? : any}) : any {
        let {errorReporter,errorNode} = Object.assign({
        }, _namedArguments );
        if (contextType.typeFormals.isNotEmpty || fnType.typeFormals.isEmpty) {
            return fnType;
        }
        let inferrer = new _GenericInferrer(this.typeProvider,this,fnType.typeFormals);
        inferrer.constrainGenericFunctionInContext(fnType,contextType);
        return inferrer.infer(fnType,fnType.typeFormals,{
            errorReporter : errorReporter,errorNode : errorNode});
    }
    inferGenericFunctionOrType(genericType : any,parameters : core.DartList<any>,argumentTypes : core.DartList<any>,returnContextType : any,_namedArguments? : {errorReporter? : any,errorNode? : any,downwards? : boolean}) {
        let {errorReporter,errorNode,downwards} = Object.assign({
            "downwards" : false}, _namedArguments );
        let typeFormals : core.DartList<any> = this.typeFormalsAsElements(genericType);
        if (typeFormals.isEmpty) {
            return genericType;
        }
        let inferrer = new _GenericInferrer(this.typeProvider,this,typeFormals);
        let declaredReturnType : any = is(genericType, any) ? genericType.returnType : genericType;
        if (returnContextType != null) {
            inferrer.constrainReturnType(declaredReturnType,returnContextType);
        }
        for(let i : number = 0; i < argumentTypes.length; i++){
            inferrer.constrainArgument(argumentTypes[i],parameters[i].type,parameters[i].name,{
                genericType : genericType});
        }
        return inferrer.infer(genericType,typeFormals,{
            errorReporter : errorReporter,errorNode : errorNode,downwardsInferPhase : downwards});
    }
    instantiateToBounds(type : any,_namedArguments? : {hasError? : core.DartList<boolean>,knownTypes? : core.DartMap<any,any>}) : any {
        let {hasError,knownTypes} = Object.assign({
        }, _namedArguments );
        let typeFormals : core.DartList<any> = this.typeFormalsAsElements(type);
        let count : number = typeFormals.length;
        if (count == 0) {
            return type;
        }
        let all : core.DartSet<any> = new core.DartSet<any>();
        let defaults : core.DartMap<any,any> = (knownTypes || new core.DartMap.literal([
        ]));
        let partials : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        for(let typeParameterElement of typeFormals) {
            let typeParameter : any = typeParameterElement.type;
            all.add(typeParameter);
            if (!defaults.containsKey(typeParameter)) {
                if (op(Op.EQUALS,typeParameter.bound,null)) {
                    defaults.set(typeParameter,DynamicTypeImpl.instance);
                }else {
                    partials.set(typeParameter,typeParameter.bound);
                }
            }
        }
        var getFreeParameters : (type : any) => core.DartList<any> = (type : any) : core.DartList<any> =>  {
            let parameters : core.DartList<any> = null;
            var appendParameters : (type : any) => void = (type : any) : void =>  {
                if (is(type, any) && all.contains(type)) {
                    parameters = ( parameters ) || ( new core.DartList.literal<any>() );
                    parameters.add(type);
                }else if (is(type, any)) {
                    type.typeArguments.forEach(appendParameters);
                }
            };
            appendParameters(type);
            return parameters;
        };
        let hasProgress : boolean = true;
        while (hasProgress){
            hasProgress = false;
            for(let parameter of partials.keys) {
                let value : any = partials.get(parameter);
                let freeParameters : core.DartList<any> = getFreeParameters(value);
                if (freeParameters == null) {
                    defaults.set(parameter,value);
                    partials.remove(parameter);
                    hasProgress = true;
                    break;
                }else if (freeParameters.every(defaults.containsKey.bind(defaults))) {
                    defaults.set(parameter,value.substitute2(defaults.values.toList(),defaults.keys.toList()));
                    partials.remove(parameter);
                    hasProgress = true;
                    break;
                }
            }
        }
        if (partials.isNotEmpty) {
            if (hasError != null) {
                hasError[0] = true;
            }
            let domain = defaults.keys.toList();
            let range = defaults.values.toList();
            for(let parameter of partials.keys) {
                domain.add(parameter);
                range.add(DynamicTypeImpl.instance);
            }
            for(let parameter of partials.keys) {
                defaults.set(parameter,partials.get(parameter).substitute2(range,domain));
            }
        }
        let orderedArguments : core.DartList<any> = typeFormals.map((p : any) =>  {
            return defaults.get(p.type);
        }).toList();
        return this.instantiateType(type,orderedArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAssignableTo(fromType : any,toType : any) : boolean {
        if (this.isSubtypeOf(fromType,toType)) {
            return true;
        }
        if (!this.implicitCasts) {
            return false;
        }
        if (is(fromType, any) && this.getCallMethodType(toType) != null) {
            return false;
        }
        if (is(fromType, any) && is(toType, any) && fromType.typeFormals.isEmpty && toType.typeFormals.isNotEmpty) {
            return false;
        }
        if (this.isSubtypeOf(toType,fromType)) {
            return true;
        }
        return false;
    }
    isGroundType(t : any) : boolean {
        if (is(t, any)) {
            return false;
        }
        if (_isTop(t)) {
            return true;
        }
        if (is(t, any)) {
            if (!_isTop(t.returnType) || this.anyParameterType(t,(pt : any) =>  {
                return !_isBottom(pt,{
                    dynamicIsBottom : true});
            })) {
                return false;
            }else {
                return true;
            }
        }
        if (is(t, any)) {
            let typeArguments : core.DartList<any> = t.typeArguments;
            for(let typeArgument of typeArguments) {
                if (!_isTop(typeArgument)) return false;
            }
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(t1 : any,t2 : any) : boolean {
        return this.isSubtypeOf(t1,t2);
    }
    isNonNullableType(type : any) : boolean {
        return !this.isNullableType(type);
    }
    isNullableType(type : any) : boolean {
        return is(type, any) || !this.nonnullableTypes.contains(this._getTypeFullyQualifiedName(type));
    }
    isOverrideSubtypeOf(f1 : any,f2 : any) : boolean {
        return FunctionTypeImpl.relate(f1,f2,(t1 : any,t2 : any,t1Covariant : any,_ : any) =>  {
            return this.isSubtypeOf(t2,t1) || t1Covariant && this.isSubtypeOf(t1,t2);
        },this.instantiateToBounds.bind(this),{
            returnRelation : this.isSubtypeOf.bind(this)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(leftType : any,rightType : any) : boolean {
        return this._isSubtypeOf(leftType,rightType,null);
    }
    lowerBoundForType(type : any) : any {
        return this._substituteForUnknownType(type,{
            lowerBound : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    refineBinaryExpressionType(leftType : any,operator : any,rightType : any,currentType : any) : any {
        if (is(leftType, any) && op(Op.EQUALS,leftType.element.bound,this.typeProvider.numType)) {
            if (op(Op.EQUALS,rightType,leftType) || op(Op.EQUALS,rightType,this.typeProvider.intType)) {
                if (op(Op.EQUALS,operator,TokenType.PLUS) || op(Op.EQUALS,operator,TokenType.MINUS) || op(Op.EQUALS,operator,TokenType.STAR) || op(Op.EQUALS,operator,TokenType.PLUS_EQ) || op(Op.EQUALS,operator,TokenType.MINUS_EQ) || op(Op.EQUALS,operator,TokenType.STAR_EQ)) {
                    return leftType;
                }
            }
            if (op(Op.EQUALS,rightType,this.typeProvider.doubleType)) {
                if (op(Op.EQUALS,operator,TokenType.PLUS) || op(Op.EQUALS,operator,TokenType.MINUS) || op(Op.EQUALS,operator,TokenType.STAR) || op(Op.EQUALS,operator,TokenType.SLASH)) {
                    return this.typeProvider.doubleType;
                }
            }
            return currentType;
        }
        return super.refineBinaryExpressionType(leftType,operator,rightType,currentType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tryPromoteToType(to : any,from : any) : any {
        if (this.isSubtypeOf(to,from)) {
            return to;
        }
        if (is(from, any)) {
            if (this.isSubtypeOf(to,from.resolveToBound(DynamicTypeImpl.instance))) {
                return new bare.createInstance(any,null,from.element,null,to).type;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeToConcreteType(t : any) : any {
        if (is(t, any)) {
            return this.functionTypeToConcreteType(t);
        }
        return t;
    }
    upperBoundForType(type : any) : any {
        return this._substituteForUnknownType(type);
    }
    _functionGreatestLowerBound(f : any,g : any) : any {
        let parameters : core.DartList<any> = new core.DartList.literal();
        let hasPositional : boolean = false;
        let hasNamed : boolean = false;
        var addParameter : (name : string,fType : any,gType : any,kind : any) => any = (name : string,fType : any,gType : any,kind : any) =>  {
            let paramType : any;
            if (fType != null && gType != null) {
                paramType = this.getLeastUpperBound(fType,gType,{
                    dynamicIsBottom : true});
            }else {
                paramType = (fType || gType);
            }
            parameters.add(new bare.createInstance(any,null,name,paramType,kind));
        };
        let fRequired : core.DartList<any> = f.normalParameterTypes;
        let gRequired : core.DartList<any> = g.normalParameterTypes;
        let fRequiredNames : core.DartList<string> = f.normalParameterNames;
        let gRequiredNames : core.DartList<string> = g.normalParameterNames;
        let requiredCount : number = math.min(fRequired.length,gRequired.length);
        for(let i : number = 0; i < requiredCount; i++){
            addParameter(fRequiredNames[i],fRequired[i],gRequired[i],ParameterKind.REQUIRED);
        }
        let fPositional : core.DartList<any> = f.optionalParameterTypes;
        let gPositional : core.DartList<any> = g.optionalParameterTypes;
        let fPositionalNames : core.DartList<string> = f.optionalParameterNames;
        let gPositionalNames : core.DartList<string> = g.optionalParameterNames;
        let totalPositional : number = math.max(fRequired.length + fPositional.length,gRequired.length + gPositional.length);
        for(let i : number = requiredCount; i < totalPositional; i++){
            let fType : any;
            let fName : string;
            if (i < fRequired.length) {
                fType = fRequired[i];
                fName = fRequiredNames[i];
            }else if (i < fRequired.length + fPositional.length) {
                fType = fPositional[i - fRequired.length];
                fName = fPositionalNames[i - fRequired.length];
            }
            let gType : any;
            let gName : string;
            if (i < gRequired.length) {
                gType = gRequired[i];
                gName = gRequiredNames[i];
            }else if (i < gRequired.length + gPositional.length) {
                gType = gPositional[i - gRequired.length];
                gName = gPositionalNames[i - gRequired.length];
            }
            /* TODO (AssertStatementImpl) : assert (fType != null || gType != null); */;
            addParameter((fName || gName),fType,gType,ParameterKind.POSITIONAL);
            hasPositional = true;
        }
        let fNamed : core.DartMap<string,any> = f.namedParameterTypes;
        let gNamed : core.DartMap<string,any> = g.namedParameterTypes;
        for(let name of ((_) : core.DartSet<string> =>  {
            {
                _.addAll(gNamed.keys);
                return _;
            }
        })(fNamed.keys.toSet())) {
            addParameter(name,fNamed.get(name),gNamed.get(name),ParameterKind.NAMED);
            hasNamed = true;
        }
        if (hasPositional && hasNamed) return this.typeProvider.bottomType;
        let returnType : any = this.getGreatestLowerBound(f.returnType,g.returnType);
        return new bare.createInstance(any,null,parameters,returnType).type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _functionParameterBound(f : any,g : any) : any {
        return this.getGreatestLowerBound(f,g,{
            dynamicIsBottom : true});
    }
    _getTypeFullyQualifiedName(type : any) : string {
        return `${((t)=>(!!t)?t.identifier:null)(((t)=>(!!t)?t.library:null)(((t)=>(!!t)?t.element:null)(type)))},${type}`;
    }
    _guard(check : <T>(t1 : any,t2 : any,visitedTypes : core.DartSet<any>) => boolean) : <T>(t1 : any,t2 : any,visitedTypes : core.DartSet<any>) => boolean {
        return (t1 : any,t2 : any,visitedTypes : core.DartSet<any>) =>  {
            if (op(Op.EQUALS,visitedTypes,null)) {
                visitedTypes = new core.DartHashSet<any>();
            }
            if (op(Op.EQUALS,t1,null) || !visitedTypes.add(t1)) {
                return false;
            }
            try {
                return check(t1,t2,visitedTypes);
            } finally {
                visitedTypes.remove(t1);
            }
        };
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _interfaceLeastUpperBound(type1 : any,type2 : any) : any {
        if (this.isSubtypeOf(type1,type2)) {
            return type2;
        }
        if (this.isSubtypeOf(type2,type1)) {
            return type1;
        }
        if (op(Op.EQUALS,type1.element,type2.element)) {
            let tArgs1 : core.DartList<any> = type1.typeArguments;
            let tArgs2 : core.DartList<any> = type2.typeArguments;
            /* TODO (AssertStatementImpl) : assert (tArgs1.length == tArgs2.length); */;
            let tArgs : core.DartList<any> = new core.DartList<any>(tArgs1.length);
            for(let i : number = 0; i < tArgs1.length; i++){
                tArgs[i] = this.getLeastUpperBound(tArgs1[i],tArgs2[i]);
            }
            let lub : any = new bare.createInstance(any,null,type1.element);
            lub.typeArguments = tArgs;
            return lub;
        }
        return (InterfaceTypeImpl.computeLeastUpperBound(type1,type2) || this.typeProvider.dynamicType);
    }
    _isFunctionSubtypeOf(f1 : any,f2 : any,visitedTypes : core.DartSet<any>) : boolean {
        return FunctionTypeImpl.relate(f1,f2,(t1 : any,t2 : any,_ : any,__ : any) =>  {
            return this._isSubtypeOf(t2,t1,visitedTypes,{
                dynamicIsBottom : true});
        },this.instantiateToBounds.bind(this),{
            returnRelation : this.isSubtypeOf.bind(this)});
    }
    _isInterfaceSubtypeOf(i1 : any,i2 : any,visitedTypes : core.DartSet<any>) : boolean {
        if (core.identical(i1,i2)) {
            return true;
        }
        let guardedInterfaceSubtype : <T>(t1 : any,t2 : any,visitedTypes : core.DartSet<any>) => boolean = this._guard((i1 : any,i2 : any,visitedTypes : core.DartSet<any>) =>  {
            return this._isInterfaceSubtypeOf(i1,i2,visitedTypes);
        });
        if (op(Op.EQUALS,i1.element,i2.element)) {
            let tArgs1 : core.DartList<any> = i1.typeArguments;
            let tArgs2 : core.DartList<any> = i2.typeArguments;
            /* TODO (AssertStatementImpl) : assert (tArgs1.length == tArgs2.length); */;
            for(let i : number = 0; i < tArgs1.length; i++){
                let t1 : any = tArgs1[i];
                let t2 : any = tArgs2[i];
                if (!this.isSubtypeOf(t1,t2)) {
                    return false;
                }
            }
            return true;
        }
        if (i2.isDartCoreFunction && i1.element.getMethod("call") != null) {
            return true;
        }
        if (i1.isObject) {
            return false;
        }
        if (guardedInterfaceSubtype(i1.superclass,i2,visitedTypes)) {
            return true;
        }
        for(let parent of i1.interfaces) {
            if (guardedInterfaceSubtype(parent,i2,visitedTypes)) {
                return true;
            }
        }
        for(let parent of i1.mixins) {
            if (guardedInterfaceSubtype(parent,i2,visitedTypes)) {
                return true;
            }
        }
        return false;
    }
    _isSubtypeOf(t1 : any,t2 : any,visitedTypes : core.DartSet<any>,_namedArguments? : {dynamicIsBottom? : boolean}) : boolean {
        let {dynamicIsBottom} = Object.assign({
            "dynamicIsBottom" : false}, _namedArguments );
        if (core.identical(t1,t2)) {
            return true;
        }
        if (_isTop(t2,{
            dynamicIsBottom : dynamicIsBottom}) || _isBottom(t1,{
            dynamicIsBottom : dynamicIsBottom})) {
            return true;
        }
        if (_isTop(t1,{
            dynamicIsBottom : dynamicIsBottom}) || _isBottom(t2,{
            dynamicIsBottom : dynamicIsBottom})) {
            return false;
        }
        if (is(t1, any) && t1.isDartAsyncFutureOr) {
            let t1TypeArg = op(Op.INDEX,t1.typeArguments,0);
            if (is(t2, any) && t2.isDartAsyncFutureOr) {
                let t2TypeArg = op(Op.INDEX,t2.typeArguments,0);
                return this.isSubtypeOf(t1TypeArg,t2TypeArg);
            }
            let t1Future = this.typeProvider.futureType.instantiate(new core.DartList.literal(t1TypeArg));
            return this.isSubtypeOf(t1Future,t2) && this.isSubtypeOf(t1TypeArg,t2);
        }
        if (is(t2, any) && t2.isDartAsyncFutureOr) {
            let t2TypeArg = op(Op.INDEX,t2.typeArguments,0);
            let t2Future = this.typeProvider.futureType.instantiate(new core.DartList.literal(t2TypeArg));
            return this.isSubtypeOf(t1,t2Future) || this.isSubtypeOf(t1,t2TypeArg);
        }
        if (is(t1, any)) {
            if (is(t2, any) && op(Op.EQUALS,t1.definition,t2.definition) && this._typeParameterBoundsSubtype(t1.bound,t2.bound,true)) {
                return true;
            }
            let bound : any = t1.element.bound;
            return op(Op.EQUALS,bound,null) ? false : this._typeParameterBoundsSubtype(bound,t2,false);
        }
        if (is(t2, any)) {
            return false;
        }
        if (t1.isVoid || t2.isVoid) {
            return t1.isVoid && t2.isVoid;
        }
        if (is(t1, any) && is(t2, any)) {
            return t2.isDartCoreFunction;
        }
        let guardedIsFunctionSubtype : <T>(t1 : any,t2 : any,visitedTypes : core.DartSet<any>) => boolean = this._guard((t1 : any,t2 : any,visitedTypes : core.DartSet<any>) =>  {
            return this._isFunctionSubtypeOf(t1 as any,t2 as any,visitedTypes);
        });
        if (is(t1, any) && is(t2, any)) {
            let callType = this.getCallMethodDefiniteType(t1);
            return callType != null && guardedIsFunctionSubtype(callType,t2,visitedTypes);
        }
        if (is(t1, any) && is(t2, any)) {
            return this._isInterfaceSubtypeOf(t1,t2,visitedTypes);
        }
        return guardedIsFunctionSubtype(t1,t2,visitedTypes);
    }
    _substituteForUnknownType(type : any,_namedArguments? : {lowerBound? : boolean,dynamicIsBottom? : any}) : any {
        let {lowerBound,dynamicIsBottom} = Object.assign({
            "lowerBound" : false,
            "dynamicIsBottom" : false}, _namedArguments );
        if (core.identical(type,UnknownInferredType.instance)) {
            if (lowerBound && !dynamicIsBottom) {
                return this.typeProvider.nullType;
            }
            return this.typeProvider.dynamicType;
        }
        if (is(type, any)) {
            let newTypeArgs = StrongTypeSystemImpl._transformList(type.typeArguments,(t : any) =>  {
                return this._substituteForUnknownType(t,{
                    lowerBound : lowerBound});
            });
            if (core.identical(type.typeArguments,newTypeArgs)) return type;
            return ((_) : any =>  {
                {
                    _.typeArguments = newTypeArgs;
                    return _;
                }
            })(new bare.createInstance(any,null,type.element,type.prunedTypedefs));
        }
        if (is(type, any)) {
            let parameters = type.parameters;
            let returnType = type.returnType;
            let newParameters = StrongTypeSystemImpl._transformList(parameters,(p : any) =>  {
                let newType = this._substituteForUnknownType(p.type,{
                    lowerBound : !lowerBound,dynamicIsBottom : true});
                return new bare.createInstance(any,null,p.name,newType,p.parameterKind);
            });
            let newReturnType = this._substituteForUnknownType(returnType,{
                lowerBound : lowerBound});
            if (core.identical(parameters,newParameters) && core.identical(returnType,newReturnType)) {
                return type;
            }
            let function = ((_) : any =>  {
                {
                    _.isSynthetic = true;
                    _.returnType = newReturnType;
                    shareTypeParameters(type.typeFormals);
                    _.parameters = newParameters;
                    return _;
                }
            })(new bare.createInstance(any,null,type.name,-1));
            return function.type = new bare.createInstance(any,null,function);
        }
        return type;
    }
    _typeParameterBoundsSubtype(t1 : any,t2 : any,recursionValue : boolean) : boolean {
        if (StrongTypeSystemImpl._comparingTypeParameterBounds) {
            return recursionValue;
        }
        StrongTypeSystemImpl._comparingTypeParameterBounds = true;
        try {
            return this.isSubtypeOf(t1,t2);
        } finally {
            StrongTypeSystemImpl._comparingTypeParameterBounds = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _typeParameterLeastUpperBound(type1 : any,type2 : any) : any {
        if (this.isSubtypeOf(type1,type2)) {
            return type2;
        }
        if (this.isSubtypeOf(type2,type1)) {
            return type1;
        }
        if (is(type1, any)) {
            type1 = type1.resolveToBound(this.typeProvider.objectType).substitute2(new core.DartList.literal(this.typeProvider.objectType),new core.DartList.literal(type1));
            return this.getLeastUpperBound(type1,type2);
        }
        type2 = type2.resolveToBound(this.typeProvider.objectType).substitute2(new core.DartList.literal(this.typeProvider.objectType),new core.DartList.literal(type2));
        return this.getLeastUpperBound(type1,type2);
    }
    static _transformList(list : core.DartList<any>,f : (t : any) => any) : core.DartList<any> {
        let newList : core.DartList<any> = null;
        for(let i = 0; i < list.length; i++){
            let item = list[i];
            let newItem = f(item);
            if (!core.identical(item,newItem)) {
                newList = ( newList ) || ( new core.DartList.from(list) );
                newList[i] = newItem;
            }
        }
        return (newList || list);
    }
}

export namespace TypeSystemImpl {
    export type Constructors = TypeSystem.Constructors | 'TypeSystemImpl';
    export type Interface = Omit<TypeSystemImpl, Constructors>;
}
@DartClass
export class TypeSystemImpl extends TypeSystem {
    typeProvider : any;

    constructor(typeProvider : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeSystemImpl(typeProvider : any) {
        this.typeProvider = typeProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStrong() : boolean {
        return false;
    }
    functionTypeToConcreteType(t : any) : any {
        return t;
    }
    instantiateToBounds(type : any,_namedArguments? : {hasError? : core.DartList<boolean>}) : any {
        let {hasError} = Object.assign({
        }, _namedArguments );
        let typeFormals : core.DartList<any> = this.typeFormalsAsTypes(type);
        let count : number = typeFormals.length;
        if (count > 0) {
            let typeArguments : core.DartList<any> = new core.DartList.filled(count,DynamicTypeImpl.instance);
            return this.instantiateType(type,typeArguments);
        }
        return type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isAssignableTo(leftType : any,rightType : any) : boolean {
        return leftType.isAssignableTo(rightType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isMoreSpecificThan(t1 : any,t2 : any) : boolean {
        return t1.isMoreSpecificThan(t2);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSubtypeOf(leftType : any,rightType : any) : boolean {
        return leftType.isSubtypeOf(rightType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tryPromoteToType(to : any,from : any) : any {
        if (!from.isDynamic && !to.isDynamic && to.isMoreSpecificThan(from)) {
            return to;
        }else {
            return null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeToConcreteType(t : any) : any {
        return t;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _interfaceLeastUpperBound(type1 : any,type2 : any) : any {
        let result : any = InterfaceTypeImpl.computeLeastUpperBound(type1,type2);
        return (result || this.typeProvider.dynamicType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _typeParameterLeastUpperBound(type1 : any,type2 : any) : any {
        type1 = type1.resolveToBound(this.typeProvider.objectType);
        type2 = type2.resolveToBound(this.typeProvider.objectType);
        return this.getLeastUpperBound(type1,type2);
    }
}

export namespace _TypeConstraint {
    export type Constructors = _TypeRange.Constructors | '_TypeConstraint' | 'fromExtends';
    export type Interface = Omit<_TypeConstraint, Constructors>;
}
@DartClass
export class _TypeConstraint extends _TypeRange {
    typeParameter : any;

    origin : _TypeConstraintOrigin;

    constructor(origin : _TypeConstraintOrigin,typeParameter : any,_namedArguments? : {upper? : any,lower? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TypeConstraint(origin : _TypeConstraintOrigin,typeParameter : any,_namedArguments? : {upper? : any,lower? : any}) {
        let {upper,lower} = Object.assign({
        }, _namedArguments );
        super._TypeRange({
            upper : upper,lower : lower});
        this.origin = origin;
        this.typeParameter = typeParameter;
    }
    @namedConstructor
    fromExtends(type : any,extendsType : any) {
        this._TypeConstraint(new _TypeConstraintFromExtendsClause(type,extendsType),type,{
            upper : extendsType});
    }
    static fromExtends : new(type : any,extendsType : any) => _TypeConstraint;

    get isDownwards() : boolean {
        return isNot(this.origin, _TypeConstraintFromArgument);
    }
    isSatisifedBy(ts : TypeSystem,type : any) : boolean {
        return ts.isSubtypeOf(this.lowerBound,type) && ts.isSubtypeOf(type,this.upperBound);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return !core.identical(this.upperBound,UnknownInferredType.instance) ? `'${this.typeParameter}' must extend '${this.upperBound}'` : `'${this.lowerBound}' must extend '${this.typeParameter}'`;
    }
}

export namespace _TypeConstraintFromArgument {
    export type Constructors = _TypeConstraintOrigin.Constructors | '_TypeConstraintFromArgument';
    export type Interface = Omit<_TypeConstraintFromArgument, Constructors>;
}
@DartClass
export class _TypeConstraintFromArgument extends _TypeConstraintOrigin {
    argumentType : any;

    parameterType : any;

    parameterName : string;

    genericType : any;

    constructor(argumentType : any,parameterType : any,parameterName : string,_namedArguments? : {genericType? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TypeConstraintFromArgument(argumentType : any,parameterType : any,parameterName : string,_namedArguments? : {genericType? : any}) {
        let {genericType} = Object.assign({
        }, _namedArguments );
        this.argumentType = argumentType;
        this.parameterType = parameterType;
        this.parameterName = parameterName;
        this.genericType = genericType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatError() {
        let prefix : string;
        if ((op(Op.EQUALS,this.genericType.name,"List") || op(Op.EQUALS,this.genericType.name,"Map")) && op(Op.EQUALS,((t)=>(!!t)?t.isDartCore:null)(((t)=>(!!t)?t.library:null)(((t)=>(!!t)?t.element:null)(this.genericType))),true)) {
            prefix = `${this.genericType.name} ${this.parameterName}`;
        }else {
            prefix = `Parameter '${this.parameterName}'`;
        }
        return new core.DartList.literal(prefix,`declared as     '${this.parameterType}'`,`but argument is '${this.argumentType}'.`);
    }
}

export namespace _TypeConstraintFromExtendsClause {
    export type Constructors = _TypeConstraintOrigin.Constructors | '_TypeConstraintFromExtendsClause';
    export type Interface = Omit<_TypeConstraintFromExtendsClause, Constructors>;
}
@DartClass
export class _TypeConstraintFromExtendsClause extends _TypeConstraintOrigin {
    typeParam : any;

    extendsType : any;

    constructor(typeParam : any,extendsType : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TypeConstraintFromExtendsClause(typeParam : any,extendsType : any) {
        this.typeParam = typeParam;
        this.extendsType = extendsType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatError() {
        return new core.DartList.literal(`Type parameter '${this.typeParam}'`,`declared to extend '${this.extendsType}'.`);
    }
}

export namespace _TypeConstraintFromFunctionContext {
    export type Constructors = _TypeConstraintOrigin.Constructors | '_TypeConstraintFromFunctionContext';
    export type Interface = Omit<_TypeConstraintFromFunctionContext, Constructors>;
}
@DartClass
export class _TypeConstraintFromFunctionContext extends _TypeConstraintOrigin {
    contextType : any;

    functionType : any;

    constructor(functionType : any,contextType : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TypeConstraintFromFunctionContext(functionType : any,contextType : any) {
        this.functionType = functionType;
        this.contextType = contextType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatError() {
        return new core.DartList.literal("Function type",`declared as '${this.functionType}'`,`used where  '${this.contextType}' is required.`);
    }
}

export namespace _TypeConstraintFromReturnType {
    export type Constructors = _TypeConstraintOrigin.Constructors | '_TypeConstraintFromReturnType';
    export type Interface = Omit<_TypeConstraintFromReturnType, Constructors>;
}
@DartClass
export class _TypeConstraintFromReturnType extends _TypeConstraintOrigin {
    contextType : any;

    declaredType : any;

    constructor(declaredType : any,contextType : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TypeConstraintFromReturnType(declaredType : any,contextType : any) {
        this.declaredType = declaredType;
        this.contextType = contextType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatError() {
        return new core.DartList.literal("Return type",`declared as '${this.declaredType}'`,`used where  '${this.contextType}' is required.`);
    }
}

export class properties {
}
