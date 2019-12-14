/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/server/status_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StatusTest);
    });
};
export namespace StatusTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'StatusTest';
    export type Interface = Omit<StatusTest, Constructors>;
}
@DartClass
export class StatusTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_status() {
        let analysisBegun : async.DartCompleter<any> = new async.DartCompleter<any>();
        let analysisFinished : async.DartCompleter<any> = new async.DartCompleter<any>();
        this.onServerStatus.listen((params : any) =>  {
            if (params.analysis != null) {
                if (params.analysis.isAnalyzing) {
                    expect(analysisBegun.isCompleted,isFalse);
                    analysisBegun.complete();
                }else {
                    expect(analysisFinished.isCompleted,isFalse);
                    analysisFinished.complete();
                }
            }
        });
        this.writeFile(this.sourcePath('test.dart'),'main() {\n  var x;\n}');
        this.standardAnalysisSetup();
        expect(analysisBegun.isCompleted,isFalse);
        expect(analysisFinished.isCompleted,isFalse);
        return analysisBegun.future.then((_ : any) =>  {
            expect(analysisFinished.isCompleted,isFalse);
            return analysisFinished.future;
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatusTest() {
    }
}

export class properties {
}
