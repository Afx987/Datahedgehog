/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/java_engine_io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export namespace FileUtilities2 {
    export type Constructors = 'FileUtilities2';
    export type Interface = Omit<FileUtilities2, Constructors>;
}
@DartClass
export class FileUtilities2 {
    static createFile(path : string) : any {
        return new bare.createInstance(any,null,path).getAbsoluteFile();
    }
    constructor() {
    }
    @defaultConstructor
    FileUtilities2() {
    }
}

export namespace OSUtilities {
    export type Constructors = 'OSUtilities';
    export type Interface = Omit<OSUtilities, Constructors>;
}
@DartClass
export class OSUtilities {
    private static __$LINE_SEPARATOR : string;
    static get LINE_SEPARATOR() : string { 
        if (this.__$LINE_SEPARATOR===undefined) {
            this.__$LINE_SEPARATOR = OSUtilities.isWindows() ? '\n' : '\n';
        }
        return this.__$LINE_SEPARATOR;
    }
    static set LINE_SEPARATOR(__$value : string)  { 
        this.__$LINE_SEPARATOR = __$value;
    }

    static isMac() : boolean {
        return io.Platform.operatingSystem == 'macos';
    }
    static isWindows() : boolean {
        return io.Platform.operatingSystem == 'windows';
    }
    constructor() {
    }
    @defaultConstructor
    OSUtilities() {
    }
}

export class properties {
}
