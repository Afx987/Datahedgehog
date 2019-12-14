/** Library asset:datahedgehog_monitor/lib/lib/rendering/table_border.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";

export namespace TableBorder {
    export type Constructors = 'TableBorder';
    export type Interface = Omit<TableBorder, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TableBorder {
    constructor(_namedArguments? : {top? : lib3.BorderSide,right? : lib3.BorderSide,bottom? : lib3.BorderSide,left? : lib3.BorderSide,horizontalInside? : lib3.BorderSide,verticalInside? : lib3.BorderSide}) {
    }
    @defaultConstructor
    TableBorder(_namedArguments? : {top? : lib3.BorderSide,right? : lib3.BorderSide,bottom? : lib3.BorderSide,left? : lib3.BorderSide,horizontalInside? : lib3.BorderSide,verticalInside? : lib3.BorderSide}) {
        let {top,right,bottom,left,horizontalInside,verticalInside} = Object.assign({
            "top" : lib3.BorderSide.none,
            "right" : lib3.BorderSide.none,
            "bottom" : lib3.BorderSide.none,
            "left" : lib3.BorderSide.none,
            "horizontalInside" : lib3.BorderSide.none,
            "verticalInside" : lib3.BorderSide.none}, _namedArguments );
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.horizontalInside = horizontalInside;
        this.verticalInside = verticalInside;
    }
    @namedFactory
    static $all(_namedArguments? : {color? : any,width? : double,style? : lib3.BorderStyle}) : TableBorder {
        let {color,width,style} = Object.assign({
            "color" : new bare.createInstance(any,null,4278190080),
            "width" : 1.0,
            "style" : lib3.BorderStyle.solid}, _namedArguments );
        let side : lib3.BorderSide = lib3.BorderSide({
            color : color,width : width,style : style});
        return TableBorder({
            top : side,right : side,bottom : side,left : side,horizontalInside : side,verticalInside : side});
    }
    static all : new(_namedArguments? : {color? : any,width? : double,style? : lib3.BorderStyle}) => TableBorder;

    @namedFactory
    static $symmetric(_namedArguments? : {inside? : lib3.BorderSide,outside? : lib3.BorderSide}) : TableBorder {
        let {inside,outside} = Object.assign({
            "inside" : lib3.BorderSide.none,
            "outside" : lib3.BorderSide.none}, _namedArguments );
        return TableBorder({
            top : outside,right : outside,bottom : outside,left : outside,horizontalInside : inside,verticalInside : inside});
    }
    static symmetric : new(_namedArguments? : {inside? : lib3.BorderSide,outside? : lib3.BorderSide}) => TableBorder;

    top : lib3.BorderSide;

    right : lib3.BorderSide;

    bottom : lib3.BorderSide;

    left : lib3.BorderSide;

    horizontalInside : lib3.BorderSide;

    verticalInside : lib3.BorderSide;

    get dimensions() : lib4.EdgeInsets {
        return lib4.EdgeInsets.fromLTRB(this.left.width,this.top.width,this.right.width,this.bottom.width);
    }
    get isUniform() : boolean {
        /* TODO (AssertStatementImpl) : assert (top != null); */;
        /* TODO (AssertStatementImpl) : assert (right != null); */;
        /* TODO (AssertStatementImpl) : assert (bottom != null); */;
        /* TODO (AssertStatementImpl) : assert (left != null); */;
        /* TODO (AssertStatementImpl) : assert (horizontalInside != null); */;
        /* TODO (AssertStatementImpl) : assert (verticalInside != null); */;
        let topColor : any = this.top.color;
        if (this.right.color != topColor || this.bottom.color != topColor || this.left.color != topColor || this.horizontalInside.color != topColor || this.verticalInside.color != topColor) return false;
        let topWidth : double = this.top.width;
        if (this.right.width != topWidth || this.bottom.width != topWidth || this.left.width != topWidth || this.horizontalInside.width != topWidth || this.verticalInside.width != topWidth) return false;
        let topStyle : lib3.BorderStyle = this.top.style;
        if (this.right.style != topStyle || this.bottom.style != topStyle || this.left.style != topStyle || this.horizontalInside.style != topStyle || this.verticalInside.style != topStyle) return false;
        return true;
    }
    scale(t : double) : TableBorder {
        return TableBorder({
            top : this.top.scale(t),right : this.right.scale(t),bottom : this.bottom.scale(t),left : this.left.scale(t),horizontalInside : this.horizontalInside.scale(t),verticalInside : this.verticalInside.scale(t)});
    }
    static lerp(a : TableBorder,b : TableBorder,t : double) : TableBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        return TableBorder({
            top : lib3.BorderSide.lerp(a.top,b.top,t),right : lib3.BorderSide.lerp(a.right,b.right,t),bottom : lib3.BorderSide.lerp(a.bottom,b.bottom,t),left : lib3.BorderSide.lerp(a.left,b.left,t),horizontalInside : lib3.BorderSide.lerp(a.horizontalInside,b.horizontalInside,t),verticalInside : lib3.BorderSide.lerp(a.verticalInside,b.verticalInside,t)});
    }
    paint(canvas : any,rect : any,_namedArguments? : {rows? : core.DartIterable<double>,columns? : core.DartIterable<double>}) : any {
        let {rows,columns} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (top != null); */;
        /* TODO (AssertStatementImpl) : assert (right != null); */;
        /* TODO (AssertStatementImpl) : assert (bottom != null); */;
        /* TODO (AssertStatementImpl) : assert (left != null); */;
        /* TODO (AssertStatementImpl) : assert (horizontalInside != null); */;
        /* TODO (AssertStatementImpl) : assert (verticalInside != null); */;
        /* TODO (AssertStatementImpl) : assert (canvas != null); */;
        /* TODO (AssertStatementImpl) : assert (rect != null); */;
        /* TODO (AssertStatementImpl) : assert (rows != null); */;
        /* TODO (AssertStatementImpl) : assert (rows.isEmpty || (rows.first >= 0.0 && rows.last <= rect.height)); */;
        /* TODO (AssertStatementImpl) : assert (columns != null); */;
        /* TODO (AssertStatementImpl) : assert (columns.isEmpty || (columns.first >= 0.0 && columns.last <= rect.width)); */;
        if (columns.isNotEmpty || rows.isNotEmpty) {
            let paint : any = Paint();
            let path : any = Path();
            if (columns.isNotEmpty) {
                switch (this.verticalInside.style) {
                    case lib3.BorderStyle.solid:
                        ((_) : any =>  {
                            {
                                _.color = this.verticalInside.color;
                                _.strokeWidth = this.verticalInside.width;
                                _.style = PaintingStyle.stroke;
                                return _;
                            }
                        })(paint);
                        path.reset();
                        for(let x of columns) {
                            path.moveTo(op(Op.PLUS,rect.left,x),rect.top);
                            path.lineTo(op(Op.PLUS,rect.left,x),rect.bottom);
                        }
                        canvas.drawPath(path,paint);
                        break;
                    case lib3.BorderStyle.none:
                        break;
                }
            }
            if (rows.isNotEmpty) {
                switch (this.horizontalInside.style) {
                    case lib3.BorderStyle.solid:
                        ((_) : any =>  {
                            {
                                _.color = this.horizontalInside.color;
                                _.strokeWidth = this.horizontalInside.width;
                                _.style = PaintingStyle.stroke;
                                return _;
                            }
                        })(paint);
                        path.reset();
                        for(let y of rows) {
                            path.moveTo(rect.left,op(Op.PLUS,rect.top,y));
                            path.lineTo(rect.right,op(Op.PLUS,rect.top,y));
                        }
                        canvas.drawPath(path,paint);
                        break;
                    case lib3.BorderStyle.none:
                        break;
                }
            }
        }
        lib3.paintBorder(canvas,rect,{
            top : this.top,right : this.right,bottom : this.bottom,left : this.left});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : TableBorder = other;
        return op(Op.EQUALS,this.top,typedOther.top) && op(Op.EQUALS,this.right,typedOther.right) && op(Op.EQUALS,this.bottom,typedOther.bottom) && op(Op.EQUALS,this.left,typedOther.left) && op(Op.EQUALS,this.horizontalInside,typedOther.horizontalInside) && op(Op.EQUALS,this.verticalInside,typedOther.verticalInside);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.top,this.right,this.bottom,this.left,this.horizontalInside,this.verticalInside);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `TableBorder(${this.top}, ${this.right}, ${this.bottom}, ${this.left}, ${this.horizontalInside}, ${this.verticalInside})`;
    }
}

export class properties {
}
