/** Library asset:datahedgehog_monitor/lib/lib/widgets/container.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib7 from "./image";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib12 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/image";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib15 from "./basic";

export namespace DecoratedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'DecoratedBox';
    export type Interface = Omit<DecoratedBox, Constructors>;
}
@DartClass
export class DecoratedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,decoration? : lib5.Decoration,position? : lib6.DecorationPosition,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DecoratedBox(_namedArguments? : {key? : lib4.Key,decoration? : lib5.Decoration,position? : lib6.DecorationPosition,child? : lib3.Widget}) {
        let {key,decoration,position,child} = Object.assign({
            "position" : lib6.DecorationPosition.background}, _namedArguments );
        this.assert = assert;
        this.decoration = decoration;
        this.position = position;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    decoration : lib5.Decoration;

    position : lib6.DecorationPosition;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderDecoratedBox {
        return lib6.RenderDecoratedBox({
            decoration : this.decoration,position : this.position,configuration : lib7.createLocalImageConfiguration(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderDecoratedBox) : any {
        ((_) : lib6.RenderDecoratedBox =>  {
            {
                _.decoration = this.decoration;
                _.configuration = lib7.createLocalImageConfiguration(context);
                _.position = this.position;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let label : string;
        if (this.position != null) {
            switch (this.position) {
                case lib6.DecorationPosition.background:
                    label = 'bg';
                    break;
                case lib6.DecorationPosition.foreground:
                    label = 'fg';
                    break;
            }
        }else {
            label = 'decoration';
        }
        properties.add(lib8.EnumProperty('position',this.position,{
            level : this.position != null ? lib8.DiagnosticLevel.hidden : lib8.DiagnosticLevel.info}));
        properties.add(lib8.DiagnosticsProperty(label,this.decoration,{
            ifNull : 'no decoration',showName : this.decoration != null}));
    }
}

export namespace Container {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Container' | 'debugAssertIsValid' | 'debugAssertIsValid';
    export type Interface = Omit<Container, Constructors>;
}
@DartClass
export class Container extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib9.AlignmentGeometry,padding? : lib10.EdgeInsetsGeometry,color? : any,decoration? : lib5.Decoration,foregroundDecoration? : lib5.Decoration,width? : double,height? : double,constraints? : lib11.BoxConstraints,margin? : lib10.EdgeInsetsGeometry,transform? : lib12.Matrix4,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Container(_namedArguments? : {key? : lib4.Key,alignment? : lib9.AlignmentGeometry,padding? : lib10.EdgeInsetsGeometry,color? : any,decoration? : lib5.Decoration,foregroundDecoration? : lib5.Decoration,width? : double,height? : double,constraints? : lib11.BoxConstraints,margin? : lib10.EdgeInsetsGeometry,transform? : lib12.Matrix4,child? : lib3.Widget}) {
        let {key,alignment,padding,color,decoration,foregroundDecoration,width,height,constraints,margin,transform,child} = Object.assign({
        }, _namedArguments );
        this.decoration = (this.decoration || (lib13.properties.color != null ? lib14.BoxDecoration({
            color : lib13.properties.color}) : null));
        this.constraints = (lib13.properties.width != null || lib13.properties.height != null) ? (((_878_)=>(!!_878_)?_878_.tighten({
            width : lib13.properties.width,height : lib13.properties.height}):null)(this.constraints) || lib11.BoxConstraints.tightFor({
            width : lib13.properties.width,height : lib13.properties.height})) : this.constraints;
        this.assert = assert;
        this.alignment = alignment;
        this.padding = padding;
        this.foregroundDecoration = foregroundDecoration;
        this.margin = margin;
        this.transform = transform;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    debugAssertIsValid() {
        this.decoration = (this.decoration || (lib13.properties.color != null ? lib14.BoxDecoration({
            color : lib13.properties.color}) : null));
        this.constraints = (lib13.properties.width != null || lib13.properties.height != null) ? (((_878_)=>(!!_878_)?_878_.tighten({
            width : lib13.properties.width,height : lib13.properties.height}):null)(this.constraints) || lib11.BoxConstraints.tightFor({
            width : lib13.properties.width,height : lib13.properties.height})) : this.constraints;
    }
    static debugAssertIsValid : new() => Container;

     : any;

    @namedConstructor
    debugAssertIsValid() {
        this.decoration = (this.decoration || (lib13.properties.color != null ? lib14.BoxDecoration({
            color : lib13.properties.color}) : null));
        this.constraints = (lib13.properties.width != null || lib13.properties.height != null) ? (((_878_)=>(!!_878_)?_878_.tighten({
            width : lib13.properties.width,height : lib13.properties.height}):null)(this.constraints) || lib11.BoxConstraints.tightFor({
            width : lib13.properties.width,height : lib13.properties.height})) : this.constraints;
    }
    static debugAssertIsValid : new() => Container;

     : any;

     : any;

    decoration;
    constraints;
    super;

     : any;

     : any;

    child : lib3.Widget;

    alignment : lib9.AlignmentGeometry;

    padding : lib10.EdgeInsetsGeometry;

    decoration : lib5.Decoration;

    foregroundDecoration : lib5.Decoration;

    constraints : lib11.BoxConstraints;

    margin : lib10.EdgeInsetsGeometry;

    transform : lib12.Matrix4;

    get _paddingIncludingDecoration() : lib10.EdgeInsetsGeometry {
        if (op(Op.EQUALS,this.decoration,null) || op(Op.EQUALS,this.decoration.padding,null)) return this.padding;
        let decorationPadding : lib10.EdgeInsetsGeometry = this.decoration.padding;
        if (op(Op.EQUALS,this.padding,null)) return decorationPadding;
        return this.padding.add(decorationPadding);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let current : lib3.Widget = this.child;
        if (op(Op.EQUALS,this.child,null) && (op(Op.EQUALS,this.constraints,null) || !this.constraints.isTight)) {
            current = lib15.LimitedBox({
                maxWidth : 0.0,maxHeight : 0.0,child : lib15.ConstrainedBox({
                    constraints : new lib11.BoxConstraints.expand()})});
        }
        if (this.alignment != null) current = lib15.Align({
            alignment : this.alignment,child : current});
        let effectivePadding : lib10.EdgeInsetsGeometry = this._paddingIncludingDecoration;
        if (effectivePadding != null) current = lib15.Padding({
            padding : effectivePadding,child : current});
        if (this.decoration != null) current = DecoratedBox({
            decoration : this.decoration,child : current});
        if (this.foregroundDecoration != null) {
            current = DecoratedBox({
                decoration : this.foregroundDecoration,position : lib6.DecorationPosition.foreground,child : current});
        }
        if (this.constraints != null) current = lib15.ConstrainedBox({
            constraints : this.constraints,child : current});
        if (this.margin != null) current = lib15.Padding({
            padding : this.margin,child : current});
        if (this.transform != null) current = lib15.Transform({
            transform : this.transform,child : current});
        return current;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DiagnosticsProperty('alignment',this.alignment,{
            showName : false,defaultValue : null}));
        properties.add(lib8.DiagnosticsProperty('padding',this.padding,{
            defaultValue : null}));
        properties.add(lib8.DiagnosticsProperty('bg',this.decoration,{
            defaultValue : null}));
        properties.add(lib8.DiagnosticsProperty('fg',this.foregroundDecoration,{
            defaultValue : null}));
        properties.add(lib8.DiagnosticsProperty('constraints',this.constraints,{
            defaultValue : null}));
        properties.add(lib8.DiagnosticsProperty('margin',this.margin,{
            defaultValue : null}));
        op(Op.GT,properties.add(op(Op.LT,lib8.ObjectFlagProperty<T>,lib12.Matrix4)),.has('transform',this.transform));
    }
}

export class properties {
}
