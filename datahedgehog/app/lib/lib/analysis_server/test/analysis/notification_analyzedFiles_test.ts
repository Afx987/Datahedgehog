/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_analyzedFiles_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisNotificationAnalyzedFilesTest);
    });
};
export namespace AnalysisNotificationAnalyzedFilesTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AnalysisNotificationAnalyzedFilesTest';
    export type Interface = Omit<AnalysisNotificationAnalyzedFilesTest, Constructors>;
}
@DartClass
export class AnalysisNotificationAnalyzedFilesTest extends lib3.AbstractAnalysisTest {
    analyzedFiles : core.DartList<string>;

    analyzedFilesReceived : boolean;

    assertHasFile(filePath : string) : void {
        expect(this.analyzedFilesReceived,isTrue);
        expect(this.analyzedFiles,contains(filePath));
    }
    prepareAnalyzedFiles() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addGeneralAnalysisSubscription(GeneralAnalysisService.ANALYZED_FILES);
            await lib4.pumpEventQueue();
        } )());
    }

    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_ANALYZED_FILES)) {
            let params : any = new bare.createInstance(any,null,notification);
            this.analyzedFilesReceived = true;
            this.analyzedFiles = params.directories;
        }
    }
    setUp() : void {
        this.generateSummaryFiles = true;
        super.setUp();
        this.createProject();
    }
    test_afterAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\n');
            await this.waitForTasksFinished();
            await this.prepareAnalyzedFiles();
            this.assertHasFile(this.testFile);
        } )());
    }

    test_beforeAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\n');
            await this.prepareAnalyzedFiles();
            this.assertHasFile(this.testFile);
        } )());
    }

    test_insignificant_change() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}');
            await this.prepareAnalyzedFiles();
            expect(this.analyzedFilesReceived,isTrue);
            this.analyzedFilesReceived = false;
            this.modifyTestFile('class B {}');
            await this.prepareAnalyzedFiles();
            expect(this.analyzedFilesReceived,isFalse);
        } )());
    }

    test_resubscribe_no_changes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}');
            await this.prepareAnalyzedFiles();
            expect(this.analyzedFilesReceived,isTrue);
            this.unsubscribeAnalyzedFiles();
            this.analyzedFilesReceived = false;
            await this.prepareAnalyzedFiles();
            expect(this.analyzedFilesReceived,isTrue);
            this.assertHasFile(this.testFile);
        } )());
    }

    test_significant_change() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}');
            this.addFile('/foo.dart','library foo;');
            await this.prepareAnalyzedFiles();
            expect(this.analyzedFilesReceived,isTrue);
            this.analyzedFilesReceived = false;
            this.modifyTestFile('import "/foo.dart";');
            await this.prepareAnalyzedFiles();
            this.assertHasFile('/foo.dart');
        } )());
    }

    unsubscribeAnalyzedFiles() : void {
        this.removeGeneralAnalysisSubscription(GeneralAnalysisService.ANALYZED_FILES);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisNotificationAnalyzedFilesTest() {
        this.analyzedFilesReceived = false;
    }
}

export class properties {
}
