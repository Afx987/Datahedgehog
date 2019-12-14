/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/utilities/null_string_sink.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace NullStringSink {
    export type Constructors = 'NullStringSink';
    export type Interface = Omit<NullStringSink, Constructors>;
}
@DartClass
@Implements(core.DartStringSink)
export class NullStringSink implements core.DartStringSink.Interface {
    write(obj : core.DartObject) : void {
    }
    writeAll(objects : core.DartIterable<any>,separator? : string) : void {
        separator = separator || "";
    }
    writeCharCode(charCode : number) : void {
    }
    writeln(obj? : core.DartObject) : void {
        obj = obj || "";
    }
    constructor() {
    }
    @defaultConstructor
    NullStringSink() {
    }
}

export class properties {
}
