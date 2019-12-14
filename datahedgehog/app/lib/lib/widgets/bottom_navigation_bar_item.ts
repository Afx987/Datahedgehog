/** Library asset:datahedgehog_monitor/lib/lib/widgets/bottom_navigation_bar_item.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";

export namespace BottomNavigationBarItem {
    export type Constructors = 'BottomNavigationBarItem';
    export type Interface = Omit<BottomNavigationBarItem, Constructors>;
}
@DartClass
export class BottomNavigationBarItem {
    constructor(_namedArguments? : {icon? : lib3.Widget,title? : lib3.Widget,activeIcon? : lib3.Widget,backgroundColor? : any}) {
    }
    @defaultConstructor
    BottomNavigationBarItem(_namedArguments? : {icon? : lib3.Widget,title? : lib3.Widget,activeIcon? : lib3.Widget,backgroundColor? : any}) {
        let {icon,title,activeIcon,backgroundColor} = Object.assign({
        }, _namedArguments );
        this.activeIcon = (activeIcon || icon);
        this.assert = assert;
        this.icon = icon;
        this.title = title;
        this.backgroundColor = backgroundColor;
    }
     : any;

    icon : lib3.Widget;

    activeIcon : lib3.Widget;

    title : lib3.Widget;

    backgroundColor : any;

}

export class properties {
}
