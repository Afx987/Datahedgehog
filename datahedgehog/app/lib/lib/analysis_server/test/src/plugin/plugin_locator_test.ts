/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/plugin_locator_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(PluginLocatorTest);
    });
};
export namespace PluginLocatorTest {
    export type Constructors = 'PluginLocatorTest';
    export type Interface = Omit<PluginLocatorTest, Constructors>;
}
@DartClass
export class PluginLocatorTest {
    resourceProvider : any;

    packageRoot : string;

    pubspecPath : string;

    defaultDirPath : string;

    locator : any;

    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        this.packageRoot = this.resourceProvider.convertPath('/package');
        this.resourceProvider.newFolder(this.packageRoot);
        this.locator = new bare.createInstance(any,null,this.resourceProvider);
    }
    test_findPlugin_inPubspec_defaultDir() : void {
        let dirPath : string = this._createPubspecWithKey();
        this._createDefaultDir();
        expect(this.locator.findPlugin(this.packageRoot),dirPath);
    }
    test_findPlugin_inPubspec_noDefaultDir() : void {
        let dirPath : string = this._createPubspecWithKey();
        expect(this.locator.findPlugin(this.packageRoot),dirPath);
    }
    test_findPlugin_noPubspec_defaultDir() : void {
        this._createDefaultDir();
        expect(this.locator.findPlugin(this.packageRoot),this.defaultDirPath);
    }
    test_findPlugin_noPubspec_noDefaultDir() : void {
        expect(this.locator.findPlugin(this.packageRoot),isNull);
    }
    test_findPlugin_notInPubspec_defaultDir() : void {
        this._createPubspecWithoutKey();
        this._createDefaultDir();
        expect(this.locator.findPlugin(this.packageRoot),this.defaultDirPath);
    }
    test_findPlugin_notInPubspec_noDefaultDir() : void {
        this._createPubspecWithoutKey();
        expect(this.locator.findPlugin(this.packageRoot),isNull);
    }
    _createDefaultDir() : void {
        this.defaultDirPath = this.resourceProvider.pathContext.join(this.packageRoot,PluginLocator.toolsFolderName,PluginLocator.defaultPluginFolderName);
        this.resourceProvider.newFolder(this.defaultDirPath);
    }
    _createPubspec(content : string) : void {
        this.pubspecPath = this.resourceProvider.pathContext.join(this.packageRoot,PluginLocator.pubspecFileName);
        this.resourceProvider.newFile(this.pubspecPath,content);
    }
    _createPubspecWithKey() : string {
        let nonDefaultPath : string = this.resourceProvider.pathContext.join(this.packageRoot,'pluginDir');
        this._createPubspec(`name: test_project\n${PluginLocator.analysisPluginKey}: ${nonDefaultPath}\n`);
        this.resourceProvider.newFolder(nonDefaultPath);
        return nonDefaultPath;
    }
    _createPubspecWithoutKey() : void {
        this._createPubspec('name: test_project\n');
    }
    constructor() {
    }
    @defaultConstructor
    PluginLocatorTest() {
    }
}

export class properties {
}
