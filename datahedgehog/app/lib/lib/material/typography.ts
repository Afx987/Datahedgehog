/** Library asset:datahedgehog_monitor/lib/lib/material/typography.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib5 from "./text_theme";
import * as lib6 from "./colors";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/text_style";

export enum ScriptCategory {
    englishLike,
    dense,
    tall
}

export namespace Typography {
    export type Constructors = lib3.Diagnosticable.Constructors | '_';
    export type Interface = Omit<Typography, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Typography extends lib3.Diagnosticable {
    constructor(_namedArguments? : {platform? : lib4.TargetPlatform,black? : lib5.TextTheme,white? : lib5.TextTheme,englishLike? : lib5.TextTheme,dense? : lib5.TextTheme,tall? : lib5.TextTheme}) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $Typography(_namedArguments? : {platform? : lib4.TargetPlatform,black? : lib5.TextTheme,white? : lib5.TextTheme,englishLike? : lib5.TextTheme,dense? : lib5.TextTheme,tall? : lib5.TextTheme}) : Typography {
        let {platform,black,white,englishLike,dense,tall} = Object.assign({
            "platform" : lib4.TargetPlatform.android}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (platform != null || (black != null && white != null)); */;
        switch (platform) {
            case lib4.TargetPlatform.iOS:
                black = ( black ) || ( Typography.blackCupertino );
                white = ( white ) || ( Typography.whiteCupertino );
                break;
            case lib4.TargetPlatform.android:
            case lib4.TargetPlatform.fuchsia:
                black = ( black ) || ( Typography.blackMountainView );
                white = ( white ) || ( Typography.whiteMountainView );
        }
        englishLike = ( englishLike ) || ( Typography.englishLike2014 );
        dense = ( dense ) || ( Typography.dense2014 );
        tall = ( tall ) || ( Typography.tall2014 );
        return Typography._(black,white,englishLike,dense,tall);
    }
    @namedConstructor
    _(black : lib5.TextTheme,white : lib5.TextTheme,englishLike : lib5.TextTheme,dense : lib5.TextTheme,tall : lib5.TextTheme) {
        this.assert = assert;
        this.black = black;
        this.white = white;
        this.englishLike = englishLike;
        this.dense = dense;
        this.tall = tall;
    }
    static _ : new(black : lib5.TextTheme,white : lib5.TextTheme,englishLike : lib5.TextTheme,dense : lib5.TextTheme,tall : lib5.TextTheme) => Typography;

     : any;

     : any;

     : any;

     : any;

     : any;

    black : lib5.TextTheme;

    white : lib5.TextTheme;

    englishLike : lib5.TextTheme;

    dense : lib5.TextTheme;

    tall : lib5.TextTheme;

    geometryThemeFor(category : ScriptCategory) : lib5.TextTheme {
        /* TODO (AssertStatementImpl) : assert (category != null); */;
        switch (category) {
            case ScriptCategory.englishLike:
                return this.englishLike;
            case ScriptCategory.dense:
                return this.dense;
            case ScriptCategory.tall:
                return this.tall;
        }
        return null;
    }
    copyWith(_namedArguments? : {black? : lib5.TextTheme,white? : lib5.TextTheme,englishLike? : lib5.TextTheme,dense? : lib5.TextTheme,tall? : lib5.TextTheme}) : Typography {
        let {black,white,englishLike,dense,tall} = Object.assign({
        }, _namedArguments );
        return Typography({
            black : (black || this.black),white : (white || this.white),englishLike : (englishLike || this.englishLike),dense : (dense || this.dense),tall : (tall || this.tall)});
    }
    static lerp(a : Typography,b : Typography,t : double) : Typography {
        return Typography({
            black : lib5.TextTheme.lerp(a.black,b.black,t),white : lib5.TextTheme.lerp(a.white,b.white,t),englishLike : lib5.TextTheme.lerp(a.englishLike,b.englishLike,t),dense : lib5.TextTheme.lerp(a.dense,b.dense,t),tall : lib5.TextTheme.lerp(a.tall,b.tall,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let otherTypography : Typography = other;
        return op(Op.EQUALS,otherTypography.black,this.black) && op(Op.EQUALS,otherTypography.white,this.white) && op(Op.EQUALS,otherTypography.englishLike,this.englishLike) && op(Op.EQUALS,otherTypography.dense,this.dense) && op(Op.EQUALS,otherTypography.tall,this.tall);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.black,this.white,this.englishLike,this.dense,this.tall);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultTypography : Typography = Typography();
        properties.add(lib3.DiagnosticsProperty('black',this.black,{
            defaultValue : defaultTypography.black}));
        properties.add(lib3.DiagnosticsProperty('white',this.white,{
            defaultValue : defaultTypography.white}));
        properties.add(lib3.DiagnosticsProperty('englishLike',this.englishLike,{
            defaultValue : defaultTypography.englishLike}));
        properties.add(lib3.DiagnosticsProperty('dense',this.dense,{
            defaultValue : defaultTypography.dense}));
        properties.add(lib3.DiagnosticsProperty('tall',this.tall,{
            defaultValue : defaultTypography.tall}));
    }
    private static __$blackMountainView : lib5.TextTheme;
    static get blackMountainView() : lib5.TextTheme { 
        if (this.__$blackMountainView===undefined) {
            this.__$blackMountainView = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'blackMountainView display4',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),display3 : lib7.TextStyle({
                    debugLabel : 'blackMountainView display3',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),display2 : lib7.TextStyle({
                    debugLabel : 'blackMountainView display2',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),display1 : lib7.TextStyle({
                    debugLabel : 'blackMountainView display1',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),headline : lib7.TextStyle({
                    debugLabel : 'blackMountainView headline',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),title : lib7.TextStyle({
                    debugLabel : 'blackMountainView title',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),subhead : lib7.TextStyle({
                    debugLabel : 'blackMountainView subhead',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),body2 : lib7.TextStyle({
                    debugLabel : 'blackMountainView body2',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),body1 : lib7.TextStyle({
                    debugLabel : 'blackMountainView body1',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),caption : lib7.TextStyle({
                    debugLabel : 'blackMountainView caption',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),button : lib7.TextStyle({
                    debugLabel : 'blackMountainView button',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),subtitle : lib7.TextStyle({
                    debugLabel : 'blackMountainView subtitle',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black,decoration : TextDecoration.none}),overline : lib7.TextStyle({
                    debugLabel : 'blackMountainView overline',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.black,decoration : TextDecoration.none})});
        }
        return this.__$blackMountainView;
    }

    private static __$whiteMountainView : lib5.TextTheme;
    static get whiteMountainView() : lib5.TextTheme { 
        if (this.__$whiteMountainView===undefined) {
            this.__$whiteMountainView = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'whiteMountainView display4',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),display3 : lib7.TextStyle({
                    debugLabel : 'whiteMountainView display3',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),display2 : lib7.TextStyle({
                    debugLabel : 'whiteMountainView display2',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),display1 : lib7.TextStyle({
                    debugLabel : 'whiteMountainView display1',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),headline : lib7.TextStyle({
                    debugLabel : 'whiteMountainView headline',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),title : lib7.TextStyle({
                    debugLabel : 'whiteMountainView title',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),subhead : lib7.TextStyle({
                    debugLabel : 'whiteMountainView subhead',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),body2 : lib7.TextStyle({
                    debugLabel : 'whiteMountainView body2',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),body1 : lib7.TextStyle({
                    debugLabel : 'whiteMountainView body1',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),caption : lib7.TextStyle({
                    debugLabel : 'whiteMountainView caption',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),button : lib7.TextStyle({
                    debugLabel : 'whiteMountainView button',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),subtitle : lib7.TextStyle({
                    debugLabel : 'whiteMountainView subtitle',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),overline : lib7.TextStyle({
                    debugLabel : 'whiteMountainView overline',fontFamily : 'Roboto',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none})});
        }
        return this.__$whiteMountainView;
    }

    private static __$blackCupertino : lib5.TextTheme;
    static get blackCupertino() : lib5.TextTheme { 
        if (this.__$blackCupertino===undefined) {
            this.__$blackCupertino = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'blackCupertino display4',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),display3 : lib7.TextStyle({
                    debugLabel : 'blackCupertino display3',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),display2 : lib7.TextStyle({
                    debugLabel : 'blackCupertino display2',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),display1 : lib7.TextStyle({
                    debugLabel : 'blackCupertino display1',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),headline : lib7.TextStyle({
                    debugLabel : 'blackCupertino headline',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),title : lib7.TextStyle({
                    debugLabel : 'blackCupertino title',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),subhead : lib7.TextStyle({
                    debugLabel : 'blackCupertino subhead',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),body2 : lib7.TextStyle({
                    debugLabel : 'blackCupertino body2',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),body1 : lib7.TextStyle({
                    debugLabel : 'blackCupertino body1',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),caption : lib7.TextStyle({
                    debugLabel : 'blackCupertino caption',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.black54,decoration : TextDecoration.none}),button : lib7.TextStyle({
                    debugLabel : 'blackCupertino button',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.black87,decoration : TextDecoration.none}),subtitle : lib7.TextStyle({
                    debugLabel : 'blackCupertino subtitle',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.black,decoration : TextDecoration.none}),overline : lib7.TextStyle({
                    debugLabel : 'blackCupertino overline',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.black,decoration : TextDecoration.none})});
        }
        return this.__$blackCupertino;
    }

    private static __$whiteCupertino : lib5.TextTheme;
    static get whiteCupertino() : lib5.TextTheme { 
        if (this.__$whiteCupertino===undefined) {
            this.__$whiteCupertino = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'whiteCupertino display4',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),display3 : lib7.TextStyle({
                    debugLabel : 'whiteCupertino display3',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),display2 : lib7.TextStyle({
                    debugLabel : 'whiteCupertino display2',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),display1 : lib7.TextStyle({
                    debugLabel : 'whiteCupertino display1',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),headline : lib7.TextStyle({
                    debugLabel : 'whiteCupertino headline',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),title : lib7.TextStyle({
                    debugLabel : 'whiteCupertino title',fontFamily : '.SF UI Display',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),subhead : lib7.TextStyle({
                    debugLabel : 'whiteCupertino subhead',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),body2 : lib7.TextStyle({
                    debugLabel : 'whiteCupertino body2',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),body1 : lib7.TextStyle({
                    debugLabel : 'whiteCupertino body1',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),caption : lib7.TextStyle({
                    debugLabel : 'whiteCupertino caption',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.white70,decoration : TextDecoration.none}),button : lib7.TextStyle({
                    debugLabel : 'whiteCupertino button',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),subtitle : lib7.TextStyle({
                    debugLabel : 'whiteCupertino subtitle',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none}),overline : lib7.TextStyle({
                    debugLabel : 'whiteCupertino overline',fontFamily : '.SF UI Text',inherit : true,color : lib6.Colors.white,decoration : TextDecoration.none})});
        }
        return this.__$whiteCupertino;
    }

    private static __$englishLike2014 : lib5.TextTheme;
    static get englishLike2014() : lib5.TextTheme { 
        if (this.__$englishLike2014===undefined) {
            this.__$englishLike2014 = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'englishLike display4 2014',inherit : false,fontSize : 112.0,fontWeight : FontWeight.w100,textBaseline : TextBaseline.alphabetic}),display3 : lib7.TextStyle({
                    debugLabel : 'englishLike display3 2014',inherit : false,fontSize : 56.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display2 : lib7.TextStyle({
                    debugLabel : 'englishLike display2 2014',inherit : false,fontSize : 45.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display1 : lib7.TextStyle({
                    debugLabel : 'englishLike display1 2014',inherit : false,fontSize : 34.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),headline : lib7.TextStyle({
                    debugLabel : 'englishLike headline 2014',inherit : false,fontSize : 24.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),title : lib7.TextStyle({
                    debugLabel : 'englishLike title 2014',inherit : false,fontSize : 20.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic}),subhead : lib7.TextStyle({
                    debugLabel : 'englishLike subhead 2014',inherit : false,fontSize : 16.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),body2 : lib7.TextStyle({
                    debugLabel : 'englishLike body2 2014',inherit : false,fontSize : 14.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic}),body1 : lib7.TextStyle({
                    debugLabel : 'englishLike body1 2014',inherit : false,fontSize : 14.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),caption : lib7.TextStyle({
                    debugLabel : 'englishLike caption 2014',inherit : false,fontSize : 12.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),button : lib7.TextStyle({
                    debugLabel : 'englishLike button 2014',inherit : false,fontSize : 14.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic}),subtitle : lib7.TextStyle({
                    debugLabel : 'englishLike subtitle 2014',inherit : false,fontSize : 14.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.1}),overline : lib7.TextStyle({
                    debugLabel : 'englishLike overline 2014',inherit : false,fontSize : 10.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 1.5})});
        }
        return this.__$englishLike2014;
    }

    private static __$englishLike2018 : lib5.TextTheme;
    static get englishLike2018() : lib5.TextTheme { 
        if (this.__$englishLike2018===undefined) {
            this.__$englishLike2018 = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'englishLike display4 2018',fontSize : 96.0,fontWeight : FontWeight.w300,textBaseline : TextBaseline.alphabetic,letterSpacing : -1.5}),display3 : lib7.TextStyle({
                    debugLabel : 'englishLike display3 2018',fontSize : 60.0,fontWeight : FontWeight.w300,textBaseline : TextBaseline.alphabetic,letterSpacing : -0.5}),display2 : lib7.TextStyle({
                    debugLabel : 'englishLike display2 2018',fontSize : 48.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.0}),display1 : lib7.TextStyle({
                    debugLabel : 'englishLike display1 2018',fontSize : 34.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.25}),headline : lib7.TextStyle({
                    debugLabel : 'englishLike headline 2018',fontSize : 24.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.0}),title : lib7.TextStyle({
                    debugLabel : 'englishLike title 2018',fontSize : 20.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.15}),subhead : lib7.TextStyle({
                    debugLabel : 'englishLike subhead 2018',fontSize : 16.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.15}),body2 : lib7.TextStyle({
                    debugLabel : 'englishLike body2 2018',fontSize : 14.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.25}),body1 : lib7.TextStyle({
                    debugLabel : 'englishLike body1 2018',fontSize : 16.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.5}),button : lib7.TextStyle({
                    debugLabel : 'englishLike button 2018',fontSize : 14.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.75}),caption : lib7.TextStyle({
                    debugLabel : 'englishLike caption 2018',fontSize : 12.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.4}),subtitle : lib7.TextStyle({
                    debugLabel : 'englishLike subtitle 2018',fontSize : 14.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic,letterSpacing : 0.1}),overline : lib7.TextStyle({
                    debugLabel : 'englishLike overline 2018',fontSize : 10.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic,letterSpacing : 1.5})});
        }
        return this.__$englishLike2018;
    }

    private static __$dense2014 : lib5.TextTheme;
    static get dense2014() : lib5.TextTheme { 
        if (this.__$dense2014===undefined) {
            this.__$dense2014 = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'dense display4 2014',inherit : false,fontSize : 112.0,fontWeight : FontWeight.w100,textBaseline : TextBaseline.ideographic}),display3 : lib7.TextStyle({
                    debugLabel : 'dense display3 2014',inherit : false,fontSize : 56.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),display2 : lib7.TextStyle({
                    debugLabel : 'dense display2 2014',inherit : false,fontSize : 45.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),display1 : lib7.TextStyle({
                    debugLabel : 'dense display1 2014',inherit : false,fontSize : 34.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),headline : lib7.TextStyle({
                    debugLabel : 'dense headline 2014',inherit : false,fontSize : 24.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),title : lib7.TextStyle({
                    debugLabel : 'dense title 2014',inherit : false,fontSize : 21.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.ideographic}),subhead : lib7.TextStyle({
                    debugLabel : 'dense subhead 2014',inherit : false,fontSize : 17.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),body2 : lib7.TextStyle({
                    debugLabel : 'dense body2 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.ideographic}),body1 : lib7.TextStyle({
                    debugLabel : 'dense body1 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),caption : lib7.TextStyle({
                    debugLabel : 'dense caption 2014',inherit : false,fontSize : 13.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),button : lib7.TextStyle({
                    debugLabel : 'dense button 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.ideographic}),subtitle : lib7.TextStyle({
                    debugLabel : 'dense subtitle 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.ideographic}),overline : lib7.TextStyle({
                    debugLabel : 'dense overline 2014',inherit : false,fontSize : 11.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic})});
        }
        return this.__$dense2014;
    }

    private static __$dense2018 : lib5.TextTheme;
    static get dense2018() : lib5.TextTheme { 
        if (this.__$dense2018===undefined) {
            this.__$dense2018 = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'dense display4 2018',fontSize : 96.0,fontWeight : FontWeight.w100,textBaseline : TextBaseline.ideographic}),display3 : lib7.TextStyle({
                    debugLabel : 'dense display3 2018',fontSize : 60.0,fontWeight : FontWeight.w100,textBaseline : TextBaseline.ideographic}),display2 : lib7.TextStyle({
                    debugLabel : 'dense display2 2018',fontSize : 48.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),display1 : lib7.TextStyle({
                    debugLabel : 'dense display1 2018',fontSize : 34.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),headline : lib7.TextStyle({
                    debugLabel : 'dense headline 2018',fontSize : 24.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),title : lib7.TextStyle({
                    debugLabel : 'dense title 2018',fontSize : 21.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.ideographic}),subhead : lib7.TextStyle({
                    debugLabel : 'dense subhead 2018',fontSize : 17.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),body2 : lib7.TextStyle({
                    debugLabel : 'dense body2 2018',fontSize : 17.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),body1 : lib7.TextStyle({
                    debugLabel : 'dense body1 2018',fontSize : 15.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),caption : lib7.TextStyle({
                    debugLabel : 'dense caption 2018',fontSize : 13.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic}),button : lib7.TextStyle({
                    debugLabel : 'dense button 2018',fontSize : 15.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.ideographic}),subtitle : lib7.TextStyle({
                    debugLabel : 'dense subtitle 2018',fontSize : 15.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.ideographic}),overline : lib7.TextStyle({
                    debugLabel : 'dense overline 2018',fontSize : 11.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.ideographic})});
        }
        return this.__$dense2018;
    }

    private static __$tall2014 : lib5.TextTheme;
    static get tall2014() : lib5.TextTheme { 
        if (this.__$tall2014===undefined) {
            this.__$tall2014 = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'tall display4 2014',inherit : false,fontSize : 112.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display3 : lib7.TextStyle({
                    debugLabel : 'tall display3 2014',inherit : false,fontSize : 56.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display2 : lib7.TextStyle({
                    debugLabel : 'tall display2 2014',inherit : false,fontSize : 45.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display1 : lib7.TextStyle({
                    debugLabel : 'tall display1 2014',inherit : false,fontSize : 34.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),headline : lib7.TextStyle({
                    debugLabel : 'tall headline 2014',inherit : false,fontSize : 24.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),title : lib7.TextStyle({
                    debugLabel : 'tall title 2014',inherit : false,fontSize : 21.0,fontWeight : FontWeight.w700,textBaseline : TextBaseline.alphabetic}),subhead : lib7.TextStyle({
                    debugLabel : 'tall subhead 2014',inherit : false,fontSize : 17.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),body2 : lib7.TextStyle({
                    debugLabel : 'tall body2 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w700,textBaseline : TextBaseline.alphabetic}),body1 : lib7.TextStyle({
                    debugLabel : 'tall body1 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),caption : lib7.TextStyle({
                    debugLabel : 'tall caption 2014',inherit : false,fontSize : 13.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),button : lib7.TextStyle({
                    debugLabel : 'tall button 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w700,textBaseline : TextBaseline.alphabetic}),subtitle : lib7.TextStyle({
                    debugLabel : 'tall subtitle 2014',inherit : false,fontSize : 15.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic}),overline : lib7.TextStyle({
                    debugLabel : 'tall overline 2014',inherit : false,fontSize : 11.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic})});
        }
        return this.__$tall2014;
    }

    private static __$tall2018 : lib5.TextTheme;
    static get tall2018() : lib5.TextTheme { 
        if (this.__$tall2018===undefined) {
            this.__$tall2018 = lib5.TextTheme({
                display4 : lib7.TextStyle({
                    debugLabel : 'tall display4 2018',fontSize : 96.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display3 : lib7.TextStyle({
                    debugLabel : 'tall display3 2018',fontSize : 60.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display2 : lib7.TextStyle({
                    debugLabel : 'tall display2 2018',fontSize : 48.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),display1 : lib7.TextStyle({
                    debugLabel : 'tall display1 2018',fontSize : 34.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),headline : lib7.TextStyle({
                    debugLabel : 'tall headline 2018',fontSize : 24.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),title : lib7.TextStyle({
                    debugLabel : 'tall title 2018',fontSize : 21.0,fontWeight : FontWeight.w700,textBaseline : TextBaseline.alphabetic}),subhead : lib7.TextStyle({
                    debugLabel : 'tall subhead 2018',fontSize : 17.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),body2 : lib7.TextStyle({
                    debugLabel : 'tall body2 2018',fontSize : 17.0,fontWeight : FontWeight.w700,textBaseline : TextBaseline.alphabetic}),body1 : lib7.TextStyle({
                    debugLabel : 'tall body1 2018',fontSize : 15.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),button : lib7.TextStyle({
                    debugLabel : 'tall button 2018',fontSize : 15.0,fontWeight : FontWeight.w700,textBaseline : TextBaseline.alphabetic}),caption : lib7.TextStyle({
                    debugLabel : 'tall caption 2018',fontSize : 13.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic}),subtitle : lib7.TextStyle({
                    debugLabel : 'tall subtitle 2018',fontSize : 15.0,fontWeight : FontWeight.w500,textBaseline : TextBaseline.alphabetic}),overline : lib7.TextStyle({
                    debugLabel : 'tall overline 2018',fontSize : 11.0,fontWeight : FontWeight.w400,textBaseline : TextBaseline.alphabetic})});
        }
        return this.__$tall2018;
    }

}

export class properties {
}
