/** Library asset:datahedgehog_monitor/lib/lib/painting/notched_shapes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./borders";

export namespace NotchedShape {
    export type Constructors = 'NotchedShape';
    export type Interface = Omit<NotchedShape, Constructors>;
}
@DartClass
export class NotchedShape {
    constructor() {
    }
    @defaultConstructor
    NotchedShape() {
    }
    @Abstract
    getOuterPath(host : any,guest : any) : any{ throw 'abstract'}
}

export namespace CircularNotchedRectangle {
    export type Constructors = NotchedShape.Constructors | 'CircularNotchedRectangle';
    export type Interface = Omit<CircularNotchedRectangle, Constructors>;
}
@DartClass
export class CircularNotchedRectangle extends NotchedShape {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CircularNotchedRectangle() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(host : any,guest : any) : any {
        if (op(Op.EQUALS,guest,null) || !host.overlaps(guest)) return ((_) : any =>  {
            {
                addRect(host);
                return _;
            }
        })(Path());
        let notchRadius : double = op(Op.DIVIDE,guest.width,2.0);
        let s1 : double = 15.0;
        let s2 : double = 1.0;
        let r : double = notchRadius;
        let a : double = -1.0 * r - s2;
        let b : double = op(Op.MINUS,host.top,guest.center.dy);
        let n2 : double = math.sqrt(b * b * r * r * (a * a + b * b - r * r));
        let p2xA : double = ((a * r * r) - n2) / (a * a + b * b);
        let p2xB : double = ((a * r * r) + n2) / (a * a + b * b);
        let p2yA : double = math.sqrt(r * r - p2xA * p2xA);
        let p2yB : double = math.sqrt(r * r - p2xB * p2xB);
        let p : core.DartList<any> = core.DartList(6);
        p[0] = Offset(a - s1,b);
        p[1] = Offset(a,b);
        let cmp : double = b < 0 ? -1.0 : 1.0;
        p[2] = cmp * p2yA > cmp * p2yB ? Offset(p2xA,p2yA) : Offset(p2xB,p2yB);
        p[3] = Offset(-1.0 * p[2].dx,p[2].dy);
        p[4] = Offset(-1.0 * p[1].dx,p[1].dy);
        p[5] = Offset(-1.0 * p[0].dx,p[0].dy);
        for(let i : number = 0; i < p.length; i += 1)p[i] += guest.center;
        return ((_) : any =>  {
            {
                moveTo(host.left,host.top);
                lineTo(p[0].dx,p[0].dy);
                quadraticBezierTo(p[1].dx,p[1].dy,p[2].dx,p[2].dy);
                arcToPoint(p[3],{
                    radius : Radius.circular(notchRadius),clockwise : false});
                quadraticBezierTo(p[4].dx,p[4].dy,p[5].dx,p[5].dy);
                lineTo(host.right,host.top);
                lineTo(host.right,host.bottom);
                lineTo(host.left,host.bottom);
                close();
                return _;
            }
        })(Path());
    }
}

export namespace AutomaticNotchedShape {
    export type Constructors = NotchedShape.Constructors | 'AutomaticNotchedShape';
    export type Interface = Omit<AutomaticNotchedShape, Constructors>;
}
@DartClass
export class AutomaticNotchedShape extends NotchedShape {
    constructor(host : lib4.ShapeBorder,guest? : lib4.ShapeBorder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AutomaticNotchedShape(host : lib4.ShapeBorder,guest? : lib4.ShapeBorder) {
        this.host = host;
        this.guest = guest;
    }
    host : lib4.ShapeBorder;

    guest : lib4.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(hostRect : any,guestRect : any) : any {
        let hostPath : any = this.host.getOuterPath(hostRect);
        if (this.guest != null && guestRect != null) {
            let guestPath : any = this.guest.getOuterPath(guestRect);
            return Path.combine(PathOperation.difference,hostPath,guestPath);
        }
        return hostPath;
    }
}

export class properties {
}
