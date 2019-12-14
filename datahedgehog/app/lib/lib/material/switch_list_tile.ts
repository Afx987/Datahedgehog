/** Library asset:datahedgehog_monitor/lib/lib/material/switch_list_tile.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib6 from "./theme_data";
import * as lib7 from "./switch";
import * as lib8 from "./theme";
import * as lib9 from "./list_tile";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export enum _SwitchListTileType {
    material,
    adaptive
}

export namespace SwitchListTile {
    export type Constructors = lib3.StatelessWidget.Constructors | 'SwitchListTile' | 'adaptive';
    export type Interface = Omit<SwitchListTile, Constructors>;
}
@DartClass
export class SwitchListTile extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,activeTrackColor? : any,inactiveThumbColor? : any,inactiveTrackColor? : any,activeThumbImage? : lib5.ImageProvider<any>,inactiveThumbImage? : lib5.ImageProvider<any>,title? : lib3.Widget,subtitle? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,secondary? : lib3.Widget,selected? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchListTile(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,activeTrackColor? : any,inactiveThumbColor? : any,inactiveTrackColor? : any,activeThumbImage? : lib5.ImageProvider<any>,inactiveThumbImage? : lib5.ImageProvider<any>,title? : lib3.Widget,subtitle? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,secondary? : lib3.Widget,selected? : boolean}) {
        let {key,value,onChanged,activeColor,activeTrackColor,inactiveThumbColor,inactiveTrackColor,activeThumbImage,inactiveThumbImage,title,subtitle,isThreeLine,dense,secondary,selected} = Object.assign({
            "isThreeLine" : false,
            "selected" : false}, _namedArguments );
        this._switchListTileType = _SwitchListTileType.material;
        this.assert = assert;
        this.value = value;
        this.onChanged = onChanged;
        this.activeColor = activeColor;
        this.activeTrackColor = activeTrackColor;
        this.inactiveThumbColor = inactiveThumbColor;
        this.inactiveTrackColor = inactiveTrackColor;
        this.activeThumbImage = activeThumbImage;
        this.inactiveThumbImage = inactiveThumbImage;
        this.title = title;
        this.subtitle = subtitle;
        this.isThreeLine = isThreeLine;
        this.dense = dense;
        this.secondary = secondary;
        this.selected = selected;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    adaptive(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,activeTrackColor? : any,inactiveThumbColor? : any,inactiveTrackColor? : any,activeThumbImage? : lib5.ImageProvider<any>,inactiveThumbImage? : lib5.ImageProvider<any>,title? : lib3.Widget,subtitle? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,secondary? : lib3.Widget,selected? : boolean}) {
        let {key,value,onChanged,activeColor,activeTrackColor,inactiveThumbColor,inactiveTrackColor,activeThumbImage,inactiveThumbImage,title,subtitle,isThreeLine,dense,secondary,selected} = Object.assign({
            "isThreeLine" : false,
            "selected" : false}, _namedArguments );
        this._switchListTileType = _SwitchListTileType.adaptive;
        this.assert = assert;
        this.value = value;
        this.onChanged = onChanged;
        this.activeColor = activeColor;
        this.activeTrackColor = activeTrackColor;
        this.inactiveThumbColor = inactiveThumbColor;
        this.inactiveTrackColor = inactiveTrackColor;
        this.activeThumbImage = activeThumbImage;
        this.inactiveThumbImage = inactiveThumbImage;
        this.title = title;
        this.subtitle = subtitle;
        this.isThreeLine = isThreeLine;
        this.dense = dense;
        this.secondary = secondary;
        this.selected = selected;
    }
    static adaptive : new(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,activeTrackColor? : any,inactiveThumbColor? : any,inactiveTrackColor? : any,activeThumbImage? : lib5.ImageProvider<any>,inactiveThumbImage? : lib5.ImageProvider<any>,title? : lib3.Widget,subtitle? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,secondary? : lib3.Widget,selected? : boolean}) => SwitchListTile;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    value : boolean;

    onChanged : <T>(value : boolean) => void;

    activeColor : any;

    activeTrackColor : any;

    inactiveThumbColor : any;

    inactiveTrackColor : any;

    activeThumbImage : lib5.ImageProvider<any>;

    inactiveThumbImage : lib5.ImageProvider<any>;

    title : lib3.Widget;

    subtitle : lib3.Widget;

    secondary : lib3.Widget;

    isThreeLine : boolean;

    dense : boolean;

    selected : boolean;

    _switchListTileType : _SwitchListTileType;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let control : lib3.Widget;
        switch (this._switchListTileType) {
            case _SwitchListTileType.adaptive:
                control = lib7.Switch.adaptive({
                    value : this.value,onChanged : this.onChanged,activeColor : this.activeColor,activeThumbImage : this.activeThumbImage,inactiveThumbImage : this.inactiveThumbImage,materialTapTargetSize : lib6.MaterialTapTargetSize.shrinkWrap,activeTrackColor : this.activeTrackColor,inactiveTrackColor : this.inactiveTrackColor,inactiveThumbColor : this.inactiveThumbColor});
                break;
            case _SwitchListTileType.material:
                control = lib7.Switch({
                    value : this.value,onChanged : this.onChanged,activeColor : this.activeColor,activeThumbImage : this.activeThumbImage,inactiveThumbImage : this.inactiveThumbImage,materialTapTargetSize : lib6.MaterialTapTargetSize.shrinkWrap,activeTrackColor : this.activeTrackColor,inactiveTrackColor : this.inactiveTrackColor,inactiveThumbColor : this.inactiveThumbColor});
        }
        return lib10.MergeSemantics({
            child : lib9.ListTileTheme.merge({
                selectedColor : (this.activeColor || lib8.Theme.of(context).accentColor),child : lib9.ListTile({
                    leading : this.secondary,title : this.title,subtitle : this.subtitle,trailing : control,isThreeLine : this.isThreeLine,dense : this.dense,enabled : this.onChanged != null,onTap : this.onChanged != null ? () =>  {
                        this.onChanged(!this.value);
                    } : null,selected : this.selected})})});
    }
}

export class properties {
}
