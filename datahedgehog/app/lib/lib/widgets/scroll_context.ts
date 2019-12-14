/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";

export namespace ScrollContext {
    export type Constructors = 'ScrollContext';
    export type Interface = Omit<ScrollContext, Constructors>;
}
@DartClass
export class ScrollContext {
    @AbstractProperty
    get notificationContext() : lib3.BuildContext{ throw 'abstract'}
    @AbstractProperty
    get storageContext() : lib3.BuildContext{ throw 'abstract'}
    @AbstractProperty
    get vsync() : any{ throw 'abstract'}
    @AbstractProperty
    get axisDirection() : lib4.AxisDirection{ throw 'abstract'}
    @Abstract
    setIgnorePointer(value : boolean) : any{ throw 'abstract'}
    @Abstract
    setCanDrag(value : boolean) : any{ throw 'abstract'}
    @Abstract
    setSemanticsActions(actions : core.DartSet<any>) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ScrollContext() {
    }
}

export class properties {
}
