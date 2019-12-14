/** Library asset:datahedgehog_monitor/lib/lib/material/floating_action_button_location.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scaffold";
import * as math from "@dart2ts/dart/math";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animations";

export var _leftOffset : (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) => double = (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) : double =>  {
    let {offset} = Object.assign({
        "offset" : 0.0}, _namedArguments );
    return properties.kFloatingActionButtonMargin + scaffoldGeometry.minInsets.left - offset;
};
export var _rightOffset : (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) => double = (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) : double =>  {
    let {offset} = Object.assign({
        "offset" : 0.0}, _namedArguments );
    return op(Op.PLUS,op(Op.MINUS,op(Op.MINUS,op(Op.MINUS,scaffoldGeometry.scaffoldSize.width,properties.kFloatingActionButtonMargin),scaffoldGeometry.minInsets.right),scaffoldGeometry.floatingActionButtonSize.width),offset);
};
export var _endOffset : (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) => double = (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) : double =>  {
    let {offset} = Object.assign({
        "offset" : 0.0}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (scaffoldGeometry.textDirection != null); */;
    switch (scaffoldGeometry.textDirection) {
        case TextDirection.rtl:
            return _leftOffset(scaffoldGeometry,{
                offset : offset});
        case TextDirection.ltr:
            return _rightOffset(scaffoldGeometry,{
                offset : offset});
    }
    return null;
};
export var _startOffset : (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) => double = (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry,_namedArguments? : {offset? : double}) : double =>  {
    let {offset} = Object.assign({
        "offset" : 0.0}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (scaffoldGeometry.textDirection != null); */;
    switch (scaffoldGeometry.textDirection) {
        case TextDirection.rtl:
            return _rightOffset(scaffoldGeometry,{
                offset : offset});
        case TextDirection.ltr:
            return _leftOffset(scaffoldGeometry,{
                offset : offset});
    }
    return null;
};
export var _straddleAppBar : (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) => double = (scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : double =>  {
    let fabHalfHeight : double = op(Op.DIVIDE,scaffoldGeometry.floatingActionButtonSize.height,2.0);
    return scaffoldGeometry.contentTop - fabHalfHeight;
};
export namespace FloatingActionButtonLocation {
    export type Constructors = 'FloatingActionButtonLocation';
    export type Interface = Omit<FloatingActionButtonLocation, Constructors>;
}
@DartClass
export class FloatingActionButtonLocation {
    constructor() {
    }
    @defaultConstructor
    FloatingActionButtonLocation() {
    }
    private static __$endFloat : FloatingActionButtonLocation;
    static get endFloat() : FloatingActionButtonLocation { 
        if (this.__$endFloat===undefined) {
            this.__$endFloat = _EndFloatFloatingActionButtonLocation();
        }
        return this.__$endFloat;
    }

    private static __$centerFloat : FloatingActionButtonLocation;
    static get centerFloat() : FloatingActionButtonLocation { 
        if (this.__$centerFloat===undefined) {
            this.__$centerFloat = _CenterFloatFloatingActionButtonLocation();
        }
        return this.__$centerFloat;
    }

    private static __$endDocked : FloatingActionButtonLocation;
    static get endDocked() : FloatingActionButtonLocation { 
        if (this.__$endDocked===undefined) {
            this.__$endDocked = _EndDockedFloatingActionButtonLocation();
        }
        return this.__$endDocked;
    }

    private static __$centerDocked : FloatingActionButtonLocation;
    static get centerDocked() : FloatingActionButtonLocation { 
        if (this.__$centerDocked===undefined) {
            this.__$centerDocked = _CenterDockedFloatingActionButtonLocation();
        }
        return this.__$centerDocked;
    }

    private static __$startTop : FloatingActionButtonLocation;
    static get startTop() : FloatingActionButtonLocation { 
        if (this.__$startTop===undefined) {
            this.__$startTop = _StartTopFloatingActionButtonLocation();
        }
        return this.__$startTop;
    }

    private static __$miniStartTop : FloatingActionButtonLocation;
    static get miniStartTop() : FloatingActionButtonLocation { 
        if (this.__$miniStartTop===undefined) {
            this.__$miniStartTop = _MiniStartTopFloatingActionButtonLocation();
        }
        return this.__$miniStartTop;
    }

    private static __$endTop : FloatingActionButtonLocation;
    static get endTop() : FloatingActionButtonLocation { 
        if (this.__$endTop===undefined) {
            this.__$endTop = _EndTopFloatingActionButtonLocation();
        }
        return this.__$endTop;
    }

    @Abstract
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export namespace FloatingActionButtonAnimator {
    export type Constructors = 'FloatingActionButtonAnimator';
    export type Interface = Omit<FloatingActionButtonAnimator, Constructors>;
}
@DartClass
export class FloatingActionButtonAnimator {
    constructor() {
    }
    @defaultConstructor
    FloatingActionButtonAnimator() {
    }
    private static __$scaling : FloatingActionButtonAnimator;
    static get scaling() : FloatingActionButtonAnimator { 
        if (this.__$scaling===undefined) {
            this.__$scaling = _ScalingFabMotionAnimator();
        }
        return this.__$scaling;
    }

    @Abstract
    getOffset(_namedArguments? : {begin? : any,end? : any,progress? : double}) : any{ throw 'abstract'}
    @Abstract
    getScaleAnimation(_namedArguments? : {parent? : lib5.Animation<double>}) : lib5.Animation<double>{ throw 'abstract'}
    @Abstract
    getRotationAnimation(_namedArguments? : {parent? : lib5.Animation<double>}) : lib5.Animation<double>{ throw 'abstract'}
    getAnimationRestart(previousValue : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export namespace _AnimationSwap {
    export type Constructors = lib8.CompoundAnimation.Constructors | '_AnimationSwap';
    export type Interface<T> = Omit<_AnimationSwap<T>, Constructors>;
}
@DartClass
export class _AnimationSwap<T> extends lib8.CompoundAnimation<T> {
    constructor(first : lib5.Animation<T>,next : lib5.Animation<T>,parent : lib5.Animation<double>,swapThreshold : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimationSwap(first : lib5.Animation<T>,next : lib5.Animation<T>,parent : lib5.Animation<double>,swapThreshold : double) {
        super.CompoundAnimation({
            first : first,next : next});
        this.parent = parent;
        this.swapThreshold = swapThreshold;
    }
    parent : lib5.Animation<double>;

    swapThreshold : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : T {
        return this.parent.value < this.swapThreshold ? this.first.value : this.next.value;
    }
}

export namespace _CenterFloatFloatingActionButtonLocation {
    export type Constructors = FloatingActionButtonLocation.Constructors | '_CenterFloatFloatingActionButtonLocation';
    export type Interface = Omit<_CenterFloatFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _CenterFloatFloatingActionButtonLocation extends FloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CenterFloatFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any {
        let fabX : double = op(Op.DIVIDE,(op(Op.MINUS,scaffoldGeometry.scaffoldSize.width,scaffoldGeometry.floatingActionButtonSize.width)),2.0);
        let contentBottom : double = scaffoldGeometry.contentBottom;
        let bottomSheetHeight : double = scaffoldGeometry.bottomSheetSize.height;
        let fabHeight : double = scaffoldGeometry.floatingActionButtonSize.height;
        let snackBarHeight : double = scaffoldGeometry.snackBarSize.height;
        let fabY : double = contentBottom - fabHeight - properties.kFloatingActionButtonMargin;
        if (snackBarHeight > 0.0) fabY = math.min(fabY,contentBottom - snackBarHeight - fabHeight - properties.kFloatingActionButtonMargin);
        if (bottomSheetHeight > 0.0) fabY = math.min(fabY,contentBottom - bottomSheetHeight - fabHeight / 2.0);
        return Offset(fabX,fabY);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'FloatingActionButtonLocation.centerFloat';
    }
}

export namespace _EndFloatFloatingActionButtonLocation {
    export type Constructors = FloatingActionButtonLocation.Constructors | '_EndFloatFloatingActionButtonLocation';
    export type Interface = Omit<_EndFloatFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _EndFloatFloatingActionButtonLocation extends FloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _EndFloatFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any {
        let fabX : double = _endOffset(scaffoldGeometry);
        let contentBottom : double = scaffoldGeometry.contentBottom;
        let bottomSheetHeight : double = scaffoldGeometry.bottomSheetSize.height;
        let fabHeight : double = scaffoldGeometry.floatingActionButtonSize.height;
        let snackBarHeight : double = scaffoldGeometry.snackBarSize.height;
        let fabY : double = contentBottom - fabHeight - properties.kFloatingActionButtonMargin;
        if (snackBarHeight > 0.0) fabY = math.min(fabY,contentBottom - snackBarHeight - fabHeight - properties.kFloatingActionButtonMargin);
        if (bottomSheetHeight > 0.0) fabY = math.min(fabY,contentBottom - bottomSheetHeight - fabHeight / 2.0);
        return Offset(fabX,fabY);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'FloatingActionButtonLocation.endFloat';
    }
}

export namespace _DockedFloatingActionButtonLocation {
    export type Constructors = FloatingActionButtonLocation.Constructors | '_DockedFloatingActionButtonLocation';
    export type Interface = Omit<_DockedFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _DockedFloatingActionButtonLocation extends FloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DockedFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    getDockedY(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : double {
        let contentBottom : double = scaffoldGeometry.contentBottom;
        let bottomSheetHeight : double = scaffoldGeometry.bottomSheetSize.height;
        let fabHeight : double = scaffoldGeometry.floatingActionButtonSize.height;
        let snackBarHeight : double = scaffoldGeometry.snackBarSize.height;
        let fabY : double = contentBottom - fabHeight / 2.0;
        if (snackBarHeight > 0.0) fabY = math.min(fabY,contentBottom - snackBarHeight - fabHeight - properties.kFloatingActionButtonMargin);
        if (bottomSheetHeight > 0.0) fabY = math.min(fabY,contentBottom - bottomSheetHeight - fabHeight / 2.0);
        let maxFabY : double = op(Op.MINUS,scaffoldGeometry.scaffoldSize.height,fabHeight);
        return math.min(maxFabY,fabY);
    }
}

export namespace _StartTopFloatingActionButtonLocation {
    export type Constructors = FloatingActionButtonLocation.Constructors | '_StartTopFloatingActionButtonLocation';
    export type Interface = Omit<_StartTopFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _StartTopFloatingActionButtonLocation extends FloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StartTopFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any {
        return Offset(_startOffset(scaffoldGeometry),_straddleAppBar(scaffoldGeometry));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'FloatingActionButtonLocation.startTop';
    }
}

export namespace _MiniStartTopFloatingActionButtonLocation {
    export type Constructors = FloatingActionButtonLocation.Constructors | '_MiniStartTopFloatingActionButtonLocation';
    export type Interface = Omit<_MiniStartTopFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _MiniStartTopFloatingActionButtonLocation extends FloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MiniStartTopFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any {
        return Offset(_startOffset(scaffoldGeometry,{
            offset : 4.0}),_straddleAppBar(scaffoldGeometry));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'FloatingActionButtonLocation.miniStartTop';
    }
}

export namespace _EndTopFloatingActionButtonLocation {
    export type Constructors = FloatingActionButtonLocation.Constructors | '_EndTopFloatingActionButtonLocation';
    export type Interface = Omit<_EndTopFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _EndTopFloatingActionButtonLocation extends FloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _EndTopFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any {
        return Offset(_endOffset(scaffoldGeometry),_straddleAppBar(scaffoldGeometry));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'FloatingActionButtonLocation.endTop';
    }
}

export namespace _ScalingFabMotionAnimator {
    export type Constructors = FloatingActionButtonAnimator.Constructors | '_ScalingFabMotionAnimator';
    export type Interface = Omit<_ScalingFabMotionAnimator, Constructors>;
}
@DartClass
export class _ScalingFabMotionAnimator extends FloatingActionButtonAnimator {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ScalingFabMotionAnimator() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(_namedArguments? : {begin? : any,end? : any,progress? : double}) : any {
        let {begin,end,progress} = Object.assign({
        }, _namedArguments );
        if (progress < 0.5) {
            return begin;
        }else {
            return end;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getScaleAnimation(_namedArguments? : {parent? : lib5.Animation<double>}) : lib5.Animation<double> {
        let {parent} = Object.assign({
        }, _namedArguments );
        let curve : lib6.Curve = lib6.Interval(0.5,1.0,{
            curve : lib6.Curves.ease});
        return _AnimationSwap(lib8.ReverseAnimation(parent.drive(lib7.CurveTween({
            curve : curve.flipped}))),parent.drive(lib7.CurveTween({
            curve : curve})),parent,0.5);
    }
    private static __$_rotationTween : lib7.Animatable<double>;
    static get _rotationTween() : lib7.Animatable<double> { 
        if (this.__$_rotationTween===undefined) {
            this.__$_rotationTween = lib7.Tween({
                begin : 1.0 - properties.kFloatingActionButtonTurnInterval * 2.0,end : 1.0});
        }
        return this.__$_rotationTween;
    }
    static set _rotationTween(__$value : lib7.Animatable<double>)  { 
        this.__$_rotationTween = __$value;
    }

    private static __$_thresholdCenterTween : lib7.Animatable<double>;
    static get _thresholdCenterTween() : lib7.Animatable<double> { 
        if (this.__$_thresholdCenterTween===undefined) {
            this.__$_thresholdCenterTween = lib7.CurveTween({
                curve : new lib6.Threshold(0.5)});
        }
        return this.__$_thresholdCenterTween;
    }
    static set _thresholdCenterTween(__$value : lib7.Animatable<double>)  { 
        this.__$_thresholdCenterTween = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getRotationAnimation(_namedArguments? : {parent? : lib5.Animation<double>}) : lib5.Animation<double> {
        let {parent} = Object.assign({
        }, _namedArguments );
        return _AnimationSwap(parent.drive(_ScalingFabMotionAnimator._rotationTween),lib8.ReverseAnimation(parent.drive(_ScalingFabMotionAnimator._thresholdCenterTween)),parent,0.5);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAnimationRestart(previousValue : double) : double {
        return math.min(1.0 - previousValue,previousValue);
    }
}

export namespace _EndDockedFloatingActionButtonLocation {
    export type Constructors = _DockedFloatingActionButtonLocation.Constructors | '_EndDockedFloatingActionButtonLocation';
    export type Interface = Omit<_EndDockedFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _EndDockedFloatingActionButtonLocation extends _DockedFloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _EndDockedFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any {
        let fabX : double = _endOffset(scaffoldGeometry);
        return Offset(fabX,this.getDockedY(scaffoldGeometry));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'FloatingActionButtonLocation.endDocked';
    }
}

export namespace _CenterDockedFloatingActionButtonLocation {
    export type Constructors = _DockedFloatingActionButtonLocation.Constructors | '_CenterDockedFloatingActionButtonLocation';
    export type Interface = Omit<_CenterDockedFloatingActionButtonLocation, Constructors>;
}
@DartClass
export class _CenterDockedFloatingActionButtonLocation extends _DockedFloatingActionButtonLocation {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CenterDockedFloatingActionButtonLocation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffset(scaffoldGeometry : lib3.ScaffoldPrelayoutGeometry) : any {
        let fabX : double = op(Op.DIVIDE,(op(Op.MINUS,scaffoldGeometry.scaffoldSize.width,scaffoldGeometry.floatingActionButtonSize.width)),2.0);
        return Offset(fabX,this.getDockedY(scaffoldGeometry));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'FloatingActionButtonLocation.centerDocked';
    }
}

export class properties {
    private static __$kFloatingActionButtonMargin : double;
    static get kFloatingActionButtonMargin() : double { 
        if (this.__$kFloatingActionButtonMargin===undefined) {
            this.__$kFloatingActionButtonMargin = 16.0;
        }
        return this.__$kFloatingActionButtonMargin;
    }
    static set kFloatingActionButtonMargin(__$value : double)  { 
        this.__$kFloatingActionButtonMargin = __$value;
    }

    private static __$kFloatingActionButtonSegue : core.DartDuration;
    static get kFloatingActionButtonSegue() : core.DartDuration { 
        if (this.__$kFloatingActionButtonSegue===undefined) {
            this.__$kFloatingActionButtonSegue = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$kFloatingActionButtonSegue;
    }
    static set kFloatingActionButtonSegue(__$value : core.DartDuration)  { 
        this.__$kFloatingActionButtonSegue = __$value;
    }

    private static __$kFloatingActionButtonTurnInterval : double;
    static get kFloatingActionButtonTurnInterval() : double { 
        if (this.__$kFloatingActionButtonTurnInterval===undefined) {
            this.__$kFloatingActionButtonTurnInterval = 0.125;
        }
        return this.__$kFloatingActionButtonTurnInterval;
    }
    static set kFloatingActionButtonTurnInterval(__$value : double)  { 
        this.__$kFloatingActionButtonTurnInterval = __$value;
    }

}
