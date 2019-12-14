/** Library asset:datahedgehog_monitor/lib/lib/kernel/tool/dartk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./../bin/batch_util";
import * as lib7 from "./../bin/util";

export var currentSdk : () => string = () : string =>  {
    return lib4.dirname(lib4.dirname(lib4.absolute(io.Platform.resolvedExecutable)));
};
export var getUsage : () => string = () : string =>  {
    return `Usage: dartk [options] FILE\n\nConvert .dart or .dill files to kernel's IR and print out its textual\nor binary form.\n\nExamples:\n    dartk foo.dart            # print text IR for foo.dart\n    dartk foo.dart -ofoo.dill # write binary IR for foo.dart to foo.dill\n    dartk foo.dill            # print text IR for binary file foo.dill\n\nOptions:\n${properties.parser.usage}\n\n    -D<name>=<value>        Define an environment variable.\n`;
};
export var fail : (message : string) => any = (message : string) : any =>  {
    io.properties.stderr.writeln(message);
    io.exit(1);
    return null;
};
export var defaultFormat : () => string = () : string =>  {
    if (op(Op.INDEX,properties.options,'out') != null && op(Op.INDEX,properties.options,'out').endsWith('.dill')) {
        return 'bin';
    }
    return 'text';
};
export var defaultOutput : () => string = () : string =>  {
    if (op(Op.EQUALS,op(Op.INDEX,properties.options,'format'),'bin')) {
        return 'out.dill';
    }
    return null;
};
export var checkIsDirectoryOrNull : (path : string,option : string) => void = (path : string,option : string) : void =>  {
    if (path == null) return;
    let stat = new io.File(path).statSync();
    switch (stat.type) {
        case io.FileSystemEntityType.DIRECTORY:
        case io.FileSystemEntityType.LINK:
            return;
        case io.FileSystemEntityType.NOT_FOUND:
            throw fail(`${option} not found: ${path}`);
        default:
            fail(`${option} is not a directory: ${path}`);
    }
};
export var checkIsFile : (path : string,_namedArguments? : {option? : string}) => void = (path : string,_namedArguments? : {option? : string}) : void =>  {
    let {option} = Object.assign({
    }, _namedArguments );
    let stat = new io.File(path).statSync();
    switch (stat.type) {
        case io.FileSystemEntityType.DIRECTORY:
            throw fail(`${option} is a directory: ${path}`);
        case io.FileSystemEntityType.NOT_FOUND:
            throw fail(`${option} not found: ${path}`);
    }
};
export var checkIsFileOrDirectoryOrNull : (path : string,option : string) => void = (path : string,option : string) : void =>  {
    if (path == null) return;
    let stat = new io.File(path).statSync();
    if (op(Op.EQUALS,stat.type,io.FileSystemEntityType.NOT_FOUND)) {
        fail(`${option} not found: ${path}`);
    }
};
export var getTotalSourceSize : (files : core.DartList<string>) => number = (files : core.DartList<string>) : number =>  {
    let size : number = 0;
    for(let filename of files) {
        size += new io.File(filename).statSync().size;
    }
    return size;
};
export var dumpString : (value : string,filename? : string) => void = (value : string,filename? : string) : void =>  {
    if (filename == null) {
        core.print(value);
    }else {
        new io.File(filename).writeAsStringSync(value);
    }
};
export var parseCustomUriMappings : (mappings : core.DartList<string>) => core.DartMap<lib5.Uri,lib5.Uri> = (mappings : core.DartList<string>) : core.DartMap<lib5.Uri,lib5.Uri> =>  {
    let customUriMappings : core.DartMap<lib5.Uri,lib5.Uri> = new core.DartMap.literal([
    ]);
    var fatal : (mapping : string) => any = (mapping : string) =>  {
        fail(`Invalid uri mapping "${mapping}". Each mapping should have the ` + 'form "<scheme>:<name>::<uri>".');
    };
    for(let mapping of mappings) {
        let parts : core.DartList<string> = new core.DartString(mapping).split('::');
        if (parts.length != 2) {
            fatal(mapping);
        }
        let fromUri : lib5.Uri = lib5.Uri.parse(parts[0]);
        if (fromUri.scheme == '' || new core.DartString(fromUri.path).contains('/')) {
            fatal(mapping);
        }
        let toUri : lib5.Uri = lib5.Uri.parse(parts[1]);
        if (toUri.scheme == '') {
            toUri = new lib5.Uri.file(lib4.absolute(parts[1]));
        }
        customUriMappings.set(fromUri,toUri);
    }
    return customUriMappings;
};
export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (args.isNotEmpty && args[0] == '--batch') {
        if (args.length != 1) {
            return fail('--batch cannot be used with other arguments');
        }
        let batchModeState = ((_) : BatchModeState =>  {
            {
                _.isBatchMode = true;
                return _;
            }
        })(new BatchModeState());
        await lib6.runBatch((args : any) =>  {
            return batchMain(args,batchModeState);
        });
    }else {
        let outcome : lib6.CompilerOutcome = await batchMain(args,new BatchModeState());
        io.exit(op(Op.EQUALS,outcome,lib6.CompilerOutcome.Ok) ? 0 : 1);
    }
})());
export var isSupportedArgument : (arg : string) => boolean = (arg : string) : boolean =>  {
    if (new core.DartString(arg).startsWith('--')) {
        let equals : number = new core.DartString(arg).indexOf('=');
        let name = equals != -1 ? new core.DartString(arg).substring(2,equals) : new core.DartString(arg).substring(2);
        return properties.parser.options.containsKey(name);
    }
    if (new core.DartString(arg).startsWith('-')) {
        return properties.parser.findByAbbreviation(new core.DartString(arg).substring(1)) != null;
    }
    return true;
};
export var batchMain : (args : core.DartList<string>,batchModeState : BatchModeState) => async.Future<lib6.CompilerOutcome> = (args : core.DartList<string>,batchModeState : BatchModeState) => new async.Future.fromPromise(( async () : Promise<lib6.CompilerOutcome> =>  {
    if (args.contains('--ignore-unrecognized-flags')) {
        args = args.where(isSupportedArgument).toList();
    }
    if (args.isEmpty) {
        return fail(getUsage());
    }
    try {
        properties.options = properties.parser.parse(args);
    } catch (__error__) {

        if (is(__error__,core.FormatException)){
            let e : core.FormatException = __error__;
            return fail(e.message);
        }
    }
    checkIsDirectoryOrNull(op(Op.INDEX,properties.options,'sdk'),'Dart SDK');
    let packagePath : string = (op(Op.INDEX,properties.options,'packages') || op(Op.INDEX,properties.options,'package-root'));
    checkIsFileOrDirectoryOrNull(packagePath,'Package root or .packages');
    let applicationRootOption : string = op(Op.INDEX,properties.options,'app-root');
    checkIsDirectoryOrNull(applicationRootOption,'Application root');
    if (applicationRootOption != null) {
        applicationRootOption = new io.File(applicationRootOption).absolute.path;
    }
    let applicationRoot = new bare.createInstance(any,null,applicationRootOption);
    if (op(Op.INDEX,properties.options,'verbose')) {
        log.onRecord.listen((rec : any) =>  {
            io.properties.stderr.writeln(rec.message);
        });
    }
    let includeSdk : boolean = op(Op.INDEX,properties.options,'include-sdk');
    let inputFiles : core.DartList<string> = properties.options.rest;
    if (inputFiles.length < 1 && !includeSdk) {
        return fail('At least one file should be given.');
    }
    let hasBinaryInput : boolean = false;
    let hasDartInput : boolean = includeSdk;
    for(let file of inputFiles) {
        checkIsFile(file,{
            option : 'Input file'});
        if (new core.DartString(file).endsWith('.dill')) {
            hasBinaryInput = true;
        }else if (new core.DartString(file).endsWith('.dart')) {
            hasDartInput = true;
        }else {
            fail(`Unrecognized file extension: ${file}`);
        }
    }
    if (hasBinaryInput && hasDartInput) {
        fail('Mixed binary and dart input is not currently supported');
    }
    let format : string = (op(Op.INDEX,properties.options,'format') || defaultFormat());
    let outputFile : string = (op(Op.INDEX,properties.options,'out') || defaultOutput());
    let urlMapping : core.DartList<string> = op(Op.INDEX,properties.options,'url-mapping') as core.DartList<string>;
    let customUriMappings = parseCustomUriMappings(urlMapping);
    let embedderEntryPointManifests : core.DartList<string> = op(Op.INDEX,properties.options,'embedder-entry-points-manifest') as core.DartList<string>;
    let programRoots : core.DartList<any> = lib7.parseProgramRoots(embedderEntryPointManifests);
    let program = new bare.createInstance(any,null);
    let watch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    let errors : core.DartList<any> = new core.DartList.literal();
    let targetFlags : any = new bare.createInstance(any,null,{
        strongMode : op(Op.INDEX,properties.options,'strong'),treeShake : op(Op.INDEX,properties.options,'tree-shake'),kernelRuntime : io.Platform.script.resolve('../runtime/'),programRoots : programRoots});
    let target : any = getTarget(op(Op.INDEX,properties.options,'target'),targetFlags);
    let declaredVariables = new core.DartMap.literal([
    ]);
    declaredVariables.addAll(target.extraDeclaredVariables);
    for(let define of op(Op.INDEX,properties.options,'D')) {
        let separator : number = new core.DartString(define).indexOf('=');
        if (separator == -1) {
            fail(`Invalid define: -D${define}. Format is -D<name>=<value>`);
        }
        let name : string = new core.DartString(define).substring(0,separator);
        let value : string = new core.DartString(define).substring(separator + 1);
        declaredVariables.set(name,value);
    }
    let loader : any;
    if (hasDartInput) {
        let packageDiscoveryPath : string = batchModeState.isBatchMode || inputFiles.isEmpty ? null : inputFiles.first;
        loader = await batchModeState.batch.getLoader(program,new bare.createInstance(any,null,{
            strongMode : target.strongMode,strongModeSdk : target.strongModeSdk,sdk : op(Op.INDEX,properties.options,'sdk'),packagePath : packagePath,customUriMappings : customUriMappings,declaredVariables : declaredVariables,applicationRoot : applicationRoot}),{
            packageDiscoveryPath : packageDiscoveryPath});
        if (includeSdk) {
            for(let uri of batchModeState.batch.dartSdk.uris) {
                loader.loadLibrary(lib5.Uri.parse(uri));
            }
        }
        loader.loadSdkInterface(program,target);
    }
    for(let file of inputFiles) {
        let fileUri : lib5.Uri = lib5.Uri.base.resolve(file);
        if (new core.DartString(file).endsWith('.dill')) {
            loadProgramFromBinary(file,program);
        }else {
            if (op(Op.INDEX,properties.options,'link')) {
                loader.loadProgram(fileUri,{
                    target : target});
            }else {
                let library = loader.loadLibrary(fileUri);
                program.mainMethod = ( program.mainMethod ) || ( library.procedures.firstWhere((p : any) =>  {
                    return op(Op.EQUALS,p.name.name,'main');
                },{
                    orElse : () =>  {
                        return null;
                    }}) );
            }
            errors = loader.errors;
            if (errors.isNotEmpty) {
                let errorLimit : number = 100;
                io.properties.stderr.writeln(errors.take(errorLimit).join('\n'));
                if (errors.length > errorLimit) {
                    io.properties.stderr.writeln(`[error] ${errors.length - errorLimit} errors not shown`);
                }
            }
        }
    }
    let canContinueCompilation : boolean = errors.isEmpty || op(Op.INDEX,properties.options,'tolerant');
    let loadTime : number = watch.elapsedMilliseconds;
    if (properties.shouldReportMetrics) {
        core.print(`loader.time = ${loadTime} ms`);
    }
    var runVerifier : () => void = () : void =>  {
        if (op(Op.INDEX,properties.options,'verify-ir')) {
            verifyProgram(program);
        }
    };
    if (canContinueCompilation) {
        runVerifier();
    }
    if (op(Op.INDEX,properties.options,'link') && op(Op.EQUALS,program.mainMethodName,null)) {
        fail('[error] The program has no main method.');
    }
    if (target != null && canContinueCompilation) {
        target.performModularTransformations(program);
        runVerifier();
        if (op(Op.INDEX,properties.options,'link')) {
            target.performGlobalTransformations(program);
            runVerifier();
        }
    }
    if (op(Op.INDEX,properties.options,'no-output')) {
        return lib6.CompilerOutcome.Ok;
    }
    watch.reset();
    let ioFuture : async.Future<any>;
    if (canContinueCompilation) {
        switch (format) {
            case 'text':
                writeProgramToText(program,{
                    path : outputFile,showExternal : op(Op.INDEX,properties.options,'show-external'),showOffsets : op(Op.INDEX,properties.options,'show-offsets')});
                break;
            case 'bin':
                ioFuture = writeProgramToBinary(program,outputFile);
                break;
        }
    }
    let time : number = watch.elapsedMilliseconds;
    if (properties.shouldReportMetrics) {
        core.print(`writer.time = ${time} ms`);
    }
    await ioFuture;
    if (properties.shouldReportMetrics) {
        let flushTime : number = watch.elapsedMilliseconds - time;
        core.print(`writer.flush_time = ${flushTime} ms`);
    }
    if (op(Op.INDEX,properties.options,'tolerant')) {
        return lib6.CompilerOutcome.Ok;
    }
    return errors.length > 0 ? lib6.CompilerOutcome.Fail : lib6.CompilerOutcome.Ok;
})());
export namespace BatchModeState {
    export type Constructors = 'BatchModeState';
    export type Interface = Omit<BatchModeState, Constructors>;
}
@DartClass
export class BatchModeState {
    isBatchMode : boolean;

    batch : any;

    constructor() {
    }
    @defaultConstructor
    BatchModeState() {
        this.isBatchMode = false;
        this.batch = new bare.createInstance(any,null);
    }
}

export class properties {
    private static __$parser : any;
    static get parser() : any { 
        if (this.__$parser===undefined) {
            this.__$parser = ((_) : any =>  {
                {
                    addOption('format',{
                        abbr : 'f',allowed : new core.DartList.literal('text','bin'),help : 'Output format.\n' + '(defaults to "text" unless output file ends with ".dill")'});
                    addOption('out',{
                        abbr : 'o',help : 'Output file.\n' + '(defaults to "out.dill" if format is "bin", otherwise stdout)'});
                    addOption('sdk',{
                        defaultsTo : currentSdk(),help : 'Path to the Dart SDK.'});
                    addOption('packages',{
                        abbr : 'p',help : 'Path to the .packages file or packages folder.'});
                    addOption('package-root',{
                        help : 'Deprecated alias for --packages'});
                    addOption('app-root',{
                        help : 'Store library paths relative to the given directory.\n' + 'If none is given, absolute paths are used.\n' + 'Application libraries not inside the application root are stored ' + 'using absolute paths'});
                    addOption('target',{
                        abbr : 't',help : 'Tailor the IR to the given target.',allowed : targetNames,defaultsTo : 'vm'});
                    addFlag('strong',{
                        help : 'Load .dart files in strong mode.\n' + 'Does not affect loading of binary files. Strong mode support is very\n' + 'unstable and not well integrated yet.'});
                    addFlag('link',{
                        abbr : 'l',help : 'Link the whole program into one file.'});
                    addFlag('no-output',{
                        negatable : false,help : 'Do not output any files.'});
                    addOption('url-mapping',{
                        allowMultiple : true,help : 'A custom url mapping of the form `<scheme>:<name>::<uri>`.'});
                    addOption('embedder-entry-points-manifest',{
                        allowMultiple : true,help : 'A path to a file describing entrypoints ' + '(lines of the form `<library>,<class>,<member>`).'});
                    addFlag('verbose',{
                        abbr : 'v',negatable : false,help : 'Print internal warnings and diagnostics to stderr.'});
                    addFlag('print-metrics',{
                        negatable : false,help : 'Print performance metrics.'});
                    addFlag('verify-ir',{
                        help : 'Perform slow internal correctness checks.'});
                    addFlag('tolerant',{
                        help : 'Generate kernel even if there are compile-time errors.',defaultsTo : false});
                    addOption('D',{
                        abbr : 'D',allowMultiple : true,help : 'Define an environment variable.',hide : true});
                    addFlag('show-external',{
                        help : 'When printing a library as text, also print its dependencies\n' + 'on external libraries.'});
                    addFlag('show-offsets',{
                        help : 'When printing a library as text, also print node offsets'});
                    addFlag('include-sdk',{
                        help : 'Include the SDK in the output. Implied by --link.'});
                    addFlag('tree-shake',{
                        defaultsTo : false,help : 'Enable tree-shaking if the target supports it'});
                    return _;
                }
            })(new bare.createInstance(any,null,{
                allowTrailingOptions : true}));
        }
        return this.__$parser;
    }
    static set parser(__$value : any)  { 
        this.__$parser = __$value;
    }

    private static __$options : any;
    static get options() : any { 
        return this.__$options;
    }
    static set options(__$value : any)  { 
        this.__$options = __$value;
    }

    static get shouldReportMetrics() : boolean {
        return op(Op.INDEX,properties.options,'print-metrics');
    }
}
