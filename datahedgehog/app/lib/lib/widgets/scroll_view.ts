/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_view.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "./scroll_controller";
import * as lib7 from "./scroll_physics";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib9 from "./basic";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";
import * as lib11 from "./viewport";
import * as lib12 from "./primary_scroll_controller";
import * as lib13 from "./scrollable";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib16 from "./media_query";
import * as lib17 from "./sliver";
import * as math from "@dart2ts/dart/math";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_grid";

export namespace ScrollView {
    export type Constructors = lib3.StatelessWidget.Constructors | 'ScrollView';
    export type Interface = Omit<ScrollView, Constructors>;
}
@DartClass
export class ScrollView extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,center? : lib4.Key,anchor? : double,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollView(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,center? : lib4.Key,anchor? : double,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,center,anchor,cacheExtent,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "anchor" : 0.0,
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        this.primary = (this.primary || op(Op.EQUALS,this.controller,null) && core.identical(this.scrollDirection,lib5.Axis.vertical));
        this.physics = (this.physics || (op(Op.EQUALS,this.primary,true) || (op(Op.EQUALS,this.primary,null) && op(Op.EQUALS,this.controller,null) && core.identical(this.scrollDirection,lib5.Axis.vertical)) ? new lib7.AlwaysScrollableScrollPhysics() : null));
        this.assert = assert;
        this.scrollDirection = scrollDirection;
        this.reverse = reverse;
        this.controller = controller;
        this.shrinkWrap = shrinkWrap;
        this.center = center;
        this.anchor = anchor;
        this.cacheExtent = cacheExtent;
        this.semanticChildCount = semanticChildCount;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

     : any;

    [null](controller : any, : any) {
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    primary;
    physics;
    super;

     : any;

     : any;

    scrollDirection : lib5.Axis;

    reverse : boolean;

    controller : lib6.ScrollController;

    primary : boolean;

    physics : lib7.ScrollPhysics;

    shrinkWrap : boolean;

    center : lib4.Key;

    anchor : double;

    cacheExtent : double;

    semanticChildCount : number;

    dragStartBehavior : lib8.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    getDirection(context : lib3.BuildContext) : lib5.AxisDirection {
        return lib9.getAxisDirectionFromAxisReverseAndDirectionality(context,this.scrollDirection,this.reverse);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    buildSlivers(context : lib3.BuildContext) : core.DartList<lib3.Widget>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    buildViewport(context : lib3.BuildContext,offset : lib10.ViewportOffset,axisDirection : lib5.AxisDirection,slivers : core.DartList<lib3.Widget>) : lib3.Widget {
        if (this.shrinkWrap) {
            return lib11.ShrinkWrappingViewport({
                axisDirection : axisDirection,offset : offset,slivers : slivers});
        }
        return lib11.Viewport({
            axisDirection : axisDirection,offset : offset,slivers : slivers,cacheExtent : this.cacheExtent,center : this.center,anchor : this.anchor});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let slivers : core.DartList<lib3.Widget> = this.buildSlivers(context);
        let axisDirection : lib5.AxisDirection = this.getDirection(context);
        let scrollController : lib6.ScrollController = this.primary ? lib12.PrimaryScrollController.of(context) : this.controller;
        let scrollable : lib13.Scrollable = lib13.Scrollable({
            dragStartBehavior : this.dragStartBehavior,axisDirection : axisDirection,controller : scrollController,physics : this.physics,semanticChildCount : this.semanticChildCount,viewportBuilder : (context : lib3.BuildContext,offset : lib10.ViewportOffset) =>  {
                return this.buildViewport(context,offset,axisDirection,slivers);
            }});
        return this.primary && scrollController != null ? lib12.PrimaryScrollController.none({
            child : scrollable}) : scrollable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.EnumProperty('scrollDirection',this.scrollDirection));
        properties.add(lib14.FlagProperty('reverse',{
            value : this.reverse,ifTrue : 'reversed',showName : true}));
        properties.add(lib14.DiagnosticsProperty('controller',this.controller,{
            showName : false,defaultValue : null}));
        properties.add(lib14.FlagProperty('primary',{
            value : this.primary,ifTrue : 'using primary controller',showName : true}));
        properties.add(lib14.DiagnosticsProperty('physics',this.physics,{
            showName : false,defaultValue : null}));
        properties.add(lib14.FlagProperty('shrinkWrap',{
            value : this.shrinkWrap,ifTrue : 'shrink-wrapping',showName : true}));
    }
}

export namespace CustomScrollView {
    export type Constructors = ScrollView.Constructors | 'CustomScrollView';
    export type Interface = Omit<CustomScrollView, Constructors>;
}
@DartClass
export class CustomScrollView extends ScrollView {
    constructor(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,center? : lib4.Key,anchor? : double,cacheExtent? : double,slivers? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CustomScrollView(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,center? : lib4.Key,anchor? : double,cacheExtent? : double,slivers? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,center,anchor,cacheExtent,slivers,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "anchor" : 0.0,
            "slivers" : new core.DartList.literal<lib3.Widget>(),
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        super.ScrollView({
            key : key,scrollDirection : scrollDirection,reverse : reverse,controller : controller,primary : primary,physics : physics,shrinkWrap : shrinkWrap,center : center,anchor : anchor,cacheExtent : cacheExtent,semanticChildCount : semanticChildCount,dragStartBehavior : dragStartBehavior});
        this.slivers = slivers;
    }
    slivers : core.DartList<lib3.Widget>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildSlivers(context : lib3.BuildContext) : core.DartList<lib3.Widget> {
        return this.slivers;
    }
}

export namespace BoxScrollView {
    export type Constructors = ScrollView.Constructors | 'BoxScrollView';
    export type Interface = Omit<BoxScrollView, Constructors>;
}
@DartClass
export class BoxScrollView extends ScrollView {
    constructor(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoxScrollView(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,cacheExtent,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        super.ScrollView({
            key : key,scrollDirection : scrollDirection,reverse : reverse,controller : controller,primary : primary,physics : physics,shrinkWrap : shrinkWrap,cacheExtent : cacheExtent,semanticChildCount : semanticChildCount,dragStartBehavior : dragStartBehavior});
        this.padding = padding;
    }
    padding : lib15.EdgeInsetsGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildSlivers(context : lib3.BuildContext) : core.DartList<lib3.Widget> {
        let sliver : lib3.Widget = this.buildChildLayout(context);
        let effectivePadding : lib15.EdgeInsetsGeometry = this.padding;
        if (op(Op.EQUALS,this.padding,null)) {
            let mediaQuery : lib16.MediaQueryData = lib16.MediaQuery.of(context,{
                nullOk : true});
            if (mediaQuery != null) {
                let mediaQueryHorizontalPadding : lib15.EdgeInsets = mediaQuery.padding.copyWith({
                    top : 0.0,bottom : 0.0});
                let mediaQueryVerticalPadding : lib15.EdgeInsets = mediaQuery.padding.copyWith({
                    left : 0.0,right : 0.0});
                effectivePadding = op(Op.EQUALS,this.scrollDirection,lib5.Axis.vertical) ? mediaQueryVerticalPadding : mediaQueryHorizontalPadding;
                sliver = lib16.MediaQuery({
                    data : mediaQuery.copyWith({
                        padding : op(Op.EQUALS,this.scrollDirection,lib5.Axis.vertical) ? mediaQueryHorizontalPadding : mediaQueryVerticalPadding}),child : sliver});
            }
        }
        if (effectivePadding != null) sliver = lib9.SliverPadding({
            padding : effectivePadding,sliver : sliver});
        return new core.DartList.literal<lib3.Widget>(sliver);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    buildChildLayout(context : lib3.BuildContext) : lib3.Widget{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DiagnosticsProperty('padding',this.padding,{
            defaultValue : null}));
    }
}

export namespace ListView {
    export type Constructors = BoxScrollView.Constructors | 'ListView' | 'builder' | 'separated' | 'custom';
    export type Interface = Omit<ListView, Constructors>;
}
@DartClass
export class ListView extends BoxScrollView {
    constructor(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemExtent? : any,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,children? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListView(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemExtent? : any,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,children? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,itemExtent,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,cacheExtent,children,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true,
            "children" : new core.DartList.literal<lib3.Widget>(),
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        this.itemExtent = null;
        this.childrenDelegate = lib17.SliverChildBuilderDelegate((context : lib3.BuildContext,index : number) =>  {
            let itemIndex : number = op(Op.QUOTIENT,index,2);
            let widget : lib3.Widget;
            if (new core.DartInt(index).isEven) {
                widget = itemBuilder(context,itemIndex);
            }else {
                widget = separatorBuilder(context,itemIndex);
                /* TODO (AssertStatementImpl) : assert (() {if (widget == null) {throw FlutterError('separatorBuilder cannot return null.');} return true;}()); */;
            }
            return widget;
        },{
            childCount : this._computeSemanticChildCount(itemCount),addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes,semanticIndexCallback : (_ : lib3.Widget,index : number) =>  {
                return new core.DartInt(index).isEven ? op(Op.QUOTIENT,index,2) : null;
            }});
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        super.BoxScrollView({
            key : key,scrollDirection : scrollDirection,reverse : reverse,controller : controller,primary : primary,physics : physics,shrinkWrap : shrinkWrap,padding : padding,cacheExtent : cacheExtent,semanticChildCount : (semanticChildCount || children.length),dragStartBehavior : dragStartBehavior});
        this.itemExtent = itemExtent;
    }
    @namedConstructor
    builder(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemExtent? : any,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,itemCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,itemExtent,itemBuilder,itemCount,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,cacheExtent,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true,
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        this.itemExtent = null;
        this.childrenDelegate = lib17.SliverChildBuilderDelegate((context : lib3.BuildContext,index : number) =>  {
            let itemIndex : number = op(Op.QUOTIENT,index,2);
            let widget : lib3.Widget;
            if (new core.DartInt(index).isEven) {
                widget = itemBuilder(context,itemIndex);
            }else {
                widget = separatorBuilder(context,itemIndex);
                /* TODO (AssertStatementImpl) : assert (() {if (widget == null) {throw FlutterError('separatorBuilder cannot return null.');} return true;}()); */;
            }
            return widget;
        },{
            childCount : this._computeSemanticChildCount(itemCount),addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes,semanticIndexCallback : (_ : lib3.Widget,index : number) =>  {
                return new core.DartInt(index).isEven ? op(Op.QUOTIENT,index,2) : null;
            }});
        this.childrenDelegate = lib17.SliverChildBuilderDelegate(itemBuilder,{
            childCount : itemCount,addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        super.BoxScrollView({
            key : key,scrollDirection : scrollDirection,reverse : reverse,controller : controller,primary : primary,physics : physics,shrinkWrap : shrinkWrap,padding : padding,cacheExtent : cacheExtent,semanticChildCount : (semanticChildCount || itemCount),dragStartBehavior : dragStartBehavior});
        this.itemExtent = itemExtent;
    }
    static builder : new(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemExtent? : any,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,itemCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) => ListView;

    @namedConstructor
    separated(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,separatorBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,itemCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,itemBuilder,separatorBuilder,itemCount,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,cacheExtent} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true}, _namedArguments );
        this.itemExtent = null;
        this.childrenDelegate = lib17.SliverChildBuilderDelegate((context : lib3.BuildContext,index : number) =>  {
            let itemIndex : number = op(Op.QUOTIENT,index,2);
            let widget : lib3.Widget;
            if (new core.DartInt(index).isEven) {
                widget = itemBuilder(context,itemIndex);
            }else {
                widget = separatorBuilder(context,itemIndex);
                /* TODO (AssertStatementImpl) : assert (() {if (widget == null) {throw FlutterError('separatorBuilder cannot return null.');} return true;}()); */;
            }
            return widget;
        },{
            childCount : this._computeSemanticChildCount(itemCount),addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes,semanticIndexCallback : (_ : lib3.Widget,index : number) =>  {
                return new core.DartInt(index).isEven ? op(Op.QUOTIENT,index,2) : null;
            }});
        this.assert = assert;
    }
    static separated : new(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,separatorBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,itemCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double}) => ListView;

     : any;

     : any;

     : any;

     : any;

    itemExtent;
    childrenDelegate;
    super;

     : any;

    key;
    scrollDirection;

    scrollDirection;
    reverse;

    reverse;
    controller;

    controller;
    primary;

    primary;
    physics;

    physics;
    shrinkWrap;

    shrinkWrap;
    padding;

    padding;
    cacheExtent;

    cacheExtent;
    semanticChildCount;

    _computeSemanticChildCount(itemCount : any) {
    }
    @namedConstructor
    custom(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemExtent? : any,childrenDelegate? : any,cacheExtent? : double,semanticChildCount? : number}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,itemExtent,childrenDelegate,cacheExtent,semanticChildCount} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false}, _namedArguments );
        this.itemExtent = null;
        this.childrenDelegate = lib17.SliverChildBuilderDelegate((context : lib3.BuildContext,index : number) =>  {
            let itemIndex : number = op(Op.QUOTIENT,index,2);
            let widget : lib3.Widget;
            if (new core.DartInt(index).isEven) {
                widget = itemBuilder(context,itemIndex);
            }else {
                widget = separatorBuilder(context,itemIndex);
                /* TODO (AssertStatementImpl) : assert (() {if (widget == null) {throw FlutterError('separatorBuilder cannot return null.');} return true;}()); */;
            }
            return widget;
        },{
            childCount : this._computeSemanticChildCount(itemCount),addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes,semanticIndexCallback : (_ : lib3.Widget,index : number) =>  {
                return new core.DartInt(index).isEven ? op(Op.QUOTIENT,index,2) : null;
            }});
        this.assert = assert;
        this.itemExtent = itemExtent;
        this.childrenDelegate = childrenDelegate;
    }
    static custom : new(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,itemExtent? : any,childrenDelegate? : any,cacheExtent? : double,semanticChildCount? : number}) => ListView;

     : any;

     : any;

    key;
    scrollDirection;

    scrollDirection;
    reverse;

    reverse;
    controller;

    controller;
    primary;

    primary;
    physics;

    physics;
    shrinkWrap;

    shrinkWrap;
    padding;

    padding;
    cacheExtent;

    cacheExtent;
    semanticChildCount;

    semanticChildCount;
    ;

    itemExtent : double;

    childrenDelegate : lib17.SliverChildDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildChildLayout(context : lib3.BuildContext) : lib3.Widget {
        if (this.itemExtent != null) {
            return lib17.SliverFixedExtentList({
                delegate : this.childrenDelegate,itemExtent : this.itemExtent});
        }
        return lib17.SliverList({
            delegate : this.childrenDelegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib14.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib14.DoubleProperty('itemExtent',this.itemExtent,{
            defaultValue : null}));
    }
    static _computeSemanticChildCount(itemCount : number) : number {
        return math.max(0,itemCount * 2 - 1);
    }
}

export namespace GridView {
    export type Constructors = BoxScrollView.Constructors | 'GridView' | 'builder' | 'custom' | 'count' | 'extent';
    export type Interface = Omit<GridView, Constructors>;
}
@DartClass
export class GridView extends BoxScrollView {
    constructor(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,gridDelegate? : lib19.SliverGridDelegate,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,children? : core.DartList<lib3.Widget>,semanticChildCount? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GridView(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,gridDelegate? : lib19.SliverGridDelegate,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,children? : core.DartList<lib3.Widget>,semanticChildCount? : number}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,gridDelegate,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,cacheExtent,children,semanticChildCount} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.childrenDelegate = lib17.SliverChildBuilderDelegate(itemBuilder,{
            childCount : this.itemCount,addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.assert = assert;
        this.gridDelegate = gridDelegate;
    }
     : any;

    childrenDelegate;
    super;

     : any;

    key;
    scrollDirection;

    scrollDirection;
    reverse;

    reverse;
    controller;

    controller;
    primary;

    primary;
    physics;

    physics;
    shrinkWrap;

    shrinkWrap;
    padding;

    padding;
    cacheExtent;

    cacheExtent;
    semanticChildCount;

     : any;

     : any;
     : any;

    @namedConstructor
    builder(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,gridDelegate? : lib19.SliverGridDelegate,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,itemCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,semanticChildCount? : number}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,gridDelegate,itemBuilder,itemCount,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,cacheExtent,semanticChildCount} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true}, _namedArguments );
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.childrenDelegate = lib17.SliverChildBuilderDelegate(itemBuilder,{
            childCount : this.itemCount,addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.assert = assert;
        this.gridDelegate = gridDelegate;
    }
    static builder : new(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,gridDelegate? : lib19.SliverGridDelegate,itemBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,itemCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,semanticChildCount? : number}) => GridView;

     : any;

    childrenDelegate;
    super;

     : any;

    key;
    scrollDirection;

    scrollDirection;
    reverse;

    reverse;
    controller;

    controller;
    primary;

    primary;
    physics;

    physics;
    shrinkWrap;

    shrinkWrap;
    padding;

    padding;
    cacheExtent;

    cacheExtent;
    semanticChildCount;

     : any;

    itemCount;
    ;

    @namedConstructor
    custom(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,gridDelegate? : lib19.SliverGridDelegate,childrenDelegate? : any,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,gridDelegate,childrenDelegate,cacheExtent,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.childrenDelegate = lib17.SliverChildBuilderDelegate(itemBuilder,{
            childCount : this.itemCount,addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.assert = assert;
        this.gridDelegate = gridDelegate;
        this.childrenDelegate = childrenDelegate;
    }
    static custom : new(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,gridDelegate? : lib19.SliverGridDelegate,childrenDelegate? : any,cacheExtent? : double,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) => GridView;

     : any;

     : any;

     : any;

    key;
    scrollDirection;

    scrollDirection;
    reverse;

    reverse;
    controller;

    controller;
    primary;

    primary;
    physics;

    physics;
    shrinkWrap;

    shrinkWrap;
    padding;

    padding;
    cacheExtent;

    cacheExtent;
    semanticChildCount;

    semanticChildCount;
    dragStartBehavior;

    dragStartBehavior;
    ;

    @namedConstructor
    count(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,crossAxisCount? : number,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,children? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,crossAxisCount,mainAxisSpacing,crossAxisSpacing,childAspectRatio,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,cacheExtent,children,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "mainAxisSpacing" : 0.0,
            "crossAxisSpacing" : 0.0,
            "childAspectRatio" : 1.0,
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true,
            "children" : new core.DartList.literal<lib3.Widget>(),
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.childrenDelegate = lib17.SliverChildBuilderDelegate(itemBuilder,{
            childCount : this.itemCount,addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.gridDelegate = lib19.SliverGridDelegateWithFixedCrossAxisCount({
            crossAxisCount : crossAxisCount,mainAxisSpacing : mainAxisSpacing,crossAxisSpacing : crossAxisSpacing,childAspectRatio : childAspectRatio});
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        super.BoxScrollView({
            key : key,scrollDirection : scrollDirection,reverse : reverse,controller : controller,primary : primary,physics : physics,shrinkWrap : shrinkWrap,padding : padding,cacheExtent : cacheExtent,semanticChildCount : (semanticChildCount || children.length),dragStartBehavior : dragStartBehavior});
    }
    static count : new(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,crossAxisCount? : number,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,cacheExtent? : double,children? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) => GridView;

    @namedConstructor
    extent(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,maxCrossAxisExtent? : double,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,children? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding,maxCrossAxisExtent,mainAxisSpacing,crossAxisSpacing,childAspectRatio,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,children,semanticChildCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false,
            "mainAxisSpacing" : 0.0,
            "crossAxisSpacing" : 0.0,
            "childAspectRatio" : 1.0,
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true,
            "children" : new core.DartList.literal<lib3.Widget>(),
            "dragStartBehavior" : lib8.DragStartBehavior.down}, _namedArguments );
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.childrenDelegate = lib17.SliverChildBuilderDelegate(itemBuilder,{
            childCount : this.itemCount,addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        this.gridDelegate = lib19.SliverGridDelegateWithMaxCrossAxisExtent({
            maxCrossAxisExtent : maxCrossAxisExtent,mainAxisSpacing : mainAxisSpacing,crossAxisSpacing : crossAxisSpacing,childAspectRatio : childAspectRatio});
        this.childrenDelegate = lib17.SliverChildListDelegate(children,{
            addAutomaticKeepAlives : addAutomaticKeepAlives,addRepaintBoundaries : addRepaintBoundaries,addSemanticIndexes : addSemanticIndexes});
        super.BoxScrollView({
            key : key,scrollDirection : scrollDirection,reverse : reverse,controller : controller,primary : primary,physics : physics,shrinkWrap : shrinkWrap,padding : padding,semanticChildCount : (semanticChildCount || children.length),dragStartBehavior : dragStartBehavior});
    }
    static extent : new(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,controller? : lib6.ScrollController,primary? : boolean,physics? : lib7.ScrollPhysics,shrinkWrap? : boolean,padding? : lib15.EdgeInsetsGeometry,maxCrossAxisExtent? : double,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,children? : core.DartList<lib3.Widget>,semanticChildCount? : number,dragStartBehavior? : lib8.DragStartBehavior}) => GridView;

    gridDelegate : lib19.SliverGridDelegate;

    childrenDelegate : lib17.SliverChildDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildChildLayout(context : lib3.BuildContext) : lib3.Widget {
        return lib17.SliverGrid({
            delegate : this.childrenDelegate,gridDelegate : this.gridDelegate});
    }
}

export class properties {
}
