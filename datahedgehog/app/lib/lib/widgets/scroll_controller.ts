/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_controller.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "./scroll_position";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib6 from "./scroll_physics";
import * as lib7 from "./scroll_context";
import * as lib8 from "./scroll_position_with_single_context";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace ScrollController {
    export type Constructors = lib3.ChangeNotifier.Constructors | 'ScrollController';
    export type Interface = Omit<ScrollController, Constructors>;
}
@DartClass
export class ScrollController extends lib3.ChangeNotifier {
    constructor(_namedArguments? : {initialScrollOffset? : double,keepScrollOffset? : boolean,debugLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollController(_namedArguments? : {initialScrollOffset? : double,keepScrollOffset? : boolean,debugLabel? : string}) {
        let {initialScrollOffset,keepScrollOffset,debugLabel} = Object.assign({
            "initialScrollOffset" : 0.0,
            "keepScrollOffset" : true}, _namedArguments );
        this._initialScrollOffset = this.initialScrollOffset;
        this._positions = new core.DartList.literal<lib4.ScrollPosition>();
        this.assert = assert;
        this.keepScrollOffset = keepScrollOffset;
        this.debugLabel = debugLabel;
    }
     : any;

     : any;

    _initialScrollOffset;

    get initialScrollOffset() : double {
        return this._initialScrollOffset;
    }
    _initialScrollOffset : double;

    keepScrollOffset : boolean;

    debugLabel : string;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get positions() : core.DartIterable<lib4.ScrollPosition> {
        return this._positions;
    }
    _positions : core.DartList<lib4.ScrollPosition>;

    get hasClients() : boolean {
        return this._positions.isNotEmpty;
    }
    get position() : lib4.ScrollPosition {
        /* TODO (AssertStatementImpl) : assert (_positions.isNotEmpty, 'ScrollController not attached to any scroll views.'); */;
        /* TODO (AssertStatementImpl) : assert (_positions.length == 1, 'ScrollController attached to multiple scroll views.'); */;
        return this._positions.single;
    }
    get offset() : double {
        return this.position.pixels;
    }
    void : async.Future<any>;

    animateTo(offset : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib5.Curve}) {
        let {duration,curve} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (_positions.isNotEmpty, 'ScrollController not attached to any scroll views.'); */;
        let List;
        new core.DartList.literal<async.Future<any>>();
        /* TODO (EmptyStatementImpl) : ; */;
        op(Op.SHIFTRIGHT,,animations);
        new core.DartList.literal<any>();
        /* TODO (EmptyStatementImpl) : ; */;
        op(Op.SHIFTRIGHT,,(this._positions.length));
        for(let i : number = 0; i < this._positions.length; i += 1)op(Op.INDEX_ASSIGN,animations,i,this._positions[i].animateTo(offset,{
            duration : duration,curve : curve}));
        return op(Op.LT,async.Future.wait.bind(async.Future),);
        op(Op.GT,,(animations).then);
        new core.DartList.literal<any>();
        /* TODO (EmptyStatementImpl) : ; */;
        op(Op.GT,,(op(Op.GT,(op(Op.LT,List,)),_)));
        null;
    }
    jumpTo(value : double) : any {
        /* TODO (AssertStatementImpl) : assert (_positions.isNotEmpty, 'ScrollController not attached to any scroll views.'); */;
        for(let position of op(Op.LT,core.DartList<E>,lib4.ScrollPosition)) op(Op.GT,,.from(this._positions));
        this.position.jumpTo(value);
    }
    attach(position : lib4.ScrollPosition) : any {
        /* TODO (AssertStatementImpl) : assert (!_positions.contains(position)); */;
        this._positions.add(position);
        position.addListener(lib4.notifyListeners);
    }
    detach(position : lib4.ScrollPosition) : any {
        /* TODO (AssertStatementImpl) : assert (_positions.contains(position)); */;
        position.removeListener(lib4.notifyListeners);
        this._positions.remove(position);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let position of this._positions) position.removeListener(lib4.notifyListeners);
        super.dispose();
    }
    createScrollPosition(physics : lib6.ScrollPhysics,context : lib7.ScrollContext,oldPosition : lib4.ScrollPosition) : lib4.ScrollPosition {
        return lib8.ScrollPositionWithSingleContext({
            physics : physics,context : context,initialPixels : this.initialScrollOffset,keepScrollOffset : this.keepScrollOffset,oldPosition : oldPosition,debugLabel : this.debugLabel});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let description : core.DartList<string> = new core.DartList.literal<string>();
        this.debugFillDescription(description);
        return `${lib9.describeIdentity(this)}(${description.join(", ")})`;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        if (this.debugLabel != null) description.add(this.debugLabel);
        if (this.initialScrollOffset != 0.0) description.add(`initialScrollOffset: ${new core.DartDouble(this.initialScrollOffset).toStringAsFixed(1)}, `);
        if (this._positions.isEmpty) {
            description.add('no clients');
        }else if (this._positions.length == 1) {
            description.add(`one client, offset ${((_958_)=>(!!_958_)?new core.DartDouble(_958_).toStringAsFixed(1):null)(this.offset)}`);
        }else {
            description.add(`${this._positions.length} clients`);
        }
    }
}

export namespace TrackingScrollController {
    export type Constructors = ScrollController.Constructors | 'TrackingScrollController';
    export type Interface = Omit<TrackingScrollController, Constructors>;
}
@DartClass
export class TrackingScrollController extends ScrollController {
    constructor(_namedArguments? : {initialScrollOffset? : double,keepScrollOffset? : boolean,debugLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TrackingScrollController(_namedArguments? : {initialScrollOffset? : double,keepScrollOffset? : boolean,debugLabel? : string}) {
        let {initialScrollOffset,keepScrollOffset,debugLabel} = Object.assign({
            "initialScrollOffset" : 0.0,
            "keepScrollOffset" : true}, _namedArguments );
        this._positionToListener = new core.DartMap.literal([
        ]);
        super.ScrollController({
            initialScrollOffset : initialScrollOffset,keepScrollOffset : keepScrollOffset,debugLabel : debugLabel});
    }
    _positionToListener : core.DartMap<lib4.ScrollPosition,any>;

    _lastUpdated : lib4.ScrollPosition;

    _lastUpdatedOffset : double;

    get mostRecentlyUpdatedPosition() : lib4.ScrollPosition {
        return this._lastUpdated;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initialScrollOffset() : double {
        return (this._lastUpdatedOffset || super.initialScrollOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(position : lib4.ScrollPosition) : any {
        super.attach(position);
        /* TODO (AssertStatementImpl) : assert (!_positionToListener.containsKey(position)); */;
        this._positionToListener.set(position,() =>  {
            this._lastUpdated = position;
            this._lastUpdatedOffset = position.pixels;
        });
        position.addListener(this._positionToListener.get(position));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach(position : lib4.ScrollPosition) : any {
        super.detach(position);
        /* TODO (AssertStatementImpl) : assert (_positionToListener.containsKey(position)); */;
        position.removeListener(this._positionToListener.get(position));
        this._positionToListener.remove(position);
        if (op(Op.EQUALS,this._lastUpdated,position)) this._lastUpdated = null;
        if (this._positionToListener.isEmpty) this._lastUpdatedOffset = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let position of this.positions) {
            /* TODO (AssertStatementImpl) : assert (_positionToListener.containsKey(position)); */;
            position.removeListener(this._positionToListener.get(position));
        }
        super.dispose();
    }
}

export class properties {
}
