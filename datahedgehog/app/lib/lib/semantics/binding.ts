/** Library asset:datahedgehog_monitor/lib/lib/semantics/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var BindingBase : () => any = () : any =>  {
    static;
    var instance : () => any = () : any =>  {
        return _instance;
    };
    static;
    let _instance : any;
    var initInstances : () => any = () : any =>  {
        super.initInstances();
        _instance = this;
        _accessibilityFeatures = window.accessibilityFeatures;
    };
    var handleAccessibilityFeaturesChanged : () => any = () : any =>  {
        _accessibilityFeatures = window.accessibilityFeatures;
    };
    var accessibilityFeatures : () => any = () : any =>  {
        return _accessibilityFeatures;
    };
    let _accessibilityFeatures : any;
    var disableAnimations : () => boolean = () : boolean =>  {
        let value : boolean = _accessibilityFeatures.disableAnimations;
        /* TODO (AssertStatementImpl) : assert (() {if (debugSemanticsDisableAnimations != null) value = debugSemanticsDisableAnimations; return true;}()); */;
        return value;
    };
};
export class properties {
    private static __$SemanticsBinding : any;
    static get SemanticsBinding() : any { 
        return this.__$SemanticsBinding;
    }
    static set SemanticsBinding(__$value : any)  { 
        this.__$SemanticsBinding = __$value;
    }

}
