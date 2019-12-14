/** Library asset:datahedgehog_monitor/lib/lib/widgets/animated_switcher.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib5 from "./framework";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib9 from "./transitions";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib11 from "./basic";
import * as collection from "@dart2ts/dart/core";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/animations";

export namespace _ChildEntry {
    export type Constructors = '_ChildEntry';
    export type Interface = Omit<_ChildEntry, Constructors>;
}
@DartClass
export class _ChildEntry {
    constructor(_namedArguments? : {controller? : lib3.AnimationController,animation? : lib4.Animation<double>,transition? : lib5.Widget,widgetChild? : lib5.Widget}) {
    }
    @defaultConstructor
    _ChildEntry(_namedArguments? : {controller? : lib3.AnimationController,animation? : lib4.Animation<double>,transition? : lib5.Widget,widgetChild? : lib5.Widget}) {
        let {controller,animation,transition,widgetChild} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.controller = controller;
        this.animation = animation;
        this.transition = transition;
        this.widgetChild = widgetChild;
    }
     : any;

     : any;

     : any;

    controller : lib3.AnimationController;

    animation : lib4.Animation<double>;

    transition : lib5.Widget;

    widgetChild : lib5.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Entry#${lib6.shortHash(this)}(${this.widgetChild})`;
    }
}

export namespace AnimatedSwitcher {
    export type Constructors = lib5.StatefulWidget.Constructors | 'AnimatedSwitcher';
    export type Interface = Omit<AnimatedSwitcher, Constructors>;
}
@DartClass
export class AnimatedSwitcher extends lib5.StatefulWidget {
    constructor(_namedArguments? : {key? : lib7.Key,child? : lib5.Widget,duration? : core.DartDuration,switchInCurve? : lib8.Curve,switchOutCurve? : lib8.Curve,transitionBuilder? : (child : lib5.Widget,animation : lib4.Animation<double>) => lib5.Widget,layoutBuilder? : (currentChild : lib5.Widget,previousChildren : core.DartList<lib5.Widget>) => lib5.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedSwitcher(_namedArguments? : {key? : lib7.Key,child? : lib5.Widget,duration? : core.DartDuration,switchInCurve? : lib8.Curve,switchOutCurve? : lib8.Curve,transitionBuilder? : (child : lib5.Widget,animation : lib4.Animation<double>) => lib5.Widget,layoutBuilder? : (currentChild : lib5.Widget,previousChildren : core.DartList<lib5.Widget>) => lib5.Widget}) {
        let {key,child,duration,switchInCurve,switchOutCurve,transitionBuilder,layoutBuilder} = Object.assign({
            "switchInCurve" : lib8.Curves.linear,
            "switchOutCurve" : lib8.Curves.linear,
            "transitionBuilder" : AnimatedSwitcher.defaultTransitionBuilder.bind(AnimatedSwitcher),
            "layoutBuilder" : AnimatedSwitcher.defaultLayoutBuilder.bind(AnimatedSwitcher)}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.duration = duration;
        this.switchInCurve = switchInCurve;
        this.switchOutCurve = switchOutCurve;
        this.transitionBuilder = transitionBuilder;
        this.layoutBuilder = layoutBuilder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib5.Widget;

    duration : core.DartDuration;

    switchInCurve : lib8.Curve;

    switchOutCurve : lib8.Curve;

    transitionBuilder : (child : lib5.Widget,animation : lib4.Animation<double>) => lib5.Widget;

    layoutBuilder : (currentChild : lib5.Widget,previousChildren : core.DartList<lib5.Widget>) => lib5.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedSwitcherState {
        return _AnimatedSwitcherState();
    }
    static defaultTransitionBuilder(child : lib5.Widget,animation : lib4.Animation<double>) : lib5.Widget {
        return lib9.FadeTransition({
            opacity : animation,child : child});
    }
    static defaultLayoutBuilder(currentChild : lib5.Widget,previousChildren : core.DartList<lib5.Widget>) : lib5.Widget {
        let children : core.DartList<lib5.Widget> = previousChildren;
        if (currentChild != null) children = ((_) : core.DartList<lib5.Widget> =>  {
            {
                _.add(currentChild);
                return _;
            }
        })(children.toList());
        return lib11.Stack({
            children : children,alignment : lib10.Alignment.center});
    }
}

export namespace _AnimatedSwitcherState {
    export type Constructors = '_AnimatedSwitcherState';
    export type Interface = Omit<_AnimatedSwitcherState, Constructors>;
}
@DartClass
@With(any)
export class _AnimatedSwitcherState extends any implements any.Interface {
    _currentEntry : _ChildEntry;

    _outgoingEntries : core.DartSet<_ChildEntry>;

    _outgoingWidgets : core.DartList<lib5.Widget>;

    _childNumber : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._addEntryForNewChild({
            animate : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : AnimatedSwitcher) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.transitionBuilder != oldWidget.transitionBuilder) {
            this._outgoingEntries.forEach(this._updateTransitionForEntry.bind(this));
            if (this._currentEntry != null) this._updateTransitionForEntry(this._currentEntry);
            this._markChildWidgetCacheAsDirty();
        }
        let hasNewChild : boolean = widget.child != null;
        let hasOldChild : boolean = this._currentEntry != null;
        if (hasNewChild != hasOldChild || hasNewChild && !lib5.Widget.canUpdate(widget.child,this._currentEntry.widgetChild)) {
            this._childNumber += 1;
            this._addEntryForNewChild({
                animate : true});
        }else if (this._currentEntry != null) {
            /* TODO (AssertStatementImpl) : assert (hasOldChild && hasNewChild); */;
            /* TODO (AssertStatementImpl) : assert (Widget.canUpdate(widget.child, _currentEntry.widgetChild)); */;
            this._currentEntry.widgetChild = widget.child;
            this._updateTransitionForEntry(this._currentEntry);
            this._markChildWidgetCacheAsDirty();
        }
    }
    _addEntryForNewChild(_namedArguments? : {animate? : boolean}) : any {
        let {animate} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (animate || _currentEntry == null); */;
        if (this._currentEntry != null) {
            /* TODO (AssertStatementImpl) : assert (animate); */;
            /* TODO (AssertStatementImpl) : assert (!_outgoingEntries.contains(_currentEntry)); */;
            this._outgoingEntries.add(this._currentEntry);
            this._currentEntry.controller.reverse();
            this._markChildWidgetCacheAsDirty();
            this._currentEntry = null;
        }
        if (op(Op.EQUALS,widget.child,null)) return;
        let controller : lib3.AnimationController = lib3.AnimationController({
            duration : widget.duration,vsync : this});
        let animation : lib4.Animation<double> = lib13.CurvedAnimation({
            parent : controller,curve : widget.switchInCurve,reverseCurve : widget.switchOutCurve});
        this._currentEntry = this._newEntry({
            child : widget.child,controller : controller,animation : animation,builder : widget.transitionBuilder});
        if (animate) {
            controller.forward();
        }else {
            /* TODO (AssertStatementImpl) : assert (_outgoingEntries.isEmpty); */;
            controller.value = 1.0;
        }
    }
    _newEntry(_namedArguments? : {child? : lib5.Widget,builder? : (child : lib5.Widget,animation : lib4.Animation<double>) => lib5.Widget,controller? : lib3.AnimationController,animation? : lib4.Animation<double>}) : _ChildEntry {
        let {child,builder,controller,animation} = Object.assign({
        }, _namedArguments );
        let entry : _ChildEntry = _ChildEntry({
            widgetChild : child,transition : lib11.KeyedSubtree.wrap(builder(child,animation),this._childNumber),animation : animation,controller : controller});
        animation.addStatusListener((status : lib4.AnimationStatus) =>  {
            if (op(Op.EQUALS,status,lib4.AnimationStatus.dismissed)) {
                setState(() =>  {
                    /* TODO (AssertStatementImpl) : assert (mounted); */;
                    /* TODO (AssertStatementImpl) : assert (_outgoingEntries.contains(entry)); */;
                    this._outgoingEntries.remove(entry);
                    this._markChildWidgetCacheAsDirty();
                });
                controller.dispose();
            }
        });
        return entry;
    }
    _markChildWidgetCacheAsDirty() : any {
        this._outgoingWidgets = null;
    }
    _updateTransitionForEntry(entry : _ChildEntry) : any {
        entry.transition = lib11.KeyedSubtree({
            key : entry.transition.key,child : widget.transitionBuilder(entry.widgetChild,entry.animation)});
    }
    _rebuildOutgoingWidgetsIfNeeded() : any {
        this._outgoingWidgets = ( this._outgoingWidgets ) || ( op(Op.LT,core.DartList<E>,lib5.Widget) );
        op(Op.GT,,.unmodifiable(this._outgoingEntries.map((entry : _ChildEntry) =>  {
            return entry.transition;
        })));
        /* TODO (AssertStatementImpl) : assert (_outgoingEntries.length == _outgoingWidgets.length); */;
        /* TODO (AssertStatementImpl) : assert (_outgoingEntries.isEmpty || _outgoingEntries.last.transition == _outgoingWidgets.last); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        if (this._currentEntry != null) this._currentEntry.controller.dispose();
        for(let entry of this._outgoingEntries) entry.controller.dispose();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib5.BuildContext) : lib5.Widget {
        this._rebuildOutgoingWidgetsIfNeeded();
        return widget.layoutBuilder(((t)=>(!!t)?t.transition:null)(this._currentEntry),this._outgoingWidgets);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedSwitcherState() {
        this._outgoingEntries = core.DartLinkedHashSet();
        this._outgoingWidgets = new core.DartList.literal<lib5.Widget>();
        this._childNumber = 0;
    }
}

export class properties {
}
