/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/domain_execution_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mocks";
import * as lib4 from "./analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ExecutionDomainTest);
    });
    group('ExecutionDomainHandler',() =>  {
        let provider : any = new bare.createInstance(any,null);
        let server : any;
        let handler : any;
        setUp(() =>  {
            let manager : any = new bare.createInstance(any,null);
            let serverPlugin : any = new bare.createInstance(any,null);
            manager.processPlugins(new core.DartList.literal(serverPlugin));
            server = new bare.createInstance(any,null,new lib3.MockServerChannel(),provider,new lib3.MockPackageMapProvider(),null,serverPlugin,new bare.createInstance(any,null),new bare.createInstance(any,null,'',false),InstrumentationService.NULL_SERVICE);
            handler = new bare.createInstance(any,null,server);
        });
        group('createContext/deleteContext',() =>  {
            test('create/delete multiple contexts',() =>  {
                let request : any = new bare.createInstance(any,null,'/a/b.dart').toRequest('0');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
                let result : any = new bare.createInstance(any,null,response);
                let id0 : string = result.id;
                request = new bare.createInstance(any,null,'/c/d.dart').toRequest('1');
                response = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('1'));
                result = new bare.createInstance(any,null,response);
                let id1 : string = result.id;
                expect(id0 == id1,isFalse);
                request = new bare.createInstance(any,null,id0).toRequest('2');
                response = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('2'));
                request = new bare.createInstance(any,null,id1).toRequest('3');
                response = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('3'));
            });
            test('delete non-existent context',() =>  {
                let request : any = new bare.createInstance(any,null,'13').toRequest('0');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
            });
        });
        group('mapUri',() =>  {
            let contextId : string;
            var createExecutionContextIdForFile : (path : string) => void = (path : string) : void =>  {
                let request : any = new bare.createInstance(any,null,path).toRequest('0');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
                let result : any = new bare.createInstance(any,null,response);
                contextId = result.id;
            };
            setUp(() =>  {
                let folder : any = provider.newFile('/a/b.dart','').parent;
                server.folderMap.putIfAbsent(folder,() =>  {
                    let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,provider)));
                    let context : any = AnalysisEngine.instance.createAnalysisContext();
                    context.sourceFactory = factory;
                    return context;
                });
                createExecutionContextIdForFile('/a/b.dart');
            });
            tearDown(() =>  {
                let request : any = new bare.createInstance(any,null,contextId).toRequest('1');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('1'));
            });
            group('file to URI',() =>  {
                test('does not exist',() =>  {
                    let request : any = new bare.createInstance(any,null,contextId,{
                        file : '/a/c.dart'}).toRequest('2');
                    let response : any = handler.handleRequest(request);
                    expect(response,lib3.isResponseFailure('2'));
                });
                test('directory',() =>  {
                    provider.newFolder('/a/d');
                    let request : any = new bare.createInstance(any,null,contextId,{
                        file : '/a/d'}).toRequest('2');
                    let response : any = handler.handleRequest(request);
                    expect(response,lib3.isResponseFailure('2'));
                });
            });
            group('URI to file',() =>  {
                test('invalid',() =>  {
                    let request : any = new bare.createInstance(any,null,contextId,{
                        uri : 'foo:///a/b.dart'}).toRequest('2');
                    let response : any = handler.handleRequest(request);
                    expect(response,lib3.isResponseFailure('2'));
                });
            });
            test('invalid context id',() =>  {
                let request : any = new bare.createInstance(any,null,'xxx',{
                    uri : ''}).toRequest('4');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseFailure('4'));
            });
            test('both file and uri',() =>  {
                let request : any = new bare.createInstance(any,null,'xxx',{
                    file : '',uri : ''}).toRequest('5');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseFailure('5'));
            });
            test('neither file nor uri',() =>  {
                let request : any = new bare.createInstance(any,null,'xxx').toRequest('6');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseFailure('6'));
            });
        });
        group('setSubscriptions',() =>  {
            test('failure - invalid service name',() =>  {
                expect(handler.onFileAnalyzed,isNull);
                let request : any = new bare.createInstance(any,null,'0',EXECUTION_SET_SUBSCRIPTIONS,new core.DartMap.literal([
                    [SUBSCRIPTIONS,new core.DartList.literal('noSuchService')]]));
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseFailure('0'));
                expect(handler.onFileAnalyzed,isNull);
            });
            test('success - setting and clearing',() =>  {
                expect(handler.onFileAnalyzed,isNull);
                let request : any = new bare.createInstance(any,null,new core.DartList.literal(ExecutionService.LAUNCH_DATA)).toRequest('0');
                let response : any = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
                expect(handler.onFileAnalyzed,isNotNull);
                request = new bare.createInstance(any,null,new core.DartList.literal()).toRequest('0');
                response = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
                expect(handler.onFileAnalyzed,isNull);
            });
        });
    });
};
export namespace ExecutionDomainTest {
    export type Constructors = lib4.AbstractAnalysisTest.Constructors | 'ExecutionDomainTest';
    export type Interface = Omit<ExecutionDomainTest, Constructors>;
}
@DartClass
export class ExecutionDomainTest extends lib4.AbstractAnalysisTest {
    contextId : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        this.handler = new bare.createInstance(any,null,this.server);
        this._createExecutionContext(this.testFile);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tearDown() : void {
        this._disposeExecutionContext();
        super.tearDown();
    }
    test_mapUri_file() : void {
        let path : string = '/a/b.dart';
        this.resourceProvider.newFile(path,'');
        let result : any = this._mapUri({
            file : path});
        expect(result.file,isNull);
        expect(result.uri,'file:///a/b.dart');
    }
    test_mapUri_file_dartUriKind() : void {
        let path : string = this.server.findSdk().mapDartUri('dart:async').fullName;
        this.resourceProvider.newFile(path,'// hack');
        let result : any = this._mapUri({
            file : path});
        expect(result.file,isNull);
        expect(result.uri,'dart:async');
    }
    test_mapUri_uri() : void {
        let path : string = '/a/b.dart';
        this.resourceProvider.newFile(path,'');
        let result : any = this._mapUri({
            uri : `file://${path}`});
        expect(result.file,'/a/b.dart');
        expect(result.uri,isNull);
    }
    _createExecutionContext(path : string) : void {
        let request : any = new bare.createInstance(any,null,path).toRequest('0');
        let response : any = this.handler.handleRequest(request);
        expect(response,lib3.isResponseSuccess('0'));
        let result : any = new bare.createInstance(any,null,response);
        this.contextId = result.id;
    }
    _disposeExecutionContext() : void {
        let request : any = new bare.createInstance(any,null,this.contextId).toRequest('1');
        let response : any = this.handler.handleRequest(request);
        expect(response,lib3.isResponseSuccess('1'));
    }
    _mapUri(_namedArguments? : {file? : string,uri? : string}) : any {
        let {file,uri} = Object.assign({
        }, _namedArguments );
        let request : any = new bare.createInstance(any,null,this.contextId,{
            file : file,uri : uri}).toRequest('2');
        let response : any = this.handler.handleRequest(request);
        expect(response,lib3.isResponseSuccess('2'));
        return new bare.createInstance(any,null,response);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExecutionDomainTest() {
    }
}

export namespace TestSource {
    export type Constructors = 'TestSource';
    export type Interface = Omit<TestSource, Constructors>;
}
@DartClass
@Implements(any)
export class TestSource implements any.Interface {
    fullName : string;

    constructor(fullName : string) {
    }
    @defaultConstructor
    TestSource(fullName : string) {
        this.fullName = fullName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export class properties {
}
