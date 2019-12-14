/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/reanalyze_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ReanalyzeTest);
    });
};
export namespace ReanalyzeTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'ReanalyzeTest';
    export type Interface = Omit<ReanalyzeTest, Constructors>;
}
@DartClass
export class ReanalyzeTest extends lib3.AbstractAnalysisTest {
    filesErrors : core.DartMap<string,core.DartList<any>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
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
    test_reanalyze() {
        this.createProject();
        let contexts : core.DartList<any> = this.server.analysisContexts.toList();
        expect(contexts,hasLength(1));
        let oldContext : any = contexts[0];
        let request : any = new bare.createInstance(any,null,"0",ANALYSIS_REANALYZE);
        this.handleSuccessfulRequest(request);
        contexts = this.server.analysisContexts.toList();
        expect(contexts,hasLength(1));
        let newContext : any = contexts[0];
        expect(newContext,isNot(same(oldContext)));
    }
    test_reanalyze_with_overlay() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.resourceProvider.newFolder(this.testFolder);
            this.resourceProvider.newFile(this.testFile,'main() {}');
            await this.waitForTasksFinished();
            this.server.updateContent('1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,'main() {')]]));
            await this.waitForTasksFinished();
            {
                let errors : core.DartList<any> = this.filesErrors.get(this.testFile);
                expect(errors,hasLength(1));
            }
            this.filesErrors.remove(this.testFile);
            this.server.reanalyze(null);
            await this.waitForTasksFinished();
            expect(this.filesErrors,contains(this.testFile));
            {
                let errors : core.DartList<any> = this.filesErrors.get(this.testFile);
                expect(errors,hasLength(1));
            }
        } )());
    }

    test_sentToPlugins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,"0",ANALYSIS_REANALYZE);
            this.handleSuccessfulRequest(request);
            expect(this.pluginManager.broadcastedRequest,isNotNull);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReanalyzeTest() {
        this.filesErrors = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
