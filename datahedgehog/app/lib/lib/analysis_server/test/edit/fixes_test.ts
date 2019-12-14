/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/fixes_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FixesTest);
    });
};
export namespace FixesTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'FixesTest';
    export type Interface = Omit<FixesTest, Constructors>;
}
@DartClass
export class FixesTest extends lib3.AbstractAnalysisTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(this.server.serverPlugin));
        this.handler = new bare.createInstance(any,null,this.server);
    }
    test_fixUndefinedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('main() {\n  Future<String> x = null;\n}\n');
            await this.waitForTasksFinished();
            let errorFixes : core.DartList<any> = await this._getFixesAt('Future<String>');
            expect(errorFixes,hasLength(1));
            let error : any = errorFixes[0].error;
            expect(error.severity,AnalysisErrorSeverity.WARNING);
            expect(error.type,AnalysisErrorType.STATIC_WARNING);
            let fixes : core.DartList<any> = errorFixes[0].fixes;
            expect(fixes,hasLength(2));
            expect(fixes[0].message,matches('Import library'));
            expect(fixes[1].message,matches('Create class'));
        } )());
    }

    test_fromPlugins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let info : any = new bare.createInstance(any,null,'a','b','c',null,null);
            let fixes : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AnalysisErrorSeverity.ERROR,AnalysisErrorType.HINT,new bare.createInstance(any,null,'',0,0,0,0),'message','code'));
            let result : any = new bare.createInstance(any,null,new core.DartList.literal<any>(fixes));
            this.pluginManager.broadcastResults = new core.DartMap.literal([
                [info,new async.Future.value(result.toResponse('-',1))]]);
            this.createProject();
            this.addTestFile('main() {}');
            await this.waitForTasksFinished();
            let errorFixes : core.DartList<any> = await this._getFixesAt('in(');
            expect(errorFixes,hasLength(1));
        } )());
    }

    test_hasFixes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('foo() {\n  print(1)\n}\nbar() {\n  print(10) print(20)\n}\n');
            await this.waitForTasksFinished();
            {
                let errorFixes : core.DartList<any> = await this._getFixesAt('print(1)');
                expect(errorFixes,hasLength(1));
                this._isSyntacticErrorWithSingleFix(errorFixes[0]);
            }
            {
                let errorFixes : core.DartList<any> = await this._getFixesAt('print(10)');
                expect(errorFixes,hasLength(2));
                this._isSyntacticErrorWithSingleFix(errorFixes[0]);
                this._isSyntacticErrorWithSingleFix(errorFixes[1]);
            }
        } )());
    }

    test_overlayOnlyFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.testCode = 'main() {\nprint(1)\n}\n';
            this._addOverlay(this.testFile,this.testCode);
            await this.waitForTasksFinished();
            let errorFixes : core.DartList<any> = await this._getFixesAt('print(1)');
            expect(errorFixes,hasLength(1));
            this._isSyntacticErrorWithSingleFix(errorFixes[0]);
        } )());
    }

    test_suggestImportFromDifferentAnalysisRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            ((_) : any =>  {
                {
                    newFolder("/project1");
                    newFolder("/project2");
                    return _;
                }
            })(this.resourceProvider);
            this.handleSuccessfulRequest(new bare.createInstance(any,null,new core.DartList.literal("/project1","/project2"),new core.DartList.literal()).toRequest('0'),{
                handler : this.analysisHandler});
            this.testFile = "/project1/main.dart";
            this.testCode = "main() { print(new Foo()); }";
            this._addOverlay(this.testFile,this.testCode);
            this._addOverlay("/project1/another.dart",'import "../project2/target.dart";');
            this._addOverlay("/project2/target.dart","class Foo() {}");
            await this.waitForTasksFinished();
            let fixes : core.DartList<string> = (await this._getFixesAt('Foo()')).single.fixes.map((f : any) =>  {
                return f.message;
            }).toList();
            expect(fixes,contains("Import library '../project2/target.dart'"));
        } )());
    }

    _addOverlay(name : string,contents : string) : void {
        let request : any = new bare.createInstance(any,null,new core.DartMap.literal([
            [name,new bare.createInstance(any,null,contents)]])).toRequest('0');
        this.handleSuccessfulRequest(request,{
            handler : this.analysisHandler});
    }
    _getFixes(offset : number) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,this.testFile,offset).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            return result.fixes;
        } )());
    }

    _getFixesAt(search : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let offset : number = this.findOffset(search);
            return await this._getFixes(offset);
        } )());
    }

    _isSyntacticErrorWithSingleFix(fixes : any) : void {
        let error : any = fixes.error;
        expect(error.severity,AnalysisErrorSeverity.ERROR);
        expect(error.type,AnalysisErrorType.SYNTACTIC_ERROR);
        expect(fixes.fixes,hasLength(1));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FixesTest() {
    }
}

export class properties {
}
