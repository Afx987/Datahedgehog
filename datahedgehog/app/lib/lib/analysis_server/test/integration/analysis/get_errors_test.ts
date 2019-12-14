/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/get_errors_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetErrorsTest);
    });
};
export namespace GetErrorsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetErrorsTest';
    export type Interface = Omit<GetErrorsTest, Constructors>;
}
@DartClass
export class GetErrorsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_getErrors() {
        let pathname : string = this.sourcePath('test.dart');
        let text : string = 'main() {\n  var x // parse error: missing \';\'\n}';
        this.writeFile(pathname,text);
        this.standardAnalysisSetup();
        var finishTest : () => async.Future<any> = () : async.Future<any> =>  {
            return this.sendAnalysisGetErrors(pathname).then((result : any) =>  {
                expect(result.errors,equals(op(Op.INDEX,this.currentAnalysisErrors,pathname)));
            });
        };
        return this.analysisFinished.then((_ : any) =>  {
            return finishTest();
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetErrorsTest() {
    }
}

export class properties {
}
