/** Library asset:datahedgehog_monitor/lib/lib/widgets/implicit_animations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib9 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib11 from "./framework";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/image";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/tweens";
import * as lib22 from "./container";
import * as lib23 from "./basic";
import * as lib24 from "./transitions";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib26 from "./text";

export namespace BoxConstraintsTween {
    export type Constructors = lib3.Tween.Constructors | 'BoxConstraintsTween';
    export type Interface = Omit<BoxConstraintsTween, Constructors>;
}
@DartClass
export class BoxConstraintsTween extends lib3.Tween<lib4.BoxConstraints> {
    constructor(_namedArguments? : {begin? : lib4.BoxConstraints,end? : lib4.BoxConstraints}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoxConstraintsTween(_namedArguments? : {begin? : lib4.BoxConstraints,end? : lib4.BoxConstraints}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib4.BoxConstraints {
        return lib4.BoxConstraints.lerp(this.begin,this.end,t);
    }
}

export namespace DecorationTween {
    export type Constructors = lib3.Tween.Constructors | 'DecorationTween';
    export type Interface = Omit<DecorationTween, Constructors>;
}
@DartClass
export class DecorationTween extends lib3.Tween<lib5.Decoration> {
    constructor(_namedArguments? : {begin? : lib5.Decoration,end? : lib5.Decoration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DecorationTween(_namedArguments? : {begin? : lib5.Decoration,end? : lib5.Decoration}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib5.Decoration {
        return lib5.Decoration.lerp(this.begin,this.end,t);
    }
}

export namespace EdgeInsetsTween {
    export type Constructors = lib3.Tween.Constructors | 'EdgeInsetsTween';
    export type Interface = Omit<EdgeInsetsTween, Constructors>;
}
@DartClass
export class EdgeInsetsTween extends lib3.Tween<lib6.EdgeInsets> {
    constructor(_namedArguments? : {begin? : lib6.EdgeInsets,end? : lib6.EdgeInsets}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EdgeInsetsTween(_namedArguments? : {begin? : lib6.EdgeInsets,end? : lib6.EdgeInsets}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib6.EdgeInsets {
        return lib6.EdgeInsets.lerp(this.begin,this.end,t);
    }
}

export namespace EdgeInsetsGeometryTween {
    export type Constructors = lib3.Tween.Constructors | 'EdgeInsetsGeometryTween';
    export type Interface = Omit<EdgeInsetsGeometryTween, Constructors>;
}
@DartClass
export class EdgeInsetsGeometryTween extends lib3.Tween<lib6.EdgeInsetsGeometry> {
    constructor(_namedArguments? : {begin? : lib6.EdgeInsetsGeometry,end? : lib6.EdgeInsetsGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EdgeInsetsGeometryTween(_namedArguments? : {begin? : lib6.EdgeInsetsGeometry,end? : lib6.EdgeInsetsGeometry}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib6.EdgeInsetsGeometry {
        return lib6.EdgeInsetsGeometry.lerp(this.begin,this.end,t);
    }
}

export namespace BorderRadiusTween {
    export type Constructors = lib3.Tween.Constructors | 'BorderRadiusTween';
    export type Interface = Omit<BorderRadiusTween, Constructors>;
}
@DartClass
export class BorderRadiusTween extends lib3.Tween<lib7.BorderRadius> {
    constructor(_namedArguments? : {begin? : lib7.BorderRadius,end? : lib7.BorderRadius}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BorderRadiusTween(_namedArguments? : {begin? : lib7.BorderRadius,end? : lib7.BorderRadius}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib7.BorderRadius {
        return lib7.BorderRadius.lerp(this.begin,this.end,t);
    }
}

export namespace BorderTween {
    export type Constructors = lib3.Tween.Constructors | 'BorderTween';
    export type Interface = Omit<BorderTween, Constructors>;
}
@DartClass
export class BorderTween extends lib3.Tween<lib8.Border> {
    constructor(_namedArguments? : {begin? : lib8.Border,end? : lib8.Border}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BorderTween(_namedArguments? : {begin? : lib8.Border,end? : lib8.Border}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib8.Border {
        return lib8.Border.lerp(this.begin,this.end,t);
    }
}

export namespace Matrix4Tween {
    export type Constructors = lib3.Tween.Constructors | 'Matrix4Tween';
    export type Interface = Omit<Matrix4Tween, Constructors>;
}
@DartClass
export class Matrix4Tween extends lib3.Tween<lib9.Matrix4> {
    constructor(_namedArguments? : {begin? : lib9.Matrix4,end? : lib9.Matrix4}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Matrix4Tween(_namedArguments? : {begin? : lib9.Matrix4,end? : lib9.Matrix4}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib9.Matrix4 {
        /* TODO (AssertStatementImpl) : assert (begin != null); */;
        /* TODO (AssertStatementImpl) : assert (end != null); */;
        let beginTranslation : lib9.Vector3 = lib9.Vector3.zero();
        let endTranslation : lib9.Vector3 = lib9.Vector3.zero();
        let beginRotation : lib9.Quaternion = lib9.Quaternion.identity();
        let endRotation : lib9.Quaternion = lib9.Quaternion.identity();
        let beginScale : lib9.Vector3 = lib9.Vector3.zero();
        let endScale : lib9.Vector3 = lib9.Vector3.zero();
        this.begin.decompose(beginTranslation,beginRotation,beginScale);
        this.end.decompose(endTranslation,endRotation,endScale);
        let lerpTranslation : lib9.Vector3 = op(Op.PLUS,op(Op.TIMES,beginTranslation,(1.0 - t)),op(Op.TIMES,endTranslation,t));
        let lerpRotation : lib9.Quaternion = (op(Op.PLUS,beginRotation.scaled(1.0 - t),endRotation.scaled(t))).normalized();
        let lerpScale : lib9.Vector3 = op(Op.PLUS,op(Op.TIMES,beginScale,(1.0 - t)),op(Op.TIMES,endScale,t));
        return lib9.Matrix4.compose(lerpTranslation,lerpRotation,lerpScale);
    }
}

export namespace TextStyleTween {
    export type Constructors = lib3.Tween.Constructors | 'TextStyleTween';
    export type Interface = Omit<TextStyleTween, Constructors>;
}
@DartClass
export class TextStyleTween extends lib3.Tween<lib10.TextStyle> {
    constructor(_namedArguments? : {begin? : lib10.TextStyle,end? : lib10.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextStyleTween(_namedArguments? : {begin? : lib10.TextStyle,end? : lib10.TextStyle}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib10.TextStyle {
        return lib10.TextStyle.lerp(this.begin,this.end,t);
    }
}

export namespace ImplicitlyAnimatedWidget {
    export type Constructors = lib11.StatefulWidget.Constructors | 'ImplicitlyAnimatedWidget';
    export type Interface = Omit<ImplicitlyAnimatedWidget, Constructors>;
}
@DartClass
export class ImplicitlyAnimatedWidget extends lib11.StatefulWidget {
    constructor(_namedArguments? : {key? : lib12.Key,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImplicitlyAnimatedWidget(_namedArguments? : {key? : lib12.Key,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.curve = curve;
        this.duration = duration;
    }
     : any;

     : any;

     : any;

     : any;

    curve : lib13.Curve;

    duration : core.DartDuration;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createState() : ImplicitlyAnimatedWidgetState<ImplicitlyAnimatedWidget>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.IntProperty('duration',this.duration.inMilliseconds,{
            unit : 'ms'}));
    }
}

export namespace ImplicitlyAnimatedWidgetState {
    export type Constructors = 'ImplicitlyAnimatedWidgetState';
    export type Interface<T extends ImplicitlyAnimatedWidget> = Omit<ImplicitlyAnimatedWidgetState<T extends ImplicitlyAnimatedWidget>, Constructors>;
}
@DartClass
@With(any)
export class ImplicitlyAnimatedWidgetState<T extends ImplicitlyAnimatedWidget> extends any implements any.Interface {
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get controller() : lib15.AnimationController {
        return this._controller;
    }
    _controller : lib15.AnimationController;

    get animation() : lib16.Animation<double> {
        return this._animation;
    }
    _animation : lib16.Animation<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib15.AnimationController({
            duration : widget.duration,debugLabel : `${widget.toStringShort()}`,vsync : this});
        this._updateCurve();
        this._constructTweens();
        this.didUpdateTweens();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : T) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.curve != oldWidget.curve) this._updateCurve();
        this._controller.duration = widget.duration;
        if (this._constructTweens()) {
            this.forEachTween((tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) =>  {
                this._updateTween(tween,targetValue);
                return tween;
            });
            ((_) : lib15.AnimationController =>  {
                {
                    _.value = 0.0;
                    forward();
                    return _;
                }
            })(this._controller);
            this.didUpdateTweens();
        }
    }
    _updateCurve() : any {
        if (widget.curve != null) this._animation = lib17.CurvedAnimation({
            parent : this._controller,curve : widget.curve});else this._animation = this._controller;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    _shouldAnimateTween(tween : lib3.Tween<any>,targetValue : any) : boolean {
        return targetValue != ((tween.end || tween.begin));
    }
    _updateTween(tween : lib3.Tween<any>,targetValue : any) : any {
        if (op(Op.EQUALS,tween,null)) return;
        ((_) : lib3.Tween<any> =>  {
            {
                _.begin = tween.evaluate(this._animation);
                _.end = targetValue;
                return _;
            }
        })(tween);
    }
    _constructTweens() : boolean {
        let shouldStartAnimation : boolean = false;
        this.forEachTween((tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) =>  {
            if (targetValue != null) {
                tween = ( tween ) || ( constructor(targetValue) );
                if (this._shouldAnimateTween(tween,targetValue)) shouldStartAnimation = true;
            }else {
                tween = null;
            }
            return tween;
        });
        return shouldStartAnimation;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateTweens() : any {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImplicitlyAnimatedWidgetState() {
    }
}

export namespace AnimatedWidgetBaseState {
    export type Constructors = ImplicitlyAnimatedWidgetState.Constructors | 'AnimatedWidgetBaseState';
    export type Interface<T extends ImplicitlyAnimatedWidget> = Omit<AnimatedWidgetBaseState<T extends ImplicitlyAnimatedWidget>, Constructors>;
}
@DartClass
export class AnimatedWidgetBaseState<T extends ImplicitlyAnimatedWidget> extends ImplicitlyAnimatedWidgetState<T> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.controller.addListener(this._handleAnimationChanged.bind(this));
    }
    _handleAnimationChanged() : any {
        setState(() =>  {
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedWidgetBaseState() {
    }
}

export namespace AnimatedContainer {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedContainer' | 'debugAssertIsValid' | 'debugAssertIsValid';
    export type Interface = Omit<AnimatedContainer, Constructors>;
}
@DartClass
export class AnimatedContainer extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,alignment? : lib18.AlignmentGeometry,padding? : lib6.EdgeInsetsGeometry,color? : any,decoration? : lib5.Decoration,foregroundDecoration? : lib5.Decoration,width? : double,height? : double,constraints? : lib4.BoxConstraints,margin? : lib6.EdgeInsetsGeometry,transform? : lib9.Matrix4,child? : lib11.Widget,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedContainer(_namedArguments? : {key? : lib12.Key,alignment? : lib18.AlignmentGeometry,padding? : lib6.EdgeInsetsGeometry,color? : any,decoration? : lib5.Decoration,foregroundDecoration? : lib5.Decoration,width? : double,height? : double,constraints? : lib4.BoxConstraints,margin? : lib6.EdgeInsetsGeometry,transform? : lib9.Matrix4,child? : lib11.Widget,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,alignment,padding,color,decoration,foregroundDecoration,width,height,constraints,margin,transform,child,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.decoration = (this.decoration || (lib19.properties.color != null ? lib20.BoxDecoration({
            color : lib19.properties.color}) : null));
        this.constraints = (lib19.properties.width != null || lib19.properties.height != null) ? (((_901_)=>(!!_901_)?_901_.tighten({
            width : lib19.properties.width,height : lib19.properties.height}):null)(this.constraints) || lib4.BoxConstraints.tightFor({
            width : lib19.properties.width,height : lib19.properties.height})) : this.constraints;
        this.assert = assert;
        this.alignment = alignment;
        this.padding = padding;
        this.foregroundDecoration = foregroundDecoration;
        this.margin = margin;
        this.transform = transform;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    debugAssertIsValid() {
        this.decoration = (this.decoration || (lib19.properties.color != null ? lib20.BoxDecoration({
            color : lib19.properties.color}) : null));
        this.constraints = (lib19.properties.width != null || lib19.properties.height != null) ? (((_901_)=>(!!_901_)?_901_.tighten({
            width : lib19.properties.width,height : lib19.properties.height}):null)(this.constraints) || lib4.BoxConstraints.tightFor({
            width : lib19.properties.width,height : lib19.properties.height})) : this.constraints;
    }
    static debugAssertIsValid : new() => AnimatedContainer;

     : any;

    @namedConstructor
    debugAssertIsValid() {
        this.decoration = (this.decoration || (lib19.properties.color != null ? lib20.BoxDecoration({
            color : lib19.properties.color}) : null));
        this.constraints = (lib19.properties.width != null || lib19.properties.height != null) ? (((_901_)=>(!!_901_)?_901_.tighten({
            width : lib19.properties.width,height : lib19.properties.height}):null)(this.constraints) || lib4.BoxConstraints.tightFor({
            width : lib19.properties.width,height : lib19.properties.height})) : this.constraints;
    }
    static debugAssertIsValid : new() => AnimatedContainer;

     : any;

     : any;

    decoration;
    constraints;
    super;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    child : lib11.Widget;

    alignment : lib18.AlignmentGeometry;

    padding : lib6.EdgeInsetsGeometry;

    decoration : lib5.Decoration;

    foregroundDecoration : lib5.Decoration;

    constraints : lib4.BoxConstraints;

    margin : lib6.EdgeInsetsGeometry;

    transform : lib9.Matrix4;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedContainerState {
        return _AnimatedContainerState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DiagnosticsProperty('alignment',this.alignment,{
            showName : false,defaultValue : null}));
        properties.add(lib14.DiagnosticsProperty('padding',this.padding,{
            defaultValue : null}));
        properties.add(lib14.DiagnosticsProperty('bg',this.decoration,{
            defaultValue : null}));
        properties.add(lib14.DiagnosticsProperty('fg',this.foregroundDecoration,{
            defaultValue : null}));
        properties.add(lib14.DiagnosticsProperty('constraints',this.constraints,{
            defaultValue : null,showName : false}));
        properties.add(lib14.DiagnosticsProperty('margin',this.margin,{
            defaultValue : null}));
        op(Op.GT,properties.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib9.Matrix4)),.has('transform',this.transform));
    }
}

export namespace AnimatedPadding {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedPadding';
    export type Interface = Omit<AnimatedPadding, Constructors>;
}
@DartClass
export class AnimatedPadding extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,padding? : lib6.EdgeInsetsGeometry,child? : lib11.Widget,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedPadding(_namedArguments? : {key? : lib12.Key,padding? : lib6.EdgeInsetsGeometry,child? : lib11.Widget,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,padding,child,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.padding = padding;
        this.child = child;
    }
     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    padding : lib6.EdgeInsetsGeometry;

    child : lib11.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedPaddingState {
        return _AnimatedPaddingState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DiagnosticsProperty('padding',this.padding));
    }
}

export namespace AnimatedAlign {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedAlign';
    export type Interface = Omit<AnimatedAlign, Constructors>;
}
@DartClass
export class AnimatedAlign extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,alignment? : lib18.AlignmentGeometry,child? : lib11.Widget,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedAlign(_namedArguments? : {key? : lib12.Key,alignment? : lib18.AlignmentGeometry,child? : lib11.Widget,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,alignment,child,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.alignment = alignment;
        this.child = child;
    }
     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    alignment : lib18.AlignmentGeometry;

    child : lib11.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedAlignState {
        return _AnimatedAlignState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DiagnosticsProperty('alignment',this.alignment));
    }
}

export namespace AnimatedPositioned {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedPositioned' | 'fromRect';
    export type Interface = Omit<AnimatedPositioned, Constructors>;
}
@DartClass
export class AnimatedPositioned extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,left? : double,top? : double,right? : double,bottom? : double,width? : double,height? : double,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedPositioned(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,left? : double,top? : double,right? : double,bottom? : double,width? : double,height? : double,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,child,left,top,right,bottom,width,height,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.width = width;
        this.height = height;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    @namedConstructor
    fromRect(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,rect? : any,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,child,rect,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.left = rect.left;
        this.top = rect.top;
        this.width = rect.width;
        this.height = rect.height;
        this.right = null;
        this.bottom = null;
        super.ImplicitlyAnimatedWidget({
            key : key,curve : curve,duration : duration});
        this.child = child;
    }
    static fromRect : new(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,rect? : any,curve? : lib13.Curve,duration? : core.DartDuration}) => AnimatedPositioned;

    child : lib11.Widget;

    left : double;

    top : double;

    right : double;

    bottom : double;

    width : double;

    height : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedPositionedState {
        return _AnimatedPositionedState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DoubleProperty('left',this.left,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('top',this.top,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('right',this.right,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('bottom',this.bottom,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('width',this.width,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('height',this.height,{
            defaultValue : null}));
    }
}

export namespace AnimatedPositionedDirectional {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedPositionedDirectional';
    export type Interface = Omit<AnimatedPositionedDirectional, Constructors>;
}
@DartClass
export class AnimatedPositionedDirectional extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,start? : double,top? : double,end? : double,bottom? : double,width? : double,height? : double,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedPositionedDirectional(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,start? : double,top? : double,end? : double,bottom? : double,width? : double,height? : double,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,child,start,top,end,bottom,width,height,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.start = start;
        this.top = top;
        this.end = end;
        this.bottom = bottom;
        this.width = width;
        this.height = height;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    child : lib11.Widget;

    start : double;

    top : double;

    end : double;

    bottom : double;

    width : double;

    height : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedPositionedDirectionalState {
        return _AnimatedPositionedDirectionalState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DoubleProperty('start',this.start,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('top',this.top,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('end',this.end,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('bottom',this.bottom,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('width',this.width,{
            defaultValue : null}));
        properties.add(lib14.DoubleProperty('height',this.height,{
            defaultValue : null}));
    }
}

export namespace AnimatedOpacity {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedOpacity';
    export type Interface = Omit<AnimatedOpacity, Constructors>;
}
@DartClass
export class AnimatedOpacity extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,opacity? : double,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedOpacity(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,opacity? : double,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,child,opacity,curve,duration} = Object.assign({
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.opacity = opacity;
    }
     : any;

     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    child : lib11.Widget;

    opacity : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedOpacityState {
        return _AnimatedOpacityState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DoubleProperty('opacity',this.opacity));
    }
}

export namespace _AnimatedOpacityState {
    export type Constructors = ImplicitlyAnimatedWidgetState.Constructors | '_AnimatedOpacityState';
    export type Interface = Omit<_AnimatedOpacityState, Constructors>;
}
@DartClass
export class _AnimatedOpacityState extends ImplicitlyAnimatedWidgetState<AnimatedOpacity> {
    _opacity : lib3.Tween<double>;

    _opacityAnimation : lib16.Animation<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._opacity = visitor(this._opacity,widget.opacity,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateTweens() : any {
        this._opacityAnimation = this.animation.drive(this._opacity);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        return lib24.FadeTransition({
            opacity : this._opacityAnimation,child : widget.child});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedOpacityState() {
    }
}

export namespace AnimatedDefaultTextStyle {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedDefaultTextStyle';
    export type Interface = Omit<AnimatedDefaultTextStyle, Constructors>;
}
@DartClass
export class AnimatedDefaultTextStyle extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,style? : lib10.TextStyle,textAlign? : any,softWrap? : boolean,overflow? : lib25.TextOverflow,maxLines? : number,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedDefaultTextStyle(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,style? : lib10.TextStyle,textAlign? : any,softWrap? : boolean,overflow? : lib25.TextOverflow,maxLines? : number,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,child,style,textAlign,softWrap,overflow,maxLines,curve,duration} = Object.assign({
            "softWrap" : true,
            "overflow" : lib25.TextOverflow.clip,
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.style = style;
        this.textAlign = textAlign;
        this.softWrap = softWrap;
        this.overflow = overflow;
        this.maxLines = maxLines;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    child : lib11.Widget;

    style : lib10.TextStyle;

    textAlign : any;

    softWrap : boolean;

    overflow : lib25.TextOverflow;

    maxLines : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedDefaultTextStyleState {
        return _AnimatedDefaultTextStyleState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        ((_921_)=>(!!_921_)?_921_.debugFillProperties(properties):null)(this.style);
        properties.add(lib14.EnumProperty('textAlign',this.textAlign,{
            defaultValue : null}));
        properties.add(lib14.FlagProperty('softWrap',{
            value : this.softWrap,ifTrue : 'wrapping at box width',ifFalse : 'no wrapping except at line break characters',showName : true}));
        properties.add(lib14.EnumProperty('overflow',this.overflow,{
            defaultValue : null}));
        properties.add(lib14.IntProperty('maxLines',this.maxLines,{
            defaultValue : null}));
    }
}

export namespace AnimatedPhysicalModel {
    export type Constructors = ImplicitlyAnimatedWidget.Constructors | 'AnimatedPhysicalModel';
    export type Interface = Omit<AnimatedPhysicalModel, Constructors>;
}
@DartClass
export class AnimatedPhysicalModel extends ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,shape? : lib8.BoxShape,clipBehavior? : any,borderRadius? : lib7.BorderRadius,elevation? : double,color? : any,animateColor? : boolean,shadowColor? : any,animateShadowColor? : boolean,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedPhysicalModel(_namedArguments? : {key? : lib12.Key,child? : lib11.Widget,shape? : lib8.BoxShape,clipBehavior? : any,borderRadius? : lib7.BorderRadius,elevation? : double,color? : any,animateColor? : boolean,shadowColor? : any,animateShadowColor? : boolean,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,child,shape,clipBehavior,borderRadius,elevation,color,animateColor,shadowColor,animateShadowColor,curve,duration} = Object.assign({
            "clipBehavior" : Clip.none,
            "borderRadius" : lib7.BorderRadius.zero,
            "animateColor" : true,
            "animateShadowColor" : true,
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.borderRadius = borderRadius;
        this.elevation = elevation;
        this.color = color;
        this.animateColor = animateColor;
        this.shadowColor = shadowColor;
        this.animateShadowColor = animateShadowColor;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    child : lib11.Widget;

    shape : lib8.BoxShape;

    clipBehavior : any;

    borderRadius : lib7.BorderRadius;

    elevation : double;

    color : any;

    animateColor : boolean;

    shadowColor : any;

    animateShadowColor : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedPhysicalModelState {
        return _AnimatedPhysicalModelState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.EnumProperty('shape',this.shape));
        properties.add(lib14.DiagnosticsProperty('borderRadius',this.borderRadius));
        properties.add(lib14.DoubleProperty('elevation',this.elevation));
        properties.add(lib14.DiagnosticsProperty('color',this.color));
        properties.add(lib14.DiagnosticsProperty('animateColor',this.animateColor));
        properties.add(lib14.DiagnosticsProperty('shadowColor',this.shadowColor));
        properties.add(lib14.DiagnosticsProperty('animateShadowColor',this.animateShadowColor));
    }
}

export namespace _AnimatedContainerState {
    export type Constructors = AnimatedWidgetBaseState.Constructors | '_AnimatedContainerState';
    export type Interface = Omit<_AnimatedContainerState, Constructors>;
}
@DartClass
export class _AnimatedContainerState extends AnimatedWidgetBaseState<AnimatedContainer> {
    _alignment : lib21.AlignmentGeometryTween;

    _padding : EdgeInsetsGeometryTween;

    _decoration : DecorationTween;

    _foregroundDecoration : DecorationTween;

    _constraints : BoxConstraintsTween;

    _margin : EdgeInsetsGeometryTween;

    _transform : Matrix4Tween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._alignment = visitor(this._alignment,widget.alignment,(value : any) =>  {
            return lib21.AlignmentGeometryTween({
                begin : value});
        });
        this._padding = visitor(this._padding,widget.padding,(value : any) =>  {
            return EdgeInsetsGeometryTween({
                begin : value});
        });
        this._decoration = visitor(this._decoration,widget.decoration,(value : any) =>  {
            return DecorationTween({
                begin : value});
        });
        this._foregroundDecoration = visitor(this._foregroundDecoration,widget.foregroundDecoration,(value : any) =>  {
            return DecorationTween({
                begin : value});
        });
        this._constraints = visitor(this._constraints,widget.constraints,(value : any) =>  {
            return BoxConstraintsTween({
                begin : value});
        });
        this._margin = visitor(this._margin,widget.margin,(value : any) =>  {
            return EdgeInsetsGeometryTween({
                begin : value});
        });
        this._transform = visitor(this._transform,widget.transform,(value : any) =>  {
            return Matrix4Tween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        return lib22.Container({
            child : widget.child,alignment : ((_902_)=>(!!_902_)?_902_.evaluate(this.animation):null)(this._alignment),padding : ((_903_)=>(!!_903_)?_903_.evaluate(this.animation):null)(this._padding),decoration : ((_904_)=>(!!_904_)?_904_.evaluate(this.animation):null)(this._decoration),foregroundDecoration : ((_905_)=>(!!_905_)?_905_.evaluate(this.animation):null)(this._foregroundDecoration),constraints : ((_906_)=>(!!_906_)?_906_.evaluate(this.animation):null)(this._constraints),margin : ((_907_)=>(!!_907_)?_907_.evaluate(this.animation):null)(this._margin),transform : ((_908_)=>(!!_908_)?_908_.evaluate(this.animation):null)(this._transform)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib14.DiagnosticsProperty('alignment',this._alignment,{
            showName : false,defaultValue : null}));
        description.add(lib14.DiagnosticsProperty('padding',this._padding,{
            defaultValue : null}));
        description.add(lib14.DiagnosticsProperty('bg',this._decoration,{
            defaultValue : null}));
        description.add(lib14.DiagnosticsProperty('fg',this._foregroundDecoration,{
            defaultValue : null}));
        description.add(lib14.DiagnosticsProperty('constraints',this._constraints,{
            showName : false,defaultValue : null}));
        description.add(lib14.DiagnosticsProperty('margin',this._margin,{
            defaultValue : null}));
        op(Op.GT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,Matrix4Tween)),.has('transform',this._transform));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedContainerState() {
    }
}

export namespace _AnimatedPaddingState {
    export type Constructors = AnimatedWidgetBaseState.Constructors | '_AnimatedPaddingState';
    export type Interface = Omit<_AnimatedPaddingState, Constructors>;
}
@DartClass
export class _AnimatedPaddingState extends AnimatedWidgetBaseState<AnimatedPadding> {
    _padding : EdgeInsetsGeometryTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._padding = visitor(this._padding,widget.padding,(value : any) =>  {
            return EdgeInsetsGeometryTween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        return lib23.Padding({
            padding : this._padding.evaluate(this.animation),child : widget.child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib14.DiagnosticsProperty('padding',this._padding,{
            defaultValue : null}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedPaddingState() {
    }
}

export namespace _AnimatedAlignState {
    export type Constructors = AnimatedWidgetBaseState.Constructors | '_AnimatedAlignState';
    export type Interface = Omit<_AnimatedAlignState, Constructors>;
}
@DartClass
export class _AnimatedAlignState extends AnimatedWidgetBaseState<AnimatedAlign> {
    _alignment : lib21.AlignmentGeometryTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._alignment = visitor(this._alignment,widget.alignment,(value : any) =>  {
            return lib21.AlignmentGeometryTween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        return lib23.Align({
            alignment : this._alignment.evaluate(this.animation),child : widget.child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib14.DiagnosticsProperty('alignment',this._alignment,{
            defaultValue : null}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedAlignState() {
    }
}

export namespace _AnimatedPositionedState {
    export type Constructors = AnimatedWidgetBaseState.Constructors | '_AnimatedPositionedState';
    export type Interface = Omit<_AnimatedPositionedState, Constructors>;
}
@DartClass
export class _AnimatedPositionedState extends AnimatedWidgetBaseState<AnimatedPositioned> {
    _left : lib3.Tween<double>;

    _top : lib3.Tween<double>;

    _right : lib3.Tween<double>;

    _bottom : lib3.Tween<double>;

    _width : lib3.Tween<double>;

    _height : lib3.Tween<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._left = visitor(this._left,widget.left,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._top = visitor(this._top,widget.top,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._right = visitor(this._right,widget.right,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._bottom = visitor(this._bottom,widget.bottom,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._width = visitor(this._width,widget.width,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._height = visitor(this._height,widget.height,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        return lib23.Positioned({
            child : widget.child,left : ((_909_)=>(!!_909_)?_909_.evaluate(this.animation):null)(this._left),top : ((_910_)=>(!!_910_)?_910_.evaluate(this.animation):null)(this._top),right : ((_911_)=>(!!_911_)?_911_.evaluate(this.animation):null)(this._right),bottom : ((_912_)=>(!!_912_)?_912_.evaluate(this.animation):null)(this._bottom),width : ((_913_)=>(!!_913_)?_913_.evaluate(this.animation):null)(this._width),height : ((_914_)=>(!!_914_)?_914_.evaluate(this.animation):null)(this._height)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('left',this._left)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('top',this._top)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('right',this._right)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('bottom',this._bottom)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('width',this._width)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('height',this._height)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedPositionedState() {
    }
}

export namespace _AnimatedPositionedDirectionalState {
    export type Constructors = AnimatedWidgetBaseState.Constructors | '_AnimatedPositionedDirectionalState';
    export type Interface = Omit<_AnimatedPositionedDirectionalState, Constructors>;
}
@DartClass
export class _AnimatedPositionedDirectionalState extends AnimatedWidgetBaseState<AnimatedPositionedDirectional> {
    _start : lib3.Tween<double>;

    _top : lib3.Tween<double>;

    _end : lib3.Tween<double>;

    _bottom : lib3.Tween<double>;

    _width : lib3.Tween<double>;

    _height : lib3.Tween<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._start = visitor(this._start,widget.start,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._top = visitor(this._top,widget.top,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._end = visitor(this._end,widget.end,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._bottom = visitor(this._bottom,widget.bottom,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._width = visitor(this._width,widget.width,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._height = visitor(this._height,widget.height,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        return lib23.Positioned.directional({
            textDirection : lib23.Directionality.of(context),child : widget.child,start : ((_915_)=>(!!_915_)?_915_.evaluate(this.animation):null)(this._start),top : ((_916_)=>(!!_916_)?_916_.evaluate(this.animation):null)(this._top),end : ((_917_)=>(!!_917_)?_917_.evaluate(this.animation):null)(this._end),bottom : ((_918_)=>(!!_918_)?_918_.evaluate(this.animation):null)(this._bottom),width : ((_919_)=>(!!_919_)?_919_.evaluate(this.animation):null)(this._width),height : ((_920_)=>(!!_920_)?_920_.evaluate(this.animation):null)(this._height)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('start',this._start)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('top',this._top)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('end',this._end)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('bottom',this._bottom)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('width',this._width)));
        op(Op.LT,description.add(op(Op.LT,lib14.ObjectFlagProperty<T>,lib3.Tween<T>)),op(Op.SHIFTRIGHT,double,.has('height',this._height)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedPositionedDirectionalState() {
    }
}

export namespace _AnimatedDefaultTextStyleState {
    export type Constructors = AnimatedWidgetBaseState.Constructors | '_AnimatedDefaultTextStyleState';
    export type Interface = Omit<_AnimatedDefaultTextStyleState, Constructors>;
}
@DartClass
export class _AnimatedDefaultTextStyleState extends AnimatedWidgetBaseState<AnimatedDefaultTextStyle> {
    _style : TextStyleTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._style = visitor(this._style,widget.style,(value : any) =>  {
            return TextStyleTween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        return lib26.DefaultTextStyle({
            style : this._style.evaluate(this.animation),textAlign : widget.textAlign,softWrap : widget.softWrap,overflow : widget.overflow,maxLines : widget.maxLines,child : widget.child});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedDefaultTextStyleState() {
    }
}

export namespace _AnimatedPhysicalModelState {
    export type Constructors = AnimatedWidgetBaseState.Constructors | '_AnimatedPhysicalModelState';
    export type Interface = Omit<_AnimatedPhysicalModelState, Constructors>;
}
@DartClass
export class _AnimatedPhysicalModelState extends AnimatedWidgetBaseState<AnimatedPhysicalModel> {
    _borderRadius : BorderRadiusTween;

    _elevation : lib3.Tween<double>;

    _color : lib3.ColorTween;

    _shadowColor : lib3.ColorTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib3.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib3.Tween<any>) => lib3.Tween<any>) : any {
        this._borderRadius = visitor(this._borderRadius,widget.borderRadius,(value : any) =>  {
            return BorderRadiusTween({
                begin : value});
        });
        this._elevation = visitor(this._elevation,widget.elevation,(value : any) =>  {
            return lib3.Tween({
                begin : value});
        });
        this._color = visitor(this._color,widget.color,(value : any) =>  {
            return lib3.ColorTween({
                begin : value});
        });
        this._shadowColor = visitor(this._shadowColor,widget.shadowColor,(value : any) =>  {
            return lib3.ColorTween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib11.BuildContext) : lib11.Widget {
        return lib23.PhysicalModel({
            child : widget.child,shape : widget.shape,clipBehavior : widget.clipBehavior,borderRadius : this._borderRadius.evaluate(this.animation),elevation : this._elevation.evaluate(this.animation),color : widget.animateColor ? this._color.evaluate(this.animation) : widget.color,shadowColor : widget.animateShadowColor ? this._shadowColor.evaluate(this.animation) : widget.shadowColor});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedPhysicalModelState() {
    }
}

export class properties {
}
