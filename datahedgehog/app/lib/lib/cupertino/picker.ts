/** Library asset:datahedgehog_monitor/lib/lib/cupertino/picker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/list_wheel_scroll_view";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/table";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/services/haptic_feedback";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/gradient";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";

export namespace CupertinoPicker {
    export type Constructors = lib3.StatefulWidget.Constructors | 'CupertinoPicker' | 'builder';
    export type Interface = Omit<CupertinoPicker, Constructors>;
}
@DartClass
export class CupertinoPicker extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,diameterRatio? : double,backgroundColor? : any,offAxisFraction? : double,useMagnifier? : boolean,magnification? : double,scrollController? : lib5.FixedExtentScrollController,itemExtent? : double,onSelectedItemChanged? : <T>(value : number) => void,children? : core.DartList<lib3.Widget>,looping? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoPicker(_namedArguments? : {key? : lib4.Key,diameterRatio? : double,backgroundColor? : any,offAxisFraction? : double,useMagnifier? : boolean,magnification? : double,scrollController? : lib5.FixedExtentScrollController,itemExtent? : double,onSelectedItemChanged? : <T>(value : number) => void,children? : core.DartList<lib3.Widget>,looping? : boolean}) {
        let {key,diameterRatio,backgroundColor,offAxisFraction,useMagnifier,magnification,scrollController,itemExtent,onSelectedItemChanged,children,looping} = Object.assign({
            "diameterRatio" : properties._kDefaultDiameterRatio,
            "backgroundColor" : properties._kDefaultBackground,
            "offAxisFraction" : 0.0,
            "useMagnifier" : false,
            "magnification" : 1.0,
            "looping" : false}, _namedArguments );
        this.childDelegate = looping ? lib5.ListWheelChildLoopingListDelegate({
            children : lib6.properties.children}) : lib5.ListWheelChildListDelegate({
            children : lib6.properties.children});
        this.childDelegate = lib5.ListWheelChildBuilderDelegate({
            builder : itemBuilder,childCount : childCount});
        this.assert = assert;
        this.diameterRatio = diameterRatio;
        this.backgroundColor = backgroundColor;
        this.offAxisFraction = offAxisFraction;
        this.useMagnifier = useMagnifier;
        this.magnification = magnification;
        this.scrollController = scrollController;
        this.itemExtent = itemExtent;
        this.onSelectedItemChanged = onSelectedItemChanged;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    childDelegate;
    super;

     : any;

     : any;

    @namedConstructor
    builder(_namedArguments? : {key? : lib4.Key,diameterRatio? : double,backgroundColor? : any,offAxisFraction? : double,useMagnifier? : boolean,magnification? : double,scrollController? : lib5.FixedExtentScrollController,itemExtent? : double,onSelectedItemChanged? : <T>(value : number) => void,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,childCount? : number}) {
        let {key,diameterRatio,backgroundColor,offAxisFraction,useMagnifier,magnification,scrollController,itemExtent,onSelectedItemChanged,itemBuilder,childCount} = Object.assign({
            "diameterRatio" : properties._kDefaultDiameterRatio,
            "backgroundColor" : properties._kDefaultBackground,
            "offAxisFraction" : 0.0,
            "useMagnifier" : false,
            "magnification" : 1.0}, _namedArguments );
        this.childDelegate = looping ? lib5.ListWheelChildLoopingListDelegate({
            children : lib6.properties.children}) : lib5.ListWheelChildListDelegate({
            children : lib6.properties.children});
        this.childDelegate = lib5.ListWheelChildBuilderDelegate({
            builder : itemBuilder,childCount : childCount});
        this.assert = assert;
        this.diameterRatio = diameterRatio;
        this.backgroundColor = backgroundColor;
        this.offAxisFraction = offAxisFraction;
        this.useMagnifier = useMagnifier;
        this.magnification = magnification;
        this.scrollController = scrollController;
        this.itemExtent = itemExtent;
        this.onSelectedItemChanged = onSelectedItemChanged;
    }
    static builder : new(_namedArguments? : {key? : lib4.Key,diameterRatio? : double,backgroundColor? : any,offAxisFraction? : double,useMagnifier? : boolean,magnification? : double,scrollController? : lib5.FixedExtentScrollController,itemExtent? : double,onSelectedItemChanged? : <T>(value : number) => void,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,childCount? : number}) => CupertinoPicker;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    childDelegate;
    super;

     : any;

     : any;

    diameterRatio : double;

    backgroundColor : any;

    offAxisFraction : double;

    useMagnifier : boolean;

    magnification : double;

    scrollController : lib5.FixedExtentScrollController;

    itemExtent : double;

    onSelectedItemChanged : <T>(value : number) => void;

    childDelegate : lib5.ListWheelChildDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : any {
        return _CupertinoPickerState();
    }
}

export namespace _CupertinoPickerState {
    export type Constructors = '_CupertinoPickerState';
    export type Interface = Omit<_CupertinoPickerState, Constructors>;
}
@DartClass
export class _CupertinoPickerState extends any {
    _lastHapticIndex : number;

    _controller : lib5.FixedExtentScrollController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        if (op(Op.EQUALS,widget.scrollController,null)) {
            this._controller = lib5.FixedExtentScrollController();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CupertinoPicker) : any {
        if (widget.scrollController != null && op(Op.EQUALS,oldWidget.scrollController,null)) {
            this._controller = null;
        }else if (op(Op.EQUALS,widget.scrollController,null) && oldWidget.scrollController != null) {
            /* TODO (AssertStatementImpl) : assert (_controller == null); */;
            this._controller = lib5.FixedExtentScrollController();
        }
        super.didUpdateWidget(oldWidget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_520_)=>(!!_520_)?_520_.dispose():null)(this._controller);
        super.dispose();
    }
    _handleSelectedItemChanged(index : number) : any {
        if (op(Op.EQUALS,lib7.properties.defaultTargetPlatform,lib7.TargetPlatform.iOS) && index != this._lastHapticIndex) {
            this._lastHapticIndex = index;
            lib8.HapticFeedback.selectionClick();
        }
        if (widget.onSelectedItemChanged != null) {
            widget.onSelectedItemChanged(index);
        }
    }
    _buildGradientScreen() : lib3.Widget {
        if (widget.backgroundColor != null && op(Op.LT,widget.backgroundColor.alpha,255)) return lib9.Container();
        let widgetBackgroundColor : any = (widget.backgroundColor || new bare.createInstance(any,null,4294967295));
        return lib13.Positioned.fill({
            child : lib13.IgnorePointer({
                child : lib9.Container({
                    decoration : lib12.BoxDecoration({
                        gradient : lib11.LinearGradient({
                            colors : new core.DartList.literal<any>(widgetBackgroundColor,widgetBackgroundColor.withAlpha(242),widgetBackgroundColor.withAlpha(221),widgetBackgroundColor.withAlpha(0),widgetBackgroundColor.withAlpha(0),widgetBackgroundColor.withAlpha(221),widgetBackgroundColor.withAlpha(242),widgetBackgroundColor),stops : new core.DartList.literal<double>(0.0,0.05,0.09,0.22,0.78,0.91,0.95,1.0),begin : lib10.Alignment.topCenter,end : lib10.Alignment.bottomCenter})})})})});
    }
    _buildMagnifierScreen() : lib3.Widget {
        let foreground : any = ((_521_)=>(!!_521_)?_521_.withAlpha((op(Op.TIMES,widget.backgroundColor.alpha,properties._kForegroundScreenOpacityFraction)).toInt()):null)(widget.backgroundColor);
        return lib13.IgnorePointer({
            child : lib13.Column({
                children : new core.DartList.literal<lib3.Widget>(lib13.Expanded({
                    child : lib9.Container({
                        color : foreground})}),lib9.Container({
                    decoration : new lib12.BoxDecoration({
                        border : lib15.Border({
                            top : lib14.BorderSide({
                                width : 0.0,color : properties._kHighlighterBorder}),bottom : lib14.BorderSide({
                                width : 0.0,color : properties._kHighlighterBorder})})}),constraints : lib16.BoxConstraints.expand({
                        height : op(Op.TIMES,widget.itemExtent,widget.magnification)})}),lib13.Expanded({
                    child : lib9.Container({
                        color : foreground})}))})});
    }
    _buildUnderMagnifierScreen() : lib3.Widget {
        let foreground : any = ((_522_)=>(!!_522_)?_522_.withAlpha((op(Op.TIMES,widget.backgroundColor.alpha,properties._kForegroundScreenOpacityFraction)).toInt()):null)(widget.backgroundColor);
        return lib13.Column({
            children : new core.DartList.literal<lib3.Widget>(lib13.Expanded({
                child : lib9.Container()}),lib9.Container({
                color : foreground,constraints : lib16.BoxConstraints.expand({
                    height : op(Op.TIMES,widget.itemExtent,widget.magnification)})}),lib13.Expanded({
                child : lib9.Container()}))});
    }
    _addBackgroundToChild(child : lib3.Widget) : lib3.Widget {
        return lib9.DecoratedBox({
            decoration : lib12.BoxDecoration({
                color : widget.backgroundColor}),child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let result : lib3.Widget = lib13.Stack({
            children : new core.DartList.literal<lib3.Widget>(lib13.Positioned.fill({
                child : _CupertinoPickerSemantics({
                    scrollController : (widget.scrollController || this._controller),child : lib5.ListWheelScrollView.useDelegate({
                        controller : (widget.scrollController || this._controller),physics : new lib5.FixedExtentScrollPhysics(),diameterRatio : widget.diameterRatio,perspective : properties._kDefaultPerspective,offAxisFraction : widget.offAxisFraction,useMagnifier : widget.useMagnifier,magnification : widget.magnification,itemExtent : widget.itemExtent,onSelectedItemChanged : this._handleSelectedItemChanged.bind(this),childDelegate : widget.childDelegate})})}),this._buildGradientScreen(),this._buildMagnifierScreen())});
        if (widget.backgroundColor != null && op(Op.LT,widget.backgroundColor.alpha,255)) {
            result = lib13.Stack({
                children : new core.DartList.literal<lib3.Widget>(this._buildUnderMagnifierScreen(),this._addBackgroundToChild(result))});
        }else {
            result = this._addBackgroundToChild(result);
        }
        return result;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoPickerState() {
    }
}

export namespace _CupertinoPickerSemantics {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | '_CupertinoPickerSemantics';
    export type Interface = Omit<_CupertinoPickerSemantics, Constructors>;
}
@DartClass
export class _CupertinoPickerSemantics extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,scrollController? : lib5.FixedExtentScrollController}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoPickerSemantics(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,scrollController? : lib5.FixedExtentScrollController}) {
        let {key,child,scrollController} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.scrollController = scrollController;
    }
    scrollController : lib5.FixedExtentScrollController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderObject {
        return _RenderCupertinoPickerSemantics(this.scrollController,lib13.Directionality.of(context));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderCupertinoPickerSemantics) : any {
        ((_) : _RenderCupertinoPickerSemantics =>  {
            {
                _.textDirection = lib13.Directionality.of(context);
                _.controller = this.scrollController;
                return _;
            }
        })(renderObject);
    }
}

export namespace _RenderCupertinoPickerSemantics {
    export type Constructors = lib18.RenderProxyBox.Constructors | '_RenderCupertinoPickerSemantics';
    export type Interface = Omit<_RenderCupertinoPickerSemantics, Constructors>;
}
@DartClass
export class _RenderCupertinoPickerSemantics extends lib18.RenderProxyBox {
    constructor(controller : lib5.FixedExtentScrollController,_textDirection : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderCupertinoPickerSemantics(controller : lib5.FixedExtentScrollController,_textDirection : any) {
        this._currentIndex = 0;
        this._textDirection = _textDirection;
        this.controller = controller;
    }
    get controller() : lib5.FixedExtentScrollController {
        return this._controller;
    }
    _controller : lib5.FixedExtentScrollController;

    set controller(value : lib5.FixedExtentScrollController) {
        if (op(Op.EQUALS,value,this._controller)) return;
        if (this._controller != null) this._controller.removeListener(this._handleScrollUpdate.bind(this));else this._currentIndex = (value.initialItem || 0);
        value.addListener(this._handleScrollUpdate.bind(this));
        this._controller = value;
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        if (op(Op.EQUALS,this.textDirection,value)) return;
        this._textDirection = value;
        markNeedsSemanticsUpdate();
    }
    _currentIndex : number;

    _handleIncrease() : any {
        this.controller.jumpToItem(this._currentIndex + 1);
    }
    _handleDecrease() : any {
        if (this._currentIndex == 0) return;
        this.controller.jumpToItem(this._currentIndex - 1);
    }
    _handleScrollUpdate() : any {
        if (this.controller.selectedItem == this._currentIndex) return;
        this._currentIndex = this.controller.selectedItem;
        markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib19.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        config.isSemanticBoundary = true;
        config.textDirection = this.textDirection;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assembleSemanticsNode(node : lib19.SemanticsNode,config : lib19.SemanticsConfiguration,children : core.DartIterable<lib19.SemanticsNode>) : any {
        if (children.isEmpty) return super.assembleSemanticsNode(node,config,children);
        let scrollable : lib19.SemanticsNode = children.first;
        let indexedChildren : core.DartMap<number,lib19.SemanticsNode> = new core.DartMap.literal([
        ]);
        scrollable.visitChildren((child : lib19.SemanticsNode) =>  {
            /* TODO (AssertStatementImpl) : assert (child.indexInParent != null); */;
            indexedChildren.set(child.indexInParent,child);
            return true;
        });
        if (op(Op.EQUALS,indexedChildren.get(this._currentIndex),null)) {
            return node.updateWith({
                config : config});
        }
        config.value = indexedChildren.get(this._currentIndex).label;
        let previousChild : lib19.SemanticsNode = indexedChildren.get(this._currentIndex - 1);
        let nextChild : lib19.SemanticsNode = indexedChildren.get(this._currentIndex + 1);
        if (nextChild != null) {
            config.increasedValue = nextChild.label;
            config.onIncrease = this._handleIncrease.bind(this);
        }
        if (previousChild != null) {
            config.decreasedValue = previousChild.label;
            config.onDecrease = this._handleDecrease.bind(this);
        }
        node.updateWith({
            config : config});
    }
}

export class properties {
    private static __$_kHighlighterBorder : any;
    static get _kHighlighterBorder() : any { 
        if (this.__$_kHighlighterBorder===undefined) {
            this.__$_kHighlighterBorder = Color(4286545791);
        }
        return this.__$_kHighlighterBorder;
    }
    static set _kHighlighterBorder(__$value : any)  { 
        this.__$_kHighlighterBorder = __$value;
    }

    private static __$_kDefaultBackground : any;
    static get _kDefaultBackground() : any { 
        if (this.__$_kDefaultBackground===undefined) {
            this.__$_kDefaultBackground = Color(4292007131);
        }
        return this.__$_kDefaultBackground;
    }
    static set _kDefaultBackground(__$value : any)  { 
        this.__$_kDefaultBackground = __$value;
    }

    private static __$_kDefaultDiameterRatio : double;
    static get _kDefaultDiameterRatio() : double { 
        if (this.__$_kDefaultDiameterRatio===undefined) {
            this.__$_kDefaultDiameterRatio = 1.35;
        }
        return this.__$_kDefaultDiameterRatio;
    }
    static set _kDefaultDiameterRatio(__$value : double)  { 
        this.__$_kDefaultDiameterRatio = __$value;
    }

    private static __$_kDefaultPerspective : double;
    static get _kDefaultPerspective() : double { 
        if (this.__$_kDefaultPerspective===undefined) {
            this.__$_kDefaultPerspective = 0.004;
        }
        return this.__$_kDefaultPerspective;
    }
    static set _kDefaultPerspective(__$value : double)  { 
        this.__$_kDefaultPerspective = __$value;
    }

    private static __$_kForegroundScreenOpacityFraction : double;
    static get _kForegroundScreenOpacityFraction() : double { 
        if (this.__$_kForegroundScreenOpacityFraction===undefined) {
            this.__$_kForegroundScreenOpacityFraction = 0.7;
        }
        return this.__$_kForegroundScreenOpacityFraction;
    }
    static set _kForegroundScreenOpacityFraction(__$value : double)  { 
        this.__$_kForegroundScreenOpacityFraction = __$value;
    }

}
