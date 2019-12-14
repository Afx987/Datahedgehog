/** Library asset:datahedgehog_monitor/lib/lib/animation/tween.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./animation";
import * as lib4 from "./curves";

export namespace Animatable {
    export type Constructors = 'Animatable';
    export type Interface<T> = Omit<Animatable<T>, Constructors>;
}
@DartClass
export class Animatable<T> {
    constructor() {
    }
    @defaultConstructor
    Animatable() {
    }
    @Abstract
    transform(t : double) : T{ throw 'abstract'}
    evaluate(animation : lib3.Animation<double>) : T {
        return this.transform(animation.value);
    }
    animate(parent : lib3.Animation<double>) : lib3.Animation<T> {
        return _AnimatedEvaluation(parent,this);
    }
    chain(parent : Animatable<double>) : Animatable<T> {
        return _ChainedEvaluation(parent,this);
    }
}

export namespace _AnimatedEvaluation {
    export type Constructors = lib3.Animation.Constructors | '_AnimatedEvaluation';
    export type Interface<T> = Omit<_AnimatedEvaluation<T>, Constructors>;
}
@DartClass
@With(any)
export class _AnimatedEvaluation<T> extends lib3.Animation<T> implements any.Interface {
    constructor(parent : lib3.Animation<double>,_evaluatable : Animatable<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedEvaluation(parent : lib3.Animation<double>,_evaluatable : Animatable<T>) {
        this.parent = parent;
        this._evaluatable = _evaluatable;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parent : lib3.Animation<double>;

    _evaluatable : Animatable<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : T {
        return this._evaluatable.evaluate(this.parent);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.parent}➩${this._evaluatable}➩${this.value}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringDetails() : string {
        return `${super.toStringDetails()} ${this._evaluatable}`;
    }
}

export namespace _ChainedEvaluation {
    export type Constructors = Animatable.Constructors | '_ChainedEvaluation';
    export type Interface<T> = Omit<_ChainedEvaluation<T>, Constructors>;
}
@DartClass
export class _ChainedEvaluation<T> extends Animatable<T> {
    constructor(_parent : Animatable<double>,_evaluatable : Animatable<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ChainedEvaluation(_parent : Animatable<double>,_evaluatable : Animatable<T>) {
        this._parent = _parent;
        this._evaluatable = _evaluatable;
    }
    _parent : Animatable<double>;

    _evaluatable : Animatable<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : T {
        return this._evaluatable.transform(this._parent.transform(t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this._parent}➩${this._evaluatable}`;
    }
}

export namespace Tween {
    export type Constructors = Animatable.Constructors | 'Tween';
    export type Interface<T extends any> = Omit<Tween<T extends any>, Constructors>;
}
@DartClass
export class Tween<T extends any> extends Animatable<T> {
    constructor(_namedArguments? : {begin? : T,end? : T}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Tween(_namedArguments? : {begin? : T,end? : T}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        this.begin = begin;
        this.end = end;
    }
    begin : T;

    end : T;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : T {
        /* TODO (AssertStatementImpl) : assert (begin != null); */;
        /* TODO (AssertStatementImpl) : assert (end != null); */;
        return op(Op.PLUS,this.begin,op(Op.TIMES,(op(Op.MINUS,this.end,this.begin)),t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : T {
        if (t == 0.0) return this.begin;
        if (t == 1.0) return this.end;
        return this.lerp(t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.begin} → ${this.end})`;
    }
}

export namespace CurveTween {
    export type Constructors = Animatable.Constructors | 'CurveTween';
    export type Interface = Omit<CurveTween, Constructors>;
}
@DartClass
export class CurveTween extends Animatable<double> {
    constructor(_namedArguments? : {curve? : lib4.Curve}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CurveTween(_namedArguments? : {curve? : lib4.Curve}) {
        let {curve} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.curve = curve;
    }
     : any;

    curve : lib4.Curve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        if (t == 0.0 || t == 1.0) {
            /* TODO (AssertStatementImpl) : assert (curve.transform(t).round() == t); */;
            return t;
        }
        return this.curve.transform(t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(curve: ${this.curve})`;
    }
}

export namespace ReverseTween {
    export type Constructors = Tween.Constructors | 'ReverseTween';
    export type Interface<T> = Omit<ReverseTween<T>, Constructors>;
}
@DartClass
export class ReverseTween<T> extends Tween<T> {
    constructor(parent : Tween<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReverseTween(parent : Tween<T>) {
        this.assert = assert;
        this.parent = parent;
    }
     : any;

     : any;

     : any;
    end : any;

     : any;

    parent : Tween<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : T {
        return this.parent.lerp(1.0 - t);
    }
}

export namespace ColorTween {
    export type Constructors = Tween.Constructors | 'ColorTween';
    export type Interface = Omit<ColorTween, Constructors>;
}
@DartClass
export class ColorTween extends Tween<any> {
    constructor(_namedArguments? : {begin? : any,end? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ColorTween(_namedArguments? : {begin? : any,end? : any}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : any {
        return Color.lerp(this.begin,this.end,t);
    }
}

export namespace SizeTween {
    export type Constructors = Tween.Constructors | 'SizeTween';
    export type Interface = Omit<SizeTween, Constructors>;
}
@DartClass
export class SizeTween extends Tween<any> {
    constructor(_namedArguments? : {begin? : any,end? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SizeTween(_namedArguments? : {begin? : any,end? : any}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : any {
        return Size.lerp(this.begin,this.end,t);
    }
}

export namespace RectTween {
    export type Constructors = Tween.Constructors | 'RectTween';
    export type Interface = Omit<RectTween, Constructors>;
}
@DartClass
export class RectTween extends Tween<any> {
    constructor(_namedArguments? : {begin? : any,end? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RectTween(_namedArguments? : {begin? : any,end? : any}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : any {
        return Rect.lerp(this.begin,this.end,t);
    }
}

export namespace IntTween {
    export type Constructors = Tween.Constructors | 'IntTween';
    export type Interface = Omit<IntTween, Constructors>;
}
@DartClass
export class IntTween extends Tween<number> {
    constructor(_namedArguments? : {begin? : number,end? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntTween(_namedArguments? : {begin? : number,end? : number}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : number {
        return new core.DartDouble((this.begin + (this.end - this.begin) * t)).round();
    }
}

export namespace StepTween {
    export type Constructors = Tween.Constructors | 'StepTween';
    export type Interface = Omit<StepTween, Constructors>;
}
@DartClass
export class StepTween extends Tween<number> {
    constructor(_namedArguments? : {begin? : number,end? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StepTween(_namedArguments? : {begin? : number,end? : number}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : number {
        return new core.DartDouble((this.begin + (this.end - this.begin) * t)).floor();
    }
}

export namespace ConstantTween {
    export type Constructors = Tween.Constructors | 'ConstantTween';
    export type Interface<T> = Omit<ConstantTween<T>, Constructors>;
}
@DartClass
export class ConstantTween<T> extends Tween<T> {
    constructor(value : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantTween(value : T) {
        super.Tween({
            begin : value,end : value});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : T {
        return this.begin;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(value: begin)`;
    }
}

export class properties {
}
