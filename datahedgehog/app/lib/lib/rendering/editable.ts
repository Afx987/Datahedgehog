/** Library asset:datahedgehog_monitor/lib/lib/rendering/editable.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/services/text_editing";
import * as lib7 from "./viewport_offset";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/long_press";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/services/text_input";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/services/raw_keyboard";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/services/raw_keyboard_android";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/services/clipboard";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib18 from "./object";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as math from "@dart2ts/dart/math";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var debugFillProperties : (properties : lib22.DiagnosticPropertiesBuilder) => any = (properties : lib22.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib22.DiagnosticsProperty('cursorColor',properties.cursorColor));
    properties.add(lib22.DiagnosticsProperty('showCursor',properties.showCursor));
    properties.add(lib22.IntProperty('maxLines',properties.maxLines));
    properties.add(lib22.DiagnosticsProperty('selectionColor',properties.selectionColor));
    properties.add(lib22.DoubleProperty('textScaleFactor',properties.textScaleFactor));
    properties.add(lib22.DiagnosticsProperty('locale',properties.locale,{
        defaultValue : null}));
    properties.add(lib22.DiagnosticsProperty('selection',properties.selection));
    properties.add(lib22.DiagnosticsProperty('offset',properties.offset));
};
export var describeApproximatePaintClip : (child : lib18.RenderObject) => any = (child : lib18.RenderObject) : any =>  {
    return properties._hasVisualOverflow ? op(Op.BITAND,Offset.zero,size) : null;
};
export var paint : (context : lib18.PaintingContext,offset : any) => any = (context : lib18.PaintingContext,offset : any) : any =>  {
    _layoutText(constraints.maxWidth);
    if (properties._hasVisualOverflow) context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),_paintContents);else _paintContents(context,offset);
};
export var _handleKeyEvent : (keyEvent : lib13.RawKeyEvent) => any = (keyEvent : lib13.RawKeyEvent) : any =>  {
    switch (lib14.properties.defaultTargetPlatform) {
        case lib14.TargetPlatform.android:
            break;
        case lib14.TargetPlatform.iOS:
        case lib14.TargetPlatform.fuchsia:
            return;
    }
    if (is(keyEvent, lib13.RawKeyUpEvent)) return;
    let rawAndroidEvent : lib15.RawKeyEventDataAndroid = keyEvent.data;
    let pressedKeyCode : number = rawAndroidEvent.keyCode;
    let pressedKeyMetaState : number = rawAndroidEvent.metaState;
    if (properties.selection.isCollapsed) {
        properties._extentOffset = properties.selection.extentOffset;
        properties._baseOffset = properties.selection.baseOffset;
    }
    let shift : boolean = pressedKeyMetaState & properties._kShiftMask > 0;
    let ctrl : boolean = pressedKeyMetaState & properties._kControlMask > 0;
    let rightArrow : boolean = pressedKeyCode == properties._kRightArrowCode;
    let leftArrow : boolean = pressedKeyCode == properties._kLeftArrowCode;
    let upArrow : boolean = pressedKeyCode == properties._kUpArrowCode;
    let downArrow : boolean = pressedKeyCode == properties._kDownArrowCode;
    let arrow : boolean = leftArrow || rightArrow || upArrow || downArrow;
    let aKey : boolean = pressedKeyCode == properties._kAKeyCode;
    let xKey : boolean = pressedKeyCode == properties._kXKeyCode;
    let vKey : boolean = pressedKeyCode == properties._kVKeyCode;
    let cKey : boolean = pressedKeyCode == properties._kCKeyCode;
    let del : boolean = pressedKeyCode == properties._kDelKeyCode;
    if (arrow) {
        let newOffset : number = properties._extentOffset;
        if (ctrl) newOffset = _handleControl(rightArrow,leftArrow,ctrl,newOffset);
        newOffset = _handleHorizontalArrows(rightArrow,leftArrow,shift,newOffset);
        if (downArrow || upArrow) newOffset = _handleVerticalArrows(upArrow,downArrow,shift,newOffset);
        newOffset = _handleShift(rightArrow,leftArrow,shift,newOffset);
        properties._extentOffset = newOffset;
    }else if (ctrl && (xKey || vKey || cKey || aKey)) {
        _handleShortcuts(pressedKeyCode);
    }
    if (del) _handleDelete();
};
export var _handleControl : (rightArrow : boolean,leftArrow : boolean,ctrl : boolean,newOffset : number) => number = (rightArrow : boolean,leftArrow : boolean,ctrl : boolean,newOffset : number) : number =>  {
    if (leftArrow && properties._extentOffset > 2) {
        let textSelection : lib6.TextSelection = _selectWordAtOffset(TextPosition({
            offset : properties._extentOffset - 2}));
        newOffset = textSelection.baseOffset + 1;
    }else if (rightArrow && properties._extentOffset < new core.DartString(properties.text.text).length - 2) {
        let textSelection : lib6.TextSelection = _selectWordAtOffset(TextPosition({
            offset : properties._extentOffset + 1}));
        newOffset = textSelection.extentOffset - 1;
    }
    return newOffset;
};
export var _handleHorizontalArrows : (rightArrow : boolean,leftArrow : boolean,shift : boolean,newOffset : number) => number = (rightArrow : boolean,leftArrow : boolean,shift : boolean,newOffset : number) : number =>  {
    if (rightArrow && properties._extentOffset < new core.DartString(properties.text.text).length) {
        newOffset += 1;
        if (shift) properties._previousCursorLocation += 1;
    }
    if (leftArrow && properties._extentOffset > 0) {
        newOffset -= 1;
        if (shift) properties._previousCursorLocation -= 1;
    }
    return newOffset;
};
export var _handleVerticalArrows : (upArrow : boolean,downArrow : boolean,shift : boolean,newOffset : number) => number = (upArrow : boolean,downArrow : boolean,shift : boolean,newOffset : number) : number =>  {
    let plh : double = properties._textPainter.preferredLineHeight;
    let verticalOffset : double = upArrow ? -0.5 * plh : 1.5 * plh;
    let caretOffset : any = properties._textPainter.getOffsetForCaret(TextPosition({
        offset : properties._extentOffset}),properties._caretPrototype);
    let caretOffsetTranslated : any = caretOffset.translate(0.0,verticalOffset);
    let position : any = properties._textPainter.getPositionForOffset(caretOffsetTranslated);
    if (op(Op.EQUALS,position.offset,properties._extentOffset)) {
        if (downArrow) newOffset = new core.DartString(properties.text.text).length;else if (upArrow) newOffset = 0;
        properties._resetCursor = shift;
    }else if (properties._resetCursor && shift) {
        newOffset = properties._previousCursorLocation;
        properties._resetCursor = false;
    }else {
        newOffset = position.offset;
        properties._previousCursorLocation = newOffset;
    }
    return newOffset;
};
export var _handleShift : (rightArrow : boolean,leftArrow : boolean,shift : boolean,newOffset : number) => number = (rightArrow : boolean,leftArrow : boolean,shift : boolean,newOffset : number) : number =>  {
    if (op(Op.EQUALS,properties.onSelectionChanged,null)) return newOffset;
    if (shift) {
        if (properties._baseOffset < newOffset) {
            properties.onSelectionChanged(lib6.TextSelection({
                baseOffset : properties._baseOffset,extentOffset : newOffset}),this,SelectionChangedCause.keyboard);
        }else {
            properties.onSelectionChanged(lib6.TextSelection({
                baseOffset : newOffset,extentOffset : properties._baseOffset}),this,SelectionChangedCause.keyboard);
        }
    }else {
        if (!properties.selection.isCollapsed) {
            if (leftArrow) newOffset = properties._baseOffset < properties._extentOffset ? properties._baseOffset : properties._extentOffset;else if (rightArrow) newOffset = properties._baseOffset > properties._extentOffset ? properties._baseOffset : properties._extentOffset;
        }
        properties.onSelectionChanged(lib6.TextSelection.fromPosition(TextPosition({
            offset : newOffset})),this,SelectionChangedCause.keyboard);
    }
    return newOffset;
};
export var _handleShortcuts : (pressedKeyCode : number) => any = (pressedKeyCode : number) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    switch (pressedKeyCode) {
        case properties._kCKeyCode:
            if (!properties.selection.isCollapsed) {
                lib16.Clipboard.setData(lib16.ClipboardData({
                    text : properties.selection.textInside(properties.text.text)}));
            }
            break;
        case properties._kXKeyCode:
            if (!properties.selection.isCollapsed) {
                lib16.Clipboard.setData(lib16.ClipboardData({
                    text : properties.selection.textInside(properties.text.text)}));
                properties.textSelectionDelegate.textEditingValue = lib12.TextEditingValue({
                    text : properties.selection.textBefore(properties.text.text) + properties.selection.textAfter(properties.text.text),selection : lib6.TextSelection.collapsed({
                        offset : properties.selection.start})});
            }
            break;
        case properties._kVKeyCode:
            let value : lib12.TextEditingValue = properties.textSelectionDelegate.textEditingValue;
            let data : lib16.ClipboardData = await lib16.Clipboard.getData(lib16.Clipboard.kTextPlain);
            if (data != null) {
                properties.textSelectionDelegate.textEditingValue = lib12.TextEditingValue({
                    text : value.selection.textBefore(value.text) + data.text + value.selection.textAfter(value.text),selection : lib6.TextSelection.collapsed({
                        offset : op(Op.PLUS,value.selection.start,new core.DartString(data.text).length)})});
            }
            break;
        case properties._kAKeyCode:
            properties._baseOffset = 0;
            properties._extentOffset = new core.DartString(properties.textSelectionDelegate.textEditingValue.text).length;
            properties.onSelectionChanged(lib6.TextSelection({
                baseOffset : 0,extentOffset : new core.DartString(properties.textSelectionDelegate.textEditingValue.text).length}),this,SelectionChangedCause.keyboard);
            break;
        default:
            /* TODO (AssertStatementImpl) : assert (false); */;
    }
})());
export var _handleDelete : () => any = () : any =>  {
    if (new core.DartString(properties.selection.textAfter(properties.text.text)).isNotEmpty) {
        properties.textSelectionDelegate.textEditingValue = lib12.TextEditingValue({
            text : properties.selection.textBefore(properties.text.text) + new core.DartString(properties.selection.textAfter(properties.text.text)).substring(1),selection : lib6.TextSelection.collapsed({
                offset : properties.selection.start})});
    }else {
        properties.textSelectionDelegate.textEditingValue = lib12.TextEditingValue({
            text : properties.selection.textBefore(properties.text.text),selection : lib6.TextSelection.collapsed({
                offset : properties.selection.start})});
    }
};
export var markNeedsTextLayout : () => any = () : any =>  {
    properties._textLayoutLastWidth = null;
    markNeedsLayout();
};
export var describeSemanticsConfiguration : (config : lib17.SemanticsConfiguration) => any = (config : lib17.SemanticsConfiguration) : any =>  {
    super.describeSemanticsConfiguration(config);
    ((_) : lib17.SemanticsConfiguration =>  {
        {
            _.value = properties.obscureText ? op(Op.TIMES,properties.obscuringCharacter,new core.DartString(properties.text.toPlainText()).length) : properties.text.toPlainText();
            _.isObscured = properties.obscureText;
            _.textDirection = properties.textDirection;
            _.isFocused = properties.hasFocus;
            _.isTextField = true;
            return _;
        }
    })(config);
    if (properties.hasFocus && properties.selectionEnabled) config.onSetSelection = _handleSetSelection;
    if (properties.selectionEnabled && ((t)=>(!!t)?t.isValid:null)(properties._selection) == true) {
        config.textSelection = properties._selection;
        if (properties._textPainter.getOffsetBefore(properties._selection.extentOffset) != null) {
            ((_) : lib17.SemanticsConfiguration =>  {
                {
                    _.onMoveCursorBackwardByWord = _handleMoveCursorBackwardByWord;
                    _.onMoveCursorBackwardByCharacter = _handleMoveCursorBackwardByCharacter;
                    return _;
                }
            })(config);
        }
        if (properties._textPainter.getOffsetAfter(properties._selection.extentOffset) != null) {
            ((_) : lib17.SemanticsConfiguration =>  {
                {
                    _.onMoveCursorForwardByWord = _handleMoveCursorForwardByWord;
                    _.onMoveCursorForwardByCharacter = _handleMoveCursorForwardByCharacter;
                    return _;
                }
            })(config);
        }
    }
};
export var _handleSetSelection : (selection : lib6.TextSelection) => any = (selection : lib6.TextSelection) : any =>  {
    properties.onSelectionChanged(selection,this,SelectionChangedCause.keyboard);
};
export var _handleMoveCursorForwardByCharacter : (extentSelection : boolean) => any = (extentSelection : boolean) : any =>  {
    let extentOffset : number = properties._textPainter.getOffsetAfter(properties._selection.extentOffset);
    if (extentOffset == null) return;
    let baseOffset : number = !extentSelection ? extentOffset : properties._selection.baseOffset;
    properties.onSelectionChanged(lib6.TextSelection({
        baseOffset : baseOffset,extentOffset : extentOffset}),this,SelectionChangedCause.keyboard);
};
export var _handleMoveCursorBackwardByCharacter : (extentSelection : boolean) => any = (extentSelection : boolean) : any =>  {
    let extentOffset : number = properties._textPainter.getOffsetBefore(properties._selection.extentOffset);
    if (extentOffset == null) return;
    let baseOffset : number = !extentSelection ? extentOffset : properties._selection.baseOffset;
    properties.onSelectionChanged(lib6.TextSelection({
        baseOffset : baseOffset,extentOffset : extentOffset}),this,SelectionChangedCause.keyboard);
};
export var _handleMoveCursorForwardByWord : (extentSelection : boolean) => any = (extentSelection : boolean) : any =>  {
    let currentWord : lib6.TextRange = properties._textPainter.getWordBoundary(properties._selection.extent);
    if (op(Op.EQUALS,currentWord,null)) return;
    let nextWord : lib6.TextRange = _getNextWord(currentWord.end);
    if (op(Op.EQUALS,nextWord,null)) return;
    let baseOffset : number = extentSelection ? properties._selection.baseOffset : nextWord.start;
    properties.onSelectionChanged(lib6.TextSelection({
        baseOffset : baseOffset,extentOffset : nextWord.start}),this,SelectionChangedCause.keyboard);
};
export var _handleMoveCursorBackwardByWord : (extentSelection : boolean) => any = (extentSelection : boolean) : any =>  {
    let currentWord : lib6.TextRange = properties._textPainter.getWordBoundary(properties._selection.extent);
    if (op(Op.EQUALS,currentWord,null)) return;
    let previousWord : lib6.TextRange = _getPreviousWord(op(Op.MINUS,currentWord.start,1));
    if (op(Op.EQUALS,previousWord,null)) return;
    let baseOffset : number = extentSelection ? properties._selection.baseOffset : previousWord.start;
    properties.onSelectionChanged(lib6.TextSelection({
        baseOffset : baseOffset,extentOffset : previousWord.start}),this,SelectionChangedCause.keyboard);
};
export var _getNextWord : (offset : number) => lib6.TextRange = (offset : number) : lib6.TextRange =>  {
    while (true){
        let range : lib6.TextRange = properties._textPainter.getWordBoundary(TextPosition({
            offset : offset}));
        if (op(Op.EQUALS,range,null) || !range.isValid || range.isCollapsed) return null;
        if (!_onlyWhitespace(range)) return range;
        offset = range.end;
    }
};
export var _getPreviousWord : (offset : number) => lib6.TextRange = (offset : number) : lib6.TextRange =>  {
    while (offset >= 0){
        let range : lib6.TextRange = properties._textPainter.getWordBoundary(TextPosition({
            offset : offset}));
        if (op(Op.EQUALS,range,null) || !range.isValid || range.isCollapsed) return null;
        if (!_onlyWhitespace(range)) return range;
        offset = op(Op.MINUS,range.start,1);
    }
    return null;
};
export var _onlyWhitespace : (range : lib6.TextRange) => boolean = (range : lib6.TextRange) : boolean =>  {
    for(let i : number = range.start; i < range.end; i++){
        let codeUnit : number = properties.text.codeUnitAt(i);
        switch (codeUnit) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 160:
            case 5760:
            case 8192:
            case 8193:
            case 8194:
            case 8195:
            case 8196:
            case 8197:
            case 8198:
            case 8199:
            case 8200:
            case 8201:
            case 8202:
            case 8239:
            case 8287:
            case 12288:
                break;
            default:
                return false;
        }
    }
    return true;
};
export var attach : (owner : lib18.PipelineOwner) => any = (owner : lib18.PipelineOwner) : any =>  {
    super.attach(owner);
    properties._offset.addListener(markNeedsPaint);
    properties._showCursor.addListener(markNeedsPaint);
};
export var debugDescribeChildren : () => core.DartList<lib22.DiagnosticsNode> = () : core.DartList<lib22.DiagnosticsNode> =>  {
    return new core.DartList.literal<lib22.DiagnosticsNode>(properties.text.toDiagnosticsNode({
        name : 'text',style : lib22.DiagnosticsTreeStyle.transition}));
};
export var _getMaxScrollExtent : (contentSize : any) => double = (contentSize : any) : double =>  {
    /* TODO (AssertStatementImpl) : assert (hasSize); */;
    switch (properties._viewportAxis) {
        case lib19.Axis.horizontal:
            return math.max(0.0,op(Op.MINUS,contentSize.width,size.width));
        case lib19.Axis.vertical:
            return math.max(0.0,op(Op.MINUS,contentSize.height,size.height));
    }
    return null;
};
export var getEndpointsForSelection : (selection : lib6.TextSelection) => core.DartList<TextSelectionPoint> = (selection : lib6.TextSelection) : core.DartList<TextSelectionPoint> =>  {
    /* TODO (AssertStatementImpl) : assert (constraints != null); */;
    _layoutText(constraints.maxWidth);
    let paintOffset : any = properties._paintOffset;
    if (selection.isCollapsed) {
        let caretOffset : any = properties._textPainter.getOffsetForCaret(selection.extent,properties._caretPrototype);
        let start : any = op(Op.PLUS,op(Op.PLUS,Offset(0.0,properties.preferredLineHeight),caretOffset),paintOffset);
        return new core.DartList.literal<TextSelectionPoint>(TextSelectionPoint(start,null));
    }else {
        let boxes : core.DartList<any> = properties._textPainter.getBoxesForSelection(selection);
        let start : any = op(Op.PLUS,Offset(boxes.first.start,boxes.first.bottom),paintOffset);
        let end : any = op(Op.PLUS,Offset(boxes.last.end,boxes.last.bottom),paintOffset);
        return new core.DartList.literal<TextSelectionPoint>(TextSelectionPoint(start,boxes.first.direction),TextSelectionPoint(end,boxes.last.direction));
    }
};
export var getPositionForPoint : (globalPosition : any) => any = (globalPosition : any) : any =>  {
    _layoutText(constraints.maxWidth);
    globalPosition += op(Op.NEG,properties._paintOffset);
    return properties._textPainter.getPositionForOffset(globalToLocal(globalPosition));
};
export var getLocalRectForCaret : (caretPosition : any) => any = (caretPosition : any) : any =>  {
    _layoutText(constraints.maxWidth);
    let caretOffset : any = properties._textPainter.getOffsetForCaret(caretPosition,properties._caretPrototype);
    let rect : any = Rect.fromLTWH(0.0,0.0,properties.cursorWidth,properties.preferredLineHeight).shift(op(Op.PLUS,caretOffset,properties._paintOffset));
    if (properties._cursorOffset != null) rect = rect.shift(properties._cursorOffset);
    return rect.shift(_getPixelPerfectCursorOffset(rect));
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    _layoutText(new core.DartDouble(double).infinity);
    return properties._textPainter.minIntrinsicWidth;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    _layoutText(new core.DartDouble(double).infinity);
    return properties._textPainter.maxIntrinsicWidth + properties.cursorWidth;
};
export var _preferredHeight : (width : double) => double = (width : double) : double =>  {
    if (properties.maxLines != null) return properties.preferredLineHeight * properties.maxLines;
    if (width == new core.DartDouble(double).infinity) {
        let text : string = properties._textPainter.text.toPlainText();
        let lines : number = 1;
        for(let index : number = 0; index < new core.DartString(text).length; index += 1){
            if (new core.DartString(text).codeUnitAt(index) == 10) lines += 1;
        }
        return properties.preferredLineHeight * lines;
    }
    _layoutText(width);
    return math.max(properties.preferredLineHeight,properties._textPainter.height);
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return _preferredHeight(width);
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return _preferredHeight(width);
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    _layoutText(constraints.maxWidth);
    return properties._textPainter.computeDistanceToActualBaseline(baseline);
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return true;
};
export var handleEvent : (event : lib21.PointerEvent,entry : lib3.BoxHitTestEntry) => any = (event : lib21.PointerEvent,entry : lib3.BoxHitTestEntry) : any =>  {
    if (properties.ignorePointer) return;
    /* TODO (AssertStatementImpl) : assert (debugHandleEvent(event, entry)); */;
    if (is(event, lib21.PointerDownEvent) && properties.onSelectionChanged != null) {
        properties._tap.addPointer(event);
        properties._longPress.addPointer(event);
    }
};
export var handleTapDown : (details : lib10.TapDownDetails) => any = (details : lib10.TapDownDetails) : any =>  {
    properties._lastTapDownPosition = op(Op.MINUS,details.globalPosition,properties._paintOffset);
};
export var _handleTapDown : (details : lib10.TapDownDetails) => any = (details : lib10.TapDownDetails) : any =>  {
    /* TODO (AssertStatementImpl) : assert (!ignorePointer); */;
    handleTapDown(details);
};
export var handleTap : () => any = () : any =>  {
    selectPosition({
        cause : SelectionChangedCause.tap});
};
export var _handleTap : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (!ignorePointer); */;
    handleTap();
};
export var handleDoubleTap : () => any = () : any =>  {
    selectWord({
        cause : SelectionChangedCause.doubleTap});
};
export var handleLongPress : () => any = () : any =>  {
    selectWord({
        cause : SelectionChangedCause.longPress});
};
export var _handleLongPress : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (!ignorePointer); */;
    handleLongPress();
};
export var selectPosition : (_namedArguments? : {cause? : SelectionChangedCause}) => any = (_namedArguments? : {cause? : SelectionChangedCause}) : any =>  {
    let {cause} = Object.assign({
    }, _namedArguments );
    selectPositionAt({
        from : properties._lastTapDownPosition,cause : cause});
};
export var selectPositionAt : (_namedArguments? : {from? : any,to? : any,cause? : SelectionChangedCause}) => any = (_namedArguments? : {from? : any,to? : any,cause? : SelectionChangedCause}) : any =>  {
    let {from,to,cause} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (cause != null); */;
    _layoutText(constraints.maxWidth);
    if (properties.onSelectionChanged != null) {
        let fromPosition : any = properties._textPainter.getPositionForOffset(globalToLocal(op(Op.MINUS,from,properties._paintOffset)));
        let toPosition : any = op(Op.EQUALS,to,null) ? null : properties._textPainter.getPositionForOffset(globalToLocal(op(Op.MINUS,to,properties._paintOffset)));
        properties.onSelectionChanged(lib6.TextSelection({
            baseOffset : fromPosition.offset,extentOffset : (((t)=>(!!t)?t.offset:null)(toPosition) || fromPosition.offset),affinity : fromPosition.affinity}),this,cause);
    }
};
export var selectWord : (_namedArguments? : {cause? : SelectionChangedCause}) => any = (_namedArguments? : {cause? : SelectionChangedCause}) : any =>  {
    let {cause} = Object.assign({
    }, _namedArguments );
    selectWordsInRange({
        from : properties._lastTapDownPosition,cause : cause});
};
export var selectWordsInRange : (_namedArguments? : {from? : any,to? : any,cause? : SelectionChangedCause}) => any = (_namedArguments? : {from? : any,to? : any,cause? : SelectionChangedCause}) : any =>  {
    let {from,to,cause} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (cause != null); */;
    _layoutText(constraints.maxWidth);
    if (properties.onSelectionChanged != null) {
        let firstPosition : any = properties._textPainter.getPositionForOffset(globalToLocal(op(Op.MINUS,from,properties._paintOffset)));
        let firstWord : lib6.TextSelection = _selectWordAtOffset(firstPosition);
        let lastWord : lib6.TextSelection = op(Op.EQUALS,to,null) ? firstWord : _selectWordAtOffset(properties._textPainter.getPositionForOffset(globalToLocal(op(Op.MINUS,to,properties._paintOffset))));
        properties.onSelectionChanged(lib6.TextSelection({
            baseOffset : firstWord.base.offset,extentOffset : lastWord.extent.offset,affinity : firstWord.affinity}),this,cause);
    }
};
export var selectWordEdge : (_namedArguments? : {cause? : SelectionChangedCause}) => any = (_namedArguments? : {cause? : SelectionChangedCause}) : any =>  {
    let {cause} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (cause != null); */;
    _layoutText(constraints.maxWidth);
    /* TODO (AssertStatementImpl) : assert (_lastTapDownPosition != null); */;
    if (properties.onSelectionChanged != null) {
        let position : any = properties._textPainter.getPositionForOffset(globalToLocal(properties._lastTapDownPosition));
        let word : lib6.TextRange = properties._textPainter.getWordBoundary(position);
        if (op(Op.LEQ,op(Op.MINUS,position.offset,word.start),1)) {
            properties.onSelectionChanged(lib6.TextSelection.collapsed({
                offset : word.start,affinity : TextAffinity.downstream}),this,cause);
        }else {
            properties.onSelectionChanged(lib6.TextSelection.collapsed({
                offset : word.end,affinity : TextAffinity.upstream}),this,cause);
        }
    }
};
export var _selectWordAtOffset : (position : any) => lib6.TextSelection = (position : any) : lib6.TextSelection =>  {
    /* TODO (AssertStatementImpl) : assert (_textLayoutLastWidth == constraints.maxWidth); */;
    let word : lib6.TextRange = properties._textPainter.getWordBoundary(position);
    if (op(Op.GEQ,position.offset,word.end)) return lib6.TextSelection.fromPosition(position);
    return lib6.TextSelection({
        baseOffset : word.start,extentOffset : word.end});
};
export var _layoutText : (constraintWidth : double) => any = (constraintWidth : double) : any =>  {
    /* TODO (AssertStatementImpl) : assert (constraintWidth != null); */;
    if (properties._textLayoutLastWidth == constraintWidth) return;
    let caretMargin : double = properties._kCaretGap + properties.cursorWidth;
    let availableWidth : double = math.max(0.0,constraintWidth - caretMargin);
    let maxWidth : double = properties._isMultiline ? availableWidth : new core.DartDouble(double).infinity;
    properties._textPainter.layout({
        minWidth : availableWidth,maxWidth : maxWidth});
    properties._textLayoutLastWidth = constraintWidth;
};
export var performLayout : () => any = () : any =>  {
    _layoutText(constraints.maxWidth);
    properties._caretPrototype = properties._getCaretPrototype;
    properties._selectionRects = null;
    let textPainterSize : any = properties._textPainter.size;
    size = Size(constraints.maxWidth,constraints.constrainHeight(_preferredHeight(constraints.maxWidth)));
    let contentSize : any = Size(op(Op.PLUS,op(Op.PLUS,textPainterSize.width,properties._kCaretGap),properties.cursorWidth),textPainterSize.height);
    properties._maxScrollExtent = _getMaxScrollExtent(contentSize);
    properties.offset.applyViewportDimension(properties._viewportExtent);
    properties.offset.applyContentDimensions(0.0,properties._maxScrollExtent);
};
export var _getPixelPerfectCursorOffset : (caretRect : any) => any = (caretRect : any) : any =>  {
    let caretPosition : any = localToGlobal(caretRect.topLeft);
    let pixelMultiple : double = 1.0 / properties._devicePixelRatio;
    let quotientX : number = (op(Op.DIVIDE,caretPosition.dx,pixelMultiple)).round();
    let quotientY : number = (op(Op.DIVIDE,caretPosition.dy,pixelMultiple)).round();
    let pixelPerfectOffsetX : double = quotientX * pixelMultiple - caretPosition.dx;
    let pixelPerfectOffsetY : double = quotientY * pixelMultiple - caretPosition.dy;
    return Offset(pixelPerfectOffsetX,pixelPerfectOffsetY);
};
export var _paintCaret : (canvas : any,effectiveOffset : any,textPosition : any) => any = (canvas : any,effectiveOffset : any,textPosition : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_textLayoutLastWidth == constraints.maxWidth); */;
    let caretOffset : any = properties._textPainter.getOffsetForCaret(textPosition,properties._caretPrototype);
    let paint : any = ((_) : any =>  {
        {
            _.color = properties._floatingCursorOn ? properties.backgroundCursorColor : properties._cursorColor;
            return _;
        }
    })(Paint());
    let caretRect : any = properties._caretPrototype.shift(op(Op.PLUS,caretOffset,effectiveOffset));
    if (properties._cursorOffset != null) caretRect = caretRect.shift(properties._cursorOffset);
    caretRect = caretRect.shift(_getPixelPerfectCursorOffset(caretRect));
    if (op(Op.EQUALS,properties.cursorRadius,null)) {
        canvas.drawRect(caretRect,paint);
    }else {
        let caretRRect : any = RRect.fromRectAndRadius(caretRect,properties.cursorRadius);
        canvas.drawRRect(caretRRect,paint);
    }
    if (caretRect != properties._lastCaretRect) {
        properties._lastCaretRect = caretRect;
        if (properties.onCaretChanged != null) properties.onCaretChanged(caretRect);
    }
};
export var setFloatingCursor : (state : lib12.FloatingCursorDragState,boundedOffset : any,lastTextPosition : any,_namedArguments? : {resetLerpValue? : double}) => any = (state : lib12.FloatingCursorDragState,boundedOffset : any,lastTextPosition : any,_namedArguments? : {resetLerpValue? : double}) : any =>  {
    let {resetLerpValue} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (state != null); */;
    /* TODO (AssertStatementImpl) : assert (boundedOffset != null); */;
    /* TODO (AssertStatementImpl) : assert (lastTextPosition != null); */;
    if (op(Op.EQUALS,state,lib12.FloatingCursorDragState.Start)) {
        properties._relativeOrigin = new bare.createInstance(any,null,0,0);
        properties._previousOffset = null;
        properties._resetOriginOnBottom = false;
        properties._resetOriginOnTop = false;
        properties._resetOriginOnRight = false;
        properties._resetOriginOnBottom = false;
    }
    properties._floatingCursorOn = state != lib12.FloatingCursorDragState.End;
    properties._resetFloatingCursorAnimationValue = resetLerpValue;
    if (properties._floatingCursorOn) {
        properties._floatingCursorOffset = boundedOffset;
        properties._floatingCursorTextPosition = lastTextPosition;
    }
    markNeedsPaint();
};
export var _paintFloatingCaret : (canvas : any,effectiveOffset : any) => any = (canvas : any,effectiveOffset : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_textLayoutLastWidth == constraints.maxWidth); */;
    /* TODO (AssertStatementImpl) : assert (_floatingCursorOn); */;
    let paint : any = ((_) : any =>  {
        {
            _.color = properties._cursorColor.withOpacity(0.75);
            return _;
        }
    })(Paint());
    let sizeAdjustmentX : double = properties._kFloatingCaretSizeIncrease.dx;
    let sizeAdjustmentY : double = properties._kFloatingCaretSizeIncrease.dy;
    if (properties._resetFloatingCursorAnimationValue != null) {
        sizeAdjustmentX = ui.lerpDouble(sizeAdjustmentX,0,properties._resetFloatingCursorAnimationValue);
        sizeAdjustmentY = ui.lerpDouble(sizeAdjustmentY,0,properties._resetFloatingCursorAnimationValue);
    }
    let floatingCaretPrototype : any = Rect.fromLTRB(op(Op.MINUS,properties._caretPrototype.left,sizeAdjustmentX),op(Op.MINUS,properties._caretPrototype.top,sizeAdjustmentY),op(Op.PLUS,properties._caretPrototype.right,sizeAdjustmentX),op(Op.PLUS,properties._caretPrototype.bottom,sizeAdjustmentY));
    let caretRect : any = floatingCaretPrototype.shift(effectiveOffset);
    let floatingCursorRadius : any = Radius.circular(properties._kFloatingCaretRadius);
    let caretRRect : any = RRect.fromRectAndRadius(caretRect,floatingCursorRadius);
    canvas.drawRRect(caretRRect,paint);
};
export var calculateBoundedFloatingCursorOffset : (rawCursorOffset : any) => any = (rawCursorOffset : any) : any =>  {
    let deltaPosition : any = new bare.createInstance(any,null,0,0);
    let topBound : double = -properties.floatingCursorAddedMargin.top;
    let bottomBound : double = properties._textPainter.height - properties.preferredLineHeight + properties.floatingCursorAddedMargin.bottom;
    let leftBound : double = -properties.floatingCursorAddedMargin.left;
    let rightBound : double = properties._textPainter.width + properties.floatingCursorAddedMargin.right;
    if (properties._previousOffset != null) deltaPosition = op(Op.MINUS,rawCursorOffset,properties._previousOffset);
    if (properties._resetOriginOnLeft && op(Op.GT,deltaPosition.dx,0)) {
        properties._relativeOrigin = Offset(op(Op.MINUS,rawCursorOffset.dx,leftBound),properties._relativeOrigin.dy);
        properties._resetOriginOnLeft = false;
    }else if (properties._resetOriginOnRight && op(Op.LT,deltaPosition.dx,0)) {
        properties._relativeOrigin = Offset(op(Op.MINUS,rawCursorOffset.dx,rightBound),properties._relativeOrigin.dy);
        properties._resetOriginOnRight = false;
    }
    if (properties._resetOriginOnTop && op(Op.GT,deltaPosition.dy,0)) {
        properties._relativeOrigin = Offset(properties._relativeOrigin.dx,op(Op.MINUS,rawCursorOffset.dy,topBound));
        properties._resetOriginOnTop = false;
    }else if (properties._resetOriginOnBottom && op(Op.LT,deltaPosition.dy,0)) {
        properties._relativeOrigin = Offset(properties._relativeOrigin.dx,op(Op.MINUS,rawCursorOffset.dy,bottomBound));
        properties._resetOriginOnBottom = false;
    }
    let currentX : double = op(Op.MINUS,rawCursorOffset.dx,properties._relativeOrigin.dx);
    let currentY : double = op(Op.MINUS,rawCursorOffset.dy,properties._relativeOrigin.dy);
    let adjustedX : double = math.min(math.max(currentX,leftBound),rightBound);
    let adjustedY : double = math.min(math.max(currentY,topBound),bottomBound);
    let adjustedOffset : any = Offset(adjustedX,adjustedY);
    if (currentX < leftBound && op(Op.LT,deltaPosition.dx,0)) {
        properties._resetOriginOnLeft = true;
    }else if (currentX > rightBound && op(Op.GT,deltaPosition.dx,0)) properties._resetOriginOnRight = true;
    if (currentY < topBound && op(Op.LT,deltaPosition.dy,0)) properties._resetOriginOnTop = true;else if (currentY > bottomBound && op(Op.GT,deltaPosition.dy,0)) properties._resetOriginOnBottom = true;
    properties._previousOffset = rawCursorOffset;
    return adjustedOffset;
};
export var _paintSelection : (canvas : any,effectiveOffset : any) => any = (canvas : any,effectiveOffset : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_textLayoutLastWidth == constraints.maxWidth); */;
    /* TODO (AssertStatementImpl) : assert (_selectionRects != null); */;
    let paint : any = ((_) : any =>  {
        {
            _.color = properties._selectionColor;
            return _;
        }
    })(Paint());
    for(let box of properties._selectionRects) canvas.drawRect(box.toRect().shift(effectiveOffset),paint);
};
export var _paintContents : (context : lib18.PaintingContext,offset : any) => any = (context : lib18.PaintingContext,offset : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_textLayoutLastWidth == constraints.maxWidth); */;
    let effectiveOffset : any = op(Op.PLUS,offset,properties._paintOffset);
    let showSelection : boolean = false;
    let showCaret : boolean = false;
    if (properties._selection != null && !properties._floatingCursorOn) {
        if (properties._selection.isCollapsed && properties._showCursor.value && properties.cursorColor != null) showCaret = true;else if (!properties._selection.isCollapsed && properties._selectionColor != null) showSelection = true;
    }
    if (showSelection) {
        properties._selectionRects = ( properties._selectionRects ) || ( properties._textPainter.getBoxesForSelection(properties._selection) );
        _paintSelection(context.canvas,effectiveOffset);
    }
    if (properties.paintCursorAboveText) properties._textPainter.paint(context.canvas,effectiveOffset);
    if (showCaret) _paintCaret(context.canvas,effectiveOffset,properties._selection.extent);
    if (!properties.paintCursorAboveText) properties._textPainter.paint(context.canvas,effectiveOffset);
    if (properties._floatingCursorOn) {
        if (properties._resetFloatingCursorAnimationValue == null) _paintCaret(context.canvas,effectiveOffset,properties._floatingCursorTextPosition);
        _paintFloatingCaret(context.canvas,properties._floatingCursorOffset);
    }
};
export var detach : () => any = () : any =>  {
    properties._offset.removeListener(markNeedsPaint);
    properties._showCursor.removeListener(markNeedsPaint);
    if (properties._listenerAttached) lib13.RawKeyboard.instance.removeListener(_handleKeyEvent);
    super.detach();
};
export namespace TextSelectionPoint {
    export type Constructors = 'TextSelectionPoint';
    export type Interface = Omit<TextSelectionPoint, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextSelectionPoint {
    constructor(point : any,direction : any) {
    }
    @defaultConstructor
    TextSelectionPoint(point : any,direction : any) {
        this.assert = assert;
        this.point = point;
        this.direction = direction;
    }
     : any;

    point : any;

    direction : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        switch (this.direction) {
            case TextDirection.ltr:
                return `${this.point}-ltr`;
            case TextDirection.rtl:
                return `${this.point}-rtl`;
        }
        return `${this.point}`;
    }
}

export enum SelectionChangedCause {
    tap,
    doubleTap,
    longPress,
    forcePress,
    keyboard
}

export namespace RenderEditable {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderEditable';
    export type Interface = Omit<RenderEditable, Constructors>;
}
@DartClass
export class RenderEditable extends lib3.RenderBox {
    constructor(_namedArguments? : {text? : lib4.TextSpan,textDirection? : any,textAlign? : any,cursorColor? : any,backgroundCursorColor? : any,showCursor? : lib5.ValueNotifier<boolean>,hasFocus? : boolean,maxLines? : number,selectionColor? : any,textScaleFactor? : double,selection? : lib6.TextSelection,offset? : lib7.ViewportOffset,onSelectionChanged? : any,onCaretChanged? : any,ignorePointer? : any,obscureText? : boolean,locale? : any,cursorWidth? : double,cursorRadius? : any,paintCursorAboveText? : boolean,cursorOffset? : any,devicePixelRatio? : double,enableInteractiveSelection? : boolean,floatingCursorAddedMargin? : lib8.EdgeInsets,textSelectionDelegate? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderEditable(_namedArguments? : {text? : lib4.TextSpan,textDirection? : any,textAlign? : any,cursorColor? : any,backgroundCursorColor? : any,showCursor? : lib5.ValueNotifier<boolean>,hasFocus? : boolean,maxLines? : number,selectionColor? : any,textScaleFactor? : double,selection? : lib6.TextSelection,offset? : lib7.ViewportOffset,onSelectionChanged? : any,onCaretChanged? : any,ignorePointer? : any,obscureText? : boolean,locale? : any,cursorWidth? : double,cursorRadius? : any,paintCursorAboveText? : boolean,cursorOffset? : any,devicePixelRatio? : double,enableInteractiveSelection? : boolean,floatingCursorAddedMargin? : lib8.EdgeInsets,textSelectionDelegate? : any}) {
        let {text,textDirection,textAlign,cursorColor,backgroundCursorColor,showCursor,hasFocus,maxLines,selectionColor,textScaleFactor,selection,offset,onSelectionChanged,onCaretChanged,ignorePointer,obscureText,locale,cursorWidth,cursorRadius,paintCursorAboveText,cursorOffset,devicePixelRatio,enableInteractiveSelection,floatingCursorAddedMargin,textSelectionDelegate} = Object.assign({
            "textAlign" : TextAlign.start,
            "maxLines" : 1,
            "textScaleFactor" : 1.0,
            "ignorePointer" : false,
            "obscureText" : false,
            "cursorWidth" : 1.0,
            "paintCursorAboveText" : false,
            "devicePixelRatio" : 1.0,
            "floatingCursorAddedMargin" : new lib8.EdgeInsets.fromLTRB(4,4,4,5)}, _namedArguments );
        this._textPainter = lib9.TextPainter({
            text : properties.text,textAlign : properties.textAlign,textDirection : properties.textDirection,textScaleFactor : properties.textScaleFactor,locale : properties.locale});
        this._cursorColor = properties.cursorColor;
        this._backgroundCursorColor = properties.backgroundCursorColor;
        this._showCursor = (properties.showCursor || lib5.ValueNotifier(false));
        this._hasFocus = (properties.hasFocus || false);
        this._maxLines = properties.maxLines;
        this._selectionColor = properties.selectionColor;
        this._selection = properties.selection;
        this._offset = properties.offset;
        this._cursorWidth = properties.cursorWidth;
        this._cursorRadius = properties.cursorRadius;
        this._paintCursorOnTop = properties.paintCursorAboveText;
        this._cursorOffset = properties.cursorOffset;
        this._floatingCursorAddedMargin = properties.floatingCursorAddedMargin;
        this._enableInteractiveSelection = properties.enableInteractiveSelection;
        this._devicePixelRatio = properties.devicePixelRatio;
        this._obscureText = properties.obscureText;
        this._tap = ((_) : any =>  {
            {
                _.onTapDown = _handleTapDown;
                _.onTap = _handleTap;
                return _;
            }
        })(lib10.TapGestureRecognizer({
            debugOwner : this}));
        this._longPress = ((_) : any =>  {
            {
                _.onLongPress = _handleLongPress;
                return _;
            }
        })(lib11.LongPressGestureRecognizer({
            debugOwner : this}));
        this.assert = assert;
        this.onSelectionChanged = onSelectionChanged;
        this.onCaretChanged = onCaretChanged;
        this.ignorePointer = ignorePointer;
        this.textSelectionDelegate = textSelectionDelegate;
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

     : any;

     : any;

     : any;

    _textPainter;
    _cursorColor;
    _backgroundCursorColor;
    _showCursor;
    _hasFocus;
    _maxLines;
    _selectionColor;
    _selection;
    _offset;
    _cursorWidth;
    _cursorRadius;
    _paintCursorOnTop;
    _cursorOffset;
    _floatingCursorAddedMargin;
    _enableInteractiveSelection;
    _devicePixelRatio;
    _obscureText;

     : any;

     : any;

     : any;

    _tap;

    _longPress;

}

export class properties {
    private static __$_backgroundCursorColor : any;
    static get _backgroundCursorColor() : any { 
        return this.__$_backgroundCursorColor;
    }
    static set _backgroundCursorColor(__$value : any)  { 
        this.__$_backgroundCursorColor = __$value;
    }

    private static __$_kCaretHeightOffset : double;
    static get _kCaretHeightOffset() : double { 
        if (this.__$_kCaretHeightOffset===undefined) {
            this.__$_kCaretHeightOffset = 2.0;
        }
        return this.__$_kCaretHeightOffset;
    }
    static set _kCaretHeightOffset(__$value : double)  { 
        this.__$_kCaretHeightOffset = __$value;
    }

    private static __$_kFloatingCaretSizeIncrease : any;
    static get _kFloatingCaretSizeIncrease() : any { 
        if (this.__$_kFloatingCaretSizeIncrease===undefined) {
            this.__$_kFloatingCaretSizeIncrease = Offset(0.5,1.0);
        }
        return this.__$_kFloatingCaretSizeIncrease;
    }
    static set _kFloatingCaretSizeIncrease(__$value : any)  { 
        this.__$_kFloatingCaretSizeIncrease = __$value;
    }

    private static __$_kFloatingCaretRadius : double;
    static get _kFloatingCaretRadius() : double { 
        if (this.__$_kFloatingCaretRadius===undefined) {
            this.__$_kFloatingCaretRadius = 1.0;
        }
        return this.__$_kFloatingCaretRadius;
    }
    static set _kFloatingCaretRadius(__$value : double)  { 
        this.__$_kFloatingCaretRadius = __$value;
    }

    private static __$obscuringCharacter : string;
    static get obscuringCharacter() : string { 
        if (this.__$obscuringCharacter===undefined) {
            this.__$obscuringCharacter = '•';
        }
        return this.__$obscuringCharacter;
    }
    static set obscuringCharacter(__$value : string)  { 
        this.__$obscuringCharacter = __$value;
    }

    private static __$onSelectionChanged : (selection : lib6.TextSelection,renderObject : RenderEditable,cause : SelectionChangedCause) => any;
    static get onSelectionChanged() : (selection : lib6.TextSelection,renderObject : RenderEditable,cause : SelectionChangedCause) => any { 
        return this.__$onSelectionChanged;
    }
    static set onSelectionChanged(__$value : (selection : lib6.TextSelection,renderObject : RenderEditable,cause : SelectionChangedCause) => any)  { 
        this.__$onSelectionChanged = __$value;
    }

    private static __$_textLayoutLastWidth : double;
    static get _textLayoutLastWidth() : double { 
        return this.__$_textLayoutLastWidth;
    }
    static set _textLayoutLastWidth(__$value : double)  { 
        this.__$_textLayoutLastWidth = __$value;
    }

    private static __$onCaretChanged : (caretRect : any) => any;
    static get onCaretChanged() : (caretRect : any) => any { 
        return this.__$onCaretChanged;
    }
    static set onCaretChanged(__$value : (caretRect : any) => any)  { 
        this.__$onCaretChanged = __$value;
    }

    private static __$ignorePointer : boolean;
    static get ignorePointer() : boolean { 
        return this.__$ignorePointer;
    }
    static set ignorePointer(__$value : boolean)  { 
        this.__$ignorePointer = __$value;
    }

    static get devicePixelRatio() : double {
        return properties._devicePixelRatio;
    }
    private static __$_devicePixelRatio : double;
    static get _devicePixelRatio() : double { 
        return this.__$_devicePixelRatio;
    }
    static set _devicePixelRatio(__$value : double)  { 
        this.__$_devicePixelRatio = __$value;
    }

    static set devicePixelRatio(value : double) {
        if (properties.devicePixelRatio == value) return;
        properties._devicePixelRatio = value;
        markNeedsTextLayout();
    }
    static get obscureText() : boolean {
        return properties._obscureText;
    }
    private static __$_obscureText : boolean;
    static get _obscureText() : boolean { 
        return this.__$_obscureText;
    }
    static set _obscureText(__$value : boolean)  { 
        this.__$_obscureText = __$value;
    }

    static set obscureText(value : boolean) {
        if (properties._obscureText == value) return;
        properties._obscureText = value;
        markNeedsSemanticsUpdate();
    }
    private static __$textSelectionDelegate : lib12.TextSelectionDelegate;
    static get textSelectionDelegate() : lib12.TextSelectionDelegate { 
        return this.__$textSelectionDelegate;
    }
    static set textSelectionDelegate(__$value : lib12.TextSelectionDelegate)  { 
        this.__$textSelectionDelegate = __$value;
    }

    private static __$_lastCaretRect : any;
    static get _lastCaretRect() : any { 
        return this.__$_lastCaretRect;
    }
    static set _lastCaretRect(__$value : any)  { 
        this.__$_lastCaretRect = __$value;
    }

    private static __$_kLeftArrowCode : number;
    static get _kLeftArrowCode() : number { 
        if (this.__$_kLeftArrowCode===undefined) {
            this.__$_kLeftArrowCode = 21;
        }
        return this.__$_kLeftArrowCode;
    }
    static set _kLeftArrowCode(__$value : number)  { 
        this.__$_kLeftArrowCode = __$value;
    }

    private static __$_kRightArrowCode : number;
    static get _kRightArrowCode() : number { 
        if (this.__$_kRightArrowCode===undefined) {
            this.__$_kRightArrowCode = 22;
        }
        return this.__$_kRightArrowCode;
    }
    static set _kRightArrowCode(__$value : number)  { 
        this.__$_kRightArrowCode = __$value;
    }

    private static __$_kUpArrowCode : number;
    static get _kUpArrowCode() : number { 
        if (this.__$_kUpArrowCode===undefined) {
            this.__$_kUpArrowCode = 19;
        }
        return this.__$_kUpArrowCode;
    }
    static set _kUpArrowCode(__$value : number)  { 
        this.__$_kUpArrowCode = __$value;
    }

    private static __$_kDownArrowCode : number;
    static get _kDownArrowCode() : number { 
        if (this.__$_kDownArrowCode===undefined) {
            this.__$_kDownArrowCode = 20;
        }
        return this.__$_kDownArrowCode;
    }
    static set _kDownArrowCode(__$value : number)  { 
        this.__$_kDownArrowCode = __$value;
    }

    private static __$_kXKeyCode : number;
    static get _kXKeyCode() : number { 
        if (this.__$_kXKeyCode===undefined) {
            this.__$_kXKeyCode = 52;
        }
        return this.__$_kXKeyCode;
    }
    static set _kXKeyCode(__$value : number)  { 
        this.__$_kXKeyCode = __$value;
    }

    private static __$_kCKeyCode : number;
    static get _kCKeyCode() : number { 
        if (this.__$_kCKeyCode===undefined) {
            this.__$_kCKeyCode = 31;
        }
        return this.__$_kCKeyCode;
    }
    static set _kCKeyCode(__$value : number)  { 
        this.__$_kCKeyCode = __$value;
    }

    private static __$_kVKeyCode : number;
    static get _kVKeyCode() : number { 
        if (this.__$_kVKeyCode===undefined) {
            this.__$_kVKeyCode = 50;
        }
        return this.__$_kVKeyCode;
    }
    static set _kVKeyCode(__$value : number)  { 
        this.__$_kVKeyCode = __$value;
    }

    private static __$_kAKeyCode : number;
    static get _kAKeyCode() : number { 
        if (this.__$_kAKeyCode===undefined) {
            this.__$_kAKeyCode = 29;
        }
        return this.__$_kAKeyCode;
    }
    static set _kAKeyCode(__$value : number)  { 
        this.__$_kAKeyCode = __$value;
    }

    private static __$_kDelKeyCode : number;
    static get _kDelKeyCode() : number { 
        if (this.__$_kDelKeyCode===undefined) {
            this.__$_kDelKeyCode = 112;
        }
        return this.__$_kDelKeyCode;
    }
    static set _kDelKeyCode(__$value : number)  { 
        this.__$_kDelKeyCode = __$value;
    }

    private static __$_extentOffset : number;
    static get _extentOffset() : number { 
        if (this.__$_extentOffset===undefined) {
            this.__$_extentOffset = -1;
        }
        return this.__$_extentOffset;
    }
    static set _extentOffset(__$value : number)  { 
        this.__$_extentOffset = __$value;
    }

    private static __$_baseOffset : number;
    static get _baseOffset() : number { 
        if (this.__$_baseOffset===undefined) {
            this.__$_baseOffset = -1;
        }
        return this.__$_baseOffset;
    }
    static set _baseOffset(__$value : number)  { 
        this.__$_baseOffset = __$value;
    }

    private static __$_previousCursorLocation : number;
    static get _previousCursorLocation() : number { 
        if (this.__$_previousCursorLocation===undefined) {
            this.__$_previousCursorLocation = -1;
        }
        return this.__$_previousCursorLocation;
    }
    static set _previousCursorLocation(__$value : number)  { 
        this.__$_previousCursorLocation = __$value;
    }

    private static __$_resetCursor : boolean;
    static get _resetCursor() : boolean { 
        if (this.__$_resetCursor===undefined) {
            this.__$_resetCursor = false;
        }
        return this.__$_resetCursor;
    }
    static set _resetCursor(__$value : boolean)  { 
        this.__$_resetCursor = __$value;
    }

    private static __$_kShiftMask : number;
    static get _kShiftMask() : number { 
        if (this.__$_kShiftMask===undefined) {
            this.__$_kShiftMask = 1;
        }
        return this.__$_kShiftMask;
    }
    static set _kShiftMask(__$value : number)  { 
        this.__$_kShiftMask = __$value;
    }

    private static __$_kControlMask : number;
    static get _kControlMask() : number { 
        if (this.__$_kControlMask===undefined) {
            this.__$_kControlMask = 1 << 12;
        }
        return this.__$_kControlMask;
    }
    static set _kControlMask(__$value : number)  { 
        this.__$_kControlMask = __$value;
    }

    private static __$void : any;
    static get void() : any { 
        return this.__$void;
    }
    static set void(__$value : any)  { 
        this.__$void = __$value;
    }

    static get text() : lib4.TextSpan {
        return properties._textPainter.text;
    }
    private static __$_textPainter : lib9.TextPainter;
    static get _textPainter() : lib9.TextPainter { 
        return this.__$_textPainter;
    }
    static set _textPainter(__$value : lib9.TextPainter)  { 
        this.__$_textPainter = __$value;
    }

    static set text(value : lib4.TextSpan) {
        if (op(Op.EQUALS,properties._textPainter.text,value)) return;
        properties._textPainter.text = value;
        markNeedsTextLayout();
        markNeedsSemanticsUpdate();
    }
    static get textAlign() : any {
        return properties._textPainter.textAlign;
    }
    static set textAlign(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._textPainter.textAlign,value)) return;
        properties._textPainter.textAlign = value;
        markNeedsPaint();
    }
    static get textDirection() : any {
        return properties._textPainter.textDirection;
    }
    static set textDirection(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._textPainter.textDirection,value)) return;
        properties._textPainter.textDirection = value;
        markNeedsTextLayout();
        markNeedsSemanticsUpdate();
    }
    static get locale() : any {
        return properties._textPainter.locale;
    }
    static set locale(value : any) {
        if (op(Op.EQUALS,properties._textPainter.locale,value)) return;
        properties._textPainter.locale = value;
        markNeedsTextLayout();
    }
    static get cursorColor() : any {
        return properties._cursorColor;
    }
    private static __$_cursorColor : any;
    static get _cursorColor() : any { 
        return this.__$_cursorColor;
    }
    static set _cursorColor(__$value : any)  { 
        this.__$_cursorColor = __$value;
    }

    static set cursorColor(value : any) {
        if (op(Op.EQUALS,properties._cursorColor,value)) return;
        properties._cursorColor = value;
        markNeedsPaint();
    }
    static get backgroundCursorColor() : any {
        return properties._backgroundCursorColor;
    }
    private static __$_kCaretGap : double;
    static get _kCaretGap() : double { 
        if (this.__$_kCaretGap===undefined) {
            this.__$_kCaretGap = 1.0;
        }
        return this.__$_kCaretGap;
    }
    static set _kCaretGap(__$value : double)  { 
        this.__$_kCaretGap = __$value;
    }

    static set backgroundCursorColor(value : any) {
        if (op(Op.EQUALS,properties.backgroundCursorColor,value)) return;
        properties._backgroundCursorColor = value;
        markNeedsPaint();
    }
    static get showCursor() : lib5.ValueNotifier<boolean> {
        return properties._showCursor;
    }
    private static __$_showCursor : lib5.ValueNotifier<boolean>;
    static get _showCursor() : lib5.ValueNotifier<boolean> { 
        return this.__$_showCursor;
    }
    static set _showCursor(__$value : lib5.ValueNotifier<boolean>)  { 
        this.__$_showCursor = __$value;
    }

    static set showCursor(value : lib5.ValueNotifier<boolean>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._showCursor,value)) return;
        if (attached) properties._showCursor.removeListener(markNeedsPaint);
        properties._showCursor = value;
        if (attached) properties._showCursor.addListener(markNeedsPaint);
        markNeedsPaint();
    }
    static get hasFocus() : boolean {
        return properties._hasFocus;
    }
    private static __$_hasFocus : boolean;
    static get _hasFocus() : boolean { 
        return this.__$_hasFocus;
    }
    static set _hasFocus(__$value : boolean)  { 
        this.__$_hasFocus = __$value;
    }

    private static __$_listenerAttached : boolean;
    static get _listenerAttached() : boolean { 
        if (this.__$_listenerAttached===undefined) {
            this.__$_listenerAttached = false;
        }
        return this.__$_listenerAttached;
    }
    static set _listenerAttached(__$value : boolean)  { 
        this.__$_listenerAttached = __$value;
    }

    static set hasFocus(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._hasFocus == value) return;
        properties._hasFocus = value;
        if (properties._hasFocus) {
            /* TODO (AssertStatementImpl) : assert (!_listenerAttached); */;
            lib13.RawKeyboard.instance.addListener(_handleKeyEvent);
            properties._listenerAttached = true;
        }else {
            /* TODO (AssertStatementImpl) : assert (_listenerAttached); */;
            lib13.RawKeyboard.instance.removeListener(_handleKeyEvent);
            properties._listenerAttached = false;
        }
        markNeedsSemanticsUpdate();
    }
    static get maxLines() : number {
        return properties._maxLines;
    }
    private static __$_maxLines : number;
    static get _maxLines() : number { 
        return this.__$_maxLines;
    }
    static set _maxLines(__$value : number)  { 
        this.__$_maxLines = __$value;
    }

    static set maxLines(value : number) {
        /* TODO (AssertStatementImpl) : assert (value == null || value > 0); */;
        if (properties.maxLines == value) return;
        properties._maxLines = value;
        markNeedsTextLayout();
    }
    static get selectionColor() : any {
        return properties._selectionColor;
    }
    private static __$_selectionColor : any;
    static get _selectionColor() : any { 
        return this.__$_selectionColor;
    }
    static set _selectionColor(__$value : any)  { 
        this.__$_selectionColor = __$value;
    }

    static set selectionColor(value : any) {
        if (op(Op.EQUALS,properties._selectionColor,value)) return;
        properties._selectionColor = value;
        markNeedsPaint();
    }
    static get textScaleFactor() : double {
        return properties._textPainter.textScaleFactor;
    }
    static set textScaleFactor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._textPainter.textScaleFactor == value) return;
        properties._textPainter.textScaleFactor = value;
        markNeedsTextLayout();
    }
    private static __$_selectionRects : core.DartList<any>;
    static get _selectionRects() : core.DartList<any> { 
        return this.__$_selectionRects;
    }
    static set _selectionRects(__$value : core.DartList<any>)  { 
        this.__$_selectionRects = __$value;
    }

    static get selection() : lib6.TextSelection {
        return properties._selection;
    }
    private static __$_selection : lib6.TextSelection;
    static get _selection() : lib6.TextSelection { 
        return this.__$_selection;
    }
    static set _selection(__$value : lib6.TextSelection)  { 
        this.__$_selection = __$value;
    }

    static set selection(value : lib6.TextSelection) {
        if (op(Op.EQUALS,properties._selection,value)) return;
        properties._selection = value;
        properties._selectionRects = null;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    static get offset() : lib7.ViewportOffset {
        return properties._offset;
    }
    private static __$_offset : lib7.ViewportOffset;
    static get _offset() : lib7.ViewportOffset { 
        return this.__$_offset;
    }
    static set _offset(__$value : lib7.ViewportOffset)  { 
        this.__$_offset = __$value;
    }

    static set offset(value : lib7.ViewportOffset) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._offset,value)) return;
        if (attached) properties._offset.removeListener(markNeedsPaint);
        properties._offset = value;
        if (attached) properties._offset.addListener(markNeedsPaint);
        markNeedsLayout();
    }
    static get cursorWidth() : double {
        return properties._cursorWidth;
    }
    private static __$_cursorWidth : double;
    static get _cursorWidth() : double { 
        if (this.__$_cursorWidth===undefined) {
            this.__$_cursorWidth = 1.0;
        }
        return this.__$_cursorWidth;
    }
    static set _cursorWidth(__$value : double)  { 
        this.__$_cursorWidth = __$value;
    }

    static set cursorWidth(value : double) {
        if (properties._cursorWidth == value) return;
        properties._cursorWidth = value;
        markNeedsLayout();
    }
    static get paintCursorAboveText() : boolean {
        return properties._paintCursorOnTop;
    }
    private static __$_paintCursorOnTop : boolean;
    static get _paintCursorOnTop() : boolean { 
        return this.__$_paintCursorOnTop;
    }
    static set _paintCursorOnTop(__$value : boolean)  { 
        this.__$_paintCursorOnTop = __$value;
    }

    static set paintCursorAboveText(value : boolean) {
        if (properties._paintCursorOnTop == value) return;
        properties._paintCursorOnTop = value;
        markNeedsLayout();
    }
    static get cursorOffset() : any {
        return properties._cursorOffset;
    }
    private static __$_cursorOffset : any;
    static get _cursorOffset() : any { 
        return this.__$_cursorOffset;
    }
    static set _cursorOffset(__$value : any)  { 
        this.__$_cursorOffset = __$value;
    }

    static set cursorOffset(value : any) {
        if (op(Op.EQUALS,properties._cursorOffset,value)) return;
        properties._cursorOffset = value;
        markNeedsLayout();
    }
    static get cursorRadius() : any {
        return properties._cursorRadius;
    }
    private static __$_cursorRadius : any;
    static get _cursorRadius() : any { 
        return this.__$_cursorRadius;
    }
    static set _cursorRadius(__$value : any)  { 
        this.__$_cursorRadius = __$value;
    }

    static set cursorRadius(value : any) {
        if (op(Op.EQUALS,properties._cursorRadius,value)) return;
        properties._cursorRadius = value;
        markNeedsPaint();
    }
    static get floatingCursorAddedMargin() : lib8.EdgeInsets {
        return properties._floatingCursorAddedMargin;
    }
    private static __$_floatingCursorAddedMargin : lib8.EdgeInsets;
    static get _floatingCursorAddedMargin() : lib8.EdgeInsets { 
        return this.__$_floatingCursorAddedMargin;
    }
    static set _floatingCursorAddedMargin(__$value : lib8.EdgeInsets)  { 
        this.__$_floatingCursorAddedMargin = __$value;
    }

    static set floatingCursorAddedMargin(value : lib8.EdgeInsets) {
        if (op(Op.EQUALS,properties._floatingCursorAddedMargin,value)) return;
        properties._floatingCursorAddedMargin = value;
        markNeedsPaint();
    }
    private static __$_floatingCursorOn : boolean;
    static get _floatingCursorOn() : boolean { 
        if (this.__$_floatingCursorOn===undefined) {
            this.__$_floatingCursorOn = false;
        }
        return this.__$_floatingCursorOn;
    }
    static set _floatingCursorOn(__$value : boolean)  { 
        this.__$_floatingCursorOn = __$value;
    }

    private static __$_floatingCursorOffset : any;
    static get _floatingCursorOffset() : any { 
        return this.__$_floatingCursorOffset;
    }
    static set _floatingCursorOffset(__$value : any)  { 
        this.__$_floatingCursorOffset = __$value;
    }

    private static __$_floatingCursorTextPosition : any;
    static get _floatingCursorTextPosition() : any { 
        return this.__$_floatingCursorTextPosition;
    }
    static set _floatingCursorTextPosition(__$value : any)  { 
        this.__$_floatingCursorTextPosition = __$value;
    }

    static get enableInteractiveSelection() : boolean {
        return properties._enableInteractiveSelection;
    }
    private static __$_enableInteractiveSelection : boolean;
    static get _enableInteractiveSelection() : boolean { 
        return this.__$_enableInteractiveSelection;
    }
    static set _enableInteractiveSelection(__$value : boolean)  { 
        this.__$_enableInteractiveSelection = __$value;
    }

    static set enableInteractiveSelection(value : boolean) {
        if (properties._enableInteractiveSelection == value) return;
        properties._enableInteractiveSelection = value;
        markNeedsTextLayout();
        markNeedsSemanticsUpdate();
    }
    static get selectionEnabled() : boolean {
        return (properties.enableInteractiveSelection || !properties.obscureText);
    }
    static get _isMultiline() : boolean {
        return properties.maxLines != 1;
    }
    static get _viewportAxis() : lib19.Axis {
        return properties._isMultiline ? lib19.Axis.vertical : lib19.Axis.horizontal;
    }
    static get _paintOffset() : any {
        switch (properties._viewportAxis) {
            case lib19.Axis.horizontal:
                return Offset(-properties.offset.pixels,0.0);
            case lib19.Axis.vertical:
                return Offset(0.0,-properties.offset.pixels);
        }
        return null;
    }
    static get _viewportExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        switch (properties._viewportAxis) {
            case lib19.Axis.horizontal:
                return size.width;
            case lib19.Axis.vertical:
                return size.height;
        }
        return null;
    }
    private static __$_maxScrollExtent : double;
    static get _maxScrollExtent() : double { 
        if (this.__$_maxScrollExtent===undefined) {
            this.__$_maxScrollExtent = 0;
        }
        return this.__$_maxScrollExtent;
    }
    static set _maxScrollExtent(__$value : double)  { 
        this.__$_maxScrollExtent = __$value;
    }

    static get _hasVisualOverflow() : boolean {
        return properties._maxScrollExtent > 0 || properties._paintOffset != Offset.zero;
    }
    static get preferredLineHeight() : double {
        return properties._textPainter.preferredLineHeight;
    }
    private static __$_tap : lib10.TapGestureRecognizer;
    static get _tap() : lib10.TapGestureRecognizer { 
        return this.__$_tap;
    }
    static set _tap(__$value : lib10.TapGestureRecognizer)  { 
        this.__$_tap = __$value;
    }

    private static __$_longPress : lib11.LongPressGestureRecognizer;
    static get _longPress() : lib11.LongPressGestureRecognizer { 
        return this.__$_longPress;
    }
    static set _longPress(__$value : lib11.LongPressGestureRecognizer)  { 
        this.__$_longPress = __$value;
    }

    private static __$_lastTapDownPosition : any;
    static get _lastTapDownPosition() : any { 
        return this.__$_lastTapDownPosition;
    }
    static set _lastTapDownPosition(__$value : any)  { 
        this.__$_lastTapDownPosition = __$value;
    }

    private static __$_caretPrototype : any;
    static get _caretPrototype() : any { 
        return this.__$_caretPrototype;
    }
    static set _caretPrototype(__$value : any)  { 
        this.__$_caretPrototype = __$value;
    }

    static get _getCaretPrototype() : any {
        switch (lib14.properties.defaultTargetPlatform) {
            case lib14.TargetPlatform.iOS:
                return Rect.fromLTWH(0.0,-properties._kCaretHeightOffset + 0.5,properties.cursorWidth,properties.preferredLineHeight + 2);
            default:
                return Rect.fromLTWH(0.0,properties._kCaretHeightOffset,properties.cursorWidth,properties.preferredLineHeight - 2.0 * properties._kCaretHeightOffset);
        }
    }
    private static __$_relativeOrigin : any;
    static get _relativeOrigin() : any { 
        if (this.__$_relativeOrigin===undefined) {
            this.__$_relativeOrigin = new bare.createInstance(any,null,0,0);
        }
        return this.__$_relativeOrigin;
    }
    static set _relativeOrigin(__$value : any)  { 
        this.__$_relativeOrigin = __$value;
    }

    private static __$_previousOffset : any;
    static get _previousOffset() : any { 
        return this.__$_previousOffset;
    }
    static set _previousOffset(__$value : any)  { 
        this.__$_previousOffset = __$value;
    }

    private static __$_resetOriginOnLeft : boolean;
    static get _resetOriginOnLeft() : boolean { 
        if (this.__$_resetOriginOnLeft===undefined) {
            this.__$_resetOriginOnLeft = false;
        }
        return this.__$_resetOriginOnLeft;
    }
    static set _resetOriginOnLeft(__$value : boolean)  { 
        this.__$_resetOriginOnLeft = __$value;
    }

    private static __$_resetOriginOnRight : boolean;
    static get _resetOriginOnRight() : boolean { 
        if (this.__$_resetOriginOnRight===undefined) {
            this.__$_resetOriginOnRight = false;
        }
        return this.__$_resetOriginOnRight;
    }
    static set _resetOriginOnRight(__$value : boolean)  { 
        this.__$_resetOriginOnRight = __$value;
    }

    private static __$_resetOriginOnTop : boolean;
    static get _resetOriginOnTop() : boolean { 
        if (this.__$_resetOriginOnTop===undefined) {
            this.__$_resetOriginOnTop = false;
        }
        return this.__$_resetOriginOnTop;
    }
    static set _resetOriginOnTop(__$value : boolean)  { 
        this.__$_resetOriginOnTop = __$value;
    }

    private static __$_resetOriginOnBottom : boolean;
    static get _resetOriginOnBottom() : boolean { 
        if (this.__$_resetOriginOnBottom===undefined) {
            this.__$_resetOriginOnBottom = false;
        }
        return this.__$_resetOriginOnBottom;
    }
    static set _resetOriginOnBottom(__$value : boolean)  { 
        this.__$_resetOriginOnBottom = __$value;
    }

    private static __$_resetFloatingCursorAnimationValue : double;
    static get _resetFloatingCursorAnimationValue() : double { 
        return this.__$_resetFloatingCursorAnimationValue;
    }
    static set _resetFloatingCursorAnimationValue(__$value : double)  { 
        this.__$_resetFloatingCursorAnimationValue = __$value;
    }

}
