/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/type_substitute_bounds_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_parser";

export var bound : (lower : string,upper : string) => TypeBound = (lower : string,upper : string) : TypeBound =>  {
    return new TypeBound(lower,upper);
};
export var testCase : (type : string,bounds : core.DartMap<string,TypeBound>,expected : string) => TestCase = (type : string,bounds : core.DartMap<string,TypeBound>,expected : string) : TestCase =>  {
    return new TestCase(type,bounds,expected);
};
export var main : () => any = () =>  {
    for(let testCase of properties.testCases) {
        test(`${testCase}`,() =>  {
            let environment = new lib3.LazyTypeEnvironment();
            let type = environment.parse(testCase.type);
            let upperBounds = new core.DartMap.literal([
            ]);
            let lowerBounds = new core.DartMap.literal([
            ]);
            testCase.bounds.forEach((name : string,bounds : TypeBound) =>  {
                let parameter = environment.getTypeParameter(name);
                upperBounds.set(parameter,environment.parse(bounds.upper));
                lowerBounds.set(parameter,environment.parse(bounds.lower));
            });
            let substituted = Substitution.fromUpperAndLowerBounds(upperBounds,lowerBounds).substituteType(type);
            let expected = environment.parse(testCase.expected);
            if (substituted != expected) {
                fail(`Expected `${expected}` but got `${substituted}``);
            }
        });
    }
};
export namespace TestCase {
    export type Constructors = 'TestCase';
    export type Interface = Omit<TestCase, Constructors>;
}
@DartClass
export class TestCase {
    type : string;

    bounds : core.DartMap<string,TypeBound>;

    expected : string;

    constructor(type : string,bounds : core.DartMap<string,TypeBound>,expected : string) {
    }
    @defaultConstructor
    TestCase(type : string,bounds : core.DartMap<string,TypeBound>,expected : string) {
        this.type = type;
        this.bounds = bounds;
        this.expected = expected;
    }
    toString() : string {
        let substitution = this.bounds.keys.map((key : any) =>  {
            let bound = this.bounds.get(key);
            return `${bound.lower} <: ${key} <: ${bound.upper}`;
        }).join(',');
        return `${this.type} [${substitution}] <: ${this.expected}`;
    }
}

export namespace TypeBound {
    export type Constructors = 'TypeBound';
    export type Interface = Omit<TypeBound, Constructors>;
}
@DartClass
export class TypeBound {
    lower : string;
    upper : string;

    constructor(lower : string,upper : string) {
    }
    @defaultConstructor
    TypeBound(lower : string,upper : string) {
        this.lower = lower;
        this.upper = upper;
    }
}

export class properties {
    private static __$testCases : core.DartList<TestCase>;
    static get testCases() : core.DartList<TestCase> { 
        if (this.__$testCases===undefined) {
            this.__$testCases = new core.DartList.literal<TestCase>(testCase('T',new core.DartMap.literal([
                ['T',bound('_','String')]]),'String'),testCase('List<T>',new core.DartMap.literal([
                ['T',bound('_','String')]]),'List<String>'),testCase('List<List<T>>',new core.DartMap.literal([
                ['T',bound('_','String')]]),'List<List<String>>'),testCase('(T) => T',new core.DartMap.literal([
                ['T',bound('_','String')]]),'(_) => String'),testCase('<G>(G,T) => T',new core.DartMap.literal([
                ['T',bound('_','String')]]),'<G>(G,_) => String'),testCase('<G>(G,x:T) => T',new core.DartMap.literal([
                ['T',bound('_','String')]]),'<G>(G,x:_) => String'),testCase('<G:T>(G) => G',new core.DartMap.literal([
                ['T',bound('_','String')]]),'<G:_>(G) => G'),testCase('<G:T>(G) => G',new core.DartMap.literal([
                ['T',bound('int','num')]]),'<G:int>(G) => G'),testCase('<G>(T,G) => void',new core.DartMap.literal([
                ['T',bound('_','String')]]),'<G>(_,G) => void'),testCase('(T) => void',new core.DartMap.literal([
                ['T',bound('_','String')]]),'(_) => void'),testCase('(int) => T',new core.DartMap.literal([
                ['T',bound('_','String')]]),'(int) => String'),testCase('(int) => int',new core.DartMap.literal([
                ['T',bound('_','String')]]),'(int) => int'),testCase('((T) => int) => int',new core.DartMap.literal([
                ['T',bound('_','String')]]),'((String) => int) => int'),testCase('<E>(<F>(T) => int) => int',new core.DartMap.literal([
                ['T',bound('_','String')]]),'<E>(<F>(String) => int) => int'),testCase('(<F>(T) => int) => int',new core.DartMap.literal([
                ['T',bound('_','String')]]),'(<F>(String) => int) => int'),testCase('<E>((T) => int) => int',new core.DartMap.literal([
                ['T',bound('_','String')]]),'<E>((String) => int) => int'));
        }
        return this.__$testCases;
    }
    static set testCases(__$value : core.DartList<TestCase>)  { 
        this.__$testCases = __$value;
    }

}
