/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/type_subtype_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_parser";

export var subtype : (subtype_ : string,supertype : string) => TestCase = (subtype_ : string,supertype : string) : TestCase =>  {
    return new TestCase(subtype_,supertype,{
        isSubtype : true});
};
export var notSubtype : (subtype_ : string,supertype : string) => TestCase = (subtype_ : string,supertype : string) : TestCase =>  {
    return new TestCase(subtype_,supertype,{
        isSubtype : false});
};
export var makeSubtypeTester : (testcase : core.DartMap<string,core.DartList<string>>) => MockSubtypeTester = (testcase : core.DartMap<string,core.DartList<string>>) : MockSubtypeTester =>  {
    let environment : lib3.LazyTypeEnvironment = new lib3.LazyTypeEnvironment();
    let objectClass : any = environment.lookup('Object');
    let functionClass : any = environment.lookup('Function');
    functionClass.supertype = objectClass.asRawSupertype;
    for(let typeString of testcase.keys) {
        let type : any = environment.parseFresh(typeString);
        let class_ : any = type.classNode;
        for(let typeArg of type.typeArguments) {
            class_.typeParameters.add(typeArg.parameter);
        }
        for(let supertypeString of testcase.get(typeString)) {
            if (op(Op.EQUALS,class_.supertype,null)) {
                class_.supertype = environment.parseSuper(supertypeString);
            }else {
                class_.implementedTypes.add(environment.parseSuper(supertypeString));
            }
        }
    }
    let program = new bare.createInstance(any,null,{
        libraries : new core.DartList.literal(environment.dummyLibrary)});
    let hierarchy = new bare.createInstance(any,null,program);
    return new MockSubtypeTester(hierarchy,objectClass.rawType,functionClass.rawType,environment);
};
export var main : () => any = () =>  {
    let tester = makeSubtypeTester(properties.classEnvironment);
    let environment = tester.environment;
    for(let testCase of properties.testCases) {
        test(`${testCase}`,() =>  {
            let subtype = environment.parseFresh(testCase.subtype);
            let supertype = environment.parseFresh(testCase.supertype);
            if (tester.isSubtypeOf(subtype,supertype) != testCase.isSubtype) {
                fail(`isSubtypeOf(${testCase.subtype}, ${testCase.supertype}) returned ` + `${!testCase.isSubtype} but should return ${testCase.isSubtype}`);
            }
            if (subtype != supertype && tester.isSubtypeOf(supertype,subtype)) {
                fail(`isSubtypeOf(${testCase.supertype}, ${testCase.subtype}) returned ` + 'true but should return false');
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
    subtype : string;

    supertype : string;

    isSubtype : boolean;

    constructor(subtype : string,supertype : string,_namedArguments? : {isSubtype? : boolean}) {
    }
    @defaultConstructor
    TestCase(subtype : string,supertype : string,_namedArguments? : {isSubtype? : boolean}) {
        let {isSubtype} = Object.assign({
        }, _namedArguments );
        this.subtype = subtype;
        this.supertype = supertype;
        this.isSubtype = isSubtype;
    }
    toString() : string {
        return this.isSubtype ? `${this.subtype} <: ${this.supertype}` : `${this.subtype} </: ${this.supertype}`;
    }
}

export namespace MockSubtypeTester {
    export type Constructors = 'MockSubtypeTester';
    export type Interface = Omit<MockSubtypeTester, Constructors>;
}
@DartClass
export class MockSubtypeTester extends any {
    hierarchy : any;

    objectType : any;

    rawFunctionType : any;

    environment : lib3.LazyTypeEnvironment;

    constructor(hierarchy : any,objectType : any,rawFunctionType : any,environment : lib3.LazyTypeEnvironment) {
    }
    @defaultConstructor
    MockSubtypeTester(hierarchy : any,objectType : any,rawFunctionType : any,environment : lib3.LazyTypeEnvironment) {
        this.hierarchy = hierarchy;
        this.objectType = objectType;
        this.rawFunctionType = rawFunctionType;
        this.environment = environment;
    }
}

export class properties {
    private static __$classEnvironment;
    static get classEnvironment() { 
        if (this.__$classEnvironment===undefined) {
            this.__$classEnvironment = new core.DartMap.literal([
                ['Comparable<T>',new core.DartList.literal('Object')],
                ['num',new core.DartList.literal('Object','Comparable<num>')],
                ['int',new core.DartList.literal('num')],
                ['double',new core.DartList.literal('num')],
                ['Iterable<T>',new core.DartList.literal('Object')],
                ['List<T>',new core.DartList.literal('Iterable<T>')]]);
        }
        return this.__$classEnvironment;
    }
    static set classEnvironment(__$value : any)  { 
        this.__$classEnvironment = __$value;
    }

    private static __$testCases : core.DartList<TestCase>;
    static get testCases() : core.DartList<TestCase> { 
        if (this.__$testCases===undefined) {
            this.__$testCases = new core.DartList.literal<TestCase>(subtype('int','num'),subtype('int','Comparable<num>'),subtype('int','Comparable<Object>'),subtype('int','Object'),subtype('double','num'),notSubtype('int','double'),notSubtype('int','Comparable<int>'),notSubtype('int','Iterable<int>'),notSubtype('Comparable<int>','Iterable<int>'),subtype('List<int>','List<int>'),subtype('List<int>','Iterable<int>'),subtype('List<int>','List<num>'),subtype('List<int>','Iterable<num>'),subtype('List<int>','List<Object>'),subtype('List<int>','Iterable<Object>'),subtype('List<int>','Object'),subtype('List<int>','List<Comparable<Object>>'),subtype('List<int>','List<Comparable<num>>'),subtype('List<int>','List<Comparable<Comparable<num>>>'),notSubtype('List<int>','List<double>'),notSubtype('List<int>','Iterable<double>'),notSubtype('List<int>','Comparable<int>'),notSubtype('List<int>','List<Comparable<int>>'),notSubtype('List<int>','List<Comparable<Comparable<int>>>'),subtype('(num) => num','(int) => num'),subtype('(num) => int','(num) => num'),subtype('(num) => int','(int) => num'),notSubtype('(int) => int','(num) => num'),subtype('(num) => (num) => num','(num) => (int) => num'),notSubtype('(num) => (int) => int','(num) => (num) => num'),subtype('(x:num) => num','(x:int) => num'),subtype('(num,x:num) => num','(int,x:int) => num'),subtype('(x:num) => int','(x:num) => num'),notSubtype('(x:int) => int','(x:num) => num'),subtype('<E>(E) => int','<E>(E) => num'),subtype('<E>(num) => E','<E>(int) => E'),subtype('<E>(E,num) => E','<E>(E,int) => E'),notSubtype('<E>(E,num) => E','<E>(E,E) => E'),subtype('<E>(E) => (E) => E','<F>(F) => (F) => F'),subtype('<E>(E, (int,E) => E) => E','<E>(E, (int,E) => E) => E'),subtype('<E>(E, (int,E) => E) => E','<E>(E, (num,E) => E) => E'),notSubtype('<E,F>(E) => (F) => E','<E>(E) => <F>(F) => E'),notSubtype('<E,F>(E) => (F) => E','<F,E>(E) => (F) => E'),subtype('<E>(E,num) => E','<E:num>(E,E) => E'),subtype('<E:num>(E) => int','<E:int>(E) => int'),subtype('<E:num>(E) => E','<E:int>(E) => E'),subtype('<E:num>(int) => E','<E:int>(int) => E'),notSubtype('<E>(int) => int','(int) => int'),notSubtype('<E,F>(int) => int','<E>(int) => int'),subtype('<E:List<E>>(E) => E','<F:List<F>>(F) => F'),subtype('<E:Iterable<E>>(E) => E','<F:List<F>>(F) => F'),subtype('<E>(E,List<Object>) => E','<F:List<F>>(F,F) => F'),notSubtype('<E>(E,List<Object>) => List<E>','<F:List<F>>(F,F) => F'),notSubtype('<E>(E,List<Object>) => int','<F:List<F>>(F,F) => F'),subtype('<E>(E,List<Object>) => E','<F:List<F>>(F,F) => void'));
        }
        return this.__$testCases;
    }
    static set testCases(__$value : core.DartList<TestCase>)  { 
        this.__$testCases = __$value;
    }

}
