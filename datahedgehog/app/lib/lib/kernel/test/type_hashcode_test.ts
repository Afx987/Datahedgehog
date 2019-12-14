/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/type_hashcode_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_unification_test";
import * as lib4 from "./type_parser";

export var checkHashCodeEquality : (type1 : any,type2 : any) => void = (type1 : any,type2 : any) : void =>  {
    if (op(Op.EQUALS,type1,type2) && type1.hashCode != type2.hashCode) {
        fail(`Equal types with different hash codes: ${type1} and ${type2}`);
    }
};
export var isSmallInteger : (hash : number) => boolean = (hash : number) : boolean =>  {
    return properties.MinimumSmi <= hash && hash <= properties.MaximumSmi;
};
export var checkHashCodeRange : (type : any) => void = (type : any) : void =>  {
    let hash : number = type.hashCode;
    if (!isSmallInteger(hash)) {
        fail(`Hash code for ${type} is not a SMI: ${hash}`);
    }
};
export var main : () => void = () : void =>  {
    for(let testCase of lib3.properties.testCases) {
        test(`${testCase}`,() =>  {
            let env = new lib4.LazyTypeEnvironment();
            let type1 = env.parse(testCase.type1);
            let type2 = env.parse(testCase.type2);
            checkHashCodeEquality(type1,type2);
            checkHashCodeRange(type1);
            checkHashCodeRange(type2);
        });
    }
};
export class properties {
    private static __$MinimumSmi : number;
    static get MinimumSmi() : number { 
        if (this.__$MinimumSmi===undefined) {
            this.__$MinimumSmi = -(1 << 30);
        }
        return this.__$MinimumSmi;
    }
    static set MinimumSmi(__$value : number)  { 
        this.__$MinimumSmi = __$value;
    }

    private static __$MaximumSmi : number;
    static get MaximumSmi() : number { 
        if (this.__$MaximumSmi===undefined) {
            this.__$MaximumSmi = (1 << 30) - 1;
        }
        return this.__$MaximumSmi;
    }
    static set MaximumSmi(__$value : number)  { 
        this.__$MaximumSmi = __$value;
    }

}
