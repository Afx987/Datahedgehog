/** Library asset:datahedgehog_monitor/lib/lib/widgets/icon_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./icon_theme_data";
import * as lib6 from "./basic";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace IconTheme {
    export type Constructors = lib3.InheritedWidget.Constructors | 'IconTheme';
    export type Interface = Omit<IconTheme, Constructors>;
}
@DartClass
export class IconTheme extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,data? : lib5.IconThemeData,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IconTheme(_namedArguments? : {key? : lib4.Key,data? : lib5.IconThemeData,child? : lib3.Widget}) {
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

    static merge(_namedArguments? : {key? : lib4.Key,data? : lib5.IconThemeData,child? : lib3.Widget}) : lib3.Widget {
        let {key,data,child} = Object.assign({
        }, _namedArguments );
        return lib6.Builder({
            builder : (context : lib3.BuildContext) =>  {
                return IconTheme({
                    key : key,data : IconTheme._getInheritedIconThemeData(context).merge(data),child : child});
            }});
    }
    data : lib5.IconThemeData;

    static of(context : lib3.BuildContext) : lib5.IconThemeData {
        let iconThemeData : lib5.IconThemeData = IconTheme._getInheritedIconThemeData(context);
        return iconThemeData.isConcrete ? iconThemeData : new lib5.IconThemeData.fallback().merge(iconThemeData);
    }
    static _getInheritedIconThemeData(context : lib3.BuildContext) : lib5.IconThemeData {
        let iconTheme : IconTheme = context.inheritFromWidgetOfExactType(IconTheme);
        return (((t)=>(!!t)?t.data:null)(iconTheme) || new lib5.IconThemeData.fallback());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : IconTheme) : boolean {
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
