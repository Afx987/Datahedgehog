/** Library asset:datahedgehog_monitor/lib/lib/widgets/transitions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib8 from "./basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib10 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as math from "@dart2ts/dart/math";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib16 from "./container";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib18 from "./text";

export namespace AnimatedWidget {
    export type Constructors = lib3.StatefulWidget.Constructors | 'AnimatedWidget';
    export type Interface = Omit<AnimatedWidget, Constructors>;
}
@DartClass
export class AnimatedWidget extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,listenable? : lib5.Listenable}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedWidget(_namedArguments? : {key? : lib4.Key,listenable? : lib5.Listenable}) {
        let {key,listenable} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.listenable = listenable;
    }
     : any;

     : any;

     : any;

    listenable : lib5.Listenable;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    build(context : lib3.BuildContext) : lib3.Widget{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedState {
        return _AnimatedState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.DiagnosticsProperty('animation',this.listenable));
    }
}

export namespace _AnimatedState {
    export type Constructors = lib3.State.Constructors | '_AnimatedState';
    export type Interface = Omit<_AnimatedState, Constructors>;
}
@DartClass
export class _AnimatedState extends lib3.State<AnimatedWidget> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.widget.listenable.addListener(this._handleChange.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : AnimatedWidget) : any {
        super.didUpdateWidget(oldWidget);
        if (this.widget.listenable != oldWidget.listenable) {
            oldWidget.listenable.removeListener(this._handleChange.bind(this));
            this.widget.listenable.addListener(this._handleChange.bind(this));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.widget.listenable.removeListener(this._handleChange.bind(this));
        super.dispose();
    }
    _handleChange() : any {
        this.setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.build(context);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedState() {
    }
}

export namespace FadeTransition {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'FadeTransition';
    export type Interface = Omit<FadeTransition, Constructors>;
}
@DartClass
export class FadeTransition extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,opacity? : lib7.Animation<double>,alwaysIncludeSemantics? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FadeTransition(_namedArguments? : {key? : lib4.Key,opacity? : lib7.Animation<double>,alwaysIncludeSemantics? : boolean,child? : lib3.Widget}) {
        let {key,opacity,alwaysIncludeSemantics,child} = Object.assign({
            "alwaysIncludeSemantics" : false}, _namedArguments );
        this.assert = assert;
        this.opacity = opacity;
        this.alwaysIncludeSemantics = alwaysIncludeSemantics;
    }
     : any;

     : any;

    key;
    child;

     : any;

    opacity : lib7.Animation<double>;

    alwaysIncludeSemantics : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib13.RenderAnimatedOpacity {
        return lib13.RenderAnimatedOpacity({
            opacity : this.opacity,alwaysIncludeSemantics : this.alwaysIncludeSemantics});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib13.RenderAnimatedOpacity) : any {
        ((_) : lib13.RenderAnimatedOpacity =>  {
            {
                _.opacity = this.opacity;
                _.alwaysIncludeSemantics = this.alwaysIncludeSemantics;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.DiagnosticsProperty('opacity',this.opacity));
        properties.add(lib6.FlagProperty('alwaysIncludeSemantics',{
            value : this.alwaysIncludeSemantics,ifTrue : 'alwaysIncludeSemantics'}));
    }
}

export namespace RelativeRectTween {
    export type Constructors = lib14.Tween.Constructors | 'RelativeRectTween';
    export type Interface = Omit<RelativeRectTween, Constructors>;
}
@DartClass
export class RelativeRectTween extends lib14.Tween<lib15.RelativeRect> {
    constructor(_namedArguments? : {begin? : lib15.RelativeRect,end? : lib15.RelativeRect}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RelativeRectTween(_namedArguments? : {begin? : lib15.RelativeRect,end? : lib15.RelativeRect}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib15.RelativeRect {
        return lib15.RelativeRect.lerp(this.begin,this.end,t);
    }
}

export namespace SlideTransition {
    export type Constructors = AnimatedWidget.Constructors | 'SlideTransition';
    export type Interface = Omit<SlideTransition, Constructors>;
}
@DartClass
export class SlideTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,position? : lib7.Animation<any>,transformHitTests? : boolean,textDirection? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SlideTransition(_namedArguments? : {key? : lib4.Key,position? : lib7.Animation<any>,transformHitTests? : boolean,textDirection? : any,child? : lib3.Widget}) {
        let {key,position,transformHitTests,textDirection,child} = Object.assign({
            "transformHitTests" : true}, _namedArguments );
        this.assert = assert;
        this.transformHitTests = transformHitTests;
        this.textDirection = textDirection;
        this.child = child;
    }
     : any;

     : any;

    key;
    listenable;

     : any;

    get position() : lib7.Animation<any> {
        return this.listenable;
    }
    textDirection : any;

    transformHitTests : boolean;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let offset : any = this.position.value;
        if (op(Op.EQUALS,this.textDirection,TextDirection.rtl)) offset = Offset(op(Op.NEG,offset.dx),offset.dy);
        return lib8.FractionalTranslation({
            translation : offset,transformHitTests : this.transformHitTests,child : this.child});
    }
}

export namespace ScaleTransition {
    export type Constructors = AnimatedWidget.Constructors | 'ScaleTransition';
    export type Interface = Omit<ScaleTransition, Constructors>;
}
@DartClass
export class ScaleTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,scale? : lib7.Animation<double>,alignment? : lib9.Alignment,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScaleTransition(_namedArguments? : {key? : lib4.Key,scale? : lib7.Animation<double>,alignment? : lib9.Alignment,child? : lib3.Widget}) {
        let {key,scale,alignment,child} = Object.assign({
            "alignment" : lib9.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.alignment = alignment;
        this.child = child;
    }
     : any;

     : any;

    key;
    listenable;

     : any;

    get scale() : lib7.Animation<double> {
        return this.listenable;
    }
    alignment : lib9.Alignment;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let scaleValue : double = this.scale.value;
        let transform : lib10.Matrix4 = ((_) : any =>  {
            {
                scale(scaleValue,scaleValue,1.0);
                return _;
            }
        })(lib10.Matrix4.identity());
        return lib8.Transform({
            transform : transform,alignment : this.alignment,child : this.child});
    }
}

export namespace RotationTransition {
    export type Constructors = AnimatedWidget.Constructors | 'RotationTransition';
    export type Interface = Omit<RotationTransition, Constructors>;
}
@DartClass
export class RotationTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,turns? : lib7.Animation<double>,alignment? : lib9.Alignment,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RotationTransition(_namedArguments? : {key? : lib4.Key,turns? : lib7.Animation<double>,alignment? : lib9.Alignment,child? : lib3.Widget}) {
        let {key,turns,alignment,child} = Object.assign({
            "alignment" : lib9.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.alignment = alignment;
        this.child = child;
    }
     : any;

     : any;

    key;
    listenable;

     : any;

    get turns() : lib7.Animation<double> {
        return this.listenable;
    }
    alignment : lib9.Alignment;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let turnsValue : double = this.turns.value;
        let transform : lib10.Matrix4 = lib10.Matrix4.rotationZ(turnsValue * math.pi * 2.0);
        return lib8.Transform({
            transform : transform,alignment : this.alignment,child : this.child});
    }
}

export namespace SizeTransition {
    export type Constructors = AnimatedWidget.Constructors | 'SizeTransition';
    export type Interface = Omit<SizeTransition, Constructors>;
}
@DartClass
export class SizeTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,axis? : lib12.Axis,sizeFactor? : lib7.Animation<double>,axisAlignment? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SizeTransition(_namedArguments? : {key? : lib4.Key,axis? : lib12.Axis,sizeFactor? : lib7.Animation<double>,axisAlignment? : double,child? : lib3.Widget}) {
        let {key,axis,sizeFactor,axisAlignment,child} = Object.assign({
            "axis" : lib12.Axis.vertical,
            "axisAlignment" : 0.0}, _namedArguments );
        this.assert = assert;
        this.axis = axis;
        this.axisAlignment = axisAlignment;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    key;
    listenable;

     : any;

    axis : lib12.Axis;

    get sizeFactor() : lib7.Animation<double> {
        return this.listenable;
    }
    axisAlignment : double;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let alignment : lib9.AlignmentDirectional;
        if (op(Op.EQUALS,this.axis,lib12.Axis.vertical)) alignment = lib9.AlignmentDirectional(-1.0,this.axisAlignment);else alignment = lib9.AlignmentDirectional(this.axisAlignment,-1.0);
        return lib8.ClipRect({
            child : lib8.Align({
                alignment : alignment,heightFactor : op(Op.EQUALS,this.axis,lib12.Axis.vertical) ? math.max(this.sizeFactor.value,0.0) : null,widthFactor : op(Op.EQUALS,this.axis,lib12.Axis.horizontal) ? math.max(this.sizeFactor.value,0.0) : null,child : this.child})});
    }
}

export namespace PositionedTransition {
    export type Constructors = AnimatedWidget.Constructors | 'PositionedTransition';
    export type Interface = Omit<PositionedTransition, Constructors>;
}
@DartClass
export class PositionedTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,rect? : lib7.Animation<lib15.RelativeRect>,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PositionedTransition(_namedArguments? : {key? : lib4.Key,rect? : lib7.Animation<lib15.RelativeRect>,child? : lib3.Widget}) {
        let {key,rect,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.child = child;
    }
     : any;

     : any;

    key;
    listenable;

     : any;

    get rect() : lib7.Animation<lib15.RelativeRect> {
        return this.listenable;
    }
    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib8.Positioned.fromRelativeRect({
            rect : this.rect.value,child : this.child});
    }
}

export namespace RelativePositionedTransition {
    export type Constructors = AnimatedWidget.Constructors | 'RelativePositionedTransition';
    export type Interface = Omit<RelativePositionedTransition, Constructors>;
}
@DartClass
export class RelativePositionedTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,rect? : lib7.Animation<any>,size? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RelativePositionedTransition(_namedArguments? : {key? : lib4.Key,rect? : lib7.Animation<any>,size? : any,child? : lib3.Widget}) {
        let {key,rect,size,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.size = size;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    key;
    listenable;

     : any;

    get rect() : lib7.Animation<any> {
        return this.listenable;
    }
    size : any;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let offsets : lib15.RelativeRect = lib15.RelativeRect.fromSize(this.rect.value,this.size);
        return lib8.Positioned({
            top : offsets.top,right : offsets.right,bottom : offsets.bottom,left : offsets.left,child : this.child});
    }
}

export namespace DecoratedBoxTransition {
    export type Constructors = AnimatedWidget.Constructors | 'DecoratedBoxTransition';
    export type Interface = Omit<DecoratedBoxTransition, Constructors>;
}
@DartClass
export class DecoratedBoxTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,decoration? : lib7.Animation<lib19.Decoration>,position? : lib13.DecorationPosition,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DecoratedBoxTransition(_namedArguments? : {key? : lib4.Key,decoration? : lib7.Animation<lib19.Decoration>,position? : lib13.DecorationPosition,child? : lib3.Widget}) {
        let {key,decoration,position,child} = Object.assign({
            "position" : lib13.DecorationPosition.background}, _namedArguments );
        this.assert = assert;
        this.decoration = decoration;
        this.position = position;
        this.child = child;
    }
     : any;

     : any;

     : any;

    key;
    listenable;

     : any;

    decoration : lib7.Animation<lib19.Decoration>;

    position : lib13.DecorationPosition;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib16.DecoratedBox({
            decoration : this.decoration.value,position : this.position,child : this.child});
    }
}

export namespace AlignTransition {
    export type Constructors = AnimatedWidget.Constructors | 'AlignTransition';
    export type Interface = Omit<AlignTransition, Constructors>;
}
@DartClass
export class AlignTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib7.Animation<lib9.AlignmentGeometry>,child? : lib3.Widget,widthFactor? : double,heightFactor? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AlignTransition(_namedArguments? : {key? : lib4.Key,alignment? : lib7.Animation<lib9.AlignmentGeometry>,child? : lib3.Widget,widthFactor? : double,heightFactor? : double}) {
        let {key,alignment,child,widthFactor,heightFactor} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.widthFactor = widthFactor;
        this.heightFactor = heightFactor;
    }
     : any;

     : any;

     : any;

    key;
    listenable;

     : any;

    get alignment() : lib7.Animation<lib9.AlignmentGeometry> {
        return this.listenable;
    }
    widthFactor : double;

    heightFactor : double;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib8.Align({
            alignment : this.alignment.value,widthFactor : this.widthFactor,heightFactor : this.heightFactor,child : this.child});
    }
}

export namespace DefaultTextStyleTransition {
    export type Constructors = AnimatedWidget.Constructors | 'DefaultTextStyleTransition';
    export type Interface = Omit<DefaultTextStyleTransition, Constructors>;
}
@DartClass
export class DefaultTextStyleTransition extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,style? : lib7.Animation<lib20.TextStyle>,child? : lib3.Widget,textAlign? : any,softWrap? : boolean,overflow? : lib17.TextOverflow,maxLines? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultTextStyleTransition(_namedArguments? : {key? : lib4.Key,style? : lib7.Animation<lib20.TextStyle>,child? : lib3.Widget,textAlign? : any,softWrap? : boolean,overflow? : lib17.TextOverflow,maxLines? : number}) {
        let {key,style,child,textAlign,softWrap,overflow,maxLines} = Object.assign({
            "softWrap" : true,
            "overflow" : lib17.TextOverflow.clip}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.textAlign = textAlign;
        this.softWrap = softWrap;
        this.overflow = overflow;
        this.maxLines = maxLines;
    }
     : any;

     : any;

     : any;

    key;
    listenable;

     : any;

    get style() : lib7.Animation<lib20.TextStyle> {
        return this.listenable;
    }
    textAlign : any;

    softWrap : boolean;

    overflow : lib17.TextOverflow;

    maxLines : number;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib18.DefaultTextStyle({
            style : this.style.value,textAlign : this.textAlign,softWrap : this.softWrap,overflow : this.overflow,maxLines : this.maxLines,child : this.child});
    }
}

export namespace AnimatedBuilder {
    export type Constructors = AnimatedWidget.Constructors | 'AnimatedBuilder';
    export type Interface = Omit<AnimatedBuilder, Constructors>;
}
@DartClass
export class AnimatedBuilder extends AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,animation? : lib5.Listenable,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedBuilder(_namedArguments? : {key? : lib4.Key,animation? : lib5.Listenable,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,child? : lib3.Widget}) {
        let {key,animation,builder,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.builder = builder;
        this.child = child;
    }
     : any;

     : any;

     : any;

    key;
    listenable;

     : any;

    builder : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.builder(context,this.child);
    }
}

export class properties {
}
