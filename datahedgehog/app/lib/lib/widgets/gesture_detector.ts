/** Library asset:datahedgehog_monitor/lib/lib/widgets/gesture_detector.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/gestures/long_press";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/gestures/scale";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/force_press";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/multitap";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/gestures/monodrag";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib16 from "./basic";

export var debugFillProperties : (properties : lib13.DiagnosticPropertiesBuilder) => any = (properties : lib13.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib13.EnumProperty('startBehavior',properties.dragStartBehavior));
};
export var build : (context : lib4.BuildContext) => lib4.Widget = (context : lib4.BuildContext) : lib4.Widget =>  {
    let gestures : core.DartMap<core.Type,GestureRecognizerFactory<any>> = new core.DartMap.literal([
    ]);
    if (properties.onTapDown != null || properties.onTapUp != null || properties.onTap != null || properties.onTapCancel != null) {
        gestures.set(lib6.TapGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib6.TapGestureRecognizer({
                debugOwner : this});
        },(instance : lib6.TapGestureRecognizer) =>  {
            ((_) : lib6.TapGestureRecognizer =>  {
                {
                    _.onTapDown = properties.onTapDown;
                    _.onTapUp = properties.onTapUp;
                    _.onTap = properties.onTap;
                    _.onTapCancel = properties.onTapCancel;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onDoubleTap != null) {
        gestures.set(lib11.DoubleTapGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib11.DoubleTapGestureRecognizer({
                debugOwner : this});
        },(instance : lib11.DoubleTapGestureRecognizer) =>  {
            ((_) : lib11.DoubleTapGestureRecognizer =>  {
                {
                    _.onDoubleTap = properties.onDoubleTap;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onLongPress != null || properties.onLongPressUp != null) {
        gestures.set(lib7.LongPressGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib7.LongPressGestureRecognizer({
                debugOwner : this});
        },(instance : lib7.LongPressGestureRecognizer) =>  {
            ((_) : lib7.LongPressGestureRecognizer =>  {
                {
                    _.onLongPress = properties.onLongPress;
                    _.onLongPressUp = properties.onLongPressUp;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onLongPressDragStart != null || properties.onLongPressDragUpdate != null || properties.onLongPressDragUp != null) {
        gestures.set(lib7.LongPressDragGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib7.LongPressDragGestureRecognizer({
                debugOwner : this});
        },(instance : lib7.LongPressDragGestureRecognizer) =>  {
            ((_) : lib7.LongPressDragGestureRecognizer =>  {
                {
                    _.onLongPressStart = properties.onLongPressDragStart;
                    _.onLongPressDragUpdate = properties.onLongPressDragUpdate;
                    _.onLongPressUp = properties.onLongPressDragUp;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onVerticalDragDown != null || properties.onVerticalDragStart != null || properties.onVerticalDragUpdate != null || properties.onVerticalDragEnd != null || properties.onVerticalDragCancel != null) {
        gestures.set(lib12.VerticalDragGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib12.VerticalDragGestureRecognizer({
                debugOwner : this});
        },(instance : lib12.VerticalDragGestureRecognizer) =>  {
            ((_) : lib12.VerticalDragGestureRecognizer =>  {
                {
                    _.onDown = properties.onVerticalDragDown;
                    _.onStart = properties.onVerticalDragStart;
                    _.onUpdate = properties.onVerticalDragUpdate;
                    _.onEnd = properties.onVerticalDragEnd;
                    _.onCancel = properties.onVerticalDragCancel;
                    _.dragStartBehavior = properties.dragStartBehavior;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onHorizontalDragDown != null || properties.onHorizontalDragStart != null || properties.onHorizontalDragUpdate != null || properties.onHorizontalDragEnd != null || properties.onHorizontalDragCancel != null) {
        gestures.set(lib12.HorizontalDragGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib12.HorizontalDragGestureRecognizer({
                debugOwner : this});
        },(instance : lib12.HorizontalDragGestureRecognizer) =>  {
            ((_) : lib12.HorizontalDragGestureRecognizer =>  {
                {
                    _.onDown = properties.onHorizontalDragDown;
                    _.onStart = properties.onHorizontalDragStart;
                    _.onUpdate = properties.onHorizontalDragUpdate;
                    _.onEnd = properties.onHorizontalDragEnd;
                    _.onCancel = properties.onHorizontalDragCancel;
                    _.dragStartBehavior = properties.dragStartBehavior;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onPanDown != null || properties.onPanStart != null || properties.onPanUpdate != null || properties.onPanEnd != null || properties.onPanCancel != null) {
        gestures.set(lib12.PanGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib12.PanGestureRecognizer({
                debugOwner : this});
        },(instance : lib12.PanGestureRecognizer) =>  {
            ((_) : lib12.PanGestureRecognizer =>  {
                {
                    _.onDown = properties.onPanDown;
                    _.onStart = properties.onPanStart;
                    _.onUpdate = properties.onPanUpdate;
                    _.onEnd = properties.onPanEnd;
                    _.onCancel = properties.onPanCancel;
                    _.dragStartBehavior = properties.dragStartBehavior;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onScaleStart != null || properties.onScaleUpdate != null || properties.onScaleEnd != null) {
        gestures.set(lib9.ScaleGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib9.ScaleGestureRecognizer({
                debugOwner : this});
        },(instance : lib9.ScaleGestureRecognizer) =>  {
            ((_) : lib9.ScaleGestureRecognizer =>  {
                {
                    _.onStart = properties.onScaleStart;
                    _.onUpdate = properties.onScaleUpdate;
                    _.onEnd = properties.onScaleEnd;
                    return _;
                }
            })(instance);
        }));
    }
    if (properties.onForcePressStart != null || properties.onForcePressPeak != null || properties.onForcePressUpdate != null || properties.onForcePressEnd != null) {
        gestures.set(lib10.ForcePressGestureRecognizer,GestureRecognizerFactoryWithHandlers(() =>  {
            return lib10.ForcePressGestureRecognizer({
                debugOwner : this});
        },(instance : lib10.ForcePressGestureRecognizer) =>  {
            ((_) : lib10.ForcePressGestureRecognizer =>  {
                {
                    _.onStart = properties.onForcePressStart;
                    _.onPeak = properties.onForcePressPeak;
                    _.onUpdate = properties.onForcePressUpdate;
                    _.onEnd = properties.onForcePressEnd;
                    return _;
                }
            })(instance);
        }));
    }
    return RawGestureDetector({
        gestures : gestures,behavior : properties.behavior,excludeFromSemantics : properties.excludeFromSemantics,child : properties.child});
};
export var FlutterError : ( : any) => any = ( : any) =>  {
};
export var FlutterError : ( : any) => any = ( : any) =>  {
};
export namespace GestureRecognizerFactory {
    export type Constructors = 'GestureRecognizerFactory';
    export type Interface<T extends lib3.GestureRecognizer> = Omit<GestureRecognizerFactory<T extends lib3.GestureRecognizer>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
        arguments : [],namedArguments : {
        }}})
export class GestureRecognizerFactory<T extends lib3.GestureRecognizer> {
    constructor() {
    }
    @defaultConstructor
    GestureRecognizerFactory() {
    }
    @Abstract
    constructor() : T{ throw 'abstract'}
    @Abstract
    initializer(instance : T) : any{ throw 'abstract'}
    _debugAssertTypeMatches(type : core.Type) : boolean {
        /* TODO (AssertStatementImpl) : assert (type == T, 'GestureRecognizerFactory of type $T was used where type $type was specified.'); */;
        return true;
    }
}

export namespace GestureDetector {
    export type Constructors = lib4.StatelessWidget.Constructors | 'GestureDetector';
    export type Interface = Omit<GestureDetector, Constructors>;
}
@DartClass
export class GestureDetector extends lib4.StatelessWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : any,onTapDown? : any,onTapUp? : any,onTap? : any,onTapCancel? : any,onDoubleTap? : any,onLongPress? : any,onLongPressUp? : any,onLongPressDragStart? : any,onLongPressDragUpdate? : any,onLongPressDragUp? : any,onVerticalDragDown? : any,onVerticalDragStart? : any,onVerticalDragUpdate? : any,onVerticalDragEnd? : any,onVerticalDragCancel? : any,onHorizontalDragDown? : any,onHorizontalDragStart? : any,onHorizontalDragUpdate? : any,onHorizontalDragEnd? : any,onHorizontalDragCancel? : any,onForcePressStart? : any,onForcePressPeak? : any,onForcePressUpdate? : any,onForcePressEnd? : any,onPanDown? : any,onPanStart? : any,onPanUpdate? : any,onPanEnd? : any,onPanCancel? : any,onScaleStart? : any,onScaleUpdate? : any,onScaleEnd? : any,behavior? : any,excludeFromSemantics? : any,dragStartBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GestureDetector(_namedArguments? : {key? : lib5.Key,child? : any,onTapDown? : any,onTapUp? : any,onTap? : any,onTapCancel? : any,onDoubleTap? : any,onLongPress? : any,onLongPressUp? : any,onLongPressDragStart? : any,onLongPressDragUpdate? : any,onLongPressDragUp? : any,onVerticalDragDown? : any,onVerticalDragStart? : any,onVerticalDragUpdate? : any,onVerticalDragEnd? : any,onVerticalDragCancel? : any,onHorizontalDragDown? : any,onHorizontalDragStart? : any,onHorizontalDragUpdate? : any,onHorizontalDragEnd? : any,onHorizontalDragCancel? : any,onForcePressStart? : any,onForcePressPeak? : any,onForcePressUpdate? : any,onForcePressEnd? : any,onPanDown? : any,onPanStart? : any,onPanUpdate? : any,onPanEnd? : any,onPanCancel? : any,onScaleStart? : any,onScaleUpdate? : any,onScaleEnd? : any,behavior? : any,excludeFromSemantics? : any,dragStartBehavior? : any}) {
        let {key,child,onTapDown,onTapUp,onTap,onTapCancel,onDoubleTap,onLongPress,onLongPressUp,onLongPressDragStart,onLongPressDragUpdate,onLongPressDragUp,onVerticalDragDown,onVerticalDragStart,onVerticalDragUpdate,onVerticalDragEnd,onVerticalDragCancel,onHorizontalDragDown,onHorizontalDragStart,onHorizontalDragUpdate,onHorizontalDragEnd,onHorizontalDragCancel,onForcePressStart,onForcePressPeak,onForcePressUpdate,onForcePressEnd,onPanDown,onPanStart,onPanUpdate,onPanEnd,onPanCancel,onScaleStart,onScaleUpdate,onScaleEnd,behavior,excludeFromSemantics,dragStartBehavior} = Object.assign({
            "excludeFromSemantics" : false,
            "dragStartBehavior" : lib3.DragStartBehavior.down}, _namedArguments );
        this.haveVerticalDrag = properties.onVerticalDragStart != null || properties.onVerticalDragUpdate != null || properties.onVerticalDragEnd != null;
        this.haveHorizontalDrag = properties.onHorizontalDragStart != null || properties.onHorizontalDragUpdate != null || properties.onHorizontalDragEnd != null;
        this.havePan = properties.onPanStart != null || properties.onPanUpdate != null || properties.onPanEnd != null;
        this.haveScale = properties.onScaleStart != null || properties.onScaleUpdate != null || properties.onScaleEnd != null;
        this.haveLongPress = properties.onLongPress != null || properties.onLongPressUp != null;
        this.haveLongPressDrag = properties.onLongPressDragStart != null || properties.onLongPressDragUpdate != null || properties.onLongPressDragUp != null;
        this.assert = assert;
        this.child = child;
        this.onTapDown = onTapDown;
        this.onTapUp = onTapUp;
        this.onTap = onTap;
        this.onTapCancel = onTapCancel;
        this.onDoubleTap = onDoubleTap;
        this.onLongPress = onLongPress;
        this.onLongPressUp = onLongPressUp;
        this.onLongPressDragStart = onLongPressDragStart;
        this.onLongPressDragUpdate = onLongPressDragUpdate;
        this.onLongPressDragUp = onLongPressDragUp;
        this.onVerticalDragDown = onVerticalDragDown;
        this.onVerticalDragStart = onVerticalDragStart;
        this.onVerticalDragUpdate = onVerticalDragUpdate;
        this.onVerticalDragEnd = onVerticalDragEnd;
        this.onVerticalDragCancel = onVerticalDragCancel;
        this.onHorizontalDragDown = onHorizontalDragDown;
        this.onHorizontalDragStart = onHorizontalDragStart;
        this.onHorizontalDragUpdate = onHorizontalDragUpdate;
        this.onHorizontalDragEnd = onHorizontalDragEnd;
        this.onHorizontalDragCancel = onHorizontalDragCancel;
        this.onForcePressStart = onForcePressStart;
        this.onForcePressPeak = onForcePressPeak;
        this.onForcePressUpdate = onForcePressUpdate;
        this.onForcePressEnd = onForcePressEnd;
        this.onPanDown = onPanDown;
        this.onPanStart = onPanStart;
        this.onPanUpdate = onPanUpdate;
        this.onPanEnd = onPanEnd;
        this.onPanCancel = onPanCancel;
        this.onScaleStart = onScaleStart;
        this.onScaleUpdate = onScaleUpdate;
        this.onScaleEnd = onScaleEnd;
        this.behavior = behavior;
        this.excludeFromSemantics = excludeFromSemantics;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

    haveVerticalDrag : boolean;

    haveHorizontalDrag : boolean;

    havePan : boolean;

    haveScale : boolean;

    haveLongPress : boolean;

    haveLongPressDrag : boolean;

     : any;

     : any;

     : any;

     : any;

    FlutterError( : any) {
    }
}

export namespace RawGestureDetector {
    export type Constructors = lib4.StatefulWidget.Constructors | 'RawGestureDetector';
    export type Interface = Omit<RawGestureDetector, Constructors>;
}
@DartClass
export class RawGestureDetector extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,gestures? : core.DartMap<core.Type,GestureRecognizerFactory<any>>,behavior? : any,excludeFromSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawGestureDetector(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,gestures? : core.DartMap<core.Type,GestureRecognizerFactory<any>>,behavior? : any,excludeFromSemantics? : boolean}) {
        let {key,child,gestures,behavior,excludeFromSemantics} = Object.assign({
            "gestures" : new core.DartMap.literal([
            ]),
            "excludeFromSemantics" : false}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.gestures = gestures;
        this.behavior = behavior;
        this.excludeFromSemantics = excludeFromSemantics;
    }
     : any;

     : any;

     : any;

     : any;

    child : lib4.Widget;

    gestures : core.DartMap<core.Type,GestureRecognizerFactory<any>>;

    behavior : any;

    excludeFromSemantics : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : RawGestureDetectorState {
        return RawGestureDetectorState();
    }
}

export namespace RawGestureDetectorState {
    export type Constructors = lib4.State.Constructors | 'RawGestureDetectorState';
    export type Interface = Omit<RawGestureDetectorState, Constructors>;
}
@DartClass
export class RawGestureDetectorState extends lib4.State<RawGestureDetector> {
    _recognizers : core.DartMap<core.Type,lib3.GestureRecognizer>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._syncAll(this.widget.gestures);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : RawGestureDetector) : any {
        super.didUpdateWidget(oldWidget);
        this._syncAll(this.widget.gestures);
    }
    replaceGestureRecognizers(gestures : core.DartMap<core.Type,GestureRecognizerFactory<any>>) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (!context.findRenderObject().owner.debugDoingLayout) {throw FlutterError('Unexpected call to replaceGestureRecognizers() method of RawGestureDetectorState.\n' 'The replaceGestureRecognizers() method can only be called during the layout phase. ' 'To set the gesture recognizers at other times, trigger a new build using setState() ' 'and provide the new gesture recognizers as constructor arguments to the corresponding ' 'RawGestureDetector or GestureDetector object.');} return true;}()); */;
        this._syncAll(gestures);
        if (!this.widget.excludeFromSemantics) {
            let semanticsGestureHandler : lib14.RenderSemanticsGestureHandler = this.context.findRenderObject();
            this.context.visitChildElements((element : lib4.Element) =>  {
                let widget : _GestureSemantics = element.widget;
                widget._updateHandlers(semanticsGestureHandler);
            });
        }
    }
    replaceSemanticsActions(actions : core.DartSet<any>) : any {
        /* TODO (AssertStatementImpl) : assert (() {final Element element = context; if (element.owner.debugBuilding) {throw FlutterError('Unexpected call to replaceSemanticsActions() method of RawGestureDetectorState.\n' 'The replaceSemanticsActions() method can only be called outside of the build phase.');} return true;}()); */;
        if (!this.widget.excludeFromSemantics) {
            let semanticsGestureHandler : lib14.RenderSemanticsGestureHandler = this.context.findRenderObject();
            semanticsGestureHandler.validActions = actions;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let recognizer of this._recognizers.values) recognizer.dispose();
        this._recognizers = null;
        super.dispose();
    }
    _syncAll(gestures : core.DartMap<core.Type,GestureRecognizerFactory<any>>) : any {
        /* TODO (AssertStatementImpl) : assert (_recognizers != null); */;
        let oldRecognizers : core.DartMap<core.Type,lib3.GestureRecognizer> = this._recognizers;
        this._recognizers = new core.DartMap.literal([
        ]);
        for(let type of gestures.keys) {
            /* TODO (AssertStatementImpl) : assert (gestures[type] != null); */;
            /* TODO (AssertStatementImpl) : assert (gestures[type]._debugAssertTypeMatches(type)); */;
            /* TODO (AssertStatementImpl) : assert (!_recognizers.containsKey(type)); */;
            this._recognizers.set(type,(oldRecognizers.get(type) || gestures.get(type).constructor()));
            /* TODO (AssertStatementImpl) : assert (_recognizers[type].runtimeType == type, 'GestureRecognizerFactory of type $type created a GestureRecognizer of type ${_recognizers[type].runtimeType}. The GestureRecognizerFactory must be specialized with the type of the class that it returns from its constructor method.'); */;
            gestures.get(type).initializer(this._recognizers.get(type));
        }
        for(let type of oldRecognizers.keys) {
            if (!this._recognizers.containsKey(type)) oldRecognizers.get(type).dispose();
        }
    }
    _handlePointerDown(event : lib15.PointerDownEvent) : any {
        /* TODO (AssertStatementImpl) : assert (_recognizers != null); */;
        for(let recognizer of this._recognizers.values) recognizer.addPointer(event);
    }
    get _defaultBehavior() : any {
        return op(Op.EQUALS,this.widget.child,null) ? HitTestBehavior.translucent : HitTestBehavior.deferToChild;
    }
    _handleSemanticsTap() : any {
        let recognizer : lib6.TapGestureRecognizer = this._recognizers.get(lib6.TapGestureRecognizer);
        /* TODO (AssertStatementImpl) : assert (recognizer != null); */;
        if (recognizer.onTapDown != null) recognizer.onTapDown(lib6.TapDownDetails());
        if (recognizer.onTapUp != null) recognizer.onTapUp(lib6.TapUpDetails());
        if (recognizer.onTap != null) recognizer.onTap();
    }
    _handleSemanticsLongPress() : any {
        let recognizer : lib7.LongPressGestureRecognizer = this._recognizers.get(lib7.LongPressGestureRecognizer);
        /* TODO (AssertStatementImpl) : assert (recognizer != null); */;
        if (recognizer.onLongPress != null) recognizer.onLongPress();
    }
    _handleSemanticsHorizontalDragUpdate(updateDetails : lib8.DragUpdateDetails) : any {
        {
            let recognizer : lib12.HorizontalDragGestureRecognizer = this._recognizers.get(lib12.HorizontalDragGestureRecognizer);
            if (recognizer != null) {
                if (recognizer.onDown != null) recognizer.onDown(lib8.DragDownDetails());
                if (recognizer.onStart != null) recognizer.onStart(lib8.DragStartDetails());
                if (recognizer.onUpdate != null) recognizer.onUpdate(updateDetails);
                if (recognizer.onEnd != null) recognizer.onEnd(lib8.DragEndDetails({
                    primaryVelocity : 0.0}));
                return;
            }
        }
        {
            let recognizer : lib12.PanGestureRecognizer = this._recognizers.get(lib12.PanGestureRecognizer);
            if (recognizer != null) {
                if (recognizer.onDown != null) recognizer.onDown(lib8.DragDownDetails());
                if (recognizer.onStart != null) recognizer.onStart(lib8.DragStartDetails());
                if (recognizer.onUpdate != null) recognizer.onUpdate(updateDetails);
                if (recognizer.onEnd != null) recognizer.onEnd(lib8.DragEndDetails());
                return;
            }
        }
    }
    _handleSemanticsVerticalDragUpdate(updateDetails : lib8.DragUpdateDetails) : any {
        {
            let recognizer : lib12.VerticalDragGestureRecognizer = this._recognizers.get(lib12.VerticalDragGestureRecognizer);
            if (recognizer != null) {
                if (recognizer.onDown != null) recognizer.onDown(lib8.DragDownDetails());
                if (recognizer.onStart != null) recognizer.onStart(lib8.DragStartDetails());
                if (recognizer.onUpdate != null) recognizer.onUpdate(updateDetails);
                if (recognizer.onEnd != null) recognizer.onEnd(lib8.DragEndDetails({
                    primaryVelocity : 0.0}));
                return;
            }
        }
        {
            let recognizer : lib12.PanGestureRecognizer = this._recognizers.get(lib12.PanGestureRecognizer);
            if (recognizer != null) {
                if (recognizer.onDown != null) recognizer.onDown(lib8.DragDownDetails());
                if (recognizer.onStart != null) recognizer.onStart(lib8.DragStartDetails());
                if (recognizer.onUpdate != null) recognizer.onUpdate(updateDetails);
                if (recognizer.onEnd != null) recognizer.onEnd(lib8.DragEndDetails());
                return;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let result : lib4.Widget = lib16.Listener({
            onPointerDown : this._handlePointerDown.bind(this),behavior : (this.widget.behavior || this._defaultBehavior),child : this.widget.child});
        if (!this.widget.excludeFromSemantics) result = _GestureSemantics({
            owner : this,child : result});
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib13.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        if (this._recognizers == null) {
            properties.add(lib13.DiagnosticsNode.message('DISPOSED'));
        }else {
            let gestures : core.DartList<string> = this._recognizers.values.map((recognizer : lib3.GestureRecognizer) =>  {
                return recognizer.debugDescription;
            }).toList();
            properties.add(lib13.IterableProperty('gestures',gestures,{
                ifEmpty : '<none>'}));
            properties.add(lib13.IterableProperty('recognizers',this._recognizers.values,{
                level : lib13.DiagnosticLevel.fine}));
        }
        properties.add(lib13.EnumProperty('behavior',this.widget.behavior,{
            defaultValue : null}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawGestureDetectorState() {
        this._recognizers = new core.DartMap.literal([
        ]);
    }
}

export namespace _GestureSemantics {
    export type Constructors = lib4.SingleChildRenderObjectWidget.Constructors | '_GestureSemantics';
    export type Interface = Omit<_GestureSemantics, Constructors>;
}
@DartClass
export class _GestureSemantics extends lib4.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,owner? : RawGestureDetectorState}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _GestureSemantics(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,owner? : RawGestureDetectorState}) {
        let {key,child,owner} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.owner = owner;
    }
    owner : RawGestureDetectorState;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib4.BuildContext) : lib14.RenderSemanticsGestureHandler {
        return lib14.RenderSemanticsGestureHandler({
            onTap : this._onTapHandler,onLongPress : this._onLongPressHandler,onHorizontalDragUpdate : this._onHorizontalDragUpdateHandler,onVerticalDragUpdate : this._onVerticalDragUpdateHandler});
    }
    _updateHandlers(renderObject : lib14.RenderSemanticsGestureHandler) : any {
        ((_) : lib14.RenderSemanticsGestureHandler =>  {
            {
                _.onTap = this._onTapHandler;
                _.onLongPress = this._onLongPressHandler;
                _.onHorizontalDragUpdate = this._onHorizontalDragUpdateHandler;
                _.onVerticalDragUpdate = this._onVerticalDragUpdateHandler;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib4.BuildContext,renderObject : lib14.RenderSemanticsGestureHandler) : any {
        this._updateHandlers(renderObject);
    }
    get _onTapHandler() : () => any {
        return this.owner._recognizers.containsKey(lib6.TapGestureRecognizer) ? this.owner._handleSemanticsTap.bind(this.owner) : null;
    }
    get _onLongPressHandler() : () => any {
        return this.owner._recognizers.containsKey(lib7.LongPressGestureRecognizer) ? this.owner._handleSemanticsLongPress.bind(this.owner) : null;
    }
    get _onHorizontalDragUpdateHandler() : (details : lib8.DragUpdateDetails) => any {
        return this.owner._recognizers.containsKey(lib12.HorizontalDragGestureRecognizer) || this.owner._recognizers.containsKey(lib12.PanGestureRecognizer) ? this.owner._handleSemanticsHorizontalDragUpdate.bind(this.owner) : null;
    }
    get _onVerticalDragUpdateHandler() : (details : lib8.DragUpdateDetails) => any {
        return this.owner._recognizers.containsKey(lib12.VerticalDragGestureRecognizer) || this.owner._recognizers.containsKey(lib12.PanGestureRecognizer) ? this.owner._handleSemanticsVerticalDragUpdate.bind(this.owner) : null;
    }
}

export namespace GestureRecognizerFactoryWithHandlers {
    export type Constructors = GestureRecognizerFactory.Constructors | 'GestureRecognizerFactoryWithHandlers';
    export type Interface<T extends lib3.GestureRecognizer> = Omit<GestureRecognizerFactoryWithHandlers<T extends lib3.GestureRecognizer>, Constructors>;
}
@DartClass
export class GestureRecognizerFactoryWithHandlers<T extends lib3.GestureRecognizer> extends GestureRecognizerFactory<T> {
    constructor(_constructor : <T extends lib3.GestureRecognizer>() => T,_initializer : <T extends lib3.GestureRecognizer>(instance : T) => any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GestureRecognizerFactoryWithHandlers(_constructor : <T extends lib3.GestureRecognizer>() => T,_initializer : <T extends lib3.GestureRecognizer>(instance : T) => any) {
        this.assert = assert;
        this._constructor = _constructor;
        this._initializer = _initializer;
    }
     : any;

     : any;

    _constructor : <T extends lib3.GestureRecognizer>() => T;

    _initializer : <T extends lib3.GestureRecognizer>(instance : T) => any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    constructor() : T {
        return this._constructor();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initializer(instance : T) : any {
        return this._initializer(instance);
    }
}

export class properties {
    private static __$onTapCancel : () => any;
    static get onTapCancel() : () => any { 
        return this.__$onTapCancel;
    }
    static set onTapCancel(__$value : () => any)  { 
        this.__$onTapCancel = __$value;
    }

    private static __$recognizer : string;
    static get recognizer() : string { 
        if (this.__$recognizer===undefined) {
            this.__$recognizer = havePan ? 'pan' : 'scale';
        }
        return this.__$recognizer;
    }
    static set recognizer(__$value : string)  { 
        this.__$recognizer = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$child : lib4.Widget;
    static get child() : lib4.Widget { 
        return this.__$child;
    }
    static set child(__$value : lib4.Widget)  { 
        this.__$child = __$value;
    }

    private static __$onTapDown : (details : lib6.TapDownDetails) => any;
    static get onTapDown() : (details : lib6.TapDownDetails) => any { 
        return this.__$onTapDown;
    }
    static set onTapDown(__$value : (details : lib6.TapDownDetails) => any)  { 
        this.__$onTapDown = __$value;
    }

    private static __$onTapUp : (details : lib6.TapUpDetails) => any;
    static get onTapUp() : (details : lib6.TapUpDetails) => any { 
        return this.__$onTapUp;
    }
    static set onTapUp(__$value : (details : lib6.TapUpDetails) => any)  { 
        this.__$onTapUp = __$value;
    }

    private static __$onTap : () => any;
    static get onTap() : () => any { 
        return this.__$onTap;
    }
    static set onTap(__$value : () => any)  { 
        this.__$onTap = __$value;
    }

    private static __$dragStartBehavior : lib3.DragStartBehavior;
    static get dragStartBehavior() : lib3.DragStartBehavior { 
        return this.__$dragStartBehavior;
    }
    static set dragStartBehavior(__$value : lib3.DragStartBehavior)  { 
        this.__$dragStartBehavior = __$value;
    }

    private static __$onDoubleTap : () => any;
    static get onDoubleTap() : () => any { 
        return this.__$onDoubleTap;
    }
    static set onDoubleTap(__$value : () => any)  { 
        this.__$onDoubleTap = __$value;
    }

    private static __$onLongPress : () => void;
    static get onLongPress() : () => void { 
        return this.__$onLongPress;
    }
    static set onLongPress(__$value : () => void)  { 
        this.__$onLongPress = __$value;
    }

    private static __$onLongPressUp : () => void;
    static get onLongPressUp() : () => void { 
        return this.__$onLongPressUp;
    }
    static set onLongPressUp(__$value : () => void)  { 
        this.__$onLongPressUp = __$value;
    }

    private static __$onLongPressDragStart : (details : lib7.GestureLongPressDragStartDetails) => void;
    static get onLongPressDragStart() : (details : lib7.GestureLongPressDragStartDetails) => void { 
        return this.__$onLongPressDragStart;
    }
    static set onLongPressDragStart(__$value : (details : lib7.GestureLongPressDragStartDetails) => void)  { 
        this.__$onLongPressDragStart = __$value;
    }

    private static __$onLongPressDragUpdate : (details : lib7.GestureLongPressDragUpdateDetails) => void;
    static get onLongPressDragUpdate() : (details : lib7.GestureLongPressDragUpdateDetails) => void { 
        return this.__$onLongPressDragUpdate;
    }
    static set onLongPressDragUpdate(__$value : (details : lib7.GestureLongPressDragUpdateDetails) => void)  { 
        this.__$onLongPressDragUpdate = __$value;
    }

    private static __$onLongPressDragUp : (details : lib7.GestureLongPressDragUpDetails) => void;
    static get onLongPressDragUp() : (details : lib7.GestureLongPressDragUpDetails) => void { 
        return this.__$onLongPressDragUp;
    }
    static set onLongPressDragUp(__$value : (details : lib7.GestureLongPressDragUpDetails) => void)  { 
        this.__$onLongPressDragUp = __$value;
    }

    private static __$onVerticalDragDown : (details : lib8.DragDownDetails) => any;
    static get onVerticalDragDown() : (details : lib8.DragDownDetails) => any { 
        return this.__$onVerticalDragDown;
    }
    static set onVerticalDragDown(__$value : (details : lib8.DragDownDetails) => any)  { 
        this.__$onVerticalDragDown = __$value;
    }

    private static __$onVerticalDragStart : (details : lib8.DragStartDetails) => any;
    static get onVerticalDragStart() : (details : lib8.DragStartDetails) => any { 
        return this.__$onVerticalDragStart;
    }
    static set onVerticalDragStart(__$value : (details : lib8.DragStartDetails) => any)  { 
        this.__$onVerticalDragStart = __$value;
    }

    private static __$onVerticalDragUpdate : (details : lib8.DragUpdateDetails) => any;
    static get onVerticalDragUpdate() : (details : lib8.DragUpdateDetails) => any { 
        return this.__$onVerticalDragUpdate;
    }
    static set onVerticalDragUpdate(__$value : (details : lib8.DragUpdateDetails) => any)  { 
        this.__$onVerticalDragUpdate = __$value;
    }

    private static __$onVerticalDragEnd : (details : lib8.DragEndDetails) => any;
    static get onVerticalDragEnd() : (details : lib8.DragEndDetails) => any { 
        return this.__$onVerticalDragEnd;
    }
    static set onVerticalDragEnd(__$value : (details : lib8.DragEndDetails) => any)  { 
        this.__$onVerticalDragEnd = __$value;
    }

    private static __$onVerticalDragCancel : () => any;
    static get onVerticalDragCancel() : () => any { 
        return this.__$onVerticalDragCancel;
    }
    static set onVerticalDragCancel(__$value : () => any)  { 
        this.__$onVerticalDragCancel = __$value;
    }

    private static __$onHorizontalDragDown : (details : lib8.DragDownDetails) => any;
    static get onHorizontalDragDown() : (details : lib8.DragDownDetails) => any { 
        return this.__$onHorizontalDragDown;
    }
    static set onHorizontalDragDown(__$value : (details : lib8.DragDownDetails) => any)  { 
        this.__$onHorizontalDragDown = __$value;
    }

    private static __$onHorizontalDragStart : (details : lib8.DragStartDetails) => any;
    static get onHorizontalDragStart() : (details : lib8.DragStartDetails) => any { 
        return this.__$onHorizontalDragStart;
    }
    static set onHorizontalDragStart(__$value : (details : lib8.DragStartDetails) => any)  { 
        this.__$onHorizontalDragStart = __$value;
    }

    private static __$onHorizontalDragUpdate : (details : lib8.DragUpdateDetails) => any;
    static get onHorizontalDragUpdate() : (details : lib8.DragUpdateDetails) => any { 
        return this.__$onHorizontalDragUpdate;
    }
    static set onHorizontalDragUpdate(__$value : (details : lib8.DragUpdateDetails) => any)  { 
        this.__$onHorizontalDragUpdate = __$value;
    }

    private static __$onHorizontalDragEnd : (details : lib8.DragEndDetails) => any;
    static get onHorizontalDragEnd() : (details : lib8.DragEndDetails) => any { 
        return this.__$onHorizontalDragEnd;
    }
    static set onHorizontalDragEnd(__$value : (details : lib8.DragEndDetails) => any)  { 
        this.__$onHorizontalDragEnd = __$value;
    }

    private static __$onHorizontalDragCancel : () => any;
    static get onHorizontalDragCancel() : () => any { 
        return this.__$onHorizontalDragCancel;
    }
    static set onHorizontalDragCancel(__$value : () => any)  { 
        this.__$onHorizontalDragCancel = __$value;
    }

    private static __$onPanDown : (details : lib8.DragDownDetails) => any;
    static get onPanDown() : (details : lib8.DragDownDetails) => any { 
        return this.__$onPanDown;
    }
    static set onPanDown(__$value : (details : lib8.DragDownDetails) => any)  { 
        this.__$onPanDown = __$value;
    }

    private static __$excludeFromSemantics : boolean;
    static get excludeFromSemantics() : boolean { 
        return this.__$excludeFromSemantics;
    }
    static set excludeFromSemantics(__$value : boolean)  { 
        this.__$excludeFromSemantics = __$value;
    }

    private static __$onPanUpdate : (details : lib8.DragUpdateDetails) => any;
    static get onPanUpdate() : (details : lib8.DragUpdateDetails) => any { 
        return this.__$onPanUpdate;
    }
    static set onPanUpdate(__$value : (details : lib8.DragUpdateDetails) => any)  { 
        this.__$onPanUpdate = __$value;
    }

    private static __$onPanEnd : (details : lib8.DragEndDetails) => any;
    static get onPanEnd() : (details : lib8.DragEndDetails) => any { 
        return this.__$onPanEnd;
    }
    static set onPanEnd(__$value : (details : lib8.DragEndDetails) => any)  { 
        this.__$onPanEnd = __$value;
    }

    private static __$onPanCancel : () => any;
    static get onPanCancel() : () => any { 
        return this.__$onPanCancel;
    }
    static set onPanCancel(__$value : () => any)  { 
        this.__$onPanCancel = __$value;
    }

    private static __$onScaleStart : (details : lib9.ScaleStartDetails) => void;
    static get onScaleStart() : (details : lib9.ScaleStartDetails) => void { 
        return this.__$onScaleStart;
    }
    static set onScaleStart(__$value : (details : lib9.ScaleStartDetails) => void)  { 
        this.__$onScaleStart = __$value;
    }

    private static __$onScaleUpdate : (details : lib9.ScaleUpdateDetails) => void;
    static get onScaleUpdate() : (details : lib9.ScaleUpdateDetails) => void { 
        return this.__$onScaleUpdate;
    }
    static set onScaleUpdate(__$value : (details : lib9.ScaleUpdateDetails) => void)  { 
        this.__$onScaleUpdate = __$value;
    }

    private static __$onScaleEnd : (details : lib9.ScaleEndDetails) => void;
    static get onScaleEnd() : (details : lib9.ScaleEndDetails) => void { 
        return this.__$onScaleEnd;
    }
    static set onScaleEnd(__$value : (details : lib9.ScaleEndDetails) => void)  { 
        this.__$onScaleEnd = __$value;
    }

    private static __$onForcePressStart : (details : lib10.ForcePressDetails) => any;
    static get onForcePressStart() : (details : lib10.ForcePressDetails) => any { 
        return this.__$onForcePressStart;
    }
    static set onForcePressStart(__$value : (details : lib10.ForcePressDetails) => any)  { 
        this.__$onForcePressStart = __$value;
    }

    private static __$onForcePressPeak : (details : lib10.ForcePressDetails) => any;
    static get onForcePressPeak() : (details : lib10.ForcePressDetails) => any { 
        return this.__$onForcePressPeak;
    }
    static set onForcePressPeak(__$value : (details : lib10.ForcePressDetails) => any)  { 
        this.__$onForcePressPeak = __$value;
    }

    private static __$onForcePressUpdate : (details : lib10.ForcePressDetails) => any;
    static get onForcePressUpdate() : (details : lib10.ForcePressDetails) => any { 
        return this.__$onForcePressUpdate;
    }
    static set onForcePressUpdate(__$value : (details : lib10.ForcePressDetails) => any)  { 
        this.__$onForcePressUpdate = __$value;
    }

    private static __$onForcePressEnd : (details : lib10.ForcePressDetails) => any;
    static get onForcePressEnd() : (details : lib10.ForcePressDetails) => any { 
        return this.__$onForcePressEnd;
    }
    static set onForcePressEnd(__$value : (details : lib10.ForcePressDetails) => any)  { 
        this.__$onForcePressEnd = __$value;
    }

    private static __$behavior : any;
    static get behavior() : any { 
        return this.__$behavior;
    }
    static set behavior(__$value : any)  { 
        this.__$behavior = __$value;
    }

    private static __$onPanStart : (details : lib8.DragStartDetails) => any;
    static get onPanStart() : (details : lib8.DragStartDetails) => any { 
        return this.__$onPanStart;
    }
    static set onPanStart(__$value : (details : lib8.DragStartDetails) => any)  { 
        this.__$onPanStart = __$value;
    }

}
