/** Library asset:datahedgehog_monitor/lib/lib/material/text_selection.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./material_localizations";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib7 from "./flat_button";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib11 from "./material";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/services/text_input";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib19 from "./theme";
import * as math from "@dart2ts/dart/math";
import * as lib21 from "@dart2ts.packages/vector_math/lib/vector_math_64";

export namespace _TextSelectionToolbar {
    export type Constructors = lib3.StatelessWidget.Constructors | '_TextSelectionToolbar';
    export type Interface = Omit<_TextSelectionToolbar, Constructors>;
}
@DartClass
export class _TextSelectionToolbar extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,handleCut? : any,handleCopy? : any,handlePaste? : any,handleSelectAll? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextSelectionToolbar(_namedArguments? : {key? : lib4.Key,handleCut? : any,handleCopy? : any,handlePaste? : any,handleSelectAll? : any}) {
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
    build(context : lib3.BuildContext) : lib3.Widget {
        let items : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let localizations : lib5.MaterialLocalizations = lib5.MaterialLocalizations.of(context);
        if (this.handleCut != null) items.add(lib7.FlatButton({
            child : lib6.Text(localizations.cutButtonLabel),onPressed : this.handleCut}));
        if (this.handleCopy != null) items.add(lib7.FlatButton({
            child : lib6.Text(localizations.copyButtonLabel),onPressed : this.handleCopy}));
        if (this.handlePaste != null) items.add(lib7.FlatButton({
            child : lib6.Text(localizations.pasteButtonLabel),onPressed : this.handlePaste}));
        if (this.handleSelectAll != null) items.add(lib7.FlatButton({
            child : lib6.Text(localizations.selectAllButtonLabel),onPressed : this.handleSelectAll}));
        return lib11.Material({
            elevation : 1.0,child : lib10.Container({
                height : 44.0,child : lib9.Row({
                    mainAxisSize : lib8.MainAxisSize.min,children : items})})});
    }
}

export namespace _TextSelectionToolbarLayout {
    export type Constructors = lib12.SingleChildLayoutDelegate.Constructors | '_TextSelectionToolbarLayout';
    export type Interface = Omit<_TextSelectionToolbarLayout, Constructors>;
}
@DartClass
export class _TextSelectionToolbarLayout extends lib12.SingleChildLayoutDelegate {
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
    getConstraintsForChild(constraints : lib13.BoxConstraints) : lib13.BoxConstraints {
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
        return this.position != oldDelegate.position;
    }
}

export namespace _TextSelectionHandlePainter {
    export type Constructors = lib14.CustomPainter.Constructors | '_TextSelectionHandlePainter';
    export type Interface = Omit<_TextSelectionHandlePainter, Constructors>;
}
@DartClass
export class _TextSelectionHandlePainter extends lib14.CustomPainter {
    constructor(_namedArguments? : {color? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextSelectionHandlePainter(_namedArguments? : {color? : any}) {
        let {color} = Object.assign({
        }, _namedArguments );
        this.color = color;
    }
    color : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let paint : any = ((_) : any =>  {
            {
                _.color = this.color;
                return _;
            }
        })(Paint());
        let radius : double = op(Op.DIVIDE,size.width,2.0);
        canvas.drawCircle(Offset(radius,radius),radius,paint);
        canvas.drawRect(Rect.fromLTWH(0.0,0.0,radius,radius),paint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _TextSelectionHandlePainter) : boolean {
        return this.color != oldPainter.color;
    }
}

export namespace _MaterialTextSelectionControls {
    export type Constructors = lib15.TextSelectionControls.Constructors | '_MaterialTextSelectionControls';
    export type Interface = Omit<_MaterialTextSelectionControls, Constructors>;
}
@DartClass
export class _MaterialTextSelectionControls extends lib15.TextSelectionControls {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSize : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildToolbar(context : lib3.BuildContext,globalEditableRegion : any,position : any,delegate : lib16.TextSelectionDelegate) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        return lib9.ConstrainedBox({
            constraints : lib13.BoxConstraints.tight(globalEditableRegion.size),child : lib9.CustomSingleChildLayout({
                delegate : _TextSelectionToolbarLayout(lib17.MediaQuery.of(context).size,globalEditableRegion,position),child : _TextSelectionToolbar({
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
    buildHandle(context : lib3.BuildContext,type : lib15.TextSelectionHandleType,textHeight : double) : lib3.Widget {
        let handle : lib3.Widget = lib9.Padding({
            padding : new lib18.EdgeInsets.only({
                right : 26.0,bottom : 26.0}),child : lib9.SizedBox({
                width : properties._kHandleSize,height : properties._kHandleSize,child : lib9.CustomPaint({
                    painter : _TextSelectionHandlePainter({
                        color : lib19.Theme.of(context).textSelectionHandleColor})})})});
        switch (type) {
            case lib15.TextSelectionHandleType.left:
                return lib9.Transform({
                    transform : lib21.Matrix4.rotationZ(op(Op.DIVIDE,math.pi,2.0)),child : handle});
            case lib15.TextSelectionHandleType.right:
                return handle;
            case lib15.TextSelectionHandleType.collapsed:
                return lib9.Transform({
                    transform : lib21.Matrix4.rotationZ(op(Op.DIVIDE,math.pi,4.0)),child : handle});
        }
        /* TODO (AssertStatementImpl) : assert (type != null); */;
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MaterialTextSelectionControls() {
        this.handleSize = new bare.createInstance(any,null,properties._kHandleSize,properties._kHandleSize);
    }
}

export class properties {
    private static __$_kHandleSize : double;
    static get _kHandleSize() : double { 
        if (this.__$_kHandleSize===undefined) {
            this.__$_kHandleSize = 22.0;
        }
        return this.__$_kHandleSize;
    }
    static set _kHandleSize(__$value : double)  { 
        this.__$_kHandleSize = __$value;
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

    private static __$materialTextSelectionControls : lib15.TextSelectionControls;
    static get materialTextSelectionControls() : lib15.TextSelectionControls { 
        if (this.__$materialTextSelectionControls===undefined) {
            this.__$materialTextSelectionControls = _MaterialTextSelectionControls();
        }
        return this.__$materialTextSelectionControls;
    }
    static set materialTextSelectionControls(__$value : lib15.TextSelectionControls)  { 
        this.__$materialTextSelectionControls = __$value;
    }

}
