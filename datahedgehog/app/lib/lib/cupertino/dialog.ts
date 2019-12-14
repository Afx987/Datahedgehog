/** Library asset:datahedgehog_monitor/lib/lib/cupertino/dialog.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./colors";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_controller";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib13 from "./localizations";
import * as math from "@dart2ts/dart/math";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/layout_builder";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib25 from "./scrollbar";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/foundation/node";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/rendering/custom_layout";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/painting/alignment";

export var _isInAccessibilityMode : (context : lib6.BuildContext) => boolean = (context : lib6.BuildContext) : boolean =>  {
    let data : lib7.MediaQueryData = lib7.MediaQuery.of(context,{
        nullOk : true});
    return data != null && data.textScaleFactor > properties._kMaxRegularTextScaleFactor;
};
export namespace CupertinoAlertDialog {
    export type Constructors = lib6.StatelessWidget.Constructors | 'CupertinoAlertDialog';
    export type Interface = Omit<CupertinoAlertDialog, Constructors>;
}
@DartClass
export class CupertinoAlertDialog extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib8.Key,title? : lib6.Widget,content? : lib6.Widget,actions? : core.DartList<lib6.Widget>,scrollController? : lib9.ScrollController,actionScrollController? : lib9.ScrollController}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoAlertDialog(_namedArguments? : {key? : lib8.Key,title? : lib6.Widget,content? : lib6.Widget,actions? : core.DartList<lib6.Widget>,scrollController? : lib9.ScrollController,actionScrollController? : lib9.ScrollController}) {
        let {key,title,content,actions,scrollController,actionScrollController} = Object.assign({
            "actions" : new core.DartList.literal<lib6.Widget>()}, _namedArguments );
        this.assert = assert;
        this.title = title;
        this.content = content;
        this.actions = actions;
        this.scrollController = scrollController;
        this.actionScrollController = actionScrollController;
    }
     : any;

     : any;

     : any;

    title : lib6.Widget;

    content : lib6.Widget;

    actions : core.DartList<lib6.Widget>;

    scrollController : lib9.ScrollController;

    actionScrollController : lib9.ScrollController;

    _buildContent() : lib6.Widget {
        let children : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>();
        if (this.title != null || this.content != null) {
            let titleSection : lib6.Widget = _CupertinoAlertContentSection({
                title : this.title,content : this.content,scrollController : this.scrollController});
            children.add(lib10.Flexible({
                flex : 3,child : titleSection}));
        }
        return lib12.Container({
            color : properties._kDialogColor,child : lib10.Column({
                mainAxisSize : lib11.MainAxisSize.min,crossAxisAlignment : lib11.CrossAxisAlignment.stretch,children : children})});
    }
    _buildActions() : lib6.Widget {
        let actionSection : lib6.Widget = lib12.Container({
            height : 0.0});
        if (this.actions.isNotEmpty) {
            actionSection = _CupertinoAlertActionSection({
                children : this.actions,scrollController : this.actionScrollController});
        }
        return actionSection;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let localizations : lib13.CupertinoLocalizations = lib13.CupertinoLocalizations.of(context);
        let isInAccessibilityMode : boolean = _isInAccessibilityMode(context);
        let textScaleFactor : double = lib7.MediaQuery.of(context).textScaleFactor;
        return lib7.MediaQuery({
            data : lib7.MediaQuery.of(context).copyWith({
                textScaleFactor : math.max(textScaleFactor,1.0)}),child : lib17.LayoutBuilder({
                builder : (context : lib6.BuildContext,constraints : lib15.BoxConstraints) =>  {
                    return lib10.Center({
                        child : lib12.Container({
                            margin : new lib16.EdgeInsets.symmetric({
                                vertical : properties._kEdgePadding}),width : isInAccessibilityMode ? properties._kAccessibilityCupertinoDialogWidth : properties._kCupertinoDialogWidth,child : CupertinoPopupSurface({
                                isSurfacePainted : false,child : lib10.Semantics({
                                    namesRoute : true,scopesRoute : true,explicitChildNodes : true,label : localizations.alertDialogLabel,child : _CupertinoDialogRenderWidget({
                                        contentSection : this._buildContent(),actionsSection : this._buildActions()})})})})});
                }})});
    }
}

export namespace CupertinoDialog {
    export type Constructors = lib6.StatelessWidget.Constructors | 'CupertinoDialog';
    export type Interface = Omit<CupertinoDialog, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'Deprecated',value : {
        arguments : ['Use CupertinoAlertDialog for alert dialogs. Use CupertinoPopupSurface for custom popups.'],namedArguments : {
        }}})
export class CupertinoDialog extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib8.Key,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoDialog(_namedArguments? : {key? : lib8.Key,child? : lib6.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.child = child;
    }
    child : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        return lib10.Center({
            child : lib10.SizedBox({
                width : properties._kCupertinoDialogWidth,child : CupertinoPopupSurface({
                    child : this.child})})});
    }
}

export namespace CupertinoPopupSurface {
    export type Constructors = lib6.StatelessWidget.Constructors | 'CupertinoPopupSurface';
    export type Interface = Omit<CupertinoPopupSurface, Constructors>;
}
@DartClass
export class CupertinoPopupSurface extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib8.Key,isSurfacePainted? : boolean,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoPopupSurface(_namedArguments? : {key? : lib8.Key,isSurfacePainted? : boolean,child? : lib6.Widget}) {
        let {key,isSurfacePainted,child} = Object.assign({
            "isSurfacePainted" : true}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.isSurfacePainted = isSurfacePainted;
        this.child = child;
    }
    isSurfacePainted : boolean;

    child : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        return lib10.ClipRRect({
            borderRadius : lib18.BorderRadius.circular(properties._kDialogCornerRadius),child : lib10.BackdropFilter({
                filter : ImageFilter.blur({
                    sigmaX : properties._kBlurAmount,sigmaY : properties._kBlurAmount}),child : lib12.Container({
                    decoration : properties._kCupertinoDialogBlurOverlayDecoration,child : lib12.Container({
                        color : this.isSurfacePainted ? properties._kDialogColor : null,child : this.child})})})});
    }
}

export namespace _CupertinoDialogRenderWidget {
    export type Constructors = lib6.RenderObjectWidget.Constructors | '_CupertinoDialogRenderWidget';
    export type Interface = Omit<_CupertinoDialogRenderWidget, Constructors>;
}
@DartClass
export class _CupertinoDialogRenderWidget extends lib6.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib8.Key,contentSection? : lib6.Widget,actionsSection? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoDialogRenderWidget(_namedArguments? : {key? : lib8.Key,contentSection? : lib6.Widget,actionsSection? : lib6.Widget}) {
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
    createRenderObject(context : lib6.BuildContext) : lib19.RenderObject {
        return _RenderCupertinoDialog({
            dividerThickness : properties._kDividerThickness / lib7.MediaQuery.of(context).devicePixelRatio,isInAccessibilityMode : _isInAccessibilityMode(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib6.BuildContext,renderObject : _RenderCupertinoDialog) : any {
        renderObject.isInAccessibilityMode = _isInAccessibilityMode(context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : lib6.RenderObjectElement {
        return _CupertinoDialogRenderElement(this);
    }
}

export namespace _RenderCupertinoDialogActions {
    export type Constructors = '_RenderCupertinoDialogActions';
    export type Interface = Omit<_RenderCupertinoDialogActions, Constructors>;
}
@DartClass
@With(any,any)
export class _RenderCupertinoDialogActions extends any implements any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<any>,dialogWidth? : double,dividerThickness? : double}) {
    }
    @defaultConstructor
    _RenderCupertinoDialogActions(_namedArguments? : {children? : core.DartList<any>,dialogWidth? : double,dividerThickness? : double}) {
        let {children,dialogWidth,dividerThickness} = Object.assign({
            "dividerThickness" : 0.0}, _namedArguments );
        this._buttonBackgroundPaint = ((_) : any =>  {
            {
                _.color = properties._kDialogColor;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        this._pressedButtonBackgroundPaint = ((_) : any =>  {
            {
                _.color = properties._kDialogPressedColor;
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
        this._dialogWidth = dialogWidth;
        this._dividerThickness = dividerThickness;
        addAll(children);
    }
    get dialogWidth() : double {
        return this._dialogWidth;
    }
    _dialogWidth : double;

    set dialogWidth(newWidth : double) {
        if (newWidth != this._dialogWidth) {
            this._dialogWidth = newWidth;
            markNeedsLayout();
        }
    }
    get dividerThickness() : double {
        return this._dividerThickness;
    }
    _dividerThickness : double;

    set dividerThickness(newValue : double) {
        if (newValue != this._dividerThickness) {
            this._dividerThickness = newValue;
            markNeedsLayout();
        }
    }
    _buttonBackgroundPaint : any;

    _pressedButtonBackgroundPaint : any;

    _dividerPaint : any;

    get _pressedButtons() : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            let currentChild : any = firstChild;
            while (currentChild != null){
                /* TODO (AssertStatementImpl) : assert (currentChild.parentData is _ActionButtonParentData); */;
                let parentData : _ActionButtonParentData = currentChild.parentData;
                if (parentData.isPressed) {
                    yield currentChild;
                }
                currentChild = childAfter(currentChild);
            }
        }).call(this));
    }

    get _isButtonPressed() : boolean {
        let currentChild : any = firstChild;
        while (currentChild != null){
            /* TODO (AssertStatementImpl) : assert (currentChild.parentData is _ActionButtonParentData); */;
            let parentData : _ActionButtonParentData = currentChild.parentData;
            if (parentData.isPressed) {
                return true;
            }
            currentChild = childAfter(currentChild);
        }
        return false;
    }
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
        return this.dialogWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return this.dialogWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        let minHeight : double;
        if (op(Op.EQUALS,childCount,0)) {
            minHeight = 0.0;
        }else if (op(Op.EQUALS,childCount,1)) {
            minHeight = this._computeMinIntrinsicHeightSideBySide(width);
        }else {
            if (op(Op.EQUALS,childCount,2) && this._isSingleButtonRow(width)) {
                minHeight = this._computeMinIntrinsicHeightSideBySide(width);
            }else {
                minHeight = this._computeMinIntrinsicHeightStacked(width);
            }
        }
        return minHeight;
    }
    _computeMinIntrinsicHeightSideBySide(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (childCount >= 1 && childCount <= 2); */;
        let minHeight : double;
        if (op(Op.EQUALS,childCount,1)) {
            minHeight = firstChild.getMinIntrinsicHeight(width);
        }else {
            let perButtonWidth : double = (width - this.dividerThickness) / 2.0;
            minHeight = math.max(firstChild.getMinIntrinsicHeight(perButtonWidth),lastChild.getMinIntrinsicHeight(perButtonWidth));
        }
        return minHeight;
    }
    _computeMinIntrinsicHeightStacked(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (childCount >= 2); */;
        return op(Op.PLUS,op(Op.PLUS,firstChild.getMinIntrinsicHeight(width),this.dividerThickness),(0.5 * childAfter(firstChild).getMinIntrinsicHeight(width)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        let maxHeight : double;
        if (op(Op.EQUALS,childCount,0)) {
            maxHeight = 0.0;
        }else if (op(Op.EQUALS,childCount,1)) {
            maxHeight = firstChild.getMaxIntrinsicHeight(width);
        }else if (op(Op.EQUALS,childCount,2)) {
            if (this._isSingleButtonRow(width)) {
                let perButtonWidth : double = (width - this.dividerThickness) / 2.0;
                maxHeight = math.max(firstChild.getMaxIntrinsicHeight(perButtonWidth),lastChild.getMaxIntrinsicHeight(perButtonWidth));
            }else {
                maxHeight = this._computeMaxIntrinsicHeightStacked(width);
            }
        }else {
            maxHeight = this._computeMaxIntrinsicHeightStacked(width);
        }
        return maxHeight;
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
    _isSingleButtonRow(width : double) : boolean {
        let isSingleButtonRow : boolean;
        if (op(Op.EQUALS,childCount,1)) {
            isSingleButtonRow = true;
        }else if (op(Op.EQUALS,childCount,2)) {
            let sideBySideWidth : double = op(Op.PLUS,op(Op.PLUS,firstChild.getMaxIntrinsicWidth(new core.DartDouble(double).infinity),this.dividerThickness),lastChild.getMaxIntrinsicWidth(new core.DartDouble(double).infinity));
            isSingleButtonRow = sideBySideWidth <= width;
        }else {
            isSingleButtonRow = false;
        }
        return isSingleButtonRow;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (this._isSingleButtonRow(this.dialogWidth)) {
            if (op(Op.EQUALS,childCount,1)) {
                firstChild.layout(constraints,{
                    parentUsesSize : true});
                lib21.properties.size = constraints.constrain(Size(this.dialogWidth,firstChild.size.height));
            }else {
                let perButtonConstraints : lib15.BoxConstraints = lib15.BoxConstraints({
                    minWidth : op(Op.DIVIDE,(op(Op.MINUS,constraints.minWidth,this.dividerThickness)),2.0),maxWidth : op(Op.DIVIDE,(op(Op.MINUS,constraints.maxWidth,this.dividerThickness)),2.0),minHeight : 0.0,maxHeight : new core.DartDouble(double).infinity});
                firstChild.layout(perButtonConstraints,{
                    parentUsesSize : true});
                lastChild.layout(perButtonConstraints,{
                    parentUsesSize : true});
                /* TODO (AssertStatementImpl) : assert (lastChild.parentData is MultiChildLayoutParentData); */;
                let secondButtonParentData : lib29.MultiChildLayoutParentData = lastChild.parentData;
                secondButtonParentData.offset = Offset(op(Op.PLUS,firstChild.size.width,this.dividerThickness),0.0);
                lib21.properties.size = constraints.constrain(Size(this.dialogWidth,math.max(firstChild.size.height,lastChild.size.height)));
            }
        }else {
            let perButtonConstraints : lib15.BoxConstraints = constraints.copyWith({
                minHeight : 0.0,maxHeight : new core.DartDouble(double).infinity});
            let child : any = firstChild;
            let index : number = 0;
            let verticalOffset : double = 0.0;
            while (child != null){
                child.layout(perButtonConstraints,{
                    parentUsesSize : true});
                /* TODO (AssertStatementImpl) : assert (child.parentData is MultiChildLayoutParentData); */;
                let parentData : lib29.MultiChildLayoutParentData = child.parentData;
                parentData.offset = Offset(0.0,verticalOffset);
                verticalOffset += child.size.height;
                if (index < op(Op.MINUS,childCount,1)) {
                    verticalOffset += this.dividerThickness;
                }
                index += 1;
                child = childAfter(child);
            }
            lib21.properties.size = constraints.constrain(Size(this.dialogWidth,verticalOffset));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib19.PaintingContext,offset : any) : any {
        let canvas : any = context.canvas;
        if (this._isSingleButtonRow(lib21.properties.size.width)) {
            this._drawButtonBackgroundsAndDividersSingleRow(canvas,offset);
        }else {
            this._drawButtonBackgroundsAndDividersStacked(canvas,offset);
        }
        this._drawButtons(context,offset);
    }
    _drawButtonBackgroundsAndDividersSingleRow(canvas : any,offset : any) : any {
        let verticalDivider : any = op(Op.EQUALS,childCount,2) && !this._isButtonPressed ? Rect.fromLTWH(op(Op.PLUS,offset.dx,firstChild.size.width),offset.dy,this.dividerThickness,math.max(firstChild.size.height,lastChild.size.height)) : Rect.zero;
        let pressedButtonRects : core.DartList<any> = this._pressedButtons.map((pressedButton : any) =>  {
            let buttonParentData : lib29.MultiChildLayoutParentData = pressedButton.parentData;
            return Rect.fromLTWH(op(Op.PLUS,offset.dx,buttonParentData.offset.dx),op(Op.PLUS,offset.dy,buttonParentData.offset.dy),pressedButton.size.width,pressedButton.size.height);
        }).toList();
        let backgroundFillPath : any = ((_) : any =>  {
            {
                _.fillType = PathFillType.evenOdd;
                addRect(Rect.fromLTWH(0.0,0.0,lib21.properties.size.width,lib21.properties.size.height));
                addRect(verticalDivider);
                return _;
            }
        })(Path());
        for(let i : number = 0; i < pressedButtonRects.length; i += 1){
            backgroundFillPath.addRect(pressedButtonRects[i]);
        }
        canvas.drawPath(backgroundFillPath,this._buttonBackgroundPaint);
        let pressedBackgroundFillPath : any = Path();
        for(let i : number = 0; i < pressedButtonRects.length; i += 1){
            pressedBackgroundFillPath.addRect(pressedButtonRects[i]);
        }
        canvas.drawPath(pressedBackgroundFillPath,this._pressedButtonBackgroundPaint);
        let dividersPath : any = ((_) : any =>  {
            {
                addRect(verticalDivider);
                return _;
            }
        })(Path());
        canvas.drawPath(dividersPath,this._dividerPaint);
    }
    _drawButtonBackgroundsAndDividersStacked(canvas : any,offset : any) : any {
        let dividerOffset : any = Offset(0.0,this.dividerThickness);
        let backgroundFillPath : any = ((_) : any =>  {
            {
                _.fillType = PathFillType.evenOdd;
                addRect(Rect.fromLTWH(0.0,0.0,lib21.properties.size.width,lib21.properties.size.height));
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
            let dividerRect : any = Rect.fromLTWH(accumulatingOffset.dx,accumulatingOffset.dy,lib21.properties.size.width,this.dividerThickness);
            let buttonBackgroundRect : any = Rect.fromLTWH(accumulatingOffset.dx,op(Op.PLUS,accumulatingOffset.dy,(isDividerPresent ? this.dividerThickness : 0.0)),lib21.properties.size.width,child.size.height);
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
    _drawButtons(context : lib19.PaintingContext,offset : any) : any {
        let child : any = firstChild;
        while (child != null){
            let childParentData : lib29.MultiChildLayoutParentData = child.parentData;
            context.paintChild(child,op(Op.PLUS,childParentData.offset,offset));
            child = childAfter(child);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib22.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return defaultHitTestChildren(result,{
            position : position});
    }
}

export namespace _RenderCupertinoDialog {
    export type Constructors = '_RenderCupertinoDialog';
    export type Interface = Omit<_RenderCupertinoDialog, Constructors>;
}
@DartClass
export class _RenderCupertinoDialog extends any {
    constructor(_namedArguments? : {contentSection? : any,actionsSection? : any,dividerThickness? : double,isInAccessibilityMode? : boolean}) {
    }
    @defaultConstructor
    _RenderCupertinoDialog(_namedArguments? : {contentSection? : any,actionsSection? : any,dividerThickness? : double,isInAccessibilityMode? : boolean}) {
        let {contentSection,actionsSection,dividerThickness,isInAccessibilityMode} = Object.assign({
            "dividerThickness" : 0.0,
            "isInAccessibilityMode" : false}, _namedArguments );
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
        this._isInAccessibilityMode = isInAccessibilityMode;
    }
    get contentSection() : any {
        return this._contentSection;
    }
    _contentSection : any;

    set contentSection(newContentSection : any) {
        if (newContentSection != this._contentSection) {
            if (this._contentSection != null) {
                dropChild(this._contentSection);
            }
            this._contentSection = newContentSection;
            if (this._contentSection != null) {
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
    get isInAccessibilityMode() : boolean {
        return this._isInAccessibilityMode;
    }
    _isInAccessibilityMode : boolean;

    set isInAccessibilityMode(newValue : boolean) {
        if (newValue != this._isInAccessibilityMode) {
            this._isInAccessibilityMode = newValue;
            markNeedsLayout();
        }
    }
    get _dialogWidth() : double {
        return this.isInAccessibilityMode ? properties._kAccessibilityCupertinoDialogWidth : properties._kCupertinoDialogWidth;
    }
    _dividerThickness : double;

    _dividerPaint : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib19.PipelineOwner) : any {
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
        if (isNot(child.parentData, lib15.BoxParentData)) {
            child.parentData = lib15.BoxParentData();
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
    debugDescribeChildren() : core.DartList<lib20.DiagnosticsNode> {
        let value : core.DartList<lib20.DiagnosticsNode> = new core.DartList.literal<lib20.DiagnosticsNode>();
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
        return this._dialogWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return this._dialogWidth;
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
        if (new core.DartDouble(height).isFinite) return height;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (this.isInAccessibilityMode) {
            this.performAccessibilityLayout();
        }else {
            this.performRegularLayout();
        }
    }
    performRegularLayout() : any {
        let hasDivider : boolean = op(Op.GT,this.contentSection.getMaxIntrinsicHeight(this._dialogWidth),0.0) && op(Op.GT,this.actionsSection.getMaxIntrinsicHeight(this._dialogWidth),0.0);
        let dividerThickness : double = hasDivider ? this._dividerThickness : 0.0;
        let minActionsHeight : double = this.actionsSection.getMinIntrinsicHeight(this._dialogWidth);
        this.contentSection.layout(constraints.deflate(lib16.EdgeInsets.only({
            bottom : minActionsHeight + dividerThickness})),{
            parentUsesSize : true});
        let contentSize : any = this.contentSection.size;
        this.actionsSection.layout(constraints.deflate(lib16.EdgeInsets.only({
            top : op(Op.PLUS,contentSize.height,dividerThickness)})),{
            parentUsesSize : true});
        let actionsSize : any = this.actionsSection.size;
        let dialogHeight : double = op(Op.PLUS,op(Op.PLUS,contentSize.height,dividerThickness),actionsSize.height);
        lib21.properties.size = constraints.constrain(Size(this._dialogWidth,dialogHeight));
        /* TODO (AssertStatementImpl) : assert (actionsSection.parentData is BoxParentData); */;
        let actionParentData : lib15.BoxParentData = this.actionsSection.parentData;
        actionParentData.offset = Offset(0.0,op(Op.PLUS,contentSize.height,dividerThickness));
    }
    performAccessibilityLayout() : any {
        let hasDivider : boolean = op(Op.GT,this.contentSection.getMaxIntrinsicHeight(this._dialogWidth),0.0) && op(Op.GT,this.actionsSection.getMaxIntrinsicHeight(this._dialogWidth),0.0);
        let dividerThickness : double = hasDivider ? this._dividerThickness : 0.0;
        let maxContentHeight : double = this.contentSection.getMaxIntrinsicHeight(this._dialogWidth);
        let maxActionsHeight : double = this.actionsSection.getMaxIntrinsicHeight(this._dialogWidth);
        let contentSize : any;
        let actionsSize : any;
        if (maxContentHeight + dividerThickness + maxActionsHeight > constraints.maxHeight) {
            this.actionsSection.layout(constraints.deflate(lib16.EdgeInsets.only({
                top : op(Op.DIVIDE,constraints.maxHeight,2.0)})),{
                parentUsesSize : true});
            actionsSize = this.actionsSection.size;
            this.contentSection.layout(constraints.deflate(lib16.EdgeInsets.only({
                bottom : op(Op.PLUS,actionsSize.height,dividerThickness)})),{
                parentUsesSize : true});
            contentSize = this.contentSection.size;
        }else {
            this.contentSection.layout(constraints,{
                parentUsesSize : true});
            contentSize = this.contentSection.size;
            this.actionsSection.layout(constraints.deflate(lib16.EdgeInsets.only({
                top : contentSize.height})),{
                parentUsesSize : true});
            actionsSize = this.actionsSection.size;
        }
        let dialogHeight : double = op(Op.PLUS,op(Op.PLUS,contentSize.height,dividerThickness),actionsSize.height);
        lib21.properties.size = constraints.constrain(Size(this._dialogWidth,dialogHeight));
        /* TODO (AssertStatementImpl) : assert (actionsSection.parentData is BoxParentData); */;
        let actionParentData : lib15.BoxParentData = this.actionsSection.parentData;
        actionParentData.offset = Offset(0.0,op(Op.PLUS,contentSize.height,dividerThickness));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib19.PaintingContext,offset : any) : any {
        let contentParentData : lib15.BoxParentData = this.contentSection.parentData;
        this.contentSection.paint(context,op(Op.PLUS,offset,contentParentData.offset));
        let hasDivider : boolean = op(Op.GT,this.contentSection.size.height,0.0) && op(Op.GT,this.actionsSection.size.height,0.0);
        if (hasDivider) {
            this._paintDividerBetweenContentAndActions(context.canvas,offset);
        }
        let actionsParentData : lib15.BoxParentData = this.actionsSection.parentData;
        this.actionsSection.paint(context,op(Op.PLUS,offset,actionsParentData.offset));
    }
    _paintDividerBetweenContentAndActions(canvas : any,offset : any) : any {
        canvas.drawRect(Rect.fromLTWH(offset.dx,op(Op.PLUS,offset.dy,this.contentSection.size.height),lib21.properties.size.width,this._dividerThickness),this._dividerPaint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib22.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        let isHit : boolean = false;
        let contentSectionParentData : lib15.BoxParentData = this.contentSection.parentData;
        let actionsSectionParentData : lib15.BoxParentData = this.actionsSection.parentData;
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

export enum _AlertDialogSections {
    contentSection,
    actionsSection
}

export namespace _CupertinoAlertContentSection {
    export type Constructors = lib6.StatelessWidget.Constructors | '_CupertinoAlertContentSection';
    export type Interface = Omit<_CupertinoAlertContentSection, Constructors>;
}
@DartClass
export class _CupertinoAlertContentSection extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib8.Key,title? : lib6.Widget,content? : lib6.Widget,scrollController? : lib9.ScrollController}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertContentSection(_namedArguments? : {key? : lib8.Key,title? : lib6.Widget,content? : lib6.Widget,scrollController? : lib9.ScrollController}) {
        let {key,title,content,scrollController} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.title = title;
        this.content = content;
        this.scrollController = scrollController;
    }
    title : lib6.Widget;

    content : lib6.Widget;

    scrollController : lib9.ScrollController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let textScaleFactor : double = lib7.MediaQuery.of(context).textScaleFactor;
        let titleContentGroup : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>();
        if (this.title != null) {
            titleContentGroup.add(lib10.Padding({
                padding : lib16.EdgeInsets.only({
                    left : properties._kEdgePadding,right : properties._kEdgePadding,bottom : op(Op.EQUALS,this.content,null) ? properties._kEdgePadding : 1.0,top : properties._kEdgePadding * textScaleFactor}),child : lib23.DefaultTextStyle({
                    style : properties._kCupertinoDialogTitleStyle,textAlign : TextAlign.center,child : this.title})}));
        }
        if (this.content != null) {
            titleContentGroup.add(lib10.Padding({
                padding : lib16.EdgeInsets.only({
                    left : properties._kEdgePadding,right : properties._kEdgePadding,bottom : properties._kEdgePadding * textScaleFactor,top : op(Op.EQUALS,this.title,null) ? properties._kEdgePadding : 1.0}),child : lib23.DefaultTextStyle({
                    style : properties._kCupertinoDialogContentStyle,textAlign : TextAlign.center,child : this.content})}));
        }
        if (titleContentGroup.isEmpty) {
            return lib24.SingleChildScrollView({
                controller : this.scrollController,child : lib12.Container({
                    width : 0.0,height : 0.0})});
        }
        return lib25.CupertinoScrollbar({
            child : lib24.SingleChildScrollView({
                controller : this.scrollController,child : lib10.Column({
                    mainAxisSize : lib11.MainAxisSize.max,crossAxisAlignment : lib11.CrossAxisAlignment.stretch,children : titleContentGroup})})});
    }
}

export namespace _CupertinoAlertActionSection {
    export type Constructors = lib6.StatefulWidget.Constructors | '_CupertinoAlertActionSection';
    export type Interface = Omit<_CupertinoAlertActionSection, Constructors>;
}
@DartClass
export class _CupertinoAlertActionSection extends lib6.StatefulWidget {
    constructor(_namedArguments? : {key? : lib8.Key,children? : core.DartList<lib6.Widget>,scrollController? : lib9.ScrollController}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAlertActionSection(_namedArguments? : {key? : lib8.Key,children? : core.DartList<lib6.Widget>,scrollController? : lib9.ScrollController}) {
        let {key,children,scrollController} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.children = children;
        this.scrollController = scrollController;
    }
     : any;

     : any;

     : any;

    children : core.DartList<lib6.Widget>;

    scrollController : lib9.ScrollController;

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
        let devicePixelRatio : double = lib7.MediaQuery.of(context).devicePixelRatio;
        let interactiveButtons : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>();
        for(let i : number = 0; i < widget.children.length; i += 1){
            interactiveButtons.add(_PressableActionButton({
                child : op(Op.INDEX,widget.children,i)}));
        }
        return lib25.CupertinoScrollbar({
            child : lib24.SingleChildScrollView({
                controller : widget.scrollController,child : _CupertinoDialogActionsRenderWidget({
                    actionButtons : interactiveButtons,dividerThickness : properties._kDividerThickness / devicePixelRatio})})});
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
            isPressed : this._isPressed,child : lib10.MergeSemantics({
                child : lib27.GestureDetector({
                    excludeFromSemantics : true,behavior : HitTestBehavior.opaque,onTapDown : (details : lib26.TapDownDetails) =>  {
                        return setState(() =>  {
                            this._isPressed = true;
                        });
                    },onTapUp : (details : lib26.TapUpDetails) =>  {
                        return setState(() =>  {
                            this._isPressed = false;
                        });
                    },onTapCancel : () =>  {
                        return setState(() =>  {
                            return this._isPressed = false;
                        });
                    },child : widget.child})})});
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
export class _ActionButtonParentDataWidget extends lib6.ParentDataWidget<_CupertinoDialogActionsRenderWidget> {
    constructor(_namedArguments? : {key? : lib8.Key,isPressed? : boolean,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ActionButtonParentDataWidget(_namedArguments? : {key? : lib8.Key,isPressed? : boolean,child? : lib6.Widget}) {
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
    applyParentData(renderObject : lib19.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (renderObject.parentData is _ActionButtonParentData); */;
        let parentData : _ActionButtonParentData = renderObject.parentData;
        if (parentData.isPressed != this.isPressed) {
            parentData.isPressed = this.isPressed;
            let targetParent : lib28.AbstractNode = renderObject.parent;
            if (is(targetParent, lib19.RenderObject)) targetParent.markNeedsPaint();
        }
    }
}

export namespace _ActionButtonParentData {
    export type Constructors = lib29.MultiChildLayoutParentData.Constructors | '_ActionButtonParentData';
    export type Interface = Omit<_ActionButtonParentData, Constructors>;
}
@DartClass
export class _ActionButtonParentData extends lib29.MultiChildLayoutParentData {
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

export namespace CupertinoDialogAction {
    export type Constructors = lib6.StatelessWidget.Constructors | 'CupertinoDialogAction';
    export type Interface = Omit<CupertinoDialogAction, Constructors>;
}
@DartClass
export class CupertinoDialogAction extends lib6.StatelessWidget {
    constructor(_namedArguments? : {onPressed? : any,isDefaultAction? : boolean,isDestructiveAction? : boolean,textStyle? : lib4.TextStyle,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoDialogAction(_namedArguments? : {onPressed? : any,isDefaultAction? : boolean,isDestructiveAction? : boolean,textStyle? : lib4.TextStyle,child? : lib6.Widget}) {
        let {onPressed,isDefaultAction,isDestructiveAction,textStyle,child} = Object.assign({
            "isDefaultAction" : false,
            "isDestructiveAction" : false}, _namedArguments );
        this.assert = assert;
        this.onPressed = onPressed;
        this.isDefaultAction = isDefaultAction;
        this.isDestructiveAction = isDestructiveAction;
        this.textStyle = textStyle;
        this.child = child;
    }
     : any;

    onPressed : any;

    isDefaultAction : boolean;

    isDestructiveAction : boolean;

    textStyle : lib4.TextStyle;

    child : lib6.Widget;

    get enabled() : boolean {
        return this.onPressed != null;
    }
    _calculatePadding(context : lib6.BuildContext) : double {
        return 8.0 * lib7.MediaQuery.textScaleFactorOf(context);
    }
    _buildContentWithRegularSizingPolicy(_namedArguments? : {context? : lib6.BuildContext,textStyle? : lib4.TextStyle,content? : lib6.Widget}) : lib6.Widget {
        let {context,textStyle,content} = Object.assign({
        }, _namedArguments );
        let isInAccessibilityMode : boolean = _isInAccessibilityMode(context);
        let dialogWidth : double = isInAccessibilityMode ? properties._kAccessibilityCupertinoDialogWidth : properties._kCupertinoDialogWidth;
        let textScaleFactor : double = lib7.MediaQuery.textScaleFactorOf(context);
        let fontSizeRatio : double = (textScaleFactor * textStyle.fontSize) / properties._kMinButtonFontSize;
        let padding : double = this._calculatePadding(context);
        return lib10.IntrinsicHeight({
            child : lib10.SizedBox({
                width : new core.DartDouble(double).infinity,child : lib10.FittedBox({
                    fit : lib30.BoxFit.scaleDown,child : lib10.ConstrainedBox({
                        constraints : lib15.BoxConstraints({
                            maxWidth : fontSizeRatio * (dialogWidth - (2 * padding))}),child : lib10.Semantics({
                            button : true,onTap : this.onPressed,child : lib23.DefaultTextStyle({
                                style : textStyle,textAlign : TextAlign.center,overflow : lib31.TextOverflow.ellipsis,maxLines : 1,child : content})})})})})});
    }
    _buildContentWithAccessibilitySizingPolicy(_namedArguments? : {textStyle? : lib4.TextStyle,content? : lib6.Widget}) : lib6.Widget {
        let {textStyle,content} = Object.assign({
        }, _namedArguments );
        return lib23.DefaultTextStyle({
            style : textStyle,textAlign : TextAlign.center,child : content});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let style : lib4.TextStyle = properties._kCupertinoDialogActionStyle;
        style = style.merge(this.textStyle);
        if (this.isDestructiveAction) {
            style = style.copyWith({
                color : lib3.CupertinoColors.destructiveRed});
        }
        if (!this.enabled) {
            style = style.copyWith({
                color : style.color.withOpacity(0.5)});
        }
        let sizedContent : lib6.Widget = _isInAccessibilityMode(context) ? this._buildContentWithAccessibilitySizingPolicy({
            textStyle : style,content : this.child}) : this._buildContentWithRegularSizingPolicy({
            context : context,textStyle : style,content : this.child});
        return lib27.GestureDetector({
            excludeFromSemantics : true,onTap : this.onPressed,behavior : HitTestBehavior.opaque,child : lib10.ConstrainedBox({
                constraints : new lib15.BoxConstraints({
                    minHeight : properties._kMinButtonHeight}),child : lib12.Container({
                    alignment : lib32.Alignment.center,padding : lib16.EdgeInsets.all(this._calculatePadding(context)),child : sizedContent})})});
    }
}

export namespace _CupertinoDialogActionsRenderWidget {
    export type Constructors = lib6.MultiChildRenderObjectWidget.Constructors | '_CupertinoDialogActionsRenderWidget';
    export type Interface = Omit<_CupertinoDialogActionsRenderWidget, Constructors>;
}
@DartClass
export class _CupertinoDialogActionsRenderWidget extends lib6.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib8.Key,actionButtons? : core.DartList<lib6.Widget>,dividerThickness? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoDialogActionsRenderWidget(_namedArguments? : {key? : lib8.Key,actionButtons? : core.DartList<lib6.Widget>,dividerThickness? : double}) {
        let {key,actionButtons,dividerThickness} = Object.assign({
            "dividerThickness" : 0.0}, _namedArguments );
        this._dividerThickness = dividerThickness;
        super.MultiChildRenderObjectWidget({
            key : key,children : actionButtons});
    }
    _dividerThickness : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib6.BuildContext) : lib19.RenderObject {
        return _RenderCupertinoDialogActions({
            dialogWidth : _isInAccessibilityMode(context) ? properties._kAccessibilityCupertinoDialogWidth : properties._kCupertinoDialogWidth,dividerThickness : this._dividerThickness});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib6.BuildContext,renderObject : _RenderCupertinoDialogActions) : any {
        renderObject.dialogWidth = _isInAccessibilityMode(context) ? properties._kAccessibilityCupertinoDialogWidth : properties._kCupertinoDialogWidth;
        renderObject.dividerThickness = this._dividerThickness;
    }
}

export namespace _CupertinoDialogRenderElement {
    export type Constructors = lib6.RenderObjectElement.Constructors | '_CupertinoDialogRenderElement';
    export type Interface = Omit<_CupertinoDialogRenderElement, Constructors>;
}
@DartClass
export class _CupertinoDialogRenderElement extends lib6.RenderObjectElement {
    constructor(widget : _CupertinoDialogRenderWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoDialogRenderElement(widget : _CupertinoDialogRenderWidget) {
        super.RenderObjectElement(widget);
    }
    _contentElement : lib6.Element;

    _actionsElement : lib6.Element;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : _CupertinoDialogRenderWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : _RenderCupertinoDialog {
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
        this._contentElement = this.updateChild(this._contentElement,this.widget.contentSection,_AlertDialogSections.contentSection);
        this._actionsElement = this.updateChild(this._actionsElement,this.widget.actionsSection,_AlertDialogSections.actionsSection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib19.RenderObject,slot : _AlertDialogSections) : any {
        /* TODO (AssertStatementImpl) : assert (slot != null); */;
        switch (slot) {
            case _AlertDialogSections.contentSection:
                this.renderObject.contentSection = child;
                break;
            case _AlertDialogSections.actionsSection:
                this.renderObject.actionsSection = child;
                break;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib19.RenderObject,slot : _AlertDialogSections) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : lib6.RenderObjectWidget) : any {
        super.update(newWidget);
        this._contentElement = this.updateChild(this._contentElement,this.widget.contentSection,_AlertDialogSections.contentSection);
        this._actionsElement = this.updateChild(this._actionsElement,this.widget.actionsSection,_AlertDialogSections.actionsSection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib6.Element) : any {
        /* TODO (AssertStatementImpl) : assert (child == _contentElement || child == _actionsElement); */;
        if (op(Op.EQUALS,this._contentElement,child)) {
            this._contentElement = null;
        }else {
            /* TODO (AssertStatementImpl) : assert (_actionsElement == child); */;
            this._actionsElement = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib19.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (child == renderObject.contentSection || child == renderObject.actionsSection); */;
        if (op(Op.EQUALS,this.renderObject.contentSection,child)) {
            this.renderObject.contentSection = null;
        }else {
            /* TODO (AssertStatementImpl) : assert (renderObject.actionsSection == child); */;
            this.renderObject.actionsSection = null;
        }
    }
}

export class properties {
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

    private static __$_kCupertinoDialogContentStyle : lib4.TextStyle;
    static get _kCupertinoDialogContentStyle() : lib4.TextStyle { 
        if (this.__$_kCupertinoDialogContentStyle===undefined) {
            this.__$_kCupertinoDialogContentStyle = lib4.TextStyle({
                fontFamily : '.SF UI Text',inherit : false,fontSize : 13.4,fontWeight : FontWeight.w400,color : lib3.CupertinoColors.black,height : 1.036,letterSpacing : -0.25,textBaseline : TextBaseline.alphabetic});
        }
        return this.__$_kCupertinoDialogContentStyle;
    }
    static set _kCupertinoDialogContentStyle(__$value : lib4.TextStyle)  { 
        this.__$_kCupertinoDialogContentStyle = __$value;
    }

    private static __$_kCupertinoDialogActionStyle : lib4.TextStyle;
    static get _kCupertinoDialogActionStyle() : lib4.TextStyle { 
        if (this.__$_kCupertinoDialogActionStyle===undefined) {
            this.__$_kCupertinoDialogActionStyle = lib4.TextStyle({
                fontFamily : '.SF UI Text',inherit : false,fontSize : 16.8,fontWeight : FontWeight.w400,color : lib3.CupertinoColors.activeBlue,textBaseline : TextBaseline.alphabetic});
        }
        return this.__$_kCupertinoDialogActionStyle;
    }
    static set _kCupertinoDialogActionStyle(__$value : lib4.TextStyle)  { 
        this.__$_kCupertinoDialogActionStyle = __$value;
    }

    private static __$_kCupertinoDialogWidth : double;
    static get _kCupertinoDialogWidth() : double { 
        if (this.__$_kCupertinoDialogWidth===undefined) {
            this.__$_kCupertinoDialogWidth = 270.0;
        }
        return this.__$_kCupertinoDialogWidth;
    }
    static set _kCupertinoDialogWidth(__$value : double)  { 
        this.__$_kCupertinoDialogWidth = __$value;
    }

    private static __$_kAccessibilityCupertinoDialogWidth : double;
    static get _kAccessibilityCupertinoDialogWidth() : double { 
        if (this.__$_kAccessibilityCupertinoDialogWidth===undefined) {
            this.__$_kAccessibilityCupertinoDialogWidth = 310.0;
        }
        return this.__$_kAccessibilityCupertinoDialogWidth;
    }
    static set _kAccessibilityCupertinoDialogWidth(__$value : double)  { 
        this.__$_kAccessibilityCupertinoDialogWidth = __$value;
    }

    private static __$_kCupertinoDialogBlurOverlayDecoration : lib5.BoxDecoration;
    static get _kCupertinoDialogBlurOverlayDecoration() : lib5.BoxDecoration { 
        if (this.__$_kCupertinoDialogBlurOverlayDecoration===undefined) {
            this.__$_kCupertinoDialogBlurOverlayDecoration = lib5.BoxDecoration({
                color : lib3.CupertinoColors.white,backgroundBlendMode : BlendMode.overlay});
        }
        return this.__$_kCupertinoDialogBlurOverlayDecoration;
    }
    static set _kCupertinoDialogBlurOverlayDecoration(__$value : lib5.BoxDecoration)  { 
        this.__$_kCupertinoDialogBlurOverlayDecoration = __$value;
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

    private static __$_kEdgePadding : double;
    static get _kEdgePadding() : double { 
        if (this.__$_kEdgePadding===undefined) {
            this.__$_kEdgePadding = 20.0;
        }
        return this.__$_kEdgePadding;
    }
    static set _kEdgePadding(__$value : double)  { 
        this.__$_kEdgePadding = __$value;
    }

    private static __$_kMinButtonHeight : double;
    static get _kMinButtonHeight() : double { 
        if (this.__$_kMinButtonHeight===undefined) {
            this.__$_kMinButtonHeight = 45.0;
        }
        return this.__$_kMinButtonHeight;
    }
    static set _kMinButtonHeight(__$value : double)  { 
        this.__$_kMinButtonHeight = __$value;
    }

    private static __$_kMinButtonFontSize : double;
    static get _kMinButtonFontSize() : double { 
        if (this.__$_kMinButtonFontSize===undefined) {
            this.__$_kMinButtonFontSize = 10.0;
        }
        return this.__$_kMinButtonFontSize;
    }
    static set _kMinButtonFontSize(__$value : double)  { 
        this.__$_kMinButtonFontSize = __$value;
    }

    private static __$_kDialogCornerRadius : double;
    static get _kDialogCornerRadius() : double { 
        if (this.__$_kDialogCornerRadius===undefined) {
            this.__$_kDialogCornerRadius = 12.0;
        }
        return this.__$_kDialogCornerRadius;
    }
    static set _kDialogCornerRadius(__$value : double)  { 
        this.__$_kDialogCornerRadius = __$value;
    }

    private static __$_kCupertinoDialogTitleStyle : lib4.TextStyle;
    static get _kCupertinoDialogTitleStyle() : lib4.TextStyle { 
        if (this.__$_kCupertinoDialogTitleStyle===undefined) {
            this.__$_kCupertinoDialogTitleStyle = lib4.TextStyle({
                fontFamily : '.SF UI Display',inherit : false,fontSize : 18.0,fontWeight : FontWeight.w600,color : lib3.CupertinoColors.black,letterSpacing : 0.48,textBaseline : TextBaseline.alphabetic});
        }
        return this.__$_kCupertinoDialogTitleStyle;
    }
    static set _kCupertinoDialogTitleStyle(__$value : lib4.TextStyle)  { 
        this.__$_kCupertinoDialogTitleStyle = __$value;
    }

    private static __$_kDialogColor : any;
    static get _kDialogColor() : any { 
        if (this.__$_kDialogColor===undefined) {
            this.__$_kDialogColor = Color(3238002687);
        }
        return this.__$_kDialogColor;
    }
    static set _kDialogColor(__$value : any)  { 
        this.__$_kDialogColor = __$value;
    }

    private static __$_kDialogPressedColor : any;
    static get _kDialogPressedColor() : any { 
        if (this.__$_kDialogPressedColor===undefined) {
            this.__$_kDialogPressedColor = Color(2432696319);
        }
        return this.__$_kDialogPressedColor;
    }
    static set _kDialogPressedColor(__$value : any)  { 
        this.__$_kDialogPressedColor = __$value;
    }

    private static __$_kButtonDividerColor : any;
    static get _kButtonDividerColor() : any { 
        if (this.__$_kButtonDividerColor===undefined) {
            this.__$_kButtonDividerColor = Color(1090519039);
        }
        return this.__$_kButtonDividerColor;
    }
    static set _kButtonDividerColor(__$value : any)  { 
        this.__$_kButtonDividerColor = __$value;
    }

    private static __$_kMaxRegularTextScaleFactor : double;
    static get _kMaxRegularTextScaleFactor() : double { 
        if (this.__$_kMaxRegularTextScaleFactor===undefined) {
            this.__$_kMaxRegularTextScaleFactor = 1.4;
        }
        return this.__$_kMaxRegularTextScaleFactor;
    }
    static set _kMaxRegularTextScaleFactor(__$value : double)  { 
        this.__$_kMaxRegularTextScaleFactor = __$value;
    }

}
