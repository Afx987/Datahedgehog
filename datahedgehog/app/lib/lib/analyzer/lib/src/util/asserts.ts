/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/util/asserts.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var notNull : (value : core.DartObject,description? : string) => void = (value : core.DartObject,description? : string) : void =>  {
    if (op(Op.EQUALS,value,null)) {
        if (description == null) {
            throw new core.ArgumentError('Must not be null');
        }else {
            throw new core.ArgumentError(`Must not be null: ${description}`);
        }
    }
};
export class properties {
}
