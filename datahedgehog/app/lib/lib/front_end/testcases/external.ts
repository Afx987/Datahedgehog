/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/external.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as isolate from "@dart2ts/dart/isolate";

export var onData : (x : any) => void = (x : any) : void =>  {
    core.print(x);
    properties.subscription.cancel();
};
export var main : () => any = () =>  {
    let string = new core.DartString.fromCharCode(65).valueOf();
    let port = new isolate.ReceivePort();
    properties.subscription = port.listen(onData);
    port.sendPort.send(string);
};
export class properties {
    private static __$subscription;
    static get subscription() { 
        return this.__$subscription;
    }
    static set subscription(__$value : any)  { 
        this.__$subscription = __$value;
    }

}
