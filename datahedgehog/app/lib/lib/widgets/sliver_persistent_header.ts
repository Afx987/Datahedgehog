/** Library asset:datahedgehog_monitor/lib/lib/widgets/sliver_persistent_header.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_persistent_header";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/flow";

export var RenderSliverPersistentHeader : () => any = () : any =>  {
    let _element : _SliverPersistentHeaderElement;
    var minExtent : () => double = () : double =>  {
        return _element.widget.delegate.minExtent;
    };
    var maxExtent : () => double = () : double =>  {
        return _element.widget.delegate.maxExtent;
    };
    var updateChild : (shrinkOffset : double,overlapsContent : boolean) => any = (shrinkOffset : double,overlapsContent : boolean) : any =>  {
        /* TODO (AssertStatementImpl) : assert (_element != null); */;
        _element._build(shrinkOffset,overlapsContent);
    };
    var triggerRebuild : () => any = () : any =>  {
        markNeedsLayout();
    };
};
export namespace SliverPersistentHeaderDelegate {
    export type Constructors = 'SliverPersistentHeaderDelegate';
    export type Interface = Omit<SliverPersistentHeaderDelegate, Constructors>;
}
@DartClass
export class SliverPersistentHeaderDelegate {
    constructor() {
    }
    @defaultConstructor
    SliverPersistentHeaderDelegate() {
    }
    @Abstract
    build(context : lib3.BuildContext,shrinkOffset : double,overlapsContent : boolean) : lib3.Widget{ throw 'abstract'}
    @AbstractProperty
    get minExtent() : double{ throw 'abstract'}
    @AbstractProperty
    get maxExtent() : double{ throw 'abstract'}
    get snapConfiguration() : lib4.FloatingHeaderSnapConfiguration {
        return null;
    }
    @Abstract
    shouldRebuild(oldDelegate : SliverPersistentHeaderDelegate) : boolean{ throw 'abstract'}
}

export namespace SliverPersistentHeader {
    export type Constructors = lib3.StatelessWidget.Constructors | 'SliverPersistentHeader';
    export type Interface = Omit<SliverPersistentHeader, Constructors>;
}
@DartClass
export class SliverPersistentHeader extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate,pinned? : boolean,floating? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverPersistentHeader(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate,pinned? : boolean,floating? : boolean}) {
        let {key,delegate,pinned,floating} = Object.assign({
            "pinned" : false,
            "floating" : false}, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
        this.pinned = pinned;
        this.floating = floating;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    delegate : SliverPersistentHeaderDelegate;

    pinned : boolean;

    floating : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (this.floating && this.pinned) return _SliverFloatingPinnedPersistentHeader({
            delegate : this.delegate});
        if (this.pinned) return _SliverPinnedPersistentHeader({
            delegate : this.delegate});
        if (this.floating) return _SliverFloatingPersistentHeader({
            delegate : this.delegate});
        return _SliverScrollingPersistentHeader({
            delegate : this.delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.DiagnosticsProperty('delegate',this.delegate));
        let flags : core.DartList<string> = new core.DartList.literal<string>();
        if (this.pinned) flags.add('pinned');
        if (this.floating) flags.add('floating');
        if (flags.isEmpty) flags.add('normal');
        properties.add(lib6.IterableProperty('mode',flags));
    }
}

export namespace _SliverPersistentHeaderElement {
    export type Constructors = lib3.RenderObjectElement.Constructors | '_SliverPersistentHeaderElement';
    export type Interface = Omit<_SliverPersistentHeaderElement, Constructors>;
}
@DartClass
export class _SliverPersistentHeaderElement extends lib3.RenderObjectElement {
    constructor(widget : _SliverPersistentHeaderRenderObjectWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverPersistentHeaderElement(widget : _SliverPersistentHeaderRenderObjectWidget) {
        super.RenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : _SliverPersistentHeaderRenderObjectWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : any {
        return super.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib3.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this.renderObject._element = this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unmount() : any {
        super.unmount();
        this.renderObject._element = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : _SliverPersistentHeaderRenderObjectWidget) : any {
        let oldWidget : _SliverPersistentHeaderRenderObjectWidget = this.widget;
        super.update(newWidget);
        let newDelegate : SliverPersistentHeaderDelegate = newWidget.delegate;
        let oldDelegate : SliverPersistentHeaderDelegate = oldWidget.delegate;
        if (newDelegate != oldDelegate && (newDelegate.runtimeType != oldDelegate.runtimeType || newDelegate.shouldRebuild(oldDelegate))) this.renderObject.triggerRebuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performRebuild() : any {
        super.performRebuild();
        this.renderObject.triggerRebuild();
    }
    child : lib3.Element;

    _build(shrinkOffset : double,overlapsContent : boolean) : any {
        this.owner.buildScope(this,() =>  {
            this.child = this.updateChild(this.child,this.widget.delegate.build(this,shrinkOffset,overlapsContent),null);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib3.Element) : any {
        /* TODO (AssertStatementImpl) : assert (child == this.child); */;
        this.child = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib7.RenderObject,slot : any) : any {
        /* TODO (AssertStatementImpl) : assert (renderObject.debugValidateChild(child)); */;
        this.renderObject.child = child;
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
        this.renderObject.child = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib3.Element) => any) : any {
        if (this.child != null) visitor(this.child);
    }
}

export namespace _SliverPersistentHeaderRenderObjectWidget {
    export type Constructors = lib3.RenderObjectWidget.Constructors | '_SliverPersistentHeaderRenderObjectWidget';
    export type Interface = Omit<_SliverPersistentHeaderRenderObjectWidget, Constructors>;
}
@DartClass
export class _SliverPersistentHeaderRenderObjectWidget extends lib3.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverPersistentHeaderRenderObjectWidget(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        let {key,delegate} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
    }
     : any;

     : any;

     : any;

    delegate : SliverPersistentHeaderDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _SliverPersistentHeaderElement {
        return _SliverPersistentHeaderElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createRenderObject(context : lib3.BuildContext) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib6.DiagnosticsProperty('delegate',this.delegate));
    }
}

export namespace _RenderSliverScrollingPersistentHeader {
    export type Constructors = lib4.RenderSliverScrollingPersistentHeader.Constructors | '_RenderSliverScrollingPersistentHeader';
    export type Interface = Omit<_RenderSliverScrollingPersistentHeader, Constructors>;
}
@DartClass
export class _RenderSliverScrollingPersistentHeader extends lib4.RenderSliverScrollingPersistentHeader {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverScrollingPersistentHeader() {
    }
}

export namespace _RenderSliverPinnedPersistentHeader {
    export type Constructors = lib4.RenderSliverPinnedPersistentHeader.Constructors | '_RenderSliverPinnedPersistentHeader';
    export type Interface = Omit<_RenderSliverPinnedPersistentHeader, Constructors>;
}
@DartClass
export class _RenderSliverPinnedPersistentHeader extends lib4.RenderSliverPinnedPersistentHeader {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverPinnedPersistentHeader() {
    }
}

export namespace _RenderSliverFloatingPinnedPersistentHeader {
    export type Constructors = lib4.RenderSliverFloatingPinnedPersistentHeader.Constructors | '_RenderSliverFloatingPinnedPersistentHeader';
    export type Interface = Omit<_RenderSliverFloatingPinnedPersistentHeader, Constructors>;
}
@DartClass
export class _RenderSliverFloatingPinnedPersistentHeader extends lib4.RenderSliverFloatingPinnedPersistentHeader {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverFloatingPinnedPersistentHeader() {
    }
}

export namespace _RenderSliverFloatingPersistentHeader {
    export type Constructors = lib4.RenderSliverFloatingPersistentHeader.Constructors | '_RenderSliverFloatingPersistentHeader';
    export type Interface = Omit<_RenderSliverFloatingPersistentHeader, Constructors>;
}
@DartClass
export class _RenderSliverFloatingPersistentHeader extends lib4.RenderSliverFloatingPersistentHeader {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverFloatingPersistentHeader() {
    }
}

export namespace _SliverScrollingPersistentHeader {
    export type Constructors = _SliverPersistentHeaderRenderObjectWidget.Constructors | '_SliverScrollingPersistentHeader';
    export type Interface = Omit<_SliverScrollingPersistentHeader, Constructors>;
}
@DartClass
export class _SliverScrollingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverScrollingPersistentHeader(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        let {key,delegate} = Object.assign({
        }, _namedArguments );
        super._SliverPersistentHeaderRenderObjectWidget({
            key : key,delegate : delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : any {
        return _RenderSliverScrollingPersistentHeaderForWidgets();
    }
}

export namespace _RenderSliverScrollingPersistentHeaderForWidgets {
    export type Constructors = _RenderSliverScrollingPersistentHeader.Constructors | '_RenderSliverScrollingPersistentHeaderForWidgets';
    export type Interface = Omit<_RenderSliverScrollingPersistentHeaderForWidgets, Constructors>;
}
@DartClass
@With(any)
export class _RenderSliverScrollingPersistentHeaderForWidgets extends _RenderSliverScrollingPersistentHeader implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverScrollingPersistentHeaderForWidgets() {
    }
}

export namespace _SliverPinnedPersistentHeader {
    export type Constructors = _SliverPersistentHeaderRenderObjectWidget.Constructors | '_SliverPinnedPersistentHeader';
    export type Interface = Omit<_SliverPinnedPersistentHeader, Constructors>;
}
@DartClass
export class _SliverPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverPinnedPersistentHeader(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        let {key,delegate} = Object.assign({
        }, _namedArguments );
        super._SliverPersistentHeaderRenderObjectWidget({
            key : key,delegate : delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : any {
        return _RenderSliverPinnedPersistentHeaderForWidgets();
    }
}

export namespace _RenderSliverPinnedPersistentHeaderForWidgets {
    export type Constructors = _RenderSliverPinnedPersistentHeader.Constructors | '_RenderSliverPinnedPersistentHeaderForWidgets';
    export type Interface = Omit<_RenderSliverPinnedPersistentHeaderForWidgets, Constructors>;
}
@DartClass
@With(any)
export class _RenderSliverPinnedPersistentHeaderForWidgets extends _RenderSliverPinnedPersistentHeader implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverPinnedPersistentHeaderForWidgets() {
    }
}

export namespace _SliverFloatingPersistentHeader {
    export type Constructors = _SliverPersistentHeaderRenderObjectWidget.Constructors | '_SliverFloatingPersistentHeader';
    export type Interface = Omit<_SliverFloatingPersistentHeader, Constructors>;
}
@DartClass
export class _SliverFloatingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverFloatingPersistentHeader(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        let {key,delegate} = Object.assign({
        }, _namedArguments );
        super._SliverPersistentHeaderRenderObjectWidget({
            key : key,delegate : delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : any {
        return ((_) : any =>  {
            {
                _.snapConfiguration = lib8.properties.delegate.snapConfiguration;
                return _;
            }
        })(_RenderSliverFloatingPersistentHeaderForWidgets());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderSliverFloatingPersistentHeaderForWidgets) : any {
        renderObject.snapConfiguration = lib8.properties.delegate.snapConfiguration;
    }
}

export namespace _RenderSliverFloatingPinnedPersistentHeaderForWidgets {
    export type Constructors = _RenderSliverFloatingPinnedPersistentHeader.Constructors | '_RenderSliverFloatingPinnedPersistentHeaderForWidgets';
    export type Interface = Omit<_RenderSliverFloatingPinnedPersistentHeaderForWidgets, Constructors>;
}
@DartClass
@With(any)
export class _RenderSliverFloatingPinnedPersistentHeaderForWidgets extends _RenderSliverFloatingPinnedPersistentHeader implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverFloatingPinnedPersistentHeaderForWidgets() {
    }
}

export namespace _SliverFloatingPinnedPersistentHeader {
    export type Constructors = _SliverPersistentHeaderRenderObjectWidget.Constructors | '_SliverFloatingPinnedPersistentHeader';
    export type Interface = Omit<_SliverFloatingPinnedPersistentHeader, Constructors>;
}
@DartClass
export class _SliverFloatingPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverFloatingPinnedPersistentHeader(_namedArguments? : {key? : lib5.Key,delegate? : SliverPersistentHeaderDelegate}) {
        let {key,delegate} = Object.assign({
        }, _namedArguments );
        super._SliverPersistentHeaderRenderObjectWidget({
            key : key,delegate : delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : any {
        return ((_) : any =>  {
            {
                _.snapConfiguration = lib8.properties.delegate.snapConfiguration;
                return _;
            }
        })(_RenderSliverFloatingPinnedPersistentHeaderForWidgets());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderSliverFloatingPinnedPersistentHeaderForWidgets) : any {
        renderObject.snapConfiguration = lib8.properties.delegate.snapConfiguration;
    }
}

export namespace _RenderSliverFloatingPersistentHeaderForWidgets {
    export type Constructors = _RenderSliverFloatingPersistentHeader.Constructors | '_RenderSliverFloatingPersistentHeaderForWidgets';
    export type Interface = Omit<_RenderSliverFloatingPersistentHeaderForWidgets, Constructors>;
}
@DartClass
@With(any)
export class _RenderSliverFloatingPersistentHeaderForWidgets extends _RenderSliverFloatingPersistentHeader implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverFloatingPersistentHeaderForWidgets() {
    }
}

export class properties {
    private static __$_RenderSliverPersistentHeaderForWidgetsMixin : any;
    static get _RenderSliverPersistentHeaderForWidgetsMixin() : any { 
        return this.__$_RenderSliverPersistentHeaderForWidgetsMixin;
    }
    static set _RenderSliverPersistentHeaderForWidgetsMixin(__$value : any)  { 
        this.__$_RenderSliverPersistentHeaderForWidgetsMixin = __$value;
    }

}
