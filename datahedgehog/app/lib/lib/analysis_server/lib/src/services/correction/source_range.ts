/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/source_range.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var rangeElementName : (element : any) => any = (element : any) : any =>  {
    return new bare.createInstance(any,null,element.nameOffset,element.nameLength);
};
export var rangeEndEnd : (a : any,b : any) => any = (a : any,b : any) : any =>  {
    let offset : number = a.end;
    let length = op(Op.MINUS,b.end,offset);
    return new bare.createInstance(any,null,offset,length);
};
export var rangeEndLength : (a : any,length : number) => any = (a : any,length : number) : any =>  {
    let offset : number = is(a, "number") ? a : a.end;
    return new bare.createInstance(any,null,offset,length);
};
export var rangeEndStart : (a : any,b : any) => any = (a : any,b : any) : any =>  {
    let offset : number = a.end;
    let length = op(Op.MINUS,(is(b, "number") ? b : b.offset),offset);
    return new bare.createInstance(any,null,offset,length);
};
export var rangeError : (error : any) => any = (error : any) : any =>  {
    return new bare.createInstance(any,null,error.offset,error.length);
};
export var rangeFromBase : (r : any,base : number) => any = (r : any,base : number) : any =>  {
    let start : number = op(Op.MINUS,r.offset,base);
    let length : number = r.length;
    return rangeStartLength(start,length);
};
export var rangeNode : (node : any) => any = (node : any) : any =>  {
    return new bare.createInstance(any,null,node.offset,node.length);
};
export var rangeNodes : (nodes : core.DartList<any>) => any = (nodes : core.DartList<any>) : any =>  {
    if (nodes.isEmpty) {
        return new bare.createInstance(any,null,0,0);
    }
    let first : any = nodes.first;
    let last : any = nodes.last;
    return rangeStartEnd(first,last);
};
export var rangeOffsetEnd : (o : any) => any = (o : any) : any =>  {
    let offset : number = o.offset;
    let length : number = op(Op.MINUS,o.end,offset);
    return new bare.createInstance(any,null,offset,length);
};
export var rangeStartEnd : (a : any,b : any) => any = (a : any,b : any) : any =>  {
    let offset : number = is(a, "number") ? a : a.offset;
    let end : number = is(b, "number") ? b : b.end;
    let length = end - offset;
    return new bare.createInstance(any,null,offset,length);
};
export var rangeStartLength : (a : any,length : number) => any = (a : any,length : number) : any =>  {
    let offset : number = is(a, "number") ? a : a.offset;
    return new bare.createInstance(any,null,offset,length);
};
export var rangeStartStart : (a : any,b : any) => any = (a : any,b : any) : any =>  {
    let offset : number = is(a, "number") ? a : a.offset;
    let length = op(Op.MINUS,(is(b, "number") ? b : b.offset),offset);
    return new bare.createInstance(any,null,offset,length);
};
export var rangeToken : (token : any) => any = (token : any) : any =>  {
    return new bare.createInstance(any,null,token.offset,token.length);
};
export class properties {
}
