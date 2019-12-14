/** Library asset:datahedgehog_monitor/lib/lib/widgets/basic.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib11 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/layer";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/rotated_box";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/custom_layout";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/foundation/node";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/rendering/sliver";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_padding";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/rendering/list_body";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/rendering/wrap";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/rendering/flow";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/painting/strut_style";
import * as lib33 from "./localizations";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/painting/decoration_image";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/rendering/image";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/services/asset_bundle";
import * as lib37 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib38 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib39 from "@dart2ts.packages/flutter/lib/src/services/text_editing";

export var getAxisDirectionFromAxisReverseAndDirectionality : (context : lib3.BuildContext,axis : lib22.Axis,reverse : boolean) => lib22.AxisDirection = (context : lib3.BuildContext,axis : lib22.Axis,reverse : boolean) : lib22.AxisDirection =>  {
    switch (axis) {
        case lib22.Axis.horizontal:
            /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
            let textDirection : any = Directionality.of(context);
            let axisDirection : lib22.AxisDirection = lib22.textDirectionToAxisDirection(textDirection);
            return reverse ? lib22.flipAxisDirection(axisDirection) : axisDirection;
        case lib22.Axis.vertical:
            return reverse ? lib22.AxisDirection.up : lib22.AxisDirection.down;
    }
    return null;
};
export namespace SizedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'SizedBox' | 'expand' | 'shrink' | 'fromSize';
    export type Interface = Omit<SizedBox, Constructors>;
}
@DartClass
export class SizedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,width? : double,height? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SizedBox(_namedArguments? : {key? : lib4.Key,width? : double,height? : double,child? : lib3.Widget}) {
        let {key,width,height,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.width = width;
        this.height = height;
    }
    @namedConstructor
    expand(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        this.width = new core.DartDouble(double).infinity;
        this.height = new core.DartDouble(double).infinity;
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    static expand : new(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) => SizedBox;

    @namedConstructor
    shrink(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        this.width = 0.0;
        this.height = 0.0;
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    static shrink : new(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) => SizedBox;

    @namedConstructor
    fromSize(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,size? : any}) {
        let {key,child,size} = Object.assign({
        }, _namedArguments );
        this.width = ((t)=>(!!t)?t.width:null)(size);
        this.height = ((t)=>(!!t)?t.height:null)(size);
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    static fromSize : new(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,size? : any}) => SizedBox;

    width : double;

    height : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderConstrainedBox {
        return lib6.RenderConstrainedBox({
            additionalConstraints : this._additionalConstraints});
    }
    get _additionalConstraints() : lib21.BoxConstraints {
        return lib21.BoxConstraints.tightFor({
            width : this.width,height : this.height});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderConstrainedBox) : any {
        renderObject.additionalConstraints = this._additionalConstraints;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        let type : string;
        if (this.width == new core.DartDouble(double).infinity && this.height == new core.DartDouble(double).infinity) {
            type = `${this.runtimeType}.expand`;
        }else if (this.width == 0.0 && this.height == 0.0) {
            type = `${this.runtimeType}.shrink`;
        }else {
            type = `${this.runtimeType}`;
        }
        return op(Op.EQUALS,this.key,null) ? `${type}` : `${type}-${this.key}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let level : lib5.DiagnosticLevel;
        if ((this.width == new core.DartDouble(double).infinity && this.height == new core.DartDouble(double).infinity) || (this.width == 0.0 && this.height == 0.0)) {
            level = lib5.DiagnosticLevel.hidden;
        }else {
            level = lib5.DiagnosticLevel.info;
        }
        properties.add(lib5.DoubleProperty('width',this.width,{
            defaultValue : null,level : level}));
        properties.add(lib5.DoubleProperty('height',this.height,{
            defaultValue : null,level : level}));
    }
}

export namespace ShaderMask {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'ShaderMask';
    export type Interface = Omit<ShaderMask, Constructors>;
}
@DartClass
export class ShaderMask extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,shaderCallback? : (bounds : any) => any,blendMode? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShaderMask(_namedArguments? : {key? : lib4.Key,shaderCallback? : (bounds : any) => any,blendMode? : any,child? : lib3.Widget}) {
        let {key,shaderCallback,blendMode,child} = Object.assign({
            "blendMode" : BlendMode.modulate}, _namedArguments );
        this.assert = assert;
        this.shaderCallback = shaderCallback;
        this.blendMode = blendMode;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    shaderCallback : (bounds : any) => any;

    blendMode : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderShaderMask {
        return lib6.RenderShaderMask({
            shaderCallback : this.shaderCallback,blendMode : this.blendMode});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderShaderMask) : any {
        ((_) : lib6.RenderShaderMask =>  {
            {
                _.shaderCallback = this.shaderCallback;
                _.blendMode = this.blendMode;
                return _;
            }
        })(renderObject);
    }
}

export namespace BackdropFilter {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'BackdropFilter';
    export type Interface = Omit<BackdropFilter, Constructors>;
}
@DartClass
export class BackdropFilter extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,filter? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BackdropFilter(_namedArguments? : {key? : lib4.Key,filter? : any,child? : lib3.Widget}) {
        let {key,filter,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.filter = filter;
    }
     : any;

     : any;

    key;
    child;

     : any;

    filter : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderBackdropFilter {
        return lib6.RenderBackdropFilter({
            filter : this.filter});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderBackdropFilter) : any {
        renderObject.filter = this.filter;
    }
}

export namespace CustomPaint {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'CustomPaint';
    export type Interface = Omit<CustomPaint, Constructors>;
}
@DartClass
export class CustomPaint extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,painter? : lib7.CustomPainter,foregroundPainter? : lib7.CustomPainter,size? : any,isComplex? : boolean,willChange? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CustomPaint(_namedArguments? : {key? : lib4.Key,painter? : lib7.CustomPainter,foregroundPainter? : lib7.CustomPainter,size? : any,isComplex? : boolean,willChange? : boolean,child? : lib3.Widget}) {
        let {key,painter,foregroundPainter,size,isComplex,willChange,child} = Object.assign({
            "size" : Size.zero,
            "isComplex" : false,
            "willChange" : false}, _namedArguments );
        this.assert = assert;
        this.painter = painter;
        this.foregroundPainter = foregroundPainter;
        this.size = size;
        this.isComplex = isComplex;
        this.willChange = willChange;
    }
     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    painter : lib7.CustomPainter;

    foregroundPainter : lib7.CustomPainter;

    size : any;

    isComplex : boolean;

    willChange : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib7.RenderCustomPaint {
        return lib7.RenderCustomPaint({
            painter : this.painter,foregroundPainter : this.foregroundPainter,preferredSize : this.size,isComplex : this.isComplex,willChange : this.willChange});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib7.RenderCustomPaint) : any {
        ((_) : lib7.RenderCustomPaint =>  {
            {
                _.painter = this.painter;
                _.foregroundPainter = this.foregroundPainter;
                _.preferredSize = this.size;
                _.isComplex = this.isComplex;
                _.willChange = this.willChange;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUnmountRenderObject(renderObject : lib7.RenderCustomPaint) : any {
        ((_) : lib7.RenderCustomPaint =>  {
            {
                _.painter = null;
                _.foregroundPainter = null;
                return _;
            }
        })(renderObject);
    }
}

export namespace ClipRect {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'ClipRect';
    export type Interface = Omit<ClipRect, Constructors>;
}
@DartClass
export class ClipRect extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClipRect(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        let {key,clipper,clipBehavior,child} = Object.assign({
            "clipBehavior" : Clip.hardEdge}, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.clipper = clipper;
        this.clipBehavior = clipBehavior;
    }
    clipper : lib6.CustomClipper<any>;

    clipBehavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderClipRect {
        return lib6.RenderClipRect({
            clipper : this.clipper,clipBehavior : this.clipBehavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderClipRect) : any {
        renderObject.clipper = this.clipper;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUnmountRenderObject(renderObject : lib6.RenderClipRect) : any {
        renderObject.clipper = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('clipper',this.clipper,{
            defaultValue : null}));
    }
}

export namespace ClipRRect {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'ClipRRect';
    export type Interface = Omit<ClipRRect, Constructors>;
}
@DartClass
export class ClipRRect extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,borderRadius? : lib8.BorderRadius,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClipRRect(_namedArguments? : {key? : lib4.Key,borderRadius? : lib8.BorderRadius,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        let {key,borderRadius,clipper,clipBehavior,child} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        this.assert = assert;
        this.borderRadius = borderRadius;
        this.clipper = clipper;
        this.clipBehavior = clipBehavior;
    }
     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    borderRadius : lib8.BorderRadius;

    clipper : lib6.CustomClipper<any>;

    clipBehavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderClipRRect {
        return lib6.RenderClipRRect({
            borderRadius : this.borderRadius,clipper : this.clipper,clipBehavior : this.clipBehavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderClipRRect) : any {
        ((_) : lib6.RenderClipRRect =>  {
            {
                _.borderRadius = this.borderRadius;
                _.clipper = this.clipper;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('borderRadius',this.borderRadius,{
            showName : false,defaultValue : null}));
        properties.add(lib5.DiagnosticsProperty('clipper',this.clipper,{
            defaultValue : null}));
    }
}

export namespace ClipOval {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'ClipOval';
    export type Interface = Omit<ClipOval, Constructors>;
}
@DartClass
export class ClipOval extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClipOval(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        let {key,clipper,clipBehavior,child} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.clipper = clipper;
        this.clipBehavior = clipBehavior;
    }
    clipper : lib6.CustomClipper<any>;

    clipBehavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderClipOval {
        return lib6.RenderClipOval({
            clipper : this.clipper,clipBehavior : this.clipBehavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderClipOval) : any {
        renderObject.clipper = this.clipper;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUnmountRenderObject(renderObject : lib6.RenderClipOval) : any {
        renderObject.clipper = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('clipper',this.clipper,{
            defaultValue : null}));
    }
}

export namespace ClipPath {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'ClipPath';
    export type Interface = Omit<ClipPath, Constructors>;
}
@DartClass
export class ClipPath extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClipPath(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,child? : lib3.Widget}) {
        let {key,clipper,clipBehavior,child} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.clipper = clipper;
        this.clipBehavior = clipBehavior;
    }
    static shape(_namedArguments? : {key? : lib4.Key,shape? : lib9.ShapeBorder,clipBehavior? : any,child? : lib3.Widget}) : lib3.Widget {
        let {key,shape,clipBehavior,child} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (shape != null); */;
        return Builder({
            key : key,builder : (context : lib3.BuildContext) =>  {
                return ClipPath({
                    clipper : lib6.ShapeBorderClipper({
                        shape : shape,textDirection : Directionality.of(context)}),clipBehavior : clipBehavior,child : child});
            }});
    }
    clipper : lib6.CustomClipper<any>;

    clipBehavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderClipPath {
        return lib6.RenderClipPath({
            clipper : this.clipper,clipBehavior : this.clipBehavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderClipPath) : any {
        renderObject.clipper = this.clipper;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUnmountRenderObject(renderObject : lib6.RenderClipPath) : any {
        renderObject.clipper = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('clipper',this.clipper,{
            defaultValue : null}));
    }
}

export namespace PhysicalModel {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'PhysicalModel';
    export type Interface = Omit<PhysicalModel, Constructors>;
}
@DartClass
export class PhysicalModel extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,shape? : lib10.BoxShape,clipBehavior? : any,borderRadius? : lib8.BorderRadius,elevation? : double,color? : any,shadowColor? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PhysicalModel(_namedArguments? : {key? : lib4.Key,shape? : lib10.BoxShape,clipBehavior? : any,borderRadius? : lib8.BorderRadius,elevation? : double,color? : any,shadowColor? : any,child? : lib3.Widget}) {
        let {key,shape,clipBehavior,borderRadius,elevation,color,shadowColor,child} = Object.assign({
            "shape" : lib10.BoxShape.rectangle,
            "clipBehavior" : Clip.none,
            "elevation" : 0.0,
            "shadowColor" : new bare.createInstance(any,null,4278190080)}, _namedArguments );
        this.assert = assert;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.borderRadius = borderRadius;
        this.elevation = elevation;
        this.color = color;
        this.shadowColor = shadowColor;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    shape : lib10.BoxShape;

    clipBehavior : any;

    borderRadius : lib8.BorderRadius;

    elevation : double;

    color : any;

    shadowColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderPhysicalModel {
        return lib6.RenderPhysicalModel({
            shape : this.shape,clipBehavior : this.clipBehavior,borderRadius : this.borderRadius,elevation : this.elevation,color : this.color,shadowColor : this.shadowColor});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderPhysicalModel) : any {
        ((_) : lib6.RenderPhysicalModel =>  {
            {
                _.shape = this.shape;
                _.borderRadius = this.borderRadius;
                _.elevation = this.elevation;
                _.color = this.color;
                _.shadowColor = this.shadowColor;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.EnumProperty('shape',this.shape));
        properties.add(lib5.DiagnosticsProperty('borderRadius',this.borderRadius));
        properties.add(lib5.DoubleProperty('elevation',this.elevation));
        properties.add(lib5.DiagnosticsProperty('color',this.color));
        properties.add(lib5.DiagnosticsProperty('shadowColor',this.shadowColor));
    }
}

export namespace PhysicalShape {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'PhysicalShape';
    export type Interface = Omit<PhysicalShape, Constructors>;
}
@DartClass
export class PhysicalShape extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PhysicalShape(_namedArguments? : {key? : lib4.Key,clipper? : lib6.CustomClipper<any>,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any,child? : lib3.Widget}) {
        let {key,clipper,clipBehavior,elevation,color,shadowColor,child} = Object.assign({
            "clipBehavior" : Clip.none,
            "elevation" : 0.0,
            "shadowColor" : new bare.createInstance(any,null,4278190080)}, _namedArguments );
        this.assert = assert;
        this.clipper = clipper;
        this.clipBehavior = clipBehavior;
        this.elevation = elevation;
        this.color = color;
        this.shadowColor = shadowColor;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    clipper : lib6.CustomClipper<any>;

    clipBehavior : any;

    elevation : double;

    color : any;

    shadowColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderPhysicalShape {
        return lib6.RenderPhysicalShape({
            clipper : this.clipper,clipBehavior : this.clipBehavior,elevation : this.elevation,color : this.color,shadowColor : this.shadowColor});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderPhysicalShape) : any {
        ((_) : lib6.RenderPhysicalShape =>  {
            {
                _.clipper = this.clipper;
                _.elevation = this.elevation;
                _.color = this.color;
                _.shadowColor = this.shadowColor;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('clipper',this.clipper));
        properties.add(lib5.DoubleProperty('elevation',this.elevation));
        properties.add(lib5.DiagnosticsProperty('color',this.color));
        properties.add(lib5.DiagnosticsProperty('shadowColor',this.shadowColor));
    }
}

export namespace Transform {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Transform' | 'rotate' | 'translate' | 'scale';
    export type Interface = Omit<Transform, Constructors>;
}
@DartClass
export class Transform extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,transform? : lib11.Matrix4,origin? : any,alignment? : lib12.AlignmentGeometry,transformHitTests? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Transform(_namedArguments? : {key? : lib4.Key,transform? : lib11.Matrix4,origin? : any,alignment? : lib12.AlignmentGeometry,transformHitTests? : boolean,child? : lib3.Widget}) {
        let {key,transform,origin,alignment,transformHitTests,child} = Object.assign({
            "transformHitTests" : true}, _namedArguments );
        this.assert = assert;
        this.transform = transform;
        this.origin = origin;
        this.alignment = alignment;
        this.transformHitTests = transformHitTests;
    }
     : any;

     : any;

    key;
    child;

     : any;

    @namedConstructor
    rotate(_namedArguments? : {key? : lib4.Key,angle? : double,origin? : any,alignment? : lib12.AlignmentGeometry,transformHitTests? : boolean,child? : lib3.Widget}) {
        let {key,angle,origin,alignment,transformHitTests,child} = Object.assign({
            "alignment" : lib12.Alignment.center,
            "transformHitTests" : true}, _namedArguments );
        this.transform = lib11.Matrix4.rotationZ(angle);
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.origin = origin;
        this.alignment = alignment;
        this.transformHitTests = transformHitTests;
    }
    static rotate : new(_namedArguments? : {key? : lib4.Key,angle? : double,origin? : any,alignment? : lib12.AlignmentGeometry,transformHitTests? : boolean,child? : lib3.Widget}) => Transform;

    @namedConstructor
    translate(_namedArguments? : {key? : lib4.Key,offset? : any,transformHitTests? : boolean,child? : lib3.Widget}) {
        let {key,offset,transformHitTests,child} = Object.assign({
            "transformHitTests" : true}, _namedArguments );
        this.transform = lib11.Matrix4.translationValues(offset.dx,offset.dy,0.0);
        this.origin = null;
        this.alignment = null;
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.transformHitTests = transformHitTests;
    }
    static translate : new(_namedArguments? : {key? : lib4.Key,offset? : any,transformHitTests? : boolean,child? : lib3.Widget}) => Transform;

    @namedConstructor
    scale(_namedArguments? : {key? : lib4.Key,scale? : double,origin? : any,alignment? : lib12.AlignmentGeometry,transformHitTests? : boolean,child? : lib3.Widget}) {
        let {key,scale,origin,alignment,transformHitTests,child} = Object.assign({
            "alignment" : lib12.Alignment.center,
            "transformHitTests" : true}, _namedArguments );
        this.transform = lib11.Matrix4.diagonal3Values(scale,scale,1.0);
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.origin = origin;
        this.alignment = alignment;
        this.transformHitTests = transformHitTests;
    }
    static scale : new(_namedArguments? : {key? : lib4.Key,scale? : double,origin? : any,alignment? : lib12.AlignmentGeometry,transformHitTests? : boolean,child? : lib3.Widget}) => Transform;

    transform : lib11.Matrix4;

    origin : any;

    alignment : lib12.AlignmentGeometry;

    transformHitTests : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderTransform {
        return lib6.RenderTransform({
            transform : this.transform,origin : this.origin,alignment : this.alignment,textDirection : Directionality.of(context),transformHitTests : this.transformHitTests});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderTransform) : any {
        ((_) : lib6.RenderTransform =>  {
            {
                _.transform = this.transform;
                _.origin = this.origin;
                _.alignment = this.alignment;
                _.textDirection = Directionality.of(context);
                _.transformHitTests = this.transformHitTests;
                return _;
            }
        })(renderObject);
    }
}

export namespace CompositedTransformTarget {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'CompositedTransformTarget';
    export type Interface = Omit<CompositedTransformTarget, Constructors>;
}
@DartClass
export class CompositedTransformTarget extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,link? : lib13.LayerLink,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompositedTransformTarget(_namedArguments? : {key? : lib4.Key,link? : lib13.LayerLink,child? : lib3.Widget}) {
        let {key,link,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.link = link;
    }
     : any;

     : any;

    key;
    child;

     : any;

    link : lib13.LayerLink;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderLeaderLayer {
        return lib6.RenderLeaderLayer({
            link : this.link});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderLeaderLayer) : any {
        ((_) : lib6.RenderLeaderLayer =>  {
            {
                _.link = this.link;
                return _;
            }
        })(renderObject);
    }
}

export namespace CompositedTransformFollower {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'CompositedTransformFollower';
    export type Interface = Omit<CompositedTransformFollower, Constructors>;
}
@DartClass
export class CompositedTransformFollower extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,link? : lib13.LayerLink,showWhenUnlinked? : boolean,offset? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompositedTransformFollower(_namedArguments? : {key? : lib4.Key,link? : lib13.LayerLink,showWhenUnlinked? : boolean,offset? : any,child? : lib3.Widget}) {
        let {key,link,showWhenUnlinked,offset,child} = Object.assign({
            "showWhenUnlinked" : true,
            "offset" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.link = link;
        this.showWhenUnlinked = showWhenUnlinked;
        this.offset = offset;
    }
     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    link : lib13.LayerLink;

    showWhenUnlinked : boolean;

    offset : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderFollowerLayer {
        return lib6.RenderFollowerLayer({
            link : this.link,showWhenUnlinked : this.showWhenUnlinked,offset : this.offset});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderFollowerLayer) : any {
        ((_) : lib6.RenderFollowerLayer =>  {
            {
                _.link = this.link;
                _.showWhenUnlinked = this.showWhenUnlinked;
                _.offset = this.offset;
                return _;
            }
        })(renderObject);
    }
}

export namespace FittedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'FittedBox';
    export type Interface = Omit<FittedBox, Constructors>;
}
@DartClass
export class FittedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,fit? : lib14.BoxFit,alignment? : lib12.AlignmentGeometry,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FittedBox(_namedArguments? : {key? : lib4.Key,fit? : lib14.BoxFit,alignment? : lib12.AlignmentGeometry,child? : lib3.Widget}) {
        let {key,fit,alignment,child} = Object.assign({
            "fit" : lib14.BoxFit.contain,
            "alignment" : lib12.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.fit = fit;
        this.alignment = alignment;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    fit : lib14.BoxFit;

    alignment : lib12.AlignmentGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderFittedBox {
        return lib6.RenderFittedBox({
            fit : this.fit,alignment : this.alignment,textDirection : Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderFittedBox) : any {
        ((_) : lib6.RenderFittedBox =>  {
            {
                _.fit = this.fit;
                _.alignment = this.alignment;
                _.textDirection = Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.EnumProperty('fit',this.fit));
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment));
    }
}

export namespace FractionalTranslation {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'FractionalTranslation';
    export type Interface = Omit<FractionalTranslation, Constructors>;
}
@DartClass
export class FractionalTranslation extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,translation? : any,transformHitTests? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FractionalTranslation(_namedArguments? : {key? : lib4.Key,translation? : any,transformHitTests? : boolean,child? : lib3.Widget}) {
        let {key,translation,transformHitTests,child} = Object.assign({
            "transformHitTests" : true}, _namedArguments );
        this.assert = assert;
        this.translation = translation;
        this.transformHitTests = transformHitTests;
    }
     : any;

     : any;

    key;
    child;

     : any;

    translation : any;

    transformHitTests : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderFractionalTranslation {
        return lib6.RenderFractionalTranslation({
            translation : this.translation,transformHitTests : this.transformHitTests});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderFractionalTranslation) : any {
        ((_) : lib6.RenderFractionalTranslation =>  {
            {
                _.translation = this.translation;
                _.transformHitTests = this.transformHitTests;
                return _;
            }
        })(renderObject);
    }
}

export namespace RotatedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'RotatedBox';
    export type Interface = Omit<RotatedBox, Constructors>;
}
@DartClass
export class RotatedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,quarterTurns? : number,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RotatedBox(_namedArguments? : {key? : lib4.Key,quarterTurns? : number,child? : lib3.Widget}) {
        let {key,quarterTurns,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.quarterTurns = quarterTurns;
    }
     : any;

     : any;

    key;
    child;

     : any;

    quarterTurns : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib15.RenderRotatedBox {
        return lib15.RenderRotatedBox({
            quarterTurns : this.quarterTurns});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib15.RenderRotatedBox) : any {
        renderObject.quarterTurns = this.quarterTurns;
    }
}

export namespace Padding {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Padding';
    export type Interface = Omit<Padding, Constructors>;
}
@DartClass
export class Padding extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,padding? : lib16.EdgeInsetsGeometry,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Padding(_namedArguments? : {key? : lib4.Key,padding? : lib16.EdgeInsetsGeometry,child? : lib3.Widget}) {
        let {key,padding,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.padding = padding;
    }
     : any;

     : any;

    key;
    child;

     : any;

    padding : lib16.EdgeInsetsGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderPadding {
        return lib17.RenderPadding({
            padding : this.padding,textDirection : Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderPadding) : any {
        ((_) : lib17.RenderPadding =>  {
            {
                _.padding = this.padding;
                _.textDirection = Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('padding',this.padding));
    }
}

export namespace Align {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Align';
    export type Interface = Omit<Align, Constructors>;
}
@DartClass
export class Align extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,widthFactor? : double,heightFactor? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Align(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,widthFactor? : double,heightFactor? : double,child? : lib3.Widget}) {
        let {key,alignment,widthFactor,heightFactor,child} = Object.assign({
            "alignment" : lib12.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.alignment = alignment;
        this.widthFactor = widthFactor;
        this.heightFactor = heightFactor;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    alignment : lib12.AlignmentGeometry;

    widthFactor : double;

    heightFactor : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderPositionedBox {
        return lib17.RenderPositionedBox({
            alignment : this.alignment,widthFactor : this.widthFactor,heightFactor : this.heightFactor,textDirection : Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderPositionedBox) : any {
        ((_) : lib17.RenderPositionedBox =>  {
            {
                _.alignment = this.alignment;
                _.widthFactor = this.widthFactor;
                _.heightFactor = this.heightFactor;
                _.textDirection = Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib5.DoubleProperty('widthFactor',this.widthFactor,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('heightFactor',this.heightFactor,{
            defaultValue : null}));
    }
}

export namespace StatefulBuilder {
    export type Constructors = lib3.StatefulWidget.Constructors | 'StatefulBuilder';
    export type Interface = Omit<StatefulBuilder, Constructors>;
}
@DartClass
export class StatefulBuilder extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext,setState : (fn : any) => any) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatefulBuilder(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext,setState : (fn : any) => any) => lib3.Widget}) {
        let {key,builder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.builder = builder;
    }
     : any;

     : any;

     : any;

    builder : (context : lib3.BuildContext,setState : (fn : any) => any) => lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _StatefulBuilderState {
        return _StatefulBuilderState();
    }
}

export namespace CustomSingleChildLayout {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'CustomSingleChildLayout';
    export type Interface = Omit<CustomSingleChildLayout, Constructors>;
}
@DartClass
export class CustomSingleChildLayout extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,delegate? : lib17.SingleChildLayoutDelegate,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CustomSingleChildLayout(_namedArguments? : {key? : lib4.Key,delegate? : lib17.SingleChildLayoutDelegate,child? : lib3.Widget}) {
        let {key,delegate,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
    }
     : any;

     : any;

    key;
    child;

     : any;

    delegate : lib17.SingleChildLayoutDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderCustomSingleChildLayoutBox {
        return lib17.RenderCustomSingleChildLayoutBox({
            delegate : this.delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderCustomSingleChildLayoutBox) : any {
        renderObject.delegate = this.delegate;
    }
}

export namespace LayoutId {
    export type Constructors = lib3.ParentDataWidget.Constructors | 'LayoutId';
    export type Interface = Omit<LayoutId, Constructors>;
}
@DartClass
export class LayoutId extends lib3.ParentDataWidget<CustomMultiChildLayout> {
    constructor(_namedArguments? : {key? : lib4.Key,id? : core.DartObject,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LayoutId(_namedArguments? : {key? : lib4.Key,id? : core.DartObject,child? : lib3.Widget}) {
        let {key,id,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.id = id;
    }
     : any;

     : any;

     : any;

     : any;

    ValueKey<Object>(id : any) {
    }
     : any;

     : any;

    id : core.DartObject;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyParentData(renderObject : lib18.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (renderObject.parentData is MultiChildLayoutParentData); */;
        let parentData : lib19.MultiChildLayoutParentData = renderObject.parentData;
        if (parentData.id != this.id) {
            parentData.id = this.id;
            let targetParent : lib20.AbstractNode = renderObject.parent;
            if (is(targetParent, lib18.RenderObject)) targetParent.markNeedsLayout();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('id',this.id));
    }
}

export namespace CustomMultiChildLayout {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'CustomMultiChildLayout';
    export type Interface = Omit<CustomMultiChildLayout, Constructors>;
}
@DartClass
export class CustomMultiChildLayout extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,delegate? : lib19.MultiChildLayoutDelegate,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CustomMultiChildLayout(_namedArguments? : {key? : lib4.Key,delegate? : lib19.MultiChildLayoutDelegate,children? : core.DartList<lib3.Widget>}) {
        let {key,delegate,children} = Object.assign({
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
    }
     : any;

     : any;

    key;
    children;

     : any;

    delegate : lib19.MultiChildLayoutDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib19.RenderCustomMultiChildLayoutBox {
        return lib19.RenderCustomMultiChildLayoutBox({
            delegate : this.delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib19.RenderCustomMultiChildLayoutBox) : any {
        renderObject.delegate = this.delegate;
    }
}

export namespace Directionality {
    export type Constructors = lib3.InheritedWidget.Constructors | 'Directionality';
    export type Interface = Omit<Directionality, Constructors>;
}
@DartClass
export class Directionality extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,textDirection? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Directionality(_namedArguments? : {key? : lib4.Key,textDirection? : any,child? : lib3.Widget}) {
        let {key,textDirection,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.textDirection = textDirection;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    textDirection : any;

    static of(context : lib3.BuildContext) : any {
        let widget : Directionality = context.inheritFromWidgetOfExactType(Directionality);
        return ((t)=>(!!t)?t.textDirection:null)(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : Directionality) : boolean {
        return this.textDirection != oldWidget.textDirection;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.EnumProperty('textDirection',this.textDirection));
    }
}

export namespace ConstrainedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'ConstrainedBox' | 'debugAssertIsValid';
    export type Interface = Omit<ConstrainedBox, Constructors>;
}
@DartClass
export class ConstrainedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,constraints? : lib21.BoxConstraints,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstrainedBox(_namedArguments? : {key? : lib4.Key,constraints? : lib21.BoxConstraints,child? : lib3.Widget}) {
        let {key,constraints,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.constraints = constraints;
    }
     : any;

    @namedConstructor
    debugAssertIsValid() {
    }
    static debugAssertIsValid : new() => ConstrainedBox;

     : any;

    key;
    child;

     : any;

    constraints : lib21.BoxConstraints;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderConstrainedBox {
        return lib6.RenderConstrainedBox({
            additionalConstraints : this.constraints});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderConstrainedBox) : any {
        renderObject.additionalConstraints = this.constraints;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('constraints',this.constraints,{
            showName : false}));
    }
}

export namespace UnconstrainedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'UnconstrainedBox';
    export type Interface = Omit<UnconstrainedBox, Constructors>;
}
@DartClass
export class UnconstrainedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,textDirection? : any,alignment? : lib12.AlignmentGeometry,constrainedAxis? : lib22.Axis}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnconstrainedBox(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,textDirection? : any,alignment? : lib12.AlignmentGeometry,constrainedAxis? : lib22.Axis}) {
        let {key,child,textDirection,alignment,constrainedAxis} = Object.assign({
            "alignment" : lib12.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.textDirection = textDirection;
        this.alignment = alignment;
        this.constrainedAxis = constrainedAxis;
    }
     : any;

     : any;

    key;
    child;

     : any;

    textDirection : any;

    alignment : lib12.AlignmentGeometry;

    constrainedAxis : lib22.Axis;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderUnconstrainedBox) : any {
        ((_) : lib17.RenderUnconstrainedBox =>  {
            {
                _.textDirection = (this.textDirection || Directionality.of(context));
                _.alignment = this.alignment;
                _.constrainedAxis = this.constrainedAxis;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderUnconstrainedBox {
        return lib17.RenderUnconstrainedBox({
            textDirection : (this.textDirection || Directionality.of(context)),alignment : this.alignment,constrainedAxis : this.constrainedAxis});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib5.EnumProperty('constrainedAxis',this.constrainedAxis,{
            defaultValue : null}));
        properties.add(lib5.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
    }
}

export namespace FractionallySizedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'FractionallySizedBox';
    export type Interface = Omit<FractionallySizedBox, Constructors>;
}
@DartClass
export class FractionallySizedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,widthFactor? : double,heightFactor? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FractionallySizedBox(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,widthFactor? : double,heightFactor? : double,child? : lib3.Widget}) {
        let {key,alignment,widthFactor,heightFactor,child} = Object.assign({
            "alignment" : lib12.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.alignment = alignment;
        this.widthFactor = widthFactor;
        this.heightFactor = heightFactor;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    widthFactor : double;

    heightFactor : double;

    alignment : lib12.AlignmentGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderFractionallySizedOverflowBox {
        return lib17.RenderFractionallySizedOverflowBox({
            alignment : this.alignment,widthFactor : this.widthFactor,heightFactor : this.heightFactor,textDirection : Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderFractionallySizedOverflowBox) : any {
        ((_) : lib17.RenderFractionallySizedOverflowBox =>  {
            {
                _.alignment = this.alignment;
                _.widthFactor = this.widthFactor;
                _.heightFactor = this.heightFactor;
                _.textDirection = Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib5.DoubleProperty('widthFactor',this.widthFactor,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('heightFactor',this.heightFactor,{
            defaultValue : null}));
    }
}

export namespace LimitedBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'LimitedBox';
    export type Interface = Omit<LimitedBox, Constructors>;
}
@DartClass
export class LimitedBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,maxWidth? : double,maxHeight? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LimitedBox(_namedArguments? : {key? : lib4.Key,maxWidth? : double,maxHeight? : double,child? : lib3.Widget}) {
        let {key,maxWidth,maxHeight,child} = Object.assign({
            "maxWidth" : new core.DartDouble(double).infinity,
            "maxHeight" : new core.DartDouble(double).infinity}, _namedArguments );
        this.assert = assert;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    maxWidth : double;

    maxHeight : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderLimitedBox {
        return lib6.RenderLimitedBox({
            maxWidth : this.maxWidth,maxHeight : this.maxHeight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderLimitedBox) : any {
        ((_) : lib6.RenderLimitedBox =>  {
            {
                _.maxWidth = this.maxWidth;
                _.maxHeight = this.maxHeight;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DoubleProperty('maxWidth',this.maxWidth,{
            defaultValue : new core.DartDouble(double).infinity}));
        properties.add(lib5.DoubleProperty('maxHeight',this.maxHeight,{
            defaultValue : new core.DartDouble(double).infinity}));
    }
}

export namespace OverflowBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'OverflowBox';
    export type Interface = Omit<OverflowBox, Constructors>;
}
@DartClass
export class OverflowBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,minWidth? : double,maxWidth? : double,minHeight? : double,maxHeight? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OverflowBox(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,minWidth? : double,maxWidth? : double,minHeight? : double,maxHeight? : double,child? : lib3.Widget}) {
        let {key,alignment,minWidth,maxWidth,minHeight,maxHeight,child} = Object.assign({
            "alignment" : lib12.Alignment.center}, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.alignment = alignment;
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
    }
    alignment : lib12.AlignmentGeometry;

    minWidth : double;

    maxWidth : double;

    minHeight : double;

    maxHeight : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderConstrainedOverflowBox {
        return lib17.RenderConstrainedOverflowBox({
            alignment : this.alignment,minWidth : this.minWidth,maxWidth : this.maxWidth,minHeight : this.minHeight,maxHeight : this.maxHeight,textDirection : Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderConstrainedOverflowBox) : any {
        ((_) : lib17.RenderConstrainedOverflowBox =>  {
            {
                _.alignment = this.alignment;
                _.minWidth = this.minWidth;
                _.maxWidth = this.maxWidth;
                _.minHeight = this.minHeight;
                _.maxHeight = this.maxHeight;
                _.textDirection = Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib5.DoubleProperty('minWidth',this.minWidth,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('maxWidth',this.maxWidth,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('minHeight',this.minHeight,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('maxHeight',this.maxHeight,{
            defaultValue : null}));
    }
}

export namespace SizedOverflowBox {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'SizedOverflowBox';
    export type Interface = Omit<SizedOverflowBox, Constructors>;
}
@DartClass
export class SizedOverflowBox extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,size? : any,alignment? : lib12.AlignmentGeometry,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SizedOverflowBox(_namedArguments? : {key? : lib4.Key,size? : any,alignment? : lib12.AlignmentGeometry,child? : lib3.Widget}) {
        let {key,size,alignment,child} = Object.assign({
            "alignment" : lib12.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.size = size;
        this.alignment = alignment;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    alignment : lib12.AlignmentGeometry;

    size : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderSizedOverflowBox {
        return lib17.RenderSizedOverflowBox({
            alignment : this.alignment,requestedSize : this.size,textDirection : Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderSizedOverflowBox) : any {
        ((_) : lib17.RenderSizedOverflowBox =>  {
            {
                _.alignment = this.alignment;
                _.requestedSize = this.size;
                _.textDirection = Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib5.DiagnosticsProperty('size',this.size,{
            defaultValue : null}));
    }
}

export namespace Offstage {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Offstage';
    export type Interface = Omit<Offstage, Constructors>;
}
@DartClass
export class Offstage extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,offstage? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Offstage(_namedArguments? : {key? : lib4.Key,offstage? : boolean,child? : lib3.Widget}) {
        let {key,offstage,child} = Object.assign({
            "offstage" : true}, _namedArguments );
        this.assert = assert;
        this.offstage = offstage;
    }
     : any;

     : any;

    key;
    child;

     : any;

    offstage : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderOffstage {
        return lib6.RenderOffstage({
            offstage : this.offstage});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderOffstage) : any {
        renderObject.offstage = this.offstage;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('offstage',this.offstage));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _OffstageElement {
        return _OffstageElement(this);
    }
}

export namespace _OffstageElement {
    export type Constructors = lib3.SingleChildRenderObjectElement.Constructors | '_OffstageElement';
    export type Interface = Omit<_OffstageElement, Constructors>;
}
@DartClass
export class _OffstageElement extends lib3.SingleChildRenderObjectElement {
    constructor(widget : Offstage) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _OffstageElement(widget : Offstage) {
        super.SingleChildRenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : Offstage {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugVisitOnstageChildren(visitor : (element : lib3.Element) => any) : any {
        if (!this.widget.offstage) super.debugVisitOnstageChildren(visitor);
    }
}

export namespace AspectRatio {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'AspectRatio';
    export type Interface = Omit<AspectRatio, Constructors>;
}
@DartClass
export class AspectRatio extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,aspectRatio? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AspectRatio(_namedArguments? : {key? : lib4.Key,aspectRatio? : double,child? : lib3.Widget}) {
        let {key,aspectRatio,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.aspectRatio = aspectRatio;
    }
     : any;

     : any;

    key;
    child;

     : any;

    aspectRatio : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderAspectRatio {
        return lib6.RenderAspectRatio({
            aspectRatio : this.aspectRatio});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderAspectRatio) : any {
        renderObject.aspectRatio = this.aspectRatio;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DoubleProperty('aspectRatio',this.aspectRatio));
    }
}

export namespace IntrinsicWidth {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'IntrinsicWidth';
    export type Interface = Omit<IntrinsicWidth, Constructors>;
}
@DartClass
export class IntrinsicWidth extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,stepWidth? : double,stepHeight? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntrinsicWidth(_namedArguments? : {key? : lib4.Key,stepWidth? : double,stepHeight? : double,child? : lib3.Widget}) {
        let {key,stepWidth,stepHeight,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.stepWidth = stepWidth;
        this.stepHeight = stepHeight;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    stepWidth : double;

    stepHeight : double;

    get _stepWidth() : double {
        return this.stepWidth == 0.0 ? null : this.stepWidth;
    }
    get _stepHeight() : double {
        return this.stepHeight == 0.0 ? null : this.stepHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderIntrinsicWidth {
        return lib6.RenderIntrinsicWidth({
            stepWidth : this._stepWidth,stepHeight : this._stepHeight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderIntrinsicWidth) : any {
        ((_) : lib6.RenderIntrinsicWidth =>  {
            {
                _.stepWidth = this._stepWidth;
                _.stepHeight = this._stepHeight;
                return _;
            }
        })(renderObject);
    }
}

export namespace IntrinsicHeight {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'IntrinsicHeight';
    export type Interface = Omit<IntrinsicHeight, Constructors>;
}
@DartClass
export class IntrinsicHeight extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntrinsicHeight(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderIntrinsicHeight {
        return lib6.RenderIntrinsicHeight();
    }
}

export namespace Baseline {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Baseline';
    export type Interface = Omit<Baseline, Constructors>;
}
@DartClass
export class Baseline extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,baseline? : double,baselineType? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Baseline(_namedArguments? : {key? : lib4.Key,baseline? : double,baselineType? : any,child? : lib3.Widget}) {
        let {key,baseline,baselineType,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.baseline = baseline;
        this.baselineType = baselineType;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    baseline : double;

    baselineType : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib17.RenderBaseline {
        return lib17.RenderBaseline({
            baseline : this.baseline,baselineType : this.baselineType});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib17.RenderBaseline) : any {
        ((_) : lib17.RenderBaseline =>  {
            {
                _.baseline = this.baseline;
                _.baselineType = this.baselineType;
                return _;
            }
        })(renderObject);
    }
}

export namespace SliverToBoxAdapter {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'SliverToBoxAdapter';
    export type Interface = Omit<SliverToBoxAdapter, Constructors>;
}
@DartClass
export class SliverToBoxAdapter extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverToBoxAdapter(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib23.RenderSliverToBoxAdapter {
        return lib23.RenderSliverToBoxAdapter();
    }
}

export namespace SliverPadding {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'SliverPadding';
    export type Interface = Omit<SliverPadding, Constructors>;
}
@DartClass
export class SliverPadding extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,padding? : lib16.EdgeInsetsGeometry,sliver? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverPadding(_namedArguments? : {key? : lib4.Key,padding? : lib16.EdgeInsetsGeometry,sliver? : lib3.Widget}) {
        let {key,padding,sliver} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.padding = padding;
    }
     : any;

     : any;

    key;
    child;

     : any;

    padding : lib16.EdgeInsetsGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib24.RenderSliverPadding {
        return lib24.RenderSliverPadding({
            padding : this.padding,textDirection : Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib24.RenderSliverPadding) : any {
        ((_) : lib24.RenderSliverPadding =>  {
            {
                _.padding = this.padding;
                _.textDirection = Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('padding',this.padding));
    }
}

export namespace Opacity {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Opacity';
    export type Interface = Omit<Opacity, Constructors>;
}
@DartClass
export class Opacity extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,opacity? : double,alwaysIncludeSemantics? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Opacity(_namedArguments? : {key? : lib4.Key,opacity? : double,alwaysIncludeSemantics? : boolean,child? : lib3.Widget}) {
        let {key,opacity,alwaysIncludeSemantics,child} = Object.assign({
            "alwaysIncludeSemantics" : false}, _namedArguments );
        this.assert = assert;
        this.opacity = opacity;
        this.alwaysIncludeSemantics = alwaysIncludeSemantics;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    opacity : double;

    alwaysIncludeSemantics : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderOpacity {
        return lib6.RenderOpacity({
            opacity : this.opacity,alwaysIncludeSemantics : this.alwaysIncludeSemantics});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderOpacity) : any {
        ((_) : lib6.RenderOpacity =>  {
            {
                _.opacity = this.opacity;
                _.alwaysIncludeSemantics = this.alwaysIncludeSemantics;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DoubleProperty('opacity',this.opacity));
        properties.add(lib5.FlagProperty('alwaysIncludeSemantics',{
            value : this.alwaysIncludeSemantics,ifTrue : 'alwaysIncludeSemantics'}));
    }
}

export namespace ListBody {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'ListBody';
    export type Interface = Omit<ListBody, Constructors>;
}
@DartClass
export class ListBody extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,mainAxis? : lib22.Axis,reverse? : boolean,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListBody(_namedArguments? : {key? : lib4.Key,mainAxis? : lib22.Axis,reverse? : boolean,children? : core.DartList<lib3.Widget>}) {
        let {key,mainAxis,reverse,children} = Object.assign({
            "mainAxis" : lib22.Axis.vertical,
            "reverse" : false,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.assert = assert;
        this.mainAxis = mainAxis;
        this.reverse = reverse;
    }
     : any;

     : any;

    key;
    children;

     : any;

    mainAxis : lib22.Axis;

    reverse : boolean;

    _getDirection(context : lib3.BuildContext) : lib22.AxisDirection {
        return getAxisDirectionFromAxisReverseAndDirectionality(context,this.mainAxis,this.reverse);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib25.RenderListBody {
        return lib25.RenderListBody({
            axisDirection : this._getDirection(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib25.RenderListBody) : any {
        renderObject.axisDirection = this._getDirection(context);
    }
}

export namespace Stack {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'Stack';
    export type Interface = Omit<Stack, Constructors>;
}
@DartClass
export class Stack extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,textDirection? : any,fit? : lib26.StackFit,overflow? : lib26.Overflow,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Stack(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,textDirection? : any,fit? : lib26.StackFit,overflow? : lib26.Overflow,children? : core.DartList<lib3.Widget>}) {
        let {key,alignment,textDirection,fit,overflow,children} = Object.assign({
            "alignment" : lib12.AlignmentDirectional.topStart,
            "fit" : lib26.StackFit.loose,
            "overflow" : lib26.Overflow.clip,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        super.MultiChildRenderObjectWidget({
            key : key,children : children});
        this.alignment = alignment;
        this.textDirection = textDirection;
        this.fit = fit;
        this.overflow = overflow;
    }
    alignment : lib12.AlignmentGeometry;

    textDirection : any;

    fit : lib26.StackFit;

    overflow : lib26.Overflow;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib26.RenderStack {
        return lib26.RenderStack({
            alignment : this.alignment,textDirection : (this.textDirection || Directionality.of(context)),fit : this.fit,overflow : this.overflow});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib26.RenderStack) : any {
        ((_) : lib26.RenderStack =>  {
            {
                _.alignment = this.alignment;
                _.textDirection = (this.textDirection || Directionality.of(context));
                _.fit = this.fit;
                _.overflow = this.overflow;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib5.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib5.EnumProperty('fit',this.fit));
        properties.add(lib5.EnumProperty('overflow',this.overflow));
    }
}

export namespace Builder {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Builder';
    export type Interface = Omit<Builder, Constructors>;
}
@DartClass
export class Builder extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Builder(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext) => lib3.Widget}) {
        let {key,builder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.builder = builder;
    }
     : any;

     : any;

     : any;

    builder : (context : lib3.BuildContext) => lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.builder(context);
    }
}

export namespace Positioned {
    export type Constructors = lib3.ParentDataWidget.Constructors | 'Positioned' | 'fromRect' | 'fromRelativeRect' | 'fill';
    export type Interface = Omit<Positioned, Constructors>;
}
@DartClass
export class Positioned extends lib3.ParentDataWidget<Stack> {
    constructor(_namedArguments? : {key? : lib4.Key,left? : double,top? : double,right? : double,bottom? : double,width? : double,height? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Positioned(_namedArguments? : {key? : lib4.Key,left? : double,top? : double,right? : double,bottom? : double,width? : double,height? : double,child? : lib3.Widget}) {
        let {key,left,top,right,bottom,width,height,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.width = width;
        this.height = height;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    @namedConstructor
    fromRect(_namedArguments? : {key? : lib4.Key,rect? : any,child? : lib3.Widget}) {
        let {key,rect,child} = Object.assign({
        }, _namedArguments );
        this.left = rect.left;
        this.top = rect.top;
        this.width = rect.width;
        this.height = rect.height;
        this.right = null;
        this.bottom = null;
        super.ParentDataWidget({
            key : key,child : child});
    }
    static fromRect : new(_namedArguments? : {key? : lib4.Key,rect? : any,child? : lib3.Widget}) => Positioned;

    @namedConstructor
    fromRelativeRect(_namedArguments? : {key? : lib4.Key,rect? : lib26.RelativeRect,child? : lib3.Widget}) {
        let {key,rect,child} = Object.assign({
        }, _namedArguments );
        this.left = rect.left;
        this.top = rect.top;
        this.right = rect.right;
        this.bottom = rect.bottom;
        this.width = null;
        this.height = null;
        super.ParentDataWidget({
            key : key,child : child});
    }
    static fromRelativeRect : new(_namedArguments? : {key? : lib4.Key,rect? : lib26.RelativeRect,child? : lib3.Widget}) => Positioned;

    @namedConstructor
    fill(_namedArguments? : {key? : lib4.Key,left? : double,top? : double,right? : double,bottom? : double,child? : lib3.Widget}) {
        let {key,left,top,right,bottom,child} = Object.assign({
            "left" : 0.0,
            "top" : 0.0,
            "right" : 0.0,
            "bottom" : 0.0}, _namedArguments );
        this.width = null;
        this.height = null;
        super.ParentDataWidget({
            key : key,child : child});
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fill : new(_namedArguments? : {key? : lib4.Key,left? : double,top? : double,right? : double,bottom? : double,child? : lib3.Widget}) => Positioned;

    @namedFactory
    static $directional(_namedArguments? : {key? : lib4.Key,textDirection? : any,start? : double,top? : double,end? : double,bottom? : double,width? : double,height? : double,child? : lib3.Widget}) : Positioned {
        let {key,textDirection,start,top,end,bottom,width,height,child} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
        let left : double;
        let right : double;
        switch (textDirection) {
            case TextDirection.rtl:
                left = end;
                right = start;
                break;
            case TextDirection.ltr:
                left = start;
                right = end;
                break;
        }
        return Positioned({
            key : key,left : left,top : top,right : right,bottom : bottom,width : width,height : height,child : child});
    }
    static directional : new(_namedArguments? : {key? : lib4.Key,textDirection? : any,start? : double,top? : double,end? : double,bottom? : double,width? : double,height? : double,child? : lib3.Widget}) => Positioned;

    left : double;

    top : double;

    right : double;

    bottom : double;

    width : double;

    height : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyParentData(renderObject : lib18.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (renderObject.parentData is StackParentData); */;
        let parentData : lib26.StackParentData = renderObject.parentData;
        let needsLayout : boolean = false;
        if (parentData.left != this.left) {
            parentData.left = this.left;
            needsLayout = true;
        }
        if (parentData.top != this.top) {
            parentData.top = this.top;
            needsLayout = true;
        }
        if (parentData.right != this.right) {
            parentData.right = this.right;
            needsLayout = true;
        }
        if (parentData.bottom != this.bottom) {
            parentData.bottom = this.bottom;
            needsLayout = true;
        }
        if (parentData.width != this.width) {
            parentData.width = this.width;
            needsLayout = true;
        }
        if (parentData.height != this.height) {
            parentData.height = this.height;
            needsLayout = true;
        }
        if (needsLayout) {
            let targetParent : lib20.AbstractNode = renderObject.parent;
            if (is(targetParent, lib18.RenderObject)) targetParent.markNeedsLayout();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DoubleProperty('left',this.left,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('top',this.top,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('right',this.right,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('bottom',this.bottom,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('width',this.width,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('height',this.height,{
            defaultValue : null}));
    }
}

export namespace PositionedDirectional {
    export type Constructors = lib3.StatelessWidget.Constructors | 'PositionedDirectional';
    export type Interface = Omit<PositionedDirectional, Constructors>;
}
@DartClass
export class PositionedDirectional extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,start? : double,top? : double,end? : double,bottom? : double,width? : double,height? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PositionedDirectional(_namedArguments? : {key? : lib4.Key,start? : double,top? : double,end? : double,bottom? : double,width? : double,height? : double,child? : lib3.Widget}) {
        let {key,start,top,end,bottom,width,height,child} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.start = start;
        this.top = top;
        this.end = end;
        this.bottom = bottom;
        this.width = width;
        this.height = height;
        this.child = child;
    }
    start : double;

    top : double;

    end : double;

    bottom : double;

    width : double;

    height : double;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return Positioned.directional({
            textDirection : Directionality.of(context),start : this.start,top : this.top,end : this.end,bottom : this.bottom,width : this.width,height : this.height,child : this.child});
    }
}

export namespace Flex {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'Flex';
    export type Interface = Omit<Flex, Constructors>;
}
@DartClass
export class Flex extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,direction? : lib22.Axis,mainAxisAlignment? : lib28.MainAxisAlignment,mainAxisSize? : lib28.MainAxisSize,crossAxisAlignment? : lib28.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,textBaseline? : any,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Flex(_namedArguments? : {key? : lib4.Key,direction? : lib22.Axis,mainAxisAlignment? : lib28.MainAxisAlignment,mainAxisSize? : lib28.MainAxisSize,crossAxisAlignment? : lib28.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,textBaseline? : any,children? : core.DartList<lib3.Widget>}) {
        let {key,direction,mainAxisAlignment,mainAxisSize,crossAxisAlignment,textDirection,verticalDirection,textBaseline,children} = Object.assign({
            "mainAxisAlignment" : lib28.MainAxisAlignment.start,
            "mainAxisSize" : lib28.MainAxisSize.max,
            "crossAxisAlignment" : lib28.CrossAxisAlignment.center,
            "verticalDirection" : lib22.VerticalDirection.down,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.assert = assert;
        this.direction = direction;
        this.mainAxisAlignment = mainAxisAlignment;
        this.mainAxisSize = mainAxisSize;
        this.crossAxisAlignment = crossAxisAlignment;
        this.textDirection = textDirection;
        this.verticalDirection = verticalDirection;
        this.textBaseline = textBaseline;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    children;

     : any;

    direction : lib22.Axis;

    mainAxisAlignment : lib28.MainAxisAlignment;

    mainAxisSize : lib28.MainAxisSize;

    crossAxisAlignment : lib28.CrossAxisAlignment;

    textDirection : any;

    verticalDirection : lib22.VerticalDirection;

    textBaseline : any;

    get _needTextDirection() : boolean {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (this.direction) {
            case lib22.Axis.horizontal:
                return true;
            case lib22.Axis.vertical:
                /* TODO (AssertStatementImpl) : assert (crossAxisAlignment != null); */;
                return op(Op.EQUALS,this.crossAxisAlignment,lib28.CrossAxisAlignment.start) || op(Op.EQUALS,this.crossAxisAlignment,lib28.CrossAxisAlignment.end);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    getEffectiveTextDirection(context : lib3.BuildContext) : any {
        return (this.textDirection || (this._needTextDirection ? Directionality.of(context) : null));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib28.RenderFlex {
        return lib28.RenderFlex({
            direction : this.direction,mainAxisAlignment : this.mainAxisAlignment,mainAxisSize : this.mainAxisSize,crossAxisAlignment : this.crossAxisAlignment,textDirection : this.getEffectiveTextDirection(context),verticalDirection : this.verticalDirection,textBaseline : this.textBaseline});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib28.RenderFlex) : any {
        ((_) : lib28.RenderFlex =>  {
            {
                _.direction = this.direction;
                _.mainAxisAlignment = this.mainAxisAlignment;
                _.mainAxisSize = this.mainAxisSize;
                _.crossAxisAlignment = this.crossAxisAlignment;
                _.textDirection = this.getEffectiveTextDirection(context);
                _.verticalDirection = this.verticalDirection;
                _.textBaseline = this.textBaseline;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.EnumProperty('direction',this.direction));
        properties.add(lib5.EnumProperty('mainAxisAlignment',this.mainAxisAlignment));
        properties.add(lib5.EnumProperty('mainAxisSize',this.mainAxisSize,{
            defaultValue : lib28.MainAxisSize.max}));
        properties.add(lib5.EnumProperty('crossAxisAlignment',this.crossAxisAlignment));
        properties.add(lib5.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib5.EnumProperty('verticalDirection',this.verticalDirection,{
            defaultValue : lib22.VerticalDirection.down}));
        properties.add(lib5.EnumProperty('textBaseline',this.textBaseline,{
            defaultValue : null}));
    }
}

export namespace _StatefulBuilderState {
    export type Constructors = lib3.State.Constructors | '_StatefulBuilderState';
    export type Interface = Omit<_StatefulBuilderState, Constructors>;
}
@DartClass
export class _StatefulBuilderState extends lib3.State<StatefulBuilder> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.builder(context,this.setState.bind(this));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StatefulBuilderState() {
    }
}

export namespace KeyedSubtree {
    export type Constructors = lib3.StatelessWidget.Constructors | 'KeyedSubtree';
    export type Interface = Omit<KeyedSubtree, Constructors>;
}
@DartClass
export class KeyedSubtree extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeyedSubtree(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.child = child;
    }
     : any;

     : any;

     : any;

    @namedFactory
    static $wrap(child : lib3.Widget,childIndex : number) : KeyedSubtree {
        let key : lib4.Key = child.key != null ? lib4.ValueKey(child.key) : lib4.ValueKey(childIndex);
        return KeyedSubtree({
            key : key,child : child});
    }
    static wrap : new(child : lib3.Widget,childIndex : number) => KeyedSubtree;

    child : lib3.Widget;

    static ensureUniqueKeysForList(items : core.DartIterable<lib3.Widget>,_namedArguments? : {baseIndex? : number}) : core.DartList<lib3.Widget> {
        let {baseIndex} = Object.assign({
            "baseIndex" : 0}, _namedArguments );
        if (items == null || items.isEmpty) return items;
        let itemsWithUniqueKeys : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let itemIndex : number = baseIndex;
        for(let item of items) {
            itemsWithUniqueKeys.add(KeyedSubtree.wrap(item,itemIndex));
            itemIndex += 1;
        }
        /* TODO (AssertStatementImpl) : assert (!debugItemsHaveDuplicateKeys(itemsWithUniqueKeys)); */;
        return itemsWithUniqueKeys;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.child;
    }
}

export namespace Flexible {
    export type Constructors = lib3.ParentDataWidget.Constructors | 'Flexible';
    export type Interface = Omit<Flexible, Constructors>;
}
@DartClass
export class Flexible extends lib3.ParentDataWidget<Flex> {
    constructor(_namedArguments? : {key? : lib4.Key,flex? : number,fit? : lib28.FlexFit,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Flexible(_namedArguments? : {key? : lib4.Key,flex? : number,fit? : lib28.FlexFit,child? : lib3.Widget}) {
        let {key,flex,fit,child} = Object.assign({
            "flex" : 1,
            "fit" : lib28.FlexFit.loose}, _namedArguments );
        super.ParentDataWidget({
            key : key,child : child});
        this.flex = flex;
        this.fit = fit;
    }
    flex : number;

    fit : lib28.FlexFit;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyParentData(renderObject : lib18.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (renderObject.parentData is FlexParentData); */;
        let parentData : lib28.FlexParentData = renderObject.parentData;
        let needsLayout : boolean = false;
        if (parentData.flex != this.flex) {
            parentData.flex = this.flex;
            needsLayout = true;
        }
        if (parentData.fit != this.fit) {
            parentData.fit = this.fit;
            needsLayout = true;
        }
        if (needsLayout) {
            let targetParent : lib20.AbstractNode = renderObject.parent;
            if (is(targetParent, lib18.RenderObject)) targetParent.markNeedsLayout();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.IntProperty('flex',this.flex));
    }
}

export namespace IndexedSemantics {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'IndexedSemantics';
    export type Interface = Omit<IndexedSemantics, Constructors>;
}
@DartClass
export class IndexedSemantics extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,index? : number,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IndexedSemantics(_namedArguments? : {key? : lib4.Key,index? : number,child? : lib3.Widget}) {
        let {key,index,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.index = index;
    }
     : any;

     : any;

    key;
    child;

     : any;

    index : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderIndexedSemantics {
        return lib6.RenderIndexedSemantics({
            index : this.index});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderIndexedSemantics) : any {
        renderObject.index = this.index;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('index',this.index));
    }
}

export namespace Wrap {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'Wrap';
    export type Interface = Omit<Wrap, Constructors>;
}
@DartClass
export class Wrap extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,direction? : lib22.Axis,alignment? : lib27.WrapAlignment,spacing? : double,runAlignment? : lib27.WrapAlignment,runSpacing? : double,crossAxisAlignment? : lib27.WrapCrossAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Wrap(_namedArguments? : {key? : lib4.Key,direction? : lib22.Axis,alignment? : lib27.WrapAlignment,spacing? : double,runAlignment? : lib27.WrapAlignment,runSpacing? : double,crossAxisAlignment? : lib27.WrapCrossAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,children? : core.DartList<lib3.Widget>}) {
        let {key,direction,alignment,spacing,runAlignment,runSpacing,crossAxisAlignment,textDirection,verticalDirection,children} = Object.assign({
            "direction" : lib22.Axis.horizontal,
            "alignment" : lib27.WrapAlignment.start,
            "spacing" : 0.0,
            "runAlignment" : lib27.WrapAlignment.start,
            "runSpacing" : 0.0,
            "crossAxisAlignment" : lib27.WrapCrossAlignment.start,
            "verticalDirection" : lib22.VerticalDirection.down,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        super.MultiChildRenderObjectWidget({
            key : key,children : children});
        this.direction = direction;
        this.alignment = alignment;
        this.spacing = spacing;
        this.runAlignment = runAlignment;
        this.runSpacing = runSpacing;
        this.crossAxisAlignment = crossAxisAlignment;
        this.textDirection = textDirection;
        this.verticalDirection = verticalDirection;
    }
    direction : lib22.Axis;

    alignment : lib27.WrapAlignment;

    spacing : double;

    runAlignment : lib27.WrapAlignment;

    runSpacing : double;

    crossAxisAlignment : lib27.WrapCrossAlignment;

    textDirection : any;

    verticalDirection : lib22.VerticalDirection;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib27.RenderWrap {
        return lib27.RenderWrap({
            direction : this.direction,alignment : this.alignment,spacing : this.spacing,runAlignment : this.runAlignment,runSpacing : this.runSpacing,crossAxisAlignment : this.crossAxisAlignment,textDirection : (this.textDirection || Directionality.of(context)),verticalDirection : this.verticalDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib27.RenderWrap) : any {
        ((_) : lib27.RenderWrap =>  {
            {
                _.direction = this.direction;
                _.alignment = this.alignment;
                _.spacing = this.spacing;
                _.runAlignment = this.runAlignment;
                _.runSpacing = this.runSpacing;
                _.crossAxisAlignment = this.crossAxisAlignment;
                _.textDirection = (this.textDirection || Directionality.of(context));
                _.verticalDirection = this.verticalDirection;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.EnumProperty('direction',this.direction));
        properties.add(lib5.EnumProperty('alignment',this.alignment));
        properties.add(lib5.DoubleProperty('spacing',this.spacing));
        properties.add(lib5.EnumProperty('runAlignment',this.runAlignment));
        properties.add(lib5.DoubleProperty('runSpacing',this.runSpacing));
        properties.add(lib5.DoubleProperty('crossAxisAlignment',this.runSpacing));
        properties.add(lib5.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib5.EnumProperty('verticalDirection',this.verticalDirection,{
            defaultValue : lib22.VerticalDirection.down}));
    }
}

export namespace Flow {
    export type Constructors = lib3.MultiChildRenderObjectWidget.Constructors | 'Flow' | 'wrapAll' | 'unwrapped';
    export type Interface = Omit<Flow, Constructors>;
}
@DartClass
export class Flow extends lib3.MultiChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,delegate? : lib29.FlowDelegate,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Flow(_namedArguments? : {key? : lib4.Key,delegate? : lib29.FlowDelegate,children? : core.DartList<lib3.Widget>}) {
        let {key,delegate,children} = Object.assign({
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
    }
     : any;

     : any;

    key;
    children;

    @namedConstructor
    wrapAll(children : any) {
    }
    static wrapAll : new(children : any) => Flow;

    @namedConstructor
    unwrapped(_namedArguments? : {key? : lib4.Key,delegate? : lib29.FlowDelegate,children? : core.DartList<lib3.Widget>}) {
        let {key,delegate,children} = Object.assign({
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
    }
    static unwrapped : new(_namedArguments? : {key? : lib4.Key,delegate? : lib29.FlowDelegate,children? : core.DartList<lib3.Widget>}) => Flow;

     : any;

     : any;

    key;
    children;

     : any;

    delegate : lib29.FlowDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib29.RenderFlow {
        return lib29.RenderFlow({
            delegate : this.delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib29.RenderFlow) : any {
        ((_) : lib29.RenderFlow =>  {
            {
                _.delegate = this.delegate;
                return _;
            }
        })(renderObject);
    }
}

export namespace RichText {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | 'RichText';
    export type Interface = Omit<RichText, Constructors>;
}
@DartClass
export class RichText extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,text? : lib30.TextSpan,textAlign? : any,textDirection? : any,softWrap? : boolean,overflow? : lib31.TextOverflow,textScaleFactor? : double,maxLines? : number,locale? : any,strutStyle? : lib32.StrutStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RichText(_namedArguments? : {key? : lib4.Key,text? : lib30.TextSpan,textAlign? : any,textDirection? : any,softWrap? : boolean,overflow? : lib31.TextOverflow,textScaleFactor? : double,maxLines? : number,locale? : any,strutStyle? : lib32.StrutStyle}) {
        let {key,text,textAlign,textDirection,softWrap,overflow,textScaleFactor,maxLines,locale,strutStyle} = Object.assign({
            "textAlign" : TextAlign.start,
            "softWrap" : true,
            "overflow" : lib31.TextOverflow.clip,
            "textScaleFactor" : 1.0}, _namedArguments );
        this.assert = assert;
        this.text = text;
        this.textAlign = textAlign;
        this.textDirection = textDirection;
        this.softWrap = softWrap;
        this.overflow = overflow;
        this.textScaleFactor = textScaleFactor;
        this.maxLines = maxLines;
        this.locale = locale;
        this.strutStyle = strutStyle;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    text : lib30.TextSpan;

    textAlign : any;

    textDirection : any;

    softWrap : boolean;

    overflow : lib31.TextOverflow;

    textScaleFactor : double;

    maxLines : number;

    locale : any;

    strutStyle : lib32.StrutStyle;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib31.RenderParagraph {
        /* TODO (AssertStatementImpl) : assert (textDirection != null || debugCheckHasDirectionality(context)); */;
        return lib31.RenderParagraph(this.text,{
            textAlign : this.textAlign,textDirection : (this.textDirection || Directionality.of(context)),softWrap : this.softWrap,overflow : this.overflow,textScaleFactor : this.textScaleFactor,maxLines : this.maxLines,strutStyle : this.strutStyle,locale : (this.locale || lib33.Localizations.localeOf(context,{
                nullOk : true}))});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib31.RenderParagraph) : any {
        /* TODO (AssertStatementImpl) : assert (textDirection != null || debugCheckHasDirectionality(context)); */;
        ((_) : lib31.RenderParagraph =>  {
            {
                _.text = this.text;
                _.textAlign = this.textAlign;
                _.textDirection = (this.textDirection || Directionality.of(context));
                _.softWrap = this.softWrap;
                _.overflow = this.overflow;
                _.textScaleFactor = this.textScaleFactor;
                _.maxLines = this.maxLines;
                _.strutStyle = this.strutStyle;
                _.locale = (this.locale || lib33.Localizations.localeOf(context,{
                    nullOk : true}));
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.EnumProperty('textAlign',this.textAlign,{
            defaultValue : TextAlign.start}));
        properties.add(lib5.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib5.FlagProperty('softWrap',{
            value : this.softWrap,ifTrue : 'wrapping at box width',ifFalse : 'no wrapping except at line break characters',showName : true}));
        properties.add(lib5.EnumProperty('overflow',this.overflow,{
            defaultValue : lib31.TextOverflow.clip}));
        properties.add(lib5.DoubleProperty('textScaleFactor',this.textScaleFactor,{
            defaultValue : 1.0}));
        properties.add(lib5.IntProperty('maxLines',this.maxLines,{
            ifNull : 'unlimited'}));
        properties.add(lib5.StringProperty('text',this.text.toPlainText()));
    }
}

export namespace RawImage {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | 'RawImage';
    export type Interface = Omit<RawImage, Constructors>;
}
@DartClass
export class RawImage extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,image? : any,width? : double,height? : double,scale? : double,color? : any,colorBlendMode? : any,fit? : lib14.BoxFit,alignment? : lib12.AlignmentGeometry,repeat? : lib34.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,invertColors? : boolean,filterQuality? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawImage(_namedArguments? : {key? : lib4.Key,image? : any,width? : double,height? : double,scale? : double,color? : any,colorBlendMode? : any,fit? : lib14.BoxFit,alignment? : lib12.AlignmentGeometry,repeat? : lib34.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,invertColors? : boolean,filterQuality? : any}) {
        let {key,image,width,height,scale,color,colorBlendMode,fit,alignment,repeat,centerSlice,matchTextDirection,invertColors,filterQuality} = Object.assign({
            "scale" : 1.0,
            "alignment" : lib12.Alignment.center,
            "repeat" : lib34.ImageRepeat.noRepeat,
            "matchTextDirection" : false,
            "invertColors" : false,
            "filterQuality" : FilterQuality.low}, _namedArguments );
        this.assert = assert;
        this.image = image;
        this.width = width;
        this.height = height;
        this.scale = scale;
        this.color = color;
        this.colorBlendMode = colorBlendMode;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.centerSlice = centerSlice;
        this.matchTextDirection = matchTextDirection;
        this.invertColors = invertColors;
        this.filterQuality = filterQuality;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    image : any;

    width : double;

    height : double;

    scale : double;

    color : any;

    filterQuality : any;

    colorBlendMode : any;

    fit : lib14.BoxFit;

    alignment : lib12.AlignmentGeometry;

    repeat : lib34.ImageRepeat;

    centerSlice : any;

    matchTextDirection : boolean;

    invertColors : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib35.RenderImage {
        /* TODO (AssertStatementImpl) : assert ((!matchTextDirection && alignment is Alignment) || debugCheckHasDirectionality(context)); */;
        return lib35.RenderImage({
            image : this.image,width : this.width,height : this.height,scale : this.scale,color : this.color,colorBlendMode : this.colorBlendMode,fit : this.fit,alignment : this.alignment,repeat : this.repeat,centerSlice : this.centerSlice,matchTextDirection : this.matchTextDirection,textDirection : this.matchTextDirection || isNot(this.alignment, lib12.Alignment) ? Directionality.of(context) : null,invertColors : this.invertColors,filterQuality : this.filterQuality});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib35.RenderImage) : any {
        ((_) : lib35.RenderImage =>  {
            {
                _.image = this.image;
                _.width = this.width;
                _.height = this.height;
                _.scale = this.scale;
                _.color = this.color;
                _.colorBlendMode = this.colorBlendMode;
                _.alignment = this.alignment;
                _.fit = this.fit;
                _.repeat = this.repeat;
                _.centerSlice = this.centerSlice;
                _.matchTextDirection = this.matchTextDirection;
                _.textDirection = this.matchTextDirection || isNot(this.alignment, lib12.Alignment) ? Directionality.of(context) : null;
                _.invertColors = this.invertColors;
                _.filterQuality = this.filterQuality;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('image',this.image));
        properties.add(lib5.DoubleProperty('width',this.width,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('height',this.height,{
            defaultValue : null}));
        properties.add(lib5.DoubleProperty('scale',this.scale,{
            defaultValue : 1.0}));
        properties.add(lib5.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib5.EnumProperty('colorBlendMode',this.colorBlendMode,{
            defaultValue : null}));
        properties.add(lib5.EnumProperty('fit',this.fit,{
            defaultValue : null}));
        properties.add(lib5.DiagnosticsProperty('alignment',this.alignment,{
            defaultValue : null}));
        properties.add(lib5.EnumProperty('repeat',this.repeat,{
            defaultValue : lib34.ImageRepeat.noRepeat}));
        properties.add(lib5.DiagnosticsProperty('centerSlice',this.centerSlice,{
            defaultValue : null}));
        properties.add(lib5.FlagProperty('matchTextDirection',{
            value : this.matchTextDirection,ifTrue : 'match text direction'}));
        properties.add(lib5.DiagnosticsProperty('invertColors',this.invertColors));
        properties.add(lib5.EnumProperty('filterQuality',this.filterQuality));
    }
}

export namespace DefaultAssetBundle {
    export type Constructors = lib3.InheritedWidget.Constructors | 'DefaultAssetBundle';
    export type Interface = Omit<DefaultAssetBundle, Constructors>;
}
@DartClass
export class DefaultAssetBundle extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,bundle? : lib36.AssetBundle,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultAssetBundle(_namedArguments? : {key? : lib4.Key,bundle? : lib36.AssetBundle,child? : lib3.Widget}) {
        let {key,bundle,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.bundle = bundle;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    bundle : lib36.AssetBundle;

    static of(context : lib3.BuildContext) : lib36.AssetBundle {
        let result : DefaultAssetBundle = context.inheritFromWidgetOfExactType(DefaultAssetBundle);
        return (((t)=>(!!t)?t.bundle:null)(result) || lib36.properties.rootBundle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : DefaultAssetBundle) : boolean {
        return this.bundle != oldWidget.bundle;
    }
}

export namespace WidgetToRenderBoxAdapter {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | 'WidgetToRenderBoxAdapter';
    export type Interface = Omit<WidgetToRenderBoxAdapter, Constructors>;
}
@DartClass
export class WidgetToRenderBoxAdapter extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {renderBox? : any,onBuild? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WidgetToRenderBoxAdapter(_namedArguments? : {renderBox? : any,onBuild? : any}) {
        let {renderBox,onBuild} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.renderBox = renderBox;
        this.onBuild = onBuild;
    }
     : any;

     : any;

    GlobalObjectKey(renderBox : any) {
    }
    renderBox : any;

    onBuild : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : any {
        return this.renderBox;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : any) : any {
        if (this.onBuild != null) this.onBuild();
    }
}

export namespace Listener {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Listener';
    export type Interface = Omit<Listener, Constructors>;
}
@DartClass
export class Listener extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,onPointerDown? : (event : lib37.PointerDownEvent) => any,onPointerMove? : (event : lib37.PointerMoveEvent) => any,onPointerEnter? : (event : lib37.PointerEnterEvent) => any,onPointerExit? : (event : lib37.PointerExitEvent) => any,onPointerHover? : (event : lib37.PointerHoverEvent) => any,onPointerUp? : (event : lib37.PointerUpEvent) => any,onPointerCancel? : (event : lib37.PointerCancelEvent) => any,behavior? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Listener(_namedArguments? : {key? : lib4.Key,onPointerDown? : (event : lib37.PointerDownEvent) => any,onPointerMove? : (event : lib37.PointerMoveEvent) => any,onPointerEnter? : (event : lib37.PointerEnterEvent) => any,onPointerExit? : (event : lib37.PointerExitEvent) => any,onPointerHover? : (event : lib37.PointerHoverEvent) => any,onPointerUp? : (event : lib37.PointerUpEvent) => any,onPointerCancel? : (event : lib37.PointerCancelEvent) => any,behavior? : any,child? : lib3.Widget}) {
        let {key,onPointerDown,onPointerMove,onPointerEnter,onPointerExit,onPointerHover,onPointerUp,onPointerCancel,behavior,child} = Object.assign({
            "behavior" : HitTestBehavior.deferToChild}, _namedArguments );
        this.assert = assert;
        this.onPointerDown = onPointerDown;
        this.onPointerMove = onPointerMove;
        this.onPointerEnter = onPointerEnter;
        this.onPointerExit = onPointerExit;
        this.onPointerHover = onPointerHover;
        this.onPointerUp = onPointerUp;
        this.onPointerCancel = onPointerCancel;
        this.behavior = behavior;
    }
     : any;

     : any;

    key;
    child;

     : any;

    onPointerDown : (event : lib37.PointerDownEvent) => any;

    onPointerMove : (event : lib37.PointerMoveEvent) => any;

    onPointerEnter : (event : lib37.PointerEnterEvent) => any;

    onPointerHover : (event : lib37.PointerHoverEvent) => any;

    onPointerExit : (event : lib37.PointerExitEvent) => any;

    onPointerUp : (event : lib37.PointerUpEvent) => any;

    onPointerCancel : (event : lib37.PointerCancelEvent) => any;

    behavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderPointerListener {
        return lib6.RenderPointerListener({
            onPointerDown : this.onPointerDown,onPointerMove : this.onPointerMove,onPointerEnter : this.onPointerEnter,onPointerHover : this.onPointerHover,onPointerExit : this.onPointerExit,onPointerUp : this.onPointerUp,onPointerCancel : this.onPointerCancel,behavior : this.behavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderPointerListener) : any {
        ((_) : lib6.RenderPointerListener =>  {
            {
                _.onPointerDown = this.onPointerDown;
                _.onPointerMove = this.onPointerMove;
                _.onPointerEnter = this.onPointerEnter;
                _.onPointerHover = this.onPointerHover;
                _.onPointerExit = this.onPointerExit;
                _.onPointerUp = this.onPointerUp;
                _.onPointerCancel = this.onPointerCancel;
                _.behavior = this.behavior;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let listeners : core.DartList<string> = new core.DartList.literal<string>();
        if (this.onPointerDown != null) listeners.add('down');
        if (this.onPointerMove != null) listeners.add('move');
        if (this.onPointerEnter != null) listeners.add('enter');
        if (this.onPointerExit != null) listeners.add('exit');
        if (this.onPointerHover != null) listeners.add('hover');
        if (this.onPointerUp != null) listeners.add('up');
        if (this.onPointerCancel != null) listeners.add('cancel');
        properties.add(lib5.IterableProperty('listeners',listeners,{
            ifEmpty : '<none>'}));
        properties.add(lib5.EnumProperty('behavior',this.behavior));
    }
}

export namespace RepaintBoundary {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'RepaintBoundary';
    export type Interface = Omit<RepaintBoundary, Constructors>;
}
@DartClass
export class RepaintBoundary extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RepaintBoundary(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    @namedFactory
    static $wrap(child : lib3.Widget,childIndex : number) : RepaintBoundary {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        let key : lib4.Key = child.key != null ? lib4.ValueKey(child.key) : lib4.ValueKey(childIndex);
        return RepaintBoundary({
            key : key,child : child});
    }
    static wrap : new(child : lib3.Widget,childIndex : number) => RepaintBoundary;

    static wrapAll(widgets : core.DartList<lib3.Widget>) : core.DartList<RepaintBoundary> {
        let result : core.DartList<RepaintBoundary> = core.DartList(widgets.length);
        for(let i : number = 0; i < result.length; ++i)result[i] = RepaintBoundary.wrap(widgets[i],i);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderRepaintBoundary {
        return lib6.RenderRepaintBoundary();
    }
}

export namespace ExcludeSemantics {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'ExcludeSemantics';
    export type Interface = Omit<ExcludeSemantics, Constructors>;
}
@DartClass
export class ExcludeSemantics extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,excluding? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExcludeSemantics(_namedArguments? : {key? : lib4.Key,excluding? : boolean,child? : lib3.Widget}) {
        let {key,excluding,child} = Object.assign({
            "excluding" : true}, _namedArguments );
        this.assert = assert;
        this.excluding = excluding;
    }
     : any;

     : any;

    key;
    child;

     : any;

    excluding : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderExcludeSemantics {
        return lib6.RenderExcludeSemantics({
            excluding : this.excluding});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderExcludeSemantics) : any {
        renderObject.excluding = this.excluding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('excluding',this.excluding));
    }
}

export namespace AbsorbPointer {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'AbsorbPointer';
    export type Interface = Omit<AbsorbPointer, Constructors>;
}
@DartClass
export class AbsorbPointer extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,absorbing? : boolean,child? : lib3.Widget,ignoringSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbsorbPointer(_namedArguments? : {key? : lib4.Key,absorbing? : boolean,child? : lib3.Widget,ignoringSemantics? : boolean}) {
        let {key,absorbing,child,ignoringSemantics} = Object.assign({
            "absorbing" : true}, _namedArguments );
        this.assert = assert;
        this.absorbing = absorbing;
        this.ignoringSemantics = ignoringSemantics;
    }
     : any;

     : any;

    key;
    child;

     : any;

    absorbing : boolean;

    ignoringSemantics : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderAbsorbPointer {
        return lib6.RenderAbsorbPointer({
            absorbing : this.absorbing,ignoringSemantics : this.ignoringSemantics});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderAbsorbPointer) : any {
        ((_) : lib6.RenderAbsorbPointer =>  {
            {
                _.absorbing = this.absorbing;
                _.ignoringSemantics = this.ignoringSemantics;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('absorbing',this.absorbing));
        properties.add(lib5.DiagnosticsProperty('ignoringSemantics',this.ignoringSemantics,{
            defaultValue : null}));
    }
}

export namespace MetaData {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'MetaData';
    export type Interface = Omit<MetaData, Constructors>;
}
@DartClass
export class MetaData extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,metaData? : any,behavior? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MetaData(_namedArguments? : {key? : lib4.Key,metaData? : any,behavior? : any,child? : lib3.Widget}) {
        let {key,metaData,behavior,child} = Object.assign({
            "behavior" : HitTestBehavior.deferToChild}, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.metaData = metaData;
        this.behavior = behavior;
    }
    metaData : any;

    behavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderMetaData {
        return lib6.RenderMetaData({
            metaData : this.metaData,behavior : this.behavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderMetaData) : any {
        ((_) : lib6.RenderMetaData =>  {
            {
                _.metaData = this.metaData;
                _.behavior = this.behavior;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.EnumProperty('behavior',this.behavior));
        properties.add(lib5.DiagnosticsProperty('metaData',this.metaData));
    }
}

export namespace Semantics {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'Semantics' | 'fromProperties';
    export type Interface = Omit<Semantics, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Semantics extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,container? : boolean,explicitChildNodes? : boolean,excludeSemantics? : boolean,enabled? : boolean,checked? : boolean,selected? : boolean,toggled? : boolean,button? : boolean,header? : boolean,textField? : boolean,focused? : boolean,inMutuallyExclusiveGroup? : boolean,obscured? : boolean,scopesRoute? : boolean,namesRoute? : boolean,hidden? : boolean,image? : boolean,liveRegion? : boolean,label? : string,value? : string,increasedValue? : string,decreasedValue? : string,hint? : string,onTapHint? : string,onLongPressHint? : string,textDirection? : any,sortKey? : lib38.SemanticsSortKey,onTap? : any,onLongPress? : any,onScrollLeft? : any,onScrollRight? : any,onScrollUp? : any,onScrollDown? : any,onIncrease? : any,onDecrease? : any,onCopy? : any,onCut? : any,onPaste? : any,onDismiss? : any,onMoveCursorForwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorBackwardByCharacter? : (extendSelection : boolean) => any,onSetSelection? : (selection : lib39.TextSelection) => any,onDidGainAccessibilityFocus? : any,onDidLoseAccessibilityFocus? : any,customSemanticsActions? : core.DartMap<lib38.CustomSemanticsAction,any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Semantics(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,container? : boolean,explicitChildNodes? : boolean,excludeSemantics? : boolean,enabled? : boolean,checked? : boolean,selected? : boolean,toggled? : boolean,button? : boolean,header? : boolean,textField? : boolean,focused? : boolean,inMutuallyExclusiveGroup? : boolean,obscured? : boolean,scopesRoute? : boolean,namesRoute? : boolean,hidden? : boolean,image? : boolean,liveRegion? : boolean,label? : string,value? : string,increasedValue? : string,decreasedValue? : string,hint? : string,onTapHint? : string,onLongPressHint? : string,textDirection? : any,sortKey? : lib38.SemanticsSortKey,onTap? : any,onLongPress? : any,onScrollLeft? : any,onScrollRight? : any,onScrollUp? : any,onScrollDown? : any,onIncrease? : any,onDecrease? : any,onCopy? : any,onCut? : any,onPaste? : any,onDismiss? : any,onMoveCursorForwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorBackwardByCharacter? : (extendSelection : boolean) => any,onSetSelection? : (selection : lib39.TextSelection) => any,onDidGainAccessibilityFocus? : any,onDidLoseAccessibilityFocus? : any,customSemanticsActions? : core.DartMap<lib38.CustomSemanticsAction,any>}) {
        let {key,child,container,explicitChildNodes,excludeSemantics,enabled,checked,selected,toggled,button,header,textField,focused,inMutuallyExclusiveGroup,obscured,scopesRoute,namesRoute,hidden,image,liveRegion,label,value,increasedValue,decreasedValue,hint,onTapHint,onLongPressHint,textDirection,sortKey,onTap,onLongPress,onScrollLeft,onScrollRight,onScrollUp,onScrollDown,onIncrease,onDecrease,onCopy,onCut,onPaste,onDismiss,onMoveCursorForwardByCharacter,onMoveCursorBackwardByCharacter,onSetSelection,onDidGainAccessibilityFocus,onDidLoseAccessibilityFocus,customSemanticsActions} = Object.assign({
            "container" : false,
            "explicitChildNodes" : false,
            "excludeSemantics" : false}, _namedArguments );
        this.fromProperties({
            key : key,child : child,container : container,explicitChildNodes : explicitChildNodes,excludeSemantics : excludeSemantics,properties : lib38.SemanticsProperties({
                enabled : enabled,checked : checked,toggled : toggled,selected : selected,button : button,header : header,textField : textField,focused : focused,inMutuallyExclusiveGroup : inMutuallyExclusiveGroup,obscured : obscured,scopesRoute : scopesRoute,namesRoute : namesRoute,hidden : hidden,image : image,liveRegion : liveRegion,label : label,value : value,increasedValue : increasedValue,decreasedValue : decreasedValue,hint : hint,textDirection : textDirection,sortKey : sortKey,onTap : onTap,onLongPress : onLongPress,onScrollLeft : onScrollLeft,onScrollRight : onScrollRight,onScrollUp : onScrollUp,onScrollDown : onScrollDown,onIncrease : onIncrease,onDecrease : onDecrease,onCopy : onCopy,onCut : onCut,onPaste : onPaste,onMoveCursorForwardByCharacter : onMoveCursorForwardByCharacter,onMoveCursorBackwardByCharacter : onMoveCursorBackwardByCharacter,onDidGainAccessibilityFocus : onDidGainAccessibilityFocus,onDidLoseAccessibilityFocus : onDidLoseAccessibilityFocus,onDismiss : onDismiss,onSetSelection : onSetSelection,customSemanticsActions : customSemanticsActions,hintOverrides : onTapHint != null || onLongPressHint != null ? lib38.SemanticsHintOverrides({
                    onTapHint : onTapHint,onLongPressHint : onLongPressHint}) : null})});
    }
    @namedConstructor
    fromProperties(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,container? : boolean,explicitChildNodes? : boolean,excludeSemantics? : boolean,properties? : lib38.SemanticsProperties}) {
        let {key,child,container,explicitChildNodes,excludeSemantics,properties} = Object.assign({
            "container" : false,
            "explicitChildNodes" : false,
            "excludeSemantics" : false}, _namedArguments );
        this.assert = assert;
        this.container = container;
        this.explicitChildNodes = explicitChildNodes;
        this.excludeSemantics = excludeSemantics;
        this.properties = properties;
    }
    static fromProperties : new(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,container? : boolean,explicitChildNodes? : boolean,excludeSemantics? : boolean,properties? : lib38.SemanticsProperties}) => Semantics;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    properties : lib38.SemanticsProperties;

    container : boolean;

    explicitChildNodes : boolean;

    excludeSemantics : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderSemanticsAnnotations {
        return lib6.RenderSemanticsAnnotations({
            container : this.container,explicitChildNodes : this.explicitChildNodes,excludeSemantics : this.excludeSemantics,enabled : this.properties.enabled,checked : this.properties.checked,toggled : this.properties.toggled,selected : this.properties.selected,button : this.properties.button,header : this.properties.header,textField : this.properties.textField,focused : this.properties.focused,liveRegion : this.properties.liveRegion,inMutuallyExclusiveGroup : this.properties.inMutuallyExclusiveGroup,obscured : this.properties.obscured,scopesRoute : this.properties.scopesRoute,namesRoute : this.properties.namesRoute,hidden : this.properties.hidden,image : this.properties.image,label : this.properties.label,value : this.properties.value,increasedValue : this.properties.increasedValue,decreasedValue : this.properties.decreasedValue,hint : this.properties.hint,hintOverrides : this.properties.hintOverrides,textDirection : this._getTextDirection(context),sortKey : this.properties.sortKey,onTap : this.properties.onTap,onLongPress : this.properties.onLongPress,onScrollLeft : this.properties.onScrollLeft,onScrollRight : this.properties.onScrollRight,onScrollUp : this.properties.onScrollUp,onScrollDown : this.properties.onScrollDown,onIncrease : this.properties.onIncrease,onDecrease : this.properties.onDecrease,onCopy : this.properties.onCopy,onDismiss : this.properties.onDismiss,onCut : this.properties.onCut,onPaste : this.properties.onPaste,onMoveCursorForwardByCharacter : this.properties.onMoveCursorForwardByCharacter,onMoveCursorBackwardByCharacter : this.properties.onMoveCursorBackwardByCharacter,onMoveCursorForwardByWord : this.properties.onMoveCursorForwardByWord,onMoveCursorBackwardByWord : this.properties.onMoveCursorBackwardByWord,onSetSelection : this.properties.onSetSelection,onDidGainAccessibilityFocus : this.properties.onDidGainAccessibilityFocus,onDidLoseAccessibilityFocus : this.properties.onDidLoseAccessibilityFocus,customSemanticsActions : this.properties.customSemanticsActions});
    }
    _getTextDirection(context : lib3.BuildContext) : any {
        if (this.properties.textDirection != null) return this.properties.textDirection;
        let containsText : boolean = this.properties.label != null || this.properties.value != null || this.properties.hint != null;
        if (!containsText) return null;
        return Directionality.of(context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderSemanticsAnnotations) : any {
        ((_) : lib6.RenderSemanticsAnnotations =>  {
            {
                _.container = this.container;
                _.explicitChildNodes = this.explicitChildNodes;
                _.excludeSemantics = this.excludeSemantics;
                _.scopesRoute = this.properties.scopesRoute;
                _.enabled = this.properties.enabled;
                _.checked = this.properties.checked;
                _.toggled = this.properties.toggled;
                _.selected = this.properties.selected;
                _.button = this.properties.button;
                _.header = this.properties.header;
                _.textField = this.properties.textField;
                _.focused = this.properties.focused;
                _.inMutuallyExclusiveGroup = this.properties.inMutuallyExclusiveGroup;
                _.obscured = this.properties.obscured;
                _.hidden = this.properties.hidden;
                _.image = this.properties.image;
                _.liveRegion = this.properties.liveRegion;
                _.label = this.properties.label;
                _.value = this.properties.value;
                _.increasedValue = this.properties.increasedValue;
                _.decreasedValue = this.properties.decreasedValue;
                _.hint = this.properties.hint;
                _.hintOverrides = this.properties.hintOverrides;
                _.namesRoute = this.properties.namesRoute;
                _.textDirection = this._getTextDirection(context);
                _.sortKey = this.properties.sortKey;
                _.onTap = this.properties.onTap;
                _.onLongPress = this.properties.onLongPress;
                _.onScrollLeft = this.properties.onScrollLeft;
                _.onScrollRight = this.properties.onScrollRight;
                _.onScrollUp = this.properties.onScrollUp;
                _.onScrollDown = this.properties.onScrollDown;
                _.onIncrease = this.properties.onIncrease;
                _.onDismiss = this.properties.onDismiss;
                _.onDecrease = this.properties.onDecrease;
                _.onCopy = this.properties.onCopy;
                _.onCut = this.properties.onCut;
                _.onPaste = this.properties.onPaste;
                _.onMoveCursorForwardByCharacter = this.properties.onMoveCursorForwardByCharacter;
                _.onMoveCursorBackwardByCharacter = this.properties.onMoveCursorForwardByCharacter;
                _.onMoveCursorForwardByWord = this.properties.onMoveCursorForwardByWord;
                _.onMoveCursorBackwardByWord = this.properties.onMoveCursorBackwardByWord;
                _.onSetSelection = this.properties.onSetSelection;
                _.onDidGainAccessibilityFocus = this.properties.onDidGainAccessibilityFocus;
                _.onDidLoseAccessibilityFocus = this.properties.onDidLoseAccessibilityFocus;
                _.customSemanticsActions = this.properties.customSemanticsActions;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('container',this.container));
        properties.add(lib5.DiagnosticsProperty('properties',this.properties));
        this.properties.debugFillProperties(properties);
    }
}

export namespace MergeSemantics {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'MergeSemantics';
    export type Interface = Omit<MergeSemantics, Constructors>;
}
@DartClass
export class MergeSemantics extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MergeSemantics(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderMergeSemantics {
        return lib6.RenderMergeSemantics();
    }
}

export namespace BlockSemantics {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'BlockSemantics';
    export type Interface = Omit<BlockSemantics, Constructors>;
}
@DartClass
export class BlockSemantics extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,blocking? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BlockSemantics(_namedArguments? : {key? : lib4.Key,blocking? : boolean,child? : lib3.Widget}) {
        let {key,blocking,child} = Object.assign({
            "blocking" : true}, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.blocking = blocking;
    }
    blocking : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderBlockSemantics {
        return lib6.RenderBlockSemantics({
            blocking : this.blocking});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderBlockSemantics) : any {
        renderObject.blocking = this.blocking;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('blocking',this.blocking));
    }
}

export namespace IgnorePointer {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'IgnorePointer';
    export type Interface = Omit<IgnorePointer, Constructors>;
}
@DartClass
export class IgnorePointer extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,ignoring? : boolean,ignoringSemantics? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IgnorePointer(_namedArguments? : {key? : lib4.Key,ignoring? : boolean,ignoringSemantics? : boolean,child? : lib3.Widget}) {
        let {key,ignoring,ignoringSemantics,child} = Object.assign({
            "ignoring" : true}, _namedArguments );
        this.assert = assert;
        this.ignoring = ignoring;
        this.ignoringSemantics = ignoringSemantics;
    }
     : any;

     : any;

    key;
    child;

     : any;

    ignoring : boolean;

    ignoringSemantics : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderIgnorePointer {
        return lib6.RenderIgnorePointer({
            ignoring : this.ignoring,ignoringSemantics : this.ignoringSemantics});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib6.RenderIgnorePointer) : any {
        ((_) : lib6.RenderIgnorePointer =>  {
            {
                _.ignoring = this.ignoring;
                _.ignoringSemantics = this.ignoringSemantics;
                return _;
            }
        })(renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('ignoring',this.ignoring));
        properties.add(lib5.DiagnosticsProperty('ignoringSemantics',this.ignoringSemantics,{
            defaultValue : null}));
    }
}

export namespace Expanded {
    export type Constructors = Flexible.Constructors | 'Expanded';
    export type Interface = Omit<Expanded, Constructors>;
}
@DartClass
export class Expanded extends Flexible {
    constructor(_namedArguments? : {key? : lib4.Key,flex? : number,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Expanded(_namedArguments? : {key? : lib4.Key,flex? : number,child? : lib3.Widget}) {
        let {key,flex,child} = Object.assign({
            "flex" : 1}, _namedArguments );
        super.Flexible({
            key : key,flex : flex,fit : lib28.FlexFit.tight,child : child});
    }
}

export namespace Column {
    export type Constructors = Flex.Constructors | 'Column';
    export type Interface = Omit<Column, Constructors>;
}
@DartClass
export class Column extends Flex {
    constructor(_namedArguments? : {key? : lib4.Key,mainAxisAlignment? : lib28.MainAxisAlignment,mainAxisSize? : lib28.MainAxisSize,crossAxisAlignment? : lib28.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,textBaseline? : any,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Column(_namedArguments? : {key? : lib4.Key,mainAxisAlignment? : lib28.MainAxisAlignment,mainAxisSize? : lib28.MainAxisSize,crossAxisAlignment? : lib28.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,textBaseline? : any,children? : core.DartList<lib3.Widget>}) {
        let {key,mainAxisAlignment,mainAxisSize,crossAxisAlignment,textDirection,verticalDirection,textBaseline,children} = Object.assign({
            "mainAxisAlignment" : lib28.MainAxisAlignment.start,
            "mainAxisSize" : lib28.MainAxisSize.max,
            "crossAxisAlignment" : lib28.CrossAxisAlignment.center,
            "verticalDirection" : lib22.VerticalDirection.down,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        super.Flex({
            children : children,key : key,direction : lib22.Axis.vertical,mainAxisAlignment : mainAxisAlignment,mainAxisSize : mainAxisSize,crossAxisAlignment : crossAxisAlignment,textDirection : textDirection,verticalDirection : verticalDirection,textBaseline : textBaseline});
    }
}

export namespace IndexedStack {
    export type Constructors = Stack.Constructors | 'IndexedStack';
    export type Interface = Omit<IndexedStack, Constructors>;
}
@DartClass
export class IndexedStack extends Stack {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,textDirection? : any,sizing? : lib26.StackFit,index? : number,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IndexedStack(_namedArguments? : {key? : lib4.Key,alignment? : lib12.AlignmentGeometry,textDirection? : any,sizing? : lib26.StackFit,index? : number,children? : core.DartList<lib3.Widget>}) {
        let {key,alignment,textDirection,sizing,index,children} = Object.assign({
            "alignment" : lib12.AlignmentDirectional.topStart,
            "sizing" : lib26.StackFit.loose,
            "index" : 0,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        super.Stack({
            key : key,alignment : alignment,textDirection : textDirection,fit : sizing,children : children});
        this.index = index;
    }
    index : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib26.RenderIndexedStack {
        return lib26.RenderIndexedStack({
            index : this.index,alignment : lib27.properties.alignment,textDirection : (lib27.properties.textDirection || Directionality.of(context))});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib26.RenderIndexedStack) : any {
        ((_) : lib26.RenderIndexedStack =>  {
            {
                _.index = this.index;
                _.alignment = lib27.properties.alignment;
                _.textDirection = (lib27.properties.textDirection || Directionality.of(context));
                return _;
            }
        })(renderObject);
    }
}

export namespace Center {
    export type Constructors = Align.Constructors | 'Center';
    export type Interface = Omit<Center, Constructors>;
}
@DartClass
export class Center extends Align {
    constructor(_namedArguments? : {key? : lib4.Key,widthFactor? : double,heightFactor? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Center(_namedArguments? : {key? : lib4.Key,widthFactor? : double,heightFactor? : double,child? : lib3.Widget}) {
        let {key,widthFactor,heightFactor,child} = Object.assign({
        }, _namedArguments );
        super.Align({
            key : key,widthFactor : widthFactor,heightFactor : heightFactor,child : child});
    }
}

export namespace Row {
    export type Constructors = Flex.Constructors | 'Row';
    export type Interface = Omit<Row, Constructors>;
}
@DartClass
export class Row extends Flex {
    constructor(_namedArguments? : {key? : lib4.Key,mainAxisAlignment? : lib28.MainAxisAlignment,mainAxisSize? : lib28.MainAxisSize,crossAxisAlignment? : lib28.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,textBaseline? : any,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Row(_namedArguments? : {key? : lib4.Key,mainAxisAlignment? : lib28.MainAxisAlignment,mainAxisSize? : lib28.MainAxisSize,crossAxisAlignment? : lib28.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib22.VerticalDirection,textBaseline? : any,children? : core.DartList<lib3.Widget>}) {
        let {key,mainAxisAlignment,mainAxisSize,crossAxisAlignment,textDirection,verticalDirection,textBaseline,children} = Object.assign({
            "mainAxisAlignment" : lib28.MainAxisAlignment.start,
            "mainAxisSize" : lib28.MainAxisSize.max,
            "crossAxisAlignment" : lib28.CrossAxisAlignment.center,
            "verticalDirection" : lib22.VerticalDirection.down,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        super.Flex({
            children : children,key : key,direction : lib22.Axis.horizontal,mainAxisAlignment : mainAxisAlignment,mainAxisSize : mainAxisSize,crossAxisAlignment : crossAxisAlignment,textDirection : textDirection,verticalDirection : verticalDirection,textBaseline : textBaseline});
    }
}

export class properties {
}
