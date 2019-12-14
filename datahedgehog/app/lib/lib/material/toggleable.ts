/** Library asset:datahedgehog_monitor/lib/lib/material/toggleable.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./constants";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/semantics/semantics_event";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var describeSemanticsConfiguration : (config : lib16.SemanticsConfiguration) => any = (config : lib16.SemanticsConfiguration) : any =>  {
    super.describeSemanticsConfiguration(config);
    config.isEnabled = properties.isInteractive;
    if (properties.isInteractive) config.onTap = _handleTap;
};
export var debugFillProperties : (properties : lib17.DiagnosticPropertiesBuilder) => any = (properties : lib17.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib17.FlagProperty('value',{
        value : properties.value,ifTrue : 'checked',ifFalse : 'unchecked',showName : true}));
    properties.add(lib17.FlagProperty('isInteractive',{
        value : properties.isInteractive,ifTrue : 'enabled',ifFalse : 'disabled',defaultValue : true}));
};
export var attach : (owner : lib13.PipelineOwner) => any = (owner : lib13.PipelineOwner) : any =>  {
    super.attach(owner);
    if (properties.value == false) properties._positionController.reverse();else properties._positionController.forward();
    if (properties.isInteractive) {
        switch (properties._reactionController.status) {
            case lib12.AnimationStatus.forward:
                properties._reactionController.forward();
                break;
            case lib12.AnimationStatus.reverse:
                properties._reactionController.reverse();
                break;
            case lib12.AnimationStatus.dismissed:
            case lib12.AnimationStatus.completed:
                break;
        }
    }
};
export var detach : () => any = () : any =>  {
    properties._positionController.stop();
    properties._reactionController.stop();
    super.detach();
};
export var _handlePositionStateChanged : (status : lib12.AnimationStatus) => any = (status : lib12.AnimationStatus) : any =>  {
    if (properties.isInteractive && !properties.tristate) {
        if (op(Op.EQUALS,status,lib12.AnimationStatus.completed) && properties._value == false) {
            properties.onChanged(true);
        }else if (op(Op.EQUALS,status,lib12.AnimationStatus.dismissed) && properties._value != false) {
            properties.onChanged(false);
        }
    }
};
export var _handleTapDown : (details : lib8.TapDownDetails) => any = (details : lib8.TapDownDetails) : any =>  {
    if (properties.isInteractive) {
        properties._downPosition = globalToLocal(details.globalPosition);
        properties._reactionController.forward();
    }
};
export var _handleTap : () => any = () : any =>  {
    if (!properties.isInteractive) return;
    switch (properties.value) {
        case false:
            properties.onChanged(true);
            break;
        case true:
            properties.onChanged(properties.tristate ? null : false);
            break;
        default:
            properties.onChanged(false);
            break;
    }
    sendSemanticsEvent(new lib14.TapSemanticEvent());
};
export var _handleTapUp : (details : lib8.TapUpDetails) => any = (details : lib8.TapUpDetails) : any =>  {
    properties._downPosition = null;
    if (properties.isInteractive) properties._reactionController.reverse();
};
export var _handleTapCancel : () => any = () : any =>  {
    properties._downPosition = null;
    if (properties.isInteractive) properties._reactionController.reverse();
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return true;
};
export var handleEvent : (event : lib15.PointerEvent,entry : lib6.BoxHitTestEntry) => any = (event : lib15.PointerEvent,entry : lib6.BoxHitTestEntry) : any =>  {
    /* TODO (AssertStatementImpl) : assert (debugHandleEvent(event, entry)); */;
    if (is(event, lib15.PointerDownEvent) && properties.isInteractive) properties._tap.addPointer(event);
};
export var paintRadialReaction : (canvas : any,offset : any,origin : any) => any = (canvas : any,offset : any,origin : any) : any =>  {
    if (!properties._reaction.isDismissed) {
        let reactionPaint : any = ((_) : any =>  {
            {
                _.color = properties.activeColor.withAlpha(lib3.properties.kRadialReactionAlpha);
                return _;
            }
        })(Paint());
        let center : any = Offset.lerp((properties._downPosition || origin),origin,properties._reaction.value);
        let radius : double = properties._kRadialReactionRadiusTween.evaluate(properties._reaction);
        canvas.drawCircle(op(Op.PLUS,center,offset),radius,reactionPaint);
    }
};
export namespace RenderToggleable {
    export type Constructors = lib5.RenderConstrainedBox.Constructors | 'RenderToggleable';
    export type Interface = Omit<RenderToggleable, Constructors>;
}
@DartClass
export class RenderToggleable extends lib5.RenderConstrainedBox {
    constructor(_namedArguments? : {value? : boolean,tristate? : boolean,activeColor? : any,inactiveColor? : any,onChanged? : <T>(value : boolean) => void,additionalConstraints? : lib6.BoxConstraints,vsync? : lib7.TickerProvider}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderToggleable(_namedArguments? : {value? : boolean,tristate? : boolean,activeColor? : any,inactiveColor? : any,onChanged? : <T>(value : boolean) => void,additionalConstraints? : lib6.BoxConstraints,vsync? : lib7.TickerProvider}) {
        let {value,tristate,activeColor,inactiveColor,onChanged,additionalConstraints,vsync} = Object.assign({
            "tristate" : false}, _namedArguments );
        this._value = properties.value;
        this._tristate = properties.tristate;
        this._activeColor = properties.activeColor;
        this._inactiveColor = properties.inactiveColor;
        this._onChanged = properties.onChanged;
        this._vsync = properties.vsync;
        this._tap = ((_) : any =>  {
            {
                _.onTapDown = _handleTapDown;
                _.onTap = _handleTap;
                _.onTapUp = _handleTapUp;
                _.onTapCancel = _handleTapCancel;
                return _;
            }
        })(lib8.TapGestureRecognizer());
        this._positionController = lib9.AnimationController({
            duration : properties._kToggleDuration,value : properties.value == false ? 0.0 : 1.0,vsync : properties.vsync});
        this._position = ((_) : any =>  {
            {
                addListener(markNeedsPaint);
                addStatusListener(_handlePositionStateChanged);
                return _;
            }
        })(lib11.CurvedAnimation({
            parent : this._positionController,curve : lib10.Curves.linear}));
        this._reactionController = lib9.AnimationController({
            duration : lib3.properties.kRadialReactionDuration,vsync : properties.vsync});
        this._reaction = ((_) : any =>  {
            {
                addListener(markNeedsPaint);
                return _;
            }
        })(lib11.CurvedAnimation({
            parent : this._reactionController,curve : lib10.Curves.fastOutSlowIn}));
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    _value;
    _tristate;
    _activeColor;
    _inactiveColor;
    _onChanged;
    _vsync;
    super;

     : any;

     : any;

    _tap;

    _positionController;

    _position;

    _reactionController;

    _reaction;

}

export class properties {
    private static __$_value : boolean;
    static get _value() : boolean { 
        return this.__$_value;
    }
    static set _value(__$value : boolean)  { 
        this.__$_value = __$value;
    }

    private static __$_kRadialReactionRadiusTween : lib4.Animatable<double>;
    static get _kRadialReactionRadiusTween() : lib4.Animatable<double> { 
        if (this.__$_kRadialReactionRadiusTween===undefined) {
            this.__$_kRadialReactionRadiusTween = lib4.Tween({
                begin : 0.0,end : lib3.properties.kRadialReactionRadius});
        }
        return this.__$_kRadialReactionRadiusTween;
    }
    static set _kRadialReactionRadiusTween(__$value : lib4.Animatable<double>)  { 
        this.__$_kRadialReactionRadiusTween = __$value;
    }

    static get positionController() : lib9.AnimationController {
        return properties._positionController;
    }
    private static __$_positionController : lib9.AnimationController;
    static get _positionController() : lib9.AnimationController { 
        return this.__$_positionController;
    }
    static set _positionController(__$value : lib9.AnimationController)  { 
        this.__$_positionController = __$value;
    }

    static get position() : lib11.CurvedAnimation {
        return properties._position;
    }
    private static __$_position : lib11.CurvedAnimation;
    static get _position() : lib11.CurvedAnimation { 
        return this.__$_position;
    }
    static set _position(__$value : lib11.CurvedAnimation)  { 
        this.__$_position = __$value;
    }

    static get reactionController() : lib9.AnimationController {
        return properties._reactionController;
    }
    private static __$_reactionController : lib9.AnimationController;
    static get _reactionController() : lib9.AnimationController { 
        return this.__$_reactionController;
    }
    static set _reactionController(__$value : lib9.AnimationController)  { 
        this.__$_reactionController = __$value;
    }

    private static __$_reaction : lib12.Animation<double>;
    static get _reaction() : lib12.Animation<double> { 
        return this.__$_reaction;
    }
    static set _reaction(__$value : lib12.Animation<double>)  { 
        this.__$_reaction = __$value;
    }

    static get vsync() : lib7.TickerProvider {
        return properties._vsync;
    }
    private static __$_vsync : lib7.TickerProvider;
    static get _vsync() : lib7.TickerProvider { 
        return this.__$_vsync;
    }
    static set _vsync(__$value : lib7.TickerProvider)  { 
        this.__$_vsync = __$value;
    }

    static set vsync(value : lib7.TickerProvider) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._vsync)) return;
        properties._vsync = value;
        properties.positionController.resync(properties.vsync);
        properties.reactionController.resync(properties.vsync);
    }
    static get value() : boolean {
        return properties._value;
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

    static set value(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (tristate || value != null); */;
        if (value == properties._value) return;
        properties._value = value;
        markNeedsSemanticsUpdate();
        ((_) : lib11.CurvedAnimation =>  {
            {
                _.curve = lib10.Curves.easeIn;
                _.reverseCurve = lib10.Curves.easeOut;
                return _;
            }
        })(properties._position);
        if (properties.tristate) {
            switch (properties._positionController.status) {
                case lib12.AnimationStatus.forward:
                case lib12.AnimationStatus.completed:
                    properties._positionController.reverse();
                    break;
                default:
                    properties._positionController.forward();
            }
        }else {
            if (value == true) properties._positionController.forward();else properties._positionController.reverse();
        }
    }
    static get tristate() : boolean {
        return properties._tristate;
    }
    private static __$_tristate : boolean;
    static get _tristate() : boolean { 
        return this.__$_tristate;
    }
    static set _tristate(__$value : boolean)  { 
        this.__$_tristate = __$value;
    }

    static set tristate(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (tristate != null); */;
        if (value == properties._tristate) return;
        properties._tristate = value;
        markNeedsSemanticsUpdate();
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
    static get inactiveColor() : any {
        return properties._inactiveColor;
    }
    private static __$_inactiveColor : any;
    static get _inactiveColor() : any { 
        return this.__$_inactiveColor;
    }
    static set _inactiveColor(__$value : any)  { 
        this.__$_inactiveColor = __$value;
    }

    static set inactiveColor(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._inactiveColor)) return;
        properties._inactiveColor = value;
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
    }
    private static __$_tap : lib8.TapGestureRecognizer;
    static get _tap() : lib8.TapGestureRecognizer { 
        return this.__$_tap;
    }
    static set _tap(__$value : lib8.TapGestureRecognizer)  { 
        this.__$_tap = __$value;
    }

    private static __$_downPosition : any;
    static get _downPosition() : any { 
        return this.__$_downPosition;
    }
    static set _downPosition(__$value : any)  { 
        this.__$_downPosition = __$value;
    }

    static get isInteractive() : boolean {
        return properties.onChanged != null;
    }
}
