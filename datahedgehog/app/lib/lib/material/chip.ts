/** Library asset:datahedgehog_monitor/lib/lib/material/chip.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./icons";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib9 from "./theme_data";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/circle_border";
import * as lib12 from "./chip_theme";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib19 from "./tooltip";
import * as lib20 from "./material_localizations";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib22 from "./ink_well";
import * as lib23 from "./theme";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/painting/shape_decoration";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/widgets/animated_switcher";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib32 from "./material";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib37 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib38 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib39 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as math from "@dart2ts/dart/math";
import * as lib41 from "./colors";
import * as lib42 from "@dart2ts.packages/flutter/lib/src/rendering/layer";

export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    return properties.label.getDistanceToActualBaseline(baseline);
};
export var _updateChild : (oldChild : any,newChild : any,slot : _ChipSlot) => any = (oldChild : any,newChild : any,slot : _ChipSlot) : any =>  {
    if (oldChild != null) {
        dropChild(oldChild);
        properties.childToSlot.remove(oldChild);
        properties.slotToChild.remove(slot);
    }
    if (newChild != null) {
        properties.childToSlot.set(newChild,slot);
        properties.slotToChild.set(slot,newChild);
        adoptChild(newChild);
    }
    return newChild;
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return properties.deleteButtonRect.contains(position) || properties.pressRect.contains(position);
};
export var attach : (owner : lib34.PipelineOwner) => any = (owner : lib34.PipelineOwner) : any =>  {
    super.attach(owner);
    for(let child of properties._children) {
        child.attach(owner);
    }
};
export var detach : () => any = () : any =>  {
    super.detach();
    for(let child of properties._children) {
        child.detach();
    }
};
export var redepthChildren : () => any = () : any =>  {
    properties._children.forEach(redepthChild);
};
export var visitChildren : (visitor : (child : any) => any) => any = (visitor : (child : any) => any) : any =>  {
    properties._children.forEach(visitor);
};
export var debugDescribeChildren : () => core.DartList<lib39.DiagnosticsNode> = () : core.DartList<lib39.DiagnosticsNode> =>  {
    let value : core.DartList<lib39.DiagnosticsNode> = new core.DartList.literal<lib39.DiagnosticsNode>();
    var add : (child : any,name : string) => any = (child : any,name : string) : any =>  {
        if (child != null) {
            value.add(child.toDiagnosticsNode({
                name : name}));
        }
    };
    add(properties.avatar,'avatar');
    add(properties.label,'label');
    add(properties.deleteIcon,'deleteIcon');
    return value;
};
export var _minWidth : (box : any,height : double) => double = (box : any,height : double) : double =>  {
    return op(Op.EQUALS,box,null) ? 0.0 : box.getMinIntrinsicWidth(height);
};
export var _maxWidth : (box : any,height : double) => double = (box : any,height : double) : double =>  {
    return op(Op.EQUALS,box,null) ? 0.0 : box.getMaxIntrinsicWidth(height);
};
export var _minHeight : (box : any,width : double) => double = (box : any,width : double) : double =>  {
    return op(Op.EQUALS,box,null) ? 0.0 : box.getMinIntrinsicHeight(width);
};
export var _boxSize : (box : any) => any = (box : any) : any =>  {
    return op(Op.EQUALS,box,null) ? Size.zero : box.size;
};
export var _boxRect : (box : any) => any = (box : any) : any =>  {
    return op(Op.EQUALS,box,null) ? Rect.zero : op(Op.BITAND,_boxParentData(box).offset,box.size);
};
export var _boxParentData : (box : any) => lib33.BoxParentData = (box : any) : lib33.BoxParentData =>  {
    return box.parentData;
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let overallPadding : double = properties.theme.padding.horizontal + properties.theme.labelPadding.horizontal;
    return overallPadding + _minWidth(properties.avatar,height) + _minWidth(properties.label,height) + _minWidth(properties.deleteIcon,height);
};
export var hitTest : (result : lib36.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib36.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    if (!lib37.properties.size.contains(position)) return false;
    let hitTestChild : any;
    switch (properties.textDirection) {
        case TextDirection.ltr:
            if (op(Op.GT,op(Op.DIVIDE,position.dx,lib37.properties.size.width),0.66)) hitTestChild = ((properties.deleteIcon || properties.label) || properties.avatar);else hitTestChild = (properties.label || properties.avatar);
            break;
        case TextDirection.rtl:
            if (op(Op.LT,op(Op.DIVIDE,position.dx,lib37.properties.size.width),0.33)) hitTestChild = ((properties.deleteIcon || properties.label) || properties.avatar);else hitTestChild = (properties.label || properties.avatar);
            break;
    }
    return (((_724_)=>(!!_724_)?_724_.hitTest(result,{
        position : hitTestChild.size.center(Offset.zero)}):null)(hitTestChild) || false);
};
export var _layoutDeleteIcon : (contentConstraints : lib33.BoxConstraints,contentSize : double) => any = (contentConstraints : lib33.BoxConstraints,contentSize : double) : any =>  {
    let requestedSize : double = math.max(0.0,contentSize);
    let deleteIconConstraints : lib33.BoxConstraints = lib33.BoxConstraints.tightFor({
        width : requestedSize,height : requestedSize});
    properties.deleteIcon.layout(deleteIconConstraints,{
        parentUsesSize : true});
    if (!properties.deleteIconShowing) {
        return Size(0.0,contentSize);
    }
    let deleteIconWidth : double = 0.0;
    let deleteIconHeight : double = 0.0;
    let boxSize : any = _boxSize(properties.deleteIcon);
    deleteIconWidth += properties.deleteDrawerAnimation.value * boxSize.width;
    deleteIconHeight += boxSize.height;
    return Size(deleteIconWidth,deleteIconHeight);
};
export var _layoutAvatar : (contentConstraints : lib33.BoxConstraints,contentSize : double) => any = (contentConstraints : lib33.BoxConstraints,contentSize : double) : any =>  {
    let requestedSize : double = math.max(0.0,contentSize);
    let avatarConstraints : lib33.BoxConstraints = lib33.BoxConstraints.tightFor({
        width : requestedSize,height : requestedSize});
    properties.avatar.layout(avatarConstraints,{
        parentUsesSize : true});
    if (!properties.theme.showCheckmark && !properties.theme.showAvatar) {
        return Size(0.0,contentSize);
    }
    let avatarWidth : double = 0.0;
    let avatarHeight : double = 0.0;
    let avatarBoxSize : any = _boxSize(properties.avatar);
    if (properties.theme.showAvatar) {
        avatarWidth += properties.avatarDrawerAnimation.value * avatarBoxSize.width;
    }else {
        avatarWidth += properties.avatarDrawerAnimation.value * contentSize;
    }
    avatarHeight += avatarBoxSize.height;
    return Size(avatarWidth,avatarHeight);
};
export var _layoutLabel : (iconSizes : double,size : any) => any = (iconSizes : double,size : any) : any =>  {
    let rawSize : any = _boxSize(properties.label);
    if (constraints.maxWidth.isFinite) {
        properties.label.layout(constraints.copyWith({
            minWidth : 0.0,maxWidth : math.max(0.0,op(Op.MINUS,op(Op.MINUS,constraints.maxWidth,iconSizes),properties.theme.labelPadding.horizontal)),minHeight : rawSize.height,maxHeight : size.height}),{
            parentUsesSize : true});
    }else {
        properties.label.layout(lib33.BoxConstraints({
            minHeight : rawSize.height,maxHeight : size.height,minWidth : 0.0,maxWidth : size.width}),{
            parentUsesSize : true});
    }
    return Size(op(Op.PLUS,rawSize.width,properties.theme.labelPadding.horizontal),op(Op.PLUS,rawSize.height,properties.theme.labelPadding.vertical));
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return computeMinIntrinsicHeight(width);
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return math.max(properties._kChipHeight,properties.theme.padding.vertical + properties.theme.labelPadding.vertical + _minHeight(properties.label,width));
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let overallPadding : double = properties.theme.padding.vertical + properties.theme.labelPadding.horizontal;
    return overallPadding + _maxWidth(properties.avatar,height) + _maxWidth(properties.label,height) + _maxWidth(properties.deleteIcon,height);
};
export var debugPaint : (context : lib34.PaintingContext,offset : any) => any = (context : lib34.PaintingContext,offset : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (!_debugShowTapTargetOutlines || () {final Paint outlinePaint = Paint()..color = const Color(0xff800000)..strokeWidth = 1.0..style = PaintingStyle.stroke; if (deleteIconShowing) {context.canvas.drawRect(deleteButtonRect.shift(offset), outlinePaint);} context.canvas.drawRect(pressRect.shift(offset), outlinePaint..color = const Color(0xff008000)); return true;}()); */;
};
export var paint : (context : lib34.PaintingContext,offset : any) => any = (context : lib34.PaintingContext,offset : any) : any =>  {
    _paintAvatar(context,offset);
    if (properties.deleteIconShowing) {
        _paintChild(context,offset,properties.deleteIcon,properties.isEnabled);
    }
    _paintChild(context,offset,properties.label,properties.isEnabled);
};
export var _paintChild : (context : lib34.PaintingContext,offset : any,child : any,isEnabled : boolean) => any = (context : lib34.PaintingContext,offset : any,child : any,isEnabled : boolean) : any =>  {
    if (op(Op.EQUALS,child,null)) {
        return;
    }
    let disabledColorAlpha : number = properties._disabledColor.alpha;
    if (!properties.enableAnimation.isCompleted) {
        if (needsCompositing) {
            context.pushLayer(lib42.OpacityLayer({
                alpha : disabledColorAlpha}),(context : lib34.PaintingContext,offset : any) =>  {
                context.paintChild(child,op(Op.PLUS,_boxParentData(child).offset,offset));
            },offset);
        }else {
            let childRect : any = _boxRect(child).shift(offset);
            context.canvas.saveLayer(childRect.inflate(20.0),((_) : any =>  {
                {
                    _.color = properties._disabledColor;
                    return _;
                }
            })(Paint()));
            context.paintChild(child,op(Op.PLUS,_boxParentData(child).offset,offset));
            context.canvas.restore();
        }
    }else {
        context.paintChild(child,op(Op.PLUS,_boxParentData(child).offset,offset));
    }
};
export var _paintAvatar : (context : lib34.PaintingContext,offset : any) => any = (context : lib34.PaintingContext,offset : any) : any =>  {
    var paintWithOverlay : (context : lib34.PaintingContext,offset : any) => any = (context : lib34.PaintingContext,offset : any) : any =>  {
        context.paintChild(properties.avatar,op(Op.PLUS,_boxParentData(properties.avatar).offset,offset));
        _paintSelectionOverlay(context,offset);
    };
    if (properties.theme.showAvatar == false && properties.avatarDrawerAnimation.isDismissed) {
        return;
    }
    let disabledColor : any = properties._disabledColor;
    let disabledColorAlpha : number = disabledColor.alpha;
    if (needsCompositing) {
        context.pushLayer(lib42.OpacityLayer({
            alpha : disabledColorAlpha}),paintWithOverlay,offset);
    }else {
        if (disabledColorAlpha != 255) {
            context.canvas.saveLayer(_boxRect(properties.avatar).shift(offset).inflate(20.0),((_) : any =>  {
                {
                    _.color = disabledColor;
                    return _;
                }
            })(Paint()));
        }
        paintWithOverlay(context,offset);
        if (disabledColorAlpha != 255) {
            context.canvas.restore();
        }
    }
};
export var _paintSelectionOverlay : (context : lib34.PaintingContext,offset : any) => any = (context : lib34.PaintingContext,offset : any) : any =>  {
    if (properties.isDrawingCheckmark) {
        if (properties.theme.showAvatar) {
            let avatarRect : any = _boxRect(properties.avatar).shift(offset);
            let darkenPaint : any = ((_) : any =>  {
                {
                    _.color = properties.selectionScrimTween.evaluate(properties.checkmarkAnimation);
                    _.blendMode = BlendMode.srcATop;
                    return _;
                }
            })(Paint());
            let path : any = properties.avatarBorder.getOuterPath(avatarRect);
            context.canvas.drawPath(path,darkenPaint);
        }
        let checkSize : double = op(Op.TIMES,properties.avatar.size.height,0.75);
        let checkOffset : any = op(Op.PLUS,_boxParentData(properties.avatar).offset,Offset(op(Op.TIMES,properties.avatar.size.height,0.125),op(Op.TIMES,properties.avatar.size.height,0.125)));
        _paintCheck(context.canvas,op(Op.PLUS,offset,checkOffset),checkSize);
    }
};
export var _paintCheck : (canvas : any,origin : any,size : double) => any = (canvas : any,origin : any,size : double) : any =>  {
    let paintColor : any;
    switch (properties.theme.brightness) {
        case Brightness.light:
            paintColor = properties.theme.showAvatar ? lib41.Colors.white : lib41.Colors.black.withAlpha(properties._kCheckmarkAlpha);
            break;
        case Brightness.dark:
            paintColor = properties.theme.showAvatar ? lib41.Colors.black : lib41.Colors.white.withAlpha(properties._kCheckmarkAlpha);
            break;
    }
    let fadeTween : lib18.ColorTween = lib18.ColorTween({
        begin : lib41.Colors.transparent,end : paintColor});
    paintColor = op(Op.EQUALS,properties.checkmarkAnimation.status,lib14.AnimationStatus.reverse) ? fadeTween.evaluate(properties.checkmarkAnimation) : paintColor;
    let paint : any = ((_) : any =>  {
        {
            _.color = paintColor;
            _.style = PaintingStyle.stroke;
            _.strokeWidth = properties._kCheckmarkStrokeWidth * (properties.avatar != null ? op(Op.DIVIDE,properties.avatar.size.height,24.0) : 1.0);
            return _;
        }
    })(Paint());
    let t : double = op(Op.EQUALS,properties.checkmarkAnimation.status,lib14.AnimationStatus.reverse) ? 1.0 : properties.checkmarkAnimation.value;
    if (t == 0.0) {
        return;
    }
    /* TODO (AssertStatementImpl) : assert (t > 0.0 && t <= 1.0); */;
    let path : any = Path();
    let start : any = Offset(size * 0.15,size * 0.45);
    let mid : any = Offset(size * 0.4,size * 0.7);
    let end : any = Offset(size * 0.85,size * 0.25);
    if (t < 0.5) {
        let strokeT : double = t * 2.0;
        let drawMid : any = Offset.lerp(start,mid,strokeT);
        path.moveTo(op(Op.PLUS,origin.dx,start.dx),op(Op.PLUS,origin.dy,start.dy));
        path.lineTo(op(Op.PLUS,origin.dx,drawMid.dx),op(Op.PLUS,origin.dy,drawMid.dy));
    }else {
        let strokeT : double = (t - 0.5) * 2.0;
        let drawEnd : any = Offset.lerp(mid,end,strokeT);
        path.moveTo(op(Op.PLUS,origin.dx,start.dx),op(Op.PLUS,origin.dy,start.dy));
        path.lineTo(op(Op.PLUS,origin.dx,mid.dx),op(Op.PLUS,origin.dy,mid.dy));
        path.lineTo(op(Op.PLUS,origin.dx,drawEnd.dx),op(Op.PLUS,origin.dy,drawEnd.dy));
    }
    canvas.drawPath(path,paint);
};
export var performLayout : () => any = () : any =>  {
    let contentConstraints : lib33.BoxConstraints = constraints.loosen();
    properties.label.layout(contentConstraints,{
        parentUsesSize : true});
    let contentSize : double = math.max(properties._kChipHeight - properties.theme.padding.vertical + properties.theme.labelPadding.vertical,op(Op.PLUS,_boxSize(properties.label).height,properties.theme.labelPadding.vertical));
    let avatarSize : any = _layoutAvatar(contentConstraints,contentSize);
    let deleteIconSize : any = _layoutDeleteIcon(contentConstraints,contentSize);
    let labelSize : any = Size(_boxSize(properties.label).width,contentSize);
    labelSize = _layoutLabel(op(Op.PLUS,avatarSize.width,deleteIconSize.width),labelSize);
    let overallSize : any = Size(op(Op.PLUS,op(Op.PLUS,avatarSize.width,labelSize.width),deleteIconSize.width),contentSize);
    let left : double = 0.0;
    let right : double = overallSize.width;
    var centerLayout : (boxSize : any,x : double) => any = (boxSize : any,x : double) : any =>  {
        /* TODO (AssertStatementImpl) : assert (contentSize >= boxSize.height); */;
        let boxOffset : any;
        switch (properties.textDirection) {
            case TextDirection.rtl:
                boxOffset = Offset(x - boxSize.width,(contentSize - boxSize.height) / 2.0);
                break;
            case TextDirection.ltr:
                boxOffset = Offset(x,(contentSize - boxSize.height) / 2.0);
                break;
        }
        return boxOffset;
    };
    let avatarOffset : any = Offset.zero;
    let labelOffset : any = Offset.zero;
    let deleteIconOffset : any = Offset.zero;
    switch (properties.textDirection) {
        case TextDirection.rtl:
            let start : double = right;
            if (properties.theme.showCheckmark || properties.theme.showAvatar) {
                avatarOffset = centerLayout(avatarSize,start);
                start -= avatarSize.width;
            }
            labelOffset = centerLayout(labelSize,start);
            start -= labelSize.width;
            if (properties.deleteIconShowing) {
                properties.deleteButtonRect = Rect.fromLTWH(0.0,0.0,op(Op.PLUS,deleteIconSize.width,properties.theme.padding.right),op(Op.PLUS,overallSize.height,properties.theme.padding.vertical));
                deleteIconOffset = centerLayout(deleteIconSize,start);
            }else {
                properties.deleteButtonRect = Rect.zero;
            }
            start -= deleteIconSize.width;
            if (properties.theme.canTapBody) {
                properties.pressRect = Rect.fromLTWH(properties.deleteButtonRect.width,0.0,op(Op.PLUS,op(Op.MINUS,overallSize.width,properties.deleteButtonRect.width),properties.theme.padding.horizontal),op(Op.PLUS,overallSize.height,properties.theme.padding.vertical));
            }else {
                properties.pressRect = Rect.zero;
            }
            break;
        case TextDirection.ltr:
            let start : double = left;
            if (properties.theme.showCheckmark || properties.theme.showAvatar) {
                avatarOffset = centerLayout(avatarSize,start - _boxSize(properties.avatar).width + avatarSize.width);
                start += avatarSize.width;
            }
            labelOffset = centerLayout(labelSize,start);
            start += labelSize.width;
            if (properties.theme.canTapBody) {
                properties.pressRect = Rect.fromLTWH(0.0,0.0,properties.deleteIconShowing ? start + properties.theme.padding.left : op(Op.PLUS,overallSize.width,properties.theme.padding.horizontal),op(Op.PLUS,overallSize.height,properties.theme.padding.vertical));
            }else {
                properties.pressRect = Rect.zero;
            }
            start -= op(Op.MINUS,_boxSize(properties.deleteIcon).width,deleteIconSize.width);
            if (properties.deleteIconShowing) {
                deleteIconOffset = centerLayout(deleteIconSize,start);
                properties.deleteButtonRect = Rect.fromLTWH(start + properties.theme.padding.left,0.0,op(Op.PLUS,deleteIconSize.width,properties.theme.padding.right),op(Op.PLUS,overallSize.height,properties.theme.padding.vertical));
            }else {
                properties.deleteButtonRect = Rect.zero;
            }
            break;
    }
    labelOffset = op(Op.PLUS,labelOffset,Offset(0.0,op(Op.DIVIDE,(op(Op.MINUS,(op(Op.MINUS,labelSize.height,properties.theme.labelPadding.vertical)),_boxSize(properties.label).height)),2.0)));
    _boxParentData(properties.avatar).offset = op(Op.PLUS,properties.theme.padding.topLeft,avatarOffset);
    _boxParentData(properties.label).offset = op(Op.PLUS,op(Op.PLUS,properties.theme.padding.topLeft,labelOffset),properties.theme.labelPadding.topLeft);
    _boxParentData(properties.deleteIcon).offset = op(Op.PLUS,properties.theme.padding.topLeft,deleteIconOffset);
    let paddedSize : any = Size(op(Op.PLUS,overallSize.width,properties.theme.padding.horizontal),op(Op.PLUS,overallSize.height,properties.theme.padding.vertical));
    lib37.properties.size = constraints.constrain(paddedSize);
    /* TODO (AssertStatementImpl) : assert (size.height == constraints.constrainHeight(paddedSize.height), "Constrained height ${size.height} doesn't match expected height " '${constraints.constrainWidth(paddedSize.height)}'); */;
    /* TODO (AssertStatementImpl) : assert (size.width == constraints.constrainWidth(paddedSize.width), "Constrained width ${size.width} doesn't match expected width " '${constraints.constrainWidth(paddedSize.width)}'); */;
};
export namespace _ChipRenderTheme {
    export type Constructors = '_ChipRenderTheme';
    export type Interface = Omit<_ChipRenderTheme, Constructors>;
}
@DartClass
export class _ChipRenderTheme {
    constructor(_namedArguments? : {avatar? : lib5.Widget,label? : lib5.Widget,deleteIcon? : lib5.Widget,brightness? : any,padding? : lib8.EdgeInsets,labelPadding? : lib8.EdgeInsets,showAvatar? : boolean,showCheckmark? : boolean,canTapBody? : boolean}) {
    }
    @defaultConstructor
    _ChipRenderTheme(_namedArguments? : {avatar? : lib5.Widget,label? : lib5.Widget,deleteIcon? : lib5.Widget,brightness? : any,padding? : lib8.EdgeInsets,labelPadding? : lib8.EdgeInsets,showAvatar? : boolean,showCheckmark? : boolean,canTapBody? : boolean}) {
        let {avatar,label,deleteIcon,brightness,padding,labelPadding,showAvatar,showCheckmark,canTapBody} = Object.assign({
        }, _namedArguments );
        this.avatar = avatar;
        this.label = label;
        this.deleteIcon = deleteIcon;
        this.brightness = brightness;
        this.padding = padding;
        this.labelPadding = labelPadding;
        this.showAvatar = showAvatar;
        this.showCheckmark = showCheckmark;
        this.canTapBody = canTapBody;
    }
    avatar : lib5.Widget;

    label : lib5.Widget;

    deleteIcon : lib5.Widget;

    brightness : any;

    padding : lib8.EdgeInsets;

    labelPadding : lib8.EdgeInsets;

    showAvatar : boolean;

    showCheckmark : boolean;

    canTapBody : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) {
            return true;
        }
        if (other.runtimeType != this.runtimeType) {
            return false;
        }
        let typedOther : _ChipRenderTheme = other;
        return op(Op.EQUALS,typedOther.avatar,this.avatar) && op(Op.EQUALS,typedOther.label,this.label) && op(Op.EQUALS,typedOther.deleteIcon,this.deleteIcon) && op(Op.EQUALS,typedOther.brightness,this.brightness) && op(Op.EQUALS,typedOther.padding,this.padding) && op(Op.EQUALS,typedOther.labelPadding,this.labelPadding) && typedOther.showAvatar == this.showAvatar && typedOther.showCheckmark == this.showCheckmark && typedOther.canTapBody == this.canTapBody;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.avatar,this.label,this.deleteIcon,this.brightness,this.padding,this.labelPadding,this.showAvatar,this.showCheckmark,this.canTapBody);
    }
}

export namespace _RenderChipElement {
    export type Constructors = lib5.RenderObjectElement.Constructors | '_RenderChipElement';
    export type Interface = Omit<_RenderChipElement, Constructors>;
}
@DartClass
export class _RenderChipElement extends lib5.RenderObjectElement {
    constructor(chip : _ChipRenderWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderChipElement(chip : _ChipRenderWidget) {
        this.slotToChild = new core.DartMap.literal([
        ]);
        this.childToSlot = new core.DartMap.literal([
        ]);
        super.RenderObjectElement(chip);
    }
    slotToChild : core.DartMap<_ChipSlot,lib5.Element>;

    childToSlot : core.DartMap<lib5.Element,_ChipSlot>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : _ChipRenderWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : _RenderChip {
        return super.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib5.Element) => any) : any {
        this.slotToChild.values.forEach(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib5.Element) : any {
        /* TODO (AssertStatementImpl) : assert (slotToChild.values.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (childToSlot.keys.contains(child)); */;
        let slot : _ChipSlot = this.childToSlot.get(child);
        this.childToSlot.remove(child);
        this.slotToChild.remove(slot);
    }
    _mountChild(widget : lib5.Widget,slot : _ChipSlot) : any {
        let oldChild : lib5.Element = this.slotToChild.get(slot);
        let newChild : lib5.Element = this.updateChild(oldChild,widget,slot);
        if (oldChild != null) {
            this.slotToChild.remove(slot);
            this.childToSlot.remove(oldChild);
        }
        if (newChild != null) {
            this.slotToChild.set(slot,newChild);
            this.childToSlot.set(newChild,slot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib5.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._mountChild(this.widget.theme.avatar,_ChipSlot.avatar);
        this._mountChild(this.widget.theme.deleteIcon,_ChipSlot.deleteIcon);
        this._mountChild(this.widget.theme.label,_ChipSlot.label);
    }
    _updateChild(widget : lib5.Widget,slot : _ChipSlot) : any {
        let oldChild : lib5.Element = this.slotToChild.get(slot);
        let newChild : lib5.Element = this.updateChild(oldChild,widget,slot);
        if (oldChild != null) {
            this.childToSlot.remove(oldChild);
            this.slotToChild.remove(slot);
        }
        if (newChild != null) {
            this.slotToChild.set(slot,newChild);
            this.childToSlot.set(newChild,slot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : _ChipRenderWidget) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this._updateChild(this.widget.theme.label,_ChipSlot.label);
        this._updateChild(this.widget.theme.avatar,_ChipSlot.avatar);
        this._updateChild(this.widget.theme.deleteIcon,_ChipSlot.deleteIcon);
    }
    _updateRenderObject(child : lib34.RenderObject,slot : _ChipSlot) : any {
        switch (slot) {
            case _ChipSlot.avatar:
                this.renderObject.avatar = child;
                break;
            case _ChipSlot.label:
                this.renderObject.label = child;
                break;
            case _ChipSlot.deleteIcon:
                this.renderObject.deleteIcon = child;
                break;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib34.RenderObject,slotValue : any) : any {
        /* TODO (AssertStatementImpl) : assert (child is RenderBox); */;
        /* TODO (AssertStatementImpl) : assert (slotValue is _ChipSlot); */;
        let slot : _ChipSlot = slotValue;
        this._updateRenderObject(child,slot);
        /* TODO (AssertStatementImpl) : assert (renderObject.childToSlot.keys.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.slotToChild.keys.contains(slot)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib34.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (child is RenderBox); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.childToSlot.keys.contains(child)); */;
        this._updateRenderObject(null,op(Op.INDEX,this.renderObject.childToSlot,child));
        /* TODO (AssertStatementImpl) : assert (!renderObject.childToSlot.keys.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (!renderObject.slotToChild.keys.contains(slot)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib34.RenderObject,slotValue : any) : any {
        /* TODO (AssertStatementImpl) : assert (false, 'not reachable'); */;
    }
}

export enum _ChipSlot {
    label,
    avatar,
    deleteIcon
}

export namespace _RenderChip {
    export type Constructors = '_RenderChip' | 'addListener' | 'addListener' | 'addListener' | 'addListener';
    export type Interface = Omit<_RenderChip, Constructors>;
}
@DartClass
export class _RenderChip extends any {
    constructor(_namedArguments? : {theme? : _ChipRenderTheme,textDirection? : any,value? : any,isEnabled? : any,checkmarkAnimation? : any,avatarDrawerAnimation? : any,deleteDrawerAnimation? : any,enableAnimation? : any,avatarBorder? : any}) {
    }
    @defaultConstructor
    _RenderChip(_namedArguments? : {theme? : _ChipRenderTheme,textDirection? : any,value? : any,isEnabled? : any,checkmarkAnimation? : any,avatarDrawerAnimation? : any,deleteDrawerAnimation? : any,enableAnimation? : any,avatarBorder? : any}) {
        let {theme,textDirection,value,isEnabled,checkmarkAnimation,avatarDrawerAnimation,deleteDrawerAnimation,enableAnimation,avatarBorder} = Object.assign({
        }, _namedArguments );
        this._theme = properties.theme;
        this._textDirection = properties.textDirection;
        this.assert = assert;
        this.value = value;
        this.isEnabled = isEnabled;
        this.checkmarkAnimation = checkmarkAnimation;
        this.avatarDrawerAnimation = avatarDrawerAnimation;
        this.deleteDrawerAnimation = deleteDrawerAnimation;
        this.enableAnimation = enableAnimation;
        this.avatarBorder = avatarBorder;
    }
     : any;

     : any;

    _theme;
    _textDirection;

    @namedConstructor
    addListener(markNeedsPaint : any) {
        this._theme = properties.theme;
        this._textDirection = properties.textDirection;
    }
    static addListener : new(markNeedsPaint : any) => _RenderChip;

    @namedConstructor
    addListener(markNeedsLayout : any) {
        this._theme = properties.theme;
        this._textDirection = properties.textDirection;
    }
    static addListener : new(markNeedsLayout : any) => _RenderChip;

    @namedConstructor
    addListener(markNeedsLayout : any) {
        this._theme = properties.theme;
        this._textDirection = properties.textDirection;
    }
    static addListener : new(markNeedsLayout : any) => _RenderChip;

    @namedConstructor
    addListener(markNeedsPaint : any) {
        this._theme = properties.theme;
        this._textDirection = properties.textDirection;
    }
    static addListener : new(markNeedsPaint : any) => _RenderChip;

}

export namespace _ChipRenderWidget {
    export type Constructors = lib5.RenderObjectWidget.Constructors | '_ChipRenderWidget';
    export type Interface = Omit<_ChipRenderWidget, Constructors>;
}
@DartClass
export class _ChipRenderWidget extends lib5.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib10.Key,theme? : _ChipRenderTheme,value? : boolean,isEnabled? : boolean,checkmarkAnimation? : lib14.Animation<double>,avatarDrawerAnimation? : lib14.Animation<double>,deleteDrawerAnimation? : lib14.Animation<double>,enableAnimation? : lib14.Animation<double>,avatarBorder? : lib7.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ChipRenderWidget(_namedArguments? : {key? : lib10.Key,theme? : _ChipRenderTheme,value? : boolean,isEnabled? : boolean,checkmarkAnimation? : lib14.Animation<double>,avatarDrawerAnimation? : lib14.Animation<double>,deleteDrawerAnimation? : lib14.Animation<double>,enableAnimation? : lib14.Animation<double>,avatarBorder? : lib7.ShapeBorder}) {
        let {key,theme,value,isEnabled,checkmarkAnimation,avatarDrawerAnimation,deleteDrawerAnimation,enableAnimation,avatarBorder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.theme = theme;
        this.value = value;
        this.isEnabled = isEnabled;
        this.checkmarkAnimation = checkmarkAnimation;
        this.avatarDrawerAnimation = avatarDrawerAnimation;
        this.deleteDrawerAnimation = deleteDrawerAnimation;
        this.enableAnimation = enableAnimation;
        this.avatarBorder = avatarBorder;
    }
     : any;

     : any;

     : any;

    theme : _ChipRenderTheme;

    value : boolean;

    isEnabled : boolean;

    checkmarkAnimation : lib14.Animation<double>;

    avatarDrawerAnimation : lib14.Animation<double>;

    deleteDrawerAnimation : lib14.Animation<double>;

    enableAnimation : lib14.Animation<double>;

    avatarBorder : lib7.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _RenderChipElement {
        return _RenderChipElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib5.BuildContext,renderObject : _RenderChip) : any {
        ((_) : _RenderChip =>  {
            {
                _.theme = this.theme;
                _.textDirection = lib24.Directionality.of(context);
                _.value = this.value;
                _.isEnabled = this.isEnabled;
                _.checkmarkAnimation = this.checkmarkAnimation;
                _.avatarDrawerAnimation = this.avatarDrawerAnimation;
                _.deleteDrawerAnimation = this.deleteDrawerAnimation;
                _.enableAnimation = this.enableAnimation;
                _.avatarBorder = this.avatarBorder;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib5.BuildContext) : lib34.RenderObject {
        return _RenderChip({
            theme : this.theme,textDirection : lib24.Directionality.of(context),value : this.value,isEnabled : this.isEnabled,checkmarkAnimation : this.checkmarkAnimation,avatarDrawerAnimation : this.avatarDrawerAnimation,deleteDrawerAnimation : this.deleteDrawerAnimation,enableAnimation : this.enableAnimation,avatarBorder : this.avatarBorder});
    }
}

export namespace _RenderChipRedirectingHitDetection {
    export type Constructors = lib35.RenderConstrainedBox.Constructors | '_RenderChipRedirectingHitDetection';
    export type Interface = Omit<_RenderChipRedirectingHitDetection, Constructors>;
}
@DartClass
export class _RenderChipRedirectingHitDetection extends lib35.RenderConstrainedBox {
    constructor(additionalConstraints : lib33.BoxConstraints) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderChipRedirectingHitDetection(additionalConstraints : lib33.BoxConstraints) {
        super.RenderConstrainedBox({
            additionalConstraints : additionalConstraints});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib36.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (!lib37.properties.size.contains(position)) return false;
        return lib38.properties.child.hitTest(result,{
            position : Offset(position.dx,op(Op.DIVIDE,lib37.properties.size.height,2))});
    }
}

export namespace _ChipRedirectingHitDetectionWidget {
    export type Constructors = lib5.SingleChildRenderObjectWidget.Constructors | '_ChipRedirectingHitDetectionWidget';
    export type Interface = Omit<_ChipRedirectingHitDetectionWidget, Constructors>;
}
@DartClass
export class _ChipRedirectingHitDetectionWidget extends lib5.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib10.Key,child? : lib5.Widget,constraints? : lib33.BoxConstraints}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ChipRedirectingHitDetectionWidget(_namedArguments? : {key? : lib10.Key,child? : lib5.Widget,constraints? : lib33.BoxConstraints}) {
        let {key,child,constraints} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.constraints = constraints;
    }
    constraints : lib33.BoxConstraints;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib5.BuildContext) : lib34.RenderObject {
        return _RenderChipRedirectingHitDetection(this.constraints);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib5.BuildContext,renderObject : _RenderChipRedirectingHitDetection) : any {
        renderObject.additionalConstraints = this.constraints;
    }
}

export namespace _RawChipState {
    export type Constructors = '_RawChipState';
    export type Interface = Omit<_RawChipState, Constructors>;
}
@DartClass
@With(any)
export class _RawChipState extends any implements any.Interface {
    private static __$pressedAnimationDuration : core.DartDuration;
    static get pressedAnimationDuration() : core.DartDuration { 
        if (this.__$pressedAnimationDuration===undefined) {
            this.__$pressedAnimationDuration = core.DartDuration({
                milliseconds : 75});
        }
        return this.__$pressedAnimationDuration;
    }

    selectController : lib13.AnimationController;

    avatarDrawerController : lib13.AnimationController;

    deleteDrawerController : lib13.AnimationController;

    enableController : lib13.AnimationController;

    checkmarkAnimation : lib14.Animation<double>;

    avatarDrawerAnimation : lib14.Animation<double>;

    deleteDrawerAnimation : lib14.Animation<double>;

    enableAnimation : lib14.Animation<double>;

    selectionFade : lib14.Animation<double>;

    get hasDeleteButton() : boolean {
        return widget.onDeleted != null;
    }
    get hasAvatar() : boolean {
        return widget.avatar != null;
    }
    get canTap() : boolean {
        return widget.isEnabled && widget.tapEnabled && (widget.onPressed != null || widget.onSelected != null);
    }
    _isTapping : boolean;

    get isTapping() : boolean {
        return !this.canTap ? false : this._isTapping;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        /* TODO (AssertStatementImpl) : assert (widget.onSelected == null || widget.onPressed == null); */;
        super.initState();
        this.selectController = lib13.AnimationController({
            duration : properties._kSelectDuration,value : op(Op.EQUALS,widget.selected,true) ? 1.0 : 0.0,vsync : this});
        this.selectionFade = lib16.CurvedAnimation({
            parent : this.selectController,curve : lib15.Curves.fastOutSlowIn});
        this.avatarDrawerController = lib13.AnimationController({
            duration : properties._kDrawerDuration,value : this.hasAvatar || op(Op.EQUALS,widget.selected,true) ? 1.0 : 0.0,vsync : this});
        this.deleteDrawerController = lib13.AnimationController({
            duration : properties._kDrawerDuration,value : this.hasDeleteButton ? 1.0 : 0.0,vsync : this});
        this.enableController = lib13.AnimationController({
            duration : properties._kDisableDuration,value : widget.isEnabled ? 1.0 : 0.0,vsync : this});
        let checkmarkPercentage : double = properties._kCheckmarkDuration.inMilliseconds / properties._kSelectDuration.inMilliseconds;
        let checkmarkReversePercentage : double = properties._kCheckmarkReverseDuration.inMilliseconds / properties._kSelectDuration.inMilliseconds;
        let avatarDrawerReversePercentage : double = properties._kReverseDrawerDuration.inMilliseconds / properties._kSelectDuration.inMilliseconds;
        this.checkmarkAnimation = lib16.CurvedAnimation({
            parent : this.selectController,curve : lib15.Interval(1.0 - checkmarkPercentage,1.0,{
                curve : lib15.Curves.fastOutSlowIn}),reverseCurve : lib15.Interval(1.0 - checkmarkReversePercentage,1.0,{
                curve : lib15.Curves.fastOutSlowIn})});
        this.deleteDrawerAnimation = lib16.CurvedAnimation({
            parent : this.deleteDrawerController,curve : lib15.Curves.fastOutSlowIn});
        this.avatarDrawerAnimation = lib16.CurvedAnimation({
            parent : this.avatarDrawerController,curve : lib15.Curves.fastOutSlowIn,reverseCurve : lib15.Interval(1.0 - avatarDrawerReversePercentage,1.0,{
                curve : lib15.Curves.fastOutSlowIn})});
        this.enableAnimation = lib16.CurvedAnimation({
            parent : this.enableController,curve : lib15.Curves.fastOutSlowIn});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.selectController.dispose();
        this.avatarDrawerController.dispose();
        this.deleteDrawerController.dispose();
        this.enableController.dispose();
        super.dispose();
    }
    _handleTapDown(details : lib17.TapDownDetails) : any {
        if (!this.canTap) {
            return;
        }
        setState(() =>  {
            this._isTapping = true;
        });
    }
    _handleTapCancel() : any {
        if (!this.canTap) {
            return;
        }
        setState(() =>  {
            this._isTapping = false;
        });
    }
    _handleTap() : any {
        if (!this.canTap) {
            return;
        }
        setState(() =>  {
            this._isTapping = false;
        });
        ((_722_)=>(!!_722_)?_722_.call(!widget.selected):null)(widget.onSelected);
        ((_723_)=>(!!_723_)?_723_.call():null)(widget.onPressed);
    }
    getBackgroundColor(theme : lib12.ChipThemeData) : any {
        let backgroundTween : lib18.ColorTween = lib18.ColorTween({
            begin : (widget.disabledColor || theme.disabledColor),end : (widget.backgroundColor || theme.backgroundColor)});
        let selectTween : lib18.ColorTween = lib18.ColorTween({
            begin : backgroundTween.evaluate(this.enableController),end : (widget.selectedColor || theme.selectedColor)});
        return selectTween.evaluate(this.selectionFade);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : RawChip) : any {
        super.didUpdateWidget(oldWidget);
        if (oldWidget.isEnabled != widget.isEnabled) {
            setState(() =>  {
                if (widget.isEnabled) {
                    this.enableController.forward();
                }else {
                    this.enableController.reverse();
                }
            });
        }
        if (oldWidget.avatar != widget.avatar || oldWidget.selected != widget.selected) {
            setState(() =>  {
                if (this.hasAvatar || op(Op.EQUALS,widget.selected,true)) {
                    this.avatarDrawerController.forward();
                }else {
                    this.avatarDrawerController.reverse();
                }
            });
        }
        if (oldWidget.selected != widget.selected) {
            setState(() =>  {
                if (op(Op.EQUALS,widget.selected,true)) {
                    this.selectController.forward();
                }else {
                    this.selectController.reverse();
                }
            });
        }
        if (oldWidget.onDeleted != widget.onDeleted) {
            setState(() =>  {
                if (this.hasDeleteButton) {
                    this.deleteDrawerController.forward();
                }else {
                    this.deleteDrawerController.reverse();
                }
            });
        }
    }
    _wrapWithTooltip(tooltip : string,callback : any,child : lib5.Widget) : lib5.Widget {
        if (op(Op.EQUALS,child,null) || op(Op.EQUALS,callback,null) || tooltip == null) {
            return child;
        }
        return lib19.Tooltip({
            message : tooltip,child : child});
    }
    _buildDeleteIcon(context : lib5.BuildContext,theme : lib9.ThemeData,chipTheme : lib12.ChipThemeData) : lib5.Widget {
        if (!this.hasDeleteButton) {
            return null;
        }
        return this._wrapWithTooltip((widget.deleteButtonTooltipMessage || ((t)=>(!!t)?t.deleteButtonTooltip:null)(lib20.MaterialLocalizations.of(context))),widget.onDeleted,lib22.InkResponse({
            onTap : widget.isEnabled ? widget.onDeleted : null,child : lib21.IconTheme({
                data : theme.iconTheme.copyWith({
                    color : (widget.deleteIconColor || chipTheme.deleteIconColor)}),child : widget.deleteIcon})}));
    }
    private static __$_defaultElevation : double;
    static get _defaultElevation() : double { 
        if (this.__$_defaultElevation===undefined) {
            this.__$_defaultElevation = 0.0;
        }
        return this.__$_defaultElevation;
    }

    private static __$_defaultPressElevation : double;
    static get _defaultPressElevation() : double { 
        if (this.__$_defaultPressElevation===undefined) {
            this.__$_defaultPressElevation = 8.0;
        }
        return this.__$_defaultPressElevation;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let theme : lib9.ThemeData = lib23.Theme.of(context);
        let chipTheme : lib12.ChipThemeData = lib12.ChipTheme.of(context);
        let textDirection : any = lib24.Directionality.of(context);
        let shape : lib7.ShapeBorder = (widget.shape || chipTheme.shape);
        let elevation : double = ((widget.elevation || chipTheme.elevation) || _RawChipState._defaultElevation);
        let pressElevation : double = ((widget.pressElevation || chipTheme.pressElevation) || _RawChipState._defaultPressElevation);
        let result : lib5.Widget = lib32.Material({
            elevation : this.isTapping ? pressElevation : elevation,animationDuration : _RawChipState.pressedAnimationDuration,shape : shape,clipBehavior : widget.clipBehavior,child : lib22.InkResponse({
                onTap : this.canTap ? this._handleTap.bind(this) : null,onTapDown : this.canTap ? this._handleTapDown.bind(this) : null,onTapCancel : this.canTap ? this._handleTapCancel.bind(this) : null,child : lib31.AnimatedBuilder({
                    animation : lib25.Listenable.merge(new core.DartList.literal<lib25.Listenable>(this.selectController,this.enableController)),builder : (context : lib5.BuildContext,child : lib5.Widget) =>  {
                        return lib27.Container({
                            decoration : lib26.ShapeDecoration({
                                shape : shape,color : this.getBackgroundColor(chipTheme)}),child : child});
                    },child : this._wrapWithTooltip(widget.tooltip,widget.onPressed,_ChipRenderWidget({
                        theme : _ChipRenderTheme({
                            label : lib29.DefaultTextStyle({
                                overflow : lib28.TextOverflow.fade,textAlign : TextAlign.start,maxLines : 1,softWrap : false,style : (widget.labelStyle || chipTheme.labelStyle),child : widget.label}),avatar : lib30.AnimatedSwitcher({
                                child : widget.avatar,duration : properties._kDrawerDuration,switchInCurve : lib15.Curves.fastOutSlowIn}),deleteIcon : lib30.AnimatedSwitcher({
                                child : this._buildDeleteIcon(context,theme,chipTheme),duration : properties._kDrawerDuration,switchInCurve : lib15.Curves.fastOutSlowIn}),brightness : chipTheme.brightness,padding : ((widget.padding || chipTheme.padding)).resolve(textDirection),labelPadding : ((widget.labelPadding || chipTheme.labelPadding)).resolve(textDirection),showAvatar : this.hasAvatar,showCheckmark : widget.showCheckmark,canTapBody : this.canTap}),value : widget.selected,checkmarkAnimation : this.checkmarkAnimation,enableAnimation : this.enableAnimation,avatarDrawerAnimation : this.avatarDrawerAnimation,deleteDrawerAnimation : this.deleteDrawerAnimation,isEnabled : widget.isEnabled,avatarBorder : widget.avatarBorder}))})})});
        let constraints : lib33.BoxConstraints;
        switch ((widget.materialTapTargetSize || theme.materialTapTargetSize)) {
            case lib9.MaterialTapTargetSize.padded:
                constraints = new lib33.BoxConstraints({
                    minHeight : 48.0});
                break;
            case lib9.MaterialTapTargetSize.shrinkWrap:
                constraints = new lib33.BoxConstraints();
                break;
        }
        result = _ChipRedirectingHitDetectionWidget({
            constraints : constraints,child : lib24.Center({
                child : result,widthFactor : 1.0,heightFactor : 1.0})});
        return lib24.Semantics({
            container : true,selected : widget.selected,enabled : this.canTap ? widget.isEnabled : null,child : result});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RawChipState() {
        this._isTapping = false;
    }
}

export namespace RawChip {
    export type Constructors = lib5.StatefulWidget.Constructors | 'RawChip';
    export type Interface = Omit<RawChip, Constructors>;
}
@DartClass
@Implements(ChipAttributes,DeletableChipAttributes,SelectableChipAttributes,DisabledChipAttributes,TappableChipAttributes)
export class RawChip extends lib5.StatefulWidget implements ChipAttributes.Interface,DeletableChipAttributes.Interface,SelectableChipAttributes.Interface,DisabledChipAttributes.Interface,TappableChipAttributes.Interface {
    constructor(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,padding? : lib8.EdgeInsetsGeometry,labelPadding? : lib8.EdgeInsetsGeometry,deleteIcon? : lib5.Widget,onDeleted? : any,deleteIconColor? : any,deleteButtonTooltipMessage? : string,onPressed? : any,onSelected? : <T>(value : boolean) => void,pressElevation? : double,tapEnabled? : boolean,selected? : boolean,showCheckmark? : boolean,isEnabled? : boolean,disabledColor? : any,selectedColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib11.CircleBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawChip(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,padding? : lib8.EdgeInsetsGeometry,labelPadding? : lib8.EdgeInsetsGeometry,deleteIcon? : lib5.Widget,onDeleted? : any,deleteIconColor? : any,deleteButtonTooltipMessage? : string,onPressed? : any,onSelected? : <T>(value : boolean) => void,pressElevation? : double,tapEnabled? : boolean,selected? : boolean,showCheckmark? : boolean,isEnabled? : boolean,disabledColor? : any,selectedColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib11.CircleBorder}) {
        let {key,avatar,label,labelStyle,padding,labelPadding,deleteIcon,onDeleted,deleteIconColor,deleteButtonTooltipMessage,onPressed,onSelected,pressElevation,tapEnabled,selected,showCheckmark,isEnabled,disabledColor,selectedColor,tooltip,shape,clipBehavior,backgroundColor,materialTapTargetSize,elevation,avatarBorder} = Object.assign({
            "tapEnabled" : true,
            "showCheckmark" : true,
            "isEnabled" : true,
            "clipBehavior" : Clip.none,
            "avatarBorder" : new lib11.CircleBorder()}, _namedArguments );
        this.deleteIcon = (this.deleteIcon || properties._kDefaultDeleteIcon);
        this.assert = assert;
        this.avatar = avatar;
        this.label = label;
        this.labelStyle = labelStyle;
        this.padding = padding;
        this.labelPadding = labelPadding;
        this.onDeleted = onDeleted;
        this.deleteIconColor = deleteIconColor;
        this.deleteButtonTooltipMessage = deleteButtonTooltipMessage;
        this.onPressed = onPressed;
        this.onSelected = onSelected;
        this.pressElevation = pressElevation;
        this.tapEnabled = tapEnabled;
        this.selected = selected;
        this.showCheckmark = showCheckmark;
        this.isEnabled = isEnabled;
        this.disabledColor = disabledColor;
        this.selectedColor = selectedColor;
        this.tooltip = tooltip;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.backgroundColor = backgroundColor;
        this.materialTapTargetSize = materialTapTargetSize;
        this.elevation = elevation;
        this.avatarBorder = avatarBorder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    deleteIcon;
    super;

     : any;

     : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatar : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    label : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelStyle : lib6.TextStyle;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelPadding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteIcon : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onDeleted : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteIconColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteButtonTooltipMessage : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onSelected : <T>(value : boolean) => void;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onPressed : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pressElevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selected : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEnabled : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    disabledColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectedColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tooltip : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shape : lib7.ShapeBorder;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clipBehavior : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    backgroundColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    padding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    materialTapTargetSize : lib9.MaterialTapTargetSize;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatarBorder : lib11.CircleBorder;

    showCheckmark : boolean;

    tapEnabled : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _RawChipState {
        return _RawChipState();
    }
}

export namespace ActionChip {
    export type Constructors = lib5.StatelessWidget.Constructors | 'ActionChip';
    export type Interface = Omit<ActionChip, Constructors>;
}
@DartClass
@Implements(ChipAttributes,TappableChipAttributes)
export class ActionChip extends lib5.StatelessWidget implements ChipAttributes.Interface,TappableChipAttributes.Interface {
    constructor(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,onPressed? : any,pressElevation? : double,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ActionChip(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,onPressed? : any,pressElevation? : double,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double}) {
        let {key,avatar,label,labelStyle,labelPadding,onPressed,pressElevation,tooltip,shape,clipBehavior,backgroundColor,padding,materialTapTargetSize,elevation} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        this.assert = assert;
        this.avatar = avatar;
        this.label = label;
        this.labelStyle = labelStyle;
        this.labelPadding = labelPadding;
        this.onPressed = onPressed;
        this.pressElevation = pressElevation;
        this.tooltip = tooltip;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.materialTapTargetSize = materialTapTargetSize;
        this.elevation = elevation;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatar : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    label : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelStyle : lib6.TextStyle;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelPadding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onPressed : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pressElevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tooltip : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shape : lib7.ShapeBorder;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clipBehavior : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    backgroundColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    padding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    materialTapTargetSize : lib9.MaterialTapTargetSize;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elevation : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        return RawChip({
            avatar : this.avatar,label : this.label,onPressed : this.onPressed,pressElevation : this.pressElevation,tooltip : this.tooltip,labelStyle : this.labelStyle,backgroundColor : this.backgroundColor,shape : this.shape,clipBehavior : this.clipBehavior,padding : this.padding,labelPadding : this.labelPadding,isEnabled : true,materialTapTargetSize : this.materialTapTargetSize,elevation : this.elevation});
    }
}

export namespace FilterChip {
    export type Constructors = lib5.StatelessWidget.Constructors | 'FilterChip';
    export type Interface = Omit<FilterChip, Constructors>;
}
@DartClass
@Implements(ChipAttributes,SelectableChipAttributes,DisabledChipAttributes)
export class FilterChip extends lib5.StatelessWidget implements ChipAttributes.Interface,SelectableChipAttributes.Interface,DisabledChipAttributes.Interface {
    constructor(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,selected? : boolean,onSelected? : <T>(value : boolean) => void,pressElevation? : double,disabledColor? : any,selectedColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib7.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FilterChip(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,selected? : boolean,onSelected? : <T>(value : boolean) => void,pressElevation? : double,disabledColor? : any,selectedColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib7.ShapeBorder}) {
        let {key,avatar,label,labelStyle,labelPadding,selected,onSelected,pressElevation,disabledColor,selectedColor,tooltip,shape,clipBehavior,backgroundColor,padding,materialTapTargetSize,elevation,avatarBorder} = Object.assign({
            "selected" : false,
            "clipBehavior" : Clip.none,
            "avatarBorder" : new lib11.CircleBorder()}, _namedArguments );
        this.assert = assert;
        this.avatar = avatar;
        this.label = label;
        this.labelStyle = labelStyle;
        this.labelPadding = labelPadding;
        this.selected = selected;
        this.onSelected = onSelected;
        this.pressElevation = pressElevation;
        this.disabledColor = disabledColor;
        this.selectedColor = selectedColor;
        this.tooltip = tooltip;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.materialTapTargetSize = materialTapTargetSize;
        this.elevation = elevation;
        this.avatarBorder = avatarBorder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatar : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    label : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelStyle : lib6.TextStyle;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelPadding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selected : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onSelected : <T>(value : boolean) => void;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pressElevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    disabledColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectedColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tooltip : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shape : lib7.ShapeBorder;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clipBehavior : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    backgroundColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    padding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    materialTapTargetSize : lib9.MaterialTapTargetSize;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatarBorder : lib7.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnabled() : boolean {
        return this.onSelected != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        return RawChip({
            avatar : this.avatar,label : this.label,labelStyle : this.labelStyle,labelPadding : this.labelPadding,onSelected : this.onSelected,pressElevation : this.pressElevation,selected : this.selected,tooltip : this.tooltip,shape : this.shape,clipBehavior : this.clipBehavior,backgroundColor : this.backgroundColor,disabledColor : this.disabledColor,selectedColor : this.selectedColor,padding : this.padding,isEnabled : this.isEnabled,materialTapTargetSize : this.materialTapTargetSize,elevation : this.elevation,avatarBorder : this.avatarBorder});
    }
}

export namespace ChoiceChip {
    export type Constructors = lib5.StatelessWidget.Constructors | 'ChoiceChip';
    export type Interface = Omit<ChoiceChip, Constructors>;
}
@DartClass
@Implements(ChipAttributes,SelectableChipAttributes,DisabledChipAttributes)
export class ChoiceChip extends lib5.StatelessWidget implements ChipAttributes.Interface,SelectableChipAttributes.Interface,DisabledChipAttributes.Interface {
    constructor(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,onSelected? : <T>(value : boolean) => void,pressElevation? : double,selected? : boolean,selectedColor? : any,disabledColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib7.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ChoiceChip(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,onSelected? : <T>(value : boolean) => void,pressElevation? : double,selected? : boolean,selectedColor? : any,disabledColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib7.ShapeBorder}) {
        let {key,avatar,label,labelStyle,labelPadding,onSelected,pressElevation,selected,selectedColor,disabledColor,tooltip,shape,clipBehavior,backgroundColor,padding,materialTapTargetSize,elevation,avatarBorder} = Object.assign({
            "clipBehavior" : Clip.none,
            "avatarBorder" : new lib11.CircleBorder()}, _namedArguments );
        this.assert = assert;
        this.avatar = avatar;
        this.label = label;
        this.labelStyle = labelStyle;
        this.labelPadding = labelPadding;
        this.onSelected = onSelected;
        this.pressElevation = pressElevation;
        this.selected = selected;
        this.selectedColor = selectedColor;
        this.disabledColor = disabledColor;
        this.tooltip = tooltip;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.materialTapTargetSize = materialTapTargetSize;
        this.elevation = elevation;
        this.avatarBorder = avatarBorder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatar : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    label : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelStyle : lib6.TextStyle;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelPadding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onSelected : <T>(value : boolean) => void;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pressElevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selected : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    disabledColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectedColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tooltip : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shape : lib7.ShapeBorder;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clipBehavior : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    backgroundColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    padding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    materialTapTargetSize : lib9.MaterialTapTargetSize;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatarBorder : lib7.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEnabled() : boolean {
        return this.onSelected != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        let chipTheme : lib12.ChipThemeData = lib12.ChipTheme.of(context);
        return RawChip({
            avatar : this.avatar,label : this.label,labelStyle : (this.labelStyle || (this.selected ? chipTheme.secondaryLabelStyle : null)),labelPadding : this.labelPadding,onSelected : this.onSelected,pressElevation : this.pressElevation,selected : this.selected,showCheckmark : false,onDeleted : null,tooltip : this.tooltip,shape : this.shape,clipBehavior : this.clipBehavior,disabledColor : this.disabledColor,selectedColor : (this.selectedColor || chipTheme.secondarySelectedColor),backgroundColor : this.backgroundColor,padding : this.padding,isEnabled : this.isEnabled,materialTapTargetSize : this.materialTapTargetSize,elevation : this.elevation,avatarBorder : this.avatarBorder});
    }
}

export namespace InputChip {
    export type Constructors = lib5.StatelessWidget.Constructors | 'InputChip';
    export type Interface = Omit<InputChip, Constructors>;
}
@DartClass
@Implements(ChipAttributes,DeletableChipAttributes,SelectableChipAttributes,DisabledChipAttributes,TappableChipAttributes)
export class InputChip extends lib5.StatelessWidget implements ChipAttributes.Interface,DeletableChipAttributes.Interface,SelectableChipAttributes.Interface,DisabledChipAttributes.Interface,TappableChipAttributes.Interface {
    constructor(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,selected? : boolean,isEnabled? : boolean,onSelected? : <T>(value : boolean) => void,deleteIcon? : lib5.Widget,onDeleted? : any,deleteIconColor? : any,deleteButtonTooltipMessage? : string,onPressed? : any,pressElevation? : double,disabledColor? : any,selectedColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib7.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InputChip(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,selected? : boolean,isEnabled? : boolean,onSelected? : <T>(value : boolean) => void,deleteIcon? : lib5.Widget,onDeleted? : any,deleteIconColor? : any,deleteButtonTooltipMessage? : string,onPressed? : any,pressElevation? : double,disabledColor? : any,selectedColor? : any,tooltip? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double,avatarBorder? : lib7.ShapeBorder}) {
        let {key,avatar,label,labelStyle,labelPadding,selected,isEnabled,onSelected,deleteIcon,onDeleted,deleteIconColor,deleteButtonTooltipMessage,onPressed,pressElevation,disabledColor,selectedColor,tooltip,shape,clipBehavior,backgroundColor,padding,materialTapTargetSize,elevation,avatarBorder} = Object.assign({
            "selected" : false,
            "isEnabled" : true,
            "clipBehavior" : Clip.none,
            "avatarBorder" : new lib11.CircleBorder()}, _namedArguments );
        this.assert = assert;
        this.avatar = avatar;
        this.label = label;
        this.labelStyle = labelStyle;
        this.labelPadding = labelPadding;
        this.selected = selected;
        this.isEnabled = isEnabled;
        this.onSelected = onSelected;
        this.deleteIcon = deleteIcon;
        this.onDeleted = onDeleted;
        this.deleteIconColor = deleteIconColor;
        this.deleteButtonTooltipMessage = deleteButtonTooltipMessage;
        this.onPressed = onPressed;
        this.pressElevation = pressElevation;
        this.disabledColor = disabledColor;
        this.selectedColor = selectedColor;
        this.tooltip = tooltip;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.materialTapTargetSize = materialTapTargetSize;
        this.elevation = elevation;
        this.avatarBorder = avatarBorder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatar : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    label : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelStyle : lib6.TextStyle;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelPadding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selected : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEnabled : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onSelected : <T>(value : boolean) => void;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteIcon : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onDeleted : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteIconColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteButtonTooltipMessage : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onPressed : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pressElevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    disabledColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectedColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tooltip : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shape : lib7.ShapeBorder;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clipBehavior : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    backgroundColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    padding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    materialTapTargetSize : lib9.MaterialTapTargetSize;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elevation : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatarBorder : lib7.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        return RawChip({
            avatar : this.avatar,label : this.label,labelStyle : this.labelStyle,labelPadding : this.labelPadding,deleteIcon : this.deleteIcon,onDeleted : this.onDeleted,deleteIconColor : this.deleteIconColor,deleteButtonTooltipMessage : this.deleteButtonTooltipMessage,onSelected : this.onSelected,onPressed : this.onPressed,pressElevation : this.pressElevation,selected : this.selected,tapEnabled : true,disabledColor : this.disabledColor,selectedColor : this.selectedColor,tooltip : this.tooltip,shape : this.shape,clipBehavior : this.clipBehavior,backgroundColor : this.backgroundColor,padding : this.padding,materialTapTargetSize : this.materialTapTargetSize,elevation : this.elevation,isEnabled : this.isEnabled && (this.onSelected != null || this.onDeleted != null || this.onPressed != null),avatarBorder : this.avatarBorder});
    }
}

export namespace Chip {
    export type Constructors = lib5.StatelessWidget.Constructors | 'Chip';
    export type Interface = Omit<Chip, Constructors>;
}
@DartClass
@Implements(ChipAttributes,DeletableChipAttributes)
export class Chip extends lib5.StatelessWidget implements ChipAttributes.Interface,DeletableChipAttributes.Interface {
    constructor(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,deleteIcon? : lib5.Widget,onDeleted? : any,deleteIconColor? : any,deleteButtonTooltipMessage? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Chip(_namedArguments? : {key? : lib10.Key,avatar? : lib5.Widget,label? : lib5.Widget,labelStyle? : lib6.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,deleteIcon? : lib5.Widget,onDeleted? : any,deleteIconColor? : any,deleteButtonTooltipMessage? : string,shape? : lib7.ShapeBorder,clipBehavior? : any,backgroundColor? : any,padding? : lib8.EdgeInsetsGeometry,materialTapTargetSize? : lib9.MaterialTapTargetSize,elevation? : double}) {
        let {key,avatar,label,labelStyle,labelPadding,deleteIcon,onDeleted,deleteIconColor,deleteButtonTooltipMessage,shape,clipBehavior,backgroundColor,padding,materialTapTargetSize,elevation} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        this.assert = assert;
        this.avatar = avatar;
        this.label = label;
        this.labelStyle = labelStyle;
        this.labelPadding = labelPadding;
        this.deleteIcon = deleteIcon;
        this.onDeleted = onDeleted;
        this.deleteIconColor = deleteIconColor;
        this.deleteButtonTooltipMessage = deleteButtonTooltipMessage;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.materialTapTargetSize = materialTapTargetSize;
        this.elevation = elevation;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    avatar : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    label : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelStyle : lib6.TextStyle;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelPadding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shape : lib7.ShapeBorder;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clipBehavior : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    backgroundColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    padding : lib8.EdgeInsetsGeometry;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteIcon : lib5.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onDeleted : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteIconColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deleteButtonTooltipMessage : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    materialTapTargetSize : lib9.MaterialTapTargetSize;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elevation : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        return RawChip({
            avatar : this.avatar,label : this.label,labelStyle : this.labelStyle,labelPadding : this.labelPadding,deleteIcon : this.deleteIcon,onDeleted : this.onDeleted,deleteIconColor : this.deleteIconColor,deleteButtonTooltipMessage : this.deleteButtonTooltipMessage,tapEnabled : false,shape : this.shape,clipBehavior : this.clipBehavior,backgroundColor : this.backgroundColor,padding : this.padding,materialTapTargetSize : this.materialTapTargetSize,elevation : this.elevation,isEnabled : true});
    }
}

export namespace TappableChipAttributes {
    export type Constructors = never;
    export type Interface = Omit<TappableChipAttributes, Constructors>;
}
@DartClass
export class TappableChipAttributes {
    @namedFactory
    static $_() : TappableChipAttributes {
        return null;
    }
    static _ : new() => TappableChipAttributes;

    @AbstractProperty
    get onPressed() : any{ throw 'abstract'}
    @AbstractProperty
    get pressElevation() : double{ throw 'abstract'}
    @AbstractProperty
    get tooltip() : string{ throw 'abstract'}
}

export namespace DisabledChipAttributes {
    export type Constructors = never;
    export type Interface = Omit<DisabledChipAttributes, Constructors>;
}
@DartClass
export class DisabledChipAttributes {
    @namedFactory
    static $_() : DisabledChipAttributes {
        return null;
    }
    static _ : new() => DisabledChipAttributes;

    @AbstractProperty
    get isEnabled() : boolean{ throw 'abstract'}
    @AbstractProperty
    get disabledColor() : any{ throw 'abstract'}
}

export namespace DeletableChipAttributes {
    export type Constructors = never;
    export type Interface = Omit<DeletableChipAttributes, Constructors>;
}
@DartClass
export class DeletableChipAttributes {
    @namedFactory
    static $_() : DeletableChipAttributes {
        return null;
    }
    static _ : new() => DeletableChipAttributes;

    @AbstractProperty
    get deleteIcon() : lib5.Widget{ throw 'abstract'}
    @AbstractProperty
    get onDeleted() : any{ throw 'abstract'}
    @AbstractProperty
    get deleteIconColor() : any{ throw 'abstract'}
    @AbstractProperty
    get deleteButtonTooltipMessage() : string{ throw 'abstract'}
}

export namespace ChipAttributes {
    export type Constructors = never;
    export type Interface = Omit<ChipAttributes, Constructors>;
}
@DartClass
export class ChipAttributes {
    @namedFactory
    static $_() : ChipAttributes {
        return null;
    }
    static _ : new() => ChipAttributes;

    @AbstractProperty
    get label() : lib5.Widget{ throw 'abstract'}
    @AbstractProperty
    get avatar() : lib5.Widget{ throw 'abstract'}
    @AbstractProperty
    get labelStyle() : lib6.TextStyle{ throw 'abstract'}
    @AbstractProperty
    get shape() : lib7.ShapeBorder{ throw 'abstract'}
    @AbstractProperty
    get clipBehavior() : any{ throw 'abstract'}
    @AbstractProperty
    get backgroundColor() : any{ throw 'abstract'}
    @AbstractProperty
    get padding() : lib8.EdgeInsetsGeometry{ throw 'abstract'}
    @AbstractProperty
    get labelPadding() : lib8.EdgeInsetsGeometry{ throw 'abstract'}
    @AbstractProperty
    get materialTapTargetSize() : lib9.MaterialTapTargetSize{ throw 'abstract'}
    @AbstractProperty
    get elevation() : double{ throw 'abstract'}
}

export namespace SelectableChipAttributes {
    export type Constructors = never;
    export type Interface = Omit<SelectableChipAttributes, Constructors>;
}
@DartClass
export class SelectableChipAttributes {
    @namedFactory
    static $_() : SelectableChipAttributes {
        return null;
    }
    static _ : new() => SelectableChipAttributes;

    @AbstractProperty
    get selected() : boolean{ throw 'abstract'}
    @AbstractProperty
    get onSelected() : <T>(value : boolean) => void{ throw 'abstract'}
    @AbstractProperty
    get pressElevation() : double{ throw 'abstract'}
    @AbstractProperty
    get selectedColor() : any{ throw 'abstract'}
    @AbstractProperty
    get tooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get avatarBorder() : lib7.ShapeBorder{ throw 'abstract'}
}

export class properties {
    private static __$_kDeleteIconSize : double;
    static get _kDeleteIconSize() : double { 
        if (this.__$_kDeleteIconSize===undefined) {
            this.__$_kDeleteIconSize = 18.0;
        }
        return this.__$_kDeleteIconSize;
    }
    static set _kDeleteIconSize(__$value : double)  { 
        this.__$_kDeleteIconSize = __$value;
    }

    private static __$_kCheckmarkAlpha : number;
    static get _kCheckmarkAlpha() : number { 
        if (this.__$_kCheckmarkAlpha===undefined) {
            this.__$_kCheckmarkAlpha = 222;
        }
        return this.__$_kCheckmarkAlpha;
    }
    static set _kCheckmarkAlpha(__$value : number)  { 
        this.__$_kCheckmarkAlpha = __$value;
    }

    private static __$_kDisabledAlpha : number;
    static get _kDisabledAlpha() : number { 
        if (this.__$_kDisabledAlpha===undefined) {
            this.__$_kDisabledAlpha = 97;
        }
        return this.__$_kDisabledAlpha;
    }
    static set _kDisabledAlpha(__$value : number)  { 
        this.__$_kDisabledAlpha = __$value;
    }

    private static __$_kCheckmarkStrokeWidth : double;
    static get _kCheckmarkStrokeWidth() : double { 
        if (this.__$_kCheckmarkStrokeWidth===undefined) {
            this.__$_kCheckmarkStrokeWidth = 2.0;
        }
        return this.__$_kCheckmarkStrokeWidth;
    }
    static set _kCheckmarkStrokeWidth(__$value : double)  { 
        this.__$_kCheckmarkStrokeWidth = __$value;
    }

    private static __$_kSelectDuration : core.DartDuration;
    static get _kSelectDuration() : core.DartDuration { 
        if (this.__$_kSelectDuration===undefined) {
            this.__$_kSelectDuration = core.DartDuration({
                milliseconds : 195});
        }
        return this.__$_kSelectDuration;
    }
    static set _kSelectDuration(__$value : core.DartDuration)  { 
        this.__$_kSelectDuration = __$value;
    }

    private static __$_kCheckmarkDuration : core.DartDuration;
    static get _kCheckmarkDuration() : core.DartDuration { 
        if (this.__$_kCheckmarkDuration===undefined) {
            this.__$_kCheckmarkDuration = core.DartDuration({
                milliseconds : 150});
        }
        return this.__$_kCheckmarkDuration;
    }
    static set _kCheckmarkDuration(__$value : core.DartDuration)  { 
        this.__$_kCheckmarkDuration = __$value;
    }

    private static __$_kCheckmarkReverseDuration : core.DartDuration;
    static get _kCheckmarkReverseDuration() : core.DartDuration { 
        if (this.__$_kCheckmarkReverseDuration===undefined) {
            this.__$_kCheckmarkReverseDuration = core.DartDuration({
                milliseconds : 50});
        }
        return this.__$_kCheckmarkReverseDuration;
    }
    static set _kCheckmarkReverseDuration(__$value : core.DartDuration)  { 
        this.__$_kCheckmarkReverseDuration = __$value;
    }

    private static __$_kDrawerDuration : core.DartDuration;
    static get _kDrawerDuration() : core.DartDuration { 
        if (this.__$_kDrawerDuration===undefined) {
            this.__$_kDrawerDuration = core.DartDuration({
                milliseconds : 150});
        }
        return this.__$_kDrawerDuration;
    }
    static set _kDrawerDuration(__$value : core.DartDuration)  { 
        this.__$_kDrawerDuration = __$value;
    }

    private static __$_kReverseDrawerDuration : core.DartDuration;
    static get _kReverseDrawerDuration() : core.DartDuration { 
        if (this.__$_kReverseDrawerDuration===undefined) {
            this.__$_kReverseDrawerDuration = core.DartDuration({
                milliseconds : 100});
        }
        return this.__$_kReverseDrawerDuration;
    }
    static set _kReverseDrawerDuration(__$value : core.DartDuration)  { 
        this.__$_kReverseDrawerDuration = __$value;
    }

    private static __$_kDisableDuration : core.DartDuration;
    static get _kDisableDuration() : core.DartDuration { 
        if (this.__$_kDisableDuration===undefined) {
            this.__$_kDisableDuration = core.DartDuration({
                milliseconds : 75});
        }
        return this.__$_kDisableDuration;
    }
    static set _kDisableDuration(__$value : core.DartDuration)  { 
        this.__$_kDisableDuration = __$value;
    }

    private static __$_kSelectScrimColor : any;
    static get _kSelectScrimColor() : any { 
        if (this.__$_kSelectScrimColor===undefined) {
            this.__$_kSelectScrimColor = Color(1612257561);
        }
        return this.__$_kSelectScrimColor;
    }
    static set _kSelectScrimColor(__$value : any)  { 
        this.__$_kSelectScrimColor = __$value;
    }

    private static __$_kDefaultDeleteIcon : lib4.Icon;
    static get _kDefaultDeleteIcon() : lib4.Icon { 
        if (this.__$_kDefaultDeleteIcon===undefined) {
            this.__$_kDefaultDeleteIcon = lib4.Icon(lib3.Icons.cancel,{
                size : properties._kDeleteIconSize});
        }
        return this.__$_kDefaultDeleteIcon;
    }
    static set _kDefaultDeleteIcon(__$value : lib4.Icon)  { 
        this.__$_kDefaultDeleteIcon = __$value;
    }

    static set avatar(value : any) {
        properties._avatar = _updateChild(properties._avatar,value,_ChipSlot.avatar);
    }
    private static __$_kChipHeight : double;
    static get _kChipHeight() : double { 
        if (this.__$_kChipHeight===undefined) {
            this.__$_kChipHeight = 32.0;
        }
        return this.__$_kChipHeight;
    }
    static set _kChipHeight(__$value : double)  { 
        this.__$_kChipHeight = __$value;
    }

    private static __$slotToChild : core.DartMap<_ChipSlot,any>;
    static get slotToChild() : core.DartMap<_ChipSlot,any> { 
        if (this.__$slotToChild===undefined) {
            this.__$slotToChild = new core.DartMap.literal([
            ]);
        }
        return this.__$slotToChild;
    }
    static set slotToChild(__$value : core.DartMap<_ChipSlot,any>)  { 
        this.__$slotToChild = __$value;
    }

    private static __$childToSlot : core.DartMap<any,_ChipSlot>;
    static get childToSlot() : core.DartMap<any,_ChipSlot> { 
        if (this.__$childToSlot===undefined) {
            this.__$childToSlot = new core.DartMap.literal([
            ]);
        }
        return this.__$childToSlot;
    }
    static set childToSlot(__$value : core.DartMap<any,_ChipSlot>)  { 
        this.__$childToSlot = __$value;
    }

    private static __$value : boolean;
    static get value() : boolean { 
        return this.__$value;
    }
    static set value(__$value : boolean)  { 
        this.__$value = __$value;
    }

    private static __$isEnabled : boolean;
    static get isEnabled() : boolean { 
        return this.__$isEnabled;
    }
    static set isEnabled(__$value : boolean)  { 
        this.__$isEnabled = __$value;
    }

    private static __$deleteButtonRect : any;
    static get deleteButtonRect() : any { 
        return this.__$deleteButtonRect;
    }
    static set deleteButtonRect(__$value : any)  { 
        this.__$deleteButtonRect = __$value;
    }

    private static __$pressRect : any;
    static get pressRect() : any { 
        return this.__$pressRect;
    }
    static set pressRect(__$value : any)  { 
        this.__$pressRect = __$value;
    }

    private static __$checkmarkAnimation : lib14.Animation<double>;
    static get checkmarkAnimation() : lib14.Animation<double> { 
        return this.__$checkmarkAnimation;
    }
    static set checkmarkAnimation(__$value : lib14.Animation<double>)  { 
        this.__$checkmarkAnimation = __$value;
    }

    private static __$avatarDrawerAnimation : lib14.Animation<double>;
    static get avatarDrawerAnimation() : lib14.Animation<double> { 
        return this.__$avatarDrawerAnimation;
    }
    static set avatarDrawerAnimation(__$value : lib14.Animation<double>)  { 
        this.__$avatarDrawerAnimation = __$value;
    }

    private static __$deleteDrawerAnimation : lib14.Animation<double>;
    static get deleteDrawerAnimation() : lib14.Animation<double> { 
        return this.__$deleteDrawerAnimation;
    }
    static set deleteDrawerAnimation(__$value : lib14.Animation<double>)  { 
        this.__$deleteDrawerAnimation = __$value;
    }

    private static __$enableAnimation : lib14.Animation<double>;
    static get enableAnimation() : lib14.Animation<double> { 
        return this.__$enableAnimation;
    }
    static set enableAnimation(__$value : lib14.Animation<double>)  { 
        this.__$enableAnimation = __$value;
    }

    private static __$avatarBorder : lib7.ShapeBorder;
    static get avatarBorder() : lib7.ShapeBorder { 
        return this.__$avatarBorder;
    }
    static set avatarBorder(__$value : lib7.ShapeBorder)  { 
        this.__$avatarBorder = __$value;
    }

    private static __$_avatar : any;
    static get _avatar() : any { 
        return this.__$_avatar;
    }
    static set _avatar(__$value : any)  { 
        this.__$_avatar = __$value;
    }

    static get avatar() : any {
        return properties._avatar;
    }
    static get deleteIconShowing() : boolean {
        return !properties.deleteDrawerAnimation.isDismissed;
    }
    private static __$_deleteIcon : any;
    static get _deleteIcon() : any { 
        return this.__$_deleteIcon;
    }
    static set _deleteIcon(__$value : any)  { 
        this.__$_deleteIcon = __$value;
    }

    static get deleteIcon() : any {
        return properties._deleteIcon;
    }
    static set deleteIcon(value : any) {
        properties._deleteIcon = _updateChild(properties._deleteIcon,value,_ChipSlot.deleteIcon);
    }
    private static __$_label : any;
    static get _label() : any { 
        return this.__$_label;
    }
    static set _label(__$value : any)  { 
        this.__$_label = __$value;
    }

    static get label() : any {
        return properties._label;
    }
    static set label(value : any) {
        properties._label = _updateChild(properties._label,value,_ChipSlot.label);
    }
    static get theme() : _ChipRenderTheme {
        return properties._theme;
    }
    private static __$_theme : _ChipRenderTheme;
    static get _theme() : _ChipRenderTheme { 
        return this.__$_theme;
    }
    static set _theme(__$value : _ChipRenderTheme)  { 
        this.__$_theme = __$value;
    }

    static set theme(value : _ChipRenderTheme) {
        if (op(Op.EQUALS,properties._theme,value)) {
            return;
        }
        properties._theme = value;
        markNeedsLayout();
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

    static set textDirection(value : any) {
        if (op(Op.EQUALS,properties._textDirection,value)) {
            return;
        }
        properties._textDirection = value;
        markNeedsLayout();
    }
    static get _children() : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            if (properties.avatar != null) {
                yield properties.avatar;
            }
            if (properties.label != null) {
                yield properties.label;
            }
            if (properties.deleteIcon != null) {
                yield properties.deleteIcon;
            }
        }).call(this));
    }

    static get isDrawingCheckmark() : boolean {
        return properties.theme.showCheckmark && !((((t)=>(!!t)?t.isDismissed:null)(properties.checkmarkAnimation) || !properties.value));
    }
    static get sizedByParent() : boolean {
        return false;
    }
    private static __$_debugShowTapTargetOutlines : boolean;
    static get _debugShowTapTargetOutlines() : boolean { 
        if (this.__$_debugShowTapTargetOutlines===undefined) {
            this.__$_debugShowTapTargetOutlines = false;
        }
        return this.__$_debugShowTapTargetOutlines;
    }
    static set _debugShowTapTargetOutlines(__$value : boolean)  { 
        this.__$_debugShowTapTargetOutlines = __$value;
    }

    static get _disabledColor() : any {
        if (op(Op.EQUALS,properties.enableAnimation,null) || properties.enableAnimation.isCompleted) {
            return lib41.Colors.white;
        }
        let enableTween : lib18.ColorTween;
        switch (properties.theme.brightness) {
            case Brightness.light:
                enableTween = lib18.ColorTween({
                    begin : lib41.Colors.white.withAlpha(properties._kDisabledAlpha),end : lib41.Colors.white});
                break;
            case Brightness.dark:
                enableTween = lib18.ColorTween({
                    begin : lib41.Colors.black.withAlpha(properties._kDisabledAlpha),end : lib41.Colors.black});
                break;
        }
        return enableTween.evaluate(properties.enableAnimation);
    }
    private static __$selectionScrimTween : lib18.ColorTween;
    static get selectionScrimTween() : lib18.ColorTween { 
        if (this.__$selectionScrimTween===undefined) {
            this.__$selectionScrimTween = lib18.ColorTween({
                begin : lib41.Colors.transparent,end : properties._kSelectScrimColor});
        }
        return this.__$selectionScrimTween;
    }
    static set selectionScrimTween(__$value : lib18.ColorTween)  { 
        this.__$selectionScrimTween = __$value;
    }

}
