/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_constraint_gatherer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TypeConstraintGatherer {
    export type Constructors = 'TypeConstraintGatherer';
    export type Interface = Omit<TypeConstraintGatherer, Constructors>;
}
@DartClass
export class TypeConstraintGatherer {
    environment : any;

    _protoConstraints;

    _parametersToConstrain : core.DartList<any>;

    constructor(environment : any,typeParameters : core.DartIterable<any>) {
    }
    @defaultConstructor
    TypeConstraintGatherer(environment : any,typeParameters : core.DartIterable<any>) {
        this._protoConstraints = new core.DartList.literal<_ProtoConstraint>();
        this._parametersToConstrain = typeParameters.toList();
        this.environment = environment;
    }
    computeConstraints() : core.DartMap<any,any> {
        let result = new core.DartMap.literal([
        ]);
        for(let parameter of this._parametersToConstrain) {
            result.set(parameter,new bare.createInstance(any,null));
        }
        for(let protoConstraint of this._protoConstraints) {
            if (protoConstraint.isUpper) {
                this.environment.addUpperBound(result.get(protoConstraint.parameter),protoConstraint.bound);
            }else {
                this.environment.addLowerBound(result.get(protoConstraint.parameter),protoConstraint.bound);
            }
        }
        return result;
    }
    trySubtypeMatch(subtype : any,supertype : any) : boolean {
        let oldProtoConstraintsLength : number = this._protoConstraints.length;
        let isMatch : boolean = this._isSubtypeMatch(subtype,supertype);
        if (!isMatch) {
            this._protoConstraints.length = oldProtoConstraintsLength;
        }
        return isMatch;
    }
    _constrainLower(parameter : any,lower : any) : void {
        this._protoConstraints.add(new _ProtoConstraint.lower(parameter,lower));
    }
    _constrainUpper(parameter : any,upper : any) : void {
        this._protoConstraints.add(new _ProtoConstraint.upper(parameter,upper));
    }
    _isFunctionSubtypeMatch(subtype : any,supertype : any) : boolean {
        if (op(Op.GT,subtype.requiredParameterCount,supertype.requiredParameterCount)) {
            return false;
        }
        if (op(Op.LT,subtype.positionalParameters.length,supertype.positionalParameters.length)) {
            return false;
        }
        if (subtype.typeParameters.isNotEmpty || supertype.typeParameters.isNotEmpty) {
            let subtypeSubstitution = new core.DartMap.literal([
            ]);
            let supertypeSubstitution = new core.DartMap.literal([
            ]);
            if (!this._matchTypeFormals(subtype.typeParameters,supertype.typeParameters,subtypeSubstitution,supertypeSubstitution)) {
                return false;
            }
            var substituteTypeParams : (type : any,substitutionMap : core.DartMap<any,any>) => any = (type : any,substitutionMap : core.DartMap<any,any>) : any =>  {
                let substitution = Substitution.fromMap(substitutionMap);
                return new bare.createInstance(any,null,type.positionalParameters.map(substitution.substituteType).toList(),substitution.substituteType(type.returnType),{
                    namedParameters : type.namedParameters.map((named : any) =>  {
                        return new bare.createInstance(any,null,named.name,substitution.substituteType(named.type));
                    }).toList(),typeParameters : substitutionMap.keys.toList(),requiredParameterCount : type.requiredParameterCount});
            };
            subtype = substituteTypeParams(subtype,subtypeSubstitution);
            supertype = substituteTypeParams(supertype,supertypeSubstitution);
        }
        if (isNot(supertype.returnType, any) && !this._isSubtypeMatch(subtype.returnType,supertype.returnType)) {
            return false;
        }
        for(let i : number = 0; i < supertype.positionalParameters.length; ++i){
            let supertypeParameter = op(Op.INDEX,supertype.positionalParameters,i);
            let subtypeParameter = op(Op.INDEX,subtype.positionalParameters,i);
            if (!this._isSubtypeMatch(supertypeParameter,subtypeParameter)) {
                return false;
            }
        }
        let subtypeNameIndex : number = 0;
        for(let supertypeParameter of supertype.namedParameters) {
            while (subtypeNameIndex < subtype.namedParameters.length && op(Op.INDEX,subtype.namedParameters,subtypeNameIndex).name != supertypeParameter.name){
                ++subtypeNameIndex;
            }
            if (subtypeNameIndex == subtype.namedParameters.length) return false;
            let subtypeParameter : any = op(Op.INDEX,subtype.namedParameters,subtypeNameIndex);
            if (!this._isSubtypeMatch(supertypeParameter.type,subtypeParameter.type)) {
                return false;
            }
        }
        return true;
    }
    _isInterfaceSubtypeMatch(subtype : any,supertype : any) : boolean {
        let matchingSupertypeOfSubtype = this.environment.hierarchy.getTypeAsInstanceOf(subtype,supertype.classNode);
        if (op(Op.EQUALS,matchingSupertypeOfSubtype,null)) return false;
        for(let i : number = 0; i < supertype.classNode.typeParameters.length; i++){
            if (!this._isSubtypeMatch(op(Op.INDEX,matchingSupertypeOfSubtype.typeArguments,i),op(Op.INDEX,supertype.typeArguments,i))) {
                return false;
            }
        }
        return true;
    }
    _isNull(type : any) : boolean {
        return is(type, any) && core.identical(type.classNode,this.environment.coreTypes.nullClass);
    }
    _isSubtypeMatch(subtype : any,supertype : any) : boolean {
        if (is(subtype, any)) return true;
        if (is(supertype, any)) return true;
        if (is(subtype, any) && this._parametersToConstrain.contains(subtype.parameter)) {
            this._constrainUpper(subtype.parameter,supertype);
            return true;
        }
        if (is(supertype, any) && this._parametersToConstrain.contains(supertype.parameter)) {
            this._constrainLower(supertype.parameter,subtype);
            return true;
        }
        if (core.identical(subtype,supertype)) return true;
        if (this._isTop(supertype)) return true;
        if (this._isNull(subtype)) return true;
        if (is(subtype, any)) {
            if (is(supertype, any) && core.identical(subtype.parameter,supertype.parameter)) {
                return true;
            }
            return this._isSubtypeMatch(subtype.parameter.bound,supertype);
        }
        if (is(subtype, any) && is(supertype, any)) {
            return this._isInterfaceSubtypeMatch(subtype,supertype);
        }
        if (is(subtype, any)) {
            if (is(supertype, any)) {
                if (core.identical(supertype.classNode,this.environment.coreTypes.functionClass) || core.identical(supertype.classNode,this.environment.coreTypes.objectClass)) {
                    return true;
                }else {
                    return false;
                }
            }
            if (is(supertype, any)) {
                return this._isFunctionSubtypeMatch(subtype,supertype);
            }
        }
        return false;
    }
    _isTop(type : any) : boolean {
        return is(type, any) || is(type, any) || (is(type, any) && core.identical(type.classNode,this.environment.coreTypes.objectClass));
    }
    _matchTypeFormals(params1 : core.DartList<any>,params2 : core.DartList<any>,substitution1 : core.DartMap<any,any>,substitution2 : core.DartMap<any,any>) : boolean {
        let count : number = params1.length;
        if (count != params2.length) return false;
        for(let i : number = 0; i < count; i++){
            let pFresh : any = new bare.createInstance(any,null,params2[i].name);
            let variableFresh : any = new bare.createInstance(any,null,pFresh);
            substitution1.set(params1[i],variableFresh);
            substitution2.set(params2[i],variableFresh);
            let bound1 : any = substitute(params1[i].bound,substitution1);
            let bound2 : any = substitute(params2[i].bound,substitution2);
            pFresh.bound = bound2;
            if (!this._isSubtypeMatch(bound2,bound1)) return false;
        }
        return true;
    }
}

export namespace _ProtoConstraint {
    export type Constructors = 'lower' | 'upper';
    export type Interface = Omit<_ProtoConstraint, Constructors>;
}
@DartClass
export class _ProtoConstraint {
    parameter : any;

    bound : any;

    isUpper : boolean;

    @namedConstructor
    lower(parameter : any,bound : any) {
        this.isUpper = false;
        this.parameter = parameter;
        this.bound = bound;
    }
    static lower : new(parameter : any,bound : any) => _ProtoConstraint;

    @namedConstructor
    upper(parameter : any,bound : any) {
        this.isUpper = true;
        this.parameter = parameter;
        this.bound = bound;
    }
    static upper : new(parameter : any,bound : any) => _ProtoConstraint;

}

export class properties {
}
