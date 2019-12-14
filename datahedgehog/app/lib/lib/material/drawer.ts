/** Library asset:datahedgehog_monitor/lib/lib/material/drawer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib6 from "./material_localizations";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib8 from "./material";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/focus_manager";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/focus_scope";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib18 from "./colors";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as math from "@dart2ts/dart/math";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib26 from "./list_tile";

export enum DrawerAlignment {
    start,
    end
}

export namespace Drawer {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Drawer';
    export type Interface = Omit<Drawer, Constructors>;
}
@DartClass
export class Drawer extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,elevation? : double,child? : lib3.Widget,semanticLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Drawer(_namedArguments? : {key? : lib4.Key,elevation? : double,child? : lib3.Widget,semanticLabel? : string}) {
        let {key,elevation,child,semanticLabel} = Object.assign({
            "elevation" : 16.0}, _namedArguments );
        this.assert = assert;
        this.elevation = elevation;
        this.child = child;
        this.semanticLabel = semanticLabel;
    }
     : any;

     : any;

     : any;

     : any;

    elevation : double;

    child : lib3.Widget;

    semanticLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let label : string = this.semanticLabel;
        switch (lib5.properties.defaultTargetPlatform) {
            case lib5.TargetPlatform.iOS:
                label = this.semanticLabel;
                break;
            case lib5.TargetPlatform.android:
            case lib5.TargetPlatform.fuchsia:
                label = (this.semanticLabel || ((t)=>(!!t)?t.drawerLabel:null)(lib6.MaterialLocalizations.of(context)));
        }
        return lib9.Semantics({
            scopesRoute : true,namesRoute : true,explicitChildNodes : true,label : label,child : lib9.ConstrainedBox({
                constraints : new lib7.BoxConstraints.expand({
                    width : properties._kWidth}),child : lib8.Material({
                    elevation : this.elevation,child : this.child})})});
    }
}

export namespace DrawerController {
    export type Constructors = lib3.StatefulWidget.Constructors | 'DrawerController';
    export type Interface = Omit<DrawerController, Constructors>;
}
@DartClass
export class DrawerController extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib3.GlobalKey<any>,child? : lib3.Widget,alignment? : DrawerAlignment,drawerCallback? : (isOpened : boolean) => any,dragStartBehavior? : lib10.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DrawerController(_namedArguments? : {key? : lib3.GlobalKey<any>,child? : lib3.Widget,alignment? : DrawerAlignment,drawerCallback? : (isOpened : boolean) => any,dragStartBehavior? : lib10.DragStartBehavior}) {
        let {key,child,alignment,drawerCallback,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib10.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.alignment = alignment;
        this.drawerCallback = drawerCallback;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib3.Widget;

    alignment : DrawerAlignment;

    drawerCallback : (isOpened : boolean) => any;

    dragStartBehavior : lib10.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : DrawerControllerState {
        return DrawerControllerState();
    }
}

export namespace DrawerControllerState {
    export type Constructors = 'DrawerControllerState';
    export type Interface = Omit<DrawerControllerState, Constructors>;
}
@DartClass
@With(any)
export class DrawerControllerState extends any implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = ((_) : any =>  {
            {
                addListener(this._animationChanged.bind(this));
                addStatusListener(this._animationStatusChanged.bind(this));
                return _;
            }
        })(lib11.AnimationController({
            duration : properties._kBaseSettleDuration,vsync : this}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_728_)=>(!!_728_)?_728_.remove():null)(this._historyEntry);
        this._controller.dispose();
        super.dispose();
    }
    _animationChanged() : any {
        setState(() =>  {
        });
    }
    _historyEntry : lib12.LocalHistoryEntry;

    _focusScopeNode : lib13.FocusScopeNode;

    _ensureHistoryEntry() : any {
        if (op(Op.EQUALS,this._historyEntry,null)) {
            let route : lib12.ModalRoute<any> = lib12.ModalRoute.of(lib14.properties.context);
            if (route != null) {
                this._historyEntry = lib12.LocalHistoryEntry({
                    onRemove : this._handleHistoryEntryRemoved.bind(this)});
                route.addLocalHistoryEntry(this._historyEntry);
                lib15.FocusScope.of(lib14.properties.context).setFirstFocus(this._focusScopeNode);
            }
        }
    }
    _animationStatusChanged(status : lib16.AnimationStatus) : any {
        switch (status) {
            case lib16.AnimationStatus.forward:
                this._ensureHistoryEntry();
                break;
            case lib16.AnimationStatus.reverse:
                ((_729_)=>(!!_729_)?_729_.remove():null)(this._historyEntry);
                this._historyEntry = null;
                break;
            case lib16.AnimationStatus.dismissed:
                break;
            case lib16.AnimationStatus.completed:
                break;
        }
    }
    _handleHistoryEntryRemoved() : any {
        this._historyEntry = null;
        this.close();
    }
    _controller : lib11.AnimationController;

    _handleDragDown(details : lib17.DragDownDetails) : any {
        this._controller.stop();
        this._ensureHistoryEntry();
    }
    _handleDragCancel() : any {
        if (this._controller.isDismissed || this._controller.isAnimating) return;
        if (this._controller.value < 0.5) {
            this.close();
        }else {
            this.open();
        }
    }
    _drawerKey : lib3.GlobalKey<any>;

    get _width() : double {
        let box : any = ((_730_)=>(!!_730_)?_730_.findRenderObject():null)(this._drawerKey.currentContext);
        if (box != null) return box.size.width;
        return properties._kWidth;
    }
    _previouslyOpened : boolean;

    _move(details : lib17.DragUpdateDetails) : any {
        let delta : double = details.primaryDelta / this._width;
        switch (widget.alignment) {
            case DrawerAlignment.start:
                break;
            case DrawerAlignment.end:
                delta = -delta;
                break;
        }
        switch (lib9.Directionality.of(lib14.properties.context)) {
            case TextDirection.rtl:
                this._controller.value -= delta;
                break;
            case TextDirection.ltr:
                this._controller.value += delta;
                break;
        }
        let opened : boolean = this._controller.value > 0.5 ? true : false;
        if (opened != this._previouslyOpened && widget.drawerCallback != null) widget.drawerCallback(opened);
        this._previouslyOpened = opened;
    }
    _settle(details : lib17.DragEndDetails) : any {
        if (this._controller.isDismissed) return;
        if (op(Op.GEQ,details.velocity.pixelsPerSecond.dx.abs(),properties._kMinFlingVelocity)) {
            let visualVelocity : double = op(Op.DIVIDE,details.velocity.pixelsPerSecond.dx,this._width);
            switch (widget.alignment) {
                case DrawerAlignment.start:
                    break;
                case DrawerAlignment.end:
                    visualVelocity = -visualVelocity;
                    break;
            }
            switch (lib9.Directionality.of(lib14.properties.context)) {
                case TextDirection.rtl:
                    this._controller.fling({
                        velocity : -visualVelocity});
                    break;
                case TextDirection.ltr:
                    this._controller.fling({
                        velocity : visualVelocity});
                    break;
            }
        }else if (this._controller.value < 0.5) {
            this.close();
        }else {
            this.open();
        }
    }
    open() : any {
        this._controller.fling({
            velocity : 1.0});
        if (widget.drawerCallback != null) widget.drawerCallback(true);
    }
    close() : any {
        this._controller.fling({
            velocity : -1.0});
        if (widget.drawerCallback != null) widget.drawerCallback(false);
    }
    _color : lib19.ColorTween;

    _gestureDetectorKey : lib3.GlobalKey<any>;

    get _drawerOuterAlignment() : lib20.AlignmentDirectional {
        /* TODO (AssertStatementImpl) : assert (widget.alignment != null); */;
        switch (widget.alignment) {
            case DrawerAlignment.start:
                return lib20.AlignmentDirectional.centerStart;
            case DrawerAlignment.end:
                return lib20.AlignmentDirectional.centerEnd;
        }
        return null;
    }
    get _drawerInnerAlignment() : lib20.AlignmentDirectional {
        /* TODO (AssertStatementImpl) : assert (widget.alignment != null); */;
        switch (widget.alignment) {
            case DrawerAlignment.start:
                return lib20.AlignmentDirectional.centerEnd;
            case DrawerAlignment.end:
                return lib20.AlignmentDirectional.centerStart;
        }
        return null;
    }
    _buildDrawer(context : lib3.BuildContext) : lib3.Widget {
        let drawerIsStart : boolean = op(Op.EQUALS,widget.alignment,DrawerAlignment.start);
        let padding : lib22.EdgeInsets = lib21.MediaQuery.of(context).padding;
        let dragAreaWidth : double = drawerIsStart ? padding.left : padding.right;
        if (op(Op.EQUALS,lib9.Directionality.of(context),TextDirection.rtl)) dragAreaWidth = drawerIsStart ? padding.right : padding.left;
        dragAreaWidth = math.max(dragAreaWidth,properties._kEdgeDragWidth);
        if (op(Op.EQUALS,this._controller.status,lib16.AnimationStatus.dismissed)) {
            return lib9.Align({
                alignment : this._drawerOuterAlignment,child : lib25.GestureDetector({
                    key : this._gestureDetectorKey,onHorizontalDragUpdate : this._move.bind(this),onHorizontalDragEnd : this._settle.bind(this),behavior : HitTestBehavior.translucent,excludeFromSemantics : true,dragStartBehavior : widget.dragStartBehavior,child : lib24.Container({
                        width : dragAreaWidth})})});
        }else {
            return lib25.GestureDetector({
                key : this._gestureDetectorKey,onHorizontalDragDown : this._handleDragDown.bind(this),onHorizontalDragUpdate : this._move.bind(this),onHorizontalDragEnd : this._settle.bind(this),onHorizontalDragCancel : this._handleDragCancel.bind(this),excludeFromSemantics : true,dragStartBehavior : widget.dragStartBehavior,child : lib9.RepaintBoundary({
                    child : lib9.Stack({
                        children : new core.DartList.literal<lib3.Widget>(lib9.BlockSemantics({
                            child : lib25.GestureDetector({
                                excludeFromSemantics : op(Op.EQUALS,lib5.properties.defaultTargetPlatform,lib5.TargetPlatform.android),onTap : this.close.bind(this),child : lib9.Semantics({
                                    label : ((t)=>(!!t)?t.modalBarrierDismissLabel:null)(lib6.MaterialLocalizations.of(context)),child : lib24.Container({
                                        color : this._color.evaluate(this._controller)})})})}),lib9.Align({
                            alignment : this._drawerOuterAlignment,child : lib9.Align({
                                alignment : this._drawerInnerAlignment,widthFactor : this._controller.value,child : lib9.RepaintBoundary({
                                    child : lib15.FocusScope({
                                        key : this._drawerKey,node : this._focusScopeNode,child : widget.child})})})}))})})});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        return lib26.ListTileTheme({
            style : lib26.ListTileStyle.drawer,child : this._buildDrawer(context)});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DrawerControllerState() {
        this._focusScopeNode = lib13.FocusScopeNode();
        this._drawerKey = lib3.GlobalKey();
        this._previouslyOpened = false;
        this._color = lib19.ColorTween({
            begin : lib18.Colors.transparent,end : lib18.Colors.black54});
        this._gestureDetectorKey = lib3.GlobalKey();
    }
}

export class properties {
    private static __$_kWidth : double;
    static get _kWidth() : double { 
        if (this.__$_kWidth===undefined) {
            this.__$_kWidth = 304.0;
        }
        return this.__$_kWidth;
    }
    static set _kWidth(__$value : double)  { 
        this.__$_kWidth = __$value;
    }

    private static __$_kEdgeDragWidth : double;
    static get _kEdgeDragWidth() : double { 
        if (this.__$_kEdgeDragWidth===undefined) {
            this.__$_kEdgeDragWidth = 20.0;
        }
        return this.__$_kEdgeDragWidth;
    }
    static set _kEdgeDragWidth(__$value : double)  { 
        this.__$_kEdgeDragWidth = __$value;
    }

    private static __$_kMinFlingVelocity : double;
    static get _kMinFlingVelocity() : double { 
        if (this.__$_kMinFlingVelocity===undefined) {
            this.__$_kMinFlingVelocity = 365.0;
        }
        return this.__$_kMinFlingVelocity;
    }
    static set _kMinFlingVelocity(__$value : double)  { 
        this.__$_kMinFlingVelocity = __$value;
    }

    private static __$_kBaseSettleDuration : core.DartDuration;
    static get _kBaseSettleDuration() : core.DartDuration { 
        if (this.__$_kBaseSettleDuration===undefined) {
            this.__$_kBaseSettleDuration = core.DartDuration({
                milliseconds : 246});
        }
        return this.__$_kBaseSettleDuration;
    }
    static set _kBaseSettleDuration(__$value : core.DartDuration)  { 
        this.__$_kBaseSettleDuration = __$value;
    }

}
