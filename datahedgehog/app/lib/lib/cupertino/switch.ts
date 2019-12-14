/** Library asset:datahedgehog_monitor/lib/lib/cupertino/switch.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "./colors";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/monodrag";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/services/haptic_feedback";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib23 from "./thumb_painter";
import * as math from "@dart2ts/dart/math";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/rendering/view";

export var paint : (context : lib18.PaintingContext,offset : any) => any = (context : lib18.PaintingContext,offset : any) : any =>  {
    let canvas : any = context.canvas;
    let currentValue : double = properties._position.value;
    let currentReactionValue : double = properties._reaction.value;
    let visualPosition : double;
    switch (properties.textDirection) {
        case TextDirection.rtl:
            visualPosition = 1.0 - currentValue;
            break;
        case TextDirection.ltr:
            visualPosition = currentValue;
            break;
    }
    let trackColor : any = properties._value ? properties.activeColor : properties._kTrackColor;
    let borderThickness : double = 1.5 + (properties._kTrackRadius - 1.5) * math.max(currentReactionValue,currentValue);
    let paint : any = ((_) : any =>  {
        {
            _.color = trackColor;
            return _;
        }
    })(Paint());
    let trackRect : any = Rect.fromLTWH(op(Op.PLUS,offset.dx,op(Op.DIVIDE,(op(Op.MINUS,lib25.properties.size.width,properties._kTrackWidth)),2.0)),op(Op.PLUS,offset.dy,op(Op.DIVIDE,(op(Op.MINUS,lib25.properties.size.height,properties._kTrackHeight)),2.0)),properties._kTrackWidth,properties._kTrackHeight);
    let outerRRect : any = RRect.fromRectAndRadius(trackRect,new bare.createInstance(any,null,properties._kTrackRadius));
    let innerRRect : any = RRect.fromRectAndRadius(trackRect.deflate(borderThickness),new bare.createInstance(any,null,properties._kTrackRadius));
    canvas.drawDRRect(outerRRect,innerRRect,paint);
    let currentThumbExtension : double = lib23.CupertinoThumbPainter.extension * currentReactionValue;
    let thumbLeft : double = lerpDouble(op(Op.MINUS,op(Op.PLUS,trackRect.left,properties._kTrackInnerStart),lib23.CupertinoThumbPainter.radius),op(Op.MINUS,op(Op.MINUS,op(Op.PLUS,trackRect.left,properties._kTrackInnerEnd),lib23.CupertinoThumbPainter.radius),currentThumbExtension),visualPosition);
    let thumbRight : double = lerpDouble(op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,trackRect.left,properties._kTrackInnerStart),lib23.CupertinoThumbPainter.radius),currentThumbExtension),op(Op.PLUS,op(Op.PLUS,trackRect.left,properties._kTrackInnerEnd),lib23.CupertinoThumbPainter.radius),visualPosition);
    let thumbCenterY : double = op(Op.PLUS,offset.dy,op(Op.DIVIDE,lib25.properties.size.height,2.0));
    properties._thumbPainter.paint(canvas,Rect.fromLTRB(thumbLeft,thumbCenterY - lib23.CupertinoThumbPainter.radius,thumbRight,thumbCenterY + lib23.CupertinoThumbPainter.radius));
};
export var describeSemanticsConfiguration : (config : lib22.SemanticsConfiguration) => any = (config : lib22.SemanticsConfiguration) : any =>  {
    super.describeSemanticsConfiguration(config);
    if (properties.isInteractive) config.onTap = _handleTap;
    config.isEnabled = properties.isInteractive;
    config.isToggled = properties._value;
};
export var handleEvent : (event : lib20.PointerEvent,entry : lib21.BoxHitTestEntry) => any = (event : lib20.PointerEvent,entry : lib21.BoxHitTestEntry) : any =>  {
    /* TODO (AssertStatementImpl) : assert (debugHandleEvent(event, entry)); */;
    if (is(event, lib20.PointerDownEvent) && properties.isInteractive) {
        properties._drag.addPointer(event);
        properties._tap.addPointer(event);
    }
};
export var debugFillProperties : (description : lib6.DiagnosticPropertiesBuilder) => any = (description : lib6.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(description);
    description.add(lib6.FlagProperty('value',{
        value : properties.value,ifTrue : 'checked',ifFalse : 'unchecked',showName : true}));
    description.add(lib6.FlagProperty('isInteractive',{
        value : properties.isInteractive,ifTrue : 'enabled',ifFalse : 'disabled',showName : true,defaultValue : true}));
};
export var attach : (owner : lib18.PipelineOwner) => any = (owner : lib18.PipelineOwner) : any =>  {
    super.attach(owner);
    if (properties.value) properties._positionController.forward();else properties._positionController.reverse();
    if (properties.isInteractive) {
        switch (properties._reactionController.status) {
            case lib15.AnimationStatus.forward:
                properties._reactionController.forward();
                break;
            case lib15.AnimationStatus.reverse:
                properties._reactionController.reverse();
                break;
            case lib15.AnimationStatus.dismissed:
            case lib15.AnimationStatus.completed:
                break;
        }
    }
};
export var detach : () => any = () : any =>  {
    properties._positionController.stop();
    properties._reactionController.stop();
    super.detach();
};
export var _handlePositionStateChanged : (status : lib15.AnimationStatus) => any = (status : lib15.AnimationStatus) : any =>  {
    if (properties.isInteractive) {
        if (op(Op.EQUALS,status,lib15.AnimationStatus.completed) && !properties._value) properties.onChanged(true);else if (op(Op.EQUALS,status,lib15.AnimationStatus.dismissed) && properties._value) properties.onChanged(false);
    }
};
export var _handleTapDown : (details : lib10.TapDownDetails) => any = (details : lib10.TapDownDetails) : any =>  {
    if (properties.isInteractive) properties._reactionController.forward();
};
export var _handleTap : () => any = () : any =>  {
    if (properties.isInteractive) properties.onChanged(!properties._value);
};
export var _handleTapUp : (details : lib10.TapUpDetails) => any = (details : lib10.TapUpDetails) : any =>  {
    if (properties.isInteractive) properties._reactionController.reverse();
};
export var _handleTapCancel : () => any = () : any =>  {
    if (properties.isInteractive) properties._reactionController.reverse();
};
export var _handleDragStart : (details : lib19.DragStartDetails) => any = (details : lib19.DragStartDetails) : any =>  {
    if (properties.isInteractive) properties._reactionController.forward();
};
export var _handleDragUpdate : (details : lib19.DragUpdateDetails) => any = (details : lib19.DragUpdateDetails) : any =>  {
    if (properties.isInteractive) {
        ((_) : lib14.CurvedAnimation =>  {
            {
                _.curve = null;
                _.reverseCurve = null;
                return _;
            }
        })(properties._position);
        let delta : double = details.primaryDelta / properties._kTrackInnerLength;
        switch (properties.textDirection) {
            case TextDirection.rtl:
                properties._positionController.value -= delta;
                break;
            case TextDirection.ltr:
                properties._positionController.value += delta;
                break;
        }
    }
};
export var _handleDragEnd : (details : lib19.DragEndDetails) => any = (details : lib19.DragEndDetails) : any =>  {
    if (properties._position.value >= 0.5) properties._positionController.forward();else properties._positionController.reverse();
    properties._reactionController.reverse();
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return true;
};
export namespace _RenderCupertinoSwitch {
    export type Constructors = lib9.RenderConstrainedBox.Constructors | '_RenderCupertinoSwitch' | 'tightFor';
    export type Interface = Omit<_RenderCupertinoSwitch, Constructors>;
}
@DartClass
export class _RenderCupertinoSwitch extends lib9.RenderConstrainedBox {
    constructor(_namedArguments? : {value? : boolean,activeColor? : any,onChanged? : <T>(value : boolean) => void,textDirection? : any,vsync? : any,dragStartBehavior? : lib5.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderCupertinoSwitch(_namedArguments? : {value? : boolean,activeColor? : any,onChanged? : <T>(value : boolean) => void,textDirection? : any,vsync? : any,dragStartBehavior? : lib5.DragStartBehavior}) {
        let {value,activeColor,onChanged,textDirection,vsync,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib5.DragStartBehavior.down}, _namedArguments );
        this._value = properties.value;
        this._activeColor = properties.activeColor;
        this._onChanged = properties.onChanged;
        this._textDirection = properties.textDirection;
        this._vsync = properties.vsync;
        this._tap = ((_) : any =>  {
            {
                _.onTapDown = _handleTapDown;
                _.onTap = _handleTap;
                _.onTapUp = _handleTapUp;
                _.onTapCancel = _handleTapCancel;
                return _;
            }
        })(lib10.TapGestureRecognizer());
        this._drag = ((_) : any =>  {
            {
                _.onStart = _handleDragStart;
                _.onUpdate = _handleDragUpdate;
                _.onEnd = _handleDragEnd;
                _.dragStartBehavior = properties.dragStartBehavior;
                return _;
            }
        })(lib11.HorizontalDragGestureRecognizer());
        this._positionController = lib12.AnimationController({
            duration : properties._kToggleDuration,value : properties.value ? 1.0 : 0.0,vsync : properties.vsync});
        this._position = ((_) : any =>  {
            {
                addListener(markNeedsPaint);
                addStatusListener(_handlePositionStateChanged);
                return _;
            }
        })(lib14.CurvedAnimation({
            parent : this._positionController,curve : lib13.Curves.linear}));
        this._reactionController = lib12.AnimationController({
            duration : properties._kReactionDuration,vsync : properties.vsync});
        this._reaction = ((_) : any =>  {
            {
                addListener(markNeedsPaint);
                return _;
            }
        })(lib14.CurvedAnimation({
            parent : this._reactionController,curve : lib13.Curves.ease}));
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _value;
    _activeColor;
    _onChanged;
    _textDirection;
    _vsync;
    super;

     : any;

    @namedConstructor
    tightFor(_namedArguments? : {width? : any,height? : any}) {
        let {width,height} = Object.assign({
            "width" : properties._kSwitchWidth,
            "height" : properties._kSwitchHeight}, _namedArguments );
        this._value = properties.value;
        this._activeColor = properties.activeColor;
        this._onChanged = properties.onChanged;
        this._textDirection = properties.textDirection;
        this._vsync = properties.vsync;
        this._tap = ((_) : any =>  {
            {
                _.onTapDown = _handleTapDown;
                _.onTap = _handleTap;
                _.onTapUp = _handleTapUp;
                _.onTapCancel = _handleTapCancel;
                return _;
            }
        })(lib10.TapGestureRecognizer());
        this._drag = ((_) : any =>  {
            {
                _.onStart = _handleDragStart;
                _.onUpdate = _handleDragUpdate;
                _.onEnd = _handleDragEnd;
                _.dragStartBehavior = properties.dragStartBehavior;
                return _;
            }
        })(lib11.HorizontalDragGestureRecognizer());
        this._positionController = lib12.AnimationController({
            duration : properties._kToggleDuration,value : properties.value ? 1.0 : 0.0,vsync : properties.vsync});
        this._position = ((_) : any =>  {
            {
                addListener(markNeedsPaint);
                addStatusListener(_handlePositionStateChanged);
                return _;
            }
        })(lib14.CurvedAnimation({
            parent : this._positionController,curve : lib13.Curves.linear}));
        this._reactionController = lib12.AnimationController({
            duration : properties._kReactionDuration,vsync : properties.vsync});
        this._reaction = ((_) : any =>  {
            {
                addListener(markNeedsPaint);
                return _;
            }
        })(lib14.CurvedAnimation({
            parent : this._reactionController,curve : lib13.Curves.ease}));
    }
    static tightFor : new(_namedArguments? : {width? : any,height? : any}) => _RenderCupertinoSwitch;

    _tap;

    _drag;

    _positionController;

    _position;

    _reactionController;

    _reaction;

}

export namespace _CupertinoSwitchRenderObjectWidget {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | '_CupertinoSwitchRenderObjectWidget';
    export type Interface = Omit<_CupertinoSwitchRenderObjectWidget, Constructors>;
}
@DartClass
export class _CupertinoSwitchRenderObjectWidget extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,value? : boolean,activeColor? : any,onChanged? : <T>(value : boolean) => void,vsync? : any,dragStartBehavior? : lib5.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoSwitchRenderObjectWidget(_namedArguments? : {key? : lib4.Key,value? : boolean,activeColor? : any,onChanged? : <T>(value : boolean) => void,vsync? : any,dragStartBehavior? : lib5.DragStartBehavior}) {
        let {key,value,activeColor,onChanged,vsync,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib5.DragStartBehavior.down}, _namedArguments );
        super.LeafRenderObjectWidget({
            key : key});
        this.value = value;
        this.activeColor = activeColor;
        this.onChanged = onChanged;
        this.vsync = vsync;
        this.dragStartBehavior = dragStartBehavior;
    }
    value : boolean;

    activeColor : any;

    onChanged : <T>(value : boolean) => void;

    vsync : any;

    dragStartBehavior : lib5.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : _RenderCupertinoSwitch {
        return _RenderCupertinoSwitch({
            value : this.value,activeColor : this.activeColor,onChanged : this.onChanged,textDirection : lib8.Directionality.of(context),vsync : this.vsync,dragStartBehavior : this.dragStartBehavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderCupertinoSwitch) : any {
        ((_) : _RenderCupertinoSwitch =>  {
            {
                _.value = this.value;
                _.activeColor = this.activeColor;
                _.onChanged = this.onChanged;
                _.textDirection = lib8.Directionality.of(context);
                _.vsync = this.vsync;
                _.dragStartBehavior = this.dragStartBehavior;
                return _;
            }
        })(renderObject);
    }
}

export namespace _CupertinoSwitchState {
    export type Constructors = '_CupertinoSwitchState';
    export type Interface = Omit<_CupertinoSwitchState, Constructors>;
}
@DartClass
@With(any)
export class _CupertinoSwitchState extends any implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return _CupertinoSwitchRenderObjectWidget({
            value : widget.value,activeColor : (widget.activeColor || lib7.CupertinoColors.activeGreen),onChanged : widget.onChanged,vsync : this,dragStartBehavior : widget.dragStartBehavior});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoSwitchState() {
    }
}

export namespace CupertinoSwitch {
    export type Constructors = lib3.StatefulWidget.Constructors | 'CupertinoSwitch';
    export type Interface = Omit<CupertinoSwitch, Constructors>;
}
@DartClass
export class CupertinoSwitch extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,dragStartBehavior? : lib5.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoSwitch(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,dragStartBehavior? : lib5.DragStartBehavior}) {
        let {key,value,onChanged,activeColor,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib5.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.value = value;
        this.onChanged = onChanged;
        this.activeColor = activeColor;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

    value : boolean;

    onChanged : <T>(value : boolean) => void;

    activeColor : any;

    dragStartBehavior : lib5.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoSwitchState {
        return _CupertinoSwitchState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.FlagProperty('value',{
            value : this.value,ifTrue : 'on',ifFalse : 'off',showName : true}));
        properties.add(lib6.ObjectFlagProperty('onChanged',this.onChanged,{
            ifNull : 'disabled'}));
    }
}

export class properties {
    private static __$_reaction : lib15.Animation<double>;
    static get _reaction() : lib15.Animation<double> { 
        return this.__$_reaction;
    }
    static set _reaction(__$value : lib15.Animation<double>)  { 
        this.__$_reaction = __$value;
    }

    private static __$_thumbPainter : lib23.CupertinoThumbPainter;
    static get _thumbPainter() : lib23.CupertinoThumbPainter { 
        if (this.__$_thumbPainter===undefined) {
            this.__$_thumbPainter = lib23.CupertinoThumbPainter();
        }
        return this.__$_thumbPainter;
    }
    static set _thumbPainter(__$value : lib23.CupertinoThumbPainter)  { 
        this.__$_thumbPainter = __$value;
    }

    private static __$_kTrackWidth : double;
    static get _kTrackWidth() : double { 
        if (this.__$_kTrackWidth===undefined) {
            this.__$_kTrackWidth = 51.0;
        }
        return this.__$_kTrackWidth;
    }
    static set _kTrackWidth(__$value : double)  { 
        this.__$_kTrackWidth = __$value;
    }

    private static __$_kTrackHeight : double;
    static get _kTrackHeight() : double { 
        if (this.__$_kTrackHeight===undefined) {
            this.__$_kTrackHeight = 31.0;
        }
        return this.__$_kTrackHeight;
    }
    static set _kTrackHeight(__$value : double)  { 
        this.__$_kTrackHeight = __$value;
    }

    private static __$_kTrackRadius : double;
    static get _kTrackRadius() : double { 
        if (this.__$_kTrackRadius===undefined) {
            this.__$_kTrackRadius = properties._kTrackHeight / 2.0;
        }
        return this.__$_kTrackRadius;
    }
    static set _kTrackRadius(__$value : double)  { 
        this.__$_kTrackRadius = __$value;
    }

    private static __$_kTrackInnerStart : double;
    static get _kTrackInnerStart() : double { 
        if (this.__$_kTrackInnerStart===undefined) {
            this.__$_kTrackInnerStart = properties._kTrackHeight / 2.0;
        }
        return this.__$_kTrackInnerStart;
    }
    static set _kTrackInnerStart(__$value : double)  { 
        this.__$_kTrackInnerStart = __$value;
    }

    private static __$_kTrackInnerEnd : double;
    static get _kTrackInnerEnd() : double { 
        if (this.__$_kTrackInnerEnd===undefined) {
            this.__$_kTrackInnerEnd = properties._kTrackWidth - properties._kTrackInnerStart;
        }
        return this.__$_kTrackInnerEnd;
    }
    static set _kTrackInnerEnd(__$value : double)  { 
        this.__$_kTrackInnerEnd = __$value;
    }

    private static __$_kTrackInnerLength : double;
    static get _kTrackInnerLength() : double { 
        if (this.__$_kTrackInnerLength===undefined) {
            this.__$_kTrackInnerLength = properties._kTrackInnerEnd - properties._kTrackInnerStart;
        }
        return this.__$_kTrackInnerLength;
    }
    static set _kTrackInnerLength(__$value : double)  { 
        this.__$_kTrackInnerLength = __$value;
    }

    private static __$_kSwitchWidth : double;
    static get _kSwitchWidth() : double { 
        if (this.__$_kSwitchWidth===undefined) {
            this.__$_kSwitchWidth = 59.0;
        }
        return this.__$_kSwitchWidth;
    }
    static set _kSwitchWidth(__$value : double)  { 
        this.__$_kSwitchWidth = __$value;
    }

    private static __$_kSwitchHeight : double;
    static get _kSwitchHeight() : double { 
        if (this.__$_kSwitchHeight===undefined) {
            this.__$_kSwitchHeight = 39.0;
        }
        return this.__$_kSwitchHeight;
    }
    static set _kSwitchHeight(__$value : double)  { 
        this.__$_kSwitchHeight = __$value;
    }

    private static __$_kTrackColor : any;
    static get _kTrackColor() : any { 
        if (this.__$_kTrackColor===undefined) {
            this.__$_kTrackColor = lib7.CupertinoColors.lightBackgroundGray;
        }
        return this.__$_kTrackColor;
    }
    static set _kTrackColor(__$value : any)  { 
        this.__$_kTrackColor = __$value;
    }

    private static __$_kReactionDuration : core.DartDuration;
    static get _kReactionDuration() : core.DartDuration { 
        if (this.__$_kReactionDuration===undefined) {
            this.__$_kReactionDuration = core.DartDuration({
                milliseconds : 300});
        }
        return this.__$_kReactionDuration;
    }
    static set _kReactionDuration(__$value : core.DartDuration)  { 
        this.__$_kReactionDuration = __$value;
    }

    private static __$_kToggleDuration : core.DartDuration;
    static get _kToggleDuration() : core.DartDuration { 
        if (this.__$_kToggleDuration===undefined) {
            this.__$_kToggleDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_kToggleDuration;
    }
    static set _kToggleDuration(__$value : core.DartDuration)  { 
        this.__$_kToggleDuration = __$value;
    }

    private static __$_positionController : lib12.AnimationController;
    static get _positionController() : lib12.AnimationController { 
        return this.__$_positionController;
    }
    static set _positionController(__$value : lib12.AnimationController)  { 
        this.__$_positionController = __$value;
    }

    private static __$_position : lib14.CurvedAnimation;
    static get _position() : lib14.CurvedAnimation { 
        return this.__$_position;
    }
    static set _position(__$value : lib14.CurvedAnimation)  { 
        this.__$_position = __$value;
    }

    private static __$_reactionController : lib12.AnimationController;
    static get _reactionController() : lib12.AnimationController { 
        return this.__$_reactionController;
    }
    static set _reactionController(__$value : lib12.AnimationController)  { 
        this.__$_reactionController = __$value;
    }

    static get value() : boolean {
        return properties._value;
    }
    private static __$_value : boolean;
    static get _value() : boolean { 
        return this.__$_value;
    }
    static set _value(__$value : boolean)  { 
        this.__$_value = __$value;
    }

    static set value(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == properties._value) return;
        properties._value = value;
        markNeedsSemanticsUpdate();
        ((_) : lib14.CurvedAnimation =>  {
            {
                _.curve = lib13.Curves.ease;
                _.reverseCurve = lib13.Curves.ease.flipped;
                return _;
            }
        })(properties._position);
        if (value) properties._positionController.forward();else properties._positionController.reverse();
    }
    static get vsync() : any {
        return properties._vsync;
    }
    private static __$_vsync : any;
    static get _vsync() : any { 
        return this.__$_vsync;
    }
    static set _vsync(__$value : any)  { 
        this.__$_vsync = __$value;
    }

    static set vsync(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._vsync)) return;
        properties._vsync = value;
        properties._positionController.resync(properties.vsync);
        properties._reactionController.resync(properties.vsync);
    }
    static get activeColor() : any {
        return properties._activeColor;
    }
    private static __$_activeColor : any;
    static get _activeColor() : any { 
        return this.__$_activeColor;
    }
    static set _activeColor(__$value : any)  { 
        this.__$_activeColor = __$value;
    }

    static set activeColor(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._activeColor)) return;
        properties._activeColor = value;
        markNeedsPaint();
    }
    static get onChanged() : <T>(value : boolean) => void {
        return properties._onChanged;
    }
    private static __$_onChanged : <T>(value : boolean) => void;
    static get _onChanged() : <T>(value : boolean) => void { 
        return this.__$_onChanged;
    }
    static set _onChanged(__$value : <T>(value : boolean) => void)  { 
        this.__$_onChanged = __$value;
    }

    static set onChanged(value : <T>(value : boolean) => void) {
        if (op(Op.EQUALS,value,properties._onChanged)) return;
        let wasInteractive : boolean = properties.isInteractive;
        properties._onChanged = value;
        if (wasInteractive != properties.isInteractive) {
            markNeedsPaint();
            markNeedsSemanticsUpdate();
        }
        switch (lib16.properties.defaultTargetPlatform) {
            case lib16.TargetPlatform.iOS:
                lib17.HapticFeedback.lightImpact();
                break;
            case lib16.TargetPlatform.fuchsia:
            case lib16.TargetPlatform.android:
                break;
        }
    }
    static get textDirection() : any {
        return properties._textDirection;
    }
    private static __$_textDirection : any;
    static get _textDirection() : any { 
        return this.__$_textDirection;
    }
    static set _textDirection(__$value : any)  { 
        this.__$_textDirection = __$value;
    }

    static set textDirection(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._textDirection,value)) return;
        properties._textDirection = value;
        markNeedsPaint();
    }
    static get dragStartBehavior() : lib5.DragStartBehavior {
        return properties._drag.dragStartBehavior;
    }
    static set dragStartBehavior(value : lib5.DragStartBehavior) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._drag.dragStartBehavior,value)) return;
        properties._drag.dragStartBehavior = value;
    }
    private static __$_tap : lib10.TapGestureRecognizer;
    static get _tap() : lib10.TapGestureRecognizer { 
        return this.__$_tap;
    }
    static set _tap(__$value : lib10.TapGestureRecognizer)  { 
        this.__$_tap = __$value;
    }

    private static __$_drag : lib11.HorizontalDragGestureRecognizer;
    static get _drag() : lib11.HorizontalDragGestureRecognizer { 
        return this.__$_drag;
    }
    static set _drag(__$value : lib11.HorizontalDragGestureRecognizer)  { 
        this.__$_drag = __$value;
    }

    static get isInteractive() : boolean {
        return properties.onChanged != null;
    }
}
