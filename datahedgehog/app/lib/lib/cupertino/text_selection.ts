/** Library asset:datahedgehog_monitor/lib/lib/cupertino/text_selection.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib5 from "./colors";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib12 from "./localizations";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib18 from "./button";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/services/text_input";
import * as math from "@dart2ts/dart/math";
import * as lib24 from "@dart2ts.packages/vector_math/lib/vector_math_64";

export namespace _TextSelectionToolbarNotchPainter {
    export type Constructors = lib7.CustomPainter.Constructors | '_TextSelectionToolbarNotchPainter';
    export type Interface = Omit<_TextSelectionToolbarNotchPainter, Constructors>;
}
@DartClass
export class _TextSelectionToolbarNotchPainter extends lib7.CustomPainter {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let paint : any = ((_) : any =>  {
            {
                _.color = properties._kToolbarBackgroundColor;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        let triangle : any = ((_) : any =>  {
            {
                lineTo(op(Op.DIVIDE,properties._kToolbarTriangleSize.width,2),0.0);
                lineTo(0.0,properties._kToolbarTriangleSize.height);
                lineTo(op(Op.NEG,(op(Op.DIVIDE,properties._kToolbarTriangleSize.width,2))),0.0);
                close();
                return _;
            }
        })(Path());
        canvas.drawPath(triangle,paint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _TextSelectionToolbarNotchPainter) : boolean {
        return false;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextSelectionToolbarNotchPainter() {
    }
}

export namespace _TextSelectionToolbar {
    export type Constructors = lib8.StatelessWidget.Constructors | '_TextSelectionToolbar';
    export type Interface = Omit<_TextSelectionToolbar, Constructors>;
}
@DartClass
export class _TextSelectionToolbar extends lib8.StatelessWidget {
    constructor(_namedArguments? : {key? : lib9.Key,handleCut? : any,handleCopy? : any,handlePaste? : any,handleSelectAll? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextSelectionToolbar(_namedArguments? : {key? : lib9.Key,handleCut? : any,handleCopy? : any,handlePaste? : any,handleSelectAll? : any}) {
        let {key,handleCut,handleCopy,handlePaste,handleSelectAll} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.handleCut = handleCut;
        this.handleCopy = handleCopy;
        this.handlePaste = handlePaste;
        this.handleSelectAll = handleSelectAll;
    }
    handleCut : any;

    handleCopy : any;

    handlePaste : any;

    handleSelectAll : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        let items : core.DartList<lib8.Widget> = new core.DartList.literal<lib8.Widget>();
        let onePhysicalPixelVerticalDivider : lib8.Widget = lib11.SizedBox({
            width : 1.0 / lib10.MediaQuery.of(context).devicePixelRatio});
        let localizations : lib12.CupertinoLocalizations = lib12.CupertinoLocalizations.of(context);
        if (this.handleCut != null) items.add(this._buildToolbarButton(localizations.cutButtonLabel,this.handleCut));
        if (this.handleCopy != null) {
            if (items.isNotEmpty) items.add(onePhysicalPixelVerticalDivider);
            items.add(this._buildToolbarButton(localizations.copyButtonLabel,this.handleCopy));
        }
        if (this.handlePaste != null) {
            if (items.isNotEmpty) items.add(onePhysicalPixelVerticalDivider);
            items.add(this._buildToolbarButton(localizations.pasteButtonLabel,this.handlePaste));
        }
        if (this.handleSelectAll != null) {
            if (items.isNotEmpty) items.add(onePhysicalPixelVerticalDivider);
            items.add(this._buildToolbarButton(localizations.selectAllButtonLabel,this.handleSelectAll));
        }
        let triangle : lib8.Widget = lib11.SizedBox.fromSize({
            size : properties._kToolbarTriangleSize,child : lib11.CustomPaint({
                painter : _TextSelectionToolbarNotchPainter()})});
        return lib11.Column({
            mainAxisSize : lib13.MainAxisSize.min,children : new core.DartList.literal<lib8.Widget>(lib11.ClipRRect({
                borderRadius : properties._kToolbarBorderRadius,child : lib16.DecoratedBox({
                    decoration : lib15.BoxDecoration({
                        color : properties._kToolbarDividerColor,borderRadius : properties._kToolbarBorderRadius,border : lib14.Border.all({
                            color : properties._kToolbarBackgroundColor,width : 0})}),child : lib11.Row({
                        mainAxisSize : lib13.MainAxisSize.min,children : items})})}),triangle,new lib11.Padding({
                padding : lib3.EdgeInsets.only({
                    bottom : 10.0})}))});
    }
    _buildToolbarButton(text : string,onPressed : any) : lib18.CupertinoButton {
        return lib18.CupertinoButton({
            child : lib17.Text(text,{
                style : properties._kToolbarButtonFontStyle}),color : properties._kToolbarBackgroundColor,minSize : properties._kToolbarHeight,padding : properties._kToolbarButtonPadding,borderRadius : null,pressedOpacity : 0.7,onPressed : onPressed});
    }
}

export namespace _TextSelectionToolbarLayout {
    export type Constructors = lib19.SingleChildLayoutDelegate.Constructors | '_TextSelectionToolbarLayout';
    export type Interface = Omit<_TextSelectionToolbarLayout, Constructors>;
}
@DartClass
export class _TextSelectionToolbarLayout extends lib19.SingleChildLayoutDelegate {
    constructor(screenSize : any,globalEditableRegion : any,position : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextSelectionToolbarLayout(screenSize : any,globalEditableRegion : any,position : any) {
        this.screenSize = screenSize;
        this.globalEditableRegion = globalEditableRegion;
        this.position = position;
    }
    screenSize : any;

    globalEditableRegion : any;

    position : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConstraintsForChild(constraints : lib20.BoxConstraints) : lib20.BoxConstraints {
        return constraints.loosen();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPositionForChild(size : any,childSize : any) : any {
        let globalPosition : any = op(Op.PLUS,this.globalEditableRegion.topLeft,this.position);
        let x : double = op(Op.MINUS,globalPosition.dx,op(Op.DIVIDE,childSize.width,2.0));
        let y : double = op(Op.MINUS,globalPosition.dy,childSize.height);
        if (x < properties._kToolbarScreenPadding) x = properties._kToolbarScreenPadding;else if (x + childSize.width > op(Op.MINUS,this.screenSize.width,properties._kToolbarScreenPadding)) x = op(Op.MINUS,op(Op.MINUS,this.screenSize.width,childSize.width),properties._kToolbarScreenPadding);
        if (y < properties._kToolbarScreenPadding) y = properties._kToolbarScreenPadding;else if (y + childSize.height > op(Op.MINUS,this.screenSize.height,properties._kToolbarScreenPadding)) y = op(Op.MINUS,op(Op.MINUS,this.screenSize.height,childSize.height),properties._kToolbarScreenPadding);
        return Offset(x,y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _TextSelectionToolbarLayout) : boolean {
        return this.screenSize != oldDelegate.screenSize || this.globalEditableRegion != oldDelegate.globalEditableRegion || this.position != oldDelegate.position;
    }
}

export namespace _TextSelectionHandlePainter {
    export type Constructors = lib7.CustomPainter.Constructors | '_TextSelectionHandlePainter';
    export type Interface = Omit<_TextSelectionHandlePainter, Constructors>;
}
@DartClass
export class _TextSelectionHandlePainter extends lib7.CustomPainter {
    constructor(_namedArguments? : {origin? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextSelectionHandlePainter(_namedArguments? : {origin? : any}) {
        let {origin} = Object.assign({
        }, _namedArguments );
        this.origin = origin;
    }
    origin : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let paint : any = ((_) : any =>  {
            {
                _.color = properties._kHandlesColor;
                _.strokeWidth = 2.0;
                return _;
            }
        })(Paint());
        canvas.drawCircle(this.origin.translate(0.0,4.0),5.5,paint);
        canvas.drawLine(this.origin,this.origin.translate(0.0,op(Op.NEG,(op(Op.MINUS,size.height,2.0 * properties._kHandlesPadding)))),paint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _TextSelectionHandlePainter) : boolean {
        return this.origin != oldPainter.origin;
    }
}

export namespace _CupertinoTextSelectionControls {
    export type Constructors = lib21.TextSelectionControls.Constructors | '_CupertinoTextSelectionControls';
    export type Interface = Omit<_CupertinoTextSelectionControls, Constructors>;
}
@DartClass
export class _CupertinoTextSelectionControls extends lib21.TextSelectionControls {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSize : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildToolbar(context : lib8.BuildContext,globalEditableRegion : any,position : any,delegate : lib22.TextSelectionDelegate) : lib8.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        return lib11.ConstrainedBox({
            constraints : lib20.BoxConstraints.tight(globalEditableRegion.size),child : lib11.CustomSingleChildLayout({
                delegate : _TextSelectionToolbarLayout(lib10.MediaQuery.of(context).size,globalEditableRegion,position),child : _TextSelectionToolbar({
                    handleCut : this.canCut(delegate) ? () =>  {
                        return this.handleCut(delegate);
                    } : null,handleCopy : this.canCopy(delegate) ? () =>  {
                        return this.handleCopy(delegate);
                    } : null,handlePaste : this.canPaste(delegate) ? () =>  {
                        return this.handlePaste(delegate);
                    } : null,handleSelectAll : this.canSelectAll(delegate) ? () =>  {
                        return this.handleSelectAll(delegate);
                    } : null})})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildHandle(context : lib8.BuildContext,type : lib21.TextSelectionHandleType,textLineHeight : double) : lib8.Widget {
        let desiredSize : any = Size(2.0 * properties._kHandlesPadding,textLineHeight + 2.0 * properties._kHandlesPadding);
        let handle : lib8.Widget = lib11.SizedBox.fromSize({
            size : desiredSize,child : lib11.CustomPaint({
                painter : _TextSelectionHandlePainter({
                    origin : Offset(properties._kHandlesPadding,textLineHeight + properties._kHandlesPadding)})})});
        switch (type) {
            case lib21.TextSelectionHandleType.left:
                return lib11.Transform({
                    transform : ((_) : any =>  {
                        {
                            translate(-properties._kHandlesPadding,-properties._kHandlesPadding);
                            return _;
                        }
                    })(lib24.Matrix4.rotationZ(math.pi)),child : handle});
            case lib21.TextSelectionHandleType.right:
                return lib11.Transform({
                    transform : lib24.Matrix4.translationValues(-properties._kHandlesPadding,-(textLineHeight + properties._kHandlesPadding),0.0),child : handle});
            case lib21.TextSelectionHandleType.collapsed:
                return lib16.Container();
        }
        /* TODO (AssertStatementImpl) : assert (type != null); */;
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoTextSelectionControls() {
        this.handleSize = properties._kSelectionOffset;
    }
}

export class properties {
    private static __$_kHandlesPadding : double;
    static get _kHandlesPadding() : double { 
        if (this.__$_kHandlesPadding===undefined) {
            this.__$_kHandlesPadding = 18.0;
        }
        return this.__$_kHandlesPadding;
    }
    static set _kHandlesPadding(__$value : double)  { 
        this.__$_kHandlesPadding = __$value;
    }

    private static __$_kToolbarScreenPadding : double;
    static get _kToolbarScreenPadding() : double { 
        if (this.__$_kToolbarScreenPadding===undefined) {
            this.__$_kToolbarScreenPadding = 8.0;
        }
        return this.__$_kToolbarScreenPadding;
    }
    static set _kToolbarScreenPadding(__$value : double)  { 
        this.__$_kToolbarScreenPadding = __$value;
    }

    private static __$_kToolbarHeight : double;
    static get _kToolbarHeight() : double { 
        if (this.__$_kToolbarHeight===undefined) {
            this.__$_kToolbarHeight = 36.0;
        }
        return this.__$_kToolbarHeight;
    }
    static set _kToolbarHeight(__$value : double)  { 
        this.__$_kToolbarHeight = __$value;
    }

    private static __$_kToolbarBackgroundColor : any;
    static get _kToolbarBackgroundColor() : any { 
        if (this.__$_kToolbarBackgroundColor===undefined) {
            this.__$_kToolbarBackgroundColor = Color(4281216558);
        }
        return this.__$_kToolbarBackgroundColor;
    }
    static set _kToolbarBackgroundColor(__$value : any)  { 
        this.__$_kToolbarBackgroundColor = __$value;
    }

    private static __$_kToolbarDividerColor : any;
    static get _kToolbarDividerColor() : any { 
        if (this.__$_kToolbarDividerColor===undefined) {
            this.__$_kToolbarDividerColor = Color(4290361785);
        }
        return this.__$_kToolbarDividerColor;
    }
    static set _kToolbarDividerColor(__$value : any)  { 
        this.__$_kToolbarDividerColor = __$value;
    }

    private static __$_kHandlesColor : any;
    static get _kHandlesColor() : any { 
        if (this.__$_kHandlesColor===undefined) {
            this.__$_kHandlesColor = Color(4279463904);
        }
        return this.__$_kHandlesColor;
    }
    static set _kHandlesColor(__$value : any)  { 
        this.__$_kHandlesColor = __$value;
    }

    private static __$_kSelectionOffset : any;
    static get _kSelectionOffset() : any { 
        if (this.__$_kSelectionOffset===undefined) {
            this.__$_kSelectionOffset = Size(20.0,30.0);
        }
        return this.__$_kSelectionOffset;
    }
    static set _kSelectionOffset(__$value : any)  { 
        this.__$_kSelectionOffset = __$value;
    }

    private static __$_kToolbarTriangleSize : any;
    static get _kToolbarTriangleSize() : any { 
        if (this.__$_kToolbarTriangleSize===undefined) {
            this.__$_kToolbarTriangleSize = Size(18.0,9.0);
        }
        return this.__$_kToolbarTriangleSize;
    }
    static set _kToolbarTriangleSize(__$value : any)  { 
        this.__$_kToolbarTriangleSize = __$value;
    }

    private static __$_kToolbarButtonPadding : lib3.EdgeInsets;
    static get _kToolbarButtonPadding() : lib3.EdgeInsets { 
        if (this.__$_kToolbarButtonPadding===undefined) {
            this.__$_kToolbarButtonPadding = lib3.EdgeInsets.symmetric({
                vertical : 10.0,horizontal : 18.0});
        }
        return this.__$_kToolbarButtonPadding;
    }
    static set _kToolbarButtonPadding(__$value : lib3.EdgeInsets)  { 
        this.__$_kToolbarButtonPadding = __$value;
    }

    private static __$_kToolbarBorderRadius : lib4.BorderRadius;
    static get _kToolbarBorderRadius() : lib4.BorderRadius { 
        if (this.__$_kToolbarBorderRadius===undefined) {
            this.__$_kToolbarBorderRadius = lib4.BorderRadius.all(Radius.circular(7.5));
        }
        return this.__$_kToolbarBorderRadius;
    }
    static set _kToolbarBorderRadius(__$value : lib4.BorderRadius)  { 
        this.__$_kToolbarBorderRadius = __$value;
    }

    private static __$_kToolbarButtonFontStyle : lib6.TextStyle;
    static get _kToolbarButtonFontStyle() : lib6.TextStyle { 
        if (this.__$_kToolbarButtonFontStyle===undefined) {
            this.__$_kToolbarButtonFontStyle = lib6.TextStyle({
                inherit : false,fontSize : 14.0,letterSpacing : -0.11,fontWeight : FontWeight.w300,color : lib5.CupertinoColors.white});
        }
        return this.__$_kToolbarButtonFontStyle;
    }
    static set _kToolbarButtonFontStyle(__$value : lib6.TextStyle)  { 
        this.__$_kToolbarButtonFontStyle = __$value;
    }

    private static __$cupertinoTextSelectionControls : lib21.TextSelectionControls;
    static get cupertinoTextSelectionControls() : lib21.TextSelectionControls { 
        if (this.__$cupertinoTextSelectionControls===undefined) {
            this.__$cupertinoTextSelectionControls = _CupertinoTextSelectionControls();
        }
        return this.__$cupertinoTextSelectionControls;
    }
    static set cupertinoTextSelectionControls(__$value : lib21.TextSelectionControls)  { 
        this.__$cupertinoTextSelectionControls = __$value;
    }

}
