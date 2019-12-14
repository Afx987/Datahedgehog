/** Library asset:datahedgehog_monitor/lib/lib/_internal/js_runtime/lib/js_primitives.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var printString : (string : string) => void = (string : string) : void =>  {
    if (typeof dartPrint == "function"/* JS('bool', r'typeof dartPrint == "function"') */) {
        dartPrint(string)/* JS('void', r'dartPrint(#)', string) */;
        return;
    }
    if (typeof console == "object"/* JS('bool', r'typeof console == "object"') */ && typeof console.log != "undefined"/* JS('bool', r'typeof console.log != "undefined"') */) {
        console.log(string)/* JS('void', r'console.log(#)', string) */;
        return;
    }
    if (typeof window == "object"/* JS('bool', r'typeof window == "object"') */) {
        return;
    }
    if (typeof print == "function"/* JS('bool', r'typeof print == "function"') */) {
        print(string)/* JS('void', r'print(#)', string) */;
        return;
    }
    throw "Unable to print message: " + String(string)/* JS('void', 'throw "Unable to print message: " + String(#)', string) */;
};
export class properties {
}
