/** Library asset:datahedgehog_monitor/lib/lib/widgets/size_changed_layout_notifier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./notification_listener";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/view";

export namespace SizeChangedLayoutNotification {
    export type Constructors = lib3.LayoutChangedNotification.Constructors | 'SizeChangedLayoutNotification';
    export type Interface = Omit<SizeChangedLayoutNotification, Constructors>;
}
@DartClass
export class SizeChangedLayoutNotification extends lib3.LayoutChangedNotification {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SizeChangedLayoutNotification() {
    }
}

export namespace SizeChangedLayoutNotifier {
    export type Constructors = lib4.SingleChildRenderObjectWidget.Constructors | 'SizeChangedLayoutNotifier';
    export type Interface = Omit<SizeChangedLayoutNotifier, Constructors>;
}
@DartClass
export class SizeChangedLayoutNotifier extends lib4.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SizeChangedLayoutNotifier(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib4.BuildContext) : _RenderSizeChangedWithCallback {
        return _RenderSizeChangedWithCallback({
            onLayoutChangedCallback : () =>  {
                SizeChangedLayoutNotification().dispatch(context);
            }});
    }
}

export namespace _RenderSizeChangedWithCallback {
    export type Constructors = lib6.RenderProxyBox.Constructors | '_RenderSizeChangedWithCallback';
    export type Interface = Omit<_RenderSizeChangedWithCallback, Constructors>;
}
@DartClass
export class _RenderSizeChangedWithCallback extends lib6.RenderProxyBox {
    constructor(_namedArguments? : {child? : any,onLayoutChangedCallback? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSizeChangedWithCallback(_namedArguments? : {child? : any,onLayoutChangedCallback? : any}) {
        let {child,onLayoutChangedCallback} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.onLayoutChangedCallback = onLayoutChangedCallback;
    }
     : any;

     : any;

    onLayoutChangedCallback : any;

    _oldSize : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        super.performLayout();
        if (this._oldSize != null && lib7.properties.size != this._oldSize) this.onLayoutChangedCallback();
        this._oldSize = lib7.properties.size;
    }
}

export class properties {
}
