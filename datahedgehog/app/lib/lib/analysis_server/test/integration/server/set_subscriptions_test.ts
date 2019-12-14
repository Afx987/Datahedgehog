/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/server/set_subscriptions_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetSubscriptionsTest);
    });
};
export namespace SetSubscriptionsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'SetSubscriptionsTest';
    export type Interface = Omit<SetSubscriptionsTest, Constructors>;
}
@DartClass
export class SetSubscriptionsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_setSubscriptions() {
        fail('This test times out on the bots and has been disabled to keep them green.' + 'We need to discover the cause and re-enable it.');
        let statusReceived : boolean = false;
        let analysisBegun : async.DartCompleter<any> = new async.DartCompleter<any>();
        this.onServerStatus.listen((_ : any) =>  {
            statusReceived = true;
        });
        this.onAnalysisErrors.listen((_ : any) =>  {
            if (!analysisBegun.isCompleted) {
                analysisBegun.complete();
            }
        });
        return this.sendServerSetSubscriptions(new core.DartList.literal()).then((_ : any) =>  {
            let pathname : string = this.sourcePath('test.dart');
            this.writeFile(pathname,'main() {\n  var x;\n}');
            this.standardAnalysisSetup({
                subscribeStatus : false});
            return analysisBegun.future.then((_ : any) =>  {
                expect(statusReceived,isFalse);
                return this.sendServerSetSubscriptions(new core.DartList.literal(ServerService.STATUS)).then((_ : any) =>  {
                    this.writeFile(pathname,'main() {\n  var y;\n}');
                    return this.analysisFinished;
                });
            });
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetSubscriptionsTest() {
    }
}

export class properties {
}
