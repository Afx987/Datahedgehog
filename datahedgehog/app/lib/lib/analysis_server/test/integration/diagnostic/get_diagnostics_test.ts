/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/diagnostic/get_diagnostics_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetDiagnosticsTest);
    });
};
export namespace GetDiagnosticsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetDiagnosticsTest';
    export type Interface = Omit<GetDiagnosticsTest, Constructors>;
}
@DartClass
export class GetDiagnosticsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_getDiagnostics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.standardAnalysisSetup();
            let result : any = await this.sendDiagnosticGetDiagnostics();
            expect(result.contexts,hasLength(1));
            let context : any = result.contexts.first;
            expect(context.name,isNotEmpty);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetDiagnosticsTest() {
    }
}

export class properties {
}
