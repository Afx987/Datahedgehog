/** Library asset:datahedgehog_monitor/lib/lib/foundation/platform.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./assertions";

export enum TargetPlatform {
    android,
    fuchsia,
    iOS
}

export class properties {
    static get defaultTargetPlatform() : TargetPlatform {
        let result : TargetPlatform;
        if (io.Platform.isIOS) {
            result = TargetPlatform.iOS;
        }else if (io.Platform.isAndroid) {
            result = TargetPlatform.android;
        }else if (io.Platform.isFuchsia) {
            result = TargetPlatform.fuchsia;
        }
        /* TODO (AssertStatementImpl) : assert (() {if (Platform.environment.containsKey('FLUTTER_TEST')) result = TargetPlatform.android; return true;}()); */;
        if (properties.debugDefaultTargetPlatformOverride != null) result = properties.debugDefaultTargetPlatformOverride;
        if (op(Op.EQUALS,result,null)) {
            throw lib4.FlutterError('Unknown platform.\n' + `${io.Platform.operatingSystem} was not recognized as a target platform. ` + 'Consider updating the list of TargetPlatforms to include this platform.');
        }
        return result;
    }
    private static __$debugDefaultTargetPlatformOverride : TargetPlatform;
    static get debugDefaultTargetPlatformOverride() : TargetPlatform { 
        return this.__$debugDefaultTargetPlatformOverride;
    }
    static set debugDefaultTargetPlatformOverride(__$value : TargetPlatform)  { 
        this.__$debugDefaultTargetPlatformOverride = __$value;
    }

}
