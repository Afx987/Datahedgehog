/** Library asset:datahedgehog_monitor/lib/lib/material/arc.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as math from "@dart2ts/dart/math";

export var _maxBy : <T>(input : core.DartIterable<T>,keyFunc : <T>(input : T) => any) => T = <T>(input : core.DartIterable<T>,keyFunc : <T>(input : T) => any) : T =>  {
    let maxValue : T;
    let maxKey : any;
    for(let value of input) {
        let key : any = keyFunc(value);
        if (op(Op.EQUALS,maxKey,null) || op(Op.GT,key,maxKey)) {
            maxValue = value;
            maxKey = key;
        }
    }
    return maxValue;
};
export namespace MaterialPointArcTween {
    export type Constructors = lib3.Tween.Constructors | 'MaterialPointArcTween';
    export type Interface = Omit<MaterialPointArcTween, Constructors>;
}
@DartClass
export class MaterialPointArcTween extends lib3.Tween<any> {
    constructor(_namedArguments? : {begin? : any,end? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialPointArcTween(_namedArguments? : {begin? : any,end? : any}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        this._dirty = true;
        super.Tween({
            begin : begin,end : end});
    }
    _dirty : boolean;

    _initialize() : any {
        /* TODO (AssertStatementImpl) : assert (begin != null); */;
        /* TODO (AssertStatementImpl) : assert (end != null); */;
        let delta : any = op(Op.MINUS,end,begin);
        let deltaX : double = delta.dx.abs();
        let deltaY : double = delta.dy.abs();
        let distanceFromAtoB : double = delta.distance;
        let c : any = Offset(end.dx,begin.dy);
        var sweepAngle : () => double = () : double =>  {
            return 2.0 * math.asin(distanceFromAtoB / (2.0 * this._radius));
        };
        if (deltaX > properties._kOnAxisDelta && deltaY > properties._kOnAxisDelta) {
            if (deltaX < deltaY) {
                this._radius = distanceFromAtoB * distanceFromAtoB / (op(Op.MINUS,c,begin)).distance / 2.0;
                this._center = Offset(op(Op.PLUS,end.dx,this._radius * (op(Op.MINUS,begin.dx,end.dx)).sign),end.dy);
                if (op(Op.LT,begin.dx,end.dx)) {
                    this._beginAngle = sweepAngle() * (op(Op.MINUS,begin.dy,end.dy)).sign;
                    this._endAngle = 0.0;
                }else {
                    this._beginAngle = op(Op.PLUS,math.pi,sweepAngle() * (op(Op.MINUS,end.dy,begin.dy)).sign);
                    this._endAngle = math.pi;
                }
            }else {
                this._radius = distanceFromAtoB * distanceFromAtoB / (op(Op.MINUS,c,end)).distance / 2.0;
                this._center = Offset(begin.dx,op(Op.PLUS,begin.dy,op(Op.TIMES,(op(Op.MINUS,end.dy,begin.dy)).sign,this._radius)));
                if (op(Op.LT,begin.dy,end.dy)) {
                    this._beginAngle = op(Op.DIVIDE,op(Op.NEG,math.pi),2.0);
                    this._endAngle = this._beginAngle + sweepAngle() * (op(Op.MINUS,end.dx,begin.dx)).sign;
                }else {
                    this._beginAngle = op(Op.DIVIDE,math.pi,2.0);
                    this._endAngle = this._beginAngle + sweepAngle() * (op(Op.MINUS,begin.dx,end.dx)).sign;
                }
            }
            /* TODO (AssertStatementImpl) : assert (_beginAngle != null); */;
            /* TODO (AssertStatementImpl) : assert (_endAngle != null); */;
        }else {
            this._beginAngle = null;
            this._endAngle = null;
        }
        this._dirty = false;
    }
    get center() : any {
        if (op(Op.EQUALS,begin,null) || op(Op.EQUALS,end,null)) return null;
        if (this._dirty) this._initialize();
        return this._center;
    }
    _center : any;

    get radius() : double {
        if (op(Op.EQUALS,begin,null) || op(Op.EQUALS,end,null)) return null;
        if (this._dirty) this._initialize();
        return this._radius;
    }
    _radius : double;

    get beginAngle() : double {
        if (op(Op.EQUALS,begin,null) || op(Op.EQUALS,end,null)) return null;
        if (this._dirty) this._initialize();
        return this._beginAngle;
    }
    _beginAngle : double;

    get endAngle() : double {
        if (op(Op.EQUALS,begin,null) || op(Op.EQUALS,end,null)) return null;
        if (this._dirty) this._initialize();
        return this._beginAngle;
    }
    _endAngle : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set begin(value : any) {
        if (value != begin) {
            super.begin = value;
            this._dirty = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set end(value : any) {
        if (value != end) {
            super.end = value;
            this._dirty = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : any {
        if (this._dirty) this._initialize();
        if (t == 0.0) return begin;
        if (t == 1.0) return end;
        if (this._beginAngle == null || this._endAngle == null) return Offset.lerp(begin,end,t);
        let angle : double = lerpDouble(this._beginAngle,this._endAngle,t);
        let x : double = math.cos(angle) * this._radius;
        let y : double = math.sin(angle) * this._radius;
        return op(Op.PLUS,this._center,Offset(x,y));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${begin} → ${end}; center=${this.center}, radius=${this.radius}, beginAngle=${this.beginAngle}, endAngle=${this.endAngle})`;
    }
}

export enum _CornerId {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
}

export namespace _Diagonal {
    export type Constructors = '_Diagonal';
    export type Interface = Omit<_Diagonal, Constructors>;
}
@DartClass
export class _Diagonal {
    constructor(beginId : _CornerId,endId : _CornerId) {
    }
    @defaultConstructor
    _Diagonal(beginId : _CornerId,endId : _CornerId) {
        this.beginId = beginId;
        this.endId = endId;
    }
    beginId : _CornerId;

    endId : _CornerId;

}

export namespace MaterialRectArcTween {
    export type Constructors = lib3.RectTween.Constructors | 'MaterialRectArcTween';
    export type Interface = Omit<MaterialRectArcTween, Constructors>;
}
@DartClass
export class MaterialRectArcTween extends lib3.RectTween {
    constructor(_namedArguments? : {begin? : any,end? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialRectArcTween(_namedArguments? : {begin? : any,end? : any}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        this._dirty = true;
        super.RectTween({
            begin : begin,end : end});
    }
    _dirty : boolean;

    _initialize() : any {
        /* TODO (AssertStatementImpl) : assert (begin != null); */;
        /* TODO (AssertStatementImpl) : assert (end != null); */;
        let centersVector : any = op(Op.MINUS,end.center,begin.center);
        let diagonal : _Diagonal = _maxBy(properties._allDiagonals,(d : _Diagonal) =>  {
            return this._diagonalSupport(centersVector,d);
        });
        this._beginArc = MaterialPointArcTween({
            begin : this._cornerFor(begin,diagonal.beginId),end : this._cornerFor(end,diagonal.beginId)});
        this._endArc = MaterialPointArcTween({
            begin : this._cornerFor(begin,diagonal.endId),end : this._cornerFor(end,diagonal.endId)});
        this._dirty = false;
    }
    _diagonalSupport(centersVector : any,diagonal : _Diagonal) : double {
        let delta : any = op(Op.MINUS,this._cornerFor(begin,diagonal.endId),this._cornerFor(begin,diagonal.beginId));
        let length : double = delta.distance;
        return op(Op.PLUS,op(Op.DIVIDE,op(Op.TIMES,centersVector.dx,delta.dx),length),op(Op.DIVIDE,op(Op.TIMES,centersVector.dy,delta.dy),length));
    }
    _cornerFor(rect : any,id : _CornerId) : any {
        switch (id) {
            case _CornerId.topLeft:
                return rect.topLeft;
            case _CornerId.topRight:
                return rect.topRight;
            case _CornerId.bottomLeft:
                return rect.bottomLeft;
            case _CornerId.bottomRight:
                return rect.bottomRight;
        }
        return Offset.zero;
    }
    get beginArc() : MaterialPointArcTween {
        if (op(Op.EQUALS,begin,null)) return null;
        if (this._dirty) this._initialize();
        return this._beginArc;
    }
    _beginArc : MaterialPointArcTween;

    get endArc() : MaterialPointArcTween {
        if (op(Op.EQUALS,end,null)) return null;
        if (this._dirty) this._initialize();
        return this._endArc;
    }
    _endArc : MaterialPointArcTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set begin(value : any) {
        if (value != begin) {
            super.begin = value;
            this._dirty = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set end(value : any) {
        if (value != end) {
            super.end = value;
            this._dirty = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : any {
        if (this._dirty) this._initialize();
        if (t == 0.0) return begin;
        if (t == 1.0) return end;
        return Rect.fromPoints(this._beginArc.lerp(t),this._endArc.lerp(t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${begin} → ${end}; beginArc=${this.beginArc}, endArc=${this.endArc})`;
    }
}

export namespace MaterialRectCenterArcTween {
    export type Constructors = lib3.RectTween.Constructors | 'MaterialRectCenterArcTween';
    export type Interface = Omit<MaterialRectCenterArcTween, Constructors>;
}
@DartClass
export class MaterialRectCenterArcTween extends lib3.RectTween {
    constructor(_namedArguments? : {begin? : any,end? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialRectCenterArcTween(_namedArguments? : {begin? : any,end? : any}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        this._dirty = true;
        super.RectTween({
            begin : begin,end : end});
    }
    _dirty : boolean;

    _initialize() : any {
        /* TODO (AssertStatementImpl) : assert (begin != null); */;
        /* TODO (AssertStatementImpl) : assert (end != null); */;
        this._centerArc = MaterialPointArcTween({
            begin : begin.center,end : end.center});
        this._dirty = false;
    }
    get centerArc() : MaterialPointArcTween {
        if (op(Op.EQUALS,begin,null) || op(Op.EQUALS,end,null)) return null;
        if (this._dirty) this._initialize();
        return this._centerArc;
    }
    _centerArc : MaterialPointArcTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set begin(value : any) {
        if (value != begin) {
            super.begin = value;
            this._dirty = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set end(value : any) {
        if (value != end) {
            super.end = value;
            this._dirty = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : any {
        if (this._dirty) this._initialize();
        if (t == 0.0) return begin;
        if (t == 1.0) return end;
        let center : any = this._centerArc.lerp(t);
        let width : double = lerpDouble(begin.width,end.width,t);
        let height : double = lerpDouble(begin.height,end.height,t);
        return Rect.fromLTWH(op(Op.MINUS,center.dx,width / 2.0),op(Op.MINUS,center.dy,height / 2.0),width,height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${begin} → ${end}; centerArc=${this.centerArc})`;
    }
}

export class properties {
    private static __$_kOnAxisDelta : double;
    static get _kOnAxisDelta() : double { 
        if (this.__$_kOnAxisDelta===undefined) {
            this.__$_kOnAxisDelta = 2.0;
        }
        return this.__$_kOnAxisDelta;
    }
    static set _kOnAxisDelta(__$value : double)  { 
        this.__$_kOnAxisDelta = __$value;
    }

    private static __$_allDiagonals : core.DartList<_Diagonal>;
    static get _allDiagonals() : core.DartList<_Diagonal> { 
        if (this.__$_allDiagonals===undefined) {
            this.__$_allDiagonals = new core.DartList.literal<_Diagonal>(_Diagonal(_CornerId.topLeft,_CornerId.bottomRight),_Diagonal(_CornerId.bottomRight,_CornerId.topLeft),_Diagonal(_CornerId.topRight,_CornerId.bottomLeft),_Diagonal(_CornerId.bottomLeft,_CornerId.topRight));
        }
        return this.__$_allDiagonals;
    }
    static set _allDiagonals(__$value : core.DartList<_Diagonal>)  { 
        this.__$_allDiagonals = __$value;
    }

}
