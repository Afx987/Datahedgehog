/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/sdk/sdk_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../embedder_tests";
import * as lib4 from "./../../../resource_utils";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./../../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(EmbedderSdkTest);
        defineReflectiveTests(FolderBasedDartSdkTest);
        defineReflectiveTests(SdkExtensionFinderTest);
        defineReflectiveTests(SdkLibrariesReaderTest);
    });
};
export namespace EmbedderSdkTest {
    export type Constructors = lib3.EmbedderRelatedTest.Constructors | 'EmbedderSdkTest';
    export type Interface = Omit<EmbedderSdkTest, Constructors>;
}
@DartClass
export class EmbedderSdkTest extends lib3.EmbedderRelatedTest {
    test_creation() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,locator.embedderYamls);
        expect(sdk.urlMappings,hasLength(5));
    }
    test_fromFileUri() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,locator.embedderYamls);
        var expectSource : (posixPath : string,dartUri : string) => any = (posixPath : string,dartUri : string) =>  {
            let uri : lib5.Uri = lib5.Uri.parse(lib4.posixToOSFileUri(posixPath));
            let source : any = sdk.fromFileUri(uri);
            expect(source,isNotNull,{
                reason : posixPath});
            expect(source.uri.toString(),dartUri);
            expect(source.fullName,lib4.posixToOSPath(posixPath));
        };
        expectSource(`${this.foxLib}/slippy.dart`,'dart:fox');
        expectSource(`${this.foxLib}/deep/directory/file.dart`,'dart:deep');
        expectSource(`${this.foxLib}/deep/directory/part.dart`,'dart:deep/part.dart');
    }
    test_getLinkedBundle_noBundle() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,locator.embedderYamls);
        expect(sdk.getLinkedBundle(),isNull);
    }
    test_getLinkedBundle_spec() : void {
        this.pathTranslator.newFileWithBytes(`${this.foxPath}/spec.sum`,new bare.createInstance(any,null).assemble().toBuffer());
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,locator.embedderYamls);
        sdk.analysisOptions = ((_) : any =>  {
            {
                _.strongMode = false;
                return _;
            }
        })(new bare.createInstance(any,null));
        sdk.useSummary = true;
        expect(sdk.getLinkedBundle(),isNotNull);
    }
    test_getLinkedBundle_strong() : void {
        this.pathTranslator.newFileWithBytes(`${this.foxPath}/strong.sum`,new bare.createInstance(any,null).assemble().toBuffer());
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,locator.embedderYamls);
        sdk.analysisOptions = ((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null));
        sdk.useSummary = true;
        expect(sdk.getLinkedBundle(),isNotNull);
    }
    test_getSdkLibrary() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,locator.embedderYamls);
        let lib : any = sdk.getSdkLibrary('dart:fox');
        expect(lib,isNotNull);
        expect(lib.path,lib4.posixToOSPath(`${this.foxLib}/slippy.dart`));
        expect(lib.shortName,'dart:fox');
    }
    test_mapDartUri() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,locator.embedderYamls);
        var expectSource : (dartUri : string,posixPath : string) => void = (dartUri : string,posixPath : string) : void =>  {
            let source : any = sdk.mapDartUri(dartUri);
            expect(source,isNotNull,{
                reason : posixPath});
            expect(source.uri.toString(),dartUri);
            expect(source.fullName,lib4.posixToOSPath(posixPath));
        };
        expectSource('dart:core',`${this.foxLib}/core.dart`);
        expectSource('dart:fox',`${this.foxLib}/slippy.dart`);
        expectSource('dart:deep',`${this.foxLib}/deep/directory/file.dart`);
        expectSource('dart:deep/part.dart',`${this.foxLib}/deep/directory/part.dart`);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmbedderSdkTest() {
    }
}

export namespace FolderBasedDartSdkTest {
    export type Constructors = 'FolderBasedDartSdkTest';
    export type Interface = Omit<FolderBasedDartSdkTest, Constructors>;
}
@DartClass
export class FolderBasedDartSdkTest {
    resourceProvider : any;

    test_addExtensions() : void {
        let sdk : any = this._createDartSdk();
        let uri : string = 'dart:my.internal';
        sdk.addExtensions(new core.DartMap.literal([
            [uri,'/Users/user/dart/my.dart']]));
        expect(sdk.mapDartUri(uri),isNotNull);
        expect(sdk.sdkLibraries,contains(predicate((library : any) =>  {
            return op(Op.EQUALS,library.shortName,uri);
        })));
    }
    test_analysisOptions_afterContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.context;
        expect(() =>  {
            sdk.analysisOptions = new bare.createInstance(any,null);
        },throwsStateError);
    }
    test_analysisOptions_beforeContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.analysisOptions = new bare.createInstance(any,null);
        sdk.context;
        expect(() =>  {
            sdk.context.analysisOptions = new bare.createInstance(any,null);
        },throwsStateError);
    }
    test_creation() : void {
        let sdk : any = this._createDartSdk();
        expect(sdk,isNotNull);
    }
    test_fromFile_invalid() : void {
        let sdk : any = this._createDartSdk();
        expect(sdk.fromFileUri(this.resourceProvider.getFile("/not/in/the/sdk.dart").toUri()),isNull);
    }
    test_fromFile_library() : void {
        let sdk : any = this._createDartSdk();
        let source : any = sdk.fromFileUri(sdk.libraryDirectory.getChildAssumingFolder("core").getChildAssumingFile("core.dart").toUri());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:core");
    }
    test_fromFile_library_firstExact() : void {
        let sdk : any = this._createDartSdk();
        let dirHtml : any = sdk.libraryDirectory.getChildAssumingFolder("html");
        let dirDartium : any = dirHtml.getChildAssumingFolder("dartium");
        let file : any = dirDartium.getChildAssumingFile("html_dartium.dart");
        let source : any = sdk.fromFileUri(file.toUri());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:html");
    }
    test_fromFile_library_html_common_dart2js() : void {
        let sdk : any = this._createDartSdk();
        let dirHtml : any = sdk.libraryDirectory.getChildAssumingFolder("html");
        let dirCommon : any = dirHtml.getChildAssumingFolder("html_common");
        let file : any = dirCommon.getChildAssumingFile("html_common_dart2js.dart");
        let source : any = sdk.fromFileUri(file.toUri());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:html_common/html_common_dart2js.dart");
    }
    test_fromFile_part() : void {
        let sdk : any = this._createDartSdk();
        let source : any = sdk.fromFileUri(sdk.libraryDirectory.getChildAssumingFolder("core").getChildAssumingFile("num.dart").toUri());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:core/num.dart");
    }
    test_getDirectory() : void {
        let sdk : any = this._createDartSdk();
        let directory : any = sdk.directory;
        expect(directory,isNotNull);
        expect(directory.exists,isTrue);
    }
    test_getDocDirectory() : void {
        let sdk : any = this._createDartSdk();
        let directory : any = sdk.docDirectory;
        expect(directory,isNotNull);
    }
    test_getLibraryDirectory() : void {
        let sdk : any = this._createDartSdk();
        let directory : any = sdk.libraryDirectory;
        expect(directory,isNotNull);
        expect(directory.exists,isTrue);
    }
    test_getPubExecutable() : void {
        let sdk : any = this._createDartSdk();
        let executable : any = sdk.pubExecutable;
        expect(executable,isNotNull);
        expect(executable.exists,isTrue);
    }
    test_getSdkVersion() : void {
        let sdk : any = this._createDartSdk();
        let version : string = sdk.sdkVersion;
        expect(version,isNotNull);
        expect(new core.DartString(version).length > 0,isTrue);
    }
    test_useSummary_afterContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.context;
        expect(() =>  {
            sdk.useSummary = true;
        },throwsStateError);
    }
    test_useSummary_beforeContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.useSummary = true;
        sdk.context;
    }
    _createDartSdk() : any {
        this.resourceProvider = new bare.createInstance(any,null);
        let sdkDirectory : any = this.resourceProvider.getFolder(this.resourceProvider.convertPath('/sdk'));
        this._createFile(sdkDirectory,new core.DartList.literal('lib','_internal','sdk_library_metadata','lib','libraries.dart'),{
            content : this._librariesFileContent()});
        this._createFile(sdkDirectory,new core.DartList.literal('bin','dart'));
        this._createFile(sdkDirectory,new core.DartList.literal('bin','dart2js'));
        this._createFile(sdkDirectory,new core.DartList.literal('bin','pub'));
        this._createFile(sdkDirectory,new core.DartList.literal('lib','async','async.dart'));
        this._createFile(sdkDirectory,new core.DartList.literal('lib','core','core.dart'));
        this._createFile(sdkDirectory,new core.DartList.literal('lib','core','num.dart'));
        this._createFile(sdkDirectory,new core.DartList.literal('lib','html','html_common','html_common_dart2js.dart'));
        this._createFile(sdkDirectory,new core.DartList.literal('lib','html','dartium','html_dartium.dart'));
        this._createFile(sdkDirectory,new core.DartList.literal('bin',(OSUtilities.isWindows() ? 'pub.bat' : 'pub')));
        return new bare.createInstance(any,null,this.resourceProvider,sdkDirectory);
    }
    _createFile(directory : any,segments : core.DartList<string>,_namedArguments? : {content? : string}) : void {
        let {content} = Object.assign({
            "content" : ''}, _namedArguments );
        let parent : any = directory;
        let last : number = segments.length - 1;
        for(let i : number = 0; i < last; i++){
            parent = parent.getChildAssumingFolder(segments[i]);
        }
        let file : any = parent.getChildAssumingFile(segments[last]);
        this.resourceProvider.newFile(file.path,content);
    }
    _librariesFileContent() : string {
        return 'final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  "async": const LibraryInfo(\n      "async/async.dart",\n      categories: "Client,Server",\n      maturity: Maturity.STABLE,\n      dart2jsPatchPath: "_internal/js_runtime/lib/async_patch.dart"),\n\n  "core": const LibraryInfo(\n      "core/core.dart",\n      categories: "Client,Server,Embedded",\n      maturity: Maturity.STABLE,\n      dart2jsPatchPath: "_internal/js_runtime/lib/core_patch.dart"),\n\n  "html": const LibraryInfo(\n      "html/dartium/html_dartium.dart",\n      categories: "Client",\n      maturity: Maturity.WEB_STABLE,\n      dart2jsPath: "html/dart2js/html_dart2js.dart"),\n\n  "html_common": const LibraryInfo(\n      "html/html_common/html_common.dart",\n      categories: "Client",\n      maturity: Maturity.WEB_STABLE,\n      dart2jsPath: "html/html_common/html_common_dart2js.dart",\n      documented: false,\n      implementation: true),\n};\n';
    }
    constructor() {
    }
    @defaultConstructor
    FolderBasedDartSdkTest() {
    }
}

export namespace SdkExtensionFinderTest {
    export type Constructors = 'SdkExtensionFinderTest';
    export type Interface = Omit<SdkExtensionFinderTest, Constructors>;
}
@DartClass
export class SdkExtensionFinderTest {
    resourceProvider : any;

    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        this.resourceProvider.newFolder(this.resourceProvider.convertPath('/empty'));
        this.resourceProvider.newFolder(this.resourceProvider.convertPath('/tmp'));
        this.resourceProvider.newFile(this.resourceProvider.convertPath('/tmp/_sdkext'),'{\n  "dart:fox": "slippy.dart",\n  "dart:bear": "grizzly.dart",\n  "dart:relative": "../relative.dart",\n  "dart:deep": "deep/directory/file.dart",\n  "fart:loudly": "nomatter.dart"\n}');
    }
    test_create_noSdkExtPackageMap() {
        let resolver = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.resourceProvider.getResource(this.resourceProvider.convertPath('/empty')))]]));
        expect(resolver.urlMappings.length,equals(0));
    }
    test_create_nullPackageMap() {
        let resolver = new bare.createInstance(any,null,null);
        expect(resolver.urlMappings.length,equals(0));
    }
    test_create_sdkExtPackageMap() {
        let resolver = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.resourceProvider.getResource(this.resourceProvider.convertPath('/tmp')))]]));
        let urlMappings : core.DartMap<string,string> = resolver.urlMappings;
        expect(urlMappings.length,equals(4));
        expect(urlMappings.get('dart:fox'),equals(this.resourceProvider.convertPath("/tmp/slippy.dart")));
        expect(urlMappings.get('dart:bear'),equals(this.resourceProvider.convertPath("/tmp/grizzly.dart")));
        expect(urlMappings.get('dart:relative'),equals(this.resourceProvider.convertPath("/relative.dart")));
        expect(urlMappings.get('dart:deep'),equals(this.resourceProvider.convertPath("/tmp/deep/directory/file.dart")));
    }
    constructor() {
    }
    @defaultConstructor
    SdkExtensionFinderTest() {
    }
}

export namespace SdkLibrariesReaderTest {
    export type Constructors = lib6.EngineTestCase.Constructors | 'SdkLibrariesReaderTest';
    export type Interface = Omit<SdkLibrariesReaderTest, Constructors>;
}
@DartClass
export class SdkLibrariesReaderTest extends lib6.EngineTestCase {
    resourceProvider : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
    }
    test_readFrom_dart2js() : void {
        let libraryMap : any = new bare.createInstance(any,null,true).readFromFile(this.resourceProvider.getFile("/libs.dart"),'final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'first\' : const LibraryInfo(\n    \'first/first.dart\',\n    categories: \'Client\',\n    documented: true,\n    platforms: VM_PLATFORM,\n    dart2jsPath: \'first/first_dart2js.dart\'),\n};');
        expect(libraryMap,isNotNull);
        expect(libraryMap.size(),1);
        let first : any = libraryMap.getLibrary("dart:first");
        expect(first,isNotNull);
        expect(first.category,"Client");
        expect(first.path,"first/first_dart2js.dart");
        expect(first.shortName,"dart:first");
        expect(first.isDart2JsLibrary,false);
        expect(first.isDocumented,true);
        expect(first.isImplementation,false);
        expect(first.isVmLibrary,true);
    }
    test_readFrom_empty() : void {
        let libraryMap : any = new bare.createInstance(any,null,false).readFromFile(this.resourceProvider.getFile("/libs.dart"),"");
        expect(libraryMap,isNotNull);
        expect(libraryMap.size(),0);
    }
    test_readFrom_normal() : void {
        let libraryMap : any = new bare.createInstance(any,null,false).readFromFile(this.resourceProvider.getFile("/libs.dart"),'final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'first\' : const LibraryInfo(\n    \'first/first.dart\',\n    categories: \'Client\',\n    documented: true,\n    platforms: VM_PLATFORM),\n\n  \'second\' : const LibraryInfo(\n    \'second/second.dart\',\n    categories: \'Server\',\n    documented: false,\n    implementation: true,\n    platforms: 0),\n};');
        expect(libraryMap,isNotNull);
        expect(libraryMap.size(),2);
        let first : any = libraryMap.getLibrary("dart:first");
        expect(first,isNotNull);
        expect(first.category,"Client");
        expect(first.path,"first/first.dart");
        expect(first.shortName,"dart:first");
        expect(first.isDart2JsLibrary,false);
        expect(first.isDocumented,true);
        expect(first.isImplementation,false);
        expect(first.isVmLibrary,true);
        let second : any = libraryMap.getLibrary("dart:second");
        expect(second,isNotNull);
        expect(second.category,"Server");
        expect(second.path,"second/second.dart");
        expect(second.shortName,"dart:second");
        expect(second.isDart2JsLibrary,false);
        expect(second.isDocumented,false);
        expect(second.isImplementation,true);
        expect(second.isVmLibrary,false);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SdkLibrariesReaderTest() {
    }
}

export class properties {
}
