/** Library asset:datahedgehog_monitor/lib/lib/widgets/grid_paper.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "./basic";

export namespace _GridPaperPainter {
    export type Constructors = lib3.CustomPainter.Constructors | '_GridPaperPainter';
    export type Interface = Omit<_GridPaperPainter, Constructors>;
}
@DartClass
export class _GridPaperPainter extends lib3.CustomPainter {
    constructor(_namedArguments? : {color? : any,interval? : double,divisions? : number,subdivisions? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _GridPaperPainter(_namedArguments? : {color? : any,interval? : double,divisions? : number,subdivisions? : number}) {
        let {color,interval,divisions,subdivisions} = Object.assign({
        }, _namedArguments );
        this.color = color;
        this.interval = interval;
        this.divisions = divisions;
        this.subdivisions = subdivisions;
    }
    color : any;

    interval : double;

    divisions : number;

    subdivisions : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let linePaint : any = ((_) : any =>  {
            {
                _.color = this.color;
                return _;
            }
        })(Paint());
        let allDivisions : double = new core.DartInt((this.divisions * this.subdivisions)).toDouble();
        for(let x : double = 0.0; x <= size.width; x += this.interval / allDivisions){
            linePaint.strokeWidth = (x % this.interval == 0.0) ? 1.0 : (x % (this.interval / this.subdivisions) == 0.0) ? 0.5 : 0.25;
            canvas.drawLine(Offset(x,0.0),Offset(x,size.height),linePaint);
        }
        for(let y : double = 0.0; y <= size.height; y += this.interval / allDivisions){
            linePaint.strokeWidth = (y % this.interval == 0.0) ? 1.0 : (y % (this.interval / this.subdivisions) == 0.0) ? 0.5 : 0.25;
            canvas.drawLine(Offset(0.0,y),Offset(size.width,y),linePaint);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _GridPaperPainter) : boolean {
        return oldPainter.color != this.color || oldPainter.interval != this.interval || oldPainter.divisions != this.divisions || oldPainter.subdivisions != this.subdivisions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(position : any) : boolean {
        return false;
    }
}

export namespace GridPaper {
    export type Constructors = lib4.StatelessWidget.Constructors | 'GridPaper';
    export type Interface = Omit<GridPaper, Constructors>;
}
@DartClass
export class GridPaper extends lib4.StatelessWidget {
    constructor(_namedArguments? : {key? : lib5.Key,color? : any,interval? : double,divisions? : number,subdivisions? : number,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GridPaper(_namedArguments? : {key? : lib5.Key,color? : any,interval? : double,divisions? : number,subdivisions? : number,child? : lib4.Widget}) {
        let {key,color,interval,divisions,subdivisions,child} = Object.assign({
            "color" : new bare.createInstance(any,null,2143545587),
            "interval" : 100.0,
            "divisions" : 2,
            "subdivisions" : 5}, _namedArguments );
        this.assert = assert;
        this.color = color;
        this.interval = interval;
        this.divisions = divisions;
        this.subdivisions = subdivisions;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    color : any;

    interval : double;

    divisions : number;

    subdivisions : number;

    child : lib4.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        return lib6.CustomPaint({
            foregroundPainter : _GridPaperPainter({
                color : this.color,interval : this.interval,divisions : this.divisions,subdivisions : this.subdivisions}),child : this.child});
    }
}

export class properties {
}
