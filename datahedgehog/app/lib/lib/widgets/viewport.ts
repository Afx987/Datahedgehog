/** Library asset:datahedgehog_monitor/lib/lib/widgets/viewport.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";
import * as lib7 from "./basic";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/viewport";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace Viewport {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'Viewport' | 'where';
    export type Interface = Omit<Viewport, Constructors>;
}
@DartClass
export class Viewport extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,anchor? : double,offset? : lib6.ViewportOffset,center? : lib4.Key,cacheExtent? : double,slivers? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Viewport(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,anchor? : double,offset? : lib6.ViewportOffset,center? : lib4.Key,cacheExtent? : double,slivers? : core.DartList<lib3.Widget>}) {
        let {key,axisDirection,crossAxisDirection,anchor,offset,center,cacheExtent,slivers} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down,
            "anchor" : 0.0,
            "slivers" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.assert = assert;
        this.axisDirection = axisDirection;
        this.crossAxisDirection = crossAxisDirection;
        this.anchor = anchor;
        this.offset = offset;
        this.center = center;
        this.cacheExtent = cacheExtent;
    }
     : any;

     : any;

     : any;

    @namedConstructor
    where( : (child : lib3.Widget) => any, : any) {
        op(Op.EQUALS,child.key,this.center);
    }
    static where : new( : any) => Viewport;

     : any;

     : any;

    key;
    children;

     : any;

    axisDirection : lib5.AxisDirection;

    crossAxisDirection : lib5.AxisDirection;

    anchor : double;

    offset : lib6.ViewportOffset;

    center : lib4.Key;

    cacheExtent : double;

    static getDefaultCrossAxisDirection(context : lib3.BuildContext,axisDirection : lib5.AxisDirection) : lib5.AxisDirection {
        /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
        switch (axisDirection) {
            case lib5.AxisDirection.up:
                return lib5.textDirectionToAxisDirection(lib7.Directionality.of(context));
            case lib5.AxisDirection.right:
                return lib5.AxisDirection.down;
            case lib5.AxisDirection.down:
                return lib5.textDirectionToAxisDirection(lib7.Directionality.of(context));
            case lib5.AxisDirection.left:
                return lib5.AxisDirection.down;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib8.RenderViewport {
        return lib8.RenderViewport({
            axisDirection : this.axisDirection,crossAxisDirection : (this.crossAxisDirection || Viewport.getDefaultCrossAxisDirection(context,this.axisDirection)),anchor : this.anchor,offset : this.offset,cacheExtent : this.cacheExtent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib8.RenderViewport) : any {
        ((_) : lib8.RenderViewport =>  {
            {
                _.axisDirection = this.axisDirection;
                _.crossAxisDirection = (this.crossAxisDirection || Viewport.getDefaultCrossAxisDirection(context,this.axisDirection));
                _.anchor = this.anchor;
                _.offset = this.offset;
                _.cacheExtent = this.cacheExtent;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _ViewportElement {
        return _ViewportElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.EnumProperty('axisDirection',this.axisDirection));
        properties.add(lib9.EnumProperty('crossAxisDirection',this.crossAxisDirection,{
            defaultValue : null}));
        properties.add(lib9.DoubleProperty('anchor',this.anchor));
        properties.add(lib9.DiagnosticsProperty('offset',this.offset));
        if (this.center != null) {
            properties.add(lib9.DiagnosticsProperty('center',this.center));
        }else if (this.children.isNotEmpty && this.children.first.key != null) {
            properties.add(lib9.DiagnosticsProperty('center',this.children.first.key,{
                tooltip : 'implicit'}));
        }
    }
}

export namespace _ViewportElement {
    export type Constructors = lib3.MultiChildRenderObjectElement.Constructors | '_ViewportElement';
    export type Interface = Omit<_ViewportElement, Constructors>;
}
@DartClass
export class _ViewportElement extends lib3.MultiChildRenderObjectElement {
    constructor(widget : Viewport) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ViewportElement(widget : Viewport) {
        super.MultiChildRenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : Viewport {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : lib8.RenderViewport {
        return super.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib3.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._updateCenter();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : lib3.MultiChildRenderObjectWidget) : any {
        super.update(newWidget);
        this._updateCenter();
    }
    _updateCenter() : any {
        if (this.widget.center != null) {
            this.renderObject.center = this.children.singleWhere((element : lib3.Element) =>  {
                return op(Op.EQUALS,element.widget.key,this.widget.center);
            }).renderObject;
        }else if (this.children.isNotEmpty) {
            this.renderObject.center = this.children.first.renderObject;
        }else {
            this.renderObject.center = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugVisitOnstageChildren(visitor : (element : lib3.Element) => any) : any {
        this.children.where((e : lib3.Element) =>  {
            let renderSliver : any = e.renderObject;
            return renderSliver.geometry.visible;
        }).forEach(visitor);
    }
}

export namespace ShrinkWrappingViewport {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'ShrinkWrappingViewport';
    export type Interface = Omit<ShrinkWrappingViewport, Constructors>;
}
@DartClass
export class ShrinkWrappingViewport extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,slivers? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShrinkWrappingViewport(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,slivers? : core.DartList<lib3.Widget>}) {
        let {key,axisDirection,crossAxisDirection,offset,slivers} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down,
            "slivers" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.assert = assert;
        this.axisDirection = axisDirection;
        this.crossAxisDirection = crossAxisDirection;
        this.offset = offset;
    }
     : any;

     : any;

    key;
    children;

     : any;

    axisDirection : lib5.AxisDirection;

    crossAxisDirection : lib5.AxisDirection;

    offset : lib6.ViewportOffset;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib8.RenderShrinkWrappingViewport {
        return lib8.RenderShrinkWrappingViewport({
            axisDirection : this.axisDirection,crossAxisDirection : (this.crossAxisDirection || Viewport.getDefaultCrossAxisDirection(context,this.axisDirection)),offset : this.offset});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib8.RenderShrinkWrappingViewport) : any {
        ((_) : lib8.RenderShrinkWrappingViewport =>  {
            {
                _.axisDirection = this.axisDirection;
                _.crossAxisDirection = (this.crossAxisDirection || Viewport.getDefaultCrossAxisDirection(context,this.axisDirection));
                _.offset = this.offset;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.EnumProperty('axisDirection',this.axisDirection));
        properties.add(lib9.EnumProperty('crossAxisDirection',this.crossAxisDirection,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('offset',this.offset));
    }
}

export class properties {
}
