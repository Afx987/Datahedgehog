/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/lint_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LintIntegrationTest);
    });
};
export namespace LintIntegrationTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'LintIntegrationTest';
    export type Interface = Omit<LintIntegrationTest, Constructors>;
}
@DartClass
export class LintIntegrationTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_no_lints_when_not_specified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : string = this.sourcePath('test.dart');
            this.writeFile(source,'class abc { // lint: not CamelCase (should get ignored though)\n}');
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,source),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,source);
            expect(errors,hasLength(0));
        } )());
    }

    test_simple_lint_newOptionsFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile(this.sourcePath(AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE),'linter:\n  rules:\n    - camel_case_types\n');
            let source : string = this.sourcePath('test.dart');
            this.writeFile(source,'class a { // lint: not CamelCase\n}');
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,source),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,source);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.location.file,source);
            expect(error.severity,AnalysisErrorSeverity.INFO);
            expect(error.type,AnalysisErrorType.LINT);
        } )());
    }

    test_simple_lint_oldOptionsFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile(this.sourcePath(AnalysisEngine.ANALYSIS_OPTIONS_FILE),'linter:\n  rules:\n    - camel_case_types\n');
            let source : string = this.sourcePath('test.dart');
            this.writeFile(source,'class a { // lint: not CamelCase\n}');
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,source),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,source);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.location.file,source);
            expect(error.severity,AnalysisErrorSeverity.INFO);
            expect(error.type,AnalysisErrorType.LINT);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LintIntegrationTest() {
    }
}

export class properties {
}
