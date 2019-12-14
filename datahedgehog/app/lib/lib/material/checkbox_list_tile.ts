/** Library asset:datahedgehog_monitor/lib/lib/material/checkbox_list_tile.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./list_tile";
import * as lib6 from "./theme_data";
import * as lib7 from "./checkbox";
import * as lib8 from "./theme";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export namespace CheckboxListTile {
    export type Constructors = lib3.StatelessWidget.Constructors | 'CheckboxListTile';
    export type Interface = Omit<CheckboxListTile, Constructors>;
}
@DartClass
export class CheckboxListTile extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,title? : lib3.Widget,subtitle? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,secondary? : lib3.Widget,selected? : boolean,controlAffinity? : lib5.ListTileControlAffinity}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckboxListTile(_namedArguments? : {key? : lib4.Key,value? : boolean,onChanged? : <T>(value : boolean) => void,activeColor? : any,title? : lib3.Widget,subtitle? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,secondary? : lib3.Widget,selected? : boolean,controlAffinity? : lib5.ListTileControlAffinity}) {
        let {key,value,onChanged,activeColor,title,subtitle,isThreeLine,dense,secondary,selected,controlAffinity} = Object.assign({
            "isThreeLine" : false,
            "selected" : false,
            "controlAffinity" : lib5.ListTileControlAffinity.platform}, _namedArguments );
        this.assert = assert;
        this.value = value;
        this.onChanged = onChanged;
        this.activeColor = activeColor;
        this.title = title;
        this.subtitle = subtitle;
        this.isThreeLine = isThreeLine;
        this.dense = dense;
        this.secondary = secondary;
        this.selected = selected;
        this.controlAffinity = controlAffinity;
    }
     : any;

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

    title : lib3.Widget;

    subtitle : lib3.Widget;

    secondary : lib3.Widget;

    isThreeLine : boolean;

    dense : boolean;

    selected : boolean;

    controlAffinity : lib5.ListTileControlAffinity;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let control : lib3.Widget = lib7.Checkbox({
            value : this.value,onChanged : this.onChanged,activeColor : this.activeColor,materialTapTargetSize : lib6.MaterialTapTargetSize.shrinkWrap});
        let leading : lib3.Widget, trailing : lib3.Widget;
        switch (this.controlAffinity) {
            case lib5.ListTileControlAffinity.leading:
                leading = control;
                trailing = this.secondary;
                break;
            case lib5.ListTileControlAffinity.trailing:
            case lib5.ListTileControlAffinity.platform:
                leading = this.secondary;
                trailing = control;
                break;
        }
        return lib9.MergeSemantics({
            child : lib5.ListTileTheme.merge({
                selectedColor : (this.activeColor || lib8.Theme.of(context).accentColor),child : lib5.ListTile({
                    leading : leading,title : this.title,subtitle : this.subtitle,trailing : trailing,isThreeLine : this.isThreeLine,dense : this.dense,enabled : this.onChanged != null,onTap : this.onChanged != null ? () =>  {
                        this.onChanged(!this.value);
                    } : null,selected : this.selected})})});
    }
}

export class properties {
}
