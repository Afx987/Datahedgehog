/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/inputs_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConstantTaskInputBuilderTest);
        defineReflectiveTests(ConstantTaskInputTest);
        defineReflectiveTests(ListTaskInputImplTest);
        defineReflectiveTests(ListToListTaskInputTest);
        defineReflectiveTests(ListToListTaskInputBuilderTest);
        defineReflectiveTests(ListToMapTaskInputBuilderTest);
        defineReflectiveTests(ListToMapTaskInputTest);
        defineReflectiveTests(ObjectToListTaskInputBuilderTest);
        defineReflectiveTests(ObjectToListTaskInputTest);
        defineReflectiveTests(SimpleTaskInputTest);
        defineReflectiveTests(SimpleTaskInputBuilderTest);
        defineReflectiveTests(TopLevelTaskInputBuilderTest);
    });
};
export namespace ConstantTaskInputBuilderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ConstantTaskInputBuilderTest';
    export type Interface = Omit<ConstantTaskInputBuilderTest, Constructors>;
}
@DartClass
export class ConstantTaskInputBuilderTest extends lib3.EngineTestCase {
    private static __$value : number;
    static get value() : number { 
        if (this.__$value===undefined) {
            this.__$value = 7;
        }
        return this.__$value;
    }
    static set value(__$value : number)  { 
        this.__$value = __$value;
    }

    private static __$input : any;
    static get input() : any { 
        if (this.__$input===undefined) {
            this.__$input = new bare.createInstance(any,null,ConstantTaskInputBuilderTest.value);
        }
        return this.__$input;
    }
    static set input(__$value : any)  { 
        this.__$input = __$value;
    }

    builder : any;

    setUp() : void {
        super.setUp();
        this.builder = new bare.createInstance(any,null,ConstantTaskInputBuilderTest.input);
    }
    test_create() {
        expect(this.builder,isNotNull);
        expect(this.builder.input,ConstantTaskInputBuilderTest.input);
    }
    test_currentResult_afterOneMoveNext() {
        this.builder.moveNext();
        expect(this.builder.currentResult,null);
    }
    test_currentResult_beforeMoveNext() {
        expect(this.builder.currentResult,null);
    }
    test_currentTarget_afterOneMoveNext() {
        this.builder.moveNext();
        expect(this.builder.currentTarget,null);
    }
    test_currentTarget_beforeMoveNext() {
        expect(this.builder.currentTarget,null);
    }
    test_currentValue_afterOneMoveNext() {
        this.builder.moveNext();
        expect(() =>  {
            this.builder.currentValue = 'value';
        },throwsStateError);
    }
    test_currentValue_beforeMoveNext() {
        expect(() =>  {
            this.builder.currentValue = 'value';
        },throwsStateError);
    }
    test_currentValueNotAvailable_afterOneMoveNext() {
        this.builder.moveNext();
        expect(() =>  {
            this.builder.currentValueNotAvailable();
        },throwsStateError);
    }
    test_currentValueNotAvailable_beforeMoveNext() {
        expect(() =>  {
            this.builder.currentValueNotAvailable();
        },throwsStateError);
    }
    test_inputValue_afterOneMoveNext() {
        this.builder.moveNext();
        expect(this.builder.inputValue,ConstantTaskInputBuilderTest.value);
    }
    test_inputValue_beforeMoveNext() {
        expect(this.builder.inputValue,ConstantTaskInputBuilderTest.value);
    }
    test_moveNext() {
        expect(this.builder.moveNext(),false);
        expect(this.builder.moveNext(),false);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantTaskInputBuilderTest() {
    }
}

export namespace ConstantTaskInputTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ConstantTaskInputTest';
    export type Interface = Omit<ConstantTaskInputTest, Constructors>;
}
@DartClass
export class ConstantTaskInputTest extends lib3.EngineTestCase {
    test_create() {
        let value : number = 3;
        let input : any = new bare.createInstance(any,null,value);
        expect(input,isNotNull);
        expect(input.value,value);
    }
    test_createBuilder() {
        let input : any = new bare.createInstance(any,null,5);
        expect(input.createBuilder(),new bare.createInstance(any,null));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantTaskInputTest() {
    }
}

export namespace ListTaskInputImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ListTaskInputImplTest';
    export type Interface = Omit<ListTaskInputImplTest, Constructors>;
}
@DartClass
export class ListTaskInputImplTest extends lib3.EngineTestCase {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result1 : any;
    static get result1() : any { 
        if (this.__$result1===undefined) {
            this.__$result1 = new bare.createInstance(any,null,'result1',null);
        }
        return this.__$result1;
    }
    static set result1(__$value : any)  { 
        this.__$result1 = __$value;
    }

    private static __$result2;
    static get result2() { 
        if (this.__$result2===undefined) {
            this.__$result2 = new bare.createInstance(any,null,'result2',null);
        }
        return this.__$result2;
    }
    static set result2(__$value : any)  { 
        this.__$result2 = __$value;
    }

    test_create() {
        let input = new bare.createInstance(any,null,ListTaskInputImplTest.target,ListTaskInputImplTest.result1);
        expect(input,isNotNull);
        expect(input.target,ListTaskInputImplTest.target);
        expect(input.result,ListTaskInputImplTest.result1);
    }
    test_createBuilder() {
        let input = new bare.createInstance(any,null,ListTaskInputImplTest.target,ListTaskInputImplTest.result1);
        expect(input.createBuilder(),new bare.createInstance(any,null));
    }
    test_toList() {
        let input = new bare.createInstance(any,null,ListTaskInputImplTest.target,ListTaskInputImplTest.result1);
        let input2 : any = input.toList((target : any) =>  {
            return new bare.createInstance(any,null,target,null);
        });
        expect(input2,new bare.createInstance(any,null));
    }
    test_toListOf() {
        let input = new bare.createInstance(any,null,ListTaskInputImplTest.target,ListTaskInputImplTest.result1);
        let input2 : any = input.toListOf(ListTaskInputImplTest.result2);
        expect(input2,new bare.createInstance(any,null));
    }
    test_toMap() {
        let input = new bare.createInstance(any,null,ListTaskInputImplTest.target,ListTaskInputImplTest.result1);
        let input2 : any = input.toMap((target : any) =>  {
            return new bare.createInstance(any,null,target,null);
        });
        expect(input2,new bare.createInstance(any,null));
    }
    test_toMapOf() {
        let input = new bare.createInstance(any,null,ListTaskInputImplTest.target,ListTaskInputImplTest.result1);
        let input2 : any = input.toMapOf(ListTaskInputImplTest.result2);
        expect(input2,new bare.createInstance(any,null));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListTaskInputImplTest() {
    }
}

export namespace ListToListTaskInputBuilderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ListToListTaskInputBuilderTest';
    export type Interface = Omit<ListToListTaskInputBuilderTest, Constructors>;
}
@DartClass
export class ListToListTaskInputBuilderTest extends lib3.EngineTestCase {
    private static __$target1 : any;
    static get target1() : any { 
        if (this.__$target1===undefined) {
            this.__$target1 = new lib3.TestSource();
        }
        return this.__$target1;
    }
    static set target1(__$value : any)  { 
        this.__$target1 = __$value;
    }

    private static __$result1 : any;
    static get result1() : any { 
        if (this.__$result1===undefined) {
            this.__$result1 = new bare.createInstance(any,null,'result1',null);
        }
        return this.__$result1;
    }
    static set result1(__$value : any)  { 
        this.__$result1 = __$value;
    }

    private static __$result2 : any;
    static get result2() : any { 
        if (this.__$result2===undefined) {
            this.__$result2 = new bare.createInstance(any,null,'result2',null);
        }
        return this.__$result2;
    }
    static set result2(__$value : any)  { 
        this.__$result2 = __$value;
    }

    private static __$input : any;
    static get input() : any { 
        if (this.__$input===undefined) {
            this.__$input = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.result1.of(ListToListTaskInputBuilderTest.target1),(element : any) =>  {
                return ListToListTaskInputBuilderTest.result2.of(element);
            });
        }
        return this.__$input;
    }
    static set input(__$value : any)  { 
        this.__$input = __$value;
    }

    test_create() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(builder,isNotNull);
        expect(builder.input,ListToListTaskInputBuilderTest.input);
    }
    test_currentResult_afterComplete() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal();
        builder.moveNext();
        expect(builder.currentResult,null);
    }
    test_currentResult_afterCurrentValueNotAvailable() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        expect(builder.currentResult,null);
    }
    test_currentResult_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        expect(builder.currentResult,ListToListTaskInputBuilderTest.result1);
    }
    test_currentResult_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(builder.currentResult,null);
    }
    test_currentTarget_afterComplete() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal();
        builder.moveNext();
        expect(builder.currentTarget,null);
    }
    test_currentTarget_afterCurrentValueNotAvailable() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        expect(builder.currentTarget,null);
    }
    test_currentTarget_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        expect(builder.currentTarget,ListToListTaskInputBuilderTest.target1);
    }
    test_currentTarget_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(builder.currentTarget,null);
    }
    test_currentValue_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal();
    }
    test_currentValue_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(() =>  {
            builder.currentValue = new core.DartList.literal();
        },throwsStateError);
    }
    test_currentValueNotAvailable_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
    }
    test_currentValueNotAvailable_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(() =>  {
            builder.currentValueNotAvailable();
        },throwsStateError);
    }
    test_inputValue_afterComplete() {
        let target2 : any = new lib3.TestSource();
        let target3 : any = new lib3.TestSource();
        let value2 : string = 'value2';
        let value3 : string = 'value3';
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal(target2,target3);
        builder.moveNext();
        builder.currentValue = value2;
        builder.moveNext();
        builder.currentValue = value3;
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        let list : core.DartList<any> = inputValue;
        expect(list.length,2);
        expect(list[0],value2);
        expect(list[1],value3);
    }
    test_inputValue_afterFirstValueNotAvailable() {
        let target2 : any = new lib3.TestSource();
        let target3 : any = new lib3.TestSource();
        let value3 : string = 'value3';
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal(target2,target3);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        builder.currentValue = value3;
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        let list : core.DartList<any> = inputValue;
        expect(list,orderedEquals(new core.DartList.literal(value3)));
    }
    test_inputValue_afterListNotAvailable() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        let list : core.DartList<any> = inputValue;
        expect(list,isEmpty);
    }
    test_inputValue_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        builder.moveNext();
        expect(() =>  {
            return builder.inputValue;
        },throwsStateError);
    }
    test_inputValue_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(() =>  {
            return builder.inputValue;
        },throwsStateError);
    }
    test_moveNext_withoutSet() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(builder.moveNext(),true);
        expect(() =>  {
            return builder.moveNext();
        },throwsStateError);
    }
    test_moveNext_withSet() {
        let builder : any = new bare.createInstance(any,null,ListToListTaskInputBuilderTest.input);
        expect(builder.moveNext(),true);
        builder.currentValue = new core.DartList.literal();
        expect(builder.moveNext(),false);
        expect(builder.moveNext(),false);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToListTaskInputBuilderTest() {
    }
}

export namespace ListToListTaskInputTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ListToListTaskInputTest';
    export type Interface = Omit<ListToListTaskInputTest, Constructors>;
}
@DartClass
export class ListToListTaskInputTest extends lib3.EngineTestCase {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result : any;
    static get result() : any { 
        if (this.__$result===undefined) {
            this.__$result = new bare.createInstance(any,null,'result',null);
        }
        return this.__$result;
    }
    static set result(__$value : any)  { 
        this.__$result = __$value;
    }

    test_create() {
        let baseAccessor : any = ListToListTaskInputTest.result.of(ListToListTaskInputTest.target);
        let generate : any = (object : any) =>  {
        };
        let input : any = new bare.createInstance(any,null,baseAccessor,generate);
        expect(input,isNotNull);
        expect(input.baseAccessor,baseAccessor);
        expect(input.generateTaskInputs,equals(generate));
    }
    test_createBuilder() {
        let baseAccessor : any = ListToListTaskInputTest.result.of(ListToListTaskInputTest.target);
        let generate : any = (object : any) =>  {
        };
        let input : any = new bare.createInstance(any,null,baseAccessor,generate);
        expect(input.createBuilder(),isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToListTaskInputTest() {
    }
}

export namespace ListToMapTaskInputBuilderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ListToMapTaskInputBuilderTest';
    export type Interface = Omit<ListToMapTaskInputBuilderTest, Constructors>;
}
@DartClass
export class ListToMapTaskInputBuilderTest extends lib3.EngineTestCase {
    private static __$target1 : any;
    static get target1() : any { 
        if (this.__$target1===undefined) {
            this.__$target1 = new lib3.TestSource('target1');
        }
        return this.__$target1;
    }
    static set target1(__$value : any)  { 
        this.__$target1 = __$value;
    }

    private static __$result1 : any;
    static get result1() : any { 
        if (this.__$result1===undefined) {
            this.__$result1 = new bare.createInstance(any,null,'result1',null);
        }
        return this.__$result1;
    }
    static set result1(__$value : any)  { 
        this.__$result1 = __$value;
    }

    private static __$result2 : any;
    static get result2() : any { 
        if (this.__$result2===undefined) {
            this.__$result2 = new bare.createInstance(any,null,'result2',null);
        }
        return this.__$result2;
    }
    static set result2(__$value : any)  { 
        this.__$result2 = __$value;
    }

    private static __$input : any;
    static get input() : any { 
        if (this.__$input===undefined) {
            this.__$input = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.result1.of(ListToMapTaskInputBuilderTest.target1),(element : any) =>  {
                return ListToMapTaskInputBuilderTest.result2.of(element);
            });
        }
        return this.__$input;
    }
    static set input(__$value : any)  { 
        this.__$input = __$value;
    }

    test_create() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(builder,isNotNull);
        expect(builder.input,ListToMapTaskInputBuilderTest.input);
    }
    test_currentResult_afterComplete() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal();
        builder.moveNext();
        expect(builder.currentResult,null);
    }
    test_currentResult_afterCurrentValueNotAvailable() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        expect(builder.currentResult,null);
    }
    test_currentResult_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        expect(builder.currentResult,ListToMapTaskInputBuilderTest.result1);
    }
    test_currentResult_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(builder.currentResult,null);
    }
    test_currentTarget_afterComplete() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal();
        builder.moveNext();
        expect(builder.currentTarget,null);
    }
    test_currentTarget_afterCurrentValueNotAvailable() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        expect(builder.currentTarget,null);
    }
    test_currentTarget_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        expect(builder.currentTarget,ListToMapTaskInputBuilderTest.target1);
    }
    test_currentTarget_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(builder.currentTarget,null);
    }
    test_currentValue_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal();
    }
    test_currentValue_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(() =>  {
            builder.currentValue = new core.DartList.literal();
        },throwsStateError);
    }
    test_currentValueNotAvailable_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
    }
    test_currentValueNotAvailable_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(() =>  {
            builder.currentValueNotAvailable();
        },throwsStateError);
    }
    test_inputValue_afterComplete() {
        let target2 : any = new lib3.TestSource('target2');
        let target3 : any = new lib3.TestSource('target3');
        let value2 : string = 'value2';
        let value3 : string = 'value3';
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal(target2,target3);
        builder.moveNext();
        builder.currentValue = value2;
        builder.moveNext();
        builder.currentValue = value3;
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        expect(inputValue.length,2);
        expect(inputValue,containsPair(target2,value2));
        expect(inputValue,containsPair(target3,value3));
    }
    test_inputValue_afterFirstValueNotAvailable() {
        let target2 : any = new lib3.TestSource('target2');
        let target3 : any = new lib3.TestSource('target3');
        let value3 : string = 'value3';
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValue = new core.DartList.literal(target2,target3);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        builder.currentValue = value3;
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        expect(inputValue,hasLength(1));
        expect(inputValue,containsPair(target3,value3));
    }
    test_inputValue_afterListNotAvailable() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        expect(inputValue,isEmpty);
    }
    test_inputValue_afterOneMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        builder.moveNext();
        expect(() =>  {
            return builder.inputValue;
        },throwsStateError);
    }
    test_inputValue_beforeMoveNext() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(() =>  {
            return builder.inputValue;
        },throwsStateError);
    }
    test_moveNext_withoutSet() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(builder.moveNext(),true);
        expect(() =>  {
            return builder.moveNext();
        },throwsStateError);
    }
    test_moveNext_withSet() {
        let builder : any = new bare.createInstance(any,null,ListToMapTaskInputBuilderTest.input);
        expect(builder.moveNext(),true);
        builder.currentValue = new core.DartList.literal();
        expect(builder.moveNext(),false);
        expect(builder.moveNext(),false);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToMapTaskInputBuilderTest() {
    }
}

export namespace ListToMapTaskInputTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ListToMapTaskInputTest';
    export type Interface = Omit<ListToMapTaskInputTest, Constructors>;
}
@DartClass
export class ListToMapTaskInputTest extends lib3.EngineTestCase {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result : any;
    static get result() : any { 
        if (this.__$result===undefined) {
            this.__$result = new bare.createInstance(any,null,'result',null);
        }
        return this.__$result;
    }
    static set result(__$value : any)  { 
        this.__$result = __$value;
    }

    test_create() {
        let baseAccessor : any = ListToMapTaskInputTest.result.of(ListToMapTaskInputTest.target);
        let generate : any = (object : any) =>  {
        };
        let input : any = new bare.createInstance(any,null,baseAccessor,generate);
        expect(input,isNotNull);
        expect(input.baseAccessor,baseAccessor);
        expect(input.generateTaskInputs,equals(generate));
    }
    test_createBuilder() {
        let baseAccessor : any = ListToMapTaskInputTest.result.of(ListToMapTaskInputTest.target);
        let generate : any = (object : any) =>  {
        };
        let input : any = new bare.createInstance(any,null,baseAccessor,generate);
        expect(input.createBuilder(),isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToMapTaskInputTest() {
    }
}

export namespace ObjectToListTaskInputBuilderTest {
    export type Constructors = 'ObjectToListTaskInputBuilderTest';
    export type Interface = Omit<ObjectToListTaskInputBuilderTest, Constructors>;
}
@DartClass
export class ObjectToListTaskInputBuilderTest {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result : any;
    static get result() : any { 
        if (this.__$result===undefined) {
            this.__$result = new bare.createInstance(any,null,'result',null);
        }
        return this.__$result;
    }
    static set result(__$value : any)  { 
        this.__$result = __$value;
    }

    private static __$baseInput : any;
    static get baseInput() : any { 
        if (this.__$baseInput===undefined) {
            this.__$baseInput = new bare.createInstance(any,null,ObjectToListTaskInputBuilderTest.target,ObjectToListTaskInputBuilderTest.result);
        }
        return this.__$baseInput;
    }
    static set baseInput(__$value : any)  { 
        this.__$baseInput = __$value;
    }

    private static __$mapper;
    static get mapper() { 
        if (this.__$mapper===undefined) {
            this.__$mapper = (x : core.DartObject) =>  {
                return new core.DartList.literal(x);
            };
        }
        return this.__$mapper;
    }
    static set mapper(__$value : any)  { 
        this.__$mapper = __$value;
    }

    private static __$input : any;
    static get input() : any { 
        if (this.__$input===undefined) {
            this.__$input = new bare.createInstance(any,null,ObjectToListTaskInputBuilderTest.baseInput,ObjectToListTaskInputBuilderTest.mapper);
        }
        return this.__$input;
    }
    static set input(__$value : any)  { 
        this.__$input = __$value;
    }

    builder : any;

    setUp() : void {
        this.builder = new bare.createInstance(any,null,ObjectToListTaskInputBuilderTest.input);
    }
    test_create() {
        expect(this.builder,isNotNull);
        expect(this.builder.input,ObjectToListTaskInputBuilderTest.input);
    }
    test_currentResult_afterComplete() {
        this.builder.moveNext();
        this.builder.currentValue = 'value';
        this.builder.moveNext();
        expect(this.builder.currentResult,null);
    }
    test_currentResult_afterCurrentValueNotAvailable() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
        this.builder.moveNext();
        expect(this.builder.currentResult,null);
    }
    test_currentResult_afterOneMoveNext() {
        this.builder.moveNext();
        expect(this.builder.currentResult,ObjectToListTaskInputBuilderTest.result);
    }
    test_currentResult_beforeMoveNext() {
        expect(this.builder.currentResult,null);
    }
    test_currentTarget_afterComplete() {
        this.builder.moveNext();
        this.builder.currentValue = 'value';
        this.builder.moveNext();
        expect(this.builder.currentTarget,null);
    }
    test_currentTarget_afterCurrentValueNotAvailable() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
        this.builder.moveNext();
        expect(this.builder.currentTarget,null);
    }
    test_currentTarget_afterOneMoveNext() {
        this.builder.moveNext();
        expect(this.builder.currentTarget,ObjectToListTaskInputBuilderTest.target);
    }
    test_currentTarget_beforeMoveNext() {
        expect(this.builder.currentTarget,null);
    }
    test_currentValue_afterOneMoveNext() {
        this.builder.moveNext();
        this.builder.currentValue = 'value';
    }
    test_currentValue_beforeMoveNext() {
        expect(() =>  {
            this.builder.currentValue = 'value';
        },throwsStateError);
    }
    test_currentValueNotAvailable_afterOneMoveNext() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
    }
    test_currentValueNotAvailable_beforeMoveNext() {
        expect(() =>  {
            this.builder.currentValueNotAvailable();
        },throwsStateError);
    }
    test_inputValue_afterComplete() {
        this.builder.moveNext();
        let value : string = 'value';
        this.builder.currentValue = value;
        this.builder.moveNext();
        expect(this.builder.inputValue,new core.DartList.literal(value));
    }
    test_inputValue_afterCurrentValueNotAvailable() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
        this.builder.moveNext();
        expect(this.builder.inputValue,new core.DartList.literal(null));
    }
    test_inputValue_afterOneMoveNext() {
        this.builder.moveNext();
        expect(() =>  {
            return this.builder.inputValue;
        },throwsStateError);
    }
    test_inputValue_beforeMoveNext() {
        expect(() =>  {
            return this.builder.inputValue;
        },throwsStateError);
    }
    test_moveNext_withoutSet() {
        expect(this.builder.moveNext(),true);
        expect(() =>  {
            return this.builder.moveNext();
        },throwsStateError);
    }
    test_moveNext_withSet() {
        expect(this.builder.moveNext(),true);
        this.builder.currentValue = 'value';
        expect(this.builder.moveNext(),false);
        expect(this.builder.moveNext(),false);
    }
    constructor() {
    }
    @defaultConstructor
    ObjectToListTaskInputBuilderTest() {
    }
}

export namespace ObjectToListTaskInputTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ObjectToListTaskInputTest';
    export type Interface = Omit<ObjectToListTaskInputTest, Constructors>;
}
@DartClass
export class ObjectToListTaskInputTest extends lib3.EngineTestCase {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result : any;
    static get result() : any { 
        if (this.__$result===undefined) {
            this.__$result = new bare.createInstance(any,null,'result',null);
        }
        return this.__$result;
    }
    static set result(__$value : any)  { 
        this.__$result = __$value;
    }

    test_create() {
        let baseInput : any = new bare.createInstance(any,null,ObjectToListTaskInputTest.target,ObjectToListTaskInputTest.result);
        let mapper = (x : core.DartObject) =>  {
            return new core.DartList.literal(x);
        };
        let input : any = new bare.createInstance(any,null,baseInput,mapper);
        expect(input,isNotNull);
        expect(input.baseInput,baseInput);
        expect(input.mapper,equals(mapper));
    }
    test_createBuilder() {
        let baseInput : any = new bare.createInstance(any,null,ObjectToListTaskInputTest.target,ObjectToListTaskInputTest.result);
        let mapper = (x : core.DartObject) =>  {
            return new core.DartList.literal(x);
        };
        let input : any = new bare.createInstance(any,null,baseInput,mapper);
        expect(input.createBuilder(),new bare.createInstance(any,null));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObjectToListTaskInputTest() {
    }
}

export namespace SimpleTaskInputBuilderTest {
    export type Constructors = 'SimpleTaskInputBuilderTest';
    export type Interface = Omit<SimpleTaskInputBuilderTest, Constructors>;
}
@DartClass
export class SimpleTaskInputBuilderTest {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result : any;
    static get result() : any { 
        if (this.__$result===undefined) {
            this.__$result = new bare.createInstance(any,null,'result',null);
        }
        return this.__$result;
    }
    static set result(__$value : any)  { 
        this.__$result = __$value;
    }

    private static __$input : any;
    static get input() : any { 
        if (this.__$input===undefined) {
            this.__$input = new bare.createInstance(any,null,SimpleTaskInputBuilderTest.target,SimpleTaskInputBuilderTest.result);
        }
        return this.__$input;
    }
    static set input(__$value : any)  { 
        this.__$input = __$value;
    }

    builder : any;

    setUp() : void {
        this.builder = new bare.createInstance(any,null,SimpleTaskInputBuilderTest.input);
    }
    test_create() {
        expect(this.builder,isNotNull);
        expect(this.builder.input,SimpleTaskInputBuilderTest.input);
    }
    test_currentResult_afterComplete() {
        this.builder.moveNext();
        this.builder.currentValue = 'value';
        this.builder.moveNext();
        expect(this.builder.currentResult,null);
    }
    test_currentResult_afterCurrentValueNotAvailable() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
        this.builder.moveNext();
        expect(this.builder.currentResult,null);
    }
    test_currentResult_afterOneMoveNext() {
        this.builder.moveNext();
        expect(this.builder.currentResult,SimpleTaskInputBuilderTest.result);
    }
    test_currentResult_beforeMoveNext() {
        expect(this.builder.currentResult,null);
    }
    test_currentTarget_afterComplete() {
        this.builder.moveNext();
        this.builder.currentValue = 'value';
        this.builder.moveNext();
        expect(this.builder.currentTarget,null);
    }
    test_currentTarget_afterCurrentValueNotAvailable() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
        this.builder.moveNext();
        expect(this.builder.currentTarget,null);
    }
    test_currentTarget_afterOneMoveNext() {
        this.builder.moveNext();
        expect(this.builder.currentTarget,SimpleTaskInputBuilderTest.target);
    }
    test_currentTarget_beforeMoveNext() {
        expect(this.builder.currentTarget,null);
    }
    test_currentValue_afterOneMoveNext() {
        this.builder.moveNext();
        this.builder.currentValue = 'value';
    }
    test_currentValue_beforeMoveNext() {
        expect(() =>  {
            this.builder.currentValue = 'value';
        },throwsStateError);
    }
    test_currentValueNotAvailable_afterOneMoveNext() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
    }
    test_currentValueNotAvailable_beforeMoveNext() {
        expect(() =>  {
            this.builder.currentValueNotAvailable();
        },throwsStateError);
    }
    test_inputValue_afterComplete() {
        this.builder.moveNext();
        let value : string = 'value';
        this.builder.currentValue = value;
        this.builder.moveNext();
        expect(this.builder.inputValue,value);
    }
    test_inputValue_afterCurrentValueNotAvailable() {
        this.builder.moveNext();
        this.builder.currentValueNotAvailable();
        this.builder.moveNext();
        expect(this.builder.inputValue,isNull);
    }
    test_inputValue_afterOneMoveNext() {
        this.builder.moveNext();
        expect(() =>  {
            return this.builder.inputValue;
        },throwsStateError);
    }
    test_inputValue_beforeMoveNext() {
        expect(() =>  {
            return this.builder.inputValue;
        },throwsStateError);
    }
    test_moveNext_withoutSet() {
        expect(this.builder.moveNext(),true);
        expect(() =>  {
            return this.builder.moveNext();
        },throwsStateError);
    }
    test_moveNext_withSet() {
        expect(this.builder.moveNext(),true);
        this.builder.currentValue = 'value';
        expect(this.builder.moveNext(),false);
        expect(this.builder.moveNext(),false);
    }
    constructor() {
    }
    @defaultConstructor
    SimpleTaskInputBuilderTest() {
    }
}

export namespace SimpleTaskInputTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'SimpleTaskInputTest';
    export type Interface = Omit<SimpleTaskInputTest, Constructors>;
}
@DartClass
export class SimpleTaskInputTest extends lib3.EngineTestCase {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result : any;
    static get result() : any { 
        if (this.__$result===undefined) {
            this.__$result = new bare.createInstance(any,null,'result',null);
        }
        return this.__$result;
    }
    static set result(__$value : any)  { 
        this.__$result = __$value;
    }

    test_create() {
        let input : any = new bare.createInstance(any,null,SimpleTaskInputTest.target,SimpleTaskInputTest.result);
        expect(input,isNotNull);
        expect(input.target,SimpleTaskInputTest.target);
        expect(input.result,SimpleTaskInputTest.result);
    }
    test_createBuilder() {
        let input : any = new bare.createInstance(any,null,SimpleTaskInputTest.target,SimpleTaskInputTest.result);
        expect(input.createBuilder(),new bare.createInstance(any,null));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleTaskInputTest() {
    }
}

export namespace TopLevelTaskInputBuilderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'TopLevelTaskInputBuilderTest';
    export type Interface = Omit<TopLevelTaskInputBuilderTest, Constructors>;
}
@DartClass
export class TopLevelTaskInputBuilderTest extends lib3.EngineTestCase {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new lib3.TestSource();
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

    private static __$result1 : any;
    static get result1() : any { 
        if (this.__$result1===undefined) {
            this.__$result1 = new bare.createInstance(any,null,'result1',null);
        }
        return this.__$result1;
    }
    static set result1(__$value : any)  { 
        this.__$result1 = __$value;
    }

    private static __$result2 : any;
    static get result2() : any { 
        if (this.__$result2===undefined) {
            this.__$result2 = new bare.createInstance(any,null,'result2',null);
        }
        return this.__$result2;
    }
    static set result2(__$value : any)  { 
        this.__$result2 = __$value;
    }

    private static __$input1 : any;
    static get input1() : any { 
        if (this.__$input1===undefined) {
            this.__$input1 = new bare.createInstance(any,null,TopLevelTaskInputBuilderTest.target,TopLevelTaskInputBuilderTest.result1);
        }
        return this.__$input1;
    }
    static set input1(__$value : any)  { 
        this.__$input1 = __$value;
    }

    private static __$input2 : any;
    static get input2() : any { 
        if (this.__$input2===undefined) {
            this.__$input2 = new bare.createInstance(any,null,TopLevelTaskInputBuilderTest.target,TopLevelTaskInputBuilderTest.result2);
        }
        return this.__$input2;
    }
    static set input2(__$value : any)  { 
        this.__$input2 = __$value;
    }

    test_create() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(builder,isNotNull);
        expect(builder.inputDescriptors,inputDescriptors);
    }
    test_currentResult_afterComplete() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValue = 'value1';
        builder.moveNext();
        expect(builder.currentResult,null);
    }
    test_currentResult_afterCurrentValueNotAvailable() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        expect(builder.currentResult,null);
    }
    test_currentResult_afterOneMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1],
            ['two',TopLevelTaskInputBuilderTest.input2]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        expect(builder.currentResult,TopLevelTaskInputBuilderTest.result1);
    }
    test_currentResult_afterTwoMoveNext_withConstantInput() {
        let constantInput : any = new bare.createInstance(any,null,11);
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1],
            ['constant',constantInput],
            ['two',TopLevelTaskInputBuilderTest.input2]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValue = 'value1';
        builder.moveNext();
        expect(builder.currentResult,TopLevelTaskInputBuilderTest.result2);
    }
    test_currentResult_beforeMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(builder.currentResult,null);
    }
    test_currentTarget_afterComplete() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValue = 'value1';
        builder.moveNext();
        expect(builder.currentTarget,null);
    }
    test_currentTarget_afterCurrentValueNotAvailable() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        expect(builder.currentTarget,null);
    }
    test_currentTarget_afterOneMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        expect(builder.currentTarget,TopLevelTaskInputBuilderTest.target);
    }
    test_currentTarget_afterTwoMoveNext_withConstantInput() {
        let constantInput : any = new bare.createInstance(any,null,11);
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1],
            ['constant',constantInput],
            ['two',TopLevelTaskInputBuilderTest.input2]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValue = 'value1';
        builder.moveNext();
        expect(builder.currentTarget,TopLevelTaskInputBuilderTest.target);
    }
    test_currentTarget_beforeMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(builder.currentTarget,null);
    }
    test_currentValue_afterOneMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValue = 'value1';
    }
    test_currentValue_beforeMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(() =>  {
            builder.currentValue = 'value1';
        },throwsStateError);
    }
    test_currentValueNotAvailable_afterOneMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValueNotAvailable();
    }
    test_currentValueNotAvailable_beforeMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(() =>  {
            builder.currentValueNotAvailable();
        },throwsStateError);
    }
    test_inputValue_afterComplete() {
        let key1 : string = 'one';
        let key2 : string = 'two';
        let value1 : string = 'value1';
        let value2 : string = 'value2';
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            [key1,TopLevelTaskInputBuilderTest.input1],
            [key2,TopLevelTaskInputBuilderTest.input2]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValue = value1;
        builder.moveNext();
        builder.currentValue = value2;
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        let inputs : core.DartMap<any,any> = inputValue;
        expect(inputs.length,2);
        expect(inputs,containsPair(key1,value1));
        expect(inputs,containsPair(key2,value2));
    }
    test_inputValue_afterOneMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        expect(() =>  {
            return builder.inputValue;
        },throwsStateError);
    }
    test_inputValue_afterOneValueNotAvailable() {
        let key1 : string = 'one';
        let key2 : string = 'two';
        let value2 : string = 'value2';
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            [key1,TopLevelTaskInputBuilderTest.input1],
            [key2,TopLevelTaskInputBuilderTest.input2]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        builder.moveNext();
        builder.currentValueNotAvailable();
        builder.moveNext();
        builder.currentValue = value2;
        builder.moveNext();
        let inputValue = builder.inputValue;
        expect(inputValue,new bare.createInstance(any,null));
        let inputs : core.DartMap<any,any> = inputValue;
        expect(inputs,hasLength(1));
        expect(inputs,containsPair(key2,value2));
    }
    test_inputValue_beforeMoveNext() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(() =>  {
            return builder.inputValue;
        },throwsStateError);
    }
    test_moveNext_withoutSet() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(builder.moveNext(),true);
        expect(() =>  {
            return builder.moveNext();
        },throwsStateError);
    }
    test_moveNext_withSet() {
        let inputDescriptors : core.DartMap<string,any> = new core.DartMap.literal([
            ['one',TopLevelTaskInputBuilderTest.input1]]);
        let builder : any = new bare.createInstance(any,null,inputDescriptors);
        expect(builder.moveNext(),true);
        builder.currentValue = 'value1';
        expect(builder.moveNext(),false);
        expect(builder.moveNext(),false);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelTaskInputBuilderTest() {
    }
}

export class properties {
}
