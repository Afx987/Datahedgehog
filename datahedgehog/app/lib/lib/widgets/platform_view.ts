/** Library asset:datahedgehog_monitor/lib/lib/widgets/platform_view.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/platform_view";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/basic_types";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/services/message_codec";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/services/platform_views";
import * as lib9 from "./basic";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/object";

export namespace AndroidView {
    export type Constructors = lib3.StatefulWidget.Constructors | 'AndroidView';
    export type Interface = Omit<AndroidView, Constructors>;
}
@DartClass
export class AndroidView extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,viewType? : string,onPlatformViewCreated? : (id : number) => any,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,layoutDirection? : any,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>,creationParams? : any,creationParamsCodec? : lib7.MessageCodec<any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AndroidView(_namedArguments? : {key? : lib4.Key,viewType? : string,onPlatformViewCreated? : (id : number) => any,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,layoutDirection? : any,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>,creationParams? : any,creationParamsCodec? : lib7.MessageCodec<any>}) {
        let {key,viewType,onPlatformViewCreated,hitTestBehavior,layoutDirection,gestureRecognizers,creationParams,creationParamsCodec} = Object.assign({
            "hitTestBehavior" : lib5.PlatformViewHitTestBehavior.opaque}, _namedArguments );
        this.assert = assert;
        this.viewType = viewType;
        this.onPlatformViewCreated = onPlatformViewCreated;
        this.hitTestBehavior = hitTestBehavior;
        this.layoutDirection = layoutDirection;
        this.gestureRecognizers = gestureRecognizers;
        this.creationParams = creationParams;
        this.creationParamsCodec = creationParamsCodec;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    viewType : string;

    onPlatformViewCreated : (id : number) => any;

    hitTestBehavior : lib5.PlatformViewHitTestBehavior;

    layoutDirection : any;

    gestureRecognizers : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>;

    creationParams : any;

    creationParamsCodec : lib7.MessageCodec<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : lib3.State<AndroidView> {
        return _AndroidViewState();
    }
}

export namespace UiKitView {
    export type Constructors = lib3.StatefulWidget.Constructors | 'UiKitView';
    export type Interface = Omit<UiKitView, Constructors>;
}
@DartClass
export class UiKitView extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,viewType? : string,onPlatformViewCreated? : (id : number) => any,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,layoutDirection? : any,creationParams? : any,creationParamsCodec? : lib7.MessageCodec<any>,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UiKitView(_namedArguments? : {key? : lib4.Key,viewType? : string,onPlatformViewCreated? : (id : number) => any,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,layoutDirection? : any,creationParams? : any,creationParamsCodec? : lib7.MessageCodec<any>,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        let {key,viewType,onPlatformViewCreated,hitTestBehavior,layoutDirection,creationParams,creationParamsCodec,gestureRecognizers} = Object.assign({
            "hitTestBehavior" : lib5.PlatformViewHitTestBehavior.opaque}, _namedArguments );
        this.assert = assert;
        this.viewType = viewType;
        this.onPlatformViewCreated = onPlatformViewCreated;
        this.hitTestBehavior = hitTestBehavior;
        this.layoutDirection = layoutDirection;
        this.creationParams = creationParams;
        this.creationParamsCodec = creationParamsCodec;
        this.gestureRecognizers = gestureRecognizers;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    viewType : string;

    onPlatformViewCreated : (id : number) => any;

    hitTestBehavior : lib5.PlatformViewHitTestBehavior;

    layoutDirection : any;

    creationParams : any;

    creationParamsCodec : lib7.MessageCodec<any>;

    gestureRecognizers : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : lib3.State<UiKitView> {
        return _UiKitViewState();
    }
}

export namespace _AndroidViewState {
    export type Constructors = lib3.State.Constructors | '_AndroidViewState';
    export type Interface = Omit<_AndroidViewState, Constructors>;
}
@DartClass
export class _AndroidViewState extends lib3.State<AndroidView> {
    _id : number;

    _controller : lib8.AndroidViewController;

    _layoutDirection : any;

    _initialized : boolean;

    private static __$_emptyRecognizersSet : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>;
    static get _emptyRecognizersSet() : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>> { 
        if (this.__$_emptyRecognizersSet===undefined) {
            this.__$_emptyRecognizersSet = core.DartSet();
        }
        return this.__$_emptyRecognizersSet;
    }
    static set _emptyRecognizersSet(__$value : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>)  { 
        this.__$_emptyRecognizersSet = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return _AndroidPlatformView({
            controller : this._controller,hitTestBehavior : this.widget.hitTestBehavior,gestureRecognizers : (this.widget.gestureRecognizers || _AndroidViewState._emptyRecognizersSet)});
    }
    _initializeOnce() : any {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
        this._createNewAndroidView();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        let newLayoutDirection : any = this._findLayoutDirection();
        let didChangeLayoutDirection : boolean = this._layoutDirection != newLayoutDirection;
        this._layoutDirection = newLayoutDirection;
        this._initializeOnce();
        if (didChangeLayoutDirection) {
            this._controller.setLayoutDirection(this._layoutDirection);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : AndroidView) : any {
        super.didUpdateWidget(oldWidget);
        let newLayoutDirection : any = this._findLayoutDirection();
        let didChangeLayoutDirection : boolean = this._layoutDirection != newLayoutDirection;
        this._layoutDirection = newLayoutDirection;
        if (this.widget.viewType != oldWidget.viewType) {
            this._controller.dispose();
            this._createNewAndroidView();
            return;
        }
        if (didChangeLayoutDirection) {
            this._controller.setLayoutDirection(this._layoutDirection);
        }
    }
    _findLayoutDirection() : any {
        /* TODO (AssertStatementImpl) : assert (widget.layoutDirection != null || debugCheckHasDirectionality(context)); */;
        return (this.widget.layoutDirection || lib9.Directionality.of(this.context));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    _createNewAndroidView() : any {
        this._id = lib8.properties.platformViewsRegistry.getNextPlatformViewId();
        this._controller = lib8.PlatformViewsService.initAndroidView({
            id : this._id,viewType : this.widget.viewType,layoutDirection : this._layoutDirection,onPlatformViewCreated : this.widget.onPlatformViewCreated,creationParams : this.widget.creationParams,creationParamsCodec : this.widget.creationParamsCodec});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AndroidViewState() {
        this._initialized = false;
    }
}

export namespace _UiKitViewState {
    export type Constructors = lib3.State.Constructors | '_UiKitViewState';
    export type Interface = Omit<_UiKitViewState, Constructors>;
}
@DartClass
export class _UiKitViewState extends lib3.State<UiKitView> {
    _controller : lib8.UiKitViewController;

    _layoutDirection : any;

    _initialized : boolean;

    private static __$_emptyRecognizersSet : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>;
    static get _emptyRecognizersSet() : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>> { 
        if (this.__$_emptyRecognizersSet===undefined) {
            this.__$_emptyRecognizersSet = core.DartSet();
        }
        return this.__$_emptyRecognizersSet;
    }
    static set _emptyRecognizersSet(__$value : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>)  { 
        this.__$_emptyRecognizersSet = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (op(Op.EQUALS,this._controller,null)) {
            return new lib9.SizedBox.expand();
        }
        return _UiKitPlatformView({
            controller : this._controller,hitTestBehavior : this.widget.hitTestBehavior,gestureRecognizers : (this.widget.gestureRecognizers || _UiKitViewState._emptyRecognizersSet)});
    }
    _initializeOnce() : any {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
        this._createNewUiKitView();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        let newLayoutDirection : any = this._findLayoutDirection();
        let didChangeLayoutDirection : boolean = this._layoutDirection != newLayoutDirection;
        this._layoutDirection = newLayoutDirection;
        this._initializeOnce();
        if (didChangeLayoutDirection) {
            ((_938_)=>(!!_938_)?_938_.setLayoutDirection(this._layoutDirection):null)(this._controller);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : UiKitView) : any {
        super.didUpdateWidget(oldWidget);
        let newLayoutDirection : any = this._findLayoutDirection();
        let didChangeLayoutDirection : boolean = this._layoutDirection != newLayoutDirection;
        this._layoutDirection = newLayoutDirection;
        if (this.widget.viewType != oldWidget.viewType) {
            ((_939_)=>(!!_939_)?_939_.dispose():null)(this._controller);
            this._createNewUiKitView();
            return;
        }
        if (didChangeLayoutDirection) {
            ((_940_)=>(!!_940_)?_940_.setLayoutDirection(this._layoutDirection):null)(this._controller);
        }
    }
    _findLayoutDirection() : any {
        /* TODO (AssertStatementImpl) : assert (widget.layoutDirection != null || debugCheckHasDirectionality(context)); */;
        return (this.widget.layoutDirection || lib9.Directionality.of(this.context));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_941_)=>(!!_941_)?_941_.dispose():null)(this._controller);
        super.dispose();
    }
    void : any;

    _createNewUiKitView() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : number = lib8.properties.platformViewsRegistry.getNextPlatformViewId();
            let controller : lib8.UiKitViewController = await lib8.PlatformViewsService.initUiKitView({
                id : id,viewType : this.widget.viewType,layoutDirection : this._layoutDirection,creationParams : this.widget.creationParams,creationParamsCodec : this.widget.creationParamsCodec});
            if (!this.mounted) {
                controller.dispose();
                return;
            }
            if (this.widget.onPlatformViewCreated != null) {
                this.widget.onPlatformViewCreated(id);
            }
            this.setState(() =>  {
                this._controller = controller;
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UiKitViewState() {
        this._initialized = false;
    }
}

export namespace _AndroidPlatformView {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | '_AndroidPlatformView';
    export type Interface = Omit<_AndroidPlatformView, Constructors>;
}
@DartClass
export class _AndroidPlatformView extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,controller? : lib8.AndroidViewController,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AndroidPlatformView(_namedArguments? : {key? : lib4.Key,controller? : lib8.AndroidViewController,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        let {key,controller,hitTestBehavior,gestureRecognizers} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.controller = controller;
        this.hitTestBehavior = hitTestBehavior;
        this.gestureRecognizers = gestureRecognizers;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    controller : lib8.AndroidViewController;

    hitTestBehavior : lib5.PlatformViewHitTestBehavior;

    gestureRecognizers : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib10.RenderObject {
        return lib5.RenderAndroidView({
            viewController : this.controller,hitTestBehavior : this.hitTestBehavior,gestureRecognizers : this.gestureRecognizers});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib5.RenderAndroidView) : any {
        renderObject.viewController = this.controller;
        renderObject.hitTestBehavior = this.hitTestBehavior;
        renderObject.updateGestureRecognizers(this.gestureRecognizers);
    }
}

export namespace _UiKitPlatformView {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | '_UiKitPlatformView';
    export type Interface = Omit<_UiKitPlatformView, Constructors>;
}
@DartClass
export class _UiKitPlatformView extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,controller? : lib8.UiKitViewController,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UiKitPlatformView(_namedArguments? : {key? : lib4.Key,controller? : lib8.UiKitViewController,hitTestBehavior? : lib5.PlatformViewHitTestBehavior,gestureRecognizers? : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        let {key,controller,hitTestBehavior,gestureRecognizers} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.controller = controller;
        this.hitTestBehavior = hitTestBehavior;
        this.gestureRecognizers = gestureRecognizers;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    controller : lib8.UiKitViewController;

    hitTestBehavior : lib5.PlatformViewHitTestBehavior;

    gestureRecognizers : core.DartSet<lib6.Factory<lib11.OneSequenceGestureRecognizer>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib10.RenderObject {
        return lib5.RenderUiKitView({
            viewController : this.controller,hitTestBehavior : this.hitTestBehavior,gestureRecognizers : this.gestureRecognizers});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib5.RenderUiKitView) : any {
        renderObject.viewController = this.controller;
        renderObject.hitTestBehavior = this.hitTestBehavior;
        renderObject.updateGestureRecognizers(this.gestureRecognizers);
    }
}

export class properties {
}
