/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/command_line/arguments_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ArgumentsTest);
    });
};
export namespace ArgumentsTest {
    export type Constructors = 'ArgumentsTest';
    export type Interface = Omit<ArgumentsTest, Constructors>;
}
@DartClass
export class ArgumentsTest {
    test_createContextBuilderOptions_all() : void {
        let dartSdkSummaryPath : string = 'a';
        let defaultAnalysisOptionsFilePath : string = 'b';
        let defaultPackageFilePath : string = 'c';
        let defaultPackagesDirectoryPath : string = 'd';
        let provider : any = new bare.createInstance(any,null);
        let parser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(parser);
        let args : core.DartList<string> = new core.DartList.literal(`--dart-sdk-summary=${dartSdkSummaryPath}`,'-Dfoo=1','-Dbar=2','--enable-strict-call-checks','--no-implicit-casts','--no-implicit-dynamic',`--options=${defaultAnalysisOptionsFilePath}`,`--packages=${defaultPackageFilePath}`,`--package-root=${defaultPackagesDirectoryPath}`,'--strong','--supermixin');
        let result : any = parse(provider,parser,args);
        let options : any = createContextBuilderOptions(result);
        expect(options,isNotNull);
        expect(options.dartSdkSummaryPath,dartSdkSummaryPath);
        let declaredVariables : core.DartMap<string,string> = options.declaredVariables;
        expect(declaredVariables,hasLength(2));
        expect(declaredVariables.get('foo'),'1');
        expect(declaredVariables.get('bar'),'2');
        expect(options.defaultAnalysisOptionsFilePath,defaultAnalysisOptionsFilePath);
        expect(options.defaultPackageFilePath,defaultPackageFilePath);
        expect(options.defaultPackagesDirectoryPath,defaultPackagesDirectoryPath);
        let defaultOptions : any = options.defaultOptions;
        expect(defaultOptions,isNotNull);
        expect(defaultOptions.enableStrictCallChecks,true);
        expect(defaultOptions.strongMode,true);
        expect(defaultOptions.implicitCasts,false);
        expect(defaultOptions.implicitDynamic,false);
    }
    test_createContextBuilderOptions_none() : void {
        let provider : any = new bare.createInstance(any,null);
        let parser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(parser);
        let args : core.DartList<string> = new core.DartList.literal();
        let result : any = parse(provider,parser,args);
        let options : any = createContextBuilderOptions(result);
        expect(options,isNotNull);
        expect(options.dartSdkSummaryPath,isNull);
        expect(options.declaredVariables,isEmpty);
        expect(options.defaultAnalysisOptionsFilePath,isNull);
        expect(options.defaultPackageFilePath,isNull);
        expect(options.defaultPackagesDirectoryPath,isNull);
        let defaultOptions : any = options.defaultOptions;
        expect(defaultOptions,isNotNull);
        expect(defaultOptions.enableStrictCallChecks,false);
        expect(defaultOptions.strongMode,false);
        expect(defaultOptions.implicitCasts,true);
        expect(defaultOptions.implicitDynamic,true);
    }
    test_createDartSdkManager_noPath_noSummaries() : void {
        let provider : any = new bare.createInstance(any,null);
        let parser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(parser);
        let args : core.DartList<string> = new core.DartList.literal();
        let result : any = parse(provider,parser,args);
        let manager : any = createDartSdkManager(provider,false,result);
        expect(manager,isNotNull);
        expect(manager.defaultSdkDirectory,FolderBasedDartSdk.defaultSdkDirectory(provider));
        expect(manager.canUseSummaries,false);
    }
    test_createDartSdkManager_noPath_summaries() : void {
        let provider : any = new bare.createInstance(any,null);
        let parser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(parser);
        let args : core.DartList<string> = new core.DartList.literal();
        let result : any = parse(provider,parser,args);
        let manager : any = createDartSdkManager(provider,true,result);
        expect(manager,isNotNull);
        expect(manager.defaultSdkDirectory,FolderBasedDartSdk.defaultSdkDirectory(provider));
        expect(manager.canUseSummaries,true);
    }
    test_createDartSdkManager_path_noSummaries() : void {
        let provider : any = new bare.createInstance(any,null);
        let parser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(parser);
        let args : core.DartList<string> = new core.DartList.literal('--dart-sdk=x');
        let result : any = parse(provider,parser,args);
        let manager : any = createDartSdkManager(provider,false,result);
        expect(manager,isNotNull);
        expect(manager.defaultSdkDirectory,'x');
        expect(manager.canUseSummaries,false);
    }
    test_createDartSdkManager_path_summaries() : void {
        let provider : any = new bare.createInstance(any,null);
        let parser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(parser);
        let args : core.DartList<string> = new core.DartList.literal('--dart-sdk=y');
        let result : any = parse(provider,parser,args);
        let manager : any = createDartSdkManager(provider,true,result);
        expect(manager,isNotNull);
        expect(manager.defaultSdkDirectory,'y');
        expect(manager.canUseSummaries,true);
    }
    test_defineAnalysisArguments() : void {
        let parser : any = new bare.createInstance(any,null);
        defineAnalysisArguments(parser);
        expect(parser.options,hasLength(14));
    }
    test_extractDefinedVariables() : void {
        let args : core.DartList<string> = new core.DartList.literal('--a','-Dbaz','go','-Dc=d','e=f','-Dy=','-Dx');
        let definedVariables : core.DartMap<string,string> = new core.DartMap.literal([
            ['one','two']]);
        args = extractDefinedVariables(args,definedVariables);
        expect(args,orderedEquals(new core.DartList.literal('--a','e=f','-Dx')));
        expect(definedVariables.get('one'),'two');
        expect(definedVariables.get('two'),isNull);
        expect(definedVariables.get('baz'),'go');
        expect(definedVariables.get('go'),isNull);
        expect(definedVariables.get('c'),'d');
        expect(definedVariables.get('d'),isNull);
        expect(definedVariables.get('y'),'');
        expect(definedVariables,hasLength(4));
    }
    test_filterUnknownArguments() : void {
        let args : core.DartList<string> = new core.DartList.literal('--a','--b','--c=0','--d=1','-e=2','-f','bar');
        let parser : any = new bare.createInstance(any,null);
        parser.addFlag('a');
        parser.addOption('c');
        parser.addOption('ee',{
            abbr : 'e'});
        parser.addFlag('ff',{
            abbr : 'f'});
        let result : core.DartList<string> = filterUnknownArguments(args,parser);
        expect(result,orderedEquals(new core.DartList.literal('--a','--c=0','-e=2','-f','bar')));
    }
    test_parse_noReplacement_noIgnored() : void {
        let provider : any = new bare.createInstance(any,null);
        let parser : any = new bare.createInstance(any,null);
        parser.addFlag('xx');
        parser.addOption('yy');
        let args : core.DartList<string> = new core.DartList.literal('--xx','--yy=abc','foo','bar');
        let result : any = parse(provider,parser,args);
        expect(result,isNotNull);
        expect(op(Op.INDEX,result,'xx'),true);
        expect(op(Op.INDEX,result,'yy'),'abc');
        expect(result.rest,orderedEquals(new core.DartList.literal('foo','bar')));
    }
    test_preprocessArgs_noReplacement() : void {
        let provider : any = new bare.createInstance(any,null);
        let original : core.DartList<string> = new core.DartList.literal('--xx' + '--yy' + 'baz');
        let result : core.DartList<string> = preprocessArgs(provider,original);
        expect(result,orderedEquals(original));
        expect(core.identical(original,result),isFalse);
    }
    test_preprocessArgs_replacement_exists() : void {
        let provider : any = new bare.createInstance(any,null);
        let filePath : string = provider.convertPath('/args.txt');
        provider.newFile(filePath,'-a\n--xx\n\nfoo\nbar\n');
        let result : core.DartList<string> = preprocessArgs(provider,new core.DartList.literal('--preserved',`@${filePath}`));
        expect(result,orderedEquals(new core.DartList.literal('--preserved','-a','--xx','foo','bar')));
    }
    test_preprocessArgs_replacement_nonexistent() : void {
        let provider : any = new bare.createInstance(any,null);
        let filePath : string = provider.convertPath('/args.txt');
        let args : core.DartList<string> = new core.DartList.literal('ignored',`@${filePath}`);
        try {
            preprocessArgs(provider,args);
            fail('Expect exception');
        } catch (__error__) {

            if (is(__error__,core.Exception)){
                let e : core.Exception = __error__;
                expect(e.toString(),contains('Failed to read file'));
                expect(e.toString(),contains(`@${filePath}`));
            }
        }
    }
    test_preprocessArgs_replacement_notLast() : void {
        let provider : any = new bare.createInstance(any,null);
        let filePath : string = provider.convertPath('/args.txt');
        let args : core.DartList<string> = new core.DartList.literal('a',`@${filePath}`,'b');
        let result : core.DartList<string> = preprocessArgs(provider,args);
        expect(result,orderedEquals(args));
    }
    constructor() {
    }
    @defaultConstructor
    ArgumentsTest() {
    }
}

export class properties {
}
