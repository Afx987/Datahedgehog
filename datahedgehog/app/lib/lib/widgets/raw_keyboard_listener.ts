/** Library asset:datahedgehog_monitor/lib/lib/widgets/raw_keyboard_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./focus_manager";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/services/raw_keyboard";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace RawKeyboardListener {
    export type Constructors = lib3.StatefulWidget.Constructors | 'RawKeyboardListener';
    export type Interface = Omit<RawKeyboardListener, Constructors>;
}
@DartClass
export class RawKeyboardListener extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,focusNode? : lib5.FocusNode,onKey? : <T>(value : lib6.RawKeyEvent) => void,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawKeyboardListener(_namedArguments? : {key? : lib4.Key,focusNode? : lib5.FocusNode,onKey? : <T>(value : lib6.RawKeyEvent) => void,child? : lib3.Widget}) {
        let {key,focusNode,onKey,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.focusNode = focusNode;
        this.onKey = onKey;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    focusNode : lib5.FocusNode;

    onKey : <T>(value : lib6.RawKeyEvent) => void;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _RawKeyboardListenerState {
        return _RawKeyboardListenerState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('focusNode',this.focusNode));
    }
}

export namespace _RawKeyboardListenerState {
    export type Constructors = lib3.State.Constructors | '_RawKeyboardListenerState';
    export type Interface = Omit<_RawKeyboardListenerState, Constructors>;
}
@DartClass
export class _RawKeyboardListenerState extends lib3.State<RawKeyboardListener> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.widget.focusNode.addListener(this._handleFocusChanged.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : RawKeyboardListener) : any {
        super.didUpdateWidget(oldWidget);
        if (this.widget.focusNode != oldWidget.focusNode) {
            oldWidget.focusNode.removeListener(this._handleFocusChanged.bind(this));
            this.widget.focusNode.addListener(this._handleFocusChanged.bind(this));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.widget.focusNode.removeListener(this._handleFocusChanged.bind(this));
        this._detachKeyboardIfAttached();
        super.dispose();
    }
    _handleFocusChanged() : any {
        if (this.widget.focusNode.hasFocus) this._attachKeyboardIfDetached();else this._detachKeyboardIfAttached();
    }
    _listening : boolean;

    _attachKeyboardIfDetached() : any {
        if (this._listening) return;
        lib6.RawKeyboard.instance.addListener(this._handleRawKeyEvent.bind(this));
        this._listening = true;
    }
    _detachKeyboardIfAttached() : any {
        if (!this._listening) return;
        lib6.RawKeyboard.instance.removeListener(this._handleRawKeyEvent.bind(this));
        this._listening = false;
    }
    _handleRawKeyEvent(event : lib6.RawKeyEvent) : any {
        if (this.widget.onKey != null) this.widget.onKey(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.child;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RawKeyboardListenerState() {
        this._listening = false;
    }
}

export class properties {
}
