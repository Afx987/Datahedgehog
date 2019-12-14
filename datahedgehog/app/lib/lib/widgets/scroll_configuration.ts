/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_configuration.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "./overscroll_indicator";
import * as lib7 from "./scroll_physics";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace ScrollBehavior {
    export type Constructors = 'ScrollBehavior';
    export type Interface = Omit<ScrollBehavior, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ScrollBehavior {
    constructor() {
    }
    @defaultConstructor
    ScrollBehavior() {
    }
    getPlatform(context : lib3.BuildContext) : lib4.TargetPlatform {
        return lib4.properties.defaultTargetPlatform;
    }
    buildViewportChrome(context : lib3.BuildContext,child : lib3.Widget,axisDirection : lib5.AxisDirection) : lib3.Widget {
        switch (this.getPlatform(context)) {
            case lib4.TargetPlatform.iOS:
                return child;
            case lib4.TargetPlatform.android:
            case lib4.TargetPlatform.fuchsia:
                return lib6.GlowingOverscrollIndicator({
                    child : child,axisDirection : axisDirection,color : properties._kDefaultGlowColor});
        }
        return null;
    }
    getScrollPhysics(context : lib3.BuildContext) : lib7.ScrollPhysics {
        switch (this.getPlatform(context)) {
            case lib4.TargetPlatform.iOS:
                return new lib7.BouncingScrollPhysics();
            case lib4.TargetPlatform.android:
            case lib4.TargetPlatform.fuchsia:
                return new lib7.ClampingScrollPhysics();
        }
        return null;
    }
    shouldNotify(oldDelegate : ScrollBehavior) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export namespace ScrollConfiguration {
    export type Constructors = lib3.InheritedWidget.Constructors | 'ScrollConfiguration';
    export type Interface = Omit<ScrollConfiguration, Constructors>;
}
@DartClass
export class ScrollConfiguration extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib8.Key,behavior? : ScrollBehavior,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollConfiguration(_namedArguments? : {key? : lib8.Key,behavior? : ScrollBehavior,child? : lib3.Widget}) {
        let {key,behavior,child} = Object.assign({
        }, _namedArguments );
        super.InheritedWidget({
            key : key,child : child});
        this.behavior = behavior;
    }
    behavior : ScrollBehavior;

    static of(context : lib3.BuildContext) : ScrollBehavior {
        let configuration : ScrollConfiguration = context.inheritFromWidgetOfExactType(ScrollConfiguration);
        return (((t)=>(!!t)?t.behavior:null)(configuration) || new ScrollBehavior());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : ScrollConfiguration) : boolean {
        /* TODO (AssertStatementImpl) : assert (behavior != null); */;
        return this.behavior.runtimeType != oldWidget.behavior.runtimeType || (this.behavior != oldWidget.behavior && this.behavior.shouldNotify(oldWidget.behavior));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.DiagnosticsProperty('behavior',this.behavior));
    }
}

export class properties {
    private static __$_kDefaultGlowColor : any;
    static get _kDefaultGlowColor() : any { 
        if (this.__$_kDefaultGlowColor===undefined) {
            this.__$_kDefaultGlowColor = Color(4294967295);
        }
        return this.__$_kDefaultGlowColor;
    }
    static set _kDefaultGlowColor(__$value : any)  { 
        this.__$_kDefaultGlowColor = __$value;
    }

}
