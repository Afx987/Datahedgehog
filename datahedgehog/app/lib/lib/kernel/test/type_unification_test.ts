/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/type_unification_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_parser";
import * as io from "@dart2ts/dart/io";

export var successCase : (type1 : string,type2 : string,expected : core.DartMap<string,string>,_namedArguments? : {debug? : boolean}) => TestCase = (type1 : string,type2 : string,expected : core.DartMap<string,string>,_namedArguments? : {debug? : boolean}) : TestCase =>  {
    let {debug} = Object.assign({
        "debug" : false}, _namedArguments );
    return new TestCase.success(type1,type2,expected);
};
export var failureCase : (type1 : string,type2 : string,quantifiedVariables : core.DartList<string>,_namedArguments? : {debug? : boolean}) => TestCase = (type1 : string,type2 : string,quantifiedVariables : core.DartList<string>,_namedArguments? : {debug? : boolean}) : TestCase =>  {
    let {debug} = Object.assign({
        "debug" : false}, _namedArguments );
    return new TestCase.fail(type1,type2,quantifiedVariables);
};
export var reportFailure : (testCase : TestCase,message : string) => void = (testCase : TestCase,message : string) : void =>  {
    ++properties.numFailures;
    fail(`${message} in `${testCase}``);
};
export var main : () => any = () =>  {
    for(let testCase of properties.testCases) {
        test(`${testCase}`,() =>  {
            let env = new lib3.LazyTypeEnvironment();
            let type1 = env.parse(testCase.type1);
            let type2 = env.parse(testCase.type2);
            let quantifiedVariables = testCase.quantifiedVariables.map(env.getTypeParameter.bind(env)).toSet();
            let substitution = unifyTypes(type1,type2,quantifiedVariables);
            if (testCase.shouldSucceed) {
                if (op(Op.EQUALS,substitution,null)) {
                    reportFailure(testCase,'Unification failed');
                }else {
                    for(let key of testCase.expectedSubstitution.keys) {
                        let typeParameter = env.getTypeParameter(key);
                        if (testCase.expectedSubstitution.get(key) == null) {
                            if (substitution.containsKey(key)) {
                                let actualType = op(Op.INDEX,substitution,typeParameter);
                                reportFailure(testCase,'Incorrect substitution ' + ``${key} = ${actualType}` should be unbound`);
                            }
                        }else {
                            let expectedType = env.parse(testCase.expectedSubstitution.get(key));
                            let actualType = op(Op.INDEX,substitution,typeParameter);
                            if (actualType != expectedType) {
                                reportFailure(testCase,'Incorrect substitution ' + ``${key} = ${actualType}` should be `${key} = ${expectedType}``);
                            }
                        }
                    }
                    let boundTypeVariables = testCase.expectedSubstitution.keys.where((name : any) =>  {
                        return testCase.expectedSubstitution.get(name) != null;
                    });
                    if (substitution.length != boundTypeVariables.length) {
                        reportFailure(testCase,`Substituted `${substitution.keys.join(',')}` ` + `but should only substitute `${boundTypeVariables.join(',')}``);
                    }
                }
            }else {
                if (substitution != null) {
                    reportFailure(testCase,'Unification was supposed to fail');
                }
            }
        });
    }
    if (properties.numFailures > 0) {
        io.exit(1);
    }
};
export namespace TestCase {
    export type Constructors = 'success' | 'fail';
    export type Interface = Omit<TestCase, Constructors>;
}
@DartClass
export class TestCase {
    type1 : string;

    type2 : string;

    quantifiedVariables : core.DartIterable<string>;

    expectedSubstitution : core.DartMap<string,string>;

    @namedConstructor
    success(type1 : string,type2 : string,expectedSubstitution : core.DartMap<string,string>) {
        this.type1 = type1;
        this.type2 = type2;
        this.expectedSubstitution = expectedSubstitution;
        this.quantifiedVariables = this.expectedSubstitution.keys;
    }
    static success : new(type1 : string,type2 : string,expectedSubstitution : core.DartMap<string,string>) => TestCase;

    @namedConstructor
    fail(type1 : string,type2 : string,quantifiedVariables : core.DartIterable<string>) {
        this.type1 = type1;
        this.type2 = type2;
        this.quantifiedVariables = quantifiedVariables;
    }
    static fail : new(type1 : string,type2 : string,quantifiedVariables : core.DartIterable<string>) => TestCase;

    get shouldSucceed() : boolean {
        return this.expectedSubstitution != null;
    }
    toString() : string {
        return `∃ ${this.quantifiedVariables.join(',')}. ${this.type1} = ${this.type2}`;
    }
}

export class properties {
    private static __$testCases : core.DartList<TestCase>;
    static get testCases() : core.DartList<TestCase> { 
        if (this.__$testCases===undefined) {
            this.__$testCases = new core.DartList.literal<TestCase>(successCase('List<T>','List<String>',new core.DartMap.literal([
                ['T','String']])),successCase('List<String>','List<T>',new core.DartMap.literal([
                ['T','String']])),successCase('List<T>','List<T>',new core.DartMap.literal([
                ['T',null]])),successCase('List<S>','List<T>',new core.DartMap.literal([
                ['S','T']])),successCase('List<S>','List<T>',new core.DartMap.literal([
                ['T','S']])),successCase('List<S>','List<T>',new core.DartMap.literal([
                ['S','T'],
                ['T',null]])),failureCase('List<S>','List<T>',new core.DartList.literal()),failureCase('List<T>','T',new core.DartList.literal('T')),failureCase('List<List<T>>','List<T>',new core.DartList.literal('T')),failureCase('Map<S, T>','Map<List<T>, List<S>>',new core.DartList.literal('T','S')),failureCase('Map<Map<S,String>, Map<int,S>>','Map<Map<int, S>, Map<S, String>>',new core.DartList.literal('S')),successCase('Map<Map<S, int>, Map<int, S>>','Map<Map<int, S>, Map<S, int>>',new core.DartMap.literal([
                ['S','int']])),successCase('Map<Map<S, String>, Map<int, T>>','Map<Map<int, T>, Map<S, String>>',new core.DartMap.literal([
                ['S','int'],
                ['T','String']])),successCase('Map<S, List<T>>','Map<T, List<S>>',new core.DartMap.literal([
                ['S','T']])),successCase('Map<S, T>','Map<S, List<S>>',new core.DartMap.literal([
                ['T','List<S>']])),successCase('Map<S, T>','Map<S, List<S>>',new core.DartMap.literal([
                ['T','List<S>'],
                ['S',null]])),successCase('Map<List<S>, T>','Map<T, List<S>>',new core.DartMap.literal([
                ['T','List<S>']])),successCase('Map<List<S>, T>','Map<T, List<S>>',new core.DartMap.literal([
                ['T','List<S>'],
                ['S',null]])),successCase('<E>(E) => E','<T>(T) => T',new core.DartMap.literal([
            ])),successCase('<E>(E, S) => E','<T>(T, int) => T',new core.DartMap.literal([
                ['S','int']])),failureCase('<E>(E, S) => E','<T>(T, T) => T',new core.DartList.literal('S')),successCase('<E>(E) => <T>(T) => Map<E,T>','<E>(E) => <T>(T) => Map<E,T>',new core.DartMap.literal([
            ])),successCase('<E>(E,_) => E','<T>(T,_) => T',new core.DartMap.literal([
            ])),successCase('(x:int,y:String) => int','(y:String,x:int) => int',new core.DartMap.literal([
            ])),successCase('<S,T>(x:S,y:T) => S','<S,T>(y:T,x:S) => S',new core.DartMap.literal([
            ])),successCase('(x:<T>(T)=>T,y:<S>(S)=>S) => int','(y:<S>(S)=>S,x:<T>(T)=>T) => int',new core.DartMap.literal([
            ])),successCase('(x:<T>(T)=>T,y:<S>(S,S,S)=>S) => int','(y:<S>(S,S,S)=>S,x:<T>(T)=>T) => int',new core.DartMap.literal([
            ])));
        }
        return this.__$testCases;
    }
    static set testCases(__$value : core.DartList<TestCase>)  { 
        this.__$testCases = __$value;
    }

    private static __$numFailures : number;
    static get numFailures() : number { 
        if (this.__$numFailures===undefined) {
            this.__$numFailures = 0;
        }
        return this.__$numFailures;
    }
    static set numFailures(__$value : number)  { 
        this.__$numFailures = __$value;
    }

}
