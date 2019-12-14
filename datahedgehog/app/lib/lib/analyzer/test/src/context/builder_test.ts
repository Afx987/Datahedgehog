/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/context/builder_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";
import * as lib5 from "@dart2ts.packages/path/lib/path";
import * as lib6 from "@dart2ts/dart/uri";
import * as lib7 from "./mock_sdk";
import * as lib8 from "./../../embedder_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ContextBuilderTest);
        defineReflectiveTests(EmbedderYamlLocatorTest);
    });
};
export namespace ContextBuilderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ContextBuilderTest';
    export type Interface = Omit<ContextBuilderTest, Constructors>;
}
@DartClass
export class ContextBuilderTest extends lib3.EngineTestCase {
    resourceProvider : any;

    pathContext : lib4.Context;

    sdkManager : any;

    contentCache : any;

    builderOptions : any;

    builder : any;

    defaultSdkPath : string;

    _mockLintRule : _MockLintRule;

    _mockLintRule2 : _MockLintRule;

    _mockLintRule3 : _MockLintRule;

    convertedDirectoryUri(directoryPath : string) : lib6.Uri {
        return new lib6.Uri.directory(this.resourceProvider.convertPath(directoryPath),{
            windows : op(Op.EQUALS,this.pathContext.style,lib5.properties.windows.style)});
    }
    createDefaultSdk(sdkDir : any) : void {
        this.defaultSdkPath = this.pathContext.join(sdkDir.path,'default','sdk');
        let librariesFilePath : string = this.pathContext.join(this.defaultSdkPath,'lib','_internal','sdk_library_metadata','lib','libraries.dart');
        this.resourceProvider.newFile(librariesFilePath,'const Map<String, LibraryInfo> libraries = const {\n  "async": const LibraryInfo("async/async.dart"),\n  "core": const LibraryInfo("core/core.dart"),\n};\n');
        this.sdkManager = new bare.createInstance(any,null,this.defaultSdkPath,false);
        this.builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : this.builderOptions});
    }
    createFile(path : string,content : string) : void {
        this.resourceProvider.newFile(path,content);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        this.pathContext = this.resourceProvider.pathContext;
        new lib7.MockSdk({
            resourceProvider : this.resourceProvider});
        this.sdkManager = new bare.createInstance(any,null,this.resourceProvider.convertPath('/sdk'),false);
        this.contentCache = new bare.createInstance(any,null);
        this.builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : this.builderOptions});
    }
    test_buildContext() : void {
        fail('Incomplete test');
    }
    test_cmdline_lint_default() : void {
        this._defineMockLintRules();
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal(`--${lintsFlag}`));
        let builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : createContextBuilderOptions(argResults)});
        let expected : any = new bare.createInstance(any,null);
        expected.lint = true;
        expected.lintRules = Registry.ruleRegistry.defaultRules;
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'');
        let options : any = builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_cmdline_lint_defined() : void {
        this._defineMockLintRules();
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal(`--${lintsFlag}`));
        let builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : createContextBuilderOptions(argResults)});
        let expected : any = new bare.createInstance(any,null);
        expected.lint = true;
        expected.lintRules = new core.DartList.literal<any>(op(Op.INDEX,Registry.ruleRegistry,'mock_lint_rule'));
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'linter:\n  rules:\n    - mock_lint_rule\n');
        let options : any = builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_cmdline_lint_off() : void {
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal(`--no-${lintsFlag}`));
        let builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : createContextBuilderOptions(argResults)});
        let expected : any = new bare.createInstance(any,null);
        expected.lint = false;
        expected.lintRules = new core.DartList.literal<any>(op(Op.INDEX,Registry.ruleRegistry,'mock_lint_rule'));
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'linter:\n  rules:\n    - mock_lint_rule\n');
        let options : any = builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_cmdline_lint_unspecified_1() : void {
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal());
        let builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : createContextBuilderOptions(argResults)});
        let expected : any = new bare.createInstance(any,null);
        expected.lint = true;
        expected.lintRules = new core.DartList.literal<any>(op(Op.INDEX,Registry.ruleRegistry,'mock_lint_rule'));
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'linter:\n  rules:\n    - mock_lint_rule\n');
        let options : any = builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_cmdline_lint_unspecified_2() : void {
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal());
        let builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : createContextBuilderOptions(argResults)});
        let expected : any = new bare.createInstance(any,null);
        expected.lint = false;
        expected.lintRules = new core.DartList.literal<any>();
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'');
        let options : any = builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_cmdline_options_override_options_file() : void {
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal(`--${enableStrictCallChecksFlag}`));
        let builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : createContextBuilderOptions(argResults)});
        let expected : any = new bare.createInstance(any,null);
        expected.enableSuperMixins = true;
        expected.enableStrictCallChecks = true;
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'analyzer:\n  language:\n    enableSuperMixins : true\n    enableStrictCallChecks : false\n');
        let options : any = builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_convertPackagesToMap_noPackages() : void {
        expect(this.builder.convertPackagesToMap(Packages.noPackages),isEmpty);
    }
    test_convertPackagesToMap_null() : void {
        expect(this.builder.convertPackagesToMap(null),isEmpty);
    }
    test_convertPackagesToMap_packages() : void {
        let fooName : string = 'foo';
        let fooPath : string = this.resourceProvider.convertPath('/pkg/foo');
        let fooUri : lib6.Uri = this.pathContext.toUri(fooPath);
        let barName : string = 'bar';
        let barPath : string = this.resourceProvider.convertPath('/pkg/bar');
        let barUri : lib6.Uri = this.pathContext.toUri(barPath);
        let packages : any = new bare.createInstance(any,null,new core.DartMap.literal([
            [fooName,fooUri],
            [barName,barUri]]));
        let result : core.DartMap<string,core.DartList<any>> = this.builder.convertPackagesToMap(packages);
        expect(result,isNotNull);
        expect(result,hasLength(2));
        expect(result.get(fooName),hasLength(1));
        expect(result.get(fooName)[0].path,fooPath);
        expect(result.get(barName),hasLength(1));
        expect(result.get(barName)[0].path,barPath);
    }
    test_createDefaultOptions_default() : void {
        let defaultOptions : any = new bare.createInstance(any,null);
        defaultOptions.dart2jsHint = !defaultOptions.dart2jsHint;
        defaultOptions.enableLazyAssignmentOperators = !defaultOptions.enableLazyAssignmentOperators;
        defaultOptions.enableStrictCallChecks = !defaultOptions.enableStrictCallChecks;
        defaultOptions.enableSuperMixins = !defaultOptions.enableSuperMixins;
        this.builderOptions.defaultOptions = defaultOptions;
        let options : any = this.builder.createDefaultOptions();
        this._expectEqualOptions(options,defaultOptions);
    }
    test_createDefaultOptions_noDefault() : void {
        let options : any = this.builder.createDefaultOptions();
        this._expectEqualOptions(options,new bare.createInstance(any,null));
    }
    test_createPackageMap_fromPackageDirectory_explicit() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let projectPath : string = this.pathContext.join(rootPath,'project');
        let packageDirPath : string = this.pathContext.join(rootPath,'packages');
        let fooName : string = 'foo';
        let fooPath : string = this.pathContext.join(packageDirPath,fooName);
        let barName : string = 'bar';
        let barPath : string = this.pathContext.join(packageDirPath,barName);
        this.resourceProvider.newFolder(projectPath);
        this.resourceProvider.newFolder(fooPath);
        this.resourceProvider.newFolder(barPath);
        this.builderOptions.defaultPackagesDirectoryPath = packageDirPath;
        let packages : any = this.builder.createPackageMap(projectPath);
        expect(packages,isNotNull);
        let map : core.DartMap<string,lib6.Uri> = packages.asMap();
        expect(map,hasLength(2));
        expect(map.get(fooName),this.convertedDirectoryUri(fooPath));
        expect(map.get(barName),this.convertedDirectoryUri(barPath));
    }
    test_createPackageMap_fromPackageDirectory_inRoot() : void {
        let projectPath : string = this.resourceProvider.convertPath('/root/project');
        let packageDirPath : string = this.pathContext.join(projectPath,'packages');
        let fooName : string = 'foo';
        let fooPath : string = this.pathContext.join(packageDirPath,fooName);
        let barName : string = 'bar';
        let barPath : string = this.pathContext.join(packageDirPath,barName);
        this.resourceProvider.newFolder(fooPath);
        this.resourceProvider.newFolder(barPath);
        let packages : any = this.builder.createPackageMap(projectPath);
        expect(packages,isNotNull);
        let map : core.DartMap<string,lib6.Uri> = packages.asMap();
        expect(map,hasLength(2));
        expect(map.get(fooName),this.convertedDirectoryUri(fooPath));
        expect(map.get(barName),this.convertedDirectoryUri(barPath));
    }
    test_createPackageMap_fromPackageFile_explicit() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let projectPath : string = this.pathContext.join(rootPath,'project');
        let packageFilePath : string = this.pathContext.join(rootPath,'child','.packages');
        this.resourceProvider.newFolder(projectPath);
        let fooUri : lib6.Uri = this.convertedDirectoryUri('/pkg/foo');
        let barUri : lib6.Uri = this.convertedDirectoryUri('/pkg/bar');
        this.createFile(packageFilePath,`foo:${fooUri}\nbar:${barUri}\n`);
        this.builderOptions.defaultPackageFilePath = packageFilePath;
        let packages : any = this.builder.createPackageMap(projectPath);
        expect(packages,isNotNull);
        let map : core.DartMap<string,lib6.Uri> = packages.asMap();
        expect(map,hasLength(2));
        expect(map.get('foo'),fooUri);
        expect(map.get('bar'),barUri);
    }
    test_createPackageMap_fromPackageFile_inParentOfRoot() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let projectPath : string = this.pathContext.join(rootPath,'project');
        let packageFilePath : string = this.pathContext.join(rootPath,'.packages');
        this.resourceProvider.newFolder(projectPath);
        let fooUri : lib6.Uri = this.convertedDirectoryUri('/pkg/foo');
        let barUri : lib6.Uri = this.convertedDirectoryUri('/pkg/bar');
        this.createFile(packageFilePath,`foo:${fooUri}\nbar:${barUri}\n`);
        let packages : any = this.builder.createPackageMap(projectPath);
        expect(packages,isNotNull);
        let map : core.DartMap<string,lib6.Uri> = packages.asMap();
        expect(map,hasLength(2));
        expect(map.get('foo'),fooUri);
        expect(map.get('bar'),barUri);
    }
    test_createPackageMap_fromPackageFile_inRoot() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let projectPath : string = this.pathContext.join(rootPath,'project');
        let packageFilePath : string = this.pathContext.join(projectPath,'.packages');
        this.resourceProvider.newFolder(projectPath);
        let fooUri : lib6.Uri = this.convertedDirectoryUri('/pkg/foo');
        let barUri : lib6.Uri = this.convertedDirectoryUri('/pkg/bar');
        this.createFile(packageFilePath,`foo:${fooUri}\nbar:${barUri}\n`);
        let packages : any = this.builder.createPackageMap(projectPath);
        expect(packages,isNotNull);
        let map : core.DartMap<string,lib6.Uri> = packages.asMap();
        expect(map,hasLength(2));
        expect(map.get('foo'),fooUri);
        expect(map.get('bar'),barUri);
    }
    test_createPackageMap_none() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        this.resourceProvider.newFolder(rootPath);
        let packages : any = this.builder.createPackageMap(rootPath);
        expect(packages,same(Packages.noPackages));
    }
    test_createPackageMap_rootDoesNotExist() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let packages : any = this.builder.createPackageMap(rootPath);
        expect(packages,same(Packages.noPackages));
    }
    test_createSourceFactory_bazelWorkspace_fileProvider() : void {
        var _p : (path : string) => string = (path : string) : string =>  {
            return this.resourceProvider.convertPath(path);
        };
        let projectPath : string = _p('/workspace/my/module');
        this.resourceProvider.newFile(_p('/workspace/WORKSPACE'),'');
        this.resourceProvider.newFolder(_p('/workspace/bazel-bin'));
        this.resourceProvider.newFolder(_p('/workspace/bazel-genfiles'));
        this.resourceProvider.newFolder(projectPath);
        let options : any = new bare.createInstance(any,null);
        let factory : any = this.builder.createSourceFactory(projectPath,options);
        expect(factory.resolvers,contains(predicate((r : any) =>  {
            return is(r, any);
        })));
        expect(factory.resolvers,contains(predicate((r : any) =>  {
            return is(r, any);
        })));
    }
    test_createSourceFactory_bazelWorkspace_withPackagesFile() : void {
        var _p : (path : string) => string = (path : string) : string =>  {
            return this.resourceProvider.convertPath(path);
        };
        let projectPath : string = _p('/workspace/my/module');
        this.resourceProvider.newFile(_p('/workspace/WORKSPACE'),'');
        this.resourceProvider.newFolder(_p('/workspace/bazel-bin'));
        this.resourceProvider.newFolder(_p('/workspace/bazel-genfiles'));
        this.resourceProvider.newFolder(projectPath);
        this.resourceProvider.newFile(_p(lib5.join(projectPath,'.packages')),'');
        let options : any = new bare.createInstance(any,null);
        let factory : any = this.builder.createSourceFactory(projectPath,options);
        expect(factory.resolvers,contains(predicate((r : any) =>  {
            return is(r, any);
        })));
        expect(factory.resolvers,contains(predicate((r : any) =>  {
            return is(r, any);
        })));
    }
    test_createSourceFactory_noProvider_packages_embedder_extensions() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let rootFolder : any = this.resourceProvider.getFolder(rootPath);
        this.createDefaultSdk(rootFolder);
        let projectPath : string = this.pathContext.join(rootPath,'project');
        let packageFilePath : string = this.pathContext.join(projectPath,'.packages');
        let packageA : string = this.pathContext.join(rootPath,'pkgs','a');
        let embedderPath : string = this.pathContext.join(packageA,'_embedder.yaml');
        let packageB : string = this.pathContext.join(rootPath,'pkgs','b');
        let extensionPath : string = this.pathContext.join(packageB,'_sdkext');
        this.createFile(packageFilePath,`a:${this.pathContext.toUri(packageA)}\nb:${this.pathContext.toUri(packageB)}\n`);
        let asyncPath : string = this.pathContext.join(packageA,'sdk','async.dart');
        let corePath : string = this.pathContext.join(packageA,'sdk','core.dart');
        this.createFile(embedderPath,`embedded_libs:\n  "dart:async": ${this._relativeUri(asyncPath,{
            from : packageA})}\n  "dart:core": ${this._relativeUri(corePath,{
            from : packageA})}\n`);
        let fooPath : string = this.pathContext.join(packageB,'ext','foo.dart');
        this.createFile(extensionPath,`{\n"dart:foo": "${this._relativeUri(fooPath,{
            from : packageB})}"\n}`);
        let options : any = new bare.createInstance(any,null);
        let factory : any = this.builder.createSourceFactory(projectPath,options);
        let asyncSource : any = factory.forUri('dart:async');
        expect(asyncSource,isNotNull);
        expect(asyncSource.fullName,asyncPath);
        let fooSource : any = factory.forUri('dart:foo');
        expect(fooSource,isNotNull);
        expect(fooSource.fullName,fooPath);
        let packageSource : any = factory.forUri('package:b/b.dart');
        expect(packageSource,isNotNull);
        expect(packageSource.fullName,this.pathContext.join(packageB,'b.dart'));
    }
    test_createSourceFactory_noProvider_packages_embedder_noExtensions() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let rootFolder : any = this.resourceProvider.getFolder(rootPath);
        this.createDefaultSdk(rootFolder);
        let projectPath : string = this.pathContext.join(rootPath,'project');
        let packageFilePath : string = this.pathContext.join(projectPath,'.packages');
        let packageA : string = this.pathContext.join(rootPath,'pkgs','a');
        let embedderPath : string = this.pathContext.join(packageA,'_embedder.yaml');
        let packageB : string = this.pathContext.join(rootPath,'pkgs','b');
        this.createFile(packageFilePath,`a:${this.pathContext.toUri(packageA)}\nb:${this.pathContext.toUri(packageB)}\n`);
        let asyncPath : string = this.pathContext.join(packageA,'sdk','async.dart');
        let corePath : string = this.pathContext.join(packageA,'sdk','core.dart');
        this.createFile(embedderPath,`embedded_libs:\n  "dart:async": ${this._relativeUri(asyncPath,{
            from : packageA})}\n  "dart:core": ${this._relativeUri(corePath,{
            from : packageA})}\n`);
        let options : any = new bare.createInstance(any,null);
        let factory : any = this.builder.createSourceFactory(projectPath,options);
        let dartSource : any = factory.forUri('dart:async');
        expect(dartSource,isNotNull);
        expect(dartSource.fullName,asyncPath);
        let packageSource : any = factory.forUri('package:b/b.dart');
        expect(packageSource,isNotNull);
        expect(packageSource.fullName,this.pathContext.join(packageB,'b.dart'));
    }
    test_createSourceFactory_noProvider_packages_noEmbedder_extensions() : void {
        fail('Incomplete test');
    }
    test_createSourceFactory_noProvider_packages_noEmbedder_noExtensions() : void {
        let rootPath : string = this.resourceProvider.convertPath('/root');
        let rootFolder : any = this.resourceProvider.getFolder(rootPath);
        this.createDefaultSdk(rootFolder);
        let projectPath : string = this.pathContext.join(rootPath,'project');
        let packageFilePath : string = this.pathContext.join(projectPath,'.packages');
        let packageA : string = this.pathContext.join(rootPath,'pkgs','a');
        let packageB : string = this.pathContext.join(rootPath,'pkgs','b');
        this.createFile(packageFilePath,`a:${this.pathContext.toUri(packageA)}\nb:${this.pathContext.toUri(packageB)}\n`);
        let options : any = new bare.createInstance(any,null);
        let factory : any = this.builder.createSourceFactory(projectPath,options);
        let dartSource : any = factory.forUri('dart:core');
        expect(dartSource,isNotNull);
        expect(dartSource.fullName,this.pathContext.join(this.defaultSdkPath,'lib','core','core.dart'));
        let packageSource : any = factory.forUri('package:a/a.dart');
        expect(packageSource,isNotNull);
        expect(packageSource.fullName,this.pathContext.join(packageA,'a.dart'));
    }
    test_declareVariables_emptyMap() : void {
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        let expected : core.DartIterable<string> = context.declaredVariables.variableNames;
        this.builderOptions.declaredVariables = new core.DartMap.literal([
        ]);
        this.builder.declareVariables(context);
        expect(context.declaredVariables.variableNames,unorderedEquals(expected));
    }
    test_declareVariables_nonEmptyMap() : void {
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        let expected : core.DartList<string> = context.declaredVariables.variableNames.toList();
        expect(expected,isNot(contains('a')));
        expect(expected,isNot(contains('b')));
        expected.addAll(new core.DartList.literal('a','b'));
        this.builderOptions.declaredVariables = new core.DartMap.literal([
            ['a','a'],
            ['b','b']]);
        this.builder.declareVariables(context);
        expect(context.declaredVariables.variableNames,unorderedEquals(expected));
    }
    test_declareVariables_null() : void {
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        let expected : core.DartIterable<string> = context.declaredVariables.variableNames;
        this.builder.declareVariables(context);
        expect(context.declaredVariables.variableNames,unorderedEquals(expected));
    }
    test_findSdk_embedder_extensions() : void {
        fail('Incomplete test');
    }
    test_findSdk_embedder_noExtensions() : void {
        fail('Incomplete test');
    }
    test_findSdk_noEmbedder_extensions() : void {
        fail('Incomplete test');
    }
    test_findSdk_noEmbedder_noExtensions() : void {
        fail('Incomplete test');
    }
    test_findSdk_noPackageMap() : void {
        let sdk : any = this.builder.findSdk(null,new bare.createInstance(any,null));
        expect(sdk,isNotNull);
    }
    test_findSdk_noPackageMap_html_spec() : void {
        let sdk : any = this.builder.findSdk(null,new bare.createInstance(any,null));
        expect(sdk,isNotNull);
        let htmlSource : any = sdk.mapDartUri('dart:html');
        expect(htmlSource.fullName,this.resourceProvider.convertPath('/sdk/lib/html/dartium/html_dartium.dart'));
        expect(htmlSource.exists(),isTrue);
    }
    test_findSdk_noPackageMap_html_strong() : void {
        let sdk : any = this.builder.findSdk(null,((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(sdk,isNotNull);
        let htmlSource : any = sdk.mapDartUri('dart:html');
        expect(htmlSource.fullName,this.resourceProvider.convertPath('/sdk/lib/html/dart2js/html_dart2js.dart'));
        expect(htmlSource.exists(),isTrue);
    }
    test_getAnalysisOptions_default_bazel() : void {
        this._defineMockLintRules();
        let defaultOptions : any = new bare.createInstance(any,null);
        this.builderOptions.defaultOptions = defaultOptions;
        let expected : any = new bare.createInstance(any,null);
        expected.lint = true;
        expected.lintRules = new core.DartList.literal<any>(this._mockLintRule);
        this.createFile(this.resourceProvider.convertPath('/root/WORKSPACE'),'');
        this.createFile(this.resourceProvider.convertPath('/root/dart/analysis_options/lib/default.yaml'),'linter:\n  rules:\n    - mock_lint_rule\n');
        this.createFile(this.resourceProvider.convertPath('/root/dart/analysis_options/lib/flutter.yaml'),'linter:\n  rules:\n    - mock_lint_rule2\n');
        let options : any = this.builder.getAnalysisOptions(this.resourceProvider.convertPath('/root/some/path'));
        this._expectEqualOptions(options,expected);
    }
    test_getAnalysisOptions_default_flutter() : void {
        this._defineMockLintRules();
        let defaultOptions : any = new bare.createInstance(any,null);
        this.builderOptions.defaultOptions = defaultOptions;
        let expected : any = new bare.createInstance(any,null);
        expected.lint = true;
        expected.lintRules = new core.DartList.literal<any>(this._mockLintRule);
        let packagesFilePath : string = this.resourceProvider.convertPath('/some/directory/path/.packages');
        this.createFile(packagesFilePath,'flutter:/pkg/flutter/lib/');
        let optionsFilePath : string = this.resourceProvider.convertPath('/pkg/flutter/lib/analysis_options_user.yaml');
        this.createFile(optionsFilePath,'linter:\n  rules:\n    - mock_lint_rule\n');
        let projPath : string = this.resourceProvider.convertPath('/some/directory/path');
        let options : any = this.builder.getAnalysisOptions(projPath);
        this._expectEqualOptions(options,expected);
    }
    test_getAnalysisOptions_default_flutter_disabled() : void {
        this._defineMockLintRules();
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal(`--no-${packageDefaultAnalysisOptions}`));
        this.builderOptions = createContextBuilderOptions(argResults);
        expect(this.builderOptions.packageDefaultAnalysisOptions,isFalse);
        this.builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : this.builderOptions});
        let expected : any = new bare.createInstance(any,null);
        let packagesFilePath : string = this.resourceProvider.convertPath('/some/directory/path/.packages');
        this.createFile(packagesFilePath,'flutter:/pkg/flutter/lib/');
        let optionsFilePath : string = this.resourceProvider.convertPath('/pkg/flutter/lib/analysis_options_user.yaml');
        this.createFile(optionsFilePath,'linter:\n  rules:\n    - mock_lint_rule\n');
        let projPath : string = this.resourceProvider.convertPath('/some/directory/path');
        let options : any = this.builder.getAnalysisOptions(projPath);
        this._expectEqualOptions(options,expected);
    }
    test_getAnalysisOptions_default_noOverrides() : void {
        let defaultOptions : any = new bare.createInstance(any,null);
        defaultOptions.enableLazyAssignmentOperators = true;
        this.builderOptions.defaultOptions = defaultOptions;
        let expected : any = new bare.createInstance(any,null);
        expected.enableLazyAssignmentOperators = true;
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'linter:\n  rules:\n    - empty_constructor_bodies\n');
        let options : any = this.builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_getAnalysisOptions_default_overrides() : void {
        let defaultOptions : any = new bare.createInstance(any,null);
        defaultOptions.enableSuperMixins = false;
        defaultOptions.enableLazyAssignmentOperators = true;
        this.builderOptions.defaultOptions = defaultOptions;
        let expected : any = new bare.createInstance(any,null);
        expected.enableSuperMixins = true;
        expected.enableLazyAssignmentOperators = true;
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'analyzer:\n  language:\n    enableSuperMixins : true\n');
        let options : any = this.builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_getAnalysisOptions_includes() : void {
        this._defineMockLintRules();
        let defaultOptions : any = new bare.createInstance(any,null);
        defaultOptions.enableSuperMixins = false;
        this.builderOptions.defaultOptions = defaultOptions;
        let expected : any = new bare.createInstance(any,null);
        expected.enableSuperMixins = true;
        expected.lint = true;
        expected.lintRules = new core.DartList.literal<any>(this._mockLintRule,this._mockLintRule2,this._mockLintRule3);
        this.resourceProvider.newFile(this.resourceProvider.convertPath('/mypkgs/somepkg/lib/here.yaml'),'linter:\n  rules:\n    - mock_lint_rule3\n');
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        this.resourceProvider.newFile(this.pathContext.join(path,'.packages'),'somepkg:../../../mypkgs/somepkg/lib\n');
        this.resourceProvider.newFile(this.pathContext.join(path,'bar.yaml'),'include: package:somepkg/here.yaml\nanalyzer:\n  language:\n    enableSuperMixins : true\nlinter:\n  rules:\n    - mock_lint_rule2\n');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'include: bar.yaml\nlinter:\n  rules:\n    - mock_lint_rule\n');
        let options : any = this.builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_getAnalysisOptions_invalid() : void {
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,';');
        let options : any = this.builder.getAnalysisOptions(path);
        expect(options,isNotNull);
    }
    test_getAnalysisOptions_noDefault_noOverrides() : void {
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'linter:\n  rules:\n    - empty_constructor_bodies\n');
        let options : any = this.builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,new bare.createInstance(any,null));
    }
    test_getAnalysisOptions_noDefault_overrides() : void {
        let expected : any = new bare.createInstance(any,null);
        expected.enableSuperMixins = true;
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'analyzer:\n  language:\n    enableSuperMixins : true\n');
        let options : any = this.builder.getAnalysisOptions(path);
        this._expectEqualOptions(options,expected);
    }
    test_getAnalysisOptions_gnWorkspace() : void {
        var _p : (path : string) => string = (path : string) : string =>  {
            return this.resourceProvider.convertPath(path);
        };
        let projectPath : string = _p('/workspace/some/path');
        this.resourceProvider.newFolder(_p('/workspace/.jiri_root'));
        this.resourceProvider.newFile(_p('/workspace/out/debug/gen/dart.sources/foo_pkg'),_p('/workspace/foo_pkg/lib'));
        this.resourceProvider.newFolder(projectPath);
        let argParser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(argParser);
        let argResults : any = argParser.parse(new core.DartList.literal());
        this.builderOptions = createContextBuilderOptions(argResults);
        expect(this.builderOptions.packageDefaultAnalysisOptions,isTrue);
        this.builder = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,this.contentCache,{
            options : this.builderOptions});
        let expected : any = new bare.createInstance(any,null);
        let options : any = this.builder.getAnalysisOptions(projectPath);
        this._expectEqualOptions(options,expected);
    }
    test_getOptionsFile_explicit() : void {
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.resourceProvider.convertPath('/options/analysis.yaml');
        this.resourceProvider.newFile(filePath,'');
        this.builderOptions.defaultAnalysisOptionsFilePath = filePath;
        let result : any = this.builder.getOptionsFile(path);
        expect(result,isNotNull);
        expect(result.path,filePath);
    }
    test_getOptionsFile_inParentOfRoot_new() : void {
        let parentPath : string = this.resourceProvider.convertPath('/some/directory');
        let path : string = this.pathContext.join(parentPath,'path');
        let filePath : string = this.pathContext.join(parentPath,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'');
        let result : any = this.builder.getOptionsFile(path);
        expect(result,isNotNull);
        expect(result.path,filePath);
    }
    test_getOptionsFile_inParentOfRoot_old() : void {
        let parentPath : string = this.resourceProvider.convertPath('/some/directory');
        let path : string = this.pathContext.join(parentPath,'path');
        let filePath : string = this.pathContext.join(parentPath,AnalysisEngine.ANALYSIS_OPTIONS_FILE);
        this.resourceProvider.newFile(filePath,'');
        let result : any = this.builder.getOptionsFile(path);
        expect(result,isNotNull);
        expect(result.path,filePath);
    }
    test_getOptionsFile_inRoot_new() : void {
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
        this.resourceProvider.newFile(filePath,'');
        let result : any = this.builder.getOptionsFile(path);
        expect(result,isNotNull);
        expect(result.path,filePath);
    }
    test_getOptionsFile_inRoot_old() : void {
        let path : string = this.resourceProvider.convertPath('/some/directory/path');
        let filePath : string = this.pathContext.join(path,AnalysisEngine.ANALYSIS_OPTIONS_FILE);
        this.resourceProvider.newFile(filePath,'');
        let result : any = this.builder.getOptionsFile(path);
        expect(result,isNotNull);
        expect(result.path,filePath);
    }
    _defineMockLintRules() {
        this._mockLintRule = new _MockLintRule('mock_lint_rule');
        Registry.ruleRegistry.registerDefault(this._mockLintRule);
        this._mockLintRule2 = new _MockLintRule('mock_lint_rule2');
        Registry.ruleRegistry.registerDefault(this._mockLintRule2);
        this._mockLintRule3 = new _MockLintRule('mock_lint_rule3');
        Registry.ruleRegistry.register(this._mockLintRule3);
    }
    _expectEqualOptions(actual : any,expected : any) : void {
        expect(actual.analyzeFunctionBodiesPredicate,same(expected.analyzeFunctionBodiesPredicate));
        expect(actual.dart2jsHint,expected.dart2jsHint);
        expect(actual.enableLazyAssignmentOperators,expected.enableLazyAssignmentOperators);
        expect(actual.enableStrictCallChecks,expected.enableStrictCallChecks);
        expect(actual.enableSuperMixins,expected.enableSuperMixins);
        expect(actual.enableTiming,expected.enableTiming);
        expect(actual.generateImplicitErrors,expected.generateImplicitErrors);
        expect(actual.generateSdkErrors,expected.generateSdkErrors);
        expect(actual.hint,expected.hint);
        expect(actual.incremental,expected.incremental);
        expect(actual.incrementalApi,expected.incrementalApi);
        expect(actual.incrementalValidation,expected.incrementalValidation);
        expect(actual.lint,expected.lint);
        expect(actual.lintRules.map((l : any) =>  {
            return l.name;
        }),unorderedEquals(expected.lintRules.map((l : any) =>  {
            return l.name;
        })));
        expect(actual.preserveComments,expected.preserveComments);
        expect(actual.strongMode,expected.strongMode);
        expect(actual.strongModeHints,expected.strongModeHints);
        expect(actual.implicitCasts,expected.implicitCasts);
        expect(actual.implicitDynamic,expected.implicitDynamic);
        expect(actual.trackCacheDependencies,expected.trackCacheDependencies);
        expect(actual.disableCacheFlushing,expected.disableCacheFlushing);
    }
    _relativeUri(path : string,_namedArguments? : {from? : string}) : lib6.Uri {
        let {from} = Object.assign({
        }, _namedArguments );
        let relativePath : string = this.pathContext.relative(path,{
            from : from});
        return this.pathContext.toUri(relativePath);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContextBuilderTest() {
        this.builderOptions = new bare.createInstance(any,null);
        this.defaultSdkPath = null;
    }
}

export namespace EmbedderYamlLocatorTest {
    export type Constructors = lib8.EmbedderRelatedTest.Constructors | 'EmbedderYamlLocatorTest';
    export type Interface = Omit<EmbedderYamlLocatorTest, Constructors>;
}
@DartClass
export class EmbedderYamlLocatorTest extends lib8.EmbedderRelatedTest {
    test_empty() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.emptyPath))]]));
        expect(locator.embedderYamls,hasLength(0));
    }
    test_invalid() : void {
        let locator : any = new bare.createInstance(any,null,null);
        locator.addEmbedderYaml(null,'{{{,{{}}},}}');
        expect(locator.embedderYamls,hasLength(0));
    }
    test_valid() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        expect(locator.embedderYamls,hasLength(1));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmbedderYamlLocatorTest() {
    }
}

export namespace _MockLintRule {
    export type Constructors = '_MockLintRule';
    export type Interface = Omit<_MockLintRule, Constructors>;
}
@DartClass
@Implements(any)
export class _MockLintRule implements any.Interface {
    _name : string;

    constructor(_name : string) {
    }
    @defaultConstructor
    _MockLintRule(_name : string) {
        this._name = _name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._name;
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export class properties {
}
