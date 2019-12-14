/** Library asset:datahedgehog_monitor/lib/lib/gestures/eager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./recognizer";
import * as lib4 from "./events";
import * as lib5 from "./arena";

export namespace EagerGestureRecognizer {
    export type Constructors = lib3.OneSequenceGestureRecognizer.Constructors | 'EagerGestureRecognizer';
    export type Interface = Omit<EagerGestureRecognizer, Constructors>;
}
@DartClass
export class EagerGestureRecognizer extends lib3.OneSequenceGestureRecognizer {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib4.PointerDownEvent) : void {
        this.startTrackingPointer(event.pointer);
        this.resolve(lib5.GestureDisposition.accepted);
        this.stopTrackingPointer(event.pointer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'eager';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib4.PointerEvent) : void {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EagerGestureRecognizer() {
    }
}

export class properties {
}
