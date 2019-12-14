/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_inferrer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace ClosureContext {
    export type Constructors = '_';
    export type Interface = Omit<ClosureContext, Constructors>;
}
@DartClass
export class ClosureContext {
    isAsync : boolean;

    isGenerator : boolean;

    returnContext : any;

    _inferredReturnType : any;

    constructor(inferrer : TypeInferrerImpl,asyncMarker : any,returnContext : any) {
    }
    @defaultFactory
    static $ClosureContext(inferrer : TypeInferrerImpl,asyncMarker : any,returnContext : any) : ClosureContext {
        let isAsync : boolean = op(Op.EQUALS,asyncMarker,AsyncMarker.Async) || op(Op.EQUALS,asyncMarker,AsyncMarker.AsyncStar);
        let isGenerator : boolean = op(Op.EQUALS,asyncMarker,AsyncMarker.SyncStar) || op(Op.EQUALS,asyncMarker,AsyncMarker.AsyncStar);
        if (isGenerator) {
            if (isAsync) {
                returnContext = inferrer.getTypeArgumentOf(returnContext,inferrer.coreTypes.streamClass);
            }else {
                returnContext = inferrer.getTypeArgumentOf(returnContext,inferrer.coreTypes.iterableClass);
            }
        }else if (isAsync) {
            returnContext = inferrer.getTypeArgumentOf(returnContext,inferrer.coreTypes.futureClass);
        }
        return new ClosureContext._(isAsync,isGenerator,returnContext);
    }
    @namedConstructor
    _(isAsync : boolean,isGenerator : boolean,returnContext : any) {
        this.isAsync = isAsync;
        this.isGenerator = isGenerator;
        this.returnContext = returnContext;
    }
    static _ : new(isAsync : boolean,isGenerator : boolean,returnContext : any) => ClosureContext;

    handleReturn(inferrer : TypeInferrerImpl,type : any) : void {
        if (this.isGenerator) return;
        if (this.isAsync) {
            type = inferrer.typeSchemaEnvironment.flattenFutures(type);
        }
        this._updateInferredReturnType(inferrer,type);
    }
    handleYield(inferrer : TypeInferrerImpl,isYieldStar : boolean,type : any) : void {
        if (!this.isGenerator) return;
        if (isYieldStar) {
            type = inferrer.getDerivedTypeArgumentOf(type,this.isAsync ? inferrer.coreTypes.streamClass : inferrer.coreTypes.iterableClass);
            if (op(Op.EQUALS,type,null)) return;
        }
        this._updateInferredReturnType(inferrer,type);
    }
    inferReturnType(inferrer : TypeInferrerImpl,isExpressionFunction : boolean) : any {
        let inferredReturnType : any = inferrer.inferReturnType(this._inferredReturnType,isExpressionFunction);
        if (!isExpressionFunction && this.returnContext != null && (!inferrer.typeSchemaEnvironment.isSubtypeOf(inferredReturnType,this.returnContext) || is(this.returnContext, any))) {
            inferredReturnType = greatestClosure(inferrer.coreTypes,this.returnContext);
        }
        if (this.isGenerator) {
            if (this.isAsync) {
                inferredReturnType = inferrer.wrapType(inferredReturnType,inferrer.coreTypes.streamClass);
            }else {
                inferredReturnType = inferrer.wrapType(inferredReturnType,inferrer.coreTypes.iterableClass);
            }
        }else if (this.isAsync) {
            inferredReturnType = inferrer.wrapFutureType(inferredReturnType);
        }
        return inferredReturnType;
    }
    _updateInferredReturnType(inferrer : TypeInferrerImpl,type : any) : void {
        if (op(Op.EQUALS,this._inferredReturnType,null)) {
            this._inferredReturnType = type;
        }else {
            this._inferredReturnType = inferrer.typeSchemaEnvironment.getLeastUpperBound(this._inferredReturnType,type);
        }
    }
}

export namespace TypeInferrer {
    export type Constructors = 'TypeInferrer';
    export type Interface = Omit<TypeInferrer, Constructors>;
}
@DartClass
export class TypeInferrer {
    @AbstractProperty
    get typePromoter() : any{ throw 'abstract'}
    @AbstractProperty
    get uri() : string{ throw 'abstract'}
    @Abstract
    getFieldNodeForReadTarget(readTarget : any) : any{ throw 'abstract'}
    @Abstract
    inferFunctionBody(returnType : any,asyncMarker : any,body : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeInferrer() {
    }
}

export namespace TypeInferrerImpl {
    export type Constructors = TypeInferrer.Constructors | 'TypeInferrerImpl';
    export type Interface = Omit<TypeInferrerImpl, Constructors>;
}
@DartClass
export class TypeInferrerImpl extends TypeInferrer {
    private static __$_functionReturningDynamic : any;
    static get _functionReturningDynamic() : any { 
        if (this.__$_functionReturningDynamic===undefined) {
            this.__$_functionReturningDynamic = new bare.createInstance(any,null,new core.DartList.literal(),new bare.createInstance(any,null));
        }
        return this.__$_functionReturningDynamic;
    }
    static set _functionReturningDynamic(__$value : any)  { 
        this.__$_functionReturningDynamic = __$value;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : string;

    isTopLevel : boolean;

    coreTypes : any;

    strongMode : boolean;

    classHierarchy : any;

    instrumentation : any;

    typeSchemaEnvironment : any;

    listener : any;

    closureContext : ClosureContext;

    constructor(engine : any,uri : string,listener : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeInferrerImpl(engine : any,uri : string,listener : any) {
        this.isTopLevel = false;
        this.coreTypes = engine.coreTypes;
        this.strongMode = engine.strongMode;
        this.classHierarchy = engine.classHierarchy;
        this.instrumentation = engine.instrumentation;
        this.typeSchemaEnvironment = engine.typeSchemaEnvironment;
        this.uri = uri;
        this.listener = listener;
    }
    @AbstractProperty
    get typePromoter() : any{ throw 'abstract'}
    getCalleeFunctionType(interfaceMember : any,receiverType : any,methodName : any,offset : number) : any {
        if (is(receiverType, any)) {
            if (op(Op.EQUALS,interfaceMember,null)) return TypeInferrerImpl._functionReturningDynamic;
            let memberClass = interfaceMember.enclosingClass;
            if (is(interfaceMember, any)) {
                ((_564_)=>(!!_564_)?_564_.record(lib3.Uri.parse(this.uri),offset,'target',new bare.createInstance(any,null,interfaceMember)):null)(this.instrumentation);
                let memberFunctionType = interfaceMember.function.functionType;
                if (memberClass.typeParameters.isNotEmpty) {
                    let castedType = this.classHierarchy.getClassAsInstanceOf(receiverType.classNode,memberClass);
                    memberFunctionType = Substitution.fromInterfaceType(Substitution.fromInterfaceType(receiverType).substituteType(castedType.asInterfaceType)).substituteType(memberFunctionType);
                }
                return memberFunctionType;
            }else if (is(interfaceMember, any)) {
                return TypeInferrerImpl._functionReturningDynamic;
            }else {
                return TypeInferrerImpl._functionReturningDynamic;
            }
        }else if (is(receiverType, any)) {
            return TypeInferrerImpl._functionReturningDynamic;
        }else if (is(receiverType, any)) {
            return TypeInferrerImpl._functionReturningDynamic;
        }else if (is(receiverType, any)) {
            return TypeInferrerImpl._functionReturningDynamic;
        }else {
            return TypeInferrerImpl._functionReturningDynamic;
        }
    }
    getDerivedTypeArgumentOf(type : any,class_ : any) : any {
        if (is(type, any)) {
            let typeAsInstanceOfClass = this.classHierarchy.getTypeAsInstanceOf(type,class_);
            if (typeAsInstanceOfClass != null) {
                return op(Op.INDEX,typeAsInstanceOfClass.typeArguments,0);
            }
        }
        return null;
    }
    @Abstract
    getFieldInitializer(field : any) : any{ throw 'abstract'}
    getNamedParameterType(functionType : any,name : string) : any {
        return (functionType.getNamedParameter(name) || new bare.createInstance(any,null));
    }
    getPositionalParameterType(functionType : any,i : number) : any {
        if (i < functionType.positionalParameters.length) {
            return op(Op.INDEX,functionType.positionalParameters,i);
        }else {
            return new bare.createInstance(any,null);
        }
    }
    getTypeArgumentOf(type : any,class_ : any) : any {
        if (is(type, any) && core.identical(type.classNode,class_)) {
            return op(Op.INDEX,type.typeArguments,0);
        }else {
            return null;
        }
    }
    inferDeclarationType(initializerType : any) : any {
        if (is(initializerType, any) || (is(initializerType, any) && op(Op.EQUALS,initializerType.classNode,this.coreTypes.nullClass))) {
            return new bare.createInstance(any,null);
        }
        return initializerType;
    }
    @Abstract
    inferExpression(expression : any,typeContext : any,typeNeeded : boolean) : any{ throw 'abstract'}
    @Abstract
    inferFieldInitializer(field : any,type : any,typeNeeded : boolean) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inferFunctionBody(returnType : any,asyncMarker : any,body : any) : void {
        /* TODO (AssertStatementImpl) : assert (closureContext == null); */;
        this.closureContext = new ClosureContext(this,asyncMarker,returnType);
        this.inferStatement(body);
        this.closureContext = null;
    }
    inferInvocation(typeContext : any,typeNeeded : boolean,offset : number,calleeType : any,returnType : any,arguments : any,_namedArguments? : {isOverloadedArithmeticOperator? : boolean,receiverType? : any}) : any {
        let {isOverloadedArithmeticOperator,receiverType} = Object.assign({
            "isOverloadedArithmeticOperator" : false}, _namedArguments );
        let calleeTypeParameters = calleeType.typeParameters;
        let explicitTypeArguments : core.DartList<any> = getExplicitTypeArguments(arguments);
        let inferenceNeeded : boolean = explicitTypeArguments == null && this.strongMode && calleeTypeParameters.isNotEmpty;
        let inferredTypes : core.DartList<any>;
        let substitution : any;
        let formalTypes : core.DartList<any>;
        let actualTypes : core.DartList<any>;
        if (inferenceNeeded) {
            inferredTypes = new core.DartList.filled(calleeTypeParameters.length,new bare.createInstance(any,null));
            this.typeSchemaEnvironment.inferGenericFunctionOrType(returnType,calleeTypeParameters,null,null,typeContext,inferredTypes);
            substitution = Substitution.fromPairs(calleeTypeParameters,inferredTypes);
            formalTypes = new core.DartList.literal();
            actualTypes = new core.DartList.literal();
        }else if (explicitTypeArguments != null && op(Op.EQUALS,calleeTypeParameters.length,explicitTypeArguments.length)) {
            substitution = Substitution.fromPairs(calleeTypeParameters,explicitTypeArguments);
        }else if (calleeTypeParameters.length != 0) {
            substitution = Substitution.fromPairs(calleeTypeParameters,new core.DartList.filled(calleeTypeParameters.length,new bare.createInstance(any,null)));
        }
        let i : number = 0;
        this._forEachArgument(arguments,(name : any,expression : any) =>  {
            let formalType : any = name != null ? this.getNamedParameterType(calleeType,name) : this.getPositionalParameterType(calleeType,i++);
            let inferredFormalType : any = substitution != null ? substitution.substituteType(formalType) : formalType;
            let expressionType = this.inferExpression(expression,inferredFormalType,inferenceNeeded || isOverloadedArithmeticOperator);
            if (inferenceNeeded) {
                formalTypes.add(formalType);
                actualTypes.add(expressionType);
            }
            if (isOverloadedArithmeticOperator) {
                returnType = this.typeSchemaEnvironment.getTypeOfOverloadedArithmetic(receiverType,expressionType);
            }
        });
        if (inferenceNeeded) {
            this.typeSchemaEnvironment.inferGenericFunctionOrType(returnType,calleeTypeParameters,formalTypes,actualTypes,typeContext,inferredTypes);
            substitution = Substitution.fromPairs(calleeTypeParameters,inferredTypes);
            ((_565_)=>(!!_565_)?_565_.record(lib3.Uri.parse(this.uri),offset,'typeArgs',new bare.createInstance(any,null,inferredTypes)):null)(this.instrumentation);
            arguments.types.clear();
            arguments.types.addAll(inferredTypes);
        }
        let inferredType : any;
        if (typeNeeded) {
            inferredType = op(Op.EQUALS,substitution,null) ? returnType : substitution.substituteType(returnType);
        }
        return inferredType;
    }
    inferReturnType(returnType : any,isExpressionFunction : boolean) : any {
        if (op(Op.EQUALS,returnType,null)) {
            return this.coreTypes.nullClass.rawType;
        }
        if (isExpressionFunction && is(returnType, any) && core.identical(returnType.classNode,this.coreTypes.nullClass)) {
            return new bare.createInstance(any,null);
        }
        return returnType;
    }
    @Abstract
    inferStatement(statement : any) : void{ throw 'abstract'}
    wrapFutureType(type : any) : any {
        let typeWithoutFutureOr = type;
        if (is(type, any) && core.identical(type.classNode,this.coreTypes.futureOrClass)) {
            typeWithoutFutureOr = op(Op.INDEX,type.typeArguments,0);
        }
        return new bare.createInstance(any,null,this.coreTypes.futureClass,new core.DartList.literal<any>(this.typeSchemaEnvironment.flattenFutures(typeWithoutFutureOr)));
    }
    wrapType(type : any,class_ : any) : any {
        return new bare.createInstance(any,null,class_,new core.DartList.literal<any>(type));
    }
    _forEachArgument(arguments : any,callback : (name : string,expression : any) => void) : void {
        for(let expression of arguments.positional) {
            callback(null,expression);
        }
        for(let namedExpression of arguments.named) {
            callback(namedExpression.name,namedExpression.value);
        }
    }
}

export class properties {
}
