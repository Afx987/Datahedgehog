/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/command_line/arguments.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as collection from "@dart2ts/dart/core";

export var applyAnalysisOptionFlags : (options : any,args : any,_namedArguments? : {verbosePrint? : (text : string) => void}) => void = (options : any,args : any,_namedArguments? : {verbosePrint? : (text : string) => void}) : void =>  {
    let {verbosePrint} = Object.assign({
    }, _namedArguments );
    var verbose : (text : string) => void = (text : string) : void =>  {
        if (verbosePrint != null) {
            verbosePrint(`Analysis options: ${text}`);
        }
    };
    if (args.wasParsed(properties.enableStrictCallChecksFlag)) {
        options.enableStrictCallChecks = op(Op.INDEX,args,properties.enableStrictCallChecksFlag);
        verbose(`${properties.enableStrictCallChecksFlag} = ${options.enableStrictCallChecks}`);
    }
    if (args.wasParsed(properties.enableSuperMixinFlag)) {
        options.enableSuperMixins = op(Op.INDEX,args,properties.enableSuperMixinFlag);
        verbose(`${properties.enableSuperMixinFlag} = ${options.enableSuperMixins}`);
    }
    if (args.wasParsed(properties.noImplicitCastsFlag)) {
        options.implicitCasts = !op(Op.INDEX,args,properties.noImplicitCastsFlag);
        verbose(`${properties.noImplicitCastsFlag} = ${options.implicitCasts}`);
    }
    if (args.wasParsed(properties.noImplicitDynamicFlag)) {
        options.implicitDynamic = !op(Op.INDEX,args,properties.noImplicitDynamicFlag);
        verbose(`${properties.noImplicitDynamicFlag} = ${options.implicitDynamic}`);
    }
    if (args.wasParsed(properties.strongModeFlag)) {
        options.strongMode = op(Op.INDEX,args,properties.strongModeFlag);
        verbose(`${properties.strongModeFlag} = ${options.strongMode}`);
    }
    try {
        if (args.wasParsed(properties.lintsFlag)) {
            options.lint = op(Op.INDEX,args,properties.lintsFlag);
            verbose(`${properties.lintsFlag} = ${options.lint}`);
        }
    } catch (__error__) {

        if (is(__error__,core.ArgumentError)){
        }
    }
};
export var createContextBuilderOptions : (args : any,_namedArguments? : {strongMode? : boolean,trackCacheDependencies? : boolean}) => any = (args : any,_namedArguments? : {strongMode? : boolean,trackCacheDependencies? : boolean}) : any =>  {
    let {strongMode,trackCacheDependencies} = Object.assign({
    }, _namedArguments );
    let builderOptions : any = new bare.createInstance(any,null);
    builderOptions.argResults = args;
    builderOptions.dartSdkSummaryPath = op(Op.INDEX,args,properties.sdkSummaryPathOption);
    builderOptions.defaultAnalysisOptionsFilePath = op(Op.INDEX,args,properties.analysisOptionsFileOption);
    builderOptions.defaultPackageFilePath = op(Op.INDEX,args,properties.packagesOption);
    builderOptions.defaultPackagesDirectoryPath = op(Op.INDEX,args,properties.packageRootOption);
    builderOptions.packageDefaultAnalysisOptions = op(Op.INDEX,args,properties.packageDefaultAnalysisOptions);
    let defaultOptions : any = new bare.createInstance(any,null);
    applyAnalysisOptionFlags(defaultOptions,args);
    if (strongMode != null) {
        defaultOptions.strongMode = strongMode;
    }
    if (trackCacheDependencies != null) {
        defaultOptions.trackCacheDependencies = trackCacheDependencies;
    }
    builderOptions.defaultOptions = defaultOptions;
    let declaredVariables : core.DartMap<string,string> = new core.DartMap.literal([
    ]);
    let variables : core.DartList<string> = op(Op.INDEX,args,properties.defineVariableOption) as core.DartList<string>;
    for(let variable of variables) {
        let index : number = new core.DartString(variable).indexOf('=');
        if (index < 0) {
        }else {
            let name : string = new core.DartString(variable).substring(0,index);
            if (new core.DartString(name).isNotEmpty) {
                declaredVariables.set(name,new core.DartString(variable).substring(index + 1));
            }
        }
    }
    builderOptions.declaredVariables = declaredVariables;
    return builderOptions;
};
export var createDartSdkManager : (resourceProvider : any,useSummaries : boolean,args : any) => any = (resourceProvider : any,useSummaries : boolean,args : any) : any =>  {
    let sdkPath : string = op(Op.INDEX,args,properties.sdkPathOption);
    let canUseSummaries : boolean = useSummaries && args.rest.every((sourcePath : string) =>  {
        sourcePath = lib3.properties.context.absolute(sourcePath);
        sourcePath = lib3.properties.context.normalize(sourcePath);
        return !lib3.properties.context.isWithin(sdkPath,sourcePath);
    });
    return new bare.createInstance(any,null,(sdkPath || FolderBasedDartSdk.defaultSdkDirectory(resourceProvider)),canUseSummaries);
};
export var defineAnalysisArguments : (parser : any,_namedArguments? : {hide? : boolean,ddc? : any}) => void = (parser : any,_namedArguments? : {hide? : boolean,ddc? : any}) : void =>  {
    let {hide,ddc} = Object.assign({
        "hide" : true,
        "ddc" : false}, _namedArguments );
    parser.addOption(properties.sdkPathOption,{
        help : 'The path to the Dart SDK.'});
    parser.addOption(properties.analysisOptionsFileOption,{
        help : 'Path to an analysis options file.'});
    parser.addOption(properties.packageRootOption,{
        help : 'The path to a package root directory (deprecated). ' + 'This option cannot be used with --packages.'});
    parser.addFlag(properties.strongModeFlag,{
        help : 'Enable strong static checks (https://goo.gl/DqcBsw).',defaultsTo : ddc});
    parser.addFlag(properties.noImplicitCastsFlag,{
        negatable : false,help : 'Disable implicit casts in strong mode (https://goo.gl/cTLz40).'});
    parser.addFlag(properties.noImplicitDynamicFlag,{
        negatable : false,help : 'Disable implicit dynamic (https://goo.gl/m0UgXD).'});
    parser.addOption(properties.defineVariableOption,{
        abbr : 'D',allowMultiple : true,help : 'Define environment variables. For example, "-Dfoo=bar" defines an ' + 'environment variable named "foo" whose value is "bar".',hide : hide});
    parser.addFlag(properties.packageDefaultAnalysisOptions,{
        help : 'If an analysis options file is not explicitly specified ' + `via the "--${properties.analysisOptionsFileOption}" option\n` + 'and an analysis options file cannot be found ' + 'in the project directory or any parent directory,\n' + 'then look for analysis options in the following locations:\n' + `- ${properties.flutterAnalysisOptionsPath}\n` + `- ${properties.bazelAnalysisOptionsPath}`,defaultsTo : true,negatable : true,hide : hide});
    parser.addOption(properties.packagesOption,{
        help : 'The path to the package resolution configuration file, which ' + 'supplies a mapping of package names\nto paths. This option cannot be ' + 'used with --package-root.',hide : ddc});
    parser.addOption(properties.sdkSummaryPathOption,{
        help : 'The path to the Dart SDK summary file.',hide : hide});
    parser.addFlag(properties.enableStrictCallChecksFlag,{
        help : 'Fix issue 21938.',defaultsTo : false,negatable : false,hide : hide});
    parser.addFlag(properties.enableInitializingFormalAccessFlag,{
        help : 'Enable support for allowing access to field formal parameters in a ' + 'constructor\'s initializer list.',defaultsTo : false,negatable : false,hide : hide || ddc});
    parser.addFlag(properties.enableSuperMixinFlag,{
        help : 'Relax restrictions on mixins (DEP 34).',defaultsTo : false,negatable : false,hide : hide});
    if (!ddc) {
        parser.addFlag(properties.lintsFlag,{
            help : 'Show lint results.',defaultsTo : false,negatable : true});
    }
};
export var extractDefinedVariables : (args : core.DartList<string>,definedVariables : core.DartMap<string,string>) => core.DartList<string> = (args : core.DartList<string>,definedVariables : core.DartMap<string,string>) : core.DartList<string> =>  {
    let count : number = args.length;
    let remainingArgs : core.DartList<string> = new core.DartList.literal<string>();
    for(let i : number = 0; i < count; i++){
        let arg : string = args[i];
        if (arg == '--') {
            while (i < count){
                remainingArgs.add(args[i++]);
            }
        }else if (new core.DartString(arg).startsWith("-D")) {
            let end : number = new core.DartString(arg).indexOf('=');
            if (end > 2) {
                definedVariables.set(new core.DartString(arg).substring(2,end),new core.DartString(arg).substring(end + 1));
            }else if (i + 1 < count) {
                definedVariables.set(new core.DartString(arg).substring(2),args[++i]);
            }else {
                remainingArgs.add(arg);
            }
        }else {
            remainingArgs.add(arg);
        }
    }
    return remainingArgs;
};
export var filterUnknownArguments : (args : core.DartList<string>,parser : any) => core.DartList<string> = (args : core.DartList<string>,parser : any) : core.DartList<string> =>  {
    let knownOptions : core.DartSet<string> = new core.DartHashSet<string>();
    let knownAbbreviations : core.DartSet<string> = new core.DartHashSet<string>();
    parser.options.forEach((name : string,option : any) =>  {
        knownOptions.add(name);
        let abbreviation : string = option.abbreviation;
        if (abbreviation != null) {
            knownAbbreviations.add(abbreviation);
        }
    });
    var optionName : (prefixLength : number,argument : string) => string = (prefixLength : number,argument : string) : string =>  {
        let equalsOffset : number = new core.DartString(argument).lastIndexOf('=');
        if (equalsOffset < 0) {
            return new core.DartString(argument).substring(prefixLength);
        }
        return new core.DartString(argument).substring(prefixLength,equalsOffset);
    };
    let filtered : core.DartList<string> = new core.DartList.literal<string>();
    for(let i : number = 0; i < args.length; i++){
        let argument : string = args[i];
        if (new core.DartString(argument).startsWith('--') && new core.DartString(argument).length > 2) {
            if (knownOptions.contains(optionName(2,argument))) {
                filtered.add(argument);
            }
        }else if (new core.DartString(argument).startsWith('-') && new core.DartString(argument).length > 1) {
            if (knownAbbreviations.contains(optionName(1,argument))) {
                filtered.add(argument);
            }
        }else {
            filtered.add(argument);
        }
    }
    return filtered;
};
export var parse : (provider : any,parser : any,args : core.DartList<string>) => any = (provider : any,parser : any,args : core.DartList<string>) : any =>  {
    args = preprocessArgs(provider,args);
    if (args.contains(`--${properties.ignoreUnrecognizedFlagsFlag}`)) {
        args = filterUnknownArguments(args,parser);
    }
    return parser.parse(args);
};
export var preprocessArgs : (provider : any,args : core.DartList<string>) => core.DartList<string> = (provider : any,args : core.DartList<string>) : core.DartList<string> =>  {
    args = new core.DartList.from(args);
    if (args.isEmpty) {
        return args;
    }
    let lastArg : string = args.last;
    if (new core.DartString(lastArg).startsWith('@')) {
        let argsFile : any = provider.getFile(new core.DartString(lastArg).substring(1));
        try {
            args.removeLast();
            args.addAll(argsFile.readAsStringSync().replaceAll('\n','\n').replaceAll('','\n').split('\n').where((line : string) =>  {
                return new core.DartString(line).isNotEmpty;
            }));
        } catch (__error__) {

            if (is(__error__,any)){
                let e : any = __error__;
                throw new core.Exception(`Failed to read file specified by ${lastArg} : ${e}`);
            }
        }
    }
    return args;
};
export class properties {
    private static __$analysisOptionsFileOption : string;
    static get analysisOptionsFileOption() : string { 
        if (this.__$analysisOptionsFileOption===undefined) {
            this.__$analysisOptionsFileOption = 'options';
        }
        return this.__$analysisOptionsFileOption;
    }
    static set analysisOptionsFileOption(__$value : string)  { 
        this.__$analysisOptionsFileOption = __$value;
    }

    private static __$defineVariableOption : string;
    static get defineVariableOption() : string { 
        if (this.__$defineVariableOption===undefined) {
            this.__$defineVariableOption = 'D';
        }
        return this.__$defineVariableOption;
    }
    static set defineVariableOption(__$value : string)  { 
        this.__$defineVariableOption = __$value;
    }

    private static __$enableInitializingFormalAccessFlag : string;
    static get enableInitializingFormalAccessFlag() : string { 
        if (this.__$enableInitializingFormalAccessFlag===undefined) {
            this.__$enableInitializingFormalAccessFlag = 'initializing-formal-access';
        }
        return this.__$enableInitializingFormalAccessFlag;
    }
    static set enableInitializingFormalAccessFlag(__$value : string)  { 
        this.__$enableInitializingFormalAccessFlag = __$value;
    }

    private static __$enableStrictCallChecksFlag : string;
    static get enableStrictCallChecksFlag() : string { 
        if (this.__$enableStrictCallChecksFlag===undefined) {
            this.__$enableStrictCallChecksFlag = 'enable-strict-call-checks';
        }
        return this.__$enableStrictCallChecksFlag;
    }
    static set enableStrictCallChecksFlag(__$value : string)  { 
        this.__$enableStrictCallChecksFlag = __$value;
    }

    private static __$enableSuperMixinFlag : string;
    static get enableSuperMixinFlag() : string { 
        if (this.__$enableSuperMixinFlag===undefined) {
            this.__$enableSuperMixinFlag = 'supermixin';
        }
        return this.__$enableSuperMixinFlag;
    }
    static set enableSuperMixinFlag(__$value : string)  { 
        this.__$enableSuperMixinFlag = __$value;
    }

    private static __$ignoreUnrecognizedFlagsFlag : string;
    static get ignoreUnrecognizedFlagsFlag() : string { 
        if (this.__$ignoreUnrecognizedFlagsFlag===undefined) {
            this.__$ignoreUnrecognizedFlagsFlag = 'ignore-unrecognized-flags';
        }
        return this.__$ignoreUnrecognizedFlagsFlag;
    }
    static set ignoreUnrecognizedFlagsFlag(__$value : string)  { 
        this.__$ignoreUnrecognizedFlagsFlag = __$value;
    }

    private static __$lintsFlag : string;
    static get lintsFlag() : string { 
        if (this.__$lintsFlag===undefined) {
            this.__$lintsFlag = 'lints';
        }
        return this.__$lintsFlag;
    }
    static set lintsFlag(__$value : string)  { 
        this.__$lintsFlag = __$value;
    }

    private static __$noImplicitCastsFlag : string;
    static get noImplicitCastsFlag() : string { 
        if (this.__$noImplicitCastsFlag===undefined) {
            this.__$noImplicitCastsFlag = 'no-implicit-casts';
        }
        return this.__$noImplicitCastsFlag;
    }
    static set noImplicitCastsFlag(__$value : string)  { 
        this.__$noImplicitCastsFlag = __$value;
    }

    private static __$noImplicitDynamicFlag : string;
    static get noImplicitDynamicFlag() : string { 
        if (this.__$noImplicitDynamicFlag===undefined) {
            this.__$noImplicitDynamicFlag = 'no-implicit-dynamic';
        }
        return this.__$noImplicitDynamicFlag;
    }
    static set noImplicitDynamicFlag(__$value : string)  { 
        this.__$noImplicitDynamicFlag = __$value;
    }

    private static __$packageDefaultAnalysisOptions : string;
    static get packageDefaultAnalysisOptions() : string { 
        if (this.__$packageDefaultAnalysisOptions===undefined) {
            this.__$packageDefaultAnalysisOptions = 'package-default-analysis-options';
        }
        return this.__$packageDefaultAnalysisOptions;
    }
    static set packageDefaultAnalysisOptions(__$value : string)  { 
        this.__$packageDefaultAnalysisOptions = __$value;
    }

    private static __$packageRootOption : string;
    static get packageRootOption() : string { 
        if (this.__$packageRootOption===undefined) {
            this.__$packageRootOption = 'package-root';
        }
        return this.__$packageRootOption;
    }
    static set packageRootOption(__$value : string)  { 
        this.__$packageRootOption = __$value;
    }

    private static __$packagesOption : string;
    static get packagesOption() : string { 
        if (this.__$packagesOption===undefined) {
            this.__$packagesOption = 'packages';
        }
        return this.__$packagesOption;
    }
    static set packagesOption(__$value : string)  { 
        this.__$packagesOption = __$value;
    }

    private static __$sdkPathOption : string;
    static get sdkPathOption() : string { 
        if (this.__$sdkPathOption===undefined) {
            this.__$sdkPathOption = 'dart-sdk';
        }
        return this.__$sdkPathOption;
    }
    static set sdkPathOption(__$value : string)  { 
        this.__$sdkPathOption = __$value;
    }

    private static __$sdkSummaryPathOption : string;
    static get sdkSummaryPathOption() : string { 
        if (this.__$sdkSummaryPathOption===undefined) {
            this.__$sdkSummaryPathOption = 'dart-sdk-summary';
        }
        return this.__$sdkSummaryPathOption;
    }
    static set sdkSummaryPathOption(__$value : string)  { 
        this.__$sdkSummaryPathOption = __$value;
    }

    private static __$strongModeFlag : string;
    static get strongModeFlag() : string { 
        if (this.__$strongModeFlag===undefined) {
            this.__$strongModeFlag = 'strong';
        }
        return this.__$strongModeFlag;
    }
    static set strongModeFlag(__$value : string)  { 
        this.__$strongModeFlag = __$value;
    }

    private static __$bazelAnalysisOptionsPath : string;
    static get bazelAnalysisOptionsPath() : string { 
        if (this.__$bazelAnalysisOptionsPath===undefined) {
            this.__$bazelAnalysisOptionsPath = 'package:dart.analysis_options/default.yaml';
        }
        return this.__$bazelAnalysisOptionsPath;
    }
    static set bazelAnalysisOptionsPath(__$value : string)  { 
        this.__$bazelAnalysisOptionsPath = __$value;
    }

    private static __$flutterAnalysisOptionsPath : string;
    static get flutterAnalysisOptionsPath() : string { 
        if (this.__$flutterAnalysisOptionsPath===undefined) {
            this.__$flutterAnalysisOptionsPath = 'package:flutter/analysis_options_user.yaml';
        }
        return this.__$flutterAnalysisOptionsPath;
    }
    static set flutterAnalysisOptionsPath(__$value : string)  { 
        this.__$flutterAnalysisOptionsPath = __$value;
    }

}
