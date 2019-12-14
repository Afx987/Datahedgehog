/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/reanalyze_concurrent_test.dart */
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
    test_reanalyze_concurrent() {
        let pathname : string = this.sourcePath('test.dart');
        let text : string = '// Do a bunch of imports so that analysis has some work to do.\nimport \'dart:io\';\nimport \'dart:convert\';\nimport \'dart:async\';\n\nmain() {}';
        this.writeFile(pathname,text);
        this.standardAnalysisSetup();
        return this.analysisFinished.then((_ : any) =>  {
            this.sendAnalysisReanalyze();
            return this.onServerStatus.first.then((_ : any) =>  {
                this.sendAnalysisReanalyze();
                return this.analysisFinished.then((_ : any) =>  {
                    return new async.Future.delayed(new core.DartDuration({
                        seconds : 1}));
                });
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
