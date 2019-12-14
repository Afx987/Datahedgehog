/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/get_navigation_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./notification_navigation_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetNavigationTest);
    });
};
export namespace GetNavigationTest {
    export type Constructors = lib3.AbstractNavigationTest.Constructors | 'GetNavigationTest';
    export type Interface = Omit<GetNavigationTest, Constructors>;
}
@DartClass
export class GetNavigationTest extends lib3.AbstractNavigationTest {
    private static __$requestId : string;
    static get requestId() : string { 
        if (this.__$requestId===undefined) {
            this.__$requestId = 'test-getNavigation';
        }
        return this.__$requestId;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        this.generateSummaryFiles = true;
        super.setUp();
        this.server.handlers = new core.DartList.literal(new bare.createInstance(any,null,this.server));
        this.createProject();
    }
    test_beforeAnalysisComplete() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  var test = 0;\n  print(test);\n}\n');
            await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf('test);'),0);
            this.assertHasRegion('test);');
            this.assertHasTarget('test = 0');
        } )());
    }

    test_fileDoesNotExist() {
        let file : string = `${this.projectPath}/doesNotExist.dart`;
        return this._checkInvalid(file,-1,-1);
    }
    test_fileOutsideOfRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/outside.dart';
            this.addTestFile('main() {\n  var test = 0;\n  print(test);\n}\n');
            await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf('test);'),0);
            this.assertHasRegion('test);');
            this.assertHasTarget('test = 0');
        } )());
    }

    test_importDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:math\';\n\nmain() {\n}');
            await this.waitForTasksFinished();
            await this._getNavigation(this.testFile,0,17);
            expect(this.regions,hasLength(1));
            this.assertHasRegionString("'dart:math'");
            expect(this.testTargets,hasLength(1));
            expect(this.testTargets[0].kind,ElementKind.LIBRARY);
        } )());
    }

    test_importKeyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:math\';\n\nmain() {\n}');
            await this.waitForTasksFinished();
            await this._getNavigation(this.testFile,0,1);
            expect(this.regions,hasLength(1));
            this.assertHasRegionString("'dart:math'");
            expect(this.testTargets,hasLength(1));
            expect(this.testTargets[0].kind,ElementKind.LIBRARY);
        } )());
    }

    test_importUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:math\';\n\nmain() {\n}');
            await this.waitForTasksFinished();
            await this._getNavigation(this.testFile,7,11);
            expect(this.regions,hasLength(1));
            this.assertHasRegionString("'dart:math'");
            expect(this.testTargets,hasLength(1));
            expect(this.testTargets[0].kind,ElementKind.LIBRARY);
        } )());
    }

    test_multipleRegions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  var aaa = 1;\n  var bbb = 2;\n  var ccc = 3;\n  var ddd = 4;\n  print(aaa + bbb + ccc + ddd);\n}\n');
            await this.waitForTasksFinished();
            let navCode : string = ' + bbb + ';
            await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(navCode),new core.DartString(navCode).length);
            {
                this.assertHasRegion('aaa +');
                this.assertHasTarget('aaa = 1');
            }
            {
                this.assertHasRegion('bbb +');
                this.assertHasTarget('bbb = 2');
            }
            {
                this.assertHasRegion('ccc +');
                this.assertHasTarget('ccc = 3');
            }
            this.assertNoRegionAt('ddd)');
        } )());
    }

    test_operator_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A operator [](index) => null;\n  operator []=(index, A value) {}\n}\nmain() {\n  var a = new A();\n  a[0] // [];\n  a[1] = 1; // []=;\n  a[2] += 2;\n}\n');
            await this.waitForTasksFinished();
            {
                let search : string = '[0';
                await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(search),1);
                this.assertHasOperatorRegion(search,1,'[](index)',2);
            }
            {
                let search : string = '] // []';
                await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(search),1);
                this.assertHasOperatorRegion(search,1,'[](index)',2);
            }
            {
                let search : string = '[1';
                await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(search),1);
                this.assertHasOperatorRegion(search,1,'[]=(index',3);
            }
            {
                let search : string = '] = 1';
                await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(search),1);
                this.assertHasOperatorRegion(search,1,'[]=(index',3);
            }
            {
                let search : string = '[2';
                await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(search),1);
                this.assertHasOperatorRegion(search,1,'[]=(index',3);
            }
            {
                let search : string = '] += 2';
                await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(search),1);
                this.assertHasOperatorRegion(search,1,'[]=(index',3);
            }
        } )());
    }

    test_removeContextAfterRequest() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  var test = 0;\n  print(test);\n}\n');
            let request : any = this._createGetNavigationRequest(this.testFile,new core.DartString(this.testCode).indexOf('test);'),0);
            this.server.handleRequest(request);
            {
                let projectFolder : any = this.resourceProvider.getResource(this.projectPath);
                this.server.contextManager.callbacks.removeContext(projectFolder,new core.DartList.literal<string>());
            }
            let response : any = await this.serverChannel.waitForResponse(request);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.GET_NAVIGATION_INVALID_FILE);
        } )());
    }

    test_zeroLength_end() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  var test = 0;\n  print(test);\n}\n');
            await this.waitForTasksFinished();
            await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf(');'),0);
            this.assertHasRegion('test);');
            this.assertHasTarget('test = 0');
        } )());
    }

    test_zeroLength_start() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  var test = 0;\n  print(test);\n}\n');
            await this.waitForTasksFinished();
            await this._getNavigation(this.testFile,new core.DartString(this.testCode).indexOf('test);'),0);
            this.assertHasRegion('test);');
            this.assertHasTarget('test = 0');
        } )());
    }

    _checkInvalid(file : string,offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = this._createGetNavigationRequest(file,offset,length);
            let response : any = await this.serverChannel.sendRequest(request);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.GET_NAVIGATION_INVALID_FILE);
        } )());
    }

    _createGetNavigationRequest(file : string,offset : number,length : number) : any {
        return new bare.createInstance(any,null,file,offset,length).toRequest(GetNavigationTest.requestId);
    }
    _getNavigation(file : string,offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = this._createGetNavigationRequest(file,offset,length);
            let response : any = await this.serverChannel.sendRequest(request);
            let result : any = new bare.createInstance(any,null,response);
            this.targetFiles = result.files;
            this.targets = result.targets;
            this.regions = result.regions;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetNavigationTest() {
    }
}

export class properties {
}
