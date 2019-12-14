/** Library asset:datahedgehog_monitor/lib/lib/material/theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./theme_data";
import * as lib6 from "./material_localizations";
import * as lib7 from "./typography";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/cupertino/theme";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/drag_target";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/curves";

export namespace Theme {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Theme';
    export type Interface = Omit<Theme, Constructors>;
}
@DartClass
export class Theme extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,data? : lib5.ThemeData,isMaterialAppTheme? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Theme(_namedArguments? : {key? : lib4.Key,data? : lib5.ThemeData,isMaterialAppTheme? : boolean,child? : lib3.Widget}) {
        let {key,data,isMaterialAppTheme,child} = Object.assign({
            "isMaterialAppTheme" : false}, _namedArguments );
        this.assert = assert;
        this.data = data;
        this.isMaterialAppTheme = isMaterialAppTheme;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    data : lib5.ThemeData;

    isMaterialAppTheme : boolean;

    child : lib3.Widget;

    private static __$_kFallbackTheme : lib5.ThemeData;
    static get _kFallbackTheme() : lib5.ThemeData { 
        if (this.__$_kFallbackTheme===undefined) {
            this.__$_kFallbackTheme = lib5.ThemeData.fallback();
        }
        return this.__$_kFallbackTheme;
    }
    static set _kFallbackTheme(__$value : lib5.ThemeData)  { 
        this.__$_kFallbackTheme = __$value;
    }

    static of(context : lib3.BuildContext,_namedArguments? : {shadowThemeOnly? : boolean}) : lib5.ThemeData {
        let {shadowThemeOnly} = Object.assign({
            "shadowThemeOnly" : false}, _namedArguments );
        let inheritedTheme : _InheritedTheme = context.inheritFromWidgetOfExactType(_InheritedTheme);
        if (shadowThemeOnly) {
            if (op(Op.EQUALS,inheritedTheme,null) || inheritedTheme.theme.isMaterialAppTheme) return null;
            return inheritedTheme.theme.data;
        }
        let localizations : lib6.MaterialLocalizations = lib6.MaterialLocalizations.of(context);
        let category : lib7.ScriptCategory = (((t)=>(!!t)?t.scriptCategory:null)(localizations) || lib7.ScriptCategory.englishLike);
        let theme : lib5.ThemeData = (((t)=>(!!t)?t.data:null)(((t)=>(!!t)?t.theme:null)(inheritedTheme)) || Theme._kFallbackTheme);
        return lib5.ThemeData.localize(theme,theme.typography.geometryThemeFor(category));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return _InheritedTheme({
            theme : this,child : lib9.IconTheme({
                data : this.data.iconTheme,child : lib8.CupertinoTheme({
                    data : lib5.MaterialBasedCupertinoThemeData({
                        materialTheme : this.data}),child : this.child})})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib10.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib10.DiagnosticsProperty('data',this.data,{
            showName : false}));
    }
}

export namespace _InheritedTheme {
    export type Constructors = lib3.InheritedWidget.Constructors | '_InheritedTheme';
    export type Interface = Omit<_InheritedTheme, Constructors>;
}
@DartClass
export class _InheritedTheme extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,theme? : Theme,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InheritedTheme(_namedArguments? : {key? : lib4.Key,theme? : Theme,child? : lib3.Widget}) {
        let {key,theme,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.theme = theme;
    }
     : any;

     : any;

    key;
    child;

     : any;

    theme : Theme;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(old : _InheritedTheme) : boolean {
        return this.theme.data != old.theme.data;
    }
}

export namespace ThemeDataTween {
    export type Constructors = lib11.Tween.Constructors | 'ThemeDataTween';
    export type Interface = Omit<ThemeDataTween, Constructors>;
}
@DartClass
export class ThemeDataTween extends lib11.Tween<lib5.ThemeData> {
    constructor(_namedArguments? : {begin? : lib5.ThemeData,end? : lib5.ThemeData}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThemeDataTween(_namedArguments? : {begin? : lib5.ThemeData,end? : lib5.ThemeData}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib5.ThemeData {
        return lib5.ThemeData.lerp(this.begin,lib12.end,t);
    }
}

export namespace AnimatedTheme {
    export type Constructors = lib13.ImplicitlyAnimatedWidget.Constructors | 'AnimatedTheme';
    export type Interface = Omit<AnimatedTheme, Constructors>;
}
@DartClass
export class AnimatedTheme extends lib13.ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,data? : lib5.ThemeData,isMaterialAppTheme? : boolean,curve? : lib14.Curve,duration? : core.DartDuration,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedTheme(_namedArguments? : {key? : lib4.Key,data? : lib5.ThemeData,isMaterialAppTheme? : boolean,curve? : lib14.Curve,duration? : core.DartDuration,child? : lib3.Widget}) {
        let {key,data,isMaterialAppTheme,curve,duration,child} = Object.assign({
            "isMaterialAppTheme" : false,
            "curve" : lib14.Curves.linear,
            "duration" : properties.kThemeAnimationDuration}, _namedArguments );
        this.assert = assert;
        this.data = data;
        this.isMaterialAppTheme = isMaterialAppTheme;
        this.child = child;
    }
     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    data : lib5.ThemeData;

    isMaterialAppTheme : boolean;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedThemeState {
        return _AnimatedThemeState();
    }
}

export namespace _AnimatedThemeState {
    export type Constructors = lib13.AnimatedWidgetBaseState.Constructors | '_AnimatedThemeState';
    export type Interface = Omit<_AnimatedThemeState, Constructors>;
}
@DartClass
export class _AnimatedThemeState extends lib13.AnimatedWidgetBaseState<AnimatedTheme> {
    _data : ThemeDataTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib11.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib11.Tween<any>) => lib11.Tween<any>) : any {
        this._data = visitor(this._data,widget.data,(value : any) =>  {
            return ThemeDataTween({
                begin : value});
        });
        /* TODO (AssertStatementImpl) : assert (_data != null); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return Theme({
            isMaterialAppTheme : widget.isMaterialAppTheme,child : widget.child,data : this._data.evaluate(this.animation)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib10.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib10.DiagnosticsProperty('data',this._data,{
            showName : false,defaultValue : null}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedThemeState() {
    }
}

export class properties {
    private static __$kThemeAnimationDuration : core.DartDuration;
    static get kThemeAnimationDuration() : core.DartDuration { 
        if (this.__$kThemeAnimationDuration===undefined) {
            this.__$kThemeAnimationDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$kThemeAnimationDuration;
    }
    static set kThemeAnimationDuration(__$value : core.DartDuration)  { 
        this.__$kThemeAnimationDuration = __$value;
    }

}
