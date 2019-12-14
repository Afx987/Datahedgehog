/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/fasta_perf.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (args.length < 2) {
        core.print('usage: fasta_perf.dart <bench-id> <entry.dart>');
        io.exit(1);
    }
    let bench = args[0];
    let entryUri = lib4.Uri.base.resolve(args[1]);
    await setup(entryUri);
    let files : core.DartMap<lib4.Uri,core.DartList<number>> = await scanReachableFiles(entryUri);
    let handlers = new core.DartMap.literal([
        ['scan',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            return scanFiles(files);
        })())],
        ['kernel_gen_e2e',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            await generateKernel(entryUri);
        })())]]);
    let handler = handlers.get(bench);
    if (op(Op.EQUALS,handler,null)) {
        core.print(`unsupported bench-id: ${bench}. Please specify one of the following: ` + `${handlers.keys.join(", ")}`);
        io.exit(1);
    }
    let iterations : number = new core.DartString(bench).contains('kernel_gen') ? 2 : 10;
    for(let i : number = 0; i < iterations; i++){
        let totalTimer = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        core.print(`== iteration ${i}`);
        await handler();
        totalTimer.stop();
        report('total',totalTimer.elapsedMicroseconds);
    }
})());
export var setup : (entryUri : lib4.Uri) => async.Future<any> = (entryUri : lib4.Uri) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let sdkRoot = lib4.Uri.base.resolve(io.Platform.resolvedExecutable).resolve('patched_sdk/');
    properties.uriResolver = await TranslateUri.parse(PhysicalFileSystem.instance,sdkRoot);
})());
export var tokenize : (contents : core.DartList<number>) => any = (contents : core.DartList<number>) : any =>  {
    properties.scanTimer.start();
    let token = scan(contents).tokens;
    properties.scanTimer.stop();
    return token;
};
export var scanFiles : (files : core.DartMap<lib4.Uri,core.DartList<number>>) => void = (files : core.DartMap<lib4.Uri,core.DartList<number>>) : void =>  {
    properties.scanTimer = new core.DartStopwatch();
    for(let source of files.values) {
        tokenize(source);
    }
    report('scan',properties.scanTimer.elapsedMicroseconds);
};
export var scanReachableFiles : (entryUri : lib4.Uri) => async.Future<core.DartMap<lib4.Uri,core.DartList<number>>> = (entryUri : lib4.Uri) => new async.Future.fromPromise(( async () : Promise<core.DartMap<lib4.Uri,core.DartList<number>>> =>  {
    let files = new core.DartMap.literal([
    ]);
    let loadTimer = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    properties.scanTimer = new core.DartStopwatch();
    let entrypoints = new core.DartList.literal(entryUri,lib4.Uri.parse('dart:async'),lib4.Uri.parse('dart:collection'),lib4.Uri.parse('dart:convert'),lib4.Uri.parse('dart:core'),lib4.Uri.parse('dart:developer'),lib4.Uri.parse('dart:_internal'),lib4.Uri.parse('dart:io'),lib4.Uri.parse('dart:isolate'),lib4.Uri.parse('dart:math'),lib4.Uri.parse('dart:mirrors'),lib4.Uri.parse('dart:typed_data'));
    for(let entry of entrypoints) {
        await collectSources(entry,files);
    }
    loadTimer.stop();
    properties.inputSize = 0;
    for(let source of files.values) properties.inputSize += (source.length - 1);
    core.print(`input size: ${properties.inputSize} chars`);
    let loadTime = loadTimer.elapsedMicroseconds - properties.scanTimer.elapsedMicroseconds;
    report('load',loadTime);
    report('scan',properties.scanTimer.elapsedMicroseconds);
    return files;
})());
export var collectSources : (start : lib4.Uri,files : core.DartMap<lib4.Uri,core.DartList<number>>) => async.Future<core.Null> = (start : lib4.Uri,files : core.DartMap<lib4.Uri,core.DartList<number>>) => new async.Future.fromPromise(( async () : Promise<core.Null> =>  {
    var helper : (uri : lib4.Uri) => any = (uri : lib4.Uri) =>  {
        uri = (properties.uriResolver.translate(uri) || uri);
        if (op(Op.EQUALS,uri,null)) return;
        if (files.containsKey(uri)) return;
        let contents = readBytesFromFileSync(uri);
        files.set(uri,contents);
        for(let directiveUri of extractDirectiveUris(contents)) {
            helper(uri.resolve(directiveUri));
        }
    };
    helper(start);
})());
export var extractDirectiveUris : (contents : core.DartList<number>) => core.DartSet<string> = (contents : core.DartList<number>) : core.DartSet<string> =>  {
    let listener = new DirectiveListenerWithNative();
    new bare.createInstance(any,null,listener).parseUnit(tokenize(contents));
    return ((_) : core.DartSet<string> =>  {
        {
            _.addAll(listener.imports.map((directive : any) =>  {
                return directive.uri;
            }));
            _.addAll(listener.exports.map((directive : any) =>  {
                return directive.uri;
            }));
            _.addAll(listener.parts);
            return _;
        }
    })(new core.DartSet<string>());
};
export var parseFiles : (files : core.DartMap<lib4.Uri,core.DartList<number>>) => void = (files : core.DartMap<lib4.Uri,core.DartList<number>>) : void =>  {
    properties.scanTimer = new core.DartStopwatch();
    let parseTimer = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    files.forEach((uri : any,source : any) =>  {
        parseFull(uri,source);
    });
    parseTimer.stop();
    report('scan',properties.scanTimer.elapsedMicroseconds);
    report('parse',parseTimer.elapsedMicroseconds - properties.scanTimer.elapsedMicroseconds);
};
export var parseFull : (uri : lib4.Uri,source : core.DartList<number>) => any = (uri : lib4.Uri,source : core.DartList<number>) =>  {
    let tokens = tokenize(source);
    let parser : any = new bare.createInstance(any,null,new _PartialAstBuilder(uri));
    parser.parseUnit(tokens);
};
export var generateKernel : (entryUri : lib4.Uri,_namedArguments? : {compileSdk? : boolean,strongMode? : boolean}) => any = (entryUri : lib4.Uri,_namedArguments? : {compileSdk? : boolean,strongMode? : boolean}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {compileSdk,strongMode} = Object.assign({
        "compileSdk" : true,
        "strongMode" : false}, _namedArguments );
    scanReachableFiles(entryUri);
    let timer = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    let ticker : any = new bare.createInstance(any,null);
    let dillTarget : any = new bare.createInstance(any,null,ticker,properties.uriResolver,"vm");
    let kernelTarget : any = new bare.createInstance(any,null,PhysicalFileSystem.instance,dillTarget,properties.uriResolver,strongMode);
    let entrypoints = new core.DartList.literal(entryUri,lib4.Uri.parse('dart:async'),lib4.Uri.parse('dart:collection'),lib4.Uri.parse('dart:convert'),lib4.Uri.parse('dart:core'),lib4.Uri.parse('dart:developer'),lib4.Uri.parse('dart:_internal'),lib4.Uri.parse('dart:io'),lib4.Uri.parse('dart:isolate'),lib4.Uri.parse('dart:math'),lib4.Uri.parse('dart:mirrors'),lib4.Uri.parse('dart:typed_data'));
    entrypoints.forEach(kernelTarget.read);
    if (!compileSdk) {
        dillTarget.read(lib4.Uri.base.resolve(io.Platform.resolvedExecutable).resolve('platform.dill'));
    }
    await dillTarget.buildOutlines();
    await kernelTarget.buildOutlines();
    let program = await kernelTarget.buildProgram();
    if (kernelTarget.errors.isNotEmpty) {
        throw kernelTarget.errors.first;
    }
    timer.stop();
    report('kernel_gen_e2e',timer.elapsedMicroseconds);
    return program;
})());
export var report : (name : string,time : number) => void = (name : string,time : number) : void =>  {
    let sb = new core.DartStringBuffer();
    let padding = op(Op.TIMES,' ',(20 - new core.DartString(name).length));
    sb.write(`${name}:${padding} ${time} us, ${op(Op.QUOTIENT,time,1000)} ms`);
    let invSpeed = new core.DartDouble((time * 1000 / properties.inputSize)).toStringAsFixed(2);
    sb.write(`, ${invSpeed} ns/char`);
    core.print(`${sb}`);
};
export namespace DirectiveListenerWithNative {
    export type Constructors = 'DirectiveListenerWithNative';
    export type Interface = Omit<DirectiveListenerWithNative, Constructors>;
}
@DartClass
export class DirectiveListenerWithNative extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNativeClause(token : any) : any {
        return skipNativeClause(token);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectiveListenerWithNative() {
    }
}

export namespace _PartialAstBuilder {
    export type Constructors = '_PartialAstBuilder';
    export type Interface = Omit<_PartialAstBuilder, Constructors>;
}
@DartClass
export class _PartialAstBuilder extends any {
    constructor(uri : lib4.Uri) {
    }
    @defaultConstructor
    _PartialAstBuilder(uri : lib4.Uri) {
        super.DartObject(null,null,null,null,null,uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    finishFunction(formals : any,asyncModifier : any,body : any) {
    }
}

export class properties {
    private static __$inputSize : number;
    static get inputSize() : number { 
        if (this.__$inputSize===undefined) {
            this.__$inputSize = 0;
        }
        return this.__$inputSize;
    }
    static set inputSize(__$value : number)  { 
        this.__$inputSize = __$value;
    }

    private static __$scanTimer : core.DartStopwatch;
    static get scanTimer() : core.DartStopwatch { 
        if (this.__$scanTimer===undefined) {
            this.__$scanTimer = new core.DartStopwatch();
        }
        return this.__$scanTimer;
    }
    static set scanTimer(__$value : core.DartStopwatch)  { 
        this.__$scanTimer = __$value;
    }

    private static __$uriResolver : any;
    static get uriResolver() : any { 
        return this.__$uriResolver;
    }
    static set uriResolver(__$value : any)  { 
        this.__$uriResolver = __$value;
    }

}
