/** Library asset:datahedgehog_monitor/lib/lib/cupertino/text_field.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./colors";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/editable_text";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/focus_manager";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/services/text_input";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/services/text_formatter";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/rendering/editable";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/gestures/force_press";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/gestures/long_press";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/services/text_editing";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib25 from "./icons";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/widgets/value_listenable_builder";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib30 from "./theme";
import * as lib31 from "./text_selection";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/widgets/container";

export enum OverlayVisibilityMode {
    never,
    editing,
    notEditing,
    always
}

export namespace CupertinoTextField {
    export type Constructors = lib8.StatefulWidget.Constructors | 'CupertinoTextField';
    export type Interface = Omit<CupertinoTextField, Constructors>;
}
@DartClass
export class CupertinoTextField extends lib8.StatefulWidget {
    constructor(_namedArguments? : {key? : lib9.Key,controller? : lib10.TextEditingController,focusNode? : lib11.FocusNode,decoration? : lib7.BoxDecoration,padding? : lib12.EdgeInsetsGeometry,placeholder? : string,prefix? : lib8.Widget,prefixMode? : OverlayVisibilityMode,suffix? : lib8.Widget,suffixMode? : OverlayVisibilityMode,clearButtonMode? : OverlayVisibilityMode,keyboardType? : lib13.TextInputType,textInputAction? : lib13.TextInputAction,textCapitalization? : lib13.TextCapitalization,style? : lib14.TextStyle,textAlign? : any,autofocus? : boolean,obscureText? : boolean,autocorrect? : boolean,maxLines? : number,maxLength? : number,maxLengthEnforced? : boolean,onChanged? : <T>(value : string) => void,onEditingComplete? : any,onSubmitted? : <T>(value : string) => void,inputFormatters? : core.DartList<lib15.TextInputFormatter>,enabled? : boolean,cursorWidth? : double,cursorRadius? : any,cursorColor? : any,keyboardAppearance? : any,scrollPadding? : lib12.EdgeInsets}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoTextField(_namedArguments? : {key? : lib9.Key,controller? : lib10.TextEditingController,focusNode? : lib11.FocusNode,decoration? : lib7.BoxDecoration,padding? : lib12.EdgeInsetsGeometry,placeholder? : string,prefix? : lib8.Widget,prefixMode? : OverlayVisibilityMode,suffix? : lib8.Widget,suffixMode? : OverlayVisibilityMode,clearButtonMode? : OverlayVisibilityMode,keyboardType? : lib13.TextInputType,textInputAction? : lib13.TextInputAction,textCapitalization? : lib13.TextCapitalization,style? : lib14.TextStyle,textAlign? : any,autofocus? : boolean,obscureText? : boolean,autocorrect? : boolean,maxLines? : number,maxLength? : number,maxLengthEnforced? : boolean,onChanged? : <T>(value : string) => void,onEditingComplete? : any,onSubmitted? : <T>(value : string) => void,inputFormatters? : core.DartList<lib15.TextInputFormatter>,enabled? : boolean,cursorWidth? : double,cursorRadius? : any,cursorColor? : any,keyboardAppearance? : any,scrollPadding? : lib12.EdgeInsets}) {
        let {key,controller,focusNode,decoration,padding,placeholder,prefix,prefixMode,suffix,suffixMode,clearButtonMode,keyboardType,textInputAction,textCapitalization,style,textAlign,autofocus,obscureText,autocorrect,maxLines,maxLength,maxLengthEnforced,onChanged,onEditingComplete,onSubmitted,inputFormatters,enabled,cursorWidth,cursorRadius,cursorColor,keyboardAppearance,scrollPadding} = Object.assign({
            "decoration" : properties._kDefaultRoundedBorderDecoration,
            "padding" : new lib12.EdgeInsets.all(6.0),
            "prefixMode" : OverlayVisibilityMode.always,
            "suffixMode" : OverlayVisibilityMode.always,
            "clearButtonMode" : OverlayVisibilityMode.never,
            "textCapitalization" : lib13.TextCapitalization.none,
            "textAlign" : TextAlign.start,
            "autofocus" : false,
            "obscureText" : false,
            "autocorrect" : true,
            "maxLines" : 1,
            "maxLengthEnforced" : true,
            "cursorWidth" : 2.0,
            "cursorRadius" : new bare.createInstance(any,null,2.0),
            "scrollPadding" : new lib12.EdgeInsets.all(20.0)}, _namedArguments );
        this.keyboardType = (this.keyboardType || (this.maxLines == 1 ? lib13.TextInputType.text : lib13.TextInputType.multiline));
        this.assert = assert;
        this.controller = controller;
        this.focusNode = focusNode;
        this.decoration = decoration;
        this.padding = padding;
        this.placeholder = placeholder;
        this.prefix = prefix;
        this.prefixMode = prefixMode;
        this.suffix = suffix;
        this.suffixMode = suffixMode;
        this.clearButtonMode = clearButtonMode;
        this.textInputAction = textInputAction;
        this.textCapitalization = textCapitalization;
        this.style = style;
        this.textAlign = textAlign;
        this.autofocus = autofocus;
        this.obscureText = obscureText;
        this.autocorrect = autocorrect;
        this.maxLines = maxLines;
        this.maxLength = maxLength;
        this.maxLengthEnforced = maxLengthEnforced;
        this.onChanged = onChanged;
        this.onEditingComplete = onEditingComplete;
        this.onSubmitted = onSubmitted;
        this.inputFormatters = inputFormatters;
        this.enabled = enabled;
        this.cursorWidth = cursorWidth;
        this.cursorRadius = cursorRadius;
        this.cursorColor = cursorColor;
        this.keyboardAppearance = keyboardAppearance;
        this.scrollPadding = scrollPadding;
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

    keyboardType;
    super;

     : any;

     : any;

    controller : lib10.TextEditingController;

    focusNode : lib11.FocusNode;

    decoration : lib7.BoxDecoration;

    padding : lib12.EdgeInsetsGeometry;

    placeholder : string;

    prefix : lib8.Widget;

    prefixMode : OverlayVisibilityMode;

    suffix : lib8.Widget;

    suffixMode : OverlayVisibilityMode;

    clearButtonMode : OverlayVisibilityMode;

    keyboardType : lib13.TextInputType;

    textInputAction : lib13.TextInputAction;

    textCapitalization : lib13.TextCapitalization;

    style : lib14.TextStyle;

    textAlign : any;

    autofocus : boolean;

    obscureText : boolean;

    autocorrect : boolean;

    maxLines : number;

    maxLength : number;

    maxLengthEnforced : boolean;

    onChanged : <T>(value : string) => void;

    onEditingComplete : any;

    onSubmitted : <T>(value : string) => void;

    inputFormatters : core.DartList<lib15.TextInputFormatter>;

    enabled : boolean;

    cursorWidth : double;

    cursorRadius : any;

    cursorColor : any;

    keyboardAppearance : any;

    scrollPadding : lib12.EdgeInsets;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoTextFieldState {
        return _CupertinoTextFieldState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib16.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib16.DiagnosticsProperty('controller',this.controller,{
            defaultValue : null}));
        properties.add(lib16.DiagnosticsProperty('focusNode',this.focusNode,{
            defaultValue : null}));
        properties.add(lib16.DiagnosticsProperty('decoration',this.decoration));
        properties.add(lib16.DiagnosticsProperty('padding',this.padding));
        properties.add(lib16.StringProperty('placeholder',this.placeholder));
        properties.add(lib16.DiagnosticsProperty('prefix',op(Op.EQUALS,this.prefix,null) ? null : this.prefixMode));
        properties.add(lib16.DiagnosticsProperty('suffix',op(Op.EQUALS,this.suffix,null) ? null : this.suffixMode));
        properties.add(lib16.DiagnosticsProperty('clearButtonMode',this.clearButtonMode));
        properties.add(lib16.DiagnosticsProperty('keyboardType',this.keyboardType,{
            defaultValue : lib13.TextInputType.text}));
        properties.add(lib16.DiagnosticsProperty('style',this.style,{
            defaultValue : null}));
        properties.add(lib16.DiagnosticsProperty('autofocus',this.autofocus,{
            defaultValue : false}));
        properties.add(lib16.DiagnosticsProperty('obscureText',this.obscureText,{
            defaultValue : false}));
        properties.add(lib16.DiagnosticsProperty('autocorrect',this.autocorrect,{
            defaultValue : false}));
        properties.add(lib16.IntProperty('maxLines',this.maxLines,{
            defaultValue : 1}));
        properties.add(lib16.IntProperty('maxLength',this.maxLength,{
            defaultValue : null}));
        properties.add(lib16.FlagProperty('maxLengthEnforced',{
            value : this.maxLengthEnforced,ifTrue : 'max length enforced'}));
        properties.add(lib16.DiagnosticsProperty('cursorColor',this.cursorColor,{
            defaultValue : null}));
    }
}

export namespace _CupertinoTextFieldState {
    export type Constructors = '_CupertinoTextFieldState';
    export type Interface = Omit<_CupertinoTextFieldState, Constructors>;
}
@DartClass
@With(any)
export class _CupertinoTextFieldState extends any implements any.Interface {
    _editableTextKey : lib8.GlobalKey<lib10.EditableTextState>;

    _controller : lib10.TextEditingController;

    get _effectiveController() : lib10.TextEditingController {
        return (widget.controller || this._controller);
    }
    _focusNode : lib11.FocusNode;

    get _effectiveFocusNode() : lib11.FocusNode {
        return (widget.focusNode || (this._focusNode = ( this._focusNode ) || ( lib11.FocusNode() )));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        if (op(Op.EQUALS,widget.controller,null)) {
            this._controller = lib10.TextEditingController();
            this._controller.addListener(updateKeepAlive);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CupertinoTextField) : any {
        super.didUpdateWidget(oldWidget);
        if (op(Op.EQUALS,widget.controller,null) && oldWidget.controller != null) {
            this._controller = lib10.TextEditingController.fromValue(oldWidget.controller.value);
            this._controller.addListener(updateKeepAlive);
        }else if (widget.controller != null && op(Op.EQUALS,oldWidget.controller,null)) {
            this._controller = null;
        }
        let isEnabled : boolean = (widget.enabled || true);
        let wasEnabled : boolean = (oldWidget.enabled || true);
        if (wasEnabled && !isEnabled) {
            this._effectiveFocusNode.unfocus();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_528_)=>(!!_528_)?_528_.dispose():null)(this._focusNode);
        ((_529_)=>(!!_529_)?_529_.removeListener(updateKeepAlive):null)(this._controller);
        super.dispose();
    }
    _requestKeyboard() : any {
        ((_530_)=>(!!_530_)?_530_.requestKeyboard():null)(this._editableTextKey.currentState);
    }
    get _renderEditable() : lib17.RenderEditable {
        return this._editableTextKey.currentState.renderEditable;
    }
    _handleTapDown(details : lib18.TapDownDetails) : any {
        this._renderEditable.handleTapDown(details);
    }
    _handleForcePressStarted(details : lib19.ForcePressDetails) : any {
        this._renderEditable.selectWordsInRange({
            from : details.globalPosition,cause : lib17.SelectionChangedCause.forcePress});
    }
    _handleForcePressEnded(details : lib19.ForcePressDetails) : any {
        this._renderEditable.selectWordsInRange({
            from : details.globalPosition,cause : lib17.SelectionChangedCause.forcePress});
        this._editableTextKey.currentState.showToolbar();
    }
    _handleSingleTapUp(details : lib18.TapUpDetails) : any {
        this._renderEditable.selectWordEdge({
            cause : lib17.SelectionChangedCause.tap});
        this._requestKeyboard();
    }
    _handleSingleLongTapStart(details : lib20.GestureLongPressDragStartDetails) : any {
        this._renderEditable.selectPositionAt({
            from : details.globalPosition,cause : lib17.SelectionChangedCause.longPress});
    }
    _handleSingleLongTapDragUpdate(details : lib20.GestureLongPressDragUpdateDetails) : any {
        this._renderEditable.selectPositionAt({
            from : details.globalPosition,cause : lib17.SelectionChangedCause.longPress});
    }
    _handleSingleLongTapUp(details : lib20.GestureLongPressDragUpDetails) : any {
        this._renderEditable.selectPositionAt({
            from : details.globalPosition,cause : lib17.SelectionChangedCause.longPress});
        this._editableTextKey.currentState.showToolbar();
    }
    _handleDoubleTapDown(details : lib18.TapDownDetails) : any {
        this._renderEditable.selectWord({
            cause : lib17.SelectionChangedCause.tap});
        this._editableTextKey.currentState.showToolbar();
    }
    _handleSelectionChanged(selection : lib21.TextSelection,cause : lib17.SelectionChangedCause) : any {
        if (op(Op.EQUALS,cause,lib17.SelectionChangedCause.longPress)) {
            ((_531_)=>(!!_531_)?_531_.bringIntoView(selection.base):null)(this._editableTextKey.currentState);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get wantKeepAlive() : boolean {
        return ((t)=>(!!t)?t.isNotEmpty:null)(new core.DartString(((t)=>(!!t)?t.text:null)(this._controller))) == true;
    }
    _shouldShowAttachment(_namedArguments? : {attachment? : OverlayVisibilityMode,hasText? : boolean}) : boolean {
        let {attachment,hasText} = Object.assign({
        }, _namedArguments );
        switch (attachment) {
            case OverlayVisibilityMode.never:
                return false;
            case OverlayVisibilityMode.always:
                return true;
            case OverlayVisibilityMode.editing:
                return hasText;
            case OverlayVisibilityMode.notEditing:
                return !hasText;
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
    _showPrefixWidget(text : lib13.TextEditingValue) : boolean {
        return widget.prefix != null && this._shouldShowAttachment({
            attachment : widget.prefixMode,hasText : new core.DartString(text.text).isNotEmpty});
    }
    _showSuffixWidget(text : lib13.TextEditingValue) : boolean {
        return widget.suffix != null && this._shouldShowAttachment({
            attachment : widget.suffixMode,hasText : new core.DartString(text.text).isNotEmpty});
    }
    _showClearButton(text : lib13.TextEditingValue) : boolean {
        return this._shouldShowAttachment({
            attachment : widget.clearButtonMode,hasText : new core.DartString(text.text).isNotEmpty});
    }
    _addTextDependentAttachments(editableText : lib8.Widget,textStyle : lib14.TextStyle) : lib8.Widget {
        /* TODO (AssertStatementImpl) : assert (editableText != null); */;
        /* TODO (AssertStatementImpl) : assert (textStyle != null); */;
        if (op(Op.EQUALS,widget.placeholder,null) && op(Op.EQUALS,widget.clearButtonMode,OverlayVisibilityMode.never) && op(Op.EQUALS,widget.prefix,null) && op(Op.EQUALS,widget.suffix,null)) {
            return editableText;
        }
        return lib28.ValueListenableBuilder({
            valueListenable : this._effectiveController,child : editableText,builder : (context : lib8.BuildContext,text : lib13.TextEditingValue,child : lib8.Widget) =>  {
                let rowChildren : core.DartList<lib8.Widget> = new core.DartList.literal<lib8.Widget>();
                if (this._showPrefixWidget(text)) {
                    rowChildren.add(widget.prefix);
                }
                let stackChildren : core.DartList<lib8.Widget> = new core.DartList.literal<lib8.Widget>();
                if (widget.placeholder != null && new core.DartString(text.text).isEmpty) {
                    stackChildren.add(lib24.Padding({
                        padding : widget.padding,child : lib23.Text(widget.placeholder,{
                            maxLines : 1,overflow : lib22.TextOverflow.ellipsis,style : textStyle.merge(new lib14.TextStyle({
                                color : properties._kInactiveTextColor,fontWeight : FontWeight.w300}))})}));
                }
                rowChildren.add(lib24.Expanded({
                    child : lib24.Stack({
                        children : ((_) : core.DartList<lib8.Widget> =>  {
                            {
                                _.add(child);
                                return _;
                            }
                        })(stackChildren)})}));
                if (this._showSuffixWidget(text)) {
                    rowChildren.add(widget.suffix);
                }else if (this._showClearButton(text)) {
                    rowChildren.add(lib27.GestureDetector({
                        onTap : (widget.enabled || true) ? () =>  {
                            return this._effectiveController.clear();
                        } : null,child : new lib24.Padding({
                            padding : lib12.EdgeInsets.symmetric({
                                horizontal : 6.0}),child : lib26.Icon(lib25.CupertinoIcons.clear_thick_circled,{
                                size : 18.0,color : properties._kInactiveTextColor})})}));
                }
                return lib24.Row({
                    children : rowChildren});
            }});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        super.build(context);
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        let controller : lib10.TextEditingController = this._effectiveController;
        let formatters : core.DartList<lib15.TextInputFormatter> = (widget.inputFormatters || new core.DartList.literal<lib15.TextInputFormatter>());
        let enabled : boolean = (widget.enabled || true);
        let cursorOffset : any = Offset(properties._iOSHorizontalCursorOffsetPixels / lib29.MediaQuery.of(context).devicePixelRatio,0);
        if (widget.maxLength != null && widget.maxLengthEnforced) {
            formatters.add(lib15.LengthLimitingTextInputFormatter(widget.maxLength));
        }
        let themeData : lib30.CupertinoThemeData = lib30.CupertinoTheme.of(context);
        let textStyle : lib14.TextStyle = (widget.style || themeData.textTheme.textStyle);
        let keyboardAppearance : any = (widget.keyboardAppearance || themeData.brightness);
        let paddedEditable : lib8.Widget = lib24.Padding({
            padding : widget.padding,child : lib24.RepaintBoundary({
                child : lib10.EditableText({
                    key : this._editableTextKey,controller : controller,focusNode : this._effectiveFocusNode,keyboardType : widget.keyboardType,textInputAction : widget.textInputAction,textCapitalization : widget.textCapitalization,style : textStyle,textAlign : widget.textAlign,autofocus : widget.autofocus,obscureText : widget.obscureText,autocorrect : widget.autocorrect,maxLines : widget.maxLines,selectionColor : properties._kSelectionHighlightColor,selectionControls : lib31.properties.cupertinoTextSelectionControls,onChanged : widget.onChanged,onSelectionChanged : this._handleSelectionChanged.bind(this),onEditingComplete : widget.onEditingComplete,onSubmitted : widget.onSubmitted,inputFormatters : formatters,rendererIgnoresPointer : true,cursorWidth : widget.cursorWidth,cursorRadius : widget.cursorRadius,cursorColor : themeData.primaryColor,cursorOpacityAnimates : true,cursorOffset : cursorOffset,paintCursorAboveText : true,backgroundCursorColor : lib3.CupertinoColors.inactiveGray,scrollPadding : widget.scrollPadding,keyboardAppearance : keyboardAppearance})})});
        return lib24.Semantics({
            onTap : () =>  {
                if (!controller.selection.isValid) {
                    controller.selection = lib21.TextSelection.collapsed({
                        offset : new core.DartString(controller.text).length});
                }
                this._requestKeyboard();
            },child : lib24.IgnorePointer({
                ignoring : !enabled,child : lib33.Container({
                    decoration : widget.decoration,child : lib33.Container({
                        color : enabled ? null : op(Op.EQUALS,lib30.CupertinoTheme.of(context).brightness,Brightness.light) ? properties._kDisabledBackground : lib3.CupertinoColors.darkBackgroundGray,child : lib32.TextSelectionGestureDetector({
                            onTapDown : this._handleTapDown.bind(this),onForcePressStart : this._handleForcePressStarted.bind(this),onForcePressEnd : this._handleForcePressEnded.bind(this),onSingleTapUp : this._handleSingleTapUp.bind(this),onSingleLongTapStart : this._handleSingleLongTapStart.bind(this),onSingleLongTapDragUpdate : this._handleSingleLongTapDragUpdate.bind(this),onSingleLongTapUp : this._handleSingleLongTapUp.bind(this),onDoubleTapDown : this._handleDoubleTapDown.bind(this),behavior : HitTestBehavior.translucent,child : this._addTextDependentAttachments(paddedEditable,textStyle)})})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoTextFieldState() {
        this._editableTextKey = lib8.GlobalKey();
    }
}

export class properties {
    private static __$_kDefaultRoundedBorderSide : lib4.BorderSide;
    static get _kDefaultRoundedBorderSide() : lib4.BorderSide { 
        if (this.__$_kDefaultRoundedBorderSide===undefined) {
            this.__$_kDefaultRoundedBorderSide = lib4.BorderSide({
                color : lib3.CupertinoColors.lightBackgroundGray,style : lib4.BorderStyle.solid,width : 0.0});
        }
        return this.__$_kDefaultRoundedBorderSide;
    }
    static set _kDefaultRoundedBorderSide(__$value : lib4.BorderSide)  { 
        this.__$_kDefaultRoundedBorderSide = __$value;
    }

    private static __$_kDefaultRoundedBorder : lib5.Border;
    static get _kDefaultRoundedBorder() : lib5.Border { 
        if (this.__$_kDefaultRoundedBorder===undefined) {
            this.__$_kDefaultRoundedBorder = lib5.Border({
                top : properties._kDefaultRoundedBorderSide,bottom : properties._kDefaultRoundedBorderSide,left : properties._kDefaultRoundedBorderSide,right : properties._kDefaultRoundedBorderSide});
        }
        return this.__$_kDefaultRoundedBorder;
    }
    static set _kDefaultRoundedBorder(__$value : lib5.Border)  { 
        this.__$_kDefaultRoundedBorder = __$value;
    }

    private static __$_kDefaultRoundedBorderDecoration : lib7.BoxDecoration;
    static get _kDefaultRoundedBorderDecoration() : lib7.BoxDecoration { 
        if (this.__$_kDefaultRoundedBorderDecoration===undefined) {
            this.__$_kDefaultRoundedBorderDecoration = lib7.BoxDecoration({
                border : properties._kDefaultRoundedBorder,borderRadius : lib6.BorderRadius.all(Radius.circular(4.0))});
        }
        return this.__$_kDefaultRoundedBorderDecoration;
    }
    static set _kDefaultRoundedBorderDecoration(__$value : lib7.BoxDecoration)  { 
        this.__$_kDefaultRoundedBorderDecoration = __$value;
    }

    private static __$_kSelectionHighlightColor : any;
    static get _kSelectionHighlightColor() : any { 
        if (this.__$_kSelectionHighlightColor===undefined) {
            this.__$_kSelectionHighlightColor = Color(1719642831);
        }
        return this.__$_kSelectionHighlightColor;
    }
    static set _kSelectionHighlightColor(__$value : any)  { 
        this.__$_kSelectionHighlightColor = __$value;
    }

    private static __$_kInactiveTextColor : any;
    static get _kInactiveTextColor() : any { 
        if (this.__$_kInactiveTextColor===undefined) {
            this.__$_kInactiveTextColor = Color(4290953922);
        }
        return this.__$_kInactiveTextColor;
    }
    static set _kInactiveTextColor(__$value : any)  { 
        this.__$_kInactiveTextColor = __$value;
    }

    private static __$_kDisabledBackground : any;
    static get _kDisabledBackground() : any { 
        if (this.__$_kDisabledBackground===undefined) {
            this.__$_kDisabledBackground = Color(4294638330);
        }
        return this.__$_kDisabledBackground;
    }
    static set _kDisabledBackground(__$value : any)  { 
        this.__$_kDisabledBackground = __$value;
    }

    private static __$_iOSHorizontalCursorOffsetPixels : number;
    static get _iOSHorizontalCursorOffsetPixels() : number { 
        if (this.__$_iOSHorizontalCursorOffsetPixels===undefined) {
            this.__$_iOSHorizontalCursorOffsetPixels = -2;
        }
        return this.__$_iOSHorizontalCursorOffsetPixels;
    }
    static set _iOSHorizontalCursorOffsetPixels(__$value : number)  { 
        this.__$_iOSHorizontalCursorOffsetPixels = __$value;
    }

}
