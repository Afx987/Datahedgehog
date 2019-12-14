/** Library asset:datahedgehog_monitor/lib/lib/painting/paint_utilities.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var paintZigZag : (canvas : any,paint : any,start : any,end : any,zigs : number,width : double) => void = (canvas : any,paint : any,start : any,end : any,zigs : number,width : double) : void =>  {
    /* TODO (AssertStatementImpl) : assert (zigs.isFinite); */;
    /* TODO (AssertStatementImpl) : assert (zigs > 0); */;
    canvas.save();
    canvas.translate(start.dx,start.dy);
    end = op(Op.MINUS,end,start);
    canvas.rotate(math.atan2(end.dy,end.dx));
    let length : double = end.distance;
    let spacing : double = length / (zigs * 2.0);
    let path : any = ((_) : any =>  {
        {
            moveTo(0.0,0.0);
            return _;
        }
    })(Path());
    for(let index : number = 0; index < zigs; index += 1){
        let x : double = (index * 2.0 + 1.0) * spacing;
        let y : double = width * ((index % 2.0) * 2.0 - 1.0);
        path.lineTo(x,y);
    }
    path.lineTo(length,0.0);
    canvas.drawPath(path,paint);
    canvas.restore();
};
export class properties {
}
