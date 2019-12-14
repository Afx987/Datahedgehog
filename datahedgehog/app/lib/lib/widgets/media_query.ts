/** Library asset:datahedgehog_monitor/lib/lib/widgets/media_query.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export enum Orientation {
    portrait,
    landscape
}

export namespace MediaQueryData {
    export type Constructors = 'MediaQueryData' | 'fromWindow';
    export type Interface = Omit<MediaQueryData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class MediaQueryData {
    constructor(_namedArguments? : {size? : any,devicePixelRatio? : double,textScaleFactor? : double,platformBrightness? : any,padding? : lib3.EdgeInsets,viewInsets? : lib3.EdgeInsets,alwaysUse24HourFormat? : boolean,accessibleNavigation? : boolean,invertColors? : boolean,disableAnimations? : boolean,boldText? : boolean}) {
    }
    @defaultConstructor
    MediaQueryData(_namedArguments? : {size? : any,devicePixelRatio? : double,textScaleFactor? : double,platformBrightness? : any,padding? : lib3.EdgeInsets,viewInsets? : lib3.EdgeInsets,alwaysUse24HourFormat? : boolean,accessibleNavigation? : boolean,invertColors? : boolean,disableAnimations? : boolean,boldText? : boolean}) {
        let {size,devicePixelRatio,textScaleFactor,platformBrightness,padding,viewInsets,alwaysUse24HourFormat,accessibleNavigation,invertColors,disableAnimations,boldText} = Object.assign({
            "size" : Size.zero,
            "devicePixelRatio" : 1.0,
            "textScaleFactor" : 1.0,
            "platformBrightness" : Brightness.light,
            "padding" : lib3.EdgeInsets.zero,
            "viewInsets" : lib3.EdgeInsets.zero,
            "alwaysUse24HourFormat" : false,
            "accessibleNavigation" : false,
            "invertColors" : false,
            "disableAnimations" : false,
            "boldText" : false}, _namedArguments );
        this.size = size;
        this.devicePixelRatio = devicePixelRatio;
        this.textScaleFactor = textScaleFactor;
        this.platformBrightness = platformBrightness;
        this.padding = padding;
        this.viewInsets = viewInsets;
        this.alwaysUse24HourFormat = alwaysUse24HourFormat;
        this.accessibleNavigation = accessibleNavigation;
        this.invertColors = invertColors;
        this.disableAnimations = disableAnimations;
        this.boldText = boldText;
    }
    @namedConstructor
    fromWindow(window : any) {
        this.size = op(Op.DIVIDE,window.physicalSize,window.devicePixelRatio);
        this.devicePixelRatio = window.devicePixelRatio;
        this.textScaleFactor = window.textScaleFactor;
        this.platformBrightness = window.platformBrightness;
        this.padding = lib3.EdgeInsets.fromWindowPadding(window.padding,window.devicePixelRatio);
        this.viewInsets = lib3.EdgeInsets.fromWindowPadding(window.viewInsets,window.devicePixelRatio);
        this.accessibleNavigation = window.accessibilityFeatures.accessibleNavigation;
        this.invertColors = window.accessibilityFeatures.invertColors;
        this.disableAnimations = window.accessibilityFeatures.disableAnimations;
        this.boldText = window.accessibilityFeatures.boldText;
        this.alwaysUse24HourFormat = window.alwaysUse24HourFormat;
    }
    static fromWindow : new(window : any) => MediaQueryData;

    size : any;

    devicePixelRatio : double;

    textScaleFactor : double;

    platformBrightness : any;

    viewInsets : lib3.EdgeInsets;

    padding : lib3.EdgeInsets;

    alwaysUse24HourFormat : boolean;

    accessibleNavigation : boolean;

    invertColors : boolean;

    disableAnimations : boolean;

    boldText : boolean;

    get orientation() : Orientation {
        return op(Op.GT,this.size.width,this.size.height) ? Orientation.landscape : Orientation.portrait;
    }
    copyWith(_namedArguments? : {size? : any,devicePixelRatio? : double,textScaleFactor? : double,platformBrightness? : any,padding? : lib3.EdgeInsets,viewInsets? : lib3.EdgeInsets,alwaysUse24HourFormat? : boolean,disableAnimations? : boolean,invertColors? : boolean,accessibleNavigation? : boolean,boldText? : boolean}) : MediaQueryData {
        let {size,devicePixelRatio,textScaleFactor,platformBrightness,padding,viewInsets,alwaysUse24HourFormat,disableAnimations,invertColors,accessibleNavigation,boldText} = Object.assign({
        }, _namedArguments );
        return MediaQueryData({
            size : (size || this.size),devicePixelRatio : (devicePixelRatio || this.devicePixelRatio),textScaleFactor : (textScaleFactor || this.textScaleFactor),platformBrightness : (platformBrightness || this.platformBrightness),padding : (padding || this.padding),viewInsets : (viewInsets || this.viewInsets),alwaysUse24HourFormat : (alwaysUse24HourFormat || this.alwaysUse24HourFormat),invertColors : (invertColors || this.invertColors),disableAnimations : (disableAnimations || this.disableAnimations),accessibleNavigation : (accessibleNavigation || this.accessibleNavigation),boldText : (boldText || this.boldText)});
    }
    removePadding(_namedArguments? : {removeLeft? : boolean,removeTop? : boolean,removeRight? : boolean,removeBottom? : boolean}) : MediaQueryData {
        let {removeLeft,removeTop,removeRight,removeBottom} = Object.assign({
            "removeLeft" : false,
            "removeTop" : false,
            "removeRight" : false,
            "removeBottom" : false}, _namedArguments );
        if (!(removeLeft || removeTop || removeRight || removeBottom)) return this;
        return MediaQueryData({
            size : this.size,devicePixelRatio : this.devicePixelRatio,textScaleFactor : this.textScaleFactor,platformBrightness : this.platformBrightness,padding : this.padding.copyWith({
                left : removeLeft ? 0.0 : null,top : removeTop ? 0.0 : null,right : removeRight ? 0.0 : null,bottom : removeBottom ? 0.0 : null}),viewInsets : this.viewInsets,alwaysUse24HourFormat : this.alwaysUse24HourFormat,disableAnimations : this.disableAnimations,invertColors : this.invertColors,accessibleNavigation : this.accessibleNavigation,boldText : this.boldText});
    }
    removeViewInsets(_namedArguments? : {removeLeft? : boolean,removeTop? : boolean,removeRight? : boolean,removeBottom? : boolean}) : MediaQueryData {
        let {removeLeft,removeTop,removeRight,removeBottom} = Object.assign({
            "removeLeft" : false,
            "removeTop" : false,
            "removeRight" : false,
            "removeBottom" : false}, _namedArguments );
        if (!(removeLeft || removeTop || removeRight || removeBottom)) return this;
        return MediaQueryData({
            size : this.size,devicePixelRatio : this.devicePixelRatio,textScaleFactor : this.textScaleFactor,platformBrightness : this.platformBrightness,padding : this.padding,viewInsets : this.viewInsets.copyWith({
                left : removeLeft ? 0.0 : null,top : removeTop ? 0.0 : null,right : removeRight ? 0.0 : null,bottom : removeBottom ? 0.0 : null}),alwaysUse24HourFormat : this.alwaysUse24HourFormat,disableAnimations : this.disableAnimations,invertColors : this.invertColors,accessibleNavigation : this.accessibleNavigation,boldText : this.boldText});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : MediaQueryData = other;
        return op(Op.EQUALS,typedOther.size,this.size) && typedOther.devicePixelRatio == this.devicePixelRatio && typedOther.textScaleFactor == this.textScaleFactor && op(Op.EQUALS,typedOther.platformBrightness,this.platformBrightness) && op(Op.EQUALS,typedOther.padding,this.padding) && op(Op.EQUALS,typedOther.viewInsets,this.viewInsets) && typedOther.alwaysUse24HourFormat == this.alwaysUse24HourFormat && typedOther.disableAnimations == this.disableAnimations && typedOther.invertColors == this.invertColors && typedOther.accessibleNavigation == this.accessibleNavigation && typedOther.boldText == this.boldText;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.size,this.devicePixelRatio,this.textScaleFactor,this.platformBrightness,this.padding,this.viewInsets,this.alwaysUse24HourFormat,this.disableAnimations,this.invertColors,this.accessibleNavigation,this.boldText);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(` + `size: ${this.size}, ` + `devicePixelRatio: ${new core.DartDouble(this.devicePixelRatio).toStringAsFixed(1)}, ` + `textScaleFactor: ${new core.DartDouble(this.textScaleFactor).toStringAsFixed(1)}, ` + `platformBrightness: ${this.platformBrightness}, ` + `padding: ${this.padding}, ` + `viewInsets: ${this.viewInsets}, ` + `alwaysUse24HourFormat: ${this.alwaysUse24HourFormat}, ` + `accessibleNavigation: ${this.accessibleNavigation}` + `disableAnimations: ${this.disableAnimations}` + `invertColors: ${this.invertColors}` + `boldText: ${this.boldText}` + ')';
    }
}

export namespace MediaQuery {
    export type Constructors = lib4.InheritedWidget.Constructors | 'MediaQuery';
    export type Interface = Omit<MediaQuery, Constructors>;
}
@DartClass
export class MediaQuery extends lib4.InheritedWidget {
    constructor(_namedArguments? : {key? : lib5.Key,data? : MediaQueryData,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MediaQuery(_namedArguments? : {key? : lib5.Key,data? : MediaQueryData,child? : lib4.Widget}) {
        let {key,data,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.data = data;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    @namedFactory
    static $removePadding(_namedArguments? : {key? : lib5.Key,context? : lib4.BuildContext,removeLeft? : boolean,removeTop? : boolean,removeRight? : boolean,removeBottom? : boolean,child? : lib4.Widget}) : MediaQuery {
        let {key,context,removeLeft,removeTop,removeRight,removeBottom,child} = Object.assign({
            "removeLeft" : false,
            "removeTop" : false,
            "removeRight" : false,
            "removeBottom" : false}, _namedArguments );
        return MediaQuery({
            key : key,data : MediaQuery.of(context).removePadding({
                removeLeft : removeLeft,removeTop : removeTop,removeRight : removeRight,removeBottom : removeBottom}),child : child});
    }
    static removePadding : new(_namedArguments? : {key? : lib5.Key,context? : lib4.BuildContext,removeLeft? : boolean,removeTop? : boolean,removeRight? : boolean,removeBottom? : boolean,child? : lib4.Widget}) => MediaQuery;

    @namedFactory
    static $removeViewInsets(_namedArguments? : {key? : lib5.Key,context? : lib4.BuildContext,removeLeft? : boolean,removeTop? : boolean,removeRight? : boolean,removeBottom? : boolean,child? : lib4.Widget}) : MediaQuery {
        let {key,context,removeLeft,removeTop,removeRight,removeBottom,child} = Object.assign({
            "removeLeft" : false,
            "removeTop" : false,
            "removeRight" : false,
            "removeBottom" : false}, _namedArguments );
        return MediaQuery({
            key : key,data : MediaQuery.of(context).removeViewInsets({
                removeLeft : removeLeft,removeTop : removeTop,removeRight : removeRight,removeBottom : removeBottom}),child : child});
    }
    static removeViewInsets : new(_namedArguments? : {key? : lib5.Key,context? : lib4.BuildContext,removeLeft? : boolean,removeTop? : boolean,removeRight? : boolean,removeBottom? : boolean,child? : lib4.Widget}) => MediaQuery;

    data : MediaQueryData;

    static of(context : lib4.BuildContext,_namedArguments? : {nullOk? : boolean}) : MediaQueryData {
        let {nullOk} = Object.assign({
            "nullOk" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        /* TODO (AssertStatementImpl) : assert (nullOk != null); */;
        let query : MediaQuery = context.inheritFromWidgetOfExactType(MediaQuery);
        if (query != null) return query.data;
        if (nullOk) return null;
        throw lib6.FlutterError('MediaQuery.of() called with a context that does not contain a MediaQuery.\n' + 'No MediaQuery ancestor could be found starting from the context that was passed ' + 'to MediaQuery.of(). This can happen because you do not have a WidgetsApp or ' + 'MaterialApp widget (those widgets introduce a MediaQuery), or it can happen ' + 'if the context you use comes from a widget above those widgets.\n' + 'The context used was:\n' + `  ${context}`);
    }
    static textScaleFactorOf(context : lib4.BuildContext) : double {
        return (((t)=>(!!t)?t.textScaleFactor:null)(MediaQuery.of(context,{
            nullOk : true})) || 1.0);
    }
    static platformBrightnessOf(context : lib4.BuildContext) : any {
        return (((t)=>(!!t)?t.platformBrightness:null)(MediaQuery.of(context,{
            nullOk : true})) || Brightness.light);
    }
    static boldTextOverride(context : lib4.BuildContext) : boolean {
        return (((t)=>(!!t)?t.boldText:null)(MediaQuery.of(context,{
            nullOk : true})) || false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : MediaQuery) : boolean {
        return this.data != oldWidget.data;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('data',this.data,{
            showName : false}));
    }
}

export class properties {
}
