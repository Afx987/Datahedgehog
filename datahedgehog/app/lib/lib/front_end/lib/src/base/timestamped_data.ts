/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/timestamped_data.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TimestampedData {
    export type Constructors = 'TimestampedData';
    export type Interface<E> = Omit<TimestampedData<E>, Constructors>;
}
@DartClass
export class TimestampedData<E> {
    modificationTime : number;

    data : E;

    constructor(modificationTime : number,data : E) {
    }
    @defaultConstructor
    TimestampedData(modificationTime : number,data : E) {
        this.modificationTime = modificationTime;
        this.data = data;
    }
}

export class properties {
}
