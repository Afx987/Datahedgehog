/** Library asset:datahedgehog_monitor/lib/lib/services/system_channels.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./message_codecs";
import * as lib4 from "./platform_channel";

export namespace SystemChannels {
    export type Constructors = '_';
    export type Interface = Omit<SystemChannels, Constructors>;
}
@DartClass
export class SystemChannels {
    @namedConstructor
    _() {
    }
    static _ : new() => SystemChannels;

    private static __$navigation : lib4.MethodChannel;
    static get navigation() : lib4.MethodChannel { 
        if (this.__$navigation===undefined) {
            this.__$navigation = lib4.MethodChannel('flutter/navigation',lib3.JSONMethodCodec());
        }
        return this.__$navigation;
    }

    private static __$platform : lib4.MethodChannel;
    static get platform() : lib4.MethodChannel { 
        if (this.__$platform===undefined) {
            this.__$platform = lib4.OptionalMethodChannel('flutter/platform',lib3.JSONMethodCodec());
        }
        return this.__$platform;
    }

    private static __$textInput : lib4.MethodChannel;
    static get textInput() : lib4.MethodChannel { 
        if (this.__$textInput===undefined) {
            this.__$textInput = lib4.OptionalMethodChannel('flutter/textinput',lib3.JSONMethodCodec());
        }
        return this.__$textInput;
    }

    private static __$keyEvent : lib4.BasicMessageChannel<any>;
    static get keyEvent() : lib4.BasicMessageChannel<any> { 
        if (this.__$keyEvent===undefined) {
            this.__$keyEvent = lib4.BasicMessageChannel('flutter/keyevent',lib3.JSONMessageCodec());
        }
        return this.__$keyEvent;
    }

    private static __$lifecycle : lib4.BasicMessageChannel<string>;
    static get lifecycle() : lib4.BasicMessageChannel<string> { 
        if (this.__$lifecycle===undefined) {
            this.__$lifecycle = lib4.BasicMessageChannel('flutter/lifecycle',lib3.StringCodec());
        }
        return this.__$lifecycle;
    }

    private static __$system : lib4.BasicMessageChannel<any>;
    static get system() : lib4.BasicMessageChannel<any> { 
        if (this.__$system===undefined) {
            this.__$system = lib4.BasicMessageChannel('flutter/system',lib3.JSONMessageCodec());
        }
        return this.__$system;
    }

    private static __$accessibility : lib4.BasicMessageChannel<any>;
    static get accessibility() : lib4.BasicMessageChannel<any> { 
        if (this.__$accessibility===undefined) {
            this.__$accessibility = lib4.BasicMessageChannel('flutter/accessibility',lib3.StandardMessageCodec());
        }
        return this.__$accessibility;
    }

    private static __$platform_views : lib4.MethodChannel;
    static get platform_views() : lib4.MethodChannel { 
        if (this.__$platform_views===undefined) {
            this.__$platform_views = lib4.MethodChannel('flutter/platform_views',lib3.StandardMethodCodec());
        }
        return this.__$platform_views;
    }

    private static __$skia : lib4.MethodChannel;
    static get skia() : lib4.MethodChannel { 
        if (this.__$skia===undefined) {
            this.__$skia = lib4.MethodChannel('flutter/skia',lib3.JSONMethodCodec());
        }
        return this.__$skia;
    }

}

export class properties {
}
