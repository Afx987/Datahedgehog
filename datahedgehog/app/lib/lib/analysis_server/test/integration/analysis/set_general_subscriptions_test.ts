/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/set_general_subscriptions_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetGeneralSubscriptionsTest);
    });
};
export namespace SetGeneralSubscriptionsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'SetGeneralSubscriptionsTest';
    export type Interface = Omit<SetGeneralSubscriptionsTest, Constructors>;
}
@DartClass
export class SetGeneralSubscriptionsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_options() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            this.writeFile(pathname,'class Foo {\n  void bar() {}\n}\n');
            this.standardAnalysisSetup();
            await this.sendAnalysisSetGeneralSubscriptions(new core.DartList.literal(GeneralAnalysisService.ANALYZED_FILES));
            await this.analysisFinished;
            expect(this.lastAnalyzedFiles,isNotEmpty);
            expect(this.lastAnalyzedFiles,contains(pathname));
            expect(this.lastAnalyzedFiles.any((file : string) =>  {
                return new core.DartString(file).endsWith('core/core.dart');
            }),true);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetGeneralSubscriptionsTest() {
    }
}

export class properties {
}
