/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/analysis_options_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OptionsIntegrationTest);
    });
};
export namespace OptionsIntegrationTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'OptionsIntegrationTest';
    export type Interface = Omit<OptionsIntegrationTest, Constructors>;
}
@DartClass
export class OptionsIntegrationTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_option_warning_newOptionFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            fail('test timeout expected - #28868');
            let options : string = this.sourcePath(AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
            this.writeFile(options,'linter:\n  rules:\n    - camel_case_typo # :)\n');
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,options),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,options);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.location.file,options);
            expect(error.severity,AnalysisErrorSeverity.WARNING);
            expect(error.type,AnalysisErrorType.STATIC_WARNING);
            expect(error.location.offset,23);
            expect(error.location.length,new core.DartString('camel_case_typo').length);
            expect(error.location.startLine,3);
            expect(error.location.startColumn,7);
        } )());
    }

    test_option_warning_oldOptionFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            fail('test timeout expected - #28868');
            let options : string = this.sourcePath(AnalysisEngine.ANALYSIS_OPTIONS_FILE);
            this.writeFile(options,'linter:\n  rules:\n    - camel_case_typo # :)\n');
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,options),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,options);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.location.file,options);
            expect(error.severity,AnalysisErrorSeverity.WARNING);
            expect(error.type,AnalysisErrorType.STATIC_WARNING);
            expect(error.location.offset,23);
            expect(error.location.length,new core.DartString('camel_case_typo').length);
            expect(error.location.startLine,3);
            expect(error.location.startColumn,7);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OptionsIntegrationTest() {
    }
}

export class properties {
}
