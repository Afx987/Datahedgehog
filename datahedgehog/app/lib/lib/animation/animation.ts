/** Library asset:datahedgehog_monitor/lib/lib/animation/animation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "./tween";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export enum AnimationStatus {
    dismissed,
    forward,
    reverse,
    completed
}

export namespace Animation {
    export type Constructors = lib3.Listenable.Constructors | 'Animation';
    export type Interface<T> = Omit<Animation<T>, Constructors>;
}
@DartClass
@Implements(lib3.ValueListenable)
export class Animation<T> extends lib3.Listenable implements lib3.ValueListenable.Interface<T> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Animation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    addListener(listener : any) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    removeListener(listener : any) : any{ throw 'abstract'}
    @Abstract
    addStatusListener(listener : (status : AnimationStatus) => any) : any{ throw 'abstract'}
    @Abstract
    removeStatusListener(listener : (status : AnimationStatus) => any) : any{ throw 'abstract'}
    @AbstractProperty
    get status() : AnimationStatus{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get value() : T{ throw 'abstract'}
    get isDismissed() : boolean {
        return op(Op.EQUALS,this.status,AnimationStatus.dismissed);
    }
    get isCompleted() : boolean {
        return op(Op.EQUALS,this.status,AnimationStatus.completed);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
            arguments : [],namedArguments : {
            }}})
    drive<U>(child : lib4.Animatable<U>) : Animation<U> {
        /* TODO (AssertStatementImpl) : assert (this is Animation<double>); */;
        return child.animate(this as any);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib5.describeIdentity(this)}(${this.toStringDetails()})`;
    }
    toStringDetails() : string {
        /* TODO (AssertStatementImpl) : assert (status != null); */;
        let icon : string;
        switch (this.status) {
            case AnimationStatus.forward:
                icon = '▶';
                break;
            case AnimationStatus.reverse:
                icon = '◀';
                break;
            case AnimationStatus.completed:
                icon = '⏭';
                break;
            case AnimationStatus.dismissed:
                icon = '⏮';
                break;
        }
        /* TODO (AssertStatementImpl) : assert (icon != null); */;
        return `${icon}`;
    }
}

export class properties {
}
