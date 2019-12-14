/** Library asset:datahedgehog_monitor/lib/lib/material/text_form_field.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/form";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/focus_manager";
import * as lib6 from "./input_decorator";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/services/text_input";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/services/text_formatter";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib12 from "./theme";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/table";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/editable_text";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/animations";

export var createState : () => _TextFormFieldState = () : _TextFormFieldState =>  {
    return _TextFormFieldState();
};
export namespace TextFormField {
    export type Constructors = lib3.FormField.Constructors | 'TextFormField';
    export type Interface = Omit<TextFormField, Constructors>;
}
@DartClass
export class TextFormField extends lib3.FormField<string> {
    constructor(_namedArguments? : {key? : lib4.Key,controller? : any,initialValue? : string,focusNode? : lib5.FocusNode,decoration? : lib6.InputDecoration,keyboardType? : lib7.TextInputType,textCapitalization? : lib7.TextCapitalization,textInputAction? : lib7.TextInputAction,style? : lib8.TextStyle,textDirection? : any,textAlign? : any,autofocus? : boolean,obscureText? : boolean,autocorrect? : boolean,autovalidate? : boolean,maxLengthEnforced? : boolean,maxLines? : number,maxLength? : number,onEditingComplete? : any,onFieldSubmitted? : <T>(value : string) => void,onSaved? : <T>(newValue : string) => void,validator? : <T>(value : string) => string,inputFormatters? : core.DartList<lib9.TextInputFormatter>,enabled? : boolean,cursorWidth? : double,cursorRadius? : any,cursorColor? : any,keyboardAppearance? : any,scrollPadding? : lib10.EdgeInsets,enableInteractiveSelection? : boolean,buildCounter? : (context : lib11.BuildContext,_namedArguments : {currentLength? : number?,maxLength? : number?,isFocused? : boolean?}) => lib11.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextFormField(_namedArguments? : {key? : lib4.Key,controller? : any,initialValue? : string,focusNode? : lib5.FocusNode,decoration? : lib6.InputDecoration,keyboardType? : lib7.TextInputType,textCapitalization? : lib7.TextCapitalization,textInputAction? : lib7.TextInputAction,style? : lib8.TextStyle,textDirection? : any,textAlign? : any,autofocus? : boolean,obscureText? : boolean,autocorrect? : boolean,autovalidate? : boolean,maxLengthEnforced? : boolean,maxLines? : number,maxLength? : number,onEditingComplete? : any,onFieldSubmitted? : <T>(value : string) => void,onSaved? : <T>(newValue : string) => void,validator? : <T>(value : string) => string,inputFormatters? : core.DartList<lib9.TextInputFormatter>,enabled? : boolean,cursorWidth? : double,cursorRadius? : any,cursorColor? : any,keyboardAppearance? : any,scrollPadding? : lib10.EdgeInsets,enableInteractiveSelection? : boolean,buildCounter? : (context : lib11.BuildContext,_namedArguments : {currentLength? : number?,maxLength? : number?,isFocused? : boolean?}) => lib11.Widget}) {
        let {key,controller,initialValue,focusNode,decoration,keyboardType,textCapitalization,textInputAction,style,textDirection,textAlign,autofocus,obscureText,autocorrect,autovalidate,maxLengthEnforced,maxLines,maxLength,onEditingComplete,onFieldSubmitted,onSaved,validator,inputFormatters,enabled,cursorWidth,cursorRadius,cursorColor,keyboardAppearance,scrollPadding,enableInteractiveSelection,buildCounter} = Object.assign({
            "decoration" : new lib6.InputDecoration(),
            "textCapitalization" : lib7.TextCapitalization.none,
            "textAlign" : TextAlign.start,
            "autofocus" : false,
            "obscureText" : false,
            "autocorrect" : true,
            "autovalidate" : false,
            "maxLengthEnforced" : true,
            "maxLines" : 1,
            "enabled" : true,
            "cursorWidth" : 2.0,
            "scrollPadding" : new lib10.EdgeInsets.all(20.0),
            "enableInteractiveSelection" : true}, _namedArguments );
        this.state = this.field;
        this.effectiveDecoration = ((decoration || new lib6.InputDecoration())).applyDefaults(lib12.Theme.of(this.field.context).inputDecorationTheme);
        this.assert = assert;
        this.controller = controller;
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

     : any;

     : any;

    key;
    initialValue;

     : any;

     : any;

     : any;

     : any;

    onSaved;
    validator;

    validator;
    autovalidate;

    autovalidate;
    enabled;

    enabled;
    builder;

    field : lib3.FormFieldState<string>;

    state : _TextFormFieldState;

    effectiveDecoration : lib6.InputDecoration;

    @Abstract
    TextField(_namedArguments? : {controller? : any,focusNode? : any,decoration? : any,keyboardType? : any,textInputAction? : any,style? : any,textAlign? : any,textDirection? : any,textCapitalization? : any,autofocus? : any,obscureText? : any,autocorrect? : any,maxLengthEnforced? : any,maxLines? : any,maxLength? : any,onChanged? : any,onEditingComplete? : any,onSubmitted? : any,inputFormatters? : any,enabled? : any,cursorWidth? : any,cursorRadius? : any,cursorColor? : any,scrollPadding? : any,keyboardAppearance? : any,enableInteractiveSelection? : any,buildCounter? : any}){ throw 'abstract'}
}

export namespace _TextFormFieldState {
    export type Constructors = lib3.FormFieldState.Constructors | '_TextFormFieldState';
    export type Interface = Omit<_TextFormFieldState, Constructors>;
}
@DartClass
export class _TextFormFieldState extends lib3.FormFieldState<string> {
    _controller : lib14.TextEditingController;

    get _effectiveController() : lib14.TextEditingController {
        return (this.widget.controller || this._controller);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : TextFormField {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        if (op(Op.EQUALS,this.widget.controller,null)) {
            this._controller = lib14.TextEditingController({
                text : this.widget.initialValue});
        }else {
            this.widget.controller.addListener(this._handleControllerChanged.bind(this));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : TextFormField) : any {
        super.didUpdateWidget(oldWidget);
        if (this.widget.controller != oldWidget.controller) {
            ((_762_)=>(!!_762_)?_762_.removeListener(this._handleControllerChanged.bind(this)):null)(oldWidget.controller);
            ((_763_)=>(!!_763_)?_763_.addListener(this._handleControllerChanged.bind(this)):null)(this.widget.controller);
            if (oldWidget.controller != null && op(Op.EQUALS,this.widget.controller,null)) this._controller = lib14.TextEditingController.fromValue(oldWidget.controller.value);
            if (this.widget.controller != null) {
                this.setValue(this.widget.controller.text);
                if (op(Op.EQUALS,oldWidget.controller,null)) this._controller = null;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_764_)=>(!!_764_)?_764_.removeListener(this._handleControllerChanged.bind(this)):null)(this.widget.controller);
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reset() : any {
        super.reset();
        this.setState(() =>  {
            this._effectiveController.text = this.widget.initialValue;
        });
    }
    _handleControllerChanged() : any {
        if (this._effectiveController.text != lib15.properties.value) this.didChange(this._effectiveController.text);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TextFormFieldState() {
    }
}

export class properties {
    private static __$controller : lib14.TextEditingController;
    static get controller() : lib14.TextEditingController { 
        return this.__$controller;
    }
    static set controller(__$value : lib14.TextEditingController)  { 
        this.__$controller = __$value;
    }

}
