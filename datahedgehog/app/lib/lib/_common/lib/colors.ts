/** Library asset:datahedgehog_monitor/lib/lib/_common/lib/colors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace HexColor {
    export type Constructors = 'HexColor';
    export type Interface = Omit<HexColor, Constructors>;
}
@DartClass
export class HexColor extends any {
    private static __$cachedColors : core.DartMap<string,HexColor>;
    static get cachedColors() : core.DartMap<string,HexColor> { 
        if (this.__$cachedColors===undefined) {
            this.__$cachedColors = new core.DartMap.literal([
                ["transparent",HexColor(null)]]);
        }
        return this.__$cachedColors;
    }
    static set cachedColors(__$value : core.DartMap<string,HexColor>)  { 
        this.__$cachedColors = __$value;
    }

    static _getColorFromHex(hexColor : string) : number {
        if (hexColor == null) {
            return 16777215;
        }
        switch (hexColor) {
            case "white":
                return 4294967295;
                break;
            case "red":
                return 4294901760;
                break;
            default:
        }
        hexColor = new core.DartString(new core.DartString(hexColor).toUpperCase()).replaceAll("#","");
        if (new core.DartString(hexColor).length == 6) {
            hexColor = "FF" + hexColor;
        }else {
            return 16777215;
        }
        return core.DartInt.parse(hexColor,{
            radix : 16});
    }
    constructor(hexColor : string) {
    }
    @defaultConstructor
    HexColor(hexColor : string) {
        super.DartObject(HexColor._getColorFromHex(hexColor));
    }
    static create(hex : string) : HexColor {
        if (hex == null || new core.DartString(hex).length < 1) {
            return HexColor.cachedColors.get("transparent");
        }
        if (HexColor.cachedColors.containsKey(hex)) {
            return HexColor.cachedColors.get(hex);
        }
        let c : HexColor = HexColor(hex);
        HexColor.cachedColors.set(hex,c);
        return c;
    }
}

export class properties {
}
