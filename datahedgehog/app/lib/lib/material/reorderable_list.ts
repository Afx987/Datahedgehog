/** Library asset:datahedgehog_monitor/lib/lib/material/reorderable_list.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/overlay";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_controller";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/primary_scroll_controller";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/viewport";
import * as math from "@dart2ts/dart/math";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib20 from "./material_localizations";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib22 from "./material";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/widgets/drag_target";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/gestures/velocity_tracker";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/widgets/layout_builder";

export namespace ReorderableListView {
    export type Constructors = lib3.StatefulWidget.Constructors | 'ReorderableListView' | 'every';
    export type Interface = Omit<ReorderableListView, Constructors>;
}
@DartClass
export class ReorderableListView extends lib3.StatefulWidget {
    constructor(_namedArguments? : {header? : lib3.Widget,children? : core.DartList<lib3.Widget>,onReorder? : (oldIndex : number,newIndex : number) => any,scrollDirection? : lib4.Axis,padding? : lib5.EdgeInsets,reverse? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReorderableListView(_namedArguments? : {header? : lib3.Widget,children? : core.DartList<lib3.Widget>,onReorder? : (oldIndex : number,newIndex : number) => any,scrollDirection? : lib4.Axis,padding? : lib5.EdgeInsets,reverse? : boolean}) {
        let {header,children,onReorder,scrollDirection,padding,reverse} = Object.assign({
            "scrollDirection" : lib4.Axis.vertical,
            "reverse" : false}, _namedArguments );
        this.assert = assert;
        this.header = header;
        this.children = children;
        this.onReorder = onReorder;
        this.scrollDirection = scrollDirection;
        this.padding = padding;
        this.reverse = reverse;
    }
     : any;

     : any;

     : any;

    @namedConstructor
    every( : (w : lib3.Widget) => any, : any) {
        w.key != null;
    }
    static every : new( : any) => ReorderableListView;

    header : lib3.Widget;

    children : core.DartList<lib3.Widget>;

    scrollDirection : lib4.Axis;

    padding : lib5.EdgeInsets;

    reverse : boolean;

    onReorder : (oldIndex : number,newIndex : number) => any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ReorderableListViewState {
        return _ReorderableListViewState();
    }
}

export namespace _ReorderableListViewState {
    export type Constructors = '_ReorderableListViewState';
    export type Interface = Omit<_ReorderableListViewState, Constructors>;
}
@DartClass
export class _ReorderableListViewState extends any {
    _overlayKey : lib3.GlobalKey<any>;

    _listOverlayEntry : lib6.OverlayEntry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._listOverlayEntry = lib6.OverlayEntry({
            opaque : true,builder : (context : lib3.BuildContext) =>  {
                return _ReorderableListContent({
                    header : widget.header,children : widget.children,scrollDirection : widget.scrollDirection,onReorder : widget.onReorder,padding : widget.padding,reverse : widget.reverse});
            }});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib6.Overlay({
            key : this._overlayKey,initialEntries : new core.DartList.literal<lib6.OverlayEntry>(this._listOverlayEntry)});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ReorderableListViewState() {
        this._overlayKey = lib3.GlobalKey({
            debugLabel : `${ReorderableListView} overlay key`});
    }
}

export namespace _ReorderableListContent {
    export type Constructors = lib3.StatefulWidget.Constructors | '_ReorderableListContent';
    export type Interface = Omit<_ReorderableListContent, Constructors>;
}
@DartClass
export class _ReorderableListContent extends lib3.StatefulWidget {
    constructor(_namedArguments? : {header? : lib3.Widget,children? : core.DartList<lib3.Widget>,scrollDirection? : lib4.Axis,padding? : lib5.EdgeInsets,onReorder? : (oldIndex : number,newIndex : number) => any,reverse? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ReorderableListContent(_namedArguments? : {header? : lib3.Widget,children? : core.DartList<lib3.Widget>,scrollDirection? : lib4.Axis,padding? : lib5.EdgeInsets,onReorder? : (oldIndex : number,newIndex : number) => any,reverse? : boolean}) {
        let {header,children,scrollDirection,padding,onReorder,reverse} = Object.assign({
        }, _namedArguments );
        this.header = header;
        this.children = children;
        this.scrollDirection = scrollDirection;
        this.padding = padding;
        this.onReorder = onReorder;
        this.reverse = reverse;
    }
    header : lib3.Widget;

    children : core.DartList<lib3.Widget>;

    scrollDirection : lib4.Axis;

    padding : lib5.EdgeInsets;

    onReorder : (oldIndex : number,newIndex : number) => any;

    reverse : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ReorderableListContentState {
        return _ReorderableListContentState();
    }
}

export namespace _ReorderableListContentState {
    export type Constructors = '_ReorderableListContentState';
    export type Interface = Omit<_ReorderableListContentState, Constructors>;
}
@DartClass
@With(any)
export class _ReorderableListContentState extends any implements any.Interface {
    private static __$_defaultDropAreaExtent : double;
    static get _defaultDropAreaExtent() : double { 
        if (this.__$_defaultDropAreaExtent===undefined) {
            this.__$_defaultDropAreaExtent = 100.0;
        }
        return this.__$_defaultDropAreaExtent;
    }

    private static __$_dropAreaMargin : double;
    static get _dropAreaMargin() : double { 
        if (this.__$_dropAreaMargin===undefined) {
            this.__$_dropAreaMargin = 8.0;
        }
        return this.__$_dropAreaMargin;
    }

    private static __$_reorderAnimationDuration : core.DartDuration;
    static get _reorderAnimationDuration() : core.DartDuration { 
        if (this.__$_reorderAnimationDuration===undefined) {
            this.__$_reorderAnimationDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_reorderAnimationDuration;
    }

    private static __$_scrollAnimationDuration : core.DartDuration;
    static get _scrollAnimationDuration() : core.DartDuration { 
        if (this.__$_scrollAnimationDuration===undefined) {
            this.__$_scrollAnimationDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_scrollAnimationDuration;
    }

    _scrollController : lib7.ScrollController;

    _entranceController : lib8.AnimationController;

    _ghostController : lib8.AnimationController;

    _dragging : lib9.Key;

    _draggingFeedbackSize : any;

    _dragStartIndex : number;

    _ghostIndex : number;

    _currentIndex : number;

    _nextIndex : number;

    _scrolling : boolean;

    get _dropAreaExtent() : double {
        if (op(Op.EQUALS,this._draggingFeedbackSize,null)) {
            return _ReorderableListContentState._defaultDropAreaExtent;
        }
        let dropAreaWithoutMargin : double;
        switch (widget.scrollDirection) {
            case lib4.Axis.horizontal:
                dropAreaWithoutMargin = this._draggingFeedbackSize.width;
                break;
            case lib4.Axis.vertical:
            default:
                dropAreaWithoutMargin = this._draggingFeedbackSize.height;
                break;
        }
        return dropAreaWithoutMargin + _ReorderableListContentState._dropAreaMargin;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._entranceController = lib8.AnimationController({
            vsync : this,duration : _ReorderableListContentState._reorderAnimationDuration});
        this._ghostController = lib8.AnimationController({
            vsync : this,duration : _ReorderableListContentState._reorderAnimationDuration});
        this._entranceController.addStatusListener(this._onEntranceStatusChanged.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        this._scrollController = (lib11.PrimaryScrollController.of(lib10.properties.context) || lib7.ScrollController());
        super.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._entranceController.dispose();
        this._ghostController.dispose();
        super.dispose();
    }
    _requestAnimationToNextIndex() : any {
        if (this._entranceController.isCompleted) {
            this._ghostIndex = this._currentIndex;
            if (this._nextIndex == this._currentIndex) {
                return;
            }
            this._currentIndex = this._nextIndex;
            this._ghostController.reverse({
                from : 1.0});
            this._entranceController.forward({
                from : 0.0});
        }
    }
    _onEntranceStatusChanged(status : lib12.AnimationStatus) : any {
        if (op(Op.EQUALS,status,lib12.AnimationStatus.completed)) {
            setState(() =>  {
                this._requestAnimationToNextIndex();
            });
        }
    }
    _scrollTo(context : lib3.BuildContext) : any {
        if (this._scrolling) return;
        let contextObject : lib13.RenderObject = context.findRenderObject();
        let viewport : lib14.RenderAbstractViewport = lib14.RenderAbstractViewport.of(contextObject);
        /* TODO (AssertStatementImpl) : assert (viewport != null); */;
        let margin : double = this._dropAreaExtent;
        let scrollOffset : double = this._scrollController.offset;
        let topOffset : double = math.max(this._scrollController.position.minScrollExtent,viewport.getOffsetToReveal(contextObject,0.0).offset - margin);
        let bottomOffset : double = math.min(this._scrollController.position.maxScrollExtent,viewport.getOffsetToReveal(contextObject,1.0).offset + margin);
        let onScreen : boolean = scrollOffset <= topOffset && scrollOffset >= bottomOffset;
        if (!onScreen) {
            this._scrolling = true;
            this._scrollController.position.animateTo(scrollOffset < bottomOffset ? bottomOffset : topOffset,{
                duration : _ReorderableListContentState._scrollAnimationDuration,curve : lib16.Curves.easeInOut}).then((value : any) =>  {
                setState(() =>  {
                    this._scrolling = false;
                });
            });
        }
    }
    _buildContainerForScrollDirection(_namedArguments? : {children? : core.DartList<lib3.Widget>}) : lib3.Widget {
        let {children} = Object.assign({
        }, _namedArguments );
        switch (widget.scrollDirection) {
            case lib4.Axis.horizontal:
                return lib17.Row({
                    children : children});
            case lib4.Axis.vertical:
            default:
                return lib17.Column({
                    children : children});
        }
    }
    _wrap(toWrap : lib3.Widget,index : number,constraints : lib18.BoxConstraints) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (toWrap.key != null); */;
        let keyIndexGlobalKey : lib3.GlobalObjectKey<any> = lib3.GlobalObjectKey(toWrap.key);
        var onDragStarted : () => any = () : any =>  {
            setState(() =>  {
                this._dragging = toWrap.key;
                this._dragStartIndex = index;
                this._ghostIndex = index;
                this._currentIndex = index;
                this._entranceController.value = 1.0;
                this._draggingFeedbackSize = keyIndexGlobalKey.currentContext.size;
            });
        };
        var reorder : (startIndex : number,endIndex : number) => any = (startIndex : number,endIndex : number) : any =>  {
            setState(() =>  {
                if (startIndex != endIndex) widget.onReorder(startIndex,endIndex);
                this._ghostController.reverse({
                    from : 0.1});
                this._entranceController.reverse({
                    from : 0.1});
                this._dragging = null;
            });
        };
        var onDragEnded : () => any = () : any =>  {
            reorder(this._dragStartIndex,this._currentIndex);
        };
        var wrapWithSemantics : () => lib3.Widget = () : lib3.Widget =>  {
            let semanticsActions : core.DartMap<lib19.CustomSemanticsAction,any> = new core.DartMap.literal([
            ]);
            var moveToStart : () => any = () : any =>  {
                return reorder(index,0);
            };
            var moveToEnd : () => any = () : any =>  {
                return reorder(index,widget.children.length);
            };
            var moveBefore : () => any = () : any =>  {
                return reorder(index,index - 1);
            };
            var moveAfter : () => any = () : any =>  {
                return reorder(index,index + 2);
            };
            let localizations : lib20.MaterialLocalizations = lib20.MaterialLocalizations.of(lib10.properties.context);
            if (index > 0) {
                semanticsActions.set(lib19.CustomSemanticsAction({
                    label : localizations.reorderItemToStart}),moveToStart);
                let reorderItemBefore : string = localizations.reorderItemUp;
                if (op(Op.EQUALS,widget.scrollDirection,lib4.Axis.horizontal)) {
                    reorderItemBefore = op(Op.EQUALS,lib17.Directionality.of(lib10.properties.context),TextDirection.ltr) ? localizations.reorderItemLeft : localizations.reorderItemRight;
                }
                semanticsActions.set(lib19.CustomSemanticsAction({
                    label : reorderItemBefore}),moveBefore);
            }
            if (index < op(Op.MINUS,widget.children.length,1)) {
                let reorderItemAfter : string = localizations.reorderItemDown;
                if (op(Op.EQUALS,widget.scrollDirection,lib4.Axis.horizontal)) {
                    reorderItemAfter = op(Op.EQUALS,lib17.Directionality.of(lib10.properties.context),TextDirection.ltr) ? localizations.reorderItemRight : localizations.reorderItemLeft;
                }
                semanticsActions.set(lib19.CustomSemanticsAction({
                    label : reorderItemAfter}),moveAfter);
                semanticsActions.set(lib19.CustomSemanticsAction({
                    label : localizations.reorderItemToEnd}),moveToEnd);
            }
            return lib17.KeyedSubtree({
                key : keyIndexGlobalKey,child : lib17.MergeSemantics({
                    child : lib17.Semantics({
                        customSemanticsActions : semanticsActions,child : toWrap})})});
        };
        var buildDragTarget : (context : lib3.BuildContext,acceptedCandidates : core.DartList<lib9.Key>,rejectedCandidates : core.DartList<any>) => lib3.Widget = (context : lib3.BuildContext,acceptedCandidates : core.DartList<lib9.Key>,rejectedCandidates : core.DartList<any>) : lib3.Widget =>  {
            let toWrapWithSemantics : lib3.Widget = wrapWithSemantics();
            let child : lib3.Widget = lib24.LongPressDraggable({
                maxSimultaneousDrags : 1,axis : widget.scrollDirection,data : toWrap.key,ignoringFeedbackSemantics : false,feedback : lib23.Container({
                    alignment : lib21.Alignment.topLeft,constraints : constraints,child : lib22.Material({
                        elevation : 6.0,child : toWrapWithSemantics})}),child : op(Op.EQUALS,this._dragging,toWrap.key) ? new lib17.SizedBox() : toWrapWithSemantics,childWhenDragging : new lib17.SizedBox(),dragAnchor : lib24.DragAnchor.child,onDragStarted : onDragStarted,onDragCompleted : onDragEnded,onDraggableCanceled : (velocity : lib25.Velocity,offset : any) =>  {
                    onDragEnded();
                }});
            if (index >= widget.children.length) {
                child = toWrap;
            }
            let spacing : lib3.Widget;
            switch (widget.scrollDirection) {
                case lib4.Axis.horizontal:
                    spacing = lib17.SizedBox({
                        width : this._dropAreaExtent});
                    break;
                case lib4.Axis.vertical:
                default:
                    spacing = lib17.SizedBox({
                        height : this._dropAreaExtent});
                    break;
            }
            if (this._currentIndex == index) {
                return this._buildContainerForScrollDirection({
                    children : new core.DartList.literal<lib3.Widget>(lib26.SizeTransition({
                        sizeFactor : this._entranceController,axis : widget.scrollDirection,child : spacing}),child)});
            }
            if (this._ghostIndex == index) {
                return this._buildContainerForScrollDirection({
                    children : new core.DartList.literal<lib3.Widget>(lib26.SizeTransition({
                        sizeFactor : this._ghostController,axis : widget.scrollDirection,child : spacing}),child)});
            }
            return child;
        };
        return lib17.Builder({
            builder : (context : lib3.BuildContext) =>  {
                return lib24.DragTarget({
                    builder : buildDragTarget,onWillAccept : (toAccept : lib9.Key) =>  {
                        setState(() =>  {
                            this._nextIndex = index;
                            this._requestAnimationToNextIndex();
                        });
                        this._scrollTo(context);
                        return op(Op.EQUALS,this._dragging,toAccept) && toAccept != toWrap.key;
                    },onAccept : (accepted : lib9.Key) =>  {
                    },onLeave : (leaving : lib9.Key) =>  {
                    }});
            }});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        return lib28.LayoutBuilder({
            builder : (context : lib3.BuildContext,constraints : lib18.BoxConstraints) =>  {
                let wrappedChildren : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
                if (widget.header != null) {
                    wrappedChildren.add(widget.header);
                }
                for(let i : number = 0; i < widget.children.length; i += 1){
                    wrappedChildren.add(this._wrap(op(Op.INDEX,widget.children,i),i,constraints));
                }
                let endWidgetKey : lib9.Key = lib9.Key('DraggableList - End Widget');
                let finalDropArea : lib3.Widget;
                switch (widget.scrollDirection) {
                    case lib4.Axis.horizontal:
                        finalDropArea = lib17.SizedBox({
                            key : endWidgetKey,width : _ReorderableListContentState._defaultDropAreaExtent,height : constraints.maxHeight});
                        break;
                    case lib4.Axis.vertical:
                    default:
                        finalDropArea = lib17.SizedBox({
                            key : endWidgetKey,height : _ReorderableListContentState._defaultDropAreaExtent,width : constraints.maxWidth});
                        break;
                }
                if (widget.reverse) {
                    wrappedChildren.insert(0,this._wrap(finalDropArea,widget.children.length,constraints));
                }else {
                    wrappedChildren.add(this._wrap(finalDropArea,widget.children.length,constraints));
                }
                return lib27.SingleChildScrollView({
                    scrollDirection : widget.scrollDirection,child : this._buildContainerForScrollDirection({
                        children : wrappedChildren}),padding : widget.padding,controller : this._scrollController,reverse : widget.reverse});
            }});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ReorderableListContentState() {
        this._dragStartIndex = 0;
        this._ghostIndex = 0;
        this._currentIndex = 0;
        this._nextIndex = 0;
        this._scrolling = false;
    }
}

export class properties {
}
