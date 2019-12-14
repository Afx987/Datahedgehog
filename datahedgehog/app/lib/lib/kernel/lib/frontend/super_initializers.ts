/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/frontend/super_initializers.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";

export var moveSuperInitializerLast : (node : lib3.Constructor) => void = (node : lib3.Constructor) : void =>  {
    let initializers : core.DartList<lib3.Initializer> = node.initializers;
    if (initializers.isEmpty) return;
    if (is(initializers.last, lib3.SuperInitializer)) return;
    let superIndex : number = -1;
    for(let i : number = initializers.length - 1; i >= 0; --i){
        let initializer : lib3.Initializer = initializers[i];
        if (is(initializer, lib3.SuperInitializer)) {
            superIndex = i;
            break;
        }
    }
    if (superIndex == -1) return;
    let superCall : lib3.SuperInitializer = initializers[superIndex];
    let arguments : lib3.Arguments = superCall.arguments;
    let argumentCount : number = arguments.positional.length + arguments.named.length;
    initializers.length += argumentCount;
    initializers.setRange(superIndex + argumentCount,initializers.length - 1,initializers,superIndex + 1);
    initializers[initializers.length - 1] = superCall;
    let storeIndex : number = superIndex;
    for(let i : number = 0; i < arguments.positional.length; ++i){
        let variable = new lib3.VariableDeclaration.forValue(arguments.positional[i]);
        arguments.positional[i] = ((_) : lib3.VariableGet =>  {
            {
                _.parent = arguments;
                return _;
            }
        })(new lib3.VariableGet(variable));
        initializers[storeIndex++] = ((_) : lib3.LocalInitializer =>  {
            {
                _.parent = node;
                return _;
            }
        })(new lib3.LocalInitializer(variable));
    }
    for(let i : number = 0; i < arguments.named.length; ++i){
        let argument : lib3.NamedExpression = arguments.named[i];
        let variable = new lib3.VariableDeclaration.forValue(argument.value);
        arguments.named[i].value = ((_) : lib3.VariableGet =>  {
            {
                _.parent = argument;
                return _;
            }
        })(new lib3.VariableGet(variable));
        initializers[storeIndex++] = ((_) : lib3.LocalInitializer =>  {
            {
                _.parent = node;
                return _;
            }
        })(new lib3.LocalInitializer(variable));
    }
};
export class properties {
}
