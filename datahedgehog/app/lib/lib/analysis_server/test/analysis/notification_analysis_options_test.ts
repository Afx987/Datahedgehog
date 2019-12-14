/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_analysis_options_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NewAnalysisOptionsFileNotificationTest);
        defineReflectiveTests(OldAnalysisOptionsFileNotificationTest);
    });
};
export namespace AnalysisOptionsFileNotificationTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AnalysisOptionsFileNotificationTest';
    export type Interface = Omit<AnalysisOptionsFileNotificationTest, Constructors>;
}
@DartClass
export class AnalysisOptionsFileNotificationTest extends lib3.AbstractAnalysisTest {
    filesErrors : core.DartMap<string,core.DartList<any>>;

    testSource;

    get errors() : core.DartList<any> {
        return this.filesErrors.get(this.testFile);
    }
    get optionsFileErrors() : core.DartList<any> {
        return this.filesErrors.get(this.optionsFilePath);
    }
    @AbstractProperty
    get optionsFilePath() : string{ throw 'abstract'}
    get testFileErrors() : core.DartList<any> {
        return this.filesErrors.get(this.testFile);
    }
    addOptionsFile(contents : string) : void {
        this.addFile(this.optionsFilePath,contents);
    }
    deleteFile(filePath : string) : void {
        this.resourceProvider.deleteFile(filePath);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_ERRORS)) {
            let decoded = new bare.createInstance(any,null,notification);
            this.filesErrors.set(decoded.file,decoded.errors);
        }
    }
    setAnalysisRoot() : void {
        let request : any = new bare.createInstance(any,null,new core.DartList.literal(this.projectPath),new core.DartList.literal()).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    setStrongMode(isSet : boolean) : void {
        this.addOptionsFile(`analyzer:\n  strong-mode: ${isSet}\n`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        this.generateSummaryFiles = true;
        registerLintRules();
        super.setUp();
        this.server.handlers = new core.DartList.literal(new bare.createInstance(any,null,this.server));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tearDown() : void {
        this.filesErrors.set(this.optionsFilePath,new core.DartList.literal());
        this.filesErrors.set(this.testFile,new core.DartList.literal());
        super.tearDown();
    }
    test_error_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addOptionsFile('analyzer:\n  errors:\n    unused_local_variable: ignore\n');
            this.addTestFile('main() {\n  String unused = "";\n}\n');
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            if (!this.enableNewAnalysisDriver) {
                expect(this.optionsFileErrors,isNotNull);
                expect(this.optionsFileErrors,isEmpty);
            }
            expect(this.testFileErrors,isNotNull);
            expect(this.testFileErrors,isEmpty);
        } )());
    }

    test_error_filter_removed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addOptionsFile('analyzer:\n  errors:\n    unused_local_variable: ignore\n');
            this.addTestFile('main() {\n  String unused = "";\n}\n');
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            if (!this.enableNewAnalysisDriver) {
                expect(this.optionsFileErrors,isNotNull);
                expect(this.optionsFileErrors,isEmpty);
            }
            expect(this.testFileErrors,isNotNull);
            expect(this.testFileErrors,isEmpty);
            this.addOptionsFile('analyzer:\n  errors:\n  #  unused_local_variable: ignore\n');
            await lib4.pumpEventQueue();
            await this.waitForTasksFinished();
            if (!this.enableNewAnalysisDriver) {
                expect(this.optionsFileErrors,isEmpty);
            }
            expect(this.testFileErrors,hasLength(1));
        } )());
    }

    test_lint_options_changes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addOptionsFile('linter:\n  rules:\n    - camel_case_types\n    - constant_identifier_names\n');
            this.addTestFile(this.testSource);
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            this.verifyLintsEnabled(new core.DartList.literal('camel_case_types','constant_identifier_names'));
            this.addOptionsFile('linter:\n  rules:\n    - camel_case_types\n');
            await lib4.pumpEventQueue();
            await this.waitForTasksFinished();
            this.verifyLintsEnabled(new core.DartList.literal('camel_case_types'));
        } )());
    }

    test_lint_options_unsupported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addOptionsFile('linter:\n  rules:\n    - unsupported\n');
            this.addTestFile(this.testSource);
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            if (!this.enableNewAnalysisDriver) {
                expect(this.optionsFileErrors,hasLength(1));
                expect(this.optionsFileErrors.first.severity,AnalysisErrorSeverity.WARNING);
                expect(this.optionsFileErrors.first.type,AnalysisErrorType.STATIC_WARNING);
            }
        } )());
    }

    test_options_file_added() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile(this.testSource);
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : false});
            this.filesErrors.set(this.testFile,new core.DartList.literal());
            this.setStrongMode(true);
            await lib4.pumpEventQueue();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : true});
        } )());
    }

    test_options_file_parse_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addOptionsFile('; #bang\n');
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            if (!this.enableNewAnalysisDriver) {
                expect(this.optionsFileErrors,hasLength(1));
                expect(this.optionsFileErrors.first.severity,AnalysisErrorSeverity.ERROR);
                expect(this.optionsFileErrors.first.type,AnalysisErrorType.COMPILE_TIME_ERROR);
            }
        } )());
    }

    test_options_file_removed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.setStrongMode(true);
            this.addTestFile(this.testSource);
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : true});
            this.filesErrors.set(this.testFile,new core.DartList.literal());
            this.deleteFile(this.optionsFilePath);
            await lib4.pumpEventQueue();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : false});
        } )());
    }

    test_strong_mode_changed_off() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.setStrongMode(true);
            this.addTestFile(this.testSource);
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : true});
            this.filesErrors.set(this.testFile,new core.DartList.literal());
            this.setStrongMode(false);
            await lib4.pumpEventQueue();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : false});
        } )());
    }

    test_strong_mode_changed_on() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.setStrongMode(false);
            this.addTestFile(this.testSource);
            this.setAnalysisRoot();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : false});
            this.setStrongMode(true);
            await lib4.pumpEventQueue();
            await this.waitForTasksFinished();
            this.verifyStrongMode({
                enabled : true});
        } )());
    }

    verifyLintsEnabled(lints : core.DartList<string>) : void {
        let options : any = this.analysisOptions;
        expect(options.lint,true);
        let rules = options.lintRules.map((rule : any) =>  {
            return rule.name;
        });
        expect(rules,unorderedEquals(lints));
    }
    verifyStrongMode(_namedArguments? : {enabled? : boolean}) {
        let {enabled} = Object.assign({
        }, _namedArguments );
        expect(this.analysisOptions.strongMode,enabled);
        if (enabled) {
            expect(this.errors.map((error : any) =>  {
                return error.type;
            }),unorderedEquals(new core.DartList.literal(AnalysisErrorType.STATIC_TYPE_WARNING)));
        }else {
            expect(this.errors.map((error : any) =>  {
                return error.type;
            }),unorderedEquals(new core.DartList.literal(AnalysisErrorType.HINT)));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisOptionsFileNotificationTest() {
        this.filesErrors = new core.DartMap.literal([
        ]);
        this.testSource = 'main() {\n  var x = \'\';\n  int y = x; // Not assignable in strong-mode\n  print(y);\n}';
    }
}

export namespace NewAnalysisOptionsFileNotificationTest {
    export type Constructors = AnalysisOptionsFileNotificationTest.Constructors | 'NewAnalysisOptionsFileNotificationTest';
    export type Interface = Omit<NewAnalysisOptionsFileNotificationTest, Constructors>;
}
@DartClass
export class NewAnalysisOptionsFileNotificationTest extends AnalysisOptionsFileNotificationTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get optionsFilePath() : string {
        return `${this.projectPath}/analysis_options.yaml`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NewAnalysisOptionsFileNotificationTest() {
    }
}

export namespace OldAnalysisOptionsFileNotificationTest {
    export type Constructors = AnalysisOptionsFileNotificationTest.Constructors | 'OldAnalysisOptionsFileNotificationTest';
    export type Interface = Omit<OldAnalysisOptionsFileNotificationTest, Constructors>;
}
@DartClass
export class OldAnalysisOptionsFileNotificationTest extends AnalysisOptionsFileNotificationTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get optionsFilePath() : string {
        return `${this.projectPath}/.analysis_options`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OldAnalysisOptionsFileNotificationTest() {
    }
}

export class properties {
}
