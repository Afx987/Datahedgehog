/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/testing/kernel_chain.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../kernel/verifier";
import * as lib4 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as typed_data from "@dart2ts/dart/typed_data";

export var runDiff : (expected : lib4.Uri,actual : string) => async.Future<string> = (expected : lib4.Uri,actual : string) => new async.Future.fromPromise(( async () : Promise<string> =>  {
    let process : any = await StdioProcess.run("diff",new core.DartList.literal<string>("-u",expected.toFilePath(),"-"),{
        input : actual});
    return process.output;
})());
export var openWrite : (uri : lib4.Uri,f : (sink : io.IOSink) => any) => async.Future<any> = (uri : lib4.Uri,f : (sink : io.IOSink) => any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let sink : io.IOSink = new io.File.fromUri(uri).openWrite();
    try {
        await f(sink);
    } finally {
        await sink.close();
    }
    core.print(`Wrote ${uri}`);
})());
export namespace Print {
    export type Constructors = 'Print';
    export type Interface = Omit<Print, Constructors>;
}
@DartClass
export class Print extends any {
    constructor() {
    }
    @defaultConstructor
    Print() {
    }
    get name() : string {
        return "print";
    }
    run(program : any,_ : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let sb : core.DartStringBuffer = new core.DartStringBuffer();
            for(let library of program.libraries) {
                let printer : any = new bare.createInstance(any,null,sb);
                if (library.importUri.scheme != "dart" && library.importUri.scheme != "package") {
                    printer.writeLibraryFile(library);
                }
            }
            core.print(`${sb}`);
            return pass(program);
        } )());
    }

}

export namespace Verify {
    export type Constructors = 'Verify';
    export type Interface = Omit<Verify, Constructors>;
}
@DartClass
export class Verify extends any {
    fullCompile : boolean;

    constructor(fullCompile : boolean) {
    }
    @defaultConstructor
    Verify(fullCompile : boolean) {
        this.fullCompile = fullCompile;
    }
    get name() : string {
        return "verify";
    }
    run(program : any,context : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let errors = lib3.verifyProgram(program,{
                isOutline : !this.fullCompile});
            if (errors.isEmpty) {
                return pass(program);
            }else {
                return new bare.createInstance(any,null,null,op(Op.INDEX,context.expectationSet,"VerificationError"),errors,null);
            }
        } )());
    }

}

export namespace MatchExpectation {
    export type Constructors = 'MatchExpectation';
    export type Interface = Omit<MatchExpectation, Constructors>;
}
@DartClass
export class MatchExpectation extends any {
    suffix : string;

    updateExpectations : boolean;

    constructor(suffix : string,_namedArguments? : {updateExpectations? : boolean}) {
    }
    @defaultConstructor
    MatchExpectation(suffix : string,_namedArguments? : {updateExpectations? : boolean}) {
        let {updateExpectations} = Object.assign({
            "updateExpectations" : false}, _namedArguments );
        this.suffix = suffix;
        this.updateExpectations = updateExpectations;
    }
    get name() : string {
        return "match expectations";
    }
    run(program : any,_ : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library : any = program.libraries.firstWhere((library : any) =>  {
                return library.importUri.scheme != "dart";
            });
            let uri : lib4.Uri = library.importUri;
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            new bare.createInstance(any,null,buffer).writeLibraryFile(library);
            let expectedFile : io.File = new io.File(`${uri.toFilePath()}${this.suffix}`);
            if (await expectedFile.exists()) {
                let expected : string = await expectedFile.readAsString();
                if (new core.DartString(expected).trim() != new core.DartString(`${buffer}`).trim()) {
                    if (!this.updateExpectations) {
                        let diff : string = await runDiff(expectedFile.uri,`${buffer}`);
                        return fail(null,`${uri} doesn't match ${expectedFile.uri}\n${diff}`);
                    }
                }else {
                    return pass(program);
                }
            }
            if (this.updateExpectations) {
                await openWrite(expectedFile.uri,(sink : io.IOSink) =>  {
                    sink.writeln(new core.DartString(`${buffer}`).trim());
                });
                return pass(program);
            }else {
                return fail(program,`Please create file ${expectedFile.path} with this content:\n${buffer}`);
            }
        } )());
    }

}

export namespace WriteDill {
    export type Constructors = 'WriteDill';
    export type Interface = Omit<WriteDill, Constructors>;
}
@DartClass
export class WriteDill extends any {
    constructor() {
    }
    @defaultConstructor
    WriteDill() {
    }
    get name() : string {
        return "write .dill";
    }
    run(program : any,_ : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let tmp : io.Directory = await io.Directory.systemTemp.createTemp();
            let uri : lib4.Uri = tmp.uri.resolve("generated.dill");
            let generated : io.File = new io.File.fromUri(uri);
            let sink : io.IOSink = generated.openWrite();
            try {
                try {
                    new bare.createInstance(any,null,sink).writeProgramFile(program);
                } finally {
                    program.unbindCanonicalNames();
                }
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    return fail(uri,e,s);
                }
            } finally {
                core.print(`Wrote `${generated.path}``);
                await sink.close();
            }
            return pass(uri);
        } )());
    }

}

export namespace ReadDill {
    export type Constructors = 'ReadDill';
    export type Interface = Omit<ReadDill, Constructors>;
}
@DartClass
export class ReadDill extends any {
    constructor() {
    }
    @defaultConstructor
    ReadDill() {
    }
    get name() : string {
        return "read .dill";
    }
    run(uri : lib4.Uri,_ : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                loadProgramFromBinary(uri.toFilePath());
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    return fail(uri,e,s);
                }
            }
            return pass(uri);
        } )());
    }

}

export namespace Copy {
    export type Constructors = 'Copy';
    export type Interface = Omit<Copy, Constructors>;
}
@DartClass
export class Copy extends any {
    constructor() {
    }
    @defaultConstructor
    Copy() {
    }
    get name() : string {
        return "copy program";
    }
    run(program : any,_ : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let sink : BytesCollector = new BytesCollector();
            new bare.createInstance(any,null,sink).writeProgramFile(program);
            program.unbindCanonicalNames();
            let bytes : typed_data.Uint8List = sink.collect();
            new bare.createInstance(any,null,bytes).readProgram(program);
            return pass(program);
        } )());
    }

}

export namespace BytesCollector {
    export type Constructors = 'BytesCollector';
    export type Interface = Omit<BytesCollector, Constructors>;
}
@DartClass
@Implements(core.DartSink)
export class BytesCollector implements core.DartSink.Interface<core.DartList<number>> {
    lists : core.DartList<core.DartList<number>>;

    length : number;

    add(data : core.DartList<number>) : void {
        this.lists.add(data);
        this.length += data.length;
    }
    collect() : typed_data.Uint8List {
        let result : typed_data.Uint8List = new typed_data.Uint8List(this.length);
        let offset : number = 0;
        for(let list of this.lists) {
            result.setRange(offset,offset += list.length,list);
        }
        this.lists.clear();
        this.length = 0;
        return result;
    }
    close() : void {
    }
    constructor() {
    }
    @defaultConstructor
    BytesCollector() {
        this.lists = new core.DartList.literal<core.DartList<number>>();
        this.length = 0;
    }
}

export class properties {
}
