/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_errors_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NotificationErrorsTest);
    });
};
export namespace NotificationErrorsTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'NotificationErrorsTest';
    export type Interface = Omit<NotificationErrorsTest, Constructors>;
}
@DartClass
export class NotificationErrorsTest extends lib3.AbstractAnalysisTest {
    filesErrors : core.DartMap<string,core.DartList<any>>;

    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_ERRORS)) {
            let decoded = new bare.createInstance(any,null,notification);
            this.filesErrors.set(decoded.file,decoded.errors);
        }
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
    test_importError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('import \'does_not_exist.dart\';\n');
            await this.waitForTasksFinished();
            await lib4.pumpEventQueue();
            let errors : core.DartList<any> = this.filesErrors.get(this.testFile);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.severity,AnalysisErrorSeverity.ERROR);
            expect(error.type,AnalysisErrorType.COMPILE_TIME_ERROR);
            expect(error.message,startsWith("Target of URI doesn't exist"));
        } )());
    }

    test_lintError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let camelCaseTypesLintName = 'camel_case_types';
            this.addFile(`${this.projectPath}/.analysis_options`,`linter:\n  rules:\n    - ${camelCaseTypesLintName}\n`);
            this.addTestFile('class a { }');
            let request : any = new bare.createInstance(any,null,new core.DartList.literal(this.projectPath),new core.DartList.literal()).toRequest('0');
            this.handleSuccessfulRequest(request);
            await this.waitForTasksFinished();
            let lints : core.DartList<any>;
            if (this.enableNewAnalysisDriver) {
                let testDriver : any = (this.server.contextManager as any).getContextInfoFor(this.resourceProvider.getFolder(this.projectPath)).analysisDriver;
                lints = testDriver.analysisOptions.lintRules;
            }else {
                let testContext : any = this.server.getContainingContext(this.testFile);
                lints = getLints(testContext);
            }
            expect(lints,hasLength(1));
            let lint : any = lints.first as any;
            expect(lint.name,camelCaseTypesLintName);
            let errors : core.DartList<any> = this.filesErrors.get(this.testFile);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.location.file,'/project/bin/test.dart');
            expect(error.severity,AnalysisErrorSeverity.INFO);
            expect(error.type,AnalysisErrorType.LINT);
            expect(error.message,lint.description);
        } )());
    }

    test_notInAnalysisRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            let otherFile : string = '/other.dart';
            this.addFile(otherFile,'UnknownType V;');
            this.addTestFile('import \'/other.dart\';\nmain() {\n  print(V);\n}\n');
            await this.waitForTasksFinished();
            expect(this.filesErrors.get(otherFile),isNull);
        } )());
    }

    test_ParserError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('library lib');
            await this.waitForTasksFinished();
            await lib4.pumpEventQueue();
            let errors : core.DartList<any> = this.filesErrors.get(this.testFile);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.location.file,'/project/bin/test.dart');
            expect(error.location.offset,isPositive);
            expect(error.location.length,isNonNegative);
            expect(error.severity,AnalysisErrorSeverity.ERROR);
            expect(error.type,AnalysisErrorType.SYNTACTIC_ERROR);
            expect(error.message,isNotNull);
        } )());
    }

    test_StaticWarning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('main() {\n  print(UNKNOWN);\n}\n');
            await this.waitForTasksFinished();
            await lib4.pumpEventQueue();
            let errors : core.DartList<any> = this.filesErrors.get(this.testFile);
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(error.severity,AnalysisErrorSeverity.WARNING);
            expect(error.type,AnalysisErrorType.STATIC_WARNING);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NotificationErrorsTest() {
        this.filesErrors = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
