/** Library asset:datahedgehog_monitor/lib/lib/widgets/layout_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib6 from "./debug";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";

export var _debugReportException : (context : string,exception : any,stack : core.DartStackTrace) => lib10.FlutterErrorDetails = (context : string,exception : any,stack : core.DartStackTrace) : lib10.FlutterErrorDetails =>  {
    let details : lib10.FlutterErrorDetails = lib10.FlutterErrorDetails({
        exception : exception,stack : stack,library : 'widgets library',context : context});
    lib10.FlutterError.reportError(details);
    return details;
};
export namespace LayoutBuilder {
    export type Constructors = lib3.RenderObjectWidget.Constructors | 'LayoutBuilder';
    export type Interface = Omit<LayoutBuilder, Constructors>;
}
@DartClass
export class LayoutBuilder extends lib3.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext,constraints : lib5.BoxConstraints) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LayoutBuilder(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext,constraints : lib5.BoxConstraints) => lib3.Widget}) {
        let {key,builder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.builder = builder;
    }
     : any;

     : any;

     : any;

    builder : (context : lib3.BuildContext,constraints : lib5.BoxConstraints) => lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _LayoutBuilderElement {
        return _LayoutBuilderElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : _RenderLayoutBuilder {
        return _RenderLayoutBuilder();
    }
}

export namespace _LayoutBuilderElement {
    export type Constructors = lib3.RenderObjectElement.Constructors | '_LayoutBuilderElement';
    export type Interface = Omit<_LayoutBuilderElement, Constructors>;
}
@DartClass
export class _LayoutBuilderElement extends lib3.RenderObjectElement {
    constructor(widget : LayoutBuilder) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LayoutBuilderElement(widget : LayoutBuilder) {
        super.RenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : LayoutBuilder {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : _RenderLayoutBuilder {
        return super.renderObject;
    }
    _child : lib3.Element;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib3.Element) => any) : any {
        if (this._child != null) visitor(this._child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib3.Element) : any {
        /* TODO (AssertStatementImpl) : assert (child == _child); */;
        this._child = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib3.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this.renderObject.callback = this._layout.bind(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : LayoutBuilder) : any {
        /* TODO (AssertStatementImpl) : assert (widget != newWidget); */;
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this.renderObject.callback = this._layout.bind(this);
        this.renderObject.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performRebuild() : any {
        this.renderObject.markNeedsLayout();
        super.performRebuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unmount() : any {
        this.renderObject.callback = null;
        super.unmount();
    }
    _layout(constraints : lib5.BoxConstraints) : any {
        this.owner.buildScope(this,() =>  {
            let built : lib3.Widget;
            if (this.widget.builder != null) {
                try {
                    built = this.widget.builder(this,constraints);
                    lib6.debugWidgetBuilderValue(this.widget,built);
                } catch (__error__) {

                    {
                        let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        built = lib3.ErrorWidget.builder(_debugReportException(`building ${this.widget}`,e,stack));
                    }
                }
            }
            try {
                this._child = this.updateChild(this._child,built,null);
                /* TODO (AssertStatementImpl) : assert (_child != null); */;
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    built = lib3.ErrorWidget.builder(_debugReportException(`building ${this.widget}`,e,stack));
                    this._child = this.updateChild(null,built,this.slot);
                }
            }
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib7.RenderObject,slot : any) : any {
        let renderObject : any = this.renderObject;
        /* TODO (AssertStatementImpl) : assert (slot == null); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.debugValidateChild(child)); */;
        renderObject.child = child;
        /* TODO (AssertStatementImpl) : assert (renderObject == this.renderObject); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib7.RenderObject,slot : any) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib7.RenderObject) : any {
        let renderObject : _RenderLayoutBuilder = this.renderObject;
        /* TODO (AssertStatementImpl) : assert (renderObject.child == child); */;
        renderObject.child = null;
        /* TODO (AssertStatementImpl) : assert (renderObject == this.renderObject); */;
    }
}

export namespace _RenderLayoutBuilder {
    export type Constructors = '_RenderLayoutBuilder';
    export type Interface = Omit<_RenderLayoutBuilder, Constructors>;
}
@DartClass
@With(any)
export class _RenderLayoutBuilder extends any implements any.Interface {
    constructor(_namedArguments? : {callback? : <T extends lib7.Constraints>(constraints : lib5.BoxConstraints) => any}) {
    }
    @defaultConstructor
    _RenderLayoutBuilder(_namedArguments? : {callback? : <T extends lib7.Constraints>(constraints : lib5.BoxConstraints) => any}) {
        let {callback} = Object.assign({
        }, _namedArguments );
        this._callback = callback;
    }
    get callback() : <T extends lib7.Constraints>(constraints : lib5.BoxConstraints) => any {
        return this._callback;
    }
    _callback : <T extends lib7.Constraints>(constraints : lib5.BoxConstraints) => any;

    set callback(value : <T extends lib7.Constraints>(constraints : lib5.BoxConstraints) => any) {
        if (op(Op.EQUALS,value,this._callback)) return;
        this._callback = value;
        markNeedsLayout();
    }
    _debugThrowIfNotCheckingIntrinsics() : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (!RenderObject.debugCheckingIntrinsics) {throw FlutterError('LayoutBuilder does not support returning intrinsic dimensions.\n' 'Calculating the intrinsic dimensions would require running the layout ' 'callback speculatively, which might mutate the live render object tree.');} return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        /* TODO (AssertStatementImpl) : assert (_debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        /* TODO (AssertStatementImpl) : assert (_debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (_debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (_debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        /* TODO (AssertStatementImpl) : assert (callback != null); */;
        invokeLayoutCallback(this.callback);
        if (child != null) {
            child.layout(constraints,{
                parentUsesSize : true});
            lib8.properties.size = constraints.constrain(child.size);
        }else {
            lib8.properties.size = constraints.biggest;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib9.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return (((_926_)=>(!!_926_)?_926_.hitTest(result,{
            position : position}):null)(child) || false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib7.PaintingContext,offset : any) : any {
        if (child != null) context.paintChild(child,offset);
    }
}

export class properties {
}
