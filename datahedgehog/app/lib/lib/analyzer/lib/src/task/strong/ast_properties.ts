/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/strong/ast_properties.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var hasImplicitCasts : (node : any) => boolean = (node : any) : boolean =>  {
    return (node.getProperty(properties._hasImplicitCasts) || false);
};
export var setHasImplicitCasts : (node : any,value : boolean) => void = (node : any,value : boolean) : void =>  {
    node.setProperty(properties._hasImplicitCasts,value == true ? true : null);
};
export var getImplicitCast : (node : any) => any = (node : any) : any =>  {
    return node.getProperty(properties._implicitCast);
};
export var setImplicitCast : (node : any,type : any) => void = (node : any,type : any) : void =>  {
    node.setProperty(properties._implicitCast,type);
};
export var getImplicitAssignmentCast : (node : any) => any = (node : any) : any =>  {
    return node.getProperty(properties._implicitAssignmentCast);
};
export var setImplicitAssignmentCast : (node : any,type : any) => void = (node : any,type : any) : void =>  {
    node.setProperty(properties._implicitAssignmentCast,type);
};
export var isDynamicInvoke : (node : any) => boolean = (node : any) : boolean =>  {
    return (node.getProperty(properties._isDynamicInvoke) || false);
};
export var setIsDynamicInvoke : (node : any,value : boolean) => void = (node : any,value : boolean) : void =>  {
    node.setProperty(properties._isDynamicInvoke,value == true ? true : null);
};
export class properties {
    private static __$_implicitAssignmentCast : string;
    static get _implicitAssignmentCast() : string { 
        if (this.__$_implicitAssignmentCast===undefined) {
            this.__$_implicitAssignmentCast = '_implicitAssignmentCast';
        }
        return this.__$_implicitAssignmentCast;
    }
    static set _implicitAssignmentCast(__$value : string)  { 
        this.__$_implicitAssignmentCast = __$value;
    }

    private static __$_implicitCast : string;
    static get _implicitCast() : string { 
        if (this.__$_implicitCast===undefined) {
            this.__$_implicitCast = '_implicitCast';
        }
        return this.__$_implicitCast;
    }
    static set _implicitCast(__$value : string)  { 
        this.__$_implicitCast = __$value;
    }

    private static __$_hasImplicitCasts : string;
    static get _hasImplicitCasts() : string { 
        if (this.__$_hasImplicitCasts===undefined) {
            this.__$_hasImplicitCasts = '_hasImplicitCasts';
        }
        return this.__$_hasImplicitCasts;
    }
    static set _hasImplicitCasts(__$value : string)  { 
        this.__$_hasImplicitCasts = __$value;
    }

    private static __$_isDynamicInvoke : string;
    static get _isDynamicInvoke() : string { 
        if (this.__$_isDynamicInvoke===undefined) {
            this.__$_isDynamicInvoke = '_isDynamicInvoke';
        }
        return this.__$_isDynamicInvoke;
    }
    static set _isDynamicInvoke(__$value : string)  { 
        this.__$_isDynamicInvoke = __$value;
    }

}
