/** Library asset:datahedgehog_monitor/lib/lib/gestures/team.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./arena";
import * as lib4 from "./binding";

export namespace _CombiningGestureArenaEntry {
    export type Constructors = '_CombiningGestureArenaEntry';
    export type Interface = Omit<_CombiningGestureArenaEntry, Constructors>;
}
@DartClass
@Implements(lib3.GestureArenaEntry)
export class _CombiningGestureArenaEntry implements lib3.GestureArenaEntry.Interface {
    constructor(_combiner : _CombiningGestureArenaMember,_member : lib3.GestureArenaMember) {
    }
    @defaultConstructor
    _CombiningGestureArenaEntry(_combiner : _CombiningGestureArenaMember,_member : lib3.GestureArenaMember) {
        this._combiner = _combiner;
        this._member = _member;
    }
    _combiner : _CombiningGestureArenaMember;

    _member : lib3.GestureArenaMember;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(disposition : lib3.GestureDisposition) : any {
        this._combiner._resolve(this._member,disposition);
    }
}

export namespace _CombiningGestureArenaMember {
    export type Constructors = lib3.GestureArenaMember.Constructors | '_CombiningGestureArenaMember';
    export type Interface = Omit<_CombiningGestureArenaMember, Constructors>;
}
@DartClass
export class _CombiningGestureArenaMember extends lib3.GestureArenaMember {
    constructor(_owner : GestureArenaTeam,_pointer : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CombiningGestureArenaMember(_owner : GestureArenaTeam,_pointer : number) {
        this._members = new core.DartList.literal<lib3.GestureArenaMember>();
        this._resolved = false;
        this._owner = _owner;
        this._pointer = _pointer;
    }
    _owner : GestureArenaTeam;

    _members : core.DartList<lib3.GestureArenaMember>;

    _pointer : number;

    _resolved : boolean;

    _winner : lib3.GestureArenaMember;

    _entry : lib3.GestureArenaEntry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (_pointer == pointer); */;
        /* TODO (AssertStatementImpl) : assert (_winner != null || _members.isNotEmpty); */;
        this._close();
        this._winner = ( this._winner ) || ( (this._owner.captain || this._members[0]) );
        for(let member of this._members) {
            if (member != this._winner) member.rejectGesture(pointer);
        }
        this._winner.acceptGesture(pointer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (_pointer == pointer); */;
        this._close();
        for(let member of this._members) member.rejectGesture(pointer);
    }
    _close() : any {
        /* TODO (AssertStatementImpl) : assert (!_resolved); */;
        this._resolved = true;
        let combiner : _CombiningGestureArenaMember = this._owner._combiners.remove(this._pointer);
        /* TODO (AssertStatementImpl) : assert (combiner == this); */;
    }
    _add(pointer : number,member : lib3.GestureArenaMember) : lib3.GestureArenaEntry {
        /* TODO (AssertStatementImpl) : assert (!_resolved); */;
        /* TODO (AssertStatementImpl) : assert (_pointer == pointer); */;
        this._members.add(member);
        this._entry = ( this._entry ) || ( lib4.properties.GestureBinding.instance.gestureArena.add(pointer,this) );
        return _CombiningGestureArenaEntry(this,member);
    }
    _resolve(member : lib3.GestureArenaMember,disposition : lib3.GestureDisposition) : any {
        if (this._resolved) return;
        if (op(Op.EQUALS,disposition,lib3.GestureDisposition.rejected)) {
            this._members.remove(member);
            member.rejectGesture(this._pointer);
            if (this._members.isEmpty) this._entry.resolve(disposition);
        }else {
            /* TODO (AssertStatementImpl) : assert (disposition == GestureDisposition.accepted); */;
            this._winner = ( this._winner ) || ( (this._owner.captain || member) );
            this._entry.resolve(disposition);
        }
    }
}

export namespace GestureArenaTeam {
    export type Constructors = 'GestureArenaTeam';
    export type Interface = Omit<GestureArenaTeam, Constructors>;
}
@DartClass
export class GestureArenaTeam {
    _combiners : core.DartMap<number,_CombiningGestureArenaMember>;

    captain : lib3.GestureArenaMember;

    add(pointer : number,member : lib3.GestureArenaMember) : lib3.GestureArenaEntry {
        let combiner : _CombiningGestureArenaMember = this._combiners.putIfAbsent(pointer,() =>  {
            return _CombiningGestureArenaMember(this,pointer);
        });
        return combiner._add(pointer,member);
    }
    constructor() {
    }
    @defaultConstructor
    GestureArenaTeam() {
        this._combiners = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
