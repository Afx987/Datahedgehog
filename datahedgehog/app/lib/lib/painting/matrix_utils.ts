/** Library asset:datahedgehog_monitor/lib/lib/painting/matrix_utils.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "./basic_types";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var debugDescribeTransform : (transform : lib3.Matrix4) => core.DartList<string> = (transform : lib3.Matrix4) : core.DartList<string> =>  {
    if (op(Op.EQUALS,transform,null)) return new core.DartList.literal<string>('null');
    let matrix : core.DartList<string> = new core.DartString(transform.toString()).split('\n').toList();
    matrix.removeLast();
    return matrix;
};
export namespace MatrixUtils {
    export type Constructors = '_';
    export type Interface = Omit<MatrixUtils, Constructors>;
}
@DartClass
export class MatrixUtils {
    @namedConstructor
    _() {
    }
    static _ : new() => MatrixUtils;

    static getAsTranslation(transform : lib3.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (transform != null); */;
        let values : typed_data.Float64List = transform.storage;
        if (op(Op.INDEX,values,0) == 1.0 && op(Op.INDEX,values,1) == 0.0 && op(Op.INDEX,values,2) == 0.0 && op(Op.INDEX,values,3) == 0.0 && op(Op.INDEX,values,4) == 0.0 && op(Op.INDEX,values,5) == 1.0 && op(Op.INDEX,values,6) == 0.0 && op(Op.INDEX,values,7) == 0.0 && op(Op.INDEX,values,8) == 0.0 && op(Op.INDEX,values,9) == 0.0 && op(Op.INDEX,values,10) == 1.0 && op(Op.INDEX,values,11) == 0.0 && op(Op.INDEX,values,14) == 0.0 && op(Op.INDEX,values,15) == 1.0) {
            return Offset(op(Op.INDEX,values,12),op(Op.INDEX,values,13));
        }
        return null;
    }
    static getAsScale(transform : lib3.Matrix4) : double {
        /* TODO (AssertStatementImpl) : assert (transform != null); */;
        let values : typed_data.Float64List = transform.storage;
        if (op(Op.INDEX,values,1) == 0.0 && op(Op.INDEX,values,2) == 0.0 && op(Op.INDEX,values,3) == 0.0 && op(Op.INDEX,values,4) == 0.0 && op(Op.INDEX,values,6) == 0.0 && op(Op.INDEX,values,7) == 0.0 && op(Op.INDEX,values,8) == 0.0 && op(Op.INDEX,values,9) == 0.0 && op(Op.INDEX,values,10) == 1.0 && op(Op.INDEX,values,11) == 0.0 && op(Op.INDEX,values,12) == 0.0 && op(Op.INDEX,values,13) == 0.0 && op(Op.INDEX,values,14) == 0.0 && op(Op.INDEX,values,15) == 1.0 && op(Op.INDEX,values,0) == op(Op.INDEX,values,5)) {
            return op(Op.INDEX,values,0);
        }
        return null;
    }
    static matrixEquals(a : lib3.Matrix4,b : lib3.Matrix4) : boolean {
        if (core.identical(a,b)) return true;
        /* TODO (AssertStatementImpl) : assert (a != null || b != null); */;
        if (op(Op.EQUALS,a,null)) return MatrixUtils.isIdentity(b);
        if (op(Op.EQUALS,b,null)) return MatrixUtils.isIdentity(a);
        /* TODO (AssertStatementImpl) : assert (a != null && b != null); */;
        return op(Op.INDEX,a.storage,0) == op(Op.INDEX,b.storage,0) && op(Op.INDEX,a.storage,1) == op(Op.INDEX,b.storage,1) && op(Op.INDEX,a.storage,2) == op(Op.INDEX,b.storage,2) && op(Op.INDEX,a.storage,3) == op(Op.INDEX,b.storage,3) && op(Op.INDEX,a.storage,4) == op(Op.INDEX,b.storage,4) && op(Op.INDEX,a.storage,5) == op(Op.INDEX,b.storage,5) && op(Op.INDEX,a.storage,6) == op(Op.INDEX,b.storage,6) && op(Op.INDEX,a.storage,7) == op(Op.INDEX,b.storage,7) && op(Op.INDEX,a.storage,8) == op(Op.INDEX,b.storage,8) && op(Op.INDEX,a.storage,9) == op(Op.INDEX,b.storage,9) && op(Op.INDEX,a.storage,10) == op(Op.INDEX,b.storage,10) && op(Op.INDEX,a.storage,11) == op(Op.INDEX,b.storage,11) && op(Op.INDEX,a.storage,12) == op(Op.INDEX,b.storage,12) && op(Op.INDEX,a.storage,13) == op(Op.INDEX,b.storage,13) && op(Op.INDEX,a.storage,14) == op(Op.INDEX,b.storage,14) && op(Op.INDEX,a.storage,15) == op(Op.INDEX,b.storage,15);
    }
    static isIdentity(a : lib3.Matrix4) : boolean {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        return op(Op.INDEX,a.storage,0) == 1.0 && op(Op.INDEX,a.storage,1) == 0.0 && op(Op.INDEX,a.storage,2) == 0.0 && op(Op.INDEX,a.storage,3) == 0.0 && op(Op.INDEX,a.storage,4) == 0.0 && op(Op.INDEX,a.storage,5) == 1.0 && op(Op.INDEX,a.storage,6) == 0.0 && op(Op.INDEX,a.storage,7) == 0.0 && op(Op.INDEX,a.storage,8) == 0.0 && op(Op.INDEX,a.storage,9) == 0.0 && op(Op.INDEX,a.storage,10) == 1.0 && op(Op.INDEX,a.storage,11) == 0.0 && op(Op.INDEX,a.storage,12) == 0.0 && op(Op.INDEX,a.storage,13) == 0.0 && op(Op.INDEX,a.storage,14) == 0.0 && op(Op.INDEX,a.storage,15) == 1.0;
    }
    static transformPoint(transform : lib3.Matrix4,point : any) : any {
        let position3 : lib3.Vector3 = lib3.Vector3(point.dx,point.dy,0.0);
        let transformed3 : lib3.Vector3 = transform.perspectiveTransform(position3);
        return Offset(transformed3.x,transformed3.y);
    }
    static transformRect(transform : lib3.Matrix4,rect : any) : any {
        let point1 : any = MatrixUtils.transformPoint(transform,rect.topLeft);
        let point2 : any = MatrixUtils.transformPoint(transform,rect.topRight);
        let point3 : any = MatrixUtils.transformPoint(transform,rect.bottomLeft);
        let point4 : any = MatrixUtils.transformPoint(transform,rect.bottomRight);
        return Rect.fromLTRB(MatrixUtils._min4(point1.dx,point2.dx,point3.dx,point4.dx),MatrixUtils._min4(point1.dy,point2.dy,point3.dy,point4.dy),MatrixUtils._max4(point1.dx,point2.dx,point3.dx,point4.dx),MatrixUtils._max4(point1.dy,point2.dy,point3.dy,point4.dy));
    }
    static _min4(a : double,b : double,c : double,d : double) : double {
        return math.min(a,math.min(b,math.min(c,d)));
    }
    static _max4(a : double,b : double,c : double,d : double) : double {
        return math.max(a,math.max(b,math.max(c,d)));
    }
    static inverseTransformRect(transform : lib3.Matrix4,rect : any) : any {
        /* TODO (AssertStatementImpl) : assert (rect != null); */;
        /* TODO (AssertStatementImpl) : assert (transform.determinant != 0.0); */;
        if (MatrixUtils.isIdentity(transform)) return rect;
        transform = ((_) : any =>  {
            {
                invert();
                return _;
            }
        })(lib3.Matrix4.copy(transform));
        return MatrixUtils.transformRect(transform,rect);
    }
    static createCylindricalProjectionTransform(_namedArguments? : {radius? : double,angle? : double,perspective? : double,orientation? : lib6.Axis}) : lib3.Matrix4 {
        let {radius,angle,perspective,orientation} = Object.assign({
            "perspective" : 0.001,
            "orientation" : lib6.Axis.vertical}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (radius != null); */;
        /* TODO (AssertStatementImpl) : assert (angle != null); */;
        /* TODO (AssertStatementImpl) : assert (perspective >= 0 && perspective <= 1.0); */;
        /* TODO (AssertStatementImpl) : assert (orientation != null); */;
        let result : lib3.Matrix4 = ((_) : any =>  {
            {
                setEntry(3,2,-perspective);
                setEntry(2,3,-radius);
                setEntry(3,3,perspective * radius + 1.0);
                return _;
            }
        })(lib3.Matrix4.identity());
        result *= op(Op.TIMES,(op(Op.EQUALS,orientation,lib6.Axis.horizontal) ? lib3.Matrix4.rotationY(angle) : lib3.Matrix4.rotationX(angle)),lib3.Matrix4.translationValues(0.0,0.0,radius));
        return result;
    }
}

export namespace TransformProperty {
    export type Constructors = lib7.DiagnosticsProperty.Constructors | 'TransformProperty';
    export type Interface = Omit<TransformProperty, Constructors>;
}
@DartClass
export class TransformProperty extends lib7.DiagnosticsProperty<lib3.Matrix4> {
    constructor(name : string,value : lib3.Matrix4,_namedArguments? : {showName? : boolean,defaultValue? : core.DartObject,level? : lib7.DiagnosticLevel}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TransformProperty(name : string,value : lib3.Matrix4,_namedArguments? : {showName? : boolean,defaultValue? : core.DartObject,level? : lib7.DiagnosticLevel}) {
        let {showName,defaultValue,level} = Object.assign({
            "showName" : true,
            "defaultValue" : lib7.properties.kNoDefaultValue,
            "level" : lib7.DiagnosticLevel.info}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

    name;
    value;
    showName;

    showName;
    defaultValue;

    defaultValue;
    level;

    level;
    ;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    valueToString(_namedArguments? : {parentConfiguration? : lib7.TextTreeConfiguration}) : string {
        let {parentConfiguration} = Object.assign({
        }, _namedArguments );
        if (parentConfiguration != null && !parentConfiguration.lineBreakProperties) {
            let rows : core.DartList<lib3.Vector4> = new core.DartList.literal<lib3.Vector4>(this.value.getRow(0),this.value.getRow(1),this.value.getRow(2),this.value.getRow(3));
            return `[${rows.join("; ")}]`;
        }
        return debugDescribeTransform(this.value).join('\n');
    }
}

export class properties {
}
