/** Library asset:datahedgehog_monitor/lib/lib/painting/box_fit.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var applyBoxFit : (fit : BoxFit,inputSize : any,outputSize : any) => FittedSizes = (fit : BoxFit,inputSize : any,outputSize : any) : FittedSizes =>  {
    if (op(Op.LEQ,inputSize.height,0.0) || op(Op.LEQ,inputSize.width,0.0) || op(Op.LEQ,outputSize.height,0.0) || op(Op.LEQ,outputSize.width,0.0)) return new FittedSizes(Size.zero,Size.zero);
    let sourceSize : any, destinationSize : any;
    switch (fit) {
        case BoxFit.fill:
            sourceSize = inputSize;
            destinationSize = outputSize;
            break;
        case BoxFit.contain:
            sourceSize = inputSize;
            if (op(Op.GT,op(Op.DIVIDE,outputSize.width,outputSize.height),op(Op.DIVIDE,sourceSize.width,sourceSize.height))) destinationSize = Size(op(Op.DIVIDE,op(Op.TIMES,sourceSize.width,outputSize.height),sourceSize.height),outputSize.height);else destinationSize = Size(outputSize.width,op(Op.DIVIDE,op(Op.TIMES,sourceSize.height,outputSize.width),sourceSize.width));
            break;
        case BoxFit.cover:
            if (op(Op.GT,op(Op.DIVIDE,outputSize.width,outputSize.height),op(Op.DIVIDE,inputSize.width,inputSize.height))) {
                sourceSize = Size(inputSize.width,op(Op.DIVIDE,op(Op.TIMES,inputSize.width,outputSize.height),outputSize.width));
            }else {
                sourceSize = Size(op(Op.DIVIDE,op(Op.TIMES,inputSize.height,outputSize.width),outputSize.height),inputSize.height);
            }
            destinationSize = outputSize;
            break;
        case BoxFit.fitWidth:
            sourceSize = Size(inputSize.width,op(Op.DIVIDE,op(Op.TIMES,inputSize.width,outputSize.height),outputSize.width));
            destinationSize = Size(outputSize.width,op(Op.DIVIDE,op(Op.TIMES,sourceSize.height,outputSize.width),sourceSize.width));
            break;
        case BoxFit.fitHeight:
            sourceSize = Size(op(Op.DIVIDE,op(Op.TIMES,inputSize.height,outputSize.width),outputSize.height),inputSize.height);
            destinationSize = Size(op(Op.DIVIDE,op(Op.TIMES,sourceSize.width,outputSize.height),sourceSize.height),outputSize.height);
            break;
        case BoxFit.none:
            sourceSize = Size(math.min(inputSize.width,outputSize.width),math.min(inputSize.height,outputSize.height));
            destinationSize = sourceSize;
            break;
        case BoxFit.scaleDown:
            sourceSize = inputSize;
            destinationSize = inputSize;
            let aspectRatio : double = op(Op.DIVIDE,inputSize.width,inputSize.height);
            if (op(Op.GT,destinationSize.height,outputSize.height)) destinationSize = Size(op(Op.TIMES,outputSize.height,aspectRatio),outputSize.height);
            if (op(Op.GT,destinationSize.width,outputSize.width)) destinationSize = Size(outputSize.width,op(Op.DIVIDE,outputSize.width,aspectRatio));
            break;
    }
    return FittedSizes(sourceSize,destinationSize);
};
export enum BoxFit {
    fill,
    contain,
    cover,
    fitWidth,
    fitHeight,
    none,
    scaleDown
}

export namespace FittedSizes {
    export type Constructors = 'FittedSizes';
    export type Interface = Omit<FittedSizes, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class FittedSizes {
    constructor(source : any,destination : any) {
    }
    @defaultConstructor
    FittedSizes(source : any,destination : any) {
        this.source = source;
        this.destination = destination;
    }
    source : any;

    destination : any;

}

export class properties {
}
