/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/round_trip.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    if (args.length != 1) {
        core.print(properties.usage);
        io.exit(1);
    }
    testRoundTrip(new io.File(args[0]).readAsBytesSync());
};
export var testRoundTrip : (bytes : core.DartList<number>) => void = (bytes : core.DartList<number>) : void =>  {
    let program = new bare.createInstance(any,null);
    new bare.createInstance(any,null,bytes).readSingleFileProgram(program);
    new BinaryPrinterWithExpectedOutput(bytes).writeProgramFile(program);
};
export namespace DummyStreamConsumer {
    export type Constructors = async.StreamConsumer.Constructors | 'DummyStreamConsumer';
    export type Interface = Omit<DummyStreamConsumer, Constructors>;
}
@DartClass
export class DummyStreamConsumer extends async.StreamConsumer<core.DartList<number>> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addStream(stream : async.DartStream<core.DartList<number>>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return null;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return null;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DummyStreamConsumer() {
    }
}

export namespace BinaryPrinterWithExpectedOutput {
    export type Constructors = 'BinaryPrinterWithExpectedOutput';
    export type Interface = Omit<BinaryPrinterWithExpectedOutput, Constructors>;
}
@DartClass
export class BinaryPrinterWithExpectedOutput extends any {
    expectedBytes : core.DartList<number>;

    offset : number;

    private static __$eof : number;
    static get eof() : number { 
        if (this.__$eof===undefined) {
            this.__$eof = -1;
        }
        return this.__$eof;
    }

    constructor(expectedBytes : core.DartList<number>) {
    }
    @defaultConstructor
    BinaryPrinterWithExpectedOutput(expectedBytes : core.DartList<number>) {
        this.offset = 0;
        super.DartObject(new io.IOSink(new DummyStreamConsumer()));
        this.expectedBytes = expectedBytes;
    }
    show(byte : number) : string {
        if (byte == BinaryPrinterWithExpectedOutput.eof) return 'EOF';
        return `${byte} (0x${new core.DartString(new core.DartInt(byte).toRadixString(16)).padLeft(2,"0")})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeByte(byte : number) : void {
        if (this.offset == this.expectedBytes.length || this.expectedBytes[this.offset] != byte) {
            let expected : number = (this.offset >= this.expectedBytes.length) ? BinaryPrinterWithExpectedOutput.eof : this.expectedBytes[this.offset];
            throw `At offset ${this.offset}: ` + `Expected ${this.show(expected)} but found ${this.show(byte)}`;
        }
        ++this.offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeBytes(bytes : core.DartList<number>) : void {
        bytes.forEach(this.writeByte.bind(this));
    }
}

export class properties {
    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = 'Usage: round_trip.dart FILE.dill\n\nDeserialize and serialize the given program and check that the resulting byte\nsequence is identical to the original.\n';
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
