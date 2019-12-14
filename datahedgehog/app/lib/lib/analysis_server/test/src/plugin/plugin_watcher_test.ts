/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/plugin_watcher_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/src/context";
import * as lib4 from "./../../mock_sdk";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib6 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(PluginWatcherTest);
    });
};
export namespace PluginWatcherTest {
    export type Constructors = 'PluginWatcherTest';
    export type Interface = Omit<PluginWatcherTest, Constructors>;
}
@DartClass
export class PluginWatcherTest {
    resourceProvider : any;

    manager : TestPluginManager;

    watcher : any;

    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        this.manager = new TestPluginManager();
        this.watcher = new bare.createInstance(any,null,this.resourceProvider,this.manager);
    }
    test_addedDriver() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Path : string = this.resourceProvider.convertPath('/pkg1');
            let contextRoot : any = new bare.createInstance(any,null,pkg1Path,new core.DartList.literal());
            let driver : TestDriver = new TestDriver(this.resourceProvider,contextRoot);
            this.watcher.addedDriver(driver,contextRoot);
            expect(this.manager.addedContextRoots,isEmpty);
            this.resourceProvider.newFile(this.resourceProvider.convertPath('/pkg1/lib/test1.dart'),'');
            await driver.computeResult('package:pkg1/test1.dart');
            expect(this.manager.addedContextRoots,isEmpty);
            this.resourceProvider.newFile(this.resourceProvider.convertPath('/pkg2/lib/pkg2.dart'),'');
            this.resourceProvider.newFile(this.resourceProvider.convertPath('/pkg2/pubspec.yaml'),'name: pkg2');
            this.resourceProvider.newFile(this.resourceProvider.convertPath('/pkg2/tools/analysis_plugin/bin/plugin.dart'),'');
            await driver.computeResult('package:pkg2/pk2.dart');
            await new async.Future.delayed(new core.DartDuration({
                seconds : 1}));
            expect(this.manager.addedContextRoots,hasLength(1));
        } )());
    }

    test_creation() : void {
        expect(this.watcher.resourceProvider,this.resourceProvider);
        expect(this.watcher.manager,this.manager);
    }
    test_removedDriver() {
        let pkg1Path : string = this.resourceProvider.convertPath('/pkg1');
        let contextRoot : any = new bare.createInstance(any,null,pkg1Path,new core.DartList.literal());
        let driver : TestDriver = new TestDriver(this.resourceProvider,contextRoot);
        this.watcher.addedDriver(driver,contextRoot);
        this.watcher.removedDriver(driver);
        expect(this.manager.removedContextRoots,equals(new core.DartList.literal(contextRoot)));
    }
    constructor() {
    }
    @defaultConstructor
    PluginWatcherTest() {
    }
}

export namespace TestDriver {
    export type Constructors = 'TestDriver';
    export type Interface = Omit<TestDriver, Constructors>;
}
@DartClass
@Implements(any)
export class TestDriver implements any.Interface {
    resourceProvider : any;

    sourceFactory : any;

    fsState : any;

    _resultController;

    constructor(resourceProvider : any,contextRoot : any) {
    }
    @defaultConstructor
    TestDriver(resourceProvider : any,contextRoot : any) {
        this._resultController = new async.DartStreamController<any>();
        this.resourceProvider = resourceProvider;
        let pathContext : lib3.Context = this.resourceProvider.pathContext;
        let sdk : lib4.MockSdk = new lib4.MockSdk({
            resourceProvider : this.resourceProvider});
        let packageName : string = pathContext.basename(contextRoot.root);
        let libPath : string = pathContext.join(contextRoot.root,'lib');
        this.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,sdk),new bare.createInstance(any,null,this.resourceProvider,new core.DartMap.literal([
            [packageName,new core.DartList.literal(this.resourceProvider.getFolder(libPath))],
            ['pkg2',new core.DartList.literal(this.resourceProvider.getFolder(this.resourceProvider.convertPath('/pkg2/lib')))]]))));
        this.fsState = new bare.createInstance(any,null,new bare.createInstance(any,null,null),new bare.createInstance(any,null),null,this.resourceProvider,this.sourceFactory,new bare.createInstance(any,null),new typed_data.Uint32List(0));
    }
    get results() : async.DartStream<any> {
        return this._resultController.stream;
    }
    computeResult(uri : string) : async.Future<core.Null> {
        let file : any = this.fsState.getFileForUri(lib6.Uri.parse(uri));
        let result : any = new bare.createInstance(any,null,this,null,file.path,null,true,null,null,null,null,null,null);
        this._resultController.add(result);
        return new async.Future.delayed(new core.DartDuration({
            milliseconds : 1}));
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace TestPluginManager {
    export type Constructors = 'TestPluginManager';
    export type Interface = Omit<TestPluginManager, Constructors>;
}
@DartClass
@Implements(any)
export class TestPluginManager implements any.Interface {
    addedContextRoots : core.DartList<any>;

    removedContextRoots : core.DartList<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPluginToContextRoot(contextRoot : any,path : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addedContextRoots.add(contextRoot);
            return null;
        } )());
    }

    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removedContextRoot(contextRoot : any) : void {
        this.removedContextRoots.add(contextRoot);
    }
    constructor() {
    }
    @defaultConstructor
    TestPluginManager() {
        this.addedContextRoots = new core.DartList.literal<any>();
        this.removedContextRoots = new core.DartList.literal<any>();
    }
}

export class properties {
}
