/** Library asset:datahedgehog_monitor/lib/lib/material/shadows.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/box_shadow";

export class properties {
    private static __$kElevationToShadow : core.DartMap<number,core.DartList<lib3.BoxShadow>>;
    static get kElevationToShadow() : core.DartMap<number,core.DartList<lib3.BoxShadow>> { 
        if (this.__$kElevationToShadow===undefined) {
            this.__$kElevationToShadow = properties._elevationToShadow;
        }
        return this.__$kElevationToShadow;
    }
    static set kElevationToShadow(__$value : core.DartMap<number,core.DartList<lib3.BoxShadow>>)  { 
        this.__$kElevationToShadow = __$value;
    }

    private static __$_kKeyUmbraOpacity : any;
    static get _kKeyUmbraOpacity() : any { 
        if (this.__$_kKeyUmbraOpacity===undefined) {
            this.__$_kKeyUmbraOpacity = Color(855638016);
        }
        return this.__$_kKeyUmbraOpacity;
    }
    static set _kKeyUmbraOpacity(__$value : any)  { 
        this.__$_kKeyUmbraOpacity = __$value;
    }

    private static __$_kKeyPenumbraOpacity : any;
    static get _kKeyPenumbraOpacity() : any { 
        if (this.__$_kKeyPenumbraOpacity===undefined) {
            this.__$_kKeyPenumbraOpacity = Color(603979776);
        }
        return this.__$_kKeyPenumbraOpacity;
    }
    static set _kKeyPenumbraOpacity(__$value : any)  { 
        this.__$_kKeyPenumbraOpacity = __$value;
    }

    private static __$_kAmbientShadowOpacity : any;
    static get _kAmbientShadowOpacity() : any { 
        if (this.__$_kAmbientShadowOpacity===undefined) {
            this.__$_kAmbientShadowOpacity = Color(520093696);
        }
        return this.__$_kAmbientShadowOpacity;
    }
    static set _kAmbientShadowOpacity(__$value : any)  { 
        this.__$_kAmbientShadowOpacity = __$value;
    }

    private static __$_elevationToShadow : core.DartMap<number,core.DartList<lib3.BoxShadow>>;
    static get _elevationToShadow() : core.DartMap<number,core.DartList<lib3.BoxShadow>> { 
        if (this.__$_elevationToShadow===undefined) {
            this.__$_elevationToShadow = new core.DartMap.literal([
                [1,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,2.0),blurRadius : 1.0,spreadRadius : -1.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,1.0),blurRadius : 1.0,spreadRadius : 0.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,1.0),blurRadius : 3.0,spreadRadius : 0.0,color : properties._kAmbientShadowOpacity}))],
                [2,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,3.0),blurRadius : 1.0,spreadRadius : -2.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,2.0),blurRadius : 2.0,spreadRadius : 0.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,1.0),blurRadius : 5.0,spreadRadius : 0.0,color : properties._kAmbientShadowOpacity}))],
                [3,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,3.0),blurRadius : 3.0,spreadRadius : -2.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,3.0),blurRadius : 4.0,spreadRadius : 0.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,1.0),blurRadius : 8.0,spreadRadius : 0.0,color : properties._kAmbientShadowOpacity}))],
                [4,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,2.0),blurRadius : 4.0,spreadRadius : -1.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,4.0),blurRadius : 5.0,spreadRadius : 0.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,1.0),blurRadius : 10.0,spreadRadius : 0.0,color : properties._kAmbientShadowOpacity}))],
                [6,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,3.0),blurRadius : 5.0,spreadRadius : -1.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,6.0),blurRadius : 10.0,spreadRadius : 0.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,1.0),blurRadius : 18.0,spreadRadius : 0.0,color : properties._kAmbientShadowOpacity}))],
                [8,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,5.0),blurRadius : 5.0,spreadRadius : -3.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,8.0),blurRadius : 10.0,spreadRadius : 1.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,3.0),blurRadius : 14.0,spreadRadius : 2.0,color : properties._kAmbientShadowOpacity}))],
                [9,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,5.0),blurRadius : 6.0,spreadRadius : -3.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,9.0),blurRadius : 12.0,spreadRadius : 1.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,3.0),blurRadius : 16.0,spreadRadius : 2.0,color : properties._kAmbientShadowOpacity}))],
                [12,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,7.0),blurRadius : 8.0,spreadRadius : -4.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,12.0),blurRadius : 17.0,spreadRadius : 2.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,5.0),blurRadius : 22.0,spreadRadius : 4.0,color : properties._kAmbientShadowOpacity}))],
                [16,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,8.0),blurRadius : 10.0,spreadRadius : -5.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,16.0),blurRadius : 24.0,spreadRadius : 2.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,6.0),blurRadius : 30.0,spreadRadius : 5.0,color : properties._kAmbientShadowOpacity}))],
                [24,new core.DartList.literal<lib3.BoxShadow>(lib3.BoxShadow({
                    offset : Offset(0.0,11.0),blurRadius : 15.0,spreadRadius : -7.0,color : properties._kKeyUmbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,24.0),blurRadius : 38.0,spreadRadius : 3.0,color : properties._kKeyPenumbraOpacity}),lib3.BoxShadow({
                    offset : Offset(0.0,9.0),blurRadius : 46.0,spreadRadius : 8.0,color : properties._kAmbientShadowOpacity}))]]);
        }
        return this.__$_elevationToShadow;
    }
    static set _elevationToShadow(__$value : core.DartMap<number,core.DartList<lib3.BoxShadow>>)  { 
        this.__$_elevationToShadow = __$value;
    }

}
