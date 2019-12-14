/** Library asset:datahedgehog_monitor/lib/lib/services/text_input.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./text_editing";
import * as lib4 from "./system_channels";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib6 from "./message_codec";

export var _toTextAffinity : (affinity : string) => any = (affinity : string) : any =>  {
    switch (affinity) {
        case 'TextAffinity.downstream':
            return TextAffinity.downstream;
        case 'TextAffinity.upstream':
            return TextAffinity.upstream;
    }
    return null;
};
export var _toTextInputAction : (action : string) => TextInputAction = (action : string) : TextInputAction =>  {
    switch (action) {
        case 'TextInputAction.none':
            return TextInputAction.none;
        case 'TextInputAction.unspecified':
            return TextInputAction.unspecified;
        case 'TextInputAction.go':
            return TextInputAction.go;
        case 'TextInputAction.search':
            return TextInputAction.search;
        case 'TextInputAction.send':
            return TextInputAction.send;
        case 'TextInputAction.next':
            return TextInputAction.next;
        case 'TextInputAction.previuos':
            return TextInputAction.previous;
        case 'TextInputAction.continue_action':
            return TextInputAction.continueAction;
        case 'TextInputAction.join':
            return TextInputAction.join;
        case 'TextInputAction.route':
            return TextInputAction.route;
        case 'TextInputAction.emergencyCall':
            return TextInputAction.emergencyCall;
        case 'TextInputAction.done':
            return TextInputAction.done;
        case 'TextInputAction.newline':
            return TextInputAction.newline;
    }
    throw lib5.FlutterError(`Unknown text input action: ${action}`);
};
export var _toTextCursorAction : (state : string) => FloatingCursorDragState = (state : string) : FloatingCursorDragState =>  {
    switch (state) {
        case 'FloatingCursorDragState.start':
            return FloatingCursorDragState.Start;
        case 'FloatingCursorDragState.update':
            return FloatingCursorDragState.Update;
        case 'FloatingCursorDragState.end':
            return FloatingCursorDragState.End;
    }
    throw lib5.FlutterError(`Unknown text cursor action: ${state}`);
};
export var _toTextPoint : (state : FloatingCursorDragState,encoded : core.DartMap<string,any>) => RawFloatingCursorPoint = (state : FloatingCursorDragState,encoded : core.DartMap<string,any>) : RawFloatingCursorPoint =>  {
    /* TODO (AssertStatementImpl) : assert (state != null, 'You must provide a state to set a new editing point.'); */;
    /* TODO (AssertStatementImpl) : assert (encoded['X'] != null, 'You must provide a value for the horizontal location of the floating cursor.'); */;
    /* TODO (AssertStatementImpl) : assert (encoded['Y'] != null, 'You must provide a value for the vertical location of the floating cursor.'); */;
    let offset : any = op(Op.EQUALS,state,FloatingCursorDragState.Update) ? Offset(encoded.get('X'),encoded.get('Y')) : new bare.createInstance(any,null,0,0);
    return RawFloatingCursorPoint({
        offset : offset,state : state});
};
export namespace TextInputType {
    export type Constructors = '_' | 'numberWithOptions';
    export type Interface = Omit<TextInputType, Constructors>;
}
@DartClass
export class TextInputType {
    @namedConstructor
    _(index : number) {
        this.signed = null;
        this.decimal = null;
        this.index = index;
    }
    static _ : new(index : number) => TextInputType;

    @namedConstructor
    numberWithOptions(_namedArguments? : {signed? : boolean,decimal? : boolean}) {
        let {signed,decimal} = Object.assign({
            "signed" : false,
            "decimal" : false}, _namedArguments );
        this.index = 2;
        this.signed = signed;
        this.decimal = decimal;
    }
    static numberWithOptions : new(_namedArguments? : {signed? : boolean,decimal? : boolean}) => TextInputType;

    index : number;

    signed : boolean;

    decimal : boolean;

    private static __$text : TextInputType;
    static get text() : TextInputType { 
        if (this.__$text===undefined) {
            this.__$text = TextInputType._(0);
        }
        return this.__$text;
    }

    private static __$multiline : TextInputType;
    static get multiline() : TextInputType { 
        if (this.__$multiline===undefined) {
            this.__$multiline = TextInputType._(1);
        }
        return this.__$multiline;
    }

    private static __$number : TextInputType;
    static get number() : TextInputType { 
        if (this.__$number===undefined) {
            this.__$number = TextInputType.numberWithOptions();
        }
        return this.__$number;
    }

    private static __$phone : TextInputType;
    static get phone() : TextInputType { 
        if (this.__$phone===undefined) {
            this.__$phone = TextInputType._(3);
        }
        return this.__$phone;
    }

    private static __$datetime : TextInputType;
    static get datetime() : TextInputType { 
        if (this.__$datetime===undefined) {
            this.__$datetime = TextInputType._(4);
        }
        return this.__$datetime;
    }

    private static __$emailAddress : TextInputType;
    static get emailAddress() : TextInputType { 
        if (this.__$emailAddress===undefined) {
            this.__$emailAddress = TextInputType._(5);
        }
        return this.__$emailAddress;
    }

    private static __$url : TextInputType;
    static get url() : TextInputType { 
        if (this.__$url===undefined) {
            this.__$url = TextInputType._(6);
        }
        return this.__$url;
    }

    private static __$values : core.DartList<TextInputType>;
    static get values() : core.DartList<TextInputType> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal<TextInputType>(TextInputType.text,TextInputType.multiline,TextInputType.number,TextInputType.phone,TextInputType.datetime,TextInputType.emailAddress,TextInputType.url);
        }
        return this.__$values;
    }

    private static __$_names : core.DartList<string>;
    static get _names() : core.DartList<string> { 
        if (this.__$_names===undefined) {
            this.__$_names = new core.DartList.literal<string>('text','multiline','number','phone','datetime','emailAddress','url');
        }
        return this.__$_names;
    }

    get _name() : string {
        return `TextInputType.${TextInputType._names[this.index]}`;
    }
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['name',this._name],
            ['signed',this.signed],
            ['decimal',this.decimal]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(` + `name: ${this._name}, ` + `signed: ${this.signed}, ` + `decimal: ${this.decimal})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, TextInputType)) return false;
        let typedOther : TextInputType = other;
        return typedOther.index == this.index && typedOther.signed == this.signed && typedOther.decimal == this.decimal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.index,this.signed,this.decimal);
    }
}

export enum TextInputAction {
    none,
    unspecified,
    done,
    go,
    search,
    send,
    next,
    previous,
    continueAction,
    join,
    route,
    emergencyCall,
    newline
}

export enum TextCapitalization {
    words,
    sentences,
    characters,
    none
}

export namespace TextInputConfiguration {
    export type Constructors = 'TextInputConfiguration';
    export type Interface = Omit<TextInputConfiguration, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextInputConfiguration {
    constructor(_namedArguments? : {inputType? : TextInputType,obscureText? : boolean,autocorrect? : boolean,actionLabel? : string,inputAction? : TextInputAction,keyboardAppearance? : any,textCapitalization? : TextCapitalization}) {
    }
    @defaultConstructor
    TextInputConfiguration(_namedArguments? : {inputType? : TextInputType,obscureText? : boolean,autocorrect? : boolean,actionLabel? : string,inputAction? : TextInputAction,keyboardAppearance? : any,textCapitalization? : TextCapitalization}) {
        let {inputType,obscureText,autocorrect,actionLabel,inputAction,keyboardAppearance,textCapitalization} = Object.assign({
            "inputType" : TextInputType.text,
            "obscureText" : false,
            "autocorrect" : true,
            "inputAction" : TextInputAction.done,
            "keyboardAppearance" : Brightness.light,
            "textCapitalization" : TextCapitalization.none}, _namedArguments );
        this.assert = assert;
        this.inputType = inputType;
        this.obscureText = obscureText;
        this.autocorrect = autocorrect;
        this.actionLabel = actionLabel;
        this.inputAction = inputAction;
        this.keyboardAppearance = keyboardAppearance;
        this.textCapitalization = textCapitalization;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    inputType : TextInputType;

    obscureText : boolean;

    autocorrect : boolean;

    actionLabel : string;

    inputAction : TextInputAction;

    textCapitalization : TextCapitalization;

    keyboardAppearance : any;

    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['inputType',this.inputType.toJson()],
            ['obscureText',this.obscureText],
            ['autocorrect',this.autocorrect],
            ['actionLabel',this.actionLabel],
            ['inputAction',this.inputAction.toString()],
            ['textCapitalization',this.textCapitalization.toString()],
            ['keyboardAppearance',this.keyboardAppearance.toString()]]);
    }
}

export enum FloatingCursorDragState {
    Start,
    Update,
    End
}

export namespace RawFloatingCursorPoint {
    export type Constructors = 'RawFloatingCursorPoint';
    export type Interface = Omit<RawFloatingCursorPoint, Constructors>;
}
@DartClass
export class RawFloatingCursorPoint {
    constructor(_namedArguments? : {offset? : any,state? : FloatingCursorDragState}) {
    }
    @defaultConstructor
    RawFloatingCursorPoint(_namedArguments? : {offset? : any,state? : FloatingCursorDragState}) {
        let {offset,state} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.offset = offset;
        this.state = state;
    }
     : any;

     : any;

     : any;

     : any;

    offset : any;

    state : FloatingCursorDragState;

}

export namespace TextEditingValue {
    export type Constructors = 'TextEditingValue';
    export type Interface = Omit<TextEditingValue, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextEditingValue {
    constructor(_namedArguments? : {text? : string,selection? : lib3.TextSelection,composing? : lib3.TextRange}) {
    }
    @defaultConstructor
    TextEditingValue(_namedArguments? : {text? : string,selection? : lib3.TextSelection,composing? : lib3.TextRange}) {
        let {text,selection,composing} = Object.assign({
            "text" : '',
            "selection" : new lib3.TextSelection.collapsed({
                offset : -1}),
            "composing" : lib3.TextRange.empty}, _namedArguments );
        this.assert = assert;
        this.text = text;
        this.selection = selection;
        this.composing = composing;
    }
     : any;

     : any;

     : any;

    @namedFactory
    static $fromJSON(encoded : core.DartMap<string,any>) : TextEditingValue {
        return TextEditingValue({
            text : encoded.get('text'),selection : lib3.TextSelection({
                baseOffset : (encoded.get('selectionBase') || -1),extentOffset : (encoded.get('selectionExtent') || -1),affinity : (_toTextAffinity(encoded.get('selectionAffinity')) || TextAffinity.downstream),isDirectional : (encoded.get('selectionIsDirectional') || false)}),composing : lib3.TextRange({
                start : (encoded.get('composingBase') || -1),end : (encoded.get('composingExtent') || -1)})});
    }
    static fromJSON : new(encoded : core.DartMap<string,any>) => TextEditingValue;

    toJSON() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['text',this.text],
            ['selectionBase',this.selection.baseOffset],
            ['selectionExtent',this.selection.extentOffset],
            ['selectionAffinity',this.selection.affinity.toString()],
            ['selectionIsDirectional',this.selection.isDirectional],
            ['composingBase',this.composing.start],
            ['composingExtent',this.composing.end]]);
    }
    text : string;

    selection : lib3.TextSelection;

    composing : lib3.TextRange;

    private static __$empty : TextEditingValue;
    static get empty() : TextEditingValue { 
        if (this.__$empty===undefined) {
            this.__$empty = TextEditingValue();
        }
        return this.__$empty;
    }

    copyWith(_namedArguments? : {text? : string,selection? : lib3.TextSelection,composing? : lib3.TextRange}) : TextEditingValue {
        let {text,selection,composing} = Object.assign({
        }, _namedArguments );
        return TextEditingValue({
            text : (text || this.text),selection : (selection || this.selection),composing : (composing || this.composing)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(text: ┤${this.text}├, selection: ${this.selection}, composing: ${this.composing})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, TextEditingValue)) return false;
        let typedOther : TextEditingValue = other;
        return typedOther.text == this.text && op(Op.EQUALS,typedOther.selection,this.selection) && op(Op.EQUALS,typedOther.composing,this.composing);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(new core.DartString(this.text).hashCode,this.selection.hashCode,this.composing.hashCode);
    }
}

export namespace TextSelectionDelegate {
    export type Constructors = 'TextSelectionDelegate';
    export type Interface = Omit<TextSelectionDelegate, Constructors>;
}
@DartClass
export class TextSelectionDelegate {
    @AbstractProperty
    get textEditingValue() : TextEditingValue{ throw 'abstract'}
    set textEditingValue(value : TextEditingValue){ throw 'abstract'}
    @Abstract
    hideToolbar() : any{ throw 'abstract'}
    @Abstract
    bringIntoView(position : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TextSelectionDelegate() {
    }
}

export namespace TextInputClient {
    export type Constructors = 'TextInputClient';
    export type Interface = Omit<TextInputClient, Constructors>;
}
@DartClass
export class TextInputClient {
    constructor() {
    }
    @defaultConstructor
    TextInputClient() {
    }
    @Abstract
    updateEditingValue(value : TextEditingValue) : any{ throw 'abstract'}
    @Abstract
    performAction(action : TextInputAction) : any{ throw 'abstract'}
    @Abstract
    updateFloatingCursor(point : RawFloatingCursorPoint) : any{ throw 'abstract'}
}

export namespace TextInputConnection {
    export type Constructors = '_';
    export type Interface = Omit<TextInputConnection, Constructors>;
}
@DartClass
export class TextInputConnection {
    @namedConstructor
    _(_client : TextInputClient) {
        this._id = TextInputConnection._nextId++;
        this.assert = assert;
        this._client = _client;
    }
    static _ : new(_client : TextInputClient) => TextInputConnection;

     : any;

    _id;

    private static __$_nextId : number;
    static get _nextId() : number { 
        if (this.__$_nextId===undefined) {
            this.__$_nextId = 1;
        }
        return this.__$_nextId;
    }
    static set _nextId(__$value : number)  { 
        this.__$_nextId = __$value;
    }

    _id : number;

    _client : TextInputClient;

    get attached() : boolean {
        return op(Op.EQUALS,properties._clientHandler._currentConnection,this);
    }
    show() : any {
        /* TODO (AssertStatementImpl) : assert (attached); */;
        op(Op.LT,lib4.SystemChannels.textInput.invokeMethod.bind(lib4.SystemChannels.textInput),);
        op(Op.GT,,('TextInput.show'));
    }
    setEditingState(value : TextEditingValue) : any {
        /* TODO (AssertStatementImpl) : assert (attached); */;
        op(Op.LT,lib4.SystemChannels.textInput.invokeMethod.bind(lib4.SystemChannels.textInput),);
        op(Op.GT,,('TextInput.setEditingState'));
        value.toJSON();
        ;
    }
    close() : any {
        if (this.attached) {
            op(Op.LT,lib4.SystemChannels.textInput.invokeMethod.bind(lib4.SystemChannels.textInput),);
            op(Op.GT,,('TextInput.clearClient'));
            ((_) : _TextInputClientHandler =>  {
                {
                    _._currentConnection = null;
                    _._scheduleHide();
                    return _;
                }
            })(properties._clientHandler);
        }
        /* TODO (AssertStatementImpl) : assert (!attached); */;
    }
}

export namespace _TextInputClientHandler {
    export type Constructors = '_TextInputClientHandler';
    export type Interface = Omit<_TextInputClientHandler, Constructors>;
}
@DartClass
export class _TextInputClientHandler {
    constructor() {
    }
    @defaultConstructor
    _TextInputClientHandler() {
        this._hidePending = false;
        lib4.SystemChannels.textInput.setMethodCallHandler(this._handleTextInputInvocation.bind(this));
    }
    _currentConnection : TextInputConnection;

    _handleTextInputInvocation(methodCall : lib6.MethodCall) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,this._currentConnection,null)) return;
            let method : string = methodCall.method;
            let args : core.DartList<any> = methodCall.arguments;
            let client : number = args[0];
            if (client != this._currentConnection._id) return;
            switch (method) {
                case 'TextInputClient.updateEditingState':
                    this._currentConnection._client.updateEditingValue(TextEditingValue.fromJSON(args[1]));
                    break;
                case 'TextInputClient.performAction':
                    this._currentConnection._client.performAction(_toTextInputAction(args[1]));
                    break;
                case 'TextInputClient.updateFloatingCursor':
                    this._currentConnection._client.updateFloatingCursor(_toTextPoint(_toTextCursorAction(args[1]),args[2]));
                    break;
                default:
                    throw lib6.MissingPluginException();
            }
        } )());
    }

    _hidePending : boolean;

    _scheduleHide() : any {
        if (this._hidePending) return;
        this._hidePending = true;
        async.scheduleMicrotask(() =>  {
            this._hidePending = false;
            if (op(Op.EQUALS,this._currentConnection,null)) op(Op.LT,lib4.SystemChannels.textInput.invokeMethod.bind(lib4.SystemChannels.textInput),);
            op(Op.GT,,('TextInput.hide'));
        });
    }
}

export namespace TextInput {
    export type Constructors = '_';
    export type Interface = Omit<TextInput, Constructors>;
}
@DartClass
export class TextInput {
    @namedConstructor
    _() {
    }
    static _ : new() => TextInput;

    private static __$_androidSupportedInputActions : core.DartList<TextInputAction>;
    static get _androidSupportedInputActions() : core.DartList<TextInputAction> { 
        if (this.__$_androidSupportedInputActions===undefined) {
            this.__$_androidSupportedInputActions = new core.DartList.literal<TextInputAction>(TextInputAction.none,TextInputAction.unspecified,TextInputAction.done,TextInputAction.send,TextInputAction.go,TextInputAction.search,TextInputAction.next,TextInputAction.previous,TextInputAction.newline);
        }
        return this.__$_androidSupportedInputActions;
    }

    private static __$_iOSSupportedInputActions : core.DartList<TextInputAction>;
    static get _iOSSupportedInputActions() : core.DartList<TextInputAction> { 
        if (this.__$_iOSSupportedInputActions===undefined) {
            this.__$_iOSSupportedInputActions = new core.DartList.literal<TextInputAction>(TextInputAction.unspecified,TextInputAction.done,TextInputAction.send,TextInputAction.go,TextInputAction.search,TextInputAction.next,TextInputAction.newline,TextInputAction.continueAction,TextInputAction.join,TextInputAction.route,TextInputAction.emergencyCall);
        }
        return this.__$_iOSSupportedInputActions;
    }

    static attach(client : TextInputClient,configuration : TextInputConfiguration) : TextInputConnection {
        /* TODO (AssertStatementImpl) : assert (client != null); */;
        /* TODO (AssertStatementImpl) : assert (configuration != null); */;
        /* TODO (AssertStatementImpl) : assert (_debugEnsureInputActionWorksOnPlatform(configuration.inputAction)); */;
        let connection : TextInputConnection = TextInputConnection._(client);
        properties._clientHandler._currentConnection = connection;
        op(Op.LT,lib4.SystemChannels.textInput.invokeMethod.bind(lib4.SystemChannels.textInput),);
        op(Op.GT,,('TextInput.setClient'));
        new core.DartList.literal<any>(connection._id,configuration.toJson());
        ;
        return connection;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction : TextInputAction) : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (Platform.isIOS) {assert (_iOSSupportedInputActions.contains(inputAction), 'The requested TextInputAction "$inputAction" is not supported on iOS.'); ;} else if (Platform.isAndroid) {assert (_androidSupportedInputActions.contains(inputAction), 'The requested TextInputAction "$inputAction" is not supported on Android.'); ;} return true;}()); */;
        return true;
    }
}

export class properties {
    private static __$_clientHandler : _TextInputClientHandler;
    static get _clientHandler() : _TextInputClientHandler { 
        if (this.__$_clientHandler===undefined) {
            this.__$_clientHandler = _TextInputClientHandler();
        }
        return this.__$_clientHandler;
    }
    static set _clientHandler(__$value : _TextInputClientHandler)  { 
        this.__$_clientHandler = __$value;
    }

}
