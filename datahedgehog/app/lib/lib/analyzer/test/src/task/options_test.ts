/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/options_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../context/abstract_context";
import * as lib4 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ContextConfigurationTest);
        defineReflectiveTests(GenerateNewOptionsErrorsTaskTest);
        defineReflectiveTests(GenerateOldOptionsErrorsTaskTest);
        defineReflectiveTests(OptionsFileValidatorTest);
    });
};
export namespace ContextConfigurationTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'ContextConfigurationTest';
    export type Interface = Omit<ContextConfigurationTest, Constructors>;
}
@DartClass
export class ContextConfigurationTest extends lib3.AbstractContextTest {
    optionsProvider : any;

    get analysisOptions() : any {
        return this.context.analysisOptions;
    }
    configureContext(optionsSource : string) {
        return applyToAnalysisOptions(this.analysisOptions,this.parseOptions(optionsSource));
    }
    parseOptions(source : string) : core.DartMap<string,any> {
        return this.optionsProvider.getOptionsFromString(source);
    }
    test_configure_bad_options_contents() {
        this.configureContext('analyzer:\n  strong-mode:true # misformatted\n');
        expect(this.analysisOptions.strongMode,false);
    }
    test_configure_enableLazyAssignmentOperators() {
        expect(this.analysisOptions.enableStrictCallChecks,false);
        this.configureContext('analyzer:\n  language:\n    enableStrictCallChecks: true\n');
        expect(this.analysisOptions.enableStrictCallChecks,true);
    }
    test_configure_enableStrictCallChecks() {
        this.configureContext('analyzer:\n  language:\n    enableStrictCallChecks: true\n');
        expect(this.analysisOptions.enableStrictCallChecks,true);
    }
    test_configure_enableSuperMixins() {
        this.configureContext('analyzer:\n  language:\n    enableSuperMixins: true\n');
        expect(this.analysisOptions.enableSuperMixins,true);
    }
    test_configure_error_processors() {
        this.configureContext('analyzer:\n  errors:\n    invalid_assignment: ignore\n    unused_local_variable: error\n');
        let processors : core.DartList<any> = this.analysisOptions.errorProcessors;
        expect(processors,hasLength(2));
        let unused_local = new bare.createInstance(any,null,new lib4.TestSource(),0,1,HintCode.UNUSED_LOCAL_VARIABLE,new core.DartList.literal(new core.DartList.literal('x')));
        let invalid_assignment = new bare.createInstance(any,null,new lib4.TestSource(),0,1,HintCode.INVALID_ASSIGNMENT,new core.DartList.literal(new core.DartList.literal('x'),new core.DartList.literal('y')));
        let invalidAssignment = processors.firstWhere((p : any) =>  {
            return p.appliesTo(invalid_assignment);
        });
        expect(invalidAssignment.severity,isNull);
        let unusedLocal = processors.firstWhere((p : any) =>  {
            return p.appliesTo(unused_local);
        });
        expect(unusedLocal.severity,ErrorSeverity.ERROR);
    }
    test_configure_excludes() {
        this.configureContext('analyzer:\n  exclude:\n    - foo/bar.dart\n    - \'test/**\'\n');
        let excludes : core.DartList<string> = this.analysisOptions.excludePatterns;
        expect(excludes,unorderedEquals(new core.DartList.literal('foo/bar.dart','test/**')));
    }
    test_configure_strong_mode() {
        this.configureContext('analyzer:\n  strong-mode: true\n');
        expect(this.analysisOptions.strongMode,true);
    }
    test_configure_strong_mode_bad_value() {
        this.configureContext('analyzer:\n  strong-mode: foo\n');
        expect(this.analysisOptions.strongMode,false);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContextConfigurationTest() {
        this.optionsProvider = new bare.createInstance(any,null);
    }
}

export namespace GenerateOptionsErrorsTaskTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'GenerateOptionsErrorsTaskTest';
    export type Interface = Omit<GenerateOptionsErrorsTaskTest, Constructors>;
}
@DartClass
export class GenerateOptionsErrorsTaskTest extends lib3.AbstractContextTest {
    source : any;

    @AbstractProperty
    get optionsFilePath() : string{ throw 'abstract'}
    lineInfo(source : string) : any {
        return GenerateOptionsErrorsTask.computeLineInfo(source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() {
        super.setUp();
        this.source = this.newSource(this.optionsFilePath);
    }
    test_buildInputs() {
        let inputs : core.DartMap<string,any> = GenerateOptionsErrorsTask.buildInputs(this.source);
        expect(inputs,isNotNull);
        expect(inputs.keys,unorderedEquals(new core.DartList.literal(GenerateOptionsErrorsTask.CONTENT_INPUT_NAME)));
    }
    test_compute_lineInfo() {
        expect(this.lineInfo('foo\nbar').getLocation(4).lineNumber,2);
        expect(this.lineInfo('foo\nbar').getLocation(4).columnNumber,1);
        expect(this.lineInfo('foo\nbar').getLocation(5).lineNumber,2);
        expect(this.lineInfo('foo\nbar').getLocation(5).columnNumber,1);
        expect(this.lineInfo('foobar').getLocation(4).lineNumber,2);
        expect(this.lineInfo('foobar').getLocation(4).columnNumber,1);
        expect(this.lineInfo('foo').getLocation(0).lineNumber,1);
        expect(this.lineInfo('foo').getLocation(0).columnNumber,1);
        expect(this.lineInfo('').getLocation(1).lineNumber,1);
    }
    test_constructor() {
        let task : any = new bare.createInstance(any,null,this.context,this.source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,this.source);
    }
    test_createTask() {
        let task : any = GenerateOptionsErrorsTask.createTask(this.context,this.source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,this.source);
    }
    test_description() {
        let task : any = new bare.createInstance(any,null,null,this.source);
        expect(task.description,isNotNull);
    }
    test_descriptor() {
        let descriptor : any = GenerateOptionsErrorsTask.DESCRIPTOR;
        expect(descriptor,isNotNull);
    }
    test_perform_bad_yaml() {
        let code : string = ':\n';
        let target : any = this.newSource(this.optionsFilePath,code);
        this.computeResult(target,ANALYSIS_OPTIONS_ERRORS);
        expect(this.task,properties.isGenerateOptionsErrorsTask);
        let errors : core.DartList<any> = this.outputs.get(ANALYSIS_OPTIONS_ERRORS) as core.DartList<any>;
        expect(errors,hasLength(1));
        expect(errors[0].errorCode,AnalysisOptionsErrorCode.PARSE_ERROR);
    }
    test_perform_include() {
        this.newSource('/other_options.yaml','');
        let code : string = 'include: other_options.yaml\n';
        let target : any = this.newSource(this.optionsFilePath,code);
        this.computeResult(target,ANALYSIS_OPTIONS_ERRORS);
        expect(this.task,properties.isGenerateOptionsErrorsTask);
        let errors : core.DartList<any> = this.outputs.get(ANALYSIS_OPTIONS_ERRORS) as core.DartList<any>;
        expect(errors,hasLength(0));
    }
    test_perform_include_bad_value() {
        this.newSource('/other_options.yaml','analyzer:\n  errors:\n    unused_local_variable: ftw\n');
        let code : string = 'include: other_options.yaml\n';
        let target : any = this.newSource(this.optionsFilePath,code);
        this.computeResult(target,ANALYSIS_OPTIONS_ERRORS);
        expect(this.task,properties.isGenerateOptionsErrorsTask);
        let errors : core.DartList<any> = this.outputs.get(ANALYSIS_OPTIONS_ERRORS) as core.DartList<any>;
        expect(errors,hasLength(1));
        let error : any = errors[0];
        expect(error.errorCode,AnalysisOptionsWarningCode.INCLUDED_FILE_WARNING);
        expect(error.source,target.source);
        expect(error.offset,10);
        expect(error.length,18);
        expect(error.message,contains('other_options.yaml(47..49)'));
    }
    test_perform_include_bad_yaml() {
        this.newSource('/other_options.yaml',':');
        let code : string = 'include: other_options.yaml\n';
        let target : any = this.newSource(this.optionsFilePath,code);
        this.computeResult(target,ANALYSIS_OPTIONS_ERRORS);
        expect(this.task,properties.isGenerateOptionsErrorsTask);
        let errors : core.DartList<any> = this.outputs.get(ANALYSIS_OPTIONS_ERRORS) as core.DartList<any>;
        expect(errors,hasLength(1));
        let error : any = errors[0];
        expect(error.errorCode,AnalysisOptionsErrorCode.INCLUDED_FILE_PARSE_ERROR);
        expect(error.source,target.source);
        expect(error.offset,10);
        expect(error.length,18);
        expect(error.message,contains('other_options.yaml(0..0)'));
    }
    test_perform_include_missing() {
        let code : string = 'include: other_options.yaml\n';
        let target : any = this.newSource(this.optionsFilePath,code);
        this.computeResult(target,ANALYSIS_OPTIONS_ERRORS);
        expect(this.task,properties.isGenerateOptionsErrorsTask);
        let errors : core.DartList<any> = this.outputs.get(ANALYSIS_OPTIONS_ERRORS) as core.DartList<any>;
        expect(errors,hasLength(1));
        let error : any = errors[0];
        expect(error.errorCode,AnalysisOptionsWarningCode.INCLUDE_FILE_NOT_FOUND);
        expect(error.offset,10);
        expect(error.length,18);
    }
    test_perform_OK() {
        let code : string = 'analyzer:\n  strong-mode: true\n';
        let target : any = this.newSource(this.optionsFilePath,code);
        this.computeResult(target,ANALYSIS_OPTIONS_ERRORS);
        expect(this.task,properties.isGenerateOptionsErrorsTask);
        expect(this.outputs.get(ANALYSIS_OPTIONS_ERRORS),isEmpty);
        let lineInfo : any = this.outputs.get(LINE_INFO);
        expect(lineInfo,isNotNull);
        expect(lineInfo.getLocation(1).lineNumber,1);
        expect(lineInfo.getLocation(10).lineNumber,2);
    }
    test_perform_unsupported_analyzer_option() {
        let code : string = 'analyzer:\n  not_supported: true\n';
        let target : any = this.newSource(this.optionsFilePath,code);
        this.computeResult(target,ANALYSIS_OPTIONS_ERRORS);
        expect(this.task,properties.isGenerateOptionsErrorsTask);
        let errors : core.DartList<any> = this.outputs.get(ANALYSIS_OPTIONS_ERRORS) as core.DartList<any>;
        expect(errors,hasLength(1));
        expect(errors[0].errorCode,AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenerateOptionsErrorsTaskTest() {
    }
}

export namespace OptionsFileValidatorTest {
    export type Constructors = 'OptionsFileValidatorTest';
    export type Interface = Omit<OptionsFileValidatorTest, Constructors>;
}
@DartClass
export class OptionsFileValidatorTest {
    validator : any;

    optionsProvider : any;

    test_analyzer_error_code_supported() {
        this.validate('analyzer:\n  errors:\n    unused_local_variable: ignore\n    invalid_assignment: warning\n    missing_return: error\n    dead_code: info\n',new core.DartList.literal());
    }
    test_analyzer_error_code_supported_bad_value() {
        this.validate('analyzer:\n  errors:\n    unused_local_variable: ftw\n    ',new core.DartList.literal(AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES));
    }
    test_analyzer_error_code_unsupported() {
        this.validate('analyzer:\n  errors:\n    not_supported: ignore\n    ',new core.DartList.literal(AnalysisOptionsWarningCode.UNRECOGNIZED_ERROR_CODE));
    }
    test_analyzer_language_supported() {
        this.validate('analyzer:\n  language:\n    enableSuperMixins: true\n',new core.DartList.literal());
    }
    test_analyzer_language_unsupported_key() {
        this.validate('analyzer:\n  language:\n    unsupported: true\n',new core.DartList.literal(AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES));
    }
    test_analyzer_language_unsupported_value() {
        this.validate('analyzer:\n  language:\n    enableSuperMixins: foo\n',new core.DartList.literal(AnalysisOptionsWarningCode.UNSUPPORTED_VALUE));
    }
    test_analyzer_strong_mode_error_code_supported() {
        this.validate('analyzer:\n  errors:\n    strong_mode_assignment_cast: ignore\n',new core.DartList.literal());
    }
    test_analyzer_supported_exclude() {
        this.validate('analyzer:\n  exclude:\n    - test/_data/p4/lib/lib1.dart\n    ',new core.DartList.literal());
    }
    test_analyzer_supported_strong_mode() {
        this.validate('analyzer:\n  strong-mode: true\n    ',new core.DartList.literal());
    }
    test_analyzer_supported_strong_mode_supported_bad_value() {
        this.validate('analyzer:\n  strong-mode: w00t\n    ',new core.DartList.literal(AnalysisOptionsWarningCode.UNSUPPORTED_VALUE));
    }
    test_analyzer_unsupported_option() {
        this.validate('analyzer:\n  not_supported: true\n    ',new core.DartList.literal(AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES));
    }
    test_linter_supported_rules() {
        Registry.ruleRegistry.register(new TestRule());
        this.validate('linter:\n  rules:\n    - fantastic_test_rule\n    ',new core.DartList.literal());
    }
    test_linter_unsupported_option() {
        this.validate('linter:\n  unsupported: true\n    ',new core.DartList.literal(AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUE));
    }
    validate(source : string,expected : core.DartList<any>) : void {
        let options = this.optionsProvider.getOptionsFromString(source);
        let errors = this.validator.validate(options);
        expect(errors.map((e : any) =>  {
            return e.errorCode;
        }),unorderedEquals(expected));
    }
    constructor() {
    }
    @defaultConstructor
    OptionsFileValidatorTest() {
        this.validator = new bare.createInstance(any,null,new lib4.TestSource());
        this.optionsProvider = new bare.createInstance(any,null);
    }
}

export namespace TestRule {
    export type Constructors = 'TestRule';
    export type Interface = Omit<TestRule, Constructors>;
}
@DartClass
export class TestRule extends any {
    constructor() {
    }
    @defaultConstructor
    TestRule() {
        super.DartObject({
            name : 'fantastic_test_rule'});
    }
}

export namespace GenerateNewOptionsErrorsTaskTest {
    export type Constructors = GenerateOptionsErrorsTaskTest.Constructors | 'GenerateNewOptionsErrorsTaskTest';
    export type Interface = Omit<GenerateNewOptionsErrorsTaskTest, Constructors>;
}
@DartClass
export class GenerateNewOptionsErrorsTaskTest extends GenerateOptionsErrorsTaskTest {
    get optionsFilePath() : string {
        return `/${AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenerateNewOptionsErrorsTaskTest() {
    }
}

export namespace GenerateOldOptionsErrorsTaskTest {
    export type Constructors = GenerateOptionsErrorsTaskTest.Constructors | 'GenerateOldOptionsErrorsTaskTest';
    export type Interface = Omit<GenerateOldOptionsErrorsTaskTest, Constructors>;
}
@DartClass
export class GenerateOldOptionsErrorsTaskTest extends GenerateOptionsErrorsTaskTest {
    get optionsFilePath() : string {
        return `/${AnalysisEngine.ANALYSIS_OPTIONS_FILE}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenerateOldOptionsErrorsTaskTest() {
    }
}

export class properties {
    private static __$isGenerateOptionsErrorsTask : any;
    static get isGenerateOptionsErrorsTask() : any { 
        if (this.__$isGenerateOptionsErrorsTask===undefined) {
            this.__$isGenerateOptionsErrorsTask = new bare.createInstance(any,null);
        }
        return this.__$isGenerateOptionsErrorsTask;
    }
    static set isGenerateOptionsErrorsTask(__$value : any)  { 
        this.__$isGenerateOptionsErrorsTask = __$value;
    }

}
