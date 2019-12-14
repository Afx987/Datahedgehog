/** Library asset:datahedgehog_monitor/lib/lib/material/colors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/colors";

export namespace MaterialColor {
    export type Constructors = lib3.ColorSwatch.Constructors | 'MaterialColor';
    export type Interface = Omit<MaterialColor, Constructors>;
}
@DartClass
export class MaterialColor extends lib3.ColorSwatch<number> {
    constructor(primary : number,swatch : core.DartMap<number,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialColor(primary : number,swatch : core.DartMap<number,any>) {
        super.ColorSwatch(primary,swatch);
    }
    get shade50() : any {
        return op(Op.INDEX,this,50);
    }
    get shade100() : any {
        return op(Op.INDEX,this,100);
    }
    get shade200() : any {
        return op(Op.INDEX,this,200);
    }
    get shade300() : any {
        return op(Op.INDEX,this,300);
    }
    get shade400() : any {
        return op(Op.INDEX,this,400);
    }
    get shade500() : any {
        return op(Op.INDEX,this,500);
    }
    get shade600() : any {
        return op(Op.INDEX,this,600);
    }
    get shade700() : any {
        return op(Op.INDEX,this,700);
    }
    get shade800() : any {
        return op(Op.INDEX,this,800);
    }
    get shade900() : any {
        return op(Op.INDEX,this,900);
    }
}

export namespace MaterialAccentColor {
    export type Constructors = lib3.ColorSwatch.Constructors | 'MaterialAccentColor';
    export type Interface = Omit<MaterialAccentColor, Constructors>;
}
@DartClass
export class MaterialAccentColor extends lib3.ColorSwatch<number> {
    constructor(primary : number,swatch : core.DartMap<number,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialAccentColor(primary : number,swatch : core.DartMap<number,any>) {
        super.ColorSwatch(primary,swatch);
    }
    get shade50() : any {
        return op(Op.INDEX,this,50);
    }
    get shade100() : any {
        return op(Op.INDEX,this,100);
    }
    get shade200() : any {
        return op(Op.INDEX,this,200);
    }
    get shade400() : any {
        return op(Op.INDEX,this,400);
    }
    get shade700() : any {
        return op(Op.INDEX,this,700);
    }
}

export namespace Colors {
    export type Constructors = '_';
    export type Interface = Omit<Colors, Constructors>;
}
@DartClass
export class Colors {
    @namedConstructor
    _() {
    }
    static _ : new() => Colors;

    private static __$transparent : any;
    static get transparent() : any { 
        if (this.__$transparent===undefined) {
            this.__$transparent = Color(0);
        }
        return this.__$transparent;
    }

    private static __$black : any;
    static get black() : any { 
        if (this.__$black===undefined) {
            this.__$black = Color(4278190080);
        }
        return this.__$black;
    }

    private static __$black87 : any;
    static get black87() : any { 
        if (this.__$black87===undefined) {
            this.__$black87 = Color(3707764736);
        }
        return this.__$black87;
    }

    private static __$black54 : any;
    static get black54() : any { 
        if (this.__$black54===undefined) {
            this.__$black54 = Color(2315255808);
        }
        return this.__$black54;
    }

    private static __$black45 : any;
    static get black45() : any { 
        if (this.__$black45===undefined) {
            this.__$black45 = Color(1929379840);
        }
        return this.__$black45;
    }

    private static __$black38 : any;
    static get black38() : any { 
        if (this.__$black38===undefined) {
            this.__$black38 = Color(1627389952);
        }
        return this.__$black38;
    }

    private static __$black26 : any;
    static get black26() : any { 
        if (this.__$black26===undefined) {
            this.__$black26 = Color(1107296256);
        }
        return this.__$black26;
    }

    private static __$black12 : any;
    static get black12() : any { 
        if (this.__$black12===undefined) {
            this.__$black12 = Color(520093696);
        }
        return this.__$black12;
    }

    private static __$white : any;
    static get white() : any { 
        if (this.__$white===undefined) {
            this.__$white = Color(4294967295);
        }
        return this.__$white;
    }

    private static __$white70 : any;
    static get white70() : any { 
        if (this.__$white70===undefined) {
            this.__$white70 = Color(3019898879);
        }
        return this.__$white70;
    }

    private static __$white54 : any;
    static get white54() : any { 
        if (this.__$white54===undefined) {
            this.__$white54 = Color(2332033023);
        }
        return this.__$white54;
    }

    private static __$white30 : any;
    static get white30() : any { 
        if (this.__$white30===undefined) {
            this.__$white30 = Color(1308622847);
        }
        return this.__$white30;
    }

    private static __$white24 : any;
    static get white24() : any { 
        if (this.__$white24===undefined) {
            this.__$white24 = Color(1040187391);
        }
        return this.__$white24;
    }

    private static __$white12 : any;
    static get white12() : any { 
        if (this.__$white12===undefined) {
            this.__$white12 = Color(536870911);
        }
        return this.__$white12;
    }

    private static __$white10 : any;
    static get white10() : any { 
        if (this.__$white10===undefined) {
            this.__$white10 = Color(452984831);
        }
        return this.__$white10;
    }

    private static __$red : MaterialColor;
    static get red() : MaterialColor { 
        if (this.__$red===undefined) {
            this.__$red = MaterialColor(Colors._redPrimaryValue,new core.DartMap.literal([
                [50,Color(4294962158)],
                [100,Color(4294954450)],
                [200,Color(4293892762)],
                [300,Color(4293227379)],
                [400,Color(4293874512)],
                [500,Color(Colors._redPrimaryValue)],
                [600,Color(4293212469)],
                [700,Color(4292030255)],
                [800,Color(4291176488)],
                [900,Color(4290190364)]]));
        }
        return this.__$red;
    }

    private static __$_redPrimaryValue : number;
    static get _redPrimaryValue() : number { 
        if (this.__$_redPrimaryValue===undefined) {
            this.__$_redPrimaryValue = 4294198070;
        }
        return this.__$_redPrimaryValue;
    }

    private static __$redAccent : MaterialAccentColor;
    static get redAccent() : MaterialAccentColor { 
        if (this.__$redAccent===undefined) {
            this.__$redAccent = MaterialAccentColor(Colors._redAccentValue,new core.DartMap.literal([
                [100,Color(4294937216)],
                [200,Color(Colors._redAccentValue)],
                [400,Color(4294907716)],
                [700,Color(4292149248)]]));
        }
        return this.__$redAccent;
    }

    private static __$_redAccentValue : number;
    static get _redAccentValue() : number { 
        if (this.__$_redAccentValue===undefined) {
            this.__$_redAccentValue = 4294922834;
        }
        return this.__$_redAccentValue;
    }

    private static __$pink : MaterialColor;
    static get pink() : MaterialColor { 
        if (this.__$pink===undefined) {
            this.__$pink = MaterialColor(Colors._pinkPrimaryValue,new core.DartMap.literal([
                [50,Color(4294763756)],
                [100,Color(4294491088)],
                [200,Color(4294217649)],
                [300,Color(4293943954)],
                [400,Color(4293673082)],
                [500,Color(Colors._pinkPrimaryValue)],
                [600,Color(4292352864)],
                [700,Color(4290910299)],
                [800,Color(4289533015)],
                [900,Color(4287106639)]]));
        }
        return this.__$pink;
    }

    private static __$_pinkPrimaryValue : number;
    static get _pinkPrimaryValue() : number { 
        if (this.__$_pinkPrimaryValue===undefined) {
            this.__$_pinkPrimaryValue = 4293467747;
        }
        return this.__$_pinkPrimaryValue;
    }

    private static __$pinkAccent : MaterialAccentColor;
    static get pinkAccent() : MaterialAccentColor { 
        if (this.__$pinkAccent===undefined) {
            this.__$pinkAccent = MaterialAccentColor(Colors._pinkAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4294934699)],
                [200,Color(Colors._pinkAccentPrimaryValue)],
                [400,Color(4294246487)],
                [700,Color(4291105122)]]));
        }
        return this.__$pinkAccent;
    }

    private static __$_pinkAccentPrimaryValue : number;
    static get _pinkAccentPrimaryValue() : number { 
        if (this.__$_pinkAccentPrimaryValue===undefined) {
            this.__$_pinkAccentPrimaryValue = 4294918273;
        }
        return this.__$_pinkAccentPrimaryValue;
    }

    private static __$purple : MaterialColor;
    static get purple() : MaterialColor { 
        if (this.__$purple===undefined) {
            this.__$purple = MaterialColor(Colors._purplePrimaryValue,new core.DartMap.literal([
                [50,Color(4294174197)],
                [100,Color(4292984551)],
                [200,Color(4291728344)],
                [300,Color(4290406600)],
                [400,Color(4289415100)],
                [500,Color(Colors._purplePrimaryValue)],
                [600,Color(4287505578)],
                [700,Color(4286259106)],
                [800,Color(4285143962)],
                [900,Color(4283045004)]]));
        }
        return this.__$purple;
    }

    private static __$_purplePrimaryValue : number;
    static get _purplePrimaryValue() : number { 
        if (this.__$_purplePrimaryValue===undefined) {
            this.__$_purplePrimaryValue = 4288423856;
        }
        return this.__$_purplePrimaryValue;
    }

    private static __$purpleAccent : MaterialAccentColor;
    static get purpleAccent() : MaterialAccentColor { 
        if (this.__$purpleAccent===undefined) {
            this.__$purpleAccent = MaterialAccentColor(Colors._purpleAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4293558524)],
                [200,Color(Colors._purpleAccentPrimaryValue)],
                [400,Color(4292149497)],
                [700,Color(4289331455)]]));
        }
        return this.__$purpleAccent;
    }

    private static __$_purpleAccentPrimaryValue : number;
    static get _purpleAccentPrimaryValue() : number { 
        if (this.__$_purpleAccentPrimaryValue===undefined) {
            this.__$_purpleAccentPrimaryValue = 4292886779;
        }
        return this.__$_purpleAccentPrimaryValue;
    }

    private static __$deepPurple : MaterialColor;
    static get deepPurple() : MaterialColor { 
        if (this.__$deepPurple===undefined) {
            this.__$deepPurple = MaterialColor(Colors._deepPurplePrimaryValue,new core.DartMap.literal([
                [50,Color(4293781494)],
                [100,Color(4291937513)],
                [200,Color(4289961435)],
                [300,Color(4287985101)],
                [400,Color(4286470082)],
                [500,Color(Colors._deepPurplePrimaryValue)],
                [600,Color(4284364209)],
                [700,Color(4283510184)],
                [800,Color(4282722208)],
                [900,Color(4281408402)]]));
        }
        return this.__$deepPurple;
    }

    private static __$_deepPurplePrimaryValue : number;
    static get _deepPurplePrimaryValue() : number { 
        if (this.__$_deepPurplePrimaryValue===undefined) {
            this.__$_deepPurplePrimaryValue = 4284955319;
        }
        return this.__$_deepPurplePrimaryValue;
    }

    private static __$deepPurpleAccent : MaterialAccentColor;
    static get deepPurpleAccent() : MaterialAccentColor { 
        if (this.__$deepPurpleAccent===undefined) {
            this.__$deepPurpleAccent = MaterialAccentColor(Colors._deepPurpleAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4289956095)],
                [200,Color(Colors._deepPurpleAccentPrimaryValue)],
                [400,Color(4284817407)],
                [700,Color(4284612842)]]));
        }
        return this.__$deepPurpleAccent;
    }

    private static __$_deepPurpleAccentPrimaryValue : number;
    static get _deepPurpleAccentPrimaryValue() : number { 
        if (this.__$_deepPurpleAccentPrimaryValue===undefined) {
            this.__$_deepPurpleAccentPrimaryValue = 4286336511;
        }
        return this.__$_deepPurpleAccentPrimaryValue;
    }

    private static __$indigo : MaterialColor;
    static get indigo() : MaterialColor { 
        if (this.__$indigo===undefined) {
            this.__$indigo = MaterialColor(Colors._indigoPrimaryValue,new core.DartMap.literal([
                [50,Color(4293454582)],
                [100,Color(4291152617)],
                [200,Color(4288653530)],
                [300,Color(4286154443)],
                [400,Color(4284246976)],
                [500,Color(Colors._indigoPrimaryValue)],
                [600,Color(4281944491)],
                [700,Color(4281352095)],
                [800,Color(4280825235)],
                [900,Color(4279903102)]]));
        }
        return this.__$indigo;
    }

    private static __$_indigoPrimaryValue : number;
    static get _indigoPrimaryValue() : number { 
        if (this.__$_indigoPrimaryValue===undefined) {
            this.__$_indigoPrimaryValue = 4282339765;
        }
        return this.__$_indigoPrimaryValue;
    }

    private static __$indigoAccent : MaterialAccentColor;
    static get indigoAccent() : MaterialAccentColor { 
        if (this.__$indigoAccent===undefined) {
            this.__$indigoAccent = MaterialAccentColor(Colors._indigoAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4287405823)],
                [200,Color(Colors._indigoAccentPrimaryValue)],
                [400,Color(4282211070)],
                [700,Color(4281356286)]]));
        }
        return this.__$indigoAccent;
    }

    private static __$_indigoAccentPrimaryValue : number;
    static get _indigoAccentPrimaryValue() : number { 
        if (this.__$_indigoAccentPrimaryValue===undefined) {
            this.__$_indigoAccentPrimaryValue = 4283657726;
        }
        return this.__$_indigoAccentPrimaryValue;
    }

    private static __$blue : MaterialColor;
    static get blue() : MaterialColor { 
        if (this.__$blue===undefined) {
            this.__$blue = MaterialColor(Colors._bluePrimaryValue,new core.DartMap.literal([
                [50,Color(4293128957)],
                [100,Color(4290502395)],
                [200,Color(4287679225)],
                [300,Color(4284790262)],
                [400,Color(4282557941)],
                [500,Color(Colors._bluePrimaryValue)],
                [600,Color(4280191205)],
                [700,Color(4279858898)],
                [800,Color(4279592384)],
                [900,Color(4279060385)]]));
        }
        return this.__$blue;
    }

    private static __$_bluePrimaryValue : number;
    static get _bluePrimaryValue() : number { 
        if (this.__$_bluePrimaryValue===undefined) {
            this.__$_bluePrimaryValue = 4280391411;
        }
        return this.__$_bluePrimaryValue;
    }

    private static __$blueAccent : MaterialAccentColor;
    static get blueAccent() : MaterialAccentColor { 
        if (this.__$blueAccent===undefined) {
            this.__$blueAccent = MaterialAccentColor(Colors._blueAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4286755327)],
                [200,Color(Colors._blueAccentPrimaryValue)],
                [400,Color(4280908287)],
                [700,Color(4280902399)]]));
        }
        return this.__$blueAccent;
    }

    private static __$_blueAccentPrimaryValue : number;
    static get _blueAccentPrimaryValue() : number { 
        if (this.__$_blueAccentPrimaryValue===undefined) {
            this.__$_blueAccentPrimaryValue = 4282682111;
        }
        return this.__$_blueAccentPrimaryValue;
    }

    private static __$lightBlue : MaterialColor;
    static get lightBlue() : MaterialColor { 
        if (this.__$lightBlue===undefined) {
            this.__$lightBlue = MaterialColor(Colors._lightBluePrimaryValue,new core.DartMap.literal([
                [50,Color(4292998654)],
                [100,Color(4289979900)],
                [200,Color(4286698746)],
                [300,Color(4283417591)],
                [400,Color(4280923894)],
                [500,Color(Colors._lightBluePrimaryValue)],
                [600,Color(4278426597)],
                [700,Color(4278356177)],
                [800,Color(4278351805)],
                [900,Color(4278278043)]]));
        }
        return this.__$lightBlue;
    }

    private static __$_lightBluePrimaryValue : number;
    static get _lightBluePrimaryValue() : number { 
        if (this.__$_lightBluePrimaryValue===undefined) {
            this.__$_lightBluePrimaryValue = 4278430196;
        }
        return this.__$_lightBluePrimaryValue;
    }

    private static __$lightBlueAccent : MaterialAccentColor;
    static get lightBlueAccent() : MaterialAccentColor { 
        if (this.__$lightBlueAccent===undefined) {
            this.__$lightBlueAccent = MaterialAccentColor(Colors._lightBlueAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4286634239)],
                [200,Color(Colors._lightBlueAccentPrimaryValue)],
                [400,Color(4278235391)],
                [700,Color(4278227434)]]));
        }
        return this.__$lightBlueAccent;
    }

    private static __$_lightBlueAccentPrimaryValue : number;
    static get _lightBlueAccentPrimaryValue() : number { 
        if (this.__$_lightBlueAccentPrimaryValue===undefined) {
            this.__$_lightBlueAccentPrimaryValue = 4282434815;
        }
        return this.__$_lightBlueAccentPrimaryValue;
    }

    private static __$cyan : MaterialColor;
    static get cyan() : MaterialColor { 
        if (this.__$cyan===undefined) {
            this.__$cyan = MaterialColor(Colors._cyanPrimaryValue,new core.DartMap.literal([
                [50,Color(4292933626)],
                [100,Color(4289915890)],
                [200,Color(4286635754)],
                [300,Color(4283289825)],
                [400,Color(4280731354)],
                [500,Color(Colors._cyanPrimaryValue)],
                [600,Color(4278234305)],
                [700,Color(4278228903)],
                [800,Color(4278223759)],
                [900,Color(4278214756)]]));
        }
        return this.__$cyan;
    }

    private static __$_cyanPrimaryValue : number;
    static get _cyanPrimaryValue() : number { 
        if (this.__$_cyanPrimaryValue===undefined) {
            this.__$_cyanPrimaryValue = 4278238420;
        }
        return this.__$_cyanPrimaryValue;
    }

    private static __$cyanAccent : MaterialAccentColor;
    static get cyanAccent() : MaterialAccentColor { 
        if (this.__$cyanAccent===undefined) {
            this.__$cyanAccent = MaterialAccentColor(Colors._cyanAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4286906367)],
                [200,Color(Colors._cyanAccentPrimaryValue)],
                [400,Color(4278248959)],
                [700,Color(4278237396)]]));
        }
        return this.__$cyanAccent;
    }

    private static __$_cyanAccentPrimaryValue : number;
    static get _cyanAccentPrimaryValue() : number { 
        if (this.__$_cyanAccentPrimaryValue===undefined) {
            this.__$_cyanAccentPrimaryValue = 4279828479;
        }
        return this.__$_cyanAccentPrimaryValue;
    }

    private static __$teal : MaterialColor;
    static get teal() : MaterialColor { 
        if (this.__$teal===undefined) {
            this.__$teal = MaterialColor(Colors._tealPrimaryValue,new core.DartMap.literal([
                [50,Color(4292932337)],
                [100,Color(4289912795)],
                [200,Color(4286630852)],
                [300,Color(4283283116)],
                [400,Color(4280723098)],
                [500,Color(Colors._tealPrimaryValue)],
                [600,Color(4278225275)],
                [700,Color(4278221163)],
                [800,Color(4278217052)],
                [900,Color(4278209856)]]));
        }
        return this.__$teal;
    }

    private static __$_tealPrimaryValue : number;
    static get _tealPrimaryValue() : number { 
        if (this.__$_tealPrimaryValue===undefined) {
            this.__$_tealPrimaryValue = 4278228616;
        }
        return this.__$_tealPrimaryValue;
    }

    private static __$tealAccent : MaterialAccentColor;
    static get tealAccent() : MaterialAccentColor { 
        if (this.__$tealAccent===undefined) {
            this.__$tealAccent = MaterialAccentColor(Colors._tealAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4289200107)],
                [200,Color(Colors._tealAccentPrimaryValue)],
                [400,Color(4280150454)],
                [700,Color(4278239141)]]));
        }
        return this.__$tealAccent;
    }

    private static __$_tealAccentPrimaryValue : number;
    static get _tealAccentPrimaryValue() : number { 
        if (this.__$_tealAccentPrimaryValue===undefined) {
            this.__$_tealAccentPrimaryValue = 4284809178;
        }
        return this.__$_tealAccentPrimaryValue;
    }

    private static __$green : MaterialColor;
    static get green() : MaterialColor { 
        if (this.__$green===undefined) {
            this.__$green = MaterialColor(Colors._greenPrimaryValue,new core.DartMap.literal([
                [50,Color(4293457385)],
                [100,Color(4291356361)],
                [200,Color(4289058471)],
                [300,Color(4286695300)],
                [400,Color(4284922730)],
                [500,Color(Colors._greenPrimaryValue)],
                [600,Color(4282622023)],
                [700,Color(4281896508)],
                [800,Color(4281236786)],
                [900,Color(4279983648)]]));
        }
        return this.__$green;
    }

    private static __$_greenPrimaryValue : number;
    static get _greenPrimaryValue() : number { 
        if (this.__$_greenPrimaryValue===undefined) {
            this.__$_greenPrimaryValue = 4283215696;
        }
        return this.__$_greenPrimaryValue;
    }

    private static __$greenAccent : MaterialAccentColor;
    static get greenAccent() : MaterialAccentColor { 
        if (this.__$greenAccent===undefined) {
            this.__$greenAccent = MaterialAccentColor(Colors._greenAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4290377418)],
                [200,Color(Colors._greenAccentPrimaryValue)],
                [400,Color(4278249078)],
                [700,Color(4278241363)]]));
        }
        return this.__$greenAccent;
    }

    private static __$_greenAccentPrimaryValue : number;
    static get _greenAccentPrimaryValue() : number { 
        if (this.__$_greenAccentPrimaryValue===undefined) {
            this.__$_greenAccentPrimaryValue = 4285132974;
        }
        return this.__$_greenAccentPrimaryValue;
    }

    private static __$lightGreen : MaterialColor;
    static get lightGreen() : MaterialColor { 
        if (this.__$lightGreen===undefined) {
            this.__$lightGreen = MaterialColor(Colors._lightGreenPrimaryValue,new core.DartMap.literal([
                [50,Color(4294047977)],
                [100,Color(4292668872)],
                [200,Color(4291158437)],
                [300,Color(4289648001)],
                [400,Color(4288466021)],
                [500,Color(Colors._lightGreenPrimaryValue)],
                [600,Color(4286362434)],
                [700,Color(4285046584)],
                [800,Color(4283796271)],
                [900,Color(4281559326)]]));
        }
        return this.__$lightGreen;
    }

    private static __$_lightGreenPrimaryValue : number;
    static get _lightGreenPrimaryValue() : number { 
        if (this.__$_lightGreenPrimaryValue===undefined) {
            this.__$_lightGreenPrimaryValue = 4287349578;
        }
        return this.__$_lightGreenPrimaryValue;
    }

    private static __$lightGreenAccent : MaterialAccentColor;
    static get lightGreenAccent() : MaterialAccentColor { 
        if (this.__$lightGreenAccent===undefined) {
            this.__$lightGreenAccent = MaterialAccentColor(Colors._lightGreenAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4291624848)],
                [200,Color(Colors._lightGreenAccentPrimaryValue)],
                [400,Color(4285988611)],
                [700,Color(4284800279)]]));
        }
        return this.__$lightGreenAccent;
    }

    private static __$_lightGreenAccentPrimaryValue : number;
    static get _lightGreenAccentPrimaryValue() : number { 
        if (this.__$_lightGreenAccentPrimaryValue===undefined) {
            this.__$_lightGreenAccentPrimaryValue = 4289920857;
        }
        return this.__$_lightGreenAccentPrimaryValue;
    }

    private static __$lime : MaterialColor;
    static get lime() : MaterialColor { 
        if (this.__$lime===undefined) {
            this.__$lime = MaterialColor(Colors._limePrimaryValue,new core.DartMap.literal([
                [50,Color(4294573031)],
                [100,Color(4293981379)],
                [200,Color(4293324444)],
                [300,Color(4292667253)],
                [400,Color(4292141399)],
                [500,Color(Colors._limePrimaryValue)],
                [600,Color(4290824755)],
                [700,Color(4289705003)],
                [800,Color(4288584996)],
                [900,Color(4286740247)]]));
        }
        return this.__$lime;
    }

    private static __$_limePrimaryValue : number;
    static get _limePrimaryValue() : number { 
        if (this.__$_limePrimaryValue===undefined) {
            this.__$_limePrimaryValue = 4291681337;
        }
        return this.__$_limePrimaryValue;
    }

    private static __$limeAccent : MaterialAccentColor;
    static get limeAccent() : MaterialAccentColor { 
        if (this.__$limeAccent===undefined) {
            this.__$limeAccent = MaterialAccentColor(Colors._limeAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4294246273)],
                [200,Color(Colors._limeAccentPrimaryValue)],
                [400,Color(4291231488)],
                [700,Color(4289653248)]]));
        }
        return this.__$limeAccent;
    }

    private static __$_limeAccentPrimaryValue : number;
    static get _limeAccentPrimaryValue() : number { 
        if (this.__$_limeAccentPrimaryValue===undefined) {
            this.__$_limeAccentPrimaryValue = 4293852993;
        }
        return this.__$_limeAccentPrimaryValue;
    }

    private static __$yellow : MaterialColor;
    static get yellow() : MaterialColor { 
        if (this.__$yellow===undefined) {
            this.__$yellow = MaterialColor(Colors._yellowPrimaryValue,new core.DartMap.literal([
                [50,Color(4294966759)],
                [100,Color(4294965700)],
                [200,Color(4294964637)],
                [300,Color(4294963574)],
                [400,Color(4294962776)],
                [500,Color(Colors._yellowPrimaryValue)],
                [600,Color(4294826037)],
                [700,Color(4294688813)],
                [800,Color(4294551589)],
                [900,Color(4294278935)]]));
        }
        return this.__$yellow;
    }

    private static __$_yellowPrimaryValue : number;
    static get _yellowPrimaryValue() : number { 
        if (this.__$_yellowPrimaryValue===undefined) {
            this.__$_yellowPrimaryValue = 4294961979;
        }
        return this.__$_yellowPrimaryValue;
    }

    private static __$yellowAccent : MaterialAccentColor;
    static get yellowAccent() : MaterialAccentColor { 
        if (this.__$yellowAccent===undefined) {
            this.__$yellowAccent = MaterialAccentColor(Colors._yellowAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4294967181)],
                [200,Color(Colors._yellowAccentPrimaryValue)],
                [400,Color(4294961664)],
                [700,Color(4294956544)]]));
        }
        return this.__$yellowAccent;
    }

    private static __$_yellowAccentPrimaryValue : number;
    static get _yellowAccentPrimaryValue() : number { 
        if (this.__$_yellowAccentPrimaryValue===undefined) {
            this.__$_yellowAccentPrimaryValue = 4294967040;
        }
        return this.__$_yellowAccentPrimaryValue;
    }

    private static __$amber : MaterialColor;
    static get amber() : MaterialColor { 
        if (this.__$amber===undefined) {
            this.__$amber = MaterialColor(Colors._amberPrimaryValue,new core.DartMap.literal([
                [50,Color(4294965473)],
                [100,Color(4294962355)],
                [200,Color(4294959234)],
                [300,Color(4294956367)],
                [400,Color(4294953512)],
                [500,Color(Colors._amberPrimaryValue)],
                [600,Color(4294947584)],
                [700,Color(4294942720)],
                [800,Color(4294938368)],
                [900,Color(4294930176)]]));
        }
        return this.__$amber;
    }

    private static __$_amberPrimaryValue : number;
    static get _amberPrimaryValue() : number { 
        if (this.__$_amberPrimaryValue===undefined) {
            this.__$_amberPrimaryValue = 4294951175;
        }
        return this.__$_amberPrimaryValue;
    }

    private static __$amberAccent : MaterialAccentColor;
    static get amberAccent() : MaterialAccentColor { 
        if (this.__$amberAccent===undefined) {
            this.__$amberAccent = MaterialAccentColor(Colors._amberAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4294960511)],
                [200,Color(Colors._amberAccentPrimaryValue)],
                [400,Color(4294951936)],
                [700,Color(4294945536)]]));
        }
        return this.__$amberAccent;
    }

    private static __$_amberAccentPrimaryValue : number;
    static get _amberAccentPrimaryValue() : number { 
        if (this.__$_amberAccentPrimaryValue===undefined) {
            this.__$_amberAccentPrimaryValue = 4294956864;
        }
        return this.__$_amberAccentPrimaryValue;
    }

    private static __$orange : MaterialColor;
    static get orange() : MaterialColor { 
        if (this.__$orange===undefined) {
            this.__$orange = MaterialColor(Colors._orangePrimaryValue,new core.DartMap.literal([
                [50,Color(4294964192)],
                [100,Color(4294959282)],
                [200,Color(4294954112)],
                [300,Color(4294948685)],
                [400,Color(4294944550)],
                [500,Color(Colors._orangePrimaryValue)],
                [600,Color(4294675456)],
                [700,Color(4294278144)],
                [800,Color(4293880832)],
                [900,Color(4293284096)]]));
        }
        return this.__$orange;
    }

    private static __$_orangePrimaryValue : number;
    static get _orangePrimaryValue() : number { 
        if (this.__$_orangePrimaryValue===undefined) {
            this.__$_orangePrimaryValue = 4294940672;
        }
        return this.__$_orangePrimaryValue;
    }

    private static __$orangeAccent : MaterialAccentColor;
    static get orangeAccent() : MaterialAccentColor { 
        if (this.__$orangeAccent===undefined) {
            this.__$orangeAccent = MaterialAccentColor(Colors._orangeAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4294955392)],
                [200,Color(Colors._orangeAccentPrimaryValue)],
                [400,Color(4294938880)],
                [700,Color(4294929664)]]));
        }
        return this.__$orangeAccent;
    }

    private static __$_orangeAccentPrimaryValue : number;
    static get _orangeAccentPrimaryValue() : number { 
        if (this.__$_orangeAccentPrimaryValue===undefined) {
            this.__$_orangeAccentPrimaryValue = 4294945600;
        }
        return this.__$_orangeAccentPrimaryValue;
    }

    private static __$deepOrange : MaterialColor;
    static get deepOrange() : MaterialColor { 
        if (this.__$deepOrange===undefined) {
            this.__$deepOrange = MaterialColor(Colors._deepOrangePrimaryValue,new core.DartMap.literal([
                [50,Color(4294699495)],
                [100,Color(4294954172)],
                [200,Color(4294945681)],
                [300,Color(4294937189)],
                [400,Color(4294930499)],
                [500,Color(Colors._deepOrangePrimaryValue)],
                [600,Color(4294201630)],
                [700,Color(4293282329)],
                [800,Color(4292363029)],
                [900,Color(4290721292)]]));
        }
        return this.__$deepOrange;
    }

    private static __$_deepOrangePrimaryValue : number;
    static get _deepOrangePrimaryValue() : number { 
        if (this.__$_deepOrangePrimaryValue===undefined) {
            this.__$_deepOrangePrimaryValue = 4294924066;
        }
        return this.__$_deepOrangePrimaryValue;
    }

    private static __$deepOrangeAccent : MaterialAccentColor;
    static get deepOrangeAccent() : MaterialAccentColor { 
        if (this.__$deepOrangeAccent===undefined) {
            this.__$deepOrangeAccent = MaterialAccentColor(Colors._deepOrangeAccentPrimaryValue,new core.DartMap.literal([
                [100,Color(4294942336)],
                [200,Color(Colors._deepOrangeAccentPrimaryValue)],
                [400,Color(4294917376)],
                [700,Color(4292684800)]]));
        }
        return this.__$deepOrangeAccent;
    }

    private static __$_deepOrangeAccentPrimaryValue : number;
    static get _deepOrangeAccentPrimaryValue() : number { 
        if (this.__$_deepOrangeAccentPrimaryValue===undefined) {
            this.__$_deepOrangeAccentPrimaryValue = 4294929984;
        }
        return this.__$_deepOrangeAccentPrimaryValue;
    }

    private static __$brown : MaterialColor;
    static get brown() : MaterialColor { 
        if (this.__$brown===undefined) {
            this.__$brown = MaterialColor(Colors._brownPrimaryValue,new core.DartMap.literal([
                [50,Color(4293913577)],
                [100,Color(4292332744)],
                [200,Color(4290554532)],
                [300,Color(4288776319)],
                [400,Color(4287458915)],
                [500,Color(Colors._brownPrimaryValue)],
                [600,Color(4285353025)],
                [700,Color(4284301367)],
                [800,Color(4283315246)],
                [900,Color(4282263331)]]));
        }
        return this.__$brown;
    }

    private static __$_brownPrimaryValue : number;
    static get _brownPrimaryValue() : number { 
        if (this.__$_brownPrimaryValue===undefined) {
            this.__$_brownPrimaryValue = 4286141768;
        }
        return this.__$_brownPrimaryValue;
    }

    private static __$grey : MaterialColor;
    static get grey() : MaterialColor { 
        if (this.__$grey===undefined) {
            this.__$grey = MaterialColor(Colors._greyPrimaryValue,new core.DartMap.literal([
                [50,Color(4294638330)],
                [100,Color(4294309365)],
                [200,Color(4293848814)],
                [300,Color(4292927712)],
                [350,Color(4292269782)],
                [400,Color(4290624957)],
                [500,Color(Colors._greyPrimaryValue)],
                [600,Color(4285887861)],
                [700,Color(4284572001)],
                [800,Color(4282532418)],
                [850,Color(4281348144)],
                [900,Color(4280361249)]]));
        }
        return this.__$grey;
    }

    private static __$_greyPrimaryValue : number;
    static get _greyPrimaryValue() : number { 
        if (this.__$_greyPrimaryValue===undefined) {
            this.__$_greyPrimaryValue = 4288585374;
        }
        return this.__$_greyPrimaryValue;
    }

    private static __$blueGrey : MaterialColor;
    static get blueGrey() : MaterialColor { 
        if (this.__$blueGrey===undefined) {
            this.__$blueGrey = MaterialColor(Colors._blueGreyPrimaryValue,new core.DartMap.literal([
                [50,Color(4293718001)],
                [100,Color(4291811548)],
                [200,Color(4289773253)],
                [300,Color(4287669422)],
                [400,Color(4286091420)],
                [500,Color(Colors._blueGreyPrimaryValue)],
                [600,Color(4283723386)],
                [700,Color(4282735204)],
                [800,Color(4281812815)],
                [900,Color(4280693304)]]));
        }
        return this.__$blueGrey;
    }

    private static __$_blueGreyPrimaryValue : number;
    static get _blueGreyPrimaryValue() : number { 
        if (this.__$_blueGreyPrimaryValue===undefined) {
            this.__$_blueGreyPrimaryValue = 4284513675;
        }
        return this.__$_blueGreyPrimaryValue;
    }

    private static __$primaries : core.DartList<MaterialColor>;
    static get primaries() : core.DartList<MaterialColor> { 
        if (this.__$primaries===undefined) {
            this.__$primaries = new core.DartList.literal<MaterialColor>(Colors.red,Colors.pink,Colors.purple,Colors.deepPurple,Colors.indigo,Colors.blue,Colors.lightBlue,Colors.cyan,Colors.teal,Colors.green,Colors.lightGreen,Colors.lime,Colors.yellow,Colors.amber,Colors.orange,Colors.deepOrange,Colors.brown,Colors.blueGrey);
        }
        return this.__$primaries;
    }

    private static __$accents : core.DartList<MaterialAccentColor>;
    static get accents() : core.DartList<MaterialAccentColor> { 
        if (this.__$accents===undefined) {
            this.__$accents = new core.DartList.literal<MaterialAccentColor>(Colors.redAccent,Colors.pinkAccent,Colors.purpleAccent,Colors.deepPurpleAccent,Colors.indigoAccent,Colors.blueAccent,Colors.lightBlueAccent,Colors.cyanAccent,Colors.tealAccent,Colors.greenAccent,Colors.lightGreenAccent,Colors.limeAccent,Colors.yellowAccent,Colors.amberAccent,Colors.orangeAccent,Colors.deepOrangeAccent);
        }
        return this.__$accents;
    }

}

export class properties {
}
