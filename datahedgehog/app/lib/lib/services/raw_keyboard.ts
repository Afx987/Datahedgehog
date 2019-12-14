/** Library asset:datahedgehog_monitor/lib/lib/services/raw_keyboard.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./keyboard_key";
import * as lib4 from "./raw_keyboard_android";
import * as lib5 from "./raw_keyboard_fuschia";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib7 from "./system_channels";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/basic_types";

export enum KeyboardSide {
    any,
    left,
    right,
    all
}

export enum ModifierKey {
    controlModifier,
    shiftModifier,
    altModifier,
    metaModifier,
    capsLockModifier,
    numLockModifier,
    scrollLockModifier,
    functionModifier,
    symbolModifier
}

export namespace RawKeyEventData {
    export type Constructors = 'RawKeyEventData';
    export type Interface = Omit<RawKeyEventData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class RawKeyEventData {
    constructor() {
    }
    @defaultConstructor
    RawKeyEventData() {
    }
    @Abstract
    isModifierPressed(key : ModifierKey,_namedArguments? : {side? : KeyboardSide}) : boolean{ throw 'abstract'}
    @Abstract
    getModifierSide(key : ModifierKey) : KeyboardSide{ throw 'abstract'}
    get isControlPressed() : boolean {
        return this.isModifierPressed(ModifierKey.controlModifier,{
            side : KeyboardSide.any});
    }
    get isShiftPressed() : boolean {
        return this.isModifierPressed(ModifierKey.shiftModifier,{
            side : KeyboardSide.any});
    }
    get isAltPressed() : boolean {
        return this.isModifierPressed(ModifierKey.altModifier,{
            side : KeyboardSide.any});
    }
    get isMetaPressed() : boolean {
        return this.isModifierPressed(ModifierKey.metaModifier,{
            side : KeyboardSide.any});
    }
    get modifiersPressed() : core.DartMap<ModifierKey,KeyboardSide> {
        let result : core.DartMap<ModifierKey,KeyboardSide> = new core.DartMap.literal([
        ]);
        for(let key of ModifierKey.values) {
            if (this.isModifierPressed(key)) {
                result.set(key,this.getModifierSide(key));
            }
        }
        return result;
    }
    @AbstractProperty
    get physicalKey() : lib3.PhysicalKeyboardKey{ throw 'abstract'}
    @AbstractProperty
    get logicalKey() : lib3.LogicalKeyboardKey{ throw 'abstract'}
    @AbstractProperty
    get keyLabel() : string{ throw 'abstract'}
}

export namespace RawKeyEvent {
    export type Constructors = 'RawKeyEvent';
    export type Interface = Omit<RawKeyEvent, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class RawKeyEvent {
    constructor(_namedArguments? : {data? : RawKeyEventData,character? : string}) {
    }
    @defaultConstructor
    RawKeyEvent(_namedArguments? : {data? : RawKeyEventData,character? : string}) {
        let {data,character} = Object.assign({
        }, _namedArguments );
        this.data = data;
        this.character = character;
    }
    @namedFactory
    static $fromMessage(message : core.DartMap<string,any>) : RawKeyEvent {
        let data : RawKeyEventData;
        let keymap : string = message.get('keymap');
        switch (keymap) {
            case 'android':
                data = lib4.RawKeyEventDataAndroid({
                    flags : (message.get('flags') || 0),codePoint : (message.get('codePoint') || 0),keyCode : (message.get('keyCode') || 0),plainCodePoint : (message.get('plainCodePoint') || 0),scanCode : (message.get('scanCode') || 0),metaState : (message.get('metaState') || 0)});
                break;
            case 'fuchsia':
                data = lib5.RawKeyEventDataFuchsia({
                    hidUsage : (message.get('hidUsage') || 0),codePoint : (message.get('codePoint') || 0),modifiers : (message.get('modifiers') || 0)});
                break;
            default:
                throw lib6.FlutterError(`Unknown keymap for key events: ${keymap}`);
        }
        let type : string = message.get('type');
        switch (type) {
            case 'keydown':
                return RawKeyDownEvent({
                    data : data,character : message.get('character')});
            case 'keyup':
                return RawKeyUpEvent({
                    data : data});
            default:
                throw lib6.FlutterError(`Unknown key event type: ${type}`);
        }
    }
    static fromMessage : new(message : core.DartMap<string,any>) => RawKeyEvent;

    isKeyPressed(key : lib3.LogicalKeyboardKey) : boolean {
        return RawKeyboard.instance.keysPressed.contains(key);
    }
    get isControlPressed() : boolean {
        return this.isKeyPressed(lib3.LogicalKeyboardKey.controlLeft) || this.isKeyPressed(lib3.LogicalKeyboardKey.controlRight);
    }
    get isShiftPressed() : boolean {
        return this.isKeyPressed(lib3.LogicalKeyboardKey.shiftLeft) || this.isKeyPressed(lib3.LogicalKeyboardKey.shiftRight);
    }
    get isAltPressed() : boolean {
        return this.isKeyPressed(lib3.LogicalKeyboardKey.altLeft) || this.isKeyPressed(lib3.LogicalKeyboardKey.altRight);
    }
    get isMetaPressed() : boolean {
        return this.isKeyPressed(lib3.LogicalKeyboardKey.metaLeft) || this.isKeyPressed(lib3.LogicalKeyboardKey.metaRight);
    }
    get physicalKey() : lib3.PhysicalKeyboardKey {
        return this.data.physicalKey;
    }
    get logicalKey() : lib3.LogicalKeyboardKey {
        return this.data.logicalKey;
    }
    character : string;

    data : RawKeyEventData;

}

export namespace RawKeyboard {
    export type Constructors = '_';
    export type Interface = Omit<RawKeyboard, Constructors>;
}
@DartClass
export class RawKeyboard {
    @namedConstructor
    _() {
        this._listeners = new core.DartList.literal<<T>(value : RawKeyEvent) => void>();
        this._keysPressed = core.DartSet();
        lib7.SystemChannels.keyEvent.setMessageHandler(this._handleKeyEvent.bind(this));
    }
    static _ : new() => RawKeyboard;

    private static __$instance : RawKeyboard;
    static get instance() : RawKeyboard { 
        if (this.__$instance===undefined) {
            this.__$instance = RawKeyboard._();
        }
        return this.__$instance;
    }
    static set instance(__$value : RawKeyboard)  { 
        this.__$instance = __$value;
    }

    _listeners : core.DartList<<T>(value : RawKeyEvent) => void>;

    addListener(listener : <T>(value : RawKeyEvent) => void) : any {
        this._listeners.add(listener);
    }
    removeListener(listener : <T>(value : RawKeyEvent) => void) : any {
        this._listeners.remove(listener);
    }
    _handleKeyEvent(message : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let event : RawKeyEvent = RawKeyEvent.fromMessage(message);
            if (op(Op.EQUALS,event,null)) {
                return;
            }
            if (is(event, RawKeyDownEvent)) {
                this._keysPressed.add(event.logicalKey);
            }
            if (is(event, RawKeyUpEvent)) {
                this._keysPressed.remove(event.logicalKey);
            }
            if (this._listeners.isEmpty) {
                return;
            }
            for(let listener of op(Op.LT,core.DartList<E>,lib8.ValueChanged)) new core.DartList.literal<RawKeyEvent>() > .from(this._listeners);
            {
                if (this._listeners.contains(listener)) {
                    listener(event);
                }
            }
        } )());
    }

    _keysPressed : core.DartSet<lib3.LogicalKeyboardKey>;

    get keysPressed() : core.DartSet<lib3.LogicalKeyboardKey> {
        return this._keysPressed.toSet();
    }
}

export namespace RawKeyDownEvent {
    export type Constructors = RawKeyEvent.Constructors | 'RawKeyDownEvent';
    export type Interface = Omit<RawKeyDownEvent, Constructors>;
}
@DartClass
export class RawKeyDownEvent extends RawKeyEvent {
    constructor(_namedArguments? : {data? : RawKeyEventData,character? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawKeyDownEvent(_namedArguments? : {data? : RawKeyEventData,character? : string}) {
        let {data,character} = Object.assign({
        }, _namedArguments );
        super.RawKeyEvent({
            data : data,character : character});
    }
}

export namespace RawKeyUpEvent {
    export type Constructors = RawKeyEvent.Constructors | 'RawKeyUpEvent';
    export type Interface = Omit<RawKeyUpEvent, Constructors>;
}
@DartClass
export class RawKeyUpEvent extends RawKeyEvent {
    constructor(_namedArguments? : {data? : RawKeyEventData,character? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawKeyUpEvent(_namedArguments? : {data? : RawKeyEventData,character? : string}) {
        let {data,character} = Object.assign({
        }, _namedArguments );
        super.RawKeyEvent({
            data : data,character : character});
    }
}

export class properties {
}
