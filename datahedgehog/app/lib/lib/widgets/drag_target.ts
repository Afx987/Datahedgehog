/** Library asset:datahedgehog_monitor/lib/lib/widgets/drag_target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/velocity_tracker";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/gestures/drag";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/multidrag";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/services/haptic_feedback";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib12 from "./overlay";
import * as lib13 from "./basic";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib16 from "./binding";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";

export var _mapAvatarsToData : <T>(avatars : core.DartList<_DragAvatar<T>>) => core.DartList<T> = <T>(avatars : core.DartList<_DragAvatar<T>>) : core.DartList<T> =>  {
    return avatars.map((avatar : _DragAvatar<T>) =>  {
        return avatar.data;
    }).toList();
};
export var update : (details : lib14.DragUpdateDetails) => any = (details : lib14.DragUpdateDetails) : any =>  {
    properties._position += _restrictAxis(details.delta);
    updateDrag(properties._position);
};
export var end : (details : lib14.DragEndDetails) => any = (details : lib14.DragEndDetails) : any =>  {
    finishDrag(_DragEndKind.dropped,_restrictVelocityAxis(details.velocity));
};
export var cancel : () => any = () : any =>  {
    finishDrag(_DragEndKind.canceled);
};
export var updateDrag : (globalPosition : any) => any = (globalPosition : any) : any =>  {
    properties._lastOffset = op(Op.MINUS,globalPosition,properties.dragStartPoint);
    properties._entry.markNeedsBuild();
    let result : lib15.HitTestResult = lib15.HitTestResult();
    lib16.properties.WidgetsBinding.instance.hitTest(result,op(Op.PLUS,globalPosition,properties.feedbackOffset));
    let targets : core.DartList<_DragTargetState<any>> = _getDragTargets(result.path).toList();
    let listsMatch : boolean = false;
    if (targets.length >= properties._enteredTargets.length && properties._enteredTargets.isNotEmpty) {
        listsMatch = true;
        let iterator : core.DartIterator<_DragTargetState<any>> = targets.iterator;
        for(let i : number = 0; i < properties._enteredTargets.length; i += 1){
            iterator.moveNext();
            if (iterator.current != properties._enteredTargets[i]) {
                listsMatch = false;
                break;
            }
        }
    }
    if (listsMatch) return;
    _leaveAllEntered();
    let newTarget : _DragTargetState<any> = targets.firstWhere((target : _DragTargetState<any>) =>  {
        properties._enteredTargets.add(target);
        return target.didEnter(this);
    },{
        orElse : () =>  {
            return null;
        }});
    properties._activeTarget = newTarget;
};
export var _getDragTargets : (path : core.DartList<lib15.HitTestEntry>) => core.DartIterable<_DragTargetState<any>> = (path : core.DartList<lib15.HitTestEntry>) : core.DartIterable<_DragTargetState<any>> => core.iter<_DragTargetState<any>>(()=>(function*()  {
    for(let entry of path) {
        if (is(entry.target, lib17.RenderMetaData)) {
            let renderMetaData : lib17.RenderMetaData = entry.target;
            if (is(renderMetaData.metaData, _DragTargetState<any>)) yield renderMetaData.metaData;
        }
    }
}).call(this));
export var _leaveAllEntered : () => any = () : any =>  {
    for(let i : number = 0; i < properties._enteredTargets.length; i += 1)properties._enteredTargets[i].didLeave(this);
    properties._enteredTargets.clear();
};
export var finishDrag : (endKind : _DragEndKind,velocity? : lib6.Velocity) => any = (endKind : _DragEndKind,velocity? : lib6.Velocity) : any =>  {
    let wasAccepted : boolean = false;
    if (op(Op.EQUALS,endKind,_DragEndKind.dropped) && properties._activeTarget != null) {
        properties._activeTarget.didDrop(this);
        wasAccepted = true;
        properties._enteredTargets.remove(properties._activeTarget);
    }
    _leaveAllEntered();
    properties._activeTarget = null;
    properties._entry.remove();
    properties._entry = null;
    if (properties.onDragEnd != null) properties.onDragEnd((velocity || lib6.Velocity.zero),properties._lastOffset,wasAccepted);
};
export var _build : (context : lib3.BuildContext) => lib3.Widget = (context : lib3.BuildContext) : lib3.Widget =>  {
    let box : any = properties.overlayState.context.findRenderObject();
    let overlayTopLeft : any = box.localToGlobal(Offset.zero);
    return lib13.Positioned({
        left : op(Op.MINUS,properties._lastOffset.dx,overlayTopLeft.dx),top : op(Op.MINUS,properties._lastOffset.dy,overlayTopLeft.dy),child : lib13.IgnorePointer({
            child : properties.feedback,ignoringSemantics : properties.ignoringFeedbackSemantics})});
};
export var _restrictVelocityAxis : (velocity : lib6.Velocity) => lib6.Velocity = (velocity : lib6.Velocity) : lib6.Velocity =>  {
    if (op(Op.EQUALS,properties.axis,null)) {
        return velocity;
    }
    return lib6.Velocity({
        pixelsPerSecond : _restrictAxis(velocity.pixelsPerSecond)});
};
export var _restrictAxis : (offset : any) => any = (offset : any) : any =>  {
    if (op(Op.EQUALS,properties.axis,null)) {
        return offset;
    }
    if (op(Op.EQUALS,properties.axis,lib5.Axis.horizontal)) {
        return Offset(offset.dx,0.0);
    }
    return Offset(0.0,offset.dy);
};
export enum DragAnchor {
    child,
    pointer
}

export namespace Draggable {
    export type Constructors = lib3.StatefulWidget.Constructors | 'Draggable';
    export type Interface<T> = Omit<Draggable<T>, Constructors>;
}
@DartClass
export class Draggable<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,feedback? : lib3.Widget,data? : T,axis? : lib5.Axis,childWhenDragging? : lib3.Widget,feedbackOffset? : any,dragAnchor? : DragAnchor,affinity? : lib5.Axis,maxSimultaneousDrags? : number,onDragStarted? : any,onDraggableCanceled? : (velocity : lib6.Velocity,offset : any) => any,onDragEnd? : (details : DraggableDetails) => any,onDragCompleted? : any,ignoringFeedbackSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Draggable(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,feedback? : lib3.Widget,data? : T,axis? : lib5.Axis,childWhenDragging? : lib3.Widget,feedbackOffset? : any,dragAnchor? : DragAnchor,affinity? : lib5.Axis,maxSimultaneousDrags? : number,onDragStarted? : any,onDraggableCanceled? : (velocity : lib6.Velocity,offset : any) => any,onDragEnd? : (details : DraggableDetails) => any,onDragCompleted? : any,ignoringFeedbackSemantics? : boolean}) {
        let {key,child,feedback,data,axis,childWhenDragging,feedbackOffset,dragAnchor,affinity,maxSimultaneousDrags,onDragStarted,onDraggableCanceled,onDragEnd,onDragCompleted,ignoringFeedbackSemantics} = Object.assign({
            "feedbackOffset" : Offset.zero,
            "dragAnchor" : DragAnchor.child,
            "ignoringFeedbackSemantics" : true}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.feedback = feedback;
        this.data = data;
        this.axis = axis;
        this.childWhenDragging = childWhenDragging;
        this.feedbackOffset = feedbackOffset;
        this.dragAnchor = dragAnchor;
        this.affinity = affinity;
        this.maxSimultaneousDrags = maxSimultaneousDrags;
        this.onDragStarted = onDragStarted;
        this.onDraggableCanceled = onDraggableCanceled;
        this.onDragEnd = onDragEnd;
        this.onDragCompleted = onDragCompleted;
        this.ignoringFeedbackSemantics = ignoringFeedbackSemantics;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    data : T;

    axis : lib5.Axis;

    child : lib3.Widget;

    childWhenDragging : lib3.Widget;

    feedback : lib3.Widget;

    feedbackOffset : any;

    dragAnchor : DragAnchor;

    ignoringFeedbackSemantics : boolean;

    affinity : lib5.Axis;

    maxSimultaneousDrags : number;

    onDragStarted : any;

    onDraggableCanceled : (velocity : lib6.Velocity,offset : any) => any;

    onDragCompleted : any;

    onDragEnd : (details : DraggableDetails) => any;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    createRecognizer(onStart : (position : any) => lib7.Drag) : lib8.MultiDragGestureRecognizer<lib8.MultiDragPointerState> {
        switch (this.affinity) {
            case lib5.Axis.horizontal:
                return ((_) : any =>  {
                    {
                        _.onStart = onStart;
                        return _;
                    }
                })(lib8.HorizontalMultiDragGestureRecognizer());
            case lib5.Axis.vertical:
                return ((_) : any =>  {
                    {
                        _.onStart = onStart;
                        return _;
                    }
                })(lib8.VerticalMultiDragGestureRecognizer());
        }
        return ((_) : any =>  {
            {
                _.onStart = onStart;
                return _;
            }
        })(lib8.ImmediateMultiDragGestureRecognizer());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DraggableState<T> {
        return _DraggableState();
    }
}

export namespace _DraggableState {
    export type Constructors = lib3.State.Constructors | '_DraggableState';
    export type Interface<T> = Omit<_DraggableState<T>, Constructors>;
}
@DartClass
export class _DraggableState<T> extends lib3.State<Draggable<T>> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._recognizer = this.widget.createRecognizer(this._startDrag.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._disposeRecognizerIfInactive();
        super.dispose();
    }
    _recognizer : lib10.GestureRecognizer;

    _activeCount : number;

    _disposeRecognizerIfInactive() : any {
        if (this._activeCount > 0) return;
        this._recognizer.dispose();
        this._recognizer = null;
    }
    _routePointer(event : lib11.PointerEvent) : any {
        if (this.widget.maxSimultaneousDrags != null && this._activeCount >= this.widget.maxSimultaneousDrags) return;
        this._recognizer.addPointer(event);
    }
    _startDrag(position : any) : _DragAvatar<T> {
        if (this.widget.maxSimultaneousDrags != null && this._activeCount >= this.widget.maxSimultaneousDrags) return null;
        let dragStartPoint : any;
        switch (this.widget.dragAnchor) {
            case DragAnchor.child:
                let renderObject : any = this.context.findRenderObject();
                dragStartPoint = renderObject.globalToLocal(position);
                break;
            case DragAnchor.pointer:
                dragStartPoint = Offset.zero;
                break;
        }
        this.setState(() =>  {
            this._activeCount += 1;
        });
        let avatar : _DragAvatar<T> = _DragAvatar({
            overlayState : lib12.Overlay.of(this.context,{
                debugRequiredFor : this.widget}),data : this.widget.data,axis : this.widget.axis,initialPosition : position,dragStartPoint : dragStartPoint,feedback : this.widget.feedback,feedbackOffset : this.widget.feedbackOffset,ignoringFeedbackSemantics : this.widget.ignoringFeedbackSemantics,onDragEnd : (velocity : lib6.Velocity,offset : any,wasAccepted : boolean) =>  {
                if (this.mounted) {
                    this.setState(() =>  {
                        this._activeCount -= 1;
                    });
                }else {
                    this._activeCount -= 1;
                    this._disposeRecognizerIfInactive();
                }
                if (this.mounted && this.widget.onDragEnd != null) {
                    this.widget.onDragEnd(DraggableDetails({
                        wasAccepted : wasAccepted,velocity : velocity,offset : offset}));
                }
                if (wasAccepted && this.widget.onDragCompleted != null) this.widget.onDragCompleted();
                if (!wasAccepted && this.widget.onDraggableCanceled != null) this.widget.onDraggableCanceled(velocity,offset);
            }});
        if (this.widget.onDragStarted != null) this.widget.onDragStarted();
        return avatar;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (Overlay.of(context, debugRequiredFor: widget) != null); */;
        let canDrag : boolean = this.widget.maxSimultaneousDrags == null || this._activeCount < this.widget.maxSimultaneousDrags;
        let showChild : boolean = this._activeCount == 0 || op(Op.EQUALS,this.widget.childWhenDragging,null);
        return lib13.Listener({
            onPointerDown : canDrag ? this._routePointer.bind(this) : null,child : showChild ? this.widget.child : this.widget.childWhenDragging});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DraggableState() {
        this._activeCount = 0;
    }
}

export namespace DraggableDetails {
    export type Constructors = 'DraggableDetails';
    export type Interface = Omit<DraggableDetails, Constructors>;
}
@DartClass
export class DraggableDetails {
    constructor(_namedArguments? : {wasAccepted? : boolean,velocity? : lib6.Velocity,offset? : any}) {
    }
    @defaultConstructor
    DraggableDetails(_namedArguments? : {wasAccepted? : boolean,velocity? : lib6.Velocity,offset? : any}) {
        let {wasAccepted,velocity,offset} = Object.assign({
            "wasAccepted" : false}, _namedArguments );
        this.assert = assert;
        this.wasAccepted = wasAccepted;
        this.velocity = velocity;
        this.offset = offset;
    }
     : any;

     : any;

    wasAccepted : boolean;

    velocity : lib6.Velocity;

    offset : any;

}

export namespace DragTarget {
    export type Constructors = lib3.StatefulWidget.Constructors | 'DragTarget';
    export type Interface<T> = Omit<DragTarget<T>, Constructors>;
}
@DartClass
export class DragTarget<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,builder? : <T>(context : lib3.BuildContext,candidateData : core.DartList<T>,rejectedData : core.DartList<any>) => lib3.Widget,onWillAccept? : <T>(data : T) => boolean,onAccept? : <T>(data : T) => any,onLeave? : <T>(data : T) => any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DragTarget(_namedArguments? : {key? : lib4.Key,builder? : <T>(context : lib3.BuildContext,candidateData : core.DartList<T>,rejectedData : core.DartList<any>) => lib3.Widget,onWillAccept? : <T>(data : T) => boolean,onAccept? : <T>(data : T) => any,onLeave? : <T>(data : T) => any}) {
        let {key,builder,onWillAccept,onAccept,onLeave} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.builder = builder;
        this.onWillAccept = onWillAccept;
        this.onAccept = onAccept;
        this.onLeave = onLeave;
    }
    builder : <T>(context : lib3.BuildContext,candidateData : core.DartList<T>,rejectedData : core.DartList<any>) => lib3.Widget;

    onWillAccept : <T>(data : T) => boolean;

    onAccept : <T>(data : T) => any;

    onLeave : <T>(data : T) => any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DragTargetState<T> {
        return _DragTargetState();
    }
}

export namespace _DragTargetState {
    export type Constructors = lib3.State.Constructors | '_DragTargetState';
    export type Interface<T> = Omit<_DragTargetState<T>, Constructors>;
}
@DartClass
export class _DragTargetState<T> extends lib3.State<DragTarget<T>> {
    _candidateAvatars : core.DartList<_DragAvatar<T>>;

    _rejectedAvatars : core.DartList<_DragAvatar<any>>;

    didEnter(avatar : _DragAvatar<any>) : boolean {
        /* TODO (AssertStatementImpl) : assert (!_candidateAvatars.contains(avatar)); */;
        /* TODO (AssertStatementImpl) : assert (!_rejectedAvatars.contains(avatar)); */;
        if (is(avatar.data, T) && (op(Op.EQUALS,this.widget.onWillAccept,null) || this.widget.onWillAccept(avatar.data))) {
            this.setState(() =>  {
                this._candidateAvatars.add(avatar);
            });
            return true;
        }
        this._rejectedAvatars.add(avatar);
        return false;
    }
    didLeave(avatar : _DragAvatar<any>) : any {
        /* TODO (AssertStatementImpl) : assert (_candidateAvatars.contains(avatar) || _rejectedAvatars.contains(avatar)); */;
        if (!this.mounted) return;
        this.setState(() =>  {
            this._candidateAvatars.remove(avatar);
            this._rejectedAvatars.remove(avatar);
        });
        if (this.widget.onLeave != null) this.widget.onLeave(avatar.data);
    }
    didDrop(avatar : _DragAvatar<any>) : any {
        /* TODO (AssertStatementImpl) : assert (_candidateAvatars.contains(avatar)); */;
        if (!this.mounted) return;
        this.setState(() =>  {
            this._candidateAvatars.remove(avatar);
        });
        if (this.widget.onAccept != null) this.widget.onAccept(avatar.data);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (widget.builder != null); */;
        return lib13.MetaData({
            metaData : this,behavior : HitTestBehavior.translucent,child : this.widget.builder(context,_mapAvatarsToData(this._candidateAvatars),_mapAvatarsToData(this._rejectedAvatars))});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DragTargetState() {
        this._candidateAvatars = new core.DartList.literal<_DragAvatar<T>>();
        this._rejectedAvatars = new core.DartList.literal<_DragAvatar<any>>();
    }
}

export enum _DragEndKind {
    dropped,
    canceled
}

export namespace _DragAvatar {
    export type Constructors = lib7.Drag.Constructors | '_DragAvatar' | 'insert';
    export type Interface<T> = Omit<_DragAvatar<T>, Constructors>;
}
@DartClass
export class _DragAvatar<T> extends lib7.Drag {
    constructor(_namedArguments? : {overlayState? : any,data? : any,axis? : any,initialPosition? : any,dragStartPoint? : any,feedback? : any,feedbackOffset? : any,onDragEnd? : any,ignoringFeedbackSemantics? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DragAvatar(_namedArguments? : {overlayState? : any,data? : any,axis? : any,initialPosition? : any,dragStartPoint? : any,feedback? : any,feedbackOffset? : any,onDragEnd? : any,ignoringFeedbackSemantics? : any}) {
        let {overlayState,data,axis,initialPosition,dragStartPoint,feedback,feedbackOffset,onDragEnd,ignoringFeedbackSemantics} = Object.assign({
            "dragStartPoint" : Offset.zero,
            "feedbackOffset" : Offset.zero}, _namedArguments );
        this._entry = lib12.OverlayEntry({
            builder : _build});
        this._position = initialPosition;
        this.assert = assert;
        this.overlayState = overlayState;
        this.data = data;
        this.axis = axis;
        this.dragStartPoint = dragStartPoint;
        this.feedback = feedback;
        this.feedbackOffset = feedbackOffset;
        this.onDragEnd = onDragEnd;
        this.ignoringFeedbackSemantics = ignoringFeedbackSemantics;
    }
     : any;

     : any;

     : any;

     : any;

    _entry;

    @namedConstructor
    insert(_entry : any) {
        this._entry = lib12.OverlayEntry({
            builder : _build});
        this._position = initialPosition;
    }
    static insert : new<T>(_entry : any) => _DragAvatar<T>;

    _position;

    @Abstract
    updateDrag(initialPosition : any){ throw 'abstract'}
}

export namespace LongPressDraggable {
    export type Constructors = Draggable.Constructors | 'LongPressDraggable';
    export type Interface<T> = Omit<LongPressDraggable<T>, Constructors>;
}
@DartClass
export class LongPressDraggable<T> extends Draggable<T> {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,feedback? : lib3.Widget,data? : T,axis? : lib5.Axis,childWhenDragging? : lib3.Widget,feedbackOffset? : any,dragAnchor? : DragAnchor,maxSimultaneousDrags? : number,onDragStarted? : any,onDraggableCanceled? : (velocity : lib6.Velocity,offset : any) => any,onDragEnd? : (details : DraggableDetails) => any,onDragCompleted? : any,hapticFeedbackOnStart? : boolean,ignoringFeedbackSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LongPressDraggable(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,feedback? : lib3.Widget,data? : T,axis? : lib5.Axis,childWhenDragging? : lib3.Widget,feedbackOffset? : any,dragAnchor? : DragAnchor,maxSimultaneousDrags? : number,onDragStarted? : any,onDraggableCanceled? : (velocity : lib6.Velocity,offset : any) => any,onDragEnd? : (details : DraggableDetails) => any,onDragCompleted? : any,hapticFeedbackOnStart? : boolean,ignoringFeedbackSemantics? : boolean}) {
        let {key,child,feedback,data,axis,childWhenDragging,feedbackOffset,dragAnchor,maxSimultaneousDrags,onDragStarted,onDraggableCanceled,onDragEnd,onDragCompleted,hapticFeedbackOnStart,ignoringFeedbackSemantics} = Object.assign({
            "feedbackOffset" : Offset.zero,
            "dragAnchor" : DragAnchor.child,
            "hapticFeedbackOnStart" : true,
            "ignoringFeedbackSemantics" : true}, _namedArguments );
        super.Draggable({
            key : key,child : child,feedback : feedback,data : data,axis : axis,childWhenDragging : childWhenDragging,feedbackOffset : feedbackOffset,dragAnchor : dragAnchor,maxSimultaneousDrags : maxSimultaneousDrags,onDragStarted : onDragStarted,onDraggableCanceled : onDraggableCanceled,onDragEnd : onDragEnd,onDragCompleted : onDragCompleted,ignoringFeedbackSemantics : ignoringFeedbackSemantics});
        this.hapticFeedbackOnStart = hapticFeedbackOnStart;
    }
    hapticFeedbackOnStart : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRecognizer(onStart : (position : any) => lib7.Drag) : lib8.DelayedMultiDragGestureRecognizer {
        return ((_) : any =>  {
            {
                _.onStart = (position : any) =>  {
                    let result : lib7.Drag = onStart(position);
                    if (result != null && this.hapticFeedbackOnStart) lib9.HapticFeedback.selectionClick();
                    return result;
                };
                return _;
            }
        })(lib8.DelayedMultiDragGestureRecognizer());
    }
}

export class properties {
    private static __$data : any;
    static get data() : any { 
        return this.__$data;
    }
    static set data(__$value : any)  { 
        this.__$data = __$value;
    }

    private static __$axis : lib5.Axis;
    static get axis() : lib5.Axis { 
        return this.__$axis;
    }
    static set axis(__$value : lib5.Axis)  { 
        this.__$axis = __$value;
    }

    private static __$dragStartPoint : any;
    static get dragStartPoint() : any { 
        return this.__$dragStartPoint;
    }
    static set dragStartPoint(__$value : any)  { 
        this.__$dragStartPoint = __$value;
    }

    private static __$feedback : lib3.Widget;
    static get feedback() : lib3.Widget { 
        return this.__$feedback;
    }
    static set feedback(__$value : lib3.Widget)  { 
        this.__$feedback = __$value;
    }

    private static __$feedbackOffset : any;
    static get feedbackOffset() : any { 
        return this.__$feedbackOffset;
    }
    static set feedbackOffset(__$value : any)  { 
        this.__$feedbackOffset = __$value;
    }

    private static __$onDragEnd : (velocity : lib6.Velocity,offset : any,wasAccepted : boolean) => any;
    static get onDragEnd() : (velocity : lib6.Velocity,offset : any,wasAccepted : boolean) => any { 
        return this.__$onDragEnd;
    }
    static set onDragEnd(__$value : (velocity : lib6.Velocity,offset : any,wasAccepted : boolean) => any)  { 
        this.__$onDragEnd = __$value;
    }

    private static __$overlayState : lib12.OverlayState;
    static get overlayState() : lib12.OverlayState { 
        return this.__$overlayState;
    }
    static set overlayState(__$value : lib12.OverlayState)  { 
        this.__$overlayState = __$value;
    }

    private static __$ignoringFeedbackSemantics : boolean;
    static get ignoringFeedbackSemantics() : boolean { 
        return this.__$ignoringFeedbackSemantics;
    }
    static set ignoringFeedbackSemantics(__$value : boolean)  { 
        this.__$ignoringFeedbackSemantics = __$value;
    }

    private static __$_activeTarget : _DragTargetState<any>;
    static get _activeTarget() : _DragTargetState<any> { 
        return this.__$_activeTarget;
    }
    static set _activeTarget(__$value : _DragTargetState<any>)  { 
        this.__$_activeTarget = __$value;
    }

    private static __$_enteredTargets : core.DartList<_DragTargetState<any>>;
    static get _enteredTargets() : core.DartList<_DragTargetState<any>> { 
        if (this.__$_enteredTargets===undefined) {
            this.__$_enteredTargets = new core.DartList.literal<_DragTargetState<any>>();
        }
        return this.__$_enteredTargets;
    }
    static set _enteredTargets(__$value : core.DartList<_DragTargetState<any>>)  { 
        this.__$_enteredTargets = __$value;
    }

    private static __$_position : any;
    static get _position() : any { 
        return this.__$_position;
    }
    static set _position(__$value : any)  { 
        this.__$_position = __$value;
    }

    private static __$_lastOffset : any;
    static get _lastOffset() : any { 
        return this.__$_lastOffset;
    }
    static set _lastOffset(__$value : any)  { 
        this.__$_lastOffset = __$value;
    }

    private static __$_entry : lib12.OverlayEntry;
    static get _entry() : lib12.OverlayEntry { 
        return this.__$_entry;
    }
    static set _entry(__$value : lib12.OverlayEntry)  { 
        this.__$_entry = __$value;
    }

}
