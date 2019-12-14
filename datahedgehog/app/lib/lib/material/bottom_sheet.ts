/** Library asset:datahedgehog_monitor/lib/lib/material/bottom_sheet.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib8 from "./material";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib13 from "./material_localizations";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib19 from "./theme_data";
import * as lib20 from "./colors";
import * as lib21 from "./theme";
import * as lib22 from "./scaffold";

export var showModalBottomSheet : <T>(_namedArguments? : {context? : lib3.BuildContext,builder? : (context : lib3.BuildContext) => lib3.Widget}) => async.Future<T> = <T>(_namedArguments? : {context? : lib3.BuildContext,builder? : (context : lib3.BuildContext) => lib3.Widget}) : async.Future<T> =>  {
    let {context,builder} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (context != null); */;
    /* TODO (AssertStatementImpl) : assert (builder != null); */;
    /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
    return lib15.Navigator.push(context,_ModalBottomSheetRoute({
        builder : builder,theme : lib21.Theme.of(context,{
            shadowThemeOnly : true}),barrierLabel : lib13.MaterialLocalizations.of(context).modalBarrierDismissLabel}));
};
export var showBottomSheet : <T>(_namedArguments? : {context? : lib3.BuildContext,builder? : (context : lib3.BuildContext) => lib3.Widget}) => lib22.PersistentBottomSheetController<T> = <T>(_namedArguments? : {context? : lib3.BuildContext,builder? : (context : lib3.BuildContext) => lib3.Widget}) : lib22.PersistentBottomSheetController<T> =>  {
    let {context,builder} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (context != null); */;
    /* TODO (AssertStatementImpl) : assert (builder != null); */;
    return lib22.Scaffold.of(context).showBottomSheet(builder);
};
export namespace BottomSheet {
    export type Constructors = lib3.StatefulWidget.Constructors | 'BottomSheet';
    export type Interface = Omit<BottomSheet, Constructors>;
}
@DartClass
export class BottomSheet extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,animationController? : lib5.AnimationController,enableDrag? : boolean,elevation? : double,onClosing? : any,builder? : (context : lib3.BuildContext) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BottomSheet(_namedArguments? : {key? : lib4.Key,animationController? : lib5.AnimationController,enableDrag? : boolean,elevation? : double,onClosing? : any,builder? : (context : lib3.BuildContext) => lib3.Widget}) {
        let {key,animationController,enableDrag,elevation,onClosing,builder} = Object.assign({
            "enableDrag" : true,
            "elevation" : 0.0}, _namedArguments );
        this.assert = assert;
        this.animationController = animationController;
        this.enableDrag = enableDrag;
        this.elevation = elevation;
        this.onClosing = onClosing;
        this.builder = builder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    animationController : lib5.AnimationController;

    onClosing : any;

    builder : (context : lib3.BuildContext) => lib3.Widget;

    enableDrag : boolean;

    elevation : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _BottomSheetState {
        return _BottomSheetState();
    }
    static createAnimationController(vsync : any) : lib5.AnimationController {
        return lib5.AnimationController({
            duration : properties._kBottomSheetDuration,debugLabel : 'BottomSheet',vsync : vsync});
    }
}

export namespace _BottomSheetState {
    export type Constructors = '_BottomSheetState';
    export type Interface = Omit<_BottomSheetState, Constructors>;
}
@DartClass
export class _BottomSheetState extends any {
    _childKey : lib3.GlobalKey<any>;

    get _childHeight() : double {
        let renderBox : any = this._childKey.currentContext.findRenderObject();
        return renderBox.size.height;
    }
    get _dismissUnderway() : boolean {
        return op(Op.EQUALS,widget.animationController.status,lib6.AnimationStatus.reverse);
    }
    _handleDragUpdate(details : lib7.DragUpdateDetails) : any {
        if (this._dismissUnderway) return;
        widget.animationController.value -= details.primaryDelta / ((this._childHeight || details.primaryDelta));
    }
    _handleDragEnd(details : lib7.DragEndDetails) : any {
        if (this._dismissUnderway) return;
        if (op(Op.GT,details.velocity.pixelsPerSecond.dy,properties._kMinFlingVelocity)) {
            let flingVelocity : double = op(Op.DIVIDE,op(Op.NEG,details.velocity.pixelsPerSecond.dy),this._childHeight);
            if (op(Op.GT,widget.animationController.value,0.0)) widget.animationController.fling({
                velocity : flingVelocity});
            if (flingVelocity < 0.0) widget.onClosing();
        }else if (op(Op.LT,widget.animationController.value,properties._kCloseProgressThreshold)) {
            if (op(Op.GT,widget.animationController.value,0.0)) widget.animationController.fling({
                velocity : -1.0});
            widget.onClosing();
        }else {
            widget.animationController.forward();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let bottomSheet : lib3.Widget = lib8.Material({
            key : this._childKey,elevation : widget.elevation,child : widget.builder(context)});
        return !widget.enableDrag ? bottomSheet : lib9.GestureDetector({
            onVerticalDragUpdate : this._handleDragUpdate.bind(this),onVerticalDragEnd : this._handleDragEnd.bind(this),child : bottomSheet,excludeFromSemantics : true});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BottomSheetState() {
        this._childKey = lib3.GlobalKey({
            debugLabel : 'BottomSheet child'});
    }
}

export namespace _ModalBottomSheetLayout {
    export type Constructors = lib10.SingleChildLayoutDelegate.Constructors | '_ModalBottomSheetLayout';
    export type Interface = Omit<_ModalBottomSheetLayout, Constructors>;
}
@DartClass
export class _ModalBottomSheetLayout extends lib10.SingleChildLayoutDelegate {
    constructor(progress : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ModalBottomSheetLayout(progress : double) {
        this.progress = progress;
    }
    progress : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConstraintsForChild(constraints : lib11.BoxConstraints) : lib11.BoxConstraints {
        return lib11.BoxConstraints({
            minWidth : constraints.maxWidth,maxWidth : constraints.maxWidth,minHeight : 0.0,maxHeight : constraints.maxHeight * 9.0 / 16.0});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPositionForChild(size : any,childSize : any) : any {
        return Offset(0.0,op(Op.MINUS,size.height,op(Op.TIMES,childSize.height,this.progress)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _ModalBottomSheetLayout) : boolean {
        return this.progress != oldDelegate.progress;
    }
}

export namespace _ModalBottomSheet {
    export type Constructors = lib3.StatefulWidget.Constructors | '_ModalBottomSheet';
    export type Interface<T> = Omit<_ModalBottomSheet<T>, Constructors>;
}
@DartClass
export class _ModalBottomSheet<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,route? : _ModalBottomSheetRoute<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ModalBottomSheet(_namedArguments? : {key? : lib4.Key,route? : _ModalBottomSheetRoute<T>}) {
        let {key,route} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.route = route;
    }
    route : _ModalBottomSheetRoute<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ModalBottomSheetState<T> {
        return _ModalBottomSheetState();
    }
}

export namespace _ModalBottomSheetState {
    export type Constructors = '_ModalBottomSheetState';
    export type Interface<T> = Omit<_ModalBottomSheetState<T>, Constructors>;
}
@DartClass
export class _ModalBottomSheetState<T> extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let mediaQuery : lib12.MediaQueryData = lib12.MediaQuery.of(context);
        let localizations : lib13.MaterialLocalizations = lib13.MaterialLocalizations.of(context);
        let routeLabel : string;
        switch (lib14.properties.defaultTargetPlatform) {
            case lib14.TargetPlatform.iOS:
                routeLabel = '';
                break;
            case lib14.TargetPlatform.android:
            case lib14.TargetPlatform.fuchsia:
                routeLabel = localizations.dialogLabel;
                break;
        }
        return lib9.GestureDetector({
            excludeFromSemantics : true,onTap : () =>  {
                return lib15.Navigator.pop(context);
            },child : lib17.AnimatedBuilder({
                animation : widget.route.animation,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                    let animationValue : double = mediaQuery.accessibleNavigation ? 1.0 : widget.route.animation.value;
                    return lib16.Semantics({
                        scopesRoute : true,namesRoute : true,label : routeLabel,explicitChildNodes : true,child : lib16.ClipRect({
                            child : lib16.CustomSingleChildLayout({
                                delegate : _ModalBottomSheetLayout(animationValue),child : BottomSheet({
                                    animationController : widget.route._animationController,onClosing : () =>  {
                                        return lib15.Navigator.pop(context);
                                    },builder : widget.route.builder})})})});
                }})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ModalBottomSheetState() {
    }
}

export namespace _ModalBottomSheetRoute {
    export type Constructors = lib18.PopupRoute.Constructors | '_ModalBottomSheetRoute';
    export type Interface<T> = Omit<_ModalBottomSheetRoute<T>, Constructors>;
}
@DartClass
export class _ModalBottomSheetRoute<T> extends lib18.PopupRoute<T> {
    constructor(_namedArguments? : {builder? : (context : lib3.BuildContext) => lib3.Widget,theme? : lib19.ThemeData,barrierLabel? : string,settings? : lib15.RouteSettings}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ModalBottomSheetRoute(_namedArguments? : {builder? : (context : lib3.BuildContext) => lib3.Widget,theme? : lib19.ThemeData,barrierLabel? : string,settings? : lib15.RouteSettings}) {
        let {builder,theme,barrierLabel,settings} = Object.assign({
        }, _namedArguments );
        super.PopupRoute({
            settings : settings});
        this.builder = builder;
        this.theme = theme;
        this.barrierLabel = barrierLabel;
    }
    builder : (context : lib3.BuildContext) => lib3.Widget;

    theme : lib19.ThemeData;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get transitionDuration() : core.DartDuration {
        return properties._kBottomSheetDuration;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierDismissible() : boolean {
        return true;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barrierLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierColor() : any {
        return lib20.Colors.black54;
    }
    _animationController : lib5.AnimationController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createAnimationController() : lib5.AnimationController {
        /* TODO (AssertStatementImpl) : assert (_animationController == null); */;
        this._animationController = BottomSheet.createAnimationController(navigator.overlay);
        return this._animationController;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib3.BuildContext,animation : lib6.Animation<double>,secondaryAnimation : lib6.Animation<double>) : lib3.Widget {
        let bottomSheet : lib3.Widget = lib12.MediaQuery.removePadding({
            context : context,removeTop : true,child : _ModalBottomSheet({
                route : this})});
        if (this.theme != null) bottomSheet = lib21.Theme({
            data : this.theme,child : bottomSheet});
        return bottomSheet;
    }
}

export class properties {
    private static __$_kBottomSheetDuration : core.DartDuration;
    static get _kBottomSheetDuration() : core.DartDuration { 
        if (this.__$_kBottomSheetDuration===undefined) {
            this.__$_kBottomSheetDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_kBottomSheetDuration;
    }
    static set _kBottomSheetDuration(__$value : core.DartDuration)  { 
        this.__$_kBottomSheetDuration = __$value;
    }

    private static __$_kMinFlingVelocity : double;
    static get _kMinFlingVelocity() : double { 
        if (this.__$_kMinFlingVelocity===undefined) {
            this.__$_kMinFlingVelocity = 700.0;
        }
        return this.__$_kMinFlingVelocity;
    }
    static set _kMinFlingVelocity(__$value : double)  { 
        this.__$_kMinFlingVelocity = __$value;
    }

    private static __$_kCloseProgressThreshold : double;
    static get _kCloseProgressThreshold() : double { 
        if (this.__$_kCloseProgressThreshold===undefined) {
            this.__$_kCloseProgressThreshold = 0.5;
        }
        return this.__$_kCloseProgressThreshold;
    }
    static set _kCloseProgressThreshold(__$value : double)  { 
        this.__$_kCloseProgressThreshold = __$value;
    }

}
