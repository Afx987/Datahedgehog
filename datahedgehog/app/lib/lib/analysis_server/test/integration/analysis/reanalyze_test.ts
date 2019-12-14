/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/reanalyze_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ReanalyzeTest);
    });
};
export namespace ReanalyzeTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'ReanalyzeTest';
    export type Interface = Omit<ReanalyzeTest, Constructors>;
}
@DartClass
export class ReanalyzeTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_reanalyze() {
        let pathname : string = this.sourcePath('test.dart');
        let text : string = 'main() {}';
        this.writeFile(pathname,text);
        this.standardAnalysisSetup();
        return this.analysisFinished.then((_ : any) =>  {
            let analysisRestarted : boolean = false;
            this.onServerStatus.listen((data : any) =>  {
                if (data.analysis != null) {
                    if (data.analysis.isAnalyzing) {
                        analysisRestarted = true;
                    }
                }
            });
            this.sendAnalysisReanalyze();
            return this.analysisFinished.then((_ : any) =>  {
                expect(analysisRestarted,isTrue);
            });
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReanalyzeTest() {
    }
}

export class properties {
}
