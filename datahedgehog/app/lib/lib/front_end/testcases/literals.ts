/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/literals.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var testString : () => any = () =>  {
    core.print("a");
};
export var testInt : () => any = () =>  {
    core.print(1);
};
export var testBool : () => any = () =>  {
    core.print(true);
    core.print(false);
};
export var testDouble : () => any = () =>  {
    core.print(1.0);
};
export var testNull : () => any = () =>  {
    core.print(null);
};
export var testList : () => any = () =>  {
    core.print(new core.DartList.literal());
    core.print(new core.DartList.literal("a","b"));
};
export var testMap : () => any = () =>  {
    core.print(new core.DartMap.literal([
    ]));
    core.print(new core.DartMap.literal([
        ["a","b"]]));
};
export var testSymbol : () => any = () =>  {
    core.print(/* TODO (SymbolLiteralImpl): #fisk */);
    core.print(/* TODO (SymbolLiteralImpl): #_fisk */);
    core.print(/* TODO (SymbolLiteralImpl): #fisk.hest.ko */);
};
export var main : () => any = () =>  {
    testString();
    testInt();
    testBool();
    testDouble();
    testNull();
    testList();
    testMap();
    testSymbol();
};
export class properties {
}
