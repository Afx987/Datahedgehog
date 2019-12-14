/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/domain_analysis_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mocks";
import * as lib4 from "./mock_sdk";
import * as lib5 from "./analysis_abstract";
import * as lib6 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_generated";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisDomainTest);
        defineReflectiveTests(SetSubscriptionsTest);
    });
    let serverChannel : lib3.MockServerChannel;
    let resourceProvider : any;
    let server : any;
    let handler : any;
    var processRequiredPlugins : (serverPlugin : any) => void = (serverPlugin : any) : void =>  {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        plugins.add(serverPlugin);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
    };
    setUp(() =>  {
        serverChannel = new lib3.MockServerChannel();
        resourceProvider = new bare.createInstance(any,null);
        let serverPlugin : any = new bare.createInstance(any,null);
        processRequiredPlugins(serverPlugin);
        new lib4.MockSdk({
            resourceProvider : resourceProvider});
        server = new bare.createInstance(any,null,serverChannel,resourceProvider,new lib3.MockPackageMapProvider(),null,serverPlugin,new bare.createInstance(any,null),new bare.createInstance(any,null,'/',false),InstrumentationService.NULL_SERVICE);
        handler = new bare.createInstance(any,null,server);
    });
    group('updateContent',testUpdateContent);
    group('AnalysisDomainHandler',() =>  {
        group('getReachableSources',() =>  {
            test('valid sources',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                let fileA : string = '/project/a.dart';
                let fileB : string = '/project/b.dart';
                resourceProvider.newFile(fileA,'import "b.dart";');
                resourceProvider.newFile(fileB,'');
                server.setAnalysisRoots('0',new core.DartList.literal('/project/'),new core.DartList.literal(),new core.DartMap.literal([
                ]));
                await server.onAnalysisComplete;
                let request = new bare.createInstance(any,null,fileA).toRequest('0');
                let response = handler.handleRequest(request);
                let json : core.DartMap<any,any> = op(Op.INDEX,response.toJson(),Response.RESULT);
                expect(json.get('sources'),hasLength(6));
                expect(op(Op.INDEX,json.get('sources'),'file:///project/a.dart'),unorderedEquals(new core.DartList.literal('dart:core','file:///project/b.dart')));
                expect(op(Op.INDEX,json.get('sources'),'file:///project/b.dart'),new core.DartList.literal('dart:core'));
            })()));
            test('invalid source',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                resourceProvider.newFile('/project/a.dart','import "b.dart";');
                server.setAnalysisRoots('0',new core.DartList.literal('/project/'),new core.DartList.literal(),new core.DartMap.literal([
                ]));
                await server.onAnalysisComplete;
                let request = new bare.createInstance(any,null,'/does/not/exist.dart').toRequest('0');
                let response = handler.handleRequest(request);
                expect(response.error,isNotNull);
                expect(response.error.code,RequestErrorCode.GET_REACHABLE_SOURCES_INVALID_FILE);
            })()));
        });
        group('setAnalysisRoots',() =>  {
            var testSetAnalysisRoots : (included : core.DartList<string>,excluded : core.DartList<string>) => any = (included : core.DartList<string>,excluded : core.DartList<string>) : any =>  {
                let request : any = new bare.createInstance(any,null,included,excluded).toRequest('0');
                return handler.handleRequest(request);
            };
            group('excluded',() =>  {
                test('excluded folder',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let fileA : string = '/project/aaa/a.dart';
                    let fileB : string = '/project/bbb/b.dart';
                    resourceProvider.newFile(fileA,'// a');
                    resourceProvider.newFile(fileB,'// b');
                    let response = testSetAnalysisRoots(new core.DartList.literal('/project'),new core.DartList.literal('/project/bbb'));
                    let serverRef = server;
                    expect(response,lib3.isResponseSuccess('0'));
                    await server.onAnalysisComplete;
                    expect(await serverRef.getResolvedCompilationUnit(fileA),isNotNull);
                    expect(await serverRef.getResolvedCompilationUnit(fileB),isNull);
                })()));
                test('not absolute',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let response = testSetAnalysisRoots(new core.DartList.literal(),new core.DartList.literal('foo/bar'));
                    expect(response,lib3.isResponseFailure('0',RequestErrorCode.INVALID_FILE_PATH_FORMAT));
                })()));
                test('not normalized',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let response = testSetAnalysisRoots(new core.DartList.literal(),new core.DartList.literal('/foo/../bar'));
                    expect(response,lib3.isResponseFailure('0',RequestErrorCode.INVALID_FILE_PATH_FORMAT));
                })()));
            });
            group('included',() =>  {
                test('new folder',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let file : string = '/project/bin/test.dart';
                    resourceProvider.newFile('/project/pubspec.yaml','name: project');
                    resourceProvider.newFile(file,'main() {}');
                    let response = testSetAnalysisRoots(new core.DartList.literal('/project'),new core.DartList.literal());
                    let serverRef = server;
                    expect(response,lib3.isResponseSuccess('0'));
                    await server.onAnalysisComplete;
                    let unit = await serverRef.getResolvedCompilationUnit(file);
                    expect(unit,isNotNull);
                })()));
                test('nonexistent folder',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let fileB : string = '/project_b/b.dart';
                    resourceProvider.newFile(fileB,'// b');
                    let response = testSetAnalysisRoots(new core.DartList.literal('/project_a','/project_b'),new core.DartList.literal());
                    let serverRef = server;
                    expect(response,lib3.isResponseSuccess('0'));
                    await server.onAnalysisComplete;
                    let unit = await serverRef.getResolvedCompilationUnit(fileB);
                    expect(unit,isNotNull);
                })()));
                test('not absolute',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let response = testSetAnalysisRoots(new core.DartList.literal('foo/bar'),new core.DartList.literal());
                    expect(response,lib3.isResponseFailure('0',RequestErrorCode.INVALID_FILE_PATH_FORMAT));
                })()));
                test('not normalized',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let response = testSetAnalysisRoots(new core.DartList.literal('/foo/../bar'),new core.DartList.literal());
                    expect(response,lib3.isResponseFailure('0',RequestErrorCode.INVALID_FILE_PATH_FORMAT));
                })()));
            });
        });
        group('setPriorityFiles',() =>  {
            test('invalid',() =>  {
                let request = new bare.createInstance(any,null,new core.DartList.literal('/project/lib.dart')).toRequest('0');
                let response = handler.handleRequest(request);
                expect(response,lib3.isResponseFailure('0'));
            });
            test('valid',() =>  {
                resourceProvider.newFolder('/p1');
                resourceProvider.newFile('/p1/a.dart','library a;');
                resourceProvider.newFolder('/p2');
                resourceProvider.newFile('/p2/b.dart','library b;');
                resourceProvider.newFile('/p2/c.dart','library c;');
                let setRootsRequest = new bare.createInstance(any,null,new core.DartList.literal('/p1','/p2'),new core.DartList.literal()).toRequest('0');
                let setRootsResponse = handler.handleRequest(setRootsRequest);
                expect(setRootsResponse,lib3.isResponseSuccess('0'));
                var setPriorityFiles : (fileList : core.DartList<string>) => void = (fileList : core.DartList<string>) : void =>  {
                    let request = new bare.createInstance(any,null,fileList).toRequest('0');
                    let response = handler.handleRequest(request);
                    expect(response,lib3.isResponseSuccess('0'));
                };
                setPriorityFiles(new core.DartList.literal('/p1/a.dart','/p2/b.dart'));
                setPriorityFiles(new core.DartList.literal('/p2/b.dart','/p2/c.dart'));
                setPriorityFiles(new core.DartList.literal());
            });
        });
        group('updateOptions',() =>  {
            test('invalid',() =>  {
                let request = new bare.createInstance(any,null,'0',ANALYSIS_UPDATE_OPTIONS,new core.DartMap.literal([
                    [OPTIONS,new core.DartMap.literal([
                        ['not-an-option',true]])]]));
                let response = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
            });
            test('null',() =>  {
                let request = new bare.createInstance(any,null,'0',ANALYSIS_UPDATE_OPTIONS,new core.DartMap.literal([
                    [OPTIONS,null]]));
                let response = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
            });
        });
    });
};
export var testUpdateContent : () => any = () =>  {
    test('bad type',() =>  {
        let helper : AnalysisTestHelper = new AnalysisTestHelper();
        helper.createSingleFileProject('// empty');
        return helper.onAnalysisComplete.then((_ : any) =>  {
            let request : any = new bare.createInstance(any,null,'0',ANALYSIS_UPDATE_CONTENT,new core.DartMap.literal([
                ['files',new core.DartMap.literal([
                    [helper.testFile,new core.DartMap.literal([
                        [TYPE,'foo']])]])]]));
            let response : any = helper.handler.handleRequest(request);
            expect(response,lib3.isResponseFailure('0'));
        });
    });
    test('full content',() =>  {
        let helper : AnalysisTestHelper = new AnalysisTestHelper();
        helper.createSingleFileProject('// empty');
        return helper.onAnalysisComplete.then((_ : any) =>  {
            let errors : core.DartList<any> = helper.getTestErrors();
            expect(errors,isEmpty);
            helper.sendContentChange(new bare.createInstance(any,null,'library lib'));
            return helper.onAnalysisComplete.then((_ : any) =>  {
                let errors : core.DartList<any> = helper.getTestErrors();
                expect(errors,hasLength(1));
            });
        });
    });
    test('incremental',() =>  {
        let helper : AnalysisTestHelper = new AnalysisTestHelper();
        let initialContent : string = 'library A;';
        helper.createSingleFileProject(initialContent);
        return helper.onAnalysisComplete.then((_ : any) =>  {
            let errors : core.DartList<any> = helper.getTestErrors();
            expect(errors,isEmpty);
            helper.sendContentChange(new bare.createInstance(any,null,initialContent));
            helper.sendContentChange(new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,new core.DartString('library ').length,new core.DartString('A;').length,'lib'))));
            return helper.onAnalysisComplete.then((_ : any) =>  {
                let errors : core.DartList<any> = helper.getTestErrors();
                expect(errors,hasLength(1));
            });
        });
    });
    test('change on disk, normal',() =>  {
        let helper : AnalysisTestHelper = new AnalysisTestHelper();
        helper.createSingleFileProject('library A;');
        return helper.onAnalysisComplete.then((_ : any) =>  {
            expect(helper.getTestErrors(),hasLength(0));
            helper.resourceProvider.modifyFile(helper.testFile,'library lib');
            return lib3.pumpEventQueue().then((_ : any) =>  {
                return helper.onAnalysisComplete.then((_ : any) =>  {
                    expect(helper.getTestErrors(),hasLength(1));
                });
            });
        });
    });
    test('change on disk, during override',() =>  {
        let helper : AnalysisTestHelper = new AnalysisTestHelper();
        helper.createSingleFileProject('library A;');
        return helper.onAnalysisComplete.then((_ : any) =>  {
            helper.sendContentChange(new bare.createInstance(any,null,'library B;'));
            return helper.onAnalysisComplete.then((_ : any) =>  {
                expect(helper.getTestErrors(),hasLength(0));
                helper.resourceProvider.modifyFile(helper.testFile,'library lib');
                return helper.onAnalysisComplete.then((_ : any) =>  {
                    expect(helper.getTestErrors(),hasLength(0));
                    helper.sendContentChange(new bare.createInstance(any,null));
                    return helper.onAnalysisComplete.then((_ : any) =>  {
                        expect(helper.getTestErrors(),hasLength(1));
                    });
                });
            });
        });
    });
    group('out of range',() =>  {
        var outOfRangeTest : (edit : any) => async.Future<any> = (edit : any) : async.Future<any> =>  {
            let helper : AnalysisTestHelper = new AnalysisTestHelper();
            helper.createSingleFileProject('library A;');
            return helper.onAnalysisComplete.then((_ : any) =>  {
                helper.sendContentChange(new bare.createInstance(any,null,'library B;'));
                return helper.onAnalysisComplete.then((_ : any) =>  {
                    let contentChange : any = new bare.createInstance(any,null,new core.DartList.literal(edit));
                    let request : any = new bare.createInstance(any,null,new core.DartMap.literal([
                        [helper.testFile,contentChange]])).toRequest('0');
                    let response : any = helper.handler.handleRequest(request);
                    expect(response,lib3.isResponseFailure('0',RequestErrorCode.INVALID_OVERLAY_CHANGE));
                });
            });
        };
        test('negative length',() =>  {
            return outOfRangeTest(new bare.createInstance(any,null,3,-1,'foo'));
        });
        test('negative offset',() =>  {
            return outOfRangeTest(new bare.createInstance(any,null,-1,3,'foo'));
        });
        test('beyond end',() =>  {
            return outOfRangeTest(new bare.createInstance(any,null,6,6,'foo'));
        });
    });
};
export namespace AnalysisDomainTest {
    export type Constructors = lib5.AbstractAnalysisTest.Constructors | 'AnalysisDomainTest';
    export type Interface = Omit<AnalysisDomainTest, Constructors>;
}
@DartClass
export class AnalysisDomainTest extends lib5.AbstractAnalysisTest {
    filesErrors : core.DartMap<string,core.DartList<any>>;

    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_ERRORS)) {
            let decoded = new bare.createInstance(any,null,notification);
            this.filesErrors.set(decoded.file,decoded.errors);
        }
    }
    test_setRoots_packages() {
        let pkgFile : string = '/packages/pkgA/libA.dart';
        this.resourceProvider.newFile(pkgFile,'library lib_a;\nclass A {}\n');
        this.resourceProvider.newFile('/project/.packages','pkgA:file:///packages/pkgA');
        this.addTestFile('import \'package:pkgA/libA.dart\';\nmain(A a) {\n}\n');
        this.createProject();
        return this.waitForTasksFinished().then((_ : any) =>  {
            expect(this.filesErrors.get(this.testFile),isEmpty);
            expect(this.filesErrors.get(pkgFile),isNull);
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisDomainTest() {
        this.filesErrors = new core.DartMap.literal([
        ]);
    }
}

export namespace AnalysisTestHelper {
    export type Constructors = 'AnalysisTestHelper';
    export type Interface = Omit<AnalysisTestHelper, Constructors>;
}
@DartClass
export class AnalysisTestHelper {
    serverChannel : lib3.MockServerChannel;

    resourceProvider : any;

    server : any;

    handler : any;

    analysisSubscriptions : core.DartMap<any,core.DartList<string>>;

    filesErrors : core.DartMap<string,core.DartList<any>>;

    filesHighlights : core.DartMap<string,core.DartList<any>>;

    filesNavigation : core.DartMap<string,core.DartList<any>>;

    testFile : string;

    testCode : string;

    constructor() {
    }
    @defaultConstructor
    AnalysisTestHelper() {
        this.analysisSubscriptions = new core.DartMap.literal([
        ]);
        this.filesErrors = new core.DartMap.literal([
        ]);
        this.filesHighlights = new core.DartMap.literal([
        ]);
        this.filesNavigation = new core.DartMap.literal([
        ]);
        this.testFile = '/project/bin/test.dart';
        let serverPlugin : any = new bare.createInstance(any,null);
        this.processRequiredPlugins(serverPlugin);
        this.serverChannel = new lib3.MockServerChannel();
        this.resourceProvider = new bare.createInstance(any,null);
        new lib4.MockSdk({
            resourceProvider : this.resourceProvider});
        this.server = new bare.createInstance(any,null,this.serverChannel,this.resourceProvider,new lib3.MockPackageMapProvider(),null,serverPlugin,((_) : any =>  {
            {
                _.enableNewAnalysisDriver = true;
                return _;
            }
        })(new bare.createInstance(any,null)),new bare.createInstance(any,null,'/',false),InstrumentationService.NULL_SERVICE);
        this.handler = new bare.createInstance(any,null,this.server);
        let notificationStream : async.DartStream<any> = this.serverChannel.notificationController.stream;
        notificationStream.listen((notification : any) =>  {
            if (op(Op.EQUALS,notification.event,ANALYSIS_ERRORS)) {
                let decoded = new bare.createInstance(any,null,notification);
                this.filesErrors.set(decoded.file,decoded.errors);
            }
            if (op(Op.EQUALS,notification.event,ANALYSIS_HIGHLIGHTS)) {
                let params = new bare.createInstance(any,null,notification);
                this.filesHighlights.set(params.file,params.regions);
            }
            if (op(Op.EQUALS,notification.event,ANALYSIS_NAVIGATION)) {
                let params = new bare.createInstance(any,null,notification);
                this.filesNavigation.set(params.file,params.regions);
            }
        });
    }
    get onAnalysisComplete() : async.Future<any> {
        return this.server.onAnalysisComplete;
    }
    addAnalysisSubscription(service : any,file : string) : void {
        let files = this.analysisSubscriptions.get(service);
        if (files == null) {
            files = new core.DartList.literal<string>();
            this.analysisSubscriptions.set(service,files);
        }
        files.add(file);
        let request : any = new bare.createInstance(any,null,this.analysisSubscriptions).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    addAnalysisSubscriptionHighlights(file : string) : void {
        this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,file);
    }
    addAnalysisSubscriptionNavigation(file : string) : void {
        this.addAnalysisSubscription(AnalysisService.NAVIGATION,file);
    }
    createEmptyProject() : void {
        this.resourceProvider.newFolder('/project');
        let request : any = new bare.createInstance(any,null,new core.DartList.literal('/project'),new core.DartList.literal()).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    createSingleFileProject(code : any) : void {
        this.testCode = AnalysisTestHelper._getCodeString(code);
        this.resourceProvider.newFolder('/project');
        this.resourceProvider.newFile(this.testFile,this.testCode);
        let request : any = new bare.createInstance(any,null,new core.DartList.literal('/project'),new core.DartList.literal()).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    findOffset(search : string) : number {
        let offset : number = new core.DartString(this.testCode).indexOf(search);
        expect(offset,isNot(-1));
        return offset;
    }
    getErrors(file : string) : core.DartList<any> {
        let errors : core.DartList<any> = this.filesErrors.get(file);
        if (errors != null) {
            return errors;
        }
        return new core.DartList.literal<any>();
    }
    getHighlights(file : string) : core.DartList<any> {
        let highlights : core.DartList<any> = this.filesHighlights.get(file);
        if (highlights != null) {
            return highlights;
        }
        return new core.DartList.literal();
    }
    getNavigation(file : string) : core.DartList<any> {
        let navigation : core.DartList<any> = this.filesNavigation.get(file);
        if (navigation != null) {
            return navigation;
        }
        return new core.DartList.literal();
    }
    getTestErrors() : core.DartList<any> {
        return this.getErrors(this.testFile);
    }
    getTestHighlights() : core.DartList<any> {
        return this.getHighlights(this.testFile);
    }
    getTestNavigation() : core.DartList<any> {
        return this.getNavigation(this.testFile);
    }
    handleSuccessfulRequest(request : any) : void {
        let response : any = this.handler.handleRequest(request);
        expect(response,lib3.isResponseSuccess('0'));
    }
    processRequiredPlugins(serverPlugin : any) : void {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        plugins.add(serverPlugin);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
    }
    sendContentChange(contentChange : any) : void {
        let request : any = new bare.createInstance(any,null,new core.DartMap.literal([
            [this.testFile,contentChange]])).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    setFileContent(path : string,content : string) : string {
        this.resourceProvider.newFile(path,content);
        return path;
    }
    stopServer() : void {
        this.server.done();
    }
    static _getCodeString(code : any) : string {
        if (is(code, core.DartList<string>)) {
            code = code.join('\n');
        }
        return code as string;
    }
}

export namespace SetSubscriptionsTest {
    export type Constructors = lib5.AbstractAnalysisTest.Constructors | 'SetSubscriptionsTest';
    export type Interface = Omit<SetSubscriptionsTest, Constructors>;
}
@DartClass
export class SetSubscriptionsTest extends lib5.AbstractAnalysisTest {
    filesHighlights : core.DartMap<string,core.DartList<any>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_HIGHLIGHTS)) {
            let params = new bare.createInstance(any,null,notification);
            this.filesHighlights.set(params.file,params.regions);
        }
    }
    test_afterAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('int V = 42;');
            this.createProject();
            await this.waitForTasksFinished();
            expect(this.filesHighlights.get(this.testFile),isNull);
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,this.testFile);
            await this.server.onAnalysisComplete;
            expect(this.filesHighlights.get(this.testFile),isNotEmpty);
        } )());
    }

    test_afterAnalysis_noSuchFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : string = '/no-such-file.dart';
            this.addTestFile('// no matter');
            this.createProject();
            await this.waitForTasksFinished();
            expect(this.filesHighlights.get(this.testFile),isNull);
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,file);
            await this.server.onAnalysisComplete;
            expect(this.filesHighlights.get(file),isNull);
        } )());
    }

    test_afterAnalysis_packageFile_external() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkgFile : string = '/packages/pkgA/lib/libA.dart';
            this.resourceProvider.newFile(pkgFile,'library lib_a;\nclass A {}\n');
            this.resourceProvider.newFile('/project/.packages','pkgA:file:///packages/pkgA/lib');
            this.addTestFile('import \'package:pkgA/libA.dart\';\nmain() {\n  new A();\n}\n');
            this.createProject();
            await this.waitForTasksFinished();
            expect(this.filesHighlights.get(pkgFile),isNull);
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,pkgFile);
            await this.server.onAnalysisComplete;
            expect(this.filesHighlights.get(pkgFile),isNotEmpty);
        } )());
    }

    test_afterAnalysis_packageFile_inRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkgA : string = '/pkgA';
            let pkgB : string = '/pkgA';
            let pkgFileA : string = `${pkgA}/lib/libA.dart`;
            let pkgFileB : string = `${pkgA}/lib/libB.dart`;
            this.resourceProvider.newFile(pkgFileA,'library lib_a;\nclass A {}\n');
            this.resourceProvider.newFile(pkgFileB,'import \'package:pkgA/libA.dart\';\nmain() {\n  new A();\n}\n');
            this.packageMapProvider.packageMap = new core.DartMap.literal([
                ['pkgA',new core.DartList.literal(this.resourceProvider.newFolder(`${pkgA}/lib`),this.resourceProvider.newFolder(`${pkgB}/lib`))]]);
            {
                this.resourceProvider.newFolder(this.projectPath);
                this.handleSuccessfulRequest(new bare.createInstance(any,null,new core.DartList.literal(pkgA,pkgB),new core.DartList.literal()).toRequest('0'));
            }
            await this.waitForTasksFinished();
            expect(this.filesHighlights.get(pkgFileA),isNull);
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,pkgFileA);
            await this.server.onAnalysisComplete;
            expect(this.filesHighlights.get(pkgFileA),isNotEmpty);
        } )());
    }

    test_afterAnalysis_packageFile_notUsed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkgFile : string = '/packages/pkgA/lib/libA.dart';
            this.resourceProvider.newFile(pkgFile,'library lib_a;\nclass A {}\n');
            this.resourceProvider.newFile('/project/.packages','pkgA:/packages/pkgA/lib');
            this.addTestFile('// no "pkgA" reference');
            this.createProject();
            await this.waitForTasksFinished();
            expect(this.filesHighlights.get(pkgFile),isNull);
            this.server.setPriorityFiles('0',new core.DartList.literal(pkgFile));
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,pkgFile);
            await this.server.onAnalysisComplete;
            expect(this.filesHighlights.get(pkgFile),isNotEmpty);
        } )());
    }

    test_afterAnalysis_sdkFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : string = '/lib/core/core.dart';
            this.addTestFile('// no matter');
            this.createProject();
            await this.waitForTasksFinished();
            expect(this.filesHighlights.get(file),isNull);
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,file);
            await this.server.onAnalysisComplete;
            expect(this.filesHighlights.get(file),isNotEmpty);
        } )());
    }

    test_beforeAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('int V = 42;');
            this.createProject();
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,this.testFile);
            await this.waitForTasksFinished();
            expect(this.filesHighlights.get(this.testFile),isNotEmpty);
        } )());
    }

    test_sentToPlugins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('int V = 42;');
            this.createProject();
            this.addAnalysisSubscription(AnalysisService.HIGHLIGHTS,this.testFile);
            await this.waitForTasksFinished();
            let params : any = this.pluginManager.analysisSetSubscriptionsParams;
            expect(params,isNotNull);
            let subscriptions : core.DartMap<any,core.DartList<string>> = params.subscriptions;
            expect(subscriptions,hasLength(1));
            let files : core.DartList<string> = subscriptions.get(lib6.AnalysisService.HIGHLIGHTS);
            expect(files,new core.DartList.literal(this.testFile));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetSubscriptionsTest() {
        this.filesHighlights = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
