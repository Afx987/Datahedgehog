/** Library asset:datahedgehog_monitor/lib/lib/material/theme_data.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "./colors";
import * as lib5 from "./ink_well";
import * as lib6 from "./button_theme";
import * as lib7 from "./text_theme";
import * as lib8 from "./input_decorator";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib10 from "./slider_theme";
import * as lib11 from "./tab_bar_theme";
import * as lib12 from "./card_theme";
import * as lib13 from "./chip_theme";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib15 from "./page_transitions_theme";
import * as lib16 from "./app_bar_theme";
import * as lib17 from "./bottom_app_bar_theme";
import * as lib18 from "./color_scheme";
import * as lib19 from "./dialog_theme";
import * as lib20 from "./typography";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/cupertino/theme";
import * as lib22 from "./ink_splash";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/cupertino/text_theme";

export enum MaterialTapTargetSize {
    padded,
    shrinkWrap
}

export namespace ThemeData {
    export type Constructors = lib3.Diagnosticable.Constructors | 'raw';
    export type Interface = Omit<ThemeData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ThemeData extends lib3.Diagnosticable {
    constructor(_namedArguments? : {brightness? : any,primarySwatch? : lib4.MaterialColor,primaryColor? : any,primaryColorBrightness? : any,primaryColorLight? : any,primaryColorDark? : any,accentColor? : any,accentColorBrightness? : any,canvasColor? : any,scaffoldBackgroundColor? : any,bottomAppBarColor? : any,cardColor? : any,dividerColor? : any,highlightColor? : any,splashColor? : any,splashFactory? : lib5.InteractiveInkFeatureFactory,selectedRowColor? : any,unselectedWidgetColor? : any,disabledColor? : any,buttonColor? : any,buttonTheme? : lib6.ButtonThemeData,secondaryHeaderColor? : any,textSelectionColor? : any,cursorColor? : any,textSelectionHandleColor? : any,backgroundColor? : any,dialogBackgroundColor? : any,indicatorColor? : any,hintColor? : any,errorColor? : any,toggleableActiveColor? : any,fontFamily? : string,textTheme? : lib7.TextTheme,primaryTextTheme? : lib7.TextTheme,accentTextTheme? : lib7.TextTheme,inputDecorationTheme? : lib8.InputDecorationTheme,iconTheme? : lib9.IconThemeData,primaryIconTheme? : lib9.IconThemeData,accentIconTheme? : lib9.IconThemeData,sliderTheme? : lib10.SliderThemeData,tabBarTheme? : lib11.TabBarTheme,cardTheme? : lib12.CardTheme,chipTheme? : lib13.ChipThemeData,platform? : lib14.TargetPlatform,materialTapTargetSize? : MaterialTapTargetSize,pageTransitionsTheme? : lib15.PageTransitionsTheme,appBarTheme? : lib16.AppBarTheme,bottomAppBarTheme? : lib17.BottomAppBarTheme,colorScheme? : lib18.ColorScheme,dialogTheme? : lib19.DialogTheme,typography? : lib20.Typography,cupertinoOverrideTheme? : lib21.CupertinoThemeData}) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $ThemeData(_namedArguments? : {brightness? : any,primarySwatch? : lib4.MaterialColor,primaryColor? : any,primaryColorBrightness? : any,primaryColorLight? : any,primaryColorDark? : any,accentColor? : any,accentColorBrightness? : any,canvasColor? : any,scaffoldBackgroundColor? : any,bottomAppBarColor? : any,cardColor? : any,dividerColor? : any,highlightColor? : any,splashColor? : any,splashFactory? : lib5.InteractiveInkFeatureFactory,selectedRowColor? : any,unselectedWidgetColor? : any,disabledColor? : any,buttonColor? : any,buttonTheme? : lib6.ButtonThemeData,secondaryHeaderColor? : any,textSelectionColor? : any,cursorColor? : any,textSelectionHandleColor? : any,backgroundColor? : any,dialogBackgroundColor? : any,indicatorColor? : any,hintColor? : any,errorColor? : any,toggleableActiveColor? : any,fontFamily? : string,textTheme? : lib7.TextTheme,primaryTextTheme? : lib7.TextTheme,accentTextTheme? : lib7.TextTheme,inputDecorationTheme? : lib8.InputDecorationTheme,iconTheme? : lib9.IconThemeData,primaryIconTheme? : lib9.IconThemeData,accentIconTheme? : lib9.IconThemeData,sliderTheme? : lib10.SliderThemeData,tabBarTheme? : lib11.TabBarTheme,cardTheme? : lib12.CardTheme,chipTheme? : lib13.ChipThemeData,platform? : lib14.TargetPlatform,materialTapTargetSize? : MaterialTapTargetSize,pageTransitionsTheme? : lib15.PageTransitionsTheme,appBarTheme? : lib16.AppBarTheme,bottomAppBarTheme? : lib17.BottomAppBarTheme,colorScheme? : lib18.ColorScheme,dialogTheme? : lib19.DialogTheme,typography? : lib20.Typography,cupertinoOverrideTheme? : lib21.CupertinoThemeData}) : ThemeData {
        let {brightness,primarySwatch,primaryColor,primaryColorBrightness,primaryColorLight,primaryColorDark,accentColor,accentColorBrightness,canvasColor,scaffoldBackgroundColor,bottomAppBarColor,cardColor,dividerColor,highlightColor,splashColor,splashFactory,selectedRowColor,unselectedWidgetColor,disabledColor,buttonColor,buttonTheme,secondaryHeaderColor,textSelectionColor,cursorColor,textSelectionHandleColor,backgroundColor,dialogBackgroundColor,indicatorColor,hintColor,errorColor,toggleableActiveColor,fontFamily,textTheme,primaryTextTheme,accentTextTheme,inputDecorationTheme,iconTheme,primaryIconTheme,accentIconTheme,sliderTheme,tabBarTheme,cardTheme,chipTheme,platform,materialTapTargetSize,pageTransitionsTheme,appBarTheme,bottomAppBarTheme,colorScheme,dialogTheme,typography,cupertinoOverrideTheme} = Object.assign({
        }, _namedArguments );
        brightness = ( brightness ) || ( Brightness.light );
        let isDark : boolean = op(Op.EQUALS,brightness,Brightness.dark);
        primarySwatch = ( primarySwatch ) || ( lib4.Colors.blue );
        primaryColor = ( primaryColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,900) : primarySwatch );
        primaryColorBrightness = ( primaryColorBrightness ) || ( ThemeData.estimateBrightnessForColor(primaryColor) );
        primaryColorLight = ( primaryColorLight ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,500) : op(Op.INDEX,primarySwatch,100) );
        primaryColorDark = ( primaryColorDark ) || ( isDark ? lib4.Colors.black : op(Op.INDEX,primarySwatch,700) );
        let primaryIsDark : boolean = op(Op.EQUALS,primaryColorBrightness,Brightness.dark);
        toggleableActiveColor = ( toggleableActiveColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.tealAccent,200) : ((accentColor || op(Op.INDEX,primarySwatch,600))) );
        accentColor = ( accentColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.tealAccent,200) : op(Op.INDEX,primarySwatch,500) );
        accentColorBrightness = ( accentColorBrightness ) || ( ThemeData.estimateBrightnessForColor(accentColor) );
        let accentIsDark : boolean = op(Op.EQUALS,accentColorBrightness,Brightness.dark);
        canvasColor = ( canvasColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,850) : op(Op.INDEX,lib4.Colors.grey,50) );
        scaffoldBackgroundColor = ( scaffoldBackgroundColor ) || ( canvasColor );
        bottomAppBarColor = ( bottomAppBarColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,800) : lib4.Colors.white );
        cardColor = ( cardColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,800) : lib4.Colors.white );
        dividerColor = ( dividerColor ) || ( isDark ? new bare.createInstance(any,null,536870911) : new bare.createInstance(any,null,520093696) );
        colorScheme = ( colorScheme ) || ( lib18.ColorScheme.fromSwatch({
            primarySwatch : primarySwatch,primaryColorDark : primaryColorDark,accentColor : accentColor,cardColor : cardColor,backgroundColor : backgroundColor,errorColor : errorColor,brightness : brightness}) );
        splashFactory = ( splashFactory ) || ( lib22.InkSplash.splashFactory );
        selectedRowColor = ( selectedRowColor ) || ( op(Op.INDEX,lib4.Colors.grey,100) );
        unselectedWidgetColor = ( unselectedWidgetColor ) || ( isDark ? lib4.Colors.white70 : lib4.Colors.black54 );
        secondaryHeaderColor = ( secondaryHeaderColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,700) : op(Op.INDEX,primarySwatch,50) );
        textSelectionColor = ( textSelectionColor ) || ( isDark ? accentColor : op(Op.INDEX,primarySwatch,200) );
        cursorColor = (cursorColor || new bare.createInstance(any,null,66,133,244,1.0));
        textSelectionHandleColor = ( textSelectionHandleColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.tealAccent,400) : op(Op.INDEX,primarySwatch,300) );
        backgroundColor = ( backgroundColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,700) : op(Op.INDEX,primarySwatch,200) );
        dialogBackgroundColor = ( dialogBackgroundColor ) || ( isDark ? op(Op.INDEX,lib4.Colors.grey,800) : lib4.Colors.white );
        indicatorColor = ( indicatorColor ) || ( op(Op.EQUALS,accentColor,primaryColor) ? lib4.Colors.white : accentColor );
        hintColor = ( hintColor ) || ( isDark ? new bare.createInstance(any,null,2164260863) : new bare.createInstance(any,null,2315255808) );
        errorColor = ( errorColor ) || ( op(Op.INDEX,lib4.Colors.red,700) );
        inputDecorationTheme = ( inputDecorationTheme ) || ( new lib8.InputDecorationTheme() );
        pageTransitionsTheme = ( pageTransitionsTheme ) || ( new lib15.PageTransitionsTheme() );
        primaryIconTheme = ( primaryIconTheme ) || ( primaryIsDark ? new lib9.IconThemeData({
            color : lib4.Colors.white}) : new lib9.IconThemeData({
            color : lib4.Colors.black}) );
        accentIconTheme = ( accentIconTheme ) || ( accentIsDark ? new lib9.IconThemeData({
            color : lib4.Colors.white}) : new lib9.IconThemeData({
            color : lib4.Colors.black}) );
        iconTheme = ( iconTheme ) || ( isDark ? new lib9.IconThemeData({
            color : lib4.Colors.white}) : new lib9.IconThemeData({
            color : lib4.Colors.black87}) );
        platform = ( platform ) || ( lib14.properties.defaultTargetPlatform );
        typography = ( typography ) || ( lib20.Typography({
            platform : platform}) );
        let defaultTextTheme : lib7.TextTheme = isDark ? typography.white : typography.black;
        textTheme = defaultTextTheme.merge(textTheme);
        let defaultPrimaryTextTheme : lib7.TextTheme = primaryIsDark ? typography.white : typography.black;
        primaryTextTheme = defaultPrimaryTextTheme.merge(primaryTextTheme);
        let defaultAccentTextTheme : lib7.TextTheme = accentIsDark ? typography.white : typography.black;
        accentTextTheme = defaultAccentTextTheme.merge(accentTextTheme);
        materialTapTargetSize = ( materialTapTargetSize ) || ( MaterialTapTargetSize.padded );
        if (fontFamily != null) {
            textTheme = textTheme.apply({
                fontFamily : fontFamily});
            primaryTextTheme = primaryTextTheme.apply({
                fontFamily : fontFamily});
            accentTextTheme = accentTextTheme.apply({
                fontFamily : fontFamily});
        }
        buttonColor = ( buttonColor ) || ( isDark ? op(Op.INDEX,primarySwatch,600) : op(Op.INDEX,lib4.Colors.grey,300) );
        buttonTheme = ( buttonTheme ) || ( lib6.ButtonThemeData({
            colorScheme : colorScheme,buttonColor : buttonColor,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,materialTapTargetSize : materialTapTargetSize}) );
        disabledColor = ( disabledColor ) || ( isDark ? lib4.Colors.white30 : lib4.Colors.black38 );
        highlightColor = ( highlightColor ) || ( isDark ? properties._kDarkThemeHighlightColor : properties._kLightThemeHighlightColor );
        splashColor = ( splashColor ) || ( isDark ? properties._kDarkThemeSplashColor : properties._kLightThemeSplashColor );
        sliderTheme = ( sliderTheme ) || ( lib10.SliderThemeData.fromPrimaryColors({
            primaryColor : primaryColor,primaryColorLight : primaryColorLight,primaryColorDark : primaryColorDark,valueIndicatorTextStyle : accentTextTheme.body2}) );
        tabBarTheme = ( tabBarTheme ) || ( new lib11.TabBarTheme() );
        appBarTheme = ( appBarTheme ) || ( new lib16.AppBarTheme() );
        bottomAppBarTheme = ( bottomAppBarTheme ) || ( new lib17.BottomAppBarTheme() );
        cardTheme = ( cardTheme ) || ( new lib12.CardTheme() );
        chipTheme = ( chipTheme ) || ( lib13.ChipThemeData.fromDefaults({
            secondaryColor : primaryColor,brightness : brightness,labelStyle : textTheme.body2}) );
        dialogTheme = ( dialogTheme ) || ( new lib19.DialogTheme() );
        cupertinoOverrideTheme = ((_791_)=>(!!_791_)?_791_.noDefault():null)(cupertinoOverrideTheme);
        return ThemeData.raw({
            brightness : brightness,primaryColor : primaryColor,primaryColorBrightness : primaryColorBrightness,primaryColorLight : primaryColorLight,primaryColorDark : primaryColorDark,accentColor : accentColor,accentColorBrightness : accentColorBrightness,canvasColor : canvasColor,scaffoldBackgroundColor : scaffoldBackgroundColor,bottomAppBarColor : bottomAppBarColor,cardColor : cardColor,dividerColor : dividerColor,highlightColor : highlightColor,splashColor : splashColor,splashFactory : splashFactory,selectedRowColor : selectedRowColor,unselectedWidgetColor : unselectedWidgetColor,disabledColor : disabledColor,buttonTheme : buttonTheme,buttonColor : buttonColor,toggleableActiveColor : toggleableActiveColor,secondaryHeaderColor : secondaryHeaderColor,textSelectionColor : textSelectionColor,cursorColor : cursorColor,textSelectionHandleColor : textSelectionHandleColor,backgroundColor : backgroundColor,dialogBackgroundColor : dialogBackgroundColor,indicatorColor : indicatorColor,hintColor : hintColor,errorColor : errorColor,textTheme : textTheme,primaryTextTheme : primaryTextTheme,accentTextTheme : accentTextTheme,inputDecorationTheme : inputDecorationTheme,iconTheme : iconTheme,primaryIconTheme : primaryIconTheme,accentIconTheme : accentIconTheme,sliderTheme : sliderTheme,tabBarTheme : tabBarTheme,cardTheme : cardTheme,chipTheme : chipTheme,platform : platform,materialTapTargetSize : materialTapTargetSize,pageTransitionsTheme : pageTransitionsTheme,appBarTheme : appBarTheme,bottomAppBarTheme : bottomAppBarTheme,colorScheme : colorScheme,dialogTheme : dialogTheme,typography : typography,cupertinoOverrideTheme : cupertinoOverrideTheme});
    }
    @namedConstructor
    raw(_namedArguments? : {brightness? : any,primaryColor? : any,primaryColorBrightness? : any,primaryColorLight? : any,primaryColorDark? : any,canvasColor? : any,accentColor? : any,accentColorBrightness? : any,scaffoldBackgroundColor? : any,bottomAppBarColor? : any,cardColor? : any,dividerColor? : any,highlightColor? : any,splashColor? : any,splashFactory? : lib5.InteractiveInkFeatureFactory,selectedRowColor? : any,unselectedWidgetColor? : any,disabledColor? : any,buttonTheme? : lib6.ButtonThemeData,buttonColor? : any,secondaryHeaderColor? : any,textSelectionColor? : any,cursorColor? : any,textSelectionHandleColor? : any,backgroundColor? : any,dialogBackgroundColor? : any,indicatorColor? : any,hintColor? : any,errorColor? : any,toggleableActiveColor? : any,textTheme? : lib7.TextTheme,primaryTextTheme? : lib7.TextTheme,accentTextTheme? : lib7.TextTheme,inputDecorationTheme? : lib8.InputDecorationTheme,iconTheme? : lib9.IconThemeData,primaryIconTheme? : lib9.IconThemeData,accentIconTheme? : lib9.IconThemeData,sliderTheme? : lib10.SliderThemeData,tabBarTheme? : lib11.TabBarTheme,cardTheme? : lib12.CardTheme,chipTheme? : lib13.ChipThemeData,platform? : lib14.TargetPlatform,materialTapTargetSize? : MaterialTapTargetSize,pageTransitionsTheme? : lib15.PageTransitionsTheme,appBarTheme? : lib16.AppBarTheme,bottomAppBarTheme? : lib17.BottomAppBarTheme,colorScheme? : lib18.ColorScheme,dialogTheme? : lib19.DialogTheme,typography? : lib20.Typography,cupertinoOverrideTheme? : lib21.CupertinoThemeData}) {
        let {brightness,primaryColor,primaryColorBrightness,primaryColorLight,primaryColorDark,canvasColor,accentColor,accentColorBrightness,scaffoldBackgroundColor,bottomAppBarColor,cardColor,dividerColor,highlightColor,splashColor,splashFactory,selectedRowColor,unselectedWidgetColor,disabledColor,buttonTheme,buttonColor,secondaryHeaderColor,textSelectionColor,cursorColor,textSelectionHandleColor,backgroundColor,dialogBackgroundColor,indicatorColor,hintColor,errorColor,toggleableActiveColor,textTheme,primaryTextTheme,accentTextTheme,inputDecorationTheme,iconTheme,primaryIconTheme,accentIconTheme,sliderTheme,tabBarTheme,cardTheme,chipTheme,platform,materialTapTargetSize,pageTransitionsTheme,appBarTheme,bottomAppBarTheme,colorScheme,dialogTheme,typography,cupertinoOverrideTheme} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.brightness = brightness;
        this.primaryColor = primaryColor;
        this.primaryColorBrightness = primaryColorBrightness;
        this.primaryColorLight = primaryColorLight;
        this.primaryColorDark = primaryColorDark;
        this.canvasColor = canvasColor;
        this.accentColor = accentColor;
        this.accentColorBrightness = accentColorBrightness;
        this.scaffoldBackgroundColor = scaffoldBackgroundColor;
        this.bottomAppBarColor = bottomAppBarColor;
        this.cardColor = cardColor;
        this.dividerColor = dividerColor;
        this.highlightColor = highlightColor;
        this.splashColor = splashColor;
        this.splashFactory = splashFactory;
        this.selectedRowColor = selectedRowColor;
        this.unselectedWidgetColor = unselectedWidgetColor;
        this.disabledColor = disabledColor;
        this.buttonTheme = buttonTheme;
        this.buttonColor = buttonColor;
        this.secondaryHeaderColor = secondaryHeaderColor;
        this.textSelectionColor = textSelectionColor;
        this.cursorColor = cursorColor;
        this.textSelectionHandleColor = textSelectionHandleColor;
        this.backgroundColor = backgroundColor;
        this.dialogBackgroundColor = dialogBackgroundColor;
        this.indicatorColor = indicatorColor;
        this.hintColor = hintColor;
        this.errorColor = errorColor;
        this.toggleableActiveColor = toggleableActiveColor;
        this.textTheme = textTheme;
        this.primaryTextTheme = primaryTextTheme;
        this.accentTextTheme = accentTextTheme;
        this.inputDecorationTheme = inputDecorationTheme;
        this.iconTheme = iconTheme;
        this.primaryIconTheme = primaryIconTheme;
        this.accentIconTheme = accentIconTheme;
        this.sliderTheme = sliderTheme;
        this.tabBarTheme = tabBarTheme;
        this.cardTheme = cardTheme;
        this.chipTheme = chipTheme;
        this.platform = platform;
        this.materialTapTargetSize = materialTapTargetSize;
        this.pageTransitionsTheme = pageTransitionsTheme;
        this.appBarTheme = appBarTheme;
        this.bottomAppBarTheme = bottomAppBarTheme;
        this.colorScheme = colorScheme;
        this.dialogTheme = dialogTheme;
        this.typography = typography;
        this.cupertinoOverrideTheme = cupertinoOverrideTheme;
    }
    static raw : new(_namedArguments? : {brightness? : any,primaryColor? : any,primaryColorBrightness? : any,primaryColorLight? : any,primaryColorDark? : any,canvasColor? : any,accentColor? : any,accentColorBrightness? : any,scaffoldBackgroundColor? : any,bottomAppBarColor? : any,cardColor? : any,dividerColor? : any,highlightColor? : any,splashColor? : any,splashFactory? : lib5.InteractiveInkFeatureFactory,selectedRowColor? : any,unselectedWidgetColor? : any,disabledColor? : any,buttonTheme? : lib6.ButtonThemeData,buttonColor? : any,secondaryHeaderColor? : any,textSelectionColor? : any,cursorColor? : any,textSelectionHandleColor? : any,backgroundColor? : any,dialogBackgroundColor? : any,indicatorColor? : any,hintColor? : any,errorColor? : any,toggleableActiveColor? : any,textTheme? : lib7.TextTheme,primaryTextTheme? : lib7.TextTheme,accentTextTheme? : lib7.TextTheme,inputDecorationTheme? : lib8.InputDecorationTheme,iconTheme? : lib9.IconThemeData,primaryIconTheme? : lib9.IconThemeData,accentIconTheme? : lib9.IconThemeData,sliderTheme? : lib10.SliderThemeData,tabBarTheme? : lib11.TabBarTheme,cardTheme? : lib12.CardTheme,chipTheme? : lib13.ChipThemeData,platform? : lib14.TargetPlatform,materialTapTargetSize? : MaterialTapTargetSize,pageTransitionsTheme? : lib15.PageTransitionsTheme,appBarTheme? : lib16.AppBarTheme,bottomAppBarTheme? : lib17.BottomAppBarTheme,colorScheme? : lib18.ColorScheme,dialogTheme? : lib19.DialogTheme,typography? : lib20.Typography,cupertinoOverrideTheme? : lib21.CupertinoThemeData}) => ThemeData;

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

     : any;

     : any;

     : any;

    @namedFactory
    static $light() : ThemeData {
        return ThemeData({
            brightness : Brightness.light});
    }
    static light : new() => ThemeData;

    @namedFactory
    static $dark() : ThemeData {
        return ThemeData({
            brightness : Brightness.dark});
    }
    static dark : new() => ThemeData;

    @namedFactory
    static $fallback() : ThemeData {
        return ThemeData.light();
    }
    static fallback : new() => ThemeData;

    brightness : any;

    primaryColor : any;

    primaryColorBrightness : any;

    primaryColorLight : any;

    primaryColorDark : any;

    canvasColor : any;

    accentColor : any;

    accentColorBrightness : any;

    scaffoldBackgroundColor : any;

    bottomAppBarColor : any;

    cardColor : any;

    dividerColor : any;

    highlightColor : any;

    splashColor : any;

    splashFactory : lib5.InteractiveInkFeatureFactory;

    selectedRowColor : any;

    unselectedWidgetColor : any;

    disabledColor : any;

    buttonTheme : lib6.ButtonThemeData;

    buttonColor : any;

    secondaryHeaderColor : any;

    textSelectionColor : any;

    cursorColor : any;

    textSelectionHandleColor : any;

    backgroundColor : any;

    dialogBackgroundColor : any;

    indicatorColor : any;

    hintColor : any;

    errorColor : any;

    toggleableActiveColor : any;

    textTheme : lib7.TextTheme;

    primaryTextTheme : lib7.TextTheme;

    accentTextTheme : lib7.TextTheme;

    inputDecorationTheme : lib8.InputDecorationTheme;

    iconTheme : lib9.IconThemeData;

    primaryIconTheme : lib9.IconThemeData;

    accentIconTheme : lib9.IconThemeData;

    sliderTheme : lib10.SliderThemeData;

    tabBarTheme : lib11.TabBarTheme;

    cardTheme : lib12.CardTheme;

    chipTheme : lib13.ChipThemeData;

    platform : lib14.TargetPlatform;

    materialTapTargetSize : MaterialTapTargetSize;

    pageTransitionsTheme : lib15.PageTransitionsTheme;

    appBarTheme : lib16.AppBarTheme;

    bottomAppBarTheme : lib17.BottomAppBarTheme;

    colorScheme : lib18.ColorScheme;

    dialogTheme : lib19.DialogTheme;

    typography : lib20.Typography;

    cupertinoOverrideTheme : lib21.CupertinoThemeData;

    copyWith(_namedArguments? : {brightness? : any,primaryColor? : any,primaryColorBrightness? : any,primaryColorLight? : any,primaryColorDark? : any,accentColor? : any,accentColorBrightness? : any,canvasColor? : any,scaffoldBackgroundColor? : any,bottomAppBarColor? : any,cardColor? : any,dividerColor? : any,highlightColor? : any,splashColor? : any,splashFactory? : lib5.InteractiveInkFeatureFactory,selectedRowColor? : any,unselectedWidgetColor? : any,disabledColor? : any,buttonTheme? : lib6.ButtonThemeData,buttonColor? : any,secondaryHeaderColor? : any,textSelectionColor? : any,cursorColor? : any,textSelectionHandleColor? : any,backgroundColor? : any,dialogBackgroundColor? : any,indicatorColor? : any,hintColor? : any,errorColor? : any,toggleableActiveColor? : any,textTheme? : lib7.TextTheme,primaryTextTheme? : lib7.TextTheme,accentTextTheme? : lib7.TextTheme,inputDecorationTheme? : lib8.InputDecorationTheme,iconTheme? : lib9.IconThemeData,primaryIconTheme? : lib9.IconThemeData,accentIconTheme? : lib9.IconThemeData,sliderTheme? : lib10.SliderThemeData,tabBarTheme? : lib11.TabBarTheme,cardTheme? : lib12.CardTheme,chipTheme? : lib13.ChipThemeData,platform? : lib14.TargetPlatform,materialTapTargetSize? : MaterialTapTargetSize,pageTransitionsTheme? : lib15.PageTransitionsTheme,appBarTheme? : lib16.AppBarTheme,bottomAppBarTheme? : lib17.BottomAppBarTheme,colorScheme? : lib18.ColorScheme,dialogTheme? : lib19.DialogTheme,typography? : lib20.Typography,cupertinoOverrideTheme? : lib21.CupertinoThemeData}) : ThemeData {
        let {brightness,primaryColor,primaryColorBrightness,primaryColorLight,primaryColorDark,accentColor,accentColorBrightness,canvasColor,scaffoldBackgroundColor,bottomAppBarColor,cardColor,dividerColor,highlightColor,splashColor,splashFactory,selectedRowColor,unselectedWidgetColor,disabledColor,buttonTheme,buttonColor,secondaryHeaderColor,textSelectionColor,cursorColor,textSelectionHandleColor,backgroundColor,dialogBackgroundColor,indicatorColor,hintColor,errorColor,toggleableActiveColor,textTheme,primaryTextTheme,accentTextTheme,inputDecorationTheme,iconTheme,primaryIconTheme,accentIconTheme,sliderTheme,tabBarTheme,cardTheme,chipTheme,platform,materialTapTargetSize,pageTransitionsTheme,appBarTheme,bottomAppBarTheme,colorScheme,dialogTheme,typography,cupertinoOverrideTheme} = Object.assign({
        }, _namedArguments );
        cupertinoOverrideTheme = ((_792_)=>(!!_792_)?_792_.noDefault():null)(cupertinoOverrideTheme);
        return ThemeData.raw({
            brightness : (brightness || this.brightness),primaryColor : (primaryColor || this.primaryColor),primaryColorBrightness : (primaryColorBrightness || this.primaryColorBrightness),primaryColorLight : (primaryColorLight || this.primaryColorLight),primaryColorDark : (primaryColorDark || this.primaryColorDark),accentColor : (accentColor || this.accentColor),accentColorBrightness : (accentColorBrightness || this.accentColorBrightness),canvasColor : (canvasColor || this.canvasColor),scaffoldBackgroundColor : (scaffoldBackgroundColor || this.scaffoldBackgroundColor),bottomAppBarColor : (bottomAppBarColor || this.bottomAppBarColor),cardColor : (cardColor || this.cardColor),dividerColor : (dividerColor || this.dividerColor),highlightColor : (highlightColor || this.highlightColor),splashColor : (splashColor || this.splashColor),splashFactory : (splashFactory || this.splashFactory),selectedRowColor : (selectedRowColor || this.selectedRowColor),unselectedWidgetColor : (unselectedWidgetColor || this.unselectedWidgetColor),disabledColor : (disabledColor || this.disabledColor),buttonColor : (buttonColor || this.buttonColor),buttonTheme : (buttonTheme || this.buttonTheme),secondaryHeaderColor : (secondaryHeaderColor || this.secondaryHeaderColor),textSelectionColor : (textSelectionColor || this.textSelectionColor),cursorColor : (cursorColor || this.cursorColor),textSelectionHandleColor : (textSelectionHandleColor || this.textSelectionHandleColor),backgroundColor : (backgroundColor || this.backgroundColor),dialogBackgroundColor : (dialogBackgroundColor || this.dialogBackgroundColor),indicatorColor : (indicatorColor || this.indicatorColor),hintColor : (hintColor || this.hintColor),errorColor : (errorColor || this.errorColor),toggleableActiveColor : (toggleableActiveColor || this.toggleableActiveColor),textTheme : (textTheme || this.textTheme),primaryTextTheme : (primaryTextTheme || this.primaryTextTheme),accentTextTheme : (accentTextTheme || this.accentTextTheme),inputDecorationTheme : (inputDecorationTheme || this.inputDecorationTheme),iconTheme : (iconTheme || this.iconTheme),primaryIconTheme : (primaryIconTheme || this.primaryIconTheme),accentIconTheme : (accentIconTheme || this.accentIconTheme),sliderTheme : (sliderTheme || this.sliderTheme),tabBarTheme : (tabBarTheme || this.tabBarTheme),cardTheme : (cardTheme || this.cardTheme),chipTheme : (chipTheme || this.chipTheme),platform : (platform || this.platform),materialTapTargetSize : (materialTapTargetSize || this.materialTapTargetSize),pageTransitionsTheme : (pageTransitionsTheme || this.pageTransitionsTheme),appBarTheme : (appBarTheme || this.appBarTheme),bottomAppBarTheme : (bottomAppBarTheme || this.bottomAppBarTheme),colorScheme : (colorScheme || this.colorScheme),dialogTheme : (dialogTheme || this.dialogTheme),typography : (typography || this.typography),cupertinoOverrideTheme : (cupertinoOverrideTheme || this.cupertinoOverrideTheme)});
    }
    private static __$_localizedThemeDataCacheSize : number;
    static get _localizedThemeDataCacheSize() : number { 
        if (this.__$_localizedThemeDataCacheSize===undefined) {
            this.__$_localizedThemeDataCacheSize = 5;
        }
        return this.__$_localizedThemeDataCacheSize;
    }

    private static __$_localizedThemeDataCache : _FifoCache<_IdentityThemeDataCacheKey,ThemeData>;
    static get _localizedThemeDataCache() : _FifoCache<_IdentityThemeDataCacheKey,ThemeData> { 
        if (this.__$_localizedThemeDataCache===undefined) {
            this.__$_localizedThemeDataCache = _FifoCache(ThemeData._localizedThemeDataCacheSize);
        }
        return this.__$_localizedThemeDataCache;
    }
    static set _localizedThemeDataCache(__$value : _FifoCache<_IdentityThemeDataCacheKey,ThemeData>)  { 
        this.__$_localizedThemeDataCache = __$value;
    }

    static localize(baseTheme : ThemeData,localTextGeometry : lib7.TextTheme) : ThemeData {
        /* TODO (AssertStatementImpl) : assert (baseTheme != null); */;
        /* TODO (AssertStatementImpl) : assert (localTextGeometry != null); */;
        return ThemeData._localizedThemeDataCache.putIfAbsent(_IdentityThemeDataCacheKey(baseTheme,localTextGeometry),() =>  {
            return baseTheme.copyWith({
                primaryTextTheme : localTextGeometry.merge(baseTheme.primaryTextTheme),accentTextTheme : localTextGeometry.merge(baseTheme.accentTextTheme),textTheme : localTextGeometry.merge(baseTheme.textTheme)});
        });
    }
    static estimateBrightnessForColor(color : any) : any {
        let relativeLuminance : double = color.computeLuminance();
        let kThreshold : double = 0.15;
        if ((relativeLuminance + 0.05) * (relativeLuminance + 0.05) > kThreshold) return Brightness.light;
        return Brightness.dark;
    }
    static lerp(a : ThemeData,b : ThemeData,t : double) : ThemeData {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return ThemeData.raw({
            brightness : t < 0.5 ? a.brightness : b.brightness,primaryColor : Color.lerp(a.primaryColor,b.primaryColor,t),primaryColorBrightness : t < 0.5 ? a.primaryColorBrightness : b.primaryColorBrightness,primaryColorLight : Color.lerp(a.primaryColorLight,b.primaryColorLight,t),primaryColorDark : Color.lerp(a.primaryColorDark,b.primaryColorDark,t),canvasColor : Color.lerp(a.canvasColor,b.canvasColor,t),accentColor : Color.lerp(a.accentColor,b.accentColor,t),accentColorBrightness : t < 0.5 ? a.accentColorBrightness : b.accentColorBrightness,scaffoldBackgroundColor : Color.lerp(a.scaffoldBackgroundColor,b.scaffoldBackgroundColor,t),bottomAppBarColor : Color.lerp(a.bottomAppBarColor,b.bottomAppBarColor,t),cardColor : Color.lerp(a.cardColor,b.cardColor,t),dividerColor : Color.lerp(a.dividerColor,b.dividerColor,t),highlightColor : Color.lerp(a.highlightColor,b.highlightColor,t),splashColor : Color.lerp(a.splashColor,b.splashColor,t),splashFactory : t < 0.5 ? a.splashFactory : b.splashFactory,selectedRowColor : Color.lerp(a.selectedRowColor,b.selectedRowColor,t),unselectedWidgetColor : Color.lerp(a.unselectedWidgetColor,b.unselectedWidgetColor,t),disabledColor : Color.lerp(a.disabledColor,b.disabledColor,t),buttonTheme : t < 0.5 ? a.buttonTheme : b.buttonTheme,buttonColor : Color.lerp(a.buttonColor,b.buttonColor,t),secondaryHeaderColor : Color.lerp(a.secondaryHeaderColor,b.secondaryHeaderColor,t),textSelectionColor : Color.lerp(a.textSelectionColor,b.textSelectionColor,t),cursorColor : Color.lerp(a.cursorColor,b.cursorColor,t),textSelectionHandleColor : Color.lerp(a.textSelectionHandleColor,b.textSelectionHandleColor,t),backgroundColor : Color.lerp(a.backgroundColor,b.backgroundColor,t),dialogBackgroundColor : Color.lerp(a.dialogBackgroundColor,b.dialogBackgroundColor,t),indicatorColor : Color.lerp(a.indicatorColor,b.indicatorColor,t),hintColor : Color.lerp(a.hintColor,b.hintColor,t),errorColor : Color.lerp(a.errorColor,b.errorColor,t),toggleableActiveColor : Color.lerp(a.toggleableActiveColor,b.toggleableActiveColor,t),textTheme : lib7.TextTheme.lerp(a.textTheme,b.textTheme,t),primaryTextTheme : lib7.TextTheme.lerp(a.primaryTextTheme,b.primaryTextTheme,t),accentTextTheme : lib7.TextTheme.lerp(a.accentTextTheme,b.accentTextTheme,t),inputDecorationTheme : t < 0.5 ? a.inputDecorationTheme : b.inputDecorationTheme,iconTheme : lib9.IconThemeData.lerp(a.iconTheme,b.iconTheme,t),primaryIconTheme : lib9.IconThemeData.lerp(a.primaryIconTheme,b.primaryIconTheme,t),accentIconTheme : lib9.IconThemeData.lerp(a.accentIconTheme,b.accentIconTheme,t),sliderTheme : lib10.SliderThemeData.lerp(a.sliderTheme,b.sliderTheme,t),tabBarTheme : lib11.TabBarTheme.lerp(a.tabBarTheme,b.tabBarTheme,t),cardTheme : lib12.CardTheme.lerp(a.cardTheme,b.cardTheme,t),chipTheme : lib13.ChipThemeData.lerp(a.chipTheme,b.chipTheme,t),platform : t < 0.5 ? a.platform : b.platform,materialTapTargetSize : t < 0.5 ? a.materialTapTargetSize : b.materialTapTargetSize,pageTransitionsTheme : t < 0.5 ? a.pageTransitionsTheme : b.pageTransitionsTheme,appBarTheme : lib16.AppBarTheme.lerp(a.appBarTheme,b.appBarTheme,t),bottomAppBarTheme : lib17.BottomAppBarTheme.lerp(a.bottomAppBarTheme,b.bottomAppBarTheme,t),colorScheme : lib18.ColorScheme.lerp(a.colorScheme,b.colorScheme,t),dialogTheme : lib19.DialogTheme.lerp(a.dialogTheme,b.dialogTheme,t),typography : lib20.Typography.lerp(a.typography,b.typography,t),cupertinoOverrideTheme : t < 0.5 ? a.cupertinoOverrideTheme : b.cupertinoOverrideTheme});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let otherData : ThemeData = other;
        return (op(Op.EQUALS,otherData.brightness,this.brightness)) && (op(Op.EQUALS,otherData.primaryColor,this.primaryColor)) && (op(Op.EQUALS,otherData.primaryColorBrightness,this.primaryColorBrightness)) && (op(Op.EQUALS,otherData.primaryColorLight,this.primaryColorLight)) && (op(Op.EQUALS,otherData.primaryColorDark,this.primaryColorDark)) && (op(Op.EQUALS,otherData.accentColor,this.accentColor)) && (op(Op.EQUALS,otherData.accentColorBrightness,this.accentColorBrightness)) && (op(Op.EQUALS,otherData.canvasColor,this.canvasColor)) && (op(Op.EQUALS,otherData.scaffoldBackgroundColor,this.scaffoldBackgroundColor)) && (op(Op.EQUALS,otherData.bottomAppBarColor,this.bottomAppBarColor)) && (op(Op.EQUALS,otherData.cardColor,this.cardColor)) && (op(Op.EQUALS,otherData.dividerColor,this.dividerColor)) && (op(Op.EQUALS,otherData.highlightColor,this.highlightColor)) && (op(Op.EQUALS,otherData.splashColor,this.splashColor)) && (op(Op.EQUALS,otherData.splashFactory,this.splashFactory)) && (op(Op.EQUALS,otherData.selectedRowColor,this.selectedRowColor)) && (op(Op.EQUALS,otherData.unselectedWidgetColor,this.unselectedWidgetColor)) && (op(Op.EQUALS,otherData.disabledColor,this.disabledColor)) && (op(Op.EQUALS,otherData.buttonTheme,this.buttonTheme)) && (op(Op.EQUALS,otherData.buttonColor,this.buttonColor)) && (op(Op.EQUALS,otherData.secondaryHeaderColor,this.secondaryHeaderColor)) && (op(Op.EQUALS,otherData.textSelectionColor,this.textSelectionColor)) && (op(Op.EQUALS,otherData.cursorColor,this.cursorColor)) && (op(Op.EQUALS,otherData.textSelectionHandleColor,this.textSelectionHandleColor)) && (op(Op.EQUALS,otherData.backgroundColor,this.backgroundColor)) && (op(Op.EQUALS,otherData.dialogBackgroundColor,this.dialogBackgroundColor)) && (op(Op.EQUALS,otherData.indicatorColor,this.indicatorColor)) && (op(Op.EQUALS,otherData.hintColor,this.hintColor)) && (op(Op.EQUALS,otherData.errorColor,this.errorColor)) && (op(Op.EQUALS,otherData.toggleableActiveColor,this.toggleableActiveColor)) && (op(Op.EQUALS,otherData.textTheme,this.textTheme)) && (op(Op.EQUALS,otherData.primaryTextTheme,this.primaryTextTheme)) && (op(Op.EQUALS,otherData.accentTextTheme,this.accentTextTheme)) && (op(Op.EQUALS,otherData.inputDecorationTheme,this.inputDecorationTheme)) && (op(Op.EQUALS,otherData.iconTheme,this.iconTheme)) && (op(Op.EQUALS,otherData.primaryIconTheme,this.primaryIconTheme)) && (op(Op.EQUALS,otherData.accentIconTheme,this.accentIconTheme)) && (op(Op.EQUALS,otherData.sliderTheme,this.sliderTheme)) && (op(Op.EQUALS,otherData.tabBarTheme,this.tabBarTheme)) && (op(Op.EQUALS,otherData.cardTheme,this.cardTheme)) && (op(Op.EQUALS,otherData.chipTheme,this.chipTheme)) && (op(Op.EQUALS,otherData.platform,this.platform)) && (op(Op.EQUALS,otherData.materialTapTargetSize,this.materialTapTargetSize)) && (op(Op.EQUALS,otherData.pageTransitionsTheme,this.pageTransitionsTheme)) && (op(Op.EQUALS,otherData.appBarTheme,this.appBarTheme)) && (op(Op.EQUALS,otherData.bottomAppBarTheme,this.bottomAppBarTheme)) && (op(Op.EQUALS,otherData.colorScheme,this.colorScheme)) && (op(Op.EQUALS,otherData.dialogTheme,this.dialogTheme)) && (op(Op.EQUALS,otherData.typography,this.typography)) && (op(Op.EQUALS,otherData.cupertinoOverrideTheme,this.cupertinoOverrideTheme));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.brightness,this.primaryColor,this.primaryColorBrightness,this.primaryColorLight,this.primaryColorDark,this.accentColor,this.accentColorBrightness,this.canvasColor,this.scaffoldBackgroundColor,this.bottomAppBarColor,this.cardColor,this.dividerColor,this.highlightColor,this.splashColor,this.splashFactory,this.selectedRowColor,this.unselectedWidgetColor,this.disabledColor,this.buttonTheme,hashValues(this.buttonColor,this.toggleableActiveColor,this.secondaryHeaderColor,this.textSelectionColor,this.cursorColor,this.textSelectionHandleColor,this.backgroundColor,this.dialogBackgroundColor,this.indicatorColor,this.hintColor,this.errorColor,this.textTheme,this.primaryTextTheme,this.accentTextTheme,this.inputDecorationTheme,this.iconTheme,this.primaryIconTheme,this.accentIconTheme,this.sliderTheme,hashValues(this.tabBarTheme,this.cardTheme,this.chipTheme,this.platform,this.materialTapTargetSize,this.pageTransitionsTheme,this.appBarTheme,this.bottomAppBarTheme,this.colorScheme,this.dialogTheme,this.typography,this.cupertinoOverrideTheme)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultData : ThemeData = ThemeData.fallback();
        properties.add(lib3.EnumProperty('platform',this.platform,{
            defaultValue : lib14.properties.defaultTargetPlatform}));
        properties.add(lib3.EnumProperty('brightness',this.brightness,{
            defaultValue : defaultData.brightness}));
        properties.add(lib3.DiagnosticsProperty('primaryColor',this.primaryColor,{
            defaultValue : defaultData.primaryColor}));
        properties.add(lib3.EnumProperty('primaryColorBrightness',this.primaryColorBrightness,{
            defaultValue : defaultData.primaryColorBrightness}));
        properties.add(lib3.DiagnosticsProperty('accentColor',this.accentColor,{
            defaultValue : defaultData.accentColor}));
        properties.add(lib3.EnumProperty('accentColorBrightness',this.accentColorBrightness,{
            defaultValue : defaultData.accentColorBrightness}));
        properties.add(lib3.DiagnosticsProperty('canvasColor',this.canvasColor,{
            defaultValue : defaultData.canvasColor}));
        properties.add(lib3.DiagnosticsProperty('scaffoldBackgroundColor',this.scaffoldBackgroundColor,{
            defaultValue : defaultData.scaffoldBackgroundColor}));
        properties.add(lib3.DiagnosticsProperty('bottomAppBarColor',this.bottomAppBarColor,{
            defaultValue : defaultData.bottomAppBarColor}));
        properties.add(lib3.DiagnosticsProperty('cardColor',this.cardColor,{
            defaultValue : defaultData.cardColor}));
        properties.add(lib3.DiagnosticsProperty('dividerColor',this.dividerColor,{
            defaultValue : defaultData.dividerColor}));
        properties.add(lib3.DiagnosticsProperty('highlightColor',this.highlightColor,{
            defaultValue : defaultData.highlightColor}));
        properties.add(lib3.DiagnosticsProperty('splashColor',this.splashColor,{
            defaultValue : defaultData.splashColor}));
        properties.add(lib3.DiagnosticsProperty('selectedRowColor',this.selectedRowColor,{
            defaultValue : defaultData.selectedRowColor}));
        properties.add(lib3.DiagnosticsProperty('unselectedWidgetColor',this.unselectedWidgetColor,{
            defaultValue : defaultData.unselectedWidgetColor}));
        properties.add(lib3.DiagnosticsProperty('disabledColor',this.disabledColor,{
            defaultValue : defaultData.disabledColor}));
        properties.add(lib3.DiagnosticsProperty('buttonColor',this.buttonColor,{
            defaultValue : defaultData.buttonColor}));
        properties.add(lib3.DiagnosticsProperty('secondaryHeaderColor',this.secondaryHeaderColor,{
            defaultValue : defaultData.secondaryHeaderColor}));
        properties.add(lib3.DiagnosticsProperty('textSelectionColor',this.textSelectionColor,{
            defaultValue : defaultData.textSelectionColor}));
        properties.add(lib3.DiagnosticsProperty('cursorColor',this.cursorColor,{
            defaultValue : defaultData.cursorColor}));
        properties.add(lib3.DiagnosticsProperty('textSelectionHandleColor',this.textSelectionHandleColor,{
            defaultValue : defaultData.textSelectionHandleColor}));
        properties.add(lib3.DiagnosticsProperty('backgroundColor',this.backgroundColor,{
            defaultValue : defaultData.backgroundColor}));
        properties.add(lib3.DiagnosticsProperty('dialogBackgroundColor',this.dialogBackgroundColor,{
            defaultValue : defaultData.dialogBackgroundColor}));
        properties.add(lib3.DiagnosticsProperty('indicatorColor',this.indicatorColor,{
            defaultValue : defaultData.indicatorColor}));
        properties.add(lib3.DiagnosticsProperty('hintColor',this.hintColor,{
            defaultValue : defaultData.hintColor}));
        properties.add(lib3.DiagnosticsProperty('errorColor',this.errorColor,{
            defaultValue : defaultData.errorColor}));
        properties.add(lib3.DiagnosticsProperty('toggleableActiveColor',this.toggleableActiveColor,{
            defaultValue : defaultData.toggleableActiveColor}));
        properties.add(lib3.DiagnosticsProperty('buttonTheme',this.buttonTheme));
        properties.add(lib3.DiagnosticsProperty('textTheme',this.textTheme));
        properties.add(lib3.DiagnosticsProperty('primaryTextTheme',this.primaryTextTheme));
        properties.add(lib3.DiagnosticsProperty('accentTextTheme',this.accentTextTheme));
        properties.add(lib3.DiagnosticsProperty('inputDecorationTheme',this.inputDecorationTheme));
        properties.add(lib3.DiagnosticsProperty('iconTheme',this.iconTheme));
        properties.add(lib3.DiagnosticsProperty('primaryIconTheme',this.primaryIconTheme));
        properties.add(lib3.DiagnosticsProperty('accentIconTheme',this.accentIconTheme));
        properties.add(lib3.DiagnosticsProperty('sliderTheme',this.sliderTheme));
        properties.add(lib3.DiagnosticsProperty('tabBarTheme',this.tabBarTheme));
        properties.add(lib3.DiagnosticsProperty('cardTheme',this.cardTheme));
        properties.add(lib3.DiagnosticsProperty('chipTheme',this.chipTheme));
        properties.add(lib3.DiagnosticsProperty('materialTapTargetSize',this.materialTapTargetSize));
        properties.add(lib3.DiagnosticsProperty('pageTransitionsTheme',this.pageTransitionsTheme));
        properties.add(lib3.DiagnosticsProperty('appBarTheme',this.appBarTheme,{
            defaultValue : defaultData.appBarTheme}));
        properties.add(lib3.DiagnosticsProperty('bottomAppBarTheme',this.bottomAppBarTheme,{
            defaultValue : defaultData.bottomAppBarTheme}));
        properties.add(lib3.DiagnosticsProperty('colorScheme',this.colorScheme,{
            defaultValue : defaultData.colorScheme}));
        properties.add(lib3.DiagnosticsProperty('dialogTheme',this.dialogTheme,{
            defaultValue : defaultData.dialogTheme}));
        properties.add(lib3.DiagnosticsProperty('typography',this.typography,{
            defaultValue : defaultData.typography}));
        properties.add(lib3.DiagnosticsProperty('cupertinoOverrideTheme',this.cupertinoOverrideTheme,{
            defaultValue : defaultData.cupertinoOverrideTheme}));
    }
}

export namespace MaterialBasedCupertinoThemeData {
    export type Constructors = lib21.CupertinoThemeData.Constructors | 'MaterialBasedCupertinoThemeData';
    export type Interface = Omit<MaterialBasedCupertinoThemeData, Constructors>;
}
@DartClass
export class MaterialBasedCupertinoThemeData extends lib21.CupertinoThemeData {
    constructor(_namedArguments? : {materialTheme? : ThemeData}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialBasedCupertinoThemeData(_namedArguments? : {materialTheme? : ThemeData}) {
        let {materialTheme} = Object.assign({
        }, _namedArguments );
        this._materialTheme = this.materialTheme;
        this.assert = assert;
    }
     : any;

    _materialTheme;
    super;

    raw( : any, : any) {
    }
    brightness;
    materialTheme;

     : any;

    primaryColor;
    materialTheme;

     : any;

    primaryContrastingColor;
    materialTheme;

     : any;

    textTheme;
    materialTheme;

     : any;

    barBackgroundColor;
    materialTheme;

     : any;

    scaffoldBackgroundColor;
    ;

    _materialTheme : ThemeData;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get brightness() : any {
        return (((t)=>(!!t)?t.brightness:null)(this._materialTheme.cupertinoOverrideTheme) || this._materialTheme.brightness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get primaryColor() : any {
        return (((t)=>(!!t)?t.primaryColor:null)(this._materialTheme.cupertinoOverrideTheme) || this._materialTheme.colorScheme.primary);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get primaryContrastingColor() : any {
        return (((t)=>(!!t)?t.primaryContrastingColor:null)(this._materialTheme.cupertinoOverrideTheme) || this._materialTheme.colorScheme.onPrimary);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get scaffoldBackgroundColor() : any {
        return (((t)=>(!!t)?t.scaffoldBackgroundColor:null)(this._materialTheme.cupertinoOverrideTheme) || this._materialTheme.scaffoldBackgroundColor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyWith(_namedArguments? : {brightness? : any,primaryColor? : any,primaryContrastingColor? : any,textTheme? : lib23.CupertinoTextThemeData,barBackgroundColor? : any,scaffoldBackgroundColor? : any}) : lib21.CupertinoThemeData {
        let {brightness,primaryColor,primaryContrastingColor,textTheme,barBackgroundColor,scaffoldBackgroundColor} = Object.assign({
        }, _namedArguments );
        return (((_793_)=>(!!_793_)?_793_.copyWith({
            brightness : brightness,primaryColor : primaryColor,primaryContrastingColor : primaryContrastingColor,textTheme : textTheme,barBackgroundColor : barBackgroundColor,scaffoldBackgroundColor : scaffoldBackgroundColor}):null)(this._materialTheme.cupertinoOverrideTheme) || lib21.CupertinoThemeData({
            brightness : brightness,primaryColor : primaryColor,primaryContrastingColor : primaryContrastingColor,textTheme : textTheme,barBackgroundColor : barBackgroundColor,scaffoldBackgroundColor : scaffoldBackgroundColor}));
    }
}

export namespace _IdentityThemeDataCacheKey {
    export type Constructors = '_IdentityThemeDataCacheKey';
    export type Interface = Omit<_IdentityThemeDataCacheKey, Constructors>;
}
@DartClass
export class _IdentityThemeDataCacheKey {
    constructor(baseTheme : ThemeData,localTextGeometry : lib7.TextTheme) {
    }
    @defaultConstructor
    _IdentityThemeDataCacheKey(baseTheme : ThemeData,localTextGeometry : lib7.TextTheme) {
        this.baseTheme = baseTheme;
        this.localTextGeometry = localTextGeometry;
    }
    baseTheme : ThemeData;

    localTextGeometry : lib7.TextTheme;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return core.identityHashCode(this.baseTheme) ^ core.identityHashCode(this.localTextGeometry);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        let otherKey : _IdentityThemeDataCacheKey = other;
        return core.identical(this.baseTheme,otherKey.baseTheme) && core.identical(this.localTextGeometry,otherKey.localTextGeometry);
    }
}

export namespace _FifoCache {
    export type Constructors = '_FifoCache';
    export type Interface<K,V> = Omit<_FifoCache<K,V>, Constructors>;
}
@DartClass
export class _FifoCache<K,V> {
    constructor(_maximumSize : number) {
    }
    @defaultConstructor
    _FifoCache(_maximumSize : number) {
        this._cache = new core.DartMap.literal([
        ]);
        this.assert = assert;
        this._maximumSize = _maximumSize;
    }
     : any;

     : any;

    _cache : core.DartMap<K,V>;

    _maximumSize : number;

    putIfAbsent(key : K,loader : <K,V>() => V) : V {
        /* TODO (AssertStatementImpl) : assert (key != null); */;
        /* TODO (AssertStatementImpl) : assert (loader != null); */;
        let result : V = this._cache.get(key);
        if (result != null) return result;
        if (this._cache.length == this._maximumSize) this._cache.remove(this._cache.keys.first);
        return this._cache.set(key,loader());
    }
}

export class properties {
    private static __$_kLightThemeHighlightColor : any;
    static get _kLightThemeHighlightColor() : any { 
        if (this.__$_kLightThemeHighlightColor===undefined) {
            this.__$_kLightThemeHighlightColor = Color(1723645116);
        }
        return this.__$_kLightThemeHighlightColor;
    }
    static set _kLightThemeHighlightColor(__$value : any)  { 
        this.__$_kLightThemeHighlightColor = __$value;
    }

    private static __$_kLightThemeSplashColor : any;
    static get _kLightThemeSplashColor() : any { 
        if (this.__$_kLightThemeSplashColor===undefined) {
            this.__$_kLightThemeSplashColor = Color(1724434632);
        }
        return this.__$_kLightThemeSplashColor;
    }
    static set _kLightThemeSplashColor(__$value : any)  { 
        this.__$_kLightThemeSplashColor = __$value;
    }

    private static __$_kDarkThemeHighlightColor : any;
    static get _kDarkThemeHighlightColor() : any { 
        if (this.__$_kDarkThemeHighlightColor===undefined) {
            this.__$_kDarkThemeHighlightColor = Color(1087163596);
        }
        return this.__$_kDarkThemeHighlightColor;
    }
    static set _kDarkThemeHighlightColor(__$value : any)  { 
        this.__$_kDarkThemeHighlightColor = __$value;
    }

    private static __$_kDarkThemeSplashColor : any;
    static get _kDarkThemeSplashColor() : any { 
        if (this.__$_kDarkThemeSplashColor===undefined) {
            this.__$_kDarkThemeSplashColor = Color(1087163596);
        }
        return this.__$_kDarkThemeSplashColor;
    }
    static set _kDarkThemeSplashColor(__$value : any)  { 
        this.__$_kDarkThemeSplashColor = __$value;
    }

}
