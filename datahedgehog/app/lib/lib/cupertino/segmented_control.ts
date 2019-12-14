/** Library asset:datahedgehog_monitor/lib/lib/cupertino/segmented_control.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib10 from "./theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as math from "@dart2ts/dart/math";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";

export var _paintChild : (context : lib18.PaintingContext,offset : any,child : any,childIndex : number) => any = (context : lib18.PaintingContext,offset : any,child : any,childIndex : number) : any =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    let childParentData : _SegmentedControlContainerBoxParentData = child.parentData;
    context.canvas.drawRRect(childParentData.surroundingRect.shift(offset),((_) : any =>  {
        {
            _.color = properties.backgroundColors[childIndex];
            _.style = PaintingStyle.fill;
            return _;
        }
    })(Paint()));
    context.canvas.drawRRect(childParentData.surroundingRect.shift(offset),((_) : any =>  {
        {
            _.color = properties.borderColor;
            _.strokeWidth = 1.0;
            _.style = PaintingStyle.stroke;
            return _;
        }
    })(Paint()));
    context.paintChild(child,op(Op.PLUS,childParentData.offset,offset));
};
export var paint : (context : lib18.PaintingContext,offset : any) => any = (context : lib18.PaintingContext,offset : any) : any =>  {
    let child : any = firstChild;
    let index : number = 0;
    while (child != null){
        _paintChild(context,offset,child,index);
        child = childAfter(child);
        index += 1;
    }
};
export var performLayout : () => any = () : any =>  {
    let maxHeight : double = properties._kMinSegmentedControlHeight;
    let childWidth : double = op(Op.DIVIDE,constraints.minWidth,childCount);
    for(let child of getChildrenAsList()) {
        childWidth = math.max(childWidth,child.getMaxIntrinsicWidth(new core.DartDouble(double).infinity));
    }
    childWidth = math.min(childWidth,op(Op.DIVIDE,constraints.maxWidth,childCount));
    let child : any = firstChild;
    while (child != null){
        let boxHeight : double = child.getMaxIntrinsicHeight(childWidth);
        maxHeight = math.max(maxHeight,boxHeight);
        child = childAfter(child);
    }
    constraints.constrainHeight(maxHeight);
    let childConstraints : lib19.BoxConstraints = lib19.BoxConstraints.tightFor({
        width : childWidth,height : maxHeight});
    child = firstChild;
    while (child != null){
        child.layout(childConstraints,{
            parentUsesSize : true});
        child = childAfter(child);
    }
    switch (properties.textDirection) {
        case TextDirection.rtl:
            _layoutRects(childBefore,lastChild,firstChild);
            break;
        case TextDirection.ltr:
            _layoutRects(childAfter,firstChild,lastChild);
            break;
    }
    lib21.properties.size = constraints.constrain(Size(childWidth * childCount,maxHeight));
};
export var _layoutRects : (nextChild : (child : any) => any,leftChild : any,rightChild : any) => any = (nextChild : (child : any) => any,leftChild : any,rightChild : any) : any =>  {
    let child : any = leftChild;
    let start : double = 0.0;
    while (child != null){
        let childParentData : _SegmentedControlContainerBoxParentData = child.parentData;
        let childOffset : any = Offset(start,0.0);
        childParentData.offset = childOffset;
        let childRect : any = Rect.fromLTWH(start,0.0,child.size.width,child.size.height);
        let rChildRect : any;
        if (op(Op.EQUALS,child,leftChild)) {
            rChildRect = RRect.fromRectAndCorners(childRect,{
                topLeft : new bare.createInstance(any,null,3.0),bottomLeft : new bare.createInstance(any,null,3.0)});
        }else if (op(Op.EQUALS,child,rightChild)) {
            rChildRect = RRect.fromRectAndCorners(childRect,{
                topRight : new bare.createInstance(any,null,3.0),bottomRight : new bare.createInstance(any,null,3.0)});
        }else {
            rChildRect = RRect.fromRectAndCorners(childRect);
        }
        childParentData.surroundingRect = rChildRect;
        start += child.size.width;
        child = nextChild(child);
    }
};
export var hitTestChildren : (result : lib22.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib22.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (position != null); */;
    let child : any = lastChild;
    while (child != null){
        let childParentData : _SegmentedControlContainerBoxParentData = child.parentData;
        if (childParentData.surroundingRect.contains(position)) {
            return child.hitTest(result,{
                position : (op(Op.BITAND,Offset.zero,child.size)).center});
        }
        child = childParentData.previousSibling;
    }
    return false;
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let child : any = firstChild;
    let minWidth : double = 0.0;
    while (child != null){
        let childParentData : _SegmentedControlContainerBoxParentData = child.parentData;
        let childWidth : double = child.getMinIntrinsicWidth(height);
        minWidth = math.max(minWidth,childWidth);
        child = childParentData.nextSibling;
    }
    return minWidth * childCount;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let child : any = firstChild;
    let maxWidth : double = 0.0;
    while (child != null){
        let childParentData : _SegmentedControlContainerBoxParentData = child.parentData;
        let childWidth : double = child.getMaxIntrinsicWidth(height);
        maxWidth = math.max(maxWidth,childWidth);
        child = childParentData.nextSibling;
    }
    return maxWidth * childCount;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    let child : any = firstChild;
    let minHeight : double = 0.0;
    while (child != null){
        let childParentData : _SegmentedControlContainerBoxParentData = child.parentData;
        let childHeight : double = child.getMinIntrinsicHeight(width);
        minHeight = math.max(minHeight,childHeight);
        child = childParentData.nextSibling;
    }
    return minHeight;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    let child : any = firstChild;
    let maxHeight : double = 0.0;
    while (child != null){
        let childParentData : _SegmentedControlContainerBoxParentData = child.parentData;
        let childHeight : double = child.getMaxIntrinsicHeight(width);
        maxHeight = math.max(maxHeight,childHeight);
        child = childParentData.nextSibling;
    }
    return maxHeight;
};
export var setupParentData : (child : any) => any = (child : any) : any =>  {
    if (isNot(child.parentData, _SegmentedControlContainerBoxParentData)) {
        child.parentData = _SegmentedControlContainerBoxParentData();
    }
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    return defaultComputeDistanceToHighestActualBaseline(baseline);
};
export namespace _RenderSegmentedControl {
    export type Constructors = '_RenderSegmentedControl';
    export type Interface<T> = Omit<_RenderSegmentedControl<T>, Constructors>;
}
@DartClass
@With(any,any)
export class _RenderSegmentedControl<T> extends any implements any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<any>,selectedIndex? : number,pressedIndex? : number,textDirection? : any,backgroundColors? : core.DartList<any>,borderColor? : any}) {
    }
    @defaultConstructor
    _RenderSegmentedControl(_namedArguments? : {children? : core.DartList<any>,selectedIndex? : number,pressedIndex? : number,textDirection? : any,backgroundColors? : core.DartList<any>,borderColor? : any}) {
        let {children,selectedIndex,pressedIndex,textDirection,backgroundColors,borderColor} = Object.assign({
        }, _namedArguments );
        this._textDirection = properties.textDirection;
        this._selectedIndex = properties.selectedIndex;
        this._pressedIndex = properties.pressedIndex;
        this._backgroundColors = properties.backgroundColors;
        this._borderColor = properties.borderColor;
        this.assert = assert;
    }
     : any;

    _textDirection;
    _selectedIndex;
    _pressedIndex;
    _backgroundColors;
    _borderColor;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export namespace _SegmentedControlContainerBoxParentData {
    export type Constructors = lib19.ContainerBoxParentData.Constructors | '_SegmentedControlContainerBoxParentData';
    export type Interface = Omit<_SegmentedControlContainerBoxParentData, Constructors>;
}
@DartClass
export class _SegmentedControlContainerBoxParentData extends lib19.ContainerBoxParentData<any> {
    surroundingRect : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SegmentedControlContainerBoxParentData() {
    }
}

export namespace _SegmentedControlState {
    export type Constructors = '_SegmentedControlState';
    export type Interface<T> = Omit<_SegmentedControlState<T>, Constructors>;
}
@DartClass
@With(any)
export class _SegmentedControlState<T> extends any implements any.Interface {
    _pressedKey : T;

    _selectionControllers : core.DartList<lib7.AnimationController>;

    _childTweens : core.DartList<lib8.ColorTween>;

    _forwardBackgroundColorTween : lib8.ColorTween;

    _reverseBackgroundColorTween : lib8.ColorTween;

    _textColorTween : lib8.ColorTween;

    _selectedColor : any;

    _unselectedColor : any;

    _borderColor : any;

    _pressedColor : any;

    createAnimationController() : lib7.AnimationController {
        return ((_) : any =>  {
            {
                addListener(() =>  {
                    setState(() =>  {
                    });
                });
                return _;
            }
        })(lib7.AnimationController({
            duration : properties._kFadeDuration,vsync : this}));
    }
    _updateColors() : boolean {
        /* TODO (AssertStatementImpl) : assert (mounted, 'This should only be called after didUpdateDependencies'); */;
        let changed : boolean = false;
        let selectedColor : any = (widget.selectedColor || lib10.CupertinoTheme.of(lib9.properties.context).primaryColor);
        if (this._selectedColor != selectedColor) {
            changed = true;
            this._selectedColor = selectedColor;
        }
        let unselectedColor : any = (widget.unselectedColor || lib10.CupertinoTheme.of(lib9.properties.context).primaryContrastingColor);
        if (this._unselectedColor != unselectedColor) {
            changed = true;
            this._unselectedColor = unselectedColor;
        }
        let borderColor : any = (widget.borderColor || lib10.CupertinoTheme.of(lib9.properties.context).primaryColor);
        if (this._borderColor != borderColor) {
            changed = true;
            this._borderColor = borderColor;
        }
        let pressedColor : any = (widget.pressedColor || lib10.CupertinoTheme.of(lib9.properties.context).primaryColor.withOpacity(0.2));
        if (this._pressedColor != pressedColor) {
            changed = true;
            this._pressedColor = pressedColor;
        }
        this._forwardBackgroundColorTween = lib8.ColorTween({
            begin : this._pressedColor,end : this._selectedColor});
        this._reverseBackgroundColorTween = lib8.ColorTween({
            begin : this._unselectedColor,end : this._selectedColor});
        this._textColorTween = lib8.ColorTween({
            begin : this._selectedColor,end : this._unselectedColor});
        return changed;
    }
    _updateAnimationControllers() : any {
        /* TODO (AssertStatementImpl) : assert (mounted, 'This should only be called after didUpdateDependencies'); */;
        for(let controller of this._selectionControllers) {
            controller.dispose();
        }
        this._selectionControllers.clear();
        this._childTweens.clear();
        for(let key of widget.children.keys) {
            let animationController : lib7.AnimationController = this.createAnimationController();
            if (op(Op.EQUALS,widget.groupValue,key)) {
                this._childTweens.add(this._reverseBackgroundColorTween);
                animationController.value = 1.0;
            }else {
                this._childTweens.add(this._forwardBackgroundColorTween);
            }
            this._selectionControllers.add(animationController);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        if (this._updateColors()) {
            this._updateAnimationControllers();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CupertinoSegmentedControl<T>) : any {
        super.didUpdateWidget(oldWidget);
        if (this._updateColors() || oldWidget.children.length != widget.children.length) {
            this._updateAnimationControllers();
        }
        if (oldWidget.groupValue != widget.groupValue) {
            let index : number = 0;
            for(let key of widget.children.keys) {
                if (op(Op.EQUALS,widget.groupValue,key)) {
                    this._childTweens[index] = this._forwardBackgroundColorTween;
                    this._selectionControllers[index].forward();
                }else {
                    this._childTweens[index] = this._reverseBackgroundColorTween;
                    this._selectionControllers[index].reverse();
                }
                index += 1;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let animationController of this._selectionControllers) {
            animationController.dispose();
        }
        super.dispose();
    }
    _onTapDown(currentKey : T) : any {
        if (op(Op.EQUALS,this._pressedKey,null) && currentKey != widget.groupValue) {
            setState(() =>  {
                this._pressedKey = currentKey;
            });
        }
    }
    _onTapCancel() : any {
        setState(() =>  {
            this._pressedKey = null;
        });
    }
    _onTap(currentKey : T) : any {
        if (currentKey != widget.groupValue && op(Op.EQUALS,currentKey,this._pressedKey)) {
            widget.onValueChanged(currentKey);
            this._pressedKey = null;
        }
    }
    getTextColor(index : number,currentKey : T) : any {
        if (this._selectionControllers[index].isAnimating) return this._textColorTween.evaluate(this._selectionControllers[index]);
        if (op(Op.EQUALS,widget.groupValue,currentKey)) return this._unselectedColor;
        return this._selectedColor;
    }
    getBackgroundColor(index : number,currentKey : T) : any {
        if (this._selectionControllers[index].isAnimating) return this._childTweens[index].evaluate(this._selectionControllers[index]);
        if (op(Op.EQUALS,widget.groupValue,currentKey)) return this._selectedColor;
        if (op(Op.EQUALS,this._pressedKey,currentKey)) return this._pressedColor;
        return this._unselectedColor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let _gestureChildren : core.DartList<lib4.Widget> = new core.DartList.literal<lib4.Widget>();
        let _backgroundColors : core.DartList<any> = new core.DartList.literal<any>();
        let index : number = 0;
        let selectedIndex : number;
        let pressedIndex : number;
        for(let currentKey of widget.children.keys) {
            selectedIndex = (op(Op.EQUALS,widget.groupValue,currentKey)) ? index : selectedIndex;
            pressedIndex = (op(Op.EQUALS,this._pressedKey,currentKey)) ? index : pressedIndex;
            let textStyle : lib12.TextStyle = lib11.DefaultTextStyle.of(context).style.copyWith({
                color : this.getTextColor(index,currentKey)});
            let iconTheme : lib13.IconThemeData = lib13.IconThemeData({
                color : this.getTextColor(index,currentKey)});
            let child : lib4.Widget = lib14.Center({
                child : op(Op.INDEX,widget.children,currentKey)});
            child = lib6.GestureDetector({
                onTapDown : (event : lib15.TapDownDetails) =>  {
                    this._onTapDown(currentKey);
                },onTapCancel : this._onTapCancel.bind(this),onTap : () =>  {
                    this._onTap(currentKey);
                },child : lib16.IconTheme({
                    data : iconTheme,child : lib11.DefaultTextStyle({
                        style : textStyle,child : lib14.Semantics({
                            button : true,inMutuallyExclusiveGroup : true,selected : op(Op.EQUALS,widget.groupValue,currentKey),child : child})})})});
            _backgroundColors.add(this.getBackgroundColor(index,currentKey));
            _gestureChildren.add(child);
            index += 1;
        }
        let box : lib4.Widget = _SegmentedControlRenderWidget({
            children : _gestureChildren,selectedIndex : selectedIndex,pressedIndex : pressedIndex,backgroundColors : _backgroundColors,borderColor : this._borderColor});
        return lib14.Padding({
            padding : properties._kHorizontalItemPadding.resolve(lib14.Directionality.of(context)),child : lib14.UnconstrainedBox({
                constrainedAxis : lib17.Axis.horizontal,child : box})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SegmentedControlState() {
        this._selectionControllers = new core.DartList.literal<lib7.AnimationController>();
        this._childTweens = new core.DartList.literal<lib8.ColorTween>();
    }
}

export namespace CupertinoSegmentedControl {
    export type Constructors = lib4.StatefulWidget.Constructors | 'CupertinoSegmentedControl';
    export type Interface<T> = Omit<CupertinoSegmentedControl<T>, Constructors>;
}
@DartClass
export class CupertinoSegmentedControl<T> extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,children? : core.DartMap<T,lib4.Widget>,onValueChanged? : <T>(value : T) => void,groupValue? : T,unselectedColor? : any,selectedColor? : any,borderColor? : any,pressedColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoSegmentedControl(_namedArguments? : {key? : lib5.Key,children? : core.DartMap<T,lib4.Widget>,onValueChanged? : <T>(value : T) => void,groupValue? : T,unselectedColor? : any,selectedColor? : any,borderColor? : any,pressedColor? : any}) {
        let {key,children,onValueChanged,groupValue,unselectedColor,selectedColor,borderColor,pressedColor} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.children = children;
        this.onValueChanged = onValueChanged;
        this.groupValue = groupValue;
        this.unselectedColor = unselectedColor;
        this.selectedColor = selectedColor;
        this.borderColor = borderColor;
        this.pressedColor = pressedColor;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    any( : <T>(child : T) => any, : any) {
        return op(Op.EQUALS,lib6.properties.child,this.groupValue);
    }
     : any;

     : any;

    children : core.DartMap<T,lib4.Widget>;

    groupValue : T;

    onValueChanged : <T>(value : T) => void;

    unselectedColor : any;

    selectedColor : any;

    borderColor : any;

    pressedColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _SegmentedControlState<T> {
        return _SegmentedControlState();
    }
}

export namespace _SegmentedControlRenderWidget {
    export type Constructors = lib4.MultiChildRenderObjectWidget.Constructors | '_SegmentedControlRenderWidget';
    export type Interface<T> = Omit<_SegmentedControlRenderWidget<T>, Constructors>;
}
@DartClass
export class _SegmentedControlRenderWidget<T> extends lib4.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,children? : core.DartList<lib4.Widget>,selectedIndex? : number,pressedIndex? : number,backgroundColors? : core.DartList<any>,borderColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SegmentedControlRenderWidget(_namedArguments? : {key? : lib5.Key,children? : core.DartList<lib4.Widget>,selectedIndex? : number,pressedIndex? : number,backgroundColors? : core.DartList<any>,borderColor? : any}) {
        let {key,children,selectedIndex,pressedIndex,backgroundColors,borderColor} = Object.assign({
            "children" : new core.DartList.literal<lib4.Widget>()}, _namedArguments );
        super.MultiChildRenderObjectWidget({
            key : key,children : children});
        this.selectedIndex = selectedIndex;
        this.pressedIndex = pressedIndex;
        this.backgroundColors = backgroundColors;
        this.borderColor = borderColor;
    }
    selectedIndex : number;

    pressedIndex : number;

    backgroundColors : core.DartList<any>;

    borderColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib4.BuildContext) : lib18.RenderObject {
        return _RenderSegmentedControl({
            textDirection : lib14.Directionality.of(context),selectedIndex : this.selectedIndex,pressedIndex : this.pressedIndex,backgroundColors : this.backgroundColors,borderColor : this.borderColor});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib4.BuildContext,renderObject : _RenderSegmentedControl<T>) : any {
        ((_) : _RenderSegmentedControl<T> =>  {
            {
                _.textDirection = lib14.Directionality.of(context);
                _.selectedIndex = this.selectedIndex;
                _.pressedIndex = this.pressedIndex;
                _.backgroundColors = this.backgroundColors;
                _.borderColor = this.borderColor;
                return _;
            }
        })(renderObject);
    }
}

export class properties {
    static set textDirection(value : any) {
        if (op(Op.EQUALS,properties._textDirection,value)) {
            return;
        }
        properties._textDirection = value;
        markNeedsLayout();
    }
    private static __$_kMinSegmentedControlHeight : double;
    static get _kMinSegmentedControlHeight() : double { 
        if (this.__$_kMinSegmentedControlHeight===undefined) {
            this.__$_kMinSegmentedControlHeight = 28.0;
        }
        return this.__$_kMinSegmentedControlHeight;
    }
    static set _kMinSegmentedControlHeight(__$value : double)  { 
        this.__$_kMinSegmentedControlHeight = __$value;
    }

    private static __$_kFadeDuration : core.DartDuration;
    static get _kFadeDuration() : core.DartDuration { 
        if (this.__$_kFadeDuration===undefined) {
            this.__$_kFadeDuration = core.DartDuration({
                milliseconds : 165});
        }
        return this.__$_kFadeDuration;
    }
    static set _kFadeDuration(__$value : core.DartDuration)  { 
        this.__$_kFadeDuration = __$value;
    }

    static get pressedIndex() : number {
        return properties._pressedIndex;
    }
    static get selectedIndex() : number {
        return properties._selectedIndex;
    }
    private static __$_selectedIndex : number;
    static get _selectedIndex() : number { 
        return this.__$_selectedIndex;
    }
    static set _selectedIndex(__$value : number)  { 
        this.__$_selectedIndex = __$value;
    }

    static set selectedIndex(value : number) {
        if (properties._selectedIndex == value) {
            return;
        }
        properties._selectedIndex = value;
        markNeedsPaint();
    }
    private static __$_kHorizontalItemPadding : lib3.EdgeInsets;
    static get _kHorizontalItemPadding() : lib3.EdgeInsets { 
        if (this.__$_kHorizontalItemPadding===undefined) {
            this.__$_kHorizontalItemPadding = lib3.EdgeInsets.symmetric({
                horizontal : 16.0});
        }
        return this.__$_kHorizontalItemPadding;
    }
    static set _kHorizontalItemPadding(__$value : lib3.EdgeInsets)  { 
        this.__$_kHorizontalItemPadding = __$value;
    }

    private static __$_pressedIndex : number;
    static get _pressedIndex() : number { 
        return this.__$_pressedIndex;
    }
    static set _pressedIndex(__$value : number)  { 
        this.__$_pressedIndex = __$value;
    }

    static set pressedIndex(value : number) {
        if (properties._pressedIndex == value) {
            return;
        }
        properties._pressedIndex = value;
        markNeedsPaint();
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

    private static __$_borderColor : any;
    static get _borderColor() : any { 
        return this.__$_borderColor;
    }
    static set _borderColor(__$value : any)  { 
        this.__$_borderColor = __$value;
    }

    static get backgroundColors() : core.DartList<any> {
        return properties._backgroundColors;
    }
    private static __$_backgroundColors : core.DartList<any>;
    static get _backgroundColors() : core.DartList<any> { 
        return this.__$_backgroundColors;
    }
    static set _backgroundColors(__$value : core.DartList<any>)  { 
        this.__$_backgroundColors = __$value;
    }

    static set backgroundColors(value : core.DartList<any>) {
        if (properties._backgroundColors == value) {
            return;
        }
        properties._backgroundColors = value;
        markNeedsPaint();
    }
    static get borderColor() : any {
        return properties._borderColor;
    }
    static set borderColor(value : any) {
        if (op(Op.EQUALS,properties._borderColor,value)) {
            return;
        }
        properties._borderColor = value;
        markNeedsPaint();
    }
}
