/** Library asset:datahedgehog_monitor/lib/lib/painting/text_painter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./text_span";
import * as lib4 from "./strut_style";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/services/text_editing";

export namespace TextPainter {
    export type Constructors = 'TextPainter' | 'debugAssertIsValid';
    export type Interface = Omit<TextPainter, Constructors>;
}
@DartClass
export class TextPainter {
    constructor(_namedArguments? : {text? : lib3.TextSpan,textAlign? : any,textDirection? : any,textScaleFactor? : double,maxLines? : number,ellipsis? : string,locale? : any,strutStyle? : lib4.StrutStyle}) {
    }
    @defaultConstructor
    TextPainter(_namedArguments? : {text? : lib3.TextSpan,textAlign? : any,textDirection? : any,textScaleFactor? : double,maxLines? : number,ellipsis? : string,locale? : any,strutStyle? : lib4.StrutStyle}) {
        let {text,textAlign,textDirection,textScaleFactor,maxLines,ellipsis,locale,strutStyle} = Object.assign({
            "textAlign" : TextAlign.start,
            "textScaleFactor" : 1.0}, _namedArguments );
        this._text = this.text;
        this._textAlign = this.textAlign;
        this._textDirection = this.textDirection;
        this._textScaleFactor = this.textScaleFactor;
        this._maxLines = this.maxLines;
        this._ellipsis = this.ellipsis;
        this._locale = this.locale;
        this._strutStyle = this.strutStyle;
        this._needsLayout = true;
        this.assert = assert;
    }
     : any;

    @namedConstructor
    debugAssertIsValid() {
        this._text = this.text;
        this._textAlign = this.textAlign;
        this._textDirection = this.textDirection;
        this._textScaleFactor = this.textScaleFactor;
        this._maxLines = this.maxLines;
        this._ellipsis = this.ellipsis;
        this._locale = this.locale;
        this._strutStyle = this.strutStyle;
        this._needsLayout = true;
    }
    static debugAssertIsValid : new() => TextPainter;

     : any;

     : any;

     : any;

     : any;

    _text;
    _textAlign;
    _textDirection;
    _textScaleFactor;
    _maxLines;
    _ellipsis;
    _locale;
    _strutStyle;

    _paragraph : any;

    _needsLayout : boolean;

    get text() : lib3.TextSpan {
        return this._text;
    }
    _text : lib3.TextSpan;

    set text(value : lib3.TextSpan) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.debugAssertIsValid()); */;
        if (op(Op.EQUALS,this._text,value)) return;
        if (((t)=>(!!t)?t.style:null)(this._text) != ((t)=>(!!t)?t.style:null)(value)) this._layoutTemplate = null;
        this._text = value;
        this._paragraph = null;
        this._needsLayout = true;
    }
    get textAlign() : any {
        return this._textAlign;
    }
    _textAlign : any;

    set textAlign(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textAlign,value)) return;
        this._textAlign = value;
        this._paragraph = null;
        this._needsLayout = true;
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        if (op(Op.EQUALS,this._textDirection,value)) return;
        this._textDirection = value;
        this._paragraph = null;
        this._layoutTemplate = null;
        this._needsLayout = true;
    }
    get textScaleFactor() : double {
        return this._textScaleFactor;
    }
    _textScaleFactor : double;

    set textScaleFactor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textScaleFactor,value)) return;
        this._textScaleFactor = value;
        this._paragraph = null;
        this._layoutTemplate = null;
        this._needsLayout = true;
    }
    get ellipsis() : string {
        return this._ellipsis;
    }
    _ellipsis : string;

    set ellipsis(value : string) {
        /* TODO (AssertStatementImpl) : assert (value == null || value.isNotEmpty); */;
        if (op(Op.EQUALS,this._ellipsis,value)) return;
        this._ellipsis = value;
        this._paragraph = null;
        this._needsLayout = true;
    }
    get locale() : any {
        return this._locale;
    }
    _locale : any;

    set locale(value : any) {
        if (op(Op.EQUALS,this._locale,value)) return;
        this._locale = value;
        this._paragraph = null;
        this._needsLayout = true;
    }
    get maxLines() : number {
        return this._maxLines;
    }
    _maxLines : number;

    set maxLines(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value > 0); */;
        if (op(Op.EQUALS,this._maxLines,value)) return;
        this._maxLines = value;
        this._paragraph = null;
        this._needsLayout = true;
    }
    get strutStyle() : lib4.StrutStyle {
        return this._strutStyle;
    }
    _strutStyle : lib4.StrutStyle;

    set strutStyle(value : lib4.StrutStyle) {
        if (op(Op.EQUALS,this._strutStyle,value)) return;
        this._strutStyle = value;
        this._paragraph = null;
        this._needsLayout = true;
    }
    _layoutTemplate : any;

    _createParagraphStyle(defaultTextDirection? : any) : any {
        /* TODO (AssertStatementImpl) : assert (textAlign != null); */;
        /* TODO (AssertStatementImpl) : assert (textDirection != null || defaultTextDirection != null, 'TextPainter.textDirection must be set to a non-null value before using the TextPainter.'); */;
        return (((_806_)=>(!!_806_)?_806_.getParagraphStyle({
            textAlign : this.textAlign,textDirection : (this.textDirection || defaultTextDirection),textScaleFactor : this.textScaleFactor,maxLines : this._maxLines,ellipsis : this._ellipsis,locale : this._locale,strutStyle : this._strutStyle}):null)(this._text.style) || ui.ParagraphStyle({
            textAlign : this.textAlign,textDirection : (this.textDirection || defaultTextDirection),maxLines : this.maxLines,ellipsis : this.ellipsis,locale : this.locale}));
    }
    get preferredLineHeight() : double {
        if (op(Op.EQUALS,this._layoutTemplate,null)) {
            let builder : any = ui.ParagraphBuilder(this._createParagraphStyle(TextDirection.rtl));
            if (((t)=>(!!t)?t.style:null)(this.text) != null) builder.pushStyle(this.text.style.getTextStyle({
                textScaleFactor : this.textScaleFactor}));
            builder.addText(' ');
            this._layoutTemplate = ((_) : any =>  {
                {
                    layout(new bare.createInstance(any,null,{
                        width : new core.DartDouble(double).infinity}));
                    return _;
                }
            })(builder.build());
        }
        return this._layoutTemplate.height;
    }
    _applyFloatingPointHack(layoutValue : double) : double {
        return new core.DartDouble(layoutValue).ceilToDouble();
    }
    get minIntrinsicWidth() : double {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return this._applyFloatingPointHack(this._paragraph.minIntrinsicWidth);
    }
    get maxIntrinsicWidth() : double {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return this._applyFloatingPointHack(this._paragraph.maxIntrinsicWidth);
    }
    get width() : double {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return this._applyFloatingPointHack(this._paragraph.width);
    }
    get height() : double {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return this._applyFloatingPointHack(this._paragraph.height);
    }
    get size() : any {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return Size(this.width,this.height);
    }
    computeDistanceToActualBaseline(baseline : any) : double {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        /* TODO (AssertStatementImpl) : assert (baseline != null); */;
        switch (baseline) {
            case TextBaseline.alphabetic:
                return this._paragraph.alphabeticBaseline;
            case TextBaseline.ideographic:
                return this._paragraph.ideographicBaseline;
        }
        return null;
    }
    get didExceedMaxLines() : boolean {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return this._paragraph.didExceedMaxLines;
    }
    _lastMinWidth : double;

    _lastMaxWidth : double;

    layout(_namedArguments? : {minWidth? : double,maxWidth? : double}) : any {
        let {minWidth,maxWidth} = Object.assign({
            "minWidth" : 0.0,
            "maxWidth" : new core.DartDouble(double).infinity}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (text != null, 'TextPainter.text must be set to a non-null value before using the TextPainter.'); */;
        /* TODO (AssertStatementImpl) : assert (textDirection != null, 'TextPainter.textDirection must be set to a non-null value before using the TextPainter.'); */;
        if (!this._needsLayout && minWidth == this._lastMinWidth && maxWidth == this._lastMaxWidth) return;
        this._needsLayout = false;
        if (op(Op.EQUALS,this._paragraph,null)) {
            let builder : any = ui.ParagraphBuilder(this._createParagraphStyle());
            this._text.build(builder,{
                textScaleFactor : this.textScaleFactor});
            this._paragraph = builder.build();
        }
        this._lastMinWidth = minWidth;
        this._lastMaxWidth = maxWidth;
        this._paragraph.layout(ui.ParagraphConstraints({
            width : maxWidth}));
        if (minWidth != maxWidth) {
            let newWidth : double = new core.DartDouble(this.maxIntrinsicWidth).clamp(minWidth,maxWidth);
            if (newWidth != this.width) this._paragraph.layout(ui.ParagraphConstraints({
                width : newWidth}));
        }
    }
    paint(canvas : any,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (_needsLayout) {throw FlutterError('TextPainter.paint called when text geometry was not yet calculated.\n' 'Please call layout() before paint() to position the text before painting it.');} return true;}()); */;
        canvas.drawParagraph(this._paragraph,offset);
    }
    _isUtf16Surrogate(value : number) : boolean {
        return value & 63488 == 55296;
    }
    getOffsetAfter(offset : number) : number {
        let nextCodeUnit : number = this._text.codeUnitAt(offset);
        if (nextCodeUnit == null) return null;
        return this._isUtf16Surrogate(nextCodeUnit) ? offset + 2 : offset + 1;
    }
    getOffsetBefore(offset : number) : number {
        let prevCodeUnit : number = this._text.codeUnitAt(offset - 1);
        if (prevCodeUnit == null) return null;
        return this._isUtf16Surrogate(prevCodeUnit) ? offset - 2 : offset - 1;
    }
    private static __$_zwjUtf16 : number;
    static get _zwjUtf16() : number { 
        if (this.__$_zwjUtf16===undefined) {
            this.__$_zwjUtf16 = 8205;
        }
        return this.__$_zwjUtf16;
    }

    _getOffsetFromUpstream(offset : number,caretPrototype : any) : any {
        let flattenedText : string = this._text.toPlainText();
        let prevCodeUnit : number = this._text.codeUnitAt(math.max(0,offset - 1));
        if (prevCodeUnit == null) return null;
        let needsSearch : boolean = this._isUtf16Surrogate(prevCodeUnit) || op(Op.EQUALS,this._text.codeUnitAt(offset),TextPainter._zwjUtf16);
        let graphemeClusterLength : number = needsSearch ? 2 : 1;
        let boxes : core.DartList<any> = new core.DartList.literal<any>();
        while (boxes.isEmpty && flattenedText != null){
            let prevRuneOffset : number = offset - graphemeClusterLength;
            boxes = this._paragraph.getBoxesForRange(prevRuneOffset,offset);
            if (boxes.isEmpty) {
                if (!needsSearch) break;
                if (prevRuneOffset < -new core.DartString(flattenedText).length) break;
                graphemeClusterLength *= 2;
                continue;
            }
            let box : any = boxes.first;
            let NEWLINE_CODE_UNIT : number = 10;
            if (prevCodeUnit == NEWLINE_CODE_UNIT) {
                return Offset(this._emptyOffset.dx,box.bottom);
            }
            let caretEnd : double = box.end;
            let dx : double = op(Op.EQUALS,box.direction,TextDirection.rtl) ? caretEnd - caretPrototype.width : caretEnd;
            return Offset(dx,box.top);
        }
        return null;
    }
    _getOffsetFromDownstream(offset : number,caretPrototype : any) : any {
        let flattenedText : string = this._text.toPlainText();
        let nextCodeUnit : number = this._text.codeUnitAt(math.min(offset,flattenedText == null ? 0 : new core.DartString(flattenedText).length - 1));
        if (nextCodeUnit == null) return null;
        let needsSearch : boolean = this._isUtf16Surrogate(nextCodeUnit) || nextCodeUnit == TextPainter._zwjUtf16;
        let graphemeClusterLength : number = needsSearch ? 2 : 1;
        let boxes : core.DartList<any> = new core.DartList.literal<any>();
        while (boxes.isEmpty && flattenedText != null){
            let nextRuneOffset : number = offset + graphemeClusterLength;
            boxes = this._paragraph.getBoxesForRange(offset,nextRuneOffset);
            if (boxes.isEmpty) {
                if (!needsSearch) break;
                if (nextRuneOffset >= new core.DartString(flattenedText).length << 1) break;
                graphemeClusterLength *= 2;
                continue;
            }
            let box : any = boxes.last;
            let caretStart : double = box.start;
            let dx : double = op(Op.EQUALS,box.direction,TextDirection.rtl) ? caretStart - caretPrototype.width : caretStart;
            return Offset(dx,box.top);
        }
        return null;
    }
    get _emptyOffset() : any {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        /* TODO (AssertStatementImpl) : assert (textAlign != null); */;
        switch (this.textAlign) {
            case TextAlign.left:
                return Offset.zero;
            case TextAlign.right:
                return Offset(this.width,0.0);
            case TextAlign.center:
                return Offset(this.width / 2.0,0.0);
            case TextAlign.justify:
            case TextAlign.start:
                /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
                switch (this.textDirection) {
                    case TextDirection.rtl:
                        return Offset(this.width,0.0);
                    case TextDirection.ltr:
                        return Offset.zero;
                }
                return null;
            case TextAlign.end:
                /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
                switch (this.textDirection) {
                    case TextDirection.rtl:
                        return Offset.zero;
                    case TextDirection.ltr:
                        return Offset(this.width,0.0);
                }
                return null;
        }
        return null;
    }
    getOffsetForCaret(position : any,caretPrototype : any) : any {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        let offset : number = position.offset;
        /* TODO (AssertStatementImpl) : assert (position.affinity != null); */;
        switch (position.affinity) {
            case TextAffinity.upstream:
                return ((this._getOffsetFromUpstream(offset,caretPrototype) || this._getOffsetFromDownstream(offset,caretPrototype)) || this._emptyOffset);
            case TextAffinity.downstream:
                return ((this._getOffsetFromDownstream(offset,caretPrototype) || this._getOffsetFromUpstream(offset,caretPrototype)) || this._emptyOffset);
        }
        return null;
    }
    getBoxesForSelection(selection : lib6.TextSelection) : core.DartList<any> {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return this._paragraph.getBoxesForRange(selection.start,selection.end);
    }
    getPositionForOffset(offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        return this._paragraph.getPositionForOffset(offset);
    }
    getWordBoundary(position : any) : lib6.TextRange {
        /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
        let indices : core.DartList<number> = this._paragraph.getWordBoundary(position.offset);
        return lib6.TextRange({
            start : indices[0],end : indices[1]});
    }
}

export class properties {
}
