/** Library asset:datahedgehog_monitor/lib/lib/painting/basic_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var flipAxis : (direction : Axis) => Axis = (direction : Axis) : Axis =>  {
    /* TODO (AssertStatementImpl) : assert (direction != null); */;
    switch (direction) {
        case Axis.horizontal:
            return Axis.vertical;
        case Axis.vertical:
            return Axis.horizontal;
    }
    return null;
};
export var axisDirectionToAxis : (axisDirection : AxisDirection) => Axis = (axisDirection : AxisDirection) : Axis =>  {
    /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
    switch (axisDirection) {
        case AxisDirection.up:
        case AxisDirection.down:
            return Axis.vertical;
        case AxisDirection.left:
        case AxisDirection.right:
            return Axis.horizontal;
    }
    return null;
};
export var textDirectionToAxisDirection : (textDirection : any) => AxisDirection = (textDirection : any) : AxisDirection =>  {
    /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
    switch (textDirection) {
        case TextDirection.rtl:
            return AxisDirection.left;
        case TextDirection.ltr:
            return AxisDirection.right;
    }
    return null;
};
export var flipAxisDirection : (axisDirection : AxisDirection) => AxisDirection = (axisDirection : AxisDirection) : AxisDirection =>  {
    /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
    switch (axisDirection) {
        case AxisDirection.up:
            return AxisDirection.down;
        case AxisDirection.right:
            return AxisDirection.left;
        case AxisDirection.down:
            return AxisDirection.up;
        case AxisDirection.left:
            return AxisDirection.right;
    }
    return null;
};
export var axisDirectionIsReversed : (axisDirection : AxisDirection) => boolean = (axisDirection : AxisDirection) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
    switch (axisDirection) {
        case AxisDirection.up:
        case AxisDirection.left:
            return true;
        case AxisDirection.down:
        case AxisDirection.right:
            return false;
    }
    return null;
};
export enum RenderComparison {
    identical,
    metadata,
    paint,
    layout
}

export enum Axis {
    horizontal,
    vertical
}

export enum VerticalDirection {
    up,
    down
}

export enum AxisDirection {
    up,
    right,
    down,
    left
}

export class properties {
}
