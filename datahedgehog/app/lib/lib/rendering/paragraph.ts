/** Library asset:datahedgehog_monitor/lib/lib/rendering/paragraph.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/strut_style";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib9 from "./object";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/services/text_editing";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/gestures/long_press";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export enum TextOverflow {
    clip,
    fade,
    ellipsis
}

export namespace RenderParagraph {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderParagraph' | 'debugAssertIsValid';
    export type Interface = Omit<RenderParagraph, Constructors>;
}
@DartClass
export class RenderParagraph extends lib3.RenderBox {
    constructor(text : lib4.TextSpan,_namedArguments? : {textAlign? : any,textDirection? : any,softWrap? : boolean,overflow? : TextOverflow,textScaleFactor? : double,maxLines? : number,locale? : any,strutStyle? : lib5.StrutStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderParagraph(text : lib4.TextSpan,_namedArguments? : {textAlign? : any,textDirection? : any,softWrap? : boolean,overflow? : TextOverflow,textScaleFactor? : double,maxLines? : number,locale? : any,strutStyle? : lib5.StrutStyle}) {
        let {textAlign,textDirection,softWrap,overflow,textScaleFactor,maxLines,locale,strutStyle} = Object.assign({
            "textAlign" : TextAlign.start,
            "softWrap" : true,
            "overflow" : TextOverflow.clip,
            "textScaleFactor" : 1.0}, _namedArguments );
        this._softWrap = this.softWrap;
        this._overflow = this.overflow;
        this._textPainter = lib6.TextPainter({
            text : this.text,textAlign : this.textAlign,textDirection : this.textDirection,textScaleFactor : this.textScaleFactor,maxLines : this.maxLines,ellipsis : op(Op.EQUALS,this.overflow,TextOverflow.ellipsis) ? properties._kEllipsis : null,locale : this.locale,strutStyle : this.strutStyle});
        this._hasVisualOverflow = false;
        this._recognizerOffsets = new core.DartList.literal<number>();
        this._recognizers = new core.DartList.literal<lib11.GestureRecognizer>();
        this.assert = assert;
    }
     : any;

    @namedConstructor
    debugAssertIsValid() {
        this._softWrap = this.softWrap;
        this._overflow = this.overflow;
        this._textPainter = lib6.TextPainter({
            text : this.text,textAlign : this.textAlign,textDirection : this.textDirection,textScaleFactor : this.textScaleFactor,maxLines : this.maxLines,ellipsis : op(Op.EQUALS,this.overflow,TextOverflow.ellipsis) ? properties._kEllipsis : null,locale : this.locale,strutStyle : this.strutStyle});
        this._hasVisualOverflow = false;
        this._recognizerOffsets = new core.DartList.literal<number>();
        this._recognizers = new core.DartList.literal<lib11.GestureRecognizer>();
    }
    static debugAssertIsValid : new() => RenderParagraph;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    _softWrap;
    _overflow;
    _textPainter;

    _textPainter : lib6.TextPainter;

    get text() : lib4.TextSpan {
        return this._textPainter.text;
    }
    set text(value : lib4.TextSpan) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        switch (this._textPainter.text.compareTo(value)) {
            case lib7.RenderComparison.identical:
            case lib7.RenderComparison.metadata:
                return;
            case lib7.RenderComparison.paint:
                this._textPainter.text = value;
                this.markNeedsPaint();
                this.markNeedsSemanticsUpdate();
                break;
            case lib7.RenderComparison.layout:
                this._textPainter.text = value;
                this._overflowShader = null;
                this.markNeedsLayout();
                break;
        }
    }
    get textAlign() : any {
        return this._textPainter.textAlign;
    }
    set textAlign(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textPainter.textAlign,value)) return;
        this._textPainter.textAlign = value;
        this.markNeedsPaint();
    }
    get textDirection() : any {
        return this._textPainter.textDirection;
    }
    set textDirection(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textPainter.textDirection,value)) return;
        this._textPainter.textDirection = value;
        this.markNeedsLayout();
    }
    get softWrap() : boolean {
        return this._softWrap;
    }
    _softWrap : boolean;

    set softWrap(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._softWrap,value)) return;
        this._softWrap = value;
        this.markNeedsLayout();
    }
    get overflow() : TextOverflow {
        return this._overflow;
    }
    _overflow : TextOverflow;

    set overflow(value : TextOverflow) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._overflow,value)) return;
        this._overflow = value;
        this._textPainter.ellipsis = op(Op.EQUALS,value,TextOverflow.ellipsis) ? properties._kEllipsis : null;
        this.markNeedsLayout();
    }
    get textScaleFactor() : double {
        return this._textPainter.textScaleFactor;
    }
    set textScaleFactor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textPainter.textScaleFactor,value)) return;
        this._textPainter.textScaleFactor = value;
        this._overflowShader = null;
        this.markNeedsLayout();
    }
    get maxLines() : number {
        return this._textPainter.maxLines;
    }
    set maxLines(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value > 0); */;
        if (op(Op.EQUALS,this._textPainter.maxLines,value)) return;
        this._textPainter.maxLines = value;
        this._overflowShader = null;
        this.markNeedsLayout();
    }
    get locale() : any {
        return this._textPainter.locale;
    }
    set locale(value : any) {
        if (op(Op.EQUALS,this._textPainter.locale,value)) return;
        this._textPainter.locale = value;
        this._overflowShader = null;
        this.markNeedsLayout();
    }
    get strutStyle() : lib5.StrutStyle {
        return this._textPainter.strutStyle;
    }
    set strutStyle(value : lib5.StrutStyle) {
        if (op(Op.EQUALS,this._textPainter.strutStyle,value)) return;
        this._textPainter.strutStyle = value;
        this._overflowShader = null;
        this.markNeedsLayout();
    }
    _layoutText(_namedArguments? : {minWidth? : double,maxWidth? : double}) : any {
        let {minWidth,maxWidth} = Object.assign({
            "minWidth" : 0.0,
            "maxWidth" : new core.DartDouble(double).infinity}, _namedArguments );
        let widthMatters : boolean = this.softWrap || op(Op.EQUALS,this.overflow,TextOverflow.ellipsis);
        this._textPainter.layout({
            minWidth : minWidth,maxWidth : widthMatters ? maxWidth : new core.DartDouble(double).infinity});
    }
    _layoutTextWithConstraints(constraints : lib3.BoxConstraints) : any {
        this._layoutText({
            minWidth : constraints.minWidth,maxWidth : constraints.maxWidth});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        this._layoutText();
        return this._textPainter.minIntrinsicWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        this._layoutText();
        return this._textPainter.maxIntrinsicWidth;
    }
    _computeIntrinsicHeight(width : double) : double {
        this._layoutText({
            minWidth : width,maxWidth : width});
        return this._textPainter.height;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        return this._computeIntrinsicHeight(width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        return this._computeIntrinsicHeight(width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDistanceToActualBaseline(baseline : any) : double {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.debugAssertIsValid()); */;
        this._layoutTextWithConstraints(this.constraints);
        return this._textPainter.computeDistanceToActualBaseline(baseline);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib8.PointerEvent,entry : lib3.BoxHitTestEntry) : any {
        /* TODO (AssertStatementImpl) : assert (debugHandleEvent(event, entry)); */;
        if (isNot(event, lib8.PointerDownEvent)) return;
        this._layoutTextWithConstraints(this.constraints);
        let offset : any = entry.localPosition;
        let position : any = this._textPainter.getPositionForOffset(offset);
        let span : lib4.TextSpan = this._textPainter.text.getSpanForPosition(position);
        ((_834_)=>(!!_834_)?_834_.addPointer(event):null)(((t)=>(!!t)?t.recognizer:null)(span));
    }
    _hasVisualOverflow : boolean;

    _overflowShader : any;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    get debugHasOverflowShader() : boolean {
        return this._overflowShader != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this._layoutTextWithConstraints(this.constraints);
        let textSize : any = this._textPainter.size;
        let didOverflowHeight : boolean = this._textPainter.didExceedMaxLines;
        this.size = this.constraints.constrain(textSize);
        let didOverflowWidth : boolean = op(Op.LT,this.size.width,textSize.width);
        this._hasVisualOverflow = didOverflowWidth || didOverflowHeight;
        if (this._hasVisualOverflow) {
            switch (this._overflow) {
                case TextOverflow.clip:
                case TextOverflow.ellipsis:
                    this._overflowShader = null;
                    break;
                case TextOverflow.fade:
                    /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
                    let fadeSizePainter : lib6.TextPainter = ((_) : any =>  {
                        {
                            layout();
                            return _;
                        }
                    })(lib6.TextPainter({
                        text : lib4.TextSpan({
                            style : this._textPainter.text.style,text : '…'}),textDirection : this.textDirection,textScaleFactor : this.textScaleFactor,locale : this.locale}));
                    if (didOverflowWidth) {
                        let fadeEnd : double, fadeStart : double;
                        switch (this.textDirection) {
                            case TextDirection.rtl:
                                fadeEnd = 0.0;
                                fadeStart = fadeSizePainter.width;
                                break;
                            case TextDirection.ltr:
                                fadeEnd = this.size.width;
                                fadeStart = fadeEnd - fadeSizePainter.width;
                                break;
                        }
                        this._overflowShader = ui.Gradient.linear(Offset(fadeStart,0.0),Offset(fadeEnd,0.0),new core.DartList.literal<any>(new bare.createInstance(any,null,4294967295),new bare.createInstance(any,null,16777215)));
                    }else {
                        let fadeEnd : double = this.size.height;
                        let fadeStart : double = fadeEnd - fadeSizePainter.height / 2.0;
                        this._overflowShader = ui.Gradient.linear(Offset(0.0,fadeStart),Offset(0.0,fadeEnd),new core.DartList.literal<any>(new bare.createInstance(any,null,4294967295),new bare.createInstance(any,null,16777215)));
                    }
                    break;
            }
        }else {
            this._overflowShader = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,offset : any) : any {
        this._layoutTextWithConstraints(this.constraints);
        let canvas : any = context.canvas;
        /* TODO (AssertStatementImpl) : assert (() {if (debugRepaintTextRainbowEnabled) {final Paint paint = Paint()..color = debugCurrentRepaintColor.toColor(); canvas.drawRect(offset & size, paint);} return true;}()); */;
        if (this._hasVisualOverflow) {
            let bounds : any = op(Op.BITAND,offset,this.size);
            if (this._overflowShader != null) {
                canvas.saveLayer(bounds,Paint());
            }else {
                canvas.save();
            }
            canvas.clipRect(bounds);
        }
        this._textPainter.paint(canvas,offset);
        if (this._hasVisualOverflow) {
            if (this._overflowShader != null) {
                canvas.translate(offset.dx,offset.dy);
                let paint : any = ((_) : any =>  {
                    {
                        _.blendMode = BlendMode.modulate;
                        _.shader = this._overflowShader;
                        return _;
                    }
                })(Paint());
                canvas.drawRect(op(Op.BITAND,Offset.zero,this.size),paint);
            }
            canvas.restore();
        }
    }
    getOffsetForCaret(position : any,caretPrototype : any) : any {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        this._layoutTextWithConstraints(this.constraints);
        return this._textPainter.getOffsetForCaret(position,caretPrototype);
    }
    getBoxesForSelection(selection : lib10.TextSelection) : core.DartList<any> {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        this._layoutTextWithConstraints(this.constraints);
        return this._textPainter.getBoxesForSelection(selection);
    }
    getPositionForOffset(offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        this._layoutTextWithConstraints(this.constraints);
        return this._textPainter.getPositionForOffset(offset);
    }
    getWordBoundary(position : any) : lib10.TextRange {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        this._layoutTextWithConstraints(this.constraints);
        return this._textPainter.getWordBoundary(position);
    }
    get textSize() : any {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        return this._textPainter.size;
    }
    _recognizerOffsets : core.DartList<number>;

    _recognizers : core.DartList<lib11.GestureRecognizer>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib12.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        this._recognizerOffsets.clear();
        this._recognizers.clear();
        let offset : number = 0;
        this.text.visitTextSpan((span : lib4.TextSpan) =>  {
            if (span.recognizer != null && (is(span.recognizer, lib13.TapGestureRecognizer) || is(span.recognizer, lib14.LongPressGestureRecognizer))) {
                this._recognizerOffsets.add(offset);
                this._recognizerOffsets.add(offset + new core.DartString(span.text).length);
                this._recognizers.add(span.recognizer);
            }
            offset += new core.DartString(span.text).length;
            return true;
        });
        if (this._recognizerOffsets.isNotEmpty) {
            config.explicitChildNodes = true;
            config.isSemanticBoundary = true;
        }else {
            config.label = this.text.toPlainText();
            config.textDirection = this.textDirection;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assembleSemanticsNode(node : lib12.SemanticsNode,config : lib12.SemanticsConfiguration,children : core.DartIterable<lib12.SemanticsNode>) : any {
        /* TODO (AssertStatementImpl) : assert (_recognizerOffsets.isNotEmpty); */;
        /* TODO (AssertStatementImpl) : assert (_recognizerOffsets.length.isEven); */;
        /* TODO (AssertStatementImpl) : assert (_recognizers.isNotEmpty); */;
        /* TODO (AssertStatementImpl) : assert (children.isEmpty); */;
        let newChildren : core.DartList<lib12.SemanticsNode> = new core.DartList.literal<lib12.SemanticsNode>();
        let rawLabel : string = this.text.toPlainText();
        let current : number = 0;
        let order : double = -1.0;
        let currentDirection : any = this.textDirection;
        let currentRect : any;
        var buildSemanticsConfig : (start : number,end : number) => lib12.SemanticsConfiguration = (start : number,end : number) : lib12.SemanticsConfiguration =>  {
            let initialDirection : any = currentDirection;
            let selection : lib10.TextSelection = lib10.TextSelection({
                baseOffset : start,extentOffset : end});
            let rects : core.DartList<any> = this.getBoxesForSelection(selection);
            let rect : any;
            for(let textBox of rects) {
                rect = ( rect ) || ( textBox.toRect() );
                rect = rect.expandToInclude(textBox.toRect());
                currentDirection = textBox.direction;
            }
            currentRect = Rect.fromLTRB(op(Op.MINUS,rect.left.floorToDouble(),4.0),op(Op.MINUS,rect.top.floorToDouble(),4.0),op(Op.PLUS,rect.right.ceilToDouble(),4.0),op(Op.PLUS,rect.bottom.ceilToDouble(),4.0));
            order += 1;
            return ((_) : any =>  {
                {
                    _.sortKey = lib12.OrdinalSortKey(order);
                    _.textDirection = initialDirection;
                    _.label = new core.DartString(rawLabel).substring(start,end);
                    return _;
                }
            })(lib12.SemanticsConfiguration());
        };
        for(let i : number = 0, j : number = 0; i < this._recognizerOffsets.length; i += 2,j++){
            let start : number = this._recognizerOffsets[i];
            let end : number = this._recognizerOffsets[i + 1];
            if (current != start) {
                let node : lib12.SemanticsNode = lib12.SemanticsNode();
                let configuration : lib12.SemanticsConfiguration = buildSemanticsConfig(current,start);
                node.updateWith({
                    config : configuration});
                node.rect = currentRect;
                newChildren.add(node);
            }
            let node : lib12.SemanticsNode = lib12.SemanticsNode();
            let configuration : lib12.SemanticsConfiguration = buildSemanticsConfig(start,end);
            let recognizer : lib11.GestureRecognizer = this._recognizers[j];
            if (is(recognizer, lib13.TapGestureRecognizer)) {
                configuration.onTap = recognizer.onTap;
            }else if (is(recognizer, lib14.LongPressGestureRecognizer)) {
                configuration.onLongPress = recognizer.onLongPress;
            }else {
                /* TODO (AssertStatementImpl) : assert (false); */;
            }
            node.updateWith({
                config : configuration});
            node.rect = currentRect;
            newChildren.add(node);
            current = end;
        }
        if (current < new core.DartString(rawLabel).length) {
            let node : lib12.SemanticsNode = lib12.SemanticsNode();
            let configuration : lib12.SemanticsConfiguration = buildSemanticsConfig(current,new core.DartString(rawLabel).length);
            node.updateWith({
                config : configuration});
            node.rect = currentRect;
            newChildren.add(node);
        }
        node.updateWith({
            config : config,childrenInInversePaintOrder : newChildren});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib15.DiagnosticsNode> {
        return new core.DartList.literal<lib15.DiagnosticsNode>(this.text.toDiagnosticsNode({
            name : 'text',style : lib15.DiagnosticsTreeStyle.transition}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib15.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib15.EnumProperty('textAlign',this.textAlign));
        properties.add(lib15.EnumProperty('textDirection',this.textDirection));
        properties.add(lib15.FlagProperty('softWrap',{
            value : this.softWrap,ifTrue : 'wrapping at box width',ifFalse : 'no wrapping except at line break characters',showName : true}));
        properties.add(lib15.EnumProperty('overflow',this.overflow));
        properties.add(lib15.DoubleProperty('textScaleFactor',this.textScaleFactor,{
            defaultValue : 1.0}));
        properties.add(lib15.DiagnosticsProperty('locale',this.locale,{
            defaultValue : null}));
        properties.add(lib15.IntProperty('maxLines',this.maxLines,{
            ifNull : 'unlimited'}));
    }
}

export class properties {
    private static __$_kEllipsis : string;
    static get _kEllipsis() : string { 
        if (this.__$_kEllipsis===undefined) {
            this.__$_kEllipsis = '…';
        }
        return this.__$_kEllipsis;
    }
    static set _kEllipsis(__$value : string)  { 
        this.__$_kEllipsis = __$value;
    }

}
