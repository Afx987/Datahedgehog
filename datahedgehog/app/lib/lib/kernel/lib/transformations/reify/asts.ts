/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/reify/asts.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var getEnclosingClass : (node : any) => any = (node : any) : any =>  {
    let original : any = node;
    while (node != null && isNot(node, any)){
        node = node.parent;
    }
    if (op(Op.EQUALS,node,null)) {
        throw `internal error: enclosing class not found for ${original}`;
    }
    return node;
};
export var getEnclosingLibrary : (node : any) => any = (node : any) : any =>  {
    let original : any = node;
    while (node != null && isNot(node, any)){
        node = node.parent;
    }
    if (op(Op.EQUALS,node,null)) {
        throw `internal error: enclosing library not found for ${original}`;
    }
    return node;
};
export var getEnclosingMember : (node : any) => any = (node : any) : any =>  {
    let original : any = node;
    while (node != null && isNot(node, any)){
        node = node.parent;
    }
    if (op(Op.EQUALS,node,null)) {
        throw `internal error: enclosing member not found for ${original}`;
    }
    return node;
};
export var typeVariables : (type : any) => core.DartList<any> = (type : any) : core.DartList<any> =>  {
    let parameters : core.DartList<any> = new core.DartList.literal<any>();
    var collect : (type : any) => any = (type : any) =>  {
        if (is(type, any)) {
            type.typeArguments.map(collect);
        }else if (is(type, any)) {
            parameters.add(type.parameter);
        }
    };
    collect(type);
    return parameters;
};
export class properties {
}
