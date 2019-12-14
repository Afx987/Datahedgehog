/** Library asset:datahedgehog_monitor/lib/lib/widgets/automatic_keep_alive.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib6 from "./notification_listener";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/scheduler/binding";
import * as lib8 from "./sliver";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var AutomaticKeepAliveClientMixin : <T extends lib3.StatefulWidget>() => any = <T extends lib3.StatefulWidget>() : any =>  {
};
export var State : <T>() => any = <T>() : any =>  {
    let _keepAliveHandle : KeepAliveHandle;
    var _ensureKeepAlive : () => any = () : any =>  {
        /* TODO (AssertStatementImpl) : assert (_keepAliveHandle == null); */;
        _keepAliveHandle = KeepAliveHandle();
        KeepAliveNotification(_keepAliveHandle).dispatch(context);
    };
    var _releaseKeepAlive : () => any = () : any =>  {
        _keepAliveHandle.release();
        _keepAliveHandle = null;
    };
    boolean;
    let wantKeepAlive : any;
    var updateKeepAlive : () => any = () : any =>  {
        if (wantKeepAlive) {
            if (op(Op.EQUALS,_keepAliveHandle,null)) _ensureKeepAlive();
        }else {
            if (_keepAliveHandle != null) _releaseKeepAlive();
        }
    };
    var initState : () => any = () : any =>  {
        super.initState();
        if (wantKeepAlive) _ensureKeepAlive();
    };
    var deactivate : () => any = () : any =>  {
        if (_keepAliveHandle != null) _releaseKeepAlive();
        super.deactivate();
    };
    var build : (context : lib3.BuildContext) => lib3.Widget = (context : lib3.BuildContext) : lib3.Widget =>  {
        if (wantKeepAlive && op(Op.EQUALS,_keepAliveHandle,null)) _ensureKeepAlive();
        return null;
    };
};
export namespace AutomaticKeepAlive {
    export type Constructors = lib3.StatefulWidget.Constructors | 'AutomaticKeepAlive';
    export type Interface = Omit<AutomaticKeepAlive, Constructors>;
}
@DartClass
export class AutomaticKeepAlive extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AutomaticKeepAlive(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.child = child;
    }
    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AutomaticKeepAliveState {
        return _AutomaticKeepAliveState();
    }
}

export namespace _AutomaticKeepAliveState {
    export type Constructors = '_AutomaticKeepAliveState';
    export type Interface = Omit<_AutomaticKeepAliveState, Constructors>;
}
@DartClass
export class _AutomaticKeepAliveState extends any {
    _handles : core.DartMap<lib5.Listenable,any>;

    _child : lib3.Widget;

    _keepingAlive : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._updateChild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : AutomaticKeepAlive) : any {
        super.didUpdateWidget(oldWidget);
        this._updateChild();
    }
    _updateChild() : any {
        this._child = lib6.NotificationListener({
            onNotification : this._addClient.bind(this),child : widget.child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        if (this._handles != null) {
            for(let handle of this._handles.keys) handle.removeListener(this._handles.get(handle));
        }
        super.dispose();
    }
    _addClient(notification : KeepAliveNotification) : boolean {
        let handle : lib5.Listenable = notification.handle;
        this._handles = ( this._handles ) || ( new core.DartMap.literal([
        ]) );
        /* TODO (AssertStatementImpl) : assert (!_handles.containsKey(handle)); */;
        this._handles.set(handle,this._createCallback(handle));
        handle.addListener(this._handles.get(handle));
        if (!this._keepingAlive) {
            this._keepingAlive = true;
            let childElement : lib3.ParentDataElement<lib8.SliverWithKeepAliveWidget> = this._getChildElement();
            if (childElement != null) {
                this._updateParentDataOfChild(childElement);
            }else {
                lib7.properties.SchedulerBinding.instance.addPostFrameCallback((timeStamp : core.DartDuration) =>  {
                    if (!mounted) {
                        return;
                    }
                    let childElement : lib3.ParentDataElement<lib8.SliverWithKeepAliveWidget> = this._getChildElement();
                    /* TODO (AssertStatementImpl) : assert (childElement != null); */;
                    this._updateParentDataOfChild(childElement);
                });
            }
        }
        return false;
    }
    _getChildElement() : lib3.ParentDataElement<lib8.SliverWithKeepAliveWidget> {
        /* TODO (AssertStatementImpl) : assert (mounted); */;
        let element : lib3.Element = context;
        let childElement : lib3.Element;
        element.visitChildren((child : lib3.Element) =>  {
            childElement = child;
        });
        /* TODO (AssertStatementImpl) : assert (childElement == null || childElement is ParentDataElement<SliverWithKeepAliveWidget>); */;
        return childElement;
    }
    _updateParentDataOfChild(childElement : lib3.ParentDataElement<lib8.SliverWithKeepAliveWidget>) : any {
        childElement.applyWidgetOutOfTurn(this.build(context));
    }
    _createCallback(handle : lib5.Listenable) : any {
        return () =>  {
            /* TODO (AssertStatementImpl) : assert (() {if (!mounted) {throw FlutterError('AutomaticKeepAlive handle triggered after AutomaticKeepAlive was disposed.' 'Widgets should always trigger their KeepAliveNotification handle when they are ' 'deactivated, so that they (or their handle) do not send spurious events later ' 'when they are no longer in the tree.');} return true;}()); */;
            this._handles.remove(handle);
            if (this._handles.isEmpty) {
                if (op(Op.LT,lib7.properties.SchedulerBinding.instance.schedulerPhase.index,lib7.SchedulerPhase.persistentCallbacks.index)) {
                    setState(() =>  {
                        this._keepingAlive = false;
                    });
                }else {
                    this._keepingAlive = false;
                    async.scheduleMicrotask(() =>  {
                        if (mounted && this._handles.isEmpty) {
                            setState(() =>  {
                                /* TODO (AssertStatementImpl) : assert (!_keepingAlive); */;
                            });
                        }
                    });
                }
            }
        };
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (_child != null); */;
        return lib8.KeepAlive({
            keepAlive : this._keepingAlive,child : this._child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib9.FlagProperty('_keepingAlive',{
            value : this._keepingAlive,ifTrue : 'keeping subtree alive'}));
        description.add(lib9.DiagnosticsProperty('handles',this._handles,{
            description : this._handles != null ? `${this._handles.length} active client${this._handles.length == 1 ? "" : "s"}` : null,ifNull : 'no notifications ever received'}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AutomaticKeepAliveState() {
        this._keepingAlive = false;
    }
}

export namespace KeepAliveNotification {
    export type Constructors = lib6.Notification.Constructors | 'KeepAliveNotification';
    export type Interface = Omit<KeepAliveNotification, Constructors>;
}
@DartClass
export class KeepAliveNotification extends lib6.Notification {
    constructor(handle : lib5.Listenable) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeepAliveNotification(handle : lib5.Listenable) {
        this.assert = assert;
        this.handle = handle;
    }
     : any;

    handle : lib5.Listenable;

}

export namespace KeepAliveHandle {
    export type Constructors = lib5.ChangeNotifier.Constructors | 'KeepAliveHandle';
    export type Interface = Omit<KeepAliveHandle, Constructors>;
}
@DartClass
export class KeepAliveHandle extends lib5.ChangeNotifier {
    release() : any {
        this.notifyListeners();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeepAliveHandle() {
    }
}

export class properties {
}
