/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/server/shutdown_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ShutdownTest);
    });
};
export namespace ShutdownTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'ShutdownTest';
    export type Interface = Omit<ShutdownTest, Constructors>;
}
@DartClass
export class ShutdownTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_shutdown() {
        return this.sendServerShutdown().then((_ : any) =>  {
            return new async.Future.delayed(new core.DartDuration({
                seconds : 1})).then((_ : any) =>  {
                this.sendServerGetVersion().then((_ : any) =>  {
                    fail('Server still alive after server.shutdown');
                });
                return new async.Future.delayed(new core.DartDuration({
                    seconds : 1}));
            });
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShutdownTest() {
    }
}

export class properties {
}
