/** Library asset:datahedgehog_monitor/lib/lib/animation/curves.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var _bounce : (t : double) => double = (t : double) : double =>  {
    if (t < 1.0 / 2.75) {
        return 7.5625 * t * t;
    }else if (t < 2 / 2.75) {
        t -= 1.5 / 2.75;
        return 7.5625 * t * t + 0.75;
    }else if (t < 2.5 / 2.75) {
        t -= 2.25 / 2.75;
        return 7.5625 * t * t + 0.9375;
    }
    t -= 2.625 / 2.75;
    return 7.5625 * t * t + 0.984375;
};
export namespace Curve {
    export type Constructors = 'Curve';
    export type Interface = Omit<Curve, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Curve {
    constructor() {
    }
    @defaultConstructor
    Curve() {
    }
    @Abstract
    transform(t : double) : double{ throw 'abstract'}
    get flipped() : Curve {
        return FlippedCurve(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export namespace Curves {
    export type Constructors = '_';
    export type Interface = Omit<Curves, Constructors>;
}
@DartClass
export class Curves {
    @namedConstructor
    _() {
    }
    static _ : new() => Curves;

    private static __$linear : Curve;
    static get linear() : Curve { 
        if (this.__$linear===undefined) {
            this.__$linear = _Linear._();
        }
        return this.__$linear;
    }

    private static __$decelerate : Curve;
    static get decelerate() : Curve { 
        if (this.__$decelerate===undefined) {
            this.__$decelerate = _DecelerateCurve._();
        }
        return this.__$decelerate;
    }

    private static __$fastLinearToSlowEaseIn : Cubic;
    static get fastLinearToSlowEaseIn() : Cubic { 
        if (this.__$fastLinearToSlowEaseIn===undefined) {
            this.__$fastLinearToSlowEaseIn = Cubic(0.18,1.0,0.04,1.0);
        }
        return this.__$fastLinearToSlowEaseIn;
    }

    private static __$ease : Cubic;
    static get ease() : Cubic { 
        if (this.__$ease===undefined) {
            this.__$ease = Cubic(0.25,0.1,0.25,1.0);
        }
        return this.__$ease;
    }

    private static __$easeIn : Cubic;
    static get easeIn() : Cubic { 
        if (this.__$easeIn===undefined) {
            this.__$easeIn = Cubic(0.42,0.0,1.0,1.0);
        }
        return this.__$easeIn;
    }

    private static __$easeInToLinear : Cubic;
    static get easeInToLinear() : Cubic { 
        if (this.__$easeInToLinear===undefined) {
            this.__$easeInToLinear = Cubic(0.67,0.03,0.65,0.09);
        }
        return this.__$easeInToLinear;
    }

    private static __$easeInSine : Cubic;
    static get easeInSine() : Cubic { 
        if (this.__$easeInSine===undefined) {
            this.__$easeInSine = Cubic(0.47,0,0.745,0.715);
        }
        return this.__$easeInSine;
    }

    private static __$easeInQuad : Cubic;
    static get easeInQuad() : Cubic { 
        if (this.__$easeInQuad===undefined) {
            this.__$easeInQuad = Cubic(0.55,0.085,0.68,0.53);
        }
        return this.__$easeInQuad;
    }

    private static __$easeInCubic : Cubic;
    static get easeInCubic() : Cubic { 
        if (this.__$easeInCubic===undefined) {
            this.__$easeInCubic = Cubic(0.55,0.055,0.675,0.19);
        }
        return this.__$easeInCubic;
    }

    private static __$easeInQuart : Cubic;
    static get easeInQuart() : Cubic { 
        if (this.__$easeInQuart===undefined) {
            this.__$easeInQuart = Cubic(0.895,0.03,0.685,0.22);
        }
        return this.__$easeInQuart;
    }

    private static __$easeInQuint : Cubic;
    static get easeInQuint() : Cubic { 
        if (this.__$easeInQuint===undefined) {
            this.__$easeInQuint = Cubic(0.755,0.05,0.855,0.06);
        }
        return this.__$easeInQuint;
    }

    private static __$easeInExpo : Cubic;
    static get easeInExpo() : Cubic { 
        if (this.__$easeInExpo===undefined) {
            this.__$easeInExpo = Cubic(0.95,0.05,0.795,0.035);
        }
        return this.__$easeInExpo;
    }

    private static __$easeInCirc : Cubic;
    static get easeInCirc() : Cubic { 
        if (this.__$easeInCirc===undefined) {
            this.__$easeInCirc = Cubic(0.6,0.04,0.98,0.335);
        }
        return this.__$easeInCirc;
    }

    private static __$easeInBack : Cubic;
    static get easeInBack() : Cubic { 
        if (this.__$easeInBack===undefined) {
            this.__$easeInBack = Cubic(0.6,-0.28,0.735,0.045);
        }
        return this.__$easeInBack;
    }

    private static __$easeOut : Cubic;
    static get easeOut() : Cubic { 
        if (this.__$easeOut===undefined) {
            this.__$easeOut = Cubic(0.0,0.0,0.58,1.0);
        }
        return this.__$easeOut;
    }

    private static __$linearToEaseOut : Cubic;
    static get linearToEaseOut() : Cubic { 
        if (this.__$linearToEaseOut===undefined) {
            this.__$linearToEaseOut = Cubic(0.35,0.91,0.33,0.97);
        }
        return this.__$linearToEaseOut;
    }

    private static __$easeOutSine : Cubic;
    static get easeOutSine() : Cubic { 
        if (this.__$easeOutSine===undefined) {
            this.__$easeOutSine = Cubic(0.39,0.575,0.565,1.0);
        }
        return this.__$easeOutSine;
    }

    private static __$easeOutQuad : Cubic;
    static get easeOutQuad() : Cubic { 
        if (this.__$easeOutQuad===undefined) {
            this.__$easeOutQuad = Cubic(0.25,0.46,0.45,0.94);
        }
        return this.__$easeOutQuad;
    }

    private static __$easeOutCubic : Cubic;
    static get easeOutCubic() : Cubic { 
        if (this.__$easeOutCubic===undefined) {
            this.__$easeOutCubic = Cubic(0.215,0.61,0.355,1.0);
        }
        return this.__$easeOutCubic;
    }

    private static __$easeOutQuart : Cubic;
    static get easeOutQuart() : Cubic { 
        if (this.__$easeOutQuart===undefined) {
            this.__$easeOutQuart = Cubic(0.165,0.84,0.44,1.0);
        }
        return this.__$easeOutQuart;
    }

    private static __$easeOutQuint : Cubic;
    static get easeOutQuint() : Cubic { 
        if (this.__$easeOutQuint===undefined) {
            this.__$easeOutQuint = Cubic(0.23,1.0,0.32,1.0);
        }
        return this.__$easeOutQuint;
    }

    private static __$easeOutExpo : Cubic;
    static get easeOutExpo() : Cubic { 
        if (this.__$easeOutExpo===undefined) {
            this.__$easeOutExpo = Cubic(0.19,1.0,0.22,1.0);
        }
        return this.__$easeOutExpo;
    }

    private static __$easeOutCirc : Cubic;
    static get easeOutCirc() : Cubic { 
        if (this.__$easeOutCirc===undefined) {
            this.__$easeOutCirc = Cubic(0.075,0.82,0.165,1.0);
        }
        return this.__$easeOutCirc;
    }

    private static __$easeOutBack : Cubic;
    static get easeOutBack() : Cubic { 
        if (this.__$easeOutBack===undefined) {
            this.__$easeOutBack = Cubic(0.175,0.885,0.32,1.275);
        }
        return this.__$easeOutBack;
    }

    private static __$easeInOut : Cubic;
    static get easeInOut() : Cubic { 
        if (this.__$easeInOut===undefined) {
            this.__$easeInOut = Cubic(0.42,0.0,0.58,1.0);
        }
        return this.__$easeInOut;
    }

    private static __$easeInOutSine : Cubic;
    static get easeInOutSine() : Cubic { 
        if (this.__$easeInOutSine===undefined) {
            this.__$easeInOutSine = Cubic(0.445,0.05,0.55,0.95);
        }
        return this.__$easeInOutSine;
    }

    private static __$easeInOutQuad : Cubic;
    static get easeInOutQuad() : Cubic { 
        if (this.__$easeInOutQuad===undefined) {
            this.__$easeInOutQuad = Cubic(0.455,0.03,0.515,0.955);
        }
        return this.__$easeInOutQuad;
    }

    private static __$easeInOutCubic : Cubic;
    static get easeInOutCubic() : Cubic { 
        if (this.__$easeInOutCubic===undefined) {
            this.__$easeInOutCubic = Cubic(0.645,0.045,0.355,1.0);
        }
        return this.__$easeInOutCubic;
    }

    private static __$easeInOutQuart : Cubic;
    static get easeInOutQuart() : Cubic { 
        if (this.__$easeInOutQuart===undefined) {
            this.__$easeInOutQuart = Cubic(0.77,0,0.175,1.0);
        }
        return this.__$easeInOutQuart;
    }

    private static __$easeInOutQuint : Cubic;
    static get easeInOutQuint() : Cubic { 
        if (this.__$easeInOutQuint===undefined) {
            this.__$easeInOutQuint = Cubic(0.86,0,0.07,1.0);
        }
        return this.__$easeInOutQuint;
    }

    private static __$easeInOutExpo : Cubic;
    static get easeInOutExpo() : Cubic { 
        if (this.__$easeInOutExpo===undefined) {
            this.__$easeInOutExpo = Cubic(1.0,0,0,1.0);
        }
        return this.__$easeInOutExpo;
    }

    private static __$easeInOutCirc : Cubic;
    static get easeInOutCirc() : Cubic { 
        if (this.__$easeInOutCirc===undefined) {
            this.__$easeInOutCirc = Cubic(0.785,0.135,0.15,0.86);
        }
        return this.__$easeInOutCirc;
    }

    private static __$easeInOutBack : Cubic;
    static get easeInOutBack() : Cubic { 
        if (this.__$easeInOutBack===undefined) {
            this.__$easeInOutBack = Cubic(0.68,-0.55,0.265,1.55);
        }
        return this.__$easeInOutBack;
    }

    private static __$fastOutSlowIn : Cubic;
    static get fastOutSlowIn() : Cubic { 
        if (this.__$fastOutSlowIn===undefined) {
            this.__$fastOutSlowIn = Cubic(0.4,0.0,0.2,1.0);
        }
        return this.__$fastOutSlowIn;
    }

    private static __$bounceIn : Curve;
    static get bounceIn() : Curve { 
        if (this.__$bounceIn===undefined) {
            this.__$bounceIn = _BounceInCurve._();
        }
        return this.__$bounceIn;
    }

    private static __$bounceOut : Curve;
    static get bounceOut() : Curve { 
        if (this.__$bounceOut===undefined) {
            this.__$bounceOut = _BounceOutCurve._();
        }
        return this.__$bounceOut;
    }

    private static __$bounceInOut : Curve;
    static get bounceInOut() : Curve { 
        if (this.__$bounceInOut===undefined) {
            this.__$bounceInOut = _BounceInOutCurve._();
        }
        return this.__$bounceInOut;
    }

    private static __$elasticIn : ElasticInCurve;
    static get elasticIn() : ElasticInCurve { 
        if (this.__$elasticIn===undefined) {
            this.__$elasticIn = ElasticInCurve();
        }
        return this.__$elasticIn;
    }

    private static __$elasticOut : ElasticOutCurve;
    static get elasticOut() : ElasticOutCurve { 
        if (this.__$elasticOut===undefined) {
            this.__$elasticOut = ElasticOutCurve();
        }
        return this.__$elasticOut;
    }

    private static __$elasticInOut : ElasticInOutCurve;
    static get elasticInOut() : ElasticInOutCurve { 
        if (this.__$elasticInOut===undefined) {
            this.__$elasticInOut = ElasticInOutCurve();
        }
        return this.__$elasticInOut;
    }

}

export namespace _Linear {
    export type Constructors = Curve.Constructors | '_';
    export type Interface = Omit<_Linear, Constructors>;
}
@DartClass
export class _Linear extends Curve {
    @namedConstructor
    _() {
    }
    static _ : new() => _Linear;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        return t;
    }
}

export namespace SawTooth {
    export type Constructors = Curve.Constructors | 'SawTooth';
    export type Interface = Omit<SawTooth, Constructors>;
}
@DartClass
export class SawTooth extends Curve {
    constructor(count : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SawTooth(count : number) {
        this.assert = assert;
        this.count = count;
    }
     : any;

    count : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        if (t == 1.0) return 1.0;
        t *= this.count;
        return t - new core.DartDouble(t).truncateToDouble();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.count})`;
    }
}

export namespace Interval {
    export type Constructors = Curve.Constructors | 'Interval';
    export type Interface = Omit<Interval, Constructors>;
}
@DartClass
export class Interval extends Curve {
    constructor(begin : double,end : double,_namedArguments? : {curve? : Curve}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Interval(begin : double,end : double,_namedArguments? : {curve? : Curve}) {
        let {curve} = Object.assign({
            "curve" : Curves.linear}, _namedArguments );
        this.assert = assert;
        this.begin = begin;
        this.end = end;
        this.curve = curve;
    }
     : any;

     : any;

     : any;

    begin : double;

    end : double;

    curve : Curve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        /* TODO (AssertStatementImpl) : assert (begin >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (begin <= 1.0); */;
        /* TODO (AssertStatementImpl) : assert (end >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (end <= 1.0); */;
        /* TODO (AssertStatementImpl) : assert (end >= begin); */;
        if (t == 0.0 || t == 1.0) return t;
        t = new core.DartDouble(((t - this.begin) / (this.end - this.begin))).clamp(0.0,1.0);
        if (t == 0.0 || t == 1.0) return t;
        return this.curve.transform(t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (isNot(this.curve, _Linear)) return `${this.runtimeType}(${this.begin}⋯${this.end})➩${this.curve}`;
        return `${this.runtimeType}(${this.begin}⋯${this.end})`;
    }
}

export namespace Threshold {
    export type Constructors = Curve.Constructors | 'Threshold';
    export type Interface = Omit<Threshold, Constructors>;
}
@DartClass
export class Threshold extends Curve {
    constructor(threshold : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Threshold(threshold : double) {
        this.assert = assert;
        this.threshold = threshold;
    }
     : any;

    threshold : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        /* TODO (AssertStatementImpl) : assert (threshold >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (threshold <= 1.0); */;
        if (t == 0.0 || t == 1.0) return t;
        return t < this.threshold ? 0.0 : 1.0;
    }
}

export namespace Cubic {
    export type Constructors = Curve.Constructors | 'Cubic';
    export type Interface = Omit<Cubic, Constructors>;
}
@DartClass
export class Cubic extends Curve {
    constructor(a : double,b : double,c : double,d : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Cubic(a : double,b : double,c : double,d : double) {
        this.assert = assert;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
     : any;

     : any;

     : any;

     : any;

    a : double;

    b : double;

    c : double;

    d : double;

    private static __$_cubicErrorBound : double;
    static get _cubicErrorBound() : double { 
        if (this.__$_cubicErrorBound===undefined) {
            this.__$_cubicErrorBound = 0.001;
        }
        return this.__$_cubicErrorBound;
    }

    _evaluateCubic(a : double,b : double,m : double) : double {
        return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        let start : double = 0.0;
        let end : double = 1.0;
        while (true){
            let midpoint : double = (start + end) / 2;
            let estimate : double = this._evaluateCubic(this.a,this.c,midpoint);
            if (new core.DartDouble((t - estimate)).abs() < Cubic._cubicErrorBound) return this._evaluateCubic(this.b,this.d,midpoint);
            if (estimate < t) start = midpoint;else end = midpoint;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${new core.DartDouble(this.a).toStringAsFixed(2)}, ${new core.DartDouble(this.b).toStringAsFixed(2)}, ${new core.DartDouble(this.c).toStringAsFixed(2)}, ${new core.DartDouble(this.d).toStringAsFixed(2)})`;
    }
}

export namespace FlippedCurve {
    export type Constructors = Curve.Constructors | 'FlippedCurve';
    export type Interface = Omit<FlippedCurve, Constructors>;
}
@DartClass
export class FlippedCurve extends Curve {
    constructor(curve : Curve) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlippedCurve(curve : Curve) {
        this.assert = assert;
        this.curve = curve;
    }
     : any;

    curve : Curve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        return 1.0 - this.curve.transform(1.0 - t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.curve})`;
    }
}

export namespace _DecelerateCurve {
    export type Constructors = Curve.Constructors | '_';
    export type Interface = Omit<_DecelerateCurve, Constructors>;
}
@DartClass
export class _DecelerateCurve extends Curve {
    @namedConstructor
    _() {
    }
    static _ : new() => _DecelerateCurve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        t = 1.0 - t;
        return 1.0 - t * t;
    }
}

export namespace _BounceInCurve {
    export type Constructors = Curve.Constructors | '_';
    export type Interface = Omit<_BounceInCurve, Constructors>;
}
@DartClass
export class _BounceInCurve extends Curve {
    @namedConstructor
    _() {
    }
    static _ : new() => _BounceInCurve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        return 1.0 - _bounce(1.0 - t);
    }
}

export namespace _BounceOutCurve {
    export type Constructors = Curve.Constructors | '_';
    export type Interface = Omit<_BounceOutCurve, Constructors>;
}
@DartClass
export class _BounceOutCurve extends Curve {
    @namedConstructor
    _() {
    }
    static _ : new() => _BounceOutCurve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        return _bounce(t);
    }
}

export namespace _BounceInOutCurve {
    export type Constructors = Curve.Constructors | '_';
    export type Interface = Omit<_BounceInOutCurve, Constructors>;
}
@DartClass
export class _BounceInOutCurve extends Curve {
    @namedConstructor
    _() {
    }
    static _ : new() => _BounceInOutCurve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        if (t < 0.5) return (1.0 - _bounce(1.0 - t * 2.0)) * 0.5;else return _bounce(t * 2.0 - 1.0) * 0.5 + 0.5;
    }
}

export namespace ElasticInCurve {
    export type Constructors = Curve.Constructors | 'ElasticInCurve';
    export type Interface = Omit<ElasticInCurve, Constructors>;
}
@DartClass
export class ElasticInCurve extends Curve {
    constructor(period? : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElasticInCurve(period? : double) {
        period = period || 0.4;
        this.period = period;
    }
    period : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        let s : double = this.period / 4.0;
        t = t - 1.0;
        return -math.pow(2.0,10.0 * t) * math.sin((t - s) * (op(Op.TIMES,math.pi,2.0)) / this.period);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.period})`;
    }
}

export namespace ElasticOutCurve {
    export type Constructors = Curve.Constructors | 'ElasticOutCurve';
    export type Interface = Omit<ElasticOutCurve, Constructors>;
}
@DartClass
export class ElasticOutCurve extends Curve {
    constructor(period? : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElasticOutCurve(period? : double) {
        period = period || 0.4;
        this.period = period;
    }
    period : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        let s : double = this.period / 4.0;
        return math.pow(2.0,-10 * t) * math.sin((t - s) * (op(Op.TIMES,math.pi,2.0)) / this.period) + 1.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.period})`;
    }
}

export namespace ElasticInOutCurve {
    export type Constructors = Curve.Constructors | 'ElasticInOutCurve';
    export type Interface = Omit<ElasticInOutCurve, Constructors>;
}
@DartClass
export class ElasticInOutCurve extends Curve {
    constructor(period? : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElasticInOutCurve(period? : double) {
        period = period || 0.4;
        this.period = period;
    }
    period : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transform(t : double) : double {
        /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
        let s : double = this.period / 4.0;
        t = 2.0 * t - 1.0;
        if (t < 0.0) return -0.5 * math.pow(2.0,10.0 * t) * math.sin((t - s) * (op(Op.TIMES,math.pi,2.0)) / this.period);else return math.pow(2.0,-10.0 * t) * math.sin((t - s) * (op(Op.TIMES,math.pi,2.0)) / this.period) * 0.5 + 1.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.period})`;
    }
}

export class properties {
}
