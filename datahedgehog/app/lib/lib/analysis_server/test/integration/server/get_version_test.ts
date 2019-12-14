/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/server/get_version_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetVersionTest);
    });
};
export namespace GetVersionTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetVersionTest';
    export type Interface = Omit<GetVersionTest, Constructors>;
}
@DartClass
export class GetVersionTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_getVersion() {
        return this.sendServerGetVersion();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetVersionTest() {
    }
}

export class properties {
}
