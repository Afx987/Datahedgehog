/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/set_priority_files_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetPriorityFilesTest);
    });
};
export namespace SetPriorityFilesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'SetPriorityFilesTest';
    export type Interface = Omit<SetPriorityFilesTest, Constructors>;
}
@DartClass
export class SetPriorityFilesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_options() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('foo.dart');
            this.writeFile(pathname,'class Foo { void baz() {} }');
            this.writeFile(this.sourcePath('bar.dart'),'class Bar { void baz() {} }');
            this.standardAnalysisSetup();
            await this.sendAnalysisSetPriorityFiles(new core.DartList.literal(pathname));
            let status : any = await this.analysisFinished;
            expect(status.analysis.isAnalyzing,false);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetPriorityFilesTest() {
    }
}

export class properties {
}
