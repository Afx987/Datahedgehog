/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_nested_generic_instantiation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var main : () => any = () =>  {
    let traces : core.DartList<Trace> = new core.DartList.literal();
    let longest = traces.map((trace : any) =>  {
        return trace.frames.map((frame : any) =>  {
            return new core.DartString(frame.location).length;
        }).fold(0,math.max);
    }).fold(0,math.max);
};
export namespace Trace {
    export type Constructors = 'Trace';
    export type Interface = Omit<Trace, Constructors>;
}
@DartClass
export class Trace {
    frames : core.DartList<Frame>;

    constructor() {
    }
    @defaultConstructor
    Trace() {
        this.frames = new core.DartList.literal();
    }
}

export namespace Frame {
    export type Constructors = 'Frame';
    export type Interface = Omit<Frame, Constructors>;
}
@DartClass
export class Frame {
    location : string;

    constructor() {
    }
    @defaultConstructor
    Frame() {
        this.location = '';
    }
}

export class properties {
}
