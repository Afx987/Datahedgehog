/** Library asset:datahedgehog_monitor/lib/lib/material/text_field.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/editable_text";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/focus_manager";
import * as lib7 from "./input_decorator";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/services/text_input";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/services/text_formatter";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib14 from "./ink_well";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib16 from "./material_localizations";
import * as lib17 from "./theme";
import * as lib18 from "./theme_data";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/services/text_editing";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/editable";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib24 from "./material";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/gestures/force_press";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/gestures/long_press";
import * as lib28 from "./feedback";
import * as collection from "@dart2ts/dart/core";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/cupertino/text_selection";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/cupertino/theme";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib33 from "./text_selection";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/cupertino/colors";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";

export namespace TextField {
    export type Constructors = lib3.StatefulWidget.Constructors | 'TextField';
    export type Interface = Omit<TextField, Constructors>;
}
@DartClass
export class TextField extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,controller? : lib5.TextEditingController,focusNode? : lib6.FocusNode,decoration? : lib7.InputDecoration,keyboardType? : lib8.TextInputType,textInputAction? : lib8.TextInputAction,textCapitalization? : lib8.TextCapitalization,style? : lib9.TextStyle,textAlign? : any,textDirection? : any,autofocus? : boolean,obscureText? : boolean,autocorrect? : boolean,maxLines? : number,maxLength? : number,maxLengthEnforced? : boolean,onChanged? : <T>(value : string) => void,onEditingComplete? : any,onSubmitted? : <T>(value : string) => void,inputFormatters? : core.DartList<lib10.TextInputFormatter>,enabled? : boolean,cursorWidth? : double,cursorRadius? : any,cursorColor? : any,keyboardAppearance? : any,scrollPadding? : lib11.EdgeInsets,dragStartBehavior? : lib12.DragStartBehavior,enableInteractiveSelection? : boolean,onTap? : () => any,buildCounter? : (context : lib3.BuildContext,_namedArguments : {currentLength? : number?,maxLength? : number?,isFocused? : boolean?}) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextField(_namedArguments? : {key? : lib4.Key,controller? : lib5.TextEditingController,focusNode? : lib6.FocusNode,decoration? : lib7.InputDecoration,keyboardType? : lib8.TextInputType,textInputAction? : lib8.TextInputAction,textCapitalization? : lib8.TextCapitalization,style? : lib9.TextStyle,textAlign? : any,textDirection? : any,autofocus? : boolean,obscureText? : boolean,autocorrect? : boolean,maxLines? : number,maxLength? : number,maxLengthEnforced? : boolean,onChanged? : <T>(value : string) => void,onEditingComplete? : any,onSubmitted? : <T>(value : string) => void,inputFormatters? : core.DartList<lib10.TextInputFormatter>,enabled? : boolean,cursorWidth? : double,cursorRadius? : any,cursorColor? : any,keyboardAppearance? : any,scrollPadding? : lib11.EdgeInsets,dragStartBehavior? : lib12.DragStartBehavior,enableInteractiveSelection? : boolean,onTap? : () => any,buildCounter? : (context : lib3.BuildContext,_namedArguments : {currentLength? : number?,maxLength? : number?,isFocused? : boolean?}) => lib3.Widget}) {
        let {key,controller,focusNode,decoration,keyboardType,textInputAction,textCapitalization,style,textAlign,textDirection,autofocus,obscureText,autocorrect,maxLines,maxLength,maxLengthEnforced,onChanged,onEditingComplete,onSubmitted,inputFormatters,enabled,cursorWidth,cursorRadius,cursorColor,keyboardAppearance,scrollPadding,dragStartBehavior,enableInteractiveSelection,onTap,buildCounter} = Object.assign({
            "decoration" : new lib7.InputDecoration(),
            "textCapitalization" : lib8.TextCapitalization.none,
            "textAlign" : TextAlign.start,
            "autofocus" : false,
            "obscureText" : false,
            "autocorrect" : true,
            "maxLines" : 1,
            "maxLengthEnforced" : true,
            "cursorWidth" : 2.0,
            "scrollPadding" : new lib11.EdgeInsets.all(20.0),
            "dragStartBehavior" : lib12.DragStartBehavior.down}, _namedArguments );
        this.keyboardType = (this.keyboardType || (this.maxLines == 1 ? lib8.TextInputType.text : lib8.TextInputType.multiline));
        this.assert = assert;
        this.controller = controller;
        this.focusNode = focusNode;
        this.decoration = decoration;
        this.textInputAction = textInputAction;
        this.textCapitalization = textCapitalization;
        this.style = style;
        this.textAlign = textAlign;
        this.textDirection = textDirection;
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
        this.dragStartBehavior = dragStartBehavior;
        this.enableInteractiveSelection = enableInteractiveSelection;
        this.onTap = onTap;
        this.buildCounter = buildCounter;
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

    controller : lib5.TextEditingController;

    focusNode : lib6.FocusNode;

    decoration : lib7.InputDecoration;

    keyboardType : lib8.TextInputType;

    textInputAction : lib8.TextInputAction;

    textCapitalization : lib8.TextCapitalization;

    style : lib9.TextStyle;

    textAlign : any;

    textDirection : any;

    autofocus : boolean;

    obscureText : boolean;

    autocorrect : boolean;

    maxLines : number;

    private static __$noMaxLength : number;
    static get noMaxLength() : number { 
        if (this.__$noMaxLength===undefined) {
            this.__$noMaxLength = -1;
        }
        return this.__$noMaxLength;
    }

    maxLength : number;

    maxLengthEnforced : boolean;

    onChanged : <T>(value : string) => void;

    onEditingComplete : any;

    onSubmitted : <T>(value : string) => void;

    inputFormatters : core.DartList<lib10.TextInputFormatter>;

    enabled : boolean;

    cursorWidth : double;

    cursorRadius : any;

    cursorColor : any;

    keyboardAppearance : any;

    scrollPadding : lib11.EdgeInsets;

    enableInteractiveSelection : boolean;

    dragStartBehavior : lib12.DragStartBehavior;

    get selectionEnabled() : boolean {
        return (this.enableInteractiveSelection || !this.obscureText);
    }
    onTap : () => any;

    buildCounter : (context : lib3.BuildContext,_namedArguments : {currentLength? : number?,maxLength? : number?,isFocused? : boolean?}) => lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _TextFieldState {
        return _TextFieldState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib13.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib13.DiagnosticsProperty('controller',this.controller,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('focusNode',this.focusNode,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('enabled',this.enabled,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('decoration',this.decoration,{
            defaultValue : new lib7.InputDecoration()}));
        properties.add(lib13.DiagnosticsProperty('keyboardType',this.keyboardType,{
            defaultValue : lib8.TextInputType.text}));
        properties.add(lib13.DiagnosticsProperty('style',this.style,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('autofocus',this.autofocus,{
            defaultValue : false}));
        properties.add(lib13.DiagnosticsProperty('obscureText',this.obscureText,{
            defaultValue : false}));
        properties.add(lib13.DiagnosticsProperty('autocorrect',this.autocorrect,{
            defaultValue : true}));
        properties.add(lib13.IntProperty('maxLines',this.maxLines,{
            defaultValue : 1}));
        properties.add(lib13.IntProperty('maxLength',this.maxLength,{
            defaultValue : null}));
        properties.add(lib13.FlagProperty('maxLengthEnforced',{
            value : this.maxLengthEnforced,defaultValue : true,ifFalse : 'maxLength not enforced'}));
        properties.add(lib13.EnumProperty('textInputAction',this.textInputAction,{
            defaultValue : null}));
        properties.add(lib13.EnumProperty('textCapitalization',this.textCapitalization,{
            defaultValue : lib8.TextCapitalization.none}));
        properties.add(lib13.EnumProperty('textAlign',this.textAlign,{
            defaultValue : TextAlign.start}));
        properties.add(lib13.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib13.DoubleProperty('cursorWidth',this.cursorWidth,{
            defaultValue : 2.0}));
        properties.add(lib13.DiagnosticsProperty('cursorRadius',this.cursorRadius,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('cursorColor',this.cursorColor,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('keyboardAppearance',this.keyboardAppearance,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('scrollPadding',this.scrollPadding,{
            defaultValue : new lib11.EdgeInsets.all(20.0)}));
        properties.add(lib13.FlagProperty('selectionEnabled',{
            value : this.selectionEnabled,defaultValue : true,ifFalse : 'selection disabled'}));
    }
}

export namespace _TextFieldState {
    export type Constructors = '_TextFieldState';
    export type Interface = Omit<_TextFieldState, Constructors>;
}
@DartClass
@With(any)
export class _TextFieldState extends any implements any.Interface {
    _editableTextKey : lib3.GlobalKey<lib5.EditableTextState>;

    _splashes : core.DartSet<lib14.InteractiveInkFeature>;

    _currentSplash : lib14.InteractiveInkFeature;

    _controller : lib5.TextEditingController;

    get _effectiveController() : lib5.TextEditingController {
        return (widget.controller || this._controller);
    }
    _focusNode : lib6.FocusNode;

    get _effectiveFocusNode() : lib6.FocusNode {
        return (widget.focusNode || (this._focusNode = ( this._focusNode ) || ( lib6.FocusNode() )));
    }
    get needsCounter() : boolean {
        return widget.maxLength != null && widget.decoration != null && op(Op.EQUALS,widget.decoration.counterText,null);
    }
    _getEffectiveDecoration() : lib7.InputDecoration {
        let localizations : lib16.MaterialLocalizations = lib16.MaterialLocalizations.of(lib15.properties.context);
        let themeData : lib18.ThemeData = lib17.Theme.of(lib15.properties.context);
        let effectiveDecoration : lib7.InputDecoration = ((widget.decoration || new lib7.InputDecoration())).applyDefaults(themeData.inputDecorationTheme).copyWith({
            enabled : widget.enabled,hintMaxLines : (((t)=>(!!t)?t.hintMaxLines:null)(widget.decoration) || widget.maxLines)});
        if (effectiveDecoration.counter != null || effectiveDecoration.counterText != null) return effectiveDecoration;
        let counter : lib3.Widget;
        let currentLength : number = new core.DartString(this._effectiveController.value.text).runes.length;
        if (op(Op.EQUALS,effectiveDecoration.counter,null) && op(Op.EQUALS,effectiveDecoration.counterText,null) && widget.buildCounter != null) {
            let isFocused : boolean = this._effectiveFocusNode.hasFocus;
            counter = lib19.Semantics({
                container : true,liveRegion : isFocused,child : widget.buildCounter(lib15.properties.context,{
                    currentLength : currentLength,maxLength : widget.maxLength,isFocused : isFocused})});
            return effectiveDecoration.copyWith({
                counter : counter});
        }
        if (op(Op.EQUALS,widget.maxLength,null)) return effectiveDecoration;
        let counterText : string = `${currentLength}`;
        let semanticCounterText : string = '';
        if (op(Op.GT,widget.maxLength,0)) {
            counterText += `/${widget.maxLength}`;
            let remaining : number = (op(Op.MINUS,widget.maxLength,currentLength)).clamp(0,widget.maxLength);
            semanticCounterText = localizations.remainingTextFieldCharacterCount(remaining);
            if (new core.DartString(this._effectiveController.value.text).runes.length > widget.maxLength) {
                return effectiveDecoration.copyWith({
                    errorText : (effectiveDecoration.errorText || ''),counterStyle : (effectiveDecoration.errorStyle || themeData.textTheme.caption.copyWith({
                        color : themeData.errorColor})),counterText : counterText,semanticCounterText : semanticCounterText});
            }
        }
        return effectiveDecoration.copyWith({
            counterText : counterText,semanticCounterText : semanticCounterText});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        if (op(Op.EQUALS,widget.controller,null)) this._controller = lib5.TextEditingController();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : TextField) : any {
        super.didUpdateWidget(oldWidget);
        if (op(Op.EQUALS,widget.controller,null) && oldWidget.controller != null) this._controller = lib5.TextEditingController.fromValue(oldWidget.controller.value);else if (widget.controller != null && op(Op.EQUALS,oldWidget.controller,null)) this._controller = null;
        let isEnabled : boolean = ((widget.enabled || ((t)=>(!!t)?t.enabled:null)(widget.decoration)) || true);
        let wasEnabled : boolean = ((oldWidget.enabled || ((t)=>(!!t)?t.enabled:null)(oldWidget.decoration)) || true);
        if (wasEnabled && !isEnabled) {
            this._effectiveFocusNode.unfocus();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_757_)=>(!!_757_)?_757_.dispose():null)(this._focusNode);
        super.dispose();
    }
    _requestKeyboard() : any {
        ((_758_)=>(!!_758_)?_758_.requestKeyboard():null)(this._editableTextKey.currentState);
    }
    _handleSelectionChanged(selection : lib20.TextSelection,cause : lib21.SelectionChangedCause) : any {
        if (op(Op.EQUALS,lib17.Theme.of(lib15.properties.context).platform,lib22.TargetPlatform.iOS) && op(Op.EQUALS,cause,lib21.SelectionChangedCause.longPress)) {
            ((_759_)=>(!!_759_)?_759_.bringIntoView(selection.base):null)(this._editableTextKey.currentState);
        }
    }
    _createInkFeature(details : lib23.TapDownDetails) : lib14.InteractiveInkFeature {
        let inkController : lib24.MaterialInkController = lib24.Material.of(lib15.properties.context);
        let themeData : lib18.ThemeData = lib17.Theme.of(lib15.properties.context);
        let editableContext : lib3.BuildContext = this._editableTextKey.currentContext;
        let referenceBox : any = (lib7.InputDecorator.containerOf(editableContext) || editableContext.findRenderObject());
        let position : any = referenceBox.globalToLocal(details.globalPosition);
        let color : any = themeData.splashColor;
        let splash : lib14.InteractiveInkFeature;
        var handleRemoved : () => any = () : any =>  {
            if (this._splashes != null) {
                /* TODO (AssertStatementImpl) : assert (_splashes.contains(splash)); */;
                this._splashes.remove(splash);
                if (op(Op.EQUALS,this._currentSplash,splash)) this._currentSplash = null;
                updateKeepAlive();
            }
        };
        splash = themeData.splashFactory.create({
            controller : inkController,referenceBox : referenceBox,position : position,color : color,containedInkWell : true,borderRadius : lib25.BorderRadius.zero,onRemoved : handleRemoved,textDirection : lib19.Directionality.of(lib15.properties.context)});
        return splash;
    }
    get _renderEditable() : lib21.RenderEditable {
        return this._editableTextKey.currentState.renderEditable;
    }
    _handleTapDown(details : lib23.TapDownDetails) : any {
        this._renderEditable.handleTapDown(details);
        this._startSplash(details);
    }
    _handleForcePressStarted(details : lib26.ForcePressDetails) : any {
        if (widget.selectionEnabled) {
            this._renderEditable.selectWordsInRange({
                from : details.globalPosition,cause : lib21.SelectionChangedCause.forcePress});
            this._editableTextKey.currentState.showToolbar();
        }
    }
    _handleSingleTapUp(details : lib23.TapUpDetails) : any {
        if (widget.selectionEnabled) {
            switch (lib17.Theme.of(lib15.properties.context).platform) {
                case lib22.TargetPlatform.iOS:
                    this._renderEditable.selectWordEdge({
                        cause : lib21.SelectionChangedCause.tap});
                    break;
                case lib22.TargetPlatform.android:
                case lib22.TargetPlatform.fuchsia:
                    this._renderEditable.selectPosition({
                        cause : lib21.SelectionChangedCause.tap});
                    break;
            }
        }
        this._requestKeyboard();
        this._confirmCurrentSplash();
        if (widget.onTap != null) widget.onTap();
    }
    _handleSingleTapCancel() : any {
        this._cancelCurrentSplash();
    }
    _handleSingleLongTapStart(details : lib27.GestureLongPressDragStartDetails) : any {
        if (widget.selectionEnabled) {
            switch (lib17.Theme.of(lib15.properties.context).platform) {
                case lib22.TargetPlatform.iOS:
                    this._renderEditable.selectPositionAt({
                        from : details.globalPosition,cause : lib21.SelectionChangedCause.longPress});
                    break;
                case lib22.TargetPlatform.android:
                case lib22.TargetPlatform.fuchsia:
                    this._renderEditable.selectWord({
                        cause : lib21.SelectionChangedCause.longPress});
                    lib28.Feedback.forLongPress(lib15.properties.context);
                    break;
            }
        }
        this._confirmCurrentSplash();
    }
    _handleSingleLongTapDragUpdate(details : lib27.GestureLongPressDragUpdateDetails) : any {
        if (widget.selectionEnabled) {
            switch (lib17.Theme.of(lib15.properties.context).platform) {
                case lib22.TargetPlatform.iOS:
                    this._renderEditable.selectPositionAt({
                        from : details.globalPosition,cause : lib21.SelectionChangedCause.longPress});
                    break;
                case lib22.TargetPlatform.android:
                case lib22.TargetPlatform.fuchsia:
                    this._renderEditable.selectWordsInRange({
                        from : op(Op.MINUS,details.globalPosition,details.offsetFromOrigin),to : details.globalPosition,cause : lib21.SelectionChangedCause.longPress});
                    break;
            }
        }
    }
    _handleSingleLongTapUp(details : lib27.GestureLongPressDragUpDetails) : any {
        this._editableTextKey.currentState.showToolbar();
    }
    _handleDoubleTapDown(details : lib23.TapDownDetails) : any {
        if (widget.selectionEnabled) {
            this._renderEditable.selectWord({
                cause : lib21.SelectionChangedCause.doubleTap});
            this._editableTextKey.currentState.showToolbar();
        }
    }
    _startSplash(details : lib23.TapDownDetails) : any {
        if (this._effectiveFocusNode.hasFocus) return;
        let splash : lib14.InteractiveInkFeature = this._createInkFeature(details);
        this._splashes = ( this._splashes ) || ( core.DartHashSet() );
        this._splashes.add(splash);
        this._currentSplash = splash;
        updateKeepAlive();
    }
    _confirmCurrentSplash() : any {
        ((_760_)=>(!!_760_)?_760_.confirm():null)(this._currentSplash);
        this._currentSplash = null;
    }
    _cancelCurrentSplash() : any {
        ((_761_)=>(!!_761_)?_761_.cancel():null)(this._currentSplash);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get wantKeepAlive() : boolean {
        return this._splashes != null && this._splashes.isNotEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deactivate() : any {
        if (this._splashes != null) {
            let splashes : core.DartSet<lib14.InteractiveInkFeature> = this._splashes;
            this._splashes = null;
            for(let splash of splashes) splash.dispose();
            this._currentSplash = null;
        }
        /* TODO (AssertStatementImpl) : assert (_currentSplash == null); */;
        super.deactivate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        super.build(context);
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        /* TODO (AssertStatementImpl) : assert (!(widget.style != null && widget.style.inherit == false && (widget.style.fontSize == null || widget.style.textBaseline == null)), 'inherit false style must supply fontSize and textBaseline'); */;
        ;
        let themeData : lib18.ThemeData = lib17.Theme.of(context);
        let style : lib9.TextStyle = themeData.textTheme.subhead.merge(widget.style);
        let keyboardAppearance : any = (widget.keyboardAppearance || themeData.primaryColorBrightness);
        let controller : lib5.TextEditingController = this._effectiveController;
        let focusNode : lib6.FocusNode = this._effectiveFocusNode;
        let formatters : core.DartList<lib10.TextInputFormatter> = (widget.inputFormatters || new core.DartList.literal<lib10.TextInputFormatter>());
        if (widget.maxLength != null && widget.maxLengthEnforced) formatters.add(lib10.LengthLimitingTextInputFormatter(widget.maxLength));
        let forcePressEnabled : boolean;
        let textSelectionControls : lib15.TextSelectionControls;
        let paintCursorAboveText : boolean;
        let cursorOpacityAnimates : boolean;
        let cursorOffset : any;
        let cursorColor : any = widget.cursorColor;
        let cursorRadius : any = widget.cursorRadius;
        switch (themeData.platform) {
            case lib22.TargetPlatform.iOS:
                forcePressEnabled = true;
                textSelectionControls = lib30.properties.cupertinoTextSelectionControls;
                paintCursorAboveText = true;
                cursorOpacityAnimates = true;
                cursorColor = ( cursorColor ) || ( lib31.CupertinoTheme.of(context).primaryColor );
                cursorRadius = ( cursorRadius ) || ( new bare.createInstance(any,null,2.0) );
                let _iOSHorizontalOffset : number = -2;
                cursorOffset = Offset(_iOSHorizontalOffset / lib32.MediaQuery.of(context).devicePixelRatio,0);
                break;
            case lib22.TargetPlatform.android:
            case lib22.TargetPlatform.fuchsia:
                forcePressEnabled = false;
                textSelectionControls = lib33.properties.materialTextSelectionControls;
                paintCursorAboveText = false;
                cursorOpacityAnimates = false;
                cursorColor = ( cursorColor ) || ( themeData.cursorColor );
                break;
        }
        let child : lib3.Widget = lib19.RepaintBoundary({
            child : lib5.EditableText({
                key : this._editableTextKey,controller : controller,focusNode : focusNode,keyboardType : widget.keyboardType,textInputAction : widget.textInputAction,textCapitalization : widget.textCapitalization,style : style,textAlign : widget.textAlign,textDirection : widget.textDirection,autofocus : widget.autofocus,obscureText : widget.obscureText,autocorrect : widget.autocorrect,maxLines : widget.maxLines,selectionColor : themeData.textSelectionColor,selectionControls : widget.selectionEnabled ? textSelectionControls : null,onChanged : widget.onChanged,onSelectionChanged : this._handleSelectionChanged.bind(this),onEditingComplete : widget.onEditingComplete,onSubmitted : widget.onSubmitted,inputFormatters : formatters,rendererIgnoresPointer : true,cursorWidth : widget.cursorWidth,cursorRadius : cursorRadius,cursorColor : cursorColor,cursorOpacityAnimates : cursorOpacityAnimates,cursorOffset : cursorOffset,paintCursorAboveText : paintCursorAboveText,backgroundCursorColor : lib34.CupertinoColors.inactiveGray,scrollPadding : widget.scrollPadding,keyboardAppearance : keyboardAppearance,enableInteractiveSelection : widget.enableInteractiveSelection,dragStartBehavior : widget.dragStartBehavior})});
        if (widget.decoration != null) {
            child = lib36.AnimatedBuilder({
                animation : lib35.Listenable.merge(new core.DartList.literal<lib35.Listenable>(focusNode,controller)),builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                    return lib7.InputDecorator({
                        decoration : this._getEffectiveDecoration(),baseStyle : widget.style,textAlign : widget.textAlign,isFocused : focusNode.hasFocus,isEmpty : new core.DartString(controller.value.text).isEmpty,child : child});
                },child : child});
        }
        return lib19.Semantics({
            onTap : () =>  {
                if (!this._effectiveController.selection.isValid) this._effectiveController.selection = lib20.TextSelection.collapsed({
                    offset : new core.DartString(this._effectiveController.text).length});
                this._requestKeyboard();
            },child : lib19.IgnorePointer({
                ignoring : !(((widget.enabled || ((t)=>(!!t)?t.enabled:null)(widget.decoration)) || true)),child : lib15.TextSelectionGestureDetector({
                    onTapDown : this._handleTapDown.bind(this),onForcePressStart : forcePressEnabled ? this._handleForcePressStarted.bind(this) : null,onSingleTapUp : this._handleSingleTapUp.bind(this),onSingleTapCancel : this._handleSingleTapCancel.bind(this),onSingleLongTapStart : this._handleSingleLongTapStart.bind(this),onSingleLongTapDragUpdate : this._handleSingleLongTapDragUpdate.bind(this),onSingleLongTapUp : this._handleSingleLongTapUp.bind(this),onDoubleTapDown : this._handleDoubleTapDown.bind(this),behavior : HitTestBehavior.translucent,child : child})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextFieldState() {
        this._editableTextKey = lib3.GlobalKey();
    }
}

export class properties {
}
