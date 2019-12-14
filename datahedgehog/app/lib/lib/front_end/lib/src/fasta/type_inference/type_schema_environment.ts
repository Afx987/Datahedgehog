/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_schema_environment.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export namespace TypeConstraint {
    export type Constructors = 'TypeConstraint' | '_';
    export type Interface = Omit<TypeConstraint, Constructors>;
}
@DartClass
export class TypeConstraint {
    lower : any;

    upper : any;

    constructor() {
    }
    @defaultConstructor
    TypeConstraint() {
        this.lower = new bare.createInstance(any,null);
        this.upper = new bare.createInstance(any,null);
    }
    @namedConstructor
    _(lower : any,upper : any) {
        this.lower = lower;
        this.upper = upper;
    }
    static _ : new(lower : any,upper : any) => TypeConstraint;

    clone() : TypeConstraint {
        return new TypeConstraint._(this.lower,this.upper);
    }
    toString() : string {
        return `${typeSchemaToString(this.lower)} <: <type> <: ${typeSchemaToString(this.upper)}`;
    }
}

export namespace TypeSchemaEnvironment {
    export type Constructors = 'TypeSchemaEnvironment';
    export type Interface = Omit<TypeSchemaEnvironment, Constructors>;
}
@DartClass
export class TypeSchemaEnvironment extends any {
    constructor(coreTypes : any,hierarchy : any) {
    }
    @defaultConstructor
    TypeSchemaEnvironment(coreTypes : any,hierarchy : any) {
        super.DartObject(coreTypes,hierarchy);
    }
    addLowerBound(constraint : TypeConstraint,lower : any) : void {
        constraint.lower = this.getLeastUpperBound(constraint.lower,lower);
    }
    addUpperBound(constraint : TypeConstraint,upper : any) : void {
        constraint.upper = this.getGreatestLowerBound(constraint.upper,upper);
    }
    flattenFutures(type : any) : any {
        if (is(type, any)) {
            if (core.identical(type.classNode,coreTypes.futureClass)) {
                return this.flattenFutures(op(Op.INDEX,type.typeArguments,0));
            }
            let futureBase : any = hierarchy.getTypeAsInstanceOf(type,coreTypes.futureClass);
            if (futureBase != null) {
                return op(Op.INDEX,futureBase.typeArguments,0);
            }
        }
        return type;
    }
    getGreatestLowerBound(type1 : any,type2 : any) : any {
        if (core.identical(type1,type2)) {
            return type1;
        }
        if (is(type1, any)) {
            return type2;
        }
        if (is(type2, any)) {
            return type1;
        }
        if (this.isTop(type1) || this.isBottom(type2)) {
            return type2;
        }
        if (this.isTop(type2) || this.isBottom(type1)) {
            return type1;
        }
        if (is(type1, any) && is(type2, any)) {
            return this._functionGreatestLowerBound(type1,type2);
        }
        if (isSubtypeOf(type1,type2)) {
            return type1;
        }
        if (isSubtypeOf(type2,type1)) {
            return type2;
        }
        return new bare.createInstance(any,null);
    }
    getLeastUpperBound(type1 : any,type2 : any) : any {
        if (core.identical(type1,type2)) {
            return type1;
        }
        if (is(type1, any)) {
            return type2;
        }
        if (is(type2, any)) {
            return type1;
        }
        if (is(type1, any)) {
            return is(type2, any) ? type2 : type1;
        }
        if (is(type2, any)) {
            return is(type1, any) ? type1 : type2;
        }
        if (this.isTop(type1) || this.isBottom(type2)) {
            return type1;
        }
        if (this.isTop(type2) || this.isBottom(type1)) {
            return type2;
        }
        if (is(type1, any) || is(type2, any)) {
            return this._typeParameterLeastUpperBound(type1,type2);
        }
        if (is(type1, any) && is(type2, any)) {
            type1 = rawFunctionType;
        }
        if (is(type2, any) && is(type1, any)) {
            type2 = rawFunctionType;
        }
        if (is(type1, any) && is(type2, any)) {
            return this._interfaceLeastUpperBound(type1,type2);
        }
        if (is(type1, any) && is(type2, any)) {
            return this._functionLeastUpperBound(type1,type2);
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return new bare.createInstance(any,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getTypeOfOverloadedArithmetic(type1 : any,type2 : any) : any {
        if (op(Op.EQUALS,type1,intType)) {
            if (op(Op.EQUALS,type2,intType)) return type2;
            if (op(Op.EQUALS,type2,doubleType)) return type2;
        }
        return numType;
    }
    inferGenericFunctionOrType(declaredReturnType : any,typeParametersToInfer : core.DartList<any>,formalTypes : core.DartList<any>,actualTypes : core.DartList<any>,returnContextType : any,inferredTypes : core.DartList<any>) : void {
        if (typeParametersToInfer.isEmpty) {
            return;
        }
        let gatherer = new bare.createInstance(any,null,this,typeParametersToInfer);
        if (returnContextType != null) {
            gatherer.trySubtypeMatch(declaredReturnType,returnContextType);
        }
        if (formalTypes != null) {
            for(let i : number = 0; i < formalTypes.length; i++){
                gatherer.trySubtypeMatch(actualTypes[i],formalTypes[i]);
            }
        }
        this.inferTypeFromConstraints(gatherer.computeConstraints(),typeParametersToInfer,inferredTypes,{
            downwardsInferPhase : formalTypes == null});
    }
    inferTypeFromConstraints(constraints : core.DartMap<any,TypeConstraint>,typeParametersToInfer : core.DartList<any>,inferredTypes : core.DartList<any>,_namedArguments? : {downwardsInferPhase? : boolean}) : void {
        let {downwardsInferPhase} = Object.assign({
            "downwardsInferPhase" : false}, _namedArguments );
        let typesFromDownwardsInference : core.DartList<any> = downwardsInferPhase ? null : inferredTypes.toList({
            growable : false});
        for(let i : number = 0; i < typeParametersToInfer.length; i++){
            let typeParam : any = typeParametersToInfer[i];
            let typeParamBound = typeParam.bound;
            let extendsConstraint : any;
            if (!this._isObjectOrDynamic(typeParamBound)) {
                extendsConstraint = Substitution.fromPairs(typeParametersToInfer,inferredTypes).substituteType(typeParamBound);
            }
            let constraint = constraints.get(typeParam);
            if (downwardsInferPhase) {
                inferredTypes[i] = this._inferTypeParameterFromContext(constraint,extendsConstraint);
            }else {
                inferredTypes[i] = this._inferTypeParameterFromAll(typesFromDownwardsInference[i],constraint,extendsConstraint);
            }
        }
        if (downwardsInferPhase) {
            return;
        }
        let knownTypes = new core.DartMap.literal([
        ]);
        for(let i : number = 0; i < typeParametersToInfer.length; i++){
            let typeParam : any = typeParametersToInfer[i];
            let constraint = constraints.get(typeParam);
            let typeParamBound = Substitution.fromPairs(typeParametersToInfer,inferredTypes).substituteType(typeParam.bound);
            let inferred = inferredTypes[i];
            let success : boolean = this.typeSatisfiesConstraint(inferred,constraint);
            if (success && !this._isObjectOrDynamic(typeParamBound)) {
                let extendsConstraint = typeParamBound;
                success = isSubtypeOf(inferred,extendsConstraint);
            }
            if (!success) {
            }
            if (isKnown(inferred)) {
                knownTypes.set(typeParam,inferred);
            }
        }
    }
    instantiateToBounds(type : any,_namedArguments? : {knownTypes? : core.DartMap<any,any>}) : any {
        let {knownTypes} = Object.assign({
        }, _namedArguments );
        let typeFormals : core.DartList<any> = this._typeFormalsAsParameters(type);
        let count : number = typeFormals.length;
        if (count == 0) {
            return type;
        }
        let substitution = new core.DartMap.literal([
        ]);
        for(let parameter of typeFormals) {
            if (this._isObjectOrDynamic(parameter.bound)) {
                substitution.set(parameter,new bare.createInstance(any,null));
            }else {
                substitution.set(parameter,parameter.bound);
            }
        }
        if (knownTypes != null) {
            type = substitute(type,knownTypes);
        }
        let result = substituteDeep(type,substitution);
        if (result != null) return result;
        substitution = new core.DartMap.literal([
        ]);
        for(let parameter of typeFormals) {
            substitution.set(parameter,new bare.createInstance(any,null));
        }
        return substitute(type,substitution);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isBottom(t : any) : boolean {
        if (is(t, any)) {
            return true;
        }else if (is(t, any) && core.identical(t.classNode,coreTypes.nullClass)) {
            return true;
        }else {
            return super.isBottom(t);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isTop(t : any) : boolean {
        if (is(t, any)) {
            return true;
        }else {
            return super.isTop(t);
        }
    }
    solveTypeConstraint(constraint : TypeConstraint,_namedArguments? : {grounded? : boolean}) : any {
        let {grounded} = Object.assign({
            "grounded" : false}, _namedArguments );
        if (isKnown(constraint.lower)) return constraint.lower;
        if (isKnown(constraint.upper)) return constraint.upper;
        if (isNot(constraint.lower, any)) {
            return grounded ? leastClosure(coreTypes,constraint.lower) : constraint.lower;
        }else {
            return grounded ? greatestClosure(coreTypes,constraint.upper) : constraint.upper;
        }
    }
    typeSatisfiesConstraint(type : any,constraint : TypeConstraint) : boolean {
        return isSubtypeOf(constraint.lower,type) && isSubtypeOf(type,constraint.upper);
    }
    _functionGreatestLowerBound(f : any,g : any) : any {
        let totalPositional : number = math.max(f.positionalParameters.length,g.positionalParameters.length);
        let positionalParameters = new core.DartList<any>(totalPositional);
        for(let i : number = 0; i < totalPositional; i++){
            if (i < f.positionalParameters.length) {
                let fType = op(Op.INDEX,f.positionalParameters,i);
                if (i < g.positionalParameters.length) {
                    let gType = op(Op.INDEX,g.positionalParameters,i);
                    positionalParameters[i] = this.getLeastUpperBound(fType,gType);
                }else {
                    positionalParameters[i] = fType;
                }
            }else {
                positionalParameters[i] = op(Op.INDEX,g.positionalParameters,i);
            }
        }
        let requiredParameterCount : number = math.min(f.requiredParameterCount,g.requiredParameterCount);
        let hasPositional : boolean = requiredParameterCount < totalPositional;
        let namedParameters : core.DartList<any> = new core.DartList.literal();
        {
            let i : number = 0;
            let j : number = 0;
            while (true){
                if (i < f.namedParameters.length) {
                    if (j < g.namedParameters.length) {
                        let fName = op(Op.INDEX,f.namedParameters,i).name;
                        let gName = op(Op.INDEX,g.namedParameters,j).name;
                        let order : number = fName.compareTo(gName);
                        if (order < 0) {
                            namedParameters.add(op(Op.INDEX,f.namedParameters,i++));
                        }else if (order > 0) {
                            namedParameters.add(op(Op.INDEX,g.namedParameters,j++));
                        }else {
                            namedParameters.add(new bare.createInstance(any,null,fName,this.getLeastUpperBound(op(Op.INDEX,f.namedParameters,i++).type,op(Op.INDEX,g.namedParameters,j++).type)));
                        }
                    }else {
                        namedParameters.addAll(f.namedParameters.skip(i));
                        break;
                    }
                }else {
                    namedParameters.addAll(g.namedParameters.skip(j));
                    break;
                }
            }
        }
        let hasNamed : boolean = namedParameters.isNotEmpty;
        if (hasPositional && hasNamed) return new bare.createInstance(any,null);
        let returnType : any = this.getGreatestLowerBound(f.returnType,g.returnType);
        return new bare.createInstance(any,null,positionalParameters,returnType,{
            namedParameters : namedParameters,requiredParameterCount : requiredParameterCount});
    }
    _functionLeastUpperBound(f : any,g : any) : any {
        if (f.requiredParameterCount != g.requiredParameterCount) {
            return coreTypes.functionClass.rawType;
        }
        let requiredParameterCount : number = f.requiredParameterCount;
        let totalPositional : number = math.min(f.positionalParameters.length,g.positionalParameters.length);
        let positionalParameters = new core.DartList<any>(totalPositional);
        for(let i : number = 0; i < totalPositional; i++){
            positionalParameters[i] = this.getGreatestLowerBound(op(Op.INDEX,f.positionalParameters,i),op(Op.INDEX,g.positionalParameters,i));
        }
        let namedParameters : core.DartList<any> = new core.DartList.literal();
        {
            let i : number = 0;
            let j : number = 0;
            while (true){
                if (i < f.namedParameters.length) {
                    if (j < g.namedParameters.length) {
                        let fName = op(Op.INDEX,f.namedParameters,i).name;
                        let gName = op(Op.INDEX,g.namedParameters,j).name;
                        let order : number = fName.compareTo(gName);
                        if (order < 0) {
                            i++;
                        }else if (order > 0) {
                            j++;
                        }else {
                            namedParameters.add(new bare.createInstance(any,null,fName,this.getGreatestLowerBound(op(Op.INDEX,f.namedParameters,i++).type,op(Op.INDEX,g.namedParameters,j++).type)));
                        }
                    }else {
                        break;
                    }
                }else {
                    break;
                }
            }
        }
        let returnType : any = this.getLeastUpperBound(f.returnType,g.returnType);
        return new bare.createInstance(any,null,positionalParameters,returnType,{
            namedParameters : namedParameters,requiredParameterCount : requiredParameterCount});
    }
    _inferTypeParameterFromAll(typeFromContextInference : any,constraint : TypeConstraint,extendsConstraint : any) : any {
        if (isKnown(typeFromContextInference)) {
            return typeFromContextInference;
        }
        if (extendsConstraint != null) {
            constraint = constraint.clone();
            this.addUpperBound(constraint,extendsConstraint);
        }
        return this.solveTypeConstraint(constraint,{
            grounded : true});
    }
    _inferTypeParameterFromContext(constraint : TypeConstraint,extendsConstraint : any) : any {
        let t : any = this.solveTypeConstraint(constraint);
        if (!isKnown(t)) {
            return t;
        }
        if (extendsConstraint != null) {
            constraint = constraint.clone();
            this.addUpperBound(constraint,extendsConstraint);
            return this.solveTypeConstraint(constraint);
        }
        return t;
    }
    _interfaceLeastUpperBound(type1 : any,type2 : any) : any {
        if (isSubtypeOf(type1,type2)) {
            return type2;
        }
        if (isSubtypeOf(type2,type1)) {
            return type1;
        }
        if (is(type1, any) && is(type2, any) && core.identical(type1.classNode,type2.classNode)) {
            let tArgs1 : core.DartList<any> = type1.typeArguments;
            let tArgs2 : core.DartList<any> = type2.typeArguments;
            /* TODO (AssertStatementImpl) : assert (tArgs1.length == tArgs2.length); */;
            let tArgs : core.DartList<any> = new core.DartList<any>(tArgs1.length);
            for(let i : number = 0; i < tArgs1.length; i++){
                tArgs[i] = this.getLeastUpperBound(tArgs1[i],tArgs2[i]);
            }
            return new bare.createInstance(any,null,type1.classNode,tArgs);
        }
        return hierarchy.getClassicLeastUpperBound(type1,type2);
    }
    _isObjectOrDynamic(type : any) : boolean {
        return is(type, any) || (is(type, any) && core.identical(type.classNode,coreTypes.objectClass));
    }
    _typeFormalsAsParameters(type : any) : core.DartList<any> {
        if (is(type, any)) {
            return type.typedefNode.typeParameters;
        }else if (is(type, any)) {
            return type.classNode.typeParameters;
        }else {
            return new core.DartList.literal();
        }
    }
    _typeParameterLeastUpperBound(type1 : any,type2 : any) : any {
        if (isSubtypeOf(type1,type2)) {
            return type2;
        }
        if (isSubtypeOf(type2,type1)) {
            return type1;
        }
        if (is(type1, any)) {
            return this.getLeastUpperBound(Substitution.fromMap(new core.DartMap.literal([
                [type1.parameter,objectType]])).substituteType(type1.parameter.bound),type2);
        }else if (is(type2, any)) {
            return this.getLeastUpperBound(type1,Substitution.fromMap(new core.DartMap.literal([
                [type2.parameter,objectType]])).substituteType(type2.parameter.bound));
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
            return new bare.createInstance(any,null);
        }
    }
}

export class properties {
}
