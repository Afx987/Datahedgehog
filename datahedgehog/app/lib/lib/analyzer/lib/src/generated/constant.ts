/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/constant.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ConstantEvaluator {
    export type Constructors = 'ConstantEvaluator';
    export type Interface = Omit<ConstantEvaluator, Constructors>;
}
@DartClass
export class ConstantEvaluator {
    _source : any;

    _typeProvider : any;

    _typeSystem : any;

    constructor(_source : any,typeProvider : any,_namedArguments? : {typeSystem? : any}) {
    }
    @defaultConstructor
    ConstantEvaluator(_source : any,typeProvider : any,_namedArguments? : {typeSystem? : any}) {
        let {typeSystem} = Object.assign({
        }, _namedArguments );
        this._typeSystem = (typeSystem || new bare.createInstance(any,null,typeProvider));
        this._typeProvider = typeProvider;
        this._source = _source;
    }
    evaluate(expression : any) : any {
        let errorListener : any = new bare.createInstance(any,null);
        let errorReporter : any = new bare.createInstance(any,null,errorListener,this._source);
        let result : any = expression.accept(new bare.createInstance(any,null,new bare.createInstance(any,null,this._typeProvider,new bare.createInstance(any,null),{
            typeSystem : this._typeSystem}),errorReporter));
        if (result != null) {
            return EvaluationResult.forValue(result);
        }
        return EvaluationResult.forErrors(errorListener.errors);
    }
}

export class properties {
}
