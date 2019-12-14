/** Library asset:datahedgehog_monitor/lib/lib/cupertino/action_sheet.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./colors";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_controller";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/custom_layout";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib27 from "./scrollbar";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/foundation/node";

export namespace CupertinoActionSheet {
    export type Constructors = lib6.StatelessWidget.Constructors | 'CupertinoActionSheet';
    export type Interface = Omit<CupertinoActionSheet, Constructors>;
}
@DartClass
export class CupertinoActionSheet extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib7.Key,title? : lib6.Widget,message? : lib6.Widget,actions? : core.DartList<lib6.Widget>,messageScrollController? : lib8.ScrollController,actionScrollController? : lib8.ScrollController,cancelButton? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoActionSheet(_namedArguments? : {key? : lib7.Key,title? : lib6.Widget,message? : lib6.Widget,actions? : core.DartList<lib6.Widget>,messageScrollController? : lib8.ScrollController,actionScrollController? : lib8.ScrollController,cancelButton? : lib6.Widget}) {
        let {key,title,message,actions,messageScrollController,actionScrollController,cancelButton} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.title = title;
        this.message = message;
        this.actions = actions;
        this.messageScrollController = messageScrollController;
        this.actionScrollController = actionScrollController;
        this.cancelButton = cancelButton;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    title : lib6.Widget;

    message : lib6.Widget;

    actions : core.DartList<lib6.Widget>;

    messageScrollController : lib8.ScrollController;

    actionScrollController : lib8.ScrollController;

    cancelButton : lib6.Widget;

    _buildContent() : lib6.Widget {
        let content : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>();
        if (this.title != null || this.message != null) {
            let titleSection : lib6.Widget = _CupertinoAlertContentSection({
                title : this.title,message : this.message,scrollController : this.messageScrollController});
            content.add(lib9.Flexible({
                child : titleSection}));
        }
        return lib11.Container({
            color : properties._kBackgroundColor,child : lib9.Column({
                mainAxisSize : lib10.MainAxisSize.min,crossAxisAlignment : lib10.CrossAxisAlignment.stretch,children : content})});
    }
    _buildActions() : lib6.Widget {
        if (this.actions == null || this.actions.isEmpty) {
            return lib11.Container({
                height : 0.0});
        }
        return lib11.Container({
            child : _CupertinoAlertActionSection({
                children : this.actions,scrollController : this.actionScrollController,hasCancelButton : this.cancelButton != null})});
    }
    _buildCancelButton() : lib6.Widget {
        let cancelPadding : double = (this.actions != null || this.message != null || this.title != null) ? properties._kCancelButtonPadding : 0.0;
        return lib9.Padding({
            padding : lib12.EdgeInsets.only({
                top : cancelPadding}),child : _CupertinoActionSheetCancelButton({
                child : this.cancelButton})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let children : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>(lib9.Flexible({
            child : lib9.ClipRRect({
                borderRadius : lib13.BorderRadius.circular(12.0),child : lib9.BackdropFilter({
                    filter : ImageFilter.blur({
                        sigmaX : properties._kBlurAmount,sigmaY : properties._kBlurAmount}),child : lib11.Container({
                        decoration : properties._kAlertBlurOverlayDecoration,child : _CupertinoAlertRenderWidget({
                            contentSection : this._buildContent(),actionsSection : this._buildActions()})})})})}));
        if (this.cancelButton != null) {
            children.add(this._buildCancelButton());
        }
        let orientation : lib14.Orientation = lib14.MediaQuery.of(context).orientation;
        let actionSheetWidth : double;
        if (op(Op.EQUALS,orientation,lib14.Orientation.portrait)) {
            actionSheetWidth = op(Op.MINUS,lib14.MediaQuery.of(context).size.width,(properties._kEdgeHorizontalPadding * 2));
        }else {
            actionSheetWidth = op(Op.MINUS,lib14.MediaQuery.of(context).size.height,(properties._kEdgeHorizontalPadding * 2));
        }
        return lib15.SafeArea({
            child : lib9.Semantics({
                namesRoute : true,scopesRoute : true,explicitChildNodes : true,label : 'Alert',child : lib11.Container({
                    width : actionSheetWidth,margin : new lib12.EdgeInsets.symmetric({
                        horizontal : properties._kEdgeHorizontalPadding,vertical : properties._kEdgeVerticalPadding}),child : lib9.Column({
                        children : children,mainAxisSize : lib10.MainAxisSize.min,crossAxisAlignment : lib10.CrossAxisAlignment.stretch})})})});
    }
}

export namespace CupertinoActionSheetAction {
    export type Constructors = lib6.StatelessWidget.Constructors | 'CupertinoActionSheetAction';
    export type Interface = Omit<CupertinoActionSheetAction, Constructors>;
}
@DartClass
export class CupertinoActionSheetAction extends lib6.StatelessWidget {
    constructor(_namedArguments? : {onPressed? : any,isDefaultAction? : boolean,isDestructiveAction? : boolean,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoActionSheetAction(_namedArguments? : {onPressed? : any,isDefaultAction? : boolean,isDestructiveAction? : boolean,child? : lib6.Widget}) {
        let {onPressed,isDefaultAction,isDestructiveAction,child} = Object.assign({
            "isDefaultAction" : false,
            "isDestructiveAction" : false}, _namedArguments );
        this.assert = assert;
        this.onPressed = onPressed;
        this.isDefaultAction = isDefaultAction;
        this.isDestructiveAction = isDestructiveAction;
        this.child = child;
    }
     : any;

     : any;

    onPressed : any;

    isDefaultAction : boolean;

    isDestructiveAction : boolean;

    child : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let style : lib4.TextStyle = properties._kActionSheetActionStyle;
        if (this.isDefaultAction) {
            style = style.copyWith({
                fontWeight : FontWeight.w600});
        }
        if (this.isDestructiveAction) {
            style = style.copyWith({
                color : lib3.CupertinoColors.destructiveRed});
        }
        return lib19.GestureDetector({
            onTap : this.onPressed,behavior : HitTestBehavior.opaque,child : lib9.ConstrainedBox({
                constraints : new lib16.BoxConstraints({
                    minHeight : properties._kButtonHeight}),child : lib9.Semantics({
                    button : true,child : lib11.Container({
                        alignment : lib17.Alignment.center,padding : new lib12.EdgeInsets.symmetric({
                            vertical : 16.0,horizontal : 10.0}),child : lib18.DefaultTextStyle({
                            style : style,child : this.child,textAlign : TextAlign.center})})})})});
    }
}

export namespace _CupertinoActionSheetCancelButton {
    export type Constructors = lib6.StatefulWidget.Constructors | '_CupertinoActionSheetCancelButton';
    export type Interface = Omit<_CupertinoActionSheetCancelButton, Constructors>;
}
@DartClass
export class _CupertinoActionSheetCancelButton extends lib6.StatefulWidget {
    constructor(_namedArguments? : {key? : lib7.Key,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoActionSheetCancelButton(_namedArguments? : {key? : lib7.Key,child? : lib6.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.child = child;
    }
    child : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoActionSheetCancelButtonState {
        return _CupertinoActionSheetCancelButtonState();
    }
}

export namespace _CupertinoActionSheetCancelButtonState {
    export type Constructors = '_CupertinoActionSheetCancelButtonState';
    export type Interface = Omit<_CupertinoActionSheetCancelButtonState, Constructors>;
}
@DartClass
export class _CupertinoActionSheetCancelButtonState extends any {
    _backgroundColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        this._backgroundColor = lib3.CupertinoColors.white;
        super.initState();
    }
    _onTapDown(event : lib20.TapDownDetails) : any {
        setState(() =>  {
            this._backgroundColor = properties._kCancelButtonPressedColor;
        });
    }
    _onTapUp(event : lib20.TapUpDetails) : any {
        setState(() =>  {
            this._backgroundColor = lib3.CupertinoColors.white;
        });
    }
    _onTapCancel() : any {
        setState(() =>  {
            this._backgroundColor = lib3.CupertinoColors.white;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        return lib19.GestureDetector({
            excludeFromSemantics : true,onTapDown : this._onTapDown.bind(this),onTapUp : this._onTapUp.bind(this),onTapCancel : this._onTapCancel.bind(this),child : lib11.Container({
                decoration : lib5.BoxDecoration({
                    color : this._backgroundColor,borderRadius : lib13.BorderRadius.circular(properties._kCornerRadius)}),child : widget.child})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoActionSheetCancelButtonState() {
    }
}

export namespace _RenderCupertinoAlertActions {
    export type Constructors = '_RenderCupertinoAlertActions';
    export type Interface = Omit<_RenderCupertinoAlertActions, Constructors>;
}
@DartClass
@With(any,any)
export class _RenderCupertinoAlertActions extends any implements any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<any>,dividerThickness? : double,hasCancelButton? : boolean}) {
    }
    @defaultConstructor
    _RenderCupertinoAlertActions(_namedArguments? : {children? : core.DartList<any>,dividerThickness? : double,hasCancelButton? : boolean}) {
        let {children,dividerThickness,hasCancelButton} = Object.assign({
            "dividerThickness" : 0.0,
            "hasCancelButton" : false}, _namedArguments );
        this._buttonBackgroundPaint = ((_) : any =>  {
            {
                _.color = properties._kBackgroundColor;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        this._pressedButtonBackgroundPaint = ((_) : any =>  {
            {
                _.color = properties._kPressedColor;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        this._dividerPaint = ((_) : any =>  {
            {
                _.color = properties._kButtonDividerColor;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        this._dividerThickness = dividerThickness;
        this._hasCancelButton = hasCancelButton;
        addAll(children);
    }
    get dividerThickness() : double {
        return this._dividerThickness;
    }
    _dividerThickness : double;

    set dividerThickness(newValue : double) {
        if (newValue == this._dividerThickness) {
            return;
        }
        this._dividerThickness = newValue;
        markNeedsLayout();
    }
    _hasCancelButton : boolean;

    get hasCancelButton() : boolean {
        return this._hasCancelButton;
    }
    set hasCancelButton(newValue : boolean) {
        if (newValue == this._hasCancelButton) {
            return;
        }
        this._hasCancelButton = newValue;
        markNeedsLayout();
    }
    _buttonBackgroundPaint : any;

    _pressedButtonBackgroundPaint : any;

    _dividerPaint : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupParentData(child : any) : any {
        if (isNot(child.parentData, _ActionButtonParentData)) child.parentData = _ActionButtonParentData();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return constraints.minWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return constraints.maxWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        if (op(Op.EQUALS,childCount,0)) return 0.0;
        if (op(Op.EQUALS,childCount,1)) return op(Op.PLUS,firstChild.computeMaxIntrinsicHeight(width),this.dividerThickness);
        if (this.hasCancelButton && op(Op.LT,childCount,4)) return this._computeMinIntrinsicHeightWithCancel(width);
        return this._computeMinIntrinsicHeightWithoutCancel(width);
    }
    _computeMinIntrinsicHeightWithCancel(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (childCount == 2 || childCount == 3); */;
        if (op(Op.EQUALS,childCount,2)) {
            return op(Op.PLUS,op(Op.PLUS,firstChild.getMinIntrinsicHeight(width),childAfter(firstChild).getMinIntrinsicHeight(width)),this.dividerThickness);
        }
        return op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,firstChild.getMinIntrinsicHeight(width),childAfter(firstChild).getMinIntrinsicHeight(width)),childAfter(childAfter(firstChild)).getMinIntrinsicHeight(width)),(this.dividerThickness * 2));
    }
    _computeMinIntrinsicHeightWithoutCancel(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (childCount >= 2); */;
        return op(Op.PLUS,op(Op.PLUS,firstChild.getMinIntrinsicHeight(width),this.dividerThickness),(0.5 * childAfter(firstChild).getMinIntrinsicHeight(width)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        if (op(Op.EQUALS,childCount,0)) return 0.0;
        if (op(Op.EQUALS,childCount,1)) return op(Op.PLUS,firstChild.computeMaxIntrinsicHeight(width),this.dividerThickness);
        return this._computeMaxIntrinsicHeightStacked(width);
    }
    _computeMaxIntrinsicHeightStacked(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (childCount >= 2); */;
        let allDividersHeight : double = op(Op.TIMES,(op(Op.MINUS,childCount,1)),this.dividerThickness);
        let heightAccumulation : double = allDividersHeight;
        let button : any = firstChild;
        while (button != null){
            heightAccumulation += button.getMaxIntrinsicHeight(width);
            button = childAfter(button);
        }
        return heightAccumulation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let perButtonConstraints : lib16.BoxConstraints = constraints.copyWith({
            minHeight : 0.0,maxHeight : new core.DartDouble(double).infinity});
        let child : any = firstChild;
        let index : number = 0;
        let verticalOffset : double = 0.0;
        while (child != null){
            child.layout(perButtonConstraints,{
                parentUsesSize : true});
            /* TODO (AssertStatementImpl) : assert (child.parentData is MultiChildLayoutParentData); */;
            let parentData : lib22.MultiChildLayoutParentData = child.parentData;
            parentData.offset = Offset(0.0,verticalOffset);
            verticalOffset += child.size.height;
            if (index < op(Op.MINUS,childCount,1)) {
                verticalOffset += this.dividerThickness;
            }
            index += 1;
            child = childAfter(child);
        }
        lib24.properties.size = constraints.constrain(Size(constraints.maxWidth,verticalOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib21.PaintingContext,offset : any) : any {
        let canvas : any = context.canvas;
        this._drawButtonBackgroundsAndDividersStacked(canvas,offset);
        this._drawButtons(context,offset);
    }
    _drawButtonBackgroundsAndDividersStacked(canvas : any,offset : any) : any {
        let dividerOffset : any = Offset(0.0,this.dividerThickness);
        let backgroundFillPath : any = ((_) : any =>  {
            {
                _.fillType = PathFillType.evenOdd;
                addRect(Rect.fromLTWH(0.0,0.0,lib24.properties.size.width,lib24.properties.size.height));
                return _;
            }
        })(Path());
        let pressedBackgroundFillPath : any = Path();
        let dividersPath : any = Path();
        let accumulatingOffset : any = offset;
        let child : any = firstChild;
        let prevChild : any;
        while (child != null){
            /* TODO (AssertStatementImpl) : assert (child.parentData is _ActionButtonParentData); */;
            let currentButtonParentData : _ActionButtonParentData = child.parentData;
            let isButtonPressed : boolean = currentButtonParentData.isPressed;
            let isPrevButtonPressed : boolean = false;
            if (prevChild != null) {
                /* TODO (AssertStatementImpl) : assert (prevChild.parentData is _ActionButtonParentData); */;
                let previousButtonParentData : _ActionButtonParentData = prevChild.parentData;
                isPrevButtonPressed = previousButtonParentData.isPressed;
            }
            let isDividerPresent : boolean = child != firstChild;
            let isDividerPainted : boolean = isDividerPresent && !(isButtonPressed || isPrevButtonPressed);
            let dividerRect : any = Rect.fromLTWH(accumulatingOffset.dx,accumulatingOffset.dy,lib24.properties.size.width,this._dividerThickness);
            let buttonBackgroundRect : any = Rect.fromLTWH(accumulatingOffset.dx,op(Op.PLUS,accumulatingOffset.dy,(isDividerPresent ? this.dividerThickness : 0.0)),lib24.properties.size.width,child.size.height);
            if (isButtonPressed) {
                backgroundFillPath.addRect(buttonBackgroundRect);
                pressedBackgroundFillPath.addRect(buttonBackgroundRect);
            }
            if (isDividerPainted) {
                backgroundFillPath.addRect(dividerRect);
                dividersPath.addRect(dividerRect);
            }
            accumulatingOffset += op(Op.PLUS,(isDividerPresent ? dividerOffset : Offset.zero),Offset(0.0,child.size.height));
            prevChild = child;
            child = childAfter(child);
        }
        canvas.drawPath(backgroundFillPath,this._buttonBackgroundPaint);
        canvas.drawPath(pressedBackgroundFillPath,this._pressedButtonBackgroundPaint);
        canvas.drawPath(dividersPath,this._dividerPaint);
    }
    _drawButtons(context : lib21.PaintingContext,offset : any) : any {
        let child : any = firstChild;
        while (child != null){
            let childParentData : lib22.MultiChildLayoutParentData = child.parentData;
            context.paintChild(child,op(Op.PLUS,childParentData.offset,offset));
            child = childAfter(child);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib25.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return defaultHitTestChildren(result,{
            position : position});
    }
}

export namespace _CupertinoAlertRenderElement {
    export type Constructors = lib6.RenderObjectElement.Constructors | '_CupertinoAlertRenderElement';
    export type Interface = Omit<_CupertinoAlertRenderElement, Constructors>;
}
@DartClass
export class _CupertinoAlertRenderElement extends lib6.RenderObjectElement {
    constructor(widget : _CupertinoAlertRenderWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertRenderElement(widget : _CupertinoAlertRenderWidget) {
        super.RenderObjectElement(widget);
    }
    _contentElement : lib6.Element;

    _actionsElement : lib6.Element;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : _CupertinoAlertRenderWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : _RenderCupertinoAlert {
        return super.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib6.Element) => any) : any {
        if (this._contentElement != null) {
            visitor(this._contentElement);
        }
        if (this._actionsElement != null) {
            visitor(this._actionsElement);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib6.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._contentElement = this.updateChild(this._contentElement,this.widget.contentSection,_AlertSections.contentSection);
        this._actionsElement = this.updateChild(this._actionsElement,this.widget.actionsSection,_AlertSections.actionsSection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib21.RenderObject,slot : _AlertSections) : any {
        this._placeChildInSlot(child,slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib21.RenderObject,slot : _AlertSections) : any {
        this._placeChildInSlot(child,slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : lib6.RenderObjectWidget) : any {
        super.update(newWidget);
        this._contentElement = this.updateChild(this._contentElement,this.widget.contentSection,_AlertSections.contentSection);
        this._actionsElement = this.updateChild(this._actionsElement,this.widget.actionsSection,_AlertSections.actionsSection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib6.Element) : any {
        /* TODO (AssertStatementImpl) : assert (child == _contentElement || child == _actionsElement); */;
        if (op(Op.EQUALS,this._contentElement,child)) {
            this._contentElement = null;
        }else if (op(Op.EQUALS,this._actionsElement,child)) {
            this._actionsElement = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib21.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (child == renderObject.contentSection || child == renderObject.actionsSection); */;
        if (op(Op.EQUALS,this.renderObject.contentSection,child)) {
            this.renderObject.contentSection = null;
        }else if (op(Op.EQUALS,this.renderObject.actionsSection,child)) {
            this.renderObject.actionsSection = null;
        }
    }
    _placeChildInSlot(child : lib21.RenderObject,slot : _AlertSections) : any {
        /* TODO (AssertStatementImpl) : assert (slot != null); */;
        switch (slot) {
            case _AlertSections.contentSection:
                this.renderObject.contentSection = child;
                break;
            case _AlertSections.actionsSection:
                this.renderObject.actionsSection = child;
                break;
        }
    }
}

export namespace _RenderCupertinoAlert {
    export type Constructors = '_RenderCupertinoAlert';
    export type Interface = Omit<_RenderCupertinoAlert, Constructors>;
}
@DartClass
export class _RenderCupertinoAlert extends any {
    constructor(_namedArguments? : {contentSection? : any,actionsSection? : any,dividerThickness? : double}) {
    }
    @defaultConstructor
    _RenderCupertinoAlert(_namedArguments? : {contentSection? : any,actionsSection? : any,dividerThickness? : double}) {
        let {contentSection,actionsSection,dividerThickness} = Object.assign({
            "dividerThickness" : 0.0}, _namedArguments );
        this._dividerPaint = ((_) : any =>  {
            {
                _.color = properties._kButtonDividerColor;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        this._contentSection = contentSection;
        this._actionsSection = actionsSection;
        this._dividerThickness = dividerThickness;
    }
    get contentSection() : any {
        return this._contentSection;
    }
    _contentSection : any;

    set contentSection(newContentSection : any) {
        if (newContentSection != this._contentSection) {
            if (null != this._contentSection) {
                dropChild(this._contentSection);
            }
            this._contentSection = newContentSection;
            if (null != this._contentSection) {
                adoptChild(this._contentSection);
            }
        }
    }
    get actionsSection() : any {
        return this._actionsSection;
    }
    _actionsSection : any;

    set actionsSection(newActionsSection : any) {
        if (newActionsSection != this._actionsSection) {
            if (null != this._actionsSection) {
                dropChild(this._actionsSection);
            }
            this._actionsSection = newActionsSection;
            if (null != this._actionsSection) {
                adoptChild(this._actionsSection);
            }
        }
    }
    _dividerThickness : double;

    _dividerPaint : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib21.PipelineOwner) : any {
        super.attach(owner);
        if (null != this.contentSection) {
            this.contentSection.attach(owner);
        }
        if (null != this.actionsSection) {
            this.actionsSection.attach(owner);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        super.detach();
        if (null != this.contentSection) {
            this.contentSection.detach();
        }
        if (null != this.actionsSection) {
            this.actionsSection.detach();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    redepthChildren() : any {
        if (null != this.contentSection) {
            redepthChild(this.contentSection);
        }
        if (null != this.actionsSection) {
            redepthChild(this.actionsSection);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupParentData(child : any) : any {
        if (isNot(child.parentData, lib22.MultiChildLayoutParentData)) {
            child.parentData = lib22.MultiChildLayoutParentData();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (child : any) => any) : any {
        if (this.contentSection != null) {
            visitor(this.contentSection);
        }
        if (this.actionsSection != null) {
            visitor(this.actionsSection);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib23.DiagnosticsNode> {
        let value : core.DartList<lib23.DiagnosticsNode> = new core.DartList.literal<lib23.DiagnosticsNode>();
        if (this.contentSection != null) {
            value.add(this.contentSection.toDiagnosticsNode({
                name : 'content'}));
        }
        if (this.actionsSection != null) {
            value.add(this.actionsSection.toDiagnosticsNode({
                name : 'actions'}));
        }
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return constraints.minWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return constraints.maxWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        let contentHeight : double = this.contentSection.getMinIntrinsicHeight(width);
        let actionsHeight : double = this.actionsSection.getMinIntrinsicHeight(width);
        let hasDivider : boolean = contentHeight > 0.0 && actionsHeight > 0.0;
        let height : double = contentHeight + (hasDivider ? this._dividerThickness : 0.0) + actionsHeight;
        if (actionsHeight > 0 || contentHeight > 0) height -= 2 * properties._kEdgeVerticalPadding;
        if (new core.DartDouble(height).isFinite) return height;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        let contentHeight : double = this.contentSection.getMaxIntrinsicHeight(width);
        let actionsHeight : double = this.actionsSection.getMaxIntrinsicHeight(width);
        let hasDivider : boolean = contentHeight > 0.0 && actionsHeight > 0.0;
        let height : double = contentHeight + (hasDivider ? this._dividerThickness : 0.0) + actionsHeight;
        if (actionsHeight > 0 || contentHeight > 0) height -= 2 * properties._kEdgeVerticalPadding;
        if (new core.DartDouble(height).isFinite) return height;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let hasDivider : boolean = op(Op.GT,this.contentSection.getMaxIntrinsicHeight(constraints.maxWidth),0.0) && op(Op.GT,this.actionsSection.getMaxIntrinsicHeight(constraints.maxWidth),0.0);
        let dividerThickness : double = hasDivider ? this._dividerThickness : 0.0;
        let minActionsHeight : double = this.actionsSection.getMinIntrinsicHeight(constraints.maxWidth);
        this.contentSection.layout(constraints.deflate(lib12.EdgeInsets.only({
            bottom : minActionsHeight + dividerThickness})),{
            parentUsesSize : true});
        let contentSize : any = this.contentSection.size;
        this.actionsSection.layout(constraints.deflate(lib12.EdgeInsets.only({
            top : op(Op.PLUS,contentSize.height,dividerThickness)})),{
            parentUsesSize : true});
        let actionsSize : any = this.actionsSection.size;
        let actionSheetHeight : double = op(Op.PLUS,op(Op.PLUS,contentSize.height,dividerThickness),actionsSize.height);
        lib24.properties.size = Size(constraints.maxWidth,actionSheetHeight);
        /* TODO (AssertStatementImpl) : assert (actionsSection.parentData is MultiChildLayoutParentData); */;
        let actionParentData : lib22.MultiChildLayoutParentData = this.actionsSection.parentData;
        actionParentData.offset = Offset(0.0,op(Op.PLUS,contentSize.height,dividerThickness));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib21.PaintingContext,offset : any) : any {
        let contentParentData : lib22.MultiChildLayoutParentData = this.contentSection.parentData;
        this.contentSection.paint(context,op(Op.PLUS,offset,contentParentData.offset));
        let hasDivider : boolean = op(Op.GT,this.contentSection.size.height,0.0) && op(Op.GT,this.actionsSection.size.height,0.0);
        if (hasDivider) {
            this._paintDividerBetweenContentAndActions(context.canvas,offset);
        }
        let actionsParentData : lib22.MultiChildLayoutParentData = this.actionsSection.parentData;
        this.actionsSection.paint(context,op(Op.PLUS,offset,actionsParentData.offset));
    }
    _paintDividerBetweenContentAndActions(canvas : any,offset : any) : any {
        canvas.drawRect(Rect.fromLTWH(offset.dx,op(Op.PLUS,offset.dy,this.contentSection.size.height),lib24.properties.size.width,this._dividerThickness),this._dividerPaint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib25.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        let isHit : boolean = false;
        let contentSectionParentData : lib22.MultiChildLayoutParentData = this.contentSection.parentData;
        let actionsSectionParentData : lib22.MultiChildLayoutParentData = this.actionsSection.parentData;
        if (this.contentSection.hitTest(result,{
            position : op(Op.MINUS,position,contentSectionParentData.offset)})) {
            isHit = true;
        }else if (this.actionsSection.hitTest(result,{
            position : op(Op.MINUS,position,actionsSectionParentData.offset)})) {
            isHit = true;
        }
        return isHit;
    }
}

export enum _AlertSections {
    contentSection,
    actionsSection
}

export namespace _CupertinoAlertContentSection {
    export type Constructors = lib6.StatelessWidget.Constructors | '_CupertinoAlertContentSection';
    export type Interface = Omit<_CupertinoAlertContentSection, Constructors>;
}
@DartClass
export class _CupertinoAlertContentSection extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib7.Key,title? : lib6.Widget,message? : lib6.Widget,scrollController? : lib8.ScrollController}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertContentSection(_namedArguments? : {key? : lib7.Key,title? : lib6.Widget,message? : lib6.Widget,scrollController? : lib8.ScrollController}) {
        let {key,title,message,scrollController} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.title = title;
        this.message = message;
        this.scrollController = scrollController;
    }
    title : lib6.Widget;

    message : lib6.Widget;

    scrollController : lib8.ScrollController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let titleContentGroup : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>();
        if (this.title != null) {
            titleContentGroup.add(lib9.Padding({
                padding : new lib12.EdgeInsets.only({
                    left : properties._kContentHorizontalPadding,right : properties._kContentHorizontalPadding,bottom : properties._kContentVerticalPadding,top : properties._kContentVerticalPadding}),child : lib18.DefaultTextStyle({
                    style : op(Op.EQUALS,this.message,null) ? properties._kActionSheetContentStyle : properties._kActionSheetContentStyle.copyWith({
                        fontWeight : FontWeight.w600}),textAlign : TextAlign.center,child : this.title})}));
        }
        if (this.message != null) {
            titleContentGroup.add(lib9.Padding({
                padding : lib12.EdgeInsets.only({
                    left : properties._kContentHorizontalPadding,right : properties._kContentHorizontalPadding,bottom : op(Op.EQUALS,this.title,null) ? properties._kContentVerticalPadding : 22.0,top : op(Op.EQUALS,this.title,null) ? properties._kContentVerticalPadding : 0.0}),child : lib18.DefaultTextStyle({
                    style : op(Op.EQUALS,this.title,null) ? properties._kActionSheetContentStyle.copyWith({
                        fontWeight : FontWeight.w600}) : properties._kActionSheetContentStyle,textAlign : TextAlign.center,child : this.message})}));
        }
        if (titleContentGroup.isEmpty) {
            return lib26.SingleChildScrollView({
                controller : this.scrollController,child : lib11.Container({
                    width : 0.0,height : 0.0})});
        }
        if (titleContentGroup.length > 1) {
            titleContentGroup.insert(1,new lib9.Padding({
                padding : lib12.EdgeInsets.only({
                    top : 8.0})}));
        }
        return lib27.CupertinoScrollbar({
            child : lib26.SingleChildScrollView({
                controller : this.scrollController,child : lib9.Column({
                    mainAxisSize : lib10.MainAxisSize.max,crossAxisAlignment : lib10.CrossAxisAlignment.stretch,children : titleContentGroup})})});
    }
}

export namespace _CupertinoAlertActionSection {
    export type Constructors = lib6.StatefulWidget.Constructors | '_CupertinoAlertActionSection';
    export type Interface = Omit<_CupertinoAlertActionSection, Constructors>;
}
@DartClass
export class _CupertinoAlertActionSection extends lib6.StatefulWidget {
    constructor(_namedArguments? : {key? : lib7.Key,children? : core.DartList<lib6.Widget>,scrollController? : lib8.ScrollController,hasCancelButton? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertActionSection(_namedArguments? : {key? : lib7.Key,children? : core.DartList<lib6.Widget>,scrollController? : lib8.ScrollController,hasCancelButton? : boolean}) {
        let {key,children,scrollController,hasCancelButton} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.children = children;
        this.scrollController = scrollController;
        this.hasCancelButton = hasCancelButton;
    }
     : any;

     : any;

     : any;

    children : core.DartList<lib6.Widget>;

    scrollController : lib8.ScrollController;

    hasCancelButton : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoAlertActionSectionState {
        return _CupertinoAlertActionSectionState();
    }
}

export namespace _CupertinoAlertActionSectionState {
    export type Constructors = '_CupertinoAlertActionSectionState';
    export type Interface = Omit<_CupertinoAlertActionSectionState, Constructors>;
}
@DartClass
export class _CupertinoAlertActionSectionState extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let devicePixelRatio : double = lib14.MediaQuery.of(context).devicePixelRatio;
        let interactiveButtons : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>();
        for(let i : number = 0; i < widget.children.length; i += 1){
            interactiveButtons.add(_PressableActionButton({
                child : op(Op.INDEX,widget.children,i)}));
        }
        return lib27.CupertinoScrollbar({
            child : lib26.SingleChildScrollView({
                controller : widget.scrollController,child : _CupertinoAlertActionsRenderWidget({
                    actionButtons : interactiveButtons,dividerThickness : properties._kDividerThickness / devicePixelRatio,hasCancelButton : widget.hasCancelButton})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertActionSectionState() {
    }
}

export namespace _PressableActionButton {
    export type Constructors = lib6.StatefulWidget.Constructors | '_PressableActionButton';
    export type Interface = Omit<_PressableActionButton, Constructors>;
}
@DartClass
export class _PressableActionButton extends lib6.StatefulWidget {
    constructor(_namedArguments? : {child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PressableActionButton(_namedArguments? : {child? : lib6.Widget}) {
        let {child} = Object.assign({
        }, _namedArguments );
        this.child = child;
    }
    child : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _PressableActionButtonState {
        return _PressableActionButtonState();
    }
}

export namespace _PressableActionButtonState {
    export type Constructors = '_PressableActionButtonState';
    export type Interface = Omit<_PressableActionButtonState, Constructors>;
}
@DartClass
export class _PressableActionButtonState extends any {
    _isPressed : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        return _ActionButtonParentDataWidget({
            isPressed : this._isPressed,child : lib19.GestureDetector({
                excludeFromSemantics : true,behavior : HitTestBehavior.opaque,onTapDown : (details : lib20.TapDownDetails) =>  {
                    return setState(() =>  {
                        return this._isPressed = true;
                    });
                },onTapUp : (details : lib20.TapUpDetails) =>  {
                    return setState(() =>  {
                        return this._isPressed = false;
                    });
                },onTapCancel : () =>  {
                    return setState(() =>  {
                        return this._isPressed = false;
                    });
                },child : widget.child})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PressableActionButtonState() {
        this._isPressed = false;
    }
}

export namespace _ActionButtonParentDataWidget {
    export type Constructors = lib6.ParentDataWidget.Constructors | '_ActionButtonParentDataWidget';
    export type Interface = Omit<_ActionButtonParentDataWidget, Constructors>;
}
@DartClass
export class _ActionButtonParentDataWidget extends lib6.ParentDataWidget<_CupertinoAlertActionsRenderWidget> {
    constructor(_namedArguments? : {key? : lib7.Key,isPressed? : boolean,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ActionButtonParentDataWidget(_namedArguments? : {key? : lib7.Key,isPressed? : boolean,child? : lib6.Widget}) {
        let {key,isPressed,child} = Object.assign({
        }, _namedArguments );
        super.ParentDataWidget({
            key : key,child : child});
        this.isPressed = isPressed;
    }
    isPressed : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyParentData(renderObject : lib21.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (renderObject.parentData is _ActionButtonParentData); */;
        let parentData : _ActionButtonParentData = renderObject.parentData;
        if (parentData.isPressed != this.isPressed) {
            parentData.isPressed = this.isPressed;
            let targetParent : lib28.AbstractNode = renderObject.parent;
            if (is(targetParent, lib21.RenderObject)) targetParent.markNeedsPaint();
        }
    }
}

export namespace _ActionButtonParentData {
    export type Constructors = lib22.MultiChildLayoutParentData.Constructors | '_ActionButtonParentData';
    export type Interface = Omit<_ActionButtonParentData, Constructors>;
}
@DartClass
export class _ActionButtonParentData extends lib22.MultiChildLayoutParentData {
    constructor(_namedArguments? : {isPressed? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ActionButtonParentData(_namedArguments? : {isPressed? : boolean}) {
        let {isPressed} = Object.assign({
            "isPressed" : false}, _namedArguments );
        this.isPressed = isPressed;
    }
    isPressed : boolean;

}

export namespace _CupertinoAlertActionsRenderWidget {
    export type Constructors = lib6.MultiChildRenderObjectWidget.Constructors | '_CupertinoAlertActionsRenderWidget';
    export type Interface = Omit<_CupertinoAlertActionsRenderWidget, Constructors>;
}
@DartClass
export class _CupertinoAlertActionsRenderWidget extends lib6.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib7.Key,actionButtons? : core.DartList<lib6.Widget>,dividerThickness? : double,hasCancelButton? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertActionsRenderWidget(_namedArguments? : {key? : lib7.Key,actionButtons? : core.DartList<lib6.Widget>,dividerThickness? : double,hasCancelButton? : boolean}) {
        let {key,actionButtons,dividerThickness,hasCancelButton} = Object.assign({
            "dividerThickness" : 0.0,
            "hasCancelButton" : false}, _namedArguments );
        this._dividerThickness = dividerThickness;
        this._hasCancelButton = hasCancelButton;
        super.MultiChildRenderObjectWidget({
            key : key,children : actionButtons});
    }
    _dividerThickness : double;

    _hasCancelButton : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib6.BuildContext) : lib21.RenderObject {
        return _RenderCupertinoAlertActions({
            dividerThickness : this._dividerThickness,hasCancelButton : this._hasCancelButton});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib6.BuildContext,renderObject : _RenderCupertinoAlertActions) : any {
        renderObject.dividerThickness = this._dividerThickness;
        renderObject.hasCancelButton = this._hasCancelButton;
    }
}

export namespace _CupertinoAlertRenderWidget {
    export type Constructors = lib6.RenderObjectWidget.Constructors | '_CupertinoAlertRenderWidget';
    export type Interface = Omit<_CupertinoAlertRenderWidget, Constructors>;
}
@DartClass
export class _CupertinoAlertRenderWidget extends lib6.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib7.Key,contentSection? : lib6.Widget,actionsSection? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertRenderWidget(_namedArguments? : {key? : lib7.Key,contentSection? : lib6.Widget,actionsSection? : lib6.Widget}) {
        let {key,contentSection,actionsSection} = Object.assign({
        }, _namedArguments );
        super.RenderObjectWidget({
            key : key});
        this.contentSection = contentSection;
        this.actionsSection = actionsSection;
    }
    contentSection : lib6.Widget;

    actionsSection : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib6.BuildContext) : lib21.RenderObject {
        return _RenderCupertinoAlert({
            dividerThickness : properties._kDividerThickness / lib14.MediaQuery.of(context).devicePixelRatio});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : lib6.RenderObjectElement {
        return _CupertinoAlertRenderElement(this);
    }
}

export class properties {
    private static __$_kEdgeVerticalPadding : double;
    static get _kEdgeVerticalPadding() : double { 
        if (this.__$_kEdgeVerticalPadding===undefined) {
            this.__$_kEdgeVerticalPadding = 10.0;
        }
        return this.__$_kEdgeVerticalPadding;
    }
    static set _kEdgeVerticalPadding(__$value : double)  { 
        this.__$_kEdgeVerticalPadding = __$value;
    }

    private static __$_kActionSheetContentStyle : lib4.TextStyle;
    static get _kActionSheetContentStyle() : lib4.TextStyle { 
        if (this.__$_kActionSheetContentStyle===undefined) {
            this.__$_kActionSheetContentStyle = lib4.TextStyle({
                fontFamily : '.SF UI Text',inherit : false,fontSize : 13.0,fontWeight : FontWeight.w400,color : properties._kContentTextColor,textBaseline : TextBaseline.alphabetic});
        }
        return this.__$_kActionSheetContentStyle;
    }
    static set _kActionSheetContentStyle(__$value : lib4.TextStyle)  { 
        this.__$_kActionSheetContentStyle = __$value;
    }

    private static __$_kAlertBlurOverlayDecoration : lib5.BoxDecoration;
    static get _kAlertBlurOverlayDecoration() : lib5.BoxDecoration { 
        if (this.__$_kAlertBlurOverlayDecoration===undefined) {
            this.__$_kAlertBlurOverlayDecoration = lib5.BoxDecoration({
                color : lib3.CupertinoColors.white,backgroundBlendMode : BlendMode.overlay});
        }
        return this.__$_kAlertBlurOverlayDecoration;
    }
    static set _kAlertBlurOverlayDecoration(__$value : lib5.BoxDecoration)  { 
        this.__$_kAlertBlurOverlayDecoration = __$value;
    }

    private static __$_kBackgroundColor : any;
    static get _kBackgroundColor() : any { 
        if (this.__$_kBackgroundColor===undefined) {
            this.__$_kBackgroundColor = Color(3522754808);
        }
        return this.__$_kBackgroundColor;
    }
    static set _kBackgroundColor(__$value : any)  { 
        this.__$_kBackgroundColor = __$value;
    }

    private static __$_kPressedColor : any;
    static get _kPressedColor() : any { 
        if (this.__$_kPressedColor===undefined) {
            this.__$_kPressedColor = Color(2800084458);
        }
        return this.__$_kPressedColor;
    }
    static set _kPressedColor(__$value : any)  { 
        this.__$_kPressedColor = __$value;
    }

    private static __$_kButtonDividerColor : any;
    static get _kButtonDividerColor() : any { 
        if (this.__$_kButtonDividerColor===undefined) {
            this.__$_kButtonDividerColor = Color(1077886783);
        }
        return this.__$_kButtonDividerColor;
    }
    static set _kButtonDividerColor(__$value : any)  { 
        this.__$_kButtonDividerColor = __$value;
    }

    private static __$_kContentTextColor : any;
    static get _kContentTextColor() : any { 
        if (this.__$_kContentTextColor===undefined) {
            this.__$_kContentTextColor = Color(4287598479);
        }
        return this.__$_kContentTextColor;
    }
    static set _kContentTextColor(__$value : any)  { 
        this.__$_kContentTextColor = __$value;
    }

    private static __$_kCancelButtonPressedColor : any;
    static get _kCancelButtonPressedColor() : any { 
        if (this.__$_kCancelButtonPressedColor===undefined) {
            this.__$_kCancelButtonPressedColor = Color(4293585642);
        }
        return this.__$_kCancelButtonPressedColor;
    }
    static set _kCancelButtonPressedColor(__$value : any)  { 
        this.__$_kCancelButtonPressedColor = __$value;
    }

    private static __$_kBlurAmount : double;
    static get _kBlurAmount() : double { 
        if (this.__$_kBlurAmount===undefined) {
            this.__$_kBlurAmount = 20.0;
        }
        return this.__$_kBlurAmount;
    }
    static set _kBlurAmount(__$value : double)  { 
        this.__$_kBlurAmount = __$value;
    }

    private static __$_kEdgeHorizontalPadding : double;
    static get _kEdgeHorizontalPadding() : double { 
        if (this.__$_kEdgeHorizontalPadding===undefined) {
            this.__$_kEdgeHorizontalPadding = 8.0;
        }
        return this.__$_kEdgeHorizontalPadding;
    }
    static set _kEdgeHorizontalPadding(__$value : double)  { 
        this.__$_kEdgeHorizontalPadding = __$value;
    }

    private static __$_kCancelButtonPadding : double;
    static get _kCancelButtonPadding() : double { 
        if (this.__$_kCancelButtonPadding===undefined) {
            this.__$_kCancelButtonPadding = 8.0;
        }
        return this.__$_kCancelButtonPadding;
    }
    static set _kCancelButtonPadding(__$value : double)  { 
        this.__$_kCancelButtonPadding = __$value;
    }

    private static __$_kActionSheetActionStyle : lib4.TextStyle;
    static get _kActionSheetActionStyle() : lib4.TextStyle { 
        if (this.__$_kActionSheetActionStyle===undefined) {
            this.__$_kActionSheetActionStyle = lib4.TextStyle({
                fontFamily : '.SF UI Text',inherit : false,fontSize : 20.0,fontWeight : FontWeight.w400,color : lib3.CupertinoColors.activeBlue,textBaseline : TextBaseline.alphabetic});
        }
        return this.__$_kActionSheetActionStyle;
    }
    static set _kActionSheetActionStyle(__$value : lib4.TextStyle)  { 
        this.__$_kActionSheetActionStyle = __$value;
    }

    private static __$_kContentHorizontalPadding : double;
    static get _kContentHorizontalPadding() : double { 
        if (this.__$_kContentHorizontalPadding===undefined) {
            this.__$_kContentHorizontalPadding = 40.0;
        }
        return this.__$_kContentHorizontalPadding;
    }
    static set _kContentHorizontalPadding(__$value : double)  { 
        this.__$_kContentHorizontalPadding = __$value;
    }

    private static __$_kContentVerticalPadding : double;
    static get _kContentVerticalPadding() : double { 
        if (this.__$_kContentVerticalPadding===undefined) {
            this.__$_kContentVerticalPadding = 14.0;
        }
        return this.__$_kContentVerticalPadding;
    }
    static set _kContentVerticalPadding(__$value : double)  { 
        this.__$_kContentVerticalPadding = __$value;
    }

    private static __$_kButtonHeight : double;
    static get _kButtonHeight() : double { 
        if (this.__$_kButtonHeight===undefined) {
            this.__$_kButtonHeight = 56.0;
        }
        return this.__$_kButtonHeight;
    }
    static set _kButtonHeight(__$value : double)  { 
        this.__$_kButtonHeight = __$value;
    }

    private static __$_kCornerRadius : double;
    static get _kCornerRadius() : double { 
        if (this.__$_kCornerRadius===undefined) {
            this.__$_kCornerRadius = 14.0;
        }
        return this.__$_kCornerRadius;
    }
    static set _kCornerRadius(__$value : double)  { 
        this.__$_kCornerRadius = __$value;
    }

    private static __$_kDividerThickness : double;
    static get _kDividerThickness() : double { 
        if (this.__$_kDividerThickness===undefined) {
            this.__$_kDividerThickness = 1.0;
        }
        return this.__$_kDividerThickness;
    }
    static set _kDividerThickness(__$value : double)  { 
        this.__$_kDividerThickness = __$value;
    }

}
