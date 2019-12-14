/** Library asset:datahedgehog_monitor/lib/lib/painting/gradient.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./alignment";
import * as math from "@dart2ts/dart/math";

export var _interpolateColorsAndStops : (aColors : core.DartList<any>,aStops : core.DartList<double>,bColors : core.DartList<any>,bStops : core.DartList<double>,t : double) => _ColorsAndStops = (aColors : core.DartList<any>,aStops : core.DartList<double>,bColors : core.DartList<any>,bStops : core.DartList<double>,t : double) : _ColorsAndStops =>  {
    /* TODO (AssertStatementImpl) : assert (aColors.length == bColors.length, 'Cannot interpolate between two gradients with a different number of colors.'); */;
    /* TODO (AssertStatementImpl) : assert ((aStops == null && aColors.length == 2) || (aStops != null && aStops.length == aColors.length)); */;
    /* TODO (AssertStatementImpl) : assert ((bStops == null && bColors.length == 2) || (bStops != null && bStops.length == bColors.length)); */;
    let interpolatedColors : core.DartList<any> = new core.DartList.literal<any>();
    for(let i : number = 0; i < aColors.length; i += 1)interpolatedColors.add(Color.lerp(aColors[i],bColors[i],t));
    let interpolatedStops : core.DartList<double>;
    if (aStops != null || bStops != null) {
        aStops = ( aStops ) || ( new core.DartList.literal<double>(0.0,1.0) );
        bStops = ( bStops ) || ( new core.DartList.literal<double>(0.0,1.0) );
        /* TODO (AssertStatementImpl) : assert (aStops.length == bStops.length); */;
        interpolatedStops = new core.DartList.literal<double>();
        for(let i : number = 0; i < aStops.length; i += 1)interpolatedStops.add(ui.lerpDouble(aStops[i],bStops[i],t).clamp(0.0,1.0));
    }
    return _ColorsAndStops(interpolatedColors,interpolatedStops);
};
export namespace _ColorsAndStops {
    export type Constructors = '_ColorsAndStops';
    export type Interface = Omit<_ColorsAndStops, Constructors>;
}
@DartClass
export class _ColorsAndStops {
    constructor(colors : core.DartList<any>,stops : core.DartList<double>) {
    }
    @defaultConstructor
    _ColorsAndStops(colors : core.DartList<any>,stops : core.DartList<double>) {
        this.colors = colors;
        this.stops = stops;
    }
    colors : core.DartList<any>;

    stops : core.DartList<double>;

}

export namespace Gradient {
    export type Constructors = 'Gradient';
    export type Interface = Omit<Gradient, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Gradient {
    constructor(_namedArguments? : {colors? : core.DartList<any>,stops? : core.DartList<double>}) {
    }
    @defaultConstructor
    Gradient(_namedArguments? : {colors? : core.DartList<any>,stops? : core.DartList<double>}) {
        let {colors,stops} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.colors = colors;
        this.stops = stops;
    }
     : any;

    colors : core.DartList<any>;

    stops : core.DartList<double>;

    _impliedStops() : core.DartList<double> {
        if (this.stops != null) return this.stops;
        if (this.colors.length == 2) return null;
        /* TODO (AssertStatementImpl) : assert (colors.length >= 2, 'colors list must have at least two colors'); */;
        let separation : double = 1.0 / (this.colors.length - 1);
        return op(Op.LT,core.DartList<E>,double);
        op(Op.GT,,.generate(this.colors.length,(index : number) =>  {
            return index * separation;
        },{
            growable : false}));
    }
    @Abstract
    createShader(rect : any,_namedArguments? : {textDirection? : any}) : any{ throw 'abstract'}
    @Abstract
    scale(factor : double) : Gradient{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,a,null)) return this.scale(t);
        return null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,b,null)) return this.scale(1.0 - t);
        return null;
    }
    static lerp(a : Gradient,b : Gradient,t : double) : Gradient {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        let result : Gradient;
        if (b != null) result = b.lerpFrom(a,t);
        if (op(Op.EQUALS,result,null) && a != null) result = a.lerpTo(b,t);
        if (result != null) return result;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        /* TODO (AssertStatementImpl) : assert (a != null && b != null); */;
        return t < 0.5 ? a.scale(1.0 - (t * 2.0)) : b.scale((t - 0.5) * 2.0);
    }
}

export namespace LinearGradient {
    export type Constructors = Gradient.Constructors | 'LinearGradient';
    export type Interface = Omit<LinearGradient, Constructors>;
}
@DartClass
export class LinearGradient extends Gradient {
    constructor(_namedArguments? : {begin? : lib3.AlignmentGeometry,end? : lib3.AlignmentGeometry,colors? : core.DartList<any>,stops? : core.DartList<double>,tileMode? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinearGradient(_namedArguments? : {begin? : lib3.AlignmentGeometry,end? : lib3.AlignmentGeometry,colors? : core.DartList<any>,stops? : core.DartList<double>,tileMode? : any}) {
        let {begin,end,colors,stops,tileMode} = Object.assign({
            "begin" : lib3.Alignment.centerLeft,
            "end" : lib3.Alignment.centerRight,
            "tileMode" : TileMode.clamp}, _namedArguments );
        this.assert = assert;
        this.begin = begin;
        this.end = end;
        this.tileMode = tileMode;
    }
     : any;

     : any;

     : any;

     : any;

    colors;
    stops;

     : any;

    begin : lib3.AlignmentGeometry;

    end : lib3.AlignmentGeometry;

    tileMode : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createShader(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ui.Gradient.linear(this.begin.resolve(textDirection).withinRect(rect),this.end.resolve(textDirection).withinRect(rect),this.colors,this._impliedStops(),this.tileMode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(factor : double) : LinearGradient {
        return LinearGradient({
            begin : this.begin,end : this.end,colors : this.colors.map((color : any) =>  {
                return Color.lerp(null,color,factor);
            }).toList(),stops : this.stops,tileMode : this.tileMode});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,a,null) || (is(a, LinearGradient) && op(Op.EQUALS,a.colors.length,this.colors.length))) return LinearGradient.lerp(a,this,t);
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,b,null) || (is(b, LinearGradient) && op(Op.EQUALS,b.colors.length,this.colors.length))) return LinearGradient.lerp(this,b,t);
        return super.lerpTo(b,t);
    }
    static lerp(a : LinearGradient,b : LinearGradient,t : double) : LinearGradient {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        let interpolated : _ColorsAndStops = _interpolateColorsAndStops(a.colors,a.stops,b.colors,b.stops,t);
        return LinearGradient({
            begin : lib3.AlignmentGeometry.lerp(a.begin,b.begin,t),end : lib3.AlignmentGeometry.lerp(a.end,b.end,t),colors : interpolated.colors,stops : interpolated.stops,tileMode : t < 0.5 ? a.tileMode : b.tileMode});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : LinearGradient = other;
        if (this.begin != typedOther.begin || this.end != typedOther.end || this.tileMode != typedOther.tileMode || ((t)=>(!!t)?t.length:null)(this.colors) != ((t)=>(!!t)?t.length:null)(typedOther.colors) || ((t)=>(!!t)?t.length:null)(this.stops) != ((t)=>(!!t)?t.length:null)(typedOther.stops)) return false;
        if (this.colors != null) {
            /* TODO (AssertStatementImpl) : assert (typedOther.colors != null); */;
            /* TODO (AssertStatementImpl) : assert (colors.length == typedOther.colors.length); */;
            for(let i : number = 0; i < this.colors.length; i += 1){
                if (op(Op.INDEX,this.colors,i) != op(Op.INDEX,typedOther.colors,i)) return false;
            }
        }
        if (this.stops != null) {
            /* TODO (AssertStatementImpl) : assert (typedOther.stops != null); */;
            /* TODO (AssertStatementImpl) : assert (stops.length == typedOther.stops.length); */;
            for(let i : number = 0; i < this.stops.length; i += 1){
                if (op(Op.INDEX,this.stops,i) != op(Op.INDEX,typedOther.stops,i)) return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.begin,this.end,this.tileMode,hashList(this.colors),hashList(this.stops));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.begin}, ${this.end}, ${this.colors}, ${this.stops}, ${this.tileMode})`;
    }
}

export namespace RadialGradient {
    export type Constructors = Gradient.Constructors | 'RadialGradient';
    export type Interface = Omit<RadialGradient, Constructors>;
}
@DartClass
export class RadialGradient extends Gradient {
    constructor(_namedArguments? : {center? : lib3.AlignmentGeometry,radius? : double,colors? : core.DartList<any>,stops? : core.DartList<double>,tileMode? : any,focal? : lib3.AlignmentGeometry,focalRadius? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RadialGradient(_namedArguments? : {center? : lib3.AlignmentGeometry,radius? : double,colors? : core.DartList<any>,stops? : core.DartList<double>,tileMode? : any,focal? : lib3.AlignmentGeometry,focalRadius? : double}) {
        let {center,radius,colors,stops,tileMode,focal,focalRadius} = Object.assign({
            "center" : lib3.Alignment.center,
            "radius" : 0.5,
            "tileMode" : TileMode.clamp,
            "focalRadius" : 0.0}, _namedArguments );
        this.assert = assert;
        this.center = center;
        this.radius = radius;
        this.tileMode = tileMode;
        this.focal = focal;
        this.focalRadius = focalRadius;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    colors;
    stops;

     : any;

    center : lib3.AlignmentGeometry;

    radius : double;

    tileMode : any;

    focal : lib3.AlignmentGeometry;

    focalRadius : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createShader(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ui.Gradient.radial(this.center.resolve(textDirection).withinRect(rect),this.radius * rect.shortestSide,this.colors,this._impliedStops(),this.tileMode,null,op(Op.EQUALS,this.focal,null) ? null : this.focal.resolve(textDirection).withinRect(rect),this.focalRadius * rect.shortestSide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(factor : double) : RadialGradient {
        return RadialGradient({
            center : this.center,radius : this.radius,colors : this.colors.map((color : any) =>  {
                return Color.lerp(null,color,factor);
            }).toList(),stops : this.stops,tileMode : this.tileMode,focal : this.focal,focalRadius : this.focalRadius});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,a,null) || (is(a, RadialGradient) && op(Op.EQUALS,a.colors.length,this.colors.length))) return RadialGradient.lerp(a,this,t);
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,b,null) || (is(b, RadialGradient) && op(Op.EQUALS,b.colors.length,this.colors.length))) return RadialGradient.lerp(this,b,t);
        return super.lerpTo(b,t);
    }
    static lerp(a : RadialGradient,b : RadialGradient,t : double) : RadialGradient {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        let interpolated : _ColorsAndStops = _interpolateColorsAndStops(a.colors,a.stops,b.colors,b.stops,t);
        return RadialGradient({
            center : lib3.AlignmentGeometry.lerp(a.center,b.center,t),radius : math.max(0.0,ui.lerpDouble(a.radius,b.radius,t)),colors : interpolated.colors,stops : interpolated.stops,tileMode : t < 0.5 ? a.tileMode : b.tileMode,focal : lib3.AlignmentGeometry.lerp(a.focal,b.focal,t),focalRadius : math.max(0.0,ui.lerpDouble(a.focalRadius,b.focalRadius,t))});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : RadialGradient = other;
        if (this.center != typedOther.center || this.radius != typedOther.radius || this.tileMode != typedOther.tileMode || ((t)=>(!!t)?t.length:null)(this.colors) != ((t)=>(!!t)?t.length:null)(typedOther.colors) || ((t)=>(!!t)?t.length:null)(this.stops) != ((t)=>(!!t)?t.length:null)(typedOther.stops) || this.focal != typedOther.focal || this.focalRadius != typedOther.focalRadius) return false;
        if (this.colors != null) {
            /* TODO (AssertStatementImpl) : assert (typedOther.colors != null); */;
            /* TODO (AssertStatementImpl) : assert (colors.length == typedOther.colors.length); */;
            for(let i : number = 0; i < this.colors.length; i += 1){
                if (op(Op.INDEX,this.colors,i) != op(Op.INDEX,typedOther.colors,i)) return false;
            }
        }
        if (this.stops != null) {
            /* TODO (AssertStatementImpl) : assert (typedOther.stops != null); */;
            /* TODO (AssertStatementImpl) : assert (stops.length == typedOther.stops.length); */;
            for(let i : number = 0; i < this.stops.length; i += 1){
                if (op(Op.INDEX,this.stops,i) != op(Op.INDEX,typedOther.stops,i)) return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.center,this.radius,this.tileMode,hashList(this.colors),hashList(this.stops),this.focal,this.focalRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.center}, ${this.radius}, ${this.colors}, ${this.stops}, ${this.tileMode}, ${this.focal}, ${this.focalRadius})`;
    }
}

export namespace SweepGradient {
    export type Constructors = Gradient.Constructors | 'SweepGradient';
    export type Interface = Omit<SweepGradient, Constructors>;
}
@DartClass
export class SweepGradient extends Gradient {
    constructor(_namedArguments? : {center? : lib3.AlignmentGeometry,startAngle? : double,endAngle? : double,colors? : core.DartList<any>,stops? : core.DartList<double>,tileMode? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SweepGradient(_namedArguments? : {center? : lib3.AlignmentGeometry,startAngle? : double,endAngle? : double,colors? : core.DartList<any>,stops? : core.DartList<double>,tileMode? : any}) {
        let {center,startAngle,endAngle,colors,stops,tileMode} = Object.assign({
            "center" : lib3.Alignment.center,
            "startAngle" : 0.0,
            "endAngle" : op(Op.TIMES,math.pi,2),
            "tileMode" : TileMode.clamp}, _namedArguments );
        this.assert = assert;
        this.center = center;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.tileMode = tileMode;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    colors;
    stops;

     : any;

    center : lib3.AlignmentGeometry;

    startAngle : double;

    endAngle : double;

    tileMode : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createShader(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ui.Gradient.sweep(this.center.resolve(textDirection).withinRect(rect),this.colors,this._impliedStops(),this.tileMode,this.startAngle,this.endAngle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(factor : double) : SweepGradient {
        return SweepGradient({
            center : this.center,startAngle : this.startAngle,endAngle : this.endAngle,colors : this.colors.map((color : any) =>  {
                return Color.lerp(null,color,factor);
            }).toList(),stops : this.stops,tileMode : this.tileMode});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,a,null) || (is(a, SweepGradient) && op(Op.EQUALS,a.colors.length,this.colors.length))) return SweepGradient.lerp(a,this,t);
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : Gradient,t : double) : Gradient {
        if (op(Op.EQUALS,b,null) || (is(b, SweepGradient) && op(Op.EQUALS,b.colors.length,this.colors.length))) return SweepGradient.lerp(this,b,t);
        return super.lerpTo(b,t);
    }
    static lerp(a : SweepGradient,b : SweepGradient,t : double) : SweepGradient {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        let interpolated : _ColorsAndStops = _interpolateColorsAndStops(a.colors,a.stops,b.colors,b.stops,t);
        return SweepGradient({
            center : lib3.AlignmentGeometry.lerp(a.center,b.center,t),startAngle : math.max(0.0,ui.lerpDouble(a.startAngle,b.startAngle,t)),endAngle : math.max(0.0,ui.lerpDouble(a.endAngle,b.endAngle,t)),colors : interpolated.colors,stops : interpolated.stops,tileMode : t < 0.5 ? a.tileMode : b.tileMode});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : SweepGradient = other;
        if (this.center != typedOther.center || this.startAngle != typedOther.startAngle || this.endAngle != typedOther.endAngle || this.tileMode != typedOther.tileMode || ((t)=>(!!t)?t.length:null)(this.colors) != ((t)=>(!!t)?t.length:null)(typedOther.colors) || ((t)=>(!!t)?t.length:null)(this.stops) != ((t)=>(!!t)?t.length:null)(typedOther.stops)) return false;
        if (this.colors != null) {
            /* TODO (AssertStatementImpl) : assert (typedOther.colors != null); */;
            /* TODO (AssertStatementImpl) : assert (colors.length == typedOther.colors.length); */;
            for(let i : number = 0; i < this.colors.length; i += 1){
                if (op(Op.INDEX,this.colors,i) != op(Op.INDEX,typedOther.colors,i)) return false;
            }
        }
        if (this.stops != null) {
            /* TODO (AssertStatementImpl) : assert (typedOther.stops != null); */;
            /* TODO (AssertStatementImpl) : assert (stops.length == typedOther.stops.length); */;
            for(let i : number = 0; i < this.stops.length; i += 1){
                if (op(Op.INDEX,this.stops,i) != op(Op.INDEX,typedOther.stops,i)) return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.center,this.startAngle,this.endAngle,this.tileMode,hashList(this.colors),hashList(this.stops));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.center}, ${this.startAngle}, ${this.endAngle}, ${this.colors}, ${this.stops}, ${this.tileMode})`;
    }
}

export class properties {
}
