/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_position_with_single_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scroll_position";
import * as lib4 from "./scroll_activity";
import * as lib5 from "./scroll_physics";
import * as lib6 from "./scroll_context";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/physics/simulation";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/physics/utils";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/gestures/drag";

export namespace ScrollPositionWithSingleContext {
    export type Constructors = lib3.ScrollPosition.Constructors | 'ScrollPositionWithSingleContext';
    export type Interface = Omit<ScrollPositionWithSingleContext, Constructors>;
}
@DartClass
@Implements(lib4.ScrollActivityDelegate)
export class ScrollPositionWithSingleContext extends lib3.ScrollPosition implements lib4.ScrollActivityDelegate.Interface {
    constructor(_namedArguments? : {physics? : lib5.ScrollPhysics,context? : lib6.ScrollContext,initialPixels? : double,keepScrollOffset? : boolean,oldPosition? : lib3.ScrollPosition,debugLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollPositionWithSingleContext(_namedArguments? : {physics? : lib5.ScrollPhysics,context? : lib6.ScrollContext,initialPixels? : double,keepScrollOffset? : boolean,oldPosition? : lib3.ScrollPosition,debugLabel? : string}) {
        let {physics,context,initialPixels,keepScrollOffset,oldPosition,debugLabel} = Object.assign({
            "initialPixels" : 0.0,
            "keepScrollOffset" : true}, _namedArguments );
        this._heldPreviousVelocity = 0.0;
        this._userScrollDirection = lib8.ScrollDirection.idle;
        super.ScrollPosition({
            physics : physics,context : context,keepScrollOffset : keepScrollOffset,oldPosition : oldPosition,debugLabel : debugLabel});
        if (lib3.properties.pixels == null && initialPixels != null) lib3.correctPixels(initialPixels);
        if (op(Op.EQUALS,lib3.properties.activity,null)) this.goIdle();
        /* TODO (AssertStatementImpl) : assert (activity != null); */;
    }
    _heldPreviousVelocity : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get axisDirection() : lib7.AxisDirection {
        return lib3.properties.context.axisDirection;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setPixels(newPixels : double) : double {
        /* TODO (AssertStatementImpl) : assert (activity.isScrolling); */;
        return super.setPixels(newPixels);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    absorb(other : lib3.ScrollPosition) : any {
        super.absorb(other);
        if (isNot(other, ScrollPositionWithSingleContext)) {
            this.goIdle();
            return;
        }
        lib3.properties.activity.updateDelegate(this);
        let typedOther : ScrollPositionWithSingleContext = other;
        this._userScrollDirection = typedOther._userScrollDirection;
        /* TODO (AssertStatementImpl) : assert (_currentDrag == null); */;
        if (typedOther._currentDrag != null) {
            this._currentDrag = typedOther._currentDrag;
            this._currentDrag.updateDelegate(this);
            typedOther._currentDrag = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyNewDimensions() : any {
        super.applyNewDimensions();
        lib3.properties.context.setCanDrag(lib3.properties.physics.shouldAcceptUserOffset(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginActivity(newActivity : lib4.ScrollActivity) : any {
        this._heldPreviousVelocity = 0.0;
        if (op(Op.EQUALS,newActivity,null)) return;
        /* TODO (AssertStatementImpl) : assert (newActivity.delegate == this); */;
        super.beginActivity(newActivity);
        ((_966_)=>(!!_966_)?_966_.dispose():null)(this._currentDrag);
        this._currentDrag = null;
        if (!lib3.properties.activity.isScrolling) this.updateUserScrollDirection(lib8.ScrollDirection.idle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyUserOffset(delta : double) : any {
        this.updateUserScrollDirection(delta > 0.0 ? lib8.ScrollDirection.forward : lib8.ScrollDirection.reverse);
        this.setPixels(lib3.properties.pixels - lib3.properties.physics.applyPhysicsToUserOffset(this,delta));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    goIdle() : any {
        this.beginActivity(lib4.IdleScrollActivity(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    goBallistic(velocity : double) : any {
        /* TODO (AssertStatementImpl) : assert (pixels != null); */;
        let simulation : lib9.Simulation = lib3.properties.physics.createBallisticSimulation(this,velocity);
        if (simulation != null) {
            this.beginActivity(lib4.BallisticScrollActivity(this,simulation,lib3.properties.context.vsync));
        }else {
            this.goIdle();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get userScrollDirection() : lib8.ScrollDirection {
        return this._userScrollDirection;
    }
    _userScrollDirection : lib8.ScrollDirection;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    updateUserScrollDirection(value : lib8.ScrollDirection) : any {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this.userScrollDirection,value)) return;
        this._userScrollDirection = value;
        lib3.didUpdateScrollDirection(value);
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    void : async.Future<any>;

    animateTo(to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib10.Curve}) {
        let {duration,curve} = Object.assign({
        }, _namedArguments );
        if (lib11.nearEqual(to,lib3.properties.pixels,lib3.properties.physics.tolerance.distance)) {
            this.jumpTo(to);
            return op(Op.LT,async.Future<T>,);
            op(Op.GT,,.value());
        }
        let activity : lib4.DrivenScrollActivity = lib4.DrivenScrollActivity(this,{
            from : lib3.properties.pixels,to : to,duration : duration,curve : curve,vsync : lib3.properties.context.vsync});
        this.beginActivity(activity);
        return activity.done;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    jumpTo(value : double) : any {
        this.goIdle();
        if (lib3.properties.pixels != value) {
            let oldPixels : double = lib3.properties.pixels;
            lib3.forcePixels(value);
            lib3.notifyListeners();
            lib3.didStartScroll();
            lib3.didUpdateScrollPositionBy(lib3.properties.pixels - oldPixels);
            lib3.didEndScroll();
        }
        this.goBallistic(0.0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'Deprecated',value : {
            arguments : ['This will lead to bugs.'],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    jumpToWithoutSettling(value : double) : any {
        this.goIdle();
        if (lib3.properties.pixels != value) {
            let oldPixels : double = lib3.properties.pixels;
            lib3.forcePixels(value);
            lib3.notifyListeners();
            lib3.didStartScroll();
            lib3.didUpdateScrollPositionBy(lib3.properties.pixels - oldPixels);
            lib3.didEndScroll();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hold(holdCancelCallback : any) : lib4.ScrollHoldController {
        let previousVelocity : double = lib3.properties.activity.velocity;
        let holdActivity : lib4.HoldScrollActivity = lib4.HoldScrollActivity({
            delegate : this,onHoldCanceled : holdCancelCallback});
        this.beginActivity(holdActivity);
        this._heldPreviousVelocity = previousVelocity;
        return holdActivity;
    }
    _currentDrag : lib4.ScrollDragController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    drag(details : lib12.DragStartDetails,dragCancelCallback : any) : lib13.Drag {
        let drag : lib4.ScrollDragController = lib4.ScrollDragController({
            delegate : this,details : details,onDragCanceled : dragCancelCallback,carriedVelocity : lib3.properties.physics.carriedMomentum(this._heldPreviousVelocity),motionStartDistanceThreshold : lib3.properties.physics.dragStartDistanceMotionThreshold});
        this.beginActivity(lib4.DragScrollActivity(this,drag));
        /* TODO (AssertStatementImpl) : assert (_currentDrag == null); */;
        this._currentDrag = drag;
        return drag;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_967_)=>(!!_967_)?_967_.dispose():null)(this._currentDrag);
        this._currentDrag = null;
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        super.debugFillDescription(description);
        description.add(`${lib3.properties.context.runtimeType}`);
        description.add(`${lib3.properties.physics}`);
        description.add(`${lib3.properties.activity}`);
        description.add(`${this.userScrollDirection}`);
    }
}

export class properties {
}
