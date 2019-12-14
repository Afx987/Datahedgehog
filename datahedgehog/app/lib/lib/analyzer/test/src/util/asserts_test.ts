/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/util/asserts_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisTaskTest);
    });
};
export namespace AnalysisTaskTest {
    export type Constructors = 'AnalysisTaskTest';
    export type Interface = Omit<AnalysisTaskTest, Constructors>;
}
@DartClass
export class AnalysisTaskTest {
    test_notNull_notNull() : void {
        notNull(this);
    }
    test_notNull_null_hasDescription() : void {
        expect(() =>  {
            return notNull(null,'desc');
        },throwsArgumentError);
    }
    test_notNull_null_noDescription() : void {
        expect(() =>  {
            return notNull(null);
        },throwsArgumentError);
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisTaskTest() {
    }
}

export class properties {
}
