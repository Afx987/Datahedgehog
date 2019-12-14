/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/dart/element/element_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ElementKindTest);
    });
};
export namespace ElementKindTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ElementKindTest';
    export type Interface = Omit<ElementKindTest, Constructors>;
}
@DartClass
export class ElementKindTest extends lib3.EngineTestCase {
    test_of_nonNull() : void {
        expect(ElementKind.of(ElementFactory.classElement2("A")),same(ElementKind.CLASS));
    }
    test_of_null() : void {
        expect(ElementKind.of(null),same(ElementKind.ERROR));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementKindTest() {
    }
}

export class properties {
}
