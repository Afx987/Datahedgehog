/** Library asset:datahedgehog_monitor/lib/lib/rendering/error.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "./object";

export namespace RenderErrorBox {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderErrorBox';
    export type Interface = Omit<RenderErrorBox, Constructors>;
}
@DartClass
export class RenderErrorBox extends lib3.RenderBox {
    constructor(message? : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderErrorBox(message? : string) {
        message = message || '';
        this.message = message;
        try {
            if (this.message != '') {
                let builder : any = ui.ParagraphBuilder(RenderErrorBox.paragraphStyle);
                builder.pushStyle(RenderErrorBox.textStyle);
                builder.addText(`${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}${properties._kLine}` + `${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}${properties._kLine}${this.message}`);
                this._paragraph = builder.build();
            }
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
    }
    message : string;

    _paragraph : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return properties._kMaxWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        return properties._kMaxHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        this.size = this.constraints.constrain(new bare.createInstance(any,null,properties._kMaxWidth,properties._kMaxHeight));
    }
    private static __$backgroundColor : any;
    static get backgroundColor() : any { 
        if (this.__$backgroundColor===undefined) {
            this.__$backgroundColor = new bare.createInstance(any,null,4035969024);
        }
        return this.__$backgroundColor;
    }
    static set backgroundColor(__$value : any)  { 
        this.__$backgroundColor = __$value;
    }

    private static __$textStyle : any;
    static get textStyle() : any { 
        if (this.__$textStyle===undefined) {
            this.__$textStyle = ui.TextStyle({
                color : new bare.createInstance(any,null,4294967142),fontFamily : 'monospace',fontSize : 14.0,fontWeight : FontWeight.bold});
        }
        return this.__$textStyle;
    }
    static set textStyle(__$value : any)  { 
        this.__$textStyle = __$value;
    }

    private static __$paragraphStyle : any;
    static get paragraphStyle() : any { 
        if (this.__$paragraphStyle===undefined) {
            this.__$paragraphStyle = ui.ParagraphStyle({
                height : 1.0});
        }
        return this.__$paragraphStyle;
    }
    static set paragraphStyle(__$value : any)  { 
        this.__$paragraphStyle = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib4.PaintingContext,offset : any) : any {
        try {
            context.canvas.drawRect(op(Op.BITAND,offset,this.size),((_) : any =>  {
                {
                    _.color = RenderErrorBox.backgroundColor;
                    return _;
                }
            })(Paint()));
            let width : double;
            if (this._paragraph != null) {
                if (is(this.parent, lib3.RenderBox)) {
                    let parentBox : lib3.RenderBox = this.parent;
                    width = parentBox.size.width;
                }else {
                    width = this.size.width;
                }
                this._paragraph.layout(ui.ParagraphConstraints({
                    width : width}));
                context.canvas.drawParagraph(this._paragraph,offset);
            }
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
    }
}

export class properties {
    private static __$_kMaxWidth : double;
    static get _kMaxWidth() : double { 
        if (this.__$_kMaxWidth===undefined) {
            this.__$_kMaxWidth = 100000.0;
        }
        return this.__$_kMaxWidth;
    }
    static set _kMaxWidth(__$value : double)  { 
        this.__$_kMaxWidth = __$value;
    }

    private static __$_kMaxHeight : double;
    static get _kMaxHeight() : double { 
        if (this.__$_kMaxHeight===undefined) {
            this.__$_kMaxHeight = 100000.0;
        }
        return this.__$_kMaxHeight;
    }
    static set _kMaxHeight(__$value : double)  { 
        this.__$_kMaxHeight = __$value;
    }

    private static __$_kLine : string;
    static get _kLine() : string { 
        if (this.__$_kLine===undefined) {
            this.__$_kLine = '\n\n────────────────────\n\n';
        }
        return this.__$_kLine;
    }
    static set _kLine(__$value : string)  { 
        this.__$_kLine = __$value;
    }

}
