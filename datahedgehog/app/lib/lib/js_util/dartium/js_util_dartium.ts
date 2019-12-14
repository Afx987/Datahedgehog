/** Library asset:datahedgehog_monitor/lib/lib/js_util/dartium/js_util_dartium.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as js from "@dart2ts/dart/js";

export var jsify : (object : any) => any = (object : any) =>  {
    if ((isNot(object, core.DartMap<any,any>)) && (isNot(object, core.DartIterable<any>))) {
        throw new core.ArgumentError("object must be a Map or Iterable");
    }
    return js.JsNative.jsify(object);
};
export var newObject : () => js.JSObject = () : js.JSObject =>  {
    return js.JsNative.newObject();
};
export var hasProperty : (o : js.JSObject,name : any) => any = (o : js.JSObject,name : any) =>  {
    return js.JsNative.hasProperty(o,name);
};
export var getProperty : (o : js.JSObject,name : any) => any = (o : js.JSObject,name : any) =>  {
    return js.JsNative.getProperty(o,name);
};
export var setProperty : (o : js.JSObject,name : any,value : any) => any = (o : js.JSObject,name : any,value : any) =>  {
    return js.JsNative.setProperty(o,name,value);
};
export var callMethod : (o : js.JSObject,method : string,args : core.DartList<any>) => any = (o : js.JSObject,method : string,args : core.DartList<any>) =>  {
    return js.JsNative.callMethod(o,method,args);
};
export var instanceof : (o : js.JSObject,type : Function) => any = (o : js.JSObject,type : Function) =>  {
    return js.JsNative.instanceof(o,type);
};
export var callConstructor : (constructor : js.JSObject,args : core.DartList<any>) => any = (constructor : js.JSObject,args : core.DartList<any>) =>  {
    return js.JsNative.callConstructor(constructor,args);
};
export class properties {
}
