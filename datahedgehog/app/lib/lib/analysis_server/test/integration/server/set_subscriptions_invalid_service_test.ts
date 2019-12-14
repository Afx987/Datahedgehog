/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/server/set_subscriptions_invalid_service_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetSubscriptionsInvalidTest);
    });
};
export namespace SetSubscriptionsInvalidTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'SetSubscriptionsInvalidTest';
    export type Interface = Omit<SetSubscriptionsInvalidTest, Constructors>;
}
@DartClass
export class SetSubscriptionsInvalidTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_setSubscriptions_invalidService() {
        return this.server.send("server.setSubscriptions",new core.DartMap.literal([
            ['subscriptions',new core.DartList.literal('bogus')]])).then((_ : any) =>  {
            fail('setSubscriptions should have produced an error');
        },{
            onError : (error : any) =>  {
            }});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetSubscriptionsInvalidTest() {
    }
}

export class properties {
}
