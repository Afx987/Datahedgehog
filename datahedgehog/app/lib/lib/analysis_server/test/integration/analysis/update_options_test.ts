/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/update_options_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UpdateOptionsTest);
    });
};
export namespace UpdateOptionsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'UpdateOptionsTest';
    export type Interface = Omit<UpdateOptionsTest, Constructors>;
}
@DartClass
export class UpdateOptionsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_options() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            this.writeFile(pathname,'import \'dart:async\'; // unused\n\nclass Foo {\n  void bar() {}\n}\n');
            this.standardAnalysisSetup();
            await this.sendAnalysisUpdateOptions(((_) : any =>  {
                {
                    _.generateHints = false;
                    return _;
                }
            })(new bare.createInstance(any,null)));
            await this.sendAnalysisReanalyze();
            await this.analysisFinished;
            expect(this.getErrors(pathname),isEmpty);
            await this.sendAnalysisUpdateOptions(((_) : any =>  {
                {
                    _.generateHints = true;
                    return _;
                }
            })(new bare.createInstance(any,null)));
            await this.sendAnalysisReanalyze();
            await this.analysisFinished;
            expect(this.getErrors(pathname),hasLength(1));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UpdateOptionsTest() {
    }
}

export class properties {
}
